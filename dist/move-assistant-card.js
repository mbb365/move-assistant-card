const jp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', zp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.075;background-image:linear-gradient(180deg,#ffffff0f,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 6%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 7%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon){--chip-hi:.275}', Vp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Gp = `<main id="app"><div class="shell">
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
`, ln = {
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
}, sn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, uc = (n, d, i) => n + (d - n) * i, Vd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((c) => c + c).join("") : d;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, Up = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), fc = {}, Qe = (n, d, i) => {
  const c = n + d + i;
  return fc[c] || (fc[c] = Up(Vd(n).map((g, b) => g + (Vd(d)[b] - g) * i)));
}, hc = {}, Yl = (n) => hc[n] || (hc[n] = Vd(n)), Cd = (n, d, i, c) => (g) => {
  if (g <= 0) return 0;
  if (g >= 1) return 1;
  let b = 0, w = 1, _ = g;
  for (let k = 0; k < 18; k++)
    _ = (b + w) / 2, 3 * (1 - _) * (1 - _) * _ * n + 3 * (1 - _) * _ * _ * i + _ * _ * _ < g ? b = _ : w = _;
  return 3 * (1 - _) * (1 - _) * _ * d + 3 * (1 - _) * _ * _ * c + _ * _ * _;
}, Yp = { std: Cd(0.2, 0, 0, 1), acc: Cd(0.3, 0, 1, 1), dec: Cd(0, 0, 0, 1) };
function ed(n, d) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || d ? "night" : "day");
}
function lp(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Qe(d.clear[0], d.cloudy[0], 0.12), Qe(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Qe(d.rain[0], "#000000", 0.22), Qe(d.rain[1], "#000000", 0.22)], d;
}
const Gd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Ud = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Yd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Zd(n, d = ln) {
  const i = { ...ln, ...d }, c = lp(i), g = String(n).split("/"), b = c[g[0]] ? g[0] : "clear", w = g[1] === "night", _ = c[b][w ? 1 : 0], k = {
    night: w,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: _,
    skyStops: [_],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Gd.map(() => ({ o: 0 })),
    rain: Ud.map(() => ({ o: 0, dy: -16 })),
    snow: Yd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (xt) => Gd.map(() => ({ o: xt }));
  return b === "clear" ? w ? (k.moon.o = 1, k.stars = N(1)) : k.sun.o = 1 : b === "partly" ? (k.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (k.moon = { x: 34, y: 33, d: 48, o: 1 }, k.stars = N(0.7)) : k.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (k.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? k.moon = { x: 40, y: 36, d: 40, o: 0 } : k.sun = { x: 40, y: 36, r: 20, o: 0 }) : (k.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? k.moon = { x: 38, y: 28, d: 36, o: 0 } : k.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? k.snow = Yd.map(() => ({ o: 1, dy: 0 })) : k.rain = Ud.map((xt, pt) => ({ o: b === "storm" && pt === 1 ? 0 : 1, dy: 0 })), b === "storm" && (k.bolt = { o: 1, dy: 0 })), k;
}
const mc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Zp(n, d, i, c = ln, g = !1) {
  const b = { ...ln, ...c }, w = (Y, $) => Y > 0.01 && $ > 0.01 ? "stay" : Y > 0.01 ? "leave" : $ > 0.01 ? "enter" : "none", _ = (Y, $, ot, K) => {
    const z = Y[0] + $ * K, O = Y[1] - (ot - 1 - $) * K;
    return Yp[Y[2]](sn((i - z) / Math.max(1e-3, O - z)));
  }, k = (Y, $, ot, K = 0, z = 1, O = 0) => {
    const ut = w(Y.o, $.o);
    if (ut === "none") return { ...$, o: 0 };
    const rt = _(mc[ot][ut], K, z, O), ht = {};
    for (const et in $) ht[et] = g && ut !== "stay" && et !== "o" ? ut === "leave" ? Y[et] : $[et] : uc(Y[et], $[et], rt);
    return ht;
  }, N = _(mc.sky, 0, 1, 0);
  let xt, pt;
  if (n.night !== d.night) {
    const Y = Math.min(n.clearness, d.clearness), $ = Qe(Qe(n.sky, d.sky, 0.5), b.dusk, 0.6 * Y);
    xt = N < 0.5 ? Qe(n.sky, $, N * 2) : Qe($, d.sky, N * 2 - 1), pt = Y > 0.5 ? [n.sky, b.dusk, d.sky] : [n.sky, d.sky];
  } else
    xt = Qe(n.sky, d.sky, N), pt = [n.sky, d.sky];
  return {
    night: i < 0.5 ? n.night : d.night,
    clearness: uc(n.clearness, d.clearness, i),
    sky: xt,
    skyStops: pt,
    skyT: N,
    sun: k(n.sun, d.sun, "body"),
    moon: k(n.moon, d.moon, "body"),
    cloud: k(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map((Y, $) => k(n.stars[$], Y, "fx", $, d.stars.length, 0.05)),
    rain: d.rain.map((Y, $) => k(n.rain[$], Y, "fx", $, d.rain.length, 0.05)),
    snow: d.snow.map((Y, $) => k(n.snow[$], Y, "fx", $, d.snow.length, 0.05)),
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
], rn = (n, d) => (Kp[(d & 7) * 8 + (n & 7)] + 0.5) / 64, $p = 0, Xd = 1, Jd = 2, Qd = 3, tc = 4, on = 5, ps = 6, Vi = 7, ec = 8, $l = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Xp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Jp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), dp = (n, d, i) => {
  let c = !1;
  for (let g = 0, b = n.length - 1; g < n.length; b = g++) {
    const w = n[g], _ = n[b];
    w[1] > i != _[1] > i && d < (_[0] - w[0]) * (i - w[1]) / (_[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function cp(n, { size: d = 90, px: i = 2, oneBit: c = !1, colors: g = ln, ink: b = "#26221e", paper: w = "#fbf9f6", clock: _ = 0, idle: k = !1 } = {}) {
  const N = { ...ln, ...g }, xt = Math.sin, pt = Math.PI * 2, Y = Math.max(6, Math.round(d / i)), $ = Y / 90, ot = k ? Math.floor(_ / 100) * 100 : 0, K = k ? xt(pt * ot / 3600) : 0, z = k ? 1.8 * xt(pt * ot / 6400) : 0, O = k ? 0.9 * xt(pt * ot / 4100) : 0, ut = k ? 0.8 * xt(pt * ot / 5200) : 0, rt = ot / 3400 % 1, ht = k && n.bolt.o > 0.5 && (rt < 0.04 || rt > 0.08 && rt < 0.11), et = new Array(Y * Y), tt = new Uint8Array(Y * Y), S = (M, E, L, P, ft) => {
    L == null || M < 0 || E < 0 || M >= Y || E >= Y || (P >= 1 || P > rn(M + 5, E + 3)) && (et[E * Y + M] = L, tt[E * Y + M] = ft);
  }, at = (M, E, L, P) => {
    for (let ft = Math.max(0, Math.floor(E - L) - 1); ft <= Math.min(Y - 1, E + L + 1); ft++) for (let dt = Math.max(0, Math.floor(M - L) - 1); dt <= Math.min(Y - 1, M + L + 1); dt++) P(dt, ft, dt + 0.5 - M, ft + 0.5 - E);
  }, Pt = n.skyStops || [n.sky], G = n.skyT || 0;
  for (let M = 0; M < Y; M++) {
    const E = n.night ? sn(1 - (M + 0.5) / (Y * 0.7)) * 0.85 : sn(((M + 0.5) / Y - 0.35) / 0.65) * 0.85;
    for (let L = 0; L < Y; L++) {
      let P = Pt[0];
      if (Pt.length > 1) {
        const ft = G * (Pt.length - 1), dt = Math.min(Pt.length - 2, Math.floor(ft));
        P = ft - dt > rn(L, M) ? Pt[dt + 1] : Pt[dt];
      }
      E > rn(L + 2, M + 5) && (P = n.night ? Qe(P, "#000000", 0.28) : Qe(P, "#ffffff", 0.2)), et[M * Y + L] = ht ? Qe(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const M = n.sun.x * $, E = n.sun.y * $, L = Math.max(1, n.sun.r * $);
    if (k) {
      const P = L * (1.45 + 0.06 * K), ft = Qe(N.sun, "#ffffff", 0.55);
      if (at(M, E, P, (dt, q, bt, Mt) => {
        const Jt = Math.sqrt(bt * bt + Mt * Mt);
        Jt > L && Jt < P && S(dt, q, ft, 0.26 * (1 - (Jt - L) / (P - L)) * n.sun.o, $p);
      }), n.sun.o > 0.5) {
        const dt = Math.floor(ot / 500) % 2, q = Math.max(1, L * 0.22);
        for (let bt = 0; bt < 8; bt++) if (bt % 2 === dt) for (let Mt = L + 1.5; Mt < L + 1.5 + q; Mt += 0.7) S(Math.floor(M + Math.cos(bt * Math.PI / 4) * Mt), Math.floor(E + Math.sin(bt * Math.PI / 4) * Mt), N.sun, n.sun.o, ec);
      }
    }
    at(M, E, L, (P, ft, dt, q) => {
      if (dt * dt + q * q > L * L) return;
      const bt = ((dt * 0.643 + q * 0.766) / L + 1) / 2;
      S(P, ft, sn((bt - 0.62) / 0.38) > rn(P, ft) ? N.sunEdge : N.sun, n.sun.o, Xd);
    });
  }
  if (Gd.forEach((M, E) => {
    const L = n.stars[E].o;
    if (L < 0.01) return;
    const P = Math.floor(M[0] * $), ft = Math.floor(M[1] * $), dt = k ? (Math.floor(ot / 300) + E * 3) % 6 : 0;
    if (dt === 5) return;
    const q = Math.round(M[2] * $ * (dt === 4 ? 0.3 : dt < 2 ? 1 : 0.6));
    S(P, ft, N.star, L, Vi);
    for (let bt = 1; bt <= q; bt++) {
      const Mt = bt === q && q > 1 ? Qe(N.star, n.sky, 0.5) : N.star;
      S(P - bt, ft, Mt, L, Vi), S(P + bt, ft, Mt, L, Vi), S(P, ft - bt, Mt, L, Vi), S(P, ft + bt, Mt, L, Vi);
    }
  }), n.moon.o > 0.01) {
    const M = Math.max(1.5, n.moon.d * $ * 0.37), E = n.moon.x * $, L = n.moon.y * $ + (k && ut > 0.4 ? -1 : 0), P = E + 0.547 * M, ft = L - 0.503 * M, dt = 0.82 * M, q = Qe(N.moon, "#ffffff", 0.6);
    at(E, L, M, (bt, Mt, Jt, pe) => {
      if (Jt * Jt + pe * pe > M * M) return;
      const aa = bt + 0.5 - P, Ce = Mt + 0.5 - ft;
      aa * aa + Ce * Ce <= dt * dt || S(bt, Mt, sn((pe + M) / (2 * M) * 1.1 - 0.1) > rn(bt, Mt) ? N.moon : q, n.moon.o, Jd);
    });
  }
  const wt = Math.max(2, Math.round(15.65 * $)), j = Math.max(1, Math.round(5.87 * $ * 0.5));
  Ud.forEach((M, E) => {
    const L = n.rain[E];
    let P = L.dy, ft = L.o;
    if (ft < 0.01) return;
    if (k) {
      const bt = (ot / 950 + E / 3) % 1;
      P += -5 + bt * 14, ft *= bt < 0.18 ? bt / 0.18 : bt > 0.72 ? (1 - bt) / 0.28 : 1;
    }
    const dt = (M[0] + 3 + z) * $, q = (M[1] + P) * $;
    for (let bt = 0; bt < wt; bt++) for (let Mt = 0; Mt < j; Mt++) S(Math.floor(dt - 0.208 * bt) + Mt, Math.floor(q) + bt, N.rain, ft, tc);
  });
  const zt = Math.max(0, Math.round(7.34 * $ / 2.6));
  if (Yd.forEach((M, E) => {
    const L = n.snow[E];
    let P = L.dy, ft = 0, dt = L.o;
    if (dt < 0.01) return;
    if (k) {
      const Mt = (ot / 3200 + E / 5) % 1;
      P += -6 + Mt * 14, ft = 1.5 * xt(pt * (Mt * 1.5 + E / 5)), dt *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const q = Math.floor((M[0] + 3.67 + ft + z) * $), bt = Math.floor((M[1] + 3.67 + P) * $);
    S(q, bt, N.snow, dt, on);
    for (let Mt = 1; Mt <= zt; Mt++)
      S(q - Mt, bt, N.snow, dt, on), S(q + Mt, bt, N.snow, dt, on), S(q, bt - Mt, N.snow, dt, on), S(q, bt + Mt, N.snow, dt, on), zt > 1 && Mt < zt && (S(q - Mt, bt - Mt, N.snow, dt, on), S(q + Mt, bt - Mt, N.snow, dt, on), S(q - Mt, bt + Mt, N.snow, dt, on), S(q + Mt, bt + Mt, N.snow, dt, on));
  }), n.bolt.o > 0.01)
    if (Y >= 30) {
      const M = 39 + z, E = 50 + n.bolt.dy;
      for (let L = Math.floor(E * $); L <= (E + 28) * $; L++) for (let P = Math.floor(M * $); P <= (M + 13) * $; P++)
        dp(Jp, (P + 0.5) / $ - M, (L + 0.5) / $ - E) && S(P, L, N.sun, n.bolt.o, ps);
    } else {
      const M = Y / 18, E = 7, L = 10 + Math.round(n.bolt.dy * 0.2);
      Xp.forEach((P, ft) => P.split("").forEach((dt, q) => {
        if (dt !== "#") return;
        const bt = Math.floor((E + q) * M), Mt = Math.floor((L + ft) * M);
        for (let Jt = Mt; Jt < Math.max(Mt + 1, Math.floor((L + ft + 1) * M)); Jt++) for (let pe = bt; pe < Math.max(bt + 1, Math.floor((E + q + 1) * M)); pe++) S(pe, Jt, N.sun, n.bolt.o, ps);
      }));
    }
  if (n.cloud.o > 0.01) {
    const M = Math.max(3, n.cloud.w * $), E = M * 0.6665, L = (n.cloud.x + z) * $ - M / 2, P = (n.cloud.y + O) * $ - E / 2, ft = Qe(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), dt = Qe(ft, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(P) - 1); q <= Math.min(Y - 1, P + E + 1); q++) for (let bt = Math.max(0, Math.floor(L) - 1); bt <= Math.min(Y - 1, L + M + 1); bt++) {
      const Mt = (bt + 0.5 - L) / M, Jt = (q + 0.5 - P) / M;
      $l(Mt, Jt) && S(bt, q, !$l(Mt, Jt + 1 / M) || sn((Jt - 0.42) / 0.25) * 0.8 > rn(bt, q) ? dt : ft, n.cloud.o, Qd);
    }
  }
  return pp(et, tt, Y, Y, { oneBit: c, ink: b, paper: w, snowInk: !n.night });
}
function pp(n, d, i, c, { oneBit: g, ink: b, paper: w, snowInk: _ }) {
  const k = new Uint8ClampedArray(i * c * 4), N = Yl(b), xt = Yl(w);
  for (let pt = 0; pt < c; pt++) for (let Y = 0; Y < i; Y++) {
    const $ = pt * i + Y, ot = d[$];
    if (n[$] == null) continue;
    let K = Yl(n[$]);
    if (g) {
      let z;
      ot === tc || ot === ec ? z = !0 : ot === on ? z = _ : ot === Vi || ot === ps ? z = !1 : z = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= rn(Y, pt), (ot === Xd || ot === Jd || ot === Qd || ot === ps) && (Y > 0 && d[$ - 1] !== ot || Y < i - 1 && d[$ + 1] !== ot || pt > 0 && d[$ - i] !== ot || pt < c - 1 && d[$ + i] !== ot) && (z = !0), K = z ? N : xt;
    }
    k[$ * 4] = K[0], k[$ * 4 + 1] = K[1], k[$ * 4 + 2] = K[2], k[$ * 4 + 3] = 255;
  }
  return { w: i, h: c, data: k };
}
const Qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, tu = (n) => ed(n, !1).split("/")[0], Td = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, eu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", au = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", nu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", iu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ru = [".##", "##.", ".#.", "#.."];
function up(n, { width: d, height: i, colors: c, wave: g = 0.38, soft: b = 6, glow: w = 0.6 }) {
  const _ = { ...ln, dawn: "#e5a77e", ...c }, k = lp(_), N = d, xt = i, pt = N / 6, Y = pt / 2, $ = Math.PI * 2, ot = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(12)].map((rt, ht) => {
    const et = ot[Math.min(ht, ot.length - 1)], tt = tu(et.cond), S = ht % 2 === 1;
    return { cond: et.cond, k: tt, night: S, sky: k[tt][S ? 1 : 0], cover: Qp[tt] };
  }), z = (rt) => xt * (0.5 - g * Math.cos($ * (rt / pt - 0.25)));
  return { C: _, S: K, W: N, H: xt, cw: pt, sw: Y, TAU: $, yb: z, side: (rt, ht, et) => {
    const tt = (rt ? z(ht) - et : et - z(ht)) / Math.max(3, b * 1.4) + 0.5;
    return tt <= 0 ? 0 : tt >= 1 ? 1 : tt;
  }, glowAt: (rt) => {
    const ht = ((rt / pt - 0.25) % 1 + 1) % 1, et = Math.max(0, Math.min(5, Math.round(rt / pt - 0.25))), tt = Math.max(0, Math.min(5, Math.round(rt / pt - 0.75))), S = 1 - (K[2 * et].cover + K[2 * tt + 1].cover) / 2, at = Math.sin(Math.PI * Math.min(1, Math.max(0, z(rt) / xt)));
    return { c: ht < 0.5 ? _.dusk : _.dawn, a: w * (0.2 + 0.8 * S) * at * at };
  }, soft: b, tw: pt * 0.3, sy: xt / 90 };
}
function fp(n, { clock: d = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: g, sw: b, side: w, C: _, TAU: k, sy: N } = n, xt = d, pt = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return g.forEach((Y, $) => {
    const ot = Td(c * 977 + $ * 131 + 7), K = ($ + 0.5) * b, z = Y.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Y.k] : 0;
    for (let O = 0; O < z; O++) {
      const ut = K + (ot() - 0.5) * b * 1.6, rt = (6 + ot() * 76) * N, ht = ot() < 0.35, et = 1.8 + ot() * 1.6, tt = w(!0, ut, rt) * (ht ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(k * xt / 2600 + O * 1.7 + $) : 1);
      tt >= 0.03 && pt.stars.push({ x: ut, y: rt, big: ht, size: et, o: tt });
    }
    if (!Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const O = K + (ot() - 0.5) * b * 0.3, ut = Math.min(15, b * 0.29);
      pt.suns.push({ x: O, y: 32 * N, rad: ut, halo: ut * 2.8 * (i ? 1 + 0.07 * Math.sin(k * xt / 3600 + $) : 1) });
    }
    if (Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const O = Math.min(0.78, b * 0.55 / 34), ut = K - 23 * O + (ot() - 0.5) * b * 0.2;
      pt.moons.push({ x: ut + 23 * O, y: (4 + (i ? 0.8 * Math.sin(k * xt / 5200 + $) : 0)) * N + 23 * O, d: 46 * O });
    }
  }), g.forEach((Y, $) => {
    const ot = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Y.k];
    if (!ot) return;
    const K = Td(c * 577 + $ * 71 + 3), z = ($ + 0.5) * b, O = Y.k === "rain" || Y.k === "storm" || Y.night ? _.cloudNight : _.cloudDay, ut = Y.night ? 0.82 : Y.k === "storm" ? 0.75 : 1;
    for (let rt = 0; rt < ot; rt++) {
      const ht = b / 46 * (Y.k === "partly" ? 0.85 : 0.75 + K() * 0.55), et = z + (Y.k === "partly" ? b * 0.12 : (K() - 0.5) * b * 1.05), tt = (Y.k === "partly" ? 40 : 6 + K() * 26) * N, S = i ? 2.5 * Math.sin(k * xt / 9e3 + $ * 1.3 + rt * 2.1) : 0, at = i ? 0.9 * Math.sin(k * xt / 6100 + $ + rt) : 0;
      pt.clouds.push({ x: et - 23 * ht + S, y: tt - 15.33 * ht + at, w: 46 * ht, h: 30.66 * ht, fill: O, o: ut * (ot > 1 && rt === 0 ? 0.85 : 1) });
    }
  }), g.forEach((Y, $) => {
    const ot = Td(c * 313 + $ * 29 + 11), K = ($ + 0.5) * b, z = Y.cond === "pouring" ? 16 : Y.cond === "rainy" || Y.cond === "hail" ? 9 : Y.cond === "lightning-rainy" ? 12 : Y.cond === "snowy-rainy" ? 5 : 0;
    for (let ut = 0; ut < z; ut++) {
      let rt = K + (ot() - 0.5) * b * 1.05, ht = 44 + ot() * 36, et = 1;
      if (i) {
        const S = ((ht - 44 + xt * 0.04) % 36 + 36) % 36;
        rt -= 0.21 * (S - (ht - 44)), ht = 44 + S, et = Math.min(1, S / 6, (36 - S) / 6);
      }
      ht *= N;
      const tt = w(Y.night, rt, ht) * et;
      tt >= 0.05 && pt.drops.push({ x: rt, y: ht, o: tt });
    }
    const O = Y.cond === "snowy" ? 11 : Y.cond === "snowy-rainy" ? 6 : 0;
    for (let ut = 0; ut < O; ut++) {
      let rt = K + (ot() - 0.5) * b * 1.05, ht = 40 + ot() * 44, et = 1;
      if (i) {
        const S = ((ht - 40 + xt * 9e-3) % 44 + 44) % 44;
        ht = 40 + S, rt += 1.6 * Math.sin(k * xt / 2800 + ut * 1.9 + $), et = Math.min(1, S / 6, (44 - S) / 6);
      }
      ht *= N;
      const tt = w(Y.night, rt, ht) * et;
      tt >= 0.05 && pt.flakes.push({ x: rt, y: ht, o: tt });
    }
    if (Y.k === "fog") {
      const ut = Y.night ? "#c8ccd6" : "#ffffff", rt = Y.night ? 0.28 : 0.62, ht = i ? 4 * Math.sin(k * xt / 8e3 + $) : 0;
      for (let et = 0; et < 4; et++) pt.fogs.push({ x: K - b * 0.75 + et % 2 * b * 0.18 + (et % 2 ? ht : -ht), y: (30 + et * 13) * N, w: b * 1.3, c: ut, a: rt });
    }
    if (Y.k === "storm") {
      const ut = (xt / 3400 + $ * 0.37) % 1;
      pt.bolts.push({ x: K + (ot() - 0.5) * b * 0.3 - 5, y: 36 * N, o: i && !(ut < 0.05 || ut > 0.09 && ut < 0.12) ? 0.8 : 1 });
    }
  }), pt;
}
function su(n, d, i, c, g, b, w, _) {
  const { S: k, C: N, cw: xt, yb: pt, glowAt: Y, soft: $, tw: ot, sy: K } = n, z = new Array(i * c), O = new Uint8Array(i * c), ut = new Uint8Array(i * c), rt = (M, E, L, P, ft) => {
    L == null || M < 0 || E < 0 || M >= i || E >= c || (P >= 1 || P > rn(M + 5, E + 3)) && (z[E * i + M] = L, O[E * i + M] = ft);
  }, ht = (M, E, L, P) => {
    for (let ft = Math.max(0, Math.floor(E - L) - 1); ft <= Math.min(c - 1, E + L + 1); ft++) for (let dt = Math.max(0, Math.floor(M - L) - 1); dt <= Math.min(i - 1, M + L + 1); dt++) P(dt, ft, dt + 0.5 - M, ft + 0.5 - E);
  }, et = (M, E, L) => {
    for (let ft = 0; ft < M.length - 1; ft++) {
      const dt = (ft + E) * xt;
      if (L < dt - ot / 2) return [M[ft], M[ft], 0];
      if (L <= dt + ot / 2) return [M[ft], M[ft + 1], (L - dt + ot / 2) / ot];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, tt = k.filter((M) => !M.night).map((M) => M.sky), S = k.filter((M) => M.night).map((M) => M.sky), at = $ / b, Pt = 16 * K / b;
  for (let M = 0; M < i; M++) {
    const E = (M + 0.5) * g, L = pt(E) / b, P = et(tt, 0.75, E), ft = et(S, 1.25, E), dt = Y(E);
    for (let q = 0; q < c; q++) {
      const bt = rn(M, q), Mt = q + 0.5 - L, Jt = (at > 0.01 ? sn(0.5 + Mt / at) : Mt > 0 ? 1 : 0) > bt;
      let pe = Jt ? P[2] > bt ? P[1] : P[0] : ft[2] > bt ? ft[1] : ft[0];
      (Jt ? sn(((q + 0.5) / c - 0.45) / 0.55) * 0.7 : sn(1 - (q + 0.5) / (c * 0.55)) * 0.7) > rn(M + 2, q + 5) && (pe = Jt ? Qe(pe, "#ffffff", 0.18) : Qe(pe, "#000000", 0.25)), Jt && Mt >= 0 && Mt < Pt && dt.a * 1.3 * (1 - Mt / Pt) > rn(M + 6, q + 1) && (pe = dt.c), z[q * i + M] = pe, ut[q * i + M] = Jt ? 0 : 1;
    }
  }
  const G = Qe(N.sun, "#ffffff", 0.55), wt = Qe(N.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const E = Math.floor(M.x / g), L = Math.floor(M.y / b);
    if (E < 0 || L < 0 || E >= i || L >= c || !ut[L * i + E] || M.o < 0.15) return;
    const P = M.o > 0.45 ? N.star : Qe(N.star, z[L * i + E], 0.5), ft = M.big && M.o > 0.6 ? Math.floor(M.size / g) : 0;
    rt(E, L, P, 1, Vi);
    for (let dt = 1; dt <= ft; dt++) [[E - dt, L], [E + dt, L], [E, L - dt], [E, L + dt]].forEach((q) => {
      q[0] >= 0 && q[1] >= 0 && q[0] < i && q[1] < c && ut[q[1] * i + q[0]] && rt(q[0], q[1], P, 1, Vi);
    });
  }), d.suns.forEach((M) => {
    const E = Math.max(1.5, M.rad / g), L = M.x / g, P = M.y / b, ft = M.halo / g * 0.85;
    if (ht(L, P, ft, (dt, q, bt, Mt) => {
      const Jt = Math.sqrt(bt * bt + Mt * Mt);
      Jt > E && Jt < ft && !ut[q * i + dt] && rt(dt, q, G, 0.3 * (1 - (Jt - E) / (ft - E)), 0);
    }), _) {
      const dt = Math.floor(w / 500) % 2, q = Math.max(1, E * 0.3);
      for (let bt = 0; bt < 8; bt++) if (bt % 2 === dt) for (let Mt = E + 1.2; Mt < E + 1.2 + q; Mt += 0.7) rt(Math.floor(L + Math.cos(bt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(bt * Math.PI / 4) * Mt), N.sun, 1, ec);
    }
    ht(L, P, E, (dt, q, bt, Mt) => {
      bt * bt + Mt * Mt <= E * E && rt(dt, q, sn(((Mt / E + 1) / 2 - 0.6) / 0.4) > rn(dt, q) ? N.sunEdge : N.sun, 1, Xd);
    });
  }), d.moons.forEach((M) => {
    const E = Math.max(1.5, M.d * 0.37 / g), L = M.x / g, P = M.y / b, ft = L + 0.547 * E, dt = P - 0.503 * E, q = 0.82 * E;
    ht(L, P, E, (bt, Mt, Jt, pe) => {
      if (Jt * Jt + pe * pe > E * E) return;
      const aa = bt + 0.5 - ft, Ce = Mt + 0.5 - dt;
      aa * aa + Ce * Ce > q * q && rt(bt, Mt, sn((pe + E) / (2 * E) * 1.1 - 0.1) > rn(bt, Mt) ? N.moon : wt, 1, Jd);
    });
  }), d.clouds.forEach((M) => {
    const E = Math.max(3, M.w / g), L = E * 0.6665, P = M.x / g, ft = M.y / b, dt = Qe(M.fill, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(ft) - 1); q <= Math.min(c - 1, ft + L + 1); q++) for (let bt = Math.max(0, Math.floor(P) - 1); bt <= Math.min(i - 1, P + E + 1); bt++) {
      const Mt = (bt + 0.5 - P) / E, Jt = (q + 0.5 - ft) / E;
      $l(Mt, Jt) && rt(bt, q, !$l(Mt, Jt + 1 / E) || sn((Jt - 0.42) / 0.25) * 0.8 > rn(bt, q) ? dt : M.fill, M.o, Qd);
    }
  }), d.fogs.forEach((M) => {
    const E = Math.floor(M.y / b), L = Math.max(E, Math.floor((M.y + 6 * K) / b) - 1), P = Math.floor(M.x / g), ft = Math.floor((M.x + M.w) / g);
    for (let dt = E; dt <= L; dt++) for (let q = P; q <= ft; q++) {
      const bt = (q - P) / Math.max(1, ft - P);
      rt(q, dt, M.c, M.a * (bt < 0.25 ? bt / 0.25 : bt > 0.75 ? (1 - bt) / 0.25 : 1), 0);
    }
  });
  const j = Math.max(2, Math.round(9 / b));
  d.drops.forEach((M) => {
    const E = M.x / g, L = Math.floor(M.y / b);
    for (let P = 0; P < j; P++) rt(Math.floor(E - 0.208 * P * b / g), L + P, N.rain, M.o, tc);
  });
  const zt = Math.max(0, Math.round(4.4 / g / 2.6));
  return d.flakes.forEach((M) => {
    const E = Math.floor(M.x / g), L = Math.floor(M.y / b);
    rt(E, L, N.snow, M.o, on);
    for (let P = 1; P <= zt; P++)
      rt(E - P, L, N.snow, M.o, on), rt(E + P, L, N.snow, M.o, on), rt(E, L - P, N.snow, M.o, on), rt(E, L + P, N.snow, M.o, on);
  }), d.bolts.forEach((M) => {
    if (g <= 3.5)
      for (let E = Math.floor(M.y / b); E <= (M.y + 24) / b; E++) for (let L = Math.floor(M.x / g); L <= (M.x + 11) / g; L++)
        dp(iu, (L + 0.5) * g - M.x, (E + 0.5) * b - M.y) && rt(L, E, N.sun, 1, ps);
    else {
      const E = Math.round(M.x / g), L = Math.round(M.y / b);
      ru.forEach((P, ft) => P.split("").forEach((dt, q) => {
        dt === "#" && rt(E + q, L + ft, N.sun, 1, ps);
      }));
    }
  }), { col: z, ids: O };
}
function lu(n, d) {
  const i = d.px, c = Math.max(6, Math.round(d.width / i)), g = Math.max(6, Math.round(d.height / i)), b = d.width / c, w = d.height / g, _ = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, k = ($) => {
    const ot = up($, d);
    return su(ot, fp(ot, { clock: _, ambient: d.ambient, seed: d.seed }), c, g, b, w, _, d.ambient);
  }, N = k(n), xt = d.reveal == null ? 1 : sn(d.reveal);
  let pt = N.col, Y = N.ids;
  if (xt < 1) {
    const $ = d.prev ? k(d.prev) : null, ot = xt * (c + 12);
    pt = new Array(c * g), Y = new Uint8Array(c * g);
    for (let K = 0; K < c * g; K++) {
      const z = K % c, O = K / c | 0;
      (d.reduce ? xt : sn((ot - z) / 12)) > rn(z, O) ? (pt[K] = N.col[K], Y[K] = N.ids[K]) : $ ? (pt[K] = $.col[K], Y[K] = $.ids[K]) : (pt[K] = null, Y[K] = 255);
    }
  }
  return pp(pt, Y, c, g, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function du(n, d, i) {
  const c = i.width, g = i.height, b = i.reveal == null ? 1 : sn(i.reveal), w = (Y, $) => {
    const ot = up($, i);
    cu(Y, ot, fp(ot, i));
  };
  if (n.clearRect(0, 0, c, g), b >= 1) {
    w(n, d);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const _ = n.canvas, k = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (k.width !== _.width || k.height !== _.height) && (k.width = _.width, k.height = _.height);
  const N = k.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, c, g), w(N, d);
  const xt = b * (c + 64) - 64, pt = N.createLinearGradient(xt, 0, xt + 64, 0);
  pt.addColorStop(0, "rgba(0,0,0,1)"), pt.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = pt, N.fillRect(0, 0, c, g), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(k, 0, 0), n.restore();
}
function cu(n, d, i) {
  const { W: c, H: g, S: b, C: w, cw: _, yb: k, glowAt: N, soft: xt, tw: pt, sy: Y } = d, $ = (G, wt) => {
    const j = Yl(G);
    return "rgba(" + j[0] + "," + j[1] + "," + j[2] + "," + Math.max(0, Math.min(1, wt)).toFixed(3) + ")";
  }, ot = (G, wt) => {
    const j = n.createLinearGradient(0, 0, c, 0);
    j.addColorStop(0, G[0]);
    for (let zt = 0; zt < G.length - 1; zt++) {
      const M = (zt + wt) * _, E = (M - pt / 2) / c, L = (M + pt / 2) / c;
      E > 0 && E < 1 && j.addColorStop(E, G[zt]), L > 0 && L < 1 && j.addColorStop(L, G[zt + 1]);
    }
    return j.addColorStop(1, G[G.length - 1]), j;
  }, K = Math.max(24, Math.ceil(c / 4)), z = (G, wt) => {
    n.beginPath();
    for (let j = 0; j <= K; j++) {
      const zt = c * j / K, M = G == null ? 0 : k(zt) + G;
      j ? n.lineTo(zt, M) : n.moveTo(zt, M);
    }
    for (let j = K; j >= 0; j--) {
      const zt = c * j / K;
      n.lineTo(zt, k(zt) + wt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ot(b.filter((G) => !G.night).map((G) => G.sky), 0.75), n.fillRect(0, 0, c, g);
  const O = n.createLinearGradient(0, 0, c, 0);
  for (let G = 0; G <= 64; G++) {
    const wt = N(c * G / 64);
    O.addColorStop(G / 64, $(wt.c, Math.min(1, wt.a)));
  }
  n.fillStyle = O;
  for (let G = 0; G < 8; G++)
    n.globalAlpha = 1 - G / 8, z(G * 2 * Y, (G + 1) * 2 * Y);
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
  const at = Qe(w.sun, "#ffffff", 0.55);
  i.suns.forEach((G) => {
    const wt = n.createRadialGradient(G.x, G.y, 0, G.x, G.y, G.halo);
    wt.addColorStop(0, $(at, 0.42)), wt.addColorStop(0.7, $(at, 0)), n.fillStyle = wt, n.beginPath(), n.arc(G.x, G.y, G.halo, 0, Math.PI * 2), n.fill();
    const j = n.createLinearGradient(0, G.y - G.rad, 0, G.y + G.rad);
    j.addColorStop(0.6, w.sun), j.addColorStop(1, w.sunEdge), n.fillStyle = j, n.beginPath(), n.arc(G.x, G.y, G.rad, 0, Math.PI * 2), n.fill();
  });
  const Pt = Qe(w.moon, "#ffffff", 0.6);
  i.moons.forEach((G) => {
    n.save(), n.translate(G.x - G.d / 2, G.y - G.d / 2), n.scale(G.d / 46, G.d / 46);
    const wt = n.createLinearGradient(0, 6, 0, 40);
    wt.addColorStop(0, Pt), wt.addColorStop(1, w.moon), n.fillStyle = wt, n.fill(et), n.restore();
  }), i.clouds.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.scale(G.w / 46, G.h / 30.66), n.translate(-4, -9.67), n.fillStyle = G.fill, n.fill(tt), n.restore();
  }), i.fogs.forEach((G) => {
    const wt = n.createLinearGradient(G.x, 0, G.x + G.w, 0);
    wt.addColorStop(0, $(G.c, 0)), wt.addColorStop(0.25, $(G.c, G.a)), wt.addColorStop(0.75, $(G.c, G.a)), wt.addColorStop(1, $(G.c, 0)), n.fillStyle = wt, n.fillRect(G.x, G.y, G.w, 6 * Y);
  }), n.fillStyle = w.rain, i.drops.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((G) => {
    n.globalAlpha = G.o, n.beginPath(), n.arc(G.x, G.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.fill(S), n.restore();
  }), n.restore();
}
function pu(n, d) {
  var ic, rc, sc, lc, dc, cc, pc;
  const i = (e) => n.getElementById(e), c = i("workoutView"), g = i("workoutNameInput");
  let b = !0;
  const w = i("homeClock");
  function _() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  _(), setInterval(_, 15e3);
  const k = i("createFlow"), N = i("createMovementsSlot"), xt = i("createTimingSlot"), pt = i("createFinishSlot"), Y = i("movementStepSummary"), $ = i("timingStepSummary"), ot = i("finishStepSummary"), K = i("continueToTiming"), z = i("continueToFinish"), O = i("finishMoveButton");
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
    var st, gt;
    if (!Kt) return;
    ae[Qt];
    const e = Xe.filter((lt) => !lt.hidden), r = e.filter((lt) => lt.kind !== "rest").length, s = e.filter((lt) => lt.kind === "rest").length;
    Y.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, v = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    v.disabled = !u, K.disabled = !u, $.textContent = u ? Wn(E.value) + " · " + Ye(L.value) + " movement · " + Ye(P.value) + " rest" : "Add a movement first", T.disabled = !(u && ut);
    const B = ((g == null ? void 0 : g.value) || "").trim(), F = [];
    (st = i("includeWarmupPreset")) != null && st.checked && F.push("warm-up"), (gt = i("includeCooldownPreset")) != null && gt.checked && F.push("cooldown"), ot.textContent = B ? B + (F.length ? " · " + F.join(" + ") : "") : F.length ? F.join(" + ") : "Name and optional extras";
  }
  function Pt() {
    var Nt, te, Ft;
    k.hidden = !1, ut = !1;
    const e = n.querySelector(".editNameRow"), r = i("createMoveOptions"), s = n.querySelector(".timeTiles"), u = i("routineSummaryModal"), v = n.querySelector(".tempoRevealRow"), T = i("tempoExperiment"), B = (Nt = i("warmupList")) == null ? void 0 : Nt.closest("section"), F = i("movementCreatorLaunch"), st = i("movementCreator"), gt = (te = i("strengthList")) == null ? void 0 : te.closest("section"), lt = (Ft = i("cooldownList")) == null ? void 0 : Ft.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), B, F, st, gt, lt].forEach((Rt) => Rt && et(Rt, N)), [r, s, u, v, T].forEach((Rt) => et(Rt, xt)), et(e, pt), S("movements"), at();
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
    Object.entries(wt).forEach(([r, s]) => s.classList.toggle("active", r === e)), j.classList.toggle("active", e === "home"), zt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(hs, 400), e === "settings" && (requestAnimationFrame(() => gr(n.querySelector(".tab.active"), !1)), br());
  }
  const E = i("totalTime"), L = i("workTime"), P = i("restTime"), ft = i("totalOut"), dt = i("workOut"), q = i("restOut"), bt = i("totalFill"), Mt = i("workFill"), Jt = i("restFill"), pe = i("roundsInput"), aa = i("roundsFill"), Ce = i("roundsOut"), io = i("totalLabel"), Ea = i("routineSummaryModal"), Dt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ye = Dt.map((e) => ({ ...e })), Xe = [
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
  const we = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let qe = we.map((e) => ({ ...e }));
  const Er = {
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
  }, xe = Gi(d.data), ae = xe.profiles;
  let Qt = ae[xe.selected] ? xe.selected : xe.order.find((e) => ae[e]) || "kettlebell";
  function Gi(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Er)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((v) => s[v]);
    return Object.keys(s).forEach((v) => {
      u.includes(v) || u.push(v);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : di(r.energy)).map(Ui),
      settings: { ...r.settings || {} }
    };
  }
  function di(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((u) => {
      const v = new Date(u.at);
      if (isNaN(v)) return;
      const T = v.getFullYear() + "-" + String(v.getMonth() + 1).padStart(2, "0") + "-" + String(v.getDate()).padStart(2, "0"), B = v.getHours() < 14 ? "morning" : "evening";
      if (s.some((st) => st.date === T && st.slot === B)) return;
      const F = r.indexOf(u.value) + 1;
      F > 0 && s.push({ date: T, slot: B, mood: null, energy: F, at: u.at });
    }), s;
  }
  function Ui(e) {
    if (e.scale === 100) return e;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function Va() {
    Kt || (xe.selected = Qt, xe.order = xe.order.filter((e) => ae[e] && e !== Bt), d.save(xe));
  }
  function me() {
    return xe.settings;
  }
  function la(e) {
    const r = ae[e];
    if (!r) return;
    Qt = e;
    const s = i("workoutNameInput");
    if (s && (s.value = r.name), E.value = r.total, L.value = r.work, P.value = r.rest, pe.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((T) => ({ ...T })), v = (T) => u.filter((B) => B.presetRole === T).map(({ presetRole: B, ...F }) => F);
      ye = (r.warmup || v("warmup")).map((T) => ({ ...T })), qe = (r.cooldown || v("cooldown")).map((T) => ({ ...T })), Xe = u.filter((T) => !T.presetRole), jn(r.preset || "movement", !1);
    } else
      E.min = 3, E.max = 40, E.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, ye = (r.warmup || Dt).map((u) => ({ ...u })), qe = (r.cooldown || we).map((u) => ({ ...u })), Xe = r.strength.map((u) => Array.isArray(u) ? (([v, T, B, F = !1]) => ({ id: v, name: T, group: B, kind: "work", hidden: !!F }))(u) : { ...u });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === e)), Te();
  }
  function Ma(e, r, s) {
    const u = e.getBoundingClientRect(), v = u.width / 2, T = u.height / 2, B = r - v, F = s - T;
    let st = 1 / 0, gt = 1 / 0;
    B !== 0 && (st = v / Math.abs(B)), F !== 0 && (gt = T / Math.abs(F));
    const lt = Math.min(Math.max(1 / Math.min(st, gt), 0), 1);
    let it = Math.atan2(F, B) * (180 / Math.PI) + 90;
    return it < 0 && (it += 360), { edge: lt, angle: it };
  }
  function ci(e, r, s = !1) {
    const u = e.getBoundingClientRect(), v = r.clientX - u.left, T = r.clientY - u.top, { edge: B, angle: F } = Ma(e, v, T), st = s ? 100 : B * 100;
    e.style.setProperty("--edge-proximity", st.toFixed(3)), e.style.setProperty("--cursor-angle", F.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || st >= 30);
  }
  function Yi(e) {
    e.addEventListener("pointermove", (s) => ci(e, s, !1)), e.addEventListener("pointerenter", (s) => ci(e, s, !1)), e.addEventListener("pointerdown", (s) => ci(e, s, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  Yi(i("addWorkoutPanel"));
  let Kt = !1, Bt = null;
  function Gt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function Re(e) {
    return e.summary ? e.summary : e.customSequence ? Wn(e.total) + " · custom move" : Wn(e.total) + " · " + Ye(e.work) + " / " + Ye(e.rest) + " · warm-up + cooldown";
  }
  function Ca(e, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const u = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Gt(r.name) + '</div><div class="sub">' + Gt(Re(r)) + '</div><span class="sourceTag">' + Gt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Gt(r.name) + "</div></div>";
    const v = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, v), Yi(s), s.addEventListener("click", (B) => {
      B.target.closest("button") || la(e);
    }), s.addEventListener("keydown", (B) => {
      (B.key === "Enter" || B.key === " ") && !B.target.closest("button") && (B.preventDefault(), la(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), la(e), ys(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), la(e), md();
    }), s;
  }
  function ro() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), xe.order.forEach((e) => {
      ae[e] && Ca(e, ae[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Qt));
  }
  ro(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Kt = !0, Bt = "custom-" + Date.now(), ae[Bt] = {
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
    }, la(Bt), ys(!0);
  });
  let Vt = [], ie = 0, na = 0, On = 1, Pa = !1, ta = null, pi = null, ca = !1, so = xe.settings.upcomingCount ?? "all", lo = "movement";
  function ui(e, r, s) {
    return (Number(e) - r) / (s - r) * 100;
  }
  function Ye(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Wn(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Ro() {
    bt.style.width = ui(E.value, Number(E.min), Number(E.max)) + "%", Mt.style.width = ui(L.value, Number(L.min), Number(L.max)) + "%", Jt.style.width = ui(P.value, Number(P.min), Number(P.max)) + "%", dt.textContent = Ye(L.value), q.textContent = Ye(P.value);
    const e = Number(pe.value) || 1;
    aa.style.width = ui(e, 1, 10) + "%", io.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function xn(e) {
    return e.filter((r) => !r.hidden);
  }
  function qn(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), v = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(v).padStart(2, "0");
  }
  function Mn(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let u = null;
    if (s === "youtu.be") u = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") u = r.searchParams.get("v");
      else {
        const F = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        F && (u = F[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const v = (F) => {
      if (!F) return 0;
      if (/^\d+$/.test(F)) return Number(F);
      const st = F.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return st ? (Number(st[1]) || 0) * 3600 + (Number(st[2]) || 0) * 60 + (Number(st[3]) || 0) : 0;
    }, T = v(r.searchParams.get("t") || r.searchParams.get("start")), B = v(r.searchParams.get("end"));
    return { id: u, start: T, end: B > T ? B : null };
  }
  function co(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const s = Number(e.start) || 0, u = Number(e.end) || Number(e.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(e.duration) || 300;
  }
  function Ga(e, r) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function jn(e, r = !0) {
    lo = e, n.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === e));
    const s = ae[Qt];
    s && (s.preset = e), e === "work" ? (E.min = 30, E.max = 480, E.step = 30, L.min = 300, L.max = 7200, L.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (E.value = 60, L.value = 1500, P.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (E.min = 3, E.max = 40, E.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (E.value = 20, L.value = 45, P.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Ro();
  }
  function Zi(e, r) {
    const s = lo === "work";
    return e.map((u, v) => ({ ...u, id: r + "-" + v + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(L.value) }));
  }
  function ea() {
    const e = ae[Qt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !ye.length && (ye = Zi(Dt, "warm")), e.includeCooldown && !qe.length && (qe = Zi(we, "cool")), Te());
  }
  function Ki() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Vt.length - 1), s = so;
    e.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const B = document.createElement("option");
      B.value = String(T), B.textContent = String(T), e.appendChild(B);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", e.appendChild(u);
    const v = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    e.value = v, so = v === "all" ? "all" : Number(v);
  }
  function Te() {
    Number(E.value) * 60;
    const e = Number(L.value), r = Number(P.value), s = ae[Qt], u = !!(s != null && s.customSequence), v = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : xn(ye), T = xn(Xe), B = u && !s.includeCooldown ? [] : xn(qe);
    if (s && (s.total = Number(E.value), s.work = e, s.rest = r, s.rounds = Number(pe.value) || 1, s.customSequence ? (s.sequence = Xe.map((At) => ({ ...At })), s.warmup = ye.map((At) => ({ ...At })), s.cooldown = qe.map((At) => ({ ...At }))) : (s.strength = Xe.map((At) => ({ ...At })), s.warmup = ye.map((At) => ({ ...At })), s.cooldown = qe.map((At) => ({ ...At })))), s != null && s.customSequence) {
      const At = [...v.map((de) => ({ ...de, section: "warmup" })), ...T, ...B.map((de) => ({ ...de, section: "cooldown" }))].map((de) => {
        if (de.kind === "video") return { ...de, duration: co(de, e), rest: 0 };
        if (de.kind === "rest") {
          const wa = de.useGlobalTiming === !0 ? r : Number(de.duration) || r;
          return { ...de, duration: wa, rest: 0 };
        }
        const ba = de.useGlobalTiming === !1 && Number(de.duration) || e;
        return { ...de, duration: ba, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Vt = [], At.forEach((de, ba) => {
        Vt.push(de);
        const wa = At[ba + 1];
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
      })) : Vt = At;
    } else
      Vt = [...v.map((At) => ({ ...At, section: "warmup" })), ...T, ...B.map((At) => ({ ...At, section: "cooldown" }))].map((At) => At.kind === "video" ? { ...At, duration: co(At, e), rest: 0 } : At.kind === "rest" ? { ...At, duration: At.useGlobalTiming === !0 ? r : Number(At.duration) || r, rest: 0 } : { ...At, duration: At.useGlobalTiming === !1 && Number(At.duration) || e, rest: r }), Vt.forEach((At, de) => {
        var ba;
        ((ba = Vt[de + 1]) == null ? void 0 : ba.kind) === "rest" && (At.rest = 0);
      }), Vt.length && (Vt[Vt.length - 1].rest = 0);
    const F = Math.max(1, Math.min(10, Number(pe.value) || 1)), st = Vt, gt = (At) => F <= 1 ? null : At.section === "warmup" || At.presetRole === "warmup" ? "first" : At.section === "cooldown" || At.presetRole === "cooldown" ? "last" : At.kind === "video" && (At.videoRounds === "first" || At.videoRounds === "last") ? At.videoRounds : null, lt = (At) => !!gt(At), it = st.filter((At) => !lt(At)), Nt = st.filter(lt), te = it.length, Ft = it.reduce((At, de) => At + de.duration + de.rest, 0), Rt = Nt.reduce((At, de) => At + de.duration + de.rest, 0), Lt = [
      Nt.some((At) => At.section === "warmup" || At.presetRole === "warmup") && "warm-up",
      Nt.some((At) => At.section === "cooldown" || At.presetRole === "cooldown") && "cooldown",
      Nt.some((At) => At.kind === "video" && !At.section && !At.presetRole) && "video"
    ].filter(Boolean), he = Lt.length > 1 ? Lt.slice(0, -1).join(", ") + " & " + Lt[Lt.length - 1] : Lt[0] || "";
    Vt = [];
    const ve = (At, de) => {
      const ba = gt(At);
      return !ba || (ba === "first" ? de === 1 : de === F);
    };
    for (let At = 1; At <= F; At++)
      if (st.filter((de) => ve(de, At)).forEach((de, ba) => Vt.push({ ...de, id: de.id + (F > 1 ? "-r" + At : ""), round: At, roundIndex: ba })), At < F && te)
        if (s != null && s.customSequence)
          Vt.push({ id: "round-break-" + At, name: "Rest", group: "Round " + (At + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: At, roundIndex: te, roundBreak: !0 });
        else {
          const de = Vt[Vt.length - 1];
          de.rest = r, de.roundBreakAfter = !0;
        }
    Ro();
    const jt = Vt.reduce((At, de) => At + de.duration + de.rest, 0), be = Math.round(Ft / 60), Ee = Math.round(jt / 60), se = F > 1 ? Wn(be) + " × " + F + " rounds" + (Rt ? " + " + Ye(Rt) + " " + he : "") + " (" + Wn(Ee) + ")" : Wn(Ee), oe = [v.length ? "warm-up" : "", B.length ? "cooldown" : ""].filter(Boolean), ua = s != null && s.customSequence ? se + " · " + te + " items" + (oe.length && !(F > 1 && Rt) ? " · " + oe.join(" + ") : "") : se + " · " + Ye(e) + " / " + Ye(r) + (oe.length && !(F > 1 && Rt) ? " · " + oe.join(" + ") : "");
    ft.textContent = Ye(Ft);
    const _a = Vt.filter((At) => !At.roundBreak).length, Ge = F > 1 ? _a + " activities · " + F + " rounds" : te + " activities";
    Ce.textContent = F > 1 ? F + " rounds · " + Wn(Ee) + " total" : "1 round", i("roundsCount").textContent = F, n.querySelectorAll("[data-rounds-step]").forEach((At) => {
      At.disabled = Number(At.dataset.roundsStep) < 0 ? F <= 1 : F >= 10;
    }), s && (s.summary = ua, s.activityCount = te);
    const Fi = n.querySelector(".workoutPanel.active .sub");
    Fi && (Fi.textContent = ua), Ea.textContent = ua, Oe(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((At) => At.textContent = Ge), Ro(), zn(), Za(), Tn(), Ki(), Kt && at(), wt.workout.classList.contains("active") && !ta && Vo();
  }
  const Ta = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', po = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Dr = {
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
  }, Ua = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Dr[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Ua(e.dataset.icon);
  });
  let da = null, ha = null;
  function Rr(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Bo(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function fi(e, r, s = {}) {
    const u = e.kind === "rest", v = e.kind === "video", T = v ? e.useVideoLength !== !1 : u ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, B = Number(u ? P.value : L.value), F = Rr(v ? e.useVideoLength === !1 ? e.duration : co({ ...e, useVideoLength: !0 }) : T ? B : e.duration || B), st = v && (Number(e.videoDuration) > 0 || Number(e.end) > 0), gt = v ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Gt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([jt, be]) => '<option value="' + jt + '"' + ((e.videoRounds || "every") === jt ? " selected" : "") + ">" + be + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Gt(e.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', lt = v ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (st ? " · " + qn(co({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Ye(B), it = document.createElement("div");
    it.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), it.dataset.index = r, it.dataset.id = e.id;
    const Nt = s.isNew ?? (ha == null ? void 0 : ha.item) === e, te = s.sheet ? '<div class="moveEditActions sheetActions">' + (Nt ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Gt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Nt ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    it.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (v ? " videoFields" : "") + '">' + gt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Gt(lt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + F.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((jt) => '<option value="' + jt + '"' + (jt === F.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[jt] + "</option>").join("") + "</select></div></div>" + te + "</div>";
    const Ft = (jt) => it.querySelector("[data-f=" + jt + "]"), Rt = () => {
      const jt = Ft("global").checked;
      Ft("dur").disabled = jt, Ft("unit").disabled = jt, it.querySelector(".creatorDurationRow").classList.toggle("isDisabled", jt);
    };
    Ft("global").addEventListener("change", Rt), Rt();
    const Lt = () => {
      var jt;
      if (s.sheet) {
        (jt = s.onCancel) == null || jt.call(s);
        return;
      }
      Nt && uo(), da = null, Te();
    }, he = () => {
      var Ee;
      if (v) {
        ve();
        return;
      }
      const jt = Ft("name").value.trim();
      if (!jt) {
        Ft("name").focus();
        return;
      }
      e.name = jt, e.group = Ft("group").value.trim() || (u ? "Rest" : "Movement");
      const be = Ft("global").checked;
      if (e.useGlobalTiming = be, be || (e.duration = Math.max(u ? 5 : 1, Ga(Ft("dur").value, Ft("unit").value))), s.sheet) {
        (Ee = s.onSaved) == null || Ee.call(s);
        return;
      }
      Nt && (ha = null), da = null, Te(), Ie(Nt ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, ve = () => {
      var oe;
      const jt = Ft("url").value.trim(), be = Mn(jt);
      if (!be) {
        Ft("urlError").hidden = !1, Ft("url").classList.add("invalid"), Ft("url").focus();
        return;
      }
      const Ee = be.id !== e.videoId;
      e.url = jt, e.videoId = be.id, e.start = be.start, e.end = be.end, Ee && (e.videoDuration = null, e.videoError = null);
      const se = Ft("name").value.trim();
      e.autoName = !se, e.name = se || (Ee ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ft("rounds").value, e.useVideoLength = Ft("global").checked, e.useVideoLength || (e.duration = Math.max(5, Ga(Ft("dur").value, Ft("unit").value))), s.sheet ? (oe = s.onSaved) == null || oe.call(s) : (Nt && (ha = null), da = null, Te(), Ie(Nt ? "Video added" : "Video updated")), (Ee || !e.videoDuration || e.autoName && !e.videoTitle) && vd(e);
    };
    if (v && Ft("url").addEventListener("input", () => {
      Ft("urlError").hidden = !0, Ft("url").classList.remove("invalid");
    }), it.querySelector("[data-a=cancel]").addEventListener("click", Lt), it.querySelector("[data-a=save]").addEventListener("click", he), s.sheet && !Nt) {
      it.querySelector("[data-a=hide]").addEventListener("click", () => {
        var be;
        return (be = s.onHide) == null ? void 0 : be.call(s);
      });
      const jt = it.querySelector("[data-a=remove]");
      $o(jt, jt.querySelector(".removeFill"), 1200, () => {
        var be;
        return (be = s.onRemove) == null ? void 0 : be.call(s);
      });
    }
    return it.addEventListener("keydown", (jt) => {
      jt.key === "Escape" && (jt.preventDefault(), jt.stopPropagation(), Lt()), jt.key === "Enter" && jt.target.matches("input") && (jt.preventDefault(), he());
    }), it;
  }
  function Ze(e, r) {
    const s = i(r);
    s.innerHTML = "", e.forEach((u, v) => {
      if (u === da && !vt()) {
        s.appendChild(fi(u, v));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Qo(u) ? " noMeta" : ""), T.dataset.index = v, T.dataset.id = u.id;
      const B = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Ye(u.duration) : u.useGlobalTiming === !1 ? Ye(u.duration) : "Global timing", F = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", st = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Ye(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? qn(co(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + B, gt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Gt(u.name) + '. Drag, or use the up and down arrow keys">' + Ta + "</button>", lt = '<div class="moveText"><div class="moveItemName">' + Gt(u.name) + F + '</div><div class="moveMeta">' + Gt(st) + "</div></div>", it = (Ft) => Ft.addEventListener("keydown", (Rt) => {
        var ve, jt;
        if (Rt.key !== "ArrowUp" && Rt.key !== "ArrowDown") return;
        Rt.preventDefault();
        const Lt = e.indexOf(u), he = Lt + (Rt.key === "ArrowUp" ? -1 : 1);
        he < 0 || he >= e.length || (e.splice(Lt, 1), e.splice(he, 0, u), Te(), (jt = (ve = i(r).children[he]) == null ? void 0 : ve.querySelector(".dragHandle")) == null || jt.focus());
      });
      if (vt()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (u.name || "step")), T.innerHTML = gt + lt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ft = T.querySelector(".dragHandle");
        Ft.addEventListener("pointerdown", (Rt) => Ya(Rt, T, s, e)), it(Ft), T.addEventListener("click", (Rt) => {
          Rt.target.closest(".dragHandle") || Wt(u, e);
        }), T.addEventListener("keydown", (Rt) => {
          Rt.key === "Enter" && Rt.target === T && (Rt.preventDefault(), Wt(u, e));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = gt + lt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Gt(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Gt(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + po + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        uo(), da = u, Te(), Bo();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, Te();
      });
      const Nt = T.querySelector(".removeBtn");
      $o(Nt, Nt.querySelector(".removeFill"), 1200, () => {
        const Ft = e.indexOf(u);
        Ft < 0 || (e.splice(Ft, 1), Te(), Ie("Removed " + u.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ft, e.length), 0, u), Te();
        } }));
      });
      const te = T.querySelector(".dragHandle");
      te.addEventListener("pointerdown", (Ft) => Ya(Ft, T, s, e)), it(te), s.appendChild(T);
    });
  }
  const oa = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, ke = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function Ya(e, r, s, u) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const v = e.currentTarget, T = e.pointerId, B = !oa();
    try {
      v.setPointerCapture(T);
    } catch {
    }
    const F = r.closest(".exerciseScroller") || hi(r), st = s.style.position;
    s.style.position = "relative";
    const gt = [...s.children].filter((ce) => ce.classList.contains("moveRow")), lt = gt.indexOf(r), it = parseFloat(getComputedStyle(s).rowGap) || 8, Nt = r.offsetHeight, te = Nt + it, Ft = gt.map((ce) => ce.offsetTop), Rt = gt.map((ce) => ce.offsetHeight), Lt = () => s.getBoundingClientRect().top, he = s.getBoundingClientRect().width, ve = e.clientY - (Lt() + Ft[lt]), jt = e.clientX;
    let be = e.clientY, Ee = e.clientX, se = Lt() + Ft[lt], oe = 0, ua = 0, _a = 0, Ge = 1, Fi = 0, At = lt, de = !1, ba = 0, wa = !1, Nl = !1, ns = Ft[lt];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", ke(8);
    const Pl = () => {
      const ce = be - ve + Nt / 2 - Lt();
      let Se = 0;
      return gt.forEach((Fe, an) => {
        an !== lt && ce > Ft[an] + Rt[an] / 2 && Se++;
      }), Se;
    }, Il = () => {
      gt.forEach((ce, Se) => {
        if (Se === lt) return;
        const Fe = lt < At && Se > lt && Se <= At ? -te : lt > At && Se >= At && Se < lt ? te : 0;
        ce.style.transform = Fe ? "translateY(" + Fe + "px)" : "";
      });
    }, Js = () => {
      const ce = s.getBoundingClientRect(), Se = Math.abs(Ee - jt) > Math.max(80, he * 0.3) || Ee < ce.left - 24 || Ee > ce.right + 24;
      Se !== de && (de = Se, r.classList.toggle("willReturn", Se), ke(Se ? 10 : 4));
      const Fe = de ? lt : Pl();
      Fe !== At && (At = Fe, Il(), de || ke(4));
    }, Oi = () => {
      if (At === lt) return Ft[lt];
      const ce = gt.filter((Fe, an) => an !== lt);
      let Se = Ft[0];
      for (let Fe = 0; Fe < At; Fe++) Se += ce[Fe].offsetHeight + it;
      return Se;
    }, os = () => {
      const ce = B ? Math.min(Math.abs(oe) / 40, 1) : 0, Se = B && !wa ? Math.max(-3, Math.min(3, _a * 0.6)) : 0;
      r.style.transform = "translate(" + ua.toFixed(2) + "px," + (se - (Lt() + Ft[lt])).toFixed(2) + "px) rotate(" + Se.toFixed(2) + "deg) scale(" + (Ge * (1 - 0.04 * ce)).toFixed(4) + "," + (Ge * (1 + 0.06 * ce)).toFixed(4) + ")";
    }, re = () => {
      ba = requestAnimationFrame(re);
      const ce = Ee - jt, Se = wa ? Lt() + ns : be - ve, Fe = wa ? 0 : de ? ce * 0.9 : Math.max(-22, Math.min(22, ce * 0.22)), an = wa ? 1 : de ? 0.97 : 1.035;
      if (!B) {
        se = Se, ua = wa ? 0 : Fe, Ge = 1, os(), wa && $e();
        return;
      }
      const Wp = wa ? 0.24 : 0.2, qp = wa ? 0.62 : 0.68;
      oe = (oe + (Se - se) * Wp) * qp, se += oe, _a = (_a + (Fe - ua) * 0.16) * 0.7, ua += _a, Fi = (Fi + (an - Ge) * 0.22) * 0.6, Ge += Fi, os(), wa && Math.abs(oe) < 0.15 && Math.abs(Se - se) < 0.5 && Math.abs(ua) < 0.5 && Math.abs(Ge - 1) < 3e-3 && $e();
    }, Be = setInterval(() => {
      if (!F || wa) return;
      const ce = F.getBoundingClientRect(), Se = 56, Fe = be < ce.top + Se ? -10 : be > ce.bottom - Se ? 10 : 0;
      Fe && (F.scrollTop += Fe, Js());
    }, 30);
    function $e() {
      if (Nl) return;
      Nl = !0, cancelAnimationFrame(ba);
      const ce = At !== lt, Se = r.dataset.id;
      if (s.classList.remove("reordering"), gt.forEach((an) => {
        an.style.transition = "none", an.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = st, ce) {
        const [an] = u.splice(lt, 1);
        u.splice(At, 0, an);
      }
      Te();
      const Fe = Se && s.querySelector('.moveRow[data-id="' + Se + '"]');
      Fe && B && Fe.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ce && Ie("Order saved");
    }
    const xa = (ce) => {
      if (ce.pointerId === T) {
        if (ce.pointerType === "mouse" && ce.buttons === 0) {
          kn();
          return;
        }
        be = ce.clientY, Ee = ce.clientX, Js();
      }
    }, en = (ce) => {
      ce.pointerId === T && kn();
    };
    function kn() {
      wa || (window.removeEventListener("pointermove", xa, !0), window.removeEventListener("pointerup", en, !0), window.removeEventListener("pointercancel", en, !0), v.removeEventListener("lostpointercapture", kn), clearInterval(Be), de && At !== lt && (At = lt, Il()), ns = Oi(), wa = !0, ke(6), setTimeout($e, 800));
    }
    window.addEventListener("pointermove", xa, !0), window.addEventListener("pointerup", en, !0), window.addEventListener("pointercancel", en, !0), v.addEventListener("lostpointercapture", kn), ba = requestAnimationFrame(re), os();
  }
  function zn() {
    var v, T, B, F;
    const e = ae[Qt], r = (v = i("warmupList")) == null ? void 0 : v.closest("section"), s = (T = i("cooldownList")) == null ? void 0 : T.closest("section"), u = (F = (B = i("strengthList")) == null ? void 0 : B.closest("section")) == null ? void 0 : F.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), Ze(ye, "warmupList"), Ze(Xe, "strengthList"), Ze(qe, "cooldownList");
  }
  function uo() {
    if (!ha) return;
    const { item: e, arr: r } = ha;
    ha = null;
    const s = r.indexOf(e);
    s >= 0 && r.splice(s, 1), da === e && (da = null);
  }
  function fo(e) {
    return e.id === "warmupList" ? { arr: ye, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: qe, kind: "cooldown", group: "Cooldown" } : { arr: Xe, kind: "work", group: "" };
  }
  function dn(e, r) {
    const s = fo(r), u = Date.now().toString(36);
    return e === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(L.value) };
  }
  const Ia = "cubic-bezier(.34,1.46,.64,1)";
  function $i(e, r) {
    if (oa() || !e) {
      r();
      return;
    }
    const s = (T) => {
      var B;
      return ((B = T.dataset) == null ? void 0 : B.id) || T;
    }, u = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], v = new Map(u().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), u().forEach((T) => {
      const B = v.get(s(T));
      if (B === void 0) return;
      const F = B - T.getBoundingClientRect().top;
      Math.abs(F) < 0.5 || T.animate([{ transform: "translateY(" + F + "px)" }, { transform: "none" }], { duration: 440, easing: Ia });
    });
  }
  function ho(e, r) {
    if (!e || oa()) return;
    const s = e.offsetHeight, u = Math.max(0, s - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ia });
  }
  function Xi(e, r, s, u) {
    const { arr: v } = fo(r), T = dn(e, r);
    v.splice(Math.max(0, Math.min(s, v.length)), 0, T), ha = { item: T, arr: v }, da = T, $i(r.closest(".exerciseScroller,.createStepSlot") || r, () => Te());
    const B = r.querySelector(".moveRow.editing");
    return ho(B, u), Bo(e === "rest"), B;
  }
  function hi(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const x = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function C(e, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Ta + '</span><span class="addGhostText"><strong>' + Gt(r[0]) + "</strong><small>" + Gt(r[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function A(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function H(e, r, s, u) {
    (da || ha) && (uo(), da = null, Te());
    const v = e.getBoundingClientRect(), T = C(r, x[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = v.width + "px", T.style.height = v.height + "px", T.style.transform = "translate(" + v.left + "px," + v.top + "px)", e.classList.add("lifting");
    const B = hi(e);
    return Z({
      ghost: T,
      origin: v,
      sx: s,
      sy: u,
      scroller: B,
      column: e.closest(".exerciseScroller,.createFlow") || B,
      home: () => e.getBoundingClientRect(),
      onDrop: (F, st, gt) => {
        A(T), e.classList.remove("lifting"), Xi(r, F, st, gt);
      },
      onReturn: () => {
        A(T), e.classList.remove("lifting");
      }
    });
  }
  function Z({ ghost: e, origin: r, sx: s, sy: u, scroller: v, column: T, home: B, onDrop: F, onReturn: st, rowLook: gt = !1 }) {
    var os;
    const lt = !oa(), it = ((os = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : os.offsetHeight) || 80, Nt = s - r.left, te = u - r.top, Ft = 44;
    let Rt = s, Lt = u, he = r.left, ve = r.top, jt = 0, be = 0, Ee = !lt, se = null, oe = null, ua = -1, _a = 0, Ge = null;
    const Fi = () => ["warmupList", "strengthList", "cooldownList"].map((re) => i(re)).filter((re) => re && re.getClientRects().length && !re.closest("[hidden]")), At = (re) => {
      if (re === se) return;
      se = re, e.classList.toggle("overList", !!re || gt);
      const Be = re ? re.getBoundingClientRect().width : r.width;
      e.style.width = Be + "px", e.style.height = (re ? it : r.height) + "px";
    }, de = (re) => {
      re.classList.add("leaving"), re.style.height = "0px", re.style.marginTop = "-8px", setTimeout(() => re.remove(), lt ? 320 : 0);
    }, ba = (re, Be, $e) => {
      if (oe && oe.parentNode === re && ua === $e || (oe && (de(oe), oe = null, ua = -1), !re)) return;
      const xa = document.createElement("div");
      xa.className = "dropSlot", re.insertBefore(xa, Be), oe = xa, ua = $e, xa.getBoundingClientRect(), xa.style.height = it + "px", xa.style.marginTop = "0px";
    }, wa = () => {
      let re = null, Be = 1 / 0;
      for (const kn of Fi()) {
        const ce = kn.getBoundingClientRect();
        if (Rt < ce.left - 48 || Rt > ce.right + 48) continue;
        const Se = ce.top - 28, Fe = ce.bottom + 28, an = Lt < Se ? Se - Lt : Lt > Fe ? Lt - Fe : 0;
        an < Be && (Be = an, re = kn);
      }
      const $e = T == null ? void 0 : T.getBoundingClientRect(), en = $e && Rt >= $e.left && Rt <= $e.right && Lt >= $e.top && Lt <= $e.bottom || Be === 0 ? re : null;
      if (en) {
        const kn = [...en.children].filter((Se) => Se.classList.contains("moveRow"));
        let ce = kn.findIndex((Se) => {
          const Fe = Se.getBoundingClientRect();
          return Lt < Fe.top + Fe.height / 2;
        });
        ce < 0 && (ce = kn.length), ba(en, kn[ce] || null, ce);
      } else ba(null);
      At(en);
    }, Nl = () => {
      if (Ge) return Ge.aim();
      if (se) {
        const re = se.getBoundingClientRect();
        let Be = Lt - it / 2;
        return oe && (Be = Be * 0.6 + oe.getBoundingClientRect().top * 0.4), { x: re.left, y: Be };
      }
      return { x: Rt - Nt, y: Lt - te };
    }, ns = (re, Be, $e, xa) => {
      e.style.transform = "translate(" + he + "px," + ve + "px) rotate(" + re + "deg) rotate(" + Be + "rad) scale(" + $e + "," + xa + ") rotate(" + -Be + "rad)";
    }, Pl = () => {
      if (_a = requestAnimationFrame(Pl), !Ee) {
        const ce = Rt - s, Se = Lt - u, Fe = Math.min(Math.hypot(ce, Se) / Ft, 1);
        he = r.left + ce * 0.35, ve = r.top + Se * 0.35, ns(0, Math.atan2(Se, ce), 1 + 0.155 * Fe, 1 - 0.1 * Fe);
        return;
      }
      const re = Nl();
      if (!lt) {
        he = re.x, ve = re.y, ns(0, 0, 1, 1), Ge && (cancelAnimationFrame(_a), Ge.done());
        return;
      }
      const Be = Ge ? Ge.k : 0.17, $e = Ge ? Ge.d : 0.7;
      jt = (jt + (re.x - he) * Be) * $e, be = (be + (re.y - ve) * Be) * $e, he += jt, ve += be;
      const xa = Math.hypot(jt, be), en = Math.min(xa / 48, 1), kn = se || Ge ? 0 : Math.max(-5, Math.min(5, jt * 0.32));
      ns(kn, Math.atan2(be, jt), 1 + 0.1 * en, 1 - 0.063 * en), Ge && xa < 0.15 && Math.hypot(re.x - he, re.y - ve) < 0.6 && (cancelAnimationFrame(_a), Ge.done());
    }, Il = setInterval(() => {
      if (!v || Ge) return;
      const re = v.getBoundingClientRect(), Be = 64, $e = Lt < re.top + Be ? -(re.top + Be - Lt) / 4 : Lt > re.bottom - Be ? (Lt - (re.bottom - Be)) / 4 : 0;
      $e && (v.scrollTop += Math.max(-18, Math.min(18, $e)), wa());
    }, 30);
    _a = requestAnimationFrame(Pl);
    let Js = !1;
    const Oi = (re, Be) => {
      if (Js) return;
      Js = !0, cancelAnimationFrame(_a);
      const $e = oe ? oe.offsetHeight : it;
      !re && oe && (oe.remove(), oe = null), re ? F(re, Be, $e) : st();
    };
    return {
      move(re, Be) {
        Rt = re, Lt = Be, !Ee && Math.hypot(Rt - s, Lt - u) > Ft && (Ee = !0, jt = (Rt - s) * 0.085, be = (Lt - u) * 0.085), Ee && wa();
      },
      drop(re) {
        clearInterval(Il);
        const Be = se, $e = ua;
        if (!re && Be && oe) {
          const xa = oe;
          Ge = { k: 0.24, d: 0.62, aim: () => {
            const en = xa.getBoundingClientRect();
            return { x: en.left, y: en.top };
          }, done: () => Oi(Be, $e) }, setTimeout(() => Oi(Be, $e), 650), lt || (cancelAnimationFrame(_a), Oi(Be, $e));
          return;
        }
        ba(null), At(null), Ge = { k: 0.2, d: 0.66, aim: () => {
          const xa = B();
          return { x: xa.left, y: xa.top };
        }, done: () => Oi(null) }, setTimeout(() => Oi(null), 650), lt || (cancelAnimationFrame(_a), Oi(null));
      }
    };
  }
  function X(e, r) {
    let s = !1;
    e.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (vt()) {
        Yt(r);
        return;
      }
      const v = i("strengthList"), T = Xi(r, v, fo(v).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: oa() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const v = u.pointerId, T = u.clientX, B = u.clientY;
      let F = null, st = !1;
      try {
        e.setPointerCapture(v);
      } catch {
      }
      const gt = (Lt) => {
        if (Lt.pointerId === v) {
          if (Lt.pointerType === "mouse" && Lt.buttons === 0) {
            Rt(!1);
            return;
          }
          if (!F) {
            if (Math.hypot(Lt.clientX - T, Lt.clientY - B) < 6) return;
            F = H(e, r, T, B);
          }
          F.move(Lt.clientX, Lt.clientY);
        }
      }, lt = (Lt) => {
        Lt.pointerId === v && Rt(!1);
      }, it = (Lt) => {
        Lt.pointerId === v && Rt(!0);
      }, Nt = () => Rt(!1), te = () => Rt(!0), Ft = (Lt) => {
        Lt.key === "Escape" && F && (Lt.preventDefault(), Lt.stopPropagation(), Rt(!0));
      };
      function Rt(Lt) {
        if (!st && (st = !0, window.removeEventListener("pointermove", gt, !0), window.removeEventListener("pointerup", lt, !0), window.removeEventListener("pointercancel", it, !0), window.removeEventListener("keydown", Ft, !0), window.removeEventListener("blur", te), e.removeEventListener("lostpointercapture", Nt), F)) {
          const he = F;
          F = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), he.drop(Lt);
        }
      }
      window.addEventListener("pointermove", gt, !0), window.addEventListener("pointerup", lt, !0), window.addEventListener("pointercancel", it, !0), window.addEventListener("keydown", Ft, !0), window.addEventListener("blur", te), e.addEventListener("lostpointercapture", Nt);
    });
  }
  const ct = (ic = window.matchMedia) == null ? void 0 : ic.call(window, "(max-width: 620px)");
  function vt() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const yt = (e) => e.charAt(0).toUpperCase() + e.slice(1), It = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let _t = null, Ct = null;
  function Zt(e, r, s, u) {
    Ht(), i("sheetTitle").textContent = e;
    const v = i("sheetBody");
    v.innerHTML = "", v.appendChild(r), _t = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !v.contains(r)) return;
      const T = u ? v.querySelector("input[data-f=url],input[data-f=name]") : v.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, oa() ? 0 : 360);
  }
  function Ht() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = _t;
    _t = null, r == null || r(), setTimeout(ue, 0);
  }
  i("sheetScrim").addEventListener("click", Ht), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ht());
  });
  function Wt(e, r) {
    const s = fi(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Ht(), Te(), Ie(yt(It(e)) + " updated");
      },
      onCancel: Ht,
      onHide() {
        e.hidden = !e.hidden, Ht(), Te(), Ie((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Ht();
        const u = r.indexOf(e);
        u < 0 || (r.splice(u, 1), Te(), Ie("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, e), Te();
        } }));
      }
    });
    Zt("Edit " + It(e), s, null, !1);
  }
  function $t() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, v]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ua(s) + "</span><span><strong>" + u + "</strong><small>" + v + "</small></span>", T.addEventListener("click", () => Yt(r)), e.appendChild(T);
    }), Zt("Add to the move", e, null, !1);
  }
  function Yt(e) {
    Ct && mo();
    const r = dn(e, i("strengthList")), s = fi(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Ht(), We(r, e);
      },
      onCancel: Ht
    });
    Zt("New " + It(r), s, null, !0);
  }
  const Tt = i("workoutModal").querySelector(".modalStatic"), ee = { parent: Tt.parentNode, next: Tt.nextSibling };
  function ne() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Tt);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Ht), e.appendChild(r), Zt("Setup", e, () => {
      ee.parent.insertBefore(Tt, ee.next), Oe();
    }, !1);
  }
  function Oe() {
    var r, s;
    const e = i("setupSummaryName");
    e && (e.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = ae[Qt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = Ea.textContent);
  }
  i("setupSummary").addEventListener("click", ne), i("addFab").addEventListener("click", $t);
  function Et() {
    const e = i("strengthList");
    return hi(e) || e.closest(".exerciseScroller");
  }
  function _e() {
    const e = i("strengthList").getBoundingClientRect(), r = (Et() || i("strengthList")).getBoundingClientRect(), s = (Ct == null ? void 0 : Ct.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function We(e, r) {
    var F;
    const s = C(r, [e.name || x[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Gt(e.name) + '">✕</button>', s.appendChild(u), Ct = { item: e, type: r, ghost: s };
    const v = ((F = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : F.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = v + "px";
    const T = _e(), B = Da.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + B + "px)", s.getBoundingClientRect(), oa() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", mo), u.querySelector("[data-a=discard]").addEventListener("click", Ji), s.addEventListener("pointerdown", cn);
  }
  function cn(e) {
    if (!Ct || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: s } = Ct, u = e.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const v = s.getBoundingClientRect(), T = Et(), B = Z({
      ghost: s,
      origin: { left: v.left, top: v.top, width: v.width, height: v.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: T,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: _e,
      onDrop: (Rt, Lt, he) => {
        Ct = null, A(s), Sn(r, Rt, Lt, he);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let F = !1;
    const st = (Rt) => {
      if (Rt.pointerId === u) {
        if (Rt.pointerType === "mouse" && Rt.buttons === 0) {
          Ft(!1);
          return;
        }
        B.move(Rt.clientX, Rt.clientY);
      }
    }, gt = (Rt) => {
      Rt.pointerId === u && Ft(!1);
    }, lt = (Rt) => {
      Rt.pointerId === u && Ft(!0);
    }, it = () => Ft(!1), Nt = () => Ft(!0), te = (Rt) => {
      Rt.key === "Escape" && (Rt.preventDefault(), Ft(!0));
    };
    function Ft(Rt) {
      F || (F = !0, window.removeEventListener("pointermove", st, !0), window.removeEventListener("pointerup", gt, !0), window.removeEventListener("pointercancel", lt, !0), window.removeEventListener("keydown", te, !0), window.removeEventListener("blur", Nt), s.removeEventListener("lostpointercapture", it), B.drop(Rt));
    }
    window.addEventListener("pointermove", st, !0), window.addEventListener("pointerup", gt, !0), window.addEventListener("pointercancel", lt, !0), window.addEventListener("keydown", te, !0), window.addEventListener("blur", Nt), s.addEventListener("lostpointercapture", it);
  }
  function Sn(e, r, s, u) {
    const v = fo(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = v.kind, v.group && (!e.group || e.group === "Movement") && (e.group = v.group)), v.arr.splice(Math.max(0, Math.min(s, v.arr.length)), 0, e), $i(r.closest(".exerciseScroller,.createStepSlot") || r, () => Te()), ho(r.querySelector('.moveRow[data-id="' + e.id + '"]'), u), Ie(yt(It(e)) + " added");
  }
  function mo() {
    var u;
    if (!Ct) return;
    const { item: e, ghost: r } = Ct;
    Ct = null, A(r);
    const s = i("strengthList");
    Sn(e, s, fo(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: oa() ? "auto" : "smooth" });
  }
  function Ji() {
    if (!Ct) return;
    const e = Ct.ghost;
    Ct = null, A(e), Ie("Discarded");
  }
  function Qi() {
    Ct && (Ct.ghost.remove(), Ct = null);
  }
  window.addEventListener("resize", () => {
    if (Ct != null && Ct.ghost.classList.contains("hovering")) {
      const e = _e();
      Ct.ghost.style.width = e.width + "px", Ct.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (rc = ct == null ? void 0 : ct.addEventListener) == null || rc.call(ct, "change", () => {
    Ht(), Ct && !vt() && mo(), zn();
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
      Cn();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, v = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: v + "px", height: T + "px", top: s + "px", left: u + "px" });
    const B = e.getBoundingClientRect();
    Math.abs(B.top - s) > 0.5 && (e.style.top = 2 * s - B.top + "px"), Math.abs(B.left - u) > 0.5 && (e.style.left = 2 * u - B.left + "px");
  }
  function Cn() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (sc = window.visualViewport) == null || sc.addEventListener("resize", ue), (lc = window.visualViewport) == null || lc.addEventListener("scroll", ue), window.addEventListener("resize", ue), window.addEventListener("scroll", ue, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ue, 250));
  function Za() {
    Xe.length > 0;
    const e = i("addMovementBtn"), r = i("addRestBtn");
    e && (e.innerHTML = Ta + "<span>Add movement</span>"), r && (r.innerHTML = Ta + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = Ta + "<span>Add video</span>");
  }
  function Tn() {
    const e = i("useGlobalTiming").checked, r = i("addMovementDuration"), s = i("addMovementUnit");
    r.disabled = e, s.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Ye(L.value);
    const u = i("useGlobalRestTiming").checked, v = i("addRestDuration"), T = i("addRestUnit");
    v.disabled = u, T.disabled = u, v.parentElement.style.opacity = u ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Ye(P.value);
  }
  let yn = "movement";
  function go(e) {
    yn = e;
    const r = i("movementFields"), s = i("restFields");
    r.hidden = e !== "movement", s.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Tn();
  }
  function pn() {
    ae[Qt];
    const e = Kt ? !0 : i("useGlobalTiming").checked, r = e ? Number(L.value) : Ga(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = Kt ? !0 : i("useGlobalRestTiming").checked, u = s ? Number(P.value) : Ga(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (yn === "rest") {
      const v = i("addRestTitle").value.trim() || "Rest", T = i("addRestGroup").value.trim() || "Rest";
      Xe.push({
        id: "rest-" + Date.now(),
        name: v,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(P.value))
      }), Te(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Ie("Rest added"), Kt && (S("movements"), at());
    } else {
      const v = i("addMovementInput").value.trim();
      if (!v) return;
      const T = i("addMovementGroup").value.trim() || "Movement";
      Xe.push({
        id: "movement-" + Date.now(),
        name: v,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(L.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Te(), i("movementCreator").hidden = !0, Ie("Movement added"), Kt && (S("movements"), at());
    }
    Za();
  }
  let ma = null;
  function Ie(e, r) {
    const s = i("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = e, s.appendChild(u), r) {
      const v = document.createElement("button");
      v.type = "button", v.className = "toastAction", v.textContent = r.label, v.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(ma);
      }), s.appendChild(v);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(ma), ma = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const ad = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], nd = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function us(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function mi(e, r) {
    return ad[us(r)];
  }
  function il(e) {
    return nd[us(e)];
  }
  function je(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Ln() {
    return { morning: me().morningTime || "08:00", evening: me().eveningTime || "19:00" };
  }
  function No(e) {
    const [r, s] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function od(e) {
    const r = Ln();
    return e.getHours() * 60 + e.getMinutes() >= No(r.evening) ? "evening" : "morning";
  }
  function Br(e, r) {
    return xe.checkins.find((s) => s.date === e && s.slot === r);
  }
  function un(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function tr() {
    const e = /* @__PURE__ */ new Date(), r = je(e), s = od(e), u = Ln(), v = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && v < No(u.morning) || un(Br(r, s)) ? null : s;
  }
  const An = i("checkinModal"), Vn = i("checkinTab"), id = i("checkinBadge"), vo = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function gi(e) {
    const { input: r, fill: s } = vo[e];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", mi(e, r.value));
  }
  Object.keys(vo).forEach((e) => vo[e].input.addEventListener("input", () => gi(e)));
  let ia = null;
  function rl() {
    const e = Ln(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < No(e.morning) ? "Next check-in at " + e.morning : s < No(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function sl() {
    const e = Ln(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (v, T) => {
      const [B, F] = v.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), B, F);
    };
    return s < No(e.morning) ? { date: u(e.morning), time: e.morning } : s < No(e.evening) ? { date: u(e.evening), time: e.evening } : { date: u(e.morning, !0), time: e.morning };
  }
  let Nr = null, vi = null;
  function ll() {
    if (tr()) {
      bi(), Gn();
      return;
    }
    const e = sl(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), v = r % 60;
    i("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(v).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function rd() {
    ll(), Vn.classList.add("peek"), clearInterval(vi), vi = setInterval(ll, 1e3), clearTimeout(Nr), Nr = setTimeout(bi, 6e3);
  }
  function bi() {
    Vn.classList.remove("peek"), clearInterval(vi), clearTimeout(Nr);
  }
  function fs() {
    const e = tr();
    if (!e) {
      Vn.classList.contains("peek") ? bi() : rd();
      return;
    }
    ia = { date: je(/* @__PURE__ */ new Date()), slot: e };
    const s = Br(ia.date, e), u = xe.checkins.find((v) => un(v));
    Object.keys(vo).forEach((v) => {
      vo[v].input.value = (s == null ? void 0 : s[v]) ?? (u == null ? void 0 : u[v]) ?? 50, gi(v);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", An.classList.add("open"), An.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => vo.mood.input.focus());
  }
  function er() {
    An.classList.remove("open"), An.setAttribute("aria-hidden", "true"), ia && (ar = ia.date + "-" + ia.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ar);
    } catch {
    }
    ia = null, Gn();
  }
  function sd() {
    if (!ia) return;
    if (un(Br(ia.date, ia.slot))) {
      er();
      return;
    }
    const { date: e, slot: r } = ia;
    let s = Br(e, r);
    s || (s = { date: e, slot: r }, xe.checkins.unshift(s), xe.checkins = xe.checkins.slice(0, 2e3)), s.mood = Number(vo.mood.input.value), s.energy = Number(vo.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Va(), d.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: mi("mood", s.mood), energy_label: mi("energy", s.energy) }), Ie((r === "morning" ? "Morning" : "Evening") + " check-in saved"), er(), nr(), or(), Qn(), eo();
  }
  let ar = "";
  try {
    ar = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Gn() {
    const e = tr();
    id.hidden = !e, Vn.hidden = !e, e || bi(), Vn.classList.toggle("due", !!e), Vn.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : rl()), Vn.title = e ? "Check in now" : rl();
  }
  function hs() {
    Gn();
    const e = tr();
    !e || An.classList.contains("open") || me().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !wt.home.classList.contains("active") || Da.classList.contains("open") || ar !== je(/* @__PURE__ */ new Date()) + "-" + e && fs());
  }
  Vn.addEventListener("click", fs), i("checkinLater").addEventListener("click", er), i("checkinSave").addEventListener("click", sd), An.addEventListener("click", (e) => {
    e.target === An && er();
  }), An.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), er());
  }), setInterval(hs, 3e4);
  function nr() {
    const e = je(/* @__PURE__ */ new Date()), r = (s) => xe.checkins.find((u) => u.date === e && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const v = r(s);
      i(u).textContent = v ? mi(s, v[s]) : "—";
    });
  }
  function or() {
    const e = i("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((gt, lt) => {
      const it = new Date(s.getFullYear(), s.getMonth(), s.getDate() + lt), Nt = je(it), te = xe.checkins.filter((Rt) => Rt.date === Nt), Ft = (Rt) => {
        const Lt = te.map((he) => he[Rt]).filter((he) => he != null);
        return Lt.length ? Lt.reduce((he, ve) => he + ve, 0) / Lt.length : null;
      };
      return { d: it, key: Nt, mood: Ft("mood"), energy: Ft("energy"), count: te.filter(un).length, future: it > r && Nt !== je(r) };
    }), v = (gt) => {
      const lt = u.map((it) => it[gt]).filter((it) => it != null);
      return lt.length ? lt.reduce((it, Nt) => it + Nt, 0) / lt.length : null;
    }, T = v("mood"), B = v("energy"), F = (gt, lt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + gt + "</span><span>" + (lt == null ? "—" : Gt(mi("", lt))) + '</span></div><div class="feelTrack"><span style="width:' + (lt == null ? 0 : Math.max(4, lt)) + "%;background:" + (lt == null ? "transparent" : il(lt)) + '"></span></div></div>', st = u.filter((gt) => gt.mood != null && gt.energy != null).sort((gt, lt) => lt.mood + lt.energy - (gt.mood + gt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Gt(mi("", (T + B) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (st ? " · best day " + Gt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(st.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (gt) => '<div class="weekChip feelDay' + (gt.future ? " future" : "") + (gt.key === je(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Gt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(gt.d)) + "</strong>" + (gt.count >= 2 ? '<span class="weekTick">' + Ua("check") + "</span>" : '<span class="feelDots">' + "●".repeat(gt.count) + "</span>") + "</div>" + F("Mood", gt.mood) + F("Energy", gt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ir = i("upcomingCountSetting");
  ir.addEventListener("change", () => {
    so = ir.value === "all" ? "all" : Number(ir.value), Ts();
  });
  const rr = i("tempoRevealBtn"), Pr = i("tempoExperiment"), _n = i("tempoQuad"), En = i("tempoDot"), ms = i("tempoEstimate"), gs = i("tempoReadout");
  let Po = { x: 0.5, y: 0.5 }, Io = !1, Ir = { total: 20, work: 45, rest: 15 };
  function vs(e, r, s, u) {
    const v = Math.max(r, Math.min(s, e));
    return Math.round((v - r) / u) * u + r;
  }
  function ld(e, r) {
    const s = (e - 0.5) * 2, u = (r - 0.5) * 2, v = vs(
      Ir.total + s * 5 + u * 8,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    ), T = vs(
      Ir.work + s * 10 + u * 8,
      Number(L.min),
      Number(L.max),
      Number(L.step)
    ), B = vs(
      Ir.rest + s * 6 + u * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return E.value = v, L.value = T, P.value = B, dt.textContent = T + " sec", q.textContent = B + " sec", Ro(), { total: v, work: T, rest: B };
  }
  function bs(e, r) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", v = ld(e, r);
    gs.textContent = s + " + " + u, ms.textContent = v.total + " min", _n.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + v.total + " minutes");
  }
  function ws(e) {
    const r = _n.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    Po = { x: s, y: u }, En.style.left = s * 100 + "%", En.style.top = u * 100 + "%", bs(s, u);
  }
  rr.addEventListener("click", () => {
    const e = Pr.hidden;
    Pr.hidden = !e, rr.setAttribute("aria-expanded", e ? "true" : "false"), rr.textContent = e ? "Now close this" : "Don’t try this!", e && (Ir = {
      total: Number(E.value),
      work: Number(L.value),
      rest: Number(P.value)
    }, Po = { x: 0.5, y: 0.5 }, En.style.left = "50%", En.style.top = "50%", bs(Po.x, Po.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const bo = i("testingFeedbackForm"), xs = i("testingFeedbackThanks"), dd = i("testingFeedbackAgain");
  bo.addEventListener("submit", (e) => {
    e.preventDefault(), bo.hidden = !0, xs.hidden = !1, Ie("Feedback captured for prototype");
  }), dd.addEventListener("click", (e) => {
    e.preventDefault(), bo.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), xs.hidden = !0, bo.hidden = !1;
  }), _n.addEventListener("pointerdown", (e) => {
    var r;
    Io = !0, ws(e);
    try {
      (r = _n.setPointerCapture) == null || r.call(_n, e.pointerId);
    } catch {
    }
  }), _n.addEventListener("pointermove", (e) => {
    Io && ws(e);
  }), _n.addEventListener("pointerup", (e) => {
    Io && (Io = !1, ws(e), Te());
  }), _n.addEventListener("pointercancel", () => Io = !1), _n.addEventListener("keydown", (e) => {
    let { x: r, y: s } = Po, u = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : u = !1, u && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Po = { x: r, y: s }, En.style.left = r * 100 + "%", En.style.top = s * 100 + "%", bs(r, s), Te());
  });
  const Da = i("workoutModal");
  let Dn = null;
  function Ho(e) {
    return e.map((r) => ({ ...r }));
  }
  function dl() {
    const e = ae[Qt];
    return {
      key: Qt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ho(ye),
      strength: Ho(Xe),
      cooldown: Ho(qe),
      total: Number(E.value),
      work: Number(L.value),
      rest: Number(P.value),
      rounds: Number(pe.value) || 1
    };
  }
  function ys(e = !1) {
    Kt = !!e, da = null, ha = null, Ht(), Qi(), Dn = dl(), i("moveEditorTitle").textContent = Kt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Kt, i("warmupRow").hidden = Kt, i("deleteMoveOpen").hidden = Kt;
    const r = i("createMoveOptions");
    r.hidden = !Kt;
    {
      const s = ae[Qt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (ks(), Kt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = ae[Qt];
      jn((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, go("movement"), Za(), Tn(), Pr.hidden = !0, rr.setAttribute("aria-expanded", "false"), rr.textContent = "Don’t try this!", Da.classList.toggle("createMode", Kt), Da.querySelector(".modal").classList.toggle("createMode", Kt), Da.classList.add("open"), Da.setAttribute("aria-hidden", "false"), ue(), Kt && Pt();
  }
  function cl() {
    const e = ae[Qt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function ks() {
    const e = cl(), r = i("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ae[Qt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, ea()) : (e.warmupOff = !e.warmupOff, Te()), ks());
  });
  function Hr() {
    Ht(), Qi(), Cn(), ha = null, da = null, Da.classList.contains("createMode") && G(), Da.classList.remove("createMode"), Da.querySelector(".modal").classList.remove("createMode"), Da.classList.remove("open"), Da.setAttribute("aria-hidden", "true");
  }
  function pl() {
    if (!Dn) return;
    const e = Dn;
    e.profile && (ae[e.key] = JSON.parse(JSON.stringify(e.profile))), Qt = e.key, ye = Ho(e.warmup), Xe = Ho(e.strength), qe = Ho(e.cooldown), E.value = e.total, L.value = e.work, P.value = e.rest, pe.value = e.rounds || 1;
    const r = ae[Qt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === Qt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r.name);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      g.value = r.name;
    }
    Te();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Kt) {
      const e = Qt;
      delete ae[e], Kt = !1, Bt = null, la(xe.order.find((r) => ae[r]) || Object.keys(ae)[0]);
    } else
      pl();
    Hr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Ht(), Ct && mo();
    const e = ae[Qt], r = g.value.trim() || "New move";
    if (e && (e.name = r), uo(), da = null, Te(), Kt && e)
      Ca(Qt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === Qt)), Kt = !1, Bt = null, xe.order.includes(Qt) || xe.order.push(Qt), Ie("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = r);
      }
      Ie("Move saved");
    }
    Dn = null, Hr(), Va();
  }), Da.addEventListener("click", (e) => {
    if (e.target === Da) {
      if (Kt) {
        const r = Qt;
        delete ae[r], Kt = !1, Bt = null, la(xe.order.find((s) => ae[s]) || Object.keys(ae)[0]);
      } else
        pl();
      Hr();
    }
  }), X(i("addMovementBtn"), "movement"), X(i("addRestBtn"), "rest"), X(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Tn), i("useGlobalRestTiming").addEventListener("change", Tn), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    jn(e.dataset.movePreset, !0), Te();
  })), i("includeWarmupPreset").addEventListener("change", ea), i("includeCooldownPreset").addEventListener("change", ea), i("includeWarmupPreset").addEventListener("change", at), i("includeCooldownPreset").addEventListener("change", at), g.addEventListener("input", at), g.addEventListener("input", Oe), i("confirmAddMovement").addEventListener("click", pn), i("confirmAddRest").addEventListener("click", pn), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && pn();
  });
  const sr = i("countdown"), Ms = i("countNum"), fn = i("countdownPixelCanvas");
  let wi = null, lr = "appear";
  class ul {
    constructor(r, s, u, v, T, B, F) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = v, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * B, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = F, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Fr = [], fl = 1, hl = 1;
  function wo() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function cd() {
    var gt;
    if (!fn) return;
    const e = wo(), r = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    fl = r, hl = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    fn.width = Math.floor(r * u), fn.height = Math.floor(s * u), fn.style.width = r + "px", fn.style.height = s + "px";
    const v = fn.getContext("2d");
    v.setTransform(u, 0, 0, u, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], B = 12, F = (gt = window.matchMedia) == null ? void 0 : gt.call(window, "(prefers-reduced-motion: reduce)").matches, st = F ? 0 : 0.055;
    Fr = [];
    for (let lt = 0; lt < r; lt += B)
      for (let it = 0; it < s; it += B) {
        const Nt = lt - r / 2, te = it - s / 2, Ft = Math.sqrt(Nt * Nt + te * te), Rt = F ? 0 : Math.random() * 75 + Ft * 0.05, Lt = new ul({ width: r, height: s }, v, lt, it, T[Math.floor(Math.random() * T.length)], st, Rt);
        Lt.maxSizeInteger = 4, Lt.maxSize = Math.random() * 3.2 + 0.8, Lt.sizeStep = 0.35 + Math.random() * 0.45, Fr.push(Lt);
      }
  }
  function dr(e) {
    cancelAnimationFrame(wi), lr = e;
    const r = fn == null ? void 0 : fn.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, fl, hl);
      let u = !0;
      Fr.forEach((v) => {
        v[lr](), v.isIdle || (u = !1);
      }), lr === "disappear" && u || (wi = requestAnimationFrame(s));
    }
    wi = requestAnimationFrame(s);
  }
  function Ke() {
    cancelAnimationFrame(wi), cd(), dr("appear"), setTimeout(() => dr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    sr.classList.contains("active") && Ke();
  });
  const cr = i("pixelTrailCanvas"), xi = cr.getContext("2d");
  let Un = !0, hn = 0.7, yi = 600, pr = [], ki = null, Yn = { x: 0, y: 0, ready: !1 };
  function Ss() {
    const e = c.getBoundingClientRect(), r = wo(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, e.width / r), v = Math.max(1, e.height / r);
    cr.width = Math.max(1, Math.floor(u * s)), cr.height = Math.max(1, Math.floor(v * s)), cr.style.width = u + "px", cr.style.height = v + "px", xi.setTransform(s, 0, 0, s, 0, 0);
  }
  function pd(e, r) {
    if (!Un) return;
    const s = performance.now();
    Yn.ready || (Yn = { x: e, y: r, ready: !0 });
    const u = 7;
    for (let v = 1; v <= u; v++) {
      const T = v / u;
      pr.push({
        x: Yn.x + (e - Yn.x) * T,
        y: Yn.y + (r - Yn.y) * T,
        born: s - (u - v) * 10
      });
    }
    Yn = { x: e, y: r, ready: !0 };
  }
  function Or(e) {
    if (ki = null, !b) return;
    if (!wt.workout.classList.contains("active")) {
      ki = requestAnimationFrame(Or);
      return;
    }
    const r = c.getBoundingClientRect(), s = wo();
    xi.clearRect(0, 0, r.width / s, r.height / s), Un && (pr = pr.filter((v) => e - v.born < yi), xi.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", pr.forEach((v) => {
      const T = (e - v.born) / yi, B = (1 - T) * hn, F = Math.round(v.x / 14) * 14, st = Math.round(v.y / 14) * 14;
      xi.globalAlpha = Math.max(0, B);
      const gt = 2 + 5 * (1 - T) * hn;
      xi.fillRect(F - gt / 2, st - gt / 2, gt, gt);
    }), xi.globalAlpha = 1), ki = requestAnimationFrame(Or);
  }
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect(), s = wo();
    pd((e.clientX - r.left) / s, (e.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => Yn.ready = !1), new ResizeObserver(Ss).observe(c), Ss(), ki = requestAnimationFrame(Or);
  const Zn = i("movementRippleCanvas"), Rn = Zn.getContext("2d");
  let xo = !0, Mi = null, ud = performance.now();
  function Ka() {
    const e = Zn.parentElement.getBoundingClientRect(), r = wo(), s = Math.max(1, e.width / r), u = Math.max(1, e.height / r), v = Math.min(window.devicePixelRatio || 1, 2);
    Zn.width = Math.max(1, Math.floor(s * v)), Zn.height = Math.max(1, Math.floor(u * v)), Zn.style.width = s + "px", Zn.style.height = u + "px", Rn.setTransform(v, 0, 0, v, 0, 0);
  }
  function ml() {
    var e;
    return ca || ((e = Vt[ie]) == null ? void 0 : e.kind) === "rest";
  }
  function fd() {
    const e = Vt[ie];
    return ml() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function La(e) {
    if (Mi = null, !b) return;
    if (!wt.workout.classList.contains("active")) {
      Mi = requestAnimationFrame(La);
      return;
    }
    const r = Zn.parentElement.getBoundingClientRect(), s = wo(), u = Math.max(1, r.width / s), v = Math.max(1, r.height / s);
    if (Rn.clearRect(0, 0, u, v), xo) {
      const T = fd(), B = (e - ud) % T / T, F = 15, st = Math.max(8, Math.round(F * v / Math.max(1, u))), gt = u / (F + 1), lt = v / (st + 1), it = u * 0.5, Nt = v * 0.52, te = Math.hypot(it, Nt), Rt = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Lt = 1; Lt <= st; Lt++)
        for (let he = 1; he <= F; he++) {
          const ve = he * gt, jt = Lt * lt, be = Math.hypot(ve - it, jt - Nt) / te, Ee = ml(), se = Ee ? Math.exp(-Math.pow((be - (B * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, oe = Math.exp(-Math.pow((be - B * 1.25) * 7, 2)), ua = Ee ? se : oe, _a = Ee ? 0.5 + 0.5 * Math.sin(B * Math.PI * 2 - be * 3) ** 2 : 0.35 + 0.65 * Math.sin(B * Math.PI * 2 - be * 5) ** 2, Ge = Ee ? 1.4 + ua * 4.2 * _a : 1.2 + ua * 5 * _a;
          Rn.beginPath(), Rn.arc(ve, jt, Ge, 0, Math.PI * 2), Rn.fillStyle = `rgba(${Rt},${Ee ? 0.08 + ua * 0.48 : 0.05 + ua * 0.55})`, Rn.fill();
        }
    }
    Mi = requestAnimationFrame(La);
  }
  new ResizeObserver(Ka).observe(Zn.parentElement), Ka(), Mi = requestAnimationFrame(La);
  const Me = i("exerciseTitle"), ga = i("exerciseMeta"), ur = i("stepLabel"), Kn = i("digits"), fr = i("fill"), $a = i("progress"), yo = i("pause"), Fo = i("nextName"), ze = i("nextMeta"), Wr = i("nextIcon"), ko = i("skipNextSession");
  let Ha = null;
  function Fa(e) {
    for (let r = Math.max(0, e); r < Vt.length; r++)
      if (!Vt[r].sessionHidden) return r;
    return -1;
  }
  function gl() {
    const e = Vt[ie];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ca) {
      const u = Fa(ie + 1), v = u >= 0 ? Vt[u] : null;
      return v ? { name: v.name, meta: Cs(v), icon: hr(v) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Fa(ie + 1), s = r >= 0 ? Vt[r] : null;
    return s ? { name: s.name, meta: Cs(s), icon: hr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function hd() {
    if (!Vt[ie]) return Vt.length;
    const r = Fa(ie + 1);
    return r < 0 ? Vt.length : r + 1;
  }
  function hr(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Cs(e) {
    return e.kind === "video" ? "YouTube · " + qn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function mr() {
    return Vt.length && Vt[Vt.length - 1].round || 1;
  }
  function Oo(e) {
    const r = Vt[e];
    if (!r) return "";
    const s = mr();
    if (s <= 1) return "Step " + (e + 1) + " of " + Vt.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = Vt.filter((v) => v.round === r.round && !v.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function Ra() {
    return $a.querySelector('[data-step="' + ie + '"]');
  }
  function qr() {
    Vt[ie] && Number($a.dataset.round) !== (Vt[ie].round || 1) && Vo(), [...$a.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < ie), e.classList.toggle("active", r === ie), e.classList.toggle("rewindable", r <= ie), e.disabled = r > ie, r === ie && e.style.setProperty("--segment-progress", "0%");
    }), Vt[ie] && (ur.textContent = Oo(ie), So());
  }
  function vl(e) {
    const r = Vt.indexOf(e);
    r < 0 || r <= ie || (e.sessionHidden = !e.sessionHidden, $n(), Ie((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Ts() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = hd(), s = Vt.slice(r);
    (so === "all" ? s : s.slice(0, Math.max(1, Number(so) || 1))).forEach((v) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (v.sessionHidden ? " sessionHidden" : "") + (Qo(v) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ua(hr(v)) + '</div><div><div class="upcomingName">' + Gt(v.name) + '</div><div class="upcomingMeta">' + Gt(Cs(v)) + (mr() > 1 ? " · round " + v.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (v.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => vl(v)), e.appendChild(T);
    });
  }
  function $n() {
    var r;
    const e = gl();
    Fo.textContent = e.name, ze.textContent = e.meta, Wr.innerHTML = Ua(e.icon);
    {
      const s = ca ? Vt[Fa(ie + 1)] : ((r = Vt[ie]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Vt[Fa(ie + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Qo(s)));
    }
    if (Ha = null, ca) {
      const s = Fa(ie + 1);
      s >= 0 && (Ha = Vt[s]);
    } else {
      const s = Vt[ie];
      if (s && s.rest > 0)
        Ha = null;
      else {
        const u = Fa(ie + 1);
        u >= 0 && (Ha = Vt[u]);
      }
    }
    ko && (ko.hidden = !Ha, ko.textContent = Ha != null && Ha.sessionHidden ? "Include this session" : "Skip this session"), Ts();
  }
  ko.addEventListener("click", () => {
    Ha && (Ha.sessionHidden = !Ha.sessionHidden, Ie((Ha.sessionHidden ? "Hidden " : "Included ") + Ha.name + " for this session"), $n());
  });
  let mn = null, Ls = null;
  function Xa(e, r = {}) {
    const s = ae[Qt];
    d.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: Qt, ...r });
  }
  function Wo() {
    const e = ae[Qt];
    mn = { key: Qt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ls), Ls = setInterval(() => {
      mn && !Pa && mn.active++;
    }, 1e3), Xa("started", { steps: Vt.length });
  }
  function bl(e) {
    if (clearInterval(Ls), !mn) return;
    const r = mn;
    mn = null, Xa(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (xe.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), xe.history = xe.history.slice(0, 1e3), Va(), Qn(), eo());
  }
  let Ja = null, qo = null, Si = !1;
  function jo() {
    return me().sounds !== !1;
  }
  function As() {
    if (jo())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Ja = Ja || new (window.AudioContext || window.webkitAudioContext)(), Ja.state === "suspended" && Ja.resume();
      } catch {
        Ja = null;
      }
  }
  function zo(e, r, s, { to: u = e, vol: v = 0.25, type: T = "sine" } = {}) {
    const B = Ja.currentTime + r, F = Ja.createOscillator(), st = Ja.createGain();
    F.type = T, F.frequency.setValueAtTime(e, B), u !== e && F.frequency.exponentialRampToValueAtTime(u, B + s), st.gain.setValueAtTime(1e-4, B), st.gain.exponentialRampToValueAtTime(v, B + 0.01), st.gain.exponentialRampToValueAtTime(1e-4, B + s), F.connect(st).connect(Ja.destination), F.start(B), F.stop(B + s + 0.02);
  }
  const _s = {
    tick: () => zo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      zo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), zo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => zo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      zo(523, 0, 0.16, { type: "triangle" }), zo(659, 0.16, 0.16, { type: "triangle" }), zo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function pa(e) {
    if (!(!jo() || !Ja))
      try {
        Ja.state === "suspended" && Ja.resume(), _s[e]();
      } catch {
      }
  }
  function jr() {
    na >= 1 && na <= 3 && na !== qo && (qo = na, pa("tick"));
  }
  function md() {
    As(), M("workout"), zr();
    const e = Fa(0);
    e >= 0 && Vt[e].kind === "video" && Ti(Vt[e]);
  }
  function Aa() {
    Zr(), bl(!1), clearInterval(ta), clearInterval(pi), ca = !1, Oa(!1), i("app").classList.remove("resting"), sr.classList.remove("active"), M("home");
  }
  function zr() {
    sr.classList.add("active");
    let e = 5;
    Ms.textContent = e, pa("tick"), requestAnimationFrame(Ke), clearInterval(pi), pi = setInterval(() => {
      e--, e > 0 ? (Ms.textContent = e, pa("tick"), Ke()) : (clearInterval(pi), Ms.textContent = "GO", pa("move"), Si = !0, Ke(), setTimeout(() => {
        sr.classList.remove("active"), cancelAnimationFrame(wi), Es();
      }, 650));
    }, 1e3);
  }
  function Vo() {
    var r;
    $a.innerHTML = "";
    const e = ((r = Vt[Math.max(0, ie)] || Vt[0]) == null ? void 0 : r.round) || 1;
    $a.dataset.round = e, Vt.forEach((s, u) => {
      if ((s.round || 1) !== e) return;
      const v = document.createElement("button");
      v.dataset.step = u, v.type = "button", v.className = "progressSegment", v.setAttribute("aria-label", "Go to " + s.name), v.addEventListener("click", () => {
        u <= ie && wl(u);
      }), $a.appendChild(v);
    });
  }
  function Oa(e) {
    e = !!e;
    const r = Pa !== e;
    if (Pa = e, yo.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), fe && Ne)
      try {
        e ? Ne.pauseVideo() : Ne.playVideo();
      } catch {
      }
    r && mn && Xa(e ? "paused" : "resumed");
  }
  function wl(e) {
    e < 0 || e >= Vt.length || e > ie || (clearInterval(ta), ca = !1, i("app").classList.remove("resting"), ie = e, Oa(!1), Ko(), ta = setInterval(Co, 1e3));
  }
  function Es() {
    if (ie = Fa(0), Oa(!1), Vo(), ie < 0) {
      Me.textContent = "No activities", ga.textContent = "Open Edit and enable or add a movement", ga.hidden = !1;
      return;
    }
    Wo(), Ko(), clearInterval(ta), ta = setInterval(Co, 1e3);
  }
  const xl = i("videoStage"), Go = i("videoSound"), Vr = 0, Xn = 1, Gr = 2;
  let Ur = 0, Uo = null, Mo = null, Ne = null, Ci = null, Yr = 0, Ds = !1, fe = null, gn = null;
  function Bn() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Uo || (Uo = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const v = setInterval(() => {
        var B;
        (B = window.YT) != null && B.Player && (clearInterval(v), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(v), Uo = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const B = document.createElement("script");
        B.src = "https://www.youtube.com/iframe_api", B.async = !0, B.onerror = () => {
          clearInterval(v), clearTimeout(T), Uo = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(B);
      }
    }), Uo);
  }
  function Nn() {
    return Mo || (Mo = Bn().then((e) => new Promise((r) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), Ne = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Ne), onStateChange: (u) => Jn(u.data), onError: (u) => Rs(u.data) }
      });
    })), Mo.catch(() => {
      Mo = null;
    }), Mo);
  }
  function Ti(e) {
    !(e != null && e.videoId) || e.videoError || Nn().then((r) => {
      fe || Ci === e.videoId || (Ci = e.videoId, Yr = Number(e.start) || 0, Ds = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: Yr }));
    }).catch(() => {
    });
  }
  function Ba() {
    const e = Fa(ie + 1);
    e >= 0 && Vt[e].kind === "video" && Ti(Vt[e]);
  }
  function Jn(e) {
    if (!fe) {
      e === Xn && !Ds && (Ds = !0, Ne.pauseVideo(), Ne.seekTo(Yr, !0));
      return;
    }
    xl.classList.toggle("playing", e === Xn), Vt[ie] === fe && performance.now() > Ur && (e === Xn && Pa ? Oa(!1) : e === Gr && !Pa && Oa(!0)), e === Xn && Ns(fe.videoId, Ne.getDuration()) && Va(), e === Vr && Li();
  }
  function Rs(e) {
    const r = fe;
    if (!r) {
      Ci = null;
      return;
    }
    e === 101 || e === 150 ? (gd(r.videoId), Ie("That video can’t play outside YouTube, so it was skipped")) : Ie("The video couldn’t play, so it was skipped"), Li();
  }
  function Yo(e) {
    if (i("app").classList.add("videoStep"), Go.hidden = !0, fe = e, clearTimeout(gn), !e.videoId) {
      Ie("This video step has no link yet, so it was skipped"), setTimeout(() => Li(), 0);
      return;
    }
    Nn().then((r) => {
      if (fe !== e) return;
      Ur = performance.now() + 1500;
      const s = Number(e.start) || 0;
      Ci !== e.videoId ? (Ci = e.videoId, Yr = s, r.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Pa && r.pauseVideo(), gn = setTimeout(() => {
        fe !== e || Pa || (r.getPlayerState() !== Xn ? (r.mute(), r.playVideo(), Go.hidden = !1) : r.isMuted() && (Go.hidden = !1));
      }, 1600);
    }).catch(() => {
      fe === e && (Ie("YouTube didn’t load, so the video was skipped"), Li());
    });
  }
  function Bs() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, v = window.innerHeight - s - 16 - u - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(v)) + "px");
  }
  window.addEventListener("resize", Bs);
  function Zr() {
    clearTimeout(gn);
    const e = fe;
    if (fe = null, i("app").classList.remove("videoStep"), xl.classList.remove("playing"), Go.hidden = !0, e && Ne) {
      try {
        Ne.pauseVideo();
      } catch {
      }
      Ci = null;
    }
  }
  function Li() {
    const e = fe;
    !e || Vt[ie] !== e || (Zr(), clearInterval(ta), Ai(), ta = setInterval(Co, 1e3));
  }
  Go.addEventListener("click", () => {
    Ne && (Ne.unMute(), Ne.playVideo()), Go.hidden = !0;
  });
  function va(e) {
    var u;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const s = Ne && fe === e && Number((u = Ne.getDuration) == null ? void 0 : u.call(Ne)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function Zo(e, r) {
    const s = ae[Qt];
    [ye, Xe, qe, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((v) => {
      v && v.kind === "video" && v.videoId === e && r(v);
    }));
  }
  function Ns(e, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return e && r > 0 && Zo(e, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function gd(e) {
    Zo(e, (r) => {
      r.videoError = "embed";
    }), Va();
  }
  function vd(e) {
    const r = e.videoId;
    if (!r) return;
    const s = () => {
      Da.classList.contains("open") ? da || Te() : (Te(), Va());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      e.videoId === r && (e.videoTitle = u.title || "", e.autoName && u.title && (e.name = u.title), s());
    }).catch((u) => {
      e.videoId === r && u === 401 && (e.videoError = "embed", s());
    }), yl(r).then((u) => {
      Ns(r, u) && s();
    }).catch((u) => {
      u === "embed" && e.videoId === r && (e.videoError = "embed", s());
    });
  }
  function yl(e) {
    return Bn().then((r) => new Promise((s, u) => {
      const v = document.createElement("div");
      v.className = "videoProbe", v.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      v.appendChild(T), i("app").appendChild(v);
      let B = null, F = !1;
      const st = (it, Nt) => {
        F || (F = !0, clearTimeout(gt), setTimeout(() => {
          try {
            B == null || B.destroy();
          } catch {
          }
          v.remove();
        }, 0), Nt ? u(Nt) : s(it));
      }, gt = setTimeout(() => st(0), 2e4), lt = () => {
        var Nt;
        const it = Number((Nt = B == null ? void 0 : B.getDuration) == null ? void 0 : Nt.call(B)) || 0;
        return it > 0 && st(it), it > 0;
      };
      B = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            lt() || (B.mute(), B.playVideo());
          },
          onStateChange: () => lt(),
          onError: (it) => st(0, it.data === 101 || it.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Ko() {
    ca = !1;
    const e = Vt[ie];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Yo(e) : Zr(), na = e.duration, On = e.duration, qo = null, Si ? Si = !1 : pa(e.kind === "rest" ? "rest" : "move"), Me.textContent = e.name, ga.textContent = e.group, ga.hidden = !0, ur.textContent = Oo(ie), mn && Xa("step", { name: e.name, group: e.group, kind: e.kind, step: ie + 1, of: Vt.length, round: e.round || 1, rounds: mr(), duration: e.duration }), $n(), qr(), Ba(), e.kind === "video" && setTimeout(Bs, 0);
  }
  function So() {
    var v;
    const e = ((v = Vt[ie]) == null ? void 0 : v.kind) === "video" && !ca, r = e && na >= 60;
    Kn.textContent = r ? qn(na) : na, Kn.classList.toggle("long", r), e && (i("videoClock").textContent = qn(na) + " left");
    const s = na / On * 100;
    fr.style.width = s + "%";
    const u = Ra();
    if (u && !ca) {
      const T = 100 - s;
      u.style.setProperty("--segment-progress", T + "%");
    }
  }
  function Co() {
    var r, s;
    if (Pa) return;
    const e = Vt[ie];
    if ((e == null ? void 0 : e.kind) === "video" && !ca && fe === e) {
      const u = Number((r = Ne == null ? void 0 : Ne.getCurrentTime) == null ? void 0 : r.call(Ne)) || 0, v = Number(e.start) || 0, T = va(e);
      On = Math.max(1, T - v), (u > v || ((s = Ne == null ? void 0 : Ne.getPlayerState) == null ? void 0 : s.call(Ne)) === Xn) && (na = Math.max(0, Math.ceil(T - u))), So(), jr(), u > v && u >= T - 0.25 && Li();
      return;
    }
    na--, So(), jr(), na <= 0 && (e.rest > 0 ? kl(e.rest) : Ai());
  }
  function kl(e) {
    var s;
    ca = !0, i("app").classList.add("resting");
    const r = Ra();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(ta), na = e, On = e, qo = null, pa("rest"), mn && Xa("rest", { duration: e }), Me.textContent = "Rest", ga.textContent = (s = Vt[ie]) != null && s.roundBreakAfter ? "Round " + (Vt[ie].round + 1) + " next" : "Recovery", $n(), So(), ta = setInterval(() => {
      Pa || (na--, So(), jr(), na <= 0 && (clearInterval(ta), Ai(), ta = setInterval(Co, 1e3)));
    }, 1e3);
  }
  function Ai() {
    ca = !1;
    const e = Fa(ie + 1);
    if (e >= 0)
      ie = e, Ko();
    else {
      clearInterval(ta), Zr(), Oa(!1), i("app").classList.remove("resting"), Me.textContent = "Complete", ga.textContent = "Move finished", ga.hidden = !1, Kn.textContent = "✓";
      {
        const r = mr();
        ur.textContent = r > 1 ? r + " rounds done" : Vt.filter((s) => !s.roundBreak).length + " steps done";
      }
      bl(!0), pa("done");
      {
        const r = to(7).reduce((s, u) => s + u.minutes, 0);
        ga.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      fr.style.width = "100%", $n();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Wa(), Oa(!1);
  });
  function Wa() {
    clearInterval(ta);
    const e = Vt[ie];
    if (ca) {
      ca = !1, i("app").classList.remove("resting");
      const s = Fa(ie + 1);
      s >= 0 ? (ie = s, Ko(), ta = setInterval(Co, 1e3)) : Ai();
      return;
    }
    if (e && e.rest > 0) {
      kl(e.rest);
      return;
    }
    const r = Fa(ie + 1);
    r >= 0 ? (ie = r, Ko(), ta = setInterval(Co, 1e3)) : Ai();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(ta), Oa(!1), ca) {
      const e = Vt[ie];
      na = e.rest, On = e.rest, qo = null, pa("rest"), Me.textContent = "Rest", ga.textContent = "Recovery", i("app").classList.add("resting"), $n(), So();
    } else
      Ko();
    ta = setInterval(ca ? () => {
      Pa || (na--, So(), jr(), na <= 0 && (clearInterval(ta), Ai(), ta = setInterval(Co, 1e3)));
    } : Co, 1e3);
  });
  function $o(e, r, s, u) {
    let v = 0, T = null, B = !1;
    function F() {
      T && cancelAnimationFrame(T), T = null, v = 0, B = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function st(it) {
      if (!B) return;
      v || (v = it);
      const Nt = Math.min(1, (it - v) / s);
      if (r.style.width = Nt * 100 + "%", Nt >= 1) {
        B = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      T = requestAnimationFrame(st);
    }
    function gt(it) {
      var Nt;
      if (!(it && it.button !== void 0 && it.button !== 0)) {
        it == null || it.preventDefault(), F(), B = !0, e.classList.add("holding");
        try {
          (Nt = e.setPointerCapture) == null || Nt.call(e, it.pointerId);
        } catch {
        }
        T = requestAnimationFrame(st);
      }
    }
    function lt() {
      B && F();
    }
    e.addEventListener("pointerdown", gt), e.addEventListener("pointerup", lt), e.addEventListener("pointercancel", lt), e.addEventListener("lostpointercapture", lt), e.addEventListener("keydown", (it) => {
      (it.key === " " || it.key === "Enter") && !it.repeat && gt(it);
    }), e.addEventListener("keyup", (it) => {
      (it.key === " " || it.key === "Enter") && lt();
    });
  }
  const Ml = i("endWorkout");
  $o(Ml, i("holdEndFill"), 1500, Aa);
  const Xo = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Xo.classList.add("open"), Xo.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Xo.classList.remove("open"), Xo.setAttribute("aria-hidden", "true");
  });
  function Ps() {
    const e = Qt, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ae[e], xe.order = xe.order.filter((u) => u !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      ae[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, xe.order.push(u), s = Ca(u, ae[u]);
    }
    Xo.classList.remove("open"), Xo.setAttribute("aria-hidden", "true"), Dn = null, Hr(), la(s.dataset.workout), Va(), Ie("Move deleted");
  }
  $o(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ps);
  const Is = n.querySelector(".rubberTabs"), _i = i("rubberIndicator");
  function gr(e, r = !0) {
    if (!e || !Is || !_i) return;
    const s = Is.getBoundingClientRect(), u = e.getBoundingClientRect();
    _i.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const v = wo();
    _i.style.left = (u.left - s.left) / v + Is.scrollLeft + "px", _i.style.width = u.width / v + "px", r && (_i.style.transform = "scaleX(1.08)", setTimeout(() => _i.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), gr(e, !0);
  })), requestAnimationFrame(() => gr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => gr(n.querySelector(".tab.active"), !1));
  const Kr = i("pixelTrailToggle"), $r = i("rippleToggle"), Ei = i("trailStrength"), Jo = i("trailLife");
  function qa(e, r) {
    me()[e] = r, Va();
  }
  const Hs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Fs(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Qo(e) {
    var r;
    return !!((r = me().hideMeta) != null && r[Fs(e)]);
  }
  function bd() {
    const e = /* @__PURE__ */ new Map(), r = (s, u, v) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = Fs(s);
      let B = e.get(T);
      B || (B = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(T, B)), B.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : u), B.moves.add(v), B.count++;
    };
    return Object.values(ae).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Dt)).forEach((v) => r(v, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((v) => r(v, v.presetRole === "warmup" ? "Warm-up" : v.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : we)).forEach((v) => r(v, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      e.has(s) || e.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Hs.indexOf(s.kind) - Hs.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let vr = "all";
  function Os() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return bd().filter((r) => (vr === "all" || r.kind === vr) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function br() {
    const e = i("metaTableBody");
    if (!e) return;
    const r = me().hideMeta || {}, s = Os();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((v) => {
      const T = !r[v.key], B = v.count ? (v.moves.length > 2 ? v.moves.slice(0, 2).join(", ") + " + " + (v.moves.length - 2) + " more" : v.moves.join(", ")) + " · " + v.count + " step" + (v.count === 1 ? "" : "s") : "Not used yet", F = document.createElement("tr");
      F.className = T ? "" : "off", F.innerHTML = '<td><div class="metaType">' + Gt(v.label) + '</div><div class="metaSub">' + Gt(v.kind + " · " + B) + '</div></td><td class="metaKindCol">' + Gt(v.kind) + '</td><td class="metaUsedCol">' + Gt(B) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Gt(v.label) + ' on phones"></button></td>', F.querySelector(".switch").addEventListener("click", () => ti([v.key], T)), e.appendChild(F);
    });
    const u = s.filter((v) => r[v.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function ti(e, r) {
    const s = { ...me().hideMeta || {} };
    e.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), qa("hideMeta", s), br(), zn(), $n();
  }
  i("metaSearch").addEventListener("input", br), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    vr = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), br();
  })), i("metaHideAll").addEventListener("click", () => ti(Os().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => ti(Os().map((e) => e.key), !1));
  const ei = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...me().toggles || {} };
  function Pn() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", ei[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      i(u).hidden = ei[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => ei[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    ei[e.dataset.toggle] = ei[e.dataset.toggle] === !1, Pn(), qa("toggles", { ...ei });
  })), Pn();
  function Sl() {
    Kr.classList.toggle("on", Un), $r.classList.toggle("on", xo), Ei.value = Math.round(hn * 100), i("trailStrengthValue").textContent = Ei.value + "%", Jo.value = yi, i("trailLifeValue").textContent = Jo.value + " ms";
  }
  me().trailEnabled !== void 0 && (Un = me().trailEnabled), me().rippleEnabled !== void 0 && (xo = me().rippleEnabled), me().trailStrength !== void 0 && (hn = me().trailStrength), me().trailMaxAge !== void 0 && (yi = me().trailMaxAge), Sl();
  const wr = i("soundsToggle");
  wr.classList.toggle("on", jo()), wr.addEventListener("click", () => {
    qa("sounds", !jo()), wr.classList.toggle("on", jo()), jo() && (As(), pa("move"));
  }), Kr.addEventListener("click", () => {
    Un = !Un, Kr.classList.toggle("on", Un), Un || (pr = []), qa("trailEnabled", Un);
  }), $r.addEventListener("click", () => {
    xo = !xo, $r.classList.toggle("on", xo), qa("rippleEnabled", xo);
  }), Ei.addEventListener("input", () => {
    hn = Number(Ei.value) / 100, i("trailStrengthValue").textContent = Ei.value + "%";
  }), Ei.addEventListener("change", () => qa("trailStrength", hn)), Jo.addEventListener("input", () => {
    yi = Number(Jo.value), i("trailLifeValue").textContent = Jo.value + " ms";
  }), Jo.addEventListener("change", () => qa("trailMaxAge", yi)), ir.addEventListener("change", () => qa("upcomingCount", so));
  function Xr(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const r = e === "light";
    i("app").classList.toggle("light", r), d.setLight(r), Lo(n);
  }
  Xr(me().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Xr(e.dataset.theme), qa("theme", e.dataset.theme);
  }));
  const Qa = { steps: null, weather: null, ...me().entities || {} };
  let Le = null, Ws = {};
  function qs(e) {
    const r = Object.values(e).filter((F) => F.entity_id.startsWith("sensor.") || F.entity_id.startsWith("input_number.")), s = (F) => F.attributes.friendly_name || F.entity_id, u = r.filter((F) => /step/i.test(F.entity_id) || /step/i.test(s(F)) || ["steps", "step"].includes(String(F.attributes.unit_of_measurement || "").toLowerCase())), v = r.filter((F) => !u.includes(F)), T = (F, st) => s(F).localeCompare(s(st)), B = (F, st) => /health_steps/.test(st.entity_id) - /health_steps/.test(F.entity_id) || T(F, st);
    return { suggested: u.sort(B), rest: v.sort(T), label: s };
  }
  function Cl(e) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: v } = qs(e), T = (st) => '<option value="' + Gt(st.entity_id) + '">' + Gt(v(st)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(T).join("") + "</optgroup>" : ""), r.value = Qa.steps || "";
    const B = i("stepsStatus"), F = Qa.steps && e[Qa.steps];
    B.textContent = F ? "Connected · " + v(F) : B.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Qa.steps = i("stepsEntity").value || null, qa("entities", { ...Qa }), Ws = {}, Di(), Le && (Cl(Le), le(Le));
  });
  function wd(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function Tl() {
    const e = Qa.steps && (Le == null ? void 0 : Le[Qa.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function le(e) {
    var u;
    const r = Qa.steps, s = r ? Number((u = e[r]) == null ? void 0 : u.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(s) ? wd(s) : "—" : "Set up in Settings";
  }
  let js = 0;
  async function Di() {
    const e = Qa.steps;
    if (!e || !d.ws) return;
    js = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await d.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), v = (u == null ? void 0 : u[e]) || [], T = {};
      if (v.forEach((B) => {
        Number.isFinite(B.max) && (T[je(new Date(B.start))] = B.max);
      }), !Object.keys(T).length) {
        const B = await d.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((B == null ? void 0 : B[e]) || []).forEach((F) => {
          const st = Number(F.s ?? F.state), gt = F.lu ? F.lu * 1e3 : Date.parse(F.last_updated || F.last_changed);
          if (!Number.isFinite(st) || !gt) return;
          const lt = je(new Date(gt));
          T[lt] = Math.max(T[lt] || 0, st);
        });
      }
      Ws = T, eo();
    } catch {
    }
  }
  function Qn() {
    eo();
  }
  Qn(), setInterval(() => {
    Qn(), or(), Gn();
  }, 10 * 60 * 1e3);
  function to(e) {
    const r = {}, s = {};
    xe.history.forEach((B) => {
      const F = je(new Date(B.start));
      r[F] = (r[F] || 0) + (B.seconds || 0) / 60, s[F] = (s[F] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), v = je(u), T = [];
    for (let B = e - 1; B >= 0; B--) {
      const F = new Date(u.getFullYear(), u.getMonth(), u.getDate() - B), st = je(F), gt = xe.checkins.filter((it) => it.date === st), lt = (it) => {
        const Nt = gt.map((te) => te[it]).filter(Boolean);
        return Nt.length ? Nt.reduce((te, Ft) => te + Ft, 0) / Nt.length : null;
      };
      T.push({
        key: st,
        date: F,
        minutes: Math.round(r[st] || 0),
        moves: s[st] || 0,
        steps: st === v && Tl() != null ? Tl() : Ws[st] ?? null,
        mood: lt("mood"),
        energy: lt("energy")
      });
    }
    return T;
  }
  function Ll(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function eo() {
    const e = i("insightCard");
    if (!e) return;
    const r = to(30), s = Ll(r), u = r.reduce((gt, lt) => gt + lt.minutes, 0), v = /* @__PURE__ */ new Date(), T = je(v), B = je(new Date(v.getFullYear(), v.getMonth(), v.getDate() - (v.getDay() + 6) % 7)), F = r.filter((gt) => gt.key >= B && gt.key <= T).reduce((gt, lt) => gt + lt.minutes, 0), st = (gt, lt, it) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + gt + '</div><div><div class="activityRowName">' + Gt(lt) + '</div><div class="activityRowMeta">' + Gt(it) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ua("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + st(Ua("clock"), "This week", F + " min") + st(Ua("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + st(Ua("calendar"), "30 days", u + " min") + "</div>";
  }
  const Jr = {
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
  }, zs = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", To = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ai = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Qr = 0;
  const ts = (e, r) => '<path class="' + r + '" d="' + e + '"/>', Vs = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', tn = (e, r, s, u) => {
    const v = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Vs(e, 2400) + ' d="M' + e + " " + (r - s) + "L" + (e + v) + " " + (r - v) + "L" + (e + s) + " " + r + "L" + (e + v) + " " + (r + v) + "L" + e + " " + (r + s) + "L" + (e - v) + " " + (r + v) + "L" + (e - s) + " " + r + "L" + (e - v) + " " + (r - v) + 'Z"/>';
  }, Ri = ([e, r, s], u) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Gs = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Us = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Al = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function xr(e, r, s, u) {
    return e === "clear" ? r ? Ri(s ? ai.l : ai.s, u) + (s ? tn(70, 20, 5.83, 1) + tn(78.33, 41.67, 3.75, 0.8) + tn(60, 71.67, 3.33, 0.6) : tn(42, 12, 3.5, 1) + tn(47, 25, 2.25, 0.8) + tn(36, 43, 2, 0.6)) : Gs(u, s) : e === "partly" ? (r ? Ri(s ? ai.lp : ai.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + ts(s ? To.lp : To.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? tn(73.33, 16.67, 4.17, 0.9) : tn(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? ts(s ? To.lc : To.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? tn(15, 15, 3.75, 0.8) + tn(76.67, 13.33, 2.92, 0.6) : tn(9, 9, 2.25, 0.8) + tn(46, 8, 1.75, 0.6) : "") : ts(s ? To.lr : To.s, "wxCloudLight") + (e === "rain" ? Us(s) : Al(s));
  }
  const Ys = () => {
    var e;
    return ((e = Le == null ? void 0 : Le["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let ja = me().weatherStyle || "bitmap", _l = me().weatherLayout === "strip" ? "strip" : "tiles", xd = me().weatherMotion !== !1;
  const Bi = () => xd && !oa(), yr = /* @__PURE__ */ new Map(), Zs = 700, yd = (e) => {
    const [r, s] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function es(e, r, s, u = ja, v, T) {
    let B = zs(e);
    const F = B === "night" || (T != null ? !!T : !!s && Ys());
    B === "night" && (B = "clear");
    const st = r ? 90 : 54, gt = ed(e, F), lt = performance.now();
    let it = v ? yr.get(v) : null;
    if (v && !it ? yr.set(v, it = { key: gt, t0: -1e9 }) : it && it.key !== gt && (it.fromKey = it.key, it.from = it.last || null, it.key = gt, it.t0 = lt), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + gt + '"' + (v ? ' data-wx-slot="' + v + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + st + '"></canvas></span>';
    let Nt = "";
    if (it && lt - it.t0 < Zs && (Bi() || oa())) {
      const te = yd(it.fromKey);
      Nt = '<span class="wxLayer wxOut ' + te.k + (te.night ? " night" : "") + '" style="animation-delay:' + Math.round(it.t0 - lt) + 'ms"><svg viewBox="0 0 ' + st + " " + st + '">' + xr(te.k, te.night, r, "wxg" + ++Qr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + B + (F ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + st + " " + st + '">' + xr(B, F, r, "wxg" + ++Qr) + "</svg>" + Nt + "</span>";
  }
  function Ni() {
    const e = i("app"), r = getComputedStyle(e), s = (F) => r.getPropertyValue(F).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([F, st]) => {
      s(st) && (u[F] = s(st));
    });
    const v = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", B = e.classList.contains("light");
    return { colors: u, ink: B ? v : T, paper: B ? T : v };
  }
  function Lo(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = Ni(), v = Bi(), T = oa();
    s.forEach((B) => {
      var it;
      const F = B.dataset.wx, st = B.dataset.wxSlot ? yr.get(B.dataset.wxSlot) : null;
      let gt = Zd(F, u.colors);
      if (st && st.key === F) {
        const Nt = (r - st.t0) / Zs;
        Nt < 1 && (v || T) && (gt = Zp(st.from || Zd(st.fromKey, u.colors), gt, Math.max(0, Nt), u.colors, T)), st.last = gt;
      }
      const lt = cp(gt, { size: Number(B.dataset.wxSize) || 54, px: 2, oneBit: B.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: v });
      B.width !== lt.w && (B.width = lt.w), B.height !== lt.h && (B.height = lt.h), (it = B.getContext("2d")) == null || it.putImageData(new ImageData(lt.data, lt.w, lt.h), 0, 0);
    });
  }
  let as = null, Ks = -1;
  function kr(e) {
    if (as = null, !b) return;
    const r = Bi(), s = Math.floor(e / 100), u = [...yr.values()].some((st) => e - st.t0 < Zs), v = [...Mr.values()].some((st) => e - st.t0 < st.dur), T = wt.home.classList.contains("active"), B = h.classList.contains("open"), F = r && ja === "smooth" && (B || T && _l === "strip");
    !document.hidden && (u || v || F || r && s !== Ks) && (Ks = s, T && (Lo(i("weatherCard"), e), a(i("weatherCard"), e)), B && (Lo(h, e), a(h, e))), (r || u || v) && (as = requestAnimationFrame(kr));
  }
  function ao() {
    i("app").classList.toggle("wxMotion", Bi()), !as && b && (as = requestAnimationFrame(kr));
  }
  let Pi = [];
  const ra = 36e5, kd = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function In() {
    const e = /* @__PURE__ */ new Date(), r = (T, B) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + T, B), s = [], u = [], v = [...Array(6)].map((T, B) => {
      const F = r(B, 6), st = r(B, 18), gt = r(B + 1, 6), lt = Pi.find((Nt) => je(new Date(Nt.datetime)) === je(F)), it = (Nt, te, Ft) => {
        const Rt = s.filter((ve) => ve.t >= +Nt && ve.t < +te);
        if (Rt.length) {
          const ve = {};
          return Rt.forEach((jt) => {
            ve[jt.c] = (ve[jt.c] || 0) + (kd.has(jt.c) ? 2 : 1);
          }), Object.entries(ve).sort((jt, be) => be[1] - jt[1])[0][0];
        }
        const Lt = u.find((ve) => {
          const jt = +new Date(ve.datetime);
          return jt >= +Nt - 3 * ra && jt < +te && (ve.is_daytime == null || !!ve.is_daytime == !Ft);
        });
        if (Lt) return Lt.condition;
        const he = (lt == null ? void 0 : lt.condition) || "cloudy";
        return Ft && he === "sunny" ? "clear-night" : he;
      };
      return { start: +F, end: +gt, day: it(F, st, !1), night: it(st, gt, !0), hi: Number(lt == null ? void 0 : lt.temperature), lo: Number(lt == null ? void 0 : lt.templow) };
    });
    return { days: v, hours: s, start: v[0].start, end: v[5].end };
  }
  const $s = (e, r) => {
    const s = e.days.findIndex((v) => r < v.end);
    if (s < 0) return 1;
    const u = e.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, Xs = (e, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), v = e.days[u];
    return v.start + (s - u) * (v.end - v.start);
  };
  function Ii(e, r) {
    const s = Math.max(0, e.days.findIndex((st) => r < st.end)), u = e.days[s], v = (r - u.start) / (u.end - u.start) >= 0.5;
    let T = v ? u.night : u.day, B = NaN;
    const F = e.hours;
    if (F.length && r >= F[0].t - ra && r <= F[F.length - 1].t + ra) {
      let st = F.findIndex((it) => it.t > r);
      st < 0 && (st = F.length);
      const gt = F[Math.max(0, st - 1)], lt = F[Math.min(F.length - 1, st)];
      T = gt.c || T, B = lt.t > gt.t ? gt.temp + (lt.temp - gt.temp) * Math.max(0, Math.min(1, (r - gt.t) / (lt.t - gt.t))) : gt.temp;
    }
    if (!Number.isFinite(B)) {
      const st = [];
      if (e.days.forEach((gt) => {
        Number.isFinite(gt.lo) && st.push([gt.start - ra, gt.lo]), Number.isFinite(gt.hi) && st.push([gt.start + 9 * ra, gt.hi]);
      }), st.length) {
        B = r <= st[0][0] ? st[0][1] : st[st.length - 1][1];
        for (let gt = 1; gt < st.length; gt++) if (r <= st[gt][0] && r > st[gt - 1][0]) {
          const [lt, it] = st[gt - 1], [Nt, te] = st[gt];
          B = it + (te - it) * (1 - Math.cos(Math.PI * (r - lt) / (Nt - lt))) / 2;
          break;
        }
      }
    }
    return { cond: v && T === "sunny" ? "clear-night" : T, temp: B, night: v, day: u };
  }
  const Hi = (e) => je(new Date(e)) === je(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Mr = /* @__PURE__ */ new Map(), El = 900, Dl = 700;
  let Sr = null;
  const t = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    a(r.target.parentElement), r.target.closest("#wxDialog") && mt();
  })) : null;
  function a(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = In(), v = u.days.flatMap((it) => [{ cond: it.day, night: !1 }, { cond: it.night, night: !0 }]), T = v.map((it) => it.cond).join(), B = Ni(), F = Bi(), st = oa(), gt = Number(je(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let lt = !1;
    s.forEach((it) => {
      var ve;
      const Nt = it.clientWidth, te = it.clientHeight;
      if (!Nt || !te) return;
      const Ft = it.dataset.wxStrip;
      let Rt = Mr.get(Ft);
      Rt ? Rt.sig !== T && (Rt.prev = Rt.segs, Rt.sig = T, Rt.segs = v, Rt.t0 = r, Rt.dur = Dl) : Mr.set(Ft, Rt = { sig: T, segs: v, prev: null, t0: r, dur: El });
      const Lt = F || st ? Math.min(1, Math.max(0, (r - Rt.t0) / Rt.dur)) : 1;
      Lt < 1 && (lt = !0);
      const he = { width: Nt, height: te, colors: B.colors, clock: r, ambient: F, seed: gt, reveal: st ? Lt : 1 - Math.pow(1 - Lt, 3), prev: Lt < 1 ? Rt.prev : null, reduce: st };
      if (ja === "smooth") {
        const jt = Math.min(2, window.devicePixelRatio || 1), be = Math.round(Nt * jt), Ee = Math.round(te * jt);
        it.width !== be && (it.width = be), it.height !== Ee && (it.height = Ee);
        const se = it.getContext("2d");
        if (!se) return;
        se.setTransform(jt, 0, 0, jt, 0, 0), du(se, v, he);
      } else {
        const jt = lu(v, { ...he, px: 2, oneBit: ja === "onebit", ink: B.ink, paper: B.paper });
        it.width !== jt.w && (it.width = jt.w), it.height !== jt.h && (it.height = jt.h), (ve = it.getContext("2d")) == null || ve.putImageData(new ImageData(jt.data, jt.w, jt.h), 0, 0);
      }
    }), lt && ao();
  }
  function o() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const r = Qa.weather, s = r && (Le == null ? void 0 : Le[r]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + es("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Lo(e);
      return;
    }
    const u = s.attributes || {}, v = u.temperature_unit || "°", T = (se) => Number.isFinite(Number(se)) ? Math.round(Number(se)) + "°" : "—", B = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", F = Jr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), st = je(/* @__PURE__ */ new Date()), gt = Pi.slice(0, 7), lt = gt.find((se) => je(new Date(se.datetime)) === st) || null, it = gt.filter((se) => je(new Date(se.datetime)) >= st).slice(0, 6), Nt = /* @__PURE__ */ new Date(), te = je(new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate() + 1)), Ft = lt ? "H " + T(lt.temperature) + "&ensp; L " + T(lt.templow) : "", Rt = (se) => {
      const oe = je(new Date(se.datetime));
      return oe === st ? "Today" : oe === te ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(se.datetime));
    }, Lt = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", he = (se) => {
      const oe = new Date(se.datetime);
      return Math.round((new Date(oe.getFullYear(), oe.getMonth(), oe.getDate()) - new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate())) / 864e5);
    }, ve = (se) => (Jr[se] || se || "").toLowerCase(), jt = (se, oe) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + he(se) + '" aria-label="' + Gt(Rt(se) + ": " + ve(se.condition) + ", " + T(se.temperature) + " / " + T(se.templow) + ". Open the forecast") + '">' + es(se.condition, !1, !1, ja, "day" + oe) + '<div><div class="activityRowName">' + Gt(Rt(se)) + '</div><div class="activityRowMeta">' + T(se.temperature) + " / " + T(se.templow) + "</div></div></div>", be = () => '<div class="wxStrip"><div class="wxStripDays">' + In().days.map((oe, ua) => {
      const Ge = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(oe.start)) + ": " + ve(oe.day) + (ve(oe.day) === ve(oe.night) ? " all day and night" : ", then " + ve(oe.night) + " overnight") + (Number.isFinite(oe.hi) ? ". High " + T(oe.hi) : "") + (Number.isFinite(oe.lo) ? ", low " + T(oe.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ua + '" aria-label="' + Gt(Ge) + '"><span class="wxDayName">' + Gt(Hi(oe.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(oe.hi) + '</span><span class="wxLow">' + T(oe.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Gt("Now in " + B + ": " + Lt + "°, " + ve(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + es(s.state, !0, !0, ja, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(Lt)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(B) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(F) + "</div>" + (Ft ? '<div class="wxRange">' + Ft + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (it.length ? _l === "strip" ? be() : '<div class="activityRows wxDays">' + it.map(jt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Lo(e);
    const Ee = e.querySelector("canvas[data-wx-strip]");
    Sr && Sr !== Ee && (t == null || t.unobserve(Sr)), Sr = Ee, Ee && (t == null || t.observe(Ee), a(e)), ao(), St();
  }
  const l = i("weatherCard"), p = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      Q(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && Q(Date.now(), s);
  };
  l.addEventListener("click", (e) => p(e.target)), l.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), p(e.target));
  });
  const h = i("wxDialog"), f = i("wxGraph"), m = i("wxGraphWrap");
  let y = Date.now(), D = null, R = !1, I = null;
  function Q(e, r) {
    const s = In();
    D = r || null, y = Math.max(s.start, Math.min(s.end - ra, e)), Mr.delete("dialog"), yr.delete("scrub"), h.classList.add("open"), h.setAttribute("aria-hidden", "false"), St(), t == null || t.observe(h.querySelector("canvas[data-wx-strip]")), f.focus({ preventScroll: !0 }), ao();
  }
  function U() {
    var e;
    h.classList.remove("open"), h.setAttribute("aria-hidden", "true"), t == null || t.unobserve(h.querySelector("canvas[data-wx-strip]")), (e = D == null ? void 0 : D.focus) == null || e.call(D, { preventScroll: !0 }), D = null;
  }
  function St() {
    if (!h.classList.contains("open")) return;
    const e = In();
    i("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Gt(Hi(r.start)) + "</span>").join(""), mt(e), nt(e), a(h);
  }
  function nt(e = In()) {
    const r = Ii(e, y), s = Le == null ? void 0 : Le[Qa.weather], u = (s == null ? void 0 : s.attributes) || {}, v = u.temperature_unit || "°", T = Math.abs(y - Date.now()) < ra / 2, B = T && s ? s.state : r.cond, F = T && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", st = Jr[B] || (B ? B.charAt(0).toUpperCase() + B.slice(1) : "—"), gt = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(y / ra) * ra)), lt = r.day, it = (Number.isFinite(lt.hi) ? "H " + Math.round(lt.hi) + "°" : "") + (Number.isFinite(lt.lo) ? "&ensp; L " + Math.round(lt.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + es(B, !0, T, ja, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(F)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(gt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(st) + "</div>" + (it ? '<div class="wxRange">' + it + "</div>" : "") + "</div>", Lo(i("wxDialogNow")), f.setAttribute("aria-valuenow", String(Math.round((y - e.start) / ra))), f.setAttribute("aria-valuetext", gt + ", " + st.toLowerCase() + ", " + F + "°"), W(e), ao();
  }
  function mt(e = In()) {
    const r = i("wxGraphLine"), s = m.clientWidth, u = m.clientHeight;
    if (!s || !u) return;
    const v = [];
    for (let Lt = e.start; Lt <= e.end; Lt += ra) {
      const he = Ii(e, Lt).temp;
      Number.isFinite(he) && v.push([$s(e, Lt) * s, he]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), v.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', I = null, W(e);
      return;
    }
    const T = v.map((Lt) => Lt[1]), B = Math.min(...T), F = Math.max(...T), st = Math.max(4, F - B), gt = ja !== "smooth", lt = (Lt) => gt ? Math.round(Lt / 2) * 2 : Math.round(Lt * 10) / 10;
    I = (Lt) => u * 0.84 - (Lt - B) / st * u * 0.62;
    const it = Ni(), Nt = ja === "onebit" ? it.paper : "#ffffff", te = ja === "onebit" ? it.ink : "rgba(0,0,0,.28)", Ft = "M" + v.map((Lt) => lt(Lt[0]) + " " + lt(I(Lt[1]))).join(" L"), Rt = (Lt, he) => {
      const ve = v.find((jt) => jt[1] === Lt);
      return '<text class="wxLineLabel" x="' + lt(Math.min(s - 14, Math.max(14, ve[0]))) + '" y="' + lt(I(Lt) + (he ? 18 : -10)) + '" fill="' + Nt + '" stroke="' + te + '">' + Math.round(Lt) + "°</text>";
    };
    r.setAttribute("shape-rendering", gt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Ft + '" fill="none" stroke="' + te + '" stroke-width="' + (gt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ft + '" fill="none" stroke="' + Nt + '" stroke-width="2" stroke-linejoin="round"/>' + Rt(F, !1) + Rt(B, !0) + '<g id="wxCursorMark"></g>', W(e);
  }
  function W(e = In()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = m.clientWidth, u = m.clientHeight, v = ja !== "smooth", T = (Nt) => v ? Math.round(Nt / 2) * 2 : Nt, B = T($s(e, y) * s), F = Ii(e, y).temp, st = Ni(), gt = ja === "onebit" ? st.paper : "#ffffff", lt = ja === "onebit" ? st.ink : "rgba(0,0,0,.28)", it = I && Number.isFinite(F) ? T(I(F)) : null;
    r.innerHTML = '<rect x="' + (B - 2) + '" y="0" width="4" height="' + u + '" fill="' + lt + '"/><rect x="' + (B - 1) + '" y="0" width="2" height="' + u + '" fill="' + gt + '"/>' + (it == null ? "" : v ? '<rect x="' + (B - 5) + '" y="' + (it - 5) + '" width="10" height="10" fill="' + gt + '" stroke="' + lt + '" stroke-width="2"/>' : '<circle cx="' + B + '" cy="' + it + '" r="6" fill="' + gt + '" stroke="' + lt + '" stroke-width="2"/>');
  }
  const kt = (e) => {
    const r = m.getBoundingClientRect();
    r.width && (y = Xs(In(), (e - r.left) / r.width), nt());
  };
  f.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      R = !0;
      try {
        f.setPointerCapture(e.pointerId);
      } catch {
      }
      kt(e.clientX);
    }
  }), f.addEventListener("pointermove", (e) => {
    R && kt(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => f.addEventListener(e, () => {
    R = !1;
  })), f.addEventListener("keydown", (e) => {
    const r = In(), s = { ArrowLeft: -ra, ArrowRight: ra, ArrowDown: -ra, ArrowUp: ra, PageUp: -24 * ra, PageDown: 24 * ra }[e.key];
    s ? (e.preventDefault(), y = Math.max(r.start, Math.min(r.end - ra, Math.round(y / ra) * ra + s)), nt(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), y = e.key === "Home" ? r.start : r.end - ra, nt(r));
  }), i("wxDialogClose").addEventListener("click", U), h.addEventListener("click", (e) => {
    e.target === h && U();
  }), h.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), U());
  }), o(), (pc = (dc = window.matchMedia) == null ? void 0 : (cc = dc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || pc.call(cc, "change", () => {
    ao(), Lo(n);
  }), ao();
  const V = i("tvNav");
  d.fullscreenSupported || (V.hidden = !0), V.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !wt.workout.classList.contains("active") || sr.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), yo.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(pe.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== pe.value && (pe.value = r, pe.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [E, L, P, pe].forEach((e) => e.addEventListener("input", () => {
    const r = ae[Qt];
    r && (r.total = Number(E.value), r.work = Number(L.value), r.rest = Number(P.value)), Te();
  })), j.addEventListener("click", Aa), zt.addEventListener("click", () => M("settings")), i("settingsBack").addEventListener("click", Aa), yo.addEventListener("click", () => Oa(!Pa)), la(Qt), nr(), or(), eo(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), $o(i("resetStats"), i("resetStatsFill"), 1500, () => {
    xe.history = [], xe.checkins = [], ar = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Va(), Qn(), or(), nr(), eo(), Gn(), Ie("Stats reset");
  });
  const qt = i("morningTime"), Pe = i("eveningTime"), ge = i("checkinAutoOpen");
  qt.value = Ln().morning, Pe.value = Ln().evening, ge.classList.toggle("on", me().checkinAutoOpen !== !1), [["morningTime", qt], ["eveningTime", Pe]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (qa(e, r.value), Gn());
  })), ge.addEventListener("click", () => {
    const e = me().checkinAutoOpen === !1;
    ge.classList.toggle("on", e), qa("checkinAutoOpen", e);
  }), setTimeout(hs, 800);
  const Sa = i("checkinNotify"), Xt = i("checkinNotifyTarget"), Ve = i("checkinNotifyStatus"), Cr = Ve.textContent;
  function Rl() {
    const e = d.notifyServices(), r = e.filter((v) => v.startsWith("mobile_app_")), s = r.length ? r : e, u = (v) => v.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Xt.innerHTML = s.map((v) => '<option value="' + Gt(v) + '">' + Gt(u(v)) + "</option>").join(""), !me().notifyTarget && s[0] && (me().notifyTarget = s[0]), Xt.value = me().notifyTarget || "";
  }
  function Bl() {
    const e = !!me().notifyOn;
    Sa.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const r = Ln();
    Ve.textContent = e ? "Sends at " + r.morning + " and " + r.evening : Cr;
  }
  async function Md() {
    const e = !!me().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: me().notifyTarget, times: Ln() } : null), !0;
    } catch {
      return Ie("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Sa.addEventListener("click", async () => {
    const e = !me().notifyOn;
    if (e && (Rl(), !me().notifyTarget)) {
      Ie("Install the Companion app on your phone first");
      return;
    }
    me().notifyOn = e, Bl(), await Md() ? (Va(), Ie(e ? "Check-in notifications on" : "Check-in notifications off")) : (me().notifyOn = !e, Bl());
  }), Xt.addEventListener("change", () => {
    qa("notifyTarget", Xt.value), me().notifyOn && Md();
  }), [qt, Pe].forEach((e) => e.addEventListener("change", () => {
    Bl(), me().notifyOn && Md();
  })), Rl(), Bl();
  let Sd = null;
  function Op() {
    Sd || (Sd = setTimeout(() => {
      Sd = null, eo();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, u;
      const r = !Le || Le[Qa.weather] !== e[Qa.weather] || ((s = Le["sun.sun"]) == null ? void 0 : s.state) !== ((u = e["sun.sun"]) == null ? void 0 : u.state);
      Le = e, Cl(e), le(e), r && o(), Date.now() - js > 60 * 60 * 1e3 && Di(), Op();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (xe.history = e.history, Qn()), Array.isArray(e.history) && eo(), Array.isArray(e.checkins) && (xe.checkins = e.checkins.map(Ui), Gn(), nr(), or(), Qn(), eo()), e.profiles && !Da.classList.contains("open") && !mn)) {
        const r = Gi(e);
        Object.keys(ae).forEach((s) => delete ae[s]), Object.assign(ae, r.profiles), xe.order = r.order, ae[Qt] || (Qt = xe.order[0]), ro(), la(Qt);
      }
    },
    suspend() {
      b = !1;
    },
    resume() {
      b || (b = !0, ki || (ki = requestAnimationFrame(Or)), Mi || (Mi = requestAnimationFrame(La)), ao(), gr(n.querySelector(".tab.active"), !1));
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
}, Qs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ya = "made_up_", Wi = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(ya);
}, Hl = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function ac(n) {
  const d = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function hu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let c = +d; c < +n; c += 10 * 60 * 1e3) i += ac(new Date(c)) / 6;
  return i;
}
function gc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let i = 0; i <= 96; i++) {
    const c = +n - (96 - i) * 15 * 60 * 1e3;
    d.push([c, ac(new Date(c))]);
  }
  return d;
}
function mu({ onChange: n }) {
  const d = {}, i = {}, c = (z, O, ut, rt) => {
    d[z] = { entity_id: z, state: ut, attributes: rt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[z] = O;
  }, g = (z, O, ut) => {
    const rt = d[z], ht = O ?? rt.state;
    d[z] = { ...rt, state: ht, attributes: { ...rt.attributes, ...ut }, last_changed: ht === rt.state ? rt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (z, O, ut, rt) => c("binary_sensor." + ya + (z ? z + "_" : "") + Hl(O), z, rt ? "on" : "off", { friendly_name: O, device_class: ut });
  Object.entries(fu).forEach(([z, O]) => {
    if (O.temperature != null && c("sensor." + ya + z + "_temperature", z, String(O.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), O.humidity != null && c("sensor." + ya + z + "_humidity", z, String(O.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), O.vacuum && c("vacuum." + ya + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), O.climate && c("climate." + ya + z, z, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: O.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), O.cover) {
      const [ut, rt, ht, et] = O.cover;
      c("cover." + ya + z + "_" + Hl(ut), z, ht ? "open" : "closed", { friendly_name: ut, device_class: rt, current_position: ht, ...et != null ? { current_tilt_position: et } : {} });
    }
    if (O.humidifier && c("humidifier." + ya + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: O.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), O.solar && (c("sensor." + ya + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + ya + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), O.valve && c("valve." + ya + z + "_" + Hl(O.valve), z, "closed", { friendly_name: O.valve, device_class: "water" }), O.door && b(z, O.door, "door", O.doorOpen), O.window && b(z, O.window, "window", !1), O.motion && b(z, O.motion, "motion", !1), O.plant) {
      const [ut, rt, ht, et, tt] = O.plant, S = ya + Hl(ut), at = (G, wt, j, zt, M) => c("sensor." + S + "_" + G, z, String(j), { friendly_name: wt, device_class: M, state_class: "measurement", unit_of_measurement: zt, plant_low: j < Qs[G][0], plant_high: j > Qs[G][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[G] });
      at("moisture", "Moisture", rt, "%", "moisture"), at("light", "Light", ht, "lx", "illuminance"), at("temperature", "Temperature", et, "°C", "temperature"), at("fertility", "Fertility", tt, "µS/cm", "conductivity");
      const Pt = Object.entries({ moisture: rt, light: ht, temperature: et, fertility: tt }).filter(([G, wt]) => wt < Qs[G][0] || wt > Qs[G][1]).map(([G, wt]) => G + (wt < Qs[G][0] ? " low" : " high"));
      c("plant." + S, z, Pt.length ? "problem" : "ok", { friendly_name: ut, moisture: rt, brightness: ht, temperature: et, conductivity: tt, problem: Pt.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + ya + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), c("sensor." + ya + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, _ = {};
  let k = null;
  function N() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((O) => {
      O.endsWith("_solar_power") && (d[O] = { ...d[O], state: ac(z).toFixed(2) }), O.endsWith("_solar_today") && (d[O] = { ...d[O], state: hu(z).toFixed(1) });
    });
  }
  N();
  let xt = 0;
  function pt() {
    let z = !1;
    const O = ++xt % 10 === 0, ut = (et, tt, S) => {
      g(et, tt, S), z = !0;
    };
    Object.entries(w).forEach(([et, tt]) => {
      const S = d[et].attributes.current_position, at = S < tt ? Math.min(tt, S + 10) : Math.max(tt, S - 10);
      at === tt && delete w[et], ut(et, at === tt ? at === 0 ? "closed" : "open" : tt > S ? "opening" : "closing", { current_position: at });
    }), Object.entries(_).forEach(([et, tt]) => {
      const S = d[et].attributes.current_tilt_position, at = S < tt ? Math.min(tt, S + 25) : Math.max(tt, S - 25);
      at === tt && delete _[et], ut(et, null, { current_tilt_position: at });
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
  const Y = setInterval(pt, 1e3), $ = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function ot(z, O, ut) {
    const rt = ut == null ? void 0 : ut.entity_id;
    if (!d[rt]) return !1;
    const ht = d[rt], et = ht.attributes, tt = (S, at) => g(rt, S, at);
    if (z === "climate" && (O === "set_temperature" && tt(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, ut.temperature)) }), O === "set_hvac_mode" && tt(ut.hvac_mode, ut.hvac_mode === "off" ? { hvac_action: "off" } : {}), O === "toggle" && tt(ht.state === "off" ? "heat" : "off", ht.state === "off" ? {} : { hvac_action: "off" })), z === "cover") {
      const S = O === "open_cover" ? 100 : O === "close_cover" ? 0 : O === "set_cover_position" ? ut.position : O === "toggle" ? et.current_position > 0 ? 0 : 100 : null;
      O === "stop_cover" && (delete w[rt], delete _[rt], tt(et.current_position === 0 ? "closed" : "open")), S != null && S !== et.current_position && (w[rt] = S, tt(S > et.current_position ? "opening" : "closing"));
      const at = O === "open_cover_tilt" ? 100 : O === "close_cover_tilt" ? 0 : O === "set_cover_tilt_position" ? ut.tilt_position : null;
      O === "stop_cover_tilt" && delete _[rt], at != null && et.current_tilt_position != null && at !== et.current_tilt_position && (_[rt] = at);
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
    const O = (z == null ? void 0 : z.states) || {}, ut = (z == null ? void 0 : z.entities) || {}, rt = (z == null ? void 0 : z.devices) || {}, ht = (L) => {
      var ft;
      const P = ut[L];
      return P && (P.area_id || P.device_id && ((ft = rt[P.device_id]) == null ? void 0 : ft.area_id)) || null;
    }, et = (L) => {
      const P = ut[L];
      return O[L] && O[L].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, tt = {};
    Object.keys(O).forEach((L) => {
      const P = ht(L);
      P && et(L) && (tt[P] || (tt[P] = [])).push(L);
    });
    const S = { ...O, ...d }, at = (L) => {
      var P, ft;
      return (ft = (P = S[L]) == null ? void 0 : P.attributes) == null ? void 0 : ft.device_class;
    }, Pt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], G = Object.keys(O).filter((L) => L.startsWith("vacuum.") && et(L)), wt = Object.values((z == null ? void 0 : z.areas) || {}).filter((L) => !uu.has(L.area_id)).map((L) => {
      const P = L.area_id, ft = tt[P] || [], dt = (Dt) => ft.filter((ye) => ye.startsWith(Dt + ".")), q = (Dt) => dt("sensor").filter((ye) => at(ye) === Dt), bt = (Dt) => Object.keys(d).filter((ye) => i[ye] === P && Dt(ye)), Mt = (Dt, ye) => Dt.length ? Dt : bt(ye), Jt = Mt(q("temperature"), (Dt) => Dt.endsWith(P + "_temperature")), pe = Mt(q("humidity"), (Dt) => Dt.endsWith(P + "_humidity")), aa = q("power").filter((Dt) => /^(W|kW)$/.test(S[Dt].attributes.unit_of_measurement || "")), Ce = dt("binary_sensor").filter((Dt) => at(Dt) === "moisture"), io = Mt(dt("plant"), (Dt) => Dt.startsWith("plant.")).map((Dt) => ({ id: Dt, readings: bt((ye) => ye.startsWith("sensor." + Dt.split(".")[1] + "_")) })), Ea = [...dt("binary_sensor").filter((Dt) => Pt.includes(at(Dt))), ...bt((Dt) => Dt.startsWith("binary_sensor."))];
      return {
        id: P,
        name: L.name,
        icon: L.icon,
        readings: [...Jt.slice(0, 1), ...pe.slice(0, 1), ...Ce],
        power: aa.length ? aa.reduce((Dt, ye) => Dt + Number(S[ye].state) * (S[ye].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: dt("switch"),
        lights: dt("light"),
        actions: [...dt("light"), ...Mt(dt("climate"), (Dt) => Dt.startsWith("climate.")), ...Mt(dt("cover"), (Dt) => Dt.startsWith("cover.")), ...Mt(dt("humidifier"), (Dt) => Dt.startsWith("humidifier.")), ...Mt(dt("valve"), (Dt) => Dt.startsWith("valve.")), ...dt("media_player"), ...dt("vacuum"), ...G.length ? [] : bt((Dt) => Dt.startsWith("vacuum."))],
        solar: bt((Dt) => Dt.includes("_solar_")),
        plants: io,
        openings: Ea,
        alerts: [...Ce, ...Ea].filter((Dt) => {
          var ye;
          return ((ye = S[Dt]) == null ? void 0 : ye.state) === "on";
        })
      };
    }).filter((L) => L.readings.length || L.plugs.length || L.actions.length || L.solar.length || L.plants.length), j = Object.keys(O).find((L) => /^sensor\..*(p1_meter_power|grid_power)$/.test(L) && O[L].state !== "unavailable") || null, zt = (L) => Object.keys(O).filter((P) => P.startsWith(L + ".") && et(P)), M = zt("alarm_control_panel"), E = G.length ? G : ["vacuum." + ya + "robot"];
    return {
      states: S,
      rooms: wt,
      grid: j,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (L) => d[L] ? i[L] : ht(L),
      vacuums: E,
      homeVacuums: E.filter((L) => !wt.some((P) => P.actions.includes(L))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + ya + "house"],
        locks: zt("lock"),
        openings: [...Object.keys(d).filter((L) => L.startsWith("binary_sensor.")), "sensor." + ya + "doorbell"]
      }
    };
  }
  return { model: K, call: ot, stop() {
    clearInterval(Y), clearInterval($);
  } };
}
const ri = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Kd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((c) => c + c).join("") : d;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, gu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), vc = {}, Fn = (n, d, i) => {
  const c = n + d + i;
  return vc[c] || (vc[c] = gu(Kd(n).map((g, b) => g + (Kd(d)[b] - g) * i)));
}, bc = {}, Zl = (n) => bc[n] || (bc[n] = Kd(n));
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
], ii = (n, d) => (bu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, hp = 1, mp = 2, gp = 3, vp = 4, ss = 5, Xl = 6, $d = 7, bp = 8, wc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), wu = (n, d, i) => {
  let c = !1;
  for (let g = 0, b = n.length - 1; g < n.length; b = g++) {
    const w = n[g], _ = n[b];
    w[1] > i != _[1] > i && d < (_[0] - w[0]) * (i - w[1]) / (_[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function xu(n, d, i, c, { oneBit: g, ink: b, paper: w, snowInk: _ }) {
  const k = new Uint8ClampedArray(i * c * 4), N = Zl(b), xt = Zl(w);
  for (let pt = 0; pt < c; pt++) for (let Y = 0; Y < i; Y++) {
    const $ = pt * i + Y, ot = d[$];
    if (n[$] == null) continue;
    let K = Zl(n[$]);
    if (g) {
      let z;
      ot === vp || ot === bp ? z = !0 : ot === ss ? z = _ : ot === $d || ot === Xl ? z = !1 : z = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= ii(Y, pt), (ot === hp || ot === mp || ot === gp || ot === Xl) && (Y > 0 && d[$ - 1] !== ot || Y < i - 1 && d[$ + 1] !== ot || pt > 0 && d[$ - i] !== ot || pt < c - 1 && d[$ + i] !== ot) && (z = !0), K = z ? N : xt;
    }
    k[$ * 4] = K[0], k[$ * 4 + 1] = K[1], k[$ * 4 + 2] = K[2], k[$ * 4 + 3] = 255;
  }
  return { w: i, h: c, data: k };
}
const yu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ku = (n) => ed(n, !1).split("/")[0], Ld = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Mu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Tu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Lu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Au = [".##", "##.", ".#.", "#.."];
function wp(n, { width: d, height: i, colors: c, wave: g = 0.38, soft: b = 6, glow: w = 0.6, columns: _ = 6 }) {
  const k = { ...ln, dawn: "#e5a77e", ...c }, N = vu(k), xt = d, pt = i, Y = xt / _, $ = Y / 2, ot = Math.PI * 2, K = n.length ? n : [{ cond: "cloudy", night: !1 }], z = [...Array(_ * 2)].map((ht, et) => {
    const tt = K[Math.min(et, K.length - 1)], S = ku(tt.cond), at = et % 2 === 1;
    return { cond: tt.cond, k: S, night: at, sky: N[S][at ? 1 : 0], cover: yu[S] };
  }), O = (ht) => pt * (0.5 - g * Math.cos(ot * (ht / Y - 0.25)));
  return { C: k, S: z, W: xt, H: pt, cw: Y, sw: $, TAU: ot, yb: O, side: (ht, et, tt) => {
    const S = (ht ? O(et) - tt : tt - O(et)) / Math.max(3, b * 1.4) + 0.5;
    return S <= 0 ? 0 : S >= 1 ? 1 : S;
  }, glowAt: (ht) => {
    const et = ((ht / Y - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(_ - 1, Math.round(ht / Y - 0.25))), S = Math.max(0, Math.min(_ - 1, Math.round(ht / Y - 0.75))), at = 1 - (z[2 * tt].cover + z[2 * S + 1].cover) / 2, Pt = Math.sin(Math.PI * Math.min(1, Math.max(0, O(ht) / pt)));
    return { c: et < 0.5 ? k.dusk : k.dawn, a: w * (0.2 + 0.8 * at) * Pt * Pt };
  }, soft: b, tw: Y * 0.3, sy: pt / 90 };
}
function xp(n, { clock: d = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: g, sw: b, side: w, C: _, TAU: k, sy: N, H: xt } = n, pt = d, Y = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((K, z) => {
    const O = Ld(c * 977 + z * 131 + 7), ut = (z + 0.5) * b, rt = K.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[K.k] : 0;
    for (let ht = 0; ht < rt; ht++) {
      const et = ut + (O() - 0.5) * b * 1.6, tt = (6 + O() * 76) * N, S = O() < 0.35, at = 1.8 + O() * 1.6, Pt = w(!0, et, tt) * (S ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(k * pt / 2600 + ht * 1.7 + z) : 1);
      Pt >= 0.03 && Y.stars.push({ x: et, y: tt, big: S, size: at, o: Pt });
    }
    if (!K.night && (K.k === "clear" || K.k === "partly")) {
      const ht = ut + (O() - 0.5) * b * 0.3, et = Math.min(15, b * 0.29);
      Y.suns.push({ x: ht, y: 32 * N, rad: et, halo: et * 2.8 * (i ? 1 + 0.07 * Math.sin(k * pt / 3600 + z) : 1) });
    }
    if (K.night && (K.k === "clear" || K.k === "partly")) {
      const ht = Math.min(0.78, b * 0.55 / 34), et = ut - 23 * ht + (O() - 0.5) * b * 0.2;
      Y.moons.push({ x: et + 23 * ht, y: (4 + (i ? 0.8 * Math.sin(k * pt / 5200 + z) : 0)) * N + 23 * ht, d: 46 * ht });
    }
  });
  const $ = Math.max(56, Math.min(100, xt * 0.45)), ot = Math.max(1, b / ($ * 2.4));
  return g.forEach((K, z) => {
    const O = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[K.k];
    if (!O) return;
    const ut = K.k === "partly" ? 1 : Math.round(O * ot), rt = Ld(c * 577 + z * 71 + 3), ht = (z + 0.5) * b, et = K.k === "rain" || K.k === "storm" || K.night ? _.cloudNight : _.cloudDay, tt = K.night ? 0.82 : K.k === "storm" ? 0.75 : 1;
    for (let S = 0; S < ut; S++) {
      const at = $ / 46 * (K.k === "partly" ? 1 : 0.8 + rt() * 0.4), Pt = ht + (K.k === "partly" ? b * 0.12 : ((S + 0.5) / ut - 0.5) * b * 0.95 + (rt() - 0.5) * b * 0.5 / ut), G = (K.k === "partly" ? 40 : 6 + rt() * 26) * N, wt = i ? 2.5 * Math.sin(k * pt / 9e3 + z * 1.3 + S * 2.1) : 0, j = i ? 0.9 * Math.sin(k * pt / 6100 + z + S) : 0;
      Y.clouds.push({ x: Pt - 23 * at + wt, y: G - 15.33 * at + j, w: 46 * at, h: 30.66 * at, fill: et, o: tt * (ut > 1 && S === 0 ? 0.85 : 1) });
    }
  }), g.forEach((K, z) => {
    const O = Ld(c * 313 + z * 29 + 11), ut = (z + 0.5) * b, rt = K.cond === "pouring" ? 16 : K.cond === "rainy" || K.cond === "hail" ? 9 : K.cond === "lightning-rainy" ? 12 : K.cond === "snowy-rainy" ? 5 : 0;
    for (let et = 0; et < rt; et++) {
      let tt = ut + (O() - 0.5) * b * 1.05, S = 44 + O() * 36, at = 1;
      if (i) {
        const G = ((S - 44 + pt * 0.04) % 36 + 36) % 36;
        tt -= 0.21 * (G - (S - 44)), S = 44 + G, at = Math.min(1, G / 6, (36 - G) / 6);
      }
      S *= N;
      const Pt = w(K.night, tt, S) * at;
      Pt >= 0.05 && Y.drops.push({ x: tt, y: S, o: Pt });
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
      Pt >= 0.05 && Y.flakes.push({ x: tt, y: S, o: Pt });
    }
    if (K.k === "fog") {
      const et = K.night ? "#c8ccd6" : "#ffffff", tt = K.night ? 0.28 : 0.62, S = i ? 4 * Math.sin(k * pt / 8e3 + z) : 0;
      for (let at = 0; at < 4; at++) Y.fogs.push({ x: ut - b * 0.75 + at % 2 * b * 0.18 + (at % 2 ? S : -S), y: (30 + at * 13) * N, w: b * 1.3, c: et, a: tt });
    }
    if (K.k === "storm") {
      const et = (pt / 3400 + z * 0.37) % 1;
      Y.bolts.push({ x: ut + (O() - 0.5) * b * 0.3 - 5, y: 36 * N, o: i && !(et < 0.05 || et > 0.09 && et < 0.12) ? 0.8 : 1 });
    }
  }), Y;
}
function _u(n, d, i, c, g, b, w, _) {
  const { S: k, C: N, cw: xt, yb: pt, glowAt: Y, soft: $, tw: ot, sy: K } = n, z = new Array(i * c), O = new Uint8Array(i * c), ut = new Uint8Array(i * c), rt = (M, E, L, P, ft) => {
    L == null || M < 0 || E < 0 || M >= i || E >= c || (P >= 1 || P > ii(M + 5, E + 3)) && (z[E * i + M] = L, O[E * i + M] = ft);
  }, ht = (M, E, L, P) => {
    for (let ft = Math.max(0, Math.floor(E - L) - 1); ft <= Math.min(c - 1, E + L + 1); ft++) for (let dt = Math.max(0, Math.floor(M - L) - 1); dt <= Math.min(i - 1, M + L + 1); dt++) P(dt, ft, dt + 0.5 - M, ft + 0.5 - E);
  }, et = (M, E, L) => {
    for (let ft = 0; ft < M.length - 1; ft++) {
      const dt = (ft + E) * xt;
      if (L < dt - ot / 2) return [M[ft], M[ft], 0];
      if (L <= dt + ot / 2) return [M[ft], M[ft + 1], (L - dt + ot / 2) / ot];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, tt = k.filter((M) => !M.night).map((M) => M.sky), S = k.filter((M) => M.night).map((M) => M.sky), at = $ / b, Pt = 16 * K / b;
  for (let M = 0; M < i; M++) {
    const E = (M + 0.5) * g, L = pt(E) / b, P = et(tt, 0.75, E), ft = et(S, 1.25, E), dt = Y(E);
    for (let q = 0; q < c; q++) {
      const bt = ii(M, q), Mt = q + 0.5 - L, Jt = (at > 0.01 ? ri(0.5 + Mt / at) : Mt > 0 ? 1 : 0) > bt;
      let pe = Jt ? P[2] > bt ? P[1] : P[0] : ft[2] > bt ? ft[1] : ft[0];
      (Jt ? ri(((q + 0.5) / c - 0.45) / 0.55) * 0.7 : ri(1 - (q + 0.5) / (c * 0.55)) * 0.7) > ii(M + 2, q + 5) && (pe = Jt ? Fn(pe, "#ffffff", 0.18) : Fn(pe, "#000000", 0.25)), Jt && Mt >= 0 && Mt < Pt && dt.a * 1.3 * (1 - Mt / Pt) > ii(M + 6, q + 1) && (pe = dt.c), z[q * i + M] = pe, ut[q * i + M] = Jt ? 0 : 1;
    }
  }
  const G = Fn(N.sun, "#ffffff", 0.55), wt = Fn(N.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const E = Math.floor(M.x / g), L = Math.floor(M.y / b);
    if (E < 0 || L < 0 || E >= i || L >= c || !ut[L * i + E] || M.o < 0.15) return;
    const P = M.o > 0.45 ? N.star : Fn(N.star, z[L * i + E], 0.5), ft = M.big && M.o > 0.6 ? Math.floor(M.size / g) : 0;
    rt(E, L, P, 1, $d);
    for (let dt = 1; dt <= ft; dt++) [[E - dt, L], [E + dt, L], [E, L - dt], [E, L + dt]].forEach((q) => {
      q[0] >= 0 && q[1] >= 0 && q[0] < i && q[1] < c && ut[q[1] * i + q[0]] && rt(q[0], q[1], P, 1, $d);
    });
  }), d.suns.forEach((M) => {
    const E = Math.max(1.5, M.rad / g), L = M.x / g, P = M.y / b, ft = M.halo / g * 0.85;
    if (ht(L, P, ft, (dt, q, bt, Mt) => {
      const Jt = Math.sqrt(bt * bt + Mt * Mt);
      Jt > E && Jt < ft && !ut[q * i + dt] && rt(dt, q, G, 0.3 * (1 - (Jt - E) / (ft - E)), 0);
    }), _) {
      const dt = Math.floor(w / 500) % 2, q = Math.max(1, E * 0.3);
      for (let bt = 0; bt < 8; bt++) if (bt % 2 === dt) for (let Mt = E + 1.2; Mt < E + 1.2 + q; Mt += 0.7) rt(Math.floor(L + Math.cos(bt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(bt * Math.PI / 4) * Mt), N.sun, 1, bp);
    }
    ht(L, P, E, (dt, q, bt, Mt) => {
      bt * bt + Mt * Mt <= E * E && rt(dt, q, ri(((Mt / E + 1) / 2 - 0.6) / 0.4) > ii(dt, q) ? N.sunEdge : N.sun, 1, hp);
    });
  }), d.moons.forEach((M) => {
    const E = Math.max(1.5, M.d * 0.37 / g), L = M.x / g, P = M.y / b, ft = L + 0.547 * E, dt = P - 0.503 * E, q = 0.82 * E;
    ht(L, P, E, (bt, Mt, Jt, pe) => {
      if (Jt * Jt + pe * pe > E * E) return;
      const aa = bt + 0.5 - ft, Ce = Mt + 0.5 - dt;
      aa * aa + Ce * Ce > q * q && rt(bt, Mt, ri((pe + E) / (2 * E) * 1.1 - 0.1) > ii(bt, Mt) ? N.moon : wt, 1, mp);
    });
  }), d.clouds.forEach((M) => {
    const E = Math.max(3, M.w / g), L = E * 0.6665, P = M.x / g, ft = M.y / b, dt = Fn(M.fill, "#000000", 0.16);
    for (let q = Math.max(0, Math.floor(ft) - 1); q <= Math.min(c - 1, ft + L + 1); q++) for (let bt = Math.max(0, Math.floor(P) - 1); bt <= Math.min(i - 1, P + E + 1); bt++) {
      const Mt = (bt + 0.5 - P) / E, Jt = (q + 0.5 - ft) / E;
      wc(Mt, Jt) && rt(bt, q, !wc(Mt, Jt + 1 / E) || ri((Jt - 0.42) / 0.25) * 0.8 > ii(bt, q) ? dt : M.fill, M.o, gp);
    }
  }), d.fogs.forEach((M) => {
    const E = Math.floor(M.y / b), L = Math.max(E, Math.floor((M.y + 6 * K) / b) - 1), P = Math.floor(M.x / g), ft = Math.floor((M.x + M.w) / g);
    for (let dt = E; dt <= L; dt++) for (let q = P; q <= ft; q++) {
      const bt = (q - P) / Math.max(1, ft - P);
      rt(q, dt, M.c, M.a * (bt < 0.25 ? bt / 0.25 : bt > 0.75 ? (1 - bt) / 0.25 : 1), 0);
    }
  });
  const j = Math.max(2, Math.round(9 / b));
  d.drops.forEach((M) => {
    const E = M.x / g, L = Math.floor(M.y / b);
    for (let P = 0; P < j; P++) rt(Math.floor(E - 0.208 * P * b / g), L + P, N.rain, M.o, vp);
  });
  const zt = Math.max(0, Math.round(4.4 / g / 2.6));
  return d.flakes.forEach((M) => {
    const E = Math.floor(M.x / g), L = Math.floor(M.y / b);
    rt(E, L, N.snow, M.o, ss);
    for (let P = 1; P <= zt; P++)
      rt(E - P, L, N.snow, M.o, ss), rt(E + P, L, N.snow, M.o, ss), rt(E, L - P, N.snow, M.o, ss), rt(E, L + P, N.snow, M.o, ss);
  }), d.bolts.forEach((M) => {
    if (g <= 3.5)
      for (let E = Math.floor(M.y / b); E <= (M.y + 24) / b; E++) for (let L = Math.floor(M.x / g); L <= (M.x + 11) / g; L++)
        wu(Lu, (L + 0.5) * g - M.x, (E + 0.5) * b - M.y) && rt(L, E, N.sun, 1, Xl);
    else {
      const E = Math.round(M.x / g), L = Math.round(M.y / b);
      Au.forEach((P, ft) => P.split("").forEach((dt, q) => {
        dt === "#" && rt(E + q, L + ft, N.sun, 1, Xl);
      }));
    }
  }), { col: z, ids: O };
}
function Eu(n, d) {
  const i = d.px, c = Math.max(6, Math.round(d.width / i)), g = Math.max(6, Math.round(d.height / i)), b = d.width / c, w = d.height / g, _ = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, k = ($) => {
    const ot = wp($, d);
    return _u(ot, xp(ot, { clock: _, ambient: d.ambient, seed: d.seed }), c, g, b, w, _, d.ambient);
  }, N = k(n), xt = d.reveal == null ? 1 : ri(d.reveal);
  let pt = N.col, Y = N.ids;
  if (xt < 1) {
    const $ = d.prev ? k(d.prev) : null, ot = xt * (c + 12);
    pt = new Array(c * g), Y = new Uint8Array(c * g);
    for (let K = 0; K < c * g; K++) {
      const z = K % c, O = K / c | 0;
      (d.reduce ? xt : ri((ot - z) / 12)) > ii(z, O) ? (pt[K] = N.col[K], Y[K] = N.ids[K]) : $ ? (pt[K] = $.col[K], Y[K] = $.ids[K]) : (pt[K] = null, Y[K] = 255);
    }
  }
  return xu(pt, Y, c, g, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Du(n, d, i) {
  const c = i.width, g = i.height, b = i.reveal == null ? 1 : ri(i.reveal), w = (Y, $) => {
    const ot = wp($, i);
    Ru(Y, ot, xp(ot, i));
  };
  if (n.clearRect(0, 0, c, g), b >= 1) {
    w(n, d);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const _ = n.canvas, k = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (k.width !== _.width || k.height !== _.height) && (k.width = _.width, k.height = _.height);
  const N = k.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, c, g), w(N, d);
  const xt = b * (c + 64) - 64, pt = N.createLinearGradient(xt, 0, xt + 64, 0);
  pt.addColorStop(0, "rgba(0,0,0,1)"), pt.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = pt, N.fillRect(0, 0, c, g), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(k, 0, 0), n.restore();
}
function Ru(n, d, i) {
  const { W: c, H: g, S: b, C: w, cw: _, yb: k, glowAt: N, soft: xt, tw: pt, sy: Y } = d, $ = n.getTransform().a || 1, ot = (j) => {
    n.shadowColor = j ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = j ? 4 * $ : 0, n.shadowOffsetY = j ? 1.5 * $ : 0;
  }, K = (j, zt) => {
    const M = Zl(j);
    return "rgba(" + M[0] + "," + M[1] + "," + M[2] + "," + Math.max(0, Math.min(1, zt)).toFixed(3) + ")";
  }, z = (j, zt) => {
    const M = n.createLinearGradient(0, 0, c, 0);
    M.addColorStop(0, j[0]);
    for (let E = 0; E < j.length - 1; E++) {
      const L = (E + zt) * _, P = (L - pt / 2) / c, ft = (L + pt / 2) / c;
      P > 0 && P < 1 && M.addColorStop(P, j[E]), ft > 0 && ft < 1 && M.addColorStop(ft, j[E + 1]);
    }
    return M.addColorStop(1, j[j.length - 1]), M;
  }, O = Math.max(24, Math.ceil(c / 4)), ut = (j, zt) => {
    n.beginPath();
    for (let M = 0; M <= O; M++) {
      const E = c * M / O, L = j == null ? 0 : k(E) + j;
      M ? n.lineTo(E, L) : n.moveTo(E, L);
    }
    for (let M = O; M >= 0; M--) {
      const E = c * M / O;
      n.lineTo(E, k(E) + zt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = z(b.filter((j) => !j.night).map((j) => j.sky), 0.75), n.fillRect(0, 0, c, g);
  const rt = n.createLinearGradient(0, 0, c, 0);
  for (let j = 0; j <= 64; j++) {
    const zt = N(c * j / 64);
    rt.addColorStop(j / 64, K(zt.c, Math.min(1, zt.a)));
  }
  n.fillStyle = rt;
  for (let j = 0; j < 8; j++)
    n.globalAlpha = 1 - j / 8, ut(j * 2 * Y, (j + 1) * 2 * Y);
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
    zt.addColorStop(0, K(j.c, 0)), zt.addColorStop(0.25, K(j.c, j.a)), zt.addColorStop(0.75, K(j.c, j.a)), zt.addColorStop(1, K(j.c, 0)), n.fillStyle = zt, n.fillRect(j.x, j.y, j.w, 6 * Y);
  }), n.fillStyle = w.rain, i.drops.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((j) => {
    n.globalAlpha = j.o, n.beginPath(), n.arc(j.x, j.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.fill(Pt), n.restore();
  }), n.restore();
}
const Bu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", is = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Fl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Ad = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Nu = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', Hn = (n, d, i, c) => {
  const g = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Nu(n, 2400) + ' d="M' + n + " " + (d - i) + "L" + (n + g) + " " + (d - g) + "L" + (n + i) + " " + d + "L" + (n + g) + " " + (d + g) + "L" + n + " " + (d + i) + "L" + (n - g) + " " + (d + g) + "L" + (n - i) + " " + d + "L" + (n - g) + " " + (d - g) + 'Z"/>';
}, xc = ([n, d, i], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + d + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Pu = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Iu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), Hu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, i], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + d + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Fu(n, d, i, c) {
  const g = (b) => '<g filter="url(#' + c + '-sh)">' + b + "</g>";
  return n === "clear" ? d ? g(xc(i ? Fl.l : Fl.s, c)) + (i ? Hn(70, 20, 5.83, 1) + Hn(78.33, 41.67, 3.75, 0.8) + Hn(60, 71.67, 3.33, 0.6) : Hn(42, 12, 3.5, 1) + Hn(47, 25, 2.25, 0.8) + Hn(36, 43, 2, 0.6)) : g(Pu(c, i)) : n === "partly" ? g(d ? xc(i ? Fl.lp : Fl.sp, c) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(Ad(i ? is.lp : is.sp, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Hn(73.33, 16.67, 4.17, 0.9) : Hn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(Ad(i ? is.lc : is.s, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Hn(15, 15, 3.75, 0.8) + Hn(76.67, 13.33, 2.92, 0.6) : Hn(9, 9, 2.25, 0.8) + Hn(46, 8, 1.75, 0.6) : "") : g(Ad(i ? is.lr : is.s, "wbCloudLight")) + (n === "rain" ? Iu(i) : Hu(i));
}
const Ou = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Wu(n, d, i, c) {
  let g = Bu(n);
  const b = g === "night" || !!i;
  g === "night" && (g = "clear");
  const w = d ? 90 : 54;
  return { k: g, night: b, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Ou(c, d) + Fu(g, b, d, c) + "</svg>" };
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
], Ol = (n, d) => (qu[d % 8 * 8 + n % 8] + 0.5) / 64, oo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], za = (n, d, i) => [Math.round(n[0] + (d[0] - n[0]) * i), Math.round(n[1] + (d[1] - n[1]) * i), Math.round(n[2] + (d[2] - n[2]) * i)], tl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, yc = (n, d) => {
  let i = n * 374761393 + d * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Ar = [255, 255, 255], nn = oo("#26221e"), kc = oo("#0288d1"), ju = oo("#01579b"), _d = oo(ln.cloudDay), Ed = oo(ln.cloudNight), Wl = oo(ln.dusk), Dd = oo(ln.sunEdge), zu = oo(ln.sun), Vu = 10, Mc = 0.3, si = 56, yp = 21;
function Gu(n) {
  const d = Array.from({ length: yp }, () => new Array(si).fill(void 0)), i = (w, _, k) => {
    d[_][w] = k;
  }, c = za(Wl, nn, 0.35), g = za(nn, Ar, 0.22);
  for (let w = 0; w <= 6; w++) {
    const _ = w < 2 ? si - 2 : si - 1;
    for (let k = 6 - w; k <= _; k++) i(k, w, w < 2 ? c : w === 6 ? g : nn);
  }
  const b = [Wl, Dd, Ed, oo(ln.skyRainDay), za(Wl, nn, 0.2), za(n, nn, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, _) => {
    const k = 9 + _ * 6;
    for (let N = 0; N < w; N++) {
      const xt = b[(_ * 2 + N * 3) % b.length];
      for (let pt = k; pt < k + 5; pt++)
        i(pt, 7 + N * 2, za(xt, nn, 0.12)), i(pt, 8 + N * 2, N === w - 1 ? za(xt, Ar, 0.3) : xt);
      i(k + 5, 7 + N * 2, nn), i(k + 5, 8 + N * 2, nn);
    }
  });
  for (let w = 7; w <= 12; w++) i(5, w, nn);
  i(5, 13, Dd);
  for (let w = 7; w <= 14; w++) for (let _ = 42; _ <= 51; _++) i(_, w, _ === 51 ? Ed : _d);
  for (let w = 43; w <= 50; w += 2)
    i(w, 12, nn), i(w, 9, za(nn, _d, 0.4));
  for (let w = 40; w <= 53; w++) i(w, 14, w === 40 || w === 53 ? Ed : _d);
  for (let w = 15; w <= 18; w++) for (let _ = 46; _ <= 49; _++) i(_, w, w === 18 ? nn : w === 16 ? Dd : Wl);
  for (let w = 15; w <= 19; w++) i(44, w, nn);
  return i(44, 20, zu), d;
}
function Uu(n, d, i, c) {
  const g = Math.max(1, Math.round(n)), b = Math.max(1, Math.round(d)), w = new Uint8ClampedArray(g * b * 4), _ = oo(c.skyClearDay), k = oo(c.skyFogDay), N = Gu(_), xt = Math.round(b * 0.55), pt = tl(1 - Math.log(i / Mc) / Math.log(Vu / Mc)), Y = za(_, k, pt), $ = (O) => tl((O - 0.1) / 0.9), ot = tl((1 - Math.exp(-2 / i) - 0.2) / 0.8), K = Math.round(g / 2 - si / 2), z = xt + 3;
  for (let O = 0; O < b; O++) {
    const ut = z - 1 - O, rt = O - z;
    for (let ht = 0; ht < g; ht++) {
      const et = ht - K;
      let tt, S;
      const at = ut >= 0 && ut < yp && et >= 0 && et < si ? N[ut][et] : void 0;
      if (at)
        tt = at, S = ot;
      else if (ut >= 0 && ut <= 1 && et >= 4 - ut && et <= 5 - ut)
        tt = za(Ar, kc, 0.15), S = ot;
      else if (O < xt) {
        const wt = tl(((O + 0.5) / xt - 0.15) / 0.85) * 3, j = Math.min(3, Math.floor(wt + Ol(ht + 2, O + 5)));
        tt = za(Y, Ar, j * 0.1), S = pt * 0.95;
      } else {
        const wt = (O - xt + 0.5) / (b - xt), j = Math.min(1.5, 6e-3 / (wt * wt)), zt = tl(wt * 1.4) * 3, M = Math.min(3, Math.floor(zt + Ol(ht + 1, O + 6)));
        tt = za(kc, ju, M / 3);
        const E = 1 + Math.round(wt * 7), L = Math.floor(ht / (E * 3)), P = 0.06 + 0.16 * wt, ft = ht % (E * 3) < E;
        ft && yc(L, O) < P ? tt = za(tt, Ar, 0.18 + 0.1 * (1 - wt)) : ft && wt > 0.5 && yc(L, O - 1) < P && (tt = za(tt, nn, 0.12)), S = $(1 - Math.exp(-j / i)), rt === 0 && et >= 3 && et <= 8 ? (tt = za(tt, Ar, et < 6 ? 0.8 : 0.45), S = ot) : rt >= 0 && rt <= 2 && et >= si && et < si + 40 ? ((1 - (et - si) / 40) * (rt === 1 ? 0.9 : 0.5) > Ol(ht, O + 3) && (tt = za(tt, Ar, 0.5)), S = ot) : rt === 0 && et >= 6 && et < si && (tt = za(tt, nn, et % 2 === 0 ? 0.35 : 0.2), S = ot);
      }
      const Pt = S > Ol(ht, O) ? k : tt, G = (O * g + ht) * 4;
      w[G] = Pt[0], w[G + 1] = Pt[1], w[G + 2] = Pt[2], w[G + 3] = 255;
    }
  }
  return { data: w, w: g, h: b };
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
  const c = (b) => Math.abs(Math.log(b[2] / d)), g = i.reduce((b, w) => c(w) < c(b) ? w : b);
  return c(g) <= Math.log(Zu) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const $u = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, Xu = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", no = 6e4, He = 36e5, Eo = 864e5, nl = 1440, Ju = 6, Qu = 10 * no, Sc = 3, tf = 3, ql = { day: [6, 22], waking: [7, 23], all: [0, 24] }, ef = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], af = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Cc = (n, d, i, c) => '<circle cx="' + n + '" cy="' + d + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const b = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), _ = i + 2, k = i + 2 + c;
  return "M" + (n + b * _).toFixed(2) + " " + (d + w * _).toFixed(2) + "L" + (n + b * k).toFixed(2) + " " + (d + w * k).toFixed(2);
}).join("") + '"/>', ni = (n) => '<path d="' + af + '"' + (n ? ' transform="' + n + '"' : "") + "/>", oi = (n) => '<path d="' + n + '"/>', Tc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function nf(n, d) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Tc : Cc(12, 12, 4, 2.5);
    case "clear-night":
      return Tc;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Cc(7.5, 7.5, 2.6, 1.4)) + ni("translate(3.6,3) scale(.85)");
    case "cloudy":
      return ni();
    case "fog":
      return oi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return ni(i) + oi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return ni(i) + oi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return ni(i) + oi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return ni(i) + oi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return ni(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return ni(i) + oi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return ni(i) + oi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return oi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + oi("M12 8v5M12 16h.01");
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
}, ff = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], hf = Object.keys(Ut.phases), jl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, kp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], zl = 100, Ac = "µg/m³", gf = "weather_alerts.air_quality_pollen", Jl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], vf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, bf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], wf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, xf = { daily: 1, hourly: 2 }, Ot = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Na = (n, d) => n.replace(/\{(\w+)\}/g, (i, c) => d[c] ?? ""), ls = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', _c = /* @__PURE__ */ new Map();
function yf(n) {
  let d = _c.get(n);
  if (d === void 0) {
    const i = "http://www.w3.org/2000/svg", c = document.createElementNS(i, "svg"), g = document.createElementNS(i, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), c.append(g), document.body.append(c);
    const b = g.getBBox();
    c.remove();
    const w = Math.max(b.width, b.height), _ = w ? 26 * 24 / w : 0, k = _ / 24;
    d = w ? "width:" + _.toFixed(2) + "px;height:" + _.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * k).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * k).toFixed(2) + "px" : "", _c.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : ls(n);
}
const kf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ue = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Ec = /* @__PURE__ */ new Map(), Dc = /* @__PURE__ */ new Map(), Bd = /* @__PURE__ */ new WeakMap(), Mf = (n) => {
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
function fa(n, d, i) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const g = (d == null ? void 0 : d.number_format) === "none", b = { maximumFractionDigits: 2, ...i, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : Mf(d), _ = JSON.stringify([w, b]);
  let k = Ec.get(_);
  if (!k) {
    try {
      k = new Intl.NumberFormat(w, b);
    } catch {
      k = new Intl.NumberFormat(void 0, b);
    }
    Ec.set(_, k);
  }
  return k.format(c);
}
const nc = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function Sf(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Bd.has(n)) return Bd.get(n);
  const d = n.time_format, i = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return Bd.set(n, i), i;
}
const Mp = (n) => {
  var d, i;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Sp(n, d) {
  const i = JSON.stringify([n, d]);
  let c = Dc.get(i);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, d);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...d, timeZone: void 0 });
    }
    Dc.set(i, c);
  }
  return c;
}
const Ao = (n, d) => Sp(nc(d), { hour: "numeric", minute: "2-digit", hourCycle: Sf(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: Mp(d) }).format(n), Rc = (n, d) => Sp(nc(d), { weekday: "short", timeZone: Mp(d) }).format(n), Cf = (n, d) => n.toLocaleDateString(nc(d), { weekday: "narrow" }), sa = (n, d) => Ue(d) ? fa(Math.round(Number(d)), n.locale) + "°" : "–", ds = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, rs = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), wn = Math.PI / 180, Tf = 2440588, Lf = 2451545, Ql = wn * 23.4397, Af = 149598e3, _f = -0.833 * wn, Ef = 0.133 * wn, Bc = 5 * no, Cp = (n) => n.getTime() / Eo - 0.5 + Tf - Lf, Tp = (n, d) => Math.atan2(Math.sin(n) * Math.cos(Ql) - Math.tan(d) * Math.sin(Ql), Math.cos(n)), Lp = (n, d) => Math.asin(Math.sin(d) * Math.cos(Ql) + Math.cos(d) * Math.sin(Ql) * Math.sin(n)), Df = (n, d) => wn * (280.16 + 360.9856235 * n) - d, Rf = (n, d, i) => Math.asin(Math.sin(d) * Math.sin(i) + Math.cos(d) * Math.cos(i) * Math.cos(n));
function Ap(n) {
  const d = wn * (357.5291 + 0.98560028 * n), i = wn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), c = d + i + wn * 102.9372 + Math.PI;
  return { ra: Tp(c, 0), dec: Lp(c, 0), dist: Af };
}
function _p(n) {
  const d = wn * (218.316 + 13.176396 * n), i = wn * (134.963 + 13.064993 * n), c = wn * (93.272 + 13.22935 * n), g = d + wn * 6.289 * Math.sin(i), b = wn * 5.128 * Math.sin(c);
  return { ra: Tp(g, b), dec: Lp(g, b), dist: 385001 - 20905 * Math.cos(i) };
}
const Ep = (n, d, i, c) => {
  const g = Cp(d), b = n(g);
  return Rf(Df(g, wn * -c) - b.ra, wn * i, b.dec);
}, oc = (n, d, i) => Ep(Ap, n, d, i), Bf = (n, d, i) => Ep(_p, n, d, i);
function Dp(n, d, i, c) {
  const g = {};
  let b = i.getTime(), w = n(i) - d;
  for (let _ = b + Bc; _ <= c.getTime(); _ += Bc) {
    const k = n(new Date(_)) - d;
    if (w < 0 != k < 0) {
      const N = new Date(b + (_ - b) * w / (w - k));
      k > 0 ? g.rise ?? (g.rise = N) : g.set ?? (g.set = N);
    }
    b = _, w = k;
  }
  return g;
}
const Rp = (n) => {
  const d = ds(n);
  return [d, new Date(d.getTime() + Eo)];
}, Nf = (n, d, i) => Dp((c) => oc(c, d, i), _f, ...Rp(n)), Pf = (n, d, i) => Dp((c) => Bf(c, d, i), Ef, ...Rp(n));
function If(n) {
  const d = Cp(n), i = Ap(d), c = _p(d), g = Math.acos(Math.sin(i.dec) * Math.sin(c.dec) + Math.cos(i.dec) * Math.cos(c.dec) * Math.cos(i.ra - c.ra)), b = Math.atan2(i.dist * Math.sin(g), c.dist - i.dist * Math.cos(g)), w = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - c.ra), Math.sin(i.dec) * Math.cos(c.dec) - Math.cos(i.dec) * Math.sin(c.dec) * Math.cos(i.ra - c.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (w < 0 ? -1 : 1) / Math.PI };
}
const Hf = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, td = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && Ue(d.latitude) && Ue(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function Nd(n, d) {
  var N, xt, pt;
  const i = td(n), c = i ? Nf(d, i.lat, i.lon) : {}, g = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], b = ds(d).getTime(), w = (Y) => {
    const $ = Y ? new Date(Y) : null;
    return $ && Number.isFinite($.getTime()) && ds($).getTime() === b ? $ : null;
  }, _ = w((xt = g == null ? void 0 : g.attributes) == null ? void 0 : xt.next_rising), k = w((pt = g == null ? void 0 : g.attributes) == null ? void 0 : pt.next_setting);
  return _ && (c.rise = _), k && (c.set = k), c;
}
function Ff(n) {
  var c;
  const d = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const i = td(n);
  return i ? oc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const _r = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", cs = (n, d) => {
  var c;
  const i = (c = n.entities) == null ? void 0 : c[d];
  return !i || !i.hidden && !i.entity_category;
}, vn = (n, d, i) => {
  var c, g;
  for (const b of d) {
    const w = (c = n.states) == null ? void 0 : c[b];
    if (!_r(w)) continue;
    const _ = (g = w.attributes) == null ? void 0 : g[i];
    if (_ != null && _ !== "") return { stateObj: w, value: _ };
  }
}, Of = (n, d) => d.map((i) => {
  var c;
  return (c = n.states) == null ? void 0 : c[i];
}).find(_r), Wf = (n, d, i) => d.map((c) => {
  var g;
  return (g = n.states) == null ? void 0 : g[c];
}).find((c) => {
  var g;
  return _r(c) && (((g = c.attributes) == null ? void 0 : g.supported_features) == null || Number(c.attributes.supported_features) & xf[i]);
});
function Lr(n, d, i) {
  var b, w, _, k;
  const c = ((w = (b = n.config) == null ? void 0 : b.unit_system) == null ? void 0 : w.length) || "", g = (d == null ? void 0 : d.attributes) || {};
  switch (i) {
    case "precipitation":
      return g.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return g.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return g.wind_speed_unit || c + "/h";
    case "visibility":
      return g.visibility_unit || c;
    default:
      return g.temperature_unit || ((k = (_ = n.config) == null ? void 0 : _.unit_system) == null ? void 0 : k.temperature) || "";
  }
}
function Kl(n, d, i, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...b] = n.formatEntityAttributeValueToParts(d, i, c).map((w) => w.value);
      return { number: g, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: fa(c, n.locale), unit: Lr(n, d, i) };
}
function qf(n, d, i, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, i, c);
  } catch {
  }
  const g = Kl(n, d, i, c);
  return (g.number + " " + g.unit).trim();
}
function Tr(n, d) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const i = (c = d.attributes) == null ? void 0 : c.unit_of_measurement;
  return uf[d.state] || (i && Ue(d.state) ? fa(d.state, n.locale) + " " + i : d.state);
}
function el(n, d) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((i = d.attributes) == null ? void 0 : i.friendly_name) || d.entity_id;
}
const jf = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Nc = (n) => kp.find(([, d]) => n <= d)[0];
function zf(n, d) {
  if (d === "Beaufort") return Math.round(n);
  const i = d ? vf[d] : void 0;
  if (i === void 0) return;
  const c = bf.findIndex((g) => n * i < g);
  return c === -1 ? 12 : c;
}
const Pc = (n, d) => {
  const i = d ? wf[d] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Ic = (n) => Object.keys(n.states || {}).find((d) => {
  var i, c;
  return d.startsWith("sensor.") && ((c = (i = n.entities) == null ? void 0 : i[d]) == null ? void 0 : c.platform) === "moon";
}), Pd = (n) => Object.values(n.states || {}).filter((d) => {
  var i, c;
  return d.entity_id.startsWith("sensor.") && ((i = d.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = d.attributes) == null ? void 0 : c.state_class) ?? "") && cs(n, d.entity_id);
}).map((d) => d.entity_id).sort()[0];
function Vf(n) {
  var i;
  const d = {};
  for (const [c, g] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (g && "integration_type" in g) {
      d[c] = g.categories;
      continue;
    }
    for (const [b, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) d[b] = w == null ? void 0 : w.categories;
  }
  return d;
}
const Bp = (n, d, i) => {
  var g, b, w;
  const c = (b = (g = n.entities) == null ? void 0 : g[i]) == null ? void 0 : b.platform;
  return !!c && !!((w = d[c]) != null && w.includes(gf));
};
function Gf(n, d) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var g;
    return c.entity_id.startsWith("sensor.") && Jl.includes(((g = c.attributes) == null ? void 0 : g.device_class) ?? "") && cs(n, c.entity_id) && Bp(n, d, c.entity_id);
  }).sort((c, g) => c.entity_id.localeCompare(g.entity_id)).forEach((c) => {
    i.has(c.attributes.device_class) || i.set(c.attributes.device_class, c.entity_id);
  }), Jl.map((c) => i.get(c)).filter(Boolean);
}
const Uf = (n, d) => Object.values(n.states || {}).filter((i) => {
  var c, g;
  return i.entity_id.startsWith("sensor.") && cs(n, i.entity_id) && Bp(n, d, i.entity_id) && (((g = (c = n.entities) == null ? void 0 : c[i.entity_id]) == null ? void 0 : g.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Hc(n, d, i) {
  const c = Math.max(d - n, 1e-6), g = i[i.length - 1], b = i.find((N) => c / N <= 4) ?? g * Math.ceil(c / (4 * g)), w = Math.floor(n / b) * b;
  let _ = Math.ceil(d / b) * b;
  _ === w && (_ = w + b);
  const k = [];
  for (let N = w; N <= _ + b / 1e3; N += b) k.push(N);
  return { min: w, max: _, ticks: k };
}
const al = (n, d, i) => {
  const c = (w) => [1, 3, 5].map((_) => parseInt(w.slice(_, _ + 2), 16)), g = c(n), b = c(d);
  return "rgb(" + g.map((w, _) => Math.round(w + (b[_] - w) * i)).join(", ") + ")";
}, Yf = (n, d, i, c) => {
  const g = i * Math.abs(1 - 2 * c), b = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (d + i) + " A " + g + " " + i + " 0 0 " + b + " " + n + " " + (d - i) + " Z";
}, bn = ({ icon: n, name: d, sub: i, visual: c, double: g, backdrop: b, cls: w }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + yf(n) + '</div><div class="wbText"><span class="wbName">' + Ot(d) + "</span>" + (i ? '<span class="wbSub">' + Ot(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", qi = (n, d) => '<div class="wbValue"><span class="wbNum">' + Ot(n) + "</span>" + (d ? '<span class="wbUnitV">' + Ot(d) + "</span>" : "") + "</div>";
function Zf(n) {
  const d = n.max - n.min || 1, i = (_) => 100 - (Math.min(n.max, Math.max(n.min, _)) - n.min) / d * 100, c = (_) => _ / nl * 100 + "%", g = (_) => _.map((k) => k.t + "," + i(k.v)).join(" "), b = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((_) => '<span class="wbDcSunMark" style="left:' + c(_.t) + '">' + ls(_.rise ? ka.sunsetUp : ka.sunsetDown) + Ot(_.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((_) => '<span style="top:' + i(_) + '%">' + Ot(n.format(_)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + nl + ' 100" preserveAspectRatio="none">' + n.night.map(([_, k]) => '<rect class="wbDcNight" x="' + _ + '" y="0" width="' + (k - _) + '" height="100"></rect>').join("") + n.ticks.map((_) => '<line class="wbDcGrid" x1="0" x2="' + nl + '" y1="' + i(_) + '" y2="' + i(_) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((_) => '<line class="wbDcSunLine" x1="' + _.t + '" x2="' + _.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + g(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((_) => _.v > 0).map((_) => '<i class="wbDcBar" style="left:' + c(_.t + 12) + ";width:" + c(36) + ";height:" + (100 - i(_.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Ot(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Ot(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((_) => '<span class="' + (_.minor ? "wbMinor" : "") + '" style="left:' + c(_.t) + '">' + Ot(_.label) + "</span>").join("") + "</div></div>", w;
}
function Kf(n, d) {
  const w = n.map((z) => z.value), _ = Math.min(...w), k = Math.max(...w), N = k - _ || 1, xt = (z) => z / (n.length - 1) * 300, pt = (z) => 18 + (1 - (z - _) / N) * 84, Y = n.map((z, O) => xt(O) + "," + pt(z.value)).join(" "), $ = w.indexOf(k), ot = w.indexOf(_), K = (z) => z === 0 ? "start" : z === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + Y + ' 300,102"></polygon><polyline class="wbLine" points="' + Y + '" vector-effect="non-scaling-stroke"></polyline><text x="' + xt($) + '" y="' + (pt(k) - 6) + '" text-anchor="' + K($) + '">' + Ot(d(k)) + '</text><text x="' + xt(ot) + '" y="' + (pt(_) + 14) + '" text-anchor="' + K(ot) + '">' + Ot(d(_)) + '</text><text x="0" y="120" text-anchor="start">' + Ot(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Ot(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, d) {
  const b = n.map((pt) => pt.value).concat([]), w = Math.min(...b) - 2, _ = Math.max(...b) + 1, k = _ - w || 1, N = 300 / n.length, xt = (pt) => (1 - (pt - w) / k) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((pt, Y) => '<rect class="wbBar' + (pt.now ? " wbNowBar" : "") + '" x="' + (Y * N + N * 0.2) + '" y="' + xt(pt.value) + '" width="' + N * 0.6 + '" height="' + (104 - xt(pt.value)) + '" rx="6"></rect><text x="' + (Y * N + N / 2) + '" y="120" text-anchor="middle">' + Ot(pt.label) + "</text>").join("") + "</svg>";
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
], Jf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Fc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Qf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let th = 0;
function Oc(n, { getHass: d, entityId: i, style: c = "bitmap", motion: g = !0, cards: b, onOpen: w, hoursWindow: _ } = {}) {
  var Xi, hi;
  const k = "wb" + ++th + "-", N = document.createElement("div");
  N.className = "wb", N.dataset.style = c;
  const xt = document.createElement("div");
  xt.className = "wbBento", N.appendChild(xt), n.replaceChildren(N);
  const pt = ["aq_tile", "pollen_tile", "radar_tile"], Y = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...pt].filter((x) => !b || b.includes(x)), $ = { current: "wide", hourly: "wide", compared_to_average: "double" }, ot = {};
  Y.forEach((x) => {
    const C = document.createElement("div");
    C.className = "wbItem", C.dataset.card = x, C.dataset.size = $[x] || "tile", C.hidden = !0, xt.appendChild(C), ot[x] = { el: C, html: null };
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
  }, E = (x, C) => {
    var A;
    return zt[C] ? (A = x.states) == null ? void 0 : A[zt[C].entityId] : void 0;
  };
  function L(x) {
    const C = j[x];
    C && (C.unsub.then((A) => {
      typeof A == "function" && A();
    }).catch(() => {
    }), delete j[x]), zt[x] && delete zt[x];
  }
  function P(x, C, A) {
    var Z;
    if (typeof ((Z = x.connection) == null ? void 0 : Z.subscribeMessage) != "function") return;
    const H = { entityId: A };
    try {
      H.unsub = Promise.resolve(x.connection.subscribeMessage((X) => {
        K || j[C] !== H || (X != null && X.forecast ? zt[C] = { entityId: A, forecast: X.forecast } : delete zt[C], po());
      }, { type: "weather/subscribe_forecast", forecast_type: C, entity_id: A }));
    } catch (X) {
      H.unsub = Promise.reject(X);
    }
    H.unsub.catch(() => {
      j[C] === H && delete j[C];
    }), j[C] = H;
  }
  function ft(x, C) {
    var A;
    for (const H of ["daily", "hourly"]) {
      const Z = Wf(x, C, H);
      ((A = j[H]) == null ? void 0 : A.entityId) !== (Z == null ? void 0 : Z.entity_id) && (L(H), Z && P(x, H, Z.entity_id));
    }
  }
  const dt = (x, C, A, H = !1) => x.callWS({
    type: "history/history_during_period",
    start_time: A.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [C],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  });
  async function q(x, C) {
    var ct, vt, yt;
    const A = vn(x, C, "pressure");
    if (!A) return;
    const H = A.stateObj.entity_id, Z = await dt(x, H, new Date(Date.now() - 3 * He)), X = (yt = (vt = (ct = Z == null ? void 0 : Z[H]) == null ? void 0 : ct.find((It) => {
      var _t;
      return typeof ((_t = It.a) == null ? void 0 : _t.pressure) == "number";
    })) == null ? void 0 : vt.a) == null ? void 0 : yt.pressure;
    at.pressureHistory = typeof X == "number" ? { entityId: H, value: X } : void 0;
  }
  async function bt(x, C) {
    var vt;
    const A = vn(x, C, "temperature");
    if (!A) return;
    const H = A.stateObj.entity_id, Z = ds(/* @__PURE__ */ new Date()), X = await dt(x, H, new Date(Z.getTime() - sf * Eo)), ct = /* @__PURE__ */ new Map();
    for (const yt of (X == null ? void 0 : X[H]) ?? []) {
      const It = (vt = yt.a) == null ? void 0 : vt.temperature, _t = new Date((yt.lc ?? yt.lu) * 1e3);
      if (typeof It != "number" || _t >= Z) continue;
      const Ct = _t.toDateString();
      ct.set(Ct, Math.max(ct.get(Ct) ?? -1 / 0, It));
    }
    at.temperatureHistory = { entityId: H, dailyHighs: [...ct.values()], days: [...ct.entries()].map(([yt, It]) => ({ date: new Date(yt), high: It })) };
  }
  async function Mt(x) {
    const C = Pd(x);
    if (!C) return;
    const A = await x.callWS({ type: "recorder/statistic_during_period", statistic_id: C, rolling_window: { duration: { hours: 24 } } });
    at.rain = { entityId: C, change: (A == null ? void 0 : A.change) ?? void 0 };
  }
  function Jt() {
    const x = d == null ? void 0 : d();
    if (!x || K || typeof x.callWS != "function") return;
    const C = io(x);
    at.lastFetch = Date.now(), [q(x, C), bt(x, C), Mt(x)].forEach((A) => A.then(() => po(), () => {
    }));
  }
  async function pe() {
    const x = d == null ? void 0 : d();
    if (!x) return;
    const C = vn(x, io(x), "temperature");
    if (!C) return;
    const A = C.stateObj.entity_id, H = ds(/* @__PURE__ */ new Date());
    try {
      const Z = await dt(x, A, H), X = (ct) => ((Z == null ? void 0 : Z[A]) ?? []).map((vt) => {
        var yt;
        return { time: vt.lu * 1e3, value: (yt = vt.a) == null ? void 0 : yt[ct] };
      }).filter((vt) => typeof vt.value == "number");
      at.todayHistory = { day: H.toDateString(), fetched: Date.now(), temperature: X("temperature"), humidity: X("humidity") }, po();
    } catch {
    }
  }
  async function aa(x) {
    const C = d == null ? void 0 : d();
    if (C)
      try {
        const A = await dt(C, x, new Date(Date.now() - 24 * He), !0), H = ((A == null ? void 0 : A[x]) ?? []).filter((X) => Ue(X.s)), Z = Math.max(1, Math.ceil(H.length / 48));
        at.aqHistory = { entityId: x, points: H.filter((X, ct) => ct % Z === 0).map((X) => ({ label: Ao(new Date(X.lu * 1e3), C), value: Number(X.s) })) }, po();
      } catch {
      }
  }
  function Ce(x) {
    at.categories === void 0 && (at.categories = null, Promise.resolve().then(() => x.callWS({ type: "integration/descriptions" })).then((C) => {
      at.categories = Vf(C);
    }, () => {
      at.categories = {};
    }).then(() => po()));
  }
  function io(x) {
    var A;
    const C = Object.keys(x.states || {}).filter((H) => H.startsWith("weather.") && cs(x, H)).sort();
    return i && ((A = x.states) != null && A[i]) ? [i, ...C.filter((H) => H !== i)] : C;
  }
  const Ea = (x) => at.categories ? { air: Gf(x, at.categories), pollen: Uf(x, at.categories) } : { air: [], pollen: [] };
  function Dt(x, C, A, H) {
    if (c === "line") return '<span class="wbWx wbS' + C + ' wbLineIcon" aria-hidden="true">' + Rd(x, A || x === "clear-night") + "</span>";
    if (c === "smooth") {
      const Z = Wu(x, C === 90, A, k + "g-" + H);
      return '<span class="wbWx wbS' + C + " wb" + Z.k[0].toUpperCase() + Z.k.slice(1) + (Z.night ? " wbNight" : "") + '" aria-hidden="true">' + Z.svg + "</span>";
    }
    return '<span class="wbWx wbS' + C + '" aria-hidden="true"><canvas data-wb-wx="' + Ot(ed(x, A)) + '" data-size="' + C + '"></canvas></span>';
  }
  const ye = () => M("daily").filter((x) => x.templow != null).slice(0, Ju);
  function Xe(x, C) {
    const A = new Date(C.datetime), H = /* @__PURE__ */ new Date();
    return rs(A, H) ? Ut.today : rs(A, new Date(H.getTime() + Eo)) ? Ut.tomorrow : Rc(A, x);
  }
  const we = (x, C, A) => A === 0 ? Xe(x, C) : Rc(new Date(C.datetime), x);
  function qe(x, C) {
    var _t, Ct, Zt, Ht;
    const A = Of(x, C);
    if (!A) return "";
    const H = ye(), Z = S.openDay !== void 0 ? H[S.openDay] : void 0, X = vn(x, C, "temperature"), ct = H[0], vt = ct && rs(new Date(ct.datetime), /* @__PURE__ */ new Date()), yt = ((Ct = (_t = x.config) == null ? void 0 : _t.unit_system) == null ? void 0 : Ct.temperature) || ((Zt = A.attributes) == null ? void 0 : Zt.temperature_unit) || "";
    let It = '<div class="wbCard wbWeather' + (Z ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Z ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ot(Ut.openPage) + '">' : '<div class="wbCurrent">') + Dt(A.state, 90, Ff(x), "now") + '<div class="wbTempBlock">' + (X && Ue(X.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ot(fa(Math.round(Number(X.value)), x.locale)) + '</span><span class="wbUnit">' + Ot(yt) + "</span></div>" : "") + '<div class="wbPlace">' + Ot(((Ht = x.config) == null ? void 0 : Ht.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ot(Tr(x, A)) + "</div>" + (vt && ct.templow != null ? '<div class="wbRange">' + Ot(Na(Ut.range, { high: sa(x, ct.temperature), low: sa(x, ct.templow) })) + "</div>" : "") + "</div></div>";
    if (It += Qt(x) + Gi(x), H.length) {
      const Wt = vt && X && Ue(X.value) ? sa(x, X.value) : "", $t = (Yt, Tt, ee) => Yt === 0 && Wt ? '<span class="wbAsDay">' + Ot(Tt) + '</span><span class="wbAsNow">' + Ot(ee) + "</span>" : Ot(Tt);
      It += '<div class="wbColumns" role="list">' + H.map((Yt, Tt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="col-' + Tt + '"><span class="wbDay">' + $t(Tt, we(x, Yt, Tt), Ut.now) + "</span>" + Dt(Yt.condition ?? "cloudy", 60, !1, "col" + Tt) + '<span class="wbTemps"><span class="wbHi">' + $t(Tt, sa(x, Yt.temperature), Wt) + '</span><span class="wbLo">' + Ot(sa(x, Yt.templow)) + "</span></span></button>").join("") + "</div>", It += '<div class="wbHalves" role="list">' + H.map((Yt, Tt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="half-' + Tt + '">' + Dt(Yt.condition ?? "cloudy", 40, !1, "half" + Tt) + '<span class="wbText"><span class="wbName">' + Ot(Xe(x, Yt)) + '</span><span class="wbSub">' + Ot(Na(Ut.highLow, { high: sa(x, Yt.temperature), low: sa(x, Yt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return It + "</div>" + (Z ? Va(x, C, Z) : "") + "</div>";
  }
  const Er = {
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
  }, xe = {
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
    const C = Date.now(), A = M("hourly").filter((Ct) => new Date(Ct.datetime).getTime() > C - He).slice(0, 13);
    if (A.length < 2) return "";
    const H = (Ct) => Ao(new Date(Ct.datetime), x), Z = (Ct) => Er[Ct.condition] || "", X = (Ct) => xe[Ct.condition] || Ct.condition;
    let ct = Z(A[0]);
    if (!ct) return "";
    let vt = A[0], yt = 0;
    for (const Ct of A.slice(1))
      yt === 2 || X(Ct) === X(vt) || !Z(Ct) || (ct += (yt ? " and " : ", ") + Z(Ct) + " from " + H(Ct), vt = Ct, yt++);
    const It = Number(A[0].temperature), _t = A.filter((Ct) => Ue(Ct.temperature));
    if (Ue(It) && _t.length) {
      const Ct = _t.reduce((Ht, Wt) => Number(Wt.temperature) < Number(Ht.temperature) ? Wt : Ht), Zt = _t.reduce((Ht, Wt) => Number(Wt.temperature) > Number(Ht.temperature) ? Wt : Ht);
      It - Number(Ct.temperature) >= 3 ? ct += ", down to " + sa(x, Ct.temperature) + " by " + H(Ct) : Number(Zt.temperature) - It >= 3 && (ct += ", up to " + sa(x, Zt.temperature) + " by " + H(Zt));
    }
    return ct[0].toUpperCase() + ct.slice(1) + ".";
  }
  const Qt = (x) => {
    const C = ae(x);
    return C ? '<div class="wbSummary"><p class="wbSummaryText">' + Ot(C) + "</p></div>" : "";
  };
  function Gi(x) {
    const [C, A] = ql[_ == null ? void 0 : _()] || ql.day, H = Date.now(), Z = M("hourly").filter((X) => {
      const ct = new Date(X.datetime), vt = ct.getHours();
      return ct.getTime() > H - He / 2 && vt >= C && vt < A && Ue(X.temperature);
    }).slice(0, 4);
    return Z.length ? '<div class="wbNextHours" role="list">' + Z.map((X, ct) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Ot(Ao(new Date(X.datetime), x)) + "</span>" + Dt(X.condition ?? "cloudy", 40, X.is_daytime === !1, "hr" + ct) + '<span class="wbHourTemp">' + Ot(sa(x, X.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function di(x) {
    const C = x.getTime(), A = Date.now() - He;
    return M("hourly").filter((H) => {
      const Z = new Date(H.datetime).getTime();
      return Z >= C && Z < C + Eo && Z > A;
    });
  }
  function Ui(x) {
    if (!x.length) return ["temperature"];
    const C = ["temperature"];
    return x.some((A) => A.precipitation != null || A.precipitation_probability != null) && C.push("precipitation"), x.some((A) => A.humidity != null) && C.push("humidity"), C;
  }
  function Va(x, C, A) {
    const H = ds(new Date(A.datetime)), Z = di(H), X = Ui(Z), ct = X.includes(S.dayMode) ? S.dayMode : "temperature", vt = (yt) => yt === "humidity" ? Ut.humidity : Ut.modes[yt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Dt(A.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ot(Xe(x, A)) + '</span><span class="wbSub">' + Ot(Na(Ut.highLow, { high: sa(x, A.temperature), low: sa(x, A.templow) })) + '</span></div><button class="wbBack" title="' + Ot(Ut.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ls(ka.back) + "</button></div>" + (X.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + X.map((yt) => '<button aria-pressed="' + (yt === ct) + '" data-wb="day-mode" data-mode="' + yt + '" data-wb-focus="day-mode-' + yt + '">' + Ot(vt(yt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(me(x, C, H, Z, ct)) + "</div></div>";
  }
  function me(x, C, A, H, Z) {
    var Qi;
    const X = A.getTime(), ct = Date.now(), vt = rs(A, /* @__PURE__ */ new Date()), yt = (ue) => (ue - X) / no, It = (ue) => Ao(new Date(ue), x), _t = (ue) => new Date(ue.datetime).getTime(), Ct = [0, 3, 6, 9, 12, 15, 18, 21].map((ue) => ({ t: ue * 60, label: It(X + ue * He), minor: ue % 6 !== 0 })), { rise: Zt, set: Ht } = Nd(x, A), Wt = [], $t = [];
    Zt && (Wt.push({ t: yt(Zt.getTime()), label: It(Zt.getTime()), rise: !0 }), $t.push([0, yt(Zt.getTime())])), Ht && (Wt.push({ t: yt(Ht.getTime()), label: It(Ht.getTime()), rise: !1 }), $t.push([yt(Ht.getTime()), nl]));
    const Yt = td(x);
    !Zt && !Ht && Yt && oc(new Date(X + Eo / 2), Yt.lat, Yt.lon) < 0 && $t.push([0, nl]);
    const Tt = vt ? yt(ct) : void 0, ee = { hours: Ct, sun: Wt, night: $t };
    if (!H.length && !vt) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ut.noHourly };
    if (Z === "precipitation") {
      const ue = H.some((ma) => ma.precipitation_probability != null), Cn = H.map((ma) => ({ t: yt(_t(ma)), v: Number((ue ? ma.precipitation_probability : ma.precipitation) ?? 0) })), Za = Lr(x, E(x, "hourly"), "precipitation"), Tn = Math.max(0, ...Cn.map((ma) => ma.v)), yn = ue ? 100 : Hc(0, Math.max(Tn, 1), [0.5, 1, 2, 5, 10]).max, go = (ma) => ue ? fa(ma, x.locale) + "%" : fa(ma, x.locale, { maximumFractionDigits: 1 }) + " " + Za, pn = Cn.find((ma) => ma.v === Tn);
      return {
        ...ee,
        kind: "bars",
        points: Cn,
        min: 0,
        max: yn,
        ticks: [0, yn / 2, yn],
        format: go,
        now: Tt !== void 0 ? { t: Tt, v: 0 } : void 0,
        peak: pn && Tn > 0 ? { t: pn.t + 30, v: pn.v, label: go(pn.v) } : void 0,
        note: Tn > 0 ? void 0 : Ut.noRain
      };
    }
    const ne = Z === "humidity" ? "humidity" : "temperature", Oe = H.filter((ue) => ue[ne] != null && (!vt || _t(ue) >= ct)).map((ue) => ({ t: yt(_t(ue)), v: Number(ue[ne]) }));
    let Et, _e = [];
    if (Tt !== void 0) {
      const ue = vn(x, C, ne);
      ue && Ue(ue.value) && (Et = { t: Tt, v: Number(ue.value) }, Oe.unshift(Et)), _e = (((Qi = at.todayHistory) == null ? void 0 : Qi.day) === A.toDateString() ? at.todayHistory[ne] : []).filter((Za) => Za.time <= ct).map((Za) => ({ t: Math.max(0, yt(Za.time)), v: Za.value })), Et && _e.length && _e.push(Et);
    }
    const We = [..._e, ...Oe];
    if (!We.length) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ut.noHourly };
    const cn = We.map((ue) => ue.v), Sn = Hc(Math.min(...cn), Math.max(...cn), ne === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    ne === "humidity" && (Sn.min = Math.max(0, Sn.min), Sn.max = Math.min(100, Sn.max), Sn.ticks = Sn.ticks.filter((ue) => ue >= 0 && ue <= 100));
    const mo = ne === "humidity" ? (ue) => fa(ue, x.locale) + "%" : (ue) => sa(x, ue), Ji = ne === "temperature" ? We.reduce((ue, Cn) => Cn.v > ue.v ? Cn : ue) : void 0;
    return { ...ee, kind: "line", points: Oe, past: _e, ...Sn, format: mo, now: Et, peak: Ji ? { ...Ji, label: mo(Ji.v) } : void 0 };
  }
  function la(x) {
    const C = ["temperature"];
    return x.some((A) => A.precipitation_probability != null || A.precipitation != null) && C.push("precipitation"), x.some((A) => A.wind_speed != null) && C.push("wind"), C;
  }
  function Ma(x, C, A = Sc) {
    var X, ct;
    const H = M("daily"), Z = [];
    for (let vt = 0; vt < A; vt++) for (const yt of [!1, !0]) {
      const It = x.getTime() + (vt * 24 + (yt ? 12 : 0)) * He, _t = It + 12 * He, Ct = {};
      C.forEach((Ht) => {
        const Wt = new Date(Ht.datetime).getTime();
        Ht.condition && Wt >= It && Wt < _t && (Ct[Ht.condition] = (Ct[Ht.condition] ?? 0) + (of.has(Ht.condition) ? 2 : 1));
      });
      let Zt = (X = Object.entries(Ct).sort((Ht, Wt) => Wt[1] - Ht[1])[0]) == null ? void 0 : X[0];
      if (!Zt) {
        const Ht = new Date(It).toDateString();
        Zt = ((ct = H.find((Wt) => new Date(Wt.datetime).toDateString() === Ht)) == null ? void 0 : ct.condition) ?? "cloudy";
      }
      Z.push({ cond: yt && Zt === "sunny" ? "clear-night" : Zt, night: yt });
    }
    return Z;
  }
  function ci(x, C, A) {
    const H = E(x, "hourly"), Z = C.precipitation_probability != null ? fa(C.precipitation_probability, x.locale) + "%" : "", X = C.precipitation ? fa(C.precipitation, x.locale) + " " + Lr(x, H, "precipitation") : "";
    switch (A) {
      case "precipitation":
        return Z ? [Z, X] : [X || "–", ""];
      case "wind":
        return C.wind_speed != null ? [fa(Math.round(C.wind_speed), x.locale), Lr(x, H, "wind_speed")] : ["–", ""];
      default:
        return [sa(x, C.temperature), (C.precipitation_probability ?? 0) >= 20 ? Z : ""];
    }
  }
  function Yi(x, C, A) {
    const [H, Z] = ql[_ == null ? void 0 : _()] || ql.day, X = [];
    for (let ct = 0; ct < 4 && X.length < 3; ct++) {
      const vt = /* @__PURE__ */ new Date();
      vt.setHours(0, 0, 0, 0), vt.setDate(vt.getDate() + ct);
      const yt = new Date(vt);
      yt.setHours(Z, 0, 0, 0), vt.setHours(H, 0, 0, 0), !(yt.getTime() <= A || !C.some((It) => {
        const _t = new Date(It.datetime).getTime();
        return _t >= vt.getTime() && _t <= yt.getTime();
      })) && X.push({ a: vt.getTime(), b: yt.getTime(), label: Xe(x, { datetime: vt.toISOString() }) });
    }
    return X;
  }
  function Kt(x, C, A, H, Z, X) {
    const ct = (A.b - C.a) / He, vt = (Tt) => ((Tt - C.a) / He).toFixed(3), yt = 80, It = 32, _t = [];
    for (const Tt = new Date(C.a - Eo); Tt.getTime() < A.b + Eo; Tt.setDate(Tt.getDate() + 1)) {
      const { rise: ee, set: ne } = Nd(x, new Date(Tt));
      ee && ne && _t.push({ rise: ee.getTime(), set: ne.getTime() });
    }
    const Ct = (Tt, ee) => yt - (yt - It) * Math.sin(Math.PI * (ee - Tt.rise) / (Tt.set - Tt.rise)), Zt = (Tt) => !_t.some((ee) => Tt >= ee.rise && Tt <= ee.set);
    let Ht = "", Wt = "", $t = "";
    _t.forEach((Tt, ee) => {
      const ne = [];
      for (let Et = Tt.rise; Et <= Tt.set; Et += 15 * no) ne.push(vt(Et) + "," + Ct(Tt, Et).toFixed(2));
      ne.push(vt(Tt.set) + "," + yt), Ht += '<polyline class="wbLineArc" points="' + ne.join(" ") + '"/>';
      const Oe = _t[ee + 1];
      Oe && (Ht += '<rect class="wbLineNight" x="' + vt(Tt.set) + '" y="0" width="' + ((Oe.rise - Tt.set) / He).toFixed(3) + '" height="100"/>'), [[Tt.rise, "↑"], [Tt.set, "↓"]].forEach(([Et, _e]) => {
        Et < C.a || Et > A.b || (Wt += '<line class="wbLineEdge" x1="' + vt(Et) + '" x2="' + vt(Et) + '" y1="0" y2="100"/>', $t += '<span class="wbLineTime" style="left:' + X(Et) + '">' + _e + " " + Ot(Ao(new Date(Et), x)) + "</span>");
      });
    });
    const Yt = _t.find((Tt) => Z >= Tt.rise && Z <= Tt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + ct + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Ht + Wt + '<line class="wbLineHorizon" x1="0" x2="' + ct + '" y1="' + yt + '" y2="' + yt + '"/></svg>' + $t + (Yt ? '<span class="wbLineNow" style="left:' + X(Z) + ";top:" + Ct(Yt, Z) + '%">' + Rd("sunny", !1) + "</span>" : "") + H.filter((Tt) => Tt.entry && !Tt.now).map((Tt) => '<span class="wbLineGlyph' + Tt.edge + '" style="left:' + X(Tt.t) + '">' + Rd(Tt.entry.condition ?? "cloudy", Zt(Tt.t)) + "</span>").join("");
  }
  function Bt(x, C) {
    delete wt.hourly;
    const A = S.hourlyView === "bars" ? "bars" : "strip", H = '<div class="wbHeader"><h2 class="wbTitle">' + Ot(A === "bars" ? Ut.nextDays : Ut.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ot(Ut.showAs) + '">' + ["strip", "bars"].map((Et) => '<button aria-pressed="' + (Et === A) + '" data-wb="hourly-view" data-view="' + Et + '" data-wb-focus="hourly-view-' + Et + '">' + Ot(Ut.views[Et]) + "</button>").join("") + "</div></div>";
    if (A === "bars") return Re(x, C, H);
    const Z = M("hourly"), X = Math.floor(Date.now() / no) * no, ct = Z.filter((Et) => new Date(Et.datetime).getTime() > X - He);
    if (!ct.length) return "";
    const vt = la(ct), yt = vt.includes(S.hourlyMode) ? S.hourlyMode : "temperature", It = Yi(x, Z, X);
    if (!It.length) return "";
    const _t = It[0], Ct = It[It.length - 1], Zt = (_t.b - _t.a) / He, Ht = (Et) => "calc(var(--wb-u) * " + ((Et - _t.a) / He).toFixed(3) + ")", Wt = new Date(_t.a);
    Wt.setHours(6, 0, 0, 0), Wt.getTime() > _t.a && Wt.setDate(Wt.getDate() - 1);
    const $t = Math.ceil((Ct.b - Wt.getTime()) / Eo);
    c !== "line" && (wt.hourly = { segs: Ma(Wt, Z, $t), seed: Wt.getDate(), columns: $t });
    const Yt = (Et) => Et === _t.a ? " wbFirst" : Et === Ct.b ? " wbLast" : "", Tt = [];
    for (let Et = _t.a; Et < Ct.b; ) {
      const _e = new Date(Et);
      _e.setHours(24, 0, 0, 0);
      const We = Math.min(_e.getTime(), Ct.b);
      Tt.push({ a: Et, b: We, label: Xe(x, { datetime: new Date(Et).toISOString() }), page: It.find((cn) => cn.a >= Et && cn.a < We) || It.find((cn) => cn.a < We && cn.b > Et) }), Et = We;
    }
    const ee = X > _t.a && X < Ct.b ? Math.floor((X - _t.a) / (2 * He)) * 2 : 0, ne = [];
    for (let Et = _t.a; Et <= Ct.b; Et += He) {
      const _e = new Date(Et), We = Yt(Et);
      !We && _e.getHours() % tf || !We && (Math.abs(_t.a - Et) < 2 * He || Math.abs(Ct.b - Et) < 2 * He) || X >= _t.a && Math.abs(Et - X) < 1.5 * He && !We || ne.push({ t: Et, edge: We, label: Ao(_e, x), entry: Et >= X - He ? Z.find((cn) => new Date(cn.datetime).getTime() === Et) : void 0 });
    }
    X > _t.a && X < _t.b && ne.push({ t: X, edge: X - _t.a < He ? " wbFirst" : _t.b - X < He ? " wbLast" : "", label: Ut.now, entry: ct[0], now: !0 });
    const Oe = (Et, _e) => '<span class="wbMark' + Et.edge + (Et.now ? " wbNowMark" : "") + '" style="left:' + Ht(Et.t) + '">' + _e + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + H + (vt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + vt.map((Et) => '<button aria-pressed="' + (Et === yt) + '" data-wb="hourly-mode" data-mode="' + Et + '" data-wb-focus="hourly-mode-' + Et + '">' + Ot(Ut.modes[Et]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ot(Ut.nextHours) + '" data-span="' + Zt + '" data-start="' + ee + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Zt + ");width:calc(var(--wb-u) * " + (Ct.b - _t.a) / He + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ct.b - _t.a) / (2 * He)) + 1)].map((Et, _e) => '<i class="wbSnap" style="left:' + Ht(_t.a + _e * 2 * He) + '"></i>').join("") + '<div class="wbDays">' + Tt.map((Et, _e) => {
      var We;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Et.b - Et.a) / He).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (_e === 0 ? ee : ((((We = Et.page) == null ? void 0 : We.a) ?? Et.a) - _t.a) / He) + '" data-wb-focus="hours-day-' + _e + '">' + Ot(Et.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + ne.map((Et) => Oe(Et, Ot(Et.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + Kt(x, _t, Ct, ne, X, Ht) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Ht(Wt.getTime()) + ";width:calc(var(--wb-u) * " + $t * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (X > _t.a ? '<i class="wbPast" style="width:' + Ht(Math.min(X, Ct.b)) + '"></i><i class="wbNowLine" style="left:' + Ht(X) + '"></i>' : "") + Tt.slice(1).map((Et) => '<i class="wbMidnight" style="left:' + Ht(Et.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + ne.map((Et) => {
      if (!Et.entry) return "";
      const [_e, We] = ci(x, Et.entry, yt);
      return Oe(Et, '<span class="wbPrimaryV">' + Ot(_e) + '</span><span class="wbSecondary">' + Ot(We) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Gt(x) {
    const C = ef, A = C.findIndex(([yt]) => yt >= x);
    if (A <= 0) return "rgb(" + C[A < 0 ? C.length - 1 : 0][1].join(",") + ")";
    const [H, Z] = C[A - 1], [X, ct] = C[A], vt = (x - H) / (X - H);
    return "rgb(" + Z.map((yt, It) => Math.round(yt + (ct[It] - yt) * vt)).join(",") + ")";
  }
  function Re(x, C, A) {
    var Ht;
    const H = M("daily").filter((Wt) => Ue(Wt.templow) && Ue(Wt.temperature)).slice(0, 7);
    if (!H.length) return "";
    const Z = Math.min(...H.map((Wt) => Number(Wt.templow))), X = Math.max(...H.map((Wt) => Number(Wt.temperature))), ct = Math.max(1, X - Z), vt = (Wt) => Math.max(0, Math.min(100, (Wt - Z) / ct * 100)).toFixed(2), yt = /F/.test(Lr(x, E(x, "daily"), "temperature")), It = (Wt) => yt ? (Wt - 32) / 1.8 : Wt, _t = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Wt) => Gt(It(Z + Wt * ct)) + " " + Wt * 100 + "%").join(",") + ")", Ct = (Ht = vn(x, C, "temperature")) == null ? void 0 : Ht.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (la(M("hourly").filter((Wt) => new Date(Wt.datetime).getTime() > Date.now() - He)).length > 1 ? " wbTabbed" : "") + '">' + A + '<div class="wbDayBars" role="list">' + H.map((Wt, $t) => {
      const Yt = Xe(x, Wt), Tt = rs(new Date(Wt.datetime), /* @__PURE__ */ new Date()), ee = Number(Wt.templow), ne = Number(Wt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ot(Na(Ut.rangeRow, { day: Yt, low: sa(x, ee), high: sa(x, ne) })) + '"><span class="wbRangeDay">' + Ot(Yt) + "</span>" + Dt(Wt.condition, 40, !1, "r" + $t) + '<span class="wbRangeLo">' + Ot(sa(x, ee)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + _t + ";clip-path:inset(0 " + (100 - vt(ne)) + "% 0 " + vt(ee) + '% round 4px)"></i>' + (Tt && Ue(Ct) ? '<i class="wbRangeNow" style="left:' + vt(Number(Ct)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ot(sa(x, ne)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function Ca(x) {
    const C = Pt, { rise: A, set: H } = Nd(x, C), Z = A && H ? Math.round((H.getTime() - A.getTime()) / no) : 0, X = Math.floor(Z / 60), ct = Z % 60, vt = A && H ? (C.getTime() - A.getTime()) / (H.getTime() - A.getTime()) : -1, yt = vt >= 0 && vt <= 1, It = Math.PI * (1 - Math.min(1, Math.max(0, vt))), _t = 100 + 74 * Math.cos(It), Ct = 100 - 74 * Math.sin(It), Zt = yt ? Math.sin(Math.PI * vt) : 0, Ht = yt ? al("#2e0a0d", "#43180a", Zt) : "#0e0507", Wt = yt ? al("#7a1d12", "#8f400f", Zt) : "#1c0709", $t = al("#f60c08", "#ff8f00", Zt), Yt = al("#fd9b07", "#ffd84a", Zt), Tt = yt ? al("#fd9b07", "#ffd84a", Zt) : "#6b3a2a", ee = (Oe) => Oe ? Ao(Oe, x) : "–", ne = A && H ? new Date((A.getTime() + H.getTime()) / 2) : null;
    return bn({
      icon: ka.sunny,
      name: Ut.sun,
      sub: Z ? Na(Ut.daylightShort, { hours: X, minutes: ct }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Ht + ", " + Wt + ");--wb-sun-line:" + Tt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + k + 'sun-glow"><stop offset="0" stop-color="' + $t + '"></stop><stop offset="0.45" stop-color="' + $t + '"></stop><stop offset="1" stop-color="' + Yt + '"></stop></radialGradient><clipPath id="' + k + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (yt ? '<circle cx="' + _t + '" cy="' + Ct + '" r="14" fill="url(#' + k + 'sun-glow)" clip-path="url(#' + k + 'above-horizon)"></circle>' : "") + (ne ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Ot(ee(ne)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Ot(ee(A)) + '</text><text class="wbSunTime" x="174" y="117">' + Ot(ee(H)) + "</text></svg></div>"
    });
  }
  function ro(x, C, A) {
    const H = (ct) => k + "moon-" + ct, Z = x > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + H("terminator") + ')" d="' + Yf(61, 61, 57.9, x) + '"' + (C ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", X = (ct, vt, yt, It, _t, Ct) => '<filter id="' + H(ct) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + vt + '" numOctaves="' + yt + '" seed="' + It + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Zt) => "<feFunc" + Zt + ' type="linear" slope="' + _t + '" intercept="' + Ct + '"></feFunc' + Zt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + H("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + H("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + H("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + H("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + H("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + X("mottle", "0.045", 4, 3, 1.8, -0.4) + X("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + H("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + H("fill") + ')"></circle><g' + (A ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + H("soften") + ')">' + Xf.map(([ct, vt, yt, It, _t, Ct]) => '<ellipse cx="' + ct + '" cy="' + vt + '" rx="' + yt + '" ry="' + It + '" fill-opacity="' + Ct + '" transform="rotate(' + _t + " " + ct + " " + vt + ')"></ellipse>').join("") + "</g>" + Jf.map(([ct, vt, yt]) => '<circle class="wbCrater" cx="' + ct + '" cy="' + vt + '" r="' + yt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + H("glow") + ')">' + Qf.map(([ct, vt]) => '<line x1="54.4" y1="95" x2="' + ct + '" y2="' + vt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + H("glow") + ')">' + Fc.map(([ct, vt, yt]) => '<circle cx="' + ct + '" cy="' + vt + '" r="' + yt * 2 + '"></circle>').join("") + "</g>" + Fc.map(([ct, vt, yt]) => '<circle class="wbBrightCenter" cx="' + ct + '" cy="' + vt + '" r="' + yt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + H("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + H("grain") + ')"></rect>' + Z + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Vt(x) {
    const C = G, A = td(x), H = (A == null ? void 0 : A.lat) ?? 0, Z = If(C), X = Ic(x), ct = X ? x.states[X] : void 0, vt = _r(ct) && hf.includes(ct.state) ? ct.state : Hf(Z.phase), { rise: yt, set: It } = A ? Pf(C, A.lat, A.lon) : {}, _t = Z.phase > 0.5 != H < 0, Ct = fa(Math.round(Z.fraction * 100), x.locale) + "%", Zt = yt ?? It, Ht = Zt ? Ao(Zt, x) : void 0;
    return bn({
      icon: ka.night,
      name: Ut.moon,
      sub: Ut.phases[vt],
      visual: '<div class="wbMoonBox">' + ro(Z.fraction, _t, H < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Ht ? Ot(Na(yt ? Ut.moonriseAt : Ut.moonsetAt, { time: Ht })) : "") + "</span><span>" + Ot(Na(Ut.lit, { illumination: Ct })) + "</span></div>"
    });
  }
  function ie(x, C) {
    var Wt;
    const A = vn(x, C, "wind_speed");
    if (!A || !Ue(A.value)) return "";
    const H = vn(x, C, "wind_gust_speed"), Z = vn(x, C, "wind_bearing"), X = Z && Ue(Z.value) ? Number(Z.value) : void 0, ct = zf(Number(A.value), (Wt = A.stateObj.attributes) == null ? void 0 : Wt.wind_speed_unit), vt = Kl(x, A.stateObj, "wind_speed", A.value), yt = X !== void 0 ? Ut.cardinal[ff[((X + 11.25) / 22.5 | 0) % 16]] : void 0, It = H ? qf(x, H.stateObj, "wind_gust_speed", H.value) : void 0, _t = [yt ? Na(Ut.windFrom, { direction: yt }) : void 0, ct !== void 0 ? ct + " " + Ut.beaufort : void 0].filter(Boolean).join(" · ") || It, Ct = ($t, Yt) => {
      const Tt = ($t - 90) * Math.PI / 180;
      return [100 + Yt * Math.cos(Tt), 100 + Yt * Math.sin(Tt)];
    }, Zt = Array.from({ length: 36 }, ($t, Yt) => Yt * 10).map(($t) => {
      const Yt = $t % 90 === 0, [Tt, ee] = Ct($t, 97), [ne, Oe] = Ct($t, Yt ? 83 : 89);
      return '<line class="wbTick' + (Yt ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ee + '" x2="' + ne + '" y2="' + Oe + '"></line>';
    }).join(""), Ht = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([$t, Yt]) => {
      const [Tt, ee] = Ct(Yt, 64);
      return '<text class="wbLetter' + ($t === "n" ? " wbNorth" : "") + '" x="' + Tt + '" y="' + ee + '">' + Ot(Ut.cardinal[$t]) + "</text>";
    }).join("");
    return bn({ icon: ka.windy, name: Ut.wind, sub: _t, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Zt + Ht + (X !== void 0 ? '<path class="wbMarker" transform="rotate(' + X + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ot(vt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ot(vt.unit) + "</text></svg>" });
  }
  function na(x, C) {
    const A = vn(x, C, "uv_index");
    if (!A || !Ue(A.value)) return "";
    const H = Number(A.value), Z = Ut.uvLevel[jf(H)], X = /* @__PURE__ */ new Date();
    X.setHours(23, 59, 59, 999);
    const ct = M("hourly").filter(($t) => $t.uv_index != null && new Date($t.datetime) > /* @__PURE__ */ new Date() && new Date($t.datetime) <= X).reduce(($t, Yt) => !$t || Yt.uv_index > $t.uv ? { uv: Yt.uv_index, time: new Date(Yt.datetime) } : $t, void 0), vt = 48, yt = 100, It = 130, _t = ($t) => -vt + Math.min($t, 11) / 11 * 2 * vt, Ct = ($t, Yt) => {
      const Tt = $t * Math.PI / 180;
      return [yt + Yt * Math.sin(Tt), It - Yt * Math.cos(Tt)];
    }, Zt = ($t, Yt, Tt) => {
      const [ee, ne] = Ct(_t($t), Tt), [Oe, Et] = Ct(_t(Yt), Tt);
      return "M " + ee + " " + ne + " A " + Tt + " " + Tt + " 0 0 1 " + Oe + " " + Et;
    }, Wt = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, jl.low], [3, 6, jl.moderate], [6, 8, jl.high], [8, 11, jl.very_high]].map(([$t, Yt, Tt]) => '<path class="wbVuZone" d="' + Zt($t, Yt, 96) + '" style="stroke:' + Tt + '"></path>').join("") + Array.from({ length: 21 }, ($t, Yt) => ({ angle: -vt + Yt * (2 * vt / 20), major: Yt % 2 === 0 })).map(({ angle: $t, major: Yt }) => {
      const [Tt, ee] = Ct($t, 102), [ne, Oe] = Ct($t, Yt ? 114 : 108);
      return '<line class="wbVuTick' + (Yt ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ee + '" x2="' + ne + '" y2="' + Oe + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + _t(H) + 'deg"><line x1="' + yt + '" y1="' + It + '" x2="' + yt + '" y2="' + (It - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Ot(fa(Math.round(H), x.locale)) + "</text></svg>";
    return bn({
      icon: ka.sunnyAlert,
      name: Ut.metrics.uv_index,
      sub: ct && ct.uv > H ? Na(Ut.uvPeak, { level: Z, uv_index: fa(Math.round(ct.uv), x.locale), time: Ao(ct.time, x) }) : Z,
      visual: Wt
    });
  }
  function On(x) {
    const C = M("daily")[0], A = at.temperatureHistory;
    if (!C || new Date(C.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ue(C.temperature) || !A || A.dailyHighs.length < lf) return "";
    const H = Number(C.temperature), Z = A.dailyHighs.reduce((ne, Oe) => ne + Oe, 0) / A.dailyHighs.length, X = Math.round(H - Z) || 0, ct = X > 0 ? "above" : X < 0 ? "below" : "same", vt = [...A.days, { date: /* @__PURE__ */ new Date(), high: H, today: !0 }], yt = 220, It = 158, _t = 22, Ct = 20, Zt = vt.map((ne) => ne.high).concat(Z), Ht = Math.min(...Zt) - 3, Wt = Math.max(...Zt) + 1, $t = (ne) => _t + (1 - (ne - Ht) / (Wt - Ht)) * (It - _t - Ct), Yt = yt / vt.length, Tt = Math.min(18, Yt * 0.6), ee = '<svg class="wbCompareBars" viewBox="0 0 ' + yt + " " + It + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + yt + '" y1="' + $t(Z) + '" y2="' + $t(Z) + '"></line>' + vt.map((ne, Oe) => {
      const Et = Oe * Yt + Yt / 2, _e = $t(ne.high), We = ne.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + We + '" x="' + (Et - Tt / 2) + '" y="' + _e + '" width="' + Tt + '" height="' + (It - Ct - _e) + '" rx="5"></rect><text class="wbAvgValue' + We + '" x="' + Et + '" y="' + (_e - 6) + '">' + Ot(sa(x, ne.high)) + '</text><text class="wbAvgDay' + We + '" x="' + Et + '" y="' + (It - 4) + '">' + Ot(Cf(ne.date, x)) + "</text>";
    }).join("") + "</svg>";
    return bn({
      icon: ka.chartLine,
      name: Ut.metrics.compared_to_average,
      double: !0,
      sub: Na(Ut.highsLastDays, { days: A.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (X > 0 ? "+" : "") + Ot(sa(x, X)) + '</div><div class="wbCompareWords">' + Ot(Ut.average[ct]) + '</div><div class="wbCompareTemps">' + Ot(Na(Ut.todayVsAverage, { today: sa(x, H), average: sa(x, Z) })) + "</div></div>" + ee + "</div>"
    });
  }
  function Pa(x, C) {
    const A = vn(x, C, "humidity");
    if (!A || !Ue(A.value)) return "";
    const H = vn(x, C, "dew_point"), Z = Math.max(0, Math.min(100, Number(A.value)));
    return bn({
      icon: ka.waterPercent,
      name: Ut.metrics.humidity,
      sub: H && Ue(H.value) ? Na(Ut.dewPoint, { dew_point: sa(x, H.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Z + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + qi(fa(Math.round(Number(A.value)), x.locale), "%") + "</div>"
    });
  }
  function ta(x, C) {
    var It, _t;
    const A = vn(x, C, "pressure");
    if (!A || !Ue(A.value)) return "";
    const H = Number(A.value), Z = (It = A.stateObj.attributes) == null ? void 0 : It.pressure_unit, X = Pc(H, Z), ct = ((_t = at.pressureHistory) == null ? void 0 : _t.entityId) === A.stateObj.entity_id ? Pc(at.pressureHistory.value, Z) : void 0;
    let vt;
    if (X !== void 0 && ct !== void 0) {
      const Ct = X - ct;
      vt = Ct >= Lc ? "rising" : Ct <= -Lc ? "falling" : "steady";
    }
    const yt = Kl(x, A.stateObj, "pressure", Math.round(H));
    return bn({
      icon: ka.gauge,
      name: Ut.metrics.pressure,
      sub: vt ? Ut.pressure[vt] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + qi(yt.number) + '<span class="wbTapeUnit">' + Ot(yt.unit) + "</span></div>" + (X !== void 0 ? pi(x, X) : "") + "</div>"
    });
  }
  function pi(x, C) {
    const Z = Math.floor(C) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (X, ct) => Z + ct).map((X) => {
      const ct = 100 - (X - C) * 9;
      if (ct < 22 || ct > 178) return "";
      const vt = X % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ct - 100) / 100) + '"><line class="wbTapeTick" x1="' + (vt ? 2 : 8) + '" x2="26" y1="' + ct + '" y2="' + ct + '"></line>' + (vt ? '<text class="wbTapeLabel" x="33" y="' + ct + '">' + Ot(fa(X, x.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ot(Ut.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ot(Ut.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ca(x) {
    var yt, It;
    const C = Pd(x), A = C ? x.states[C] : void 0;
    if (!A || ((yt = at.rain) == null ? void 0 : yt.entityId) !== C || !Ue(at.rain.change)) return "";
    const H = ((It = A.attributes) == null ? void 0 : It.unit_of_measurement) ?? "", Z = E(x, "hourly"), X = Date.now() + Eo, ct = M("hourly").filter((_t) => _t.precipitation != null && new Date(_t.datetime).getTime() <= X), vt = ct.reduce((_t, Ct) => _t + Number(Ct.precipitation), 0);
    return bn({
      icon: ka.rainy,
      name: Ut.metrics.precipitation,
      sub: Z && ct.length ? Na(Ut.rainExpected, { amount: fa(vt, x.locale, { maximumFractionDigits: 1 }) + " " + Lr(x, Z, "precipitation") }) : Ut.rainLast24h,
      visual: qi(fa(at.rain.change, x.locale, { maximumFractionDigits: 1 }), H) + (ct.length > 1 ? $f(ct.map((_t) => ({ label: "", value: Number(_t.precipitation) }))) : "")
    });
  }
  function so(x, C) {
    const A = vn(x, C, "visibility");
    if (!A || !Ue(A.value)) return "";
    const H = Kl(x, A.stateObj, "visibility", A.value), Z = $u(Number(A.value), Lr(x, A.stateObj, "visibility"));
    return bn({
      icon: ka.eyeOutline,
      name: Ut.metrics.visibility,
      sub: Ut.visibilityLevel[Xu(Z)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Z + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ot(lo(x, Z)) + '</div><div class="wbSeaValue">' + qi(H.number, H.unit) + "</div></div>"
    });
  }
  function lo(x, C) {
    var X;
    const A = Ku((X = x.config) == null ? void 0 : X.country, C);
    if (A) return Na(Ut.visibilityLandmarks, { from: A.from, to: A.to });
    const H = C / pf * 60;
    if (H < 60) {
      const ct = H < 5 ? Math.max(1, Math.round(H)) : 5 * Math.round(H / 5);
      if (ct < 60) return Na(Ut.walkMinutes, { minutes: fa(ct, x.locale) });
    }
    const Z = Math.max(1, Math.round(H / 30) / 2);
    return Z < 8 ? Na(Ut.walkHours, { hours: fa(Z, x.locale) }) : Ut.walkDay;
  }
  function ui(x) {
    at.categories === void 0 && Ce(x);
    const C = Ea(x), A = (yt) => yt.map((It) => x.states[It]).filter(_r), H = A(C.air), Z = A(C.pollen);
    if (!H.length && !Z.length) return "";
    const X = [...H, ...Z], ct = (yt) => Z.includes(yt) ? ka.flower : ka.airFilter, vt = X.find((yt) => yt.entity_id === S.aq);
    return vt ? Ye(x, vt, ct(vt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ot(Ut.airQuality) + '</h2></div><div class="wbAqTiles">' + X.map((yt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ot(yt.entity_id) + '"><span class="wbChip">' + ls(ct(yt)) + '</span><span class="wbText"><span class="wbName">' + Ot(el(x, yt)) + '</span><span class="wbSub">' + Ot(Tr(x, yt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Ye(x, C, A) {
    var _t, Ct, Zt;
    const H = ((_t = C.attributes) == null ? void 0 : _t.unit_of_measurement) ?? "", Z = ((Ct = C.attributes) == null ? void 0 : Ct.device_class) === "pm25" && H === Ac && Ue(C.state), X = Number(C.state), ct = Z ? Nc(X) : void 0, vt = ((Zt = at.aqHistory) == null ? void 0 : Zt.entityId) === C.entity_id ? at.aqHistory.points : void 0, yt = (Ht) => Math.min(100, Math.max(0, Ht / zl * 100));
    let It;
    if (vt && vt.length > 1) It = Kf(vt, (Ht) => (fa(Ht, x.locale, { maximumFractionDigits: 1 }) + " " + H).trim());
    else if (ct) {
      let Ht = 0;
      const Wt = kp.map(([$t, Yt]) => {
        const Tt = yt(Math.min(Yt, zl)), ee = mf[$t] + " " + Ht + "% " + Tt + "%";
        return Ht = Tt, ee;
      });
      It = '<div class="wbScale" role="meter" aria-label="' + Ot(Ut.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + zl + '" aria-valuenow="' + X + '" style="background:linear-gradient(to right, ' + Wt.join(", ") + ')"><i style="left:' + yt(X) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + zl + " " + Ac + "</span></div>";
    } else It = '<span class="wbGraphNote"><span>' + Ot(Tr(x, C)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ls(A) + '</span><span class="wbText"><span class="wbName">' + Ot(el(x, C)) + '</span><span class="wbSub">' + Ot(Tr(x, C)) + (ct ? " · " + Ot(Ut.aqLevel[ct]) : "") + '</span></span><button class="wbBack" title="' + Ot(Ut.back) + '" data-wb="aq-close">' + ls(ka.back) + '</button></div><div class="wbGraph">' + It + "</div></div></div>";
  }
  const Wn = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ro = (x) => x <= 50 ? "Good" : x <= 100 ? "Moderate" : x <= 150 ? "Unhealthy for some" : x <= 200 ? "Unhealthy" : x <= 300 ? "Very unhealthy" : "Hazardous";
  function xn(x) {
    const C = /* @__PURE__ */ new Map();
    return Object.values(x.states || {}).filter((A) => {
      var H;
      return A.entity_id.startsWith("sensor.") && Jl.includes(((H = A.attributes) == null ? void 0 : H.device_class) ?? "") && _r(A) && cs(x, A.entity_id);
    }).sort((A, H) => A.entity_id.localeCompare(H.entity_id)).forEach((A) => {
      C.has(A.attributes.device_class) || C.set(A.attributes.device_class, A);
    }), Jl.map((A) => C.get(A)).filter(Boolean);
  }
  const qn = (x) => Object.values(x.states || {}).filter((C) => {
    var A, H;
    return C.entity_id.startsWith("sensor.") && _r(C) && cs(x, C.entity_id) && (((H = (A = x.entities) == null ? void 0 : A[C.entity_id]) == null ? void 0 : H.translation_key) ?? C.entity_id).toLowerCase().includes("pollen");
  }), Mn = ["none", "very_low", "low", "moderate", "high", "very_high"], co = (x) => Ue(x.state) ? Number(x.state) : Mn.indexOf(String(x.state).toLowerCase().replace(/ /g, "_")), Ga = (x) => {
    const C = String(x).replace(/_/g, " ");
    return C[0].toUpperCase() + C.slice(1);
  }, jn = (x) => x.length ? '<div class="wbBaseRows">' + x.map(([C, A]) => '<span class="wbBaseRow"><span>' + Ot(C) + "</span><span>" + Ot(A) + "</span></span>").join("") + "</div>" : "";
  function Zi(x) {
    const C = xn(x), A = C[0];
    if (!A) return bn({ icon: ka.airFilter, name: Ut.airQuality, sub: Ut.noAir, visual: qi("–", ""), cls: "wbBase" });
    const H = A.attributes.device_class, Z = Number(A.state), X = Ue(A.state), ct = H === "aqi" && X ? Ro(Z) : H === "pm25" && X ? Wn[Nc(Z)] : Tr(x, A);
    return bn({
      icon: ka.airFilter,
      name: Ut.airQuality,
      sub: ct,
      cls: "wbBase",
      visual: qi(X ? fa(Math.round(Z), x.locale) : String(A.state), H === "aqi" ? "AQI" : A.attributes.unit_of_measurement || "") + jn(C.slice(1, 3).map((vt) => [el(x, vt), Tr(x, vt)]))
    });
  }
  function ea(x) {
    const C = qn(x).sort((Z, X) => co(X) - co(Z));
    if (!C.length) return bn({ icon: ka.flower, name: Ut.pollen, sub: Ut.noPollen, visual: qi("–", ""), cls: "wbBase" });
    const A = C[0], H = (Z) => Ue(Z.state) ? Tr(x, Z) : Ga(Z.state);
    return bn({
      icon: ka.flower,
      name: Ut.pollen,
      sub: el(x, A) + " · " + H(A),
      cls: "wbBase",
      visual: qi(H(A), "") + jn(C.slice(1, 3).map((Z) => [el(x, Z), H(Z)]))
    });
  }
  function Ki(x) {
    const C = Date.now(), A = M("hourly").filter((X) => {
      const ct = new Date(X.datetime).getTime();
      return ct > C - He && ct < C + 12 * He;
    }), H = A.find((X) => (X.precipitation_probability ?? 0) >= 50 || (X.precipitation ?? 0) >= 0.2), Z = H ? Na(Ut.rainFrom, { time: Ao(new Date(Math.max(C, new Date(H.datetime).getTime())), x) }) : A.length ? Ut.noRain12 : void 0;
    return bn({ icon: ka.radar, name: Ut.rainRadar, sub: Z, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Te = {
    current: qe,
    hourly: Bt,
    sun: Ca,
    moon: Vt,
    wind: ie,
    uv_index: na,
    compared_to_average: On,
    humidity: Pa,
    pressure: ta,
    precipitation: ca,
    visibility: so,
    air_quality: ui,
    aq_tile: Zi,
    pollen_tile: ea,
    radar_tile: Ki
  };
  function Ta(x) {
    var It, _t, Ct;
    const C = d == null ? void 0 : d();
    if (!C || K) return;
    const A = io(C);
    ft(C, A), at.lastFetch || Jt();
    const H = Ea(C), Z = Ic(C), X = Pd(C), ct = [
      ...A.map((Zt) => C.states[Zt]),
      C.states["sun.sun"],
      Z && C.states[Z],
      X && C.states[X],
      ...H.air.map((Zt) => C.states[Zt]),
      ...H.pollen.map((Zt) => C.states[Zt]),
      ...Y.some((Zt) => pt.includes(Zt)) ? [...xn(C), ...qn(C)] : [],
      C.locale,
      C.config,
      C.entities,
      Math.floor(Date.now() / no)
    ];
    if (!x && z && ct.length === z.length && ct.every((Zt, Ht) => Zt === z[Ht])) return;
    z = ct;
    const vt = N.getRootNode(), yt = vt.activeElement || document.activeElement;
    for (const Zt of Y) {
      const Ht = ot[Zt];
      let Wt = "";
      try {
        Wt = Te[Zt](C, A) || "";
      } catch {
        Wt = "";
      }
      if (Wt === Ht.html) continue;
      const $t = yt && Ht.el.contains(yt) ? (It = yt.dataset) == null ? void 0 : It.wbFocus : void 0, Yt = Ht.el.querySelector(".wbStripScroll"), Tt = Yt ? Yt.scrollLeft : null;
      Ht.html = Wt, Ht.el.hidden = !Wt, Ht.el.innerHTML = Wt;
      const ee = Ht.el.querySelector(".wbStripScroll");
      ee && Tt != null ? ee.scrollTo({ left: Tt }) : ee != null && ee.dataset.start && ee.scrollTo({ left: Number(ee.dataset.start) * ee.clientWidth / Number(ee.dataset.span) }), $t && !ht && ((_t = Ht.el.querySelector('[data-wb-focus="' + $t + '"]')) == null || _t.focus());
    }
    ht && ((Ct = N.querySelector('[data-wb-focus="' + ht + '"]')) == null || Ct.focus(), ht = null), Bo(performance.now());
  }
  function po() {
    rt || K || (rt = !0, queueMicrotask(() => {
      rt = !1, Ta(!0);
    }));
  }
  function Dr() {
    const x = getComputedStyle(N), C = (ct) => x.getPropertyValue(ct).trim(), A = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ct, vt]) => {
      C(vt) && (A[ct] = C(vt));
    });
    const H = C("--color-text-primary") || "#f1f1f1", Z = C("--color-bg-card") || "#222222", X = !!N.closest(".light");
    return { colors: { ...ln, ...A }, ink: X ? H : Z, paper: X ? Z : H };
  }
  const Ua = (x, C) => {
    var A;
    x.width !== C.w && (x.width = C.w), x.height !== C.h && (x.height = C.h), (A = x.getContext("2d")) == null || A.putImageData(new ImageData(C.data, C.w, C.h), 0, 0);
  }, da = () => g && !kf();
  function ha(x, C) {
    N.querySelectorAll("canvas[data-wb-strip]").forEach((A) => Rr(A, wt[A.dataset.wbStrip], x, C));
  }
  function Rr(x, C, A, H) {
    if (!C || !x.getClientRects().length) return;
    const Z = x.clientWidth, X = x.clientHeight;
    if (!Z || !X) return;
    const ct = { width: Z, height: X, columns: C.columns || Sc, colors: H.colors, clock: A, ambient: da(), seed: C.seed, soft: 1.5 };
    if (c === "smooth") {
      const vt = Math.min(2, window.devicePixelRatio || 1), yt = Math.round(Z * vt), It = Math.round(X * vt);
      x.width !== yt && (x.width = yt), x.height !== It && (x.height = It);
      const _t = x.getContext("2d");
      if (!_t) return;
      _t.setTransform(vt, 0, 0, vt, 0, 0), Du(_t, C.segs, ct);
    } else Ua(x, Eu(C.segs, { ...ct, px: 2, oneBit: c === "onebit", ink: H.ink, paper: H.paper }));
  }
  function Bo(x) {
    if (K) return;
    const C = Dr();
    if (c !== "smooth") {
      const A = da();
      N.querySelectorAll("canvas[data-wb-wx]").forEach((H) => {
        H.getClientRects().length && Ua(H, cp(Zd(H.dataset.wbWx, C.colors), { size: Number(H.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: C.colors, ink: C.ink, paper: C.paper, clock: x, idle: A }));
      });
    }
    N.querySelectorAll("canvas[data-wb-sea]").forEach((A) => {
      const H = A.clientWidth, Z = A.clientHeight, X = Number(A.dataset.wbSea), ct = H + "x" + Z + ":" + X + ":" + C.colors.skyClearDay;
      !H || !Z || !(X > 0) || A.dataset.painted === ct || (A.dataset.painted = ct, Ua(A, Uu(H, Z, X, C.colors)));
    }), ha(x, C);
  }
  function fi(x) {
    if (O = 0, !(K || !da())) {
      if (!document.hidden)
        if (c === "smooth") ha(x, Dr());
        else {
          const C = Math.floor(x / 100);
          C !== ut && (ut = C, Bo(x));
        }
      O = requestAnimationFrame(fi);
    }
  }
  function Ze() {
    N.classList.toggle("wbMotion", da()), !O && !K && da() && (O = requestAnimationFrame(fi));
  }
  function oa(x) {
    var A, H;
    const C = (H = (A = x.target).closest) == null ? void 0 : H.call(A, "[data-wb]");
    if (!(!C || !N.contains(C))) {
      switch (C.dataset.wb) {
        case "day": {
          S.openDay = Number(C.dataset.index), S.opener = C.dataset.wbFocus, ht = "back-day";
          const Z = ye()[S.openDay], X = !at.todayHistory || at.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - at.todayHistory.fetched > Qu;
          Z && rs(new Date(Z.datetime), /* @__PURE__ */ new Date()) && X && pe();
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
          const Z = N.querySelector(".wbStripScroll");
          Z && Z.scrollTo({ left: Number(C.dataset.hours) * Z.clientWidth / Number(Z.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          S.aq = C.dataset.entity, aa(S.aq);
          break;
        case "aq-close":
          S.aq = void 0;
          break;
        default:
          return;
      }
      Ta(!0);
    }
  }
  function ke(x) {
    var C, A;
    x.key === "Escape" && S.openDay !== void 0 && ((A = (C = x.target).closest) != null && A.call(C, '[data-wb-open="day"]')) && (S.openDay = void 0, ht = S.opener, S.opener = void 0, Ta(!0));
  }
  let Ya = null;
  function zn(x) {
    var A, H;
    const C = (H = (A = x.target).closest) == null ? void 0 : H.call(A, ".wbStripScroll");
    !C || x.button !== 0 || (Ya = { startX: x.pageX, left: C.scrollLeft, moved: !1 }, C.classList.add("wbHeld"), window.addEventListener("mousemove", uo), window.addEventListener("mouseup", fo, { once: !0 }));
  }
  function uo(x) {
    const C = N.querySelector(".wbStripScroll");
    if (!Ya || !C) return;
    const A = x.pageX - Ya.startX;
    !Ya.moved && Math.abs(A) > 1 && (Ya.moved = !0, C.classList.add("wbDragging")), C.scrollLeft = Ya.left - A;
  }
  function fo() {
    Ya = null, window.removeEventListener("mousemove", uo);
    const x = N.querySelector(".wbStripScroll");
    if (!x) return;
    x.classList.remove("wbDragging", "wbHeld");
    const C = [...x.querySelectorAll(".wbSnap")];
    if (C.length) {
      const A = C.reduce((H, Z) => Math.abs(Z.offsetLeft - x.scrollLeft) < Math.abs(H.offsetLeft - x.scrollLeft) ? Z : H);
      x.scrollTo({ left: A.offsetLeft, behavior: "smooth" });
    }
  }
  N.addEventListener("click", oa), N.addEventListener("keydown", ke), N.addEventListener("mousedown", zn);
  const dn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Bo(performance.now())) : null;
  dn == null || dn.observe(N);
  const Ia = (Xi = window.matchMedia) == null ? void 0 : Xi.call(window, "(prefers-reduced-motion: reduce)"), $i = () => {
    Ze(), Bo(performance.now());
  };
  (hi = Ia == null ? void 0 : Ia.addEventListener) == null || hi.call(Ia, "change", $i);
  const ho = [
    setInterval(() => {
      Pt = /* @__PURE__ */ new Date(), Ta(!0);
    }, df),
    setInterval(() => {
      G = /* @__PURE__ */ new Date(), Ta(!0);
    }, cf),
    setInterval(Jt, rf)
  ];
  return Ta(!0), Ze(), {
    update() {
      Ta(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ta(!0);
    },
    setStyle(x) {
      !x || x === c || (c = x, N.dataset.style = c, Ta(!0), Ze());
    },
    destroy() {
      var x;
      K = !0, ho.forEach(clearInterval), O && cancelAnimationFrame(O), O = 0, dn == null || dn.disconnect(), (x = Ia == null ? void 0 : Ia.removeEventListener) == null || x.call(Ia, "change", $i), fo(), N.removeEventListener("click", oa), N.removeEventListener("keydown", ke), N.removeEventListener("mousedown", zn), ["daily", "hourly"].forEach(L), N.remove();
    }
  };
}
const ol = "#E1E1E1", Wc = "#F7F4F0", Id = "#03a9f4", Ae = 14, De = 172;
let eh = 0;
const Je = (n) => Math.round(n * 100) / 100, Do = (n, d, i) => Math.max(d, Math.min(i, n)), li = (n, d, i, c, g, b) => '<rect x="' + Je(n) + '" y="' + Je(d) + '" width="' + Je(i) + '" height="' + Je(c) + '" fill="' + g + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", Hd = (n) => n.map((d, i) => (i ? "L" : "M") + Je(d[0]) + " " + Je(d[1])).join("");
function Fd(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const ji = [
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
  let i = ji[0], c = ji[ji.length - 1];
  for (let _ = 0; _ < ji.length - 1; _++) if (d >= ji[_][0] && d <= ji[_ + 1][0]) {
    i = ji[_], c = ji[_ + 1];
    break;
  }
  const g = (d - i[0]) / (c[0] - i[0]), b = g * g * (3 - 2 * g), w = (_, k) => {
    const N = parseInt(_.slice(1), 16), xt = parseInt(k.slice(1), 16);
    return "#" + [16, 8, 0].map((pt) => Math.round((N >> pt & 255) + ((xt >> pt & 255) - (N >> pt & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(i[1][0], c[1][0]), bot: w(i[1][1], c[1][1]), warm: w(i[1][2], c[1][2]), cool: w(i[1][3], c[1][3]), op: i[1][4] + (c[1][4] - i[1][4]) * b, t: d };
}
function nh(n) {
  const d = parseInt(n.slice(1), 16), i = (d >> 16 & 255) / 255, c = (d >> 8 & 255) / 255, g = (d & 255) / 255, b = Math.max(i, c, g), w = Math.min(i, c, g);
  let _ = 0, k = 0;
  const N = (b + w) / 2;
  if (b !== w) {
    const xt = b - w;
    k = N > 0.5 ? xt / (2 - b - w) : xt / (b + w), _ = (b === i ? (c - g) / xt + (c < g ? 6 : 0) : b === c ? (g - i) / xt + 2 : (i - c) / xt + 4) / 6;
  }
  return [_ * 360, k * 100, N * 100];
}
function Np(n, d, i) {
  d = Do(d, 0, 100) / 100, i = Do(i, 0, 100) / 100;
  const c = (w) => (w + n / 30) % 12, g = d * Math.min(i, 1 - i), b = (w) => i - g * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [b(0), b(8), b(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Pp, Ip, Hp] = nh(ol), qc = Np(Pp, Ip, Math.max(6, Hp - 14)), oh = Np(Pp, Ip, Math.min(96, Hp + 16));
function ih(n, d, i, c, g) {
  const b = De / 2, w = De * 0.12, _ = b - (b - w) * n, k = (ot) => ot ** 1.3, N = Do(i, -1.5, 1.5), xt = (ot) => -(Math.abs(N) * 4.6 * ot ** 1.5) * Math.sign(N), pt = n * 1.4, Y = (ot, K) => {
    const z = Math.min(4.8, Math.abs(i) * 2.6) * (K ? 1 : -1) * Math.sign(i || 1), O = K ? ot + _ : ot, ut = K ? ot : ot + _, rt = (Pt) => O + xt(Pt) + z * Math.sin(Pt * Math.PI * 1.2 + c) * k(Pt) * 1.4 + pt * Math.sin(Pt * Math.PI * 2 + c * 0.6) * k(Pt) * (K ? 1 : -1), ht = [[ut, Ae]];
    for (let Pt = 0; Pt <= 12; Pt++) ht.push([rt(Pt / 12), Ae + De * Pt / 12]);
    ht.push([ut, Ae + De]);
    let et = '<path d="' + Hd(ht) + 'Z" fill="' + ol + '"/>';
    if (g) return et;
    const tt = 1.35 + ((K ? i > 0 : i < 0) ? 0.35 : 0), S = (Pt) => {
      const G = Pt / 7, wt = K ? 1 - G : G, j = (1 - wt) ** 1.3, zt = ot + _ * G;
      return Array.from({ length: 13 }, (M, E) => {
        const L = E / 12;
        return [zt + xt(L) * j + z * tt * Math.sin(L * Math.PI * 1.2 + c - wt * 3.2) * k(L) * 1.4 * j + pt * 1.6 * Math.sin(L * Math.PI * 2 + c * 0.6 - wt * 2.5) * k(L) * n * (0.4 + 0.6 * j), Ae + De * L];
      });
    }, at = [1, 2, 3, 4, 5, 6].map(S);
    for (let Pt = 0; Pt < 6; Pt += 2) et += '<path d="' + Hd(at[Pt]) + Hd(at[Pt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return et;
  }, $ = b - (b - w) * d;
  return { body: Y(Ae, !0) + Y(Ae + De - _, !1), rails: [{ x: Ae + $ - 4, y: Ae, w: 4, h: De }, { x: Ae + De - $, y: Ae, w: 4, h: De }], head: 6.4 };
}
function rh(n, d, i) {
  const c = De * (1 - n);
  let g = "";
  if (c > 1 && (g += li(Ae, Ae, De, c, ol), !i))
    for (let b = 1; b < 7; b += 2) g += li(Ae + De * b / 7, Ae, De / 7, c, "#fff");
  return { body: g, rails: [{ x: Ae, y: Ae + De * (1 - d) - 7, w: De, h: 11 }], head: 10.4 };
}
function sh(n, d, i, c) {
  const g = 9 - 7 * (i / 100), b = Ae + De * (1 - n), w = Math.ceil(De / 10) + 1, _ = Ae + g / 2, k = (Ae + De - g / 2 - _) / (w - 1), N = 0.8, xt = 0.6, pt = Array.from({ length: w }, (ot, K) => Math.max(_ + K * xt, Math.min(_ + K * k, b - g / 2 - (w - 1 - K) * xt))), Y = pt.slice(0, -1).map((ot, K) => Do((pt[K + 1] - ot - xt) / (k - xt), 0, 1));
  Y.push(Y[w - 2]);
  let $ = "";
  return pt.forEach((ot, K) => {
    const z = N + (g - N) * Y[K], O = Math.max(0.5, z / 2), ut = Math.max(0.4, z * 0.114);
    $ += li(Ae, ot - O, De, Math.max(1, z), ol), !c && z > 2.2 && ($ += li(Ae, ot + O - ut, De, ut, qc) + li(Ae, ot - O, De, ut * 0.55, oh, 0.75));
  }), c || [0.22, 0.78].forEach((ot) => {
    $ += li(Ae + De * ot - 0.7, Ae, 1.4, Math.max(0, pt[w - 1] + 1 - Ae), qc, 0.85);
  }), { body: $, rails: [{ x: Ae, y: Ae + De * (1 - d) - 8, w: De, h: 8 }], head: 8.8 };
}
const jc = (n, d, i, c, g, b, w) => n === "curtain" ? ih(d, i, g, b, w) : n === "venetian" ? sh(d, i, c, w) : rh(d, i, w);
function lh(n, d) {
  let i = "", c = "";
  return d.forEach((g) => {
    const b = g.w > g.h, w = Do(b ? Ae + De / 2 : g.x + g.w / 2, 17, 183), _ = Do(b ? g.y + g.h / 2 : Ae + De / 2, 17, 183);
    i += b ? li(Ae, Do(g.y + g.h / 2, Ae, Ae + De) - 1, De, 2, Id) : li(Do(g.x + g.w / 2, Ae, Ae + De) - 1, Ae, 2, De, Id);
    const k = b ? "M" + Je(w - 4) + " " + Je(_ - 3) + "l4 -3l4 3M" + Je(w - 4) + " " + Je(_ + 3) + "l4 3l4 -3" : "M" + Je(w - 3) + " " + Je(_ - 4) + "l-3 4l3 4M" + Je(w + 3) + " " + Je(_ - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Je(w) + '" cy="' + Je(_) + '" r="11" fill="' + Id + '" filter="url(#' + n + 's)"/><path d="' + k + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: c };
}
function dh(n, d) {
  const i = /* @__PURE__ */ new Date(), c = ah(i.getHours() + i.getMinutes() / 60), g = 42 + 18 * Math.sin(c.t * 0.5), b = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = jc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), _ = d.ghostAlpha > 4e-3 && d.ghost != null ? jc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", k = d.grip > 4e-3 ? lh(n, w.rails) : null, N = (xt) => li(Ae, Ae, De, De, xt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Je(g) + '%" cy="' + Je(b) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Je(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Je(100 - g * 0.8) + '%" cy="' + Je(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Je(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Wc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (_ ? '<g opacity="' + Je(d.ghostAlpha) + '">' + _ + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + ol + '" filter="url(#' + n + 's)"/></g>' + (k ? '<g clip-path="url(#' + n + 'c)" opacity="' + Je(d.grip) + '">' + k.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Wc + '" stroke-width="3"/>' + (k ? '<g opacity="' + Je(d.grip) + '">' + k.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: d }) {
  var et;
  const i = "cv" + ++eh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const g = (et = window.matchMedia) == null ? void 0 : et.call(window, "(pointer: coarse)").matches;
  let b = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let _ = 0, k = !1, N = !1, xt = null, pt = 0, Y = 0;
  const $ = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", ot = () => xt || k || N || b.moving || b.target != null ? 1 : g ? performance.now() < Y ? 1 : 0.4 : 0, K = () => {
    c.innerHTML = dh(i, { kind: b.kind, pos: w.pos, bar: b.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function z(tt) {
    _ = 0;
    const S = w.last ? Math.min(0.064, (tt - w.last) / 1e3) : 1 / 60, at = S * 60;
    w.last = tt;
    const Pt = b.pos - w.pos, G = w.pos;
    w.pos += Math.sign(Pt) * Math.min(Math.abs(Pt), Math.max(10.5, Math.abs(Pt) * 1.4) * S), Math.abs(b.pos - w.pos) < 0.03 && (w.pos = b.pos), w.vel = w.vel * 0.86 + (w.pos - G) / at * 0.14, Math.abs(w.vel) < 0.015 && w.pos === b.pos && (w.vel = 0), (w.pos !== G || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * at);
    const wt = b.tilt - w.tilt;
    w.tilt += Math.sign(wt) * Math.min(Math.abs(wt), Math.max(60, Math.abs(wt) * 4) * S);
    const j = ot();
    w.grip += (j - w.grip) * Math.min(1, S * (j > w.grip ? 11 : 3.5)), Math.abs(j - w.grip) < 0.01 && (w.grip = j);
    const zt = b.target != null && Math.abs(b.target - w.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (w.gpos = b.target), w.ghost += (zt - w.ghost) * Math.min(1, S * (zt > w.ghost ? 16 : 3)), Math.abs(zt - w.ghost) < 4e-3 && (w.ghost = zt), K(), w.pos !== b.pos || w.vel || w.tilt !== b.tilt || w.grip !== j || w.ghost !== zt ? _ = requestAnimationFrame(z) : w.last = 0;
  }
  const O = () => {
    b && !_ && (_ = requestAnimationFrame(z));
  }, ut = setInterval(() => {
    b && !_ && K();
  }, 60 * 1e3), rt = (tt) => {
    const S = c.getBoundingClientRect();
    return $() === "x" ? (tt.clientX - S.left) / S.width : (tt.clientY - S.top) / S.height;
  };
  c.addEventListener("pointerdown", (tt) => {
    var Pt;
    if (!(b != null && b.canSet) || tt.button > 0) return;
    tt.preventDefault(), (Pt = c.setPointerCapture) == null || Pt.call(c, tt.pointerId);
    const S = b.target ?? b.pos, at = c.getBoundingClientRect();
    xt = { p0: rt(tt), from: S, x0: tt.clientX, value: null, side: null }, b.kind === "curtain" && S > 0 && (xt.side = (tt.clientX - at.left) / at.width < 0.5 ? "L" : "R"), O();
  }), c.addEventListener("pointermove", (tt) => {
    if (!xt) return;
    let S;
    if (b.kind === "curtain") {
      if (!xt.side) {
        const Pt = tt.clientX - xt.x0;
        if (Math.abs(Pt) < 4) return;
        xt.side = Pt < 0 ? "L" : "R";
      }
      const at = (De / 2 - De * 0.12) / 200;
      S = xt.from + (xt.side === "L" ? -1 : 1) * ((rt(tt) - xt.p0) / at) * 100;
    } else S = xt.from - (rt(tt) - xt.p0) / (De / 200) * 100;
    xt.value = Do(S, 0, 100), n(xt.value);
  });
  const ht = () => {
    if (!xt) return;
    const tt = xt.value;
    xt = null, tt != null && d(Math.round(tt)), O();
  };
  return c.addEventListener("pointerup", ht), c.addEventListener("pointercancel", ht), c.addEventListener("lostpointercapture", ht), c.addEventListener("pointerenter", () => {
    k = !0, O();
  }), c.addEventListener("pointerleave", () => {
    k = !1, O();
  }), c.addEventListener("focus", () => {
    N = c.matches(":focus-visible"), O();
  }), c.addEventListener("blur", () => {
    N = !1, O();
  }), c.addEventListener("keydown", (tt) => {
    if (!(b != null && b.canSet)) return;
    const S = Math.round(b.target ?? b.pos), at = tt.shiftKey ? 10 : 1, Pt = { ArrowUp: S + at, ArrowRight: S + at, ArrowDown: S - at, ArrowLeft: S - at, PageUp: S + 25, PageDown: S - 25, Home: 0, End: 100 }[tt.key];
    if (Pt == null) return;
    tt.preventDefault();
    const G = Do(Pt, 0, 100);
    n(G), clearTimeout(pt), pt = setTimeout(() => d(G), 500);
  }), {
    el: c,
    update(tt) {
      const S = !b;
      b = tt, S && (w.pos = b.pos, w.tilt = b.tilt, Y = performance.now() + 1500, g && setTimeout(O, 1600)), c.classList.toggle("x", $() === "x"), c.classList.toggle("y", $() === "y"), b.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), c.setAttribute("aria-orientation", $() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), c.setAttribute("aria-valuetext", b.text), O();
    },
    destroy() {
      cancelAnimationFrame(_), _ = 0, clearInterval(ut), clearTimeout(pt), c.remove();
    }
  };
}
const zc = "move-assistant-density", zi = {
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
}, J = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Od = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Vc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Vl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Gc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Uc = 1, uh = 4, Yc = 16, Zc = 32, fh = 128, hh = 256, Kc = 16384, mh = 1, gh = 2, $c = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Xc = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Wd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Jc = "move_assistant_house", Qc = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], tp = "move-assistant-house-look", yh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kh = [["popup", "Popup"], ["sheet", "Sheet"]], Mh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ch = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], qd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Lh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', ep = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', np = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Fp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", op = Fp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Ah = Fp(["M20 6L9 17L4 12"]), _o = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + J(n || "") + '"' + (d ? ' data-icon-name="' + J(d) + '"' : "") + "></span>", _h = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Eh = 1, Dh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], ip = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, jd = ["hs", "xy", "rgb", "rgbw", "rgbww"], Gl = ["door", "window", "garage_door", "opening"], rp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Ul = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Rh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Bh = 10, Nh = 20, Ph = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ih = ["living room", "bedroom", "office"];
function Hh(n, { config: d, getHass: i }) {
  var El, Dl, Sr;
  const c = (t) => n.getElementById(t), g = c("app"), w = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let _ = zi.get(zc) === "1", k = {};
  const N = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, xt = (t, a, o) => N({ type: "call_service", domain: t, service: a, service_data: o }), pt = n.querySelector("#appearancePane .toggleList");
  pt && !c("densityToggle") && (pt.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    _ = !_, zi.set(zc, _ ? "1" : "0"), tt();
  }));
  const Y = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Kt(t).device_class === "power" && /^(W|kW)$/.test(Kt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], $ = (t, a, o, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([p, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + p + '">' + h + "</button>").join("") + "</div>", ot = (t, a, o, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + o + "</div>";
  function K() {
    if (!w || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (D, R) => '<div class="houseTab' + (D === "look" ? " active" : "") + '" data-house-pane="' + D + '"><section class="card">' + R + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([D, R]) => '<button class="tab segBtn' + (D === "look" ? " active" : "") + '" type="button" data-house-tab="' + D + '">' + R + "</button>").join("") + "</div>" + // Appearance in groups, each named above its card (Matt, 8 Nov)
    o("look", yh.map(([D, R]) => '<div class="tfSetGroup"><div class="sectionLabel">' + R + '</div><div class="toggleList" data-look-group="' + D + '"></div></div>').join("")) + o("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + Y.map(([D, R, I]) => ot(R, I, '<select class="settingsSelect" data-source="' + D + '" aria-label="' + R + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(Wd).map(([D, R]) => ot(R.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + D + '" aria-label="' + R.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = (D) => t.querySelector('[data-look-group="' + D + '"]'), p = (D) => D == null ? void 0 : D.closest(".toggleRow");
    [p(t.querySelector(".themeBtn")), p(c("densityToggle"))].forEach((D) => D && l("look").appendChild(D)), [p(c("moreInfoChoice")), p(c("namesChoice"))].forEach((D) => D && l("house").appendChild(D)), l("house").insertAdjacentHTML("beforeend", ot("Lights", "How lights show on the house page.", $("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ot("Pad", "What the Dual Axis Controller’s pad sets on its tile.", $("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [p(c("hoursChoice")), p(c("wxStyleChoice"))].forEach((D) => D && l("weather").appendChild(D));
    const h = c("housePane"), f = h.querySelector(".houseTabs"), m = f.querySelector(".rubberIndicator");
    new ResizeObserver(() => O()).observe(h);
    const y = (D) => {
      const R = f.querySelector(".tab.active");
      m.style.transition = D ? "" : "none", m.style.left = R.offsetLeft + "px", m.style.width = R.offsetWidth + "px", D && (m.style.transform = "scaleX(1.08)", setTimeout(() => m.style.transform = "", 180));
    };
    new ResizeObserver(() => y(!1)).observe(f), h.addEventListener("click", (D) => {
      const R = D.target.closest("[data-house-tab]");
      if (R) {
        f.querySelectorAll(".tab").forEach((St) => St.classList.toggle("active", St === R)), h.querySelectorAll(".houseTab").forEach((St) => St.classList.toggle("active", St.dataset.housePane === R.dataset.houseTab)), R.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), y(!0), O();
        return;
      }
      const I = D.target.closest("[data-light-fav]");
      if (I) {
        nr(I.dataset.lightFav);
        return;
      }
      const Q = D.target.closest("[data-light-pick]");
      if (Q) {
        const [St, nt] = Q.dataset.lightPick.split("|"), mt = { ...Dt[St] };
        Q.dataset.v ? mt[nt] = Q.dataset.v : delete mt[nt], Dt[St] = mt, ye(), [...Et.keys()].filter((W) => W.endsWith(":" + nt)).forEach((W) => Et.delete(W)), Pn();
        return;
      }
      const U = D.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!U || U.disabled)) {
        if (U.dataset.lights && (Dt.lights = U.dataset.lights), U.dataset.dacPad && (Dt.dacPad = U.dataset.dacPad), (U.dataset.lights || U.dataset.dacPad) && (ye(), Et.clear()), U.dataset.sumToggle) {
          const St = U.dataset.sumToggle, nt = new Set(q.hiddenSums || []);
          nt.has(St) ? nt.delete(St) : nt.add(St), q = { ...q, hiddenSums: [...nt] }, Ea();
        }
        Pn();
      }
    }), h.addEventListener("change", (D) => {
      const R = D.target;
      R.dataset.source && (q = { ...q, sources: { ...q.sources || {}, [R.dataset.source]: R.value || void 0 } }, Ea());
      const I = R.dataset.lightStyle || R.dataset.lightPad;
      if (I) {
        const Q = R.dataset.lightStyle ? "lightStyles" : "lightPads", U = { ...Dt[Q] };
        R.value ? U[I] = R.value : delete U[I], Dt[Q] = U, ye(), [...Et.keys()].filter((St) => St.endsWith(":" + I)).forEach((St) => Et.delete(St));
      }
      Pn();
    });
  }
  function z() {
    var I, Q;
    We() && Oe();
    const t = c("housePane");
    if (!t) return;
    const a = !!customElements.get(Tt);
    t.querySelectorAll("[data-lights]").forEach((U) => U.setAttribute("aria-pressed", String(U.dataset.lights === Dt.lights))), c("lightsRow").querySelector(".status").textContent = a || !We() ? "How lights show on the house page." : ne === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((U) => U.setAttribute("aria-pressed", String(U.dataset.dacPad === Dt.dacPad))), c("dacPadRow").hidden = !We();
    for (const U of t.querySelectorAll("[data-source]")) {
      if (U === n.activeElement) continue;
      const [St] = Y.find(([mt]) => mt === U.dataset.source), nt = Object.keys(k).filter(Y.find(([mt]) => mt === St)[3]).sort((mt, W) => Bt(mt).localeCompare(Bt(W)));
      U.dataset.sig !== nt.join(",") && (U.innerHTML = '<option value="">Automatic</option>' + nt.map((mt) => '<option value="' + J(mt) + '">' + J(Bt(mt)) + "</option>").join(""), U.dataset.sig = nt.join(",")), U.value = nt.includes((I = q.sources) == null ? void 0 : I[St]) ? q.sources[St] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((U) => {
      const St = !(q.hiddenSums || []).includes(U.dataset.sumToggle);
      U.classList.toggle("on", St), U.setAttribute("aria-checked", String(St));
    });
    const o = c("lightRows"), l = c("lightCards"), p = n.activeElement, h = o != null && o.contains(p) || l != null && l.contains(p) ? p : null;
    if (!o || h != null && h.matches("select")) {
      O();
      return;
    }
    const f = new Set(ia()), m = (U, St, nt, mt) => '<option value="' + U + '"' + (U === nt ? " selected" : "") + ">" + St + "</option>", y = Object.keys(k).filter((U) => U.startsWith("light.")).sort((U, St) => !Ce.get(U) - !Ce.get(St) || (Ce.get(U) || "").localeCompare(Ce.get(St) || "") || Bt(U).localeCompare(Bt(St))).map((U) => {
      const St = Dt.lightStyles[U] || "", nt = Dt.lightPads[U] || "", mt = f.has(U), W = J(Bt(U));
      return "<tr><td><strong>" + W + "</strong></td><td>" + J(Ce.get(U) || "—") + "</td><td>" + J(ea(U)) + '</td><td class="metaSwitchCol"><button class="switch' + (mt ? " on" : "") + '" type="button" role="switch" aria-checked="' + mt + '" data-light-fav="' + J(U) + '" aria-label="' + W + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + J(U) + '" aria-label="' + W + ' tile">' + m("", "Default", St) + m("tile", "HomeCore tile", St) + m("dac", "Dual Axis Controller", St) + '</select></td><td><select class="settingsSelect" data-light-pad="' + J(U) + '" aria-label="' + W + ' pad"' + (_e(U) ? "" : " disabled") + ">" + m("", "Default", nt) + m("temperature", "Temperature", nt) + m("colour", "Colour", nt) + "</select></td></tr>";
    }).join(""), D = (U, St, nt, mt, W) => '<div class="themeChoice" role="group" aria-label="' + nt + '">' + mt.map(([kt, V]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (kt === W) + '" data-light-pick="' + U + "|" + J(St) + '" data-v="' + kt + '">' + V + "</button>").join("") + "</div>", R = Object.keys(k).filter((U) => U.startsWith("light.")).sort((U, St) => !Ce.get(U) - !Ce.get(St) || (Ce.get(U) || "").localeCompare(Ce.get(St) || "") || Bt(U).localeCompare(Bt(St))).map((U) => {
      const St = f.has(U), nt = J(Bt(U)), mt = [Ce.get(U), ea(U)].filter(Boolean).map(J).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + nt + '</strong><div class="status">' + mt + "</div></div></div>" + ot("Favourite", "", '<button class="switch' + (St ? " on" : "") + '" type="button" role="switch" aria-checked="' + St + '" data-light-fav="' + J(U) + '" aria-label="' + nt + ' is a favourite"></button>') + ot("Tile", "", D("lightStyles", U, nt + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Dt.lightStyles[U] || "")) + (_e(U) ? ot("Pad", "", D("lightPads", U, nt + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Dt.lightPads[U] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== y && (o.innerHTML = y, o.dataset.html = y), l.dataset.html !== R && (l.innerHTML = R, l.dataset.html = R), h != null && h.dataset.lightFav && ((Q = (l.contains(h) ? l : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || Q.focus({ preventScroll: !0 })), O();
  }
  function O() {
    var a, o, l;
    const t = c("housePane");
    if (t)
      for (const p of t.querySelectorAll(".themeChoice")) {
        const h = [...p.querySelectorAll("button")];
        let f = (a = p.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? p.nextElementSibling : null;
        if (!f) {
          f = document.createElement("select"), f.className = "settingsSelect tfChoiceList", f.setAttribute("aria-label", p.getAttribute("aria-label") || ((l = (o = p.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : l.textContent) || ""), f.addEventListener("change", () => {
            var D;
            return (D = h[Number(f.value)]) == null ? void 0 : D.click();
          }), p.after(f);
          const y = () => {
            f.innerHTML = h.map((R, I) => '<option value="' + I + '"' + (R.disabled ? " disabled" : "") + ">" + J(R.textContent) + "</option>").join("");
            const D = h.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            D >= 0 && (f.value = String(D));
          };
          new MutationObserver(y).observe(p, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), y();
        }
        if (h.length > 3) {
          p.hidden = !0, f.hidden = !1;
          continue;
        }
        if (!p.getClientRects().length && !f.getClientRects().length) {
          f.dataset.fit || (p.hidden = !1, f.hidden = !0);
          continue;
        }
        p.hidden = !1;
        const m = h.every((y) => y.scrollWidth <= y.clientWidth + 1);
        p.hidden = !m, f.hidden = m, f.dataset.fit = "1";
      }
  }
  const ut = document.createElement("div");
  ut.className = "densityBadge", ut.setAttribute("aria-live", "polite"), ut.hidden = !0, g.appendChild(ut);
  let rt = 0;
  function ht() {
    if (!_) return;
    const t = c("homeView"), a = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      a(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, p = o.filter((h) => {
      const f = h.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= l + 0.5;
    }).length;
    ut.hidden = !t.classList.contains("active"), ut.innerHTML = "<b>" + p + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const et = () => {
    _ && requestAnimationFrame(ht);
  };
  function tt() {
    var t;
    g.classList.toggle("showDensity", _), (t = c("densityToggle")) == null || t.classList.toggle("on", _), ut.hidden = !_, clearInterval(rt), _ && (rt = setInterval(ht, 1e3), ht());
  }
  window.addEventListener("scroll", et, { capture: !0, passive: !0 }), window.addEventListener("resize", et, { passive: !0 });
  const S = n.querySelector("#homeView .grid");
  let at = null, Pt = null, G = null, wt = null;
  const j = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), E = 6;
  let L = null;
  const P = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map();
  let q = { favourites: null }, bt = {}, Mt = {}, Jt = [], pe = null;
  const aa = (() => {
    try {
      return JSON.parse(zi.get(Qc)) || {};
    } catch {
      return {};
    }
  })();
  let Ce = /* @__PURE__ */ new Map(), io = 0;
  function Ea() {
    clearTimeout(io), io = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: Jc, value: q })).catch(() => {
    }), 400);
  }
  const Dt = (() => {
    let t = {};
    try {
      t = JSON.parse(zi.get(tp)) || {};
    } catch {
    }
    const a = (o, l) => Object.fromEntries(Object.entries(o || {}).filter(([, p]) => l.includes(p)));
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
  })(), ye = () => zi.set(tp, JSON.stringify(Dt)), Xe = () => {
    g.dataset.more = Dt.more, g.dataset.names = Dt.names, Qn();
  };
  w && pt && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Dt.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Dt.more = a.dataset.moreStyle, ye(), Xe(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Dt.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Dt.names = a.dataset.namesStyle, Dt.namesPicked = !0, ye(), Xe(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Dt.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Dt.hoursWindow = a.dataset.hoursWindow, ye(), Qt == null || Qt.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ch.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Dt.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Dt.wxStyle = a.dataset.wxStyle, ye(), Qt == null || Qt.setStyle(Dt.wxStyle), Ma == null || Ma.forEach((o) => o.setStyle(Dt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  })), K();
  let we = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const qe = /* @__PURE__ */ new Map();
  let Er = "";
  const xe = w ? mu({ onChange: () => Le() }) : null;
  w && g.classList.add("house");
  const ae = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Qt = null, Gi = null, di = !1;
  function Ui(t) {
    const a = fs();
    if (g.classList.toggle("houseBento", !!a), Qt && (Gi !== a || t == null) && (Qt.destroy(), Qt = null), !a || t == null) {
      ae.remove();
      return;
    }
    ae.isConnected || S.append(ae), ae.style.order = t, !Qt && !di && (Qt = Oc(ae, { getHass: i, entityId: a, style: Dt.wxStyle, hoursWindow: () => Dt.hoursWindow }), Gi = a);
  }
  const Va = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], me = ["aq", "pollen", "radar"], la = Object.fromEntries(Va.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ma = null, ci = null;
  function Yi(t) {
    const a = fs();
    Ma && ci !== a && (Ma.forEach((o) => o.destroy()), Ma = null), Object.values(la).forEach((o) => a ? !o.isConnected && S.append(o) : o.remove()), a && !Ma && !di && (Ma = Va.map(([o, l]) => Oc(la[o], { getHass: i, entityId: a, style: Dt.wxStyle, cards: l, onOpen: o === "wx" ? () => Fs("weather") : void 0 })), ci = a);
  }
  const Kt = (t) => {
    var a;
    return ((a = k[t]) == null ? void 0 : a.attributes) || {};
  }, Bt = (t) => Kt(t).friendly_name || t, Gt = (t, a) => Wi(t) || (Number(Kt(t).supported_features) & a) === a, Re = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ca = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), ro = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Vt = (t) => Kt(t).supported_color_modes || [], ie = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, na = (t, a) => [5, 3, 1].map((o) => {
    const l = (o + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), On = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Pa = (t) => 0.2126 * On(t[0]) + 0.7152 * On(t[1]) + 0.0722 * On(t[2]), ta = (t, a) => {
    const o = Pa(t), l = Pa(a);
    return (Math.max(o, l) + 0.05) / (Math.min(o, l) + 0.05);
  }, pi = 0.55, ca = (t) => {
    const a = Kt(t);
    return (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? na(...a.hs_color) : a.color_temp_kelvin ? ie(a.color_temp_kelvin) : [255, 170, 0])).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, so = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function lo(t) {
    var l;
    const a = t.split(".")[0], o = (l = k[t]) == null ? void 0 : l.state;
    return !o || o === "unavailable" || o === "unknown" ? null : a === "light" ? o === "on" ? ca(t) : null : a === "climate" ? so[o] || null : a === "cover" ? o !== "closed" ? [146, 107, 199] : null : a === "lock" ? o !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : a === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : a === "fan" ? o === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function ui(t, a) {
    const [o, l, p] = t.map((U) => U / 255), h = Math.max(o, l, p), f = Math.min(o, l, p), m = h - f, y = m ? (h === o ? (l - p) / m + (l < p ? 6 : 0) : h === l ? (p - o) / m + 2 : (o - l) / m + 4) * 60 : 0, D = (h + f) / 2, R = m ? m / (1 - Math.abs(2 * D - 1)) : 0, I = m < 0.1 ? Math.min(R, 0.25) : 1, Q = (U) => {
      const St = (mt) => (mt + y / 30) % 12, nt = I * Math.min(U, 1 - U);
      return [0, 8, 4].map((mt) => Math.round(255 * (U - nt * Math.max(-1, Math.min(St(mt) - 3, 9 - St(mt), 1)))));
    };
    for (let U = 0.5; U > 0.04; U -= 0.01) {
      const St = Q(U);
      if (ta(St, a) >= 3) return "rgb(" + St.join(",") + ")";
    }
    return "#26221e";
  }
  const Ye = (t) => {
    const a = t.map((o) => Math.round(o + (255 - o) * pi));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + ui(t, a);
  }, Wn = (t) => Ye(ca(t)), Ro = (t) => {
    const a = lo(t);
    return a ? ' data-light style="' + Ye(a) + '"' : "";
  }, xn = (t) => {
    const a = Vt(t);
    return a.length ? a.some((o) => o !== "onoff") : Kt(t).brightness != null;
  }, qn = (t) => [Kt(t).min_color_temp_kelvin || 2e3, Kt(t).max_color_temp_kelvin || 6500], Mn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function co(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const o = Math.round(a / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(o / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const p = Math.round(l / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const Ga = (t) => {
    var a;
    return Kt(t).current_position ?? (((a = k[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, jn = (t) => {
    var a;
    return yn("pos", t, ((a = P.get(t)) == null ? void 0 : a.pos) ?? Ga(t));
  }, Zi = (t) => {
    var a;
    return yn("tilt", t, ((a = P.get(t)) == null ? void 0 : a.tilt) ?? Kt(t).current_tilt_position);
  };
  function ea(t) {
    var f;
    const a = k[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const o = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const m = o.color_temp_kelvin;
      return (xn(t) ? ro(a) + "%" : "On") + (o.color_mode === "color_temp" && m ? " · " + Number(m).toLocaleString() + "k" : jd.includes(o.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : Re(o.hvac_action || a.state)) + " · " + Ca(o.current_temperature) + " °C now";
    if (l === "cover") {
      const m = Ga(t), y = o.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Re(a.state) + " - " + m + "%" : (m <= 0 ? "Closed" : m >= 100 ? "Open" : "Partially open") + (y > 0 && y < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : Re(o.action || "on") + " · " + o.current_humidity + "% now";
    if (l === "vacuum") return Re(a.state) + (a.state === "cleaning" && ((f = o.rooms) != null && f.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Re(a.state);
    if (l === "alarm_control_panel") return ip[a.state] || Re(a.state);
    if (l === "lock" || l === "valve") return Re(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : Re(o.problem);
    if (l === "binary_sensor")
      return o.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Gl.includes(o.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + Mn(o.rang);
    const p = i();
    if (p != null && p.formatEntityState && !Wi(t))
      try {
        return p.formatEntityState(a);
      } catch {
      }
    const h = Number(a.state);
    if (a.state !== "" && Number.isFinite(h)) {
      const m = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, y = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: m }) + y + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Re(a.state);
  }
  const Ki = (t) => t >= 1e3 ? Ca(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Te(t) {
    var o, l;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((p) => {
      var m;
      const h = k[p.dataset.iconFor], f = p.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !f) {
        let y = p.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (p.textContent = "", y = document.createElement("ha-state-icon"), p.appendChild(y)), y.hass = a, y.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let y = p.firstElementChild;
        (!y || y.localName !== "ha-icon") && (p.textContent = "", y = document.createElement("ha-icon"), p.appendChild(y)), y.icon = f || ((m = h == null ? void 0 : h.attributes) == null ? void 0 : m.icon) || "mdi:circle-medium";
      } else p.textContent || (p.textContent = (p.dataset.letter || Bt(p.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(po), (l = t.classList) != null && l.contains("tfIcon") && po(t), Bo();
  }
  const Ta = /* @__PURE__ */ new Map();
  function po(t) {
    var h, f, m;
    const a = (((h = t.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (t.dataset.iconFor || ((f = t.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), l = { backgroundColor: o.backgroundColor, color: o.color }, p = Ta.get(a);
    Ta.set(a, l), !(!p || p.backgroundColor === l.backgroundColor && p.color === l.color || (m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([p, l], { duration: 180, easing: "ease" });
  }
  const Dr = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Ua = (t) => {
    const a = [t];
    for (; a.length; ) {
      const o = a.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && a.push(...o.shadowRoot.children), a.push(...o.children);
    }
    return null;
  };
  function da(t) {
    var U, St, nt;
    const a = t.localName === "svg" ? t : Ua(t), o = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !a;
    const l = (U = t.closest(".tfIcon")) == null ? void 0 : U.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const p = l + "|" + o.map((mt) => mt.getAttribute("d") || mt.localName).join("|");
    if (t.dataset.fitted === p) return !0;
    let h = 1 / 0, f = 1 / 0, m = -1 / 0, y = -1 / 0;
    for (const mt of o) {
      const W = mt.getBBox(), kt = getComputedStyle(mt), V = kt.stroke !== "none" ? (parseFloat(kt.strokeWidth) || 0) / 2 : 0;
      !W.width && !W.height || (h = Math.min(h, W.x - V), f = Math.min(f, W.y - V), m = Math.max(m, W.x + W.width + V), y = Math.max(y, W.y + W.height + V));
    }
    if (!(m > h)) return !1;
    const D = (nt = (St = a.viewBox) == null ? void 0 : St.baseVal) != null && nt.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, R = l - 14, I = R * D.width / Math.max(m - h, y - f), Q = I / D.width;
    return t.localName === "svg" ? (t.style.width = I + "px", t.style.height = I + "px") : t.style.setProperty("--mdc-icon-size", I + "px"), a.style.translate = ((D.x + D.width / 2 - (h + m) / 2) * Q).toFixed(2) + "px " + ((D.y + D.height / 2 - (f + y) / 2) * Q).toFixed(2) + "px", t.dataset.fitted = p, !0;
  }
  let ha = 0;
  function Rr(t = 0) {
    clearTimeout(ha), [...n.querySelectorAll(Dr)].filter((o) => !da(o)).length && t < 5 && (ha = setTimeout(() => Rr(t + 1), 300));
  }
  function Bo() {
    clearTimeout(ha), ha = setTimeout(() => Rr(), 60);
  }
  const fi = (t) => {
    var a, o, l;
    return t.startsWith("light.") && k[t] && !Kt(t).icon && !((l = (o = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : o[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, Ze = (t, a, o) => (a = a || fi(t), ' data-icon-for="' + J(t) + '"' + (a ? ' data-icon-name="' + J(a) + '"' : "") + (o ? ' data-letter="' + J(o) + '"' : "")), oa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Kt(t).rang ? "mdi:doorbell" : "", ke = (t, a, o, l) => J([t, a, o, l ? JSON.stringify(l) : ""].join("|")), Ya = (t) => J(JSON.stringify(t));
  function zn(t, a) {
    var p, h;
    const o = J(Bt(a) + ", " + ea(a));
    return '<div class="activityRow' + (Number.isFinite(Number((p = k[a]) == null ? void 0 : p.state)) && ((h = k[a]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + J(t + "|" + a) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + Ze(a, oa(a)) + '></div><div><div class="activityRowName">' + J(Bt(a)) + '</div><div class="activityRowMeta">' + J(ea(a)) + "</div></div></div>";
  }
  const uo = (t, a, o) => '<div class="activityRow" aria-label="' + J(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Ze("", o, t) + '></div><div><div class="activityRowName">' + J(t) + '</div><div class="activityRowMeta">' + J(a) + "</div></div></div>";
  function fo(t) {
    var o;
    const a = ((o = k[t]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ke("switch", "toggle", t) + '" aria-label="Turn ' + J(Bt(t)) + (a ? " off" : " on") + '"' + Ze(t) + '></button><button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(Bt(t) + ", " + ea(t) + ". More info") + '"><span class="activityRowName">' + J(Bt(t)) + '</span><span class="activityRowMeta">' + J(ea(t)) + "</span></button></div>";
  }
  const dn = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.name) ?? Bt(t);
  }, Ia = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.text) ?? ea(t);
  };
  function $i(t) {
    var o;
    const a = (o = zt.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Ze("", a, dn(t)) : Ze(t, oa(t))) + '></div><div><div class="activityRowName">' + J(dn(t)) + '</div><div class="activityRowMeta">' + J(Ia(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + J(dn(t)) + '’s last 24 hours">' + Od + '</button></div><svg class="tfGraph" data-graph="' + J(t) + '" role="img" aria-label="' + J(dn(t)) + ', last 24 hours"></svg></div>';
  }
  function ho(t, a, o, l, p = "", h = null, f = "") {
    const m = at && at.key === t;
    return '<section class="card tfCard' + (f ? " " + f : "") + (m ? " open" : "") + '" data-tf data-k="' + J(t) + '" style="order:' + a + (m && at.h ? ";min-height:" + at.h + "px" : "") + '" aria-label="' + J(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + J(h) + '" aria-label="' + J(o + (k[h] ? ", " + ea(h) : "") + ". More info") + '">' + J(o) + "</button>" : '<div class="activityTitle">' + J(o) + "</div>") + "</div>" + (m ? $i(at.id) : '<div class="activityRows">' + l.join("") + "</div>" + p) + "</section>";
  }
  function Xi(t, a) {
    const o = "readings:" + t.id, l = t.readings.map((p) => zn(o, p));
    return t.power != null && l.push(uo("Power now", Ki(t.power), "mdi:flash")), ho(o, a, "Readings", l.concat(t.plugs.map(fo)));
  }
  function hi(t, a) {
    var m;
    const o = "energy:" + t.id, [l, p] = [t.solar.find((y) => y.endsWith("_power")), t.solar.find((y) => y.endsWith("_today"))], h = [l, p].filter(Boolean).map((y) => zn(o, y)), f = Number(((m = k[l]) == null ? void 0 : m.state) || 0) * 1e3;
    return we.grid && (h.push(zn(o, we.grid)), h.push(uo("House use", Ki(f + Number(k[we.grid].state)), "mdi:home-lightning-bolt"))), ho(o, a, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const x = (t, a) => ho("plant:" + t.id, a, Bt(t.id), t.readings.map((o) => zn("plant:" + t.id, o)), "", t.id);
  function C(t, a, o, l, p, h, f = null) {
    const m = o == null ? null : Math.max(0, Math.min(1, o)), y = m == null ? 0 : Math.round(m * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + J(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + y + '"' + (p ? ' aria-valuetext="' + J(p) + '"' : "") + ' data-drag="' + J(t + "|" + a) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (h ? m == null ? "" : '<b style="left:' + y + '%"></b>' : '<i style="width:' + y + '%"></i>') + "</div>";
  }
  const A = "move-assistant-house-last-bright", H = (() => {
    try {
      return JSON.parse(zi.get(A)) || {};
    } catch {
      return {};
    }
  })();
  let Z = 0;
  const X = (t, a) => {
    !a || H[t] === a || (H[t] = a, clearTimeout(Z), Z = setTimeout(() => zi.set(A, JSON.stringify(H)), 500));
  }, ct = (t, a, o, l) => '<div class="tfStep" role="group" aria-label="' + J(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + J(t.toLowerCase()) + '">' + Gc.down + "</button><output>" + J(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + J(t.toLowerCase()) + '">' + Gc.up + "</button></div>", vt = (t, a, o) => '<div class="' + t + '" role="group" aria-label="' + J(a) + '">' + o.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + J(l.aria) + '"' : "") + ">" + (l.html || J(l.label)) + "</button>").join("") + "</div>", yt = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), It = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", _t = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + J(Bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + J(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + yt(a, o) + '"></i><b' + (a >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + It(a) + '">' + Math.round(a) + "%</output></div>";
  function Ct(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, p) => {
      l.firstElementChild.setAttribute("style", yt(a, p)), l.lastElementChild.classList.toggle("lit", a >= (p + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", It(a)), o.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const Zt = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + J(Bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + J(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ht = (t, a, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + J(Bt(t)) + '">' + [
    Gt(t, mh) && ["open", "Open", "open_cover", a >= 100 && !o],
    Gt(t, vh) && ["stop", "Stop", "stop_cover", !1],
    Gt(t, gh) && ["close", "Close", "close_cover", a <= 0 && !o]
  ].filter(Boolean).map(([l, p, h, f]) => '<button type="button" data-act="' + ke("cover", h, t) + '" aria-label="' + p + '"' + (f ? " disabled" : "") + ">" + bh[l] + "</button>").join("") + "</div>", Wt = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + J(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + J(a.art) + '&quot;)"' : Ze(t, a.icon)) + "></button>", $t = (t) => '<button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(Bt(t) + ", " + ea(t) + ". More info") + '"><span class="activityRowName">' + J(Bt(t)) + '</span><span class="activityRowMeta">' + J(ea(t)) + "</span></button>";
  function Yt(t, a = !1, o = null) {
    const l = go(t), p = t.startsWith("light.") && cn(t) && !(o && Rn(t) < 3), h = o || (a && t.startsWith("light.") ? ["bright"] : null), f = p ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : o ? "dash:" : "tile:") + J(t) + '"></div>'] : l.sections.map((m, y) => m && (!h || h.includes((l.parts || [])[y])) ? m : "").filter(Boolean);
    return '<div class="tfAction' + (p ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + J(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + Ro(t) + '><div class="tfActionHead">' + Wt(t, l) + $t(t) + "</div>" + f.join("") + "</div>";
  }
  const Tt = "dual-controller-v3", ee = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let ne = null;
  async function Oe() {
    if (ne || customElements.get(Tt)) return;
    ne = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(Tt), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(Tt)) return;
    const o = Object.assign(document.createElement("script"), { src: ee });
    o.onerror = () => {
      ne = "failed", z();
    }, document.head.appendChild(o);
  }
  const Et = /* @__PURE__ */ new Map(), _e = (t) => (Dt.lightStyles[t] || Dt.lights) === "dac", We = () => Dt.lights === "dac" || Object.values(Dt.lightStyles).includes("dac");
  function cn(t) {
    return _e(t) && !!customElements.get(Tt);
  }
  const Sn = (t) => Dt.lightPads[t] || Dt.dacPad, mo = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (a, o, l, ...p) => t.callService(a, ...Ks(a, o, l), ...p)
    };
  }, Ji = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Qi = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ji })).dataset.tf = "");
  }, ue = /* @__PURE__ */ new Map(), Cn = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const o = a.parentElement;
    !o || !a.offsetHeight || (o.style.removeProperty("min-height"), ue.set(o.dataset.dac, o.offsetHeight));
  }));
  function Za(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const o = a.dataset.dac;
      let l = Et.get(o);
      if (!l) {
        const p = o.slice(o.indexOf(":") + 1);
        l = document.createElement(Tt), l.setConfig({ type: "custom:" + Tt, entity: p, pad: Sn(p), tap_action: { action: "none" } }), Et.set(o, l);
      }
      l.hass = mo(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && ue.has(o) && (a.style.minHeight = ue.get(o) + "px"), Cn.observe(l), Qi(l);
    });
  }
  function Tn() {
    const t = mo();
    Et.forEach((a, o) => {
      a.isConnected ? a.hass = t : Et.delete(o);
    });
  }
  customElements.whenDefined(Tt).then(() => {
    w && (S != null && S.querySelector("[data-tf]")) && ei(Pn);
  });
  const yn = (t, a, o) => M.has(t + "|" + a) ? M.get(t + "|" + a) : o;
  function go(t) {
    var h;
    const a = k[t], o = a.attributes, l = t.split(".")[0], p = (f, m) => ({ act: ke(f, "toggle", t), label: m });
    if (l === "light") {
      const f = a.state === "on", m = Vt(t), [y, D] = qn(t), R = yn("bright", t, ro(a));
      f && X(t, ro(a));
      const I = yn("ct", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), Q = yn("hue", t, f && jd.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: f, button: p("light", "Turn " + Bt(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        xn(t) && C("bright", t, R / 100, Bt(t) + " brightness", R + "%", !1, f ? null : H[t] ?? null),
        m.includes("color_temp") && C("ct", t, I == null ? null : (I - y) / (D - y), Bt(t) + " warm to cool", I == null ? "" : Math.round(I) + " kelvin", !0),
        m.some((U) => jd.includes(U)) && C("hue", t, Q == null ? null : Q / 360, Bt(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const f = o.target_temp_step || 0.5, m = Number(o.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Bt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(m) && ct("Target temperature", Ca(m) + " °C", ke("climate", "set_temperature", t, { temperature: m - f }), ke("climate", "set_temperature", t, { temperature: m + f })),
        vt("tfSeg", "Mode", (o.hvac_modes || []).map((y) => ({ label: Re(y), act: ke("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: a.state === y })))
      ] };
    }
    if (l === "cover") {
      const f = a.state === "opening" || a.state === "closing", m = a.state === "closed", y = jn(t), D = Zi(t);
      return { on: !m, tone: "blue", icon: Xc[Fd(a)][m ? 1 : 0], button: p("cover", (m ? "Open " : "Close ") + Bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Gt(t, $c) && _t(t, y),
        D != null && Zt(t, D),
        Ht(t, y, f)
      ] };
    }
    if (l === "humidifier") {
      const f = Number(o.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Bt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ct("Target humidity", f + "%", ke("humidifier", "set_humidity", t, { humidity: f - 1 }), ke("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && vt("tfSeg", "Mode", o.available_modes.map((m) => ({ label: Re(m), act: ke("humidifier", "set_mode", t, { mode: m }), pressed: o.mode === m })))
      ] };
    }
    if (l === "media_player") {
      const f = a.state === "playing", m = a.state === "off" || a.state === "standby", y = yn("vol", t, o.volume_level), D = m ? { act: ke("media_player", Gt(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + Bt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: ke("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + Bt(t) } : { act: ke("media_player", Gt(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + Bt(t) + " off" };
      return { on: !m, tone: "blue", art: !m && o.entity_picture ? o.entity_picture : null, button: D, parts: ["playback", "volume"], sections: m ? [] : [
        (Gt(t, Yc) || Gt(t, Zc) || Gt(t, Uc) || Gt(t, Kc)) && vt("tfSeg", "Playback", [
          { html: Vl.prev, aria: "Previous", act: ke("media_player", "media_previous_track", t), disabled: !Gt(t, Yc) },
          { html: f ? Vl.pause : Vl.play, aria: f ? "Pause" : "Play", act: ke("media_player", "media_play_pause", t), disabled: !(Gt(t, Uc) || Gt(t, Kc)) },
          { html: Vl.next, aria: "Next", act: ke("media_player", "media_next_track", t), disabled: !Gt(t, Zc) }
        ]),
        Gt(t, uh) && y != null && C("vol", t, y, Bt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const f = a.state === "cleaning", m = o.rooms || [], y = (R) => m.includes(R) ? m.filter((I) => I !== R) : m.concat(R), D = ke("vacuum", f ? "pause" : "start", t, Wi(t) ? { rooms: m } : null);
      return { on: f || a.state === "returning", tone: "blue", button: { act: D, label: (f ? "Pause " : "Start ") + Bt(t) }, parts: ["controls", "rooms"], sections: [
        vt("tfSeg", Bt(t), [
          { label: f ? "Pause" : "Start", act: D },
          { label: "Dock", act: ke("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: ke("vacuum", "locate", t) }
        ]),
        Wi(t) && vt("tfChips", "Rooms to clean", we.rooms.filter((R) => R.id !== "balcony").map((R) => ({ label: R.name, act: ke("vacuum", "set_rooms", t, { rooms: y(R.name) }), pressed: m.includes(R.name) })))
      ] };
    }
    if (l === "lock") {
      const f = a.state === "locked";
      return { on: !f, tone: "heat", button: { act: ke("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + Bt(t) }, parts: ["controls"], sections: [
        vt("tfSeg", Bt(t), [
          { label: "Lock", act: ke("lock", "lock", t), pressed: f },
          { label: "Unlock", act: ke("lock", "unlock", t), pressed: a.state === "unlocked" },
          Gt(t, Eh) && { label: "Open", act: ke("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const f = a.state === "disarmed";
      return { on: !f, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: ke("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + Bt(t) + ", away" : "Disarm " + Bt(t) }, parts: ["controls"], sections: [
        vt("tfSeg", Bt(t), Dh.filter(([, , , m]) => !m || Gt(t, m)).map(([m, y, D]) => ({ label: y, act: ke("alarm_control_panel", D, t), pressed: a.state === m })))
      ] };
    }
    if (l === "valve") {
      const f = a.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (f ? "Close " : "Open ") + Bt(t)), parts: ["controls"], sections: [
        vt("tfSeg", Bt(t), [
          { label: "Open", act: ke("valve", "open_valve", t), pressed: f },
          { label: "Close", act: ke("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Bt(t) }, sections: [] };
  }
  const pn = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ca(t)) + "°";
  function ma(t) {
    var mt;
    const a = (W) => t.readings.find((kt) => Kt(kt).device_class === W), o = a("temperature"), l = a("humidity"), p = (W) => {
      var kt;
      return Number((kt = k[W]) == null ? void 0 : kt.state);
    }, h = (W) => t.actions.filter((kt) => W.test(kt)), f = t.lights.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "on";
    }), m = h(/^cover\./), y = m.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) !== "closed";
    }), D = [...new Set(m.map((W) => Fd(k[W])))], R = h(/^climate\./)[0], I = h(/^humidifier\./)[0], Q = h(/^media_player\./), U = Q.find((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "playing";
    }) || Q.find((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "paused";
    }), St = t.plugs.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "on";
    }), nt = [];
    if (o && Number.isFinite(p(o)) && nt.push({ key: "temp", id: o, kind: "reading", icon: _o(o), label: "Temperature", value: Ca(p(o)) + "°" }), l && Number.isFinite(p(l)) && nt.push({ key: "hum", id: l, kind: "reading", icon: _o(l), label: "Humidity", value: Math.round(p(l)) + "%" }), t.lights.length && nt.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: _o("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + t.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? Wn(f[0]) : "",
      acts: t.lights.map((W) => ["light", f.length ? "turn_off" : "turn_on", W]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), m.length) {
      const W = D.length === 1 ? wh[D[0]] : "covers", kt = Math.round(m.reduce((V, qt) => V + Ga(qt), 0) / m.length);
      nt.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: y.length ? Ye([146, 107, 199]) : "",
        icon: _o("", ((mt = Xc[D[0]]) == null ? void 0 : mt[y.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Re(W),
        value: kt <= 0 ? "Closed" : kt >= 100 ? "Open" : kt + "% open",
        short: kt <= 0 ? "Closed" : kt + "%",
        on: y.length > 0,
        acts: m.map((V) => ["cover", y.length ? "close_cover" : "open_cover", V]),
        aria: (y.length ? "Close the " : "Open the ") + W + " in " + t.name
      });
    }
    if (R) {
      const W = Kt(R), kt = k[R].state === "off";
      nt.push({
        key: "climate",
        kind: "control",
        tone: W.hvac_action === "cooling" ? "cool" : "heat",
        light: lo(R) ? Ye(lo(R)) : "",
        icon: _o(R),
        label: Bt(R),
        value: kt ? "Off" : Re(W.hvac_action || k[R].state) + " · " + pn(W.temperature),
        short: kt ? "Off" : pn(W.temperature),
        on: !kt,
        acts: [["climate", "toggle", R]],
        aria: "Turn " + Bt(R) + (kt ? " on" : " off")
      });
    }
    if (I) {
      const W = k[I].state === "on";
      nt.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: W ? Ye([33, 150, 243]) : "",
        icon: _o("", "mdi:air-humidifier"),
        label: Bt(I),
        value: W ? "On · " + Kt(I).humidity + "%" : "Off",
        short: W ? Kt(I).humidity + "%" : "Off",
        on: W,
        acts: [["humidifier", "toggle", I]],
        aria: "Turn " + Bt(I) + (W ? " off" : " on")
      });
    }
    if (Q.length) {
      const W = U || Q[0], kt = k[W], V = kt.state === "playing";
      nt.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: lo(W) ? Ye(lo(W)) : "",
        icon: _o(W),
        label: Bt(W),
        value: ea(W),
        short: V ? "Playing" : kt.state === "paused" ? "Paused" : Re(kt.state),
        on: V,
        acts: [["media_player", kt.state === "playing" || kt.state === "paused" ? "media_play_pause" : "toggle", W]],
        aria: (V ? "Pause " : "Play ") + Bt(W)
      });
    }
    return t.plugs.length && nt.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: St.length ? Ye([255, 193, 7]) : "",
      icon: _o("", "mdi:power-plug"),
      label: "Plugs",
      value: St.length ? St.length + " of " + t.plugs.length + " on" : "All off",
      short: St.length ? St.length + " on" : "Off",
      on: St.length > 0,
      acts: t.plugs.map((W) => ["switch", St.length ? "turn_off" : "turn_on", W]),
      aria: (St.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((W) => nt.push(Kt(W).device_class === "moisture" ? { key: "alert:" + W, kind: "alert", icon: _o(W), label: "Water leak" } : { key: "note:" + W, kind: "note", icon: _o(W), label: Bt(W) + " " + ea(W).toLowerCase() })), nt;
  }
  const Ie = (t, a) => {
    const o = (l) => t.actions.filter((p) => l.test(p));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = o(/^media_player\./);
        return [l.find((p) => {
          var h;
          return ((h = k[p]) == null ? void 0 : h.state) === "playing";
        }) || l.find((p) => {
          var h;
          return ((h = k[p]) == null ? void 0 : h.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, ad = (t, a, o) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Ya(t.acts) + '" aria-label="' + J(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", nd = (t) => '<button class="tfAName" type="button" data-go="' + J(t.id) + '" aria-label="Open ' + J(t.name) + '">' + J(t.name) + "</button>";
  function us(t, a, o = !1) {
    const l = a.find((m) => m.key === "lights"), p = !!(l != null && l.on), h = "", f = '<span class="tfAreaGlyph"' + Ze("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !l ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + h + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + h + ' data-acts="' + Ya(l.acts) + '" aria-label="' + J(l.aria) + '" aria-pressed="' + p + '">' + f + "</button>";
  }
  const mi = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + J(a.label) + "</span>").join(" "), il = (t) => t.readings.find((a) => Kt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => k[a]) || null, je = (t, a) => {
    const o = Bt(a);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Re(o.slice(t.name.length + 1)) : o;
  };
  function Ln(t) {
    const a = k[t], o = Kt(t), l = t.split(".")[0], p = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(p)) {
      if (o.device_class === "temperature") return { text: pn(p) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(p) + "%" } : { text: Ca(p, Number.isInteger(p) ? 0 : 1), unit: h };
    }
    if (l === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: pn(o.current_temperature ?? o.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : xn(t) ? ro(a) + "%" : "On" };
    if (l === "cover") {
      const h = Ga(t);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? o.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Re(a.state) } : { text: ea(t) };
  }
  const No = (t, a, o) => {
    const l = o.find((m) => m.key === "temp"), p = o.find((m) => m.key === "hum"), h = Kt(a), f = k[a].state === "off";
    return a.startsWith("climate.") ? [je(t, a), f ? "Off" : Re(h.hvac_action || k[a].state) + (h.temperature != null ? " · " + pn(h.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && je(t, a), l && l.id !== a && l.value, p && p.id !== a && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function od(t, a, o) {
    const l = o && Ln(o), p = o ? No(t, o, a) : "", h = (m) => {
      const y = Ie(t, m.key);
      return y.length === 1 ? y[0] : "group:" + t.id + ":" + m.key;
    }, f = a.filter((m) => m.kind === "control").slice(0, 4).map((m) => '<div class="tfATile' + (m.on ? " on" : "") + '" data-tone="' + m.tone + '"' + (m.light ? ' data-light style="' + m.light + '"' : "") + ">" + ad(m, "tfIcon", m.icon) + '<button class="tfName" type="button" data-more="' + J(h(m)) + '" aria-label="' + J(t.name + " " + m.label.toLowerCase() + ", " + m.value + ". Open") + '"><span class="activityRowName">' + J(m.label) + '</span><span class="activityRowMeta">' + J(m.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + us(t, a) + '<div class="tfATitle">' + nd(t) + mi(a) + "</div></div>" + (o ? '<button class="tfABig" type="button" data-more="' + J(o) + '" aria-label="' + J(Bt(o) + ", " + ea(o) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + J(l.text) + (l.unit ? '<span class="tfABigUnit">' + J(l.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + J(p) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function Br(t) {
    const a = t.id === Pt, o = ma(t), l = il(t), p = l && Ln(l), h = [...o.filter((f) => f.kind === "control"), ...o.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + J(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + J(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + od(t, o, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + us(t, o, !0) + '<span class="tfACName">' + J(t.name) + '</span></div><span class="tfACMain">' + (p ? J(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let un = [];
  const tr = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + un.map(Br).join("") + "</section></div>", An = (t) => t.startsWith("room:"), Vn = (t) => un.find((a) => "room:" + a.id === t);
  function id(t, a) {
    const o = ma(t), l = il(t), p = l && Ln(l), h = l ? No(t, l, o) : "", f = p ? p.text + (p.unit ? " " + p.unit : "") : "", m = (Q) => {
      const U = Ie(t, Q.key);
      return U.length === 1 ? U[0] : "group:" + t.id + ":" + Q.key;
    }, y = o.filter((Q) => Q.kind === "control").slice(0, 4), D = (Q) => Q.on && Q.light ? ' data-light style="' + Q.light + '"' : "", R = y.map((Q) => '<button class="tfIcon' + (Q.on ? " on" : "") + '" type="button" data-tone="' + Q.tone + '"' + D(Q) + ' data-more="' + J(m(Q)) + '" aria-label="' + J(Q.label + ", " + Q.value + ". Open its controls") + '">' + Q.icon + "</button>"), I = y.map((Q) => '<button class="tfRoomDev" type="button" data-more="' + J(m(Q)) + '" aria-label="' + J(Q.label + ", " + Q.value + ". Open its controls") + '"><span class="tfIcon' + (Q.on ? " on" : "") + '" data-tone="' + Q.tone + '"' + D(Q) + ">" + Q.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + J(Q.label) + '</span><span class="activityRowMeta">' + J(Q.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + J(a) + '" data-go="' + J(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Ze("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + J(t.id) + '" aria-label="Open ' + J(t.name) + '"><span class="activityRowName">' + J(t.name) + "</span>" + (f || h ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + J(f) + (h ? " · " : "") + "</span>" : "") + J(h) + "</span>" : "") + "</button></div>" + (f ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + J(f) + "</span>" + (h ? '<span class="tfRoomSub">' + J(h) + "</span>" : "") + "</div>" : "") + (R.length ? '<div class="tfRoomDevices">' + R.join("") + '</div><div class="tfRoomHeads">' + I.join("") + "</div>" : "") + "</div>";
  }
  const vo = () => [
    { key: "home", name: "Home", ids: we.homeVacuums },
    ...we.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], gi = (t, a, o) => t + " " + (t === 1 ? a : o), ia = () => (q.favourites ?? bt.favorite_entities ?? []).filter((t) => k[t]);
  function rl() {
    if (!pe) {
      const a = Object.entries(aa).sort((l, p) => p[1] - l[1]).map(([l]) => l), o = we.rooms.flatMap((l) => l.actions);
      pe = [.../* @__PURE__ */ new Set([...Jt, ...a, ...o.filter((l) => go(l).on), ...o])];
    }
    const t = ia();
    return pe.filter((a) => k[a] && k[a].state !== "unavailable" && !t.includes(a));
  }
  let sl = !1;
  function Nr() {
    if (!sl || q.favSeeded || !we.rooms.length) return;
    const t = (o) => Object.keys(k).find((l) => Wi(l) && o(l)), a = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), we.security.locks[0]];
    q = { ...q, favourites: [.../* @__PURE__ */ new Set([...q.favourites ?? bt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Ea();
  }
  const vi = () => q.suggest ?? !bt.hide_suggested_entities;
  function ll() {
    const t = new Set(q.favHidden || []), a = ia().filter((l) => !t.has(l)), o = vi() ? rl().filter((l) => !t.has(l) && lr(l)) : [];
    return [...a, ...o].slice(0, Bh);
  }
  const rd = (t) => {
    const a = ia().includes(t);
    return '<button class="tfStar" type="button" data-star="' + J(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + J(Bt(t)) + '">' + _h(a) + "</button>";
  };
  function bi(t, { area: a = !1, star: o = !1, plain: l = !1, say: p = null, alert: h = !1 } = {}) {
    var St, nt, mt, W, kt, V;
    const f = l && ((kt = (St = i()) == null ? void 0 : St.devices) == null ? void 0 : kt[(W = (mt = (nt = i()) == null ? void 0 : nt.entities) == null ? void 0 : mt[t]) == null ? void 0 : W.device_id]), m = f && (f.name_by_user || f.name) || Bt(t), y = t.split(".")[0], D = !l && Ul.includes(y) ? go(t) : null, R = D ? D.on : ["on", "open", "playing"].includes((V = k[t]) == null ? void 0 : V.state), I = l ? null : D ? D.button : xh.includes(y) ? { act: ke(y, "toggle", t), label: "Turn " + Bt(t) + (R ? " off" : " on") } : y === "scene" || y === "script" ? { act: ke(y, "turn_on", t), label: "Run " + Bt(t) } : null, Q = (p ?? ea(t)) + (a && Ce.get(t) ? " · " + Ce.get(t) : ""), U = (D == null ? void 0 : D.icon) || oa(t);
    return '<div class="activityRow' + (I ? " tfPlug" : "") + (R ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + J((a ? "fav:" : "row:") + t) + '" data-tone="' + (y === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + Ro(t) + ">" + (I && !o ? '<button class="tfIcon" type="button" data-act="' + I.act + '" aria-label="' + J(I.label) + '"' + Ze(t, U) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ze(t, U) + "></div>") + '<button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(m + ", " + Q + ". More info") + '"><span class="activityRowName">' + J(m) + '</span><span class="activityRowMeta">' + J(Q) + "</span></button>" + (o ? rd(t) : "") + "</div>";
  }
  const fs = () => {
    var t;
    return k[(t = q.sources) == null ? void 0 : t.weather] ? q.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((a) => a.startsWith("weather."));
  };
  function er() {
    var o;
    const t = (l) => Object.keys(k).filter((p) => p.startsWith("binary_sensor.") && l.includes(Kt(p).device_class));
    return ((o = Mt.alert_entities) != null && o.length ? Mt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(Gl).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => k[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[l.entity].state) }));
  }
  function sd() {
    const t = Object.keys(Wd), a = /* @__PURE__ */ new Set(), o = [];
    return (bt.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      o.push(l);
    }), t.forEach((l) => {
      a.has(l) || o.push({ type: "summary", key: l });
    }), o;
  }
  function ar() {
    var mt;
    const t = ((mt = i()) == null ? void 0 : mt.entities) || {}, a = (W) => Kt(W).device_class, o = Object.keys(k).filter((W) => W.startsWith("sensor.") && a(W) === "battery" || W.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(W))), l = we.rooms.flatMap((W) => W.plants.map((kt) => kt.id));
    if (!o.length && !l.length) return null;
    const p = (W) => {
      var V;
      const kt = (V = t[W]) == null ? void 0 : V.device_id;
      return !!kt && Object.keys(k).some((qt) => {
        var Pe;
        return qt.startsWith("binary_sensor.") && ((Pe = t[qt]) == null ? void 0 : Pe.device_id) === kt && a(qt) === "battery_charging" && k[qt].state === "on";
      });
    }, h = (W) => W.startsWith("vacuum.") ? Kt(W).battery_level <= 20 && k[W].state !== "docked" : W.startsWith("binary_sensor.") ? a(W) === "battery" && k[W].state === "on" : parseFloat(k[W].state) <= 20 && !p(W), f = [...o, ...we.vacuums].filter((W) => k[W] && h(W)), m = [...o.filter((W) => a(W) === "problem" && k[W].state === "on"), ...l.filter((W) => {
      var kt;
      return ((kt = k[W]) == null ? void 0 : kt.state) === "problem";
    })], y = o.filter((W) => k[W].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...f, ...m, ...y])], R = (W) => {
      const kt = parseFloat(k[W].state);
      return a(W) === "battery" && Number.isFinite(kt) ? kt : 101;
    }, I = [...l, ...we.vacuums, ...[...o].sort((W, kt) => R(W) - R(kt))].filter((W) => k[W] && !D.includes(W)), Q = /* @__PURE__ */ new Map();
    I.forEach((W) => {
      var V;
      const kt = ((V = we.areaOf) == null ? void 0 : V.call(we, W)) || "";
      Q.set(kt, [...Q.get(kt) || [], W]);
    });
    const U = (W) => {
      const kt = we.rooms.findIndex((V) => V.id === W);
      return W === "" ? 1 / 0 : kt < 0 ? we.rooms.length : kt;
    }, St = [...Q.keys()].sort((W, kt) => U(W) - U(kt)), nt = (W) => {
      var kt, V, qt, Pe;
      return ((kt = we.rooms.find((ge) => ge.id === W)) == null ? void 0 : kt.name) || ((Pe = (qt = (V = i()) == null ? void 0 : V.areas) == null ? void 0 : qt[W]) == null ? void 0 : Pe.name) || W;
    };
    return {
      value: [f.length && gi(f.length, "low battery", "low batteries"), m.length && gi(m.length, "problem", "problems"), y.length && gi(y.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...St.map((W) => ({ name: W ? nt(W) : St.length > 1 ? "Other devices" : "Devices", ids: Q.get(W) }))].filter((W) => W.ids.length)
    };
  }
  function Gn() {
    var Sa;
    const t = we.rooms, a = we.security, o = (Xt, Ve) => Xt.actions.filter((Cr) => Ve.test(Cr)), l = (Xt) => t.map((Ve) => ({ name: Ve.name, ids: Xt(Ve) })).filter((Ve) => Ve.ids.length), p = t.flatMap((Xt) => Xt.lights), h = p.filter((Xt) => {
      var Ve;
      return ((Ve = k[Xt]) == null ? void 0 : Ve.state) === "on";
    }).length, f = t.map((Xt) => Xt.readings.find((Ve) => Kt(Ve).device_class === "temperature")).filter(Boolean).map((Xt) => Number(k[Xt].state)).filter(Number.isFinite), [m, y] = [Ca(Math.min(...f)), Ca(Math.max(...f))], D = t.flatMap((Xt) => o(Xt, /^media_player\./)), R = D.filter((Xt) => {
      var Ve;
      return ((Ve = k[Xt]) == null ? void 0 : Ve.state) === "playing";
    }).length, I = er(), Q = I.filter((Xt) => Xt.severity === "warning" && Xt.on).length, U = a.locks.filter((Xt) => {
      var Ve;
      return ["unlocked", "jammed", "open"].includes((Ve = k[Xt]) == null ? void 0 : Ve.state);
    }).length, St = a.alarms.filter((Xt) => {
      var Ve;
      return ((Ve = k[Xt]) == null ? void 0 : Ve.state) === "disarmed";
    }).length, nt = Q ? gi(Q, "warning", "warnings") : null, mt = U ? U + " unlocked" : St ? St + " disarmed" : nt ? null : "All secure", W = ar(), kt = t.flatMap((Xt) => Xt.solar), V = kt.find((Xt) => Xt.endsWith("_power")), qt = {
      light: p.length && { value: h ? h + " on" : "All off", groups: l((Xt) => Xt.lights) },
      climate: f.length && { value: m === y ? m + "°" : m + " - " + y + "°", groups: l((Xt) => [...Xt.readings.filter((Ve) => ["temperature", "humidity"].includes(Kt(Ve).device_class)), ...o(Xt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [nt, mt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Xt) => Xt.ids.length) },
      media_players: D.length && { value: R ? R + " playing" : "No media playing", groups: l((Xt) => o(Xt, /^media_player\./)) },
      maintenance: W,
      energy: we.grid && { value: Ki(Number(((Sa = k[V]) == null ? void 0 : Sa.state) || 0) * 1e3 + Number(k[we.grid].state)) + " now", groups: [{ name: "Energy", ids: [...kt, we.grid] }] }
    }, Pe = [], ge = I.filter((Xt) => Xt.severity !== "warning" && Xt.on);
    return ge.length && Pe.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: gi(ge.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: ge.map((Xt) => Xt.entity) }] }), sd().forEach((Xt) => {
      Xt.type !== "summary" ? Pe.push({ key: "path:" + Xt.path, name: Xt.label || Xt.path, icon: Xt.icon || "mdi:link-variant", colour: "", value: "" }) : !Xt.hidden && qt[Xt.key] && !(q.hiddenSums || []).includes(Xt.key) && Pe.push({ key: Xt.key, ...Wd[Xt.key], ...qt[Xt.key] });
    }), Pe;
  }
  const hs = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + J(t.key) + '" data-k="sum:' + J(t.key) + '" aria-label="' + J(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Ze(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + J(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + J(t.value) + "</div>" : "") + "</div></div>";
  function nr(t) {
    const a = ia();
    q = { ...q, favourites: a.includes(t) ? a.filter((o) => o !== t) : [...a, t], favHidden: (q.favHidden || []).filter((o) => o !== t) }, Ea(), Le();
  }
  function or(t) {
    document.querySelector("home-assistant") && (j.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ir(t, a) {
    if (t.startsWith("path:")) {
      or(t.slice(5));
      return;
    }
    Gs("summary:" + t, a);
  }
  async function rr() {
    const t = (f) => Promise.resolve().then(() => N(f)).catch(() => null), [a, o, l, p] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Jc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), h = (a == null ? void 0 : a.value) || {};
    q = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, bt = (o == null ? void 0 : o.value) || {}, Mt = (l == null ? void 0 : l.value) || {}, Jt = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], pe = null, Object.keys(k).length && Le(), _n(), sl = !0, Nr();
  }
  const Pr = "HomeCore";
  async function _n() {
    var l, p, h;
    const t = location.pathname.split("/")[1], a = q.named || [];
    if (!((p = (l = i()) == null ? void 0 : l.user) != null && p.is_admin) || !t || a.includes(t)) return;
    const o = () => {
      q = { ...q, named: [...a, t] }, Ea();
    };
    try {
      const f = (h = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((D) => D.url_path === t);
      if (!f || f.mode === "yaml") return;
      if (f.title === Pr) {
        o();
        return;
      }
      const m = await N({ type: "lovelace/config", url_path: t }), y = ((m == null ? void 0 : m.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((R) => R.cards || [])]);
      if (!y.length || !y.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: Pr }), o();
    } catch {
    }
  }
  let En = null, ms = 0, gs = !1;
  const Po = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return Rh.includes(a) && (a !== "binary_sensor" || Gl.includes(o) || !!rp[o]);
  }, Io = (t) => t.startsWith("binary_sensor.") ? rp[Kt(t).device_class] : null;
  async function Ir() {
    var t;
    if (!(gs || Date.now() - ms < 30 * 1e3)) {
      gs = !0, ms = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Po), o = a.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        En = Array.isArray(o) ? o.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        En = null;
      }
      gs = !1, Le();
    }
  }
  function vs() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = (p) => {
      if (!k[p.entity_id] || !Po(p.entity_id) || !lr(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (Io(p.entity_id)) {
        const f = a.get(p.entity_id);
        p.state === "on" ? (!f || p.when > f.when + 1) && a.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : f && !f.cleared && p.when > f.when && (f.cleared = p.when);
        return;
      }
      const h = t.get(p.entity_id);
      (!h || p.when > h.when + 1) && t.set(p.entity_id, p);
    };
    [...En || []].sort((p, h) => p.when - h.when).forEach(o);
    const l = En ? ms / 1e3 - 5 : 0;
    return Object.keys(k).forEach((p) => {
      var m;
      const h = k[p], f = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      f > l && o({ entity_id: p, state: h.state, when: f, context_user_id: (m = h.context) == null ? void 0 : m.user_id });
    }), [...t.values(), ...a.values()].sort((p, h) => h.when - p.when).slice(0, Nh);
  }
  function ld(t) {
    var l;
    const a = t.context_user_id && Object.keys(k).find((p) => p.startsWith("person.") && Kt(p).user_id === t.context_user_id);
    if (a) return Bt(a);
    const o = (l = i()) == null ? void 0 : l.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function bs(t) {
    const a = t.entity_id.split(".")[0], o = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Re(o).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Re(o).toLowerCase() : a === "binary_sensor" ? o === "on" ? "opened" : "closed" : a === "climate" ? o === "off" ? "turned off" : "set to " + Re(o).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Re(o).toLowerCase() : a === "alarm_control_panel" ? (ip[o] || Re(o)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Re(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Re(o).toLowerCase();
  }
  function ws(t) {
    const a = t.entity_id, o = t.alarm && Io(a), l = Bt(a) + " " + (o ? o[0] : bs(t)), p = o ? Mn(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + Mn(t.cleared * 1e3) : "") : [ld(t), Mn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + Ze(a, oa(a)) + '></div><button class="tfName" type="button" data-more="' + J(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + J(l + ", " + p + ". More info") + '"><span class="activityRowName">' + J(l) + '</span><span class="activityRowMeta">' + J(p) + "</span></button></div>";
  }
  let bo = null, xs = 0;
  const dd = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Da() {
    var a;
    if (Date.now() - xs < 5 * 60 * 1e3) return;
    xs = Date.now();
    const t = [];
    try {
      const o = ((a = await N({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (p) => o.filter((h) => h.type === p).flatMap((h) => p === "grid" ? (h.flow_from || []).map((f) => f.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [p, h, f] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!f.length) continue;
        const m = await Promise.all(f.map((y) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: y, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        t.push({ key: p, name: h, id: f[0], ids: f, value: m.reduce((y, D) => y + D, 0), unit: Kt(f[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    bo = t, Le();
  }
  let Dn = null, Ho = [];
  function dl() {
    var h;
    const t = Ho = bo != null && bo.length ? bo : dd.map(([f, m, y, D]) => {
      const R = "sensor.made_up_energy_" + f;
      return k[R] = { entity_id: R, state: String(y), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: m + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: f, name: m, id: R, value: y, unit: D };
    });
    zt.clear(), t.some((f) => f.id === Dn) || (Dn = t[0].id);
    const a = t.map((f) => {
      const m = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, y = Ph[f.key], D = f.id === Dn;
      return zt.set(f.id, { name: f.name, text: m, icon: y }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + J(f.id) + '" aria-pressed="' + D + '" aria-label="' + J(f.name + ", " + m) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ze("", y, f.name) + '></div><div><div class="activityRowName">' + J(f.name) + '</div><div class="activityRowMeta">' + J(m) + "</div></div></div>";
    }), o = t.find((f) => f.id === Dn), l = (((h = ze().opts.energy) == null ? void 0 : h.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + J(o.id) + '" role="img" aria-label="' + J(o.name) + ', last 24 hours"></svg></div>';
    return ho("dash:energy", 0, "Energy today", a, p, Gn().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function ys(t) {
    const a = S.querySelector(".tfDash-energy"), o = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !o || t === Dn || (Dn = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const p = l.dataset.energyPick === t;
      l.classList.toggle("picked", p), l.setAttribute("aria-pressed", String(p));
    }), o.dataset.graph = t, o.dataset.drawn = "", qe.set("dash:energy", dl()), Kr(!0));
  }
  const cl = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ks = /* @__PURE__ */ new Map();
  async function Hr(t) {
    const a = /* @__PURE__ */ new Date(), o = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), p = a.getMinutes() / 60, h = Array.from({ length: 24 }, (m, y) => y <= l ? 0 : null);
    if (!t.ids) {
      const m = cl[t.key] || cl.electricity, y = m.map((R, I) => I < l ? R : I === l ? R * p : 0), D = y.reduce((R, I) => R + I, 0) || 1;
      return h.map((R, I) => R == null ? null : t.value * y[I] / D);
    }
    const f = ks.get(t.id);
    if (f && f.day === o && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const m = await N({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((R) => ((m == null ? void 0 : m[R]) || []).forEach((I) => {
        const Q = typeof I.start == "number" ? I.start : Date.parse(I.start), U = new Date(Q).getHours();
        Q >= o && U < l && (h[U] += Number(I.change) || 0);
      }));
      const y = new Date(a).setMinutes(0, 0, 0), D = await Promise.all(t.ids.map((R) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: R, fixed_period: { start_time: new Date(y).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((I) => Number(I == null ? void 0 : I.change) || 0, () => 0)));
      h[l] = D.reduce((R, I) => R + I, 0);
    } catch {
    }
    return ks.set(t.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function pl(t, a) {
    const o = await Hr(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), p = Math.max(60, t.clientHeight || 130), h = 18, f = p - 18, m = l / 24, y = m * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), R = o.map((mt) => mt ?? 0), I = Math.max(0, ...R), Q = (mt) => f - (I > 0 ? mt / I * (f - h) : 0), U = (mt) => mt.toLocaleString(void 0, { maximumFractionDigits: mt < 10 ? 2 : 1 }) + " " + a.unit, St = (mt) => String(mt).padStart(2, "0") + ":00", nt = I > 0 ? R.indexOf(I) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + p), t.setAttribute("aria-label", a.name + " today by the hour: " + U(a.value) + (nt >= 0 ? ", most " + U(I) + " at " + St(nt) : "")), t.innerHTML = [h, (h + f) / 2, f].map((mt) => '<line x1="0" x2="' + l + '" y1="' + mt + '" y2="' + mt + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((mt, W) => mt > 0 ? '<rect x="' + (W * m + (m - y) / 2).toFixed(1) + '" y="' + Q(mt).toFixed(1) + '" width="' + y.toFixed(1) + '" height="' + (f - Q(mt)).toFixed(1) + '" rx="2" fill="' + (W === D ? "var(--primary)" : "var(--text)") + '"' + (W === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((mt) => '<text x="' + (mt * m).toFixed(1) + '" y="' + (p - 3) + '">' + String(mt).padStart(2, "0") + "</text>").join("") + (nt >= 0 ? '<text x="0" y="11">Most: ' + J(U(I)) + " at " + St(nt) + "</text>" : "");
  }
  function sr(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, l) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Ms(t) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, o] = t.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const l = o.getTotalLength();
    o.animate([{ strokeDasharray: l, strokeDashoffset: l }, { strokeDasharray: l, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let fn = null, wi = 0;
  const lr = (t) => !t.startsWith("light.") || Ih.includes((Ce.get(t) || "").toLowerCase()), ul = () => Math.max(2, Fo((S == null ? void 0 : S.clientWidth) || 0).n), Fr = (t) => {
    const a = go(t);
    return a.sections.map((o, l) => o && (a.parts || [])[l]).filter(Boolean);
  }, fl = (t) => Fr(t).slice(0, Rn(t) - 1);
  function hl(t) {
    const a = ze().tiles;
    if (a) return a.filter((l) => k[l] || Vn(l));
    if (!fn) {
      const l = (p) => {
        var h;
        return (((h = k[p]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (aa[p] || 0);
      };
      fn = {
        lights: we.rooms.flatMap((p) => p.lights).filter((p) => {
          var h;
          return lr(p) && ((h = k[p]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((p, h) => l(h) - l(p) || Bt(p).localeCompare(Bt(h))),
        climates: we.rooms.flatMap((p) => p.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = fn.climates.filter((l) => k[l]).slice(0, t > 3 ? 2 : 1);
    return [...fn.lights.filter((l) => k[l]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const wo = (t, a, o, l) => (p) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + o + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function cd(t, a) {
    var h, f;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + J(((f = (h = i()) == null ? void 0 : h.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (m) => '<div class="tfDashBarRow" data-tf data-k="sums">' + wo("tfDash-bar", "sums-bar", "Summaries", !1)(m).replace(" data-tf", "") + "</div>", tiles: a.map((m) => ({ key: "sum:" + m.key, html: hs(m) })) }), un.length && t.push({ key: "areas", html: tr(0) });
    const o = ll();
    o.length && t.push({ key: "favs", wrap: wo("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((m) => ({ key: "fav:" + m, html: bi(m, { area: !0 }) })) });
    const l = vs();
    t.push({ key: "dash:act", html: ho("dash:act", 0, "Activity", l.length ? l.map(ws) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: dl() });
    const p = ul();
    return wi = p, hl(p >= 3 ? p : p * 2).forEach((m) => t.push({
      key: "dash:tile:" + m,
      wrap: (y) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + J(m) + '">' + y + "</div>",
      tiles: [{ key: m, html: An(m) ? id(Vn(m), m) : Yt(m, !1, fl(m)) }]
    })), Ir(), Da(), t;
  }
  const dr = 252, Ke = 16, cr = 200, xi = Math.round(dr * 1.25), Un = 60, hn = Un + Ke, yi = 3, pr = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, ki = ["wx", "favs", "act", "energy", "avg"], Yn = ["XS", "S", "M", "L", "XL"], Ss = Yn.length, pd = ["Narrow", "Wide", "Really wide"], Or = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Zn = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && _e(t) ? Ss : Math.min(Ss, Fr(t).length + 1), Rn = (t) => {
    const a = ze().opts[t] || {}, o = Zn(t), l = Number(a.h) || (a.tall ? 5 : Or[t] || xo);
    return Math.max(1, Math.min(o, l));
  }, xo = 2, Mi = 90, ud = 56, Ka = (t) => {
    var a;
    return pr[t] || (t.startsWith("room:") ? ((a = un.find((o) => "room:" + o.id === t)) == null ? void 0 : a.name) || "Area" : Bt(t));
  }, ml = 409, fd = 128;
  let La = !1, Me = null, ga = null, ur = !1, Kn = /* @__PURE__ */ new Map(), fr = 0, $a = 0;
  const yo = ["title", "sums"], Fo = (t) => {
    const a = Math.max(1, Math.floor((t + Ke) / (cr + Ke)));
    return { n: a, w: Math.max(1, Math.min(xi, Math.floor((t - (a - 1) * Ke) / a))) };
  }, ze = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...q.dash || {} }, a = me.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function Wr(t) {
    q = { ...q, dash: { ...t, known: me } }, Ea();
  }
  function ko() {
    const t = (a) => S.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", la.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", la.avg, 2],
      ...me.map((a) => [a, la[a], 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, o, l, p = !1]) => ({ key: a, el: o, span: l, tile: p }));
  }
  const Ha = (t, a, o) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && ze().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((ml + Math.max(0, un.length - 1) * (fd + Ke) + Ke) / (o + Ke))) : Math.min(a, ze().spans[t.key] ?? t.span);
  }, Fa = (t) => Rn(t.key);
  function gl(t, a, o = null) {
    const l = ze().cells, p = t.every((m) => !l[m.key] || l[m.key].col + m.cols <= a), h = (m) => l[m.key] || { row: 1e9, col: 0 };
    return (() => {
      const m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), D = (nt, mt, W, kt) => {
        for (let V = mt; V < mt + kt; V++) for (let qt = nt; qt < nt + W; qt++) if (m.has(qt + "," + V)) return !1;
        return !0;
      }, R = (nt, mt, W) => {
        for (let kt = W; kt < W + nt.rows; kt++) for (let V = mt; V < mt + nt.cols; V++) m.add(V + "," + kt);
        y.set(nt.key, { col: mt, row: W, cols: nt.cols, rows: nt.rows });
      }, I = (nt, mt, W) => {
        for (mt = Math.max(0, Math.min(a - nt.cols, mt)), W = Math.max(0, W); !D(mt, W, nt.cols, nt.rows); ) W++;
        R(nt, mt, W);
      }, Q = (nt) => {
        for (let mt = 0; ; mt++) for (let W = 0; W <= a - nt.cols; W++) if (D(W, mt, nt.cols, nt.rows)) {
          R(nt, W, mt);
          return;
        }
      };
      o && I(o, Me.col, Me.row);
      const U = t.filter((nt) => nt !== o), St = (nt, mt) => h(nt).row - h(mt).row || h(nt).col - h(mt).col;
      return p ? (U.filter((nt) => l[nt.key]).sort(St).forEach((nt) => I(nt, l[nt.key].col, l[nt.key].row)), U.filter((nt) => !l[nt.key]).forEach(Q), y) : ([...U].sort(St).forEach(Q), y);
    })();
  }
  function hd(t, a) {
    const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), p = (h, f, m) => {
      for (let y = f; y < f + m.rows; y++) for (let D = h; D < h + m.cols; D++) if (o.has(D + "," + y)) return !1;
      return !0;
    };
    return t.forEach((h) => {
      for (let f = 0; ; f++) {
        let m = 0;
        for (; m <= a - h.cols && !p(m, f, h); ) m++;
        if (!(m > a - h.cols)) {
          for (let y = f; y < f + h.rows; y++) for (let D = m; D < m + h.cols; D++) o.add(D + "," + y);
          l.set(h.key, { col: m, row: f, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), l;
  }
  function hr() {
    const t = ze(), a = new Set(t.hidden), o = ko().filter((f) => !yo.includes(f.key));
    let l = Kn;
    if (!l.size) {
      const f = t.pegs || 4, m = o.filter((y) => !a.has(y.key));
      m.forEach((y) => {
        y.cols = Ha(y, f, dr), y.rows = Fa(y) ?? xo;
      }), l = gl(m, f);
    }
    const p = (f) => !a.has(f.key) && l.get(f.key) || { row: 1e9, col: 0 };
    o.sort((f, m) => p(f).row - p(m).row || p(f).col - p(m).col);
    const h = (t.phone || []).map((f) => o.find((m) => m.key === f && !a.has(f))).filter(Boolean);
    return [...h, ...o.filter((f) => !h.includes(f))];
  }
  const Cs = () => {
    const t = hr();
    t.forEach((a, o) => a.el.style.setProperty("--o", String(3 + o))), mr([...ko().filter((a) => yo.includes(a.key)), ...t].map((a) => a.el));
  };
  function mr(t) {
    if (Me) return;
    const a = n.activeElement;
    let o = null;
    for (const l of new Set(t.map((p) => {
      for (; p && p.parentElement !== S; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = o ? o.nextSibling : S.querySelector(":scope > [data-tf]");
      if (l !== p)
        try {
          S.moveBefore ? S.moveBefore(l, p) : S.insertBefore(l, p);
        } catch {
          S.insertBefore(l, p);
        }
      o = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const Oo = (t, a) => Wr({ ...t, cells: a, pegs: Fo(S.clientWidth).n });
  function Ra() {
    var kt;
    if (!w || !S) return;
    const t = S.clientWidth, a = t < 2 * dr + Ke, o = g.classList.contains("tfDash"), { n: l, w: p } = a ? { n: 2, w: Math.floor((t - Ke) / 2) } : Fo(t);
    ae.classList.add("tfPegs"), ae.style.setProperty("--peg-n", l), ae.style.setProperty("--peg-w", p + "px");
    const h = new Set(ze().hidden);
    me.forEach((V) => {
      var qt;
      return (qt = la[V]) == null ? void 0 : qt.classList.toggle("tfNotAdded", h.has(V) && !(Me != null && Me.fromTray && Me.key === V));
    }), g.classList.toggle("tfBoard", o), g.classList.toggle("tfEditing", o && La && !a);
    const f = c("dashEditNav");
    f && (f.hidden = !o || a, f.classList.toggle("active", La), f.setAttribute("aria-pressed", String(La)), f.setAttribute("aria-label", La ? "Done editing" : "Edit the dashboard"), f.title = La ? "Done" : "Edit", f.innerHTML = La ? Ah : op);
    const m = o ? ko() : [];
    if (!o) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((V) => {
        V.classList.remove("tfBoardItem", "tfBoardHidden"), V.style.left = V.style.top = V.style.width = V.style.height = "";
      }), (kt = S.querySelector(".tfDash-act > .activityRows")) == null || kt.style.removeProperty("max-height"), Ts(!1), g.classList.contains("tfDash") && Cs(), va();
      return;
    }
    S.style.setProperty("--peg-w", p + "px");
    const y = new Set(ze().hidden), D = p + Ke;
    Me != null && Me.fromTray && y.delete(Me.key), m.forEach((V) => V.el.classList.toggle("tfBoardHidden", y.has(V.key)));
    const R = m.filter((V) => !y.has(V.key) && getComputedStyle(V.el).display !== "none");
    let I = 0;
    R.filter((V) => yo.includes(V.key)).forEach((V) => {
      V.el.classList.add("tfBoardItem"), Object.assign(V.el.style, { width: t + "px", height: "", left: "0px", top: I + "px" });
      const qt = V.key === "sums" && V.el.querySelector(".tfDash-bar"), Pe = qt ? qt.querySelectorAll(".activityRow").length : 0;
      qt && (qt.style.maxWidth = "none");
      for (let ge = 1; qt && ge <= Pe && (qt.style.setProperty("--bar-cols", String(Math.ceil(Pe / ge))), !(qt.offsetWidth <= t)); ge++)
        ;
      qt && (qt.style.maxWidth = ""), I += V.el.offsetHeight + Ke;
    }), $a = I;
    const Q = R.filter((V) => !yo.includes(V.key));
    Q.forEach((V) => {
      V.cols = Ha(V, l, p), V.el.classList.add("tfBoardItem"), V.el.style.width = (V.cols === l ? t : V.cols * p + (V.cols - 1) * Ke) + "px", V.el.style.height = "", V.rows = Fa(V) ?? Math.max(1, Math.ceil((V.el.offsetHeight + Ke - 6) / hn));
    });
    const U = Me && Q.find((V) => V.key === Me.key), St = a && hr().map((V) => V.key), nt = (V) => St.includes(V.key) ? St.indexOf(V.key) : -1, mt = a ? hd([...Q].sort((V, qt) => nt(V) - nt(qt)), l) : gl(Q, l, U);
    mt.forEach((V) => Object.assign(V, { x: V.cols === l ? 0 : V.col * D, y: $a + V.row * hn, w: V.cols === l ? t : V.cols * p + (V.cols - 1) * Ke, h: V.rows * hn - Ke })), Q.forEach((V) => {
      const qt = mt.get(V.key);
      V.el.style.height = qt.h + "px", V.el.dataset.rows = Rn(V.key), V.el.toggleAttribute("data-narrow", !a && qt.cols === 1 && l > 1), V.el.dataset.cols = qt.cols, V.el.classList.contains("tfDac") && V.el.style.setProperty("--tf-dac-pad", qt.h - Mi + "px"), !(V === U && !Me.fromTray) && (V.el.style.left = qt.x + "px", V.el.style.top = qt.y + "px");
    }), a || (Kn = mt), mr([...R.filter((V) => yo.includes(V.key)), ...Q.slice().sort((V, qt) => mt.get(V.key).row - mt.get(qt.key).row || mt.get(V.key).col - mt.get(qt.key).col)].map((V) => V.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([V, qt]) => {
      const Pe = mt.get(V), ge = Pe && S.querySelector(qt), Sa = ge == null ? void 0 : ge.querySelector(":scope > .activityRows"), Xt = ge == null ? void 0 : ge.querySelector(":scope > .activityHeader");
      if (!Sa || !Xt) return;
      const Ve = Sa.getBoundingClientRect().top - ge.getBoundingClientRect().top, Cr = Pe.rows === 1 ? Pe.h : Math.floor(Pe.h - Ve - parseFloat(getComputedStyle(ge).paddingBottom)), Rl = Math.max(1, Math.floor(Cr / ud));
      Sa.style.setProperty("--fill-row", (Cr / Rl).toFixed(2) + "px"), Sa.style.maxHeight = Cr + "px";
    }), fr = Math.max(0, ...[...mt.values()].map((V) => V.row + V.rows));
    let W = $a + fr * hn - Ke;
    W = Ts(La && !a, Q, mt, W, l, p), S.style.height = W + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), m.forEach((V) => vl.observe(V.el)), Kr(), va();
  }
  const qr = () => {
    ur || (ur = !0, requestAnimationFrame(() => {
      ur = !1, Ra();
    }));
  }, vl = new ResizeObserver(() => {
    Me || qr();
  });
  function Ts(t, a = [], o = /* @__PURE__ */ new Map(), l = 0, p = 1, h = dr) {
    S.querySelectorAll(".tfEditChips").forEach((R) => {
      (!t || !R.closest(".tfBoardItem")) && R.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((R) => R.remove()), S.querySelectorAll(".tfBoardItem").forEach((R) => [...R.children].forEach((I) => {
      I.classList.contains("tfEditChips") || I.toggleAttribute("inert", t);
    }));
    let f = S.querySelector(".tfBoardCells"), m = S.querySelector(".tfBoardLand");
    if (!t)
      return f == null || f.remove(), m == null || m.remove(), Xa(), l;
    const y = fr + yi;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), S.prepend(f)), f.style.top = $a + "px", f.dataset.size !== p + "x" + y + "x" + h && (f.dataset.size = p + "x" + y + "x" + h, f.style.gridTemplateColumns = "repeat(" + p + "," + h + "px)", f.innerHTML = "<i></i>".repeat(p * y)), l = Math.max(l, $a + y * hn - Ke), a.forEach((R) => {
      const I = R.el;
      !I || I.querySelector(":scope > .tfEditChips") || I.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + qd + '</span><button class="tfEditChip" type="button" data-board-more="' + J(R.key) + '" aria-label="' + J(Ka(R.key)) + ' options" aria-haspopup="menu">' + Th + "</button></div>");
    }), Me && o.has(Me.key)) {
      m || (m = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(m));
      const R = o.get(Me.key);
      Object.assign(m.style, { left: R.x + "px", top: R.y + "px", width: R.w + "px", height: R.h + "px" });
    } else m == null || m.remove();
    const D = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const R = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((I) => {
        const Q = I.getBoundingClientRect(), U = I.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + J(U) + '" aria-label="Hide ' + J(Bt(U)) + ' from the dashboard" style="left:' + Math.round(Q.right - R.left - 42) + "px;top:" + Math.round(Q.top - R.top + (Q.height - 32) / 2) + 'px">' + ep + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let $n = "";
  function mn(t) {
    La = t, t || (Me = null, Bn = Nn = !1, Xa()), Ra(), t ? $n = JSON.stringify(q) : $n && JSON.stringify(q) !== $n && pa("Changes saved");
  }
  function Ls(t, a) {
    var mt, W;
    Xa();
    const o = Kn.get(t), { n: l } = Fo(S.clientWidth), p = ze(), h = p.spans[t] ?? (An(t) ? 1 : 2);
    if (!o) return;
    const f = o.cols >= l, m = (kt, V, qt) => '<button type="button" role="menuitem" data-board-act="' + kt + '"' + (qt ? " disabled" : "") + ">" + V + "</button>", y = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    y.setAttribute("role", "menu"), y.setAttribute("aria-label", Ka(t) + " options");
    const D = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), R = Zn(t), I = Rn(t), Q = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Yn.map((kt, V) => '<button type="button" role="menuitemradio" aria-checked="' + (V + 1 === I) + '" aria-label="' + kt + ", " + (V + 1) + (V ? " rows" : " row") + '" data-board-act="h:' + (V + 1) + '"' + (V < R ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>", U = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], St = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + U.map(([kt, V, qt]) => '<button type="button" role="menuitemradio" aria-checked="' + (qt && (V === "full" ? o.cols === l : o.cols === V && !(V === l && p.spans.areas === "full"))) + '" aria-label="' + kt + (V === "full" ? "" : ", " + V + " columns") + '" data-board-act="w:' + V + '"' + (qt ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>" : ki.includes(t) || An(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + pd.map((kt, V) => '<button type="button" role="menuitemradio" aria-checked="' + (V + 1 === Math.min(h, l)) + '" aria-label="' + kt + ", " + (V + 1) + (V ? " columns" : " column") + '" data-board-act="w:' + (V + 1) + '"' + (V < l ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>" : "";
    y.innerHTML = Q + St + (t === "energy" ? m("graph", (((mt = p.opts.energy) == null ? void 0 : mt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + m("left", "Move left", f || o.col === 0) + m("right", "Move right", f || o.col + o.cols >= l) + m("up", "Move up", o.row <= 0) + m("down", "Move down") + (D ? m("remove", "Remove") : m("hide", "Hide")), S.appendChild(y);
    const nt = Math.min(o.x + o.w - y.offsetWidth, S.clientWidth - y.offsetWidth);
    Object.assign(y.style, { left: Math.max(0, nt) + "px", top: o.y + 28 + "px" }), ga = { key: t, menu: y, opener: a }, (W = y.querySelector("button:not([disabled])")) == null || W.focus();
  }
  function Xa(t) {
    if (!ga) return;
    const { menu: a, opener: o } = ga;
    ga = null, a.remove(), t && (o == null || o.focus());
  }
  const Wo = () => Object.fromEntries([...Kn].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function bl(t, a) {
    var f, m;
    if (a === "remove") {
      Xa(), zo(t);
      return;
    }
    const o = q, l = ze(), p = Wo(), h = p[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((f = l.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (p[t] = { ...h, col: h.col - 1 }), a === "right" && (p[t] = { ...h, col: h.col + 1 }), a === "up" && (p[t] = { ...h, row: h.row - 1 }), a === "down" && (p[t] = { ...h, row: h.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Me = { key: t, col: p[t].col, row: p[t].row }), Oo(l, p), Me && (Ra(), Me = null, Oo(ze(), Wo())), Xa(), a === "graph" && (qe.delete("dash:energy"), Le()), a.startsWith("h:") && t.includes(".") && Le(), Ra(), a !== "hide" ? (m = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || m.focus() : pa(Ka(t) + " hidden", Ne(o));
  }
  const Ja = (t) => {
    var a;
    return me.includes(t) && !(((a = q.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function qo(t) {
    const a = ze(), o = Ka(t) + Ja(t);
    Wr({ ...a, hidden: a.hidden.filter((l) => l !== t) }), Ra(), pa(o);
  }
  const Si = () => ze().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ze().hidden.includes(t));
  function jo(t, a) {
    const o = ze();
    Oo({ ...o, tiles: t, hidden: o.hidden.filter((l) => !l.includes(".")) }, a), Le(), va();
  }
  const As = (t) => {
    jo([...Si().filter((a) => a !== t), t], Wo()), pa(Ka(t) + " added"), Ci(t);
  }, zo = (t) => {
    const a = q, o = Wo();
    delete o[t], jo(Si().filter((l) => l !== t), o), pa(Ka(t) + " removed", Ne(a));
  };
  let _s = 0;
  function pa(t, a = null) {
    var f;
    const o = c("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const m = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      m.addEventListener("click", () => {
        clearTimeout(_s), o.classList.remove("show", "withAction"), a();
      }), o.appendChild(m);
    }
    const l = g.getBoundingClientRect(), p = (f = n.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), h = fe.classList.contains("open") && !gn ? Math.min(l.right, fe.getBoundingClientRect().left) : l.right;
    o.style.left = (l.left + h) / 2 + "px", o.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!a), clearTimeout(_s), _s = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const jr = 700, md = 1e3, Aa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Aa.setAttribute("role", "tooltip"), Aa.setAttribute("aria-hidden", "true"), g.appendChild(Aa);
  let zr = null, Vo = 0, Oa = 0, wl = -1 / 0;
  const Es = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, xl = (t) => {
    for (let a = t; a && a !== g; a = a.parentElement) if (Es(a)) return a;
    return null;
  };
  function Go(t, a) {
    clearTimeout(Vo), clearTimeout(Oa);
    const o = () => {
      if (!t.isConnected) return;
      zr = t, Aa.textContent = a, Aa.hidden = !1;
      const l = t.getBoundingClientRect(), p = Aa.getBoundingClientRect(), h = l.top - p.height - 8 >= 8 ? l.top - p.height - 8 : l.bottom + 8;
      Aa.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, l.left + l.width / 2 - p.width / 2)) + "px", Aa.style.top = h + "px";
    };
    !Aa.hidden || performance.now() - wl < md ? o() : Vo = setTimeout(o, jr);
  }
  function Vr() {
    clearTimeout(Vo), clearTimeout(Oa), Aa.hidden || (wl = performance.now()), Aa.hidden = !0, zr = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Aa.contains(t.target)) {
      clearTimeout(Oa);
      return;
    }
    const a = xl(t.target);
    if (a && Dt.names === "scroll" && a.matches(Xn)) {
      Ur(a);
      return;
    }
    if (a) {
      a !== zr ? Go(a, a.textContent.trim()) : clearTimeout(Oa);
      return;
    }
    clearTimeout(Vo), clearTimeout(Oa), Oa = setTimeout(Vr, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let o = [a, ...a.querySelectorAll("*")].filter(Es);
    Dt.names === "scroll" && (o.filter((p) => p.matches(Xn)).forEach(Ur), o = o.filter((p) => !p.matches(Xn))), o.length && Go(a, o.map((p) => p.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === zr && Vr();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Aa.hidden && (t.stopPropagation(), Vr());
  }, !0), window.addEventListener("scroll", () => {
    (!Aa.hidden || Vo) && Vr();
  }, { capture: !0, passive: !0 });
  const Xn = ".activityRowName,.activityRowMeta", Gr = /* @__PURE__ */ new WeakSet();
  function Ur(t) {
    var o;
    if (Dt.names !== "scroll" || Gr.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
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
      const p = l / 30 * 1e3, h = p + 1e3 + p;
      t.style.textOverflow = "clip";
      const f = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -l + "px", offset: p / h },
        { textIndent: -l + "px", offset: (1e3 + p) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      f.onfinish = f.oncancel = () => {
        t.style.textOverflow = "", Gr.delete(t);
      };
    }, 600);
  }
  const Uo = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (Uo.unobserve(a.target), Ur(a.target));
  }), { threshold: 1 });
  let Mo = !1;
  new MutationObserver(() => {
    Mo || Dt.names !== "scroll" || (Mo = !0, setTimeout(() => {
      Mo = !1, n.querySelectorAll(Xn).forEach((t) => {
        !t.dataset.glided && Es(t) && (t.dataset.glided = "1", Uo.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Ne = (t) => () => {
    q = t, Ea(), Le(), Ra(), va();
  };
  function Ci(t) {
    const a = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var f;
      const o = a();
      if (!o) return;
      const l = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, p = o.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && o.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const h = (m) => "0 0 0 4px color-mix(in srgb,var(--primary) " + m + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + m + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, Yr(t) ? 260 : 0);
  }
  function Yr(t) {
    const a = Kn.get(t);
    if (!a || !fe.classList.contains("open") || gn) return !1;
    const { n: o, w: l } = Fo(S.clientWidth), p = fe.getBoundingClientRect().left - S.getBoundingClientRect().left, h = (y) => y * (l + Ke) + a.cols * l + (a.cols - 1) * Ke <= p;
    if (h(a.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    Kn.forEach((y, D) => {
      if (D !== t) for (let R = y.row; R < y.row + y.rows; R++) for (let I = y.col; I < y.col + y.cols; I++) f.add(I + "," + R);
    });
    const m = (y, D) => {
      for (let R = D; R < D + a.rows; R++) for (let I = y; I < y + a.cols; I++) if (f.has(I + "," + R)) return !1;
      return !0;
    };
    for (let y = 0; y <= fr; y++) for (let D = 0; D + a.cols <= o && h(D); D++)
      if (m(D, y))
        return Oo(ze(), { ...Wo(), [t]: { col: D, row: y } }), Ra(), !0;
    return !1;
  }
  const Ds = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, fe = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  fe.setAttribute("aria-label", "Edit the dashboard"), fe.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(fe);
  let gn = !1, Bn = !1, Nn = !1, Ti = !1, Ba = null, Jn = !1;
  const Rs = {}, Yo = (t, a) => {
    if (Rs[t] === a) return;
    Rs[t] = a;
    const o = fe.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = a, Te(o);
  }, Bs = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + J(Bt(t)) + '</span><span class="activityRowMeta">' + J(a) + "</span></span>", Zr = (t, a, o) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + J(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + qd + '</span><span class="tfIcon"' + Ze(t, oa(t)) + "></span>" + Bs(t, a ? "Hidden" + (Ce.get(t) ? " · " + Ce.get(t) : "") : Ce.get(t) || ea(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + J(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + J(Bt(t)) + ' on the dashboard">' + (a ? ep : Lh) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + J(t) + '" aria-label="Remove ' + J(Bt(t)) + ' from favourites">' + ap + "</button>" : "<span></span>") + "</li>";
  function Li(t, a, o, l) {
    const p = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((f) => a(f) && !o.has(f) && k[f].state !== "unavailable").filter((f) => {
      const m = (Bt(f) + " " + (Ce.get(f) || "") + " " + f).toLowerCase();
      return p.every((y) => m.includes(y));
    }).sort((f, m) => (Ce.get(f) || "~").localeCompare(Ce.get(m) || "~") || Bt(f).localeCompare(Bt(m))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + J(f) + '"><span class="tfIcon"' + Ze(f, oa(f)) + "></span>" + Bs(f, Ce.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function va() {
    const t = La && g.classList.contains("tfBoard");
    if (fe.classList.toggle("open", t), fe.classList.toggle("tucked", t && gn), fe.toggleAttribute("inert", !t), t || (Jn = !1), Ml(), !t) return;
    const a = fe.querySelector("[data-tray-tuck]");
    a.innerHTML = gn ? Vc : np, a.setAttribute("aria-expanded", String(!gn)), a.setAttribute("aria-label", gn ? "Show the edit tray" : "Tuck the edit tray away");
    const o = ze().hidden.filter((f) => ko().some((m) => m.key === f));
    Yo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + J(f) + '" aria-label="' + J(Ka(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + qd + "</span>" + J(Ka(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Yo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ze().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Jn + '">' + (Jn ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(q.favHidden || []), p = ia(), h = [...p, ...[...l].filter((f) => !p.includes(f) && k[f])];
    if (Yo("favs", h.map((f) => Zr(f, l.has(f), p.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), fe.querySelector('[data-pick="tiles"]').hidden = !Nn, fe.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Nn)), Nn && Yo("tilepick", Li(fe.querySelector("[data-tile-search]").value, (f) => Ul.includes(f.split(".")[0]), new Set(Si()), "data-tile-pick")), fe.querySelector('[data-tray="roompick"]').hidden = !Ti, fe.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Ti)), Ti) {
      const f = new Set(Si());
      Yo("roompick", un.filter((m) => !f.has("room:" + m.id)).map((m) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + J(m.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Ze("area:" + m.id, m.icon || "mdi:texture-box", m.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + J(m.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    fe.querySelector('[data-pick="favs"]').hidden = !Bn, fe.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Bn)), Bn && Yo("pick", Li(fe.querySelector("[data-fav-search]").value, (f) => Ds.test(f), new Set(ia()), "data-fav-pick")), Yo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (vi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + vi() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Zo = (t) => {
    q = { ...q, ...t }, Ea(), Le(), va();
  };
  function Ns(t, a) {
    const o = q, l = new Set(q.favHidden || []);
    a ? l.delete(t) : l.add(t), Zo({ favHidden: [...l] }), a ? pa(Bt(t) + " put back") : pa(Bt(t) + " hidden", Ne(o));
  }
  const gd = (t) => {
    const a = q;
    Zo({ favourites: ia().filter((o) => o !== t), favHidden: (q.favHidden || []).filter((o) => o !== t) }), pa(Bt(t) + " removed from favourites", Ne(a));
  }, vd = (t) => {
    Zo({ favourites: [...ia().filter((a) => a !== t), t], favHidden: (q.favHidden || []).filter((a) => a !== t) }), pa(Bt(t) + " added to favourites");
  };
  fe.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? mn(!1) : a.hasAttribute("data-tray-tuck") ? (gn = !gn, va()) : a.hasAttribute("data-phone-toggle") ? (Jn = !Jn, va(), Jn && ((o = Wa.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (qo(a.dataset.trayCard), va()) : a.dataset.favEye ? Ns(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? gd(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (Bn = !Bn, va(), Bn && fe.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? vd(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (Nn = !Nn, va(), Nn && fe.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? As(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (Ti = !Ti, va()) : a.dataset.roomPick ? As("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Zo({ suggest: !vi() }));
  }), fe.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && va();
  }), fe.addEventListener("keydown", (t) => {
    var o, l;
    const a = !!((l = (o = t.target).closest) != null && l.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? Nn : Bn) || (t.stopPropagation(), a ? Nn = !1 : Bn = !1, va(), fe.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function yl(t, a, o, l) {
    t.preventDefault();
    const p = t.clientX, h = t.clientY;
    let f = null, m = 0;
    const y = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (I) => {
      if (!f) {
        if (Math.hypot(I.clientX - p, I.clientY - h) < 4) return;
        f = a.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = a.offsetWidth + "px", g.appendChild(f);
      }
      f.style.transform = "translate(" + (I.clientX - 24) + "px," + (I.clientY - 24) + "px)";
      const Q = !gn && I.clientX >= fe.getBoundingClientRect().left;
      if (o === "card") {
        const nt = S.getBoundingClientRect(), { w: mt } = Fo(S.clientWidth);
        Me = !Q && I.clientX >= nt.left && I.clientX <= nt.right && I.clientY >= nt.top + $a ? { key: l, col: Math.max(0, Math.floor((I.clientX - nt.left) / (mt + Ke))), row: Math.max(0, Math.floor((I.clientY - nt.top - $a) / hn)), fromTray: !0 } : null, m || (m = requestAnimationFrame(() => {
          m = 0, Ra();
        }));
        return;
      }
      const U = S.querySelector(".tfDash-favs"), St = U == null ? void 0 : U.getBoundingClientRect();
      if (Ba = null, St && !Q && I.clientX >= St.left && I.clientX <= St.right && I.clientY >= St.top && I.clientY <= St.bottom) {
        let nt = 1 / 0;
        U.querySelectorAll('[data-k^="fav:"]').forEach((mt, W) => {
          const kt = mt.getBoundingClientRect(), V = Math.hypot(I.clientX - (kt.left + kt.width / 2), I.clientY - (kt.top + kt.height / 2));
          V < nt && (nt = V, Ba = { i: W, r: kt, after: I.clientX > kt.left + kt.width / 2 });
        }), Ba || (Ba = { i: 0, r: null, after: !1 });
      }
      Ba != null && Ba.r ? (y.isConnected || g.appendChild(y), Object.assign(y.style, { left: (Ba.after ? Ba.r.right : Ba.r.left) - 2 + "px", top: Ba.r.top + 8 + "px", height: Ba.r.height - 16 + "px" })) : y.remove();
    }, R = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), cancelAnimationFrame(m), f == null || f.remove(), y.remove(), o === "card") {
        if (!f) qo(l);
        else if (Me != null && Me.fromTray) {
          Ra();
          const nt = Ka(l) + Ja(l), mt = ze(), W = Wo();
          Me = null, Oo({ ...mt, hidden: mt.hidden.filter((kt) => kt !== l) }, W), pa(nt);
        }
        Me = null, Ra(), Le(), va();
        return;
      }
      if (!Ba) return;
      const I = new Set(q.favHidden || []);
      I.delete(l);
      const Q = ia().filter((nt) => nt !== l), U = Q.filter((nt) => !I.has(nt)), St = U[Math.min(Ba.i + (Ba.after ? 1 : 0), U.length)];
      Q.splice(St ? Q.indexOf(St) : Q.length, 0, l), Ba = null, Zo({ favourites: Q, favHidden: [...I] }), pa(Bt(l) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R);
  }
  const Ko = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, So = 136, Co = 288, kl = 0.8, Ai = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Wa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Wa.setAttribute("aria-label", "Phone order"), Wa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + ap + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(Wa);
  let $o = "";
  function Ml() {
    var m;
    const t = Jn && La && g.classList.contains("tfBoard") && !gn;
    if (Wa.classList.toggle("open", t), Wa.toggleAttribute("inert", !t), !t) return;
    const a = hr().filter((y) => !ze().hidden.includes(y.key)), o = a.length, l = (y) => Math.round(y * kl * 10) / 10 + "px", p = (y, D) => {
      const R = y.el.classList.contains("tfDac"), I = y.tile ? R ? Co : So : Ko[y.key] || So;
      return '<button class="tfPhoneBlock' + (y.tile ? " tile" : "") + '" type="button" data-phone-key="' + J(y.key) + '" style="min-height:' + l(I) + '" aria-label="' + J(Ka(y.key) + ", " + (D + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (y.tile ? Ze(y.key, oa(y.key)) : Ze(y.key, Ai[y.key])) + '></span><span class="tfPhoneName">' + J(Ka(y.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + J(((m = S.querySelector(".tfDashTitle")) == null ? void 0 : m.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(Ko.sums) + '"><span class="tfPhoneName">' + J(Ka("sums")) + "</span></div>" + a.map(p).join("");
    if (Wa.querySelector('[data-phone="note"]').innerHTML = ze().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === $o) return;
    $o = h;
    const f = Wa.querySelector('[data-phone="list"]');
    f.innerHTML = h, Te(f);
  }
  function Xo(t, a) {
    var o;
    Wr({ ...ze(), phone: t }), va(), a && ((o = Wa.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const Ps = () => [...Wa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Is(t, a) {
    t.preventDefault();
    const o = a.parentElement, l = Wa.querySelector(".tfPhoneScreen"), p = Ps().join();
    a.classList.add("moving");
    const h = (m) => {
      const y = l.getBoundingClientRect();
      m.clientY > y.bottom - 40 ? l.scrollTop += 12 : m.clientY < y.top + 40 && (l.scrollTop -= 12);
      const D = [...o.querySelectorAll("[data-phone-key]")].find((Q) => {
        const U = Q.getBoundingClientRect();
        return Q !== a && m.clientX >= U.left && m.clientX <= U.right && m.clientY >= U.top && m.clientY <= U.bottom;
      });
      if (!D) return;
      const R = D.getBoundingClientRect(), I = D.classList.contains("tile") ? m.clientX < R.left + R.width / 2 : m.clientY < R.top + R.height / 2;
      o.insertBefore(a, I ? D : D.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const m = Ps();
      $o = "", m.join() !== p ? Xo(m) : Ml();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  Wa.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && Is(t, a);
  }), Wa.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      Jn = !1, va(), (o = fe.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...p } = ze();
      Wr(p), va();
    }
  }), Wa.addEventListener("keydown", (t) => {
    var f, m, y, D;
    if (t.key === "Escape") {
      t.stopPropagation(), Jn = !1, va(), (f = fe.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const a = (D = (y = (m = t.target).closest) == null ? void 0 : y.call(m, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !o) return;
    t.preventDefault();
    const l = Ps(), p = l.indexOf(a), h = p + o;
    h < 0 || h >= l.length || ([l[p], l[h]] = [l[h], l[p]], Xo(l, a));
  });
  function _i(t, a) {
    t.preventDefault();
    const o = a.parentElement;
    a.classList.add("moving");
    const l = (h) => {
      const f = [...o.children].find((m) => {
        const y = m.getBoundingClientRect();
        return m !== a && h.clientY >= y.top && h.clientY <= y.bottom;
      });
      if (f) {
        const m = f.getBoundingClientRect();
        o.insertBefore(a, h.clientY < m.top + m.height / 2 ? f : f.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), a.classList.remove("moving");
      const h = new Set(ia());
      Rs.favs = null, Zo({ favourites: [...o.children].map((f) => f.dataset.trayFav).filter((f) => h.has(f)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  fe.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    a ? yl(t, a, "card", a.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? _i(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && yl(t, o, "fav", o.dataset.trayFav);
  });
  function gr(t) {
    if (!La || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), o = a && ko().find((I) => I.el === a);
    if (!o || yo.includes(o.key)) return;
    const l = Kn.get(o.key), { w: p } = Fo(S.clientWidth);
    if (!l) return;
    t.preventDefault(), Xa();
    const h = t.clientX, f = t.clientY;
    let m = !1, y = 0;
    const D = (I) => {
      const Q = I.clientX - h, U = I.clientY - f;
      if (!m) {
        if (Math.hypot(Q, U) < 4) return;
        m = !0, Me = { key: o.key, col: l.col, row: l.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + Q + "px," + U + "px)", Me.col = Math.round((l.x + Q) / (p + Ke)), Me.row = Math.round((l.y + U - $a) / hn), y || (y = requestAnimationFrame(() => {
        y = 0, Ra();
      }));
    }, R = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), m && (cancelAnimationFrame(y), Ra(), a.classList.remove("tfDragging"), a.style.transform = "", Me = null, Oo(ze(), Wo()), Ra(), Le());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R);
  }
  function Kr(t = !1) {
    const a = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const o = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === o) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = o;
    const p = Ho.find((h) => h.id === a.dataset.graph);
    p ? pl(a, p).then(() => {
      (t || l) && sr(a);
    }) : Ni(a.dataset.graph, a).then(() => {
      t && Ms(a);
    });
  }
  function $r() {
    var m, y, D;
    we = xe.model(i()), Nr(), k = we.states, k[(m = q.sources) == null ? void 0 : m.grid] && (we.grid = q.sources.grid), k[(y = q.sources) == null ? void 0 : y.alarm] && (we.security.alarms = [q.sources.alarm]), P.forEach((R, I) => {
      const Q = k[I], U = (Q == null ? void 0 : Q.attributes) || {};
      if (!Q || Date.now() - R.at > 2 * 60 * 1e3) {
        P.delete(I);
        return;
      }
      R.pos != null && Q.state !== "opening" && Q.state !== "closing" && Math.abs(Ga(I) - R.pos) < 1 && delete R.pos, R.tilt != null && Math.abs((U.current_tilt_position ?? -1) - R.tilt) < 1 && delete R.tilt, R.pos == null && R.tilt == null && P.delete(I);
    });
    const t = [];
    let a = 0;
    const o = vo();
    un = o.filter((R) => R.room).map((R) => R.room), un.some((R) => R.id === Pt) || (Pt = ((D = un[0]) == null ? void 0 : D.id) || null);
    const l = G === "weather" ? { key: "weather", name: "Weather" } : G && o.find((R) => R.key === G);
    if (l || (G = null), g.classList.toggle("tfAreaOpen", !!l), g.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), g.classList.toggle("tfDash", !l), Ce = /* @__PURE__ */ new Map(), we.rooms.forEach((R) => [...R.actions, ...R.plugs, ...R.readings, ...R.openings, ...R.solar, ...R.plants.flatMap((I) => [I.id, ...I.readings])].forEach((I) => Ce.set(I, R.name))), !l) return cd(t, Gn());
    if (t.push({ key: "areahead", html: Ei(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const p = l.ids, h = l.room ? l.room.id : l.key, f = l.room;
    return f != null && f.solar.length && t.push({ key: "energy:" + f.id, html: hi(f, ++a) }), f && (f.readings.length || f.plugs.length || f.power != null) && t.push({ key: "readings:" + f.id, html: Xi(f, ++a) }), f == null || f.plants.forEach((R) => t.push({ key: "plant:" + R.id, html: x(R, ++a) })), p.length && t.push({ key: "block:" + h, order: ++a, tiles: p.map((R) => ({ key: R, html: Yt(R) })) }), t;
  }
  const Ei = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Vc + '</button><div class="settingsTitle">' + J(t.name) + "</div></div>";
  let Jo = 0, qa = null;
  const Hs = (t) => t === "weather" ? la.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function Fs(t) {
    var a, o;
    G || (Jo = ti().scrollTop, qa = ((a = Hs(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), G = t, t.startsWith("room:") && (Pt = t.slice(5)), Pn(), ti().scrollTop = 0, (o = S.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Qo = null;
  function bd(t, a) {
    if (Qo == null || Qo(), a == null) return;
    const o = ti(), l = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const f = () => {
      cancelAnimationFrame(h), p.forEach((y) => window.removeEventListener(y, f, !0)), Qo = null;
    }, m = () => {
      const y = t();
      if (y != null && y.isConnected) {
        const D = y.getBoundingClientRect().top - a;
        Math.abs(D) > 0.5 && (o.scrollTop += D);
      }
      performance.now() < l ? h = requestAnimationFrame(m) : f();
    };
    p.forEach((y) => window.addEventListener(y, f, { capture: !0, passive: !0 })), Qo = f, m();
  }
  function vr() {
    var o;
    const t = G;
    G = null, Pn(), ti().scrollTop = Jo, bd(() => Hs(t), qa);
    const a = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? la.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || o.focus({ preventScroll: !0 });
  }
  const Os = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + J(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", br = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function ti() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function ei(t) {
    const a = ti(), o = (m) => {
      const y = m.getBoundingClientRect();
      return y.height && y.bottom > 0 && y.top < window.innerHeight;
    }, l = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((m) => !m.matches(".tfDashTiles") && o(m)), p = l == null ? void 0 : l.dataset.k, h = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const f = l != null && l.isConnected ? l : p && S.querySelector('[data-k="' + CSS.escape(p) + '"]');
    f != null && f.isConnected && h != null && (a.scrollTop += f.getBoundingClientRect().top - h);
  }
  function Pn() {
    if (!w || !S) return;
    const t = $r();
    S.querySelectorAll("[data-tf]").forEach((o) => o.remove()), qe.clear();
    const a = document.createElement("div");
    a.innerHTML = t.map((o) => o.tiles ? Os(o) : o.html).join(""), t.forEach((o) => o.tiles ? o.tiles.forEach((l) => qe.set(l.key, l.html)) : qe.set(o.key, o.html)), Er = br(t), S.append(...a.children), Ui(t.weather), Yi(), vl.disconnect(), Ra(), Te(S), Qr(S), Za(S), z(), at && Ni(at.id), Lo(), Ri(), tn(), requestAnimationFrame(ht);
  }
  const Sl = (t) => {
    var o;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (o = a.dataset) == null ? void 0 : o.act };
  }, wr = (t, a) => {
    var o;
    a && ((o = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Xr(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), l = a.querySelector(":scope > .tfDacPad");
    if (o)
      return (l == null ? void 0 : l.dataset.dac) !== o.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((h) => a.hasAttribute(h) ? t.setAttribute(h, a.getAttribute(h)) : t.removeAttribute(h)), [...t.style].filter((h) => h.startsWith("--") && !h.startsWith("--tf-")).forEach((h) => t.style.removeProperty(h)), [...a.style].forEach((h) => t.style.setProperty(h, a.style.getPropertyValue(h))), t);
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((h) => {
      a.hasAttribute(h.name) || t.removeAttribute(h.name);
    }), [...a.attributes].forEach((h) => t.setAttribute(h.name, h.value));
    const p = [...a.children];
    return [...t.children].forEach((h, f) => Xr(h, p[f])), t;
  }
  function Qa(t, a) {
    const o = document.createElement("div");
    o.innerHTML = a;
    const l = Sl(t), p = Xr(t, o.firstElementChild);
    Te(p), Qr(p), Za(p), wr(p, l);
  }
  function Le() {
    !w || !S || Me || ei(Ws);
  }
  function Ws() {
    if (!S.querySelector("[data-tf]")) {
      Pn();
      return;
    }
    const t = $r();
    if (br(t) !== Er) {
      Pn();
      return;
    }
    const a = (o) => [...M.keys()].some((l) => {
      const p = l.slice(l.indexOf("|") + 1);
      return o === p || o.endsWith(":" + p);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((l) => {
      if (qe.get(l.key) === l.html || a(l.key)) return;
      const p = S.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (p) {
        if (qe.set(l.key, l.html), at && at.key === l.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = Ia(at.id);
          return;
        }
        Qa(p, l.html), at && at.key === l.key && Ni(at.id), l.key.startsWith("energy:") && Lo();
      }
    })), Ri(), tn(), Tn(), z(), Qt == null || Qt.update(), Ma == null || Ma.forEach((o) => o.update()), g.classList.contains("tfDash") && qr(), requestAnimationFrame(ht);
  }
  const qs = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Re(t.color_mode)]],
    climate: (t) => [["Current temperature", Ca(t.current_temperature) + " °C"], ["Target", Ca(t.temperature) + " °C"], ["Action", Re(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Re(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Re(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ca(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Re(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Cl = (t) => {
    var o;
    const a = (((o = qs[t.split(".")[0]]) == null ? void 0 : o.call(qs, Kt(t))) || []).filter(([, l]) => l != null && l !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([l, p]) => '<div class="tfMoreRow"><span>' + J(l) + "</span><span>" + J(p) + "</span></div>").join("") + "</div>" : "";
  }, wd = (t) => Wi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Tl(t, a = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + J(l.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + l.ids.map((p) => bi(p, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const le = document.createElement("div");
  le.className = "tfMoreBackdrop", le.hidden = !0, g.appendChild(le);
  const js = (t, a) => {
    for (let o = t; o && o !== le; o = o.parentElement) {
      const l = getComputedStyle(o).overflowY;
      if ((l === "auto" || l === "scroll") && o.scrollHeight > o.clientHeight + 1 && (a < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Di = null;
  le.addEventListener("touchstart", (t) => {
    Di = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), le.addEventListener("touchmove", (t) => {
    var p, h;
    if (!Di || t.touches.length > 1 || (h = (p = t.target).closest) != null && h.call(p, "input,textarea,select")) return;
    const a = t.touches[0], o = Di.x - a.clientX, l = Di.y - a.clientY;
    Di = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(o) && !js(t.target, l) && t.preventDefault();
  }, { passive: !1 }), le.addEventListener("wheel", (t) => {
    js(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Qn() {
    const t = le.querySelector(".tfMorePair"), a = le.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Qn, { passive: !0 }), w && Xe();
  let to = [];
  const Ll = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function eo(t) {
    const a = (y, D = "") => '<div class="tfMoreHead">' + (wt != null && wt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Od + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + J(y) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", o = (y, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + J(y) + "</div>" + (D ? '<div class="tfMoreSub">' + J(D) + "</div>" : "") + "</div>", l = Tl;
    if (t === "favourites") {
      const y = ia(), D = new Set(y), R = [{ name: "Starred", ids: y }, { name: "Home", ids: we.homeVacuums }, { name: "Security", ids: [...we.security.alarms, ...we.security.locks] }, ...we.rooms.map((I) => ({ name: I.name, ids: [...I.actions, ...I.plugs] }))].map((I, Q) => Q ? { ...I, ids: I.ids.filter((U) => !D.has(U)) } : I).filter((I) => I.ids.length);
      return [a("Favourites"), o(y.length ? y.length + " starred" : "None starred"), l(R, { star: !0 }, !0)];
    }
    const p = (y, { name: D = "", alert: R = !1, plain: I = !1 } = {}) => {
      const Q = I ? [] : y.filter((nt) => Ul.includes(nt.split(".")[0])), U = y.filter((nt) => !Q.includes(nt)), St = (nt) => nt.startsWith("vacuum.") && Kt(nt).battery_level != null ? Kt(nt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + J(D) + "</div>" : "") + '<div class="tfMoreActions">' + Q.map((nt) => Yt(nt, !0)).join("") + U.map((nt) => bi(nt, { plain: I, alert: R, say: I ? St(nt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const y = Gn().find((Q) => Q.key === t.slice(8));
      if (!y) return null;
      const D = y.key === "light" ? (y.groups || []).flatMap((Q) => Q.ids) : [], R = D.some((Q) => {
        var U;
        return ((U = k[Q]) == null ? void 0 : U.state) === "on";
      }), I = D.length ? '<button class="primary" type="button" data-acts="' + Ya(D.map((Q) => ["light", R ? "turn_off" : "turn_on", Q])) + '">' + (R ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(y.name), '<div class="tfMoreNowRow">' + o(y.value) + I + "</div>", ...(y.groups || []).map((Q) => p(Q.ids, { name: Q.name === y.name ? "" : Q.name, alert: Q.alert, plain: y.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, y, D] = t.split(":"), R = we.rooms.find((U) => U.id === y), I = R && ma(R).find((U) => U.key === D);
      if (!I) return null;
      const Q = I.acts ? '<button class="primary" type="button" data-acts="' + Ya(I.acts) + '">' + (I.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(R.name + " " + I.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(I.value) + Q + "</div>", p(Ie(R, D))];
    }
    const h = t.split(".")[0], f = k[t], m = Ul.includes(h) ? go(t) : { sections: [] };
    return [
      a(Bt(t)),
      o(ea(t), f.last_changed && co(Date.parse(f.last_changed))),
      (wt == null ? void 0 : wt.at) && '<svg class="tfGraph tfDay" data-day="' + J(t) + '" role="img" aria-label="' + J(Bt(t)) + ', last 24 hours"></svg>',
      h === "cover" && '<div data-cover-art="' + J(t) + '"></div>',
      ...m.sections.filter(Boolean),
      Jr(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(wt != null && wt.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + np + "</button>"
    ].filter(Boolean);
  }
  const Jr = (t) => Ll(t) ? "" : Cl(t) + wd(t);
  let zs = "";
  function To(t) {
    var a;
    wt && (wt.details = t, Ri(), (a = le.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const ai = (t) => {
    const a = k[t], o = Ga(t), l = jn(t);
    return { kind: Fd(a), name: Bt(t), text: ea(t), pos: o, target: Math.abs(l - o) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: Zi(t) ?? 100, canSet: Gt(t, $c) };
  };
  function Qr(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const o = a.dataset.coverArt, l = a.dataset.artKey || "more:" + o;
      let p = ft.get(l);
      p || (p = ch({ onMove: (h) => Pi(o, h), onSet: (h) => {
        Pi(o, h), Hi("pos", o);
      } }), p.coverId = o, ft.set(l, p)), a.replaceWith(p.el), p.update(ai(o));
    });
  }
  const ts = (t) => [...ft.values()].filter((a) => a.coverId === t), Vs = () => ft.forEach((t) => {
    k[t.coverId] && t.update(ai(t.coverId));
  }), tn = () => {
    ft.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), ft.delete(a));
    }), Vs();
  };
  function Ri() {
    var h, f;
    if (!wt || !(Ll(wt.id) || k[wt.id])) {
      le.hidden = !0;
      return;
    }
    if ([...M.keys()].some((m) => m.endsWith("|" + wt.id))) {
      Vs();
      return;
    }
    const t = eo(wt.id), a = le.querySelector(".tfMore");
    if (!t) {
      xr();
      return;
    }
    const o = Sl(le), l = Jr(wt.id), p = wt.frame ? wt.frame.wide : wt.id.startsWith("summary:") || wt.id.startsWith("group:");
    if (le.hidden || !a || t.length !== to.length || a.classList.contains("wide") !== p) {
      const m = Us ? wt.scroll || 0 : !le.hidden && a ? a.scrollTop : 0;
      le.innerHTML = '<div class="tfMorePair' + (le.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (wt.frame ? ' style="height:' + wt.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (l ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Od + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + l + "</div></div></aside>" : "") + "</div>", zs = l, le.classList.toggle("wide", p), le.hidden = !1, Qn(), Qr(le), Za(le), Te(le), le.querySelectorAll("[data-day]").forEach((y) => yd(y.dataset.day, y, wt.at)), m && (le.querySelector(".tfMore").scrollTop = m), wr(le, o), le.contains(n.activeElement) || (h = le.querySelector("[data-more-close]")) == null || h.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((m, y) => {
        var I, Q;
        if (m === to[y] || m.includes("data-cover-art") || a.children[y].contains((Q = (I = n.activeElement) == null ? void 0 : I.matches) != null && Q.call(I, "input,select") ? n.activeElement : null) || [...M.keys()].some((U) => a.children[y].querySelector('[data-drag="' + CSS.escape(U) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = m;
        const R = Xr(a.children[y], D.firstElementChild);
        Te(R), Za(R);
      }), l !== zs) {
        const m = le.querySelector(".tfMoreSideBody");
        m && (m.innerHTML = l), zs = l;
      }
      le.contains(n.activeElement) || wr(le, o);
    }
    (f = le.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(wt.details && l)), to = t, Vs();
  }
  setInterval(() => {
    wt && Ri();
  }, 15 * 1e3);
  function Gs(t, a) {
    var p;
    const o = !!(wt && a && le.contains(a)), l = o && le.querySelector(".tfMore");
    o && (wt.scroll = l.scrollTop), wt = { id: t, opener: o ? wt.opener : a, back: o ? wt : null, frame: o ? wt.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((p = a == null ? void 0 : a.dataset) == null ? void 0 : p.at) || null }, Al();
  }
  let Us = !1;
  function Al() {
    to = [], Us = !le.hidden, ft.forEach((t, a) => {
      a !== wt.id && le.contains(t.el) && (t.destroy(), ft.delete(a));
    }), Ri(), Us = !1;
  }
  function xr() {
    var o, l, p, h, f, m;
    const t = wt == null ? void 0 : wt.opener;
    wt = null, ft.forEach((y, D) => {
      le.contains(y.el) && (y.destroy(), ft.delete(D));
    }), Et.forEach((y, D) => {
      D.startsWith("more:") && Et.delete(D);
    }), le.hidden = !0, le.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (o = t == null ? void 0 : t.dataset) != null && o.more ? (l = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (p = t == null ? void 0 : t.dataset) != null && p.summary ? (h = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (f = t == null ? void 0 : t.hasAttribute) != null && f.call(t, "data-favs-edit") && ((m = S.querySelector("[data-favs-edit]")) == null || m.focus(a));
  }
  function Ys(t, a, o, l = {}) {
    const p = a.map((mt) => mt[1]), h = l.zero ? 0 : Math.min(...p), f = Math.max(...p), m = Math.max(120, t.clientWidth || 260), y = Math.max(60, t.clientHeight || 130), D = 8, R = y - 20, I = Date.now() - 24 * 3600 * 1e3, Q = 24 * 3600 * 1e3, U = (mt) => Math.max(0, Math.min(m, (mt - I) / Q * m)), St = (mt) => f === h ? (D + R) / 2 : R - (mt - h) / (f - h) * (R - D);
    let nt = "M" + U(a[0][0]).toFixed(1) + " " + St(a[0][1]).toFixed(1);
    for (let mt = 1; mt < a.length; mt++) nt += l.smooth ? "L" + U(a[mt][0]).toFixed(1) + " " + St(a[mt][1]).toFixed(1) : "H" + U(a[mt][0]).toFixed(1) + "V" + St(a[mt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + m + " " + y), t.setAttribute("aria-label", o), t.innerHTML = '<path d="' + nt + "V" + R + "H" + U(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + nt + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (y - 4) + '">24 h ago</text><text x="' + m + '" y="' + (y - 4) + '" text-anchor="end">Now</text>';
  }
  const ja = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, _l = (t, a) => {
    const o = t.split(".")[0];
    return ja[o] ? ja[o].includes(a) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, xd = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (Gl.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Bi = /* @__PURE__ */ new Map();
  let yr = 0;
  async function Zs(t) {
    let a = Bi.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let p = [];
      try {
        const h = await N({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((h == null ? void 0 : h[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      p.length || (p = (En || []).filter((h) => h.entity_id === t).map((h) => [h.when * 1e3, String(h.state)])), a = { at: Date.now(), pts: p }, Bi.set(t, a);
    }
    const o = k[t], l = a.pts.slice().sort((p, h) => p[0] - h[0]);
    return o && (!l.length || l[l.length - 1][1] !== o.state) && l.push([Date.parse(o.last_changed) || Date.now(), o.state]), l;
  }
  async function yd(t, a, o) {
    const l = await Zs(t);
    if (!a.isConnected) return;
    const p = l.map(([V, qt]) => [V, Number(qt)]);
    if (l.length > 1 && p.every(([, V]) => Number.isFinite(V))) {
      Ys(a, p, Bt(t) + ", last 24 hours");
      return;
    }
    const h = Date.now(), f = h - 864e5, m = Math.max(200, a.clientWidth || 360), y = 62, D = (V) => Math.max(0, Math.min(m, (V - f) / 864e5 * m)), R = [];
    let I = null;
    l.forEach(([V, qt]) => {
      const Pe = _l(t, qt);
      Pe && I == null ? I = Math.max(V, f) : !Pe && I != null && (R.push([I, Math.max(V, f)]), I = null);
    }), I != null && R.push([I, h]);
    const Q = Io(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", U = xd(t), St = "tfDayClip" + ++yr, nt = R.map(([V, qt]) => U + (qt >= h - 1e3 && V <= f + 1e3 ? " all day" : qt >= h - 1e3 ? " since " + Mn(V) : V <= f + 1e3 ? " until " + Mn(qt) : " " + Mn(V) + "–" + Mn(qt)));
    let mt = "", W = -1 / 0;
    R.forEach(([V], qt) => {
      const Pe = nt[qt].length * 5.4, ge = Math.min(D(V), m - Pe);
      ge < W + 8 || (mt += '<text x="' + ge.toFixed(1) + '" y="10">' + J(nt[qt]) + "</text>", W = ge + Pe);
    });
    let kt = '<text x="' + m + '" y="' + (y - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((V) => {
      let qt = new Date(h).setHours(V, 0, 0, 0);
      qt > h && (qt -= 864e5), D(qt) > 8 && D(qt) < m - 34 && (kt += '<text x="' + D(qt).toFixed(1) + '" y="' + (y - 2) + '" text-anchor="middle">' + String(V).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + m + " " + y), a.setAttribute("aria-label", Bt(t) + ", last 24 hours: " + (nt.length ? nt.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + St + '"><rect x="0" y="18" width="' + m + '" height="26" rx="8"/></clipPath>' + mt + '<rect x="0" y="18" width="' + m + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + St + ')">' + R.map(([V, qt]) => '<rect x="' + D(V).toFixed(1) + '" y="18" width="' + Math.max(2, D(qt) - D(V)).toFixed(1) + '" height="26" fill="' + Q + '"/>').join("") + "</g>" + (o && o >= f ? '<line x1="' + D(o).toFixed(1) + '" x2="' + D(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + kt;
  }
  function es(t) {
    var l;
    const a = Number((l = k[t]) == null ? void 0 : l.state), o = Date.now();
    if (Kt(t).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - p);
      return [...Array(49)].map((f, m) => p + h * m / 48).map((f) => [f, Math.round(a * Math.pow((f - p) / h, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function Ni(t, a) {
    var U, St;
    let o = j.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: gc() };
    else if (Wi(t)) o = { at: Date.now(), points: es(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const nt = new Date(Date.now() - 864e5).toISOString(), mt = await N({ type: "history/history_during_period", start_time: nt, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), W = ((mt == null ? void 0 : mt[t]) || []).map((kt) => [kt.lu != null ? kt.lu * 1e3 : Date.parse(kt.last_updated || kt.last_changed), Number(kt.s ?? kt.state)]).filter(([kt, V]) => Number.isFinite(kt) && Number.isFinite(V));
        o = { at: Date.now(), points: W };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      j.set(t, o);
    }
    const l = a || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const p = k[t], h = ((U = p == null ? void 0 : p.attributes) == null ? void 0 : U.unit_of_measurement) || "", f = o.points.slice(), m = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(m) && !t.endsWith("_solar_power") && f.push([Date.now(), m]), f.length < 2) {
      l.setAttribute("aria-label", Bt(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = f.map((nt) => nt[1]), D = Math.min(...y), R = Math.max(...y), I = (nt) => nt.toLocaleString(void 0, { maximumFractionDigits: Math.abs(nt) >= 100 ? 0 : 1 }), Q = ((St = p == null ? void 0 : p.attributes) == null ? void 0 : St.state_class) === "total_increasing";
    Ys(l, f, Bt(t) + ", last 24 hours: " + (Q ? "+" + I(y[y.length - 1] - y[0]) : D === R ? I(D) : I(D) + " to " + I(R)) + (h ? " " + h : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Lo() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const a = gc();
    Ys(t, a, "Solar, last 24 hours: up to " + Ca(Math.max(...a.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function as(t, a) {
    const o = a.entity_id, l = P.get(o) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Ga(o) > 0 ? 0 : 100 }[t], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    p != null && (l.pos = p), h != null && (l.tilt = h), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), P.set(o, l);
  }
  function Ks(t, a, o) {
    var p;
    const l = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof l != "string" || !H[l] || !xn(l) || o.brightness_pct != null || o.brightness != null ? [a, o] : a !== "turn_on" && !(a === "toggle" && ((p = k[l]) == null ? void 0 : p.state) !== "on") ? [a, o] : ["turn_on", { ...o, brightness_pct: H[l] }];
  }
  function kr(t, a, o, l) {
    let p = { entity_id: o, ...l || {} };
    return [a, p] = Ks(t, a, p), t === "cover" && as(a, p), aa[o] = (aa[o] || 0) + 1, zi.set(Qc, JSON.stringify(aa)), xe.call(t, a, p) ? Promise.resolve() : Promise.resolve(xt(t, a, p));
  }
  function ao(t) {
    const [a, o, l, p] = t.split("|");
    kr(a, o, l, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Pi(t, a) {
    M.set("pos|" + t, a), qe.delete(t), to = to.map(() => ""), [S, le].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((p) => Ct(p, a)));
    const o = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(a) + "%"), (wt == null ? void 0 : wt.id) === t) {
      const l = le.querySelector(".tfMoreState"), p = le.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), p && (p.textContent = "Currently " + Ga(t) + "%");
    }
    ts(t).forEach((l) => l.update(ai(t)));
  }
  const ra = (t, a) => {
    const o = t.shiftKey ? 10 : 1, l = { ArrowUp: a + o, ArrowRight: a + o, ArrowDown: a - o, ArrowLeft: a - o, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function kd(t, a) {
    var nt;
    const o = t.dataset.blocks;
    (nt = t.setPointerCapture) == null || nt.call(t, a.pointerId);
    const l = (mt) => {
      const W = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (mt.clientX - W.left) / W.width * 100));
    }, p = l(a), h = a.clientX;
    let f = !1, m = jn(o), y = p, D = 0;
    const R = () => {
      m = Math.abs(y - m) < 0.2 ? y : m + (y - m) * 0.14, Pi(o, m), D = requestAnimationFrame(R);
    }, I = () => {
      f || (f = !0, t.classList.add("fine"), D = requestAnimationFrame(R));
    }, Q = setTimeout(I, 350), U = (mt) => {
      y = l(mt), Math.abs(mt.clientX - h) > 6 && (clearTimeout(Q), I());
    }, St = () => {
      clearTimeout(Q), cancelAnimationFrame(D), t.removeEventListener("pointermove", U), t.removeEventListener("pointerup", St), t.removeEventListener("pointercancel", St), t.classList.remove("fine"), Pi(o, f ? Math.round(m) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), Hi("pos", o);
    };
    t.addEventListener("pointermove", U), t.addEventListener("pointerup", St), t.addEventListener("pointercancel", St);
  }
  function In(t) {
    var p;
    const [a, o] = t.dataset.open.split("|"), l = t.closest(".tfCard");
    at = { key: a, id: o, h: l ? Math.round(l.getBoundingClientRect().height) : 0 }, qe.delete(a), Le(), (p = S.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function $s(t) {
    var a;
    Pt = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var p;
      const l = o === t;
      o.classList.toggle("active", l), o.setAttribute("aria-expanded", String(l)), (p = o.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !l);
    }), qe.set("areas", tr(((a = S.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Xs = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [o, l] = qn(t);
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
  function Ii(t, a, o, l) {
    var y;
    const p = Xs[a].value(o, l);
    M.set(a + "|" + o, p);
    const h = Math.round(l * 100) + "%", f = t.querySelector("i");
    if (a === "tilt") {
      f.style.width = "calc((100% - 8px) * " + l + ")";
      const [D, R] = t.querySelectorAll("span");
      D.classList.toggle("lit", l > 0.08), R.classList.toggle("lit", l > 0.92), qe.delete(o), to = to.map(() => ""), ts(o).forEach((I) => I.update(ai(o)));
    } else if (f) f.style.width = h;
    else {
      let D = t.querySelector("b");
      D || (D = document.createElement("b"), t.appendChild(D)), D.style.left = h;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const m = (y = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta, .tfMoreState");
    m && (m.textContent = Xs[a].text(o, p));
  }
  function Hi(t, a) {
    const o = M.get(t + "|" + a), [l, p, h] = Xs[t].send(a, o), f = () => setTimeout(() => {
      M.delete(t + "|" + a), Le();
    }, 1500);
    kr(l, p, a, h).then(f, f);
  }
  function Mr(t) {
    t.addEventListener("click", (a) => {
      var l, p;
      const o = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (ga && !a.target.closest(".tfBoardMenu,[data-board-more]") && Xa(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (ga == null ? void 0 : ga.key) === o.dataset.boardMore ? Xa(!0) : Ls(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) bl(ga.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) qo(o.dataset.boardShow);
        else if (o.dataset.favHide) Ns(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) ys(o.dataset.energyPick);
        else if (o.dataset.act) ao(o.dataset.act);
        else if (o.hasAttribute("data-details")) To(!(wt != null && wt.details));
        else if (o.hasAttribute("data-details-close")) To(!1);
        else if (o.dataset.summary) ir(o.dataset.summary, o);
        else if (o.dataset.star) nr(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const h = wt.id;
          wt = wt.back, Al(), (l = le.querySelector('.tfMore [data-more="' + CSS.escape(h) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) Gs("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([h, f, m, y]) => kr(h, f, m, y).catch(() => {
        }));
        else if (o.dataset.more) Gs(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) xr();
        else if (o.dataset.go) Fs("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) vr();
        else if (o.dataset.open) In(o);
        else if (o.hasAttribute("data-close")) {
          const h = at;
          at = null, qe.delete(h.key), Le(), (p = S.querySelector('[data-open="' + CSS.escape(h.key + "|" + h.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && $s(o);
    }), t.addEventListener("keydown", (a) => {
      var l, p, h, f, m, y, D;
      const o = a.target;
      if ((l = o.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), In(o)), (p = o.dataset) != null && p.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), ys(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), $s(o)), (f = o.dataset) != null && f.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), ir(o.dataset.summary, o)), a.key === "Escape" && ga && t === S) {
        a.preventDefault(), Xa(!0);
        return;
      }
      if (a.key === "Escape" && La && t === S) {
        a.preventDefault(), mn(!1), (m = c("dashEditNav")) == null || m.focus();
        return;
      }
      if (a.key === "Escape" && G && t === S && (a.preventDefault(), vr()), (y = o.dataset) != null && y.blocks) {
        const R = o.dataset.blocks, I = ra(a, Math.round(jn(R)));
        if (I == null) return;
        a.preventDefault(), Pi(R, I), clearTimeout(dt.get(R)), dt.set(R, setTimeout(() => Hi("pos", R), 500));
        return;
      }
      if ((D = o.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [R, I] = o.dataset.drag.split("|"), Q = Number(o.getAttribute("aria-valuenow")) / 100, U = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, Q + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        Ii(o, R, I, U), Hi(R, I);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var Pe;
      const o = a.target.closest("[data-blocks]");
      if (o && a.button === 0) {
        a.preventDefault(), kd(o, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [p, h] = l.dataset.drag.split("|"), f = p === "bright" && !xn(h), m = a.pointerType !== "mouse";
      if (f && !m) {
        ao(ke("light", "toggle", h));
        return;
      }
      const y = p === "bright" && ((Pe = k[h]) == null ? void 0 : Pe.state) !== "on", D = p === "tilt" ? 4 : 0, R = () => l.getBoundingClientRect().width - D * 2, I = (ge) => {
        const Sa = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ge.clientX - Sa.left - D) / R()));
      };
      let Q = m ? "waiting" : y ? "pressed" : "dragging", U = 0;
      const St = a.clientX, nt = a.clientY, mt = (ge, Sa) => Math.hypot(ge.clientX - St, ge.clientY - nt) > Sa, W = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      m || (a.preventDefault(), W()), Q === "dragging" && Ii(l, p, h, I(a));
      const kt = () => {
        var ge, Sa;
        Q = "sliding", L = l, l.classList.add("held"), W(), (ge = navigator.userActivation) != null && ge.hasBeenActive && ((Sa = navigator.vibrate) == null || Sa.call(navigator, 8)), U = y ? (H[h] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, V = (ge) => {
        Q === "waiting" && mt(ge, E) ? !f && Math.abs(ge.clientX - St) > Math.abs(ge.clientY - nt) ? kt() : Q = "gone" : Q === "pressed" && mt(ge, 4) && (Q = "dragging"), Q === "sliding" ? Ii(l, p, h, Math.max(0, Math.min(1, U + (ge.clientX - St) / R()))) : Q === "dragging" && Ii(l, p, h, I(ge));
      }, qt = (ge) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Sa, Xt) => l.removeEventListener(Sa, Xt ? qt : V)), l.classList.remove("held"), L === l && (L = null), Q === "sliding" || Q === "dragging" ? Hi(p, h) : ge.type === "pointerup" && f ? ao(ke("light", "toggle", h)) : ge.type === "pointerup" && y && (Q === "waiting" || Q === "pressed") && kr("light", "turn_on", h).catch(() => {
        });
      };
      l.addEventListener("pointermove", V), l.addEventListener("pointerup", qt), l.addEventListener("pointercancel", qt);
    }), t.addEventListener("touchmove", (a) => {
      L && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return S && w && (rr(), Mr(S), Mr(le), le.addEventListener("click", (t) => {
    t.target === le && xr();
  }), (El = n.getElementById("homeNav")) == null || El.addEventListener("click", () => {
    G && vr();
  }), (Dl = n.querySelector(".bottomNav")) == null || Dl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + op + "</button>"), (Sr = c("dashEditNav")) == null || Sr.addEventListener("click", () => mn(!La)), S.addEventListener("pointerdown", gr), new ResizeObserver(() => {
    g.classList.contains("tfDash") && ul() !== wi ? Le() : qr();
  }).observe(S), window.addEventListener("resize", qr, { passive: !0 }), le.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), wt != null && wt.details ? To(!1) : xr());
  })), tt(), {
    update(t) {
      if (!w) return;
      const a = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([l]) => Wi(l))), ...t || {} };
      for (const l in k) l.startsWith("light.") && k[l].state === "on" && xn(l) && X(l, ro(k[l]));
      a ? Pn() : Le();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      di = !0, Qt == null || Qt.destroy(), Qt = null, Ma == null || Ma.forEach((t) => t.destroy()), Ma = null;
    },
    resume() {
      di = !1, !(!w || !(S != null && S.querySelector("[data-tf]"))) && (ae.isConnected && Ui(ae.style.order), Yi());
    }
  };
}
const Fh = "0.68.0", zd = "move_assistant", Oh = "move_assistant", sp = "move_assistant_checkin_reminder";
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
    var c;
    const i = !this._hass;
    if (this._hass = d, i) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states), (c = this._test) == null || c.update(d.states));
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
    let c = null;
    try {
      const g = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: zd
      });
      c = (g == null ? void 0 : g.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = pu(d, {
      data: c,
      save: (g) => this._save(g),
      fire: (g, b) => this._fire(g, b),
      ws: (g) => this._hass.callWS(g),
      subscribe: (g, b) => {
        var w, _;
        return (_ = (w = this._hass) == null ? void 0 : w.connection) != null && _.subscribeMessage ? this._hass.connection.subscribeMessage(b, g) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var g, b;
        return Object.keys(((b = (g = this._hass) == null ? void 0 : g.services) == null ? void 0 : b.notify) || {}).sort();
      },
      setReminderAutomation: (g) => this._setReminderAutomation(g),
      setLight: (g) => this.classList.toggle("lightBody", g),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hh(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const d = (i = this._hass) == null ? void 0 : i.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (c) => {
        var b;
        const g = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        g === this._lastSaved || g === this._pendingJson || (this._lastSaved = g, (b = this._app) == null || b.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: zd }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: zd,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, i = {}) {
    var c, g;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((g = this._hass) == null || g.callWS({
      type: "fire_event",
      event_type: Oh,
      event_data: { action: d, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const i = `config/automation/config/${sp}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (b) {
        if ((b == null ? void 0 : b.status_code) !== 404 && (b == null ? void 0 : b.status) !== 404) throw b;
      }
      return;
    }
    const c = (b) => `${b}:00`, g = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: sp,
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
            data: { url: g, clickAction: g }
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
    var c;
    const i = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    i && (i.textContent = d, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Fh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
