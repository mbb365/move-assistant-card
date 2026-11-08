const jp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', zp = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.075;background-image:linear-gradient(180deg,#ffffff0f,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 6%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 7%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon){--chip-hi:.275}`, Vp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Gp = `<main id="app"><div class="shell">
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
`, dn = {
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
}, ln = (n) => n < 0 ? 0 : n > 1 ? 1 : n, fc = (n, d, i) => n + (d - n) * i, Gd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((p) => p + p).join("") : d;
  return [0, 2, 4].map((p) => parseInt(i.slice(p, p + 2), 16) || 0);
}, Up = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), hc = {}, Je = (n, d, i) => {
  const p = n + d + i;
  return hc[p] || (hc[p] = Up(Gd(n).map((m, b) => m + (Gd(d)[b] - m) * i)));
}, mc = {}, ed = (n) => mc[n] || (mc[n] = Gd(n)), Td = (n, d, i, p) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let b = 0, w = 1, E = m;
  for (let k = 0; k < 18; k++)
    E = (b + w) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < m ? b = E : w = E;
  return 3 * (1 - E) * (1 - E) * E * d + 3 * (1 - E) * E * E * p + E * E * E;
}, Yp = { std: Td(0.2, 0, 0, 1), acc: Td(0.3, 0, 1, 1), dec: Td(0, 0, 0, 1) };
function dd(n, d) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || d ? "night" : "day");
}
function dp(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Je(d.clear[0], d.cloudy[0], 0.12), Je(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Je(d.rain[0], "#000000", 0.22), Je(d.rain[1], "#000000", 0.22)], d;
}
const Ud = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Yd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Zd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Kd(n, d = dn) {
  const i = { ...dn, ...d }, p = dp(i), m = String(n).split("/"), b = p[m[0]] ? m[0] : "clear", w = m[1] === "night", E = p[b][w ? 1 : 0], k = {
    night: w,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ud.map(() => ({ o: 0 })),
    rain: Yd.map(() => ({ o: 0, dy: -16 })),
    snow: Zd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (xt) => Ud.map(() => ({ o: xt }));
  return b === "clear" ? w ? (k.moon.o = 1, k.stars = N(1)) : k.sun.o = 1 : b === "partly" ? (k.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (k.moon = { x: 34, y: 33, d: 48, o: 1 }, k.stars = N(0.7)) : k.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (k.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? k.moon = { x: 40, y: 36, d: 40, o: 0 } : k.sun = { x: 40, y: 36, r: 20, o: 0 }) : (k.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? k.moon = { x: 38, y: 28, d: 36, o: 0 } : k.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? k.snow = Zd.map(() => ({ o: 1, dy: 0 })) : k.rain = Yd.map((xt, pt) => ({ o: b === "storm" && pt === 1 ? 0 : 1, dy: 0 })), b === "storm" && (k.bolt = { o: 1, dy: 0 })), k;
}
const gc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Zp(n, d, i, p = dn, m = !1) {
  const b = { ...dn, ...p }, w = (U, J) => U > 0.01 && J > 0.01 ? "stay" : U > 0.01 ? "leave" : J > 0.01 ? "enter" : "none", E = (U, J, ot, K) => {
    const z = U[0] + J * K, O = U[1] - (ot - 1 - J) * K;
    return Yp[U[2]](ln((i - z) / Math.max(1e-3, O - z)));
  }, k = (U, J, ot, K = 0, z = 1, O = 0) => {
    const ut = w(U.o, J.o);
    if (ut === "none") return { ...J, o: 0 };
    const rt = E(gc[ot][ut], K, z, O), ht = {};
    for (const et in J) ht[et] = m && ut !== "stay" && et !== "o" ? ut === "leave" ? U[et] : J[et] : fc(U[et], J[et], rt);
    return ht;
  }, N = E(gc.sky, 0, 1, 0);
  let xt, pt;
  if (n.night !== d.night) {
    const U = Math.min(n.clearness, d.clearness), J = Je(Je(n.sky, d.sky, 0.5), b.dusk, 0.6 * U);
    xt = N < 0.5 ? Je(n.sky, J, N * 2) : Je(J, d.sky, N * 2 - 1), pt = U > 0.5 ? [n.sky, b.dusk, d.sky] : [n.sky, d.sky];
  } else
    xt = Je(n.sky, d.sky, N), pt = [n.sky, d.sky];
  return {
    night: i < 0.5 ? n.night : d.night,
    clearness: fc(n.clearness, d.clearness, i),
    sky: xt,
    skyStops: pt,
    skyT: N,
    sun: k(n.sun, d.sun, "body"),
    moon: k(n.moon, d.moon, "body"),
    cloud: k(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map((U, J) => k(n.stars[J], U, "fx", J, d.stars.length, 0.05)),
    rain: d.rain.map((U, J) => k(n.rain[J], U, "fx", J, d.rain.length, 0.05)),
    snow: d.snow.map((U, J) => k(n.snow[J], U, "fx", J, d.snow.length, 0.05)),
    bolt: k(n.bolt, d.bolt, "fx")
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
], sn = (n, d) => (Kp[(d & 7) * 8 + (n & 7)] + 0.5) / 64, $p = 0, Jd = 1, Qd = 2, tc = 3, ec = 4, rn = 5, ks = 6, Zi = 7, ac = 8, od = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Xp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Jp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), cp = (n, d, i) => {
  let p = !1;
  for (let m = 0, b = n.length - 1; m < n.length; b = m++) {
    const w = n[m], E = n[b];
    w[1] > i != E[1] > i && d < (E[0] - w[0]) * (i - w[1]) / (E[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function pp(n, { size: d = 90, px: i = 2, oneBit: p = !1, colors: m = dn, ink: b = "#26221e", paper: w = "#fbf9f6", clock: E = 0, idle: k = !1 } = {}) {
  const N = { ...dn, ...m }, xt = Math.sin, pt = Math.PI * 2, U = Math.max(6, Math.round(d / i)), J = U / 90, ot = k ? Math.floor(E / 100) * 100 : 0, K = k ? xt(pt * ot / 3600) : 0, z = k ? 1.8 * xt(pt * ot / 6400) : 0, O = k ? 0.9 * xt(pt * ot / 4100) : 0, ut = k ? 0.8 * xt(pt * ot / 5200) : 0, rt = ot / 3400 % 1, ht = k && n.bolt.o > 0.5 && (rt < 0.04 || rt > 0.08 && rt < 0.11), et = new Array(U * U), tt = new Uint8Array(U * U), S = (M, _, A, P, ft) => {
    A == null || M < 0 || _ < 0 || M >= U || _ >= U || (P >= 1 || P > sn(M + 5, _ + 3)) && (et[_ * U + M] = A, tt[_ * U + M] = ft);
  }, at = (M, _, A, P) => {
    for (let ft = Math.max(0, Math.floor(_ - A) - 1); ft <= Math.min(U - 1, _ + A + 1); ft++) for (let dt = Math.max(0, Math.floor(M - A) - 1); dt <= Math.min(U - 1, M + A + 1); dt++) P(dt, ft, dt + 0.5 - M, ft + 0.5 - _);
  }, Pt = n.skyStops || [n.sky], G = n.skyT || 0;
  for (let M = 0; M < U; M++) {
    const _ = n.night ? ln(1 - (M + 0.5) / (U * 0.7)) * 0.85 : ln(((M + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let A = 0; A < U; A++) {
      let P = Pt[0];
      if (Pt.length > 1) {
        const ft = G * (Pt.length - 1), dt = Math.min(Pt.length - 2, Math.floor(ft));
        P = ft - dt > sn(A, M) ? Pt[dt + 1] : Pt[dt];
      }
      _ > sn(A + 2, M + 5) && (P = n.night ? Je(P, "#000000", 0.28) : Je(P, "#ffffff", 0.2)), et[M * U + A] = ht ? Je(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const M = n.sun.x * J, _ = n.sun.y * J, A = Math.max(1, n.sun.r * J);
    if (k) {
      const P = A * (1.45 + 0.06 * K), ft = Je(N.sun, "#ffffff", 0.55);
      if (at(M, _, P, (dt, q, gt, St) => {
        const Jt = Math.sqrt(gt * gt + St * St);
        Jt > A && Jt < P && S(dt, q, ft, 0.26 * (1 - (Jt - A) / (P - A)) * n.sun.o, $p);
      }), n.sun.o > 0.5) {
        const dt = Math.floor(ot / 500) % 2, q = Math.max(1, A * 0.22);
        for (let gt = 0; gt < 8; gt++) if (gt % 2 === dt) for (let St = A + 1.5; St < A + 1.5 + q; St += 0.7) S(Math.floor(M + Math.cos(gt * Math.PI / 4) * St), Math.floor(_ + Math.sin(gt * Math.PI / 4) * St), N.sun, n.sun.o, ac);
      }
    }
    at(M, _, A, (P, ft, dt, q) => {
      if (dt * dt + q * q > A * A) return;
      const gt = ((dt * 0.643 + q * 0.766) / A + 1) / 2;
      S(P, ft, ln((gt - 0.62) / 0.38) > sn(P, ft) ? N.sunEdge : N.sun, n.sun.o, Jd);
    });
  }
  if (Ud.forEach((M, _) => {
    const A = n.stars[_].o;
    if (A < 0.01) return;
    const P = Math.floor(M[0] * J), ft = Math.floor(M[1] * J), dt = k ? (Math.floor(ot / 300) + _ * 3) % 6 : 0;
    if (dt === 5) return;
    const q = Math.round(M[2] * J * (dt === 4 ? 0.3 : dt < 2 ? 1 : 0.6));
    S(P, ft, N.star, A, Zi);
    for (let gt = 1; gt <= q; gt++) {
      const St = gt === q && q > 1 ? Je(N.star, n.sky, 0.5) : N.star;
      S(P - gt, ft, St, A, Zi), S(P + gt, ft, St, A, Zi), S(P, ft - gt, St, A, Zi), S(P, ft + gt, St, A, Zi);
    }
  }), n.moon.o > 0.01) {
    const M = Math.max(1.5, n.moon.d * J * 0.37), _ = n.moon.x * J, A = n.moon.y * J + (k && ut > 0.4 ? -1 : 0), P = _ + 0.547 * M, ft = A - 0.503 * M, dt = 0.82 * M, q = Je(N.moon, "#ffffff", 0.6);
    at(_, A, M, (gt, St, Jt, pe) => {
      if (Jt * Jt + pe * pe > M * M) return;
      const ea = gt + 0.5 - P, Se = St + 0.5 - ft;
      ea * ea + Se * Se <= dt * dt || S(gt, St, ln((pe + M) / (2 * M) * 1.1 - 0.1) > sn(gt, St) ? N.moon : q, n.moon.o, Qd);
    });
  }
  const wt = Math.max(2, Math.round(15.65 * J)), j = Math.max(1, Math.round(5.87 * J * 0.5));
  Yd.forEach((M, _) => {
    const A = n.rain[_];
    let P = A.dy, ft = A.o;
    if (ft < 0.01) return;
    if (k) {
      const gt = (ot / 950 + _ / 3) % 1;
      P += -5 + gt * 14, ft *= gt < 0.18 ? gt / 0.18 : gt > 0.72 ? (1 - gt) / 0.28 : 1;
    }
    const dt = (M[0] + 3 + z) * J, q = (M[1] + P) * J;
    for (let gt = 0; gt < wt; gt++) for (let St = 0; St < j; St++) S(Math.floor(dt - 0.208 * gt) + St, Math.floor(q) + gt, N.rain, ft, ec);
  });
  const zt = Math.max(0, Math.round(7.34 * J / 2.6));
  if (Zd.forEach((M, _) => {
    const A = n.snow[_];
    let P = A.dy, ft = 0, dt = A.o;
    if (dt < 0.01) return;
    if (k) {
      const St = (ot / 3200 + _ / 5) % 1;
      P += -6 + St * 14, ft = 1.5 * xt(pt * (St * 1.5 + _ / 5)), dt *= St < 0.2 ? St / 0.2 : St > 0.75 ? (1 - St) / 0.25 : 1;
    }
    const q = Math.floor((M[0] + 3.67 + ft + z) * J), gt = Math.floor((M[1] + 3.67 + P) * J);
    S(q, gt, N.snow, dt, rn);
    for (let St = 1; St <= zt; St++)
      S(q - St, gt, N.snow, dt, rn), S(q + St, gt, N.snow, dt, rn), S(q, gt - St, N.snow, dt, rn), S(q, gt + St, N.snow, dt, rn), zt > 1 && St < zt && (S(q - St, gt - St, N.snow, dt, rn), S(q + St, gt - St, N.snow, dt, rn), S(q - St, gt + St, N.snow, dt, rn), S(q + St, gt + St, N.snow, dt, rn));
  }), n.bolt.o > 0.01)
    if (U >= 30) {
      const M = 39 + z, _ = 50 + n.bolt.dy;
      for (let A = Math.floor(_ * J); A <= (_ + 28) * J; A++) for (let P = Math.floor(M * J); P <= (M + 13) * J; P++)
        cp(Jp, (P + 0.5) / J - M, (A + 0.5) / J - _) && S(P, A, N.sun, n.bolt.o, ks);
    } else {
      const M = U / 18, _ = 7, A = 10 + Math.round(n.bolt.dy * 0.2);
      Xp.forEach((P, ft) => P.split("").forEach((dt, q) => {
        if (dt !== "#") return;
        const gt = Math.floor((_ + q) * M), St = Math.floor((A + ft) * M);
        for (let Jt = St; Jt < Math.max(St + 1, Math.floor((A + ft + 1) * M)); Jt++) for (let pe = gt; pe < Math.max(gt + 1, Math.floor((_ + q + 1) * M)); pe++) S(pe, Jt, N.sun, n.bolt.o, ks);
      }));
    }
  if (n.cloud.o > 0.01) {
    const M = Math.max(3, n.cloud.w * J), _ = M * 0.6665, A = (n.cloud.x + z) * J - M / 2, P = (n.cloud.y + O) * J - _ / 2, ft = Je(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), dt = Je(ft, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(P) - 1); q <= Math.min(U - 1, P + _ + 1); q++) for (let gt = Math.max(0, Math.floor(A) - 1); gt <= Math.min(U - 1, A + M + 1); gt++) {
      const St = (gt + 0.5 - A) / M, Jt = (q + 0.5 - P) / M;
      od(St, Jt) && S(gt, q, !od(St, Jt + 1 / M) || ln((Jt - 0.42) / 0.25) * 0.8 > sn(gt, q) ? dt : ft, n.cloud.o, tc);
    }
  }
  return up(et, tt, U, U, { oneBit: p, ink: b, paper: w, snowInk: !n.night });
}
function up(n, d, i, p, { oneBit: m, ink: b, paper: w, snowInk: E }) {
  const k = new Uint8ClampedArray(i * p * 4), N = ed(b), xt = ed(w);
  for (let pt = 0; pt < p; pt++) for (let U = 0; U < i; U++) {
    const J = pt * i + U, ot = d[J];
    if (n[J] == null) continue;
    let K = ed(n[J]);
    if (m) {
      let z;
      ot === ec || ot === ac ? z = !0 : ot === rn ? z = E : ot === Zi || ot === ks ? z = !1 : z = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= sn(U, pt), (ot === Jd || ot === Qd || ot === tc || ot === ks) && (U > 0 && d[J - 1] !== ot || U < i - 1 && d[J + 1] !== ot || pt > 0 && d[J - i] !== ot || pt < p - 1 && d[J + i] !== ot) && (z = !0), K = z ? N : xt;
    }
    k[J * 4] = K[0], k[J * 4 + 1] = K[1], k[J * 4 + 2] = K[2], k[J * 4 + 3] = 255;
  }
  return { w: i, h: p, data: k };
}
const Qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, tu = (n) => dd(n, !1).split("/")[0], Ad = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, eu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", au = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", nu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", iu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ru = [".##", "##.", ".#.", "#.."];
function fp(n, { width: d, height: i, colors: p, wave: m = 0.38, soft: b = 6, glow: w = 0.6 }) {
  const E = { ...dn, dawn: "#e5a77e", ...p }, k = dp(E), N = d, xt = i, pt = N / 6, U = pt / 2, J = Math.PI * 2, ot = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(12)].map((rt, ht) => {
    const et = ot[Math.min(ht, ot.length - 1)], tt = tu(et.cond), S = ht % 2 === 1;
    return { cond: et.cond, k: tt, night: S, sky: k[tt][S ? 1 : 0], cover: Qp[tt] };
  }), z = (rt) => xt * (0.5 - m * Math.cos(J * (rt / pt - 0.25)));
  return { C: E, S: K, W: N, H: xt, cw: pt, sw: U, TAU: J, yb: z, side: (rt, ht, et) => {
    const tt = (rt ? z(ht) - et : et - z(ht)) / Math.max(3, b * 1.4) + 0.5;
    return tt <= 0 ? 0 : tt >= 1 ? 1 : tt;
  }, glowAt: (rt) => {
    const ht = ((rt / pt - 0.25) % 1 + 1) % 1, et = Math.max(0, Math.min(5, Math.round(rt / pt - 0.25))), tt = Math.max(0, Math.min(5, Math.round(rt / pt - 0.75))), S = 1 - (K[2 * et].cover + K[2 * tt + 1].cover) / 2, at = Math.sin(Math.PI * Math.min(1, Math.max(0, z(rt) / xt)));
    return { c: ht < 0.5 ? E.dusk : E.dawn, a: w * (0.2 + 0.8 * S) * at * at };
  }, soft: b, tw: pt * 0.3, sy: xt / 90 };
}
function hp(n, { clock: d = 0, ambient: i = !1, seed: p = 1 }) {
  const { S: m, sw: b, side: w, C: E, TAU: k, sy: N } = n, xt = d, pt = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((U, J) => {
    const ot = Ad(p * 977 + J * 131 + 7), K = (J + 0.5) * b, z = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let O = 0; O < z; O++) {
      const ut = K + (ot() - 0.5) * b * 1.6, rt = (6 + ot() * 76) * N, ht = ot() < 0.35, et = 1.8 + ot() * 1.6, tt = w(!0, ut, rt) * (ht ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(k * xt / 2600 + O * 1.7 + J) : 1);
      tt >= 0.03 && pt.stars.push({ x: ut, y: rt, big: ht, size: et, o: tt });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const O = K + (ot() - 0.5) * b * 0.3, ut = Math.min(15, b * 0.29);
      pt.suns.push({ x: O, y: 32 * N, rad: ut, halo: ut * 2.8 * (i ? 1 + 0.07 * Math.sin(k * xt / 3600 + J) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const O = Math.min(0.78, b * 0.55 / 34), ut = K - 23 * O + (ot() - 0.5) * b * 0.2;
      pt.moons.push({ x: ut + 23 * O, y: (4 + (i ? 0.8 * Math.sin(k * xt / 5200 + J) : 0)) * N + 23 * O, d: 46 * O });
    }
  }), m.forEach((U, J) => {
    const ot = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ot) return;
    const K = Ad(p * 577 + J * 71 + 3), z = (J + 0.5) * b, O = U.k === "rain" || U.k === "storm" || U.night ? E.cloudNight : E.cloudDay, ut = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let rt = 0; rt < ot; rt++) {
      const ht = b / 46 * (U.k === "partly" ? 0.85 : 0.75 + K() * 0.55), et = z + (U.k === "partly" ? b * 0.12 : (K() - 0.5) * b * 1.05), tt = (U.k === "partly" ? 40 : 6 + K() * 26) * N, S = i ? 2.5 * Math.sin(k * xt / 9e3 + J * 1.3 + rt * 2.1) : 0, at = i ? 0.9 * Math.sin(k * xt / 6100 + J + rt) : 0;
      pt.clouds.push({ x: et - 23 * ht + S, y: tt - 15.33 * ht + at, w: 46 * ht, h: 30.66 * ht, fill: O, o: ut * (ot > 1 && rt === 0 ? 0.85 : 1) });
    }
  }), m.forEach((U, J) => {
    const ot = Ad(p * 313 + J * 29 + 11), K = (J + 0.5) * b, z = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let ut = 0; ut < z; ut++) {
      let rt = K + (ot() - 0.5) * b * 1.05, ht = 44 + ot() * 36, et = 1;
      if (i) {
        const S = ((ht - 44 + xt * 0.04) % 36 + 36) % 36;
        rt -= 0.21 * (S - (ht - 44)), ht = 44 + S, et = Math.min(1, S / 6, (36 - S) / 6);
      }
      ht *= N;
      const tt = w(U.night, rt, ht) * et;
      tt >= 0.05 && pt.drops.push({ x: rt, y: ht, o: tt });
    }
    const O = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let ut = 0; ut < O; ut++) {
      let rt = K + (ot() - 0.5) * b * 1.05, ht = 40 + ot() * 44, et = 1;
      if (i) {
        const S = ((ht - 40 + xt * 9e-3) % 44 + 44) % 44;
        ht = 40 + S, rt += 1.6 * Math.sin(k * xt / 2800 + ut * 1.9 + J), et = Math.min(1, S / 6, (44 - S) / 6);
      }
      ht *= N;
      const tt = w(U.night, rt, ht) * et;
      tt >= 0.05 && pt.flakes.push({ x: rt, y: ht, o: tt });
    }
    if (U.k === "fog") {
      const ut = U.night ? "#c8ccd6" : "#ffffff", rt = U.night ? 0.28 : 0.62, ht = i ? 4 * Math.sin(k * xt / 8e3 + J) : 0;
      for (let et = 0; et < 4; et++) pt.fogs.push({ x: K - b * 0.75 + et % 2 * b * 0.18 + (et % 2 ? ht : -ht), y: (30 + et * 13) * N, w: b * 1.3, c: ut, a: rt });
    }
    if (U.k === "storm") {
      const ut = (xt / 3400 + J * 0.37) % 1;
      pt.bolts.push({ x: K + (ot() - 0.5) * b * 0.3 - 5, y: 36 * N, o: i && !(ut < 0.05 || ut > 0.09 && ut < 0.12) ? 0.8 : 1 });
    }
  }), pt;
}
function su(n, d, i, p, m, b, w, E) {
  const { S: k, C: N, cw: xt, yb: pt, glowAt: U, soft: J, tw: ot, sy: K } = n, z = new Array(i * p), O = new Uint8Array(i * p), ut = new Uint8Array(i * p), rt = (M, _, A, P, ft) => {
    A == null || M < 0 || _ < 0 || M >= i || _ >= p || (P >= 1 || P > sn(M + 5, _ + 3)) && (z[_ * i + M] = A, O[_ * i + M] = ft);
  }, ht = (M, _, A, P) => {
    for (let ft = Math.max(0, Math.floor(_ - A) - 1); ft <= Math.min(p - 1, _ + A + 1); ft++) for (let dt = Math.max(0, Math.floor(M - A) - 1); dt <= Math.min(i - 1, M + A + 1); dt++) P(dt, ft, dt + 0.5 - M, ft + 0.5 - _);
  }, et = (M, _, A) => {
    for (let ft = 0; ft < M.length - 1; ft++) {
      const dt = (ft + _) * xt;
      if (A < dt - ot / 2) return [M[ft], M[ft], 0];
      if (A <= dt + ot / 2) return [M[ft], M[ft + 1], (A - dt + ot / 2) / ot];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, tt = k.filter((M) => !M.night).map((M) => M.sky), S = k.filter((M) => M.night).map((M) => M.sky), at = J / b, Pt = 16 * K / b;
  for (let M = 0; M < i; M++) {
    const _ = (M + 0.5) * m, A = pt(_) / b, P = et(tt, 0.75, _), ft = et(S, 1.25, _), dt = U(_);
    for (let q = 0; q < p; q++) {
      const gt = sn(M, q), St = q + 0.5 - A, Jt = (at > 0.01 ? ln(0.5 + St / at) : St > 0 ? 1 : 0) > gt;
      let pe = Jt ? P[2] > gt ? P[1] : P[0] : ft[2] > gt ? ft[1] : ft[0];
      (Jt ? ln(((q + 0.5) / p - 0.45) / 0.55) * 0.7 : ln(1 - (q + 0.5) / (p * 0.55)) * 0.7) > sn(M + 2, q + 5) && (pe = Jt ? Je(pe, "#ffffff", 0.18) : Je(pe, "#000000", 0.25)), Jt && St >= 0 && St < Pt && dt.a * 1.3 * (1 - St / Pt) > sn(M + 6, q + 1) && (pe = dt.c), z[q * i + M] = pe, ut[q * i + M] = Jt ? 0 : 1;
    }
  }
  const G = Je(N.sun, "#ffffff", 0.55), wt = Je(N.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const _ = Math.floor(M.x / m), A = Math.floor(M.y / b);
    if (_ < 0 || A < 0 || _ >= i || A >= p || !ut[A * i + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? N.star : Je(N.star, z[A * i + _], 0.5), ft = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    rt(_, A, P, 1, Zi);
    for (let dt = 1; dt <= ft; dt++) [[_ - dt, A], [_ + dt, A], [_, A - dt], [_, A + dt]].forEach((q) => {
      q[0] >= 0 && q[1] >= 0 && q[0] < i && q[1] < p && ut[q[1] * i + q[0]] && rt(q[0], q[1], P, 1, Zi);
    });
  }), d.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / m), A = M.x / m, P = M.y / b, ft = M.halo / m * 0.85;
    if (ht(A, P, ft, (dt, q, gt, St) => {
      const Jt = Math.sqrt(gt * gt + St * St);
      Jt > _ && Jt < ft && !ut[q * i + dt] && rt(dt, q, G, 0.3 * (1 - (Jt - _) / (ft - _)), 0);
    }), E) {
      const dt = Math.floor(w / 500) % 2, q = Math.max(1, _ * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === dt) for (let St = _ + 1.2; St < _ + 1.2 + q; St += 0.7) rt(Math.floor(A + Math.cos(gt * Math.PI / 4) * St), Math.floor(P + Math.sin(gt * Math.PI / 4) * St), N.sun, 1, ac);
    }
    ht(A, P, _, (dt, q, gt, St) => {
      gt * gt + St * St <= _ * _ && rt(dt, q, ln(((St / _ + 1) / 2 - 0.6) / 0.4) > sn(dt, q) ? N.sunEdge : N.sun, 1, Jd);
    });
  }), d.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / m), A = M.x / m, P = M.y / b, ft = A + 0.547 * _, dt = P - 0.503 * _, q = 0.82 * _;
    ht(A, P, _, (gt, St, Jt, pe) => {
      if (Jt * Jt + pe * pe > _ * _) return;
      const ea = gt + 0.5 - ft, Se = St + 0.5 - dt;
      ea * ea + Se * Se > q * q && rt(gt, St, ln((pe + _) / (2 * _) * 1.1 - 0.1) > sn(gt, St) ? N.moon : wt, 1, Qd);
    });
  }), d.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / m), A = _ * 0.6665, P = M.x / m, ft = M.y / b, dt = Je(M.fill, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(ft) - 1); q <= Math.min(p - 1, ft + A + 1); q++) for (let gt = Math.max(0, Math.floor(P) - 1); gt <= Math.min(i - 1, P + _ + 1); gt++) {
      const St = (gt + 0.5 - P) / _, Jt = (q + 0.5 - ft) / _;
      od(St, Jt) && rt(gt, q, !od(St, Jt + 1 / _) || ln((Jt - 0.42) / 0.25) * 0.8 > sn(gt, q) ? dt : M.fill, M.o, tc);
    }
  }), d.fogs.forEach((M) => {
    const _ = Math.floor(M.y / b), A = Math.max(_, Math.floor((M.y + 6 * K) / b) - 1), P = Math.floor(M.x / m), ft = Math.floor((M.x + M.w) / m);
    for (let dt = _; dt <= A; dt++) for (let q = P; q <= ft; q++) {
      const gt = (q - P) / Math.max(1, ft - P);
      rt(q, dt, M.c, M.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const j = Math.max(2, Math.round(9 / b));
  d.drops.forEach((M) => {
    const _ = M.x / m, A = Math.floor(M.y / b);
    for (let P = 0; P < j; P++) rt(Math.floor(_ - 0.208 * P * b / m), A + P, N.rain, M.o, ec);
  });
  const zt = Math.max(0, Math.round(4.4 / m / 2.6));
  return d.flakes.forEach((M) => {
    const _ = Math.floor(M.x / m), A = Math.floor(M.y / b);
    rt(_, A, N.snow, M.o, rn);
    for (let P = 1; P <= zt; P++)
      rt(_ - P, A, N.snow, M.o, rn), rt(_ + P, A, N.snow, M.o, rn), rt(_, A - P, N.snow, M.o, rn), rt(_, A + P, N.snow, M.o, rn);
  }), d.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let _ = Math.floor(M.y / b); _ <= (M.y + 24) / b; _++) for (let A = Math.floor(M.x / m); A <= (M.x + 11) / m; A++)
        cp(iu, (A + 0.5) * m - M.x, (_ + 0.5) * b - M.y) && rt(A, _, N.sun, 1, ks);
    else {
      const _ = Math.round(M.x / m), A = Math.round(M.y / b);
      ru.forEach((P, ft) => P.split("").forEach((dt, q) => {
        dt === "#" && rt(_ + q, A + ft, N.sun, 1, ks);
      }));
    }
  }), { col: z, ids: O };
}
function lu(n, d) {
  const i = d.px, p = Math.max(6, Math.round(d.width / i)), m = Math.max(6, Math.round(d.height / i)), b = d.width / p, w = d.height / m, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, k = (J) => {
    const ot = fp(J, d);
    return su(ot, hp(ot, { clock: E, ambient: d.ambient, seed: d.seed }), p, m, b, w, E, d.ambient);
  }, N = k(n), xt = d.reveal == null ? 1 : ln(d.reveal);
  let pt = N.col, U = N.ids;
  if (xt < 1) {
    const J = d.prev ? k(d.prev) : null, ot = xt * (p + 12);
    pt = new Array(p * m), U = new Uint8Array(p * m);
    for (let K = 0; K < p * m; K++) {
      const z = K % p, O = K / p | 0;
      (d.reduce ? xt : ln((ot - z) / 12)) > sn(z, O) ? (pt[K] = N.col[K], U[K] = N.ids[K]) : J ? (pt[K] = J.col[K], U[K] = J.ids[K]) : (pt[K] = null, U[K] = 255);
    }
  }
  return up(pt, U, p, m, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function du(n, d, i) {
  const p = i.width, m = i.height, b = i.reveal == null ? 1 : ln(i.reveal), w = (U, J) => {
    const ot = fp(J, i);
    cu(U, ot, hp(ot, i));
  };
  if (n.clearRect(0, 0, p, m), b >= 1) {
    w(n, d);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const E = n.canvas, k = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (k.width !== E.width || k.height !== E.height) && (k.width = E.width, k.height = E.height);
  const N = k.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, p, m), w(N, d);
  const xt = b * (p + 64) - 64, pt = N.createLinearGradient(xt, 0, xt + 64, 0);
  pt.addColorStop(0, "rgba(0,0,0,1)"), pt.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = pt, N.fillRect(0, 0, p, m), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(k, 0, 0), n.restore();
}
function cu(n, d, i) {
  const { W: p, H: m, S: b, C: w, cw: E, yb: k, glowAt: N, soft: xt, tw: pt, sy: U } = d, J = (G, wt) => {
    const j = ed(G);
    return "rgba(" + j[0] + "," + j[1] + "," + j[2] + "," + Math.max(0, Math.min(1, wt)).toFixed(3) + ")";
  }, ot = (G, wt) => {
    const j = n.createLinearGradient(0, 0, p, 0);
    j.addColorStop(0, G[0]);
    for (let zt = 0; zt < G.length - 1; zt++) {
      const M = (zt + wt) * E, _ = (M - pt / 2) / p, A = (M + pt / 2) / p;
      _ > 0 && _ < 1 && j.addColorStop(_, G[zt]), A > 0 && A < 1 && j.addColorStop(A, G[zt + 1]);
    }
    return j.addColorStop(1, G[G.length - 1]), j;
  }, K = Math.max(24, Math.ceil(p / 4)), z = (G, wt) => {
    n.beginPath();
    for (let j = 0; j <= K; j++) {
      const zt = p * j / K, M = G == null ? 0 : k(zt) + G;
      j ? n.lineTo(zt, M) : n.moveTo(zt, M);
    }
    for (let j = K; j >= 0; j--) {
      const zt = p * j / K;
      n.lineTo(zt, k(zt) + wt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ot(b.filter((G) => !G.night).map((G) => G.sky), 0.75), n.fillRect(0, 0, p, m);
  const O = n.createLinearGradient(0, 0, p, 0);
  for (let G = 0; G <= 64; G++) {
    const wt = N(p * G / 64);
    O.addColorStop(G / 64, J(wt.c, Math.min(1, wt.a)));
  }
  n.fillStyle = O;
  for (let G = 0; G < 8; G++)
    n.globalAlpha = 1 - G / 8, z(G * 2 * U, (G + 1) * 2 * U);
  n.fillStyle = ot(b.filter((G) => G.night).map((G) => G.sky), 1.25);
  const ut = Math.max(0.5, xt), rt = 6;
  n.globalAlpha = 1, z(null, -ut);
  for (let G = 0; G < rt; G++)
    n.globalAlpha = 1 - (G + 0.5) / rt, z(-ut + 2 * ut * G / rt, -ut + 2 * ut * (G + 1) / rt);
  n.globalAlpha = 1;
  const ht = new Path2D(nu), et = new Path2D(au), tt = new Path2D(eu), S = new Path2D(ou);
  n.fillStyle = w.star, i.stars.forEach((G) => {
    n.globalAlpha = G.o, G.big ? (n.save(), n.translate(G.x, G.y), n.scale(G.size, G.size), n.fill(ht), n.restore()) : (n.beginPath(), n.arc(G.x, G.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const at = Je(w.sun, "#ffffff", 0.55);
  i.suns.forEach((G) => {
    const wt = n.createRadialGradient(G.x, G.y, 0, G.x, G.y, G.halo);
    wt.addColorStop(0, J(at, 0.42)), wt.addColorStop(0.7, J(at, 0)), n.fillStyle = wt, n.beginPath(), n.arc(G.x, G.y, G.halo, 0, Math.PI * 2), n.fill();
    const j = n.createLinearGradient(0, G.y - G.rad, 0, G.y + G.rad);
    j.addColorStop(0.6, w.sun), j.addColorStop(1, w.sunEdge), n.fillStyle = j, n.beginPath(), n.arc(G.x, G.y, G.rad, 0, Math.PI * 2), n.fill();
  });
  const Pt = Je(w.moon, "#ffffff", 0.6);
  i.moons.forEach((G) => {
    n.save(), n.translate(G.x - G.d / 2, G.y - G.d / 2), n.scale(G.d / 46, G.d / 46);
    const wt = n.createLinearGradient(0, 6, 0, 40);
    wt.addColorStop(0, Pt), wt.addColorStop(1, w.moon), n.fillStyle = wt, n.fill(et), n.restore();
  }), i.clouds.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.scale(G.w / 46, G.h / 30.66), n.translate(-4, -9.67), n.fillStyle = G.fill, n.fill(tt), n.restore();
  }), i.fogs.forEach((G) => {
    const wt = n.createLinearGradient(G.x, 0, G.x + G.w, 0);
    wt.addColorStop(0, J(G.c, 0)), wt.addColorStop(0.25, J(G.c, G.a)), wt.addColorStop(0.75, J(G.c, G.a)), wt.addColorStop(1, J(G.c, 0)), n.fillStyle = wt, n.fillRect(G.x, G.y, G.w, 6 * U);
  }), n.fillStyle = w.rain, i.drops.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((G) => {
    n.globalAlpha = G.o, n.beginPath(), n.arc(G.x, G.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.fill(S), n.restore();
  }), n.restore();
}
function pu(n, d) {
  var rc, sc, lc, dc, cc, pc, uc;
  const i = (e) => n.getElementById(e), p = i("workoutView"), m = i("workoutNameInput");
  let b = !0;
  const w = i("homeClock");
  function E() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const k = i("createFlow"), N = i("createMovementsSlot"), xt = i("createTimingSlot"), pt = i("createFinishSlot"), U = i("movementStepSummary"), J = i("timingStepSummary"), ot = i("finishStepSummary"), K = i("continueToTiming"), z = i("continueToFinish"), O = i("finishMoveButton");
  let ut = !1, rt = [];
  function ht(e) {
    !e || rt.some((r) => r.node === e) || rt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function et(e, r) {
    e && (ht(e), r.appendChild(e));
  }
  function tt() {
    [...rt].reverse().forEach(({ node: e, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(e, s) : r.appendChild(e));
    }), rt = [];
  }
  function S(e) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === e);
    }), e === "timing" && (ut = !0), at();
  }
  function at() {
    var st, mt;
    if (!Kt) return;
    ae[Qt];
    const e = Ke.filter((lt) => !lt.hidden), r = e.filter((lt) => lt.kind !== "rest").length, s = e.filter((lt) => lt.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const f = r > 0, v = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    v.disabled = !f, K.disabled = !f, J.textContent = f ? An(_.value) + " · " + pa(A.value) + " movement · " + pa(P.value) + " rest" : "Add a movement first", T.disabled = !(f && ut);
    const R = ((m == null ? void 0 : m.value) || "").trim(), F = [];
    (st = i("includeWarmupPreset")) != null && st.checked && F.push("warm-up"), (mt = i("includeCooldownPreset")) != null && mt.checked && F.push("cooldown"), ot.textContent = R ? R + (F.length ? " · " + F.join(" + ") : "") : F.length ? F.join(" + ") : "Name and optional extras";
  }
  function Pt() {
    var Nt, te, Ft;
    k.hidden = !1, ut = !1;
    const e = n.querySelector(".editNameRow"), r = i("createMoveOptions"), s = n.querySelector(".timeTiles"), f = i("routineSummaryModal"), v = n.querySelector(".tempoRevealRow"), T = i("tempoExperiment"), R = (Nt = i("warmupList")) == null ? void 0 : Nt.closest("section"), F = i("movementCreatorLaunch"), st = i("movementCreator"), mt = (te = i("strengthList")) == null ? void 0 : te.closest("section"), lt = (Ft = i("cooldownList")) == null ? void 0 : Ft.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), R, F, st, mt, lt].forEach((Dt) => Dt && et(Dt, N)), [r, s, f, v, T].forEach((Dt) => et(Dt, xt)), et(e, pt), S("movements"), at();
  }
  function G() {
    tt(), k.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || S(e.dataset.openStep);
  })), K.addEventListener("click", () => {
    K.disabled || S("timing");
  }), z.addEventListener("click", () => S("finish")), O.addEventListener("click", () => i("saveWorkoutEdit").click());
  const wt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, j = i("homeNav"), zt = i("settingsNav");
  function M(e) {
    Object.entries(wt).forEach(([r, s]) => s.classList.toggle("active", r === e)), j.classList.toggle("active", e === "home"), zt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Cs, 400), e === "settings" && (requestAnimationFrame(() => Pi(n.querySelector(".tab.active"), !1)), ko());
  }
  const _ = i("totalTime"), A = i("workTime"), P = i("restTime"), ft = i("totalOut"), dt = i("workOut"), q = i("restOut"), gt = i("totalFill"), St = i("workFill"), Jt = i("restFill"), pe = i("roundsInput"), ea = i("roundsFill"), Se = i("roundsOut"), io = i("totalLabel"), Pa = i("routineSummaryModal"), _t = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let xe = _t.map((e) => ({ ...e })), Ke = [
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
  const ve = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let ze = ve.map((e) => ({ ...e }));
  const Nr = {
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
  }, we = Ki(d.data), ae = we.profiles;
  let Qt = ae[we.selected] ? we.selected : we.order.find((e) => ae[e]) || "kettlebell";
  function Ki(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Nr)), f = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((v) => s[v]);
    return Object.keys(s).forEach((v) => {
      f.includes(v) || f.push(v);
    }), {
      v: 1,
      profiles: s,
      order: f,
      selected: r.selected || f[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : li(r.energy)).map($i),
      settings: { ...r.settings || {} }
    };
  }
  function li(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((f) => {
      const v = new Date(f.at);
      if (isNaN(v)) return;
      const T = v.getFullYear() + "-" + String(v.getMonth() + 1).padStart(2, "0") + "-" + String(v.getDate()).padStart(2, "0"), R = v.getHours() < 14 ? "morning" : "evening";
      if (s.some((st) => st.date === T && st.slot === R)) return;
      const F = r.indexOf(f.value) + 1;
      F > 0 && s.push({ date: T, slot: R, mood: null, energy: F, at: f.at });
    }), s;
  }
  function $i(e) {
    if (e.scale === 100) return e;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function $a() {
    Kt || (we.selected = Qt, we.order = we.order.filter((e) => ae[e] && e !== Rt), d.save(we));
  }
  function he() {
    return we.settings;
  }
  function ra(e) {
    const r = ae[e];
    if (!r) return;
    Qt = e;
    const s = i("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, A.value = r.work, P.value = r.rest, pe.value = r.rounds || 1, r.customSequence) {
      const f = (r.sequence || []).map((T) => ({ ...T })), v = (T) => f.filter((R) => R.presetRole === T).map(({ presetRole: R, ...F }) => F);
      xe = (r.warmup || v("warmup")).map((T) => ({ ...T })), ze = (r.cooldown || v("cooldown")).map((T) => ({ ...T })), Ke = f.filter((T) => !T.presetRole), Do(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, A.min = 20, A.max = 60, A.step = 5, P.min = 5, P.max = 30, P.step = 5, xe = (r.warmup || _t).map((f) => ({ ...f })), ze = (r.cooldown || ve).map((f) => ({ ...f })), Ke = r.strength.map((f) => Array.isArray(f) ? (([v, T, R, F = !1]) => ({ id: v, name: T, group: R, kind: "work", hidden: !!F }))(f) : { ...f });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((f) => f.classList.toggle("active", f.dataset.workout === e)), Te();
  }
  function Ma(e, r, s) {
    const f = e.getBoundingClientRect(), v = f.width / 2, T = f.height / 2, R = r - v, F = s - T;
    let st = 1 / 0, mt = 1 / 0;
    R !== 0 && (st = v / Math.abs(R)), F !== 0 && (mt = T / Math.abs(F));
    const lt = Math.min(Math.max(1 / Math.min(st, mt), 0), 1);
    let it = Math.atan2(F, R) * (180 / Math.PI) + 90;
    return it < 0 && (it += 360), { edge: lt, angle: it };
  }
  function di(e, r, s = !1) {
    const f = e.getBoundingClientRect(), v = r.clientX - f.left, T = r.clientY - f.top, { edge: R, angle: F } = Ma(e, v, T), st = s ? 100 : R * 100;
    e.style.setProperty("--edge-proximity", st.toFixed(3)), e.style.setProperty("--cursor-angle", F.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || st >= 30);
  }
  function Xi(e) {
    e.addEventListener("pointermove", (s) => di(e, s, !1)), e.addEventListener("pointerenter", (s) => di(e, s, !1)), e.addEventListener("pointerdown", (s) => di(e, s, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  Xi(i("addWorkoutPanel"));
  let Kt = !1, Rt = null;
  function Gt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function _e(e) {
    return e.summary ? e.summary : e.customSequence ? An(e.total) + " · custom move" : An(e.total) + " · " + pa(e.work) + " / " + pa(e.rest) + " · warm-up + cooldown";
  }
  function Ta(e, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const f = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Gt(r.name) + '</div><div class="sub">' + Gt(_e(r)) + '</div><span class="sourceTag">' + Gt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (f ? f + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Gt(r.name) + "</div></div>";
    const v = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, v), Xi(s), s.addEventListener("click", (R) => {
      R.target.closest("button") || ra(e);
    }), s.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), ra(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), ra(e), gl(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), ra(e), xd();
    }), s;
  }
  function ro() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), we.order.forEach((e) => {
      ae[e] && Ta(e, ae[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Qt));
  }
  ro(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Kt = !0, Rt = "custom-" + Date.now(), ae[Rt] = {
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
    }, ra(Rt), gl(!0);
  });
  let Vt = [], oe = 0, aa = 0, On = 1, ja = !1, Qe = null, ci = null, ca = !1, so = we.settings.upcomingCount ?? "all", lo = "movement";
  function co(e, r, s) {
    return (Number(e) - r) / (s - r) * 100;
  }
  function pa(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function An(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function pi() {
    gt.style.width = co(_.value, Number(_.min), Number(_.max)) + "%", St.style.width = co(A.value, Number(A.min), Number(A.max)) + "%", Jt.style.width = co(P.value, Number(P.min), Number(P.max)) + "%", dt.textContent = pa(A.value), q.textContent = pa(P.value);
    const e = Number(pe.value) || 1;
    ea.style.width = co(e, 1, 10) + "%", io.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function ui(e) {
    return e.filter((r) => !r.hidden);
  }
  function za(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(r / 3600), f = Math.floor(r % 3600 / 60), v = r % 60;
    return (s ? s + ":" + String(f).padStart(2, "0") : f) + ":" + String(v).padStart(2, "0");
  }
  function Ms(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let f = null;
    if (s === "youtu.be") f = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") f = r.searchParams.get("v");
      else {
        const F = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        F && (f = F[2]);
      }
    if (!f || !/^[\w-]{11}$/.test(f)) return null;
    const v = (F) => {
      if (!F) return 0;
      if (/^\d+$/.test(F)) return Number(F);
      const st = F.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return st ? (Number(st[1]) || 0) * 3600 + (Number(st[2]) || 0) * 60 + (Number(st[3]) || 0) : 0;
    }, T = v(r.searchParams.get("t") || r.searchParams.get("start")), R = v(r.searchParams.get("end"));
    return { id: f, start: T, end: R > T ? R : null };
  }
  function Wn(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const s = Number(e.start) || 0, f = Number(e.end) || Number(e.videoDuration) || 0;
    return f > s ? Math.round(f - s) : Number(e.duration) || 300;
  }
  function bn(e, r) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Do(e, r = !0) {
    lo = e, n.querySelectorAll(".createPresetBtn").forEach((f) => f.classList.toggle("active", f.dataset.movePreset === e));
    const s = ae[Qt];
    s && (s.preset = e), e === "work" ? (_.min = 30, _.max = 480, _.step = 30, A.min = 300, A.max = 7200, A.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (_.value = 60, A.value = 1500, P.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, A.min = 20, A.max = 60, A.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (_.value = 20, A.value = 45, P.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), pi();
  }
  function wn(e, r) {
    const s = lo === "work";
    return e.map((f, v) => ({ ...f, id: r + "-" + v + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(A.value) }));
  }
  function Ji() {
    const e = ae[Qt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !xe.length && (xe = wn(_t, "warm")), e.includeCooldown && !ze.length && (ze = wn(ve, "cool")), Te());
  }
  function Ln() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Vt.length - 1), s = so;
    e.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const R = document.createElement("option");
      R.value = String(T), R.textContent = String(T), e.appendChild(R);
    }
    const f = document.createElement("option");
    f.value = "all", f.textContent = "All", e.appendChild(f);
    const v = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    e.value = v, so = v === "all" ? "all" : Number(v);
  }
  function Te() {
    Number(_.value) * 60;
    const e = Number(A.value), r = Number(P.value), s = ae[Qt], f = !!(s != null && s.customSequence), v = (f ? !s.includeWarmup : s != null && s.warmupOff) ? [] : ui(xe), T = ui(Ke), R = f && !s.includeCooldown ? [] : ui(ze);
    if (s && (s.total = Number(_.value), s.work = e, s.rest = r, s.rounds = Number(pe.value) || 1, s.customSequence ? (s.sequence = Ke.map((Lt) => ({ ...Lt })), s.warmup = xe.map((Lt) => ({ ...Lt })), s.cooldown = ze.map((Lt) => ({ ...Lt }))) : (s.strength = Ke.map((Lt) => ({ ...Lt })), s.warmup = xe.map((Lt) => ({ ...Lt })), s.cooldown = ze.map((Lt) => ({ ...Lt })))), s != null && s.customSequence) {
      const Lt = [...v.map((de) => ({ ...de, section: "warmup" })), ...T, ...R.map((de) => ({ ...de, section: "cooldown" }))].map((de) => {
        if (de.kind === "video") return { ...de, duration: Wn(de, e), rest: 0 };
        if (de.kind === "rest") {
          const wa = de.useGlobalTiming === !0 ? r : Number(de.duration) || r;
          return { ...de, duration: wa, rest: 0 };
        }
        const ba = de.useGlobalTiming === !1 && Number(de.duration) || e;
        return { ...de, duration: ba, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Vt = [], Lt.forEach((de, ba) => {
        Vt.push(de);
        const wa = Lt[ba + 1];
        de.kind !== "rest" && wa && wa.kind !== "rest" && Vt.push({
          id: "auto-rest-" + ba,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Vt = Lt;
    } else
      Vt = [...v.map((Lt) => ({ ...Lt, section: "warmup" })), ...T, ...R.map((Lt) => ({ ...Lt, section: "cooldown" }))].map((Lt) => Lt.kind === "video" ? { ...Lt, duration: Wn(Lt, e), rest: 0 } : Lt.kind === "rest" ? { ...Lt, duration: Lt.useGlobalTiming === !0 ? r : Number(Lt.duration) || r, rest: 0 } : { ...Lt, duration: Lt.useGlobalTiming === !1 && Number(Lt.duration) || e, rest: r }), Vt.forEach((Lt, de) => {
        var ba;
        ((ba = Vt[de + 1]) == null ? void 0 : ba.kind) === "rest" && (Lt.rest = 0);
      }), Vt.length && (Vt[Vt.length - 1].rest = 0);
    const F = Math.max(1, Math.min(10, Number(pe.value) || 1)), st = Vt, mt = (Lt) => F <= 1 ? null : Lt.section === "warmup" || Lt.presetRole === "warmup" ? "first" : Lt.section === "cooldown" || Lt.presetRole === "cooldown" ? "last" : Lt.kind === "video" && (Lt.videoRounds === "first" || Lt.videoRounds === "last") ? Lt.videoRounds : null, lt = (Lt) => !!mt(Lt), it = st.filter((Lt) => !lt(Lt)), Nt = st.filter(lt), te = it.length, Ft = it.reduce((Lt, de) => Lt + de.duration + de.rest, 0), Dt = Nt.reduce((Lt, de) => Lt + de.duration + de.rest, 0), Tt = [
      Nt.some((Lt) => Lt.section === "warmup" || Lt.presetRole === "warmup") && "warm-up",
      Nt.some((Lt) => Lt.section === "cooldown" || Lt.presetRole === "cooldown") && "cooldown",
      Nt.some((Lt) => Lt.kind === "video" && !Lt.section && !Lt.presetRole) && "video"
    ].filter(Boolean), fe = Tt.length > 1 ? Tt.slice(0, -1).join(", ") + " & " + Tt[Tt.length - 1] : Tt[0] || "";
    Vt = [];
    const me = (Lt, de) => {
      const ba = mt(Lt);
      return !ba || (ba === "first" ? de === 1 : de === F);
    };
    for (let Lt = 1; Lt <= F; Lt++)
      if (st.filter((de) => me(de, Lt)).forEach((de, ba) => Vt.push({ ...de, id: de.id + (F > 1 ? "-r" + Lt : ""), round: Lt, roundIndex: ba })), Lt < F && te)
        if (s != null && s.customSequence)
          Vt.push({ id: "round-break-" + Lt, name: "Rest", group: "Round " + (Lt + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Lt, roundIndex: te, roundBreak: !0 });
        else {
          const de = Vt[Vt.length - 1];
          de.rest = r, de.roundBreakAfter = !0;
        }
    pi();
    const jt = Vt.reduce((Lt, de) => Lt + de.duration + de.rest, 0), ge = Math.round(Ft / 60), Le = Math.round(jt / 60), se = F > 1 ? An(ge) + " × " + F + " rounds" + (Dt ? " + " + pa(Dt) + " " + fe : "") + " (" + An(Le) + ")" : An(Le), ne = [v.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), fa = s != null && s.customSequence ? se + " · " + te + " items" + (ne.length && !(F > 1 && Dt) ? " · " + ne.join(" + ") : "") : se + " · " + pa(e) + " / " + pa(r) + (ne.length && !(F > 1 && Dt) ? " · " + ne.join(" + ") : "");
    ft.textContent = pa(Ft);
    const Na = Vt.filter((Lt) => !Lt.roundBreak).length, Ve = F > 1 ? Na + " activities · " + F + " rounds" : te + " activities";
    Se.textContent = F > 1 ? F + " rounds · " + An(Le) + " total" : "1 round", i("roundsCount").textContent = F, n.querySelectorAll("[data-rounds-step]").forEach((Lt) => {
      Lt.disabled = Number(Lt.dataset.roundsStep) < 0 ? F <= 1 : F >= 10;
    }), s && (s.summary = fa, s.activityCount = te);
    const ji = n.querySelector(".workoutPanel.active .sub");
    ji && (ji.textContent = fa), Pa.textContent = fa, Ie(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Lt) => Lt.textContent = Ve), pi(), $e(), Bn(), Rn(), Ln(), Kt && at(), wt.workout.classList.contains("active") && !Qe && Ps();
  }
  const Aa = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Ue = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', fi = {
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
  }, ma = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (fi[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = ma(e.dataset.icon);
  });
  let na = null, La = null;
  function Ss(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Bo(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function hi(e, r, s = {}) {
    const f = e.kind === "rest", v = e.kind === "video", T = v ? e.useVideoLength !== !1 : f ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, R = Number(f ? P.value : A.value), F = Ss(v ? e.useVideoLength === !1 ? e.duration : Wn({ ...e, useVideoLength: !0 }) : T ? R : e.duration || R), st = v && (Number(e.videoDuration) > 0 || Number(e.end) > 0), mt = v ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Gt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([jt, ge]) => '<option value="' + jt + '"' + ((e.videoRounds || "every") === jt ? " selected" : "") + ">" + ge + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.name) + '" placeholder="' + (f ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Gt(e.group) + '" placeholder="' + (f ? "Rest" : "e.g. Glutes + legs") + '"></label>', lt = v ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (st ? " · " + za(Wn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + pa(R), it = document.createElement("div");
    it.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), it.dataset.index = r, it.dataset.id = e.id;
    const Nt = s.isNew ?? (La == null ? void 0 : La.item) === e, te = s.sheet ? '<div class="moveEditActions sheetActions">' + (Nt ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Gt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Nt ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    it.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (v ? " videoFields" : "") + '">' + mt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Gt(lt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + F.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((jt) => '<option value="' + jt + '"' + (jt === F.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[jt] + "</option>").join("") + "</select></div></div>" + te + "</div>";
    const Ft = (jt) => it.querySelector("[data-f=" + jt + "]"), Dt = () => {
      const jt = Ft("global").checked;
      Ft("dur").disabled = jt, Ft("unit").disabled = jt, it.querySelector(".creatorDurationRow").classList.toggle("isDisabled", jt);
    };
    Ft("global").addEventListener("change", Dt), Dt();
    const Tt = () => {
      var jt;
      if (s.sheet) {
        (jt = s.onCancel) == null || jt.call(s);
        return;
      }
      Nt && Xa(), na = null, Te();
    }, fe = () => {
      var Le;
      if (v) {
        me();
        return;
      }
      const jt = Ft("name").value.trim();
      if (!jt) {
        Ft("name").focus();
        return;
      }
      e.name = jt, e.group = Ft("group").value.trim() || (f ? "Rest" : "Movement");
      const ge = Ft("global").checked;
      if (e.useGlobalTiming = ge, ge || (e.duration = Math.max(f ? 5 : 1, bn(Ft("dur").value, Ft("unit").value))), s.sheet) {
        (Le = s.onSaved) == null || Le.call(s);
        return;
      }
      Nt && (La = null), na = null, Te(), De(Nt ? f ? "Rest added" : "Movement added" : "Movement updated");
    }, me = () => {
      var ne;
      const jt = Ft("url").value.trim(), ge = Ms(jt);
      if (!ge) {
        Ft("urlError").hidden = !1, Ft("url").classList.add("invalid"), Ft("url").focus();
        return;
      }
      const Le = ge.id !== e.videoId;
      e.url = jt, e.videoId = ge.id, e.start = ge.start, e.end = ge.end, Le && (e.videoDuration = null, e.videoError = null);
      const se = Ft("name").value.trim();
      e.autoName = !se, e.name = se || (Le ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ft("rounds").value, e.useVideoLength = Ft("global").checked, e.useVideoLength || (e.duration = Math.max(5, bn(Ft("dur").value, Ft("unit").value))), s.sheet ? (ne = s.onSaved) == null || ne.call(s) : (Nt && (La = null), na = null, Te(), De(Nt ? "Video added" : "Video updated")), (Le || !e.videoDuration || e.autoName && !e.videoTitle) && va(e);
    };
    if (v && Ft("url").addEventListener("input", () => {
      Ft("urlError").hidden = !0, Ft("url").classList.remove("invalid");
    }), it.querySelector("[data-a=cancel]").addEventListener("click", Tt), it.querySelector("[data-a=save]").addEventListener("click", fe), s.sheet && !Nt) {
      it.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ge;
        return (ge = s.onHide) == null ? void 0 : ge.call(s);
      });
      const jt = it.querySelector("[data-a=remove]");
      kr(jt, jt.querySelector(".removeFill"), 1200, () => {
        var ge;
        return (ge = s.onRemove) == null ? void 0 : ge.call(s);
      });
    }
    return it.addEventListener("keydown", (jt) => {
      jt.key === "Escape" && (jt.preventDefault(), jt.stopPropagation(), Tt()), jt.key === "Enter" && jt.target.matches("input") && (jt.preventDefault(), fe());
    }), it;
  }
  function En(e, r) {
    const s = i(r);
    s.innerHTML = "", e.forEach((f, v) => {
      if (f === na && !vt()) {
        s.appendChild(hi(f, v));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (f.hidden ? " hidden" : "") + (f.kind === "rest" ? " restItem" : "") + (f.kind === "video" ? " videoItem" : "") + (as(f) ? " noMeta" : ""), T.dataset.index = v, T.dataset.id = f.id;
      const R = f.kind === "rest" ? f.useGlobalTiming === !0 ? "Global timing" : pa(f.duration) : f.useGlobalTiming === !1 ? pa(f.duration) : "Global timing", F = f.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", st = f.kind === "video" ? f.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (f.useVideoLength === !1 ? "stops after " + pa(f.duration) : Number(f.videoDuration) > 0 || Number(f.end) > 0 ? za(Wn(f)) : "plays to the end") + (f.videoRounds === "first" ? " · first round only" : f.videoRounds === "last" ? " · last round only" : "") : f.group + " · " + R, mt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Gt(f.name) + '. Drag, or use the up and down arrow keys">' + Aa + "</button>", lt = '<div class="moveText"><div class="moveItemName">' + Gt(f.name) + F + '</div><div class="moveMeta">' + Gt(st) + "</div></div>", it = (Ft) => Ft.addEventListener("keydown", (Dt) => {
        var me, jt;
        if (Dt.key !== "ArrowUp" && Dt.key !== "ArrowDown") return;
        Dt.preventDefault();
        const Tt = e.indexOf(f), fe = Tt + (Dt.key === "ArrowUp" ? -1 : 1);
        fe < 0 || fe >= e.length || (e.splice(Tt, 1), e.splice(fe, 0, f), Te(), (jt = (me = i(r).children[fe]) == null ? void 0 : me.querySelector(".dragHandle")) == null || jt.focus());
      });
      if (vt()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (f.name || "step")), T.innerHTML = mt + lt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ft = T.querySelector(".dragHandle");
        Ft.addEventListener("pointerdown", (Dt) => _n(Dt, T, s, e)), it(Ft), T.addEventListener("click", (Dt) => {
          Dt.target.closest(".dragHandle") || Wt(f, e);
        }), T.addEventListener("keydown", (Dt) => {
          Dt.key === "Enter" && Dt.target === T && (Dt.preventDefault(), Wt(f, e));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = mt + lt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Gt(f.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (f.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Gt(f.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Ue + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        Xa(), na = f, Te(), Bo();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        f.hidden = !f.hidden, Te();
      });
      const Nt = T.querySelector(".removeBtn");
      kr(Nt, Nt.querySelector(".removeFill"), 1200, () => {
        const Ft = e.indexOf(f);
        Ft < 0 || (e.splice(Ft, 1), Te(), De("Removed " + f.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ft, e.length), 0, f), Te();
        } }));
      });
      const te = T.querySelector(".dragHandle");
      te.addEventListener("pointerdown", (Ft) => _n(Ft, T, s, e)), it(te), s.appendChild(T);
    });
  }
  const Ea = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ro = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function _n(e, r, s, f) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const v = e.currentTarget, T = e.pointerId, R = !Ea();
    try {
      v.setPointerCapture(T);
    } catch {
    }
    const F = r.closest(".exerciseScroller") || No(r), st = s.style.position;
    s.style.position = "relative";
    const mt = [...s.children].filter((ce) => ce.classList.contains("moveRow")), lt = mt.indexOf(r), it = parseFloat(getComputedStyle(s).rowGap) || 8, Nt = r.offsetHeight, te = Nt + it, Ft = mt.map((ce) => ce.offsetTop), Dt = mt.map((ce) => ce.offsetHeight), Tt = () => s.getBoundingClientRect().top, fe = s.getBoundingClientRect().width, me = e.clientY - (Tt() + Ft[lt]), jt = e.clientX;
    let ge = e.clientY, Le = e.clientX, se = Tt() + Ft[lt], ne = 0, fa = 0, Na = 0, Ve = 1, ji = 0, Lt = lt, de = !1, ba = 0, wa = !1, jl = !1, hs = Ft[lt];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Ro(8);
    const zl = () => {
      const ce = ge - me + Nt / 2 - Tt();
      let Me = 0;
      return mt.forEach((We, nn) => {
        nn !== lt && ce > Ft[nn] + Dt[nn] / 2 && Me++;
      }), Me;
    }, Vl = () => {
      mt.forEach((ce, Me) => {
        if (Me === lt) return;
        const We = lt < Lt && Me > lt && Me <= Lt ? -te : lt > Lt && Me >= Lt && Me < lt ? te : 0;
        ce.style.transform = We ? "translateY(" + We + "px)" : "";
      });
    }, al = () => {
      const ce = s.getBoundingClientRect(), Me = Math.abs(Le - jt) > Math.max(80, fe * 0.3) || Le < ce.left - 24 || Le > ce.right + 24;
      Me !== de && (de = Me, r.classList.toggle("willReturn", Me), Ro(Me ? 10 : 4));
      const We = de ? lt : zl();
      We !== Lt && (Lt = We, Vl(), de || Ro(4));
    }, zi = () => {
      if (Lt === lt) return Ft[lt];
      const ce = mt.filter((We, nn) => nn !== lt);
      let Me = Ft[0];
      for (let We = 0; We < Lt; We++) Me += ce[We].offsetHeight + it;
      return Me;
    }, ms = () => {
      const ce = R ? Math.min(Math.abs(ne) / 40, 1) : 0, Me = R && !wa ? Math.max(-3, Math.min(3, Na * 0.6)) : 0;
      r.style.transform = "translate(" + fa.toFixed(2) + "px," + (se - (Tt() + Ft[lt])).toFixed(2) + "px) rotate(" + Me.toFixed(2) + "deg) scale(" + (Ve * (1 - 0.04 * ce)).toFixed(4) + "," + (Ve * (1 + 0.06 * ce)).toFixed(4) + ")";
    }, ie = () => {
      ba = requestAnimationFrame(ie);
      const ce = Le - jt, Me = wa ? Tt() + hs : ge - me, We = wa ? 0 : de ? ce * 0.9 : Math.max(-22, Math.min(22, ce * 0.22)), nn = wa ? 1 : de ? 0.97 : 1.035;
      if (!R) {
        se = Me, fa = wa ? 0 : We, Ve = 1, ms(), wa && Ze();
        return;
      }
      const Wp = wa ? 0.24 : 0.2, qp = wa ? 0.62 : 0.68;
      ne = (ne + (Me - se) * Wp) * qp, se += ne, Na = (Na + (We - fa) * 0.16) * 0.7, fa += Na, ji = (ji + (nn - Ve) * 0.22) * 0.6, Ve += ji, ms(), wa && Math.abs(ne) < 0.15 && Math.abs(Me - se) < 0.5 && Math.abs(fa) < 0.5 && Math.abs(Ve - 1) < 3e-3 && Ze();
    }, Re = setInterval(() => {
      if (!F || wa) return;
      const ce = F.getBoundingClientRect(), Me = 56, We = ge < ce.top + Me ? -10 : ge > ce.bottom - Me ? 10 : 0;
      We && (F.scrollTop += We, al());
    }, 30);
    function Ze() {
      if (jl) return;
      jl = !0, cancelAnimationFrame(ba);
      const ce = Lt !== lt, Me = r.dataset.id;
      if (s.classList.remove("reordering"), mt.forEach((nn) => {
        nn.style.transition = "none", nn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = st, ce) {
        const [nn] = f.splice(lt, 1);
        f.splice(Lt, 0, nn);
      }
      Te();
      const We = Me && s.querySelector('.moveRow[data-id="' + Me + '"]');
      We && R && We.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ce && De("Order saved");
    }
    const xa = (ce) => {
      if (ce.pointerId === T) {
        if (ce.pointerType === "mouse" && ce.buttons === 0) {
          Tn();
          return;
        }
        ge = ce.clientY, Le = ce.clientX, al();
      }
    }, an = (ce) => {
      ce.pointerId === T && Tn();
    };
    function Tn() {
      wa || (window.removeEventListener("pointermove", xa, !0), window.removeEventListener("pointerup", an, !0), window.removeEventListener("pointercancel", an, !0), v.removeEventListener("lostpointercapture", Tn), clearInterval(Re), de && Lt !== lt && (Lt = lt, Vl()), hs = zi(), wa = !0, Ro(6), setTimeout(Ze, 800));
    }
    window.addEventListener("pointermove", xa, !0), window.addEventListener("pointerup", an, !0), window.addEventListener("pointercancel", an, !0), v.addEventListener("lostpointercapture", Tn), ba = requestAnimationFrame(ie), ms();
  }
  function $e() {
    var v, T, R, F;
    const e = ae[Qt], r = (v = i("warmupList")) == null ? void 0 : v.closest("section"), s = (T = i("cooldownList")) == null ? void 0 : T.closest("section"), f = (F = (R = i("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : F.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), f && (f.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), f && (f.textContent = "Kettlebell work")), En(xe, "warmupList"), En(Ke, "strengthList"), En(ze, "cooldownList");
  }
  function Xa() {
    if (!La) return;
    const { item: e, arr: r } = La;
    La = null;
    const s = r.indexOf(e);
    s >= 0 && r.splice(s, 1), na === e && (na = null);
  }
  function ye(e) {
    return e.id === "warmupList" ? { arr: xe, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: ze, kind: "cooldown", group: "Cooldown" } : { arr: Ke, kind: "work", group: "" };
  }
  function cn(e, r) {
    const s = ye(r), f = Date.now().toString(36);
    return e === "video" ? { id: "video-" + f, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + f, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + f, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(A.value) };
  }
  const _a = "cubic-bezier(.34,1.46,.64,1)";
  function mi(e, r) {
    if (Ea() || !e) {
      r();
      return;
    }
    const s = (T) => {
      var R;
      return ((R = T.dataset) == null ? void 0 : R.id) || T;
    }, f = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], v = new Map(f().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), f().forEach((T) => {
      const R = v.get(s(T));
      if (R === void 0) return;
      const F = R - T.getBoundingClientRect().top;
      Math.abs(F) < 0.5 || T.animate([{ transform: "translateY(" + F + "px)" }, { transform: "none" }], { duration: 440, easing: _a });
    });
  }
  function Pr(e, r) {
    if (!e || Ea()) return;
    const s = e.offsetHeight, f = Math.max(0, s - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + f + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: _a });
  }
  function po(e, r, s, f) {
    const { arr: v } = ye(r), T = cn(e, r);
    v.splice(Math.max(0, Math.min(s, v.length)), 0, T), La = { item: T, arr: v }, na = T, mi(r.closest(".exerciseScroller,.createStepSlot") || r, () => Te());
    const R = r.querySelector(".moveRow.editing");
    return Pr(R, f), Bo(e === "rest"), R;
  }
  function No(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const x = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function C(e, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Aa + '</span><span class="addGhostText"><strong>' + Gt(r[0]) + "</strong><small>" + Gt(r[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function L(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function H(e, r, s, f) {
    (na || La) && (Xa(), na = null, Te());
    const v = e.getBoundingClientRect(), T = C(r, x[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = v.width + "px", T.style.height = v.height + "px", T.style.transform = "translate(" + v.left + "px," + v.top + "px)", e.classList.add("lifting");
    const R = No(e);
    return Y({
      ghost: T,
      origin: v,
      sx: s,
      sy: f,
      scroller: R,
      column: e.closest(".exerciseScroller,.createFlow") || R,
      home: () => e.getBoundingClientRect(),
      onDrop: (F, st, mt) => {
        L(T), e.classList.remove("lifting"), po(r, F, st, mt);
      },
      onReturn: () => {
        L(T), e.classList.remove("lifting");
      }
    });
  }
  function Y({ ghost: e, origin: r, sx: s, sy: f, scroller: v, column: T, home: R, onDrop: F, onReturn: st, rowLook: mt = !1 }) {
    var ms;
    const lt = !Ea(), it = ((ms = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ms.offsetHeight) || 80, Nt = s - r.left, te = f - r.top, Ft = 44;
    let Dt = s, Tt = f, fe = r.left, me = r.top, jt = 0, ge = 0, Le = !lt, se = null, ne = null, fa = -1, Na = 0, Ve = null;
    const ji = () => ["warmupList", "strengthList", "cooldownList"].map((ie) => i(ie)).filter((ie) => ie && ie.getClientRects().length && !ie.closest("[hidden]")), Lt = (ie) => {
      if (ie === se) return;
      se = ie, e.classList.toggle("overList", !!ie || mt);
      const Re = ie ? ie.getBoundingClientRect().width : r.width;
      e.style.width = Re + "px", e.style.height = (ie ? it : r.height) + "px";
    }, de = (ie) => {
      ie.classList.add("leaving"), ie.style.height = "0px", ie.style.marginTop = "-8px", setTimeout(() => ie.remove(), lt ? 320 : 0);
    }, ba = (ie, Re, Ze) => {
      if (ne && ne.parentNode === ie && fa === Ze || (ne && (de(ne), ne = null, fa = -1), !ie)) return;
      const xa = document.createElement("div");
      xa.className = "dropSlot", ie.insertBefore(xa, Re), ne = xa, fa = Ze, xa.getBoundingClientRect(), xa.style.height = it + "px", xa.style.marginTop = "0px";
    }, wa = () => {
      let ie = null, Re = 1 / 0;
      for (const Tn of ji()) {
        const ce = Tn.getBoundingClientRect();
        if (Dt < ce.left - 48 || Dt > ce.right + 48) continue;
        const Me = ce.top - 28, We = ce.bottom + 28, nn = Tt < Me ? Me - Tt : Tt > We ? Tt - We : 0;
        nn < Re && (Re = nn, ie = Tn);
      }
      const Ze = T == null ? void 0 : T.getBoundingClientRect(), an = Ze && Dt >= Ze.left && Dt <= Ze.right && Tt >= Ze.top && Tt <= Ze.bottom || Re === 0 ? ie : null;
      if (an) {
        const Tn = [...an.children].filter((Me) => Me.classList.contains("moveRow"));
        let ce = Tn.findIndex((Me) => {
          const We = Me.getBoundingClientRect();
          return Tt < We.top + We.height / 2;
        });
        ce < 0 && (ce = Tn.length), ba(an, Tn[ce] || null, ce);
      } else ba(null);
      Lt(an);
    }, jl = () => {
      if (Ve) return Ve.aim();
      if (se) {
        const ie = se.getBoundingClientRect();
        let Re = Tt - it / 2;
        return ne && (Re = Re * 0.6 + ne.getBoundingClientRect().top * 0.4), { x: ie.left, y: Re };
      }
      return { x: Dt - Nt, y: Tt - te };
    }, hs = (ie, Re, Ze, xa) => {
      e.style.transform = "translate(" + fe + "px," + me + "px) rotate(" + ie + "deg) rotate(" + Re + "rad) scale(" + Ze + "," + xa + ") rotate(" + -Re + "rad)";
    }, zl = () => {
      if (Na = requestAnimationFrame(zl), !Le) {
        const ce = Dt - s, Me = Tt - f, We = Math.min(Math.hypot(ce, Me) / Ft, 1);
        fe = r.left + ce * 0.35, me = r.top + Me * 0.35, hs(0, Math.atan2(Me, ce), 1 + 0.155 * We, 1 - 0.1 * We);
        return;
      }
      const ie = jl();
      if (!lt) {
        fe = ie.x, me = ie.y, hs(0, 0, 1, 1), Ve && (cancelAnimationFrame(Na), Ve.done());
        return;
      }
      const Re = Ve ? Ve.k : 0.17, Ze = Ve ? Ve.d : 0.7;
      jt = (jt + (ie.x - fe) * Re) * Ze, ge = (ge + (ie.y - me) * Re) * Ze, fe += jt, me += ge;
      const xa = Math.hypot(jt, ge), an = Math.min(xa / 48, 1), Tn = se || Ve ? 0 : Math.max(-5, Math.min(5, jt * 0.32));
      hs(Tn, Math.atan2(ge, jt), 1 + 0.1 * an, 1 - 0.063 * an), Ve && xa < 0.15 && Math.hypot(ie.x - fe, ie.y - me) < 0.6 && (cancelAnimationFrame(Na), Ve.done());
    }, Vl = setInterval(() => {
      if (!v || Ve) return;
      const ie = v.getBoundingClientRect(), Re = 64, Ze = Tt < ie.top + Re ? -(ie.top + Re - Tt) / 4 : Tt > ie.bottom - Re ? (Tt - (ie.bottom - Re)) / 4 : 0;
      Ze && (v.scrollTop += Math.max(-18, Math.min(18, Ze)), wa());
    }, 30);
    Na = requestAnimationFrame(zl);
    let al = !1;
    const zi = (ie, Re) => {
      if (al) return;
      al = !0, cancelAnimationFrame(Na);
      const Ze = ne ? ne.offsetHeight : it;
      !ie && ne && (ne.remove(), ne = null), ie ? F(ie, Re, Ze) : st();
    };
    return {
      move(ie, Re) {
        Dt = ie, Tt = Re, !Le && Math.hypot(Dt - s, Tt - f) > Ft && (Le = !0, jt = (Dt - s) * 0.085, ge = (Tt - f) * 0.085), Le && wa();
      },
      drop(ie) {
        clearInterval(Vl);
        const Re = se, Ze = fa;
        if (!ie && Re && ne) {
          const xa = ne;
          Ve = { k: 0.24, d: 0.62, aim: () => {
            const an = xa.getBoundingClientRect();
            return { x: an.left, y: an.top };
          }, done: () => zi(Re, Ze) }, setTimeout(() => zi(Re, Ze), 650), lt || (cancelAnimationFrame(Na), zi(Re, Ze));
          return;
        }
        ba(null), Lt(null), Ve = { k: 0.2, d: 0.66, aim: () => {
          const xa = R();
          return { x: xa.left, y: xa.top };
        }, done: () => zi(null) }, setTimeout(() => zi(null), 650), lt || (cancelAnimationFrame(Na), zi(null));
      }
    };
  }
  function $(e, r) {
    let s = !1;
    e.addEventListener("click", (f) => {
      if (s) {
        s = !1, f.preventDefault();
        return;
      }
      if (vt()) {
        Zt(r);
        return;
      }
      const v = i("strengthList"), T = po(r, v, ye(v).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: Ea() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (f) => {
      if (f.button !== void 0 && f.button !== 0) return;
      const v = f.pointerId, T = f.clientX, R = f.clientY;
      let F = null, st = !1;
      try {
        e.setPointerCapture(v);
      } catch {
      }
      const mt = (Tt) => {
        if (Tt.pointerId === v) {
          if (Tt.pointerType === "mouse" && Tt.buttons === 0) {
            Dt(!1);
            return;
          }
          if (!F) {
            if (Math.hypot(Tt.clientX - T, Tt.clientY - R) < 6) return;
            F = H(e, r, T, R);
          }
          F.move(Tt.clientX, Tt.clientY);
        }
      }, lt = (Tt) => {
        Tt.pointerId === v && Dt(!1);
      }, it = (Tt) => {
        Tt.pointerId === v && Dt(!0);
      }, Nt = () => Dt(!1), te = () => Dt(!0), Ft = (Tt) => {
        Tt.key === "Escape" && F && (Tt.preventDefault(), Tt.stopPropagation(), Dt(!0));
      };
      function Dt(Tt) {
        if (!st && (st = !0, window.removeEventListener("pointermove", mt, !0), window.removeEventListener("pointerup", lt, !0), window.removeEventListener("pointercancel", it, !0), window.removeEventListener("keydown", Ft, !0), window.removeEventListener("blur", te), e.removeEventListener("lostpointercapture", Nt), F)) {
          const fe = F;
          F = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), fe.drop(Tt);
        }
      }
      window.addEventListener("pointermove", mt, !0), window.addEventListener("pointerup", lt, !0), window.addEventListener("pointercancel", it, !0), window.addEventListener("keydown", Ft, !0), window.addEventListener("blur", te), e.addEventListener("lostpointercapture", Nt);
    });
  }
  const ct = (rc = window.matchMedia) == null ? void 0 : rc.call(window, "(max-width: 620px)");
  function vt() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const yt = (e) => e.charAt(0).toUpperCase() + e.slice(1), Ht = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let At = null, Ct = null;
  function Yt(e, r, s, f) {
    It(), i("sheetTitle").textContent = e;
    const v = i("sheetBody");
    v.innerHTML = "", v.appendChild(r), At = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !v.contains(r)) return;
      const T = f ? v.querySelector("input[data-f=url],input[data-f=name]") : v.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, Ea() ? 0 : 360);
  }
  function It() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = At;
    At = null, r == null || r(), setTimeout(ue, 0);
  }
  i("sheetScrim").addEventListener("click", It), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), It());
  });
  function Wt(e, r) {
    const s = hi(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        It(), Te(), De(yt(Ht(e)) + " updated");
      },
      onCancel: It,
      onHide() {
        e.hidden = !e.hidden, It(), Te(), De((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        It();
        const f = r.indexOf(e);
        f < 0 || (r.splice(f, 1), Te(), De("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(f, r.length), 0, e), Te();
        } }));
      }
    });
    Yt("Edit " + Ht(e), s, null, !1);
  }
  function $t() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, f, v]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ma(s) + "</span><span><strong>" + f + "</strong><small>" + v + "</small></span>", T.addEventListener("click", () => Zt(r)), e.appendChild(T);
    }), Yt("Add to the move", e, null, !1);
  }
  function Zt(e) {
    Ct && Dn();
    const r = cn(e, i("strengthList")), s = hi(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        It(), Oe(r, e);
      },
      onCancel: It
    });
    Yt("New " + Ht(r), s, null, !0);
  }
  const Et = i("workoutModal").querySelector(".modalStatic"), ee = { parent: Et.parentNode, next: Et.nextSibling };
  function re() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Et);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", It), e.appendChild(r), Yt("Setup", e, () => {
      ee.parent.insertBefore(Et, ee.next), Ie();
    }, !1);
  }
  function Ie() {
    var r, s;
    const e = i("setupSummaryName");
    e && (e.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = ae[Qt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = Pa.textContent);
  }
  i("setupSummary").addEventListener("click", re), i("addFab").addEventListener("click", $t);
  function Bt() {
    const e = i("strengthList");
    return No(e) || e.closest(".exerciseScroller");
  }
  function Ne() {
    const e = i("strengthList").getBoundingClientRect(), r = (Bt() || i("strengthList")).getBoundingClientRect(), s = (Ct == null ? void 0 : Ct.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function Oe(e, r) {
    var F;
    const s = C(r, [e.name || x[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const f = document.createElement("span");
    f.className = "addGhostActions", f.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Gt(e.name) + '">✕</button>', s.appendChild(f), Ct = { item: e, type: r, ghost: s };
    const v = ((F = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : F.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = v + "px";
    const T = Ne(), R = Ia.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + R + "px)", s.getBoundingClientRect(), Ea() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", f.querySelector("[data-a=end]").addEventListener("click", Dn), f.querySelector("[data-a=discard]").addEventListener("click", Po), s.addEventListener("pointerdown", pn);
  }
  function pn(e) {
    if (!Ct || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: s } = Ct, f = e.pointerId;
    try {
      s.setPointerCapture(f);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const v = s.getBoundingClientRect(), T = Bt(), R = Y({
      ghost: s,
      origin: { left: v.left, top: v.top, width: v.width, height: v.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: T,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Ne,
      onDrop: (Dt, Tt, fe) => {
        Ct = null, L(s), sa(r, Dt, Tt, fe);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let F = !1;
    const st = (Dt) => {
      if (Dt.pointerId === f) {
        if (Dt.pointerType === "mouse" && Dt.buttons === 0) {
          Ft(!1);
          return;
        }
        R.move(Dt.clientX, Dt.clientY);
      }
    }, mt = (Dt) => {
      Dt.pointerId === f && Ft(!1);
    }, lt = (Dt) => {
      Dt.pointerId === f && Ft(!0);
    }, it = () => Ft(!1), Nt = () => Ft(!0), te = (Dt) => {
      Dt.key === "Escape" && (Dt.preventDefault(), Ft(!0));
    };
    function Ft(Dt) {
      F || (F = !0, window.removeEventListener("pointermove", st, !0), window.removeEventListener("pointerup", mt, !0), window.removeEventListener("pointercancel", lt, !0), window.removeEventListener("keydown", te, !0), window.removeEventListener("blur", Nt), s.removeEventListener("lostpointercapture", it), R.drop(Dt));
    }
    window.addEventListener("pointermove", st, !0), window.addEventListener("pointerup", mt, !0), window.addEventListener("pointercancel", lt, !0), window.addEventListener("keydown", te, !0), window.addEventListener("blur", Nt), s.addEventListener("lostpointercapture", it);
  }
  function sa(e, r, s, f) {
    const v = ye(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = v.kind, v.group && (!e.group || e.group === "Movement") && (e.group = v.group)), v.arr.splice(Math.max(0, Math.min(s, v.arr.length)), 0, e), mi(r.closest(".exerciseScroller,.createStepSlot") || r, () => Te()), Pr(r.querySelector('.moveRow[data-id="' + e.id + '"]'), f), De(yt(Ht(e)) + " added");
  }
  function Dn() {
    var f;
    if (!Ct) return;
    const { item: e, ghost: r } = Ct;
    Ct = null, L(r);
    const s = i("strengthList");
    sa(e, s, ye(s).arr.length, 0), (f = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || f.scrollIntoView({ block: "nearest", behavior: Ea() ? "auto" : "smooth" });
  }
  function Po() {
    if (!Ct) return;
    const e = Ct.ghost;
    Ct = null, L(e), De("Discarded");
  }
  function Qi() {
    Ct && (Ct.ghost.remove(), Ct = null);
  }
  window.addEventListener("resize", () => {
    if (Ct != null && Ct.ghost.classList.contains("hovering")) {
      const e = Ne();
      Ct.ghost.style.width = e.width + "px", Ct.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (sc = ct == null ? void 0 : ct.addEventListener) == null || sc.call(ct, "change", () => {
    It(), Ct && !vt() && Dn(), $e();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function ue() {
    const e = i("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !vt()) {
      xn();
      return;
    }
    const s = r ? r.offsetTop : 0, f = r ? r.offsetLeft : 0, v = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: v + "px", height: T + "px", top: s + "px", left: f + "px" });
    const R = e.getBoundingClientRect();
    Math.abs(R.top - s) > 0.5 && (e.style.top = 2 * s - R.top + "px"), Math.abs(R.left - f) > 0.5 && (e.style.left = 2 * f - R.left + "px");
  }
  function xn() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (lc = window.visualViewport) == null || lc.addEventListener("resize", ue), (dc = window.visualViewport) == null || dc.addEventListener("scroll", ue), window.addEventListener("resize", ue), window.addEventListener("scroll", ue, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ue, 250));
  function Bn() {
    Ke.length > 0;
    const e = i("addMovementBtn"), r = i("addRestBtn");
    e && (e.innerHTML = Aa + "<span>Add movement</span>"), r && (r.innerHTML = Aa + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = Aa + "<span>Add video</span>");
  }
  function Rn() {
    const e = i("useGlobalTiming").checked, r = i("addMovementDuration"), s = i("addMovementUnit");
    r.disabled = e, s.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + pa(A.value);
    const f = i("useGlobalRestTiming").checked, v = i("addRestDuration"), T = i("addRestUnit");
    v.disabled = f, T.disabled = f, v.parentElement.style.opacity = f ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + pa(P.value);
  }
  let uo = "movement";
  function Ir(e) {
    uo = e;
    const r = i("movementFields"), s = i("restFields");
    r.hidden = e !== "movement", s.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Rn();
  }
  function yn() {
    ae[Qt];
    const e = Kt ? !0 : i("useGlobalTiming").checked, r = e ? Number(A.value) : bn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = Kt ? !0 : i("useGlobalRestTiming").checked, f = s ? Number(P.value) : bn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (uo === "rest") {
      const v = i("addRestTitle").value.trim() || "Rest", T = i("addRestGroup").value.trim() || "Rest";
      Ke.push({
        id: "rest-" + Date.now(),
        name: v,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, f || Number(P.value))
      }), Te(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", De("Rest added"), Kt && (S("movements"), at());
    } else {
      const v = i("addMovementInput").value.trim();
      if (!v) return;
      const T = i("addMovementGroup").value.trim() || "Movement";
      Ke.push({
        id: "movement-" + Date.now(),
        name: v,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(A.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Te(), i("movementCreator").hidden = !0, De("Movement added"), Kt && (S("movements"), at());
    }
    Bn();
  }
  let Da = null;
  function De(e, r) {
    const s = i("toast");
    s.innerHTML = "";
    const f = document.createElement("span");
    if (f.textContent = e, s.appendChild(f), r) {
      const v = document.createElement("button");
      v.type = "button", v.className = "toastAction", v.textContent = r.label, v.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(Da);
      }), s.appendChild(v);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(Da), Da = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const tr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], er = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Hr(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function fo(e, r) {
    return tr[Hr(r)];
  }
  function cd(e) {
    return er[Hr(e)];
  }
  function Ye(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function qn() {
    return { morning: he().morningTime || "08:00", evening: he().eveningTime || "19:00" };
  }
  function gi(e) {
    const [r, s] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function dl(e) {
    const r = qn();
    return e.getHours() * 60 + e.getMinutes() >= gi(r.evening) ? "evening" : "morning";
  }
  function ar(e, r) {
    return we.checkins.find((s) => s.date === e && s.slot === r);
  }
  function vi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function nr() {
    const e = /* @__PURE__ */ new Date(), r = Ye(e), s = dl(e), f = qn(), v = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && v < gi(f.morning) || vi(ar(r, s)) ? null : s;
  }
  const ho = i("checkinModal"), mo = i("checkinTab"), jn = i("checkinBadge"), zn = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Fr(e) {
    const { input: r, fill: s } = zn[e];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", fo(e, r.value));
  }
  Object.keys(zn).forEach((e) => zn[e].input.addEventListener("input", () => Fr(e)));
  let kn = null;
  function cl() {
    const e = qn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < gi(e.morning) ? "Next check-in at " + e.morning : s < gi(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function pd() {
    const e = qn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), f = (v, T) => {
      const [R, F] = v.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), R, F);
    };
    return s < gi(e.morning) ? { date: f(e.morning), time: e.morning } : s < gi(e.evening) ? { date: f(e.evening), time: e.evening } : { date: f(e.morning, !0), time: e.morning };
  }
  let Io = null, Va = null;
  function pl() {
    if (nr()) {
      or(), go();
      return;
    }
    const e = pd(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), f = Math.floor(r % 3600 / 60), v = r % 60;
    i("peekCountdown").textContent = s + ":" + String(f).padStart(2, "0") + ":" + String(v).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function ul() {
    pl(), mo.classList.add("peek"), clearInterval(Va), Va = setInterval(pl, 1e3), clearTimeout(Io), Io = setTimeout(or, 6e3);
  }
  function or() {
    mo.classList.remove("peek"), clearInterval(Va), clearTimeout(Io);
  }
  function ir() {
    const e = nr();
    if (!e) {
      mo.classList.contains("peek") ? or() : ul();
      return;
    }
    kn = { date: Ye(/* @__PURE__ */ new Date()), slot: e };
    const s = ar(kn.date, e), f = we.checkins.find((v) => vi(v));
    Object.keys(zn).forEach((v) => {
      zn[v].input.value = (s == null ? void 0 : s[v]) ?? (f == null ? void 0 : f[v]) ?? 50, Fr(v);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ho.classList.add("open"), ho.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => zn.mood.input.focus());
  }
  function rr() {
    ho.classList.remove("open"), ho.setAttribute("aria-hidden", "true"), kn && (Ho = kn.date + "-" + kn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ho);
    } catch {
    }
    kn = null, go();
  }
  function ud() {
    if (!kn) return;
    if (vi(ar(kn.date, kn.slot))) {
      rr();
      return;
    }
    const { date: e, slot: r } = kn;
    let s = ar(e, r);
    s || (s = { date: e, slot: r }, we.checkins.unshift(s), we.checkins = we.checkins.slice(0, 2e3)), s.mood = Number(zn.mood.input.value), s.energy = Number(zn.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), $a(), d.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: fo("mood", s.mood), energy_label: fo("energy", s.energy) }), De((r === "morning" ? "Morning" : "Evening") + " check-in saved"), rr(), Or(), sr(), Xo(), tn();
  }
  let Ho = "";
  try {
    Ho = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function go() {
    const e = nr();
    jn.hidden = !e, mo.hidden = !e, e || or(), mo.classList.toggle("due", !!e), mo.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : cl()), mo.title = e ? "Check in now" : cl();
  }
  function Cs() {
    go();
    const e = nr();
    !e || ho.classList.contains("open") || he().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !wt.home.classList.contains("active") || Ia.classList.contains("open") || Ho !== Ye(/* @__PURE__ */ new Date()) + "-" + e && ir());
  }
  mo.addEventListener("click", ir), i("checkinLater").addEventListener("click", rr), i("checkinSave").addEventListener("click", ud), ho.addEventListener("click", (e) => {
    e.target === ho && rr();
  }), ho.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), rr());
  }), setInterval(Cs, 3e4);
  function Or() {
    const e = Ye(/* @__PURE__ */ new Date()), r = (s) => we.checkins.find((f) => f.date === e && f[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, f]) => {
      const v = r(s);
      i(f).textContent = v ? fo(s, v[s]) : "—";
    });
  }
  function sr() {
    const e = i("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), f = [...Array(7)].map((mt, lt) => {
      const it = new Date(s.getFullYear(), s.getMonth(), s.getDate() + lt), Nt = Ye(it), te = we.checkins.filter((Dt) => Dt.date === Nt), Ft = (Dt) => {
        const Tt = te.map((fe) => fe[Dt]).filter((fe) => fe != null);
        return Tt.length ? Tt.reduce((fe, me) => fe + me, 0) / Tt.length : null;
      };
      return { d: it, key: Nt, mood: Ft("mood"), energy: Ft("energy"), count: te.filter(vi).length, future: it > r && Nt !== Ye(r) };
    }), v = (mt) => {
      const lt = f.map((it) => it[mt]).filter((it) => it != null);
      return lt.length ? lt.reduce((it, Nt) => it + Nt, 0) / lt.length : null;
    }, T = v("mood"), R = v("energy"), F = (mt, lt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + mt + "</span><span>" + (lt == null ? "—" : Gt(fo("", lt))) + '</span></div><div class="feelTrack"><span style="width:' + (lt == null ? 0 : Math.max(4, lt)) + "%;background:" + (lt == null ? "transparent" : cd(lt)) + '"></span></div></div>', st = f.filter((mt) => mt.mood != null && mt.energy != null).sort((mt, lt) => lt.mood + lt.energy - (mt.mood + mt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Gt(fo("", (T + R) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (st ? " · best day " + Gt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(st.d)) : "")) + '</div></div></div><div class="feelDays">' + f.map(
      (mt) => '<div class="weekChip feelDay' + (mt.future ? " future" : "") + (mt.key === Ye(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Gt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(mt.d)) + "</strong>" + (mt.count >= 2 ? '<span class="weekTick">' + ma("check") + "</span>" : '<span class="feelDots">' + "●".repeat(mt.count) + "</span>") + "</div>" + F("Mood", mt.mood) + F("Energy", mt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const bi = i("upcomingCountSetting");
  bi.addEventListener("change", () => {
    so = bi.value === "all" ? "all" : Number(bi.value), zo();
  });
  const lr = i("tempoRevealBtn"), Wr = i("tempoExperiment"), Nn = i("tempoQuad"), Fo = i("tempoDot"), fd = i("tempoEstimate"), fl = i("tempoReadout");
  let wi = { x: 0.5, y: 0.5 }, Vn = !1, xi = { total: 20, work: 45, rest: 15 };
  function dr(e, r, s, f) {
    const v = Math.max(r, Math.min(s, e));
    return Math.round((v - r) / f) * f + r;
  }
  function hl(e, r) {
    const s = (e - 0.5) * 2, f = (r - 0.5) * 2, v = dr(
      xi.total + s * 5 + f * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), T = dr(
      xi.work + s * 10 + f * 8,
      Number(A.min),
      Number(A.max),
      Number(A.step)
    ), R = dr(
      xi.rest + s * 6 + f * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return _.value = v, A.value = T, P.value = R, dt.textContent = T + " sec", q.textContent = R + " sec", pi(), { total: v, work: T, rest: R };
  }
  function cr(e, r) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", f = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", v = hl(e, r);
    fl.textContent = s + " + " + f, fd.textContent = v.total + " min", Nn.setAttribute("aria-valuetext", s + " and " + f + ", estimated " + v.total + " minutes");
  }
  function Ts(e) {
    const r = Nn.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), f = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    wi = { x: s, y: f }, Fo.style.left = s * 100 + "%", Fo.style.top = f * 100 + "%", cr(s, f);
  }
  lr.addEventListener("click", () => {
    const e = Wr.hidden;
    Wr.hidden = !e, lr.setAttribute("aria-expanded", e ? "true" : "false"), lr.textContent = e ? "Now close this" : "Don’t try this!", e && (xi = {
      total: Number(_.value),
      work: Number(A.value),
      rest: Number(P.value)
    }, wi = { x: 0.5, y: 0.5 }, Fo.style.left = "50%", Fo.style.top = "50%", cr(wi.x, wi.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const qr = i("testingFeedbackForm"), ml = i("testingFeedbackThanks"), hd = i("testingFeedbackAgain");
  qr.addEventListener("submit", (e) => {
    e.preventDefault(), qr.hidden = !0, ml.hidden = !1, De("Feedback captured for prototype");
  }), hd.addEventListener("click", (e) => {
    e.preventDefault(), qr.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), ml.hidden = !0, qr.hidden = !1;
  }), Nn.addEventListener("pointerdown", (e) => {
    var r;
    Vn = !0, Ts(e);
    try {
      (r = Nn.setPointerCapture) == null || r.call(Nn, e.pointerId);
    } catch {
    }
  }), Nn.addEventListener("pointermove", (e) => {
    Vn && Ts(e);
  }), Nn.addEventListener("pointerup", (e) => {
    Vn && (Vn = !1, Ts(e), Te());
  }), Nn.addEventListener("pointercancel", () => Vn = !1), Nn.addEventListener("keydown", (e) => {
    let { x: r, y: s } = wi, f = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : f = !1, f && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), wi = { x: r, y: s }, Fo.style.left = r * 100 + "%", Fo.style.top = s * 100 + "%", cr(r, s), Te());
  });
  const Ia = i("workoutModal");
  let Gn = null;
  function Oo(e) {
    return e.map((r) => ({ ...r }));
  }
  function md() {
    const e = ae[Qt];
    return {
      key: Qt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Oo(xe),
      strength: Oo(Ke),
      cooldown: Oo(ze),
      total: Number(_.value),
      work: Number(A.value),
      rest: Number(P.value),
      rounds: Number(pe.value) || 1
    };
  }
  function gl(e = !1) {
    Kt = !!e, na = null, La = null, It(), Qi(), Gn = md(), i("moveEditorTitle").textContent = Kt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Kt, i("warmupRow").hidden = Kt, i("deleteMoveOpen").hidden = Kt;
    const r = i("createMoveOptions");
    r.hidden = !Kt;
    {
      const s = ae[Qt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (As(), Kt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = ae[Qt];
      Do((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Ir("movement"), Bn(), Rn(), Wr.hidden = !0, lr.setAttribute("aria-expanded", "false"), lr.textContent = "Don’t try this!", Ia.classList.toggle("createMode", Kt), Ia.querySelector(".modal").classList.toggle("createMode", Kt), Ia.classList.add("open"), Ia.setAttribute("aria-hidden", "false"), ue(), Kt && Pt();
  }
  function yi() {
    const e = ae[Qt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function As() {
    const e = yi(), r = i("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ae[Qt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, Ji()) : (e.warmupOff = !e.warmupOff, Te()), As());
  });
  function pr() {
    It(), Qi(), xn(), La = null, na = null, Ia.classList.contains("createMode") && G(), Ia.classList.remove("createMode"), Ia.querySelector(".modal").classList.remove("createMode"), Ia.classList.remove("open"), Ia.setAttribute("aria-hidden", "true");
  }
  function Ls() {
    if (!Gn) return;
    const e = Gn;
    e.profile && (ae[e.key] = JSON.parse(JSON.stringify(e.profile))), Qt = e.key, xe = Oo(e.warmup), Ke = Oo(e.strength), ze = Oo(e.cooldown), _.value = e.total, A.value = e.work, P.value = e.rest, pe.value = e.rounds || 1;
    const r = ae[Qt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((f) => f.classList.toggle("active", f.dataset.workout === Qt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const f = s.querySelector(".workoutName");
        f && (f.textContent = r.name);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      m.value = r.name;
    }
    Te();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Kt) {
      const e = Qt;
      delete ae[e], Kt = !1, Rt = null, ra(we.order.find((r) => ae[r]) || Object.keys(ae)[0]);
    } else
      Ls();
    pr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    It(), Ct && Dn();
    const e = ae[Qt], r = m.value.trim() || "New move";
    if (e && (e.name = r), Xa(), na = null, Te(), Kt && e)
      Ta(Qt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === Qt)), Kt = !1, Rt = null, we.order.includes(Qt) || we.order.push(Qt), De("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const f = s.querySelector(".workoutName");
        f && (f.textContent = r);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = r);
      }
      De("Move saved");
    }
    Gn = null, pr(), $a();
  }), Ia.addEventListener("click", (e) => {
    if (e.target === Ia) {
      if (Kt) {
        const r = Qt;
        delete ae[r], Kt = !1, Rt = null, ra(we.order.find((s) => ae[s]) || Object.keys(ae)[0]);
      } else
        Ls();
      pr();
    }
  }), $(i("addMovementBtn"), "movement"), $(i("addRestBtn"), "rest"), $(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Rn), i("useGlobalRestTiming").addEventListener("change", Rn), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Do(e.dataset.movePreset, !0), Te();
  })), i("includeWarmupPreset").addEventListener("change", Ji), i("includeCooldownPreset").addEventListener("change", Ji), i("includeWarmupPreset").addEventListener("change", at), i("includeCooldownPreset").addEventListener("change", at), m.addEventListener("input", at), m.addEventListener("input", Ie), i("confirmAddMovement").addEventListener("click", yn), i("confirmAddRest").addEventListener("click", yn), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && yn();
  });
  const ki = i("countdown"), jr = i("countNum"), Un = i("countdownPixelCanvas");
  let ur = null, Es = "appear";
  class gd {
    constructor(r, s, f, v, T, R, F) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = f, this.y = v, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = F, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Mi = [], _s = 1, zr = 1;
  function vo() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function vl() {
    var mt;
    if (!Un) return;
    const e = vo(), r = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    _s = r, zr = s;
    const f = Math.min(window.devicePixelRatio || 1, 2);
    Un.width = Math.floor(r * f), Un.height = Math.floor(s * f), Un.style.width = r + "px", Un.style.height = s + "px";
    const v = Un.getContext("2d");
    v.setTransform(f, 0, 0, f, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, F = (mt = window.matchMedia) == null ? void 0 : mt.call(window, "(prefers-reduced-motion: reduce)").matches, st = F ? 0 : 0.055;
    Mi = [];
    for (let lt = 0; lt < r; lt += R)
      for (let it = 0; it < s; it += R) {
        const Nt = lt - r / 2, te = it - s / 2, Ft = Math.sqrt(Nt * Nt + te * te), Dt = F ? 0 : Math.random() * 75 + Ft * 0.05, Tt = new gd({ width: r, height: s }, v, lt, it, T[Math.floor(Math.random() * T.length)], st, Dt);
        Tt.maxSizeInteger = 4, Tt.maxSize = Math.random() * 3.2 + 0.8, Tt.sizeStep = 0.35 + Math.random() * 0.45, Mi.push(Tt);
      }
  }
  function bl(e) {
    cancelAnimationFrame(ur), Es = e;
    const r = Un == null ? void 0 : Un.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, _s, zr);
      let f = !0;
      Mi.forEach((v) => {
        v[Es](), v.isIdle || (f = !1);
      }), Es === "disappear" && f || (ur = requestAnimationFrame(s));
    }
    ur = requestAnimationFrame(s);
  }
  function Vr() {
    cancelAnimationFrame(ur), vl(), bl("appear"), setTimeout(() => bl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    ki.classList.contains("active") && Vr();
  });
  const Si = i("pixelTrailCanvas"), Ci = Si.getContext("2d");
  let un = !0, qe = 0.7, Ti = 600, fr = [], Ai = null, Ga = { x: 0, y: 0, ready: !1 };
  function wl() {
    const e = p.getBoundingClientRect(), r = vo(), s = Math.min(window.devicePixelRatio || 1, 2), f = Math.max(1, e.width / r), v = Math.max(1, e.height / r);
    Si.width = Math.max(1, Math.floor(f * s)), Si.height = Math.max(1, Math.floor(v * s)), Si.style.width = f + "px", Si.style.height = v + "px", Ci.setTransform(s, 0, 0, s, 0, 0);
  }
  function vd(e, r) {
    if (!un) return;
    const s = performance.now();
    Ga.ready || (Ga = { x: e, y: r, ready: !0 });
    const f = 7;
    for (let v = 1; v <= f; v++) {
      const T = v / f;
      fr.push({
        x: Ga.x + (e - Ga.x) * T,
        y: Ga.y + (r - Ga.y) * T,
        born: s - (f - v) * 10
      });
    }
    Ga = { x: e, y: r, ready: !0 };
  }
  function Gr(e) {
    if (Ai = null, !b) return;
    if (!wt.workout.classList.contains("active")) {
      Ai = requestAnimationFrame(Gr);
      return;
    }
    const r = p.getBoundingClientRect(), s = vo();
    Ci.clearRect(0, 0, r.width / s, r.height / s), un && (fr = fr.filter((v) => e - v.born < Ti), Ci.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", fr.forEach((v) => {
      const T = (e - v.born) / Ti, R = (1 - T) * qe, F = Math.round(v.x / 14) * 14, st = Math.round(v.y / 14) * 14;
      Ci.globalAlpha = Math.max(0, R);
      const mt = 2 + 5 * (1 - T) * qe;
      Ci.fillRect(F - mt / 2, st - mt / 2, mt, mt);
    }), Ci.globalAlpha = 1), Ai = requestAnimationFrame(Gr);
  }
  p.addEventListener("pointermove", (e) => {
    const r = p.getBoundingClientRect(), s = vo();
    vd((e.clientX - r.left) / s, (e.clientY - r.top) / s);
  }), p.addEventListener("pointerleave", () => Ga.ready = !1), new ResizeObserver(wl).observe(p), wl(), Ai = requestAnimationFrame(Gr);
  const Yn = i("movementRippleCanvas"), Wo = Yn.getContext("2d");
  let qo = !0, Li = null, xl = performance.now();
  function Ei() {
    const e = Yn.parentElement.getBoundingClientRect(), r = vo(), s = Math.max(1, e.width / r), f = Math.max(1, e.height / r), v = Math.min(window.devicePixelRatio || 1, 2);
    Yn.width = Math.max(1, Math.floor(s * v)), Yn.height = Math.max(1, Math.floor(f * v)), Yn.style.width = s + "px", Yn.style.height = f + "px", Wo.setTransform(v, 0, 0, v, 0, 0);
  }
  function Ds() {
    var e;
    return ca || ((e = Vt[oe]) == null ? void 0 : e.kind) === "rest";
  }
  function bd() {
    const e = Vt[oe];
    return Ds() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ur(e) {
    if (Li = null, !b) return;
    if (!wt.workout.classList.contains("active")) {
      Li = requestAnimationFrame(Ur);
      return;
    }
    const r = Yn.parentElement.getBoundingClientRect(), s = vo(), f = Math.max(1, r.width / s), v = Math.max(1, r.height / s);
    if (Wo.clearRect(0, 0, f, v), qo) {
      const T = bd(), R = (e - xl) % T / T, F = 15, st = Math.max(8, Math.round(F * v / Math.max(1, f))), mt = f / (F + 1), lt = v / (st + 1), it = f * 0.5, Nt = v * 0.52, te = Math.hypot(it, Nt), Dt = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Tt = 1; Tt <= st; Tt++)
        for (let fe = 1; fe <= F; fe++) {
          const me = fe * mt, jt = Tt * lt, ge = Math.hypot(me - it, jt - Nt) / te, Le = Ds(), se = Le ? Math.exp(-Math.pow((ge - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ne = Math.exp(-Math.pow((ge - R * 1.25) * 7, 2)), fa = Le ? se : ne, Na = Le ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - ge * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - ge * 5) ** 2, Ve = Le ? 1.4 + fa * 4.2 * Na : 1.2 + fa * 5 * Na;
          Wo.beginPath(), Wo.arc(me, jt, Ve, 0, Math.PI * 2), Wo.fillStyle = `rgba(${Dt},${Le ? 0.08 + fa * 0.48 : 0.05 + fa * 0.55})`, Wo.fill();
        }
    }
    Li = requestAnimationFrame(Ur);
  }
  new ResizeObserver(Ei).observe(Yn.parentElement), Ei(), Li = requestAnimationFrame(Ur);
  const Ba = i("exerciseTitle"), Zn = i("exerciseMeta"), Bs = i("stepLabel"), Ha = i("digits"), Ae = i("fill"), Fa = i("progress"), hr = i("pause"), jo = i("nextName"), Yr = i("nextMeta"), bo = i("nextIcon"), Kn = i("skipNextSession");
  let ua = null;
  function ke(e) {
    for (let r = Math.max(0, e); r < Vt.length; r++)
      if (!Vt[r].sessionHidden) return r;
    return -1;
  }
  function Zr() {
    const e = Vt[oe];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ca) {
      const f = ke(oe + 1), v = f >= 0 ? Vt[f] : null;
      return v ? { name: v.name, meta: $r(v), icon: Kr(v) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = ke(oe + 1), s = r >= 0 ? Vt[r] : null;
    return s ? { name: s.name, meta: $r(s), icon: Kr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function mr() {
    if (!Vt[oe]) return Vt.length;
    const r = ke(oe + 1);
    return r < 0 ? Vt.length : r + 1;
  }
  function Kr(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function $r(e) {
    return e.kind === "video" ? "YouTube · " + za(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function gr() {
    return Vt.length && Vt[Vt.length - 1].round || 1;
  }
  function yl(e) {
    const r = Vt[e];
    if (!r) return "";
    const s = gr();
    if (s <= 1) return "Step " + (e + 1) + " of " + Vt.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const f = Vt.filter((v) => v.round === r.round && !v.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + f;
  }
  function Xr() {
    return Fa.querySelector('[data-step="' + oe + '"]');
  }
  function wd() {
    Vt[oe] && Number(Fa.dataset.round) !== (Vt[oe].round || 1) && Ps(), [...Fa.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < oe), e.classList.toggle("active", r === oe), e.classList.toggle("rewindable", r <= oe), e.disabled = r > oe, r === oe && e.style.setProperty("--segment-progress", "0%");
    }), Vt[oe] && (Bs.textContent = yl(oe), Yo());
  }
  function kl(e) {
    const r = Vt.indexOf(e);
    r < 0 || r <= oe || (e.sessionHidden = !e.sessionHidden, la(), De((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function zo() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = mr(), s = Vt.slice(r);
    (so === "all" ? s : s.slice(0, Math.max(1, Number(so) || 1))).forEach((v) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (v.sessionHidden ? " sessionHidden" : "") + (as(v) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ma(Kr(v)) + '</div><div><div class="upcomingName">' + Gt(v.name) + '</div><div class="upcomingMeta">' + Gt($r(v)) + (gr() > 1 ? " · round " + v.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (v.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => kl(v)), e.appendChild(T);
    });
  }
  function la() {
    var r;
    const e = Zr();
    jo.textContent = e.name, Yr.textContent = e.meta, bo.innerHTML = ma(e.icon);
    {
      const s = ca ? Vt[ke(oe + 1)] : ((r = Vt[oe]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Vt[ke(oe + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && as(s)));
    }
    if (ua = null, ca) {
      const s = ke(oe + 1);
      s >= 0 && (ua = Vt[s]);
    } else {
      const s = Vt[oe];
      if (s && s.rest > 0)
        ua = null;
      else {
        const f = ke(oe + 1);
        f >= 0 && (ua = Vt[f]);
      }
    }
    Kn && (Kn.hidden = !ua, Kn.textContent = ua != null && ua.sessionHidden ? "Include this session" : "Skip this session"), zo();
  }
  Kn.addEventListener("click", () => {
    ua && (ua.sessionHidden = !ua.sessionHidden, De((ua.sessionHidden ? "Hidden " : "Included ") + ua.name + " for this session"), la());
  });
  let Ja = null, Jr = null;
  function _i(e, r = {}) {
    const s = ae[Qt];
    d.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: Qt, ...r });
  }
  function Rs() {
    const e = ae[Qt];
    Ja = { key: Qt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Jr), Jr = setInterval(() => {
      Ja && !ja && Ja.active++;
    }, 1e3), _i("started", { steps: Vt.length });
  }
  function Qr(e) {
    if (clearInterval(Jr), !Ja) return;
    const r = Ja;
    Ja = null, _i(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (we.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), we.history = we.history.slice(0, 1e3), $a(), Xo(), tn());
  }
  let fn = null, Qa = null, $n = !1;
  function Di() {
    return he().sounds !== !1;
  }
  function Ns() {
    if (Di())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), fn = fn || new (window.AudioContext || window.webkitAudioContext)(), fn.state === "suspended" && fn.resume();
      } catch {
        fn = null;
      }
  }
  function Xn(e, r, s, { to: f = e, vol: v = 0.25, type: T = "sine" } = {}) {
    const R = fn.currentTime + r, F = fn.createOscillator(), st = fn.createGain();
    F.type = T, F.frequency.setValueAtTime(e, R), f !== e && F.frequency.exponentialRampToValueAtTime(f, R + s), st.gain.setValueAtTime(1e-4, R), st.gain.exponentialRampToValueAtTime(v, R + 0.01), st.gain.exponentialRampToValueAtTime(1e-4, R + s), F.connect(st).connect(fn.destination), F.start(R), F.stop(R + s + 0.02);
  }
  const ts = {
    tick: () => Xn(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      Xn(660, 0, 0.12, { type: "triangle", vol: 0.3 }), Xn(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => Xn(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      Xn(523, 0, 0.16, { type: "triangle" }), Xn(659, 0.16, 0.16, { type: "triangle" }), Xn(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Pn(e) {
    if (!(!Di() || !fn))
      try {
        fn.state === "suspended" && fn.resume(), ts[e]();
      } catch {
      }
  }
  function vr() {
    aa >= 1 && aa <= 3 && aa !== Qa && (Qa = aa, Pn("tick"));
  }
  function xd() {
    Ns(), M("workout"), Mn();
    const e = ke(0);
    e >= 0 && Vt[e].kind === "video" && Be(Vt[e]);
  }
  function br() {
    hn(), Qr(!1), clearInterval(Qe), clearInterval(ci), ca = !1, Jn(!1), i("app").classList.remove("resting"), ki.classList.remove("active"), M("home");
  }
  function Mn() {
    ki.classList.add("active");
    let e = 5;
    jr.textContent = e, Pn("tick"), requestAnimationFrame(Vr), clearInterval(ci), ci = setInterval(() => {
      e--, e > 0 ? (jr.textContent = e, Pn("tick"), Vr()) : (clearInterval(ci), jr.textContent = "GO", Pn("move"), $n = !0, Vr(), setTimeout(() => {
        ki.classList.remove("active"), cancelAnimationFrame(ur), es();
      }, 650));
    }, 1e3);
  }
  function Ps() {
    var r;
    Fa.innerHTML = "";
    const e = ((r = Vt[Math.max(0, oe)] || Vt[0]) == null ? void 0 : r.round) || 1;
    Fa.dataset.round = e, Vt.forEach((s, f) => {
      if ((s.round || 1) !== e) return;
      const v = document.createElement("button");
      v.dataset.step = f, v.type = "button", v.className = "progressSegment", v.setAttribute("aria-label", "Go to " + s.name), v.addEventListener("click", () => {
        f <= oe && Ua(f);
      }), Fa.appendChild(v);
    });
  }
  function Jn(e) {
    e = !!e;
    const r = ja !== e;
    if (ja = e, hr.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), ga && Pe)
      try {
        e ? Pe.pauseVideo() : Pe.playVideo();
      } catch {
      }
    r && Ja && _i(e ? "paused" : "resumed");
  }
  function Ua(e) {
    e < 0 || e >= Vt.length || e > oe || (clearInterval(Qe), ca = !1, i("app").classList.remove("resting"), oe = e, Jn(!1), Uo(), Qe = setInterval(yo, 1e3));
  }
  function es() {
    if (oe = ke(0), Jn(!1), Ps(), oe < 0) {
      Ba.textContent = "No activities", Zn.textContent = "Open Edit and enable or add a movement", Zn.hidden = !1;
      return;
    }
    Rs(), Uo(), clearInterval(Qe), Qe = setInterval(yo, 1e3);
  }
  const Bi = i("videoStage"), Sn = i("videoSound"), Ml = 0, wo = 1, yd = 2;
  let Is = 0, Qn = null, to = null, Pe = null, xo = null, wr = 0, xr = !1, ga = null, Hs = null;
  function Sl() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Qn || (Qn = new Promise((r, s) => {
      const f = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          f == null || f();
        } catch {
        }
      };
      const v = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(v), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(v), Qn = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(v), clearTimeout(T), Qn = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), Qn);
  }
  function Cl() {
    return to || (to = Sl().then((e) => new Promise((r) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), Pe = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Pe), onStateChange: (f) => eo(f.data), onError: (f) => ao(f.data) }
      });
    })), to.catch(() => {
      to = null;
    }), to);
  }
  function Be(e) {
    !(e != null && e.videoId) || e.videoError || Cl().then((r) => {
      ga || xo === e.videoId || (xo = e.videoId, wr = Number(e.start) || 0, xr = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: wr }));
    }).catch(() => {
    });
  }
  function In() {
    const e = ke(oe + 1);
    e >= 0 && Vt[e].kind === "video" && Be(Vt[e]);
  }
  function eo(e) {
    if (!ga) {
      e === wo && !xr && (xr = !0, Pe.pauseVideo(), Pe.seekTo(wr, !0));
      return;
    }
    Bi.classList.toggle("playing", e === wo), Vt[oe] === ga && performance.now() > Is && (e === wo && ja ? Jn(!1) : e === yd && !ja && Jn(!0)), e === wo && Tl(ga.videoId, Pe.getDuration()) && $a(), e === Ml && Vo();
  }
  function ao(e) {
    const r = ga;
    if (!r) {
      xo = null;
      return;
    }
    e === 101 || e === 150 ? (Al(r.videoId), De("That video can’t play outside YouTube, so it was skipped")) : De("The video couldn’t play, so it was skipped"), Vo();
  }
  function yr(e) {
    if (i("app").classList.add("videoStep"), Sn.hidden = !0, ga = e, clearTimeout(Hs), !e.videoId) {
      De("This video step has no link yet, so it was skipped"), setTimeout(() => Vo(), 0);
      return;
    }
    Cl().then((r) => {
      if (ga !== e) return;
      Is = performance.now() + 1500;
      const s = Number(e.start) || 0;
      xo !== e.videoId ? (xo = e.videoId, wr = s, r.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), ja && r.pauseVideo(), Hs = setTimeout(() => {
        ga !== e || ja || (r.getPlayerState() !== wo ? (r.mute(), r.playVideo(), Sn.hidden = !1) : r.isMuted() && (Sn.hidden = !1));
      }, 1600);
    }).catch(() => {
      ga === e && (De("YouTube didn’t load, so the video was skipped"), Vo());
    });
  }
  function Ra() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, f = (r == null ? void 0 : r.offsetHeight) || 42, v = window.innerHeight - s - 16 - f - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(v)) + "px");
  }
  window.addEventListener("resize", Ra);
  function hn() {
    clearTimeout(Hs);
    const e = ga;
    if (ga = null, i("app").classList.remove("videoStep"), Bi.classList.remove("playing"), Sn.hidden = !0, e && Pe) {
      try {
        Pe.pauseVideo();
      } catch {
      }
      xo = null;
    }
  }
  function Vo() {
    const e = ga;
    !e || Vt[oe] !== e || (hn(), clearInterval(Qe), Zo(), Qe = setInterval(yo, 1e3));
  }
  Sn.addEventListener("click", () => {
    Pe && (Pe.unMute(), Pe.playVideo()), Sn.hidden = !0;
  });
  function Go(e) {
    var f;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const s = Pe && ga === e && Number((f = Pe.getDuration) == null ? void 0 : f.call(Pe)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function Fs(e, r) {
    const s = ae[Qt];
    [xe, Ke, ze, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((f) => (Array.isArray(f) ? f : []).forEach((v) => {
      v && v.kind === "video" && v.videoId === e && r(v);
    }));
  }
  function Tl(e, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return e && r > 0 && Fs(e, (f) => {
      f.videoDuration !== r && (f.videoDuration = r, s = !0);
    }), s;
  }
  function Al(e) {
    Fs(e, (r) => {
      r.videoError = "embed";
    }), $a();
  }
  function va(e) {
    const r = e.videoId;
    if (!r) return;
    const s = () => {
      Ia.classList.contains("open") ? na || Te() : (Te(), $a());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((f) => f.ok ? f.json() : Promise.reject(f.status)).then((f) => {
      e.videoId === r && (e.videoTitle = f.title || "", e.autoName && f.title && (e.name = f.title), s());
    }).catch((f) => {
      e.videoId === r && f === 401 && (e.videoError = "embed", s());
    }), Ri(r).then((f) => {
      Tl(r, f) && s();
    }).catch((f) => {
      f === "embed" && e.videoId === r && (e.videoError = "embed", s());
    });
  }
  function Ri(e) {
    return Sl().then((r) => new Promise((s, f) => {
      const v = document.createElement("div");
      v.className = "videoProbe", v.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      v.appendChild(T), i("app").appendChild(v);
      let R = null, F = !1;
      const st = (it, Nt) => {
        F || (F = !0, clearTimeout(mt), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          v.remove();
        }, 0), Nt ? f(Nt) : s(it));
      }, mt = setTimeout(() => st(0), 2e4), lt = () => {
        var Nt;
        const it = Number((Nt = R == null ? void 0 : R.getDuration) == null ? void 0 : Nt.call(R)) || 0;
        return it > 0 && st(it), it > 0;
      };
      R = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            lt() || (R.mute(), R.playVideo());
          },
          onStateChange: () => lt(),
          onError: (it) => st(0, it.data === 101 || it.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Uo() {
    ca = !1;
    const e = Vt[oe];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? yr(e) : hn(), aa = e.duration, On = e.duration, Qa = null, $n ? $n = !1 : Pn(e.kind === "rest" ? "rest" : "move"), Ba.textContent = e.name, Zn.textContent = e.group, Zn.hidden = !0, Bs.textContent = yl(oe), Ja && _i("step", { name: e.name, group: e.group, kind: e.kind, step: oe + 1, of: Vt.length, round: e.round || 1, rounds: gr(), duration: e.duration }), la(), wd(), In(), e.kind === "video" && setTimeout(Ra, 0);
  }
  function Yo() {
    var v;
    const e = ((v = Vt[oe]) == null ? void 0 : v.kind) === "video" && !ca, r = e && aa >= 60;
    Ha.textContent = r ? za(aa) : aa, Ha.classList.toggle("long", r), e && (i("videoClock").textContent = za(aa) + " left");
    const s = aa / On * 100;
    Ae.style.width = s + "%";
    const f = Xr();
    if (f && !ca) {
      const T = 100 - s;
      f.style.setProperty("--segment-progress", T + "%");
    }
  }
  function yo() {
    var r, s;
    if (ja) return;
    const e = Vt[oe];
    if ((e == null ? void 0 : e.kind) === "video" && !ca && ga === e) {
      const f = Number((r = Pe == null ? void 0 : Pe.getCurrentTime) == null ? void 0 : r.call(Pe)) || 0, v = Number(e.start) || 0, T = Go(e);
      On = Math.max(1, T - v), (f > v || ((s = Pe == null ? void 0 : Pe.getPlayerState) == null ? void 0 : s.call(Pe)) === wo) && (aa = Math.max(0, Math.ceil(T - f))), Yo(), vr(), f > v && f >= T - 0.25 && Vo();
      return;
    }
    aa--, Yo(), vr(), aa <= 0 && (e.rest > 0 ? Os(e.rest) : Zo());
  }
  function Os(e) {
    var s;
    ca = !0, i("app").classList.add("resting");
    const r = Xr();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Qe), aa = e, On = e, Qa = null, Pn("rest"), Ja && _i("rest", { duration: e }), Ba.textContent = "Rest", Zn.textContent = (s = Vt[oe]) != null && s.roundBreakAfter ? "Round " + (Vt[oe].round + 1) + " next" : "Recovery", la(), Yo(), Qe = setInterval(() => {
      ja || (aa--, Yo(), vr(), aa <= 0 && (clearInterval(Qe), Zo(), Qe = setInterval(yo, 1e3)));
    }, 1e3);
  }
  function Zo() {
    ca = !1;
    const e = ke(oe + 1);
    if (e >= 0)
      oe = e, Uo();
    else {
      clearInterval(Qe), hn(), Jn(!1), i("app").classList.remove("resting"), Ba.textContent = "Complete", Zn.textContent = "Move finished", Zn.hidden = !1, Ha.textContent = "✓";
      {
        const r = gr();
        Bs.textContent = r > 1 ? r + " rounds done" : Vt.filter((s) => !s.roundBreak).length + " steps done";
      }
      Qr(!0), Pn("done");
      {
        const r = le(7).reduce((s, f) => s + f.minutes, 0);
        Zn.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Ae.style.width = "100%", la();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Ll(), Jn(!1);
  });
  function Ll() {
    clearInterval(Qe);
    const e = Vt[oe];
    if (ca) {
      ca = !1, i("app").classList.remove("resting");
      const s = ke(oe + 1);
      s >= 0 ? (oe = s, Uo(), Qe = setInterval(yo, 1e3)) : Zo();
      return;
    }
    if (e && e.rest > 0) {
      Os(e.rest);
      return;
    }
    const r = ke(oe + 1);
    r >= 0 ? (oe = r, Uo(), Qe = setInterval(yo, 1e3)) : Zo();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Qe), Jn(!1), ca) {
      const e = Vt[oe];
      aa = e.rest, On = e.rest, Qa = null, Pn("rest"), Ba.textContent = "Rest", Zn.textContent = "Recovery", i("app").classList.add("resting"), la(), Yo();
    } else
      Uo();
    Qe = setInterval(ca ? () => {
      ja || (aa--, Yo(), vr(), aa <= 0 && (clearInterval(Qe), Zo(), Qe = setInterval(yo, 1e3)));
    } : yo, 1e3);
  });
  function kr(e, r, s, f) {
    let v = 0, T = null, R = !1;
    function F() {
      T && cancelAnimationFrame(T), T = null, v = 0, R = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function st(it) {
      if (!R) return;
      v || (v = it);
      const Nt = Math.min(1, (it - v) / s);
      if (r.style.width = Nt * 100 + "%", Nt >= 1) {
        R = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), f();
        return;
      }
      T = requestAnimationFrame(st);
    }
    function mt(it) {
      var Nt;
      if (!(it && it.button !== void 0 && it.button !== 0)) {
        it == null || it.preventDefault(), F(), R = !0, e.classList.add("holding");
        try {
          (Nt = e.setPointerCapture) == null || Nt.call(e, it.pointerId);
        } catch {
        }
        T = requestAnimationFrame(st);
      }
    }
    function lt() {
      R && F();
    }
    e.addEventListener("pointerdown", mt), e.addEventListener("pointerup", lt), e.addEventListener("pointercancel", lt), e.addEventListener("lostpointercapture", lt), e.addEventListener("keydown", (it) => {
      (it.key === " " || it.key === "Enter") && !it.repeat && mt(it);
    }), e.addEventListener("keyup", (it) => {
      (it.key === " " || it.key === "Enter") && lt();
    });
  }
  const kd = i("endWorkout");
  kr(kd, i("holdEndFill"), 1500, br);
  const Ni = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ni.classList.add("open"), Ni.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ni.classList.remove("open"), Ni.setAttribute("aria-hidden", "true");
  });
  function Ya() {
    const e = Qt, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ae[e], we.order = we.order.filter((f) => f !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const f = "custom-" + Date.now();
      ae[f] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, we.order.push(f), s = Ta(f, ae[f]);
    }
    Ni.classList.remove("open"), Ni.setAttribute("aria-hidden", "true"), Gn = null, pr(), ra(s.dataset.workout), $a(), De("Move deleted");
  }
  kr(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ya);
  const Mr = n.querySelector(".rubberTabs"), Ko = i("rubberIndicator");
  function Pi(e, r = !0) {
    if (!e || !Mr || !Ko) return;
    const s = Mr.getBoundingClientRect(), f = e.getBoundingClientRect();
    Ko.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const v = vo();
    Ko.style.left = (f.left - s.left) / v + Mr.scrollLeft + "px", Ko.style.width = f.width / v + "px", r && (Ko.style.transform = "scaleX(1.08)", setTimeout(() => Ko.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Pi(e, !0);
  })), requestAnimationFrame(() => Pi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Pi(n.querySelector(".tab.active"), !1));
  const Sr = i("pixelTrailToggle"), Ws = i("rippleToggle"), Ii = i("trailStrength"), Hi = i("trailLife");
  function Za(e, r) {
    he()[e] = r, $a();
  }
  const qs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function El(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function as(e) {
    var r;
    return !!((r = he().hideMeta) != null && r[El(e)]);
  }
  function _l() {
    const e = /* @__PURE__ */ new Map(), r = (s, f, v) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = El(s);
      let R = e.get(T);
      R || (R = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(T, R)), R.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : f), R.moves.add(v), R.count++;
    };
    return Object.values(ae).forEach((s) => {
      const f = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : _t)).forEach((v) => r(v, "Warm-up", f)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((v) => r(v, v.presetRole === "warmup" ? "Warm-up" : v.presetRole === "cooldown" ? "Cooldown" : "Movement", f)), (s.cooldown || (s.customSequence ? [] : ve)).forEach((v) => r(v, "Cooldown", f));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, f]) => {
      e.has(s) || e.set(s, { key: s, label: f, kinds: /* @__PURE__ */ new Set([f]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, f) => qs.indexOf(s.kind) - qs.indexOf(f.kind) || s.label.localeCompare(f.label));
  }
  let ns = "all";
  function os() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return _l().filter((r) => (ns === "all" || r.kind === ns) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function ko() {
    const e = i("metaTableBody");
    if (!e) return;
    const r = he().hideMeta || {}, s = os();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((v) => {
      const T = !r[v.key], R = v.count ? (v.moves.length > 2 ? v.moves.slice(0, 2).join(", ") + " + " + (v.moves.length - 2) + " more" : v.moves.join(", ")) + " · " + v.count + " step" + (v.count === 1 ? "" : "s") : "Not used yet", F = document.createElement("tr");
      F.className = T ? "" : "off", F.innerHTML = '<td><div class="metaType">' + Gt(v.label) + '</div><div class="metaSub">' + Gt(v.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Gt(v.kind) + '</td><td class="metaUsedCol">' + Gt(R) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Gt(v.label) + ' on phones"></button></td>', F.querySelector(".switch").addEventListener("click", () => js([v.key], T)), e.appendChild(F);
    });
    const f = s.filter((v) => r[v.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (f ? " · " + f + " hidden on phones" : "") : "";
  }
  function js(e, r) {
    const s = { ...he().hideMeta || {} };
    e.forEach((f) => {
      r ? s[f] = !0 : delete s[f];
    }), Za("hideMeta", s), ko(), $e(), la();
  }
  i("metaSearch").addEventListener("input", ko), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ns = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), ko();
  })), i("metaHideAll").addEventListener("click", () => js(os().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => js(os().map((e) => e.key), !1));
  const Mo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...he().toggles || {} };
  function Dl() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Mo[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, f]) => {
      i(f).hidden = Mo[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => Mo[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Mo[e.dataset.toggle] = Mo[e.dataset.toggle] === !1, Dl(), Za("toggles", { ...Mo });
  })), Dl();
  function Bl() {
    Sr.classList.toggle("on", un), Ws.classList.toggle("on", qo), Ii.value = Math.round(qe * 100), i("trailStrengthValue").textContent = Ii.value + "%", Hi.value = Ti, i("trailLifeValue").textContent = Hi.value + " ms";
  }
  he().trailEnabled !== void 0 && (un = he().trailEnabled), he().rippleEnabled !== void 0 && (qo = he().rippleEnabled), he().trailStrength !== void 0 && (qe = he().trailStrength), he().trailMaxAge !== void 0 && (Ti = he().trailMaxAge), Bl();
  const $o = i("soundsToggle");
  $o.classList.toggle("on", Di()), $o.addEventListener("click", () => {
    Za("sounds", !Di()), $o.classList.toggle("on", Di()), Di() && (Ns(), Pn("move"));
  }), Sr.addEventListener("click", () => {
    un = !un, Sr.classList.toggle("on", un), un || (fr = []), Za("trailEnabled", un);
  }), Ws.addEventListener("click", () => {
    qo = !qo, Ws.classList.toggle("on", qo), Za("rippleEnabled", qo);
  }), Ii.addEventListener("input", () => {
    qe = Number(Ii.value) / 100, i("trailStrengthValue").textContent = Ii.value + "%";
  }), Ii.addEventListener("change", () => Za("trailStrength", qe)), Hi.addEventListener("input", () => {
    Ti = Number(Hi.value), i("trailLifeValue").textContent = Hi.value + " ms";
  }), Hi.addEventListener("change", () => Za("trailMaxAge", Ti)), bi.addEventListener("change", () => Za("upcomingCount", so));
  function zs(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const r = e === "light";
    i("app").classList.toggle("light", r), d.setLight(r), ti(n);
  }
  zs(he().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    zs(e.dataset.theme), Za("theme", e.dataset.theme);
  }));
  const oa = { steps: null, weather: null, ...he().entities || {} };
  let da = null, Cr = {};
  function Vs(e) {
    const r = Object.values(e).filter((F) => F.entity_id.startsWith("sensor.") || F.entity_id.startsWith("input_number.")), s = (F) => F.attributes.friendly_name || F.entity_id, f = r.filter((F) => /step/i.test(F.entity_id) || /step/i.test(s(F)) || ["steps", "step"].includes(String(F.attributes.unit_of_measurement || "").toLowerCase())), v = r.filter((F) => !f.includes(F)), T = (F, st) => s(F).localeCompare(s(st)), R = (F, st) => /health_steps/.test(st.entity_id) - /health_steps/.test(F.entity_id) || T(F, st);
    return { suggested: f.sort(R), rest: v.sort(T), label: s };
  }
  function Rl(e) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: f, label: v } = Vs(e), T = (st) => '<option value="' + Gt(st.entity_id) + '">' + Gt(v(st)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (f.length ? '<optgroup label="All sensors">' + f.map(T).join("") + "</optgroup>" : ""), r.value = oa.steps || "";
    const R = i("stepsStatus"), F = oa.steps && e[oa.steps];
    R.textContent = F ? "Connected · " + v(F) : R.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    oa.steps = i("stepsEntity").value || null, Za("entities", { ...oa }), Cr = {}, Il(), da && (Rl(da), is(da));
  });
  function Sa(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function Nl() {
    const e = oa.steps && (da == null ? void 0 : da[oa.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function is(e) {
    var f;
    const r = oa.steps, s = r ? Number((f = e[r]) == null ? void 0 : f.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(s) ? Sa(s) : "—" : "Set up in Settings";
  }
  let Pl = 0;
  async function Il() {
    const e = oa.steps;
    if (!e || !d.ws) return;
    Pl = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const f = await d.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), v = (f == null ? void 0 : f[e]) || [], T = {};
      if (v.forEach((R) => {
        Number.isFinite(R.max) && (T[Ye(new Date(R.start))] = R.max);
      }), !Object.keys(T).length) {
        const R = await d.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[e]) || []).forEach((F) => {
          const st = Number(F.s ?? F.state), mt = F.lu ? F.lu * 1e3 : Date.parse(F.last_updated || F.last_changed);
          if (!Number.isFinite(st) || !mt) return;
          const lt = Ye(new Date(mt));
          T[lt] = Math.max(T[lt] || 0, st);
        });
      }
      Cr = T, tn();
    } catch {
    }
  }
  function Xo() {
    tn();
  }
  Xo(), setInterval(() => {
    Xo(), sr(), go();
  }, 10 * 60 * 1e3);
  function le(e) {
    const r = {}, s = {};
    we.history.forEach((R) => {
      const F = Ye(new Date(R.start));
      r[F] = (r[F] || 0) + (R.seconds || 0) / 60, s[F] = (s[F] || 0) + 1;
    });
    const f = /* @__PURE__ */ new Date(), v = Ye(f), T = [];
    for (let R = e - 1; R >= 0; R--) {
      const F = new Date(f.getFullYear(), f.getMonth(), f.getDate() - R), st = Ye(F), mt = we.checkins.filter((it) => it.date === st), lt = (it) => {
        const Nt = mt.map((te) => te[it]).filter(Boolean);
        return Nt.length ? Nt.reduce((te, Ft) => te + Ft, 0) / Nt.length : null;
      };
      T.push({
        key: st,
        date: F,
        minutes: Math.round(r[st] || 0),
        moves: s[st] || 0,
        steps: st === v && Nl() != null ? Nl() : Cr[st] ?? null,
        mood: lt("mood"),
        energy: lt("energy")
      });
    }
    return T;
  }
  function Hl(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function tn() {
    const e = i("insightCard");
    if (!e) return;
    const r = le(30), s = Hl(r), f = r.reduce((mt, lt) => mt + lt.minutes, 0), v = /* @__PURE__ */ new Date(), T = Ye(v), R = Ye(new Date(v.getFullYear(), v.getMonth(), v.getDate() - (v.getDay() + 6) % 7)), F = r.filter((mt) => mt.key >= R && mt.key <= T).reduce((mt, lt) => mt + lt.minutes, 0), st = (mt, lt, it) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + mt + '</div><div><div class="activityRowName">' + Gt(lt) + '</div><div class="activityRowMeta">' + Gt(it) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ma("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + st(ma("clock"), "This week", F + " min") + st(ma("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + st(ma("calendar"), "30 days", f + " min") + "</div>";
  }
  const Tr = {
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
  }, So = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Jo = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, rs = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Gs = 0;
  const Ar = (e, r) => '<path class="' + r + '" d="' + e + '"/>', Us = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', Oa = (e, r, s, f) => {
    const v = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (f < 1 ? ' opacity="' + f + '"' : "") + Us(e, 2400) + ' d="M' + e + " " + (r - s) + "L" + (e + v) + " " + (r - v) + "L" + (e + s) + " " + r + "L" + (e + v) + " " + (r + v) + "L" + e + " " + (r + s) + "L" + (e - v) + " " + (r + v) + "L" + (e - s) + " " + r + "L" + (e - v) + " " + (r - v) + 'Z"/>';
  }, ss = ([e, r, s], f) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + f + ')"/><defs><linearGradient id="' + f + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Fl = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ys = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Ol = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], f) => '<circle class="wxFlake" style="animation-delay:-' + f * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Fi(e, r, s, f) {
    return e === "clear" ? r ? ss(s ? rs.l : rs.s, f) + (s ? Oa(70, 20, 5.83, 1) + Oa(78.33, 41.67, 3.75, 0.8) + Oa(60, 71.67, 3.33, 0.6) : Oa(42, 12, 3.5, 1) + Oa(47, 25, 2.25, 0.8) + Oa(36, 43, 2, 0.6)) : Fl(f, s) : e === "partly" ? (r ? ss(s ? rs.lp : rs.sp, f) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Ar(s ? Jo.lp : Jo.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Oa(73.33, 16.67, 4.17, 0.9) : Oa(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Ar(s ? Jo.lc : Jo.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Oa(15, 15, 3.75, 0.8) + Oa(76.67, 13.33, 2.92, 0.6) : Oa(9, 9, 2.25, 0.8) + Oa(46, 8, 1.75, 0.6) : "") : Ar(s ? Jo.lr : Jo.s, "wxCloudLight") + (e === "rain" ? Ys(s) : Ol(s));
  }
  const Zs = () => {
    var e;
    return ((e = da == null ? void 0 : da["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Wa = he().weatherStyle || "bitmap", Ks = he().weatherLayout === "strip" ? "strip" : "tiles", ls = he().weatherMotion !== !1;
  const Qo = () => ls && !Ea(), Oi = /* @__PURE__ */ new Map(), $s = 700, Md = (e) => {
    const [r, s] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function Lr(e, r, s, f = Wa, v, T) {
    let R = So(e);
    const F = R === "night" || (T != null ? !!T : !!s && Zs());
    R === "night" && (R = "clear");
    const st = r ? 90 : 54, mt = dd(e, F), lt = performance.now();
    let it = v ? Oi.get(v) : null;
    if (v && !it ? Oi.set(v, it = { key: mt, t0: -1e9 }) : it && it.key !== mt && (it.fromKey = it.key, it.from = it.last || null, it.key = mt, it.t0 = lt), f !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + mt + '"' + (v ? ' data-wx-slot="' + v + '"' : "") + ' data-wx-style="' + f + '" data-wx-size="' + st + '"></canvas></span>';
    let Nt = "";
    if (it && lt - it.t0 < $s && (Qo() || Ea())) {
      const te = Md(it.fromKey);
      Nt = '<span class="wxLayer wxOut ' + te.k + (te.night ? " night" : "") + '" style="animation-delay:' + Math.round(it.t0 - lt) + 'ms"><svg viewBox="0 0 ' + st + " " + st + '">' + Fi(te.k, te.night, r, "wxg" + ++Gs) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (F ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + st + " " + st + '">' + Fi(R, F, r, "wxg" + ++Gs) + "</svg>" + Nt + "</span>";
  }
  function ds() {
    const e = i("app"), r = getComputedStyle(e), s = (F) => r.getPropertyValue(F).trim(), f = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([F, st]) => {
      s(st) && (f[F] = s(st));
    });
    const v = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", R = e.classList.contains("light");
    return { colors: f, ink: R ? v : T, paper: R ? T : v };
  }
  function ti(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const f = ds(), v = Qo(), T = Ea();
    s.forEach((R) => {
      var it;
      const F = R.dataset.wx, st = R.dataset.wxSlot ? Oi.get(R.dataset.wxSlot) : null;
      let mt = Kd(F, f.colors);
      if (st && st.key === F) {
        const Nt = (r - st.t0) / $s;
        Nt < 1 && (v || T) && (mt = Zp(st.from || Kd(st.fromKey, f.colors), mt, Math.max(0, Nt), f.colors, T)), st.last = mt;
      }
      const lt = pp(mt, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: f.colors, ink: f.ink, paper: f.paper, clock: r, idle: v });
      R.width !== lt.w && (R.width = lt.w), R.height !== lt.h && (R.height = lt.h), (it = R.getContext("2d")) == null || it.putImageData(new ImageData(lt.data, lt.w, lt.h), 0, 0);
    });
  }
  let cs = null, Wl = -1;
  function ps(e) {
    if (cs = null, !b) return;
    const r = Qo(), s = Math.floor(e / 100), f = [...Oi.values()].some((st) => e - st.t0 < $s), v = [...Er.values()].some((st) => e - st.t0 < st.dur), T = wt.home.classList.contains("active"), R = a.classList.contains("open"), F = r && Wa === "smooth" && (R || T && Ks === "strip");
    !document.hidden && (f || v || F || r && s !== Wl) && (Wl = s, T && (ti(i("weatherCard"), e), qi(i("weatherCard"), e)), R && (ti(a, e), qi(a, e))), (r || f || v) && (cs = requestAnimationFrame(ps));
  }
  function Co() {
    i("app").classList.toggle("wxMotion", Qo()), !cs && b && (cs = requestAnimationFrame(ps));
  }
  let ql = [];
  const ta = 36e5, us = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Cn() {
    const e = /* @__PURE__ */ new Date(), r = (T, R) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + T, R), s = [], f = [], v = [...Array(6)].map((T, R) => {
      const F = r(R, 6), st = r(R, 18), mt = r(R + 1, 6), lt = ql.find((Nt) => Ye(new Date(Nt.datetime)) === Ye(F)), it = (Nt, te, Ft) => {
        const Dt = s.filter((me) => me.t >= +Nt && me.t < +te);
        if (Dt.length) {
          const me = {};
          return Dt.forEach((jt) => {
            me[jt.c] = (me[jt.c] || 0) + (us.has(jt.c) ? 2 : 1);
          }), Object.entries(me).sort((jt, ge) => ge[1] - jt[1])[0][0];
        }
        const Tt = f.find((me) => {
          const jt = +new Date(me.datetime);
          return jt >= +Nt - 3 * ta && jt < +te && (me.is_daytime == null || !!me.is_daytime == !Ft);
        });
        if (Tt) return Tt.condition;
        const fe = (lt == null ? void 0 : lt.condition) || "cloudy";
        return Ft && fe === "sunny" ? "clear-night" : fe;
      };
      return { start: +F, end: +mt, day: it(F, st, !1), night: it(st, mt, !0), hi: Number(lt == null ? void 0 : lt.temperature), lo: Number(lt == null ? void 0 : lt.templow) };
    });
    return { days: v, hours: s, start: v[0].start, end: v[5].end };
  }
  const Wi = (e, r) => {
    const s = e.days.findIndex((v) => r < v.end);
    if (s < 0) return 1;
    const f = e.days[s];
    return Math.max(0, (s + (r - f.start) / (f.end - f.start)) / 6);
  }, Sd = (e, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, f = Math.floor(s), v = e.days[f];
    return v.start + (s - f) * (v.end - v.start);
  };
  function Xs(e, r) {
    const s = Math.max(0, e.days.findIndex((st) => r < st.end)), f = e.days[s], v = (r - f.start) / (f.end - f.start) >= 0.5;
    let T = v ? f.night : f.day, R = NaN;
    const F = e.hours;
    if (F.length && r >= F[0].t - ta && r <= F[F.length - 1].t + ta) {
      let st = F.findIndex((it) => it.t > r);
      st < 0 && (st = F.length);
      const mt = F[Math.max(0, st - 1)], lt = F[Math.min(F.length - 1, st)];
      T = mt.c || T, R = lt.t > mt.t ? mt.temp + (lt.temp - mt.temp) * Math.max(0, Math.min(1, (r - mt.t) / (lt.t - mt.t))) : mt.temp;
    }
    if (!Number.isFinite(R)) {
      const st = [];
      if (e.days.forEach((mt) => {
        Number.isFinite(mt.lo) && st.push([mt.start - ta, mt.lo]), Number.isFinite(mt.hi) && st.push([mt.start + 9 * ta, mt.hi]);
      }), st.length) {
        R = r <= st[0][0] ? st[0][1] : st[st.length - 1][1];
        for (let mt = 1; mt < st.length; mt++) if (r <= st[mt][0] && r > st[mt - 1][0]) {
          const [lt, it] = st[mt - 1], [Nt, te] = st[mt];
          R = it + (te - it) * (1 - Math.cos(Math.PI * (r - lt) / (Nt - lt))) / 2;
          break;
        }
      }
    }
    return { cond: v && T === "sunny" ? "clear-night" : T, temp: R, night: v, day: f };
  }
  const Js = (e) => Ye(new Date(e)) === Ye(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Er = /* @__PURE__ */ new Map(), Qs = 900, fs = 700;
  let To = null;
  const en = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    qi(r.target.parentElement), r.target.closest("#wxDialog") && X();
  })) : null;
  function qi(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const f = Cn(), v = f.days.flatMap((it) => [{ cond: it.day, night: !1 }, { cond: it.night, night: !0 }]), T = v.map((it) => it.cond).join(), R = ds(), F = Qo(), st = Ea(), mt = Number(Ye(new Date(f.start)).replace(/\D/g, "")) % 9973;
    let lt = !1;
    s.forEach((it) => {
      var me;
      const Nt = it.clientWidth, te = it.clientHeight;
      if (!Nt || !te) return;
      const Ft = it.dataset.wxStrip;
      let Dt = Er.get(Ft);
      Dt ? Dt.sig !== T && (Dt.prev = Dt.segs, Dt.sig = T, Dt.segs = v, Dt.t0 = r, Dt.dur = fs) : Er.set(Ft, Dt = { sig: T, segs: v, prev: null, t0: r, dur: Qs });
      const Tt = F || st ? Math.min(1, Math.max(0, (r - Dt.t0) / Dt.dur)) : 1;
      Tt < 1 && (lt = !0);
      const fe = { width: Nt, height: te, colors: R.colors, clock: r, ambient: F, seed: mt, reveal: st ? Tt : 1 - Math.pow(1 - Tt, 3), prev: Tt < 1 ? Dt.prev : null, reduce: st };
      if (Wa === "smooth") {
        const jt = Math.min(2, window.devicePixelRatio || 1), ge = Math.round(Nt * jt), Le = Math.round(te * jt);
        it.width !== ge && (it.width = ge), it.height !== Le && (it.height = Le);
        const se = it.getContext("2d");
        if (!se) return;
        se.setTransform(jt, 0, 0, jt, 0, 0), du(se, v, fe);
      } else {
        const jt = lu(v, { ...fe, px: 2, oneBit: Wa === "onebit", ink: R.ink, paper: R.paper });
        it.width !== jt.w && (it.width = jt.w), it.height !== jt.h && (it.height = jt.h), (me = it.getContext("2d")) == null || me.putImageData(new ImageData(jt.data, jt.w, jt.h), 0, 0);
      }
    }), lt && Co();
  }
  function tl() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const r = oa.weather, s = r && (da == null ? void 0 : da[r]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Lr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ti(e);
      return;
    }
    const f = s.attributes || {}, v = f.temperature_unit || "°", T = (se) => Number.isFinite(Number(se)) ? Math.round(Number(se)) + "°" : "—", R = (f.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", F = Tr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), st = Ye(/* @__PURE__ */ new Date()), mt = ql.slice(0, 7), lt = mt.find((se) => Ye(new Date(se.datetime)) === st) || null, it = mt.filter((se) => Ye(new Date(se.datetime)) >= st).slice(0, 6), Nt = /* @__PURE__ */ new Date(), te = Ye(new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate() + 1)), Ft = lt ? "H " + T(lt.temperature) + "&ensp; L " + T(lt.templow) : "", Dt = (se) => {
      const ne = Ye(new Date(se.datetime));
      return ne === st ? "Today" : ne === te ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(se.datetime));
    }, Tt = Number.isFinite(Number(f.temperature)) ? Math.round(Number(f.temperature)) : "—", fe = (se) => {
      const ne = new Date(se.datetime);
      return Math.round((new Date(ne.getFullYear(), ne.getMonth(), ne.getDate()) - new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate())) / 864e5);
    }, me = (se) => (Tr[se] || se || "").toLowerCase(), jt = (se, ne) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + fe(se) + '" aria-label="' + Gt(Dt(se) + ": " + me(se.condition) + ", " + T(se.temperature) + " / " + T(se.templow) + ". Open the forecast") + '">' + Lr(se.condition, !1, !1, Wa, "day" + ne) + '<div><div class="activityRowName">' + Gt(Dt(se)) + '</div><div class="activityRowMeta">' + T(se.temperature) + " / " + T(se.templow) + "</div></div></div>", ge = () => '<div class="wxStrip"><div class="wxStripDays">' + Cn().days.map((ne, fa) => {
      const Ve = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ne.start)) + ": " + me(ne.day) + (me(ne.day) === me(ne.night) ? " all day and night" : ", then " + me(ne.night) + " overnight") + (Number.isFinite(ne.hi) ? ". High " + T(ne.hi) : "") + (Number.isFinite(ne.lo) ? ", low " + T(ne.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + fa + '" aria-label="' + Gt(Ve) + '"><span class="wxDayName">' + Gt(Js(ne.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(ne.hi) + '</span><span class="wxLow">' + T(ne.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Gt("Now in " + R + ": " + Tt + "°, " + me(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Lr(s.state, !0, !0, Wa, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(Tt)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(F) + "</div>" + (Ft ? '<div class="wxRange">' + Ft + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (it.length ? Ks === "strip" ? ge() : '<div class="activityRows wxDays">' + it.map(jt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ti(e);
    const Le = e.querySelector("canvas[data-wx-strip]");
    To && To !== Le && (en == null || en.unobserve(To)), To = Le, Le && (en == null || en.observe(Le), qi(e)), Co(), D();
  }
  const el = i("weatherCard"), t = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const f = /* @__PURE__ */ new Date();
      y(+new Date(f.getFullYear(), f.getMonth(), f.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && y(Date.now(), s);
  };
  el.addEventListener("click", (e) => t(e.target)), el.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), t(e.target));
  });
  const a = i("wxDialog"), o = i("wxGraph"), l = i("wxGraphWrap");
  let c = Date.now(), h = null, u = !1, g = null;
  function y(e, r) {
    const s = Cn();
    h = r || null, c = Math.max(s.start, Math.min(s.end - ta, e)), Er.delete("dialog"), Oi.delete("scrub"), a.classList.add("open"), a.setAttribute("aria-hidden", "false"), D(), en == null || en.observe(a.querySelector("canvas[data-wx-strip]")), o.focus({ preventScroll: !0 }), Co();
  }
  function B() {
    var e;
    a.classList.remove("open"), a.setAttribute("aria-hidden", "true"), en == null || en.unobserve(a.querySelector("canvas[data-wx-strip]")), (e = h == null ? void 0 : h.focus) == null || e.call(h, { preventScroll: !0 }), h = null;
  }
  function D() {
    if (!a.classList.contains("open")) return;
    const e = Cn();
    i("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Gt(Js(r.start)) + "</span>").join(""), X(e), I(e), qi(a);
  }
  function I(e = Cn()) {
    const r = Xs(e, c), s = da == null ? void 0 : da[oa.weather], f = (s == null ? void 0 : s.attributes) || {}, v = f.temperature_unit || "°", T = Math.abs(c - Date.now()) < ta / 2, R = T && s ? s.state : r.cond, F = T && Number.isFinite(Number(f.temperature)) ? Math.round(Number(f.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", st = Tr[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), mt = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(c / ta) * ta)), lt = r.day, it = (Number.isFinite(lt.hi) ? "H " + Math.round(lt.hi) + "°" : "") + (Number.isFinite(lt.lo) ? "&ensp; L " + Math.round(lt.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Lr(R, !0, T, Wa, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(F)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(mt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(st) + "</div>" + (it ? '<div class="wxRange">' + it + "</div>" : "") + "</div>", ti(i("wxDialogNow")), o.setAttribute("aria-valuenow", String(Math.round((c - e.start) / ta))), o.setAttribute("aria-valuetext", mt + ", " + st.toLowerCase() + ", " + F + "°"), Z(e), Co();
  }
  function X(e = Cn()) {
    const r = i("wxGraphLine"), s = l.clientWidth, f = l.clientHeight;
    if (!s || !f) return;
    const v = [];
    for (let Tt = e.start; Tt <= e.end; Tt += ta) {
      const fe = Xs(e, Tt).temp;
      Number.isFinite(fe) && v.push([Wi(e, Tt) * s, fe]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + f), v.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', g = null, Z(e);
      return;
    }
    const T = v.map((Tt) => Tt[1]), R = Math.min(...T), F = Math.max(...T), st = Math.max(4, F - R), mt = Wa !== "smooth", lt = (Tt) => mt ? Math.round(Tt / 2) * 2 : Math.round(Tt * 10) / 10;
    g = (Tt) => f * 0.84 - (Tt - R) / st * f * 0.62;
    const it = ds(), Nt = Wa === "onebit" ? it.paper : "#ffffff", te = Wa === "onebit" ? it.ink : "rgba(0,0,0,.28)", Ft = "M" + v.map((Tt) => lt(Tt[0]) + " " + lt(g(Tt[1]))).join(" L"), Dt = (Tt, fe) => {
      const me = v.find((jt) => jt[1] === Tt);
      return '<text class="wxLineLabel" x="' + lt(Math.min(s - 14, Math.max(14, me[0]))) + '" y="' + lt(g(Tt) + (fe ? 18 : -10)) + '" fill="' + Nt + '" stroke="' + te + '">' + Math.round(Tt) + "°</text>";
    };
    r.setAttribute("shape-rendering", mt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Ft + '" fill="none" stroke="' + te + '" stroke-width="' + (mt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ft + '" fill="none" stroke="' + Nt + '" stroke-width="2" stroke-linejoin="round"/>' + Dt(F, !1) + Dt(R, !0) + '<g id="wxCursorMark"></g>', Z(e);
  }
  function Z(e = Cn()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = l.clientWidth, f = l.clientHeight, v = Wa !== "smooth", T = (Nt) => v ? Math.round(Nt / 2) * 2 : Nt, R = T(Wi(e, c) * s), F = Xs(e, c).temp, st = ds(), mt = Wa === "onebit" ? st.paper : "#ffffff", lt = Wa === "onebit" ? st.ink : "rgba(0,0,0,.28)", it = g && Number.isFinite(F) ? T(g(F)) : null;
    r.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + f + '" fill="' + lt + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + f + '" fill="' + mt + '"/>' + (it == null ? "" : v ? '<rect x="' + (R - 5) + '" y="' + (it - 5) + '" width="10" height="10" fill="' + mt + '" stroke="' + lt + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + it + '" r="6" fill="' + mt + '" stroke="' + lt + '" stroke-width="2"/>');
  }
  const Mt = (e) => {
    const r = l.getBoundingClientRect();
    r.width && (c = Sd(Cn(), (e - r.left) / r.width), I());
  };
  o.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      u = !0;
      try {
        o.setPointerCapture(e.pointerId);
      } catch {
      }
      Mt(e.clientX);
    }
  }), o.addEventListener("pointermove", (e) => {
    u && Mt(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => o.addEventListener(e, () => {
    u = !1;
  })), o.addEventListener("keydown", (e) => {
    const r = Cn(), s = { ArrowLeft: -ta, ArrowRight: ta, ArrowDown: -ta, ArrowUp: ta, PageUp: -24 * ta, PageDown: 24 * ta }[e.key];
    s ? (e.preventDefault(), c = Math.max(r.start, Math.min(r.end - ta, Math.round(c / ta) * ta + s)), I(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), c = e.key === "Home" ? r.start : r.end - ta, I(r));
  }), i("wxDialogClose").addEventListener("click", B), a.addEventListener("click", (e) => {
    e.target === a && B();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), B());
  }), tl(), (uc = (cc = window.matchMedia) == null ? void 0 : (pc = cc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || uc.call(pc, "change", () => {
    Co(), ti(n);
  }), Co();
  const nt = i("tvNav");
  d.fullscreenSupported || (nt.hidden = !0), nt.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !wt.workout.classList.contains("active") || ki.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), hr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(pe.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== pe.value && (pe.value = r, pe.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, A, P, pe].forEach((e) => e.addEventListener("input", () => {
    const r = ae[Qt];
    r && (r.total = Number(_.value), r.work = Number(A.value), r.rest = Number(P.value)), Te();
  })), j.addEventListener("click", br), zt.addEventListener("click", () => M("settings")), i("settingsBack").addEventListener("click", br), hr.addEventListener("click", () => Jn(!ja)), ra(Qt), Or(), sr(), tn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), kr(i("resetStats"), i("resetStatsFill"), 1500, () => {
    we.history = [], we.checkins = [], Ho = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    $a(), Xo(), sr(), Or(), tn(), go(), De("Stats reset");
  });
  const bt = i("morningTime"), W = i("eveningTime"), kt = i("checkinAutoOpen");
  bt.value = qn().morning, W.value = qn().evening, kt.classList.toggle("on", he().checkinAutoOpen !== !1), [["morningTime", bt], ["eveningTime", W]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (Za(e, r.value), go());
  })), kt.addEventListener("click", () => {
    const e = he().checkinAutoOpen === !1;
    kt.classList.toggle("on", e), Za("checkinAutoOpen", e);
  }), setTimeout(Cs, 800);
  const V = i("checkinNotify"), qt = i("checkinNotifyTarget"), He = i("checkinNotifyStatus"), be = He.textContent;
  function Ca() {
    const e = d.notifyServices(), r = e.filter((v) => v.startsWith("mobile_app_")), s = r.length ? r : e, f = (v) => v.replace(/^mobile_app_/, "").replace(/_/g, " ");
    qt.innerHTML = s.map((v) => '<option value="' + Gt(v) + '">' + Gt(f(v)) + "</option>").join(""), !he().notifyTarget && s[0] && (he().notifyTarget = s[0]), qt.value = he().notifyTarget || "";
  }
  function Xt() {
    const e = !!he().notifyOn;
    V.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const r = qn();
    He.textContent = e ? "Sends at " + r.morning + " and " + r.evening : be;
  }
  async function je() {
    const e = !!he().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: he().notifyTarget, times: qn() } : null), !0;
    } catch {
      return De("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  V.addEventListener("click", async () => {
    const e = !he().notifyOn;
    if (e && (Ca(), !he().notifyTarget)) {
      De("Install the Companion app on your phone first");
      return;
    }
    he().notifyOn = e, Xt(), await je() ? ($a(), De(e ? "Check-in notifications on" : "Check-in notifications off")) : (he().notifyOn = !e, Xt());
  }), qt.addEventListener("change", () => {
    Za("notifyTarget", qt.value), he().notifyOn && je();
  }), [bt, W].forEach((e) => e.addEventListener("change", () => {
    Xt(), he().notifyOn && je();
  })), Ca(), Xt();
  let ei = null;
  function Cd() {
    ei || (ei = setTimeout(() => {
      ei = null, tn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, f;
      const r = !da || da[oa.weather] !== e[oa.weather] || ((s = da["sun.sun"]) == null ? void 0 : s.state) !== ((f = e["sun.sun"]) == null ? void 0 : f.state);
      da = e, Rl(e), is(e), r && tl(), Date.now() - Pl > 60 * 60 * 1e3 && Il(), Cd();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (we.history = e.history, Xo()), Array.isArray(e.history) && tn(), Array.isArray(e.checkins) && (we.checkins = e.checkins.map($i), go(), Or(), sr(), Xo(), tn()), e.profiles && !Ia.classList.contains("open") && !Ja)) {
        const r = Ki(e);
        Object.keys(ae).forEach((s) => delete ae[s]), Object.assign(ae, r.profiles), we.order = r.order, ae[Qt] || (Qt = we.order[0]), ro(), ra(Qt);
      }
    },
    suspend() {
      b = !1;
    },
    resume() {
      b || (b = !0, Ai || (Ai = requestAnimationFrame(Gr)), Li || (Li = requestAnimationFrame(Ur)), Co(), Pi(n.querySelector(".tab.active"), !1));
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
}, nl = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ya = "made_up_", Vi = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(ya);
}, Gl = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function nc(n) {
  const d = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function hu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let p = +d; p < +n; p += 10 * 60 * 1e3) i += nc(new Date(p)) / 6;
  return i;
}
function vc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let i = 0; i <= 96; i++) {
    const p = +n - (96 - i) * 15 * 60 * 1e3;
    d.push([p, nc(new Date(p))]);
  }
  return d;
}
function mu({ onChange: n }) {
  const d = {}, i = {}, p = (z, O, ut, rt) => {
    d[z] = { entity_id: z, state: ut, attributes: rt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[z] = O;
  }, m = (z, O, ut) => {
    const rt = d[z], ht = O ?? rt.state;
    d[z] = { ...rt, state: ht, attributes: { ...rt.attributes, ...ut }, last_changed: ht === rt.state ? rt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (z, O, ut, rt) => p("binary_sensor." + ya + (z ? z + "_" : "") + Gl(O), z, rt ? "on" : "off", { friendly_name: O, device_class: ut });
  Object.entries(fu).forEach(([z, O]) => {
    if (O.temperature != null && p("sensor." + ya + z + "_temperature", z, String(O.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), O.humidity != null && p("sensor." + ya + z + "_humidity", z, String(O.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), O.vacuum && p("vacuum." + ya + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), O.climate && p("climate." + ya + z, z, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: O.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), O.cover) {
      const [ut, rt, ht, et] = O.cover;
      p("cover." + ya + z + "_" + Gl(ut), z, ht ? "open" : "closed", { friendly_name: ut, device_class: rt, current_position: ht, ...et != null ? { current_tilt_position: et } : {} });
    }
    if (O.humidifier && p("humidifier." + ya + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: O.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), O.solar && (p("sensor." + ya + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + ya + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), O.valve && p("valve." + ya + z + "_" + Gl(O.valve), z, "closed", { friendly_name: O.valve, device_class: "water" }), O.door && b(z, O.door, "door", O.doorOpen), O.window && b(z, O.window, "window", !1), O.motion && b(z, O.motion, "motion", !1), O.plant) {
      const [ut, rt, ht, et, tt] = O.plant, S = ya + Gl(ut), at = (G, wt, j, zt, M) => p("sensor." + S + "_" + G, z, String(j), { friendly_name: wt, device_class: M, state_class: "measurement", unit_of_measurement: zt, plant_low: j < nl[G][0], plant_high: j > nl[G][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[G] });
      at("moisture", "Moisture", rt, "%", "moisture"), at("light", "Light", ht, "lx", "illuminance"), at("temperature", "Temperature", et, "°C", "temperature"), at("fertility", "Fertility", tt, "µS/cm", "conductivity");
      const Pt = Object.entries({ moisture: rt, light: ht, temperature: et, fertility: tt }).filter(([G, wt]) => wt < nl[G][0] || wt > nl[G][1]).map(([G, wt]) => G + (wt < nl[G][0] ? " low" : " high"));
      p("plant." + S, z, Pt.length ? "problem" : "ok", { friendly_name: ut, moisture: rt, brightness: ht, temperature: et, conductivity: tt, problem: Pt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + ya + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), p("sensor." + ya + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, E = {};
  let k = null;
  function N() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((O) => {
      O.endsWith("_solar_power") && (d[O] = { ...d[O], state: nc(z).toFixed(2) }), O.endsWith("_solar_today") && (d[O] = { ...d[O], state: hu(z).toFixed(1) });
    });
  }
  N();
  let xt = 0;
  function pt() {
    let z = !1;
    const O = ++xt % 10 === 0, ut = (et, tt, S) => {
      m(et, tt, S), z = !0;
    };
    Object.entries(w).forEach(([et, tt]) => {
      const S = d[et].attributes.current_position, at = S < tt ? Math.min(tt, S + 10) : Math.max(tt, S - 10);
      at === tt && delete w[et], ut(et, at === tt ? at === 0 ? "closed" : "open" : tt > S ? "opening" : "closing", { current_position: at });
    }), Object.entries(E).forEach(([et, tt]) => {
      const S = d[et].attributes.current_tilt_position, at = S < tt ? Math.min(tt, S + 25) : Math.max(tt, S - 25);
      at === tt && delete E[et], ut(et, null, { current_tilt_position: at });
    }), Object.keys(d).filter((et) => et.startsWith("climate.")).forEach((et) => {
      const tt = d[et], S = tt.attributes, at = S.current_temperature, Pt = (tt.state === "heat" || tt.state === "auto") && at < S.temperature - 0.05, G = (tt.state === "cool" || tt.state === "auto") && at > S.temperature + 0.05, wt = tt.state === "off" ? "off" : Pt ? "heating" : G ? "cooling" : "idle", j = O ? Math.round((at + (Pt ? 0.1 : G ? -0.1 : 0)) * 10) / 10 : at;
      (j !== at || wt !== S.hvac_action) && ut(et, null, { current_temperature: j, hvac_action: wt });
    }), Object.keys(d).filter((et) => et.startsWith("humidifier.")).forEach((et) => {
      const tt = d[et], S = tt.attributes, at = S.current_humidity, Pt = tt.state === "on" && at < S.humidity, G = Pt && O ? at + 1 : at, wt = tt.state !== "on" ? "off" : Pt ? "humidifying" : "idle";
      if (G !== at || wt !== S.action) {
        ut(et, null, { current_humidity: G, action: wt });
        const j = "sensor." + ya + i[et] + "_humidity";
        d[j] && ut(j, String(G));
      }
    });
    const rt = d["vacuum." + ya + "robot"], ht = rt.attributes;
    rt.state === "cleaning" && O && ut(rt.entity_id, null, { battery_level: Math.max(5, ht.battery_level - 1) }), rt.state === "returning" && ut(rt.entity_id, "docked", {}), rt.state === "docked" && ht.battery_level < 100 && ut(rt.entity_id, null, { battery_level: Math.min(100, ht.battery_level + 2) }), k && Date.now() - k.at > 5e3 && (ut("alarm_control_panel." + ya + "house", "armed_" + k.mode, {}), k = null), z && n();
  }
  const U = setInterval(pt, 1e3), J = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function ot(z, O, ut) {
    const rt = ut == null ? void 0 : ut.entity_id;
    if (!d[rt]) return !1;
    const ht = d[rt], et = ht.attributes, tt = (S, at) => m(rt, S, at);
    if (z === "climate" && (O === "set_temperature" && tt(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, ut.temperature)) }), O === "set_hvac_mode" && tt(ut.hvac_mode, ut.hvac_mode === "off" ? { hvac_action: "off" } : {}), O === "toggle" && tt(ht.state === "off" ? "heat" : "off", ht.state === "off" ? {} : { hvac_action: "off" })), z === "cover") {
      const S = O === "open_cover" ? 100 : O === "close_cover" ? 0 : O === "set_cover_position" ? ut.position : O === "toggle" ? et.current_position > 0 ? 0 : 100 : null;
      O === "stop_cover" && (delete w[rt], delete E[rt], tt(et.current_position === 0 ? "closed" : "open")), S != null && S !== et.current_position && (w[rt] = S, tt(S > et.current_position ? "opening" : "closing"));
      const at = O === "open_cover_tilt" ? 100 : O === "close_cover_tilt" ? 0 : O === "set_cover_tilt_position" ? ut.tilt_position : null;
      O === "stop_cover_tilt" && delete E[rt], at != null && et.current_tilt_position != null && at !== et.current_tilt_position && (E[rt] = at);
    }
    if (z === "humidifier" && (O === "set_humidity" && tt(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, ut.humidity)) }), O === "set_mode" && tt(null, { mode: ut.mode }), O === "turn_on" || O === "turn_off" || O === "toggle")) {
      const S = O === "turn_on" || O === "toggle" && ht.state !== "on";
      tt(S ? "on" : "off", { action: S ? "idle" : "off" });
    }
    if (z === "vacuum" && (O === "start" && tt("cleaning", { rooms: ut.rooms || et.rooms }), O === "pause" && tt("paused"), O === "return_to_base" && tt("returning", { rooms: [] }), O === "locate" && tt(null, { located: Date.now() }), O === "set_rooms" && tt(null, { rooms: ut.rooms })), z === "valve") {
      const S = O === "open_valve" || O === "toggle" && ht.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(O) && tt(S ? "open" : "closed");
    }
    if (z === "alarm_control_panel") {
      O === "alarm_disarm" && (k = null, tt("disarmed", { changed_by: "Matt" }));
      const S = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[O];
      S && (k = { mode: S, at: Date.now() }, tt("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function K(z) {
    const O = (z == null ? void 0 : z.states) || {}, ut = (z == null ? void 0 : z.entities) || {}, rt = (z == null ? void 0 : z.devices) || {}, ht = (A) => {
      var ft;
      const P = ut[A];
      return P && (P.area_id || P.device_id && ((ft = rt[P.device_id]) == null ? void 0 : ft.area_id)) || null;
    }, et = (A) => {
      const P = ut[A];
      return O[A] && O[A].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, tt = {};
    Object.keys(O).forEach((A) => {
      const P = ht(A);
      P && et(A) && (tt[P] || (tt[P] = [])).push(A);
    });
    const S = { ...O, ...d }, at = (A) => {
      var P, ft;
      return (ft = (P = S[A]) == null ? void 0 : P.attributes) == null ? void 0 : ft.device_class;
    }, Pt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], G = Object.keys(O).filter((A) => A.startsWith("vacuum.") && et(A)), wt = Object.values((z == null ? void 0 : z.areas) || {}).filter((A) => !uu.has(A.area_id)).map((A) => {
      const P = A.area_id, ft = tt[P] || [], dt = (_t) => ft.filter((xe) => xe.startsWith(_t + ".")), q = (_t) => dt("sensor").filter((xe) => at(xe) === _t), gt = (_t) => Object.keys(d).filter((xe) => i[xe] === P && _t(xe)), St = (_t, xe) => _t.length ? _t : gt(xe), Jt = St(q("temperature"), (_t) => _t.endsWith(P + "_temperature")), pe = St(q("humidity"), (_t) => _t.endsWith(P + "_humidity")), ea = q("power").filter((_t) => /^(W|kW)$/.test(S[_t].attributes.unit_of_measurement || "")), Se = dt("binary_sensor").filter((_t) => at(_t) === "moisture"), io = St(dt("plant"), (_t) => _t.startsWith("plant.")).map((_t) => ({ id: _t, readings: gt((xe) => xe.startsWith("sensor." + _t.split(".")[1] + "_")) })), Pa = [...dt("binary_sensor").filter((_t) => Pt.includes(at(_t))), ...gt((_t) => _t.startsWith("binary_sensor."))];
      return {
        id: P,
        name: A.name,
        icon: A.icon,
        readings: [...Jt.slice(0, 1), ...pe.slice(0, 1), ...Se],
        power: ea.length ? ea.reduce((_t, xe) => _t + Number(S[xe].state) * (S[xe].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: dt("switch"),
        lights: dt("light"),
        actions: [...dt("light"), ...St(dt("climate"), (_t) => _t.startsWith("climate.")), ...St(dt("cover"), (_t) => _t.startsWith("cover.")), ...St(dt("humidifier"), (_t) => _t.startsWith("humidifier.")), ...St(dt("valve"), (_t) => _t.startsWith("valve.")), ...dt("media_player"), ...dt("vacuum"), ...G.length ? [] : gt((_t) => _t.startsWith("vacuum."))],
        solar: gt((_t) => _t.includes("_solar_")),
        plants: io,
        openings: Pa,
        alerts: [...Se, ...Pa].filter((_t) => {
          var xe;
          return ((xe = S[_t]) == null ? void 0 : xe.state) === "on";
        })
      };
    }).filter((A) => A.readings.length || A.plugs.length || A.actions.length || A.solar.length || A.plants.length), j = Object.keys(O).find((A) => /^sensor\..*(p1_meter_power|grid_power)$/.test(A) && O[A].state !== "unavailable") || null, zt = (A) => Object.keys(O).filter((P) => P.startsWith(A + ".") && et(P)), M = zt("alarm_control_panel"), _ = G.length ? G : ["vacuum." + ya + "robot"];
    return {
      states: S,
      rooms: wt,
      grid: j,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (A) => d[A] ? i[A] : ht(A),
      vacuums: _,
      homeVacuums: _.filter((A) => !wt.some((P) => P.actions.includes(A))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + ya + "house"],
        locks: zt("lock"),
        openings: [...Object.keys(d).filter((A) => A.startsWith("binary_sensor.")), "sensor." + ya + "doorbell"]
      }
    };
  }
  return { model: K, call: ot, stop() {
    clearInterval(U), clearInterval(J);
  } };
}
const ii = (n) => n < 0 ? 0 : n > 1 ? 1 : n, $d = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((p) => p + p).join("") : d;
  return [0, 2, 4].map((p) => parseInt(i.slice(p, p + 2), 16) || 0);
}, gu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), bc = {}, Fn = (n, d, i) => {
  const p = n + d + i;
  return bc[p] || (bc[p] = gu($d(n).map((m, b) => m + ($d(d)[b] - m) * i)));
}, wc = {}, ad = (n) => wc[n] || (wc[n] = $d(n));
function vu(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Fn(d.clear[0], d.cloudy[0], 0.12), Fn(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Fn(d.rain[0], "#000000", 0.22), Fn(d.rain[1], "#000000", 0.22)], d;
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
], oi = (n, d) => (bu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, mp = 1, gp = 2, vp = 3, bp = 4, bs = 5, id = 6, Xd = 7, wp = 8, xc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), wu = (n, d, i) => {
  let p = !1;
  for (let m = 0, b = n.length - 1; m < n.length; b = m++) {
    const w = n[m], E = n[b];
    w[1] > i != E[1] > i && d < (E[0] - w[0]) * (i - w[1]) / (E[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function xu(n, d, i, p, { oneBit: m, ink: b, paper: w, snowInk: E }) {
  const k = new Uint8ClampedArray(i * p * 4), N = ad(b), xt = ad(w);
  for (let pt = 0; pt < p; pt++) for (let U = 0; U < i; U++) {
    const J = pt * i + U, ot = d[J];
    if (n[J] == null) continue;
    let K = ad(n[J]);
    if (m) {
      let z;
      ot === bp || ot === wp ? z = !0 : ot === bs ? z = E : ot === Xd || ot === id ? z = !1 : z = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= oi(U, pt), (ot === mp || ot === gp || ot === vp || ot === id) && (U > 0 && d[J - 1] !== ot || U < i - 1 && d[J + 1] !== ot || pt > 0 && d[J - i] !== ot || pt < p - 1 && d[J + i] !== ot) && (z = !0), K = z ? N : xt;
    }
    k[J * 4] = K[0], k[J * 4 + 1] = K[1], k[J * 4 + 2] = K[2], k[J * 4 + 3] = 255;
  }
  return { w: i, h: p, data: k };
}
const yu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ku = (n) => dd(n, !1).split("/")[0], Ld = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Mu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Tu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Lu = [".##", "##.", ".#.", "#.."];
function xp(n, { width: d, height: i, colors: p, wave: m = 0.38, soft: b = 6, glow: w = 0.6, columns: E = 6 }) {
  const k = { ...dn, dawn: "#e5a77e", ...p }, N = vu(k), xt = d, pt = i, U = xt / E, J = U / 2, ot = Math.PI * 2, K = n.length ? n : [{ cond: "cloudy", night: !1 }], z = [...Array(E * 2)].map((ht, et) => {
    const tt = K[Math.min(et, K.length - 1)], S = ku(tt.cond), at = et % 2 === 1;
    return { cond: tt.cond, k: S, night: at, sky: N[S][at ? 1 : 0], cover: yu[S] };
  }), O = (ht) => pt * (0.5 - m * Math.cos(ot * (ht / U - 0.25)));
  return { C: k, S: z, W: xt, H: pt, cw: U, sw: J, TAU: ot, yb: O, side: (ht, et, tt) => {
    const S = (ht ? O(et) - tt : tt - O(et)) / Math.max(3, b * 1.4) + 0.5;
    return S <= 0 ? 0 : S >= 1 ? 1 : S;
  }, glowAt: (ht) => {
    const et = ((ht / U - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(E - 1, Math.round(ht / U - 0.25))), S = Math.max(0, Math.min(E - 1, Math.round(ht / U - 0.75))), at = 1 - (z[2 * tt].cover + z[2 * S + 1].cover) / 2, Pt = Math.sin(Math.PI * Math.min(1, Math.max(0, O(ht) / pt)));
    return { c: et < 0.5 ? k.dusk : k.dawn, a: w * (0.2 + 0.8 * at) * Pt * Pt };
  }, soft: b, tw: U * 0.3, sy: pt / 90 };
}
function yp(n, { clock: d = 0, ambient: i = !1, seed: p = 1 }) {
  const { S: m, sw: b, side: w, C: E, TAU: k, sy: N, H: xt } = n, pt = d, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((K, z) => {
    const O = Ld(p * 977 + z * 131 + 7), ut = (z + 0.5) * b, rt = K.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[K.k] : 0;
    for (let ht = 0; ht < rt; ht++) {
      const et = ut + (O() - 0.5) * b * 1.6, tt = (6 + O() * 76) * N, S = O() < 0.35, at = 1.8 + O() * 1.6, Pt = w(!0, et, tt) * (S ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(k * pt / 2600 + ht * 1.7 + z) : 1);
      Pt >= 0.03 && U.stars.push({ x: et, y: tt, big: S, size: at, o: Pt });
    }
    if (!K.night && (K.k === "clear" || K.k === "partly")) {
      const ht = ut + (O() - 0.5) * b * 0.3, et = Math.min(15, b * 0.29);
      U.suns.push({ x: ht, y: 32 * N, rad: et, halo: et * 2.8 * (i ? 1 + 0.07 * Math.sin(k * pt / 3600 + z) : 1) });
    }
    if (K.night && (K.k === "clear" || K.k === "partly")) {
      const ht = Math.min(0.78, b * 0.55 / 34), et = ut - 23 * ht + (O() - 0.5) * b * 0.2;
      U.moons.push({ x: et + 23 * ht, y: (4 + (i ? 0.8 * Math.sin(k * pt / 5200 + z) : 0)) * N + 23 * ht, d: 46 * ht });
    }
  });
  const J = Math.max(56, Math.min(100, xt * 0.45)), ot = Math.max(1, b / (J * 2.4));
  return m.forEach((K, z) => {
    const O = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[K.k];
    if (!O) return;
    const ut = K.k === "partly" ? 1 : Math.round(O * ot), rt = Ld(p * 577 + z * 71 + 3), ht = (z + 0.5) * b, et = K.k === "rain" || K.k === "storm" || K.night ? E.cloudNight : E.cloudDay, tt = K.night ? 0.82 : K.k === "storm" ? 0.75 : 1;
    for (let S = 0; S < ut; S++) {
      const at = J / 46 * (K.k === "partly" ? 1 : 0.8 + rt() * 0.4), Pt = ht + (K.k === "partly" ? b * 0.12 : ((S + 0.5) / ut - 0.5) * b * 0.95 + (rt() - 0.5) * b * 0.5 / ut), G = (K.k === "partly" ? 40 : 6 + rt() * 26) * N, wt = i ? 2.5 * Math.sin(k * pt / 9e3 + z * 1.3 + S * 2.1) : 0, j = i ? 0.9 * Math.sin(k * pt / 6100 + z + S) : 0;
      U.clouds.push({ x: Pt - 23 * at + wt, y: G - 15.33 * at + j, w: 46 * at, h: 30.66 * at, fill: et, o: tt * (ut > 1 && S === 0 ? 0.85 : 1) });
    }
  }), m.forEach((K, z) => {
    const O = Ld(p * 313 + z * 29 + 11), ut = (z + 0.5) * b, rt = K.cond === "pouring" ? 16 : K.cond === "rainy" || K.cond === "hail" ? 9 : K.cond === "lightning-rainy" ? 12 : K.cond === "snowy-rainy" ? 5 : 0;
    for (let et = 0; et < rt; et++) {
      let tt = ut + (O() - 0.5) * b * 1.05, S = 44 + O() * 36, at = 1;
      if (i) {
        const G = ((S - 44 + pt * 0.04) % 36 + 36) % 36;
        tt -= 0.21 * (G - (S - 44)), S = 44 + G, at = Math.min(1, G / 6, (36 - G) / 6);
      }
      S *= N;
      const Pt = w(K.night, tt, S) * at;
      Pt >= 0.05 && U.drops.push({ x: tt, y: S, o: Pt });
    }
    const ht = K.cond === "snowy" ? 11 : K.cond === "snowy-rainy" ? 6 : 0;
    for (let et = 0; et < ht; et++) {
      let tt = ut + (O() - 0.5) * b * 1.05, S = 40 + O() * 44, at = 1;
      if (i) {
        const G = ((S - 40 + pt * 9e-3) % 44 + 44) % 44;
        S = 40 + G, tt += 1.6 * Math.sin(k * pt / 2800 + et * 1.9 + z), at = Math.min(1, G / 6, (44 - G) / 6);
      }
      S *= N;
      const Pt = w(K.night, tt, S) * at;
      Pt >= 0.05 && U.flakes.push({ x: tt, y: S, o: Pt });
    }
    if (K.k === "fog") {
      const et = K.night ? "#c8ccd6" : "#ffffff", tt = K.night ? 0.28 : 0.62, S = i ? 4 * Math.sin(k * pt / 8e3 + z) : 0;
      for (let at = 0; at < 4; at++) U.fogs.push({ x: ut - b * 0.75 + at % 2 * b * 0.18 + (at % 2 ? S : -S), y: (30 + at * 13) * N, w: b * 1.3, c: et, a: tt });
    }
    if (K.k === "storm") {
      const et = (pt / 3400 + z * 0.37) % 1;
      U.bolts.push({ x: ut + (O() - 0.5) * b * 0.3 - 5, y: 36 * N, o: i && !(et < 0.05 || et > 0.09 && et < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function Eu(n, d, i, p, m, b, w, E) {
  const { S: k, C: N, cw: xt, yb: pt, glowAt: U, soft: J, tw: ot, sy: K } = n, z = new Array(i * p), O = new Uint8Array(i * p), ut = new Uint8Array(i * p), rt = (M, _, A, P, ft) => {
    A == null || M < 0 || _ < 0 || M >= i || _ >= p || (P >= 1 || P > oi(M + 5, _ + 3)) && (z[_ * i + M] = A, O[_ * i + M] = ft);
  }, ht = (M, _, A, P) => {
    for (let ft = Math.max(0, Math.floor(_ - A) - 1); ft <= Math.min(p - 1, _ + A + 1); ft++) for (let dt = Math.max(0, Math.floor(M - A) - 1); dt <= Math.min(i - 1, M + A + 1); dt++) P(dt, ft, dt + 0.5 - M, ft + 0.5 - _);
  }, et = (M, _, A) => {
    for (let ft = 0; ft < M.length - 1; ft++) {
      const dt = (ft + _) * xt;
      if (A < dt - ot / 2) return [M[ft], M[ft], 0];
      if (A <= dt + ot / 2) return [M[ft], M[ft + 1], (A - dt + ot / 2) / ot];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, tt = k.filter((M) => !M.night).map((M) => M.sky), S = k.filter((M) => M.night).map((M) => M.sky), at = J / b, Pt = 16 * K / b;
  for (let M = 0; M < i; M++) {
    const _ = (M + 0.5) * m, A = pt(_) / b, P = et(tt, 0.75, _), ft = et(S, 1.25, _), dt = U(_);
    for (let q = 0; q < p; q++) {
      const gt = oi(M, q), St = q + 0.5 - A, Jt = (at > 0.01 ? ii(0.5 + St / at) : St > 0 ? 1 : 0) > gt;
      let pe = Jt ? P[2] > gt ? P[1] : P[0] : ft[2] > gt ? ft[1] : ft[0];
      (Jt ? ii(((q + 0.5) / p - 0.45) / 0.55) * 0.7 : ii(1 - (q + 0.5) / (p * 0.55)) * 0.7) > oi(M + 2, q + 5) && (pe = Jt ? Fn(pe, "#ffffff", 0.18) : Fn(pe, "#000000", 0.25)), Jt && St >= 0 && St < Pt && dt.a * 1.3 * (1 - St / Pt) > oi(M + 6, q + 1) && (pe = dt.c), z[q * i + M] = pe, ut[q * i + M] = Jt ? 0 : 1;
    }
  }
  const G = Fn(N.sun, "#ffffff", 0.55), wt = Fn(N.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const _ = Math.floor(M.x / m), A = Math.floor(M.y / b);
    if (_ < 0 || A < 0 || _ >= i || A >= p || !ut[A * i + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? N.star : Fn(N.star, z[A * i + _], 0.5), ft = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    rt(_, A, P, 1, Xd);
    for (let dt = 1; dt <= ft; dt++) [[_ - dt, A], [_ + dt, A], [_, A - dt], [_, A + dt]].forEach((q) => {
      q[0] >= 0 && q[1] >= 0 && q[0] < i && q[1] < p && ut[q[1] * i + q[0]] && rt(q[0], q[1], P, 1, Xd);
    });
  }), d.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / m), A = M.x / m, P = M.y / b, ft = M.halo / m * 0.85;
    if (ht(A, P, ft, (dt, q, gt, St) => {
      const Jt = Math.sqrt(gt * gt + St * St);
      Jt > _ && Jt < ft && !ut[q * i + dt] && rt(dt, q, G, 0.3 * (1 - (Jt - _) / (ft - _)), 0);
    }), E) {
      const dt = Math.floor(w / 500) % 2, q = Math.max(1, _ * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === dt) for (let St = _ + 1.2; St < _ + 1.2 + q; St += 0.7) rt(Math.floor(A + Math.cos(gt * Math.PI / 4) * St), Math.floor(P + Math.sin(gt * Math.PI / 4) * St), N.sun, 1, wp);
    }
    ht(A, P, _, (dt, q, gt, St) => {
      gt * gt + St * St <= _ * _ && rt(dt, q, ii(((St / _ + 1) / 2 - 0.6) / 0.4) > oi(dt, q) ? N.sunEdge : N.sun, 1, mp);
    });
  }), d.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / m), A = M.x / m, P = M.y / b, ft = A + 0.547 * _, dt = P - 0.503 * _, q = 0.82 * _;
    ht(A, P, _, (gt, St, Jt, pe) => {
      if (Jt * Jt + pe * pe > _ * _) return;
      const ea = gt + 0.5 - ft, Se = St + 0.5 - dt;
      ea * ea + Se * Se > q * q && rt(gt, St, ii((pe + _) / (2 * _) * 1.1 - 0.1) > oi(gt, St) ? N.moon : wt, 1, gp);
    });
  }), d.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / m), A = _ * 0.6665, P = M.x / m, ft = M.y / b, dt = Fn(M.fill, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(ft) - 1); q <= Math.min(p - 1, ft + A + 1); q++) for (let gt = Math.max(0, Math.floor(P) - 1); gt <= Math.min(i - 1, P + _ + 1); gt++) {
      const St = (gt + 0.5 - P) / _, Jt = (q + 0.5 - ft) / _;
      xc(St, Jt) && rt(gt, q, !xc(St, Jt + 1 / _) || ii((Jt - 0.42) / 0.25) * 0.8 > oi(gt, q) ? dt : M.fill, M.o, vp);
    }
  }), d.fogs.forEach((M) => {
    const _ = Math.floor(M.y / b), A = Math.max(_, Math.floor((M.y + 6 * K) / b) - 1), P = Math.floor(M.x / m), ft = Math.floor((M.x + M.w) / m);
    for (let dt = _; dt <= A; dt++) for (let q = P; q <= ft; q++) {
      const gt = (q - P) / Math.max(1, ft - P);
      rt(q, dt, M.c, M.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const j = Math.max(2, Math.round(9 / b));
  d.drops.forEach((M) => {
    const _ = M.x / m, A = Math.floor(M.y / b);
    for (let P = 0; P < j; P++) rt(Math.floor(_ - 0.208 * P * b / m), A + P, N.rain, M.o, bp);
  });
  const zt = Math.max(0, Math.round(4.4 / m / 2.6));
  return d.flakes.forEach((M) => {
    const _ = Math.floor(M.x / m), A = Math.floor(M.y / b);
    rt(_, A, N.snow, M.o, bs);
    for (let P = 1; P <= zt; P++)
      rt(_ - P, A, N.snow, M.o, bs), rt(_ + P, A, N.snow, M.o, bs), rt(_, A - P, N.snow, M.o, bs), rt(_, A + P, N.snow, M.o, bs);
  }), d.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let _ = Math.floor(M.y / b); _ <= (M.y + 24) / b; _++) for (let A = Math.floor(M.x / m); A <= (M.x + 11) / m; A++)
        wu(Au, (A + 0.5) * m - M.x, (_ + 0.5) * b - M.y) && rt(A, _, N.sun, 1, id);
    else {
      const _ = Math.round(M.x / m), A = Math.round(M.y / b);
      Lu.forEach((P, ft) => P.split("").forEach((dt, q) => {
        dt === "#" && rt(_ + q, A + ft, N.sun, 1, id);
      }));
    }
  }), { col: z, ids: O };
}
function _u(n, d) {
  const i = d.px, p = Math.max(6, Math.round(d.width / i)), m = Math.max(6, Math.round(d.height / i)), b = d.width / p, w = d.height / m, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, k = (J) => {
    const ot = xp(J, d);
    return Eu(ot, yp(ot, { clock: E, ambient: d.ambient, seed: d.seed }), p, m, b, w, E, d.ambient);
  }, N = k(n), xt = d.reveal == null ? 1 : ii(d.reveal);
  let pt = N.col, U = N.ids;
  if (xt < 1) {
    const J = d.prev ? k(d.prev) : null, ot = xt * (p + 12);
    pt = new Array(p * m), U = new Uint8Array(p * m);
    for (let K = 0; K < p * m; K++) {
      const z = K % p, O = K / p | 0;
      (d.reduce ? xt : ii((ot - z) / 12)) > oi(z, O) ? (pt[K] = N.col[K], U[K] = N.ids[K]) : J ? (pt[K] = J.col[K], U[K] = J.ids[K]) : (pt[K] = null, U[K] = 255);
    }
  }
  return xu(pt, U, p, m, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Du(n, d, i) {
  const p = i.width, m = i.height, b = i.reveal == null ? 1 : ii(i.reveal), w = (U, J) => {
    const ot = xp(J, i);
    Bu(U, ot, yp(ot, i));
  };
  if (n.clearRect(0, 0, p, m), b >= 1) {
    w(n, d);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const E = n.canvas, k = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (k.width !== E.width || k.height !== E.height) && (k.width = E.width, k.height = E.height);
  const N = k.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, p, m), w(N, d);
  const xt = b * (p + 64) - 64, pt = N.createLinearGradient(xt, 0, xt + 64, 0);
  pt.addColorStop(0, "rgba(0,0,0,1)"), pt.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = pt, N.fillRect(0, 0, p, m), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(k, 0, 0), n.restore();
}
function Bu(n, d, i) {
  const { W: p, H: m, S: b, C: w, cw: E, yb: k, glowAt: N, soft: xt, tw: pt, sy: U } = d, J = n.getTransform().a || 1, ot = (j) => {
    n.shadowColor = j ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = j ? 4 * J : 0, n.shadowOffsetY = j ? 1.5 * J : 0;
  }, K = (j, zt) => {
    const M = ad(j);
    return "rgba(" + M[0] + "," + M[1] + "," + M[2] + "," + Math.max(0, Math.min(1, zt)).toFixed(3) + ")";
  }, z = (j, zt) => {
    const M = n.createLinearGradient(0, 0, p, 0);
    M.addColorStop(0, j[0]);
    for (let _ = 0; _ < j.length - 1; _++) {
      const A = (_ + zt) * E, P = (A - pt / 2) / p, ft = (A + pt / 2) / p;
      P > 0 && P < 1 && M.addColorStop(P, j[_]), ft > 0 && ft < 1 && M.addColorStop(ft, j[_ + 1]);
    }
    return M.addColorStop(1, j[j.length - 1]), M;
  }, O = Math.max(24, Math.ceil(p / 4)), ut = (j, zt) => {
    n.beginPath();
    for (let M = 0; M <= O; M++) {
      const _ = p * M / O, A = j == null ? 0 : k(_) + j;
      M ? n.lineTo(_, A) : n.moveTo(_, A);
    }
    for (let M = O; M >= 0; M--) {
      const _ = p * M / O;
      n.lineTo(_, k(_) + zt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = z(b.filter((j) => !j.night).map((j) => j.sky), 0.75), n.fillRect(0, 0, p, m);
  const rt = n.createLinearGradient(0, 0, p, 0);
  for (let j = 0; j <= 64; j++) {
    const zt = N(p * j / 64);
    rt.addColorStop(j / 64, K(zt.c, Math.min(1, zt.a)));
  }
  n.fillStyle = rt;
  for (let j = 0; j < 8; j++)
    n.globalAlpha = 1 - j / 8, ut(j * 2 * U, (j + 1) * 2 * U);
  n.fillStyle = z(b.filter((j) => j.night).map((j) => j.sky), 1.25);
  const ht = Math.max(0.5, xt), et = 6;
  n.globalAlpha = 1, ut(null, -ht);
  for (let j = 0; j < et; j++)
    n.globalAlpha = 1 - (j + 0.5) / et, ut(-ht + 2 * ht * j / et, -ht + 2 * ht * (j + 1) / et);
  n.globalAlpha = 1;
  const tt = new Path2D(Cu), S = new Path2D(Su), at = new Path2D(Mu), Pt = new Path2D(Tu);
  n.fillStyle = w.star, i.stars.forEach((j) => {
    n.globalAlpha = j.o, j.big ? (n.save(), n.translate(j.x, j.y), n.scale(j.size, j.size), n.fill(tt), n.restore()) : (n.beginPath(), n.arc(j.x, j.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const G = Fn(w.sun, "#ffffff", 0.55);
  i.suns.forEach((j) => {
    const zt = n.createRadialGradient(j.x, j.y, 0, j.x, j.y, j.halo);
    zt.addColorStop(0, K(G, 0.42)), zt.addColorStop(0.7, K(G, 0)), n.fillStyle = zt, n.beginPath(), n.arc(j.x, j.y, j.halo, 0, Math.PI * 2), n.fill();
    const M = n.createLinearGradient(0, j.y - j.rad, 0, j.y + j.rad);
    M.addColorStop(0.6, w.sun), M.addColorStop(1, w.sunEdge), n.fillStyle = M, ot(!0), n.beginPath(), n.arc(j.x, j.y, j.rad, 0, Math.PI * 2), n.fill(), ot(!1);
  });
  const wt = Fn(w.moon, "#ffffff", 0.6);
  i.moons.forEach((j) => {
    n.save(), n.translate(j.x - j.d / 2, j.y - j.d / 2), n.scale(j.d / 46, j.d / 46);
    const zt = n.createLinearGradient(0, 6, 0, 40);
    zt.addColorStop(0, wt), zt.addColorStop(1, w.moon), n.fillStyle = zt, ot(!0), n.fill(S), ot(!1), n.restore();
  }), i.clouds.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.scale(j.w / 46, j.h / 30.66), n.translate(-4, -9.67), n.fillStyle = j.fill, ot(!0), n.fill(at), ot(!1), n.restore();
  }), i.fogs.forEach((j) => {
    const zt = n.createLinearGradient(j.x, 0, j.x + j.w, 0);
    zt.addColorStop(0, K(j.c, 0)), zt.addColorStop(0.25, K(j.c, j.a)), zt.addColorStop(0.75, K(j.c, j.a)), zt.addColorStop(1, K(j.c, 0)), n.fillStyle = zt, n.fillRect(j.x, j.y, j.w, 6 * U);
  }), n.fillStyle = w.rain, i.drops.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((j) => {
    n.globalAlpha = j.o, n.beginPath(), n.arc(j.x, j.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.fill(Pt), n.restore();
  }), n.restore();
}
const Ru = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", gs = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ul = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Ed = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Nu = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', Hn = (n, d, i, p) => {
  const m = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Nu(n, 2400) + ' d="M' + n + " " + (d - i) + "L" + (n + m) + " " + (d - m) + "L" + (n + i) + " " + d + "L" + (n + m) + " " + (d + m) + "L" + n + " " + (d + i) + "L" + (n - m) + " " + (d + m) + "L" + (n - i) + " " + d + "L" + (n - m) + " " + (d - m) + 'Z"/>';
}, yc = ([n, d, i], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + d + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Pu = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Iu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), Hu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, i], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + d + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Fu(n, d, i, p) {
  const m = (b) => '<g filter="url(#' + p + '-sh)">' + b + "</g>";
  return n === "clear" ? d ? m(yc(i ? Ul.l : Ul.s, p)) + (i ? Hn(70, 20, 5.83, 1) + Hn(78.33, 41.67, 3.75, 0.8) + Hn(60, 71.67, 3.33, 0.6) : Hn(42, 12, 3.5, 1) + Hn(47, 25, 2.25, 0.8) + Hn(36, 43, 2, 0.6)) : m(Pu(p, i)) : n === "partly" ? m(d ? yc(i ? Ul.lp : Ul.sp, p) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(Ed(i ? gs.lp : gs.sp, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Hn(73.33, 16.67, 4.17, 0.9) : Hn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(Ed(i ? gs.lc : gs.s, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Hn(15, 15, 3.75, 0.8) + Hn(76.67, 13.33, 2.92, 0.6) : Hn(9, 9, 2.25, 0.8) + Hn(46, 8, 1.75, 0.6) : "") : m(Ed(i ? gs.lr : gs.s, "wbCloudLight")) + (n === "rain" ? Iu(i) : Hu(i));
}
const Ou = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Wu(n, d, i, p) {
  let m = Ru(n);
  const b = m === "night" || !!i;
  m === "night" && (m = "clear");
  const w = d ? 90 : 54;
  return { k: m, night: b, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Ou(p, d) + Fu(m, b, d, p) + "</svg>" };
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
], Yl = (n, d) => (qu[d % 8 * 8 + n % 8] + 0.5) / 64, oo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ka = (n, d, i) => [Math.round(n[0] + (d[0] - n[0]) * i), Math.round(n[1] + (d[1] - n[1]) * i), Math.round(n[2] + (d[2] - n[2]) * i)], ol = (n) => n < 0 ? 0 : n > 1 ? 1 : n, kc = (n, d) => {
  let i = n * 374761393 + d * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Br = [255, 255, 255], on = oo("#26221e"), Mc = oo("#0288d1"), ju = oo("#01579b"), _d = oo(dn.cloudDay), Dd = oo(dn.cloudNight), Zl = oo(dn.dusk), Bd = oo(dn.sunEdge), zu = oo(dn.sun), Vu = 10, Sc = 0.3, ri = 56, kp = 21;
function Gu(n) {
  const d = Array.from({ length: kp }, () => new Array(ri).fill(void 0)), i = (w, E, k) => {
    d[E][w] = k;
  }, p = Ka(Zl, on, 0.35), m = Ka(on, Br, 0.22);
  for (let w = 0; w <= 6; w++) {
    const E = w < 2 ? ri - 2 : ri - 1;
    for (let k = 6 - w; k <= E; k++) i(k, w, w < 2 ? p : w === 6 ? m : on);
  }
  const b = [Zl, Bd, Dd, oo(dn.skyRainDay), Ka(Zl, on, 0.2), Ka(n, on, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, E) => {
    const k = 9 + E * 6;
    for (let N = 0; N < w; N++) {
      const xt = b[(E * 2 + N * 3) % b.length];
      for (let pt = k; pt < k + 5; pt++)
        i(pt, 7 + N * 2, Ka(xt, on, 0.12)), i(pt, 8 + N * 2, N === w - 1 ? Ka(xt, Br, 0.3) : xt);
      i(k + 5, 7 + N * 2, on), i(k + 5, 8 + N * 2, on);
    }
  });
  for (let w = 7; w <= 12; w++) i(5, w, on);
  i(5, 13, Bd);
  for (let w = 7; w <= 14; w++) for (let E = 42; E <= 51; E++) i(E, w, E === 51 ? Dd : _d);
  for (let w = 43; w <= 50; w += 2)
    i(w, 12, on), i(w, 9, Ka(on, _d, 0.4));
  for (let w = 40; w <= 53; w++) i(w, 14, w === 40 || w === 53 ? Dd : _d);
  for (let w = 15; w <= 18; w++) for (let E = 46; E <= 49; E++) i(E, w, w === 18 ? on : w === 16 ? Bd : Zl);
  for (let w = 15; w <= 19; w++) i(44, w, on);
  return i(44, 20, zu), d;
}
function Uu(n, d, i, p) {
  const m = Math.max(1, Math.round(n)), b = Math.max(1, Math.round(d)), w = new Uint8ClampedArray(m * b * 4), E = oo(p.skyClearDay), k = oo(p.skyFogDay), N = Gu(E), xt = Math.round(b * 0.55), pt = ol(1 - Math.log(i / Sc) / Math.log(Vu / Sc)), U = Ka(E, k, pt), J = (O) => ol((O - 0.1) / 0.9), ot = ol((1 - Math.exp(-2 / i) - 0.2) / 0.8), K = Math.round(m / 2 - ri / 2), z = xt + 3;
  for (let O = 0; O < b; O++) {
    const ut = z - 1 - O, rt = O - z;
    for (let ht = 0; ht < m; ht++) {
      const et = ht - K;
      let tt, S;
      const at = ut >= 0 && ut < kp && et >= 0 && et < ri ? N[ut][et] : void 0;
      if (at)
        tt = at, S = ot;
      else if (ut >= 0 && ut <= 1 && et >= 4 - ut && et <= 5 - ut)
        tt = Ka(Br, Mc, 0.15), S = ot;
      else if (O < xt) {
        const wt = ol(((O + 0.5) / xt - 0.15) / 0.85) * 3, j = Math.min(3, Math.floor(wt + Yl(ht + 2, O + 5)));
        tt = Ka(U, Br, j * 0.1), S = pt * 0.95;
      } else {
        const wt = (O - xt + 0.5) / (b - xt), j = Math.min(1.5, 6e-3 / (wt * wt)), zt = ol(wt * 1.4) * 3, M = Math.min(3, Math.floor(zt + Yl(ht + 1, O + 6)));
        tt = Ka(Mc, ju, M / 3);
        const _ = 1 + Math.round(wt * 7), A = Math.floor(ht / (_ * 3)), P = 0.06 + 0.16 * wt, ft = ht % (_ * 3) < _;
        ft && kc(A, O) < P ? tt = Ka(tt, Br, 0.18 + 0.1 * (1 - wt)) : ft && wt > 0.5 && kc(A, O - 1) < P && (tt = Ka(tt, on, 0.12)), S = J(1 - Math.exp(-j / i)), rt === 0 && et >= 3 && et <= 8 ? (tt = Ka(tt, Br, et < 6 ? 0.8 : 0.45), S = ot) : rt >= 0 && rt <= 2 && et >= ri && et < ri + 40 ? ((1 - (et - ri) / 40) * (rt === 1 ? 0.9 : 0.5) > Yl(ht, O + 3) && (tt = Ka(tt, Br, 0.5)), S = ot) : rt === 0 && et >= 6 && et < ri && (tt = Ka(tt, on, et % 2 === 0 ? 0.35 : 0.2), S = ot);
      }
      const Pt = S > Yl(ht, O) ? k : tt, G = (O * m + ht) * 4;
      w[G] = Pt[0], w[G + 1] = Pt[1], w[G + 2] = Pt[2], w[G + 3] = 255;
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
  const i = n ? Yu[String(n).toUpperCase()] : void 0;
  if (!i || !(d > 0)) return;
  const p = (b) => Math.abs(Math.log(b[2] / d)), m = i.reduce((b, w) => p(w) < p(b) ? w : b);
  return p(m) <= Math.log(Zu) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const $u = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, Xu = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", no = 6e4, Fe = 36e5, Eo = 864e5, sl = 1440, Ju = 6, Qu = 10 * no, Cc = 3, tf = 3, Kl = { day: [6, 22], waking: [7, 23], all: [0, 24] }, ef = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], af = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Tc = (n, d, i, p) => '<circle cx="' + n + '" cy="' + d + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const b = Math.cos(m * Math.PI / 180), w = Math.sin(m * Math.PI / 180), E = i + 2, k = i + 2 + p;
  return "M" + (n + b * E).toFixed(2) + " " + (d + w * E).toFixed(2) + "L" + (n + b * k).toFixed(2) + " " + (d + w * k).toFixed(2);
}).join("") + '"/>', ai = (n) => '<path d="' + af + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ni = (n) => '<path d="' + n + '"/>', Ac = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function nf(n, d) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Ac : Tc(12, 12, 4, 2.5);
    case "clear-night":
      return Ac;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Tc(7.5, 7.5, 2.6, 1.4)) + ai("translate(3.6,3) scale(.85)");
    case "cloudy":
      return ai();
    case "fog":
      return ni("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return ai(i) + ni("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return ai(i) + ni("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return ai(i) + ni("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return ai(i) + ni("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return ai(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return ai(i) + ni("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return ai(i) + ni("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ni("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ni("M12 8v5M12 16h.01");
  }
}
const Rd = (n, d) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + nf(n, d) + "</svg>", of = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), rf = 30 * no, sf = 7, lf = 3, Lc = 1, df = no, cf = 15 * no, pf = 5, ka = {
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
}, Ut = {
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
}, ff = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], hf = Object.keys(Ut.phases), $l = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Mp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Xl = 100, Ec = "µg/m³", gf = "weather_alerts.air_quality_pollen", rd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], vf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, bf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], wf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, xf = { daily: 1, hourly: 2 }, Ot = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), qa = (n, d) => n.replace(/\{(\w+)\}/g, (i, p) => d[p] ?? ""), ws = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', _c = /* @__PURE__ */ new Map();
function yf(n) {
  let d = _c.get(n);
  if (d === void 0) {
    const i = "http://www.w3.org/2000/svg", p = document.createElementNS(i, "svg"), m = document.createElementNS(i, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), p.append(m), document.body.append(p);
    const b = m.getBBox();
    p.remove();
    const w = Math.max(b.width, b.height), E = w ? 26 * 24 / w : 0, k = E / 24;
    d = w ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * k).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * k).toFixed(2) + "px" : "", _c.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : ws(n);
}
const kf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ge = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Dc = /* @__PURE__ */ new Map(), Bc = /* @__PURE__ */ new Map(), Nd = /* @__PURE__ */ new WeakMap(), Mf = (n) => {
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
function ha(n, d, i) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const m = (d == null ? void 0 : d.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : Mf(d), E = JSON.stringify([w, b]);
  let k = Dc.get(E);
  if (!k) {
    try {
      k = new Intl.NumberFormat(w, b);
    } catch {
      k = new Intl.NumberFormat(void 0, b);
    }
    Dc.set(E, k);
  }
  return k.format(p);
}
const oc = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function Sf(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Nd.has(n)) return Nd.get(n);
  const d = n.time_format, i = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return Nd.set(n, i), i;
}
const Sp = (n) => {
  var d, i;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Cp(n, d) {
  const i = JSON.stringify([n, d]);
  let p = Bc.get(i);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, d);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...d, timeZone: void 0 });
    }
    Bc.set(i, p);
  }
  return p;
}
const Ao = (n, d) => Cp(oc(d), { hour: "numeric", minute: "2-digit", hourCycle: Sf(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: Sp(d) }).format(n), Rc = (n, d) => Cp(oc(d), { weekday: "short", timeZone: Sp(d) }).format(n), Cf = (n, d) => n.toLocaleDateString(oc(d), { weekday: "narrow" }), ia = (n, d) => Ge(d) ? ha(Math.round(Number(d)), n.locale) + "°" : "–", xs = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, vs = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), vn = Math.PI / 180, Tf = 2440588, Af = 2451545, sd = vn * 23.4397, Lf = 149598e3, Ef = -0.833 * vn, _f = 0.133 * vn, Nc = 5 * no, Tp = (n) => n.getTime() / Eo - 0.5 + Tf - Af, Ap = (n, d) => Math.atan2(Math.sin(n) * Math.cos(sd) - Math.tan(d) * Math.sin(sd), Math.cos(n)), Lp = (n, d) => Math.asin(Math.sin(d) * Math.cos(sd) + Math.cos(d) * Math.sin(sd) * Math.sin(n)), Df = (n, d) => vn * (280.16 + 360.9856235 * n) - d, Bf = (n, d, i) => Math.asin(Math.sin(d) * Math.sin(i) + Math.cos(d) * Math.cos(i) * Math.cos(n));
function Ep(n) {
  const d = vn * (357.5291 + 0.98560028 * n), i = vn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), p = d + i + vn * 102.9372 + Math.PI;
  return { ra: Ap(p, 0), dec: Lp(p, 0), dist: Lf };
}
function _p(n) {
  const d = vn * (218.316 + 13.176396 * n), i = vn * (134.963 + 13.064993 * n), p = vn * (93.272 + 13.22935 * n), m = d + vn * 6.289 * Math.sin(i), b = vn * 5.128 * Math.sin(p);
  return { ra: Ap(m, b), dec: Lp(m, b), dist: 385001 - 20905 * Math.cos(i) };
}
const Dp = (n, d, i, p) => {
  const m = Tp(d), b = n(m);
  return Bf(Df(m, vn * -p) - b.ra, vn * i, b.dec);
}, ic = (n, d, i) => Dp(Ep, n, d, i), Rf = (n, d, i) => Dp(_p, n, d, i);
function Bp(n, d, i, p) {
  const m = {};
  let b = i.getTime(), w = n(i) - d;
  for (let E = b + Nc; E <= p.getTime(); E += Nc) {
    const k = n(new Date(E)) - d;
    if (w < 0 != k < 0) {
      const N = new Date(b + (E - b) * w / (w - k));
      k > 0 ? m.rise ?? (m.rise = N) : m.set ?? (m.set = N);
    }
    b = E, w = k;
  }
  return m;
}
const Rp = (n) => {
  const d = xs(n);
  return [d, new Date(d.getTime() + Eo)];
}, Nf = (n, d, i) => Bp((p) => ic(p, d, i), Ef, ...Rp(n)), Pf = (n, d, i) => Bp((p) => Rf(p, d, i), _f, ...Rp(n));
function If(n) {
  const d = Tp(n), i = Ep(d), p = _p(d), m = Math.acos(Math.sin(i.dec) * Math.sin(p.dec) + Math.cos(i.dec) * Math.cos(p.dec) * Math.cos(i.ra - p.ra)), b = Math.atan2(i.dist * Math.sin(m), p.dist - i.dist * Math.cos(m)), w = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - p.ra), Math.sin(i.dec) * Math.cos(p.dec) - Math.cos(i.dec) * Math.sin(p.dec) * Math.cos(i.ra - p.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (w < 0 ? -1 : 1) / Math.PI };
}
const Hf = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, ld = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && Ge(d.latitude) && Ge(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function Pd(n, d) {
  var N, xt, pt;
  const i = ld(n), p = i ? Nf(d, i.lat, i.lon) : {}, m = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], b = xs(d).getTime(), w = (U) => {
    const J = U ? new Date(U) : null;
    return J && Number.isFinite(J.getTime()) && xs(J).getTime() === b ? J : null;
  }, E = w((xt = m == null ? void 0 : m.attributes) == null ? void 0 : xt.next_rising), k = w((pt = m == null ? void 0 : m.attributes) == null ? void 0 : pt.next_setting);
  return E && (p.rise = E), k && (p.set = k), p;
}
function Ff(n) {
  var p;
  const d = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const i = ld(n);
  return i ? ic(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Rr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", ys = (n, d) => {
  var p;
  const i = (p = n.entities) == null ? void 0 : p[d];
  return !i || !i.hidden && !i.entity_category;
}, mn = (n, d, i) => {
  var p, m;
  for (const b of d) {
    const w = (p = n.states) == null ? void 0 : p[b];
    if (!Rr(w)) continue;
    const E = (m = w.attributes) == null ? void 0 : m[i];
    if (E != null && E !== "") return { stateObj: w, value: E };
  }
}, Of = (n, d) => d.map((i) => {
  var p;
  return (p = n.states) == null ? void 0 : p[i];
}).find(Rr), Wf = (n, d, i) => d.map((p) => {
  var m;
  return (m = n.states) == null ? void 0 : m[p];
}).find((p) => {
  var m;
  return Rr(p) && (((m = p.attributes) == null ? void 0 : m.supported_features) == null || Number(p.attributes.supported_features) & xf[i]);
});
function Dr(n, d, i) {
  var b, w, E, k;
  const p = ((w = (b = n.config) == null ? void 0 : b.unit_system) == null ? void 0 : w.length) || "", m = (d == null ? void 0 : d.attributes) || {};
  switch (i) {
    case "precipitation":
      return m.precipitation_unit || (p === "km" ? "mm" : "in");
    case "pressure":
      return m.pressure_unit || (p === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return m.wind_speed_unit || p + "/h";
    case "visibility":
      return m.visibility_unit || p;
    default:
      return m.temperature_unit || ((k = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : k.temperature) || "";
  }
}
function nd(n, d, i, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...b] = n.formatEntityAttributeValueToParts(d, i, p).map((w) => w.value);
      return { number: m, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: ha(p, n.locale), unit: Dr(n, d, i) };
}
function qf(n, d, i, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, i, p);
  } catch {
  }
  const m = nd(n, d, i, p);
  return (m.number + " " + m.unit).trim();
}
function _r(n, d) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const i = (p = d.attributes) == null ? void 0 : p.unit_of_measurement;
  return uf[d.state] || (i && Ge(d.state) ? ha(d.state, n.locale) + " " + i : d.state);
}
function il(n, d) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((i = d.attributes) == null ? void 0 : i.friendly_name) || d.entity_id;
}
const jf = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Pc = (n) => Mp.find(([, d]) => n <= d)[0];
function zf(n, d) {
  if (d === "Beaufort") return Math.round(n);
  const i = d ? vf[d] : void 0;
  if (i === void 0) return;
  const p = bf.findIndex((m) => n * i < m);
  return p === -1 ? 12 : p;
}
const Ic = (n, d) => {
  const i = d ? wf[d] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Hc = (n) => Object.keys(n.states || {}).find((d) => {
  var i, p;
  return d.startsWith("sensor.") && ((p = (i = n.entities) == null ? void 0 : i[d]) == null ? void 0 : p.platform) === "moon";
}), Id = (n) => Object.values(n.states || {}).filter((d) => {
  var i, p;
  return d.entity_id.startsWith("sensor.") && ((i = d.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = d.attributes) == null ? void 0 : p.state_class) ?? "") && ys(n, d.entity_id);
}).map((d) => d.entity_id).sort()[0];
function Vf(n) {
  var i;
  const d = {};
  for (const [p, m] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (m && "integration_type" in m) {
      d[p] = m.categories;
      continue;
    }
    for (const [b, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) d[b] = w == null ? void 0 : w.categories;
  }
  return d;
}
const Np = (n, d, i) => {
  var m, b, w;
  const p = (b = (m = n.entities) == null ? void 0 : m[i]) == null ? void 0 : b.platform;
  return !!p && !!((w = d[p]) != null && w.includes(gf));
};
function Gf(n, d) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var m;
    return p.entity_id.startsWith("sensor.") && rd.includes(((m = p.attributes) == null ? void 0 : m.device_class) ?? "") && ys(n, p.entity_id) && Np(n, d, p.entity_id);
  }).sort((p, m) => p.entity_id.localeCompare(m.entity_id)).forEach((p) => {
    i.has(p.attributes.device_class) || i.set(p.attributes.device_class, p.entity_id);
  }), rd.map((p) => i.get(p)).filter(Boolean);
}
const Uf = (n, d) => Object.values(n.states || {}).filter((i) => {
  var p, m;
  return i.entity_id.startsWith("sensor.") && ys(n, i.entity_id) && Np(n, d, i.entity_id) && (((m = (p = n.entities) == null ? void 0 : p[i.entity_id]) == null ? void 0 : m.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Fc(n, d, i) {
  const p = Math.max(d - n, 1e-6), m = i[i.length - 1], b = i.find((N) => p / N <= 4) ?? m * Math.ceil(p / (4 * m)), w = Math.floor(n / b) * b;
  let E = Math.ceil(d / b) * b;
  E === w && (E = w + b);
  const k = [];
  for (let N = w; N <= E + b / 1e3; N += b) k.push(N);
  return { min: w, max: E, ticks: k };
}
const rl = (n, d, i) => {
  const p = (w) => [1, 3, 5].map((E) => parseInt(w.slice(E, E + 2), 16)), m = p(n), b = p(d);
  return "rgb(" + m.map((w, E) => Math.round(w + (b[E] - w) * i)).join(", ") + ")";
}, Yf = (n, d, i, p) => {
  const m = i * Math.abs(1 - 2 * p), b = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (d + i) + " A " + m + " " + i + " 0 0 " + b + " " + n + " " + (d - i) + " Z";
}, gn = ({ icon: n, name: d, sub: i, visual: p, double: m, backdrop: b, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + yf(n) + '</div><div class="wbText"><span class="wbName">' + Ot(d) + "</span>" + (i ? '<span class="wbSub">' + Ot(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + p + "</div></div>", Gi = (n, d) => '<div class="wbValue"><span class="wbNum">' + Ot(n) + "</span>" + (d ? '<span class="wbUnitV">' + Ot(d) + "</span>" : "") + "</div>";
function Zf(n) {
  const d = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / d * 100, p = (E) => E / sl * 100 + "%", m = (E) => E.map((k) => k.t + "," + i(k.v)).join(" "), b = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + p(E.t) + '">' + ws(E.rise ? ka.sunsetUp : ka.sunsetDown) + Ot(E.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + Ot(n.format(E)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + sl + ' 100" preserveAspectRatio="none">' + n.night.map(([E, k]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (k - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + sl + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + m(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + p(E.t + 12) + ";width:" + p(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Ot(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Ot(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + p(E.t) + '">' + Ot(E.label) + "</span>").join("") + "</div></div>", w;
}
function Kf(n, d) {
  const w = n.map((z) => z.value), E = Math.min(...w), k = Math.max(...w), N = k - E || 1, xt = (z) => z / (n.length - 1) * 300, pt = (z) => 18 + (1 - (z - E) / N) * 84, U = n.map((z, O) => xt(O) + "," + pt(z.value)).join(" "), J = w.indexOf(k), ot = w.indexOf(E), K = (z) => z === 0 ? "start" : z === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + xt(J) + '" y="' + (pt(k) - 6) + '" text-anchor="' + K(J) + '">' + Ot(d(k)) + '</text><text x="' + xt(ot) + '" y="' + (pt(E) + 14) + '" text-anchor="' + K(ot) + '">' + Ot(d(E)) + '</text><text x="0" y="120" text-anchor="start">' + Ot(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Ot(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, d) {
  const b = n.map((pt) => pt.value).concat([]), w = Math.min(...b) - 2, E = Math.max(...b) + 1, k = E - w || 1, N = 300 / n.length, xt = (pt) => (1 - (pt - w) / k) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((pt, U) => '<rect class="wbBar' + (pt.now ? " wbNowBar" : "") + '" x="' + (U * N + N * 0.2) + '" y="' + xt(pt.value) + '" width="' + N * 0.6 + '" height="' + (104 - xt(pt.value)) + '" rx="6"></rect><text x="' + (U * N + N / 2) + '" y="120" text-anchor="middle">' + Ot(pt.label) + "</text>").join("") + "</svg>";
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
], Jf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Oc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Qf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let th = 0;
function Wc(n, { getHass: d, entityId: i, style: p = "bitmap", motion: m = !0, cards: b, onOpen: w, hoursWindow: E } = {}) {
  var po, No;
  const k = "wb" + ++th + "-", N = document.createElement("div");
  N.className = "wb", N.dataset.style = p;
  const xt = document.createElement("div");
  xt.className = "wbBento", N.appendChild(xt), n.replaceChildren(N);
  const pt = ["aq_tile", "pollen_tile", "radar_tile"], U = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...pt].filter((x) => !b || b.includes(x)), J = { current: "wide", hourly: "wide", compared_to_average: "double" }, ot = {};
  U.forEach((x) => {
    const C = document.createElement("div");
    C.className = "wbItem", C.dataset.card = x, C.dataset.size = J[x] || "tile", C.hidden = !0, xt.appendChild(C), ot[x] = { el: C, html: null };
  });
  let K = !1, z = null, O = 0, ut = -1, rt = !1, ht = null;
  const et = "homecore-next-view", S = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(et);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, at = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Pt = /* @__PURE__ */ new Date(), G = /* @__PURE__ */ new Date();
  const wt = {}, j = {}, zt = {}, M = (x) => {
    var C;
    return ((C = zt[x]) == null ? void 0 : C.forecast) ?? [];
  }, _ = (x, C) => {
    var L;
    return zt[C] ? (L = x.states) == null ? void 0 : L[zt[C].entityId] : void 0;
  };
  function A(x) {
    const C = j[x];
    C && (C.unsub.then((L) => {
      typeof L == "function" && L();
    }).catch(() => {
    }), delete j[x]), zt[x] && delete zt[x];
  }
  function P(x, C, L) {
    var Y;
    if (typeof ((Y = x.connection) == null ? void 0 : Y.subscribeMessage) != "function") return;
    const H = { entityId: L };
    try {
      H.unsub = Promise.resolve(x.connection.subscribeMessage(($) => {
        K || j[C] !== H || ($ != null && $.forecast ? zt[C] = { entityId: L, forecast: $.forecast } : delete zt[C], Ue());
      }, { type: "weather/subscribe_forecast", forecast_type: C, entity_id: L }));
    } catch ($) {
      H.unsub = Promise.reject($);
    }
    H.unsub.catch(() => {
      j[C] === H && delete j[C];
    }), j[C] = H;
  }
  function ft(x, C) {
    var L;
    for (const H of ["daily", "hourly"]) {
      const Y = Wf(x, C, H);
      ((L = j[H]) == null ? void 0 : L.entityId) !== (Y == null ? void 0 : Y.entity_id) && (A(H), Y && P(x, H, Y.entity_id));
    }
  }
  const dt = (x, C, L, H = !1) => x.callWS({
    type: "history/history_during_period",
    start_time: L.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [C],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  });
  async function q(x, C) {
    var ct, vt, yt;
    const L = mn(x, C, "pressure");
    if (!L) return;
    const H = L.stateObj.entity_id, Y = await dt(x, H, new Date(Date.now() - 3 * Fe)), $ = (yt = (vt = (ct = Y == null ? void 0 : Y[H]) == null ? void 0 : ct.find((Ht) => {
      var At;
      return typeof ((At = Ht.a) == null ? void 0 : At.pressure) == "number";
    })) == null ? void 0 : vt.a) == null ? void 0 : yt.pressure;
    at.pressureHistory = typeof $ == "number" ? { entityId: H, value: $ } : void 0;
  }
  async function gt(x, C) {
    var vt;
    const L = mn(x, C, "temperature");
    if (!L) return;
    const H = L.stateObj.entity_id, Y = xs(/* @__PURE__ */ new Date()), $ = await dt(x, H, new Date(Y.getTime() - sf * Eo)), ct = /* @__PURE__ */ new Map();
    for (const yt of ($ == null ? void 0 : $[H]) ?? []) {
      const Ht = (vt = yt.a) == null ? void 0 : vt.temperature, At = new Date((yt.lc ?? yt.lu) * 1e3);
      if (typeof Ht != "number" || At >= Y) continue;
      const Ct = At.toDateString();
      ct.set(Ct, Math.max(ct.get(Ct) ?? -1 / 0, Ht));
    }
    at.temperatureHistory = { entityId: H, dailyHighs: [...ct.values()], days: [...ct.entries()].map(([yt, Ht]) => ({ date: new Date(yt), high: Ht })) };
  }
  async function St(x) {
    const C = Id(x);
    if (!C) return;
    const L = await x.callWS({ type: "recorder/statistic_during_period", statistic_id: C, rolling_window: { duration: { hours: 24 } } });
    at.rain = { entityId: C, change: (L == null ? void 0 : L.change) ?? void 0 };
  }
  function Jt() {
    const x = d == null ? void 0 : d();
    if (!x || K || typeof x.callWS != "function") return;
    const C = io(x);
    at.lastFetch = Date.now(), [q(x, C), gt(x, C), St(x)].forEach((L) => L.then(() => Ue(), () => {
    }));
  }
  async function pe() {
    const x = d == null ? void 0 : d();
    if (!x) return;
    const C = mn(x, io(x), "temperature");
    if (!C) return;
    const L = C.stateObj.entity_id, H = xs(/* @__PURE__ */ new Date());
    try {
      const Y = await dt(x, L, H), $ = (ct) => ((Y == null ? void 0 : Y[L]) ?? []).map((vt) => {
        var yt;
        return { time: vt.lu * 1e3, value: (yt = vt.a) == null ? void 0 : yt[ct] };
      }).filter((vt) => typeof vt.value == "number");
      at.todayHistory = { day: H.toDateString(), fetched: Date.now(), temperature: $("temperature"), humidity: $("humidity") }, Ue();
    } catch {
    }
  }
  async function ea(x) {
    const C = d == null ? void 0 : d();
    if (C)
      try {
        const L = await dt(C, x, new Date(Date.now() - 24 * Fe), !0), H = ((L == null ? void 0 : L[x]) ?? []).filter(($) => Ge($.s)), Y = Math.max(1, Math.ceil(H.length / 48));
        at.aqHistory = { entityId: x, points: H.filter(($, ct) => ct % Y === 0).map(($) => ({ label: Ao(new Date($.lu * 1e3), C), value: Number($.s) })) }, Ue();
      } catch {
      }
  }
  function Se(x) {
    at.categories === void 0 && (at.categories = null, Promise.resolve().then(() => x.callWS({ type: "integration/descriptions" })).then((C) => {
      at.categories = Vf(C);
    }, () => {
      at.categories = {};
    }).then(() => Ue()));
  }
  function io(x) {
    var L;
    const C = Object.keys(x.states || {}).filter((H) => H.startsWith("weather.") && ys(x, H)).sort();
    return i && ((L = x.states) != null && L[i]) ? [i, ...C.filter((H) => H !== i)] : C;
  }
  const Pa = (x) => at.categories ? { air: Gf(x, at.categories), pollen: Uf(x, at.categories) } : { air: [], pollen: [] };
  function _t(x, C, L, H) {
    if (p === "line") return '<span class="wbWx wbS' + C + ' wbLineIcon" aria-hidden="true">' + Rd(x, L || x === "clear-night") + "</span>";
    if (p === "smooth") {
      const Y = Wu(x, C === 90, L, k + "g-" + H);
      return '<span class="wbWx wbS' + C + " wb" + Y.k[0].toUpperCase() + Y.k.slice(1) + (Y.night ? " wbNight" : "") + '" aria-hidden="true">' + Y.svg + "</span>";
    }
    return '<span class="wbWx wbS' + C + '" aria-hidden="true"><canvas data-wb-wx="' + Ot(dd(x, L)) + '" data-size="' + C + '"></canvas></span>';
  }
  const xe = () => M("daily").filter((x) => x.templow != null).slice(0, Ju);
  function Ke(x, C) {
    const L = new Date(C.datetime), H = /* @__PURE__ */ new Date();
    return vs(L, H) ? Ut.today : vs(L, new Date(H.getTime() + Eo)) ? Ut.tomorrow : Rc(L, x);
  }
  const ve = (x, C, L) => L === 0 ? Ke(x, C) : Rc(new Date(C.datetime), x);
  function ze(x, C) {
    var At, Ct, Yt, It;
    const L = Of(x, C);
    if (!L) return "";
    const H = xe(), Y = S.openDay !== void 0 ? H[S.openDay] : void 0, $ = mn(x, C, "temperature"), ct = H[0], vt = ct && vs(new Date(ct.datetime), /* @__PURE__ */ new Date()), yt = ((Ct = (At = x.config) == null ? void 0 : At.unit_system) == null ? void 0 : Ct.temperature) || ((Yt = L.attributes) == null ? void 0 : Yt.temperature_unit) || "";
    let Ht = '<div class="wbCard wbWeather' + (Y ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Y ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ot(Ut.openPage) + '">' : '<div class="wbCurrent">') + _t(L.state, 90, Ff(x), "now") + '<div class="wbTempBlock">' + ($ && Ge($.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ot(ha(Math.round(Number($.value)), x.locale)) + '</span><span class="wbUnit">' + Ot(yt) + "</span></div>" : "") + '<div class="wbPlace">' + Ot(((It = x.config) == null ? void 0 : It.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ot(_r(x, L)) + "</div>" + (vt && ct.templow != null ? '<div class="wbRange">' + Ot(qa(Ut.range, { high: ia(x, ct.temperature), low: ia(x, ct.templow) })) + "</div>" : "") + "</div></div>";
    if (Ht += Qt(x) + Ki(x), H.length) {
      const Wt = vt && $ && Ge($.value) ? ia(x, $.value) : "", $t = (Zt, Et, ee) => Zt === 0 && Wt ? '<span class="wbAsDay">' + Ot(Et) + '</span><span class="wbAsNow">' + Ot(ee) + "</span>" : Ot(Et);
      Ht += '<div class="wbColumns" role="list">' + H.map((Zt, Et) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Et + '" data-wb-focus="col-' + Et + '"><span class="wbDay">' + $t(Et, ve(x, Zt, Et), Ut.now) + "</span>" + _t(Zt.condition ?? "cloudy", 60, !1, "col" + Et) + '<span class="wbTemps"><span class="wbHi">' + $t(Et, ia(x, Zt.temperature), Wt) + '</span><span class="wbLo">' + Ot(ia(x, Zt.templow)) + "</span></span></button>").join("") + "</div>", Ht += '<div class="wbHalves" role="list">' + H.map((Zt, Et) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Et + '" data-wb-focus="half-' + Et + '">' + _t(Zt.condition ?? "cloudy", 40, !1, "half" + Et) + '<span class="wbText"><span class="wbName">' + Ot(Ke(x, Zt)) + '</span><span class="wbSub">' + Ot(qa(Ut.highLow, { high: ia(x, Zt.temperature), low: ia(x, Zt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return Ht + "</div>" + (Y ? $a(x, C, Y) : "") + "</div>";
  }
  const Nr = {
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
  }, we = {
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
  function ae(x) {
    const C = Date.now(), L = M("hourly").filter((Ct) => new Date(Ct.datetime).getTime() > C - Fe).slice(0, 13);
    if (L.length < 2) return "";
    const H = (Ct) => Ao(new Date(Ct.datetime), x), Y = (Ct) => Nr[Ct.condition] || "", $ = (Ct) => we[Ct.condition] || Ct.condition;
    let ct = Y(L[0]);
    if (!ct) return "";
    let vt = L[0], yt = 0;
    for (const Ct of L.slice(1))
      yt === 2 || $(Ct) === $(vt) || !Y(Ct) || (ct += (yt ? " and " : ", ") + Y(Ct) + " from " + H(Ct), vt = Ct, yt++);
    const Ht = Number(L[0].temperature), At = L.filter((Ct) => Ge(Ct.temperature));
    if (Ge(Ht) && At.length) {
      const Ct = At.reduce((It, Wt) => Number(Wt.temperature) < Number(It.temperature) ? Wt : It), Yt = At.reduce((It, Wt) => Number(Wt.temperature) > Number(It.temperature) ? Wt : It);
      Ht - Number(Ct.temperature) >= 3 ? ct += ", down to " + ia(x, Ct.temperature) + " by " + H(Ct) : Number(Yt.temperature) - Ht >= 3 && (ct += ", up to " + ia(x, Yt.temperature) + " by " + H(Yt));
    }
    return ct[0].toUpperCase() + ct.slice(1) + ".";
  }
  const Qt = (x) => {
    const C = ae(x);
    return C ? '<div class="wbSummary"><p class="wbSummaryText">' + Ot(C) + "</p></div>" : "";
  };
  function Ki(x) {
    const [C, L] = Kl[E == null ? void 0 : E()] || Kl.day, H = Date.now(), Y = M("hourly").filter(($) => {
      const ct = new Date($.datetime), vt = ct.getHours();
      return ct.getTime() > H - Fe / 2 && vt >= C && vt < L && Ge($.temperature);
    }).slice(0, 4);
    return Y.length ? '<div class="wbNextHours" role="list">' + Y.map(($, ct) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Ot(Ao(new Date($.datetime), x)) + "</span>" + _t($.condition ?? "cloudy", 40, $.is_daytime === !1, "hr" + ct) + '<span class="wbHourTemp">' + Ot(ia(x, $.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function li(x) {
    const C = x.getTime(), L = Date.now() - Fe;
    return M("hourly").filter((H) => {
      const Y = new Date(H.datetime).getTime();
      return Y >= C && Y < C + Eo && Y > L;
    });
  }
  function $i(x) {
    if (!x.length) return ["temperature"];
    const C = ["temperature"];
    return x.some((L) => L.precipitation != null || L.precipitation_probability != null) && C.push("precipitation"), x.some((L) => L.humidity != null) && C.push("humidity"), C;
  }
  function $a(x, C, L) {
    const H = xs(new Date(L.datetime)), Y = li(H), $ = $i(Y), ct = $.includes(S.dayMode) ? S.dayMode : "temperature", vt = (yt) => yt === "humidity" ? Ut.humidity : Ut.modes[yt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + _t(L.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ot(Ke(x, L)) + '</span><span class="wbSub">' + Ot(qa(Ut.highLow, { high: ia(x, L.temperature), low: ia(x, L.templow) })) + '</span></div><button class="wbBack" title="' + Ot(Ut.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ws(ka.back) + "</button></div>" + ($.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + $.map((yt) => '<button aria-pressed="' + (yt === ct) + '" data-wb="day-mode" data-mode="' + yt + '" data-wb-focus="day-mode-' + yt + '">' + Ot(vt(yt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(he(x, C, H, Y, ct)) + "</div></div>";
  }
  function he(x, C, L, H, Y) {
    var Qi;
    const $ = L.getTime(), ct = Date.now(), vt = vs(L, /* @__PURE__ */ new Date()), yt = (ue) => (ue - $) / no, Ht = (ue) => Ao(new Date(ue), x), At = (ue) => new Date(ue.datetime).getTime(), Ct = [0, 3, 6, 9, 12, 15, 18, 21].map((ue) => ({ t: ue * 60, label: Ht($ + ue * Fe), minor: ue % 6 !== 0 })), { rise: Yt, set: It } = Pd(x, L), Wt = [], $t = [];
    Yt && (Wt.push({ t: yt(Yt.getTime()), label: Ht(Yt.getTime()), rise: !0 }), $t.push([0, yt(Yt.getTime())])), It && (Wt.push({ t: yt(It.getTime()), label: Ht(It.getTime()), rise: !1 }), $t.push([yt(It.getTime()), sl]));
    const Zt = ld(x);
    !Yt && !It && Zt && ic(new Date($ + Eo / 2), Zt.lat, Zt.lon) < 0 && $t.push([0, sl]);
    const Et = vt ? yt(ct) : void 0, ee = { hours: Ct, sun: Wt, night: $t };
    if (!H.length && !vt) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ut.noHourly };
    if (Y === "precipitation") {
      const ue = H.some((Da) => Da.precipitation_probability != null), xn = H.map((Da) => ({ t: yt(At(Da)), v: Number((ue ? Da.precipitation_probability : Da.precipitation) ?? 0) })), Bn = Dr(x, _(x, "hourly"), "precipitation"), Rn = Math.max(0, ...xn.map((Da) => Da.v)), uo = ue ? 100 : Fc(0, Math.max(Rn, 1), [0.5, 1, 2, 5, 10]).max, Ir = (Da) => ue ? ha(Da, x.locale) + "%" : ha(Da, x.locale, { maximumFractionDigits: 1 }) + " " + Bn, yn = xn.find((Da) => Da.v === Rn);
      return {
        ...ee,
        kind: "bars",
        points: xn,
        min: 0,
        max: uo,
        ticks: [0, uo / 2, uo],
        format: Ir,
        now: Et !== void 0 ? { t: Et, v: 0 } : void 0,
        peak: yn && Rn > 0 ? { t: yn.t + 30, v: yn.v, label: Ir(yn.v) } : void 0,
        note: Rn > 0 ? void 0 : Ut.noRain
      };
    }
    const re = Y === "humidity" ? "humidity" : "temperature", Ie = H.filter((ue) => ue[re] != null && (!vt || At(ue) >= ct)).map((ue) => ({ t: yt(At(ue)), v: Number(ue[re]) }));
    let Bt, Ne = [];
    if (Et !== void 0) {
      const ue = mn(x, C, re);
      ue && Ge(ue.value) && (Bt = { t: Et, v: Number(ue.value) }, Ie.unshift(Bt)), Ne = (((Qi = at.todayHistory) == null ? void 0 : Qi.day) === L.toDateString() ? at.todayHistory[re] : []).filter((Bn) => Bn.time <= ct).map((Bn) => ({ t: Math.max(0, yt(Bn.time)), v: Bn.value })), Bt && Ne.length && Ne.push(Bt);
    }
    const Oe = [...Ne, ...Ie];
    if (!Oe.length) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ut.noHourly };
    const pn = Oe.map((ue) => ue.v), sa = Fc(Math.min(...pn), Math.max(...pn), re === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    re === "humidity" && (sa.min = Math.max(0, sa.min), sa.max = Math.min(100, sa.max), sa.ticks = sa.ticks.filter((ue) => ue >= 0 && ue <= 100));
    const Dn = re === "humidity" ? (ue) => ha(ue, x.locale) + "%" : (ue) => ia(x, ue), Po = re === "temperature" ? Oe.reduce((ue, xn) => xn.v > ue.v ? xn : ue) : void 0;
    return { ...ee, kind: "line", points: Ie, past: Ne, ...sa, format: Dn, now: Bt, peak: Po ? { ...Po, label: Dn(Po.v) } : void 0 };
  }
  function ra(x) {
    const C = ["temperature"];
    return x.some((L) => L.precipitation_probability != null || L.precipitation != null) && C.push("precipitation"), x.some((L) => L.wind_speed != null) && C.push("wind"), C;
  }
  function Ma(x, C, L = Cc) {
    var $, ct;
    const H = M("daily"), Y = [];
    for (let vt = 0; vt < L; vt++) for (const yt of [!1, !0]) {
      const Ht = x.getTime() + (vt * 24 + (yt ? 12 : 0)) * Fe, At = Ht + 12 * Fe, Ct = {};
      C.forEach((It) => {
        const Wt = new Date(It.datetime).getTime();
        It.condition && Wt >= Ht && Wt < At && (Ct[It.condition] = (Ct[It.condition] ?? 0) + (of.has(It.condition) ? 2 : 1));
      });
      let Yt = ($ = Object.entries(Ct).sort((It, Wt) => Wt[1] - It[1])[0]) == null ? void 0 : $[0];
      if (!Yt) {
        const It = new Date(Ht).toDateString();
        Yt = ((ct = H.find((Wt) => new Date(Wt.datetime).toDateString() === It)) == null ? void 0 : ct.condition) ?? "cloudy";
      }
      Y.push({ cond: yt && Yt === "sunny" ? "clear-night" : Yt, night: yt });
    }
    return Y;
  }
  function di(x, C, L) {
    const H = _(x, "hourly"), Y = C.precipitation_probability != null ? ha(C.precipitation_probability, x.locale) + "%" : "", $ = C.precipitation ? ha(C.precipitation, x.locale) + " " + Dr(x, H, "precipitation") : "";
    switch (L) {
      case "precipitation":
        return Y ? [Y, $] : [$ || "–", ""];
      case "wind":
        return C.wind_speed != null ? [ha(Math.round(C.wind_speed), x.locale), Dr(x, H, "wind_speed")] : ["–", ""];
      default:
        return [ia(x, C.temperature), (C.precipitation_probability ?? 0) >= 20 ? Y : ""];
    }
  }
  function Xi(x, C, L) {
    const [H, Y] = Kl[E == null ? void 0 : E()] || Kl.day, $ = [];
    for (let ct = 0; ct < 4 && $.length < 3; ct++) {
      const vt = /* @__PURE__ */ new Date();
      vt.setHours(0, 0, 0, 0), vt.setDate(vt.getDate() + ct);
      const yt = new Date(vt);
      yt.setHours(Y, 0, 0, 0), vt.setHours(H, 0, 0, 0), !(yt.getTime() <= L || !C.some((Ht) => {
        const At = new Date(Ht.datetime).getTime();
        return At >= vt.getTime() && At <= yt.getTime();
      })) && $.push({ a: vt.getTime(), b: yt.getTime(), label: Ke(x, { datetime: vt.toISOString() }) });
    }
    return $;
  }
  function Kt(x, C, L, H, Y, $) {
    const ct = (L.b - C.a) / Fe, vt = (Et) => ((Et - C.a) / Fe).toFixed(3), yt = 80, Ht = 32, At = [];
    for (const Et = new Date(C.a - Eo); Et.getTime() < L.b + Eo; Et.setDate(Et.getDate() + 1)) {
      const { rise: ee, set: re } = Pd(x, new Date(Et));
      ee && re && At.push({ rise: ee.getTime(), set: re.getTime() });
    }
    const Ct = (Et, ee) => yt - (yt - Ht) * Math.sin(Math.PI * (ee - Et.rise) / (Et.set - Et.rise)), Yt = (Et) => !At.some((ee) => Et >= ee.rise && Et <= ee.set);
    let It = "", Wt = "", $t = "";
    At.forEach((Et, ee) => {
      const re = [];
      for (let Bt = Et.rise; Bt <= Et.set; Bt += 15 * no) re.push(vt(Bt) + "," + Ct(Et, Bt).toFixed(2));
      re.push(vt(Et.set) + "," + yt), It += '<polyline class="wbLineArc" points="' + re.join(" ") + '"/>';
      const Ie = At[ee + 1];
      Ie && (It += '<rect class="wbLineNight" x="' + vt(Et.set) + '" y="0" width="' + ((Ie.rise - Et.set) / Fe).toFixed(3) + '" height="100"/>'), [[Et.rise, "↑"], [Et.set, "↓"]].forEach(([Bt, Ne]) => {
        Bt < C.a || Bt > L.b || (Wt += '<line class="wbLineEdge" x1="' + vt(Bt) + '" x2="' + vt(Bt) + '" y1="0" y2="100"/>', $t += '<span class="wbLineTime" style="left:' + $(Bt) + '">' + Ne + " " + Ot(Ao(new Date(Bt), x)) + "</span>");
      });
    });
    const Zt = At.find((Et) => Y >= Et.rise && Y <= Et.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + ct + ' 100" preserveAspectRatio="none" aria-hidden="true">' + It + Wt + '<line class="wbLineHorizon" x1="0" x2="' + ct + '" y1="' + yt + '" y2="' + yt + '"/></svg>' + $t + (Zt ? '<span class="wbLineNow" style="left:' + $(Y) + ";top:" + Ct(Zt, Y) + '%">' + Rd("sunny", !1) + "</span>" : "") + H.filter((Et) => Et.entry && !Et.now).map((Et) => '<span class="wbLineGlyph' + Et.edge + '" style="left:' + $(Et.t) + '">' + Rd(Et.entry.condition ?? "cloudy", Yt(Et.t)) + "</span>").join("");
  }
  function Rt(x, C) {
    delete wt.hourly;
    const L = S.hourlyView === "bars" ? "bars" : "strip", H = '<div class="wbHeader"><h2 class="wbTitle">' + Ot(L === "bars" ? Ut.nextDays : Ut.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ot(Ut.showAs) + '">' + ["strip", "bars"].map((Bt) => '<button aria-pressed="' + (Bt === L) + '" data-wb="hourly-view" data-view="' + Bt + '" data-wb-focus="hourly-view-' + Bt + '">' + Ot(Ut.views[Bt]) + "</button>").join("") + "</div></div>";
    if (L === "bars") return _e(x, C, H);
    const Y = M("hourly"), $ = Math.floor(Date.now() / no) * no, ct = Y.filter((Bt) => new Date(Bt.datetime).getTime() > $ - Fe);
    if (!ct.length) return "";
    const vt = ra(ct), yt = vt.includes(S.hourlyMode) ? S.hourlyMode : "temperature", Ht = Xi(x, Y, $);
    if (!Ht.length) return "";
    const At = Ht[0], Ct = Ht[Ht.length - 1], Yt = (At.b - At.a) / Fe, It = (Bt) => "calc(var(--wb-u) * " + ((Bt - At.a) / Fe).toFixed(3) + ")", Wt = new Date(At.a);
    Wt.setHours(6, 0, 0, 0), Wt.getTime() > At.a && Wt.setDate(Wt.getDate() - 1);
    const $t = Math.ceil((Ct.b - Wt.getTime()) / Eo);
    p !== "line" && (wt.hourly = { segs: Ma(Wt, Y, $t), seed: Wt.getDate(), columns: $t });
    const Zt = (Bt) => Bt === At.a ? " wbFirst" : Bt === Ct.b ? " wbLast" : "", Et = [];
    for (let Bt = At.a; Bt < Ct.b; ) {
      const Ne = new Date(Bt);
      Ne.setHours(24, 0, 0, 0);
      const Oe = Math.min(Ne.getTime(), Ct.b);
      Et.push({ a: Bt, b: Oe, label: Ke(x, { datetime: new Date(Bt).toISOString() }), page: Ht.find((pn) => pn.a >= Bt && pn.a < Oe) || Ht.find((pn) => pn.a < Oe && pn.b > Bt) }), Bt = Oe;
    }
    const ee = $ > At.a && $ < Ct.b ? Math.floor(($ - At.a) / (2 * Fe)) * 2 : 0, re = [];
    for (let Bt = At.a; Bt <= Ct.b; Bt += Fe) {
      const Ne = new Date(Bt), Oe = Zt(Bt);
      !Oe && Ne.getHours() % tf || !Oe && (Math.abs(At.a - Bt) < 2 * Fe || Math.abs(Ct.b - Bt) < 2 * Fe) || $ >= At.a && Math.abs(Bt - $) < 1.5 * Fe && !Oe || re.push({ t: Bt, edge: Oe, label: Ao(Ne, x), entry: Bt >= $ - Fe ? Y.find((pn) => new Date(pn.datetime).getTime() === Bt) : void 0 });
    }
    $ > At.a && $ < At.b && re.push({ t: $, edge: $ - At.a < Fe ? " wbFirst" : At.b - $ < Fe ? " wbLast" : "", label: Ut.now, entry: ct[0], now: !0 });
    const Ie = (Bt, Ne) => '<span class="wbMark' + Bt.edge + (Bt.now ? " wbNowMark" : "") + '" style="left:' + It(Bt.t) + '">' + Ne + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + H + (vt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + vt.map((Bt) => '<button aria-pressed="' + (Bt === yt) + '" data-wb="hourly-mode" data-mode="' + Bt + '" data-wb-focus="hourly-mode-' + Bt + '">' + Ot(Ut.modes[Bt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ot(Ut.nextHours) + '" data-span="' + Yt + '" data-start="' + ee + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Yt + ");width:calc(var(--wb-u) * " + (Ct.b - At.a) / Fe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ct.b - At.a) / (2 * Fe)) + 1)].map((Bt, Ne) => '<i class="wbSnap" style="left:' + It(At.a + Ne * 2 * Fe) + '"></i>').join("") + '<div class="wbDays">' + Et.map((Bt, Ne) => {
      var Oe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Bt.b - Bt.a) / Fe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Ne === 0 ? ee : ((((Oe = Bt.page) == null ? void 0 : Oe.a) ?? Bt.a) - At.a) / Fe) + '" data-wb-focus="hours-day-' + Ne + '">' + Ot(Bt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + re.map((Bt) => Ie(Bt, Ot(Bt.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + Kt(x, At, Ct, re, $, It) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + It(Wt.getTime()) + ";width:calc(var(--wb-u) * " + $t * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + ($ > At.a ? '<i class="wbPast" style="width:' + It(Math.min($, Ct.b)) + '"></i><i class="wbNowLine" style="left:' + It($) + '"></i>' : "") + Et.slice(1).map((Bt) => '<i class="wbMidnight" style="left:' + It(Bt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + re.map((Bt) => {
      if (!Bt.entry) return "";
      const [Ne, Oe] = di(x, Bt.entry, yt);
      return Ie(Bt, '<span class="wbPrimaryV">' + Ot(Ne) + '</span><span class="wbSecondary">' + Ot(Oe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Gt(x) {
    const C = ef, L = C.findIndex(([yt]) => yt >= x);
    if (L <= 0) return "rgb(" + C[L < 0 ? C.length - 1 : 0][1].join(",") + ")";
    const [H, Y] = C[L - 1], [$, ct] = C[L], vt = (x - H) / ($ - H);
    return "rgb(" + Y.map((yt, Ht) => Math.round(yt + (ct[Ht] - yt) * vt)).join(",") + ")";
  }
  function _e(x, C, L) {
    var It;
    const H = M("daily").filter((Wt) => Ge(Wt.templow) && Ge(Wt.temperature)).slice(0, 7);
    if (!H.length) return "";
    const Y = Math.min(...H.map((Wt) => Number(Wt.templow))), $ = Math.max(...H.map((Wt) => Number(Wt.temperature))), ct = Math.max(1, $ - Y), vt = (Wt) => Math.max(0, Math.min(100, (Wt - Y) / ct * 100)).toFixed(2), yt = /F/.test(Dr(x, _(x, "daily"), "temperature")), Ht = (Wt) => yt ? (Wt - 32) / 1.8 : Wt, At = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Wt) => Gt(Ht(Y + Wt * ct)) + " " + Wt * 100 + "%").join(",") + ")", Ct = (It = mn(x, C, "temperature")) == null ? void 0 : It.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ra(M("hourly").filter((Wt) => new Date(Wt.datetime).getTime() > Date.now() - Fe)).length > 1 ? " wbTabbed" : "") + '">' + L + '<div class="wbDayBars" role="list">' + H.map((Wt, $t) => {
      const Zt = Ke(x, Wt), Et = vs(new Date(Wt.datetime), /* @__PURE__ */ new Date()), ee = Number(Wt.templow), re = Number(Wt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ot(qa(Ut.rangeRow, { day: Zt, low: ia(x, ee), high: ia(x, re) })) + '"><span class="wbRangeDay">' + Ot(Zt) + "</span>" + _t(Wt.condition, 40, !1, "r" + $t) + '<span class="wbRangeLo">' + Ot(ia(x, ee)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + At + ";clip-path:inset(0 " + (100 - vt(re)) + "% 0 " + vt(ee) + '% round 4px)"></i>' + (Et && Ge(Ct) ? '<i class="wbRangeNow" style="left:' + vt(Number(Ct)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ot(ia(x, re)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function Ta(x) {
    const C = Pt, { rise: L, set: H } = Pd(x, C), Y = L && H ? Math.round((H.getTime() - L.getTime()) / no) : 0, $ = Math.floor(Y / 60), ct = Y % 60, vt = L && H ? (C.getTime() - L.getTime()) / (H.getTime() - L.getTime()) : -1, yt = vt >= 0 && vt <= 1, Ht = Math.PI * (1 - Math.min(1, Math.max(0, vt))), At = 100 + 74 * Math.cos(Ht), Ct = 100 - 74 * Math.sin(Ht), Yt = yt ? Math.sin(Math.PI * vt) : 0, It = yt ? rl("#2e0a0d", "#43180a", Yt) : "#0e0507", Wt = yt ? rl("#7a1d12", "#8f400f", Yt) : "#1c0709", $t = rl("#f60c08", "#ff8f00", Yt), Zt = rl("#fd9b07", "#ffd84a", Yt), Et = yt ? rl("#fd9b07", "#ffd84a", Yt) : "#6b3a2a", ee = (Ie) => Ie ? Ao(Ie, x) : "–", re = L && H ? new Date((L.getTime() + H.getTime()) / 2) : null;
    return gn({
      icon: ka.sunny,
      name: Ut.sun,
      sub: Y ? qa(Ut.daylightShort, { hours: $, minutes: ct }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + It + ", " + Wt + ");--wb-sun-line:" + Et + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + k + 'sun-glow"><stop offset="0" stop-color="' + $t + '"></stop><stop offset="0.45" stop-color="' + $t + '"></stop><stop offset="1" stop-color="' + Zt + '"></stop></radialGradient><clipPath id="' + k + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (yt ? '<circle cx="' + At + '" cy="' + Ct + '" r="14" fill="url(#' + k + 'sun-glow)" clip-path="url(#' + k + 'above-horizon)"></circle>' : "") + (re ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Ot(ee(re)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Ot(ee(L)) + '</text><text class="wbSunTime" x="174" y="117">' + Ot(ee(H)) + "</text></svg></div>"
    });
  }
  function ro(x, C, L) {
    const H = (ct) => k + "moon-" + ct, Y = x > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + H("terminator") + ')" d="' + Yf(61, 61, 57.9, x) + '"' + (C ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", $ = (ct, vt, yt, Ht, At, Ct) => '<filter id="' + H(ct) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + vt + '" numOctaves="' + yt + '" seed="' + Ht + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Yt) => "<feFunc" + Yt + ' type="linear" slope="' + At + '" intercept="' + Ct + '"></feFunc' + Yt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + H("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + H("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + H("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + H("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + H("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + $("mottle", "0.045", 4, 3, 1.8, -0.4) + $("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + H("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + H("fill") + ')"></circle><g' + (L ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + H("soften") + ')">' + Xf.map(([ct, vt, yt, Ht, At, Ct]) => '<ellipse cx="' + ct + '" cy="' + vt + '" rx="' + yt + '" ry="' + Ht + '" fill-opacity="' + Ct + '" transform="rotate(' + At + " " + ct + " " + vt + ')"></ellipse>').join("") + "</g>" + Jf.map(([ct, vt, yt]) => '<circle class="wbCrater" cx="' + ct + '" cy="' + vt + '" r="' + yt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + H("glow") + ')">' + Qf.map(([ct, vt]) => '<line x1="54.4" y1="95" x2="' + ct + '" y2="' + vt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + H("glow") + ')">' + Oc.map(([ct, vt, yt]) => '<circle cx="' + ct + '" cy="' + vt + '" r="' + yt * 2 + '"></circle>').join("") + "</g>" + Oc.map(([ct, vt, yt]) => '<circle class="wbBrightCenter" cx="' + ct + '" cy="' + vt + '" r="' + yt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + H("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + H("grain") + ')"></rect>' + Y + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Vt(x) {
    const C = G, L = ld(x), H = (L == null ? void 0 : L.lat) ?? 0, Y = If(C), $ = Hc(x), ct = $ ? x.states[$] : void 0, vt = Rr(ct) && hf.includes(ct.state) ? ct.state : Hf(Y.phase), { rise: yt, set: Ht } = L ? Pf(C, L.lat, L.lon) : {}, At = Y.phase > 0.5 != H < 0, Ct = ha(Math.round(Y.fraction * 100), x.locale) + "%", Yt = yt ?? Ht, It = Yt ? Ao(Yt, x) : void 0;
    return gn({
      icon: ka.night,
      name: Ut.moon,
      sub: Ut.phases[vt],
      visual: '<div class="wbMoonBox">' + ro(Y.fraction, At, H < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (It ? Ot(qa(yt ? Ut.moonriseAt : Ut.moonsetAt, { time: It })) : "") + "</span><span>" + Ot(qa(Ut.lit, { illumination: Ct })) + "</span></div>"
    });
  }
  function oe(x, C) {
    var Wt;
    const L = mn(x, C, "wind_speed");
    if (!L || !Ge(L.value)) return "";
    const H = mn(x, C, "wind_gust_speed"), Y = mn(x, C, "wind_bearing"), $ = Y && Ge(Y.value) ? Number(Y.value) : void 0, ct = zf(Number(L.value), (Wt = L.stateObj.attributes) == null ? void 0 : Wt.wind_speed_unit), vt = nd(x, L.stateObj, "wind_speed", L.value), yt = $ !== void 0 ? Ut.cardinal[ff[(($ + 11.25) / 22.5 | 0) % 16]] : void 0, Ht = H ? qf(x, H.stateObj, "wind_gust_speed", H.value) : void 0, At = [yt ? qa(Ut.windFrom, { direction: yt }) : void 0, ct !== void 0 ? ct + " " + Ut.beaufort : void 0].filter(Boolean).join(" · ") || Ht, Ct = ($t, Zt) => {
      const Et = ($t - 90) * Math.PI / 180;
      return [100 + Zt * Math.cos(Et), 100 + Zt * Math.sin(Et)];
    }, Yt = Array.from({ length: 36 }, ($t, Zt) => Zt * 10).map(($t) => {
      const Zt = $t % 90 === 0, [Et, ee] = Ct($t, 97), [re, Ie] = Ct($t, Zt ? 83 : 89);
      return '<line class="wbTick' + (Zt ? " wbMajor" : "") + '" x1="' + Et + '" y1="' + ee + '" x2="' + re + '" y2="' + Ie + '"></line>';
    }).join(""), It = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([$t, Zt]) => {
      const [Et, ee] = Ct(Zt, 64);
      return '<text class="wbLetter' + ($t === "n" ? " wbNorth" : "") + '" x="' + Et + '" y="' + ee + '">' + Ot(Ut.cardinal[$t]) + "</text>";
    }).join("");
    return gn({ icon: ka.windy, name: Ut.wind, sub: At, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Yt + It + ($ !== void 0 ? '<path class="wbMarker" transform="rotate(' + $ + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ot(vt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ot(vt.unit) + "</text></svg>" });
  }
  function aa(x, C) {
    const L = mn(x, C, "uv_index");
    if (!L || !Ge(L.value)) return "";
    const H = Number(L.value), Y = Ut.uvLevel[jf(H)], $ = /* @__PURE__ */ new Date();
    $.setHours(23, 59, 59, 999);
    const ct = M("hourly").filter(($t) => $t.uv_index != null && new Date($t.datetime) > /* @__PURE__ */ new Date() && new Date($t.datetime) <= $).reduce(($t, Zt) => !$t || Zt.uv_index > $t.uv ? { uv: Zt.uv_index, time: new Date(Zt.datetime) } : $t, void 0), vt = 48, yt = 100, Ht = 130, At = ($t) => -vt + Math.min($t, 11) / 11 * 2 * vt, Ct = ($t, Zt) => {
      const Et = $t * Math.PI / 180;
      return [yt + Zt * Math.sin(Et), Ht - Zt * Math.cos(Et)];
    }, Yt = ($t, Zt, Et) => {
      const [ee, re] = Ct(At($t), Et), [Ie, Bt] = Ct(At(Zt), Et);
      return "M " + ee + " " + re + " A " + Et + " " + Et + " 0 0 1 " + Ie + " " + Bt;
    }, Wt = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, $l.low], [3, 6, $l.moderate], [6, 8, $l.high], [8, 11, $l.very_high]].map(([$t, Zt, Et]) => '<path class="wbVuZone" d="' + Yt($t, Zt, 96) + '" style="stroke:' + Et + '"></path>').join("") + Array.from({ length: 21 }, ($t, Zt) => ({ angle: -vt + Zt * (2 * vt / 20), major: Zt % 2 === 0 })).map(({ angle: $t, major: Zt }) => {
      const [Et, ee] = Ct($t, 102), [re, Ie] = Ct($t, Zt ? 114 : 108);
      return '<line class="wbVuTick' + (Zt ? " wbMajor" : "") + '" x1="' + Et + '" y1="' + ee + '" x2="' + re + '" y2="' + Ie + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + At(H) + 'deg"><line x1="' + yt + '" y1="' + Ht + '" x2="' + yt + '" y2="' + (Ht - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Ot(ha(Math.round(H), x.locale)) + "</text></svg>";
    return gn({
      icon: ka.sunnyAlert,
      name: Ut.metrics.uv_index,
      sub: ct && ct.uv > H ? qa(Ut.uvPeak, { level: Y, uv_index: ha(Math.round(ct.uv), x.locale), time: Ao(ct.time, x) }) : Y,
      visual: Wt
    });
  }
  function On(x) {
    const C = M("daily")[0], L = at.temperatureHistory;
    if (!C || new Date(C.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ge(C.temperature) || !L || L.dailyHighs.length < lf) return "";
    const H = Number(C.temperature), Y = L.dailyHighs.reduce((re, Ie) => re + Ie, 0) / L.dailyHighs.length, $ = Math.round(H - Y) || 0, ct = $ > 0 ? "above" : $ < 0 ? "below" : "same", vt = [...L.days, { date: /* @__PURE__ */ new Date(), high: H, today: !0 }], yt = 220, Ht = 158, At = 22, Ct = 20, Yt = vt.map((re) => re.high).concat(Y), It = Math.min(...Yt) - 3, Wt = Math.max(...Yt) + 1, $t = (re) => At + (1 - (re - It) / (Wt - It)) * (Ht - At - Ct), Zt = yt / vt.length, Et = Math.min(18, Zt * 0.6), ee = '<svg class="wbCompareBars" viewBox="0 0 ' + yt + " " + Ht + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + yt + '" y1="' + $t(Y) + '" y2="' + $t(Y) + '"></line>' + vt.map((re, Ie) => {
      const Bt = Ie * Zt + Zt / 2, Ne = $t(re.high), Oe = re.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Oe + '" x="' + (Bt - Et / 2) + '" y="' + Ne + '" width="' + Et + '" height="' + (Ht - Ct - Ne) + '" rx="5"></rect><text class="wbAvgValue' + Oe + '" x="' + Bt + '" y="' + (Ne - 6) + '">' + Ot(ia(x, re.high)) + '</text><text class="wbAvgDay' + Oe + '" x="' + Bt + '" y="' + (Ht - 4) + '">' + Ot(Cf(re.date, x)) + "</text>";
    }).join("") + "</svg>";
    return gn({
      icon: ka.chartLine,
      name: Ut.metrics.compared_to_average,
      double: !0,
      sub: qa(Ut.highsLastDays, { days: L.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + ($ > 0 ? "+" : "") + Ot(ia(x, $)) + '</div><div class="wbCompareWords">' + Ot(Ut.average[ct]) + '</div><div class="wbCompareTemps">' + Ot(qa(Ut.todayVsAverage, { today: ia(x, H), average: ia(x, Y) })) + "</div></div>" + ee + "</div>"
    });
  }
  function ja(x, C) {
    const L = mn(x, C, "humidity");
    if (!L || !Ge(L.value)) return "";
    const H = mn(x, C, "dew_point"), Y = Math.max(0, Math.min(100, Number(L.value)));
    return gn({
      icon: ka.waterPercent,
      name: Ut.metrics.humidity,
      sub: H && Ge(H.value) ? qa(Ut.dewPoint, { dew_point: ia(x, H.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Y + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Gi(ha(Math.round(Number(L.value)), x.locale), "%") + "</div>"
    });
  }
  function Qe(x, C) {
    var Ht, At;
    const L = mn(x, C, "pressure");
    if (!L || !Ge(L.value)) return "";
    const H = Number(L.value), Y = (Ht = L.stateObj.attributes) == null ? void 0 : Ht.pressure_unit, $ = Ic(H, Y), ct = ((At = at.pressureHistory) == null ? void 0 : At.entityId) === L.stateObj.entity_id ? Ic(at.pressureHistory.value, Y) : void 0;
    let vt;
    if ($ !== void 0 && ct !== void 0) {
      const Ct = $ - ct;
      vt = Ct >= Lc ? "rising" : Ct <= -Lc ? "falling" : "steady";
    }
    const yt = nd(x, L.stateObj, "pressure", Math.round(H));
    return gn({
      icon: ka.gauge,
      name: Ut.metrics.pressure,
      sub: vt ? Ut.pressure[vt] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Gi(yt.number) + '<span class="wbTapeUnit">' + Ot(yt.unit) + "</span></div>" + ($ !== void 0 ? ci(x, $) : "") + "</div>"
    });
  }
  function ci(x, C) {
    const Y = Math.floor(C) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, ($, ct) => Y + ct).map(($) => {
      const ct = 100 - ($ - C) * 9;
      if (ct < 22 || ct > 178) return "";
      const vt = $ % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ct - 100) / 100) + '"><line class="wbTapeTick" x1="' + (vt ? 2 : 8) + '" x2="26" y1="' + ct + '" y2="' + ct + '"></line>' + (vt ? '<text class="wbTapeLabel" x="33" y="' + ct + '">' + Ot(ha($, x.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ot(Ut.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ot(Ut.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ca(x) {
    var yt, Ht;
    const C = Id(x), L = C ? x.states[C] : void 0;
    if (!L || ((yt = at.rain) == null ? void 0 : yt.entityId) !== C || !Ge(at.rain.change)) return "";
    const H = ((Ht = L.attributes) == null ? void 0 : Ht.unit_of_measurement) ?? "", Y = _(x, "hourly"), $ = Date.now() + Eo, ct = M("hourly").filter((At) => At.precipitation != null && new Date(At.datetime).getTime() <= $), vt = ct.reduce((At, Ct) => At + Number(Ct.precipitation), 0);
    return gn({
      icon: ka.rainy,
      name: Ut.metrics.precipitation,
      sub: Y && ct.length ? qa(Ut.rainExpected, { amount: ha(vt, x.locale, { maximumFractionDigits: 1 }) + " " + Dr(x, Y, "precipitation") }) : Ut.rainLast24h,
      visual: Gi(ha(at.rain.change, x.locale, { maximumFractionDigits: 1 }), H) + (ct.length > 1 ? $f(ct.map((At) => ({ label: "", value: Number(At.precipitation) }))) : "")
    });
  }
  function so(x, C) {
    const L = mn(x, C, "visibility");
    if (!L || !Ge(L.value)) return "";
    const H = nd(x, L.stateObj, "visibility", L.value), Y = $u(Number(L.value), Dr(x, L.stateObj, "visibility"));
    return gn({
      icon: ka.eyeOutline,
      name: Ut.metrics.visibility,
      sub: Ut.visibilityLevel[Xu(Y)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Y + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ot(lo(x, Y)) + '</div><div class="wbSeaValue">' + Gi(H.number, H.unit) + "</div></div>"
    });
  }
  function lo(x, C) {
    var $;
    const L = Ku(($ = x.config) == null ? void 0 : $.country, C);
    if (L) return qa(Ut.visibilityLandmarks, { from: L.from, to: L.to });
    const H = C / pf * 60;
    if (H < 60) {
      const ct = H < 5 ? Math.max(1, Math.round(H)) : 5 * Math.round(H / 5);
      if (ct < 60) return qa(Ut.walkMinutes, { minutes: ha(ct, x.locale) });
    }
    const Y = Math.max(1, Math.round(H / 30) / 2);
    return Y < 8 ? qa(Ut.walkHours, { hours: ha(Y, x.locale) }) : Ut.walkDay;
  }
  function co(x) {
    at.categories === void 0 && Se(x);
    const C = Pa(x), L = (yt) => yt.map((Ht) => x.states[Ht]).filter(Rr), H = L(C.air), Y = L(C.pollen);
    if (!H.length && !Y.length) return "";
    const $ = [...H, ...Y], ct = (yt) => Y.includes(yt) ? ka.flower : ka.airFilter, vt = $.find((yt) => yt.entity_id === S.aq);
    return vt ? pa(x, vt, ct(vt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ot(Ut.airQuality) + '</h2></div><div class="wbAqTiles">' + $.map((yt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ot(yt.entity_id) + '"><span class="wbChip">' + ws(ct(yt)) + '</span><span class="wbText"><span class="wbName">' + Ot(il(x, yt)) + '</span><span class="wbSub">' + Ot(_r(x, yt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function pa(x, C, L) {
    var At, Ct, Yt;
    const H = ((At = C.attributes) == null ? void 0 : At.unit_of_measurement) ?? "", Y = ((Ct = C.attributes) == null ? void 0 : Ct.device_class) === "pm25" && H === Ec && Ge(C.state), $ = Number(C.state), ct = Y ? Pc($) : void 0, vt = ((Yt = at.aqHistory) == null ? void 0 : Yt.entityId) === C.entity_id ? at.aqHistory.points : void 0, yt = (It) => Math.min(100, Math.max(0, It / Xl * 100));
    let Ht;
    if (vt && vt.length > 1) Ht = Kf(vt, (It) => (ha(It, x.locale, { maximumFractionDigits: 1 }) + " " + H).trim());
    else if (ct) {
      let It = 0;
      const Wt = Mp.map(([$t, Zt]) => {
        const Et = yt(Math.min(Zt, Xl)), ee = mf[$t] + " " + It + "% " + Et + "%";
        return It = Et, ee;
      });
      Ht = '<div class="wbScale" role="meter" aria-label="' + Ot(Ut.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Xl + '" aria-valuenow="' + $ + '" style="background:linear-gradient(to right, ' + Wt.join(", ") + ')"><i style="left:' + yt($) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Xl + " " + Ec + "</span></div>";
    } else Ht = '<span class="wbGraphNote"><span>' + Ot(_r(x, C)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ws(L) + '</span><span class="wbText"><span class="wbName">' + Ot(il(x, C)) + '</span><span class="wbSub">' + Ot(_r(x, C)) + (ct ? " · " + Ot(Ut.aqLevel[ct]) : "") + '</span></span><button class="wbBack" title="' + Ot(Ut.back) + '" data-wb="aq-close">' + ws(ka.back) + '</button></div><div class="wbGraph">' + Ht + "</div></div></div>";
  }
  const An = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, pi = (x) => x <= 50 ? "Good" : x <= 100 ? "Moderate" : x <= 150 ? "Unhealthy for some" : x <= 200 ? "Unhealthy" : x <= 300 ? "Very unhealthy" : "Hazardous";
  function ui(x) {
    const C = /* @__PURE__ */ new Map();
    return Object.values(x.states || {}).filter((L) => {
      var H;
      return L.entity_id.startsWith("sensor.") && rd.includes(((H = L.attributes) == null ? void 0 : H.device_class) ?? "") && Rr(L) && ys(x, L.entity_id);
    }).sort((L, H) => L.entity_id.localeCompare(H.entity_id)).forEach((L) => {
      C.has(L.attributes.device_class) || C.set(L.attributes.device_class, L);
    }), rd.map((L) => C.get(L)).filter(Boolean);
  }
  const za = (x) => Object.values(x.states || {}).filter((C) => {
    var L, H;
    return C.entity_id.startsWith("sensor.") && Rr(C) && ys(x, C.entity_id) && (((H = (L = x.entities) == null ? void 0 : L[C.entity_id]) == null ? void 0 : H.translation_key) ?? C.entity_id).toLowerCase().includes("pollen");
  }), Ms = ["none", "very_low", "low", "moderate", "high", "very_high"], Wn = (x) => Ge(x.state) ? Number(x.state) : Ms.indexOf(String(x.state).toLowerCase().replace(/ /g, "_")), bn = (x) => {
    const C = String(x).replace(/_/g, " ");
    return C[0].toUpperCase() + C.slice(1);
  }, Do = (x) => x.length ? '<div class="wbBaseRows">' + x.map(([C, L]) => '<span class="wbBaseRow"><span>' + Ot(C) + "</span><span>" + Ot(L) + "</span></span>").join("") + "</div>" : "";
  function wn(x) {
    const C = ui(x), L = C[0];
    if (!L) return gn({ icon: ka.airFilter, name: Ut.airQuality, sub: Ut.noAir, visual: Gi("–", ""), cls: "wbBase" });
    const H = L.attributes.device_class, Y = Number(L.state), $ = Ge(L.state), ct = H === "aqi" && $ ? pi(Y) : H === "pm25" && $ ? An[Pc(Y)] : _r(x, L);
    return gn({
      icon: ka.airFilter,
      name: Ut.airQuality,
      sub: ct,
      cls: "wbBase",
      visual: Gi($ ? ha(Math.round(Y), x.locale) : String(L.state), H === "aqi" ? "AQI" : L.attributes.unit_of_measurement || "") + Do(C.slice(1, 3).map((vt) => [il(x, vt), _r(x, vt)]))
    });
  }
  function Ji(x) {
    const C = za(x).sort((Y, $) => Wn($) - Wn(Y));
    if (!C.length) return gn({ icon: ka.flower, name: Ut.pollen, sub: Ut.noPollen, visual: Gi("–", ""), cls: "wbBase" });
    const L = C[0], H = (Y) => Ge(Y.state) ? _r(x, Y) : bn(Y.state);
    return gn({
      icon: ka.flower,
      name: Ut.pollen,
      sub: il(x, L) + " · " + H(L),
      cls: "wbBase",
      visual: Gi(H(L), "") + Do(C.slice(1, 3).map((Y) => [il(x, Y), H(Y)]))
    });
  }
  function Ln(x) {
    const C = Date.now(), L = M("hourly").filter(($) => {
      const ct = new Date($.datetime).getTime();
      return ct > C - Fe && ct < C + 12 * Fe;
    }), H = L.find(($) => ($.precipitation_probability ?? 0) >= 50 || ($.precipitation ?? 0) >= 0.2), Y = H ? qa(Ut.rainFrom, { time: Ao(new Date(Math.max(C, new Date(H.datetime).getTime())), x) }) : L.length ? Ut.noRain12 : void 0;
    return gn({ icon: ka.radar, name: Ut.rainRadar, sub: Y, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Te = {
    current: ze,
    hourly: Rt,
    sun: Ta,
    moon: Vt,
    wind: oe,
    uv_index: aa,
    compared_to_average: On,
    humidity: ja,
    pressure: Qe,
    precipitation: ca,
    visibility: so,
    air_quality: co,
    aq_tile: wn,
    pollen_tile: Ji,
    radar_tile: Ln
  };
  function Aa(x) {
    var Ht, At, Ct;
    const C = d == null ? void 0 : d();
    if (!C || K) return;
    const L = io(C);
    ft(C, L), at.lastFetch || Jt();
    const H = Pa(C), Y = Hc(C), $ = Id(C), ct = [
      ...L.map((Yt) => C.states[Yt]),
      C.states["sun.sun"],
      Y && C.states[Y],
      $ && C.states[$],
      ...H.air.map((Yt) => C.states[Yt]),
      ...H.pollen.map((Yt) => C.states[Yt]),
      ...U.some((Yt) => pt.includes(Yt)) ? [...ui(C), ...za(C)] : [],
      C.locale,
      C.config,
      C.entities,
      Math.floor(Date.now() / no)
    ];
    if (!x && z && ct.length === z.length && ct.every((Yt, It) => Yt === z[It])) return;
    z = ct;
    const vt = N.getRootNode(), yt = vt.activeElement || document.activeElement;
    for (const Yt of U) {
      const It = ot[Yt];
      let Wt = "";
      try {
        Wt = Te[Yt](C, L) || "";
      } catch {
        Wt = "";
      }
      if (Wt === It.html) continue;
      const $t = yt && It.el.contains(yt) ? (Ht = yt.dataset) == null ? void 0 : Ht.wbFocus : void 0, Zt = It.el.querySelector(".wbStripScroll"), Et = Zt ? Zt.scrollLeft : null;
      It.html = Wt, It.el.hidden = !Wt, It.el.innerHTML = Wt;
      const ee = It.el.querySelector(".wbStripScroll");
      ee && Et != null ? ee.scrollTo({ left: Et }) : ee != null && ee.dataset.start && ee.scrollTo({ left: Number(ee.dataset.start) * ee.clientWidth / Number(ee.dataset.span) }), $t && !ht && ((At = It.el.querySelector('[data-wb-focus="' + $t + '"]')) == null || At.focus());
    }
    ht && ((Ct = N.querySelector('[data-wb-focus="' + ht + '"]')) == null || Ct.focus(), ht = null), Bo(performance.now());
  }
  function Ue() {
    rt || K || (rt = !0, queueMicrotask(() => {
      rt = !1, Aa(!0);
    }));
  }
  function fi() {
    const x = getComputedStyle(N), C = (ct) => x.getPropertyValue(ct).trim(), L = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ct, vt]) => {
      C(vt) && (L[ct] = C(vt));
    });
    const H = C("--color-text-primary") || "#f1f1f1", Y = C("--color-bg-card") || "#222222", $ = !!N.closest(".light");
    return { colors: { ...dn, ...L }, ink: $ ? H : Y, paper: $ ? Y : H };
  }
  const ma = (x, C) => {
    var L;
    x.width !== C.w && (x.width = C.w), x.height !== C.h && (x.height = C.h), (L = x.getContext("2d")) == null || L.putImageData(new ImageData(C.data, C.w, C.h), 0, 0);
  }, na = () => m && !kf();
  function La(x, C) {
    N.querySelectorAll("canvas[data-wb-strip]").forEach((L) => Ss(L, wt[L.dataset.wbStrip], x, C));
  }
  function Ss(x, C, L, H) {
    if (!C || !x.getClientRects().length) return;
    const Y = x.clientWidth, $ = x.clientHeight;
    if (!Y || !$) return;
    const ct = { width: Y, height: $, columns: C.columns || Cc, colors: H.colors, clock: L, ambient: na(), seed: C.seed, soft: 1.5 };
    if (p === "smooth") {
      const vt = Math.min(2, window.devicePixelRatio || 1), yt = Math.round(Y * vt), Ht = Math.round($ * vt);
      x.width !== yt && (x.width = yt), x.height !== Ht && (x.height = Ht);
      const At = x.getContext("2d");
      if (!At) return;
      At.setTransform(vt, 0, 0, vt, 0, 0), Du(At, C.segs, ct);
    } else ma(x, _u(C.segs, { ...ct, px: 2, oneBit: p === "onebit", ink: H.ink, paper: H.paper }));
  }
  function Bo(x) {
    if (K) return;
    const C = fi();
    if (p !== "smooth") {
      const L = na();
      N.querySelectorAll("canvas[data-wb-wx]").forEach((H) => {
        H.getClientRects().length && ma(H, pp(Kd(H.dataset.wbWx, C.colors), { size: Number(H.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: C.colors, ink: C.ink, paper: C.paper, clock: x, idle: L }));
      });
    }
    N.querySelectorAll("canvas[data-wb-sea]").forEach((L) => {
      const H = L.clientWidth, Y = L.clientHeight, $ = Number(L.dataset.wbSea), ct = H + "x" + Y + ":" + $ + ":" + C.colors.skyClearDay;
      !H || !Y || !($ > 0) || L.dataset.painted === ct || (L.dataset.painted = ct, ma(L, Uu(H, Y, $, C.colors)));
    }), La(x, C);
  }
  function hi(x) {
    if (O = 0, !(K || !na())) {
      if (!document.hidden)
        if (p === "smooth") La(x, fi());
        else {
          const C = Math.floor(x / 100);
          C !== ut && (ut = C, Bo(x));
        }
      O = requestAnimationFrame(hi);
    }
  }
  function En() {
    N.classList.toggle("wbMotion", na()), !O && !K && na() && (O = requestAnimationFrame(hi));
  }
  function Ea(x) {
    var L, H;
    const C = (H = (L = x.target).closest) == null ? void 0 : H.call(L, "[data-wb]");
    if (!(!C || !N.contains(C))) {
      switch (C.dataset.wb) {
        case "day": {
          S.openDay = Number(C.dataset.index), S.opener = C.dataset.wbFocus, ht = "back-day";
          const Y = xe()[S.openDay], $ = !at.todayHistory || at.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - at.todayHistory.fetched > Qu;
          Y && vs(new Date(Y.datetime), /* @__PURE__ */ new Date()) && $ && pe();
          break;
        }
        case "close-day":
          S.openDay = void 0, ht = S.opener, S.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          S.dayMode = C.dataset.mode;
          break;
        case "hourly-mode":
          S.hourlyMode = C.dataset.mode;
          break;
        case "hourly-view":
          S.hourlyView = C.dataset.view;
          try {
            localStorage.setItem(et, S.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Y = N.querySelector(".wbStripScroll");
          Y && Y.scrollTo({ left: Number(C.dataset.hours) * Y.clientWidth / Number(Y.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          S.aq = C.dataset.entity, ea(S.aq);
          break;
        case "aq-close":
          S.aq = void 0;
          break;
        default:
          return;
      }
      Aa(!0);
    }
  }
  function Ro(x) {
    var C, L;
    x.key === "Escape" && S.openDay !== void 0 && ((L = (C = x.target).closest) != null && L.call(C, '[data-wb-open="day"]')) && (S.openDay = void 0, ht = S.opener, S.opener = void 0, Aa(!0));
  }
  let _n = null;
  function $e(x) {
    var L, H;
    const C = (H = (L = x.target).closest) == null ? void 0 : H.call(L, ".wbStripScroll");
    !C || x.button !== 0 || (_n = { startX: x.pageX, left: C.scrollLeft, moved: !1 }, C.classList.add("wbHeld"), window.addEventListener("mousemove", Xa), window.addEventListener("mouseup", ye, { once: !0 }));
  }
  function Xa(x) {
    const C = N.querySelector(".wbStripScroll");
    if (!_n || !C) return;
    const L = x.pageX - _n.startX;
    !_n.moved && Math.abs(L) > 1 && (_n.moved = !0, C.classList.add("wbDragging")), C.scrollLeft = _n.left - L;
  }
  function ye() {
    _n = null, window.removeEventListener("mousemove", Xa);
    const x = N.querySelector(".wbStripScroll");
    if (!x) return;
    x.classList.remove("wbDragging", "wbHeld");
    const C = [...x.querySelectorAll(".wbSnap")];
    if (C.length) {
      const L = C.reduce((H, Y) => Math.abs(Y.offsetLeft - x.scrollLeft) < Math.abs(H.offsetLeft - x.scrollLeft) ? Y : H);
      x.scrollTo({ left: L.offsetLeft, behavior: "smooth" });
    }
  }
  N.addEventListener("click", Ea), N.addEventListener("keydown", Ro), N.addEventListener("mousedown", $e);
  const cn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Bo(performance.now())) : null;
  cn == null || cn.observe(N);
  const _a = (po = window.matchMedia) == null ? void 0 : po.call(window, "(prefers-reduced-motion: reduce)"), mi = () => {
    En(), Bo(performance.now());
  };
  (No = _a == null ? void 0 : _a.addEventListener) == null || No.call(_a, "change", mi);
  const Pr = [
    setInterval(() => {
      Pt = /* @__PURE__ */ new Date(), Aa(!0);
    }, df),
    setInterval(() => {
      G = /* @__PURE__ */ new Date(), Aa(!0);
    }, cf),
    setInterval(Jt, rf)
  ];
  return Aa(!0), En(), {
    update() {
      Aa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Aa(!0);
    },
    setStyle(x) {
      !x || x === p || (p = x, N.dataset.style = p, Aa(!0), En());
    },
    destroy() {
      var x;
      K = !0, Pr.forEach(clearInterval), O && cancelAnimationFrame(O), O = 0, cn == null || cn.disconnect(), (x = _a == null ? void 0 : _a.removeEventListener) == null || x.call(_a, "change", mi), ye(), N.removeEventListener("click", Ea), N.removeEventListener("keydown", Ro), N.removeEventListener("mousedown", $e), ["daily", "hourly"].forEach(A), N.remove();
    }
  };
}
const ll = "#E1E1E1", qc = "#F7F4F0", Hd = "#03a9f4", Ce = 14, Ee = 172;
let eh = 0;
const Xe = (n) => Math.round(n * 100) / 100, _o = (n, d, i) => Math.max(d, Math.min(i, n)), si = (n, d, i, p, m, b) => '<rect x="' + Xe(n) + '" y="' + Xe(d) + '" width="' + Xe(i) + '" height="' + Xe(p) + '" fill="' + m + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", Fd = (n) => n.map((d, i) => (i ? "L" : "M") + Xe(d[0]) + " " + Xe(d[1])).join("");
function Od(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const Ui = [
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
  let i = Ui[0], p = Ui[Ui.length - 1];
  for (let E = 0; E < Ui.length - 1; E++) if (d >= Ui[E][0] && d <= Ui[E + 1][0]) {
    i = Ui[E], p = Ui[E + 1];
    break;
  }
  const m = (d - i[0]) / (p[0] - i[0]), b = m * m * (3 - 2 * m), w = (E, k) => {
    const N = parseInt(E.slice(1), 16), xt = parseInt(k.slice(1), 16);
    return "#" + [16, 8, 0].map((pt) => Math.round((N >> pt & 255) + ((xt >> pt & 255) - (N >> pt & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(i[1][0], p[1][0]), bot: w(i[1][1], p[1][1]), warm: w(i[1][2], p[1][2]), cool: w(i[1][3], p[1][3]), op: i[1][4] + (p[1][4] - i[1][4]) * b, t: d };
}
function nh(n) {
  const d = parseInt(n.slice(1), 16), i = (d >> 16 & 255) / 255, p = (d >> 8 & 255) / 255, m = (d & 255) / 255, b = Math.max(i, p, m), w = Math.min(i, p, m);
  let E = 0, k = 0;
  const N = (b + w) / 2;
  if (b !== w) {
    const xt = b - w;
    k = N > 0.5 ? xt / (2 - b - w) : xt / (b + w), E = (b === i ? (p - m) / xt + (p < m ? 6 : 0) : b === p ? (m - i) / xt + 2 : (i - p) / xt + 4) / 6;
  }
  return [E * 360, k * 100, N * 100];
}
function Pp(n, d, i) {
  d = _o(d, 0, 100) / 100, i = _o(i, 0, 100) / 100;
  const p = (w) => (w + n / 30) % 12, m = d * Math.min(i, 1 - i), b = (w) => i - m * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [b(0), b(8), b(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Ip, Hp, Fp] = nh(ll), jc = Pp(Ip, Hp, Math.max(6, Fp - 14)), oh = Pp(Ip, Hp, Math.min(96, Fp + 16));
function ih(n, d, i, p, m) {
  const b = Ee / 2, w = Ee * 0.12, E = b - (b - w) * n, k = (ot) => ot ** 1.3, N = _o(i, -1.5, 1.5), xt = (ot) => -(Math.abs(N) * 4.6 * ot ** 1.5) * Math.sign(N), pt = n * 1.4, U = (ot, K) => {
    const z = Math.min(4.8, Math.abs(i) * 2.6) * (K ? 1 : -1) * Math.sign(i || 1), O = K ? ot + E : ot, ut = K ? ot : ot + E, rt = (Pt) => O + xt(Pt) + z * Math.sin(Pt * Math.PI * 1.2 + p) * k(Pt) * 1.4 + pt * Math.sin(Pt * Math.PI * 2 + p * 0.6) * k(Pt) * (K ? 1 : -1), ht = [[ut, Ce]];
    for (let Pt = 0; Pt <= 12; Pt++) ht.push([rt(Pt / 12), Ce + Ee * Pt / 12]);
    ht.push([ut, Ce + Ee]);
    let et = '<path d="' + Fd(ht) + 'Z" fill="' + ll + '"/>';
    if (m) return et;
    const tt = 1.35 + ((K ? i > 0 : i < 0) ? 0.35 : 0), S = (Pt) => {
      const G = Pt / 7, wt = K ? 1 - G : G, j = (1 - wt) ** 1.3, zt = ot + E * G;
      return Array.from({ length: 13 }, (M, _) => {
        const A = _ / 12;
        return [zt + xt(A) * j + z * tt * Math.sin(A * Math.PI * 1.2 + p - wt * 3.2) * k(A) * 1.4 * j + pt * 1.6 * Math.sin(A * Math.PI * 2 + p * 0.6 - wt * 2.5) * k(A) * n * (0.4 + 0.6 * j), Ce + Ee * A];
      });
    }, at = [1, 2, 3, 4, 5, 6].map(S);
    for (let Pt = 0; Pt < 6; Pt += 2) et += '<path d="' + Fd(at[Pt]) + Fd(at[Pt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return et;
  }, J = b - (b - w) * d;
  return { body: U(Ce, !0) + U(Ce + Ee - E, !1), rails: [{ x: Ce + J - 4, y: Ce, w: 4, h: Ee }, { x: Ce + Ee - J, y: Ce, w: 4, h: Ee }], head: 6.4 };
}
function rh(n, d, i) {
  const p = Ee * (1 - n);
  let m = "";
  if (p > 1 && (m += si(Ce, Ce, Ee, p, ll), !i))
    for (let b = 1; b < 7; b += 2) m += si(Ce + Ee * b / 7, Ce, Ee / 7, p, "#fff");
  return { body: m, rails: [{ x: Ce, y: Ce + Ee * (1 - d) - 7, w: Ee, h: 11 }], head: 10.4 };
}
function sh(n, d, i, p) {
  const m = 9 - 7 * (i / 100), b = Ce + Ee * (1 - n), w = Math.ceil(Ee / 10) + 1, E = Ce + m / 2, k = (Ce + Ee - m / 2 - E) / (w - 1), N = 0.8, xt = 0.6, pt = Array.from({ length: w }, (ot, K) => Math.max(E + K * xt, Math.min(E + K * k, b - m / 2 - (w - 1 - K) * xt))), U = pt.slice(0, -1).map((ot, K) => _o((pt[K + 1] - ot - xt) / (k - xt), 0, 1));
  U.push(U[w - 2]);
  let J = "";
  return pt.forEach((ot, K) => {
    const z = N + (m - N) * U[K], O = Math.max(0.5, z / 2), ut = Math.max(0.4, z * 0.114);
    J += si(Ce, ot - O, Ee, Math.max(1, z), ll), !p && z > 2.2 && (J += si(Ce, ot + O - ut, Ee, ut, jc) + si(Ce, ot - O, Ee, ut * 0.55, oh, 0.75));
  }), p || [0.22, 0.78].forEach((ot) => {
    J += si(Ce + Ee * ot - 0.7, Ce, 1.4, Math.max(0, pt[w - 1] + 1 - Ce), jc, 0.85);
  }), { body: J, rails: [{ x: Ce, y: Ce + Ee * (1 - d) - 8, w: Ee, h: 8 }], head: 8.8 };
}
const zc = (n, d, i, p, m, b, w) => n === "curtain" ? ih(d, i, m, b, w) : n === "venetian" ? sh(d, i, p, w) : rh(d, i, w);
function lh(n, d) {
  let i = "", p = "";
  return d.forEach((m) => {
    const b = m.w > m.h, w = _o(b ? Ce + Ee / 2 : m.x + m.w / 2, 17, 183), E = _o(b ? m.y + m.h / 2 : Ce + Ee / 2, 17, 183);
    i += b ? si(Ce, _o(m.y + m.h / 2, Ce, Ce + Ee) - 1, Ee, 2, Hd) : si(_o(m.x + m.w / 2, Ce, Ce + Ee) - 1, Ce, 2, Ee, Hd);
    const k = b ? "M" + Xe(w - 4) + " " + Xe(E - 3) + "l4 -3l4 3M" + Xe(w - 4) + " " + Xe(E + 3) + "l4 3l4 -3" : "M" + Xe(w - 3) + " " + Xe(E - 4) + "l-3 4l3 4M" + Xe(w + 3) + " " + Xe(E - 4) + "l3 4l-3 4";
    p += '<circle cx="' + Xe(w) + '" cy="' + Xe(E) + '" r="11" fill="' + Hd + '" filter="url(#' + n + 's)"/><path d="' + k + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: p };
}
function dh(n, d) {
  const i = /* @__PURE__ */ new Date(), p = ah(i.getHours() + i.getMinutes() / 60), m = 42 + 18 * Math.sin(p.t * 0.5), b = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = zc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), E = d.ghostAlpha > 4e-3 && d.ghost != null ? zc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", k = d.grip > 4e-3 ? lh(n, w.rails) : null, N = (xt) => si(Ce, Ce, Ee, Ee, xt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Xe(m) + '%" cy="' + Xe(b) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + Xe(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Xe(100 - m * 0.8) + '%" cy="' + Xe(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + Xe(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + qc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (E ? '<g opacity="' + Xe(d.ghostAlpha) + '">' + E + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + ll + '" filter="url(#' + n + 's)"/></g>' + (k ? '<g clip-path="url(#' + n + 'c)" opacity="' + Xe(d.grip) + '">' + k.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + qc + '" stroke-width="3"/>' + (k ? '<g opacity="' + Xe(d.grip) + '">' + k.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: d }) {
  var et;
  const i = "cv" + ++eh, p = document.createElement("div");
  p.className = "tfCoverArt";
  const m = (et = window.matchMedia) == null ? void 0 : et.call(window, "(pointer: coarse)").matches;
  let b = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, k = !1, N = !1, xt = null, pt = 0, U = 0;
  const J = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", ot = () => xt || k || N || b.moving || b.target != null ? 1 : m ? performance.now() < U ? 1 : 0.4 : 0, K = () => {
    p.innerHTML = dh(i, { kind: b.kind, pos: w.pos, bar: b.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function z(tt) {
    E = 0;
    const S = w.last ? Math.min(0.064, (tt - w.last) / 1e3) : 1 / 60, at = S * 60;
    w.last = tt;
    const Pt = b.pos - w.pos, G = w.pos;
    w.pos += Math.sign(Pt) * Math.min(Math.abs(Pt), Math.max(10.5, Math.abs(Pt) * 1.4) * S), Math.abs(b.pos - w.pos) < 0.03 && (w.pos = b.pos), w.vel = w.vel * 0.86 + (w.pos - G) / at * 0.14, Math.abs(w.vel) < 0.015 && w.pos === b.pos && (w.vel = 0), (w.pos !== G || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * at);
    const wt = b.tilt - w.tilt;
    w.tilt += Math.sign(wt) * Math.min(Math.abs(wt), Math.max(60, Math.abs(wt) * 4) * S);
    const j = ot();
    w.grip += (j - w.grip) * Math.min(1, S * (j > w.grip ? 11 : 3.5)), Math.abs(j - w.grip) < 0.01 && (w.grip = j);
    const zt = b.target != null && Math.abs(b.target - w.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (w.gpos = b.target), w.ghost += (zt - w.ghost) * Math.min(1, S * (zt > w.ghost ? 16 : 3)), Math.abs(zt - w.ghost) < 4e-3 && (w.ghost = zt), K(), w.pos !== b.pos || w.vel || w.tilt !== b.tilt || w.grip !== j || w.ghost !== zt ? E = requestAnimationFrame(z) : w.last = 0;
  }
  const O = () => {
    b && !E && (E = requestAnimationFrame(z));
  }, ut = setInterval(() => {
    b && !E && K();
  }, 60 * 1e3), rt = (tt) => {
    const S = p.getBoundingClientRect();
    return J() === "x" ? (tt.clientX - S.left) / S.width : (tt.clientY - S.top) / S.height;
  };
  p.addEventListener("pointerdown", (tt) => {
    var Pt;
    if (!(b != null && b.canSet) || tt.button > 0) return;
    tt.preventDefault(), (Pt = p.setPointerCapture) == null || Pt.call(p, tt.pointerId);
    const S = b.target ?? b.pos, at = p.getBoundingClientRect();
    xt = { p0: rt(tt), from: S, x0: tt.clientX, value: null, side: null }, b.kind === "curtain" && S > 0 && (xt.side = (tt.clientX - at.left) / at.width < 0.5 ? "L" : "R"), O();
  }), p.addEventListener("pointermove", (tt) => {
    if (!xt) return;
    let S;
    if (b.kind === "curtain") {
      if (!xt.side) {
        const Pt = tt.clientX - xt.x0;
        if (Math.abs(Pt) < 4) return;
        xt.side = Pt < 0 ? "L" : "R";
      }
      const at = (Ee / 2 - Ee * 0.12) / 200;
      S = xt.from + (xt.side === "L" ? -1 : 1) * ((rt(tt) - xt.p0) / at) * 100;
    } else S = xt.from - (rt(tt) - xt.p0) / (Ee / 200) * 100;
    xt.value = _o(S, 0, 100), n(xt.value);
  });
  const ht = () => {
    if (!xt) return;
    const tt = xt.value;
    xt = null, tt != null && d(Math.round(tt)), O();
  };
  return p.addEventListener("pointerup", ht), p.addEventListener("pointercancel", ht), p.addEventListener("lostpointercapture", ht), p.addEventListener("pointerenter", () => {
    k = !0, O();
  }), p.addEventListener("pointerleave", () => {
    k = !1, O();
  }), p.addEventListener("focus", () => {
    N = p.matches(":focus-visible"), O();
  }), p.addEventListener("blur", () => {
    N = !1, O();
  }), p.addEventListener("keydown", (tt) => {
    if (!(b != null && b.canSet)) return;
    const S = Math.round(b.target ?? b.pos), at = tt.shiftKey ? 10 : 1, Pt = { ArrowUp: S + at, ArrowRight: S + at, ArrowDown: S - at, ArrowLeft: S - at, PageUp: S + 25, PageDown: S - 25, Home: 0, End: 100 }[tt.key];
    if (Pt == null) return;
    tt.preventDefault();
    const G = _o(Pt, 0, 100);
    n(G), clearTimeout(pt), pt = setTimeout(() => d(G), 500);
  }), {
    el: p,
    update(tt) {
      const S = !b;
      b = tt, S && (w.pos = b.pos, w.tilt = b.tilt, U = performance.now() + 1500, m && setTimeout(O, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), b.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), p.setAttribute("aria-valuetext", b.text), O();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(ut), clearTimeout(pt), p.remove();
    }
  };
}
const Vc = "move-assistant-density", Yi = {
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
}, Q = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Wd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Gc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Jl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Uc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Yc = 1, uh = 4, Zc = 16, Kc = 32, fh = 128, hh = 256, $c = 16384, mh = 1, gh = 2, Xc = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Jc = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, qd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Qc = "move_assistant_house", tp = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], ep = "move-assistant-house-look", yh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kh = [["popup", "Popup"], ["sheet", "Sheet"]], Mh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ch = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], jd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Ah = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', np = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', op = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Op = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", ip = Op(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Lh = Op(["M20 6L9 17L4 12"]), Lo = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + Q(n || "") + '"' + (d ? ' data-icon-name="' + Q(d) + '"' : "") + "></span>", Eh = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', _h = 1, Dh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], rp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, zd = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ql = ["door", "window", "garage_door", "opening"], sp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, td = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Bh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rh = 10, Nh = 20, Ph = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ih = ["living room", "bedroom", "office"];
function Hh(n, { config: d, getHass: i }) {
  var qi, tl, el;
  const p = (t) => n.getElementById(t), m = p("app"), w = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Yi.get(Vc) === "1", k = {};
  const N = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, xt = (t, a, o) => N({ type: "call_service", domain: t, service: a, service_data: o }), pt = n.querySelector("#appearancePane .toggleList");
  pt && !p("densityToggle") && (pt.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    E = !E, Yi.set(Vc, E ? "1" : "0"), tt();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Kt(t).device_class === "power" && /^(W|kW)$/.test(Kt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], J = (t, a, o, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([c, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + h + "</button>").join("") + "</div>", ot = (t, a, o, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + o + "</div>";
  function K() {
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (B, D) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + D + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([B, D]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + D + "</button>").join("") + "</div>" + // Appearance in groups, each named above its card (Matt, 8 Nov)
    o("look", yh.map(([B, D]) => '<div class="tfSetGroup"><div class="sectionLabel">' + D + '</div><div class="toggleList" data-look-group="' + B + '"></div></div>').join("")) + o("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + U.map(([B, D, I]) => ot(D, I, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + D + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(qd).map(([B, D]) => ot(D.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + D.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = (B) => t.querySelector('[data-look-group="' + B + '"]'), c = (B) => B == null ? void 0 : B.closest(".toggleRow");
    [c(t.querySelector(".themeBtn")), c(p("densityToggle"))].forEach((B) => B && l("look").appendChild(B)), [c(p("moreInfoChoice")), c(p("namesChoice"))].forEach((B) => B && l("house").appendChild(B)), l("house").insertAdjacentHTML("beforeend", ot("Lights", "How lights show on the house page.", J("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ot("Pad", "What the Dual Axis Controller’s pad sets on its tile.", J("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(p("hoursChoice")), c(p("wxStyleChoice"))].forEach((B) => B && l("weather").appendChild(B));
    const h = p("housePane"), u = h.querySelector(".houseTabs"), g = u.querySelector(".rubberIndicator");
    new ResizeObserver(() => O()).observe(h);
    const y = (B) => {
      const D = u.querySelector(".tab.active");
      g.style.transition = B ? "" : "none", g.style.left = D.offsetLeft + "px", g.style.width = D.offsetWidth + "px", B && (g.style.transform = "scaleX(1.08)", setTimeout(() => g.style.transform = "", 180));
    };
    new ResizeObserver(() => y(!1)).observe(u), h.addEventListener("click", (B) => {
      const D = B.target.closest("[data-house-tab]");
      if (D) {
        u.querySelectorAll(".tab").forEach((Mt) => Mt.classList.toggle("active", Mt === D)), h.querySelectorAll(".houseTab").forEach((Mt) => Mt.classList.toggle("active", Mt.dataset.housePane === D.dataset.houseTab)), D.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), y(!0), O();
        return;
      }
      const I = B.target.closest("[data-light-fav]");
      if (I) {
        Wr(I.dataset.lightFav);
        return;
      }
      const X = B.target.closest("[data-light-pick]");
      if (X) {
        const [Mt, nt] = X.dataset.lightPick.split("|"), bt = { ..._t[Mt] };
        X.dataset.v ? bt[nt] = X.dataset.v : delete bt[nt], _t[Mt] = bt, xe(), [...sa.keys()].filter((W) => W.endsWith(":" + nt)).forEach((W) => sa.delete(W)), oa();
        return;
      }
      const Z = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Z || Z.disabled)) {
        if (Z.dataset.lights && (_t.lights = Z.dataset.lights), Z.dataset.dacPad && (_t.dacPad = Z.dataset.dacPad), (Z.dataset.lights || Z.dataset.dacPad) && (xe(), sa.clear()), Z.dataset.sumToggle) {
          const Mt = Z.dataset.sumToggle, nt = new Set(q.hiddenSums || []);
          nt.has(Mt) ? nt.delete(Mt) : nt.add(Mt), q = { ...q, hiddenSums: [...nt] }, Pa();
        }
        oa();
      }
    }), h.addEventListener("change", (B) => {
      const D = B.target;
      D.dataset.source && (q = { ...q, sources: { ...q.sources || {}, [D.dataset.source]: D.value || void 0 } }, Pa());
      const I = D.dataset.lightStyle || D.dataset.lightPad;
      if (I) {
        const X = D.dataset.lightStyle ? "lightStyles" : "lightPads", Z = { ..._t[X] };
        D.value ? Z[I] = D.value : delete Z[I], _t[X] = Z, xe(), [...sa.keys()].filter((Mt) => Mt.endsWith(":" + I)).forEach((Mt) => sa.delete(Mt));
      }
      oa();
    });
  }
  function z() {
    var I, X;
    Po() && pn();
    const t = p("housePane");
    if (!t) return;
    const a = !!customElements.get(Bt);
    t.querySelectorAll("[data-lights]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.lights === _t.lights))), p("lightsRow").querySelector(".status").textContent = a || !Po() ? "How lights show on the house page." : Oe === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.dacPad === _t.dacPad))), p("dacPadRow").hidden = !Po();
    for (const Z of t.querySelectorAll("[data-source]")) {
      if (Z === n.activeElement) continue;
      const [Mt] = U.find(([bt]) => bt === Z.dataset.source), nt = Object.keys(k).filter(U.find(([bt]) => bt === Mt)[3]).sort((bt, W) => Rt(bt).localeCompare(Rt(W)));
      Z.dataset.sig !== nt.join(",") && (Z.innerHTML = '<option value="">Automatic</option>' + nt.map((bt) => '<option value="' + Q(bt) + '">' + Q(Rt(bt)) + "</option>").join(""), Z.dataset.sig = nt.join(",")), Z.value = nt.includes((I = q.sources) == null ? void 0 : I[Mt]) ? q.sources[Mt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((Z) => {
      const Mt = !(q.hiddenSums || []).includes(Z.dataset.sumToggle);
      Z.classList.toggle("on", Mt), Z.setAttribute("aria-checked", String(Mt));
    });
    const o = p("lightRows"), l = p("lightCards"), c = n.activeElement, h = o != null && o.contains(c) || l != null && l.contains(c) ? c : null;
    if (!o || h != null && h.matches("select")) {
      O();
      return;
    }
    const u = new Set(Va()), g = (Z, Mt, nt, bt) => '<option value="' + Z + '"' + (Z === nt ? " selected" : "") + ">" + Mt + "</option>", y = Object.keys(k).filter((Z) => Z.startsWith("light.")).sort((Z, Mt) => !Se.get(Z) - !Se.get(Mt) || (Se.get(Z) || "").localeCompare(Se.get(Mt) || "") || Rt(Z).localeCompare(Rt(Mt))).map((Z) => {
      const Mt = _t.lightStyles[Z] || "", nt = _t.lightPads[Z] || "", bt = u.has(Z), W = Q(Rt(Z));
      return "<tr><td><strong>" + W + "</strong></td><td>" + Q(Se.get(Z) || "—") + "</td><td>" + Q(Ue(Z)) + '</td><td class="metaSwitchCol"><button class="switch' + (bt ? " on" : "") + '" type="button" role="switch" aria-checked="' + bt + '" data-light-fav="' + Q(Z) + '" aria-label="' + W + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + Q(Z) + '" aria-label="' + W + ' tile">' + g("", "Default", Mt) + g("tile", "HomeCore tile", Mt) + g("dac", "Dual Axis Controller", Mt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + Q(Z) + '" aria-label="' + W + ' pad"' + (Dn(Z) ? "" : " disabled") + ">" + g("", "Default", nt) + g("temperature", "Temperature", nt) + g("colour", "Colour", nt) + "</select></td></tr>";
    }).join(""), B = (Z, Mt, nt, bt, W) => '<div class="themeChoice" role="group" aria-label="' + nt + '">' + bt.map(([kt, V]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (kt === W) + '" data-light-pick="' + Z + "|" + Q(Mt) + '" data-v="' + kt + '">' + V + "</button>").join("") + "</div>", D = Object.keys(k).filter((Z) => Z.startsWith("light.")).sort((Z, Mt) => !Se.get(Z) - !Se.get(Mt) || (Se.get(Z) || "").localeCompare(Se.get(Mt) || "") || Rt(Z).localeCompare(Rt(Mt))).map((Z) => {
      const Mt = u.has(Z), nt = Q(Rt(Z)), bt = [Se.get(Z), Ue(Z)].filter(Boolean).map(Q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + nt + '</strong><div class="status">' + bt + "</div></div></div>" + ot("Favourite", "", '<button class="switch' + (Mt ? " on" : "") + '" type="button" role="switch" aria-checked="' + Mt + '" data-light-fav="' + Q(Z) + '" aria-label="' + nt + ' is a favourite"></button>') + ot("Tile", "", B("lightStyles", Z, nt + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], _t.lightStyles[Z] || "")) + (Dn(Z) ? ot("Pad", "", B("lightPads", Z, nt + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], _t.lightPads[Z] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== y && (o.innerHTML = y, o.dataset.html = y), l.dataset.html !== D && (l.innerHTML = D, l.dataset.html = D), h != null && h.dataset.lightFav && ((X = (l.contains(h) ? l : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || X.focus({ preventScroll: !0 })), O();
  }
  function O() {
    var a, o, l;
    const t = p("housePane");
    if (t)
      for (const c of t.querySelectorAll(".themeChoice")) {
        const h = [...c.querySelectorAll("button")];
        let u = (a = c.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!u) {
          u = document.createElement("select"), u.className = "settingsSelect tfChoiceList", u.setAttribute("aria-label", c.getAttribute("aria-label") || ((l = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : l.textContent) || ""), u.addEventListener("change", () => {
            var I;
            return (I = h[Number(u.value)]) == null ? void 0 : I.click();
          }), c.after(u);
          const D = () => {
            u.innerHTML = h.map((X, Z) => '<option value="' + Z + '"' + (X.disabled ? " disabled" : "") + ">" + Q(X.textContent) + "</option>").join("");
            const I = h.findIndex((X) => X.getAttribute("aria-pressed") === "true" || X.classList.contains("active"));
            I >= 0 && (u.value = String(I));
          };
          new MutationObserver(D).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), D();
        }
        const g = (D) => {
          c.hidden !== !D && (c.hidden = !D), u.hidden !== D && (u.hidden = D);
        };
        if (h.length > 3) {
          g(!1);
          continue;
        }
        if (!c.getClientRects().length && !u.getClientRects().length) {
          u.dataset.fit || g(!0);
          continue;
        }
        const y = c.hidden;
        c.hidden = !1;
        const B = h.every((D) => D.scrollWidth <= D.clientWidth + 1);
        c.hidden = y, g(B), u.dataset.fit = "1";
      }
  }
  const ut = document.createElement("div");
  ut.className = "densityBadge", ut.setAttribute("aria-live", "polite"), ut.hidden = !0, m.appendChild(ut);
  let rt = 0;
  function ht() {
    if (!E) return;
    const t = p("homeView"), a = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      a(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, c = o.filter((h) => {
      const u = h.getBoundingClientRect();
      return u.height > 0 && u.top >= 0 && u.bottom <= l + 0.5;
    }).length;
    ut.hidden = !t.classList.contains("active"), ut.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const et = () => {
    E && requestAnimationFrame(ht);
  };
  function tt() {
    var t;
    m.classList.toggle("showDensity", E), (t = p("densityToggle")) == null || t.classList.toggle("on", E), ut.hidden = !E, clearInterval(rt), E && (rt = setInterval(ht, 1e3), ht());
  }
  window.addEventListener("scroll", et, { capture: !0, passive: !0 }), window.addEventListener("resize", et, { passive: !0 });
  const S = n.querySelector("#homeView .grid");
  let at = null, Pt = null, G = null, wt = null;
  const j = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), _ = 6;
  let A = null;
  const P = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map();
  let q = { favourites: null }, gt = {}, St = {}, Jt = [], pe = null;
  const ea = (() => {
    try {
      return JSON.parse(Yi.get(tp)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), io = 0;
  function Pa() {
    clearTimeout(io), io = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: Qc, value: q })).catch(() => {
    }), 400);
  }
  const _t = (() => {
    let t = {};
    try {
      t = JSON.parse(Yi.get(ep)) || {};
    } catch {
    }
    const a = (o, l) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => l.includes(c)));
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
  })(), xe = () => Yi.set(ep, JSON.stringify(_t)), Ke = () => {
    m.dataset.more = _t.more, m.dataset.names = _t.names, Tr();
  };
  w && pt && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (_t.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (_t.more = a.dataset.moreStyle, xe(), Ke(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (_t.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (_t.names = a.dataset.namesStyle, _t.namesPicked = !0, xe(), Ke(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (_t.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (_t.hoursWindow = a.dataset.hoursWindow, xe(), Qt == null || Qt.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ch.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (_t.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (_t.wxStyle = a.dataset.wxStyle, xe(), Qt == null || Qt.setStyle(_t.wxStyle), Ma == null || Ma.forEach((o) => o.setStyle(_t.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  })), K();
  let ve = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ze = /* @__PURE__ */ new Map();
  let Nr = "";
  const we = w ? mu({ onChange: () => Sa() }) : null;
  w && m.classList.add("house");
  const ae = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Qt = null, Ki = null, li = !1;
  function $i(t) {
    const a = go();
    if (m.classList.toggle("houseBento", !!a), Qt && (Ki !== a || t == null) && (Qt.destroy(), Qt = null), !a || t == null) {
      ae.remove();
      return;
    }
    ae.isConnected || S.append(ae), ae.style.order = t, !Qt && !li && (Qt = Wc(ae, { getHass: i, entityId: a, style: _t.wxStyle, hoursWindow: () => _t.hoursWindow }), Ki = a);
  }
  const $a = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], he = ["aq", "pollen", "radar"], ra = Object.fromEntries($a.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ma = null, di = null;
  function Xi(t) {
    const a = go();
    Ma && di !== a && (Ma.forEach((o) => o.destroy()), Ma = null), Object.values(ra).forEach((o) => a ? !o.isConnected && S.append(o) : o.remove()), a && !Ma && !li && (Ma = $a.map(([o, l]) => Wc(ra[o], { getHass: i, entityId: a, style: _t.wxStyle, cards: l, onOpen: o === "wx" ? () => os("weather") : void 0 })), di = a);
  }
  const Kt = (t) => {
    var a;
    return ((a = k[t]) == null ? void 0 : a.attributes) || {};
  }, Rt = (t) => Kt(t).friendly_name || t, Gt = (t, a) => Vi(t) || (Number(Kt(t).supported_features) & a) === a, _e = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ta = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), ro = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Vt = (t) => Kt(t).supported_color_modes || [], oe = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, aa = (t, a) => [5, 3, 1].map((o) => {
    const l = (o + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), On = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), ja = (t) => 0.2126 * On(t[0]) + 0.7152 * On(t[1]) + 0.0722 * On(t[2]), Qe = (t, a) => {
    const o = ja(t), l = ja(a);
    return (Math.max(o, l) + 0.05) / (Math.min(o, l) + 0.05);
  }, ci = 0.55, ca = (t) => {
    const a = Kt(t);
    return (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? aa(...a.hs_color) : a.color_temp_kelvin ? oe(a.color_temp_kelvin) : [255, 170, 0])).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, so = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function lo(t) {
    var l;
    const a = t.split(".")[0], o = (l = k[t]) == null ? void 0 : l.state;
    return !o || o === "unavailable" || o === "unknown" ? null : a === "light" ? o === "on" ? ca(t) : null : a === "climate" ? so[o] || null : a === "cover" ? o !== "closed" ? [146, 107, 199] : null : a === "lock" ? o !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : a === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : a === "fan" ? o === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function co(t, a, o = !1) {
    const [l, c, h] = t.map((Mt) => Mt / 255), u = Math.max(l, c, h), g = Math.min(l, c, h), y = u - g, B = y ? (u === l ? (c - h) / y + (c < h ? 6 : 0) : u === c ? (h - l) / y + 2 : (l - c) / y + 4) * 60 : 0, D = (u + g) / 2, I = y ? y / (1 - Math.abs(2 * D - 1)) : 0, X = y < 0.1 ? Math.min(I, 0.25) : 1, Z = (Mt) => {
      const nt = (W) => (W + B / 30) % 12, bt = X * Math.min(Mt, 1 - Mt);
      return [0, 8, 4].map((W) => Math.round(255 * (Mt - bt * Math.max(-1, Math.min(nt(W) - 3, 9 - nt(W), 1)))));
    };
    for (let Mt = 0.5; o ? Mt < 0.96 : Mt > 0.04; Mt += o ? 0.01 : -0.01) {
      const nt = Z(Mt);
      if (Qe(nt, a) >= 3) return "rgb(" + nt.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const pa = (t) => {
    const a = [1, 3, 5].map((o) => parseInt(t.slice(o, o + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + co(a, [58, 58, 58], !0) + ";--sum-l:" + co(a, [230, 230, 230]);
  }, An = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, pi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + An.d[t] + ";--g" + t + "-l:" + An.l[t]).join(";"), ui = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", za = (t) => {
    const a = t.map((o) => Math.round(o + (255 - o) * ci));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + co(t, a);
  }, Ms = (t) => za(ca(t)), Wn = (t) => {
    const a = lo(t);
    return a ? ' data-light style="' + za(a) + '"' : "";
  }, bn = (t) => {
    const a = Vt(t);
    return a.length ? a.some((o) => o !== "onoff") : Kt(t).brightness != null;
  }, Do = (t) => [Kt(t).min_color_temp_kelvin || 2e3, Kt(t).max_color_temp_kelvin || 6500], wn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Ji(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const o = Math.round(a / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(o / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const c = Math.round(l / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const Ln = (t) => {
    var a;
    return Kt(t).current_position ?? (((a = k[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Te = (t) => {
    var a;
    return De("pos", t, ((a = P.get(t)) == null ? void 0 : a.pos) ?? Ln(t));
  }, Aa = (t) => {
    var a;
    return De("tilt", t, ((a = P.get(t)) == null ? void 0 : a.tilt) ?? Kt(t).current_tilt_position);
  };
  function Ue(t) {
    var u;
    const a = k[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const o = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const g = o.color_temp_kelvin;
      return (bn(t) ? ro(a) + "%" : "On") + (o.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : zd.includes(o.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : _e(o.hvac_action || a.state)) + " · " + Ta(o.current_temperature) + " °C now";
    if (l === "cover") {
      const g = Ln(t), y = o.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? _e(a.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (y > 0 && y < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : _e(o.action || "on") + " · " + o.current_humidity + "% now";
    if (l === "vacuum") return _e(a.state) + (a.state === "cleaning" && ((u = o.rooms) != null && u.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : _e(a.state);
    if (l === "alarm_control_panel") return rp[a.state] || _e(a.state);
    if (l === "lock" || l === "valve") return _e(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : _e(o.problem);
    if (l === "binary_sensor")
      return o.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Ql.includes(o.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + wn(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !Vi(t))
      try {
        return c.formatEntityState(a);
      } catch {
      }
    const h = Number(a.state);
    if (a.state !== "" && Number.isFinite(h)) {
      const g = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, y = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: g }) + y + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return _e(a.state);
  }
  const fi = (t) => t >= 1e3 ? Ta(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function ma(t) {
    var o, l;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((c) => {
      var g;
      const h = k[c.dataset.iconFor], u = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !u) {
        let y = c.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (c.textContent = "", y = document.createElement("ha-state-icon"), c.appendChild(y)), y.hass = a, y.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let y = c.firstElementChild;
        (!y || y.localName !== "ha-icon") && (c.textContent = "", y = document.createElement("ha-icon"), c.appendChild(y)), y.icon = u || ((g = h == null ? void 0 : h.attributes) == null ? void 0 : g.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || Rt(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(La), (l = t.classList) != null && l.contains("tfIcon") && La(t), Ro();
  }
  const na = /* @__PURE__ */ new Map();
  function La(t) {
    var h, u, g;
    const a = (((h = t.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (t.dataset.iconFor || ((u = t.querySelector("[data-icon-for]")) == null ? void 0 : u.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), l = { backgroundColor: o.backgroundColor, color: o.color }, c = na.get(a);
    na.set(a, l), !(!c || c.backgroundColor === l.backgroundColor && c.color === l.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([c, l], { duration: 180, easing: "ease" });
  }
  const Ss = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Bo = (t) => {
    const a = [t];
    for (; a.length; ) {
      const o = a.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && a.push(...o.shadowRoot.children), a.push(...o.children);
    }
    return null;
  };
  function hi(t) {
    var Z, Mt, nt;
    const a = t.localName === "svg" ? t : Bo(t), o = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !a;
    const l = (Z = t.closest(".tfIcon")) == null ? void 0 : Z.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const c = l + "|" + o.map((bt) => bt.getAttribute("d") || bt.localName).join("|");
    if (t.dataset.fitted === c) return !0;
    let h = 1 / 0, u = 1 / 0, g = -1 / 0, y = -1 / 0;
    for (const bt of o) {
      const W = bt.getBBox(), kt = getComputedStyle(bt), V = kt.stroke !== "none" ? (parseFloat(kt.strokeWidth) || 0) / 2 : 0;
      !W.width && !W.height || (h = Math.min(h, W.x - V), u = Math.min(u, W.y - V), g = Math.max(g, W.x + W.width + V), y = Math.max(y, W.y + W.height + V));
    }
    if (!(g > h)) return !1;
    const B = (nt = (Mt = a.viewBox) == null ? void 0 : Mt.baseVal) != null && nt.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, D = l - 14, I = D * B.width / Math.max(g - h, y - u), X = I / B.width;
    return t.localName === "svg" ? (t.style.width = I + "px", t.style.height = I + "px") : t.style.setProperty("--mdc-icon-size", I + "px"), a.style.translate = ((B.x + B.width / 2 - (h + g) / 2) * X).toFixed(2) + "px " + ((B.y + B.height / 2 - (u + y) / 2) * X).toFixed(2) + "px", t.dataset.fitted = c, !0;
  }
  let En = 0;
  function Ea(t = 0) {
    clearTimeout(En), [...n.querySelectorAll(Ss)].filter((o) => !hi(o)).length && t < 5 && (En = setTimeout(() => Ea(t + 1), 300));
  }
  function Ro() {
    clearTimeout(En), En = setTimeout(() => Ea(), 60);
  }
  const _n = (t) => {
    var a, o, l;
    return t.startsWith("light.") && k[t] && !Kt(t).icon && !((l = (o = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : o[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, $e = (t, a, o) => (a = a || _n(t), ' data-icon-for="' + Q(t) + '"' + (a ? ' data-icon-name="' + Q(a) + '"' : "") + (o ? ' data-letter="' + Q(o) + '"' : "")), Xa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Kt(t).rang ? "mdi:doorbell" : "", ye = (t, a, o, l) => Q([t, a, o, l ? JSON.stringify(l) : ""].join("|")), cn = (t) => Q(JSON.stringify(t));
  function _a(t, a) {
    var c, h;
    const o = Q(Rt(a) + ", " + Ue(a));
    return '<div class="activityRow' + (Number.isFinite(Number((c = k[a]) == null ? void 0 : c.state)) && ((h = k[a]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + Q(t + "|" + a) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + $e(a, Xa(a)) + '></div><div><div class="activityRowName">' + Q(Rt(a)) + '</div><div class="activityRowMeta">' + Q(Ue(a)) + "</div></div></div>";
  }
  const mi = (t, a, o) => '<div class="activityRow" aria-label="' + Q(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + $e("", o, t) + '></div><div><div class="activityRowName">' + Q(t) + '</div><div class="activityRowMeta">' + Q(a) + "</div></div></div>";
  function Pr(t) {
    var o;
    const a = ((o = k[t]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ye("switch", "toggle", t) + '" aria-label="Turn ' + Q(Rt(t)) + (a ? " off" : " on") + '"' + $e(t) + '></button><button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(Rt(t) + ", " + Ue(t) + ". More info") + '"><span class="activityRowName">' + Q(Rt(t)) + '</span><span class="activityRowMeta">' + Q(Ue(t)) + "</span></button></div>";
  }
  const po = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.name) ?? Rt(t);
  }, No = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.text) ?? Ue(t);
  };
  function x(t) {
    var o;
    const a = (o = zt.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? $e("", a, po(t)) : $e(t, Xa(t))) + '></div><div><div class="activityRowName">' + Q(po(t)) + '</div><div class="activityRowMeta">' + Q(No(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + Q(po(t)) + '’s last 24 hours">' + Wd + '</button></div><svg class="tfGraph" data-graph="' + Q(t) + '" role="img" aria-label="' + Q(po(t)) + ', last 24 hours"></svg></div>';
  }
  function C(t, a, o, l, c = "", h = null, u = "") {
    const g = at && at.key === t;
    return '<section class="card tfCard' + (u ? " " + u : "") + (g ? " open" : "") + '" data-tf data-k="' + Q(t) + '" style="order:' + a + (g && at.h ? ";min-height:" + at.h + "px" : "") + '" aria-label="' + Q(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + Q(h) + '" aria-label="' + Q(o + (k[h] ? ", " + Ue(h) : "") + ". More info") + '">' + Q(o) + "</button>" : '<div class="activityTitle">' + Q(o) + "</div>") + "</div>" + (g ? x(at.id) : '<div class="activityRows">' + l.join("") + "</div>" + c) + "</section>";
  }
  function L(t, a) {
    const o = "readings:" + t.id, l = t.readings.map((c) => _a(o, c));
    return t.power != null && l.push(mi("Power now", fi(t.power), "mdi:flash")), C(o, a, "Readings", l.concat(t.plugs.map(Pr)));
  }
  function H(t, a) {
    var g;
    const o = "energy:" + t.id, [l, c] = [t.solar.find((y) => y.endsWith("_power")), t.solar.find((y) => y.endsWith("_today"))], h = [l, c].filter(Boolean).map((y) => _a(o, y)), u = Number(((g = k[l]) == null ? void 0 : g.state) || 0) * 1e3;
    return ve.grid && (h.push(_a(o, ve.grid)), h.push(mi("House use", fi(u + Number(k[ve.grid].state)), "mdi:home-lightning-bolt"))), C(o, a, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Y = (t, a) => C("plant:" + t.id, a, Rt(t.id), t.readings.map((o) => _a("plant:" + t.id, o)), "", t.id);
  function $(t, a, o, l, c, h, u = null) {
    const g = o == null ? null : Math.max(0, Math.min(1, o)), y = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + Q(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + y + '"' + (c ? ' aria-valuetext="' + Q(c) + '"' : "") + ' data-drag="' + Q(t + "|" + a) + '">' + (u != null ? '<span class="was" aria-hidden="true" style="left:' + u + '%"></span>' : "") + (h ? g == null ? "" : '<b style="left:' + y + '%"></b>' : '<i style="width:' + y + '%"></i>') + "</div>";
  }
  const ct = "move-assistant-house-last-bright", vt = (() => {
    try {
      return JSON.parse(Yi.get(ct)) || {};
    } catch {
      return {};
    }
  })();
  let yt = 0;
  const Ht = (t, a) => {
    !a || vt[t] === a || (vt[t] = a, clearTimeout(yt), yt = setTimeout(() => Yi.set(ct, JSON.stringify(vt)), 500));
  }, At = (t, a, o, l) => '<div class="tfStep" role="group" aria-label="' + Q(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + Q(t.toLowerCase()) + '">' + Uc.down + "</button><output>" + Q(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + Q(t.toLowerCase()) + '">' + Uc.up + "</button></div>", Ct = (t, a, o) => '<div class="' + t + '" role="group" aria-label="' + Q(a) + '">' + o.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + Q(l.aria) + '"' : "") + ">" + (l.html || Q(l.label)) + "</button>").join("") + "</div>", Yt = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), It = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Wt = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + Q(Rt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + Q(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + Yt(a, o) + '"></i><b' + (a >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + It(a) + '">' + Math.round(a) + "%</output></div>";
  function $t(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, c) => {
      l.firstElementChild.setAttribute("style", Yt(a, c)), l.lastElementChild.classList.toggle("lit", a >= (c + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", It(a)), o.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const Zt = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + Q(Rt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + Q(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", Et = (t, a, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + Q(Rt(t)) + '">' + [
    Gt(t, mh) && ["open", "Open", "open_cover", a >= 100 && !o],
    Gt(t, vh) && ["stop", "Stop", "stop_cover", !1],
    Gt(t, gh) && ["close", "Close", "close_cover", a <= 0 && !o]
  ].filter(Boolean).map(([l, c, h, u]) => '<button type="button" data-act="' + ye("cover", h, t) + '" aria-label="' + c + '"' + (u ? " disabled" : "") + ">" + bh[l] + "</button>").join("") + "</div>", ee = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + Q(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + Q(a.art) + '&quot;)"' : $e(t, a.icon)) + "></button>", re = (t) => '<button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(Rt(t) + ", " + Ue(t) + ". More info") + '"><span class="activityRowName">' + Q(Rt(t)) + '</span><span class="activityRowMeta">' + Q(Ue(t)) + "</span></button>";
  function Ie(t, a = !1, o = null) {
    const l = tr(t), c = t.startsWith("light.") && Qi(t) && !(o && Ei(t) < 3), h = o || (a && t.startsWith("light.") ? ["bright"] : null), u = c ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : o ? "dash:" : "tile:") + Q(t) + '"></div>'] : l.sections.map((g, y) => g && (!h || h.includes((l.parts || [])[y])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + Q(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + Wn(t) + '><div class="tfActionHead">' + ee(t, l) + re(t) + "</div>" + u.join("") + "</div>";
  }
  const Bt = "dual-controller-v3", Ne = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Oe = null;
  async function pn() {
    if (Oe || customElements.get(Bt)) return;
    Oe = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(Bt), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(Bt)) return;
    const o = Object.assign(document.createElement("script"), { src: Ne });
    o.onerror = () => {
      Oe = "failed", z();
    }, document.head.appendChild(o);
  }
  const sa = /* @__PURE__ */ new Map(), Dn = (t) => (_t.lightStyles[t] || _t.lights) === "dac", Po = () => _t.lights === "dac" || Object.values(_t.lightStyles).includes("dac");
  function Qi(t) {
    return Dn(t) && !!customElements.get(Bt);
  }
  const ue = (t) => _t.lightPads[t] || _t.dacPad, xn = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, o, l, ...c) => t.callService(a, ...ta(a, o, l), ...c)
    };
  }, Bn = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Rn = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Bn })).dataset.tf = "");
  }, uo = /* @__PURE__ */ new Map(), Ir = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const o = a.parentElement;
    !o || !a.offsetHeight || (o.style.removeProperty("min-height"), uo.set(o.dataset.dac, o.offsetHeight));
  }));
  function yn(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const o = a.dataset.dac;
      let l = sa.get(o);
      if (!l) {
        const c = o.slice(o.indexOf(":") + 1);
        l = document.createElement(Bt), l.setConfig({ type: "custom:" + Bt, entity: c, pad: ue(c), tap_action: { action: "none" } }), sa.set(o, l);
      }
      l.hass = xn(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && uo.has(o) && (a.style.minHeight = uo.get(o) + "px"), Ir.observe(l), Rn(l);
    });
  }
  function Da() {
    const t = xn();
    sa.forEach((a, o) => {
      a.isConnected ? a.hass = t : sa.delete(o);
    });
  }
  customElements.whenDefined(Bt).then(() => {
    w && (S != null && S.querySelector("[data-tf]")) && zs(oa);
  });
  const De = (t, a, o) => M.has(t + "|" + a) ? M.get(t + "|" + a) : o;
  function tr(t) {
    var h;
    const a = k[t], o = a.attributes, l = t.split(".")[0], c = (u, g) => ({ act: ye(u, "toggle", t), label: g });
    if (l === "light") {
      const u = a.state === "on", g = Vt(t), [y, B] = Do(t), D = De("bright", t, ro(a));
      u && Ht(t, ro(a));
      const I = De("ct", t, u && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), X = De("hue", t, u && zd.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: u, button: c("light", "Turn " + Rt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        bn(t) && $("bright", t, D / 100, Rt(t) + " brightness", D + "%", !1, u ? null : vt[t] ?? null),
        g.includes("color_temp") && $("ct", t, I == null ? null : (I - y) / (B - y), Rt(t) + " warm to cool", I == null ? "" : Math.round(I) + " kelvin", !0),
        g.some((Z) => zd.includes(Z)) && $("hue", t, X == null ? null : X / 360, Rt(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const u = o.target_temp_step || 0.5, g = Number(o.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Rt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && At("Target temperature", Ta(g) + " °C", ye("climate", "set_temperature", t, { temperature: g - u }), ye("climate", "set_temperature", t, { temperature: g + u })),
        Ct("tfSeg", "Mode", (o.hvac_modes || []).map((y) => ({ label: _e(y), act: ye("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: a.state === y })))
      ] };
    }
    if (l === "cover") {
      const u = a.state === "opening" || a.state === "closing", g = a.state === "closed", y = Te(t), B = Aa(t);
      return { on: !g, tone: "blue", icon: Jc[Od(a)][g ? 1 : 0], button: c("cover", (g ? "Open " : "Close ") + Rt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Gt(t, Xc) && Wt(t, y),
        B != null && Zt(t, B),
        Et(t, y, u)
      ] };
    }
    if (l === "humidifier") {
      const u = Number(o.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Rt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && At("Target humidity", u + "%", ye("humidifier", "set_humidity", t, { humidity: u - 1 }), ye("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && Ct("tfSeg", "Mode", o.available_modes.map((g) => ({ label: _e(g), act: ye("humidifier", "set_mode", t, { mode: g }), pressed: o.mode === g })))
      ] };
    }
    if (l === "media_player") {
      const u = a.state === "playing", g = a.state === "off" || a.state === "standby", y = De("vol", t, o.volume_level), B = g ? { act: ye("media_player", Gt(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + Rt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: ye("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + Rt(t) } : { act: ye("media_player", Gt(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + Rt(t) + " off" };
      return { on: !g, tone: "blue", art: !g && o.entity_picture ? o.entity_picture : null, button: B, parts: ["playback", "volume"], sections: g ? [] : [
        (Gt(t, Zc) || Gt(t, Kc) || Gt(t, Yc) || Gt(t, $c)) && Ct("tfSeg", "Playback", [
          { html: Jl.prev, aria: "Previous", act: ye("media_player", "media_previous_track", t), disabled: !Gt(t, Zc) },
          { html: u ? Jl.pause : Jl.play, aria: u ? "Pause" : "Play", act: ye("media_player", "media_play_pause", t), disabled: !(Gt(t, Yc) || Gt(t, $c)) },
          { html: Jl.next, aria: "Next", act: ye("media_player", "media_next_track", t), disabled: !Gt(t, Kc) }
        ]),
        Gt(t, uh) && y != null && $("vol", t, y, Rt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const u = a.state === "cleaning", g = o.rooms || [], y = (D) => g.includes(D) ? g.filter((I) => I !== D) : g.concat(D), B = ye("vacuum", u ? "pause" : "start", t, Vi(t) ? { rooms: g } : null);
      return { on: u || a.state === "returning", tone: "blue", button: { act: B, label: (u ? "Pause " : "Start ") + Rt(t) }, parts: ["controls", "rooms"], sections: [
        Ct("tfSeg", Rt(t), [
          { label: u ? "Pause" : "Start", act: B },
          { label: "Dock", act: ye("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: ye("vacuum", "locate", t) }
        ]),
        Vi(t) && Ct("tfChips", "Rooms to clean", ve.rooms.filter((D) => D.id !== "balcony").map((D) => ({ label: D.name, act: ye("vacuum", "set_rooms", t, { rooms: y(D.name) }), pressed: g.includes(D.name) })))
      ] };
    }
    if (l === "lock") {
      const u = a.state === "locked";
      return { on: !u, tone: "heat", button: { act: ye("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + Rt(t) }, parts: ["controls"], sections: [
        Ct("tfSeg", Rt(t), [
          { label: "Lock", act: ye("lock", "lock", t), pressed: u },
          { label: "Unlock", act: ye("lock", "unlock", t), pressed: a.state === "unlocked" },
          Gt(t, _h) && { label: "Open", act: ye("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const u = a.state === "disarmed";
      return { on: !u, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: ye("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + Rt(t) + ", away" : "Disarm " + Rt(t) }, parts: ["controls"], sections: [
        Ct("tfSeg", Rt(t), Dh.filter(([, , , g]) => !g || Gt(t, g)).map(([g, y, B]) => ({ label: y, act: ye("alarm_control_panel", B, t), pressed: a.state === g })))
      ] };
    }
    if (l === "valve") {
      const u = a.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (u ? "Close " : "Open ") + Rt(t)), parts: ["controls"], sections: [
        Ct("tfSeg", Rt(t), [
          { label: "Open", act: ye("valve", "open_valve", t), pressed: u },
          { label: "Close", act: ye("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Rt(t) }, sections: [] };
  }
  const er = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ta(t)) + "°";
  function Hr(t) {
    var bt;
    const a = (W) => t.readings.find((kt) => Kt(kt).device_class === W), o = a("temperature"), l = a("humidity"), c = (W) => {
      var kt;
      return Number((kt = k[W]) == null ? void 0 : kt.state);
    }, h = (W) => t.actions.filter((kt) => W.test(kt)), u = t.lights.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "on";
    }), g = h(/^cover\./), y = g.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) !== "closed";
    }), B = [...new Set(g.map((W) => Od(k[W])))], D = h(/^climate\./)[0], I = h(/^humidifier\./)[0], X = h(/^media_player\./), Z = X.find((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "playing";
    }) || X.find((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "paused";
    }), Mt = t.plugs.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "on";
    }), nt = [];
    if (o && Number.isFinite(c(o)) && nt.push({ key: "temp", id: o, kind: "reading", icon: Lo(o), label: "Temperature", value: Ta(c(o)) + "°" }), l && Number.isFinite(c(l)) && nt.push({ key: "hum", id: l, kind: "reading", icon: Lo(l), label: "Humidity", value: Math.round(c(l)) + "%" }), t.lights.length && nt.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Lo("", "mdi:lightbulb"),
      label: "Lights",
      value: u.length ? u.length + " of " + t.lights.length + " on" : "All off",
      short: u.length ? u.length + " on" : "Off",
      on: u.length > 0,
      light: u.length ? Ms(u[0]) : "",
      acts: t.lights.map((W) => ["light", u.length ? "turn_off" : "turn_on", W]),
      aria: (u.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), g.length) {
      const W = B.length === 1 ? wh[B[0]] : "covers", kt = Math.round(g.reduce((V, qt) => V + Ln(qt), 0) / g.length);
      nt.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: y.length ? za([146, 107, 199]) : "",
        icon: Lo("", ((bt = Jc[B[0]]) == null ? void 0 : bt[y.length ? 0 : 1]) || "mdi:window-shutter"),
        label: _e(W),
        value: kt <= 0 ? "Closed" : kt >= 100 ? "Open" : kt + "% open",
        short: kt <= 0 ? "Closed" : kt + "%",
        on: y.length > 0,
        acts: g.map((V) => ["cover", y.length ? "close_cover" : "open_cover", V]),
        aria: (y.length ? "Close the " : "Open the ") + W + " in " + t.name
      });
    }
    if (D) {
      const W = Kt(D), kt = k[D].state === "off";
      nt.push({
        key: "climate",
        kind: "control",
        tone: W.hvac_action === "cooling" ? "cool" : "heat",
        light: lo(D) ? za(lo(D)) : "",
        icon: Lo(D),
        label: Rt(D),
        value: kt ? "Off" : _e(W.hvac_action || k[D].state) + " · " + er(W.temperature),
        short: kt ? "Off" : er(W.temperature),
        on: !kt,
        acts: [["climate", "toggle", D]],
        aria: "Turn " + Rt(D) + (kt ? " on" : " off")
      });
    }
    if (I) {
      const W = k[I].state === "on";
      nt.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: W ? za([33, 150, 243]) : "",
        icon: Lo("", "mdi:air-humidifier"),
        label: Rt(I),
        value: W ? "On · " + Kt(I).humidity + "%" : "Off",
        short: W ? Kt(I).humidity + "%" : "Off",
        on: W,
        acts: [["humidifier", "toggle", I]],
        aria: "Turn " + Rt(I) + (W ? " off" : " on")
      });
    }
    if (X.length) {
      const W = Z || X[0], kt = k[W], V = kt.state === "playing";
      nt.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: lo(W) ? za(lo(W)) : "",
        icon: Lo(W),
        label: Rt(W),
        value: Ue(W),
        short: V ? "Playing" : kt.state === "paused" ? "Paused" : _e(kt.state),
        on: V,
        acts: [["media_player", kt.state === "playing" || kt.state === "paused" ? "media_play_pause" : "toggle", W]],
        aria: (V ? "Pause " : "Play ") + Rt(W)
      });
    }
    return t.plugs.length && nt.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: Mt.length ? za([255, 193, 7]) : "",
      icon: Lo("", "mdi:power-plug"),
      label: "Plugs",
      value: Mt.length ? Mt.length + " of " + t.plugs.length + " on" : "All off",
      short: Mt.length ? Mt.length + " on" : "Off",
      on: Mt.length > 0,
      acts: t.plugs.map((W) => ["switch", Mt.length ? "turn_off" : "turn_on", W]),
      aria: (Mt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((W) => nt.push(Kt(W).device_class === "moisture" ? { key: "alert:" + W, kind: "alert", icon: Lo(W), label: "Water leak" } : { key: "note:" + W, kind: "note", icon: Lo(W), label: Rt(W) + " " + Ue(W).toLowerCase() })), nt;
  }
  const fo = (t, a) => {
    const o = (l) => t.actions.filter((c) => l.test(c));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = o(/^media_player\./);
        return [l.find((c) => {
          var h;
          return ((h = k[c]) == null ? void 0 : h.state) === "playing";
        }) || l.find((c) => {
          var h;
          return ((h = k[c]) == null ? void 0 : h.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, cd = (t, a, o) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + cn(t.acts) + '" aria-label="' + Q(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", Ye = (t) => '<button class="tfAName" type="button" data-go="' + Q(t.id) + '" aria-label="Open ' + Q(t.name) + '">' + Q(t.name) + "</button>";
  function qn(t, a, o = !1) {
    const l = a.find((g) => g.key === "lights"), c = !!(l != null && l.on), h = "", u = '<span class="tfAreaGlyph"' + $e("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !l ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + h + ' aria-hidden="true">' + u + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + h + ' data-acts="' + cn(l.acts) + '" aria-label="' + Q(l.aria) + '" aria-pressed="' + c + '">' + u + "</button>";
  }
  const gi = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + Q(a.label) + "</span>").join(" "), dl = (t) => t.readings.find((a) => Kt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => k[a]) || null, ar = (t, a) => {
    const o = Rt(a);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? _e(o.slice(t.name.length + 1)) : o;
  };
  function vi(t) {
    const a = k[t], o = Kt(t), l = t.split(".")[0], c = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: er(c) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(c) + "%" } : { text: Ta(c, Number.isInteger(c) ? 0 : 1), unit: h };
    }
    if (l === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: er(o.current_temperature ?? o.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : bn(t) ? ro(a) + "%" : "On" };
    if (l === "cover") {
      const h = Ln(t);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? o.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : _e(a.state) } : { text: Ue(t) };
  }
  const nr = (t, a, o) => {
    const l = o.find((g) => g.key === "temp"), c = o.find((g) => g.key === "hum"), h = Kt(a), u = k[a].state === "off";
    return a.startsWith("climate.") ? [ar(t, a), u ? "Off" : _e(h.hvac_action || k[a].state) + (h.temperature != null ? " · " + er(h.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && ar(t, a), l && l.id !== a && l.value, c && c.id !== a && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ho(t, a, o) {
    const l = o && vi(o), c = o ? nr(t, o, a) : "", h = (y) => {
      const B = fo(t, y.key);
      return B.length === 1 ? B[0] : "group:" + t.id + ":" + y.key;
    }, u = a.filter((y) => y.kind === "control").slice(0, 4).map((y) => '<div class="tfATile' + (y.on ? " on" : "") + '" data-tone="' + y.tone + '"' + (y.light ? ' data-light style="' + y.light + '"' : "") + ">" + cd(y, "tfIcon", y.icon) + '<button class="tfName" type="button" data-more="' + Q(h(y)) + '" aria-label="' + Q(t.name + " " + y.label.toLowerCase() + ", " + y.value + ". Open") + '"><span class="activityRowName">' + Q(y.label) + '</span><span class="activityRowMeta">' + Q(y.value) + "</span></button></div>"), g = gi(a);
    return '<div class="workoutPanelTop">' + qn(t, a) + '<div class="tfATitle">' + Ye(t) + "</div>" + (g ? '<div class="tfATags">' + g + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + Q(o) + '" aria-label="' + Q(Rt(o) + ", " + Ue(o) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + Q(l.text) + (l.unit ? '<span class="tfABigUnit">' + Q(l.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + Q(c) + "</span>" : "") + "</button>" : "") + (u.length ? '<div class="tfATiles">' + u.join("") + "</div>" : "");
  }
  function mo(t) {
    const a = t.id === Pt, o = Hr(t), l = dl(t), c = l && vi(l), h = [...o.filter((u) => u.kind === "control"), ...o.filter((u) => u.kind !== "control" && u.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + Q(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + Q(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + ho(t, o, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + qn(t, o, !0) + '<span class="tfACName">' + Q(t.name) + '</span></div><span class="tfACMain">' + (c ? Q(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((u) => '<span class="tfACTile"><span class="tfIcon' + (u.kind === "alert" ? " alert" : "") + '"' + (u.on && u.light ? ' data-light style="' + u.light + '"' : "") + ">" + u.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let jn = [];
  const zn = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + jn.map(mo).join("") + "</section></div>", Fr = (t) => t.startsWith("room:"), kn = (t) => jn.find((a) => "room:" + a.id === t);
  function cl(t, a) {
    const o = Hr(t), l = dl(t), c = l && vi(l), h = l ? nr(t, l, o) : "", u = c ? c.text + (c.unit ? " " + c.unit : "") : "", g = (X) => {
      const Z = fo(t, X.key);
      return Z.length === 1 ? Z[0] : "group:" + t.id + ":" + X.key;
    }, y = o.filter((X) => X.kind === "control").slice(0, 4), B = (X) => X.on && X.light ? ' data-light style="' + X.light + '"' : "", D = y.map((X) => '<button class="tfIcon' + (X.on ? " on" : "") + '" type="button" data-tone="' + X.tone + '"' + B(X) + ' data-more="' + Q(g(X)) + '" aria-label="' + Q(X.label + ", " + X.value + ". Open its controls") + '">' + X.icon + "</button>"), I = y.map((X) => '<button class="tfRoomDev" type="button" data-more="' + Q(g(X)) + '" aria-label="' + Q(X.label + ", " + X.value + ". Open its controls") + '"><span class="tfIcon' + (X.on ? " on" : "") + '" data-tone="' + X.tone + '"' + B(X) + ">" + X.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + Q(X.label) + '</span><span class="activityRowMeta">' + Q(X.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + Q(a) + '" data-go="' + Q(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + $e("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + Q(t.id) + '" aria-label="Open ' + Q(t.name) + '"><span class="activityRowName">' + Q(t.name) + "</span>" + (u || h ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + Q(u) + (h ? " · " : "") + "</span>" : "") + Q(h) + "</span>" : "") + "</button></div>" + (u ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + Q(u) + "</span>" + (h ? '<span class="tfRoomSub">' + Q(h) + "</span>" : "") + "</div>" : "") + (D.length ? '<div class="tfRoomDevices">' + D.join("") + '</div><div class="tfRoomHeads">' + I.join("") + "</div>" : "") + "</div>";
  }
  const pd = () => [
    { key: "home", name: "Home", ids: ve.homeVacuums },
    ...ve.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Io = (t, a, o) => t + " " + (t === 1 ? a : o), Va = () => (q.favourites ?? gt.favorite_entities ?? []).filter((t) => k[t]);
  function pl() {
    if (!pe) {
      const a = Object.entries(ea).sort((l, c) => c[1] - l[1]).map(([l]) => l), o = ve.rooms.flatMap((l) => l.actions);
      pe = [.../* @__PURE__ */ new Set([...Jt, ...a, ...o.filter((l) => tr(l).on), ...o])];
    }
    const t = Va();
    return pe.filter((a) => k[a] && k[a].state !== "unavailable" && !t.includes(a));
  }
  let ul = !1;
  function or() {
    if (!ul || q.favSeeded || !ve.rooms.length) return;
    const t = (o) => Object.keys(k).find((l) => Vi(l) && o(l)), a = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), ve.security.locks[0]];
    q = { ...q, favourites: [.../* @__PURE__ */ new Set([...q.favourites ?? gt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Pa();
  }
  const ir = () => q.suggest ?? !gt.hide_suggested_entities;
  function rr() {
    const t = new Set(q.favHidden || []), a = Va().filter((l) => !t.has(l)), o = ir() ? pl().filter((l) => !t.has(l) && zr(l)) : [];
    return [...a, ...o].slice(0, Rh);
  }
  const ud = (t) => {
    const a = Va().includes(t);
    return '<button class="tfStar" type="button" data-star="' + Q(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + Q(Rt(t)) + '">' + Eh(a) + "</button>";
  };
  function Ho(t, { area: a = !1, star: o = !1, plain: l = !1, say: c = null, alert: h = !1 } = {}) {
    var Mt, nt, bt, W, kt, V;
    const u = l && ((kt = (Mt = i()) == null ? void 0 : Mt.devices) == null ? void 0 : kt[(W = (bt = (nt = i()) == null ? void 0 : nt.entities) == null ? void 0 : bt[t]) == null ? void 0 : W.device_id]), g = u && (u.name_by_user || u.name) || Rt(t), y = t.split(".")[0], B = !l && td.includes(y) ? tr(t) : null, D = B ? B.on : ["on", "open", "playing"].includes((V = k[t]) == null ? void 0 : V.state), I = l ? null : B ? B.button : xh.includes(y) ? { act: ye(y, "toggle", t), label: "Turn " + Rt(t) + (D ? " off" : " on") } : y === "scene" || y === "script" ? { act: ye(y, "turn_on", t), label: "Run " + Rt(t) } : null, X = (c ?? Ue(t)) + (a && Se.get(t) ? " · " + Se.get(t) : ""), Z = (B == null ? void 0 : B.icon) || Xa(t);
    return '<div class="activityRow' + (I ? " tfPlug" : "") + (D ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + Q((a ? "fav:" : "row:") + t) + '" data-tone="' + (y === "light" ? "light" : (B == null ? void 0 : B.tone) || "blue") + '"' + Wn(t) + ">" + (I && !o ? '<button class="tfIcon" type="button" data-act="' + I.act + '" aria-label="' + Q(I.label) + '"' + $e(t, Z) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + $e(t, Z) + "></div>") + '<button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(g + ", " + X + ". More info") + '"><span class="activityRowName">' + Q(g) + '</span><span class="activityRowMeta">' + Q(X) + "</span></button>" + (o ? ud(t) : "") + "</div>";
  }
  const go = () => {
    var t;
    return k[(t = q.sources) == null ? void 0 : t.weather] ? q.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((a) => a.startsWith("weather."));
  };
  function Cs() {
    var o;
    const t = (l) => Object.keys(k).filter((c) => c.startsWith("binary_sensor.") && l.includes(Kt(c).device_class));
    return ((o = St.alert_entities) != null && o.length ? St.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(Ql).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => k[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[l.entity].state) }));
  }
  function Or() {
    const t = Object.keys(qd), a = /* @__PURE__ */ new Set(), o = [];
    return (gt.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      o.push(l);
    }), t.forEach((l) => {
      a.has(l) || o.push({ type: "summary", key: l });
    }), o;
  }
  function sr() {
    var bt;
    const t = ((bt = i()) == null ? void 0 : bt.entities) || {}, a = (W) => Kt(W).device_class, o = Object.keys(k).filter((W) => W.startsWith("sensor.") && a(W) === "battery" || W.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(W))), l = ve.rooms.flatMap((W) => W.plants.map((kt) => kt.id));
    if (!o.length && !l.length) return null;
    const c = (W) => {
      var V;
      const kt = (V = t[W]) == null ? void 0 : V.device_id;
      return !!kt && Object.keys(k).some((qt) => {
        var He;
        return qt.startsWith("binary_sensor.") && ((He = t[qt]) == null ? void 0 : He.device_id) === kt && a(qt) === "battery_charging" && k[qt].state === "on";
      });
    }, h = (W) => W.startsWith("vacuum.") ? Kt(W).battery_level <= 20 && k[W].state !== "docked" : W.startsWith("binary_sensor.") ? a(W) === "battery" && k[W].state === "on" : parseFloat(k[W].state) <= 20 && !c(W), u = [...o, ...ve.vacuums].filter((W) => k[W] && h(W)), g = [...o.filter((W) => a(W) === "problem" && k[W].state === "on"), ...l.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "problem";
    })], y = o.filter((W) => k[W].state === "unavailable"), B = [.../* @__PURE__ */ new Set([...u, ...g, ...y])], D = (W) => {
      const kt = parseFloat(k[W].state);
      return a(W) === "battery" && Number.isFinite(kt) ? kt : 101;
    }, I = [...l, ...ve.vacuums, ...[...o].sort((W, kt) => D(W) - D(kt))].filter((W) => k[W] && !B.includes(W)), X = /* @__PURE__ */ new Map();
    I.forEach((W) => {
      var V;
      const kt = ((V = ve.areaOf) == null ? void 0 : V.call(ve, W)) || "";
      X.set(kt, [...X.get(kt) || [], W]);
    });
    const Z = (W) => {
      const kt = ve.rooms.findIndex((V) => V.id === W);
      return W === "" ? 1 / 0 : kt < 0 ? ve.rooms.length : kt;
    }, Mt = [...X.keys()].sort((W, kt) => Z(W) - Z(kt)), nt = (W) => {
      var kt, V, qt, He;
      return ((kt = ve.rooms.find((be) => be.id === W)) == null ? void 0 : kt.name) || ((He = (qt = (V = i()) == null ? void 0 : V.areas) == null ? void 0 : qt[W]) == null ? void 0 : He.name) || W;
    };
    return {
      value: [u.length && Io(u.length, "low battery", "low batteries"), g.length && Io(g.length, "problem", "problems"), y.length && Io(y.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: B, alert: !0 }, ...Mt.map((W) => ({ name: W ? nt(W) : Mt.length > 1 ? "Other devices" : "Devices", ids: X.get(W) }))].filter((W) => W.ids.length)
    };
  }
  function bi() {
    var Ca;
    const t = ve.rooms, a = ve.security, o = (Xt, je) => Xt.actions.filter((ei) => je.test(ei)), l = (Xt) => t.map((je) => ({ name: je.name, ids: Xt(je) })).filter((je) => je.ids.length), c = t.flatMap((Xt) => Xt.lights), h = c.filter((Xt) => {
      var je;
      return ((je = k[Xt]) == null ? void 0 : je.state) === "on";
    }).length, u = t.map((Xt) => Xt.readings.find((je) => Kt(je).device_class === "temperature")).filter(Boolean).map((Xt) => Number(k[Xt].state)).filter(Number.isFinite), [g, y] = [Ta(Math.min(...u)), Ta(Math.max(...u))], B = t.flatMap((Xt) => o(Xt, /^media_player\./)), D = B.filter((Xt) => {
      var je;
      return ((je = k[Xt]) == null ? void 0 : je.state) === "playing";
    }).length, I = Cs(), X = I.filter((Xt) => Xt.severity === "warning" && Xt.on).length, Z = a.locks.filter((Xt) => {
      var je;
      return ["unlocked", "jammed", "open"].includes((je = k[Xt]) == null ? void 0 : je.state);
    }).length, Mt = a.alarms.filter((Xt) => {
      var je;
      return ((je = k[Xt]) == null ? void 0 : je.state) === "disarmed";
    }).length, nt = X ? Io(X, "warning", "warnings") : null, bt = Z ? Z + " unlocked" : Mt ? Mt + " disarmed" : nt ? null : "All secure", W = sr(), kt = t.flatMap((Xt) => Xt.solar), V = kt.find((Xt) => Xt.endsWith("_power")), qt = {
      light: c.length && { value: h ? h + " on" : "All off", groups: l((Xt) => Xt.lights) },
      climate: u.length && { value: g === y ? g + "°" : g + " - " + y + "°", groups: l((Xt) => [...Xt.readings.filter((je) => ["temperature", "humidity"].includes(Kt(je).device_class)), ...o(Xt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [nt, bt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Xt) => Xt.ids.length) },
      media_players: B.length && { value: D ? D + " playing" : "No media playing", groups: l((Xt) => o(Xt, /^media_player\./)) },
      maintenance: W,
      energy: ve.grid && { value: fi(Number(((Ca = k[V]) == null ? void 0 : Ca.state) || 0) * 1e3 + Number(k[ve.grid].state)) + " now", groups: [{ name: "Energy", ids: [...kt, ve.grid] }] }
    }, He = [], be = I.filter((Xt) => Xt.severity !== "warning" && Xt.on);
    return be.length && He.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Io(be.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: be.map((Xt) => Xt.entity) }] }), Or().forEach((Xt) => {
      Xt.type !== "summary" ? He.push({ key: "path:" + Xt.path, name: Xt.label || Xt.path, icon: Xt.icon || "mdi:link-variant", colour: "", value: "" }) : !Xt.hidden && qt[Xt.key] && !(q.hiddenSums || []).includes(Xt.key) && He.push({ key: Xt.key, ...qd[Xt.key], ...qt[Xt.key] });
    }), He;
  }
  const lr = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + Q(t.key) + '" data-k="sum:' + Q(t.key) + '" aria-label="' + Q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + pi() + '"' : t.colour && pa(t.colour) ? ' style="' + pa(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? ui : "") + '<div class="tfIcon" aria-hidden="true"' + $e(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + Q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + Q(t.value) + "</div>" : "") + "</div></div>";
  function Wr(t) {
    const a = Va();
    q = { ...q, favourites: a.includes(t) ? a.filter((o) => o !== t) : [...a, t], favHidden: (q.favHidden || []).filter((o) => o !== t) }, Pa(), Sa();
  }
  function Nn(t) {
    document.querySelector("home-assistant") && (j.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Fo(t, a) {
    if (t.startsWith("path:")) {
      Nn(t.slice(5));
      return;
    }
    Zs("summary:" + t, a);
  }
  async function fd() {
    const t = (u) => Promise.resolve().then(() => N(u)).catch(() => null), [a, o, l, c] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Qc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), h = (a == null ? void 0 : a.value) || {};
    q = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, gt = (o == null ? void 0 : o.value) || {}, St = (l == null ? void 0 : l.value) || {}, Jt = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], pe = null, Object.keys(k).length && Sa(), wi(), ul = !0, or();
  }
  const fl = "HomeCore";
  async function wi() {
    var l, c, h;
    const t = location.pathname.split("/")[1], a = q.named || [];
    if (!((c = (l = i()) == null ? void 0 : l.user) != null && c.is_admin) || !t || a.includes(t)) return;
    const o = () => {
      q = { ...q, named: [...a, t] }, Pa();
    };
    try {
      const u = (h = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((B) => B.url_path === t);
      if (!u || u.mode === "yaml") return;
      if (u.title === fl) {
        o();
        return;
      }
      const g = await N({ type: "lovelace/config", url_path: t }), y = ((g == null ? void 0 : g.views) || []).flatMap((B) => [...B.cards || [], ...(B.sections || []).flatMap((D) => D.cards || [])]);
      if (!y.length || !y.every((B) => (B == null ? void 0 : B.type) === "custom:move-assistant-card" && B.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: u.id, title: fl }), o();
    } catch {
    }
  }
  let Vn = null, xi = 0, dr = !1;
  const hl = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return Bh.includes(a) && (a !== "binary_sensor" || Ql.includes(o) || !!sp[o]);
  }, cr = (t) => t.startsWith("binary_sensor.") ? sp[Kt(t).device_class] : null;
  async function Ts() {
    var t;
    if (!(dr || Date.now() - xi < 30 * 1e3)) {
      dr = !0, xi = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(hl), o = a.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        Vn = Array.isArray(o) ? o.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        Vn = null;
      }
      dr = !1, Sa();
    }
  }
  function qr() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = (c) => {
      if (!k[c.entity_id] || !hl(c.entity_id) || !zr(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (cr(c.entity_id)) {
        const u = a.get(c.entity_id);
        c.state === "on" ? (!u || c.when > u.when + 1) && a.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : u && !u.cleared && c.when > u.when && (u.cleared = c.when);
        return;
      }
      const h = t.get(c.entity_id);
      (!h || c.when > h.when + 1) && t.set(c.entity_id, c);
    };
    [...Vn || []].sort((c, h) => c.when - h.when).forEach(o);
    const l = Vn ? xi / 1e3 - 5 : 0;
    return Object.keys(k).forEach((c) => {
      var g;
      const h = k[c], u = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      u > l && o({ entity_id: c, state: h.state, when: u, context_user_id: (g = h.context) == null ? void 0 : g.user_id });
    }), [...t.values(), ...a.values()].sort((c, h) => h.when - c.when).slice(0, Nh);
  }
  function ml(t) {
    var l;
    const a = t.context_user_id && Object.keys(k).find((c) => c.startsWith("person.") && Kt(c).user_id === t.context_user_id);
    if (a) return Rt(a);
    const o = (l = i()) == null ? void 0 : l.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function hd(t) {
    const a = t.entity_id.split(".")[0], o = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || _e(o).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || _e(o).toLowerCase() : a === "binary_sensor" ? o === "on" ? "opened" : "closed" : a === "climate" ? o === "off" ? "turned off" : "set to " + _e(o).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || _e(o).toLowerCase() : a === "alarm_control_panel" ? (rp[o] || _e(o)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || _e(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : _e(o).toLowerCase();
  }
  function Ia(t) {
    const a = t.entity_id, o = t.alarm && cr(a), l = Rt(a) + " " + (o ? o[0] : hd(t)), c = o ? wn(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + wn(t.cleared * 1e3) : "") : [ml(t), wn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + $e(a, Xa(a)) + '></div><button class="tfName" type="button" data-more="' + Q(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + Q(l + ", " + c + ". More info") + '"><span class="activityRowName">' + Q(l) + '</span><span class="activityRowMeta">' + Q(c) + "</span></button></div>";
  }
  let Gn = null, Oo = 0;
  const md = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function gl() {
    var a;
    if (Date.now() - Oo < 5 * 60 * 1e3) return;
    Oo = Date.now();
    const t = [];
    try {
      const o = ((a = await N({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (c) => o.filter((h) => h.type === c).flatMap((h) => c === "grid" ? (h.flow_from || []).map((u) => u.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [c, h, u] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!u.length) continue;
        const g = await Promise.all(u.map((y) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: y, calendar: { period: "day" }, types: ["change"] })).then((B) => Number(B == null ? void 0 : B.change) || 0, () => 0)));
        t.push({ key: c, name: h, id: u[0], ids: u, value: g.reduce((y, B) => y + B, 0), unit: Kt(u[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Gn = t, Sa();
  }
  let yi = null, As = [];
  function pr() {
    var h;
    const t = As = Gn != null && Gn.length ? Gn : md.map(([u, g, y, B]) => {
      const D = "sensor.made_up_energy_" + u;
      return k[D] = { entity_id: D, state: String(y), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: B, state_class: "total_increasing" } }, { key: u, name: g, id: D, value: y, unit: B };
    });
    zt.clear(), t.some((u) => u.id === yi) || (yi = t[0].id);
    const a = t.map((u) => {
      const g = Number(u.value).toLocaleString(void 0, { maximumFractionDigits: u.value < 10 ? 2 : 1 }) + " " + u.unit, y = Ph[u.key], B = u.id === yi;
      return zt.set(u.id, { name: u.name, text: g, icon: y }), '<div class="activityRow tap' + (B ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + Q(u.id) + '" aria-pressed="' + B + '" aria-label="' + Q(u.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + $e("", y, u.name) + '></div><div><div class="activityRowName">' + Q(u.name) + '</div><div class="activityRowMeta">' + Q(g) + "</div></div></div>";
    }), o = t.find((u) => u.id === yi), l = (((h = ke().opts.energy) == null ? void 0 : h.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + Q(o.id) + '" role="img" aria-label="' + Q(o.name) + ', last 24 hours"></svg></div>';
    return C("dash:energy", 0, "Energy today", a, c, bi().some((u) => u.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function Ls(t) {
    const a = S.querySelector(".tfDash-energy"), o = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !o || t === yi || (yi = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const c = l.dataset.energyPick === t;
      l.classList.toggle("picked", c), l.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = t, o.dataset.drawn = "", ze.set("dash:energy", pr()), Za(!0));
  }
  const ki = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, jr = /* @__PURE__ */ new Map();
  async function Un(t) {
    const a = /* @__PURE__ */ new Date(), o = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), c = a.getMinutes() / 60, h = Array.from({ length: 24 }, (g, y) => y <= l ? 0 : null);
    if (!t.ids) {
      const g = ki[t.key] || ki.electricity, y = g.map((D, I) => I < l ? D : I === l ? D * c : 0), B = y.reduce((D, I) => D + I, 0) || 1;
      return h.map((D, I) => D == null ? null : t.value * y[I] / B);
    }
    const u = jr.get(t.id);
    if (u && u.day === o && Date.now() - u.at < 5 * 60 * 1e3) return u.hours;
    try {
      const g = await N({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((D) => ((g == null ? void 0 : g[D]) || []).forEach((I) => {
        const X = typeof I.start == "number" ? I.start : Date.parse(I.start), Z = new Date(X).getHours();
        X >= o && Z < l && (h[Z] += Number(I.change) || 0);
      }));
      const y = new Date(a).setMinutes(0, 0, 0), B = await Promise.all(t.ids.map((D) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: D, fixed_period: { start_time: new Date(y).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((I) => Number(I == null ? void 0 : I.change) || 0, () => 0)));
      h[l] = B.reduce((D, I) => D + I, 0);
    } catch {
    }
    return jr.set(t.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function ur(t, a) {
    const o = await Un(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), c = Math.max(60, t.clientHeight || 130), h = 18, u = c - 18, g = l / 24, y = g * 0.72, B = (/* @__PURE__ */ new Date()).getHours(), D = o.map((bt) => bt ?? 0), I = Math.max(0, ...D), X = (bt) => u - (I > 0 ? bt / I * (u - h) : 0), Z = (bt) => bt.toLocaleString(void 0, { maximumFractionDigits: bt < 10 ? 2 : 1 }) + " " + a.unit, Mt = (bt) => String(bt).padStart(2, "0") + ":00", nt = I > 0 ? D.indexOf(I) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + c), t.setAttribute("aria-label", a.name + " today by the hour: " + Z(a.value) + (nt >= 0 ? ", most " + Z(I) + " at " + Mt(nt) : "")), t.innerHTML = [h, (h + u) / 2, u].map((bt) => '<line x1="0" x2="' + l + '" y1="' + bt + '" y2="' + bt + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((bt, W) => bt > 0 ? '<rect x="' + (W * g + (g - y) / 2).toFixed(1) + '" y="' + X(bt).toFixed(1) + '" width="' + y.toFixed(1) + '" height="' + (u - X(bt)).toFixed(1) + '" rx="2" fill="' + (W === B ? "var(--primary)" : "var(--text)") + '"' + (W === B ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((bt) => '<text x="' + (bt * g).toFixed(1) + '" y="' + (c - 3) + '">' + String(bt).padStart(2, "0") + "</text>").join("") + (nt >= 0 ? '<text x="0" y="11">Most: ' + Q(Z(I)) + " at " + Mt(nt) + "</text>" : "");
  }
  function Es(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, l) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function gd(t) {
    var c;
    if ((c = window.matchMedia) != null && c.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, o] = t.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const l = o.getTotalLength();
    o.animate([{ strokeDasharray: l, strokeDashoffset: l }, { strokeDasharray: l, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Mi = null, _s = 0;
  const zr = (t) => !t.startsWith("light.") || Ih.includes((Se.get(t) || "").toLowerCase()), vo = () => Math.max(2, ua((S == null ? void 0 : S.clientWidth) || 0).n), vl = (t) => {
    const a = tr(t);
    return a.sections.map((o, l) => o && (a.parts || [])[l]).filter(Boolean);
  }, bl = (t) => vl(t).slice(0, Ei(t) - 1);
  function Vr(t) {
    const a = ke().tiles;
    if (a) return a.filter((l) => k[l] || kn(l));
    if (!Mi) {
      const l = (c) => {
        var h;
        return (((h = k[c]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (ea[c] || 0);
      };
      Mi = {
        lights: ve.rooms.flatMap((c) => c.lights).filter((c) => {
          var h;
          return zr(c) && ((h = k[c]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((c, h) => l(h) - l(c) || Rt(c).localeCompare(Rt(h))),
        climates: ve.rooms.flatMap((c) => c.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = Mi.climates.filter((l) => k[l]).slice(0, t > 3 ? 2 : 1);
    return [...Mi.lights.filter((l) => k[l]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const Si = (t, a, o, l) => (c) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + o + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Ci(t, a) {
    var h, u;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + Q(((u = (h = i()) == null ? void 0 : h.config) == null ? void 0 : u.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Si("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: a.map((g) => ({ key: "sum:" + g.key, html: lr(g) })) }), jn.length && t.push({ key: "areas", html: zn(0) });
    const o = rr();
    o.length && t.push({ key: "favs", wrap: Si("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((g) => ({ key: "fav:" + g, html: Ho(g, { area: !0 }) })) });
    const l = qr();
    t.push({ key: "dash:act", html: C("dash:act", 0, "Activity", l.length ? l.map(Ia) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: pr() });
    const c = vo();
    return _s = c, Vr(c >= 3 ? c : c * 2).forEach((g) => t.push({
      key: "dash:tile:" + g,
      wrap: (y) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + Q(g) + '">' + y + "</div>",
      tiles: [{ key: g, html: Fr(g) ? cl(kn(g), g) : Ie(g, !1, bl(g)) }]
    })), Ts(), gl(), t;
  }
  const un = 252, qe = 16, Ti = 200, fr = Math.round(un * 1.25), Ai = 60, Ga = Ai + qe, wl = 3, vd = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Gr = ["wx", "favs", "act", "energy", "avg"], Yn = ["XS", "S", "M", "L", "XL"], Wo = Yn.length, qo = ["Narrow", "Wide", "Really wide"], Li = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, xl = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && Dn(t) ? Wo : Math.min(Wo, vl(t).length + 1), Ei = (t) => {
    const a = ke().opts[t] || {}, o = xl(t), l = Number(a.h) || (a.tall ? 5 : Li[t] || Ds);
    return Math.max(1, Math.min(o, l));
  }, Ds = 2, bd = 90, Ur = 56, Ba = (t) => {
    var a;
    return vd[t] || (t.startsWith("room:") ? ((a = jn.find((o) => "room:" + o.id === t)) == null ? void 0 : a.name) || "Area" : Rt(t));
  }, Zn = 409, Bs = 128;
  let Ha = !1, Ae = null, Fa = null, hr = !1, jo = /* @__PURE__ */ new Map(), Yr = 0, bo = 0;
  const Kn = ["title", "sums"], ua = (t) => {
    const a = Math.max(1, Math.floor((t + qe) / (Ti + qe)));
    return { n: a, w: Math.max(1, Math.min(fr, Math.floor((t - (a - 1) * qe) / a))) };
  }, ke = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...q.dash || {} }, a = he.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function Zr(t) {
    q = { ...q, dash: { ...t, known: he } }, Pa();
  }
  function mr() {
    const t = (a) => S.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", ra.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", ra.avg, 2],
      ...he.map((a) => [a, ra[a], 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, o, l, c = !1]) => ({ key: a, el: o, span: l, tile: c }));
  }
  const Kr = (t, a, o) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && ke().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((Zn + Math.max(0, jn.length - 1) * (Bs + qe) + qe) / (o + qe))) : Math.min(a, ke().spans[t.key] ?? t.span);
  }, $r = (t) => Ei(t.key);
  function gr(t, a, o = null) {
    const l = ke().cells, c = t.every((g) => !l[g.key] || l[g.key].col + g.cols <= a), h = (g) => l[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), B = (nt, bt, W, kt) => {
        for (let V = bt; V < bt + kt; V++) for (let qt = nt; qt < nt + W; qt++) if (g.has(qt + "," + V)) return !1;
        return !0;
      }, D = (nt, bt, W) => {
        for (let kt = W; kt < W + nt.rows; kt++) for (let V = bt; V < bt + nt.cols; V++) g.add(V + "," + kt);
        y.set(nt.key, { col: bt, row: W, cols: nt.cols, rows: nt.rows });
      }, I = (nt, bt, W) => {
        for (bt = Math.max(0, Math.min(a - nt.cols, bt)), W = Math.max(0, W); !B(bt, W, nt.cols, nt.rows); ) W++;
        D(nt, bt, W);
      }, X = (nt) => {
        for (let bt = 0; ; bt++) for (let W = 0; W <= a - nt.cols; W++) if (B(W, bt, nt.cols, nt.rows)) {
          D(nt, W, bt);
          return;
        }
      };
      o && I(o, Ae.col, Ae.row);
      const Z = t.filter((nt) => nt !== o), Mt = (nt, bt) => h(nt).row - h(bt).row || h(nt).col - h(bt).col;
      return c ? (Z.filter((nt) => l[nt.key]).sort(Mt).forEach((nt) => I(nt, l[nt.key].col, l[nt.key].row)), Z.filter((nt) => !l[nt.key]).forEach(X), y) : ([...Z].sort(Mt).forEach(X), y);
    })();
  }
  function yl(t, a) {
    const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), c = (h, u, g) => {
      for (let y = u; y < u + g.rows; y++) for (let B = h; B < h + g.cols; B++) if (o.has(B + "," + y)) return !1;
      return !0;
    };
    return t.forEach((h) => {
      for (let u = 0; ; u++) {
        let g = 0;
        for (; g <= a - h.cols && !c(g, u, h); ) g++;
        if (!(g > a - h.cols)) {
          for (let y = u; y < u + h.rows; y++) for (let B = g; B < g + h.cols; B++) o.add(B + "," + y);
          l.set(h.key, { col: g, row: u, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), l;
  }
  function Xr() {
    const t = ke(), a = new Set(t.hidden), o = mr().filter((u) => !Kn.includes(u.key));
    let l = jo;
    if (!l.size) {
      const u = t.pegs || 4, g = o.filter((y) => !a.has(y.key));
      g.forEach((y) => {
        y.cols = Kr(y, u, un), y.rows = $r(y) ?? Ds;
      }), l = gr(g, u);
    }
    const c = (u) => !a.has(u.key) && l.get(u.key) || { row: 1e9, col: 0 };
    o.sort((u, g) => c(u).row - c(g).row || c(u).col - c(g).col);
    const h = (t.phone || []).map((u) => o.find((g) => g.key === u && !a.has(u))).filter(Boolean);
    return [...h, ...o.filter((u) => !h.includes(u))];
  }
  const wd = () => {
    const t = Xr();
    t.forEach((a, o) => a.el.style.setProperty("--o", String(3 + o))), kl([...mr().filter((a) => Kn.includes(a.key)), ...t].map((a) => a.el));
  };
  function kl(t) {
    if (Ae) return;
    const a = n.activeElement;
    let o = null;
    for (const l of new Set(t.map((c) => {
      for (; c && c.parentElement !== S; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : S.querySelector(":scope > [data-tf]");
      if (l !== c)
        try {
          S.moveBefore ? S.moveBefore(l, c) : S.insertBefore(l, c);
        } catch {
          S.insertBefore(l, c);
        }
      o = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const zo = (t, a) => Zr({ ...t, cells: a, pegs: ua(S.clientWidth).n });
  function la() {
    var kt;
    if (!w || !S) return;
    const t = S.clientWidth, a = t < 2 * un + qe, o = m.classList.contains("tfDash"), { n: l, w: c } = a ? { n: 2, w: Math.floor((t - qe) / 2) } : ua(t);
    ae.classList.add("tfPegs"), ae.style.setProperty("--peg-n", l), ae.style.setProperty("--peg-w", c + "px");
    const h = new Set(ke().hidden);
    he.forEach((V) => {
      var qt;
      return (qt = ra[V]) == null ? void 0 : qt.classList.toggle("tfNotAdded", h.has(V) && !(Ae != null && Ae.fromTray && Ae.key === V));
    }), m.classList.toggle("tfBoard", o), m.classList.toggle("tfEditing", o && Ha && !a);
    const u = p("dashEditNav");
    u && (u.hidden = !o || a, u.classList.toggle("active", Ha), u.setAttribute("aria-pressed", String(Ha)), u.setAttribute("aria-label", Ha ? "Done editing" : "Edit the dashboard"), u.title = Ha ? "Done" : "Edit", u.innerHTML = Ha ? Lh : ip);
    const g = o ? mr() : [];
    if (!o) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((V) => {
        V.classList.remove("tfBoardItem", "tfBoardHidden"), V.style.left = V.style.top = V.style.width = V.style.height = "";
      }), (kt = S.querySelector(".tfDash-act > .activityRows")) == null || kt.style.removeProperty("max-height"), _i(!1), m.classList.contains("tfDash") && wd(), va();
      return;
    }
    S.style.setProperty("--peg-w", c + "px");
    const y = new Set(ke().hidden), B = c + qe;
    Ae != null && Ae.fromTray && y.delete(Ae.key), g.forEach((V) => V.el.classList.toggle("tfBoardHidden", y.has(V.key)));
    const D = g.filter((V) => !y.has(V.key) && getComputedStyle(V.el).display !== "none");
    let I = 0;
    D.filter((V) => Kn.includes(V.key)).forEach((V) => {
      V.el.classList.add("tfBoardItem"), Object.assign(V.el.style, { width: t + "px", height: "", left: "0px", top: I + "px" });
      const qt = V.key === "sums" && V.el.querySelector(".tfDash-bar"), He = qt ? qt.querySelectorAll(".activityRow").length : 0;
      qt && (qt.style.maxWidth = "none");
      for (let be = 1; qt && be <= He && (qt.style.setProperty("--bar-cols", String(Math.ceil(He / be))), !(qt.offsetWidth <= t)); be++)
        ;
      qt && (qt.style.maxWidth = ""), I += V.el.offsetHeight + qe;
    }), bo = I;
    const X = D.filter((V) => !Kn.includes(V.key));
    X.forEach((V) => {
      V.cols = Kr(V, l, c), V.el.classList.add("tfBoardItem"), V.el.style.width = (V.cols === l ? t : V.cols * c + (V.cols - 1) * qe) + "px", V.el.style.height = "", V.rows = $r(V) ?? Math.max(1, Math.ceil((V.el.offsetHeight + qe - 6) / Ga));
    });
    const Z = Ae && X.find((V) => V.key === Ae.key), Mt = a && Xr().map((V) => V.key), nt = (V) => Mt.includes(V.key) ? Mt.indexOf(V.key) : -1, bt = a ? yl([...X].sort((V, qt) => nt(V) - nt(qt)), l) : gr(X, l, Z);
    bt.forEach((V) => Object.assign(V, { x: V.cols === l ? 0 : V.col * B, y: bo + V.row * Ga, w: V.cols === l ? t : V.cols * c + (V.cols - 1) * qe, h: V.rows * Ga - qe })), X.forEach((V) => {
      const qt = bt.get(V.key);
      V.el.style.height = qt.h + "px", V.el.dataset.rows = Ei(V.key), V.el.toggleAttribute("data-narrow", !a && qt.cols === 1 && l > 1), V.el.dataset.cols = qt.cols, V.el.classList.contains("tfDac") && V.el.style.setProperty("--tf-dac-pad", qt.h - bd + "px"), !(V === Z && !Ae.fromTray) && (V.el.style.left = qt.x + "px", V.el.style.top = qt.y + "px");
    }), a || (jo = bt), kl([...D.filter((V) => Kn.includes(V.key)), ...X.slice().sort((V, qt) => bt.get(V.key).row - bt.get(qt.key).row || bt.get(V.key).col - bt.get(qt.key).col)].map((V) => V.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([V, qt]) => {
      const He = bt.get(V), be = He && S.querySelector(qt), Ca = be == null ? void 0 : be.querySelector(":scope > .activityRows"), Xt = be == null ? void 0 : be.querySelector(":scope > .activityHeader");
      if (!Ca || !Xt) return;
      const je = Ca.getBoundingClientRect().top - be.getBoundingClientRect().top, ei = He.rows === 1 ? He.h : Math.floor(He.h - je - parseFloat(getComputedStyle(be).paddingBottom)), Cd = Math.max(1, Math.floor(ei / Ur));
      Ca.style.setProperty("--fill-row", (ei / Cd).toFixed(2) + "px"), Ca.style.maxHeight = ei + "px";
    }), Yr = Math.max(0, ...[...bt.values()].map((V) => V.row + V.rows));
    let W = bo + Yr * Ga - qe;
    W = _i(Ha && !a, X, bt, W, l, c), S.style.height = W + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), g.forEach((V) => Jr.observe(V.el)), Za(), va();
  }
  const Ja = () => {
    hr || (hr = !0, requestAnimationFrame(() => {
      hr = !1, la();
    }));
  }, Jr = new ResizeObserver(() => {
    Ae || Ja();
  });
  function _i(t, a = [], o = /* @__PURE__ */ new Map(), l = 0, c = 1, h = un) {
    S.querySelectorAll(".tfEditChips").forEach((D) => {
      (!t || !D.closest(".tfBoardItem")) && D.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((D) => D.remove()), S.querySelectorAll(".tfBoardItem").forEach((D) => [...D.children].forEach((I) => {
      I.classList.contains("tfEditChips") || I.toggleAttribute("inert", t);
    }));
    let u = S.querySelector(".tfBoardCells"), g = S.querySelector(".tfBoardLand");
    if (!t)
      return u == null || u.remove(), g == null || g.remove(), Qa(), l;
    const y = Yr + wl;
    if (u || (u = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), u.setAttribute("aria-hidden", "true"), S.prepend(u)), u.style.top = bo + "px", u.dataset.size !== c + "x" + y + "x" + h && (u.dataset.size = c + "x" + y + "x" + h, u.style.gridTemplateColumns = "repeat(" + c + "," + h + "px)", u.innerHTML = "<i></i>".repeat(c * y)), l = Math.max(l, bo + y * Ga - qe), a.forEach((D) => {
      const I = D.el;
      !I || I.querySelector(":scope > .tfEditChips") || I.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + jd + '</span><button class="tfEditChip" type="button" data-board-more="' + Q(D.key) + '" aria-label="' + Q(Ba(D.key)) + ' options" aria-haspopup="menu">' + Th + "</button></div>");
    }), Ae && o.has(Ae.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(g));
      const D = o.get(Ae.key);
      Object.assign(g.style, { left: D.x + "px", top: D.y + "px", width: D.w + "px", height: D.h + "px" });
    } else g == null || g.remove();
    const B = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (B) {
      const D = B.getBoundingClientRect();
      B.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...B.querySelectorAll('[data-k^="fav:"]')].map((I) => {
        const X = I.getBoundingClientRect(), Z = I.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + Q(Z) + '" aria-label="Hide ' + Q(Rt(Z)) + ' from the dashboard" style="left:' + Math.round(X.right - D.left - 42) + "px;top:" + Math.round(X.top - D.top + (X.height - 32) / 2) + 'px">' + ap + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let Rs = "";
  function Qr(t) {
    Ha = t, t || (Ae = null, eo = ao = !1, Qa()), la(), t ? Rs = JSON.stringify(q) : Rs && JSON.stringify(q) !== Rs && Mn("Changes saved");
  }
  function fn(t, a) {
    var bt, W;
    Qa();
    const o = jo.get(t), { n: l } = ua(S.clientWidth), c = ke(), h = c.spans[t] ?? (Fr(t) ? 1 : 2);
    if (!o) return;
    const u = o.cols >= l, g = (kt, V, qt) => '<button type="button" role="menuitem" data-board-act="' + kt + '"' + (qt ? " disabled" : "") + ">" + V + "</button>", y = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    y.setAttribute("role", "menu"), y.setAttribute("aria-label", Ba(t) + " options");
    const B = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), D = xl(t), I = Ei(t), X = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Yn.map((kt, V) => '<button type="button" role="menuitemradio" aria-checked="' + (V + 1 === I) + '" aria-label="' + kt + ", " + (V + 1) + (V ? " rows" : " row") + '" data-board-act="h:' + (V + 1) + '"' + (V < D ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>", Z = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], Mt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Z.map(([kt, V, qt]) => '<button type="button" role="menuitemradio" aria-checked="' + (qt && (V === "full" ? o.cols === l : o.cols === V && !(V === l && c.spans.areas === "full"))) + '" aria-label="' + kt + (V === "full" ? "" : ", " + V + " columns") + '" data-board-act="w:' + V + '"' + (qt ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>" : Gr.includes(t) || Fr(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + qo.map((kt, V) => '<button type="button" role="menuitemradio" aria-checked="' + (V + 1 === Math.min(h, l)) + '" aria-label="' + kt + ", " + (V + 1) + (V ? " columns" : " column") + '" data-board-act="w:' + (V + 1) + '"' + (V < l ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>" : "";
    y.innerHTML = X + Mt + (t === "energy" ? g("graph", (((bt = c.opts.energy) == null ? void 0 : bt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", u || o.col === 0) + g("right", "Move right", u || o.col + o.cols >= l) + g("up", "Move up", o.row <= 0) + g("down", "Move down") + (B ? g("remove", "Remove") : g("hide", "Hide")), S.appendChild(y);
    const nt = Math.min(o.x + o.w - y.offsetWidth, S.clientWidth - y.offsetWidth);
    Object.assign(y.style, { left: Math.max(0, nt) + "px", top: o.y + 28 + "px" }), Fa = { key: t, menu: y, opener: a }, (W = y.querySelector("button:not([disabled])")) == null || W.focus();
  }
  function Qa(t) {
    if (!Fa) return;
    const { menu: a, opener: o } = Fa;
    Fa = null, a.remove(), t && (o == null || o.focus());
  }
  const $n = () => Object.fromEntries([...jo].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Di(t, a) {
    var u, g;
    if (a === "remove") {
      Qa(), xd(t);
      return;
    }
    const o = q, l = ke(), c = $n(), h = c[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((u = l.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (c[t] = { ...h, col: h.col - 1 }), a === "right" && (c[t] = { ...h, col: h.col + 1 }), a === "up" && (c[t] = { ...h, row: h.row - 1 }), a === "down" && (c[t] = { ...h, row: h.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Ae = { key: t, col: c[t].col, row: c[t].row }), zo(l, c), Ae && (la(), Ae = null, zo(ke(), $n())), Qa(), a === "graph" && (ze.delete("dash:energy"), Sa()), a.startsWith("h:") && t.includes(".") && Sa(), la(), a !== "hide" ? (g = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || g.focus() : Mn(Ba(t) + " hidden", ga(o));
  }
  const Ns = (t) => {
    var a;
    return he.includes(t) && !(((a = q.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function Xn(t) {
    const a = ke(), o = Ba(t) + Ns(t);
    Zr({ ...a, hidden: a.hidden.filter((l) => l !== t) }), la(), Mn(o);
  }
  const ts = () => ke().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ke().hidden.includes(t));
  function Pn(t, a) {
    const o = ke();
    zo({ ...o, tiles: t, hidden: o.hidden.filter((l) => !l.includes(".")) }, a), Sa(), va();
  }
  const vr = (t) => {
    Pn([...ts().filter((a) => a !== t), t], $n()), Mn(Ba(t) + " added"), Hs(t);
  }, xd = (t) => {
    const a = q, o = $n();
    delete o[t], Pn(ts().filter((l) => l !== t), o), Mn(Ba(t) + " removed", ga(a));
  };
  let br = 0;
  function Mn(t, a = null) {
    var u;
    const o = p("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(br), o.classList.remove("show", "withAction"), a();
      }), o.appendChild(g);
    }
    const l = m.getBoundingClientRect(), c = (u = n.querySelector(".bottomNav")) == null ? void 0 : u.getBoundingClientRect(), h = Be.classList.contains("open") && !In ? Math.min(l.right, Be.getBoundingClientRect().left) : l.right;
    o.style.left = (l.left + h) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!a), clearTimeout(br), br = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Ps = 700, Jn = 1e3, Ua = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Ua.setAttribute("role", "tooltip"), Ua.setAttribute("aria-hidden", "true"), m.appendChild(Ua);
  let es = null, Bi = 0, Sn = 0, Ml = -1 / 0;
  const wo = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, yd = (t) => {
    for (let a = t; a && a !== m; a = a.parentElement) if (wo(a)) return a;
    return null;
  };
  function Is(t, a) {
    clearTimeout(Bi), clearTimeout(Sn);
    const o = () => {
      if (!t.isConnected) return;
      es = t, Ua.textContent = a, Ua.hidden = !1;
      const l = t.getBoundingClientRect(), c = Ua.getBoundingClientRect(), h = l.top - c.height - 8 >= 8 ? l.top - c.height - 8 : l.bottom + 8;
      Ua.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, l.left + l.width / 2 - c.width / 2)) + "px", Ua.style.top = h + "px";
    };
    !Ua.hidden || performance.now() - Ml < Jn ? o() : Bi = setTimeout(o, Ps);
  }
  function Qn() {
    clearTimeout(Bi), clearTimeout(Sn), Ua.hidden || (Ml = performance.now()), Ua.hidden = !0, es = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Ua.contains(t.target)) {
      clearTimeout(Sn);
      return;
    }
    const a = yd(t.target);
    if (a && _t.names === "scroll" && a.matches(to)) {
      xo(a);
      return;
    }
    if (a) {
      a !== es ? Is(a, a.textContent.trim()) : clearTimeout(Sn);
      return;
    }
    clearTimeout(Bi), clearTimeout(Sn), Sn = setTimeout(Qn, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let o = [a, ...a.querySelectorAll("*")].filter(wo);
    _t.names === "scroll" && (o.filter((c) => c.matches(to)).forEach(xo), o = o.filter((c) => !c.matches(to))), o.length && Is(a, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === es && Qn();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Ua.hidden && (t.stopPropagation(), Qn());
  }, !0), window.addEventListener("scroll", () => {
    (!Ua.hidden || Bi) && Qn();
  }, { capture: !0, passive: !0 });
  const to = ".activityRowName,.activityRowMeta", Pe = /* @__PURE__ */ new WeakSet();
  function xo(t) {
    var o;
    if (_t.names !== "scroll" || Pe.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Pe.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((l) => l.getAnimations()).map((l) => l.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const l = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (l < 2) {
        Pe.delete(t);
        return;
      }
      const c = l / 30 * 1e3, h = c + 1e3 + c;
      t.style.textOverflow = "clip";
      const u = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -l + "px", offset: c / h },
        { textIndent: -l + "px", offset: (1e3 + c) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      u.onfinish = u.oncancel = () => {
        t.style.textOverflow = "", Pe.delete(t);
      };
    }, 600);
  }
  const wr = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (wr.unobserve(a.target), xo(a.target));
  }), { threshold: 1 });
  let xr = !1;
  new MutationObserver(() => {
    xr || _t.names !== "scroll" || (xr = !0, setTimeout(() => {
      xr = !1, n.querySelectorAll(to).forEach((t) => {
        !t.dataset.glided && wo(t) && (t.dataset.glided = "1", wr.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const ga = (t) => () => {
    q = t, Pa(), Sa(), la(), va();
  };
  function Hs(t) {
    const a = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var u;
      const o = a();
      if (!o) return;
      const l = (u = window.matchMedia) == null ? void 0 : u.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const h = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, Sl(t) ? 260 : 0);
  }
  function Sl(t) {
    const a = jo.get(t);
    if (!a || !Be.classList.contains("open") || In) return !1;
    const { n: o, w: l } = ua(S.clientWidth), c = Be.getBoundingClientRect().left - S.getBoundingClientRect().left, h = (y) => y * (l + qe) + a.cols * l + (a.cols - 1) * qe <= c;
    if (h(a.col)) return !1;
    const u = /* @__PURE__ */ new Set();
    jo.forEach((y, B) => {
      if (B !== t) for (let D = y.row; D < y.row + y.rows; D++) for (let I = y.col; I < y.col + y.cols; I++) u.add(I + "," + D);
    });
    const g = (y, B) => {
      for (let D = B; D < B + a.rows; D++) for (let I = y; I < y + a.cols; I++) if (u.has(I + "," + D)) return !1;
      return !0;
    };
    for (let y = 0; y <= Yr; y++) for (let B = 0; B + a.cols <= o && h(B); B++)
      if (g(B, y))
        return zo(ke(), { ...$n(), [t]: { col: B, row: y } }), la(), !0;
    return !1;
  }
  const Cl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Be = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Be.setAttribute("aria-label", "Edit the dashboard"), Be.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Be);
  let In = !1, eo = !1, ao = !1, yr = !1, Ra = null, hn = !1;
  const Vo = {}, Go = (t, a) => {
    if (Vo[t] === a) return;
    Vo[t] = a;
    const o = Be.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = a, ma(o);
  }, Fs = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + Q(Rt(t)) + '</span><span class="activityRowMeta">' + Q(a) + "</span></span>", Tl = (t, a, o) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + Q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + jd + '</span><span class="tfIcon"' + $e(t, Xa(t)) + "></span>" + Fs(t, a ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || Ue(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + Q(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + Q(Rt(t)) + ' on the dashboard">' + (a ? ap : Ah) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + Q(t) + '" aria-label="Remove ' + Q(Rt(t)) + ' from favourites">' + np + "</button>" : "<span></span>") + "</li>";
  function Al(t, a, o, l) {
    const c = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((u) => a(u) && !o.has(u) && k[u].state !== "unavailable").filter((u) => {
      const g = (Rt(u) + " " + (Se.get(u) || "") + " " + u).toLowerCase();
      return c.every((y) => g.includes(y));
    }).sort((u, g) => (Se.get(u) || "~").localeCompare(Se.get(g) || "~") || Rt(u).localeCompare(Rt(g))).slice(0, 40).map((u) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + Q(u) + '"><span class="tfIcon"' + $e(u, Xa(u)) + "></span>" + Fs(u, Se.get(u) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function va() {
    const t = Ha && m.classList.contains("tfBoard");
    if (Be.classList.toggle("open", t), Be.classList.toggle("tucked", t && In), Be.toggleAttribute("inert", !t), t || (hn = !1), Ko(), !t) return;
    const a = Be.querySelector("[data-tray-tuck]");
    a.innerHTML = In ? Gc : op, a.setAttribute("aria-expanded", String(!In)), a.setAttribute("aria-label", In ? "Show the edit tray" : "Tuck the edit tray away");
    const o = ke().hidden.filter((u) => mr().some((g) => g.key === u));
    Go("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((u) => '<button class="tfTrayCard" type="button" data-tray-card="' + Q(u) + '" aria-label="' + Q(Ba(u)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + jd + "</span>" + Q(Ba(u)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Go("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ke().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + hn + '">' + (hn ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(q.favHidden || []), c = Va(), h = [...c, ...[...l].filter((u) => !c.includes(u) && k[u])];
    if (Go("favs", h.map((u) => Tl(u, l.has(u), c.includes(u))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Be.querySelector('[data-pick="tiles"]').hidden = !ao, Be.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ao)), ao && Go("tilepick", Al(Be.querySelector("[data-tile-search]").value, (u) => td.includes(u.split(".")[0]), new Set(ts()), "data-tile-pick")), Be.querySelector('[data-tray="roompick"]').hidden = !yr, Be.querySelector("[data-room-add]").setAttribute("aria-expanded", String(yr)), yr) {
      const u = new Set(ts());
      Go("roompick", jn.filter((g) => !u.has("room:" + g.id)).map((g) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + Q(g.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + $e("area:" + g.id, g.icon || "mdi:texture-box", g.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + Q(g.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Be.querySelector('[data-pick="favs"]').hidden = !eo, Be.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(eo)), eo && Go("pick", Al(Be.querySelector("[data-fav-search]").value, (u) => Cl.test(u), new Set(Va()), "data-fav-pick")), Go("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (ir() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ir() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Ri = (t) => {
    q = { ...q, ...t }, Pa(), Sa(), va();
  };
  function Uo(t, a) {
    const o = q, l = new Set(q.favHidden || []);
    a ? l.delete(t) : l.add(t), Ri({ favHidden: [...l] }), a ? Mn(Rt(t) + " put back") : Mn(Rt(t) + " hidden", ga(o));
  }
  const Yo = (t) => {
    const a = q;
    Ri({ favourites: Va().filter((o) => o !== t), favHidden: (q.favHidden || []).filter((o) => o !== t) }), Mn(Rt(t) + " removed from favourites", ga(a));
  }, yo = (t) => {
    Ri({ favourites: [...Va().filter((a) => a !== t), t], favHidden: (q.favHidden || []).filter((a) => a !== t) }), Mn(Rt(t) + " added to favourites");
  };
  Be.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? Qr(!1) : a.hasAttribute("data-tray-tuck") ? (In = !In, va()) : a.hasAttribute("data-phone-toggle") ? (hn = !hn, va(), hn && ((o = Ya.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (Xn(a.dataset.trayCard), va()) : a.dataset.favEye ? Uo(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? Yo(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (eo = !eo, va(), eo && Be.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? yo(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (ao = !ao, va(), ao && Be.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? vr(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (yr = !yr, va()) : a.dataset.roomPick ? vr("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Ri({ suggest: !ir() }));
  }), Be.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && va();
  }), Be.addEventListener("keydown", (t) => {
    var o, l;
    const a = !!((l = (o = t.target).closest) != null && l.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? ao : eo) || (t.stopPropagation(), a ? ao = !1 : eo = !1, va(), Be.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Os(t, a, o, l) {
    t.preventDefault();
    const c = t.clientX, h = t.clientY;
    let u = null, g = 0;
    const y = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), B = (I) => {
      if (!u) {
        if (Math.hypot(I.clientX - c, I.clientY - h) < 4) return;
        u = a.cloneNode(!0), u.classList.add("tfTrayGhost"), u.style.width = a.offsetWidth + "px", m.appendChild(u);
      }
      u.style.transform = "translate(" + (I.clientX - 24) + "px," + (I.clientY - 24) + "px)";
      const X = !In && I.clientX >= Be.getBoundingClientRect().left;
      if (o === "card") {
        const nt = S.getBoundingClientRect(), { w: bt } = ua(S.clientWidth);
        Ae = !X && I.clientX >= nt.left && I.clientX <= nt.right && I.clientY >= nt.top + bo ? { key: l, col: Math.max(0, Math.floor((I.clientX - nt.left) / (bt + qe))), row: Math.max(0, Math.floor((I.clientY - nt.top - bo) / Ga)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, la();
        }));
        return;
      }
      const Z = S.querySelector(".tfDash-favs"), Mt = Z == null ? void 0 : Z.getBoundingClientRect();
      if (Ra = null, Mt && !X && I.clientX >= Mt.left && I.clientX <= Mt.right && I.clientY >= Mt.top && I.clientY <= Mt.bottom) {
        let nt = 1 / 0;
        Z.querySelectorAll('[data-k^="fav:"]').forEach((bt, W) => {
          const kt = bt.getBoundingClientRect(), V = Math.hypot(I.clientX - (kt.left + kt.width / 2), I.clientY - (kt.top + kt.height / 2));
          V < nt && (nt = V, Ra = { i: W, r: kt, after: I.clientX > kt.left + kt.width / 2 });
        }), Ra || (Ra = { i: 0, r: null, after: !1 });
      }
      Ra != null && Ra.r ? (y.isConnected || m.appendChild(y), Object.assign(y.style, { left: (Ra.after ? Ra.r.right : Ra.r.left) - 2 + "px", top: Ra.r.top + 8 + "px", height: Ra.r.height - 16 + "px" })) : y.remove();
    }, D = () => {
      if (window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", D), window.removeEventListener("pointercancel", D), cancelAnimationFrame(g), u == null || u.remove(), y.remove(), o === "card") {
        if (!u) Xn(l);
        else if (Ae != null && Ae.fromTray) {
          la();
          const nt = Ba(l) + Ns(l), bt = ke(), W = $n();
          Ae = null, zo({ ...bt, hidden: bt.hidden.filter((kt) => kt !== l) }, W), Mn(nt);
        }
        Ae = null, la(), Sa(), va();
        return;
      }
      if (!Ra) return;
      const I = new Set(q.favHidden || []);
      I.delete(l);
      const X = Va().filter((nt) => nt !== l), Z = X.filter((nt) => !I.has(nt)), Mt = Z[Math.min(Ra.i + (Ra.after ? 1 : 0), Z.length)];
      X.splice(Mt ? X.indexOf(Mt) : X.length, 0, l), Ra = null, Ri({ favourites: X, favHidden: [...I] }), Mn(Rt(l) + " put back");
    };
    window.addEventListener("pointermove", B), window.addEventListener("pointerup", D), window.addEventListener("pointercancel", D);
  }
  const Zo = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, Ll = 136, kr = 288, kd = 0.8, Ni = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Ya = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Ya.setAttribute("aria-label", "Phone order"), Ya.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + np + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(Ya);
  let Mr = "";
  function Ko() {
    var g;
    const t = hn && Ha && m.classList.contains("tfBoard") && !In;
    if (Ya.classList.toggle("open", t), Ya.toggleAttribute("inert", !t), !t) return;
    const a = Xr().filter((y) => !ke().hidden.includes(y.key)), o = a.length, l = (y) => Math.round(y * kd * 10) / 10 + "px", c = (y, B) => {
      const D = y.el.classList.contains("tfDac"), I = y.tile ? D ? kr : Ll : Zo[y.key] || Ll;
      return '<button class="tfPhoneBlock' + (y.tile ? " tile" : "") + '" type="button" data-phone-key="' + Q(y.key) + '" style="min-height:' + l(I) + '" aria-label="' + Q(Ba(y.key) + ", " + (B + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (y.tile ? $e(y.key, Xa(y.key)) : $e(y.key, Ni[y.key])) + '></span><span class="tfPhoneName">' + Q(Ba(y.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + Q(((g = S.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(Zo.sums) + '"><span class="tfPhoneName">' + Q(Ba("sums")) + "</span></div>" + a.map(c).join("");
    if (Ya.querySelector('[data-phone="note"]').innerHTML = ke().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === Mr) return;
    Mr = h;
    const u = Ya.querySelector('[data-phone="list"]');
    u.innerHTML = h, ma(u);
  }
  function Pi(t, a) {
    var o;
    Zr({ ...ke(), phone: t }), va(), a && ((o = Ya.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const Sr = () => [...Ya.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Ws(t, a) {
    t.preventDefault();
    const o = a.parentElement, l = Ya.querySelector(".tfPhoneScreen"), c = Sr().join();
    a.classList.add("moving");
    const h = (g) => {
      const y = l.getBoundingClientRect();
      g.clientY > y.bottom - 40 ? l.scrollTop += 12 : g.clientY < y.top + 40 && (l.scrollTop -= 12);
      const B = [...o.querySelectorAll("[data-phone-key]")].find((X) => {
        const Z = X.getBoundingClientRect();
        return X !== a && g.clientX >= Z.left && g.clientX <= Z.right && g.clientY >= Z.top && g.clientY <= Z.bottom;
      });
      if (!B) return;
      const D = B.getBoundingClientRect(), I = B.classList.contains("tile") ? g.clientX < D.left + D.width / 2 : g.clientY < D.top + D.height / 2;
      o.insertBefore(a, I ? B : B.nextSibling);
    }, u = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const g = Sr();
      Mr = "", g.join() !== c ? Pi(g) : Ko();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  Ya.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && Ws(t, a);
  }), Ya.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      hn = !1, va(), (o = Be.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...c } = ke();
      Zr(c), va();
    }
  }), Ya.addEventListener("keydown", (t) => {
    var u, g, y, B;
    if (t.key === "Escape") {
      t.stopPropagation(), hn = !1, va(), (u = Be.querySelector("[data-phone-toggle]")) == null || u.focus({ preventScroll: !0 });
      return;
    }
    const a = (B = (y = (g = t.target).closest) == null ? void 0 : y.call(g, "[data-phone-key]")) == null ? void 0 : B.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !o) return;
    t.preventDefault();
    const l = Sr(), c = l.indexOf(a), h = c + o;
    h < 0 || h >= l.length || ([l[c], l[h]] = [l[h], l[c]], Pi(l, a));
  });
  function Ii(t, a) {
    t.preventDefault();
    const o = a.parentElement;
    a.classList.add("moving");
    const l = (h) => {
      const u = [...o.children].find((g) => {
        const y = g.getBoundingClientRect();
        return g !== a && h.clientY >= y.top && h.clientY <= y.bottom;
      });
      if (u) {
        const g = u.getBoundingClientRect();
        o.insertBefore(a, h.clientY < g.top + g.height / 2 ? u : u.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), a.classList.remove("moving");
      const h = new Set(Va());
      Vo.favs = null, Ri({ favourites: [...o.children].map((u) => u.dataset.trayFav).filter((u) => h.has(u)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Be.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    a ? Os(t, a, "card", a.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? Ii(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && Os(t, o, "fav", o.dataset.trayFav);
  });
  function Hi(t) {
    if (!Ha || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), o = a && mr().find((I) => I.el === a);
    if (!o || Kn.includes(o.key)) return;
    const l = jo.get(o.key), { w: c } = ua(S.clientWidth);
    if (!l) return;
    t.preventDefault(), Qa();
    const h = t.clientX, u = t.clientY;
    let g = !1, y = 0;
    const B = (I) => {
      const X = I.clientX - h, Z = I.clientY - u;
      if (!g) {
        if (Math.hypot(X, Z) < 4) return;
        g = !0, Ae = { key: o.key, col: l.col, row: l.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + X + "px," + Z + "px)", Ae.col = Math.round((l.x + X) / (c + qe)), Ae.row = Math.round((l.y + Z - bo) / Ga), y || (y = requestAnimationFrame(() => {
        y = 0, la();
      }));
    }, D = () => {
      window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", D), window.removeEventListener("pointercancel", D), g && (cancelAnimationFrame(y), la(), a.classList.remove("tfDragging"), a.style.transform = "", Ae = null, zo(ke(), $n()), la(), Sa());
    };
    window.addEventListener("pointermove", B), window.addEventListener("pointerup", D), window.addEventListener("pointercancel", D);
  }
  function Za(t = !1) {
    const a = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const o = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === o) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = o;
    const c = As.find((h) => h.id === a.dataset.graph);
    c ? ur(a, c).then(() => {
      (t || l) && Es(a);
    }) : ps(a.dataset.graph, a).then(() => {
      t && gd(a);
    });
  }
  function qs() {
    var g, y, B;
    ve = we.model(i()), or(), k = ve.states, k[(g = q.sources) == null ? void 0 : g.grid] && (ve.grid = q.sources.grid), k[(y = q.sources) == null ? void 0 : y.alarm] && (ve.security.alarms = [q.sources.alarm]), P.forEach((D, I) => {
      const X = k[I], Z = (X == null ? void 0 : X.attributes) || {};
      if (!X || Date.now() - D.at > 2 * 60 * 1e3) {
        P.delete(I);
        return;
      }
      D.pos != null && X.state !== "opening" && X.state !== "closing" && Math.abs(Ln(I) - D.pos) < 1 && delete D.pos, D.tilt != null && Math.abs((Z.current_tilt_position ?? -1) - D.tilt) < 1 && delete D.tilt, D.pos == null && D.tilt == null && P.delete(I);
    });
    const t = [];
    let a = 0;
    const o = pd();
    jn = o.filter((D) => D.room).map((D) => D.room), jn.some((D) => D.id === Pt) || (Pt = ((B = jn[0]) == null ? void 0 : B.id) || null);
    const l = G === "weather" ? { key: "weather", name: "Weather" } : G && o.find((D) => D.key === G);
    if (l || (G = null), m.classList.toggle("tfAreaOpen", !!l), m.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), m.classList.toggle("tfDash", !l), Se = /* @__PURE__ */ new Map(), ve.rooms.forEach((D) => [...D.actions, ...D.plugs, ...D.readings, ...D.openings, ...D.solar, ...D.plants.flatMap((I) => [I.id, ...I.readings])].forEach((I) => Se.set(I, D.name))), !l) return Ci(t, bi());
    if (t.push({ key: "areahead", html: El(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const c = l.ids, h = l.room ? l.room.id : l.key, u = l.room;
    return u != null && u.solar.length && t.push({ key: "energy:" + u.id, html: H(u, ++a) }), u && (u.readings.length || u.plugs.length || u.power != null) && t.push({ key: "readings:" + u.id, html: L(u, ++a) }), u == null || u.plants.forEach((D) => t.push({ key: "plant:" + D.id, html: Y(D, ++a) })), c.length && t.push({ key: "block:" + h, order: ++a, tiles: c.map((D) => ({ key: D, html: Ie(D) })) }), t;
  }
  const El = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Gc + '</button><div class="settingsTitle">' + Q(t.name) + "</div></div>";
  let as = 0, _l = null;
  const ns = (t) => t === "weather" ? ra.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function os(t) {
    var a, o;
    G || (as = $o().scrollTop, _l = ((a = ns(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), G = t, t.startsWith("room:") && (Pt = t.slice(5)), oa(), $o().scrollTop = 0, (o = S.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let ko = null;
  function js(t, a) {
    if (ko == null || ko(), a == null) return;
    const o = $o(), l = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const u = () => {
      cancelAnimationFrame(h), c.forEach((y) => window.removeEventListener(y, u, !0)), ko = null;
    }, g = () => {
      const y = t();
      if (y != null && y.isConnected) {
        const B = y.getBoundingClientRect().top - a;
        Math.abs(B) > 0.5 && (o.scrollTop += B);
      }
      performance.now() < l ? h = requestAnimationFrame(g) : u();
    };
    c.forEach((y) => window.addEventListener(y, u, { capture: !0, passive: !0 })), ko = u, g();
  }
  function Mo() {
    var o;
    const t = G;
    G = null, oa(), $o().scrollTop = as, js(() => ns(t), _l);
    const a = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ra.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || o.focus({ preventScroll: !0 });
  }
  const Dl = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + Q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Bl = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function $o() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function zs(t) {
    const a = $o(), o = (g) => {
      const y = g.getBoundingClientRect();
      return y.height && y.bottom > 0 && y.top < window.innerHeight;
    }, l = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && o(g)), c = l == null ? void 0 : l.dataset.k, h = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const u = l != null && l.isConnected ? l : c && S.querySelector('[data-k="' + CSS.escape(c) + '"]');
    u != null && u.isConnected && h != null && (a.scrollTop += u.getBoundingClientRect().top - h);
  }
  function oa() {
    if (!w || !S) return;
    const t = qs(), a = (c) => {
      var h;
      return (((h = c.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    S.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(a(c)) || o.set(a(c), []).get(a(c))).push(c.firstElementChild);
    }), S.querySelectorAll("[data-tf]").forEach((c) => c.remove()), ze.clear();
    const l = document.createElement("div");
    l.innerHTML = t.map((c) => c.tiles ? Dl(c) : c.html).join(""), t.forEach((c) => c.tiles ? c.tiles.forEach((h) => ze.set(h.key, h.html)) : ze.set(c.key, c.html)), Nr = Bl(t), l.querySelectorAll("[data-icon-for]").forEach((c) => {
      var u;
      const h = !c.firstElementChild && ((u = o.get(a(c))) == null ? void 0 : u.shift());
      h && c.appendChild(h);
    }), S.append(...l.children), $i(t.weather), Xi(), Jr.disconnect(), la(), ma(S), ss(S), yn(S), z(), at && ps(at.id), Co(), Fi(), Ol(), requestAnimationFrame(ht);
  }
  const da = (t) => {
    var o;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (o = a.dataset) == null ? void 0 : o.act };
  }, Cr = (t, a) => {
    var o;
    a && ((o = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Vs(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), l = a.querySelector(":scope > .tfDacPad");
    if (o)
      return (l == null ? void 0 : l.dataset.dac) !== o.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((u) => a.hasAttribute(u) ? t.setAttribute(u, a.getAttribute(u)) : t.removeAttribute(u)), [...t.style].filter((u) => u.startsWith("--") && !u.startsWith("--tf-")).forEach((u) => t.style.removeProperty(u)), [...a.style].forEach((u) => t.style.setProperty(u, a.style.getPropertyValue(u))), t);
    const c = (u) => {
      var g;
      return ((g = u.dataset) == null ? void 0 : g.iconFor) !== void 0;
    };
    if (c(t) && c(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((u) => {
        a.hasAttribute(u.name) || t.removeAttribute(u.name);
      }), [...a.attributes].forEach((u) => {
        t.getAttribute(u.name) !== u.value && t.setAttribute(u.name, u.value);
      }), t;
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((u) => {
      a.hasAttribute(u.name) || t.removeAttribute(u.name);
    }), [...a.attributes].forEach((u) => t.setAttribute(u.name, u.value));
    const h = [...a.children];
    return [...t.children].forEach((u, g) => Vs(u, h[g])), t;
  }
  function Rl(t, a) {
    const o = document.createElement("div");
    o.innerHTML = a;
    const l = da(t), c = Vs(t, o.firstElementChild);
    ma(c), ss(c), yn(c), Cr(c, l);
  }
  function Sa() {
    !w || !S || Ae || zs(Nl);
  }
  function Nl() {
    if (!S.querySelector("[data-tf]")) {
      oa();
      return;
    }
    const t = qs();
    if (Bl(t) !== Nr) {
      oa();
      return;
    }
    const a = (o) => [...M.keys()].some((l) => {
      const c = l.slice(l.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((l) => {
      if (ze.get(l.key) === l.html || a(l.key)) return;
      const c = S.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (c) {
        if (ze.set(l.key, l.html), at && at.key === l.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = No(at.id);
          return;
        }
        Rl(c, l.html), at && at.key === l.key && ps(at.id), l.key.startsWith("energy:") && Co();
      }
    })), Fi(), Ol(), Da(), z(), Qt == null || Qt.update(), Ma == null || Ma.forEach((o) => o.update()), m.classList.contains("tfDash") && Ja(), requestAnimationFrame(ht);
  }
  const is = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && _e(t.color_mode)]],
    climate: (t) => [["Current temperature", Ta(t.current_temperature) + " °C"], ["Target", Ta(t.temperature) + " °C"], ["Action", _e(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", _e(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", _e(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ta(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : _e(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Pl = (t) => {
    var o;
    const a = (((o = is[t.split(".")[0]]) == null ? void 0 : o.call(is, Kt(t))) || []).filter(([, l]) => l != null && l !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([l, c]) => '<div class="tfMoreRow"><span>' + Q(l) + "</span><span>" + Q(c) + "</span></div>").join("") + "</div>" : "";
  }, Il = (t) => Vi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Xo(t, a = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + Q(l.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + l.ids.map((c) => Ho(c, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const le = document.createElement("div");
  le.className = "tfMoreBackdrop", le.hidden = !0, m.appendChild(le);
  const Hl = (t, a) => {
    for (let o = t; o && o !== le; o = o.parentElement) {
      const l = getComputedStyle(o).overflowY;
      if ((l === "auto" || l === "scroll") && o.scrollHeight > o.clientHeight + 1 && (a < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let tn = null;
  le.addEventListener("touchstart", (t) => {
    tn = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), le.addEventListener("touchmove", (t) => {
    var c, h;
    if (!tn || t.touches.length > 1 || (h = (c = t.target).closest) != null && h.call(c, "input,textarea,select")) return;
    const a = t.touches[0], o = tn.x - a.clientX, l = tn.y - a.clientY;
    tn = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(o) && !Hl(t.target, l) && t.preventDefault();
  }, { passive: !1 }), le.addEventListener("wheel", (t) => {
    Hl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Tr() {
    const t = le.querySelector(".tfMorePair"), a = le.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Tr, { passive: !0 }), w && Ke();
  let So = [];
  const Jo = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function rs(t) {
    const a = (y, B = "") => '<div class="tfMoreHead">' + (wt != null && wt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Wd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + Q(y) + "</div>" + B + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", o = (y, B) => '<div class="tfMoreNow"><div class="tfMoreState">' + Q(y) + "</div>" + (B ? '<div class="tfMoreSub">' + Q(B) + "</div>" : "") + "</div>", l = Xo;
    if (t === "favourites") {
      const y = Va(), B = new Set(y), D = [{ name: "Starred", ids: y }, { name: "Home", ids: ve.homeVacuums }, { name: "Security", ids: [...ve.security.alarms, ...ve.security.locks] }, ...ve.rooms.map((I) => ({ name: I.name, ids: [...I.actions, ...I.plugs] }))].map((I, X) => X ? { ...I, ids: I.ids.filter((Z) => !B.has(Z)) } : I).filter((I) => I.ids.length);
      return [a("Favourites"), o(y.length ? y.length + " starred" : "None starred"), l(D, { star: !0 }, !0)];
    }
    const c = (y, { name: B = "", alert: D = !1, plain: I = !1 } = {}) => {
      const X = I ? [] : y.filter((nt) => td.includes(nt.split(".")[0])), Z = y.filter((nt) => !X.includes(nt)), Mt = (nt) => nt.startsWith("vacuum.") && Kt(nt).battery_level != null ? Kt(nt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (B ? '<div class="tfMoreGroupName">' + Q(B) + "</div>" : "") + '<div class="tfMoreActions">' + X.map((nt) => Ie(nt, !0)).join("") + Z.map((nt) => Ho(nt, { plain: I, alert: D, say: I ? Mt(nt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const y = bi().find((X) => X.key === t.slice(8));
      if (!y) return null;
      const B = y.key === "light" ? (y.groups || []).flatMap((X) => X.ids) : [], D = B.some((X) => {
        var Z;
        return ((Z = k[X]) == null ? void 0 : Z.state) === "on";
      }), I = B.length ? '<button class="primary" type="button" data-acts="' + cn(B.map((X) => ["light", D ? "turn_off" : "turn_on", X])) + '">' + (D ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(y.name), '<div class="tfMoreNowRow">' + o(y.value) + I + "</div>", ...(y.groups || []).map((X) => c(X.ids, { name: X.name === y.name ? "" : X.name, alert: X.alert, plain: y.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, y, B] = t.split(":"), D = ve.rooms.find((Z) => Z.id === y), I = D && Hr(D).find((Z) => Z.key === B);
      if (!I) return null;
      const X = I.acts ? '<button class="primary" type="button" data-acts="' + cn(I.acts) + '">' + (I.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(D.name + " " + I.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(I.value) + X + "</div>", c(fo(D, B))];
    }
    const h = t.split(".")[0], u = k[t], g = td.includes(h) ? tr(t) : { sections: [] };
    return [
      a(Rt(t)),
      o(Ue(t), u.last_changed && Ji(Date.parse(u.last_changed))),
      (wt == null ? void 0 : wt.at) && '<svg class="tfGraph tfDay" data-day="' + Q(t) + '" role="img" aria-label="' + Q(Rt(t)) + ', last 24 hours"></svg>',
      h === "cover" && '<div data-cover-art="' + Q(t) + '"></div>',
      ...g.sections.filter(Boolean),
      Gs(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(wt != null && wt.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + op + "</button>"
    ].filter(Boolean);
  }
  const Gs = (t) => Jo(t) ? "" : Pl(t) + Il(t);
  let Ar = "";
  function Us(t) {
    var a;
    wt && (wt.details = t, Fi(), (a = le.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Oa = (t) => {
    const a = k[t], o = Ln(t), l = Te(t);
    return { kind: Od(a), name: Rt(t), text: Ue(t), pos: o, target: Math.abs(l - o) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: Aa(t) ?? 100, canSet: Gt(t, Xc) };
  };
  function ss(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const o = a.dataset.coverArt, l = a.dataset.artKey || "more:" + o;
      let c = ft.get(l);
      c || (c = ch({ onMove: (h) => Wi(o, h), onSet: (h) => {
        Wi(o, h), To("pos", o);
      } }), c.coverId = o, ft.set(l, c)), a.replaceWith(c.el), c.update(Oa(o));
    });
  }
  const Fl = (t) => [...ft.values()].filter((a) => a.coverId === t), Ys = () => ft.forEach((t) => {
    k[t.coverId] && t.update(Oa(t.coverId));
  }), Ol = () => {
    ft.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), ft.delete(a));
    }), Ys();
  };
  function Fi() {
    var h, u;
    if (!wt || !(Jo(wt.id) || k[wt.id])) {
      le.hidden = !0;
      return;
    }
    if ([...M.keys()].some((g) => g.endsWith("|" + wt.id))) {
      Ys();
      return;
    }
    const t = rs(wt.id), a = le.querySelector(".tfMore");
    if (!t) {
      ls();
      return;
    }
    const o = da(le), l = Gs(wt.id), c = wt.frame ? wt.frame.wide : wt.id.startsWith("summary:") || wt.id.startsWith("group:");
    if (le.hidden || !a || t.length !== So.length || a.classList.contains("wide") !== c) {
      const g = Wa ? wt.scroll || 0 : !le.hidden && a ? a.scrollTop : 0;
      le.innerHTML = '<div class="tfMorePair' + (le.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (wt.frame ? ' style="height:' + wt.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (l ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Wd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + l + "</div></div></aside>" : "") + "</div>", Ar = l, le.classList.toggle("wide", c), le.hidden = !1, Tr(), ss(le), yn(le), ma(le), le.querySelectorAll("[data-day]").forEach((y) => cs(y.dataset.day, y, wt.at)), g && (le.querySelector(".tfMore").scrollTop = g), Cr(le, o), le.contains(n.activeElement) || (h = le.querySelector("[data-more-close]")) == null || h.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((g, y) => {
        var I, X;
        if (g === So[y] || g.includes("data-cover-art") || a.children[y].contains((X = (I = n.activeElement) == null ? void 0 : I.matches) != null && X.call(I, "input,select") ? n.activeElement : null) || [...M.keys()].some((Z) => a.children[y].querySelector('[data-drag="' + CSS.escape(Z) + '"]'))) return;
        const B = document.createElement("div");
        B.innerHTML = g;
        const D = Vs(a.children[y], B.firstElementChild);
        ma(D), yn(D);
      }), l !== Ar) {
        const g = le.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = l), Ar = l;
      }
      le.contains(n.activeElement) || Cr(le, o);
    }
    (u = le.querySelector(".tfMorePair")) == null || u.classList.toggle("details", !!(wt.details && l)), So = t, Ys();
  }
  setInterval(() => {
    wt && Fi();
  }, 15 * 1e3);
  function Zs(t, a) {
    var c;
    const o = !!(wt && a && le.contains(a)), l = o && le.querySelector(".tfMore");
    o && (wt.scroll = l.scrollTop), wt = { id: t, opener: o ? wt.opener : a, back: o ? wt : null, frame: o ? wt.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((c = a == null ? void 0 : a.dataset) == null ? void 0 : c.at) || null }, Ks();
  }
  let Wa = !1;
  function Ks() {
    So = [], Wa = !le.hidden, ft.forEach((t, a) => {
      a !== wt.id && le.contains(t.el) && (t.destroy(), ft.delete(a));
    }), Fi(), Wa = !1;
  }
  function ls() {
    var o, l, c, h, u, g;
    const t = wt == null ? void 0 : wt.opener;
    wt = null, ft.forEach((y, B) => {
      le.contains(y.el) && (y.destroy(), ft.delete(B));
    }), sa.forEach((y, B) => {
      B.startsWith("more:") && sa.delete(B);
    }), le.hidden = !0, le.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (o = t == null ? void 0 : t.dataset) != null && o.more ? (l = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (c = t == null ? void 0 : t.dataset) != null && c.summary ? (h = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (u = t == null ? void 0 : t.hasAttribute) != null && u.call(t, "data-favs-edit") && ((g = S.querySelector("[data-favs-edit]")) == null || g.focus(a));
  }
  function Qo(t, a, o, l = {}) {
    const c = a.map((bt) => bt[1]), h = l.zero ? 0 : Math.min(...c), u = Math.max(...c), g = Math.max(120, t.clientWidth || 260), y = Math.max(60, t.clientHeight || 130), B = 8, D = y - 20, I = Date.now() - 24 * 3600 * 1e3, X = 24 * 3600 * 1e3, Z = (bt) => Math.max(0, Math.min(g, (bt - I) / X * g)), Mt = (bt) => u === h ? (B + D) / 2 : D - (bt - h) / (u - h) * (D - B);
    let nt = "M" + Z(a[0][0]).toFixed(1) + " " + Mt(a[0][1]).toFixed(1);
    for (let bt = 1; bt < a.length; bt++) nt += l.smooth ? "L" + Z(a[bt][0]).toFixed(1) + " " + Mt(a[bt][1]).toFixed(1) : "H" + Z(a[bt][0]).toFixed(1) + "V" + Mt(a[bt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + g + " " + y), t.setAttribute("aria-label", o), t.innerHTML = '<path d="' + nt + "V" + D + "H" + Z(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + nt + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (y - 4) + '">24 h ago</text><text x="' + g + '" y="' + (y - 4) + '" text-anchor="end">Now</text>';
  }
  const Oi = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, $s = (t, a) => {
    const o = t.split(".")[0];
    return Oi[o] ? Oi[o].includes(a) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, Md = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (Ql.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Lr = /* @__PURE__ */ new Map();
  let ds = 0;
  async function ti(t) {
    let a = Lr.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let c = [];
      try {
        const h = await N({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((h == null ? void 0 : h[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      c.length || (c = (Vn || []).filter((h) => h.entity_id === t).map((h) => [h.when * 1e3, String(h.state)])), a = { at: Date.now(), pts: c }, Lr.set(t, a);
    }
    const o = k[t], l = a.pts.slice().sort((c, h) => c[0] - h[0]);
    return o && (!l.length || l[l.length - 1][1] !== o.state) && l.push([Date.parse(o.last_changed) || Date.now(), o.state]), l;
  }
  async function cs(t, a, o) {
    const l = await ti(t);
    if (!a.isConnected) return;
    const c = l.map(([V, qt]) => [V, Number(qt)]);
    if (l.length > 1 && c.every(([, V]) => Number.isFinite(V))) {
      Qo(a, c, Rt(t) + ", last 24 hours");
      return;
    }
    const h = Date.now(), u = h - 864e5, g = Math.max(200, a.clientWidth || 360), y = 62, B = (V) => Math.max(0, Math.min(g, (V - u) / 864e5 * g)), D = [];
    let I = null;
    l.forEach(([V, qt]) => {
      const He = $s(t, qt);
      He && I == null ? I = Math.max(V, u) : !He && I != null && (D.push([I, Math.max(V, u)]), I = null);
    }), I != null && D.push([I, h]);
    const X = cr(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", Z = Md(t), Mt = "tfDayClip" + ++ds, nt = D.map(([V, qt]) => Z + (qt >= h - 1e3 && V <= u + 1e3 ? " all day" : qt >= h - 1e3 ? " since " + wn(V) : V <= u + 1e3 ? " until " + wn(qt) : " " + wn(V) + "–" + wn(qt)));
    let bt = "", W = -1 / 0;
    D.forEach(([V], qt) => {
      const He = nt[qt].length * 5.4, be = Math.min(B(V), g - He);
      be < W + 8 || (bt += '<text x="' + be.toFixed(1) + '" y="10">' + Q(nt[qt]) + "</text>", W = be + He);
    });
    let kt = '<text x="' + g + '" y="' + (y - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((V) => {
      let qt = new Date(h).setHours(V, 0, 0, 0);
      qt > h && (qt -= 864e5), B(qt) > 8 && B(qt) < g - 34 && (kt += '<text x="' + B(qt).toFixed(1) + '" y="' + (y - 2) + '" text-anchor="middle">' + String(V).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + g + " " + y), a.setAttribute("aria-label", Rt(t) + ", last 24 hours: " + (nt.length ? nt.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + Mt + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + bt + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Mt + ')">' + D.map(([V, qt]) => '<rect x="' + B(V).toFixed(1) + '" y="18" width="' + Math.max(2, B(qt) - B(V)).toFixed(1) + '" height="26" fill="' + X + '"/>').join("") + "</g>" + (o && o >= u ? '<line x1="' + B(o).toFixed(1) + '" x2="' + B(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + kt;
  }
  function Wl(t) {
    var l;
    const a = Number((l = k[t]) == null ? void 0 : l.state), o = Date.now();
    if (Kt(t).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - c);
      return [...Array(49)].map((u, g) => c + h * g / 48).map((u) => [u, Math.round(a * Math.pow((u - c) / h, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function ps(t, a) {
    var Z, Mt;
    let o = j.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: vc() };
    else if (Vi(t)) o = { at: Date.now(), points: Wl(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const nt = new Date(Date.now() - 864e5).toISOString(), bt = await N({ type: "history/history_during_period", start_time: nt, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), W = ((bt == null ? void 0 : bt[t]) || []).map((kt) => [kt.lu != null ? kt.lu * 1e3 : Date.parse(kt.last_updated || kt.last_changed), Number(kt.s ?? kt.state)]).filter(([kt, V]) => Number.isFinite(kt) && Number.isFinite(V));
        o = { at: Date.now(), points: W };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      j.set(t, o);
    }
    const l = a || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const c = k[t], h = ((Z = c == null ? void 0 : c.attributes) == null ? void 0 : Z.unit_of_measurement) || "", u = o.points.slice(), g = Number(c == null ? void 0 : c.state);
    if (Number.isFinite(g) && !t.endsWith("_solar_power") && u.push([Date.now(), g]), u.length < 2) {
      l.setAttribute("aria-label", Rt(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = u.map((nt) => nt[1]), B = Math.min(...y), D = Math.max(...y), I = (nt) => nt.toLocaleString(void 0, { maximumFractionDigits: Math.abs(nt) >= 100 ? 0 : 1 }), X = ((Mt = c == null ? void 0 : c.attributes) == null ? void 0 : Mt.state_class) === "total_increasing";
    Qo(l, u, Rt(t) + ", last 24 hours: " + (X ? "+" + I(y[y.length - 1] - y[0]) : B === D ? I(B) : I(B) + " to " + I(D)) + (h ? " " + h : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Co() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const a = vc();
    Qo(t, a, "Solar, last 24 hours: up to " + Ta(Math.max(...a.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function ql(t, a) {
    const o = a.entity_id, l = P.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Ln(o) > 0 ? 0 : 100 }[t], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    c != null && (l.pos = c), h != null && (l.tilt = h), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), P.set(o, l);
  }
  function ta(t, a, o) {
    var c;
    const l = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof l != "string" || !vt[l] || !bn(l) || o.brightness_pct != null || o.brightness != null ? [a, o] : a !== "turn_on" && !(a === "toggle" && ((c = k[l]) == null ? void 0 : c.state) !== "on") ? [a, o] : ["turn_on", { ...o, brightness_pct: vt[l] }];
  }
  function us(t, a, o, l) {
    let c = { entity_id: o, ...l || {} };
    return [a, c] = ta(t, a, c), t === "cover" && ql(a, c), ea[o] = (ea[o] || 0) + 1, Yi.set(tp, JSON.stringify(ea)), we.call(t, a, c) ? Promise.resolve() : Promise.resolve(xt(t, a, c));
  }
  function Cn(t) {
    const [a, o, l, c] = t.split("|");
    us(a, o, l, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function Wi(t, a) {
    M.set("pos|" + t, a), ze.delete(t), So = So.map(() => ""), [S, le].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((c) => $t(c, a)));
    const o = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(a) + "%"), (wt == null ? void 0 : wt.id) === t) {
      const l = le.querySelector(".tfMoreState"), c = le.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), c && (c.textContent = "Currently " + Ln(t) + "%");
    }
    Fl(t).forEach((l) => l.update(Oa(t)));
  }
  const Sd = (t, a) => {
    const o = t.shiftKey ? 10 : 1, l = { ArrowUp: a + o, ArrowRight: a + o, ArrowDown: a - o, ArrowLeft: a - o, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function Xs(t, a) {
    var nt;
    const o = t.dataset.blocks;
    (nt = t.setPointerCapture) == null || nt.call(t, a.pointerId);
    const l = (bt) => {
      const W = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (bt.clientX - W.left) / W.width * 100));
    }, c = l(a), h = a.clientX;
    let u = !1, g = Te(o), y = c, B = 0;
    const D = () => {
      g = Math.abs(y - g) < 0.2 ? y : g + (y - g) * 0.14, Wi(o, g), B = requestAnimationFrame(D);
    }, I = () => {
      u || (u = !0, t.classList.add("fine"), B = requestAnimationFrame(D));
    }, X = setTimeout(I, 350), Z = (bt) => {
      y = l(bt), Math.abs(bt.clientX - h) > 6 && (clearTimeout(X), I());
    }, Mt = () => {
      clearTimeout(X), cancelAnimationFrame(B), t.removeEventListener("pointermove", Z), t.removeEventListener("pointerup", Mt), t.removeEventListener("pointercancel", Mt), t.classList.remove("fine"), Wi(o, u ? Math.round(g) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), To("pos", o);
    };
    t.addEventListener("pointermove", Z), t.addEventListener("pointerup", Mt), t.addEventListener("pointercancel", Mt);
  }
  function Js(t) {
    var c;
    const [a, o] = t.dataset.open.split("|"), l = t.closest(".tfCard");
    at = { key: a, id: o, h: l ? Math.round(l.getBoundingClientRect().height) : 0 }, ze.delete(a), Sa(), (c = S.querySelector(".tfOpen [data-close]")) == null || c.focus({ preventScroll: !0 });
  }
  function Er(t) {
    var a;
    Pt = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const l = o === t;
      o.classList.toggle("active", l), o.setAttribute("aria-expanded", String(l)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !l);
    }), ze.set("areas", zn(((a = S.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Qs = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [o, l] = Do(t);
      return Math.round(o + a * (l - o));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var o;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((o = Kt(t).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function fs(t, a, o, l) {
    var y;
    const c = Qs[a].value(o, l);
    M.set(a + "|" + o, c);
    const h = Math.round(l * 100) + "%", u = t.querySelector("i");
    if (a === "tilt") {
      u.style.width = "calc((100% - 8px) * " + l + ")";
      const [B, D] = t.querySelectorAll("span");
      B.classList.toggle("lit", l > 0.08), D.classList.toggle("lit", l > 0.92), ze.delete(o), So = So.map(() => ""), Fl(o).forEach((I) => I.update(Oa(o)));
    } else if (u) u.style.width = h;
    else {
      let B = t.querySelector("b");
      B || (B = document.createElement("b"), t.appendChild(B)), B.style.left = h;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const g = (y = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = Qs[a].text(o, c));
  }
  function To(t, a) {
    const o = M.get(t + "|" + a), [l, c, h] = Qs[t].send(a, o), u = () => setTimeout(() => {
      M.delete(t + "|" + a), Sa();
    }, 1500);
    us(l, c, a, h).then(u, u);
  }
  function en(t) {
    t.addEventListener("click", (a) => {
      var l, c;
      const o = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Fa && !a.target.closest(".tfBoardMenu,[data-board-more]") && Qa(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (Fa == null ? void 0 : Fa.key) === o.dataset.boardMore ? Qa(!0) : fn(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Di(Fa.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) Xn(o.dataset.boardShow);
        else if (o.dataset.favHide) Uo(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Ls(o.dataset.energyPick);
        else if (o.dataset.act) Cn(o.dataset.act);
        else if (o.hasAttribute("data-details")) Us(!(wt != null && wt.details));
        else if (o.hasAttribute("data-details-close")) Us(!1);
        else if (o.dataset.summary) Fo(o.dataset.summary, o);
        else if (o.dataset.star) Wr(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const h = wt.id;
          wt = wt.back, Ks(), (l = le.querySelector('.tfMore [data-more="' + CSS.escape(h) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) Zs("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([h, u, g, y]) => us(h, u, g, y).catch(() => {
        }));
        else if (o.dataset.more) Zs(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) ls();
        else if (o.dataset.go) os("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) Mo();
        else if (o.dataset.open) Js(o);
        else if (o.hasAttribute("data-close")) {
          const h = at;
          at = null, ze.delete(h.key), Sa(), (c = S.querySelector('[data-open="' + CSS.escape(h.key + "|" + h.id) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && Er(o);
    }), t.addEventListener("keydown", (a) => {
      var l, c, h, u, g, y, B;
      const o = a.target;
      if ((l = o.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Js(o)), (c = o.dataset) != null && c.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ls(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Er(o)), (u = o.dataset) != null && u.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Fo(o.dataset.summary, o)), a.key === "Escape" && Fa && t === S) {
        a.preventDefault(), Qa(!0);
        return;
      }
      if (a.key === "Escape" && Ha && t === S) {
        a.preventDefault(), Qr(!1), (g = p("dashEditNav")) == null || g.focus();
        return;
      }
      if (a.key === "Escape" && G && t === S && (a.preventDefault(), Mo()), (y = o.dataset) != null && y.blocks) {
        const D = o.dataset.blocks, I = Sd(a, Math.round(Te(D)));
        if (I == null) return;
        a.preventDefault(), Wi(D, I), clearTimeout(dt.get(D)), dt.set(D, setTimeout(() => To("pos", D), 500));
        return;
      }
      if ((B = o.dataset) != null && B.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [D, I] = o.dataset.drag.split("|"), X = Number(o.getAttribute("aria-valuenow")) / 100, Z = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, X + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        fs(o, D, I, Z), To(D, I);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var He;
      const o = a.target.closest("[data-blocks]");
      if (o && a.button === 0) {
        a.preventDefault(), Xs(o, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [c, h] = l.dataset.drag.split("|"), u = c === "bright" && !bn(h), g = a.pointerType !== "mouse";
      if (u && !g) {
        Cn(ye("light", "toggle", h));
        return;
      }
      const y = c === "bright" && ((He = k[h]) == null ? void 0 : He.state) !== "on", B = c === "tilt" ? 4 : 0, D = () => l.getBoundingClientRect().width - B * 2, I = (be) => {
        const Ca = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (be.clientX - Ca.left - B) / D()));
      };
      let X = g ? "waiting" : y ? "pressed" : "dragging", Z = 0;
      const Mt = a.clientX, nt = a.clientY, bt = (be, Ca) => Math.hypot(be.clientX - Mt, be.clientY - nt) > Ca, W = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      g || (a.preventDefault(), W()), X === "dragging" && fs(l, c, h, I(a));
      const kt = () => {
        var be, Ca;
        X = "sliding", A = l, l.classList.add("held"), W(), (be = navigator.userActivation) != null && be.hasBeenActive && ((Ca = navigator.vibrate) == null || Ca.call(navigator, 8)), Z = y ? (vt[h] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, V = (be) => {
        X === "waiting" && bt(be, _) ? !u && Math.abs(be.clientX - Mt) > Math.abs(be.clientY - nt) ? kt() : X = "gone" : X === "pressed" && bt(be, 4) && (X = "dragging"), X === "sliding" ? fs(l, c, h, Math.max(0, Math.min(1, Z + (be.clientX - Mt) / D()))) : X === "dragging" && fs(l, c, h, I(be));
      }, qt = (be) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Ca, Xt) => l.removeEventListener(Ca, Xt ? qt : V)), l.classList.remove("held"), A === l && (A = null), X === "sliding" || X === "dragging" ? To(c, h) : be.type === "pointerup" && u ? Cn(ye("light", "toggle", h)) : be.type === "pointerup" && y && (X === "waiting" || X === "pressed") && us("light", "turn_on", h).catch(() => {
        });
      };
      l.addEventListener("pointermove", V), l.addEventListener("pointerup", qt), l.addEventListener("pointercancel", qt);
    }), t.addEventListener("touchmove", (a) => {
      A && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return S && w && (fd(), en(S), en(le), le.addEventListener("click", (t) => {
    t.target === le && ls();
  }), (qi = n.getElementById("homeNav")) == null || qi.addEventListener("click", () => {
    G && Mo();
  }), (tl = n.querySelector(".bottomNav")) == null || tl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + ip + "</button>"), (el = p("dashEditNav")) == null || el.addEventListener("click", () => Qr(!Ha)), S.addEventListener("pointerdown", Hi), new ResizeObserver(() => {
    m.classList.contains("tfDash") && vo() !== _s ? Sa() : Ja();
  }).observe(S), window.addEventListener("resize", Ja, { passive: !0 }), le.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), wt != null && wt.details ? Us(!1) : ls());
  })), tt(), {
    update(t) {
      if (!w) return;
      const a = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([l]) => Vi(l))), ...t || {} };
      for (const l in k) l.startsWith("light.") && k[l].state === "on" && bn(l) && Ht(l, ro(k[l]));
      a ? oa() : Sa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      li = !0, Qt == null || Qt.destroy(), Qt = null, Ma == null || Ma.forEach((t) => t.destroy()), Ma = null;
    },
    resume() {
      li = !1, !(!w || !(S != null && S.querySelector("[data-tf]"))) && (ae.isConnected && $i(ae.style.order), Xi());
    }
  };
}
const Fh = "0.69.0", Vd = "move_assistant", Oh = "move_assistant", lp = "move_assistant_checkin_reminder";
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
    var p;
    const i = !this._hass;
    if (this._hass = d, i) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states), (p = this._test) == null || p.update(d.states));
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
    d.innerHTML = `<style>${jp}${zp}${Vp}</style>${Gp}`;
    const i = d.getElementById("app");
    i.style.opacity = "0";
    let p = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Vd
      });
      p = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(p), this._app = pu(d, {
      data: p,
      save: (m) => this._save(m),
      fire: (m, b) => this._fire(m, b),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, b) => {
        var w, E;
        return (E = (w = this._hass) == null ? void 0 : w.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(b, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, b;
        return Object.keys(((b = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : b.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hh(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const d = (i = this._hass) == null ? void 0 : i.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (p) => {
        var b;
        const m = JSON.stringify((p == null ? void 0 : p.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (b = this._app) == null || b.applyRemoteData(p.value));
      },
      { type: "frontend/subscribe_user_data", key: Vd }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Vd,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, i = {}) {
    var p, m;
    ((p = this._config) == null ? void 0 : p.events) !== !1 && ((m = this._hass) == null || m.callWS({
      type: "fire_event",
      event_type: Oh,
      event_data: { action: d, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const i = `config/automation/config/${lp}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (b) {
        if ((b == null ? void 0 : b.status_code) !== 404 && (b == null ? void 0 : b.status) !== 404) throw b;
      }
      return;
    }
    const p = (b) => `${b}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: lp,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: p(d.times.morning), id: "morning" },
        { trigger: "time", at: p(d.times.evening), id: "evening" }
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
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var p;
    const i = (p = this.shadowRoot) == null ? void 0 : p.getElementById("toast");
    i && (i.textContent = d, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Fh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
