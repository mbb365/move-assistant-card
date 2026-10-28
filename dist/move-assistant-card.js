const au = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', ou = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:none}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:none;width:46px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{padding:0 10px}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfAName{font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:10px 0;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:8px;max-width:calc(100% - 20px)}.tfACMain{max-width:100%;font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfBoardTray{position:absolute;z-index:1;display:flex;flex-wrap:wrap;gap:8px}#app.tfEditing .tfBoardTray .pill{cursor:pointer}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', iu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', ru = `<main id="app"><div class="shell">
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
`, oo = {
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
}, Dn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, gd = (n, s, o) => n + (s - n) * o, fl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(o.slice(u, u + 2), 16) || 0);
}, su = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), vd = {}, Ht = (n, s, o) => {
  const u = n + s + o;
  return vd[u] || (vd[u] = su(fl(n).map((m, h) => m + (fl(s)[h] - m) * o)));
}, bd = {}, cs = (n) => bd[n] || (bd[n] = fl(n)), Qs = (n, s, o, u) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let h = 0, w = 1, L = m;
  for (let v = 0; v < 18; v++)
    L = (h + w) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * o + L * L * L < m ? h = L : w = L;
  return 3 * (1 - L) * (1 - L) * L * s + 3 * (1 - L) * L * L * u + L * L * L;
}, lu = { std: Qs(0.2, 0, 0, 1), acc: Qs(0.3, 0, 1, 1), dec: Qs(0, 0, 0, 1) };
function gs(n, s) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || s ? "night" : "day");
}
function tc(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [Ht(s.clear[0], s.cloudy[0], 0.12), Ht(s.clear[1], s.cloudy[1], 0.12)], s.storm = [Ht(s.rain[0], "#000000", 0.22), Ht(s.rain[1], "#000000", 0.22)], s;
}
const gl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], vl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], bl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function wl(n, s = oo) {
  const o = { ...oo, ...s }, u = tc(o), m = String(n).split("/"), h = u[m[0]] ? m[0] : "clear", w = m[1] === "night", L = u[h][w ? 1 : 0], v = {
    night: w,
    clearness: h === "clear" ? 1 : h === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: gl.map(() => ({ o: 0 })),
    rain: vl.map(() => ({ o: 0, dy: -16 })),
    snow: bl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, I = (se) => gl.map(() => ({ o: se }));
  return h === "clear" ? w ? (v.moon.o = 1, v.stars = I(1)) : v.sun.o = 1 : h === "partly" ? (v.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (v.moon = { x: 34, y: 33, d: 48, o: 1 }, v.stars = I(0.7)) : v.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : h === "cloudy" || h === "fog" ? (v.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? v.moon = { x: 40, y: 36, d: 40, o: 0 } : v.sun = { x: 40, y: 36, r: 20, o: 0 }) : (v.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? v.moon = { x: 38, y: 28, d: 36, o: 0 } : v.sun = { x: 38, y: 28, r: 18, o: 0 }, h === "snow" ? v.snow = bl.map(() => ({ o: 1, dy: 0 })) : v.rain = vl.map((se, ne) => ({ o: h === "storm" && ne === 1 ? 0 : 1, dy: 0 })), h === "storm" && (v.bolt = { o: 1, dy: 0 })), v;
}
const wd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function du(n, s, o, u = oo, m = !1) {
  const h = { ...oo, ...u }, w = (N, B) => N > 0.01 && B > 0.01 ? "stay" : N > 0.01 ? "leave" : B > 0.01 ? "enter" : "none", L = (N, B, j, J) => {
    const z = N[0] + B * J, q = N[1] - (j - 1 - B) * J;
    return lu[N[2]](Dn((o - z) / Math.max(1e-3, q - z)));
  }, v = (N, B, j, J = 0, z = 1, q = 0) => {
    const K = w(N.o, B.o);
    if (K === "none") return { ...B, o: 0 };
    const F = L(wd[j][K], J, z, q), Y = {};
    for (const ae in B) Y[ae] = m && K !== "stay" && ae !== "o" ? K === "leave" ? N[ae] : B[ae] : gd(N[ae], B[ae], F);
    return Y;
  }, I = L(wd.sky, 0, 1, 0);
  let se, ne;
  if (n.night !== s.night) {
    const N = Math.min(n.clearness, s.clearness), B = Ht(Ht(n.sky, s.sky, 0.5), h.dusk, 0.6 * N);
    se = I < 0.5 ? Ht(n.sky, B, I * 2) : Ht(B, s.sky, I * 2 - 1), ne = N > 0.5 ? [n.sky, h.dusk, s.sky] : [n.sky, s.sky];
  } else
    se = Ht(n.sky, s.sky, I), ne = [n.sky, s.sky];
  return {
    night: o < 0.5 ? n.night : s.night,
    clearness: gd(n.clearness, s.clearness, o),
    sky: se,
    skyStops: ne,
    skyT: I,
    sun: v(n.sun, s.sun, "body"),
    moon: v(n.moon, s.moon, "body"),
    cloud: v(n.cloud, s.cloud, "cloud"),
    stars: s.stars.map((N, B) => v(n.stars[B], N, "fx", B, s.stars.length, 0.05)),
    rain: s.rain.map((N, B) => v(n.rain[B], N, "fx", B, s.rain.length, 0.05)),
    snow: s.snow.map((N, B) => v(n.snow[B], N, "fx", B, s.snow.length, 0.05)),
    bolt: v(n.bolt, s.bolt, "fx")
  };
}
const cu = [
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
], En = (n, s) => (cu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, uu = 0, Ml = 1, Cl = 2, Sl = 3, Tl = 4, An = 5, Vi = 6, Eo = 7, Ll = 8, ps = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), pu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), nc = (n, s, o) => {
  let u = !1;
  for (let m = 0, h = n.length - 1; m < n.length; h = m++) {
    const w = n[m], L = n[h];
    w[1] > o != L[1] > o && s < (L[0] - w[0]) * (o - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function ac(n, { size: s = 90, px: o = 2, oneBit: u = !1, colors: m = oo, ink: h = "#26221e", paper: w = "#fbf9f6", clock: L = 0, idle: v = !1 } = {}) {
  const I = { ...oo, ...m }, se = Math.sin, ne = Math.PI * 2, N = Math.max(6, Math.round(s / o)), B = N / 90, j = v ? Math.floor(L / 100) * 100 : 0, J = v ? se(ne * j / 3600) : 0, z = v ? 1.8 * se(ne * j / 6400) : 0, q = v ? 0.9 * se(ne * j / 4100) : 0, K = v ? 0.8 * se(ne * j / 5200) : 0, F = j / 3400 % 1, Y = v && n.bolt.o > 0.5 && (F < 0.04 || F > 0.08 && F < 0.11), ae = new Array(N * N), A = new Uint8Array(N * N), W = (b, M, k, T, re) => {
    k == null || b < 0 || M < 0 || b >= N || M >= N || (T >= 1 || T > En(b + 5, M + 3)) && (ae[M * N + b] = k, A[M * N + b] = re);
  }, fe = (b, M, k, T) => {
    for (let re = Math.max(0, Math.floor(M - k) - 1); re <= Math.min(N - 1, M + k + 1); re++) for (let $ = Math.max(0, Math.floor(b - k) - 1); $ <= Math.min(N - 1, b + k + 1); $++) T($, re, $ + 0.5 - b, re + 0.5 - M);
  }, Te = n.skyStops || [n.sky], g = n.skyT || 0;
  for (let b = 0; b < N; b++) {
    const M = n.night ? Dn(1 - (b + 0.5) / (N * 0.7)) * 0.85 : Dn(((b + 0.5) / N - 0.35) / 0.65) * 0.85;
    for (let k = 0; k < N; k++) {
      let T = Te[0];
      if (Te.length > 1) {
        const re = g * (Te.length - 1), $ = Math.min(Te.length - 2, Math.floor(re));
        T = re - $ > En(k, b) ? Te[$ + 1] : Te[$];
      }
      M > En(k + 2, b + 5) && (T = n.night ? Ht(T, "#000000", 0.28) : Ht(T, "#ffffff", 0.2)), ae[b * N + k] = Y ? Ht(T, "#ffffff", 0.25) : T;
    }
  }
  if (n.sun.o > 0.01) {
    const b = n.sun.x * B, M = n.sun.y * B, k = Math.max(1, n.sun.r * B);
    if (v) {
      const T = k * (1.45 + 0.06 * J), re = Ht(I.sun, "#ffffff", 0.55);
      if (fe(b, M, T, ($, ee, oe, de) => {
        const Pe = Math.sqrt(oe * oe + de * de);
        Pe > k && Pe < T && W($, ee, re, 0.26 * (1 - (Pe - k) / (T - k)) * n.sun.o, uu);
      }), n.sun.o > 0.5) {
        const $ = Math.floor(j / 500) % 2, ee = Math.max(1, k * 0.22);
        for (let oe = 0; oe < 8; oe++) if (oe % 2 === $) for (let de = k + 1.5; de < k + 1.5 + ee; de += 0.7) W(Math.floor(b + Math.cos(oe * Math.PI / 4) * de), Math.floor(M + Math.sin(oe * Math.PI / 4) * de), I.sun, n.sun.o, Ll);
      }
    }
    fe(b, M, k, (T, re, $, ee) => {
      if ($ * $ + ee * ee > k * k) return;
      const oe = (($ * 0.643 + ee * 0.766) / k + 1) / 2;
      W(T, re, Dn((oe - 0.62) / 0.38) > En(T, re) ? I.sunEdge : I.sun, n.sun.o, Ml);
    });
  }
  if (gl.forEach((b, M) => {
    const k = n.stars[M].o;
    if (k < 0.01) return;
    const T = Math.floor(b[0] * B), re = Math.floor(b[1] * B), $ = v ? (Math.floor(j / 300) + M * 3) % 6 : 0;
    if ($ === 5) return;
    const ee = Math.round(b[2] * B * ($ === 4 ? 0.3 : $ < 2 ? 1 : 0.6));
    W(T, re, I.star, k, Eo);
    for (let oe = 1; oe <= ee; oe++) {
      const de = oe === ee && ee > 1 ? Ht(I.star, n.sky, 0.5) : I.star;
      W(T - oe, re, de, k, Eo), W(T + oe, re, de, k, Eo), W(T, re - oe, de, k, Eo), W(T, re + oe, de, k, Eo);
    }
  }), n.moon.o > 0.01) {
    const b = Math.max(1.5, n.moon.d * B * 0.37), M = n.moon.x * B, k = n.moon.y * B + (v && K > 0.4 ? -1 : 0), T = M + 0.547 * b, re = k - 0.503 * b, $ = 0.82 * b, ee = Ht(I.moon, "#ffffff", 0.6);
    fe(M, k, b, (oe, de, Pe, tt) => {
      if (Pe * Pe + tt * tt > b * b) return;
      const Bt = oe + 0.5 - T, xt = de + 0.5 - re;
      Bt * Bt + xt * xt <= $ * $ || W(oe, de, Dn((tt + b) / (2 * b) * 1.1 - 0.1) > En(oe, de) ? I.moon : ee, n.moon.o, Cl);
    });
  }
  const ke = Math.max(2, Math.round(15.65 * B)), Ce = Math.max(1, Math.round(5.87 * B * 0.5));
  vl.forEach((b, M) => {
    const k = n.rain[M];
    let T = k.dy, re = k.o;
    if (re < 0.01) return;
    if (v) {
      const oe = (j / 950 + M / 3) % 1;
      T += -5 + oe * 14, re *= oe < 0.18 ? oe / 0.18 : oe > 0.72 ? (1 - oe) / 0.28 : 1;
    }
    const $ = (b[0] + 3 + z) * B, ee = (b[1] + T) * B;
    for (let oe = 0; oe < ke; oe++) for (let de = 0; de < Ce; de++) W(Math.floor($ - 0.208 * oe) + de, Math.floor(ee) + oe, I.rain, re, Tl);
  });
  const We = Math.max(0, Math.round(7.34 * B / 2.6));
  if (bl.forEach((b, M) => {
    const k = n.snow[M];
    let T = k.dy, re = 0, $ = k.o;
    if ($ < 0.01) return;
    if (v) {
      const de = (j / 3200 + M / 5) % 1;
      T += -6 + de * 14, re = 1.5 * se(ne * (de * 1.5 + M / 5)), $ *= de < 0.2 ? de / 0.2 : de > 0.75 ? (1 - de) / 0.25 : 1;
    }
    const ee = Math.floor((b[0] + 3.67 + re + z) * B), oe = Math.floor((b[1] + 3.67 + T) * B);
    W(ee, oe, I.snow, $, An);
    for (let de = 1; de <= We; de++)
      W(ee - de, oe, I.snow, $, An), W(ee + de, oe, I.snow, $, An), W(ee, oe - de, I.snow, $, An), W(ee, oe + de, I.snow, $, An), We > 1 && de < We && (W(ee - de, oe - de, I.snow, $, An), W(ee + de, oe - de, I.snow, $, An), W(ee - de, oe + de, I.snow, $, An), W(ee + de, oe + de, I.snow, $, An));
  }), n.bolt.o > 0.01)
    if (N >= 30) {
      const b = 39 + z, M = 50 + n.bolt.dy;
      for (let k = Math.floor(M * B); k <= (M + 28) * B; k++) for (let T = Math.floor(b * B); T <= (b + 13) * B; T++)
        nc(mu, (T + 0.5) / B - b, (k + 0.5) / B - M) && W(T, k, I.sun, n.bolt.o, Vi);
    } else {
      const b = N / 18, M = 7, k = 10 + Math.round(n.bolt.dy * 0.2);
      pu.forEach((T, re) => T.split("").forEach(($, ee) => {
        if ($ !== "#") return;
        const oe = Math.floor((M + ee) * b), de = Math.floor((k + re) * b);
        for (let Pe = de; Pe < Math.max(de + 1, Math.floor((k + re + 1) * b)); Pe++) for (let tt = oe; tt < Math.max(oe + 1, Math.floor((M + ee + 1) * b)); tt++) W(tt, Pe, I.sun, n.bolt.o, Vi);
      }));
    }
  if (n.cloud.o > 0.01) {
    const b = Math.max(3, n.cloud.w * B), M = b * 0.6665, k = (n.cloud.x + z) * B - b / 2, T = (n.cloud.y + q) * B - M / 2, re = Ht(I.cloudDay, I.cloudNight, Math.round(n.cloud.f * 4) / 4), $ = Ht(re, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(T) - 1); ee <= Math.min(N - 1, T + M + 1); ee++) for (let oe = Math.max(0, Math.floor(k) - 1); oe <= Math.min(N - 1, k + b + 1); oe++) {
      const de = (oe + 0.5 - k) / b, Pe = (ee + 0.5 - T) / b;
      ps(de, Pe) && W(oe, ee, !ps(de, Pe + 1 / b) || Dn((Pe - 0.42) / 0.25) * 0.8 > En(oe, ee) ? $ : re, n.cloud.o, Sl);
    }
  }
  return oc(ae, A, N, N, { oneBit: u, ink: h, paper: w, snowInk: !n.night });
}
function oc(n, s, o, u, { oneBit: m, ink: h, paper: w, snowInk: L }) {
  const v = new Uint8ClampedArray(o * u * 4), I = cs(h), se = cs(w);
  for (let ne = 0; ne < u; ne++) for (let N = 0; N < o; N++) {
    const B = ne * o + N, j = s[B];
    if (n[B] == null) continue;
    let J = cs(n[B]);
    if (m) {
      let z;
      j === Tl || j === Ll ? z = !0 : j === An ? z = L : j === Eo || j === Vi ? z = !1 : z = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= En(N, ne), (j === Ml || j === Cl || j === Sl || j === Vi) && (N > 0 && s[B - 1] !== j || N < o - 1 && s[B + 1] !== j || ne > 0 && s[B - o] !== j || ne < u - 1 && s[B + o] !== j) && (z = !0), J = z ? I : se;
    }
    v[B * 4] = J[0], v[B * 4 + 1] = J[1], v[B * 4 + 2] = J[2], v[B * 4 + 3] = 255;
  }
  return { w: o, h: u, data: v };
}
const hu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fu = (n) => gs(n, !1).split("/")[0], el = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", bu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], yu = [".##", "##.", ".#.", "#.."];
function ic(n, { width: s, height: o, colors: u, wave: m = 0.38, soft: h = 6, glow: w = 0.6 }) {
  const L = { ...oo, dawn: "#e5a77e", ...u }, v = tc(L), I = s, se = o, ne = I / 6, N = ne / 2, B = Math.PI * 2, j = n.length ? n : [{ cond: "cloudy", night: !1 }], J = [...Array(12)].map((F, Y) => {
    const ae = j[Math.min(Y, j.length - 1)], A = fu(ae.cond), W = Y % 2 === 1;
    return { cond: ae.cond, k: A, night: W, sky: v[A][W ? 1 : 0], cover: hu[A] };
  }), z = (F) => se * (0.5 - m * Math.cos(B * (F / ne - 0.25)));
  return { C: L, S: J, W: I, H: se, cw: ne, sw: N, TAU: B, yb: z, side: (F, Y, ae) => {
    const A = (F ? z(Y) - ae : ae - z(Y)) / Math.max(3, h * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (F) => {
    const Y = ((F / ne - 0.25) % 1 + 1) % 1, ae = Math.max(0, Math.min(5, Math.round(F / ne - 0.25))), A = Math.max(0, Math.min(5, Math.round(F / ne - 0.75))), W = 1 - (J[2 * ae].cover + J[2 * A + 1].cover) / 2, fe = Math.sin(Math.PI * Math.min(1, Math.max(0, z(F) / se)));
    return { c: Y < 0.5 ? L.dusk : L.dawn, a: w * (0.2 + 0.8 * W) * fe * fe };
  }, soft: h, tw: ne * 0.3, sy: se / 90 };
}
function rc(n, { clock: s = 0, ambient: o = !1, seed: u = 1 }) {
  const { S: m, sw: h, side: w, C: L, TAU: v, sy: I } = n, se = s, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((N, B) => {
    const j = el(u * 977 + B * 131 + 7), J = (B + 0.5) * h, z = N.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[N.k] : 0;
    for (let q = 0; q < z; q++) {
      const K = J + (j() - 0.5) * h * 1.6, F = (6 + j() * 76) * I, Y = j() < 0.35, ae = 1.8 + j() * 1.6, A = w(!0, K, F) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(v * se / 2600 + q * 1.7 + B) : 1);
      A >= 0.03 && ne.stars.push({ x: K, y: F, big: Y, size: ae, o: A });
    }
    if (!N.night && (N.k === "clear" || N.k === "partly")) {
      const q = J + (j() - 0.5) * h * 0.3, K = Math.min(15, h * 0.29);
      ne.suns.push({ x: q, y: 32 * I, rad: K, halo: K * 2.8 * (o ? 1 + 0.07 * Math.sin(v * se / 3600 + B) : 1) });
    }
    if (N.night && (N.k === "clear" || N.k === "partly")) {
      const q = Math.min(0.78, h * 0.55 / 34), K = J - 23 * q + (j() - 0.5) * h * 0.2;
      ne.moons.push({ x: K + 23 * q, y: (4 + (o ? 0.8 * Math.sin(v * se / 5200 + B) : 0)) * I + 23 * q, d: 46 * q });
    }
  }), m.forEach((N, B) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[N.k];
    if (!j) return;
    const J = el(u * 577 + B * 71 + 3), z = (B + 0.5) * h, q = N.k === "rain" || N.k === "storm" || N.night ? L.cloudNight : L.cloudDay, K = N.night ? 0.82 : N.k === "storm" ? 0.75 : 1;
    for (let F = 0; F < j; F++) {
      const Y = h / 46 * (N.k === "partly" ? 0.85 : 0.75 + J() * 0.55), ae = z + (N.k === "partly" ? h * 0.12 : (J() - 0.5) * h * 1.05), A = (N.k === "partly" ? 40 : 6 + J() * 26) * I, W = o ? 2.5 * Math.sin(v * se / 9e3 + B * 1.3 + F * 2.1) : 0, fe = o ? 0.9 * Math.sin(v * se / 6100 + B + F) : 0;
      ne.clouds.push({ x: ae - 23 * Y + W, y: A - 15.33 * Y + fe, w: 46 * Y, h: 30.66 * Y, fill: q, o: K * (j > 1 && F === 0 ? 0.85 : 1) });
    }
  }), m.forEach((N, B) => {
    const j = el(u * 313 + B * 29 + 11), J = (B + 0.5) * h, z = N.cond === "pouring" ? 16 : N.cond === "rainy" || N.cond === "hail" ? 9 : N.cond === "lightning-rainy" ? 12 : N.cond === "snowy-rainy" ? 5 : 0;
    for (let K = 0; K < z; K++) {
      let F = J + (j() - 0.5) * h * 1.05, Y = 44 + j() * 36, ae = 1;
      if (o) {
        const W = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (W - (Y - 44)), Y = 44 + W, ae = Math.min(1, W / 6, (36 - W) / 6);
      }
      Y *= I;
      const A = w(N.night, F, Y) * ae;
      A >= 0.05 && ne.drops.push({ x: F, y: Y, o: A });
    }
    const q = N.cond === "snowy" ? 11 : N.cond === "snowy-rainy" ? 6 : 0;
    for (let K = 0; K < q; K++) {
      let F = J + (j() - 0.5) * h * 1.05, Y = 40 + j() * 44, ae = 1;
      if (o) {
        const W = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + W, F += 1.6 * Math.sin(v * se / 2800 + K * 1.9 + B), ae = Math.min(1, W / 6, (44 - W) / 6);
      }
      Y *= I;
      const A = w(N.night, F, Y) * ae;
      A >= 0.05 && ne.flakes.push({ x: F, y: Y, o: A });
    }
    if (N.k === "fog") {
      const K = N.night ? "#c8ccd6" : "#ffffff", F = N.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(v * se / 8e3 + B) : 0;
      for (let ae = 0; ae < 4; ae++) ne.fogs.push({ x: J - h * 0.75 + ae % 2 * h * 0.18 + (ae % 2 ? Y : -Y), y: (30 + ae * 13) * I, w: h * 1.3, c: K, a: F });
    }
    if (N.k === "storm") {
      const K = (se / 3400 + B * 0.37) % 1;
      ne.bolts.push({ x: J + (j() - 0.5) * h * 0.3 - 5, y: 36 * I, o: o && !(K < 0.05 || K > 0.09 && K < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function ku(n, s, o, u, m, h, w, L) {
  const { S: v, C: I, cw: se, yb: ne, glowAt: N, soft: B, tw: j, sy: J } = n, z = new Array(o * u), q = new Uint8Array(o * u), K = new Uint8Array(o * u), F = (b, M, k, T, re) => {
    k == null || b < 0 || M < 0 || b >= o || M >= u || (T >= 1 || T > En(b + 5, M + 3)) && (z[M * o + b] = k, q[M * o + b] = re);
  }, Y = (b, M, k, T) => {
    for (let re = Math.max(0, Math.floor(M - k) - 1); re <= Math.min(u - 1, M + k + 1); re++) for (let $ = Math.max(0, Math.floor(b - k) - 1); $ <= Math.min(o - 1, b + k + 1); $++) T($, re, $ + 0.5 - b, re + 0.5 - M);
  }, ae = (b, M, k) => {
    for (let re = 0; re < b.length - 1; re++) {
      const $ = (re + M) * se;
      if (k < $ - j / 2) return [b[re], b[re], 0];
      if (k <= $ + j / 2) return [b[re], b[re + 1], (k - $ + j / 2) / j];
    }
    const T = b[b.length - 1];
    return [T, T, 0];
  }, A = v.filter((b) => !b.night).map((b) => b.sky), W = v.filter((b) => b.night).map((b) => b.sky), fe = B / h, Te = 16 * J / h;
  for (let b = 0; b < o; b++) {
    const M = (b + 0.5) * m, k = ne(M) / h, T = ae(A, 0.75, M), re = ae(W, 1.25, M), $ = N(M);
    for (let ee = 0; ee < u; ee++) {
      const oe = En(b, ee), de = ee + 0.5 - k, Pe = (fe > 0.01 ? Dn(0.5 + de / fe) : de > 0 ? 1 : 0) > oe;
      let tt = Pe ? T[2] > oe ? T[1] : T[0] : re[2] > oe ? re[1] : re[0];
      (Pe ? Dn(((ee + 0.5) / u - 0.45) / 0.55) * 0.7 : Dn(1 - (ee + 0.5) / (u * 0.55)) * 0.7) > En(b + 2, ee + 5) && (tt = Pe ? Ht(tt, "#ffffff", 0.18) : Ht(tt, "#000000", 0.25)), Pe && de >= 0 && de < Te && $.a * 1.3 * (1 - de / Te) > En(b + 6, ee + 1) && (tt = $.c), z[ee * o + b] = tt, K[ee * o + b] = Pe ? 0 : 1;
    }
  }
  const g = Ht(I.sun, "#ffffff", 0.55), ke = Ht(I.moon, "#ffffff", 0.6);
  s.stars.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    if (M < 0 || k < 0 || M >= o || k >= u || !K[k * o + M] || b.o < 0.15) return;
    const T = b.o > 0.45 ? I.star : Ht(I.star, z[k * o + M], 0.5), re = b.big && b.o > 0.6 ? Math.floor(b.size / m) : 0;
    F(M, k, T, 1, Eo);
    for (let $ = 1; $ <= re; $++) [[M - $, k], [M + $, k], [M, k - $], [M, k + $]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < o && ee[1] < u && K[ee[1] * o + ee[0]] && F(ee[0], ee[1], T, 1, Eo);
    });
  }), s.suns.forEach((b) => {
    const M = Math.max(1.5, b.rad / m), k = b.x / m, T = b.y / h, re = b.halo / m * 0.85;
    if (Y(k, T, re, ($, ee, oe, de) => {
      const Pe = Math.sqrt(oe * oe + de * de);
      Pe > M && Pe < re && !K[ee * o + $] && F($, ee, g, 0.3 * (1 - (Pe - M) / (re - M)), 0);
    }), L) {
      const $ = Math.floor(w / 500) % 2, ee = Math.max(1, M * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === $) for (let de = M + 1.2; de < M + 1.2 + ee; de += 0.7) F(Math.floor(k + Math.cos(oe * Math.PI / 4) * de), Math.floor(T + Math.sin(oe * Math.PI / 4) * de), I.sun, 1, Ll);
    }
    Y(k, T, M, ($, ee, oe, de) => {
      oe * oe + de * de <= M * M && F($, ee, Dn(((de / M + 1) / 2 - 0.6) / 0.4) > En($, ee) ? I.sunEdge : I.sun, 1, Ml);
    });
  }), s.moons.forEach((b) => {
    const M = Math.max(1.5, b.d * 0.37 / m), k = b.x / m, T = b.y / h, re = k + 0.547 * M, $ = T - 0.503 * M, ee = 0.82 * M;
    Y(k, T, M, (oe, de, Pe, tt) => {
      if (Pe * Pe + tt * tt > M * M) return;
      const Bt = oe + 0.5 - re, xt = de + 0.5 - $;
      Bt * Bt + xt * xt > ee * ee && F(oe, de, Dn((tt + M) / (2 * M) * 1.1 - 0.1) > En(oe, de) ? I.moon : ke, 1, Cl);
    });
  }), s.clouds.forEach((b) => {
    const M = Math.max(3, b.w / m), k = M * 0.6665, T = b.x / m, re = b.y / h, $ = Ht(b.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(re) - 1); ee <= Math.min(u - 1, re + k + 1); ee++) for (let oe = Math.max(0, Math.floor(T) - 1); oe <= Math.min(o - 1, T + M + 1); oe++) {
      const de = (oe + 0.5 - T) / M, Pe = (ee + 0.5 - re) / M;
      ps(de, Pe) && F(oe, ee, !ps(de, Pe + 1 / M) || Dn((Pe - 0.42) / 0.25) * 0.8 > En(oe, ee) ? $ : b.fill, b.o, Sl);
    }
  }), s.fogs.forEach((b) => {
    const M = Math.floor(b.y / h), k = Math.max(M, Math.floor((b.y + 6 * J) / h) - 1), T = Math.floor(b.x / m), re = Math.floor((b.x + b.w) / m);
    for (let $ = M; $ <= k; $++) for (let ee = T; ee <= re; ee++) {
      const oe = (ee - T) / Math.max(1, re - T);
      F(ee, $, b.c, b.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / h));
  s.drops.forEach((b) => {
    const M = b.x / m, k = Math.floor(b.y / h);
    for (let T = 0; T < Ce; T++) F(Math.floor(M - 0.208 * T * h / m), k + T, I.rain, b.o, Tl);
  });
  const We = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    F(M, k, I.snow, b.o, An);
    for (let T = 1; T <= We; T++)
      F(M - T, k, I.snow, b.o, An), F(M + T, k, I.snow, b.o, An), F(M, k - T, I.snow, b.o, An), F(M, k + T, I.snow, b.o, An);
  }), s.bolts.forEach((b) => {
    if (m <= 3.5)
      for (let M = Math.floor(b.y / h); M <= (b.y + 24) / h; M++) for (let k = Math.floor(b.x / m); k <= (b.x + 11) / m; k++)
        nc(xu, (k + 0.5) * m - b.x, (M + 0.5) * h - b.y) && F(k, M, I.sun, 1, Vi);
    else {
      const M = Math.round(b.x / m), k = Math.round(b.y / h);
      yu.forEach((T, re) => T.split("").forEach(($, ee) => {
        $ === "#" && F(M + ee, k + re, I.sun, 1, Vi);
      }));
    }
  }), { col: z, ids: q };
}
function Mu(n, s) {
  const o = s.px, u = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), h = s.width / u, w = s.height / m, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (B) => {
    const j = ic(B, s);
    return ku(j, rc(j, { clock: L, ambient: s.ambient, seed: s.seed }), u, m, h, w, L, s.ambient);
  }, I = v(n), se = s.reveal == null ? 1 : Dn(s.reveal);
  let ne = I.col, N = I.ids;
  if (se < 1) {
    const B = s.prev ? v(s.prev) : null, j = se * (u + 12);
    ne = new Array(u * m), N = new Uint8Array(u * m);
    for (let J = 0; J < u * m; J++) {
      const z = J % u, q = J / u | 0;
      (s.reduce ? se : Dn((j - z) / 12)) > En(z, q) ? (ne[J] = I.col[J], N[J] = I.ids[J]) : B ? (ne[J] = B.col[J], N[J] = B.ids[J]) : (ne[J] = null, N[J] = 255);
    }
  }
  return oc(ne, N, u, m, { oneBit: s.oneBit, ink: s.ink, paper: s.paper, snowInk: !1 });
}
function Cu(n, s, o) {
  const u = o.width, m = o.height, h = o.reveal == null ? 1 : Dn(o.reveal), w = (N, B) => {
    const j = ic(B, o);
    Su(N, j, rc(j, o));
  };
  if (n.clearRect(0, 0, u, m), h >= 1) {
    w(n, s);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = h, w(n, s), n.restore();
    return;
  }
  const L = n.canvas, v = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (v.width !== L.width || v.height !== L.height) && (v.width = L.width, v.height = L.height);
  const I = v.getContext("2d");
  I.setTransform(n.getTransform()), I.clearRect(0, 0, u, m), w(I, s);
  const se = h * (u + 64) - 64, ne = I.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), I.globalCompositeOperation = "destination-in", I.fillStyle = ne, I.fillRect(0, 0, u, m), I.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Su(n, s, o) {
  const { W: u, H: m, S: h, C: w, cw: L, yb: v, glowAt: I, soft: se, tw: ne, sy: N } = s, B = (g, ke) => {
    const Ce = cs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, j = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let We = 0; We < g.length - 1; We++) {
      const b = (We + ke) * L, M = (b - ne / 2) / u, k = (b + ne / 2) / u;
      M > 0 && M < 1 && Ce.addColorStop(M, g[We]), k > 0 && k < 1 && Ce.addColorStop(k, g[We + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, J = Math.max(24, Math.ceil(u / 4)), z = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= J; Ce++) {
      const We = u * Ce / J, b = g == null ? 0 : v(We) + g;
      Ce ? n.lineTo(We, b) : n.moveTo(We, b);
    }
    for (let Ce = J; Ce >= 0; Ce--) {
      const We = u * Ce / J;
      n.lineTo(We, v(We) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = j(h.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, m);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = I(u * g / 64);
    q.addColorStop(g / 64, B(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, z(g * 2 * N, (g + 1) * 2 * N);
  n.fillStyle = j(h.filter((g) => g.night).map((g) => g.sky), 1.25);
  const K = Math.max(0.5, se), F = 6;
  n.globalAlpha = 1, z(null, -K);
  for (let g = 0; g < F; g++)
    n.globalAlpha = 1 - (g + 0.5) / F, z(-K + 2 * K * g / F, -K + 2 * K * (g + 1) / F);
  n.globalAlpha = 1;
  const Y = new Path2D(bu), ae = new Path2D(vu), A = new Path2D(gu), W = new Path2D(wu);
  n.fillStyle = w.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Y), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const fe = Ht(w.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, B(fe, 0.42)), ke.addColorStop(0.7, B(fe, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Te = Ht(w.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Te), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ae), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), o.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, B(g.c, 0)), ke.addColorStop(0.25, B(g.c, g.a)), ke.addColorStop(0.75, B(g.c, g.a)), ke.addColorStop(1, B(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * N);
  }), n.fillStyle = w.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
function Tu(n, s) {
  var dd, cd, ud, pd, md, hd, fd;
  const o = (e) => n.getElementById(e), u = o("workoutView"), m = o("workoutNameInput");
  let h = !0;
  const w = o("homeClock");
  function L() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const v = o("createFlow"), I = o("createMovementsSlot"), se = o("createTimingSlot"), ne = o("createFinishSlot"), N = o("movementStepSummary"), B = o("timingStepSummary"), j = o("finishStepSummary"), J = o("continueToTiming"), z = o("continueToFinish"), q = o("finishMoveButton");
  let K = !1, F = [];
  function Y(e) {
    !e || F.some((a) => a.node === e) || F.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ae(e, a) {
    e && (Y(e), a.appendChild(e));
  }
  function A() {
    [...F].reverse().forEach(({ node: e, parent: a, next: r }) => {
      a && (r && r.parentNode === a ? a.insertBefore(e, r) : a.appendChild(e));
    }), F = [];
  }
  function W(e) {
    n.querySelectorAll(".createStep").forEach((a) => {
      a.classList.toggle("active", a.dataset.createStep === e);
    }), e === "timing" && (K = !0), fe();
  }
  function fe() {
    var Q, te;
    if (!mt) return;
    nt[dt];
    const e = en.filter((Z) => !Z.hidden), a = e.filter((Z) => Z.kind !== "rest").length, r = e.filter((Z) => Z.kind === "rest").length;
    N.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const c = a > 0, p = n.querySelector('[data-open-step="timing"]'), x = n.querySelector('[data-open-step="finish"]');
    p.disabled = !c, J.disabled = !c, B.textContent = c ? kn(M.value) + " · " + Tt(k.value) + " movement · " + Tt(T.value) + " rest" : "Add a movement first", x.disabled = !(c && K);
    const _ = ((m == null ? void 0 : m.value) || "").trim(), P = [];
    (Q = o("includeWarmupPreset")) != null && Q.checked && P.push("warm-up"), (te = o("includeCooldownPreset")) != null && te.checked && P.push("cooldown"), j.textContent = _ ? _ + (P.length ? " · " + P.join(" + ") : "") : P.length ? P.join(" + ") : "Name and optional extras";
  }
  function Te() {
    var Me, Ve, Le;
    v.hidden = !1, K = !1;
    const e = n.querySelector(".editNameRow"), a = o("createMoveOptions"), r = n.querySelector(".timeTiles"), c = o("routineSummaryModal"), p = n.querySelector(".tempoRevealRow"), x = o("tempoExperiment"), _ = (Me = o("warmupList")) == null ? void 0 : Me.closest("section"), P = o("movementCreatorLaunch"), Q = o("movementCreator"), te = (Ve = o("strengthList")) == null ? void 0 : Ve.closest("section"), Z = (Le = o("cooldownList")) == null ? void 0 : Le.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), _, P, Q, te, Z].forEach((ye) => ye && ae(ye, I)), [a, r, c, p, x].forEach((ye) => ae(ye, se)), ae(e, ne), W("movements"), fe();
  }
  function g() {
    A(), v.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || W(e.dataset.openStep);
  })), J.addEventListener("click", () => {
    J.disabled || W("timing");
  }), z.addEventListener("click", () => W("finish")), q.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ke = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), We = o("settingsNav");
  function b(e) {
    Object.entries(ke).forEach(([a, r]) => r.classList.toggle("active", a === e)), Ce.classList.toggle("active", e === "home"), We.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Zi, 400), e === "settings" && (requestAnimationFrame(() => hr(n.querySelector(".tab.active"), !1)), zr());
  }
  const M = o("totalTime"), k = o("workTime"), T = o("restTime"), re = o("totalOut"), $ = o("workOut"), ee = o("restOut"), oe = o("totalFill"), de = o("workFill"), Pe = o("restFill"), tt = o("roundsInput"), Bt = o("roundsFill"), xt = o("roundsOut"), pa = o("totalLabel"), Ma = o("routineSummaryModal"), _e = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ot = _e.map((e) => ({ ...e })), en = [
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
  const Ia = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Wt = Ia.map((e) => ({ ...e }));
  const gn = {
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
  }, ct = Do(s.data), nt = ct.profiles;
  let dt = nt[ct.selected] ? ct.selected : ct.order.find((e) => nt[e]) || "kettlebell";
  function Do(e) {
    const a = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(gn)), c = (Array.isArray(a.order) ? a.order : Object.keys(r)).filter((p) => r[p]);
    return Object.keys(r).forEach((p) => {
      c.includes(p) || c.push(p);
    }), {
      v: 1,
      profiles: r,
      order: c,
      selected: a.selected || c[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : Ha(a.energy)).map(pn),
      settings: { ...a.settings || {} }
    };
  }
  function Ha(e) {
    if (!Array.isArray(e)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((c) => {
      const p = new Date(c.at);
      if (isNaN(p)) return;
      const x = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0"), _ = p.getHours() < 14 ? "morning" : "evening";
      if (r.some((Q) => Q.date === x && Q.slot === _)) return;
      const P = a.indexOf(c.value) + 1;
      P > 0 && r.push({ date: x, slot: _, mood: null, energy: P, at: c.at });
    }), r;
  }
  function pn(e) {
    if (e.scale === 100) return e;
    const a = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: a(e.mood), energy: a(e.energy), scale: 100 };
  }
  function yn() {
    mt || (ct.selected = dt, ct.order = ct.order.filter((e) => nt[e] && e !== Rn), s.save(ct));
  }
  function ut() {
    return ct.settings;
  }
  function it(e) {
    const a = nt[e];
    if (!a) return;
    dt = e;
    const r = o("workoutNameInput");
    if (r && (r.value = a.name), M.value = a.total, k.value = a.work, T.value = a.rest, tt.value = a.rounds || 1, a.customSequence) {
      const c = (a.sequence || []).map((x) => ({ ...x })), p = (x) => c.filter((_) => _.presetRole === x).map(({ presetRole: _, ...P }) => P);
      ot = (a.warmup || p("warmup")).map((x) => ({ ...x })), Wt = (a.cooldown || p("cooldown")).map((x) => ({ ...x })), en = c.filter((x) => !x.presetRole), Wa(a.preset || "movement", !1);
    } else
      M.min = 3, M.max = 40, M.step = 1, k.min = 20, k.max = 60, k.step = 5, T.min = 5, T.max = 30, T.step = 5, ot = (a.warmup || _e).map((c) => ({ ...c })), Wt = (a.cooldown || Ia).map((c) => ({ ...c })), en = a.strength.map((c) => Array.isArray(c) ? (([p, x, _, P = !1]) => ({ id: p, name: x, group: _, kind: "work", hidden: !!P }))(c) : { ...c });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), O();
  }
  function Ie(e, a, r) {
    const c = e.getBoundingClientRect(), p = c.width / 2, x = c.height / 2, _ = a - p, P = r - x;
    let Q = 1 / 0, te = 1 / 0;
    _ !== 0 && (Q = p / Math.abs(_)), P !== 0 && (te = x / Math.abs(P));
    const Z = Math.min(Math.max(1 / Math.min(Q, te), 0), 1);
    let U = Math.atan2(P, _) * (180 / Math.PI) + 90;
    return U < 0 && (U += 360), { edge: Z, angle: U };
  }
  function Ft(e, a, r = !1) {
    const c = e.getBoundingClientRect(), p = a.clientX - c.left, x = a.clientY - c.top, { edge: _, angle: P } = Ie(e, p, x), Q = r ? 100 : _ * 100;
    e.style.setProperty("--edge-proximity", Q.toFixed(3)), e.style.setProperty("--cursor-angle", P.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || Q >= 30);
  }
  function Mt(e) {
    e.addEventListener("pointermove", (r) => Ft(e, r, !1)), e.addEventListener("pointerenter", (r) => Ft(e, r, !1)), e.addEventListener("pointerdown", (r) => Ft(e, r, !0));
    const a = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", a), e.addEventListener("pointerup", a), e.addEventListener("pointercancel", a);
  }
  Mt(o("addWorkoutPanel"));
  let mt = !1, Rn = null;
  function Ge(e) {
    return String(e ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function zi(e) {
    return e.summary ? e.summary : e.customSequence ? kn(e.total) + " · custom move" : kn(e.total) + " · " + Tt(e.work) + " / " + Tt(e.rest) + " · warm-up + cooldown";
  }
  function Ro(e, a) {
    var x;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const c = a.activityCount ?? (((x = a.sequence) == null ? void 0 : x.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ge(a.name) + '</div><div class="sub">' + Ge(zi(a)) + '</div><span class="sourceTag">' + Ge(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ge(a.name) + "</div></div>";
    const p = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(r, p), Mt(r), r.addEventListener("click", (_) => {
      _.target.closest("button") || it(e);
    }), r.addEventListener("keydown", (_) => {
      (_.key === "Enter" || _.key === " ") && !_.target.closest("button") && (_.preventDefault(), it(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), it(e), jn(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), it(e), qr();
    }), r;
  }
  function Nn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), ct.order.forEach((e) => {
      nt[e] && Ro(e, nt[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === dt));
  }
  Nn(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    mt = !0, Rn = "custom-" + Date.now(), nt[Rn] = {
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
    }, it(Rn), jn(!0);
  });
  let Ee = [], ze = 0, zt = 0, Bn = 1, vn = !1, Ct = null, Jn = null, Ot = !1, Pt = ct.settings.upcomingCount ?? "all", Fa = "movement";
  function mn(e, a, r) {
    return (Number(e) - a) / (r - a) * 100;
  }
  function Tt(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function kn(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function gt() {
    oe.style.width = mn(M.value, Number(M.min), Number(M.max)) + "%", de.style.width = mn(k.value, Number(k.min), Number(k.max)) + "%", Pe.style.width = mn(T.value, Number(T.min), Number(T.max)) + "%", $.textContent = Tt(k.value), ee.textContent = Tt(T.value);
    const e = Number(tt.value) || 1;
    Bt.style.width = mn(e, 1, 10) + "%", pa.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Pn(e) {
    return e.filter((a) => !a.hidden);
  }
  function qt(e) {
    const a = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    return (r ? r + ":" + String(c).padStart(2, "0") : c) + ":" + String(p).padStart(2, "0");
  }
  function No(e) {
    let a;
    try {
      a = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const r = a.hostname.replace(/^(www|m|music)\./, "");
    let c = null;
    if (r === "youtu.be") c = a.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(r))
      if (a.pathname === "/watch") c = a.searchParams.get("v");
      else {
        const P = a.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        P && (c = P[2]);
      }
    if (!c || !/^[\w-]{11}$/.test(c)) return null;
    const p = (P) => {
      if (!P) return 0;
      if (/^\d+$/.test(P)) return Number(P);
      const Q = P.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return Q ? (Number(Q[1]) || 0) * 3600 + (Number(Q[2]) || 0) * 60 + (Number(Q[3]) || 0) : 0;
    }, x = p(a.searchParams.get("t") || a.searchParams.get("start")), _ = p(a.searchParams.get("end"));
    return { id: c, start: x, end: _ > x ? _ : null };
  }
  function Oa(e, a) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || a || 300);
    const r = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > r ? Math.round(c - r) : Number(e.duration) || 300;
  }
  function Xn(e, a) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(a === "hour" ? r * 3600 : a === "min" ? r * 60 : r);
  }
  function Wa(e, a = !0) {
    Fa = e, n.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const r = nt[dt];
    r && (r.preset = e), e === "work" ? (M.min = 30, M.max = 480, M.step = 30, k.min = 300, k.max = 7200, k.step = 300, T.min = 60, T.max = 1800, T.step = 60, a && (M.value = 60, k.value = 1500, T.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (M.min = 3, M.max = 40, M.step = 1, k.min = 20, k.max = 60, k.step = 5, T.min = 5, T.max = 30, T.step = 5, a && (M.value = 20, k.value = 45, T.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), gt();
  }
  function S(e, a) {
    const r = Fa === "work";
    return e.map((c, p) => ({ ...c, id: a + "-" + p + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(k.value) }));
  }
  function E() {
    const e = nt[dt];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !ot.length && (ot = S(_e, "warm")), e.includeCooldown && !Wt.length && (Wt = S(Ia, "cool")), O());
  }
  function H() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const a = Math.max(1, Ee.length - 1), r = Pt;
    e.innerHTML = "";
    for (let x = 1; x <= a; x++) {
      const _ = document.createElement("option");
      _.value = String(x), _.textContent = String(x), e.appendChild(_);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const p = r === "all" ? "all" : String(Math.min(Number(r) || 1, a));
    e.value = p, Pt = p === "all" ? "all" : Number(p);
  }
  function O() {
    Number(M.value) * 60;
    const e = Number(k.value), a = Number(T.value), r = nt[dt], c = !!(r != null && r.customSequence), p = (c ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Pn(ot), x = Pn(en), _ = c && !r.includeCooldown ? [] : Pn(Wt);
    if (r && (r.total = Number(M.value), r.work = e, r.rest = a, r.rounds = Number(tt.value) || 1, r.customSequence ? (r.sequence = en.map((we) => ({ ...we })), r.warmup = ot.map((we) => ({ ...we })), r.cooldown = Wt.map((we) => ({ ...we }))) : (r.strength = en.map((we) => ({ ...we })), r.warmup = ot.map((we) => ({ ...we })), r.cooldown = Wt.map((we) => ({ ...we })))), r != null && r.customSequence) {
      const we = [...p.map((Je) => ({ ...Je, section: "warmup" })), ...x, ..._.map((Je) => ({ ...Je, section: "cooldown" }))].map((Je) => {
        if (Je.kind === "video") return { ...Je, duration: Oa(Je, e), rest: 0 };
        if (Je.kind === "rest") {
          const Jt = Je.useGlobalTiming === !0 ? a : Number(Je.duration) || a;
          return { ...Je, duration: Jt, rest: 0 };
        }
        const $t = Je.useGlobalTiming === !1 && Number(Je.duration) || e;
        return { ...Je, duration: $t, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Ee = [], we.forEach((Je, $t) => {
        Ee.push(Je);
        const Jt = we[$t + 1];
        Je.kind !== "rest" && Jt && Jt.kind !== "rest" && Ee.push({
          id: "auto-rest-" + $t,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ee = we;
    } else
      Ee = [...p.map((we) => ({ ...we, section: "warmup" })), ...x, ..._.map((we) => ({ ...we, section: "cooldown" }))].map((we) => we.kind === "video" ? { ...we, duration: Oa(we, e), rest: 0 } : we.kind === "rest" ? { ...we, duration: we.useGlobalTiming === !0 ? a : Number(we.duration) || a, rest: 0 } : { ...we, duration: we.useGlobalTiming === !1 && Number(we.duration) || e, rest: a }), Ee.forEach((we, Je) => {
        var $t;
        (($t = Ee[Je + 1]) == null ? void 0 : $t.kind) === "rest" && (we.rest = 0);
      }), Ee.length && (Ee[Ee.length - 1].rest = 0);
    const P = Math.max(1, Math.min(10, Number(tt.value) || 1)), Q = Ee, te = (we) => P <= 1 ? null : we.section === "warmup" || we.presetRole === "warmup" ? "first" : we.section === "cooldown" || we.presetRole === "cooldown" ? "last" : we.kind === "video" && (we.videoRounds === "first" || we.videoRounds === "last") ? we.videoRounds : null, Z = (we) => !!te(we), U = Q.filter((we) => !Z(we)), Me = Q.filter(Z), Ve = U.length, Le = U.reduce((we, Je) => we + Je.duration + Je.rest, 0), ye = Me.reduce((we, Je) => we + Je.duration + Je.rest, 0), ve = [
      Me.some((we) => we.section === "warmup" || we.presetRole === "warmup") && "warm-up",
      Me.some((we) => we.section === "cooldown" || we.presetRole === "cooldown") && "cooldown",
      Me.some((we) => we.kind === "video" && !we.section && !we.presetRole) && "video"
    ].filter(Boolean), at = ve.length > 1 ? ve.slice(0, -1).join(", ") + " & " + ve[ve.length - 1] : ve[0] || "";
    Ee = [];
    const st = (we, Je) => {
      const $t = te(we);
      return !$t || ($t === "first" ? Je === 1 : Je === P);
    };
    for (let we = 1; we <= P; we++)
      if (Q.filter((Je) => st(Je, we)).forEach((Je, $t) => Ee.push({ ...Je, id: Je.id + (P > 1 ? "-r" + we : ""), round: we, roundIndex: $t })), we < P && Ve)
        if (r != null && r.customSequence)
          Ee.push({ id: "round-break-" + we, name: "Rest", group: "Round " + (we + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: we, roundIndex: Ve, roundBreak: !0 });
        else {
          const Je = Ee[Ee.length - 1];
          Je.rest = a, Je.roundBreakAfter = !0;
        }
    gt();
    const Ae = Ee.reduce((we, Je) => we + Je.duration + Je.rest, 0), lt = Math.round(Le / 60), yt = Math.round(Ae / 60), Ke = P > 1 ? kn(lt) + " × " + P + " rounds" + (ye ? " + " + Tt(ye) + " " + at : "") + " (" + kn(yt) + ")" : kn(yt), Ue = [p.length ? "warm-up" : "", _.length ? "cooldown" : ""].filter(Boolean), Zt = r != null && r.customSequence ? Ke + " · " + Ve + " items" + (Ue.length && !(P > 1 && ye) ? " · " + Ue.join(" + ") : "") : Ke + " · " + Tt(e) + " / " + Tt(a) + (Ue.length && !(P > 1 && ye) ? " · " + Ue.join(" + ") : "");
    re.textContent = Tt(Le);
    const cn = Ee.filter((we) => !we.roundBreak).length, Et = P > 1 ? cn + " activities · " + P + " rounds" : Ve + " activities";
    xt.textContent = P > 1 ? P + " rounds · " + kn(yt) + " total" : "1 round", o("roundsCount").textContent = P, n.querySelectorAll("[data-rounds-step]").forEach((we) => {
      we.disabled = Number(we.dataset.roundsStep) < 0 ? P <= 1 : P >= 10;
    }), r && (r.summary = Zt, r.activityCount = Ve);
    const So = n.querySelector(".workoutPanel.active .sub");
    So && (So.textContent = Zt), Ma.textContent = Zt, Gi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((we) => we.textContent = Et), gt(), pt(), si(), Ho(), H(), mt && fe(), ke.workout.classList.contains("active") && !Ct && i();
  }
  const ue = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', be = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', me = {
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
  }, xe = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (me[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = xe(e.dataset.icon);
  });
  let ce = null, De = null;
  function je(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ye(e = !1) {
    const a = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), e && a.select());
  }
  function qe(e, a, r = {}) {
    const c = e.kind === "rest", p = e.kind === "video", x = p ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, _ = Number(c ? T.value : k.value), P = je(p ? e.useVideoLength === !1 ? e.duration : Oa({ ...e, useVideoLength: !0 }) : x ? _ : e.duration || _), Q = p && (Number(e.videoDuration) > 0 || Number(e.end) > 0), te = p ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ge(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ae, lt]) => '<option value="' + Ae + '"' + ((e.videoRounds || "every") === Ae ? " selected" : "") + ">" + lt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ge(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', Z = p ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (Q ? " · " + qt(Oa({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Tt(_), U = document.createElement("div");
    U.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), U.dataset.index = a, U.dataset.id = e.id;
    const Me = r.isNew ?? (De == null ? void 0 : De.item) === e, Ve = r.sheet ? '<div class="moveEditActions sheetActions">' + (Me ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ge(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Me ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    U.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (p ? " videoFields" : "") + '">' + te + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (x ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ge(Z) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + P.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ae) => '<option value="' + Ae + '"' + (Ae === P.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ae] + "</option>").join("") + "</select></div></div>" + Ve + "</div>";
    const Le = (Ae) => U.querySelector("[data-f=" + Ae + "]"), ye = () => {
      const Ae = Le("global").checked;
      Le("dur").disabled = Ae, Le("unit").disabled = Ae, U.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ae);
    };
    Le("global").addEventListener("change", ye), ye();
    const ve = () => {
      var Ae;
      if (r.sheet) {
        (Ae = r.onCancel) == null || Ae.call(r);
        return;
      }
      Me && Lt(), ce = null, O();
    }, at = () => {
      var yt;
      if (p) {
        st();
        return;
      }
      const Ae = Le("name").value.trim();
      if (!Ae) {
        Le("name").focus();
        return;
      }
      e.name = Ae, e.group = Le("group").value.trim() || (c ? "Rest" : "Movement");
      const lt = Le("global").checked;
      if (e.useGlobalTiming = lt, lt || (e.duration = Math.max(c ? 5 : 1, Xn(Le("dur").value, Le("unit").value))), r.sheet) {
        (yt = r.onSaved) == null || yt.call(r);
        return;
      }
      Me && (De = null), ce = null, O(), _t(Me ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, st = () => {
      var Ue;
      const Ae = Le("url").value.trim(), lt = No(Ae);
      if (!lt) {
        Le("urlError").hidden = !1, Le("url").classList.add("invalid"), Le("url").focus();
        return;
      }
      const yt = lt.id !== e.videoId;
      e.url = Ae, e.videoId = lt.id, e.start = lt.start, e.end = lt.end, yt && (e.videoDuration = null, e.videoError = null);
      const Ke = Le("name").value.trim();
      e.autoName = !Ke, e.name = Ke || (yt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Le("rounds").value, e.useVideoLength = Le("global").checked, e.useVideoLength || (e.duration = Math.max(5, Xn(Le("dur").value, Le("unit").value))), r.sheet ? (Ue = r.onSaved) == null || Ue.call(r) : (Me && (De = null), ce = null, O(), _t(Me ? "Video added" : "Video updated")), (yt || !e.videoDuration || e.autoName && !e.videoTitle) && Dc(e);
    };
    if (p && Le("url").addEventListener("input", () => {
      Le("urlError").hidden = !0, Le("url").classList.remove("invalid");
    }), U.querySelector("[data-a=cancel]").addEventListener("click", ve), U.querySelector("[data-a=save]").addEventListener("click", at), r.sheet && !Me) {
      U.querySelector("[data-a=hide]").addEventListener("click", () => {
        var lt;
        return (lt = r.onHide) == null ? void 0 : lt.call(r);
      });
      const Ae = U.querySelector("[data-a=remove]");
      mr(Ae, Ae.querySelector(".removeFill"), 1200, () => {
        var lt;
        return (lt = r.onRemove) == null ? void 0 : lt.call(r);
      });
    }
    return U.addEventListener("keydown", (Ae) => {
      Ae.key === "Escape" && (Ae.preventDefault(), Ae.stopPropagation(), ve()), Ae.key === "Enter" && Ae.target.matches("input") && (Ae.preventDefault(), at());
    }), U;
  }
  function Re(e, a) {
    const r = o(a);
    r.innerHTML = "", e.forEach((c, p) => {
      if (c === ce && !Qn()) {
        r.appendChild(qe(c, p));
        return;
      }
      const x = document.createElement("div");
      x.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (Is(c) ? " noMeta" : ""), x.dataset.index = p, x.dataset.id = c.id;
      const _ = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : Tt(c.duration) : c.useGlobalTiming === !1 ? Tt(c.duration) : "Global timing", P = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", Q = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + Tt(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? qt(Oa(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + _, te = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ge(c.name) + '. Drag, or use the up and down arrow keys">' + ue + "</button>", Z = '<div class="moveText"><div class="moveItemName">' + Ge(c.name) + P + '</div><div class="moveMeta">' + Ge(Q) + "</div></div>", U = (Le) => Le.addEventListener("keydown", (ye) => {
        var st, Ae;
        if (ye.key !== "ArrowUp" && ye.key !== "ArrowDown") return;
        ye.preventDefault();
        const ve = e.indexOf(c), at = ve + (ye.key === "ArrowUp" ? -1 : 1);
        at < 0 || at >= e.length || (e.splice(ve, 1), e.splice(at, 0, c), O(), (Ae = (st = o(a).children[at]) == null ? void 0 : st.querySelector(".dragHandle")) == null || Ae.focus());
      });
      if (Qn()) {
        x.classList.add("phoneRow"), x.tabIndex = 0, x.setAttribute("role", "button"), x.setAttribute("aria-label", "Edit " + (c.name || "step")), x.innerHTML = te + Z + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Le = x.querySelector(".dragHandle");
        Le.addEventListener("pointerdown", (ye) => Qe(ye, x, r, e)), U(Le), x.addEventListener("click", (ye) => {
          ye.target.closest(".dragHandle") || ji(c, e);
        }), x.addEventListener("keydown", (ye) => {
          ye.key === "Enter" && ye.target === x && (ye.preventDefault(), ji(c, e));
        }), r.appendChild(x);
        return;
      }
      x.innerHTML = te + Z + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ge(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ge(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + be + "</span></button></div>", x.querySelector(".editBtn").addEventListener("click", () => {
        Lt(), ce = c, O(), Ye();
      }), x.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, O();
      });
      const Me = x.querySelector(".removeBtn");
      mr(Me, Me.querySelector(".removeFill"), 1200, () => {
        const Le = e.indexOf(c);
        Le < 0 || (e.splice(Le, 1), O(), _t("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Le, e.length), 0, c), O();
        } }));
      });
      const Ve = x.querySelector(".dragHandle");
      Ve.addEventListener("pointerdown", (Le) => Qe(Le, x, r, e)), U(Ve), r.appendChild(x);
    });
  }
  const Fe = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Be = (e) => {
    var a;
    try {
      (a = navigator.vibrate) == null || a.call(navigator, e);
    } catch {
    }
  };
  function Qe(e, a, r, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const p = e.currentTarget, x = e.pointerId, _ = !Fe();
    try {
      p.setPointerCapture(x);
    } catch {
    }
    const P = a.closest(".exerciseScroller") || qn(a), Q = r.style.position;
    r.style.position = "relative";
    const te = [...r.children].filter((Xe) => Xe.classList.contains("moveRow")), Z = te.indexOf(a), U = parseFloat(getComputedStyle(r).rowGap) || 8, Me = a.offsetHeight, Ve = Me + U, Le = te.map((Xe) => Xe.offsetTop), ye = te.map((Xe) => Xe.offsetHeight), ve = () => r.getBoundingClientRect().top, at = r.getBoundingClientRect().width, st = e.clientY - (ve() + Le[Z]), Ae = e.clientX;
    let lt = e.clientY, yt = e.clientX, Ke = ve() + Le[Z], Ue = 0, Zt = 0, cn = 0, Et = 1, So = 0, we = Z, Je = !1, $t = 0, Jt = !1, Qr = !1, Bi = Le[Z];
    r.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", Be(8);
    const es = () => {
      const Xe = lt - st + Me / 2 - ve();
      let ft = 0;
      return te.forEach((At, Ln) => {
        Ln !== Z && Xe > Le[Ln] + ye[Ln] / 2 && ft++;
      }), ft;
    }, ts = () => {
      te.forEach((Xe, ft) => {
        if (ft === Z) return;
        const At = Z < we && ft > Z && ft <= we ? -Ve : Z > we && ft >= we && ft < Z ? Ve : 0;
        Xe.style.transform = At ? "translateY(" + At + "px)" : "";
      });
    }, wr = () => {
      const Xe = r.getBoundingClientRect(), ft = Math.abs(yt - Ae) > Math.max(80, at * 0.3) || yt < Xe.left - 24 || yt > Xe.right + 24;
      ft !== Je && (Je = ft, a.classList.toggle("willReturn", ft), Be(ft ? 10 : 4));
      const At = Je ? Z : es();
      At !== we && (we = At, ts(), Je || Be(4));
    }, To = () => {
      if (we === Z) return Le[Z];
      const Xe = te.filter((At, Ln) => Ln !== Z);
      let ft = Le[0];
      for (let At = 0; At < we; At++) ft += Xe[At].offsetHeight + U;
      return ft;
    }, Pi = () => {
      const Xe = _ ? Math.min(Math.abs(Ue) / 40, 1) : 0, ft = _ && !Jt ? Math.max(-3, Math.min(3, cn * 0.6)) : 0;
      a.style.transform = "translate(" + Zt.toFixed(2) + "px," + (Ke - (ve() + Le[Z])).toFixed(2) + "px) rotate(" + ft.toFixed(2) + "deg) scale(" + (Et * (1 - 0.04 * Xe)).toFixed(4) + "," + (Et * (1 + 0.06 * Xe)).toFixed(4) + ")";
    }, Ze = () => {
      $t = requestAnimationFrame(Ze);
      const Xe = yt - Ae, ft = Jt ? ve() + Bi : lt - st, At = Jt ? 0 : Je ? Xe * 0.9 : Math.max(-22, Math.min(22, Xe * 0.22)), Ln = Jt ? 1 : Je ? 0.97 : 1.035;
      if (!_) {
        Ke = ft, Zt = Jt ? 0 : At, Et = 1, Pi(), Jt && Nt();
        return;
      }
      const tu = Jt ? 0.24 : 0.2, nu = Jt ? 0.62 : 0.68;
      Ue = (Ue + (ft - Ke) * tu) * nu, Ke += Ue, cn = (cn + (At - Zt) * 0.16) * 0.7, Zt += cn, So = (So + (Ln - Et) * 0.22) * 0.6, Et += So, Pi(), Jt && Math.abs(Ue) < 0.15 && Math.abs(ft - Ke) < 0.5 && Math.abs(Zt) < 0.5 && Math.abs(Et - 1) < 3e-3 && Nt();
    }, St = setInterval(() => {
      if (!P || Jt) return;
      const Xe = P.getBoundingClientRect(), ft = 56, At = lt < Xe.top + ft ? -10 : lt > Xe.bottom - ft ? 10 : 0;
      At && (P.scrollTop += At, wr());
    }, 30);
    function Nt() {
      if (Qr) return;
      Qr = !0, cancelAnimationFrame($t);
      const Xe = we !== Z, ft = a.dataset.id;
      if (r.classList.remove("reordering"), te.forEach((Ln) => {
        Ln.style.transition = "none", Ln.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), r.style.position = Q, Xe) {
        const [Ln] = c.splice(Z, 1);
        c.splice(we, 0, Ln);
      }
      O();
      const At = ft && r.querySelector('.moveRow[data-id="' + ft + '"]');
      At && _ && At.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), Xe && _t("Order saved");
    }
    const Xt = (Xe) => {
      if (Xe.pointerId === x) {
        if (Xe.pointerType === "mouse" && Xe.buttons === 0) {
          $n();
          return;
        }
        lt = Xe.clientY, yt = Xe.clientX, wr();
      }
    }, Tn = (Xe) => {
      Xe.pointerId === x && $n();
    };
    function $n() {
      Jt || (window.removeEventListener("pointermove", Xt, !0), window.removeEventListener("pointerup", Tn, !0), window.removeEventListener("pointercancel", Tn, !0), p.removeEventListener("lostpointercapture", $n), clearInterval(St), Je && we !== Z && (we = Z, ts()), Bi = To(), Jt = !0, Be(6), setTimeout(Nt, 800));
    }
    window.addEventListener("pointermove", Xt, !0), window.addEventListener("pointerup", Tn, !0), window.addEventListener("pointercancel", Tn, !0), p.addEventListener("lostpointercapture", $n), $t = requestAnimationFrame(Ze), Pi();
  }
  function pt() {
    var p, x, _, P;
    const e = nt[dt], a = (p = o("warmupList")) == null ? void 0 : p.closest("section"), r = (x = o("cooldownList")) == null ? void 0 : x.closest("section"), c = (P = (_ = o("strengthList")) == null ? void 0 : _.closest("section")) == null ? void 0 : P.querySelector(".sectionTitle");
    e != null && e.customSequence ? (a && (a.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (a && (a.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), c && (c.textContent = "Kettlebell work")), Re(ot, "warmupList"), Re(en, "strengthList"), Re(Wt, "cooldownList");
  }
  function Lt() {
    if (!De) return;
    const { item: e, arr: a } = De;
    De = null;
    const r = a.indexOf(e);
    r >= 0 && a.splice(r, 1), ce === e && (ce = null);
  }
  function vt(e) {
    return e.id === "warmupList" ? { arr: ot, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Wt, kind: "cooldown", group: "Cooldown" } : { arr: en, kind: "work", group: "" };
  }
  function jt(e, a) {
    const r = vt(a), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(T.value) } : { id: "movement-" + c, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(k.value) };
  }
  const tn = "cubic-bezier(.34,1.46,.64,1)";
  function rn(e, a) {
    if (Fe() || !e) {
      a();
      return;
    }
    const r = (x) => {
      var _;
      return ((_ = x.dataset) == null ? void 0 : _.id) || x;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], p = new Map(c().map((x) => [r(x), x.getBoundingClientRect().top]));
    a(), c().forEach((x) => {
      const _ = p.get(r(x));
      if (_ === void 0) return;
      const P = _ - x.getBoundingClientRect().top;
      Math.abs(P) < 0.5 || x.animate([{ transform: "translateY(" + P + "px)" }, { transform: "none" }], { duration: 440, easing: tn });
    });
  }
  function Kt(e, a) {
    if (!e || Fe()) return;
    const r = e.offsetHeight, c = Math.max(0, r - (a || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: tn });
  }
  function io(e, a, r, c) {
    const { arr: p } = vt(a), x = jt(e, a);
    p.splice(Math.max(0, Math.min(r, p.length)), 0, x), De = { item: x, arr: p }, ce = x, rn(a.closest(".exerciseScroller,.createStepSlot") || a, () => O());
    const _ = a.querySelector(".moveRow.editing");
    return Kt(_, c), Ye(e === "rest"), _;
  }
  function qn(e) {
    for (let a = e; a && a.nodeType === 1; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if (/(auto|scroll)/.test(r) && a.scrollHeight > a.clientHeight) return a;
    }
    return null;
  }
  const ro = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function so(e, a) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + ue + '</span><span class="addGhostText"><strong>' + Ge(a[0]) + "</strong><small>" + Ge(a[1]) + "</small></span>", o("workoutModal").appendChild(r), r;
  }
  function Vn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ht(e, a, r, c) {
    (ce || De) && (Lt(), ce = null, O());
    const p = e.getBoundingClientRect(), x = so(a, ro[a]);
    x.setAttribute("aria-hidden", "true"), x.style.width = p.width + "px", x.style.height = p.height + "px", x.style.transform = "translate(" + p.left + "px," + p.top + "px)", e.classList.add("lifting");
    const _ = qn(e);
    return hn({
      ghost: x,
      origin: p,
      sx: r,
      sy: c,
      scroller: _,
      column: e.closest(".exerciseScroller,.createFlow") || _,
      home: () => e.getBoundingClientRect(),
      onDrop: (P, Q, te) => {
        Vn(x), e.classList.remove("lifting"), io(a, P, Q, te);
      },
      onReturn: () => {
        Vn(x), e.classList.remove("lifting");
      }
    });
  }
  function hn({ ghost: e, origin: a, sx: r, sy: c, scroller: p, column: x, home: _, onDrop: P, onReturn: Q, rowLook: te = !1 }) {
    var Pi;
    const Z = !Fe(), U = ((Pi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Pi.offsetHeight) || 80, Me = r - a.left, Ve = c - a.top, Le = 44;
    let ye = r, ve = c, at = a.left, st = a.top, Ae = 0, lt = 0, yt = !Z, Ke = null, Ue = null, Zt = -1, cn = 0, Et = null;
    const So = () => ["warmupList", "strengthList", "cooldownList"].map((Ze) => o(Ze)).filter((Ze) => Ze && Ze.getClientRects().length && !Ze.closest("[hidden]")), we = (Ze) => {
      if (Ze === Ke) return;
      Ke = Ze, e.classList.toggle("overList", !!Ze || te);
      const St = Ze ? Ze.getBoundingClientRect().width : a.width;
      e.style.width = St + "px", e.style.height = (Ze ? U : a.height) + "px";
    }, Je = (Ze) => {
      Ze.classList.add("leaving"), Ze.style.height = "0px", Ze.style.marginTop = "-8px", setTimeout(() => Ze.remove(), Z ? 320 : 0);
    }, $t = (Ze, St, Nt) => {
      if (Ue && Ue.parentNode === Ze && Zt === Nt || (Ue && (Je(Ue), Ue = null, Zt = -1), !Ze)) return;
      const Xt = document.createElement("div");
      Xt.className = "dropSlot", Ze.insertBefore(Xt, St), Ue = Xt, Zt = Nt, Xt.getBoundingClientRect(), Xt.style.height = U + "px", Xt.style.marginTop = "0px";
    }, Jt = () => {
      let Ze = null, St = 1 / 0;
      for (const $n of So()) {
        const Xe = $n.getBoundingClientRect();
        if (ye < Xe.left - 48 || ye > Xe.right + 48) continue;
        const ft = Xe.top - 28, At = Xe.bottom + 28, Ln = ve < ft ? ft - ve : ve > At ? ve - At : 0;
        Ln < St && (St = Ln, Ze = $n);
      }
      const Nt = x == null ? void 0 : x.getBoundingClientRect(), Tn = Nt && ye >= Nt.left && ye <= Nt.right && ve >= Nt.top && ve <= Nt.bottom || St === 0 ? Ze : null;
      if (Tn) {
        const $n = [...Tn.children].filter((ft) => ft.classList.contains("moveRow"));
        let Xe = $n.findIndex((ft) => {
          const At = ft.getBoundingClientRect();
          return ve < At.top + At.height / 2;
        });
        Xe < 0 && (Xe = $n.length), $t(Tn, $n[Xe] || null, Xe);
      } else $t(null);
      we(Tn);
    }, Qr = () => {
      if (Et) return Et.aim();
      if (Ke) {
        const Ze = Ke.getBoundingClientRect();
        let St = ve - U / 2;
        return Ue && (St = St * 0.6 + Ue.getBoundingClientRect().top * 0.4), { x: Ze.left, y: St };
      }
      return { x: ye - Me, y: ve - Ve };
    }, Bi = (Ze, St, Nt, Xt) => {
      e.style.transform = "translate(" + at + "px," + st + "px) rotate(" + Ze + "deg) rotate(" + St + "rad) scale(" + Nt + "," + Xt + ") rotate(" + -St + "rad)";
    }, es = () => {
      if (cn = requestAnimationFrame(es), !yt) {
        const Xe = ye - r, ft = ve - c, At = Math.min(Math.hypot(Xe, ft) / Le, 1);
        at = a.left + Xe * 0.35, st = a.top + ft * 0.35, Bi(0, Math.atan2(ft, Xe), 1 + 0.155 * At, 1 - 0.1 * At);
        return;
      }
      const Ze = Qr();
      if (!Z) {
        at = Ze.x, st = Ze.y, Bi(0, 0, 1, 1), Et && (cancelAnimationFrame(cn), Et.done());
        return;
      }
      const St = Et ? Et.k : 0.17, Nt = Et ? Et.d : 0.7;
      Ae = (Ae + (Ze.x - at) * St) * Nt, lt = (lt + (Ze.y - st) * St) * Nt, at += Ae, st += lt;
      const Xt = Math.hypot(Ae, lt), Tn = Math.min(Xt / 48, 1), $n = Ke || Et ? 0 : Math.max(-5, Math.min(5, Ae * 0.32));
      Bi($n, Math.atan2(lt, Ae), 1 + 0.1 * Tn, 1 - 0.063 * Tn), Et && Xt < 0.15 && Math.hypot(Ze.x - at, Ze.y - st) < 0.6 && (cancelAnimationFrame(cn), Et.done());
    }, ts = setInterval(() => {
      if (!p || Et) return;
      const Ze = p.getBoundingClientRect(), St = 64, Nt = ve < Ze.top + St ? -(Ze.top + St - ve) / 4 : ve > Ze.bottom - St ? (ve - (Ze.bottom - St)) / 4 : 0;
      Nt && (p.scrollTop += Math.max(-18, Math.min(18, Nt)), Jt());
    }, 30);
    cn = requestAnimationFrame(es);
    let wr = !1;
    const To = (Ze, St) => {
      if (wr) return;
      wr = !0, cancelAnimationFrame(cn);
      const Nt = Ue ? Ue.offsetHeight : U;
      !Ze && Ue && (Ue.remove(), Ue = null), Ze ? P(Ze, St, Nt) : Q();
    };
    return {
      move(Ze, St) {
        ye = Ze, ve = St, !yt && Math.hypot(ye - r, ve - c) > Le && (yt = !0, Ae = (ye - r) * 0.085, lt = (ve - c) * 0.085), yt && Jt();
      },
      drop(Ze) {
        clearInterval(ts);
        const St = Ke, Nt = Zt;
        if (!Ze && St && Ue) {
          const Xt = Ue;
          Et = { k: 0.24, d: 0.62, aim: () => {
            const Tn = Xt.getBoundingClientRect();
            return { x: Tn.left, y: Tn.top };
          }, done: () => To(St, Nt) }, setTimeout(() => To(St, Nt), 650), Z || (cancelAnimationFrame(cn), To(St, Nt));
          return;
        }
        $t(null), we(null), Et = { k: 0.2, d: 0.66, aim: () => {
          const Xt = _();
          return { x: Xt.left, y: Xt.top };
        }, done: () => To(null) }, setTimeout(() => To(null), 650), Z || (cancelAnimationFrame(cn), To(null));
      }
    };
  }
  function Mn(e, a) {
    let r = !1;
    e.addEventListener("click", (c) => {
      if (r) {
        r = !1, c.preventDefault();
        return;
      }
      if (Qn()) {
        Lr(a);
        return;
      }
      const p = o("strengthList"), x = io(a, p, vt(p).arr.length, 0);
      x == null || x.scrollIntoView({ block: "nearest", behavior: Fe() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const p = c.pointerId, x = c.clientX, _ = c.clientY;
      let P = null, Q = !1;
      try {
        e.setPointerCapture(p);
      } catch {
      }
      const te = (ve) => {
        if (ve.pointerId === p) {
          if (ve.pointerType === "mouse" && ve.buttons === 0) {
            ye(!1);
            return;
          }
          if (!P) {
            if (Math.hypot(ve.clientX - x, ve.clientY - _) < 6) return;
            P = ht(e, a, x, _);
          }
          P.move(ve.clientX, ve.clientY);
        }
      }, Z = (ve) => {
        ve.pointerId === p && ye(!1);
      }, U = (ve) => {
        ve.pointerId === p && ye(!0);
      }, Me = () => ye(!1), Ve = () => ye(!0), Le = (ve) => {
        ve.key === "Escape" && P && (ve.preventDefault(), ve.stopPropagation(), ye(!0));
      };
      function ye(ve) {
        if (!Q && (Q = !0, window.removeEventListener("pointermove", te, !0), window.removeEventListener("pointerup", Z, !0), window.removeEventListener("pointercancel", U, !0), window.removeEventListener("keydown", Le, !0), window.removeEventListener("blur", Ve), e.removeEventListener("lostpointercapture", Me), P)) {
          const at = P;
          P = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), at.drop(ve);
        }
      }
      window.addEventListener("pointermove", te, !0), window.addEventListener("pointerup", Z, !0), window.addEventListener("pointercancel", U, !0), window.addEventListener("keydown", Le, !0), window.addEventListener("blur", Ve), e.addEventListener("lostpointercapture", Me);
    });
  }
  const bn = (dd = window.matchMedia) == null ? void 0 : dd.call(window, "(max-width: 620px)");
  function Qn() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const lo = (e) => e.charAt(0).toUpperCase() + e.slice(1), ma = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let sn = null, Dt = null;
  function ii(e, a, r, c) {
    fn(), o("sheetTitle").textContent = e;
    const p = o("sheetBody");
    p.innerHTML = "", p.appendChild(a), sn = r || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !p.contains(a)) return;
      const x = c ? p.querySelector("input[data-f=url],input[data-f=name]") : p.querySelector("button,input,select");
      x == null || x.focus({ preventScroll: !0 });
    }, Fe() ? 0 : 360);
  }
  function fn() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const a = sn;
    sn = null, a == null || a(), setTimeout(Ca, 0);
  }
  o("sheetScrim").addEventListener("click", fn), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), fn());
  });
  function ji(e, a) {
    const r = qe(e, a.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        fn(), O(), _t(lo(ma(e)) + " updated");
      },
      onCancel: fn,
      onHide() {
        e.hidden = !e.hidden, fn(), O(), _t((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        fn();
        const c = a.indexOf(e);
        c < 0 || (a.splice(c, 1), O(), _t("Removed " + e.name, { label: "Undo", run: () => {
          a.splice(Math.min(c, a.length), 0, e), O();
        } }));
      }
    });
    ii("Edit " + ma(e), r, null, !1);
  }
  function bs() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, r, c, p]) => {
      const x = document.createElement("button");
      x.type = "button", x.className = "sheetChoice", x.innerHTML = '<span class="timeIcon" aria-hidden="true">' + xe(r) + "</span><span><strong>" + c + "</strong><small>" + p + "</small></span>", x.addEventListener("click", () => Lr(a)), e.appendChild(x);
    }), ii("Add to the move", e, null, !1);
  }
  function Lr(e) {
    Dt && Io();
    const a = jt(e, o("strengthList")), r = qe(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        fn(), ws(a, e);
      },
      onCancel: fn
    });
    ii("New " + ma(a), r, null, !0);
  }
  const ri = o("workoutModal").querySelector(".modalStatic"), qa = { parent: ri.parentNode, next: ri.nextSibling };
  function _r() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(ri);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", fn), e.appendChild(a), ii("Setup", e, () => {
      qa.parent.insertBefore(ri, qa.next), Gi();
    }, !1);
  }
  function Gi() {
    var a, r;
    const e = o("setupSummaryName");
    e && (e.textContent = (((a = o("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((r = nt[dt]) == null ? void 0 : r.name) || "Move", o("setupSummaryMeta").textContent = Ma.textContent);
  }
  o("setupSummary").addEventListener("click", _r), o("addFab").addEventListener("click", bs);
  function Bo() {
    const e = o("strengthList");
    return qn(e) || e.closest(".exerciseScroller");
  }
  function Va() {
    const e = o("strengthList").getBoundingClientRect(), a = (Bo() || o("strengthList")).getBoundingClientRect(), r = (Dt == null ? void 0 : Dt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(a.top + 12, Math.min(a.bottom - r - 96, a.top + a.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function ws(e, a) {
    var P;
    const r = so(a, [e.name || ro[a][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ge(e.name) + '">✕</button>', r.appendChild(c), Dt = { item: e, type: a, ghost: r };
    const p = ((P = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : P.offsetHeight) || 64;
    r.style.width = o("strengthList").getBoundingClientRect().width + "px", r.style.height = p + "px";
    const x = Va(), _ = ln.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + x.left + "px," + _ + "px)", r.getBoundingClientRect(), Fe() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + x.left + "px," + x.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", Io), c.querySelector("[data-a=discard]").addEventListener("click", ys), r.addEventListener("pointerdown", xs);
  }
  function xs(e) {
    if (!Dt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: a, ghost: r } = Dt, c = e.pointerId;
    try {
      r.setPointerCapture(c);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const p = r.getBoundingClientRect(), x = Bo(), _ = hn({
      ghost: r,
      origin: { left: p.left, top: p.top, width: p.width, height: p.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: x,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || x,
      rowLook: !0,
      home: Va,
      onDrop: (ye, ve, at) => {
        Dt = null, Vn(r), Po(a, ye, ve, at);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let P = !1;
    const Q = (ye) => {
      if (ye.pointerId === c) {
        if (ye.pointerType === "mouse" && ye.buttons === 0) {
          Le(!1);
          return;
        }
        _.move(ye.clientX, ye.clientY);
      }
    }, te = (ye) => {
      ye.pointerId === c && Le(!1);
    }, Z = (ye) => {
      ye.pointerId === c && Le(!0);
    }, U = () => Le(!1), Me = () => Le(!0), Ve = (ye) => {
      ye.key === "Escape" && (ye.preventDefault(), Le(!0));
    };
    function Le(ye) {
      P || (P = !0, window.removeEventListener("pointermove", Q, !0), window.removeEventListener("pointerup", te, !0), window.removeEventListener("pointercancel", Z, !0), window.removeEventListener("keydown", Ve, !0), window.removeEventListener("blur", Me), r.removeEventListener("lostpointercapture", U), _.drop(ye));
    }
    window.addEventListener("pointermove", Q, !0), window.addEventListener("pointerup", te, !0), window.addEventListener("pointercancel", Z, !0), window.addEventListener("keydown", Ve, !0), window.addEventListener("blur", Me), r.addEventListener("lostpointercapture", U);
  }
  function Po(e, a, r, c) {
    const p = vt(a);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = p.kind, p.group && (!e.group || e.group === "Movement") && (e.group = p.group)), p.arr.splice(Math.max(0, Math.min(r, p.arr.length)), 0, e), rn(a.closest(".exerciseScroller,.createStepSlot") || a, () => O()), Kt(a.querySelector('.moveRow[data-id="' + e.id + '"]'), c), _t(lo(ma(e)) + " added");
  }
  function Io() {
    var c;
    if (!Dt) return;
    const { item: e, ghost: a } = Dt;
    Dt = null, Vn(a);
    const r = o("strengthList");
    Po(e, r, vt(r).arr.length, 0), (c = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Fe() ? "auto" : "smooth" });
  }
  function ys() {
    if (!Dt) return;
    const e = Dt.ghost;
    Dt = null, Vn(e), _t("Discarded");
  }
  function Ar() {
    Dt && (Dt.ghost.remove(), Dt = null);
  }
  window.addEventListener("resize", () => {
    if (Dt != null && Dt.ghost.classList.contains("hovering")) {
      const e = Va();
      Dt.ghost.style.width = e.width + "px", Dt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (cd = bn == null ? void 0 : bn.addEventListener) == null || cd.call(bn, "change", () => {
    fn(), Dt && !Qn() && Io(), pt();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ca() {
    const e = o("workoutModal"), a = window.visualViewport;
    if (!e.classList.contains("open") || !Qn()) {
      Er();
      return;
    }
    const r = a ? a.offsetTop : 0, c = a ? a.offsetLeft : 0, p = a ? a.width : window.innerWidth, x = a ? a.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: p + "px", height: x + "px", top: r + "px", left: c + "px" });
    const _ = e.getBoundingClientRect();
    Math.abs(_.top - r) > 0.5 && (e.style.top = 2 * r - _.top + "px"), Math.abs(_.left - c) > 0.5 && (e.style.left = 2 * c - _.left + "px");
  }
  function Er() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (ud = window.visualViewport) == null || ud.addEventListener("resize", Ca), (pd = window.visualViewport) == null || pd.addEventListener("scroll", Ca), window.addEventListener("resize", Ca), window.addEventListener("scroll", Ca, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ca, 250));
  function si() {
    en.length > 0;
    const e = o("addMovementBtn"), a = o("addRestBtn");
    e && (e.innerHTML = ue + "<span>Add movement</span>"), a && (a.innerHTML = ue + "<span>Add rest</span>");
    const r = o("addVideoBtn");
    r && (r.innerHTML = ue + "<span>Add video</span>");
  }
  function Ho() {
    const e = o("useGlobalTiming").checked, a = o("addMovementDuration"), r = o("addMovementUnit");
    a.disabled = e, r.disabled = e, a.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Tt(k.value);
    const c = o("useGlobalRestTiming").checked, p = o("addRestDuration"), x = o("addRestUnit");
    p.disabled = c, x.disabled = c, p.parentElement.style.opacity = c ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Tt(T.value);
  }
  let Ui = "movement";
  function ks(e) {
    Ui = e;
    const a = o("movementFields"), r = o("restFields");
    a.hidden = e !== "movement", r.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Ho();
  }
  function co() {
    nt[dt];
    const e = mt ? !0 : o("useGlobalTiming").checked, a = e ? Number(k.value) : Xn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), r = mt ? !0 : o("useGlobalRestTiming").checked, c = r ? Number(T.value) : Xn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Ui === "rest") {
      const p = o("addRestTitle").value.trim() || "Rest", x = o("addRestGroup").value.trim() || "Rest";
      en.push({
        id: "rest-" + Date.now(),
        name: p,
        group: x,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, c || Number(T.value))
      }), O(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", _t("Rest added"), mt && (W("movements"), fe());
    } else {
      const p = o("addMovementInput").value.trim();
      if (!p) return;
      const x = o("addMovementGroup").value.trim() || "Movement";
      en.push({
        id: "movement-" + Date.now(),
        name: p,
        group: x,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, a || Number(k.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", O(), o("movementCreator").hidden = !0, _t("Movement added"), mt && (W("movements"), fe());
    }
    si();
  }
  let Fo = null;
  function _t(e, a) {
    const r = o("toast");
    r.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, r.appendChild(c), a) {
      const p = document.createElement("button");
      p.type = "button", p.className = "toastAction", p.textContent = a.label, p.addEventListener("click", () => {
        a.run(), r.classList.remove("show", "withAction"), clearTimeout(Fo);
      }), r.appendChild(p);
    }
    r.classList.toggle("withAction", !!a), r.classList.add("show"), clearTimeout(Fo), Fo = setTimeout(() => r.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Dr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ms = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Rr(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function uo(e, a) {
    return Dr[Rr(a)];
  }
  function Cs(e) {
    return Ms[Rr(e)];
  }
  function Rt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function In() {
    return { morning: ut().morningTime || "08:00", evening: ut().eveningTime || "19:00" };
  }
  function za(e) {
    const [a, r] = String(e).split(":").map(Number);
    return (a || 0) * 60 + (r || 0);
  }
  function Ss(e) {
    const a = In();
    return e.getHours() * 60 + e.getMinutes() >= za(a.evening) ? "evening" : "morning";
  }
  function li(e, a) {
    return ct.checkins.find((r) => r.date === e && r.slot === a);
  }
  function ha(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Oo() {
    const e = /* @__PURE__ */ new Date(), a = Rt(e), r = Ss(e), c = In(), p = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && p < za(c.morning) || ha(li(a, r)) ? null : r;
  }
  const fa = o("checkinModal"), Sa = o("checkinTab"), di = o("checkinBadge"), ga = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function ci(e) {
    const { input: a, fill: r } = ga[e];
    r.style.width = a.value + "%", a.setAttribute("aria-valuetext", uo(e, a.value));
  }
  Object.keys(ga).forEach((e) => ga[e].input.addEventListener("input", () => ci(e)));
  let zn = null;
  function Nr() {
    const e = In(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes();
    return r < za(e.morning) ? "Next check-in at " + e.morning : r < za(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Br() {
    const e = In(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes(), c = (p, x) => {
      const [_, P] = p.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (x ? 1 : 0), _, P);
    };
    return r < za(e.morning) ? { date: c(e.morning), time: e.morning } : r < za(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let Yi = null, po = null;
  function Vt() {
    if (Oo()) {
      ja(), Ua();
      return;
    }
    const e = Br(), a = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    o("peekCountdown").textContent = r + ":" + String(c).padStart(2, "0") + ":" + String(p).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function Ts() {
    Vt(), Sa.classList.add("peek"), clearInterval(po), po = setInterval(Vt, 1e3), clearTimeout(Yi), Yi = setTimeout(ja, 6e3);
  }
  function ja() {
    Sa.classList.remove("peek"), clearInterval(po), clearTimeout(Yi);
  }
  function Ga() {
    const e = Oo();
    if (!e) {
      Sa.classList.contains("peek") ? ja() : Ts();
      return;
    }
    zn = { date: Rt(/* @__PURE__ */ new Date()), slot: e };
    const r = li(zn.date, e), c = ct.checkins.find((p) => ha(p));
    Object.keys(ga).forEach((p) => {
      ga[p].input.value = (r == null ? void 0 : r[p]) ?? (c == null ? void 0 : c[p]) ?? 50, ci(p);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", fa.classList.add("open"), fa.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ga.mood.input.focus());
  }
  function va() {
    fa.classList.remove("open"), fa.setAttribute("aria-hidden", "true"), zn && (Wo = zn.date + "-" + zn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Wo);
    } catch {
    }
    zn = null, Ua();
  }
  function Ls() {
    if (!zn) return;
    if (ha(li(zn.date, zn.slot))) {
      va();
      return;
    }
    const { date: e, slot: a } = zn;
    let r = li(e, a);
    r || (r = { date: e, slot: a }, ct.checkins.unshift(r), ct.checkins = ct.checkins.slice(0, 2e3)), r.mood = Number(ga.mood.input.value), r.energy = Number(ga.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), yn(), s.fire("checkin", { slot: a, mood: r.mood, energy: r.energy, mood_label: uo("mood", r.mood), energy_label: uo("energy", r.energy) }), _t((a === "morning" ? "Morning" : "Evening") + " check-in saved"), va(), ui(), qo(), ei(), Qa();
  }
  let Wo = "";
  try {
    Wo = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ua() {
    const e = Oo();
    di.hidden = !e, Sa.hidden = !e, e || ja(), Sa.classList.toggle("due", !!e), Sa.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Nr()), Sa.title = e ? "Check in now" : Nr();
  }
  function Zi() {
    Ua();
    const e = Oo();
    !e || fa.classList.contains("open") || ut().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !ke.home.classList.contains("active") || ln.classList.contains("open") || Wo !== Rt(/* @__PURE__ */ new Date()) + "-" + e && Ga());
  }
  Sa.addEventListener("click", Ga), o("checkinLater").addEventListener("click", va), o("checkinSave").addEventListener("click", Ls), fa.addEventListener("click", (e) => {
    e.target === fa && va();
  }), fa.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), va());
  }), setInterval(Zi, 3e4);
  function ui() {
    const e = Rt(/* @__PURE__ */ new Date()), a = (r) => ct.checkins.find((c) => c.date === e && c[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, c]) => {
      const p = a(r);
      o(c).textContent = p ? uo(r, p[r]) : "—";
    });
  }
  function qo() {
    const e = o("feelCard");
    if (!e) return;
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), c = [...Array(7)].map((te, Z) => {
      const U = new Date(r.getFullYear(), r.getMonth(), r.getDate() + Z), Me = Rt(U), Ve = ct.checkins.filter((ye) => ye.date === Me), Le = (ye) => {
        const ve = Ve.map((at) => at[ye]).filter((at) => at != null);
        return ve.length ? ve.reduce((at, st) => at + st, 0) / ve.length : null;
      };
      return { d: U, key: Me, mood: Le("mood"), energy: Le("energy"), count: Ve.filter(ha).length, future: U > a && Me !== Rt(a) };
    }), p = (te) => {
      const Z = c.map((U) => U[te]).filter((U) => U != null);
      return Z.length ? Z.reduce((U, Me) => U + Me, 0) / Z.length : null;
    }, x = p("mood"), _ = p("energy"), P = (te, Z) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + te + "</span><span>" + (Z == null ? "—" : Ge(uo("", Z))) + '</span></div><div class="feelTrack"><span style="width:' + (Z == null ? 0 : Math.max(4, Z)) + "%;background:" + (Z == null ? "transparent" : Cs(Z)) + '"></span></div></div>', Q = c.filter((te) => te.mood != null && te.energy != null).sort((te, Z) => Z.mood + Z.energy - (te.mood + te.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (x == null ? "No check-ins yet" : Ge(uo("", (x + _) / 2))) + '</div><div class="weekCopy">' + (x == null ? "Your first check-in will appear here." : "on average this week" + (Q ? " · best day " + Ge(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(Q.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (te) => '<div class="weekChip feelDay' + (te.future ? " future" : "") + (te.key === Rt(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ge(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(te.d)) + "</strong>" + (te.count >= 2 ? '<span class="weekTick">' + xe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(te.count) + "</span>") + "</div>" + P("Mood", te.mood) + P("Energy", te.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Ta = o("upcomingCountSetting");
  Ta.addEventListener("change", () => {
    Pt = Ta.value === "all" ? "all" : Number(Ta.value), sr();
  });
  const Ya = o("tempoRevealBtn"), Ki = o("tempoExperiment"), ea = o("tempoQuad"), nn = o("tempoDot"), an = o("tempoEstimate"), ta = o("tempoReadout");
  let La = { x: 0.5, y: 0.5 }, ba = !1, mo = { total: 20, work: 45, rest: 15 };
  function _a(e, a, r, c) {
    const p = Math.max(a, Math.min(r, e));
    return Math.round((p - a) / c) * c + a;
  }
  function pi(e, a) {
    const r = (e - 0.5) * 2, c = (a - 0.5) * 2, p = _a(
      mo.total + r * 5 + c * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), x = _a(
      mo.work + r * 10 + c * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), _ = _a(
      mo.rest + r * 6 + c * 6,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    );
    return M.value = p, k.value = x, T.value = _, $.textContent = x + " sec", ee.textContent = _ + " sec", gt(), { total: p, work: x, rest: _ };
  }
  function Za(e, a) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", p = pi(e, a);
    ta.textContent = r + " + " + c, an.textContent = p.total + " min", ea.setAttribute("aria-valuetext", r + " and " + c + ", estimated " + p.total + " minutes");
  }
  function Cn(e) {
    const a = ea.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)), c = Math.max(0, Math.min(1, (e.clientY - a.top) / a.height));
    La = { x: r, y: c }, nn.style.left = r * 100 + "%", nn.style.top = c * 100 + "%", Za(r, c);
  }
  Ya.addEventListener("click", () => {
    const e = Ki.hidden;
    Ki.hidden = !e, Ya.setAttribute("aria-expanded", e ? "true" : "false"), Ya.textContent = e ? "Now close this" : "Don’t try this!", e && (mo = {
      total: Number(M.value),
      work: Number(k.value),
      rest: Number(T.value)
    }, La = { x: 0.5, y: 0.5 }, nn.style.left = "50%", nn.style.top = "50%", Za(La.x, La.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === e));
  }));
  const Vo = o("testingFeedbackForm"), zo = o("testingFeedbackThanks"), Pr = o("testingFeedbackAgain");
  Vo.addEventListener("submit", (e) => {
    e.preventDefault(), Vo.hidden = !0, zo.hidden = !1, _t("Feedback captured for prototype");
  }), Pr.addEventListener("click", (e) => {
    e.preventDefault(), Vo.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), zo.hidden = !0, Vo.hidden = !1;
  }), ea.addEventListener("pointerdown", (e) => {
    var a;
    ba = !0, Cn(e);
    try {
      (a = ea.setPointerCapture) == null || a.call(ea, e.pointerId);
    } catch {
    }
  }), ea.addEventListener("pointermove", (e) => {
    ba && Cn(e);
  }), ea.addEventListener("pointerup", (e) => {
    ba && (ba = !1, Cn(e), O());
  }), ea.addEventListener("pointercancel", () => ba = !1), ea.addEventListener("keydown", (e) => {
    let { x: a, y: r } = La, c = !0;
    e.key === "ArrowLeft" ? a -= 0.05 : e.key === "ArrowRight" ? a += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : c = !1, c && (e.preventDefault(), a = Math.max(0, Math.min(1, a)), r = Math.max(0, Math.min(1, r)), La = { x: a, y: r }, nn.style.left = a * 100 + "%", nn.style.top = r * 100 + "%", Za(a, r), O());
  });
  const ln = o("workoutModal");
  let ho = null;
  function fo(e) {
    return e.map((a) => ({ ...a }));
  }
  function $i() {
    const e = nt[dt];
    return {
      key: dt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: fo(ot),
      strength: fo(en),
      cooldown: fo(Wt),
      total: Number(M.value),
      work: Number(k.value),
      rest: Number(T.value),
      rounds: Number(tt.value) || 1
    };
  }
  function jn(e = !1) {
    mt = !!e, ce = null, De = null, fn(), Ar(), ho = $i(), o("moveEditorTitle").textContent = mt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !mt, o("warmupRow").hidden = mt, o("deleteMoveOpen").hidden = mt;
    const a = o("createMoveOptions");
    a.hidden = !mt;
    {
      const r = nt[dt];
      o("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), o("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (Ji(), mt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const r = nt[dt];
      Wa((r == null ? void 0 : r.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, ks("movement"), si(), Ho(), Ki.hidden = !0, Ya.setAttribute("aria-expanded", "false"), Ya.textContent = "Don’t try this!", ln.classList.toggle("createMode", mt), ln.querySelector(".modal").classList.toggle("createMode", mt), ln.classList.add("open"), ln.setAttribute("aria-hidden", "false"), Ca(), mt && Te();
  }
  function mi() {
    const e = nt[dt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Ji() {
    const e = mi(), a = o("warmupSwitch");
    a.classList.toggle("on", e), a.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = nt[dt];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, E()) : (e.warmupOff = !e.warmupOff, O()), Ji());
  });
  function jo() {
    fn(), Ar(), Er(), De = null, ce = null, ln.classList.contains("createMode") && g(), ln.classList.remove("createMode"), ln.querySelector(".modal").classList.remove("createMode"), ln.classList.remove("open"), ln.setAttribute("aria-hidden", "true");
  }
  function Xi() {
    if (!ho) return;
    const e = ho;
    e.profile && (nt[e.key] = JSON.parse(JSON.stringify(e.profile))), dt = e.key, ot = fo(e.warmup), en = fo(e.strength), Wt = fo(e.cooldown), M.value = e.total, k.value = e.work, T.value = e.rest, tt.value = e.rounds || 1;
    const a = nt[dt];
    if (a) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === dt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = a.name);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a.name);
        const x = r.querySelector(".sourceTag");
        x && (x.textContent = a.source);
      }
      m.value = a.name;
    }
    O();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (mt) {
      const e = dt;
      delete nt[e], mt = !1, Rn = null, it(ct.order.find((a) => nt[a]) || Object.keys(nt)[0]);
    } else
      Xi();
    jo();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    fn(), Dt && Io();
    const e = nt[dt], a = m.value.trim() || "New move";
    if (e && (e.name = a), Lt(), ce = null, O(), mt && e)
      Ro(dt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === dt)), mt = !1, Rn = null, ct.order.includes(dt) || ct.order.push(dt), _t("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = a);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a);
      }
      _t("Move saved");
    }
    ho = null, jo(), yn();
  }), ln.addEventListener("click", (e) => {
    if (e.target === ln) {
      if (mt) {
        const a = dt;
        delete nt[a], mt = !1, Rn = null, it(ct.order.find((r) => nt[r]) || Object.keys(nt)[0]);
      } else
        Xi();
      jo();
    }
  }), Mn(o("addMovementBtn"), "movement"), Mn(o("addRestBtn"), "rest"), Mn(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Ho), o("useGlobalRestTiming").addEventListener("change", Ho), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Wa(e.dataset.movePreset, !0), O();
  })), o("includeWarmupPreset").addEventListener("change", E), o("includeCooldownPreset").addEventListener("change", E), o("includeWarmupPreset").addEventListener("change", fe), o("includeCooldownPreset").addEventListener("change", fe), m.addEventListener("input", fe), m.addEventListener("input", Gi), o("confirmAddMovement").addEventListener("click", co), o("confirmAddRest").addEventListener("click", co), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && co();
  });
  const Go = o("countdown"), na = o("countNum"), Gn = o("countdownPixelCanvas");
  let Uo = null, Qi = "appear";
  class _s {
    constructor(a, r, c, p, x, _, P) {
      this.width = a.width, this.height = a.height, this.ctx = r, this.x = c, this.y = p, this.color = x, this.speed = (Math.random() * 0.8 + 0.1) * _, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = P, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const a = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + a, this.y + a, this.size, this.size);
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
  let hi = [], er = 1, Ir = 1;
  function Aa() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function tr() {
    var te;
    if (!Gn) return;
    const e = Aa(), a = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    er = a, Ir = r;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    Gn.width = Math.floor(a * c), Gn.height = Math.floor(r * c), Gn.style.width = a + "px", Gn.style.height = r + "px";
    const p = Gn.getContext("2d");
    p.setTransform(c, 0, 0, c, 0, 0);
    const x = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], _ = 12, P = (te = window.matchMedia) == null ? void 0 : te.call(window, "(prefers-reduced-motion: reduce)").matches, Q = P ? 0 : 0.055;
    hi = [];
    for (let Z = 0; Z < a; Z += _)
      for (let U = 0; U < r; U += _) {
        const Me = Z - a / 2, Ve = U - r / 2, Le = Math.sqrt(Me * Me + Ve * Ve), ye = P ? 0 : Math.random() * 75 + Le * 0.05, ve = new _s({ width: a, height: r }, p, Z, U, x[Math.floor(Math.random() * x.length)], Q, ye);
        ve.maxSizeInteger = 4, ve.maxSize = Math.random() * 3.2 + 0.8, ve.sizeStep = 0.35 + Math.random() * 0.45, hi.push(ve);
      }
  }
  function fi(e) {
    cancelAnimationFrame(Uo), Qi = e;
    const a = Gn == null ? void 0 : Gn.getContext("2d");
    if (!a) return;
    function r() {
      a.clearRect(0, 0, er, Ir);
      let c = !0;
      hi.forEach((p) => {
        p[Qi](), p.isIdle || (c = !1);
      }), Qi === "disappear" && c || (Uo = requestAnimationFrame(r));
    }
    Uo = requestAnimationFrame(r);
  }
  function gi() {
    cancelAnimationFrame(Uo), tr(), fi("appear"), setTimeout(() => fi("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Go.classList.contains("active") && gi();
  });
  const go = o("pixelTrailCanvas"), wa = go.getContext("2d");
  let aa = !0, Sn = 0.7, Ka = 600, $a = [], vo = null, Gt = { x: 0, y: 0, ready: !1 };
  function Hr() {
    const e = u.getBoundingClientRect(), a = Aa(), r = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / a), p = Math.max(1, e.height / a);
    go.width = Math.max(1, Math.floor(c * r)), go.height = Math.max(1, Math.floor(p * r)), go.style.width = c + "px", go.style.height = p + "px", wa.setTransform(r, 0, 0, r, 0, 0);
  }
  function nr(e, a) {
    if (!aa) return;
    const r = performance.now();
    Gt.ready || (Gt = { x: e, y: a, ready: !0 });
    const c = 7;
    for (let p = 1; p <= c; p++) {
      const x = p / c;
      $a.push({
        x: Gt.x + (e - Gt.x) * x,
        y: Gt.y + (a - Gt.y) * x,
        born: r - (c - p) * 10
      });
    }
    Gt = { x: e, y: a, ready: !0 };
  }
  function vi(e) {
    if (vo = null, !h) return;
    if (!ke.workout.classList.contains("active")) {
      vo = requestAnimationFrame(vi);
      return;
    }
    const a = u.getBoundingClientRect(), r = Aa();
    wa.clearRect(0, 0, a.width / r, a.height / r), aa && ($a = $a.filter((p) => e - p.born < Ka), wa.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", $a.forEach((p) => {
      const x = (e - p.born) / Ka, _ = (1 - x) * Sn, P = Math.round(p.x / 14) * 14, Q = Math.round(p.y / 14) * 14;
      wa.globalAlpha = Math.max(0, _);
      const te = 2 + 5 * (1 - x) * Sn;
      wa.fillRect(P - te / 2, Q - te / 2, te, te);
    }), wa.globalAlpha = 1), vo = requestAnimationFrame(vi);
  }
  u.addEventListener("pointermove", (e) => {
    const a = u.getBoundingClientRect(), r = Aa();
    nr((e.clientX - a.left) / r, (e.clientY - a.top) / r);
  }), u.addEventListener("pointerleave", () => Gt.ready = !1), new ResizeObserver(Hr).observe(u), Hr(), vo = requestAnimationFrame(vi);
  const Ea = o("movementRippleCanvas"), bo = Ea.getContext("2d");
  let $e = !0, Ja = null, Yo = performance.now();
  function bi() {
    const e = Ea.parentElement.getBoundingClientRect(), a = Aa(), r = Math.max(1, e.width / a), c = Math.max(1, e.height / a), p = Math.min(window.devicePixelRatio || 1, 2);
    Ea.width = Math.max(1, Math.floor(r * p)), Ea.height = Math.max(1, Math.floor(c * p)), Ea.style.width = r + "px", Ea.style.height = c + "px", bo.setTransform(p, 0, 0, p, 0, 0);
  }
  function xa() {
    var e;
    return Ot || ((e = Ee[ze]) == null ? void 0 : e.kind) === "rest";
  }
  function Fr() {
    const e = Ee[ze];
    return xa() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function wi(e) {
    if (Ja = null, !h) return;
    if (!ke.workout.classList.contains("active")) {
      Ja = requestAnimationFrame(wi);
      return;
    }
    const a = Ea.parentElement.getBoundingClientRect(), r = Aa(), c = Math.max(1, a.width / r), p = Math.max(1, a.height / r);
    if (bo.clearRect(0, 0, c, p), $e) {
      const x = Fr(), _ = (e - Yo) % x / x, P = 15, Q = Math.max(8, Math.round(P * p / Math.max(1, c))), te = c / (P + 1), Z = p / (Q + 1), U = c * 0.5, Me = p * 0.52, Ve = Math.hypot(U, Me), ye = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ve = 1; ve <= Q; ve++)
        for (let at = 1; at <= P; at++) {
          const st = at * te, Ae = ve * Z, lt = Math.hypot(st - U, Ae - Me) / Ve, yt = xa(), Ke = yt ? Math.exp(-Math.pow((lt - (_ * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ue = Math.exp(-Math.pow((lt - _ * 1.25) * 7, 2)), Zt = yt ? Ke : Ue, cn = yt ? 0.5 + 0.5 * Math.sin(_ * Math.PI * 2 - lt * 3) ** 2 : 0.35 + 0.65 * Math.sin(_ * Math.PI * 2 - lt * 5) ** 2, Et = yt ? 1.4 + Zt * 4.2 * cn : 1.2 + Zt * 5 * cn;
          bo.beginPath(), bo.arc(st, Ae, Et, 0, Math.PI * 2), bo.fillStyle = `rgba(${ye},${yt ? 0.08 + Zt * 0.48 : 0.05 + Zt * 0.55})`, bo.fill();
        }
    }
    Ja = requestAnimationFrame(wi);
  }
  new ResizeObserver(bi).observe(Ea.parentElement), bi(), Ja = requestAnimationFrame(wi);
  const wo = o("exerciseTitle"), Un = o("exerciseMeta"), Zo = o("stepLabel"), xo = o("digits"), xi = o("fill"), Xa = o("progress"), Ko = o("pause"), Or = o("nextName"), $o = o("nextMeta"), ar = o("nextIcon"), Jo = o("skipNextSession");
  let dn = null;
  function wn(e) {
    for (let a = Math.max(0, e); a < Ee.length; a++)
      if (!Ee[a].sessionHidden) return a;
    return -1;
  }
  function As() {
    const e = Ee[ze];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ot) {
      const c = wn(ze + 1), p = c >= 0 ? Ee[c] : null;
      return p ? { name: p.name, meta: ir(p), icon: yi(p) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = wn(ze + 1), r = a >= 0 ? Ee[a] : null;
    return r ? { name: r.name, meta: ir(r), icon: yi(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function or() {
    if (!Ee[ze]) return Ee.length;
    const a = wn(ze + 1);
    return a < 0 ? Ee.length : a + 1;
  }
  function yi(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ir(e) {
    return e.kind === "video" ? "YouTube · " + qt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function yo() {
    return Ee.length && Ee[Ee.length - 1].round || 1;
  }
  function rr(e) {
    const a = Ee[e];
    if (!a) return "";
    const r = yo();
    if (r <= 1) return "Step " + (e + 1) + " of " + Ee.length;
    if (a.roundBreak) return "Round " + a.round + " of " + r + " · Rest";
    const c = Ee.filter((p) => p.round === a.round && !p.roundBreak).length;
    return "Round " + a.round + " of " + r + " · Step " + (a.roundIndex + 1) + " of " + c;
  }
  function ko() {
    return Xa.querySelector('[data-step="' + ze + '"]');
  }
  function Es() {
    Ee[ze] && Number(Xa.dataset.round) !== (Ee[ze].round || 1) && i(), [...Xa.children].forEach((e) => {
      const a = Number(e.dataset.step);
      e.classList.toggle("done", a < ze), e.classList.toggle("active", a === ze), e.classList.toggle("rewindable", a <= ze), e.disabled = a > ze, a === ze && e.style.setProperty("--segment-progress", "0%");
    }), Ee[ze] && (Zo.textContent = rr(ze), Qo());
  }
  function Ds(e) {
    const a = Ee.indexOf(e);
    a < 0 || a <= ze || (e.sessionHidden = !e.sessionHidden, Da(), _t((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function sr() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const a = or(), r = Ee.slice(a);
    (Pt === "all" ? r : r.slice(0, Math.max(1, Number(Pt) || 1))).forEach((p) => {
      const x = document.createElement("section");
      x.className = "upcomingCard" + (p.sessionHidden ? " sessionHidden" : "") + (Is(p) ? " noMeta" : ""), x.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xe(yi(p)) + '</div><div><div class="upcomingName">' + Ge(p.name) + '</div><div class="upcomingMeta">' + Ge(ir(p)) + (yo() > 1 ? " · round " + p.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (p.sessionHidden ? "Include this session" : "Skip this session") + "</button>", x.querySelector(".skipSessionBtn").addEventListener("click", () => Ds(p)), e.appendChild(x);
    });
  }
  function Da() {
    var a;
    const e = As();
    Or.textContent = e.name, $o.textContent = e.meta, ar.innerHTML = xe(e.icon);
    {
      const r = Ot ? Ee[wn(ze + 1)] : ((a = Ee[ze]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : Ee[wn(ze + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && Is(r)));
    }
    if (dn = null, Ot) {
      const r = wn(ze + 1);
      r >= 0 && (dn = Ee[r]);
    } else {
      const r = Ee[ze];
      if (r && r.rest > 0)
        dn = null;
      else {
        const c = wn(ze + 1);
        c >= 0 && (dn = Ee[c]);
      }
    }
    Jo && (Jo.hidden = !dn, Jo.textContent = dn != null && dn.sessionHidden ? "Include this session" : "Skip this session"), sr();
  }
  Jo.addEventListener("click", () => {
    dn && (dn.sessionHidden = !dn.sessionHidden, _t((dn.sessionHidden ? "Hidden " : "Included ") + dn.name + " for this session"), Da());
  });
  let Hn = null, Xo = null;
  function ya(e, a = {}) {
    const r = nt[dt];
    s.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: dt, ...a });
  }
  function Wr() {
    const e = nt[dt];
    Hn = { key: dt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Xo), Xo = setInterval(() => {
      Hn && !vn && Hn.active++;
    }, 1e3), ya("started", { steps: Ee.length });
  }
  function lr(e) {
    if (clearInterval(Xo), !Hn) return;
    const a = Hn;
    Hn = null, ya(e ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (ct.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: e }), ct.history = ct.history.slice(0, 1e3), yn(), ei(), Qa());
  }
  function qr() {
    b("workout"), t();
    const e = wn(0);
    e >= 0 && Ee[e].kind === "video" && dr(Ee[e]);
  }
  function ki() {
    Ne(), lr(!1), clearInterval(Ct), clearInterval(Jn), Ot = !1, l(!1), o("app").classList.remove("resting"), Go.classList.remove("active"), b("home");
  }
  function t() {
    Go.classList.add("active");
    let e = 5;
    na.textContent = e, requestAnimationFrame(gi), clearInterval(Jn), Jn = setInterval(() => {
      e--, e > 0 ? (na.textContent = e, gi()) : (clearInterval(Jn), na.textContent = "GO", gi(), setTimeout(() => {
        Go.classList.remove("active"), cancelAnimationFrame(Uo), f();
      }, 650));
    }, 1e3);
  }
  function i() {
    var a;
    Xa.innerHTML = "";
    const e = ((a = Ee[Math.max(0, ze)] || Ee[0]) == null ? void 0 : a.round) || 1;
    Xa.dataset.round = e, Ee.forEach((r, c) => {
      if ((r.round || 1) !== e) return;
      const p = document.createElement("button");
      p.dataset.step = c, p.type = "button", p.className = "progressSegment", p.setAttribute("aria-label", "Go to " + r.name), p.addEventListener("click", () => {
        c <= ze && d(c);
      }), Xa.appendChild(p);
    });
  }
  function l(e) {
    e = !!e;
    const a = vn !== e;
    if (vn = e, Ko.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), X && Se)
      try {
        e ? Se.pauseVideo() : Se.playVideo();
      } catch {
      }
    a && Hn && ya(e ? "paused" : "resumed");
  }
  function d(e) {
    e < 0 || e >= Ee.length || e > ze || (clearInterval(Ct), Ot = !1, o("app").classList.remove("resting"), ze = e, l(!1), Si(), Ct = setInterval(Mo, 1e3));
  }
  function f() {
    if (ze = wn(0), l(!1), i(), ze < 0) {
      wo.textContent = "No activities", Un.textContent = "Open Edit and enable or add a movement", Un.hidden = !1;
      return;
    }
    Wr(), Si(), clearInterval(Ct), Ct = setInterval(Mo, 1e3);
  }
  const D = o("videoStage"), y = o("videoSound"), C = 0, R = 1, ie = 2;
  let G = 0, V = null, le = null, Se = null, He = null, ge = 0, he = !1, X = null, rt = null;
  function Ut() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : V || (V = new Promise((a, r) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const p = setInterval(() => {
        var _;
        (_ = window.YT) != null && _.Player && (clearInterval(p), clearTimeout(x), a(window.YT));
      }, 100), x = setTimeout(() => {
        clearInterval(p), V = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const _ = document.createElement("script");
        _.src = "https://www.youtube.com/iframe_api", _.async = !0, _.onerror = () => {
          clearInterval(p), clearTimeout(x), V = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(_);
      }
    }), V);
  }
  function Yn() {
    return le || (le = Ut().then((e) => new Promise((a) => {
      const r = document.createElement("div");
      o("videoFrame").appendChild(r), Se = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(Se), onStateChange: (c) => Vr(c.data), onError: (c) => Mi(c.data) }
      });
    })), le.catch(() => {
      le = null;
    }), le);
  }
  function dr(e) {
    !(e != null && e.videoId) || e.videoError || Yn().then((a) => {
      X || He === e.videoId || (He = e.videoId, ge = Number(e.start) || 0, he = !1, a.mute(), a.loadVideoById({ videoId: e.videoId, startSeconds: ge }));
    }).catch(() => {
    });
  }
  function Rs() {
    const e = wn(ze + 1);
    e >= 0 && Ee[e].kind === "video" && dr(Ee[e]);
  }
  function Vr(e) {
    if (!X) {
      e === R && !he && (he = !0, Se.pauseVideo(), Se.seekTo(ge, !0));
      return;
    }
    D.classList.toggle("playing", e === R), Ee[ze] === X && performance.now() > G && (e === R && vn ? l(!1) : e === ie && !vn && l(!0)), e === R && Dl(X.videoId, Se.getDuration()) && yn(), e === C && bt();
  }
  function Mi(e) {
    const a = X;
    if (!a) {
      He = null;
      return;
    }
    e === 101 || e === 150 ? (Ec(a.videoId), _t("That video can’t play outside YouTube, so it was skipped")) : _t("The video couldn’t play, so it was skipped"), bt();
  }
  function cr(e) {
    if (o("app").classList.add("videoStep"), y.hidden = !0, X = e, clearTimeout(rt), !e.videoId) {
      _t("This video step has no link yet, so it was skipped"), setTimeout(() => bt(), 0);
      return;
    }
    Yn().then((a) => {
      if (X !== e) return;
      G = performance.now() + 1500;
      const r = Number(e.start) || 0;
      He !== e.videoId ? (He = e.videoId, ge = r, a.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (a.seekTo(r, !0), a.playVideo()), a.unMute(), vn && a.pauseVideo(), rt = setTimeout(() => {
        X !== e || vn || (a.getPlayerState() !== R ? (a.mute(), a.playVideo(), y.hidden = !1) : a.isMuted() && (y.hidden = !1));
      }, 1600);
    }).catch(() => {
      X === e && (_t("YouTube didn’t load, so the video was skipped"), bt());
    });
  }
  function ur() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), a = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, c = (a == null ? void 0 : a.offsetHeight) || 42, p = window.innerHeight - r - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(p)) + "px");
  }
  window.addEventListener("resize", ur);
  function Ne() {
    clearTimeout(rt);
    const e = X;
    if (X = null, o("app").classList.remove("videoStep"), D.classList.remove("playing"), y.hidden = !0, e && Se) {
      try {
        Se.pauseVideo();
      } catch {
      }
      He = null;
    }
  }
  function bt() {
    const e = X;
    !e || Ee[ze] !== e || (Ne(), clearInterval(Ct), Ti(), Ct = setInterval(Mo, 1e3));
  }
  y.addEventListener("click", () => {
    Se && (Se.unMute(), Se.playVideo()), y.hidden = !0;
  });
  function Ci(e) {
    var c;
    const a = Number(e.start) || 0;
    if (e.useVideoLength === !1) return a + (Number(e.duration) || 300);
    const r = Se && X === e && Number((c = Se.getDuration) == null ? void 0 : c.call(Se)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || a + (Number(e.duration) || 300);
  }
  function pr(e, a) {
    const r = nt[dt];
    [ot, en, Wt, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((p) => {
      p && p.kind === "video" && p.videoId === e && a(p);
    }));
  }
  function Dl(e, a) {
    a = Math.round(Number(a) || 0);
    let r = !1;
    return e && a > 0 && pr(e, (c) => {
      c.videoDuration !== a && (c.videoDuration = a, r = !0);
    }), r;
  }
  function Ec(e) {
    pr(e, (a) => {
      a.videoError = "embed";
    }), yn();
  }
  function Dc(e) {
    const a = e.videoId;
    if (!a) return;
    const r = () => {
      ln.classList.contains("open") ? ce || O() : (O(), yn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === a && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), r());
    }).catch((c) => {
      e.videoId === a && c === 401 && (e.videoError = "embed", r());
    }), Rc(a).then((c) => {
      Dl(a, c) && r();
    }).catch((c) => {
      c === "embed" && e.videoId === a && (e.videoError = "embed", r());
    });
  }
  function Rc(e) {
    return Ut().then((a) => new Promise((r, c) => {
      const p = document.createElement("div");
      p.className = "videoProbe", p.setAttribute("aria-hidden", "true");
      const x = document.createElement("div");
      p.appendChild(x), o("app").appendChild(p);
      let _ = null, P = !1;
      const Q = (U, Me) => {
        P || (P = !0, clearTimeout(te), setTimeout(() => {
          try {
            _ == null || _.destroy();
          } catch {
          }
          p.remove();
        }, 0), Me ? c(Me) : r(U));
      }, te = setTimeout(() => Q(0), 2e4), Z = () => {
        var Me;
        const U = Number((Me = _ == null ? void 0 : _.getDuration) == null ? void 0 : Me.call(_)) || 0;
        return U > 0 && Q(U), U > 0;
      };
      _ = new a.Player(x, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            Z() || (_.mute(), _.playVideo());
          },
          onStateChange: () => Z(),
          onError: (U) => Q(0, U.data === 101 || U.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Si() {
    Ot = !1;
    const e = Ee[ze];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? cr(e) : Ne(), zt = e.duration, Bn = e.duration, wo.textContent = e.name, Un.textContent = e.group, Un.hidden = !0, Zo.textContent = rr(ze), Hn && ya("step", { name: e.name, group: e.group, kind: e.kind, step: ze + 1, of: Ee.length, round: e.round || 1, rounds: yo(), duration: e.duration }), Da(), Es(), Rs(), e.kind === "video" && setTimeout(ur, 0);
  }
  function Qo() {
    var p;
    const e = ((p = Ee[ze]) == null ? void 0 : p.kind) === "video" && !Ot, a = e && zt >= 60;
    xo.textContent = a ? qt(zt) : zt, xo.classList.toggle("long", a), e && (o("videoClock").textContent = qt(zt) + " left");
    const r = zt / Bn * 100;
    xi.style.width = r + "%";
    const c = ko();
    if (c && !Ot) {
      const x = 100 - r;
      c.style.setProperty("--segment-progress", x + "%");
    }
  }
  function Mo() {
    var a, r;
    if (vn) return;
    const e = Ee[ze];
    if ((e == null ? void 0 : e.kind) === "video" && !Ot && X === e) {
      const c = Number((a = Se == null ? void 0 : Se.getCurrentTime) == null ? void 0 : a.call(Se)) || 0, p = Number(e.start) || 0, x = Ci(e);
      Bn = Math.max(1, x - p), (c > p || ((r = Se == null ? void 0 : Se.getPlayerState) == null ? void 0 : r.call(Se)) === R) && (zt = Math.max(0, Math.ceil(x - c))), Qo(), c > p && c >= x - 0.25 && bt();
      return;
    }
    zt--, Qo(), zt <= 0 && (e.rest > 0 ? Rl(e.rest) : Ti());
  }
  function Rl(e) {
    var r;
    Ot = !0, o("app").classList.add("resting");
    const a = ko();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(Ct), zt = e, Bn = e, Hn && ya("rest", { duration: e }), wo.textContent = "Rest", Un.textContent = (r = Ee[ze]) != null && r.roundBreakAfter ? "Round " + (Ee[ze].round + 1) + " next" : "Recovery", Da(), Qo(), Ct = setInterval(() => {
      vn || (zt--, Qo(), zt <= 0 && (clearInterval(Ct), Ti(), Ct = setInterval(Mo, 1e3)));
    }, 1e3);
  }
  function Ti() {
    Ot = !1;
    const e = wn(ze + 1);
    if (e >= 0)
      ze = e, Si();
    else {
      clearInterval(Ct), Ne(), l(!1), o("app").classList.remove("resting"), wo.textContent = "Complete", Un.textContent = "Move finished", Un.hidden = !1, xo.textContent = "✓";
      {
        const a = yo();
        Zo.textContent = a > 1 ? a + " rounds done" : Ee.filter((r) => !r.roundBreak).length + " steps done";
      }
      lr(!0);
      {
        const a = Vl(7).reduce((r, c) => r + c.minutes, 0);
        Un.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      xi.style.width = "100%", Da();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Nc(), l(!1);
  });
  function Nc() {
    clearInterval(Ct);
    const e = Ee[ze];
    if (Ot) {
      Ot = !1, o("app").classList.remove("resting");
      const r = wn(ze + 1);
      r >= 0 ? (ze = r, Si(), Ct = setInterval(Mo, 1e3)) : Ti();
      return;
    }
    if (e && e.rest > 0) {
      Rl(e.rest);
      return;
    }
    const a = wn(ze + 1);
    a >= 0 ? (ze = a, Si(), Ct = setInterval(Mo, 1e3)) : Ti();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Ct), l(!1), Ot) {
      const e = Ee[ze];
      zt = e.rest, Bn = e.rest, wo.textContent = "Rest", Un.textContent = "Recovery", o("app").classList.add("resting"), Da(), Qo();
    } else
      Si();
    Ct = setInterval(Ot ? () => {
      vn || (zt--, Qo(), zt <= 0 && (clearInterval(Ct), Ti(), Ct = setInterval(Mo, 1e3)));
    } : Mo, 1e3);
  });
  function mr(e, a, r, c) {
    let p = 0, x = null, _ = !1;
    function P() {
      x && cancelAnimationFrame(x), x = null, p = 0, _ = !1, a.style.width = "0%", e.classList.remove("holding");
    }
    function Q(U) {
      if (!_) return;
      p || (p = U);
      const Me = Math.min(1, (U - p) / r);
      if (a.style.width = Me * 100 + "%", Me >= 1) {
        _ = !1, x && cancelAnimationFrame(x), x = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), c();
        return;
      }
      x = requestAnimationFrame(Q);
    }
    function te(U) {
      var Me;
      if (!(U && U.button !== void 0 && U.button !== 0)) {
        U == null || U.preventDefault(), P(), _ = !0, e.classList.add("holding");
        try {
          (Me = e.setPointerCapture) == null || Me.call(e, U.pointerId);
        } catch {
        }
        x = requestAnimationFrame(Q);
      }
    }
    function Z() {
      _ && P();
    }
    e.addEventListener("pointerdown", te), e.addEventListener("pointerup", Z), e.addEventListener("pointercancel", Z), e.addEventListener("lostpointercapture", Z), e.addEventListener("keydown", (U) => {
      (U.key === " " || U.key === "Enter") && !U.repeat && te(U);
    }), e.addEventListener("keyup", (U) => {
      (U.key === " " || U.key === "Enter") && Z();
    });
  }
  const Bc = o("endWorkout");
  mr(Bc, o("holdEndFill"), 1500, ki);
  const Li = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Li.classList.add("open"), Li.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Li.classList.remove("open"), Li.setAttribute("aria-hidden", "true");
  });
  function Pc() {
    const e = dt, a = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    a && a.remove(), delete nt[e], ct.order = ct.order.filter((c) => c !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const c = "custom-" + Date.now();
      nt[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ct.order.push(c), r = Ro(c, nt[c]);
    }
    Li.classList.remove("open"), Li.setAttribute("aria-hidden", "true"), ho = null, jo(), it(r.dataset.workout), yn(), _t("Move deleted");
  }
  mr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, Pc);
  const Ns = n.querySelector(".rubberTabs"), _i = o("rubberIndicator");
  function hr(e, a = !0) {
    if (!e || !Ns || !_i) return;
    const r = Ns.getBoundingClientRect(), c = e.getBoundingClientRect();
    _i.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const p = Aa();
    _i.style.left = (c.left - r.left) / p + Ns.scrollLeft + "px", _i.style.width = c.width / p + "px", a && (_i.style.transform = "scaleX(1.08)", setTimeout(() => _i.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), hr(e, !0);
  })), requestAnimationFrame(() => hr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => hr(n.querySelector(".tab.active"), !1));
  const Bs = o("pixelTrailToggle"), Ps = o("rippleToggle"), Ai = o("trailStrength"), Ei = o("trailLife");
  function oa(e, a) {
    ut()[e] = a, yn();
  }
  const Nl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Bl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Is(e) {
    var a;
    return !!((a = ut().hideMeta) != null && a[Bl(e)]);
  }
  function Ic() {
    const e = /* @__PURE__ */ new Map(), a = (r, c, p) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const x = Bl(r);
      let _ = e.get(x);
      _ || (_ = { key: x, label: x === "rest" ? "Rest" : x === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(x, _)), _.kinds.add(x === "rest" ? "Rest" : x === "video" ? "Video" : c), _.moves.add(p), _.count++;
    };
    return Object.values(nt).forEach((r) => {
      const c = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : _e)).forEach((p) => a(p, "Warm-up", c)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((p) => a(p, p.presetRole === "warmup" ? "Warm-up" : p.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (r.cooldown || (r.customSequence ? [] : Ia)).forEach((p) => a(p, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, c]) => {
      e.has(r) || e.set(r, { key: r, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, c) => Nl.indexOf(r.kind) - Nl.indexOf(c.kind) || r.label.localeCompare(c.label));
  }
  let Hs = "all";
  function Fs() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return Ic().filter((a) => (Hs === "all" || a.kind === Hs) && (!e || a.label.toLowerCase().includes(e) || a.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function zr() {
    const e = o("metaTableBody");
    if (!e) return;
    const a = ut().hideMeta || {}, r = Fs();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((p) => {
      const x = !a[p.key], _ = p.count ? (p.moves.length > 2 ? p.moves.slice(0, 2).join(", ") + " + " + (p.moves.length - 2) + " more" : p.moves.join(", ")) + " · " + p.count + " step" + (p.count === 1 ? "" : "s") : "Not used yet", P = document.createElement("tr");
      P.className = x ? "" : "off", P.innerHTML = '<td><div class="metaType">' + Ge(p.label) + '</div><div class="metaSub">' + Ge(p.kind + " · " + _) + '</div></td><td class="metaKindCol">' + Ge(p.kind) + '</td><td class="metaUsedCol">' + Ge(_) + '</td><td class="metaSwitchCol"><button class="switch' + (x ? " on" : "") + '" type="button" role="switch" aria-checked="' + x + '" aria-label="Second line for ' + Ge(p.label) + ' on phones"></button></td>', P.querySelector(".switch").addEventListener("click", () => Os([p.key], x)), e.appendChild(P);
    });
    const c = r.filter((p) => a[p.key]).length;
    o("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function Os(e, a) {
    const r = { ...ut().hideMeta || {} };
    e.forEach((c) => {
      a ? r[c] = !0 : delete r[c];
    }), oa("hideMeta", r), zr(), pt(), Da();
  }
  o("metaSearch").addEventListener("input", zr), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Hs = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === e)), zr();
  })), o("metaHideAll").addEventListener("click", () => Os(Fs().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => Os(Fs().map((e) => e.key), !1));
  const Di = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ut().toggles || {} };
  function Pl() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", Di[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, c]) => {
      o(c).hidden = Di[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => Di[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const a = n.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !e), a.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Di[e.dataset.toggle] = Di[e.dataset.toggle] === !1, Pl(), oa("toggles", { ...Di });
  })), Pl();
  function Hc() {
    Bs.classList.toggle("on", aa), Ps.classList.toggle("on", $e), Ai.value = Math.round(Sn * 100), o("trailStrengthValue").textContent = Ai.value + "%", Ei.value = Ka, o("trailLifeValue").textContent = Ei.value + " ms";
  }
  ut().trailEnabled !== void 0 && (aa = ut().trailEnabled), ut().rippleEnabled !== void 0 && ($e = ut().rippleEnabled), ut().trailStrength !== void 0 && (Sn = ut().trailStrength), ut().trailMaxAge !== void 0 && (Ka = ut().trailMaxAge), Hc(), Bs.addEventListener("click", () => {
    aa = !aa, Bs.classList.toggle("on", aa), aa || ($a = []), oa("trailEnabled", aa);
  }), Ps.addEventListener("click", () => {
    $e = !$e, Ps.classList.toggle("on", $e), oa("rippleEnabled", $e);
  }), Ai.addEventListener("input", () => {
    Sn = Number(Ai.value) / 100, o("trailStrengthValue").textContent = Ai.value + "%";
  }), Ai.addEventListener("change", () => oa("trailStrength", Sn)), Ei.addEventListener("input", () => {
    Ka = Number(Ei.value), o("trailLifeValue").textContent = Ei.value + " ms";
  }), Ei.addEventListener("change", () => oa("trailMaxAge", Ka)), Ta.addEventListener("change", () => oa("upcomingCount", Pt));
  function Il(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const a = e === "light";
    o("app").classList.toggle("light", a), s.setLight(a), ti(n);
  }
  Il(ut().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Il(e.dataset.theme), oa("theme", e.dataset.theme);
  }));
  const Zn = { steps: null, weather: null, ...ut().entities || {} };
  let on = null, Ws = {};
  function Fc(e) {
    const a = Object.values(e).filter((P) => P.entity_id.startsWith("sensor.") || P.entity_id.startsWith("input_number.")), r = (P) => P.attributes.friendly_name || P.entity_id, c = a.filter((P) => /step/i.test(P.entity_id) || /step/i.test(r(P)) || ["steps", "step"].includes(String(P.attributes.unit_of_measurement || "").toLowerCase())), p = a.filter((P) => !c.includes(P)), x = (P, Q) => r(P).localeCompare(r(Q)), _ = (P, Q) => /health_steps/.test(Q.entity_id) - /health_steps/.test(P.entity_id) || x(P, Q);
    return { suggested: c.sort(_), rest: p.sort(x), label: r };
  }
  function Hl(e) {
    const a = o("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: r, rest: c, label: p } = Fc(e), x = (Q) => '<option value="' + Ge(Q.entity_id) + '">' + Ge(p(Q)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(x).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(x).join("") + "</optgroup>" : ""), a.value = Zn.steps || "";
    const _ = o("stepsStatus"), P = Zn.steps && e[Zn.steps];
    _.textContent = P ? "Connected · " + p(P) : _.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Zn.steps = o("stepsEntity").value || null, oa("entities", { ...Zn }), Ws = {}, ql(), on && (Hl(on), Ol(on));
  });
  function Oc(e, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(e);
  }
  function Fl() {
    const e = Zn.steps && (on == null ? void 0 : on[Zn.steps]), a = Number(e == null ? void 0 : e.state);
    return Number.isFinite(a) ? a : null;
  }
  function Ol(e) {
    var c;
    const a = Zn.steps, r = a ? Number((c = e[a]) == null ? void 0 : c.state) : NaN;
    o("stepsMeta").textContent = a ? Number.isFinite(r) ? Oc(r) : "—" : "Set up in Settings";
  }
  let Wl = 0;
  async function ql() {
    const e = Zn.steps;
    if (!e || !s.ws) return;
    Wl = Date.now();
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const c = await s.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: a.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), p = (c == null ? void 0 : c[e]) || [], x = {};
      if (p.forEach((_) => {
        Number.isFinite(_.max) && (x[Rt(new Date(_.start))] = _.max);
      }), !Object.keys(x).length) {
        const _ = await s.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: a.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((_ == null ? void 0 : _[e]) || []).forEach((P) => {
          const Q = Number(P.s ?? P.state), te = P.lu ? P.lu * 1e3 : Date.parse(P.last_updated || P.last_changed);
          if (!Number.isFinite(Q) || !te) return;
          const Z = Rt(new Date(te));
          x[Z] = Math.max(x[Z] || 0, Q);
        });
      }
      Ws = x, Qa();
    } catch {
    }
  }
  function ei() {
    Qa();
  }
  ei(), setInterval(() => {
    ei(), qo(), Ua();
  }, 10 * 60 * 1e3);
  function Vl(e) {
    const a = {}, r = {};
    ct.history.forEach((_) => {
      const P = Rt(new Date(_.start));
      a[P] = (a[P] || 0) + (_.seconds || 0) / 60, r[P] = (r[P] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), p = Rt(c), x = [];
    for (let _ = e - 1; _ >= 0; _--) {
      const P = new Date(c.getFullYear(), c.getMonth(), c.getDate() - _), Q = Rt(P), te = ct.checkins.filter((U) => U.date === Q), Z = (U) => {
        const Me = te.map((Ve) => Ve[U]).filter(Boolean);
        return Me.length ? Me.reduce((Ve, Le) => Ve + Le, 0) / Me.length : null;
      };
      x.push({
        key: Q,
        date: P,
        minutes: Math.round(a[Q] || 0),
        moves: r[Q] || 0,
        steps: Q === p && Fl() != null ? Fl() : Ws[Q] ?? null,
        mood: Z("mood"),
        energy: Z("energy")
      });
    }
    return x;
  }
  function Wc(e) {
    let a = e.length - 1;
    e[a] && !e[a].minutes && a--;
    let r = 0;
    for (; a >= 0 && e[a].minutes > 0; )
      r++, a--;
    return r;
  }
  function Qa() {
    const e = o("insightCard");
    if (!e) return;
    const a = Vl(30), r = Wc(a), c = a.reduce((te, Z) => te + Z.minutes, 0), p = /* @__PURE__ */ new Date(), x = Rt(p), _ = Rt(new Date(p.getFullYear(), p.getMonth(), p.getDate() - (p.getDay() + 6) % 7)), P = a.filter((te) => te.key >= _ && te.key <= x).reduce((te, Z) => te + Z.minutes, 0), Q = (te, Z, U) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + te + '</div><div><div class="activityRowName">' + Ge(Z) + '</div><div class="activityRowMeta">' + Ge(U) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + xe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + Q(xe("clock"), "This week", P + " min") + Q(xe("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + Q(xe("calendar"), "30 days", c + " min") + "</div>";
  }
  const qs = {
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
  }, qc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Ri = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, jr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let zl = 0;
  const Vs = (e, a) => '<path class="' + a + '" d="' + e + '"/>', Vc = (e, a) => ' style="animation-delay:-' + Math.round(e * 137 % a) + 'ms"', ia = (e, a, r, c) => {
    const p = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Vc(e, 2400) + ' d="M' + e + " " + (a - r) + "L" + (e + p) + " " + (a - p) + "L" + (e + r) + " " + a + "L" + (e + p) + " " + (a + p) + "L" + e + " " + (a + r) + "L" + (e - p) + " " + (a + p) + "L" + (e - r) + " " + a + "L" + (e - p) + " " + (a - p) + 'Z"/>';
  }, jl = ([e, a, r], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + a + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zc = (e, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', jc = (e) => (e ? ["29.35", "43.04", "56.74"].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), Gc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, r], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + a + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Gl(e, a, r, c) {
    return e === "clear" ? a ? jl(r ? jr.l : jr.s, c) + (r ? ia(70, 20, 5.83, 1) + ia(78.33, 41.67, 3.75, 0.8) + ia(60, 71.67, 3.33, 0.6) : ia(42, 12, 3.5, 1) + ia(47, 25, 2.25, 0.8) + ia(36, 43, 2, 0.6)) : zc(c, r) : e === "partly" ? (a ? jl(r ? jr.lp : jr.sp, c) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Vs(r ? Ri.lp : Ri.sp, a ? "wxCloudLight" : "wxBright") + (a ? r ? ia(73.33, 16.67, 4.17, 0.9) : ia(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Vs(r ? Ri.lc : Ri.s, a ? "wxCloudLight" : "wxBright") + (a ? r ? ia(15, 15, 3.75, 0.8) + ia(76.67, 13.33, 2.92, 0.6) : ia(9, 9, 2.25, 0.8) + ia(46, 8, 1.75, 0.6) : "") : Vs(r ? Ri.lr : Ri.s, "wxCloudLight") + (e === "rain" ? jc(r) : Gc(r));
  }
  const Uc = () => {
    var e;
    return ((e = on == null ? void 0 : on["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Kn = ut().weatherStyle || "bitmap", Ul = ut().weatherLayout === "strip" ? "strip" : "tiles", Yc = ut().weatherMotion !== !1;
  const fr = () => Yc && !Fe(), gr = /* @__PURE__ */ new Map(), zs = 700, Zc = (e) => {
    const [a, r] = e.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: r === "night" };
  };
  function Gr(e, a, r, c = Kn, p, x) {
    let _ = qc(e);
    const P = _ === "night" || (x != null ? !!x : !!r && Uc());
    _ === "night" && (_ = "clear");
    const Q = a ? 90 : 54, te = gs(e, P), Z = performance.now();
    let U = p ? gr.get(p) : null;
    if (p && !U ? gr.set(p, U = { key: te, t0: -1e9 }) : U && U.key !== te && (U.fromKey = U.key, U.from = U.last || null, U.key = te, U.t0 = Z), c !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + te + '"' + (p ? ' data-wx-slot="' + p + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + Q + '"></canvas></span>';
    let Me = "";
    if (U && Z - U.t0 < zs && (fr() || Fe())) {
      const Ve = Zc(U.fromKey);
      Me = '<span class="wxLayer wxOut ' + Ve.k + (Ve.night ? " night" : "") + '" style="animation-delay:' + Math.round(U.t0 - Z) + 'ms"><svg viewBox="0 0 ' + Q + " " + Q + '">' + Gl(Ve.k, Ve.night, a, "wxg" + ++zl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + _ + (P ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + Q + " " + Q + '">' + Gl(_, P, a, "wxg" + ++zl) + "</svg>" + Me + "</span>";
  }
  function Ur() {
    const e = o("app"), a = getComputedStyle(e), r = (P) => a.getPropertyValue(P).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([P, Q]) => {
      r(Q) && (c[P] = r(Q));
    });
    const p = r("--color-text-primary") || "#f1f1f1", x = r("--color-bg-card") || "#222222", _ = e.classList.contains("light");
    return { colors: c, ink: _ ? p : x, paper: _ ? x : p };
  }
  function ti(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const c = Ur(), p = fr(), x = Fe();
    r.forEach((_) => {
      var U;
      const P = _.dataset.wx, Q = _.dataset.wxSlot ? gr.get(_.dataset.wxSlot) : null;
      let te = wl(P, c.colors);
      if (Q && Q.key === P) {
        const Me = (a - Q.t0) / zs;
        Me < 1 && (p || x) && (te = du(Q.from || wl(Q.fromKey, c.colors), te, Math.max(0, Me), c.colors, x)), Q.last = te;
      }
      const Z = ac(te, { size: Number(_.dataset.wxSize) || 54, px: 2, oneBit: _.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: a, idle: p });
      _.width !== Z.w && (_.width = Z.w), _.height !== Z.h && (_.height = Z.h), (U = _.getContext("2d")) == null || U.putImageData(new ImageData(Z.data, Z.w, Z.h), 0, 0);
    });
  }
  let Yr = null, Yl = -1;
  function Zl(e) {
    if (Yr = null, !h) return;
    const a = fr(), r = Math.floor(e / 100), c = [...gr.values()].some((Q) => e - Q.t0 < zs), p = [...Zr.values()].some((Q) => e - Q.t0 < Q.dur), x = ke.home.classList.contains("active"), _ = Fn.classList.contains("open"), P = a && Kn === "smooth" && (_ || x && Ul === "strip");
    !document.hidden && (c || p || P || a && r !== Yl) && (Yl = r, x && (ti(o("weatherCard"), e), vr(o("weatherCard"), e)), _ && (ti(Fn, e), vr(Fn, e))), (a || c || p) && (Yr = requestAnimationFrame(Zl));
  }
  function ni() {
    o("app").classList.toggle("wxMotion", fr()), !Yr && h && (Yr = requestAnimationFrame(Zl));
  }
  let Kl = [];
  const Yt = 36e5, Kc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function eo() {
    const e = /* @__PURE__ */ new Date(), a = (x, _) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + x, _), r = [], c = [], p = [...Array(6)].map((x, _) => {
      const P = a(_, 6), Q = a(_, 18), te = a(_ + 1, 6), Z = Kl.find((Me) => Rt(new Date(Me.datetime)) === Rt(P)), U = (Me, Ve, Le) => {
        const ye = r.filter((st) => st.t >= +Me && st.t < +Ve);
        if (ye.length) {
          const st = {};
          return ye.forEach((Ae) => {
            st[Ae.c] = (st[Ae.c] || 0) + (Kc.has(Ae.c) ? 2 : 1);
          }), Object.entries(st).sort((Ae, lt) => lt[1] - Ae[1])[0][0];
        }
        const ve = c.find((st) => {
          const Ae = +new Date(st.datetime);
          return Ae >= +Me - 3 * Yt && Ae < +Ve && (st.is_daytime == null || !!st.is_daytime == !Le);
        });
        if (ve) return ve.condition;
        const at = (Z == null ? void 0 : Z.condition) || "cloudy";
        return Le && at === "sunny" ? "clear-night" : at;
      };
      return { start: +P, end: +te, day: U(P, Q, !1), night: U(Q, te, !0), hi: Number(Z == null ? void 0 : Z.temperature), lo: Number(Z == null ? void 0 : Z.templow) };
    });
    return { days: p, hours: r, start: p[0].start, end: p[5].end };
  }
  const $l = (e, a) => {
    const r = e.days.findIndex((p) => a < p.end);
    if (r < 0) return 1;
    const c = e.days[r];
    return Math.max(0, (r + (a - c.start) / (c.end - c.start)) / 6);
  }, $c = (e, a) => {
    const r = Math.max(0, Math.min(0.99999, a)) * 6, c = Math.floor(r), p = e.days[c];
    return p.start + (r - c) * (p.end - p.start);
  };
  function js(e, a) {
    const r = Math.max(0, e.days.findIndex((Q) => a < Q.end)), c = e.days[r], p = (a - c.start) / (c.end - c.start) >= 0.5;
    let x = p ? c.night : c.day, _ = NaN;
    const P = e.hours;
    if (P.length && a >= P[0].t - Yt && a <= P[P.length - 1].t + Yt) {
      let Q = P.findIndex((U) => U.t > a);
      Q < 0 && (Q = P.length);
      const te = P[Math.max(0, Q - 1)], Z = P[Math.min(P.length - 1, Q)];
      x = te.c || x, _ = Z.t > te.t ? te.temp + (Z.temp - te.temp) * Math.max(0, Math.min(1, (a - te.t) / (Z.t - te.t))) : te.temp;
    }
    if (!Number.isFinite(_)) {
      const Q = [];
      if (e.days.forEach((te) => {
        Number.isFinite(te.lo) && Q.push([te.start - Yt, te.lo]), Number.isFinite(te.hi) && Q.push([te.start + 9 * Yt, te.hi]);
      }), Q.length) {
        _ = a <= Q[0][0] ? Q[0][1] : Q[Q.length - 1][1];
        for (let te = 1; te < Q.length; te++) if (a <= Q[te][0] && a > Q[te - 1][0]) {
          const [Z, U] = Q[te - 1], [Me, Ve] = Q[te];
          _ = U + (Ve - U) * (1 - Math.cos(Math.PI * (a - Z) / (Me - Z))) / 2;
          break;
        }
      }
    }
    return { cond: p && x === "sunny" ? "clear-night" : x, temp: _, night: p, day: c };
  }
  const Jl = (e) => Rt(new Date(e)) === Rt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Zr = /* @__PURE__ */ new Map(), Jc = 900, Xc = 700;
  let Kr = null;
  const ra = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((a) => {
    vr(a.target.parentElement), a.target.closest("#wxDialog") && ad();
  })) : null;
  function vr(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const c = eo(), p = c.days.flatMap((U) => [{ cond: U.day, night: !1 }, { cond: U.night, night: !0 }]), x = p.map((U) => U.cond).join(), _ = Ur(), P = fr(), Q = Fe(), te = Number(Rt(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let Z = !1;
    r.forEach((U) => {
      var st;
      const Me = U.clientWidth, Ve = U.clientHeight;
      if (!Me || !Ve) return;
      const Le = U.dataset.wxStrip;
      let ye = Zr.get(Le);
      ye ? ye.sig !== x && (ye.prev = ye.segs, ye.sig = x, ye.segs = p, ye.t0 = a, ye.dur = Xc) : Zr.set(Le, ye = { sig: x, segs: p, prev: null, t0: a, dur: Jc });
      const ve = P || Q ? Math.min(1, Math.max(0, (a - ye.t0) / ye.dur)) : 1;
      ve < 1 && (Z = !0);
      const at = { width: Me, height: Ve, colors: _.colors, clock: a, ambient: P, seed: te, reveal: Q ? ve : 1 - Math.pow(1 - ve, 3), prev: ve < 1 ? ye.prev : null, reduce: Q };
      if (Kn === "smooth") {
        const Ae = Math.min(2, window.devicePixelRatio || 1), lt = Math.round(Me * Ae), yt = Math.round(Ve * Ae);
        U.width !== lt && (U.width = lt), U.height !== yt && (U.height = yt);
        const Ke = U.getContext("2d");
        if (!Ke) return;
        Ke.setTransform(Ae, 0, 0, Ae, 0, 0), Cu(Ke, p, at);
      } else {
        const Ae = Mu(p, { ...at, px: 2, oneBit: Kn === "onebit", ink: _.ink, paper: _.paper });
        U.width !== Ae.w && (U.width = Ae.w), U.height !== Ae.h && (U.height = Ae.h), (st = U.getContext("2d")) == null || st.putImageData(new ImageData(Ae.data, Ae.w, Ae.h), 0, 0);
      }
    }), Z && ni();
  }
  function Xl() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const a = Zn.weather, r = a && (on == null ? void 0 : on[a]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Gr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ti(e);
      return;
    }
    const c = r.attributes || {}, p = c.temperature_unit || "°", x = (Ke) => Number.isFinite(Number(Ke)) ? Math.round(Number(Ke)) + "°" : "—", _ = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", P = qs[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), Q = Rt(/* @__PURE__ */ new Date()), te = Kl.slice(0, 7), Z = te.find((Ke) => Rt(new Date(Ke.datetime)) === Q) || null, U = te.filter((Ke) => Rt(new Date(Ke.datetime)) >= Q).slice(0, 6), Me = /* @__PURE__ */ new Date(), Ve = Rt(new Date(Me.getFullYear(), Me.getMonth(), Me.getDate() + 1)), Le = Z ? "H " + x(Z.temperature) + "&ensp; L " + x(Z.templow) : "", ye = (Ke) => {
      const Ue = Rt(new Date(Ke.datetime));
      return Ue === Q ? "Today" : Ue === Ve ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Ke.datetime));
    }, ve = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", at = (Ke) => {
      const Ue = new Date(Ke.datetime);
      return Math.round((new Date(Ue.getFullYear(), Ue.getMonth(), Ue.getDate()) - new Date(Me.getFullYear(), Me.getMonth(), Me.getDate())) / 864e5);
    }, st = (Ke) => (qs[Ke] || Ke || "").toLowerCase(), Ae = (Ke, Ue) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + at(Ke) + '" aria-label="' + Ge(ye(Ke) + ": " + st(Ke.condition) + ", " + x(Ke.temperature) + " / " + x(Ke.templow) + ". Open the forecast") + '">' + Gr(Ke.condition, !1, !1, Kn, "day" + Ue) + '<div><div class="activityRowName">' + Ge(ye(Ke)) + '</div><div class="activityRowMeta">' + x(Ke.temperature) + " / " + x(Ke.templow) + "</div></div></div>", lt = () => '<div class="wxStrip"><div class="wxStripDays">' + eo().days.map((Ue, Zt) => {
      const Et = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ue.start)) + ": " + st(Ue.day) + (st(Ue.day) === st(Ue.night) ? " all day and night" : ", then " + st(Ue.night) + " overnight") + (Number.isFinite(Ue.hi) ? ". High " + x(Ue.hi) : "") + (Number.isFinite(Ue.lo) ? ", low " + x(Ue.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Zt + '" aria-label="' + Ge(Et) + '"><span class="wxDayName">' + Ge(Jl(Ue.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + x(Ue.hi) + '</span><span class="wxLow">' + x(Ue.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ge("Now in " + _ + ": " + ve + "°, " + st(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Gr(r.state, !0, !0, Kn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(ve)) + '</span><span class="wxUnit">' + Ge(p) + '</span></div><div class="wxPlace">' + Ge(_) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(P) + "</div>" + (Le ? '<div class="wxRange">' + Le + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (U.length ? Ul === "strip" ? lt() : '<div class="activityRows wxDays">' + U.map(Ae).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ti(e);
    const yt = e.querySelector("canvas[data-wx-strip]");
    Kr && Kr !== yt && (ra == null || ra.unobserve(Kr)), Kr = yt, yt && (ra == null || ra.observe(yt), vr(e)), ni(), nd();
  }
  const Ql = o("weatherCard"), ed = (e) => {
    const a = e.closest("[data-wx-day]");
    if (a) {
      const c = /* @__PURE__ */ new Date();
      td(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && td(Date.now(), r);
  };
  Ql.addEventListener("click", (e) => ed(e.target)), Ql.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), ed(e.target));
  });
  const Fn = o("wxDialog"), Co = o("wxGraph"), br = o("wxGraphWrap");
  let ka = Date.now(), ai = null, Gs = !1, Ni = null;
  function td(e, a) {
    const r = eo();
    ai = a || null, ka = Math.max(r.start, Math.min(r.end - Yt, e)), Zr.delete("dialog"), gr.delete("scrub"), Fn.classList.add("open"), Fn.setAttribute("aria-hidden", "false"), nd(), ra == null || ra.observe(Fn.querySelector("canvas[data-wx-strip]")), Co.focus({ preventScroll: !0 }), ni();
  }
  function Us() {
    var e;
    Fn.classList.remove("open"), Fn.setAttribute("aria-hidden", "true"), ra == null || ra.unobserve(Fn.querySelector("canvas[data-wx-strip]")), (e = ai == null ? void 0 : ai.focus) == null || e.call(ai, { preventScroll: !0 }), ai = null;
  }
  function nd() {
    if (!Fn.classList.contains("open")) return;
    const e = eo();
    o("wxGraphDays").innerHTML = e.days.map((a) => "<span>" + Ge(Jl(a.start)) + "</span>").join(""), ad(e), $r(e), vr(Fn);
  }
  function $r(e = eo()) {
    const a = js(e, ka), r = on == null ? void 0 : on[Zn.weather], c = (r == null ? void 0 : r.attributes) || {}, p = c.temperature_unit || "°", x = Math.abs(ka - Date.now()) < Yt / 2, _ = x && r ? r.state : a.cond, P = x && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", Q = qs[_] || (_ ? _.charAt(0).toUpperCase() + _.slice(1) : "—"), te = x ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(ka / Yt) * Yt)), Z = a.day, U = (Number.isFinite(Z.hi) ? "H " + Math.round(Z.hi) + "°" : "") + (Number.isFinite(Z.lo) ? "&ensp; L " + Math.round(Z.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Gr(_, !0, x, Kn, "scrub", x ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(P)) + '</span><span class="wxUnit">' + Ge(p) + '</span></div><div class="wxPlace">' + Ge(te) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(Q) + "</div>" + (U ? '<div class="wxRange">' + U + "</div>" : "") + "</div>", ti(o("wxDialogNow")), Co.setAttribute("aria-valuenow", String(Math.round((ka - e.start) / Yt))), Co.setAttribute("aria-valuetext", te + ", " + Q.toLowerCase() + ", " + P + "°"), Ys(e), ni();
  }
  function ad(e = eo()) {
    const a = o("wxGraphLine"), r = br.clientWidth, c = br.clientHeight;
    if (!r || !c) return;
    const p = [];
    for (let ve = e.start; ve <= e.end; ve += Yt) {
      const at = js(e, ve).temp;
      Number.isFinite(at) && p.push([$l(e, ve) * r, at]);
    }
    if (a.setAttribute("viewBox", "0 0 " + r + " " + c), p.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', Ni = null, Ys(e);
      return;
    }
    const x = p.map((ve) => ve[1]), _ = Math.min(...x), P = Math.max(...x), Q = Math.max(4, P - _), te = Kn !== "smooth", Z = (ve) => te ? Math.round(ve / 2) * 2 : Math.round(ve * 10) / 10;
    Ni = (ve) => c * 0.84 - (ve - _) / Q * c * 0.62;
    const U = Ur(), Me = Kn === "onebit" ? U.paper : "#ffffff", Ve = Kn === "onebit" ? U.ink : "rgba(0,0,0,.28)", Le = "M" + p.map((ve) => Z(ve[0]) + " " + Z(Ni(ve[1]))).join(" L"), ye = (ve, at) => {
      const st = p.find((Ae) => Ae[1] === ve);
      return '<text class="wxLineLabel" x="' + Z(Math.min(r - 14, Math.max(14, st[0]))) + '" y="' + Z(Ni(ve) + (at ? 18 : -10)) + '" fill="' + Me + '" stroke="' + Ve + '">' + Math.round(ve) + "°</text>";
    };
    a.setAttribute("shape-rendering", te ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + Le + '" fill="none" stroke="' + Ve + '" stroke-width="' + (te ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Le + '" fill="none" stroke="' + Me + '" stroke-width="2" stroke-linejoin="round"/>' + ye(P, !1) + ye(_, !0) + '<g id="wxCursorMark"></g>', Ys(e);
  }
  function Ys(e = eo()) {
    const a = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const r = br.clientWidth, c = br.clientHeight, p = Kn !== "smooth", x = (Me) => p ? Math.round(Me / 2) * 2 : Me, _ = x($l(e, ka) * r), P = js(e, ka).temp, Q = Ur(), te = Kn === "onebit" ? Q.paper : "#ffffff", Z = Kn === "onebit" ? Q.ink : "rgba(0,0,0,.28)", U = Ni && Number.isFinite(P) ? x(Ni(P)) : null;
    a.innerHTML = '<rect x="' + (_ - 2) + '" y="0" width="4" height="' + c + '" fill="' + Z + '"/><rect x="' + (_ - 1) + '" y="0" width="2" height="' + c + '" fill="' + te + '"/>' + (U == null ? "" : p ? '<rect x="' + (_ - 5) + '" y="' + (U - 5) + '" width="10" height="10" fill="' + te + '" stroke="' + Z + '" stroke-width="2"/>' : '<circle cx="' + _ + '" cy="' + U + '" r="6" fill="' + te + '" stroke="' + Z + '" stroke-width="2"/>');
  }
  const od = (e) => {
    const a = br.getBoundingClientRect();
    a.width && (ka = $c(eo(), (e - a.left) / a.width), $r());
  };
  Co.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Gs = !0;
      try {
        Co.setPointerCapture(e.pointerId);
      } catch {
      }
      od(e.clientX);
    }
  }), Co.addEventListener("pointermove", (e) => {
    Gs && od(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Co.addEventListener(e, () => {
    Gs = !1;
  })), Co.addEventListener("keydown", (e) => {
    const a = eo(), r = { ArrowLeft: -Yt, ArrowRight: Yt, ArrowDown: -Yt, ArrowUp: Yt, PageUp: -24 * Yt, PageDown: 24 * Yt }[e.key];
    r ? (e.preventDefault(), ka = Math.max(a.start, Math.min(a.end - Yt, Math.round(ka / Yt) * Yt + r)), $r(a)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), ka = e.key === "Home" ? a.start : a.end - Yt, $r(a));
  }), o("wxDialogClose").addEventListener("click", Us), Fn.addEventListener("click", (e) => {
    e.target === Fn && Us();
  }), Fn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Us());
  }), Xl(), (fd = (md = window.matchMedia) == null ? void 0 : (hd = md.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || fd.call(hd, "change", () => {
    ni(), ti(n);
  }), ni();
  const id = o("tvNav");
  s.fullscreenSupported || (id.hidden = !0), id.addEventListener("click", () => s.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ke.workout.classList.contains("active") || Go.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ko.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(tt.value) || 1) + Number(e.dataset.roundsStep)));
    String(a) !== tt.value && (tt.value = a, tt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [M, k, T, tt].forEach((e) => e.addEventListener("input", () => {
    const a = nt[dt];
    a && (a.total = Number(M.value), a.work = Number(k.value), a.rest = Number(T.value)), O();
  })), Ce.addEventListener("click", ki), We.addEventListener("click", () => b("settings")), o("settingsBack").addEventListener("click", ki), Ko.addEventListener("click", () => l(!vn)), it(dt), ui(), qo(), Qa(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), mr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    ct.history = [], ct.checkins = [], Wo = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    yn(), ei(), qo(), ui(), Qa(), Ua(), _t("Stats reset");
  });
  const Zs = o("morningTime"), Ks = o("eveningTime"), $s = o("checkinAutoOpen");
  Zs.value = In().morning, Ks.value = In().evening, $s.classList.toggle("on", ut().checkinAutoOpen !== !1), [["morningTime", Zs], ["eveningTime", Ks]].forEach(([e, a]) => a.addEventListener("change", () => {
    a.value && (oa(e, a.value), Ua());
  })), $s.addEventListener("click", () => {
    const e = ut().checkinAutoOpen === !1;
    $s.classList.toggle("on", e), oa("checkinAutoOpen", e);
  }), setTimeout(Zi, 800);
  const rd = o("checkinNotify"), Jr = o("checkinNotifyTarget"), sd = o("checkinNotifyStatus"), Qc = sd.textContent;
  function ld() {
    const e = s.notifyServices(), a = e.filter((p) => p.startsWith("mobile_app_")), r = a.length ? a : e, c = (p) => p.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Jr.innerHTML = r.map((p) => '<option value="' + Ge(p) + '">' + Ge(c(p)) + "</option>").join(""), !ut().notifyTarget && r[0] && (ut().notifyTarget = r[0]), Jr.value = ut().notifyTarget || "";
  }
  function Xr() {
    const e = !!ut().notifyOn;
    rd.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const a = In();
    sd.textContent = e ? "Sends at " + a.morning + " and " + a.evening : Qc;
  }
  async function Js() {
    const e = !!ut().notifyOn;
    try {
      return await s.setReminderAutomation(e ? { target: ut().notifyTarget, times: In() } : null), !0;
    } catch {
      return _t("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  rd.addEventListener("click", async () => {
    const e = !ut().notifyOn;
    if (e && (ld(), !ut().notifyTarget)) {
      _t("Install the Companion app on your phone first");
      return;
    }
    ut().notifyOn = e, Xr(), await Js() ? (yn(), _t(e ? "Check-in notifications on" : "Check-in notifications off")) : (ut().notifyOn = !e, Xr());
  }), Jr.addEventListener("change", () => {
    oa("notifyTarget", Jr.value), ut().notifyOn && Js();
  }), [Zs, Ks].forEach((e) => e.addEventListener("change", () => {
    Xr(), ut().notifyOn && Js();
  })), ld(), Xr();
  let Xs = null;
  function eu() {
    Xs || (Xs = setTimeout(() => {
      Xs = null, Qa();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, c;
      const a = !on || on[Zn.weather] !== e[Zn.weather] || ((r = on["sun.sun"]) == null ? void 0 : r.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      on = e, Hl(e), Ol(e), a && Xl(), Date.now() - Wl > 60 * 60 * 1e3 && ql(), eu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (ct.history = e.history, ei()), Array.isArray(e.history) && Qa(), Array.isArray(e.checkins) && (ct.checkins = e.checkins.map(pn), Ua(), ui(), qo(), ei(), Qa()), e.profiles && !ln.classList.contains("open") && !Hn)) {
        const a = Do(e);
        Object.keys(nt).forEach((r) => delete nt[r]), Object.assign(nt, a.profiles), ct.order = a.order, nt[dt] || (dt = ct.order[0]), Nn(), it(dt);
      }
    },
    suspend() {
      h = !1;
    },
    resume() {
      h || (h = !0, vo || (vo = requestAnimationFrame(vi)), Ja || (Ja = requestAnimationFrame(wi)), ni(), hr(n.querySelector(".tab.active"), !1));
    }
  };
}
const Lu = /* @__PURE__ */ new Set(["roaming", "test_area"]), _u = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, xr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Qt = "made_up_", Ii = (n) => {
  var s;
  return (s = String(n).split(".")[1]) == null ? void 0 : s.startsWith(Qt);
}, ns = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function _l(n) {
  const s = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((s - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Au(n) {
  const s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let u = +s; u < +n; u += 10 * 60 * 1e3) o += _l(new Date(u)) / 6;
  return o;
}
function xd(n = /* @__PURE__ */ new Date()) {
  const s = [];
  for (let o = 0; o <= 96; o++) {
    const u = +n - (96 - o) * 15 * 60 * 1e3;
    s.push([u, _l(new Date(u))]);
  }
  return s;
}
function Eu({ onChange: n }) {
  const s = {}, o = {}, u = (z, q, K, F) => {
    s[z] = { entity_id: z, state: K, attributes: F, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[z] = q;
  }, m = (z, q, K) => {
    const F = s[z], Y = q ?? F.state;
    s[z] = { ...F, state: Y, attributes: { ...F.attributes, ...K }, last_changed: Y === F.state ? F.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, h = (z, q, K, F) => u("binary_sensor." + Qt + (z ? z + "_" : "") + ns(q), z, F ? "on" : "off", { friendly_name: q, device_class: K });
  Object.entries(_u).forEach(([z, q]) => {
    if (q.temperature != null && u("sensor." + Qt + z + "_temperature", z, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && u("sensor." + Qt + z + "_humidity", z, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && u("vacuum." + Qt + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && u("climate." + Qt + z, z, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [K, F, Y, ae] = q.cover;
      u("cover." + Qt + z + "_" + ns(K), z, Y ? "open" : "closed", { friendly_name: K, device_class: F, current_position: Y, ...ae != null ? { current_tilt_position: ae } : {} });
    }
    if (q.humidifier && u("humidifier." + Qt + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (u("sensor." + Qt + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Qt + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && u("valve." + Qt + z + "_" + ns(q.valve), z, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && h(z, q.door, "door", q.doorOpen), q.window && h(z, q.window, "window", !1), q.motion && h(z, q.motion, "motion", !1), q.plant) {
      const [K, F, Y, ae, A] = q.plant, W = Qt + ns(K), fe = (g, ke, Ce, We, b) => u("sensor." + W + "_" + g, z, String(Ce), { friendly_name: ke, device_class: b, state_class: "measurement", unit_of_measurement: We, plant_low: Ce < xr[g][0], plant_high: Ce > xr[g][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[g] });
      fe("moisture", "Moisture", F, "%", "moisture"), fe("light", "Light", Y, "lx", "illuminance"), fe("temperature", "Temperature", ae, "°C", "temperature"), fe("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Te = Object.entries({ moisture: F, light: Y, temperature: ae, fertility: A }).filter(([g, ke]) => ke < xr[g][0] || ke > xr[g][1]).map(([g, ke]) => g + (ke < xr[g][0] ? " low" : " high"));
      u("plant." + W, z, Te.length ? "problem" : "ok", { friendly_name: K, moisture: F, brightness: Y, temperature: ae, conductivity: A, problem: Te.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Qt + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), h(null, "Front door", "door", !1), h(null, "Smoke alarm", "smoke", !1), u("sensor." + Qt + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, L = {};
  let v = null;
  function I() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(s).forEach((q) => {
      q.endsWith("_solar_power") && (s[q] = { ...s[q], state: _l(z).toFixed(2) }), q.endsWith("_solar_today") && (s[q] = { ...s[q], state: Au(z).toFixed(1) });
    });
  }
  I();
  let se = 0;
  function ne() {
    let z = !1;
    const q = ++se % 10 === 0, K = (ae, A, W) => {
      m(ae, A, W), z = !0;
    };
    Object.entries(w).forEach(([ae, A]) => {
      const W = s[ae].attributes.current_position, fe = W < A ? Math.min(A, W + 10) : Math.max(A, W - 10);
      fe === A && delete w[ae], K(ae, fe === A ? fe === 0 ? "closed" : "open" : A > W ? "opening" : "closing", { current_position: fe });
    }), Object.entries(L).forEach(([ae, A]) => {
      const W = s[ae].attributes.current_tilt_position, fe = W < A ? Math.min(A, W + 25) : Math.max(A, W - 25);
      fe === A && delete L[ae], K(ae, null, { current_tilt_position: fe });
    }), Object.keys(s).filter((ae) => ae.startsWith("climate.")).forEach((ae) => {
      const A = s[ae], W = A.attributes, fe = W.current_temperature, Te = (A.state === "heat" || A.state === "auto") && fe < W.temperature - 0.05, g = (A.state === "cool" || A.state === "auto") && fe > W.temperature + 0.05, ke = A.state === "off" ? "off" : Te ? "heating" : g ? "cooling" : "idle", Ce = q ? Math.round((fe + (Te ? 0.1 : g ? -0.1 : 0)) * 10) / 10 : fe;
      (Ce !== fe || ke !== W.hvac_action) && K(ae, null, { current_temperature: Ce, hvac_action: ke });
    }), Object.keys(s).filter((ae) => ae.startsWith("humidifier.")).forEach((ae) => {
      const A = s[ae], W = A.attributes, fe = W.current_humidity, Te = A.state === "on" && fe < W.humidity, g = Te && q ? fe + 1 : fe, ke = A.state !== "on" ? "off" : Te ? "humidifying" : "idle";
      if (g !== fe || ke !== W.action) {
        K(ae, null, { current_humidity: g, action: ke });
        const Ce = "sensor." + Qt + o[ae] + "_humidity";
        s[Ce] && K(Ce, String(g));
      }
    });
    const F = s["vacuum." + Qt + "robot"], Y = F.attributes;
    F.state === "cleaning" && q && K(F.entity_id, null, { battery_level: Math.max(5, Y.battery_level - 1) }), F.state === "returning" && K(F.entity_id, "docked", {}), F.state === "docked" && Y.battery_level < 100 && K(F.entity_id, null, { battery_level: Math.min(100, Y.battery_level + 2) }), v && Date.now() - v.at > 5e3 && (K("alarm_control_panel." + Qt + "house", "armed_" + v.mode, {}), v = null), z && n();
  }
  const N = setInterval(ne, 1e3), B = setInterval(() => {
    I(), n();
  }, 60 * 1e3);
  function j(z, q, K) {
    const F = K == null ? void 0 : K.entity_id;
    if (!s[F]) return !1;
    const Y = s[F], ae = Y.attributes, A = (W, fe) => m(F, W, fe);
    if (z === "climate" && (q === "set_temperature" && A(null, { temperature: Math.max(ae.min_temp, Math.min(ae.max_temp, K.temperature)) }), q === "set_hvac_mode" && A(K.hvac_mode, K.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && A(Y.state === "off" ? "heat" : "off", Y.state === "off" ? {} : { hvac_action: "off" })), z === "cover") {
      const W = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? K.position : q === "toggle" ? ae.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete w[F], delete L[F], A(ae.current_position === 0 ? "closed" : "open")), W != null && W !== ae.current_position && (w[F] = W, A(W > ae.current_position ? "opening" : "closing"));
      const fe = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? K.tilt_position : null;
      q === "stop_cover_tilt" && delete L[F], fe != null && ae.current_tilt_position != null && fe !== ae.current_tilt_position && (L[F] = fe);
    }
    if (z === "humidifier" && (q === "set_humidity" && A(null, { humidity: Math.max(ae.min_humidity, Math.min(ae.max_humidity, K.humidity)) }), q === "set_mode" && A(null, { mode: K.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const W = q === "turn_on" || q === "toggle" && Y.state !== "on";
      A(W ? "on" : "off", { action: W ? "idle" : "off" });
    }
    if (z === "vacuum" && (q === "start" && A("cleaning", { rooms: K.rooms || ae.rooms }), q === "pause" && A("paused"), q === "return_to_base" && A("returning", { rooms: [] }), q === "locate" && A(null, { located: Date.now() }), q === "set_rooms" && A(null, { rooms: K.rooms })), z === "valve") {
      const W = q === "open_valve" || q === "toggle" && Y.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && A(W ? "open" : "closed");
    }
    if (z === "alarm_control_panel") {
      q === "alarm_disarm" && (v = null, A("disarmed", { changed_by: "Matt" }));
      const W = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      W && (v = { mode: W, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function J(z) {
    const q = (z == null ? void 0 : z.states) || {}, K = (z == null ? void 0 : z.entities) || {}, F = (z == null ? void 0 : z.devices) || {}, Y = (k) => {
      var re;
      const T = K[k];
      return T && (T.area_id || T.device_id && ((re = F[T.device_id]) == null ? void 0 : re.area_id)) || null;
    }, ae = (k) => {
      const T = K[k];
      return q[k] && q[k].state !== "unavailable" && !(T != null && T.hidden) && !(T != null && T.entity_category);
    }, A = {};
    Object.keys(q).forEach((k) => {
      const T = Y(k);
      T && ae(k) && (A[T] || (A[T] = [])).push(k);
    });
    const W = { ...q, ...s }, fe = (k) => {
      var T, re;
      return (re = (T = W[k]) == null ? void 0 : T.attributes) == null ? void 0 : re.device_class;
    }, Te = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], g = Object.keys(q).filter((k) => k.startsWith("vacuum.") && ae(k)), ke = Object.values((z == null ? void 0 : z.areas) || {}).filter((k) => !Lu.has(k.area_id)).map((k) => {
      const T = k.area_id, re = A[T] || [], $ = (_e) => re.filter((ot) => ot.startsWith(_e + ".")), ee = (_e) => $("sensor").filter((ot) => fe(ot) === _e), oe = (_e) => Object.keys(s).filter((ot) => o[ot] === T && _e(ot)), de = (_e, ot) => _e.length ? _e : oe(ot), Pe = de(ee("temperature"), (_e) => _e.endsWith(T + "_temperature")), tt = de(ee("humidity"), (_e) => _e.endsWith(T + "_humidity")), Bt = ee("power").filter((_e) => /^(W|kW)$/.test(W[_e].attributes.unit_of_measurement || "")), xt = $("binary_sensor").filter((_e) => fe(_e) === "moisture"), pa = de($("plant"), (_e) => _e.startsWith("plant.")).map((_e) => ({ id: _e, readings: oe((ot) => ot.startsWith("sensor." + _e.split(".")[1] + "_")) })), Ma = [...$("binary_sensor").filter((_e) => Te.includes(fe(_e))), ...oe((_e) => _e.startsWith("binary_sensor."))];
      return {
        id: T,
        name: k.name,
        icon: k.icon,
        readings: [...Pe.slice(0, 1), ...tt.slice(0, 1), ...xt],
        power: Bt.length ? Bt.reduce((_e, ot) => _e + Number(W[ot].state) * (W[ot].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: $("switch"),
        lights: $("light"),
        actions: [...$("light"), ...de($("climate"), (_e) => _e.startsWith("climate.")), ...de($("cover"), (_e) => _e.startsWith("cover.")), ...de($("humidifier"), (_e) => _e.startsWith("humidifier.")), ...de($("valve"), (_e) => _e.startsWith("valve.")), ...$("media_player"), ...$("vacuum"), ...g.length ? [] : oe((_e) => _e.startsWith("vacuum."))],
        solar: oe((_e) => _e.includes("_solar_")),
        plants: pa,
        openings: Ma,
        alerts: [...xt, ...Ma].filter((_e) => {
          var ot;
          return ((ot = W[_e]) == null ? void 0 : ot.state) === "on";
        })
      };
    }).filter((k) => k.readings.length || k.plugs.length || k.actions.length || k.solar.length || k.plants.length), Ce = Object.keys(q).find((k) => /^sensor\..*(p1_meter_power|grid_power)$/.test(k) && q[k].state !== "unavailable") || null, We = (k) => Object.keys(q).filter((T) => T.startsWith(k + ".") && ae(T)), b = We("alarm_control_panel"), M = g.length ? g : ["vacuum." + Qt + "robot"];
    return {
      states: W,
      rooms: ke,
      grid: Ce,
      vacuums: M,
      homeVacuums: M.filter((k) => !ke.some((T) => T.actions.includes(k))),
      security: {
        alarms: b.length ? b : ["alarm_control_panel." + Qt + "house"],
        locks: We("lock"),
        openings: [...Object.keys(s).filter((k) => k.startsWith("binary_sensor.")), "sensor." + Qt + "doorbell"]
      }
    };
  }
  return { model: J, call: j, stop() {
    clearInterval(N), clearInterval(B);
  } };
}
const no = (n) => n < 0 ? 0 : n > 1 ? 1 : n, xl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(o.slice(u, u + 2), 16) || 0);
}, Du = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), yd = {}, ua = (n, s, o) => {
  const u = n + s + o;
  return yd[u] || (yd[u] = Du(xl(n).map((m, h) => m + (xl(s)[h] - m) * o)));
}, kd = {}, us = (n) => kd[n] || (kd[n] = xl(n));
function Ru(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [ua(s.clear[0], s.cloudy[0], 0.12), ua(s.clear[1], s.cloudy[1], 0.12)], s.storm = [ua(s.rain[0], "#000000", 0.22), ua(s.rain[1], "#000000", 0.22)], s;
}
const Nu = [
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
], to = (n, s) => (Nu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, sc = 1, lc = 2, dc = 3, cc = 4, Oi = 5, ms = 6, yl = 7, uc = 8, Md = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), Bu = (n, s, o) => {
  let u = !1;
  for (let m = 0, h = n.length - 1; m < n.length; h = m++) {
    const w = n[m], L = n[h];
    w[1] > o != L[1] > o && s < (L[0] - w[0]) * (o - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function Pu(n, s, o, u, { oneBit: m, ink: h, paper: w, snowInk: L }) {
  const v = new Uint8ClampedArray(o * u * 4), I = us(h), se = us(w);
  for (let ne = 0; ne < u; ne++) for (let N = 0; N < o; N++) {
    const B = ne * o + N, j = s[B];
    if (n[B] == null) continue;
    let J = us(n[B]);
    if (m) {
      let z;
      j === cc || j === uc ? z = !0 : j === Oi ? z = L : j === yl || j === ms ? z = !1 : z = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= to(N, ne), (j === sc || j === lc || j === dc || j === ms) && (N > 0 && s[B - 1] !== j || N < o - 1 && s[B + 1] !== j || ne > 0 && s[B - o] !== j || ne < u - 1 && s[B + o] !== j) && (z = !0), J = z ? I : se;
    }
    v[B * 4] = J[0], v[B * 4 + 1] = J[1], v[B * 4 + 2] = J[2], v[B * 4 + 3] = 255;
  }
  return { w: o, h: u, data: v };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (n) => gs(n, !1).split("/")[0], tl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zu = [".##", "##.", ".#.", "#.."];
function pc(n, { width: s, height: o, colors: u, wave: m = 0.38, soft: h = 6, glow: w = 0.6, columns: L = 6 }) {
  const v = { ...oo, dawn: "#e5a77e", ...u }, I = Ru(v), se = s, ne = o, N = se / L, B = N / 2, j = Math.PI * 2, J = n.length ? n : [{ cond: "cloudy", night: !1 }], z = [...Array(L * 2)].map((Y, ae) => {
    const A = J[Math.min(ae, J.length - 1)], W = Hu(A.cond), fe = ae % 2 === 1;
    return { cond: A.cond, k: W, night: fe, sky: I[W][fe ? 1 : 0], cover: Iu[W] };
  }), q = (Y) => ne * (0.5 - m * Math.cos(j * (Y / N - 0.25)));
  return { C: v, S: z, W: se, H: ne, cw: N, sw: B, TAU: j, yb: q, side: (Y, ae, A) => {
    const W = (Y ? q(ae) - A : A - q(ae)) / Math.max(3, h * 1.4) + 0.5;
    return W <= 0 ? 0 : W >= 1 ? 1 : W;
  }, glowAt: (Y) => {
    const ae = ((Y / N - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(L - 1, Math.round(Y / N - 0.25))), W = Math.max(0, Math.min(L - 1, Math.round(Y / N - 0.75))), fe = 1 - (z[2 * A].cover + z[2 * W + 1].cover) / 2, Te = Math.sin(Math.PI * Math.min(1, Math.max(0, q(Y) / ne)));
    return { c: ae < 0.5 ? v.dusk : v.dawn, a: w * (0.2 + 0.8 * fe) * Te * Te };
  }, soft: h, tw: N * 0.3, sy: ne / 90 };
}
function mc(n, { clock: s = 0, ambient: o = !1, seed: u = 1 }) {
  const { S: m, sw: h, side: w, C: L, TAU: v, sy: I } = n, se = s, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((N, B) => {
    const j = tl(u * 977 + B * 131 + 7), J = (B + 0.5) * h, z = N.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[N.k] : 0;
    for (let q = 0; q < z; q++) {
      const K = J + (j() - 0.5) * h * 1.6, F = (6 + j() * 76) * I, Y = j() < 0.35, ae = 1.8 + j() * 1.6, A = w(!0, K, F) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(v * se / 2600 + q * 1.7 + B) : 1);
      A >= 0.03 && ne.stars.push({ x: K, y: F, big: Y, size: ae, o: A });
    }
    if (!N.night && (N.k === "clear" || N.k === "partly")) {
      const q = J + (j() - 0.5) * h * 0.3, K = Math.min(15, h * 0.29);
      ne.suns.push({ x: q, y: 32 * I, rad: K, halo: K * 2.8 * (o ? 1 + 0.07 * Math.sin(v * se / 3600 + B) : 1) });
    }
    if (N.night && (N.k === "clear" || N.k === "partly")) {
      const q = Math.min(0.78, h * 0.55 / 34), K = J - 23 * q + (j() - 0.5) * h * 0.2;
      ne.moons.push({ x: K + 23 * q, y: (4 + (o ? 0.8 * Math.sin(v * se / 5200 + B) : 0)) * I + 23 * q, d: 46 * q });
    }
  }), m.forEach((N, B) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[N.k];
    if (!j) return;
    const J = tl(u * 577 + B * 71 + 3), z = (B + 0.5) * h, q = N.k === "rain" || N.k === "storm" || N.night ? L.cloudNight : L.cloudDay, K = N.night ? 0.82 : N.k === "storm" ? 0.75 : 1;
    for (let F = 0; F < j; F++) {
      const Y = h / 46 * (N.k === "partly" ? 0.85 : 0.75 + J() * 0.55), ae = z + (N.k === "partly" ? h * 0.12 : (J() - 0.5) * h * 1.05), A = (N.k === "partly" ? 40 : 6 + J() * 26) * I, W = o ? 2.5 * Math.sin(v * se / 9e3 + B * 1.3 + F * 2.1) : 0, fe = o ? 0.9 * Math.sin(v * se / 6100 + B + F) : 0;
      ne.clouds.push({ x: ae - 23 * Y + W, y: A - 15.33 * Y + fe, w: 46 * Y, h: 30.66 * Y, fill: q, o: K * (j > 1 && F === 0 ? 0.85 : 1) });
    }
  }), m.forEach((N, B) => {
    const j = tl(u * 313 + B * 29 + 11), J = (B + 0.5) * h, z = N.cond === "pouring" ? 16 : N.cond === "rainy" || N.cond === "hail" ? 9 : N.cond === "lightning-rainy" ? 12 : N.cond === "snowy-rainy" ? 5 : 0;
    for (let K = 0; K < z; K++) {
      let F = J + (j() - 0.5) * h * 1.05, Y = 44 + j() * 36, ae = 1;
      if (o) {
        const W = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (W - (Y - 44)), Y = 44 + W, ae = Math.min(1, W / 6, (36 - W) / 6);
      }
      Y *= I;
      const A = w(N.night, F, Y) * ae;
      A >= 0.05 && ne.drops.push({ x: F, y: Y, o: A });
    }
    const q = N.cond === "snowy" ? 11 : N.cond === "snowy-rainy" ? 6 : 0;
    for (let K = 0; K < q; K++) {
      let F = J + (j() - 0.5) * h * 1.05, Y = 40 + j() * 44, ae = 1;
      if (o) {
        const W = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + W, F += 1.6 * Math.sin(v * se / 2800 + K * 1.9 + B), ae = Math.min(1, W / 6, (44 - W) / 6);
      }
      Y *= I;
      const A = w(N.night, F, Y) * ae;
      A >= 0.05 && ne.flakes.push({ x: F, y: Y, o: A });
    }
    if (N.k === "fog") {
      const K = N.night ? "#c8ccd6" : "#ffffff", F = N.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(v * se / 8e3 + B) : 0;
      for (let ae = 0; ae < 4; ae++) ne.fogs.push({ x: J - h * 0.75 + ae % 2 * h * 0.18 + (ae % 2 ? Y : -Y), y: (30 + ae * 13) * I, w: h * 1.3, c: K, a: F });
    }
    if (N.k === "storm") {
      const K = (se / 3400 + B * 0.37) % 1;
      ne.bolts.push({ x: J + (j() - 0.5) * h * 0.3 - 5, y: 36 * I, o: o && !(K < 0.05 || K > 0.09 && K < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function ju(n, s, o, u, m, h, w, L) {
  const { S: v, C: I, cw: se, yb: ne, glowAt: N, soft: B, tw: j, sy: J } = n, z = new Array(o * u), q = new Uint8Array(o * u), K = new Uint8Array(o * u), F = (b, M, k, T, re) => {
    k == null || b < 0 || M < 0 || b >= o || M >= u || (T >= 1 || T > to(b + 5, M + 3)) && (z[M * o + b] = k, q[M * o + b] = re);
  }, Y = (b, M, k, T) => {
    for (let re = Math.max(0, Math.floor(M - k) - 1); re <= Math.min(u - 1, M + k + 1); re++) for (let $ = Math.max(0, Math.floor(b - k) - 1); $ <= Math.min(o - 1, b + k + 1); $++) T($, re, $ + 0.5 - b, re + 0.5 - M);
  }, ae = (b, M, k) => {
    for (let re = 0; re < b.length - 1; re++) {
      const $ = (re + M) * se;
      if (k < $ - j / 2) return [b[re], b[re], 0];
      if (k <= $ + j / 2) return [b[re], b[re + 1], (k - $ + j / 2) / j];
    }
    const T = b[b.length - 1];
    return [T, T, 0];
  }, A = v.filter((b) => !b.night).map((b) => b.sky), W = v.filter((b) => b.night).map((b) => b.sky), fe = B / h, Te = 16 * J / h;
  for (let b = 0; b < o; b++) {
    const M = (b + 0.5) * m, k = ne(M) / h, T = ae(A, 0.75, M), re = ae(W, 1.25, M), $ = N(M);
    for (let ee = 0; ee < u; ee++) {
      const oe = to(b, ee), de = ee + 0.5 - k, Pe = (fe > 0.01 ? no(0.5 + de / fe) : de > 0 ? 1 : 0) > oe;
      let tt = Pe ? T[2] > oe ? T[1] : T[0] : re[2] > oe ? re[1] : re[0];
      (Pe ? no(((ee + 0.5) / u - 0.45) / 0.55) * 0.7 : no(1 - (ee + 0.5) / (u * 0.55)) * 0.7) > to(b + 2, ee + 5) && (tt = Pe ? ua(tt, "#ffffff", 0.18) : ua(tt, "#000000", 0.25)), Pe && de >= 0 && de < Te && $.a * 1.3 * (1 - de / Te) > to(b + 6, ee + 1) && (tt = $.c), z[ee * o + b] = tt, K[ee * o + b] = Pe ? 0 : 1;
    }
  }
  const g = ua(I.sun, "#ffffff", 0.55), ke = ua(I.moon, "#ffffff", 0.6);
  s.stars.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    if (M < 0 || k < 0 || M >= o || k >= u || !K[k * o + M] || b.o < 0.15) return;
    const T = b.o > 0.45 ? I.star : ua(I.star, z[k * o + M], 0.5), re = b.big && b.o > 0.6 ? Math.floor(b.size / m) : 0;
    F(M, k, T, 1, yl);
    for (let $ = 1; $ <= re; $++) [[M - $, k], [M + $, k], [M, k - $], [M, k + $]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < o && ee[1] < u && K[ee[1] * o + ee[0]] && F(ee[0], ee[1], T, 1, yl);
    });
  }), s.suns.forEach((b) => {
    const M = Math.max(1.5, b.rad / m), k = b.x / m, T = b.y / h, re = b.halo / m * 0.85;
    if (Y(k, T, re, ($, ee, oe, de) => {
      const Pe = Math.sqrt(oe * oe + de * de);
      Pe > M && Pe < re && !K[ee * o + $] && F($, ee, g, 0.3 * (1 - (Pe - M) / (re - M)), 0);
    }), L) {
      const $ = Math.floor(w / 500) % 2, ee = Math.max(1, M * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === $) for (let de = M + 1.2; de < M + 1.2 + ee; de += 0.7) F(Math.floor(k + Math.cos(oe * Math.PI / 4) * de), Math.floor(T + Math.sin(oe * Math.PI / 4) * de), I.sun, 1, uc);
    }
    Y(k, T, M, ($, ee, oe, de) => {
      oe * oe + de * de <= M * M && F($, ee, no(((de / M + 1) / 2 - 0.6) / 0.4) > to($, ee) ? I.sunEdge : I.sun, 1, sc);
    });
  }), s.moons.forEach((b) => {
    const M = Math.max(1.5, b.d * 0.37 / m), k = b.x / m, T = b.y / h, re = k + 0.547 * M, $ = T - 0.503 * M, ee = 0.82 * M;
    Y(k, T, M, (oe, de, Pe, tt) => {
      if (Pe * Pe + tt * tt > M * M) return;
      const Bt = oe + 0.5 - re, xt = de + 0.5 - $;
      Bt * Bt + xt * xt > ee * ee && F(oe, de, no((tt + M) / (2 * M) * 1.1 - 0.1) > to(oe, de) ? I.moon : ke, 1, lc);
    });
  }), s.clouds.forEach((b) => {
    const M = Math.max(3, b.w / m), k = M * 0.6665, T = b.x / m, re = b.y / h, $ = ua(b.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(re) - 1); ee <= Math.min(u - 1, re + k + 1); ee++) for (let oe = Math.max(0, Math.floor(T) - 1); oe <= Math.min(o - 1, T + M + 1); oe++) {
      const de = (oe + 0.5 - T) / M, Pe = (ee + 0.5 - re) / M;
      Md(de, Pe) && F(oe, ee, !Md(de, Pe + 1 / M) || no((Pe - 0.42) / 0.25) * 0.8 > to(oe, ee) ? $ : b.fill, b.o, dc);
    }
  }), s.fogs.forEach((b) => {
    const M = Math.floor(b.y / h), k = Math.max(M, Math.floor((b.y + 6 * J) / h) - 1), T = Math.floor(b.x / m), re = Math.floor((b.x + b.w) / m);
    for (let $ = M; $ <= k; $++) for (let ee = T; ee <= re; ee++) {
      const oe = (ee - T) / Math.max(1, re - T);
      F(ee, $, b.c, b.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / h));
  s.drops.forEach((b) => {
    const M = b.x / m, k = Math.floor(b.y / h);
    for (let T = 0; T < Ce; T++) F(Math.floor(M - 0.208 * T * h / m), k + T, I.rain, b.o, cc);
  });
  const We = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    F(M, k, I.snow, b.o, Oi);
    for (let T = 1; T <= We; T++)
      F(M - T, k, I.snow, b.o, Oi), F(M + T, k, I.snow, b.o, Oi), F(M, k - T, I.snow, b.o, Oi), F(M, k + T, I.snow, b.o, Oi);
  }), s.bolts.forEach((b) => {
    if (m <= 3.5)
      for (let M = Math.floor(b.y / h); M <= (b.y + 24) / h; M++) for (let k = Math.floor(b.x / m); k <= (b.x + 11) / m; k++)
        Bu(Vu, (k + 0.5) * m - b.x, (M + 0.5) * h - b.y) && F(k, M, I.sun, 1, ms);
    else {
      const M = Math.round(b.x / m), k = Math.round(b.y / h);
      zu.forEach((T, re) => T.split("").forEach(($, ee) => {
        $ === "#" && F(M + ee, k + re, I.sun, 1, ms);
      }));
    }
  }), { col: z, ids: q };
}
function Gu(n, s) {
  const o = s.px, u = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), h = s.width / u, w = s.height / m, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (B) => {
    const j = pc(B, s);
    return ju(j, mc(j, { clock: L, ambient: s.ambient, seed: s.seed }), u, m, h, w, L, s.ambient);
  }, I = v(n), se = s.reveal == null ? 1 : no(s.reveal);
  let ne = I.col, N = I.ids;
  if (se < 1) {
    const B = s.prev ? v(s.prev) : null, j = se * (u + 12);
    ne = new Array(u * m), N = new Uint8Array(u * m);
    for (let J = 0; J < u * m; J++) {
      const z = J % u, q = J / u | 0;
      (s.reduce ? se : no((j - z) / 12)) > to(z, q) ? (ne[J] = I.col[J], N[J] = I.ids[J]) : B ? (ne[J] = B.col[J], N[J] = B.ids[J]) : (ne[J] = null, N[J] = 255);
    }
  }
  return Pu(ne, N, u, m, { oneBit: s.oneBit, ink: s.ink || "#26221e", paper: s.paper || "#fbf9f6", snowInk: !1 });
}
function Uu(n, s, o) {
  const u = o.width, m = o.height, h = o.reveal == null ? 1 : no(o.reveal), w = (N, B) => {
    const j = pc(B, o);
    Yu(N, j, mc(j, o));
  };
  if (n.clearRect(0, 0, u, m), h >= 1) {
    w(n, s);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = h, w(n, s), n.restore();
    return;
  }
  const L = n.canvas, v = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (v.width !== L.width || v.height !== L.height) && (v.width = L.width, v.height = L.height);
  const I = v.getContext("2d");
  I.setTransform(n.getTransform()), I.clearRect(0, 0, u, m), w(I, s);
  const se = h * (u + 64) - 64, ne = I.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), I.globalCompositeOperation = "destination-in", I.fillStyle = ne, I.fillRect(0, 0, u, m), I.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Yu(n, s, o) {
  const { W: u, H: m, S: h, C: w, cw: L, yb: v, glowAt: I, soft: se, tw: ne, sy: N } = s, B = (g, ke) => {
    const Ce = us(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, j = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let We = 0; We < g.length - 1; We++) {
      const b = (We + ke) * L, M = (b - ne / 2) / u, k = (b + ne / 2) / u;
      M > 0 && M < 1 && Ce.addColorStop(M, g[We]), k > 0 && k < 1 && Ce.addColorStop(k, g[We + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, J = Math.max(24, Math.ceil(u / 4)), z = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= J; Ce++) {
      const We = u * Ce / J, b = g == null ? 0 : v(We) + g;
      Ce ? n.lineTo(We, b) : n.moveTo(We, b);
    }
    for (let Ce = J; Ce >= 0; Ce--) {
      const We = u * Ce / J;
      n.lineTo(We, v(We) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = j(h.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, m);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = I(u * g / 64);
    q.addColorStop(g / 64, B(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, z(g * 2 * N, (g + 1) * 2 * N);
  n.fillStyle = j(h.filter((g) => g.night).map((g) => g.sky), 1.25);
  const K = Math.max(0.5, se), F = 6;
  n.globalAlpha = 1, z(null, -K);
  for (let g = 0; g < F; g++)
    n.globalAlpha = 1 - (g + 0.5) / F, z(-K + 2 * K * g / F, -K + 2 * K * (g + 1) / F);
  n.globalAlpha = 1;
  const Y = new Path2D(Wu), ae = new Path2D(Ou), A = new Path2D(Fu), W = new Path2D(qu);
  n.fillStyle = w.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Y), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const fe = ua(w.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, B(fe, 0.42)), ke.addColorStop(0.7, B(fe, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Te = ua(w.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Te), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ae), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), o.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, B(g.c, 0)), ke.addColorStop(0.25, B(g.c, g.a)), ke.addColorStop(0.75, B(g.c, g.a)), ke.addColorStop(1, B(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * N);
  }), n.fillStyle = w.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
const Zu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Hi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, as = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, nl = (n, s) => '<path class="' + s + '" d="' + n + '"/>', Ku = (n, s) => ' style="animation-delay:-' + Math.round(n * 137 % s) + 'ms"', sa = (n, s, o, u) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ku(n, 2400) + ' d="M' + n + " " + (s - o) + "L" + (n + m) + " " + (s - m) + "L" + (n + o) + " " + s + "L" + (n + m) + " " + (s + m) + "L" + n + " " + (s + o) + "L" + (n - m) + " " + (s + m) + "L" + (n - o) + " " + s + "L" + (n - m) + " " + (s - m) + 'Z"/>';
}, Cd = ([n, s, o], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + s + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $u = (n, s) => s ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ju = (n) => (n ? ["29.35", "43.04", "56.74"].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Xu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, o], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + s + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Qu(n, s, o, u) {
  return n === "clear" ? s ? Cd(o ? as.l : as.s, u) + (o ? sa(70, 20, 5.83, 1) + sa(78.33, 41.67, 3.75, 0.8) + sa(60, 71.67, 3.33, 0.6) : sa(42, 12, 3.5, 1) + sa(47, 25, 2.25, 0.8) + sa(36, 43, 2, 0.6)) : $u(u, o) : n === "partly" ? (s ? Cd(o ? as.lp : as.sp, u) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + nl(o ? Hi.lp : Hi.sp, s ? "wbCloudLight" : "wbBright") + (s ? o ? sa(73.33, 16.67, 4.17, 0.9) : sa(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? nl(o ? Hi.lc : Hi.s, s ? "wbCloudLight" : "wbBright") + (s ? o ? sa(15, 15, 3.75, 0.8) + sa(76.67, 13.33, 2.92, 0.6) : sa(9, 9, 2.25, 0.8) + sa(46, 8, 1.75, 0.6) : "") : nl(o ? Hi.lr : Hi.s, "wbCloudLight") + (n === "rain" ? Ju(o) : Xu(o));
}
function ep(n, s, o, u) {
  let m = Zu(n);
  const h = m === "night" || !!o;
  m === "night" && (m = "clear");
  const w = s ? 90 : 54;
  return { k: m, night: h, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Qu(m, h, s, u) + "</svg>" };
}
const Ba = 6e4, Ra = 36e5, oi = 864e5, Cr = 1440, tp = 6, np = 10 * Ba, os = 3, al = 20, ap = 3, op = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), ip = 30 * Ba, rp = 7, sp = 3, Sd = 1, lp = Ba, dp = 15 * Ba, On = {
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
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, et = {
  now: "Now",
  today: "Today",
  tomorrow: "Tomorrow",
  back: "Back",
  nextHours: "Next hours",
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
  metrics: { humidity: "Humidity", pressure: "Pressure", uv_index: "UV index", precipitation: "Precipitation", compared_to_average: "Compared to average" },
  dewPoint: "Dew point {dew_point}",
  pressure: { rising: "Rising over 3 hours", falling: "Falling over 3 hours", steady: "Steady over 3 hours" },
  uvLevel: { low: "Low", moderate: "Moderate", high: "High", very_high: "Very high", extreme: "Extreme" },
  uvPeak: "{level} · up to {uv_index} at {time}",
  rainExpected: "{amount} in the next 24 hours",
  rainLast24h: "Last 24 hours",
  average: { above: "above the average high", below: "below the average high", same: "same as the average high" },
  highsLastDays: "Highs of the last {days} days",
  openPage: "Open the weather page",
  todayVsAverage: "Today {today} · average {average}",
  airQuality: "Air quality",
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, cp = {
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
}, up = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], pp = Object.keys(et.phases), is = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, hc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], rs = 100, Td = "µg/m³", hp = "weather_alerts.air_quality_pollen", Ld = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bp = { daily: 1, hourly: 2 }, Oe = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), la = (n, s) => n.replace(/\{(\w+)\}/g, (o, u) => s[u] ?? ""), Wi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, xn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), _d = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new WeakMap(), xp = (n) => {
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
function un(n, s, o) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const m = (s == null ? void 0 : s.number_format) === "none", h = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : xp(s), L = JSON.stringify([w, h]);
  let v = _d.get(L);
  if (!v) {
    try {
      v = new Intl.NumberFormat(w, h);
    } catch {
      v = new Intl.NumberFormat(void 0, h);
    }
    _d.set(L, v);
  }
  return v.format(u);
}
const Al = (n) => {
  var s;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.language) || (n == null ? void 0 : n.language) || void 0;
};
function yp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (ol.has(n)) return ol.get(n);
  const s = n.time_format, o = s === "language" || s === "system" || !s ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(s === "language" ? n.language : void 0).includes("10") : s === "12";
  return ol.set(n, o), o;
}
const fc = (n) => {
  var s, o;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function gc(n, s) {
  const o = JSON.stringify([n, s]);
  let u = Ad.get(o);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, s);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...s, timeZone: void 0 });
    }
    Ad.set(o, u);
  }
  return u;
}
const Fi = (n, s) => gc(Al(s), { hour: "numeric", minute: "2-digit", hourCycle: yp(s == null ? void 0 : s.locale) ? "h12" : "h23", timeZone: fc(s) }).format(n), Ed = (n, s) => gc(Al(s), { weekday: "short", timeZone: fc(s) }).format(n), kp = (n, s) => n.toLocaleDateString(Al(s), { weekday: "narrow" }), _n = (n, s) => xn(s) ? un(Math.round(Number(s)), n.locale) + "°" : "–", qi = (n) => {
  const s = new Date(n);
  return s.setHours(0, 0, 0, 0), s;
}, yr = (n, s) => n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth() && n.getDate() === s.getDate(), Wn = Math.PI / 180, Mp = 2440588, Cp = 2451545, hs = Wn * 23.4397, Sp = 149598e3, Tp = -0.833 * Wn, Lp = 0.133 * Wn, Dd = 5 * Ba, vc = (n) => n.getTime() / oi - 0.5 + Mp - Cp, bc = (n, s) => Math.atan2(Math.sin(n) * Math.cos(hs) - Math.tan(s) * Math.sin(hs), Math.cos(n)), wc = (n, s) => Math.asin(Math.sin(s) * Math.cos(hs) + Math.cos(s) * Math.sin(hs) * Math.sin(n)), _p = (n, s) => Wn * (280.16 + 360.9856235 * n) - s, Ap = (n, s, o) => Math.asin(Math.sin(s) * Math.sin(o) + Math.cos(s) * Math.cos(o) * Math.cos(n));
function xc(n) {
  const s = Wn * (357.5291 + 0.98560028 * n), o = Wn * (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)), u = s + o + Wn * 102.9372 + Math.PI;
  return { ra: bc(u, 0), dec: wc(u, 0), dist: Sp };
}
function yc(n) {
  const s = Wn * (218.316 + 13.176396 * n), o = Wn * (134.963 + 13.064993 * n), u = Wn * (93.272 + 13.22935 * n), m = s + Wn * 6.289 * Math.sin(o), h = Wn * 5.128 * Math.sin(u);
  return { ra: bc(m, h), dec: wc(m, h), dist: 385001 - 20905 * Math.cos(o) };
}
const kc = (n, s, o, u) => {
  const m = vc(s), h = n(m);
  return Ap(_p(m, Wn * -u) - h.ra, Wn * o, h.dec);
}, El = (n, s, o) => kc(xc, n, s, o), Ep = (n, s, o) => kc(yc, n, s, o);
function Mc(n, s, o, u) {
  const m = {};
  let h = o.getTime(), w = n(o) - s;
  for (let L = h + Dd; L <= u.getTime(); L += Dd) {
    const v = n(new Date(L)) - s;
    if (w < 0 != v < 0) {
      const I = new Date(h + (L - h) * w / (w - v));
      v > 0 ? m.rise ?? (m.rise = I) : m.set ?? (m.set = I);
    }
    h = L, w = v;
  }
  return m;
}
const Cc = (n) => {
  const s = qi(n);
  return [s, new Date(s.getTime() + oi)];
}, Dp = (n, s, o) => Mc((u) => El(u, s, o), Tp, ...Cc(n)), Rp = (n, s, o) => Mc((u) => Ep(u, s, o), Lp, ...Cc(n));
function Np(n) {
  const s = vc(n), o = xc(s), u = yc(s), m = Math.acos(Math.sin(o.dec) * Math.sin(u.dec) + Math.cos(o.dec) * Math.cos(u.dec) * Math.cos(o.ra - u.ra)), h = Math.atan2(o.dist * Math.sin(m), u.dist - o.dist * Math.cos(m)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - u.ra), Math.sin(o.dec) * Math.cos(u.dec) - Math.cos(o.dec) * Math.sin(u.dec) * Math.cos(o.ra - u.ra));
  return { fraction: (1 + Math.cos(h)) / 2, phase: 0.5 + 0.5 * h * (w < 0 ? -1 : 1) / Math.PI };
}
const Bp = (n) => {
  const s = n * 28;
  return s < 0.5 || s > 27.5 ? "new_moon" : s < 6.5 ? "waxing_crescent" : s < 7.5 ? "first_quarter" : s < 13.5 ? "waxing_gibbous" : s < 14.5 ? "full_moon" : s < 20.5 ? "waning_gibbous" : s < 21.5 ? "last_quarter" : "waning_crescent";
}, fs = (n) => {
  const s = n == null ? void 0 : n.config;
  return s && xn(s.latitude) && xn(s.longitude) ? { lat: Number(s.latitude), lon: Number(s.longitude) } : null;
};
function Rd(n, s) {
  var I, se, ne;
  const o = fs(n), u = o ? Dp(s, o.lat, o.lon) : {}, m = (I = n == null ? void 0 : n.states) == null ? void 0 : I["sun.sun"], h = qi(s).getTime(), w = (N) => {
    const B = N ? new Date(N) : null;
    return B && Number.isFinite(B.getTime()) && qi(B).getTime() === h ? B : null;
  }, L = w((se = m == null ? void 0 : m.attributes) == null ? void 0 : se.next_rising), v = w((ne = m == null ? void 0 : m.attributes) == null ? void 0 : ne.next_setting);
  return L && (u.rise = L), v && (u.set = v), u;
}
function Pp(n) {
  var u;
  const s = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((s == null ? void 0 : s.state) === "below_horizon" || (s == null ? void 0 : s.state) === "above_horizon") return s.state === "below_horizon";
  const o = fs(n);
  return o ? El(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Sr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", vs = (n, s) => {
  var u;
  const o = (u = n.entities) == null ? void 0 : u[s];
  return !o || !o.hidden && !o.entity_category;
}, da = (n, s, o) => {
  var u, m;
  for (const h of s) {
    const w = (u = n.states) == null ? void 0 : u[h];
    if (!Sr(w)) continue;
    const L = (m = w.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: w, value: L };
  }
}, Ip = (n, s) => s.map((o) => {
  var u;
  return (u = n.states) == null ? void 0 : u[o];
}).find(Sr), Hp = (n, s, o) => s.map((u) => {
  var m;
  return (m = n.states) == null ? void 0 : m[u];
}).find((u) => {
  var m;
  return Sr(u) && (((m = u.attributes) == null ? void 0 : m.supported_features) == null || Number(u.attributes.supported_features) & bp[o]);
});
function Mr(n, s, o) {
  var h, w, L, v;
  const u = ((w = (h = n.config) == null ? void 0 : h.unit_system) == null ? void 0 : w.length) || "", m = (s == null ? void 0 : s.attributes) || {};
  switch (o) {
    case "precipitation":
      return m.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return m.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return m.wind_speed_unit || u + "/h";
    default:
      return m.temperature_unit || ((v = (L = n.config) == null ? void 0 : L.unit_system) == null ? void 0 : v.temperature) || "";
  }
}
function kl(n, s, o, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...h] = n.formatEntityAttributeValueToParts(s, o, u).map((w) => w.value);
      return { number: m, unit: h.join("").trim() };
    }
  } catch {
  }
  return { number: un(u, n.locale), unit: Mr(n, s, o) };
}
function Fp(n, s, o, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(s, o, u);
  } catch {
  }
  const m = kl(n, s, o, u);
  return (m.number + " " + m.unit).trim();
}
function ss(n, s) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(s);
  } catch {
  }
  const o = (u = s.attributes) == null ? void 0 : u.unit_of_measurement;
  return cp[s.state] || (o && xn(s.state) ? un(s.state, n.locale) + " " + o : s.state);
}
function Nd(n, s) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(s, { type: "entity" });
  } catch {
  }
  return ((o = s.attributes) == null ? void 0 : o.friendly_name) || s.entity_id;
}
const Op = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Wp = (n) => hc.find(([, s]) => n <= s)[0];
function qp(n, s) {
  if (s === "Beaufort") return Math.round(n);
  const o = s ? fp[s] : void 0;
  if (o === void 0) return;
  const u = gp.findIndex((m) => n * o < m);
  return u === -1 ? 12 : u;
}
const Bd = (n, s) => {
  const o = s ? vp[s] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Pd = (n) => Object.keys(n.states || {}).find((s) => {
  var o, u;
  return s.startsWith("sensor.") && ((u = (o = n.entities) == null ? void 0 : o[s]) == null ? void 0 : u.platform) === "moon";
}), il = (n) => Object.values(n.states || {}).filter((s) => {
  var o, u;
  return s.entity_id.startsWith("sensor.") && ((o = s.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = s.attributes) == null ? void 0 : u.state_class) ?? "") && vs(n, s.entity_id);
}).map((s) => s.entity_id).sort()[0];
function Vp(n) {
  var o;
  const s = {};
  for (const [u, m] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      s[u] = m.categories;
      continue;
    }
    for (const [h, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) s[h] = w == null ? void 0 : w.categories;
  }
  return s;
}
const Sc = (n, s, o) => {
  var m, h, w;
  const u = (h = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : h.platform;
  return !!u && !!((w = s[u]) != null && w.includes(hp));
};
function zp(n, s) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var m;
    return u.entity_id.startsWith("sensor.") && Ld.includes(((m = u.attributes) == null ? void 0 : m.device_class) ?? "") && vs(n, u.entity_id) && Sc(n, s, u.entity_id);
  }).sort((u, m) => u.entity_id.localeCompare(m.entity_id)).forEach((u) => {
    o.has(u.attributes.device_class) || o.set(u.attributes.device_class, u.entity_id);
  }), Ld.map((u) => o.get(u)).filter(Boolean);
}
const jp = (n, s) => Object.values(n.states || {}).filter((o) => {
  var u, m;
  return o.entity_id.startsWith("sensor.") && vs(n, o.entity_id) && Sc(n, s, o.entity_id) && (((m = (u = n.entities) == null ? void 0 : u[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Id(n, s, o) {
  const u = Math.max(s - n, 1e-6), m = o[o.length - 1], h = o.find((I) => u / I <= 4) ?? m * Math.ceil(u / (4 * m)), w = Math.floor(n / h) * h;
  let L = Math.ceil(s / h) * h;
  L === w && (L = w + h);
  const v = [];
  for (let I = w; I <= L + h / 1e3; I += h) v.push(I);
  return { min: w, max: L, ticks: v };
}
const kr = (n, s, o) => {
  const u = (w) => [1, 3, 5].map((L) => parseInt(w.slice(L, L + 2), 16)), m = u(n), h = u(s);
  return "rgb(" + m.map((w, L) => Math.round(w + (h[L] - w) * o)).join(", ") + ")";
}, Gp = (n, s, o, u) => {
  const m = o * Math.abs(1 - 2 * u), h = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (s - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (s + o) + " A " + m + " " + o + " 0 0 " + h + " " + n + " " + (s - o) + " Z";
}, Lo = ({ icon: n, name: s, sub: o, visual: u, double: m, backdrop: h, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (h ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (h ? '<div class="wbBackdrop" aria-hidden="true">' + h + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Wi(n) + '</div><div class="wbText"><span class="wbName">' + Oe(s) + "</span>" + (o ? '<span class="wbSub">' + Oe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + u + "</div></div>", rl = (n, s) => '<div class="wbValue"><span class="wbNum">' + Oe(n) + "</span>" + (s ? '<span class="wbUnitV">' + Oe(s) + "</span>" : "") + "</div>";
function Up(n) {
  const s = n.max - n.min || 1, o = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / s * 100, u = (L) => L / Cr * 100 + "%", m = (L) => L.map((v) => v.t + "," + o(v.v)).join(" "), h = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + u(L.t) + '">' + Wi(L.rise ? On.sunsetUp : On.sunsetDown) + Oe(L.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + o(L) + '%">' + Oe(n.format(L)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Cr + ' 100" preserveAspectRatio="none">' + n.night.map(([L, v]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (v - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + Cr + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (h.length > 1 ? '<polygon class="wbDcArea" points="' + h[0].t + ",100 " + m(h) + " " + h[h.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(h) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + u(L.t + 12) + ";width:" + u(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + Oe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Oe(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + u(L.t) + '">' + Oe(L.label) + "</span>").join("") + "</div></div>", w;
}
function Yp(n, s) {
  const w = n.map((z) => z.value), L = Math.min(...w), v = Math.max(...w), I = v - L || 1, se = (z) => z / (n.length - 1) * 300, ne = (z) => 18 + (1 - (z - L) / I) * 84, N = n.map((z, q) => se(q) + "," + ne(z.value)).join(" "), B = w.indexOf(v), j = w.indexOf(L), J = (z) => z === 0 ? "start" : z === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + N + ' 300,102"></polygon><polyline class="wbLine" points="' + N + '" vector-effect="non-scaling-stroke"></polyline><text x="' + se(B) + '" y="' + (ne(v) - 6) + '" text-anchor="' + J(B) + '">' + Oe(s(v)) + '</text><text x="' + se(j) + '" y="' + (ne(L) + 14) + '" text-anchor="' + J(j) + '">' + Oe(s(L)) + '</text><text x="0" y="120" text-anchor="start">' + Oe(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Oe(n[n.length - 1].label) + "</text></svg>";
}
function Zp(n, s) {
  const h = n.map((ne) => ne.value).concat([]), w = Math.min(...h) - 2, L = Math.max(...h) + 1, v = L - w || 1, I = 300 / n.length, se = (ne) => (1 - (ne - w) / v) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ne, N) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (N * I + I * 0.2) + '" y="' + se(ne.value) + '" width="' + I * 0.6 + '" height="' + (104 - se(ne.value)) + '" rx="6"></rect><text x="' + (N * I + I / 2) + '" y="120" text-anchor="middle">' + Oe(ne.label) + "</text>").join("") + "</svg>";
}
const Kp = [
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
], $p = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Hd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Jp = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Xp = 0;
function Fd(n, { getHass: s, entityId: o, style: u = "bitmap", motion: m = !0, cards: h, onOpen: w } = {}) {
  var Xn, Wa;
  const L = "wb" + ++Xp + "-", v = document.createElement("div");
  v.className = "wb";
  const I = document.createElement("div");
  I.className = "wbBento", v.appendChild(I), n.replaceChildren(v);
  const se = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((S) => !h || h.includes(S)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, N = {};
  se.forEach((S) => {
    const E = document.createElement("div");
    E.className = "wbItem", E.dataset.card = S, E.dataset.size = ne[S] || "tile", E.hidden = !0, I.appendChild(E), N[S] = { el: E, html: null };
  });
  let B = !1, j = null, J = 0, z = -1, q = !1, K = null;
  const F = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Y = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ae = /* @__PURE__ */ new Date(), A = /* @__PURE__ */ new Date(), W = null;
  const fe = {}, Te = {}, g = (S) => {
    var E;
    return ((E = Te[S]) == null ? void 0 : E.forecast) ?? [];
  }, ke = (S, E) => {
    var H;
    return Te[E] ? (H = S.states) == null ? void 0 : H[Te[E].entityId] : void 0;
  };
  function Ce(S) {
    const E = fe[S];
    E && (E.unsub.then((H) => {
      typeof H == "function" && H();
    }).catch(() => {
    }), delete fe[S]), Te[S] && delete Te[S];
  }
  function We(S, E, H) {
    var ue;
    if (typeof ((ue = S.connection) == null ? void 0 : ue.subscribeMessage) != "function") return;
    const O = { entityId: H };
    try {
      O.unsub = Promise.resolve(S.connection.subscribeMessage((be) => {
        B || fe[E] !== O || (be != null && be.forecast ? Te[E] = { entityId: H, forecast: be.forecast } : delete Te[E], Ee());
      }, { type: "weather/subscribe_forecast", forecast_type: E, entity_id: H }));
    } catch (be) {
      O.unsub = Promise.reject(be);
    }
    O.unsub.catch(() => {
      fe[E] === O && delete fe[E];
    }), fe[E] = O;
  }
  function b(S, E) {
    var H;
    for (const O of ["daily", "hourly"]) {
      const ue = Hp(S, E, O);
      ((H = fe[O]) == null ? void 0 : H.entityId) !== (ue == null ? void 0 : ue.entity_id) && (Ce(O), ue && We(S, O, ue.entity_id));
    }
  }
  const M = (S, E, H, O = !1) => S.callWS({
    type: "history/history_during_period",
    start_time: H.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [E],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function k(S, E) {
    var me, xe, ce;
    const H = da(S, E, "pressure");
    if (!H) return;
    const O = H.stateObj.entity_id, ue = await M(S, O, new Date(Date.now() - 3 * Ra)), be = (ce = (xe = (me = ue == null ? void 0 : ue[O]) == null ? void 0 : me.find((De) => {
      var je;
      return typeof ((je = De.a) == null ? void 0 : je.pressure) == "number";
    })) == null ? void 0 : xe.a) == null ? void 0 : ce.pressure;
    Y.pressureHistory = typeof be == "number" ? { entityId: O, value: be } : void 0;
  }
  async function T(S, E) {
    var xe;
    const H = da(S, E, "temperature");
    if (!H) return;
    const O = H.stateObj.entity_id, ue = qi(/* @__PURE__ */ new Date()), be = await M(S, O, new Date(ue.getTime() - rp * oi)), me = /* @__PURE__ */ new Map();
    for (const ce of (be == null ? void 0 : be[O]) ?? []) {
      const De = (xe = ce.a) == null ? void 0 : xe.temperature, je = new Date((ce.lc ?? ce.lu) * 1e3);
      if (typeof De != "number" || je >= ue) continue;
      const Ye = je.toDateString();
      me.set(Ye, Math.max(me.get(Ye) ?? -1 / 0, De));
    }
    Y.temperatureHistory = { entityId: O, dailyHighs: [...me.values()], days: [...me.entries()].map(([ce, De]) => ({ date: new Date(ce), high: De })) };
  }
  async function re(S) {
    const E = il(S);
    if (!E) return;
    const H = await S.callWS({ type: "recorder/statistic_during_period", statistic_id: E, rolling_window: { duration: { hours: 24 } } });
    Y.rain = { entityId: E, change: (H == null ? void 0 : H.change) ?? void 0 };
  }
  function $() {
    const S = s == null ? void 0 : s();
    if (!S || B || typeof S.callWS != "function") return;
    const E = Pe(S);
    Y.lastFetch = Date.now(), [k(S, E), T(S, E), re(S)].forEach((H) => H.then(() => Ee(), () => {
    }));
  }
  async function ee() {
    const S = s == null ? void 0 : s();
    if (!S) return;
    const E = da(S, Pe(S), "temperature");
    if (!E) return;
    const H = E.stateObj.entity_id, O = qi(/* @__PURE__ */ new Date());
    try {
      const ue = await M(S, H, O), be = (me) => ((ue == null ? void 0 : ue[H]) ?? []).map((xe) => {
        var ce;
        return { time: xe.lu * 1e3, value: (ce = xe.a) == null ? void 0 : ce[me] };
      }).filter((xe) => typeof xe.value == "number");
      Y.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: be("temperature"), humidity: be("humidity") }, Ee();
    } catch {
    }
  }
  async function oe(S) {
    const E = s == null ? void 0 : s();
    if (E)
      try {
        const H = await M(E, S, new Date(Date.now() - 24 * Ra), !0), O = ((H == null ? void 0 : H[S]) ?? []).filter((be) => xn(be.s)), ue = Math.max(1, Math.ceil(O.length / 48));
        Y.aqHistory = { entityId: S, points: O.filter((be, me) => me % ue === 0).map((be) => ({ label: Fi(new Date(be.lu * 1e3), E), value: Number(be.s) })) }, Ee();
      } catch {
      }
  }
  function de(S) {
    Y.categories === void 0 && (Y.categories = null, Promise.resolve().then(() => S.callWS({ type: "integration/descriptions" })).then((E) => {
      Y.categories = Vp(E);
    }, () => {
      Y.categories = {};
    }).then(() => Ee()));
  }
  function Pe(S) {
    var H;
    const E = Object.keys(S.states || {}).filter((O) => O.startsWith("weather.") && vs(S, O)).sort();
    return o && ((H = S.states) != null && H[o]) ? [o, ...E.filter((O) => O !== o)] : E;
  }
  const tt = (S) => Y.categories ? { air: zp(S, Y.categories), pollen: jp(S, Y.categories) } : { air: [], pollen: [] };
  function Bt(S, E, H, O) {
    if (u === "smooth") {
      const ue = ep(S, E === 90, H, L + "g-" + O);
      return '<span class="wbWx wbS' + E + " wb" + ue.k[0].toUpperCase() + ue.k.slice(1) + (ue.night ? " wbNight" : "") + '" aria-hidden="true">' + ue.svg + "</span>";
    }
    return '<span class="wbWx wbS' + E + '" aria-hidden="true"><canvas data-wb-wx="' + Oe(gs(S, H)) + '" data-size="' + E + '"></canvas></span>';
  }
  const xt = () => g("daily").filter((S) => S.templow != null).slice(0, tp);
  function pa(S, E) {
    const H = new Date(E.datetime), O = /* @__PURE__ */ new Date();
    return yr(H, O) ? et.today : yr(H, new Date(O.getTime() + oi)) ? et.tomorrow : Ed(H, S);
  }
  const Ma = (S, E, H) => H === 0 ? pa(S, E) : Ed(new Date(E.datetime), S);
  function _e(S, E) {
    var je, Ye, qe, Re;
    const H = Ip(S, E);
    if (!H) return "";
    const O = xt(), ue = F.openDay !== void 0 ? O[F.openDay] : void 0, be = da(S, E, "temperature"), me = O[0], xe = me && yr(new Date(me.datetime), /* @__PURE__ */ new Date()), ce = ((Ye = (je = S.config) == null ? void 0 : je.unit_system) == null ? void 0 : Ye.temperature) || ((qe = H.attributes) == null ? void 0 : qe.temperature_unit) || "";
    let De = '<div class="wbCard wbWeather' + (ue ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (ue ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Oe(et.openPage) + '">' : '<div class="wbCurrent">') + Bt(H.state, 90, Pp(S), "now") + '<div class="wbTempBlock">' + (be && xn(be.value) ? '<div class="wbTemp"><span class="wbDeg">' + Oe(un(Math.round(Number(be.value)), S.locale)) + '</span><span class="wbUnit">' + Oe(ce) + "</span></div>" : "") + '<div class="wbPlace">' + Oe(((Re = S.config) == null ? void 0 : Re.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Oe(ss(S, H)) + "</div>" + (xe && me.templow != null ? '<div class="wbRange">' + Oe(la(et.range, { high: _n(S, me.temperature), low: _n(S, me.templow) })) + "</div>" : "") + "</div></div>";
    return O.length && (De += '<div class="wbColumns" role="list">' + O.map((Fe, Be) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="col-' + Be + '"><span class="wbDay">' + Oe(Ma(S, Fe, Be)) + "</span>" + Bt(Fe.condition ?? "cloudy", 60, !1, "col" + Be) + '<span class="wbTemps"><span class="wbHi">' + Oe(_n(S, Fe.temperature)) + '</span><span class="wbLo">' + Oe(_n(S, Fe.templow)) + "</span></span></button>").join("") + "</div>", De += '<div class="wbHalves" role="list">' + O.map((Fe, Be) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="half-' + Be + '">' + Bt(Fe.condition ?? "cloudy", 40, !1, "half" + Be) + '<span class="wbText"><span class="wbName">' + Oe(pa(S, Fe)) + '</span><span class="wbSub">' + Oe(la(et.highLow, { high: _n(S, Fe.temperature), low: _n(S, Fe.templow) })) + "</span></span></button>").join("") + "</div>"), De + "</div>" + (ue ? Ia(S, E, ue) : "") + "</div>";
  }
  function ot(S) {
    const E = S.getTime(), H = Date.now() - Ra;
    return g("hourly").filter((O) => {
      const ue = new Date(O.datetime).getTime();
      return ue >= E && ue < E + oi && ue > H;
    });
  }
  function en(S) {
    if (!S.length) return ["temperature"];
    const E = ["temperature"];
    return S.some((H) => H.precipitation != null || H.precipitation_probability != null) && E.push("precipitation"), S.some((H) => H.humidity != null) && E.push("humidity"), E;
  }
  function Ia(S, E, H) {
    const O = qi(new Date(H.datetime)), ue = ot(O), be = en(ue), me = be.includes(F.dayMode) ? F.dayMode : "temperature", xe = (ce) => ce === "humidity" ? et.humidity : et.modes[ce];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Bt(H.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Oe(pa(S, H)) + '</span><span class="wbSub">' + Oe(la(et.highLow, { high: _n(S, H.temperature), low: _n(S, H.templow) })) + '</span></div><button class="wbBack" title="' + Oe(et.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Wi(On.back) + "</button></div>" + (be.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + be.map((ce) => '<button aria-pressed="' + (ce === me) + '" data-wb="day-mode" data-mode="' + ce + '" data-wb-focus="day-mode-' + ce + '">' + Oe(xe(ce)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Up(Wt(S, E, O, ue, me)) + "</div></div>";
  }
  function Wt(S, E, H, O, ue) {
    var Vn;
    const be = H.getTime(), me = Date.now(), xe = yr(H, /* @__PURE__ */ new Date()), ce = (ht) => (ht - be) / Ba, De = (ht) => Fi(new Date(ht), S), je = (ht) => new Date(ht.datetime).getTime(), Ye = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: De(be + ht * Ra), minor: ht % 6 !== 0 })), { rise: qe, set: Re } = Rd(S, H), Fe = [], Be = [];
    qe && (Fe.push({ t: ce(qe.getTime()), label: De(qe.getTime()), rise: !0 }), Be.push([0, ce(qe.getTime())])), Re && (Fe.push({ t: ce(Re.getTime()), label: De(Re.getTime()), rise: !1 }), Be.push([ce(Re.getTime()), Cr]));
    const Qe = fs(S);
    !qe && !Re && Qe && El(new Date(be + oi / 2), Qe.lat, Qe.lon) < 0 && Be.push([0, Cr]);
    const pt = xe ? ce(me) : void 0, Lt = { hours: Ye, sun: Fe, night: Be };
    if (!O.length && !xe) return { ...Lt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: et.noHourly };
    if (ue === "precipitation") {
      const ht = O.some((sn) => sn.precipitation_probability != null), hn = O.map((sn) => ({ t: ce(je(sn)), v: Number((ht ? sn.precipitation_probability : sn.precipitation) ?? 0) })), Mn = Mr(S, ke(S, "hourly"), "precipitation"), bn = Math.max(0, ...hn.map((sn) => sn.v)), Qn = ht ? 100 : Id(0, Math.max(bn, 1), [0.5, 1, 2, 5, 10]).max, lo = (sn) => ht ? un(sn, S.locale) + "%" : un(sn, S.locale, { maximumFractionDigits: 1 }) + " " + Mn, ma = hn.find((sn) => sn.v === bn);
      return {
        ...Lt,
        kind: "bars",
        points: hn,
        min: 0,
        max: Qn,
        ticks: [0, Qn / 2, Qn],
        format: lo,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: ma && bn > 0 ? { t: ma.t + 30, v: ma.v, label: lo(ma.v) } : void 0,
        note: bn > 0 ? void 0 : et.noRain
      };
    }
    const vt = ue === "humidity" ? "humidity" : "temperature", jt = O.filter((ht) => ht[vt] != null && (!xe || je(ht) >= me)).map((ht) => ({ t: ce(je(ht)), v: Number(ht[vt]) }));
    let tn, rn = [];
    if (pt !== void 0) {
      const ht = da(S, E, vt);
      ht && xn(ht.value) && (tn = { t: pt, v: Number(ht.value) }, jt.unshift(tn)), rn = (((Vn = Y.todayHistory) == null ? void 0 : Vn.day) === H.toDateString() ? Y.todayHistory[vt] : []).filter((Mn) => Mn.time <= me).map((Mn) => ({ t: Math.max(0, ce(Mn.time)), v: Mn.value })), tn && rn.length && rn.push(tn);
    }
    const Kt = [...rn, ...jt];
    if (!Kt.length) return { ...Lt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: et.noHourly };
    const io = Kt.map((ht) => ht.v), qn = Id(Math.min(...io), Math.max(...io), vt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    vt === "humidity" && (qn.min = Math.max(0, qn.min), qn.max = Math.min(100, qn.max), qn.ticks = qn.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const ro = vt === "humidity" ? (ht) => un(ht, S.locale) + "%" : (ht) => _n(S, ht), so = vt === "temperature" ? Kt.reduce((ht, hn) => hn.v > ht.v ? hn : ht) : void 0;
    return { ...Lt, kind: "line", points: jt, past: rn, ...qn, format: ro, now: tn, peak: so ? { ...so, label: ro(so.v) } : void 0 };
  }
  function gn(S) {
    const E = ["temperature"];
    return S.some((H) => H.precipitation_probability != null || H.precipitation != null) && E.push("precipitation"), S.some((H) => H.wind_speed != null) && E.push("wind"), E;
  }
  function ct() {
    const S = /* @__PURE__ */ new Date();
    return S.setHours(6, 0, 0, 0), S.getTime() > Date.now() && S.setDate(S.getDate() - 1), S;
  }
  function nt(S, E) {
    var ue, be;
    const H = g("daily"), O = [];
    for (let me = 0; me < os; me++) for (const xe of [!1, !0]) {
      const ce = S.getTime() + (me * 24 + (xe ? 12 : 0)) * Ra, De = ce + 12 * Ra, je = {};
      E.forEach((qe) => {
        const Re = new Date(qe.datetime).getTime();
        qe.condition && Re >= ce && Re < De && (je[qe.condition] = (je[qe.condition] ?? 0) + (op.has(qe.condition) ? 2 : 1));
      });
      let Ye = (ue = Object.entries(je).sort((qe, Re) => Re[1] - qe[1])[0]) == null ? void 0 : ue[0];
      if (!Ye) {
        const qe = new Date(ce).toDateString();
        Ye = ((be = H.find((Re) => new Date(Re.datetime).toDateString() === qe)) == null ? void 0 : be.condition) ?? "cloudy";
      }
      O.push({ cond: xe && Ye === "sunny" ? "clear-night" : Ye, night: xe });
    }
    return O;
  }
  function dt(S, E, H) {
    const O = ke(S, "hourly"), ue = E.precipitation_probability != null ? un(E.precipitation_probability, S.locale) + "%" : "", be = E.precipitation ? un(E.precipitation, S.locale) + " " + Mr(S, O, "precipitation") : "";
    switch (H) {
      case "precipitation":
        return ue ? [ue, be] : [be || "–", ""];
      case "wind":
        return E.wind_speed != null ? [un(Math.round(E.wind_speed), S.locale), Mr(S, O, "wind_speed")] : ["–", ""];
      default:
        return [_n(S, E.temperature), (E.precipitation_probability ?? 0) >= 20 ? ue : ""];
    }
  }
  function Do(S) {
    W = null;
    const E = g("hourly"), H = Math.floor(Date.now() / Ba) * Ba, O = E.filter((Re) => new Date(Re.datetime).getTime() > H - Ra);
    if (!O.length) return "";
    const ue = gn(O), be = ue.includes(F.hourlyMode) ? F.hourlyMode : "temperature", me = ct(), xe = me.getTime() + os * 24 * Ra, ce = (H - me.getTime()) / Ra * al, De = os * 24 * al, je = (Re) => (Re - H) / Ra * al, Ye = [{ x: 0, label: et.now, entry: O[0] }, ...O.filter((Re) => {
      const Fe = new Date(Re.datetime);
      return je(Fe.getTime()) >= 48 && Fe.getTime() < xe && Fe.getHours() % ap === 0;
    }).map((Re) => {
      const Fe = new Date(Re.datetime);
      return { x: je(Fe.getTime()), label: Fi(Fe, S), entry: Re };
    })], qe = (Re, Fe, Be) => '<span class="wbMark' + (Fe === 0 ? " wbFirst" : "") + '" style="left:' + Re.x + 'px">' + Be + "</span>";
    return W = { segs: nt(me, E), seed: me.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Oe(et.nextHours) + "</h2></div>" + (ue.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ue.map((Re) => '<button aria-pressed="' + (Re === be) + '" data-wb="hourly-mode" data-mode="' + Re + '" data-wb-focus="hourly-mode-' + Re + '">' + Oe(et.modes[Re]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (De - ce) + 'px"><div class="wbRow wbTimes">' + Ye.map((Re, Fe) => qe(Re, Fe, Oe(Re.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -ce + "px;width:" + De + 'px"><canvas data-wb-strip' + (u === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ye.map((Re, Fe) => {
      if (!Re.entry) return "";
      const [Be, Qe] = dt(S, Re.entry, be);
      return qe(Re, Fe, '<span class="wbPrimaryV">' + Oe(Be) + '</span><span class="wbSecondary">' + Oe(Qe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ha(S) {
    const E = ae, { rise: H, set: O } = Rd(S, E), ue = H && O ? Math.round((O.getTime() - H.getTime()) / Ba) : 0, be = Math.floor(ue / 60), me = ue % 60, xe = H && O ? (E.getTime() - H.getTime()) / (O.getTime() - H.getTime()) : -1, ce = xe >= 0 && xe <= 1, De = Math.PI * (1 - Math.min(1, Math.max(0, xe))), je = 100 + 74 * Math.cos(De), Ye = 100 - 74 * Math.sin(De), qe = ce ? Math.sin(Math.PI * xe) : 0, Re = ce ? kr("#2e0a0d", "#43180a", qe) : "#0e0507", Fe = ce ? kr("#7a1d12", "#8f400f", qe) : "#1c0709", Be = kr("#f60c08", "#ff8f00", qe), Qe = kr("#fd9b07", "#ffd84a", qe), pt = ce ? kr("#fd9b07", "#ffd84a", qe) : "#6b3a2a", Lt = (jt) => jt ? Fi(jt, S) : "–", vt = H && O ? new Date((H.getTime() + O.getTime()) / 2) : null;
    return Lo({
      icon: On.sunny,
      name: et.sun,
      sub: ue ? la(et.daylightShort, { hours: be, minutes: me }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Re + ", " + Fe + ");--wb-sun-line:" + pt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Be + '"></stop><stop offset="0.45" stop-color="' + Be + '"></stop><stop offset="1" stop-color="' + Qe + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ce ? '<circle cx="' + je + '" cy="' + Ye + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (vt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Oe(Lt(vt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Oe(Lt(H)) + '</text><text class="wbSunTime" x="174" y="117">' + Oe(Lt(O)) + "</text></svg></div>"
    });
  }
  function pn(S, E, H) {
    const O = (me) => L + "moon-" + me, ue = S > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Gp(61, 61, 57.9, S) + '"' + (E ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", be = (me, xe, ce, De, je, Ye) => '<filter id="' + O(me) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xe + '" numOctaves="' + ce + '" seed="' + De + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((qe) => "<feFunc" + qe + ' type="linear" slope="' + je + '" intercept="' + Ye + '"></feFunc' + qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + be("mottle", "0.045", 4, 3, 1.8, -0.4) + be("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (H ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Kp.map(([me, xe, ce, De, je, Ye]) => '<ellipse cx="' + me + '" cy="' + xe + '" rx="' + ce + '" ry="' + De + '" fill-opacity="' + Ye + '" transform="rotate(' + je + " " + me + " " + xe + ')"></ellipse>').join("") + "</g>" + $p.map(([me, xe, ce]) => '<circle class="wbCrater" cx="' + me + '" cy="' + xe + '" r="' + ce + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + Jp.map(([me, xe]) => '<line x1="54.4" y1="95" x2="' + me + '" y2="' + xe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Hd.map(([me, xe, ce]) => '<circle cx="' + me + '" cy="' + xe + '" r="' + ce * 2 + '"></circle>').join("") + "</g>" + Hd.map(([me, xe, ce]) => '<circle class="wbBrightCenter" cx="' + me + '" cy="' + xe + '" r="' + ce + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + ue + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function yn(S) {
    const E = A, H = fs(S), O = (H == null ? void 0 : H.lat) ?? 0, ue = Np(E), be = Pd(S), me = be ? S.states[be] : void 0, xe = Sr(me) && pp.includes(me.state) ? me.state : Bp(ue.phase), { rise: ce, set: De } = H ? Rp(E, H.lat, H.lon) : {}, je = ue.phase > 0.5 != O < 0, Ye = un(Math.round(ue.fraction * 100), S.locale) + "%", qe = ce ?? De, Re = qe ? Fi(qe, S) : void 0;
    return Lo({
      icon: On.night,
      name: et.moon,
      sub: et.phases[xe],
      visual: '<div class="wbMoonBox">' + pn(ue.fraction, je, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Re ? Oe(la(ce ? et.moonriseAt : et.moonsetAt, { time: Re })) : "") + "</span><span>" + Oe(la(et.lit, { illumination: Ye })) + "</span></div>"
    });
  }
  function ut(S, E) {
    var Fe;
    const H = da(S, E, "wind_speed");
    if (!H || !xn(H.value)) return "";
    const O = da(S, E, "wind_gust_speed"), ue = da(S, E, "wind_bearing"), be = ue && xn(ue.value) ? Number(ue.value) : void 0, me = qp(Number(H.value), (Fe = H.stateObj.attributes) == null ? void 0 : Fe.wind_speed_unit), xe = kl(S, H.stateObj, "wind_speed", H.value), ce = be !== void 0 ? et.cardinal[up[((be + 11.25) / 22.5 | 0) % 16]] : void 0, De = O ? Fp(S, O.stateObj, "wind_gust_speed", O.value) : void 0, je = [ce ? la(et.windFrom, { direction: ce }) : void 0, me !== void 0 ? me + " " + et.beaufort : void 0].filter(Boolean).join(" · ") || De, Ye = (Be, Qe) => {
      const pt = (Be - 90) * Math.PI / 180;
      return [100 + Qe * Math.cos(pt), 100 + Qe * Math.sin(pt)];
    }, qe = Array.from({ length: 36 }, (Be, Qe) => Qe * 10).map((Be) => {
      const Qe = Be % 90 === 0, [pt, Lt] = Ye(Be, 97), [vt, jt] = Ye(Be, Qe ? 83 : 89);
      return '<line class="wbTick' + (Qe ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Lt + '" x2="' + vt + '" y2="' + jt + '"></line>';
    }).join(""), Re = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Be, Qe]) => {
      const [pt, Lt] = Ye(Qe, 64);
      return '<text class="wbLetter' + (Be === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Lt + '">' + Oe(et.cardinal[Be]) + "</text>";
    }).join("");
    return Lo({ icon: On.windy, name: et.wind, sub: je, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + qe + Re + (be !== void 0 ? '<path class="wbMarker" transform="rotate(' + be + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Oe(xe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Oe(xe.unit) + "</text></svg>" });
  }
  function it(S, E) {
    const H = da(S, E, "uv_index");
    if (!H || !xn(H.value)) return "";
    const O = Number(H.value), ue = et.uvLevel[Op(O)], be = /* @__PURE__ */ new Date();
    be.setHours(23, 59, 59, 999);
    const me = g("hourly").filter((Be) => Be.uv_index != null && new Date(Be.datetime) > /* @__PURE__ */ new Date() && new Date(Be.datetime) <= be).reduce((Be, Qe) => !Be || Qe.uv_index > Be.uv ? { uv: Qe.uv_index, time: new Date(Qe.datetime) } : Be, void 0), xe = 48, ce = 100, De = 130, je = (Be) => -xe + Math.min(Be, 11) / 11 * 2 * xe, Ye = (Be, Qe) => {
      const pt = Be * Math.PI / 180;
      return [ce + Qe * Math.sin(pt), De - Qe * Math.cos(pt)];
    }, qe = (Be, Qe, pt) => {
      const [Lt, vt] = Ye(je(Be), pt), [jt, tn] = Ye(je(Qe), pt);
      return "M " + Lt + " " + vt + " A " + pt + " " + pt + " 0 0 1 " + jt + " " + tn;
    }, Fe = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, is.low], [3, 6, is.moderate], [6, 8, is.high], [8, 11, is.very_high]].map(([Be, Qe, pt]) => '<path class="wbVuZone" d="' + qe(Be, Qe, 96) + '" style="stroke:' + pt + '"></path>').join("") + Array.from({ length: 21 }, (Be, Qe) => ({ angle: -xe + Qe * (2 * xe / 20), major: Qe % 2 === 0 })).map(({ angle: Be, major: Qe }) => {
      const [pt, Lt] = Ye(Be, 102), [vt, jt] = Ye(Be, Qe ? 114 : 108);
      return '<line class="wbVuTick' + (Qe ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Lt + '" x2="' + vt + '" y2="' + jt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + je(O) + 'deg"><line x1="' + ce + '" y1="' + De + '" x2="' + ce + '" y2="' + (De - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Oe(un(Math.round(O), S.locale)) + "</text></svg>";
    return Lo({
      icon: On.sunnyAlert,
      name: et.metrics.uv_index,
      sub: me && me.uv > O ? la(et.uvPeak, { level: ue, uv_index: un(Math.round(me.uv), S.locale), time: Fi(me.time, S) }) : ue,
      visual: Fe
    });
  }
  function Ie(S) {
    const E = g("daily")[0], H = Y.temperatureHistory;
    if (!E || new Date(E.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !xn(E.temperature) || !H || H.dailyHighs.length < sp) return "";
    const O = Number(E.temperature), ue = H.dailyHighs.reduce((vt, jt) => vt + jt, 0) / H.dailyHighs.length, be = Math.round(O - ue) || 0, me = be > 0 ? "above" : be < 0 ? "below" : "same", xe = [...H.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], ce = 220, De = 158, je = 22, Ye = 20, qe = xe.map((vt) => vt.high).concat(ue), Re = Math.min(...qe) - 3, Fe = Math.max(...qe) + 1, Be = (vt) => je + (1 - (vt - Re) / (Fe - Re)) * (De - je - Ye), Qe = ce / xe.length, pt = Math.min(18, Qe * 0.6), Lt = '<svg class="wbCompareBars" viewBox="0 0 ' + ce + " " + De + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ce + '" y1="' + Be(ue) + '" y2="' + Be(ue) + '"></line>' + xe.map((vt, jt) => {
      const tn = jt * Qe + Qe / 2, rn = Be(vt.high), Kt = vt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Kt + '" x="' + (tn - pt / 2) + '" y="' + rn + '" width="' + pt + '" height="' + (De - Ye - rn) + '" rx="5"></rect><text class="wbAvgValue' + Kt + '" x="' + tn + '" y="' + (rn - 6) + '">' + Oe(_n(S, vt.high)) + '</text><text class="wbAvgDay' + Kt + '" x="' + tn + '" y="' + (De - 4) + '">' + Oe(kp(vt.date, S)) + "</text>";
    }).join("") + "</svg>";
    return Lo({
      icon: On.chartLine,
      name: et.metrics.compared_to_average,
      double: !0,
      sub: la(et.highsLastDays, { days: H.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (be > 0 ? "+" : "") + Oe(_n(S, be)) + '</div><div class="wbCompareWords">' + Oe(et.average[me]) + '</div><div class="wbCompareTemps">' + Oe(la(et.todayVsAverage, { today: _n(S, O), average: _n(S, ue) })) + "</div></div>" + Lt + "</div>"
    });
  }
  function Ft(S, E) {
    const H = da(S, E, "humidity");
    if (!H || !xn(H.value)) return "";
    const O = da(S, E, "dew_point"), ue = Math.max(0, Math.min(100, Number(H.value)));
    return Lo({
      icon: On.waterPercent,
      name: et.metrics.humidity,
      sub: O && xn(O.value) ? la(et.dewPoint, { dew_point: _n(S, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + ue + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + rl(un(Math.round(Number(H.value)), S.locale), "%") + "</div>"
    });
  }
  function Mt(S, E) {
    var De, je;
    const H = da(S, E, "pressure");
    if (!H || !xn(H.value)) return "";
    const O = Number(H.value), ue = (De = H.stateObj.attributes) == null ? void 0 : De.pressure_unit, be = Bd(O, ue), me = ((je = Y.pressureHistory) == null ? void 0 : je.entityId) === H.stateObj.entity_id ? Bd(Y.pressureHistory.value, ue) : void 0;
    let xe;
    if (be !== void 0 && me !== void 0) {
      const Ye = be - me;
      xe = Ye >= Sd ? "rising" : Ye <= -Sd ? "falling" : "steady";
    }
    const ce = kl(S, H.stateObj, "pressure", Math.round(O));
    return Lo({
      icon: On.gauge,
      name: et.metrics.pressure,
      sub: xe ? et.pressure[xe] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + rl(ce.number) + '<span class="wbTapeUnit">' + Oe(ce.unit) + "</span></div>" + (be !== void 0 ? mt(S, be) : "") + "</div>"
    });
  }
  function mt(S, E) {
    const ue = Math.floor(E) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (be, me) => ue + me).map((be) => {
      const me = 100 - (be - E) * 9;
      if (me < 22 || me > 178) return "";
      const xe = be % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(me - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xe ? 2 : 8) + '" x2="26" y1="' + me + '" y2="' + me + '"></line>' + (xe ? '<text class="wbTapeLabel" x="33" y="' + me + '">' + Oe(un(be, S.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Oe(et.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Oe(et.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Rn(S) {
    var ce, De;
    const E = il(S), H = E ? S.states[E] : void 0;
    if (!H || ((ce = Y.rain) == null ? void 0 : ce.entityId) !== E || !xn(Y.rain.change)) return "";
    const O = ((De = H.attributes) == null ? void 0 : De.unit_of_measurement) ?? "", ue = ke(S, "hourly"), be = Date.now() + oi, me = g("hourly").filter((je) => je.precipitation != null && new Date(je.datetime).getTime() <= be), xe = me.reduce((je, Ye) => je + Number(Ye.precipitation), 0);
    return Lo({
      icon: On.rainy,
      name: et.metrics.precipitation,
      sub: ue && me.length ? la(et.rainExpected, { amount: un(xe, S.locale, { maximumFractionDigits: 1 }) + " " + Mr(S, ue, "precipitation") }) : et.rainLast24h,
      visual: rl(un(Y.rain.change, S.locale, { maximumFractionDigits: 1 }), O) + (me.length > 1 ? Zp(me.map((je) => ({ label: "", value: Number(je.precipitation) }))) : "")
    });
  }
  function Ge(S) {
    Y.categories === void 0 && de(S);
    const E = tt(S), H = (ce) => ce.map((De) => S.states[De]).filter(Sr), O = H(E.air), ue = H(E.pollen);
    if (!O.length && !ue.length) return "";
    const be = [...O, ...ue], me = (ce) => ue.includes(ce) ? On.flower : On.airFilter, xe = be.find((ce) => ce.entity_id === F.aq);
    return xe ? zi(S, xe, me(xe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Oe(et.airQuality) + '</h2></div><div class="wbAqTiles">' + be.map((ce) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Oe(ce.entity_id) + '"><span class="wbChip">' + Wi(me(ce)) + '</span><span class="wbText"><span class="wbName">' + Oe(Nd(S, ce)) + '</span><span class="wbSub">' + Oe(ss(S, ce)) + "</span></span></button>").join("") + "</div></div>";
  }
  function zi(S, E, H) {
    var je, Ye, qe;
    const O = ((je = E.attributes) == null ? void 0 : je.unit_of_measurement) ?? "", ue = ((Ye = E.attributes) == null ? void 0 : Ye.device_class) === "pm25" && O === Td && xn(E.state), be = Number(E.state), me = ue ? Wp(be) : void 0, xe = ((qe = Y.aqHistory) == null ? void 0 : qe.entityId) === E.entity_id ? Y.aqHistory.points : void 0, ce = (Re) => Math.min(100, Math.max(0, Re / rs * 100));
    let De;
    if (xe && xe.length > 1) De = Yp(xe, (Re) => (un(Re, S.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (me) {
      let Re = 0;
      const Fe = hc.map(([Be, Qe]) => {
        const pt = ce(Math.min(Qe, rs)), Lt = mp[Be] + " " + Re + "% " + pt + "%";
        return Re = pt, Lt;
      });
      De = '<div class="wbScale" role="meter" aria-label="' + Oe(et.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + rs + '" aria-valuenow="' + be + '" style="background:linear-gradient(to right, ' + Fe.join(", ") + ')"><i style="left:' + ce(be) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + rs + " " + Td + "</span></div>";
    } else De = '<span class="wbGraphNote"><span>' + Oe(ss(S, E)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Wi(H) + '</span><span class="wbText"><span class="wbName">' + Oe(Nd(S, E)) + '</span><span class="wbSub">' + Oe(ss(S, E)) + (me ? " · " + Oe(et.aqLevel[me]) : "") + '</span></span><button class="wbBack" title="' + Oe(et.back) + '" data-wb="aq-close">' + Wi(On.back) + '</button></div><div class="wbGraph">' + De + "</div></div></div>";
  }
  const Ro = {
    current: _e,
    hourly: Do,
    sun: Ha,
    moon: yn,
    wind: ut,
    uv_index: it,
    compared_to_average: Ie,
    humidity: Ft,
    pressure: Mt,
    precipitation: Rn,
    air_quality: Ge
  };
  function Nn(S) {
    var De, je, Ye, qe;
    const E = s == null ? void 0 : s();
    if (!E || B) return;
    const H = Pe(E);
    b(E, H), Y.lastFetch || $();
    const O = tt(E), ue = Pd(E), be = il(E), me = [
      ...H.map((Re) => E.states[Re]),
      E.states["sun.sun"],
      ue && E.states[ue],
      be && E.states[be],
      ...O.air.map((Re) => E.states[Re]),
      ...O.pollen.map((Re) => E.states[Re]),
      E.locale,
      E.config,
      E.entities,
      Math.floor(Date.now() / Ba)
    ];
    if (!S && j && me.length === j.length && me.every((Re, Fe) => Re === j[Fe])) return;
    j = me;
    const xe = v.getRootNode(), ce = xe.activeElement || document.activeElement;
    for (const Re of se) {
      const Fe = N[Re];
      let Be = "";
      try {
        Be = Ro[Re](E, H) || "";
      } catch {
        Be = "";
      }
      if (Be === Fe.html) continue;
      const Qe = ce && Fe.el.contains(ce) ? (De = ce.dataset) == null ? void 0 : De.wbFocus : void 0, pt = Fe.el.querySelector(".wbStripScroll"), Lt = pt ? pt.scrollLeft : 0;
      Fe.html = Be, Fe.el.hidden = !Be, Fe.el.innerHTML = Be, Lt && ((je = Fe.el.querySelector(".wbStripScroll")) == null || je.scrollTo({ left: Lt })), Qe && !K && ((Ye = Fe.el.querySelector('[data-wb-focus="' + Qe + '"]')) == null || Ye.focus());
    }
    K && ((qe = v.querySelector('[data-wb-focus="' + K + '"]')) == null || qe.focus(), K = null), Ct(performance.now());
  }
  function Ee() {
    q || B || (q = !0, queueMicrotask(() => {
      q = !1, Nn(!0);
    }));
  }
  function ze() {
    const S = getComputedStyle(v), E = (me) => S.getPropertyValue(me).trim(), H = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([me, xe]) => {
      E(xe) && (H[me] = E(xe));
    });
    const O = E("--color-text-primary") || "#f1f1f1", ue = E("--color-bg-card") || "#222222", be = !!v.closest(".light");
    return { colors: { ...oo, ...H }, ink: be ? O : ue, paper: be ? ue : O };
  }
  const zt = (S, E) => {
    var H;
    S.width !== E.w && (S.width = E.w), S.height !== E.h && (S.height = E.h), (H = S.getContext("2d")) == null || H.putImageData(new ImageData(E.data, E.w, E.h), 0, 0);
  }, Bn = () => m && !wp();
  function vn(S, E) {
    const H = v.querySelector("canvas[data-wb-strip]");
    if (!H || !W || !H.getClientRects().length) return;
    const O = H.clientWidth, ue = H.clientHeight;
    if (!O || !ue) return;
    const be = { width: O, height: ue, columns: os, colors: E.colors, clock: S, ambient: Bn(), seed: W.seed };
    if (u === "smooth") {
      const me = Math.min(2, window.devicePixelRatio || 1), xe = Math.round(O * me), ce = Math.round(ue * me);
      H.width !== xe && (H.width = xe), H.height !== ce && (H.height = ce);
      const De = H.getContext("2d");
      if (!De) return;
      De.setTransform(me, 0, 0, me, 0, 0), Uu(De, W.segs, be);
    } else zt(H, Gu(W.segs, { ...be, px: 2, oneBit: u === "onebit", ink: E.ink, paper: E.paper }));
  }
  function Ct(S) {
    if (B) return;
    const E = ze();
    if (u !== "smooth") {
      const H = Bn();
      v.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && zt(O, ac(wl(O.dataset.wbWx, E.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: E.colors, ink: E.ink, paper: E.paper, clock: S, idle: H }));
      });
    }
    vn(S, E);
  }
  function Jn(S) {
    if (J = 0, !(B || !Bn())) {
      if (!document.hidden)
        if (u === "smooth") vn(S, ze());
        else {
          const E = Math.floor(S / 100);
          E !== z && (z = E, Ct(S));
        }
      J = requestAnimationFrame(Jn);
    }
  }
  function Ot() {
    v.classList.toggle("wbMotion", Bn()), !J && !B && Bn() && (J = requestAnimationFrame(Jn));
  }
  function Pt(S) {
    var H, O;
    const E = (O = (H = S.target).closest) == null ? void 0 : O.call(H, "[data-wb]");
    if (!(!E || !v.contains(E))) {
      switch (E.dataset.wb) {
        case "day": {
          F.openDay = Number(E.dataset.index), F.opener = E.dataset.wbFocus, K = "back-day";
          const ue = xt()[F.openDay], be = !Y.todayHistory || Y.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Y.todayHistory.fetched > np;
          ue && yr(new Date(ue.datetime), /* @__PURE__ */ new Date()) && be && ee();
          break;
        }
        case "close-day":
          F.openDay = void 0, K = F.opener, F.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          F.dayMode = E.dataset.mode;
          break;
        case "hourly-mode":
          F.hourlyMode = E.dataset.mode;
          break;
        case "aq-open":
          F.aq = E.dataset.entity, oe(F.aq);
          break;
        case "aq-close":
          F.aq = void 0;
          break;
        default:
          return;
      }
      Nn(!0);
    }
  }
  function Fa(S) {
    var E, H;
    S.key === "Escape" && F.openDay !== void 0 && ((H = (E = S.target).closest) != null && H.call(E, '[data-wb-open="day"]')) && (F.openDay = void 0, K = F.opener, F.opener = void 0, Nn(!0));
  }
  let mn = null;
  function Tt(S) {
    var H, O;
    const E = (O = (H = S.target).closest) == null ? void 0 : O.call(H, ".wbStripScroll");
    !E || S.button !== 0 || (mn = { startX: S.pageX, left: E.scrollLeft, moved: !1 }, window.addEventListener("mousemove", kn), window.addEventListener("mouseup", gt, { once: !0 }));
  }
  function kn(S) {
    const E = v.querySelector(".wbStripScroll");
    if (!mn || !E) return;
    const H = S.pageX - mn.startX;
    !mn.moved && Math.abs(H) > 1 && (mn.moved = !0, E.classList.add("wbDragging")), E.scrollLeft = mn.left - H;
  }
  function gt() {
    var S;
    mn = null, window.removeEventListener("mousemove", kn), (S = v.querySelector(".wbStripScroll")) == null || S.classList.remove("wbDragging");
  }
  v.addEventListener("click", Pt), v.addEventListener("keydown", Fa), v.addEventListener("mousedown", Tt);
  const Pn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Ct(performance.now())) : null;
  Pn == null || Pn.observe(v);
  const qt = (Xn = window.matchMedia) == null ? void 0 : Xn.call(window, "(prefers-reduced-motion: reduce)"), No = () => {
    Ot(), Ct(performance.now());
  };
  (Wa = qt == null ? void 0 : qt.addEventListener) == null || Wa.call(qt, "change", No);
  const Oa = [
    setInterval(() => {
      ae = /* @__PURE__ */ new Date(), Nn(!0);
    }, lp),
    setInterval(() => {
      A = /* @__PURE__ */ new Date(), Nn(!0);
    }, dp),
    setInterval($, ip)
  ];
  return Nn(!0), Ot(), {
    update() {
      Nn(!1);
    },
    setStyle(S) {
      !S || S === u || (u = S, Nn(!0), Ot());
    },
    destroy() {
      var S;
      B = !0, Oa.forEach(clearInterval), J && cancelAnimationFrame(J), J = 0, Pn == null || Pn.disconnect(), (S = qt == null ? void 0 : qt.removeEventListener) == null || S.call(qt, "change", No), gt(), v.removeEventListener("click", Pt), v.removeEventListener("keydown", Fa), v.removeEventListener("mousedown", Tt), ["daily", "hourly"].forEach(Ce), v.remove();
    }
  };
}
const Tr = "#E1E1E1", Od = "#F7F4F0", sl = "#03a9f4", wt = 14, kt = 172;
let Qp = 0;
const It = (n) => Math.round(n * 100) / 100, Pa = (n, s, o) => Math.max(s, Math.min(o, n)), ao = (n, s, o, u, m, h) => '<rect x="' + It(n) + '" y="' + It(s) + '" width="' + It(o) + '" height="' + It(u) + '" fill="' + m + '"' + (h != null ? ' opacity="' + h + '"' : "") + "/>", ll = (n) => n.map((s, o) => (o ? "L" : "M") + It(s[0]) + " " + It(s[1])).join("");
function dl(n) {
  const s = (n == null ? void 0 : n.attributes) || {};
  return s.device_class === "curtain" ? "curtain" : s.device_class === "blind" || s.current_tilt_position != null ? "venetian" : "blind";
}
const _o = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function em(n) {
  const s = n < 2 ? n + 24 : n;
  let o = _o[0], u = _o[_o.length - 1];
  for (let L = 0; L < _o.length - 1; L++) if (s >= _o[L][0] && s <= _o[L + 1][0]) {
    o = _o[L], u = _o[L + 1];
    break;
  }
  const m = (s - o[0]) / (u[0] - o[0]), h = m * m * (3 - 2 * m), w = (L, v) => {
    const I = parseInt(L.slice(1), 16), se = parseInt(v.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((I >> ne & 255) + ((se >> ne & 255) - (I >> ne & 255)) * h).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], u[1][0]), bot: w(o[1][1], u[1][1]), warm: w(o[1][2], u[1][2]), cool: w(o[1][3], u[1][3]), op: o[1][4] + (u[1][4] - o[1][4]) * h, t: s };
}
function tm(n) {
  const s = parseInt(n.slice(1), 16), o = (s >> 16 & 255) / 255, u = (s >> 8 & 255) / 255, m = (s & 255) / 255, h = Math.max(o, u, m), w = Math.min(o, u, m);
  let L = 0, v = 0;
  const I = (h + w) / 2;
  if (h !== w) {
    const se = h - w;
    v = I > 0.5 ? se / (2 - h - w) : se / (h + w), L = (h === o ? (u - m) / se + (u < m ? 6 : 0) : h === u ? (m - o) / se + 2 : (o - u) / se + 4) / 6;
  }
  return [L * 360, v * 100, I * 100];
}
function Tc(n, s, o) {
  s = Pa(s, 0, 100) / 100, o = Pa(o, 0, 100) / 100;
  const u = (w) => (w + n / 30) % 12, m = s * Math.min(o, 1 - o), h = (w) => o - m * Math.max(-1, Math.min(u(w) - 3, Math.min(9 - u(w), 1)));
  return "#" + [h(0), h(8), h(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Lc, _c, Ac] = tm(Tr), Wd = Tc(Lc, _c, Math.max(6, Ac - 14)), nm = Tc(Lc, _c, Math.min(96, Ac + 16));
function am(n, s, o, u, m) {
  const h = kt / 2, w = kt * 0.12, L = h - (h - w) * n, v = (j) => j ** 1.3, I = Pa(o, -1.5, 1.5), se = (j) => -(Math.abs(I) * 4.6 * j ** 1.5) * Math.sign(I), ne = n * 1.4, N = (j, J) => {
    const z = Math.min(4.8, Math.abs(o) * 2.6) * (J ? 1 : -1) * Math.sign(o || 1), q = J ? j + L : j, K = J ? j : j + L, F = (Te) => q + se(Te) + z * Math.sin(Te * Math.PI * 1.2 + u) * v(Te) * 1.4 + ne * Math.sin(Te * Math.PI * 2 + u * 0.6) * v(Te) * (J ? 1 : -1), Y = [[K, wt]];
    for (let Te = 0; Te <= 12; Te++) Y.push([F(Te / 12), wt + kt * Te / 12]);
    Y.push([K, wt + kt]);
    let ae = '<path d="' + ll(Y) + 'Z" fill="' + Tr + '"/>';
    if (m) return ae;
    const A = 1.35 + ((J ? o > 0 : o < 0) ? 0.35 : 0), W = (Te) => {
      const g = Te / 7, ke = J ? 1 - g : g, Ce = (1 - ke) ** 1.3, We = j + L * g;
      return Array.from({ length: 13 }, (b, M) => {
        const k = M / 12;
        return [We + se(k) * Ce + z * A * Math.sin(k * Math.PI * 1.2 + u - ke * 3.2) * v(k) * 1.4 * Ce + ne * 1.6 * Math.sin(k * Math.PI * 2 + u * 0.6 - ke * 2.5) * v(k) * n * (0.4 + 0.6 * Ce), wt + kt * k];
      });
    }, fe = [1, 2, 3, 4, 5, 6].map(W);
    for (let Te = 0; Te < 6; Te += 2) ae += '<path d="' + ll(fe[Te]) + ll(fe[Te + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ae;
  }, B = h - (h - w) * s;
  return { body: N(wt, !0) + N(wt + kt - L, !1), rails: [{ x: wt + B - 4, y: wt, w: 4, h: kt }, { x: wt + kt - B, y: wt, w: 4, h: kt }], head: 6.4 };
}
function om(n, s, o) {
  const u = kt * (1 - n);
  let m = "";
  if (u > 1 && (m += ao(wt, wt, kt, u, Tr), !o))
    for (let h = 1; h < 7; h += 2) m += ao(wt + kt * h / 7, wt, kt / 7, u, "#fff");
  return { body: m, rails: [{ x: wt, y: wt + kt * (1 - s) - 7, w: kt, h: 11 }], head: 10.4 };
}
function im(n, s, o, u) {
  const m = 9 - 7 * (o / 100), h = wt + kt * (1 - n), w = Math.ceil(kt / 10) + 1, L = wt + m / 2, v = (wt + kt - m / 2 - L) / (w - 1), I = 0.8, se = 0.6, ne = Array.from({ length: w }, (j, J) => Math.max(L + J * se, Math.min(L + J * v, h - m / 2 - (w - 1 - J) * se))), N = ne.slice(0, -1).map((j, J) => Pa((ne[J + 1] - j - se) / (v - se), 0, 1));
  N.push(N[w - 2]);
  let B = "";
  return ne.forEach((j, J) => {
    const z = I + (m - I) * N[J], q = Math.max(0.5, z / 2), K = Math.max(0.4, z * 0.114);
    B += ao(wt, j - q, kt, Math.max(1, z), Tr), !u && z > 2.2 && (B += ao(wt, j + q - K, kt, K, Wd) + ao(wt, j - q, kt, K * 0.55, nm, 0.75));
  }), u || [0.22, 0.78].forEach((j) => {
    B += ao(wt + kt * j - 0.7, wt, 1.4, Math.max(0, ne[w - 1] + 1 - wt), Wd, 0.85);
  }), { body: B, rails: [{ x: wt, y: wt + kt * (1 - s) - 8, w: kt, h: 8 }], head: 8.8 };
}
const qd = (n, s, o, u, m, h, w) => n === "curtain" ? am(s, o, m, h, w) : n === "venetian" ? im(s, o, u, w) : om(s, o, w);
function rm(n, s) {
  let o = "", u = "";
  return s.forEach((m) => {
    const h = m.w > m.h, w = Pa(h ? wt + kt / 2 : m.x + m.w / 2, 17, 183), L = Pa(h ? m.y + m.h / 2 : wt + kt / 2, 17, 183);
    o += h ? ao(wt, Pa(m.y + m.h / 2, wt, wt + kt) - 1, kt, 2, sl) : ao(Pa(m.x + m.w / 2, wt, wt + kt) - 1, wt, 2, kt, sl);
    const v = h ? "M" + It(w - 4) + " " + It(L - 3) + "l4 -3l4 3M" + It(w - 4) + " " + It(L + 3) + "l4 3l4 -3" : "M" + It(w - 3) + " " + It(L - 4) + "l-3 4l3 4M" + It(w + 3) + " " + It(L - 4) + "l3 4l-3 4";
    u += '<circle cx="' + It(w) + '" cy="' + It(L) + '" r="11" fill="' + sl + '" filter="url(#' + n + 's)"/><path d="' + v + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: u };
}
function sm(n, s) {
  const o = /* @__PURE__ */ new Date(), u = em(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(u.t * 0.5), h = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, w = qd(s.kind, s.pos / 100, s.bar / 100, s.tilt, s.vel, s.ph, !1), L = s.ghostAlpha > 4e-3 && s.ghost != null ? qd(s.kind, s.ghost / 100, s.ghost / 100, s.tilt, 0, 0, !0).body : "", v = s.grip > 4e-3 ? rm(n, w.rails) : null, I = (se) => ao(wt, wt, kt, kt, se);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + It(m) + '%" cy="' + It(h) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + It(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + It(100 - m * 0.8) + '%" cy="' + It(100 - h * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + It(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Od + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + I("url(#" + n + "l)") + I("url(#" + n + "w)") + I("url(#" + n + "k)") + (L ? '<g opacity="' + It(s.ghostAlpha) + '">' + L + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Tr + '" filter="url(#' + n + 's)"/></g>' + (v ? '<g clip-path="url(#' + n + 'c)" opacity="' + It(s.grip) + '">' + v.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Od + '" stroke-width="3"/>' + (v ? '<g opacity="' + It(s.grip) + '">' + v.knobs + "</g>" : "") + "</svg>";
}
function lm({ onMove: n, onSet: s }) {
  var ae;
  const o = "cv" + ++Qp, u = document.createElement("div");
  u.className = "tfCoverArt";
  const m = (ae = window.matchMedia) == null ? void 0 : ae.call(window, "(pointer: coarse)").matches;
  let h = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, v = !1, I = !1, se = null, ne = 0, N = 0;
  const B = () => (h == null ? void 0 : h.kind) === "curtain" ? "x" : "y", j = () => se || v || I || h.moving || h.target != null ? 1 : m ? performance.now() < N ? 1 : 0.4 : 0, J = () => {
    u.innerHTML = sm(o, { kind: h.kind, pos: w.pos, bar: h.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function z(A) {
    L = 0;
    const W = w.last ? Math.min(0.064, (A - w.last) / 1e3) : 1 / 60, fe = W * 60;
    w.last = A;
    const Te = h.pos - w.pos, g = w.pos;
    w.pos += Math.sign(Te) * Math.min(Math.abs(Te), Math.max(10.5, Math.abs(Te) * 1.4) * W), Math.abs(h.pos - w.pos) < 0.03 && (w.pos = h.pos), w.vel = w.vel * 0.86 + (w.pos - g) / fe * 0.14, Math.abs(w.vel) < 0.015 && w.pos === h.pos && (w.vel = 0), (w.pos !== g || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * fe);
    const ke = h.tilt - w.tilt;
    w.tilt += Math.sign(ke) * Math.min(Math.abs(ke), Math.max(60, Math.abs(ke) * 4) * W);
    const Ce = j();
    w.grip += (Ce - w.grip) * Math.min(1, W * (Ce > w.grip ? 11 : 3.5)), Math.abs(Ce - w.grip) < 0.01 && (w.grip = Ce);
    const We = h.target != null && Math.abs(h.target - w.pos) > 0.5 ? 0.22 : 0;
    h.target != null && (w.gpos = h.target), w.ghost += (We - w.ghost) * Math.min(1, W * (We > w.ghost ? 16 : 3)), Math.abs(We - w.ghost) < 4e-3 && (w.ghost = We), J(), w.pos !== h.pos || w.vel || w.tilt !== h.tilt || w.grip !== Ce || w.ghost !== We ? L = requestAnimationFrame(z) : w.last = 0;
  }
  const q = () => {
    h && !L && (L = requestAnimationFrame(z));
  }, K = setInterval(() => {
    h && !L && J();
  }, 60 * 1e3), F = (A) => {
    const W = u.getBoundingClientRect();
    return B() === "x" ? (A.clientX - W.left) / W.width : (A.clientY - W.top) / W.height;
  };
  u.addEventListener("pointerdown", (A) => {
    var Te;
    if (!(h != null && h.canSet) || A.button > 0) return;
    A.preventDefault(), (Te = u.setPointerCapture) == null || Te.call(u, A.pointerId);
    const W = h.target ?? h.pos, fe = u.getBoundingClientRect();
    se = { p0: F(A), from: W, x0: A.clientX, value: null, side: null }, h.kind === "curtain" && W > 0 && (se.side = (A.clientX - fe.left) / fe.width < 0.5 ? "L" : "R"), q();
  }), u.addEventListener("pointermove", (A) => {
    if (!se) return;
    let W;
    if (h.kind === "curtain") {
      if (!se.side) {
        const Te = A.clientX - se.x0;
        if (Math.abs(Te) < 4) return;
        se.side = Te < 0 ? "L" : "R";
      }
      const fe = (kt / 2 - kt * 0.12) / 200;
      W = se.from + (se.side === "L" ? -1 : 1) * ((F(A) - se.p0) / fe) * 100;
    } else W = se.from - (F(A) - se.p0) / (kt / 200) * 100;
    se.value = Pa(W, 0, 100), n(se.value);
  });
  const Y = () => {
    if (!se) return;
    const A = se.value;
    se = null, A != null && s(Math.round(A)), q();
  };
  return u.addEventListener("pointerup", Y), u.addEventListener("pointercancel", Y), u.addEventListener("lostpointercapture", Y), u.addEventListener("pointerenter", () => {
    v = !0, q();
  }), u.addEventListener("pointerleave", () => {
    v = !1, q();
  }), u.addEventListener("focus", () => {
    I = u.matches(":focus-visible"), q();
  }), u.addEventListener("blur", () => {
    I = !1, q();
  }), u.addEventListener("keydown", (A) => {
    if (!(h != null && h.canSet)) return;
    const W = Math.round(h.target ?? h.pos), fe = A.shiftKey ? 10 : 1, Te = { ArrowUp: W + fe, ArrowRight: W + fe, ArrowDown: W - fe, ArrowLeft: W - fe, PageUp: W + 25, PageDown: W - 25, Home: 0, End: 100 }[A.key];
    if (Te == null) return;
    A.preventDefault();
    const g = Pa(Te, 0, 100);
    n(g), clearTimeout(ne), ne = setTimeout(() => s(g), 500);
  }), {
    el: u,
    update(A) {
      const W = !h;
      h = A, W && (w.pos = h.pos, w.tilt = h.tilt, N = performance.now() + 1500, m && setTimeout(q, 1600)), u.classList.toggle("x", B() === "x"), u.classList.toggle("y", B() === "y"), h.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(h.target ?? h.pos))), u.setAttribute("aria-orientation", B() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", h.name + (h.canSet ? " position" : "")), u.setAttribute("aria-valuetext", h.text), q();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(K), clearTimeout(ne), u.remove();
    }
  };
}
const Vd = "move-assistant-density", Ao = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, s) {
    try {
      localStorage.setItem(n, s);
    } catch {
    }
  }
}, pe = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), cl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', dm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', cm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', ls = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, zd = 1, um = 4, jd = 16, Gd = 32, pm = 128, mm = 256, Ud = 16384, hm = 1, fm = 2, Yd = 4, gm = 8, vm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, bm = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ul = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Zd = "move_assistant_house", Kd = "move-assistant-house-used", xm = ["switch", "fan", "input_boolean", "automation"], $d = "move-assistant-house-look", ym = [["popup", "Popup"], ["sheet", "Sheet"]], km = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Mm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', ca = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((s) => '<path d="' + s + '"/>').join("") + "</svg>", Jd = ca(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Sm = ca(["M20 6L9 17L4 12"]), Na = {
  temp: ca(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: ca(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: ca(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: ca(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: ca(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: ca(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: ca(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: ca(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: ca(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: ca(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Tm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lm = 1, _m = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Xd = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, pl = ["hs", "xy", "rgb", "rgbw", "rgbww"], ml = ["door", "window", "garage_door", "opening"], ds = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Am = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Qd = 10, Em = 20, Dm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rm = ["living room", "bedroom", "office"];
function Nm(n, { config: s, getHass: o }) {
  var lr, qr, ki;
  const u = (t) => n.getElementById(t), m = u("app"), w = String((s || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = Ao.get(Vd) === "1", v = {};
  const I = (t) => {
    var i;
    return (i = o()) == null ? void 0 : i.callWS(t);
  }, se = (t, i, l) => I({ type: "call_service", domain: t, service: i, service_data: l }), ne = n.querySelector("#appearancePane .toggleList");
  ne && !u("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    L = !L, Ao.set(Vd, L ? "1" : "0"), ae();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && it(t).device_class === "power" && /^(W|kW)$/.test(it(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], B = (t, i, l, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + i + '">' + d.map(([f, D]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + l + '="' + f + '">' + D + "</button>").join("") + "</div>", j = (t, i, l, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (i ? '<div class="status">' + i + "</div>" : "") + "</div>" + l + "</div>";
  function J() {
    var R, ie, G;
    if (!w || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const i = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], l = (V, le) => '<div class="houseTab' + (V === "look" ? " active" : "") + '" data-house-pane="' + V + '"><section class="card">' + le + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([V, le]) => '<button class="tab segBtn' + (V === "look" ? " active" : "") + '" type="button" data-house-tab="' + V + '">' + le + "</button>").join("") + "</div>" + l("look", '<div class="toggleList" id="houseLook"></div>') + l("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + l("sources", '<div class="toggleList">' + N.map(([V, le, Se]) => j(le, Se, '<select class="settingsSelect" data-source="' + V + '" aria-label="' + le + '"></select>')).join("") + "</div>") + l("sums", '<div class="toggleList">' + Object.entries(ul).map(([V, le]) => j(le.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + V + '" aria-label="' + le.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = u("houseLook");
    [(R = t.querySelector(".themeBtn")) == null ? void 0 : R.closest(".toggleRow"), (ie = u("densityToggle")) == null ? void 0 : ie.closest(".toggleRow"), (G = u("moreInfoChoice")) == null ? void 0 : G.closest(".toggleRow")].forEach((V) => V && d.appendChild(V)), d.insertAdjacentHTML("beforeend", j("Lights", "How lights show on the house page.", B("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + j("Pad", "What the Dual Axis Controller’s pad sets on its tile.", B("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const f = u("housePane"), D = f.querySelector(".houseTabs"), y = D.querySelector(".rubberIndicator"), C = (V) => {
      const le = D.querySelector(".tab.active");
      y.style.transition = V ? "" : "none", y.style.left = le.offsetLeft + "px", y.style.width = le.offsetWidth + "px", V && (y.style.transform = "scaleX(1.08)", setTimeout(() => y.style.transform = "", 180));
    };
    new ResizeObserver(() => C(!1)).observe(D), f.addEventListener("click", (V) => {
      const le = V.target.closest("[data-house-tab]");
      if (le) {
        D.querySelectorAll(".tab").forEach((ge) => ge.classList.toggle("active", ge === le)), f.querySelectorAll(".houseTab").forEach((ge) => ge.classList.toggle("active", ge.dataset.housePane === le.dataset.houseTab)), le.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), C(!0);
        return;
      }
      const Se = V.target.closest("[data-light-fav]");
      if (Se) {
        si(Se.dataset.lightFav);
        return;
      }
      const He = V.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!He || He.disabled)) {
        if (He.dataset.lights && (xt.lights = He.dataset.lights), He.dataset.dacPad && (xt.dacPad = He.dataset.dacPad), (He.dataset.lights || He.dataset.dacPad) && (pa(), Kt.clear()), He.dataset.sumToggle) {
          const ge = He.dataset.sumToggle, he = new Set(T.hiddenSums || []);
          he.has(ge) ? he.delete(ge) : he.add(ge), T = { ...T, hiddenSums: [...he] }, Bt();
        }
        Sn();
      }
    }), f.addEventListener("change", (V) => {
      const le = V.target;
      le.dataset.source && (T = { ...T, sources: { ...T.sources || {}, [le.dataset.source]: le.value || void 0 } }, Bt());
      const Se = le.dataset.lightStyle || le.dataset.lightPad;
      if (Se) {
        const He = le.dataset.lightStyle ? "lightStyles" : "lightPads", ge = { ...xt[He] };
        le.value ? ge[Se] = le.value : delete ge[Se], xt[He] = ge, pa(), [...Kt.keys()].filter((he) => he.endsWith(":" + Se)).forEach((he) => Kt.delete(he));
      }
      Sn();
    });
  }
  function z() {
    var C;
    const t = u("housePane");
    if (!t) return;
    const i = !!customElements.get(rn), l = i ? xt.lights : "tile";
    t.querySelectorAll("[data-lights]").forEach((R) => {
      R.setAttribute("aria-pressed", String(R.dataset.lights === l)), R.dataset.lights === "dac" && (R.disabled = !i);
    }), u("lightsRow").querySelector(".status").textContent = i ? "How lights show on the house page." : "Install the Dual Axis Controller from HACS to use it.", t.querySelectorAll("[data-dac-pad]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.dacPad === xt.dacPad))), u("dacPadRow").hidden = !i || !(xt.lights === "dac" || Object.values(xt.lightStyles).includes("dac"));
    for (const R of t.querySelectorAll("[data-source]")) {
      if (R === n.activeElement) continue;
      const [ie] = N.find(([V]) => V === R.dataset.source), G = Object.keys(v).filter(N.find(([V]) => V === ie)[3]).sort((V, le) => Ie(V).localeCompare(Ie(le)));
      R.dataset.sig !== G.join(",") && (R.innerHTML = '<option value="">Automatic</option>' + G.map((V) => '<option value="' + pe(V) + '">' + pe(Ie(V)) + "</option>").join(""), R.dataset.sig = G.join(",")), R.value = G.includes((C = T.sources) == null ? void 0 : C[ie]) ? T.sources[ie] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((R) => {
      const ie = !(T.hiddenSums || []).includes(R.dataset.sumToggle);
      R.classList.toggle("on", ie), R.setAttribute("aria-checked", String(ie));
    });
    const d = u("lightRows");
    if (!d || d.contains(n.activeElement)) return;
    const f = new Set(Va()), D = (R, ie, G, V) => '<option value="' + R + '"' + (R === G ? " selected" : "") + (V ? " disabled" : "") + ">" + ie + "</option>", y = Object.keys(v).filter((R) => R.startsWith("light.")).sort((R, ie) => !Pe.get(R) - !Pe.get(ie) || (Pe.get(R) || "").localeCompare(Pe.get(ie) || "") || Ie(R).localeCompare(Ie(ie))).map((R) => {
      const ie = xt.lightStyles[R] || "", G = xt.lightPads[R] || "", V = f.has(R), le = pe(Ie(R));
      return "<tr><td><strong>" + le + "</strong></td><td>" + pe(Pe.get(R) || "—") + "</td><td>" + pe(Pt(R)) + '</td><td class="metaSwitchCol"><button class="switch' + (V ? " on" : "") + '" type="button" role="switch" aria-checked="' + V + '" data-light-fav="' + pe(R) + '" aria-label="' + le + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + pe(R) + '" aria-label="' + le + ' tile">' + D("", "Default", ie) + D("tile", "HomeCore tile", ie) + D("dac", "Dual Axis Controller", ie, !i) + '</select></td><td><select class="settingsSelect" data-light-pad="' + pe(R) + '" aria-label="' + le + ' pad"' + (io(R) ? "" : " disabled") + ">" + D("", "Default", G) + D("temperature", "Temperature", G) + D("colour", "Colour", G) + "</select></td></tr>";
    }).join("");
    d.dataset.html !== y && (d.innerHTML = y, d.dataset.html = y);
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, m.appendChild(q);
  let K = 0;
  function F() {
    if (!L) return;
    const t = u("homeView"), i = (D) => D.offsetParent !== null && !D.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((D) => {
      i(D) && (D.dataset.h = Math.round(D.getBoundingClientRect().height) + " px");
    });
    const l = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(i), d = window.innerHeight, f = l.filter((D) => {
      const y = D.getBoundingClientRect();
      return y.height > 0 && y.top >= 0 && y.bottom <= d + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + f + "</b><small>of " + l.length + " readings on screen</small>";
  }
  const Y = () => {
    L && requestAnimationFrame(F);
  };
  function ae() {
    var t;
    m.classList.toggle("showDensity", L), (t = u("densityToggle")) == null || t.classList.toggle("on", L), q.hidden = !L, clearInterval(K), L && (K = setInterval(F, 1e3), F());
  }
  window.addEventListener("scroll", Y, { capture: !0, passive: !0 }), window.addEventListener("resize", Y, { passive: !0 });
  const A = n.querySelector("#homeView .grid");
  let W = null, fe = null, Te = null, g = null;
  const ke = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let T = { favourites: null }, re = {}, $ = {}, ee = [], oe = null;
  const de = (() => {
    try {
      return JSON.parse(Ao.get(Kd)) || {};
    } catch {
      return {};
    }
  })();
  let Pe = /* @__PURE__ */ new Map(), tt = 0;
  function Bt() {
    clearTimeout(tt), tt = setTimeout(() => Promise.resolve(I({ type: "frontend/set_user_data", key: Zd, value: T })).catch(() => {
    }), 400);
  }
  const xt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ao.get($d)) || {};
    } catch {
    }
    const i = (l, d) => Object.fromEntries(Object.entries(l || {}).filter(([, f]) => d.includes(f)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: i(t.lightStyles, ["tile", "dac"]),
      lightPads: i(t.lightPads, ["temperature", "colour"])
    };
  })(), pa = () => Ao.set($d, JSON.stringify(xt)), Ma = () => {
    m.dataset.more = xt.more, bi();
  };
  w && ne && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + ym.map(([t, i]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (xt.more === t) + '" data-more-style="' + t + '">' + i + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const i = t.target.closest("[data-more-style]");
    i && (xt.more = i.dataset.moreStyle, pa(), Ma(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === i))));
  })), J();
  let _e = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ot = /* @__PURE__ */ new Map();
  let en = "";
  const Ia = w ? Eu({ onChange: () => Gt() }) : null;
  w && m.classList.add("house");
  const Wt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let gn = null, ct = null, nt = !1;
  function dt(t) {
    const i = Io();
    if (m.classList.toggle("houseBento", !!i), gn && (ct !== i || t == null) && (gn.destroy(), gn = null), !i || t == null) {
      Wt.remove();
      return;
    }
    Wt.isConnected || A.append(Wt), Wt.style.order = t, !gn && !nt && (gn = Fd(Wt, { getHass: o, entityId: i, style: "bitmap" }), ct = i);
  }
  const Do = [["wx", ["current"]], ["avg", ["compared_to_average"]]], Ha = Object.fromEntries(Do.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let pn = null, yn = null;
  function ut(t) {
    const i = Io();
    pn && yn !== i && (pn.forEach((l) => l.destroy()), pn = null), Object.values(Ha).forEach((l) => i ? !l.isConnected && A.append(l) : l.remove()), i && !pn && !nt && (pn = Do.map(([l, d]) => Fd(Ha[l], { getHass: o, entityId: i, style: "bitmap", cards: d, onOpen: l === "wx" ? () => tr("weather") : void 0 })), yn = i);
  }
  const it = (t) => {
    var i;
    return ((i = v[t]) == null ? void 0 : i.attributes) || {};
  }, Ie = (t) => it(t).friendly_name || t, Ft = (t, i) => Ii(t) || (Number(it(t).supported_features) & i) === i, Mt = (t) => {
    const i = String(t ?? "").replace(/_/g, " ");
    return i.charAt(0).toUpperCase() + i.slice(1);
  }, mt = (t, i = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: i, maximumFractionDigits: i }), Rn = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ge = (t) => it(t).supported_color_modes || [], zi = (t) => {
    const i = t / 100;
    return [i <= 66 ? 255 : 329.7 * Math.pow(i - 60, -0.1332), i <= 66 ? 99.47 * Math.log(i) - 161.12 : 288.12 * Math.pow(i - 60, -0.0755), i >= 66 ? 255 : i <= 19 ? 0 : 138.52 * Math.log(i - 10) - 305.04];
  }, Ro = (t, i) => [5, 3, 1].map((l) => {
    const d = (l + t / 60) % 6;
    return 255 * (1 - i / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function Nn(t) {
    const i = it(t), l = (i.rgb_color || (i.hs_color && i.color_mode !== "color_temp" ? Ro(...i.hs_color) : i.color_temp_kelvin ? zi(i.color_temp_kelvin) : [255, 170, 0])).map((f) => Math.round(Math.max(0, Math.min(255, f)))), d = (0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]) / 255 > 0.8;
    return "--light:rgb(" + l.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Ee = (t) => {
    var i;
    return t.startsWith("light.") && ((i = v[t]) == null ? void 0 : i.state) === "on" ? ' data-light style="' + Nn(t) + '"' : "";
  }, ze = (t) => {
    const i = Ge(t);
    return i.length ? i.some((l) => l !== "onoff") : it(t).brightness != null;
  }, zt = (t) => [it(t).min_color_temp_kelvin || 2e3, it(t).max_color_temp_kelvin || 6500], Bn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function vn(t) {
    const i = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (i < 10) return "Just now";
    if (i < 60) return i + " seconds ago";
    const l = Math.round(i / 60);
    if (l < 60) return l + (l === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(l / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const f = Math.round(d / 24);
    return f + (f === 1 ? " day ago" : " days ago");
  }
  const Ct = (t) => {
    var i;
    return it(t).current_position ?? (((i = v[t]) == null ? void 0 : i.state) === "closed" ? 0 : 100);
  }, Jn = (t) => {
    var i;
    return hn("pos", t, ((i = b.get(t)) == null ? void 0 : i.pos) ?? Ct(t));
  }, Ot = (t) => {
    var i;
    return hn("tilt", t, ((i = b.get(t)) == null ? void 0 : i.tilt) ?? it(t).current_tilt_position);
  };
  function Pt(t) {
    var y;
    const i = v[t];
    if (!i) return "Not found";
    if (i.state === "unavailable") return "Unavailable";
    const l = i.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (i.state !== "on") return "Off";
      const C = l.color_temp_kelvin;
      return (ze(t) ? Rn(i) + "%" : "On") + (l.color_mode === "color_temp" && C ? " · " + Number(C).toLocaleString() + "k" : pl.includes(l.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (i.state === "off" ? "Off" : Mt(l.hvac_action || i.state)) + " · " + mt(l.current_temperature) + " °C now";
    if (d === "cover") {
      const C = Ct(t), R = l.current_tilt_position;
      return i.state === "opening" || i.state === "closing" ? Mt(i.state) + " - " + C + "%" : (C <= 0 ? "Closed" : C >= 100 ? "Open" : "Partially open") + (R > 0 && R < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return i.state !== "on" ? "Off" : Mt(l.action || "on") + " · " + l.current_humidity + "% now";
    if (d === "vacuum") return Mt(i.state) + (i.state === "cleaning" && ((y = l.rooms) != null && y.length) ? " · " + l.rooms.join(", ") : "") + (l.battery_level != null ? " · " + l.battery_level + "%" : "");
    if (d === "media_player") return i.state === "playing" || i.state === "paused" ? (i.state === "paused" ? "Paused · " : "") + (l.media_title || "Playing") : Mt(i.state);
    if (d === "alarm_control_panel") return Xd[i.state] || Mt(i.state);
    if (d === "lock" || d === "valve") return Mt(i.state);
    if (d === "switch") return i.state === "on" ? "On" : "Off";
    if (d === "plant") return i.state === "ok" ? "Healthy" : Mt(l.problem);
    if (d === "binary_sensor")
      return l.device_class === "moisture" ? i.state === "on" ? "Wet" : "Dry" : ml.includes(l.device_class) ? i.state === "on" ? "Open" : "Closed" : i.state === "on" ? "Detected" : "Clear";
    if (l.rang) return "Rang at " + Bn(l.rang);
    const f = o();
    if (f != null && f.formatEntityState && !Ii(t))
      try {
        return f.formatEntityState(i);
      } catch {
      }
    const D = Number(i.state);
    if (i.state !== "" && Number.isFinite(D)) {
      const C = Math.abs(D) >= 100 ? 0 : Math.abs(D) >= 10 ? 1 : 2, R = l.unit_of_measurement ? l.unit_of_measurement === "%" ? "%" : " " + l.unit_of_measurement : "";
      return D.toLocaleString(void 0, { maximumFractionDigits: C }) + R + (l.plant_low ? " · Low" : l.plant_high ? " · High" : "");
    }
    return Mt(i.state);
  }
  const Fa = (t) => t >= 1e3 ? mt(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function mn(t) {
    const i = o();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var D;
      const d = v[l.dataset.iconFor], f = l.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !f) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (l.textContent = "", y = document.createElement("ha-state-icon"), l.appendChild(y)), y.hass = i, y.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-icon") && (l.textContent = "", y = document.createElement("ha-icon"), l.appendChild(y)), y.icon = f || ((D = d == null ? void 0 : d.attributes) == null ? void 0 : D.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || Ie(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Tt = (t, i, l) => ' data-icon-for="' + pe(t) + '"' + (i ? ' data-icon-name="' + pe(i) + '"' : "") + (l ? ' data-letter="' + pe(l) + '"' : ""), kn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : it(t).rang ? "mdi:doorbell" : "", gt = (t, i, l, d) => pe([t, i, l, d ? JSON.stringify(d) : ""].join("|")), Pn = (t) => pe(JSON.stringify(t));
  function qt(t, i) {
    var f, D;
    const l = pe(Ie(i) + ", " + Pt(i));
    return '<div class="activityRow' + (Number.isFinite(Number((f = v[i]) == null ? void 0 : f.state)) && ((D = v[i]) == null ? void 0 : D.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + pe(t + "|" + i) + '" aria-label="' + l + '. Show the last 24 hours"' : '" aria-label="' + l + '"') + '><div class="tfIcon" aria-hidden="true"' + Tt(i, kn(i)) + '></div><div><div class="activityRowName">' + pe(Ie(i)) + '</div><div class="activityRowMeta">' + pe(Pt(i)) + "</div></div></div>";
  }
  const No = (t, i, l) => '<div class="activityRow" aria-label="' + pe(t + ", " + i) + '"><div class="tfIcon" aria-hidden="true"' + Tt("", l, t) + '></div><div><div class="activityRowName">' + pe(t) + '</div><div class="activityRowMeta">' + pe(i) + "</div></div></div>";
  function Oa(t) {
    var l;
    const i = ((l = v[t]) == null ? void 0 : l.state) === "on";
    return '<div class="activityRow tfPlug' + (i ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + gt("switch", "toggle", t) + '" aria-label="Turn ' + pe(Ie(t)) + (i ? " off" : " on") + '"' + Tt(t) + '></button><div><div class="activityRowName">' + pe(Ie(t)) + '</div><div class="activityRowMeta">' + pe(Pt(t)) + "</div></div></div>";
  }
  const Xn = (t) => {
    var i;
    return ((i = Ce.get(t)) == null ? void 0 : i.name) ?? Ie(t);
  }, Wa = (t) => {
    var i;
    return ((i = Ce.get(t)) == null ? void 0 : i.text) ?? Pt(t);
  };
  function S(t) {
    var l;
    const i = (l = Ce.get(t)) == null ? void 0 : l.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (i ? Tt("", i, Xn(t)) : Tt(t, kn(t))) + '></div><div><div class="activityRowName">' + pe(Xn(t)) + '</div><div class="activityRowMeta">' + pe(Wa(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + pe(Xn(t)) + '’s last 24 hours">' + cl + '</button></div><svg class="tfGraph" data-graph="' + pe(t) + '" role="img" aria-label="' + pe(Xn(t)) + ', last 24 hours"></svg></div>';
  }
  function E(t, i, l, d, f = "", D = null, y = "") {
    const C = W && W.key === t;
    return '<section class="card tfCard' + (y ? " " + y : "") + (C ? " open" : "") + '" data-tf data-k="' + pe(t) + '" style="order:' + i + (C && W.h ? ";min-height:" + W.h + "px" : "") + '" aria-label="' + pe(l) + '"><div class="activityHeader">' + (D ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + pe(D) + '" aria-label="' + pe(l + ", " + Pt(D) + ". More info") + '">' + pe(l) + "</button>" : '<div class="activityTitle">' + pe(l) + "</div>") + "</div>" + (C ? S(W.id) : '<div class="activityRows">' + d.join("") + "</div>" + f) + "</section>";
  }
  function H(t, i) {
    const l = "readings:" + t.id, d = t.readings.map((f) => qt(l, f));
    return t.power != null && d.push(No("Power now", Fa(t.power), "mdi:flash")), E(l, i, "Readings", d.concat(t.plugs.map(Oa)));
  }
  function O(t, i) {
    var C;
    const l = "energy:" + t.id, [d, f] = [t.solar.find((R) => R.endsWith("_power")), t.solar.find((R) => R.endsWith("_today"))], D = [d, f].filter(Boolean).map((R) => qt(l, R)), y = Number(((C = v[d]) == null ? void 0 : C.state) || 0) * 1e3;
    return _e.grid && (D.push(qt(l, _e.grid)), D.push(No("House use", Fa(y + Number(v[_e.grid].state)), "mdi:home-lightning-bolt"))), E(l, i, "Energy", D, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ue = (t, i) => E("plant:" + t.id, i, Ie(t.id), t.readings.map((l) => qt("plant:" + t.id, l)), "", t.id), be = (t) => E("openings", t, "Doors and windows", _e.security.openings.map((i) => qt("openings", i)));
  function me(t, i, l, d, f, D, y = null) {
    const C = l == null ? null : Math.max(0, Math.min(1, l)), R = C == null ? 0 : Math.round(C * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + pe(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + R + '"' + (f ? ' aria-valuetext="' + pe(f) + '"' : "") + ' data-drag="' + pe(t + "|" + i) + '">' + (y != null ? '<span class="was" aria-hidden="true" style="left:' + y + '%"></span>' : "") + (D ? C == null ? "" : '<b style="left:' + R + '%"></b>' : '<i style="width:' + R + '%"></i>') + "</div>";
  }
  const xe = "move-assistant-house-last-bright", ce = (() => {
    try {
      return JSON.parse(Ao.get(xe)) || {};
    } catch {
      return {};
    }
  })();
  let De = 0;
  const je = (t, i) => {
    !i || ce[t] === i || (ce[t] = i, clearTimeout(De), De = setTimeout(() => Ao.set(xe, JSON.stringify(ce)), 500));
  }, Ye = (t, i, l, d) => '<div class="tfStep" role="group" aria-label="' + pe(t) + '"><button type="button" data-act="' + l + '" aria-label="Lower ' + pe(t.toLowerCase()) + '">−</button><output>' + pe(i) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + pe(t.toLowerCase()) + '">+</button></div>', qe = (t, i, l) => '<div class="' + t + '" role="group" aria-label="' + pe(i) + '">' + l.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + pe(d.aria) + '"' : "") + ">" + (d.html || pe(d.label)) + "</button>").join("") + "</div>", Re = (t, i) => "width:" + Math.round(Math.max(0, Math.min(1, (t - i * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * i / 3).toFixed(2), Fe = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", Be = (t, i) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + pe(Ie(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-blocks="' + pe(t) + '">' + [0, 1, 2, 3].map((l) => '<span><i style="' + Re(i, l) + '"></i><b' + (i >= (l + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (l + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Fe(i) + '">' + Math.round(i) + "%</output></div>";
  function Qe(t, i) {
    t.querySelectorAll(":scope>span").forEach((d, f) => {
      d.firstElementChild.setAttribute("style", Re(i, f)), d.lastElementChild.classList.toggle("lit", i >= (f + 1) * 25 - 12);
    });
    const l = t.querySelector(".tfTip");
    l.setAttribute("style", Fe(i)), l.textContent = Math.round(i) + "%", t.setAttribute("aria-valuenow", String(Math.round(i))), t.setAttribute("aria-valuetext", Math.round(i) + "% open");
  }
  const pt = (t, i) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + pe(Ie(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-drag="tilt|' + pe(t) + '"><i style="width:calc((100% - 6px) * ' + i / 100 + ')"></i><span' + (i > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (i > 92 ? ' class="lit"' : "") + ">Open</span></div>", Lt = (t, i, l) => '<div class="tfCoverBtns" role="group" aria-label="' + pe(Ie(t)) + '">' + [
    Ft(t, hm) && ["open", "Open", "open_cover", i >= 100 && !l],
    Ft(t, gm) && ["stop", "Stop", "stop_cover", !1],
    Ft(t, fm) && ["close", "Close", "close_cover", i <= 0 && !l]
  ].filter(Boolean).map(([d, f, D, y]) => '<button type="button" data-act="' + gt("cover", D, t) + '" aria-label="' + f + '"' + (y ? " disabled" : "") + ">" + vm[d] + "</button>").join("") + "</div>", vt = (t, i) => '<button class="tfIcon' + (i.art ? " art" : "") + '" type="button" data-act="' + i.button.act + '" aria-label="' + pe(i.button.label) + '"' + (i.art ? ' style="background-image:url(&quot;' + pe(i.art) + '&quot;)"' : Tt(t, i.icon)) + "></button>", jt = (t) => '<button class="tfName" type="button" data-more="' + pe(t) + '" aria-label="' + pe(Ie(t) + ", " + Pt(t) + ". More info") + '"><span class="activityRowName">' + pe(Ie(t)) + '</span><span class="activityRowMeta">' + pe(Pt(t)) + "</span></button>";
  function tn(t, i = !1, l = null) {
    if (t.startsWith("light.") && io(t)) return '<div class="tfDac" data-k="' + pe(t) + '" data-dac="' + (i ? "more:" : l ? "dash:" : "tile:") + pe(t) + '"></div>';
    const d = Mn(t), f = l || (i && t.startsWith("light.") ? ["bright"] : null), D = d.sections.map((y, C) => y && (!f || f.includes((d.parts || [])[C])) ? y : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + pe(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Ee(t) + '><div class="tfActionHead">' + vt(t, d) + jt(t) + "</div>" + D.join("") + "</div>";
  }
  const rn = "dual-controller-v3", Kt = /* @__PURE__ */ new Map();
  function io(t) {
    return (xt.lightStyles[t] || xt.lights) === "dac" && !!customElements.get(rn);
  }
  const qn = (t) => xt.lightPads[t] || xt.dacPad, ro = () => {
    const t = o();
    return t && { ...t, themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") } };
  }, so = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}";
  function Vn(t) {
    t.querySelectorAll("[data-dac]").forEach((i) => {
      const l = i.dataset.dac, d = l.startsWith("dash:");
      let f = Kt.get(l);
      if (!f) {
        const D = l.slice(l.indexOf(":") + 1);
        f = document.createElement(rn), f.setConfig({ type: "custom:" + rn, entity: D, pad: qn(D), ...d ? { tap_action: { action: "none" } } : {} }), Kt.set(l, f);
      }
      f.hass = ro(), d && f.shadowRoot && !f.shadowRoot.querySelector("style[data-tf-fit]") && (f.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: so })).dataset.tfFit = ""), f.parentNode !== i && i.replaceChildren(f);
    });
  }
  function ht() {
    const t = ro();
    Kt.forEach((i, l) => {
      i.isConnected ? i.hass = t : Kt.delete(l);
    });
  }
  customElements.whenDefined(rn).then(() => {
    w && (A != null && A.querySelector("[data-tf]")) && aa(Sn);
  });
  const hn = (t, i, l) => We.has(t + "|" + i) ? We.get(t + "|" + i) : l;
  function Mn(t) {
    var D;
    const i = v[t], l = i.attributes, d = t.split(".")[0], f = (y, C) => ({ act: gt(y, "toggle", t), label: C });
    if (d === "light") {
      const y = i.state === "on", C = Ge(t), [R, ie] = zt(t), G = hn("bright", t, Rn(i));
      y && je(t, Rn(i));
      const V = hn("ct", t, y && l.color_mode === "color_temp" ? l.color_temp_kelvin : null), le = hn("hue", t, y && pl.includes(l.color_mode) && l.hs_color ? l.hs_color[0] : null);
      return { on: y, button: f("light", "Turn " + Ie(t) + (y ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ze(t) && me("bright", t, G / 100, Ie(t) + " brightness", G + "%", !1, y ? null : ce[t] ?? null),
        C.includes("color_temp") && me("ct", t, V == null ? null : (V - R) / (ie - R), Ie(t) + " warm to cool", V == null ? "" : Math.round(V) + " kelvin", !0),
        C.some((Se) => pl.includes(Se)) && me("hue", t, le == null ? null : le / 360, Ie(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const y = l.target_temp_step || 0.5, C = Number(l.temperature);
      return { on: i.state !== "off", tone: i.state === "cool" || l.hvac_action === "cooling" ? "cool" : "heat", button: f("climate", "Turn " + Ie(t) + (i.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(C) && Ye("Target temperature", mt(C) + " °C", gt("climate", "set_temperature", t, { temperature: C - y }), gt("climate", "set_temperature", t, { temperature: C + y })),
        qe("tfSeg", "Mode", (l.hvac_modes || []).map((R) => ({ label: Mt(R), act: gt("climate", "set_hvac_mode", t, { hvac_mode: R }), pressed: i.state === R })))
      ] };
    }
    if (d === "cover") {
      const y = i.state === "opening" || i.state === "closing", C = i.state === "closed", R = Jn(t), ie = Ot(t);
      return { on: !C, tone: "blue", icon: bm[dl(i)][C ? 1 : 0], button: f("cover", (C ? "Open " : "Close ") + Ie(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ft(t, Yd) && Be(t, R),
        ie != null && pt(t, ie),
        Lt(t, R, y)
      ] };
    }
    if (d === "humidifier") {
      const y = Number(l.humidity);
      return { on: i.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: f("humidifier", "Turn " + Ie(t) + (i.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(y) && Ye("Target humidity", y + "%", gt("humidifier", "set_humidity", t, { humidity: y - 1 }), gt("humidifier", "set_humidity", t, { humidity: y + 1 })),
        ((D = l.available_modes) == null ? void 0 : D.length) && qe("tfSeg", "Mode", l.available_modes.map((C) => ({ label: Mt(C), act: gt("humidifier", "set_mode", t, { mode: C }), pressed: l.mode === C })))
      ] };
    }
    if (d === "media_player") {
      const y = i.state === "playing", C = i.state === "off" || i.state === "standby", R = hn("vol", t, l.volume_level), ie = C ? { act: gt("media_player", Ft(t, pm) ? "turn_on" : "toggle", t), label: "Turn " + Ie(t) + " on" } : i.state === "playing" || i.state === "paused" ? { act: gt("media_player", "media_play_pause", t), label: (y ? "Pause " : "Play ") + Ie(t) } : { act: gt("media_player", Ft(t, mm) ? "turn_off" : "toggle", t), label: "Turn " + Ie(t) + " off" };
      return { on: !C, tone: "blue", art: !C && l.entity_picture ? l.entity_picture : null, button: ie, parts: ["playback", "volume"], sections: C ? [] : [
        (Ft(t, jd) || Ft(t, Gd) || Ft(t, zd) || Ft(t, Ud)) && qe("tfSeg", "Playback", [
          { html: ls.prev, aria: "Previous", act: gt("media_player", "media_previous_track", t), disabled: !Ft(t, jd) },
          { html: y ? ls.pause : ls.play, aria: y ? "Pause" : "Play", act: gt("media_player", "media_play_pause", t), disabled: !(Ft(t, zd) || Ft(t, Ud)) },
          { html: ls.next, aria: "Next", act: gt("media_player", "media_next_track", t), disabled: !Ft(t, Gd) }
        ]),
        Ft(t, um) && R != null && me("vol", t, R, Ie(t) + " volume", Math.round(R * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const y = i.state === "cleaning", C = l.rooms || [], R = (G) => C.includes(G) ? C.filter((V) => V !== G) : C.concat(G), ie = gt("vacuum", y ? "pause" : "start", t, Ii(t) ? { rooms: C } : null);
      return { on: y || i.state === "returning", tone: "blue", button: { act: ie, label: (y ? "Pause " : "Start ") + Ie(t) }, parts: ["controls", "rooms"], sections: [
        qe("tfSeg", Ie(t), [
          { label: y ? "Pause" : "Start", act: ie },
          { label: "Dock", act: gt("vacuum", "return_to_base", t), disabled: i.state === "docked" },
          { label: "Locate", act: gt("vacuum", "locate", t) }
        ]),
        Ii(t) && qe("tfChips", "Rooms to clean", _e.rooms.filter((G) => G.id !== "balcony").map((G) => ({ label: G.name, act: gt("vacuum", "set_rooms", t, { rooms: R(G.name) }), pressed: C.includes(G.name) })))
      ] };
    }
    if (d === "lock") {
      const y = i.state === "locked";
      return { on: !y, tone: "heat", button: { act: gt("lock", y ? "unlock" : "lock", t), label: (y ? "Unlock " : "Lock ") + Ie(t) }, parts: ["controls"], sections: [
        qe("tfSeg", Ie(t), [
          { label: "Lock", act: gt("lock", "lock", t), pressed: y },
          { label: "Unlock", act: gt("lock", "unlock", t), pressed: i.state === "unlocked" },
          Ft(t, Lm) && { label: "Open", act: gt("lock", "open", t), pressed: i.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const y = i.state === "disarmed";
      return { on: !y, tone: i.state === "triggered" ? "alarm" : "blue", button: { act: gt("alarm_control_panel", y ? "alarm_arm_away" : "alarm_disarm", t), label: y ? "Arm " + Ie(t) + ", away" : "Disarm " + Ie(t) }, parts: ["controls"], sections: [
        qe("tfSeg", Ie(t), _m.filter(([, , , C]) => !C || Ft(t, C)).map(([C, R, ie]) => ({ label: R, act: gt("alarm_control_panel", ie, t), pressed: i.state === C })))
      ] };
    }
    if (d === "valve") {
      const y = i.state === "open";
      return { on: y, tone: "blue", icon: "mdi:sprinkler-variant", button: f("valve", (y ? "Close " : "Open ") + Ie(t)), parts: ["controls"], sections: [
        qe("tfSeg", Ie(t), [
          { label: "Open", act: gt("valve", "open_valve", t), pressed: y },
          { label: "Close", act: gt("valve", "close_valve", t), pressed: !y }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Ie(t) }, sections: [] };
  }
  const bn = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : mt(t)) + "°";
  function Qn(t) {
    const i = (he) => t.readings.find((X) => it(X).device_class === he), l = i("temperature"), d = i("humidity"), f = (he) => {
      var X;
      return Number((X = v[he]) == null ? void 0 : X.state);
    }, D = (he) => t.actions.filter((X) => he.test(X)), y = t.lights.filter((he) => {
      var X;
      return ((X = v[he]) == null ? void 0 : X.state) === "on";
    }), C = D(/^cover\./), R = C.filter((he) => {
      var X;
      return ((X = v[he]) == null ? void 0 : X.state) !== "closed";
    }), ie = [...new Set(C.map((he) => dl(v[he])))], G = D(/^climate\./)[0], V = D(/^humidifier\./)[0], le = D(/^media_player\./), Se = le.find((he) => {
      var X;
      return ((X = v[he]) == null ? void 0 : X.state) === "playing";
    }) || le.find((he) => {
      var X;
      return ((X = v[he]) == null ? void 0 : X.state) === "paused";
    }), He = t.plugs.filter((he) => {
      var X;
      return ((X = v[he]) == null ? void 0 : X.state) === "on";
    }), ge = [];
    if (l && Number.isFinite(f(l)) && ge.push({ key: "temp", id: l, kind: "reading", icon: Na.temp, label: "Temperature", value: mt(f(l)) + "°" }), d && Number.isFinite(f(d)) && ge.push({ key: "hum", id: d, kind: "reading", icon: Na.hum, label: "Humidity", value: Math.round(f(d)) + "%" }), t.lights.length && ge.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Na.lights,
      label: "Lights",
      value: y.length ? y.length + " of " + t.lights.length + " on" : "All off",
      short: y.length ? y.length + " on" : "Off",
      on: y.length > 0,
      light: y.length ? Nn(y[0]) : "",
      acts: t.lights.map((he) => ["light", y.length ? "turn_off" : "turn_on", he]),
      aria: (y.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), C.length) {
      const he = ie.length === 1 ? wm[ie[0]] : "covers", X = Math.round(C.reduce((rt, Ut) => rt + Ct(Ut), 0) / C.length);
      ge.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Na.covers,
        label: Mt(he),
        value: X <= 0 ? "Closed" : X >= 100 ? "Open" : X + "% open",
        short: X <= 0 ? "Closed" : X + "%",
        on: R.length > 0,
        acts: C.map((rt) => ["cover", R.length ? "close_cover" : "open_cover", rt]),
        aria: (R.length ? "Close the " : "Open the ") + he + " in " + t.name
      });
    }
    if (G) {
      const he = it(G), X = v[G].state === "off";
      ge.push({
        key: "climate",
        kind: "control",
        tone: he.hvac_action === "cooling" ? "cool" : "heat",
        icon: Na.climate,
        label: Ie(G),
        value: X ? "Off" : Mt(he.hvac_action || v[G].state) + " · " + bn(he.temperature),
        short: X ? "Off" : bn(he.temperature),
        on: !X,
        acts: [["climate", "toggle", G]],
        aria: "Turn " + Ie(G) + (X ? " on" : " off")
      });
    }
    if (V) {
      const he = v[V].state === "on";
      ge.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Na.humidifier,
        label: Ie(V),
        value: he ? "On · " + it(V).humidity + "%" : "Off",
        short: he ? it(V).humidity + "%" : "Off",
        on: he,
        acts: [["humidifier", "toggle", V]],
        aria: "Turn " + Ie(V) + (he ? " off" : " on")
      });
    }
    if (le.length) {
      const he = Se || le[0], X = v[he], rt = X.state === "playing";
      ge.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Na.media,
        label: Ie(he),
        value: Pt(he),
        short: rt ? "Playing" : X.state === "paused" ? "Paused" : Mt(X.state),
        on: rt,
        acts: [["media_player", X.state === "playing" || X.state === "paused" ? "media_play_pause" : "toggle", he]],
        aria: (rt ? "Pause " : "Play ") + Ie(he)
      });
    }
    return t.plugs.length && ge.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Na.plugs,
      label: "Plugs",
      value: He.length ? He.length + " of " + t.plugs.length + " on" : "All off",
      short: He.length ? He.length + " on" : "Off",
      on: He.length > 0,
      acts: t.plugs.map((he) => ["switch", He.length ? "turn_off" : "turn_on", he]),
      aria: (He.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((he) => ge.push(it(he).device_class === "moisture" ? { key: "alert:" + he, kind: "alert", icon: Na.alert, label: "Water leak" } : { key: "note:" + he, kind: "note", icon: Na.door, label: Ie(he) + " " + Pt(he).toLowerCase() })), ge;
  }
  const lo = (t, i) => {
    const l = (d) => t.actions.filter((f) => d.test(f));
    return {
      lights: t.lights,
      covers: l(/^cover\./),
      climate: l(/^climate\./).slice(0, 1),
      humidifier: l(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = l(/^media_player\./);
        return [d.find((f) => {
          var D;
          return ((D = v[f]) == null ? void 0 : D.state) === "playing";
        }) || d.find((f) => {
          var D;
          return ((D = v[f]) == null ? void 0 : D.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[i] || [];
  }, ma = (t, i, l) => '<button class="' + i + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Pn(t.acts) + '" aria-label="' + pe(t.aria) + '" aria-pressed="' + t.on + '">' + l + "</button>", sn = (t) => '<button class="pill" type="button" data-go="' + pe(t.id) + '" aria-label="Go to ' + pe(t.name) + '">Go</button>', Dt = (t) => t.filter((i) => i.kind === "alert" || i.kind === "note").map((i) => '<span class="sourceTag">' + pe(i.label) + "</span>").join(" "), ii = (t) => t.readings.find((i) => it(i).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((i) => v[i]) || null, fn = (t, i) => {
    const l = Ie(i);
    return l.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Mt(l.slice(t.name.length + 1)) : l;
  };
  function ji(t) {
    const i = v[t], l = it(t), d = t.split(".")[0], f = Number(i.state);
    if (i.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(f)) {
      if (l.device_class === "temperature") return { text: bn(f) };
      const D = l.unit_of_measurement || "";
      return D === "%" ? { text: Math.round(f) + "%" } : { text: mt(f, Number.isInteger(f) ? 0 : 1), unit: D };
    }
    if (d === "climate" && (l.current_temperature ?? l.temperature) != null) return { text: bn(l.current_temperature ?? l.temperature) };
    if (d === "light") return { text: i.state !== "on" ? "Off" : ze(t) ? Rn(i) + "%" : "On" };
    if (d === "cover") {
      const D = Ct(t);
      return { text: D <= 0 ? "Closed" : D >= 100 ? "Open" : D + "%" };
    }
    return d === "humidifier" ? { text: i.state === "on" ? l.humidity + "%" : "Off" } : d === "media_player" ? { text: i.state === "playing" ? "Playing" : i.state === "paused" ? "Paused" : Mt(i.state) } : { text: Pt(t) };
  }
  const bs = (t, i, l) => {
    const d = l.find((C) => C.key === "temp"), f = l.find((C) => C.key === "hum"), D = it(i), y = v[i].state === "off";
    return i.startsWith("climate.") ? [fn(t, i), y ? "Off" : Mt(D.hvac_action || v[i].state) + (D.temperature != null ? " · " + bn(D.temperature) : ""), f && f.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === i) && fn(t, i), d && d.id !== i && d.value, f && f.id !== i && f.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Lr(t, i, l) {
    const d = l && ji(l), f = l ? bs(t, l, i) : "", D = (C) => {
      const R = lo(t, C.key);
      return R.length === 1 ? R[0] : "group:" + t.id + ":" + C.key;
    }, y = i.filter((C) => C.kind === "control").slice(0, 4).map((C) => '<div class="tfATile' + (C.on ? " on" : "") + '" data-tone="' + C.tone + '"' + (C.light ? ' data-light style="' + C.light + '"' : "") + ">" + ma(C, "tfIcon", C.icon) + '<button class="tfName" type="button" data-more="' + pe(D(C)) + '" aria-label="' + pe(t.name + " " + C.label.toLowerCase() + ", " + C.value + ". Open") + '"><span class="activityRowName">' + pe(C.label) + '</span><span class="activityRowMeta">' + pe(C.value) + "</span></button></div>");
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + pe(t.name) + "</div>" + Dt(i) + "</div>" + sn(t) + "</div>" + (l ? '<button class="tfABig" type="button" data-more="' + pe(l) + '" aria-label="' + pe(Ie(l) + ", " + Pt(l) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + pe(d.text) + (d.unit ? '<span class="tfABigUnit">' + pe(d.unit) + "</span>" : "") + "</span>" + (f ? '<span class="tfABigSub">' + pe(f) + "</span>" : "") + "</button>" : "") + (y.length ? '<div class="tfATiles">' + y.join("") + "</div>" : "");
  }
  function ri(t) {
    const i = t.id === fe, l = Qn(t), d = ii(t), f = d && ji(d), D = [...l.filter((y) => y.kind === "control"), ...l.filter((y) => y.kind !== "control" && y.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (i ? " active" : "") + '" data-area="' + pe(t.id) + '" tabindex="0" aria-expanded="' + i + '" aria-label="' + pe(t.name) + '"><div class="panelExpanded"' + (i ? "" : " inert") + ">" + Lr(t, l, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop"><span class="tfACMain">' + (f ? pe(f.text + (f.unit ? " " + f.unit : "")) : "") + '</span><span class="tfACName">' + pe(t.name) + '</span></div><span class="tfACTiles" aria-hidden="true">' + D.map((y) => '<span class="tfACTile"><span class="tfIcon' + (y.kind === "alert" ? " alert" : "") + '"' + (y.on && y.light ? ' data-light style="' + y.light + '"' : "") + ">" + y.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let qa = [];
  const _r = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + qa.map(ri).join("") + "</section></div>", Gi = () => [
    { key: "home", name: "Home", ids: _e.homeVacuums },
    { key: "security", name: "Security", ids: [..._e.security.alarms, ..._e.security.locks] },
    ..._e.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Bo = (t, i, l) => t + " " + (t === 1 ? i : l), Va = () => (T.favourites ?? re.favorite_entities ?? []).filter((t) => v[t]);
  function ws(t = 8) {
    const i = Va();
    if (re.hide_suggested_entities) return i;
    if (!oe) {
      const d = Object.entries(de).sort((D, y) => y[1] - D[1]).map(([D]) => D), f = _e.rooms.flatMap((D) => D.actions);
      oe = [.../* @__PURE__ */ new Set([...ee, ...d, ...f.filter((D) => Mn(D).on), ...f])];
    }
    const l = (d) => v[d] && v[d].state !== "unavailable" && !i.includes(d);
    return [...i, ...oe.filter(l)].slice(0, Math.max(t, i.length));
  }
  const xs = (t) => {
    const i = Va().includes(t);
    return '<button class="tfStar" type="button" data-star="' + pe(t) + '" aria-pressed="' + i + '" aria-label="Favourite: ' + pe(Ie(t)) + '">' + Tm(i) + "</button>";
  };
  function Po(t, { area: i = !1, star: l = !1 } = {}) {
    var ie;
    const d = t.split(".")[0], f = ds.includes(d) ? Mn(t) : null, D = f ? f.on : ["on", "open", "playing"].includes((ie = v[t]) == null ? void 0 : ie.state), y = f ? f.button : xm.includes(d) ? { act: gt(d, "toggle", t), label: "Turn " + Ie(t) + (D ? " off" : " on") } : d === "scene" || d === "script" ? { act: gt(d, "turn_on", t), label: "Run " + Ie(t) } : null, C = Pt(t) + (i && Pe.get(t) ? " · " + Pe.get(t) : ""), R = (f == null ? void 0 : f.icon) || kn(t);
    return '<div class="activityRow' + (y ? " tfPlug" : "") + (D ? " on" : "") + (l ? " tfPick" : "") + '" data-k="' + pe((i ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (f == null ? void 0 : f.tone) || "blue") + '"' + Ee(t) + ">" + (y && !l ? '<button class="tfIcon" type="button" data-act="' + y.act + '" aria-label="' + pe(y.label) + '"' + Tt(t, R) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Tt(t, R) + "></div>") + '<button class="tfName" type="button" data-more="' + pe(t) + '" aria-label="' + pe(Ie(t) + ", " + C + ". More info") + '"><span class="activityRowName">' + pe(Ie(t)) + '</span><span class="activityRowMeta">' + pe(C) + "</span></button>" + (l ? xs(t) : "") + "</div>";
  }
  const Io = () => {
    var t;
    return v[(t = T.sources) == null ? void 0 : t.weather] ? T.sources.weather : v["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(v).find((i) => i.startsWith("weather."));
  };
  function ys() {
    var l;
    const t = (d) => Object.keys(v).filter((f) => f.startsWith("binary_sensor.") && d.includes(it(f).device_class));
    return ((l = $.alert_entities) != null && l.length ? $.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(ml).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => v[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(v[d.entity].state) }));
  }
  function Ar() {
    const t = Object.keys(ul), i = /* @__PURE__ */ new Set(), l = [];
    return (re.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || i.has(d.key)) return;
        i.add(d.key);
      }
      l.push(d);
    }), t.forEach((d) => {
      i.has(d) || l.push({ type: "summary", key: d });
    }), l;
  }
  function Ca() {
    var ur;
    const t = _e.rooms, i = _e.security, l = (Ne, bt) => Ne.actions.filter((Ci) => bt.test(Ci)), d = (Ne) => t.map((bt) => ({ name: bt.name, ids: Ne(bt) })).filter((bt) => bt.ids.length), f = t.flatMap((Ne) => Ne.lights), D = f.filter((Ne) => {
      var bt;
      return ((bt = v[Ne]) == null ? void 0 : bt.state) === "on";
    }).length, y = t.map((Ne) => Ne.readings.find((bt) => it(bt).device_class === "temperature")).filter(Boolean).map((Ne) => Number(v[Ne].state)).filter(Number.isFinite), [C, R] = [mt(Math.min(...y)), mt(Math.max(...y))], ie = t.flatMap((Ne) => l(Ne, /^media_player\./)), G = ie.filter((Ne) => {
      var bt;
      return ((bt = v[Ne]) == null ? void 0 : bt.state) === "playing";
    }).length, V = ys(), le = V.filter((Ne) => Ne.severity === "warning" && Ne.on).length, Se = i.locks.filter((Ne) => {
      var bt;
      return ["unlocked", "jammed", "open"].includes((bt = v[Ne]) == null ? void 0 : bt.state);
    }).length, He = i.alarms.filter((Ne) => {
      var bt;
      return ((bt = v[Ne]) == null ? void 0 : bt.state) === "disarmed";
    }).length, ge = le ? Bo(le, "warning", "warnings") : null, he = Se ? Se + " unlocked" : He ? He + " disarmed" : ge ? null : "All secure", X = Object.keys(v).filter((Ne) => Ne.startsWith("sensor.") && it(Ne).device_class === "battery").sort((Ne, bt) => Number(v[Ne].state) - Number(v[bt].state)), rt = [...X.filter((Ne) => Number(v[Ne].state) < 20), ..._e.vacuums.filter((Ne) => it(Ne).battery_level < 20)], Ut = t.flatMap((Ne) => Ne.plants.map((bt) => bt.id)).sort((Ne, bt) => {
      var Ci, pr;
      return (((Ci = v[bt]) == null ? void 0 : Ci.state) === "problem") - (((pr = v[Ne]) == null ? void 0 : pr.state) === "problem");
    }), Yn = Ut.filter((Ne) => {
      var bt;
      return ((bt = v[Ne]) == null ? void 0 : bt.state) === "problem";
    }), dr = t.flatMap((Ne) => Ne.solar), Rs = dr.find((Ne) => Ne.endsWith("_power")), Vr = {
      light: f.length && { value: D ? D + " on" : "All off", groups: d((Ne) => Ne.lights) },
      climate: y.length && { value: C === R ? C + "°" : C + " - " + R + "°", groups: d((Ne) => [...Ne.readings.filter((bt) => ["temperature", "humidity"].includes(it(bt).device_class)), ...l(Ne, /^(climate|humidifier)\./)]) },
      security: (i.alarms.length || i.locks.length) && { value: [ge, he].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...i.alarms, ...i.locks] }, { name: "Doors and windows", ids: i.openings }].filter((Ne) => Ne.ids.length) },
      media_players: ie.length && { value: G ? G + " playing" : "No media playing", groups: d((Ne) => l(Ne, /^media_player\./)) },
      maintenance: (X.length || Ut.length) && { value: [rt.length && Bo(rt.length, "low battery", "low batteries"), Yn.length && Bo(Yn.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: Ut }, { name: "Batteries", ids: [..._e.vacuums, ...X] }].filter((Ne) => Ne.ids.length) },
      energy: _e.grid && { value: Fa(Number(((ur = v[Rs]) == null ? void 0 : ur.state) || 0) * 1e3 + Number(v[_e.grid].state)) + " now", groups: [{ name: "Energy", ids: [...dr, _e.grid] }] }
    }, Mi = [], cr = V.filter((Ne) => Ne.severity !== "warning" && Ne.on);
    return cr.length && Mi.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Bo(cr.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: cr.map((Ne) => Ne.entity) }] }), Ar().forEach((Ne) => {
      Ne.type !== "summary" ? Mi.push({ key: "path:" + Ne.path, name: Ne.label || Ne.path, icon: Ne.icon || "mdi:link-variant", colour: "", value: "" }) : !Ne.hidden && Vr[Ne.key] && !(T.hiddenSums || []).includes(Ne.key) && Mi.push({ key: Ne.key, ...ul[Ne.key], ...Vr[Ne.key] });
    }), Mi;
  }
  const Er = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + pe(t.key) + '" data-k="sum:' + pe(t.key) + '" aria-label="' + pe(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Tt(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + pe(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + pe(t.value) + "</div>" : "") + "</div></div>";
  function si(t) {
    const i = Va();
    T = { ...T, favourites: i.includes(t) ? i.filter((l) => l !== t) : [...i, t] }, Bt(), Gt();
  }
  function Ho(t) {
    document.querySelector("home-assistant") && (ke.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Ui(t, i) {
    if (t.startsWith("path:")) {
      Ho(t.slice(5));
      return;
    }
    if (t === "security") {
      tr("security");
      return;
    }
    ar("summary:" + t, i);
  }
  async function ks() {
    const t = (y) => Promise.resolve().then(() => I(y)).catch(() => null), [i, l, d, f] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Zd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), D = (i == null ? void 0 : i.value) || {};
    T = { favourites: D.favourites ?? null, sources: D.sources, hiddenSums: D.hiddenSums, dash: D.dash }, re = (l == null ? void 0 : l.value) || {}, $ = (d == null ? void 0 : d.value) || {}, ee = Array.isArray(f == null ? void 0 : f.entities) ? f.entities : [], oe = null, Object.keys(v).length && Gt();
  }
  let co = null, Fo = 0, _t = !1;
  const Dr = (t) => {
    const i = t.split(".")[0];
    return Am.includes(i) && (i !== "binary_sensor" || ml.includes(it(t).device_class));
  };
  async function Ms() {
    var t;
    if (!(_t || Date.now() - Fo < 30 * 1e3)) {
      _t = !0, Fo = Date.now();
      try {
        const i = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(Dr), l = i.length ? await I({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: i }) : null;
        co = Array.isArray(l) ? l.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        co = null;
      }
      _t = !1, Gt();
    }
  }
  function Rr() {
    const t = /* @__PURE__ */ new Map(), i = (d) => {
      if (!v[d.entity_id] || !Dr(d.entity_id) || !ci(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const f = t.get(d.entity_id);
      (!f || d.when > f.when + 1) && t.set(d.entity_id, d);
    };
    (co || []).forEach(i);
    const l = co ? Fo / 1e3 - 5 : 0;
    return Object.keys(v).forEach((d) => {
      var y;
      const f = v[d], D = f.last_changed ? Date.parse(f.last_changed) / 1e3 : 0;
      D > l && i({ entity_id: d, state: f.state, when: D, context_user_id: (y = f.context) == null ? void 0 : y.user_id });
    }), [...t.values()].sort((d, f) => f.when - d.when).slice(0, Em);
  }
  function uo(t) {
    var d;
    const i = t.context_user_id && Object.keys(v).find((f) => f.startsWith("person.") && it(f).user_id === t.context_user_id);
    if (i) return Ie(i);
    const l = (d = o()) == null ? void 0 : d.user;
    return l && t.context_user_id === l.id ? l.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Cs(t) {
    const i = t.entity_id.split(".")[0], l = String(t.state);
    return i === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[l] || Mt(l).toLowerCase() : i === "cover" || i === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[l] || Mt(l).toLowerCase() : i === "binary_sensor" ? l === "on" ? "opened" : "closed" : i === "climate" ? l === "off" ? "turned off" : "set to " + Mt(l).toLowerCase() : i === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[l] || Mt(l).toLowerCase() : i === "alarm_control_panel" ? (Xd[l] || Mt(l)).toLowerCase() : i === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[l] || Mt(l).toLowerCase() : l === "on" ? "turned on" : l === "off" ? "turned off" : Mt(l).toLowerCase();
  }
  function Rt(t) {
    const i = t.entity_id, l = Ie(i) + " " + Cs(t), d = [uo(t), Bn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + Tt(i, kn(i)) + '></div><button class="tfName" type="button" data-more="' + pe(i) + '" aria-label="' + pe(l + ", " + d + ". More info") + '"><span class="activityRowName">' + pe(l) + '</span><span class="activityRowMeta">' + pe(d) + "</span></button></div>";
  }
  let In = null, za = 0;
  const Ss = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function li() {
    var i;
    if (Date.now() - za < 5 * 60 * 1e3) return;
    za = Date.now();
    const t = [];
    try {
      const l = ((i = await I({ type: "energy/get_prefs" })) == null ? void 0 : i.energy_sources) || [], d = (f) => l.filter((D) => D.type === f).flatMap((D) => f === "grid" ? (D.flow_from || []).map((y) => y.stat_energy_from) : [D.stat_energy_from]).filter(Boolean);
      for (const [f, D, y] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!y.length) continue;
        const C = await Promise.all(y.map((R) => Promise.resolve(I({ type: "recorder/statistic_during_period", statistic_id: R, calendar: { period: "day" }, types: ["change"] })).then((ie) => Number(ie == null ? void 0 : ie.change) || 0, () => 0)));
        t.push({ key: f, name: D, id: y[0], value: C.reduce((R, ie) => R + ie, 0), unit: it(y[0]).unit_of_measurement || (f === "gas" || f === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    In = t, Gt();
  }
  let ha = null;
  function Oo() {
    var D;
    const t = In != null && In.length ? In : Ss.map(([y, C, R, ie]) => {
      const G = "sensor.made_up_energy_" + y;
      return v[G] = { entity_id: G, state: String(R), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: C + " today", unit_of_measurement: ie, state_class: "total_increasing" } }, { key: y, name: C, id: G, value: R, unit: ie };
    });
    Ce.clear(), t.some((y) => y.id === ha) || (ha = t[0].id);
    const i = t.map((y) => {
      const C = Number(y.value).toLocaleString(void 0, { maximumFractionDigits: y.value < 10 ? 2 : 1 }) + " " + y.unit, R = Dm[y.key], ie = y.id === ha;
      return Ce.set(y.id, { name: y.name, text: C, icon: R }), '<div class="activityRow tap' + (ie ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + pe(y.id) + '" aria-pressed="' + ie + '" aria-label="' + pe(y.name + ", " + C) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Tt("", R, y.name) + '></div><div><div class="activityRowName">' + pe(y.name) + '</div><div class="activityRowMeta">' + pe(C) + "</div></div></div>";
    }), l = t.find((y) => y.id === ha), d = (((D = Cn().opts.energy) == null ? void 0 : D.graph) || "above") === "below", f = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + pe(l.id) + '" role="img" aria-label="' + pe(l.name) + ', last 24 hours"></svg></div>';
    return E("dash:energy", 0, "Energy today", i, f, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function fa(t) {
    const i = A.querySelector(".tfDash-energy"), l = i == null ? void 0 : i.querySelector(".tfDashGraph svg");
    !l || t === ha || (ha = t, i.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const f = d.dataset.energyPick === t;
      d.classList.toggle("picked", f), d.setAttribute("aria-pressed", String(f));
    }), l.dataset.graph = t, l.dataset.drawn = "", ot.set("dash:energy", Oo()), hi(!0));
  }
  function Sa(t) {
    var f;
    if ((f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [i, l] = t.querySelectorAll("path");
    if (!(l != null && l.getTotalLength)) return;
    const d = l.getTotalLength();
    l.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), i == null || i.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let di = null, ga = 0;
  const ci = (t) => !t.startsWith("light.") || Rm.includes((Pe.get(t) || "").toLowerCase()), zn = () => Math.max(2, Za((A == null ? void 0 : A.clientWidth) || 0).n);
  function Nr(t) {
    if (!di) {
      const l = (d) => {
        var f;
        return (((f = v[d]) == null ? void 0 : f.state) === "on" ? 1e6 : 0) + (de[d] || 0);
      };
      di = {
        lights: _e.rooms.flatMap((d) => d.lights).filter((d) => {
          var f;
          return ci(d) && ((f = v[d]) == null ? void 0 : f.state) !== "unavailable";
        }).sort((d, f) => l(f) - l(d) || Ie(d).localeCompare(Ie(f))),
        climates: _e.rooms.flatMap((d) => d.actions.filter((f) => f.startsWith("climate.")))
      };
    }
    const i = di.climates.filter((l) => v[l]).slice(0, t > 3 ? 2 : 1);
    return [...di.lights.filter((l) => v[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const Br = (t, i, l, d) => (f) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + i + '" aria-label="' + l + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + l + "</div></div>" : "") + '<div class="activityRows">' + f + "</div></section>";
  function Yi(t, i) {
    var D, y;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + pe(((y = (D = o()) == null ? void 0 : D.config) == null ? void 0 : y.location_name) || "Home") + "</h1>" }), i.length && t.push({ key: "sums", wrap: (C) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Br("tfDash-bar", "sums-bar", "Summaries", !1)(C).replace(" data-tf", "") + "</div>", tiles: i.map((C) => ({ key: "sum:" + C.key, html: Er(C) })) }), qa.length && t.push({ key: "areas", html: _r(0) });
    const l = ws(Qd * 3).filter(ci).slice(0, Qd);
    l.length && t.push({ key: "favs", wrap: Br("tfDash-favs", "favs", "Favourites", !0), tiles: l.map((C) => ({ key: "fav:" + C, html: Po(C, { area: !0 }) })) });
    const d = Rr();
    t.push({ key: "dash:act", html: E("dash:act", 0, "Activity", d.length ? d.map(Rt) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Oo() });
    const f = zn();
    return ga = f, t.push({
      key: "dash:tiles",
      wrap: (C) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + C + "</div>",
      tiles: Nr(f >= 3 ? f : f * 2).map((C) => ({ key: C, html: tn(C, !1, C.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), Ms(), li(), t;
  }
  const po = 252, Vt = 16, Ts = 230, ja = 60, Ga = ja + Vt, va = 5, Ls = 3, Wo = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Ua = ["wx", "favs", "act", "energy", "avg"], Zi = { wx: va, areas: va, favs: va, act: va, energy: 4, avg: 4 }, ui = 3, qo = 94, Ta = /* @__PURE__ */ new Set(), Ya = (t) => Wo[t] || Ie(t), Ki = 409, ea = 128;
  let nn = !1, an = null, ta = null, La = !1, ba = /* @__PURE__ */ new Map(), mo = 0, _a = 0;
  const pi = ["title", "sums"], Za = (t) => {
    let i = Math.floor((t + Vt) / (po + Vt)), l = po;
    return i < 4 && t >= 4 * Ts + 3 * Vt && (i = 4, l = Math.floor((t - 3 * Vt) / 4)), { n: Math.max(1, i), w: l };
  }, Cn = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...T.dash || {} });
  function Vo(t) {
    T = { ...T, dash: t }, Bt();
  }
  function zo() {
    const t = (i) => A.querySelector(i);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Ha.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Ha.avg, 2],
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((i) => [i.dataset.k, i, 1, !0])
    ].filter(([, i]) => i == null ? void 0 : i.isConnected).map(([i, l, d, f = !1]) => ({ key: i, el: l, span: d, tile: f }));
  }
  const Pr = (t, i, l) => t.span === "full" ? i : t.span === "areas" ? Math.min(i, Math.ceil((Ki + Math.max(0, qa.length - 1) * (ea + Vt) + Vt) / (l + Vt))) : Math.min(i, Cn().spans[t.key] ?? t.span), ln = (t) => Zi[t.key] ?? (t.el.classList.contains("tfDac") ? Ta.has(t.key) ? va : ui : null);
  function ho(t, i, l = null) {
    const d = Cn().cells, f = t.every((C) => !d[C.key] || d[C.key].col + C.cols <= i), D = (C) => d[C.key] || { row: 1e9, col: 0 }, y = () => {
      const C = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), ie = (ge, he, X, rt) => {
        for (let Ut = he; Ut < he + rt; Ut++) for (let Yn = ge; Yn < ge + X; Yn++) if (C.has(Yn + "," + Ut)) return !1;
        return !0;
      }, G = (ge, he, X) => {
        for (let rt = X; rt < X + ge.rows; rt++) for (let Ut = he; Ut < he + ge.cols; Ut++) C.add(Ut + "," + rt);
        R.set(ge.key, { col: he, row: X, cols: ge.cols, rows: ge.rows });
      }, V = (ge, he, X) => {
        for (he = Math.max(0, Math.min(i - ge.cols, he)), X = Math.max(0, X); !ie(he, X, ge.cols, ge.rows); ) X++;
        G(ge, he, X);
      }, le = (ge) => {
        for (let he = 0; ; he++) for (let X = 0; X <= i - ge.cols; X++) if (ie(X, he, ge.cols, ge.rows)) {
          G(ge, X, he);
          return;
        }
      };
      l && V(l, an.col, an.row);
      const Se = t.filter((ge) => ge !== l), He = (ge, he) => D(ge).row - D(he).row || D(ge).col - D(he).col;
      return f ? (Se.filter((ge) => d[ge.key]).sort(He).forEach((ge) => V(ge, d[ge.key].col, d[ge.key].row)), Se.filter((ge) => !d[ge.key]).forEach(le), R) : ([...Se].sort(He).forEach(le), R);
    };
    for (let C = 0; ; C++) {
      const R = y();
      if (C === 3) return R;
      const ie = t.filter((V) => V.tile && !Ta.has(V.key)).map((V) => ({ it: V, p: R.get(V.key) })).sort((V, le) => V.p.row - le.p.row || V.p.col - le.p.col);
      let G = !1;
      for (let V = 0, le; V < ie.length; V = le) {
        for (le = V + 1; le < ie.length && ie[le].p.row === ie[V].p.row && ie[le].p.col === ie[le - 1].p.col + 1; le++) ;
        const Se = ie.slice(V, le), He = Math.max(...Se.map((ge) => ge.it.rows));
        Se.forEach((ge) => {
          ge.it.rows < He && (ge.it.rows = He, G = !0);
        });
      }
      if (!G) return R;
    }
  }
  function fo() {
    const t = Cn(), i = new Set(t.hidden), l = zo().filter((D) => !pi.includes(D.key));
    let d = ba;
    if (!d.size) {
      const D = t.pegs || 4, y = l.filter((C) => !i.has(C.key));
      y.forEach((C) => {
        C.cols = Pr(C, D, po), C.rows = ln(C) ?? 2;
      }), d = ho(y, D);
    }
    const f = (D) => !i.has(D.key) && d.get(D.key) || { row: 1e9, col: 0 };
    l.sort((D, y) => f(D).row - f(y).row || f(D).col - f(y).col).forEach((D, y) => D.el.style.setProperty("--o", String(3 + y)));
  }
  const $i = (t, i) => Vo({ ...t, cells: i, pegs: Za(A.clientWidth).n });
  function jn() {
    var he;
    if (!w || !A) return;
    const t = A.clientWidth, { n: i, w: l } = Za(t), d = m.classList.contains("tfDash") && i >= 2;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && nn);
    const f = u("dashEditNav");
    f && (f.hidden = !d, f.classList.toggle("active", nn), f.setAttribute("aria-pressed", String(nn)), f.setAttribute("aria-label", nn ? "Done editing" : "Edit the dashboard"), f.title = nn ? "Done" : "Edit", f.innerHTML = nn ? Sm : Jd);
    const D = d ? zo() : [];
    if (!d) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((X) => {
        X.classList.remove("tfBoardItem", "tfBoardHidden"), X.style.left = X.style.top = X.style.width = X.style.height = "";
      }), (he = A.querySelector(".tfDash-act > .activityRows")) == null || he.style.removeProperty("max-height"), jo(!1), m.classList.contains("tfDash") && fo();
      return;
    }
    A.style.setProperty("--peg-w", l + "px");
    const y = new Set(Cn().hidden), C = l + Vt;
    D.forEach((X) => X.el.classList.toggle("tfBoardHidden", y.has(X.key)));
    const R = D.filter((X) => !y.has(X.key) && getComputedStyle(X.el).display !== "none");
    let ie = 0;
    R.filter((X) => pi.includes(X.key)).forEach((X) => {
      X.el.classList.add("tfBoardItem"), Object.assign(X.el.style, { width: t + "px", height: "", left: "0px", top: ie + "px" });
      const rt = X.key === "sums" && X.el.querySelector(".tfDash-bar"), Ut = rt ? rt.querySelectorAll(".activityRow").length : 0;
      rt && (rt.style.maxWidth = "none");
      for (let Yn = 1; rt && Yn <= Ut && (rt.style.setProperty("--bar-cols", String(Math.ceil(Ut / Yn))), !(rt.offsetWidth <= t)); Yn++)
        ;
      rt && (rt.style.maxWidth = ""), ie += X.el.offsetHeight + Vt;
    }), _a = ie;
    const G = R.filter((X) => !pi.includes(X.key));
    G.forEach((X) => {
      X.cols = Pr(X, i, l), X.el.classList.add("tfBoardItem"), X.el.style.width = (X.cols === i ? t : X.cols * l + (X.cols - 1) * Vt) + "px", X.el.style.height = "", X.rows = ln(X) ?? Math.max(1, Math.ceil((X.el.offsetHeight + Vt - 6) / Ga));
    });
    const V = an && G.find((X) => X.key === an.key), le = ho(G, i, V);
    le.forEach((X) => Object.assign(X, { x: X.cols === i ? 0 : X.col * C, y: _a + X.row * Ga, w: X.cols === i ? t : X.cols * l + (X.cols - 1) * Vt, h: X.rows * Ga - Vt })), G.forEach((X) => {
      const rt = le.get(X.key);
      X.el.style.height = rt.h + "px", X.el.classList.contains("tfDac") && X.el.style.setProperty("--tf-dac-pad", rt.h - qo + "px"), X !== V && (X.el.style.left = rt.x + "px", X.el.style.top = rt.y + "px");
    }), ba = le;
    const Se = le.get("act"), He = Se && A.querySelector(".tfDash-act > .activityRows");
    He && (He.style.maxHeight = Math.max(ja, Math.floor((Se.h - He.offsetTop - 10) / ja) * ja) + "px"), mo = Math.max(0, ...[...le.values()].map((X) => X.row + X.rows));
    let ge = _a + mo * Ga - Vt;
    ge = jo(nn, G, le, ge, i, l), A.style.height = ge + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), D.forEach((X) => Ji.observe(X.el)), hi();
  }
  const mi = () => {
    La || (La = !0, requestAnimationFrame(() => {
      La = !1, jn();
    }));
  }, Ji = new ResizeObserver(() => {
    an || mi();
  });
  function jo(t, i = [], l = /* @__PURE__ */ new Map(), d = 0, f = 1, D = po) {
    A.querySelectorAll(".tfEditChips").forEach((V) => {
      (!t || !V.closest(".tfBoardItem")) && V.remove();
    }), A.querySelectorAll(".tfBoardItem").forEach((V) => [...V.children].forEach((le) => {
      le.classList.contains("tfEditChips") || le.toggleAttribute("inert", t);
    }));
    let y = A.querySelector(".tfBoardCells"), C = A.querySelector(".tfBoardLand"), R = A.querySelector(".tfBoardTray");
    if (!t)
      return y == null || y.remove(), C == null || C.remove(), R == null || R.remove(), na(), d;
    const ie = mo + Ls;
    if (y || (y = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), y.setAttribute("aria-hidden", "true"), A.prepend(y)), y.style.top = _a + "px", y.dataset.size !== f + "x" + ie + "x" + D && (y.dataset.size = f + "x" + ie + "x" + D, y.style.gridTemplateColumns = "repeat(" + f + "," + D + "px)", y.innerHTML = "<i></i>".repeat(f * ie)), d = Math.max(d, _a + ie * Ga - Vt), i.forEach((V) => {
      const le = V.el;
      !le || le.querySelector(":scope > .tfEditChips") || le.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + km + '</span><button class="tfEditChip" type="button" data-board-more="' + pe(V.key) + '" aria-label="' + pe(Ya(V.key)) + ' options" aria-haspopup="menu">' + Mm + "</button></div>");
    }), an && l.has(an.key)) {
      C || (C = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(C));
      const V = l.get(an.key);
      Object.assign(C.style, { left: V.x + "px", top: V.y + "px", width: V.w + "px", height: V.h + "px" });
    } else C == null || C.remove();
    const G = Cn().hidden.filter((V) => zo().some((le) => le.key === V));
    return G.length ? (R || (R = Object.assign(document.createElement("div"), { className: "tfBoardTray" }), A.appendChild(R)), R.innerHTML = G.map((V) => '<button class="pill" type="button" data-board-show="' + pe(V) + '">Show ' + pe(Ya(V)) + "</button>").join(""), Object.assign(R.style, { top: d + Vt + "px", left: "0px", width: A.clientWidth + "px" }), d + Vt + R.offsetHeight) : (R == null || R.remove(), d);
  }
  function Xi(t) {
    nn = t, t || (an = null, na()), jn();
  }
  function Go(t, i) {
    var G, V;
    na();
    const l = ba.get(t), { n: d } = Za(A.clientWidth), f = Cn(), D = f.spans[t] ?? 2;
    if (!l) return;
    const y = l.cols >= d, C = (le, Se, He) => '<button type="button" role="menuitem" data-board-act="' + le + '"' + (He ? " disabled" : "") + ">" + Se + "</button>", R = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    R.setAttribute("role", "menu"), R.setAttribute("aria-label", Ya(t) + " options"), R.innerHTML = (Ua.includes(t) ? C("size", D === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? C("graph", (((G = f.opts.energy) == null ? void 0 : G.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + C("left", "Move left", y || l.col === 0) + C("right", "Move right", y || l.col + l.cols >= d) + C("up", "Move up", l.row <= 0) + C("down", "Move down") + C("hide", "Hide"), A.appendChild(R);
    const ie = Math.min(l.x + l.w - R.offsetWidth, A.clientWidth - R.offsetWidth);
    Object.assign(R.style, { left: Math.max(0, ie) + "px", top: l.y + 28 + "px" }), ta = { key: t, menu: R, opener: i }, (V = R.querySelector("button:not([disabled])")) == null || V.focus();
  }
  function na(t) {
    if (!ta) return;
    const { menu: i, opener: l } = ta;
    ta = null, i.remove(), t && (l == null || l.focus());
  }
  const Gn = () => Object.fromEntries([...ba].map(([t, i]) => [t, { col: i.col, row: i.row }]));
  function Uo(t, i) {
    var D, y;
    const l = Cn(), d = Gn(), f = d[t] || { col: 0, row: 0 };
    i === "size" && (l.spans = { ...l.spans, [t]: (l.spans[t] ?? 2) === 1 ? 2 : 1 }), i === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((D = l.opts.energy) == null ? void 0 : D.graph) || "above") === "above" ? "below" : "above" } }), i === "left" && (d[t] = { ...f, col: f.col - 1 }), i === "right" && (d[t] = { ...f, col: f.col + 1 }), i === "up" && (d[t] = { ...f, row: f.row - 1 }), i === "down" && (d[t] = { ...f, row: f.row + 1 }), i === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(i) && (an = { key: t, col: d[t].col, row: d[t].row }), $i(l, d), an && (jn(), an = null, $i(Cn(), Gn())), na(), i === "graph" && (ot.delete("dash:energy"), Gt()), jn(), i !== "hide" && ((y = A.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus());
  }
  function Qi(t) {
    const i = Cn();
    Vo({ ...i, hidden: i.hidden.filter((l) => l !== t) }), jn();
  }
  function _s(t) {
    if (!nn || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfBoardTray")) return;
    const i = t.target.closest(".tfBoardItem"), l = i && zo().find((V) => V.el === i);
    if (!l || pi.includes(l.key)) return;
    const d = ba.get(l.key), { w: f } = Za(A.clientWidth);
    if (!d) return;
    t.preventDefault(), na();
    const D = t.clientX, y = t.clientY;
    let C = !1, R = 0;
    const ie = (V) => {
      const le = V.clientX - D, Se = V.clientY - y;
      if (!C) {
        if (Math.hypot(le, Se) < 4) return;
        C = !0, an = { key: l.key, col: d.col, row: d.row }, i.classList.add("tfDragging");
      }
      i.style.transform = "translate(" + le + "px," + Se + "px)", an.col = Math.round((d.x + le) / (f + Vt)), an.row = Math.round((d.y + Se - _a) / Ga), R || (R = requestAnimationFrame(() => {
        R = 0, jn();
      }));
    }, G = () => {
      window.removeEventListener("pointermove", ie), window.removeEventListener("pointerup", G), window.removeEventListener("pointercancel", G), C && (cancelAnimationFrame(R), jn(), i.classList.remove("tfDragging"), i.style.transform = "", an = null, $i(Cn(), Gn()), jn(), Gt());
    };
    window.addEventListener("pointermove", ie), window.addEventListener("pointerup", G), window.addEventListener("pointercancel", G);
  }
  function hi(t = !1) {
    const i = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(i != null && i.clientWidth)) return;
    const l = i.dataset.graph + "@" + i.clientWidth + "x" + i.clientHeight;
    i.dataset.drawn !== l && (i.dataset.drawn = l, or(i.dataset.graph, i).then(() => {
      t && Sa(i);
    }));
  }
  function er() {
    var C, R, ie;
    _e = Ia.model(o()), v = _e.states, v[(C = T.sources) == null ? void 0 : C.grid] && (_e.grid = T.sources.grid), v[(R = T.sources) == null ? void 0 : R.alarm] && (_e.security.alarms = [T.sources.alarm]), b.forEach((G, V) => {
      const le = v[V], Se = (le == null ? void 0 : le.attributes) || {};
      if (!le || Date.now() - G.at > 2 * 60 * 1e3) {
        b.delete(V);
        return;
      }
      G.pos != null && le.state !== "opening" && le.state !== "closing" && Math.abs(Ct(V) - G.pos) < 1 && delete G.pos, G.tilt != null && Math.abs((Se.current_tilt_position ?? -1) - G.tilt) < 1 && delete G.tilt, G.pos == null && G.tilt == null && b.delete(V);
    });
    const t = [];
    let i = 0;
    const l = Gi();
    qa = l.filter((G) => G.room).map((G) => G.room), qa.some((G) => G.id === fe) || (fe = ((ie = qa[0]) == null ? void 0 : ie.id) || null);
    const d = Te === "weather" ? { key: "weather", name: "Weather" } : Te && l.find((G) => G.key === Te);
    if (d || (Te = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), Pe = /* @__PURE__ */ new Map(), _e.rooms.forEach((G) => [...G.actions, ...G.plugs, ...G.readings, ...G.openings, ...G.solar, ...G.plants.flatMap((V) => [V.id, ...V.readings])].forEach((V) => Pe.set(V, G.name))), !d) return Yi(t, Ca());
    if (t.push({ key: "areahead", html: Ir(d, ++i) }), d.key === "weather")
      return t.weather = ++i, t;
    const f = d.ids, D = d.room ? d.room.id : d.key, y = d.room;
    return y != null && y.solar.length && t.push({ key: "energy:" + y.id, html: O(y, ++i) }), y && (y.readings.length || y.plugs.length || y.power != null) && t.push({ key: "readings:" + y.id, html: H(y, ++i) }), y == null || y.plants.forEach((G) => t.push({ key: "plant:" + G.id, html: ue(G, ++i) })), f.length && t.push({ key: "block:" + D, order: ++i, tiles: f.map((G) => ({ key: G, html: tn(G) })) }), d.key === "security" && t.push({ key: "openings", html: be(++i) }), t;
  }
  const Ir = (t, i) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + i + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + dm + '</button><div class="settingsTitle">' + pe(t.name) + "</div></div>";
  let Aa = 0;
  function tr(t) {
    var i;
    Te || (Aa = wa().scrollTop), Te = t, t.startsWith("room:") && (fe = t.slice(5)), Sn(), wa().scrollTop = 0, (i = A.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  function fi() {
    var f;
    const t = Te;
    Te = null, Sn();
    const i = wa(), l = Aa;
    i.scrollTop = l, requestAnimationFrame(() => {
      i.scrollTop = l;
    });
    const d = t.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Ha.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (f = (d == null ? void 0 : d.querySelector("[data-go]")) || d) == null || f.focus({ preventScroll: !0 });
  }
  const gi = (t) => t.wrap ? t.wrap(t.tiles.map((i) => i.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + pe(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((i) => i.html).join("") + "</div></div>", go = (t) => t.map((i) => i.key + (i.tiles ? "(" + i.tiles.map((l) => l.key).join(",") + ")" : "")).join(";");
  function wa() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const i = getComputedStyle(t).overflowY;
      if ((i === "auto" || i === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function aa(t) {
    const i = wa(), l = (C) => {
      const R = C.getBoundingClientRect();
      return R.height && R.bottom > 0 && R.top < window.innerHeight;
    }, d = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((C) => !C.matches(".tfDashTiles") && l(C)), f = d == null ? void 0 : d.dataset.k, D = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const y = d != null && d.isConnected ? d : f && A.querySelector('[data-k="' + CSS.escape(f) + '"]');
    y != null && y.isConnected && D != null && (i.scrollTop += y.getBoundingClientRect().top - D);
  }
  function Sn() {
    if (!w || !A) return;
    const t = er();
    A.querySelectorAll("[data-tf]").forEach((l) => l.remove()), ot.clear();
    const i = document.createElement("div");
    i.innerHTML = t.map((l) => l.tiles ? gi(l) : l.html).join(""), t.forEach((l) => l.tiles ? l.tiles.forEach((d) => ot.set(d.key, d.html)) : ot.set(l.key, l.html)), en = go(t), A.append(...i.children), dt(t.weather), ut(), Ji.disconnect(), jn(), mn(A), xi(A), Vn(A), z(), W && or(W.id), yi(), $o(), Or(), requestAnimationFrame(F);
  }
  const Ka = (t) => {
    var l;
    const i = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return i && { label: i.getAttribute("aria-label"), act: (l = i.dataset) == null ? void 0 : l.act };
  }, $a = (t, i) => {
    var l;
    i && ((l = i.label && t.querySelector('[aria-label="' + CSS.escape(i.label) + '"]') || i.act && t.querySelector('[data-act="' + CSS.escape(i.act) + '"]')) == null || l.focus({ preventScroll: !0 }));
  };
  function vo(t, i) {
    const l = document.createElement("div");
    l.innerHTML = i;
    const d = l.firstElementChild, f = Ka(t);
    t.replaceWith(d), mn(d), xi(d), Vn(d), $a(d, f);
  }
  function Gt() {
    !w || !A || an || aa(Hr);
  }
  function Hr() {
    if (!A.querySelector("[data-tf]")) {
      Sn();
      return;
    }
    const t = er();
    if (go(t) !== en) {
      Sn();
      return;
    }
    const i = (l) => [...We.keys()].some((d) => {
      const f = d.slice(d.indexOf("|") + 1);
      return l === f || l.endsWith(":" + f);
    });
    t.forEach((l) => (l.tiles || [l]).forEach((d) => {
      if (ot.get(d.key) === d.html || i(d.key)) return;
      const f = A.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (f) {
        if (ot.set(d.key, d.html), W && W.key === d.key && f.querySelector(".tfOpen")) {
          f.querySelector(".tfOpen .activityRowMeta").textContent = Wa(W.id);
          return;
        }
        vo(f, d.html), W && W.key === d.key && or(W.id), d.key.startsWith("energy:") && yi();
      }
    })), $o(), Or(), ht(), z(), gn == null || gn.update(), pn == null || pn.forEach((l) => l.update()), m.classList.contains("tfDash") && mi(), requestAnimationFrame(F);
  }
  const nr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Mt(t.color_mode)]],
    climate: (t) => [["Current temperature", mt(t.current_temperature) + " °C"], ["Target", mt(t.temperature) + " °C"], ["Action", Mt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Mt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Mt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", mt(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Mt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, vi = (t) => {
    var l;
    const i = (((l = nr[t.split(".")[0]]) == null ? void 0 : l.call(nr, it(t))) || []).filter(([, d]) => d != null && d !== "");
    return i.length ? '<div class="tfMoreRows">' + i.map(([d, f]) => '<div class="tfMoreRow"><span>' + pe(d) + "</span><span>" + pe(f) + "</span></div>").join("") + "</div>" : "";
  }, Ea = (t) => Ii(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function bo(t, i = {}, l = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + pe(d.name) + '</div><div class="tfMoreTiles' + (l ? " single" : "") + '">' + d.ids.map((f) => Po(f, i)).join("") + "</div></div>").join("") + "</div>";
  }
  const $e = document.createElement("div");
  $e.className = "tfMoreBackdrop", $e.hidden = !0, m.appendChild($e);
  const Ja = (t, i) => {
    for (let l = t; l && l !== $e; l = l.parentElement) {
      const d = getComputedStyle(l).overflowY;
      if ((d === "auto" || d === "scroll") && l.scrollHeight > l.clientHeight + 1 && (i < 0 ? l.scrollTop > 0 : l.scrollTop + l.clientHeight < l.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Yo = null;
  $e.addEventListener("touchstart", (t) => {
    Yo = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), $e.addEventListener("touchmove", (t) => {
    var f, D;
    if (!Yo || t.touches.length > 1 || (D = (f = t.target).closest) != null && D.call(f, "input,textarea,select")) return;
    const i = t.touches[0], l = Yo.x - i.clientX, d = Yo.y - i.clientY;
    Yo = { x: i.clientX, y: i.clientY }, Math.abs(d) >= Math.abs(l) && !Ja(t.target, d) && t.preventDefault();
  }, { passive: !1 }), $e.addEventListener("wheel", (t) => {
    Ja(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function bi() {
    const t = $e.querySelector(".tfMorePair"), i = $e.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - i.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", bi, { passive: !0 }), w && Ma();
  let xa = [];
  const Fr = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function wi(t) {
    const i = (C, R = "") => '<div class="tfMoreHead">' + (g != null && g.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + cl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + pe(C) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + cm + "</button></div>", l = (C, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + pe(C) + "</div>" + (R ? '<div class="tfMoreSub">' + pe(R) + "</div>" : "") + "</div>", d = bo;
    if (t === "favourites") {
      const C = Va(), R = new Set(C), ie = [{ name: "Starred", ids: C }, { name: "Home", ids: _e.homeVacuums }, { name: "Security", ids: [..._e.security.alarms, ..._e.security.locks] }, ..._e.rooms.map((G) => ({ name: G.name, ids: [...G.actions, ...G.plugs] }))].map((G, V) => V ? { ...G, ids: G.ids.filter((le) => !R.has(le)) } : G).filter((G) => G.ids.length);
      return [i("Favourites"), l(C.length ? C.length + " starred" : "None starred"), d(ie, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const C = Ca().find((V) => V.key === t.slice(8));
      if (!C) return null;
      const R = C.key === "light" ? (C.groups || []).flatMap((V) => V.ids) : [], ie = R.some((V) => {
        var le;
        return ((le = v[V]) == null ? void 0 : le.state) === "on";
      }), G = R.length ? '<button class="primary" type="button" data-acts="' + Pn(R.map((V) => ["light", ie ? "turn_off" : "turn_on", V])) + '">' + (ie ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(C.name), '<div class="tfMoreNowRow">' + l(C.value) + G + "</div>", ...(C.groups || []).map((V) => {
        const le = V.ids.filter((He) => ds.includes(He.split(".")[0])), Se = V.ids.filter((He) => !le.includes(He));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + pe(V.name) + "</div>" + (le.length ? '<div class="tfMoreActions">' + le.map((He) => tn(He, !0)).join("") + "</div>" : "") + (Se.length ? '<div class="tfMoreTiles">' + Se.map((He) => Po(He, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, C, R] = t.split(":"), ie = _e.rooms.find((ge) => ge.id === C), G = ie && Qn(ie).find((ge) => ge.key === R);
      if (!G) return null;
      const V = lo(ie, R), le = V.filter((ge) => ds.includes(ge.split(".")[0])), Se = V.filter((ge) => !le.includes(ge)), He = G.acts ? '<button class="primary" type="button" data-acts="' + Pn(G.acts) + '">' + (G.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(ie.name + " " + G.label.toLowerCase()), '<div class="tfMoreNowRow">' + l(G.value) + He + "</div>", '<div class="tfMoreGroup">' + (le.length ? '<div class="tfMoreActions">' + le.map((ge) => tn(ge, !0)).join("") + "</div>" : "") + (Se.length ? '<div class="tfMoreTiles">' + Se.map((ge) => Po(ge, {})).join("") + "</div>" : "") + "</div>"];
    }
    const f = t.split(".")[0], D = v[t], y = ds.includes(f) ? Mn(t) : { sections: [] };
    return [
      i(Ie(t)),
      l(Pt(t), D.last_changed && vn(Date.parse(D.last_changed))),
      f === "cover" && '<div data-cover-art="' + pe(t) + '"></div>',
      ...y.sections.filter(Boolean),
      wo(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(g != null && g.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Cm + "</button>"
    ].filter(Boolean);
  }
  const wo = (t) => Fr(t) ? "" : vi(t) + Ea(t);
  let Un = "";
  function Zo(t) {
    var i;
    g && (g.details = t, $o(), (i = $e.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || i.focus({ preventScroll: !0 }));
  }
  const xo = (t) => {
    const i = v[t], l = Ct(t), d = Jn(t);
    return { kind: dl(i), name: Ie(t), text: Pt(t), pos: l, target: Math.abs(d - l) > 0.5 ? d : null, moving: i.state === "opening" || i.state === "closing", tilt: Ot(t) ?? 100, canSet: Ft(t, Yd) };
  };
  function xi(t) {
    t.querySelectorAll("[data-cover-art]").forEach((i) => {
      const l = i.dataset.coverArt, d = i.dataset.artKey || "more:" + l;
      let f = M.get(d);
      f || (f = lm({ onMove: (D) => ko(l, D), onSet: (D) => {
        ko(l, D), ya("pos", l);
      } }), f.coverId = l, M.set(d, f)), i.replaceWith(f.el), f.update(xo(l));
    });
  }
  const Xa = (t) => [...M.values()].filter((i) => i.coverId === t), Ko = () => M.forEach((t) => {
    v[t.coverId] && t.update(xo(t.coverId));
  }), Or = () => {
    M.forEach((t, i) => {
      t.el.isConnected || (t.destroy(), M.delete(i));
    }), Ko();
  };
  function $o() {
    var D, y;
    if (!g || !(Fr(g.id) || v[g.id])) {
      $e.hidden = !0;
      return;
    }
    if ([...We.keys()].some((C) => C.endsWith("|" + g.id))) {
      Ko();
      return;
    }
    const t = wi(g.id), i = $e.querySelector(".tfMore");
    if (!t) {
      dn();
      return;
    }
    const l = Ka($e), d = wo(g.id), f = g.id.startsWith("summary:") || g.id.startsWith("group:");
    if ($e.hidden || !i || t.length !== xa.length || i.classList.contains("wide") !== f) {
      const C = !$e.hidden && i ? i.scrollTop : 0;
      $e.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (f ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + cl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Un = d, $e.hidden = !1, bi(), xi($e), Vn($e), mn($e), C && ($e.querySelector(".tfMore").scrollTop = C), $a($e, l), $e.contains(n.activeElement) || (D = $e.querySelector("[data-more-close]")) == null || D.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((C, R) => {
        var V, le;
        if (C === xa[R] || C.includes("data-cover-art") || i.children[R].contains((le = (V = n.activeElement) == null ? void 0 : V.matches) != null && le.call(V, "input,select") ? n.activeElement : null) || [...We.keys()].some((Se) => i.children[R].querySelector('[data-drag="' + CSS.escape(Se) + '"]'))) return;
        const ie = document.createElement("div");
        ie.innerHTML = C;
        const G = ie.firstElementChild;
        i.children[R].replaceWith(G), mn(G), Vn(G);
      }), d !== Un) {
        const C = $e.querySelector(".tfMoreSideBody");
        C && (C.innerHTML = d), Un = d;
      }
      $e.contains(n.activeElement) || $a($e, l);
    }
    (y = $e.querySelector(".tfMorePair")) == null || y.classList.toggle("details", !!(g.details && d)), xa = t, Ko();
  }
  setInterval(() => {
    g && $o();
  }, 15 * 1e3);
  function ar(t, i) {
    const l = !!(g && i && $e.contains(i));
    g = { id: t, opener: l ? g.opener : i, back: l ? g : null }, Jo();
  }
  function Jo() {
    xa = [], $e.hidden = !0, M.forEach((t, i) => {
      i !== g.id && $e.contains(t.el) && (t.destroy(), M.delete(i));
    }), $o();
  }
  function dn() {
    var l, d, f, D, y, C;
    const t = g == null ? void 0 : g.opener;
    g = null, M.forEach((R, ie) => {
      $e.contains(R.el) && (R.destroy(), M.delete(ie));
    }), Kt.forEach((R, ie) => {
      ie.startsWith("more:") && Kt.delete(ie);
    }), $e.hidden = !0, $e.innerHTML = "";
    const i = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(i) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (d = A.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(i) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (D = A.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || D.focus(i) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((C = A.querySelector("[data-favs-edit]")) == null || C.focus(i));
  }
  function wn(t, i, l, d = {}) {
    const f = i.map((he) => he[1]), D = d.zero ? 0 : Math.min(...f), y = Math.max(...f), C = Math.max(120, t.clientWidth || 260), R = Math.max(60, t.clientHeight || 130), ie = 8, G = R - 20, V = Date.now() - 24 * 3600 * 1e3, le = 24 * 3600 * 1e3, Se = (he) => Math.max(0, Math.min(C, (he - V) / le * C)), He = (he) => y === D ? (ie + G) / 2 : G - (he - D) / (y - D) * (G - ie);
    let ge = "M" + Se(i[0][0]).toFixed(1) + " " + He(i[0][1]).toFixed(1);
    for (let he = 1; he < i.length; he++) ge += d.smooth ? "L" + Se(i[he][0]).toFixed(1) + " " + He(i[he][1]).toFixed(1) : "H" + Se(i[he][0]).toFixed(1) + "V" + He(i[he][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + C + " " + R), t.setAttribute("aria-label", l), t.innerHTML = '<path d="' + ge + "V" + G + "H" + Se(i[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ge + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (R - 4) + '">24 h ago</text><text x="' + C + '" y="' + (R - 4) + '" text-anchor="end">Now</text>';
  }
  function As(t) {
    var d;
    const i = Number((d = v[t]) == null ? void 0 : d.state), l = Date.now();
    if (it(t).state_class === "total_increasing") {
      const f = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), D = Math.max(1, l - f);
      return [...Array(49)].map((y, C) => f + D * C / 48).map((y) => [y, Math.round(i * Math.pow((y - f) / D, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((f, D) => [l - (48 - D) * 30 * 60 * 1e3, Math.round(i * (0.96 + 0.04 * Math.sin(D / 6)) * 10) / 10]);
  }
  async function or(t, i) {
    var Se, He;
    let l = ke.get(t);
    if (t.endsWith("_solar_power")) l = { at: Date.now(), points: xd() };
    else if (Ii(t)) l = { at: Date.now(), points: As(t) };
    else if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const ge = new Date(Date.now() - 864e5).toISOString(), he = await I({ type: "history/history_during_period", start_time: ge, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), X = ((he == null ? void 0 : he[t]) || []).map((rt) => [rt.lu != null ? rt.lu * 1e3 : Date.parse(rt.last_updated || rt.last_changed), Number(rt.s ?? rt.state)]).filter(([rt, Ut]) => Number.isFinite(rt) && Number.isFinite(Ut));
        l = { at: Date.now(), points: X };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      ke.set(t, l);
    }
    const d = i || A.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const f = v[t], D = ((Se = f == null ? void 0 : f.attributes) == null ? void 0 : Se.unit_of_measurement) || "", y = l.points.slice(), C = Number(f == null ? void 0 : f.state);
    if (Number.isFinite(C) && !t.endsWith("_solar_power") && y.push([Date.now(), C]), y.length < 2) {
      d.setAttribute("aria-label", Ie(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const R = y.map((ge) => ge[1]), ie = Math.min(...R), G = Math.max(...R), V = (ge) => ge.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ge) >= 100 ? 0 : 1 }), le = ((He = f == null ? void 0 : f.attributes) == null ? void 0 : He.state_class) === "total_increasing";
    wn(d, y, Ie(t) + ", last 24 hours: " + (le ? "+" + V(R[R.length - 1] - R[0]) : ie === G ? V(ie) : V(ie) + " to " + V(G)) + (D ? " " + D : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function yi() {
    const t = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!t) return;
    const i = xd();
    wn(t, i, "Solar, last 24 hours: up to " + mt(Math.max(...i.map((l) => l[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function ir(t, i) {
    const l = i.entity_id, d = b.get(l) || {}, f = { open_cover: 100, close_cover: 0, set_cover_position: i.position, toggle: Ct(l) > 0 ? 0 : 100 }[t], D = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: i.tilt_position }[t];
    f != null && (d.pos = f), D != null && (d.tilt = D), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), b.set(l, d);
  }
  function yo(t, i, l, d) {
    const f = { entity_id: l, ...d || {} };
    return t === "cover" && ir(i, f), de[l] = (de[l] || 0) + 1, Ao.set(Kd, JSON.stringify(de)), Ia.call(t, i, f) ? Promise.resolve() : Promise.resolve(se(t, i, f));
  }
  function rr(t) {
    const [i, l, d, f] = t.split("|");
    yo(i, l, d, f ? JSON.parse(f) : null).catch(() => {
    });
  }
  function ko(t, i) {
    We.set("pos|" + t, i), ot.delete(t), xa = xa.map(() => ""), [A, $e].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((f) => Qe(f, i)));
    const l = A.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (l && (l.textContent = Math.round(i) + "%"), (g == null ? void 0 : g.id) === t) {
      const d = $e.querySelector(".tfMoreState"), f = $e.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(i) + "%", d.classList.add("live")), f && (f.textContent = "Currently " + Ct(t) + "%");
    }
    Xa(t).forEach((d) => d.update(xo(t)));
  }
  const Es = (t, i) => {
    const l = t.shiftKey ? 10 : 1, d = { ArrowUp: i + l, ArrowRight: i + l, ArrowDown: i - l, ArrowLeft: i - l, PageUp: i + 25, PageDown: i - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Ds(t, i) {
    var ge;
    const l = t.dataset.blocks;
    (ge = t.setPointerCapture) == null || ge.call(t, i.pointerId);
    const d = (he) => {
      const X = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (he.clientX - X.left) / X.width * 100));
    }, f = d(i), D = i.clientX;
    let y = !1, C = Jn(l), R = f, ie = 0;
    const G = () => {
      C = Math.abs(R - C) < 0.2 ? R : C + (R - C) * 0.14, ko(l, C), ie = requestAnimationFrame(G);
    }, V = () => {
      y || (y = !0, t.classList.add("fine"), ie = requestAnimationFrame(G));
    }, le = setTimeout(V, 350), Se = (he) => {
      R = d(he), Math.abs(he.clientX - D) > 6 && (clearTimeout(le), V());
    }, He = () => {
      clearTimeout(le), cancelAnimationFrame(ie), t.removeEventListener("pointermove", Se), t.removeEventListener("pointerup", He), t.removeEventListener("pointercancel", He), t.classList.remove("fine"), ko(l, y ? Math.round(C) : (Math.min(3, Math.floor(f / 25)) + 1) * 25), ya("pos", l);
    };
    t.addEventListener("pointermove", Se), t.addEventListener("pointerup", He), t.addEventListener("pointercancel", He);
  }
  function sr(t) {
    var f;
    const [i, l] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    W = { key: i, id: l, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, ot.delete(i), Gt(), (f = A.querySelector(".tfOpen [data-close]")) == null || f.focus({ preventScroll: !0 });
  }
  function Da(t) {
    var i;
    fe = t.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((l) => {
      var f;
      const d = l === t;
      l.classList.toggle("active", d), l.setAttribute("aria-expanded", String(d)), (f = l.querySelector(".panelExpanded")) == null || f.toggleAttribute("inert", !d);
    }), ot.set("areas", _r(((i = A.querySelector('[data-k="areas"]')) == null ? void 0 : i.style.order) || 1));
  }
  const Hn = {
    bright: { value: (t, i) => Math.round(i * 100), text: (t, i) => i ? i + "%" : "Off", send: (t, i) => i > 0 ? ["light", "turn_on", { brightness_pct: i }] : ["light", "turn_off", {}] },
    ct: { value: (t, i) => {
      const [l, d] = zt(t);
      return Math.round(l + i * (d - l));
    }, text: (t, i) => i.toLocaleString() + "k", send: (t, i) => ["light", "turn_on", { color_temp_kelvin: i }] },
    hue: { value: (t, i) => Math.round(i * 360), text: () => "Colour", send: (t, i) => {
      var l;
      return ["light", "turn_on", { hs_color: [i, Math.max(60, ((l = it(t).hs_color) == null ? void 0 : l[1]) || 100)] }];
    } },
    pos: { value: (t, i) => Math.round(i * 100), text: (t, i) => Math.round(i) + "%", send: (t, i) => ["cover", "set_cover_position", { position: Math.round(i) }] },
    tilt: { value: (t, i) => Math.round(i * 100), text: (t, i) => "Tilt " + i + "%", send: (t, i) => ["cover", "set_cover_tilt_position", { tilt_position: i }] },
    vol: { value: (t, i) => Math.round(i * 100) / 100, text: (t, i) => Math.round(i * 100) + "%", send: (t, i) => ["media_player", "volume_set", { volume_level: i }] }
  };
  function Xo(t, i, l, d) {
    var R;
    const f = Hn[i].value(l, d);
    We.set(i + "|" + l, f);
    const D = Math.round(d * 100) + "%", y = t.querySelector("i");
    if (i === "tilt") {
      y.style.width = "calc((100% - 6px) * " + d + ")";
      const [ie, G] = t.querySelectorAll("span");
      ie.classList.toggle("lit", d > 0.08), G.classList.toggle("lit", d > 0.92), ot.delete(l), xa = xa.map(() => ""), Xa(l).forEach((V) => V.update(xo(l)));
    } else if (y) y.style.width = D;
    else {
      let ie = t.querySelector("b");
      ie || (ie = document.createElement("b"), t.appendChild(ie)), ie.style.left = D;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const C = (R = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : R.querySelector(".tfName .activityRowMeta, .tfMoreState");
    C && (C.textContent = Hn[i].text(l, f));
  }
  function ya(t, i) {
    const l = We.get(t + "|" + i), [d, f, D] = Hn[t].send(i, l), y = () => setTimeout(() => {
      We.delete(t + "|" + i), Gt();
    }, 1500);
    yo(d, f, i, D).then(y, y);
  }
  function Wr(t) {
    t.addEventListener("click", (i) => {
      var d;
      const l = i.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel");
      if (ta && !i.target.closest(".tfBoardMenu,[data-board-more]") && na(), !(!l || !t.contains(l) || l.disabled))
        if (l.dataset.boardMore)
          (ta == null ? void 0 : ta.key) === l.dataset.boardMore ? na(!0) : Go(l.dataset.boardMore, l);
        else if (l.dataset.boardAct) Uo(ta.key, l.dataset.boardAct);
        else if (l.dataset.boardShow) Qi(l.dataset.boardShow);
        else if (l.dataset.energyPick) fa(l.dataset.energyPick);
        else if (l.dataset.act) rr(l.dataset.act);
        else if (l.hasAttribute("data-details")) Zo(!(g != null && g.details));
        else if (l.hasAttribute("data-details-close")) Zo(!1);
        else if (l.dataset.summary) Ui(l.dataset.summary, l);
        else if (l.dataset.star) si(l.dataset.star);
        else if (l.hasAttribute("data-more-back"))
          g = g.back, Jo();
        else if (l.hasAttribute("data-favs-edit")) ar("favourites", l);
        else if (l.dataset.acts) JSON.parse(l.dataset.acts).forEach(([f, D, y, C]) => yo(f, D, y, C).catch(() => {
        }));
        else if (l.dataset.more) ar(l.dataset.more, l);
        else if (l.hasAttribute("data-more-close")) dn();
        else if (l.dataset.go) tr("room:" + l.dataset.go);
        else if (l.hasAttribute("data-area-back")) fi();
        else if (l.dataset.open) sr(l);
        else if (l.hasAttribute("data-close")) {
          const f = W;
          W = null, ot.delete(f.key), Gt(), (d = A.querySelector('[data-open="' + CSS.escape(f.key + "|" + f.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else l.classList.contains("tfAreaPanel") && !l.classList.contains("active") && Da(l);
    }), t.addEventListener("keydown", (i) => {
      var d, f, D, y, C, R, ie;
      const l = i.target;
      if ((d = l.dataset) != null && d.open && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), sr(l)), (f = l.dataset) != null && f.energyPick && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), fa(l.dataset.energyPick)), (D = l.classList) != null && D.contains("tfAreaPanel") && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Da(l)), (y = l.dataset) != null && y.summary && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Ui(l.dataset.summary, l)), i.key === "Escape" && ta && t === A) {
        i.preventDefault(), na(!0);
        return;
      }
      if (i.key === "Escape" && nn && t === A) {
        i.preventDefault(), Xi(!1), (C = u("dashEditNav")) == null || C.focus();
        return;
      }
      if (i.key === "Escape" && Te && t === A && (i.preventDefault(), fi()), (R = l.dataset) != null && R.blocks) {
        const G = l.dataset.blocks, V = Es(i, Math.round(Jn(G)));
        if (V == null) return;
        i.preventDefault(), ko(G, V), clearTimeout(k.get(G)), k.set(G, setTimeout(() => ya("pos", G), 500));
        return;
      }
      if ((ie = l.dataset) != null && ie.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(i.key)) {
        i.preventDefault();
        const [G, V] = l.dataset.drag.split("|"), le = Number(l.getAttribute("aria-valuenow")) / 100, Se = i.key === "Home" ? 0 : i.key === "End" ? 1 : Math.max(0, Math.min(1, le + (i.key === "ArrowLeft" || i.key === "ArrowDown" ? -0.05 : 0.05)));
        Xo(l, G, V, Se), ya(G, V);
      }
    }), t.addEventListener("pointerdown", (i) => {
      var G;
      const l = i.target.closest("[data-blocks]");
      if (l && i.button === 0) {
        i.preventDefault(), Ds(l, i);
        return;
      }
      const d = i.target.closest("[data-drag]");
      if (!d) return;
      const [f, D] = d.dataset.drag.split("|");
      if (f === "bright" && !ze(D)) {
        rr(gt("light", "toggle", D));
        return;
      }
      i.preventDefault(), (G = d.setPointerCapture) == null || G.call(d, i.pointerId);
      const y = f === "tilt" ? 3 : 0, C = (V) => {
        const le = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (V.clientX - le.left - y) / (le.width - y * 2)));
      };
      Xo(d, f, D, C(i));
      const R = (V) => Xo(d, f, D, C(V)), ie = () => {
        d.removeEventListener("pointermove", R), d.removeEventListener("pointerup", ie), d.removeEventListener("pointercancel", ie), ya(f, D);
      };
      d.addEventListener("pointermove", R), d.addEventListener("pointerup", ie), d.addEventListener("pointercancel", ie);
    });
  }
  return A && w && (ks(), Wr(A), Wr($e), $e.addEventListener("click", (t) => {
    t.target === $e && dn();
  }), (lr = n.getElementById("homeNav")) == null || lr.addEventListener("click", () => {
    Te && fi();
  }), (qr = n.querySelector(".bottomNav")) == null || qr.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Jd + "</button>"), (ki = u("dashEditNav")) == null || ki.addEventListener("click", () => Xi(!nn)), A.addEventListener("pointerdown", _s), A.addEventListener("hass-action", (t) => {
    var d, f;
    const i = (f = (d = t.target).closest) == null ? void 0 : f.call(d, ".tfDac"), l = i == null ? void 0 : i.dataset.k;
    !l || !i.dataset.dac.startsWith("dash:") || nn || (t.stopPropagation(), Ta.has(l) ? Ta.delete(l) : Ta.add(l), jn());
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && zn() !== ga ? Gt() : mi();
  }).observe(A), window.addEventListener("resize", mi, { passive: !0 }), $e.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), g != null && g.details ? Zo(!1) : dn());
  })), ae(), {
    update(t) {
      if (!w) return;
      const i = !Object.keys(v).length;
      v = t || {}, i ? Sn() : Gt();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      nt = !0, gn == null || gn.destroy(), gn = null, pn == null || pn.forEach((t) => t.destroy()), pn = null;
    },
    resume() {
      nt = !1, !(!w || !(A != null && A.querySelector("[data-tf]"))) && (Wt.isConnected && dt(Wt.style.order), ut());
    }
  };
}
const Bm = "0.43.5", hl = "move_assistant", Pm = "move_assistant", ec = "move_assistant_checkin_reminder";
function Im() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Hm extends HTMLElement {
  setConfig(s) {
    this._config = s || {};
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
  set hass(s) {
    var u;
    const o = !this._hass;
    if (this._hass = s, o) {
      this._init();
      return;
    }
    this._app && s.states !== this._lastStates && (this._lastStates = s.states, this._app.updateStates(s.states), (u = this._test) == null || u.update(s.states));
  }
  connectedCallback() {
    var s, o;
    (s = this._app) == null || s.resume(), (o = this._test) == null || o.resume();
  }
  disconnectedCallback() {
    var s, o;
    (s = this._app) == null || s.suspend(), (o = this._test) == null || o.suspend();
  }
  async _init() {
    Im();
    const s = this.shadowRoot || this.attachShadow({ mode: "open" });
    s.innerHTML = `<style>${au}${ou}${iu}</style>${ru}`;
    const o = s.getElementById("app");
    o.style.opacity = "0";
    let u = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: hl
      });
      u = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = Tu(s, {
      data: u,
      save: (m) => this._save(m),
      fire: (m, h) => this._fire(m, h),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, h) => {
        var w, L;
        return (L = (w = this._hass) == null ? void 0 : w.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(h, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, h;
        return Object.keys(((h = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : h.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Nm(s, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const s = (o = this._hass) == null ? void 0 : o.connection;
    s != null && s.subscribeMessage && s.subscribeMessage(
      (u) => {
        var h;
        const m = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (h = this._app) == null || h.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: hl }
    ).catch(() => {
    });
  }
  _save(s) {
    this._pendingJson = JSON.stringify(s), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: hl,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(s, o = {}) {
    var u, m;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((m = this._hass) == null || m.callWS({
      type: "fire_event",
      event_type: Pm,
      event_data: { action: s, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(s) {
    const o = `config/automation/config/${ec}`;
    if (!s) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (h) {
        if ((h == null ? void 0 : h.status_code) !== 404 && (h == null ? void 0 : h.status) !== 404) throw h;
      }
      return;
    }
    const u = (h) => `${h}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: ec,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: u(s.times.morning), id: "morning" },
        { trigger: "time", at: u(s.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${s.target}`,
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
    const s = document;
    if (s.fullscreenElement || s.webkitFullscreenElement) {
      (s.exitFullscreen || s.webkitExitFullscreen).call(s);
      return;
    }
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(s) {
    var u;
    const o = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    o && (o.textContent = s, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Hm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Bm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
