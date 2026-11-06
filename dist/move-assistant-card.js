const jp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', zp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr);gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--tile)}.tfBoardMenu .tfHeightTabs button{justify-content:center;min-height:32px;padding:0 4px;border-radius:12px;font-size:13px}.tfBoardMenu .tfHeightTabs button[aria-checked=true]{background:var(--text);color:var(--card)}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"],#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Vp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Gp = `<main id="app"><div class="shell">
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
`, nn = {
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
}, an = (n) => n < 0 ? 0 : n > 1 ? 1 : n, pc = (n, l, o) => n + (l - n) * o, Od = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Up = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), uc = {}, ea = (n, l, o) => {
  const c = n + l + o;
  return uc[c] || (uc[c] = Up(Od(n).map((h, v) => h + (Od(l)[v] - h) * o)));
}, fc = {}, Wl = (n) => fc[n] || (fc[n] = Od(n)), xd = (n, l, o, c) => (h) => {
  if (h <= 0) return 0;
  if (h >= 1) return 1;
  let v = 0, w = 1, A = h;
  for (let y = 0; y < 18; y++)
    A = (v + w) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * o + A * A * A < h ? v = A : w = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, Yp = { std: xd(0.2, 0, 0, 1), acc: xd(0.3, 0, 1, 1), dec: xd(0, 0, 0, 1) };
function Zl(n, l) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function sp(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ea(l.clear[0], l.cloudy[0], 0.12), ea(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ea(l.rain[0], "#000000", 0.22), ea(l.rain[1], "#000000", 0.22)], l;
}
const Wd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], qd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], jd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function zd(n, l = nn) {
  const o = { ...nn, ...l }, c = sp(o), h = String(n).split("/"), v = c[h[0]] ? h[0] : "clear", w = h[1] === "night", A = c[v][w ? 1 : 0], y = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Wd.map(() => ({ o: 0 })),
    rain: qd.map(() => ({ o: 0, dy: -16 })),
    snow: jd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (ve) => Wd.map(() => ({ o: ve }));
  return v === "clear" ? w ? (y.moon.o = 1, y.stars = R(1)) : y.sun.o = 1 : v === "partly" ? (y.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (y.moon = { x: 34, y: 33, d: 48, o: 1 }, y.stars = R(0.7)) : y.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (y.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? y.moon = { x: 40, y: 36, d: 40, o: 0 } : y.sun = { x: 40, y: 36, r: 20, o: 0 }) : (y.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? y.moon = { x: 38, y: 28, d: 36, o: 0 } : y.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? y.snow = jd.map(() => ({ o: 1, dy: 0 })) : y.rain = qd.map((ve, ie) => ({ o: v === "storm" && ie === 1 ? 0 : 1, dy: 0 })), v === "storm" && (y.bolt = { o: 1, dy: 0 })), y;
}
const hc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Zp(n, l, o, c = nn, h = !1) {
  const v = { ...nn, ...c }, w = (U, $) => U > 0.01 && $ > 0.01 ? "stay" : U > 0.01 ? "leave" : $ > 0.01 ? "enter" : "none", A = (U, $, ae, Z) => {
    const G = U[0] + $ * Z, W = U[1] - (ae - 1 - $) * Z;
    return Yp[U[2]](an((o - G) / Math.max(1e-3, W - G)));
  }, y = (U, $, ae, Z = 0, G = 1, W = 0) => {
    const ue = w(U.o, $.o);
    if (ue === "none") return { ...$, o: 0 };
    const ee = A(hc[ae][ue], Z, G, W), fe = {};
    for (const J in $) fe[J] = h && ue !== "stay" && J !== "o" ? ue === "leave" ? U[J] : $[J] : pc(U[J], $[J], ee);
    return fe;
  }, R = A(hc.sky, 0, 1, 0);
  let ve, ie;
  if (n.night !== l.night) {
    const U = Math.min(n.clearness, l.clearness), $ = ea(ea(n.sky, l.sky, 0.5), v.dusk, 0.6 * U);
    ve = R < 0.5 ? ea(n.sky, $, R * 2) : ea($, l.sky, R * 2 - 1), ie = U > 0.5 ? [n.sky, v.dusk, l.sky] : [n.sky, l.sky];
  } else
    ve = ea(n.sky, l.sky, R), ie = [n.sky, l.sky];
  return {
    night: o < 0.5 ? n.night : l.night,
    clearness: pc(n.clearness, l.clearness, o),
    sky: ve,
    skyStops: ie,
    skyT: R,
    sun: y(n.sun, l.sun, "body"),
    moon: y(n.moon, l.moon, "body"),
    cloud: y(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((U, $) => y(n.stars[$], U, "fx", $, l.stars.length, 0.05)),
    rain: l.rain.map((U, $) => y(n.rain[$], U, "fx", $, l.rain.length, 0.05)),
    snow: l.snow.map((U, $) => y(n.snow[$], U, "fx", $, l.snow.length, 0.05)),
    bolt: y(n.bolt, l.bolt, "fx")
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
], tn = (n, l) => (Kp[(l & 7) * 8 + (n & 7)] + 0.5) / 64, $p = 0, Ud = 1, Yd = 2, Zd = 3, Kd = 4, en = 5, rs = 6, Pi = 7, $d = 8, zl = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Xp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Jp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), lp = (n, l, o) => {
  let c = !1;
  for (let h = 0, v = n.length - 1; h < n.length; v = h++) {
    const w = n[h], A = n[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function dp(n, { size: l = 90, px: o = 2, oneBit: c = !1, colors: h = nn, ink: v = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: y = !1 } = {}) {
  const R = { ...nn, ...h }, ve = Math.sin, ie = Math.PI * 2, U = Math.max(6, Math.round(l / o)), $ = U / 90, ae = y ? Math.floor(A / 100) * 100 : 0, Z = y ? ve(ie * ae / 3600) : 0, G = y ? 1.8 * ve(ie * ae / 6400) : 0, W = y ? 0.9 * ve(ie * ae / 4100) : 0, ue = y ? 0.8 * ve(ie * ae / 5200) : 0, ee = ae / 3400 % 1, fe = y && n.bolt.o > 0.5 && (ee < 0.04 || ee > 0.08 && ee < 0.11), J = new Array(U * U), E = new Uint8Array(U * U), N = (k, _, L, P, me) => {
    L == null || k < 0 || _ < 0 || k >= U || _ >= U || (P >= 1 || P > tn(k + 5, _ + 3)) && (J[_ * U + k] = L, E[_ * U + k] = me);
  }, re = (k, _, L, P) => {
    for (let me = Math.max(0, Math.floor(_ - L) - 1); me <= Math.min(U - 1, _ + L + 1); me++) for (let z = Math.max(0, Math.floor(k - L) - 1); z <= Math.min(U - 1, k + L + 1); z++) P(z, me, z + 0.5 - k, me + 0.5 - _);
  }, Ee = n.skyStops || [n.sky], I = n.skyT || 0;
  for (let k = 0; k < U; k++) {
    const _ = n.night ? an(1 - (k + 0.5) / (U * 0.7)) * 0.85 : an(((k + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let L = 0; L < U; L++) {
      let P = Ee[0];
      if (Ee.length > 1) {
        const me = I * (Ee.length - 1), z = Math.min(Ee.length - 2, Math.floor(me));
        P = me - z > tn(L, k) ? Ee[z + 1] : Ee[z];
      }
      _ > tn(L + 2, k + 5) && (P = n.night ? ea(P, "#000000", 0.28) : ea(P, "#ffffff", 0.2)), J[k * U + L] = fe ? ea(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const k = n.sun.x * $, _ = n.sun.y * $, L = Math.max(1, n.sun.r * $);
    if (y) {
      const P = L * (1.45 + 0.06 * Z), me = ea(R.sun, "#ffffff", 0.55);
      if (re(k, _, P, (z, ce, ge, ye) => {
        const Xe = Math.sqrt(ge * ge + ye * ye);
        Xe > L && Xe < P && N(z, ce, me, 0.26 * (1 - (Xe - L) / (P - L)) * n.sun.o, $p);
      }), n.sun.o > 0.5) {
        const z = Math.floor(ae / 500) % 2, ce = Math.max(1, L * 0.22);
        for (let ge = 0; ge < 8; ge++) if (ge % 2 === z) for (let ye = L + 1.5; ye < L + 1.5 + ce; ye += 0.7) N(Math.floor(k + Math.cos(ge * Math.PI / 4) * ye), Math.floor(_ + Math.sin(ge * Math.PI / 4) * ye), R.sun, n.sun.o, $d);
      }
    }
    re(k, _, L, (P, me, z, ce) => {
      if (z * z + ce * ce > L * L) return;
      const ge = ((z * 0.643 + ce * 0.766) / L + 1) / 2;
      N(P, me, an((ge - 0.62) / 0.38) > tn(P, me) ? R.sunEdge : R.sun, n.sun.o, Ud);
    });
  }
  if (Wd.forEach((k, _) => {
    const L = n.stars[_].o;
    if (L < 0.01) return;
    const P = Math.floor(k[0] * $), me = Math.floor(k[1] * $), z = y ? (Math.floor(ae / 300) + _ * 3) % 6 : 0;
    if (z === 5) return;
    const ce = Math.round(k[2] * $ * (z === 4 ? 0.3 : z < 2 ? 1 : 0.6));
    N(P, me, R.star, L, Pi);
    for (let ge = 1; ge <= ce; ge++) {
      const ye = ge === ce && ce > 1 ? ea(R.star, n.sky, 0.5) : R.star;
      N(P - ge, me, ye, L, Pi), N(P + ge, me, ye, L, Pi), N(P, me - ge, ye, L, Pi), N(P, me + ge, ye, L, Pi);
    }
  }), n.moon.o > 0.01) {
    const k = Math.max(1.5, n.moon.d * $ * 0.37), _ = n.moon.x * $, L = n.moon.y * $ + (y && ue > 0.4 ? -1 : 0), P = _ + 0.547 * k, me = L - 0.503 * k, z = 0.82 * k, ce = ea(R.moon, "#ffffff", 0.6);
    re(_, L, k, (ge, ye, Xe, lt) => {
      if (Xe * Xe + lt * lt > k * k) return;
      const Lt = ge + 0.5 - P, ka = ye + 0.5 - me;
      Lt * Lt + ka * ka <= z * z || N(ge, ye, an((lt + k) / (2 * k) * 1.1 - 0.1) > tn(ge, ye) ? R.moon : ce, n.moon.o, Yd);
    });
  }
  const Ie = Math.max(2, Math.round(15.65 * $)), V = Math.max(1, Math.round(5.87 * $ * 0.5));
  qd.forEach((k, _) => {
    const L = n.rain[_];
    let P = L.dy, me = L.o;
    if (me < 0.01) return;
    if (y) {
      const ge = (ae / 950 + _ / 3) % 1;
      P += -5 + ge * 14, me *= ge < 0.18 ? ge / 0.18 : ge > 0.72 ? (1 - ge) / 0.28 : 1;
    }
    const z = (k[0] + 3 + G) * $, ce = (k[1] + P) * $;
    for (let ge = 0; ge < Ie; ge++) for (let ye = 0; ye < V; ye++) N(Math.floor(z - 0.208 * ge) + ye, Math.floor(ce) + ge, R.rain, me, Kd);
  });
  const We = Math.max(0, Math.round(7.34 * $ / 2.6));
  if (jd.forEach((k, _) => {
    const L = n.snow[_];
    let P = L.dy, me = 0, z = L.o;
    if (z < 0.01) return;
    if (y) {
      const ye = (ae / 3200 + _ / 5) % 1;
      P += -6 + ye * 14, me = 1.5 * ve(ie * (ye * 1.5 + _ / 5)), z *= ye < 0.2 ? ye / 0.2 : ye > 0.75 ? (1 - ye) / 0.25 : 1;
    }
    const ce = Math.floor((k[0] + 3.67 + me + G) * $), ge = Math.floor((k[1] + 3.67 + P) * $);
    N(ce, ge, R.snow, z, en);
    for (let ye = 1; ye <= We; ye++)
      N(ce - ye, ge, R.snow, z, en), N(ce + ye, ge, R.snow, z, en), N(ce, ge - ye, R.snow, z, en), N(ce, ge + ye, R.snow, z, en), We > 1 && ye < We && (N(ce - ye, ge - ye, R.snow, z, en), N(ce + ye, ge - ye, R.snow, z, en), N(ce - ye, ge + ye, R.snow, z, en), N(ce + ye, ge + ye, R.snow, z, en));
  }), n.bolt.o > 0.01)
    if (U >= 30) {
      const k = 39 + G, _ = 50 + n.bolt.dy;
      for (let L = Math.floor(_ * $); L <= (_ + 28) * $; L++) for (let P = Math.floor(k * $); P <= (k + 13) * $; P++)
        lp(Jp, (P + 0.5) / $ - k, (L + 0.5) / $ - _) && N(P, L, R.sun, n.bolt.o, rs);
    } else {
      const k = U / 18, _ = 7, L = 10 + Math.round(n.bolt.dy * 0.2);
      Xp.forEach((P, me) => P.split("").forEach((z, ce) => {
        if (z !== "#") return;
        const ge = Math.floor((_ + ce) * k), ye = Math.floor((L + me) * k);
        for (let Xe = ye; Xe < Math.max(ye + 1, Math.floor((L + me + 1) * k)); Xe++) for (let lt = ge; lt < Math.max(ge + 1, Math.floor((_ + ce + 1) * k)); lt++) N(lt, Xe, R.sun, n.bolt.o, rs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const k = Math.max(3, n.cloud.w * $), _ = k * 0.6665, L = (n.cloud.x + G) * $ - k / 2, P = (n.cloud.y + W) * $ - _ / 2, me = ea(R.cloudDay, R.cloudNight, Math.round(n.cloud.f * 4) / 4), z = ea(me, "#000000", 0.16);
    for (let ce = Math.max(0, Math.floor(P) - 1); ce <= Math.min(U - 1, P + _ + 1); ce++) for (let ge = Math.max(0, Math.floor(L) - 1); ge <= Math.min(U - 1, L + k + 1); ge++) {
      const ye = (ge + 0.5 - L) / k, Xe = (ce + 0.5 - P) / k;
      zl(ye, Xe) && N(ge, ce, !zl(ye, Xe + 1 / k) || an((Xe - 0.42) / 0.25) * 0.8 > tn(ge, ce) ? z : me, n.cloud.o, Zd);
    }
  }
  return cp(J, E, U, U, { oneBit: c, ink: v, paper: w, snowInk: !n.night });
}
function cp(n, l, o, c, { oneBit: h, ink: v, paper: w, snowInk: A }) {
  const y = new Uint8ClampedArray(o * c * 4), R = Wl(v), ve = Wl(w);
  for (let ie = 0; ie < c; ie++) for (let U = 0; U < o; U++) {
    const $ = ie * o + U, ae = l[$];
    if (n[$] == null) continue;
    let Z = Wl(n[$]);
    if (h) {
      let G;
      ae === Kd || ae === $d ? G = !0 : ae === en ? G = A : ae === Pi || ae === rs ? G = !1 : G = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= tn(U, ie), (ae === Ud || ae === Yd || ae === Zd || ae === rs) && (U > 0 && l[$ - 1] !== ae || U < o - 1 && l[$ + 1] !== ae || ie > 0 && l[$ - o] !== ae || ie < c - 1 && l[$ + o] !== ae) && (G = !0), Z = G ? R : ve;
    }
    y[$ * 4] = Z[0], y[$ * 4 + 1] = Z[1], y[$ * 4 + 2] = Z[2], y[$ * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const Qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, eu = (n) => Zl(n, !1).split("/")[0], yd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, tu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", au = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", nu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", iu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ru = [".##", "##.", ".#.", "#.."];
function pp(n, { width: l, height: o, colors: c, wave: h = 0.38, soft: v = 6, glow: w = 0.6 }) {
  const A = { ...nn, dawn: "#e5a77e", ...c }, y = sp(A), R = l, ve = o, ie = R / 6, U = ie / 2, $ = Math.PI * 2, ae = n.length ? n : [{ cond: "cloudy", night: !1 }], Z = [...Array(12)].map((ee, fe) => {
    const J = ae[Math.min(fe, ae.length - 1)], E = eu(J.cond), N = fe % 2 === 1;
    return { cond: J.cond, k: E, night: N, sky: y[E][N ? 1 : 0], cover: Qp[E] };
  }), G = (ee) => ve * (0.5 - h * Math.cos($ * (ee / ie - 0.25)));
  return { C: A, S: Z, W: R, H: ve, cw: ie, sw: U, TAU: $, yb: G, side: (ee, fe, J) => {
    const E = (ee ? G(fe) - J : J - G(fe)) / Math.max(3, v * 1.4) + 0.5;
    return E <= 0 ? 0 : E >= 1 ? 1 : E;
  }, glowAt: (ee) => {
    const fe = ((ee / ie - 0.25) % 1 + 1) % 1, J = Math.max(0, Math.min(5, Math.round(ee / ie - 0.25))), E = Math.max(0, Math.min(5, Math.round(ee / ie - 0.75))), N = 1 - (Z[2 * J].cover + Z[2 * E + 1].cover) / 2, re = Math.sin(Math.PI * Math.min(1, Math.max(0, G(ee) / ve)));
    return { c: fe < 0.5 ? A.dusk : A.dawn, a: w * (0.2 + 0.8 * N) * re * re };
  }, soft: v, tw: ie * 0.3, sy: ve / 90 };
}
function up(n, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: h, sw: v, side: w, C: A, TAU: y, sy: R } = n, ve = l, ie = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((U, $) => {
    const ae = yd(c * 977 + $ * 131 + 7), Z = ($ + 0.5) * v, G = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let W = 0; W < G; W++) {
      const ue = Z + (ae() - 0.5) * v * 1.6, ee = (6 + ae() * 76) * R, fe = ae() < 0.35, J = 1.8 + ae() * 1.6, E = w(!0, ue, ee) * (fe ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * ve / 2600 + W * 1.7 + $) : 1);
      E >= 0.03 && ie.stars.push({ x: ue, y: ee, big: fe, size: J, o: E });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Z + (ae() - 0.5) * v * 0.3, ue = Math.min(15, v * 0.29);
      ie.suns.push({ x: W, y: 32 * R, rad: ue, halo: ue * 2.8 * (o ? 1 + 0.07 * Math.sin(y * ve / 3600 + $) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Math.min(0.78, v * 0.55 / 34), ue = Z - 23 * W + (ae() - 0.5) * v * 0.2;
      ie.moons.push({ x: ue + 23 * W, y: (4 + (o ? 0.8 * Math.sin(y * ve / 5200 + $) : 0)) * R + 23 * W, d: 46 * W });
    }
  }), h.forEach((U, $) => {
    const ae = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ae) return;
    const Z = yd(c * 577 + $ * 71 + 3), G = ($ + 0.5) * v, W = U.k === "rain" || U.k === "storm" || U.night ? A.cloudNight : A.cloudDay, ue = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let ee = 0; ee < ae; ee++) {
      const fe = v / 46 * (U.k === "partly" ? 0.85 : 0.75 + Z() * 0.55), J = G + (U.k === "partly" ? v * 0.12 : (Z() - 0.5) * v * 1.05), E = (U.k === "partly" ? 40 : 6 + Z() * 26) * R, N = o ? 2.5 * Math.sin(y * ve / 9e3 + $ * 1.3 + ee * 2.1) : 0, re = o ? 0.9 * Math.sin(y * ve / 6100 + $ + ee) : 0;
      ie.clouds.push({ x: J - 23 * fe + N, y: E - 15.33 * fe + re, w: 46 * fe, h: 30.66 * fe, fill: W, o: ue * (ae > 1 && ee === 0 ? 0.85 : 1) });
    }
  }), h.forEach((U, $) => {
    const ae = yd(c * 313 + $ * 29 + 11), Z = ($ + 0.5) * v, G = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let ue = 0; ue < G; ue++) {
      let ee = Z + (ae() - 0.5) * v * 1.05, fe = 44 + ae() * 36, J = 1;
      if (o) {
        const N = ((fe - 44 + ve * 0.04) % 36 + 36) % 36;
        ee -= 0.21 * (N - (fe - 44)), fe = 44 + N, J = Math.min(1, N / 6, (36 - N) / 6);
      }
      fe *= R;
      const E = w(U.night, ee, fe) * J;
      E >= 0.05 && ie.drops.push({ x: ee, y: fe, o: E });
    }
    const W = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let ue = 0; ue < W; ue++) {
      let ee = Z + (ae() - 0.5) * v * 1.05, fe = 40 + ae() * 44, J = 1;
      if (o) {
        const N = ((fe - 40 + ve * 9e-3) % 44 + 44) % 44;
        fe = 40 + N, ee += 1.6 * Math.sin(y * ve / 2800 + ue * 1.9 + $), J = Math.min(1, N / 6, (44 - N) / 6);
      }
      fe *= R;
      const E = w(U.night, ee, fe) * J;
      E >= 0.05 && ie.flakes.push({ x: ee, y: fe, o: E });
    }
    if (U.k === "fog") {
      const ue = U.night ? "#c8ccd6" : "#ffffff", ee = U.night ? 0.28 : 0.62, fe = o ? 4 * Math.sin(y * ve / 8e3 + $) : 0;
      for (let J = 0; J < 4; J++) ie.fogs.push({ x: Z - v * 0.75 + J % 2 * v * 0.18 + (J % 2 ? fe : -fe), y: (30 + J * 13) * R, w: v * 1.3, c: ue, a: ee });
    }
    if (U.k === "storm") {
      const ue = (ve / 3400 + $ * 0.37) % 1;
      ie.bolts.push({ x: Z + (ae() - 0.5) * v * 0.3 - 5, y: 36 * R, o: o && !(ue < 0.05 || ue > 0.09 && ue < 0.12) ? 0.8 : 1 });
    }
  }), ie;
}
function su(n, l, o, c, h, v, w, A) {
  const { S: y, C: R, cw: ve, yb: ie, glowAt: U, soft: $, tw: ae, sy: Z } = n, G = new Array(o * c), W = new Uint8Array(o * c), ue = new Uint8Array(o * c), ee = (k, _, L, P, me) => {
    L == null || k < 0 || _ < 0 || k >= o || _ >= c || (P >= 1 || P > tn(k + 5, _ + 3)) && (G[_ * o + k] = L, W[_ * o + k] = me);
  }, fe = (k, _, L, P) => {
    for (let me = Math.max(0, Math.floor(_ - L) - 1); me <= Math.min(c - 1, _ + L + 1); me++) for (let z = Math.max(0, Math.floor(k - L) - 1); z <= Math.min(o - 1, k + L + 1); z++) P(z, me, z + 0.5 - k, me + 0.5 - _);
  }, J = (k, _, L) => {
    for (let me = 0; me < k.length - 1; me++) {
      const z = (me + _) * ve;
      if (L < z - ae / 2) return [k[me], k[me], 0];
      if (L <= z + ae / 2) return [k[me], k[me + 1], (L - z + ae / 2) / ae];
    }
    const P = k[k.length - 1];
    return [P, P, 0];
  }, E = y.filter((k) => !k.night).map((k) => k.sky), N = y.filter((k) => k.night).map((k) => k.sky), re = $ / v, Ee = 16 * Z / v;
  for (let k = 0; k < o; k++) {
    const _ = (k + 0.5) * h, L = ie(_) / v, P = J(E, 0.75, _), me = J(N, 1.25, _), z = U(_);
    for (let ce = 0; ce < c; ce++) {
      const ge = tn(k, ce), ye = ce + 0.5 - L, Xe = (re > 0.01 ? an(0.5 + ye / re) : ye > 0 ? 1 : 0) > ge;
      let lt = Xe ? P[2] > ge ? P[1] : P[0] : me[2] > ge ? me[1] : me[0];
      (Xe ? an(((ce + 0.5) / c - 0.45) / 0.55) * 0.7 : an(1 - (ce + 0.5) / (c * 0.55)) * 0.7) > tn(k + 2, ce + 5) && (lt = Xe ? ea(lt, "#ffffff", 0.18) : ea(lt, "#000000", 0.25)), Xe && ye >= 0 && ye < Ee && z.a * 1.3 * (1 - ye / Ee) > tn(k + 6, ce + 1) && (lt = z.c), G[ce * o + k] = lt, ue[ce * o + k] = Xe ? 0 : 1;
    }
  }
  const I = ea(R.sun, "#ffffff", 0.55), Ie = ea(R.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const _ = Math.floor(k.x / h), L = Math.floor(k.y / v);
    if (_ < 0 || L < 0 || _ >= o || L >= c || !ue[L * o + _] || k.o < 0.15) return;
    const P = k.o > 0.45 ? R.star : ea(R.star, G[L * o + _], 0.5), me = k.big && k.o > 0.6 ? Math.floor(k.size / h) : 0;
    ee(_, L, P, 1, Pi);
    for (let z = 1; z <= me; z++) [[_ - z, L], [_ + z, L], [_, L - z], [_, L + z]].forEach((ce) => {
      ce[0] >= 0 && ce[1] >= 0 && ce[0] < o && ce[1] < c && ue[ce[1] * o + ce[0]] && ee(ce[0], ce[1], P, 1, Pi);
    });
  }), l.suns.forEach((k) => {
    const _ = Math.max(1.5, k.rad / h), L = k.x / h, P = k.y / v, me = k.halo / h * 0.85;
    if (fe(L, P, me, (z, ce, ge, ye) => {
      const Xe = Math.sqrt(ge * ge + ye * ye);
      Xe > _ && Xe < me && !ue[ce * o + z] && ee(z, ce, I, 0.3 * (1 - (Xe - _) / (me - _)), 0);
    }), A) {
      const z = Math.floor(w / 500) % 2, ce = Math.max(1, _ * 0.3);
      for (let ge = 0; ge < 8; ge++) if (ge % 2 === z) for (let ye = _ + 1.2; ye < _ + 1.2 + ce; ye += 0.7) ee(Math.floor(L + Math.cos(ge * Math.PI / 4) * ye), Math.floor(P + Math.sin(ge * Math.PI / 4) * ye), R.sun, 1, $d);
    }
    fe(L, P, _, (z, ce, ge, ye) => {
      ge * ge + ye * ye <= _ * _ && ee(z, ce, an(((ye / _ + 1) / 2 - 0.6) / 0.4) > tn(z, ce) ? R.sunEdge : R.sun, 1, Ud);
    });
  }), l.moons.forEach((k) => {
    const _ = Math.max(1.5, k.d * 0.37 / h), L = k.x / h, P = k.y / v, me = L + 0.547 * _, z = P - 0.503 * _, ce = 0.82 * _;
    fe(L, P, _, (ge, ye, Xe, lt) => {
      if (Xe * Xe + lt * lt > _ * _) return;
      const Lt = ge + 0.5 - me, ka = ye + 0.5 - z;
      Lt * Lt + ka * ka > ce * ce && ee(ge, ye, an((lt + _) / (2 * _) * 1.1 - 0.1) > tn(ge, ye) ? R.moon : Ie, 1, Yd);
    });
  }), l.clouds.forEach((k) => {
    const _ = Math.max(3, k.w / h), L = _ * 0.6665, P = k.x / h, me = k.y / v, z = ea(k.fill, "#000000", 0.16);
    for (let ce = Math.max(0, Math.floor(me) - 1); ce <= Math.min(c - 1, me + L + 1); ce++) for (let ge = Math.max(0, Math.floor(P) - 1); ge <= Math.min(o - 1, P + _ + 1); ge++) {
      const ye = (ge + 0.5 - P) / _, Xe = (ce + 0.5 - me) / _;
      zl(ye, Xe) && ee(ge, ce, !zl(ye, Xe + 1 / _) || an((Xe - 0.42) / 0.25) * 0.8 > tn(ge, ce) ? z : k.fill, k.o, Zd);
    }
  }), l.fogs.forEach((k) => {
    const _ = Math.floor(k.y / v), L = Math.max(_, Math.floor((k.y + 6 * Z) / v) - 1), P = Math.floor(k.x / h), me = Math.floor((k.x + k.w) / h);
    for (let z = _; z <= L; z++) for (let ce = P; ce <= me; ce++) {
      const ge = (ce - P) / Math.max(1, me - P);
      ee(ce, z, k.c, k.a * (ge < 0.25 ? ge / 0.25 : ge > 0.75 ? (1 - ge) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const _ = k.x / h, L = Math.floor(k.y / v);
    for (let P = 0; P < V; P++) ee(Math.floor(_ - 0.208 * P * v / h), L + P, R.rain, k.o, Kd);
  });
  const We = Math.max(0, Math.round(4.4 / h / 2.6));
  return l.flakes.forEach((k) => {
    const _ = Math.floor(k.x / h), L = Math.floor(k.y / v);
    ee(_, L, R.snow, k.o, en);
    for (let P = 1; P <= We; P++)
      ee(_ - P, L, R.snow, k.o, en), ee(_ + P, L, R.snow, k.o, en), ee(_, L - P, R.snow, k.o, en), ee(_, L + P, R.snow, k.o, en);
  }), l.bolts.forEach((k) => {
    if (h <= 3.5)
      for (let _ = Math.floor(k.y / v); _ <= (k.y + 24) / v; _++) for (let L = Math.floor(k.x / h); L <= (k.x + 11) / h; L++)
        lp(iu, (L + 0.5) * h - k.x, (_ + 0.5) * v - k.y) && ee(L, _, R.sun, 1, rs);
    else {
      const _ = Math.round(k.x / h), L = Math.round(k.y / v);
      ru.forEach((P, me) => P.split("").forEach((z, ce) => {
        z === "#" && ee(_ + ce, L + me, R.sun, 1, rs);
      }));
    }
  }), { col: G, ids: W };
}
function lu(n, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), h = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / h, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, y = ($) => {
    const ae = pp($, l);
    return su(ae, up(ae, { clock: A, ambient: l.ambient, seed: l.seed }), c, h, v, w, A, l.ambient);
  }, R = y(n), ve = l.reveal == null ? 1 : an(l.reveal);
  let ie = R.col, U = R.ids;
  if (ve < 1) {
    const $ = l.prev ? y(l.prev) : null, ae = ve * (c + 12);
    ie = new Array(c * h), U = new Uint8Array(c * h);
    for (let Z = 0; Z < c * h; Z++) {
      const G = Z % c, W = Z / c | 0;
      (l.reduce ? ve : an((ae - G) / 12)) > tn(G, W) ? (ie[Z] = R.col[Z], U[Z] = R.ids[Z]) : $ ? (ie[Z] = $.col[Z], U[Z] = $.ids[Z]) : (ie[Z] = null, U[Z] = 255);
    }
  }
  return cp(ie, U, c, h, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function du(n, l, o) {
  const c = o.width, h = o.height, v = o.reveal == null ? 1 : an(o.reveal), w = (U, $) => {
    const ae = pp($, o);
    cu(U, ae, up(ae, o));
  };
  if (n.clearRect(0, 0, c, h), v >= 1) {
    w(n, l);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = v, w(n, l), n.restore();
    return;
  }
  const A = n.canvas, y = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (y.width !== A.width || y.height !== A.height) && (y.width = A.width, y.height = A.height);
  const R = y.getContext("2d");
  R.setTransform(n.getTransform()), R.clearRect(0, 0, c, h), w(R, l);
  const ve = v * (c + 64) - 64, ie = R.createLinearGradient(ve, 0, ve + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ie, R.fillRect(0, 0, c, h), R.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function cu(n, l, o) {
  const { W: c, H: h, S: v, C: w, cw: A, yb: y, glowAt: R, soft: ve, tw: ie, sy: U } = l, $ = (I, Ie) => {
    const V = Wl(I);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, Ie)).toFixed(3) + ")";
  }, ae = (I, Ie) => {
    const V = n.createLinearGradient(0, 0, c, 0);
    V.addColorStop(0, I[0]);
    for (let We = 0; We < I.length - 1; We++) {
      const k = (We + Ie) * A, _ = (k - ie / 2) / c, L = (k + ie / 2) / c;
      _ > 0 && _ < 1 && V.addColorStop(_, I[We]), L > 0 && L < 1 && V.addColorStop(L, I[We + 1]);
    }
    return V.addColorStop(1, I[I.length - 1]), V;
  }, Z = Math.max(24, Math.ceil(c / 4)), G = (I, Ie) => {
    n.beginPath();
    for (let V = 0; V <= Z; V++) {
      const We = c * V / Z, k = I == null ? 0 : y(We) + I;
      V ? n.lineTo(We, k) : n.moveTo(We, k);
    }
    for (let V = Z; V >= 0; V--) {
      const We = c * V / Z;
      n.lineTo(We, y(We) + Ie);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ae(v.filter((I) => !I.night).map((I) => I.sky), 0.75), n.fillRect(0, 0, c, h);
  const W = n.createLinearGradient(0, 0, c, 0);
  for (let I = 0; I <= 64; I++) {
    const Ie = R(c * I / 64);
    W.addColorStop(I / 64, $(Ie.c, Math.min(1, Ie.a)));
  }
  n.fillStyle = W;
  for (let I = 0; I < 8; I++)
    n.globalAlpha = 1 - I / 8, G(I * 2 * U, (I + 1) * 2 * U);
  n.fillStyle = ae(v.filter((I) => I.night).map((I) => I.sky), 1.25);
  const ue = Math.max(0.5, ve), ee = 6;
  n.globalAlpha = 1, G(null, -ue);
  for (let I = 0; I < ee; I++)
    n.globalAlpha = 1 - (I + 0.5) / ee, G(-ue + 2 * ue * I / ee, -ue + 2 * ue * (I + 1) / ee);
  n.globalAlpha = 1;
  const fe = new Path2D(nu), J = new Path2D(au), E = new Path2D(tu), N = new Path2D(ou);
  n.fillStyle = w.star, o.stars.forEach((I) => {
    n.globalAlpha = I.o, I.big ? (n.save(), n.translate(I.x, I.y), n.scale(I.size, I.size), n.fill(fe), n.restore()) : (n.beginPath(), n.arc(I.x, I.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const re = ea(w.sun, "#ffffff", 0.55);
  o.suns.forEach((I) => {
    const Ie = n.createRadialGradient(I.x, I.y, 0, I.x, I.y, I.halo);
    Ie.addColorStop(0, $(re, 0.42)), Ie.addColorStop(0.7, $(re, 0)), n.fillStyle = Ie, n.beginPath(), n.arc(I.x, I.y, I.halo, 0, Math.PI * 2), n.fill();
    const V = n.createLinearGradient(0, I.y - I.rad, 0, I.y + I.rad);
    V.addColorStop(0.6, w.sun), V.addColorStop(1, w.sunEdge), n.fillStyle = V, n.beginPath(), n.arc(I.x, I.y, I.rad, 0, Math.PI * 2), n.fill();
  });
  const Ee = ea(w.moon, "#ffffff", 0.6);
  o.moons.forEach((I) => {
    n.save(), n.translate(I.x - I.d / 2, I.y - I.d / 2), n.scale(I.d / 46, I.d / 46);
    const Ie = n.createLinearGradient(0, 6, 0, 40);
    Ie.addColorStop(0, Ee), Ie.addColorStop(1, w.moon), n.fillStyle = Ie, n.fill(J), n.restore();
  }), o.clouds.forEach((I) => {
    n.save(), n.globalAlpha = I.o, n.translate(I.x, I.y), n.scale(I.w / 46, I.h / 30.66), n.translate(-4, -9.67), n.fillStyle = I.fill, n.fill(E), n.restore();
  }), o.fogs.forEach((I) => {
    const Ie = n.createLinearGradient(I.x, 0, I.x + I.w, 0);
    Ie.addColorStop(0, $(I.c, 0)), Ie.addColorStop(0.25, $(I.c, I.a)), Ie.addColorStop(0.75, $(I.c, I.a)), Ie.addColorStop(1, $(I.c, 0)), n.fillStyle = Ie, n.fillRect(I.x, I.y, I.w, 6 * U);
  }), n.fillStyle = w.rain, o.drops.forEach((I) => {
    n.save(), n.globalAlpha = I.o, n.translate(I.x, I.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((I) => {
    n.globalAlpha = I.o, n.beginPath(), n.arc(I.x, I.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((I) => {
    n.save(), n.globalAlpha = I.o, n.translate(I.x, I.y), n.fill(N), n.restore();
  }), n.restore();
}
function pu(n, l) {
  var oc, ic, rc, sc, lc, dc, cc;
  const o = (t) => n.getElementById(t), c = o("workoutView"), h = o("workoutNameInput");
  let v = !0;
  const w = o("homeClock");
  function A() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const y = o("createFlow"), R = o("createMovementsSlot"), ve = o("createTimingSlot"), ie = o("createFinishSlot"), U = o("movementStepSummary"), $ = o("timingStepSummary"), ae = o("finishStepSummary"), Z = o("continueToTiming"), G = o("continueToFinish"), W = o("finishMoveButton");
  let ue = !1, ee = [];
  function fe(t) {
    !t || ee.some((r) => r.node === t) || ee.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function J(t, r) {
    t && (fe(t), r.appendChild(t));
  }
  function E() {
    [...ee].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), ee = [];
  }
  function N(t) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (ue = !0), re();
  }
  function re() {
    var ne, he;
    if (!Me) return;
    Ke[xt];
    const t = Qe.filter((oe) => !oe.hidden), r = t.filter((oe) => oe.kind !== "rest").length, s = t.filter((oe) => oe.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const p = r > 0, g = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    g.disabled = !p, Z.disabled = !p, $.textContent = p ? Un(_.value) + " · " + Ut(L.value) + " movement · " + Ut(P.value) + " rest" : "Add a movement first", T.disabled = !(p && ue);
    const B = ((h == null ? void 0 : h.value) || "").trim(), j = [];
    (ne = o("includeWarmupPreset")) != null && ne.checked && j.push("warm-up"), (he = o("includeCooldownPreset")) != null && he.checked && j.push("cooldown"), ae.textContent = B ? B + (j.length ? " · " + j.join(" + ") : "") : j.length ? j.join(" + ") : "Name and optional extras";
  }
  function Ee() {
    var Be, et, Oe;
    y.hidden = !1, ue = !1;
    const t = n.querySelector(".editNameRow"), r = o("createMoveOptions"), s = n.querySelector(".timeTiles"), p = o("routineSummaryModal"), g = n.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), B = (Be = o("warmupList")) == null ? void 0 : Be.closest("section"), j = o("movementCreatorLaunch"), ne = o("movementCreator"), he = (et = o("strengthList")) == null ? void 0 : et.closest("section"), oe = (Oe = o("cooldownList")) == null ? void 0 : Oe.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), B, j, ne, he, oe].forEach((De) => De && J(De, R)), [r, s, p, g, T].forEach((De) => J(De, ve)), J(t, ie), N("movements"), re();
  }
  function I() {
    E(), y.hidden = !0, n.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || N(t.dataset.openStep);
  })), Z.addEventListener("click", () => {
    Z.disabled || N("timing");
  }), G.addEventListener("click", () => N("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const Ie = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, V = o("homeNav"), We = o("settingsNav");
  function k(t) {
    Object.entries(Ie).forEach(([r, s]) => s.classList.toggle("active", r === t)), V.classList.toggle("active", t === "home"), We.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Yi, 400), t === "settings" && (requestAnimationFrame(() => ur(n.querySelector(".tab.active"), !1)), Vr());
  }
  const _ = o("totalTime"), L = o("workTime"), P = o("restTime"), me = o("totalOut"), z = o("workOut"), ce = o("restOut"), ge = o("totalFill"), ye = o("workFill"), Xe = o("restFill"), lt = o("roundsInput"), Lt = o("roundsFill"), ka = o("roundsOut"), Ia = o("totalLabel"), mt = o("routineSummaryModal"), Je = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Tt = Je.map((t) => ({ ...t })), Qe = [
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
  const wa = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ea = wa.map((t) => ({ ...t }));
  const Sr = {
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
  }, dt = Bo(l.data), Ke = dt.profiles;
  let xt = Ke[dt.selected] ? dt.selected : dt.order.find((t) => Ke[t]) || "kettlebell";
  function Bo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Sr)), p = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((g) => s[g]);
    return Object.keys(s).forEach((g) => {
      p.includes(g) || p.push(g);
    }), {
      v: 1,
      profiles: s,
      order: p,
      selected: r.selected || p[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : Cr(r.energy)).map(Ii),
      settings: { ...r.settings || {} }
    };
  }
  function Cr(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((p) => {
      const g = new Date(p.at);
      if (isNaN(g)) return;
      const T = g.getFullYear() + "-" + String(g.getMonth() + 1).padStart(2, "0") + "-" + String(g.getDate()).padStart(2, "0"), B = g.getHours() < 14 ? "morning" : "evening";
      if (s.some((ne) => ne.date === T && ne.slot === B)) return;
      const j = r.indexOf(p.value) + 1;
      j > 0 && s.push({ date: T, slot: B, mood: null, energy: j, at: p.at });
    }), s;
  }
  function Ii(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function Ma() {
    Me || (dt.selected = xt, dt.order = dt.order.filter((t) => Ke[t] && t !== qt), l.save(dt));
  }
  function ft() {
    return dt.settings;
  }
  function Ot(t) {
    const r = Ke[t];
    if (!r) return;
    xt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, L.value = r.work, P.value = r.rest, lt.value = r.rounds || 1, r.customSequence) {
      const p = (r.sequence || []).map((T) => ({ ...T })), g = (T) => p.filter((B) => B.presetRole === T).map(({ presetRole: B, ...j }) => j);
      Tt = (r.warmup || g("warmup")).map((T) => ({ ...T })), Ea = (r.cooldown || g("cooldown")).map((T) => ({ ...T })), Qe = p.filter((T) => !T.presetRole), Po(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, Tt = (r.warmup || Je).map((p) => ({ ...p })), Ea = (r.cooldown || wa).map((p) => ({ ...p })), Qe = r.strength.map((p) => Array.isArray(p) ? (([g, T, B, j = !1]) => ({ id: g, name: T, group: B, kind: "work", hidden: !!j }))(p) : { ...p });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === t)), Dt();
  }
  function Tr(t, r, s) {
    const p = t.getBoundingClientRect(), g = p.width / 2, T = p.height / 2, B = r - g, j = s - T;
    let ne = 1 / 0, he = 1 / 0;
    B !== 0 && (ne = g / Math.abs(B)), j !== 0 && (he = T / Math.abs(j));
    const oe = Math.min(Math.max(1 / Math.min(ne, he), 0), 1);
    let te = Math.atan2(j, B) * (180 / Math.PI) + 90;
    return te < 0 && (te += 360), { edge: oe, angle: te };
  }
  function ii(t, r, s = !1) {
    const p = t.getBoundingClientRect(), g = r.clientX - p.left, T = r.clientY - p.top, { edge: B, angle: j } = Tr(t, g, T), ne = s ? 100 : B * 100;
    t.style.setProperty("--edge-proximity", ne.toFixed(3)), t.style.setProperty("--cursor-angle", j.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || ne >= 30);
  }
  function yt(t) {
    t.addEventListener("pointermove", (s) => ii(t, s, !1)), t.addEventListener("pointerenter", (s) => ii(t, s, !1)), t.addEventListener("pointerdown", (s) => ii(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  yt(o("addWorkoutPanel"));
  let Me = !1, qt = null;
  function He(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function Ha(t) {
    return t.summary ? t.summary : t.customSequence ? Un(t.total) + " · custom move" : Un(t.total) + " · " + Ut(t.work) + " / " + Ut(t.rest) + " · warm-up + cooldown";
  }
  function zn(t, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const p = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + He(r.name) + '</div><div class="sub">' + He(Ha(r)) + '</div><span class="sourceTag">' + He(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (p ? p + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + He(r.name) + "</div></div>";
    const g = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, g), yt(s), s.addEventListener("click", (B) => {
      B.target.closest("button") || Ot(t);
    }), s.addEventListener("keydown", (B) => {
      (B.key === "Enter" || B.key === " ") && !B.target.closest("button") && (B.preventDefault(), Ot(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), Ot(t), us(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), Ot(t), ol();
    }), s;
  }
  function Hi() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), dt.order.forEach((t) => {
      Ke[t] && zn(t, Ke[t]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === xt));
  }
  Hi(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    Me = !0, qt = "custom-" + Date.now(), Ke[qt] = {
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
    }, Ot(qt), us(!0);
  });
  let Ue = [], nt = 0, jt = 0, Ro = 1, Fa = !1, ta = null, ri = null, sa = !1, Vn = dt.settings.upcomingCount ?? "all", Gn = "movement";
  function No(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Ut(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Un(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Ya() {
    ge.style.width = No(_.value, Number(_.min), Number(_.max)) + "%", ye.style.width = No(L.value, Number(L.min), Number(L.max)) + "%", Xe.style.width = No(P.value, Number(P.min), Number(P.max)) + "%", z.textContent = Ut(L.value), ce.textContent = Ut(P.value);
    const t = Number(lt.value) || 1;
    Lt.style.width = No(t, 1, 10) + "%", Ia.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function Yn(t) {
    return t.filter((r) => !r.hidden);
  }
  function Zn(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    return (s ? s + ":" + String(p).padStart(2, "0") : p) + ":" + String(g).padStart(2, "0");
  }
  function la(t) {
    let r;
    try {
      r = new URL(String(t || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let p = null;
    if (s === "youtu.be") p = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") p = r.searchParams.get("v");
      else {
        const j = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        j && (p = j[2]);
      }
    if (!p || !/^[\w-]{11}$/.test(p)) return null;
    const g = (j) => {
      if (!j) return 0;
      if (/^\d+$/.test(j)) return Number(j);
      const ne = j.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ne ? (Number(ne[1]) || 0) * 3600 + (Number(ne[2]) || 0) * 60 + (Number(ne[3]) || 0) : 0;
    }, T = g(r.searchParams.get("t") || r.searchParams.get("start")), B = g(r.searchParams.get("end"));
    return { id: p, start: T, end: B > T ? B : null };
  }
  function An(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, p = Number(t.end) || Number(t.videoDuration) || 0;
    return p > s ? Math.round(p - s) : Number(t.duration) || 300;
  }
  function fn(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Po(t, r = !0) {
    Gn = t, n.querySelectorAll(".createPresetBtn").forEach((p) => p.classList.toggle("active", p.dataset.movePreset === t));
    const s = Ke[xt];
    s && (s.preset = t), t === "work" ? (_.min = 30, _.max = 480, _.step = 30, L.min = 300, L.max = 7200, L.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (_.value = 60, L.value = 1500, P.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (_.value = 20, L.value = 45, P.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Ya();
  }
  function Fi(t, r) {
    const s = Gn === "work";
    return t.map((p, g) => ({ ...p, id: r + "-" + g + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(L.value) }));
  }
  function Oi() {
    const t = Ke[xt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !Tt.length && (Tt = Fi(Je, "warm")), t.includeCooldown && !Ea.length && (Ea = Fi(wa, "cool")), Dt());
  }
  function ss() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Ue.length - 1), s = Vn;
    t.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const B = document.createElement("option");
      B.value = String(T), B.textContent = String(T), t.appendChild(B);
    }
    const p = document.createElement("option");
    p.value = "all", p.textContent = "All", t.appendChild(p);
    const g = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = g, Vn = g === "all" ? "all" : Number(g);
  }
  function Dt() {
    Number(_.value) * 60;
    const t = Number(L.value), r = Number(P.value), s = Ke[xt], p = !!(s != null && s.customSequence), g = (p ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Yn(Tt), T = Yn(Qe), B = p && !s.includeCooldown ? [] : Yn(Ea);
    if (s && (s.total = Number(_.value), s.work = t, s.rest = r, s.rounds = Number(lt.value) || 1, s.customSequence ? (s.sequence = Qe.map((Ae) => ({ ...Ae })), s.warmup = Tt.map((Ae) => ({ ...Ae })), s.cooldown = Ea.map((Ae) => ({ ...Ae }))) : (s.strength = Qe.map((Ae) => ({ ...Ae })), s.warmup = Tt.map((Ae) => ({ ...Ae })), s.cooldown = Ea.map((Ae) => ({ ...Ae })))), s != null && s.customSequence) {
      const Ae = [...g.map((pt) => ({ ...pt, section: "warmup" })), ...T, ...B.map((pt) => ({ ...pt, section: "cooldown" }))].map((pt) => {
        if (pt.kind === "video") return { ...pt, duration: An(pt, t), rest: 0 };
        if (pt.kind === "rest") {
          const ma = pt.useGlobalTiming === !0 ? r : Number(pt.duration) || r;
          return { ...pt, duration: ma, rest: 0 };
        }
        const ha = pt.useGlobalTiming === !1 && Number(pt.duration) || t;
        return { ...pt, duration: ha, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ue = [], Ae.forEach((pt, ha) => {
        Ue.push(pt);
        const ma = Ae[ha + 1];
        pt.kind !== "rest" && ma && ma.kind !== "rest" && Ue.push({
          id: "auto-rest-" + ha,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ue = Ae;
    } else
      Ue = [...g.map((Ae) => ({ ...Ae, section: "warmup" })), ...T, ...B.map((Ae) => ({ ...Ae, section: "cooldown" }))].map((Ae) => Ae.kind === "video" ? { ...Ae, duration: An(Ae, t), rest: 0 } : Ae.kind === "rest" ? { ...Ae, duration: Ae.useGlobalTiming === !0 ? r : Number(Ae.duration) || r, rest: 0 } : { ...Ae, duration: Ae.useGlobalTiming === !1 && Number(Ae.duration) || t, rest: r }), Ue.forEach((Ae, pt) => {
        var ha;
        ((ha = Ue[pt + 1]) == null ? void 0 : ha.kind) === "rest" && (Ae.rest = 0);
      }), Ue.length && (Ue[Ue.length - 1].rest = 0);
    const j = Math.max(1, Math.min(10, Number(lt.value) || 1)), ne = Ue, he = (Ae) => j <= 1 ? null : Ae.section === "warmup" || Ae.presetRole === "warmup" ? "first" : Ae.section === "cooldown" || Ae.presetRole === "cooldown" ? "last" : Ae.kind === "video" && (Ae.videoRounds === "first" || Ae.videoRounds === "last") ? Ae.videoRounds : null, oe = (Ae) => !!he(Ae), te = ne.filter((Ae) => !oe(Ae)), Be = ne.filter(oe), et = te.length, Oe = te.reduce((Ae, pt) => Ae + pt.duration + pt.rest, 0), De = Be.reduce((Ae, pt) => Ae + pt.duration + pt.rest, 0), Se = [
      Be.some((Ae) => Ae.section === "warmup" || Ae.presetRole === "warmup") && "warm-up",
      Be.some((Ae) => Ae.section === "cooldown" || Ae.presetRole === "cooldown") && "cooldown",
      Be.some((Ae) => Ae.kind === "video" && !Ae.section && !Ae.presetRole) && "video"
    ].filter(Boolean), ht = Se.length > 1 ? Se.slice(0, -1).join(", ") + " & " + Se[Se.length - 1] : Se[0] || "";
    Ue = [];
    const vt = (Ae, pt) => {
      const ha = he(Ae);
      return !ha || (ha === "first" ? pt === 1 : pt === j);
    };
    for (let Ae = 1; Ae <= j; Ae++)
      if (ne.filter((pt) => vt(pt, Ae)).forEach((pt, ha) => Ue.push({ ...pt, id: pt.id + (j > 1 ? "-r" + Ae : ""), round: Ae, roundIndex: ha })), Ae < j && et)
        if (s != null && s.customSequence)
          Ue.push({ id: "round-break-" + Ae, name: "Rest", group: "Round " + (Ae + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Ae, roundIndex: et, roundBreak: !0 });
        else {
          const pt = Ue[Ue.length - 1];
          pt.rest = r, pt.roundBreakAfter = !0;
        }
    Ya();
    const je = Ue.reduce((Ae, pt) => Ae + pt.duration + pt.rest, 0), wt = Math.round(Oe / 60), _t = Math.round(je / 60), st = j > 1 ? Un(wt) + " × " + j + " rounds" + (De ? " + " + Ut(De) + " " + ht : "") + " (" + Un(_t) + ")" : Un(_t), at = [g.length ? "warm-up" : "", B.length ? "cooldown" : ""].filter(Boolean), ca = s != null && s.customSequence ? st + " · " + et + " items" + (at.length && !(j > 1 && De) ? " · " + at.join(" + ") : "") : st + " · " + Ut(t) + " / " + Ut(r) + (at.length && !(j > 1 && De) ? " · " + at.join(" + ") : "");
    me.textContent = Ut(Oe);
    const _a = Ue.filter((Ae) => !Ae.roundBreak).length, Zt = j > 1 ? _a + " activities · " + j + " rounds" : et + " activities";
    ka.textContent = j > 1 ? j + " rounds · " + Un(_t) + " total" : "1 round", o("roundsCount").textContent = j, n.querySelectorAll("[data-rounds-step]").forEach((Ae) => {
      Ae.disabled = Number(Ae.dataset.roundsStep) < 0 ? j <= 1 : j >= 10;
    }), s && (s.summary = ca, s.activityCount = et);
    const _i = n.querySelector(".workoutPanel.active .sub");
    _i && (_i.textContent = ca), mt.textContent = ca, zt(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Ae) => Ae.textContent = Zt), Ya(), si(), vn(), bn(), ss(), Me && re(), Ie.workout.classList.contains("active") && !ta && sr();
  }
  const ua = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', co = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Lr = {
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
  }, Za = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Lr[t] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = Za(t.dataset.icon);
  });
  let St = null, na = null;
  function At(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function _n(t = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function Kn(t, r, s = {}) {
    const p = t.kind === "rest", g = t.kind === "video", T = g ? t.useVideoLength !== !1 : p ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, B = Number(p ? P.value : L.value), j = At(g ? t.useVideoLength === !1 ? t.duration : An({ ...t, useVideoLength: !0 }) : T ? B : t.duration || B), ne = g && (Number(t.videoDuration) > 0 || Number(t.end) > 0), he = g ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + He(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([je, wt]) => '<option value="' + je + '"' + ((t.videoRounds || "every") === je ? " selected" : "") + ">" + wt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(t.name) + '" placeholder="' + (p ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + He(t.group) + '" placeholder="' + (p ? "Rest" : "e.g. Glutes + legs") + '"></label>', oe = g ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (ne ? " · " + Zn(An({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Ut(B), te = document.createElement("div");
    te.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), te.dataset.index = r, te.dataset.id = t.id;
    const Be = s.isNew ?? (na == null ? void 0 : na.item) === t, et = s.sheet ? '<div class="moveEditActions sheetActions">' + (Be ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + He(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Be ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    te.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (g ? " videoFields" : "") + '">' + he + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + He(oe) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + j.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((je) => '<option value="' + je + '"' + (je === j.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[je] + "</option>").join("") + "</select></div></div>" + et + "</div>";
    const Oe = (je) => te.querySelector("[data-f=" + je + "]"), De = () => {
      const je = Oe("global").checked;
      Oe("dur").disabled = je, Oe("unit").disabled = je, te.querySelector(".creatorDurationRow").classList.toggle("isDisabled", je);
    };
    Oe("global").addEventListener("change", De), De();
    const Se = () => {
      var je;
      if (s.sheet) {
        (je = s.onCancel) == null || je.call(s);
        return;
      }
      Be && mn(), St = null, Dt();
    }, ht = () => {
      var _t;
      if (g) {
        vt();
        return;
      }
      const je = Oe("name").value.trim();
      if (!je) {
        Oe("name").focus();
        return;
      }
      t.name = je, t.group = Oe("group").value.trim() || (p ? "Rest" : "Movement");
      const wt = Oe("global").checked;
      if (t.useGlobalTiming = wt, wt || (t.duration = Math.max(p ? 5 : 1, fn(Oe("dur").value, Oe("unit").value))), s.sheet) {
        (_t = s.onSaved) == null || _t.call(s);
        return;
      }
      Be && (na = null), St = null, Dt(), Vt(Be ? p ? "Rest added" : "Movement added" : "Movement updated");
    }, vt = () => {
      var at;
      const je = Oe("url").value.trim(), wt = la(je);
      if (!wt) {
        Oe("urlError").hidden = !1, Oe("url").classList.add("invalid"), Oe("url").focus();
        return;
      }
      const _t = wt.id !== t.videoId;
      t.url = je, t.videoId = wt.id, t.start = wt.start, t.end = wt.end, _t && (t.videoDuration = null, t.videoError = null);
      const st = Oe("name").value.trim();
      t.autoName = !st, t.name = st || (_t ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = Oe("rounds").value, t.useVideoLength = Oe("global").checked, t.useVideoLength || (t.duration = Math.max(5, fn(Oe("dur").value, Oe("unit").value))), s.sheet ? (at = s.onSaved) == null || at.call(s) : (Be && (na = null), St = null, Dt(), Vt(Be ? "Video added" : "Video updated")), (_t || !t.videoDuration || t.autoName && !t.videoTitle) && dl(t);
    };
    if (g && Oe("url").addEventListener("input", () => {
      Oe("urlError").hidden = !0, Oe("url").classList.remove("invalid");
    }), te.querySelector("[data-a=cancel]").addEventListener("click", Se), te.querySelector("[data-a=save]").addEventListener("click", ht), s.sheet && !Be) {
      te.querySelector("[data-a=hide]").addEventListener("click", () => {
        var wt;
        return (wt = s.onHide) == null ? void 0 : wt.call(s);
      });
      const je = te.querySelector("[data-a=remove]");
      pr(je, je.querySelector(".removeFill"), 1200, () => {
        var wt;
        return (wt = s.onRemove) == null ? void 0 : wt.call(s);
      });
    }
    return te.addEventListener("keydown", (je) => {
      je.key === "Escape" && (je.preventDefault(), je.stopPropagation(), Se()), je.key === "Enter" && je.target.matches("input") && (je.preventDefault(), ht());
    }), te;
  }
  function po(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((p, g) => {
      if (p === St && !be()) {
        s.appendChild(Kn(p, g));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (p.hidden ? " hidden" : "") + (p.kind === "rest" ? " restItem" : "") + (p.kind === "video" ? " videoItem" : "") + (hr(p) ? " noMeta" : ""), T.dataset.index = g, T.dataset.id = p.id;
      const B = p.kind === "rest" ? p.useGlobalTiming === !0 ? "Global timing" : Ut(p.duration) : p.useGlobalTiming === !1 ? Ut(p.duration) : "Global timing", j = p.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ne = p.kind === "video" ? p.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (p.useVideoLength === !1 ? "stops after " + Ut(p.duration) : Number(p.videoDuration) > 0 || Number(p.end) > 0 ? Zn(An(p)) : "plays to the end") + (p.videoRounds === "first" ? " · first round only" : p.videoRounds === "last" ? " · last round only" : "") : p.group + " · " + B, he = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + He(p.name) + '. Drag, or use the up and down arrow keys">' + ua + "</button>", oe = '<div class="moveText"><div class="moveItemName">' + He(p.name) + j + '</div><div class="moveMeta">' + He(ne) + "</div></div>", te = (Oe) => Oe.addEventListener("keydown", (De) => {
        var vt, je;
        if (De.key !== "ArrowUp" && De.key !== "ArrowDown") return;
        De.preventDefault();
        const Se = t.indexOf(p), ht = Se + (De.key === "ArrowUp" ? -1 : 1);
        ht < 0 || ht >= t.length || (t.splice(Se, 1), t.splice(ht, 0, p), Dt(), (je = (vt = o(r).children[ht]) == null ? void 0 : vt.querySelector(".dragHandle")) == null || je.focus());
      });
      if (be()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (p.name || "step")), T.innerHTML = he + oe + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Oe = T.querySelector(".dragHandle");
        Oe.addEventListener("pointerdown", (De) => hn(De, T, s, t)), te(Oe), T.addEventListener("click", (De) => {
          De.target.closest(".dragHandle") || Fe(p, t);
        }), T.addEventListener("keydown", (De) => {
          De.key === "Enter" && De.target === T && (De.preventDefault(), Fe(p, t));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = he + oe + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + He(p.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (p.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + He(p.name) + '"><span class="removeFill"></span><span class="removeLabel">' + co + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        mn(), St = p, Dt(), _n();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        p.hidden = !p.hidden, Dt();
      });
      const Be = T.querySelector(".removeBtn");
      pr(Be, Be.querySelector(".removeFill"), 1200, () => {
        const Oe = t.indexOf(p);
        Oe < 0 || (t.splice(Oe, 1), Dt(), Vt("Removed " + p.name, { label: "Undo", run: () => {
          t.splice(Math.min(Oe, t.length), 0, p), Dt();
        } }));
      });
      const et = T.querySelector(".dragHandle");
      et.addEventListener("pointerdown", (Oe) => hn(Oe, T, s, t)), te(et), s.appendChild(T);
    });
  }
  const Da = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, En = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function hn(t, r, s, p) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const g = t.currentTarget, T = t.pointerId, B = !Da();
    try {
      g.setPointerCapture(T);
    } catch {
    }
    const j = r.closest(".exerciseScroller") || Io(r), ne = s.style.position;
    s.style.position = "relative";
    const he = [...s.children].filter((ut) => ut.classList.contains("moveRow")), oe = he.indexOf(r), te = parseFloat(getComputedStyle(s).rowGap) || 8, Be = r.offsetHeight, et = Be + te, Oe = he.map((ut) => ut.offsetTop), De = he.map((ut) => ut.offsetHeight), Se = () => s.getBoundingClientRect().top, ht = s.getBoundingClientRect().width, vt = t.clientY - (Se() + Oe[oe]), je = t.clientX;
    let wt = t.clientY, _t = t.clientX, st = Se() + Oe[oe], at = 0, ca = 0, _a = 0, Zt = 1, _i = 0, Ae = oe, pt = !1, ha = 0, ma = !1, Ll = !1, Jr = Oe[oe];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", En(8);
    const Al = () => {
      const ut = wt - vt + Be / 2 - Se();
      let Mt = 0;
      return he.forEach((Wt, Ja) => {
        Ja !== oe && ut > Oe[Ja] + De[Ja] / 2 && Mt++;
      }), Mt;
    }, _l = () => {
      he.forEach((ut, Mt) => {
        if (Mt === oe) return;
        const Wt = oe < Ae && Mt > oe && Mt <= Ae ? -et : oe > Ae && Mt >= Ae && Mt < oe ? et : 0;
        ut.style.transform = Wt ? "translateY(" + Wt + "px)" : "";
      });
    }, Ps = () => {
      const ut = s.getBoundingClientRect(), Mt = Math.abs(_t - je) > Math.max(80, ht * 0.3) || _t < ut.left - 24 || _t > ut.right + 24;
      Mt !== pt && (pt = Mt, r.classList.toggle("willReturn", Mt), En(Mt ? 10 : 4));
      const Wt = pt ? oe : Al();
      Wt !== Ae && (Ae = Wt, _l(), pt || En(4));
    }, Ei = () => {
      if (Ae === oe) return Oe[oe];
      const ut = he.filter((Wt, Ja) => Ja !== oe);
      let Mt = Oe[0];
      for (let Wt = 0; Wt < Ae; Wt++) Mt += ut[Wt].offsetHeight + te;
      return Mt;
    }, Qr = () => {
      const ut = B ? Math.min(Math.abs(at) / 40, 1) : 0, Mt = B && !ma ? Math.max(-3, Math.min(3, _a * 0.6)) : 0;
      r.style.transform = "translate(" + ca.toFixed(2) + "px," + (st - (Se() + Oe[oe])).toFixed(2) + "px) rotate(" + Mt.toFixed(2) + "deg) scale(" + (Zt * (1 - 0.04 * ut)).toFixed(4) + "," + (Zt * (1 + 0.06 * ut)).toFixed(4) + ")";
    }, ot = () => {
      ha = requestAnimationFrame(ot);
      const ut = _t - je, Mt = ma ? Se() + Jr : wt - vt, Wt = ma ? 0 : pt ? ut * 0.9 : Math.max(-22, Math.min(22, ut * 0.22)), Ja = ma ? 1 : pt ? 0.97 : 1.035;
      if (!B) {
        st = Mt, ca = ma ? 0 : Wt, Zt = 1, Qr(), ma && Xt();
        return;
      }
      const Wp = ma ? 0.24 : 0.2, qp = ma ? 0.62 : 0.68;
      at = (at + (Mt - st) * Wp) * qp, st += at, _a = (_a + (Wt - ca) * 0.16) * 0.7, ca += _a, _i = (_i + (Ja - Zt) * 0.22) * 0.6, Zt += _i, Qr(), ma && Math.abs(at) < 0.15 && Math.abs(Mt - st) < 0.5 && Math.abs(ca) < 0.5 && Math.abs(Zt - 1) < 3e-3 && Xt();
    }, Bt = setInterval(() => {
      if (!j || ma) return;
      const ut = j.getBoundingClientRect(), Mt = 56, Wt = wt < ut.top + Mt ? -10 : wt > ut.bottom - Mt ? 10 : 0;
      Wt && (j.scrollTop += Wt, Ps());
    }, 30);
    function Xt() {
      if (Ll) return;
      Ll = !0, cancelAnimationFrame(ha);
      const ut = Ae !== oe, Mt = r.dataset.id;
      if (s.classList.remove("reordering"), he.forEach((Ja) => {
        Ja.style.transition = "none", Ja.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = ne, ut) {
        const [Ja] = p.splice(oe, 1);
        p.splice(Ae, 0, Ja);
      }
      Dt();
      const Wt = Mt && s.querySelector('.moveRow[data-id="' + Mt + '"]');
      Wt && B && Wt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ut && Vt("Order saved");
    }
    const ga = (ut) => {
      if (ut.pointerId === T) {
        if (ut.pointerType === "mouse" && ut.buttons === 0) {
          Ln();
          return;
        }
        wt = ut.clientY, _t = ut.clientX, Ps();
      }
    }, Xa = (ut) => {
      ut.pointerId === T && Ln();
    };
    function Ln() {
      ma || (window.removeEventListener("pointermove", ga, !0), window.removeEventListener("pointerup", Xa, !0), window.removeEventListener("pointercancel", Xa, !0), g.removeEventListener("lostpointercapture", Ln), clearInterval(Bt), pt && Ae !== oe && (Ae = oe, _l()), Jr = Ei(), ma = !0, En(6), setTimeout(Xt, 800));
    }
    window.addEventListener("pointermove", ga, !0), window.addEventListener("pointerup", Xa, !0), window.addEventListener("pointercancel", Xa, !0), g.addEventListener("lostpointercapture", Ln), ha = requestAnimationFrame(ot), Qr();
  }
  function si() {
    var g, T, B, j;
    const t = Ke[xt], r = (g = o("warmupList")) == null ? void 0 : g.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), p = (j = (B = o("strengthList")) == null ? void 0 : B.closest("section")) == null ? void 0 : j.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), p && (p.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), p && (p.textContent = "Kettlebell work")), po(Tt, "warmupList"), po(Qe, "strengthList"), po(Ea, "cooldownList");
  }
  function mn() {
    if (!na) return;
    const { item: t, arr: r } = na;
    na = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), St === t && (St = null);
  }
  function uo(t) {
    return t.id === "warmupList" ? { arr: Tt, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: Ea, kind: "cooldown", group: "Cooldown" } : { arr: Qe, kind: "work", group: "" };
  }
  function $n(t, r) {
    const s = uo(r), p = Date.now().toString(36);
    return t === "video" ? { id: "video-" + p, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + p, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + p, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(L.value) };
  }
  const Ka = "cubic-bezier(.34,1.46,.64,1)";
  function fo(t, r) {
    if (Da() || !t) {
      r();
      return;
    }
    const s = (T) => {
      var B;
      return ((B = T.dataset) == null ? void 0 : B.id) || T;
    }, p = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], g = new Map(p().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), p().forEach((T) => {
      const B = g.get(s(T));
      if (B === void 0) return;
      const j = B - T.getBoundingClientRect().top;
      Math.abs(j) < 0.5 || T.animate([{ transform: "translateY(" + j + "px)" }, { transform: "none" }], { duration: 440, easing: Ka });
    });
  }
  function Wi(t, r) {
    if (!t || Da()) return;
    const s = t.offsetHeight, p = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + p + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ka });
  }
  function gn(t, r, s, p) {
    const { arr: g } = uo(r), T = $n(t, r);
    g.splice(Math.max(0, Math.min(s, g.length)), 0, T), na = { item: T, arr: g }, St = T, fo(r.closest(".exerciseScroller,.createStepSlot") || r, () => Dt());
    const B = r.querySelector(".moveRow.editing");
    return Wi(B, p), _n(t === "rest"), B;
  }
  function Io(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const x = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function S(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + ua + '</span><span class="addGhostText"><strong>' + He(r[0]) + "</strong><small>" + He(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function C(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function F(t, r, s, p) {
    (St || na) && (mn(), St = null, Dt());
    const g = t.getBoundingClientRect(), T = S(r, x[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = g.width + "px", T.style.height = g.height + "px", T.style.transform = "translate(" + g.left + "px," + g.top + "px)", t.classList.add("lifting");
    const B = Io(t);
    return Y({
      ghost: T,
      origin: g,
      sx: s,
      sy: p,
      scroller: B,
      column: t.closest(".exerciseScroller,.createFlow") || B,
      home: () => t.getBoundingClientRect(),
      onDrop: (j, ne, he) => {
        C(T), t.classList.remove("lifting"), gn(r, j, ne, he);
      },
      onReturn: () => {
        C(T), t.classList.remove("lifting");
      }
    });
  }
  function Y({ ghost: t, origin: r, sx: s, sy: p, scroller: g, column: T, home: B, onDrop: j, onReturn: ne, rowLook: he = !1 }) {
    var Qr;
    const oe = !Da(), te = ((Qr = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Qr.offsetHeight) || 80, Be = s - r.left, et = p - r.top, Oe = 44;
    let De = s, Se = p, ht = r.left, vt = r.top, je = 0, wt = 0, _t = !oe, st = null, at = null, ca = -1, _a = 0, Zt = null;
    const _i = () => ["warmupList", "strengthList", "cooldownList"].map((ot) => o(ot)).filter((ot) => ot && ot.getClientRects().length && !ot.closest("[hidden]")), Ae = (ot) => {
      if (ot === st) return;
      st = ot, t.classList.toggle("overList", !!ot || he);
      const Bt = ot ? ot.getBoundingClientRect().width : r.width;
      t.style.width = Bt + "px", t.style.height = (ot ? te : r.height) + "px";
    }, pt = (ot) => {
      ot.classList.add("leaving"), ot.style.height = "0px", ot.style.marginTop = "-8px", setTimeout(() => ot.remove(), oe ? 320 : 0);
    }, ha = (ot, Bt, Xt) => {
      if (at && at.parentNode === ot && ca === Xt || (at && (pt(at), at = null, ca = -1), !ot)) return;
      const ga = document.createElement("div");
      ga.className = "dropSlot", ot.insertBefore(ga, Bt), at = ga, ca = Xt, ga.getBoundingClientRect(), ga.style.height = te + "px", ga.style.marginTop = "0px";
    }, ma = () => {
      let ot = null, Bt = 1 / 0;
      for (const Ln of _i()) {
        const ut = Ln.getBoundingClientRect();
        if (De < ut.left - 48 || De > ut.right + 48) continue;
        const Mt = ut.top - 28, Wt = ut.bottom + 28, Ja = Se < Mt ? Mt - Se : Se > Wt ? Se - Wt : 0;
        Ja < Bt && (Bt = Ja, ot = Ln);
      }
      const Xt = T == null ? void 0 : T.getBoundingClientRect(), Xa = Xt && De >= Xt.left && De <= Xt.right && Se >= Xt.top && Se <= Xt.bottom || Bt === 0 ? ot : null;
      if (Xa) {
        const Ln = [...Xa.children].filter((Mt) => Mt.classList.contains("moveRow"));
        let ut = Ln.findIndex((Mt) => {
          const Wt = Mt.getBoundingClientRect();
          return Se < Wt.top + Wt.height / 2;
        });
        ut < 0 && (ut = Ln.length), ha(Xa, Ln[ut] || null, ut);
      } else ha(null);
      Ae(Xa);
    }, Ll = () => {
      if (Zt) return Zt.aim();
      if (st) {
        const ot = st.getBoundingClientRect();
        let Bt = Se - te / 2;
        return at && (Bt = Bt * 0.6 + at.getBoundingClientRect().top * 0.4), { x: ot.left, y: Bt };
      }
      return { x: De - Be, y: Se - et };
    }, Jr = (ot, Bt, Xt, ga) => {
      t.style.transform = "translate(" + ht + "px," + vt + "px) rotate(" + ot + "deg) rotate(" + Bt + "rad) scale(" + Xt + "," + ga + ") rotate(" + -Bt + "rad)";
    }, Al = () => {
      if (_a = requestAnimationFrame(Al), !_t) {
        const ut = De - s, Mt = Se - p, Wt = Math.min(Math.hypot(ut, Mt) / Oe, 1);
        ht = r.left + ut * 0.35, vt = r.top + Mt * 0.35, Jr(0, Math.atan2(Mt, ut), 1 + 0.155 * Wt, 1 - 0.1 * Wt);
        return;
      }
      const ot = Ll();
      if (!oe) {
        ht = ot.x, vt = ot.y, Jr(0, 0, 1, 1), Zt && (cancelAnimationFrame(_a), Zt.done());
        return;
      }
      const Bt = Zt ? Zt.k : 0.17, Xt = Zt ? Zt.d : 0.7;
      je = (je + (ot.x - ht) * Bt) * Xt, wt = (wt + (ot.y - vt) * Bt) * Xt, ht += je, vt += wt;
      const ga = Math.hypot(je, wt), Xa = Math.min(ga / 48, 1), Ln = st || Zt ? 0 : Math.max(-5, Math.min(5, je * 0.32));
      Jr(Ln, Math.atan2(wt, je), 1 + 0.1 * Xa, 1 - 0.063 * Xa), Zt && ga < 0.15 && Math.hypot(ot.x - ht, ot.y - vt) < 0.6 && (cancelAnimationFrame(_a), Zt.done());
    }, _l = setInterval(() => {
      if (!g || Zt) return;
      const ot = g.getBoundingClientRect(), Bt = 64, Xt = Se < ot.top + Bt ? -(ot.top + Bt - Se) / 4 : Se > ot.bottom - Bt ? (Se - (ot.bottom - Bt)) / 4 : 0;
      Xt && (g.scrollTop += Math.max(-18, Math.min(18, Xt)), ma());
    }, 30);
    _a = requestAnimationFrame(Al);
    let Ps = !1;
    const Ei = (ot, Bt) => {
      if (Ps) return;
      Ps = !0, cancelAnimationFrame(_a);
      const Xt = at ? at.offsetHeight : te;
      !ot && at && (at.remove(), at = null), ot ? j(ot, Bt, Xt) : ne();
    };
    return {
      move(ot, Bt) {
        De = ot, Se = Bt, !_t && Math.hypot(De - s, Se - p) > Oe && (_t = !0, je = (De - s) * 0.085, wt = (Se - p) * 0.085), _t && ma();
      },
      drop(ot) {
        clearInterval(_l);
        const Bt = st, Xt = ca;
        if (!ot && Bt && at) {
          const ga = at;
          Zt = { k: 0.24, d: 0.62, aim: () => {
            const Xa = ga.getBoundingClientRect();
            return { x: Xa.left, y: Xa.top };
          }, done: () => Ei(Bt, Xt) }, setTimeout(() => Ei(Bt, Xt), 650), oe || (cancelAnimationFrame(_a), Ei(Bt, Xt));
          return;
        }
        ha(null), Ae(null), Zt = { k: 0.2, d: 0.66, aim: () => {
          const ga = B();
          return { x: ga.left, y: ga.top };
        }, done: () => Ei(null) }, setTimeout(() => Ei(null), 650), oe || (cancelAnimationFrame(_a), Ei(null));
      }
    };
  }
  function X(t, r) {
    let s = !1;
    t.addEventListener("click", (p) => {
      if (s) {
        s = !1, p.preventDefault();
        return;
      }
      if (be()) {
        ze(r);
        return;
      }
      const g = o("strengthList"), T = gn(r, g, uo(g).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (p) => {
      if (p.button !== void 0 && p.button !== 0) return;
      const g = p.pointerId, T = p.clientX, B = p.clientY;
      let j = null, ne = !1;
      try {
        t.setPointerCapture(g);
      } catch {
      }
      const he = (Se) => {
        if (Se.pointerId === g) {
          if (Se.pointerType === "mouse" && Se.buttons === 0) {
            De(!1);
            return;
          }
          if (!j) {
            if (Math.hypot(Se.clientX - T, Se.clientY - B) < 6) return;
            j = F(t, r, T, B);
          }
          j.move(Se.clientX, Se.clientY);
        }
      }, oe = (Se) => {
        Se.pointerId === g && De(!1);
      }, te = (Se) => {
        Se.pointerId === g && De(!0);
      }, Be = () => De(!1), et = () => De(!0), Oe = (Se) => {
        Se.key === "Escape" && j && (Se.preventDefault(), Se.stopPropagation(), De(!0));
      };
      function De(Se) {
        if (!ne && (ne = !0, window.removeEventListener("pointermove", he, !0), window.removeEventListener("pointerup", oe, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", Oe, !0), window.removeEventListener("blur", et), t.removeEventListener("lostpointercapture", Be), j)) {
          const ht = j;
          j = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ht.drop(Se);
        }
      }
      window.addEventListener("pointermove", he, !0), window.addEventListener("pointerup", oe, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", Oe, !0), window.addEventListener("blur", et), t.addEventListener("lostpointercapture", Be);
    });
  }
  const se = (oc = window.matchMedia) == null ? void 0 : oc.call(window, "(max-width: 620px)");
  function be() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const we = (t) => t.charAt(0).toUpperCase() + t.slice(1), Pe = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let _e = null, ke = null;
  function Ge(t, r, s, p) {
    Re(), o("sheetTitle").textContent = t;
    const g = o("sheetBody");
    g.innerHTML = "", g.appendChild(r), _e = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !g.contains(r)) return;
      const T = p ? g.querySelector("input[data-f=url],input[data-f=name]") : g.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, Da() ? 0 : 360);
  }
  function Re() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(n.activeElement) && n.activeElement.blur();
    const r = _e;
    _e = null, r == null || r(), setTimeout(ct, 0);
  }
  o("sheetScrim").addEventListener("click", Re), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Re());
  });
  function Fe(t, r) {
    const s = Kn(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Re(), Dt(), Vt(we(Pe(t)) + " updated");
      },
      onCancel: Re,
      onHide() {
        t.hidden = !t.hidden, Re(), Dt(), Vt((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Re();
        const p = r.indexOf(t);
        p < 0 || (r.splice(p, 1), Dt(), Vt("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(p, r.length), 0, t), Dt();
        } }));
      }
    });
    Ge("Edit " + Pe(t), s, null, !1);
  }
  function Ze() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, p, g]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Za(s) + "</span><span><strong>" + p + "</strong><small>" + g + "</small></span>", T.addEventListener("click", () => ze(r)), t.appendChild(T);
    }), Ge("Add to the move", t, null, !1);
  }
  function ze(t) {
    ke && Bn();
    const r = $n(t, o("strengthList")), s = Kn(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Re(), $t(r, t);
      },
      onCancel: Re
    });
    Ge("New " + Pe(r), s, null, !0);
  }
  const Ce = o("workoutModal").querySelector(".modalStatic"), tt = { parent: Ce.parentNode, next: Ce.nextSibling };
  function it() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Ce);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Re), t.appendChild(r), Ge("Setup", t, () => {
      tt.parent.insertBefore(Ce, tt.next), zt();
    }, !1);
  }
  function zt() {
    var r, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ke[xt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = mt.textContent);
  }
  o("setupSummary").addEventListener("click", it), o("addFab").addEventListener("click", Ze);
  function Ne() {
    const t = o("strengthList");
    return Io(t) || t.closest(".exerciseScroller");
  }
  function Rt() {
    const t = o("strengthList").getBoundingClientRect(), r = (Ne() || o("strengthList")).getBoundingClientRect(), s = (ke == null ? void 0 : ke.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function $t(t, r) {
    var j;
    const s = S(r, [t.name || x[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const p = document.createElement("span");
    p.className = "addGhostActions", p.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + He(t.name) + '">✕</button>', s.appendChild(p), ke = { item: t, type: r, ghost: s };
    const g = ((j = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : j.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = g + "px";
    const T = Rt(), B = Ra.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + B + "px)", s.getBoundingClientRect(), Da() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", p.querySelector("[data-a=end]").addEventListener("click", Bn), p.querySelector("[data-a=discard]").addEventListener("click", qi), s.addEventListener("pointerdown", Oa);
  }
  function Oa(t) {
    if (!ke || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = ke, p = t.pointerId;
    try {
      s.setPointerCapture(p);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const g = s.getBoundingClientRect(), T = Ne(), B = Y({
      ghost: s,
      origin: { left: g.left, top: g.top, width: g.width, height: g.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Rt,
      onDrop: (De, Se, ht) => {
        ke = null, C(s), Dn(r, De, Se, ht);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let j = !1;
    const ne = (De) => {
      if (De.pointerId === p) {
        if (De.pointerType === "mouse" && De.buttons === 0) {
          Oe(!1);
          return;
        }
        B.move(De.clientX, De.clientY);
      }
    }, he = (De) => {
      De.pointerId === p && Oe(!1);
    }, oe = (De) => {
      De.pointerId === p && Oe(!0);
    }, te = () => Oe(!1), Be = () => Oe(!0), et = (De) => {
      De.key === "Escape" && (De.preventDefault(), Oe(!0));
    };
    function Oe(De) {
      j || (j = !0, window.removeEventListener("pointermove", ne, !0), window.removeEventListener("pointerup", he, !0), window.removeEventListener("pointercancel", oe, !0), window.removeEventListener("keydown", et, !0), window.removeEventListener("blur", Be), s.removeEventListener("lostpointercapture", te), B.drop(De));
    }
    window.addEventListener("pointermove", ne, !0), window.addEventListener("pointerup", he, !0), window.addEventListener("pointercancel", oe, !0), window.addEventListener("keydown", et, !0), window.addEventListener("blur", Be), s.addEventListener("lostpointercapture", te);
  }
  function Dn(t, r, s, p) {
    const g = uo(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = g.kind, g.group && (!t.group || t.group === "Movement") && (t.group = g.group)), g.arr.splice(Math.max(0, Math.min(s, g.arr.length)), 0, t), fo(r.closest(".exerciseScroller,.createStepSlot") || r, () => Dt()), Wi(r.querySelector('.moveRow[data-id="' + t.id + '"]'), p), Vt(we(Pe(t)) + " added");
  }
  function Bn() {
    var p;
    if (!ke) return;
    const { item: t, ghost: r } = ke;
    ke = null, C(r);
    const s = o("strengthList");
    Dn(t, s, uo(s).arr.length, 0), (p = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || p.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
  }
  function qi() {
    if (!ke) return;
    const t = ke.ghost;
    ke = null, C(t), Vt("Discarded");
  }
  function Rn() {
    ke && (ke.ghost.remove(), ke = null);
  }
  window.addEventListener("resize", () => {
    if (ke != null && ke.ghost.classList.contains("hovering")) {
      const t = Rt();
      ke.ghost.style.width = t.width + "px", ke.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (ic = se == null ? void 0 : se.addEventListener) == null || ic.call(se, "change", () => {
    Re(), ke && !be() && Bn(), si();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function ct() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !be()) {
      Wa();
      return;
    }
    const s = r ? r.offsetTop : 0, p = r ? r.offsetLeft : 0, g = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: g + "px", height: T + "px", top: s + "px", left: p + "px" });
    const B = t.getBoundingClientRect();
    Math.abs(B.top - s) > 0.5 && (t.style.top = 2 * s - B.top + "px"), Math.abs(B.left - p) > 0.5 && (t.style.left = 2 * p - B.left + "px");
  }
  function Wa() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (rc = window.visualViewport) == null || rc.addEventListener("resize", ct), (sc = window.visualViewport) == null || sc.addEventListener("scroll", ct), window.addEventListener("resize", ct), window.addEventListener("scroll", ct, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ct, 250));
  function vn() {
    Qe.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = ua + "<span>Add movement</span>"), r && (r.innerHTML = ua + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = ua + "<span>Add video</span>");
  }
  function bn() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Ut(L.value);
    const p = o("useGlobalRestTiming").checked, g = o("addRestDuration"), T = o("addRestUnit");
    g.disabled = p, T.disabled = p, g.parentElement.style.opacity = p ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Ut(P.value);
  }
  let li = "movement";
  function Ar(t) {
    li = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), bn();
  }
  function Xn() {
    Ke[xt];
    const t = Me ? !0 : o("useGlobalTiming").checked, r = t ? Number(L.value) : fn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = Me ? !0 : o("useGlobalRestTiming").checked, p = s ? Number(P.value) : fn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (li === "rest") {
      const g = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      Qe.push({
        id: "rest-" + Date.now(),
        name: g,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, p || Number(P.value))
      }), Dt(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Vt("Rest added"), Me && (N("movements"), re());
    } else {
      const g = o("addMovementInput").value.trim();
      if (!g) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      Qe.push({
        id: "movement-" + Date.now(),
        name: g,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(L.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", Dt(), o("movementCreator").hidden = !0, Vt("Movement added"), Me && (N("movements"), re());
    }
    vn();
  }
  let Sa = null;
  function Vt(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const p = document.createElement("span");
    if (p.textContent = t, s.appendChild(p), r) {
      const g = document.createElement("button");
      g.type = "button", g.className = "toastAction", g.textContent = r.label, g.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(Sa);
      }), s.appendChild(g);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(Sa), Sa = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const js = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], zs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Vs(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function di(t, r) {
    return js[Vs(r)];
  }
  function Kl(t) {
    return zs[Vs(t)];
  }
  function Nt(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Jn() {
    return { morning: ft().morningTime || "08:00", evening: ft().eveningTime || "19:00" };
  }
  function ci(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function ji(t) {
    const r = Jn();
    return t.getHours() * 60 + t.getMinutes() >= ci(r.evening) ? "evening" : "morning";
  }
  function Ba(t, r) {
    return dt.checkins.find((s) => s.date === t && s.slot === r);
  }
  function _r(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function zi() {
    const t = /* @__PURE__ */ new Date(), r = Nt(t), s = ji(t), p = Jn(), g = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && g < ci(p.morning) || _r(Ba(r, s)) ? null : s;
  }
  const Qn = o("checkinModal"), wn = o("checkinTab"), $l = o("checkinBadge"), ho = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Er(t) {
    const { input: r, fill: s } = ho[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", di(t, r.value));
  }
  Object.keys(ho).forEach((t) => ho[t].input.addEventListener("input", () => Er(t)));
  let xn = null;
  function Gs() {
    const t = Jn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < ci(t.morning) ? "Next check-in at " + t.morning : s < ci(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Xl() {
    const t = Jn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), p = (g, T) => {
      const [B, j] = g.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), B, j);
    };
    return s < ci(t.morning) ? { date: p(t.morning), time: t.morning } : s < ci(t.evening) ? { date: p(t.evening), time: t.evening } : { date: p(t.morning, !0), time: t.morning };
  }
  let ls = null, Vi = null;
  function Us() {
    if (zi()) {
      Dr(), yn();
      return;
    }
    const t = Xl(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    o("peekCountdown").textContent = s + ":" + String(p).padStart(2, "0") + ":" + String(g).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Ys() {
    Us(), wn.classList.add("peek"), clearInterval(Vi), Vi = setInterval(Us, 1e3), clearTimeout(ls), ls = setTimeout(Dr, 6e3);
  }
  function Dr() {
    wn.classList.remove("peek"), clearInterval(Vi), clearTimeout(ls);
  }
  function ds() {
    const t = zi();
    if (!t) {
      wn.classList.contains("peek") ? Dr() : Ys();
      return;
    }
    xn = { date: Nt(/* @__PURE__ */ new Date()), slot: t };
    const s = Ba(xn.date, t), p = dt.checkins.find((g) => _r(g));
    Object.keys(ho).forEach((g) => {
      ho[g].input.value = (s == null ? void 0 : s[g]) ?? (p == null ? void 0 : p[g]) ?? 50, Er(g);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Qn.classList.add("open"), Qn.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ho.mood.input.focus());
  }
  function Gi() {
    Qn.classList.remove("open"), Qn.setAttribute("aria-hidden", "true"), xn && (Ui = xn.date + "-" + xn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ui);
    } catch {
    }
    xn = null, yn();
  }
  function Zs() {
    if (!xn) return;
    if (_r(Ba(xn.date, xn.slot))) {
      Gi();
      return;
    }
    const { date: t, slot: r } = xn;
    let s = Ba(t, r);
    s || (s = { date: t, slot: r }, dt.checkins.unshift(s), dt.checkins = dt.checkins.slice(0, 2e3)), s.mood = Number(ho.mood.input.value), s.energy = Number(ho.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Ma(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: di("mood", s.mood), energy_label: di("energy", s.energy) }), Vt((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Gi(), pi(), ui(), So(), $a();
  }
  let Ui = "";
  try {
    Ui = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function yn() {
    const t = zi();
    $l.hidden = !t, wn.hidden = !t, t || Dr(), wn.classList.toggle("due", !!t), wn.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Gs()), wn.title = t ? "Check in now" : Gs();
  }
  function Yi() {
    yn();
    const t = zi();
    !t || Qn.classList.contains("open") || ft().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !Ie.home.classList.contains("active") || Ra.classList.contains("open") || Ui !== Nt(/* @__PURE__ */ new Date()) + "-" + t && ds());
  }
  wn.addEventListener("click", ds), o("checkinLater").addEventListener("click", Gi), o("checkinSave").addEventListener("click", Zs), Qn.addEventListener("click", (t) => {
    t.target === Qn && Gi();
  }), Qn.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Gi());
  }), setInterval(Yi, 3e4);
  function pi() {
    const t = Nt(/* @__PURE__ */ new Date()), r = (s) => dt.checkins.find((p) => p.date === t && p[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, p]) => {
      const g = r(s);
      o(p).textContent = g ? di(s, g[s]) : "—";
    });
  }
  function ui() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), p = [...Array(7)].map((he, oe) => {
      const te = new Date(s.getFullYear(), s.getMonth(), s.getDate() + oe), Be = Nt(te), et = dt.checkins.filter((De) => De.date === Be), Oe = (De) => {
        const Se = et.map((ht) => ht[De]).filter((ht) => ht != null);
        return Se.length ? Se.reduce((ht, vt) => ht + vt, 0) / Se.length : null;
      };
      return { d: te, key: Be, mood: Oe("mood"), energy: Oe("energy"), count: et.filter(_r).length, future: te > r && Be !== Nt(r) };
    }), g = (he) => {
      const oe = p.map((te) => te[he]).filter((te) => te != null);
      return oe.length ? oe.reduce((te, Be) => te + Be, 0) / oe.length : null;
    }, T = g("mood"), B = g("energy"), j = (he, oe) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + he + "</span><span>" + (oe == null ? "—" : He(di("", oe))) + '</span></div><div class="feelTrack"><span style="width:' + (oe == null ? 0 : Math.max(4, oe)) + "%;background:" + (oe == null ? "transparent" : Kl(oe)) + '"></span></div></div>', ne = p.filter((he) => he.mood != null && he.energy != null).sort((he, oe) => oe.mood + oe.energy - (he.mood + he.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : He(di("", (T + B) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (ne ? " · best day " + He(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ne.d)) : "")) + '</div></div></div><div class="feelDays">' + p.map(
      (he) => '<div class="weekChip feelDay' + (he.future ? " future" : "") + (he.key === Nt(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + He(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(he.d)) + "</strong>" + (he.count >= 2 ? '<span class="weekTick">' + Za("check") + "</span>" : '<span class="feelDots">' + "●".repeat(he.count) + "</span>") + "</div>" + j("Mood", he.mood) + j("Energy", he.energy) + "</div>"
    ).join("") + "</div>";
  }
  const fi = o("upcomingCountSetting");
  fi.addEventListener("change", () => {
    Vn = fi.value === "all" ? "all" : Number(fi.value), Wr();
  });
  const Zi = o("tempoRevealBtn"), cs = o("tempoExperiment"), Nn = o("tempoQuad"), hi = o("tempoDot"), Jl = o("tempoEstimate"), Ki = o("tempoReadout");
  let Ho = { x: 0.5, y: 0.5 }, $i = !1, Br = { total: 20, work: 45, rest: 15 };
  function mo(t, r, s, p) {
    const g = Math.max(r, Math.min(s, t));
    return Math.round((g - r) / p) * p + r;
  }
  function Ks(t, r) {
    const s = (t - 0.5) * 2, p = (r - 0.5) * 2, g = mo(
      Br.total + s * 5 + p * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), T = mo(
      Br.work + s * 10 + p * 8,
      Number(L.min),
      Number(L.max),
      Number(L.step)
    ), B = mo(
      Br.rest + s * 6 + p * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return _.value = g, L.value = T, P.value = B, z.textContent = T + " sec", ce.textContent = B + " sec", Ya(), { total: g, work: T, rest: B };
  }
  function Rr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", p = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", g = Ks(t, r);
    Ki.textContent = s + " + " + p, Jl.textContent = g.total + " min", Nn.setAttribute("aria-valuetext", s + " and " + p + ", estimated " + g.total + " minutes");
  }
  function Nr(t) {
    const r = Nn.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), p = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    Ho = { x: s, y: p }, hi.style.left = s * 100 + "%", hi.style.top = p * 100 + "%", Rr(s, p);
  }
  Zi.addEventListener("click", () => {
    const t = cs.hidden;
    cs.hidden = !t, Zi.setAttribute("aria-expanded", t ? "true" : "false"), Zi.textContent = t ? "Now close this" : "Don’t try this!", t && (Br = {
      total: Number(_.value),
      work: Number(L.value),
      rest: Number(P.value)
    }, Ho = { x: 0.5, y: 0.5 }, hi.style.left = "50%", hi.style.top = "50%", Rr(Ho.x, Ho.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const Xi = o("testingFeedbackForm"), ps = o("testingFeedbackThanks"), Ql = o("testingFeedbackAgain");
  Xi.addEventListener("submit", (t) => {
    t.preventDefault(), Xi.hidden = !0, ps.hidden = !1, Vt("Feedback captured for prototype");
  }), Ql.addEventListener("click", (t) => {
    t.preventDefault(), Xi.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), ps.hidden = !0, Xi.hidden = !1;
  }), Nn.addEventListener("pointerdown", (t) => {
    var r;
    $i = !0, Nr(t);
    try {
      (r = Nn.setPointerCapture) == null || r.call(Nn, t.pointerId);
    } catch {
    }
  }), Nn.addEventListener("pointermove", (t) => {
    $i && Nr(t);
  }), Nn.addEventListener("pointerup", (t) => {
    $i && ($i = !1, Nr(t), Dt());
  }), Nn.addEventListener("pointercancel", () => $i = !1), Nn.addEventListener("keydown", (t) => {
    let { x: r, y: s } = Ho, p = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : p = !1, p && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Ho = { x: r, y: s }, hi.style.left = r * 100 + "%", hi.style.top = s * 100 + "%", Rr(r, s), Dt());
  });
  const Ra = o("workoutModal");
  let Ji = null;
  function mi(t) {
    return t.map((r) => ({ ...r }));
  }
  function Pr() {
    const t = Ke[xt];
    return {
      key: xt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: mi(Tt),
      strength: mi(Qe),
      cooldown: mi(Ea),
      total: Number(_.value),
      work: Number(L.value),
      rest: Number(P.value),
      rounds: Number(lt.value) || 1
    };
  }
  function us(t = !1) {
    Me = !!t, St = null, na = null, Re(), Rn(), Ji = Pr(), o("moveEditorTitle").textContent = Me ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !Me, o("warmupRow").hidden = Me, o("deleteMoveOpen").hidden = Me;
    const r = o("createMoveOptions");
    r.hidden = !Me;
    {
      const s = Ke[xt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (hs(), Me) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ke[xt];
      Po((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Ar("movement"), vn(), bn(), cs.hidden = !0, Zi.setAttribute("aria-expanded", "false"), Zi.textContent = "Don’t try this!", Ra.classList.toggle("createMode", Me), Ra.querySelector(".modal").classList.toggle("createMode", Me), Ra.classList.add("open"), Ra.setAttribute("aria-hidden", "false"), ct(), Me && Ee();
  }
  function fs() {
    const t = Ke[xt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function hs() {
    const t = fs(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ke[xt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Oi()) : (t.warmupOff = !t.warmupOff, Dt()), hs());
  });
  function Qi() {
    Re(), Rn(), Wa(), na = null, St = null, Ra.classList.contains("createMode") && I(), Ra.classList.remove("createMode"), Ra.querySelector(".modal").classList.remove("createMode"), Ra.classList.remove("open"), Ra.setAttribute("aria-hidden", "true");
  }
  function $s() {
    if (!Ji) return;
    const t = Ji;
    t.profile && (Ke[t.key] = JSON.parse(JSON.stringify(t.profile))), xt = t.key, Tt = mi(t.warmup), Qe = mi(t.strength), Ea = mi(t.cooldown), _.value = t.total, L.value = t.work, P.value = t.rest, lt.value = t.rounds || 1;
    const r = Ke[xt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === xt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r.name);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      h.value = r.name;
    }
    Dt();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (Me) {
      const t = xt;
      delete Ke[t], Me = !1, qt = null, Ot(dt.order.find((r) => Ke[r]) || Object.keys(Ke)[0]);
    } else
      $s();
    Qi();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Re(), ke && Bn();
    const t = Ke[xt], r = h.value.trim() || "New move";
    if (t && (t.name = r), mn(), St = null, Dt(), Me && t)
      zn(xt, t), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === xt)), Me = !1, qt = null, dt.order.includes(xt) || dt.order.push(xt), Vt("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r);
      }
      Vt("Move saved");
    }
    Ji = null, Qi(), Ma();
  }), Ra.addEventListener("click", (t) => {
    if (t.target === Ra) {
      if (Me) {
        const r = xt;
        delete Ke[r], Me = !1, qt = null, Ot(dt.order.find((s) => Ke[s]) || Object.keys(Ke)[0]);
      } else
        $s();
      Qi();
    }
  }), X(o("addMovementBtn"), "movement"), X(o("addRestBtn"), "rest"), X(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", bn), o("useGlobalRestTiming").addEventListener("change", bn), n.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Po(t.dataset.movePreset, !0), Dt();
  })), o("includeWarmupPreset").addEventListener("change", Oi), o("includeCooldownPreset").addEventListener("change", Oi), o("includeWarmupPreset").addEventListener("change", re), o("includeCooldownPreset").addEventListener("change", re), h.addEventListener("input", re), h.addEventListener("input", zt), o("confirmAddMovement").addEventListener("click", Xn), o("confirmAddRest").addEventListener("click", Xn), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Xn();
  });
  const er = o("countdown"), Ir = o("countNum"), eo = o("countdownPixelCanvas");
  let go = null, Jt = "appear";
  class ed {
    constructor(r, s, p, g, T, B, j) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = p, this.y = g, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * B, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = j, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ms = [], Xs = 1, vo = 1;
  function Fo() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function td() {
    var he;
    if (!eo) return;
    const t = Fo(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Xs = r, vo = s;
    const p = Math.min(window.devicePixelRatio || 1, 2);
    eo.width = Math.floor(r * p), eo.height = Math.floor(s * p), eo.style.width = r + "px", eo.style.height = s + "px";
    const g = eo.getContext("2d");
    g.setTransform(p, 0, 0, p, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], B = 12, j = (he = window.matchMedia) == null ? void 0 : he.call(window, "(prefers-reduced-motion: reduce)").matches, ne = j ? 0 : 0.055;
    ms = [];
    for (let oe = 0; oe < r; oe += B)
      for (let te = 0; te < s; te += B) {
        const Be = oe - r / 2, et = te - s / 2, Oe = Math.sqrt(Be * Be + et * et), De = j ? 0 : Math.random() * 75 + Oe * 0.05, Se = new ed({ width: r, height: s }, g, oe, te, T[Math.floor(Math.random() * T.length)], ne, De);
        Se.maxSizeInteger = 4, Se.maxSize = Math.random() * 3.2 + 0.8, Se.sizeStep = 0.35 + Math.random() * 0.45, ms.push(Se);
      }
  }
  function Js(t) {
    cancelAnimationFrame(go), Jt = t;
    const r = eo == null ? void 0 : eo.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Xs, vo);
      let p = !0;
      ms.forEach((g) => {
        g[Jt](), g.isIdle || (p = !1);
      }), Jt === "disappear" && p || (go = requestAnimationFrame(s));
    }
    go = requestAnimationFrame(s);
  }
  function tr() {
    cancelAnimationFrame(go), td(), Js("appear"), setTimeout(() => Js("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    er.classList.contains("active") && tr();
  });
  const gi = o("pixelTrailCanvas"), vi = gi.getContext("2d");
  let to = !0, Oo = 0.7, Pn = 600, bi = [], wi = null, bo = { x: 0, y: 0, ready: !1 };
  function kn() {
    const t = c.getBoundingClientRect(), r = Fo(), s = Math.min(window.devicePixelRatio || 1, 2), p = Math.max(1, t.width / r), g = Math.max(1, t.height / r);
    gi.width = Math.max(1, Math.floor(p * s)), gi.height = Math.max(1, Math.floor(g * s)), gi.style.width = p + "px", gi.style.height = g + "px", vi.setTransform(s, 0, 0, s, 0, 0);
  }
  function ad(t, r) {
    if (!to) return;
    const s = performance.now();
    bo.ready || (bo = { x: t, y: r, ready: !0 });
    const p = 7;
    for (let g = 1; g <= p; g++) {
      const T = g / p;
      bi.push({
        x: bo.x + (t - bo.x) * T,
        y: bo.y + (r - bo.y) * T,
        born: s - (p - g) * 10
      });
    }
    bo = { x: t, y: r, ready: !0 };
  }
  function Hr(t) {
    if (wi = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      wi = requestAnimationFrame(Hr);
      return;
    }
    const r = c.getBoundingClientRect(), s = Fo();
    vi.clearRect(0, 0, r.width / s, r.height / s), to && (bi = bi.filter((g) => t - g.born < Pn), vi.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", bi.forEach((g) => {
      const T = (t - g.born) / Pn, B = (1 - T) * Oo, j = Math.round(g.x / 14) * 14, ne = Math.round(g.y / 14) * 14;
      vi.globalAlpha = Math.max(0, B);
      const he = 2 + 5 * (1 - T) * Oo;
      vi.fillRect(j - he / 2, ne - he / 2, he, he);
    }), vi.globalAlpha = 1), wi = requestAnimationFrame(Hr);
  }
  c.addEventListener("pointermove", (t) => {
    const r = c.getBoundingClientRect(), s = Fo();
    ad((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => bo.ready = !1), new ResizeObserver(kn).observe(c), kn(), wi = requestAnimationFrame(Hr);
  const ra = o("movementRippleCanvas"), kt = ra.getContext("2d");
  let Ca = !0, wo = null, Wo = performance.now();
  function ar() {
    const t = ra.parentElement.getBoundingClientRect(), r = Fo(), s = Math.max(1, t.width / r), p = Math.max(1, t.height / r), g = Math.min(window.devicePixelRatio || 1, 2);
    ra.width = Math.max(1, Math.floor(s * g)), ra.height = Math.max(1, Math.floor(p * g)), ra.style.width = s + "px", ra.style.height = p + "px", kt.setTransform(g, 0, 0, g, 0, 0);
  }
  function ao() {
    var t;
    return sa || ((t = Ue[nt]) == null ? void 0 : t.kind) === "rest";
  }
  function xi() {
    const t = Ue[nt];
    return ao() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function In(t) {
    if (wo = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      wo = requestAnimationFrame(In);
      return;
    }
    const r = ra.parentElement.getBoundingClientRect(), s = Fo(), p = Math.max(1, r.width / s), g = Math.max(1, r.height / s);
    if (kt.clearRect(0, 0, p, g), Ca) {
      const T = xi(), B = (t - Wo) % T / T, j = 15, ne = Math.max(8, Math.round(j * g / Math.max(1, p))), he = p / (j + 1), oe = g / (ne + 1), te = p * 0.5, Be = g * 0.52, et = Math.hypot(te, Be), De = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Se = 1; Se <= ne; Se++)
        for (let ht = 1; ht <= j; ht++) {
          const vt = ht * he, je = Se * oe, wt = Math.hypot(vt - te, je - Be) / et, _t = ao(), st = _t ? Math.exp(-Math.pow((wt - (B * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, at = Math.exp(-Math.pow((wt - B * 1.25) * 7, 2)), ca = _t ? st : at, _a = _t ? 0.5 + 0.5 * Math.sin(B * Math.PI * 2 - wt * 3) ** 2 : 0.35 + 0.65 * Math.sin(B * Math.PI * 2 - wt * 5) ** 2, Zt = _t ? 1.4 + ca * 4.2 * _a : 1.2 + ca * 5 * _a;
          kt.beginPath(), kt.arc(vt, je, Zt, 0, Math.PI * 2), kt.fillStyle = `rgba(${De},${_t ? 0.08 + ca * 0.48 : 0.05 + ca * 0.55})`, kt.fill();
        }
    }
    wo = requestAnimationFrame(In);
  }
  new ResizeObserver(ar).observe(ra.parentElement), ar(), wo = requestAnimationFrame(In);
  const Pt = o("exerciseTitle"), on = o("exerciseMeta"), qo = o("stepLabel"), Fr = o("digits"), gs = o("fill"), jo = o("progress"), vs = o("pause"), bs = o("nextName"), nd = o("nextMeta"), Qs = o("nextIcon"), no = o("skipNextSession");
  let Gt = null;
  function Ta(t) {
    for (let r = Math.max(0, t); r < Ue.length; r++)
      if (!Ue[r].sessionHidden) return r;
    return -1;
  }
  function el() {
    const t = Ue[nt];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (sa) {
      const p = Ta(nt + 1), g = p >= 0 ? Ue[p] : null;
      return g ? { name: g.name, meta: or(g), icon: nr(g) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Ta(nt + 1), s = r >= 0 ? Ue[r] : null;
    return s ? { name: s.name, meta: or(s), icon: nr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function tl() {
    if (!Ue[nt]) return Ue.length;
    const r = Ta(nt + 1);
    return r < 0 ? Ue.length : r + 1;
  }
  function nr(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function or(t) {
    return t.kind === "video" ? "YouTube · " + Zn(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function Or() {
    return Ue.length && Ue[Ue.length - 1].round || 1;
  }
  function Hn(t) {
    const r = Ue[t];
    if (!r) return "";
    const s = Or();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ue.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const p = Ue.filter((g) => g.round === r.round && !g.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + p;
  }
  function xo() {
    return jo.querySelector('[data-step="' + nt + '"]');
  }
  function od() {
    Ue[nt] && Number(jo.dataset.round) !== (Ue[nt].round || 1) && sr(), [...jo.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < nt), t.classList.toggle("active", r === nt), t.classList.toggle("rewindable", r <= nt), t.disabled = r > nt, r === nt && t.style.setProperty("--segment-progress", "0%");
    }), Ue[nt] && (qo.textContent = Hn(nt), Vo());
  }
  function al(t) {
    const r = Ue.indexOf(t);
    r < 0 || r <= nt || (t.sessionHidden = !t.sessionHidden, oo(), Vt((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Wr() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = tl(), s = Ue.slice(r);
    (Vn === "all" ? s : s.slice(0, Math.max(1, Number(Vn) || 1))).forEach((g) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (g.sessionHidden ? " sessionHidden" : "") + (hr(g) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Za(nr(g)) + '</div><div><div class="upcomingName">' + He(g.name) + '</div><div class="upcomingMeta">' + He(or(g)) + (Or() > 1 ? " · round " + g.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (g.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => al(g)), t.appendChild(T);
    });
  }
  function oo() {
    var r;
    const t = el();
    bs.textContent = t.name, nd.textContent = t.meta, Qs.innerHTML = Za(t.icon);
    {
      const s = sa ? Ue[Ta(nt + 1)] : ((r = Ue[nt]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ue[Ta(nt + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && hr(s)));
    }
    if (Gt = null, sa) {
      const s = Ta(nt + 1);
      s >= 0 && (Gt = Ue[s]);
    } else {
      const s = Ue[nt];
      if (s && s.rest > 0)
        Gt = null;
      else {
        const p = Ta(nt + 1);
        p >= 0 && (Gt = Ue[p]);
      }
    }
    no && (no.hidden = !Gt, no.textContent = Gt != null && Gt.sessionHidden ? "Include this session" : "Skip this session"), Wr();
  }
  no.addEventListener("click", () => {
    Gt && (Gt.sessionHidden = !Gt.sessionHidden, Vt((Gt.sessionHidden ? "Hidden " : "Included ") + Gt.name + " for this session"), oo());
  });
  let Mn = null, ws = null;
  function ir(t, r = {}) {
    const s = Ke[xt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: xt, ...r });
  }
  function xs() {
    const t = Ke[xt];
    Mn = { key: xt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ws), ws = setInterval(() => {
      Mn && !Fa && Mn.active++;
    }, 1e3), ir("started", { steps: Ue.length });
  }
  function rn(t) {
    if (clearInterval(ws), !Mn) return;
    const r = Mn;
    Mn = null, ir(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (dt.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), dt.history = dt.history.slice(0, 1e3), Ma(), So(), $a());
  }
  let sn = null, rr = null, La = !1;
  function io() {
    return ft().sounds !== !1;
  }
  function yi() {
    if (io())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), sn = sn || new (window.AudioContext || window.webkitAudioContext)(), sn.state === "suspended" && sn.resume();
      } catch {
        sn = null;
      }
  }
  function ln(t, r, s, { to: p = t, vol: g = 0.25, type: T = "sine" } = {}) {
    const B = sn.currentTime + r, j = sn.createOscillator(), ne = sn.createGain();
    j.type = T, j.frequency.setValueAtTime(t, B), p !== t && j.frequency.exponentialRampToValueAtTime(p, B + s), ne.gain.setValueAtTime(1e-4, B), ne.gain.exponentialRampToValueAtTime(g, B + 0.01), ne.gain.exponentialRampToValueAtTime(1e-4, B + s), j.connect(ne).connect(sn.destination), j.start(B), j.stop(B + s + 0.02);
  }
  const nl = {
    tick: () => ln(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      ln(660, 0, 0.12, { type: "triangle", vol: 0.3 }), ln(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => ln(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      ln(523, 0, 0.16, { type: "triangle" }), ln(659, 0.16, 0.16, { type: "triangle" }), ln(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Sn(t) {
    if (!(!io() || !sn))
      try {
        sn.state === "suspended" && sn.resume(), nl[t]();
      } catch {
      }
  }
  function qr() {
    jt >= 1 && jt <= 3 && jt !== rr && (rr = jt, Sn("tick"));
  }
  function ol() {
    yi(), k("workout"), jr();
    const t = Ta(0);
    t >= 0 && Ue[t].kind === "video" && zo(Ue[t]);
  }
  function ki() {
    dr(), rn(!1), clearInterval(ta), clearInterval(ri), sa = !1, Cn(!1), o("app").classList.remove("resting"), er.classList.remove("active"), k("home");
  }
  function jr() {
    er.classList.add("active");
    let t = 5;
    Ir.textContent = t, Sn("tick"), requestAnimationFrame(tr), clearInterval(ri), ri = setInterval(() => {
      t--, t > 0 ? (Ir.textContent = t, Sn("tick"), tr()) : (clearInterval(ri), Ir.textContent = "GO", Sn("move"), La = !0, tr(), setTimeout(() => {
        er.classList.remove("active"), cancelAnimationFrame(go), ys();
      }, 650));
    }, 1e3);
  }
  function sr() {
    var r;
    jo.innerHTML = "";
    const t = ((r = Ue[Math.max(0, nt)] || Ue[0]) == null ? void 0 : r.round) || 1;
    jo.dataset.round = t, Ue.forEach((s, p) => {
      if ((s.round || 1) !== t) return;
      const g = document.createElement("button");
      g.dataset.step = p, g.type = "button", g.className = "progressSegment", g.setAttribute("aria-label", "Go to " + s.name), g.addEventListener("click", () => {
        p <= nt && il(p);
      }), jo.appendChild(g);
    });
  }
  function Cn(t) {
    t = !!t;
    const r = Fa !== t;
    if (Fa = t, vs.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), Aa && bt)
      try {
        t ? bt.pauseVideo() : bt.playVideo();
      } catch {
      }
    r && Mn && ir(t ? "paused" : "resumed");
  }
  function il(t) {
    t < 0 || t >= Ue.length || t > nt || (clearInterval(ta), sa = !1, o("app").classList.remove("resting"), nt = t, Cn(!1), ko(), ta = setInterval(Mo, 1e3));
  }
  function ys() {
    if (nt = Ta(0), Cn(!1), sr(), nt < 0) {
      Pt.textContent = "No activities", on.textContent = "Open Edit and enable or add a movement", on.hidden = !1;
      return;
    }
    xs(), ko(), clearInterval(ta), ta = setInterval(Mo, 1e3);
  }
  const lr = o("videoStage"), Mi = o("videoSound"), id = 0, Si = 1, It = 2;
  let Tn = 0, qa = null, ja = null, bt = null, za = null, Ci = 0, yo = !1, Aa = null, ks = null;
  function Ms() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : qa || (qa = new Promise((r, s) => {
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
        clearInterval(g), qa = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const B = document.createElement("script");
        B.src = "https://www.youtube.com/iframe_api", B.async = !0, B.onerror = () => {
          clearInterval(g), clearTimeout(T), qa = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(B);
      }
    }), qa);
  }
  function fa() {
    return ja || (ja = Ms().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), bt = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(bt), onStateChange: (p) => rd(p.data), onError: (p) => sd(p.data) }
      });
    })), ja.catch(() => {
      ja = null;
    }), ja);
  }
  function zo(t) {
    !(t != null && t.videoId) || t.videoError || fa().then((r) => {
      Aa || za === t.videoId || (za = t.videoId, Ci = Number(t.start) || 0, yo = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: Ci }));
    }).catch(() => {
    });
  }
  function rl() {
    const t = Ta(nt + 1);
    t >= 0 && Ue[t].kind === "video" && zo(Ue[t]);
  }
  function rd(t) {
    if (!Aa) {
      t === Si && !yo && (yo = !0, bt.pauseVideo(), bt.seekTo(Ci, !0));
      return;
    }
    lr.classList.toggle("playing", t === Si), Ue[nt] === Aa && performance.now() > Tn && (t === Si && Fa ? Cn(!1) : t === It && !Fa && Cn(!0)), t === Si && Na(Aa.videoId, bt.getDuration()) && Ma(), t === id && cr();
  }
  function sd(t) {
    const r = Aa;
    if (!r) {
      za = null;
      return;
    }
    t === 101 || t === 150 ? (Cs(r.videoId), Vt("That video can’t play outside YouTube, so it was skipped")) : Vt("The video couldn’t play, so it was skipped"), cr();
  }
  function sl(t) {
    if (o("app").classList.add("videoStep"), Mi.hidden = !0, Aa = t, clearTimeout(ks), !t.videoId) {
      Vt("This video step has no link yet, so it was skipped"), setTimeout(() => cr(), 0);
      return;
    }
    fa().then((r) => {
      if (Aa !== t) return;
      Tn = performance.now() + 1500;
      const s = Number(t.start) || 0;
      za !== t.videoId ? (za = t.videoId, Ci = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Fa && r.pauseVideo(), ks = setTimeout(() => {
        Aa !== t || Fa || (r.getPlayerState() !== Si ? (r.mute(), r.playVideo(), Mi.hidden = !1) : r.isMuted() && (Mi.hidden = !1));
      }, 1600);
    }).catch(() => {
      Aa === t && (Vt("YouTube didn’t load, so the video was skipped"), cr());
    });
  }
  function Ss() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, p = (r == null ? void 0 : r.offsetHeight) || 42, g = window.innerHeight - s - 16 - p - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(g)) + "px");
  }
  window.addEventListener("resize", Ss);
  function dr() {
    clearTimeout(ks);
    const t = Aa;
    if (Aa = null, o("app").classList.remove("videoStep"), lr.classList.remove("playing"), Mi.hidden = !0, t && bt) {
      try {
        bt.pauseVideo();
      } catch {
      }
      za = null;
    }
  }
  function cr() {
    const t = Aa;
    !t || Ue[nt] !== t || (dr(), clearInterval(ta), Go(), ta = setInterval(Mo, 1e3));
  }
  Mi.addEventListener("click", () => {
    bt && (bt.unMute(), bt.playVideo()), Mi.hidden = !0;
  });
  function ld(t) {
    var p;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = bt && Aa === t && Number((p = bt.getDuration) == null ? void 0 : p.call(bt)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function ll(t, r) {
    const s = Ke[xt];
    [Tt, Qe, Ea, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((p) => (Array.isArray(p) ? p : []).forEach((g) => {
      g && g.kind === "video" && g.videoId === t && r(g);
    }));
  }
  function Na(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && ll(t, (p) => {
      p.videoDuration !== r && (p.videoDuration = r, s = !0);
    }), s;
  }
  function Cs(t) {
    ll(t, (r) => {
      r.videoError = "embed";
    }), Ma();
  }
  function dl(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Ra.classList.contains("open") ? St || Dt() : (Dt(), Ma());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((p) => p.ok ? p.json() : Promise.reject(p.status)).then((p) => {
      t.videoId === r && (t.videoTitle = p.title || "", t.autoName && p.title && (t.name = p.title), s());
    }).catch((p) => {
      t.videoId === r && p === 401 && (t.videoError = "embed", s());
    }), cl(r).then((p) => {
      Na(r, p) && s();
    }).catch((p) => {
      p === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function cl(t) {
    return Ms().then((r) => new Promise((s, p) => {
      const g = document.createElement("div");
      g.className = "videoProbe", g.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      g.appendChild(T), o("app").appendChild(g);
      let B = null, j = !1;
      const ne = (te, Be) => {
        j || (j = !0, clearTimeout(he), setTimeout(() => {
          try {
            B == null || B.destroy();
          } catch {
          }
          g.remove();
        }, 0), Be ? p(Be) : s(te));
      }, he = setTimeout(() => ne(0), 2e4), oe = () => {
        var Be;
        const te = Number((Be = B == null ? void 0 : B.getDuration) == null ? void 0 : Be.call(B)) || 0;
        return te > 0 && ne(te), te > 0;
      };
      B = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            oe() || (B.mute(), B.playVideo());
          },
          onStateChange: () => oe(),
          onError: (te) => ne(0, te.data === 101 || te.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ko() {
    sa = !1;
    const t = Ue[nt];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? sl(t) : dr(), jt = t.duration, Ro = t.duration, rr = null, La ? La = !1 : Sn(t.kind === "rest" ? "rest" : "move"), Pt.textContent = t.name, on.textContent = t.group, on.hidden = !0, qo.textContent = Hn(nt), Mn && ir("step", { name: t.name, group: t.group, kind: t.kind, step: nt + 1, of: Ue.length, round: t.round || 1, rounds: Or(), duration: t.duration }), oo(), od(), rl(), t.kind === "video" && setTimeout(Ss, 0);
  }
  function Vo() {
    var g;
    const t = ((g = Ue[nt]) == null ? void 0 : g.kind) === "video" && !sa, r = t && jt >= 60;
    Fr.textContent = r ? Zn(jt) : jt, Fr.classList.toggle("long", r), t && (o("videoClock").textContent = Zn(jt) + " left");
    const s = jt / Ro * 100;
    gs.style.width = s + "%";
    const p = xo();
    if (p && !sa) {
      const T = 100 - s;
      p.style.setProperty("--segment-progress", T + "%");
    }
  }
  function Mo() {
    var r, s;
    if (Fa) return;
    const t = Ue[nt];
    if ((t == null ? void 0 : t.kind) === "video" && !sa && Aa === t) {
      const p = Number((r = bt == null ? void 0 : bt.getCurrentTime) == null ? void 0 : r.call(bt)) || 0, g = Number(t.start) || 0, T = ld(t);
      Ro = Math.max(1, T - g), (p > g || ((s = bt == null ? void 0 : bt.getPlayerState) == null ? void 0 : s.call(bt)) === Si) && (jt = Math.max(0, Math.ceil(T - p))), Vo(), qr(), p > g && p >= T - 0.25 && cr();
      return;
    }
    jt--, Vo(), qr(), jt <= 0 && (t.rest > 0 ? pl(t.rest) : Go());
  }
  function pl(t) {
    var s;
    sa = !0, o("app").classList.add("resting");
    const r = xo();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(ta), jt = t, Ro = t, rr = null, Sn("rest"), Mn && ir("rest", { duration: t }), Pt.textContent = "Rest", on.textContent = (s = Ue[nt]) != null && s.roundBreakAfter ? "Round " + (Ue[nt].round + 1) + " next" : "Recovery", oo(), Vo(), ta = setInterval(() => {
      Fa || (jt--, Vo(), qr(), jt <= 0 && (clearInterval(ta), Go(), ta = setInterval(Mo, 1e3)));
    }, 1e3);
  }
  function Go() {
    sa = !1;
    const t = Ta(nt + 1);
    if (t >= 0)
      nt = t, ko();
    else {
      clearInterval(ta), dr(), Cn(!1), o("app").classList.remove("resting"), Pt.textContent = "Complete", on.textContent = "Move finished", on.hidden = !1, Fr.textContent = "✓";
      {
        const r = Or();
        qo.textContent = r > 1 ? r + " rounds done" : Ue.filter((s) => !s.roundBreak).length + " steps done";
      }
      rn(!0), Sn("done");
      {
        const r = Zr(7).reduce((s, p) => s + p.minutes, 0);
        on.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      gs.style.width = "100%", oo();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    ul(), Cn(!1);
  });
  function ul() {
    clearInterval(ta);
    const t = Ue[nt];
    if (sa) {
      sa = !1, o("app").classList.remove("resting");
      const s = Ta(nt + 1);
      s >= 0 ? (nt = s, ko(), ta = setInterval(Mo, 1e3)) : Go();
      return;
    }
    if (t && t.rest > 0) {
      pl(t.rest);
      return;
    }
    const r = Ta(nt + 1);
    r >= 0 ? (nt = r, ko(), ta = setInterval(Mo, 1e3)) : Go();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(ta), Cn(!1), sa) {
      const t = Ue[nt];
      jt = t.rest, Ro = t.rest, rr = null, Sn("rest"), Pt.textContent = "Rest", on.textContent = "Recovery", o("app").classList.add("resting"), oo(), Vo();
    } else
      ko();
    ta = setInterval(sa ? () => {
      Fa || (jt--, Vo(), qr(), jt <= 0 && (clearInterval(ta), Go(), ta = setInterval(Mo, 1e3)));
    } : Mo, 1e3);
  });
  function pr(t, r, s, p) {
    let g = 0, T = null, B = !1;
    function j() {
      T && cancelAnimationFrame(T), T = null, g = 0, B = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function ne(te) {
      if (!B) return;
      g || (g = te);
      const Be = Math.min(1, (te - g) / s);
      if (r.style.width = Be * 100 + "%", Be >= 1) {
        B = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), p();
        return;
      }
      T = requestAnimationFrame(ne);
    }
    function he(te) {
      var Be;
      if (!(te && te.button !== void 0 && te.button !== 0)) {
        te == null || te.preventDefault(), j(), B = !0, t.classList.add("holding");
        try {
          (Be = t.setPointerCapture) == null || Be.call(t, te.pointerId);
        } catch {
        }
        T = requestAnimationFrame(ne);
      }
    }
    function oe() {
      B && j();
    }
    t.addEventListener("pointerdown", he), t.addEventListener("pointerup", oe), t.addEventListener("pointercancel", oe), t.addEventListener("lostpointercapture", oe), t.addEventListener("keydown", (te) => {
      (te.key === " " || te.key === "Enter") && !te.repeat && he(te);
    }), t.addEventListener("keyup", (te) => {
      (te.key === " " || te.key === "Enter") && oe();
    });
  }
  const fl = o("endWorkout");
  pr(fl, o("holdEndFill"), 1500, ki);
  const Uo = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Uo.classList.add("open"), Uo.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Uo.classList.remove("open"), Uo.setAttribute("aria-hidden", "true");
  });
  function hl() {
    const t = xt, r = n.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ke[t], dt.order = dt.order.filter((p) => p !== t);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const p = "custom-" + Date.now();
      Ke[p] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, dt.order.push(p), s = zn(p, Ke[p]);
    }
    Uo.classList.remove("open"), Uo.setAttribute("aria-hidden", "true"), Ji = null, Qi(), Ot(s.dataset.workout), Ma(), Vt("Move deleted");
  }
  pr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, hl);
  const zr = n.querySelector(".rubberTabs"), Fn = o("rubberIndicator");
  function ur(t, r = !0) {
    if (!t || !zr || !Fn) return;
    const s = zr.getBoundingClientRect(), p = t.getBoundingClientRect();
    Fn.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const g = Fo();
    Fn.style.left = (p.left - s.left) / g + zr.scrollLeft + "px", Fn.style.width = p.width / g + "px", r && (Fn.style.transform = "scaleX(1.08)", setTimeout(() => Fn.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), ur(t, !0);
  })), requestAnimationFrame(() => ur(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => ur(n.querySelector(".tab.active"), !1));
  const fr = o("pixelTrailToggle"), Ts = o("rippleToggle"), Yo = o("trailStrength"), On = o("trailLife");
  function Va(t, r) {
    ft()[t] = r, Ma();
  }
  const ro = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ls(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function hr(t) {
    var r;
    return !!((r = ft().hideMeta) != null && r[Ls(t)]);
  }
  function As() {
    const t = /* @__PURE__ */ new Map(), r = (s, p, g) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = Ls(s);
      let B = t.get(T);
      B || (B = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(T, B)), B.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : p), B.moves.add(g), B.count++;
    };
    return Object.values(Ke).forEach((s) => {
      const p = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Je)).forEach((g) => r(g, "Warm-up", p)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((g) => r(g, g.presetRole === "warmup" ? "Warm-up" : g.presetRole === "cooldown" ? "Cooldown" : "Movement", p)), (s.cooldown || (s.customSequence ? [] : wa)).forEach((g) => r(g, "Cooldown", p));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, p]) => {
      t.has(s) || t.set(s, { key: s, label: p, kinds: /* @__PURE__ */ new Set([p]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, p) => ro.indexOf(s.kind) - ro.indexOf(p.kind) || s.label.localeCompare(p.label));
  }
  let _s = "all";
  function da() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return As().filter((r) => (_s === "all" || r.kind === _s) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function Vr() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = ft().hideMeta || {}, s = da();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((g) => {
      const T = !r[g.key], B = g.count ? (g.moves.length > 2 ? g.moves.slice(0, 2).join(", ") + " + " + (g.moves.length - 2) + " more" : g.moves.join(", ")) + " · " + g.count + " step" + (g.count === 1 ? "" : "s") : "Not used yet", j = document.createElement("tr");
      j.className = T ? "" : "off", j.innerHTML = '<td><div class="metaType">' + He(g.label) + '</div><div class="metaSub">' + He(g.kind + " · " + B) + '</div></td><td class="metaKindCol">' + He(g.kind) + '</td><td class="metaUsedCol">' + He(B) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + He(g.label) + ' on phones"></button></td>', j.querySelector(".switch").addEventListener("click", () => mr([g.key], T)), t.appendChild(j);
    });
    const p = s.filter((g) => r[g.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (p ? " · " + p + " hidden on phones" : "") : "";
  }
  function mr(t, r) {
    const s = { ...ft().hideMeta || {} };
    t.forEach((p) => {
      r ? s[p] = !0 : delete s[p];
    }), Va("hideMeta", s), Vr(), si(), oo();
  }
  o("metaSearch").addEventListener("input", Vr), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    _s = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), Vr();
  })), o("metaHideAll").addEventListener("click", () => mr(da().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => mr(da().map((t) => t.key), !1));
  const Ti = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ft().toggles || {} };
  function ml() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Ti[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, p]) => {
      o(p).hidden = Ti[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => Ti[s] !== !1);
    n.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    Ti[t.dataset.toggle] = Ti[t.dataset.toggle] === !1, ml(), Va("toggles", { ...Ti });
  })), ml();
  function dd() {
    fr.classList.toggle("on", to), Ts.classList.toggle("on", Ca), Yo.value = Math.round(Oo * 100), o("trailStrengthValue").textContent = Yo.value + "%", On.value = Pn, o("trailLifeValue").textContent = On.value + " ms";
  }
  ft().trailEnabled !== void 0 && (to = ft().trailEnabled), ft().rippleEnabled !== void 0 && (Ca = ft().rippleEnabled), ft().trailStrength !== void 0 && (Oo = ft().trailStrength), ft().trailMaxAge !== void 0 && (Pn = ft().trailMaxAge), dd();
  const rt = o("soundsToggle");
  rt.classList.toggle("on", io()), rt.addEventListener("click", () => {
    Va("sounds", !io()), rt.classList.toggle("on", io()), io() && (yi(), Sn("move"));
  }), fr.addEventListener("click", () => {
    to = !to, fr.classList.toggle("on", to), to || (bi = []), Va("trailEnabled", to);
  }), Ts.addEventListener("click", () => {
    Ca = !Ca, Ts.classList.toggle("on", Ca), Va("rippleEnabled", Ca);
  }), Yo.addEventListener("input", () => {
    Oo = Number(Yo.value) / 100, o("trailStrengthValue").textContent = Yo.value + "%";
  }), Yo.addEventListener("change", () => Va("trailStrength", Oo)), On.addEventListener("input", () => {
    Pn = Number(On.value), o("trailLifeValue").textContent = On.value + " ms";
  }), On.addEventListener("change", () => Va("trailMaxAge", Pn)), fi.addEventListener("change", () => Va("upcomingCount", Vn));
  function Es(t) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), To(n);
  }
  Es(ft().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    Es(t.dataset.theme), Va("theme", t.dataset.theme);
  }));
  const xa = { steps: null, weather: null, ...ft().entities || {} };
  let oa = null, Wn = {};
  function gl(t) {
    const r = Object.values(t).filter((j) => j.entity_id.startsWith("sensor.") || j.entity_id.startsWith("input_number.")), s = (j) => j.attributes.friendly_name || j.entity_id, p = r.filter((j) => /step/i.test(j.entity_id) || /step/i.test(s(j)) || ["steps", "step"].includes(String(j.attributes.unit_of_measurement || "").toLowerCase())), g = r.filter((j) => !p.includes(j)), T = (j, ne) => s(j).localeCompare(s(ne)), B = (j, ne) => /health_steps/.test(ne.entity_id) - /health_steps/.test(j.entity_id) || T(j, ne);
    return { suggested: p.sort(B), rest: g.sort(T), label: s };
  }
  function vl(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: p, label: g } = gl(t), T = (ne) => '<option value="' + He(ne.entity_id) + '">' + He(g(ne)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (p.length ? '<optgroup label="All sensors">' + p.map(T).join("") + "</optgroup>" : ""), r.value = xa.steps || "";
    const B = o("stepsStatus"), j = xa.steps && t[xa.steps];
    B.textContent = j ? "Connected · " + g(j) : B.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    xa.steps = o("stepsEntity").value || null, Va("entities", { ...xa }), Wn = {}, Yr(), oa && (vl(oa), Ur(oa));
  });
  function bl(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function Gr() {
    const t = xa.steps && (oa == null ? void 0 : oa[xa.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function Ur(t) {
    var p;
    const r = xa.steps, s = r ? Number((p = t[r]) == null ? void 0 : p.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? bl(s) : "—" : "Set up in Settings";
  }
  let gr = 0;
  async function Yr() {
    const t = xa.steps;
    if (!t || !l.ws) return;
    gr = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const p = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), g = (p == null ? void 0 : p[t]) || [], T = {};
      if (g.forEach((B) => {
        Number.isFinite(B.max) && (T[Nt(new Date(B.start))] = B.max);
      }), !Object.keys(T).length) {
        const B = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((B == null ? void 0 : B[t]) || []).forEach((j) => {
          const ne = Number(j.s ?? j.state), he = j.lu ? j.lu * 1e3 : Date.parse(j.last_updated || j.last_changed);
          if (!Number.isFinite(ne) || !he) return;
          const oe = Nt(new Date(he));
          T[oe] = Math.max(T[oe] || 0, ne);
        });
      }
      Wn = T, $a();
    } catch {
    }
  }
  function So() {
    $a();
  }
  So(), setInterval(() => {
    So(), ui(), yn();
  }, 10 * 60 * 1e3);
  function Zr(t) {
    const r = {}, s = {};
    dt.history.forEach((B) => {
      const j = Nt(new Date(B.start));
      r[j] = (r[j] || 0) + (B.seconds || 0) / 60, s[j] = (s[j] || 0) + 1;
    });
    const p = /* @__PURE__ */ new Date(), g = Nt(p), T = [];
    for (let B = t - 1; B >= 0; B--) {
      const j = new Date(p.getFullYear(), p.getMonth(), p.getDate() - B), ne = Nt(j), he = dt.checkins.filter((te) => te.date === ne), oe = (te) => {
        const Be = he.map((et) => et[te]).filter(Boolean);
        return Be.length ? Be.reduce((et, Oe) => et + Oe, 0) / Be.length : null;
      };
      T.push({
        key: ne,
        date: j,
        minutes: Math.round(r[ne] || 0),
        moves: s[ne] || 0,
        steps: ne === g && Gr() != null ? Gr() : Wn[ne] ?? null,
        mood: oe("mood"),
        energy: oe("energy")
      });
    }
    return T;
  }
  function wl(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function $a() {
    const t = o("insightCard");
    if (!t) return;
    const r = Zr(30), s = wl(r), p = r.reduce((he, oe) => he + oe.minutes, 0), g = /* @__PURE__ */ new Date(), T = Nt(g), B = Nt(new Date(g.getFullYear(), g.getMonth(), g.getDate() - (g.getDay() + 6) % 7)), j = r.filter((he) => he.key >= B && he.key <= T).reduce((he, oe) => he + oe.minutes, 0), ne = (he, oe, te) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + he + '</div><div><div class="activityRowName">' + He(oe) + '</div><div class="activityRowMeta">' + He(te) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Za("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ne(Za("clock"), "This week", j + " min") + ne(Za("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + ne(Za("calendar"), "30 days", p + " min") + "</div>";
  }
  const vr = {
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
  }, Ds = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", Zo = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ko = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Kr = 0;
  const $r = (t, r) => '<path class="' + r + '" d="' + t + '"/>', cd = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', dn = (t, r, s, p) => {
    const g = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + cd(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + g) + " " + (r - g) + "L" + (t + s) + " " + r + "L" + (t + g) + " " + (r + g) + "L" + t + " " + (r + s) + "L" + (t - g) + " " + (r + g) + "L" + (t - s) + " " + r + "L" + (t - g) + " " + (r - g) + 'Z"/>';
  }, Bs = ([t, r, s], p) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', pd = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ud = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), fd = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], p) => '<circle class="wxFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function xl(t, r, s, p) {
    return t === "clear" ? r ? Bs(s ? Ko.l : Ko.s, p) + (s ? dn(70, 20, 5.83, 1) + dn(78.33, 41.67, 3.75, 0.8) + dn(60, 71.67, 3.33, 0.6) : dn(42, 12, 3.5, 1) + dn(47, 25, 2.25, 0.8) + dn(36, 43, 2, 0.6)) : pd(p, s) : t === "partly" ? (r ? Bs(s ? Ko.lp : Ko.sp, p) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + $r(s ? Zo.lp : Zo.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? dn(73.33, 16.67, 4.17, 0.9) : dn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? $r(s ? Zo.lc : Zo.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? dn(15, 15, 3.75, 0.8) + dn(76.67, 13.33, 2.92, 0.6) : dn(9, 9, 2.25, 0.8) + dn(46, 8, 1.75, 0.6) : "") : $r(s ? Zo.lr : Zo.s, "wxCloudLight") + (t === "rain" ? ud(s) : fd(s));
  }
  const Rs = () => {
    var t;
    return ((t = oa == null ? void 0 : oa["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let Ga = ft().weatherStyle || "bitmap", yl = ft().weatherLayout === "strip" ? "strip" : "tiles", kl = ft().weatherMotion !== !1;
  const Co = () => kl && !Da(), $o = /* @__PURE__ */ new Map(), Xo = 700, hd = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function Xr(t, r, s, p = Ga, g, T) {
    let B = Ds(t);
    const j = B === "night" || (T != null ? !!T : !!s && Rs());
    B === "night" && (B = "clear");
    const ne = r ? 90 : 54, he = Zl(t, j), oe = performance.now();
    let te = g ? $o.get(g) : null;
    if (g && !te ? $o.set(g, te = { key: he, t0: -1e9 }) : te && te.key !== he && (te.fromKey = te.key, te.from = te.last || null, te.key = he, te.t0 = oe), p !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + he + '"' + (g ? ' data-wx-slot="' + g + '"' : "") + ' data-wx-style="' + p + '" data-wx-size="' + ne + '"></canvas></span>';
    let Be = "";
    if (te && oe - te.t0 < Xo && (Co() || Da())) {
      const et = hd(te.fromKey);
      Be = '<span class="wxLayer wxOut ' + et.k + (et.night ? " night" : "") + '" style="animation-delay:' + Math.round(te.t0 - oe) + 'ms"><svg viewBox="0 0 ' + ne + " " + ne + '">' + xl(et.k, et.night, r, "wxg" + ++Kr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + B + (j ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ne + " " + ne + '">' + xl(B, j, r, "wxg" + ++Kr) + "</svg>" + Be + "</span>";
  }
  function br() {
    const t = o("app"), r = getComputedStyle(t), s = (j) => r.getPropertyValue(j).trim(), p = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([j, ne]) => {
      s(ne) && (p[j] = s(ne));
    });
    const g = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", B = t.classList.contains("light");
    return { colors: p, ink: B ? g : T, paper: B ? T : g };
  }
  function To(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const p = br(), g = Co(), T = Da();
    s.forEach((B) => {
      var te;
      const j = B.dataset.wx, ne = B.dataset.wxSlot ? $o.get(B.dataset.wxSlot) : null;
      let he = zd(j, p.colors);
      if (ne && ne.key === j) {
        const Be = (r - ne.t0) / Xo;
        Be < 1 && (g || T) && (he = Zp(ne.from || zd(ne.fromKey, p.colors), he, Math.max(0, Be), p.colors, T)), ne.last = he;
      }
      const oe = dp(he, { size: Number(B.dataset.wxSize) || 54, px: 2, oneBit: B.dataset.wxStyle === "onebit", colors: p.colors, ink: p.ink, paper: p.paper, clock: r, idle: g });
      B.width !== oe.w && (B.width = oe.w), B.height !== oe.h && (B.height = oe.h), (te = B.getContext("2d")) == null || te.putImageData(new ImageData(oe.data, oe.w, oe.h), 0, 0);
    });
  }
  let Li = null, wr = -1;
  function Ai(t) {
    if (Li = null, !v) return;
    const r = Co(), s = Math.floor(t / 100), p = [...$o.values()].some((ne) => t - ne.t0 < Xo), g = [...m.values()].some((ne) => t - ne.t0 < ne.dur), T = Ie.home.classList.contains("active"), B = Le.classList.contains("open"), j = r && Ga === "smooth" && (B || T && yl === "strip");
    !document.hidden && (p || g || j || r && s !== wr) && (wr = s, T && (To(o("weatherCard"), t), H(o("weatherCard"), t)), B && (To(Le, t), H(Le, t))), (r || p || g) && (Li = requestAnimationFrame(Ai));
  }
  function Lo() {
    o("app").classList.toggle("wxMotion", Co()), !Li && v && (Li = requestAnimationFrame(Ai));
  }
  let Ns = [];
  const aa = 36e5, Ml = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function e() {
    const t = /* @__PURE__ */ new Date(), r = (T, B) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + T, B), s = [], p = [], g = [...Array(6)].map((T, B) => {
      const j = r(B, 6), ne = r(B, 18), he = r(B + 1, 6), oe = Ns.find((Be) => Nt(new Date(Be.datetime)) === Nt(j)), te = (Be, et, Oe) => {
        const De = s.filter((vt) => vt.t >= +Be && vt.t < +et);
        if (De.length) {
          const vt = {};
          return De.forEach((je) => {
            vt[je.c] = (vt[je.c] || 0) + (Ml.has(je.c) ? 2 : 1);
          }), Object.entries(vt).sort((je, wt) => wt[1] - je[1])[0][0];
        }
        const Se = p.find((vt) => {
          const je = +new Date(vt.datetime);
          return je >= +Be - 3 * aa && je < +et && (vt.is_daytime == null || !!vt.is_daytime == !Oe);
        });
        if (Se) return Se.condition;
        const ht = (oe == null ? void 0 : oe.condition) || "cloudy";
        return Oe && ht === "sunny" ? "clear-night" : ht;
      };
      return { start: +j, end: +he, day: te(j, ne, !1), night: te(ne, he, !0), hi: Number(oe == null ? void 0 : oe.temperature), lo: Number(oe == null ? void 0 : oe.templow) };
    });
    return { days: g, hours: s, start: g[0].start, end: g[5].end };
  }
  const a = (t, r) => {
    const s = t.days.findIndex((g) => r < g.end);
    if (s < 0) return 1;
    const p = t.days[s];
    return Math.max(0, (s + (r - p.start) / (p.end - p.start)) / 6);
  }, i = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, p = Math.floor(s), g = t.days[p];
    return g.start + (s - p) * (g.end - g.start);
  };
  function d(t, r) {
    const s = Math.max(0, t.days.findIndex((ne) => r < ne.end)), p = t.days[s], g = (r - p.start) / (p.end - p.start) >= 0.5;
    let T = g ? p.night : p.day, B = NaN;
    const j = t.hours;
    if (j.length && r >= j[0].t - aa && r <= j[j.length - 1].t + aa) {
      let ne = j.findIndex((te) => te.t > r);
      ne < 0 && (ne = j.length);
      const he = j[Math.max(0, ne - 1)], oe = j[Math.min(j.length - 1, ne)];
      T = he.c || T, B = oe.t > he.t ? he.temp + (oe.temp - he.temp) * Math.max(0, Math.min(1, (r - he.t) / (oe.t - he.t))) : he.temp;
    }
    if (!Number.isFinite(B)) {
      const ne = [];
      if (t.days.forEach((he) => {
        Number.isFinite(he.lo) && ne.push([he.start - aa, he.lo]), Number.isFinite(he.hi) && ne.push([he.start + 9 * aa, he.hi]);
      }), ne.length) {
        B = r <= ne[0][0] ? ne[0][1] : ne[ne.length - 1][1];
        for (let he = 1; he < ne.length; he++) if (r <= ne[he][0] && r > ne[he - 1][0]) {
          const [oe, te] = ne[he - 1], [Be, et] = ne[he];
          B = te + (et - te) * (1 - Math.cos(Math.PI * (r - oe) / (Be - oe))) / 2;
          break;
        }
      }
    }
    return { cond: g && T === "sunny" ? "clear-night" : T, temp: B, night: g, day: p };
  }
  const u = (t) => Nt(new Date(t)) === Nt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), m = /* @__PURE__ */ new Map(), f = 900, b = 700;
  let M = null;
  const D = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    H(r.target.parentElement), r.target.closest("#wxDialog") && Yt();
  })) : null;
  function H(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const p = e(), g = p.days.flatMap((te) => [{ cond: te.day, night: !1 }, { cond: te.night, night: !0 }]), T = g.map((te) => te.cond).join(), B = br(), j = Co(), ne = Da(), he = Number(Nt(new Date(p.start)).replace(/\D/g, "")) % 9973;
    let oe = !1;
    s.forEach((te) => {
      var vt;
      const Be = te.clientWidth, et = te.clientHeight;
      if (!Be || !et) return;
      const Oe = te.dataset.wxStrip;
      let De = m.get(Oe);
      De ? De.sig !== T && (De.prev = De.segs, De.sig = T, De.segs = g, De.t0 = r, De.dur = b) : m.set(Oe, De = { sig: T, segs: g, prev: null, t0: r, dur: f });
      const Se = j || ne ? Math.min(1, Math.max(0, (r - De.t0) / De.dur)) : 1;
      Se < 1 && (oe = !0);
      const ht = { width: Be, height: et, colors: B.colors, clock: r, ambient: j, seed: he, reveal: ne ? Se : 1 - Math.pow(1 - Se, 3), prev: Se < 1 ? De.prev : null, reduce: ne };
      if (Ga === "smooth") {
        const je = Math.min(2, window.devicePixelRatio || 1), wt = Math.round(Be * je), _t = Math.round(et * je);
        te.width !== wt && (te.width = wt), te.height !== _t && (te.height = _t);
        const st = te.getContext("2d");
        if (!st) return;
        st.setTransform(je, 0, 0, je, 0, 0), du(st, g, ht);
      } else {
        const je = lu(g, { ...ht, px: 2, oneBit: Ga === "onebit", ink: B.ink, paper: B.paper });
        te.width !== je.w && (te.width = je.w), te.height !== je.h && (te.height = je.h), (vt = te.getContext("2d")) == null || vt.putImageData(new ImageData(je.data, je.w, je.h), 0, 0);
      }
    }), oe && Lo();
  }
  function O() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = xa.weather, s = r && (oa == null ? void 0 : oa[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Xr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", To(t);
      return;
    }
    const p = s.attributes || {}, g = p.temperature_unit || "°", T = (st) => Number.isFinite(Number(st)) ? Math.round(Number(st)) + "°" : "—", B = (p.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", j = vr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), ne = Nt(/* @__PURE__ */ new Date()), he = Ns.slice(0, 7), oe = he.find((st) => Nt(new Date(st.datetime)) === ne) || null, te = he.filter((st) => Nt(new Date(st.datetime)) >= ne).slice(0, 6), Be = /* @__PURE__ */ new Date(), et = Nt(new Date(Be.getFullYear(), Be.getMonth(), Be.getDate() + 1)), Oe = oe ? "H " + T(oe.temperature) + "&ensp; L " + T(oe.templow) : "", De = (st) => {
      const at = Nt(new Date(st.datetime));
      return at === ne ? "Today" : at === et ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(st.datetime));
    }, Se = Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : "—", ht = (st) => {
      const at = new Date(st.datetime);
      return Math.round((new Date(at.getFullYear(), at.getMonth(), at.getDate()) - new Date(Be.getFullYear(), Be.getMonth(), Be.getDate())) / 864e5);
    }, vt = (st) => (vr[st] || st || "").toLowerCase(), je = (st, at) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ht(st) + '" aria-label="' + He(De(st) + ": " + vt(st.condition) + ", " + T(st.temperature) + " / " + T(st.templow) + ". Open the forecast") + '">' + Xr(st.condition, !1, !1, Ga, "day" + at) + '<div><div class="activityRowName">' + He(De(st)) + '</div><div class="activityRowMeta">' + T(st.temperature) + " / " + T(st.templow) + "</div></div></div>", wt = () => '<div class="wxStrip"><div class="wxStripDays">' + e().days.map((at, ca) => {
      const Zt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(at.start)) + ": " + vt(at.day) + (vt(at.day) === vt(at.night) ? " all day and night" : ", then " + vt(at.night) + " overnight") + (Number.isFinite(at.hi) ? ". High " + T(at.hi) : "") + (Number.isFinite(at.lo) ? ", low " + T(at.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ca + '" aria-label="' + He(Zt) + '"><span class="wxDayName">' + He(u(at.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(at.hi) + '</span><span class="wxLow">' + T(at.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + He("Now in " + B + ": " + Se + "°, " + vt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Xr(s.state, !0, !0, Ga, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(Se)) + '</span><span class="wxUnit">' + He(g) + '</span></div><div class="wxPlace">' + He(B) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(j) + "</div>" + (Oe ? '<div class="wxRange">' + Oe + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (te.length ? yl === "strip" ? wt() : '<div class="activityRows wxDays">' + te.map(je).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", To(t);
    const _t = t.querySelector("canvas[data-wx-strip]");
    M && M !== _t && (D == null || D.unobserve(M)), M = _t, _t && (D == null || D.observe(_t), H(t)), Lo(), ya();
  }
  const pe = o("weatherCard"), Te = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const p = /* @__PURE__ */ new Date();
      Ht(+new Date(p.getFullYear(), p.getMonth(), p.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && Ht(Date.now(), s);
  };
  pe.addEventListener("click", (t) => Te(t.target)), pe.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), Te(t.target));
  });
  const Le = o("wxDialog"), Q = o("wxGraph"), xe = o("wxGraphWrap");
  let q = Date.now(), le = null, K = !1, Ve = null;
  function Ht(t, r) {
    const s = e();
    le = r || null, q = Math.max(s.start, Math.min(s.end - aa, t)), m.delete("dialog"), $o.delete("scrub"), Le.classList.add("open"), Le.setAttribute("aria-hidden", "false"), ya(), D == null || D.observe(Le.querySelector("canvas[data-wx-strip]")), Q.focus({ preventScroll: !0 }), Lo();
  }
  function gt() {
    var t;
    Le.classList.remove("open"), Le.setAttribute("aria-hidden", "true"), D == null || D.unobserve(Le.querySelector("canvas[data-wx-strip]")), (t = le == null ? void 0 : le.focus) == null || t.call(le, { preventScroll: !0 }), le = null;
  }
  function ya() {
    if (!Le.classList.contains("open")) return;
    const t = e();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + He(u(r.start)) + "</span>").join(""), Yt(t), $e(t), H(Le);
  }
  function $e(t = e()) {
    const r = d(t, q), s = oa == null ? void 0 : oa[xa.weather], p = (s == null ? void 0 : s.attributes) || {}, g = p.temperature_unit || "°", T = Math.abs(q - Date.now()) < aa / 2, B = T && s ? s.state : r.cond, j = T && Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ne = vr[B] || (B ? B.charAt(0).toUpperCase() + B.slice(1) : "—"), he = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(q / aa) * aa)), oe = r.day, te = (Number.isFinite(oe.hi) ? "H " + Math.round(oe.hi) + "°" : "") + (Number.isFinite(oe.lo) ? "&ensp; L " + Math.round(oe.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Xr(B, !0, T, Ga, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(j)) + '</span><span class="wxUnit">' + He(g) + '</span></div><div class="wxPlace">' + He(he) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(ne) + "</div>" + (te ? '<div class="wxRange">' + te + "</div>" : "") + "</div>", To(o("wxDialogNow")), Q.setAttribute("aria-valuenow", String(Math.round((q - t.start) / aa))), Q.setAttribute("aria-valuetext", he + ", " + ne.toLowerCase() + ", " + j + "°"), Jo(t), Lo();
  }
  function Yt(t = e()) {
    const r = o("wxGraphLine"), s = xe.clientWidth, p = xe.clientHeight;
    if (!s || !p) return;
    const g = [];
    for (let Se = t.start; Se <= t.end; Se += aa) {
      const ht = d(t, Se).temp;
      Number.isFinite(ht) && g.push([a(t, Se) * s, ht]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + p), g.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', Ve = null, Jo(t);
      return;
    }
    const T = g.map((Se) => Se[1]), B = Math.min(...T), j = Math.max(...T), ne = Math.max(4, j - B), he = Ga !== "smooth", oe = (Se) => he ? Math.round(Se / 2) * 2 : Math.round(Se * 10) / 10;
    Ve = (Se) => p * 0.84 - (Se - B) / ne * p * 0.62;
    const te = br(), Be = Ga === "onebit" ? te.paper : "#ffffff", et = Ga === "onebit" ? te.ink : "rgba(0,0,0,.28)", Oe = "M" + g.map((Se) => oe(Se[0]) + " " + oe(Ve(Se[1]))).join(" L"), De = (Se, ht) => {
      const vt = g.find((je) => je[1] === Se);
      return '<text class="wxLineLabel" x="' + oe(Math.min(s - 14, Math.max(14, vt[0]))) + '" y="' + oe(Ve(Se) + (ht ? 18 : -10)) + '" fill="' + Be + '" stroke="' + et + '">' + Math.round(Se) + "°</text>";
    };
    r.setAttribute("shape-rendering", he ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Oe + '" fill="none" stroke="' + et + '" stroke-width="' + (he ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Oe + '" fill="none" stroke="' + Be + '" stroke-width="2" stroke-linejoin="round"/>' + De(j, !1) + De(B, !0) + '<g id="wxCursorMark"></g>', Jo(t);
  }
  function Jo(t = e()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = xe.clientWidth, p = xe.clientHeight, g = Ga !== "smooth", T = (Be) => g ? Math.round(Be / 2) * 2 : Be, B = T(a(t, q) * s), j = d(t, q).temp, ne = br(), he = Ga === "onebit" ? ne.paper : "#ffffff", oe = Ga === "onebit" ? ne.ink : "rgba(0,0,0,.28)", te = Ve && Number.isFinite(j) ? T(Ve(j)) : null;
    r.innerHTML = '<rect x="' + (B - 2) + '" y="0" width="4" height="' + p + '" fill="' + oe + '"/><rect x="' + (B - 1) + '" y="0" width="2" height="' + p + '" fill="' + he + '"/>' + (te == null ? "" : g ? '<rect x="' + (B - 5) + '" y="' + (te - 5) + '" width="10" height="10" fill="' + he + '" stroke="' + oe + '" stroke-width="2"/>' : '<circle cx="' + B + '" cy="' + te + '" r="6" fill="' + he + '" stroke="' + oe + '" stroke-width="2"/>');
  }
  const Sl = (t) => {
    const r = xe.getBoundingClientRect();
    r.width && (q = i(e(), (t - r.left) / r.width), $e());
  };
  Q.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      K = !0;
      try {
        Q.setPointerCapture(t.pointerId);
      } catch {
      }
      Sl(t.clientX);
    }
  }), Q.addEventListener("pointermove", (t) => {
    K && Sl(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => Q.addEventListener(t, () => {
    K = !1;
  })), Q.addEventListener("keydown", (t) => {
    const r = e(), s = { ArrowLeft: -aa, ArrowRight: aa, ArrowDown: -aa, ArrowUp: aa, PageUp: -24 * aa, PageDown: 24 * aa }[t.key];
    s ? (t.preventDefault(), q = Math.max(r.start, Math.min(r.end - aa, Math.round(q / aa) * aa + s)), $e(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), q = t.key === "Home" ? r.start : r.end - aa, $e(r));
  }), o("wxDialogClose").addEventListener("click", gt), Le.addEventListener("click", (t) => {
    t.target === Le && gt();
  }), Le.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), gt());
  }), O(), (cc = (lc = window.matchMedia) == null ? void 0 : (dc = lc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || cc.call(dc, "change", () => {
    Lo(), To(n);
  }), Lo();
  const ec = o("tvNav");
  l.fullscreenSupported || (ec.hidden = !0), ec.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (t) => {
    !Ie.workout.classList.contains("active") || er.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), vs.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(lt.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== lt.value && (lt.value = r, lt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, L, P, lt].forEach((t) => t.addEventListener("input", () => {
    const r = Ke[xt];
    r && (r.total = Number(_.value), r.work = Number(L.value), r.rest = Number(P.value)), Dt();
  })), V.addEventListener("click", ki), We.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", ki), vs.addEventListener("click", () => Cn(!Fa)), Ot(xt), pi(), ui(), $a(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), pr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    dt.history = [], dt.checkins = [], Ui = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ma(), So(), ui(), pi(), $a(), yn(), Vt("Stats reset");
  });
  const md = o("morningTime"), gd = o("eveningTime"), vd = o("checkinAutoOpen");
  md.value = Jn().morning, gd.value = Jn().evening, vd.classList.toggle("on", ft().checkinAutoOpen !== !1), [["morningTime", md], ["eveningTime", gd]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (Va(t, r.value), yn());
  })), vd.addEventListener("click", () => {
    const t = ft().checkinAutoOpen === !1;
    vd.classList.toggle("on", t), Va("checkinAutoOpen", t);
  }), setTimeout(Yi, 800);
  const tc = o("checkinNotify"), Cl = o("checkinNotifyTarget"), ac = o("checkinNotifyStatus"), Fp = ac.textContent;
  function nc() {
    const t = l.notifyServices(), r = t.filter((g) => g.startsWith("mobile_app_")), s = r.length ? r : t, p = (g) => g.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Cl.innerHTML = s.map((g) => '<option value="' + He(g) + '">' + He(p(g)) + "</option>").join(""), !ft().notifyTarget && s[0] && (ft().notifyTarget = s[0]), Cl.value = ft().notifyTarget || "";
  }
  function Tl() {
    const t = !!ft().notifyOn;
    tc.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = Jn();
    ac.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Fp;
  }
  async function bd() {
    const t = !!ft().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: ft().notifyTarget, times: Jn() } : null), !0;
    } catch {
      return Vt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  tc.addEventListener("click", async () => {
    const t = !ft().notifyOn;
    if (t && (nc(), !ft().notifyTarget)) {
      Vt("Install the Companion app on your phone first");
      return;
    }
    ft().notifyOn = t, Tl(), await bd() ? (Ma(), Vt(t ? "Check-in notifications on" : "Check-in notifications off")) : (ft().notifyOn = !t, Tl());
  }), Cl.addEventListener("change", () => {
    Va("notifyTarget", Cl.value), ft().notifyOn && bd();
  }), [md, gd].forEach((t) => t.addEventListener("change", () => {
    Tl(), ft().notifyOn && bd();
  })), nc(), Tl();
  let wd = null;
  function Op() {
    wd || (wd = setTimeout(() => {
      wd = null, $a();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, p;
      const r = !oa || oa[xa.weather] !== t[xa.weather] || ((s = oa["sun.sun"]) == null ? void 0 : s.state) !== ((p = t["sun.sun"]) == null ? void 0 : p.state);
      oa = t, vl(t), Ur(t), r && O(), Date.now() - gr > 60 * 60 * 1e3 && Yr(), Op();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (dt.history = t.history, So()), Array.isArray(t.history) && $a(), Array.isArray(t.checkins) && (dt.checkins = t.checkins.map(Ii), yn(), pi(), ui(), So(), $a()), t.profiles && !Ra.classList.contains("open") && !Mn)) {
        const r = Bo(t);
        Object.keys(Ke).forEach((s) => delete Ke[s]), Object.assign(Ke, r.profiles), dt.order = r.order, Ke[xt] || (xt = dt.order[0]), Hi(), Ot(xt);
      }
    },
    suspend() {
      v = !1;
    },
    resume() {
      v || (v = !0, wi || (wi = requestAnimationFrame(Hr)), wo || (wo = requestAnimationFrame(In)), Lo(), ur(n.querySelector(".tab.active"), !1));
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
}, Is = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, va = "made_up_", Di = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(va);
}, El = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Xd(n) {
  const l = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function hu(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let c = +l; c < +n; c += 10 * 60 * 1e3) o += Xd(new Date(c)) / 6;
  return o;
}
function mc(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +n - (96 - o) * 15 * 60 * 1e3;
    l.push([c, Xd(new Date(c))]);
  }
  return l;
}
function mu({ onChange: n }) {
  const l = {}, o = {}, c = (G, W, ue, ee) => {
    l[G] = { entity_id: G, state: ue, attributes: ee, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[G] = W;
  }, h = (G, W, ue) => {
    const ee = l[G], fe = W ?? ee.state;
    l[G] = { ...ee, state: fe, attributes: { ...ee.attributes, ...ue }, last_changed: fe === ee.state ? ee.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (G, W, ue, ee) => c("binary_sensor." + va + (G ? G + "_" : "") + El(W), G, ee ? "on" : "off", { friendly_name: W, device_class: ue });
  Object.entries(fu).forEach(([G, W]) => {
    if (W.temperature != null && c("sensor." + va + G + "_temperature", G, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + va + G + "_humidity", G, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + va + "robot", G, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + va + G, G, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [ue, ee, fe, J] = W.cover;
      c("cover." + va + G + "_" + El(ue), G, fe ? "open" : "closed", { friendly_name: ue, device_class: ee, current_position: fe, ...J != null ? { current_tilt_position: J } : {} });
    }
    if (W.humidifier && c("humidifier." + va + G, G, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + va + G + "_solar_power", G, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + va + G + "_solar_today", G, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + va + G + "_" + El(W.valve), G, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && v(G, W.door, "door", W.doorOpen), W.window && v(G, W.window, "window", !1), W.motion && v(G, W.motion, "motion", !1), W.plant) {
      const [ue, ee, fe, J, E] = W.plant, N = va + El(ue), re = (I, Ie, V, We, k) => c("sensor." + N + "_" + I, G, String(V), { friendly_name: Ie, device_class: k, state_class: "measurement", unit_of_measurement: We, plant_low: V < Is[I][0], plant_high: V > Is[I][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[I] });
      re("moisture", "Moisture", ee, "%", "moisture"), re("light", "Light", fe, "lx", "illuminance"), re("temperature", "Temperature", J, "°C", "temperature"), re("fertility", "Fertility", E, "µS/cm", "conductivity");
      const Ee = Object.entries({ moisture: ee, light: fe, temperature: J, fertility: E }).filter(([I, Ie]) => Ie < Is[I][0] || Ie > Is[I][1]).map(([I, Ie]) => I + (Ie < Is[I][0] ? " low" : " high"));
      c("plant." + N, G, Ee.length ? "problem" : "ok", { friendly_name: ue, moisture: ee, brightness: fe, temperature: J, conductivity: E, problem: Ee.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + va + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), c("sensor." + va + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let y = null;
  function R() {
    const G = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: Xd(G).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: hu(G).toFixed(1) });
    });
  }
  R();
  let ve = 0;
  function ie() {
    let G = !1;
    const W = ++ve % 10 === 0, ue = (J, E, N) => {
      h(J, E, N), G = !0;
    };
    Object.entries(w).forEach(([J, E]) => {
      const N = l[J].attributes.current_position, re = N < E ? Math.min(E, N + 10) : Math.max(E, N - 10);
      re === E && delete w[J], ue(J, re === E ? re === 0 ? "closed" : "open" : E > N ? "opening" : "closing", { current_position: re });
    }), Object.entries(A).forEach(([J, E]) => {
      const N = l[J].attributes.current_tilt_position, re = N < E ? Math.min(E, N + 25) : Math.max(E, N - 25);
      re === E && delete A[J], ue(J, null, { current_tilt_position: re });
    }), Object.keys(l).filter((J) => J.startsWith("climate.")).forEach((J) => {
      const E = l[J], N = E.attributes, re = N.current_temperature, Ee = (E.state === "heat" || E.state === "auto") && re < N.temperature - 0.05, I = (E.state === "cool" || E.state === "auto") && re > N.temperature + 0.05, Ie = E.state === "off" ? "off" : Ee ? "heating" : I ? "cooling" : "idle", V = W ? Math.round((re + (Ee ? 0.1 : I ? -0.1 : 0)) * 10) / 10 : re;
      (V !== re || Ie !== N.hvac_action) && ue(J, null, { current_temperature: V, hvac_action: Ie });
    }), Object.keys(l).filter((J) => J.startsWith("humidifier.")).forEach((J) => {
      const E = l[J], N = E.attributes, re = N.current_humidity, Ee = E.state === "on" && re < N.humidity, I = Ee && W ? re + 1 : re, Ie = E.state !== "on" ? "off" : Ee ? "humidifying" : "idle";
      if (I !== re || Ie !== N.action) {
        ue(J, null, { current_humidity: I, action: Ie });
        const V = "sensor." + va + o[J] + "_humidity";
        l[V] && ue(V, String(I));
      }
    });
    const ee = l["vacuum." + va + "robot"], fe = ee.attributes;
    ee.state === "cleaning" && W && ue(ee.entity_id, null, { battery_level: Math.max(5, fe.battery_level - 1) }), ee.state === "returning" && ue(ee.entity_id, "docked", {}), ee.state === "docked" && fe.battery_level < 100 && ue(ee.entity_id, null, { battery_level: Math.min(100, fe.battery_level + 2) }), y && Date.now() - y.at > 5e3 && (ue("alarm_control_panel." + va + "house", "armed_" + y.mode, {}), y = null), G && n();
  }
  const U = setInterval(ie, 1e3), $ = setInterval(() => {
    R(), n();
  }, 60 * 1e3);
  function ae(G, W, ue) {
    const ee = ue == null ? void 0 : ue.entity_id;
    if (!l[ee]) return !1;
    const fe = l[ee], J = fe.attributes, E = (N, re) => h(ee, N, re);
    if (G === "climate" && (W === "set_temperature" && E(null, { temperature: Math.max(J.min_temp, Math.min(J.max_temp, ue.temperature)) }), W === "set_hvac_mode" && E(ue.hvac_mode, ue.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && E(fe.state === "off" ? "heat" : "off", fe.state === "off" ? {} : { hvac_action: "off" })), G === "cover") {
      const N = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? ue.position : W === "toggle" ? J.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete w[ee], delete A[ee], E(J.current_position === 0 ? "closed" : "open")), N != null && N !== J.current_position && (w[ee] = N, E(N > J.current_position ? "opening" : "closing"));
      const re = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? ue.tilt_position : null;
      W === "stop_cover_tilt" && delete A[ee], re != null && J.current_tilt_position != null && re !== J.current_tilt_position && (A[ee] = re);
    }
    if (G === "humidifier" && (W === "set_humidity" && E(null, { humidity: Math.max(J.min_humidity, Math.min(J.max_humidity, ue.humidity)) }), W === "set_mode" && E(null, { mode: ue.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const N = W === "turn_on" || W === "toggle" && fe.state !== "on";
      E(N ? "on" : "off", { action: N ? "idle" : "off" });
    }
    if (G === "vacuum" && (W === "start" && E("cleaning", { rooms: ue.rooms || J.rooms }), W === "pause" && E("paused"), W === "return_to_base" && E("returning", { rooms: [] }), W === "locate" && E(null, { located: Date.now() }), W === "set_rooms" && E(null, { rooms: ue.rooms })), G === "valve") {
      const N = W === "open_valve" || W === "toggle" && fe.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && E(N ? "open" : "closed");
    }
    if (G === "alarm_control_panel") {
      W === "alarm_disarm" && (y = null, E("disarmed", { changed_by: "Matt" }));
      const N = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      N && (y = { mode: N, at: Date.now() }, E("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function Z(G) {
    const W = (G == null ? void 0 : G.states) || {}, ue = (G == null ? void 0 : G.entities) || {}, ee = (G == null ? void 0 : G.devices) || {}, fe = (L) => {
      var me;
      const P = ue[L];
      return P && (P.area_id || P.device_id && ((me = ee[P.device_id]) == null ? void 0 : me.area_id)) || null;
    }, J = (L) => {
      const P = ue[L];
      return W[L] && W[L].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, E = {};
    Object.keys(W).forEach((L) => {
      const P = fe(L);
      P && J(L) && (E[P] || (E[P] = [])).push(L);
    });
    const N = { ...W, ...l }, re = (L) => {
      var P, me;
      return (me = (P = N[L]) == null ? void 0 : P.attributes) == null ? void 0 : me.device_class;
    }, Ee = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], I = Object.keys(W).filter((L) => L.startsWith("vacuum.") && J(L)), Ie = Object.values((G == null ? void 0 : G.areas) || {}).filter((L) => !uu.has(L.area_id)).map((L) => {
      const P = L.area_id, me = E[P] || [], z = (Je) => me.filter((Tt) => Tt.startsWith(Je + ".")), ce = (Je) => z("sensor").filter((Tt) => re(Tt) === Je), ge = (Je) => Object.keys(l).filter((Tt) => o[Tt] === P && Je(Tt)), ye = (Je, Tt) => Je.length ? Je : ge(Tt), Xe = ye(ce("temperature"), (Je) => Je.endsWith(P + "_temperature")), lt = ye(ce("humidity"), (Je) => Je.endsWith(P + "_humidity")), Lt = ce("power").filter((Je) => /^(W|kW)$/.test(N[Je].attributes.unit_of_measurement || "")), ka = z("binary_sensor").filter((Je) => re(Je) === "moisture"), Ia = ye(z("plant"), (Je) => Je.startsWith("plant.")).map((Je) => ({ id: Je, readings: ge((Tt) => Tt.startsWith("sensor." + Je.split(".")[1] + "_")) })), mt = [...z("binary_sensor").filter((Je) => Ee.includes(re(Je))), ...ge((Je) => Je.startsWith("binary_sensor."))];
      return {
        id: P,
        name: L.name,
        icon: L.icon,
        readings: [...Xe.slice(0, 1), ...lt.slice(0, 1), ...ka],
        power: Lt.length ? Lt.reduce((Je, Tt) => Je + Number(N[Tt].state) * (N[Tt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: z("switch"),
        lights: z("light"),
        actions: [...z("light"), ...ye(z("climate"), (Je) => Je.startsWith("climate.")), ...ye(z("cover"), (Je) => Je.startsWith("cover.")), ...ye(z("humidifier"), (Je) => Je.startsWith("humidifier.")), ...ye(z("valve"), (Je) => Je.startsWith("valve.")), ...z("media_player"), ...z("vacuum"), ...I.length ? [] : ge((Je) => Je.startsWith("vacuum."))],
        solar: ge((Je) => Je.includes("_solar_")),
        plants: Ia,
        openings: mt,
        alerts: [...ka, ...mt].filter((Je) => {
          var Tt;
          return ((Tt = N[Je]) == null ? void 0 : Tt.state) === "on";
        })
      };
    }).filter((L) => L.readings.length || L.plugs.length || L.actions.length || L.solar.length || L.plants.length), V = Object.keys(W).find((L) => /^sensor\..*(p1_meter_power|grid_power)$/.test(L) && W[L].state !== "unavailable") || null, We = (L) => Object.keys(W).filter((P) => P.startsWith(L + ".") && J(P)), k = We("alarm_control_panel"), _ = I.length ? I : ["vacuum." + va + "robot"];
    return {
      states: N,
      rooms: Ie,
      grid: V,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (L) => l[L] ? o[L] : fe(L),
      vacuums: _,
      homeVacuums: _.filter((L) => !Ie.some((P) => P.actions.includes(L))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + va + "house"],
        locks: We("lock"),
        openings: [...Object.keys(l).filter((L) => L.startsWith("binary_sensor.")), "sensor." + va + "doorbell"]
      }
    };
  }
  return { model: Z, call: ae, stop() {
    clearInterval(U), clearInterval($);
  } };
}
const ai = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Vd = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, gu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), gc = {}, jn = (n, l, o) => {
  const c = n + l + o;
  return gc[c] || (gc[c] = gu(Vd(n).map((h, v) => h + (Vd(l)[v] - h) * o)));
}, vc = {}, ql = (n) => vc[n] || (vc[n] = Vd(n));
function vu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [jn(l.clear[0], l.cloudy[0], 0.12), jn(l.clear[1], l.cloudy[1], 0.12)], l.storm = [jn(l.rain[0], "#000000", 0.22), jn(l.rain[1], "#000000", 0.22)], l;
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
], ti = (n, l) => (bu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, fp = 1, hp = 2, mp = 3, gp = 4, as = 5, Vl = 6, Gd = 7, vp = 8, bc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), wu = (n, l, o) => {
  let c = !1;
  for (let h = 0, v = n.length - 1; h < n.length; v = h++) {
    const w = n[h], A = n[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function xu(n, l, o, c, { oneBit: h, ink: v, paper: w, snowInk: A }) {
  const y = new Uint8ClampedArray(o * c * 4), R = ql(v), ve = ql(w);
  for (let ie = 0; ie < c; ie++) for (let U = 0; U < o; U++) {
    const $ = ie * o + U, ae = l[$];
    if (n[$] == null) continue;
    let Z = ql(n[$]);
    if (h) {
      let G;
      ae === gp || ae === vp ? G = !0 : ae === as ? G = A : ae === Gd || ae === Vl ? G = !1 : G = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= ti(U, ie), (ae === fp || ae === hp || ae === mp || ae === Vl) && (U > 0 && l[$ - 1] !== ae || U < o - 1 && l[$ + 1] !== ae || ie > 0 && l[$ - o] !== ae || ie < c - 1 && l[$ + o] !== ae) && (G = !0), Z = G ? R : ve;
    }
    y[$ * 4] = Z[0], y[$ * 4 + 1] = Z[1], y[$ * 4 + 2] = Z[2], y[$ * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const yu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ku = (n) => Zl(n, !1).split("/")[0], kd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Mu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Tu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Lu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Au = [".##", "##.", ".#.", "#.."];
function bp(n, { width: l, height: o, colors: c, wave: h = 0.38, soft: v = 6, glow: w = 0.6, columns: A = 6 }) {
  const y = { ...nn, dawn: "#e5a77e", ...c }, R = vu(y), ve = l, ie = o, U = ve / A, $ = U / 2, ae = Math.PI * 2, Z = n.length ? n : [{ cond: "cloudy", night: !1 }], G = [...Array(A * 2)].map((fe, J) => {
    const E = Z[Math.min(J, Z.length - 1)], N = ku(E.cond), re = J % 2 === 1;
    return { cond: E.cond, k: N, night: re, sky: R[N][re ? 1 : 0], cover: yu[N] };
  }), W = (fe) => ie * (0.5 - h * Math.cos(ae * (fe / U - 0.25)));
  return { C: y, S: G, W: ve, H: ie, cw: U, sw: $, TAU: ae, yb: W, side: (fe, J, E) => {
    const N = (fe ? W(J) - E : E - W(J)) / Math.max(3, v * 1.4) + 0.5;
    return N <= 0 ? 0 : N >= 1 ? 1 : N;
  }, glowAt: (fe) => {
    const J = ((fe / U - 0.25) % 1 + 1) % 1, E = Math.max(0, Math.min(A - 1, Math.round(fe / U - 0.25))), N = Math.max(0, Math.min(A - 1, Math.round(fe / U - 0.75))), re = 1 - (G[2 * E].cover + G[2 * N + 1].cover) / 2, Ee = Math.sin(Math.PI * Math.min(1, Math.max(0, W(fe) / ie)));
    return { c: J < 0.5 ? y.dusk : y.dawn, a: w * (0.2 + 0.8 * re) * Ee * Ee };
  }, soft: v, tw: U * 0.3, sy: ie / 90 };
}
function wp(n, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: h, sw: v, side: w, C: A, TAU: y, sy: R, H: ve } = n, ie = l, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  h.forEach((Z, G) => {
    const W = kd(c * 977 + G * 131 + 7), ue = (G + 0.5) * v, ee = Z.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Z.k] : 0;
    for (let fe = 0; fe < ee; fe++) {
      const J = ue + (W() - 0.5) * v * 1.6, E = (6 + W() * 76) * R, N = W() < 0.35, re = 1.8 + W() * 1.6, Ee = w(!0, J, E) * (N ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * ie / 2600 + fe * 1.7 + G) : 1);
      Ee >= 0.03 && U.stars.push({ x: J, y: E, big: N, size: re, o: Ee });
    }
    if (!Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const fe = ue + (W() - 0.5) * v * 0.3, J = Math.min(15, v * 0.29);
      U.suns.push({ x: fe, y: 32 * R, rad: J, halo: J * 2.8 * (o ? 1 + 0.07 * Math.sin(y * ie / 3600 + G) : 1) });
    }
    if (Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const fe = Math.min(0.78, v * 0.55 / 34), J = ue - 23 * fe + (W() - 0.5) * v * 0.2;
      U.moons.push({ x: J + 23 * fe, y: (4 + (o ? 0.8 * Math.sin(y * ie / 5200 + G) : 0)) * R + 23 * fe, d: 46 * fe });
    }
  });
  const $ = Math.max(56, Math.min(100, ve * 0.45)), ae = Math.max(1, v / ($ * 2.4));
  return h.forEach((Z, G) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Z.k];
    if (!W) return;
    const ue = Z.k === "partly" ? 1 : Math.round(W * ae), ee = kd(c * 577 + G * 71 + 3), fe = (G + 0.5) * v, J = Z.k === "rain" || Z.k === "storm" || Z.night ? A.cloudNight : A.cloudDay, E = Z.night ? 0.82 : Z.k === "storm" ? 0.75 : 1;
    for (let N = 0; N < ue; N++) {
      const re = $ / 46 * (Z.k === "partly" ? 1 : 0.8 + ee() * 0.4), Ee = fe + (Z.k === "partly" ? v * 0.12 : ((N + 0.5) / ue - 0.5) * v * 0.95 + (ee() - 0.5) * v * 0.5 / ue), I = (Z.k === "partly" ? 40 : 6 + ee() * 26) * R, Ie = o ? 2.5 * Math.sin(y * ie / 9e3 + G * 1.3 + N * 2.1) : 0, V = o ? 0.9 * Math.sin(y * ie / 6100 + G + N) : 0;
      U.clouds.push({ x: Ee - 23 * re + Ie, y: I - 15.33 * re + V, w: 46 * re, h: 30.66 * re, fill: J, o: E * (ue > 1 && N === 0 ? 0.85 : 1) });
    }
  }), h.forEach((Z, G) => {
    const W = kd(c * 313 + G * 29 + 11), ue = (G + 0.5) * v, ee = Z.cond === "pouring" ? 16 : Z.cond === "rainy" || Z.cond === "hail" ? 9 : Z.cond === "lightning-rainy" ? 12 : Z.cond === "snowy-rainy" ? 5 : 0;
    for (let J = 0; J < ee; J++) {
      let E = ue + (W() - 0.5) * v * 1.05, N = 44 + W() * 36, re = 1;
      if (o) {
        const I = ((N - 44 + ie * 0.04) % 36 + 36) % 36;
        E -= 0.21 * (I - (N - 44)), N = 44 + I, re = Math.min(1, I / 6, (36 - I) / 6);
      }
      N *= R;
      const Ee = w(Z.night, E, N) * re;
      Ee >= 0.05 && U.drops.push({ x: E, y: N, o: Ee });
    }
    const fe = Z.cond === "snowy" ? 11 : Z.cond === "snowy-rainy" ? 6 : 0;
    for (let J = 0; J < fe; J++) {
      let E = ue + (W() - 0.5) * v * 1.05, N = 40 + W() * 44, re = 1;
      if (o) {
        const I = ((N - 40 + ie * 9e-3) % 44 + 44) % 44;
        N = 40 + I, E += 1.6 * Math.sin(y * ie / 2800 + J * 1.9 + G), re = Math.min(1, I / 6, (44 - I) / 6);
      }
      N *= R;
      const Ee = w(Z.night, E, N) * re;
      Ee >= 0.05 && U.flakes.push({ x: E, y: N, o: Ee });
    }
    if (Z.k === "fog") {
      const J = Z.night ? "#c8ccd6" : "#ffffff", E = Z.night ? 0.28 : 0.62, N = o ? 4 * Math.sin(y * ie / 8e3 + G) : 0;
      for (let re = 0; re < 4; re++) U.fogs.push({ x: ue - v * 0.75 + re % 2 * v * 0.18 + (re % 2 ? N : -N), y: (30 + re * 13) * R, w: v * 1.3, c: J, a: E });
    }
    if (Z.k === "storm") {
      const J = (ie / 3400 + G * 0.37) % 1;
      U.bolts.push({ x: ue + (W() - 0.5) * v * 0.3 - 5, y: 36 * R, o: o && !(J < 0.05 || J > 0.09 && J < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function _u(n, l, o, c, h, v, w, A) {
  const { S: y, C: R, cw: ve, yb: ie, glowAt: U, soft: $, tw: ae, sy: Z } = n, G = new Array(o * c), W = new Uint8Array(o * c), ue = new Uint8Array(o * c), ee = (k, _, L, P, me) => {
    L == null || k < 0 || _ < 0 || k >= o || _ >= c || (P >= 1 || P > ti(k + 5, _ + 3)) && (G[_ * o + k] = L, W[_ * o + k] = me);
  }, fe = (k, _, L, P) => {
    for (let me = Math.max(0, Math.floor(_ - L) - 1); me <= Math.min(c - 1, _ + L + 1); me++) for (let z = Math.max(0, Math.floor(k - L) - 1); z <= Math.min(o - 1, k + L + 1); z++) P(z, me, z + 0.5 - k, me + 0.5 - _);
  }, J = (k, _, L) => {
    for (let me = 0; me < k.length - 1; me++) {
      const z = (me + _) * ve;
      if (L < z - ae / 2) return [k[me], k[me], 0];
      if (L <= z + ae / 2) return [k[me], k[me + 1], (L - z + ae / 2) / ae];
    }
    const P = k[k.length - 1];
    return [P, P, 0];
  }, E = y.filter((k) => !k.night).map((k) => k.sky), N = y.filter((k) => k.night).map((k) => k.sky), re = $ / v, Ee = 16 * Z / v;
  for (let k = 0; k < o; k++) {
    const _ = (k + 0.5) * h, L = ie(_) / v, P = J(E, 0.75, _), me = J(N, 1.25, _), z = U(_);
    for (let ce = 0; ce < c; ce++) {
      const ge = ti(k, ce), ye = ce + 0.5 - L, Xe = (re > 0.01 ? ai(0.5 + ye / re) : ye > 0 ? 1 : 0) > ge;
      let lt = Xe ? P[2] > ge ? P[1] : P[0] : me[2] > ge ? me[1] : me[0];
      (Xe ? ai(((ce + 0.5) / c - 0.45) / 0.55) * 0.7 : ai(1 - (ce + 0.5) / (c * 0.55)) * 0.7) > ti(k + 2, ce + 5) && (lt = Xe ? jn(lt, "#ffffff", 0.18) : jn(lt, "#000000", 0.25)), Xe && ye >= 0 && ye < Ee && z.a * 1.3 * (1 - ye / Ee) > ti(k + 6, ce + 1) && (lt = z.c), G[ce * o + k] = lt, ue[ce * o + k] = Xe ? 0 : 1;
    }
  }
  const I = jn(R.sun, "#ffffff", 0.55), Ie = jn(R.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const _ = Math.floor(k.x / h), L = Math.floor(k.y / v);
    if (_ < 0 || L < 0 || _ >= o || L >= c || !ue[L * o + _] || k.o < 0.15) return;
    const P = k.o > 0.45 ? R.star : jn(R.star, G[L * o + _], 0.5), me = k.big && k.o > 0.6 ? Math.floor(k.size / h) : 0;
    ee(_, L, P, 1, Gd);
    for (let z = 1; z <= me; z++) [[_ - z, L], [_ + z, L], [_, L - z], [_, L + z]].forEach((ce) => {
      ce[0] >= 0 && ce[1] >= 0 && ce[0] < o && ce[1] < c && ue[ce[1] * o + ce[0]] && ee(ce[0], ce[1], P, 1, Gd);
    });
  }), l.suns.forEach((k) => {
    const _ = Math.max(1.5, k.rad / h), L = k.x / h, P = k.y / v, me = k.halo / h * 0.85;
    if (fe(L, P, me, (z, ce, ge, ye) => {
      const Xe = Math.sqrt(ge * ge + ye * ye);
      Xe > _ && Xe < me && !ue[ce * o + z] && ee(z, ce, I, 0.3 * (1 - (Xe - _) / (me - _)), 0);
    }), A) {
      const z = Math.floor(w / 500) % 2, ce = Math.max(1, _ * 0.3);
      for (let ge = 0; ge < 8; ge++) if (ge % 2 === z) for (let ye = _ + 1.2; ye < _ + 1.2 + ce; ye += 0.7) ee(Math.floor(L + Math.cos(ge * Math.PI / 4) * ye), Math.floor(P + Math.sin(ge * Math.PI / 4) * ye), R.sun, 1, vp);
    }
    fe(L, P, _, (z, ce, ge, ye) => {
      ge * ge + ye * ye <= _ * _ && ee(z, ce, ai(((ye / _ + 1) / 2 - 0.6) / 0.4) > ti(z, ce) ? R.sunEdge : R.sun, 1, fp);
    });
  }), l.moons.forEach((k) => {
    const _ = Math.max(1.5, k.d * 0.37 / h), L = k.x / h, P = k.y / v, me = L + 0.547 * _, z = P - 0.503 * _, ce = 0.82 * _;
    fe(L, P, _, (ge, ye, Xe, lt) => {
      if (Xe * Xe + lt * lt > _ * _) return;
      const Lt = ge + 0.5 - me, ka = ye + 0.5 - z;
      Lt * Lt + ka * ka > ce * ce && ee(ge, ye, ai((lt + _) / (2 * _) * 1.1 - 0.1) > ti(ge, ye) ? R.moon : Ie, 1, hp);
    });
  }), l.clouds.forEach((k) => {
    const _ = Math.max(3, k.w / h), L = _ * 0.6665, P = k.x / h, me = k.y / v, z = jn(k.fill, "#000000", 0.16);
    for (let ce = Math.max(0, Math.floor(me) - 1); ce <= Math.min(c - 1, me + L + 1); ce++) for (let ge = Math.max(0, Math.floor(P) - 1); ge <= Math.min(o - 1, P + _ + 1); ge++) {
      const ye = (ge + 0.5 - P) / _, Xe = (ce + 0.5 - me) / _;
      bc(ye, Xe) && ee(ge, ce, !bc(ye, Xe + 1 / _) || ai((Xe - 0.42) / 0.25) * 0.8 > ti(ge, ce) ? z : k.fill, k.o, mp);
    }
  }), l.fogs.forEach((k) => {
    const _ = Math.floor(k.y / v), L = Math.max(_, Math.floor((k.y + 6 * Z) / v) - 1), P = Math.floor(k.x / h), me = Math.floor((k.x + k.w) / h);
    for (let z = _; z <= L; z++) for (let ce = P; ce <= me; ce++) {
      const ge = (ce - P) / Math.max(1, me - P);
      ee(ce, z, k.c, k.a * (ge < 0.25 ? ge / 0.25 : ge > 0.75 ? (1 - ge) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const _ = k.x / h, L = Math.floor(k.y / v);
    for (let P = 0; P < V; P++) ee(Math.floor(_ - 0.208 * P * v / h), L + P, R.rain, k.o, gp);
  });
  const We = Math.max(0, Math.round(4.4 / h / 2.6));
  return l.flakes.forEach((k) => {
    const _ = Math.floor(k.x / h), L = Math.floor(k.y / v);
    ee(_, L, R.snow, k.o, as);
    for (let P = 1; P <= We; P++)
      ee(_ - P, L, R.snow, k.o, as), ee(_ + P, L, R.snow, k.o, as), ee(_, L - P, R.snow, k.o, as), ee(_, L + P, R.snow, k.o, as);
  }), l.bolts.forEach((k) => {
    if (h <= 3.5)
      for (let _ = Math.floor(k.y / v); _ <= (k.y + 24) / v; _++) for (let L = Math.floor(k.x / h); L <= (k.x + 11) / h; L++)
        wu(Lu, (L + 0.5) * h - k.x, (_ + 0.5) * v - k.y) && ee(L, _, R.sun, 1, Vl);
    else {
      const _ = Math.round(k.x / h), L = Math.round(k.y / v);
      Au.forEach((P, me) => P.split("").forEach((z, ce) => {
        z === "#" && ee(_ + ce, L + me, R.sun, 1, Vl);
      }));
    }
  }), { col: G, ids: W };
}
function Eu(n, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), h = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / h, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, y = ($) => {
    const ae = bp($, l);
    return _u(ae, wp(ae, { clock: A, ambient: l.ambient, seed: l.seed }), c, h, v, w, A, l.ambient);
  }, R = y(n), ve = l.reveal == null ? 1 : ai(l.reveal);
  let ie = R.col, U = R.ids;
  if (ve < 1) {
    const $ = l.prev ? y(l.prev) : null, ae = ve * (c + 12);
    ie = new Array(c * h), U = new Uint8Array(c * h);
    for (let Z = 0; Z < c * h; Z++) {
      const G = Z % c, W = Z / c | 0;
      (l.reduce ? ve : ai((ae - G) / 12)) > ti(G, W) ? (ie[Z] = R.col[Z], U[Z] = R.ids[Z]) : $ ? (ie[Z] = $.col[Z], U[Z] = $.ids[Z]) : (ie[Z] = null, U[Z] = 255);
    }
  }
  return xu(ie, U, c, h, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function Du(n, l, o) {
  const c = o.width, h = o.height, v = o.reveal == null ? 1 : ai(o.reveal), w = (U, $) => {
    const ae = bp($, o);
    Bu(U, ae, wp(ae, o));
  };
  if (n.clearRect(0, 0, c, h), v >= 1) {
    w(n, l);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = v, w(n, l), n.restore();
    return;
  }
  const A = n.canvas, y = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (y.width !== A.width || y.height !== A.height) && (y.width = A.width, y.height = A.height);
  const R = y.getContext("2d");
  R.setTransform(n.getTransform()), R.clearRect(0, 0, c, h), w(R, l);
  const ve = v * (c + 64) - 64, ie = R.createLinearGradient(ve, 0, ve + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ie, R.fillRect(0, 0, c, h), R.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function Bu(n, l, o) {
  const { W: c, H: h, S: v, C: w, cw: A, yb: y, glowAt: R, soft: ve, tw: ie, sy: U } = l, $ = n.getTransform().a || 1, ae = (V) => {
    n.shadowColor = V ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = V ? 4 * $ : 0, n.shadowOffsetY = V ? 1.5 * $ : 0;
  }, Z = (V, We) => {
    const k = ql(V);
    return "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + Math.max(0, Math.min(1, We)).toFixed(3) + ")";
  }, G = (V, We) => {
    const k = n.createLinearGradient(0, 0, c, 0);
    k.addColorStop(0, V[0]);
    for (let _ = 0; _ < V.length - 1; _++) {
      const L = (_ + We) * A, P = (L - ie / 2) / c, me = (L + ie / 2) / c;
      P > 0 && P < 1 && k.addColorStop(P, V[_]), me > 0 && me < 1 && k.addColorStop(me, V[_ + 1]);
    }
    return k.addColorStop(1, V[V.length - 1]), k;
  }, W = Math.max(24, Math.ceil(c / 4)), ue = (V, We) => {
    n.beginPath();
    for (let k = 0; k <= W; k++) {
      const _ = c * k / W, L = V == null ? 0 : y(_) + V;
      k ? n.lineTo(_, L) : n.moveTo(_, L);
    }
    for (let k = W; k >= 0; k--) {
      const _ = c * k / W;
      n.lineTo(_, y(_) + We);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(v.filter((V) => !V.night).map((V) => V.sky), 0.75), n.fillRect(0, 0, c, h);
  const ee = n.createLinearGradient(0, 0, c, 0);
  for (let V = 0; V <= 64; V++) {
    const We = R(c * V / 64);
    ee.addColorStop(V / 64, Z(We.c, Math.min(1, We.a)));
  }
  n.fillStyle = ee;
  for (let V = 0; V < 8; V++)
    n.globalAlpha = 1 - V / 8, ue(V * 2 * U, (V + 1) * 2 * U);
  n.fillStyle = G(v.filter((V) => V.night).map((V) => V.sky), 1.25);
  const fe = Math.max(0.5, ve), J = 6;
  n.globalAlpha = 1, ue(null, -fe);
  for (let V = 0; V < J; V++)
    n.globalAlpha = 1 - (V + 0.5) / J, ue(-fe + 2 * fe * V / J, -fe + 2 * fe * (V + 1) / J);
  n.globalAlpha = 1;
  const E = new Path2D(Cu), N = new Path2D(Su), re = new Path2D(Mu), Ee = new Path2D(Tu);
  n.fillStyle = w.star, o.stars.forEach((V) => {
    n.globalAlpha = V.o, V.big ? (n.save(), n.translate(V.x, V.y), n.scale(V.size, V.size), n.fill(E), n.restore()) : (n.beginPath(), n.arc(V.x, V.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const I = jn(w.sun, "#ffffff", 0.55);
  o.suns.forEach((V) => {
    const We = n.createRadialGradient(V.x, V.y, 0, V.x, V.y, V.halo);
    We.addColorStop(0, Z(I, 0.42)), We.addColorStop(0.7, Z(I, 0)), n.fillStyle = We, n.beginPath(), n.arc(V.x, V.y, V.halo, 0, Math.PI * 2), n.fill();
    const k = n.createLinearGradient(0, V.y - V.rad, 0, V.y + V.rad);
    k.addColorStop(0.6, w.sun), k.addColorStop(1, w.sunEdge), n.fillStyle = k, ae(!0), n.beginPath(), n.arc(V.x, V.y, V.rad, 0, Math.PI * 2), n.fill(), ae(!1);
  });
  const Ie = jn(w.moon, "#ffffff", 0.6);
  o.moons.forEach((V) => {
    n.save(), n.translate(V.x - V.d / 2, V.y - V.d / 2), n.scale(V.d / 46, V.d / 46);
    const We = n.createLinearGradient(0, 6, 0, 40);
    We.addColorStop(0, Ie), We.addColorStop(1, w.moon), n.fillStyle = We, ae(!0), n.fill(N), ae(!1), n.restore();
  }), o.clouds.forEach((V) => {
    n.save(), n.globalAlpha = V.o, n.translate(V.x, V.y), n.scale(V.w / 46, V.h / 30.66), n.translate(-4, -9.67), n.fillStyle = V.fill, ae(!0), n.fill(re), ae(!1), n.restore();
  }), o.fogs.forEach((V) => {
    const We = n.createLinearGradient(V.x, 0, V.x + V.w, 0);
    We.addColorStop(0, Z(V.c, 0)), We.addColorStop(0.25, Z(V.c, V.a)), We.addColorStop(0.75, Z(V.c, V.a)), We.addColorStop(1, Z(V.c, 0)), n.fillStyle = We, n.fillRect(V.x, V.y, V.w, 6 * U);
  }), n.fillStyle = w.rain, o.drops.forEach((V) => {
    n.save(), n.globalAlpha = V.o, n.translate(V.x, V.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((V) => {
    n.globalAlpha = V.o, n.beginPath(), n.arc(V.x, V.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((V) => {
    n.save(), n.globalAlpha = V.o, n.translate(V.x, V.y), n.fill(Ee), n.restore();
  }), n.restore();
}
const Ru = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", es = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Dl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Md = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Nu = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', qn = (n, l, o, c) => {
  const h = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Nu(n, 2400) + ' d="M' + n + " " + (l - o) + "L" + (n + h) + " " + (l - h) + "L" + (n + o) + " " + l + "L" + (n + h) + " " + (l + h) + "L" + n + " " + (l + o) + "L" + (n - h) + " " + (l + h) + "L" + (n - o) + " " + l + "L" + (n - h) + " " + (l - h) + 'Z"/>';
}, wc = ([n, l, o], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Pu = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Iu = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Hu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Fu(n, l, o, c) {
  const h = (v) => '<g filter="url(#' + c + '-sh)">' + v + "</g>";
  return n === "clear" ? l ? h(wc(o ? Dl.l : Dl.s, c)) + (o ? qn(70, 20, 5.83, 1) + qn(78.33, 41.67, 3.75, 0.8) + qn(60, 71.67, 3.33, 0.6) : qn(42, 12, 3.5, 1) + qn(47, 25, 2.25, 0.8) + qn(36, 43, 2, 0.6)) : h(Pu(c, o)) : n === "partly" ? h(l ? wc(o ? Dl.lp : Dl.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + h(Md(o ? es.lp : es.sp, l ? "wbCloudLight" : "wbBright")) + (l ? o ? qn(73.33, 16.67, 4.17, 0.9) : qn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? h(Md(o ? es.lc : es.s, l ? "wbCloudLight" : "wbBright")) + (l ? o ? qn(15, 15, 3.75, 0.8) + qn(76.67, 13.33, 2.92, 0.6) : qn(9, 9, 2.25, 0.8) + qn(46, 8, 1.75, 0.6) : "") : h(Md(o ? es.lr : es.s, "wbCloudLight")) + (n === "rain" ? Iu(o) : Hu(o));
}
const Ou = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Wu(n, l, o, c) {
  let h = Ru(n);
  const v = h === "night" || !!o;
  h === "night" && (h = "clear");
  const w = l ? 90 : 54;
  return { k: h, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Ou(c, l) + Fu(h, v, l, c) + "</svg>" };
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
], Bl = (n, l) => (qu[l % 8 * 8 + n % 8] + 0.5) / 64, lo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ua = (n, l, o) => [Math.round(n[0] + (l[0] - n[0]) * o), Math.round(n[1] + (l[1] - n[1]) * o), Math.round(n[2] + (l[2] - n[2]) * o)], Hs = (n) => n < 0 ? 0 : n > 1 ? 1 : n, xc = (n, l) => {
  let o = n * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, kr = [255, 255, 255], Qa = lo("#26221e"), yc = lo("#0288d1"), ju = lo("#01579b"), Sd = lo(nn.cloudDay), Cd = lo(nn.cloudNight), Rl = lo(nn.dusk), Td = lo(nn.sunEdge), zu = lo(nn.sun), Vu = 10, kc = 0.3, ni = 56, xp = 21;
function Gu(n) {
  const l = Array.from({ length: xp }, () => new Array(ni).fill(void 0)), o = (w, A, y) => {
    l[A][w] = y;
  }, c = Ua(Rl, Qa, 0.35), h = Ua(Qa, kr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? ni - 2 : ni - 1;
    for (let y = 6 - w; y <= A; y++) o(y, w, w < 2 ? c : w === 6 ? h : Qa);
  }
  const v = [Rl, Td, Cd, lo(nn.skyRainDay), Ua(Rl, Qa, 0.2), Ua(n, Qa, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const y = 9 + A * 6;
    for (let R = 0; R < w; R++) {
      const ve = v[(A * 2 + R * 3) % v.length];
      for (let ie = y; ie < y + 5; ie++)
        o(ie, 7 + R * 2, Ua(ve, Qa, 0.12)), o(ie, 8 + R * 2, R === w - 1 ? Ua(ve, kr, 0.3) : ve);
      o(y + 5, 7 + R * 2, Qa), o(y + 5, 8 + R * 2, Qa);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, Qa);
  o(5, 13, Td);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) o(A, w, A === 51 ? Cd : Sd);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, Qa), o(w, 9, Ua(Qa, Sd, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? Cd : Sd);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) o(A, w, w === 18 ? Qa : w === 16 ? Td : Rl);
  for (let w = 15; w <= 19; w++) o(44, w, Qa);
  return o(44, 20, zu), l;
}
function Uu(n, l, o, c) {
  const h = Math.max(1, Math.round(n)), v = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(h * v * 4), A = lo(c.skyClearDay), y = lo(c.skyFogDay), R = Gu(A), ve = Math.round(v * 0.55), ie = Hs(1 - Math.log(o / kc) / Math.log(Vu / kc)), U = Ua(A, y, ie), $ = (W) => Hs((W - 0.1) / 0.9), ae = Hs((1 - Math.exp(-2 / o) - 0.2) / 0.8), Z = Math.round(h / 2 - ni / 2), G = ve + 3;
  for (let W = 0; W < v; W++) {
    const ue = G - 1 - W, ee = W - G;
    for (let fe = 0; fe < h; fe++) {
      const J = fe - Z;
      let E, N;
      const re = ue >= 0 && ue < xp && J >= 0 && J < ni ? R[ue][J] : void 0;
      if (re)
        E = re, N = ae;
      else if (ue >= 0 && ue <= 1 && J >= 4 - ue && J <= 5 - ue)
        E = Ua(kr, yc, 0.15), N = ae;
      else if (W < ve) {
        const Ie = Hs(((W + 0.5) / ve - 0.15) / 0.85) * 3, V = Math.min(3, Math.floor(Ie + Bl(fe + 2, W + 5)));
        E = Ua(U, kr, V * 0.1), N = ie * 0.95;
      } else {
        const Ie = (W - ve + 0.5) / (v - ve), V = Math.min(1.5, 6e-3 / (Ie * Ie)), We = Hs(Ie * 1.4) * 3, k = Math.min(3, Math.floor(We + Bl(fe + 1, W + 6)));
        E = Ua(yc, ju, k / 3);
        const _ = 1 + Math.round(Ie * 7), L = Math.floor(fe / (_ * 3)), P = 0.06 + 0.16 * Ie, me = fe % (_ * 3) < _;
        me && xc(L, W) < P ? E = Ua(E, kr, 0.18 + 0.1 * (1 - Ie)) : me && Ie > 0.5 && xc(L, W - 1) < P && (E = Ua(E, Qa, 0.12)), N = $(1 - Math.exp(-V / o)), ee === 0 && J >= 3 && J <= 8 ? (E = Ua(E, kr, J < 6 ? 0.8 : 0.45), N = ae) : ee >= 0 && ee <= 2 && J >= ni && J < ni + 40 ? ((1 - (J - ni) / 40) * (ee === 1 ? 0.9 : 0.5) > Bl(fe, W + 3) && (E = Ua(E, kr, 0.5)), N = ae) : ee === 0 && J >= 6 && J < ni && (E = Ua(E, Qa, J % 2 === 0 ? 0.35 : 0.2), N = ae);
      }
      const Ee = N > Bl(fe, W) ? y : E, I = (W * h + fe) * 4;
      w[I] = Ee[0], w[I + 1] = Ee[1], w[I + 2] = Ee[2], w[I + 3] = 255;
    }
  }
  return { data: w, w: h, h: v };
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
function Ku(n, l) {
  const o = n ? Yu[String(n).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (v) => Math.abs(Math.log(v[2] / l)), h = o.reduce((v, w) => c(w) < c(v) ? w : v);
  return c(h) <= Math.log(Zu) ? { from: h[0], to: h[1], km: h[2] } : void 0;
}
const $u = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, Xu = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", so = 6e4, Ft = 36e5, Eo = 864e5, Ws = 1440, Ju = 6, Qu = 10 * so, Mc = 3, ef = 3, Nl = { day: [6, 22], waking: [7, 23], all: [0, 24] }, tf = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], af = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Sc = (n, l, o, c) => '<circle cx="' + n + '" cy="' + l + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((h) => {
  const v = Math.cos(h * Math.PI / 180), w = Math.sin(h * Math.PI / 180), A = o + 2, y = o + 2 + c;
  return "M" + (n + v * A).toFixed(2) + " " + (l + w * A).toFixed(2) + "L" + (n + v * y).toFixed(2) + " " + (l + w * y).toFixed(2);
}).join("") + '"/>', Qo = (n) => '<path d="' + af + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ei = (n) => '<path d="' + n + '"/>', Cc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function nf(n, l) {
  const o = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Cc : Sc(12, 12, 4, 2.5);
    case "clear-night":
      return Cc;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Sc(7.5, 7.5, 2.6, 1.4)) + Qo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Qo();
    case "fog":
      return ei("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Qo(o) + ei("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Qo(o) + ei("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Qo(o) + ei("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Qo(o) + ei("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Qo(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Qo(o) + ei("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Qo(o) + ei("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ei("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ei("M12 8v5M12 16h.01");
  }
}
const Ld = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + nf(n, l) + "</svg>", of = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), rf = 30 * so, sf = 7, lf = 3, Tc = 1, df = so, cf = 15 * so, pf = 5, ba = {
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
}, ff = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], hf = Object.keys(Ye.phases), Pl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, yp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Il = 100, Lc = "µg/m³", gf = "weather_alerts.air_quality_pollen", Gl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], vf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, bf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], wf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, xf = { daily: 1, hourly: 2 }, qe = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Pa = (n, l) => n.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), ns = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Ac = /* @__PURE__ */ new Map();
function yf(n) {
  let l = Ac.get(n);
  if (l === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), h = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", h.setAttribute("d", n), c.append(h), document.body.append(c);
    const v = h.getBBox();
    c.remove();
    const w = Math.max(v.width, v.height), A = w ? 26 * 24 / w : 0, y = A / 24;
    l = w ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * y).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * y).toFixed(2) + "px" : "", Ac.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : ns(n);
}
const kf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Kt = (n) => n != null && n !== "" && Number.isFinite(Number(n)), _c = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new WeakMap(), Mf = (n) => {
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
function pa(n, l, o) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const h = (l == null ? void 0 : l.number_format) === "none", v = { maximumFractionDigits: 2, ...o, ...h ? { useGrouping: !1 } : {} }, w = h ? "en-US" : Mf(l), A = JSON.stringify([w, v]);
  let y = _c.get(A);
  if (!y) {
    try {
      y = new Intl.NumberFormat(w, v);
    } catch {
      y = new Intl.NumberFormat(void 0, v);
    }
    _c.set(A, y);
  }
  return y.format(c);
}
const Jd = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function Sf(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Ad.has(n)) return Ad.get(n);
  const l = n.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return Ad.set(n, o), o;
}
const kp = (n) => {
  var l, o;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function Mp(n, l) {
  const o = JSON.stringify([n, l]);
  let c = Ec.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    Ec.set(o, c);
  }
  return c;
}
const Ao = (n, l) => Mp(Jd(l), { hour: "numeric", minute: "2-digit", hourCycle: Sf(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: kp(l) }).format(n), Dc = (n, l) => Mp(Jd(l), { weekday: "short", timeZone: kp(l) }).format(n), Cf = (n, l) => n.toLocaleDateString(Jd(l), { weekday: "narrow" }), ia = (n, l) => Kt(l) ? pa(Math.round(Number(l)), n.locale) + "°" : "–", os = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, ts = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), un = Math.PI / 180, Tf = 2440588, Lf = 2451545, Ul = un * 23.4397, Af = 149598e3, _f = -0.833 * un, Ef = 0.133 * un, Bc = 5 * so, Sp = (n) => n.getTime() / Eo - 0.5 + Tf - Lf, Cp = (n, l) => Math.atan2(Math.sin(n) * Math.cos(Ul) - Math.tan(l) * Math.sin(Ul), Math.cos(n)), Tp = (n, l) => Math.asin(Math.sin(l) * Math.cos(Ul) + Math.cos(l) * Math.sin(Ul) * Math.sin(n)), Df = (n, l) => un * (280.16 + 360.9856235 * n) - l, Bf = (n, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(n));
function Lp(n) {
  const l = un * (357.5291 + 0.98560028 * n), o = un * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + un * 102.9372 + Math.PI;
  return { ra: Cp(c, 0), dec: Tp(c, 0), dist: Af };
}
function Ap(n) {
  const l = un * (218.316 + 13.176396 * n), o = un * (134.963 + 13.064993 * n), c = un * (93.272 + 13.22935 * n), h = l + un * 6.289 * Math.sin(o), v = un * 5.128 * Math.sin(c);
  return { ra: Cp(h, v), dec: Tp(h, v), dist: 385001 - 20905 * Math.cos(o) };
}
const _p = (n, l, o, c) => {
  const h = Sp(l), v = n(h);
  return Bf(Df(h, un * -c) - v.ra, un * o, v.dec);
}, Qd = (n, l, o) => _p(Lp, n, l, o), Rf = (n, l, o) => _p(Ap, n, l, o);
function Ep(n, l, o, c) {
  const h = {};
  let v = o.getTime(), w = n(o) - l;
  for (let A = v + Bc; A <= c.getTime(); A += Bc) {
    const y = n(new Date(A)) - l;
    if (w < 0 != y < 0) {
      const R = new Date(v + (A - v) * w / (w - y));
      y > 0 ? h.rise ?? (h.rise = R) : h.set ?? (h.set = R);
    }
    v = A, w = y;
  }
  return h;
}
const Dp = (n) => {
  const l = os(n);
  return [l, new Date(l.getTime() + Eo)];
}, Nf = (n, l, o) => Ep((c) => Qd(c, l, o), _f, ...Dp(n)), Pf = (n, l, o) => Ep((c) => Rf(c, l, o), Ef, ...Dp(n));
function If(n) {
  const l = Sp(n), o = Lp(l), c = Ap(l), h = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), v = Math.atan2(o.dist * Math.sin(h), c.dist - o.dist * Math.cos(h)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Hf = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Yl = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Kt(l.latitude) && Kt(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function _d(n, l) {
  var R, ve, ie;
  const o = Yl(n), c = o ? Nf(l, o.lat, o.lon) : {}, h = (R = n == null ? void 0 : n.states) == null ? void 0 : R["sun.sun"], v = os(l).getTime(), w = (U) => {
    const $ = U ? new Date(U) : null;
    return $ && Number.isFinite($.getTime()) && os($).getTime() === v ? $ : null;
  }, A = w((ve = h == null ? void 0 : h.attributes) == null ? void 0 : ve.next_rising), y = w((ie = h == null ? void 0 : h.attributes) == null ? void 0 : ie.next_setting);
  return A && (c.rise = A), y && (c.set = y), c;
}
function Ff(n) {
  var c;
  const l = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Yl(n);
  return o ? Qd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Mr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", is = (n, l) => {
  var c;
  const o = (c = n.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, cn = (n, l, o) => {
  var c, h;
  for (const v of l) {
    const w = (c = n.states) == null ? void 0 : c[v];
    if (!Mr(w)) continue;
    const A = (h = w.attributes) == null ? void 0 : h[o];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, Of = (n, l) => l.map((o) => {
  var c;
  return (c = n.states) == null ? void 0 : c[o];
}).find(Mr), Wf = (n, l, o) => l.map((c) => {
  var h;
  return (h = n.states) == null ? void 0 : h[c];
}).find((c) => {
  var h;
  return Mr(c) && (((h = c.attributes) == null ? void 0 : h.supported_features) == null || Number(c.attributes.supported_features) & xf[o]);
});
function yr(n, l, o) {
  var v, w, A, y;
  const c = ((w = (v = n.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", h = (l == null ? void 0 : l.attributes) || {};
  switch (o) {
    case "precipitation":
      return h.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return h.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return h.wind_speed_unit || c + "/h";
    case "visibility":
      return h.visibility_unit || c;
    default:
      return h.temperature_unit || ((y = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : y.temperature) || "";
  }
}
function jl(n, l, o, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [h, ...v] = n.formatEntityAttributeValueToParts(l, o, c).map((w) => w.value);
      return { number: h, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: pa(c, n.locale), unit: yr(n, l, o) };
}
function qf(n, l, o, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const h = jl(n, l, o, c);
  return (h.number + " " + h.unit).trim();
}
function xr(n, l) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return uf[l.state] || (o && Kt(l.state) ? pa(l.state, n.locale) + " " + o : l.state);
}
function Fs(n, l) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const jf = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Rc = (n) => yp.find(([, l]) => n <= l)[0];
function zf(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const o = l ? vf[l] : void 0;
  if (o === void 0) return;
  const c = bf.findIndex((h) => n * o < h);
  return c === -1 ? 12 : c;
}
const Nc = (n, l) => {
  const o = l ? wf[l] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Pc = (n) => Object.keys(n.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = n.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), Ed = (n) => Object.values(n.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && is(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Vf(n) {
  var o;
  const l = {};
  for (const [c, h] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (h && "integration_type" in h) {
      l[c] = h.categories;
      continue;
    }
    for (const [v, w] of Object.entries((h == null ? void 0 : h.integrations) ?? {})) l[v] = w == null ? void 0 : w.categories;
  }
  return l;
}
const Bp = (n, l, o) => {
  var h, v, w;
  const c = (v = (h = n.entities) == null ? void 0 : h[o]) == null ? void 0 : v.platform;
  return !!c && !!((w = l[c]) != null && w.includes(gf));
};
function Gf(n, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var h;
    return c.entity_id.startsWith("sensor.") && Gl.includes(((h = c.attributes) == null ? void 0 : h.device_class) ?? "") && is(n, c.entity_id) && Bp(n, l, c.entity_id);
  }).sort((c, h) => c.entity_id.localeCompare(h.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), Gl.map((c) => o.get(c)).filter(Boolean);
}
const Uf = (n, l) => Object.values(n.states || {}).filter((o) => {
  var c, h;
  return o.entity_id.startsWith("sensor.") && is(n, o.entity_id) && Bp(n, l, o.entity_id) && (((h = (c = n.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : h.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Ic(n, l, o) {
  const c = Math.max(l - n, 1e-6), h = o[o.length - 1], v = o.find((R) => c / R <= 4) ?? h * Math.ceil(c / (4 * h)), w = Math.floor(n / v) * v;
  let A = Math.ceil(l / v) * v;
  A === w && (A = w + v);
  const y = [];
  for (let R = w; R <= A + v / 1e3; R += v) y.push(R);
  return { min: w, max: A, ticks: y };
}
const Os = (n, l, o) => {
  const c = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), h = c(n), v = c(l);
  return "rgb(" + h.map((w, A) => Math.round(w + (v[A] - w) * o)).join(", ") + ")";
}, Yf = (n, l, o, c) => {
  const h = o * Math.abs(1 - 2 * c), v = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (l + o) + " A " + h + " " + o + " 0 0 " + v + " " + n + " " + (l - o) + " Z";
}, pn = ({ icon: n, name: l, sub: o, visual: c, double: h, backdrop: v, cls: w }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + yf(n) + '</div><div class="wbText"><span class="wbName">' + qe(l) + "</span>" + (o ? '<span class="wbSub">' + qe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Bi = (n, l) => '<div class="wbValue"><span class="wbNum">' + qe(n) + "</span>" + (l ? '<span class="wbUnitV">' + qe(l) + "</span>" : "") + "</div>";
function Zf(n) {
  const l = n.max - n.min || 1, o = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, c = (A) => A / Ws * 100 + "%", h = (A) => A.map((y) => y.t + "," + o(y.v)).join(" "), v = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + ns(A.rise ? ba.sunsetUp : ba.sunsetDown) + qe(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + o(A) + '%">' + qe(n.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ws + ' 100" preserveAspectRatio="none">' + n.night.map(([A, y]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (y - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + Ws + '" y1="' + o(A) + '" y2="' + o(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + h(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + qe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + qe(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + qe(A.label) + "</span>").join("") + "</div></div>", w;
}
function Kf(n, l) {
  const w = n.map((G) => G.value), A = Math.min(...w), y = Math.max(...w), R = y - A || 1, ve = (G) => G / (n.length - 1) * 300, ie = (G) => 18 + (1 - (G - A) / R) * 84, U = n.map((G, W) => ve(W) + "," + ie(G.value)).join(" "), $ = w.indexOf(y), ae = w.indexOf(A), Z = (G) => G === 0 ? "start" : G === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ve($) + '" y="' + (ie(y) - 6) + '" text-anchor="' + Z($) + '">' + qe(l(y)) + '</text><text x="' + ve(ae) + '" y="' + (ie(A) + 14) + '" text-anchor="' + Z(ae) + '">' + qe(l(A)) + '</text><text x="0" y="120" text-anchor="start">' + qe(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + qe(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, l) {
  const v = n.map((ie) => ie.value).concat([]), w = Math.min(...v) - 2, A = Math.max(...v) + 1, y = A - w || 1, R = 300 / n.length, ve = (ie) => (1 - (ie - w) / y) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ie, U) => '<rect class="wbBar' + (ie.now ? " wbNowBar" : "") + '" x="' + (U * R + R * 0.2) + '" y="' + ve(ie.value) + '" width="' + R * 0.6 + '" height="' + (104 - ve(ie.value)) + '" rx="6"></rect><text x="' + (U * R + R / 2) + '" y="120" text-anchor="middle">' + qe(ie.label) + "</text>").join("") + "</svg>";
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
let eh = 0;
function Fc(n, { getHass: l, entityId: o, style: c = "bitmap", motion: h = !0, cards: v, onOpen: w, hoursWindow: A } = {}) {
  var gn, Io;
  const y = "wb" + ++eh + "-", R = document.createElement("div");
  R.className = "wb", R.dataset.style = c;
  const ve = document.createElement("div");
  ve.className = "wbBento", R.appendChild(ve), n.replaceChildren(R);
  const ie = ["aq_tile", "pollen_tile", "radar_tile"], U = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...ie].filter((x) => !v || v.includes(x)), $ = { current: "wide", hourly: "wide", compared_to_average: "double" }, ae = {};
  U.forEach((x) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = x, S.dataset.size = $[x] || "tile", S.hidden = !0, ve.appendChild(S), ae[x] = { el: S, html: null };
  });
  let Z = !1, G = null, W = 0, ue = -1, ee = !1, fe = null;
  const J = "homecore-next-view", N = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(J);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, re = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ee = /* @__PURE__ */ new Date(), I = /* @__PURE__ */ new Date();
  const Ie = {}, V = {}, We = {}, k = (x) => {
    var S;
    return ((S = We[x]) == null ? void 0 : S.forecast) ?? [];
  }, _ = (x, S) => {
    var C;
    return We[S] ? (C = x.states) == null ? void 0 : C[We[S].entityId] : void 0;
  };
  function L(x) {
    const S = V[x];
    S && (S.unsub.then((C) => {
      typeof C == "function" && C();
    }).catch(() => {
    }), delete V[x]), We[x] && delete We[x];
  }
  function P(x, S, C) {
    var Y;
    if (typeof ((Y = x.connection) == null ? void 0 : Y.subscribeMessage) != "function") return;
    const F = { entityId: C };
    try {
      F.unsub = Promise.resolve(x.connection.subscribeMessage((X) => {
        Z || V[S] !== F || (X != null && X.forecast ? We[S] = { entityId: C, forecast: X.forecast } : delete We[S], co());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: C }));
    } catch (X) {
      F.unsub = Promise.reject(X);
    }
    F.unsub.catch(() => {
      V[S] === F && delete V[S];
    }), V[S] = F;
  }
  function me(x, S) {
    var C;
    for (const F of ["daily", "hourly"]) {
      const Y = Wf(x, S, F);
      ((C = V[F]) == null ? void 0 : C.entityId) !== (Y == null ? void 0 : Y.entity_id) && (L(F), Y && P(x, F, Y.entity_id));
    }
  }
  const z = (x, S, C, F = !1) => x.callWS({
    type: "history/history_during_period",
    start_time: C.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: F,
    no_attributes: F,
    significant_changes_only: !1
  });
  async function ce(x, S) {
    var se, be, we;
    const C = cn(x, S, "pressure");
    if (!C) return;
    const F = C.stateObj.entity_id, Y = await z(x, F, new Date(Date.now() - 3 * Ft)), X = (we = (be = (se = Y == null ? void 0 : Y[F]) == null ? void 0 : se.find((Pe) => {
      var _e;
      return typeof ((_e = Pe.a) == null ? void 0 : _e.pressure) == "number";
    })) == null ? void 0 : be.a) == null ? void 0 : we.pressure;
    re.pressureHistory = typeof X == "number" ? { entityId: F, value: X } : void 0;
  }
  async function ge(x, S) {
    var be;
    const C = cn(x, S, "temperature");
    if (!C) return;
    const F = C.stateObj.entity_id, Y = os(/* @__PURE__ */ new Date()), X = await z(x, F, new Date(Y.getTime() - sf * Eo)), se = /* @__PURE__ */ new Map();
    for (const we of (X == null ? void 0 : X[F]) ?? []) {
      const Pe = (be = we.a) == null ? void 0 : be.temperature, _e = new Date((we.lc ?? we.lu) * 1e3);
      if (typeof Pe != "number" || _e >= Y) continue;
      const ke = _e.toDateString();
      se.set(ke, Math.max(se.get(ke) ?? -1 / 0, Pe));
    }
    re.temperatureHistory = { entityId: F, dailyHighs: [...se.values()], days: [...se.entries()].map(([we, Pe]) => ({ date: new Date(we), high: Pe })) };
  }
  async function ye(x) {
    const S = Ed(x);
    if (!S) return;
    const C = await x.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    re.rain = { entityId: S, change: (C == null ? void 0 : C.change) ?? void 0 };
  }
  function Xe() {
    const x = l == null ? void 0 : l();
    if (!x || Z || typeof x.callWS != "function") return;
    const S = Ia(x);
    re.lastFetch = Date.now(), [ce(x, S), ge(x, S), ye(x)].forEach((C) => C.then(() => co(), () => {
    }));
  }
  async function lt() {
    const x = l == null ? void 0 : l();
    if (!x) return;
    const S = cn(x, Ia(x), "temperature");
    if (!S) return;
    const C = S.stateObj.entity_id, F = os(/* @__PURE__ */ new Date());
    try {
      const Y = await z(x, C, F), X = (se) => ((Y == null ? void 0 : Y[C]) ?? []).map((be) => {
        var we;
        return { time: be.lu * 1e3, value: (we = be.a) == null ? void 0 : we[se] };
      }).filter((be) => typeof be.value == "number");
      re.todayHistory = { day: F.toDateString(), fetched: Date.now(), temperature: X("temperature"), humidity: X("humidity") }, co();
    } catch {
    }
  }
  async function Lt(x) {
    const S = l == null ? void 0 : l();
    if (S)
      try {
        const C = await z(S, x, new Date(Date.now() - 24 * Ft), !0), F = ((C == null ? void 0 : C[x]) ?? []).filter((X) => Kt(X.s)), Y = Math.max(1, Math.ceil(F.length / 48));
        re.aqHistory = { entityId: x, points: F.filter((X, se) => se % Y === 0).map((X) => ({ label: Ao(new Date(X.lu * 1e3), S), value: Number(X.s) })) }, co();
      } catch {
      }
  }
  function ka(x) {
    re.categories === void 0 && (re.categories = null, Promise.resolve().then(() => x.callWS({ type: "integration/descriptions" })).then((S) => {
      re.categories = Vf(S);
    }, () => {
      re.categories = {};
    }).then(() => co()));
  }
  function Ia(x) {
    var C;
    const S = Object.keys(x.states || {}).filter((F) => F.startsWith("weather.") && is(x, F)).sort();
    return o && ((C = x.states) != null && C[o]) ? [o, ...S.filter((F) => F !== o)] : S;
  }
  const mt = (x) => re.categories ? { air: Gf(x, re.categories), pollen: Uf(x, re.categories) } : { air: [], pollen: [] };
  function Je(x, S, C, F) {
    if (c === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + Ld(x, C || x === "clear-night") + "</span>";
    if (c === "smooth") {
      const Y = Wu(x, S === 90, C, y + "g-" + F);
      return '<span class="wbWx wbS' + S + " wb" + Y.k[0].toUpperCase() + Y.k.slice(1) + (Y.night ? " wbNight" : "") + '" aria-hidden="true">' + Y.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + qe(Zl(x, C)) + '" data-size="' + S + '"></canvas></span>';
  }
  const Tt = () => k("daily").filter((x) => x.templow != null).slice(0, Ju);
  function Qe(x, S) {
    const C = new Date(S.datetime), F = /* @__PURE__ */ new Date();
    return ts(C, F) ? Ye.today : ts(C, new Date(F.getTime() + Eo)) ? Ye.tomorrow : Dc(C, x);
  }
  const wa = (x, S, C) => C === 0 ? Qe(x, S) : Dc(new Date(S.datetime), x);
  function Ea(x, S) {
    var _e, ke, Ge, Re;
    const C = Of(x, S);
    if (!C) return "";
    const F = Tt(), Y = N.openDay !== void 0 ? F[N.openDay] : void 0, X = cn(x, S, "temperature"), se = F[0], be = se && ts(new Date(se.datetime), /* @__PURE__ */ new Date()), we = ((ke = (_e = x.config) == null ? void 0 : _e.unit_system) == null ? void 0 : ke.temperature) || ((Ge = C.attributes) == null ? void 0 : Ge.temperature_unit) || "";
    let Pe = '<div class="wbCard wbWeather' + (Y ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Y ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + qe(Ye.openPage) + '">' : '<div class="wbCurrent">') + Je(C.state, 90, Ff(x), "now") + '<div class="wbTempBlock">' + (X && Kt(X.value) ? '<div class="wbTemp"><span class="wbDeg">' + qe(pa(Math.round(Number(X.value)), x.locale)) + '</span><span class="wbUnit">' + qe(we) + "</span></div>" : "") + '<div class="wbPlace">' + qe(((Re = x.config) == null ? void 0 : Re.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + qe(xr(x, C)) + "</div>" + (be && se.templow != null ? '<div class="wbRange">' + qe(Pa(Ye.range, { high: ia(x, se.temperature), low: ia(x, se.templow) })) + "</div>" : "") + "</div></div>";
    if (Pe += xt(x) + Bo(x), F.length) {
      const Fe = be && X && Kt(X.value) ? ia(x, X.value) : "", Ze = (ze, Ce, tt) => ze === 0 && Fe ? '<span class="wbAsDay">' + qe(Ce) + '</span><span class="wbAsNow">' + qe(tt) + "</span>" : qe(Ce);
      Pe += '<div class="wbColumns" role="list">' + F.map((ze, Ce) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ce + '" data-wb-focus="col-' + Ce + '"><span class="wbDay">' + Ze(Ce, wa(x, ze, Ce), Ye.now) + "</span>" + Je(ze.condition ?? "cloudy", 60, !1, "col" + Ce) + '<span class="wbTemps"><span class="wbHi">' + Ze(Ce, ia(x, ze.temperature), Fe) + '</span><span class="wbLo">' + qe(ia(x, ze.templow)) + "</span></span></button>").join("") + "</div>", Pe += '<div class="wbHalves" role="list">' + F.map((ze, Ce) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ce + '" data-wb-focus="half-' + Ce + '">' + Je(ze.condition ?? "cloudy", 40, !1, "half" + Ce) + '<span class="wbText"><span class="wbName">' + qe(Qe(x, ze)) + '</span><span class="wbSub">' + qe(Pa(Ye.highLow, { high: ia(x, ze.temperature), low: ia(x, ze.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return Pe + "</div>" + (Y ? Ma(x, S, Y) : "") + "</div>";
  }
  const Sr = {
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
  function Ke(x) {
    const S = Date.now(), C = k("hourly").filter((ke) => new Date(ke.datetime).getTime() > S - Ft).slice(0, 13);
    if (C.length < 2) return "";
    const F = (ke) => Ao(new Date(ke.datetime), x), Y = (ke) => Sr[ke.condition] || "", X = (ke) => dt[ke.condition] || ke.condition;
    let se = Y(C[0]);
    if (!se) return "";
    let be = C[0], we = 0;
    for (const ke of C.slice(1))
      we === 2 || X(ke) === X(be) || !Y(ke) || (se += (we ? " and " : ", ") + Y(ke) + " from " + F(ke), be = ke, we++);
    const Pe = Number(C[0].temperature), _e = C.filter((ke) => Kt(ke.temperature));
    if (Kt(Pe) && _e.length) {
      const ke = _e.reduce((Re, Fe) => Number(Fe.temperature) < Number(Re.temperature) ? Fe : Re), Ge = _e.reduce((Re, Fe) => Number(Fe.temperature) > Number(Re.temperature) ? Fe : Re);
      Pe - Number(ke.temperature) >= 3 ? se += ", down to " + ia(x, ke.temperature) + " by " + F(ke) : Number(Ge.temperature) - Pe >= 3 && (se += ", up to " + ia(x, Ge.temperature) + " by " + F(Ge));
    }
    return se[0].toUpperCase() + se.slice(1) + ".";
  }
  const xt = (x) => {
    const S = Ke(x);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + qe(S) + "</p></div>" : "";
  };
  function Bo(x) {
    const [S, C] = Nl[A == null ? void 0 : A()] || Nl.day, F = Date.now(), Y = k("hourly").filter((X) => {
      const se = new Date(X.datetime), be = se.getHours();
      return se.getTime() > F - Ft / 2 && be >= S && be < C && Kt(X.temperature);
    }).slice(0, 4);
    return Y.length ? '<div class="wbNextHours" role="list">' + Y.map((X, se) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + qe(Ao(new Date(X.datetime), x)) + "</span>" + Je(X.condition ?? "cloudy", 40, X.is_daytime === !1, "hr" + se) + '<span class="wbHourTemp">' + qe(ia(x, X.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Cr(x) {
    const S = x.getTime(), C = Date.now() - Ft;
    return k("hourly").filter((F) => {
      const Y = new Date(F.datetime).getTime();
      return Y >= S && Y < S + Eo && Y > C;
    });
  }
  function Ii(x) {
    if (!x.length) return ["temperature"];
    const S = ["temperature"];
    return x.some((C) => C.precipitation != null || C.precipitation_probability != null) && S.push("precipitation"), x.some((C) => C.humidity != null) && S.push("humidity"), S;
  }
  function Ma(x, S, C) {
    const F = os(new Date(C.datetime)), Y = Cr(F), X = Ii(Y), se = X.includes(N.dayMode) ? N.dayMode : "temperature", be = (we) => we === "humidity" ? Ye.humidity : Ye.modes[we];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Je(C.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + qe(Qe(x, C)) + '</span><span class="wbSub">' + qe(Pa(Ye.highLow, { high: ia(x, C.temperature), low: ia(x, C.templow) })) + '</span></div><button class="wbBack" title="' + qe(Ye.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ns(ba.back) + "</button></div>" + (X.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + X.map((we) => '<button aria-pressed="' + (we === se) + '" data-wb="day-mode" data-mode="' + we + '" data-wb-focus="day-mode-' + we + '">' + qe(be(we)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(ft(x, S, F, Y, se)) + "</div></div>";
  }
  function ft(x, S, C, F, Y) {
    var Rn;
    const X = C.getTime(), se = Date.now(), be = ts(C, /* @__PURE__ */ new Date()), we = (ct) => (ct - X) / so, Pe = (ct) => Ao(new Date(ct), x), _e = (ct) => new Date(ct.datetime).getTime(), ke = [0, 3, 6, 9, 12, 15, 18, 21].map((ct) => ({ t: ct * 60, label: Pe(X + ct * Ft), minor: ct % 6 !== 0 })), { rise: Ge, set: Re } = _d(x, C), Fe = [], Ze = [];
    Ge && (Fe.push({ t: we(Ge.getTime()), label: Pe(Ge.getTime()), rise: !0 }), Ze.push([0, we(Ge.getTime())])), Re && (Fe.push({ t: we(Re.getTime()), label: Pe(Re.getTime()), rise: !1 }), Ze.push([we(Re.getTime()), Ws]));
    const ze = Yl(x);
    !Ge && !Re && ze && Qd(new Date(X + Eo / 2), ze.lat, ze.lon) < 0 && Ze.push([0, Ws]);
    const Ce = be ? we(se) : void 0, tt = { hours: ke, sun: Fe, night: Ze };
    if (!F.length && !be) return { ...tt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    if (Y === "precipitation") {
      const ct = F.some((Sa) => Sa.precipitation_probability != null), Wa = F.map((Sa) => ({ t: we(_e(Sa)), v: Number((ct ? Sa.precipitation_probability : Sa.precipitation) ?? 0) })), vn = yr(x, _(x, "hourly"), "precipitation"), bn = Math.max(0, ...Wa.map((Sa) => Sa.v)), li = ct ? 100 : Ic(0, Math.max(bn, 1), [0.5, 1, 2, 5, 10]).max, Ar = (Sa) => ct ? pa(Sa, x.locale) + "%" : pa(Sa, x.locale, { maximumFractionDigits: 1 }) + " " + vn, Xn = Wa.find((Sa) => Sa.v === bn);
      return {
        ...tt,
        kind: "bars",
        points: Wa,
        min: 0,
        max: li,
        ticks: [0, li / 2, li],
        format: Ar,
        now: Ce !== void 0 ? { t: Ce, v: 0 } : void 0,
        peak: Xn && bn > 0 ? { t: Xn.t + 30, v: Xn.v, label: Ar(Xn.v) } : void 0,
        note: bn > 0 ? void 0 : Ye.noRain
      };
    }
    const it = Y === "humidity" ? "humidity" : "temperature", zt = F.filter((ct) => ct[it] != null && (!be || _e(ct) >= se)).map((ct) => ({ t: we(_e(ct)), v: Number(ct[it]) }));
    let Ne, Rt = [];
    if (Ce !== void 0) {
      const ct = cn(x, S, it);
      ct && Kt(ct.value) && (Ne = { t: Ce, v: Number(ct.value) }, zt.unshift(Ne)), Rt = (((Rn = re.todayHistory) == null ? void 0 : Rn.day) === C.toDateString() ? re.todayHistory[it] : []).filter((vn) => vn.time <= se).map((vn) => ({ t: Math.max(0, we(vn.time)), v: vn.value })), Ne && Rt.length && Rt.push(Ne);
    }
    const $t = [...Rt, ...zt];
    if (!$t.length) return { ...tt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    const Oa = $t.map((ct) => ct.v), Dn = Ic(Math.min(...Oa), Math.max(...Oa), it === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    it === "humidity" && (Dn.min = Math.max(0, Dn.min), Dn.max = Math.min(100, Dn.max), Dn.ticks = Dn.ticks.filter((ct) => ct >= 0 && ct <= 100));
    const Bn = it === "humidity" ? (ct) => pa(ct, x.locale) + "%" : (ct) => ia(x, ct), qi = it === "temperature" ? $t.reduce((ct, Wa) => Wa.v > ct.v ? Wa : ct) : void 0;
    return { ...tt, kind: "line", points: zt, past: Rt, ...Dn, format: Bn, now: Ne, peak: qi ? { ...qi, label: Bn(qi.v) } : void 0 };
  }
  function Ot(x) {
    const S = ["temperature"];
    return x.some((C) => C.precipitation_probability != null || C.precipitation != null) && S.push("precipitation"), x.some((C) => C.wind_speed != null) && S.push("wind"), S;
  }
  function Tr(x, S, C = Mc) {
    var X, se;
    const F = k("daily"), Y = [];
    for (let be = 0; be < C; be++) for (const we of [!1, !0]) {
      const Pe = x.getTime() + (be * 24 + (we ? 12 : 0)) * Ft, _e = Pe + 12 * Ft, ke = {};
      S.forEach((Re) => {
        const Fe = new Date(Re.datetime).getTime();
        Re.condition && Fe >= Pe && Fe < _e && (ke[Re.condition] = (ke[Re.condition] ?? 0) + (of.has(Re.condition) ? 2 : 1));
      });
      let Ge = (X = Object.entries(ke).sort((Re, Fe) => Fe[1] - Re[1])[0]) == null ? void 0 : X[0];
      if (!Ge) {
        const Re = new Date(Pe).toDateString();
        Ge = ((se = F.find((Fe) => new Date(Fe.datetime).toDateString() === Re)) == null ? void 0 : se.condition) ?? "cloudy";
      }
      Y.push({ cond: we && Ge === "sunny" ? "clear-night" : Ge, night: we });
    }
    return Y;
  }
  function ii(x, S, C) {
    const F = _(x, "hourly"), Y = S.precipitation_probability != null ? pa(S.precipitation_probability, x.locale) + "%" : "", X = S.precipitation ? pa(S.precipitation, x.locale) + " " + yr(x, F, "precipitation") : "";
    switch (C) {
      case "precipitation":
        return Y ? [Y, X] : [X || "–", ""];
      case "wind":
        return S.wind_speed != null ? [pa(Math.round(S.wind_speed), x.locale), yr(x, F, "wind_speed")] : ["–", ""];
      default:
        return [ia(x, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? Y : ""];
    }
  }
  function yt(x, S, C) {
    const [F, Y] = Nl[A == null ? void 0 : A()] || Nl.day, X = [];
    for (let se = 0; se < 4 && X.length < 3; se++) {
      const be = /* @__PURE__ */ new Date();
      be.setHours(0, 0, 0, 0), be.setDate(be.getDate() + se);
      const we = new Date(be);
      we.setHours(Y, 0, 0, 0), be.setHours(F, 0, 0, 0), !(we.getTime() <= C || !S.some((Pe) => {
        const _e = new Date(Pe.datetime).getTime();
        return _e >= be.getTime() && _e <= we.getTime();
      })) && X.push({ a: be.getTime(), b: we.getTime(), label: Qe(x, { datetime: be.toISOString() }) });
    }
    return X;
  }
  function Me(x, S, C, F, Y, X) {
    const se = (C.b - S.a) / Ft, be = (Ce) => ((Ce - S.a) / Ft).toFixed(3), we = 80, Pe = 32, _e = [];
    for (const Ce = new Date(S.a - Eo); Ce.getTime() < C.b + Eo; Ce.setDate(Ce.getDate() + 1)) {
      const { rise: tt, set: it } = _d(x, new Date(Ce));
      tt && it && _e.push({ rise: tt.getTime(), set: it.getTime() });
    }
    const ke = (Ce, tt) => we - (we - Pe) * Math.sin(Math.PI * (tt - Ce.rise) / (Ce.set - Ce.rise)), Ge = (Ce) => !_e.some((tt) => Ce >= tt.rise && Ce <= tt.set);
    let Re = "", Fe = "", Ze = "";
    _e.forEach((Ce, tt) => {
      const it = [];
      for (let Ne = Ce.rise; Ne <= Ce.set; Ne += 15 * so) it.push(be(Ne) + "," + ke(Ce, Ne).toFixed(2));
      it.push(be(Ce.set) + "," + we), Re += '<polyline class="wbLineArc" points="' + it.join(" ") + '"/>';
      const zt = _e[tt + 1];
      zt && (Re += '<rect class="wbLineNight" x="' + be(Ce.set) + '" y="0" width="' + ((zt.rise - Ce.set) / Ft).toFixed(3) + '" height="100"/>'), [[Ce.rise, "↑"], [Ce.set, "↓"]].forEach(([Ne, Rt]) => {
        Ne < S.a || Ne > C.b || (Fe += '<line class="wbLineEdge" x1="' + be(Ne) + '" x2="' + be(Ne) + '" y1="0" y2="100"/>', Ze += '<span class="wbLineTime" style="left:' + X(Ne) + '">' + Rt + " " + qe(Ao(new Date(Ne), x)) + "</span>");
      });
    });
    const ze = _e.find((Ce) => Y >= Ce.rise && Y <= Ce.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + se + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Re + Fe + '<line class="wbLineHorizon" x1="0" x2="' + se + '" y1="' + we + '" y2="' + we + '"/></svg>' + Ze + (ze ? '<span class="wbLineNow" style="left:' + X(Y) + ";top:" + ke(ze, Y) + '%">' + Ld("sunny", !1) + "</span>" : "") + F.filter((Ce) => Ce.entry && !Ce.now).map((Ce) => '<span class="wbLineGlyph' + Ce.edge + '" style="left:' + X(Ce.t) + '">' + Ld(Ce.entry.condition ?? "cloudy", Ge(Ce.t)) + "</span>").join("");
  }
  function qt(x, S) {
    delete Ie.hourly;
    const C = N.hourlyView === "bars" ? "bars" : "strip", F = '<div class="wbHeader"><h2 class="wbTitle">' + qe(C === "bars" ? Ye.nextDays : Ye.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + qe(Ye.showAs) + '">' + ["strip", "bars"].map((Ne) => '<button aria-pressed="' + (Ne === C) + '" data-wb="hourly-view" data-view="' + Ne + '" data-wb-focus="hourly-view-' + Ne + '">' + qe(Ye.views[Ne]) + "</button>").join("") + "</div></div>";
    if (C === "bars") return Ha(x, S, F);
    const Y = k("hourly"), X = Math.floor(Date.now() / so) * so, se = Y.filter((Ne) => new Date(Ne.datetime).getTime() > X - Ft);
    if (!se.length) return "";
    const be = Ot(se), we = be.includes(N.hourlyMode) ? N.hourlyMode : "temperature", Pe = yt(x, Y, X);
    if (!Pe.length) return "";
    const _e = Pe[0], ke = Pe[Pe.length - 1], Ge = (_e.b - _e.a) / Ft, Re = (Ne) => "calc(var(--wb-u) * " + ((Ne - _e.a) / Ft).toFixed(3) + ")", Fe = new Date(_e.a);
    Fe.setHours(6, 0, 0, 0), Fe.getTime() > _e.a && Fe.setDate(Fe.getDate() - 1);
    const Ze = Math.ceil((ke.b - Fe.getTime()) / Eo);
    c !== "line" && (Ie.hourly = { segs: Tr(Fe, Y, Ze), seed: Fe.getDate(), columns: Ze });
    const ze = (Ne) => Ne === _e.a ? " wbFirst" : Ne === ke.b ? " wbLast" : "", Ce = [];
    for (let Ne = _e.a; Ne < ke.b; ) {
      const Rt = new Date(Ne);
      Rt.setHours(24, 0, 0, 0);
      const $t = Math.min(Rt.getTime(), ke.b);
      Ce.push({ a: Ne, b: $t, label: Qe(x, { datetime: new Date(Ne).toISOString() }), page: Pe.find((Oa) => Oa.a >= Ne && Oa.a < $t) || Pe.find((Oa) => Oa.a < $t && Oa.b > Ne) }), Ne = $t;
    }
    const tt = X > _e.a && X < ke.b ? Math.floor((X - _e.a) / (2 * Ft)) * 2 : 0, it = [];
    for (let Ne = _e.a; Ne <= ke.b; Ne += Ft) {
      const Rt = new Date(Ne), $t = ze(Ne);
      !$t && Rt.getHours() % ef || !$t && (Math.abs(_e.a - Ne) < 2 * Ft || Math.abs(ke.b - Ne) < 2 * Ft) || X >= _e.a && Math.abs(Ne - X) < 1.5 * Ft && !$t || it.push({ t: Ne, edge: $t, label: Ao(Rt, x), entry: Ne >= X - Ft ? Y.find((Oa) => new Date(Oa.datetime).getTime() === Ne) : void 0 });
    }
    X > _e.a && X < _e.b && it.push({ t: X, edge: X - _e.a < Ft ? " wbFirst" : _e.b - X < Ft ? " wbLast" : "", label: Ye.now, entry: se[0], now: !0 });
    const zt = (Ne, Rt) => '<span class="wbMark' + Ne.edge + (Ne.now ? " wbNowMark" : "") + '" style="left:' + Re(Ne.t) + '">' + Rt + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + F + (be.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + be.map((Ne) => '<button aria-pressed="' + (Ne === we) + '" data-wb="hourly-mode" data-mode="' + Ne + '" data-wb-focus="hourly-mode-' + Ne + '">' + qe(Ye.modes[Ne]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + qe(Ye.nextHours) + '" data-span="' + Ge + '" data-start="' + tt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ge + ");width:calc(var(--wb-u) * " + (ke.b - _e.a) / Ft + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ke.b - _e.a) / (2 * Ft)) + 1)].map((Ne, Rt) => '<i class="wbSnap" style="left:' + Re(_e.a + Rt * 2 * Ft) + '"></i>').join("") + '<div class="wbDays">' + Ce.map((Ne, Rt) => {
      var $t;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ne.b - Ne.a) / Ft).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Rt === 0 ? tt : (((($t = Ne.page) == null ? void 0 : $t.a) ?? Ne.a) - _e.a) / Ft) + '" data-wb-focus="hours-day-' + Rt + '">' + qe(Ne.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + it.map((Ne) => zt(Ne, qe(Ne.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + Me(x, _e, ke, it, X, Re) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Re(Fe.getTime()) + ";width:calc(var(--wb-u) * " + Ze * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (X > _e.a ? '<i class="wbPast" style="width:' + Re(Math.min(X, ke.b)) + '"></i><i class="wbNowLine" style="left:' + Re(X) + '"></i>' : "") + Ce.slice(1).map((Ne) => '<i class="wbMidnight" style="left:' + Re(Ne.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + it.map((Ne) => {
      if (!Ne.entry) return "";
      const [Rt, $t] = ii(x, Ne.entry, we);
      return zt(Ne, '<span class="wbPrimaryV">' + qe(Rt) + '</span><span class="wbSecondary">' + qe($t) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function He(x) {
    const S = tf, C = S.findIndex(([we]) => we >= x);
    if (C <= 0) return "rgb(" + S[C < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [F, Y] = S[C - 1], [X, se] = S[C], be = (x - F) / (X - F);
    return "rgb(" + Y.map((we, Pe) => Math.round(we + (se[Pe] - we) * be)).join(",") + ")";
  }
  function Ha(x, S, C) {
    var Re;
    const F = k("daily").filter((Fe) => Kt(Fe.templow) && Kt(Fe.temperature)).slice(0, 7);
    if (!F.length) return "";
    const Y = Math.min(...F.map((Fe) => Number(Fe.templow))), X = Math.max(...F.map((Fe) => Number(Fe.temperature))), se = Math.max(1, X - Y), be = (Fe) => Math.max(0, Math.min(100, (Fe - Y) / se * 100)).toFixed(2), we = /F/.test(yr(x, _(x, "daily"), "temperature")), Pe = (Fe) => we ? (Fe - 32) / 1.8 : Fe, _e = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Fe) => He(Pe(Y + Fe * se)) + " " + Fe * 100 + "%").join(",") + ")", ke = (Re = cn(x, S, "temperature")) == null ? void 0 : Re.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Ot(k("hourly").filter((Fe) => new Date(Fe.datetime).getTime() > Date.now() - Ft)).length > 1 ? " wbTabbed" : "") + '">' + C + '<div class="wbDayBars" role="list">' + F.map((Fe, Ze) => {
      const ze = Qe(x, Fe), Ce = ts(new Date(Fe.datetime), /* @__PURE__ */ new Date()), tt = Number(Fe.templow), it = Number(Fe.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + qe(Pa(Ye.rangeRow, { day: ze, low: ia(x, tt), high: ia(x, it) })) + '"><span class="wbRangeDay">' + qe(ze) + "</span>" + Je(Fe.condition, 40, !1, "r" + Ze) + '<span class="wbRangeLo">' + qe(ia(x, tt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + _e + ";clip-path:inset(0 " + (100 - be(it)) + "% 0 " + be(tt) + '% round 4px)"></i>' + (Ce && Kt(ke) ? '<i class="wbRangeNow" style="left:' + be(Number(ke)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + qe(ia(x, it)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function zn(x) {
    const S = Ee, { rise: C, set: F } = _d(x, S), Y = C && F ? Math.round((F.getTime() - C.getTime()) / so) : 0, X = Math.floor(Y / 60), se = Y % 60, be = C && F ? (S.getTime() - C.getTime()) / (F.getTime() - C.getTime()) : -1, we = be >= 0 && be <= 1, Pe = Math.PI * (1 - Math.min(1, Math.max(0, be))), _e = 100 + 74 * Math.cos(Pe), ke = 100 - 74 * Math.sin(Pe), Ge = we ? Math.sin(Math.PI * be) : 0, Re = we ? Os("#2e0a0d", "#43180a", Ge) : "#0e0507", Fe = we ? Os("#7a1d12", "#8f400f", Ge) : "#1c0709", Ze = Os("#f60c08", "#ff8f00", Ge), ze = Os("#fd9b07", "#ffd84a", Ge), Ce = we ? Os("#fd9b07", "#ffd84a", Ge) : "#6b3a2a", tt = (zt) => zt ? Ao(zt, x) : "–", it = C && F ? new Date((C.getTime() + F.getTime()) / 2) : null;
    return pn({
      icon: ba.sunny,
      name: Ye.sun,
      sub: Y ? Pa(Ye.daylightShort, { hours: X, minutes: se }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Re + ", " + Fe + ");--wb-sun-line:" + Ce + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + y + 'sun-glow"><stop offset="0" stop-color="' + Ze + '"></stop><stop offset="0.45" stop-color="' + Ze + '"></stop><stop offset="1" stop-color="' + ze + '"></stop></radialGradient><clipPath id="' + y + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (we ? '<circle cx="' + _e + '" cy="' + ke + '" r="14" fill="url(#' + y + 'sun-glow)" clip-path="url(#' + y + 'above-horizon)"></circle>' : "") + (it ? '<text class="wbSunTime wbNoon" x="100" y="1">' + qe(tt(it)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + qe(tt(C)) + '</text><text class="wbSunTime" x="174" y="117">' + qe(tt(F)) + "</text></svg></div>"
    });
  }
  function Hi(x, S, C) {
    const F = (se) => y + "moon-" + se, Y = x > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + F("terminator") + ')" d="' + Yf(61, 61, 57.9, x) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", X = (se, be, we, Pe, _e, ke) => '<filter id="' + F(se) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + be + '" numOctaves="' + we + '" seed="' + Pe + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ge) => "<feFunc" + Ge + ' type="linear" slope="' + _e + '" intercept="' + ke + '"></feFunc' + Ge + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + F("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + F("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + F("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + F("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + F("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + X("mottle", "0.045", 4, 3, 1.8, -0.4) + X("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + F("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + F("fill") + ')"></circle><g' + (C ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + F("soften") + ')">' + Xf.map(([se, be, we, Pe, _e, ke]) => '<ellipse cx="' + se + '" cy="' + be + '" rx="' + we + '" ry="' + Pe + '" fill-opacity="' + ke + '" transform="rotate(' + _e + " " + se + " " + be + ')"></ellipse>').join("") + "</g>" + Jf.map(([se, be, we]) => '<circle class="wbCrater" cx="' + se + '" cy="' + be + '" r="' + we + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + F("glow") + ')">' + Qf.map(([se, be]) => '<line x1="54.4" y1="95" x2="' + se + '" y2="' + be + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + F("glow") + ')">' + Hc.map(([se, be, we]) => '<circle cx="' + se + '" cy="' + be + '" r="' + we * 2 + '"></circle>').join("") + "</g>" + Hc.map(([se, be, we]) => '<circle class="wbBrightCenter" cx="' + se + '" cy="' + be + '" r="' + we + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + F("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + F("grain") + ')"></rect>' + Y + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ue(x) {
    const S = I, C = Yl(x), F = (C == null ? void 0 : C.lat) ?? 0, Y = If(S), X = Pc(x), se = X ? x.states[X] : void 0, be = Mr(se) && hf.includes(se.state) ? se.state : Hf(Y.phase), { rise: we, set: Pe } = C ? Pf(S, C.lat, C.lon) : {}, _e = Y.phase > 0.5 != F < 0, ke = pa(Math.round(Y.fraction * 100), x.locale) + "%", Ge = we ?? Pe, Re = Ge ? Ao(Ge, x) : void 0;
    return pn({
      icon: ba.night,
      name: Ye.moon,
      sub: Ye.phases[be],
      visual: '<div class="wbMoonBox">' + Hi(Y.fraction, _e, F < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Re ? qe(Pa(we ? Ye.moonriseAt : Ye.moonsetAt, { time: Re })) : "") + "</span><span>" + qe(Pa(Ye.lit, { illumination: ke })) + "</span></div>"
    });
  }
  function nt(x, S) {
    var Fe;
    const C = cn(x, S, "wind_speed");
    if (!C || !Kt(C.value)) return "";
    const F = cn(x, S, "wind_gust_speed"), Y = cn(x, S, "wind_bearing"), X = Y && Kt(Y.value) ? Number(Y.value) : void 0, se = zf(Number(C.value), (Fe = C.stateObj.attributes) == null ? void 0 : Fe.wind_speed_unit), be = jl(x, C.stateObj, "wind_speed", C.value), we = X !== void 0 ? Ye.cardinal[ff[((X + 11.25) / 22.5 | 0) % 16]] : void 0, Pe = F ? qf(x, F.stateObj, "wind_gust_speed", F.value) : void 0, _e = [we ? Pa(Ye.windFrom, { direction: we }) : void 0, se !== void 0 ? se + " " + Ye.beaufort : void 0].filter(Boolean).join(" · ") || Pe, ke = (Ze, ze) => {
      const Ce = (Ze - 90) * Math.PI / 180;
      return [100 + ze * Math.cos(Ce), 100 + ze * Math.sin(Ce)];
    }, Ge = Array.from({ length: 36 }, (Ze, ze) => ze * 10).map((Ze) => {
      const ze = Ze % 90 === 0, [Ce, tt] = ke(Ze, 97), [it, zt] = ke(Ze, ze ? 83 : 89);
      return '<line class="wbTick' + (ze ? " wbMajor" : "") + '" x1="' + Ce + '" y1="' + tt + '" x2="' + it + '" y2="' + zt + '"></line>';
    }).join(""), Re = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ze, ze]) => {
      const [Ce, tt] = ke(ze, 64);
      return '<text class="wbLetter' + (Ze === "n" ? " wbNorth" : "") + '" x="' + Ce + '" y="' + tt + '">' + qe(Ye.cardinal[Ze]) + "</text>";
    }).join("");
    return pn({ icon: ba.windy, name: Ye.wind, sub: _e, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ge + Re + (X !== void 0 ? '<path class="wbMarker" transform="rotate(' + X + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + qe(be.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + qe(be.unit) + "</text></svg>" });
  }
  function jt(x, S) {
    const C = cn(x, S, "uv_index");
    if (!C || !Kt(C.value)) return "";
    const F = Number(C.value), Y = Ye.uvLevel[jf(F)], X = /* @__PURE__ */ new Date();
    X.setHours(23, 59, 59, 999);
    const se = k("hourly").filter((Ze) => Ze.uv_index != null && new Date(Ze.datetime) > /* @__PURE__ */ new Date() && new Date(Ze.datetime) <= X).reduce((Ze, ze) => !Ze || ze.uv_index > Ze.uv ? { uv: ze.uv_index, time: new Date(ze.datetime) } : Ze, void 0), be = 48, we = 100, Pe = 130, _e = (Ze) => -be + Math.min(Ze, 11) / 11 * 2 * be, ke = (Ze, ze) => {
      const Ce = Ze * Math.PI / 180;
      return [we + ze * Math.sin(Ce), Pe - ze * Math.cos(Ce)];
    }, Ge = (Ze, ze, Ce) => {
      const [tt, it] = ke(_e(Ze), Ce), [zt, Ne] = ke(_e(ze), Ce);
      return "M " + tt + " " + it + " A " + Ce + " " + Ce + " 0 0 1 " + zt + " " + Ne;
    }, Fe = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Pl.low], [3, 6, Pl.moderate], [6, 8, Pl.high], [8, 11, Pl.very_high]].map(([Ze, ze, Ce]) => '<path class="wbVuZone" d="' + Ge(Ze, ze, 96) + '" style="stroke:' + Ce + '"></path>').join("") + Array.from({ length: 21 }, (Ze, ze) => ({ angle: -be + ze * (2 * be / 20), major: ze % 2 === 0 })).map(({ angle: Ze, major: ze }) => {
      const [Ce, tt] = ke(Ze, 102), [it, zt] = ke(Ze, ze ? 114 : 108);
      return '<line class="wbVuTick' + (ze ? " wbMajor" : "") + '" x1="' + Ce + '" y1="' + tt + '" x2="' + it + '" y2="' + zt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + _e(F) + 'deg"><line x1="' + we + '" y1="' + Pe + '" x2="' + we + '" y2="' + (Pe - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + qe(pa(Math.round(F), x.locale)) + "</text></svg>";
    return pn({
      icon: ba.sunnyAlert,
      name: Ye.metrics.uv_index,
      sub: se && se.uv > F ? Pa(Ye.uvPeak, { level: Y, uv_index: pa(Math.round(se.uv), x.locale), time: Ao(se.time, x) }) : Y,
      visual: Fe
    });
  }
  function Ro(x) {
    const S = k("daily")[0], C = re.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Kt(S.temperature) || !C || C.dailyHighs.length < lf) return "";
    const F = Number(S.temperature), Y = C.dailyHighs.reduce((it, zt) => it + zt, 0) / C.dailyHighs.length, X = Math.round(F - Y) || 0, se = X > 0 ? "above" : X < 0 ? "below" : "same", be = [...C.days, { date: /* @__PURE__ */ new Date(), high: F, today: !0 }], we = 220, Pe = 158, _e = 22, ke = 20, Ge = be.map((it) => it.high).concat(Y), Re = Math.min(...Ge) - 3, Fe = Math.max(...Ge) + 1, Ze = (it) => _e + (1 - (it - Re) / (Fe - Re)) * (Pe - _e - ke), ze = we / be.length, Ce = Math.min(18, ze * 0.6), tt = '<svg class="wbCompareBars" viewBox="0 0 ' + we + " " + Pe + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + we + '" y1="' + Ze(Y) + '" y2="' + Ze(Y) + '"></line>' + be.map((it, zt) => {
      const Ne = zt * ze + ze / 2, Rt = Ze(it.high), $t = it.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + $t + '" x="' + (Ne - Ce / 2) + '" y="' + Rt + '" width="' + Ce + '" height="' + (Pe - ke - Rt) + '" rx="5"></rect><text class="wbAvgValue' + $t + '" x="' + Ne + '" y="' + (Rt - 6) + '">' + qe(ia(x, it.high)) + '</text><text class="wbAvgDay' + $t + '" x="' + Ne + '" y="' + (Pe - 4) + '">' + qe(Cf(it.date, x)) + "</text>";
    }).join("") + "</svg>";
    return pn({
      icon: ba.chartLine,
      name: Ye.metrics.compared_to_average,
      double: !0,
      sub: Pa(Ye.highsLastDays, { days: C.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (X > 0 ? "+" : "") + qe(ia(x, X)) + '</div><div class="wbCompareWords">' + qe(Ye.average[se]) + '</div><div class="wbCompareTemps">' + qe(Pa(Ye.todayVsAverage, { today: ia(x, F), average: ia(x, Y) })) + "</div></div>" + tt + "</div>"
    });
  }
  function Fa(x, S) {
    const C = cn(x, S, "humidity");
    if (!C || !Kt(C.value)) return "";
    const F = cn(x, S, "dew_point"), Y = Math.max(0, Math.min(100, Number(C.value)));
    return pn({
      icon: ba.waterPercent,
      name: Ye.metrics.humidity,
      sub: F && Kt(F.value) ? Pa(Ye.dewPoint, { dew_point: ia(x, F.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Y + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Bi(pa(Math.round(Number(C.value)), x.locale), "%") + "</div>"
    });
  }
  function ta(x, S) {
    var Pe, _e;
    const C = cn(x, S, "pressure");
    if (!C || !Kt(C.value)) return "";
    const F = Number(C.value), Y = (Pe = C.stateObj.attributes) == null ? void 0 : Pe.pressure_unit, X = Nc(F, Y), se = ((_e = re.pressureHistory) == null ? void 0 : _e.entityId) === C.stateObj.entity_id ? Nc(re.pressureHistory.value, Y) : void 0;
    let be;
    if (X !== void 0 && se !== void 0) {
      const ke = X - se;
      be = ke >= Tc ? "rising" : ke <= -Tc ? "falling" : "steady";
    }
    const we = jl(x, C.stateObj, "pressure", Math.round(F));
    return pn({
      icon: ba.gauge,
      name: Ye.metrics.pressure,
      sub: be ? Ye.pressure[be] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Bi(we.number) + '<span class="wbTapeUnit">' + qe(we.unit) + "</span></div>" + (X !== void 0 ? ri(x, X) : "") + "</div>"
    });
  }
  function ri(x, S) {
    const Y = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (X, se) => Y + se).map((X) => {
      const se = 100 - (X - S) * 9;
      if (se < 22 || se > 178) return "";
      const be = X % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(se - 100) / 100) + '"><line class="wbTapeTick" x1="' + (be ? 2 : 8) + '" x2="26" y1="' + se + '" y2="' + se + '"></line>' + (be ? '<text class="wbTapeLabel" x="33" y="' + se + '">' + qe(pa(X, x.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + qe(Ye.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + qe(Ye.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function sa(x) {
    var we, Pe;
    const S = Ed(x), C = S ? x.states[S] : void 0;
    if (!C || ((we = re.rain) == null ? void 0 : we.entityId) !== S || !Kt(re.rain.change)) return "";
    const F = ((Pe = C.attributes) == null ? void 0 : Pe.unit_of_measurement) ?? "", Y = _(x, "hourly"), X = Date.now() + Eo, se = k("hourly").filter((_e) => _e.precipitation != null && new Date(_e.datetime).getTime() <= X), be = se.reduce((_e, ke) => _e + Number(ke.precipitation), 0);
    return pn({
      icon: ba.rainy,
      name: Ye.metrics.precipitation,
      sub: Y && se.length ? Pa(Ye.rainExpected, { amount: pa(be, x.locale, { maximumFractionDigits: 1 }) + " " + yr(x, Y, "precipitation") }) : Ye.rainLast24h,
      visual: Bi(pa(re.rain.change, x.locale, { maximumFractionDigits: 1 }), F) + (se.length > 1 ? $f(se.map((_e) => ({ label: "", value: Number(_e.precipitation) }))) : "")
    });
  }
  function Vn(x, S) {
    const C = cn(x, S, "visibility");
    if (!C || !Kt(C.value)) return "";
    const F = jl(x, C.stateObj, "visibility", C.value), Y = $u(Number(C.value), yr(x, C.stateObj, "visibility"));
    return pn({
      icon: ba.eyeOutline,
      name: Ye.metrics.visibility,
      sub: Ye.visibilityLevel[Xu(Y)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Y + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + qe(Gn(x, Y)) + '</div><div class="wbSeaValue">' + Bi(F.number, F.unit) + "</div></div>"
    });
  }
  function Gn(x, S) {
    var X;
    const C = Ku((X = x.config) == null ? void 0 : X.country, S);
    if (C) return Pa(Ye.visibilityLandmarks, { from: C.from, to: C.to });
    const F = S / pf * 60;
    if (F < 60) {
      const se = F < 5 ? Math.max(1, Math.round(F)) : 5 * Math.round(F / 5);
      if (se < 60) return Pa(Ye.walkMinutes, { minutes: pa(se, x.locale) });
    }
    const Y = Math.max(1, Math.round(F / 30) / 2);
    return Y < 8 ? Pa(Ye.walkHours, { hours: pa(Y, x.locale) }) : Ye.walkDay;
  }
  function No(x) {
    re.categories === void 0 && ka(x);
    const S = mt(x), C = (we) => we.map((Pe) => x.states[Pe]).filter(Mr), F = C(S.air), Y = C(S.pollen);
    if (!F.length && !Y.length) return "";
    const X = [...F, ...Y], se = (we) => Y.includes(we) ? ba.flower : ba.airFilter, be = X.find((we) => we.entity_id === N.aq);
    return be ? Ut(x, be, se(be)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + qe(Ye.airQuality) + '</h2></div><div class="wbAqTiles">' + X.map((we) => '<button class="wbTile" data-wb="aq-open" data-entity="' + qe(we.entity_id) + '"><span class="wbChip">' + ns(se(we)) + '</span><span class="wbText"><span class="wbName">' + qe(Fs(x, we)) + '</span><span class="wbSub">' + qe(xr(x, we)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Ut(x, S, C) {
    var _e, ke, Ge;
    const F = ((_e = S.attributes) == null ? void 0 : _e.unit_of_measurement) ?? "", Y = ((ke = S.attributes) == null ? void 0 : ke.device_class) === "pm25" && F === Lc && Kt(S.state), X = Number(S.state), se = Y ? Rc(X) : void 0, be = ((Ge = re.aqHistory) == null ? void 0 : Ge.entityId) === S.entity_id ? re.aqHistory.points : void 0, we = (Re) => Math.min(100, Math.max(0, Re / Il * 100));
    let Pe;
    if (be && be.length > 1) Pe = Kf(be, (Re) => (pa(Re, x.locale, { maximumFractionDigits: 1 }) + " " + F).trim());
    else if (se) {
      let Re = 0;
      const Fe = yp.map(([Ze, ze]) => {
        const Ce = we(Math.min(ze, Il)), tt = mf[Ze] + " " + Re + "% " + Ce + "%";
        return Re = Ce, tt;
      });
      Pe = '<div class="wbScale" role="meter" aria-label="' + qe(Ye.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Il + '" aria-valuenow="' + X + '" style="background:linear-gradient(to right, ' + Fe.join(", ") + ')"><i style="left:' + we(X) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Il + " " + Lc + "</span></div>";
    } else Pe = '<span class="wbGraphNote"><span>' + qe(xr(x, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ns(C) + '</span><span class="wbText"><span class="wbName">' + qe(Fs(x, S)) + '</span><span class="wbSub">' + qe(xr(x, S)) + (se ? " · " + qe(Ye.aqLevel[se]) : "") + '</span></span><button class="wbBack" title="' + qe(Ye.back) + '" data-wb="aq-close">' + ns(ba.back) + '</button></div><div class="wbGraph">' + Pe + "</div></div></div>";
  }
  const Un = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ya = (x) => x <= 50 ? "Good" : x <= 100 ? "Moderate" : x <= 150 ? "Unhealthy for some" : x <= 200 ? "Unhealthy" : x <= 300 ? "Very unhealthy" : "Hazardous";
  function Yn(x) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(x.states || {}).filter((C) => {
      var F;
      return C.entity_id.startsWith("sensor.") && Gl.includes(((F = C.attributes) == null ? void 0 : F.device_class) ?? "") && Mr(C) && is(x, C.entity_id);
    }).sort((C, F) => C.entity_id.localeCompare(F.entity_id)).forEach((C) => {
      S.has(C.attributes.device_class) || S.set(C.attributes.device_class, C);
    }), Gl.map((C) => S.get(C)).filter(Boolean);
  }
  const Zn = (x) => Object.values(x.states || {}).filter((S) => {
    var C, F;
    return S.entity_id.startsWith("sensor.") && Mr(S) && is(x, S.entity_id) && (((F = (C = x.entities) == null ? void 0 : C[S.entity_id]) == null ? void 0 : F.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), la = ["none", "very_low", "low", "moderate", "high", "very_high"], An = (x) => Kt(x.state) ? Number(x.state) : la.indexOf(String(x.state).toLowerCase().replace(/ /g, "_")), fn = (x) => {
    const S = String(x).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, Po = (x) => x.length ? '<div class="wbBaseRows">' + x.map(([S, C]) => '<span class="wbBaseRow"><span>' + qe(S) + "</span><span>" + qe(C) + "</span></span>").join("") + "</div>" : "";
  function Fi(x) {
    const S = Yn(x), C = S[0];
    if (!C) return pn({ icon: ba.airFilter, name: Ye.airQuality, sub: Ye.noAir, visual: Bi("–", ""), cls: "wbBase" });
    const F = C.attributes.device_class, Y = Number(C.state), X = Kt(C.state), se = F === "aqi" && X ? Ya(Y) : F === "pm25" && X ? Un[Rc(Y)] : xr(x, C);
    return pn({
      icon: ba.airFilter,
      name: Ye.airQuality,
      sub: se,
      cls: "wbBase",
      visual: Bi(X ? pa(Math.round(Y), x.locale) : String(C.state), F === "aqi" ? "AQI" : C.attributes.unit_of_measurement || "") + Po(S.slice(1, 3).map((be) => [Fs(x, be), xr(x, be)]))
    });
  }
  function Oi(x) {
    const S = Zn(x).sort((Y, X) => An(X) - An(Y));
    if (!S.length) return pn({ icon: ba.flower, name: Ye.pollen, sub: Ye.noPollen, visual: Bi("–", ""), cls: "wbBase" });
    const C = S[0], F = (Y) => Kt(Y.state) ? xr(x, Y) : fn(Y.state);
    return pn({
      icon: ba.flower,
      name: Ye.pollen,
      sub: Fs(x, C) + " · " + F(C),
      cls: "wbBase",
      visual: Bi(F(C), "") + Po(S.slice(1, 3).map((Y) => [Fs(x, Y), F(Y)]))
    });
  }
  function ss(x) {
    const S = Date.now(), C = k("hourly").filter((X) => {
      const se = new Date(X.datetime).getTime();
      return se > S - Ft && se < S + 12 * Ft;
    }), F = C.find((X) => (X.precipitation_probability ?? 0) >= 50 || (X.precipitation ?? 0) >= 0.2), Y = F ? Pa(Ye.rainFrom, { time: Ao(new Date(Math.max(S, new Date(F.datetime).getTime())), x) }) : C.length ? Ye.noRain12 : void 0;
    return pn({ icon: ba.radar, name: Ye.rainRadar, sub: Y, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Dt = {
    current: Ea,
    hourly: qt,
    sun: zn,
    moon: Ue,
    wind: nt,
    uv_index: jt,
    compared_to_average: Ro,
    humidity: Fa,
    pressure: ta,
    precipitation: sa,
    visibility: Vn,
    air_quality: No,
    aq_tile: Fi,
    pollen_tile: Oi,
    radar_tile: ss
  };
  function ua(x) {
    var Pe, _e, ke;
    const S = l == null ? void 0 : l();
    if (!S || Z) return;
    const C = Ia(S);
    me(S, C), re.lastFetch || Xe();
    const F = mt(S), Y = Pc(S), X = Ed(S), se = [
      ...C.map((Ge) => S.states[Ge]),
      S.states["sun.sun"],
      Y && S.states[Y],
      X && S.states[X],
      ...F.air.map((Ge) => S.states[Ge]),
      ...F.pollen.map((Ge) => S.states[Ge]),
      ...U.some((Ge) => ie.includes(Ge)) ? [...Yn(S), ...Zn(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / so)
    ];
    if (!x && G && se.length === G.length && se.every((Ge, Re) => Ge === G[Re])) return;
    G = se;
    const be = R.getRootNode(), we = be.activeElement || document.activeElement;
    for (const Ge of U) {
      const Re = ae[Ge];
      let Fe = "";
      try {
        Fe = Dt[Ge](S, C) || "";
      } catch {
        Fe = "";
      }
      if (Fe === Re.html) continue;
      const Ze = we && Re.el.contains(we) ? (Pe = we.dataset) == null ? void 0 : Pe.wbFocus : void 0, ze = Re.el.querySelector(".wbStripScroll"), Ce = ze ? ze.scrollLeft : null;
      Re.html = Fe, Re.el.hidden = !Fe, Re.el.innerHTML = Fe;
      const tt = Re.el.querySelector(".wbStripScroll");
      tt && Ce != null ? tt.scrollTo({ left: Ce }) : tt != null && tt.dataset.start && tt.scrollTo({ left: Number(tt.dataset.start) * tt.clientWidth / Number(tt.dataset.span) }), Ze && !fe && ((_e = Re.el.querySelector('[data-wb-focus="' + Ze + '"]')) == null || _e.focus());
    }
    fe && ((ke = R.querySelector('[data-wb-focus="' + fe + '"]')) == null || ke.focus(), fe = null), _n(performance.now());
  }
  function co() {
    ee || Z || (ee = !0, queueMicrotask(() => {
      ee = !1, ua(!0);
    }));
  }
  function Lr() {
    const x = getComputedStyle(R), S = (se) => x.getPropertyValue(se).trim(), C = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([se, be]) => {
      S(be) && (C[se] = S(be));
    });
    const F = S("--color-text-primary") || "#f1f1f1", Y = S("--color-bg-card") || "#222222", X = !!R.closest(".light");
    return { colors: { ...nn, ...C }, ink: X ? F : Y, paper: X ? Y : F };
  }
  const Za = (x, S) => {
    var C;
    x.width !== S.w && (x.width = S.w), x.height !== S.h && (x.height = S.h), (C = x.getContext("2d")) == null || C.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, St = () => h && !kf();
  function na(x, S) {
    R.querySelectorAll("canvas[data-wb-strip]").forEach((C) => At(C, Ie[C.dataset.wbStrip], x, S));
  }
  function At(x, S, C, F) {
    if (!S || !x.getClientRects().length) return;
    const Y = x.clientWidth, X = x.clientHeight;
    if (!Y || !X) return;
    const se = { width: Y, height: X, columns: S.columns || Mc, colors: F.colors, clock: C, ambient: St(), seed: S.seed, soft: 1.5 };
    if (c === "smooth") {
      const be = Math.min(2, window.devicePixelRatio || 1), we = Math.round(Y * be), Pe = Math.round(X * be);
      x.width !== we && (x.width = we), x.height !== Pe && (x.height = Pe);
      const _e = x.getContext("2d");
      if (!_e) return;
      _e.setTransform(be, 0, 0, be, 0, 0), Du(_e, S.segs, se);
    } else Za(x, Eu(S.segs, { ...se, px: 2, oneBit: c === "onebit", ink: F.ink, paper: F.paper }));
  }
  function _n(x) {
    if (Z) return;
    const S = Lr();
    if (c !== "smooth") {
      const C = St();
      R.querySelectorAll("canvas[data-wb-wx]").forEach((F) => {
        F.getClientRects().length && Za(F, dp(zd(F.dataset.wbWx, S.colors), { size: Number(F.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: x, idle: C }));
      });
    }
    R.querySelectorAll("canvas[data-wb-sea]").forEach((C) => {
      const F = C.clientWidth, Y = C.clientHeight, X = Number(C.dataset.wbSea), se = F + "x" + Y + ":" + X + ":" + S.colors.skyClearDay;
      !F || !Y || !(X > 0) || C.dataset.painted === se || (C.dataset.painted = se, Za(C, Uu(F, Y, X, S.colors)));
    }), na(x, S);
  }
  function Kn(x) {
    if (W = 0, !(Z || !St())) {
      if (!document.hidden)
        if (c === "smooth") na(x, Lr());
        else {
          const S = Math.floor(x / 100);
          S !== ue && (ue = S, _n(x));
        }
      W = requestAnimationFrame(Kn);
    }
  }
  function po() {
    R.classList.toggle("wbMotion", St()), !W && !Z && St() && (W = requestAnimationFrame(Kn));
  }
  function Da(x) {
    var C, F;
    const S = (F = (C = x.target).closest) == null ? void 0 : F.call(C, "[data-wb]");
    if (!(!S || !R.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          N.openDay = Number(S.dataset.index), N.opener = S.dataset.wbFocus, fe = "back-day";
          const Y = Tt()[N.openDay], X = !re.todayHistory || re.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - re.todayHistory.fetched > Qu;
          Y && ts(new Date(Y.datetime), /* @__PURE__ */ new Date()) && X && lt();
          break;
        }
        case "close-day":
          N.openDay = void 0, fe = N.opener, N.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          N.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          N.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          N.hourlyView = S.dataset.view;
          try {
            localStorage.setItem(J, N.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Y = R.querySelector(".wbStripScroll");
          Y && Y.scrollTo({ left: Number(S.dataset.hours) * Y.clientWidth / Number(Y.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          N.aq = S.dataset.entity, Lt(N.aq);
          break;
        case "aq-close":
          N.aq = void 0;
          break;
        default:
          return;
      }
      ua(!0);
    }
  }
  function En(x) {
    var S, C;
    x.key === "Escape" && N.openDay !== void 0 && ((C = (S = x.target).closest) != null && C.call(S, '[data-wb-open="day"]')) && (N.openDay = void 0, fe = N.opener, N.opener = void 0, ua(!0));
  }
  let hn = null;
  function si(x) {
    var C, F;
    const S = (F = (C = x.target).closest) == null ? void 0 : F.call(C, ".wbStripScroll");
    !S || x.button !== 0 || (hn = { startX: x.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", mn), window.addEventListener("mouseup", uo, { once: !0 }));
  }
  function mn(x) {
    const S = R.querySelector(".wbStripScroll");
    if (!hn || !S) return;
    const C = x.pageX - hn.startX;
    !hn.moved && Math.abs(C) > 1 && (hn.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = hn.left - C;
  }
  function uo() {
    hn = null, window.removeEventListener("mousemove", mn);
    const x = R.querySelector(".wbStripScroll");
    if (!x) return;
    x.classList.remove("wbDragging", "wbHeld");
    const S = [...x.querySelectorAll(".wbSnap")];
    if (S.length) {
      const C = S.reduce((F, Y) => Math.abs(Y.offsetLeft - x.scrollLeft) < Math.abs(F.offsetLeft - x.scrollLeft) ? Y : F);
      x.scrollTo({ left: C.offsetLeft, behavior: "smooth" });
    }
  }
  R.addEventListener("click", Da), R.addEventListener("keydown", En), R.addEventListener("mousedown", si);
  const $n = typeof ResizeObserver == "function" ? new ResizeObserver(() => _n(performance.now())) : null;
  $n == null || $n.observe(R);
  const Ka = (gn = window.matchMedia) == null ? void 0 : gn.call(window, "(prefers-reduced-motion: reduce)"), fo = () => {
    po(), _n(performance.now());
  };
  (Io = Ka == null ? void 0 : Ka.addEventListener) == null || Io.call(Ka, "change", fo);
  const Wi = [
    setInterval(() => {
      Ee = /* @__PURE__ */ new Date(), ua(!0);
    }, df),
    setInterval(() => {
      I = /* @__PURE__ */ new Date(), ua(!0);
    }, cf),
    setInterval(Xe, rf)
  ];
  return ua(!0), po(), {
    update() {
      ua(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      ua(!0);
    },
    setStyle(x) {
      !x || x === c || (c = x, R.dataset.style = c, ua(!0), po());
    },
    destroy() {
      var x;
      Z = !0, Wi.forEach(clearInterval), W && cancelAnimationFrame(W), W = 0, $n == null || $n.disconnect(), (x = Ka == null ? void 0 : Ka.removeEventListener) == null || x.call(Ka, "change", fo), uo(), R.removeEventListener("click", Da), R.removeEventListener("keydown", En), R.removeEventListener("mousedown", si), ["daily", "hourly"].forEach(L), R.remove();
    }
  };
}
const qs = "#E1E1E1", Oc = "#F7F4F0", Dd = "#03a9f4", Ct = 14, Et = 172;
let th = 0;
const Qt = (n) => Math.round(n * 100) / 100, Do = (n, l, o) => Math.max(l, Math.min(o, n)), oi = (n, l, o, c, h, v) => '<rect x="' + Qt(n) + '" y="' + Qt(l) + '" width="' + Qt(o) + '" height="' + Qt(c) + '" fill="' + h + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Bd = (n) => n.map((l, o) => (o ? "L" : "M") + Qt(l[0]) + " " + Qt(l[1])).join("");
function Rd(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Ri = [
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
  const l = n < 2 ? n + 24 : n;
  let o = Ri[0], c = Ri[Ri.length - 1];
  for (let A = 0; A < Ri.length - 1; A++) if (l >= Ri[A][0] && l <= Ri[A + 1][0]) {
    o = Ri[A], c = Ri[A + 1];
    break;
  }
  const h = (l - o[0]) / (c[0] - o[0]), v = h * h * (3 - 2 * h), w = (A, y) => {
    const R = parseInt(A.slice(1), 16), ve = parseInt(y.slice(1), 16);
    return "#" + [16, 8, 0].map((ie) => Math.round((R >> ie & 255) + ((ve >> ie & 255) - (R >> ie & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * v, t: l };
}
function nh(n) {
  const l = parseInt(n.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, h = (l & 255) / 255, v = Math.max(o, c, h), w = Math.min(o, c, h);
  let A = 0, y = 0;
  const R = (v + w) / 2;
  if (v !== w) {
    const ve = v - w;
    y = R > 0.5 ? ve / (2 - v - w) : ve / (v + w), A = (v === o ? (c - h) / ve + (c < h ? 6 : 0) : v === c ? (h - o) / ve + 2 : (o - c) / ve + 4) / 6;
  }
  return [A * 360, y * 100, R * 100];
}
function Rp(n, l, o) {
  l = Do(l, 0, 100) / 100, o = Do(o, 0, 100) / 100;
  const c = (w) => (w + n / 30) % 12, h = l * Math.min(o, 1 - o), v = (w) => o - h * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Np, Pp, Ip] = nh(qs), Wc = Rp(Np, Pp, Math.max(6, Ip - 14)), oh = Rp(Np, Pp, Math.min(96, Ip + 16));
function ih(n, l, o, c, h) {
  const v = Et / 2, w = Et * 0.12, A = v - (v - w) * n, y = (ae) => ae ** 1.3, R = Do(o, -1.5, 1.5), ve = (ae) => -(Math.abs(R) * 4.6 * ae ** 1.5) * Math.sign(R), ie = n * 1.4, U = (ae, Z) => {
    const G = Math.min(4.8, Math.abs(o) * 2.6) * (Z ? 1 : -1) * Math.sign(o || 1), W = Z ? ae + A : ae, ue = Z ? ae : ae + A, ee = (Ee) => W + ve(Ee) + G * Math.sin(Ee * Math.PI * 1.2 + c) * y(Ee) * 1.4 + ie * Math.sin(Ee * Math.PI * 2 + c * 0.6) * y(Ee) * (Z ? 1 : -1), fe = [[ue, Ct]];
    for (let Ee = 0; Ee <= 12; Ee++) fe.push([ee(Ee / 12), Ct + Et * Ee / 12]);
    fe.push([ue, Ct + Et]);
    let J = '<path d="' + Bd(fe) + 'Z" fill="' + qs + '"/>';
    if (h) return J;
    const E = 1.35 + ((Z ? o > 0 : o < 0) ? 0.35 : 0), N = (Ee) => {
      const I = Ee / 7, Ie = Z ? 1 - I : I, V = (1 - Ie) ** 1.3, We = ae + A * I;
      return Array.from({ length: 13 }, (k, _) => {
        const L = _ / 12;
        return [We + ve(L) * V + G * E * Math.sin(L * Math.PI * 1.2 + c - Ie * 3.2) * y(L) * 1.4 * V + ie * 1.6 * Math.sin(L * Math.PI * 2 + c * 0.6 - Ie * 2.5) * y(L) * n * (0.4 + 0.6 * V), Ct + Et * L];
      });
    }, re = [1, 2, 3, 4, 5, 6].map(N);
    for (let Ee = 0; Ee < 6; Ee += 2) J += '<path d="' + Bd(re[Ee]) + Bd(re[Ee + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return J;
  }, $ = v - (v - w) * l;
  return { body: U(Ct, !0) + U(Ct + Et - A, !1), rails: [{ x: Ct + $ - 4, y: Ct, w: 4, h: Et }, { x: Ct + Et - $, y: Ct, w: 4, h: Et }], head: 6.4 };
}
function rh(n, l, o) {
  const c = Et * (1 - n);
  let h = "";
  if (c > 1 && (h += oi(Ct, Ct, Et, c, qs), !o))
    for (let v = 1; v < 7; v += 2) h += oi(Ct + Et * v / 7, Ct, Et / 7, c, "#fff");
  return { body: h, rails: [{ x: Ct, y: Ct + Et * (1 - l) - 7, w: Et, h: 11 }], head: 10.4 };
}
function sh(n, l, o, c) {
  const h = 9 - 7 * (o / 100), v = Ct + Et * (1 - n), w = Math.ceil(Et / 10) + 1, A = Ct + h / 2, y = (Ct + Et - h / 2 - A) / (w - 1), R = 0.8, ve = 0.6, ie = Array.from({ length: w }, (ae, Z) => Math.max(A + Z * ve, Math.min(A + Z * y, v - h / 2 - (w - 1 - Z) * ve))), U = ie.slice(0, -1).map((ae, Z) => Do((ie[Z + 1] - ae - ve) / (y - ve), 0, 1));
  U.push(U[w - 2]);
  let $ = "";
  return ie.forEach((ae, Z) => {
    const G = R + (h - R) * U[Z], W = Math.max(0.5, G / 2), ue = Math.max(0.4, G * 0.114);
    $ += oi(Ct, ae - W, Et, Math.max(1, G), qs), !c && G > 2.2 && ($ += oi(Ct, ae + W - ue, Et, ue, Wc) + oi(Ct, ae - W, Et, ue * 0.55, oh, 0.75));
  }), c || [0.22, 0.78].forEach((ae) => {
    $ += oi(Ct + Et * ae - 0.7, Ct, 1.4, Math.max(0, ie[w - 1] + 1 - Ct), Wc, 0.85);
  }), { body: $, rails: [{ x: Ct, y: Ct + Et * (1 - l) - 8, w: Et, h: 8 }], head: 8.8 };
}
const qc = (n, l, o, c, h, v, w) => n === "curtain" ? ih(l, o, h, v, w) : n === "venetian" ? sh(l, o, c, w) : rh(l, o, w);
function lh(n, l) {
  let o = "", c = "";
  return l.forEach((h) => {
    const v = h.w > h.h, w = Do(v ? Ct + Et / 2 : h.x + h.w / 2, 17, 183), A = Do(v ? h.y + h.h / 2 : Ct + Et / 2, 17, 183);
    o += v ? oi(Ct, Do(h.y + h.h / 2, Ct, Ct + Et) - 1, Et, 2, Dd) : oi(Do(h.x + h.w / 2, Ct, Ct + Et) - 1, Ct, 2, Et, Dd);
    const y = v ? "M" + Qt(w - 4) + " " + Qt(A - 3) + "l4 -3l4 3M" + Qt(w - 4) + " " + Qt(A + 3) + "l4 3l4 -3" : "M" + Qt(w - 3) + " " + Qt(A - 4) + "l-3 4l3 4M" + Qt(w + 3) + " " + Qt(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Qt(w) + '" cy="' + Qt(A) + '" r="11" fill="' + Dd + '" filter="url(#' + n + 's)"/><path d="' + y + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function dh(n, l) {
  const o = /* @__PURE__ */ new Date(), c = ah(o.getHours() + o.getMinutes() / 60), h = 42 + 18 * Math.sin(c.t * 0.5), v = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = qc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? qc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", y = l.grip > 4e-3 ? lh(n, w.rails) : null, R = (ve) => oi(Ct, Ct, Et, Et, ve);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Qt(h) + '%" cy="' + Qt(v) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Qt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Qt(100 - h * 0.8) + '%" cy="' + Qt(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Qt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Oc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + R("url(#" + n + "l)") + R("url(#" + n + "w)") + R("url(#" + n + "k)") + (A ? '<g opacity="' + Qt(l.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + qs + '" filter="url(#' + n + 's)"/></g>' + (y ? '<g clip-path="url(#' + n + 'c)" opacity="' + Qt(l.grip) + '">' + y.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Oc + '" stroke-width="3"/>' + (y ? '<g opacity="' + Qt(l.grip) + '">' + y.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: l }) {
  var J;
  const o = "cv" + ++th, c = document.createElement("div");
  c.className = "tfCoverArt";
  const h = (J = window.matchMedia) == null ? void 0 : J.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, y = !1, R = !1, ve = null, ie = 0, U = 0;
  const $ = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", ae = () => ve || y || R || v.moving || v.target != null ? 1 : h ? performance.now() < U ? 1 : 0.4 : 0, Z = () => {
    c.innerHTML = dh(o, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function G(E) {
    A = 0;
    const N = w.last ? Math.min(0.064, (E - w.last) / 1e3) : 1 / 60, re = N * 60;
    w.last = E;
    const Ee = v.pos - w.pos, I = w.pos;
    w.pos += Math.sign(Ee) * Math.min(Math.abs(Ee), Math.max(10.5, Math.abs(Ee) * 1.4) * N), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - I) / re * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== I || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * re);
    const Ie = v.tilt - w.tilt;
    w.tilt += Math.sign(Ie) * Math.min(Math.abs(Ie), Math.max(60, Math.abs(Ie) * 4) * N);
    const V = ae();
    w.grip += (V - w.grip) * Math.min(1, N * (V > w.grip ? 11 : 3.5)), Math.abs(V - w.grip) < 0.01 && (w.grip = V);
    const We = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (We - w.ghost) * Math.min(1, N * (We > w.ghost ? 16 : 3)), Math.abs(We - w.ghost) < 4e-3 && (w.ghost = We), Z(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== V || w.ghost !== We ? A = requestAnimationFrame(G) : w.last = 0;
  }
  const W = () => {
    v && !A && (A = requestAnimationFrame(G));
  }, ue = setInterval(() => {
    v && !A && Z();
  }, 60 * 1e3), ee = (E) => {
    const N = c.getBoundingClientRect();
    return $() === "x" ? (E.clientX - N.left) / N.width : (E.clientY - N.top) / N.height;
  };
  c.addEventListener("pointerdown", (E) => {
    var Ee;
    if (!(v != null && v.canSet) || E.button > 0) return;
    E.preventDefault(), (Ee = c.setPointerCapture) == null || Ee.call(c, E.pointerId);
    const N = v.target ?? v.pos, re = c.getBoundingClientRect();
    ve = { p0: ee(E), from: N, x0: E.clientX, value: null, side: null }, v.kind === "curtain" && N > 0 && (ve.side = (E.clientX - re.left) / re.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (E) => {
    if (!ve) return;
    let N;
    if (v.kind === "curtain") {
      if (!ve.side) {
        const Ee = E.clientX - ve.x0;
        if (Math.abs(Ee) < 4) return;
        ve.side = Ee < 0 ? "L" : "R";
      }
      const re = (Et / 2 - Et * 0.12) / 200;
      N = ve.from + (ve.side === "L" ? -1 : 1) * ((ee(E) - ve.p0) / re) * 100;
    } else N = ve.from - (ee(E) - ve.p0) / (Et / 200) * 100;
    ve.value = Do(N, 0, 100), n(ve.value);
  });
  const fe = () => {
    if (!ve) return;
    const E = ve.value;
    ve = null, E != null && l(Math.round(E)), W();
  };
  return c.addEventListener("pointerup", fe), c.addEventListener("pointercancel", fe), c.addEventListener("lostpointercapture", fe), c.addEventListener("pointerenter", () => {
    y = !0, W();
  }), c.addEventListener("pointerleave", () => {
    y = !1, W();
  }), c.addEventListener("focus", () => {
    R = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    R = !1, W();
  }), c.addEventListener("keydown", (E) => {
    if (!(v != null && v.canSet)) return;
    const N = Math.round(v.target ?? v.pos), re = E.shiftKey ? 10 : 1, Ee = { ArrowUp: N + re, ArrowRight: N + re, ArrowDown: N - re, ArrowLeft: N - re, PageUp: N + 25, PageDown: N - 25, Home: 0, End: 100 }[E.key];
    if (Ee == null) return;
    E.preventDefault();
    const I = Do(Ee, 0, 100);
    n(I), clearTimeout(ie), ie = setTimeout(() => l(I), 500);
  }), {
    el: c,
    update(E) {
      const N = !v;
      v = E, N && (w.pos = v.pos, w.tilt = v.tilt, U = performance.now() + 1500, h && setTimeout(W, 1600)), c.classList.toggle("x", $() === "x"), c.classList.toggle("y", $() === "y"), v.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), c.setAttribute("aria-orientation", $() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), c.setAttribute("aria-valuetext", v.text), W();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(ue), clearTimeout(ie), c.remove();
    }
  };
}
const jc = "move-assistant-density", Ni = {
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
}, de = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Nd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', zc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Hl = {
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
}, $c = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Pd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Xc = "move_assistant_house", Jc = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], Qc = "move-assistant-house-look", yh = [["popup", "Popup"], ["sheet", "Sheet"]], kh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Mh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Sh = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Id = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Ch = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', ep = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', tp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Hp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", np = Hp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Lh = Hp(["M20 6L9 17L4 12"]), _o = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + de(n || "") + '"' + (l ? ' data-icon-name="' + de(l) + '"' : "") + "></span>", Ah = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', _h = 1, Eh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], op = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Hd = ["hs", "xy", "rgb", "rgbw", "rgbww"], Fl = ["door", "window", "garage_door", "opening"], ip = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Ol = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Dh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Bh = 10, Rh = 20, Nh = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ph = ["living room", "bedroom", "office"];
function Ih(n, { config: l, getHass: o }) {
  var Ns, aa, Ml;
  const c = (e) => n.getElementById(e), h = c("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = Ni.get(jc) === "1", y = {};
  const R = (e) => {
    var a;
    return (a = o()) == null ? void 0 : a.callWS(e);
  }, ve = (e, a, i) => R({ type: "call_service", domain: e, service: a, service_data: i }), ie = n.querySelector("#appearancePane .toggleList");
  ie && !c("densityToggle") && (ie.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, Ni.set(jc, A ? "1" : "0"), J();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && yt(e).device_class === "power" && /^(W|kW)$/.test(yt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], $ = (e, a, i, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + a + '">' + d.map(([u, m]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + u + '">' + m + "</button>").join("") + "</div>", ae = (e, a, i, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + i + "</div>";
  function Z() {
    var M, D, H, O, pe, Te;
    if (!w || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (Le, Q) => '<div class="houseTab' + (Le === "look" ? " active" : "") + '" data-house-pane="' + Le + '"><section class="card">' + Q + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([Le, Q]) => '<button class="tab segBtn' + (Le === "look" ? " active" : "") + '" type="button" data-house-tab="' + Le + '">' + Q + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + U.map(([Le, Q, xe]) => ae(Q, xe, '<select class="settingsSelect" data-source="' + Le + '" aria-label="' + Q + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Pd).map(([Le, Q]) => ae(Q.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Le + '" aria-label="' + Q.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(M = e.querySelector(".themeBtn")) == null ? void 0 : M.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (H = c("moreInfoChoice")) == null ? void 0 : H.closest(".toggleRow"), (O = c("namesChoice")) == null ? void 0 : O.closest(".toggleRow"), (pe = c("hoursChoice")) == null ? void 0 : pe.closest(".toggleRow"), (Te = c("wxStyleChoice")) == null ? void 0 : Te.closest(".toggleRow")].forEach((Le) => Le && d.appendChild(Le)), d.insertAdjacentHTML("beforeend", ae("Lights", "How lights show on the house page.", $("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ae("Pad", "What the Dual Axis Controller’s pad sets on its tile.", $("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const u = c("housePane"), m = u.querySelector(".houseTabs"), f = m.querySelector(".rubberIndicator"), b = (Le) => {
      const Q = m.querySelector(".tab.active");
      f.style.transition = Le ? "" : "none", f.style.left = Q.offsetLeft + "px", f.style.width = Q.offsetWidth + "px", Le && (f.style.transform = "scaleX(1.08)", setTimeout(() => f.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(m), u.addEventListener("click", (Le) => {
      const Q = Le.target.closest("[data-house-tab]");
      if (Q) {
        m.querySelectorAll(".tab").forEach((le) => le.classList.toggle("active", le === Q)), u.querySelectorAll(".houseTab").forEach((le) => le.classList.toggle("active", le.dataset.housePane === Q.dataset.houseTab)), Q.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const xe = Le.target.closest("[data-light-fav]");
      if (xe) {
        Ys(xe.dataset.lightFav);
        return;
      }
      const q = Le.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!q || q.disabled)) {
        if (q.dataset.lights && (mt.lights = q.dataset.lights), q.dataset.dacPad && (mt.dacPad = q.dataset.dacPad), (q.dataset.lights || q.dataset.dacPad) && (Je(), ze.clear()), q.dataset.sumToggle) {
          const le = q.dataset.sumToggle, K = new Set(z.hiddenSums || []);
          K.has(le) ? K.delete(le) : K.add(le), z = { ...z, hiddenSums: [...K] }, Ia();
        }
        ro();
      }
    }), u.addEventListener("change", (Le) => {
      const Q = Le.target;
      Q.dataset.source && (z = { ...z, sources: { ...z.sources || {}, [Q.dataset.source]: Q.value || void 0 } }, Ia());
      const xe = Q.dataset.lightStyle || Q.dataset.lightPad;
      if (xe) {
        const q = Q.dataset.lightStyle ? "lightStyles" : "lightPads", le = { ...mt[q] };
        Q.value ? le[xe] = Q.value : delete le[xe], mt[q] = le, Je(), [...ze.keys()].filter((K) => K.endsWith(":" + xe)).forEach((K) => ze.delete(K));
      }
      ro();
    });
  }
  function G() {
    var b, M;
    tt() && Ze();
    const e = c("housePane");
    if (!e) return;
    const a = !!customElements.get(Ge);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === mt.lights))), c("lightsRow").querySelector(".status").textContent = a || !tt() ? "How lights show on the house page." : Fe === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === mt.dacPad))), c("dacPadRow").hidden = !tt();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === n.activeElement) continue;
      const [H] = U.find(([pe]) => pe === D.dataset.source), O = Object.keys(y).filter(U.find(([pe]) => pe === H)[3]).sort((pe, Te) => Me(pe).localeCompare(Me(Te)));
      D.dataset.sig !== O.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + O.map((pe) => '<option value="' + de(pe) + '">' + de(Me(pe)) + "</option>").join(""), D.dataset.sig = O.join(",")), D.value = O.includes((b = z.sources) == null ? void 0 : b[H]) ? z.sources[H] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const H = !(z.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", H), D.setAttribute("aria-checked", String(H));
    });
    const i = c("lightRows"), d = i != null && i.contains(n.activeElement) ? n.activeElement : null;
    if (!i || d != null && d.matches("select")) return;
    const u = new Set(Ba()), m = (D, H, O, pe) => '<option value="' + D + '"' + (D === O ? " selected" : "") + ">" + H + "</option>", f = Object.keys(y).filter((D) => D.startsWith("light.")).sort((D, H) => !Lt.get(D) - !Lt.get(H) || (Lt.get(D) || "").localeCompare(Lt.get(H) || "") || Me(D).localeCompare(Me(H))).map((D) => {
      const H = mt.lightStyles[D] || "", O = mt.lightPads[D] || "", pe = u.has(D), Te = de(Me(D));
      return "<tr><td><strong>" + Te + "</strong></td><td>" + de(Lt.get(D) || "—") + "</td><td>" + de(la(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (pe ? " on" : "") + '" type="button" role="switch" aria-checked="' + pe + '" data-light-fav="' + de(D) + '" aria-label="' + Te + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + de(D) + '" aria-label="' + Te + ' tile">' + m("", "Default", H) + m("tile", "HomeCore tile", H) + m("dac", "Dual Axis Controller", H) + '</select></td><td><select class="settingsSelect" data-light-pad="' + de(D) + '" aria-label="' + Te + ' pad"' + (Ce(D) ? "" : " disabled") + ">" + m("", "Default", O) + m("temperature", "Temperature", O) + m("colour", "Colour", O) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== f && (i.innerHTML = f, i.dataset.html = f, d != null && d.dataset.lightFav && ((M = i.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || M.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, h.appendChild(W);
  let ue = 0;
  function ee() {
    if (!A) return;
    const e = c("homeView"), a = (m) => m.offsetParent !== null && !m.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((m) => {
      a(m) && (m.dataset.h = Math.round(m.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), d = window.innerHeight, u = i.filter((m) => {
      const f = m.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + u + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const fe = () => {
    A && requestAnimationFrame(ee);
  };
  function J() {
    var e;
    h.classList.toggle("showDensity", A), (e = c("densityToggle")) == null || e.classList.toggle("on", A), W.hidden = !A, clearInterval(ue), A && (ue = setInterval(ee, 1e3), ee());
  }
  window.addEventListener("scroll", fe, { capture: !0, passive: !0 }), window.addEventListener("resize", fe, { passive: !0 });
  const E = n.querySelector("#homeView .grid");
  let N = null, re = null, Ee = null, I = null;
  const Ie = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), k = 6;
  let _ = null;
  const L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map();
  let z = { favourites: null }, ce = {}, ge = {}, ye = [], Xe = null;
  const lt = (() => {
    try {
      return JSON.parse(Ni.get(Jc)) || {};
    } catch {
      return {};
    }
  })();
  let Lt = /* @__PURE__ */ new Map(), ka = 0;
  function Ia() {
    clearTimeout(ka), ka = setTimeout(() => Promise.resolve(R({ type: "frontend/set_user_data", key: Xc, value: z })).catch(() => {
    }), 400);
  }
  const mt = (() => {
    let e = {};
    try {
      e = JSON.parse(Ni.get(Qc)) || {};
    } catch {
    }
    const a = (i, d) => Object.fromEntries(Object.entries(i || {}).filter(([, u]) => d.includes(u)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(e.hoursWindow) ? e.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(e.wxStyle) ? e.wxStyle : "bitmap",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: a(e.lightStyles, ["tile", "dac"]),
      lightPads: a(e.lightPads, ["temperature", "colour"])
    };
  })(), Je = () => Ni.set(Qc, JSON.stringify(mt)), Tt = () => {
    h.dataset.more = mt.more, h.dataset.names = mt.names, oa();
  };
  w && ie && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + yh.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.more === e) + '" data-more-style="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-more-style]");
    a && (mt.more = a.dataset.moreStyle, Je(), Tt(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + kh.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.names === e) + '" data-names-style="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-names-style]");
    a && (mt.names = a.dataset.namesStyle, mt.namesPicked = !0, Je(), Tt(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Mh.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.hoursWindow === e) + '" data-hours-window="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-hours-window]");
    a && (mt.hoursWindow = a.dataset.hoursWindow, Je(), Ke == null || Ke.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Sh.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.wxStyle === e) + '" data-wx-style="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-wx-style]");
    a && (mt.wxStyle = a.dataset.wxStyle, Je(), Ke == null || Ke.setStyle(mt.wxStyle), Ot == null || Ot.forEach((i) => i.setStyle(mt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  })), Z();
  let Qe = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const wa = /* @__PURE__ */ new Map();
  let Ea = "";
  const Sr = w ? mu({ onChange: () => da() }) : null;
  w && h.classList.add("house");
  const dt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ke = null, xt = null, Bo = !1;
  function Cr(e) {
    const a = xn();
    if (h.classList.toggle("houseBento", !!a), Ke && (xt !== a || e == null) && (Ke.destroy(), Ke = null), !a || e == null) {
      dt.remove();
      return;
    }
    dt.isConnected || E.append(dt), dt.style.order = e, !Ke && !Bo && (Ke = Fc(dt, { getHass: o, entityId: a, style: mt.wxStyle, hoursWindow: () => mt.hoursWindow }), xt = a);
  }
  const Ii = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], Ma = ["aq", "pollen", "radar"], ft = Object.fromEntries(Ii.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let Ot = null, Tr = null;
  function ii(e) {
    const a = xn();
    Ot && Tr !== a && (Ot.forEach((i) => i.destroy()), Ot = null), Object.values(ft).forEach((i) => a ? !i.isConnected && E.append(i) : i.remove()), a && !Ot && !Bo && (Ot = Ii.map(([i, d]) => Fc(ft[i], { getHass: o, entityId: a, style: mt.wxStyle, cards: d, onOpen: i === "wx" ? () => zr("weather") : void 0 })), Tr = a);
  }
  const yt = (e) => {
    var a;
    return ((a = y[e]) == null ? void 0 : a.attributes) || {};
  }, Me = (e) => yt(e).friendly_name || e, qt = (e, a) => Di(e) || (Number(yt(e).supported_features) & a) === a, He = (e) => {
    const a = String(e ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ha = (e, a = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), zn = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Hi = (e) => yt(e).supported_color_modes || [], Ue = (e) => {
    const a = e / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, nt = (e, a) => [5, 3, 1].map((i) => {
    const d = (i + e / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), jt = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Ro = (e) => {
    const a = 0.2126 * jt(e[0]) + 0.7152 * jt(e[1]) + 0.0722 * jt(e[2]);
    return (a + 0.05) / 0.0664 > 1.05 / (a + 0.05);
  }, Fa = (e) => 0.2126 * jt(e[0]) + 0.7152 * jt(e[1]) + 0.0722 * jt(e[2]), ta = (e, a) => {
    const i = Fa(e), d = Fa(a);
    return (Math.max(i, d) + 0.05) / (Math.min(i, d) + 0.05);
  }, ri = (e, a) => {
    const i = Ro(e);
    for (let d = 0.1; d < 1; d += 0.02) {
      const u = e.map((m) => Math.round(i ? m * (1 - d) : m + (255 - m) * d));
      if (ta(u, e) >= a) return "rgb(" + u.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function sa(e) {
    const a = yt(e), i = (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? nt(...a.hs_color) : a.color_temp_kelvin ? Ue(a.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + ri(i, 3.5);
  }
  const Vn = (e) => {
    var a;
    return e.startsWith("light.") && ((a = y[e]) == null ? void 0 : a.state) === "on" ? ' data-light style="' + sa(e) + '"' : "";
  }, Gn = (e) => {
    const a = Hi(e);
    return a.length ? a.some((i) => i !== "onoff") : yt(e).brightness != null;
  }, No = (e) => [yt(e).min_color_temp_kelvin || 2e3, yt(e).max_color_temp_kelvin || 6500], Ut = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Un(e) {
    const a = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const i = Math.round(a / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(i / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const u = Math.round(d / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const Ya = (e) => {
    var a;
    return yt(e).current_position ?? (((a = y[e]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Yn = (e) => {
    var a;
    return Rn("pos", e, ((a = L.get(e)) == null ? void 0 : a.pos) ?? Ya(e));
  }, Zn = (e) => {
    var a;
    return Rn("tilt", e, ((a = L.get(e)) == null ? void 0 : a.tilt) ?? yt(e).current_tilt_position);
  };
  function la(e) {
    var f;
    const a = y[e];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const i = a.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (a.state !== "on") return "Off";
      const b = i.color_temp_kelvin;
      return (Gn(e) ? zn(a) + "%" : "On") + (i.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Hd.includes(i.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (a.state === "off" ? "Off" : He(i.hvac_action || a.state)) + " · " + Ha(i.current_temperature) + " °C now";
    if (d === "cover") {
      const b = Ya(e), M = i.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? He(a.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return a.state !== "on" ? "Off" : He(i.action || "on") + " · " + i.current_humidity + "% now";
    if (d === "vacuum") return He(a.state) + (a.state === "cleaning" && ((f = i.rooms) != null && f.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (d === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : He(a.state);
    if (d === "alarm_control_panel") return op[a.state] || He(a.state);
    if (d === "lock" || d === "valve") return He(a.state);
    if (d === "switch") return a.state === "on" ? "On" : "Off";
    if (d === "plant") return a.state === "ok" ? "Healthy" : He(i.problem);
    if (d === "binary_sensor")
      return i.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Fl.includes(i.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Ut(i.rang);
    const u = o();
    if (u != null && u.formatEntityState && !Di(e))
      try {
        return u.formatEntityState(a);
      } catch {
      }
    const m = Number(a.state);
    if (a.state !== "" && Number.isFinite(m)) {
      const b = Math.abs(m) >= 100 ? 0 : Math.abs(m) >= 10 ? 1 : 2, M = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return m.toLocaleString(void 0, { maximumFractionDigits: b }) + M + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return He(a.state);
  }
  const An = (e) => e >= 1e3 ? Ha(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function fn(e) {
    var i, d;
    const a = o();
    e.querySelectorAll("[data-icon-for]").forEach((u) => {
      var b;
      const m = y[u.dataset.iconFor], f = u.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && m && !f) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (u.textContent = "", M = document.createElement("ha-state-icon"), u.appendChild(M)), M.hass = a, M.stateObj = m;
      } else if (customElements.get("ha-icon")) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-icon") && (u.textContent = "", M = document.createElement("ha-icon"), u.appendChild(M)), M.icon = f || ((b = m == null ? void 0 : m.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else u.textContent || (u.textContent = (u.dataset.letter || Me(u.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = e.querySelectorAll) == null || i.call(e, ".tfIcon").forEach(Fi), (d = e.classList) != null && d.contains("tfIcon") && Fi(e), Lr();
  }
  const Po = /* @__PURE__ */ new Map();
  function Fi(e) {
    var m, f, b;
    const a = (((m = e.closest("[data-k]")) == null ? void 0 : m.dataset.k) || "") + "|" + (e.dataset.iconFor || ((f = e.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || e.getAttribute("aria-label") || ""), i = getComputedStyle(e), d = { backgroundColor: i.backgroundColor, color: i.color }, u = Po.get(a);
    Po.set(a, d), !(!u || u.backgroundColor === d.backgroundColor && u.color === d.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([u, d], { duration: 180, easing: "ease" });
  }
  const Oi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ss = (e) => {
    const a = [e];
    for (; a.length; ) {
      const i = a.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && a.push(...i.shadowRoot.children), a.push(...i.children);
    }
    return null;
  };
  function Dt(e) {
    var Te, Le, Q;
    const a = e.localName === "svg" ? e : ss(e), i = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !a;
    const d = (Te = e.closest(".tfIcon")) == null ? void 0 : Te.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const u = d + "|" + i.map((xe) => xe.getAttribute("d") || xe.localName).join("|");
    if (e.dataset.fitted === u) return !0;
    let m = 1 / 0, f = 1 / 0, b = -1 / 0, M = -1 / 0;
    for (const xe of i) {
      const q = xe.getBBox(), le = getComputedStyle(xe), K = le.stroke !== "none" ? (parseFloat(le.strokeWidth) || 0) / 2 : 0;
      !q.width && !q.height || (m = Math.min(m, q.x - K), f = Math.min(f, q.y - K), b = Math.max(b, q.x + q.width + K), M = Math.max(M, q.y + q.height + K));
    }
    if (!(b > m)) return !1;
    const D = (Q = (Le = a.viewBox) == null ? void 0 : Le.baseVal) != null && Q.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, H = d - 14, O = H * D.width / Math.max(b - m, M - f), pe = O / D.width;
    return e.localName === "svg" ? (e.style.width = O + "px", e.style.height = O + "px") : e.style.setProperty("--mdc-icon-size", O + "px"), a.style.translate = ((D.x + D.width / 2 - (m + b) / 2) * pe).toFixed(2) + "px " + ((D.y + D.height / 2 - (f + M) / 2) * pe).toFixed(2) + "px", e.dataset.fitted = u, !0;
  }
  let ua = 0;
  function co(e = 0) {
    clearTimeout(ua), [...n.querySelectorAll(Oi)].filter((i) => !Dt(i)).length && e < 5 && (ua = setTimeout(() => co(e + 1), 300));
  }
  function Lr() {
    clearTimeout(ua), ua = setTimeout(() => co(), 60);
  }
  const Za = (e) => {
    var a, i, d;
    return e.startsWith("light.") && y[e] && !yt(e).icon && !((d = (i = (a = o()) == null ? void 0 : a.entities) == null ? void 0 : i[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, St = (e, a, i) => (a = a || Za(e), ' data-icon-for="' + de(e) + '"' + (a ? ' data-icon-name="' + de(a) + '"' : "") + (i ? ' data-letter="' + de(i) + '"' : "")), na = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : yt(e).rang ? "mdi:doorbell" : "", At = (e, a, i, d) => de([e, a, i, d ? JSON.stringify(d) : ""].join("|")), _n = (e) => de(JSON.stringify(e));
  function Kn(e, a) {
    var u, m;
    const i = de(Me(a) + ", " + la(a));
    return '<div class="activityRow' + (Number.isFinite(Number((u = y[a]) == null ? void 0 : u.state)) && ((m = y[a]) == null ? void 0 : m.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + de(e + "|" + a) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + St(a, na(a)) + '></div><div><div class="activityRowName">' + de(Me(a)) + '</div><div class="activityRowMeta">' + de(la(a)) + "</div></div></div>";
  }
  const po = (e, a, i) => '<div class="activityRow" aria-label="' + de(e + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + St("", i, e) + '></div><div><div class="activityRowName">' + de(e) + '</div><div class="activityRowMeta">' + de(a) + "</div></div></div>";
  function Da(e) {
    var i;
    const a = ((i = y[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + At("switch", "toggle", e) + '" aria-label="Turn ' + de(Me(e)) + (a ? " off" : " on") + '"' + St(e) + '></button><button class="tfName" type="button" data-more="' + de(e) + '" aria-label="' + de(Me(e) + ", " + la(e) + ". More info") + '"><span class="activityRowName">' + de(Me(e)) + '</span><span class="activityRowMeta">' + de(la(e)) + "</span></button></div>";
  }
  const En = (e) => {
    var a;
    return ((a = V.get(e)) == null ? void 0 : a.name) ?? Me(e);
  }, hn = (e) => {
    var a;
    return ((a = V.get(e)) == null ? void 0 : a.text) ?? la(e);
  };
  function si(e) {
    var i;
    const a = (i = V.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? St("", a, En(e)) : St(e, na(e))) + '></div><div><div class="activityRowName">' + de(En(e)) + '</div><div class="activityRowMeta">' + de(hn(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + de(En(e)) + '’s last 24 hours">' + Nd + '</button></div><svg class="tfGraph" data-graph="' + de(e) + '" role="img" aria-label="' + de(En(e)) + ', last 24 hours"></svg></div>';
  }
  function mn(e, a, i, d, u = "", m = null, f = "") {
    const b = N && N.key === e;
    return '<section class="card tfCard' + (f ? " " + f : "") + (b ? " open" : "") + '" data-tf data-k="' + de(e) + '" style="order:' + a + (b && N.h ? ";min-height:" + N.h + "px" : "") + '" aria-label="' + de(i) + '"><div class="activityHeader">' + (m ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + de(m) + '" aria-label="' + de(i + (y[m] ? ", " + la(m) : "") + ". More info") + '">' + de(i) + "</button>" : '<div class="activityTitle">' + de(i) + "</div>") + "</div>" + (b ? si(N.id) : '<div class="activityRows">' + d.join("") + "</div>" + u) + "</section>";
  }
  function uo(e, a) {
    const i = "readings:" + e.id, d = e.readings.map((u) => Kn(i, u));
    return e.power != null && d.push(po("Power now", An(e.power), "mdi:flash")), mn(i, a, "Readings", d.concat(e.plugs.map(Da)));
  }
  function $n(e, a) {
    var b;
    const i = "energy:" + e.id, [d, u] = [e.solar.find((M) => M.endsWith("_power")), e.solar.find((M) => M.endsWith("_today"))], m = [d, u].filter(Boolean).map((M) => Kn(i, M)), f = Number(((b = y[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return Qe.grid && (m.push(Kn(i, Qe.grid)), m.push(po("House use", An(f + Number(y[Qe.grid].state)), "mdi:home-lightning-bolt"))), mn(i, a, "Energy", m, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Ka = (e, a) => mn("plant:" + e.id, a, Me(e.id), e.readings.map((i) => Kn("plant:" + e.id, i)), "", e.id);
  function fo(e, a, i, d, u, m, f = null) {
    const b = i == null ? null : Math.max(0, Math.min(1, i)), M = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + de(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (u ? ' aria-valuetext="' + de(u) + '"' : "") + ' data-drag="' + de(e + "|" + a) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (m ? b == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const Wi = "move-assistant-house-last-bright", gn = (() => {
    try {
      return JSON.parse(Ni.get(Wi)) || {};
    } catch {
      return {};
    }
  })();
  let Io = 0;
  const x = (e, a) => {
    !a || gn[e] === a || (gn[e] = a, clearTimeout(Io), Io = setTimeout(() => Ni.set(Wi, JSON.stringify(gn)), 500));
  }, S = (e, a, i, d) => '<div class="tfStep" role="group" aria-label="' + de(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + de(e.toLowerCase()) + '">' + Vc.down + "</button><output>" + de(a) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + de(e.toLowerCase()) + '">' + Vc.up + "</button></div>", C = (e, a, i) => '<div class="' + e + '" role="group" aria-label="' + de(a) + '">' + i.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + de(d.aria) + '"' : "") + ">" + (d.html || de(d.label)) + "</button>").join("") + "</div>", F = (e, a) => "width:" + Math.round(Math.max(0, Math.min(1, (e - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), Y = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", X = (e, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + de(Me(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + de(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + F(a, i) + '"></i><b' + (a >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Y(a) + '">' + Math.round(a) + "%</output></div>";
  function se(e, a) {
    e.querySelectorAll(":scope>span").forEach((d, u) => {
      d.firstElementChild.setAttribute("style", F(a, u)), d.lastElementChild.classList.toggle("lit", a >= (u + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", Y(a)), i.textContent = Math.round(a) + "%", e.setAttribute("aria-valuenow", String(Math.round(a))), e.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const be = (e, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + de(Me(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + de(e) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", we = (e, a, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + de(Me(e)) + '">' + [
    qt(e, mh) && ["open", "Open", "open_cover", a >= 100 && !i],
    qt(e, vh) && ["stop", "Stop", "stop_cover", !1],
    qt(e, gh) && ["close", "Close", "close_cover", a <= 0 && !i]
  ].filter(Boolean).map(([d, u, m, f]) => '<button type="button" data-act="' + At("cover", m, e) + '" aria-label="' + u + '"' + (f ? " disabled" : "") + ">" + bh[d] + "</button>").join("") + "</div>", Pe = (e, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + de(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + de(a.art) + '&quot;)"' : St(e, a.icon)) + "></button>", _e = (e) => '<button class="tfName" type="button" data-more="' + de(e) + '" aria-label="' + de(Me(e) + ", " + la(e) + ". More info") + '"><span class="activityRowName">' + de(Me(e)) + '</span><span class="activityRowMeta">' + de(la(e)) + "</span></button>";
  function ke(e, a = !1, i = null) {
    const d = ct(e), u = e.startsWith("light.") && it(e) && !(i && Pn(e) < 3), m = i || (a && e.startsWith("light.") ? ["bright"] : null), f = u ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : i ? "dash:" : "tile:") + de(e) + '"></div>'] : d.sections.map((b, M) => b && (!m || m.includes((d.parts || [])[M])) ? b : "").filter(Boolean);
    return '<div class="tfAction' + (u ? " tfDac" : "") + (d.on ? " on" : "") + '" data-k="' + de(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Vn(e) + '><div class="tfActionHead">' + Pe(e, d) + _e(e) + "</div>" + f.join("") + "</div>";
  }
  const Ge = "dual-controller-v3", Re = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Fe = null;
  async function Ze() {
    if (Fe || customElements.get(Ge)) return;
    Fe = "loading";
    const e = await Promise.resolve().then(() => R({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Ge), new Promise((d) => setTimeout(d, a ? 8e3 : 0))]), customElements.get(Ge)) return;
    const i = Object.assign(document.createElement("script"), { src: Re });
    i.onerror = () => {
      Fe = "failed", G();
    }, document.head.appendChild(i);
  }
  const ze = /* @__PURE__ */ new Map(), Ce = (e) => (mt.lightStyles[e] || mt.lights) === "dac", tt = () => mt.lights === "dac" || Object.values(mt.lightStyles).includes("dac");
  function it(e) {
    return Ce(e) && !!customElements.get(Ge);
  }
  const zt = (e) => mt.lightPads[e] || mt.dacPad, Ne = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !h.classList.contains("light") },
      callService: (a, i, d, ...u) => e.callService(a, ...kl(a, i, d), ...u)
    };
  }, Rt = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", $t = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Rt })).dataset.tf = "");
  }, Oa = /* @__PURE__ */ new Map(), Dn = new ResizeObserver((e) => e.forEach(({ target: a }) => {
    const i = a.parentElement;
    !i || !a.offsetHeight || (i.style.removeProperty("min-height"), Oa.set(i.dataset.dac, i.offsetHeight));
  }));
  function Bn(e) {
    e.querySelectorAll("[data-dac]").forEach((a) => {
      const i = a.dataset.dac;
      let d = ze.get(i);
      if (!d) {
        const u = i.slice(i.indexOf(":") + 1);
        d = document.createElement(Ge), d.setConfig({ type: "custom:" + Ge, entity: u, pad: zt(u), tap_action: { action: "none" } }), ze.set(i, d);
      }
      d.hass = Ne(), d.parentNode !== a && a.replaceChildren(d), !d.offsetHeight && Oa.has(i) && (a.style.minHeight = Oa.get(i) + "px"), Dn.observe(d), $t(d);
    });
  }
  function qi() {
    const e = Ne();
    ze.forEach((a, i) => {
      a.isConnected ? a.hass = e : ze.delete(i);
    });
  }
  customElements.whenDefined(Ge).then(() => {
    w && (E != null && E.querySelector("[data-tf]")) && Va(ro);
  });
  const Rn = (e, a, i) => We.has(e + "|" + a) ? We.get(e + "|" + a) : i;
  function ct(e) {
    var m;
    const a = y[e], i = a.attributes, d = e.split(".")[0], u = (f, b) => ({ act: At(f, "toggle", e), label: b });
    if (d === "light") {
      const f = a.state === "on", b = Hi(e), [M, D] = No(e), H = Rn("bright", e, zn(a));
      f && x(e, zn(a));
      const O = Rn("ct", e, f && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), pe = Rn("hue", e, f && Hd.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: f, button: u("light", "Turn " + Me(e) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Gn(e) && fo("bright", e, H / 100, Me(e) + " brightness", H + "%", !1, f ? null : gn[e] ?? null),
        b.includes("color_temp") && fo("ct", e, O == null ? null : (O - M) / (D - M), Me(e) + " warm to cool", O == null ? "" : Math.round(O) + " kelvin", !0),
        b.some((Te) => Hd.includes(Te)) && fo("hue", e, pe == null ? null : pe / 360, Me(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const f = i.target_temp_step || 0.5, b = Number(i.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + Me(e) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && S("Target temperature", Ha(b) + " °C", At("climate", "set_temperature", e, { temperature: b - f }), At("climate", "set_temperature", e, { temperature: b + f })),
        C("tfSeg", "Mode", (i.hvac_modes || []).map((M) => ({ label: He(M), act: At("climate", "set_hvac_mode", e, { hvac_mode: M }), pressed: a.state === M })))
      ] };
    }
    if (d === "cover") {
      const f = a.state === "opening" || a.state === "closing", b = a.state === "closed", M = Yn(e), D = Zn(e);
      return { on: !b, tone: "blue", icon: $c[Rd(a)][b ? 1 : 0], button: u("cover", (b ? "Open " : "Close ") + Me(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        qt(e, Kc) && X(e, M),
        D != null && be(e, D),
        we(e, M, f)
      ] };
    }
    if (d === "humidifier") {
      const f = Number(i.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + Me(e) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && S("Target humidity", f + "%", At("humidifier", "set_humidity", e, { humidity: f - 1 }), At("humidifier", "set_humidity", e, { humidity: f + 1 })),
        ((m = i.available_modes) == null ? void 0 : m.length) && C("tfSeg", "Mode", i.available_modes.map((b) => ({ label: He(b), act: At("humidifier", "set_mode", e, { mode: b }), pressed: i.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const f = a.state === "playing", b = a.state === "off" || a.state === "standby", M = Rn("vol", e, i.volume_level), D = b ? { act: At("media_player", qt(e, fh) ? "turn_on" : "toggle", e), label: "Turn " + Me(e) + " on" } : a.state === "playing" || a.state === "paused" ? { act: At("media_player", "media_play_pause", e), label: (f ? "Pause " : "Play ") + Me(e) } : { act: At("media_player", qt(e, hh) ? "turn_off" : "toggle", e), label: "Turn " + Me(e) + " off" };
      return { on: !b, tone: "blue", art: !b && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: b ? [] : [
        (qt(e, Uc) || qt(e, Yc) || qt(e, Gc) || qt(e, Zc)) && C("tfSeg", "Playback", [
          { html: Hl.prev, aria: "Previous", act: At("media_player", "media_previous_track", e), disabled: !qt(e, Uc) },
          { html: f ? Hl.pause : Hl.play, aria: f ? "Pause" : "Play", act: At("media_player", "media_play_pause", e), disabled: !(qt(e, Gc) || qt(e, Zc)) },
          { html: Hl.next, aria: "Next", act: At("media_player", "media_next_track", e), disabled: !qt(e, Yc) }
        ]),
        qt(e, uh) && M != null && fo("vol", e, M, Me(e) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const f = a.state === "cleaning", b = i.rooms || [], M = (H) => b.includes(H) ? b.filter((O) => O !== H) : b.concat(H), D = At("vacuum", f ? "pause" : "start", e, Di(e) ? { rooms: b } : null);
      return { on: f || a.state === "returning", tone: "blue", button: { act: D, label: (f ? "Pause " : "Start ") + Me(e) }, parts: ["controls", "rooms"], sections: [
        C("tfSeg", Me(e), [
          { label: f ? "Pause" : "Start", act: D },
          { label: "Dock", act: At("vacuum", "return_to_base", e), disabled: a.state === "docked" },
          { label: "Locate", act: At("vacuum", "locate", e) }
        ]),
        Di(e) && C("tfChips", "Rooms to clean", Qe.rooms.filter((H) => H.id !== "balcony").map((H) => ({ label: H.name, act: At("vacuum", "set_rooms", e, { rooms: M(H.name) }), pressed: b.includes(H.name) })))
      ] };
    }
    if (d === "lock") {
      const f = a.state === "locked";
      return { on: !f, tone: "heat", button: { act: At("lock", f ? "unlock" : "lock", e), label: (f ? "Unlock " : "Lock ") + Me(e) }, parts: ["controls"], sections: [
        C("tfSeg", Me(e), [
          { label: "Lock", act: At("lock", "lock", e), pressed: f },
          { label: "Unlock", act: At("lock", "unlock", e), pressed: a.state === "unlocked" },
          qt(e, _h) && { label: "Open", act: At("lock", "open", e), pressed: a.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const f = a.state === "disarmed";
      return { on: !f, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: At("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", e), label: f ? "Arm " + Me(e) + ", away" : "Disarm " + Me(e) }, parts: ["controls"], sections: [
        C("tfSeg", Me(e), Eh.filter(([, , , b]) => !b || qt(e, b)).map(([b, M, D]) => ({ label: M, act: At("alarm_control_panel", D, e), pressed: a.state === b })))
      ] };
    }
    if (d === "valve") {
      const f = a.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (f ? "Close " : "Open ") + Me(e)), parts: ["controls"], sections: [
        C("tfSeg", Me(e), [
          { label: "Open", act: At("valve", "open_valve", e), pressed: f },
          { label: "Close", act: At("valve", "close_valve", e), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Me(e) }, sections: [] };
  }
  const Wa = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ha(e)) + "°";
  function vn(e) {
    var xe;
    const a = (q) => e.readings.find((le) => yt(le).device_class === q), i = a("temperature"), d = a("humidity"), u = (q) => {
      var le;
      return Number((le = y[q]) == null ? void 0 : le.state);
    }, m = (q) => e.actions.filter((le) => q.test(le)), f = e.lights.filter((q) => {
      var le;
      return ((le = y[q]) == null ? void 0 : le.state) === "on";
    }), b = m(/^cover\./), M = b.filter((q) => {
      var le;
      return ((le = y[q]) == null ? void 0 : le.state) !== "closed";
    }), D = [...new Set(b.map((q) => Rd(y[q])))], H = m(/^climate\./)[0], O = m(/^humidifier\./)[0], pe = m(/^media_player\./), Te = pe.find((q) => {
      var le;
      return ((le = y[q]) == null ? void 0 : le.state) === "playing";
    }) || pe.find((q) => {
      var le;
      return ((le = y[q]) == null ? void 0 : le.state) === "paused";
    }), Le = e.plugs.filter((q) => {
      var le;
      return ((le = y[q]) == null ? void 0 : le.state) === "on";
    }), Q = [];
    if (i && Number.isFinite(u(i)) && Q.push({ key: "temp", id: i, kind: "reading", icon: _o(i), label: "Temperature", value: Ha(u(i)) + "°" }), d && Number.isFinite(u(d)) && Q.push({ key: "hum", id: d, kind: "reading", icon: _o(d), label: "Humidity", value: Math.round(u(d)) + "%" }), e.lights.length && Q.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: _o("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + e.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? sa(f[0]) : "",
      acts: e.lights.map((q) => ["light", f.length ? "turn_off" : "turn_on", q]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), b.length) {
      const q = D.length === 1 ? wh[D[0]] : "covers", le = Math.round(b.reduce((K, Ve) => K + Ya(Ve), 0) / b.length);
      Q.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: _o("", ((xe = $c[D[0]]) == null ? void 0 : xe[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: He(q),
        value: le <= 0 ? "Closed" : le >= 100 ? "Open" : le + "% open",
        short: le <= 0 ? "Closed" : le + "%",
        on: M.length > 0,
        acts: b.map((K) => ["cover", M.length ? "close_cover" : "open_cover", K]),
        aria: (M.length ? "Close the " : "Open the ") + q + " in " + e.name
      });
    }
    if (H) {
      const q = yt(H), le = y[H].state === "off";
      Q.push({
        key: "climate",
        kind: "control",
        tone: q.hvac_action === "cooling" ? "cool" : "heat",
        icon: _o(H),
        label: Me(H),
        value: le ? "Off" : He(q.hvac_action || y[H].state) + " · " + Wa(q.temperature),
        short: le ? "Off" : Wa(q.temperature),
        on: !le,
        acts: [["climate", "toggle", H]],
        aria: "Turn " + Me(H) + (le ? " on" : " off")
      });
    }
    if (O) {
      const q = y[O].state === "on";
      Q.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: _o("", "mdi:air-humidifier"),
        label: Me(O),
        value: q ? "On · " + yt(O).humidity + "%" : "Off",
        short: q ? yt(O).humidity + "%" : "Off",
        on: q,
        acts: [["humidifier", "toggle", O]],
        aria: "Turn " + Me(O) + (q ? " off" : " on")
      });
    }
    if (pe.length) {
      const q = Te || pe[0], le = y[q], K = le.state === "playing";
      Q.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: _o(q),
        label: Me(q),
        value: la(q),
        short: K ? "Playing" : le.state === "paused" ? "Paused" : He(le.state),
        on: K,
        acts: [["media_player", le.state === "playing" || le.state === "paused" ? "media_play_pause" : "toggle", q]],
        aria: (K ? "Pause " : "Play ") + Me(q)
      });
    }
    return e.plugs.length && Q.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: _o("", "mdi:power-plug"),
      label: "Plugs",
      value: Le.length ? Le.length + " of " + e.plugs.length + " on" : "All off",
      short: Le.length ? Le.length + " on" : "Off",
      on: Le.length > 0,
      acts: e.plugs.map((q) => ["switch", Le.length ? "turn_off" : "turn_on", q]),
      aria: (Le.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((q) => Q.push(yt(q).device_class === "moisture" ? { key: "alert:" + q, kind: "alert", icon: _o(q), label: "Water leak" } : { key: "note:" + q, kind: "note", icon: _o(q), label: Me(q) + " " + la(q).toLowerCase() })), Q;
  }
  const bn = (e, a) => {
    const i = (d) => e.actions.filter((u) => d.test(u));
    return {
      lights: e.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const d = i(/^media_player\./);
        return [d.find((u) => {
          var m;
          return ((m = y[u]) == null ? void 0 : m.state) === "playing";
        }) || d.find((u) => {
          var m;
          return ((m = y[u]) == null ? void 0 : m.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[a] || [];
  }, li = (e, a, i) => '<button class="' + a + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + _n(e.acts) + '" aria-label="' + de(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", Ar = (e) => '<button class="tfAName" type="button" data-go="' + de(e.id) + '" aria-label="Open ' + de(e.name) + '">' + de(e.name) + "</button>";
  function Xn(e, a, i = !1) {
    const d = a.find((b) => b.key === "lights"), u = !!(d != null && d.on), m = "", f = '<span class="tfAreaGlyph"' + St("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !d ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + m + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + m + ' data-acts="' + _n(d.acts) + '" aria-label="' + de(d.aria) + '" aria-pressed="' + u + '">' + f + "</button>";
  }
  const Sa = (e) => e.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + de(a.label) + "</span>").join(" "), Vt = (e) => e.readings.find((a) => yt(a).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((a) => y[a]) || null, js = (e, a) => {
    const i = Me(a);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? He(i.slice(e.name.length + 1)) : i;
  };
  function zs(e) {
    const a = y[e], i = yt(e), d = e.split(".")[0], u = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(u)) {
      if (i.device_class === "temperature") return { text: Wa(u) };
      const m = i.unit_of_measurement || "";
      return m === "%" ? { text: Math.round(u) + "%" } : { text: Ha(u, Number.isInteger(u) ? 0 : 1), unit: m };
    }
    if (d === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Wa(i.current_temperature ?? i.temperature) };
    if (d === "light") return { text: a.state !== "on" ? "Off" : Gn(e) ? zn(a) + "%" : "On" };
    if (d === "cover") {
      const m = Ya(e);
      return { text: m <= 0 ? "Closed" : m >= 100 ? "Open" : m + "%" };
    }
    return d === "humidifier" ? { text: a.state === "on" ? i.humidity + "%" : "Off" } : d === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : He(a.state) } : { text: la(e) };
  }
  const Vs = (e, a, i) => {
    const d = i.find((b) => b.key === "temp"), u = i.find((b) => b.key === "hum"), m = yt(a), f = y[a].state === "off";
    return a.startsWith("climate.") ? [js(e, a), f ? "Off" : He(m.hvac_action || y[a].state) + (m.temperature != null ? " · " + Wa(m.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === a) && js(e, a), d && d.id !== a && d.value, u && u.id !== a && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function di(e, a, i) {
    const d = i && zs(i), u = i ? Vs(e, i, a) : "", m = (b) => {
      const M = bn(e, b.key);
      return M.length === 1 ? M[0] : "group:" + e.id + ":" + b.key;
    }, f = a.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + li(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + de(m(b)) + '" aria-label="' + de(e.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + de(b.label) + '</span><span class="activityRowMeta">' + de(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Xn(e, a) + '<div class="tfATitle">' + Ar(e) + Sa(a) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + de(i) + '" aria-label="' + de(Me(i) + ", " + la(i) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + de(d.text) + (d.unit ? '<span class="tfABigUnit">' + de(d.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + de(u) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function Kl(e) {
    const a = e.id === re, i = vn(e), d = Vt(e), u = d && zs(d), m = [...i.filter((f) => f.kind === "control"), ...i.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + de(e.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + de(e.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + di(e, i, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Xn(e, i, !0) + '<span class="tfACName">' + de(e.name) + '</span></div><span class="tfACMain">' + (u ? de(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + m.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Nt = [];
  const Jn = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Nt.map(Kl).join("") + "</section></div>", ci = () => [
    { key: "home", name: "Home", ids: Qe.homeVacuums },
    ...Qe.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], ji = (e, a, i) => e + " " + (e === 1 ? a : i), Ba = () => (z.favourites ?? ce.favorite_entities ?? []).filter((e) => y[e]);
  function _r() {
    if (!Xe) {
      const a = Object.entries(lt).sort((d, u) => u[1] - d[1]).map(([d]) => d), i = Qe.rooms.flatMap((d) => d.actions);
      Xe = [.../* @__PURE__ */ new Set([...ye, ...a, ...i.filter((d) => ct(d).on), ...i])];
    }
    const e = Ba();
    return Xe.filter((a) => y[a] && y[a].state !== "unavailable" && !e.includes(a));
  }
  let zi = !1;
  function Qn() {
    if (!zi || z.favSeeded || !Qe.rooms.length) return;
    const e = (i) => Object.keys(y).find((d) => Di(d) && i(d)), a = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), Qe.security.locks[0]];
    z = { ...z, favourites: [.../* @__PURE__ */ new Set([...z.favourites ?? ce.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Ia();
  }
  const wn = () => z.suggest ?? !ce.hide_suggested_entities;
  function $l() {
    const e = new Set(z.favHidden || []), a = Ba().filter((d) => !e.has(d)), i = wn() ? _r().filter((d) => !e.has(d) && fs(d)) : [];
    return [...a, ...i].slice(0, Bh);
  }
  const ho = (e) => {
    const a = Ba().includes(e);
    return '<button class="tfStar" type="button" data-star="' + de(e) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + de(Me(e)) + '">' + Ah(a) + "</button>";
  };
  function Er(e, { area: a = !1, star: i = !1, plain: d = !1, say: u = null, alert: m = !1 } = {}) {
    var Le, Q, xe, q, le, K;
    const f = d && ((le = (Le = o()) == null ? void 0 : Le.devices) == null ? void 0 : le[(q = (xe = (Q = o()) == null ? void 0 : Q.entities) == null ? void 0 : xe[e]) == null ? void 0 : q.device_id]), b = f && (f.name_by_user || f.name) || Me(e), M = e.split(".")[0], D = !d && Ol.includes(M) ? ct(e) : null, H = D ? D.on : ["on", "open", "playing"].includes((K = y[e]) == null ? void 0 : K.state), O = d ? null : D ? D.button : xh.includes(M) ? { act: At(M, "toggle", e), label: "Turn " + Me(e) + (H ? " off" : " on") } : M === "scene" || M === "script" ? { act: At(M, "turn_on", e), label: "Run " + Me(e) } : null, pe = (u ?? la(e)) + (a && Lt.get(e) ? " · " + Lt.get(e) : ""), Te = (D == null ? void 0 : D.icon) || na(e);
    return '<div class="activityRow' + (O ? " tfPlug" : "") + (H ? " on" : "") + (i ? " tfPick" : "") + (m ? " alert" : "") + '" data-k="' + de((a ? "fav:" : "row:") + e) + '" data-tone="' + (M === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + Vn(e) + ">" + (O && !i ? '<button class="tfIcon" type="button" data-act="' + O.act + '" aria-label="' + de(O.label) + '"' + St(e, Te) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + St(e, Te) + "></div>") + '<button class="tfName" type="button" data-more="' + de(e) + '" aria-label="' + de(b + ", " + pe + ". More info") + '"><span class="activityRowName">' + de(b) + '</span><span class="activityRowMeta">' + de(pe) + "</span></button>" + (i ? ho(e) : "") + "</div>";
  }
  const xn = () => {
    var e;
    return y[(e = z.sources) == null ? void 0 : e.weather] ? z.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((a) => a.startsWith("weather."));
  };
  function Gs() {
    var i;
    const e = (d) => Object.keys(y).filter((u) => u.startsWith("binary_sensor.") && d.includes(yt(u).device_class));
    return ((i = ge.alert_entities) != null && i.length ? ge.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(Fl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => y[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[d.entity].state) }));
  }
  function Xl() {
    const e = Object.keys(Pd), a = /* @__PURE__ */ new Set(), i = [];
    return (ce.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || a.has(d.key)) return;
        a.add(d.key);
      }
      i.push(d);
    }), e.forEach((d) => {
      a.has(d) || i.push({ type: "summary", key: d });
    }), i;
  }
  function ls() {
    var xe;
    const e = ((xe = o()) == null ? void 0 : xe.entities) || {}, a = (q) => yt(q).device_class, i = Object.keys(y).filter((q) => q.startsWith("sensor.") && a(q) === "battery" || q.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(q))), d = Qe.rooms.flatMap((q) => q.plants.map((le) => le.id));
    if (!i.length && !d.length) return null;
    const u = (q) => {
      var K;
      const le = (K = e[q]) == null ? void 0 : K.device_id;
      return !!le && Object.keys(y).some((Ve) => {
        var Ht;
        return Ve.startsWith("binary_sensor.") && ((Ht = e[Ve]) == null ? void 0 : Ht.device_id) === le && a(Ve) === "battery_charging" && y[Ve].state === "on";
      });
    }, m = (q) => q.startsWith("vacuum.") ? yt(q).battery_level <= 20 && y[q].state !== "docked" : q.startsWith("binary_sensor.") ? a(q) === "battery" && y[q].state === "on" : parseFloat(y[q].state) <= 20 && !u(q), f = [...i, ...Qe.vacuums].filter((q) => y[q] && m(q)), b = [...i.filter((q) => a(q) === "problem" && y[q].state === "on"), ...d.filter((q) => {
      var le;
      return ((le = y[q]) == null ? void 0 : le.state) === "problem";
    })], M = i.filter((q) => y[q].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...f, ...b, ...M])], H = (q) => {
      const le = parseFloat(y[q].state);
      return a(q) === "battery" && Number.isFinite(le) ? le : 101;
    }, O = [...d, ...Qe.vacuums, ...[...i].sort((q, le) => H(q) - H(le))].filter((q) => y[q] && !D.includes(q)), pe = /* @__PURE__ */ new Map();
    O.forEach((q) => {
      var K;
      const le = ((K = Qe.areaOf) == null ? void 0 : K.call(Qe, q)) || "";
      pe.set(le, [...pe.get(le) || [], q]);
    });
    const Te = (q) => {
      const le = Qe.rooms.findIndex((K) => K.id === q);
      return q === "" ? 1 / 0 : le < 0 ? Qe.rooms.length : le;
    }, Le = [...pe.keys()].sort((q, le) => Te(q) - Te(le)), Q = (q) => {
      var le, K, Ve, Ht;
      return ((le = Qe.rooms.find((gt) => gt.id === q)) == null ? void 0 : le.name) || ((Ht = (Ve = (K = o()) == null ? void 0 : K.areas) == null ? void 0 : Ve[q]) == null ? void 0 : Ht.name) || q;
    };
    return {
      value: [f.length && ji(f.length, "low battery", "low batteries"), b.length && ji(b.length, "problem", "problems"), M.length && ji(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Le.map((q) => ({ name: q ? Q(q) : Le.length > 1 ? "Other devices" : "Devices", ids: pe.get(q) }))].filter((q) => q.ids.length)
    };
  }
  function Vi() {
    var ya;
    const e = Qe.rooms, a = Qe.security, i = ($e, Yt) => $e.actions.filter((Jo) => Yt.test(Jo)), d = ($e) => e.map((Yt) => ({ name: Yt.name, ids: $e(Yt) })).filter((Yt) => Yt.ids.length), u = e.flatMap(($e) => $e.lights), m = u.filter(($e) => {
      var Yt;
      return ((Yt = y[$e]) == null ? void 0 : Yt.state) === "on";
    }).length, f = e.map(($e) => $e.readings.find((Yt) => yt(Yt).device_class === "temperature")).filter(Boolean).map(($e) => Number(y[$e].state)).filter(Number.isFinite), [b, M] = [Ha(Math.min(...f)), Ha(Math.max(...f))], D = e.flatMap(($e) => i($e, /^media_player\./)), H = D.filter(($e) => {
      var Yt;
      return ((Yt = y[$e]) == null ? void 0 : Yt.state) === "playing";
    }).length, O = Gs(), pe = O.filter(($e) => $e.severity === "warning" && $e.on).length, Te = a.locks.filter(($e) => {
      var Yt;
      return ["unlocked", "jammed", "open"].includes((Yt = y[$e]) == null ? void 0 : Yt.state);
    }).length, Le = a.alarms.filter(($e) => {
      var Yt;
      return ((Yt = y[$e]) == null ? void 0 : Yt.state) === "disarmed";
    }).length, Q = pe ? ji(pe, "warning", "warnings") : null, xe = Te ? Te + " unlocked" : Le ? Le + " disarmed" : Q ? null : "All secure", q = ls(), le = e.flatMap(($e) => $e.solar), K = le.find(($e) => $e.endsWith("_power")), Ve = {
      light: u.length && { value: m ? m + " on" : "All off", groups: d(($e) => $e.lights) },
      climate: f.length && { value: b === M ? b + "°" : b + " - " + M + "°", groups: d(($e) => [...$e.readings.filter((Yt) => ["temperature", "humidity"].includes(yt(Yt).device_class)), ...i($e, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [Q, xe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter(($e) => $e.ids.length) },
      media_players: D.length && { value: H ? H + " playing" : "No media playing", groups: d(($e) => i($e, /^media_player\./)) },
      maintenance: q,
      energy: Qe.grid && { value: An(Number(((ya = y[K]) == null ? void 0 : ya.state) || 0) * 1e3 + Number(y[Qe.grid].state)) + " now", groups: [{ name: "Energy", ids: [...le, Qe.grid] }] }
    }, Ht = [], gt = O.filter(($e) => $e.severity !== "warning" && $e.on);
    return gt.length && Ht.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: ji(gt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: gt.map(($e) => $e.entity) }] }), Xl().forEach(($e) => {
      $e.type !== "summary" ? Ht.push({ key: "path:" + $e.path, name: $e.label || $e.path, icon: $e.icon || "mdi:link-variant", colour: "", value: "" }) : !$e.hidden && Ve[$e.key] && !(z.hiddenSums || []).includes($e.key) && Ht.push({ key: $e.key, ...Pd[$e.key], ...Ve[$e.key] });
    }), Ht;
  }
  const Us = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + de(e.key) + '" data-k="sum:' + de(e.key) + '" aria-label="' + de(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + St(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + de(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + de(e.value) + "</div>" : "") + "</div></div>";
  function Ys(e) {
    const a = Ba();
    z = { ...z, favourites: a.includes(e) ? a.filter((i) => i !== e) : [...a, e], favHidden: (z.favHidden || []).filter((i) => i !== e) }, Ia(), da();
  }
  function Dr(e) {
    document.querySelector("home-assistant") && (Ie.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ds(e, a) {
    if (e.startsWith("path:")) {
      Dr(e.slice(5));
      return;
    }
    vr("summary:" + e, a);
  }
  async function Gi() {
    const e = (f) => Promise.resolve().then(() => R(f)).catch(() => null), [a, i, d, u] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Xc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), m = (a == null ? void 0 : a.value) || {};
    z = { favourites: m.favourites ?? null, sources: m.sources, hiddenSums: m.hiddenSums, dash: m.dash, named: m.named, favHidden: m.favHidden, suggest: m.suggest, favSeeded: m.favSeeded }, ce = (i == null ? void 0 : i.value) || {}, ge = (d == null ? void 0 : d.value) || {}, ye = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], Xe = null, Object.keys(y).length && da(), Ui(), zi = !0, Qn();
  }
  const Zs = "HomeCore";
  async function Ui() {
    var d, u, m;
    const e = location.pathname.split("/")[1], a = z.named || [];
    if (!((u = (d = o()) == null ? void 0 : d.user) != null && u.is_admin) || !e || a.includes(e)) return;
    const i = () => {
      z = { ...z, named: [...a, e] }, Ia();
    };
    try {
      const f = (m = await R({ type: "lovelace/dashboards/list" })) == null ? void 0 : m.find((D) => D.url_path === e);
      if (!f || f.mode === "yaml") return;
      if (f.title === Zs) {
        i();
        return;
      }
      const b = await R({ type: "lovelace/config", url_path: e }), M = ((b == null ? void 0 : b.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((H) => H.cards || [])]);
      if (!M.length || !M.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await R({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: Zs }), i();
    } catch {
    }
  }
  let yn = null, Yi = 0, pi = !1;
  const ui = (e) => {
    const a = e.split(".")[0], i = yt(e).device_class;
    return Dh.includes(a) && (a !== "binary_sensor" || Fl.includes(i) || !!ip[i]);
  }, fi = (e) => e.startsWith("binary_sensor.") ? ip[yt(e).device_class] : null;
  async function Zi() {
    var e;
    if (!(pi || Date.now() - Yi < 30 * 1e3)) {
      pi = !0, Yi = Date.now();
      try {
        const a = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(ui), i = a.length ? await R({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        yn = Array.isArray(i) ? i.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        yn = null;
      }
      pi = !1, da();
    }
  }
  function cs() {
    const e = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = (u) => {
      if (!y[u.entity_id] || !ui(u.entity_id) || !fs(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      if (fi(u.entity_id)) {
        const f = a.get(u.entity_id);
        u.state === "on" ? (!f || u.when > f.when + 1) && a.set(u.entity_id, { ...u, alarm: !0, cleared: null }) : f && !f.cleared && u.when > f.when && (f.cleared = u.when);
        return;
      }
      const m = e.get(u.entity_id);
      (!m || u.when > m.when + 1) && e.set(u.entity_id, u);
    };
    [...yn || []].sort((u, m) => u.when - m.when).forEach(i);
    const d = yn ? Yi / 1e3 - 5 : 0;
    return Object.keys(y).forEach((u) => {
      var b;
      const m = y[u], f = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      f > d && i({ entity_id: u, state: m.state, when: f, context_user_id: (b = m.context) == null ? void 0 : b.user_id });
    }), [...e.values(), ...a.values()].sort((u, m) => m.when - u.when).slice(0, Rh);
  }
  function Nn(e) {
    var d;
    const a = e.context_user_id && Object.keys(y).find((u) => u.startsWith("person.") && yt(u).user_id === e.context_user_id);
    if (a) return Me(a);
    const i = (d = o()) == null ? void 0 : d.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function hi(e) {
    const a = e.entity_id.split(".")[0], i = String(e.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || He(i).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || He(i).toLowerCase() : a === "binary_sensor" ? i === "on" ? "opened" : "closed" : a === "climate" ? i === "off" ? "turned off" : "set to " + He(i).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || He(i).toLowerCase() : a === "alarm_control_panel" ? (op[i] || He(i)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || He(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : He(i).toLowerCase();
  }
  function Jl(e) {
    const a = e.entity_id, i = e.alarm && fi(a), d = Me(a) + " " + (i ? i[0] : hi(e)), u = i ? Ut(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + Ut(e.cleared * 1e3) : "") : [Nn(e), Ut(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + St(a, na(a)) + '></div><button class="tfName" type="button" data-more="' + de(a) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + de(d + ", " + u + ". More info") + '"><span class="activityRowName">' + de(d) + '</span><span class="activityRowMeta">' + de(u) + "</span></button></div>";
  }
  let Ki = null, Ho = 0;
  const $i = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Br() {
    var a;
    if (Date.now() - Ho < 5 * 60 * 1e3) return;
    Ho = Date.now();
    const e = [];
    try {
      const i = ((a = await R({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], d = (u) => i.filter((m) => m.type === u).flatMap((m) => u === "grid" ? (m.flow_from || []).map((f) => f.stat_energy_from) : [m.stat_energy_from]).filter(Boolean);
      for (const [u, m, f] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!f.length) continue;
        const b = await Promise.all(f.map((M) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: u, name: m, id: f[0], ids: f, value: b.reduce((M, D) => M + D, 0), unit: yt(f[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ki = e, da();
  }
  let mo = null, Ks = [];
  function Rr() {
    var m;
    const e = Ks = Ki != null && Ki.length ? Ki : $i.map(([f, b, M, D]) => {
      const H = "sensor.made_up_energy_" + f;
      return y[H] = { entity_id: H, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: f, name: b, id: H, value: M, unit: D };
    });
    V.clear(), e.some((f) => f.id === mo) || (mo = e[0].id);
    const a = e.map((f) => {
      const b = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, M = Nh[f.key], D = f.id === mo;
      return V.set(f.id, { name: f.name, text: b, icon: M }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + de(f.id) + '" aria-pressed="' + D + '" aria-label="' + de(f.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + St("", M, f.name) + '></div><div><div class="activityRowName">' + de(f.name) + '</div><div class="activityRowMeta">' + de(b) + "</div></div></div>";
    }), i = e.find((f) => f.id === mo), d = (((m = Pt().opts.energy) == null ? void 0 : m.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + de(i.id) + '" role="img" aria-label="' + de(i.name) + ', last 24 hours"></svg></div>';
    return mn("dash:energy", 0, "Energy today", a, u, Vi().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Nr(e) {
    const a = E.querySelector(".tfDash-energy"), i = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !i || e === mo || (mo = e, a.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const u = d.dataset.energyPick === e;
      d.classList.toggle("picked", u), d.setAttribute("aria-pressed", String(u));
    }), i.dataset.graph = e, i.dataset.drawn = "", wa.set("dash:energy", Rr()), Go(!0));
  }
  const Xi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ps = /* @__PURE__ */ new Map();
  async function Ql(e) {
    const a = /* @__PURE__ */ new Date(), i = new Date(a).setHours(0, 0, 0, 0), d = a.getHours(), u = a.getMinutes() / 60, m = Array.from({ length: 24 }, (b, M) => M <= d ? 0 : null);
    if (!e.ids) {
      const b = Xi[e.key] || Xi.electricity, M = b.map((H, O) => O < d ? H : O === d ? H * u : 0), D = M.reduce((H, O) => H + O, 0) || 1;
      return m.map((H, O) => H == null ? null : e.value * M[O] / D);
    }
    const f = ps.get(e.id);
    if (f && f.day === i && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const b = await R({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: a.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((H) => ((b == null ? void 0 : b[H]) || []).forEach((O) => {
        const pe = typeof O.start == "number" ? O.start : Date.parse(O.start), Te = new Date(pe).getHours();
        pe >= i && Te < d && (m[Te] += Number(O.change) || 0);
      }));
      const M = new Date(a).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((H) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: H, fixed_period: { start_time: new Date(M).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((O) => Number(O == null ? void 0 : O.change) || 0, () => 0)));
      m[d] = D.reduce((H, O) => H + O, 0);
    } catch {
    }
    return ps.set(e.id, { at: Date.now(), day: i, hours: m }), m;
  }
  async function Ra(e, a) {
    const i = await Ql(a);
    if (!e.isConnected) return;
    const d = Math.max(120, e.clientWidth || 260), u = Math.max(60, e.clientHeight || 130), m = 18, f = u - 18, b = d / 24, M = b * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), H = i.map((xe) => xe ?? 0), O = Math.max(0, ...H), pe = (xe) => f - (O > 0 ? xe / O * (f - m) : 0), Te = (xe) => xe.toLocaleString(void 0, { maximumFractionDigits: xe < 10 ? 2 : 1 }) + " " + a.unit, Le = (xe) => String(xe).padStart(2, "0") + ":00", Q = O > 0 ? H.indexOf(O) : -1;
    e.setAttribute("viewBox", "0 0 " + d + " " + u), e.setAttribute("aria-label", a.name + " today by the hour: " + Te(a.value) + (Q >= 0 ? ", most " + Te(O) + " at " + Le(Q) : "")), e.innerHTML = [m, (m + f) / 2, f].map((xe) => '<line x1="0" x2="' + d + '" y1="' + xe + '" y2="' + xe + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((xe, q) => xe > 0 ? '<rect x="' + (q * b + (b - M) / 2).toFixed(1) + '" y="' + pe(xe).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (f - pe(xe)).toFixed(1) + '" rx="2" fill="' + (q === D ? "var(--primary)" : "var(--text)") + '"' + (q === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((xe) => '<text x="' + (xe * b).toFixed(1) + '" y="' + (u - 3) + '">' + String(xe).padStart(2, "0") + "</text>").join("") + (Q >= 0 ? '<text x="0" y="11">Most: ' + de(Te(O)) + " at " + Le(Q) + "</text>" : "");
  }
  function Ji(e) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, d) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function mi(e) {
    var u;
    if ((u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const d = i.getTotalLength();
    i.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Pr = null, us = 0;
  const fs = (e) => !e.startsWith("light.") || Ph.includes((Lt.get(e) || "").toLowerCase()), hs = () => Math.max(2, In((E == null ? void 0 : E.clientWidth) || 0).n), Qi = (e) => {
    const a = ct(e);
    return a.sections.map((i, d) => i && (a.parts || [])[d]).filter(Boolean);
  }, $s = (e) => Qi(e).slice(0, Pn(e) - 1);
  function er(e) {
    const a = Pt().tiles;
    if (a) return a.filter((d) => y[d]);
    if (!Pr) {
      const d = (u) => {
        var m;
        return (((m = y[u]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + (lt[u] || 0);
      };
      Pr = {
        lights: Qe.rooms.flatMap((u) => u.lights).filter((u) => {
          var m;
          return fs(u) && ((m = y[u]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((u, m) => d(m) - d(u) || Me(u).localeCompare(Me(m))),
        climates: Qe.rooms.flatMap((u) => u.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const i = Pr.climates.filter((d) => y[d]).slice(0, e > 3 ? 2 : 1);
    return [...Pr.lights.filter((d) => y[d]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const Ir = (e, a, i, d) => (u) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + a + '" aria-label="' + i + '">' + (d ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function eo(e, a) {
    var m, f;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + de(((f = (m = o()) == null ? void 0 : m.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), a.length && e.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ir("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: a.map((b) => ({ key: "sum:" + b.key, html: Us(b) })) }), Nt.length && e.push({ key: "areas", html: Jn(0) });
    const i = $l();
    i.length && e.push({ key: "favs", wrap: Ir("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((b) => ({ key: "fav:" + b, html: Er(b, { area: !0 }) })) });
    const d = cs();
    e.push({ key: "dash:act", html: mn("dash:act", 0, "Activity", d.length ? d.map(Jl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Rr() });
    const u = hs();
    return us = u, er(u >= 3 ? u : u * 2).forEach((b) => e.push({
      key: "dash:tile:" + b,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + de(b) + '">' + M + "</div>",
      tiles: [{ key: b, html: ke(b, !1, $s(b)) }]
    })), Zi(), Br(), e;
  }
  const go = 252, Jt = 16, ed = 200, ms = Math.round(go * 1.25), Xs = 60, vo = Xs + Jt, Fo = 3, td = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Js = ["wx", "favs", "act", "energy", "avg"], tr = ["XS", "S", "M", "L", "XL"], gi = tr.length, vi = ["Narrow", "Wide", "Really wide"], to = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Oo = (e) => !e.includes(".") || !y[e] || e.startsWith("light.") && Ce(e) ? gi : Math.min(gi, Qi(e).length + 1), Pn = (e) => {
    const a = Pt().opts[e] || {}, i = Oo(e), d = Number(a.h) || (a.tall ? 5 : to[e] || bi);
    return Math.max(1, Math.min(i, d));
  }, bi = 2, wi = 90, bo = 56, kn = (e) => td[e] || Me(e), ad = 409, Hr = 128;
  let ra = !1, kt = null, Ca = null, wo = !1, Wo = /* @__PURE__ */ new Map(), ar = 0, ao = 0;
  const xi = ["title", "sums"], In = (e) => {
    const a = Math.max(1, Math.floor((e + Jt) / (ed + Jt)));
    return { n: a, w: Math.max(1, Math.min(ms, Math.floor((e - (a - 1) * Jt) / a))) };
  }, Pt = () => {
    const e = { cells: {}, spans: {}, hidden: [], opts: {}, ...z.dash || {} }, a = Ma.filter((i) => !(e.known || []).includes(i) && !e.hidden.includes(i));
    return a.length ? { ...e, hidden: [...e.hidden, ...a] } : e;
  };
  function on(e) {
    z = { ...z, dash: { ...e, known: Ma } }, Ia();
  }
  function qo() {
    const e = (a) => E.querySelector(a);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", ft.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", ft.avg, 2],
      ...Ma.map((a) => [a, ft[a], 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, i, d, u = !1]) => ({ key: a, el: i, span: d, tile: u }));
  }
  const Fr = (e, a, i) => e.span === "full" ? a : e.span === "areas" ? Math.min(a, Math.ceil((ad + Math.max(0, Nt.length - 1) * (Hr + Jt) + Jt) / (i + Jt))) : Math.min(a, Pt().spans[e.key] ?? e.span), gs = (e) => Pn(e.key);
  function jo(e, a, i = null) {
    const d = Pt().cells, u = e.every((b) => !d[b.key] || d[b.key].col + b.cols <= a), m = (b) => d[b.key] || { row: 1e9, col: 0 };
    return (() => {
      const b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), D = (Q, xe, q, le) => {
        for (let K = xe; K < xe + le; K++) for (let Ve = Q; Ve < Q + q; Ve++) if (b.has(Ve + "," + K)) return !1;
        return !0;
      }, H = (Q, xe, q) => {
        for (let le = q; le < q + Q.rows; le++) for (let K = xe; K < xe + Q.cols; K++) b.add(K + "," + le);
        M.set(Q.key, { col: xe, row: q, cols: Q.cols, rows: Q.rows });
      }, O = (Q, xe, q) => {
        for (xe = Math.max(0, Math.min(a - Q.cols, xe)), q = Math.max(0, q); !D(xe, q, Q.cols, Q.rows); ) q++;
        H(Q, xe, q);
      }, pe = (Q) => {
        for (let xe = 0; ; xe++) for (let q = 0; q <= a - Q.cols; q++) if (D(q, xe, Q.cols, Q.rows)) {
          H(Q, q, xe);
          return;
        }
      };
      i && O(i, kt.col, kt.row);
      const Te = e.filter((Q) => Q !== i), Le = (Q, xe) => m(Q).row - m(xe).row || m(Q).col - m(xe).col;
      return u ? (Te.filter((Q) => d[Q.key]).sort(Le).forEach((Q) => O(Q, d[Q.key].col, d[Q.key].row)), Te.filter((Q) => !d[Q.key]).forEach(pe), M) : ([...Te].sort(Le).forEach(pe), M);
    })();
  }
  function vs(e, a) {
    const i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = (m, f, b) => {
      for (let M = f; M < f + b.rows; M++) for (let D = m; D < m + b.cols; D++) if (i.has(D + "," + M)) return !1;
      return !0;
    };
    return e.forEach((m) => {
      for (let f = 0; ; f++) {
        let b = 0;
        for (; b <= a - m.cols && !u(b, f, m); ) b++;
        if (!(b > a - m.cols)) {
          for (let M = f; M < f + m.rows; M++) for (let D = b; D < b + m.cols; D++) i.add(D + "," + M);
          d.set(m.key, { col: b, row: f, cols: m.cols, rows: m.rows });
          return;
        }
      }
    }), d;
  }
  function bs() {
    const e = Pt(), a = new Set(e.hidden), i = qo().filter((f) => !xi.includes(f.key));
    let d = Wo;
    if (!d.size) {
      const f = e.pegs || 4, b = i.filter((M) => !a.has(M.key));
      b.forEach((M) => {
        M.cols = Fr(M, f, go), M.rows = gs(M) ?? bi;
      }), d = jo(b, f);
    }
    const u = (f) => !a.has(f.key) && d.get(f.key) || { row: 1e9, col: 0 };
    i.sort((f, b) => u(f).row - u(b).row || u(f).col - u(b).col);
    const m = (e.phone || []).map((f) => i.find((b) => b.key === f && !a.has(f))).filter(Boolean);
    return [...m, ...i.filter((f) => !m.includes(f))];
  }
  const nd = () => {
    const e = bs();
    e.forEach((a, i) => a.el.style.setProperty("--o", String(3 + i))), Qs([...qo().filter((a) => xi.includes(a.key)), ...e].map((a) => a.el));
  };
  function Qs(e) {
    if (kt) return;
    const a = n.activeElement;
    let i = null;
    for (const d of new Set(e.map((u) => {
      for (; u && u.parentElement !== E; ) u = u.parentElement;
      return u;
    }).filter(Boolean))) {
      const u = i ? i.nextSibling : E.querySelector(":scope > [data-tf]");
      if (d !== u)
        try {
          E.moveBefore ? E.moveBefore(d, u) : E.insertBefore(d, u);
        } catch {
          E.insertBefore(d, u);
        }
      i = d;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const no = (e, a) => on({ ...e, cells: a, pegs: In(E.clientWidth).n });
  function Gt() {
    var le;
    if (!w || !E) return;
    const e = E.clientWidth, a = e < 2 * go + Jt, i = h.classList.contains("tfDash"), { n: d, w: u } = a ? { n: 2, w: Math.floor((e - Jt) / 2) } : In(e);
    dt.classList.add("tfPegs"), dt.style.setProperty("--peg-n", d), dt.style.setProperty("--peg-w", u + "px");
    const m = new Set(Pt().hidden);
    Ma.forEach((K) => {
      var Ve;
      return (Ve = ft[K]) == null ? void 0 : Ve.classList.toggle("tfNotAdded", m.has(K) && !(kt != null && kt.fromTray && kt.key === K));
    }), h.classList.toggle("tfBoard", i), h.classList.toggle("tfEditing", i && ra && !a);
    const f = c("dashEditNav");
    f && (f.hidden = !i || a, f.classList.toggle("active", ra), f.setAttribute("aria-pressed", String(ra)), f.setAttribute("aria-label", ra ? "Done editing" : "Edit the dashboard"), f.title = ra ? "Done" : "Edit", f.innerHTML = ra ? Lh : np);
    const b = i ? qo() : [];
    if (!i) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((K) => {
        K.classList.remove("tfBoardItem", "tfBoardHidden"), K.style.left = K.style.top = K.style.width = K.style.height = "";
      }), (le = E.querySelector(".tfDash-act > .activityRows")) == null || le.style.removeProperty("max-height"), tl(!1), h.classList.contains("tfDash") && nd(), fa();
      return;
    }
    E.style.setProperty("--peg-w", u + "px");
    const M = new Set(Pt().hidden), D = u + Jt;
    kt != null && kt.fromTray && M.delete(kt.key), b.forEach((K) => K.el.classList.toggle("tfBoardHidden", M.has(K.key)));
    const H = b.filter((K) => !M.has(K.key) && getComputedStyle(K.el).display !== "none");
    let O = 0;
    H.filter((K) => xi.includes(K.key)).forEach((K) => {
      K.el.classList.add("tfBoardItem"), Object.assign(K.el.style, { width: e + "px", height: "", left: "0px", top: O + "px" });
      const Ve = K.key === "sums" && K.el.querySelector(".tfDash-bar"), Ht = Ve ? Ve.querySelectorAll(".activityRow").length : 0;
      Ve && (Ve.style.maxWidth = "none");
      for (let gt = 1; Ve && gt <= Ht && (Ve.style.setProperty("--bar-cols", String(Math.ceil(Ht / gt))), !(Ve.offsetWidth <= e)); gt++)
        ;
      Ve && (Ve.style.maxWidth = ""), O += K.el.offsetHeight + Jt;
    }), ao = O;
    const pe = H.filter((K) => !xi.includes(K.key));
    pe.forEach((K) => {
      K.cols = Fr(K, d, u), K.el.classList.add("tfBoardItem"), K.el.style.width = (K.cols === d ? e : K.cols * u + (K.cols - 1) * Jt) + "px", K.el.style.height = "", K.rows = gs(K) ?? Math.max(1, Math.ceil((K.el.offsetHeight + Jt - 6) / vo));
    });
    const Te = kt && pe.find((K) => K.key === kt.key), Le = a && bs().map((K) => K.key), Q = (K) => Le.includes(K.key) ? Le.indexOf(K.key) : -1, xe = a ? vs([...pe].sort((K, Ve) => Q(K) - Q(Ve)), d) : jo(pe, d, Te);
    xe.forEach((K) => Object.assign(K, { x: K.cols === d ? 0 : K.col * D, y: ao + K.row * vo, w: K.cols === d ? e : K.cols * u + (K.cols - 1) * Jt, h: K.rows * vo - Jt })), pe.forEach((K) => {
      const Ve = xe.get(K.key);
      K.el.style.height = Ve.h + "px", K.el.dataset.rows = Pn(K.key), K.el.toggleAttribute("data-narrow", !a && Ve.cols === 1 && d > 1), K.el.classList.contains("tfDac") && K.el.style.setProperty("--tf-dac-pad", Ve.h - wi + "px"), !(K === Te && !kt.fromTray) && (K.el.style.left = Ve.x + "px", K.el.style.top = Ve.y + "px");
    }), a || (Wo = xe), Qs([...H.filter((K) => xi.includes(K.key)), ...pe.slice().sort((K, Ve) => xe.get(K.key).row - xe.get(Ve.key).row || xe.get(K.key).col - xe.get(Ve.key).col)].map((K) => K.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([K, Ve]) => {
      const Ht = xe.get(K), gt = Ht && E.querySelector(Ve), ya = gt == null ? void 0 : gt.querySelector(":scope > .activityRows"), $e = gt == null ? void 0 : gt.querySelector(":scope > .activityHeader");
      if (!ya || !$e) return;
      const Yt = ya.getBoundingClientRect().top - gt.getBoundingClientRect().top, Jo = Ht.rows === 1 ? Ht.h : Math.floor(Ht.h - Yt - parseFloat(getComputedStyle(gt).paddingBottom)), Sl = Math.max(1, Math.floor(Jo / bo));
      ya.style.setProperty("--fill-row", (Jo / Sl).toFixed(2) + "px"), ya.style.maxHeight = Jo + "px";
    }), ar = Math.max(0, ...[...xe.values()].map((K) => K.row + K.rows));
    let q = ao + ar * vo - Jt;
    q = tl(ra && !a, pe, xe, q, d, u), E.style.height = q + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), b.forEach((K) => el.observe(K.el)), Go(), fa();
  }
  const Ta = () => {
    wo || (wo = !0, requestAnimationFrame(() => {
      wo = !1, Gt();
    }));
  }, el = new ResizeObserver(() => {
    kt || Ta();
  });
  function tl(e, a = [], i = /* @__PURE__ */ new Map(), d = 0, u = 1, m = go) {
    E.querySelectorAll(".tfEditChips").forEach((H) => {
      (!e || !H.closest(".tfBoardItem")) && H.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((H) => H.remove()), E.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((O) => {
      O.classList.contains("tfEditChips") || O.toggleAttribute("inert", e);
    }));
    let f = E.querySelector(".tfBoardCells"), b = E.querySelector(".tfBoardLand");
    if (!e)
      return f == null || f.remove(), b == null || b.remove(), Hn(), d;
    const M = ar + Fo;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), E.prepend(f)), f.style.top = ao + "px", f.dataset.size !== u + "x" + M + "x" + m && (f.dataset.size = u + "x" + M + "x" + m, f.style.gridTemplateColumns = "repeat(" + u + "," + m + "px)", f.innerHTML = "<i></i>".repeat(u * M)), d = Math.max(d, ao + M * vo - Jt), a.forEach((H) => {
      const O = H.el;
      !O || O.querySelector(":scope > .tfEditChips") || O.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Id + '</span><button class="tfEditChip" type="button" data-board-more="' + de(H.key) + '" aria-label="' + de(kn(H.key)) + ' options" aria-haspopup="menu">' + Ch + "</button></div>");
    }), kt && i.has(kt.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(b));
      const H = i.get(kt.key);
      Object.assign(b.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else b == null || b.remove();
    const D = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const H = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((O) => {
        const pe = O.getBoundingClientRect(), Te = O.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + de(Te) + '" aria-label="Hide ' + de(Me(Te)) + ' from the dashboard" style="left:' + Math.round(pe.right - H.left - 42) + "px;top:" + Math.round(pe.top - H.top + (pe.height - 32) / 2) + 'px">' + ep + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let nr = "";
  function or(e) {
    ra = e, e || (kt = null, qa = ja = !1, Hn()), Gt(), e ? nr = JSON.stringify(z) : nr && JSON.stringify(z) !== nr && rn("Changes saved");
  }
  function Or(e, a) {
    var Q, xe;
    Hn();
    const i = Wo.get(e), { n: d } = In(E.clientWidth), u = Pt(), m = u.spans[e] ?? 2;
    if (!i) return;
    const f = i.cols >= d, b = (q, le, K) => '<button type="button" role="menuitem" data-board-act="' + q + '"' + (K ? " disabled" : "") + ">" + le + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", kn(e) + " options");
    const D = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), H = Oo(e), O = Pn(e), pe = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + tr.map((q, le) => '<button type="button" role="menuitemradio" aria-checked="' + (le + 1 === O) + '" aria-label="' + q + ", " + (le + 1) + (le ? " rows" : " row") + '" data-board-act="h:' + (le + 1) + '"' + (le < H ? "" : " disabled") + ">" + q + "</button>").join("") + "</div></div>", Te = Js.includes(e) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + vi.map((q, le) => '<button type="button" role="menuitemradio" aria-checked="' + (le + 1 === Math.min(m, d)) + '" aria-label="' + q + ", " + (le + 1) + (le ? " columns" : " column") + '" data-board-act="w:' + (le + 1) + '"' + (le < d ? "" : " disabled") + ">" + q + "</button>").join("") + "</div></div>" : "";
    M.innerHTML = pe + Te + (e === "energy" ? b("graph", (((Q = u.opts.energy) == null ? void 0 : Q.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", f || i.col === 0) + b("right", "Move right", f || i.col + i.cols >= d) + b("up", "Move up", i.row <= 0) + b("down", "Move down") + (D ? b("remove", "Remove") : b("hide", "Hide")), E.appendChild(M);
    const Le = Math.min(i.x + i.w - M.offsetWidth, E.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, Le) + "px", top: i.y + 28 + "px" }), Ca = { key: e, menu: M, opener: a }, (xe = M.querySelector("button:not([disabled])")) == null || xe.focus();
  }
  function Hn(e) {
    if (!Ca) return;
    const { menu: a, opener: i } = Ca;
    Ca = null, a.remove(), e && (i == null || i.focus());
  }
  const xo = () => Object.fromEntries([...Wo].map(([e, a]) => [e, { col: a.col, row: a.row }]));
  function od(e, a) {
    var f, b;
    if (a === "remove") {
      Hn(), ir(e);
      return;
    }
    const i = z, d = Pt(), u = xo(), m = u[e] || { col: 0, row: 0 };
    a.startsWith("w:") && (d.spans = { ...d.spans, [e]: Number(a.slice(2)) }), a.startsWith("h:") && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((f = d.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (u[e] = { ...m, col: m.col - 1 }), a === "right" && (u[e] = { ...m, col: m.col + 1 }), a === "up" && (u[e] = { ...m, row: m.row - 1 }), a === "down" && (u[e] = { ...m, row: m.row + 1 }), a === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(a) && (kt = { key: e, col: u[e].col, row: u[e].row }), no(d, u), kt && (Gt(), kt = null, no(Pt(), xo())), Hn(), a === "graph" && (wa.delete("dash:energy"), da()), a.startsWith("h:") && e.includes(".") && da(), Gt(), a !== "hide" ? (b = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || b.focus() : rn(kn(e) + " hidden", lr(i));
  }
  const al = (e) => {
    var a;
    return Ma.includes(e) && !(((a = z.dash) == null ? void 0 : a.cells) || {})[e] ? " added" : " put back";
  };
  function Wr(e) {
    const a = Pt(), i = kn(e) + al(e);
    on({ ...a, hidden: a.hidden.filter((d) => d !== e) }), Gt(), rn(i);
  }
  const oo = () => Pt().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Pt().hidden.includes(e));
  function Mn(e, a) {
    const i = Pt();
    no({ ...i, tiles: e, hidden: i.hidden.filter((d) => !d.includes(".")) }, a), da(), fa();
  }
  const ws = (e) => {
    Mn([...oo().filter((a) => a !== e), e], xo()), rn(Me(e) + " added"), Mi(e);
  }, ir = (e) => {
    const a = z, i = xo();
    delete i[e], Mn(oo().filter((d) => d !== e), i), rn(Me(e) + " removed", lr(a));
  };
  let xs = 0;
  function rn(e, a = null) {
    var f;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), a) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(xs), i.classList.remove("show", "withAction"), a();
      }), i.appendChild(b);
    }
    const d = h.getBoundingClientRect(), u = (f = n.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), m = It.classList.contains("open") && !Tn ? Math.min(d.right, It.getBoundingClientRect().left) : d.right;
    i.style.left = (d.left + m) / 2 + "px", i.style.bottom = (u != null && u.height ? window.innerHeight - u.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!a), clearTimeout(xs), xs = setTimeout(() => i.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const sn = 700, rr = 1e3, La = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  La.setAttribute("role", "tooltip"), La.setAttribute("aria-hidden", "true"), h.appendChild(La);
  let io = null, yi = 0, ln = 0, nl = -1 / 0;
  const Sn = (e) => {
    if (e.nodeType !== 1) return !1;
    const a = getComputedStyle(e);
    return a.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || a.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, qr = (e) => {
    for (let a = e; a && a !== h; a = a.parentElement) if (Sn(a)) return a;
    return null;
  };
  function ol(e, a) {
    clearTimeout(yi), clearTimeout(ln);
    const i = () => {
      if (!e.isConnected) return;
      io = e, La.textContent = a, La.hidden = !1;
      const d = e.getBoundingClientRect(), u = La.getBoundingClientRect(), m = d.top - u.height - 8 >= 8 ? d.top - u.height - 8 : d.bottom + 8;
      La.style.left = Math.max(8, Math.min(window.innerWidth - u.width - 8, d.left + d.width / 2 - u.width / 2)) + "px", La.style.top = m + "px";
    };
    !La.hidden || performance.now() - nl < rr ? i() : yi = setTimeout(i, sn);
  }
  function ki() {
    clearTimeout(yi), clearTimeout(ln), La.hidden || (nl = performance.now()), La.hidden = !0, io = null;
  }
  n.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (La.contains(e.target)) {
      clearTimeout(ln);
      return;
    }
    const a = qr(e.target);
    if (a && mt.names === "scroll" && a.matches(jr)) {
      Cn(a);
      return;
    }
    if (a) {
      a !== io ? ol(a, a.textContent.trim()) : clearTimeout(ln);
      return;
    }
    clearTimeout(yi), clearTimeout(ln), ln = setTimeout(ki, 120);
  }), n.addEventListener("focusin", (e) => {
    var d;
    const a = e.target;
    if (!((d = a.matches) != null && d.call(a, ":focus-visible"))) return;
    let i = [a, ...a.querySelectorAll("*")].filter(Sn);
    mt.names === "scroll" && (i.filter((u) => u.matches(jr)).forEach(Cn), i = i.filter((u) => !u.matches(jr))), i.length && ol(a, i.map((u) => u.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (e) => {
    e.target === io && ki();
  }), n.addEventListener("keydown", (e) => {
    e.key === "Escape" && !La.hidden && (e.stopPropagation(), ki());
  }, !0), window.addEventListener("scroll", () => {
    (!La.hidden || yi) && ki();
  }, { capture: !0, passive: !0 });
  const jr = ".activityRowName,.activityRowMeta", sr = /* @__PURE__ */ new WeakSet();
  function Cn(e) {
    var m;
    if (mt.names !== "scroll" || sr.has(e) || (m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const a = e.scrollWidth - e.clientWidth;
    if (a < 2) return;
    const i = a / 30 * 1e3, d = 600 + i + 1e3 + i;
    sr.add(e), e.style.textOverflow = "clip";
    const u = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / d, easing: "ease-in-out" },
      { textIndent: -a + "px", offset: (600 + i) / d },
      { textIndent: -a + "px", offset: (1600 + i) / d, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: d });
    u.onfinish = u.oncancel = () => {
      e.style.textOverflow = "", sr.delete(e);
    };
  }
  const il = new IntersectionObserver((e) => e.forEach((a) => {
    a.isIntersecting && (il.unobserve(a.target), Cn(a.target));
  }), { threshold: 1 });
  let ys = !1;
  new MutationObserver(() => {
    ys || mt.names !== "scroll" || (ys = !0, setTimeout(() => {
      ys = !1, n.querySelectorAll(jr).forEach((e) => {
        !e.dataset.glided && Sn(e) && (e.dataset.glided = "1", il.observe(e));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const lr = (e) => () => {
    z = e, Ia(), da(), Gt(), fa();
  };
  function Mi(e) {
    const a = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var f;
      const i = a();
      if (!i) return;
      const d = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, u = i.getBoundingClientRect();
      (u.top < 0 || u.bottom > window.innerHeight) && i.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const m = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      i.animate([{ boxShadow: m(55) }, { boxShadow: m(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, id(e) ? 260 : 0);
  }
  function id(e) {
    const a = Wo.get(e);
    if (!a || !It.classList.contains("open") || Tn) return !1;
    const { n: i, w: d } = In(E.clientWidth), u = It.getBoundingClientRect().left - E.getBoundingClientRect().left, m = (M) => M * (d + Jt) + a.cols * d + (a.cols - 1) * Jt <= u;
    if (m(a.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    Wo.forEach((M, D) => {
      if (D !== e) for (let H = M.row; H < M.row + M.rows; H++) for (let O = M.col; O < M.col + M.cols; O++) f.add(O + "," + H);
    });
    const b = (M, D) => {
      for (let H = D; H < D + a.rows; H++) for (let O = M; O < M + a.cols; O++) if (f.has(O + "," + H)) return !1;
      return !0;
    };
    for (let M = 0; M <= ar; M++) for (let D = 0; D + a.cols <= i && m(D); D++)
      if (b(D, M))
        return no(Pt(), { ...xo(), [e]: { col: D, row: M } }), Gt(), !0;
    return !1;
  }
  const Si = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, It = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  It.setAttribute("aria-label", "Edit the dashboard"), It.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', h.appendChild(It);
  let Tn = !1, qa = !1, ja = !1, bt = null, za = !1;
  const Ci = {}, yo = (e, a) => {
    if (Ci[e] === a) return;
    Ci[e] = a;
    const i = It.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = a, fn(i);
  }, Aa = (e, a) => '<span class="tfTrayName"><span class="activityRowName">' + de(Me(e)) + '</span><span class="activityRowMeta">' + de(a) + "</span></span>", ks = (e, a, i) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + de(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + Id + '</span><span class="tfIcon"' + St(e, na(e)) + "></span>" + Aa(e, a ? "Hidden" + (Lt.get(e) ? " · " + Lt.get(e) : "") : Lt.get(e) || la(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + de(e) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + de(Me(e)) + ' on the dashboard">' + (a ? ep : Th) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + de(e) + '" aria-label="Remove ' + de(Me(e)) + ' from favourites">' + tp + "</button>" : "<span></span>") + "</li>";
  function Ms(e, a, i, d) {
    const u = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((f) => a(f) && !i.has(f) && y[f].state !== "unavailable").filter((f) => {
      const b = (Me(f) + " " + (Lt.get(f) || "") + " " + f).toLowerCase();
      return u.every((M) => b.includes(M));
    }).sort((f, b) => (Lt.get(f) || "~").localeCompare(Lt.get(b) || "~") || Me(f).localeCompare(Me(b))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + de(f) + '"><span class="tfIcon"' + St(f, na(f)) + "></span>" + Aa(f, Lt.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function fa() {
    const e = ra && h.classList.contains("tfBoard");
    if (It.classList.toggle("open", e), It.classList.toggle("tucked", e && Tn), It.toggleAttribute("inert", !e), e || (za = !1), dl(), !e) return;
    const a = It.querySelector("[data-tray-tuck]");
    a.innerHTML = Tn ? zc : ap, a.setAttribute("aria-expanded", String(!Tn)), a.setAttribute("aria-label", Tn ? "Show the edit tray" : "Tuck the edit tray away");
    const i = Pt().hidden.filter((f) => qo().some((b) => b.key === f));
    yo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + de(f) + '" aria-label="' + de(kn(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Id + "</span>" + de(kn(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), yo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Pt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + za + '">' + (za ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(z.favHidden || []), u = Ba(), m = [...u, ...[...d].filter((f) => !u.includes(f) && y[f])];
    yo("favs", m.map((f) => ks(f, d.has(f), u.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), It.querySelector('[data-pick="tiles"]').hidden = !ja, It.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ja)), ja && yo("tilepick", Ms(It.querySelector("[data-tile-search]").value, (f) => Ol.includes(f.split(".")[0]), new Set(oo()), "data-tile-pick")), It.querySelector('[data-pick="favs"]').hidden = !qa, It.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(qa)), qa && yo("pick", Ms(It.querySelector("[data-fav-search]").value, (f) => Si.test(f), new Set(Ba()), "data-fav-pick")), yo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (wn() ? " on" : "") + '" type="button" role="switch" aria-checked="' + wn() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const zo = (e) => {
    z = { ...z, ...e }, Ia(), da(), fa();
  };
  function rl(e, a) {
    const i = z, d = new Set(z.favHidden || []);
    a ? d.delete(e) : d.add(e), zo({ favHidden: [...d] }), a ? rn(Me(e) + " put back") : rn(Me(e) + " hidden", lr(i));
  }
  const rd = (e) => {
    const a = z;
    zo({ favourites: Ba().filter((i) => i !== e), favHidden: (z.favHidden || []).filter((i) => i !== e) }), rn(Me(e) + " removed from favourites", lr(a));
  }, sd = (e) => {
    zo({ favourites: [...Ba().filter((a) => a !== e), e], favHidden: (z.favHidden || []).filter((a) => a !== e) }), rn(Me(e) + " added to favourites");
  };
  It.addEventListener("click", (e) => {
    var i;
    const a = e.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? or(!1) : a.hasAttribute("data-tray-tuck") ? (Tn = !Tn, fa()) : a.hasAttribute("data-phone-toggle") ? (za = !za, fa(), za && ((i = Na.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? e.detail === 0 && (Wr(a.dataset.trayCard), fa()) : a.dataset.favEye ? rl(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? rd(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (qa = !qa, fa(), qa && It.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? sd(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (ja = !ja, fa(), ja && It.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? ws(a.dataset.tilePick) : a.hasAttribute("data-fav-suggest") && zo({ suggest: !wn() }));
  }), It.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && fa();
  }), It.addEventListener("keydown", (e) => {
    var i, d;
    const a = !!((d = (i = e.target).closest) != null && d.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(a ? ja : qa) || (e.stopPropagation(), a ? ja = !1 : qa = !1, fa(), It.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function sl(e, a, i, d) {
    e.preventDefault();
    const u = e.clientX, m = e.clientY;
    let f = null, b = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (O) => {
      if (!f) {
        if (Math.hypot(O.clientX - u, O.clientY - m) < 4) return;
        f = a.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = a.offsetWidth + "px", h.appendChild(f);
      }
      f.style.transform = "translate(" + (O.clientX - 24) + "px," + (O.clientY - 24) + "px)";
      const pe = !Tn && O.clientX >= It.getBoundingClientRect().left;
      if (i === "card") {
        const Q = E.getBoundingClientRect(), { w: xe } = In(E.clientWidth);
        kt = !pe && O.clientX >= Q.left && O.clientX <= Q.right && O.clientY >= Q.top + ao ? { key: d, col: Math.max(0, Math.floor((O.clientX - Q.left) / (xe + Jt))), row: Math.max(0, Math.floor((O.clientY - Q.top - ao) / vo)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, Gt();
        }));
        return;
      }
      const Te = E.querySelector(".tfDash-favs"), Le = Te == null ? void 0 : Te.getBoundingClientRect();
      if (bt = null, Le && !pe && O.clientX >= Le.left && O.clientX <= Le.right && O.clientY >= Le.top && O.clientY <= Le.bottom) {
        let Q = 1 / 0;
        Te.querySelectorAll('[data-k^="fav:"]').forEach((xe, q) => {
          const le = xe.getBoundingClientRect(), K = Math.hypot(O.clientX - (le.left + le.width / 2), O.clientY - (le.top + le.height / 2));
          K < Q && (Q = K, bt = { i: q, r: le, after: O.clientX > le.left + le.width / 2 });
        }), bt || (bt = { i: 0, r: null, after: !1 });
      }
      bt != null && bt.r ? (M.isConnected || h.appendChild(M), Object.assign(M.style, { left: (bt.after ? bt.r.right : bt.r.left) - 2 + "px", top: bt.r.top + 8 + "px", height: bt.r.height - 16 + "px" })) : M.remove();
    }, H = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), cancelAnimationFrame(b), f == null || f.remove(), M.remove(), i === "card") {
        if (!f) Wr(d);
        else if (kt != null && kt.fromTray) {
          Gt();
          const Q = kn(d) + al(d), xe = Pt(), q = xo();
          kt = null, no({ ...xe, hidden: xe.hidden.filter((le) => le !== d) }, q), rn(Q);
        }
        kt = null, Gt(), da(), fa();
        return;
      }
      if (!bt) return;
      const O = new Set(z.favHidden || []);
      O.delete(d);
      const pe = Ba().filter((Q) => Q !== d), Te = pe.filter((Q) => !O.has(Q)), Le = Te[Math.min(bt.i + (bt.after ? 1 : 0), Te.length)];
      pe.splice(Le ? pe.indexOf(Le) : pe.length, 0, d), bt = null, zo({ favourites: pe, favHidden: [...O] }), rn(Me(d) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  const Ss = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, dr = 136, cr = 288, ld = 0.8, ll = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Na = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Na.setAttribute("aria-label", "Phone order"), Na.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + tp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', h.appendChild(Na);
  let Cs = "";
  function dl() {
    var b;
    const e = za && ra && h.classList.contains("tfBoard") && !Tn;
    if (Na.classList.toggle("open", e), Na.toggleAttribute("inert", !e), !e) return;
    const a = bs().filter((M) => !Pt().hidden.includes(M.key)), i = a.length, d = (M) => Math.round(M * ld * 10) / 10 + "px", u = (M, D) => {
      const H = M.el.classList.contains("tfDac"), O = M.tile ? H ? cr : dr : Ss[M.key] || dr;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + de(M.key) + '" style="min-height:' + d(O) + '" aria-label="' + de(kn(M.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? St(M.key, na(M.key)) : St(M.key, ll[M.key])) + '></span><span class="tfPhoneName">' + de(kn(M.key)) + "</span></button>";
    }, m = '<div class="tfPhoneTitle">' + de(((b = E.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(Ss.sums) + '"><span class="tfPhoneName">' + de(kn("sums")) + "</span></div>" + a.map(u).join("");
    if (Na.querySelector('[data-phone="note"]').innerHTML = Pt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", m === Cs) return;
    Cs = m;
    const f = Na.querySelector('[data-phone="list"]');
    f.innerHTML = m, fn(f);
  }
  function cl(e, a) {
    var i;
    on({ ...Pt(), phone: e }), fa(), a && ((i = Na.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const ko = () => [...Na.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Vo(e, a) {
    e.preventDefault();
    const i = a.parentElement, d = Na.querySelector(".tfPhoneScreen"), u = ko().join();
    a.classList.add("moving");
    const m = (b) => {
      const M = d.getBoundingClientRect();
      b.clientY > M.bottom - 40 ? d.scrollTop += 12 : b.clientY < M.top + 40 && (d.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find((pe) => {
        const Te = pe.getBoundingClientRect();
        return pe !== a && b.clientX >= Te.left && b.clientX <= Te.right && b.clientY >= Te.top && b.clientY <= Te.bottom;
      });
      if (!D) return;
      const H = D.getBoundingClientRect(), O = D.classList.contains("tile") ? b.clientX < H.left + H.width / 2 : b.clientY < H.top + H.height / 2;
      i.insertBefore(a, O ? D : D.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const b = ko();
      Cs = "", b.join() !== u ? cl(b) : dl();
    };
    window.addEventListener("pointermove", m), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  Na.addEventListener("pointerdown", (e) => {
    const a = e.target.closest("[data-phone-key]");
    a && e.button <= 0 && Vo(e, a);
  }), Na.addEventListener("click", (e) => {
    var i;
    const a = e.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      za = !1, fa(), (i = It.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: d, ...u } = Pt();
      on(u), fa();
    }
  }), Na.addEventListener("keydown", (e) => {
    var f, b, M, D;
    if (e.key === "Escape") {
      e.stopPropagation(), za = !1, fa(), (f = It.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const a = (D = (M = (b = e.target).closest) == null ? void 0 : M.call(b, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!a || !i) return;
    e.preventDefault();
    const d = ko(), u = d.indexOf(a), m = u + i;
    m < 0 || m >= d.length || ([d[u], d[m]] = [d[m], d[u]], cl(d, a));
  });
  function Mo(e, a) {
    e.preventDefault();
    const i = a.parentElement;
    a.classList.add("moving");
    const d = (m) => {
      const f = [...i.children].find((b) => {
        const M = b.getBoundingClientRect();
        return b !== a && m.clientY >= M.top && m.clientY <= M.bottom;
      });
      if (f) {
        const b = f.getBoundingClientRect();
        i.insertBefore(a, m.clientY < b.top + b.height / 2 ? f : f.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const m = new Set(Ba());
      Ci.favs = null, zo({ favourites: [...i.children].map((f) => f.dataset.trayFav).filter((f) => m.has(f)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  It.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const a = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    a ? sl(e, a, "card", a.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? Mo(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && sl(e, i, "fav", i.dataset.trayFav);
  });
  function pl(e) {
    if (!ra || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = e.target.closest(".tfBoardItem"), i = a && qo().find((O) => O.el === a);
    if (!i || xi.includes(i.key)) return;
    const d = Wo.get(i.key), { w: u } = In(E.clientWidth);
    if (!d) return;
    e.preventDefault(), Hn();
    const m = e.clientX, f = e.clientY;
    let b = !1, M = 0;
    const D = (O) => {
      const pe = O.clientX - m, Te = O.clientY - f;
      if (!b) {
        if (Math.hypot(pe, Te) < 4) return;
        b = !0, kt = { key: i.key, col: d.col, row: d.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + pe + "px," + Te + "px)", kt.col = Math.round((d.x + pe) / (u + Jt)), kt.row = Math.round((d.y + Te - ao) / vo), M || (M = requestAnimationFrame(() => {
        M = 0, Gt();
      }));
    }, H = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), b && (cancelAnimationFrame(M), Gt(), a.classList.remove("tfDragging"), a.style.transform = "", kt = null, no(Pt(), xo()), Gt(), da());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  function Go(e = !1) {
    const a = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const i = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === i) return;
    const d = !a.dataset.drawn;
    a.dataset.drawn = i;
    const u = Ks.find((m) => m.id === a.dataset.graph);
    u ? Ra(a, u).then(() => {
      (e || d) && Ji(a);
    }) : Rs(a.dataset.graph, a).then(() => {
      e && mi(a);
    });
  }
  function ul() {
    var b, M, D;
    Qe = Sr.model(o()), Qn(), y = Qe.states, y[(b = z.sources) == null ? void 0 : b.grid] && (Qe.grid = z.sources.grid), y[(M = z.sources) == null ? void 0 : M.alarm] && (Qe.security.alarms = [z.sources.alarm]), L.forEach((H, O) => {
      const pe = y[O], Te = (pe == null ? void 0 : pe.attributes) || {};
      if (!pe || Date.now() - H.at > 2 * 60 * 1e3) {
        L.delete(O);
        return;
      }
      H.pos != null && pe.state !== "opening" && pe.state !== "closing" && Math.abs(Ya(O) - H.pos) < 1 && delete H.pos, H.tilt != null && Math.abs((Te.current_tilt_position ?? -1) - H.tilt) < 1 && delete H.tilt, H.pos == null && H.tilt == null && L.delete(O);
    });
    const e = [];
    let a = 0;
    const i = ci();
    Nt = i.filter((H) => H.room).map((H) => H.room), Nt.some((H) => H.id === re) || (re = ((D = Nt[0]) == null ? void 0 : D.id) || null);
    const d = Ee === "weather" ? { key: "weather", name: "Weather" } : Ee && i.find((H) => H.key === Ee);
    if (d || (Ee = null), h.classList.toggle("tfAreaOpen", !!d), h.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), h.classList.toggle("tfDash", !d), Lt = /* @__PURE__ */ new Map(), Qe.rooms.forEach((H) => [...H.actions, ...H.plugs, ...H.readings, ...H.openings, ...H.solar, ...H.plants.flatMap((O) => [O.id, ...O.readings])].forEach((O) => Lt.set(O, H.name))), !d) return eo(e, Vi());
    if (e.push({ key: "areahead", html: pr(d, ++a) }), d.key === "weather")
      return e.weather = ++a, e;
    const u = d.ids, m = d.room ? d.room.id : d.key, f = d.room;
    return f != null && f.solar.length && e.push({ key: "energy:" + f.id, html: $n(f, ++a) }), f && (f.readings.length || f.plugs.length || f.power != null) && e.push({ key: "readings:" + f.id, html: uo(f, ++a) }), f == null || f.plants.forEach((H) => e.push({ key: "plant:" + H.id, html: Ka(H, ++a) })), u.length && e.push({ key: "block:" + m, order: ++a, tiles: u.map((H) => ({ key: H, html: ke(H) })) }), e;
  }
  const pr = (e, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + zc + '</button><div class="settingsTitle">' + de(e.name) + "</div></div>";
  let fl = 0, Uo = null;
  const hl = (e) => e === "weather" ? ft.wx : E.querySelector(".tfAreas");
  function zr(e) {
    var a, i;
    Ee || (fl = On().scrollTop, Uo = ((a = hl(e)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), Ee = e, e.startsWith("room:") && (re = e.slice(5)), ro(), On().scrollTop = 0, (i = E.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let Fn = null;
  function ur(e, a) {
    if (Fn == null || Fn(), a == null) return;
    const i = On(), d = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let m = 0;
    const f = () => {
      cancelAnimationFrame(m), u.forEach((M) => window.removeEventListener(M, f, !0)), Fn = null;
    }, b = () => {
      const M = e();
      if (M != null && M.isConnected) {
        const D = M.getBoundingClientRect().top - a;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < d ? m = requestAnimationFrame(b) : f();
    };
    u.forEach((M) => window.addEventListener(M, f, { capture: !0, passive: !0 })), Fn = f, b();
  }
  function fr() {
    var i;
    const e = Ee;
    Ee = null, ro(), On().scrollTop = fl, ur(() => hl(e), Uo);
    const a = e.startsWith("room:") ? E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? ft.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || i.focus({ preventScroll: !0 });
  }
  const Ts = (e) => e.wrap ? e.wrap(e.tiles.map((a) => a.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + de(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((a) => a.html).join("") + "</div></div>", Yo = (e) => e.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function On() {
    for (let e = h.parentElement || h.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const a = getComputedStyle(e).overflowY;
      if ((a === "auto" || a === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Va(e) {
    const a = On(), i = (b) => {
      const M = b.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, d = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && i(b)), u = d == null ? void 0 : d.dataset.k, m = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const f = d != null && d.isConnected ? d : u && E.querySelector('[data-k="' + CSS.escape(u) + '"]');
    f != null && f.isConnected && m != null && (a.scrollTop += f.getBoundingClientRect().top - m);
  }
  function ro() {
    if (!w || !E) return;
    const e = ul();
    E.querySelectorAll("[data-tf]").forEach((i) => i.remove()), wa.clear();
    const a = document.createElement("div");
    a.innerHTML = e.map((i) => i.tiles ? Ts(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((d) => wa.set(d.key, d.html)) : wa.set(i.key, i.html)), Ea = Yo(e), E.append(...a.children), Cr(e.weather), ii(), el.disconnect(), Gt(), fn(E), Yr(E), Bn(E), G(), N && Rs(N.id), Ga(), $a(), wl(), requestAnimationFrame(ee);
  }
  const Ls = (e) => {
    var i;
    const a = n.activeElement && e.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (i = a.dataset) == null ? void 0 : i.act };
  }, hr = (e, a) => {
    var i;
    a && ((i = a.label && e.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && e.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function As(e, a) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(a), a;
    const i = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), d = a.querySelector(":scope > .tfDacPad");
    if (i)
      return (d == null ? void 0 : d.dataset.dac) !== i.dataset.dac ? (e.replaceWith(a), a) : (e.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((m) => a.hasAttribute(m) ? e.setAttribute(m, a.getAttribute(m)) : e.removeAttribute(m)), [...e.style].filter((m) => m.startsWith("--") && !m.startsWith("--tf-")).forEach((m) => e.style.removeProperty(m)), [...a.style].forEach((m) => e.style.setProperty(m, a.style.getPropertyValue(m))), e);
    if (e.tagName !== a.tagName || e.children.length !== a.children.length)
      return e.replaceWith(a), a;
    [...e.attributes].forEach((m) => {
      a.hasAttribute(m.name) || e.removeAttribute(m.name);
    }), [...a.attributes].forEach((m) => e.setAttribute(m.name, m.value));
    const u = [...a.children];
    return [...e.children].forEach((m, f) => As(m, u[f])), e;
  }
  function _s(e, a) {
    const i = document.createElement("div");
    i.innerHTML = a;
    const d = Ls(e), u = As(e, i.firstElementChild);
    fn(u), Yr(u), Bn(u), hr(u, d);
  }
  function da() {
    !w || !E || kt || Va(Vr);
  }
  function Vr() {
    if (!E.querySelector("[data-tf]")) {
      ro();
      return;
    }
    const e = ul();
    if (Yo(e) !== Ea) {
      ro();
      return;
    }
    const a = (i) => [...We.keys()].some((d) => {
      const u = d.slice(d.indexOf("|") + 1);
      return i === u || i.endsWith(":" + u);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((d) => {
      if (wa.get(d.key) === d.html || a(d.key)) return;
      const u = E.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (u) {
        if (wa.set(d.key, d.html), N && N.key === d.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = hn(N.id);
          return;
        }
        _s(u, d.html), N && N.key === d.key && Rs(N.id), d.key.startsWith("energy:") && Ga();
      }
    })), $a(), wl(), qi(), G(), Ke == null || Ke.update(), Ot == null || Ot.forEach((i) => i.update()), h.classList.contains("tfDash") && Ta(), requestAnimationFrame(ee);
  }
  const mr = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && He(e.color_mode)]],
    climate: (e) => [["Current temperature", Ha(e.current_temperature) + " °C"], ["Target", Ha(e.temperature) + " °C"], ["Action", He(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", He(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", He(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ha(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : He(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, Ti = (e) => {
    var i;
    const a = (((i = mr[e.split(".")[0]]) == null ? void 0 : i.call(mr, yt(e))) || []).filter(([, d]) => d != null && d !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([d, u]) => '<div class="tfMoreRow"><span>' + de(d) + "</span><span>" + de(u) + "</span></div>").join("") + "</div>" : "";
  }, ml = (e) => Di(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function dd(e, a = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + de(d.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + d.ids.map((u) => Er(u, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const rt = document.createElement("div");
  rt.className = "tfMoreBackdrop", rt.hidden = !0, h.appendChild(rt);
  const Es = (e, a) => {
    for (let i = e; i && i !== rt; i = i.parentElement) {
      const d = getComputedStyle(i).overflowY;
      if ((d === "auto" || d === "scroll") && i.scrollHeight > i.clientHeight + 1 && (a < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let xa = null;
  rt.addEventListener("touchstart", (e) => {
    xa = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), rt.addEventListener("touchmove", (e) => {
    var u, m;
    if (!xa || e.touches.length > 1 || (m = (u = e.target).closest) != null && m.call(u, "input,textarea,select")) return;
    const a = e.touches[0], i = xa.x - a.clientX, d = xa.y - a.clientY;
    xa = { x: a.clientX, y: a.clientY }, Math.abs(d) >= Math.abs(i) && !Es(e.target, d) && e.preventDefault();
  }, { passive: !1 }), rt.addEventListener("wheel", (e) => {
    Es(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function oa() {
    const e = rt.querySelector(".tfMorePair"), a = rt.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", oa, { passive: !0 }), w && Tt();
  let Wn = [];
  const gl = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function vl(e) {
    const a = (M, D = "") => '<div class="tfMoreHead">' + (I != null && I.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Nd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + de(M) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", i = (M, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + de(M) + "</div>" + (D ? '<div class="tfMoreSub">' + de(D) + "</div>" : "") + "</div>", d = dd;
    if (e === "favourites") {
      const M = Ba(), D = new Set(M), H = [{ name: "Starred", ids: M }, { name: "Home", ids: Qe.homeVacuums }, { name: "Security", ids: [...Qe.security.alarms, ...Qe.security.locks] }, ...Qe.rooms.map((O) => ({ name: O.name, ids: [...O.actions, ...O.plugs] }))].map((O, pe) => pe ? { ...O, ids: O.ids.filter((Te) => !D.has(Te)) } : O).filter((O) => O.ids.length);
      return [a("Favourites"), i(M.length ? M.length + " starred" : "None starred"), d(H, { star: !0 }, !0)];
    }
    const u = (M, { name: D = "", alert: H = !1, plain: O = !1 } = {}) => {
      const pe = O ? [] : M.filter((Q) => Ol.includes(Q.split(".")[0])), Te = M.filter((Q) => !pe.includes(Q)), Le = (Q) => Q.startsWith("vacuum.") && yt(Q).battery_level != null ? yt(Q).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + de(D) + "</div>" : "") + '<div class="tfMoreActions">' + pe.map((Q) => ke(Q, !0)).join("") + Te.map((Q) => Er(Q, { plain: O, alert: H, say: O ? Le(Q) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const M = Vi().find((pe) => pe.key === e.slice(8));
      if (!M) return null;
      const D = M.key === "light" ? (M.groups || []).flatMap((pe) => pe.ids) : [], H = D.some((pe) => {
        var Te;
        return ((Te = y[pe]) == null ? void 0 : Te.state) === "on";
      }), O = D.length ? '<button class="primary" type="button" data-acts="' + _n(D.map((pe) => ["light", H ? "turn_off" : "turn_on", pe])) + '">' + (H ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(M.name), '<div class="tfMoreNowRow">' + i(M.value) + O + "</div>", ...(M.groups || []).map((pe) => u(pe.ids, { name: pe.name === M.name ? "" : pe.name, alert: pe.alert, plain: M.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, M, D] = e.split(":"), H = Qe.rooms.find((Te) => Te.id === M), O = H && vn(H).find((Te) => Te.key === D);
      if (!O) return null;
      const pe = O.acts ? '<button class="primary" type="button" data-acts="' + _n(O.acts) + '">' + (O.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(H.name + " " + O.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(O.value) + pe + "</div>", u(bn(H, D))];
    }
    const m = e.split(".")[0], f = y[e], b = Ol.includes(m) ? ct(e) : { sections: [] };
    return [
      a(Me(e)),
      i(la(e), f.last_changed && Un(Date.parse(f.last_changed))),
      (I == null ? void 0 : I.at) && '<svg class="tfGraph tfDay" data-day="' + de(e) + '" role="img" aria-label="' + de(Me(e)) + ', last 24 hours"></svg>',
      m === "cover" && '<div data-cover-art="' + de(e) + '"></div>',
      ...b.sections.filter(Boolean),
      bl(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(I != null && I.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + ap + "</button>"
    ].filter(Boolean);
  }
  const bl = (e) => gl(e) ? "" : Ti(e) + ml(e);
  let Gr = "";
  function Ur(e) {
    var a;
    I && (I.details = e, $a(), (a = rt.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const gr = (e) => {
    const a = y[e], i = Ya(e), d = Yn(e);
    return { kind: Rd(a), name: Me(e), text: la(e), pos: i, target: Math.abs(d - i) > 0.5 ? d : null, moving: a.state === "opening" || a.state === "closing", tilt: Zn(e) ?? 100, canSet: qt(e, Kc) };
  };
  function Yr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((a) => {
      const i = a.dataset.coverArt, d = a.dataset.artKey || "more:" + i;
      let u = P.get(d);
      u || (u = ch({ onMove: (m) => Xo(i, m), onSet: (m) => {
        Xo(i, m), Ai("pos", i);
      } }), u.coverId = i, P.set(d, u)), a.replaceWith(u.el), u.update(gr(i));
    });
  }
  const So = (e) => [...P.values()].filter((a) => a.coverId === e), Zr = () => P.forEach((e) => {
    y[e.coverId] && e.update(gr(e.coverId));
  }), wl = () => {
    P.forEach((e, a) => {
      e.el.isConnected || (e.destroy(), P.delete(a));
    }), Zr();
  };
  function $a() {
    var m, f;
    if (!I || !(gl(I.id) || y[I.id])) {
      rt.hidden = !0;
      return;
    }
    if ([...We.keys()].some((b) => b.endsWith("|" + I.id))) {
      Zr();
      return;
    }
    const e = vl(I.id), a = rt.querySelector(".tfMore");
    if (!e) {
      Ko();
      return;
    }
    const i = Ls(rt), d = bl(I.id), u = I.frame ? I.frame.wide : I.id.startsWith("summary:") || I.id.startsWith("group:");
    if (rt.hidden || !a || e.length !== Wn.length || a.classList.contains("wide") !== u) {
      const b = Ds ? I.scroll || 0 : !rt.hidden && a ? a.scrollTop : 0;
      rt.innerHTML = '<div class="tfMorePair' + (rt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '"' + (I.frame ? ' style="height:' + I.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Nd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Gr = d, rt.classList.toggle("wide", u), rt.hidden = !1, oa(), Yr(rt), Bn(rt), fn(rt), rt.querySelectorAll("[data-day]").forEach((M) => fd(M.dataset.day, M, I.at)), b && (rt.querySelector(".tfMore").scrollTop = b), hr(rt, i), rt.contains(n.activeElement) || (m = rt.querySelector("[data-more-close]")) == null || m.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((b, M) => {
        var O, pe;
        if (b === Wn[M] || b.includes("data-cover-art") || a.children[M].contains((pe = (O = n.activeElement) == null ? void 0 : O.matches) != null && pe.call(O, "input,select") ? n.activeElement : null) || [...We.keys()].some((Te) => a.children[M].querySelector('[data-drag="' + CSS.escape(Te) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = b;
        const H = As(a.children[M], D.firstElementChild);
        fn(H), Bn(H);
      }), d !== Gr) {
        const b = rt.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), Gr = d;
      }
      rt.contains(n.activeElement) || hr(rt, i);
    }
    (f = rt.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(I.details && d)), Wn = e, Zr();
  }
  setInterval(() => {
    I && $a();
  }, 15 * 1e3);
  function vr(e, a) {
    var u;
    const i = !!(I && a && rt.contains(a)), d = i && rt.querySelector(".tfMore");
    i && (I.scroll = d.scrollTop), I = { id: e, opener: i ? I.opener : a, back: i ? I : null, frame: i ? I.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((u = a == null ? void 0 : a.dataset) == null ? void 0 : u.at) || null }, Zo();
  }
  let Ds = !1;
  function Zo() {
    Wn = [], Ds = !rt.hidden, P.forEach((e, a) => {
      a !== I.id && rt.contains(e.el) && (e.destroy(), P.delete(a));
    }), $a(), Ds = !1;
  }
  function Ko() {
    var i, d, u, m, f, b;
    const e = I == null ? void 0 : I.opener;
    I = null, P.forEach((M, D) => {
      rt.contains(M.el) && (M.destroy(), P.delete(D));
    }), ze.forEach((M, D) => {
      D.startsWith("more:") && ze.delete(D);
    }), rt.hidden = !0, rt.innerHTML = "";
    const a = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(a) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (d = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(a) : (u = e == null ? void 0 : e.dataset) != null && u.summary ? (m = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || m.focus(a) : (f = e == null ? void 0 : e.hasAttribute) != null && f.call(e, "data-favs-edit") && ((b = E.querySelector("[data-favs-edit]")) == null || b.focus(a));
  }
  function Kr(e, a, i, d = {}) {
    const u = a.map((xe) => xe[1]), m = d.zero ? 0 : Math.min(...u), f = Math.max(...u), b = Math.max(120, e.clientWidth || 260), M = Math.max(60, e.clientHeight || 130), D = 8, H = M - 20, O = Date.now() - 24 * 3600 * 1e3, pe = 24 * 3600 * 1e3, Te = (xe) => Math.max(0, Math.min(b, (xe - O) / pe * b)), Le = (xe) => f === m ? (D + H) / 2 : H - (xe - m) / (f - m) * (H - D);
    let Q = "M" + Te(a[0][0]).toFixed(1) + " " + Le(a[0][1]).toFixed(1);
    for (let xe = 1; xe < a.length; xe++) Q += d.smooth ? "L" + Te(a[xe][0]).toFixed(1) + " " + Le(a[xe][1]).toFixed(1) : "H" + Te(a[xe][0]).toFixed(1) + "V" + Le(a[xe][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + b + " " + M), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + Q + "V" + H + "H" + Te(a[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + Q + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + b + '" y="' + (M - 4) + '" text-anchor="end">Now</text>';
  }
  const $r = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, cd = (e, a) => {
    const i = e.split(".")[0];
    return $r[i] ? $r[i].includes(a) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, dn = (e) => {
    const a = e.split(".")[0], i = yt(e).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Fl.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Bs = /* @__PURE__ */ new Map();
  let pd = 0;
  async function ud(e) {
    let a = Bs.get(e);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let u = [];
      try {
        const m = await R({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        u = ((m == null ? void 0 : m[e]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      u.length || (u = (yn || []).filter((m) => m.entity_id === e).map((m) => [m.when * 1e3, String(m.state)])), a = { at: Date.now(), pts: u }, Bs.set(e, a);
    }
    const i = y[e], d = a.pts.slice().sort((u, m) => u[0] - m[0]);
    return i && (!d.length || d[d.length - 1][1] !== i.state) && d.push([Date.parse(i.last_changed) || Date.now(), i.state]), d;
  }
  async function fd(e, a, i) {
    const d = await ud(e);
    if (!a.isConnected) return;
    const u = d.map(([K, Ve]) => [K, Number(Ve)]);
    if (d.length > 1 && u.every(([, K]) => Number.isFinite(K))) {
      Kr(a, u, Me(e) + ", last 24 hours");
      return;
    }
    const m = Date.now(), f = m - 864e5, b = Math.max(200, a.clientWidth || 360), M = 62, D = (K) => Math.max(0, Math.min(b, (K - f) / 864e5 * b)), H = [];
    let O = null;
    d.forEach(([K, Ve]) => {
      const Ht = cd(e, Ve);
      Ht && O == null ? O = Math.max(K, f) : !Ht && O != null && (H.push([O, Math.max(K, f)]), O = null);
    }), O != null && H.push([O, m]);
    const pe = fi(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", Te = dn(e), Le = "tfDayClip" + ++pd, Q = H.map(([K, Ve]) => Te + (Ve >= m - 1e3 && K <= f + 1e3 ? " all day" : Ve >= m - 1e3 ? " since " + Ut(K) : K <= f + 1e3 ? " until " + Ut(Ve) : " " + Ut(K) + "–" + Ut(Ve)));
    let xe = "", q = -1 / 0;
    H.forEach(([K], Ve) => {
      const Ht = Q[Ve].length * 5.4, gt = Math.min(D(K), b - Ht);
      gt < q + 8 || (xe += '<text x="' + gt.toFixed(1) + '" y="10">' + de(Q[Ve]) + "</text>", q = gt + Ht);
    });
    let le = '<text x="' + b + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((K) => {
      let Ve = new Date(m).setHours(K, 0, 0, 0);
      Ve > m && (Ve -= 864e5), D(Ve) > 8 && D(Ve) < b - 34 && (le += '<text x="' + D(Ve).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(K).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + b + " " + M), a.setAttribute("aria-label", Me(e) + ", last 24 hours: " + (Q.length ? Q.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + Le + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + xe + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Le + ')">' + H.map(([K, Ve]) => '<rect x="' + D(K).toFixed(1) + '" y="18" width="' + Math.max(2, D(Ve) - D(K)).toFixed(1) + '" height="26" fill="' + pe + '"/>').join("") + "</g>" + (i && i >= f ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + le;
  }
  function xl(e) {
    var d;
    const a = Number((d = y[e]) == null ? void 0 : d.state), i = Date.now();
    if (yt(e).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), m = Math.max(1, i - u);
      return [...Array(49)].map((f, b) => u + m * b / 48).map((f) => [f, Math.round(a * Math.pow((f - u) / m, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((u, m) => [i - (48 - m) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(m / 6)) * 10) / 10]);
  }
  async function Rs(e, a) {
    var Te, Le;
    let i = Ie.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: mc() };
    else if (Di(e)) i = { at: Date.now(), points: xl(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const Q = new Date(Date.now() - 864e5).toISOString(), xe = await R({ type: "history/history_during_period", start_time: Q, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), q = ((xe == null ? void 0 : xe[e]) || []).map((le) => [le.lu != null ? le.lu * 1e3 : Date.parse(le.last_updated || le.last_changed), Number(le.s ?? le.state)]).filter(([le, K]) => Number.isFinite(le) && Number.isFinite(K));
        i = { at: Date.now(), points: q };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      Ie.set(e, i);
    }
    const d = a || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const u = y[e], m = ((Te = u == null ? void 0 : u.attributes) == null ? void 0 : Te.unit_of_measurement) || "", f = i.points.slice(), b = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(b) && !e.endsWith("_solar_power") && f.push([Date.now(), b]), f.length < 2) {
      d.setAttribute("aria-label", Me(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = f.map((Q) => Q[1]), D = Math.min(...M), H = Math.max(...M), O = (Q) => Q.toLocaleString(void 0, { maximumFractionDigits: Math.abs(Q) >= 100 ? 0 : 1 }), pe = ((Le = u == null ? void 0 : u.attributes) == null ? void 0 : Le.state_class) === "total_increasing";
    Kr(d, f, Me(e) + ", last 24 hours: " + (pe ? "+" + O(M[M.length - 1] - M[0]) : D === H ? O(D) : O(D) + " to " + O(H)) + (m ? " " + m : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function Ga() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const a = mc();
    Kr(e, a, "Solar, last 24 hours: up to " + Ha(Math.max(...a.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function yl(e, a) {
    const i = a.entity_id, d = L.get(i) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Ya(i) > 0 ? 0 : 100 }[e], m = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[e];
    u != null && (d.pos = u), m != null && (d.tilt = m), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), L.set(i, d);
  }
  function kl(e, a, i) {
    var u;
    const d = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof d != "string" || !gn[d] || !Gn(d) || i.brightness_pct != null || i.brightness != null ? [a, i] : a !== "turn_on" && !(a === "toggle" && ((u = y[d]) == null ? void 0 : u.state) !== "on") ? [a, i] : ["turn_on", { ...i, brightness_pct: gn[d] }];
  }
  function Co(e, a, i, d) {
    let u = { entity_id: i, ...d || {} };
    return [a, u] = kl(e, a, u), e === "cover" && yl(a, u), lt[i] = (lt[i] || 0) + 1, Ni.set(Jc, JSON.stringify(lt)), Sr.call(e, a, u) ? Promise.resolve() : Promise.resolve(ve(e, a, u));
  }
  function $o(e) {
    const [a, i, d, u] = e.split("|");
    Co(a, i, d, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function Xo(e, a) {
    We.set("pos|" + e, a), wa.delete(e), Wn = Wn.map(() => ""), [E, rt].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((u) => se(u, a)));
    const i = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(a) + "%"), (I == null ? void 0 : I.id) === e) {
      const d = rt.querySelector(".tfMoreState"), u = rt.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(a) + "%", d.classList.add("live")), u && (u.textContent = "Currently " + Ya(e) + "%");
    }
    So(e).forEach((d) => d.update(gr(e)));
  }
  const hd = (e, a) => {
    const i = e.shiftKey ? 10 : 1, d = { ArrowUp: a + i, ArrowRight: a + i, ArrowDown: a - i, ArrowLeft: a - i, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Xr(e, a) {
    var Q;
    const i = e.dataset.blocks;
    (Q = e.setPointerCapture) == null || Q.call(e, a.pointerId);
    const d = (xe) => {
      const q = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (xe.clientX - q.left) / q.width * 100));
    }, u = d(a), m = a.clientX;
    let f = !1, b = Yn(i), M = u, D = 0;
    const H = () => {
      b = Math.abs(M - b) < 0.2 ? M : b + (M - b) * 0.14, Xo(i, b), D = requestAnimationFrame(H);
    }, O = () => {
      f || (f = !0, e.classList.add("fine"), D = requestAnimationFrame(H));
    }, pe = setTimeout(O, 350), Te = (xe) => {
      M = d(xe), Math.abs(xe.clientX - m) > 6 && (clearTimeout(pe), O());
    }, Le = () => {
      clearTimeout(pe), cancelAnimationFrame(D), e.removeEventListener("pointermove", Te), e.removeEventListener("pointerup", Le), e.removeEventListener("pointercancel", Le), e.classList.remove("fine"), Xo(i, f ? Math.round(b) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), Ai("pos", i);
    };
    e.addEventListener("pointermove", Te), e.addEventListener("pointerup", Le), e.addEventListener("pointercancel", Le);
  }
  function br(e) {
    var u;
    const [a, i] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    N = { key: a, id: i, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, wa.delete(a), da(), (u = E.querySelector(".tfOpen [data-close]")) == null || u.focus({ preventScroll: !0 });
  }
  function To(e) {
    var a;
    re = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var u;
      const d = i === e;
      i.classList.toggle("active", d), i.setAttribute("aria-expanded", String(d)), (u = i.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !d);
    }), wa.set("areas", Jn(((a = E.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Li = {
    bright: { value: (e, a) => Math.round(a * 100), text: (e, a) => a ? a + "%" : "Off", send: (e, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (e, a) => {
      const [i, d] = No(e);
      return Math.round(i + a * (d - i));
    }, text: (e, a) => a.toLocaleString() + "k", send: (e, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (e, a) => Math.round(a * 360), text: () => "Colour", send: (e, a) => {
      var i;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((i = yt(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, a) => Math.round(a * 100), text: (e, a) => Math.round(a) + "%", send: (e, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (e, a) => Math.round(a * 100), text: (e, a) => "Tilt " + a + "%", send: (e, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (e, a) => Math.round(a * 100) / 100, text: (e, a) => Math.round(a * 100) + "%", send: (e, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function wr(e, a, i, d) {
    var M;
    const u = Li[a].value(i, d);
    We.set(a + "|" + i, u);
    const m = Math.round(d * 100) + "%", f = e.querySelector("i");
    if (a === "tilt") {
      f.style.width = "calc((100% - 8px) * " + d + ")";
      const [D, H] = e.querySelectorAll("span");
      D.classList.toggle("lit", d > 0.08), H.classList.toggle("lit", d > 0.92), wa.delete(i), Wn = Wn.map(() => ""), So(i).forEach((O) => O.update(gr(i)));
    } else if (f) f.style.width = m;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = m;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (M = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = Li[a].text(i, u));
  }
  function Ai(e, a) {
    const i = We.get(e + "|" + a), [d, u, m] = Li[e].send(a, i), f = () => setTimeout(() => {
      We.delete(e + "|" + a), da();
    }, 1500);
    Co(d, u, a, m).then(f, f);
  }
  function Lo(e) {
    e.addEventListener("click", (a) => {
      var d, u;
      const i = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Ca && !a.target.closest(".tfBoardMenu,[data-board-more]") && Hn(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (Ca == null ? void 0 : Ca.key) === i.dataset.boardMore ? Hn(!0) : Or(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) od(Ca.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) Wr(i.dataset.boardShow);
        else if (i.dataset.favHide) rl(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) Nr(i.dataset.energyPick);
        else if (i.dataset.act) $o(i.dataset.act);
        else if (i.hasAttribute("data-details")) Ur(!(I != null && I.details));
        else if (i.hasAttribute("data-details-close")) Ur(!1);
        else if (i.dataset.summary) ds(i.dataset.summary, i);
        else if (i.dataset.star) Ys(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const m = I.id;
          I = I.back, Zo(), (d = rt.querySelector('.tfMore [data-more="' + CSS.escape(m) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) vr("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([m, f, b, M]) => Co(m, f, b, M).catch(() => {
        }));
        else if (i.dataset.more) vr(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) Ko();
        else if (i.dataset.go) zr("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) fr();
        else if (i.dataset.open) br(i);
        else if (i.hasAttribute("data-close")) {
          const m = N;
          N = null, wa.delete(m.key), da(), (u = E.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || u.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && To(i);
    }), e.addEventListener("keydown", (a) => {
      var d, u, m, f, b, M, D;
      const i = a.target;
      if ((d = i.dataset) != null && d.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), br(i)), (u = i.dataset) != null && u.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Nr(i.dataset.energyPick)), (m = i.classList) != null && m.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), To(i)), (f = i.dataset) != null && f.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), ds(i.dataset.summary, i)), a.key === "Escape" && Ca && e === E) {
        a.preventDefault(), Hn(!0);
        return;
      }
      if (a.key === "Escape" && ra && e === E) {
        a.preventDefault(), or(!1), (b = c("dashEditNav")) == null || b.focus();
        return;
      }
      if (a.key === "Escape" && Ee && e === E && (a.preventDefault(), fr()), (M = i.dataset) != null && M.blocks) {
        const H = i.dataset.blocks, O = hd(a, Math.round(Yn(H)));
        if (O == null) return;
        a.preventDefault(), Xo(H, O), clearTimeout(me.get(H)), me.set(H, setTimeout(() => Ai("pos", H), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [H, O] = i.dataset.drag.split("|"), pe = Number(i.getAttribute("aria-valuenow")) / 100, Te = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, pe + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        wr(i, H, O, Te), Ai(H, O);
      }
    }), e.addEventListener("pointerdown", (a) => {
      var Ht;
      const i = a.target.closest("[data-blocks]");
      if (i && a.button === 0) {
        a.preventDefault(), Xr(i, a);
        return;
      }
      const d = a.target.closest("[data-drag]");
      if (!d || a.button > 0) return;
      const [u, m] = d.dataset.drag.split("|"), f = u === "bright" && !Gn(m), b = a.pointerType !== "mouse";
      if (f && !b) {
        $o(At("light", "toggle", m));
        return;
      }
      const M = u === "bright" && ((Ht = y[m]) == null ? void 0 : Ht.state) !== "on", D = u === "tilt" ? 4 : 0, H = () => d.getBoundingClientRect().width - D * 2, O = (gt) => {
        const ya = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (gt.clientX - ya.left - D) / H()));
      };
      let pe = b ? "waiting" : M ? "pressed" : "dragging", Te = 0;
      const Le = a.clientX, Q = a.clientY, xe = (gt, ya) => Math.hypot(gt.clientX - Le, gt.clientY - Q) > ya, q = () => {
        try {
          d.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      b || (a.preventDefault(), q()), pe === "dragging" && wr(d, u, m, O(a));
      const le = () => {
        var gt, ya;
        pe = "sliding", _ = d, d.classList.add("held"), q(), (gt = navigator.userActivation) != null && gt.hasBeenActive && ((ya = navigator.vibrate) == null || ya.call(navigator, 8)), Te = M ? (gn[m] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100;
      }, K = (gt) => {
        pe === "waiting" && xe(gt, k) ? !f && Math.abs(gt.clientX - Le) > Math.abs(gt.clientY - Q) ? le() : pe = "gone" : pe === "pressed" && xe(gt, 4) && (pe = "dragging"), pe === "sliding" ? wr(d, u, m, Math.max(0, Math.min(1, Te + (gt.clientX - Le) / H()))) : pe === "dragging" && wr(d, u, m, O(gt));
      }, Ve = (gt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((ya, $e) => d.removeEventListener(ya, $e ? Ve : K)), d.classList.remove("held"), _ === d && (_ = null), pe === "sliding" || pe === "dragging" ? Ai(u, m) : gt.type === "pointerup" && f ? $o(At("light", "toggle", m)) : gt.type === "pointerup" && M && (pe === "waiting" || pe === "pressed") && Co("light", "turn_on", m).catch(() => {
        });
      };
      d.addEventListener("pointermove", K), d.addEventListener("pointerup", Ve), d.addEventListener("pointercancel", Ve);
    }), e.addEventListener("touchmove", (a) => {
      _ && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return E && w && (Gi(), Lo(E), Lo(rt), rt.addEventListener("click", (e) => {
    e.target === rt && Ko();
  }), (Ns = n.getElementById("homeNav")) == null || Ns.addEventListener("click", () => {
    Ee && fr();
  }), (aa = n.querySelector(".bottomNav")) == null || aa.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + np + "</button>"), (Ml = c("dashEditNav")) == null || Ml.addEventListener("click", () => or(!ra)), E.addEventListener("pointerdown", pl), new ResizeObserver(() => {
    h.classList.contains("tfDash") && hs() !== us ? da() : Ta();
  }).observe(E), window.addEventListener("resize", Ta, { passive: !0 }), rt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), I != null && I.details ? Ur(!1) : Ko());
  })), J(), {
    update(e) {
      if (!w) return;
      const a = !Object.keys(y).length;
      y = { ...Object.fromEntries(Object.entries(y).filter(([d]) => Di(d))), ...e || {} };
      for (const d in y) d.startsWith("light.") && y[d].state === "on" && Gn(d) && x(d, zn(y[d]));
      a ? ro() : da();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Bo = !0, Ke == null || Ke.destroy(), Ke = null, Ot == null || Ot.forEach((e) => e.destroy()), Ot = null;
    },
    resume() {
      Bo = !1, !(!w || !(E != null && E.querySelector("[data-tf]"))) && (dt.isConnected && Cr(dt.style.order), ii());
    }
  };
}
const Hh = "0.63.0", Fd = "move_assistant", Fh = "move_assistant", rp = "move_assistant_checkin_reminder";
function Oh() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Wh extends HTMLElement {
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
    Oh();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${jp}${zp}${Vp}</style>${Gp}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const h = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Fd
      });
      c = (h == null ? void 0 : h.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = pu(l, {
      data: c,
      save: (h) => this._save(h),
      fire: (h, v) => this._fire(h, v),
      ws: (h) => this._hass.callWS(h),
      subscribe: (h, v) => {
        var w, A;
        return (A = (w = this._hass) == null ? void 0 : w.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(v, h) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var h, v;
        return Object.keys(((v = (h = this._hass) == null ? void 0 : h.services) == null ? void 0 : v.notify) || {}).sort();
      },
      setReminderAutomation: (h) => this._setReminderAutomation(h),
      setLight: (h) => this.classList.toggle("lightBody", h),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Ih(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var v;
        const h = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        h === this._lastSaved || h === this._pendingJson || (this._lastSaved = h, (v = this._app) == null || v.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: Fd }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Fd,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, o = {}) {
    var c, h;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((h = this._hass) == null || h.callWS({
      type: "fire_event",
      event_type: Fh,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${rp}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (v) {
        if ((v == null ? void 0 : v.status_code) !== 404 && (v == null ? void 0 : v.status) !== 404) throw v;
      }
      return;
    }
    const c = (v) => `${v}:00`, h = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: rp,
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
            data: { url: h, clickAction: h }
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Wh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Hh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
