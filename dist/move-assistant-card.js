const jp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', zp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Vp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Gp = `<main id="app"><div class="shell">
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
`, un = {
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
}, pn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, pc = (n, d, o) => n + (d - n) * o, qd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), o = d.length === 3 ? d.split("").map((c) => c + c).join("") : d;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Up = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), uc = {}, Je = (n, d, o) => {
  const c = n + d + o;
  return uc[c] || (uc[c] = Up(qd(n).map((m, b) => m + (qd(d)[b] - m) * o)));
}, fc = {}, Yl = (n) => fc[n] || (fc[n] = qd(n)), kd = (n, d, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let b = 0, w = 1, _ = m;
  for (let y = 0; y < 18; y++)
    _ = (b + w) / 2, 3 * (1 - _) * (1 - _) * _ * n + 3 * (1 - _) * _ * _ * o + _ * _ * _ < m ? b = _ : w = _;
  return 3 * (1 - _) * (1 - _) * _ * d + 3 * (1 - _) * _ * _ * c + _ * _ * _;
}, Yp = { std: kd(0.2, 0, 0, 1), acc: kd(0.3, 0, 1, 1), dec: kd(0, 0, 0, 1) };
function ed(n, d) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || d ? "night" : "day");
}
function sp(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Je(d.clear[0], d.cloudy[0], 0.12), Je(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Je(d.rain[0], "#000000", 0.22), Je(d.rain[1], "#000000", 0.22)], d;
}
const jd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], zd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Vd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Gd(n, d = un) {
  const o = { ...un, ...d }, c = sp(o), m = String(n).split("/"), b = c[m[0]] ? m[0] : "clear", w = m[1] === "night", _ = c[b][w ? 1 : 0], y = {
    night: w,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: _,
    skyStops: [_],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: jd.map(() => ({ o: 0 })),
    rain: zd.map(() => ({ o: 0, dy: -16 })),
    snow: Vd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (wt) => jd.map(() => ({ o: wt }));
  return b === "clear" ? w ? (y.moon.o = 1, y.stars = N(1)) : y.sun.o = 1 : b === "partly" ? (y.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (y.moon = { x: 34, y: 33, d: 48, o: 1 }, y.stars = N(0.7)) : y.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (y.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? y.moon = { x: 40, y: 36, d: 40, o: 0 } : y.sun = { x: 40, y: 36, r: 20, o: 0 }) : (y.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? y.moon = { x: 38, y: 28, d: 36, o: 0 } : y.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? y.snow = Vd.map(() => ({ o: 1, dy: 0 })) : y.rain = zd.map((wt, ct) => ({ o: b === "storm" && ct === 1 ? 0 : 1, dy: 0 })), b === "storm" && (y.bolt = { o: 1, dy: 0 })), y;
}
const hc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Zp(n, d, o, c = un, m = !1) {
  const b = { ...un, ...c }, w = (U, X) => U > 0.01 && X > 0.01 ? "stay" : U > 0.01 ? "leave" : X > 0.01 ? "enter" : "none", _ = (U, X, ot, K) => {
    const V = U[0] + X * K, O = U[1] - (ot - 1 - X) * K;
    return Yp[U[2]](pn((o - V) / Math.max(1e-3, O - V)));
  }, y = (U, X, ot, K = 0, V = 1, O = 0) => {
    const ut = w(U.o, X.o);
    if (ut === "none") return { ...X, o: 0 };
    const rt = _(hc[ot][ut], K, V, O), ht = {};
    for (const et in X) ht[et] = m && ut !== "stay" && et !== "o" ? ut === "leave" ? U[et] : X[et] : pc(U[et], X[et], rt);
    return ht;
  }, N = _(hc.sky, 0, 1, 0);
  let wt, ct;
  if (n.night !== d.night) {
    const U = Math.min(n.clearness, d.clearness), X = Je(Je(n.sky, d.sky, 0.5), b.dusk, 0.6 * U);
    wt = N < 0.5 ? Je(n.sky, X, N * 2) : Je(X, d.sky, N * 2 - 1), ct = U > 0.5 ? [n.sky, b.dusk, d.sky] : [n.sky, d.sky];
  } else
    wt = Je(n.sky, d.sky, N), ct = [n.sky, d.sky];
  return {
    night: o < 0.5 ? n.night : d.night,
    clearness: pc(n.clearness, d.clearness, o),
    sky: wt,
    skyStops: ct,
    skyT: N,
    sun: y(n.sun, d.sun, "body"),
    moon: y(n.moon, d.moon, "body"),
    cloud: y(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map((U, X) => y(n.stars[X], U, "fx", X, d.stars.length, 0.05)),
    rain: d.rain.map((U, X) => y(n.rain[X], U, "fx", X, d.rain.length, 0.05)),
    snow: d.snow.map((U, X) => y(n.snow[X], U, "fx", X, d.snow.length, 0.05)),
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
], cn = (n, d) => (Kp[(d & 7) * 8 + (n & 7)] + 0.5) / 64, $p = 0, Zd = 1, Kd = 2, $d = 3, Xd = 4, dn = 5, fs = 6, Fi = 7, Jd = 8, $l = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Xp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Jp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), lp = (n, d, o) => {
  let c = !1;
  for (let m = 0, b = n.length - 1; m < n.length; b = m++) {
    const w = n[m], _ = n[b];
    w[1] > o != _[1] > o && d < (_[0] - w[0]) * (o - w[1]) / (_[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function dp(n, { size: d = 90, px: o = 2, oneBit: c = !1, colors: m = un, ink: b = "#26221e", paper: w = "#fbf9f6", clock: _ = 0, idle: y = !1 } = {}) {
  const N = { ...un, ...m }, wt = Math.sin, ct = Math.PI * 2, U = Math.max(6, Math.round(d / o)), X = U / 90, ot = y ? Math.floor(_ / 100) * 100 : 0, K = y ? wt(ct * ot / 3600) : 0, V = y ? 1.8 * wt(ct * ot / 6400) : 0, O = y ? 0.9 * wt(ct * ot / 4100) : 0, ut = y ? 0.8 * wt(ct * ot / 5200) : 0, rt = ot / 3400 % 1, ht = y && n.bolt.o > 0.5 && (rt < 0.04 || rt > 0.08 && rt < 0.11), et = new Array(U * U), tt = new Uint8Array(U * U), S = (k, D, L, P, ft) => {
    L == null || k < 0 || D < 0 || k >= U || D >= U || (P >= 1 || P > cn(k + 5, D + 3)) && (et[D * U + k] = L, tt[D * U + k] = ft);
  }, at = (k, D, L, P) => {
    for (let ft = Math.max(0, Math.floor(D - L) - 1); ft <= Math.min(U - 1, D + L + 1); ft++) for (let dt = Math.max(0, Math.floor(k - L) - 1); dt <= Math.min(U - 1, k + L + 1); dt++) P(dt, ft, dt + 0.5 - k, ft + 0.5 - D);
  }, Pt = n.skyStops || [n.sky], G = n.skyT || 0;
  for (let k = 0; k < U; k++) {
    const D = n.night ? pn(1 - (k + 0.5) / (U * 0.7)) * 0.85 : pn(((k + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let L = 0; L < U; L++) {
      let P = Pt[0];
      if (Pt.length > 1) {
        const ft = G * (Pt.length - 1), dt = Math.min(Pt.length - 2, Math.floor(ft));
        P = ft - dt > cn(L, k) ? Pt[dt + 1] : Pt[dt];
      }
      D > cn(L + 2, k + 5) && (P = n.night ? Je(P, "#000000", 0.28) : Je(P, "#ffffff", 0.2)), et[k * U + L] = ht ? Je(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const k = n.sun.x * X, D = n.sun.y * X, L = Math.max(1, n.sun.r * X);
    if (y) {
      const P = L * (1.45 + 0.06 * K), ft = Je(N.sun, "#ffffff", 0.55);
      if (at(k, D, P, (dt, W, gt, Mt) => {
        const Jt = Math.sqrt(gt * gt + Mt * Mt);
        Jt > L && Jt < P && S(dt, W, ft, 0.26 * (1 - (Jt - L) / (P - L)) * n.sun.o, $p);
      }), n.sun.o > 0.5) {
        const dt = Math.floor(ot / 500) % 2, W = Math.max(1, L * 0.22);
        for (let gt = 0; gt < 8; gt++) if (gt % 2 === dt) for (let Mt = L + 1.5; Mt < L + 1.5 + W; Mt += 0.7) S(Math.floor(k + Math.cos(gt * Math.PI / 4) * Mt), Math.floor(D + Math.sin(gt * Math.PI / 4) * Mt), N.sun, n.sun.o, Jd);
      }
    }
    at(k, D, L, (P, ft, dt, W) => {
      if (dt * dt + W * W > L * L) return;
      const gt = ((dt * 0.643 + W * 0.766) / L + 1) / 2;
      S(P, ft, pn((gt - 0.62) / 0.38) > cn(P, ft) ? N.sunEdge : N.sun, n.sun.o, Zd);
    });
  }
  if (jd.forEach((k, D) => {
    const L = n.stars[D].o;
    if (L < 0.01) return;
    const P = Math.floor(k[0] * X), ft = Math.floor(k[1] * X), dt = y ? (Math.floor(ot / 300) + D * 3) % 6 : 0;
    if (dt === 5) return;
    const W = Math.round(k[2] * X * (dt === 4 ? 0.3 : dt < 2 ? 1 : 0.6));
    S(P, ft, N.star, L, Fi);
    for (let gt = 1; gt <= W; gt++) {
      const Mt = gt === W && W > 1 ? Je(N.star, n.sky, 0.5) : N.star;
      S(P - gt, ft, Mt, L, Fi), S(P + gt, ft, Mt, L, Fi), S(P, ft - gt, Mt, L, Fi), S(P, ft + gt, Mt, L, Fi);
    }
  }), n.moon.o > 0.01) {
    const k = Math.max(1.5, n.moon.d * X * 0.37), D = n.moon.x * X, L = n.moon.y * X + (y && ut > 0.4 ? -1 : 0), P = D + 0.547 * k, ft = L - 0.503 * k, dt = 0.82 * k, W = Je(N.moon, "#ffffff", 0.6);
    at(D, L, k, (gt, Mt, Jt, ue) => {
      if (Jt * Jt + ue * ue > k * k) return;
      const ta = gt + 0.5 - P, Se = Mt + 0.5 - ft;
      ta * ta + Se * Se <= dt * dt || S(gt, Mt, pn((ue + k) / (2 * k) * 1.1 - 0.1) > cn(gt, Mt) ? N.moon : W, n.moon.o, Kd);
    });
  }
  const vt = Math.max(2, Math.round(15.65 * X)), j = Math.max(1, Math.round(5.87 * X * 0.5));
  zd.forEach((k, D) => {
    const L = n.rain[D];
    let P = L.dy, ft = L.o;
    if (ft < 0.01) return;
    if (y) {
      const gt = (ot / 950 + D / 3) % 1;
      P += -5 + gt * 14, ft *= gt < 0.18 ? gt / 0.18 : gt > 0.72 ? (1 - gt) / 0.28 : 1;
    }
    const dt = (k[0] + 3 + V) * X, W = (k[1] + P) * X;
    for (let gt = 0; gt < vt; gt++) for (let Mt = 0; Mt < j; Mt++) S(Math.floor(dt - 0.208 * gt) + Mt, Math.floor(W) + gt, N.rain, ft, Xd);
  });
  const jt = Math.max(0, Math.round(7.34 * X / 2.6));
  if (Vd.forEach((k, D) => {
    const L = n.snow[D];
    let P = L.dy, ft = 0, dt = L.o;
    if (dt < 0.01) return;
    if (y) {
      const Mt = (ot / 3200 + D / 5) % 1;
      P += -6 + Mt * 14, ft = 1.5 * wt(ct * (Mt * 1.5 + D / 5)), dt *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const W = Math.floor((k[0] + 3.67 + ft + V) * X), gt = Math.floor((k[1] + 3.67 + P) * X);
    S(W, gt, N.snow, dt, dn);
    for (let Mt = 1; Mt <= jt; Mt++)
      S(W - Mt, gt, N.snow, dt, dn), S(W + Mt, gt, N.snow, dt, dn), S(W, gt - Mt, N.snow, dt, dn), S(W, gt + Mt, N.snow, dt, dn), jt > 1 && Mt < jt && (S(W - Mt, gt - Mt, N.snow, dt, dn), S(W + Mt, gt - Mt, N.snow, dt, dn), S(W - Mt, gt + Mt, N.snow, dt, dn), S(W + Mt, gt + Mt, N.snow, dt, dn));
  }), n.bolt.o > 0.01)
    if (U >= 30) {
      const k = 39 + V, D = 50 + n.bolt.dy;
      for (let L = Math.floor(D * X); L <= (D + 28) * X; L++) for (let P = Math.floor(k * X); P <= (k + 13) * X; P++)
        lp(Jp, (P + 0.5) / X - k, (L + 0.5) / X - D) && S(P, L, N.sun, n.bolt.o, fs);
    } else {
      const k = U / 18, D = 7, L = 10 + Math.round(n.bolt.dy * 0.2);
      Xp.forEach((P, ft) => P.split("").forEach((dt, W) => {
        if (dt !== "#") return;
        const gt = Math.floor((D + W) * k), Mt = Math.floor((L + ft) * k);
        for (let Jt = Mt; Jt < Math.max(Mt + 1, Math.floor((L + ft + 1) * k)); Jt++) for (let ue = gt; ue < Math.max(gt + 1, Math.floor((D + W + 1) * k)); ue++) S(ue, Jt, N.sun, n.bolt.o, fs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const k = Math.max(3, n.cloud.w * X), D = k * 0.6665, L = (n.cloud.x + V) * X - k / 2, P = (n.cloud.y + O) * X - D / 2, ft = Je(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), dt = Je(ft, "#000000", 0.16);
    for (let W = Math.max(0, Math.floor(P) - 1); W <= Math.min(U - 1, P + D + 1); W++) for (let gt = Math.max(0, Math.floor(L) - 1); gt <= Math.min(U - 1, L + k + 1); gt++) {
      const Mt = (gt + 0.5 - L) / k, Jt = (W + 0.5 - P) / k;
      $l(Mt, Jt) && S(gt, W, !$l(Mt, Jt + 1 / k) || pn((Jt - 0.42) / 0.25) * 0.8 > cn(gt, W) ? dt : ft, n.cloud.o, $d);
    }
  }
  return cp(et, tt, U, U, { oneBit: c, ink: b, paper: w, snowInk: !n.night });
}
function cp(n, d, o, c, { oneBit: m, ink: b, paper: w, snowInk: _ }) {
  const y = new Uint8ClampedArray(o * c * 4), N = Yl(b), wt = Yl(w);
  for (let ct = 0; ct < c; ct++) for (let U = 0; U < o; U++) {
    const X = ct * o + U, ot = d[X];
    if (n[X] == null) continue;
    let K = Yl(n[X]);
    if (m) {
      let V;
      ot === Xd || ot === Jd ? V = !0 : ot === dn ? V = _ : ot === Fi || ot === fs ? V = !1 : V = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= cn(U, ct), (ot === Zd || ot === Kd || ot === $d || ot === fs) && (U > 0 && d[X - 1] !== ot || U < o - 1 && d[X + 1] !== ot || ct > 0 && d[X - o] !== ot || ct < c - 1 && d[X + o] !== ot) && (V = !0), K = V ? N : wt;
    }
    y[X * 4] = K[0], y[X * 4 + 1] = K[1], y[X * 4 + 2] = K[2], y[X * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const Qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, tu = (n) => ed(n, !1).split("/")[0], Md = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, eu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", au = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", nu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", iu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ru = [".##", "##.", ".#.", "#.."];
function pp(n, { width: d, height: o, colors: c, wave: m = 0.38, soft: b = 6, glow: w = 0.6 }) {
  const _ = { ...un, dawn: "#e5a77e", ...c }, y = sp(_), N = d, wt = o, ct = N / 6, U = ct / 2, X = Math.PI * 2, ot = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(12)].map((rt, ht) => {
    const et = ot[Math.min(ht, ot.length - 1)], tt = tu(et.cond), S = ht % 2 === 1;
    return { cond: et.cond, k: tt, night: S, sky: y[tt][S ? 1 : 0], cover: Qp[tt] };
  }), V = (rt) => wt * (0.5 - m * Math.cos(X * (rt / ct - 0.25)));
  return { C: _, S: K, W: N, H: wt, cw: ct, sw: U, TAU: X, yb: V, side: (rt, ht, et) => {
    const tt = (rt ? V(ht) - et : et - V(ht)) / Math.max(3, b * 1.4) + 0.5;
    return tt <= 0 ? 0 : tt >= 1 ? 1 : tt;
  }, glowAt: (rt) => {
    const ht = ((rt / ct - 0.25) % 1 + 1) % 1, et = Math.max(0, Math.min(5, Math.round(rt / ct - 0.25))), tt = Math.max(0, Math.min(5, Math.round(rt / ct - 0.75))), S = 1 - (K[2 * et].cover + K[2 * tt + 1].cover) / 2, at = Math.sin(Math.PI * Math.min(1, Math.max(0, V(rt) / wt)));
    return { c: ht < 0.5 ? _.dusk : _.dawn, a: w * (0.2 + 0.8 * S) * at * at };
  }, soft: b, tw: ct * 0.3, sy: wt / 90 };
}
function up(n, { clock: d = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: b, side: w, C: _, TAU: y, sy: N } = n, wt = d, ct = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((U, X) => {
    const ot = Md(c * 977 + X * 131 + 7), K = (X + 0.5) * b, V = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let O = 0; O < V; O++) {
      const ut = K + (ot() - 0.5) * b * 1.6, rt = (6 + ot() * 76) * N, ht = ot() < 0.35, et = 1.8 + ot() * 1.6, tt = w(!0, ut, rt) * (ht ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * wt / 2600 + O * 1.7 + X) : 1);
      tt >= 0.03 && ct.stars.push({ x: ut, y: rt, big: ht, size: et, o: tt });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const O = K + (ot() - 0.5) * b * 0.3, ut = Math.min(15, b * 0.29);
      ct.suns.push({ x: O, y: 32 * N, rad: ut, halo: ut * 2.8 * (o ? 1 + 0.07 * Math.sin(y * wt / 3600 + X) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const O = Math.min(0.78, b * 0.55 / 34), ut = K - 23 * O + (ot() - 0.5) * b * 0.2;
      ct.moons.push({ x: ut + 23 * O, y: (4 + (o ? 0.8 * Math.sin(y * wt / 5200 + X) : 0)) * N + 23 * O, d: 46 * O });
    }
  }), m.forEach((U, X) => {
    const ot = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ot) return;
    const K = Md(c * 577 + X * 71 + 3), V = (X + 0.5) * b, O = U.k === "rain" || U.k === "storm" || U.night ? _.cloudNight : _.cloudDay, ut = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let rt = 0; rt < ot; rt++) {
      const ht = b / 46 * (U.k === "partly" ? 0.85 : 0.75 + K() * 0.55), et = V + (U.k === "partly" ? b * 0.12 : (K() - 0.5) * b * 1.05), tt = (U.k === "partly" ? 40 : 6 + K() * 26) * N, S = o ? 2.5 * Math.sin(y * wt / 9e3 + X * 1.3 + rt * 2.1) : 0, at = o ? 0.9 * Math.sin(y * wt / 6100 + X + rt) : 0;
      ct.clouds.push({ x: et - 23 * ht + S, y: tt - 15.33 * ht + at, w: 46 * ht, h: 30.66 * ht, fill: O, o: ut * (ot > 1 && rt === 0 ? 0.85 : 1) });
    }
  }), m.forEach((U, X) => {
    const ot = Md(c * 313 + X * 29 + 11), K = (X + 0.5) * b, V = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let ut = 0; ut < V; ut++) {
      let rt = K + (ot() - 0.5) * b * 1.05, ht = 44 + ot() * 36, et = 1;
      if (o) {
        const S = ((ht - 44 + wt * 0.04) % 36 + 36) % 36;
        rt -= 0.21 * (S - (ht - 44)), ht = 44 + S, et = Math.min(1, S / 6, (36 - S) / 6);
      }
      ht *= N;
      const tt = w(U.night, rt, ht) * et;
      tt >= 0.05 && ct.drops.push({ x: rt, y: ht, o: tt });
    }
    const O = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let ut = 0; ut < O; ut++) {
      let rt = K + (ot() - 0.5) * b * 1.05, ht = 40 + ot() * 44, et = 1;
      if (o) {
        const S = ((ht - 40 + wt * 9e-3) % 44 + 44) % 44;
        ht = 40 + S, rt += 1.6 * Math.sin(y * wt / 2800 + ut * 1.9 + X), et = Math.min(1, S / 6, (44 - S) / 6);
      }
      ht *= N;
      const tt = w(U.night, rt, ht) * et;
      tt >= 0.05 && ct.flakes.push({ x: rt, y: ht, o: tt });
    }
    if (U.k === "fog") {
      const ut = U.night ? "#c8ccd6" : "#ffffff", rt = U.night ? 0.28 : 0.62, ht = o ? 4 * Math.sin(y * wt / 8e3 + X) : 0;
      for (let et = 0; et < 4; et++) ct.fogs.push({ x: K - b * 0.75 + et % 2 * b * 0.18 + (et % 2 ? ht : -ht), y: (30 + et * 13) * N, w: b * 1.3, c: ut, a: rt });
    }
    if (U.k === "storm") {
      const ut = (wt / 3400 + X * 0.37) % 1;
      ct.bolts.push({ x: K + (ot() - 0.5) * b * 0.3 - 5, y: 36 * N, o: o && !(ut < 0.05 || ut > 0.09 && ut < 0.12) ? 0.8 : 1 });
    }
  }), ct;
}
function su(n, d, o, c, m, b, w, _) {
  const { S: y, C: N, cw: wt, yb: ct, glowAt: U, soft: X, tw: ot, sy: K } = n, V = new Array(o * c), O = new Uint8Array(o * c), ut = new Uint8Array(o * c), rt = (k, D, L, P, ft) => {
    L == null || k < 0 || D < 0 || k >= o || D >= c || (P >= 1 || P > cn(k + 5, D + 3)) && (V[D * o + k] = L, O[D * o + k] = ft);
  }, ht = (k, D, L, P) => {
    for (let ft = Math.max(0, Math.floor(D - L) - 1); ft <= Math.min(c - 1, D + L + 1); ft++) for (let dt = Math.max(0, Math.floor(k - L) - 1); dt <= Math.min(o - 1, k + L + 1); dt++) P(dt, ft, dt + 0.5 - k, ft + 0.5 - D);
  }, et = (k, D, L) => {
    for (let ft = 0; ft < k.length - 1; ft++) {
      const dt = (ft + D) * wt;
      if (L < dt - ot / 2) return [k[ft], k[ft], 0];
      if (L <= dt + ot / 2) return [k[ft], k[ft + 1], (L - dt + ot / 2) / ot];
    }
    const P = k[k.length - 1];
    return [P, P, 0];
  }, tt = y.filter((k) => !k.night).map((k) => k.sky), S = y.filter((k) => k.night).map((k) => k.sky), at = X / b, Pt = 16 * K / b;
  for (let k = 0; k < o; k++) {
    const D = (k + 0.5) * m, L = ct(D) / b, P = et(tt, 0.75, D), ft = et(S, 1.25, D), dt = U(D);
    for (let W = 0; W < c; W++) {
      const gt = cn(k, W), Mt = W + 0.5 - L, Jt = (at > 0.01 ? pn(0.5 + Mt / at) : Mt > 0 ? 1 : 0) > gt;
      let ue = Jt ? P[2] > gt ? P[1] : P[0] : ft[2] > gt ? ft[1] : ft[0];
      (Jt ? pn(((W + 0.5) / c - 0.45) / 0.55) * 0.7 : pn(1 - (W + 0.5) / (c * 0.55)) * 0.7) > cn(k + 2, W + 5) && (ue = Jt ? Je(ue, "#ffffff", 0.18) : Je(ue, "#000000", 0.25)), Jt && Mt >= 0 && Mt < Pt && dt.a * 1.3 * (1 - Mt / Pt) > cn(k + 6, W + 1) && (ue = dt.c), V[W * o + k] = ue, ut[W * o + k] = Jt ? 0 : 1;
    }
  }
  const G = Je(N.sun, "#ffffff", 0.55), vt = Je(N.moon, "#ffffff", 0.6);
  d.stars.forEach((k) => {
    const D = Math.floor(k.x / m), L = Math.floor(k.y / b);
    if (D < 0 || L < 0 || D >= o || L >= c || !ut[L * o + D] || k.o < 0.15) return;
    const P = k.o > 0.45 ? N.star : Je(N.star, V[L * o + D], 0.5), ft = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    rt(D, L, P, 1, Fi);
    for (let dt = 1; dt <= ft; dt++) [[D - dt, L], [D + dt, L], [D, L - dt], [D, L + dt]].forEach((W) => {
      W[0] >= 0 && W[1] >= 0 && W[0] < o && W[1] < c && ut[W[1] * o + W[0]] && rt(W[0], W[1], P, 1, Fi);
    });
  }), d.suns.forEach((k) => {
    const D = Math.max(1.5, k.rad / m), L = k.x / m, P = k.y / b, ft = k.halo / m * 0.85;
    if (ht(L, P, ft, (dt, W, gt, Mt) => {
      const Jt = Math.sqrt(gt * gt + Mt * Mt);
      Jt > D && Jt < ft && !ut[W * o + dt] && rt(dt, W, G, 0.3 * (1 - (Jt - D) / (ft - D)), 0);
    }), _) {
      const dt = Math.floor(w / 500) % 2, W = Math.max(1, D * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === dt) for (let Mt = D + 1.2; Mt < D + 1.2 + W; Mt += 0.7) rt(Math.floor(L + Math.cos(gt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(gt * Math.PI / 4) * Mt), N.sun, 1, Jd);
    }
    ht(L, P, D, (dt, W, gt, Mt) => {
      gt * gt + Mt * Mt <= D * D && rt(dt, W, pn(((Mt / D + 1) / 2 - 0.6) / 0.4) > cn(dt, W) ? N.sunEdge : N.sun, 1, Zd);
    });
  }), d.moons.forEach((k) => {
    const D = Math.max(1.5, k.d * 0.37 / m), L = k.x / m, P = k.y / b, ft = L + 0.547 * D, dt = P - 0.503 * D, W = 0.82 * D;
    ht(L, P, D, (gt, Mt, Jt, ue) => {
      if (Jt * Jt + ue * ue > D * D) return;
      const ta = gt + 0.5 - ft, Se = Mt + 0.5 - dt;
      ta * ta + Se * Se > W * W && rt(gt, Mt, pn((ue + D) / (2 * D) * 1.1 - 0.1) > cn(gt, Mt) ? N.moon : vt, 1, Kd);
    });
  }), d.clouds.forEach((k) => {
    const D = Math.max(3, k.w / m), L = D * 0.6665, P = k.x / m, ft = k.y / b, dt = Je(k.fill, "#000000", 0.16);
    for (let W = Math.max(0, Math.floor(ft) - 1); W <= Math.min(c - 1, ft + L + 1); W++) for (let gt = Math.max(0, Math.floor(P) - 1); gt <= Math.min(o - 1, P + D + 1); gt++) {
      const Mt = (gt + 0.5 - P) / D, Jt = (W + 0.5 - ft) / D;
      $l(Mt, Jt) && rt(gt, W, !$l(Mt, Jt + 1 / D) || pn((Jt - 0.42) / 0.25) * 0.8 > cn(gt, W) ? dt : k.fill, k.o, $d);
    }
  }), d.fogs.forEach((k) => {
    const D = Math.floor(k.y / b), L = Math.max(D, Math.floor((k.y + 6 * K) / b) - 1), P = Math.floor(k.x / m), ft = Math.floor((k.x + k.w) / m);
    for (let dt = D; dt <= L; dt++) for (let W = P; W <= ft; W++) {
      const gt = (W - P) / Math.max(1, ft - P);
      rt(W, dt, k.c, k.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const j = Math.max(2, Math.round(9 / b));
  d.drops.forEach((k) => {
    const D = k.x / m, L = Math.floor(k.y / b);
    for (let P = 0; P < j; P++) rt(Math.floor(D - 0.208 * P * b / m), L + P, N.rain, k.o, Xd);
  });
  const jt = Math.max(0, Math.round(4.4 / m / 2.6));
  return d.flakes.forEach((k) => {
    const D = Math.floor(k.x / m), L = Math.floor(k.y / b);
    rt(D, L, N.snow, k.o, dn);
    for (let P = 1; P <= jt; P++)
      rt(D - P, L, N.snow, k.o, dn), rt(D + P, L, N.snow, k.o, dn), rt(D, L - P, N.snow, k.o, dn), rt(D, L + P, N.snow, k.o, dn);
  }), d.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let D = Math.floor(k.y / b); D <= (k.y + 24) / b; D++) for (let L = Math.floor(k.x / m); L <= (k.x + 11) / m; L++)
        lp(iu, (L + 0.5) * m - k.x, (D + 0.5) * b - k.y) && rt(L, D, N.sun, 1, fs);
    else {
      const D = Math.round(k.x / m), L = Math.round(k.y / b);
      ru.forEach((P, ft) => P.split("").forEach((dt, W) => {
        dt === "#" && rt(D + W, L + ft, N.sun, 1, fs);
      }));
    }
  }), { col: V, ids: O };
}
function lu(n, d) {
  const o = d.px, c = Math.max(6, Math.round(d.width / o)), m = Math.max(6, Math.round(d.height / o)), b = d.width / c, w = d.height / m, _ = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, y = (X) => {
    const ot = pp(X, d);
    return su(ot, up(ot, { clock: _, ambient: d.ambient, seed: d.seed }), c, m, b, w, _, d.ambient);
  }, N = y(n), wt = d.reveal == null ? 1 : pn(d.reveal);
  let ct = N.col, U = N.ids;
  if (wt < 1) {
    const X = d.prev ? y(d.prev) : null, ot = wt * (c + 12);
    ct = new Array(c * m), U = new Uint8Array(c * m);
    for (let K = 0; K < c * m; K++) {
      const V = K % c, O = K / c | 0;
      (d.reduce ? wt : pn((ot - V) / 12)) > cn(V, O) ? (ct[K] = N.col[K], U[K] = N.ids[K]) : X ? (ct[K] = X.col[K], U[K] = X.ids[K]) : (ct[K] = null, U[K] = 255);
    }
  }
  return cp(ct, U, c, m, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function du(n, d, o) {
  const c = o.width, m = o.height, b = o.reveal == null ? 1 : pn(o.reveal), w = (U, X) => {
    const ot = pp(X, o);
    cu(U, ot, up(ot, o));
  };
  if (n.clearRect(0, 0, c, m), b >= 1) {
    w(n, d);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const _ = n.canvas, y = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (y.width !== _.width || y.height !== _.height) && (y.width = _.width, y.height = _.height);
  const N = y.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, c, m), w(N, d);
  const wt = b * (c + 64) - 64, ct = N.createLinearGradient(wt, 0, wt + 64, 0);
  ct.addColorStop(0, "rgba(0,0,0,1)"), ct.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = ct, N.fillRect(0, 0, c, m), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function cu(n, d, o) {
  const { W: c, H: m, S: b, C: w, cw: _, yb: y, glowAt: N, soft: wt, tw: ct, sy: U } = d, X = (G, vt) => {
    const j = Yl(G);
    return "rgba(" + j[0] + "," + j[1] + "," + j[2] + "," + Math.max(0, Math.min(1, vt)).toFixed(3) + ")";
  }, ot = (G, vt) => {
    const j = n.createLinearGradient(0, 0, c, 0);
    j.addColorStop(0, G[0]);
    for (let jt = 0; jt < G.length - 1; jt++) {
      const k = (jt + vt) * _, D = (k - ct / 2) / c, L = (k + ct / 2) / c;
      D > 0 && D < 1 && j.addColorStop(D, G[jt]), L > 0 && L < 1 && j.addColorStop(L, G[jt + 1]);
    }
    return j.addColorStop(1, G[G.length - 1]), j;
  }, K = Math.max(24, Math.ceil(c / 4)), V = (G, vt) => {
    n.beginPath();
    for (let j = 0; j <= K; j++) {
      const jt = c * j / K, k = G == null ? 0 : y(jt) + G;
      j ? n.lineTo(jt, k) : n.moveTo(jt, k);
    }
    for (let j = K; j >= 0; j--) {
      const jt = c * j / K;
      n.lineTo(jt, y(jt) + vt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ot(b.filter((G) => !G.night).map((G) => G.sky), 0.75), n.fillRect(0, 0, c, m);
  const O = n.createLinearGradient(0, 0, c, 0);
  for (let G = 0; G <= 64; G++) {
    const vt = N(c * G / 64);
    O.addColorStop(G / 64, X(vt.c, Math.min(1, vt.a)));
  }
  n.fillStyle = O;
  for (let G = 0; G < 8; G++)
    n.globalAlpha = 1 - G / 8, V(G * 2 * U, (G + 1) * 2 * U);
  n.fillStyle = ot(b.filter((G) => G.night).map((G) => G.sky), 1.25);
  const ut = Math.max(0.5, wt), rt = 6;
  n.globalAlpha = 1, V(null, -ut);
  for (let G = 0; G < rt; G++)
    n.globalAlpha = 1 - (G + 0.5) / rt, V(-ut + 2 * ut * G / rt, -ut + 2 * ut * (G + 1) / rt);
  n.globalAlpha = 1;
  const ht = new Path2D(nu), et = new Path2D(au), tt = new Path2D(eu), S = new Path2D(ou);
  n.fillStyle = w.star, o.stars.forEach((G) => {
    n.globalAlpha = G.o, G.big ? (n.save(), n.translate(G.x, G.y), n.scale(G.size, G.size), n.fill(ht), n.restore()) : (n.beginPath(), n.arc(G.x, G.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const at = Je(w.sun, "#ffffff", 0.55);
  o.suns.forEach((G) => {
    const vt = n.createRadialGradient(G.x, G.y, 0, G.x, G.y, G.halo);
    vt.addColorStop(0, X(at, 0.42)), vt.addColorStop(0.7, X(at, 0)), n.fillStyle = vt, n.beginPath(), n.arc(G.x, G.y, G.halo, 0, Math.PI * 2), n.fill();
    const j = n.createLinearGradient(0, G.y - G.rad, 0, G.y + G.rad);
    j.addColorStop(0.6, w.sun), j.addColorStop(1, w.sunEdge), n.fillStyle = j, n.beginPath(), n.arc(G.x, G.y, G.rad, 0, Math.PI * 2), n.fill();
  });
  const Pt = Je(w.moon, "#ffffff", 0.6);
  o.moons.forEach((G) => {
    n.save(), n.translate(G.x - G.d / 2, G.y - G.d / 2), n.scale(G.d / 46, G.d / 46);
    const vt = n.createLinearGradient(0, 6, 0, 40);
    vt.addColorStop(0, Pt), vt.addColorStop(1, w.moon), n.fillStyle = vt, n.fill(et), n.restore();
  }), o.clouds.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.scale(G.w / 46, G.h / 30.66), n.translate(-4, -9.67), n.fillStyle = G.fill, n.fill(tt), n.restore();
  }), o.fogs.forEach((G) => {
    const vt = n.createLinearGradient(G.x, 0, G.x + G.w, 0);
    vt.addColorStop(0, X(G.c, 0)), vt.addColorStop(0.25, X(G.c, G.a)), vt.addColorStop(0.75, X(G.c, G.a)), vt.addColorStop(1, X(G.c, 0)), n.fillStyle = vt, n.fillRect(G.x, G.y, G.w, 6 * U);
  }), n.fillStyle = w.rain, o.drops.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((G) => {
    n.globalAlpha = G.o, n.beginPath(), n.arc(G.x, G.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.fill(S), n.restore();
  }), n.restore();
}
function pu(n, d) {
  var oc, ic, rc, sc, lc, dc, cc;
  const o = (e) => n.getElementById(e), c = o("workoutView"), m = o("workoutNameInput");
  let b = !0;
  const w = o("homeClock");
  function _() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  _(), setInterval(_, 15e3);
  const y = o("createFlow"), N = o("createMovementsSlot"), wt = o("createTimingSlot"), ct = o("createFinishSlot"), U = o("movementStepSummary"), X = o("timingStepSummary"), ot = o("finishStepSummary"), K = o("continueToTiming"), V = o("continueToFinish"), O = o("finishMoveButton");
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
    if (!$t) return;
    ne[Qt];
    const e = Ze.filter((lt) => !lt.hidden), r = e.filter((lt) => lt.kind !== "rest").length, s = e.filter((lt) => lt.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, v = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    v.disabled = !u, K.disabled = !u, X.textContent = u ? Ta(D.value) + " · " + ra(L.value) + " movement · " + ra(P.value) + " rest" : "Add a movement first", T.disabled = !(u && ut);
    const B = ((m == null ? void 0 : m.value) || "").trim(), F = [];
    (st = o("includeWarmupPreset")) != null && st.checked && F.push("warm-up"), (mt = o("includeCooldownPreset")) != null && mt.checked && F.push("cooldown"), ot.textContent = B ? B + (F.length ? " · " + F.join(" + ") : "") : F.length ? F.join(" + ") : "Name and optional extras";
  }
  function Pt() {
    var Nt, ae, Ft;
    y.hidden = !1, ut = !1;
    const e = n.querySelector(".editNameRow"), r = o("createMoveOptions"), s = n.querySelector(".timeTiles"), u = o("routineSummaryModal"), v = n.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), B = (Nt = o("warmupList")) == null ? void 0 : Nt.closest("section"), F = o("movementCreatorLaunch"), st = o("movementCreator"), mt = (ae = o("strengthList")) == null ? void 0 : ae.closest("section"), lt = (Ft = o("cooldownList")) == null ? void 0 : Ft.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), B, F, st, mt, lt].forEach((Rt) => Rt && et(Rt, N)), [r, s, u, v, T].forEach((Rt) => et(Rt, wt)), et(e, ct), S("movements"), at();
  }
  function G() {
    tt(), y.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || S(e.dataset.openStep);
  })), K.addEventListener("click", () => {
    K.disabled || S("timing");
  }), V.addEventListener("click", () => S("finish")), O.addEventListener("click", () => o("saveWorkoutEdit").click());
  const vt = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, j = o("homeNav"), jt = o("settingsNav");
  function k(e) {
    Object.entries(vt).forEach(([r, s]) => s.classList.toggle("active", r === e)), j.classList.toggle("active", e === "home"), jt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(vs, 400), e === "settings" && (requestAnimationFrame(() => Ei(n.querySelector(".tab.active"), !1)), fr());
  }
  const D = o("totalTime"), L = o("workTime"), P = o("restTime"), ft = o("totalOut"), dt = o("workOut"), W = o("restOut"), gt = o("totalFill"), Mt = o("workFill"), Jt = o("restFill"), ue = o("roundsInput"), ta = o("roundsFill"), Se = o("roundsOut"), so = o("totalLabel"), Na = o("routineSummaryModal"), Et = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ye = Et.map((e) => ({ ...e })), Ze = [
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
  const Tr = {
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
  }, xe = Oi(d.data), ne = xe.profiles;
  let Qt = ne[xe.selected] ? xe.selected : xe.order.find((e) => ne[e]) || "kettlebell";
  function Oi(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Tr)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((v) => s[v]);
    return Object.keys(s).forEach((v) => {
      u.includes(v) || u.push(v);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : ci(r.energy)).map(Wi),
      settings: { ...r.settings || {} }
    };
  }
  function ci(e) {
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
  function Wi(e) {
    if (e.scale === 100) return e;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function za() {
    $t || (xe.selected = Qt, xe.order = xe.order.filter((e) => ne[e] && e !== Bt), d.save(xe));
  }
  function me() {
    return xe.settings;
  }
  function na(e) {
    const r = ne[e];
    if (!r) return;
    Qt = e;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), D.value = r.total, L.value = r.work, P.value = r.rest, ue.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((T) => ({ ...T })), v = (T) => u.filter((B) => B.presetRole === T).map(({ presetRole: B, ...F }) => F);
      ye = (r.warmup || v("warmup")).map((T) => ({ ...T })), qe = (r.cooldown || v("cooldown")).map((T) => ({ ...T })), Ze = u.filter((T) => !T.presetRole), An(r.preset || "movement", !1);
    } else
      D.min = 3, D.max = 40, D.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, ye = (r.warmup || Et).map((u) => ({ ...u })), qe = (r.cooldown || we).map((u) => ({ ...u })), Ze = r.strength.map((u) => Array.isArray(u) ? (([v, T, B, F = !1]) => ({ id: v, name: T, group: B, kind: "work", hidden: !!F }))(u) : { ...u });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === e)), De();
  }
  function wa(e, r, s) {
    const u = e.getBoundingClientRect(), v = u.width / 2, T = u.height / 2, B = r - v, F = s - T;
    let st = 1 / 0, mt = 1 / 0;
    B !== 0 && (st = v / Math.abs(B)), F !== 0 && (mt = T / Math.abs(F));
    const lt = Math.min(Math.max(1 / Math.min(st, mt), 0), 1);
    let it = Math.atan2(F, B) * (180 / Math.PI) + 90;
    return it < 0 && (it += 360), { edge: lt, angle: it };
  }
  function pi(e, r, s = !1) {
    const u = e.getBoundingClientRect(), v = r.clientX - u.left, T = r.clientY - u.top, { edge: B, angle: F } = wa(e, v, T), st = s ? 100 : B * 100;
    e.style.setProperty("--edge-proximity", st.toFixed(3)), e.style.setProperty("--cursor-angle", F.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || st >= 30);
  }
  function qi(e) {
    e.addEventListener("pointermove", (s) => pi(e, s, !1)), e.addEventListener("pointerenter", (s) => pi(e, s, !1)), e.addEventListener("pointerdown", (s) => pi(e, s, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  qi(o("addWorkoutPanel"));
  let $t = !1, Bt = null;
  function Gt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function Ee(e) {
    return e.summary ? e.summary : e.customSequence ? Ta(e.total) + " · custom move" : Ta(e.total) + " · " + ra(e.work) + " / " + ra(e.rest) + " · warm-up + cooldown";
  }
  function Ca(e, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const u = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Gt(r.name) + '</div><div class="sub">' + Gt(Ee(r)) + '</div><span class="sourceTag">' + Gt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Gt(r.name) + "</div></div>";
    const v = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, v), qi(s), s.addEventListener("click", (B) => {
      B.target.closest("button") || na(e);
    }), s.addEventListener("keydown", (B) => {
      (B.key === "Enter" || B.key === " ") && !B.target.closest("button") && (B.preventDefault(), na(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), na(e), ol(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), na(e), Si();
    }), s;
  }
  function lo() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), xe.order.forEach((e) => {
      ne[e] && Ca(e, ne[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Qt));
  }
  lo(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    $t = !0, Bt = "custom-" + Date.now(), ne[Bt] = {
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
    }, na(Bt), ol(!0);
  });
  let Vt = [], ie = 0, ea = 0, fn = 1, Va = !1, Ke = null, ui = null, ua = !1, Yn = xe.settings.upcomingCount ?? "all", ji = "movement";
  function Tn(e, r, s) {
    return (Number(e) - r) / (s - r) * 100;
  }
  function ra(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Ta(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function fi() {
    gt.style.width = Tn(D.value, Number(D.min), Number(D.max)) + "%", Mt.style.width = Tn(L.value, Number(L.min), Number(L.max)) + "%", Jt.style.width = Tn(P.value, Number(P.min), Number(P.max)) + "%", dt.textContent = ra(L.value), W.textContent = ra(P.value);
    const e = Number(ue.value) || 1;
    ta.style.width = Tn(e, 1, 10) + "%", so.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Ga(e) {
    return e.filter((r) => !r.hidden);
  }
  function Ln(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), v = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(v).padStart(2, "0");
  }
  function Lr(e) {
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
  function je(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const s = Number(e.start) || 0, u = Number(e.end) || Number(e.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(e.duration) || 300;
  }
  function co(e, r) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function An(e, r = !0) {
    ji = e, n.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === e));
    const s = ne[Qt];
    s && (s.preset = e), e === "work" ? (D.min = 30, D.max = 480, D.step = 30, L.min = 300, L.max = 7200, L.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (D.value = 60, L.value = 1500, P.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (D.min = 3, D.max = 40, D.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (D.value = 20, L.value = 45, P.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), fi();
  }
  function zi(e, r) {
    const s = ji === "work";
    return e.map((u, v) => ({ ...u, id: r + "-" + v + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(L.value) }));
  }
  function hi() {
    const e = ne[Qt];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !ye.length && (ye = zi(Et, "warm")), e.includeCooldown && !qe.length && (qe = zi(we, "cool")), De());
  }
  function hs() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Vt.length - 1), s = Yn;
    e.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const B = document.createElement("option");
      B.value = String(T), B.textContent = String(T), e.appendChild(B);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", e.appendChild(u);
    const v = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    e.value = v, Yn = v === "all" ? "all" : Number(v);
  }
  function De() {
    Number(D.value) * 60;
    const e = Number(L.value), r = Number(P.value), s = ne[Qt], u = !!(s != null && s.customSequence), v = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Ga(ye), T = Ga(Ze), B = u && !s.includeCooldown ? [] : Ga(qe);
    if (s && (s.total = Number(D.value), s.work = e, s.rest = r, s.rounds = Number(ue.value) || 1, s.customSequence ? (s.sequence = Ze.map((At) => ({ ...At })), s.warmup = ye.map((At) => ({ ...At })), s.cooldown = qe.map((At) => ({ ...At }))) : (s.strength = Ze.map((At) => ({ ...At })), s.warmup = ye.map((At) => ({ ...At })), s.cooldown = qe.map((At) => ({ ...At })))), s != null && s.customSequence) {
      const At = [...v.map((ce) => ({ ...ce, section: "warmup" })), ...T, ...B.map((ce) => ({ ...ce, section: "cooldown" }))].map((ce) => {
        if (ce.kind === "video") return { ...ce, duration: je(ce, e), rest: 0 };
        if (ce.kind === "rest") {
          const ma = ce.useGlobalTiming === !0 ? r : Number(ce.duration) || r;
          return { ...ce, duration: ma, rest: 0 };
        }
        const ha = ce.useGlobalTiming === !1 && Number(ce.duration) || e;
        return { ...ce, duration: ha, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Vt = [], At.forEach((ce, ha) => {
        Vt.push(ce);
        const ma = At[ha + 1];
        ce.kind !== "rest" && ma && ma.kind !== "rest" && Vt.push({
          id: "auto-rest-" + ha,
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
      Vt = [...v.map((At) => ({ ...At, section: "warmup" })), ...T, ...B.map((At) => ({ ...At, section: "cooldown" }))].map((At) => At.kind === "video" ? { ...At, duration: je(At, e), rest: 0 } : At.kind === "rest" ? { ...At, duration: At.useGlobalTiming === !0 ? r : Number(At.duration) || r, rest: 0 } : { ...At, duration: At.useGlobalTiming === !1 && Number(At.duration) || e, rest: r }), Vt.forEach((At, ce) => {
        var ha;
        ((ha = Vt[ce + 1]) == null ? void 0 : ha.kind) === "rest" && (At.rest = 0);
      }), Vt.length && (Vt[Vt.length - 1].rest = 0);
    const F = Math.max(1, Math.min(10, Number(ue.value) || 1)), st = Vt, mt = (At) => F <= 1 ? null : At.section === "warmup" || At.presetRole === "warmup" ? "first" : At.section === "cooldown" || At.presetRole === "cooldown" ? "last" : At.kind === "video" && (At.videoRounds === "first" || At.videoRounds === "last") ? At.videoRounds : null, lt = (At) => !!mt(At), it = st.filter((At) => !lt(At)), Nt = st.filter(lt), ae = it.length, Ft = it.reduce((At, ce) => At + ce.duration + ce.rest, 0), Rt = Nt.reduce((At, ce) => At + ce.duration + ce.rest, 0), Lt = [
      Nt.some((At) => At.section === "warmup" || At.presetRole === "warmup") && "warm-up",
      Nt.some((At) => At.section === "cooldown" || At.presetRole === "cooldown") && "cooldown",
      Nt.some((At) => At.kind === "video" && !At.section && !At.presetRole) && "video"
    ].filter(Boolean), he = Lt.length > 1 ? Lt.slice(0, -1).join(", ") + " & " + Lt[Lt.length - 1] : Lt[0] || "";
    Vt = [];
    const ge = (At, ce) => {
      const ha = mt(At);
      return !ha || (ha === "first" ? ce === 1 : ce === F);
    };
    for (let At = 1; At <= F; At++)
      if (st.filter((ce) => ge(ce, At)).forEach((ce, ha) => Vt.push({ ...ce, id: ce.id + (F > 1 ? "-r" + At : ""), round: At, roundIndex: ha })), At < F && ae)
        if (s != null && s.customSequence)
          Vt.push({ id: "round-break-" + At, name: "Rest", group: "Round " + (At + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: At, roundIndex: ae, roundBreak: !0 });
        else {
          const ce = Vt[Vt.length - 1];
          ce.rest = r, ce.roundBreakAfter = !0;
        }
    fi();
    const qt = Vt.reduce((At, ce) => At + ce.duration + ce.rest, 0), be = Math.round(Ft / 60), Le = Math.round(qt / 60), de = F > 1 ? Ta(be) + " × " + F + " rounds" + (Rt ? " + " + ra(Rt) + " " + he : "") + " (" + Ta(Le) + ")" : Ta(Le), oe = [v.length ? "warm-up" : "", B.length ? "cooldown" : ""].filter(Boolean), ca = s != null && s.customSequence ? de + " · " + ae + " items" + (oe.length && !(F > 1 && Rt) ? " · " + oe.join(" + ") : "") : de + " · " + ra(e) + " / " + ra(r) + (oe.length && !(F > 1 && Rt) ? " · " + oe.join(" + ") : "");
    ft.textContent = ra(Ft);
    const Ba = Vt.filter((At) => !At.roundBreak).length, ze = F > 1 ? Ba + " activities · " + F + " rounds" : ae + " activities";
    Se.textContent = F > 1 ? F + " rounds · " + Ta(Le) + " total" : "1 round", o("roundsCount").textContent = F, n.querySelectorAll("[data-rounds-step]").forEach((At) => {
      At.disabled = Number(At.dataset.roundsStep) < 0 ? F <= 1 : F >= 10;
    }), s && (s.summary = ca, s.activityCount = ae);
    const Ri = n.querySelector(".workoutPanel.active .sub");
    Ri && (Ri.textContent = ca), Na.textContent = ca, He(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((At) => At.textContent = ze), fi(), No(), Wa(), bn(), hs(), $t && at(), vt.workout.classList.contains("active") && !Ke && _s();
  }
  const Pa = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Nn = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Vi = {
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
  }, Ua = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Vi[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Ua(e.dataset.icon);
  });
  let oa = null, _e = null;
  function Zn(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function ke(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function Kn(e, r, s = {}) {
    const u = e.kind === "rest", v = e.kind === "video", T = v ? e.useVideoLength !== !1 : u ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, B = Number(u ? P.value : L.value), F = Zn(v ? e.useVideoLength === !1 ? e.duration : je({ ...e, useVideoLength: !0 }) : T ? B : e.duration || B), st = v && (Number(e.videoDuration) > 0 || Number(e.end) > 0), mt = v ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Gt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([qt, be]) => '<option value="' + qt + '"' + ((e.videoRounds || "every") === qt ? " selected" : "") + ">" + be + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Gt(e.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', lt = v ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (st ? " · " + Ln(je({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + ra(B), it = document.createElement("div");
    it.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), it.dataset.index = r, it.dataset.id = e.id;
    const Nt = s.isNew ?? (_e == null ? void 0 : _e.item) === e, ae = s.sheet ? '<div class="moveEditActions sheetActions">' + (Nt ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Gt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Nt ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    it.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (v ? " videoFields" : "") + '">' + mt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Gt(lt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + F.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((qt) => '<option value="' + qt + '"' + (qt === F.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[qt] + "</option>").join("") + "</select></div></div>" + ae + "</div>";
    const Ft = (qt) => it.querySelector("[data-f=" + qt + "]"), Rt = () => {
      const qt = Ft("global").checked;
      Ft("dur").disabled = qt, Ft("unit").disabled = qt, it.querySelector(".creatorDurationRow").classList.toggle("isDisabled", qt);
    };
    Ft("global").addEventListener("change", Rt), Rt();
    const Lt = () => {
      var qt;
      if (s.sheet) {
        (qt = s.onCancel) == null || qt.call(s);
        return;
      }
      Nt && Po(), oa = null, De();
    }, he = () => {
      var Le;
      if (v) {
        ge();
        return;
      }
      const qt = Ft("name").value.trim();
      if (!qt) {
        Ft("name").focus();
        return;
      }
      e.name = qt, e.group = Ft("group").value.trim() || (u ? "Rest" : "Movement");
      const be = Ft("global").checked;
      if (e.useGlobalTiming = be, be || (e.duration = Math.max(u ? 5 : 1, co(Ft("dur").value, Ft("unit").value))), s.sheet) {
        (Le = s.onSaved) == null || Le.call(s);
        return;
      }
      Nt && (_e = null), oa = null, De(), Fe(Nt ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, ge = () => {
      var oe;
      const qt = Ft("url").value.trim(), be = Lr(qt);
      if (!be) {
        Ft("urlError").hidden = !1, Ft("url").classList.add("invalid"), Ft("url").focus();
        return;
      }
      const Le = be.id !== e.videoId;
      e.url = qt, e.videoId = be.id, e.start = be.start, e.end = be.end, Le && (e.videoDuration = null, e.videoError = null);
      const de = Ft("name").value.trim();
      e.autoName = !de, e.name = de || (Le ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ft("rounds").value, e.useVideoLength = Ft("global").checked, e.useVideoLength || (e.duration = Math.max(5, co(Ft("dur").value, Ft("unit").value))), s.sheet ? (oe = s.onSaved) == null || oe.call(s) : (Nt && (_e = null), oa = null, De(), Fe(Nt ? "Video added" : "Video updated")), (Le || !e.videoDuration || e.autoName && !e.videoTitle) && hd(e);
    };
    if (v && Ft("url").addEventListener("input", () => {
      Ft("urlError").hidden = !0, Ft("url").classList.remove("invalid");
    }), it.querySelector("[data-a=cancel]").addEventListener("click", Lt), it.querySelector("[data-a=save]").addEventListener("click", he), s.sheet && !Nt) {
      it.querySelector("[data-a=hide]").addEventListener("click", () => {
        var be;
        return (be = s.onHide) == null ? void 0 : be.call(s);
      });
      const qt = it.querySelector("[data-a=remove]");
      pr(qt, qt.querySelector(".removeFill"), 1200, () => {
        var be;
        return (be = s.onRemove) == null ? void 0 : be.call(s);
      });
    }
    return it.addEventListener("keydown", (qt) => {
      qt.key === "Escape" && (qt.preventDefault(), qt.stopPropagation(), Lt()), qt.key === "Enter" && qt.target.matches("input") && (qt.preventDefault(), he());
    }), it;
  }
  function Pn(e, r) {
    const s = o(r);
    s.innerHTML = "", e.forEach((u, v) => {
      if (u === oa && !xt()) {
        s.appendChild(Kn(u, v));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Xr(u) ? " noMeta" : ""), T.dataset.index = v, T.dataset.id = u.id;
      const B = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : ra(u.duration) : u.useGlobalTiming === !1 ? ra(u.duration) : "Global timing", F = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", st = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + ra(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? Ln(je(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + B, mt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Gt(u.name) + '. Drag, or use the up and down arrow keys">' + Pa + "</button>", lt = '<div class="moveText"><div class="moveItemName">' + Gt(u.name) + F + '</div><div class="moveMeta">' + Gt(st) + "</div></div>", it = (Ft) => Ft.addEventListener("keydown", (Rt) => {
        var ge, qt;
        if (Rt.key !== "ArrowUp" && Rt.key !== "ArrowDown") return;
        Rt.preventDefault();
        const Lt = e.indexOf(u), he = Lt + (Rt.key === "ArrowUp" ? -1 : 1);
        he < 0 || he >= e.length || (e.splice(Lt, 1), e.splice(he, 0, u), De(), (qt = (ge = o(r).children[he]) == null ? void 0 : ge.querySelector(".dragHandle")) == null || qt.focus());
      });
      if (xt()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (u.name || "step")), T.innerHTML = mt + lt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ft = T.querySelector(".dragHandle");
        Ft.addEventListener("pointerdown", (Rt) => Ya(Rt, T, s, e)), it(Ft), T.addEventListener("click", (Rt) => {
          Rt.target.closest(".dragHandle") || Wt(u, e);
        }), T.addEventListener("keydown", (Rt) => {
          Rt.key === "Enter" && Rt.target === T && (Rt.preventDefault(), Wt(u, e));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = mt + lt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Gt(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Gt(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Nn + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        Po(), oa = u, De(), ke();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, De();
      });
      const Nt = T.querySelector(".removeBtn");
      pr(Nt, Nt.querySelector(".removeFill"), 1200, () => {
        const Ft = e.indexOf(u);
        Ft < 0 || (e.splice(Ft, 1), De(), Fe("Removed " + u.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ft, e.length), 0, u), De();
        } }));
      });
      const ae = T.querySelector(".dragHandle");
      ae.addEventListener("pointerdown", (Ft) => Ya(Ft, T, s, e)), it(ae), s.appendChild(T);
    });
  }
  const La = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Bo = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function Ya(e, r, s, u) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const v = e.currentTarget, T = e.pointerId, B = !La();
    try {
      v.setPointerCapture(T);
    } catch {
    }
    const F = r.closest(".exerciseScroller") || mn(r), st = s.style.position;
    s.style.position = "relative";
    const mt = [...s.children].filter((pe) => pe.classList.contains("moveRow")), lt = mt.indexOf(r), it = parseFloat(getComputedStyle(s).rowGap) || 8, Nt = r.offsetHeight, ae = Nt + it, Ft = mt.map((pe) => pe.offsetTop), Rt = mt.map((pe) => pe.offsetHeight), Lt = () => s.getBoundingClientRect().top, he = s.getBoundingClientRect().width, ge = e.clientY - (Lt() + Ft[lt]), qt = e.clientX;
    let be = e.clientY, Le = e.clientX, de = Lt() + Ft[lt], oe = 0, ca = 0, Ba = 0, ze = 1, Ri = 0, At = lt, ce = !1, ha = 0, ma = !1, Nl = !1, is = Ft[lt];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Bo(8);
    const Pl = () => {
      const pe = be - ge + Nt / 2 - Lt();
      let Me = 0;
      return mt.forEach((Ie, sn) => {
        sn !== lt && pe > Ft[sn] + Rt[sn] / 2 && Me++;
      }), Me;
    }, Il = () => {
      mt.forEach((pe, Me) => {
        if (Me === lt) return;
        const Ie = lt < At && Me > lt && Me <= At ? -ae : lt > At && Me >= At && Me < lt ? ae : 0;
        pe.style.transform = Ie ? "translateY(" + Ie + "px)" : "";
      });
    }, Vs = () => {
      const pe = s.getBoundingClientRect(), Me = Math.abs(Le - qt) > Math.max(80, he * 0.3) || Le < pe.left - 24 || Le > pe.right + 24;
      Me !== ce && (ce = Me, r.classList.toggle("willReturn", Me), Bo(Me ? 10 : 4));
      const Ie = ce ? lt : Pl();
      Ie !== At && (At = Ie, Il(), ce || Bo(4));
    }, Bi = () => {
      if (At === lt) return Ft[lt];
      const pe = mt.filter((Ie, sn) => sn !== lt);
      let Me = Ft[0];
      for (let Ie = 0; Ie < At; Ie++) Me += pe[Ie].offsetHeight + it;
      return Me;
    }, rs = () => {
      const pe = B ? Math.min(Math.abs(oe) / 40, 1) : 0, Me = B && !ma ? Math.max(-3, Math.min(3, Ba * 0.6)) : 0;
      r.style.transform = "translate(" + ca.toFixed(2) + "px," + (de - (Lt() + Ft[lt])).toFixed(2) + "px) rotate(" + Me.toFixed(2) + "deg) scale(" + (ze * (1 - 0.04 * pe)).toFixed(4) + "," + (ze * (1 + 0.06 * pe)).toFixed(4) + ")";
    }, se = () => {
      ha = requestAnimationFrame(se);
      const pe = Le - qt, Me = ma ? Lt() + is : be - ge, Ie = ma ? 0 : ce ? pe * 0.9 : Math.max(-22, Math.min(22, pe * 0.22)), sn = ma ? 1 : ce ? 0.97 : 1.035;
      if (!B) {
        de = Me, ca = ma ? 0 : Ie, ze = 1, rs(), ma && Ye();
        return;
      }
      const Wp = ma ? 0.24 : 0.2, qp = ma ? 0.62 : 0.68;
      oe = (oe + (Me - de) * Wp) * qp, de += oe, Ba = (Ba + (Ie - ca) * 0.16) * 0.7, ca += Ba, Ri = (Ri + (sn - ze) * 0.22) * 0.6, ze += Ri, rs(), ma && Math.abs(oe) < 0.15 && Math.abs(Me - de) < 0.5 && Math.abs(ca) < 0.5 && Math.abs(ze - 1) < 3e-3 && Ye();
    }, Be = setInterval(() => {
      if (!F || ma) return;
      const pe = F.getBoundingClientRect(), Me = 56, Ie = be < pe.top + Me ? -10 : be > pe.bottom - Me ? 10 : 0;
      Ie && (F.scrollTop += Ie, Vs());
    }, 30);
    function Ye() {
      if (Nl) return;
      Nl = !0, cancelAnimationFrame(ha);
      const pe = At !== lt, Me = r.dataset.id;
      if (s.classList.remove("reordering"), mt.forEach((sn) => {
        sn.style.transition = "none", sn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = st, pe) {
        const [sn] = u.splice(lt, 1);
        u.splice(At, 0, sn);
      }
      De();
      const Ie = Me && s.querySelector('.moveRow[data-id="' + Me + '"]');
      Ie && B && Ie.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), pe && Fe("Order saved");
    }
    const ga = (pe) => {
      if (pe.pointerId === T) {
        if (pe.pointerType === "mouse" && pe.buttons === 0) {
          Bn();
          return;
        }
        be = pe.clientY, Le = pe.clientX, Vs();
      }
    }, rn = (pe) => {
      pe.pointerId === T && Bn();
    };
    function Bn() {
      ma || (window.removeEventListener("pointermove", ga, !0), window.removeEventListener("pointerup", rn, !0), window.removeEventListener("pointercancel", rn, !0), v.removeEventListener("lostpointercapture", Bn), clearInterval(Be), ce && At !== lt && (At = lt, Il()), is = Bi(), ma = !0, Bo(6), setTimeout(Ye, 800));
    }
    window.addEventListener("pointermove", ga, !0), window.addEventListener("pointerup", rn, !0), window.addEventListener("pointercancel", rn, !0), v.addEventListener("lostpointercapture", Bn), ha = requestAnimationFrame(se), rs();
  }
  function No() {
    var v, T, B, F;
    const e = ne[Qt], r = (v = o("warmupList")) == null ? void 0 : v.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), u = (F = (B = o("strengthList")) == null ? void 0 : B.closest("section")) == null ? void 0 : F.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), Pn(ye, "warmupList"), Pn(Ze, "strengthList"), Pn(qe, "cooldownList");
  }
  function Po() {
    if (!_e) return;
    const { item: e, arr: r } = _e;
    _e = null;
    const s = r.indexOf(e);
    s >= 0 && r.splice(s, 1), oa === e && (oa = null);
  }
  function hn(e) {
    return e.id === "warmupList" ? { arr: ye, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: qe, kind: "cooldown", group: "Cooldown" } : { arr: Ze, kind: "work", group: "" };
  }
  function $n(e, r) {
    const s = hn(r), u = Date.now().toString(36);
    return e === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(L.value) };
  }
  const Za = "cubic-bezier(.34,1.46,.64,1)";
  function Gi(e, r) {
    if (La() || !e) {
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
      Math.abs(F) < 0.5 || T.animate([{ transform: "translateY(" + F + "px)" }, { transform: "none" }], { duration: 440, easing: Za });
    });
  }
  function Io(e, r) {
    if (!e || La()) return;
    const s = e.offsetHeight, u = Math.max(0, s - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Za });
  }
  function mi(e, r, s, u) {
    const { arr: v } = hn(r), T = $n(e, r);
    v.splice(Math.max(0, Math.min(s, v.length)), 0, T), _e = { item: T, arr: v }, oa = T, Gi(r.closest(".exerciseScroller,.createStepSlot") || r, () => De());
    const B = r.querySelector(".moveRow.editing");
    return Io(B, u), ke(e === "rest"), B;
  }
  function mn(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const x = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function C(e, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Pa + '</span><span class="addGhostText"><strong>' + Gt(r[0]) + "</strong><small>" + Gt(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function A(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function I(e, r, s, u) {
    (oa || _e) && (Po(), oa = null, De());
    const v = e.getBoundingClientRect(), T = C(r, x[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = v.width + "px", T.style.height = v.height + "px", T.style.transform = "translate(" + v.left + "px," + v.top + "px)", e.classList.add("lifting");
    const B = mn(e);
    return Y({
      ghost: T,
      origin: v,
      sx: s,
      sy: u,
      scroller: B,
      column: e.closest(".exerciseScroller,.createFlow") || B,
      home: () => e.getBoundingClientRect(),
      onDrop: (F, st, mt) => {
        A(T), e.classList.remove("lifting"), mi(r, F, st, mt);
      },
      onReturn: () => {
        A(T), e.classList.remove("lifting");
      }
    });
  }
  function Y({ ghost: e, origin: r, sx: s, sy: u, scroller: v, column: T, home: B, onDrop: F, onReturn: st, rowLook: mt = !1 }) {
    var rs;
    const lt = !La(), it = ((rs = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : rs.offsetHeight) || 80, Nt = s - r.left, ae = u - r.top, Ft = 44;
    let Rt = s, Lt = u, he = r.left, ge = r.top, qt = 0, be = 0, Le = !lt, de = null, oe = null, ca = -1, Ba = 0, ze = null;
    const Ri = () => ["warmupList", "strengthList", "cooldownList"].map((se) => o(se)).filter((se) => se && se.getClientRects().length && !se.closest("[hidden]")), At = (se) => {
      if (se === de) return;
      de = se, e.classList.toggle("overList", !!se || mt);
      const Be = se ? se.getBoundingClientRect().width : r.width;
      e.style.width = Be + "px", e.style.height = (se ? it : r.height) + "px";
    }, ce = (se) => {
      se.classList.add("leaving"), se.style.height = "0px", se.style.marginTop = "-8px", setTimeout(() => se.remove(), lt ? 320 : 0);
    }, ha = (se, Be, Ye) => {
      if (oe && oe.parentNode === se && ca === Ye || (oe && (ce(oe), oe = null, ca = -1), !se)) return;
      const ga = document.createElement("div");
      ga.className = "dropSlot", se.insertBefore(ga, Be), oe = ga, ca = Ye, ga.getBoundingClientRect(), ga.style.height = it + "px", ga.style.marginTop = "0px";
    }, ma = () => {
      let se = null, Be = 1 / 0;
      for (const Bn of Ri()) {
        const pe = Bn.getBoundingClientRect();
        if (Rt < pe.left - 48 || Rt > pe.right + 48) continue;
        const Me = pe.top - 28, Ie = pe.bottom + 28, sn = Lt < Me ? Me - Lt : Lt > Ie ? Lt - Ie : 0;
        sn < Be && (Be = sn, se = Bn);
      }
      const Ye = T == null ? void 0 : T.getBoundingClientRect(), rn = Ye && Rt >= Ye.left && Rt <= Ye.right && Lt >= Ye.top && Lt <= Ye.bottom || Be === 0 ? se : null;
      if (rn) {
        const Bn = [...rn.children].filter((Me) => Me.classList.contains("moveRow"));
        let pe = Bn.findIndex((Me) => {
          const Ie = Me.getBoundingClientRect();
          return Lt < Ie.top + Ie.height / 2;
        });
        pe < 0 && (pe = Bn.length), ha(rn, Bn[pe] || null, pe);
      } else ha(null);
      At(rn);
    }, Nl = () => {
      if (ze) return ze.aim();
      if (de) {
        const se = de.getBoundingClientRect();
        let Be = Lt - it / 2;
        return oe && (Be = Be * 0.6 + oe.getBoundingClientRect().top * 0.4), { x: se.left, y: Be };
      }
      return { x: Rt - Nt, y: Lt - ae };
    }, is = (se, Be, Ye, ga) => {
      e.style.transform = "translate(" + he + "px," + ge + "px) rotate(" + se + "deg) rotate(" + Be + "rad) scale(" + Ye + "," + ga + ") rotate(" + -Be + "rad)";
    }, Pl = () => {
      if (Ba = requestAnimationFrame(Pl), !Le) {
        const pe = Rt - s, Me = Lt - u, Ie = Math.min(Math.hypot(pe, Me) / Ft, 1);
        he = r.left + pe * 0.35, ge = r.top + Me * 0.35, is(0, Math.atan2(Me, pe), 1 + 0.155 * Ie, 1 - 0.1 * Ie);
        return;
      }
      const se = Nl();
      if (!lt) {
        he = se.x, ge = se.y, is(0, 0, 1, 1), ze && (cancelAnimationFrame(Ba), ze.done());
        return;
      }
      const Be = ze ? ze.k : 0.17, Ye = ze ? ze.d : 0.7;
      qt = (qt + (se.x - he) * Be) * Ye, be = (be + (se.y - ge) * Be) * Ye, he += qt, ge += be;
      const ga = Math.hypot(qt, be), rn = Math.min(ga / 48, 1), Bn = de || ze ? 0 : Math.max(-5, Math.min(5, qt * 0.32));
      is(Bn, Math.atan2(be, qt), 1 + 0.1 * rn, 1 - 0.063 * rn), ze && ga < 0.15 && Math.hypot(se.x - he, se.y - ge) < 0.6 && (cancelAnimationFrame(Ba), ze.done());
    }, Il = setInterval(() => {
      if (!v || ze) return;
      const se = v.getBoundingClientRect(), Be = 64, Ye = Lt < se.top + Be ? -(se.top + Be - Lt) / 4 : Lt > se.bottom - Be ? (Lt - (se.bottom - Be)) / 4 : 0;
      Ye && (v.scrollTop += Math.max(-18, Math.min(18, Ye)), ma());
    }, 30);
    Ba = requestAnimationFrame(Pl);
    let Vs = !1;
    const Bi = (se, Be) => {
      if (Vs) return;
      Vs = !0, cancelAnimationFrame(Ba);
      const Ye = oe ? oe.offsetHeight : it;
      !se && oe && (oe.remove(), oe = null), se ? F(se, Be, Ye) : st();
    };
    return {
      move(se, Be) {
        Rt = se, Lt = Be, !Le && Math.hypot(Rt - s, Lt - u) > Ft && (Le = !0, qt = (Rt - s) * 0.085, be = (Lt - u) * 0.085), Le && ma();
      },
      drop(se) {
        clearInterval(Il);
        const Be = de, Ye = ca;
        if (!se && Be && oe) {
          const ga = oe;
          ze = { k: 0.24, d: 0.62, aim: () => {
            const rn = ga.getBoundingClientRect();
            return { x: rn.left, y: rn.top };
          }, done: () => Bi(Be, Ye) }, setTimeout(() => Bi(Be, Ye), 650), lt || (cancelAnimationFrame(Ba), Bi(Be, Ye));
          return;
        }
        ha(null), At(null), ze = { k: 0.2, d: 0.66, aim: () => {
          const ga = B();
          return { x: ga.left, y: ga.top };
        }, done: () => Bi(null) }, setTimeout(() => Bi(null), 650), lt || (cancelAnimationFrame(Ba), Bi(null));
      }
    };
  }
  function J(e, r) {
    let s = !1;
    e.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (xt()) {
        Zt(r);
        return;
      }
      const v = o("strengthList"), T = mi(r, v, hn(v).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: La() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const v = u.pointerId, T = u.clientX, B = u.clientY;
      let F = null, st = !1;
      try {
        e.setPointerCapture(v);
      } catch {
      }
      const mt = (Lt) => {
        if (Lt.pointerId === v) {
          if (Lt.pointerType === "mouse" && Lt.buttons === 0) {
            Rt(!1);
            return;
          }
          if (!F) {
            if (Math.hypot(Lt.clientX - T, Lt.clientY - B) < 6) return;
            F = I(e, r, T, B);
          }
          F.move(Lt.clientX, Lt.clientY);
        }
      }, lt = (Lt) => {
        Lt.pointerId === v && Rt(!1);
      }, it = (Lt) => {
        Lt.pointerId === v && Rt(!0);
      }, Nt = () => Rt(!1), ae = () => Rt(!0), Ft = (Lt) => {
        Lt.key === "Escape" && F && (Lt.preventDefault(), Lt.stopPropagation(), Rt(!0));
      };
      function Rt(Lt) {
        if (!st && (st = !0, window.removeEventListener("pointermove", mt, !0), window.removeEventListener("pointerup", lt, !0), window.removeEventListener("pointercancel", it, !0), window.removeEventListener("keydown", Ft, !0), window.removeEventListener("blur", ae), e.removeEventListener("lostpointercapture", Nt), F)) {
          const he = F;
          F = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), he.drop(Lt);
        }
      }
      window.addEventListener("pointermove", mt, !0), window.addEventListener("pointerup", lt, !0), window.addEventListener("pointercancel", it, !0), window.addEventListener("keydown", Ft, !0), window.addEventListener("blur", ae), e.addEventListener("lostpointercapture", Nt);
    });
  }
  const pt = (oc = window.matchMedia) == null ? void 0 : oc.call(window, "(max-width: 620px)");
  function xt() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const yt = (e) => e.charAt(0).toUpperCase() + e.slice(1), It = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let _t = null, St = null;
  function Yt(e, r, s, u) {
    Dt(), o("sheetTitle").textContent = e;
    const v = o("sheetBody");
    v.innerHTML = "", v.appendChild(r), _t = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !v.contains(r)) return;
      const T = u ? v.querySelector("input[data-f=url],input[data-f=name]") : v.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, La() ? 0 : 360);
  }
  function Dt() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = _t;
    _t = null, r == null || r(), setTimeout(le, 0);
  }
  o("sheetScrim").addEventListener("click", Dt), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Dt());
  });
  function Wt(e, r) {
    const s = Kn(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Dt(), De(), Fe(yt(It(e)) + " updated");
      },
      onCancel: Dt,
      onHide() {
        e.hidden = !e.hidden, Dt(), De(), Fe((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Dt();
        const u = r.indexOf(e);
        u < 0 || (r.splice(u, 1), De(), Fe("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, e), De();
        } }));
      }
    });
    Yt("Edit " + It(e), s, null, !1);
  }
  function Kt() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, v]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ua(s) + "</span><span><strong>" + u + "</strong><small>" + v + "</small></span>", T.addEventListener("click", () => Zt(r)), e.appendChild(T);
    }), Yt("Add to the move", e, null, !1);
  }
  function Zt(e) {
    St && Ho();
    const r = $n(e, o("strengthList")), s = Kn(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Dt(), Ge(r, e);
      },
      onCancel: Dt
    });
    Yt("New " + It(r), s, null, !0);
  }
  const Tt = o("workoutModal").querySelector(".modalStatic"), ee = { parent: Tt.parentNode, next: Tt.nextSibling };
  function re() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Tt);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Dt), e.appendChild(r), Yt("Setup", e, () => {
      ee.parent.insertBefore(Tt, ee.next), He();
    }, !1);
  }
  function He() {
    var r, s;
    const e = o("setupSummaryName");
    e && (e.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = ne[Qt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = Na.textContent);
  }
  o("setupSummary").addEventListener("click", re), o("addFab").addEventListener("click", Kt);
  function Ht() {
    const e = o("strengthList");
    return mn(e) || e.closest(".exerciseScroller");
  }
  function Re() {
    const e = o("strengthList").getBoundingClientRect(), r = (Ht() || o("strengthList")).getBoundingClientRect(), s = (St == null ? void 0 : St.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function Ge(e, r) {
    var F;
    const s = C(r, [e.name || x[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Gt(e.name) + '">✕</button>', s.appendChild(u), St = { item: e, type: r, ghost: s };
    const v = ((F = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : F.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = v + "px";
    const T = Re(), B = _a.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + B + "px)", s.getBoundingClientRect(), La() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", Ho), u.querySelector("[data-a=discard]").addEventListener("click", po), s.addEventListener("pointerdown", gn);
  }
  function gn(e) {
    if (!St || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: s } = St, u = e.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const v = s.getBoundingClientRect(), T = Ht(), B = Y({
      ghost: s,
      origin: { left: v.left, top: v.top, width: v.width, height: v.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Re,
      onDrop: (Rt, Lt, he) => {
        St = null, A(s), vn(r, Rt, Lt, he);
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
    }, mt = (Rt) => {
      Rt.pointerId === u && Ft(!1);
    }, lt = (Rt) => {
      Rt.pointerId === u && Ft(!0);
    }, it = () => Ft(!1), Nt = () => Ft(!0), ae = (Rt) => {
      Rt.key === "Escape" && (Rt.preventDefault(), Ft(!0));
    };
    function Ft(Rt) {
      F || (F = !0, window.removeEventListener("pointermove", st, !0), window.removeEventListener("pointerup", mt, !0), window.removeEventListener("pointercancel", lt, !0), window.removeEventListener("keydown", ae, !0), window.removeEventListener("blur", Nt), s.removeEventListener("lostpointercapture", it), B.drop(Rt));
    }
    window.addEventListener("pointermove", st, !0), window.addEventListener("pointerup", mt, !0), window.addEventListener("pointercancel", lt, !0), window.addEventListener("keydown", ae, !0), window.addEventListener("blur", Nt), s.addEventListener("lostpointercapture", it);
  }
  function vn(e, r, s, u) {
    const v = hn(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = v.kind, v.group && (!e.group || e.group === "Movement") && (e.group = v.group)), v.arr.splice(Math.max(0, Math.min(s, v.arr.length)), 0, e), Gi(r.closest(".exerciseScroller,.createStepSlot") || r, () => De()), Io(r.querySelector('.moveRow[data-id="' + e.id + '"]'), u), Fe(yt(It(e)) + " added");
  }
  function Ho() {
    var u;
    if (!St) return;
    const { item: e, ghost: r } = St;
    St = null, A(r);
    const s = o("strengthList");
    vn(e, s, hn(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: La() ? "auto" : "smooth" });
  }
  function po() {
    if (!St) return;
    const e = St.ghost;
    St = null, A(e), Fe("Discarded");
  }
  function Ui() {
    St && (St.ghost.remove(), St = null);
  }
  window.addEventListener("resize", () => {
    if (St != null && St.ghost.classList.contains("hovering")) {
      const e = Re();
      St.ghost.style.width = e.width + "px", St.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (ic = pt == null ? void 0 : pt.addEventListener) == null || ic.call(pt, "change", () => {
    Dt(), St && !xt() && Ho(), No();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function le() {
    const e = o("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !xt()) {
      Oa();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, v = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: v + "px", height: T + "px", top: s + "px", left: u + "px" });
    const B = e.getBoundingClientRect();
    Math.abs(B.top - s) > 0.5 && (e.style.top = 2 * s - B.top + "px"), Math.abs(B.left - u) > 0.5 && (e.style.left = 2 * u - B.left + "px");
  }
  function Oa() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (rc = window.visualViewport) == null || rc.addEventListener("resize", le), (sc = window.visualViewport) == null || sc.addEventListener("scroll", le), window.addEventListener("resize", le), window.addEventListener("scroll", le, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(le, 250));
  function Wa() {
    Ze.length > 0;
    const e = o("addMovementBtn"), r = o("addRestBtn");
    e && (e.innerHTML = Pa + "<span>Add movement</span>"), r && (r.innerHTML = Pa + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = Pa + "<span>Add video</span>");
  }
  function bn() {
    const e = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = e, s.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + ra(L.value);
    const u = o("useGlobalRestTiming").checked, v = o("addRestDuration"), T = o("addRestUnit");
    v.disabled = u, T.disabled = u, v.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + ra(P.value);
  }
  let uo = "movement";
  function Ar(e) {
    uo = e;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = e !== "movement", s.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), bn();
  }
  function fo() {
    ne[Qt];
    const e = $t ? !0 : o("useGlobalTiming").checked, r = e ? Number(L.value) : co(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = $t ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(P.value) : co(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (uo === "rest") {
      const v = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      Ze.push({
        id: "rest-" + Date.now(),
        name: v,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(P.value))
      }), De(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Fe("Rest added"), $t && (S("movements"), at());
    } else {
      const v = o("addMovementInput").value.trim();
      if (!v) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      Ze.push({
        id: "movement-" + Date.now(),
        name: v,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(L.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", De(), o("movementCreator").hidden = !0, Fe("Movement added"), $t && (S("movements"), at());
    }
    Wa();
  }
  let xa = null;
  function Fe(e, r) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = e, s.appendChild(u), r) {
      const v = document.createElement("button");
      v.type = "button", v.className = "toastAction", v.textContent = r.label, v.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(xa);
      }), s.appendChild(v);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(xa), xa = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Xs = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Js = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function _r(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Fo(e, r) {
    return Xs[_r(r)];
  }
  function ad(e) {
    return Js[_r(e)];
  }
  function Ue(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Aa() {
    return { morning: me().morningTime || "08:00", evening: me().eveningTime || "19:00" };
  }
  function Oo(e) {
    const [r, s] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function ms(e) {
    const r = Aa();
    return e.getHours() * 60 + e.getMinutes() >= Oo(r.evening) ? "evening" : "morning";
  }
  function Yi(e, r) {
    return xe.checkins.find((s) => s.date === e && s.slot === r);
  }
  function Er(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Dr() {
    const e = /* @__PURE__ */ new Date(), r = Ue(e), s = ms(e), u = Aa(), v = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && v < Oo(u.morning) || Er(Yi(r, s)) ? null : s;
  }
  const wn = o("checkinModal"), sa = o("checkinTab"), nd = o("checkinBadge"), Xn = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function gs(e) {
    const { input: r, fill: s } = Xn[e];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", Fo(e, r.value));
  }
  Object.keys(Xn).forEach((e) => Xn[e].input.addEventListener("input", () => gs(e)));
  let Ka = null;
  function Qs() {
    const e = Aa(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < Oo(e.morning) ? "Next check-in at " + e.morning : s < Oo(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function od() {
    const e = Aa(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (v, T) => {
      const [B, F] = v.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), B, F);
    };
    return s < Oo(e.morning) ? { date: u(e.morning), time: e.morning } : s < Oo(e.evening) ? { date: u(e.evening), time: e.evening } : { date: u(e.morning, !0), time: e.morning };
  }
  let Zi = null, Rr = null;
  function tl() {
    if (Dr()) {
      Br(), ho();
      return;
    }
    const e = od(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), v = r % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(v).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function id() {
    tl(), sa.classList.add("peek"), clearInterval(Rr), Rr = setInterval(tl, 1e3), clearTimeout(Zi), Zi = setTimeout(Br, 6e3);
  }
  function Br() {
    sa.classList.remove("peek"), clearInterval(Rr), clearTimeout(Zi);
  }
  function Nr() {
    const e = Dr();
    if (!e) {
      sa.classList.contains("peek") ? Br() : id();
      return;
    }
    Ka = { date: Ue(/* @__PURE__ */ new Date()), slot: e };
    const s = Yi(Ka.date, e), u = xe.checkins.find((v) => Er(v));
    Object.keys(Xn).forEach((v) => {
      Xn[v].input.value = (s == null ? void 0 : s[v]) ?? (u == null ? void 0 : u[v]) ?? 50, gs(v);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", wn.classList.add("open"), wn.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Xn.mood.input.focus());
  }
  function Ki() {
    wn.classList.remove("open"), wn.setAttribute("aria-hidden", "true"), Ka && ($i = Ka.date + "-" + Ka.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", $i);
    } catch {
    }
    Ka = null, ho();
  }
  function el() {
    if (!Ka) return;
    if (Er(Yi(Ka.date, Ka.slot))) {
      Ki();
      return;
    }
    const { date: e, slot: r } = Ka;
    let s = Yi(e, r);
    s || (s = { date: e, slot: r }, xe.checkins.unshift(s), xe.checkins = xe.checkins.slice(0, 2e3)), s.mood = Number(Xn.mood.input.value), s.energy = Number(Xn.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), za(), d.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: Fo("mood", s.mood), energy_label: Fo("energy", s.energy) }), Fe((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Ki(), Xi(), Ji(), Co(), kn();
  }
  let $i = "";
  try {
    $i = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ho() {
    const e = Dr();
    nd.hidden = !e, sa.hidden = !e, e || Br(), sa.classList.toggle("due", !!e), sa.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Qs()), sa.title = e ? "Check in now" : Qs();
  }
  function vs() {
    ho();
    const e = Dr();
    !e || wn.classList.contains("open") || me().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !vt.home.classList.contains("active") || _a.classList.contains("open") || $i !== Ue(/* @__PURE__ */ new Date()) + "-" + e && Nr());
  }
  sa.addEventListener("click", Nr), o("checkinLater").addEventListener("click", Ki), o("checkinSave").addEventListener("click", el), wn.addEventListener("click", (e) => {
    e.target === wn && Ki();
  }), wn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ki());
  }), setInterval(vs, 3e4);
  function Xi() {
    const e = Ue(/* @__PURE__ */ new Date()), r = (s) => xe.checkins.find((u) => u.date === e && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const v = r(s);
      o(u).textContent = v ? Fo(s, v[s]) : "—";
    });
  }
  function Ji() {
    const e = o("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((mt, lt) => {
      const it = new Date(s.getFullYear(), s.getMonth(), s.getDate() + lt), Nt = Ue(it), ae = xe.checkins.filter((Rt) => Rt.date === Nt), Ft = (Rt) => {
        const Lt = ae.map((he) => he[Rt]).filter((he) => he != null);
        return Lt.length ? Lt.reduce((he, ge) => he + ge, 0) / Lt.length : null;
      };
      return { d: it, key: Nt, mood: Ft("mood"), energy: Ft("energy"), count: ae.filter(Er).length, future: it > r && Nt !== Ue(r) };
    }), v = (mt) => {
      const lt = u.map((it) => it[mt]).filter((it) => it != null);
      return lt.length ? lt.reduce((it, Nt) => it + Nt, 0) / lt.length : null;
    }, T = v("mood"), B = v("energy"), F = (mt, lt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + mt + "</span><span>" + (lt == null ? "—" : Gt(Fo("", lt))) + '</span></div><div class="feelTrack"><span style="width:' + (lt == null ? 0 : Math.max(4, lt)) + "%;background:" + (lt == null ? "transparent" : ad(lt)) + '"></span></div></div>', st = u.filter((mt) => mt.mood != null && mt.energy != null).sort((mt, lt) => lt.mood + lt.energy - (mt.mood + mt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Gt(Fo("", (T + B) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (st ? " · best day " + Gt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(st.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (mt) => '<div class="weekChip feelDay' + (mt.future ? " future" : "") + (mt.key === Ue(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Gt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(mt.d)) + "</strong>" + (mt.count >= 2 ? '<span class="weekTick">' + Ua("check") + "</span>" : '<span class="feelDots">' + "●".repeat(mt.count) + "</span>") + "</div>" + F("Mood", mt.mood) + F("Energy", mt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const mo = o("upcomingCountSetting");
  mo.addEventListener("change", () => {
    Yn = mo.value === "all" ? "all" : Number(mo.value), On();
  });
  const Wo = o("tempoRevealBtn"), Qi = o("tempoExperiment"), _n = o("tempoQuad"), go = o("tempoDot"), rd = o("tempoEstimate"), sd = o("tempoReadout");
  let gi = { x: 0.5, y: 0.5 }, tr = !1, Pr = { total: 20, work: 45, rest: 15 };
  function qo(e, r, s, u) {
    const v = Math.max(r, Math.min(s, e));
    return Math.round((v - r) / u) * u + r;
  }
  function al(e, r) {
    const s = (e - 0.5) * 2, u = (r - 0.5) * 2, v = qo(
      Pr.total + s * 5 + u * 8,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    ), T = qo(
      Pr.work + s * 10 + u * 8,
      Number(L.min),
      Number(L.max),
      Number(L.step)
    ), B = qo(
      Pr.rest + s * 6 + u * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return D.value = v, L.value = T, P.value = B, dt.textContent = T + " sec", W.textContent = B + " sec", fi(), { total: v, work: T, rest: B };
  }
  function bs(e, r) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", v = al(e, r);
    sd.textContent = s + " + " + u, rd.textContent = v.total + " min", _n.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + v.total + " minutes");
  }
  function ws(e) {
    const r = _n.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    gi = { x: s, y: u }, go.style.left = s * 100 + "%", go.style.top = u * 100 + "%", bs(s, u);
  }
  Wo.addEventListener("click", () => {
    const e = Qi.hidden;
    Qi.hidden = !e, Wo.setAttribute("aria-expanded", e ? "true" : "false"), Wo.textContent = e ? "Now close this" : "Don’t try this!", e && (Pr = {
      total: Number(D.value),
      work: Number(L.value),
      rest: Number(P.value)
    }, gi = { x: 0.5, y: 0.5 }, go.style.left = "50%", go.style.top = "50%", bs(gi.x, gi.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const Jn = o("testingFeedbackForm"), xs = o("testingFeedbackThanks"), nl = o("testingFeedbackAgain");
  Jn.addEventListener("submit", (e) => {
    e.preventDefault(), Jn.hidden = !0, xs.hidden = !1, Fe("Feedback captured for prototype");
  }), nl.addEventListener("click", (e) => {
    e.preventDefault(), Jn.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), xs.hidden = !0, Jn.hidden = !1;
  }), _n.addEventListener("pointerdown", (e) => {
    var r;
    tr = !0, ws(e);
    try {
      (r = _n.setPointerCapture) == null || r.call(_n, e.pointerId);
    } catch {
    }
  }), _n.addEventListener("pointermove", (e) => {
    tr && ws(e);
  }), _n.addEventListener("pointerup", (e) => {
    tr && (tr = !1, ws(e), De());
  }), _n.addEventListener("pointercancel", () => tr = !1), _n.addEventListener("keydown", (e) => {
    let { x: r, y: s } = gi, u = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : u = !1, u && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), gi = { x: r, y: s }, go.style.left = r * 100 + "%", go.style.top = s * 100 + "%", bs(r, s), De());
  });
  const _a = o("workoutModal");
  let vi = null;
  function jo(e) {
    return e.map((r) => ({ ...r }));
  }
  function ld() {
    const e = ne[Qt];
    return {
      key: Qt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: jo(ye),
      strength: jo(Ze),
      cooldown: jo(qe),
      total: Number(D.value),
      work: Number(L.value),
      rest: Number(P.value),
      rounds: Number(ue.value) || 1
    };
  }
  function ol(e = !1) {
    $t = !!e, oa = null, _e = null, Dt(), Ui(), vi = ld(), o("moveEditorTitle").textContent = $t ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !$t, o("warmupRow").hidden = $t, o("deleteMoveOpen").hidden = $t;
    const r = o("createMoveOptions");
    r.hidden = !$t;
    {
      const s = ne[Qt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (il(), $t) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = ne[Qt];
      An((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Ar("movement"), Wa(), bn(), Qi.hidden = !0, Wo.setAttribute("aria-expanded", "false"), Wo.textContent = "Don’t try this!", _a.classList.toggle("createMode", $t), _a.querySelector(".modal").classList.toggle("createMode", $t), _a.classList.add("open"), _a.setAttribute("aria-hidden", "false"), le(), $t && Pt();
  }
  function dd() {
    const e = ne[Qt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function il() {
    const e = dd(), r = o("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = ne[Qt];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, hi()) : (e.warmupOff = !e.warmupOff, De()), il());
  });
  function zo() {
    Dt(), Ui(), Oa(), _e = null, oa = null, _a.classList.contains("createMode") && G(), _a.classList.remove("createMode"), _a.querySelector(".modal").classList.remove("createMode"), _a.classList.remove("open"), _a.setAttribute("aria-hidden", "true");
  }
  function ys() {
    if (!vi) return;
    const e = vi;
    e.profile && (ne[e.key] = JSON.parse(JSON.stringify(e.profile))), Qt = e.key, ye = jo(e.warmup), Ze = jo(e.strength), qe = jo(e.cooldown), D.value = e.total, L.value = e.work, P.value = e.rest, ue.value = e.rounds || 1;
    const r = ne[Qt];
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
      m.value = r.name;
    }
    De();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if ($t) {
      const e = Qt;
      delete ne[e], $t = !1, Bt = null, na(xe.order.find((r) => ne[r]) || Object.keys(ne)[0]);
    } else
      ys();
    zo();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Dt(), St && Ho();
    const e = ne[Qt], r = m.value.trim() || "New move";
    if (e && (e.name = r), Po(), oa = null, De(), $t && e)
      Ca(Qt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === Qt)), $t = !1, Bt = null, xe.order.includes(Qt) || xe.order.push(Qt), Fe("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = r);
      }
      Fe("Move saved");
    }
    vi = null, zo(), za();
  }), _a.addEventListener("click", (e) => {
    if (e.target === _a) {
      if ($t) {
        const r = Qt;
        delete ne[r], $t = !1, Bt = null, na(xe.order.find((s) => ne[s]) || Object.keys(ne)[0]);
      } else
        ys();
      zo();
    }
  }), J(o("addMovementBtn"), "movement"), J(o("addRestBtn"), "rest"), J(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", bn), o("useGlobalRestTiming").addEventListener("change", bn), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    An(e.dataset.movePreset, !0), De();
  })), o("includeWarmupPreset").addEventListener("change", hi), o("includeCooldownPreset").addEventListener("change", hi), o("includeWarmupPreset").addEventListener("change", at), o("includeCooldownPreset").addEventListener("change", at), m.addEventListener("input", at), m.addEventListener("input", He), o("confirmAddMovement").addEventListener("click", fo), o("confirmAddRest").addEventListener("click", fo), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && fo();
  });
  const Vo = o("countdown"), Ir = o("countNum"), In = o("countdownPixelCanvas");
  let er = null, ks = "appear";
  class rl {
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
  let Ms = [], ar = 1, Qe = 1;
  function Go() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function cd() {
    var mt;
    if (!In) return;
    const e = Go(), r = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    ar = r, Qe = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    In.width = Math.floor(r * u), In.height = Math.floor(s * u), In.style.width = r + "px", In.style.height = s + "px";
    const v = In.getContext("2d");
    v.setTransform(u, 0, 0, u, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], B = 12, F = (mt = window.matchMedia) == null ? void 0 : mt.call(window, "(prefers-reduced-motion: reduce)").matches, st = F ? 0 : 0.055;
    Ms = [];
    for (let lt = 0; lt < r; lt += B)
      for (let it = 0; it < s; it += B) {
        const Nt = lt - r / 2, ae = it - s / 2, Ft = Math.sqrt(Nt * Nt + ae * ae), Rt = F ? 0 : Math.random() * 75 + Ft * 0.05, Lt = new rl({ width: r, height: s }, v, lt, it, T[Math.floor(Math.random() * T.length)], st, Rt);
        Lt.maxSizeInteger = 4, Lt.maxSize = Math.random() * 3.2 + 0.8, Lt.sizeStep = 0.35 + Math.random() * 0.45, Ms.push(Lt);
      }
  }
  function sl(e) {
    cancelAnimationFrame(er), ks = e;
    const r = In == null ? void 0 : In.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, ar, Qe);
      let u = !0;
      Ms.forEach((v) => {
        v[ks](), v.isIdle || (u = !1);
      }), ks === "disappear" && u || (er = requestAnimationFrame(s));
    }
    er = requestAnimationFrame(s);
  }
  function Hn() {
    cancelAnimationFrame(er), cd(), sl("appear"), setTimeout(() => sl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Vo.classList.contains("active") && Hn();
  });
  const nr = o("pixelTrailCanvas"), bi = nr.getContext("2d");
  let Qn = !0, Uo = 0.7, Yo = 600, or = [], wi = null, to = { x: 0, y: 0, ready: !1 };
  function xi() {
    const e = c.getBoundingClientRect(), r = Go(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, e.width / r), v = Math.max(1, e.height / r);
    nr.width = Math.max(1, Math.floor(u * s)), nr.height = Math.max(1, Math.floor(v * s)), nr.style.width = u + "px", nr.style.height = v + "px", bi.setTransform(s, 0, 0, s, 0, 0);
  }
  function ll(e, r) {
    if (!Qn) return;
    const s = performance.now();
    to.ready || (to = { x: e, y: r, ready: !0 });
    const u = 7;
    for (let v = 1; v <= u; v++) {
      const T = v / u;
      or.push({
        x: to.x + (e - to.x) * T,
        y: to.y + (r - to.y) * T,
        born: s - (u - v) * 10
      });
    }
    to = { x: e, y: r, ready: !0 };
  }
  function Hr(e) {
    if (wi = null, !b) return;
    if (!vt.workout.classList.contains("active")) {
      wi = requestAnimationFrame(Hr);
      return;
    }
    const r = c.getBoundingClientRect(), s = Go();
    bi.clearRect(0, 0, r.width / s, r.height / s), Qn && (or = or.filter((v) => e - v.born < Yo), bi.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", or.forEach((v) => {
      const T = (e - v.born) / Yo, B = (1 - T) * Uo, F = Math.round(v.x / 14) * 14, st = Math.round(v.y / 14) * 14;
      bi.globalAlpha = Math.max(0, B);
      const mt = 2 + 5 * (1 - T) * Uo;
      bi.fillRect(F - mt / 2, st - mt / 2, mt, mt);
    }), bi.globalAlpha = 1), wi = requestAnimationFrame(Hr);
  }
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect(), s = Go();
    ll((e.clientX - r.left) / s, (e.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => to.ready = !1), new ResizeObserver(xi).observe(c), xi(), wi = requestAnimationFrame(Hr);
  const vo = o("movementRippleCanvas"), ya = vo.getContext("2d");
  let Zo = !0, yi = null, $a = performance.now();
  function Te() {
    const e = vo.parentElement.getBoundingClientRect(), r = Go(), s = Math.max(1, e.width / r), u = Math.max(1, e.height / r), v = Math.min(window.devicePixelRatio || 1, 2);
    vo.width = Math.max(1, Math.floor(s * v)), vo.height = Math.max(1, Math.floor(u * v)), vo.style.width = s + "px", vo.style.height = u + "px", ya.setTransform(v, 0, 0, v, 0, 0);
  }
  function En() {
    var e;
    return ua || ((e = Vt[ie]) == null ? void 0 : e.kind) === "rest";
  }
  function Ss() {
    const e = Vt[ie];
    return En() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Fn(e) {
    if (yi = null, !b) return;
    if (!vt.workout.classList.contains("active")) {
      yi = requestAnimationFrame(Fn);
      return;
    }
    const r = vo.parentElement.getBoundingClientRect(), s = Go(), u = Math.max(1, r.width / s), v = Math.max(1, r.height / s);
    if (ya.clearRect(0, 0, u, v), Zo) {
      const T = Ss(), B = (e - $a) % T / T, F = 15, st = Math.max(8, Math.round(F * v / Math.max(1, u))), mt = u / (F + 1), lt = v / (st + 1), it = u * 0.5, Nt = v * 0.52, ae = Math.hypot(it, Nt), Rt = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Lt = 1; Lt <= st; Lt++)
        for (let he = 1; he <= F; he++) {
          const ge = he * mt, qt = Lt * lt, be = Math.hypot(ge - it, qt - Nt) / ae, Le = En(), de = Le ? Math.exp(-Math.pow((be - (B * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, oe = Math.exp(-Math.pow((be - B * 1.25) * 7, 2)), ca = Le ? de : oe, Ba = Le ? 0.5 + 0.5 * Math.sin(B * Math.PI * 2 - be * 3) ** 2 : 0.35 + 0.65 * Math.sin(B * Math.PI * 2 - be * 5) ** 2, ze = Le ? 1.4 + ca * 4.2 * Ba : 1.2 + ca * 5 * Ba;
          ya.beginPath(), ya.arc(ge, qt, ze, 0, Math.PI * 2), ya.fillStyle = `rgba(${Rt},${Le ? 0.08 + ca * 0.48 : 0.05 + ca * 0.55})`, ya.fill();
        }
    }
    yi = requestAnimationFrame(Fn);
  }
  new ResizeObserver(Te).observe(vo.parentElement), Te(), yi = requestAnimationFrame(Fn);
  const bo = o("exerciseTitle"), Ea = o("exerciseMeta"), wo = o("stepLabel"), eo = o("digits"), Oe = o("fill"), ao = o("progress"), Ko = o("pause"), dl = o("nextName"), cl = o("nextMeta"), pl = o("nextIcon"), Fr = o("skipNextSession");
  let Ia = null;
  function Xa(e) {
    for (let r = Math.max(0, e); r < Vt.length; r++)
      if (!Vt[r].sessionHidden) return r;
    return -1;
  }
  function ul() {
    const e = Vt[ie];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ua) {
      const u = Xa(ie + 1), v = u >= 0 ? Vt[u] : null;
      return v ? { name: v.name, meta: Mi(v), icon: Da(v) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Xa(ie + 1), s = r >= 0 ? Vt[r] : null;
    return s ? { name: s.name, meta: Mi(s), icon: Da(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function ki() {
    if (!Vt[ie]) return Vt.length;
    const r = Xa(ie + 1);
    return r < 0 ? Vt.length : r + 1;
  }
  function Da(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Mi(e) {
    return e.kind === "video" ? "YouTube · " + Ln(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function ir() {
    return Vt.length && Vt[Vt.length - 1].round || 1;
  }
  function Cs(e) {
    const r = Vt[e];
    if (!r) return "";
    const s = ir();
    if (s <= 1) return "Step " + (e + 1) + " of " + Vt.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = Vt.filter((v) => v.round === r.round && !v.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function Or() {
    return ao.querySelector('[data-step="' + ie + '"]');
  }
  function Ts() {
    Vt[ie] && Number(ao.dataset.round) !== (Vt[ie].round || 1) && _s(), [...ao.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < ie), e.classList.toggle("active", r === ie), e.classList.toggle("rewindable", r <= ie), e.disabled = r > ie, r === ie && e.style.setProperty("--segment-progress", "0%");
    }), Vt[ie] && (wo.textContent = Cs(ie), ia());
  }
  function pd(e) {
    const r = Vt.indexOf(e);
    r < 0 || r <= ie || (e.sessionHidden = !e.sessionHidden, Ja(), Fe((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function On() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = ki(), s = Vt.slice(r);
    (Yn === "all" ? s : s.slice(0, Math.max(1, Number(Yn) || 1))).forEach((v) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (v.sessionHidden ? " sessionHidden" : "") + (Xr(v) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ua(Da(v)) + '</div><div><div class="upcomingName">' + Gt(v.name) + '</div><div class="upcomingMeta">' + Gt(Mi(v)) + (ir() > 1 ? " · round " + v.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (v.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => pd(v)), e.appendChild(T);
    });
  }
  function Ja() {
    var r;
    const e = ul();
    dl.textContent = e.name, cl.textContent = e.meta, pl.innerHTML = Ua(e.icon);
    {
      const s = ua ? Vt[Xa(ie + 1)] : ((r = Vt[ie]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Vt[Xa(ie + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Xr(s)));
    }
    if (Ia = null, ua) {
      const s = Xa(ie + 1);
      s >= 0 && (Ia = Vt[s]);
    } else {
      const s = Vt[ie];
      if (s && s.rest > 0)
        Ia = null;
      else {
        const u = Xa(ie + 1);
        u >= 0 && (Ia = Vt[u]);
      }
    }
    Fr && (Fr.hidden = !Ia, Fr.textContent = Ia != null && Ia.sessionHidden ? "Include this session" : "Skip this session"), On();
  }
  Fr.addEventListener("click", () => {
    Ia && (Ia.sessionHidden = !Ia.sessionHidden, Fe((Ia.sessionHidden ? "Hidden " : "Included ") + Ia.name + " for this session"), Ja());
  });
  let Wn = null, Wr = null;
  function $o(e, r = {}) {
    const s = ne[Qt];
    d.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: Qt, ...r });
  }
  function qr() {
    const e = ne[Qt];
    Wn = { key: Qt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Wr), Wr = setInterval(() => {
      Wn && !Va && Wn.active++;
    }, 1e3), $o("started", { steps: Vt.length });
  }
  function Ls(e) {
    if (clearInterval(Wr), !Wn) return;
    const r = Wn;
    Wn = null, $o(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (xe.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), xe.history = xe.history.slice(0, 1e3), za(), Co(), kn());
  }
  let Qa = null, rr = null, sr = !1;
  function Ra() {
    return me().sounds !== !1;
  }
  function fl() {
    if (Ra())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Qa = Qa || new (window.AudioContext || window.webkitAudioContext)(), Qa.state === "suspended" && Qa.resume();
      } catch {
        Qa = null;
      }
  }
  function Xo(e, r, s, { to: u = e, vol: v = 0.25, type: T = "sine" } = {}) {
    const B = Qa.currentTime + r, F = Qa.createOscillator(), st = Qa.createGain();
    F.type = T, F.frequency.setValueAtTime(e, B), u !== e && F.frequency.exponentialRampToValueAtTime(u, B + s), st.gain.setValueAtTime(1e-4, B), st.gain.exponentialRampToValueAtTime(v, B + 0.01), st.gain.exponentialRampToValueAtTime(1e-4, B + s), F.connect(st).connect(Qa.destination), F.start(B), F.stop(B + s + 0.02);
  }
  const qa = {
    tick: () => Xo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      Xo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), Xo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => Xo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      Xo(523, 0, 0.16, { type: "triangle" }), Xo(659, 0.16, 0.16, { type: "triangle" }), Xo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function xn(e) {
    if (!(!Ra() || !Qa))
      try {
        Qa.state === "suspended" && Qa.resume(), qa[e]();
      } catch {
      }
  }
  function xo() {
    ea >= 1 && ea <= 3 && ea !== rr && (rr = ea, xn("tick"));
  }
  function Si() {
    fl(), k("workout"), As();
    const e = Xa(0);
    e >= 0 && Vt[e].kind === "video" && Mo(Vt[e]);
  }
  function jr() {
    dr(), Ls(!1), clearInterval(Ke), clearInterval(ui), ua = !1, qn(!1), o("app").classList.remove("resting"), Vo.classList.remove("active"), k("home");
  }
  function As() {
    Vo.classList.add("active");
    let e = 5;
    Ir.textContent = e, xn("tick"), requestAnimationFrame(Hn), clearInterval(ui), ui = setInterval(() => {
      e--, e > 0 ? (Ir.textContent = e, xn("tick"), Hn()) : (clearInterval(ui), Ir.textContent = "GO", xn("move"), sr = !0, Hn(), setTimeout(() => {
        Vo.classList.remove("active"), cancelAnimationFrame(er), Vr();
      }, 650));
    }, 1e3);
  }
  function _s() {
    var r;
    ao.innerHTML = "";
    const e = ((r = Vt[Math.max(0, ie)] || Vt[0]) == null ? void 0 : r.round) || 1;
    ao.dataset.round = e, Vt.forEach((s, u) => {
      if ((s.round || 1) !== e) return;
      const v = document.createElement("button");
      v.dataset.step = u, v.type = "button", v.className = "progressSegment", v.setAttribute("aria-label", "Go to " + s.name), v.addEventListener("click", () => {
        u <= ie && zr(u);
      }), ao.appendChild(v);
    });
  }
  function qn(e) {
    e = !!e;
    const r = Va !== e;
    if (Va = e, Ko.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), la && te)
      try {
        e ? te.pauseVideo() : te.playVideo();
      } catch {
      }
    r && Wn && $o(e ? "paused" : "resumed");
  }
  function zr(e) {
    e < 0 || e >= Vt.length || e > ie || (clearInterval(Ke), ua = !1, o("app").classList.remove("resting"), ie = e, qn(!1), Li(), Ke = setInterval(zn, 1e3));
  }
  function Vr() {
    if (ie = Xa(0), qn(!1), _s(), ie < 0) {
      bo.textContent = "No activities", Ea.textContent = "Open Edit and enable or add a movement", Ea.hidden = !1;
      return;
    }
    qr(), Li(), clearInterval(Ke), Ke = setInterval(zn, 1e3);
  }
  const lr = o("videoStage"), yo = o("videoSound"), hl = 0, ko = 1, Gr = 2;
  let ml = 0, Ci = null, Ti = null, te = null, Ha = null, yn = 0, Dn = !1, la = null, ka = null;
  function jn() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Ci || (Ci = new Promise((r, s) => {
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
        clearInterval(v), Ci = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const B = document.createElement("script");
        B.src = "https://www.youtube.com/iframe_api", B.async = !0, B.onerror = () => {
          clearInterval(v), clearTimeout(T), Ci = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(B);
      }
    }), Ci);
  }
  function Ur() {
    return Ti || (Ti = jn().then((e) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), te = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(te), onStateChange: (u) => ud(u.data), onError: (u) => vl(u.data) }
      });
    })), Ti.catch(() => {
      Ti = null;
    }), Ti);
  }
  function Mo(e) {
    !(e != null && e.videoId) || e.videoError || Ur().then((r) => {
      la || Ha === e.videoId || (Ha = e.videoId, yn = Number(e.start) || 0, Dn = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: yn }));
    }).catch(() => {
    });
  }
  function gl() {
    const e = Xa(ie + 1);
    e >= 0 && Vt[e].kind === "video" && Mo(Vt[e]);
  }
  function ud(e) {
    if (!la) {
      e === ko && !Dn && (Dn = !0, te.pauseVideo(), te.seekTo(yn, !0));
      return;
    }
    lr.classList.toggle("playing", e === ko), Vt[ie] === la && performance.now() > ml && (e === ko && Va ? qn(!1) : e === Gr && !Va && qn(!0)), e === ko && Ds(la.videoId, te.getDuration()) && za(), e === hl && cr();
  }
  function vl(e) {
    const r = la;
    if (!r) {
      Ha = null;
      return;
    }
    e === 101 || e === 150 ? (bl(r.videoId), Fe("That video can’t play outside YouTube, so it was skipped")) : Fe("The video couldn’t play, so it was skipped"), cr();
  }
  function fa(e) {
    if (o("app").classList.add("videoStep"), yo.hidden = !0, la = e, clearTimeout(ka), !e.videoId) {
      Fe("This video step has no link yet, so it was skipped"), setTimeout(() => cr(), 0);
      return;
    }
    Ur().then((r) => {
      if (la !== e) return;
      ml = performance.now() + 1500;
      const s = Number(e.start) || 0;
      Ha !== e.videoId ? (Ha = e.videoId, yn = s, r.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Va && r.pauseVideo(), ka = setTimeout(() => {
        la !== e || Va || (r.getPlayerState() !== ko ? (r.mute(), r.playVideo(), yo.hidden = !1) : r.isMuted() && (yo.hidden = !1));
      }, 1600);
    }).catch(() => {
      la === e && (Fe("YouTube didn’t load, so the video was skipped"), cr());
    });
  }
  function Jo() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, v = window.innerHeight - s - 16 - u - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(v)) + "px");
  }
  window.addEventListener("resize", Jo);
  function dr() {
    clearTimeout(ka);
    const e = la;
    if (la = null, o("app").classList.remove("videoStep"), lr.classList.remove("playing"), yo.hidden = !0, e && te) {
      try {
        te.pauseVideo();
      } catch {
      }
      Ha = null;
    }
  }
  function cr() {
    const e = la;
    !e || Vt[ie] !== e || (dr(), clearInterval(Ke), Qo(), Ke = setInterval(zn, 1e3));
  }
  yo.addEventListener("click", () => {
    te && (te.unMute(), te.playVideo()), yo.hidden = !0;
  });
  function fd(e) {
    var u;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const s = te && la === e && Number((u = te.getDuration) == null ? void 0 : u.call(te)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function Es(e, r) {
    const s = ne[Qt];
    [ye, Ze, qe, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((v) => {
      v && v.kind === "video" && v.videoId === e && r(v);
    }));
  }
  function Ds(e, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return e && r > 0 && Es(e, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function bl(e) {
    Es(e, (r) => {
      r.videoError = "embed";
    }), za();
  }
  function hd(e) {
    const r = e.videoId;
    if (!r) return;
    const s = () => {
      _a.classList.contains("open") ? oa || De() : (De(), za());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      e.videoId === r && (e.videoTitle = u.title || "", e.autoName && u.title && (e.name = u.title), s());
    }).catch((u) => {
      e.videoId === r && u === 401 && (e.videoError = "embed", s());
    }), md(r).then((u) => {
      Ds(r, u) && s();
    }).catch((u) => {
      u === "embed" && e.videoId === r && (e.videoError = "embed", s());
    });
  }
  function md(e) {
    return jn().then((r) => new Promise((s, u) => {
      const v = document.createElement("div");
      v.className = "videoProbe", v.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      v.appendChild(T), o("app").appendChild(v);
      let B = null, F = !1;
      const st = (it, Nt) => {
        F || (F = !0, clearTimeout(mt), setTimeout(() => {
          try {
            B == null || B.destroy();
          } catch {
          }
          v.remove();
        }, 0), Nt ? u(Nt) : s(it));
      }, mt = setTimeout(() => st(0), 2e4), lt = () => {
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
  function Li() {
    ua = !1;
    const e = Vt[ie];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? fa(e) : dr(), ea = e.duration, fn = e.duration, rr = null, sr ? sr = !1 : xn(e.kind === "rest" ? "rest" : "move"), bo.textContent = e.name, Ea.textContent = e.group, Ea.hidden = !0, wo.textContent = Cs(ie), Wn && $o("step", { name: e.name, group: e.group, kind: e.kind, step: ie + 1, of: Vt.length, round: e.round || 1, rounds: ir(), duration: e.duration }), Ja(), Ts(), gl(), e.kind === "video" && setTimeout(Jo, 0);
  }
  function ia() {
    var v;
    const e = ((v = Vt[ie]) == null ? void 0 : v.kind) === "video" && !ua, r = e && ea >= 60;
    eo.textContent = r ? Ln(ea) : ea, eo.classList.toggle("long", r), e && (o("videoClock").textContent = Ln(ea) + " left");
    const s = ea / fn * 100;
    Oe.style.width = s + "%";
    const u = Or();
    if (u && !ua) {
      const T = 100 - s;
      u.style.setProperty("--segment-progress", T + "%");
    }
  }
  function zn() {
    var r, s;
    if (Va) return;
    const e = Vt[ie];
    if ((e == null ? void 0 : e.kind) === "video" && !ua && la === e) {
      const u = Number((r = te == null ? void 0 : te.getCurrentTime) == null ? void 0 : r.call(te)) || 0, v = Number(e.start) || 0, T = fd(e);
      fn = Math.max(1, T - v), (u > v || ((s = te == null ? void 0 : te.getPlayerState) == null ? void 0 : s.call(te)) === ko) && (ea = Math.max(0, Math.ceil(T - u))), ia(), xo(), u > v && u >= T - 0.25 && cr();
      return;
    }
    ea--, ia(), xo(), ea <= 0 && (e.rest > 0 ? Rs(e.rest) : Qo());
  }
  function Rs(e) {
    var s;
    ua = !0, o("app").classList.add("resting");
    const r = Or();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Ke), ea = e, fn = e, rr = null, xn("rest"), Wn && $o("rest", { duration: e }), bo.textContent = "Rest", Ea.textContent = (s = Vt[ie]) != null && s.roundBreakAfter ? "Round " + (Vt[ie].round + 1) + " next" : "Recovery", Ja(), ia(), Ke = setInterval(() => {
      Va || (ea--, ia(), xo(), ea <= 0 && (clearInterval(Ke), Qo(), Ke = setInterval(zn, 1e3)));
    }, 1e3);
  }
  function Qo() {
    ua = !1;
    const e = Xa(ie + 1);
    if (e >= 0)
      ie = e, Li();
    else {
      clearInterval(Ke), dr(), qn(!1), o("app").classList.remove("resting"), bo.textContent = "Complete", Ea.textContent = "Move finished", Ea.hidden = !1, eo.textContent = "✓";
      {
        const r = ir();
        wo.textContent = r > 1 ? r + " rounds done" : Vt.filter((s) => !s.roundBreak).length + " steps done";
      }
      Ls(!0), xn("done");
      {
        const r = es(7).reduce((s, u) => s + u.minutes, 0);
        Ea.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Oe.style.width = "100%", Ja();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Bs(), qn(!1);
  });
  function Bs() {
    clearInterval(Ke);
    const e = Vt[ie];
    if (ua) {
      ua = !1, o("app").classList.remove("resting");
      const s = Xa(ie + 1);
      s >= 0 ? (ie = s, Li(), Ke = setInterval(zn, 1e3)) : Qo();
      return;
    }
    if (e && e.rest > 0) {
      Rs(e.rest);
      return;
    }
    const r = Xa(ie + 1);
    r >= 0 ? (ie = r, Li(), Ke = setInterval(zn, 1e3)) : Qo();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Ke), qn(!1), ua) {
      const e = Vt[ie];
      ea = e.rest, fn = e.rest, rr = null, xn("rest"), bo.textContent = "Rest", Ea.textContent = "Recovery", o("app").classList.add("resting"), Ja(), ia();
    } else
      Li();
    Ke = setInterval(ua ? () => {
      Va || (ea--, ia(), xo(), ea <= 0 && (clearInterval(Ke), Qo(), Ke = setInterval(zn, 1e3)));
    } : zn, 1e3);
  });
  function pr(e, r, s, u) {
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
    function mt(it) {
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
    e.addEventListener("pointerdown", mt), e.addEventListener("pointerup", lt), e.addEventListener("pointercancel", lt), e.addEventListener("lostpointercapture", lt), e.addEventListener("keydown", (it) => {
      (it.key === " " || it.key === "Enter") && !it.repeat && mt(it);
    }), e.addEventListener("keyup", (it) => {
      (it.key === " " || it.key === "Enter") && lt();
    });
  }
  const gd = o("endWorkout");
  pr(gd, o("holdEndFill"), 1500, jr);
  const Ai = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Ai.classList.add("open"), Ai.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Ai.classList.remove("open"), Ai.setAttribute("aria-hidden", "true");
  });
  function wl() {
    const e = Qt, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ne[e], xe.order = xe.order.filter((u) => u !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      ne[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, xe.order.push(u), s = Ca(u, ne[u]);
    }
    Ai.classList.remove("open"), Ai.setAttribute("aria-hidden", "true"), vi = null, zo(), na(s.dataset.workout), za(), Fe("Move deleted");
  }
  pr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, wl);
  const Yr = n.querySelector(".rubberTabs"), _i = o("rubberIndicator");
  function Ei(e, r = !0) {
    if (!e || !Yr || !_i) return;
    const s = Yr.getBoundingClientRect(), u = e.getBoundingClientRect();
    _i.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const v = Go();
    _i.style.left = (u.left - s.left) / v + Yr.scrollLeft + "px", _i.style.width = u.width / v + "px", r && (_i.style.transform = "scaleX(1.08)", setTimeout(() => _i.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), Ei(e, !0);
  })), requestAnimationFrame(() => Ei(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Ei(n.querySelector(".tab.active"), !1));
  const Zr = o("pixelTrailToggle"), Kr = o("rippleToggle"), ti = o("trailStrength"), Vn = o("trailLife");
  function tn(e, r) {
    me()[e] = r, za();
  }
  const $r = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function xl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Xr(e) {
    var r;
    return !!((r = me().hideMeta) != null && r[xl(e)]);
  }
  function ur() {
    const e = /* @__PURE__ */ new Map(), r = (s, u, v) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = xl(s);
      let B = e.get(T);
      B || (B = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(T, B)), B.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : u), B.moves.add(v), B.count++;
    };
    return Object.values(ne).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Et)).forEach((v) => r(v, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((v) => r(v, v.presetRole === "warmup" ? "Warm-up" : v.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : we)).forEach((v) => r(v, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      e.has(s) || e.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => $r.indexOf(s.kind) - $r.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let Jr = "all";
  function Rn() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return ur().filter((r) => (Jr === "all" || r.kind === Jr) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function fr() {
    const e = o("metaTableBody");
    if (!e) return;
    const r = me().hideMeta || {}, s = Rn();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((v) => {
      const T = !r[v.key], B = v.count ? (v.moves.length > 2 ? v.moves.slice(0, 2).join(", ") + " + " + (v.moves.length - 2) + " more" : v.moves.join(", ")) + " · " + v.count + " step" + (v.count === 1 ? "" : "s") : "Not used yet", F = document.createElement("tr");
      F.className = T ? "" : "off", F.innerHTML = '<td><div class="metaType">' + Gt(v.label) + '</div><div class="metaSub">' + Gt(v.kind + " · " + B) + '</div></td><td class="metaKindCol">' + Gt(v.kind) + '</td><td class="metaUsedCol">' + Gt(B) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Gt(v.label) + ' on phones"></button></td>', F.querySelector(".switch").addEventListener("click", () => hr([v.key], T)), e.appendChild(F);
    });
    const u = s.filter((v) => r[v.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function hr(e, r) {
    const s = { ...me().hideMeta || {} };
    e.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), tn("hideMeta", s), fr(), No(), Ja();
  }
  o("metaSearch").addEventListener("input", fr), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Jr = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), fr();
  })), o("metaHideAll").addEventListener("click", () => hr(Rn().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => hr(Rn().map((e) => e.key), !1));
  const So = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...me().toggles || {} };
  function yl() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", So[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = So[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => So[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    So[e.dataset.toggle] = So[e.dataset.toggle] === !1, yl(), tn("toggles", { ...So });
  })), yl();
  function Ma() {
    Zr.classList.toggle("on", Qn), Kr.classList.toggle("on", Zo), ti.value = Math.round(Uo * 100), o("trailStrengthValue").textContent = ti.value + "%", Vn.value = Yo, o("trailLifeValue").textContent = Vn.value + " ms";
  }
  me().trailEnabled !== void 0 && (Qn = me().trailEnabled), me().rippleEnabled !== void 0 && (Zo = me().rippleEnabled), me().trailStrength !== void 0 && (Uo = me().trailStrength), me().trailMaxAge !== void 0 && (Yo = me().trailMaxAge), Ma();
  const Ns = o("soundsToggle");
  Ns.classList.toggle("on", Ra()), Ns.addEventListener("click", () => {
    tn("sounds", !Ra()), Ns.classList.toggle("on", Ra()), Ra() && (fl(), xn("move"));
  }), Zr.addEventListener("click", () => {
    Qn = !Qn, Zr.classList.toggle("on", Qn), Qn || (or = []), tn("trailEnabled", Qn);
  }), Kr.addEventListener("click", () => {
    Zo = !Zo, Kr.classList.toggle("on", Zo), tn("rippleEnabled", Zo);
  }), ti.addEventListener("input", () => {
    Uo = Number(ti.value) / 100, o("trailStrengthValue").textContent = ti.value + "%";
  }), ti.addEventListener("change", () => tn("trailStrength", Uo)), Vn.addEventListener("input", () => {
    Yo = Number(Vn.value), o("trailLifeValue").textContent = Vn.value + " ms";
  }), Vn.addEventListener("change", () => tn("trailMaxAge", Yo)), mo.addEventListener("change", () => tn("upcomingCount", Yn));
  function Qr(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const r = e === "light";
    o("app").classList.toggle("light", r), d.setLight(r), oo(n);
  }
  Qr(me().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Qr(e.dataset.theme), tn("theme", e.dataset.theme);
  }));
  const en = { steps: null, weather: null, ...me().entities || {} };
  let da = null, Ps = {};
  function fe(e) {
    const r = Object.values(e).filter((F) => F.entity_id.startsWith("sensor.") || F.entity_id.startsWith("input_number.")), s = (F) => F.attributes.friendly_name || F.entity_id, u = r.filter((F) => /step/i.test(F.entity_id) || /step/i.test(s(F)) || ["steps", "step"].includes(String(F.attributes.unit_of_measurement || "").toLowerCase())), v = r.filter((F) => !u.includes(F)), T = (F, st) => s(F).localeCompare(s(st)), B = (F, st) => /health_steps/.test(st.entity_id) - /health_steps/.test(F.entity_id) || T(F, st);
    return { suggested: u.sort(B), rest: v.sort(T), label: s };
  }
  function Is(e) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: v } = fe(e), T = (st) => '<option value="' + Gt(st.entity_id) + '">' + Gt(v(st)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(T).join("") + "</optgroup>" : ""), r.value = en.steps || "";
    const B = o("stepsStatus"), F = en.steps && e[en.steps];
    B.textContent = F ? "Connected · " + v(F) : B.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    en.steps = o("stepsEntity").value || null, tn("entities", { ...en }), Ps = {}, kl(), da && (Is(da), no(da));
  });
  function mr(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function ts() {
    const e = en.steps && (da == null ? void 0 : da[en.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function no(e) {
    var u;
    const r = en.steps, s = r ? Number((u = e[r]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? mr(s) : "—" : "Set up in Settings";
  }
  let Hs = 0;
  async function kl() {
    const e = en.steps;
    if (!e || !d.ws) return;
    Hs = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await d.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), v = (u == null ? void 0 : u[e]) || [], T = {};
      if (v.forEach((B) => {
        Number.isFinite(B.max) && (T[Ue(new Date(B.start))] = B.max);
      }), !Object.keys(T).length) {
        const B = await d.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((B == null ? void 0 : B[e]) || []).forEach((F) => {
          const st = Number(F.s ?? F.state), mt = F.lu ? F.lu * 1e3 : Date.parse(F.last_updated || F.last_changed);
          if (!Number.isFinite(st) || !mt) return;
          const lt = Ue(new Date(mt));
          T[lt] = Math.max(T[lt] || 0, st);
        });
      }
      Ps = T, kn();
    } catch {
    }
  }
  function Co() {
    kn();
  }
  Co(), setInterval(() => {
    Co(), Ji(), ho();
  }, 10 * 60 * 1e3);
  function es(e) {
    const r = {}, s = {};
    xe.history.forEach((B) => {
      const F = Ue(new Date(B.start));
      r[F] = (r[F] || 0) + (B.seconds || 0) / 60, s[F] = (s[F] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), v = Ue(u), T = [];
    for (let B = e - 1; B >= 0; B--) {
      const F = new Date(u.getFullYear(), u.getMonth(), u.getDate() - B), st = Ue(F), mt = xe.checkins.filter((it) => it.date === st), lt = (it) => {
        const Nt = mt.map((ae) => ae[it]).filter(Boolean);
        return Nt.length ? Nt.reduce((ae, Ft) => ae + Ft, 0) / Nt.length : null;
      };
      T.push({
        key: st,
        date: F,
        minutes: Math.round(r[st] || 0),
        moves: s[st] || 0,
        steps: st === v && ts() != null ? ts() : Ps[st] ?? null,
        mood: lt("mood"),
        energy: lt("energy")
      });
    }
    return T;
  }
  function Fs(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function kn() {
    const e = o("insightCard");
    if (!e) return;
    const r = es(30), s = Fs(r), u = r.reduce((mt, lt) => mt + lt.minutes, 0), v = /* @__PURE__ */ new Date(), T = Ue(v), B = Ue(new Date(v.getFullYear(), v.getMonth(), v.getDate() - (v.getDay() + 6) % 7)), F = r.filter((mt) => mt.key >= B && mt.key <= T).reduce((mt, lt) => mt + lt.minutes, 0), st = (mt, lt, it) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + mt + '</div><div><div class="activityRowName">' + Gt(lt) + '</div><div class="activityRowMeta">' + Gt(it) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ua("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + st(Ua("clock"), "This week", F + " min") + st(Ua("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + st(Ua("calendar"), "30 days", u + " min") + "</div>";
  }
  const gr = {
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
  }, Ml = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", To = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, vr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Di = 0;
  const br = (e, r) => '<path class="' + r + '" d="' + e + '"/>', Os = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', an = (e, r, s, u) => {
    const v = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Os(e, 2400) + ' d="M' + e + " " + (r - s) + "L" + (e + v) + " " + (r - v) + "L" + (e + s) + " " + r + "L" + (e + v) + " " + (r + v) + "L" + e + " " + (r + s) + "L" + (e - v) + " " + (r + v) + "L" + (e - s) + " " + r + "L" + (e - v) + " " + (r - v) + 'Z"/>';
  }, wr = ([e, r, s], u) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ws = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Sl = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), vd = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Cl(e, r, s, u) {
    return e === "clear" ? r ? wr(s ? vr.l : vr.s, u) + (s ? an(70, 20, 5.83, 1) + an(78.33, 41.67, 3.75, 0.8) + an(60, 71.67, 3.33, 0.6) : an(42, 12, 3.5, 1) + an(47, 25, 2.25, 0.8) + an(36, 43, 2, 0.6)) : Ws(u, s) : e === "partly" ? (r ? wr(s ? vr.lp : vr.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + br(s ? To.lp : To.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? an(73.33, 16.67, 4.17, 0.9) : an(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? br(s ? To.lc : To.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? an(15, 15, 3.75, 0.8) + an(76.67, 13.33, 2.92, 0.6) : an(9, 9, 2.25, 0.8) + an(46, 8, 1.75, 0.6) : "") : br(s ? To.lr : To.s, "wxCloudLight") + (e === "rain" ? Sl(s) : vd(s));
  }
  const Tl = () => {
    var e;
    return ((e = da == null ? void 0 : da["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let nn = me().weatherStyle || "bitmap", Ll = me().weatherLayout === "strip" ? "strip" : "tiles", bd = me().weatherMotion !== !1;
  const xr = () => bd && !La(), ei = /* @__PURE__ */ new Map(), as = 700, wd = (e) => {
    const [r, s] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function yr(e, r, s, u = nn, v, T) {
    let B = Ml(e);
    const F = B === "night" || (T != null ? !!T : !!s && Tl());
    B === "night" && (B = "clear");
    const st = r ? 90 : 54, mt = ed(e, F), lt = performance.now();
    let it = v ? ei.get(v) : null;
    if (v && !it ? ei.set(v, it = { key: mt, t0: -1e9 }) : it && it.key !== mt && (it.fromKey = it.key, it.from = it.last || null, it.key = mt, it.t0 = lt), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + mt + '"' + (v ? ' data-wx-slot="' + v + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + st + '"></canvas></span>';
    let Nt = "";
    if (it && lt - it.t0 < as && (xr() || La())) {
      const ae = wd(it.fromKey);
      Nt = '<span class="wxLayer wxOut ' + ae.k + (ae.night ? " night" : "") + '" style="animation-delay:' + Math.round(it.t0 - lt) + 'ms"><svg viewBox="0 0 ' + st + " " + st + '">' + Cl(ae.k, ae.night, r, "wxg" + ++Di) + "</svg></span>";
    }
    return '<span class="wxIcon ' + B + (F ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + st + " " + st + '">' + Cl(B, F, r, "wxg" + ++Di) + "</svg>" + Nt + "</span>";
  }
  function ai() {
    const e = o("app"), r = getComputedStyle(e), s = (F) => r.getPropertyValue(F).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([F, st]) => {
      s(st) && (u[F] = s(st));
    });
    const v = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", B = e.classList.contains("light");
    return { colors: u, ink: B ? v : T, paper: B ? T : v };
  }
  function oo(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = ai(), v = xr(), T = La();
    s.forEach((B) => {
      var it;
      const F = B.dataset.wx, st = B.dataset.wxSlot ? ei.get(B.dataset.wxSlot) : null;
      let mt = Gd(F, u.colors);
      if (st && st.key === F) {
        const Nt = (r - st.t0) / as;
        Nt < 1 && (v || T) && (mt = Zp(st.from || Gd(st.fromKey, u.colors), mt, Math.max(0, Nt), u.colors, T)), st.last = mt;
      }
      const lt = dp(mt, { size: Number(B.dataset.wxSize) || 54, px: 2, oneBit: B.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: v });
      B.width !== lt.w && (B.width = lt.w), B.height !== lt.h && (B.height = lt.h), (it = B.getContext("2d")) == null || it.putImageData(new ImageData(lt.data, lt.w, lt.h), 0, 0);
    });
  }
  let Lo = null, Al = -1;
  function _l(e) {
    if (Lo = null, !b) return;
    const r = xr(), s = Math.floor(e / 100), u = [...ei.values()].some((st) => e - st.t0 < as), v = [...t.values()].some((st) => e - st.t0 < st.dur), T = vt.home.classList.contains("active"), B = E.classList.contains("open"), F = r && nn === "smooth" && (B || T && Ll === "strip");
    !document.hidden && (u || v || F || r && s !== Al) && (Al = s, T && (oo(o("weatherCard"), e), h(o("weatherCard"), e)), B && (oo(E, e), h(E, e))), (r || u || v) && (Lo = requestAnimationFrame(_l));
  }
  function Ao() {
    o("app").classList.toggle("wxMotion", xr()), !Lo && b && (Lo = requestAnimationFrame(_l));
  }
  let qs = [];
  const $e = 36e5, ns = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function on() {
    const e = /* @__PURE__ */ new Date(), r = (T, B) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + T, B), s = [], u = [], v = [...Array(6)].map((T, B) => {
      const F = r(B, 6), st = r(B, 18), mt = r(B + 1, 6), lt = qs.find((Nt) => Ue(new Date(Nt.datetime)) === Ue(F)), it = (Nt, ae, Ft) => {
        const Rt = s.filter((ge) => ge.t >= +Nt && ge.t < +ae);
        if (Rt.length) {
          const ge = {};
          return Rt.forEach((qt) => {
            ge[qt.c] = (ge[qt.c] || 0) + (ns.has(qt.c) ? 2 : 1);
          }), Object.entries(ge).sort((qt, be) => be[1] - qt[1])[0][0];
        }
        const Lt = u.find((ge) => {
          const qt = +new Date(ge.datetime);
          return qt >= +Nt - 3 * $e && qt < +ae && (ge.is_daytime == null || !!ge.is_daytime == !Ft);
        });
        if (Lt) return Lt.condition;
        const he = (lt == null ? void 0 : lt.condition) || "cloudy";
        return Ft && he === "sunny" ? "clear-night" : he;
      };
      return { start: +F, end: +mt, day: it(F, st, !1), night: it(st, mt, !0), hi: Number(lt == null ? void 0 : lt.temperature), lo: Number(lt == null ? void 0 : lt.templow) };
    });
    return { days: v, hours: s, start: v[0].start, end: v[5].end };
  }
  const js = (e, r) => {
    const s = e.days.findIndex((v) => r < v.end);
    if (s < 0) return 1;
    const u = e.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, El = (e, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), v = e.days[u];
    return v.start + (s - u) * (v.end - v.start);
  };
  function os(e, r) {
    const s = Math.max(0, e.days.findIndex((st) => r < st.end)), u = e.days[s], v = (r - u.start) / (u.end - u.start) >= 0.5;
    let T = v ? u.night : u.day, B = NaN;
    const F = e.hours;
    if (F.length && r >= F[0].t - $e && r <= F[F.length - 1].t + $e) {
      let st = F.findIndex((it) => it.t > r);
      st < 0 && (st = F.length);
      const mt = F[Math.max(0, st - 1)], lt = F[Math.min(F.length - 1, st)];
      T = mt.c || T, B = lt.t > mt.t ? mt.temp + (lt.temp - mt.temp) * Math.max(0, Math.min(1, (r - mt.t) / (lt.t - mt.t))) : mt.temp;
    }
    if (!Number.isFinite(B)) {
      const st = [];
      if (e.days.forEach((mt) => {
        Number.isFinite(mt.lo) && st.push([mt.start - $e, mt.lo]), Number.isFinite(mt.hi) && st.push([mt.start + 9 * $e, mt.hi]);
      }), st.length) {
        B = r <= st[0][0] ? st[0][1] : st[st.length - 1][1];
        for (let mt = 1; mt < st.length; mt++) if (r <= st[mt][0] && r > st[mt - 1][0]) {
          const [lt, it] = st[mt - 1], [Nt, ae] = st[mt];
          B = it + (ae - it) * (1 - Math.cos(Math.PI * (r - lt) / (Nt - lt))) / 2;
          break;
        }
      }
    }
    return { cond: v && T === "sunny" ? "clear-night" : T, temp: B, night: v, day: u };
  }
  const zs = (e) => Ue(new Date(e)) === Ue(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), t = /* @__PURE__ */ new Map(), a = 900, i = 700;
  let l = null;
  const p = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    h(r.target.parentElement), r.target.closest("#wxDialog") && zt();
  })) : null;
  function h(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = on(), v = u.days.flatMap((it) => [{ cond: it.day, night: !1 }, { cond: it.night, night: !0 }]), T = v.map((it) => it.cond).join(), B = ai(), F = xr(), st = La(), mt = Number(Ue(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let lt = !1;
    s.forEach((it) => {
      var ge;
      const Nt = it.clientWidth, ae = it.clientHeight;
      if (!Nt || !ae) return;
      const Ft = it.dataset.wxStrip;
      let Rt = t.get(Ft);
      Rt ? Rt.sig !== T && (Rt.prev = Rt.segs, Rt.sig = T, Rt.segs = v, Rt.t0 = r, Rt.dur = i) : t.set(Ft, Rt = { sig: T, segs: v, prev: null, t0: r, dur: a });
      const Lt = F || st ? Math.min(1, Math.max(0, (r - Rt.t0) / Rt.dur)) : 1;
      Lt < 1 && (lt = !0);
      const he = { width: Nt, height: ae, colors: B.colors, clock: r, ambient: F, seed: mt, reveal: st ? Lt : 1 - Math.pow(1 - Lt, 3), prev: Lt < 1 ? Rt.prev : null, reduce: st };
      if (nn === "smooth") {
        const qt = Math.min(2, window.devicePixelRatio || 1), be = Math.round(Nt * qt), Le = Math.round(ae * qt);
        it.width !== be && (it.width = be), it.height !== Le && (it.height = Le);
        const de = it.getContext("2d");
        if (!de) return;
        de.setTransform(qt, 0, 0, qt, 0, 0), du(de, v, he);
      } else {
        const qt = lu(v, { ...he, px: 2, oneBit: nn === "onebit", ink: B.ink, paper: B.paper });
        it.width !== qt.w && (it.width = qt.w), it.height !== qt.h && (it.height = qt.h), (ge = it.getContext("2d")) == null || ge.putImageData(new ImageData(qt.data, qt.w, qt.h), 0, 0);
      }
    }), lt && Ao();
  }
  function f() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const r = en.weather, s = r && (da == null ? void 0 : da[r]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + yr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", oo(e);
      return;
    }
    const u = s.attributes || {}, v = u.temperature_unit || "°", T = (de) => Number.isFinite(Number(de)) ? Math.round(Number(de)) + "°" : "—", B = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", F = gr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), st = Ue(/* @__PURE__ */ new Date()), mt = qs.slice(0, 7), lt = mt.find((de) => Ue(new Date(de.datetime)) === st) || null, it = mt.filter((de) => Ue(new Date(de.datetime)) >= st).slice(0, 6), Nt = /* @__PURE__ */ new Date(), ae = Ue(new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate() + 1)), Ft = lt ? "H " + T(lt.temperature) + "&ensp; L " + T(lt.templow) : "", Rt = (de) => {
      const oe = Ue(new Date(de.datetime));
      return oe === st ? "Today" : oe === ae ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(de.datetime));
    }, Lt = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", he = (de) => {
      const oe = new Date(de.datetime);
      return Math.round((new Date(oe.getFullYear(), oe.getMonth(), oe.getDate()) - new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate())) / 864e5);
    }, ge = (de) => (gr[de] || de || "").toLowerCase(), qt = (de, oe) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + he(de) + '" aria-label="' + Gt(Rt(de) + ": " + ge(de.condition) + ", " + T(de.temperature) + " / " + T(de.templow) + ". Open the forecast") + '">' + yr(de.condition, !1, !1, nn, "day" + oe) + '<div><div class="activityRowName">' + Gt(Rt(de)) + '</div><div class="activityRowMeta">' + T(de.temperature) + " / " + T(de.templow) + "</div></div></div>", be = () => '<div class="wxStrip"><div class="wxStripDays">' + on().days.map((oe, ca) => {
      const ze = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(oe.start)) + ": " + ge(oe.day) + (ge(oe.day) === ge(oe.night) ? " all day and night" : ", then " + ge(oe.night) + " overnight") + (Number.isFinite(oe.hi) ? ". High " + T(oe.hi) : "") + (Number.isFinite(oe.lo) ? ", low " + T(oe.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ca + '" aria-label="' + Gt(ze) + '"><span class="wxDayName">' + Gt(zs(oe.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(oe.hi) + '</span><span class="wxLow">' + T(oe.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Gt("Now in " + B + ": " + Lt + "°, " + ge(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + yr(s.state, !0, !0, nn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(Lt)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(B) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(F) + "</div>" + (Ft ? '<div class="wxRange">' + Ft + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (it.length ? Ll === "strip" ? be() : '<div class="activityRows wxDays">' + it.map(qt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", oo(e);
    const Le = e.querySelector("canvas[data-wx-strip]");
    l && l !== Le && (p == null || p.unobserve(l)), l = Le, Le && (p == null || p.observe(Le), h(e)), Ao(), kt();
  }
  const g = o("weatherCard"), M = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      bt(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && bt(Date.now(), s);
  };
  g.addEventListener("click", (e) => M(e.target)), g.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), M(e.target));
  });
  const E = o("wxDialog"), R = o("wxGraph"), H = o("wxGraphWrap");
  let $ = Date.now(), Z = null, Ct = !1, nt = null;
  function bt(e, r) {
    const s = on();
    Z = r || null, $ = Math.max(s.start, Math.min(s.end - $e, e)), t.delete("dialog"), ei.delete("scrub"), E.classList.add("open"), E.setAttribute("aria-hidden", "false"), kt(), p == null || p.observe(E.querySelector("canvas[data-wx-strip]")), R.focus({ preventScroll: !0 }), Ao();
  }
  function q() {
    var e;
    E.classList.remove("open"), E.setAttribute("aria-hidden", "true"), p == null || p.unobserve(E.querySelector("canvas[data-wx-strip]")), (e = Z == null ? void 0 : Z.focus) == null || e.call(Z, { preventScroll: !0 }), Z = null;
  }
  function kt() {
    if (!E.classList.contains("open")) return;
    const e = on();
    o("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Gt(zs(r.start)) + "</span>").join(""), zt(e), z(e), h(E);
  }
  function z(e = on()) {
    const r = os(e, $), s = da == null ? void 0 : da[en.weather], u = (s == null ? void 0 : s.attributes) || {}, v = u.temperature_unit || "°", T = Math.abs($ - Date.now()) < $e / 2, B = T && s ? s.state : r.cond, F = T && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", st = gr[B] || (B ? B.charAt(0).toUpperCase() + B.slice(1) : "—"), mt = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round($ / $e) * $e)), lt = r.day, it = (Number.isFinite(lt.hi) ? "H " + Math.round(lt.hi) + "°" : "") + (Number.isFinite(lt.lo) ? "&ensp; L " + Math.round(lt.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + yr(B, !0, T, nn, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(F)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(mt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(st) + "</div>" + (it ? '<div class="wxRange">' + it + "</div>" : "") + "</div>", oo(o("wxDialogNow")), R.setAttribute("aria-valuenow", String(Math.round(($ - e.start) / $e))), R.setAttribute("aria-valuetext", mt + ", " + st.toLowerCase() + ", " + F + "°"), Ne(e), Ao();
  }
  function zt(e = on()) {
    const r = o("wxGraphLine"), s = H.clientWidth, u = H.clientHeight;
    if (!s || !u) return;
    const v = [];
    for (let Lt = e.start; Lt <= e.end; Lt += $e) {
      const he = os(e, Lt).temp;
      Number.isFinite(he) && v.push([js(e, Lt) * s, he]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), v.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', nt = null, Ne(e);
      return;
    }
    const T = v.map((Lt) => Lt[1]), B = Math.min(...T), F = Math.max(...T), st = Math.max(4, F - B), mt = nn !== "smooth", lt = (Lt) => mt ? Math.round(Lt / 2) * 2 : Math.round(Lt * 10) / 10;
    nt = (Lt) => u * 0.84 - (Lt - B) / st * u * 0.62;
    const it = ai(), Nt = nn === "onebit" ? it.paper : "#ffffff", ae = nn === "onebit" ? it.ink : "rgba(0,0,0,.28)", Ft = "M" + v.map((Lt) => lt(Lt[0]) + " " + lt(nt(Lt[1]))).join(" L"), Rt = (Lt, he) => {
      const ge = v.find((qt) => qt[1] === Lt);
      return '<text class="wxLineLabel" x="' + lt(Math.min(s - 14, Math.max(14, ge[0]))) + '" y="' + lt(nt(Lt) + (he ? 18 : -10)) + '" fill="' + Nt + '" stroke="' + ae + '">' + Math.round(Lt) + "°</text>";
    };
    r.setAttribute("shape-rendering", mt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Ft + '" fill="none" stroke="' + ae + '" stroke-width="' + (mt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ft + '" fill="none" stroke="' + Nt + '" stroke-width="2" stroke-linejoin="round"/>' + Rt(F, !1) + Rt(B, !0) + '<g id="wxCursorMark"></g>', Ne(e);
  }
  function Ne(e = on()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = H.clientWidth, u = H.clientHeight, v = nn !== "smooth", T = (Nt) => v ? Math.round(Nt / 2) * 2 : Nt, B = T(js(e, $) * s), F = os(e, $).temp, st = ai(), mt = nn === "onebit" ? st.paper : "#ffffff", lt = nn === "onebit" ? st.ink : "rgba(0,0,0,.28)", it = nt && Number.isFinite(F) ? T(nt(F)) : null;
    r.innerHTML = '<rect x="' + (B - 2) + '" y="0" width="4" height="' + u + '" fill="' + lt + '"/><rect x="' + (B - 1) + '" y="0" width="2" height="' + u + '" fill="' + mt + '"/>' + (it == null ? "" : v ? '<rect x="' + (B - 5) + '" y="' + (it - 5) + '" width="10" height="10" fill="' + mt + '" stroke="' + lt + '" stroke-width="2"/>' : '<circle cx="' + B + '" cy="' + it + '" r="6" fill="' + mt + '" stroke="' + lt + '" stroke-width="2"/>');
  }
  const ve = (e) => {
    const r = H.getBoundingClientRect();
    r.width && ($ = El(on(), (e - r.left) / r.width), z());
  };
  R.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Ct = !0;
      try {
        R.setPointerCapture(e.pointerId);
      } catch {
      }
      ve(e.clientX);
    }
  }), R.addEventListener("pointermove", (e) => {
    Ct && ve(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => R.addEventListener(e, () => {
    Ct = !1;
  })), R.addEventListener("keydown", (e) => {
    const r = on(), s = { ArrowLeft: -$e, ArrowRight: $e, ArrowDown: -$e, ArrowUp: $e, PageUp: -24 * $e, PageDown: 24 * $e }[e.key];
    s ? (e.preventDefault(), $ = Math.max(r.start, Math.min(r.end - $e, Math.round($ / $e) * $e + s)), z(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), $ = e.key === "Home" ? r.start : r.end - $e, z(r));
  }), o("wxDialogClose").addEventListener("click", q), E.addEventListener("click", (e) => {
    e.target === E && q();
  }), E.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), q());
  }), f(), (cc = (lc = window.matchMedia) == null ? void 0 : (dc = lc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || cc.call(dc, "change", () => {
    Ao(), oo(n);
  }), Ao();
  const Sa = o("tvNav");
  d.fullscreenSupported || (Sa.hidden = !0), Sa.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !vt.workout.classList.contains("active") || Vo.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ko.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(ue.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== ue.value && (ue.value = r, ue.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [D, L, P, ue].forEach((e) => e.addEventListener("input", () => {
    const r = ne[Qt];
    r && (r.total = Number(D.value), r.work = Number(L.value), r.rest = Number(P.value)), De();
  })), j.addEventListener("click", jr), jt.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", jr), Ko.addEventListener("click", () => qn(!Va)), na(Qt), Xi(), Ji(), kn(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), pr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    xe.history = [], xe.checkins = [], $i = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    za(), Co(), Ji(), Xi(), kn(), ho(), Fe("Stats reset");
  });
  const Xt = o("morningTime"), We = o("eveningTime"), ni = o("checkinAutoOpen");
  Xt.value = Aa().morning, We.value = Aa().evening, ni.classList.toggle("on", me().checkinAutoOpen !== !1), [["morningTime", Xt], ["eveningTime", We]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (tn(e, r.value), ho());
  })), ni.addEventListener("click", () => {
    const e = me().checkinAutoOpen === !1;
    ni.classList.toggle("on", e), tn("checkinAutoOpen", e);
  }), setTimeout(vs, 800);
  const Dl = o("checkinNotify"), Rl = o("checkinNotifyTarget"), ac = o("checkinNotifyStatus"), Fp = ac.textContent;
  function nc() {
    const e = d.notifyServices(), r = e.filter((v) => v.startsWith("mobile_app_")), s = r.length ? r : e, u = (v) => v.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Rl.innerHTML = s.map((v) => '<option value="' + Gt(v) + '">' + Gt(u(v)) + "</option>").join(""), !me().notifyTarget && s[0] && (me().notifyTarget = s[0]), Rl.value = me().notifyTarget || "";
  }
  function Bl() {
    const e = !!me().notifyOn;
    Dl.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const r = Aa();
    ac.textContent = e ? "Sends at " + r.morning + " and " + r.evening : Fp;
  }
  async function xd() {
    const e = !!me().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: me().notifyTarget, times: Aa() } : null), !0;
    } catch {
      return Fe("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Dl.addEventListener("click", async () => {
    const e = !me().notifyOn;
    if (e && (nc(), !me().notifyTarget)) {
      Fe("Install the Companion app on your phone first");
      return;
    }
    me().notifyOn = e, Bl(), await xd() ? (za(), Fe(e ? "Check-in notifications on" : "Check-in notifications off")) : (me().notifyOn = !e, Bl());
  }), Rl.addEventListener("change", () => {
    tn("notifyTarget", Rl.value), me().notifyOn && xd();
  }), [Xt, We].forEach((e) => e.addEventListener("change", () => {
    Bl(), me().notifyOn && xd();
  })), nc(), Bl();
  let yd = null;
  function Op() {
    yd || (yd = setTimeout(() => {
      yd = null, kn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, u;
      const r = !da || da[en.weather] !== e[en.weather] || ((s = da["sun.sun"]) == null ? void 0 : s.state) !== ((u = e["sun.sun"]) == null ? void 0 : u.state);
      da = e, Is(e), no(e), r && f(), Date.now() - Hs > 60 * 60 * 1e3 && kl(), Op();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (xe.history = e.history, Co()), Array.isArray(e.history) && kn(), Array.isArray(e.checkins) && (xe.checkins = e.checkins.map(Wi), ho(), Xi(), Ji(), Co(), kn()), e.profiles && !_a.classList.contains("open") && !Wn)) {
        const r = Oi(e);
        Object.keys(ne).forEach((s) => delete ne[s]), Object.assign(ne, r.profiles), xe.order = r.order, ne[Qt] || (Qt = xe.order[0]), lo(), na(Qt);
      }
    },
    suspend() {
      b = !1;
    },
    resume() {
      b || (b = !0, wi || (wi = requestAnimationFrame(Hr)), yi || (yi = requestAnimationFrame(Fn)), Ao(), Ei(n.querySelector(".tab.active"), !1));
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
}, Gs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, va = "made_up_", Ni = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(va);
}, Hl = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Qd(n) {
  const d = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function hu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let c = +d; c < +n; c += 10 * 60 * 1e3) o += Qd(new Date(c)) / 6;
  return o;
}
function mc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let o = 0; o <= 96; o++) {
    const c = +n - (96 - o) * 15 * 60 * 1e3;
    d.push([c, Qd(new Date(c))]);
  }
  return d;
}
function mu({ onChange: n }) {
  const d = {}, o = {}, c = (V, O, ut, rt) => {
    d[V] = { entity_id: V, state: ut, attributes: rt, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[V] = O;
  }, m = (V, O, ut) => {
    const rt = d[V], ht = O ?? rt.state;
    d[V] = { ...rt, state: ht, attributes: { ...rt.attributes, ...ut }, last_changed: ht === rt.state ? rt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (V, O, ut, rt) => c("binary_sensor." + va + (V ? V + "_" : "") + Hl(O), V, rt ? "on" : "off", { friendly_name: O, device_class: ut });
  Object.entries(fu).forEach(([V, O]) => {
    if (O.temperature != null && c("sensor." + va + V + "_temperature", V, String(O.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), O.humidity != null && c("sensor." + va + V + "_humidity", V, String(O.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), O.vacuum && c("vacuum." + va + "robot", V, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), O.climate && c("climate." + va + V, V, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: O.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), O.cover) {
      const [ut, rt, ht, et] = O.cover;
      c("cover." + va + V + "_" + Hl(ut), V, ht ? "open" : "closed", { friendly_name: ut, device_class: rt, current_position: ht, ...et != null ? { current_tilt_position: et } : {} });
    }
    if (O.humidifier && c("humidifier." + va + V, V, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: O.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), O.solar && (c("sensor." + va + V + "_solar_power", V, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + va + V + "_solar_today", V, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), O.valve && c("valve." + va + V + "_" + Hl(O.valve), V, "closed", { friendly_name: O.valve, device_class: "water" }), O.door && b(V, O.door, "door", O.doorOpen), O.window && b(V, O.window, "window", !1), O.motion && b(V, O.motion, "motion", !1), O.plant) {
      const [ut, rt, ht, et, tt] = O.plant, S = va + Hl(ut), at = (G, vt, j, jt, k) => c("sensor." + S + "_" + G, V, String(j), { friendly_name: vt, device_class: k, state_class: "measurement", unit_of_measurement: jt, plant_low: j < Gs[G][0], plant_high: j > Gs[G][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[G] });
      at("moisture", "Moisture", rt, "%", "moisture"), at("light", "Light", ht, "lx", "illuminance"), at("temperature", "Temperature", et, "°C", "temperature"), at("fertility", "Fertility", tt, "µS/cm", "conductivity");
      const Pt = Object.entries({ moisture: rt, light: ht, temperature: et, fertility: tt }).filter(([G, vt]) => vt < Gs[G][0] || vt > Gs[G][1]).map(([G, vt]) => G + (vt < Gs[G][0] ? " low" : " high"));
      c("plant." + S, V, Pt.length ? "problem" : "ok", { friendly_name: ut, moisture: rt, brightness: ht, temperature: et, conductivity: tt, problem: Pt.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + va + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), c("sensor." + va + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, _ = {};
  let y = null;
  function N() {
    const V = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((O) => {
      O.endsWith("_solar_power") && (d[O] = { ...d[O], state: Qd(V).toFixed(2) }), O.endsWith("_solar_today") && (d[O] = { ...d[O], state: hu(V).toFixed(1) });
    });
  }
  N();
  let wt = 0;
  function ct() {
    let V = !1;
    const O = ++wt % 10 === 0, ut = (et, tt, S) => {
      m(et, tt, S), V = !0;
    };
    Object.entries(w).forEach(([et, tt]) => {
      const S = d[et].attributes.current_position, at = S < tt ? Math.min(tt, S + 10) : Math.max(tt, S - 10);
      at === tt && delete w[et], ut(et, at === tt ? at === 0 ? "closed" : "open" : tt > S ? "opening" : "closing", { current_position: at });
    }), Object.entries(_).forEach(([et, tt]) => {
      const S = d[et].attributes.current_tilt_position, at = S < tt ? Math.min(tt, S + 25) : Math.max(tt, S - 25);
      at === tt && delete _[et], ut(et, null, { current_tilt_position: at });
    }), Object.keys(d).filter((et) => et.startsWith("climate.")).forEach((et) => {
      const tt = d[et], S = tt.attributes, at = S.current_temperature, Pt = (tt.state === "heat" || tt.state === "auto") && at < S.temperature - 0.05, G = (tt.state === "cool" || tt.state === "auto") && at > S.temperature + 0.05, vt = tt.state === "off" ? "off" : Pt ? "heating" : G ? "cooling" : "idle", j = O ? Math.round((at + (Pt ? 0.1 : G ? -0.1 : 0)) * 10) / 10 : at;
      (j !== at || vt !== S.hvac_action) && ut(et, null, { current_temperature: j, hvac_action: vt });
    }), Object.keys(d).filter((et) => et.startsWith("humidifier.")).forEach((et) => {
      const tt = d[et], S = tt.attributes, at = S.current_humidity, Pt = tt.state === "on" && at < S.humidity, G = Pt && O ? at + 1 : at, vt = tt.state !== "on" ? "off" : Pt ? "humidifying" : "idle";
      if (G !== at || vt !== S.action) {
        ut(et, null, { current_humidity: G, action: vt });
        const j = "sensor." + va + o[et] + "_humidity";
        d[j] && ut(j, String(G));
      }
    });
    const rt = d["vacuum." + va + "robot"], ht = rt.attributes;
    rt.state === "cleaning" && O && ut(rt.entity_id, null, { battery_level: Math.max(5, ht.battery_level - 1) }), rt.state === "returning" && ut(rt.entity_id, "docked", {}), rt.state === "docked" && ht.battery_level < 100 && ut(rt.entity_id, null, { battery_level: Math.min(100, ht.battery_level + 2) }), y && Date.now() - y.at > 5e3 && (ut("alarm_control_panel." + va + "house", "armed_" + y.mode, {}), y = null), V && n();
  }
  const U = setInterval(ct, 1e3), X = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function ot(V, O, ut) {
    const rt = ut == null ? void 0 : ut.entity_id;
    if (!d[rt]) return !1;
    const ht = d[rt], et = ht.attributes, tt = (S, at) => m(rt, S, at);
    if (V === "climate" && (O === "set_temperature" && tt(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, ut.temperature)) }), O === "set_hvac_mode" && tt(ut.hvac_mode, ut.hvac_mode === "off" ? { hvac_action: "off" } : {}), O === "toggle" && tt(ht.state === "off" ? "heat" : "off", ht.state === "off" ? {} : { hvac_action: "off" })), V === "cover") {
      const S = O === "open_cover" ? 100 : O === "close_cover" ? 0 : O === "set_cover_position" ? ut.position : O === "toggle" ? et.current_position > 0 ? 0 : 100 : null;
      O === "stop_cover" && (delete w[rt], delete _[rt], tt(et.current_position === 0 ? "closed" : "open")), S != null && S !== et.current_position && (w[rt] = S, tt(S > et.current_position ? "opening" : "closing"));
      const at = O === "open_cover_tilt" ? 100 : O === "close_cover_tilt" ? 0 : O === "set_cover_tilt_position" ? ut.tilt_position : null;
      O === "stop_cover_tilt" && delete _[rt], at != null && et.current_tilt_position != null && at !== et.current_tilt_position && (_[rt] = at);
    }
    if (V === "humidifier" && (O === "set_humidity" && tt(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, ut.humidity)) }), O === "set_mode" && tt(null, { mode: ut.mode }), O === "turn_on" || O === "turn_off" || O === "toggle")) {
      const S = O === "turn_on" || O === "toggle" && ht.state !== "on";
      tt(S ? "on" : "off", { action: S ? "idle" : "off" });
    }
    if (V === "vacuum" && (O === "start" && tt("cleaning", { rooms: ut.rooms || et.rooms }), O === "pause" && tt("paused"), O === "return_to_base" && tt("returning", { rooms: [] }), O === "locate" && tt(null, { located: Date.now() }), O === "set_rooms" && tt(null, { rooms: ut.rooms })), V === "valve") {
      const S = O === "open_valve" || O === "toggle" && ht.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(O) && tt(S ? "open" : "closed");
    }
    if (V === "alarm_control_panel") {
      O === "alarm_disarm" && (y = null, tt("disarmed", { changed_by: "Matt" }));
      const S = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[O];
      S && (y = { mode: S, at: Date.now() }, tt("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function K(V) {
    const O = (V == null ? void 0 : V.states) || {}, ut = (V == null ? void 0 : V.entities) || {}, rt = (V == null ? void 0 : V.devices) || {}, ht = (L) => {
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
    }, Pt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], G = Object.keys(O).filter((L) => L.startsWith("vacuum.") && et(L)), vt = Object.values((V == null ? void 0 : V.areas) || {}).filter((L) => !uu.has(L.area_id)).map((L) => {
      const P = L.area_id, ft = tt[P] || [], dt = (Et) => ft.filter((ye) => ye.startsWith(Et + ".")), W = (Et) => dt("sensor").filter((ye) => at(ye) === Et), gt = (Et) => Object.keys(d).filter((ye) => o[ye] === P && Et(ye)), Mt = (Et, ye) => Et.length ? Et : gt(ye), Jt = Mt(W("temperature"), (Et) => Et.endsWith(P + "_temperature")), ue = Mt(W("humidity"), (Et) => Et.endsWith(P + "_humidity")), ta = W("power").filter((Et) => /^(W|kW)$/.test(S[Et].attributes.unit_of_measurement || "")), Se = dt("binary_sensor").filter((Et) => at(Et) === "moisture"), so = Mt(dt("plant"), (Et) => Et.startsWith("plant.")).map((Et) => ({ id: Et, readings: gt((ye) => ye.startsWith("sensor." + Et.split(".")[1] + "_")) })), Na = [...dt("binary_sensor").filter((Et) => Pt.includes(at(Et))), ...gt((Et) => Et.startsWith("binary_sensor."))];
      return {
        id: P,
        name: L.name,
        icon: L.icon,
        readings: [...Jt.slice(0, 1), ...ue.slice(0, 1), ...Se],
        power: ta.length ? ta.reduce((Et, ye) => Et + Number(S[ye].state) * (S[ye].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: dt("switch"),
        lights: dt("light"),
        actions: [...dt("light"), ...Mt(dt("climate"), (Et) => Et.startsWith("climate.")), ...Mt(dt("cover"), (Et) => Et.startsWith("cover.")), ...Mt(dt("humidifier"), (Et) => Et.startsWith("humidifier.")), ...Mt(dt("valve"), (Et) => Et.startsWith("valve.")), ...dt("media_player"), ...dt("vacuum"), ...G.length ? [] : gt((Et) => Et.startsWith("vacuum."))],
        solar: gt((Et) => Et.includes("_solar_")),
        plants: so,
        openings: Na,
        alerts: [...Se, ...Na].filter((Et) => {
          var ye;
          return ((ye = S[Et]) == null ? void 0 : ye.state) === "on";
        })
      };
    }).filter((L) => L.readings.length || L.plugs.length || L.actions.length || L.solar.length || L.plants.length), j = Object.keys(O).find((L) => /^sensor\..*(p1_meter_power|grid_power)$/.test(L) && O[L].state !== "unavailable") || null, jt = (L) => Object.keys(O).filter((P) => P.startsWith(L + ".") && et(P)), k = jt("alarm_control_panel"), D = G.length ? G : ["vacuum." + va + "robot"];
    return {
      states: S,
      rooms: vt,
      grid: j,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (L) => d[L] ? o[L] : ht(L),
      vacuums: D,
      homeVacuums: D.filter((L) => !vt.some((P) => P.actions.includes(L))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + va + "house"],
        locks: jt("lock"),
        openings: [...Object.keys(d).filter((L) => L.startsWith("binary_sensor.")), "sensor." + va + "doorbell"]
      }
    };
  }
  return { model: K, call: ot, stop() {
    clearInterval(U), clearInterval(X);
  } };
}
const si = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ud = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), o = d.length === 3 ? d.split("").map((c) => c + c).join("") : d;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, gu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), gc = {}, Un = (n, d, o) => {
  const c = n + d + o;
  return gc[c] || (gc[c] = gu(Ud(n).map((m, b) => m + (Ud(d)[b] - m) * o)));
}, vc = {}, Zl = (n) => vc[n] || (vc[n] = Ud(n));
function vu(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Un(d.clear[0], d.cloudy[0], 0.12), Un(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Un(d.rain[0], "#000000", 0.22), Un(d.rain[1], "#000000", 0.22)], d;
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
], ri = (n, d) => (bu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, fp = 1, hp = 2, mp = 3, gp = 4, ds = 5, Xl = 6, Yd = 7, vp = 8, bc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), wu = (n, d, o) => {
  let c = !1;
  for (let m = 0, b = n.length - 1; m < n.length; b = m++) {
    const w = n[m], _ = n[b];
    w[1] > o != _[1] > o && d < (_[0] - w[0]) * (o - w[1]) / (_[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function xu(n, d, o, c, { oneBit: m, ink: b, paper: w, snowInk: _ }) {
  const y = new Uint8ClampedArray(o * c * 4), N = Zl(b), wt = Zl(w);
  for (let ct = 0; ct < c; ct++) for (let U = 0; U < o; U++) {
    const X = ct * o + U, ot = d[X];
    if (n[X] == null) continue;
    let K = Zl(n[X]);
    if (m) {
      let V;
      ot === gp || ot === vp ? V = !0 : ot === ds ? V = _ : ot === Yd || ot === Xl ? V = !1 : V = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= ri(U, ct), (ot === fp || ot === hp || ot === mp || ot === Xl) && (U > 0 && d[X - 1] !== ot || U < o - 1 && d[X + 1] !== ot || ct > 0 && d[X - o] !== ot || ct < c - 1 && d[X + o] !== ot) && (V = !0), K = V ? N : wt;
    }
    y[X * 4] = K[0], y[X * 4 + 1] = K[1], y[X * 4 + 2] = K[2], y[X * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const yu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ku = (n) => ed(n, !1).split("/")[0], Sd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Mu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Tu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Lu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Au = [".##", "##.", ".#.", "#.."];
function bp(n, { width: d, height: o, colors: c, wave: m = 0.38, soft: b = 6, glow: w = 0.6, columns: _ = 6 }) {
  const y = { ...un, dawn: "#e5a77e", ...c }, N = vu(y), wt = d, ct = o, U = wt / _, X = U / 2, ot = Math.PI * 2, K = n.length ? n : [{ cond: "cloudy", night: !1 }], V = [...Array(_ * 2)].map((ht, et) => {
    const tt = K[Math.min(et, K.length - 1)], S = ku(tt.cond), at = et % 2 === 1;
    return { cond: tt.cond, k: S, night: at, sky: N[S][at ? 1 : 0], cover: yu[S] };
  }), O = (ht) => ct * (0.5 - m * Math.cos(ot * (ht / U - 0.25)));
  return { C: y, S: V, W: wt, H: ct, cw: U, sw: X, TAU: ot, yb: O, side: (ht, et, tt) => {
    const S = (ht ? O(et) - tt : tt - O(et)) / Math.max(3, b * 1.4) + 0.5;
    return S <= 0 ? 0 : S >= 1 ? 1 : S;
  }, glowAt: (ht) => {
    const et = ((ht / U - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(_ - 1, Math.round(ht / U - 0.25))), S = Math.max(0, Math.min(_ - 1, Math.round(ht / U - 0.75))), at = 1 - (V[2 * tt].cover + V[2 * S + 1].cover) / 2, Pt = Math.sin(Math.PI * Math.min(1, Math.max(0, O(ht) / ct)));
    return { c: et < 0.5 ? y.dusk : y.dawn, a: w * (0.2 + 0.8 * at) * Pt * Pt };
  }, soft: b, tw: U * 0.3, sy: ct / 90 };
}
function wp(n, { clock: d = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: b, side: w, C: _, TAU: y, sy: N, H: wt } = n, ct = d, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((K, V) => {
    const O = Sd(c * 977 + V * 131 + 7), ut = (V + 0.5) * b, rt = K.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[K.k] : 0;
    for (let ht = 0; ht < rt; ht++) {
      const et = ut + (O() - 0.5) * b * 1.6, tt = (6 + O() * 76) * N, S = O() < 0.35, at = 1.8 + O() * 1.6, Pt = w(!0, et, tt) * (S ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * ct / 2600 + ht * 1.7 + V) : 1);
      Pt >= 0.03 && U.stars.push({ x: et, y: tt, big: S, size: at, o: Pt });
    }
    if (!K.night && (K.k === "clear" || K.k === "partly")) {
      const ht = ut + (O() - 0.5) * b * 0.3, et = Math.min(15, b * 0.29);
      U.suns.push({ x: ht, y: 32 * N, rad: et, halo: et * 2.8 * (o ? 1 + 0.07 * Math.sin(y * ct / 3600 + V) : 1) });
    }
    if (K.night && (K.k === "clear" || K.k === "partly")) {
      const ht = Math.min(0.78, b * 0.55 / 34), et = ut - 23 * ht + (O() - 0.5) * b * 0.2;
      U.moons.push({ x: et + 23 * ht, y: (4 + (o ? 0.8 * Math.sin(y * ct / 5200 + V) : 0)) * N + 23 * ht, d: 46 * ht });
    }
  });
  const X = Math.max(56, Math.min(100, wt * 0.45)), ot = Math.max(1, b / (X * 2.4));
  return m.forEach((K, V) => {
    const O = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[K.k];
    if (!O) return;
    const ut = K.k === "partly" ? 1 : Math.round(O * ot), rt = Sd(c * 577 + V * 71 + 3), ht = (V + 0.5) * b, et = K.k === "rain" || K.k === "storm" || K.night ? _.cloudNight : _.cloudDay, tt = K.night ? 0.82 : K.k === "storm" ? 0.75 : 1;
    for (let S = 0; S < ut; S++) {
      const at = X / 46 * (K.k === "partly" ? 1 : 0.8 + rt() * 0.4), Pt = ht + (K.k === "partly" ? b * 0.12 : ((S + 0.5) / ut - 0.5) * b * 0.95 + (rt() - 0.5) * b * 0.5 / ut), G = (K.k === "partly" ? 40 : 6 + rt() * 26) * N, vt = o ? 2.5 * Math.sin(y * ct / 9e3 + V * 1.3 + S * 2.1) : 0, j = o ? 0.9 * Math.sin(y * ct / 6100 + V + S) : 0;
      U.clouds.push({ x: Pt - 23 * at + vt, y: G - 15.33 * at + j, w: 46 * at, h: 30.66 * at, fill: et, o: tt * (ut > 1 && S === 0 ? 0.85 : 1) });
    }
  }), m.forEach((K, V) => {
    const O = Sd(c * 313 + V * 29 + 11), ut = (V + 0.5) * b, rt = K.cond === "pouring" ? 16 : K.cond === "rainy" || K.cond === "hail" ? 9 : K.cond === "lightning-rainy" ? 12 : K.cond === "snowy-rainy" ? 5 : 0;
    for (let et = 0; et < rt; et++) {
      let tt = ut + (O() - 0.5) * b * 1.05, S = 44 + O() * 36, at = 1;
      if (o) {
        const G = ((S - 44 + ct * 0.04) % 36 + 36) % 36;
        tt -= 0.21 * (G - (S - 44)), S = 44 + G, at = Math.min(1, G / 6, (36 - G) / 6);
      }
      S *= N;
      const Pt = w(K.night, tt, S) * at;
      Pt >= 0.05 && U.drops.push({ x: tt, y: S, o: Pt });
    }
    const ht = K.cond === "snowy" ? 11 : K.cond === "snowy-rainy" ? 6 : 0;
    for (let et = 0; et < ht; et++) {
      let tt = ut + (O() - 0.5) * b * 1.05, S = 40 + O() * 44, at = 1;
      if (o) {
        const G = ((S - 40 + ct * 9e-3) % 44 + 44) % 44;
        S = 40 + G, tt += 1.6 * Math.sin(y * ct / 2800 + et * 1.9 + V), at = Math.min(1, G / 6, (44 - G) / 6);
      }
      S *= N;
      const Pt = w(K.night, tt, S) * at;
      Pt >= 0.05 && U.flakes.push({ x: tt, y: S, o: Pt });
    }
    if (K.k === "fog") {
      const et = K.night ? "#c8ccd6" : "#ffffff", tt = K.night ? 0.28 : 0.62, S = o ? 4 * Math.sin(y * ct / 8e3 + V) : 0;
      for (let at = 0; at < 4; at++) U.fogs.push({ x: ut - b * 0.75 + at % 2 * b * 0.18 + (at % 2 ? S : -S), y: (30 + at * 13) * N, w: b * 1.3, c: et, a: tt });
    }
    if (K.k === "storm") {
      const et = (ct / 3400 + V * 0.37) % 1;
      U.bolts.push({ x: ut + (O() - 0.5) * b * 0.3 - 5, y: 36 * N, o: o && !(et < 0.05 || et > 0.09 && et < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function _u(n, d, o, c, m, b, w, _) {
  const { S: y, C: N, cw: wt, yb: ct, glowAt: U, soft: X, tw: ot, sy: K } = n, V = new Array(o * c), O = new Uint8Array(o * c), ut = new Uint8Array(o * c), rt = (k, D, L, P, ft) => {
    L == null || k < 0 || D < 0 || k >= o || D >= c || (P >= 1 || P > ri(k + 5, D + 3)) && (V[D * o + k] = L, O[D * o + k] = ft);
  }, ht = (k, D, L, P) => {
    for (let ft = Math.max(0, Math.floor(D - L) - 1); ft <= Math.min(c - 1, D + L + 1); ft++) for (let dt = Math.max(0, Math.floor(k - L) - 1); dt <= Math.min(o - 1, k + L + 1); dt++) P(dt, ft, dt + 0.5 - k, ft + 0.5 - D);
  }, et = (k, D, L) => {
    for (let ft = 0; ft < k.length - 1; ft++) {
      const dt = (ft + D) * wt;
      if (L < dt - ot / 2) return [k[ft], k[ft], 0];
      if (L <= dt + ot / 2) return [k[ft], k[ft + 1], (L - dt + ot / 2) / ot];
    }
    const P = k[k.length - 1];
    return [P, P, 0];
  }, tt = y.filter((k) => !k.night).map((k) => k.sky), S = y.filter((k) => k.night).map((k) => k.sky), at = X / b, Pt = 16 * K / b;
  for (let k = 0; k < o; k++) {
    const D = (k + 0.5) * m, L = ct(D) / b, P = et(tt, 0.75, D), ft = et(S, 1.25, D), dt = U(D);
    for (let W = 0; W < c; W++) {
      const gt = ri(k, W), Mt = W + 0.5 - L, Jt = (at > 0.01 ? si(0.5 + Mt / at) : Mt > 0 ? 1 : 0) > gt;
      let ue = Jt ? P[2] > gt ? P[1] : P[0] : ft[2] > gt ? ft[1] : ft[0];
      (Jt ? si(((W + 0.5) / c - 0.45) / 0.55) * 0.7 : si(1 - (W + 0.5) / (c * 0.55)) * 0.7) > ri(k + 2, W + 5) && (ue = Jt ? Un(ue, "#ffffff", 0.18) : Un(ue, "#000000", 0.25)), Jt && Mt >= 0 && Mt < Pt && dt.a * 1.3 * (1 - Mt / Pt) > ri(k + 6, W + 1) && (ue = dt.c), V[W * o + k] = ue, ut[W * o + k] = Jt ? 0 : 1;
    }
  }
  const G = Un(N.sun, "#ffffff", 0.55), vt = Un(N.moon, "#ffffff", 0.6);
  d.stars.forEach((k) => {
    const D = Math.floor(k.x / m), L = Math.floor(k.y / b);
    if (D < 0 || L < 0 || D >= o || L >= c || !ut[L * o + D] || k.o < 0.15) return;
    const P = k.o > 0.45 ? N.star : Un(N.star, V[L * o + D], 0.5), ft = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    rt(D, L, P, 1, Yd);
    for (let dt = 1; dt <= ft; dt++) [[D - dt, L], [D + dt, L], [D, L - dt], [D, L + dt]].forEach((W) => {
      W[0] >= 0 && W[1] >= 0 && W[0] < o && W[1] < c && ut[W[1] * o + W[0]] && rt(W[0], W[1], P, 1, Yd);
    });
  }), d.suns.forEach((k) => {
    const D = Math.max(1.5, k.rad / m), L = k.x / m, P = k.y / b, ft = k.halo / m * 0.85;
    if (ht(L, P, ft, (dt, W, gt, Mt) => {
      const Jt = Math.sqrt(gt * gt + Mt * Mt);
      Jt > D && Jt < ft && !ut[W * o + dt] && rt(dt, W, G, 0.3 * (1 - (Jt - D) / (ft - D)), 0);
    }), _) {
      const dt = Math.floor(w / 500) % 2, W = Math.max(1, D * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === dt) for (let Mt = D + 1.2; Mt < D + 1.2 + W; Mt += 0.7) rt(Math.floor(L + Math.cos(gt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(gt * Math.PI / 4) * Mt), N.sun, 1, vp);
    }
    ht(L, P, D, (dt, W, gt, Mt) => {
      gt * gt + Mt * Mt <= D * D && rt(dt, W, si(((Mt / D + 1) / 2 - 0.6) / 0.4) > ri(dt, W) ? N.sunEdge : N.sun, 1, fp);
    });
  }), d.moons.forEach((k) => {
    const D = Math.max(1.5, k.d * 0.37 / m), L = k.x / m, P = k.y / b, ft = L + 0.547 * D, dt = P - 0.503 * D, W = 0.82 * D;
    ht(L, P, D, (gt, Mt, Jt, ue) => {
      if (Jt * Jt + ue * ue > D * D) return;
      const ta = gt + 0.5 - ft, Se = Mt + 0.5 - dt;
      ta * ta + Se * Se > W * W && rt(gt, Mt, si((ue + D) / (2 * D) * 1.1 - 0.1) > ri(gt, Mt) ? N.moon : vt, 1, hp);
    });
  }), d.clouds.forEach((k) => {
    const D = Math.max(3, k.w / m), L = D * 0.6665, P = k.x / m, ft = k.y / b, dt = Un(k.fill, "#000000", 0.16);
    for (let W = Math.max(0, Math.floor(ft) - 1); W <= Math.min(c - 1, ft + L + 1); W++) for (let gt = Math.max(0, Math.floor(P) - 1); gt <= Math.min(o - 1, P + D + 1); gt++) {
      const Mt = (gt + 0.5 - P) / D, Jt = (W + 0.5 - ft) / D;
      bc(Mt, Jt) && rt(gt, W, !bc(Mt, Jt + 1 / D) || si((Jt - 0.42) / 0.25) * 0.8 > ri(gt, W) ? dt : k.fill, k.o, mp);
    }
  }), d.fogs.forEach((k) => {
    const D = Math.floor(k.y / b), L = Math.max(D, Math.floor((k.y + 6 * K) / b) - 1), P = Math.floor(k.x / m), ft = Math.floor((k.x + k.w) / m);
    for (let dt = D; dt <= L; dt++) for (let W = P; W <= ft; W++) {
      const gt = (W - P) / Math.max(1, ft - P);
      rt(W, dt, k.c, k.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const j = Math.max(2, Math.round(9 / b));
  d.drops.forEach((k) => {
    const D = k.x / m, L = Math.floor(k.y / b);
    for (let P = 0; P < j; P++) rt(Math.floor(D - 0.208 * P * b / m), L + P, N.rain, k.o, gp);
  });
  const jt = Math.max(0, Math.round(4.4 / m / 2.6));
  return d.flakes.forEach((k) => {
    const D = Math.floor(k.x / m), L = Math.floor(k.y / b);
    rt(D, L, N.snow, k.o, ds);
    for (let P = 1; P <= jt; P++)
      rt(D - P, L, N.snow, k.o, ds), rt(D + P, L, N.snow, k.o, ds), rt(D, L - P, N.snow, k.o, ds), rt(D, L + P, N.snow, k.o, ds);
  }), d.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let D = Math.floor(k.y / b); D <= (k.y + 24) / b; D++) for (let L = Math.floor(k.x / m); L <= (k.x + 11) / m; L++)
        wu(Lu, (L + 0.5) * m - k.x, (D + 0.5) * b - k.y) && rt(L, D, N.sun, 1, Xl);
    else {
      const D = Math.round(k.x / m), L = Math.round(k.y / b);
      Au.forEach((P, ft) => P.split("").forEach((dt, W) => {
        dt === "#" && rt(D + W, L + ft, N.sun, 1, Xl);
      }));
    }
  }), { col: V, ids: O };
}
function Eu(n, d) {
  const o = d.px, c = Math.max(6, Math.round(d.width / o)), m = Math.max(6, Math.round(d.height / o)), b = d.width / c, w = d.height / m, _ = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, y = (X) => {
    const ot = bp(X, d);
    return _u(ot, wp(ot, { clock: _, ambient: d.ambient, seed: d.seed }), c, m, b, w, _, d.ambient);
  }, N = y(n), wt = d.reveal == null ? 1 : si(d.reveal);
  let ct = N.col, U = N.ids;
  if (wt < 1) {
    const X = d.prev ? y(d.prev) : null, ot = wt * (c + 12);
    ct = new Array(c * m), U = new Uint8Array(c * m);
    for (let K = 0; K < c * m; K++) {
      const V = K % c, O = K / c | 0;
      (d.reduce ? wt : si((ot - V) / 12)) > ri(V, O) ? (ct[K] = N.col[K], U[K] = N.ids[K]) : X ? (ct[K] = X.col[K], U[K] = X.ids[K]) : (ct[K] = null, U[K] = 255);
    }
  }
  return xu(ct, U, c, m, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Du(n, d, o) {
  const c = o.width, m = o.height, b = o.reveal == null ? 1 : si(o.reveal), w = (U, X) => {
    const ot = bp(X, o);
    Ru(U, ot, wp(ot, o));
  };
  if (n.clearRect(0, 0, c, m), b >= 1) {
    w(n, d);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const _ = n.canvas, y = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (y.width !== _.width || y.height !== _.height) && (y.width = _.width, y.height = _.height);
  const N = y.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, c, m), w(N, d);
  const wt = b * (c + 64) - 64, ct = N.createLinearGradient(wt, 0, wt + 64, 0);
  ct.addColorStop(0, "rgba(0,0,0,1)"), ct.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = ct, N.fillRect(0, 0, c, m), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function Ru(n, d, o) {
  const { W: c, H: m, S: b, C: w, cw: _, yb: y, glowAt: N, soft: wt, tw: ct, sy: U } = d, X = n.getTransform().a || 1, ot = (j) => {
    n.shadowColor = j ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = j ? 4 * X : 0, n.shadowOffsetY = j ? 1.5 * X : 0;
  }, K = (j, jt) => {
    const k = Zl(j);
    return "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + Math.max(0, Math.min(1, jt)).toFixed(3) + ")";
  }, V = (j, jt) => {
    const k = n.createLinearGradient(0, 0, c, 0);
    k.addColorStop(0, j[0]);
    for (let D = 0; D < j.length - 1; D++) {
      const L = (D + jt) * _, P = (L - ct / 2) / c, ft = (L + ct / 2) / c;
      P > 0 && P < 1 && k.addColorStop(P, j[D]), ft > 0 && ft < 1 && k.addColorStop(ft, j[D + 1]);
    }
    return k.addColorStop(1, j[j.length - 1]), k;
  }, O = Math.max(24, Math.ceil(c / 4)), ut = (j, jt) => {
    n.beginPath();
    for (let k = 0; k <= O; k++) {
      const D = c * k / O, L = j == null ? 0 : y(D) + j;
      k ? n.lineTo(D, L) : n.moveTo(D, L);
    }
    for (let k = O; k >= 0; k--) {
      const D = c * k / O;
      n.lineTo(D, y(D) + jt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = V(b.filter((j) => !j.night).map((j) => j.sky), 0.75), n.fillRect(0, 0, c, m);
  const rt = n.createLinearGradient(0, 0, c, 0);
  for (let j = 0; j <= 64; j++) {
    const jt = N(c * j / 64);
    rt.addColorStop(j / 64, K(jt.c, Math.min(1, jt.a)));
  }
  n.fillStyle = rt;
  for (let j = 0; j < 8; j++)
    n.globalAlpha = 1 - j / 8, ut(j * 2 * U, (j + 1) * 2 * U);
  n.fillStyle = V(b.filter((j) => j.night).map((j) => j.sky), 1.25);
  const ht = Math.max(0.5, wt), et = 6;
  n.globalAlpha = 1, ut(null, -ht);
  for (let j = 0; j < et; j++)
    n.globalAlpha = 1 - (j + 0.5) / et, ut(-ht + 2 * ht * j / et, -ht + 2 * ht * (j + 1) / et);
  n.globalAlpha = 1;
  const tt = new Path2D(Cu), S = new Path2D(Su), at = new Path2D(Mu), Pt = new Path2D(Tu);
  n.fillStyle = w.star, o.stars.forEach((j) => {
    n.globalAlpha = j.o, j.big ? (n.save(), n.translate(j.x, j.y), n.scale(j.size, j.size), n.fill(tt), n.restore()) : (n.beginPath(), n.arc(j.x, j.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const G = Un(w.sun, "#ffffff", 0.55);
  o.suns.forEach((j) => {
    const jt = n.createRadialGradient(j.x, j.y, 0, j.x, j.y, j.halo);
    jt.addColorStop(0, K(G, 0.42)), jt.addColorStop(0.7, K(G, 0)), n.fillStyle = jt, n.beginPath(), n.arc(j.x, j.y, j.halo, 0, Math.PI * 2), n.fill();
    const k = n.createLinearGradient(0, j.y - j.rad, 0, j.y + j.rad);
    k.addColorStop(0.6, w.sun), k.addColorStop(1, w.sunEdge), n.fillStyle = k, ot(!0), n.beginPath(), n.arc(j.x, j.y, j.rad, 0, Math.PI * 2), n.fill(), ot(!1);
  });
  const vt = Un(w.moon, "#ffffff", 0.6);
  o.moons.forEach((j) => {
    n.save(), n.translate(j.x - j.d / 2, j.y - j.d / 2), n.scale(j.d / 46, j.d / 46);
    const jt = n.createLinearGradient(0, 6, 0, 40);
    jt.addColorStop(0, vt), jt.addColorStop(1, w.moon), n.fillStyle = jt, ot(!0), n.fill(S), ot(!1), n.restore();
  }), o.clouds.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.scale(j.w / 46, j.h / 30.66), n.translate(-4, -9.67), n.fillStyle = j.fill, ot(!0), n.fill(at), ot(!1), n.restore();
  }), o.fogs.forEach((j) => {
    const jt = n.createLinearGradient(j.x, 0, j.x + j.w, 0);
    jt.addColorStop(0, K(j.c, 0)), jt.addColorStop(0.25, K(j.c, j.a)), jt.addColorStop(0.75, K(j.c, j.a)), jt.addColorStop(1, K(j.c, 0)), n.fillStyle = jt, n.fillRect(j.x, j.y, j.w, 6 * U);
  }), n.fillStyle = w.rain, o.drops.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((j) => {
    n.globalAlpha = j.o, n.beginPath(), n.arc(j.x, j.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((j) => {
    n.save(), n.globalAlpha = j.o, n.translate(j.x, j.y), n.fill(Pt), n.restore();
  }), n.restore();
}
const Bu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", ss = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Fl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Cd = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Nu = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', Gn = (n, d, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Nu(n, 2400) + ' d="M' + n + " " + (d - o) + "L" + (n + m) + " " + (d - m) + "L" + (n + o) + " " + d + "L" + (n + m) + " " + (d + m) + "L" + n + " " + (d + o) + "L" + (n - m) + " " + (d + m) + "L" + (n - o) + " " + d + "L" + (n - m) + " " + (d - m) + 'Z"/>';
}, wc = ([n, d, o], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + d + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Pu = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Iu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), Hu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + d + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Fu(n, d, o, c) {
  const m = (b) => '<g filter="url(#' + c + '-sh)">' + b + "</g>";
  return n === "clear" ? d ? m(wc(o ? Fl.l : Fl.s, c)) + (o ? Gn(70, 20, 5.83, 1) + Gn(78.33, 41.67, 3.75, 0.8) + Gn(60, 71.67, 3.33, 0.6) : Gn(42, 12, 3.5, 1) + Gn(47, 25, 2.25, 0.8) + Gn(36, 43, 2, 0.6)) : m(Pu(c, o)) : n === "partly" ? m(d ? wc(o ? Fl.lp : Fl.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(Cd(o ? ss.lp : ss.sp, d ? "wbCloudLight" : "wbBright")) + (d ? o ? Gn(73.33, 16.67, 4.17, 0.9) : Gn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(Cd(o ? ss.lc : ss.s, d ? "wbCloudLight" : "wbBright")) + (d ? o ? Gn(15, 15, 3.75, 0.8) + Gn(76.67, 13.33, 2.92, 0.6) : Gn(9, 9, 2.25, 0.8) + Gn(46, 8, 1.75, 0.6) : "") : m(Cd(o ? ss.lr : ss.s, "wbCloudLight")) + (n === "rain" ? Iu(o) : Hu(o));
}
const Ou = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Wu(n, d, o, c) {
  let m = Bu(n);
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
], Ol = (n, d) => (qu[d % 8 * 8 + n % 8] + 0.5) / 64, ro = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], ja = (n, d, o) => [Math.round(n[0] + (d[0] - n[0]) * o), Math.round(n[1] + (d[1] - n[1]) * o), Math.round(n[2] + (d[2] - n[2]) * o)], Us = (n) => n < 0 ? 0 : n > 1 ? 1 : n, xc = (n, d) => {
  let o = n * 374761393 + d * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, Sr = [255, 255, 255], ln = ro("#26221e"), yc = ro("#0288d1"), ju = ro("#01579b"), Td = ro(un.cloudDay), Ld = ro(un.cloudNight), Wl = ro(un.dusk), Ad = ro(un.sunEdge), zu = ro(un.sun), Vu = 10, kc = 0.3, li = 56, xp = 21;
function Gu(n) {
  const d = Array.from({ length: xp }, () => new Array(li).fill(void 0)), o = (w, _, y) => {
    d[_][w] = y;
  }, c = ja(Wl, ln, 0.35), m = ja(ln, Sr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const _ = w < 2 ? li - 2 : li - 1;
    for (let y = 6 - w; y <= _; y++) o(y, w, w < 2 ? c : w === 6 ? m : ln);
  }
  const b = [Wl, Ad, Ld, ro(un.skyRainDay), ja(Wl, ln, 0.2), ja(n, ln, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, _) => {
    const y = 9 + _ * 6;
    for (let N = 0; N < w; N++) {
      const wt = b[(_ * 2 + N * 3) % b.length];
      for (let ct = y; ct < y + 5; ct++)
        o(ct, 7 + N * 2, ja(wt, ln, 0.12)), o(ct, 8 + N * 2, N === w - 1 ? ja(wt, Sr, 0.3) : wt);
      o(y + 5, 7 + N * 2, ln), o(y + 5, 8 + N * 2, ln);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, ln);
  o(5, 13, Ad);
  for (let w = 7; w <= 14; w++) for (let _ = 42; _ <= 51; _++) o(_, w, _ === 51 ? Ld : Td);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, ln), o(w, 9, ja(ln, Td, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? Ld : Td);
  for (let w = 15; w <= 18; w++) for (let _ = 46; _ <= 49; _++) o(_, w, w === 18 ? ln : w === 16 ? Ad : Wl);
  for (let w = 15; w <= 19; w++) o(44, w, ln);
  return o(44, 20, zu), d;
}
function Uu(n, d, o, c) {
  const m = Math.max(1, Math.round(n)), b = Math.max(1, Math.round(d)), w = new Uint8ClampedArray(m * b * 4), _ = ro(c.skyClearDay), y = ro(c.skyFogDay), N = Gu(_), wt = Math.round(b * 0.55), ct = Us(1 - Math.log(o / kc) / Math.log(Vu / kc)), U = ja(_, y, ct), X = (O) => Us((O - 0.1) / 0.9), ot = Us((1 - Math.exp(-2 / o) - 0.2) / 0.8), K = Math.round(m / 2 - li / 2), V = wt + 3;
  for (let O = 0; O < b; O++) {
    const ut = V - 1 - O, rt = O - V;
    for (let ht = 0; ht < m; ht++) {
      const et = ht - K;
      let tt, S;
      const at = ut >= 0 && ut < xp && et >= 0 && et < li ? N[ut][et] : void 0;
      if (at)
        tt = at, S = ot;
      else if (ut >= 0 && ut <= 1 && et >= 4 - ut && et <= 5 - ut)
        tt = ja(Sr, yc, 0.15), S = ot;
      else if (O < wt) {
        const vt = Us(((O + 0.5) / wt - 0.15) / 0.85) * 3, j = Math.min(3, Math.floor(vt + Ol(ht + 2, O + 5)));
        tt = ja(U, Sr, j * 0.1), S = ct * 0.95;
      } else {
        const vt = (O - wt + 0.5) / (b - wt), j = Math.min(1.5, 6e-3 / (vt * vt)), jt = Us(vt * 1.4) * 3, k = Math.min(3, Math.floor(jt + Ol(ht + 1, O + 6)));
        tt = ja(yc, ju, k / 3);
        const D = 1 + Math.round(vt * 7), L = Math.floor(ht / (D * 3)), P = 0.06 + 0.16 * vt, ft = ht % (D * 3) < D;
        ft && xc(L, O) < P ? tt = ja(tt, Sr, 0.18 + 0.1 * (1 - vt)) : ft && vt > 0.5 && xc(L, O - 1) < P && (tt = ja(tt, ln, 0.12)), S = X(1 - Math.exp(-j / o)), rt === 0 && et >= 3 && et <= 8 ? (tt = ja(tt, Sr, et < 6 ? 0.8 : 0.45), S = ot) : rt >= 0 && rt <= 2 && et >= li && et < li + 40 ? ((1 - (et - li) / 40) * (rt === 1 ? 0.9 : 0.5) > Ol(ht, O + 3) && (tt = ja(tt, Sr, 0.5)), S = ot) : rt === 0 && et >= 6 && et < li && (tt = ja(tt, ln, et % 2 === 0 ? 0.35 : 0.2), S = ot);
      }
      const Pt = S > Ol(ht, O) ? y : tt, G = (O * m + ht) * 4;
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
  const o = n ? Yu[String(n).toUpperCase()] : void 0;
  if (!o || !(d > 0)) return;
  const c = (b) => Math.abs(Math.log(b[2] / d)), m = o.reduce((b, w) => c(w) < c(b) ? w : b);
  return c(m) <= Math.log(Zu) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const $u = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, Xu = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", io = 6e4, Pe = 36e5, Do = 864e5, Ks = 1440, Ju = 6, Qu = 10 * io, Mc = 3, tf = 3, ql = { day: [6, 22], waking: [7, 23], all: [0, 24] }, ef = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], af = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Sc = (n, d, o, c) => '<circle cx="' + n + '" cy="' + d + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const b = Math.cos(m * Math.PI / 180), w = Math.sin(m * Math.PI / 180), _ = o + 2, y = o + 2 + c;
  return "M" + (n + b * _).toFixed(2) + " " + (d + w * _).toFixed(2) + "L" + (n + b * y).toFixed(2) + " " + (d + w * y).toFixed(2);
}).join("") + '"/>', oi = (n) => '<path d="' + af + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ii = (n) => '<path d="' + n + '"/>', Cc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function nf(n, d) {
  const o = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Cc : Sc(12, 12, 4, 2.5);
    case "clear-night":
      return Cc;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Sc(7.5, 7.5, 2.6, 1.4)) + oi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return oi();
    case "fog":
      return ii("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return oi(o) + ii("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return oi(o) + ii("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return oi(o) + ii("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return oi(o) + ii("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return oi(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return oi(o) + ii("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return oi(o) + ii("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ii("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ii("M12 8v5M12 16h.01");
  }
}
const _d = (n, d) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + nf(n, d) + "</svg>", of = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), rf = 30 * io, sf = 7, lf = 3, Tc = 1, df = io, cf = 15 * io, pf = 5, ba = {
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
}, ff = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], hf = Object.keys(Ut.phases), jl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, yp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], zl = 100, Lc = "µg/m³", gf = "weather_alerts.air_quality_pollen", Jl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], vf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, bf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], wf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, xf = { daily: 1, hourly: 2 }, Ot = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Fa = (n, d) => n.replace(/\{(\w+)\}/g, (o, c) => d[c] ?? ""), cs = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Ac = /* @__PURE__ */ new Map();
function yf(n) {
  let d = Ac.get(n);
  if (d === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), m = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), c.append(m), document.body.append(c);
    const b = m.getBBox();
    c.remove();
    const w = Math.max(b.width, b.height), _ = w ? 26 * 24 / w : 0, y = _ / 24;
    d = w ? "width:" + _.toFixed(2) + "px;height:" + _.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * y).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * y).toFixed(2) + "px" : "", Ac.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : cs(n);
}
const kf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ve = (n) => n != null && n !== "" && Number.isFinite(Number(n)), _c = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), Ed = /* @__PURE__ */ new WeakMap(), Mf = (n) => {
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
function pa(n, d, o) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (d == null ? void 0 : d.number_format) === "none", b = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : Mf(d), _ = JSON.stringify([w, b]);
  let y = _c.get(_);
  if (!y) {
    try {
      y = new Intl.NumberFormat(w, b);
    } catch {
      y = new Intl.NumberFormat(void 0, b);
    }
    _c.set(_, y);
  }
  return y.format(c);
}
const tc = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function Sf(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Ed.has(n)) return Ed.get(n);
  const d = n.time_format, o = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return Ed.set(n, o), o;
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
const _o = (n, d) => Mp(tc(d), { hour: "numeric", minute: "2-digit", hourCycle: Sf(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: kp(d) }).format(n), Dc = (n, d) => Mp(tc(d), { weekday: "short", timeZone: kp(d) }).format(n), Cf = (n, d) => n.toLocaleDateString(tc(d), { weekday: "narrow" }), aa = (n, d) => Ve(d) ? pa(Math.round(Number(d)), n.locale) + "°" : "–", ps = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, ls = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), Cn = Math.PI / 180, Tf = 2440588, Lf = 2451545, Ql = Cn * 23.4397, Af = 149598e3, _f = -0.833 * Cn, Ef = 0.133 * Cn, Rc = 5 * io, Sp = (n) => n.getTime() / Do - 0.5 + Tf - Lf, Cp = (n, d) => Math.atan2(Math.sin(n) * Math.cos(Ql) - Math.tan(d) * Math.sin(Ql), Math.cos(n)), Tp = (n, d) => Math.asin(Math.sin(d) * Math.cos(Ql) + Math.cos(d) * Math.sin(Ql) * Math.sin(n)), Df = (n, d) => Cn * (280.16 + 360.9856235 * n) - d, Rf = (n, d, o) => Math.asin(Math.sin(d) * Math.sin(o) + Math.cos(d) * Math.cos(o) * Math.cos(n));
function Lp(n) {
  const d = Cn * (357.5291 + 0.98560028 * n), o = Cn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), c = d + o + Cn * 102.9372 + Math.PI;
  return { ra: Cp(c, 0), dec: Tp(c, 0), dist: Af };
}
function Ap(n) {
  const d = Cn * (218.316 + 13.176396 * n), o = Cn * (134.963 + 13.064993 * n), c = Cn * (93.272 + 13.22935 * n), m = d + Cn * 6.289 * Math.sin(o), b = Cn * 5.128 * Math.sin(c);
  return { ra: Cp(m, b), dec: Tp(m, b), dist: 385001 - 20905 * Math.cos(o) };
}
const _p = (n, d, o, c) => {
  const m = Sp(d), b = n(m);
  return Rf(Df(m, Cn * -c) - b.ra, Cn * o, b.dec);
}, ec = (n, d, o) => _p(Lp, n, d, o), Bf = (n, d, o) => _p(Ap, n, d, o);
function Ep(n, d, o, c) {
  const m = {};
  let b = o.getTime(), w = n(o) - d;
  for (let _ = b + Rc; _ <= c.getTime(); _ += Rc) {
    const y = n(new Date(_)) - d;
    if (w < 0 != y < 0) {
      const N = new Date(b + (_ - b) * w / (w - y));
      y > 0 ? m.rise ?? (m.rise = N) : m.set ?? (m.set = N);
    }
    b = _, w = y;
  }
  return m;
}
const Dp = (n) => {
  const d = ps(n);
  return [d, new Date(d.getTime() + Do)];
}, Nf = (n, d, o) => Ep((c) => ec(c, d, o), _f, ...Dp(n)), Pf = (n, d, o) => Ep((c) => Bf(c, d, o), Ef, ...Dp(n));
function If(n) {
  const d = Sp(n), o = Lp(d), c = Ap(d), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), b = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (w < 0 ? -1 : 1) / Math.PI };
}
const Hf = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, td = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && Ve(d.latitude) && Ve(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function Dd(n, d) {
  var N, wt, ct;
  const o = td(n), c = o ? Nf(d, o.lat, o.lon) : {}, m = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], b = ps(d).getTime(), w = (U) => {
    const X = U ? new Date(U) : null;
    return X && Number.isFinite(X.getTime()) && ps(X).getTime() === b ? X : null;
  }, _ = w((wt = m == null ? void 0 : m.attributes) == null ? void 0 : wt.next_rising), y = w((ct = m == null ? void 0 : m.attributes) == null ? void 0 : ct.next_setting);
  return _ && (c.rise = _), y && (c.set = y), c;
}
function Ff(n) {
  var c;
  const d = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const o = td(n);
  return o ? ec(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Cr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", us = (n, d) => {
  var c;
  const o = (c = n.entities) == null ? void 0 : c[d];
  return !o || !o.hidden && !o.entity_category;
}, Mn = (n, d, o) => {
  var c, m;
  for (const b of d) {
    const w = (c = n.states) == null ? void 0 : c[b];
    if (!Cr(w)) continue;
    const _ = (m = w.attributes) == null ? void 0 : m[o];
    if (_ != null && _ !== "") return { stateObj: w, value: _ };
  }
}, Of = (n, d) => d.map((o) => {
  var c;
  return (c = n.states) == null ? void 0 : c[o];
}).find(Cr), Wf = (n, d, o) => d.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return Cr(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & xf[o]);
});
function Mr(n, d, o) {
  var b, w, _, y;
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
      return m.temperature_unit || ((y = (_ = n.config) == null ? void 0 : _.unit_system) == null ? void 0 : y.temperature) || "";
  }
}
function Kl(n, d, o, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...b] = n.formatEntityAttributeValueToParts(d, o, c).map((w) => w.value);
      return { number: m, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: pa(c, n.locale), unit: Mr(n, d, o) };
}
function qf(n, d, o, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, o, c);
  } catch {
  }
  const m = Kl(n, d, o, c);
  return (m.number + " " + m.unit).trim();
}
function kr(n, d) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const o = (c = d.attributes) == null ? void 0 : c.unit_of_measurement;
  return uf[d.state] || (o && Ve(d.state) ? pa(d.state, n.locale) + " " + o : d.state);
}
function Ys(n, d) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((o = d.attributes) == null ? void 0 : o.friendly_name) || d.entity_id;
}
const jf = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Bc = (n) => yp.find(([, d]) => n <= d)[0];
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
}), Rd = (n) => Object.values(n.states || {}).filter((d) => {
  var o, c;
  return d.entity_id.startsWith("sensor.") && ((o = d.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = d.attributes) == null ? void 0 : c.state_class) ?? "") && us(n, d.entity_id);
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
const Rp = (n, d, o) => {
  var m, b, w;
  const c = (b = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : b.platform;
  return !!c && !!((w = d[c]) != null && w.includes(gf));
};
function Gf(n, d) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && Jl.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && us(n, c.entity_id) && Rp(n, d, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), Jl.map((c) => o.get(c)).filter(Boolean);
}
const Uf = (n, d) => Object.values(n.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && us(n, o.entity_id) && Rp(n, d, o.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Ic(n, d, o) {
  const c = Math.max(d - n, 1e-6), m = o[o.length - 1], b = o.find((N) => c / N <= 4) ?? m * Math.ceil(c / (4 * m)), w = Math.floor(n / b) * b;
  let _ = Math.ceil(d / b) * b;
  _ === w && (_ = w + b);
  const y = [];
  for (let N = w; N <= _ + b / 1e3; N += b) y.push(N);
  return { min: w, max: _, ticks: y };
}
const Zs = (n, d, o) => {
  const c = (w) => [1, 3, 5].map((_) => parseInt(w.slice(_, _ + 2), 16)), m = c(n), b = c(d);
  return "rgb(" + m.map((w, _) => Math.round(w + (b[_] - w) * o)).join(", ") + ")";
}, Yf = (n, d, o, c) => {
  const m = o * Math.abs(1 - 2 * c), b = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (d + o) + " A " + m + " " + o + " 0 0 " + b + " " + n + " " + (d - o) + " Z";
}, Sn = ({ icon: n, name: d, sub: o, visual: c, double: m, backdrop: b, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + yf(n) + '</div><div class="wbText"><span class="wbName">' + Ot(d) + "</span>" + (o ? '<span class="wbSub">' + Ot(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Pi = (n, d) => '<div class="wbValue"><span class="wbNum">' + Ot(n) + "</span>" + (d ? '<span class="wbUnitV">' + Ot(d) + "</span>" : "") + "</div>";
function Zf(n) {
  const d = n.max - n.min || 1, o = (_) => 100 - (Math.min(n.max, Math.max(n.min, _)) - n.min) / d * 100, c = (_) => _ / Ks * 100 + "%", m = (_) => _.map((y) => y.t + "," + o(y.v)).join(" "), b = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((_) => '<span class="wbDcSunMark" style="left:' + c(_.t) + '">' + cs(_.rise ? ba.sunsetUp : ba.sunsetDown) + Ot(_.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((_) => '<span style="top:' + o(_) + '%">' + Ot(n.format(_)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ks + ' 100" preserveAspectRatio="none">' + n.night.map(([_, y]) => '<rect class="wbDcNight" x="' + _ + '" y="0" width="' + (y - _) + '" height="100"></rect>').join("") + n.ticks.map((_) => '<line class="wbDcGrid" x1="0" x2="' + Ks + '" y1="' + o(_) + '" y2="' + o(_) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((_) => '<line class="wbDcSunLine" x1="' + _.t + '" x2="' + _.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + m(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((_) => _.v > 0).map((_) => '<i class="wbDcBar" style="left:' + c(_.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(_.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + Ot(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Ot(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((_) => '<span class="' + (_.minor ? "wbMinor" : "") + '" style="left:' + c(_.t) + '">' + Ot(_.label) + "</span>").join("") + "</div></div>", w;
}
function Kf(n, d) {
  const w = n.map((V) => V.value), _ = Math.min(...w), y = Math.max(...w), N = y - _ || 1, wt = (V) => V / (n.length - 1) * 300, ct = (V) => 18 + (1 - (V - _) / N) * 84, U = n.map((V, O) => wt(O) + "," + ct(V.value)).join(" "), X = w.indexOf(y), ot = w.indexOf(_), K = (V) => V === 0 ? "start" : V === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + wt(X) + '" y="' + (ct(y) - 6) + '" text-anchor="' + K(X) + '">' + Ot(d(y)) + '</text><text x="' + wt(ot) + '" y="' + (ct(_) + 14) + '" text-anchor="' + K(ot) + '">' + Ot(d(_)) + '</text><text x="0" y="120" text-anchor="start">' + Ot(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Ot(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, d) {
  const b = n.map((ct) => ct.value).concat([]), w = Math.min(...b) - 2, _ = Math.max(...b) + 1, y = _ - w || 1, N = 300 / n.length, wt = (ct) => (1 - (ct - w) / y) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ct, U) => '<rect class="wbBar' + (ct.now ? " wbNowBar" : "") + '" x="' + (U * N + N * 0.2) + '" y="' + wt(ct.value) + '" width="' + N * 0.6 + '" height="' + (104 - wt(ct.value)) + '" rx="6"></rect><text x="' + (U * N + N / 2) + '" y="120" text-anchor="middle">' + Ot(ct.label) + "</text>").join("") + "</svg>";
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
function Fc(n, { getHass: d, entityId: o, style: c = "bitmap", motion: m = !0, cards: b, onOpen: w, hoursWindow: _ } = {}) {
  var mi, mn;
  const y = "wb" + ++th + "-", N = document.createElement("div");
  N.className = "wb", N.dataset.style = c;
  const wt = document.createElement("div");
  wt.className = "wbBento", N.appendChild(wt), n.replaceChildren(N);
  const ct = ["aq_tile", "pollen_tile", "radar_tile"], U = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...ct].filter((x) => !b || b.includes(x)), X = { current: "wide", hourly: "wide", compared_to_average: "double" }, ot = {};
  U.forEach((x) => {
    const C = document.createElement("div");
    C.className = "wbItem", C.dataset.card = x, C.dataset.size = X[x] || "tile", C.hidden = !0, wt.appendChild(C), ot[x] = { el: C, html: null };
  });
  let K = !1, V = null, O = 0, ut = -1, rt = !1, ht = null;
  const et = "homecore-next-view", S = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(et);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, at = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Pt = /* @__PURE__ */ new Date(), G = /* @__PURE__ */ new Date();
  const vt = {}, j = {}, jt = {}, k = (x) => {
    var C;
    return ((C = jt[x]) == null ? void 0 : C.forecast) ?? [];
  }, D = (x, C) => {
    var A;
    return jt[C] ? (A = x.states) == null ? void 0 : A[jt[C].entityId] : void 0;
  };
  function L(x) {
    const C = j[x];
    C && (C.unsub.then((A) => {
      typeof A == "function" && A();
    }).catch(() => {
    }), delete j[x]), jt[x] && delete jt[x];
  }
  function P(x, C, A) {
    var Y;
    if (typeof ((Y = x.connection) == null ? void 0 : Y.subscribeMessage) != "function") return;
    const I = { entityId: A };
    try {
      I.unsub = Promise.resolve(x.connection.subscribeMessage((J) => {
        K || j[C] !== I || (J != null && J.forecast ? jt[C] = { entityId: A, forecast: J.forecast } : delete jt[C], Nn());
      }, { type: "weather/subscribe_forecast", forecast_type: C, entity_id: A }));
    } catch (J) {
      I.unsub = Promise.reject(J);
    }
    I.unsub.catch(() => {
      j[C] === I && delete j[C];
    }), j[C] = I;
  }
  function ft(x, C) {
    var A;
    for (const I of ["daily", "hourly"]) {
      const Y = Wf(x, C, I);
      ((A = j[I]) == null ? void 0 : A.entityId) !== (Y == null ? void 0 : Y.entity_id) && (L(I), Y && P(x, I, Y.entity_id));
    }
  }
  const dt = (x, C, A, I = !1) => x.callWS({
    type: "history/history_during_period",
    start_time: A.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [C],
    minimal_response: I,
    no_attributes: I,
    significant_changes_only: !1
  });
  async function W(x, C) {
    var pt, xt, yt;
    const A = Mn(x, C, "pressure");
    if (!A) return;
    const I = A.stateObj.entity_id, Y = await dt(x, I, new Date(Date.now() - 3 * Pe)), J = (yt = (xt = (pt = Y == null ? void 0 : Y[I]) == null ? void 0 : pt.find((It) => {
      var _t;
      return typeof ((_t = It.a) == null ? void 0 : _t.pressure) == "number";
    })) == null ? void 0 : xt.a) == null ? void 0 : yt.pressure;
    at.pressureHistory = typeof J == "number" ? { entityId: I, value: J } : void 0;
  }
  async function gt(x, C) {
    var xt;
    const A = Mn(x, C, "temperature");
    if (!A) return;
    const I = A.stateObj.entity_id, Y = ps(/* @__PURE__ */ new Date()), J = await dt(x, I, new Date(Y.getTime() - sf * Do)), pt = /* @__PURE__ */ new Map();
    for (const yt of (J == null ? void 0 : J[I]) ?? []) {
      const It = (xt = yt.a) == null ? void 0 : xt.temperature, _t = new Date((yt.lc ?? yt.lu) * 1e3);
      if (typeof It != "number" || _t >= Y) continue;
      const St = _t.toDateString();
      pt.set(St, Math.max(pt.get(St) ?? -1 / 0, It));
    }
    at.temperatureHistory = { entityId: I, dailyHighs: [...pt.values()], days: [...pt.entries()].map(([yt, It]) => ({ date: new Date(yt), high: It })) };
  }
  async function Mt(x) {
    const C = Rd(x);
    if (!C) return;
    const A = await x.callWS({ type: "recorder/statistic_during_period", statistic_id: C, rolling_window: { duration: { hours: 24 } } });
    at.rain = { entityId: C, change: (A == null ? void 0 : A.change) ?? void 0 };
  }
  function Jt() {
    const x = d == null ? void 0 : d();
    if (!x || K || typeof x.callWS != "function") return;
    const C = so(x);
    at.lastFetch = Date.now(), [W(x, C), gt(x, C), Mt(x)].forEach((A) => A.then(() => Nn(), () => {
    }));
  }
  async function ue() {
    const x = d == null ? void 0 : d();
    if (!x) return;
    const C = Mn(x, so(x), "temperature");
    if (!C) return;
    const A = C.stateObj.entity_id, I = ps(/* @__PURE__ */ new Date());
    try {
      const Y = await dt(x, A, I), J = (pt) => ((Y == null ? void 0 : Y[A]) ?? []).map((xt) => {
        var yt;
        return { time: xt.lu * 1e3, value: (yt = xt.a) == null ? void 0 : yt[pt] };
      }).filter((xt) => typeof xt.value == "number");
      at.todayHistory = { day: I.toDateString(), fetched: Date.now(), temperature: J("temperature"), humidity: J("humidity") }, Nn();
    } catch {
    }
  }
  async function ta(x) {
    const C = d == null ? void 0 : d();
    if (C)
      try {
        const A = await dt(C, x, new Date(Date.now() - 24 * Pe), !0), I = ((A == null ? void 0 : A[x]) ?? []).filter((J) => Ve(J.s)), Y = Math.max(1, Math.ceil(I.length / 48));
        at.aqHistory = { entityId: x, points: I.filter((J, pt) => pt % Y === 0).map((J) => ({ label: _o(new Date(J.lu * 1e3), C), value: Number(J.s) })) }, Nn();
      } catch {
      }
  }
  function Se(x) {
    at.categories === void 0 && (at.categories = null, Promise.resolve().then(() => x.callWS({ type: "integration/descriptions" })).then((C) => {
      at.categories = Vf(C);
    }, () => {
      at.categories = {};
    }).then(() => Nn()));
  }
  function so(x) {
    var A;
    const C = Object.keys(x.states || {}).filter((I) => I.startsWith("weather.") && us(x, I)).sort();
    return o && ((A = x.states) != null && A[o]) ? [o, ...C.filter((I) => I !== o)] : C;
  }
  const Na = (x) => at.categories ? { air: Gf(x, at.categories), pollen: Uf(x, at.categories) } : { air: [], pollen: [] };
  function Et(x, C, A, I) {
    if (c === "line") return '<span class="wbWx wbS' + C + ' wbLineIcon" aria-hidden="true">' + _d(x, A || x === "clear-night") + "</span>";
    if (c === "smooth") {
      const Y = Wu(x, C === 90, A, y + "g-" + I);
      return '<span class="wbWx wbS' + C + " wb" + Y.k[0].toUpperCase() + Y.k.slice(1) + (Y.night ? " wbNight" : "") + '" aria-hidden="true">' + Y.svg + "</span>";
    }
    return '<span class="wbWx wbS' + C + '" aria-hidden="true"><canvas data-wb-wx="' + Ot(ed(x, A)) + '" data-size="' + C + '"></canvas></span>';
  }
  const ye = () => k("daily").filter((x) => x.templow != null).slice(0, Ju);
  function Ze(x, C) {
    const A = new Date(C.datetime), I = /* @__PURE__ */ new Date();
    return ls(A, I) ? Ut.today : ls(A, new Date(I.getTime() + Do)) ? Ut.tomorrow : Dc(A, x);
  }
  const we = (x, C, A) => A === 0 ? Ze(x, C) : Dc(new Date(C.datetime), x);
  function qe(x, C) {
    var _t, St, Yt, Dt;
    const A = Of(x, C);
    if (!A) return "";
    const I = ye(), Y = S.openDay !== void 0 ? I[S.openDay] : void 0, J = Mn(x, C, "temperature"), pt = I[0], xt = pt && ls(new Date(pt.datetime), /* @__PURE__ */ new Date()), yt = ((St = (_t = x.config) == null ? void 0 : _t.unit_system) == null ? void 0 : St.temperature) || ((Yt = A.attributes) == null ? void 0 : Yt.temperature_unit) || "";
    let It = '<div class="wbCard wbWeather' + (Y ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Y ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ot(Ut.openPage) + '">' : '<div class="wbCurrent">') + Et(A.state, 90, Ff(x), "now") + '<div class="wbTempBlock">' + (J && Ve(J.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ot(pa(Math.round(Number(J.value)), x.locale)) + '</span><span class="wbUnit">' + Ot(yt) + "</span></div>" : "") + '<div class="wbPlace">' + Ot(((Dt = x.config) == null ? void 0 : Dt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ot(kr(x, A)) + "</div>" + (xt && pt.templow != null ? '<div class="wbRange">' + Ot(Fa(Ut.range, { high: aa(x, pt.temperature), low: aa(x, pt.templow) })) + "</div>" : "") + "</div></div>";
    if (It += Qt(x) + Oi(x), I.length) {
      const Wt = xt && J && Ve(J.value) ? aa(x, J.value) : "", Kt = (Zt, Tt, ee) => Zt === 0 && Wt ? '<span class="wbAsDay">' + Ot(Tt) + '</span><span class="wbAsNow">' + Ot(ee) + "</span>" : Ot(Tt);
      It += '<div class="wbColumns" role="list">' + I.map((Zt, Tt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="col-' + Tt + '"><span class="wbDay">' + Kt(Tt, we(x, Zt, Tt), Ut.now) + "</span>" + Et(Zt.condition ?? "cloudy", 60, !1, "col" + Tt) + '<span class="wbTemps"><span class="wbHi">' + Kt(Tt, aa(x, Zt.temperature), Wt) + '</span><span class="wbLo">' + Ot(aa(x, Zt.templow)) + "</span></span></button>").join("") + "</div>", It += '<div class="wbHalves" role="list">' + I.map((Zt, Tt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="half-' + Tt + '">' + Et(Zt.condition ?? "cloudy", 40, !1, "half" + Tt) + '<span class="wbText"><span class="wbName">' + Ot(Ze(x, Zt)) + '</span><span class="wbSub">' + Ot(Fa(Ut.highLow, { high: aa(x, Zt.temperature), low: aa(x, Zt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return It + "</div>" + (Y ? za(x, C, Y) : "") + "</div>";
  }
  const Tr = {
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
  function ne(x) {
    const C = Date.now(), A = k("hourly").filter((St) => new Date(St.datetime).getTime() > C - Pe).slice(0, 13);
    if (A.length < 2) return "";
    const I = (St) => _o(new Date(St.datetime), x), Y = (St) => Tr[St.condition] || "", J = (St) => xe[St.condition] || St.condition;
    let pt = Y(A[0]);
    if (!pt) return "";
    let xt = A[0], yt = 0;
    for (const St of A.slice(1))
      yt === 2 || J(St) === J(xt) || !Y(St) || (pt += (yt ? " and " : ", ") + Y(St) + " from " + I(St), xt = St, yt++);
    const It = Number(A[0].temperature), _t = A.filter((St) => Ve(St.temperature));
    if (Ve(It) && _t.length) {
      const St = _t.reduce((Dt, Wt) => Number(Wt.temperature) < Number(Dt.temperature) ? Wt : Dt), Yt = _t.reduce((Dt, Wt) => Number(Wt.temperature) > Number(Dt.temperature) ? Wt : Dt);
      It - Number(St.temperature) >= 3 ? pt += ", down to " + aa(x, St.temperature) + " by " + I(St) : Number(Yt.temperature) - It >= 3 && (pt += ", up to " + aa(x, Yt.temperature) + " by " + I(Yt));
    }
    return pt[0].toUpperCase() + pt.slice(1) + ".";
  }
  const Qt = (x) => {
    const C = ne(x);
    return C ? '<div class="wbSummary"><p class="wbSummaryText">' + Ot(C) + "</p></div>" : "";
  };
  function Oi(x) {
    const [C, A] = ql[_ == null ? void 0 : _()] || ql.day, I = Date.now(), Y = k("hourly").filter((J) => {
      const pt = new Date(J.datetime), xt = pt.getHours();
      return pt.getTime() > I - Pe / 2 && xt >= C && xt < A && Ve(J.temperature);
    }).slice(0, 4);
    return Y.length ? '<div class="wbNextHours" role="list">' + Y.map((J, pt) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Ot(_o(new Date(J.datetime), x)) + "</span>" + Et(J.condition ?? "cloudy", 40, J.is_daytime === !1, "hr" + pt) + '<span class="wbHourTemp">' + Ot(aa(x, J.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function ci(x) {
    const C = x.getTime(), A = Date.now() - Pe;
    return k("hourly").filter((I) => {
      const Y = new Date(I.datetime).getTime();
      return Y >= C && Y < C + Do && Y > A;
    });
  }
  function Wi(x) {
    if (!x.length) return ["temperature"];
    const C = ["temperature"];
    return x.some((A) => A.precipitation != null || A.precipitation_probability != null) && C.push("precipitation"), x.some((A) => A.humidity != null) && C.push("humidity"), C;
  }
  function za(x, C, A) {
    const I = ps(new Date(A.datetime)), Y = ci(I), J = Wi(Y), pt = J.includes(S.dayMode) ? S.dayMode : "temperature", xt = (yt) => yt === "humidity" ? Ut.humidity : Ut.modes[yt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Et(A.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ot(Ze(x, A)) + '</span><span class="wbSub">' + Ot(Fa(Ut.highLow, { high: aa(x, A.temperature), low: aa(x, A.templow) })) + '</span></div><button class="wbBack" title="' + Ot(Ut.back) + '" data-wb="close-day" data-wb-focus="back-day">' + cs(ba.back) + "</button></div>" + (J.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + J.map((yt) => '<button aria-pressed="' + (yt === pt) + '" data-wb="day-mode" data-mode="' + yt + '" data-wb-focus="day-mode-' + yt + '">' + Ot(xt(yt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(me(x, C, I, Y, pt)) + "</div></div>";
  }
  function me(x, C, A, I, Y) {
    var Ui;
    const J = A.getTime(), pt = Date.now(), xt = ls(A, /* @__PURE__ */ new Date()), yt = (le) => (le - J) / io, It = (le) => _o(new Date(le), x), _t = (le) => new Date(le.datetime).getTime(), St = [0, 3, 6, 9, 12, 15, 18, 21].map((le) => ({ t: le * 60, label: It(J + le * Pe), minor: le % 6 !== 0 })), { rise: Yt, set: Dt } = Dd(x, A), Wt = [], Kt = [];
    Yt && (Wt.push({ t: yt(Yt.getTime()), label: It(Yt.getTime()), rise: !0 }), Kt.push([0, yt(Yt.getTime())])), Dt && (Wt.push({ t: yt(Dt.getTime()), label: It(Dt.getTime()), rise: !1 }), Kt.push([yt(Dt.getTime()), Ks]));
    const Zt = td(x);
    !Yt && !Dt && Zt && ec(new Date(J + Do / 2), Zt.lat, Zt.lon) < 0 && Kt.push([0, Ks]);
    const Tt = xt ? yt(pt) : void 0, ee = { hours: St, sun: Wt, night: Kt };
    if (!I.length && !xt) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ut.noHourly };
    if (Y === "precipitation") {
      const le = I.some((xa) => xa.precipitation_probability != null), Oa = I.map((xa) => ({ t: yt(_t(xa)), v: Number((le ? xa.precipitation_probability : xa.precipitation) ?? 0) })), Wa = Mr(x, D(x, "hourly"), "precipitation"), bn = Math.max(0, ...Oa.map((xa) => xa.v)), uo = le ? 100 : Ic(0, Math.max(bn, 1), [0.5, 1, 2, 5, 10]).max, Ar = (xa) => le ? pa(xa, x.locale) + "%" : pa(xa, x.locale, { maximumFractionDigits: 1 }) + " " + Wa, fo = Oa.find((xa) => xa.v === bn);
      return {
        ...ee,
        kind: "bars",
        points: Oa,
        min: 0,
        max: uo,
        ticks: [0, uo / 2, uo],
        format: Ar,
        now: Tt !== void 0 ? { t: Tt, v: 0 } : void 0,
        peak: fo && bn > 0 ? { t: fo.t + 30, v: fo.v, label: Ar(fo.v) } : void 0,
        note: bn > 0 ? void 0 : Ut.noRain
      };
    }
    const re = Y === "humidity" ? "humidity" : "temperature", He = I.filter((le) => le[re] != null && (!xt || _t(le) >= pt)).map((le) => ({ t: yt(_t(le)), v: Number(le[re]) }));
    let Ht, Re = [];
    if (Tt !== void 0) {
      const le = Mn(x, C, re);
      le && Ve(le.value) && (Ht = { t: Tt, v: Number(le.value) }, He.unshift(Ht)), Re = (((Ui = at.todayHistory) == null ? void 0 : Ui.day) === A.toDateString() ? at.todayHistory[re] : []).filter((Wa) => Wa.time <= pt).map((Wa) => ({ t: Math.max(0, yt(Wa.time)), v: Wa.value })), Ht && Re.length && Re.push(Ht);
    }
    const Ge = [...Re, ...He];
    if (!Ge.length) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ut.noHourly };
    const gn = Ge.map((le) => le.v), vn = Ic(Math.min(...gn), Math.max(...gn), re === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    re === "humidity" && (vn.min = Math.max(0, vn.min), vn.max = Math.min(100, vn.max), vn.ticks = vn.ticks.filter((le) => le >= 0 && le <= 100));
    const Ho = re === "humidity" ? (le) => pa(le, x.locale) + "%" : (le) => aa(x, le), po = re === "temperature" ? Ge.reduce((le, Oa) => Oa.v > le.v ? Oa : le) : void 0;
    return { ...ee, kind: "line", points: He, past: Re, ...vn, format: Ho, now: Ht, peak: po ? { ...po, label: Ho(po.v) } : void 0 };
  }
  function na(x) {
    const C = ["temperature"];
    return x.some((A) => A.precipitation_probability != null || A.precipitation != null) && C.push("precipitation"), x.some((A) => A.wind_speed != null) && C.push("wind"), C;
  }
  function wa(x, C, A = Mc) {
    var J, pt;
    const I = k("daily"), Y = [];
    for (let xt = 0; xt < A; xt++) for (const yt of [!1, !0]) {
      const It = x.getTime() + (xt * 24 + (yt ? 12 : 0)) * Pe, _t = It + 12 * Pe, St = {};
      C.forEach((Dt) => {
        const Wt = new Date(Dt.datetime).getTime();
        Dt.condition && Wt >= It && Wt < _t && (St[Dt.condition] = (St[Dt.condition] ?? 0) + (of.has(Dt.condition) ? 2 : 1));
      });
      let Yt = (J = Object.entries(St).sort((Dt, Wt) => Wt[1] - Dt[1])[0]) == null ? void 0 : J[0];
      if (!Yt) {
        const Dt = new Date(It).toDateString();
        Yt = ((pt = I.find((Wt) => new Date(Wt.datetime).toDateString() === Dt)) == null ? void 0 : pt.condition) ?? "cloudy";
      }
      Y.push({ cond: yt && Yt === "sunny" ? "clear-night" : Yt, night: yt });
    }
    return Y;
  }
  function pi(x, C, A) {
    const I = D(x, "hourly"), Y = C.precipitation_probability != null ? pa(C.precipitation_probability, x.locale) + "%" : "", J = C.precipitation ? pa(C.precipitation, x.locale) + " " + Mr(x, I, "precipitation") : "";
    switch (A) {
      case "precipitation":
        return Y ? [Y, J] : [J || "–", ""];
      case "wind":
        return C.wind_speed != null ? [pa(Math.round(C.wind_speed), x.locale), Mr(x, I, "wind_speed")] : ["–", ""];
      default:
        return [aa(x, C.temperature), (C.precipitation_probability ?? 0) >= 20 ? Y : ""];
    }
  }
  function qi(x, C, A) {
    const [I, Y] = ql[_ == null ? void 0 : _()] || ql.day, J = [];
    for (let pt = 0; pt < 4 && J.length < 3; pt++) {
      const xt = /* @__PURE__ */ new Date();
      xt.setHours(0, 0, 0, 0), xt.setDate(xt.getDate() + pt);
      const yt = new Date(xt);
      yt.setHours(Y, 0, 0, 0), xt.setHours(I, 0, 0, 0), !(yt.getTime() <= A || !C.some((It) => {
        const _t = new Date(It.datetime).getTime();
        return _t >= xt.getTime() && _t <= yt.getTime();
      })) && J.push({ a: xt.getTime(), b: yt.getTime(), label: Ze(x, { datetime: xt.toISOString() }) });
    }
    return J;
  }
  function $t(x, C, A, I, Y, J) {
    const pt = (A.b - C.a) / Pe, xt = (Tt) => ((Tt - C.a) / Pe).toFixed(3), yt = 80, It = 32, _t = [];
    for (const Tt = new Date(C.a - Do); Tt.getTime() < A.b + Do; Tt.setDate(Tt.getDate() + 1)) {
      const { rise: ee, set: re } = Dd(x, new Date(Tt));
      ee && re && _t.push({ rise: ee.getTime(), set: re.getTime() });
    }
    const St = (Tt, ee) => yt - (yt - It) * Math.sin(Math.PI * (ee - Tt.rise) / (Tt.set - Tt.rise)), Yt = (Tt) => !_t.some((ee) => Tt >= ee.rise && Tt <= ee.set);
    let Dt = "", Wt = "", Kt = "";
    _t.forEach((Tt, ee) => {
      const re = [];
      for (let Ht = Tt.rise; Ht <= Tt.set; Ht += 15 * io) re.push(xt(Ht) + "," + St(Tt, Ht).toFixed(2));
      re.push(xt(Tt.set) + "," + yt), Dt += '<polyline class="wbLineArc" points="' + re.join(" ") + '"/>';
      const He = _t[ee + 1];
      He && (Dt += '<rect class="wbLineNight" x="' + xt(Tt.set) + '" y="0" width="' + ((He.rise - Tt.set) / Pe).toFixed(3) + '" height="100"/>'), [[Tt.rise, "↑"], [Tt.set, "↓"]].forEach(([Ht, Re]) => {
        Ht < C.a || Ht > A.b || (Wt += '<line class="wbLineEdge" x1="' + xt(Ht) + '" x2="' + xt(Ht) + '" y1="0" y2="100"/>', Kt += '<span class="wbLineTime" style="left:' + J(Ht) + '">' + Re + " " + Ot(_o(new Date(Ht), x)) + "</span>");
      });
    });
    const Zt = _t.find((Tt) => Y >= Tt.rise && Y <= Tt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + pt + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Dt + Wt + '<line class="wbLineHorizon" x1="0" x2="' + pt + '" y1="' + yt + '" y2="' + yt + '"/></svg>' + Kt + (Zt ? '<span class="wbLineNow" style="left:' + J(Y) + ";top:" + St(Zt, Y) + '%">' + _d("sunny", !1) + "</span>" : "") + I.filter((Tt) => Tt.entry && !Tt.now).map((Tt) => '<span class="wbLineGlyph' + Tt.edge + '" style="left:' + J(Tt.t) + '">' + _d(Tt.entry.condition ?? "cloudy", Yt(Tt.t)) + "</span>").join("");
  }
  function Bt(x, C) {
    delete vt.hourly;
    const A = S.hourlyView === "bars" ? "bars" : "strip", I = '<div class="wbHeader"><h2 class="wbTitle">' + Ot(A === "bars" ? Ut.nextDays : Ut.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ot(Ut.showAs) + '">' + ["strip", "bars"].map((Ht) => '<button aria-pressed="' + (Ht === A) + '" data-wb="hourly-view" data-view="' + Ht + '" data-wb-focus="hourly-view-' + Ht + '">' + Ot(Ut.views[Ht]) + "</button>").join("") + "</div></div>";
    if (A === "bars") return Ee(x, C, I);
    const Y = k("hourly"), J = Math.floor(Date.now() / io) * io, pt = Y.filter((Ht) => new Date(Ht.datetime).getTime() > J - Pe);
    if (!pt.length) return "";
    const xt = na(pt), yt = xt.includes(S.hourlyMode) ? S.hourlyMode : "temperature", It = qi(x, Y, J);
    if (!It.length) return "";
    const _t = It[0], St = It[It.length - 1], Yt = (_t.b - _t.a) / Pe, Dt = (Ht) => "calc(var(--wb-u) * " + ((Ht - _t.a) / Pe).toFixed(3) + ")", Wt = new Date(_t.a);
    Wt.setHours(6, 0, 0, 0), Wt.getTime() > _t.a && Wt.setDate(Wt.getDate() - 1);
    const Kt = Math.ceil((St.b - Wt.getTime()) / Do);
    c !== "line" && (vt.hourly = { segs: wa(Wt, Y, Kt), seed: Wt.getDate(), columns: Kt });
    const Zt = (Ht) => Ht === _t.a ? " wbFirst" : Ht === St.b ? " wbLast" : "", Tt = [];
    for (let Ht = _t.a; Ht < St.b; ) {
      const Re = new Date(Ht);
      Re.setHours(24, 0, 0, 0);
      const Ge = Math.min(Re.getTime(), St.b);
      Tt.push({ a: Ht, b: Ge, label: Ze(x, { datetime: new Date(Ht).toISOString() }), page: It.find((gn) => gn.a >= Ht && gn.a < Ge) || It.find((gn) => gn.a < Ge && gn.b > Ht) }), Ht = Ge;
    }
    const ee = J > _t.a && J < St.b ? Math.floor((J - _t.a) / (2 * Pe)) * 2 : 0, re = [];
    for (let Ht = _t.a; Ht <= St.b; Ht += Pe) {
      const Re = new Date(Ht), Ge = Zt(Ht);
      !Ge && Re.getHours() % tf || !Ge && (Math.abs(_t.a - Ht) < 2 * Pe || Math.abs(St.b - Ht) < 2 * Pe) || J >= _t.a && Math.abs(Ht - J) < 1.5 * Pe && !Ge || re.push({ t: Ht, edge: Ge, label: _o(Re, x), entry: Ht >= J - Pe ? Y.find((gn) => new Date(gn.datetime).getTime() === Ht) : void 0 });
    }
    J > _t.a && J < _t.b && re.push({ t: J, edge: J - _t.a < Pe ? " wbFirst" : _t.b - J < Pe ? " wbLast" : "", label: Ut.now, entry: pt[0], now: !0 });
    const He = (Ht, Re) => '<span class="wbMark' + Ht.edge + (Ht.now ? " wbNowMark" : "") + '" style="left:' + Dt(Ht.t) + '">' + Re + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + I + (xt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + xt.map((Ht) => '<button aria-pressed="' + (Ht === yt) + '" data-wb="hourly-mode" data-mode="' + Ht + '" data-wb-focus="hourly-mode-' + Ht + '">' + Ot(Ut.modes[Ht]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ot(Ut.nextHours) + '" data-span="' + Yt + '" data-start="' + ee + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Yt + ");width:calc(var(--wb-u) * " + (St.b - _t.a) / Pe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((St.b - _t.a) / (2 * Pe)) + 1)].map((Ht, Re) => '<i class="wbSnap" style="left:' + Dt(_t.a + Re * 2 * Pe) + '"></i>').join("") + '<div class="wbDays">' + Tt.map((Ht, Re) => {
      var Ge;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ht.b - Ht.a) / Pe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Re === 0 ? ee : ((((Ge = Ht.page) == null ? void 0 : Ge.a) ?? Ht.a) - _t.a) / Pe) + '" data-wb-focus="hours-day-' + Re + '">' + Ot(Ht.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + re.map((Ht) => He(Ht, Ot(Ht.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + $t(x, _t, St, re, J, Dt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Dt(Wt.getTime()) + ";width:calc(var(--wb-u) * " + Kt * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (J > _t.a ? '<i class="wbPast" style="width:' + Dt(Math.min(J, St.b)) + '"></i><i class="wbNowLine" style="left:' + Dt(J) + '"></i>' : "") + Tt.slice(1).map((Ht) => '<i class="wbMidnight" style="left:' + Dt(Ht.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + re.map((Ht) => {
      if (!Ht.entry) return "";
      const [Re, Ge] = pi(x, Ht.entry, yt);
      return He(Ht, '<span class="wbPrimaryV">' + Ot(Re) + '</span><span class="wbSecondary">' + Ot(Ge) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Gt(x) {
    const C = ef, A = C.findIndex(([yt]) => yt >= x);
    if (A <= 0) return "rgb(" + C[A < 0 ? C.length - 1 : 0][1].join(",") + ")";
    const [I, Y] = C[A - 1], [J, pt] = C[A], xt = (x - I) / (J - I);
    return "rgb(" + Y.map((yt, It) => Math.round(yt + (pt[It] - yt) * xt)).join(",") + ")";
  }
  function Ee(x, C, A) {
    var Dt;
    const I = k("daily").filter((Wt) => Ve(Wt.templow) && Ve(Wt.temperature)).slice(0, 7);
    if (!I.length) return "";
    const Y = Math.min(...I.map((Wt) => Number(Wt.templow))), J = Math.max(...I.map((Wt) => Number(Wt.temperature))), pt = Math.max(1, J - Y), xt = (Wt) => Math.max(0, Math.min(100, (Wt - Y) / pt * 100)).toFixed(2), yt = /F/.test(Mr(x, D(x, "daily"), "temperature")), It = (Wt) => yt ? (Wt - 32) / 1.8 : Wt, _t = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Wt) => Gt(It(Y + Wt * pt)) + " " + Wt * 100 + "%").join(",") + ")", St = (Dt = Mn(x, C, "temperature")) == null ? void 0 : Dt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (na(k("hourly").filter((Wt) => new Date(Wt.datetime).getTime() > Date.now() - Pe)).length > 1 ? " wbTabbed" : "") + '">' + A + '<div class="wbDayBars" role="list">' + I.map((Wt, Kt) => {
      const Zt = Ze(x, Wt), Tt = ls(new Date(Wt.datetime), /* @__PURE__ */ new Date()), ee = Number(Wt.templow), re = Number(Wt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ot(Fa(Ut.rangeRow, { day: Zt, low: aa(x, ee), high: aa(x, re) })) + '"><span class="wbRangeDay">' + Ot(Zt) + "</span>" + Et(Wt.condition, 40, !1, "r" + Kt) + '<span class="wbRangeLo">' + Ot(aa(x, ee)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + _t + ";clip-path:inset(0 " + (100 - xt(re)) + "% 0 " + xt(ee) + '% round 4px)"></i>' + (Tt && Ve(St) ? '<i class="wbRangeNow" style="left:' + xt(Number(St)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ot(aa(x, re)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function Ca(x) {
    const C = Pt, { rise: A, set: I } = Dd(x, C), Y = A && I ? Math.round((I.getTime() - A.getTime()) / io) : 0, J = Math.floor(Y / 60), pt = Y % 60, xt = A && I ? (C.getTime() - A.getTime()) / (I.getTime() - A.getTime()) : -1, yt = xt >= 0 && xt <= 1, It = Math.PI * (1 - Math.min(1, Math.max(0, xt))), _t = 100 + 74 * Math.cos(It), St = 100 - 74 * Math.sin(It), Yt = yt ? Math.sin(Math.PI * xt) : 0, Dt = yt ? Zs("#2e0a0d", "#43180a", Yt) : "#0e0507", Wt = yt ? Zs("#7a1d12", "#8f400f", Yt) : "#1c0709", Kt = Zs("#f60c08", "#ff8f00", Yt), Zt = Zs("#fd9b07", "#ffd84a", Yt), Tt = yt ? Zs("#fd9b07", "#ffd84a", Yt) : "#6b3a2a", ee = (He) => He ? _o(He, x) : "–", re = A && I ? new Date((A.getTime() + I.getTime()) / 2) : null;
    return Sn({
      icon: ba.sunny,
      name: Ut.sun,
      sub: Y ? Fa(Ut.daylightShort, { hours: J, minutes: pt }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Dt + ", " + Wt + ");--wb-sun-line:" + Tt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + y + 'sun-glow"><stop offset="0" stop-color="' + Kt + '"></stop><stop offset="0.45" stop-color="' + Kt + '"></stop><stop offset="1" stop-color="' + Zt + '"></stop></radialGradient><clipPath id="' + y + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (yt ? '<circle cx="' + _t + '" cy="' + St + '" r="14" fill="url(#' + y + 'sun-glow)" clip-path="url(#' + y + 'above-horizon)"></circle>' : "") + (re ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Ot(ee(re)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Ot(ee(A)) + '</text><text class="wbSunTime" x="174" y="117">' + Ot(ee(I)) + "</text></svg></div>"
    });
  }
  function lo(x, C, A) {
    const I = (pt) => y + "moon-" + pt, Y = x > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + I("terminator") + ')" d="' + Yf(61, 61, 57.9, x) + '"' + (C ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", J = (pt, xt, yt, It, _t, St) => '<filter id="' + I(pt) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xt + '" numOctaves="' + yt + '" seed="' + It + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Yt) => "<feFunc" + Yt + ' type="linear" slope="' + _t + '" intercept="' + St + '"></feFunc' + Yt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + I("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + I("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + I("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + I("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + I("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + J("mottle", "0.045", 4, 3, 1.8, -0.4) + J("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + I("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + I("fill") + ')"></circle><g' + (A ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + I("soften") + ')">' + Xf.map(([pt, xt, yt, It, _t, St]) => '<ellipse cx="' + pt + '" cy="' + xt + '" rx="' + yt + '" ry="' + It + '" fill-opacity="' + St + '" transform="rotate(' + _t + " " + pt + " " + xt + ')"></ellipse>').join("") + "</g>" + Jf.map(([pt, xt, yt]) => '<circle class="wbCrater" cx="' + pt + '" cy="' + xt + '" r="' + yt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + I("glow") + ')">' + Qf.map(([pt, xt]) => '<line x1="54.4" y1="95" x2="' + pt + '" y2="' + xt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + I("glow") + ')">' + Hc.map(([pt, xt, yt]) => '<circle cx="' + pt + '" cy="' + xt + '" r="' + yt * 2 + '"></circle>').join("") + "</g>" + Hc.map(([pt, xt, yt]) => '<circle class="wbBrightCenter" cx="' + pt + '" cy="' + xt + '" r="' + yt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + I("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + I("grain") + ')"></rect>' + Y + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Vt(x) {
    const C = G, A = td(x), I = (A == null ? void 0 : A.lat) ?? 0, Y = If(C), J = Pc(x), pt = J ? x.states[J] : void 0, xt = Cr(pt) && hf.includes(pt.state) ? pt.state : Hf(Y.phase), { rise: yt, set: It } = A ? Pf(C, A.lat, A.lon) : {}, _t = Y.phase > 0.5 != I < 0, St = pa(Math.round(Y.fraction * 100), x.locale) + "%", Yt = yt ?? It, Dt = Yt ? _o(Yt, x) : void 0;
    return Sn({
      icon: ba.night,
      name: Ut.moon,
      sub: Ut.phases[xt],
      visual: '<div class="wbMoonBox">' + lo(Y.fraction, _t, I < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Dt ? Ot(Fa(yt ? Ut.moonriseAt : Ut.moonsetAt, { time: Dt })) : "") + "</span><span>" + Ot(Fa(Ut.lit, { illumination: St })) + "</span></div>"
    });
  }
  function ie(x, C) {
    var Wt;
    const A = Mn(x, C, "wind_speed");
    if (!A || !Ve(A.value)) return "";
    const I = Mn(x, C, "wind_gust_speed"), Y = Mn(x, C, "wind_bearing"), J = Y && Ve(Y.value) ? Number(Y.value) : void 0, pt = zf(Number(A.value), (Wt = A.stateObj.attributes) == null ? void 0 : Wt.wind_speed_unit), xt = Kl(x, A.stateObj, "wind_speed", A.value), yt = J !== void 0 ? Ut.cardinal[ff[((J + 11.25) / 22.5 | 0) % 16]] : void 0, It = I ? qf(x, I.stateObj, "wind_gust_speed", I.value) : void 0, _t = [yt ? Fa(Ut.windFrom, { direction: yt }) : void 0, pt !== void 0 ? pt + " " + Ut.beaufort : void 0].filter(Boolean).join(" · ") || It, St = (Kt, Zt) => {
      const Tt = (Kt - 90) * Math.PI / 180;
      return [100 + Zt * Math.cos(Tt), 100 + Zt * Math.sin(Tt)];
    }, Yt = Array.from({ length: 36 }, (Kt, Zt) => Zt * 10).map((Kt) => {
      const Zt = Kt % 90 === 0, [Tt, ee] = St(Kt, 97), [re, He] = St(Kt, Zt ? 83 : 89);
      return '<line class="wbTick' + (Zt ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ee + '" x2="' + re + '" y2="' + He + '"></line>';
    }).join(""), Dt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Kt, Zt]) => {
      const [Tt, ee] = St(Zt, 64);
      return '<text class="wbLetter' + (Kt === "n" ? " wbNorth" : "") + '" x="' + Tt + '" y="' + ee + '">' + Ot(Ut.cardinal[Kt]) + "</text>";
    }).join("");
    return Sn({ icon: ba.windy, name: Ut.wind, sub: _t, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Yt + Dt + (J !== void 0 ? '<path class="wbMarker" transform="rotate(' + J + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ot(xt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ot(xt.unit) + "</text></svg>" });
  }
  function ea(x, C) {
    const A = Mn(x, C, "uv_index");
    if (!A || !Ve(A.value)) return "";
    const I = Number(A.value), Y = Ut.uvLevel[jf(I)], J = /* @__PURE__ */ new Date();
    J.setHours(23, 59, 59, 999);
    const pt = k("hourly").filter((Kt) => Kt.uv_index != null && new Date(Kt.datetime) > /* @__PURE__ */ new Date() && new Date(Kt.datetime) <= J).reduce((Kt, Zt) => !Kt || Zt.uv_index > Kt.uv ? { uv: Zt.uv_index, time: new Date(Zt.datetime) } : Kt, void 0), xt = 48, yt = 100, It = 130, _t = (Kt) => -xt + Math.min(Kt, 11) / 11 * 2 * xt, St = (Kt, Zt) => {
      const Tt = Kt * Math.PI / 180;
      return [yt + Zt * Math.sin(Tt), It - Zt * Math.cos(Tt)];
    }, Yt = (Kt, Zt, Tt) => {
      const [ee, re] = St(_t(Kt), Tt), [He, Ht] = St(_t(Zt), Tt);
      return "M " + ee + " " + re + " A " + Tt + " " + Tt + " 0 0 1 " + He + " " + Ht;
    }, Wt = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, jl.low], [3, 6, jl.moderate], [6, 8, jl.high], [8, 11, jl.very_high]].map(([Kt, Zt, Tt]) => '<path class="wbVuZone" d="' + Yt(Kt, Zt, 96) + '" style="stroke:' + Tt + '"></path>').join("") + Array.from({ length: 21 }, (Kt, Zt) => ({ angle: -xt + Zt * (2 * xt / 20), major: Zt % 2 === 0 })).map(({ angle: Kt, major: Zt }) => {
      const [Tt, ee] = St(Kt, 102), [re, He] = St(Kt, Zt ? 114 : 108);
      return '<line class="wbVuTick' + (Zt ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ee + '" x2="' + re + '" y2="' + He + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + _t(I) + 'deg"><line x1="' + yt + '" y1="' + It + '" x2="' + yt + '" y2="' + (It - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Ot(pa(Math.round(I), x.locale)) + "</text></svg>";
    return Sn({
      icon: ba.sunnyAlert,
      name: Ut.metrics.uv_index,
      sub: pt && pt.uv > I ? Fa(Ut.uvPeak, { level: Y, uv_index: pa(Math.round(pt.uv), x.locale), time: _o(pt.time, x) }) : Y,
      visual: Wt
    });
  }
  function fn(x) {
    const C = k("daily")[0], A = at.temperatureHistory;
    if (!C || new Date(C.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ve(C.temperature) || !A || A.dailyHighs.length < lf) return "";
    const I = Number(C.temperature), Y = A.dailyHighs.reduce((re, He) => re + He, 0) / A.dailyHighs.length, J = Math.round(I - Y) || 0, pt = J > 0 ? "above" : J < 0 ? "below" : "same", xt = [...A.days, { date: /* @__PURE__ */ new Date(), high: I, today: !0 }], yt = 220, It = 158, _t = 22, St = 20, Yt = xt.map((re) => re.high).concat(Y), Dt = Math.min(...Yt) - 3, Wt = Math.max(...Yt) + 1, Kt = (re) => _t + (1 - (re - Dt) / (Wt - Dt)) * (It - _t - St), Zt = yt / xt.length, Tt = Math.min(18, Zt * 0.6), ee = '<svg class="wbCompareBars" viewBox="0 0 ' + yt + " " + It + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + yt + '" y1="' + Kt(Y) + '" y2="' + Kt(Y) + '"></line>' + xt.map((re, He) => {
      const Ht = He * Zt + Zt / 2, Re = Kt(re.high), Ge = re.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Ge + '" x="' + (Ht - Tt / 2) + '" y="' + Re + '" width="' + Tt + '" height="' + (It - St - Re) + '" rx="5"></rect><text class="wbAvgValue' + Ge + '" x="' + Ht + '" y="' + (Re - 6) + '">' + Ot(aa(x, re.high)) + '</text><text class="wbAvgDay' + Ge + '" x="' + Ht + '" y="' + (It - 4) + '">' + Ot(Cf(re.date, x)) + "</text>";
    }).join("") + "</svg>";
    return Sn({
      icon: ba.chartLine,
      name: Ut.metrics.compared_to_average,
      double: !0,
      sub: Fa(Ut.highsLastDays, { days: A.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (J > 0 ? "+" : "") + Ot(aa(x, J)) + '</div><div class="wbCompareWords">' + Ot(Ut.average[pt]) + '</div><div class="wbCompareTemps">' + Ot(Fa(Ut.todayVsAverage, { today: aa(x, I), average: aa(x, Y) })) + "</div></div>" + ee + "</div>"
    });
  }
  function Va(x, C) {
    const A = Mn(x, C, "humidity");
    if (!A || !Ve(A.value)) return "";
    const I = Mn(x, C, "dew_point"), Y = Math.max(0, Math.min(100, Number(A.value)));
    return Sn({
      icon: ba.waterPercent,
      name: Ut.metrics.humidity,
      sub: I && Ve(I.value) ? Fa(Ut.dewPoint, { dew_point: aa(x, I.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Y + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Pi(pa(Math.round(Number(A.value)), x.locale), "%") + "</div>"
    });
  }
  function Ke(x, C) {
    var It, _t;
    const A = Mn(x, C, "pressure");
    if (!A || !Ve(A.value)) return "";
    const I = Number(A.value), Y = (It = A.stateObj.attributes) == null ? void 0 : It.pressure_unit, J = Nc(I, Y), pt = ((_t = at.pressureHistory) == null ? void 0 : _t.entityId) === A.stateObj.entity_id ? Nc(at.pressureHistory.value, Y) : void 0;
    let xt;
    if (J !== void 0 && pt !== void 0) {
      const St = J - pt;
      xt = St >= Tc ? "rising" : St <= -Tc ? "falling" : "steady";
    }
    const yt = Kl(x, A.stateObj, "pressure", Math.round(I));
    return Sn({
      icon: ba.gauge,
      name: Ut.metrics.pressure,
      sub: xt ? Ut.pressure[xt] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Pi(yt.number) + '<span class="wbTapeUnit">' + Ot(yt.unit) + "</span></div>" + (J !== void 0 ? ui(x, J) : "") + "</div>"
    });
  }
  function ui(x, C) {
    const Y = Math.floor(C) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (J, pt) => Y + pt).map((J) => {
      const pt = 100 - (J - C) * 9;
      if (pt < 22 || pt > 178) return "";
      const xt = J % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(pt - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xt ? 2 : 8) + '" x2="26" y1="' + pt + '" y2="' + pt + '"></line>' + (xt ? '<text class="wbTapeLabel" x="33" y="' + pt + '">' + Ot(pa(J, x.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ot(Ut.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ot(Ut.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ua(x) {
    var yt, It;
    const C = Rd(x), A = C ? x.states[C] : void 0;
    if (!A || ((yt = at.rain) == null ? void 0 : yt.entityId) !== C || !Ve(at.rain.change)) return "";
    const I = ((It = A.attributes) == null ? void 0 : It.unit_of_measurement) ?? "", Y = D(x, "hourly"), J = Date.now() + Do, pt = k("hourly").filter((_t) => _t.precipitation != null && new Date(_t.datetime).getTime() <= J), xt = pt.reduce((_t, St) => _t + Number(St.precipitation), 0);
    return Sn({
      icon: ba.rainy,
      name: Ut.metrics.precipitation,
      sub: Y && pt.length ? Fa(Ut.rainExpected, { amount: pa(xt, x.locale, { maximumFractionDigits: 1 }) + " " + Mr(x, Y, "precipitation") }) : Ut.rainLast24h,
      visual: Pi(pa(at.rain.change, x.locale, { maximumFractionDigits: 1 }), I) + (pt.length > 1 ? $f(pt.map((_t) => ({ label: "", value: Number(_t.precipitation) }))) : "")
    });
  }
  function Yn(x, C) {
    const A = Mn(x, C, "visibility");
    if (!A || !Ve(A.value)) return "";
    const I = Kl(x, A.stateObj, "visibility", A.value), Y = $u(Number(A.value), Mr(x, A.stateObj, "visibility"));
    return Sn({
      icon: ba.eyeOutline,
      name: Ut.metrics.visibility,
      sub: Ut.visibilityLevel[Xu(Y)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Y + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ot(ji(x, Y)) + '</div><div class="wbSeaValue">' + Pi(I.number, I.unit) + "</div></div>"
    });
  }
  function ji(x, C) {
    var J;
    const A = Ku((J = x.config) == null ? void 0 : J.country, C);
    if (A) return Fa(Ut.visibilityLandmarks, { from: A.from, to: A.to });
    const I = C / pf * 60;
    if (I < 60) {
      const pt = I < 5 ? Math.max(1, Math.round(I)) : 5 * Math.round(I / 5);
      if (pt < 60) return Fa(Ut.walkMinutes, { minutes: pa(pt, x.locale) });
    }
    const Y = Math.max(1, Math.round(I / 30) / 2);
    return Y < 8 ? Fa(Ut.walkHours, { hours: pa(Y, x.locale) }) : Ut.walkDay;
  }
  function Tn(x) {
    at.categories === void 0 && Se(x);
    const C = Na(x), A = (yt) => yt.map((It) => x.states[It]).filter(Cr), I = A(C.air), Y = A(C.pollen);
    if (!I.length && !Y.length) return "";
    const J = [...I, ...Y], pt = (yt) => Y.includes(yt) ? ba.flower : ba.airFilter, xt = J.find((yt) => yt.entity_id === S.aq);
    return xt ? ra(x, xt, pt(xt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ot(Ut.airQuality) + '</h2></div><div class="wbAqTiles">' + J.map((yt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ot(yt.entity_id) + '"><span class="wbChip">' + cs(pt(yt)) + '</span><span class="wbText"><span class="wbName">' + Ot(Ys(x, yt)) + '</span><span class="wbSub">' + Ot(kr(x, yt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function ra(x, C, A) {
    var _t, St, Yt;
    const I = ((_t = C.attributes) == null ? void 0 : _t.unit_of_measurement) ?? "", Y = ((St = C.attributes) == null ? void 0 : St.device_class) === "pm25" && I === Lc && Ve(C.state), J = Number(C.state), pt = Y ? Bc(J) : void 0, xt = ((Yt = at.aqHistory) == null ? void 0 : Yt.entityId) === C.entity_id ? at.aqHistory.points : void 0, yt = (Dt) => Math.min(100, Math.max(0, Dt / zl * 100));
    let It;
    if (xt && xt.length > 1) It = Kf(xt, (Dt) => (pa(Dt, x.locale, { maximumFractionDigits: 1 }) + " " + I).trim());
    else if (pt) {
      let Dt = 0;
      const Wt = yp.map(([Kt, Zt]) => {
        const Tt = yt(Math.min(Zt, zl)), ee = mf[Kt] + " " + Dt + "% " + Tt + "%";
        return Dt = Tt, ee;
      });
      It = '<div class="wbScale" role="meter" aria-label="' + Ot(Ut.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + zl + '" aria-valuenow="' + J + '" style="background:linear-gradient(to right, ' + Wt.join(", ") + ')"><i style="left:' + yt(J) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + zl + " " + Lc + "</span></div>";
    } else It = '<span class="wbGraphNote"><span>' + Ot(kr(x, C)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + cs(A) + '</span><span class="wbText"><span class="wbName">' + Ot(Ys(x, C)) + '</span><span class="wbSub">' + Ot(kr(x, C)) + (pt ? " · " + Ot(Ut.aqLevel[pt]) : "") + '</span></span><button class="wbBack" title="' + Ot(Ut.back) + '" data-wb="aq-close">' + cs(ba.back) + '</button></div><div class="wbGraph">' + It + "</div></div></div>";
  }
  const Ta = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, fi = (x) => x <= 50 ? "Good" : x <= 100 ? "Moderate" : x <= 150 ? "Unhealthy for some" : x <= 200 ? "Unhealthy" : x <= 300 ? "Very unhealthy" : "Hazardous";
  function Ga(x) {
    const C = /* @__PURE__ */ new Map();
    return Object.values(x.states || {}).filter((A) => {
      var I;
      return A.entity_id.startsWith("sensor.") && Jl.includes(((I = A.attributes) == null ? void 0 : I.device_class) ?? "") && Cr(A) && us(x, A.entity_id);
    }).sort((A, I) => A.entity_id.localeCompare(I.entity_id)).forEach((A) => {
      C.has(A.attributes.device_class) || C.set(A.attributes.device_class, A);
    }), Jl.map((A) => C.get(A)).filter(Boolean);
  }
  const Ln = (x) => Object.values(x.states || {}).filter((C) => {
    var A, I;
    return C.entity_id.startsWith("sensor.") && Cr(C) && us(x, C.entity_id) && (((I = (A = x.entities) == null ? void 0 : A[C.entity_id]) == null ? void 0 : I.translation_key) ?? C.entity_id).toLowerCase().includes("pollen");
  }), Lr = ["none", "very_low", "low", "moderate", "high", "very_high"], je = (x) => Ve(x.state) ? Number(x.state) : Lr.indexOf(String(x.state).toLowerCase().replace(/ /g, "_")), co = (x) => {
    const C = String(x).replace(/_/g, " ");
    return C[0].toUpperCase() + C.slice(1);
  }, An = (x) => x.length ? '<div class="wbBaseRows">' + x.map(([C, A]) => '<span class="wbBaseRow"><span>' + Ot(C) + "</span><span>" + Ot(A) + "</span></span>").join("") + "</div>" : "";
  function zi(x) {
    const C = Ga(x), A = C[0];
    if (!A) return Sn({ icon: ba.airFilter, name: Ut.airQuality, sub: Ut.noAir, visual: Pi("–", ""), cls: "wbBase" });
    const I = A.attributes.device_class, Y = Number(A.state), J = Ve(A.state), pt = I === "aqi" && J ? fi(Y) : I === "pm25" && J ? Ta[Bc(Y)] : kr(x, A);
    return Sn({
      icon: ba.airFilter,
      name: Ut.airQuality,
      sub: pt,
      cls: "wbBase",
      visual: Pi(J ? pa(Math.round(Y), x.locale) : String(A.state), I === "aqi" ? "AQI" : A.attributes.unit_of_measurement || "") + An(C.slice(1, 3).map((xt) => [Ys(x, xt), kr(x, xt)]))
    });
  }
  function hi(x) {
    const C = Ln(x).sort((Y, J) => je(J) - je(Y));
    if (!C.length) return Sn({ icon: ba.flower, name: Ut.pollen, sub: Ut.noPollen, visual: Pi("–", ""), cls: "wbBase" });
    const A = C[0], I = (Y) => Ve(Y.state) ? kr(x, Y) : co(Y.state);
    return Sn({
      icon: ba.flower,
      name: Ut.pollen,
      sub: Ys(x, A) + " · " + I(A),
      cls: "wbBase",
      visual: Pi(I(A), "") + An(C.slice(1, 3).map((Y) => [Ys(x, Y), I(Y)]))
    });
  }
  function hs(x) {
    const C = Date.now(), A = k("hourly").filter((J) => {
      const pt = new Date(J.datetime).getTime();
      return pt > C - Pe && pt < C + 12 * Pe;
    }), I = A.find((J) => (J.precipitation_probability ?? 0) >= 50 || (J.precipitation ?? 0) >= 0.2), Y = I ? Fa(Ut.rainFrom, { time: _o(new Date(Math.max(C, new Date(I.datetime).getTime())), x) }) : A.length ? Ut.noRain12 : void 0;
    return Sn({ icon: ba.radar, name: Ut.rainRadar, sub: Y, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const De = {
    current: qe,
    hourly: Bt,
    sun: Ca,
    moon: Vt,
    wind: ie,
    uv_index: ea,
    compared_to_average: fn,
    humidity: Va,
    pressure: Ke,
    precipitation: ua,
    visibility: Yn,
    air_quality: Tn,
    aq_tile: zi,
    pollen_tile: hi,
    radar_tile: hs
  };
  function Pa(x) {
    var It, _t, St;
    const C = d == null ? void 0 : d();
    if (!C || K) return;
    const A = so(C);
    ft(C, A), at.lastFetch || Jt();
    const I = Na(C), Y = Pc(C), J = Rd(C), pt = [
      ...A.map((Yt) => C.states[Yt]),
      C.states["sun.sun"],
      Y && C.states[Y],
      J && C.states[J],
      ...I.air.map((Yt) => C.states[Yt]),
      ...I.pollen.map((Yt) => C.states[Yt]),
      ...U.some((Yt) => ct.includes(Yt)) ? [...Ga(C), ...Ln(C)] : [],
      C.locale,
      C.config,
      C.entities,
      Math.floor(Date.now() / io)
    ];
    if (!x && V && pt.length === V.length && pt.every((Yt, Dt) => Yt === V[Dt])) return;
    V = pt;
    const xt = N.getRootNode(), yt = xt.activeElement || document.activeElement;
    for (const Yt of U) {
      const Dt = ot[Yt];
      let Wt = "";
      try {
        Wt = De[Yt](C, A) || "";
      } catch {
        Wt = "";
      }
      if (Wt === Dt.html) continue;
      const Kt = yt && Dt.el.contains(yt) ? (It = yt.dataset) == null ? void 0 : It.wbFocus : void 0, Zt = Dt.el.querySelector(".wbStripScroll"), Tt = Zt ? Zt.scrollLeft : null;
      Dt.html = Wt, Dt.el.hidden = !Wt, Dt.el.innerHTML = Wt;
      const ee = Dt.el.querySelector(".wbStripScroll");
      ee && Tt != null ? ee.scrollTo({ left: Tt }) : ee != null && ee.dataset.start && ee.scrollTo({ left: Number(ee.dataset.start) * ee.clientWidth / Number(ee.dataset.span) }), Kt && !ht && ((_t = Dt.el.querySelector('[data-wb-focus="' + Kt + '"]')) == null || _t.focus());
    }
    ht && ((St = N.querySelector('[data-wb-focus="' + ht + '"]')) == null || St.focus(), ht = null), ke(performance.now());
  }
  function Nn() {
    rt || K || (rt = !0, queueMicrotask(() => {
      rt = !1, Pa(!0);
    }));
  }
  function Vi() {
    const x = getComputedStyle(N), C = (pt) => x.getPropertyValue(pt).trim(), A = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([pt, xt]) => {
      C(xt) && (A[pt] = C(xt));
    });
    const I = C("--color-text-primary") || "#f1f1f1", Y = C("--color-bg-card") || "#222222", J = !!N.closest(".light");
    return { colors: { ...un, ...A }, ink: J ? I : Y, paper: J ? Y : I };
  }
  const Ua = (x, C) => {
    var A;
    x.width !== C.w && (x.width = C.w), x.height !== C.h && (x.height = C.h), (A = x.getContext("2d")) == null || A.putImageData(new ImageData(C.data, C.w, C.h), 0, 0);
  }, oa = () => m && !kf();
  function _e(x, C) {
    N.querySelectorAll("canvas[data-wb-strip]").forEach((A) => Zn(A, vt[A.dataset.wbStrip], x, C));
  }
  function Zn(x, C, A, I) {
    if (!C || !x.getClientRects().length) return;
    const Y = x.clientWidth, J = x.clientHeight;
    if (!Y || !J) return;
    const pt = { width: Y, height: J, columns: C.columns || Mc, colors: I.colors, clock: A, ambient: oa(), seed: C.seed, soft: 1.5 };
    if (c === "smooth") {
      const xt = Math.min(2, window.devicePixelRatio || 1), yt = Math.round(Y * xt), It = Math.round(J * xt);
      x.width !== yt && (x.width = yt), x.height !== It && (x.height = It);
      const _t = x.getContext("2d");
      if (!_t) return;
      _t.setTransform(xt, 0, 0, xt, 0, 0), Du(_t, C.segs, pt);
    } else Ua(x, Eu(C.segs, { ...pt, px: 2, oneBit: c === "onebit", ink: I.ink, paper: I.paper }));
  }
  function ke(x) {
    if (K) return;
    const C = Vi();
    if (c !== "smooth") {
      const A = oa();
      N.querySelectorAll("canvas[data-wb-wx]").forEach((I) => {
        I.getClientRects().length && Ua(I, dp(Gd(I.dataset.wbWx, C.colors), { size: Number(I.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: C.colors, ink: C.ink, paper: C.paper, clock: x, idle: A }));
      });
    }
    N.querySelectorAll("canvas[data-wb-sea]").forEach((A) => {
      const I = A.clientWidth, Y = A.clientHeight, J = Number(A.dataset.wbSea), pt = I + "x" + Y + ":" + J + ":" + C.colors.skyClearDay;
      !I || !Y || !(J > 0) || A.dataset.painted === pt || (A.dataset.painted = pt, Ua(A, Uu(I, Y, J, C.colors)));
    }), _e(x, C);
  }
  function Kn(x) {
    if (O = 0, !(K || !oa())) {
      if (!document.hidden)
        if (c === "smooth") _e(x, Vi());
        else {
          const C = Math.floor(x / 100);
          C !== ut && (ut = C, ke(x));
        }
      O = requestAnimationFrame(Kn);
    }
  }
  function Pn() {
    N.classList.toggle("wbMotion", oa()), !O && !K && oa() && (O = requestAnimationFrame(Kn));
  }
  function La(x) {
    var A, I;
    const C = (I = (A = x.target).closest) == null ? void 0 : I.call(A, "[data-wb]");
    if (!(!C || !N.contains(C))) {
      switch (C.dataset.wb) {
        case "day": {
          S.openDay = Number(C.dataset.index), S.opener = C.dataset.wbFocus, ht = "back-day";
          const Y = ye()[S.openDay], J = !at.todayHistory || at.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - at.todayHistory.fetched > Qu;
          Y && ls(new Date(Y.datetime), /* @__PURE__ */ new Date()) && J && ue();
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
          S.aq = C.dataset.entity, ta(S.aq);
          break;
        case "aq-close":
          S.aq = void 0;
          break;
        default:
          return;
      }
      Pa(!0);
    }
  }
  function Bo(x) {
    var C, A;
    x.key === "Escape" && S.openDay !== void 0 && ((A = (C = x.target).closest) != null && A.call(C, '[data-wb-open="day"]')) && (S.openDay = void 0, ht = S.opener, S.opener = void 0, Pa(!0));
  }
  let Ya = null;
  function No(x) {
    var A, I;
    const C = (I = (A = x.target).closest) == null ? void 0 : I.call(A, ".wbStripScroll");
    !C || x.button !== 0 || (Ya = { startX: x.pageX, left: C.scrollLeft, moved: !1 }, C.classList.add("wbHeld"), window.addEventListener("mousemove", Po), window.addEventListener("mouseup", hn, { once: !0 }));
  }
  function Po(x) {
    const C = N.querySelector(".wbStripScroll");
    if (!Ya || !C) return;
    const A = x.pageX - Ya.startX;
    !Ya.moved && Math.abs(A) > 1 && (Ya.moved = !0, C.classList.add("wbDragging")), C.scrollLeft = Ya.left - A;
  }
  function hn() {
    Ya = null, window.removeEventListener("mousemove", Po);
    const x = N.querySelector(".wbStripScroll");
    if (!x) return;
    x.classList.remove("wbDragging", "wbHeld");
    const C = [...x.querySelectorAll(".wbSnap")];
    if (C.length) {
      const A = C.reduce((I, Y) => Math.abs(Y.offsetLeft - x.scrollLeft) < Math.abs(I.offsetLeft - x.scrollLeft) ? Y : I);
      x.scrollTo({ left: A.offsetLeft, behavior: "smooth" });
    }
  }
  N.addEventListener("click", La), N.addEventListener("keydown", Bo), N.addEventListener("mousedown", No);
  const $n = typeof ResizeObserver == "function" ? new ResizeObserver(() => ke(performance.now())) : null;
  $n == null || $n.observe(N);
  const Za = (mi = window.matchMedia) == null ? void 0 : mi.call(window, "(prefers-reduced-motion: reduce)"), Gi = () => {
    Pn(), ke(performance.now());
  };
  (mn = Za == null ? void 0 : Za.addEventListener) == null || mn.call(Za, "change", Gi);
  const Io = [
    setInterval(() => {
      Pt = /* @__PURE__ */ new Date(), Pa(!0);
    }, df),
    setInterval(() => {
      G = /* @__PURE__ */ new Date(), Pa(!0);
    }, cf),
    setInterval(Jt, rf)
  ];
  return Pa(!0), Pn(), {
    update() {
      Pa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Pa(!0);
    },
    setStyle(x) {
      !x || x === c || (c = x, N.dataset.style = c, Pa(!0), Pn());
    },
    destroy() {
      var x;
      K = !0, Io.forEach(clearInterval), O && cancelAnimationFrame(O), O = 0, $n == null || $n.disconnect(), (x = Za == null ? void 0 : Za.removeEventListener) == null || x.call(Za, "change", Gi), hn(), N.removeEventListener("click", La), N.removeEventListener("keydown", Bo), N.removeEventListener("mousedown", No), ["daily", "hourly"].forEach(L), N.remove();
    }
  };
}
const $s = "#E1E1E1", Oc = "#F7F4F0", Bd = "#03a9f4", Ce = 14, Ae = 172;
let eh = 0;
const Xe = (n) => Math.round(n * 100) / 100, Ro = (n, d, o) => Math.max(d, Math.min(o, n)), di = (n, d, o, c, m, b) => '<rect x="' + Xe(n) + '" y="' + Xe(d) + '" width="' + Xe(o) + '" height="' + Xe(c) + '" fill="' + m + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", Nd = (n) => n.map((d, o) => (o ? "L" : "M") + Xe(d[0]) + " " + Xe(d[1])).join("");
function Pd(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const Ii = [
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
  let o = Ii[0], c = Ii[Ii.length - 1];
  for (let _ = 0; _ < Ii.length - 1; _++) if (d >= Ii[_][0] && d <= Ii[_ + 1][0]) {
    o = Ii[_], c = Ii[_ + 1];
    break;
  }
  const m = (d - o[0]) / (c[0] - o[0]), b = m * m * (3 - 2 * m), w = (_, y) => {
    const N = parseInt(_.slice(1), 16), wt = parseInt(y.slice(1), 16);
    return "#" + [16, 8, 0].map((ct) => Math.round((N >> ct & 255) + ((wt >> ct & 255) - (N >> ct & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * b, t: d };
}
function nh(n) {
  const d = parseInt(n.slice(1), 16), o = (d >> 16 & 255) / 255, c = (d >> 8 & 255) / 255, m = (d & 255) / 255, b = Math.max(o, c, m), w = Math.min(o, c, m);
  let _ = 0, y = 0;
  const N = (b + w) / 2;
  if (b !== w) {
    const wt = b - w;
    y = N > 0.5 ? wt / (2 - b - w) : wt / (b + w), _ = (b === o ? (c - m) / wt + (c < m ? 6 : 0) : b === c ? (m - o) / wt + 2 : (o - c) / wt + 4) / 6;
  }
  return [_ * 360, y * 100, N * 100];
}
function Bp(n, d, o) {
  d = Ro(d, 0, 100) / 100, o = Ro(o, 0, 100) / 100;
  const c = (w) => (w + n / 30) % 12, m = d * Math.min(o, 1 - o), b = (w) => o - m * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [b(0), b(8), b(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Np, Pp, Ip] = nh($s), Wc = Bp(Np, Pp, Math.max(6, Ip - 14)), oh = Bp(Np, Pp, Math.min(96, Ip + 16));
function ih(n, d, o, c, m) {
  const b = Ae / 2, w = Ae * 0.12, _ = b - (b - w) * n, y = (ot) => ot ** 1.3, N = Ro(o, -1.5, 1.5), wt = (ot) => -(Math.abs(N) * 4.6 * ot ** 1.5) * Math.sign(N), ct = n * 1.4, U = (ot, K) => {
    const V = Math.min(4.8, Math.abs(o) * 2.6) * (K ? 1 : -1) * Math.sign(o || 1), O = K ? ot + _ : ot, ut = K ? ot : ot + _, rt = (Pt) => O + wt(Pt) + V * Math.sin(Pt * Math.PI * 1.2 + c) * y(Pt) * 1.4 + ct * Math.sin(Pt * Math.PI * 2 + c * 0.6) * y(Pt) * (K ? 1 : -1), ht = [[ut, Ce]];
    for (let Pt = 0; Pt <= 12; Pt++) ht.push([rt(Pt / 12), Ce + Ae * Pt / 12]);
    ht.push([ut, Ce + Ae]);
    let et = '<path d="' + Nd(ht) + 'Z" fill="' + $s + '"/>';
    if (m) return et;
    const tt = 1.35 + ((K ? o > 0 : o < 0) ? 0.35 : 0), S = (Pt) => {
      const G = Pt / 7, vt = K ? 1 - G : G, j = (1 - vt) ** 1.3, jt = ot + _ * G;
      return Array.from({ length: 13 }, (k, D) => {
        const L = D / 12;
        return [jt + wt(L) * j + V * tt * Math.sin(L * Math.PI * 1.2 + c - vt * 3.2) * y(L) * 1.4 * j + ct * 1.6 * Math.sin(L * Math.PI * 2 + c * 0.6 - vt * 2.5) * y(L) * n * (0.4 + 0.6 * j), Ce + Ae * L];
      });
    }, at = [1, 2, 3, 4, 5, 6].map(S);
    for (let Pt = 0; Pt < 6; Pt += 2) et += '<path d="' + Nd(at[Pt]) + Nd(at[Pt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return et;
  }, X = b - (b - w) * d;
  return { body: U(Ce, !0) + U(Ce + Ae - _, !1), rails: [{ x: Ce + X - 4, y: Ce, w: 4, h: Ae }, { x: Ce + Ae - X, y: Ce, w: 4, h: Ae }], head: 6.4 };
}
function rh(n, d, o) {
  const c = Ae * (1 - n);
  let m = "";
  if (c > 1 && (m += di(Ce, Ce, Ae, c, $s), !o))
    for (let b = 1; b < 7; b += 2) m += di(Ce + Ae * b / 7, Ce, Ae / 7, c, "#fff");
  return { body: m, rails: [{ x: Ce, y: Ce + Ae * (1 - d) - 7, w: Ae, h: 11 }], head: 10.4 };
}
function sh(n, d, o, c) {
  const m = 9 - 7 * (o / 100), b = Ce + Ae * (1 - n), w = Math.ceil(Ae / 10) + 1, _ = Ce + m / 2, y = (Ce + Ae - m / 2 - _) / (w - 1), N = 0.8, wt = 0.6, ct = Array.from({ length: w }, (ot, K) => Math.max(_ + K * wt, Math.min(_ + K * y, b - m / 2 - (w - 1 - K) * wt))), U = ct.slice(0, -1).map((ot, K) => Ro((ct[K + 1] - ot - wt) / (y - wt), 0, 1));
  U.push(U[w - 2]);
  let X = "";
  return ct.forEach((ot, K) => {
    const V = N + (m - N) * U[K], O = Math.max(0.5, V / 2), ut = Math.max(0.4, V * 0.114);
    X += di(Ce, ot - O, Ae, Math.max(1, V), $s), !c && V > 2.2 && (X += di(Ce, ot + O - ut, Ae, ut, Wc) + di(Ce, ot - O, Ae, ut * 0.55, oh, 0.75));
  }), c || [0.22, 0.78].forEach((ot) => {
    X += di(Ce + Ae * ot - 0.7, Ce, 1.4, Math.max(0, ct[w - 1] + 1 - Ce), Wc, 0.85);
  }), { body: X, rails: [{ x: Ce, y: Ce + Ae * (1 - d) - 8, w: Ae, h: 8 }], head: 8.8 };
}
const qc = (n, d, o, c, m, b, w) => n === "curtain" ? ih(d, o, m, b, w) : n === "venetian" ? sh(d, o, c, w) : rh(d, o, w);
function lh(n, d) {
  let o = "", c = "";
  return d.forEach((m) => {
    const b = m.w > m.h, w = Ro(b ? Ce + Ae / 2 : m.x + m.w / 2, 17, 183), _ = Ro(b ? m.y + m.h / 2 : Ce + Ae / 2, 17, 183);
    o += b ? di(Ce, Ro(m.y + m.h / 2, Ce, Ce + Ae) - 1, Ae, 2, Bd) : di(Ro(m.x + m.w / 2, Ce, Ce + Ae) - 1, Ce, 2, Ae, Bd);
    const y = b ? "M" + Xe(w - 4) + " " + Xe(_ - 3) + "l4 -3l4 3M" + Xe(w - 4) + " " + Xe(_ + 3) + "l4 3l4 -3" : "M" + Xe(w - 3) + " " + Xe(_ - 4) + "l-3 4l3 4M" + Xe(w + 3) + " " + Xe(_ - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Xe(w) + '" cy="' + Xe(_) + '" r="11" fill="' + Bd + '" filter="url(#' + n + 's)"/><path d="' + y + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function dh(n, d) {
  const o = /* @__PURE__ */ new Date(), c = ah(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), b = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = qc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), _ = d.ghostAlpha > 4e-3 && d.ghost != null ? qc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", y = d.grip > 4e-3 ? lh(n, w.rails) : null, N = (wt) => di(Ce, Ce, Ae, Ae, wt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Xe(m) + '%" cy="' + Xe(b) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Xe(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Xe(100 - m * 0.8) + '%" cy="' + Xe(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Xe(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Oc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (_ ? '<g opacity="' + Xe(d.ghostAlpha) + '">' + _ + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + $s + '" filter="url(#' + n + 's)"/></g>' + (y ? '<g clip-path="url(#' + n + 'c)" opacity="' + Xe(d.grip) + '">' + y.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Oc + '" stroke-width="3"/>' + (y ? '<g opacity="' + Xe(d.grip) + '">' + y.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: d }) {
  var et;
  const o = "cv" + ++eh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (et = window.matchMedia) == null ? void 0 : et.call(window, "(pointer: coarse)").matches;
  let b = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let _ = 0, y = !1, N = !1, wt = null, ct = 0, U = 0;
  const X = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", ot = () => wt || y || N || b.moving || b.target != null ? 1 : m ? performance.now() < U ? 1 : 0.4 : 0, K = () => {
    c.innerHTML = dh(o, { kind: b.kind, pos: w.pos, bar: b.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function V(tt) {
    _ = 0;
    const S = w.last ? Math.min(0.064, (tt - w.last) / 1e3) : 1 / 60, at = S * 60;
    w.last = tt;
    const Pt = b.pos - w.pos, G = w.pos;
    w.pos += Math.sign(Pt) * Math.min(Math.abs(Pt), Math.max(10.5, Math.abs(Pt) * 1.4) * S), Math.abs(b.pos - w.pos) < 0.03 && (w.pos = b.pos), w.vel = w.vel * 0.86 + (w.pos - G) / at * 0.14, Math.abs(w.vel) < 0.015 && w.pos === b.pos && (w.vel = 0), (w.pos !== G || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * at);
    const vt = b.tilt - w.tilt;
    w.tilt += Math.sign(vt) * Math.min(Math.abs(vt), Math.max(60, Math.abs(vt) * 4) * S);
    const j = ot();
    w.grip += (j - w.grip) * Math.min(1, S * (j > w.grip ? 11 : 3.5)), Math.abs(j - w.grip) < 0.01 && (w.grip = j);
    const jt = b.target != null && Math.abs(b.target - w.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (w.gpos = b.target), w.ghost += (jt - w.ghost) * Math.min(1, S * (jt > w.ghost ? 16 : 3)), Math.abs(jt - w.ghost) < 4e-3 && (w.ghost = jt), K(), w.pos !== b.pos || w.vel || w.tilt !== b.tilt || w.grip !== j || w.ghost !== jt ? _ = requestAnimationFrame(V) : w.last = 0;
  }
  const O = () => {
    b && !_ && (_ = requestAnimationFrame(V));
  }, ut = setInterval(() => {
    b && !_ && K();
  }, 60 * 1e3), rt = (tt) => {
    const S = c.getBoundingClientRect();
    return X() === "x" ? (tt.clientX - S.left) / S.width : (tt.clientY - S.top) / S.height;
  };
  c.addEventListener("pointerdown", (tt) => {
    var Pt;
    if (!(b != null && b.canSet) || tt.button > 0) return;
    tt.preventDefault(), (Pt = c.setPointerCapture) == null || Pt.call(c, tt.pointerId);
    const S = b.target ?? b.pos, at = c.getBoundingClientRect();
    wt = { p0: rt(tt), from: S, x0: tt.clientX, value: null, side: null }, b.kind === "curtain" && S > 0 && (wt.side = (tt.clientX - at.left) / at.width < 0.5 ? "L" : "R"), O();
  }), c.addEventListener("pointermove", (tt) => {
    if (!wt) return;
    let S;
    if (b.kind === "curtain") {
      if (!wt.side) {
        const Pt = tt.clientX - wt.x0;
        if (Math.abs(Pt) < 4) return;
        wt.side = Pt < 0 ? "L" : "R";
      }
      const at = (Ae / 2 - Ae * 0.12) / 200;
      S = wt.from + (wt.side === "L" ? -1 : 1) * ((rt(tt) - wt.p0) / at) * 100;
    } else S = wt.from - (rt(tt) - wt.p0) / (Ae / 200) * 100;
    wt.value = Ro(S, 0, 100), n(wt.value);
  });
  const ht = () => {
    if (!wt) return;
    const tt = wt.value;
    wt = null, tt != null && d(Math.round(tt)), O();
  };
  return c.addEventListener("pointerup", ht), c.addEventListener("pointercancel", ht), c.addEventListener("lostpointercapture", ht), c.addEventListener("pointerenter", () => {
    y = !0, O();
  }), c.addEventListener("pointerleave", () => {
    y = !1, O();
  }), c.addEventListener("focus", () => {
    N = c.matches(":focus-visible"), O();
  }), c.addEventListener("blur", () => {
    N = !1, O();
  }), c.addEventListener("keydown", (tt) => {
    if (!(b != null && b.canSet)) return;
    const S = Math.round(b.target ?? b.pos), at = tt.shiftKey ? 10 : 1, Pt = { ArrowUp: S + at, ArrowRight: S + at, ArrowDown: S - at, ArrowLeft: S - at, PageUp: S + 25, PageDown: S - 25, Home: 0, End: 100 }[tt.key];
    if (Pt == null) return;
    tt.preventDefault();
    const G = Ro(Pt, 0, 100);
    n(G), clearTimeout(ct), ct = setTimeout(() => d(G), 500);
  }), {
    el: c,
    update(tt) {
      const S = !b;
      b = tt, S && (w.pos = b.pos, w.tilt = b.tilt, U = performance.now() + 1500, m && setTimeout(O, 1600)), c.classList.toggle("x", X() === "x"), c.classList.toggle("y", X() === "y"), b.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), c.setAttribute("aria-orientation", X() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), c.setAttribute("aria-valuetext", b.text), O();
    },
    destroy() {
      cancelAnimationFrame(_), _ = 0, clearInterval(ut), clearTimeout(ct), c.remove();
    }
  };
}
const jc = "move-assistant-density", Hi = {
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
}, Q = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Id = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', zc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Vl = {
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
}, $c = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Hd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Xc = "move_assistant_house", Jc = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], Qc = "move-assistant-house-look", yh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kh = [["popup", "Popup"], ["sheet", "Sheet"]], Mh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ch = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Fd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Lh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', tp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', ep = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Hp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", np = Hp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Ah = Hp(["M20 6L9 17L4 12"]), Eo = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + Q(n || "") + '"' + (d ? ' data-icon-name="' + Q(d) + '"' : "") + "></span>", _h = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Eh = 1, Dh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], op = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Od = ["hs", "xy", "rgb", "rgbw", "rgbww"], Gl = ["door", "window", "garage_door", "opening"], ip = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Ul = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Rh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Bh = 10, Nh = 20, Ph = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ih = ["living room", "bedroom", "office"];
function Hh(n, { config: d, getHass: o }) {
  var El, os, zs;
  const c = (t) => n.getElementById(t), m = c("app"), w = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let _ = Hi.get(jc) === "1", y = {};
  const N = (t) => {
    var a;
    return (a = o()) == null ? void 0 : a.callWS(t);
  }, wt = (t, a, i) => N({ type: "call_service", domain: t, service: a, service_data: i }), ct = n.querySelector("#appearancePane .toggleList");
  ct && !c("densityToggle") && (ct.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    _ = !_, Hi.set(jc, _ ? "1" : "0"), tt();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && $t(t).device_class === "power" && /^(W|kW)$/.test($t(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], X = (t, a, i, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([p, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + p + '">' + h + "</button>").join("") + "</div>", ot = (t, a, i, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + i + "</div>";
  function K() {
    if (!w || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (E, R) => '<div class="houseTab' + (E === "look" ? " active" : "") + '" data-house-pane="' + E + '"><section class="card">' + R + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([E, R]) => '<button class="tab segBtn' + (E === "look" ? " active" : "") + '" type="button" data-house-tab="' + E + '">' + R + "</button>").join("") + "</div>" + // Appearance in groups, each named above its card (Matt, 8 Nov)
    i("look", yh.map(([E, R]) => '<div class="tfSetGroup"><div class="sectionLabel">' + R + '</div><div class="toggleList" data-look-group="' + E + '"></div></div>').join("")) + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + i("sources", '<div class="toggleList">' + U.map(([E, R, H]) => ot(R, H, '<select class="settingsSelect" data-source="' + E + '" aria-label="' + R + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Hd).map(([E, R]) => ot(R.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + E + '" aria-label="' + R.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = (E) => t.querySelector('[data-look-group="' + E + '"]'), p = (E) => E == null ? void 0 : E.closest(".toggleRow");
    [p(t.querySelector(".themeBtn")), p(c("densityToggle"))].forEach((E) => E && l("look").appendChild(E)), [p(c("moreInfoChoice")), p(c("namesChoice"))].forEach((E) => E && l("house").appendChild(E)), l("house").insertAdjacentHTML("beforeend", ot("Lights", "How lights show on the house page.", X("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ot("Pad", "What the Dual Axis Controller’s pad sets on its tile.", X("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [p(c("hoursChoice")), p(c("wxStyleChoice"))].forEach((E) => E && l("weather").appendChild(E));
    const h = c("housePane"), f = h.querySelector(".houseTabs"), g = f.querySelector(".rubberIndicator");
    new ResizeObserver(() => O()).observe(h);
    const M = (E) => {
      const R = f.querySelector(".tab.active");
      g.style.transition = E ? "" : "none", g.style.left = R.offsetLeft + "px", g.style.width = R.offsetWidth + "px", E && (g.style.transform = "scaleX(1.08)", setTimeout(() => g.style.transform = "", 180));
    };
    new ResizeObserver(() => M(!1)).observe(f), h.addEventListener("click", (E) => {
      const R = E.target.closest("[data-house-tab]");
      if (R) {
        f.querySelectorAll(".tab").forEach((Ct) => Ct.classList.toggle("active", Ct === R)), h.querySelectorAll(".houseTab").forEach((Ct) => Ct.classList.toggle("active", Ct.dataset.housePane === R.dataset.houseTab)), R.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), M(!0), O();
        return;
      }
      const H = E.target.closest("[data-light-fav]");
      if (H) {
        el(H.dataset.lightFav);
        return;
      }
      const $ = E.target.closest("[data-light-pick]");
      if ($) {
        const [Ct, nt] = $.dataset.lightPick.split("|"), bt = { ...Et[Ct] };
        $.dataset.v ? bt[nt] = $.dataset.v : delete bt[nt], Et[Ct] = bt, ye(), [...Tt.keys()].filter((q) => q.endsWith(":" + nt)).forEach((q) => Tt.delete(q)), Rn();
        return;
      }
      const Z = E.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Z || Z.disabled)) {
        if (Z.dataset.lights && (Et.lights = Z.dataset.lights), Z.dataset.dacPad && (Et.dacPad = Z.dataset.dacPad), (Z.dataset.lights || Z.dataset.dacPad) && (ye(), Tt.clear()), Z.dataset.sumToggle) {
          const Ct = Z.dataset.sumToggle, nt = new Set(W.hiddenSums || []);
          nt.has(Ct) ? nt.delete(Ct) : nt.add(Ct), W = { ...W, hiddenSums: [...nt] }, Na();
        }
        Rn();
      }
    }), h.addEventListener("change", (E) => {
      const R = E.target;
      R.dataset.source && (W = { ...W, sources: { ...W.sources || {}, [R.dataset.source]: R.value || void 0 } }, Na());
      const H = R.dataset.lightStyle || R.dataset.lightPad;
      if (H) {
        const $ = R.dataset.lightStyle ? "lightStyles" : "lightPads", Z = { ...Et[$] };
        R.value ? Z[H] = R.value : delete Z[H], Et[$] = Z, ye(), [...Tt.keys()].filter((Ct) => Ct.endsWith(":" + H)).forEach((Ct) => Tt.delete(Ct));
      }
      Rn();
    });
  }
  function V() {
    var H, $;
    re() && Zt();
    const t = c("housePane");
    if (!t) return;
    const a = !!customElements.get(Dt);
    t.querySelectorAll("[data-lights]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.lights === Et.lights))), c("lightsRow").querySelector(".status").textContent = a || !re() ? "How lights show on the house page." : Kt === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.dacPad === Et.dacPad))), c("dacPadRow").hidden = !re();
    for (const Z of t.querySelectorAll("[data-source]")) {
      if (Z === n.activeElement) continue;
      const [Ct] = U.find(([bt]) => bt === Z.dataset.source), nt = Object.keys(y).filter(U.find(([bt]) => bt === Ct)[3]).sort((bt, q) => Bt(bt).localeCompare(Bt(q)));
      Z.dataset.sig !== nt.join(",") && (Z.innerHTML = '<option value="">Automatic</option>' + nt.map((bt) => '<option value="' + Q(bt) + '">' + Q(Bt(bt)) + "</option>").join(""), Z.dataset.sig = nt.join(",")), Z.value = nt.includes((H = W.sources) == null ? void 0 : H[Ct]) ? W.sources[Ct] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((Z) => {
      const Ct = !(W.hiddenSums || []).includes(Z.dataset.sumToggle);
      Z.classList.toggle("on", Ct), Z.setAttribute("aria-checked", String(Ct));
    });
    const i = c("lightRows"), l = c("lightCards"), p = n.activeElement, h = i != null && i.contains(p) || l != null && l.contains(p) ? p : null;
    if (!i || h != null && h.matches("select")) {
      O();
      return;
    }
    const f = new Set(sa()), g = (Z, Ct, nt, bt) => '<option value="' + Z + '"' + (Z === nt ? " selected" : "") + ">" + Ct + "</option>", M = Object.keys(y).filter((Z) => Z.startsWith("light.")).sort((Z, Ct) => !Se.get(Z) - !Se.get(Ct) || (Se.get(Z) || "").localeCompare(Se.get(Ct) || "") || Bt(Z).localeCompare(Bt(Ct))).map((Z) => {
      const Ct = Et.lightStyles[Z] || "", nt = Et.lightPads[Z] || "", bt = f.has(Z), q = Q(Bt(Z));
      return "<tr><td><strong>" + q + "</strong></td><td>" + Q(Se.get(Z) || "—") + "</td><td>" + Q(je(Z)) + '</td><td class="metaSwitchCol"><button class="switch' + (bt ? " on" : "") + '" type="button" role="switch" aria-checked="' + bt + '" data-light-fav="' + Q(Z) + '" aria-label="' + q + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + Q(Z) + '" aria-label="' + q + ' tile">' + g("", "Default", Ct) + g("tile", "HomeCore tile", Ct) + g("dac", "Dual Axis Controller", Ct) + '</select></td><td><select class="settingsSelect" data-light-pad="' + Q(Z) + '" aria-label="' + q + ' pad"' + (ee(Z) ? "" : " disabled") + ">" + g("", "Default", nt) + g("temperature", "Temperature", nt) + g("colour", "Colour", nt) + "</select></td></tr>";
    }).join(""), E = (Z, Ct, nt, bt, q) => '<div class="themeChoice" role="group" aria-label="' + nt + '">' + bt.map(([kt, z]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (kt === q) + '" data-light-pick="' + Z + "|" + Q(Ct) + '" data-v="' + kt + '">' + z + "</button>").join("") + "</div>", R = Object.keys(y).filter((Z) => Z.startsWith("light.")).sort((Z, Ct) => !Se.get(Z) - !Se.get(Ct) || (Se.get(Z) || "").localeCompare(Se.get(Ct) || "") || Bt(Z).localeCompare(Bt(Ct))).map((Z) => {
      const Ct = f.has(Z), nt = Q(Bt(Z)), bt = [Se.get(Z), je(Z)].filter(Boolean).map(Q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + nt + '</strong><div class="status">' + bt + "</div></div></div>" + ot("Favourite", "", '<button class="switch' + (Ct ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ct + '" data-light-fav="' + Q(Z) + '" aria-label="' + nt + ' is a favourite"></button>') + ot("Tile", "", E("lightStyles", Z, nt + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Et.lightStyles[Z] || "")) + (ee(Z) ? ot("Pad", "", E("lightPads", Z, nt + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Et.lightPads[Z] || "")) : "") + "</div>";
    }).join("");
    i.dataset.html !== M && (i.innerHTML = M, i.dataset.html = M), l.dataset.html !== R && (l.innerHTML = R, l.dataset.html = R), h != null && h.dataset.lightFav && (($ = (l.contains(h) ? l : i).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || $.focus({ preventScroll: !0 })), O();
  }
  function O() {
    var a, i, l;
    const t = c("housePane");
    if (t)
      for (const p of t.querySelectorAll(".themeChoice")) {
        const h = [...p.querySelectorAll("button")];
        let f = (a = p.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? p.nextElementSibling : null;
        if (!f) {
          f = document.createElement("select"), f.className = "settingsSelect tfChoiceList", f.setAttribute("aria-label", p.getAttribute("aria-label") || ((l = (i = p.closest(".toggleRow")) == null ? void 0 : i.querySelector("strong")) == null ? void 0 : l.textContent) || ""), f.addEventListener("change", () => {
            var E;
            return (E = h[Number(f.value)]) == null ? void 0 : E.click();
          }), p.after(f);
          const M = () => {
            f.innerHTML = h.map((R, H) => '<option value="' + H + '"' + (R.disabled ? " disabled" : "") + ">" + Q(R.textContent) + "</option>").join("");
            const E = h.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            E >= 0 && (f.value = String(E));
          };
          new MutationObserver(M).observe(p, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), M();
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
        const g = h.every((M) => M.scrollWidth <= M.clientWidth + 1);
        p.hidden = !g, f.hidden = g, f.dataset.fit = "1";
      }
  }
  const ut = document.createElement("div");
  ut.className = "densityBadge", ut.setAttribute("aria-live", "polite"), ut.hidden = !0, m.appendChild(ut);
  let rt = 0;
  function ht() {
    if (!_) return;
    const t = c("homeView"), a = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      a(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const i = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, p = i.filter((h) => {
      const f = h.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= l + 0.5;
    }).length;
    ut.hidden = !t.classList.contains("active"), ut.innerHTML = "<b>" + p + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const et = () => {
    _ && requestAnimationFrame(ht);
  };
  function tt() {
    var t;
    m.classList.toggle("showDensity", _), (t = c("densityToggle")) == null || t.classList.toggle("on", _), ut.hidden = !_, clearInterval(rt), _ && (rt = setInterval(ht, 1e3), ht());
  }
  window.addEventListener("scroll", et, { capture: !0, passive: !0 }), window.addEventListener("resize", et, { passive: !0 });
  const S = n.querySelector("#homeView .grid");
  let at = null, Pt = null, G = null, vt = null;
  const j = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), D = 6;
  let L = null;
  const P = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map();
  let W = { favourites: null }, gt = {}, Mt = {}, Jt = [], ue = null;
  const ta = (() => {
    try {
      return JSON.parse(Hi.get(Jc)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), so = 0;
  function Na() {
    clearTimeout(so), so = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: Xc, value: W })).catch(() => {
    }), 400);
  }
  const Et = (() => {
    let t = {};
    try {
      t = JSON.parse(Hi.get(Qc)) || {};
    } catch {
    }
    const a = (i, l) => Object.fromEntries(Object.entries(i || {}).filter(([, p]) => l.includes(p)));
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
  })(), ye = () => Hi.set(Qc, JSON.stringify(Et)), Ze = () => {
    m.dataset.more = Et.more, m.dataset.names = Et.names, ts();
  };
  w && ct && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Et.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Et.more = a.dataset.moreStyle, ye(), Ze(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Et.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Et.names = a.dataset.namesStyle, Et.namesPicked = !0, ye(), Ze(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Et.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Et.hoursWindow = a.dataset.hoursWindow, ye(), Qt == null || Qt.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ch.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Et.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Et.wxStyle = a.dataset.wxStyle, ye(), Qt == null || Qt.setStyle(Et.wxStyle), wa == null || wa.forEach((i) => i.setStyle(Et.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  })), K();
  let we = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const qe = /* @__PURE__ */ new Map();
  let Tr = "";
  const xe = w ? mu({ onChange: () => Ma() }) : null;
  w && m.classList.add("house");
  const ne = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Qt = null, Oi = null, ci = !1;
  function Wi(t) {
    const a = Rr();
    if (m.classList.toggle("houseBento", !!a), Qt && (Oi !== a || t == null) && (Qt.destroy(), Qt = null), !a || t == null) {
      ne.remove();
      return;
    }
    ne.isConnected || S.append(ne), ne.style.order = t, !Qt && !ci && (Qt = Fc(ne, { getHass: o, entityId: a, style: Et.wxStyle, hoursWindow: () => Et.hoursWindow }), Oi = a);
  }
  const za = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], me = ["aq", "pollen", "radar"], na = Object.fromEntries(za.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let wa = null, pi = null;
  function qi(t) {
    const a = Rr();
    wa && pi !== a && (wa.forEach((i) => i.destroy()), wa = null), Object.values(na).forEach((i) => a ? !i.isConnected && S.append(i) : i.remove()), a && !wa && !ci && (wa = za.map(([i, l]) => Fc(na[i], { getHass: o, entityId: a, style: Et.wxStyle, cards: l, onOpen: i === "wx" ? () => ti("weather") : void 0 })), pi = a);
  }
  const $t = (t) => {
    var a;
    return ((a = y[t]) == null ? void 0 : a.attributes) || {};
  }, Bt = (t) => $t(t).friendly_name || t, Gt = (t, a) => Ni(t) || (Number($t(t).supported_features) & a) === a, Ee = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ca = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), lo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Vt = (t) => $t(t).supported_color_modes || [], ie = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, ea = (t, a) => [5, 3, 1].map((i) => {
    const l = (i + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), fn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Va = (t) => {
    const a = 0.2126 * fn(t[0]) + 0.7152 * fn(t[1]) + 0.0722 * fn(t[2]);
    return (a + 0.05) / 0.0664 > 1.05 / (a + 0.05);
  }, Ke = (t) => 0.2126 * fn(t[0]) + 0.7152 * fn(t[1]) + 0.0722 * fn(t[2]), ui = (t, a) => {
    const i = Ke(t), l = Ke(a);
    return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
  }, ua = (t, a) => {
    const i = Va(t);
    for (let l = 0.1; l < 1; l += 0.02) {
      const p = t.map((h) => Math.round(i ? h * (1 - l) : h + (255 - h) * l));
      if (ui(p, t) >= a) return "rgb(" + p.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function Yn(t) {
    const a = $t(t), i = (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? ea(...a.hs_color) : a.color_temp_kelvin ? ie(a.color_temp_kelvin) : [255, 170, 0])).map((l) => Math.round(Math.max(0, Math.min(255, l))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + ua(i, 3.5);
  }
  const ji = (t) => {
    var a;
    return t.startsWith("light.") && ((a = y[t]) == null ? void 0 : a.state) === "on" ? ' data-light style="' + Yn(t) + '"' : "";
  }, Tn = (t) => {
    const a = Vt(t);
    return a.length ? a.some((i) => i !== "onoff") : $t(t).brightness != null;
  }, ra = (t) => [$t(t).min_color_temp_kelvin || 2e3, $t(t).max_color_temp_kelvin || 6500], Ta = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function fi(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const i = Math.round(a / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(i / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const p = Math.round(l / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const Ga = (t) => {
    var a;
    return $t(t).current_position ?? (((a = y[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Ln = (t) => {
    var a;
    return le("pos", t, ((a = P.get(t)) == null ? void 0 : a.pos) ?? Ga(t));
  }, Lr = (t) => {
    var a;
    return le("tilt", t, ((a = P.get(t)) == null ? void 0 : a.tilt) ?? $t(t).current_tilt_position);
  };
  function je(t) {
    var f;
    const a = y[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const i = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const g = i.color_temp_kelvin;
      return (Tn(t) ? lo(a) + "%" : "On") + (i.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : Od.includes(i.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : Ee(i.hvac_action || a.state)) + " · " + Ca(i.current_temperature) + " °C now";
    if (l === "cover") {
      const g = Ga(t), M = i.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Ee(a.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : Ee(i.action || "on") + " · " + i.current_humidity + "% now";
    if (l === "vacuum") return Ee(a.state) + (a.state === "cleaning" && ((f = i.rooms) != null && f.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : Ee(a.state);
    if (l === "alarm_control_panel") return op[a.state] || Ee(a.state);
    if (l === "lock" || l === "valve") return Ee(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : Ee(i.problem);
    if (l === "binary_sensor")
      return i.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Gl.includes(i.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Ta(i.rang);
    const p = o();
    if (p != null && p.formatEntityState && !Ni(t))
      try {
        return p.formatEntityState(a);
      } catch {
      }
    const h = Number(a.state);
    if (a.state !== "" && Number.isFinite(h)) {
      const g = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, M = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: g }) + M + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return Ee(a.state);
  }
  const co = (t) => t >= 1e3 ? Ca(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function An(t) {
    var i, l;
    const a = o();
    t.querySelectorAll("[data-icon-for]").forEach((p) => {
      var g;
      const h = y[p.dataset.iconFor], f = p.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !f) {
        let M = p.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (p.textContent = "", M = document.createElement("ha-state-icon"), p.appendChild(M)), M.hass = a, M.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let M = p.firstElementChild;
        (!M || M.localName !== "ha-icon") && (p.textContent = "", M = document.createElement("ha-icon"), p.appendChild(M)), M.icon = f || ((g = h == null ? void 0 : h.attributes) == null ? void 0 : g.icon) || "mdi:circle-medium";
      } else p.textContent || (p.textContent = (p.dataset.letter || Bt(p.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = t.querySelectorAll) == null || i.call(t, ".tfIcon").forEach(hi), (l = t.classList) != null && l.contains("tfIcon") && hi(t), Ua();
  }
  const zi = /* @__PURE__ */ new Map();
  function hi(t) {
    var h, f, g;
    const a = (((h = t.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (t.dataset.iconFor || ((f = t.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || t.getAttribute("aria-label") || ""), i = getComputedStyle(t), l = { backgroundColor: i.backgroundColor, color: i.color }, p = zi.get(a);
    zi.set(a, l), !(!p || p.backgroundColor === l.backgroundColor && p.color === l.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([p, l], { duration: 180, easing: "ease" });
  }
  const hs = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", De = (t) => {
    const a = [t];
    for (; a.length; ) {
      const i = a.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && a.push(...i.shadowRoot.children), a.push(...i.children);
    }
    return null;
  };
  function Pa(t) {
    var Z, Ct, nt;
    const a = t.localName === "svg" ? t : De(t), i = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !a;
    const l = (Z = t.closest(".tfIcon")) == null ? void 0 : Z.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const p = l + "|" + i.map((bt) => bt.getAttribute("d") || bt.localName).join("|");
    if (t.dataset.fitted === p) return !0;
    let h = 1 / 0, f = 1 / 0, g = -1 / 0, M = -1 / 0;
    for (const bt of i) {
      const q = bt.getBBox(), kt = getComputedStyle(bt), z = kt.stroke !== "none" ? (parseFloat(kt.strokeWidth) || 0) / 2 : 0;
      !q.width && !q.height || (h = Math.min(h, q.x - z), f = Math.min(f, q.y - z), g = Math.max(g, q.x + q.width + z), M = Math.max(M, q.y + q.height + z));
    }
    if (!(g > h)) return !1;
    const E = (nt = (Ct = a.viewBox) == null ? void 0 : Ct.baseVal) != null && nt.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, R = l - 14, H = R * E.width / Math.max(g - h, M - f), $ = H / E.width;
    return t.localName === "svg" ? (t.style.width = H + "px", t.style.height = H + "px") : t.style.setProperty("--mdc-icon-size", H + "px"), a.style.translate = ((E.x + E.width / 2 - (h + g) / 2) * $).toFixed(2) + "px " + ((E.y + E.height / 2 - (f + M) / 2) * $).toFixed(2) + "px", t.dataset.fitted = p, !0;
  }
  let Nn = 0;
  function Vi(t = 0) {
    clearTimeout(Nn), [...n.querySelectorAll(hs)].filter((i) => !Pa(i)).length && t < 5 && (Nn = setTimeout(() => Vi(t + 1), 300));
  }
  function Ua() {
    clearTimeout(Nn), Nn = setTimeout(() => Vi(), 60);
  }
  const oa = (t) => {
    var a, i, l;
    return t.startsWith("light.") && y[t] && !$t(t).icon && !((l = (i = (a = o()) == null ? void 0 : a.entities) == null ? void 0 : i[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, _e = (t, a, i) => (a = a || oa(t), ' data-icon-for="' + Q(t) + '"' + (a ? ' data-icon-name="' + Q(a) + '"' : "") + (i ? ' data-letter="' + Q(i) + '"' : "")), Zn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : $t(t).rang ? "mdi:doorbell" : "", ke = (t, a, i, l) => Q([t, a, i, l ? JSON.stringify(l) : ""].join("|")), Kn = (t) => Q(JSON.stringify(t));
  function Pn(t, a) {
    var p, h;
    const i = Q(Bt(a) + ", " + je(a));
    return '<div class="activityRow' + (Number.isFinite(Number((p = y[a]) == null ? void 0 : p.state)) && ((h = y[a]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + Q(t + "|" + a) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + _e(a, Zn(a)) + '></div><div><div class="activityRowName">' + Q(Bt(a)) + '</div><div class="activityRowMeta">' + Q(je(a)) + "</div></div></div>";
  }
  const La = (t, a, i) => '<div class="activityRow" aria-label="' + Q(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + _e("", i, t) + '></div><div><div class="activityRowName">' + Q(t) + '</div><div class="activityRowMeta">' + Q(a) + "</div></div></div>";
  function Bo(t) {
    var i;
    const a = ((i = y[t]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ke("switch", "toggle", t) + '" aria-label="Turn ' + Q(Bt(t)) + (a ? " off" : " on") + '"' + _e(t) + '></button><button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(Bt(t) + ", " + je(t) + ". More info") + '"><span class="activityRowName">' + Q(Bt(t)) + '</span><span class="activityRowMeta">' + Q(je(t)) + "</span></button></div>";
  }
  const Ya = (t) => {
    var a;
    return ((a = jt.get(t)) == null ? void 0 : a.name) ?? Bt(t);
  }, No = (t) => {
    var a;
    return ((a = jt.get(t)) == null ? void 0 : a.text) ?? je(t);
  };
  function Po(t) {
    var i;
    const a = (i = jt.get(t)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? _e("", a, Ya(t)) : _e(t, Zn(t))) + '></div><div><div class="activityRowName">' + Q(Ya(t)) + '</div><div class="activityRowMeta">' + Q(No(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + Q(Ya(t)) + '’s last 24 hours">' + Id + '</button></div><svg class="tfGraph" data-graph="' + Q(t) + '" role="img" aria-label="' + Q(Ya(t)) + ', last 24 hours"></svg></div>';
  }
  function hn(t, a, i, l, p = "", h = null, f = "") {
    const g = at && at.key === t;
    return '<section class="card tfCard' + (f ? " " + f : "") + (g ? " open" : "") + '" data-tf data-k="' + Q(t) + '" style="order:' + a + (g && at.h ? ";min-height:" + at.h + "px" : "") + '" aria-label="' + Q(i) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + Q(h) + '" aria-label="' + Q(i + (y[h] ? ", " + je(h) : "") + ". More info") + '">' + Q(i) + "</button>" : '<div class="activityTitle">' + Q(i) + "</div>") + "</div>" + (g ? Po(at.id) : '<div class="activityRows">' + l.join("") + "</div>" + p) + "</section>";
  }
  function $n(t, a) {
    const i = "readings:" + t.id, l = t.readings.map((p) => Pn(i, p));
    return t.power != null && l.push(La("Power now", co(t.power), "mdi:flash")), hn(i, a, "Readings", l.concat(t.plugs.map(Bo)));
  }
  function Za(t, a) {
    var g;
    const i = "energy:" + t.id, [l, p] = [t.solar.find((M) => M.endsWith("_power")), t.solar.find((M) => M.endsWith("_today"))], h = [l, p].filter(Boolean).map((M) => Pn(i, M)), f = Number(((g = y[l]) == null ? void 0 : g.state) || 0) * 1e3;
    return we.grid && (h.push(Pn(i, we.grid)), h.push(La("House use", co(f + Number(y[we.grid].state)), "mdi:home-lightning-bolt"))), hn(i, a, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Gi = (t, a) => hn("plant:" + t.id, a, Bt(t.id), t.readings.map((i) => Pn("plant:" + t.id, i)), "", t.id);
  function Io(t, a, i, l, p, h, f = null) {
    const g = i == null ? null : Math.max(0, Math.min(1, i)), M = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + Q(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (p ? ' aria-valuetext="' + Q(p) + '"' : "") + ' data-drag="' + Q(t + "|" + a) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (h ? g == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const mi = "move-assistant-house-last-bright", mn = (() => {
    try {
      return JSON.parse(Hi.get(mi)) || {};
    } catch {
      return {};
    }
  })();
  let x = 0;
  const C = (t, a) => {
    !a || mn[t] === a || (mn[t] = a, clearTimeout(x), x = setTimeout(() => Hi.set(mi, JSON.stringify(mn)), 500));
  }, A = (t, a, i, l) => '<div class="tfStep" role="group" aria-label="' + Q(t) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + Q(t.toLowerCase()) + '">' + Vc.down + "</button><output>" + Q(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + Q(t.toLowerCase()) + '">' + Vc.up + "</button></div>", I = (t, a, i) => '<div class="' + t + '" role="group" aria-label="' + Q(a) + '">' + i.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + Q(l.aria) + '"' : "") + ">" + (l.html || Q(l.label)) + "</button>").join("") + "</div>", Y = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), J = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", pt = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + Q(Bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + Q(t) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + Y(a, i) + '"></i><b' + (a >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + J(a) + '">' + Math.round(a) + "%</output></div>";
  function xt(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, p) => {
      l.firstElementChild.setAttribute("style", Y(a, p)), l.lastElementChild.classList.toggle("lit", a >= (p + 1) * 25 - 12);
    });
    const i = t.querySelector(".tfTip");
    i.setAttribute("style", J(a)), i.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const yt = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + Q(Bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + Q(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", It = (t, a, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + Q(Bt(t)) + '">' + [
    Gt(t, mh) && ["open", "Open", "open_cover", a >= 100 && !i],
    Gt(t, vh) && ["stop", "Stop", "stop_cover", !1],
    Gt(t, gh) && ["close", "Close", "close_cover", a <= 0 && !i]
  ].filter(Boolean).map(([l, p, h, f]) => '<button type="button" data-act="' + ke("cover", h, t) + '" aria-label="' + p + '"' + (f ? " disabled" : "") + ">" + bh[l] + "</button>").join("") + "</div>", _t = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + Q(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + Q(a.art) + '&quot;)"' : _e(t, a.icon)) + "></button>", St = (t) => '<button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(Bt(t) + ", " + je(t) + ". More info") + '"><span class="activityRowName">' + Q(Bt(t)) + '</span><span class="activityRowMeta">' + Q(je(t)) + "</span></button>";
  function Yt(t, a = !1, i = null) {
    const l = Oa(t), p = t.startsWith("light.") && He(t) && !(i && xi(t) < 3), h = i || (a && t.startsWith("light.") ? ["bright"] : null), f = p ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : i ? "dash:" : "tile:") + Q(t) + '"></div>'] : l.sections.map((g, M) => g && (!h || h.includes((l.parts || [])[M])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (p ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + Q(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + ji(t) + '><div class="tfActionHead">' + _t(t, l) + St(t) + "</div>" + f.join("") + "</div>";
  }
  const Dt = "dual-controller-v3", Wt = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Kt = null;
  async function Zt() {
    if (Kt || customElements.get(Dt)) return;
    Kt = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(Dt), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(Dt)) return;
    const i = Object.assign(document.createElement("script"), { src: Wt });
    i.onerror = () => {
      Kt = "failed", V();
    }, document.head.appendChild(i);
  }
  const Tt = /* @__PURE__ */ new Map(), ee = (t) => (Et.lightStyles[t] || Et.lights) === "dac", re = () => Et.lights === "dac" || Object.values(Et.lightStyles).includes("dac");
  function He(t) {
    return ee(t) && !!customElements.get(Dt);
  }
  const Ht = (t) => Et.lightPads[t] || Et.dacPad, Re = () => {
    const t = o();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, i, l, ...p) => t.callService(a, ...yr(a, i, l), ...p)
    };
  }, Ge = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", gn = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ge })).dataset.tf = "");
  }, vn = /* @__PURE__ */ new Map(), Ho = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const i = a.parentElement;
    !i || !a.offsetHeight || (i.style.removeProperty("min-height"), vn.set(i.dataset.dac, i.offsetHeight));
  }));
  function po(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const i = a.dataset.dac;
      let l = Tt.get(i);
      if (!l) {
        const p = i.slice(i.indexOf(":") + 1);
        l = document.createElement(Dt), l.setConfig({ type: "custom:" + Dt, entity: p, pad: Ht(p), tap_action: { action: "none" } }), Tt.set(i, l);
      }
      l.hass = Re(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && vn.has(i) && (a.style.minHeight = vn.get(i) + "px"), Ho.observe(l), gn(l);
    });
  }
  function Ui() {
    const t = Re();
    Tt.forEach((a, i) => {
      a.isConnected ? a.hass = t : Tt.delete(i);
    });
  }
  customElements.whenDefined(Dt).then(() => {
    w && (S != null && S.querySelector("[data-tf]")) && Jr(Rn);
  });
  const le = (t, a, i) => k.has(t + "|" + a) ? k.get(t + "|" + a) : i;
  function Oa(t) {
    var h;
    const a = y[t], i = a.attributes, l = t.split(".")[0], p = (f, g) => ({ act: ke(f, "toggle", t), label: g });
    if (l === "light") {
      const f = a.state === "on", g = Vt(t), [M, E] = ra(t), R = le("bright", t, lo(a));
      f && C(t, lo(a));
      const H = le("ct", t, f && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), $ = le("hue", t, f && Od.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: f, button: p("light", "Turn " + Bt(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Tn(t) && Io("bright", t, R / 100, Bt(t) + " brightness", R + "%", !1, f ? null : mn[t] ?? null),
        g.includes("color_temp") && Io("ct", t, H == null ? null : (H - M) / (E - M), Bt(t) + " warm to cool", H == null ? "" : Math.round(H) + " kelvin", !0),
        g.some((Z) => Od.includes(Z)) && Io("hue", t, $ == null ? null : $ / 360, Bt(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const f = i.target_temp_step || 0.5, g = Number(i.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Bt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && A("Target temperature", Ca(g) + " °C", ke("climate", "set_temperature", t, { temperature: g - f }), ke("climate", "set_temperature", t, { temperature: g + f })),
        I("tfSeg", "Mode", (i.hvac_modes || []).map((M) => ({ label: Ee(M), act: ke("climate", "set_hvac_mode", t, { hvac_mode: M }), pressed: a.state === M })))
      ] };
    }
    if (l === "cover") {
      const f = a.state === "opening" || a.state === "closing", g = a.state === "closed", M = Ln(t), E = Lr(t);
      return { on: !g, tone: "blue", icon: $c[Pd(a)][g ? 1 : 0], button: p("cover", (g ? "Open " : "Close ") + Bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Gt(t, Kc) && pt(t, M),
        E != null && yt(t, E),
        It(t, M, f)
      ] };
    }
    if (l === "humidifier") {
      const f = Number(i.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Bt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && A("Target humidity", f + "%", ke("humidifier", "set_humidity", t, { humidity: f - 1 }), ke("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((h = i.available_modes) == null ? void 0 : h.length) && I("tfSeg", "Mode", i.available_modes.map((g) => ({ label: Ee(g), act: ke("humidifier", "set_mode", t, { mode: g }), pressed: i.mode === g })))
      ] };
    }
    if (l === "media_player") {
      const f = a.state === "playing", g = a.state === "off" || a.state === "standby", M = le("vol", t, i.volume_level), E = g ? { act: ke("media_player", Gt(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + Bt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: ke("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + Bt(t) } : { act: ke("media_player", Gt(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + Bt(t) + " off" };
      return { on: !g, tone: "blue", art: !g && i.entity_picture ? i.entity_picture : null, button: E, parts: ["playback", "volume"], sections: g ? [] : [
        (Gt(t, Uc) || Gt(t, Yc) || Gt(t, Gc) || Gt(t, Zc)) && I("tfSeg", "Playback", [
          { html: Vl.prev, aria: "Previous", act: ke("media_player", "media_previous_track", t), disabled: !Gt(t, Uc) },
          { html: f ? Vl.pause : Vl.play, aria: f ? "Pause" : "Play", act: ke("media_player", "media_play_pause", t), disabled: !(Gt(t, Gc) || Gt(t, Zc)) },
          { html: Vl.next, aria: "Next", act: ke("media_player", "media_next_track", t), disabled: !Gt(t, Yc) }
        ]),
        Gt(t, uh) && M != null && Io("vol", t, M, Bt(t) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const f = a.state === "cleaning", g = i.rooms || [], M = (R) => g.includes(R) ? g.filter((H) => H !== R) : g.concat(R), E = ke("vacuum", f ? "pause" : "start", t, Ni(t) ? { rooms: g } : null);
      return { on: f || a.state === "returning", tone: "blue", button: { act: E, label: (f ? "Pause " : "Start ") + Bt(t) }, parts: ["controls", "rooms"], sections: [
        I("tfSeg", Bt(t), [
          { label: f ? "Pause" : "Start", act: E },
          { label: "Dock", act: ke("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: ke("vacuum", "locate", t) }
        ]),
        Ni(t) && I("tfChips", "Rooms to clean", we.rooms.filter((R) => R.id !== "balcony").map((R) => ({ label: R.name, act: ke("vacuum", "set_rooms", t, { rooms: M(R.name) }), pressed: g.includes(R.name) })))
      ] };
    }
    if (l === "lock") {
      const f = a.state === "locked";
      return { on: !f, tone: "heat", button: { act: ke("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + Bt(t) }, parts: ["controls"], sections: [
        I("tfSeg", Bt(t), [
          { label: "Lock", act: ke("lock", "lock", t), pressed: f },
          { label: "Unlock", act: ke("lock", "unlock", t), pressed: a.state === "unlocked" },
          Gt(t, Eh) && { label: "Open", act: ke("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const f = a.state === "disarmed";
      return { on: !f, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: ke("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + Bt(t) + ", away" : "Disarm " + Bt(t) }, parts: ["controls"], sections: [
        I("tfSeg", Bt(t), Dh.filter(([, , , g]) => !g || Gt(t, g)).map(([g, M, E]) => ({ label: M, act: ke("alarm_control_panel", E, t), pressed: a.state === g })))
      ] };
    }
    if (l === "valve") {
      const f = a.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (f ? "Close " : "Open ") + Bt(t)), parts: ["controls"], sections: [
        I("tfSeg", Bt(t), [
          { label: "Open", act: ke("valve", "open_valve", t), pressed: f },
          { label: "Close", act: ke("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Bt(t) }, sections: [] };
  }
  const Wa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ca(t)) + "°";
  function bn(t) {
    var bt;
    const a = (q) => t.readings.find((kt) => $t(kt).device_class === q), i = a("temperature"), l = a("humidity"), p = (q) => {
      var kt;
      return Number((kt = y[q]) == null ? void 0 : kt.state);
    }, h = (q) => t.actions.filter((kt) => q.test(kt)), f = t.lights.filter((q) => {
      var kt;
      return ((kt = y[q]) == null ? void 0 : kt.state) === "on";
    }), g = h(/^cover\./), M = g.filter((q) => {
      var kt;
      return ((kt = y[q]) == null ? void 0 : kt.state) !== "closed";
    }), E = [...new Set(g.map((q) => Pd(y[q])))], R = h(/^climate\./)[0], H = h(/^humidifier\./)[0], $ = h(/^media_player\./), Z = $.find((q) => {
      var kt;
      return ((kt = y[q]) == null ? void 0 : kt.state) === "playing";
    }) || $.find((q) => {
      var kt;
      return ((kt = y[q]) == null ? void 0 : kt.state) === "paused";
    }), Ct = t.plugs.filter((q) => {
      var kt;
      return ((kt = y[q]) == null ? void 0 : kt.state) === "on";
    }), nt = [];
    if (i && Number.isFinite(p(i)) && nt.push({ key: "temp", id: i, kind: "reading", icon: Eo(i), label: "Temperature", value: Ca(p(i)) + "°" }), l && Number.isFinite(p(l)) && nt.push({ key: "hum", id: l, kind: "reading", icon: Eo(l), label: "Humidity", value: Math.round(p(l)) + "%" }), t.lights.length && nt.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Eo("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + t.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? Yn(f[0]) : "",
      acts: t.lights.map((q) => ["light", f.length ? "turn_off" : "turn_on", q]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), g.length) {
      const q = E.length === 1 ? wh[E[0]] : "covers", kt = Math.round(g.reduce((z, zt) => z + Ga(zt), 0) / g.length);
      nt.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Eo("", ((bt = $c[E[0]]) == null ? void 0 : bt[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ee(q),
        value: kt <= 0 ? "Closed" : kt >= 100 ? "Open" : kt + "% open",
        short: kt <= 0 ? "Closed" : kt + "%",
        on: M.length > 0,
        acts: g.map((z) => ["cover", M.length ? "close_cover" : "open_cover", z]),
        aria: (M.length ? "Close the " : "Open the ") + q + " in " + t.name
      });
    }
    if (R) {
      const q = $t(R), kt = y[R].state === "off";
      nt.push({
        key: "climate",
        kind: "control",
        tone: q.hvac_action === "cooling" ? "cool" : "heat",
        icon: Eo(R),
        label: Bt(R),
        value: kt ? "Off" : Ee(q.hvac_action || y[R].state) + " · " + Wa(q.temperature),
        short: kt ? "Off" : Wa(q.temperature),
        on: !kt,
        acts: [["climate", "toggle", R]],
        aria: "Turn " + Bt(R) + (kt ? " on" : " off")
      });
    }
    if (H) {
      const q = y[H].state === "on";
      nt.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Eo("", "mdi:air-humidifier"),
        label: Bt(H),
        value: q ? "On · " + $t(H).humidity + "%" : "Off",
        short: q ? $t(H).humidity + "%" : "Off",
        on: q,
        acts: [["humidifier", "toggle", H]],
        aria: "Turn " + Bt(H) + (q ? " off" : " on")
      });
    }
    if ($.length) {
      const q = Z || $[0], kt = y[q], z = kt.state === "playing";
      nt.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Eo(q),
        label: Bt(q),
        value: je(q),
        short: z ? "Playing" : kt.state === "paused" ? "Paused" : Ee(kt.state),
        on: z,
        acts: [["media_player", kt.state === "playing" || kt.state === "paused" ? "media_play_pause" : "toggle", q]],
        aria: (z ? "Pause " : "Play ") + Bt(q)
      });
    }
    return t.plugs.length && nt.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Eo("", "mdi:power-plug"),
      label: "Plugs",
      value: Ct.length ? Ct.length + " of " + t.plugs.length + " on" : "All off",
      short: Ct.length ? Ct.length + " on" : "Off",
      on: Ct.length > 0,
      acts: t.plugs.map((q) => ["switch", Ct.length ? "turn_off" : "turn_on", q]),
      aria: (Ct.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((q) => nt.push($t(q).device_class === "moisture" ? { key: "alert:" + q, kind: "alert", icon: Eo(q), label: "Water leak" } : { key: "note:" + q, kind: "note", icon: Eo(q), label: Bt(q) + " " + je(q).toLowerCase() })), nt;
  }
  const uo = (t, a) => {
    const i = (l) => t.actions.filter((p) => l.test(p));
    return {
      lights: t.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = i(/^media_player\./);
        return [l.find((p) => {
          var h;
          return ((h = y[p]) == null ? void 0 : h.state) === "playing";
        }) || l.find((p) => {
          var h;
          return ((h = y[p]) == null ? void 0 : h.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, Ar = (t, a, i) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Kn(t.acts) + '" aria-label="' + Q(t.aria) + '" aria-pressed="' + t.on + '">' + i + "</button>", fo = (t) => '<button class="tfAName" type="button" data-go="' + Q(t.id) + '" aria-label="Open ' + Q(t.name) + '">' + Q(t.name) + "</button>";
  function xa(t, a, i = !1) {
    const l = a.find((g) => g.key === "lights"), p = !!(l != null && l.on), h = "", f = '<span class="tfAreaGlyph"' + _e("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return i || !l ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + h + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + h + ' data-acts="' + Kn(l.acts) + '" aria-label="' + Q(l.aria) + '" aria-pressed="' + p + '">' + f + "</button>";
  }
  const Fe = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + Q(a.label) + "</span>").join(" "), Xs = (t) => t.readings.find((a) => $t(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => y[a]) || null, Js = (t, a) => {
    const i = Bt(a);
    return i.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Ee(i.slice(t.name.length + 1)) : i;
  };
  function _r(t) {
    const a = y[t], i = $t(t), l = t.split(".")[0], p = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(p)) {
      if (i.device_class === "temperature") return { text: Wa(p) };
      const h = i.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(p) + "%" } : { text: Ca(p, Number.isInteger(p) ? 0 : 1), unit: h };
    }
    if (l === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Wa(i.current_temperature ?? i.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : Tn(t) ? lo(a) + "%" : "On" };
    if (l === "cover") {
      const h = Ga(t);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? i.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Ee(a.state) } : { text: je(t) };
  }
  const Fo = (t, a, i) => {
    const l = i.find((g) => g.key === "temp"), p = i.find((g) => g.key === "hum"), h = $t(a), f = y[a].state === "off";
    return a.startsWith("climate.") ? [Js(t, a), f ? "Off" : Ee(h.hvac_action || y[a].state) + (h.temperature != null ? " · " + Wa(h.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && Js(t, a), l && l.id !== a && l.value, p && p.id !== a && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ad(t, a, i) {
    const l = i && _r(i), p = i ? Fo(t, i, a) : "", h = (g) => {
      const M = uo(t, g.key);
      return M.length === 1 ? M[0] : "group:" + t.id + ":" + g.key;
    }, f = a.filter((g) => g.kind === "control").slice(0, 4).map((g) => '<div class="tfATile' + (g.on ? " on" : "") + '" data-tone="' + g.tone + '"' + (g.light ? ' data-light style="' + g.light + '"' : "") + ">" + Ar(g, "tfIcon", g.icon) + '<button class="tfName" type="button" data-more="' + Q(h(g)) + '" aria-label="' + Q(t.name + " " + g.label.toLowerCase() + ", " + g.value + ". Open") + '"><span class="activityRowName">' + Q(g.label) + '</span><span class="activityRowMeta">' + Q(g.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + xa(t, a) + '<div class="tfATitle">' + fo(t) + Fe(a) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + Q(i) + '" aria-label="' + Q(Bt(i) + ", " + je(i) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + Q(l.text) + (l.unit ? '<span class="tfABigUnit">' + Q(l.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + Q(p) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function Ue(t) {
    const a = t.id === Pt, i = bn(t), l = Xs(t), p = l && _r(l), h = [...i.filter((f) => f.kind === "control"), ...i.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + Q(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + Q(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + ad(t, i, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + xa(t, i, !0) + '<span class="tfACName">' + Q(t.name) + '</span></div><span class="tfACMain">' + (p ? Q(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Aa = [];
  const Oo = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Aa.map(Ue).join("") + "</section></div>", ms = (t) => t.startsWith("room:"), Yi = (t) => Aa.find((a) => "room:" + a.id === t);
  function Er(t, a) {
    const i = bn(t), l = Xs(t), p = l && _r(l), h = l ? Fo(t, l, i) : "", f = p ? p.text + (p.unit ? " " + p.unit : "") : "", g = ($) => {
      const Z = uo(t, $.key);
      return Z.length === 1 ? Z[0] : "group:" + t.id + ":" + $.key;
    }, M = i.filter(($) => $.kind === "control").slice(0, 4), E = ($) => $.on && $.light ? ' data-light style="' + $.light + '"' : "", R = M.map(($) => '<button class="tfIcon' + ($.on ? " on" : "") + '" type="button" data-tone="' + $.tone + '"' + E($) + ' data-more="' + Q(g($)) + '" aria-label="' + Q($.label + ", " + $.value + ". Open its controls") + '">' + $.icon + "</button>"), H = M.map(($) => '<button class="tfRoomDev" type="button" data-more="' + Q(g($)) + '" aria-label="' + Q($.label + ", " + $.value + ". Open its controls") + '"><span class="tfIcon' + ($.on ? " on" : "") + '" data-tone="' + $.tone + '"' + E($) + ">" + $.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + Q($.label) + '</span><span class="activityRowMeta">' + Q($.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + Q(a) + '" data-go="' + Q(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + _e("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + Q(t.id) + '" aria-label="Open ' + Q(t.name) + '"><span class="activityRowName">' + Q(t.name) + "</span>" + (f || h ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + Q(f) + (h ? " · " : "") + "</span>" : "") + Q(h) + "</span>" : "") + "</button></div>" + (f ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + Q(f) + "</span>" + (h ? '<span class="tfRoomSub">' + Q(h) + "</span>" : "") + "</div>" : "") + (R.length ? '<div class="tfRoomDevices">' + R.join("") + '</div><div class="tfRoomHeads">' + H.join("") + "</div>" : "") + "</div>";
  }
  const Dr = () => [
    { key: "home", name: "Home", ids: we.homeVacuums },
    ...we.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], wn = (t, a, i) => t + " " + (t === 1 ? a : i), sa = () => (W.favourites ?? gt.favorite_entities ?? []).filter((t) => y[t]);
  function nd() {
    if (!ue) {
      const a = Object.entries(ta).sort((l, p) => p[1] - l[1]).map(([l]) => l), i = we.rooms.flatMap((l) => l.actions);
      ue = [.../* @__PURE__ */ new Set([...Jt, ...a, ...i.filter((l) => Oa(l).on), ...i])];
    }
    const t = sa();
    return ue.filter((a) => y[a] && y[a].state !== "unavailable" && !t.includes(a));
  }
  let Xn = !1;
  function gs() {
    if (!Xn || W.favSeeded || !we.rooms.length) return;
    const t = (i) => Object.keys(y).find((l) => Ni(l) && i(l)), a = [t((i) => i.startsWith("climate.")), t((i) => i.startsWith("cover.") && /curtain/.test(i)), t((i) => i.startsWith("valve.")), we.security.locks[0]];
    W = { ...W, favourites: [.../* @__PURE__ */ new Set([...W.favourites ?? gt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Na();
  }
  const Ka = () => W.suggest ?? !gt.hide_suggested_entities;
  function Qs() {
    const t = new Set(W.favHidden || []), a = sa().filter((l) => !t.has(l)), i = Ka() ? nd().filter((l) => !t.has(l) && Vo(l)) : [];
    return [...a, ...i].slice(0, Bh);
  }
  const od = (t) => {
    const a = sa().includes(t);
    return '<button class="tfStar" type="button" data-star="' + Q(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + Q(Bt(t)) + '">' + _h(a) + "</button>";
  };
  function Zi(t, { area: a = !1, star: i = !1, plain: l = !1, say: p = null, alert: h = !1 } = {}) {
    var Ct, nt, bt, q, kt, z;
    const f = l && ((kt = (Ct = o()) == null ? void 0 : Ct.devices) == null ? void 0 : kt[(q = (bt = (nt = o()) == null ? void 0 : nt.entities) == null ? void 0 : bt[t]) == null ? void 0 : q.device_id]), g = f && (f.name_by_user || f.name) || Bt(t), M = t.split(".")[0], E = !l && Ul.includes(M) ? Oa(t) : null, R = E ? E.on : ["on", "open", "playing"].includes((z = y[t]) == null ? void 0 : z.state), H = l ? null : E ? E.button : xh.includes(M) ? { act: ke(M, "toggle", t), label: "Turn " + Bt(t) + (R ? " off" : " on") } : M === "scene" || M === "script" ? { act: ke(M, "turn_on", t), label: "Run " + Bt(t) } : null, $ = (p ?? je(t)) + (a && Se.get(t) ? " · " + Se.get(t) : ""), Z = (E == null ? void 0 : E.icon) || Zn(t);
    return '<div class="activityRow' + (H ? " tfPlug" : "") + (R ? " on" : "") + (i ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + Q((a ? "fav:" : "row:") + t) + '" data-tone="' + (M === "light" ? "light" : (E == null ? void 0 : E.tone) || "blue") + '"' + ji(t) + ">" + (H && !i ? '<button class="tfIcon" type="button" data-act="' + H.act + '" aria-label="' + Q(H.label) + '"' + _e(t, Z) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + _e(t, Z) + "></div>") + '<button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(g + ", " + $ + ". More info") + '"><span class="activityRowName">' + Q(g) + '</span><span class="activityRowMeta">' + Q($) + "</span></button>" + (i ? od(t) : "") + "</div>";
  }
  const Rr = () => {
    var t;
    return y[(t = W.sources) == null ? void 0 : t.weather] ? W.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((a) => a.startsWith("weather."));
  };
  function tl() {
    var i;
    const t = (l) => Object.keys(y).filter((p) => p.startsWith("binary_sensor.") && l.includes($t(p).device_class));
    return ((i = Mt.alert_entities) != null && i.length ? Mt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(Gl).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => y[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[l.entity].state) }));
  }
  function id() {
    const t = Object.keys(Hd), a = /* @__PURE__ */ new Set(), i = [];
    return (gt.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      i.push(l);
    }), t.forEach((l) => {
      a.has(l) || i.push({ type: "summary", key: l });
    }), i;
  }
  function Br() {
    var bt;
    const t = ((bt = o()) == null ? void 0 : bt.entities) || {}, a = (q) => $t(q).device_class, i = Object.keys(y).filter((q) => q.startsWith("sensor.") && a(q) === "battery" || q.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(q))), l = we.rooms.flatMap((q) => q.plants.map((kt) => kt.id));
    if (!i.length && !l.length) return null;
    const p = (q) => {
      var z;
      const kt = (z = t[q]) == null ? void 0 : z.device_id;
      return !!kt && Object.keys(y).some((zt) => {
        var Ne;
        return zt.startsWith("binary_sensor.") && ((Ne = t[zt]) == null ? void 0 : Ne.device_id) === kt && a(zt) === "battery_charging" && y[zt].state === "on";
      });
    }, h = (q) => q.startsWith("vacuum.") ? $t(q).battery_level <= 20 && y[q].state !== "docked" : q.startsWith("binary_sensor.") ? a(q) === "battery" && y[q].state === "on" : parseFloat(y[q].state) <= 20 && !p(q), f = [...i, ...we.vacuums].filter((q) => y[q] && h(q)), g = [...i.filter((q) => a(q) === "problem" && y[q].state === "on"), ...l.filter((q) => {
      var kt;
      return ((kt = y[q]) == null ? void 0 : kt.state) === "problem";
    })], M = i.filter((q) => y[q].state === "unavailable"), E = [.../* @__PURE__ */ new Set([...f, ...g, ...M])], R = (q) => {
      const kt = parseFloat(y[q].state);
      return a(q) === "battery" && Number.isFinite(kt) ? kt : 101;
    }, H = [...l, ...we.vacuums, ...[...i].sort((q, kt) => R(q) - R(kt))].filter((q) => y[q] && !E.includes(q)), $ = /* @__PURE__ */ new Map();
    H.forEach((q) => {
      var z;
      const kt = ((z = we.areaOf) == null ? void 0 : z.call(we, q)) || "";
      $.set(kt, [...$.get(kt) || [], q]);
    });
    const Z = (q) => {
      const kt = we.rooms.findIndex((z) => z.id === q);
      return q === "" ? 1 / 0 : kt < 0 ? we.rooms.length : kt;
    }, Ct = [...$.keys()].sort((q, kt) => Z(q) - Z(kt)), nt = (q) => {
      var kt, z, zt, Ne;
      return ((kt = we.rooms.find((ve) => ve.id === q)) == null ? void 0 : kt.name) || ((Ne = (zt = (z = o()) == null ? void 0 : z.areas) == null ? void 0 : zt[q]) == null ? void 0 : Ne.name) || q;
    };
    return {
      value: [f.length && wn(f.length, "low battery", "low batteries"), g.length && wn(g.length, "problem", "problems"), M.length && wn(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: E, alert: !0 }, ...Ct.map((q) => ({ name: q ? nt(q) : Ct.length > 1 ? "Other devices" : "Devices", ids: $.get(q) }))].filter((q) => q.ids.length)
    };
  }
  function Nr() {
    var Sa;
    const t = we.rooms, a = we.security, i = (Xt, We) => Xt.actions.filter((ni) => We.test(ni)), l = (Xt) => t.map((We) => ({ name: We.name, ids: Xt(We) })).filter((We) => We.ids.length), p = t.flatMap((Xt) => Xt.lights), h = p.filter((Xt) => {
      var We;
      return ((We = y[Xt]) == null ? void 0 : We.state) === "on";
    }).length, f = t.map((Xt) => Xt.readings.find((We) => $t(We).device_class === "temperature")).filter(Boolean).map((Xt) => Number(y[Xt].state)).filter(Number.isFinite), [g, M] = [Ca(Math.min(...f)), Ca(Math.max(...f))], E = t.flatMap((Xt) => i(Xt, /^media_player\./)), R = E.filter((Xt) => {
      var We;
      return ((We = y[Xt]) == null ? void 0 : We.state) === "playing";
    }).length, H = tl(), $ = H.filter((Xt) => Xt.severity === "warning" && Xt.on).length, Z = a.locks.filter((Xt) => {
      var We;
      return ["unlocked", "jammed", "open"].includes((We = y[Xt]) == null ? void 0 : We.state);
    }).length, Ct = a.alarms.filter((Xt) => {
      var We;
      return ((We = y[Xt]) == null ? void 0 : We.state) === "disarmed";
    }).length, nt = $ ? wn($, "warning", "warnings") : null, bt = Z ? Z + " unlocked" : Ct ? Ct + " disarmed" : nt ? null : "All secure", q = Br(), kt = t.flatMap((Xt) => Xt.solar), z = kt.find((Xt) => Xt.endsWith("_power")), zt = {
      light: p.length && { value: h ? h + " on" : "All off", groups: l((Xt) => Xt.lights) },
      climate: f.length && { value: g === M ? g + "°" : g + " - " + M + "°", groups: l((Xt) => [...Xt.readings.filter((We) => ["temperature", "humidity"].includes($t(We).device_class)), ...i(Xt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [nt, bt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Xt) => Xt.ids.length) },
      media_players: E.length && { value: R ? R + " playing" : "No media playing", groups: l((Xt) => i(Xt, /^media_player\./)) },
      maintenance: q,
      energy: we.grid && { value: co(Number(((Sa = y[z]) == null ? void 0 : Sa.state) || 0) * 1e3 + Number(y[we.grid].state)) + " now", groups: [{ name: "Energy", ids: [...kt, we.grid] }] }
    }, Ne = [], ve = H.filter((Xt) => Xt.severity !== "warning" && Xt.on);
    return ve.length && Ne.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: wn(ve.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: ve.map((Xt) => Xt.entity) }] }), id().forEach((Xt) => {
      Xt.type !== "summary" ? Ne.push({ key: "path:" + Xt.path, name: Xt.label || Xt.path, icon: Xt.icon || "mdi:link-variant", colour: "", value: "" }) : !Xt.hidden && zt[Xt.key] && !(W.hiddenSums || []).includes(Xt.key) && Ne.push({ key: Xt.key, ...Hd[Xt.key], ...zt[Xt.key] });
    }), Ne;
  }
  const Ki = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + Q(t.key) + '" data-k="sum:' + Q(t.key) + '" aria-label="' + Q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + _e(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + Q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + Q(t.value) + "</div>" : "") + "</div></div>";
  function el(t) {
    const a = sa();
    W = { ...W, favourites: a.includes(t) ? a.filter((i) => i !== t) : [...a, t], favHidden: (W.favHidden || []).filter((i) => i !== t) }, Na(), Ma();
  }
  function $i(t) {
    document.querySelector("home-assistant") && (j.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ho(t, a) {
    if (t.startsWith("path:")) {
      $i(t.slice(5));
      return;
    }
    br("summary:" + t, a);
  }
  async function vs() {
    const t = (f) => Promise.resolve().then(() => N(f)).catch(() => null), [a, i, l, p] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Xc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), h = (a == null ? void 0 : a.value) || {};
    W = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, gt = (i == null ? void 0 : i.value) || {}, Mt = (l == null ? void 0 : l.value) || {}, Jt = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], ue = null, Object.keys(y).length && Ma(), Ji(), Xn = !0, gs();
  }
  const Xi = "HomeCore";
  async function Ji() {
    var l, p, h;
    const t = location.pathname.split("/")[1], a = W.named || [];
    if (!((p = (l = o()) == null ? void 0 : l.user) != null && p.is_admin) || !t || a.includes(t)) return;
    const i = () => {
      W = { ...W, named: [...a, t] }, Na();
    };
    try {
      const f = (h = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((E) => E.url_path === t);
      if (!f || f.mode === "yaml") return;
      if (f.title === Xi) {
        i();
        return;
      }
      const g = await N({ type: "lovelace/config", url_path: t }), M = ((g == null ? void 0 : g.views) || []).flatMap((E) => [...E.cards || [], ...(E.sections || []).flatMap((R) => R.cards || [])]);
      if (!M.length || !M.every((E) => (E == null ? void 0 : E.type) === "custom:move-assistant-card" && E.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: Xi }), i();
    } catch {
    }
  }
  let mo = null, Wo = 0, Qi = !1;
  const _n = (t) => {
    const a = t.split(".")[0], i = $t(t).device_class;
    return Rh.includes(a) && (a !== "binary_sensor" || Gl.includes(i) || !!ip[i]);
  }, go = (t) => t.startsWith("binary_sensor.") ? ip[$t(t).device_class] : null;
  async function rd() {
    var t;
    if (!(Qi || Date.now() - Wo < 30 * 1e3)) {
      Qi = !0, Wo = Date.now();
      try {
        const a = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(_n), i = a.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        mo = Array.isArray(i) ? i.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        mo = null;
      }
      Qi = !1, Ma();
    }
  }
  function sd() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = (p) => {
      if (!y[p.entity_id] || !_n(p.entity_id) || !Vo(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (go(p.entity_id)) {
        const f = a.get(p.entity_id);
        p.state === "on" ? (!f || p.when > f.when + 1) && a.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : f && !f.cleared && p.when > f.when && (f.cleared = p.when);
        return;
      }
      const h = t.get(p.entity_id);
      (!h || p.when > h.when + 1) && t.set(p.entity_id, p);
    };
    [...mo || []].sort((p, h) => p.when - h.when).forEach(i);
    const l = mo ? Wo / 1e3 - 5 : 0;
    return Object.keys(y).forEach((p) => {
      var g;
      const h = y[p], f = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      f > l && i({ entity_id: p, state: h.state, when: f, context_user_id: (g = h.context) == null ? void 0 : g.user_id });
    }), [...t.values(), ...a.values()].sort((p, h) => h.when - p.when).slice(0, Nh);
  }
  function gi(t) {
    var l;
    const a = t.context_user_id && Object.keys(y).find((p) => p.startsWith("person.") && $t(p).user_id === t.context_user_id);
    if (a) return Bt(a);
    const i = (l = o()) == null ? void 0 : l.user;
    return i && t.context_user_id === i.id ? i.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function tr(t) {
    const a = t.entity_id.split(".")[0], i = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || Ee(i).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || Ee(i).toLowerCase() : a === "binary_sensor" ? i === "on" ? "opened" : "closed" : a === "climate" ? i === "off" ? "turned off" : "set to " + Ee(i).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || Ee(i).toLowerCase() : a === "alarm_control_panel" ? (op[i] || Ee(i)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || Ee(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : Ee(i).toLowerCase();
  }
  function Pr(t) {
    const a = t.entity_id, i = t.alarm && go(a), l = Bt(a) + " " + (i ? i[0] : tr(t)), p = i ? Ta(t.when * 1e3) + (t.cleared ? " · " + i[1] + " since " + Ta(t.cleared * 1e3) : "") : [gi(t), Ta(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + _e(a, Zn(a)) + '></div><button class="tfName" type="button" data-more="' + Q(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + Q(l + ", " + p + ". More info") + '"><span class="activityRowName">' + Q(l) + '</span><span class="activityRowMeta">' + Q(p) + "</span></button></div>";
  }
  let qo = null, al = 0;
  const bs = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function ws() {
    var a;
    if (Date.now() - al < 5 * 60 * 1e3) return;
    al = Date.now();
    const t = [];
    try {
      const i = ((a = await N({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (p) => i.filter((h) => h.type === p).flatMap((h) => p === "grid" ? (h.flow_from || []).map((f) => f.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [p, h, f] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!f.length) continue;
        const g = await Promise.all(f.map((M) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((E) => Number(E == null ? void 0 : E.change) || 0, () => 0)));
        t.push({ key: p, name: h, id: f[0], ids: f, value: g.reduce((M, E) => M + E, 0), unit: $t(f[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    qo = t, Ma();
  }
  let Jn = null, xs = [];
  function nl() {
    var h;
    const t = xs = qo != null && qo.length ? qo : bs.map(([f, g, M, E]) => {
      const R = "sensor.made_up_energy_" + f;
      return y[R] = { entity_id: R, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: E, state_class: "total_increasing" } }, { key: f, name: g, id: R, value: M, unit: E };
    });
    jt.clear(), t.some((f) => f.id === Jn) || (Jn = t[0].id);
    const a = t.map((f) => {
      const g = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, M = Ph[f.key], E = f.id === Jn;
      return jt.set(f.id, { name: f.name, text: g, icon: M }), '<div class="activityRow tap' + (E ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + Q(f.id) + '" aria-pressed="' + E + '" aria-label="' + Q(f.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + _e("", M, f.name) + '></div><div><div class="activityRowName">' + Q(f.name) + '</div><div class="activityRowMeta">' + Q(g) + "</div></div></div>";
    }), i = t.find((f) => f.id === Jn), l = (((h = Oe().opts.energy) == null ? void 0 : h.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + Q(i.id) + '" role="img" aria-label="' + Q(i.name) + ', last 24 hours"></svg></div>';
    return hn("dash:energy", 0, "Energy today", a, p, Nr().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function _a(t) {
    const a = S.querySelector(".tfDash-energy"), i = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !i || t === Jn || (Jn = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const p = l.dataset.energyPick === t;
      l.classList.toggle("picked", p), l.setAttribute("aria-pressed", String(p));
    }), i.dataset.graph = t, i.dataset.drawn = "", qe.set("dash:energy", nl()), wl(!0));
  }
  const vi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, jo = /* @__PURE__ */ new Map();
  async function ld(t) {
    const a = /* @__PURE__ */ new Date(), i = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), p = a.getMinutes() / 60, h = Array.from({ length: 24 }, (g, M) => M <= l ? 0 : null);
    if (!t.ids) {
      const g = vi[t.key] || vi.electricity, M = g.map((R, H) => H < l ? R : H === l ? R * p : 0), E = M.reduce((R, H) => R + H, 0) || 1;
      return h.map((R, H) => R == null ? null : t.value * M[H] / E);
    }
    const f = jo.get(t.id);
    if (f && f.day === i && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const g = await N({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((R) => ((g == null ? void 0 : g[R]) || []).forEach((H) => {
        const $ = typeof H.start == "number" ? H.start : Date.parse(H.start), Z = new Date($).getHours();
        $ >= i && Z < l && (h[Z] += Number(H.change) || 0);
      }));
      const M = new Date(a).setMinutes(0, 0, 0), E = await Promise.all(t.ids.map((R) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: R, fixed_period: { start_time: new Date(M).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((H) => Number(H == null ? void 0 : H.change) || 0, () => 0)));
      h[l] = E.reduce((R, H) => R + H, 0);
    } catch {
    }
    return jo.set(t.id, { at: Date.now(), day: i, hours: h }), h;
  }
  async function ol(t, a) {
    const i = await ld(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), p = Math.max(60, t.clientHeight || 130), h = 18, f = p - 18, g = l / 24, M = g * 0.72, E = (/* @__PURE__ */ new Date()).getHours(), R = i.map((bt) => bt ?? 0), H = Math.max(0, ...R), $ = (bt) => f - (H > 0 ? bt / H * (f - h) : 0), Z = (bt) => bt.toLocaleString(void 0, { maximumFractionDigits: bt < 10 ? 2 : 1 }) + " " + a.unit, Ct = (bt) => String(bt).padStart(2, "0") + ":00", nt = H > 0 ? R.indexOf(H) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + p), t.setAttribute("aria-label", a.name + " today by the hour: " + Z(a.value) + (nt >= 0 ? ", most " + Z(H) + " at " + Ct(nt) : "")), t.innerHTML = [h, (h + f) / 2, f].map((bt) => '<line x1="0" x2="' + l + '" y1="' + bt + '" y2="' + bt + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((bt, q) => bt > 0 ? '<rect x="' + (q * g + (g - M) / 2).toFixed(1) + '" y="' + $(bt).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (f - $(bt)).toFixed(1) + '" rx="2" fill="' + (q === E ? "var(--primary)" : "var(--text)") + '"' + (q === E ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((bt) => '<text x="' + (bt * g).toFixed(1) + '" y="' + (p - 3) + '">' + String(bt).padStart(2, "0") + "</text>").join("") + (nt >= 0 ? '<text x="0" y="11">Most: ' + Q(Z(H)) + " at " + Ct(nt) + "</text>" : "");
  }
  function dd(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((i, l) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function il(t) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, i] = t.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const l = i.getTotalLength();
    i.animate([{ strokeDasharray: l, strokeDashoffset: l }, { strokeDasharray: l, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let zo = null, ys = 0;
  const Vo = (t) => !t.startsWith("light.") || Ih.includes((Se.get(t) || "").toLowerCase()), Ir = () => Math.max(2, eo((S == null ? void 0 : S.clientWidth) || 0).n), In = (t) => {
    const a = Oa(t);
    return a.sections.map((i, l) => i && (a.parts || [])[l]).filter(Boolean);
  }, er = (t) => In(t).slice(0, xi(t) - 1);
  function ks(t) {
    const a = Oe().tiles;
    if (a) return a.filter((l) => y[l] || Yi(l));
    if (!zo) {
      const l = (p) => {
        var h;
        return (((h = y[p]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (ta[p] || 0);
      };
      zo = {
        lights: we.rooms.flatMap((p) => p.lights).filter((p) => {
          var h;
          return Vo(p) && ((h = y[p]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((p, h) => l(h) - l(p) || Bt(p).localeCompare(Bt(h))),
        climates: we.rooms.flatMap((p) => p.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const i = zo.climates.filter((l) => y[l]).slice(0, t > 3 ? 2 : 1);
    return [...zo.lights.filter((l) => y[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const rl = (t, a, i, l) => (p) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + i + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Ms(t, a) {
    var h, f;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + Q(((f = (h = o()) == null ? void 0 : h.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + rl("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: a.map((g) => ({ key: "sum:" + g.key, html: Ki(g) })) }), Aa.length && t.push({ key: "areas", html: Oo(0) });
    const i = Qs();
    i.length && t.push({ key: "favs", wrap: rl("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((g) => ({ key: "fav:" + g, html: Zi(g, { area: !0 }) })) });
    const l = sd();
    t.push({ key: "dash:act", html: hn("dash:act", 0, "Activity", l.length ? l.map(Pr) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: nl() });
    const p = Ir();
    return ys = p, ks(p >= 3 ? p : p * 2).forEach((g) => t.push({
      key: "dash:tile:" + g,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + Q(g) + '">' + M + "</div>",
      tiles: [{ key: g, html: ms(g) ? Er(Yi(g), g) : Yt(g, !1, er(g)) }]
    })), rd(), ws(), t;
  }
  const ar = 252, Qe = 16, Go = 200, cd = Math.round(ar * 1.25), sl = 60, Hn = sl + Qe, nr = 3, bi = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Qn = ["wx", "favs", "act", "energy", "avg"], Uo = ["XS", "S", "M", "L", "XL"], Yo = Uo.length, or = ["Narrow", "Wide", "Really wide"], wi = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, to = (t) => !t.includes(".") || !y[t] || t.startsWith("light.") && ee(t) ? Yo : Math.min(Yo, In(t).length + 1), xi = (t) => {
    const a = Oe().opts[t] || {}, i = to(t), l = Number(a.h) || (a.tall ? 5 : wi[t] || ll);
    return Math.max(1, Math.min(i, l));
  }, ll = 2, Hr = 90, vo = 56, ya = (t) => {
    var a;
    return bi[t] || (t.startsWith("room:") ? ((a = Aa.find((i) => "room:" + i.id === t)) == null ? void 0 : a.name) || "Area" : Bt(t));
  }, Zo = 409, yi = 128;
  let $a = !1, Te = null, En = null, Ss = !1, Fn = /* @__PURE__ */ new Map(), bo = 0, Ea = 0;
  const wo = ["title", "sums"], eo = (t) => {
    const a = Math.max(1, Math.floor((t + Qe) / (Go + Qe)));
    return { n: a, w: Math.max(1, Math.min(cd, Math.floor((t - (a - 1) * Qe) / a))) };
  }, Oe = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...W.dash || {} }, a = me.filter((i) => !(t.known || []).includes(i) && !t.hidden.includes(i));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function ao(t) {
    W = { ...W, dash: { ...t, known: me } }, Na();
  }
  function Ko() {
    const t = (a) => S.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", na.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", na.avg, 2],
      ...me.map((a) => [a, na[a], 1]),
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, i, l, p = !1]) => ({ key: a, el: i, span: l, tile: p }));
  }
  const dl = (t, a, i) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && Oe().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((Zo + Math.max(0, Aa.length - 1) * (yi + Qe) + Qe) / (i + Qe))) : Math.min(a, Oe().spans[t.key] ?? t.span);
  }, cl = (t) => xi(t.key);
  function pl(t, a, i = null) {
    const l = Oe().cells, p = t.every((g) => !l[g.key] || l[g.key].col + g.cols <= a), h = (g) => l[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), E = (nt, bt, q, kt) => {
        for (let z = bt; z < bt + kt; z++) for (let zt = nt; zt < nt + q; zt++) if (g.has(zt + "," + z)) return !1;
        return !0;
      }, R = (nt, bt, q) => {
        for (let kt = q; kt < q + nt.rows; kt++) for (let z = bt; z < bt + nt.cols; z++) g.add(z + "," + kt);
        M.set(nt.key, { col: bt, row: q, cols: nt.cols, rows: nt.rows });
      }, H = (nt, bt, q) => {
        for (bt = Math.max(0, Math.min(a - nt.cols, bt)), q = Math.max(0, q); !E(bt, q, nt.cols, nt.rows); ) q++;
        R(nt, bt, q);
      }, $ = (nt) => {
        for (let bt = 0; ; bt++) for (let q = 0; q <= a - nt.cols; q++) if (E(q, bt, nt.cols, nt.rows)) {
          R(nt, q, bt);
          return;
        }
      };
      i && H(i, Te.col, Te.row);
      const Z = t.filter((nt) => nt !== i), Ct = (nt, bt) => h(nt).row - h(bt).row || h(nt).col - h(bt).col;
      return p ? (Z.filter((nt) => l[nt.key]).sort(Ct).forEach((nt) => H(nt, l[nt.key].col, l[nt.key].row)), Z.filter((nt) => !l[nt.key]).forEach($), M) : ([...Z].sort(Ct).forEach($), M);
    })();
  }
  function Fr(t, a) {
    const i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), p = (h, f, g) => {
      for (let M = f; M < f + g.rows; M++) for (let E = h; E < h + g.cols; E++) if (i.has(E + "," + M)) return !1;
      return !0;
    };
    return t.forEach((h) => {
      for (let f = 0; ; f++) {
        let g = 0;
        for (; g <= a - h.cols && !p(g, f, h); ) g++;
        if (!(g > a - h.cols)) {
          for (let M = f; M < f + h.rows; M++) for (let E = g; E < g + h.cols; E++) i.add(E + "," + M);
          l.set(h.key, { col: g, row: f, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), l;
  }
  function Ia() {
    const t = Oe(), a = new Set(t.hidden), i = Ko().filter((f) => !wo.includes(f.key));
    let l = Fn;
    if (!l.size) {
      const f = t.pegs || 4, g = i.filter((M) => !a.has(M.key));
      g.forEach((M) => {
        M.cols = dl(M, f, ar), M.rows = cl(M) ?? ll;
      }), l = pl(g, f);
    }
    const p = (f) => !a.has(f.key) && l.get(f.key) || { row: 1e9, col: 0 };
    i.sort((f, g) => p(f).row - p(g).row || p(f).col - p(g).col);
    const h = (t.phone || []).map((f) => i.find((g) => g.key === f && !a.has(f))).filter(Boolean);
    return [...h, ...i.filter((f) => !h.includes(f))];
  }
  const Xa = () => {
    const t = Ia();
    t.forEach((a, i) => a.el.style.setProperty("--o", String(3 + i))), ul([...Ko().filter((a) => wo.includes(a.key)), ...t].map((a) => a.el));
  };
  function ul(t) {
    if (Te) return;
    const a = n.activeElement;
    let i = null;
    for (const l of new Set(t.map((p) => {
      for (; p && p.parentElement !== S; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = i ? i.nextSibling : S.querySelector(":scope > [data-tf]");
      if (l !== p)
        try {
          S.moveBefore ? S.moveBefore(l, p) : S.insertBefore(l, p);
        } catch {
          S.insertBefore(l, p);
        }
      i = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const ki = (t, a) => ao({ ...t, cells: a, pegs: eo(S.clientWidth).n });
  function Da() {
    var kt;
    if (!w || !S) return;
    const t = S.clientWidth, a = t < 2 * ar + Qe, i = m.classList.contains("tfDash"), { n: l, w: p } = a ? { n: 2, w: Math.floor((t - Qe) / 2) } : eo(t);
    ne.classList.add("tfPegs"), ne.style.setProperty("--peg-n", l), ne.style.setProperty("--peg-w", p + "px");
    const h = new Set(Oe().hidden);
    me.forEach((z) => {
      var zt;
      return (zt = na[z]) == null ? void 0 : zt.classList.toggle("tfNotAdded", h.has(z) && !(Te != null && Te.fromTray && Te.key === z));
    }), m.classList.toggle("tfBoard", i), m.classList.toggle("tfEditing", i && $a && !a);
    const f = c("dashEditNav");
    f && (f.hidden = !i || a, f.classList.toggle("active", $a), f.setAttribute("aria-pressed", String($a)), f.setAttribute("aria-label", $a ? "Done editing" : "Edit the dashboard"), f.title = $a ? "Done" : "Edit", f.innerHTML = $a ? Ah : np);
    const g = i ? Ko() : [];
    if (!i) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((z) => {
        z.classList.remove("tfBoardItem", "tfBoardHidden"), z.style.left = z.style.top = z.style.width = z.style.height = "";
      }), (kt = S.querySelector(".tfDash-act > .activityRows")) == null || kt.style.removeProperty("max-height"), Cs(!1), m.classList.contains("tfDash") && Xa(), fa();
      return;
    }
    S.style.setProperty("--peg-w", p + "px");
    const M = new Set(Oe().hidden), E = p + Qe;
    Te != null && Te.fromTray && M.delete(Te.key), g.forEach((z) => z.el.classList.toggle("tfBoardHidden", M.has(z.key)));
    const R = g.filter((z) => !M.has(z.key) && getComputedStyle(z.el).display !== "none");
    let H = 0;
    R.filter((z) => wo.includes(z.key)).forEach((z) => {
      z.el.classList.add("tfBoardItem"), Object.assign(z.el.style, { width: t + "px", height: "", left: "0px", top: H + "px" });
      const zt = z.key === "sums" && z.el.querySelector(".tfDash-bar"), Ne = zt ? zt.querySelectorAll(".activityRow").length : 0;
      zt && (zt.style.maxWidth = "none");
      for (let ve = 1; zt && ve <= Ne && (zt.style.setProperty("--bar-cols", String(Math.ceil(Ne / ve))), !(zt.offsetWidth <= t)); ve++)
        ;
      zt && (zt.style.maxWidth = ""), H += z.el.offsetHeight + Qe;
    }), Ea = H;
    const $ = R.filter((z) => !wo.includes(z.key));
    $.forEach((z) => {
      z.cols = dl(z, l, p), z.el.classList.add("tfBoardItem"), z.el.style.width = (z.cols === l ? t : z.cols * p + (z.cols - 1) * Qe) + "px", z.el.style.height = "", z.rows = cl(z) ?? Math.max(1, Math.ceil((z.el.offsetHeight + Qe - 6) / Hn));
    });
    const Z = Te && $.find((z) => z.key === Te.key), Ct = a && Ia().map((z) => z.key), nt = (z) => Ct.includes(z.key) ? Ct.indexOf(z.key) : -1, bt = a ? Fr([...$].sort((z, zt) => nt(z) - nt(zt)), l) : pl($, l, Z);
    bt.forEach((z) => Object.assign(z, { x: z.cols === l ? 0 : z.col * E, y: Ea + z.row * Hn, w: z.cols === l ? t : z.cols * p + (z.cols - 1) * Qe, h: z.rows * Hn - Qe })), $.forEach((z) => {
      const zt = bt.get(z.key);
      z.el.style.height = zt.h + "px", z.el.dataset.rows = xi(z.key), z.el.toggleAttribute("data-narrow", !a && zt.cols === 1 && l > 1), z.el.dataset.cols = zt.cols, z.el.classList.contains("tfDac") && z.el.style.setProperty("--tf-dac-pad", zt.h - Hr + "px"), !(z === Z && !Te.fromTray) && (z.el.style.left = zt.x + "px", z.el.style.top = zt.y + "px");
    }), a || (Fn = bt), ul([...R.filter((z) => wo.includes(z.key)), ...$.slice().sort((z, zt) => bt.get(z.key).row - bt.get(zt.key).row || bt.get(z.key).col - bt.get(zt.key).col)].map((z) => z.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([z, zt]) => {
      const Ne = bt.get(z), ve = Ne && S.querySelector(zt), Sa = ve == null ? void 0 : ve.querySelector(":scope > .activityRows"), Xt = ve == null ? void 0 : ve.querySelector(":scope > .activityHeader");
      if (!Sa || !Xt) return;
      const We = Sa.getBoundingClientRect().top - ve.getBoundingClientRect().top, ni = Ne.rows === 1 ? Ne.h : Math.floor(Ne.h - We - parseFloat(getComputedStyle(ve).paddingBottom)), Dl = Math.max(1, Math.floor(ni / vo));
      Sa.style.setProperty("--fill-row", (ni / Dl).toFixed(2) + "px"), Sa.style.maxHeight = ni + "px";
    }), bo = Math.max(0, ...[...bt.values()].map((z) => z.row + z.rows));
    let q = Ea + bo * Hn - Qe;
    q = Cs($a && !a, $, bt, q, l, p), S.style.height = q + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), g.forEach((z) => ir.observe(z.el)), wl(), fa();
  }
  const Mi = () => {
    Ss || (Ss = !0, requestAnimationFrame(() => {
      Ss = !1, Da();
    }));
  }, ir = new ResizeObserver(() => {
    Te || Mi();
  });
  function Cs(t, a = [], i = /* @__PURE__ */ new Map(), l = 0, p = 1, h = ar) {
    S.querySelectorAll(".tfEditChips").forEach((R) => {
      (!t || !R.closest(".tfBoardItem")) && R.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((R) => R.remove()), S.querySelectorAll(".tfBoardItem").forEach((R) => [...R.children].forEach((H) => {
      H.classList.contains("tfEditChips") || H.toggleAttribute("inert", t);
    }));
    let f = S.querySelector(".tfBoardCells"), g = S.querySelector(".tfBoardLand");
    if (!t)
      return f == null || f.remove(), g == null || g.remove(), On(), l;
    const M = bo + nr;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), S.prepend(f)), f.style.top = Ea + "px", f.dataset.size !== p + "x" + M + "x" + h && (f.dataset.size = p + "x" + M + "x" + h, f.style.gridTemplateColumns = "repeat(" + p + "," + h + "px)", f.innerHTML = "<i></i>".repeat(p * M)), l = Math.max(l, Ea + M * Hn - Qe), a.forEach((R) => {
      const H = R.el;
      !H || H.querySelector(":scope > .tfEditChips") || H.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Fd + '</span><button class="tfEditChip" type="button" data-board-more="' + Q(R.key) + '" aria-label="' + Q(ya(R.key)) + ' options" aria-haspopup="menu">' + Th + "</button></div>");
    }), Te && i.has(Te.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(g));
      const R = i.get(Te.key);
      Object.assign(g.style, { left: R.x + "px", top: R.y + "px", width: R.w + "px", height: R.h + "px" });
    } else g == null || g.remove();
    const E = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (E) {
      const R = E.getBoundingClientRect();
      E.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...E.querySelectorAll('[data-k^="fav:"]')].map((H) => {
        const $ = H.getBoundingClientRect(), Z = H.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + Q(Z) + '" aria-label="Hide ' + Q(Bt(Z)) + ' from the dashboard" style="left:' + Math.round($.right - R.left - 42) + "px;top:" + Math.round($.top - R.top + ($.height - 32) / 2) + 'px">' + tp + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let Or = "";
  function Ts(t) {
    $a = t, t || (Te = null, yn = Dn = !1, On()), Da(), t ? Or = JSON.stringify(W) : Or && JSON.stringify(W) !== Or && Ra("Changes saved");
  }
  function pd(t, a) {
    var bt, q;
    On();
    const i = Fn.get(t), { n: l } = eo(S.clientWidth), p = Oe(), h = p.spans[t] ?? (ms(t) ? 1 : 2);
    if (!i) return;
    const f = i.cols >= l, g = (kt, z, zt) => '<button type="button" role="menuitem" data-board-act="' + kt + '"' + (zt ? " disabled" : "") + ">" + z + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", ya(t) + " options");
    const E = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), R = to(t), H = xi(t), $ = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Uo.map((kt, z) => '<button type="button" role="menuitemradio" aria-checked="' + (z + 1 === H) + '" aria-label="' + kt + ", " + (z + 1) + (z ? " rows" : " row") + '" data-board-act="h:' + (z + 1) + '"' + (z < R ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>", Z = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], Ct = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Z.map(([kt, z, zt]) => '<button type="button" role="menuitemradio" aria-checked="' + (zt && (z === "full" ? i.cols === l : i.cols === z && !(z === l && p.spans.areas === "full"))) + '" aria-label="' + kt + (z === "full" ? "" : ", " + z + " columns") + '" data-board-act="w:' + z + '"' + (zt ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>" : Qn.includes(t) || ms(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + or.map((kt, z) => '<button type="button" role="menuitemradio" aria-checked="' + (z + 1 === Math.min(h, l)) + '" aria-label="' + kt + ", " + (z + 1) + (z ? " columns" : " column") + '" data-board-act="w:' + (z + 1) + '"' + (z < l ? "" : " disabled") + ">" + kt + "</button>").join("") + "</div></div>" : "";
    M.innerHTML = $ + Ct + (t === "energy" ? g("graph", (((bt = p.opts.energy) == null ? void 0 : bt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", f || i.col === 0) + g("right", "Move right", f || i.col + i.cols >= l) + g("up", "Move up", i.row <= 0) + g("down", "Move down") + (E ? g("remove", "Remove") : g("hide", "Hide")), S.appendChild(M);
    const nt = Math.min(i.x + i.w - M.offsetWidth, S.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, nt) + "px", top: i.y + 28 + "px" }), En = { key: t, menu: M, opener: a }, (q = M.querySelector("button:not([disabled])")) == null || q.focus();
  }
  function On(t) {
    if (!En) return;
    const { menu: a, opener: i } = En;
    En = null, a.remove(), t && (i == null || i.focus());
  }
  const Ja = () => Object.fromEntries([...Fn].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Wn(t, a) {
    var f, g;
    if (a === "remove") {
      On(), rr(t);
      return;
    }
    const i = W, l = Oe(), p = Ja(), h = p[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((f = l.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (p[t] = { ...h, col: h.col - 1 }), a === "right" && (p[t] = { ...h, col: h.col + 1 }), a === "up" && (p[t] = { ...h, row: h.row - 1 }), a === "down" && (p[t] = { ...h, row: h.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Te = { key: t, col: p[t].col, row: p[t].row }), ki(l, p), Te && (Da(), Te = null, ki(Oe(), Ja())), On(), a === "graph" && (qe.delete("dash:energy"), Ma()), a.startsWith("h:") && t.includes(".") && Ma(), Da(), a !== "hide" ? (g = S.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || g.focus() : Ra(ya(t) + " hidden", Gr(i));
  }
  const Wr = (t) => {
    var a;
    return me.includes(t) && !(((a = W.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function $o(t) {
    const a = Oe(), i = ya(t) + Wr(t);
    ao({ ...a, hidden: a.hidden.filter((l) => l !== t) }), Da(), Ra(i);
  }
  const qr = () => Oe().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !Oe().hidden.includes(t));
  function Ls(t, a) {
    const i = Oe();
    ki({ ...i, tiles: t, hidden: i.hidden.filter((l) => !l.includes(".")) }, a), Ma(), fa();
  }
  const Qa = (t) => {
    Ls([...qr().filter((a) => a !== t), t], Ja()), Ra(ya(t) + " added"), ml(t);
  }, rr = (t) => {
    const a = W, i = Ja();
    delete i[t], Ls(qr().filter((l) => l !== t), i), Ra(ya(t) + " removed", Gr(a));
  };
  let sr = 0;
  function Ra(t, a = null) {
    var f;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(sr), i.classList.remove("show", "withAction"), a();
      }), i.appendChild(g);
    }
    const l = m.getBoundingClientRect(), p = (f = n.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), h = te.classList.contains("open") && !Ha ? Math.min(l.right, te.getBoundingClientRect().left) : l.right;
    i.style.left = (l.left + h) / 2 + "px", i.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!a), clearTimeout(sr), sr = setTimeout(() => i.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const fl = 700, Xo = 1e3, qa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  qa.setAttribute("role", "tooltip"), qa.setAttribute("aria-hidden", "true"), m.appendChild(qa);
  let xn = null, xo = 0, Si = 0, jr = -1 / 0;
  const As = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, _s = (t) => {
    for (let a = t; a && a !== m; a = a.parentElement) if (As(a)) return a;
    return null;
  };
  function qn(t, a) {
    clearTimeout(xo), clearTimeout(Si);
    const i = () => {
      if (!t.isConnected) return;
      xn = t, qa.textContent = a, qa.hidden = !1;
      const l = t.getBoundingClientRect(), p = qa.getBoundingClientRect(), h = l.top - p.height - 8 >= 8 ? l.top - p.height - 8 : l.bottom + 8;
      qa.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, l.left + l.width / 2 - p.width / 2)) + "px", qa.style.top = h + "px";
    };
    !qa.hidden || performance.now() - jr < Xo ? i() : xo = setTimeout(i, fl);
  }
  function zr() {
    clearTimeout(xo), clearTimeout(Si), qa.hidden || (jr = performance.now()), qa.hidden = !0, xn = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (qa.contains(t.target)) {
      clearTimeout(Si);
      return;
    }
    const a = _s(t.target);
    if (a && Et.names === "scroll" && a.matches(Vr)) {
      yo(a);
      return;
    }
    if (a) {
      a !== xn ? qn(a, a.textContent.trim()) : clearTimeout(Si);
      return;
    }
    clearTimeout(xo), clearTimeout(Si), Si = setTimeout(zr, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let i = [a, ...a.querySelectorAll("*")].filter(As);
    Et.names === "scroll" && (i.filter((p) => p.matches(Vr)).forEach(yo), i = i.filter((p) => !p.matches(Vr))), i.length && qn(a, i.map((p) => p.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === xn && zr();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !qa.hidden && (t.stopPropagation(), zr());
  }, !0), window.addEventListener("scroll", () => {
    (!qa.hidden || xo) && zr();
  }, { capture: !0, passive: !0 });
  const Vr = ".activityRowName,.activityRowMeta", lr = /* @__PURE__ */ new WeakSet();
  function yo(t) {
    var i;
    if (Et.names !== "scroll" || lr.has(t) || t.closest("[inert]") || (i = window.matchMedia) != null && i.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    lr.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((l) => l.getAnimations()).map((l) => l.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const l = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (l < 2) {
        lr.delete(t);
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
        t.style.textOverflow = "", lr.delete(t);
      };
    }, 600);
  }
  const hl = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (hl.unobserve(a.target), yo(a.target));
  }), { threshold: 1 });
  let ko = !1;
  new MutationObserver(() => {
    ko || Et.names !== "scroll" || (ko = !0, setTimeout(() => {
      ko = !1, n.querySelectorAll(Vr).forEach((t) => {
        !t.dataset.glided && As(t) && (t.dataset.glided = "1", hl.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Gr = (t) => () => {
    W = t, Na(), Ma(), Da(), fa();
  };
  function ml(t) {
    const a = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var f;
      const i = a();
      if (!i) return;
      const l = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, p = i.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && i.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const h = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      i.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, Ci(t) ? 260 : 0);
  }
  function Ci(t) {
    const a = Fn.get(t);
    if (!a || !te.classList.contains("open") || Ha) return !1;
    const { n: i, w: l } = eo(S.clientWidth), p = te.getBoundingClientRect().left - S.getBoundingClientRect().left, h = (M) => M * (l + Qe) + a.cols * l + (a.cols - 1) * Qe <= p;
    if (h(a.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    Fn.forEach((M, E) => {
      if (E !== t) for (let R = M.row; R < M.row + M.rows; R++) for (let H = M.col; H < M.col + M.cols; H++) f.add(H + "," + R);
    });
    const g = (M, E) => {
      for (let R = E; R < E + a.rows; R++) for (let H = M; H < M + a.cols; H++) if (f.has(H + "," + R)) return !1;
      return !0;
    };
    for (let M = 0; M <= bo; M++) for (let E = 0; E + a.cols <= i && h(E); E++)
      if (g(E, M))
        return ki(Oe(), { ...Ja(), [t]: { col: E, row: M } }), Da(), !0;
    return !1;
  }
  const Ti = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, te = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  te.setAttribute("aria-label", "Edit the dashboard"), te.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(te);
  let Ha = !1, yn = !1, Dn = !1, la = !1, ka = null, jn = !1;
  const Ur = {}, Mo = (t, a) => {
    if (Ur[t] === a) return;
    Ur[t] = a;
    const i = te.querySelector('[data-tray="' + t + '"]');
    i.innerHTML = a, An(i);
  }, gl = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + Q(Bt(t)) + '</span><span class="activityRowMeta">' + Q(a) + "</span></span>", ud = (t, a, i) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + Q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Fd + '</span><span class="tfIcon"' + _e(t, Zn(t)) + "></span>" + gl(t, a ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || je(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + Q(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + Q(Bt(t)) + ' on the dashboard">' + (a ? tp : Lh) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + Q(t) + '" aria-label="Remove ' + Q(Bt(t)) + ' from favourites">' + ep + "</button>" : "<span></span>") + "</li>";
  function vl(t, a, i, l) {
    const p = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((f) => a(f) && !i.has(f) && y[f].state !== "unavailable").filter((f) => {
      const g = (Bt(f) + " " + (Se.get(f) || "") + " " + f).toLowerCase();
      return p.every((M) => g.includes(M));
    }).sort((f, g) => (Se.get(f) || "~").localeCompare(Se.get(g) || "~") || Bt(f).localeCompare(Bt(g))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + Q(f) + '"><span class="tfIcon"' + _e(f, Zn(f)) + "></span>" + gl(f, Se.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function fa() {
    const t = $a && m.classList.contains("tfBoard");
    if (te.classList.toggle("open", t), te.classList.toggle("tucked", t && Ha), te.toggleAttribute("inert", !t), t || (jn = !1), Rs(), !t) return;
    const a = te.querySelector("[data-tray-tuck]");
    a.innerHTML = Ha ? zc : ap, a.setAttribute("aria-expanded", String(!Ha)), a.setAttribute("aria-label", Ha ? "Show the edit tray" : "Tuck the edit tray away");
    const i = Oe().hidden.filter((f) => Ko().some((g) => g.key === f));
    Mo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + Q(f) + '" aria-label="' + Q(ya(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Fd + "</span>" + Q(ya(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Mo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Oe().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + jn + '">' + (jn ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(W.favHidden || []), p = sa(), h = [...p, ...[...l].filter((f) => !p.includes(f) && y[f])];
    if (Mo("favs", h.map((f) => ud(f, l.has(f), p.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), te.querySelector('[data-pick="tiles"]').hidden = !Dn, te.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Dn)), Dn && Mo("tilepick", vl(te.querySelector("[data-tile-search]").value, (f) => Ul.includes(f.split(".")[0]), new Set(qr()), "data-tile-pick")), te.querySelector('[data-tray="roompick"]').hidden = !la, te.querySelector("[data-room-add]").setAttribute("aria-expanded", String(la)), la) {
      const f = new Set(qr());
      Mo("roompick", Aa.filter((g) => !f.has("room:" + g.id)).map((g) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + Q(g.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + _e("area:" + g.id, g.icon || "mdi:texture-box", g.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + Q(g.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    te.querySelector('[data-pick="favs"]').hidden = !yn, te.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(yn)), yn && Mo("pick", vl(te.querySelector("[data-fav-search]").value, (f) => Ti.test(f), new Set(sa()), "data-fav-pick")), Mo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ka() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ka() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Jo = (t) => {
    W = { ...W, ...t }, Na(), Ma(), fa();
  };
  function dr(t, a) {
    const i = W, l = new Set(W.favHidden || []);
    a ? l.delete(t) : l.add(t), Jo({ favHidden: [...l] }), a ? Ra(Bt(t) + " put back") : Ra(Bt(t) + " hidden", Gr(i));
  }
  const cr = (t) => {
    const a = W;
    Jo({ favourites: sa().filter((i) => i !== t), favHidden: (W.favHidden || []).filter((i) => i !== t) }), Ra(Bt(t) + " removed from favourites", Gr(a));
  }, fd = (t) => {
    Jo({ favourites: [...sa().filter((a) => a !== t), t], favHidden: (W.favHidden || []).filter((a) => a !== t) }), Ra(Bt(t) + " added to favourites");
  };
  te.addEventListener("click", (t) => {
    var i;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? Ts(!1) : a.hasAttribute("data-tray-tuck") ? (Ha = !Ha, fa()) : a.hasAttribute("data-phone-toggle") ? (jn = !jn, fa(), jn && ((i = ia.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && ($o(a.dataset.trayCard), fa()) : a.dataset.favEye ? dr(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? cr(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (yn = !yn, fa(), yn && te.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? fd(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (Dn = !Dn, fa(), Dn && te.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Qa(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (la = !la, fa()) : a.dataset.roomPick ? Qa("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Jo({ suggest: !Ka() }));
  }), te.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && fa();
  }), te.addEventListener("keydown", (t) => {
    var i, l;
    const a = !!((l = (i = t.target).closest) != null && l.call(i, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? Dn : yn) || (t.stopPropagation(), a ? Dn = !1 : yn = !1, fa(), te.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Es(t, a, i, l) {
    t.preventDefault();
    const p = t.clientX, h = t.clientY;
    let f = null, g = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), E = (H) => {
      if (!f) {
        if (Math.hypot(H.clientX - p, H.clientY - h) < 4) return;
        f = a.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = a.offsetWidth + "px", m.appendChild(f);
      }
      f.style.transform = "translate(" + (H.clientX - 24) + "px," + (H.clientY - 24) + "px)";
      const $ = !Ha && H.clientX >= te.getBoundingClientRect().left;
      if (i === "card") {
        const nt = S.getBoundingClientRect(), { w: bt } = eo(S.clientWidth);
        Te = !$ && H.clientX >= nt.left && H.clientX <= nt.right && H.clientY >= nt.top + Ea ? { key: l, col: Math.max(0, Math.floor((H.clientX - nt.left) / (bt + Qe))), row: Math.max(0, Math.floor((H.clientY - nt.top - Ea) / Hn)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, Da();
        }));
        return;
      }
      const Z = S.querySelector(".tfDash-favs"), Ct = Z == null ? void 0 : Z.getBoundingClientRect();
      if (ka = null, Ct && !$ && H.clientX >= Ct.left && H.clientX <= Ct.right && H.clientY >= Ct.top && H.clientY <= Ct.bottom) {
        let nt = 1 / 0;
        Z.querySelectorAll('[data-k^="fav:"]').forEach((bt, q) => {
          const kt = bt.getBoundingClientRect(), z = Math.hypot(H.clientX - (kt.left + kt.width / 2), H.clientY - (kt.top + kt.height / 2));
          z < nt && (nt = z, ka = { i: q, r: kt, after: H.clientX > kt.left + kt.width / 2 });
        }), ka || (ka = { i: 0, r: null, after: !1 });
      }
      ka != null && ka.r ? (M.isConnected || m.appendChild(M), Object.assign(M.style, { left: (ka.after ? ka.r.right : ka.r.left) - 2 + "px", top: ka.r.top + 8 + "px", height: ka.r.height - 16 + "px" })) : M.remove();
    }, R = () => {
      if (window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), cancelAnimationFrame(g), f == null || f.remove(), M.remove(), i === "card") {
        if (!f) $o(l);
        else if (Te != null && Te.fromTray) {
          Da();
          const nt = ya(l) + Wr(l), bt = Oe(), q = Ja();
          Te = null, ki({ ...bt, hidden: bt.hidden.filter((kt) => kt !== l) }, q), Ra(nt);
        }
        Te = null, Da(), Ma(), fa();
        return;
      }
      if (!ka) return;
      const H = new Set(W.favHidden || []);
      H.delete(l);
      const $ = sa().filter((nt) => nt !== l), Z = $.filter((nt) => !H.has(nt)), Ct = Z[Math.min(ka.i + (ka.after ? 1 : 0), Z.length)];
      $.splice(Ct ? $.indexOf(Ct) : $.length, 0, l), ka = null, Jo({ favourites: $, favHidden: [...H] }), Ra(Bt(l) + " put back");
    };
    window.addEventListener("pointermove", E), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R);
  }
  const Ds = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, bl = 136, hd = 288, md = 0.8, Li = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ia = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ia.setAttribute("aria-label", "Phone order"), ia.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + ep + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(ia);
  let zn = "";
  function Rs() {
    var g;
    const t = jn && $a && m.classList.contains("tfBoard") && !Ha;
    if (ia.classList.toggle("open", t), ia.toggleAttribute("inert", !t), !t) return;
    const a = Ia().filter((M) => !Oe().hidden.includes(M.key)), i = a.length, l = (M) => Math.round(M * md * 10) / 10 + "px", p = (M, E) => {
      const R = M.el.classList.contains("tfDac"), H = M.tile ? R ? hd : bl : Ds[M.key] || bl;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + Q(M.key) + '" style="min-height:' + l(H) + '" aria-label="' + Q(ya(M.key) + ", " + (E + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? _e(M.key, Zn(M.key)) : _e(M.key, Li[M.key])) + '></span><span class="tfPhoneName">' + Q(ya(M.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + Q(((g = S.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(Ds.sums) + '"><span class="tfPhoneName">' + Q(ya("sums")) + "</span></div>" + a.map(p).join("");
    if (ia.querySelector('[data-phone="note"]').innerHTML = Oe().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === zn) return;
    zn = h;
    const f = ia.querySelector('[data-phone="list"]');
    f.innerHTML = h, An(f);
  }
  function Qo(t, a) {
    var i;
    ao({ ...Oe(), phone: t }), fa(), a && ((i = ia.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const Bs = () => [...ia.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function pr(t, a) {
    t.preventDefault();
    const i = a.parentElement, l = ia.querySelector(".tfPhoneScreen"), p = Bs().join();
    a.classList.add("moving");
    const h = (g) => {
      const M = l.getBoundingClientRect();
      g.clientY > M.bottom - 40 ? l.scrollTop += 12 : g.clientY < M.top + 40 && (l.scrollTop -= 12);
      const E = [...i.querySelectorAll("[data-phone-key]")].find(($) => {
        const Z = $.getBoundingClientRect();
        return $ !== a && g.clientX >= Z.left && g.clientX <= Z.right && g.clientY >= Z.top && g.clientY <= Z.bottom;
      });
      if (!E) return;
      const R = E.getBoundingClientRect(), H = E.classList.contains("tile") ? g.clientX < R.left + R.width / 2 : g.clientY < R.top + R.height / 2;
      i.insertBefore(a, H ? E : E.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const g = Bs();
      zn = "", g.join() !== p ? Qo(g) : Rs();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  ia.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && pr(t, a);
  }), ia.addEventListener("click", (t) => {
    var i;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      jn = !1, fa(), (i = te.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...p } = Oe();
      ao(p), fa();
    }
  }), ia.addEventListener("keydown", (t) => {
    var f, g, M, E;
    if (t.key === "Escape") {
      t.stopPropagation(), jn = !1, fa(), (f = te.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const a = (E = (M = (g = t.target).closest) == null ? void 0 : M.call(g, "[data-phone-key]")) == null ? void 0 : E.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !i) return;
    t.preventDefault();
    const l = Bs(), p = l.indexOf(a), h = p + i;
    h < 0 || h >= l.length || ([l[p], l[h]] = [l[h], l[p]], Qo(l, a));
  });
  function gd(t, a) {
    t.preventDefault();
    const i = a.parentElement;
    a.classList.add("moving");
    const l = (h) => {
      const f = [...i.children].find((g) => {
        const M = g.getBoundingClientRect();
        return g !== a && h.clientY >= M.top && h.clientY <= M.bottom;
      });
      if (f) {
        const g = f.getBoundingClientRect();
        i.insertBefore(a, h.clientY < g.top + g.height / 2 ? f : f.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), a.classList.remove("moving");
      const h = new Set(sa());
      Ur.favs = null, Jo({ favourites: [...i.children].map((f) => f.dataset.trayFav).filter((f) => h.has(f)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  te.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), i = t.target.closest(".tfTrayFav");
    a ? Es(t, a, "card", a.dataset.trayCard) : i && t.target.closest(".tfTrayGrip") ? gd(t, i) : i != null && i.classList.contains("off") && !t.target.closest("button") && Es(t, i, "fav", i.dataset.trayFav);
  });
  function Ai(t) {
    if (!$a || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), i = a && Ko().find((H) => H.el === a);
    if (!i || wo.includes(i.key)) return;
    const l = Fn.get(i.key), { w: p } = eo(S.clientWidth);
    if (!l) return;
    t.preventDefault(), On();
    const h = t.clientX, f = t.clientY;
    let g = !1, M = 0;
    const E = (H) => {
      const $ = H.clientX - h, Z = H.clientY - f;
      if (!g) {
        if (Math.hypot($, Z) < 4) return;
        g = !0, Te = { key: i.key, col: l.col, row: l.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + $ + "px," + Z + "px)", Te.col = Math.round((l.x + $) / (p + Qe)), Te.row = Math.round((l.y + Z - Ea) / Hn), M || (M = requestAnimationFrame(() => {
        M = 0, Da();
      }));
    }, R = () => {
      window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), g && (cancelAnimationFrame(M), Da(), a.classList.remove("tfDragging"), a.style.transform = "", Te = null, ki(Oe(), Ja()), Da(), Ma());
    };
    window.addEventListener("pointermove", E), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R);
  }
  function wl(t = !1) {
    const a = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const i = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === i) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = i;
    const p = xs.find((h) => h.id === a.dataset.graph);
    p ? ol(a, p).then(() => {
      (t || l) && dd(a);
    }) : ei(a.dataset.graph, a).then(() => {
      t && il(a);
    });
  }
  function Yr() {
    var g, M, E;
    we = xe.model(o()), gs(), y = we.states, y[(g = W.sources) == null ? void 0 : g.grid] && (we.grid = W.sources.grid), y[(M = W.sources) == null ? void 0 : M.alarm] && (we.security.alarms = [W.sources.alarm]), P.forEach((R, H) => {
      const $ = y[H], Z = ($ == null ? void 0 : $.attributes) || {};
      if (!$ || Date.now() - R.at > 2 * 60 * 1e3) {
        P.delete(H);
        return;
      }
      R.pos != null && $.state !== "opening" && $.state !== "closing" && Math.abs(Ga(H) - R.pos) < 1 && delete R.pos, R.tilt != null && Math.abs((Z.current_tilt_position ?? -1) - R.tilt) < 1 && delete R.tilt, R.pos == null && R.tilt == null && P.delete(H);
    });
    const t = [];
    let a = 0;
    const i = Dr();
    Aa = i.filter((R) => R.room).map((R) => R.room), Aa.some((R) => R.id === Pt) || (Pt = ((E = Aa[0]) == null ? void 0 : E.id) || null);
    const l = G === "weather" ? { key: "weather", name: "Weather" } : G && i.find((R) => R.key === G);
    if (l || (G = null), m.classList.toggle("tfAreaOpen", !!l), m.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), m.classList.toggle("tfDash", !l), Se = /* @__PURE__ */ new Map(), we.rooms.forEach((R) => [...R.actions, ...R.plugs, ...R.readings, ...R.openings, ...R.solar, ...R.plants.flatMap((H) => [H.id, ...H.readings])].forEach((H) => Se.set(H, R.name))), !l) return Ms(t, Nr());
    if (t.push({ key: "areahead", html: _i(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const p = l.ids, h = l.room ? l.room.id : l.key, f = l.room;
    return f != null && f.solar.length && t.push({ key: "energy:" + f.id, html: Za(f, ++a) }), f && (f.readings.length || f.plugs.length || f.power != null) && t.push({ key: "readings:" + f.id, html: $n(f, ++a) }), f == null || f.plants.forEach((R) => t.push({ key: "plant:" + R.id, html: Gi(R, ++a) })), p.length && t.push({ key: "block:" + h, order: ++a, tiles: p.map((R) => ({ key: R, html: Yt(R) })) }), t;
  }
  const _i = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + zc + '</button><div class="settingsTitle">' + Q(t.name) + "</div></div>";
  let Ei = 0, Zr = null;
  const Kr = (t) => t === "weather" ? na.wx : t.startsWith("room:") && S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector(".tfAreas");
  function ti(t) {
    var a, i;
    G || (Ei = ur().scrollTop, Zr = ((a = Kr(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), G = t, t.startsWith("room:") && (Pt = t.slice(5)), Rn(), ur().scrollTop = 0, (i = S.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let Vn = null;
  function tn(t, a) {
    if (Vn == null || Vn(), a == null) return;
    const i = ur(), l = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const f = () => {
      cancelAnimationFrame(h), p.forEach((M) => window.removeEventListener(M, f, !0)), Vn = null;
    }, g = () => {
      const M = t();
      if (M != null && M.isConnected) {
        const E = M.getBoundingClientRect().top - a;
        Math.abs(E) > 0.5 && (i.scrollTop += E);
      }
      performance.now() < l ? h = requestAnimationFrame(g) : f();
    };
    p.forEach((M) => window.addEventListener(M, f, { capture: !0, passive: !0 })), Vn = f, g();
  }
  function $r() {
    var i;
    const t = G;
    G = null, Rn(), ur().scrollTop = Ei, tn(() => Kr(t), Zr);
    const a = t.startsWith("room:") ? S.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? na.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (i = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || i.focus({ preventScroll: !0 });
  }
  const xl = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + Q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Xr = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function ur() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Jr(t) {
    const a = ur(), i = (g) => {
      const M = g.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, l = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && i(g)), p = l == null ? void 0 : l.dataset.k, h = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const f = l != null && l.isConnected ? l : p && S.querySelector('[data-k="' + CSS.escape(p) + '"]');
    f != null && f.isConnected && h != null && (a.scrollTop += f.getBoundingClientRect().top - h);
  }
  function Rn() {
    if (!w || !S) return;
    const t = Yr();
    S.querySelectorAll("[data-tf]").forEach((i) => i.remove()), qe.clear();
    const a = document.createElement("div");
    a.innerHTML = t.map((i) => i.tiles ? xl(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((l) => qe.set(l.key, l.html)) : qe.set(i.key, i.html)), Tr = Xr(t), S.append(...a.children), Wi(t.weather), qi(), ir.disconnect(), Da(), An(S), gr(S), po(S), V(), at && ei(at.id), as(), Di(), vr(), requestAnimationFrame(ht);
  }
  const fr = (t) => {
    var i;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (i = a.dataset) == null ? void 0 : i.act };
  }, hr = (t, a) => {
    var i;
    a && ((i = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function So(t, a) {
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
    const p = [...a.children];
    return [...t.children].forEach((h, f) => So(h, p[f])), t;
  }
  function yl(t, a) {
    const i = document.createElement("div");
    i.innerHTML = a;
    const l = fr(t), p = So(t, i.firstElementChild);
    An(p), gr(p), po(p), hr(p, l);
  }
  function Ma() {
    !w || !S || Te || Jr(Ns);
  }
  function Ns() {
    if (!S.querySelector("[data-tf]")) {
      Rn();
      return;
    }
    const t = Yr();
    if (Xr(t) !== Tr) {
      Rn();
      return;
    }
    const a = (i) => [...k.keys()].some((l) => {
      const p = l.slice(l.indexOf("|") + 1);
      return i === p || i.endsWith(":" + p);
    });
    t.forEach((i) => (i.tiles || [i]).forEach((l) => {
      if (qe.get(l.key) === l.html || a(l.key)) return;
      const p = S.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (p) {
        if (qe.set(l.key, l.html), at && at.key === l.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = No(at.id);
          return;
        }
        yl(p, l.html), at && at.key === l.key && ei(at.id), l.key.startsWith("energy:") && as();
      }
    })), Di(), vr(), Ui(), V(), Qt == null || Qt.update(), wa == null || wa.forEach((i) => i.update()), m.classList.contains("tfDash") && Mi(), requestAnimationFrame(ht);
  }
  const Qr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Ee(t.color_mode)]],
    climate: (t) => [["Current temperature", Ca(t.current_temperature) + " °C"], ["Target", Ca(t.temperature) + " °C"], ["Action", Ee(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Ee(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Ee(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ca(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Ee(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, en = (t) => {
    var i;
    const a = (((i = Qr[t.split(".")[0]]) == null ? void 0 : i.call(Qr, $t(t))) || []).filter(([, l]) => l != null && l !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([l, p]) => '<div class="tfMoreRow"><span>' + Q(l) + "</span><span>" + Q(p) + "</span></div>").join("") + "</div>" : "";
  }, da = (t) => Ni(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Ps(t, a = {}, i = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + Q(l.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + l.ids.map((p) => Zi(p, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const fe = document.createElement("div");
  fe.className = "tfMoreBackdrop", fe.hidden = !0, m.appendChild(fe);
  const Is = (t, a) => {
    for (let i = t; i && i !== fe; i = i.parentElement) {
      const l = getComputedStyle(i).overflowY;
      if ((l === "auto" || l === "scroll") && i.scrollHeight > i.clientHeight + 1 && (a < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let mr = null;
  fe.addEventListener("touchstart", (t) => {
    mr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), fe.addEventListener("touchmove", (t) => {
    var p, h;
    if (!mr || t.touches.length > 1 || (h = (p = t.target).closest) != null && h.call(p, "input,textarea,select")) return;
    const a = t.touches[0], i = mr.x - a.clientX, l = mr.y - a.clientY;
    mr = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(i) && !Is(t.target, l) && t.preventDefault();
  }, { passive: !1 }), fe.addEventListener("wheel", (t) => {
    Is(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function ts() {
    const t = fe.querySelector(".tfMorePair"), a = fe.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ts, { passive: !0 }), w && Ze();
  let no = [];
  const Hs = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function kl(t) {
    const a = (M, E = "") => '<div class="tfMoreHead">' + (vt != null && vt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Id + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + Q(M) + "</div>" + E + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", i = (M, E) => '<div class="tfMoreNow"><div class="tfMoreState">' + Q(M) + "</div>" + (E ? '<div class="tfMoreSub">' + Q(E) + "</div>" : "") + "</div>", l = Ps;
    if (t === "favourites") {
      const M = sa(), E = new Set(M), R = [{ name: "Starred", ids: M }, { name: "Home", ids: we.homeVacuums }, { name: "Security", ids: [...we.security.alarms, ...we.security.locks] }, ...we.rooms.map((H) => ({ name: H.name, ids: [...H.actions, ...H.plugs] }))].map((H, $) => $ ? { ...H, ids: H.ids.filter((Z) => !E.has(Z)) } : H).filter((H) => H.ids.length);
      return [a("Favourites"), i(M.length ? M.length + " starred" : "None starred"), l(R, { star: !0 }, !0)];
    }
    const p = (M, { name: E = "", alert: R = !1, plain: H = !1 } = {}) => {
      const $ = H ? [] : M.filter((nt) => Ul.includes(nt.split(".")[0])), Z = M.filter((nt) => !$.includes(nt)), Ct = (nt) => nt.startsWith("vacuum.") && $t(nt).battery_level != null ? $t(nt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (E ? '<div class="tfMoreGroupName">' + Q(E) + "</div>" : "") + '<div class="tfMoreActions">' + $.map((nt) => Yt(nt, !0)).join("") + Z.map((nt) => Zi(nt, { plain: H, alert: R, say: H ? Ct(nt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = Nr().find(($) => $.key === t.slice(8));
      if (!M) return null;
      const E = M.key === "light" ? (M.groups || []).flatMap(($) => $.ids) : [], R = E.some(($) => {
        var Z;
        return ((Z = y[$]) == null ? void 0 : Z.state) === "on";
      }), H = E.length ? '<button class="primary" type="button" data-acts="' + Kn(E.map(($) => ["light", R ? "turn_off" : "turn_on", $])) + '">' + (R ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(M.name), '<div class="tfMoreNowRow">' + i(M.value) + H + "</div>", ...(M.groups || []).map(($) => p($.ids, { name: $.name === M.name ? "" : $.name, alert: $.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, E] = t.split(":"), R = we.rooms.find((Z) => Z.id === M), H = R && bn(R).find((Z) => Z.key === E);
      if (!H) return null;
      const $ = H.acts ? '<button class="primary" type="button" data-acts="' + Kn(H.acts) + '">' + (H.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(R.name + " " + H.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(H.value) + $ + "</div>", p(uo(R, E))];
    }
    const h = t.split(".")[0], f = y[t], g = Ul.includes(h) ? Oa(t) : { sections: [] };
    return [
      a(Bt(t)),
      i(je(t), f.last_changed && fi(Date.parse(f.last_changed))),
      (vt == null ? void 0 : vt.at) && '<svg class="tfGraph tfDay" data-day="' + Q(t) + '" role="img" aria-label="' + Q(Bt(t)) + ', last 24 hours"></svg>',
      h === "cover" && '<div data-cover-art="' + Q(t) + '"></div>',
      ...g.sections.filter(Boolean),
      Co(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(vt != null && vt.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + ap + "</button>"
    ].filter(Boolean);
  }
  const Co = (t) => Hs(t) ? "" : en(t) + da(t);
  let es = "";
  function Fs(t) {
    var a;
    vt && (vt.details = t, Di(), (a = fe.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const kn = (t) => {
    const a = y[t], i = Ga(t), l = Ln(t);
    return { kind: Pd(a), name: Bt(t), text: je(t), pos: i, target: Math.abs(l - i) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: Lr(t) ?? 100, canSet: Gt(t, Kc) };
  };
  function gr(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const i = a.dataset.coverArt, l = a.dataset.artKey || "more:" + i;
      let p = ft.get(l);
      p || (p = ch({ onMove: (h) => Lo(i, h), onSet: (h) => {
        Lo(i, h), on("pos", i);
      } }), p.coverId = i, ft.set(l, p)), a.replaceWith(p.el), p.update(kn(i));
    });
  }
  const Ml = (t) => [...ft.values()].filter((a) => a.coverId === t), To = () => ft.forEach((t) => {
    y[t.coverId] && t.update(kn(t.coverId));
  }), vr = () => {
    ft.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), ft.delete(a));
    }), To();
  };
  function Di() {
    var h, f;
    if (!vt || !(Hs(vt.id) || y[vt.id])) {
      fe.hidden = !0;
      return;
    }
    if ([...k.keys()].some((g) => g.endsWith("|" + vt.id))) {
      To();
      return;
    }
    const t = kl(vt.id), a = fe.querySelector(".tfMore");
    if (!t) {
      wr();
      return;
    }
    const i = fr(fe), l = Co(vt.id), p = vt.frame ? vt.frame.wide : vt.id.startsWith("summary:") || vt.id.startsWith("group:");
    if (fe.hidden || !a || t.length !== no.length || a.classList.contains("wide") !== p) {
      const g = Os ? vt.scroll || 0 : !fe.hidden && a ? a.scrollTop : 0;
      fe.innerHTML = '<div class="tfMorePair' + (fe.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (vt.frame ? ' style="height:' + vt.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (l ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Id + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + l + "</div></div></aside>" : "") + "</div>", es = l, fe.classList.toggle("wide", p), fe.hidden = !1, ts(), gr(fe), po(fe), An(fe), fe.querySelectorAll("[data-day]").forEach((M) => bd(M.dataset.day, M, vt.at)), g && (fe.querySelector(".tfMore").scrollTop = g), hr(fe, i), fe.contains(n.activeElement) || (h = fe.querySelector("[data-more-close]")) == null || h.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((g, M) => {
        var H, $;
        if (g === no[M] || g.includes("data-cover-art") || a.children[M].contains(($ = (H = n.activeElement) == null ? void 0 : H.matches) != null && $.call(H, "input,select") ? n.activeElement : null) || [...k.keys()].some((Z) => a.children[M].querySelector('[data-drag="' + CSS.escape(Z) + '"]'))) return;
        const E = document.createElement("div");
        E.innerHTML = g;
        const R = So(a.children[M], E.firstElementChild);
        An(R), po(R);
      }), l !== es) {
        const g = fe.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = l), es = l;
      }
      fe.contains(n.activeElement) || hr(fe, i);
    }
    (f = fe.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(vt.details && l)), no = t, To();
  }
  setInterval(() => {
    vt && Di();
  }, 15 * 1e3);
  function br(t, a) {
    var p;
    const i = !!(vt && a && fe.contains(a)), l = i && fe.querySelector(".tfMore");
    i && (vt.scroll = l.scrollTop), vt = { id: t, opener: i ? vt.opener : a, back: i ? vt : null, frame: i ? vt.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((p = a == null ? void 0 : a.dataset) == null ? void 0 : p.at) || null }, an();
  }
  let Os = !1;
  function an() {
    no = [], Os = !fe.hidden, ft.forEach((t, a) => {
      a !== vt.id && fe.contains(t.el) && (t.destroy(), ft.delete(a));
    }), Di(), Os = !1;
  }
  function wr() {
    var i, l, p, h, f, g;
    const t = vt == null ? void 0 : vt.opener;
    vt = null, ft.forEach((M, E) => {
      fe.contains(M.el) && (M.destroy(), ft.delete(E));
    }), Tt.forEach((M, E) => {
      E.startsWith("more:") && Tt.delete(E);
    }), fe.hidden = !0, fe.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (i = t == null ? void 0 : t.dataset) != null && i.more ? (l = S.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (p = t == null ? void 0 : t.dataset) != null && p.summary ? (h = S.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (f = t == null ? void 0 : t.hasAttribute) != null && f.call(t, "data-favs-edit") && ((g = S.querySelector("[data-favs-edit]")) == null || g.focus(a));
  }
  function Ws(t, a, i, l = {}) {
    const p = a.map((bt) => bt[1]), h = l.zero ? 0 : Math.min(...p), f = Math.max(...p), g = Math.max(120, t.clientWidth || 260), M = Math.max(60, t.clientHeight || 130), E = 8, R = M - 20, H = Date.now() - 24 * 3600 * 1e3, $ = 24 * 3600 * 1e3, Z = (bt) => Math.max(0, Math.min(g, (bt - H) / $ * g)), Ct = (bt) => f === h ? (E + R) / 2 : R - (bt - h) / (f - h) * (R - E);
    let nt = "M" + Z(a[0][0]).toFixed(1) + " " + Ct(a[0][1]).toFixed(1);
    for (let bt = 1; bt < a.length; bt++) nt += l.smooth ? "L" + Z(a[bt][0]).toFixed(1) + " " + Ct(a[bt][1]).toFixed(1) : "H" + Z(a[bt][0]).toFixed(1) + "V" + Ct(a[bt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + g + " " + M), t.setAttribute("aria-label", i), t.innerHTML = '<path d="' + nt + "V" + R + "H" + Z(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + nt + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + g + '" y="' + (M - 4) + '" text-anchor="end">Now</text>';
  }
  const Sl = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, vd = (t, a) => {
    const i = t.split(".")[0];
    return Sl[i] ? Sl[i].includes(a) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, Cl = (t) => {
    const a = t.split(".")[0], i = $t(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Gl.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Tl = /* @__PURE__ */ new Map();
  let nn = 0;
  async function Ll(t) {
    let a = Tl.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let p = [];
      try {
        const h = await N({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((h == null ? void 0 : h[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      p.length || (p = (mo || []).filter((h) => h.entity_id === t).map((h) => [h.when * 1e3, String(h.state)])), a = { at: Date.now(), pts: p }, Tl.set(t, a);
    }
    const i = y[t], l = a.pts.slice().sort((p, h) => p[0] - h[0]);
    return i && (!l.length || l[l.length - 1][1] !== i.state) && l.push([Date.parse(i.last_changed) || Date.now(), i.state]), l;
  }
  async function bd(t, a, i) {
    const l = await Ll(t);
    if (!a.isConnected) return;
    const p = l.map(([z, zt]) => [z, Number(zt)]);
    if (l.length > 1 && p.every(([, z]) => Number.isFinite(z))) {
      Ws(a, p, Bt(t) + ", last 24 hours");
      return;
    }
    const h = Date.now(), f = h - 864e5, g = Math.max(200, a.clientWidth || 360), M = 62, E = (z) => Math.max(0, Math.min(g, (z - f) / 864e5 * g)), R = [];
    let H = null;
    l.forEach(([z, zt]) => {
      const Ne = vd(t, zt);
      Ne && H == null ? H = Math.max(z, f) : !Ne && H != null && (R.push([H, Math.max(z, f)]), H = null);
    }), H != null && R.push([H, h]);
    const $ = go(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", Z = Cl(t), Ct = "tfDayClip" + ++nn, nt = R.map(([z, zt]) => Z + (zt >= h - 1e3 && z <= f + 1e3 ? " all day" : zt >= h - 1e3 ? " since " + Ta(z) : z <= f + 1e3 ? " until " + Ta(zt) : " " + Ta(z) + "–" + Ta(zt)));
    let bt = "", q = -1 / 0;
    R.forEach(([z], zt) => {
      const Ne = nt[zt].length * 5.4, ve = Math.min(E(z), g - Ne);
      ve < q + 8 || (bt += '<text x="' + ve.toFixed(1) + '" y="10">' + Q(nt[zt]) + "</text>", q = ve + Ne);
    });
    let kt = '<text x="' + g + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((z) => {
      let zt = new Date(h).setHours(z, 0, 0, 0);
      zt > h && (zt -= 864e5), E(zt) > 8 && E(zt) < g - 34 && (kt += '<text x="' + E(zt).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(z).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + g + " " + M), a.setAttribute("aria-label", Bt(t) + ", last 24 hours: " + (nt.length ? nt.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + Ct + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + bt + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Ct + ')">' + R.map(([z, zt]) => '<rect x="' + E(z).toFixed(1) + '" y="18" width="' + Math.max(2, E(zt) - E(z)).toFixed(1) + '" height="26" fill="' + $ + '"/>').join("") + "</g>" + (i && i >= f ? '<line x1="' + E(i).toFixed(1) + '" x2="' + E(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + kt;
  }
  function xr(t) {
    var l;
    const a = Number((l = y[t]) == null ? void 0 : l.state), i = Date.now();
    if ($t(t).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, i - p);
      return [...Array(49)].map((f, g) => p + h * g / 48).map((f) => [f, Math.round(a * Math.pow((f - p) / h, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, h) => [i - (48 - h) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function ei(t, a) {
    var Z, Ct;
    let i = j.get(t);
    if (t.endsWith("_solar_power")) i = { at: Date.now(), points: mc() };
    else if (Ni(t)) i = { at: Date.now(), points: xr(t) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const nt = new Date(Date.now() - 864e5).toISOString(), bt = await N({ type: "history/history_during_period", start_time: nt, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), q = ((bt == null ? void 0 : bt[t]) || []).map((kt) => [kt.lu != null ? kt.lu * 1e3 : Date.parse(kt.last_updated || kt.last_changed), Number(kt.s ?? kt.state)]).filter(([kt, z]) => Number.isFinite(kt) && Number.isFinite(z));
        i = { at: Date.now(), points: q };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      j.set(t, i);
    }
    const l = a || S.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const p = y[t], h = ((Z = p == null ? void 0 : p.attributes) == null ? void 0 : Z.unit_of_measurement) || "", f = i.points.slice(), g = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(g) && !t.endsWith("_solar_power") && f.push([Date.now(), g]), f.length < 2) {
      l.setAttribute("aria-label", Bt(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = f.map((nt) => nt[1]), E = Math.min(...M), R = Math.max(...M), H = (nt) => nt.toLocaleString(void 0, { maximumFractionDigits: Math.abs(nt) >= 100 ? 0 : 1 }), $ = ((Ct = p == null ? void 0 : p.attributes) == null ? void 0 : Ct.state_class) === "total_increasing";
    Ws(l, f, Bt(t) + ", last 24 hours: " + ($ ? "+" + H(M[M.length - 1] - M[0]) : E === R ? H(E) : H(E) + " to " + H(R)) + (h ? " " + h : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function as() {
    const t = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!t) return;
    const a = mc();
    Ws(t, a, "Solar, last 24 hours: up to " + Ca(Math.max(...a.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function wd(t, a) {
    const i = a.entity_id, l = P.get(i) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Ga(i) > 0 ? 0 : 100 }[t], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    p != null && (l.pos = p), h != null && (l.tilt = h), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), P.set(i, l);
  }
  function yr(t, a, i) {
    var p;
    const l = i == null ? void 0 : i.entity_id;
    return t !== "light" || typeof l != "string" || !mn[l] || !Tn(l) || i.brightness_pct != null || i.brightness != null ? [a, i] : a !== "turn_on" && !(a === "toggle" && ((p = y[l]) == null ? void 0 : p.state) !== "on") ? [a, i] : ["turn_on", { ...i, brightness_pct: mn[l] }];
  }
  function ai(t, a, i, l) {
    let p = { entity_id: i, ...l || {} };
    return [a, p] = yr(t, a, p), t === "cover" && wd(a, p), ta[i] = (ta[i] || 0) + 1, Hi.set(Jc, JSON.stringify(ta)), xe.call(t, a, p) ? Promise.resolve() : Promise.resolve(wt(t, a, p));
  }
  function oo(t) {
    const [a, i, l, p] = t.split("|");
    ai(a, i, l, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Lo(t, a) {
    k.set("pos|" + t, a), qe.delete(t), no = no.map(() => ""), [S, fe].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((p) => xt(p, a)));
    const i = S.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(a) + "%"), (vt == null ? void 0 : vt.id) === t) {
      const l = fe.querySelector(".tfMoreState"), p = fe.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), p && (p.textContent = "Currently " + Ga(t) + "%");
    }
    Ml(t).forEach((l) => l.update(kn(t)));
  }
  const Al = (t, a) => {
    const i = t.shiftKey ? 10 : 1, l = { ArrowUp: a + i, ArrowRight: a + i, ArrowDown: a - i, ArrowLeft: a - i, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function _l(t, a) {
    var nt;
    const i = t.dataset.blocks;
    (nt = t.setPointerCapture) == null || nt.call(t, a.pointerId);
    const l = (bt) => {
      const q = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (bt.clientX - q.left) / q.width * 100));
    }, p = l(a), h = a.clientX;
    let f = !1, g = Ln(i), M = p, E = 0;
    const R = () => {
      g = Math.abs(M - g) < 0.2 ? M : g + (M - g) * 0.14, Lo(i, g), E = requestAnimationFrame(R);
    }, H = () => {
      f || (f = !0, t.classList.add("fine"), E = requestAnimationFrame(R));
    }, $ = setTimeout(H, 350), Z = (bt) => {
      M = l(bt), Math.abs(bt.clientX - h) > 6 && (clearTimeout($), H());
    }, Ct = () => {
      clearTimeout($), cancelAnimationFrame(E), t.removeEventListener("pointermove", Z), t.removeEventListener("pointerup", Ct), t.removeEventListener("pointercancel", Ct), t.classList.remove("fine"), Lo(i, f ? Math.round(g) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), on("pos", i);
    };
    t.addEventListener("pointermove", Z), t.addEventListener("pointerup", Ct), t.addEventListener("pointercancel", Ct);
  }
  function Ao(t) {
    var p;
    const [a, i] = t.dataset.open.split("|"), l = t.closest(".tfCard");
    at = { key: a, id: i, h: l ? Math.round(l.getBoundingClientRect().height) : 0 }, qe.delete(a), Ma(), (p = S.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function qs(t) {
    var a;
    Pt = t.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var p;
      const l = i === t;
      i.classList.toggle("active", l), i.setAttribute("aria-expanded", String(l)), (p = i.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !l);
    }), qe.set("areas", Oo(((a = S.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const $e = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [i, l] = ra(t);
      return Math.round(i + a * (l - i));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var i;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((i = $t(t).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function ns(t, a, i, l) {
    var M;
    const p = $e[a].value(i, l);
    k.set(a + "|" + i, p);
    const h = Math.round(l * 100) + "%", f = t.querySelector("i");
    if (a === "tilt") {
      f.style.width = "calc((100% - 8px) * " + l + ")";
      const [E, R] = t.querySelectorAll("span");
      E.classList.toggle("lit", l > 0.08), R.classList.toggle("lit", l > 0.92), qe.delete(i), no = no.map(() => ""), Ml(i).forEach((H) => H.update(kn(i)));
    } else if (f) f.style.width = h;
    else {
      let E = t.querySelector("b");
      E || (E = document.createElement("b"), t.appendChild(E)), E.style.left = h;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const g = (M = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = $e[a].text(i, p));
  }
  function on(t, a) {
    const i = k.get(t + "|" + a), [l, p, h] = $e[t].send(a, i), f = () => setTimeout(() => {
      k.delete(t + "|" + a), Ma();
    }, 1500);
    ai(l, p, a, h).then(f, f);
  }
  function js(t) {
    t.addEventListener("click", (a) => {
      var l, p;
      const i = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (En && !a.target.closest(".tfBoardMenu,[data-board-more]") && On(), !(!i || !t.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (En == null ? void 0 : En.key) === i.dataset.boardMore ? On(!0) : pd(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) Wn(En.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) $o(i.dataset.boardShow);
        else if (i.dataset.favHide) dr(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) _a(i.dataset.energyPick);
        else if (i.dataset.act) oo(i.dataset.act);
        else if (i.hasAttribute("data-details")) Fs(!(vt != null && vt.details));
        else if (i.hasAttribute("data-details-close")) Fs(!1);
        else if (i.dataset.summary) ho(i.dataset.summary, i);
        else if (i.dataset.star) el(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const h = vt.id;
          vt = vt.back, an(), (l = fe.querySelector('.tfMore [data-more="' + CSS.escape(h) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) br("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([h, f, g, M]) => ai(h, f, g, M).catch(() => {
        }));
        else if (i.dataset.more) br(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) wr();
        else if (i.dataset.go) ti("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) $r();
        else if (i.dataset.open) Ao(i);
        else if (i.hasAttribute("data-close")) {
          const h = at;
          at = null, qe.delete(h.key), Ma(), (p = S.querySelector('[data-open="' + CSS.escape(h.key + "|" + h.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && qs(i);
    }), t.addEventListener("keydown", (a) => {
      var l, p, h, f, g, M, E;
      const i = a.target;
      if ((l = i.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ao(i)), (p = i.dataset) != null && p.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), _a(i.dataset.energyPick)), (h = i.classList) != null && h.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), qs(i)), (f = i.dataset) != null && f.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), ho(i.dataset.summary, i)), a.key === "Escape" && En && t === S) {
        a.preventDefault(), On(!0);
        return;
      }
      if (a.key === "Escape" && $a && t === S) {
        a.preventDefault(), Ts(!1), (g = c("dashEditNav")) == null || g.focus();
        return;
      }
      if (a.key === "Escape" && G && t === S && (a.preventDefault(), $r()), (M = i.dataset) != null && M.blocks) {
        const R = i.dataset.blocks, H = Al(a, Math.round(Ln(R)));
        if (H == null) return;
        a.preventDefault(), Lo(R, H), clearTimeout(dt.get(R)), dt.set(R, setTimeout(() => on("pos", R), 500));
        return;
      }
      if ((E = i.dataset) != null && E.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [R, H] = i.dataset.drag.split("|"), $ = Number(i.getAttribute("aria-valuenow")) / 100, Z = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, $ + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        ns(i, R, H, Z), on(R, H);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var Ne;
      const i = a.target.closest("[data-blocks]");
      if (i && a.button === 0) {
        a.preventDefault(), _l(i, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [p, h] = l.dataset.drag.split("|"), f = p === "bright" && !Tn(h), g = a.pointerType !== "mouse";
      if (f && !g) {
        oo(ke("light", "toggle", h));
        return;
      }
      const M = p === "bright" && ((Ne = y[h]) == null ? void 0 : Ne.state) !== "on", E = p === "tilt" ? 4 : 0, R = () => l.getBoundingClientRect().width - E * 2, H = (ve) => {
        const Sa = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ve.clientX - Sa.left - E) / R()));
      };
      let $ = g ? "waiting" : M ? "pressed" : "dragging", Z = 0;
      const Ct = a.clientX, nt = a.clientY, bt = (ve, Sa) => Math.hypot(ve.clientX - Ct, ve.clientY - nt) > Sa, q = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      g || (a.preventDefault(), q()), $ === "dragging" && ns(l, p, h, H(a));
      const kt = () => {
        var ve, Sa;
        $ = "sliding", L = l, l.classList.add("held"), q(), (ve = navigator.userActivation) != null && ve.hasBeenActive && ((Sa = navigator.vibrate) == null || Sa.call(navigator, 8)), Z = M ? (mn[h] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, z = (ve) => {
        $ === "waiting" && bt(ve, D) ? !f && Math.abs(ve.clientX - Ct) > Math.abs(ve.clientY - nt) ? kt() : $ = "gone" : $ === "pressed" && bt(ve, 4) && ($ = "dragging"), $ === "sliding" ? ns(l, p, h, Math.max(0, Math.min(1, Z + (ve.clientX - Ct) / R()))) : $ === "dragging" && ns(l, p, h, H(ve));
      }, zt = (ve) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Sa, Xt) => l.removeEventListener(Sa, Xt ? zt : z)), l.classList.remove("held"), L === l && (L = null), $ === "sliding" || $ === "dragging" ? on(p, h) : ve.type === "pointerup" && f ? oo(ke("light", "toggle", h)) : ve.type === "pointerup" && M && ($ === "waiting" || $ === "pressed") && ai("light", "turn_on", h).catch(() => {
        });
      };
      l.addEventListener("pointermove", z), l.addEventListener("pointerup", zt), l.addEventListener("pointercancel", zt);
    }), t.addEventListener("touchmove", (a) => {
      L && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return S && w && (vs(), js(S), js(fe), fe.addEventListener("click", (t) => {
    t.target === fe && wr();
  }), (El = n.getElementById("homeNav")) == null || El.addEventListener("click", () => {
    G && $r();
  }), (os = n.querySelector(".bottomNav")) == null || os.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + np + "</button>"), (zs = c("dashEditNav")) == null || zs.addEventListener("click", () => Ts(!$a)), S.addEventListener("pointerdown", Ai), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Ir() !== ys ? Ma() : Mi();
  }).observe(S), window.addEventListener("resize", Mi, { passive: !0 }), fe.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), vt != null && vt.details ? Fs(!1) : wr());
  })), tt(), {
    update(t) {
      if (!w) return;
      const a = !Object.keys(y).length;
      y = { ...Object.fromEntries(Object.entries(y).filter(([l]) => Ni(l))), ...t || {} };
      for (const l in y) l.startsWith("light.") && y[l].state === "on" && Tn(l) && C(l, lo(y[l]));
      a ? Rn() : Ma();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ci = !0, Qt == null || Qt.destroy(), Qt = null, wa == null || wa.forEach((t) => t.destroy()), wa = null;
    },
    resume() {
      ci = !1, !(!w || !(S != null && S.querySelector("[data-tf]"))) && (ne.isConnected && Wi(ne.style.order), qi());
    }
  };
}
const Fh = "0.67.0", Wd = "move_assistant", Oh = "move_assistant", rp = "move_assistant_checkin_reminder";
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
    Wh();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${jp}${zp}${Vp}</style>${Gp}`;
    const o = d.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Wd
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
        var w, _;
        return (_ = (w = this._hass) == null ? void 0 : w.connection) != null && _.subscribeMessage ? this._hass.connection.subscribeMessage(b, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, b;
        return Object.keys(((b = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : b.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hh(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
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
      { type: "frontend/subscribe_user_data", key: Wd }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Wd,
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
      event_type: Oh,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Fh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
