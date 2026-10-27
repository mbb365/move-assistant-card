const au = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', ou = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer;transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow.tap:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:none}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:none;width:46px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{padding:0 10px}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfAName{font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:10px 0;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:8px;max-width:calc(100% - 20px)}.tfACMain{max-width:100%;font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:3!important}#app.tfDash .tfAreas{order:4!important}#app.tfDash .tfDash-favs{order:5!important}#app.tfDash .tfDash-act{order:6!important}#app.tfDash .tfDash-energy{order:7!important}#app.tfDash .tfDash-avg{order:8!important}#app.tfDash .tfDashTiles{order:9!important}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{flex:0 0 100%;display:flex;flex-wrap:wrap;gap:10px;min-width:0}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;width:252px;min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}@container tfdash (width < 640px){.tfDashTiles>:is(.tfAction,.tfDac){width:calc(50% - 5px)}}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfDashTiles{display:contents}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfBoardTray{position:absolute;z-index:1;display:flex;flex-wrap:wrap;gap:8px}#app.tfEditing .tfBoardTray .pill{cursor:pointer}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', iu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}@container wb-bento (width >= 652px){.wbCard.wbSquare{aspect-ratio:auto;height:212px}.wbCard.wbSquare.wbDouble{aspect-ratio:auto;height:288px}.wbItem[data-size=wide]>.wbCard{min-height:364px}.wbWeather .wbNow{margin-bottom:auto}}', ru = `<main id="app"><div class="shell">
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
`, po = {
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
}, Nn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, ud = (n, s, o) => n + (s - n) * o, sl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((c) => c + c).join("") : s;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, su = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), pd = {}, Ft = (n, s, o) => {
  const c = n + s + o;
  return pd[c] || (pd[c] = su(sl(n).map((m, h) => m + (sl(s)[h] - m) * o)));
}, md = {}, rs = (n) => md[n] || (md[n] = sl(n)), Gs = (n, s, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let h = 0, w = 1, T = m;
  for (let v = 0; v < 18; v++)
    T = (h + w) / 2, 3 * (1 - T) * (1 - T) * T * n + 3 * (1 - T) * T * T * o + T * T * T < m ? h = T : w = T;
  return 3 * (1 - T) * (1 - T) * T * s + 3 * (1 - T) * T * T * c + T * T * T;
}, lu = { std: Gs(0.2, 0, 0, 1), acc: Gs(0.3, 0, 1, 1), dec: Gs(0, 0, 0, 1) };
function ps(n, s) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || s ? "night" : "day");
}
function $d(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [Ft(s.clear[0], s.cloudy[0], 0.12), Ft(s.clear[1], s.cloudy[1], 0.12)], s.storm = [Ft(s.rain[0], "#000000", 0.22), Ft(s.rain[1], "#000000", 0.22)], s;
}
const ll = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], dl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], cl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function ul(n, s = po) {
  const o = { ...po, ...s }, c = $d(o), m = String(n).split("/"), h = c[m[0]] ? m[0] : "clear", w = m[1] === "night", T = c[h][w ? 1 : 0], v = {
    night: w,
    clearness: h === "clear" ? 1 : h === "partly" ? 0.7 : 0.25,
    sky: T,
    skyStops: [T],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: ll.map(() => ({ o: 0 })),
    rain: dl.map(() => ({ o: 0, dy: -16 })),
    snow: cl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (ie) => ll.map(() => ({ o: ie }));
  return h === "clear" ? w ? (v.moon.o = 1, v.stars = B(1)) : v.sun.o = 1 : h === "partly" ? (v.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (v.moon = { x: 34, y: 33, d: 48, o: 1 }, v.stars = B(0.7)) : v.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : h === "cloudy" || h === "fog" ? (v.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? v.moon = { x: 40, y: 36, d: 40, o: 0 } : v.sun = { x: 40, y: 36, r: 20, o: 0 }) : (v.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? v.moon = { x: 38, y: 28, d: 36, o: 0 } : v.sun = { x: 38, y: 28, r: 18, o: 0 }, h === "snow" ? v.snow = cl.map(() => ({ o: 1, dy: 0 })) : v.rain = dl.map((ie, te) => ({ o: h === "storm" && te === 1 ? 0 : 1, dy: 0 })), h === "storm" && (v.bolt = { o: 1, dy: 0 })), v;
}
const hd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function du(n, s, o, c = po, m = !1) {
  const h = { ...po, ...c }, w = (D, R) => D > 0.01 && R > 0.01 ? "stay" : D > 0.01 ? "leave" : R > 0.01 ? "enter" : "none", T = (D, R, z, J) => {
    const V = D[0] + R * J, q = D[1] - (z - 1 - R) * J;
    return lu[D[2]](Nn((o - V) / Math.max(1e-3, q - V)));
  }, v = (D, R, z, J = 0, V = 1, q = 0) => {
    const Y = w(D.o, R.o);
    if (Y === "none") return { ...R, o: 0 };
    const F = T(hd[z][Y], J, V, q), G = {};
    for (const ne in R) G[ne] = m && Y !== "stay" && ne !== "o" ? Y === "leave" ? D[ne] : R[ne] : ud(D[ne], R[ne], F);
    return G;
  }, B = T(hd.sky, 0, 1, 0);
  let ie, te;
  if (n.night !== s.night) {
    const D = Math.min(n.clearness, s.clearness), R = Ft(Ft(n.sky, s.sky, 0.5), h.dusk, 0.6 * D);
    ie = B < 0.5 ? Ft(n.sky, R, B * 2) : Ft(R, s.sky, B * 2 - 1), te = D > 0.5 ? [n.sky, h.dusk, s.sky] : [n.sky, s.sky];
  } else
    ie = Ft(n.sky, s.sky, B), te = [n.sky, s.sky];
  return {
    night: o < 0.5 ? n.night : s.night,
    clearness: ud(n.clearness, s.clearness, o),
    sky: ie,
    skyStops: te,
    skyT: B,
    sun: v(n.sun, s.sun, "body"),
    moon: v(n.moon, s.moon, "body"),
    cloud: v(n.cloud, s.cloud, "cloud"),
    stars: s.stars.map((D, R) => v(n.stars[R], D, "fx", R, s.stars.length, 0.05)),
    rain: s.rain.map((D, R) => v(n.rain[R], D, "fx", R, s.rain.length, 0.05)),
    snow: s.snow.map((D, R) => v(n.snow[R], D, "fx", R, s.snow.length, 0.05)),
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
], Rn = (n, s) => (cu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, uu = 0, fl = 1, gl = 2, vl = 3, bl = 4, Dn = 5, Wi = 6, Bo = 7, wl = 8, ls = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), pu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Jd = (n, s, o) => {
  let c = !1;
  for (let m = 0, h = n.length - 1; m < n.length; h = m++) {
    const w = n[m], T = n[h];
    w[1] > o != T[1] > o && s < (T[0] - w[0]) * (o - w[1]) / (T[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function Xd(n, { size: s = 90, px: o = 2, oneBit: c = !1, colors: m = po, ink: h = "#26221e", paper: w = "#fbf9f6", clock: T = 0, idle: v = !1 } = {}) {
  const B = { ...po, ...m }, ie = Math.sin, te = Math.PI * 2, D = Math.max(6, Math.round(s / o)), R = D / 90, z = v ? Math.floor(T / 100) * 100 : 0, J = v ? ie(te * z / 3600) : 0, V = v ? 1.8 * ie(te * z / 6400) : 0, q = v ? 0.9 * ie(te * z / 4100) : 0, Y = v ? 0.8 * ie(te * z / 5200) : 0, F = z / 3400 % 1, G = v && n.bolt.o > 0.5 && (F < 0.04 || F > 0.08 && F < 0.11), ne = new Array(D * D), E = new Uint8Array(D * D), W = (b, M, k, S, oe) => {
    k == null || b < 0 || M < 0 || b >= D || M >= D || (S >= 1 || S > Rn(b + 5, M + 3)) && (ne[M * D + b] = k, E[M * D + b] = oe);
  }, he = (b, M, k, S) => {
    for (let oe = Math.max(0, Math.floor(M - k) - 1); oe <= Math.min(D - 1, M + k + 1); oe++) for (let K = Math.max(0, Math.floor(b - k) - 1); K <= Math.min(D - 1, b + k + 1); K++) S(K, oe, K + 0.5 - b, oe + 0.5 - M);
  }, Se = n.skyStops || [n.sky], g = n.skyT || 0;
  for (let b = 0; b < D; b++) {
    const M = n.night ? Nn(1 - (b + 0.5) / (D * 0.7)) * 0.85 : Nn(((b + 0.5) / D - 0.35) / 0.65) * 0.85;
    for (let k = 0; k < D; k++) {
      let S = Se[0];
      if (Se.length > 1) {
        const oe = g * (Se.length - 1), K = Math.min(Se.length - 2, Math.floor(oe));
        S = oe - K > Rn(k, b) ? Se[K + 1] : Se[K];
      }
      M > Rn(k + 2, b + 5) && (S = n.night ? Ft(S, "#000000", 0.28) : Ft(S, "#ffffff", 0.2)), ne[b * D + k] = G ? Ft(S, "#ffffff", 0.25) : S;
    }
  }
  if (n.sun.o > 0.01) {
    const b = n.sun.x * R, M = n.sun.y * R, k = Math.max(1, n.sun.r * R);
    if (v) {
      const S = k * (1.45 + 0.06 * J), oe = Ft(B.sun, "#ffffff", 0.55);
      if (he(b, M, S, (K, Q, ae, re) => {
        const Be = Math.sqrt(ae * ae + re * re);
        Be > k && Be < S && W(K, Q, oe, 0.26 * (1 - (Be - k) / (S - k)) * n.sun.o, uu);
      }), n.sun.o > 0.5) {
        const K = Math.floor(z / 500) % 2, Q = Math.max(1, k * 0.22);
        for (let ae = 0; ae < 8; ae++) if (ae % 2 === K) for (let re = k + 1.5; re < k + 1.5 + Q; re += 0.7) W(Math.floor(b + Math.cos(ae * Math.PI / 4) * re), Math.floor(M + Math.sin(ae * Math.PI / 4) * re), B.sun, n.sun.o, wl);
      }
    }
    he(b, M, k, (S, oe, K, Q) => {
      if (K * K + Q * Q > k * k) return;
      const ae = ((K * 0.643 + Q * 0.766) / k + 1) / 2;
      W(S, oe, Nn((ae - 0.62) / 0.38) > Rn(S, oe) ? B.sunEdge : B.sun, n.sun.o, fl);
    });
  }
  if (ll.forEach((b, M) => {
    const k = n.stars[M].o;
    if (k < 0.01) return;
    const S = Math.floor(b[0] * R), oe = Math.floor(b[1] * R), K = v ? (Math.floor(z / 300) + M * 3) % 6 : 0;
    if (K === 5) return;
    const Q = Math.round(b[2] * R * (K === 4 ? 0.3 : K < 2 ? 1 : 0.6));
    W(S, oe, B.star, k, Bo);
    for (let ae = 1; ae <= Q; ae++) {
      const re = ae === Q && Q > 1 ? Ft(B.star, n.sky, 0.5) : B.star;
      W(S - ae, oe, re, k, Bo), W(S + ae, oe, re, k, Bo), W(S, oe - ae, re, k, Bo), W(S, oe + ae, re, k, Bo);
    }
  }), n.moon.o > 0.01) {
    const b = Math.max(1.5, n.moon.d * R * 0.37), M = n.moon.x * R, k = n.moon.y * R + (v && Y > 0.4 ? -1 : 0), S = M + 0.547 * b, oe = k - 0.503 * b, K = 0.82 * b, Q = Ft(B.moon, "#ffffff", 0.6);
    he(M, k, b, (ae, re, Be, nt) => {
      if (Be * Be + nt * nt > b * b) return;
      const Pt = ae + 0.5 - S, yt = re + 0.5 - oe;
      Pt * Pt + yt * yt <= K * K || W(ae, re, Nn((nt + b) / (2 * b) * 1.1 - 0.1) > Rn(ae, re) ? B.moon : Q, n.moon.o, gl);
    });
  }
  const ye = Math.max(2, Math.round(15.65 * R)), Me = Math.max(1, Math.round(5.87 * R * 0.5));
  dl.forEach((b, M) => {
    const k = n.rain[M];
    let S = k.dy, oe = k.o;
    if (oe < 0.01) return;
    if (v) {
      const ae = (z / 950 + M / 3) % 1;
      S += -5 + ae * 14, oe *= ae < 0.18 ? ae / 0.18 : ae > 0.72 ? (1 - ae) / 0.28 : 1;
    }
    const K = (b[0] + 3 + V) * R, Q = (b[1] + S) * R;
    for (let ae = 0; ae < ye; ae++) for (let re = 0; re < Me; re++) W(Math.floor(K - 0.208 * ae) + re, Math.floor(Q) + ae, B.rain, oe, bl);
  });
  const Oe = Math.max(0, Math.round(7.34 * R / 2.6));
  if (cl.forEach((b, M) => {
    const k = n.snow[M];
    let S = k.dy, oe = 0, K = k.o;
    if (K < 0.01) return;
    if (v) {
      const re = (z / 3200 + M / 5) % 1;
      S += -6 + re * 14, oe = 1.5 * ie(te * (re * 1.5 + M / 5)), K *= re < 0.2 ? re / 0.2 : re > 0.75 ? (1 - re) / 0.25 : 1;
    }
    const Q = Math.floor((b[0] + 3.67 + oe + V) * R), ae = Math.floor((b[1] + 3.67 + S) * R);
    W(Q, ae, B.snow, K, Dn);
    for (let re = 1; re <= Oe; re++)
      W(Q - re, ae, B.snow, K, Dn), W(Q + re, ae, B.snow, K, Dn), W(Q, ae - re, B.snow, K, Dn), W(Q, ae + re, B.snow, K, Dn), Oe > 1 && re < Oe && (W(Q - re, ae - re, B.snow, K, Dn), W(Q + re, ae - re, B.snow, K, Dn), W(Q - re, ae + re, B.snow, K, Dn), W(Q + re, ae + re, B.snow, K, Dn));
  }), n.bolt.o > 0.01)
    if (D >= 30) {
      const b = 39 + V, M = 50 + n.bolt.dy;
      for (let k = Math.floor(M * R); k <= (M + 28) * R; k++) for (let S = Math.floor(b * R); S <= (b + 13) * R; S++)
        Jd(mu, (S + 0.5) / R - b, (k + 0.5) / R - M) && W(S, k, B.sun, n.bolt.o, Wi);
    } else {
      const b = D / 18, M = 7, k = 10 + Math.round(n.bolt.dy * 0.2);
      pu.forEach((S, oe) => S.split("").forEach((K, Q) => {
        if (K !== "#") return;
        const ae = Math.floor((M + Q) * b), re = Math.floor((k + oe) * b);
        for (let Be = re; Be < Math.max(re + 1, Math.floor((k + oe + 1) * b)); Be++) for (let nt = ae; nt < Math.max(ae + 1, Math.floor((M + Q + 1) * b)); nt++) W(nt, Be, B.sun, n.bolt.o, Wi);
      }));
    }
  if (n.cloud.o > 0.01) {
    const b = Math.max(3, n.cloud.w * R), M = b * 0.6665, k = (n.cloud.x + V) * R - b / 2, S = (n.cloud.y + q) * R - M / 2, oe = Ft(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), K = Ft(oe, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(S) - 1); Q <= Math.min(D - 1, S + M + 1); Q++) for (let ae = Math.max(0, Math.floor(k) - 1); ae <= Math.min(D - 1, k + b + 1); ae++) {
      const re = (ae + 0.5 - k) / b, Be = (Q + 0.5 - S) / b;
      ls(re, Be) && W(ae, Q, !ls(re, Be + 1 / b) || Nn((Be - 0.42) / 0.25) * 0.8 > Rn(ae, Q) ? K : oe, n.cloud.o, vl);
    }
  }
  return Qd(ne, E, D, D, { oneBit: c, ink: h, paper: w, snowInk: !n.night });
}
function Qd(n, s, o, c, { oneBit: m, ink: h, paper: w, snowInk: T }) {
  const v = new Uint8ClampedArray(o * c * 4), B = rs(h), ie = rs(w);
  for (let te = 0; te < c; te++) for (let D = 0; D < o; D++) {
    const R = te * o + D, z = s[R];
    if (n[R] == null) continue;
    let J = rs(n[R]);
    if (m) {
      let V;
      z === bl || z === wl ? V = !0 : z === Dn ? V = T : z === Bo || z === Wi ? V = !1 : V = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= Rn(D, te), (z === fl || z === gl || z === vl || z === Wi) && (D > 0 && s[R - 1] !== z || D < o - 1 && s[R + 1] !== z || te > 0 && s[R - o] !== z || te < c - 1 && s[R + o] !== z) && (V = !0), J = V ? B : ie;
    }
    v[R * 4] = J[0], v[R * 4 + 1] = J[1], v[R * 4 + 2] = J[2], v[R * 4 + 3] = 255;
  }
  return { w: o, h: c, data: v };
}
const hu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fu = (n) => ps(n, !1).split("/")[0], Us = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", bu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], yu = [".##", "##.", ".#.", "#.."];
function ec(n, { width: s, height: o, colors: c, wave: m = 0.38, soft: h = 6, glow: w = 0.6 }) {
  const T = { ...po, dawn: "#e5a77e", ...c }, v = $d(T), B = s, ie = o, te = B / 6, D = te / 2, R = Math.PI * 2, z = n.length ? n : [{ cond: "cloudy", night: !1 }], J = [...Array(12)].map((F, G) => {
    const ne = z[Math.min(G, z.length - 1)], E = fu(ne.cond), W = G % 2 === 1;
    return { cond: ne.cond, k: E, night: W, sky: v[E][W ? 1 : 0], cover: hu[E] };
  }), V = (F) => ie * (0.5 - m * Math.cos(R * (F / te - 0.25)));
  return { C: T, S: J, W: B, H: ie, cw: te, sw: D, TAU: R, yb: V, side: (F, G, ne) => {
    const E = (F ? V(G) - ne : ne - V(G)) / Math.max(3, h * 1.4) + 0.5;
    return E <= 0 ? 0 : E >= 1 ? 1 : E;
  }, glowAt: (F) => {
    const G = ((F / te - 0.25) % 1 + 1) % 1, ne = Math.max(0, Math.min(5, Math.round(F / te - 0.25))), E = Math.max(0, Math.min(5, Math.round(F / te - 0.75))), W = 1 - (J[2 * ne].cover + J[2 * E + 1].cover) / 2, he = Math.sin(Math.PI * Math.min(1, Math.max(0, V(F) / ie)));
    return { c: G < 0.5 ? T.dusk : T.dawn, a: w * (0.2 + 0.8 * W) * he * he };
  }, soft: h, tw: te * 0.3, sy: ie / 90 };
}
function tc(n, { clock: s = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: h, side: w, C: T, TAU: v, sy: B } = n, ie = s, te = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((D, R) => {
    const z = Us(c * 977 + R * 131 + 7), J = (R + 0.5) * h, V = D.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[D.k] : 0;
    for (let q = 0; q < V; q++) {
      const Y = J + (z() - 0.5) * h * 1.6, F = (6 + z() * 76) * B, G = z() < 0.35, ne = 1.8 + z() * 1.6, E = w(!0, Y, F) * (G ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(v * ie / 2600 + q * 1.7 + R) : 1);
      E >= 0.03 && te.stars.push({ x: Y, y: F, big: G, size: ne, o: E });
    }
    if (!D.night && (D.k === "clear" || D.k === "partly")) {
      const q = J + (z() - 0.5) * h * 0.3, Y = Math.min(15, h * 0.29);
      te.suns.push({ x: q, y: 32 * B, rad: Y, halo: Y * 2.8 * (o ? 1 + 0.07 * Math.sin(v * ie / 3600 + R) : 1) });
    }
    if (D.night && (D.k === "clear" || D.k === "partly")) {
      const q = Math.min(0.78, h * 0.55 / 34), Y = J - 23 * q + (z() - 0.5) * h * 0.2;
      te.moons.push({ x: Y + 23 * q, y: (4 + (o ? 0.8 * Math.sin(v * ie / 5200 + R) : 0)) * B + 23 * q, d: 46 * q });
    }
  }), m.forEach((D, R) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[D.k];
    if (!z) return;
    const J = Us(c * 577 + R * 71 + 3), V = (R + 0.5) * h, q = D.k === "rain" || D.k === "storm" || D.night ? T.cloudNight : T.cloudDay, Y = D.night ? 0.82 : D.k === "storm" ? 0.75 : 1;
    for (let F = 0; F < z; F++) {
      const G = h / 46 * (D.k === "partly" ? 0.85 : 0.75 + J() * 0.55), ne = V + (D.k === "partly" ? h * 0.12 : (J() - 0.5) * h * 1.05), E = (D.k === "partly" ? 40 : 6 + J() * 26) * B, W = o ? 2.5 * Math.sin(v * ie / 9e3 + R * 1.3 + F * 2.1) : 0, he = o ? 0.9 * Math.sin(v * ie / 6100 + R + F) : 0;
      te.clouds.push({ x: ne - 23 * G + W, y: E - 15.33 * G + he, w: 46 * G, h: 30.66 * G, fill: q, o: Y * (z > 1 && F === 0 ? 0.85 : 1) });
    }
  }), m.forEach((D, R) => {
    const z = Us(c * 313 + R * 29 + 11), J = (R + 0.5) * h, V = D.cond === "pouring" ? 16 : D.cond === "rainy" || D.cond === "hail" ? 9 : D.cond === "lightning-rainy" ? 12 : D.cond === "snowy-rainy" ? 5 : 0;
    for (let Y = 0; Y < V; Y++) {
      let F = J + (z() - 0.5) * h * 1.05, G = 44 + z() * 36, ne = 1;
      if (o) {
        const W = ((G - 44 + ie * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (W - (G - 44)), G = 44 + W, ne = Math.min(1, W / 6, (36 - W) / 6);
      }
      G *= B;
      const E = w(D.night, F, G) * ne;
      E >= 0.05 && te.drops.push({ x: F, y: G, o: E });
    }
    const q = D.cond === "snowy" ? 11 : D.cond === "snowy-rainy" ? 6 : 0;
    for (let Y = 0; Y < q; Y++) {
      let F = J + (z() - 0.5) * h * 1.05, G = 40 + z() * 44, ne = 1;
      if (o) {
        const W = ((G - 40 + ie * 9e-3) % 44 + 44) % 44;
        G = 40 + W, F += 1.6 * Math.sin(v * ie / 2800 + Y * 1.9 + R), ne = Math.min(1, W / 6, (44 - W) / 6);
      }
      G *= B;
      const E = w(D.night, F, G) * ne;
      E >= 0.05 && te.flakes.push({ x: F, y: G, o: E });
    }
    if (D.k === "fog") {
      const Y = D.night ? "#c8ccd6" : "#ffffff", F = D.night ? 0.28 : 0.62, G = o ? 4 * Math.sin(v * ie / 8e3 + R) : 0;
      for (let ne = 0; ne < 4; ne++) te.fogs.push({ x: J - h * 0.75 + ne % 2 * h * 0.18 + (ne % 2 ? G : -G), y: (30 + ne * 13) * B, w: h * 1.3, c: Y, a: F });
    }
    if (D.k === "storm") {
      const Y = (ie / 3400 + R * 0.37) % 1;
      te.bolts.push({ x: J + (z() - 0.5) * h * 0.3 - 5, y: 36 * B, o: o && !(Y < 0.05 || Y > 0.09 && Y < 0.12) ? 0.8 : 1 });
    }
  }), te;
}
function ku(n, s, o, c, m, h, w, T) {
  const { S: v, C: B, cw: ie, yb: te, glowAt: D, soft: R, tw: z, sy: J } = n, V = new Array(o * c), q = new Uint8Array(o * c), Y = new Uint8Array(o * c), F = (b, M, k, S, oe) => {
    k == null || b < 0 || M < 0 || b >= o || M >= c || (S >= 1 || S > Rn(b + 5, M + 3)) && (V[M * o + b] = k, q[M * o + b] = oe);
  }, G = (b, M, k, S) => {
    for (let oe = Math.max(0, Math.floor(M - k) - 1); oe <= Math.min(c - 1, M + k + 1); oe++) for (let K = Math.max(0, Math.floor(b - k) - 1); K <= Math.min(o - 1, b + k + 1); K++) S(K, oe, K + 0.5 - b, oe + 0.5 - M);
  }, ne = (b, M, k) => {
    for (let oe = 0; oe < b.length - 1; oe++) {
      const K = (oe + M) * ie;
      if (k < K - z / 2) return [b[oe], b[oe], 0];
      if (k <= K + z / 2) return [b[oe], b[oe + 1], (k - K + z / 2) / z];
    }
    const S = b[b.length - 1];
    return [S, S, 0];
  }, E = v.filter((b) => !b.night).map((b) => b.sky), W = v.filter((b) => b.night).map((b) => b.sky), he = R / h, Se = 16 * J / h;
  for (let b = 0; b < o; b++) {
    const M = (b + 0.5) * m, k = te(M) / h, S = ne(E, 0.75, M), oe = ne(W, 1.25, M), K = D(M);
    for (let Q = 0; Q < c; Q++) {
      const ae = Rn(b, Q), re = Q + 0.5 - k, Be = (he > 0.01 ? Nn(0.5 + re / he) : re > 0 ? 1 : 0) > ae;
      let nt = Be ? S[2] > ae ? S[1] : S[0] : oe[2] > ae ? oe[1] : oe[0];
      (Be ? Nn(((Q + 0.5) / c - 0.45) / 0.55) * 0.7 : Nn(1 - (Q + 0.5) / (c * 0.55)) * 0.7) > Rn(b + 2, Q + 5) && (nt = Be ? Ft(nt, "#ffffff", 0.18) : Ft(nt, "#000000", 0.25)), Be && re >= 0 && re < Se && K.a * 1.3 * (1 - re / Se) > Rn(b + 6, Q + 1) && (nt = K.c), V[Q * o + b] = nt, Y[Q * o + b] = Be ? 0 : 1;
    }
  }
  const g = Ft(B.sun, "#ffffff", 0.55), ye = Ft(B.moon, "#ffffff", 0.6);
  s.stars.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    if (M < 0 || k < 0 || M >= o || k >= c || !Y[k * o + M] || b.o < 0.15) return;
    const S = b.o > 0.45 ? B.star : Ft(B.star, V[k * o + M], 0.5), oe = b.big && b.o > 0.6 ? Math.floor(b.size / m) : 0;
    F(M, k, S, 1, Bo);
    for (let K = 1; K <= oe; K++) [[M - K, k], [M + K, k], [M, k - K], [M, k + K]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < o && Q[1] < c && Y[Q[1] * o + Q[0]] && F(Q[0], Q[1], S, 1, Bo);
    });
  }), s.suns.forEach((b) => {
    const M = Math.max(1.5, b.rad / m), k = b.x / m, S = b.y / h, oe = b.halo / m * 0.85;
    if (G(k, S, oe, (K, Q, ae, re) => {
      const Be = Math.sqrt(ae * ae + re * re);
      Be > M && Be < oe && !Y[Q * o + K] && F(K, Q, g, 0.3 * (1 - (Be - M) / (oe - M)), 0);
    }), T) {
      const K = Math.floor(w / 500) % 2, Q = Math.max(1, M * 0.3);
      for (let ae = 0; ae < 8; ae++) if (ae % 2 === K) for (let re = M + 1.2; re < M + 1.2 + Q; re += 0.7) F(Math.floor(k + Math.cos(ae * Math.PI / 4) * re), Math.floor(S + Math.sin(ae * Math.PI / 4) * re), B.sun, 1, wl);
    }
    G(k, S, M, (K, Q, ae, re) => {
      ae * ae + re * re <= M * M && F(K, Q, Nn(((re / M + 1) / 2 - 0.6) / 0.4) > Rn(K, Q) ? B.sunEdge : B.sun, 1, fl);
    });
  }), s.moons.forEach((b) => {
    const M = Math.max(1.5, b.d * 0.37 / m), k = b.x / m, S = b.y / h, oe = k + 0.547 * M, K = S - 0.503 * M, Q = 0.82 * M;
    G(k, S, M, (ae, re, Be, nt) => {
      if (Be * Be + nt * nt > M * M) return;
      const Pt = ae + 0.5 - oe, yt = re + 0.5 - K;
      Pt * Pt + yt * yt > Q * Q && F(ae, re, Nn((nt + M) / (2 * M) * 1.1 - 0.1) > Rn(ae, re) ? B.moon : ye, 1, gl);
    });
  }), s.clouds.forEach((b) => {
    const M = Math.max(3, b.w / m), k = M * 0.6665, S = b.x / m, oe = b.y / h, K = Ft(b.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(oe) - 1); Q <= Math.min(c - 1, oe + k + 1); Q++) for (let ae = Math.max(0, Math.floor(S) - 1); ae <= Math.min(o - 1, S + M + 1); ae++) {
      const re = (ae + 0.5 - S) / M, Be = (Q + 0.5 - oe) / M;
      ls(re, Be) && F(ae, Q, !ls(re, Be + 1 / M) || Nn((Be - 0.42) / 0.25) * 0.8 > Rn(ae, Q) ? K : b.fill, b.o, vl);
    }
  }), s.fogs.forEach((b) => {
    const M = Math.floor(b.y / h), k = Math.max(M, Math.floor((b.y + 6 * J) / h) - 1), S = Math.floor(b.x / m), oe = Math.floor((b.x + b.w) / m);
    for (let K = M; K <= k; K++) for (let Q = S; Q <= oe; Q++) {
      const ae = (Q - S) / Math.max(1, oe - S);
      F(Q, K, b.c, b.a * (ae < 0.25 ? ae / 0.25 : ae > 0.75 ? (1 - ae) / 0.25 : 1), 0);
    }
  });
  const Me = Math.max(2, Math.round(9 / h));
  s.drops.forEach((b) => {
    const M = b.x / m, k = Math.floor(b.y / h);
    for (let S = 0; S < Me; S++) F(Math.floor(M - 0.208 * S * h / m), k + S, B.rain, b.o, bl);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    F(M, k, B.snow, b.o, Dn);
    for (let S = 1; S <= Oe; S++)
      F(M - S, k, B.snow, b.o, Dn), F(M + S, k, B.snow, b.o, Dn), F(M, k - S, B.snow, b.o, Dn), F(M, k + S, B.snow, b.o, Dn);
  }), s.bolts.forEach((b) => {
    if (m <= 3.5)
      for (let M = Math.floor(b.y / h); M <= (b.y + 24) / h; M++) for (let k = Math.floor(b.x / m); k <= (b.x + 11) / m; k++)
        Jd(xu, (k + 0.5) * m - b.x, (M + 0.5) * h - b.y) && F(k, M, B.sun, 1, Wi);
    else {
      const M = Math.round(b.x / m), k = Math.round(b.y / h);
      yu.forEach((S, oe) => S.split("").forEach((K, Q) => {
        K === "#" && F(M + Q, k + oe, B.sun, 1, Wi);
      }));
    }
  }), { col: V, ids: q };
}
function Mu(n, s) {
  const o = s.px, c = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), h = s.width / c, w = s.height / m, T = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (R) => {
    const z = ec(R, s);
    return ku(z, tc(z, { clock: T, ambient: s.ambient, seed: s.seed }), c, m, h, w, T, s.ambient);
  }, B = v(n), ie = s.reveal == null ? 1 : Nn(s.reveal);
  let te = B.col, D = B.ids;
  if (ie < 1) {
    const R = s.prev ? v(s.prev) : null, z = ie * (c + 12);
    te = new Array(c * m), D = new Uint8Array(c * m);
    for (let J = 0; J < c * m; J++) {
      const V = J % c, q = J / c | 0;
      (s.reduce ? ie : Nn((z - V) / 12)) > Rn(V, q) ? (te[J] = B.col[J], D[J] = B.ids[J]) : R ? (te[J] = R.col[J], D[J] = R.ids[J]) : (te[J] = null, D[J] = 255);
    }
  }
  return Qd(te, D, c, m, { oneBit: s.oneBit, ink: s.ink, paper: s.paper, snowInk: !1 });
}
function Cu(n, s, o) {
  const c = o.width, m = o.height, h = o.reveal == null ? 1 : Nn(o.reveal), w = (D, R) => {
    const z = ec(R, o);
    Su(D, z, tc(z, o));
  };
  if (n.clearRect(0, 0, c, m), h >= 1) {
    w(n, s);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = h, w(n, s), n.restore();
    return;
  }
  const T = n.canvas, v = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (v.width !== T.width || v.height !== T.height) && (v.width = T.width, v.height = T.height);
  const B = v.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, c, m), w(B, s);
  const ie = h * (c + 64) - 64, te = B.createLinearGradient(ie, 0, ie + 64, 0);
  te.addColorStop(0, "rgba(0,0,0,1)"), te.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = te, B.fillRect(0, 0, c, m), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Su(n, s, o) {
  const { W: c, H: m, S: h, C: w, cw: T, yb: v, glowAt: B, soft: ie, tw: te, sy: D } = s, R = (g, ye) => {
    const Me = rs(g);
    return "rgba(" + Me[0] + "," + Me[1] + "," + Me[2] + "," + Math.max(0, Math.min(1, ye)).toFixed(3) + ")";
  }, z = (g, ye) => {
    const Me = n.createLinearGradient(0, 0, c, 0);
    Me.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const b = (Oe + ye) * T, M = (b - te / 2) / c, k = (b + te / 2) / c;
      M > 0 && M < 1 && Me.addColorStop(M, g[Oe]), k > 0 && k < 1 && Me.addColorStop(k, g[Oe + 1]);
    }
    return Me.addColorStop(1, g[g.length - 1]), Me;
  }, J = Math.max(24, Math.ceil(c / 4)), V = (g, ye) => {
    n.beginPath();
    for (let Me = 0; Me <= J; Me++) {
      const Oe = c * Me / J, b = g == null ? 0 : v(Oe) + g;
      Me ? n.lineTo(Oe, b) : n.moveTo(Oe, b);
    }
    for (let Me = J; Me >= 0; Me--) {
      const Oe = c * Me / J;
      n.lineTo(Oe, v(Oe) + ye);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = z(h.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, c, m);
  const q = n.createLinearGradient(0, 0, c, 0);
  for (let g = 0; g <= 64; g++) {
    const ye = B(c * g / 64);
    q.addColorStop(g / 64, R(ye.c, Math.min(1, ye.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, V(g * 2 * D, (g + 1) * 2 * D);
  n.fillStyle = z(h.filter((g) => g.night).map((g) => g.sky), 1.25);
  const Y = Math.max(0.5, ie), F = 6;
  n.globalAlpha = 1, V(null, -Y);
  for (let g = 0; g < F; g++)
    n.globalAlpha = 1 - (g + 0.5) / F, V(-Y + 2 * Y * g / F, -Y + 2 * Y * (g + 1) / F);
  n.globalAlpha = 1;
  const G = new Path2D(bu), ne = new Path2D(vu), E = new Path2D(gu), W = new Path2D(wu);
  n.fillStyle = w.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(G), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const he = Ft(w.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ye = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ye.addColorStop(0, R(he, 0.42)), ye.addColorStop(0.7, R(he, 0)), n.fillStyle = ye, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Me = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Me.addColorStop(0.6, w.sun), Me.addColorStop(1, w.sunEdge), n.fillStyle = Me, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Ft(w.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ye = n.createLinearGradient(0, 6, 0, 40);
    ye.addColorStop(0, Se), ye.addColorStop(1, w.moon), n.fillStyle = ye, n.fill(ne), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(E), n.restore();
  }), o.fogs.forEach((g) => {
    const ye = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ye.addColorStop(0, R(g.c, 0)), ye.addColorStop(0.25, R(g.c, g.a)), ye.addColorStop(0.75, R(g.c, g.a)), ye.addColorStop(1, R(g.c, 0)), n.fillStyle = ye, n.fillRect(g.x, g.y, g.w, 6 * D);
  }), n.fillStyle = w.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
function Tu(n, s) {
  var od, id, rd, sd, ld, dd, cd;
  const o = (e) => n.getElementById(e), c = o("workoutView"), m = o("workoutNameInput");
  let h = !0;
  const w = o("homeClock");
  function T() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  T(), setInterval(T, 15e3);
  const v = o("createFlow"), B = o("createMovementsSlot"), ie = o("createTimingSlot"), te = o("createFinishSlot"), D = o("movementStepSummary"), R = o("timingStepSummary"), z = o("finishStepSummary"), J = o("continueToTiming"), V = o("continueToFinish"), q = o("finishMoveButton");
  let Y = !1, F = [];
  function G(e) {
    !e || F.some((a) => a.node === e) || F.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ne(e, a) {
    e && (G(e), a.appendChild(e));
  }
  function E() {
    [...F].reverse().forEach(({ node: e, parent: a, next: r }) => {
      a && (r && r.parentNode === a ? a.insertBefore(e, r) : a.appendChild(e));
    }), F = [];
  }
  function W(e) {
    n.querySelectorAll(".createStep").forEach((a) => {
      a.classList.toggle("active", a.dataset.createStep === e);
    }), e === "timing" && (Y = !0), he();
  }
  function he() {
    var X, ee;
    if (!ht) return;
    at[dt];
    const e = tn.filter((U) => !U.hidden), a = e.filter((U) => U.kind !== "rest").length, r = e.filter((U) => U.kind === "rest").length;
    D.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const d = a > 0, p = n.querySelector('[data-open-step="timing"]'), x = n.querySelector('[data-open-step="finish"]');
    p.disabled = !d, J.disabled = !d, R.textContent = d ? Sn(M.value) + " · " + Lt(k.value) + " movement · " + Lt(S.value) + " rest" : "Add a movement first", x.disabled = !(d && Y);
    const L = ((m == null ? void 0 : m.value) || "").trim(), N = [];
    (X = o("includeWarmupPreset")) != null && X.checked && N.push("warm-up"), (ee = o("includeCooldownPreset")) != null && ee.checked && N.push("cooldown"), z.textContent = L ? L + (N.length ? " · " + N.join(" + ") : "") : N.length ? N.join(" + ") : "Name and optional extras";
  }
  function Se() {
    var ke, ze, Te;
    v.hidden = !1, Y = !1;
    const e = n.querySelector(".editNameRow"), a = o("createMoveOptions"), r = n.querySelector(".timeTiles"), d = o("routineSummaryModal"), p = n.querySelector(".tempoRevealRow"), x = o("tempoExperiment"), L = (ke = o("warmupList")) == null ? void 0 : ke.closest("section"), N = o("movementCreatorLaunch"), X = o("movementCreator"), ee = (ze = o("strengthList")) == null ? void 0 : ze.closest("section"), U = (Te = o("cooldownList")) == null ? void 0 : Te.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), L, N, X, ee, U].forEach((xe) => xe && ne(xe, B)), [a, r, d, p, x].forEach((xe) => ne(xe, ie)), ne(e, te), W("movements"), he();
  }
  function g() {
    E(), v.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || W(e.dataset.openStep);
  })), J.addEventListener("click", () => {
    J.disabled || W("timing");
  }), V.addEventListener("click", () => W("finish")), q.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ye = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Me = o("homeNav"), Oe = o("settingsNav");
  function b(e) {
    Object.entries(ye).forEach(([a, r]) => r.classList.toggle("active", a === e)), Me.classList.toggle("active", e === "home"), Oe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Ui, 400), e === "settings" && (requestAnimationFrame(() => cr(n.querySelector(".tab.active"), !1)), Or());
  }
  const M = o("totalTime"), k = o("workTime"), S = o("restTime"), oe = o("totalOut"), K = o("workOut"), Q = o("restOut"), ae = o("totalFill"), re = o("workFill"), Be = o("restFill"), nt = o("roundsInput"), Pt = o("roundsFill"), yt = o("roundsOut"), fa = o("totalLabel"), _a = o("routineSummaryModal"), Le = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let it = Le.map((e) => ({ ...e })), tn = [
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
  const qa = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Vt = qa.map((e) => ({ ...e }));
  const bn = {
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
  }, ut = Po(s.data), at = ut.profiles;
  let dt = at[ut.selected] ? ut.selected : ut.order.find((e) => at[e]) || "kettlebell";
  function Po(e) {
    const a = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(bn)), d = (Array.isArray(a.order) ? a.order : Object.keys(r)).filter((p) => r[p]);
    return Object.keys(r).forEach((p) => {
      d.includes(p) || d.push(p);
    }), {
      v: 1,
      profiles: r,
      order: d,
      selected: a.selected || d[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : Va(a.energy)).map(mn),
      settings: { ...a.settings || {} }
    };
  }
  function Va(e) {
    if (!Array.isArray(e)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((d) => {
      const p = new Date(d.at);
      if (isNaN(p)) return;
      const x = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0"), L = p.getHours() < 14 ? "morning" : "evening";
      if (r.some((X) => X.date === x && X.slot === L)) return;
      const N = a.indexOf(d.value) + 1;
      N > 0 && r.push({ date: x, slot: L, mood: null, energy: N, at: d.at });
    }), r;
  }
  function mn(e) {
    if (e.scale === 100) return e;
    const a = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: a(e.mood), energy: a(e.energy), scale: 100 };
  }
  function Cn() {
    ht || (ut.selected = dt, ut.order = ut.order.filter((e) => at[e] && e !== Bn), s.save(ut));
  }
  function pt() {
    return ut.settings;
  }
  function rt(e) {
    const a = at[e];
    if (!a) return;
    dt = e;
    const r = o("workoutNameInput");
    if (r && (r.value = a.name), M.value = a.total, k.value = a.work, S.value = a.rest, nt.value = a.rounds || 1, a.customSequence) {
      const d = (a.sequence || []).map((x) => ({ ...x })), p = (x) => d.filter((L) => L.presetRole === x).map(({ presetRole: L, ...N }) => N);
      it = (a.warmup || p("warmup")).map((x) => ({ ...x })), Vt = (a.cooldown || p("cooldown")).map((x) => ({ ...x })), tn = d.filter((x) => !x.presetRole), Ga(a.preset || "movement", !1);
    } else
      M.min = 3, M.max = 40, M.step = 1, k.min = 20, k.max = 60, k.step = 5, S.min = 5, S.max = 30, S.step = 5, it = (a.warmup || Le).map((d) => ({ ...d })), Vt = (a.cooldown || qa).map((d) => ({ ...d })), tn = a.strength.map((d) => Array.isArray(d) ? (([p, x, L, N = !1]) => ({ id: p, name: x, group: L, kind: "work", hidden: !!N }))(d) : { ...d });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === e)), O();
  }
  function Pe(e, a, r) {
    const d = e.getBoundingClientRect(), p = d.width / 2, x = d.height / 2, L = a - p, N = r - x;
    let X = 1 / 0, ee = 1 / 0;
    L !== 0 && (X = p / Math.abs(L)), N !== 0 && (ee = x / Math.abs(N));
    const U = Math.min(Math.max(1 / Math.min(X, ee), 0), 1);
    let j = Math.atan2(N, L) * (180 / Math.PI) + 90;
    return j < 0 && (j += 360), { edge: U, angle: j };
  }
  function Ot(e, a, r = !1) {
    const d = e.getBoundingClientRect(), p = a.clientX - d.left, x = a.clientY - d.top, { edge: L, angle: N } = Pe(e, p, x), X = r ? 100 : L * 100;
    e.style.setProperty("--edge-proximity", X.toFixed(3)), e.style.setProperty("--cursor-angle", N.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || X >= 30);
  }
  function Ct(e) {
    e.addEventListener("pointermove", (r) => Ot(e, r, !1)), e.addEventListener("pointerenter", (r) => Ot(e, r, !1)), e.addEventListener("pointerdown", (r) => Ot(e, r, !0));
    const a = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", a), e.addEventListener("pointerup", a), e.addEventListener("pointercancel", a);
  }
  Ct(o("addWorkoutPanel"));
  let ht = !1, Bn = null;
  function Ue(e) {
    return String(e ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function qi(e) {
    return e.summary ? e.summary : e.customSequence ? Sn(e.total) + " · custom move" : Sn(e.total) + " · " + Lt(e.work) + " / " + Lt(e.rest) + " · warm-up + cooldown";
  }
  function Io(e, a) {
    var x;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const d = a.activityCount ?? (((x = a.sequence) == null ? void 0 : x.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ue(a.name) + '</div><div class="sub">' + Ue(qi(a)) + '</div><span class="sourceTag">' + Ue(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (d ? d + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ue(a.name) + "</div></div>";
    const p = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(r, p), Ct(r), r.addEventListener("click", (L) => {
      L.target.closest("button") || rt(e);
    }), r.addEventListener("keydown", (L) => {
      (L.key === "Enter" || L.key === " ") && !L.target.closest("button") && (L.preventDefault(), rt(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (L) => {
      L.stopPropagation(), rt(e), Rr(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (L) => {
      L.stopPropagation(), rt(e), ue();
    }), r;
  }
  function Pn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), ut.order.forEach((e) => {
      at[e] && Io(e, at[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === dt));
  }
  Pn(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ht = !0, Bn = "custom-" + Date.now(), at[Bn] = {
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
    }, rt(Bn), Rr(!0);
  });
  let Ae = [], je = 0, jt = 0, In = 1, wn = !1, St = null, Jn = null, Wt = !1, It = ut.settings.upcomingCount ?? "all", za = "movement";
  function hn(e, a, r) {
    return (Number(e) - a) / (r - a) * 100;
  }
  function Lt(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function Sn(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function vt() {
    ae.style.width = hn(M.value, Number(M.min), Number(M.max)) + "%", re.style.width = hn(k.value, Number(k.min), Number(k.max)) + "%", Be.style.width = hn(S.value, Number(S.min), Number(S.max)) + "%", K.textContent = Lt(k.value), Q.textContent = Lt(S.value);
    const e = Number(nt.value) || 1;
    Pt.style.width = hn(e, 1, 10) + "%", fa.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Hn(e) {
    return e.filter((a) => !a.hidden);
  }
  function zt(e) {
    const a = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(a / 3600), d = Math.floor(a % 3600 / 60), p = a % 60;
    return (r ? r + ":" + String(d).padStart(2, "0") : d) + ":" + String(p).padStart(2, "0");
  }
  function Ho(e) {
    let a;
    try {
      a = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const r = a.hostname.replace(/^(www|m|music)\./, "");
    let d = null;
    if (r === "youtu.be") d = a.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(r))
      if (a.pathname === "/watch") d = a.searchParams.get("v");
      else {
        const N = a.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        N && (d = N[2]);
      }
    if (!d || !/^[\w-]{11}$/.test(d)) return null;
    const p = (N) => {
      if (!N) return 0;
      if (/^\d+$/.test(N)) return Number(N);
      const X = N.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return X ? (Number(X[1]) || 0) * 3600 + (Number(X[2]) || 0) * 60 + (Number(X[3]) || 0) : 0;
    }, x = p(a.searchParams.get("t") || a.searchParams.get("start")), L = p(a.searchParams.get("end"));
    return { id: d, start: x, end: L > x ? L : null };
  }
  function ja(e, a) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || a || 300);
    const r = Number(e.start) || 0, d = Number(e.end) || Number(e.videoDuration) || 0;
    return d > r ? Math.round(d - r) : Number(e.duration) || 300;
  }
  function Xn(e, a) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(a === "hour" ? r * 3600 : a === "min" ? r * 60 : r);
  }
  function Ga(e, a = !0) {
    za = e, n.querySelectorAll(".createPresetBtn").forEach((d) => d.classList.toggle("active", d.dataset.movePreset === e));
    const r = at[dt];
    r && (r.preset = e), e === "work" ? (M.min = 30, M.max = 480, M.step = 30, k.min = 300, k.max = 7200, k.step = 300, S.min = 60, S.max = 1800, S.step = 60, a && (M.value = 60, k.value = 1500, S.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (M.min = 3, M.max = 40, M.step = 1, k.min = 20, k.max = 60, k.step = 5, S.min = 5, S.max = 30, S.step = 5, a && (M.value = 20, k.value = 45, S.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), vt();
  }
  function C(e, a) {
    const r = za === "work";
    return e.map((d, p) => ({ ...d, id: a + "-" + p + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(k.value) }));
  }
  function A() {
    const e = at[dt];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !it.length && (it = C(Le, "warm")), e.includeCooldown && !Vt.length && (Vt = C(qa, "cool")), O());
  }
  function H() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const a = Math.max(1, Ae.length - 1), r = It;
    e.innerHTML = "";
    for (let x = 1; x <= a; x++) {
      const L = document.createElement("option");
      L.value = String(x), L.textContent = String(x), e.appendChild(L);
    }
    const d = document.createElement("option");
    d.value = "all", d.textContent = "All", e.appendChild(d);
    const p = r === "all" ? "all" : String(Math.min(Number(r) || 1, a));
    e.value = p, It = p === "all" ? "all" : Number(p);
  }
  function O() {
    Number(M.value) * 60;
    const e = Number(k.value), a = Number(S.value), r = at[dt], d = !!(r != null && r.customSequence), p = (d ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Hn(it), x = Hn(tn), L = d && !r.includeCooldown ? [] : Hn(Vt);
    if (r && (r.total = Number(M.value), r.work = e, r.rest = a, r.rounds = Number(nt.value) || 1, r.customSequence ? (r.sequence = tn.map((be) => ({ ...be })), r.warmup = it.map((be) => ({ ...be })), r.cooldown = Vt.map((be) => ({ ...be }))) : (r.strength = tn.map((be) => ({ ...be })), r.warmup = it.map((be) => ({ ...be })), r.cooldown = Vt.map((be) => ({ ...be })))), r != null && r.customSequence) {
      const be = [...p.map((Xe) => ({ ...Xe, section: "warmup" })), ...x, ...L.map((Xe) => ({ ...Xe, section: "cooldown" }))].map((Xe) => {
        if (Xe.kind === "video") return { ...Xe, duration: ja(Xe, e), rest: 0 };
        if (Xe.kind === "rest") {
          const Xt = Xe.useGlobalTiming === !0 ? a : Number(Xe.duration) || a;
          return { ...Xe, duration: Xt, rest: 0 };
        }
        const Jt = Xe.useGlobalTiming === !1 && Number(Xe.duration) || e;
        return { ...Xe, duration: Jt, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Ae = [], be.forEach((Xe, Jt) => {
        Ae.push(Xe);
        const Xt = be[Jt + 1];
        Xe.kind !== "rest" && Xt && Xt.kind !== "rest" && Ae.push({
          id: "auto-rest-" + Jt,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ae = be;
    } else
      Ae = [...p.map((be) => ({ ...be, section: "warmup" })), ...x, ...L.map((be) => ({ ...be, section: "cooldown" }))].map((be) => be.kind === "video" ? { ...be, duration: ja(be, e), rest: 0 } : be.kind === "rest" ? { ...be, duration: be.useGlobalTiming === !0 ? a : Number(be.duration) || a, rest: 0 } : { ...be, duration: be.useGlobalTiming === !1 && Number(be.duration) || e, rest: a }), Ae.forEach((be, Xe) => {
        var Jt;
        ((Jt = Ae[Xe + 1]) == null ? void 0 : Jt.kind) === "rest" && (be.rest = 0);
      }), Ae.length && (Ae[Ae.length - 1].rest = 0);
    const N = Math.max(1, Math.min(10, Number(nt.value) || 1)), X = Ae, ee = (be) => N <= 1 ? null : be.section === "warmup" || be.presetRole === "warmup" ? "first" : be.section === "cooldown" || be.presetRole === "cooldown" ? "last" : be.kind === "video" && (be.videoRounds === "first" || be.videoRounds === "last") ? be.videoRounds : null, U = (be) => !!ee(be), j = X.filter((be) => !U(be)), ke = X.filter(U), ze = j.length, Te = j.reduce((be, Xe) => be + Xe.duration + Xe.rest, 0), xe = ke.reduce((be, Xe) => be + Xe.duration + Xe.rest, 0), ge = [
      ke.some((be) => be.section === "warmup" || be.presetRole === "warmup") && "warm-up",
      ke.some((be) => be.section === "cooldown" || be.presetRole === "cooldown") && "cooldown",
      ke.some((be) => be.kind === "video" && !be.section && !be.presetRole) && "video"
    ].filter(Boolean), ot = ge.length > 1 ? ge.slice(0, -1).join(", ") + " & " + ge[ge.length - 1] : ge[0] || "";
    Ae = [];
    const st = (be, Xe) => {
      const Jt = ee(be);
      return !Jt || (Jt === "first" ? Xe === 1 : Xe === N);
    };
    for (let be = 1; be <= N; be++)
      if (X.filter((Xe) => st(Xe, be)).forEach((Xe, Jt) => Ae.push({ ...Xe, id: Xe.id + (N > 1 ? "-r" + be : ""), round: be, roundIndex: Jt })), be < N && ze)
        if (r != null && r.customSequence)
          Ae.push({ id: "round-break-" + be, name: "Rest", group: "Round " + (be + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: be, roundIndex: ze, roundBreak: !0 });
        else {
          const Xe = Ae[Ae.length - 1];
          Xe.rest = a, Xe.roundBreakAfter = !0;
        }
    vt();
    const _e = Ae.reduce((be, Xe) => be + Xe.duration + Xe.rest, 0), lt = Math.round(Te / 60), kt = Math.round(_e / 60), Je = N > 1 ? Sn(lt) + " × " + N + " rounds" + (xe ? " + " + Lt(xe) + " " + ot : "") + " (" + Sn(kt) + ")" : Sn(kt), Ze = [p.length ? "warm-up" : "", L.length ? "cooldown" : ""].filter(Boolean), Zt = r != null && r.customSequence ? Je + " · " + ze + " items" + (Ze.length && !(N > 1 && xe) ? " · " + Ze.join(" + ") : "") : Je + " · " + Lt(e) + " / " + Lt(a) + (Ze.length && !(N > 1 && xe) ? " · " + Ze.join(" + ") : "");
    oe.textContent = Lt(Te);
    const un = Ae.filter((be) => !be.roundBreak).length, Dt = N > 1 ? un + " activities · " + N + " rounds" : ze + " activities";
    yt.textContent = N > 1 ? N + " rounds · " + Sn(kt) + " total" : "1 round", o("roundsCount").textContent = N, n.querySelectorAll("[data-rounds-step]").forEach((be) => {
      be.disabled = Number(be.dataset.roundsStep) < 0 ? N <= 1 : N >= 10;
    }), r && (r.summary = Zt, r.activityCount = ze);
    const Ao = n.querySelector(".workoutPanel.active .sub");
    Ao && (Ao.textContent = Zt), _a.textContent = Zt, zi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((be) => be.textContent = Dt), vt(), mt(), ci(), qo(), H(), ht && he(), ye.workout.classList.contains("active") && !St && me();
  }
  const le = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', ve = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', ce = {
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
  }, we = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ce[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = we(e.dataset.icon);
  });
  let se = null, Ee = null;
  function Ge(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ke(e = !1) {
    const a = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), e && a.select());
  }
  function We(e, a, r = {}) {
    const d = e.kind === "rest", p = e.kind === "video", x = p ? e.useVideoLength !== !1 : d ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, L = Number(d ? S.value : k.value), N = Ge(p ? e.useVideoLength === !1 ? e.duration : ja({ ...e, useVideoLength: !0 }) : x ? L : e.duration || L), X = p && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ee = p ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ue(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ue(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([_e, lt]) => '<option value="' + _e + '"' + ((e.videoRounds || "every") === _e ? " selected" : "") + ">" + lt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ue(e.name) + '" placeholder="' + (d ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ue(e.group) + '" placeholder="' + (d ? "Rest" : "e.g. Glutes + legs") + '"></label>', U = p ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (X ? " · " + zt(ja({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Lt(L), j = document.createElement("div");
    j.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), j.dataset.index = a, j.dataset.id = e.id;
    const ke = r.isNew ?? (Ee == null ? void 0 : Ee.item) === e, ze = r.sheet ? '<div class="moveEditActions sheetActions">' + (ke ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ue(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (ke ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    j.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (p ? " videoFields" : "") + '">' + ee + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (x ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ue(U) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + N.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((_e) => '<option value="' + _e + '"' + (_e === N.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[_e] + "</option>").join("") + "</select></div></div>" + ze + "</div>";
    const Te = (_e) => j.querySelector("[data-f=" + _e + "]"), xe = () => {
      const _e = Te("global").checked;
      Te("dur").disabled = _e, Te("unit").disabled = _e, j.querySelector(".creatorDurationRow").classList.toggle("isDisabled", _e);
    };
    Te("global").addEventListener("change", xe), xe();
    const ge = () => {
      var _e;
      if (r.sheet) {
        (_e = r.onCancel) == null || _e.call(r);
        return;
      }
      ke && _t(), se = null, O();
    }, ot = () => {
      var kt;
      if (p) {
        st();
        return;
      }
      const _e = Te("name").value.trim();
      if (!_e) {
        Te("name").focus();
        return;
      }
      e.name = _e, e.group = Te("group").value.trim() || (d ? "Rest" : "Movement");
      const lt = Te("global").checked;
      if (e.useGlobalTiming = lt, lt || (e.duration = Math.max(d ? 5 : 1, Xn(Te("dur").value, Te("unit").value))), r.sheet) {
        (kt = r.onSaved) == null || kt.call(r);
        return;
      }
      ke && (Ee = null), se = null, O(), At(ke ? d ? "Rest added" : "Movement added" : "Movement updated");
    }, st = () => {
      var Ze;
      const _e = Te("url").value.trim(), lt = Ho(_e);
      if (!lt) {
        Te("urlError").hidden = !1, Te("url").classList.add("invalid"), Te("url").focus();
        return;
      }
      const kt = lt.id !== e.videoId;
      e.url = _e, e.videoId = lt.id, e.start = lt.start, e.end = lt.end, kt && (e.videoDuration = null, e.videoError = null);
      const Je = Te("name").value.trim();
      e.autoName = !Je, e.name = Je || (kt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Te("rounds").value, e.useVideoLength = Te("global").checked, e.useVideoLength || (e.duration = Math.max(5, Xn(Te("dur").value, Te("unit").value))), r.sheet ? (Ze = r.onSaved) == null || Ze.call(r) : (ke && (Ee = null), se = null, O(), At(ke ? "Video added" : "Video updated")), (kt || !e.videoDuration || e.autoName && !e.videoTitle) && Dc(e);
    };
    if (p && Te("url").addEventListener("input", () => {
      Te("urlError").hidden = !0, Te("url").classList.remove("invalid");
    }), j.querySelector("[data-a=cancel]").addEventListener("click", ge), j.querySelector("[data-a=save]").addEventListener("click", ot), r.sheet && !ke) {
      j.querySelector("[data-a=hide]").addEventListener("click", () => {
        var lt;
        return (lt = r.onHide) == null ? void 0 : lt.call(r);
      });
      const _e = j.querySelector("[data-a=remove]");
      dr(_e, _e.querySelector(".removeFill"), 1200, () => {
        var lt;
        return (lt = r.onRemove) == null ? void 0 : lt.call(r);
      });
    }
    return j.addEventListener("keydown", (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), _e.stopPropagation(), ge()), _e.key === "Enter" && _e.target.matches("input") && (_e.preventDefault(), ot());
    }), j;
  }
  function De(e, a) {
    const r = o(a);
    r.innerHTML = "", e.forEach((d, p) => {
      if (d === se && !Qn()) {
        r.appendChild(We(d, p));
        return;
      }
      const x = document.createElement("div");
      x.className = "moveRow" + (d.hidden ? " hidden" : "") + (d.kind === "rest" ? " restItem" : "") + (d.kind === "video" ? " videoItem" : "") + (_s(d) ? " noMeta" : ""), x.dataset.index = p, x.dataset.id = d.id;
      const L = d.kind === "rest" ? d.useGlobalTiming === !0 ? "Global timing" : Lt(d.duration) : d.useGlobalTiming === !1 ? Lt(d.duration) : "Global timing", N = d.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", X = d.kind === "video" ? d.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (d.useVideoLength === !1 ? "stops after " + Lt(d.duration) : Number(d.videoDuration) > 0 || Number(d.end) > 0 ? zt(ja(d)) : "plays to the end") + (d.videoRounds === "first" ? " · first round only" : d.videoRounds === "last" ? " · last round only" : "") : d.group + " · " + L, ee = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ue(d.name) + '. Drag, or use the up and down arrow keys">' + le + "</button>", U = '<div class="moveText"><div class="moveItemName">' + Ue(d.name) + N + '</div><div class="moveMeta">' + Ue(X) + "</div></div>", j = (Te) => Te.addEventListener("keydown", (xe) => {
        var st, _e;
        if (xe.key !== "ArrowUp" && xe.key !== "ArrowDown") return;
        xe.preventDefault();
        const ge = e.indexOf(d), ot = ge + (xe.key === "ArrowUp" ? -1 : 1);
        ot < 0 || ot >= e.length || (e.splice(ge, 1), e.splice(ot, 0, d), O(), (_e = (st = o(a).children[ot]) == null ? void 0 : st.querySelector(".dragHandle")) == null || _e.focus());
      });
      if (Qn()) {
        x.classList.add("phoneRow"), x.tabIndex = 0, x.setAttribute("role", "button"), x.setAttribute("aria-label", "Edit " + (d.name || "step")), x.innerHTML = ee + U + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Te = x.querySelector(".dragHandle");
        Te.addEventListener("pointerdown", (xe) => et(xe, x, r, e)), j(Te), x.addEventListener("click", (xe) => {
          xe.target.closest(".dragHandle") || Vi(d, e);
        }), x.addEventListener("keydown", (xe) => {
          xe.key === "Enter" && xe.target === x && (xe.preventDefault(), Vi(d, e));
        }), r.appendChild(x);
        return;
      }
      x.innerHTML = ee + U + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ue(d.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (d.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ue(d.name) + '"><span class="removeFill"></span><span class="removeLabel">' + ve + "</span></button></div>", x.querySelector(".editBtn").addEventListener("click", () => {
        _t(), se = d, O(), Ke();
      }), x.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        d.hidden = !d.hidden, O();
      });
      const ke = x.querySelector(".removeBtn");
      dr(ke, ke.querySelector(".removeFill"), 1200, () => {
        const Te = e.indexOf(d);
        Te < 0 || (e.splice(Te, 1), O(), At("Removed " + d.name, { label: "Undo", run: () => {
          e.splice(Math.min(Te, e.length), 0, d), O();
        } }));
      });
      const ze = x.querySelector(".dragHandle");
      ze.addEventListener("pointerdown", (Te) => et(Te, x, r, e)), j(ze), r.appendChild(x);
    });
  }
  const Ie = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Re = (e) => {
    var a;
    try {
      (a = navigator.vibrate) == null || a.call(navigator, e);
    } catch {
    }
  };
  function et(e, a, r, d) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const p = e.currentTarget, x = e.pointerId, L = !Ie();
    try {
      p.setPointerCapture(x);
    } catch {
    }
    const N = a.closest(".exerciseScroller") || Vn(a), X = r.style.position;
    r.style.position = "relative";
    const ee = [...r.children].filter((Qe) => Qe.classList.contains("moveRow")), U = ee.indexOf(a), j = parseFloat(getComputedStyle(r).rowGap) || 8, ke = a.offsetHeight, ze = ke + j, Te = ee.map((Qe) => Qe.offsetTop), xe = ee.map((Qe) => Qe.offsetHeight), ge = () => r.getBoundingClientRect().top, ot = r.getBoundingClientRect().width, st = e.clientY - (ge() + Te[U]), _e = e.clientX;
    let lt = e.clientY, kt = e.clientX, Je = ge() + Te[U], Ze = 0, Zt = 0, un = 0, Dt = 1, Ao = 0, be = U, Xe = !1, Jt = 0, Xt = !1, Kr = !1, Ri = Te[U];
    r.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", Re(8);
    const $r = () => {
      const Qe = lt - st + ke / 2 - ge();
      let gt = 0;
      return ee.forEach((Et, An) => {
        An !== U && Qe > Te[An] + xe[An] / 2 && gt++;
      }), gt;
    }, Jr = () => {
      ee.forEach((Qe, gt) => {
        if (gt === U) return;
        const Et = U < be && gt > U && gt <= be ? -ze : U > be && gt >= be && gt < U ? ze : 0;
        Qe.style.transform = Et ? "translateY(" + Et + "px)" : "";
      });
    }, fr = () => {
      const Qe = r.getBoundingClientRect(), gt = Math.abs(kt - _e) > Math.max(80, ot * 0.3) || kt < Qe.left - 24 || kt > Qe.right + 24;
      gt !== Xe && (Xe = gt, a.classList.toggle("willReturn", gt), Re(gt ? 10 : 4));
      const Et = Xe ? U : $r();
      Et !== be && (be = Et, Jr(), Xe || Re(4));
    }, Eo = () => {
      if (be === U) return Te[U];
      const Qe = ee.filter((Et, An) => An !== U);
      let gt = Te[0];
      for (let Et = 0; Et < be; Et++) gt += Qe[Et].offsetHeight + j;
      return gt;
    }, Ni = () => {
      const Qe = L ? Math.min(Math.abs(Ze) / 40, 1) : 0, gt = L && !Xt ? Math.max(-3, Math.min(3, un * 0.6)) : 0;
      a.style.transform = "translate(" + Zt.toFixed(2) + "px," + (Je - (ge() + Te[U])).toFixed(2) + "px) rotate(" + gt.toFixed(2) + "deg) scale(" + (Dt * (1 - 0.04 * Qe)).toFixed(4) + "," + (Dt * (1 + 0.06 * Qe)).toFixed(4) + ")";
    }, $e = () => {
      Jt = requestAnimationFrame($e);
      const Qe = kt - _e, gt = Xt ? ge() + Ri : lt - st, Et = Xt ? 0 : Xe ? Qe * 0.9 : Math.max(-22, Math.min(22, Qe * 0.22)), An = Xt ? 1 : Xe ? 0.97 : 1.035;
      if (!L) {
        Je = gt, Zt = Xt ? 0 : Et, Dt = 1, Ni(), Xt && Bt();
        return;
      }
      const tu = Xt ? 0.24 : 0.2, nu = Xt ? 0.62 : 0.68;
      Ze = (Ze + (gt - Je) * tu) * nu, Je += Ze, un = (un + (Et - Zt) * 0.16) * 0.7, Zt += un, Ao = (Ao + (An - Dt) * 0.22) * 0.6, Dt += Ao, Ni(), Xt && Math.abs(Ze) < 0.15 && Math.abs(gt - Je) < 0.5 && Math.abs(Zt) < 0.5 && Math.abs(Dt - 1) < 3e-3 && Bt();
    }, Tt = setInterval(() => {
      if (!N || Xt) return;
      const Qe = N.getBoundingClientRect(), gt = 56, Et = lt < Qe.top + gt ? -10 : lt > Qe.bottom - gt ? 10 : 0;
      Et && (N.scrollTop += Et, fr());
    }, 30);
    function Bt() {
      if (Kr) return;
      Kr = !0, cancelAnimationFrame(Jt);
      const Qe = be !== U, gt = a.dataset.id;
      if (r.classList.remove("reordering"), ee.forEach((An) => {
        An.style.transition = "none", An.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), r.style.position = X, Qe) {
        const [An] = d.splice(U, 1);
        d.splice(be, 0, An);
      }
      O();
      const Et = gt && r.querySelector('.moveRow[data-id="' + gt + '"]');
      Et && L && Et.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), Qe && At("Order saved");
    }
    const Qt = (Qe) => {
      if (Qe.pointerId === x) {
        if (Qe.pointerType === "mouse" && Qe.buttons === 0) {
          $n();
          return;
        }
        lt = Qe.clientY, kt = Qe.clientX, fr();
      }
    }, _n = (Qe) => {
      Qe.pointerId === x && $n();
    };
    function $n() {
      Xt || (window.removeEventListener("pointermove", Qt, !0), window.removeEventListener("pointerup", _n, !0), window.removeEventListener("pointercancel", _n, !0), p.removeEventListener("lostpointercapture", $n), clearInterval(Tt), Xe && be !== U && (be = U, Jr()), Ri = Eo(), Xt = !0, Re(6), setTimeout(Bt, 800));
    }
    window.addEventListener("pointermove", Qt, !0), window.addEventListener("pointerup", _n, !0), window.addEventListener("pointercancel", _n, !0), p.addEventListener("lostpointercapture", $n), Jt = requestAnimationFrame($e), Ni();
  }
  function mt() {
    var p, x, L, N;
    const e = at[dt], a = (p = o("warmupList")) == null ? void 0 : p.closest("section"), r = (x = o("cooldownList")) == null ? void 0 : x.closest("section"), d = (N = (L = o("strengthList")) == null ? void 0 : L.closest("section")) == null ? void 0 : N.querySelector(".sectionTitle");
    e != null && e.customSequence ? (a && (a.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), d && (d.textContent = "Move sequence")) : (a && (a.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), d && (d.textContent = "Kettlebell work")), De(it, "warmupList"), De(tn, "strengthList"), De(Vt, "cooldownList");
  }
  function _t() {
    if (!Ee) return;
    const { item: e, arr: a } = Ee;
    Ee = null;
    const r = a.indexOf(e);
    r >= 0 && a.splice(r, 1), se === e && (se = null);
  }
  function bt(e) {
    return e.id === "warmupList" ? { arr: it, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Vt, kind: "cooldown", group: "Cooldown" } : { arr: tn, kind: "work", group: "" };
  }
  function Gt(e, a) {
    const r = bt(a), d = Date.now().toString(36);
    return e === "video" ? { id: "video-" + d, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + d, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(S.value) } : { id: "movement-" + d, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(k.value) };
  }
  const nn = "cubic-bezier(.34,1.46,.64,1)";
  function ln(e, a) {
    if (Ie() || !e) {
      a();
      return;
    }
    const r = (x) => {
      var L;
      return ((L = x.dataset) == null ? void 0 : L.id) || x;
    }, d = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], p = new Map(d().map((x) => [r(x), x.getBoundingClientRect().top]));
    a(), d().forEach((x) => {
      const L = p.get(r(x));
      if (L === void 0) return;
      const N = L - x.getBoundingClientRect().top;
      Math.abs(N) < 0.5 || x.animate([{ transform: "translateY(" + N + "px)" }, { transform: "none" }], { duration: 440, easing: nn });
    });
  }
  function Kt(e, a) {
    if (!e || Ie()) return;
    const r = e.offsetHeight, d = Math.max(0, r - (a || 0));
    e.animate([{ clipPath: "inset(0 0 " + d + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: nn });
  }
  function mo(e, a, r, d) {
    const { arr: p } = bt(a), x = Gt(e, a);
    p.splice(Math.max(0, Math.min(r, p.length)), 0, x), Ee = { item: x, arr: p }, se = x, ln(a.closest(".exerciseScroller,.createStepSlot") || a, () => O());
    const L = a.querySelector(".moveRow.editing");
    return Kt(L, d), Ke(e === "rest"), L;
  }
  function Vn(e) {
    for (let a = e; a && a.nodeType === 1; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if (/(auto|scroll)/.test(r) && a.scrollHeight > a.clientHeight) return a;
    }
    return null;
  }
  const ho = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function fo(e, a) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + le + '</span><span class="addGhostText"><strong>' + Ue(a[0]) + "</strong><small>" + Ue(a[1]) + "</small></span>", o("workoutModal").appendChild(r), r;
  }
  function zn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ft(e, a, r, d) {
    (se || Ee) && (_t(), se = null, O());
    const p = e.getBoundingClientRect(), x = fo(a, ho[a]);
    x.setAttribute("aria-hidden", "true"), x.style.width = p.width + "px", x.style.height = p.height + "px", x.style.transform = "translate(" + p.left + "px," + p.top + "px)", e.classList.add("lifting");
    const L = Vn(e);
    return fn({
      ghost: x,
      origin: p,
      sx: r,
      sy: d,
      scroller: L,
      column: e.closest(".exerciseScroller,.createFlow") || L,
      home: () => e.getBoundingClientRect(),
      onDrop: (N, X, ee) => {
        zn(x), e.classList.remove("lifting"), mo(a, N, X, ee);
      },
      onReturn: () => {
        zn(x), e.classList.remove("lifting");
      }
    });
  }
  function fn({ ghost: e, origin: a, sx: r, sy: d, scroller: p, column: x, home: L, onDrop: N, onReturn: X, rowLook: ee = !1 }) {
    var Ni;
    const U = !Ie(), j = ((Ni = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Ni.offsetHeight) || 80, ke = r - a.left, ze = d - a.top, Te = 44;
    let xe = r, ge = d, ot = a.left, st = a.top, _e = 0, lt = 0, kt = !U, Je = null, Ze = null, Zt = -1, un = 0, Dt = null;
    const Ao = () => ["warmupList", "strengthList", "cooldownList"].map(($e) => o($e)).filter(($e) => $e && $e.getClientRects().length && !$e.closest("[hidden]")), be = ($e) => {
      if ($e === Je) return;
      Je = $e, e.classList.toggle("overList", !!$e || ee);
      const Tt = $e ? $e.getBoundingClientRect().width : a.width;
      e.style.width = Tt + "px", e.style.height = ($e ? j : a.height) + "px";
    }, Xe = ($e) => {
      $e.classList.add("leaving"), $e.style.height = "0px", $e.style.marginTop = "-8px", setTimeout(() => $e.remove(), U ? 320 : 0);
    }, Jt = ($e, Tt, Bt) => {
      if (Ze && Ze.parentNode === $e && Zt === Bt || (Ze && (Xe(Ze), Ze = null, Zt = -1), !$e)) return;
      const Qt = document.createElement("div");
      Qt.className = "dropSlot", $e.insertBefore(Qt, Tt), Ze = Qt, Zt = Bt, Qt.getBoundingClientRect(), Qt.style.height = j + "px", Qt.style.marginTop = "0px";
    }, Xt = () => {
      let $e = null, Tt = 1 / 0;
      for (const $n of Ao()) {
        const Qe = $n.getBoundingClientRect();
        if (xe < Qe.left - 48 || xe > Qe.right + 48) continue;
        const gt = Qe.top - 28, Et = Qe.bottom + 28, An = ge < gt ? gt - ge : ge > Et ? ge - Et : 0;
        An < Tt && (Tt = An, $e = $n);
      }
      const Bt = x == null ? void 0 : x.getBoundingClientRect(), _n = Bt && xe >= Bt.left && xe <= Bt.right && ge >= Bt.top && ge <= Bt.bottom || Tt === 0 ? $e : null;
      if (_n) {
        const $n = [..._n.children].filter((gt) => gt.classList.contains("moveRow"));
        let Qe = $n.findIndex((gt) => {
          const Et = gt.getBoundingClientRect();
          return ge < Et.top + Et.height / 2;
        });
        Qe < 0 && (Qe = $n.length), Jt(_n, $n[Qe] || null, Qe);
      } else Jt(null);
      be(_n);
    }, Kr = () => {
      if (Dt) return Dt.aim();
      if (Je) {
        const $e = Je.getBoundingClientRect();
        let Tt = ge - j / 2;
        return Ze && (Tt = Tt * 0.6 + Ze.getBoundingClientRect().top * 0.4), { x: $e.left, y: Tt };
      }
      return { x: xe - ke, y: ge - ze };
    }, Ri = ($e, Tt, Bt, Qt) => {
      e.style.transform = "translate(" + ot + "px," + st + "px) rotate(" + $e + "deg) rotate(" + Tt + "rad) scale(" + Bt + "," + Qt + ") rotate(" + -Tt + "rad)";
    }, $r = () => {
      if (un = requestAnimationFrame($r), !kt) {
        const Qe = xe - r, gt = ge - d, Et = Math.min(Math.hypot(Qe, gt) / Te, 1);
        ot = a.left + Qe * 0.35, st = a.top + gt * 0.35, Ri(0, Math.atan2(gt, Qe), 1 + 0.155 * Et, 1 - 0.1 * Et);
        return;
      }
      const $e = Kr();
      if (!U) {
        ot = $e.x, st = $e.y, Ri(0, 0, 1, 1), Dt && (cancelAnimationFrame(un), Dt.done());
        return;
      }
      const Tt = Dt ? Dt.k : 0.17, Bt = Dt ? Dt.d : 0.7;
      _e = (_e + ($e.x - ot) * Tt) * Bt, lt = (lt + ($e.y - st) * Tt) * Bt, ot += _e, st += lt;
      const Qt = Math.hypot(_e, lt), _n = Math.min(Qt / 48, 1), $n = Je || Dt ? 0 : Math.max(-5, Math.min(5, _e * 0.32));
      Ri($n, Math.atan2(lt, _e), 1 + 0.1 * _n, 1 - 0.063 * _n), Dt && Qt < 0.15 && Math.hypot($e.x - ot, $e.y - st) < 0.6 && (cancelAnimationFrame(un), Dt.done());
    }, Jr = setInterval(() => {
      if (!p || Dt) return;
      const $e = p.getBoundingClientRect(), Tt = 64, Bt = ge < $e.top + Tt ? -($e.top + Tt - ge) / 4 : ge > $e.bottom - Tt ? (ge - ($e.bottom - Tt)) / 4 : 0;
      Bt && (p.scrollTop += Math.max(-18, Math.min(18, Bt)), Xt());
    }, 30);
    un = requestAnimationFrame($r);
    let fr = !1;
    const Eo = ($e, Tt) => {
      if (fr) return;
      fr = !0, cancelAnimationFrame(un);
      const Bt = Ze ? Ze.offsetHeight : j;
      !$e && Ze && (Ze.remove(), Ze = null), $e ? N($e, Tt, Bt) : X();
    };
    return {
      move($e, Tt) {
        xe = $e, ge = Tt, !kt && Math.hypot(xe - r, ge - d) > Te && (kt = !0, _e = (xe - r) * 0.085, lt = (ge - d) * 0.085), kt && Xt();
      },
      drop($e) {
        clearInterval(Jr);
        const Tt = Je, Bt = Zt;
        if (!$e && Tt && Ze) {
          const Qt = Ze;
          Dt = { k: 0.24, d: 0.62, aim: () => {
            const _n = Qt.getBoundingClientRect();
            return { x: _n.left, y: _n.top };
          }, done: () => Eo(Tt, Bt) }, setTimeout(() => Eo(Tt, Bt), 650), U || (cancelAnimationFrame(un), Eo(Tt, Bt));
          return;
        }
        Jt(null), be(null), Dt = { k: 0.2, d: 0.66, aim: () => {
          const Qt = L();
          return { x: Qt.left, y: Qt.top };
        }, done: () => Eo(null) }, setTimeout(() => Eo(null), 650), U || (cancelAnimationFrame(un), Eo(null));
      }
    };
  }
  function Tn(e, a) {
    let r = !1;
    e.addEventListener("click", (d) => {
      if (r) {
        r = !1, d.preventDefault();
        return;
      }
      if (Qn()) {
        Mr(a);
        return;
      }
      const p = o("strengthList"), x = mo(a, p, bt(p).arr.length, 0);
      x == null || x.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (d) => {
      if (d.button !== void 0 && d.button !== 0) return;
      const p = d.pointerId, x = d.clientX, L = d.clientY;
      let N = null, X = !1;
      try {
        e.setPointerCapture(p);
      } catch {
      }
      const ee = (ge) => {
        if (ge.pointerId === p) {
          if (ge.pointerType === "mouse" && ge.buttons === 0) {
            xe(!1);
            return;
          }
          if (!N) {
            if (Math.hypot(ge.clientX - x, ge.clientY - L) < 6) return;
            N = ft(e, a, x, L);
          }
          N.move(ge.clientX, ge.clientY);
        }
      }, U = (ge) => {
        ge.pointerId === p && xe(!1);
      }, j = (ge) => {
        ge.pointerId === p && xe(!0);
      }, ke = () => xe(!1), ze = () => xe(!0), Te = (ge) => {
        ge.key === "Escape" && N && (ge.preventDefault(), ge.stopPropagation(), xe(!0));
      };
      function xe(ge) {
        if (!X && (X = !0, window.removeEventListener("pointermove", ee, !0), window.removeEventListener("pointerup", U, !0), window.removeEventListener("pointercancel", j, !0), window.removeEventListener("keydown", Te, !0), window.removeEventListener("blur", ze), e.removeEventListener("lostpointercapture", ke), N)) {
          const ot = N;
          N = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), ot.drop(ge);
        }
      }
      window.addEventListener("pointermove", ee, !0), window.addEventListener("pointerup", U, !0), window.addEventListener("pointercancel", j, !0), window.addEventListener("keydown", Te, !0), window.addEventListener("blur", ze), e.addEventListener("lostpointercapture", ke);
    });
  }
  const xn = (od = window.matchMedia) == null ? void 0 : od.call(window, "(max-width: 620px)");
  function Qn() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const go = (e) => e.charAt(0).toUpperCase() + e.slice(1), ga = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let dn = null, Rt = null;
  function li(e, a, r, d) {
    gn(), o("sheetTitle").textContent = e;
    const p = o("sheetBody");
    p.innerHTML = "", p.appendChild(a), dn = r || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !p.contains(a)) return;
      const x = d ? p.querySelector("input[data-f=url],input[data-f=name]") : p.querySelector("button,input,select");
      x == null || x.focus({ preventScroll: !0 });
    }, Ie() ? 0 : 360);
  }
  function gn() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const a = dn;
    dn = null, a == null || a(), setTimeout(Aa, 0);
  }
  o("sheetScrim").addEventListener("click", gn), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), gn());
  });
  function Vi(e, a) {
    const r = We(e, a.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        gn(), O(), At(go(ga(e)) + " updated");
      },
      onCancel: gn,
      onHide() {
        e.hidden = !e.hidden, gn(), O(), At((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        gn();
        const d = a.indexOf(e);
        d < 0 || (a.splice(d, 1), O(), At("Removed " + e.name, { label: "Undo", run: () => {
          a.splice(Math.min(d, a.length), 0, e), O();
        } }));
      }
    });
    li("Edit " + ga(e), r, null, !1);
  }
  function hs() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, r, d, p]) => {
      const x = document.createElement("button");
      x.type = "button", x.className = "sheetChoice", x.innerHTML = '<span class="timeIcon" aria-hidden="true">' + we(r) + "</span><span><strong>" + d + "</strong><small>" + p + "</small></span>", x.addEventListener("click", () => Mr(a)), e.appendChild(x);
    }), li("Add to the move", e, null, !1);
  }
  function Mr(e) {
    Rt && Wo();
    const a = Gt(e, o("strengthList")), r = We(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        gn(), fs(a, e);
      },
      onCancel: gn
    });
    li("New " + ga(a), r, null, !0);
  }
  const di = o("workoutModal").querySelector(".modalStatic"), Ua = { parent: di.parentNode, next: di.nextSibling };
  function Cr() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(di);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", gn), e.appendChild(a), li("Setup", e, () => {
      Ua.parent.insertBefore(di, Ua.next), zi();
    }, !1);
  }
  function zi() {
    var a, r;
    const e = o("setupSummaryName");
    e && (e.textContent = (((a = o("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((r = at[dt]) == null ? void 0 : r.name) || "Move", o("setupSummaryMeta").textContent = _a.textContent);
  }
  o("setupSummary").addEventListener("click", Cr), o("addFab").addEventListener("click", hs);
  function Fo() {
    const e = o("strengthList");
    return Vn(e) || e.closest(".exerciseScroller");
  }
  function Ya() {
    const e = o("strengthList").getBoundingClientRect(), a = (Fo() || o("strengthList")).getBoundingClientRect(), r = (Rt == null ? void 0 : Rt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(a.top + 12, Math.min(a.bottom - r - 96, a.top + a.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function fs(e, a) {
    var N;
    const r = fo(a, [e.name || ho[a][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const d = document.createElement("span");
    d.className = "addGhostActions", d.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ue(e.name) + '">✕</button>', r.appendChild(d), Rt = { item: e, type: a, ghost: r };
    const p = ((N = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : N.offsetHeight) || 64;
    r.style.width = o("strengthList").getBoundingClientRect().width + "px", r.style.height = p + "px";
    const x = Ya(), L = $t.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + x.left + "px," + L + "px)", r.getBoundingClientRect(), Ie() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + x.left + "px," + x.top + "px)", d.querySelector("[data-a=end]").addEventListener("click", Wo), d.querySelector("[data-a=discard]").addEventListener("click", vs), r.addEventListener("pointerdown", gs);
  }
  function gs(e) {
    if (!Rt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: a, ghost: r } = Rt, d = e.pointerId;
    try {
      r.setPointerCapture(d);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const p = r.getBoundingClientRect(), x = Fo(), L = fn({
      ghost: r,
      origin: { left: p.left, top: p.top, width: p.width, height: p.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: x,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || x,
      rowLook: !0,
      home: Ya,
      onDrop: (xe, ge, ot) => {
        Rt = null, zn(r), Oo(a, xe, ge, ot);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let N = !1;
    const X = (xe) => {
      if (xe.pointerId === d) {
        if (xe.pointerType === "mouse" && xe.buttons === 0) {
          Te(!1);
          return;
        }
        L.move(xe.clientX, xe.clientY);
      }
    }, ee = (xe) => {
      xe.pointerId === d && Te(!1);
    }, U = (xe) => {
      xe.pointerId === d && Te(!0);
    }, j = () => Te(!1), ke = () => Te(!0), ze = (xe) => {
      xe.key === "Escape" && (xe.preventDefault(), Te(!0));
    };
    function Te(xe) {
      N || (N = !0, window.removeEventListener("pointermove", X, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", U, !0), window.removeEventListener("keydown", ze, !0), window.removeEventListener("blur", ke), r.removeEventListener("lostpointercapture", j), L.drop(xe));
    }
    window.addEventListener("pointermove", X, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", U, !0), window.addEventListener("keydown", ze, !0), window.addEventListener("blur", ke), r.addEventListener("lostpointercapture", j);
  }
  function Oo(e, a, r, d) {
    const p = bt(a);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = p.kind, p.group && (!e.group || e.group === "Movement") && (e.group = p.group)), p.arr.splice(Math.max(0, Math.min(r, p.arr.length)), 0, e), ln(a.closest(".exerciseScroller,.createStepSlot") || a, () => O()), Kt(a.querySelector('.moveRow[data-id="' + e.id + '"]'), d), At(go(ga(e)) + " added");
  }
  function Wo() {
    var d;
    if (!Rt) return;
    const { item: e, ghost: a } = Rt;
    Rt = null, zn(a);
    const r = o("strengthList");
    Oo(e, r, bt(r).arr.length, 0), (d = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || d.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
  }
  function vs() {
    if (!Rt) return;
    const e = Rt.ghost;
    Rt = null, zn(e), At("Discarded");
  }
  function Sr() {
    Rt && (Rt.ghost.remove(), Rt = null);
  }
  window.addEventListener("resize", () => {
    if (Rt != null && Rt.ghost.classList.contains("hovering")) {
      const e = Ya();
      Rt.ghost.style.width = e.width + "px", Rt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (id = xn == null ? void 0 : xn.addEventListener) == null || id.call(xn, "change", () => {
    gn(), Rt && !Qn() && Wo(), mt();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Aa() {
    const e = o("workoutModal"), a = window.visualViewport;
    if (!e.classList.contains("open") || !Qn()) {
      Tr();
      return;
    }
    const r = a ? a.offsetTop : 0, d = a ? a.offsetLeft : 0, p = a ? a.width : window.innerWidth, x = a ? a.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: p + "px", height: x + "px", top: r + "px", left: d + "px" });
    const L = e.getBoundingClientRect();
    Math.abs(L.top - r) > 0.5 && (e.style.top = 2 * r - L.top + "px"), Math.abs(L.left - d) > 0.5 && (e.style.left = 2 * d - L.left + "px");
  }
  function Tr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (rd = window.visualViewport) == null || rd.addEventListener("resize", Aa), (sd = window.visualViewport) == null || sd.addEventListener("scroll", Aa), window.addEventListener("resize", Aa), window.addEventListener("scroll", Aa, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Aa, 250));
  function ci() {
    tn.length > 0;
    const e = o("addMovementBtn"), a = o("addRestBtn");
    e && (e.innerHTML = le + "<span>Add movement</span>"), a && (a.innerHTML = le + "<span>Add rest</span>");
    const r = o("addVideoBtn");
    r && (r.innerHTML = le + "<span>Add video</span>");
  }
  function qo() {
    const e = o("useGlobalTiming").checked, a = o("addMovementDuration"), r = o("addMovementUnit");
    a.disabled = e, r.disabled = e, a.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Lt(k.value);
    const d = o("useGlobalRestTiming").checked, p = o("addRestDuration"), x = o("addRestUnit");
    p.disabled = d, x.disabled = d, p.parentElement.style.opacity = d ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Lt(S.value);
  }
  let ji = "movement";
  function bs(e) {
    ji = e;
    const a = o("movementFields"), r = o("restFields");
    a.hidden = e !== "movement", r.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), qo();
  }
  function vo() {
    at[dt];
    const e = ht ? !0 : o("useGlobalTiming").checked, a = e ? Number(k.value) : Xn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), r = ht ? !0 : o("useGlobalRestTiming").checked, d = r ? Number(S.value) : Xn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (ji === "rest") {
      const p = o("addRestTitle").value.trim() || "Rest", x = o("addRestGroup").value.trim() || "Rest";
      tn.push({
        id: "rest-" + Date.now(),
        name: p,
        group: x,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, d || Number(S.value))
      }), O(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", At("Rest added"), ht && (W("movements"), he());
    } else {
      const p = o("addMovementInput").value.trim();
      if (!p) return;
      const x = o("addMovementGroup").value.trim() || "Movement";
      tn.push({
        id: "movement-" + Date.now(),
        name: p,
        group: x,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, a || Number(k.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", O(), o("movementCreator").hidden = !0, At("Movement added"), ht && (W("movements"), he());
    }
    ci();
  }
  let Vo = null;
  function At(e, a) {
    const r = o("toast");
    r.innerHTML = "";
    const d = document.createElement("span");
    if (d.textContent = e, r.appendChild(d), a) {
      const p = document.createElement("button");
      p.type = "button", p.className = "toastAction", p.textContent = a.label, p.addEventListener("click", () => {
        a.run(), r.classList.remove("show", "withAction"), clearTimeout(Vo);
      }), r.appendChild(p);
    }
    r.classList.toggle("withAction", !!a), r.classList.add("show"), clearTimeout(Vo), Vo = setTimeout(() => r.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Lr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], ws = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function _r(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function bo(e, a) {
    return Lr[_r(a)];
  }
  function xs(e) {
    return ws[_r(e)];
  }
  function Nt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Fn() {
    return { morning: pt().morningTime || "08:00", evening: pt().eveningTime || "19:00" };
  }
  function Za(e) {
    const [a, r] = String(e).split(":").map(Number);
    return (a || 0) * 60 + (r || 0);
  }
  function ys(e) {
    const a = Fn();
    return e.getHours() * 60 + e.getMinutes() >= Za(a.evening) ? "evening" : "morning";
  }
  function ui(e, a) {
    return ut.checkins.find((r) => r.date === e && r.slot === a);
  }
  function va(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function zo() {
    const e = /* @__PURE__ */ new Date(), a = Nt(e), r = ys(e), d = Fn(), p = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && p < Za(d.morning) || va(ui(a, r)) ? null : r;
  }
  const ba = o("checkinModal"), Ea = o("checkinTab"), pi = o("checkinBadge"), wa = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function mi(e) {
    const { input: a, fill: r } = wa[e];
    r.style.width = a.value + "%", a.setAttribute("aria-valuetext", bo(e, a.value));
  }
  Object.keys(wa).forEach((e) => wa[e].input.addEventListener("input", () => mi(e)));
  let jn = null;
  function Ar() {
    const e = Fn(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes();
    return r < Za(e.morning) ? "Next check-in at " + e.morning : r < Za(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Er() {
    const e = Fn(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes(), d = (p, x) => {
      const [L, N] = p.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (x ? 1 : 0), L, N);
    };
    return r < Za(e.morning) ? { date: d(e.morning), time: e.morning } : r < Za(e.evening) ? { date: d(e.evening), time: e.evening } : { date: d(e.morning, !0), time: e.morning };
  }
  let Gi = null, jo = null;
  function Ut() {
    if (zo()) {
      Ka(), Ja();
      return;
    }
    const e = Er(), a = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(a / 3600), d = Math.floor(a % 3600 / 60), p = a % 60;
    o("peekCountdown").textContent = r + ":" + String(d).padStart(2, "0") + ":" + String(p).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function ks() {
    Ut(), Ea.classList.add("peek"), clearInterval(jo), jo = setInterval(Ut, 1e3), clearTimeout(Gi), Gi = setTimeout(Ka, 6e3);
  }
  function Ka() {
    Ea.classList.remove("peek"), clearInterval(jo), clearTimeout(Gi);
  }
  function $a() {
    const e = zo();
    if (!e) {
      Ea.classList.contains("peek") ? Ka() : ks();
      return;
    }
    jn = { date: Nt(/* @__PURE__ */ new Date()), slot: e };
    const r = ui(jn.date, e), d = ut.checkins.find((p) => va(p));
    Object.keys(wa).forEach((p) => {
      wa[p].input.value = (r == null ? void 0 : r[p]) ?? (d == null ? void 0 : d[p]) ?? 50, mi(p);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ba.classList.add("open"), ba.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => wa.mood.input.focus());
  }
  function xa() {
    ba.classList.remove("open"), ba.setAttribute("aria-hidden", "true"), jn && (Go = jn.date + "-" + jn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Go);
    } catch {
    }
    jn = null, Ja();
  }
  function Ms() {
    if (!jn) return;
    if (va(ui(jn.date, jn.slot))) {
      xa();
      return;
    }
    const { date: e, slot: a } = jn;
    let r = ui(e, a);
    r || (r = { date: e, slot: a }, ut.checkins.unshift(r), ut.checkins = ut.checkins.slice(0, 2e3)), r.mood = Number(wa.mood.input.value), r.energy = Number(wa.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), Cn(), s.fire("checkin", { slot: a, mood: r.mood, energy: r.energy, mood_label: bo("mood", r.mood), energy_label: bo("energy", r.energy) }), At((a === "morning" ? "Morning" : "Evening") + " check-in saved"), xa(), hi(), Uo(), ai(), ro();
  }
  let Go = "";
  try {
    Go = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ja() {
    const e = zo();
    pi.hidden = !e, Ea.hidden = !e, e || Ka(), Ea.classList.toggle("due", !!e), Ea.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Ar()), Ea.title = e ? "Check in now" : Ar();
  }
  function Ui() {
    Ja();
    const e = zo();
    !e || ba.classList.contains("open") || pt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !ye.home.classList.contains("active") || $t.classList.contains("open") || Go !== Nt(/* @__PURE__ */ new Date()) + "-" + e && $a());
  }
  Ea.addEventListener("click", $a), o("checkinLater").addEventListener("click", xa), o("checkinSave").addEventListener("click", Ms), ba.addEventListener("click", (e) => {
    e.target === ba && xa();
  }), ba.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), xa());
  }), setInterval(Ui, 3e4);
  function hi() {
    const e = Nt(/* @__PURE__ */ new Date()), a = (r) => ut.checkins.find((d) => d.date === e && d[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, d]) => {
      const p = a(r);
      o(d).textContent = p ? bo(r, p[r]) : "—";
    });
  }
  function Uo() {
    const e = o("feelCard");
    if (!e) return;
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), d = [...Array(7)].map((ee, U) => {
      const j = new Date(r.getFullYear(), r.getMonth(), r.getDate() + U), ke = Nt(j), ze = ut.checkins.filter((xe) => xe.date === ke), Te = (xe) => {
        const ge = ze.map((ot) => ot[xe]).filter((ot) => ot != null);
        return ge.length ? ge.reduce((ot, st) => ot + st, 0) / ge.length : null;
      };
      return { d: j, key: ke, mood: Te("mood"), energy: Te("energy"), count: ze.filter(va).length, future: j > a && ke !== Nt(a) };
    }), p = (ee) => {
      const U = d.map((j) => j[ee]).filter((j) => j != null);
      return U.length ? U.reduce((j, ke) => j + ke, 0) / U.length : null;
    }, x = p("mood"), L = p("energy"), N = (ee, U) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ee + "</span><span>" + (U == null ? "—" : Ue(bo("", U))) + '</span></div><div class="feelTrack"><span style="width:' + (U == null ? 0 : Math.max(4, U)) + "%;background:" + (U == null ? "transparent" : xs(U)) + '"></span></div></div>', X = d.filter((ee) => ee.mood != null && ee.energy != null).sort((ee, U) => U.mood + U.energy - (ee.mood + ee.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (x == null ? "No check-ins yet" : Ue(bo("", (x + L) / 2))) + '</div><div class="weekCopy">' + (x == null ? "Your first check-in will appear here." : "on average this week" + (X ? " · best day " + Ue(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(X.d)) : "")) + '</div></div></div><div class="feelDays">' + d.map(
      (ee) => '<div class="weekChip feelDay' + (ee.future ? " future" : "") + (ee.key === Nt(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ue(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ee.d)) + "</strong>" + (ee.count >= 2 ? '<span class="weekTick">' + we("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ee.count) + "</span>") + "</div>" + N("Mood", ee.mood) + N("Energy", ee.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Xa = o("upcomingCountSetting");
  Xa.addEventListener("change", () => {
    It = Xa.value === "all" ? "all" : Number(Xa.value), l();
  });
  const Qa = o("tempoRevealBtn"), Yi = o("tempoExperiment"), ea = o("tempoQuad"), an = o("tempoDot"), on = o("tempoEstimate"), ta = o("tempoReadout");
  let Da = { x: 0.5, y: 0.5 }, Ra = !1, wo = { total: 20, work: 45, rest: 15 };
  function Na(e, a, r, d) {
    const p = Math.max(a, Math.min(r, e));
    return Math.round((p - a) / d) * d + a;
  }
  function Zi(e, a) {
    const r = (e - 0.5) * 2, d = (a - 0.5) * 2, p = Na(
      wo.total + r * 5 + d * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), x = Na(
      wo.work + r * 10 + d * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), L = Na(
      wo.rest + r * 6 + d * 6,
      Number(S.min),
      Number(S.max),
      Number(S.step)
    );
    return M.value = p, k.value = x, S.value = L, K.textContent = x + " sec", Q.textContent = L + " sec", vt(), { total: p, work: x, rest: L };
  }
  function xo(e, a) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", d = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", p = Zi(e, a);
    ta.textContent = r + " + " + d, on.textContent = p.total + " min", ea.setAttribute("aria-valuetext", r + " and " + d + ", estimated " + p.total + " minutes");
  }
  function na(e) {
    const a = ea.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)), d = Math.max(0, Math.min(1, (e.clientY - a.top) / a.height));
    Da = { x: r, y: d }, an.style.left = r * 100 + "%", an.style.top = d * 100 + "%", xo(r, d);
  }
  Qa.addEventListener("click", () => {
    const e = Yi.hidden;
    Yi.hidden = !e, Qa.setAttribute("aria-expanded", e ? "true" : "false"), Qa.textContent = e ? "Now close this" : "Don’t try this!", e && (wo = {
      total: Number(M.value),
      work: Number(k.value),
      rest: Number(S.value)
    }, Da = { x: 0.5, y: 0.5 }, an.style.left = "50%", an.style.top = "50%", xo(Da.x, Da.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === e));
  }));
  const eo = o("testingFeedbackForm"), fi = o("testingFeedbackThanks"), aa = o("testingFeedbackAgain");
  eo.addEventListener("submit", (e) => {
    e.preventDefault(), eo.hidden = !0, fi.hidden = !1, At("Feedback captured for prototype");
  }), aa.addEventListener("click", (e) => {
    e.preventDefault(), eo.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), fi.hidden = !0, eo.hidden = !1;
  }), ea.addEventListener("pointerdown", (e) => {
    var a;
    Ra = !0, na(e);
    try {
      (a = ea.setPointerCapture) == null || a.call(ea, e.pointerId);
    } catch {
    }
  }), ea.addEventListener("pointermove", (e) => {
    Ra && na(e);
  }), ea.addEventListener("pointerup", (e) => {
    Ra && (Ra = !1, na(e), O());
  }), ea.addEventListener("pointercancel", () => Ra = !1), ea.addEventListener("keydown", (e) => {
    let { x: a, y: r } = Da, d = !0;
    e.key === "ArrowLeft" ? a -= 0.05 : e.key === "ArrowRight" ? a += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : d = !1, d && (e.preventDefault(), a = Math.max(0, Math.min(1, a)), r = Math.max(0, Math.min(1, r)), Da = { x: a, y: r }, an.style.left = a * 100 + "%", an.style.top = r * 100 + "%", xo(a, r), O());
  });
  const $t = o("workoutModal");
  let yo = null;
  function to(e) {
    return e.map((a) => ({ ...a }));
  }
  function Dr() {
    const e = at[dt];
    return {
      key: dt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: to(it),
      strength: to(tn),
      cooldown: to(Vt),
      total: Number(M.value),
      work: Number(k.value),
      rest: Number(S.value),
      rounds: Number(nt.value) || 1
    };
  }
  function Rr(e = !1) {
    ht = !!e, se = null, Ee = null, gn(), Sr(), yo = Dr(), o("moveEditorTitle").textContent = ht ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ht, o("warmupRow").hidden = ht, o("deleteMoveOpen").hidden = ht;
    const a = o("createMoveOptions");
    a.hidden = !ht;
    {
      const r = at[dt];
      o("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), o("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (gi(), ht) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const r = at[dt];
      Ga((r == null ? void 0 : r.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, bs("movement"), ci(), qo(), Yi.hidden = !0, Qa.setAttribute("aria-expanded", "false"), Qa.textContent = "Don’t try this!", $t.classList.toggle("createMode", ht), $t.querySelector(".modal").classList.toggle("createMode", ht), $t.classList.add("open"), $t.setAttribute("aria-hidden", "false"), Aa(), ht && Se();
  }
  function Ba() {
    const e = at[dt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function gi() {
    const e = Ba(), a = o("warmupSwitch");
    a.classList.toggle("on", e), a.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = at[dt];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, A()) : (e.warmupOff = !e.warmupOff, O()), gi());
  });
  function vi() {
    gn(), Sr(), Tr(), Ee = null, se = null, $t.classList.contains("createMode") && g(), $t.classList.remove("createMode"), $t.querySelector(".modal").classList.remove("createMode"), $t.classList.remove("open"), $t.setAttribute("aria-hidden", "true");
  }
  function Nr() {
    if (!yo) return;
    const e = yo;
    e.profile && (at[e.key] = JSON.parse(JSON.stringify(e.profile))), dt = e.key, it = to(e.warmup), tn = to(e.strength), Vt = to(e.cooldown), M.value = e.total, k.value = e.work, S.value = e.rest, nt.value = e.rounds || 1;
    const a = at[dt];
    if (a) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === dt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const d = r.querySelector(".workoutName");
        d && (d.textContent = a.name);
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
    if (ht) {
      const e = dt;
      delete at[e], ht = !1, Bn = null, rt(ut.order.find((a) => at[a]) || Object.keys(at)[0]);
    } else
      Nr();
    vi();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    gn(), Rt && Wo();
    const e = at[dt], a = m.value.trim() || "New move";
    if (e && (e.name = a), _t(), se = null, O(), ht && e)
      Io(dt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === dt)), ht = !1, Bn = null, ut.order.includes(dt) || ut.order.push(dt), At("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const d = r.querySelector(".workoutName");
        d && (d.textContent = a);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a);
      }
      At("Move saved");
    }
    yo = null, vi(), Cn();
  }), $t.addEventListener("click", (e) => {
    if (e.target === $t) {
      if (ht) {
        const a = dt;
        delete at[a], ht = !1, Bn = null, rt(ut.order.find((r) => at[r]) || Object.keys(at)[0]);
      } else
        Nr();
      vi();
    }
  }), Tn(o("addMovementBtn"), "movement"), Tn(o("addRestBtn"), "rest"), Tn(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", qo), o("useGlobalRestTiming").addEventListener("change", qo), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Ga(e.dataset.movePreset, !0), O();
  })), o("includeWarmupPreset").addEventListener("change", A), o("includeCooldownPreset").addEventListener("change", A), o("includeWarmupPreset").addEventListener("change", he), o("includeCooldownPreset").addEventListener("change", he), m.addEventListener("input", he), m.addEventListener("input", zi), o("confirmAddMovement").addEventListener("click", vo), o("confirmAddRest").addEventListener("click", vo), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && vo();
  });
  const Yo = o("countdown"), bi = o("countNum"), oa = o("countdownPixelCanvas");
  let Zo = null, Ko = "appear";
  class Ki {
    constructor(a, r, d, p, x, L, N) {
      this.width = a.width, this.height = a.height, this.ctx = r, this.x = d, this.y = p, this.color = x, this.speed = (Math.random() * 0.8 + 0.1) * L, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = N, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let $i = [], Ji = 1, ya = 1;
  function Pa() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Xi() {
    var ee;
    if (!oa) return;
    const e = Pa(), a = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    Ji = a, ya = r;
    const d = Math.min(window.devicePixelRatio || 1, 2);
    oa.width = Math.floor(a * d), oa.height = Math.floor(r * d), oa.style.width = a + "px", oa.style.height = r + "px";
    const p = oa.getContext("2d");
    p.setTransform(d, 0, 0, d, 0, 0);
    const x = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], L = 12, N = (ee = window.matchMedia) == null ? void 0 : ee.call(window, "(prefers-reduced-motion: reduce)").matches, X = N ? 0 : 0.055;
    $i = [];
    for (let U = 0; U < a; U += L)
      for (let j = 0; j < r; j += L) {
        const ke = U - a / 2, ze = j - r / 2, Te = Math.sqrt(ke * ke + ze * ze), xe = N ? 0 : Math.random() * 75 + Te * 0.05, ge = new Ki({ width: a, height: r }, p, U, j, x[Math.floor(Math.random() * x.length)], X, xe);
        ge.maxSizeInteger = 4, ge.maxSize = Math.random() * 3.2 + 0.8, ge.sizeStep = 0.35 + Math.random() * 0.45, $i.push(ge);
      }
  }
  function Br(e) {
    cancelAnimationFrame(Zo), Ko = e;
    const a = oa == null ? void 0 : oa.getContext("2d");
    if (!a) return;
    function r() {
      a.clearRect(0, 0, Ji, ya);
      let d = !0;
      $i.forEach((p) => {
        p[Ko](), p.isIdle || (d = !1);
      }), Ko === "disappear" && d || (Zo = requestAnimationFrame(r));
    }
    Zo = requestAnimationFrame(r);
  }
  function vn() {
    cancelAnimationFrame(Zo), Xi(), Br("appear"), setTimeout(() => Br("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Yo.classList.contains("active") && vn();
  });
  const no = o("pixelTrailCanvas"), ko = no.getContext("2d");
  let ka = !0, Mo = 0.7, ct = 600, ao = [], Ln = null, Ma = { x: 0, y: 0, ready: !1 };
  function Pr() {
    const e = c.getBoundingClientRect(), a = Pa(), r = Math.min(window.devicePixelRatio || 1, 2), d = Math.max(1, e.width / a), p = Math.max(1, e.height / a);
    no.width = Math.max(1, Math.floor(d * r)), no.height = Math.max(1, Math.floor(p * r)), no.style.width = d + "px", no.style.height = p + "px", ko.setTransform(r, 0, 0, r, 0, 0);
  }
  function Ir(e, a) {
    if (!ka) return;
    const r = performance.now();
    Ma.ready || (Ma = { x: e, y: a, ready: !0 });
    const d = 7;
    for (let p = 1; p <= d; p++) {
      const x = p / d;
      ao.push({
        x: Ma.x + (e - Ma.x) * x,
        y: Ma.y + (a - Ma.y) * x,
        born: r - (d - p) * 10
      });
    }
    Ma = { x: e, y: a, ready: !0 };
  }
  function Co(e) {
    if (Ln = null, !h) return;
    if (!ye.workout.classList.contains("active")) {
      Ln = requestAnimationFrame(Co);
      return;
    }
    const a = c.getBoundingClientRect(), r = Pa();
    ko.clearRect(0, 0, a.width / r, a.height / r), ka && (ao = ao.filter((p) => e - p.born < ct), ko.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", ao.forEach((p) => {
      const x = (e - p.born) / ct, L = (1 - x) * Mo, N = Math.round(p.x / 14) * 14, X = Math.round(p.y / 14) * 14;
      ko.globalAlpha = Math.max(0, L);
      const ee = 2 + 5 * (1 - x) * Mo;
      ko.fillRect(N - ee / 2, X - ee / 2, ee, ee);
    }), ko.globalAlpha = 1), Ln = requestAnimationFrame(Co);
  }
  c.addEventListener("pointermove", (e) => {
    const a = c.getBoundingClientRect(), r = Pa();
    Ir((e.clientX - a.left) / r, (e.clientY - a.top) / r);
  }), c.addEventListener("pointerleave", () => Ma.ready = !1), new ResizeObserver(Pr).observe(c), Pr(), Ln = requestAnimationFrame(Co);
  const ia = o("movementRippleCanvas"), Ca = ia.getContext("2d");
  let Sa = !0, oo = null, Qi = performance.now();
  function er() {
    const e = ia.parentElement.getBoundingClientRect(), a = Pa(), r = Math.max(1, e.width / a), d = Math.max(1, e.height / a), p = Math.min(window.devicePixelRatio || 1, 2);
    ia.width = Math.max(1, Math.floor(r * p)), ia.height = Math.max(1, Math.floor(d * p)), ia.style.width = r + "px", ia.style.height = d + "px", Ca.setTransform(p, 0, 0, p, 0, 0);
  }
  function So() {
    var e;
    return Wt || ((e = Ae[je]) == null ? void 0 : e.kind) === "rest";
  }
  function tr() {
    const e = Ae[je];
    return So() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function $o(e) {
    if (oo = null, !h) return;
    if (!ye.workout.classList.contains("active")) {
      oo = requestAnimationFrame($o);
      return;
    }
    const a = ia.parentElement.getBoundingClientRect(), r = Pa(), d = Math.max(1, a.width / r), p = Math.max(1, a.height / r);
    if (Ca.clearRect(0, 0, d, p), Sa) {
      const x = tr(), L = (e - Qi) % x / x, N = 15, X = Math.max(8, Math.round(N * p / Math.max(1, d))), ee = d / (N + 1), U = p / (X + 1), j = d * 0.5, ke = p * 0.52, ze = Math.hypot(j, ke), xe = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ge = 1; ge <= X; ge++)
        for (let ot = 1; ot <= N; ot++) {
          const st = ot * ee, _e = ge * U, lt = Math.hypot(st - j, _e - ke) / ze, kt = So(), Je = kt ? Math.exp(-Math.pow((lt - (L * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ze = Math.exp(-Math.pow((lt - L * 1.25) * 7, 2)), Zt = kt ? Je : Ze, un = kt ? 0.5 + 0.5 * Math.sin(L * Math.PI * 2 - lt * 3) ** 2 : 0.35 + 0.65 * Math.sin(L * Math.PI * 2 - lt * 5) ** 2, Dt = kt ? 1.4 + Zt * 4.2 * un : 1.2 + Zt * 5 * un;
          Ca.beginPath(), Ca.arc(st, _e, Dt, 0, Math.PI * 2), Ca.fillStyle = `rgba(${xe},${kt ? 0.08 + Zt * 0.48 : 0.05 + Zt * 0.55})`, Ca.fill();
        }
    }
    oo = requestAnimationFrame($o);
  }
  new ResizeObserver(er).observe(ia.parentElement), er(), oo = requestAnimationFrame($o);
  const Ia = o("exerciseTitle"), ra = o("exerciseMeta"), nr = o("stepLabel"), Jo = o("digits"), ar = o("fill"), To = o("progress"), Xo = o("pause"), Hr = o("nextName"), Qo = o("nextMeta"), Cs = o("nextIcon"), wi = o("skipNextSession");
  let yn = null;
  function kn(e) {
    for (let a = Math.max(0, e); a < Ae.length; a++)
      if (!Ae[a].sessionHidden) return a;
    return -1;
  }
  function or() {
    const e = Ae[je];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Wt) {
      const d = kn(je + 1), p = d >= 0 ? Ae[d] : null;
      return p ? { name: p.name, meta: xi(p), icon: io(p) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = kn(je + 1), r = a >= 0 ? Ae[a] : null;
    return r ? { name: r.name, meta: xi(r), icon: io(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function ir() {
    if (!Ae[je]) return Ae.length;
    const a = kn(je + 1);
    return a < 0 ? Ae.length : a + 1;
  }
  function io(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function xi(e) {
    return e.kind === "video" ? "YouTube · " + zt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function ei() {
    return Ae.length && Ae[Ae.length - 1].round || 1;
  }
  function rr(e) {
    const a = Ae[e];
    if (!a) return "";
    const r = ei();
    if (r <= 1) return "Step " + (e + 1) + " of " + Ae.length;
    if (a.roundBreak) return "Round " + a.round + " of " + r + " · Rest";
    const d = Ae.filter((p) => p.round === a.round && !p.roundBreak).length;
    return "Round " + a.round + " of " + r + " · Step " + (a.roundIndex + 1) + " of " + d;
  }
  function sr() {
    return To.querySelector('[data-step="' + je + '"]');
  }
  function t() {
    Ae[je] && Number(To.dataset.round) !== (Ae[je].round || 1) && me(), [...To.children].forEach((e) => {
      const a = Number(e.dataset.step);
      e.classList.toggle("done", a < je), e.classList.toggle("active", a === je), e.classList.toggle("rewindable", a <= je), e.disabled = a > je, a === je && e.style.setProperty("--segment-progress", "0%");
    }), Ae[je] && (nr.textContent = rr(je), ni());
  }
  function i(e) {
    const a = Ae.indexOf(e);
    a < 0 || a <= je || (e.sessionHidden = !e.sessionHidden, u(), At((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function l() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const a = ir(), r = Ae.slice(a);
    (It === "all" ? r : r.slice(0, Math.max(1, Number(It) || 1))).forEach((p) => {
      const x = document.createElement("section");
      x.className = "upcomingCard" + (p.sessionHidden ? " sessionHidden" : "") + (_s(p) ? " noMeta" : ""), x.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + we(io(p)) + '</div><div><div class="upcomingName">' + Ue(p.name) + '</div><div class="upcomingMeta">' + Ue(xi(p)) + (ei() > 1 ? " · round " + p.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (p.sessionHidden ? "Include this session" : "Skip this session") + "</button>", x.querySelector(".skipSessionBtn").addEventListener("click", () => i(p)), e.appendChild(x);
    });
  }
  function u() {
    var a;
    const e = or();
    Hr.textContent = e.name, Qo.textContent = e.meta, Cs.innerHTML = we(e.icon);
    {
      const r = Wt ? Ae[kn(je + 1)] : ((a = Ae[je]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : Ae[kn(je + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && _s(r)));
    }
    if (yn = null, Wt) {
      const r = kn(je + 1);
      r >= 0 && (yn = Ae[r]);
    } else {
      const r = Ae[je];
      if (r && r.rest > 0)
        yn = null;
      else {
        const d = kn(je + 1);
        d >= 0 && (yn = Ae[d]);
      }
    }
    wi && (wi.hidden = !yn, wi.textContent = yn != null && yn.sessionHidden ? "Include this session" : "Skip this session"), l();
  }
  wi.addEventListener("click", () => {
    yn && (yn.sessionHidden = !yn.sessionHidden, At((yn.sessionHidden ? "Hidden " : "Included ") + yn.name + " for this session"), u());
  });
  let f = null, I = null;
  function y(e, a = {}) {
    const r = at[dt];
    s.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: dt, ...a });
  }
  function _() {
    const e = at[dt];
    f = { key: dt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(I), I = setInterval(() => {
      f && !wn && f.active++;
    }, 1e3), y("started", { steps: Ae.length });
  }
  function P(e) {
    if (clearInterval(I), !f) return;
    const a = f;
    f = null, y(e ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (ut.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: e }), ut.history = ut.history.slice(0, 1e3), Cn(), ai(), ro());
  }
  function ue() {
    b("workout"), Z();
    const e = kn(0);
    e >= 0 && Ae[e].kind === "video" && Ml(Ae[e]);
  }
  function $() {
    Fr(), P(!1), clearInterval(St), clearInterval(Jn), Wt = !1, qe(!1), o("app").classList.remove("resting"), Yo.classList.remove("active"), b("home");
  }
  function Z() {
    Yo.classList.add("active");
    let e = 5;
    bi.textContent = e, requestAnimationFrame(vn), clearInterval(Jn), Jn = setInterval(() => {
      e--, e > 0 ? (bi.textContent = e, vn()) : (clearInterval(Jn), bi.textContent = "GO", vn(), setTimeout(() => {
        Yo.classList.remove("active"), cancelAnimationFrame(Zo), He();
      }, 650));
    }, 1e3);
  }
  function me() {
    var a;
    To.innerHTML = "";
    const e = ((a = Ae[Math.max(0, je)] || Ae[0]) == null ? void 0 : a.round) || 1;
    To.dataset.round = e, Ae.forEach((r, d) => {
      if ((r.round || 1) !== e) return;
      const p = document.createElement("button");
      p.dataset.step = d, p.type = "button", p.className = "progressSegment", p.setAttribute("aria-label", "Go to " + r.name), p.addEventListener("click", () => {
        d <= je && Ye(d);
      }), To.appendChild(p);
    });
  }
  function qe(e) {
    e = !!e;
    const a = wn !== e;
    if (wn = e, Xo.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), Ne && xt)
      try {
        e ? xt.pauseVideo() : xt.playVideo();
      } catch {
      }
    a && f && y(e ? "paused" : "resumed");
  }
  function Ye(e) {
    e < 0 || e >= Ae.length || e > je || (clearInterval(St), Wt = !1, o("app").classList.remove("resting"), je = e, qe(!1), Mi(), St = setInterval(Lo, 1e3));
  }
  function He() {
    if (je = kn(0), qe(!1), me(), je < 0) {
      Ia.textContent = "No activities", ra.textContent = "Open Edit and enable or add a movement", ra.hidden = !1;
      return;
    }
    _(), Mi(), clearInterval(St), St = setInterval(Lo, 1e3);
  }
  const Ce = o("videoStage"), Ve = o("videoSound"), qt = 0, rn = 1, ti = 2;
  let yi = 0, Ta = null, Gn = null, xt = null, Un = null, fe = 0, pe = !1, Ne = null, cn = null;
  function Yn() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Ta || (Ta = new Promise((a, r) => {
      const d = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          d == null || d();
        } catch {
        }
      };
      const p = setInterval(() => {
        var L;
        (L = window.YT) != null && L.Player && (clearInterval(p), clearTimeout(x), a(window.YT));
      }, 100), x = setTimeout(() => {
        clearInterval(p), Ta = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const L = document.createElement("script");
        L.src = "https://www.youtube.com/iframe_api", L.async = !0, L.onerror = () => {
          clearInterval(p), clearTimeout(x), Ta = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(L);
      }
    }), Ta);
  }
  function ki() {
    return Gn || (Gn = Yn().then((e) => new Promise((a) => {
      const r = document.createElement("div");
      o("videoFrame").appendChild(r), xt = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(xt), onStateChange: (d) => Tc(d.data), onError: (d) => Lc(d.data) }
      });
    })), Gn.catch(() => {
      Gn = null;
    }), Gn);
  }
  function Ml(e) {
    !(e != null && e.videoId) || e.videoError || ki().then((a) => {
      Ne || Un === e.videoId || (Un = e.videoId, fe = Number(e.start) || 0, pe = !1, a.mute(), a.loadVideoById({ videoId: e.videoId, startSeconds: fe }));
    }).catch(() => {
    });
  }
  function Sc() {
    const e = kn(je + 1);
    e >= 0 && Ae[e].kind === "video" && Ml(Ae[e]);
  }
  function Tc(e) {
    if (!Ne) {
      e === rn && !pe && (pe = !0, xt.pauseVideo(), xt.seekTo(fe, !0));
      return;
    }
    Ce.classList.toggle("playing", e === rn), Ae[je] === Ne && performance.now() > yi && (e === rn && wn ? qe(!1) : e === ti && !wn && qe(!0)), e === rn && Tl(Ne.videoId, xt.getDuration()) && Cn(), e === qt && lr();
  }
  function Lc(e) {
    const a = Ne;
    if (!a) {
      Un = null;
      return;
    }
    e === 101 || e === 150 ? (Ec(a.videoId), At("That video can’t play outside YouTube, so it was skipped")) : At("The video couldn’t play, so it was skipped"), lr();
  }
  function _c(e) {
    if (o("app").classList.add("videoStep"), Ve.hidden = !0, Ne = e, clearTimeout(cn), !e.videoId) {
      At("This video step has no link yet, so it was skipped"), setTimeout(() => lr(), 0);
      return;
    }
    ki().then((a) => {
      if (Ne !== e) return;
      yi = performance.now() + 1500;
      const r = Number(e.start) || 0;
      Un !== e.videoId ? (Un = e.videoId, fe = r, a.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (a.seekTo(r, !0), a.playVideo()), a.unMute(), wn && a.pauseVideo(), cn = setTimeout(() => {
        Ne !== e || wn || (a.getPlayerState() !== rn ? (a.mute(), a.playVideo(), Ve.hidden = !1) : a.isMuted() && (Ve.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ne === e && (At("YouTube didn’t load, so the video was skipped"), lr());
    });
  }
  function Cl() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), a = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, d = (a == null ? void 0 : a.offsetHeight) || 42, p = window.innerHeight - r - 16 - d - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(p)) + "px");
  }
  window.addEventListener("resize", Cl);
  function Fr() {
    clearTimeout(cn);
    const e = Ne;
    if (Ne = null, o("app").classList.remove("videoStep"), Ce.classList.remove("playing"), Ve.hidden = !0, e && xt) {
      try {
        xt.pauseVideo();
      } catch {
      }
      Un = null;
    }
  }
  function lr() {
    const e = Ne;
    !e || Ae[je] !== e || (Fr(), clearInterval(St), Ci(), St = setInterval(Lo, 1e3));
  }
  Ve.addEventListener("click", () => {
    xt && (xt.unMute(), xt.playVideo()), Ve.hidden = !0;
  });
  function Ac(e) {
    var d;
    const a = Number(e.start) || 0;
    if (e.useVideoLength === !1) return a + (Number(e.duration) || 300);
    const r = xt && Ne === e && Number((d = xt.getDuration) == null ? void 0 : d.call(xt)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || a + (Number(e.duration) || 300);
  }
  function Sl(e, a) {
    const r = at[dt];
    [it, tn, Vt, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((d) => (Array.isArray(d) ? d : []).forEach((p) => {
      p && p.kind === "video" && p.videoId === e && a(p);
    }));
  }
  function Tl(e, a) {
    a = Math.round(Number(a) || 0);
    let r = !1;
    return e && a > 0 && Sl(e, (d) => {
      d.videoDuration !== a && (d.videoDuration = a, r = !0);
    }), r;
  }
  function Ec(e) {
    Sl(e, (a) => {
      a.videoError = "embed";
    }), Cn();
  }
  function Dc(e) {
    const a = e.videoId;
    if (!a) return;
    const r = () => {
      $t.classList.contains("open") ? se || O() : (O(), Cn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((d) => d.ok ? d.json() : Promise.reject(d.status)).then((d) => {
      e.videoId === a && (e.videoTitle = d.title || "", e.autoName && d.title && (e.name = d.title), r());
    }).catch((d) => {
      e.videoId === a && d === 401 && (e.videoError = "embed", r());
    }), Rc(a).then((d) => {
      Tl(a, d) && r();
    }).catch((d) => {
      d === "embed" && e.videoId === a && (e.videoError = "embed", r());
    });
  }
  function Rc(e) {
    return Yn().then((a) => new Promise((r, d) => {
      const p = document.createElement("div");
      p.className = "videoProbe", p.setAttribute("aria-hidden", "true");
      const x = document.createElement("div");
      p.appendChild(x), o("app").appendChild(p);
      let L = null, N = !1;
      const X = (j, ke) => {
        N || (N = !0, clearTimeout(ee), setTimeout(() => {
          try {
            L == null || L.destroy();
          } catch {
          }
          p.remove();
        }, 0), ke ? d(ke) : r(j));
      }, ee = setTimeout(() => X(0), 2e4), U = () => {
        var ke;
        const j = Number((ke = L == null ? void 0 : L.getDuration) == null ? void 0 : ke.call(L)) || 0;
        return j > 0 && X(j), j > 0;
      };
      L = new a.Player(x, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            U() || (L.mute(), L.playVideo());
          },
          onStateChange: () => U(),
          onError: (j) => X(0, j.data === 101 || j.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Mi() {
    Wt = !1;
    const e = Ae[je];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? _c(e) : Fr(), jt = e.duration, In = e.duration, Ia.textContent = e.name, ra.textContent = e.group, ra.hidden = !0, nr.textContent = rr(je), f && y("step", { name: e.name, group: e.group, kind: e.kind, step: je + 1, of: Ae.length, round: e.round || 1, rounds: ei(), duration: e.duration }), u(), t(), Sc(), e.kind === "video" && setTimeout(Cl, 0);
  }
  function ni() {
    var p;
    const e = ((p = Ae[je]) == null ? void 0 : p.kind) === "video" && !Wt, a = e && jt >= 60;
    Jo.textContent = a ? zt(jt) : jt, Jo.classList.toggle("long", a), e && (o("videoClock").textContent = zt(jt) + " left");
    const r = jt / In * 100;
    ar.style.width = r + "%";
    const d = sr();
    if (d && !Wt) {
      const x = 100 - r;
      d.style.setProperty("--segment-progress", x + "%");
    }
  }
  function Lo() {
    var a, r;
    if (wn) return;
    const e = Ae[je];
    if ((e == null ? void 0 : e.kind) === "video" && !Wt && Ne === e) {
      const d = Number((a = xt == null ? void 0 : xt.getCurrentTime) == null ? void 0 : a.call(xt)) || 0, p = Number(e.start) || 0, x = Ac(e);
      In = Math.max(1, x - p), (d > p || ((r = xt == null ? void 0 : xt.getPlayerState) == null ? void 0 : r.call(xt)) === rn) && (jt = Math.max(0, Math.ceil(x - d))), ni(), d > p && d >= x - 0.25 && lr();
      return;
    }
    jt--, ni(), jt <= 0 && (e.rest > 0 ? Ll(e.rest) : Ci());
  }
  function Ll(e) {
    var r;
    Wt = !0, o("app").classList.add("resting");
    const a = sr();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(St), jt = e, In = e, f && y("rest", { duration: e }), Ia.textContent = "Rest", ra.textContent = (r = Ae[je]) != null && r.roundBreakAfter ? "Round " + (Ae[je].round + 1) + " next" : "Recovery", u(), ni(), St = setInterval(() => {
      wn || (jt--, ni(), jt <= 0 && (clearInterval(St), Ci(), St = setInterval(Lo, 1e3)));
    }, 1e3);
  }
  function Ci() {
    Wt = !1;
    const e = kn(je + 1);
    if (e >= 0)
      je = e, Mi();
    else {
      clearInterval(St), Fr(), qe(!1), o("app").classList.remove("resting"), Ia.textContent = "Complete", ra.textContent = "Move finished", ra.hidden = !1, Jo.textContent = "✓";
      {
        const a = ei();
        nr.textContent = a > 1 ? a + " rounds done" : Ae.filter((r) => !r.roundBreak).length + " steps done";
      }
      P(!0);
      {
        const a = Hl(7).reduce((r, d) => r + d.minutes, 0);
        ra.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      ar.style.width = "100%", u();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Nc(), qe(!1);
  });
  function Nc() {
    clearInterval(St);
    const e = Ae[je];
    if (Wt) {
      Wt = !1, o("app").classList.remove("resting");
      const r = kn(je + 1);
      r >= 0 ? (je = r, Mi(), St = setInterval(Lo, 1e3)) : Ci();
      return;
    }
    if (e && e.rest > 0) {
      Ll(e.rest);
      return;
    }
    const a = kn(je + 1);
    a >= 0 ? (je = a, Mi(), St = setInterval(Lo, 1e3)) : Ci();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(St), qe(!1), Wt) {
      const e = Ae[je];
      jt = e.rest, In = e.rest, Ia.textContent = "Rest", ra.textContent = "Recovery", o("app").classList.add("resting"), u(), ni();
    } else
      Mi();
    St = setInterval(Wt ? () => {
      wn || (jt--, ni(), jt <= 0 && (clearInterval(St), Ci(), St = setInterval(Lo, 1e3)));
    } : Lo, 1e3);
  });
  function dr(e, a, r, d) {
    let p = 0, x = null, L = !1;
    function N() {
      x && cancelAnimationFrame(x), x = null, p = 0, L = !1, a.style.width = "0%", e.classList.remove("holding");
    }
    function X(j) {
      if (!L) return;
      p || (p = j);
      const ke = Math.min(1, (j - p) / r);
      if (a.style.width = ke * 100 + "%", ke >= 1) {
        L = !1, x && cancelAnimationFrame(x), x = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), d();
        return;
      }
      x = requestAnimationFrame(X);
    }
    function ee(j) {
      var ke;
      if (!(j && j.button !== void 0 && j.button !== 0)) {
        j == null || j.preventDefault(), N(), L = !0, e.classList.add("holding");
        try {
          (ke = e.setPointerCapture) == null || ke.call(e, j.pointerId);
        } catch {
        }
        x = requestAnimationFrame(X);
      }
    }
    function U() {
      L && N();
    }
    e.addEventListener("pointerdown", ee), e.addEventListener("pointerup", U), e.addEventListener("pointercancel", U), e.addEventListener("lostpointercapture", U), e.addEventListener("keydown", (j) => {
      (j.key === " " || j.key === "Enter") && !j.repeat && ee(j);
    }), e.addEventListener("keyup", (j) => {
      (j.key === " " || j.key === "Enter") && U();
    });
  }
  const Bc = o("endWorkout");
  dr(Bc, o("holdEndFill"), 1500, $);
  const Si = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Si.classList.add("open"), Si.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Si.classList.remove("open"), Si.setAttribute("aria-hidden", "true");
  });
  function Pc() {
    const e = dt, a = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    a && a.remove(), delete at[e], ut.order = ut.order.filter((d) => d !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const d = "custom-" + Date.now();
      at[d] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ut.order.push(d), r = Io(d, at[d]);
    }
    Si.classList.remove("open"), Si.setAttribute("aria-hidden", "true"), yo = null, vi(), rt(r.dataset.workout), Cn(), At("Move deleted");
  }
  dr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, Pc);
  const Ss = n.querySelector(".rubberTabs"), Ti = o("rubberIndicator");
  function cr(e, a = !0) {
    if (!e || !Ss || !Ti) return;
    const r = Ss.getBoundingClientRect(), d = e.getBoundingClientRect();
    Ti.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const p = Pa();
    Ti.style.left = (d.left - r.left) / p + Ss.scrollLeft + "px", Ti.style.width = d.width / p + "px", a && (Ti.style.transform = "scaleX(1.08)", setTimeout(() => Ti.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), cr(e, !0);
  })), requestAnimationFrame(() => cr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => cr(n.querySelector(".tab.active"), !1));
  const Ts = o("pixelTrailToggle"), Ls = o("rippleToggle"), Li = o("trailStrength"), _i = o("trailLife");
  function sa(e, a) {
    pt()[e] = a, Cn();
  }
  const _l = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Al(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function _s(e) {
    var a;
    return !!((a = pt().hideMeta) != null && a[Al(e)]);
  }
  function Ic() {
    const e = /* @__PURE__ */ new Map(), a = (r, d, p) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const x = Al(r);
      let L = e.get(x);
      L || (L = { key: x, label: x === "rest" ? "Rest" : x === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(x, L)), L.kinds.add(x === "rest" ? "Rest" : x === "video" ? "Video" : d), L.moves.add(p), L.count++;
    };
    return Object.values(at).forEach((r) => {
      const d = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Le)).forEach((p) => a(p, "Warm-up", d)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((p) => a(p, p.presetRole === "warmup" ? "Warm-up" : p.presetRole === "cooldown" ? "Cooldown" : "Movement", d)), (r.cooldown || (r.customSequence ? [] : qa)).forEach((p) => a(p, "Cooldown", d));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, d]) => {
      e.has(r) || e.set(r, { key: r, label: d, kinds: /* @__PURE__ */ new Set([d]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, d) => _l.indexOf(r.kind) - _l.indexOf(d.kind) || r.label.localeCompare(d.label));
  }
  let As = "all";
  function Es() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return Ic().filter((a) => (As === "all" || a.kind === As) && (!e || a.label.toLowerCase().includes(e) || a.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function Or() {
    const e = o("metaTableBody");
    if (!e) return;
    const a = pt().hideMeta || {}, r = Es();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((p) => {
      const x = !a[p.key], L = p.count ? (p.moves.length > 2 ? p.moves.slice(0, 2).join(", ") + " + " + (p.moves.length - 2) + " more" : p.moves.join(", ")) + " · " + p.count + " step" + (p.count === 1 ? "" : "s") : "Not used yet", N = document.createElement("tr");
      N.className = x ? "" : "off", N.innerHTML = '<td><div class="metaType">' + Ue(p.label) + '</div><div class="metaSub">' + Ue(p.kind + " · " + L) + '</div></td><td class="metaKindCol">' + Ue(p.kind) + '</td><td class="metaUsedCol">' + Ue(L) + '</td><td class="metaSwitchCol"><button class="switch' + (x ? " on" : "") + '" type="button" role="switch" aria-checked="' + x + '" aria-label="Second line for ' + Ue(p.label) + ' on phones"></button></td>', N.querySelector(".switch").addEventListener("click", () => Ds([p.key], x)), e.appendChild(N);
    });
    const d = r.filter((p) => a[p.key]).length;
    o("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (d ? " · " + d + " hidden on phones" : "") : "";
  }
  function Ds(e, a) {
    const r = { ...pt().hideMeta || {} };
    e.forEach((d) => {
      a ? r[d] = !0 : delete r[d];
    }), sa("hideMeta", r), Or(), mt(), u();
  }
  o("metaSearch").addEventListener("input", Or), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    As = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === e)), Or();
  })), o("metaHideAll").addEventListener("click", () => Ds(Es().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => Ds(Es().map((e) => e.key), !1));
  const Ai = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...pt().toggles || {} };
  function El() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", Ai[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, d]) => {
      o(d).hidden = Ai[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => Ai[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const a = n.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !e), a.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Ai[e.dataset.toggle] = Ai[e.dataset.toggle] === !1, El(), sa("toggles", { ...Ai });
  })), El();
  function Hc() {
    Ts.classList.toggle("on", ka), Ls.classList.toggle("on", Sa), Li.value = Math.round(Mo * 100), o("trailStrengthValue").textContent = Li.value + "%", _i.value = ct, o("trailLifeValue").textContent = _i.value + " ms";
  }
  pt().trailEnabled !== void 0 && (ka = pt().trailEnabled), pt().rippleEnabled !== void 0 && (Sa = pt().rippleEnabled), pt().trailStrength !== void 0 && (Mo = pt().trailStrength), pt().trailMaxAge !== void 0 && (ct = pt().trailMaxAge), Hc(), Ts.addEventListener("click", () => {
    ka = !ka, Ts.classList.toggle("on", ka), ka || (ao = []), sa("trailEnabled", ka);
  }), Ls.addEventListener("click", () => {
    Sa = !Sa, Ls.classList.toggle("on", Sa), sa("rippleEnabled", Sa);
  }), Li.addEventListener("input", () => {
    Mo = Number(Li.value) / 100, o("trailStrengthValue").textContent = Li.value + "%";
  }), Li.addEventListener("change", () => sa("trailStrength", Mo)), _i.addEventListener("input", () => {
    ct = Number(_i.value), o("trailLifeValue").textContent = _i.value + " ms";
  }), _i.addEventListener("change", () => sa("trailMaxAge", ct)), Xa.addEventListener("change", () => sa("upcomingCount", It));
  function Dl(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const a = e === "light";
    o("app").classList.toggle("light", a), s.setLight(a), oi(n);
  }
  Dl(pt().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Dl(e.dataset.theme), sa("theme", e.dataset.theme);
  }));
  const Zn = { steps: null, weather: null, ...pt().entities || {} };
  let sn = null, Rs = {};
  function Fc(e) {
    const a = Object.values(e).filter((N) => N.entity_id.startsWith("sensor.") || N.entity_id.startsWith("input_number.")), r = (N) => N.attributes.friendly_name || N.entity_id, d = a.filter((N) => /step/i.test(N.entity_id) || /step/i.test(r(N)) || ["steps", "step"].includes(String(N.attributes.unit_of_measurement || "").toLowerCase())), p = a.filter((N) => !d.includes(N)), x = (N, X) => r(N).localeCompare(r(X)), L = (N, X) => /health_steps/.test(X.entity_id) - /health_steps/.test(N.entity_id) || x(N, X);
    return { suggested: d.sort(L), rest: p.sort(x), label: r };
  }
  function Rl(e) {
    const a = o("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: r, rest: d, label: p } = Fc(e), x = (X) => '<option value="' + Ue(X.entity_id) + '">' + Ue(p(X)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(x).join("") + "</optgroup>" : "") + (d.length ? '<optgroup label="All sensors">' + d.map(x).join("") + "</optgroup>" : ""), a.value = Zn.steps || "";
    const L = o("stepsStatus"), N = Zn.steps && e[Zn.steps];
    L.textContent = N ? "Connected · " + p(N) : L.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Zn.steps = o("stepsEntity").value || null, sa("entities", { ...Zn }), Rs = {}, Il(), sn && (Rl(sn), Bl(sn));
  });
  function Oc(e, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(e);
  }
  function Nl() {
    const e = Zn.steps && (sn == null ? void 0 : sn[Zn.steps]), a = Number(e == null ? void 0 : e.state);
    return Number.isFinite(a) ? a : null;
  }
  function Bl(e) {
    var d;
    const a = Zn.steps, r = a ? Number((d = e[a]) == null ? void 0 : d.state) : NaN;
    o("stepsMeta").textContent = a ? Number.isFinite(r) ? Oc(r) : "—" : "Set up in Settings";
  }
  let Pl = 0;
  async function Il() {
    const e = Zn.steps;
    if (!e || !s.ws) return;
    Pl = Date.now();
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const d = await s.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: a.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), p = (d == null ? void 0 : d[e]) || [], x = {};
      if (p.forEach((L) => {
        Number.isFinite(L.max) && (x[Nt(new Date(L.start))] = L.max);
      }), !Object.keys(x).length) {
        const L = await s.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: a.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((L == null ? void 0 : L[e]) || []).forEach((N) => {
          const X = Number(N.s ?? N.state), ee = N.lu ? N.lu * 1e3 : Date.parse(N.last_updated || N.last_changed);
          if (!Number.isFinite(X) || !ee) return;
          const U = Nt(new Date(ee));
          x[U] = Math.max(x[U] || 0, X);
        });
      }
      Rs = x, ro();
    } catch {
    }
  }
  function ai() {
    ro();
  }
  ai(), setInterval(() => {
    ai(), Uo(), Ja();
  }, 10 * 60 * 1e3);
  function Hl(e) {
    const a = {}, r = {};
    ut.history.forEach((L) => {
      const N = Nt(new Date(L.start));
      a[N] = (a[N] || 0) + (L.seconds || 0) / 60, r[N] = (r[N] || 0) + 1;
    });
    const d = /* @__PURE__ */ new Date(), p = Nt(d), x = [];
    for (let L = e - 1; L >= 0; L--) {
      const N = new Date(d.getFullYear(), d.getMonth(), d.getDate() - L), X = Nt(N), ee = ut.checkins.filter((j) => j.date === X), U = (j) => {
        const ke = ee.map((ze) => ze[j]).filter(Boolean);
        return ke.length ? ke.reduce((ze, Te) => ze + Te, 0) / ke.length : null;
      };
      x.push({
        key: X,
        date: N,
        minutes: Math.round(a[X] || 0),
        moves: r[X] || 0,
        steps: X === p && Nl() != null ? Nl() : Rs[X] ?? null,
        mood: U("mood"),
        energy: U("energy")
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
  function ro() {
    const e = o("insightCard");
    if (!e) return;
    const a = Hl(30), r = Wc(a), d = a.reduce((ee, U) => ee + U.minutes, 0), p = /* @__PURE__ */ new Date(), x = Nt(p), L = Nt(new Date(p.getFullYear(), p.getMonth(), p.getDate() - (p.getDay() + 6) % 7)), N = a.filter((ee) => ee.key >= L && ee.key <= x).reduce((ee, U) => ee + U.minutes, 0), X = (ee, U, j) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ee + '</div><div><div class="activityRowName">' + Ue(U) + '</div><div class="activityRowMeta">' + Ue(j) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + we("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + X(we("clock"), "This week", N + " min") + X(we("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + X(we("calendar"), "30 days", d + " min") + "</div>";
  }
  const Ns = {
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
  }, qc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Ei = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Wr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Fl = 0;
  const Bs = (e, a) => '<path class="' + a + '" d="' + e + '"/>', Vc = (e, a) => ' style="animation-delay:-' + Math.round(e * 137 % a) + 'ms"', la = (e, a, r, d) => {
    const p = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (d < 1 ? ' opacity="' + d + '"' : "") + Vc(e, 2400) + ' d="M' + e + " " + (a - r) + "L" + (e + p) + " " + (a - p) + "L" + (e + r) + " " + a + "L" + (e + p) + " " + (a + p) + "L" + e + " " + (a + r) + "L" + (e - p) + " " + (a + p) + "L" + (e - r) + " " + a + "L" + (e - p) + " " + (a - p) + 'Z"/>';
  }, Ol = ([e, a, r], d) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + d + ')"/><defs><linearGradient id="' + d + '" x1="0" y1="' + a + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zc = (e, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', jc = (e) => (e ? ["29.35", "43.04", "56.74"].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), Gc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, r], d) => '<circle class="wxFlake" style="animation-delay:-' + d * 640 + 'ms" cx="' + a + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Wl(e, a, r, d) {
    return e === "clear" ? a ? Ol(r ? Wr.l : Wr.s, d) + (r ? la(70, 20, 5.83, 1) + la(78.33, 41.67, 3.75, 0.8) + la(60, 71.67, 3.33, 0.6) : la(42, 12, 3.5, 1) + la(47, 25, 2.25, 0.8) + la(36, 43, 2, 0.6)) : zc(d, r) : e === "partly" ? (a ? Ol(r ? Wr.lp : Wr.sp, d) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Bs(r ? Ei.lp : Ei.sp, a ? "wxCloudLight" : "wxBright") + (a ? r ? la(73.33, 16.67, 4.17, 0.9) : la(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Bs(r ? Ei.lc : Ei.s, a ? "wxCloudLight" : "wxBright") + (a ? r ? la(15, 15, 3.75, 0.8) + la(76.67, 13.33, 2.92, 0.6) : la(9, 9, 2.25, 0.8) + la(46, 8, 1.75, 0.6) : "") : Bs(r ? Ei.lr : Ei.s, "wxCloudLight") + (e === "rain" ? jc(r) : Gc(r));
  }
  const Uc = () => {
    var e;
    return ((e = sn == null ? void 0 : sn["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Kn = pt().weatherStyle || "bitmap", ql = pt().weatherLayout === "strip" ? "strip" : "tiles", Yc = pt().weatherMotion !== !1;
  const ur = () => Yc && !Ie(), pr = /* @__PURE__ */ new Map(), Ps = 700, Zc = (e) => {
    const [a, r] = e.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: r === "night" };
  };
  function qr(e, a, r, d = Kn, p, x) {
    let L = qc(e);
    const N = L === "night" || (x != null ? !!x : !!r && Uc());
    L === "night" && (L = "clear");
    const X = a ? 90 : 54, ee = ps(e, N), U = performance.now();
    let j = p ? pr.get(p) : null;
    if (p && !j ? pr.set(p, j = { key: ee, t0: -1e9 }) : j && j.key !== ee && (j.fromKey = j.key, j.from = j.last || null, j.key = ee, j.t0 = U), d !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ee + '"' + (p ? ' data-wx-slot="' + p + '"' : "") + ' data-wx-style="' + d + '" data-wx-size="' + X + '"></canvas></span>';
    let ke = "";
    if (j && U - j.t0 < Ps && (ur() || Ie())) {
      const ze = Zc(j.fromKey);
      ke = '<span class="wxLayer wxOut ' + ze.k + (ze.night ? " night" : "") + '" style="animation-delay:' + Math.round(j.t0 - U) + 'ms"><svg viewBox="0 0 ' + X + " " + X + '">' + Wl(ze.k, ze.night, a, "wxg" + ++Fl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + L + (N ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + X + " " + X + '">' + Wl(L, N, a, "wxg" + ++Fl) + "</svg>" + ke + "</span>";
  }
  function Vr() {
    const e = o("app"), a = getComputedStyle(e), r = (N) => a.getPropertyValue(N).trim(), d = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([N, X]) => {
      r(X) && (d[N] = r(X));
    });
    const p = r("--color-text-primary") || "#f1f1f1", x = r("--color-bg-card") || "#222222", L = e.classList.contains("light");
    return { colors: d, ink: L ? p : x, paper: L ? x : p };
  }
  function oi(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const d = Vr(), p = ur(), x = Ie();
    r.forEach((L) => {
      var j;
      const N = L.dataset.wx, X = L.dataset.wxSlot ? pr.get(L.dataset.wxSlot) : null;
      let ee = ul(N, d.colors);
      if (X && X.key === N) {
        const ke = (a - X.t0) / Ps;
        ke < 1 && (p || x) && (ee = du(X.from || ul(X.fromKey, d.colors), ee, Math.max(0, ke), d.colors, x)), X.last = ee;
      }
      const U = Xd(ee, { size: Number(L.dataset.wxSize) || 54, px: 2, oneBit: L.dataset.wxStyle === "onebit", colors: d.colors, ink: d.ink, paper: d.paper, clock: a, idle: p });
      L.width !== U.w && (L.width = U.w), L.height !== U.h && (L.height = U.h), (j = L.getContext("2d")) == null || j.putImageData(new ImageData(U.data, U.w, U.h), 0, 0);
    });
  }
  let zr = null, Vl = -1;
  function zl(e) {
    if (zr = null, !h) return;
    const a = ur(), r = Math.floor(e / 100), d = [...pr.values()].some((X) => e - X.t0 < Ps), p = [...jr.values()].some((X) => e - X.t0 < X.dur), x = ye.home.classList.contains("active"), L = On.classList.contains("open"), N = a && Kn === "smooth" && (L || x && ql === "strip");
    !document.hidden && (d || p || N || a && r !== Vl) && (Vl = r, x && (oi(o("weatherCard"), e), mr(o("weatherCard"), e)), L && (oi(On, e), mr(On, e))), (a || d || p) && (zr = requestAnimationFrame(zl));
  }
  function ii() {
    o("app").classList.toggle("wxMotion", ur()), !zr && h && (zr = requestAnimationFrame(zl));
  }
  let jl = [];
  const Yt = 36e5, Kc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function so() {
    const e = /* @__PURE__ */ new Date(), a = (x, L) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + x, L), r = [], d = [], p = [...Array(6)].map((x, L) => {
      const N = a(L, 6), X = a(L, 18), ee = a(L + 1, 6), U = jl.find((ke) => Nt(new Date(ke.datetime)) === Nt(N)), j = (ke, ze, Te) => {
        const xe = r.filter((st) => st.t >= +ke && st.t < +ze);
        if (xe.length) {
          const st = {};
          return xe.forEach((_e) => {
            st[_e.c] = (st[_e.c] || 0) + (Kc.has(_e.c) ? 2 : 1);
          }), Object.entries(st).sort((_e, lt) => lt[1] - _e[1])[0][0];
        }
        const ge = d.find((st) => {
          const _e = +new Date(st.datetime);
          return _e >= +ke - 3 * Yt && _e < +ze && (st.is_daytime == null || !!st.is_daytime == !Te);
        });
        if (ge) return ge.condition;
        const ot = (U == null ? void 0 : U.condition) || "cloudy";
        return Te && ot === "sunny" ? "clear-night" : ot;
      };
      return { start: +N, end: +ee, day: j(N, X, !1), night: j(X, ee, !0), hi: Number(U == null ? void 0 : U.temperature), lo: Number(U == null ? void 0 : U.templow) };
    });
    return { days: p, hours: r, start: p[0].start, end: p[5].end };
  }
  const Gl = (e, a) => {
    const r = e.days.findIndex((p) => a < p.end);
    if (r < 0) return 1;
    const d = e.days[r];
    return Math.max(0, (r + (a - d.start) / (d.end - d.start)) / 6);
  }, $c = (e, a) => {
    const r = Math.max(0, Math.min(0.99999, a)) * 6, d = Math.floor(r), p = e.days[d];
    return p.start + (r - d) * (p.end - p.start);
  };
  function Is(e, a) {
    const r = Math.max(0, e.days.findIndex((X) => a < X.end)), d = e.days[r], p = (a - d.start) / (d.end - d.start) >= 0.5;
    let x = p ? d.night : d.day, L = NaN;
    const N = e.hours;
    if (N.length && a >= N[0].t - Yt && a <= N[N.length - 1].t + Yt) {
      let X = N.findIndex((j) => j.t > a);
      X < 0 && (X = N.length);
      const ee = N[Math.max(0, X - 1)], U = N[Math.min(N.length - 1, X)];
      x = ee.c || x, L = U.t > ee.t ? ee.temp + (U.temp - ee.temp) * Math.max(0, Math.min(1, (a - ee.t) / (U.t - ee.t))) : ee.temp;
    }
    if (!Number.isFinite(L)) {
      const X = [];
      if (e.days.forEach((ee) => {
        Number.isFinite(ee.lo) && X.push([ee.start - Yt, ee.lo]), Number.isFinite(ee.hi) && X.push([ee.start + 9 * Yt, ee.hi]);
      }), X.length) {
        L = a <= X[0][0] ? X[0][1] : X[X.length - 1][1];
        for (let ee = 1; ee < X.length; ee++) if (a <= X[ee][0] && a > X[ee - 1][0]) {
          const [U, j] = X[ee - 1], [ke, ze] = X[ee];
          L = j + (ze - j) * (1 - Math.cos(Math.PI * (a - U) / (ke - U))) / 2;
          break;
        }
      }
    }
    return { cond: p && x === "sunny" ? "clear-night" : x, temp: L, night: p, day: d };
  }
  const Ul = (e) => Nt(new Date(e)) === Nt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), jr = /* @__PURE__ */ new Map(), Jc = 900, Xc = 700;
  let Gr = null;
  const da = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((a) => {
    mr(a.target.parentElement), a.target.closest("#wxDialog") && Xl();
  })) : null;
  function mr(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const d = so(), p = d.days.flatMap((j) => [{ cond: j.day, night: !1 }, { cond: j.night, night: !0 }]), x = p.map((j) => j.cond).join(), L = Vr(), N = ur(), X = Ie(), ee = Number(Nt(new Date(d.start)).replace(/\D/g, "")) % 9973;
    let U = !1;
    r.forEach((j) => {
      var st;
      const ke = j.clientWidth, ze = j.clientHeight;
      if (!ke || !ze) return;
      const Te = j.dataset.wxStrip;
      let xe = jr.get(Te);
      xe ? xe.sig !== x && (xe.prev = xe.segs, xe.sig = x, xe.segs = p, xe.t0 = a, xe.dur = Xc) : jr.set(Te, xe = { sig: x, segs: p, prev: null, t0: a, dur: Jc });
      const ge = N || X ? Math.min(1, Math.max(0, (a - xe.t0) / xe.dur)) : 1;
      ge < 1 && (U = !0);
      const ot = { width: ke, height: ze, colors: L.colors, clock: a, ambient: N, seed: ee, reveal: X ? ge : 1 - Math.pow(1 - ge, 3), prev: ge < 1 ? xe.prev : null, reduce: X };
      if (Kn === "smooth") {
        const _e = Math.min(2, window.devicePixelRatio || 1), lt = Math.round(ke * _e), kt = Math.round(ze * _e);
        j.width !== lt && (j.width = lt), j.height !== kt && (j.height = kt);
        const Je = j.getContext("2d");
        if (!Je) return;
        Je.setTransform(_e, 0, 0, _e, 0, 0), Cu(Je, p, ot);
      } else {
        const _e = Mu(p, { ...ot, px: 2, oneBit: Kn === "onebit", ink: L.ink, paper: L.paper });
        j.width !== _e.w && (j.width = _e.w), j.height !== _e.h && (j.height = _e.h), (st = j.getContext("2d")) == null || st.putImageData(new ImageData(_e.data, _e.w, _e.h), 0, 0);
      }
    }), U && ii();
  }
  function Yl() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const a = Zn.weather, r = a && (sn == null ? void 0 : sn[a]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + qr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", oi(e);
      return;
    }
    const d = r.attributes || {}, p = d.temperature_unit || "°", x = (Je) => Number.isFinite(Number(Je)) ? Math.round(Number(Je)) + "°" : "—", L = (d.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", N = Ns[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), X = Nt(/* @__PURE__ */ new Date()), ee = jl.slice(0, 7), U = ee.find((Je) => Nt(new Date(Je.datetime)) === X) || null, j = ee.filter((Je) => Nt(new Date(Je.datetime)) >= X).slice(0, 6), ke = /* @__PURE__ */ new Date(), ze = Nt(new Date(ke.getFullYear(), ke.getMonth(), ke.getDate() + 1)), Te = U ? "H " + x(U.temperature) + "&ensp; L " + x(U.templow) : "", xe = (Je) => {
      const Ze = Nt(new Date(Je.datetime));
      return Ze === X ? "Today" : Ze === ze ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Je.datetime));
    }, ge = Number.isFinite(Number(d.temperature)) ? Math.round(Number(d.temperature)) : "—", ot = (Je) => {
      const Ze = new Date(Je.datetime);
      return Math.round((new Date(Ze.getFullYear(), Ze.getMonth(), Ze.getDate()) - new Date(ke.getFullYear(), ke.getMonth(), ke.getDate())) / 864e5);
    }, st = (Je) => (Ns[Je] || Je || "").toLowerCase(), _e = (Je, Ze) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ot(Je) + '" aria-label="' + Ue(xe(Je) + ": " + st(Je.condition) + ", " + x(Je.temperature) + " / " + x(Je.templow) + ". Open the forecast") + '">' + qr(Je.condition, !1, !1, Kn, "day" + Ze) + '<div><div class="activityRowName">' + Ue(xe(Je)) + '</div><div class="activityRowMeta">' + x(Je.temperature) + " / " + x(Je.templow) + "</div></div></div>", lt = () => '<div class="wxStrip"><div class="wxStripDays">' + so().days.map((Ze, Zt) => {
      const Dt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ze.start)) + ": " + st(Ze.day) + (st(Ze.day) === st(Ze.night) ? " all day and night" : ", then " + st(Ze.night) + " overnight") + (Number.isFinite(Ze.hi) ? ". High " + x(Ze.hi) : "") + (Number.isFinite(Ze.lo) ? ", low " + x(Ze.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Zt + '" aria-label="' + Ue(Dt) + '"><span class="wxDayName">' + Ue(Ul(Ze.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + x(Ze.hi) + '</span><span class="wxLow">' + x(Ze.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ue("Now in " + L + ": " + ge + "°, " + st(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + qr(r.state, !0, !0, Kn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ue(String(ge)) + '</span><span class="wxUnit">' + Ue(p) + '</span></div><div class="wxPlace">' + Ue(L) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ue(N) + "</div>" + (Te ? '<div class="wxRange">' + Te + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (j.length ? ql === "strip" ? lt() : '<div class="activityRows wxDays">' + j.map(_e).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", oi(e);
    const kt = e.querySelector("canvas[data-wx-strip]");
    Gr && Gr !== kt && (da == null || da.unobserve(Gr)), Gr = kt, kt && (da == null || da.observe(kt), mr(e)), ii(), Jl();
  }
  const Zl = o("weatherCard"), Kl = (e) => {
    const a = e.closest("[data-wx-day]");
    if (a) {
      const d = /* @__PURE__ */ new Date();
      $l(+new Date(d.getFullYear(), d.getMonth(), d.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && $l(Date.now(), r);
  };
  Zl.addEventListener("click", (e) => Kl(e.target)), Zl.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Kl(e.target));
  });
  const On = o("wxDialog"), _o = o("wxGraph"), hr = o("wxGraphWrap");
  let La = Date.now(), ri = null, Hs = !1, Di = null;
  function $l(e, a) {
    const r = so();
    ri = a || null, La = Math.max(r.start, Math.min(r.end - Yt, e)), jr.delete("dialog"), pr.delete("scrub"), On.classList.add("open"), On.setAttribute("aria-hidden", "false"), Jl(), da == null || da.observe(On.querySelector("canvas[data-wx-strip]")), _o.focus({ preventScroll: !0 }), ii();
  }
  function Fs() {
    var e;
    On.classList.remove("open"), On.setAttribute("aria-hidden", "true"), da == null || da.unobserve(On.querySelector("canvas[data-wx-strip]")), (e = ri == null ? void 0 : ri.focus) == null || e.call(ri, { preventScroll: !0 }), ri = null;
  }
  function Jl() {
    if (!On.classList.contains("open")) return;
    const e = so();
    o("wxGraphDays").innerHTML = e.days.map((a) => "<span>" + Ue(Ul(a.start)) + "</span>").join(""), Xl(e), Ur(e), mr(On);
  }
  function Ur(e = so()) {
    const a = Is(e, La), r = sn == null ? void 0 : sn[Zn.weather], d = (r == null ? void 0 : r.attributes) || {}, p = d.temperature_unit || "°", x = Math.abs(La - Date.now()) < Yt / 2, L = x && r ? r.state : a.cond, N = x && Number.isFinite(Number(d.temperature)) ? Math.round(Number(d.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", X = Ns[L] || (L ? L.charAt(0).toUpperCase() + L.slice(1) : "—"), ee = x ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(La / Yt) * Yt)), U = a.day, j = (Number.isFinite(U.hi) ? "H " + Math.round(U.hi) + "°" : "") + (Number.isFinite(U.lo) ? "&ensp; L " + Math.round(U.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + qr(L, !0, x, Kn, "scrub", x ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ue(String(N)) + '</span><span class="wxUnit">' + Ue(p) + '</span></div><div class="wxPlace">' + Ue(ee) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ue(X) + "</div>" + (j ? '<div class="wxRange">' + j + "</div>" : "") + "</div>", oi(o("wxDialogNow")), _o.setAttribute("aria-valuenow", String(Math.round((La - e.start) / Yt))), _o.setAttribute("aria-valuetext", ee + ", " + X.toLowerCase() + ", " + N + "°"), Os(e), ii();
  }
  function Xl(e = so()) {
    const a = o("wxGraphLine"), r = hr.clientWidth, d = hr.clientHeight;
    if (!r || !d) return;
    const p = [];
    for (let ge = e.start; ge <= e.end; ge += Yt) {
      const ot = Is(e, ge).temp;
      Number.isFinite(ot) && p.push([Gl(e, ge) * r, ot]);
    }
    if (a.setAttribute("viewBox", "0 0 " + r + " " + d), p.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', Di = null, Os(e);
      return;
    }
    const x = p.map((ge) => ge[1]), L = Math.min(...x), N = Math.max(...x), X = Math.max(4, N - L), ee = Kn !== "smooth", U = (ge) => ee ? Math.round(ge / 2) * 2 : Math.round(ge * 10) / 10;
    Di = (ge) => d * 0.84 - (ge - L) / X * d * 0.62;
    const j = Vr(), ke = Kn === "onebit" ? j.paper : "#ffffff", ze = Kn === "onebit" ? j.ink : "rgba(0,0,0,.28)", Te = "M" + p.map((ge) => U(ge[0]) + " " + U(Di(ge[1]))).join(" L"), xe = (ge, ot) => {
      const st = p.find((_e) => _e[1] === ge);
      return '<text class="wxLineLabel" x="' + U(Math.min(r - 14, Math.max(14, st[0]))) + '" y="' + U(Di(ge) + (ot ? 18 : -10)) + '" fill="' + ke + '" stroke="' + ze + '">' + Math.round(ge) + "°</text>";
    };
    a.setAttribute("shape-rendering", ee ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + Te + '" fill="none" stroke="' + ze + '" stroke-width="' + (ee ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Te + '" fill="none" stroke="' + ke + '" stroke-width="2" stroke-linejoin="round"/>' + xe(N, !1) + xe(L, !0) + '<g id="wxCursorMark"></g>', Os(e);
  }
  function Os(e = so()) {
    const a = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const r = hr.clientWidth, d = hr.clientHeight, p = Kn !== "smooth", x = (ke) => p ? Math.round(ke / 2) * 2 : ke, L = x(Gl(e, La) * r), N = Is(e, La).temp, X = Vr(), ee = Kn === "onebit" ? X.paper : "#ffffff", U = Kn === "onebit" ? X.ink : "rgba(0,0,0,.28)", j = Di && Number.isFinite(N) ? x(Di(N)) : null;
    a.innerHTML = '<rect x="' + (L - 2) + '" y="0" width="4" height="' + d + '" fill="' + U + '"/><rect x="' + (L - 1) + '" y="0" width="2" height="' + d + '" fill="' + ee + '"/>' + (j == null ? "" : p ? '<rect x="' + (L - 5) + '" y="' + (j - 5) + '" width="10" height="10" fill="' + ee + '" stroke="' + U + '" stroke-width="2"/>' : '<circle cx="' + L + '" cy="' + j + '" r="6" fill="' + ee + '" stroke="' + U + '" stroke-width="2"/>');
  }
  const Ql = (e) => {
    const a = hr.getBoundingClientRect();
    a.width && (La = $c(so(), (e - a.left) / a.width), Ur());
  };
  _o.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Hs = !0;
      try {
        _o.setPointerCapture(e.pointerId);
      } catch {
      }
      Ql(e.clientX);
    }
  }), _o.addEventListener("pointermove", (e) => {
    Hs && Ql(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => _o.addEventListener(e, () => {
    Hs = !1;
  })), _o.addEventListener("keydown", (e) => {
    const a = so(), r = { ArrowLeft: -Yt, ArrowRight: Yt, ArrowDown: -Yt, ArrowUp: Yt, PageUp: -24 * Yt, PageDown: 24 * Yt }[e.key];
    r ? (e.preventDefault(), La = Math.max(a.start, Math.min(a.end - Yt, Math.round(La / Yt) * Yt + r)), Ur(a)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), La = e.key === "Home" ? a.start : a.end - Yt, Ur(a));
  }), o("wxDialogClose").addEventListener("click", Fs), On.addEventListener("click", (e) => {
    e.target === On && Fs();
  }), On.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Fs());
  }), Yl(), (cd = (ld = window.matchMedia) == null ? void 0 : (dd = ld.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || cd.call(dd, "change", () => {
    ii(), oi(n);
  }), ii();
  const ed = o("tvNav");
  s.fullscreenSupported || (ed.hidden = !0), ed.addEventListener("click", () => s.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ye.workout.classList.contains("active") || Yo.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Xo.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(nt.value) || 1) + Number(e.dataset.roundsStep)));
    String(a) !== nt.value && (nt.value = a, nt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [M, k, S, nt].forEach((e) => e.addEventListener("input", () => {
    const a = at[dt];
    a && (a.total = Number(M.value), a.work = Number(k.value), a.rest = Number(S.value)), O();
  })), Me.addEventListener("click", $), Oe.addEventListener("click", () => b("settings")), o("settingsBack").addEventListener("click", $), Xo.addEventListener("click", () => qe(!wn)), rt(dt), hi(), Uo(), ro(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), dr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    ut.history = [], ut.checkins = [], Go = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Cn(), ai(), Uo(), hi(), ro(), Ja(), At("Stats reset");
  });
  const Ws = o("morningTime"), qs = o("eveningTime"), Vs = o("checkinAutoOpen");
  Ws.value = Fn().morning, qs.value = Fn().evening, Vs.classList.toggle("on", pt().checkinAutoOpen !== !1), [["morningTime", Ws], ["eveningTime", qs]].forEach(([e, a]) => a.addEventListener("change", () => {
    a.value && (sa(e, a.value), Ja());
  })), Vs.addEventListener("click", () => {
    const e = pt().checkinAutoOpen === !1;
    Vs.classList.toggle("on", e), sa("checkinAutoOpen", e);
  }), setTimeout(Ui, 800);
  const td = o("checkinNotify"), Yr = o("checkinNotifyTarget"), nd = o("checkinNotifyStatus"), Qc = nd.textContent;
  function ad() {
    const e = s.notifyServices(), a = e.filter((p) => p.startsWith("mobile_app_")), r = a.length ? a : e, d = (p) => p.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Yr.innerHTML = r.map((p) => '<option value="' + Ue(p) + '">' + Ue(d(p)) + "</option>").join(""), !pt().notifyTarget && r[0] && (pt().notifyTarget = r[0]), Yr.value = pt().notifyTarget || "";
  }
  function Zr() {
    const e = !!pt().notifyOn;
    td.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const a = Fn();
    nd.textContent = e ? "Sends at " + a.morning + " and " + a.evening : Qc;
  }
  async function zs() {
    const e = !!pt().notifyOn;
    try {
      return await s.setReminderAutomation(e ? { target: pt().notifyTarget, times: Fn() } : null), !0;
    } catch {
      return At("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  td.addEventListener("click", async () => {
    const e = !pt().notifyOn;
    if (e && (ad(), !pt().notifyTarget)) {
      At("Install the Companion app on your phone first");
      return;
    }
    pt().notifyOn = e, Zr(), await zs() ? (Cn(), At(e ? "Check-in notifications on" : "Check-in notifications off")) : (pt().notifyOn = !e, Zr());
  }), Yr.addEventListener("change", () => {
    sa("notifyTarget", Yr.value), pt().notifyOn && zs();
  }), [Ws, qs].forEach((e) => e.addEventListener("change", () => {
    Zr(), pt().notifyOn && zs();
  })), ad(), Zr();
  let js = null;
  function eu() {
    js || (js = setTimeout(() => {
      js = null, ro();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, d;
      const a = !sn || sn[Zn.weather] !== e[Zn.weather] || ((r = sn["sun.sun"]) == null ? void 0 : r.state) !== ((d = e["sun.sun"]) == null ? void 0 : d.state);
      sn = e, Rl(e), Bl(e), a && Yl(), Date.now() - Pl > 60 * 60 * 1e3 && Il(), eu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (ut.history = e.history, ai()), Array.isArray(e.history) && ro(), Array.isArray(e.checkins) && (ut.checkins = e.checkins.map(mn), Ja(), hi(), Uo(), ai(), ro()), e.profiles && !$t.classList.contains("open") && !f)) {
        const a = Po(e);
        Object.keys(at).forEach((r) => delete at[r]), Object.assign(at, a.profiles), ut.order = a.order, at[dt] || (dt = ut.order[0]), Pn(), rt(dt);
      }
    },
    suspend() {
      h = !1;
    },
    resume() {
      h || (h = !0, Ln || (Ln = requestAnimationFrame(Co)), oo || (oo = requestAnimationFrame($o)), ii(), cr(n.querySelector(".tab.active"), !1));
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
}, gr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, en = "made_up_", Bi = (n) => {
  var s;
  return (s = String(n).split(".")[1]) == null ? void 0 : s.startsWith(en);
}, Xr = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function xl(n) {
  const s = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((s - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Au(n) {
  const s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let c = +s; c < +n; c += 10 * 60 * 1e3) o += xl(new Date(c)) / 6;
  return o;
}
function fd(n = /* @__PURE__ */ new Date()) {
  const s = [];
  for (let o = 0; o <= 96; o++) {
    const c = +n - (96 - o) * 15 * 60 * 1e3;
    s.push([c, xl(new Date(c))]);
  }
  return s;
}
function Eu({ onChange: n }) {
  const s = {}, o = {}, c = (V, q, Y, F) => {
    s[V] = { entity_id: V, state: Y, attributes: F, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[V] = q;
  }, m = (V, q, Y) => {
    const F = s[V], G = q ?? F.state;
    s[V] = { ...F, state: G, attributes: { ...F.attributes, ...Y }, last_changed: G === F.state ? F.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, h = (V, q, Y, F) => c("binary_sensor." + en + (V ? V + "_" : "") + Xr(q), V, F ? "on" : "off", { friendly_name: q, device_class: Y });
  Object.entries(_u).forEach(([V, q]) => {
    if (q.temperature != null && c("sensor." + en + V + "_temperature", V, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && c("sensor." + en + V + "_humidity", V, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && c("vacuum." + en + "robot", V, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && c("climate." + en + V, V, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [Y, F, G, ne] = q.cover;
      c("cover." + en + V + "_" + Xr(Y), V, G ? "open" : "closed", { friendly_name: Y, device_class: F, current_position: G, ...ne != null ? { current_tilt_position: ne } : {} });
    }
    if (q.humidifier && c("humidifier." + en + V, V, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (c("sensor." + en + V + "_solar_power", V, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + en + V + "_solar_today", V, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && c("valve." + en + V + "_" + Xr(q.valve), V, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && h(V, q.door, "door", q.doorOpen), q.window && h(V, q.window, "window", !1), q.motion && h(V, q.motion, "motion", !1), q.plant) {
      const [Y, F, G, ne, E] = q.plant, W = en + Xr(Y), he = (g, ye, Me, Oe, b) => c("sensor." + W + "_" + g, V, String(Me), { friendly_name: ye, device_class: b, state_class: "measurement", unit_of_measurement: Oe, plant_low: Me < gr[g][0], plant_high: Me > gr[g][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[g] });
      he("moisture", "Moisture", F, "%", "moisture"), he("light", "Light", G, "lx", "illuminance"), he("temperature", "Temperature", ne, "°C", "temperature"), he("fertility", "Fertility", E, "µS/cm", "conductivity");
      const Se = Object.entries({ moisture: F, light: G, temperature: ne, fertility: E }).filter(([g, ye]) => ye < gr[g][0] || ye > gr[g][1]).map(([g, ye]) => g + (ye < gr[g][0] ? " low" : " high"));
      c("plant." + W, V, Se.length ? "problem" : "ok", { friendly_name: Y, moisture: F, brightness: G, temperature: ne, conductivity: E, problem: Se.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + en + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), h(null, "Front door", "door", !1), h(null, "Smoke alarm", "smoke", !1), c("sensor." + en + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, T = {};
  let v = null;
  function B() {
    const V = /* @__PURE__ */ new Date();
    Object.keys(s).forEach((q) => {
      q.endsWith("_solar_power") && (s[q] = { ...s[q], state: xl(V).toFixed(2) }), q.endsWith("_solar_today") && (s[q] = { ...s[q], state: Au(V).toFixed(1) });
    });
  }
  B();
  let ie = 0;
  function te() {
    let V = !1;
    const q = ++ie % 10 === 0, Y = (ne, E, W) => {
      m(ne, E, W), V = !0;
    };
    Object.entries(w).forEach(([ne, E]) => {
      const W = s[ne].attributes.current_position, he = W < E ? Math.min(E, W + 10) : Math.max(E, W - 10);
      he === E && delete w[ne], Y(ne, he === E ? he === 0 ? "closed" : "open" : E > W ? "opening" : "closing", { current_position: he });
    }), Object.entries(T).forEach(([ne, E]) => {
      const W = s[ne].attributes.current_tilt_position, he = W < E ? Math.min(E, W + 25) : Math.max(E, W - 25);
      he === E && delete T[ne], Y(ne, null, { current_tilt_position: he });
    }), Object.keys(s).filter((ne) => ne.startsWith("climate.")).forEach((ne) => {
      const E = s[ne], W = E.attributes, he = W.current_temperature, Se = (E.state === "heat" || E.state === "auto") && he < W.temperature - 0.05, g = (E.state === "cool" || E.state === "auto") && he > W.temperature + 0.05, ye = E.state === "off" ? "off" : Se ? "heating" : g ? "cooling" : "idle", Me = q ? Math.round((he + (Se ? 0.1 : g ? -0.1 : 0)) * 10) / 10 : he;
      (Me !== he || ye !== W.hvac_action) && Y(ne, null, { current_temperature: Me, hvac_action: ye });
    }), Object.keys(s).filter((ne) => ne.startsWith("humidifier.")).forEach((ne) => {
      const E = s[ne], W = E.attributes, he = W.current_humidity, Se = E.state === "on" && he < W.humidity, g = Se && q ? he + 1 : he, ye = E.state !== "on" ? "off" : Se ? "humidifying" : "idle";
      if (g !== he || ye !== W.action) {
        Y(ne, null, { current_humidity: g, action: ye });
        const Me = "sensor." + en + o[ne] + "_humidity";
        s[Me] && Y(Me, String(g));
      }
    });
    const F = s["vacuum." + en + "robot"], G = F.attributes;
    F.state === "cleaning" && q && Y(F.entity_id, null, { battery_level: Math.max(5, G.battery_level - 1) }), F.state === "returning" && Y(F.entity_id, "docked", {}), F.state === "docked" && G.battery_level < 100 && Y(F.entity_id, null, { battery_level: Math.min(100, G.battery_level + 2) }), v && Date.now() - v.at > 5e3 && (Y("alarm_control_panel." + en + "house", "armed_" + v.mode, {}), v = null), V && n();
  }
  const D = setInterval(te, 1e3), R = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function z(V, q, Y) {
    const F = Y == null ? void 0 : Y.entity_id;
    if (!s[F]) return !1;
    const G = s[F], ne = G.attributes, E = (W, he) => m(F, W, he);
    if (V === "climate" && (q === "set_temperature" && E(null, { temperature: Math.max(ne.min_temp, Math.min(ne.max_temp, Y.temperature)) }), q === "set_hvac_mode" && E(Y.hvac_mode, Y.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && E(G.state === "off" ? "heat" : "off", G.state === "off" ? {} : { hvac_action: "off" })), V === "cover") {
      const W = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? Y.position : q === "toggle" ? ne.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete w[F], delete T[F], E(ne.current_position === 0 ? "closed" : "open")), W != null && W !== ne.current_position && (w[F] = W, E(W > ne.current_position ? "opening" : "closing"));
      const he = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? Y.tilt_position : null;
      q === "stop_cover_tilt" && delete T[F], he != null && ne.current_tilt_position != null && he !== ne.current_tilt_position && (T[F] = he);
    }
    if (V === "humidifier" && (q === "set_humidity" && E(null, { humidity: Math.max(ne.min_humidity, Math.min(ne.max_humidity, Y.humidity)) }), q === "set_mode" && E(null, { mode: Y.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const W = q === "turn_on" || q === "toggle" && G.state !== "on";
      E(W ? "on" : "off", { action: W ? "idle" : "off" });
    }
    if (V === "vacuum" && (q === "start" && E("cleaning", { rooms: Y.rooms || ne.rooms }), q === "pause" && E("paused"), q === "return_to_base" && E("returning", { rooms: [] }), q === "locate" && E(null, { located: Date.now() }), q === "set_rooms" && E(null, { rooms: Y.rooms })), V === "valve") {
      const W = q === "open_valve" || q === "toggle" && G.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && E(W ? "open" : "closed");
    }
    if (V === "alarm_control_panel") {
      q === "alarm_disarm" && (v = null, E("disarmed", { changed_by: "Matt" }));
      const W = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      W && (v = { mode: W, at: Date.now() }, E("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function J(V) {
    const q = (V == null ? void 0 : V.states) || {}, Y = (V == null ? void 0 : V.entities) || {}, F = (V == null ? void 0 : V.devices) || {}, G = (k) => {
      var oe;
      const S = Y[k];
      return S && (S.area_id || S.device_id && ((oe = F[S.device_id]) == null ? void 0 : oe.area_id)) || null;
    }, ne = (k) => {
      const S = Y[k];
      return q[k] && q[k].state !== "unavailable" && !(S != null && S.hidden) && !(S != null && S.entity_category);
    }, E = {};
    Object.keys(q).forEach((k) => {
      const S = G(k);
      S && ne(k) && (E[S] || (E[S] = [])).push(k);
    });
    const W = { ...q, ...s }, he = (k) => {
      var S, oe;
      return (oe = (S = W[k]) == null ? void 0 : S.attributes) == null ? void 0 : oe.device_class;
    }, Se = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], g = Object.keys(q).filter((k) => k.startsWith("vacuum.") && ne(k)), ye = Object.values((V == null ? void 0 : V.areas) || {}).filter((k) => !Lu.has(k.area_id)).map((k) => {
      const S = k.area_id, oe = E[S] || [], K = (Le) => oe.filter((it) => it.startsWith(Le + ".")), Q = (Le) => K("sensor").filter((it) => he(it) === Le), ae = (Le) => Object.keys(s).filter((it) => o[it] === S && Le(it)), re = (Le, it) => Le.length ? Le : ae(it), Be = re(Q("temperature"), (Le) => Le.endsWith(S + "_temperature")), nt = re(Q("humidity"), (Le) => Le.endsWith(S + "_humidity")), Pt = Q("power").filter((Le) => /^(W|kW)$/.test(W[Le].attributes.unit_of_measurement || "")), yt = K("binary_sensor").filter((Le) => he(Le) === "moisture"), fa = re(K("plant"), (Le) => Le.startsWith("plant.")).map((Le) => ({ id: Le, readings: ae((it) => it.startsWith("sensor." + Le.split(".")[1] + "_")) })), _a = [...K("binary_sensor").filter((Le) => Se.includes(he(Le))), ...ae((Le) => Le.startsWith("binary_sensor."))];
      return {
        id: S,
        name: k.name,
        icon: k.icon,
        readings: [...Be.slice(0, 1), ...nt.slice(0, 1), ...yt],
        power: Pt.length ? Pt.reduce((Le, it) => Le + Number(W[it].state) * (W[it].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: K("switch"),
        lights: K("light"),
        actions: [...K("light"), ...re(K("climate"), (Le) => Le.startsWith("climate.")), ...re(K("cover"), (Le) => Le.startsWith("cover.")), ...re(K("humidifier"), (Le) => Le.startsWith("humidifier.")), ...re(K("valve"), (Le) => Le.startsWith("valve.")), ...K("media_player"), ...K("vacuum"), ...g.length ? [] : ae((Le) => Le.startsWith("vacuum."))],
        solar: ae((Le) => Le.includes("_solar_")),
        plants: fa,
        openings: _a,
        alerts: [...yt, ..._a].filter((Le) => {
          var it;
          return ((it = W[Le]) == null ? void 0 : it.state) === "on";
        })
      };
    }).filter((k) => k.readings.length || k.plugs.length || k.actions.length || k.solar.length || k.plants.length), Me = Object.keys(q).find((k) => /^sensor\..*(p1_meter_power|grid_power)$/.test(k) && q[k].state !== "unavailable") || null, Oe = (k) => Object.keys(q).filter((S) => S.startsWith(k + ".") && ne(S)), b = Oe("alarm_control_panel"), M = g.length ? g : ["vacuum." + en + "robot"];
    return {
      states: W,
      rooms: ye,
      grid: Me,
      vacuums: M,
      homeVacuums: M.filter((k) => !ye.some((S) => S.actions.includes(k))),
      security: {
        alarms: b.length ? b : ["alarm_control_panel." + en + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(s).filter((k) => k.startsWith("binary_sensor.")), "sensor." + en + "doorbell"]
      }
    };
  }
  return { model: J, call: z, stop() {
    clearInterval(D), clearInterval(R);
  } };
}
const co = (n) => n < 0 ? 0 : n > 1 ? 1 : n, pl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((c) => c + c).join("") : s;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Du = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), gd = {}, ha = (n, s, o) => {
  const c = n + s + o;
  return gd[c] || (gd[c] = Du(pl(n).map((m, h) => m + (pl(s)[h] - m) * o)));
}, vd = {}, ss = (n) => vd[n] || (vd[n] = pl(n));
function Ru(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [ha(s.clear[0], s.cloudy[0], 0.12), ha(s.clear[1], s.cloudy[1], 0.12)], s.storm = [ha(s.rain[0], "#000000", 0.22), ha(s.rain[1], "#000000", 0.22)], s;
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
], lo = (n, s) => (Nu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, nc = 1, ac = 2, oc = 3, ic = 4, Hi = 5, ds = 6, ml = 7, rc = 8, bd = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), Bu = (n, s, o) => {
  let c = !1;
  for (let m = 0, h = n.length - 1; m < n.length; h = m++) {
    const w = n[m], T = n[h];
    w[1] > o != T[1] > o && s < (T[0] - w[0]) * (o - w[1]) / (T[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function Pu(n, s, o, c, { oneBit: m, ink: h, paper: w, snowInk: T }) {
  const v = new Uint8ClampedArray(o * c * 4), B = ss(h), ie = ss(w);
  for (let te = 0; te < c; te++) for (let D = 0; D < o; D++) {
    const R = te * o + D, z = s[R];
    if (n[R] == null) continue;
    let J = ss(n[R]);
    if (m) {
      let V;
      z === ic || z === rc ? V = !0 : z === Hi ? V = T : z === ml || z === ds ? V = !1 : V = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= lo(D, te), (z === nc || z === ac || z === oc || z === ds) && (D > 0 && s[R - 1] !== z || D < o - 1 && s[R + 1] !== z || te > 0 && s[R - o] !== z || te < c - 1 && s[R + o] !== z) && (V = !0), J = V ? B : ie;
    }
    v[R * 4] = J[0], v[R * 4 + 1] = J[1], v[R * 4 + 2] = J[2], v[R * 4 + 3] = 255;
  }
  return { w: o, h: c, data: v };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (n) => ps(n, !1).split("/")[0], Ys = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zu = [".##", "##.", ".#.", "#.."];
function sc(n, { width: s, height: o, colors: c, wave: m = 0.38, soft: h = 6, glow: w = 0.6, columns: T = 6 }) {
  const v = { ...po, dawn: "#e5a77e", ...c }, B = Ru(v), ie = s, te = o, D = ie / T, R = D / 2, z = Math.PI * 2, J = n.length ? n : [{ cond: "cloudy", night: !1 }], V = [...Array(T * 2)].map((G, ne) => {
    const E = J[Math.min(ne, J.length - 1)], W = Hu(E.cond), he = ne % 2 === 1;
    return { cond: E.cond, k: W, night: he, sky: B[W][he ? 1 : 0], cover: Iu[W] };
  }), q = (G) => te * (0.5 - m * Math.cos(z * (G / D - 0.25)));
  return { C: v, S: V, W: ie, H: te, cw: D, sw: R, TAU: z, yb: q, side: (G, ne, E) => {
    const W = (G ? q(ne) - E : E - q(ne)) / Math.max(3, h * 1.4) + 0.5;
    return W <= 0 ? 0 : W >= 1 ? 1 : W;
  }, glowAt: (G) => {
    const ne = ((G / D - 0.25) % 1 + 1) % 1, E = Math.max(0, Math.min(T - 1, Math.round(G / D - 0.25))), W = Math.max(0, Math.min(T - 1, Math.round(G / D - 0.75))), he = 1 - (V[2 * E].cover + V[2 * W + 1].cover) / 2, Se = Math.sin(Math.PI * Math.min(1, Math.max(0, q(G) / te)));
    return { c: ne < 0.5 ? v.dusk : v.dawn, a: w * (0.2 + 0.8 * he) * Se * Se };
  }, soft: h, tw: D * 0.3, sy: te / 90 };
}
function lc(n, { clock: s = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: h, side: w, C: T, TAU: v, sy: B } = n, ie = s, te = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((D, R) => {
    const z = Ys(c * 977 + R * 131 + 7), J = (R + 0.5) * h, V = D.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[D.k] : 0;
    for (let q = 0; q < V; q++) {
      const Y = J + (z() - 0.5) * h * 1.6, F = (6 + z() * 76) * B, G = z() < 0.35, ne = 1.8 + z() * 1.6, E = w(!0, Y, F) * (G ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(v * ie / 2600 + q * 1.7 + R) : 1);
      E >= 0.03 && te.stars.push({ x: Y, y: F, big: G, size: ne, o: E });
    }
    if (!D.night && (D.k === "clear" || D.k === "partly")) {
      const q = J + (z() - 0.5) * h * 0.3, Y = Math.min(15, h * 0.29);
      te.suns.push({ x: q, y: 32 * B, rad: Y, halo: Y * 2.8 * (o ? 1 + 0.07 * Math.sin(v * ie / 3600 + R) : 1) });
    }
    if (D.night && (D.k === "clear" || D.k === "partly")) {
      const q = Math.min(0.78, h * 0.55 / 34), Y = J - 23 * q + (z() - 0.5) * h * 0.2;
      te.moons.push({ x: Y + 23 * q, y: (4 + (o ? 0.8 * Math.sin(v * ie / 5200 + R) : 0)) * B + 23 * q, d: 46 * q });
    }
  }), m.forEach((D, R) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[D.k];
    if (!z) return;
    const J = Ys(c * 577 + R * 71 + 3), V = (R + 0.5) * h, q = D.k === "rain" || D.k === "storm" || D.night ? T.cloudNight : T.cloudDay, Y = D.night ? 0.82 : D.k === "storm" ? 0.75 : 1;
    for (let F = 0; F < z; F++) {
      const G = h / 46 * (D.k === "partly" ? 0.85 : 0.75 + J() * 0.55), ne = V + (D.k === "partly" ? h * 0.12 : (J() - 0.5) * h * 1.05), E = (D.k === "partly" ? 40 : 6 + J() * 26) * B, W = o ? 2.5 * Math.sin(v * ie / 9e3 + R * 1.3 + F * 2.1) : 0, he = o ? 0.9 * Math.sin(v * ie / 6100 + R + F) : 0;
      te.clouds.push({ x: ne - 23 * G + W, y: E - 15.33 * G + he, w: 46 * G, h: 30.66 * G, fill: q, o: Y * (z > 1 && F === 0 ? 0.85 : 1) });
    }
  }), m.forEach((D, R) => {
    const z = Ys(c * 313 + R * 29 + 11), J = (R + 0.5) * h, V = D.cond === "pouring" ? 16 : D.cond === "rainy" || D.cond === "hail" ? 9 : D.cond === "lightning-rainy" ? 12 : D.cond === "snowy-rainy" ? 5 : 0;
    for (let Y = 0; Y < V; Y++) {
      let F = J + (z() - 0.5) * h * 1.05, G = 44 + z() * 36, ne = 1;
      if (o) {
        const W = ((G - 44 + ie * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (W - (G - 44)), G = 44 + W, ne = Math.min(1, W / 6, (36 - W) / 6);
      }
      G *= B;
      const E = w(D.night, F, G) * ne;
      E >= 0.05 && te.drops.push({ x: F, y: G, o: E });
    }
    const q = D.cond === "snowy" ? 11 : D.cond === "snowy-rainy" ? 6 : 0;
    for (let Y = 0; Y < q; Y++) {
      let F = J + (z() - 0.5) * h * 1.05, G = 40 + z() * 44, ne = 1;
      if (o) {
        const W = ((G - 40 + ie * 9e-3) % 44 + 44) % 44;
        G = 40 + W, F += 1.6 * Math.sin(v * ie / 2800 + Y * 1.9 + R), ne = Math.min(1, W / 6, (44 - W) / 6);
      }
      G *= B;
      const E = w(D.night, F, G) * ne;
      E >= 0.05 && te.flakes.push({ x: F, y: G, o: E });
    }
    if (D.k === "fog") {
      const Y = D.night ? "#c8ccd6" : "#ffffff", F = D.night ? 0.28 : 0.62, G = o ? 4 * Math.sin(v * ie / 8e3 + R) : 0;
      for (let ne = 0; ne < 4; ne++) te.fogs.push({ x: J - h * 0.75 + ne % 2 * h * 0.18 + (ne % 2 ? G : -G), y: (30 + ne * 13) * B, w: h * 1.3, c: Y, a: F });
    }
    if (D.k === "storm") {
      const Y = (ie / 3400 + R * 0.37) % 1;
      te.bolts.push({ x: J + (z() - 0.5) * h * 0.3 - 5, y: 36 * B, o: o && !(Y < 0.05 || Y > 0.09 && Y < 0.12) ? 0.8 : 1 });
    }
  }), te;
}
function ju(n, s, o, c, m, h, w, T) {
  const { S: v, C: B, cw: ie, yb: te, glowAt: D, soft: R, tw: z, sy: J } = n, V = new Array(o * c), q = new Uint8Array(o * c), Y = new Uint8Array(o * c), F = (b, M, k, S, oe) => {
    k == null || b < 0 || M < 0 || b >= o || M >= c || (S >= 1 || S > lo(b + 5, M + 3)) && (V[M * o + b] = k, q[M * o + b] = oe);
  }, G = (b, M, k, S) => {
    for (let oe = Math.max(0, Math.floor(M - k) - 1); oe <= Math.min(c - 1, M + k + 1); oe++) for (let K = Math.max(0, Math.floor(b - k) - 1); K <= Math.min(o - 1, b + k + 1); K++) S(K, oe, K + 0.5 - b, oe + 0.5 - M);
  }, ne = (b, M, k) => {
    for (let oe = 0; oe < b.length - 1; oe++) {
      const K = (oe + M) * ie;
      if (k < K - z / 2) return [b[oe], b[oe], 0];
      if (k <= K + z / 2) return [b[oe], b[oe + 1], (k - K + z / 2) / z];
    }
    const S = b[b.length - 1];
    return [S, S, 0];
  }, E = v.filter((b) => !b.night).map((b) => b.sky), W = v.filter((b) => b.night).map((b) => b.sky), he = R / h, Se = 16 * J / h;
  for (let b = 0; b < o; b++) {
    const M = (b + 0.5) * m, k = te(M) / h, S = ne(E, 0.75, M), oe = ne(W, 1.25, M), K = D(M);
    for (let Q = 0; Q < c; Q++) {
      const ae = lo(b, Q), re = Q + 0.5 - k, Be = (he > 0.01 ? co(0.5 + re / he) : re > 0 ? 1 : 0) > ae;
      let nt = Be ? S[2] > ae ? S[1] : S[0] : oe[2] > ae ? oe[1] : oe[0];
      (Be ? co(((Q + 0.5) / c - 0.45) / 0.55) * 0.7 : co(1 - (Q + 0.5) / (c * 0.55)) * 0.7) > lo(b + 2, Q + 5) && (nt = Be ? ha(nt, "#ffffff", 0.18) : ha(nt, "#000000", 0.25)), Be && re >= 0 && re < Se && K.a * 1.3 * (1 - re / Se) > lo(b + 6, Q + 1) && (nt = K.c), V[Q * o + b] = nt, Y[Q * o + b] = Be ? 0 : 1;
    }
  }
  const g = ha(B.sun, "#ffffff", 0.55), ye = ha(B.moon, "#ffffff", 0.6);
  s.stars.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    if (M < 0 || k < 0 || M >= o || k >= c || !Y[k * o + M] || b.o < 0.15) return;
    const S = b.o > 0.45 ? B.star : ha(B.star, V[k * o + M], 0.5), oe = b.big && b.o > 0.6 ? Math.floor(b.size / m) : 0;
    F(M, k, S, 1, ml);
    for (let K = 1; K <= oe; K++) [[M - K, k], [M + K, k], [M, k - K], [M, k + K]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < o && Q[1] < c && Y[Q[1] * o + Q[0]] && F(Q[0], Q[1], S, 1, ml);
    });
  }), s.suns.forEach((b) => {
    const M = Math.max(1.5, b.rad / m), k = b.x / m, S = b.y / h, oe = b.halo / m * 0.85;
    if (G(k, S, oe, (K, Q, ae, re) => {
      const Be = Math.sqrt(ae * ae + re * re);
      Be > M && Be < oe && !Y[Q * o + K] && F(K, Q, g, 0.3 * (1 - (Be - M) / (oe - M)), 0);
    }), T) {
      const K = Math.floor(w / 500) % 2, Q = Math.max(1, M * 0.3);
      for (let ae = 0; ae < 8; ae++) if (ae % 2 === K) for (let re = M + 1.2; re < M + 1.2 + Q; re += 0.7) F(Math.floor(k + Math.cos(ae * Math.PI / 4) * re), Math.floor(S + Math.sin(ae * Math.PI / 4) * re), B.sun, 1, rc);
    }
    G(k, S, M, (K, Q, ae, re) => {
      ae * ae + re * re <= M * M && F(K, Q, co(((re / M + 1) / 2 - 0.6) / 0.4) > lo(K, Q) ? B.sunEdge : B.sun, 1, nc);
    });
  }), s.moons.forEach((b) => {
    const M = Math.max(1.5, b.d * 0.37 / m), k = b.x / m, S = b.y / h, oe = k + 0.547 * M, K = S - 0.503 * M, Q = 0.82 * M;
    G(k, S, M, (ae, re, Be, nt) => {
      if (Be * Be + nt * nt > M * M) return;
      const Pt = ae + 0.5 - oe, yt = re + 0.5 - K;
      Pt * Pt + yt * yt > Q * Q && F(ae, re, co((nt + M) / (2 * M) * 1.1 - 0.1) > lo(ae, re) ? B.moon : ye, 1, ac);
    });
  }), s.clouds.forEach((b) => {
    const M = Math.max(3, b.w / m), k = M * 0.6665, S = b.x / m, oe = b.y / h, K = ha(b.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(oe) - 1); Q <= Math.min(c - 1, oe + k + 1); Q++) for (let ae = Math.max(0, Math.floor(S) - 1); ae <= Math.min(o - 1, S + M + 1); ae++) {
      const re = (ae + 0.5 - S) / M, Be = (Q + 0.5 - oe) / M;
      bd(re, Be) && F(ae, Q, !bd(re, Be + 1 / M) || co((Be - 0.42) / 0.25) * 0.8 > lo(ae, Q) ? K : b.fill, b.o, oc);
    }
  }), s.fogs.forEach((b) => {
    const M = Math.floor(b.y / h), k = Math.max(M, Math.floor((b.y + 6 * J) / h) - 1), S = Math.floor(b.x / m), oe = Math.floor((b.x + b.w) / m);
    for (let K = M; K <= k; K++) for (let Q = S; Q <= oe; Q++) {
      const ae = (Q - S) / Math.max(1, oe - S);
      F(Q, K, b.c, b.a * (ae < 0.25 ? ae / 0.25 : ae > 0.75 ? (1 - ae) / 0.25 : 1), 0);
    }
  });
  const Me = Math.max(2, Math.round(9 / h));
  s.drops.forEach((b) => {
    const M = b.x / m, k = Math.floor(b.y / h);
    for (let S = 0; S < Me; S++) F(Math.floor(M - 0.208 * S * h / m), k + S, B.rain, b.o, ic);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((b) => {
    const M = Math.floor(b.x / m), k = Math.floor(b.y / h);
    F(M, k, B.snow, b.o, Hi);
    for (let S = 1; S <= Oe; S++)
      F(M - S, k, B.snow, b.o, Hi), F(M + S, k, B.snow, b.o, Hi), F(M, k - S, B.snow, b.o, Hi), F(M, k + S, B.snow, b.o, Hi);
  }), s.bolts.forEach((b) => {
    if (m <= 3.5)
      for (let M = Math.floor(b.y / h); M <= (b.y + 24) / h; M++) for (let k = Math.floor(b.x / m); k <= (b.x + 11) / m; k++)
        Bu(Vu, (k + 0.5) * m - b.x, (M + 0.5) * h - b.y) && F(k, M, B.sun, 1, ds);
    else {
      const M = Math.round(b.x / m), k = Math.round(b.y / h);
      zu.forEach((S, oe) => S.split("").forEach((K, Q) => {
        K === "#" && F(M + Q, k + oe, B.sun, 1, ds);
      }));
    }
  }), { col: V, ids: q };
}
function Gu(n, s) {
  const o = s.px, c = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), h = s.width / c, w = s.height / m, T = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (R) => {
    const z = sc(R, s);
    return ju(z, lc(z, { clock: T, ambient: s.ambient, seed: s.seed }), c, m, h, w, T, s.ambient);
  }, B = v(n), ie = s.reveal == null ? 1 : co(s.reveal);
  let te = B.col, D = B.ids;
  if (ie < 1) {
    const R = s.prev ? v(s.prev) : null, z = ie * (c + 12);
    te = new Array(c * m), D = new Uint8Array(c * m);
    for (let J = 0; J < c * m; J++) {
      const V = J % c, q = J / c | 0;
      (s.reduce ? ie : co((z - V) / 12)) > lo(V, q) ? (te[J] = B.col[J], D[J] = B.ids[J]) : R ? (te[J] = R.col[J], D[J] = R.ids[J]) : (te[J] = null, D[J] = 255);
    }
  }
  return Pu(te, D, c, m, { oneBit: s.oneBit, ink: s.ink || "#26221e", paper: s.paper || "#fbf9f6", snowInk: !1 });
}
function Uu(n, s, o) {
  const c = o.width, m = o.height, h = o.reveal == null ? 1 : co(o.reveal), w = (D, R) => {
    const z = sc(R, o);
    Yu(D, z, lc(z, o));
  };
  if (n.clearRect(0, 0, c, m), h >= 1) {
    w(n, s);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = h, w(n, s), n.restore();
    return;
  }
  const T = n.canvas, v = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (v.width !== T.width || v.height !== T.height) && (v.width = T.width, v.height = T.height);
  const B = v.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, c, m), w(B, s);
  const ie = h * (c + 64) - 64, te = B.createLinearGradient(ie, 0, ie + 64, 0);
  te.addColorStop(0, "rgba(0,0,0,1)"), te.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = te, B.fillRect(0, 0, c, m), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Yu(n, s, o) {
  const { W: c, H: m, S: h, C: w, cw: T, yb: v, glowAt: B, soft: ie, tw: te, sy: D } = s, R = (g, ye) => {
    const Me = ss(g);
    return "rgba(" + Me[0] + "," + Me[1] + "," + Me[2] + "," + Math.max(0, Math.min(1, ye)).toFixed(3) + ")";
  }, z = (g, ye) => {
    const Me = n.createLinearGradient(0, 0, c, 0);
    Me.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const b = (Oe + ye) * T, M = (b - te / 2) / c, k = (b + te / 2) / c;
      M > 0 && M < 1 && Me.addColorStop(M, g[Oe]), k > 0 && k < 1 && Me.addColorStop(k, g[Oe + 1]);
    }
    return Me.addColorStop(1, g[g.length - 1]), Me;
  }, J = Math.max(24, Math.ceil(c / 4)), V = (g, ye) => {
    n.beginPath();
    for (let Me = 0; Me <= J; Me++) {
      const Oe = c * Me / J, b = g == null ? 0 : v(Oe) + g;
      Me ? n.lineTo(Oe, b) : n.moveTo(Oe, b);
    }
    for (let Me = J; Me >= 0; Me--) {
      const Oe = c * Me / J;
      n.lineTo(Oe, v(Oe) + ye);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = z(h.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, c, m);
  const q = n.createLinearGradient(0, 0, c, 0);
  for (let g = 0; g <= 64; g++) {
    const ye = B(c * g / 64);
    q.addColorStop(g / 64, R(ye.c, Math.min(1, ye.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, V(g * 2 * D, (g + 1) * 2 * D);
  n.fillStyle = z(h.filter((g) => g.night).map((g) => g.sky), 1.25);
  const Y = Math.max(0.5, ie), F = 6;
  n.globalAlpha = 1, V(null, -Y);
  for (let g = 0; g < F; g++)
    n.globalAlpha = 1 - (g + 0.5) / F, V(-Y + 2 * Y * g / F, -Y + 2 * Y * (g + 1) / F);
  n.globalAlpha = 1;
  const G = new Path2D(Wu), ne = new Path2D(Ou), E = new Path2D(Fu), W = new Path2D(qu);
  n.fillStyle = w.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(G), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const he = ha(w.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ye = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ye.addColorStop(0, R(he, 0.42)), ye.addColorStop(0.7, R(he, 0)), n.fillStyle = ye, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Me = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Me.addColorStop(0.6, w.sun), Me.addColorStop(1, w.sunEdge), n.fillStyle = Me, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = ha(w.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ye = n.createLinearGradient(0, 6, 0, 40);
    ye.addColorStop(0, Se), ye.addColorStop(1, w.moon), n.fillStyle = ye, n.fill(ne), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(E), n.restore();
  }), o.fogs.forEach((g) => {
    const ye = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ye.addColorStop(0, R(g.c, 0)), ye.addColorStop(0.25, R(g.c, g.a)), ye.addColorStop(0.75, R(g.c, g.a)), ye.addColorStop(1, R(g.c, 0)), n.fillStyle = ye, n.fillRect(g.x, g.y, g.w, 6 * D);
  }), n.fillStyle = w.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
const Zu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Pi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Qr = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Zs = (n, s) => '<path class="' + s + '" d="' + n + '"/>', Ku = (n, s) => ' style="animation-delay:-' + Math.round(n * 137 % s) + 'ms"', ca = (n, s, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Ku(n, 2400) + ' d="M' + n + " " + (s - o) + "L" + (n + m) + " " + (s - m) + "L" + (n + o) + " " + s + "L" + (n + m) + " " + (s + m) + "L" + n + " " + (s + o) + "L" + (n - m) + " " + (s + m) + "L" + (n - o) + " " + s + "L" + (n - m) + " " + (s - m) + 'Z"/>';
}, wd = ([n, s, o], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + s + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $u = (n, s) => s ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ju = (n) => (n ? ["29.35", "43.04", "56.74"].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Xu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + s + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Qu(n, s, o, c) {
  return n === "clear" ? s ? wd(o ? Qr.l : Qr.s, c) + (o ? ca(70, 20, 5.83, 1) + ca(78.33, 41.67, 3.75, 0.8) + ca(60, 71.67, 3.33, 0.6) : ca(42, 12, 3.5, 1) + ca(47, 25, 2.25, 0.8) + ca(36, 43, 2, 0.6)) : $u(c, o) : n === "partly" ? (s ? wd(o ? Qr.lp : Qr.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Zs(o ? Pi.lp : Pi.sp, s ? "wbCloudLight" : "wbBright") + (s ? o ? ca(73.33, 16.67, 4.17, 0.9) : ca(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? Zs(o ? Pi.lc : Pi.s, s ? "wbCloudLight" : "wbBright") + (s ? o ? ca(15, 15, 3.75, 0.8) + ca(76.67, 13.33, 2.92, 0.6) : ca(9, 9, 2.25, 0.8) + ca(46, 8, 1.75, 0.6) : "") : Zs(o ? Pi.lr : Pi.s, "wbCloudLight") + (n === "rain" ? Ju(o) : Xu(o));
}
function ep(n, s, o, c) {
  let m = Zu(n);
  const h = m === "night" || !!o;
  m === "night" && (m = "clear");
  const w = s ? 90 : 54;
  return { k: m, night: h, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Qu(m, h, s, c) + "</svg>" };
}
const Oa = 6e4, Ha = 36e5, si = 864e5, xr = 1440, tp = 6, np = 10 * Oa, es = 3, Ks = 20, ap = 3, op = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), ip = 30 * Oa, rp = 7, sp = 3, xd = 1, lp = Oa, dp = 15 * Oa, Wn = {
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
}, tt = {
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
}, up = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], pp = Object.keys(tt.phases), ts = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, dc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ns = 100, yd = "µg/m³", hp = "weather_alerts.air_quality_pollen", kd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bp = { daily: 1, hourly: 2 }, Fe = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), ua = (n, s) => n.replace(/\{(\w+)\}/g, (o, c) => s[c] ?? ""), Fi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Mn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Md = /* @__PURE__ */ new Map(), Cd = /* @__PURE__ */ new Map(), $s = /* @__PURE__ */ new WeakMap(), xp = (n) => {
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
function pn(n, s, o) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (s == null ? void 0 : s.number_format) === "none", h = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : xp(s), T = JSON.stringify([w, h]);
  let v = Md.get(T);
  if (!v) {
    try {
      v = new Intl.NumberFormat(w, h);
    } catch {
      v = new Intl.NumberFormat(void 0, h);
    }
    Md.set(T, v);
  }
  return v.format(c);
}
const yl = (n) => {
  var s;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.language) || (n == null ? void 0 : n.language) || void 0;
};
function yp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if ($s.has(n)) return $s.get(n);
  const s = n.time_format, o = s === "language" || s === "system" || !s ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(s === "language" ? n.language : void 0).includes("10") : s === "12";
  return $s.set(n, o), o;
}
const cc = (n) => {
  var s, o;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function uc(n, s) {
  const o = JSON.stringify([n, s]);
  let c = Cd.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, s);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...s, timeZone: void 0 });
    }
    Cd.set(o, c);
  }
  return c;
}
const Ii = (n, s) => uc(yl(s), { hour: "numeric", minute: "2-digit", hourCycle: yp(s == null ? void 0 : s.locale) ? "h12" : "h23", timeZone: cc(s) }).format(n), Sd = (n, s) => uc(yl(s), { weekday: "short", timeZone: cc(s) }).format(n), kp = (n, s) => n.toLocaleDateString(yl(s), { weekday: "narrow" }), En = (n, s) => Mn(s) ? pn(Math.round(Number(s)), n.locale) + "°" : "–", Oi = (n) => {
  const s = new Date(n);
  return s.setHours(0, 0, 0, 0), s;
}, vr = (n, s) => n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth() && n.getDate() === s.getDate(), qn = Math.PI / 180, Mp = 2440588, Cp = 2451545, cs = qn * 23.4397, Sp = 149598e3, Tp = -0.833 * qn, Lp = 0.133 * qn, Td = 5 * Oa, pc = (n) => n.getTime() / si - 0.5 + Mp - Cp, mc = (n, s) => Math.atan2(Math.sin(n) * Math.cos(cs) - Math.tan(s) * Math.sin(cs), Math.cos(n)), hc = (n, s) => Math.asin(Math.sin(s) * Math.cos(cs) + Math.cos(s) * Math.sin(cs) * Math.sin(n)), _p = (n, s) => qn * (280.16 + 360.9856235 * n) - s, Ap = (n, s, o) => Math.asin(Math.sin(s) * Math.sin(o) + Math.cos(s) * Math.cos(o) * Math.cos(n));
function fc(n) {
  const s = qn * (357.5291 + 0.98560028 * n), o = qn * (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)), c = s + o + qn * 102.9372 + Math.PI;
  return { ra: mc(c, 0), dec: hc(c, 0), dist: Sp };
}
function gc(n) {
  const s = qn * (218.316 + 13.176396 * n), o = qn * (134.963 + 13.064993 * n), c = qn * (93.272 + 13.22935 * n), m = s + qn * 6.289 * Math.sin(o), h = qn * 5.128 * Math.sin(c);
  return { ra: mc(m, h), dec: hc(m, h), dist: 385001 - 20905 * Math.cos(o) };
}
const vc = (n, s, o, c) => {
  const m = pc(s), h = n(m);
  return Ap(_p(m, qn * -c) - h.ra, qn * o, h.dec);
}, kl = (n, s, o) => vc(fc, n, s, o), Ep = (n, s, o) => vc(gc, n, s, o);
function bc(n, s, o, c) {
  const m = {};
  let h = o.getTime(), w = n(o) - s;
  for (let T = h + Td; T <= c.getTime(); T += Td) {
    const v = n(new Date(T)) - s;
    if (w < 0 != v < 0) {
      const B = new Date(h + (T - h) * w / (w - v));
      v > 0 ? m.rise ?? (m.rise = B) : m.set ?? (m.set = B);
    }
    h = T, w = v;
  }
  return m;
}
const wc = (n) => {
  const s = Oi(n);
  return [s, new Date(s.getTime() + si)];
}, Dp = (n, s, o) => bc((c) => kl(c, s, o), Tp, ...wc(n)), Rp = (n, s, o) => bc((c) => Ep(c, s, o), Lp, ...wc(n));
function Np(n) {
  const s = pc(n), o = fc(s), c = gc(s), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), h = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(h)) / 2, phase: 0.5 + 0.5 * h * (w < 0 ? -1 : 1) / Math.PI };
}
const Bp = (n) => {
  const s = n * 28;
  return s < 0.5 || s > 27.5 ? "new_moon" : s < 6.5 ? "waxing_crescent" : s < 7.5 ? "first_quarter" : s < 13.5 ? "waxing_gibbous" : s < 14.5 ? "full_moon" : s < 20.5 ? "waning_gibbous" : s < 21.5 ? "last_quarter" : "waning_crescent";
}, us = (n) => {
  const s = n == null ? void 0 : n.config;
  return s && Mn(s.latitude) && Mn(s.longitude) ? { lat: Number(s.latitude), lon: Number(s.longitude) } : null;
};
function Ld(n, s) {
  var B, ie, te;
  const o = us(n), c = o ? Dp(s, o.lat, o.lon) : {}, m = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], h = Oi(s).getTime(), w = (D) => {
    const R = D ? new Date(D) : null;
    return R && Number.isFinite(R.getTime()) && Oi(R).getTime() === h ? R : null;
  }, T = w((ie = m == null ? void 0 : m.attributes) == null ? void 0 : ie.next_rising), v = w((te = m == null ? void 0 : m.attributes) == null ? void 0 : te.next_setting);
  return T && (c.rise = T), v && (c.set = v), c;
}
function Pp(n) {
  var c;
  const s = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((s == null ? void 0 : s.state) === "below_horizon" || (s == null ? void 0 : s.state) === "above_horizon") return s.state === "below_horizon";
  const o = us(n);
  return o ? kl(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const yr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", ms = (n, s) => {
  var c;
  const o = (c = n.entities) == null ? void 0 : c[s];
  return !o || !o.hidden && !o.entity_category;
}, pa = (n, s, o) => {
  var c, m;
  for (const h of s) {
    const w = (c = n.states) == null ? void 0 : c[h];
    if (!yr(w)) continue;
    const T = (m = w.attributes) == null ? void 0 : m[o];
    if (T != null && T !== "") return { stateObj: w, value: T };
  }
}, Ip = (n, s) => s.map((o) => {
  var c;
  return (c = n.states) == null ? void 0 : c[o];
}).find(yr), Hp = (n, s, o) => s.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return yr(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & bp[o]);
});
function wr(n, s, o) {
  var h, w, T, v;
  const c = ((w = (h = n.config) == null ? void 0 : h.unit_system) == null ? void 0 : w.length) || "", m = (s == null ? void 0 : s.attributes) || {};
  switch (o) {
    case "precipitation":
      return m.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return m.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return m.wind_speed_unit || c + "/h";
    default:
      return m.temperature_unit || ((v = (T = n.config) == null ? void 0 : T.unit_system) == null ? void 0 : v.temperature) || "";
  }
}
function hl(n, s, o, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...h] = n.formatEntityAttributeValueToParts(s, o, c).map((w) => w.value);
      return { number: m, unit: h.join("").trim() };
    }
  } catch {
  }
  return { number: pn(c, n.locale), unit: wr(n, s, o) };
}
function Fp(n, s, o, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(s, o, c);
  } catch {
  }
  const m = hl(n, s, o, c);
  return (m.number + " " + m.unit).trim();
}
function as(n, s) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(s);
  } catch {
  }
  const o = (c = s.attributes) == null ? void 0 : c.unit_of_measurement;
  return cp[s.state] || (o && Mn(s.state) ? pn(s.state, n.locale) + " " + o : s.state);
}
function _d(n, s) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(s, { type: "entity" });
  } catch {
  }
  return ((o = s.attributes) == null ? void 0 : o.friendly_name) || s.entity_id;
}
const Op = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Wp = (n) => dc.find(([, s]) => n <= s)[0];
function qp(n, s) {
  if (s === "Beaufort") return Math.round(n);
  const o = s ? fp[s] : void 0;
  if (o === void 0) return;
  const c = gp.findIndex((m) => n * o < m);
  return c === -1 ? 12 : c;
}
const Ad = (n, s) => {
  const o = s ? vp[s] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Ed = (n) => Object.keys(n.states || {}).find((s) => {
  var o, c;
  return s.startsWith("sensor.") && ((c = (o = n.entities) == null ? void 0 : o[s]) == null ? void 0 : c.platform) === "moon";
}), Js = (n) => Object.values(n.states || {}).filter((s) => {
  var o, c;
  return s.entity_id.startsWith("sensor.") && ((o = s.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = s.attributes) == null ? void 0 : c.state_class) ?? "") && ms(n, s.entity_id);
}).map((s) => s.entity_id).sort()[0];
function Vp(n) {
  var o;
  const s = {};
  for (const [c, m] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      s[c] = m.categories;
      continue;
    }
    for (const [h, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) s[h] = w == null ? void 0 : w.categories;
  }
  return s;
}
const xc = (n, s, o) => {
  var m, h, w;
  const c = (h = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : h.platform;
  return !!c && !!((w = s[c]) != null && w.includes(hp));
};
function zp(n, s) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && kd.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && ms(n, c.entity_id) && xc(n, s, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), kd.map((c) => o.get(c)).filter(Boolean);
}
const jp = (n, s) => Object.values(n.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && ms(n, o.entity_id) && xc(n, s, o.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Dd(n, s, o) {
  const c = Math.max(s - n, 1e-6), m = o[o.length - 1], h = o.find((B) => c / B <= 4) ?? m * Math.ceil(c / (4 * m)), w = Math.floor(n / h) * h;
  let T = Math.ceil(s / h) * h;
  T === w && (T = w + h);
  const v = [];
  for (let B = w; B <= T + h / 1e3; B += h) v.push(B);
  return { min: w, max: T, ticks: v };
}
const br = (n, s, o) => {
  const c = (w) => [1, 3, 5].map((T) => parseInt(w.slice(T, T + 2), 16)), m = c(n), h = c(s);
  return "rgb(" + m.map((w, T) => Math.round(w + (h[T] - w) * o)).join(", ") + ")";
}, Gp = (n, s, o, c) => {
  const m = o * Math.abs(1 - 2 * c), h = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (s - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (s + o) + " A " + m + " " + o + " 0 0 " + h + " " + n + " " + (s - o) + " Z";
}, Do = ({ icon: n, name: s, sub: o, visual: c, double: m, backdrop: h, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (h ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (h ? '<div class="wbBackdrop" aria-hidden="true">' + h + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Fi(n) + '</div><div class="wbText"><span class="wbName">' + Fe(s) + "</span>" + (o ? '<span class="wbSub">' + Fe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Xs = (n, s) => '<div class="wbValue"><span class="wbNum">' + Fe(n) + "</span>" + (s ? '<span class="wbUnitV">' + Fe(s) + "</span>" : "") + "</div>";
function Up(n) {
  const s = n.max - n.min || 1, o = (T) => 100 - (Math.min(n.max, Math.max(n.min, T)) - n.min) / s * 100, c = (T) => T / xr * 100 + "%", m = (T) => T.map((v) => v.t + "," + o(v.v)).join(" "), h = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((T) => '<span class="wbDcSunMark" style="left:' + c(T.t) + '">' + Fi(T.rise ? Wn.sunsetUp : Wn.sunsetDown) + Fe(T.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((T) => '<span style="top:' + o(T) + '%">' + Fe(n.format(T)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + xr + ' 100" preserveAspectRatio="none">' + n.night.map(([T, v]) => '<rect class="wbDcNight" x="' + T + '" y="0" width="' + (v - T) + '" height="100"></rect>').join("") + n.ticks.map((T) => '<line class="wbDcGrid" x1="0" x2="' + xr + '" y1="' + o(T) + '" y2="' + o(T) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((T) => '<line class="wbDcSunLine" x1="' + T.t + '" x2="' + T.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (h.length > 1 ? '<polygon class="wbDcArea" points="' + h[0].t + ",100 " + m(h) + " " + h[h.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(h) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((T) => T.v > 0).map((T) => '<i class="wbDcBar" style="left:' + c(T.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(T.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + Fe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Fe(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((T) => '<span class="' + (T.minor ? "wbMinor" : "") + '" style="left:' + c(T.t) + '">' + Fe(T.label) + "</span>").join("") + "</div></div>", w;
}
function Yp(n, s) {
  const w = n.map((V) => V.value), T = Math.min(...w), v = Math.max(...w), B = v - T || 1, ie = (V) => V / (n.length - 1) * 300, te = (V) => 18 + (1 - (V - T) / B) * 84, D = n.map((V, q) => ie(q) + "," + te(V.value)).join(" "), R = w.indexOf(v), z = w.indexOf(T), J = (V) => V === 0 ? "start" : V === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + D + ' 300,102"></polygon><polyline class="wbLine" points="' + D + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ie(R) + '" y="' + (te(v) - 6) + '" text-anchor="' + J(R) + '">' + Fe(s(v)) + '</text><text x="' + ie(z) + '" y="' + (te(T) + 14) + '" text-anchor="' + J(z) + '">' + Fe(s(T)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(n[n.length - 1].label) + "</text></svg>";
}
function Zp(n, s) {
  const h = n.map((te) => te.value).concat([]), w = Math.min(...h) - 2, T = Math.max(...h) + 1, v = T - w || 1, B = 300 / n.length, ie = (te) => (1 - (te - w) / v) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((te, D) => '<rect class="wbBar' + (te.now ? " wbNowBar" : "") + '" x="' + (D * B + B * 0.2) + '" y="' + ie(te.value) + '" width="' + B * 0.6 + '" height="' + (104 - ie(te.value)) + '" rx="6"></rect><text x="' + (D * B + B / 2) + '" y="120" text-anchor="middle">' + Fe(te.label) + "</text>").join("") + "</svg>";
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
], $p = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Rd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Jp = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Xp = 0;
function Nd(n, { getHass: s, entityId: o, style: c = "bitmap", motion: m = !0, cards: h, onOpen: w } = {}) {
  var Xn, Ga;
  const T = "wb" + ++Xp + "-", v = document.createElement("div");
  v.className = "wb";
  const B = document.createElement("div");
  B.className = "wbBento", v.appendChild(B), n.replaceChildren(v);
  const ie = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((C) => !h || h.includes(C)), te = { current: "wide", hourly: "wide", compared_to_average: "double" }, D = {};
  ie.forEach((C) => {
    const A = document.createElement("div");
    A.className = "wbItem", A.dataset.card = C, A.dataset.size = te[C] || "tile", A.hidden = !0, B.appendChild(A), D[C] = { el: A, html: null };
  });
  let R = !1, z = null, J = 0, V = -1, q = !1, Y = null;
  const F = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, G = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ne = /* @__PURE__ */ new Date(), E = /* @__PURE__ */ new Date(), W = null;
  const he = {}, Se = {}, g = (C) => {
    var A;
    return ((A = Se[C]) == null ? void 0 : A.forecast) ?? [];
  }, ye = (C, A) => {
    var H;
    return Se[A] ? (H = C.states) == null ? void 0 : H[Se[A].entityId] : void 0;
  };
  function Me(C) {
    const A = he[C];
    A && (A.unsub.then((H) => {
      typeof H == "function" && H();
    }).catch(() => {
    }), delete he[C]), Se[C] && delete Se[C];
  }
  function Oe(C, A, H) {
    var le;
    if (typeof ((le = C.connection) == null ? void 0 : le.subscribeMessage) != "function") return;
    const O = { entityId: H };
    try {
      O.unsub = Promise.resolve(C.connection.subscribeMessage((ve) => {
        R || he[A] !== O || (ve != null && ve.forecast ? Se[A] = { entityId: H, forecast: ve.forecast } : delete Se[A], Ae());
      }, { type: "weather/subscribe_forecast", forecast_type: A, entity_id: H }));
    } catch (ve) {
      O.unsub = Promise.reject(ve);
    }
    O.unsub.catch(() => {
      he[A] === O && delete he[A];
    }), he[A] = O;
  }
  function b(C, A) {
    var H;
    for (const O of ["daily", "hourly"]) {
      const le = Hp(C, A, O);
      ((H = he[O]) == null ? void 0 : H.entityId) !== (le == null ? void 0 : le.entity_id) && (Me(O), le && Oe(C, O, le.entity_id));
    }
  }
  const M = (C, A, H, O = !1) => C.callWS({
    type: "history/history_during_period",
    start_time: H.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [A],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function k(C, A) {
    var ce, we, se;
    const H = pa(C, A, "pressure");
    if (!H) return;
    const O = H.stateObj.entity_id, le = await M(C, O, new Date(Date.now() - 3 * Ha)), ve = (se = (we = (ce = le == null ? void 0 : le[O]) == null ? void 0 : ce.find((Ee) => {
      var Ge;
      return typeof ((Ge = Ee.a) == null ? void 0 : Ge.pressure) == "number";
    })) == null ? void 0 : we.a) == null ? void 0 : se.pressure;
    G.pressureHistory = typeof ve == "number" ? { entityId: O, value: ve } : void 0;
  }
  async function S(C, A) {
    var we;
    const H = pa(C, A, "temperature");
    if (!H) return;
    const O = H.stateObj.entity_id, le = Oi(/* @__PURE__ */ new Date()), ve = await M(C, O, new Date(le.getTime() - rp * si)), ce = /* @__PURE__ */ new Map();
    for (const se of (ve == null ? void 0 : ve[O]) ?? []) {
      const Ee = (we = se.a) == null ? void 0 : we.temperature, Ge = new Date((se.lc ?? se.lu) * 1e3);
      if (typeof Ee != "number" || Ge >= le) continue;
      const Ke = Ge.toDateString();
      ce.set(Ke, Math.max(ce.get(Ke) ?? -1 / 0, Ee));
    }
    G.temperatureHistory = { entityId: O, dailyHighs: [...ce.values()], days: [...ce.entries()].map(([se, Ee]) => ({ date: new Date(se), high: Ee })) };
  }
  async function oe(C) {
    const A = Js(C);
    if (!A) return;
    const H = await C.callWS({ type: "recorder/statistic_during_period", statistic_id: A, rolling_window: { duration: { hours: 24 } } });
    G.rain = { entityId: A, change: (H == null ? void 0 : H.change) ?? void 0 };
  }
  function K() {
    const C = s == null ? void 0 : s();
    if (!C || R || typeof C.callWS != "function") return;
    const A = Be(C);
    G.lastFetch = Date.now(), [k(C, A), S(C, A), oe(C)].forEach((H) => H.then(() => Ae(), () => {
    }));
  }
  async function Q() {
    const C = s == null ? void 0 : s();
    if (!C) return;
    const A = pa(C, Be(C), "temperature");
    if (!A) return;
    const H = A.stateObj.entity_id, O = Oi(/* @__PURE__ */ new Date());
    try {
      const le = await M(C, H, O), ve = (ce) => ((le == null ? void 0 : le[H]) ?? []).map((we) => {
        var se;
        return { time: we.lu * 1e3, value: (se = we.a) == null ? void 0 : se[ce] };
      }).filter((we) => typeof we.value == "number");
      G.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: ve("temperature"), humidity: ve("humidity") }, Ae();
    } catch {
    }
  }
  async function ae(C) {
    const A = s == null ? void 0 : s();
    if (A)
      try {
        const H = await M(A, C, new Date(Date.now() - 24 * Ha), !0), O = ((H == null ? void 0 : H[C]) ?? []).filter((ve) => Mn(ve.s)), le = Math.max(1, Math.ceil(O.length / 48));
        G.aqHistory = { entityId: C, points: O.filter((ve, ce) => ce % le === 0).map((ve) => ({ label: Ii(new Date(ve.lu * 1e3), A), value: Number(ve.s) })) }, Ae();
      } catch {
      }
  }
  function re(C) {
    G.categories === void 0 && (G.categories = null, Promise.resolve().then(() => C.callWS({ type: "integration/descriptions" })).then((A) => {
      G.categories = Vp(A);
    }, () => {
      G.categories = {};
    }).then(() => Ae()));
  }
  function Be(C) {
    var H;
    const A = Object.keys(C.states || {}).filter((O) => O.startsWith("weather.") && ms(C, O)).sort();
    return o && ((H = C.states) != null && H[o]) ? [o, ...A.filter((O) => O !== o)] : A;
  }
  const nt = (C) => G.categories ? { air: zp(C, G.categories), pollen: jp(C, G.categories) } : { air: [], pollen: [] };
  function Pt(C, A, H, O) {
    if (c === "smooth") {
      const le = ep(C, A === 90, H, T + "g-" + O);
      return '<span class="wbWx wbS' + A + " wb" + le.k[0].toUpperCase() + le.k.slice(1) + (le.night ? " wbNight" : "") + '" aria-hidden="true">' + le.svg + "</span>";
    }
    return '<span class="wbWx wbS' + A + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(ps(C, H)) + '" data-size="' + A + '"></canvas></span>';
  }
  const yt = () => g("daily").filter((C) => C.templow != null).slice(0, tp);
  function fa(C, A) {
    const H = new Date(A.datetime), O = /* @__PURE__ */ new Date();
    return vr(H, O) ? tt.today : vr(H, new Date(O.getTime() + si)) ? tt.tomorrow : Sd(H, C);
  }
  const _a = (C, A, H) => H === 0 ? fa(C, A) : Sd(new Date(A.datetime), C);
  function Le(C, A) {
    var Ge, Ke, We, De;
    const H = Ip(C, A);
    if (!H) return "";
    const O = yt(), le = F.openDay !== void 0 ? O[F.openDay] : void 0, ve = pa(C, A, "temperature"), ce = O[0], we = ce && vr(new Date(ce.datetime), /* @__PURE__ */ new Date()), se = ((Ke = (Ge = C.config) == null ? void 0 : Ge.unit_system) == null ? void 0 : Ke.temperature) || ((We = H.attributes) == null ? void 0 : We.temperature_unit) || "";
    let Ee = '<div class="wbCard wbWeather' + (le ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (le ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(tt.openPage) + '">' : '<div class="wbCurrent">') + Pt(H.state, 90, Pp(C), "now") + '<div class="wbTempBlock">' + (ve && Mn(ve.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(pn(Math.round(Number(ve.value)), C.locale)) + '</span><span class="wbUnit">' + Fe(se) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((De = C.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(as(C, H)) + "</div>" + (we && ce.templow != null ? '<div class="wbRange">' + Fe(ua(tt.range, { high: En(C, ce.temperature), low: En(C, ce.templow) })) + "</div>" : "") + "</div></div>";
    return O.length && (Ee += '<div class="wbColumns" role="list">' + O.map((Ie, Re) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Re + '" data-wb-focus="col-' + Re + '"><span class="wbDay">' + Fe(_a(C, Ie, Re)) + "</span>" + Pt(Ie.condition ?? "cloudy", 60, !1, "col" + Re) + '<span class="wbTemps"><span class="wbHi">' + Fe(En(C, Ie.temperature)) + '</span><span class="wbLo">' + Fe(En(C, Ie.templow)) + "</span></span></button>").join("") + "</div>", Ee += '<div class="wbHalves" role="list">' + O.map((Ie, Re) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Re + '" data-wb-focus="half-' + Re + '">' + Pt(Ie.condition ?? "cloudy", 40, !1, "half" + Re) + '<span class="wbText"><span class="wbName">' + Fe(fa(C, Ie)) + '</span><span class="wbSub">' + Fe(ua(tt.highLow, { high: En(C, Ie.temperature), low: En(C, Ie.templow) })) + "</span></span></button>").join("") + "</div>"), Ee + "</div>" + (le ? qa(C, A, le) : "") + "</div>";
  }
  function it(C) {
    const A = C.getTime(), H = Date.now() - Ha;
    return g("hourly").filter((O) => {
      const le = new Date(O.datetime).getTime();
      return le >= A && le < A + si && le > H;
    });
  }
  function tn(C) {
    if (!C.length) return ["temperature"];
    const A = ["temperature"];
    return C.some((H) => H.precipitation != null || H.precipitation_probability != null) && A.push("precipitation"), C.some((H) => H.humidity != null) && A.push("humidity"), A;
  }
  function qa(C, A, H) {
    const O = Oi(new Date(H.datetime)), le = it(O), ve = tn(le), ce = ve.includes(F.dayMode) ? F.dayMode : "temperature", we = (se) => se === "humidity" ? tt.humidity : tt.modes[se];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Pt(H.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(fa(C, H)) + '</span><span class="wbSub">' + Fe(ua(tt.highLow, { high: En(C, H.temperature), low: En(C, H.templow) })) + '</span></div><button class="wbBack" title="' + Fe(tt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Fi(Wn.back) + "</button></div>" + (ve.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + ve.map((se) => '<button aria-pressed="' + (se === ce) + '" data-wb="day-mode" data-mode="' + se + '" data-wb-focus="day-mode-' + se + '">' + Fe(we(se)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Up(Vt(C, A, O, le, ce)) + "</div></div>";
  }
  function Vt(C, A, H, O, le) {
    var zn;
    const ve = H.getTime(), ce = Date.now(), we = vr(H, /* @__PURE__ */ new Date()), se = (ft) => (ft - ve) / Oa, Ee = (ft) => Ii(new Date(ft), C), Ge = (ft) => new Date(ft.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((ft) => ({ t: ft * 60, label: Ee(ve + ft * Ha), minor: ft % 6 !== 0 })), { rise: We, set: De } = Ld(C, H), Ie = [], Re = [];
    We && (Ie.push({ t: se(We.getTime()), label: Ee(We.getTime()), rise: !0 }), Re.push([0, se(We.getTime())])), De && (Ie.push({ t: se(De.getTime()), label: Ee(De.getTime()), rise: !1 }), Re.push([se(De.getTime()), xr]));
    const et = us(C);
    !We && !De && et && kl(new Date(ve + si / 2), et.lat, et.lon) < 0 && Re.push([0, xr]);
    const mt = we ? se(ce) : void 0, _t = { hours: Ke, sun: Ie, night: Re };
    if (!O.length && !we) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: tt.noHourly };
    if (le === "precipitation") {
      const ft = O.some((dn) => dn.precipitation_probability != null), fn = O.map((dn) => ({ t: se(Ge(dn)), v: Number((ft ? dn.precipitation_probability : dn.precipitation) ?? 0) })), Tn = wr(C, ye(C, "hourly"), "precipitation"), xn = Math.max(0, ...fn.map((dn) => dn.v)), Qn = ft ? 100 : Dd(0, Math.max(xn, 1), [0.5, 1, 2, 5, 10]).max, go = (dn) => ft ? pn(dn, C.locale) + "%" : pn(dn, C.locale, { maximumFractionDigits: 1 }) + " " + Tn, ga = fn.find((dn) => dn.v === xn);
      return {
        ..._t,
        kind: "bars",
        points: fn,
        min: 0,
        max: Qn,
        ticks: [0, Qn / 2, Qn],
        format: go,
        now: mt !== void 0 ? { t: mt, v: 0 } : void 0,
        peak: ga && xn > 0 ? { t: ga.t + 30, v: ga.v, label: go(ga.v) } : void 0,
        note: xn > 0 ? void 0 : tt.noRain
      };
    }
    const bt = le === "humidity" ? "humidity" : "temperature", Gt = O.filter((ft) => ft[bt] != null && (!we || Ge(ft) >= ce)).map((ft) => ({ t: se(Ge(ft)), v: Number(ft[bt]) }));
    let nn, ln = [];
    if (mt !== void 0) {
      const ft = pa(C, A, bt);
      ft && Mn(ft.value) && (nn = { t: mt, v: Number(ft.value) }, Gt.unshift(nn)), ln = (((zn = G.todayHistory) == null ? void 0 : zn.day) === H.toDateString() ? G.todayHistory[bt] : []).filter((Tn) => Tn.time <= ce).map((Tn) => ({ t: Math.max(0, se(Tn.time)), v: Tn.value })), nn && ln.length && ln.push(nn);
    }
    const Kt = [...ln, ...Gt];
    if (!Kt.length) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: tt.noHourly };
    const mo = Kt.map((ft) => ft.v), Vn = Dd(Math.min(...mo), Math.max(...mo), bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    bt === "humidity" && (Vn.min = Math.max(0, Vn.min), Vn.max = Math.min(100, Vn.max), Vn.ticks = Vn.ticks.filter((ft) => ft >= 0 && ft <= 100));
    const ho = bt === "humidity" ? (ft) => pn(ft, C.locale) + "%" : (ft) => En(C, ft), fo = bt === "temperature" ? Kt.reduce((ft, fn) => fn.v > ft.v ? fn : ft) : void 0;
    return { ..._t, kind: "line", points: Gt, past: ln, ...Vn, format: ho, now: nn, peak: fo ? { ...fo, label: ho(fo.v) } : void 0 };
  }
  function bn(C) {
    const A = ["temperature"];
    return C.some((H) => H.precipitation_probability != null || H.precipitation != null) && A.push("precipitation"), C.some((H) => H.wind_speed != null) && A.push("wind"), A;
  }
  function ut() {
    const C = /* @__PURE__ */ new Date();
    return C.setHours(6, 0, 0, 0), C.getTime() > Date.now() && C.setDate(C.getDate() - 1), C;
  }
  function at(C, A) {
    var le, ve;
    const H = g("daily"), O = [];
    for (let ce = 0; ce < es; ce++) for (const we of [!1, !0]) {
      const se = C.getTime() + (ce * 24 + (we ? 12 : 0)) * Ha, Ee = se + 12 * Ha, Ge = {};
      A.forEach((We) => {
        const De = new Date(We.datetime).getTime();
        We.condition && De >= se && De < Ee && (Ge[We.condition] = (Ge[We.condition] ?? 0) + (op.has(We.condition) ? 2 : 1));
      });
      let Ke = (le = Object.entries(Ge).sort((We, De) => De[1] - We[1])[0]) == null ? void 0 : le[0];
      if (!Ke) {
        const We = new Date(se).toDateString();
        Ke = ((ve = H.find((De) => new Date(De.datetime).toDateString() === We)) == null ? void 0 : ve.condition) ?? "cloudy";
      }
      O.push({ cond: we && Ke === "sunny" ? "clear-night" : Ke, night: we });
    }
    return O;
  }
  function dt(C, A, H) {
    const O = ye(C, "hourly"), le = A.precipitation_probability != null ? pn(A.precipitation_probability, C.locale) + "%" : "", ve = A.precipitation ? pn(A.precipitation, C.locale) + " " + wr(C, O, "precipitation") : "";
    switch (H) {
      case "precipitation":
        return le ? [le, ve] : [ve || "–", ""];
      case "wind":
        return A.wind_speed != null ? [pn(Math.round(A.wind_speed), C.locale), wr(C, O, "wind_speed")] : ["–", ""];
      default:
        return [En(C, A.temperature), (A.precipitation_probability ?? 0) >= 20 ? le : ""];
    }
  }
  function Po(C) {
    W = null;
    const A = g("hourly"), H = Math.floor(Date.now() / Oa) * Oa, O = A.filter((De) => new Date(De.datetime).getTime() > H - Ha);
    if (!O.length) return "";
    const le = bn(O), ve = le.includes(F.hourlyMode) ? F.hourlyMode : "temperature", ce = ut(), we = ce.getTime() + es * 24 * Ha, se = (H - ce.getTime()) / Ha * Ks, Ee = es * 24 * Ks, Ge = (De) => (De - H) / Ha * Ks, Ke = [{ x: 0, label: tt.now, entry: O[0] }, ...O.filter((De) => {
      const Ie = new Date(De.datetime);
      return Ge(Ie.getTime()) >= 48 && Ie.getTime() < we && Ie.getHours() % ap === 0;
    }).map((De) => {
      const Ie = new Date(De.datetime);
      return { x: Ge(Ie.getTime()), label: Ii(Ie, C), entry: De };
    })], We = (De, Ie, Re) => '<span class="wbMark' + (Ie === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Re + "</span>";
    return W = { segs: at(ce, A), seed: ce.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(tt.nextHours) + "</h2></div>" + (le.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + le.map((De) => '<button aria-pressed="' + (De === ve) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + Fe(tt.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Ee - se) + 'px"><div class="wbRow wbTimes">' + Ke.map((De, Ie) => We(De, Ie, Fe(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -se + "px;width:" + Ee + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((De, Ie) => {
      if (!De.entry) return "";
      const [Re, et] = dt(C, De.entry, ve);
      return We(De, Ie, '<span class="wbPrimaryV">' + Fe(Re) + '</span><span class="wbSecondary">' + Fe(et) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Va(C) {
    const A = ne, { rise: H, set: O } = Ld(C, A), le = H && O ? Math.round((O.getTime() - H.getTime()) / Oa) : 0, ve = Math.floor(le / 60), ce = le % 60, we = H && O ? (A.getTime() - H.getTime()) / (O.getTime() - H.getTime()) : -1, se = we >= 0 && we <= 1, Ee = Math.PI * (1 - Math.min(1, Math.max(0, we))), Ge = 100 + 74 * Math.cos(Ee), Ke = 100 - 74 * Math.sin(Ee), We = se ? Math.sin(Math.PI * we) : 0, De = se ? br("#2e0a0d", "#43180a", We) : "#0e0507", Ie = se ? br("#7a1d12", "#8f400f", We) : "#1c0709", Re = br("#f60c08", "#ff8f00", We), et = br("#fd9b07", "#ffd84a", We), mt = se ? br("#fd9b07", "#ffd84a", We) : "#6b3a2a", _t = (Gt) => Gt ? Ii(Gt, C) : "–", bt = H && O ? new Date((H.getTime() + O.getTime()) / 2) : null;
    return Do({
      icon: Wn.sunny,
      name: tt.sun,
      sub: le ? ua(tt.daylightShort, { hours: ve, minutes: ce }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + Ie + ");--wb-sun-line:" + mt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + T + 'sun-glow"><stop offset="0" stop-color="' + Re + '"></stop><stop offset="0.45" stop-color="' + Re + '"></stop><stop offset="1" stop-color="' + et + '"></stop></radialGradient><clipPath id="' + T + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (se ? '<circle cx="' + Ge + '" cy="' + Ke + '" r="14" fill="url(#' + T + 'sun-glow)" clip-path="url(#' + T + 'above-horizon)"></circle>' : "") + (bt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(_t(bt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(_t(H)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(_t(O)) + "</text></svg></div>"
    });
  }
  function mn(C, A, H) {
    const O = (ce) => T + "moon-" + ce, le = C > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Gp(61, 61, 57.9, C) + '"' + (A ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", ve = (ce, we, se, Ee, Ge, Ke) => '<filter id="' + O(ce) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + we + '" numOctaves="' + se + '" seed="' + Ee + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((We) => "<feFunc" + We + ' type="linear" slope="' + Ge + '" intercept="' + Ke + '"></feFunc' + We + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + ve("mottle", "0.045", 4, 3, 1.8, -0.4) + ve("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (H ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Kp.map(([ce, we, se, Ee, Ge, Ke]) => '<ellipse cx="' + ce + '" cy="' + we + '" rx="' + se + '" ry="' + Ee + '" fill-opacity="' + Ke + '" transform="rotate(' + Ge + " " + ce + " " + we + ')"></ellipse>').join("") + "</g>" + $p.map(([ce, we, se]) => '<circle class="wbCrater" cx="' + ce + '" cy="' + we + '" r="' + se + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + Jp.map(([ce, we]) => '<line x1="54.4" y1="95" x2="' + ce + '" y2="' + we + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Rd.map(([ce, we, se]) => '<circle cx="' + ce + '" cy="' + we + '" r="' + se * 2 + '"></circle>').join("") + "</g>" + Rd.map(([ce, we, se]) => '<circle class="wbBrightCenter" cx="' + ce + '" cy="' + we + '" r="' + se + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + le + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Cn(C) {
    const A = E, H = us(C), O = (H == null ? void 0 : H.lat) ?? 0, le = Np(A), ve = Ed(C), ce = ve ? C.states[ve] : void 0, we = yr(ce) && pp.includes(ce.state) ? ce.state : Bp(le.phase), { rise: se, set: Ee } = H ? Rp(A, H.lat, H.lon) : {}, Ge = le.phase > 0.5 != O < 0, Ke = pn(Math.round(le.fraction * 100), C.locale) + "%", We = se ?? Ee, De = We ? Ii(We, C) : void 0;
    return Do({
      icon: Wn.night,
      name: tt.moon,
      sub: tt.phases[we],
      visual: '<div class="wbMoonBox">' + mn(le.fraction, Ge, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? Fe(ua(se ? tt.moonriseAt : tt.moonsetAt, { time: De })) : "") + "</span><span>" + Fe(ua(tt.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function pt(C, A) {
    var Ie;
    const H = pa(C, A, "wind_speed");
    if (!H || !Mn(H.value)) return "";
    const O = pa(C, A, "wind_gust_speed"), le = pa(C, A, "wind_bearing"), ve = le && Mn(le.value) ? Number(le.value) : void 0, ce = qp(Number(H.value), (Ie = H.stateObj.attributes) == null ? void 0 : Ie.wind_speed_unit), we = hl(C, H.stateObj, "wind_speed", H.value), se = ve !== void 0 ? tt.cardinal[up[((ve + 11.25) / 22.5 | 0) % 16]] : void 0, Ee = O ? Fp(C, O.stateObj, "wind_gust_speed", O.value) : void 0, Ge = [se ? ua(tt.windFrom, { direction: se }) : void 0, ce !== void 0 ? ce + " " + tt.beaufort : void 0].filter(Boolean).join(" · ") || Ee, Ke = (Re, et) => {
      const mt = (Re - 90) * Math.PI / 180;
      return [100 + et * Math.cos(mt), 100 + et * Math.sin(mt)];
    }, We = Array.from({ length: 36 }, (Re, et) => et * 10).map((Re) => {
      const et = Re % 90 === 0, [mt, _t] = Ke(Re, 97), [bt, Gt] = Ke(Re, et ? 83 : 89);
      return '<line class="wbTick' + (et ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + _t + '" x2="' + bt + '" y2="' + Gt + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Re, et]) => {
      const [mt, _t] = Ke(et, 64);
      return '<text class="wbLetter' + (Re === "n" ? " wbNorth" : "") + '" x="' + mt + '" y="' + _t + '">' + Fe(tt.cardinal[Re]) + "</text>";
    }).join("");
    return Do({ icon: Wn.windy, name: tt.wind, sub: Ge, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + We + De + (ve !== void 0 ? '<path class="wbMarker" transform="rotate(' + ve + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(we.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(we.unit) + "</text></svg>" });
  }
  function rt(C, A) {
    const H = pa(C, A, "uv_index");
    if (!H || !Mn(H.value)) return "";
    const O = Number(H.value), le = tt.uvLevel[Op(O)], ve = /* @__PURE__ */ new Date();
    ve.setHours(23, 59, 59, 999);
    const ce = g("hourly").filter((Re) => Re.uv_index != null && new Date(Re.datetime) > /* @__PURE__ */ new Date() && new Date(Re.datetime) <= ve).reduce((Re, et) => !Re || et.uv_index > Re.uv ? { uv: et.uv_index, time: new Date(et.datetime) } : Re, void 0), we = 48, se = 100, Ee = 130, Ge = (Re) => -we + Math.min(Re, 11) / 11 * 2 * we, Ke = (Re, et) => {
      const mt = Re * Math.PI / 180;
      return [se + et * Math.sin(mt), Ee - et * Math.cos(mt)];
    }, We = (Re, et, mt) => {
      const [_t, bt] = Ke(Ge(Re), mt), [Gt, nn] = Ke(Ge(et), mt);
      return "M " + _t + " " + bt + " A " + mt + " " + mt + " 0 0 1 " + Gt + " " + nn;
    }, Ie = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, ts.low], [3, 6, ts.moderate], [6, 8, ts.high], [8, 11, ts.very_high]].map(([Re, et, mt]) => '<path class="wbVuZone" d="' + We(Re, et, 96) + '" style="stroke:' + mt + '"></path>').join("") + Array.from({ length: 21 }, (Re, et) => ({ angle: -we + et * (2 * we / 20), major: et % 2 === 0 })).map(({ angle: Re, major: et }) => {
      const [mt, _t] = Ke(Re, 102), [bt, Gt] = Ke(Re, et ? 114 : 108);
      return '<line class="wbVuTick' + (et ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + _t + '" x2="' + bt + '" y2="' + Gt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Ge(O) + 'deg"><line x1="' + se + '" y1="' + Ee + '" x2="' + se + '" y2="' + (Ee - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(pn(Math.round(O), C.locale)) + "</text></svg>";
    return Do({
      icon: Wn.sunnyAlert,
      name: tt.metrics.uv_index,
      sub: ce && ce.uv > O ? ua(tt.uvPeak, { level: le, uv_index: pn(Math.round(ce.uv), C.locale), time: Ii(ce.time, C) }) : le,
      visual: Ie
    });
  }
  function Pe(C) {
    const A = g("daily")[0], H = G.temperatureHistory;
    if (!A || new Date(A.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Mn(A.temperature) || !H || H.dailyHighs.length < sp) return "";
    const O = Number(A.temperature), le = H.dailyHighs.reduce((bt, Gt) => bt + Gt, 0) / H.dailyHighs.length, ve = Math.round(O - le) || 0, ce = ve > 0 ? "above" : ve < 0 ? "below" : "same", we = [...H.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], se = 220, Ee = 158, Ge = 22, Ke = 20, We = we.map((bt) => bt.high).concat(le), De = Math.min(...We) - 3, Ie = Math.max(...We) + 1, Re = (bt) => Ge + (1 - (bt - De) / (Ie - De)) * (Ee - Ge - Ke), et = se / we.length, mt = Math.min(18, et * 0.6), _t = '<svg class="wbCompareBars" viewBox="0 0 ' + se + " " + Ee + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + se + '" y1="' + Re(le) + '" y2="' + Re(le) + '"></line>' + we.map((bt, Gt) => {
      const nn = Gt * et + et / 2, ln = Re(bt.high), Kt = bt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Kt + '" x="' + (nn - mt / 2) + '" y="' + ln + '" width="' + mt + '" height="' + (Ee - Ke - ln) + '" rx="5"></rect><text class="wbAvgValue' + Kt + '" x="' + nn + '" y="' + (ln - 6) + '">' + Fe(En(C, bt.high)) + '</text><text class="wbAvgDay' + Kt + '" x="' + nn + '" y="' + (Ee - 4) + '">' + Fe(kp(bt.date, C)) + "</text>";
    }).join("") + "</svg>";
    return Do({
      icon: Wn.chartLine,
      name: tt.metrics.compared_to_average,
      double: !0,
      sub: ua(tt.highsLastDays, { days: H.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (ve > 0 ? "+" : "") + Fe(En(C, ve)) + '</div><div class="wbCompareWords">' + Fe(tt.average[ce]) + '</div><div class="wbCompareTemps">' + Fe(ua(tt.todayVsAverage, { today: En(C, O), average: En(C, le) })) + "</div></div>" + _t + "</div>"
    });
  }
  function Ot(C, A) {
    const H = pa(C, A, "humidity");
    if (!H || !Mn(H.value)) return "";
    const O = pa(C, A, "dew_point"), le = Math.max(0, Math.min(100, Number(H.value)));
    return Do({
      icon: Wn.waterPercent,
      name: tt.metrics.humidity,
      sub: O && Mn(O.value) ? ua(tt.dewPoint, { dew_point: En(C, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + le + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Xs(pn(Math.round(Number(H.value)), C.locale), "%") + "</div>"
    });
  }
  function Ct(C, A) {
    var Ee, Ge;
    const H = pa(C, A, "pressure");
    if (!H || !Mn(H.value)) return "";
    const O = Number(H.value), le = (Ee = H.stateObj.attributes) == null ? void 0 : Ee.pressure_unit, ve = Ad(O, le), ce = ((Ge = G.pressureHistory) == null ? void 0 : Ge.entityId) === H.stateObj.entity_id ? Ad(G.pressureHistory.value, le) : void 0;
    let we;
    if (ve !== void 0 && ce !== void 0) {
      const Ke = ve - ce;
      we = Ke >= xd ? "rising" : Ke <= -xd ? "falling" : "steady";
    }
    const se = hl(C, H.stateObj, "pressure", Math.round(O));
    return Do({
      icon: Wn.gauge,
      name: tt.metrics.pressure,
      sub: we ? tt.pressure[we] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Xs(se.number) + '<span class="wbTapeUnit">' + Fe(se.unit) + "</span></div>" + (ve !== void 0 ? ht(C, ve) : "") + "</div>"
    });
  }
  function ht(C, A) {
    const le = Math.floor(A) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (ve, ce) => le + ce).map((ve) => {
      const ce = 100 - (ve - A) * 9;
      if (ce < 22 || ce > 178) return "";
      const we = ve % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ce - 100) / 100) + '"><line class="wbTapeTick" x1="' + (we ? 2 : 8) + '" x2="26" y1="' + ce + '" y2="' + ce + '"></line>' + (we ? '<text class="wbTapeLabel" x="33" y="' + ce + '">' + Fe(pn(ve, C.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(tt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(tt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Bn(C) {
    var se, Ee;
    const A = Js(C), H = A ? C.states[A] : void 0;
    if (!H || ((se = G.rain) == null ? void 0 : se.entityId) !== A || !Mn(G.rain.change)) return "";
    const O = ((Ee = H.attributes) == null ? void 0 : Ee.unit_of_measurement) ?? "", le = ye(C, "hourly"), ve = Date.now() + si, ce = g("hourly").filter((Ge) => Ge.precipitation != null && new Date(Ge.datetime).getTime() <= ve), we = ce.reduce((Ge, Ke) => Ge + Number(Ke.precipitation), 0);
    return Do({
      icon: Wn.rainy,
      name: tt.metrics.precipitation,
      sub: le && ce.length ? ua(tt.rainExpected, { amount: pn(we, C.locale, { maximumFractionDigits: 1 }) + " " + wr(C, le, "precipitation") }) : tt.rainLast24h,
      visual: Xs(pn(G.rain.change, C.locale, { maximumFractionDigits: 1 }), O) + (ce.length > 1 ? Zp(ce.map((Ge) => ({ label: "", value: Number(Ge.precipitation) }))) : "")
    });
  }
  function Ue(C) {
    G.categories === void 0 && re(C);
    const A = nt(C), H = (se) => se.map((Ee) => C.states[Ee]).filter(yr), O = H(A.air), le = H(A.pollen);
    if (!O.length && !le.length) return "";
    const ve = [...O, ...le], ce = (se) => le.includes(se) ? Wn.flower : Wn.airFilter, we = ve.find((se) => se.entity_id === F.aq);
    return we ? qi(C, we, ce(we)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(tt.airQuality) + '</h2></div><div class="wbAqTiles">' + ve.map((se) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(se.entity_id) + '"><span class="wbChip">' + Fi(ce(se)) + '</span><span class="wbText"><span class="wbName">' + Fe(_d(C, se)) + '</span><span class="wbSub">' + Fe(as(C, se)) + "</span></span></button>").join("") + "</div></div>";
  }
  function qi(C, A, H) {
    var Ge, Ke, We;
    const O = ((Ge = A.attributes) == null ? void 0 : Ge.unit_of_measurement) ?? "", le = ((Ke = A.attributes) == null ? void 0 : Ke.device_class) === "pm25" && O === yd && Mn(A.state), ve = Number(A.state), ce = le ? Wp(ve) : void 0, we = ((We = G.aqHistory) == null ? void 0 : We.entityId) === A.entity_id ? G.aqHistory.points : void 0, se = (De) => Math.min(100, Math.max(0, De / ns * 100));
    let Ee;
    if (we && we.length > 1) Ee = Yp(we, (De) => (pn(De, C.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (ce) {
      let De = 0;
      const Ie = dc.map(([Re, et]) => {
        const mt = se(Math.min(et, ns)), _t = mp[Re] + " " + De + "% " + mt + "%";
        return De = mt, _t;
      });
      Ee = '<div class="wbScale" role="meter" aria-label="' + Fe(tt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ns + '" aria-valuenow="' + ve + '" style="background:linear-gradient(to right, ' + Ie.join(", ") + ')"><i style="left:' + se(ve) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ns + " " + yd + "</span></div>";
    } else Ee = '<span class="wbGraphNote"><span>' + Fe(as(C, A)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Fi(H) + '</span><span class="wbText"><span class="wbName">' + Fe(_d(C, A)) + '</span><span class="wbSub">' + Fe(as(C, A)) + (ce ? " · " + Fe(tt.aqLevel[ce]) : "") + '</span></span><button class="wbBack" title="' + Fe(tt.back) + '" data-wb="aq-close">' + Fi(Wn.back) + '</button></div><div class="wbGraph">' + Ee + "</div></div></div>";
  }
  const Io = {
    current: Le,
    hourly: Po,
    sun: Va,
    moon: Cn,
    wind: pt,
    uv_index: rt,
    compared_to_average: Pe,
    humidity: Ot,
    pressure: Ct,
    precipitation: Bn,
    air_quality: Ue
  };
  function Pn(C) {
    var Ee, Ge, Ke, We;
    const A = s == null ? void 0 : s();
    if (!A || R) return;
    const H = Be(A);
    b(A, H), G.lastFetch || K();
    const O = nt(A), le = Ed(A), ve = Js(A), ce = [
      ...H.map((De) => A.states[De]),
      A.states["sun.sun"],
      le && A.states[le],
      ve && A.states[ve],
      ...O.air.map((De) => A.states[De]),
      ...O.pollen.map((De) => A.states[De]),
      A.locale,
      A.config,
      A.entities,
      Math.floor(Date.now() / Oa)
    ];
    if (!C && z && ce.length === z.length && ce.every((De, Ie) => De === z[Ie])) return;
    z = ce;
    const we = v.getRootNode(), se = we.activeElement || document.activeElement;
    for (const De of ie) {
      const Ie = D[De];
      let Re = "";
      try {
        Re = Io[De](A, H) || "";
      } catch {
        Re = "";
      }
      if (Re === Ie.html) continue;
      const et = se && Ie.el.contains(se) ? (Ee = se.dataset) == null ? void 0 : Ee.wbFocus : void 0, mt = Ie.el.querySelector(".wbStripScroll"), _t = mt ? mt.scrollLeft : 0;
      Ie.html = Re, Ie.el.hidden = !Re, Ie.el.innerHTML = Re, _t && ((Ge = Ie.el.querySelector(".wbStripScroll")) == null || Ge.scrollTo({ left: _t })), et && !Y && ((Ke = Ie.el.querySelector('[data-wb-focus="' + et + '"]')) == null || Ke.focus());
    }
    Y && ((We = v.querySelector('[data-wb-focus="' + Y + '"]')) == null || We.focus(), Y = null), St(performance.now());
  }
  function Ae() {
    q || R || (q = !0, queueMicrotask(() => {
      q = !1, Pn(!0);
    }));
  }
  function je() {
    const C = getComputedStyle(v), A = (ce) => C.getPropertyValue(ce).trim(), H = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ce, we]) => {
      A(we) && (H[ce] = A(we));
    });
    const O = A("--color-text-primary") || "#f1f1f1", le = A("--color-bg-card") || "#222222", ve = !!v.closest(".light");
    return { colors: { ...po, ...H }, ink: ve ? O : le, paper: ve ? le : O };
  }
  const jt = (C, A) => {
    var H;
    C.width !== A.w && (C.width = A.w), C.height !== A.h && (C.height = A.h), (H = C.getContext("2d")) == null || H.putImageData(new ImageData(A.data, A.w, A.h), 0, 0);
  }, In = () => m && !wp();
  function wn(C, A) {
    const H = v.querySelector("canvas[data-wb-strip]");
    if (!H || !W || !H.getClientRects().length) return;
    const O = H.clientWidth, le = H.clientHeight;
    if (!O || !le) return;
    const ve = { width: O, height: le, columns: es, colors: A.colors, clock: C, ambient: In(), seed: W.seed };
    if (c === "smooth") {
      const ce = Math.min(2, window.devicePixelRatio || 1), we = Math.round(O * ce), se = Math.round(le * ce);
      H.width !== we && (H.width = we), H.height !== se && (H.height = se);
      const Ee = H.getContext("2d");
      if (!Ee) return;
      Ee.setTransform(ce, 0, 0, ce, 0, 0), Uu(Ee, W.segs, ve);
    } else jt(H, Gu(W.segs, { ...ve, px: 2, oneBit: c === "onebit", ink: A.ink, paper: A.paper }));
  }
  function St(C) {
    if (R) return;
    const A = je();
    if (c !== "smooth") {
      const H = In();
      v.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && jt(O, Xd(ul(O.dataset.wbWx, A.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: A.colors, ink: A.ink, paper: A.paper, clock: C, idle: H }));
      });
    }
    wn(C, A);
  }
  function Jn(C) {
    if (J = 0, !(R || !In())) {
      if (!document.hidden)
        if (c === "smooth") wn(C, je());
        else {
          const A = Math.floor(C / 100);
          A !== V && (V = A, St(C));
        }
      J = requestAnimationFrame(Jn);
    }
  }
  function Wt() {
    v.classList.toggle("wbMotion", In()), !J && !R && In() && (J = requestAnimationFrame(Jn));
  }
  function It(C) {
    var H, O;
    const A = (O = (H = C.target).closest) == null ? void 0 : O.call(H, "[data-wb]");
    if (!(!A || !v.contains(A))) {
      switch (A.dataset.wb) {
        case "day": {
          F.openDay = Number(A.dataset.index), F.opener = A.dataset.wbFocus, Y = "back-day";
          const le = yt()[F.openDay], ve = !G.todayHistory || G.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - G.todayHistory.fetched > np;
          le && vr(new Date(le.datetime), /* @__PURE__ */ new Date()) && ve && Q();
          break;
        }
        case "close-day":
          F.openDay = void 0, Y = F.opener, F.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          F.dayMode = A.dataset.mode;
          break;
        case "hourly-mode":
          F.hourlyMode = A.dataset.mode;
          break;
        case "aq-open":
          F.aq = A.dataset.entity, ae(F.aq);
          break;
        case "aq-close":
          F.aq = void 0;
          break;
        default:
          return;
      }
      Pn(!0);
    }
  }
  function za(C) {
    var A, H;
    C.key === "Escape" && F.openDay !== void 0 && ((H = (A = C.target).closest) != null && H.call(A, '[data-wb-open="day"]')) && (F.openDay = void 0, Y = F.opener, F.opener = void 0, Pn(!0));
  }
  let hn = null;
  function Lt(C) {
    var H, O;
    const A = (O = (H = C.target).closest) == null ? void 0 : O.call(H, ".wbStripScroll");
    !A || C.button !== 0 || (hn = { startX: C.pageX, left: A.scrollLeft, moved: !1 }, window.addEventListener("mousemove", Sn), window.addEventListener("mouseup", vt, { once: !0 }));
  }
  function Sn(C) {
    const A = v.querySelector(".wbStripScroll");
    if (!hn || !A) return;
    const H = C.pageX - hn.startX;
    !hn.moved && Math.abs(H) > 1 && (hn.moved = !0, A.classList.add("wbDragging")), A.scrollLeft = hn.left - H;
  }
  function vt() {
    var C;
    hn = null, window.removeEventListener("mousemove", Sn), (C = v.querySelector(".wbStripScroll")) == null || C.classList.remove("wbDragging");
  }
  v.addEventListener("click", It), v.addEventListener("keydown", za), v.addEventListener("mousedown", Lt);
  const Hn = typeof ResizeObserver == "function" ? new ResizeObserver(() => St(performance.now())) : null;
  Hn == null || Hn.observe(v);
  const zt = (Xn = window.matchMedia) == null ? void 0 : Xn.call(window, "(prefers-reduced-motion: reduce)"), Ho = () => {
    Wt(), St(performance.now());
  };
  (Ga = zt == null ? void 0 : zt.addEventListener) == null || Ga.call(zt, "change", Ho);
  const ja = [
    setInterval(() => {
      ne = /* @__PURE__ */ new Date(), Pn(!0);
    }, lp),
    setInterval(() => {
      E = /* @__PURE__ */ new Date(), Pn(!0);
    }, dp),
    setInterval(K, ip)
  ];
  return Pn(!0), Wt(), {
    update() {
      Pn(!1);
    },
    setStyle(C) {
      !C || C === c || (c = C, Pn(!0), Wt());
    },
    destroy() {
      var C;
      R = !0, ja.forEach(clearInterval), J && cancelAnimationFrame(J), J = 0, Hn == null || Hn.disconnect(), (C = zt == null ? void 0 : zt.removeEventListener) == null || C.call(zt, "change", Ho), vt(), v.removeEventListener("click", It), v.removeEventListener("keydown", za), v.removeEventListener("mousedown", Lt), ["daily", "hourly"].forEach(Me), v.remove();
    }
  };
}
const kr = "#E1E1E1", Bd = "#F7F4F0", Qs = "#03a9f4", wt = 14, Mt = 172;
let Qp = 0;
const Ht = (n) => Math.round(n * 100) / 100, Wa = (n, s, o) => Math.max(s, Math.min(o, n)), uo = (n, s, o, c, m, h) => '<rect x="' + Ht(n) + '" y="' + Ht(s) + '" width="' + Ht(o) + '" height="' + Ht(c) + '" fill="' + m + '"' + (h != null ? ' opacity="' + h + '"' : "") + "/>", el = (n) => n.map((s, o) => (o ? "L" : "M") + Ht(s[0]) + " " + Ht(s[1])).join("");
function tl(n) {
  const s = (n == null ? void 0 : n.attributes) || {};
  return s.device_class === "curtain" ? "curtain" : s.device_class === "blind" || s.current_tilt_position != null ? "venetian" : "blind";
}
const Ro = [
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
  let o = Ro[0], c = Ro[Ro.length - 1];
  for (let T = 0; T < Ro.length - 1; T++) if (s >= Ro[T][0] && s <= Ro[T + 1][0]) {
    o = Ro[T], c = Ro[T + 1];
    break;
  }
  const m = (s - o[0]) / (c[0] - o[0]), h = m * m * (3 - 2 * m), w = (T, v) => {
    const B = parseInt(T.slice(1), 16), ie = parseInt(v.slice(1), 16);
    return "#" + [16, 8, 0].map((te) => Math.round((B >> te & 255) + ((ie >> te & 255) - (B >> te & 255)) * h).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * h, t: s };
}
function tm(n) {
  const s = parseInt(n.slice(1), 16), o = (s >> 16 & 255) / 255, c = (s >> 8 & 255) / 255, m = (s & 255) / 255, h = Math.max(o, c, m), w = Math.min(o, c, m);
  let T = 0, v = 0;
  const B = (h + w) / 2;
  if (h !== w) {
    const ie = h - w;
    v = B > 0.5 ? ie / (2 - h - w) : ie / (h + w), T = (h === o ? (c - m) / ie + (c < m ? 6 : 0) : h === c ? (m - o) / ie + 2 : (o - c) / ie + 4) / 6;
  }
  return [T * 360, v * 100, B * 100];
}
function yc(n, s, o) {
  s = Wa(s, 0, 100) / 100, o = Wa(o, 0, 100) / 100;
  const c = (w) => (w + n / 30) % 12, m = s * Math.min(o, 1 - o), h = (w) => o - m * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [h(0), h(8), h(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [kc, Mc, Cc] = tm(kr), Pd = yc(kc, Mc, Math.max(6, Cc - 14)), nm = yc(kc, Mc, Math.min(96, Cc + 16));
function am(n, s, o, c, m) {
  const h = Mt / 2, w = Mt * 0.12, T = h - (h - w) * n, v = (z) => z ** 1.3, B = Wa(o, -1.5, 1.5), ie = (z) => -(Math.abs(B) * 4.6 * z ** 1.5) * Math.sign(B), te = n * 1.4, D = (z, J) => {
    const V = Math.min(4.8, Math.abs(o) * 2.6) * (J ? 1 : -1) * Math.sign(o || 1), q = J ? z + T : z, Y = J ? z : z + T, F = (Se) => q + ie(Se) + V * Math.sin(Se * Math.PI * 1.2 + c) * v(Se) * 1.4 + te * Math.sin(Se * Math.PI * 2 + c * 0.6) * v(Se) * (J ? 1 : -1), G = [[Y, wt]];
    for (let Se = 0; Se <= 12; Se++) G.push([F(Se / 12), wt + Mt * Se / 12]);
    G.push([Y, wt + Mt]);
    let ne = '<path d="' + el(G) + 'Z" fill="' + kr + '"/>';
    if (m) return ne;
    const E = 1.35 + ((J ? o > 0 : o < 0) ? 0.35 : 0), W = (Se) => {
      const g = Se / 7, ye = J ? 1 - g : g, Me = (1 - ye) ** 1.3, Oe = z + T * g;
      return Array.from({ length: 13 }, (b, M) => {
        const k = M / 12;
        return [Oe + ie(k) * Me + V * E * Math.sin(k * Math.PI * 1.2 + c - ye * 3.2) * v(k) * 1.4 * Me + te * 1.6 * Math.sin(k * Math.PI * 2 + c * 0.6 - ye * 2.5) * v(k) * n * (0.4 + 0.6 * Me), wt + Mt * k];
      });
    }, he = [1, 2, 3, 4, 5, 6].map(W);
    for (let Se = 0; Se < 6; Se += 2) ne += '<path d="' + el(he[Se]) + el(he[Se + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ne;
  }, R = h - (h - w) * s;
  return { body: D(wt, !0) + D(wt + Mt - T, !1), rails: [{ x: wt + R - 4, y: wt, w: 4, h: Mt }, { x: wt + Mt - R, y: wt, w: 4, h: Mt }], head: 6.4 };
}
function om(n, s, o) {
  const c = Mt * (1 - n);
  let m = "";
  if (c > 1 && (m += uo(wt, wt, Mt, c, kr), !o))
    for (let h = 1; h < 7; h += 2) m += uo(wt + Mt * h / 7, wt, Mt / 7, c, "#fff");
  return { body: m, rails: [{ x: wt, y: wt + Mt * (1 - s) - 7, w: Mt, h: 11 }], head: 10.4 };
}
function im(n, s, o, c) {
  const m = 9 - 7 * (o / 100), h = wt + Mt * (1 - n), w = Math.ceil(Mt / 10) + 1, T = wt + m / 2, v = (wt + Mt - m / 2 - T) / (w - 1), B = 0.8, ie = 0.6, te = Array.from({ length: w }, (z, J) => Math.max(T + J * ie, Math.min(T + J * v, h - m / 2 - (w - 1 - J) * ie))), D = te.slice(0, -1).map((z, J) => Wa((te[J + 1] - z - ie) / (v - ie), 0, 1));
  D.push(D[w - 2]);
  let R = "";
  return te.forEach((z, J) => {
    const V = B + (m - B) * D[J], q = Math.max(0.5, V / 2), Y = Math.max(0.4, V * 0.114);
    R += uo(wt, z - q, Mt, Math.max(1, V), kr), !c && V > 2.2 && (R += uo(wt, z + q - Y, Mt, Y, Pd) + uo(wt, z - q, Mt, Y * 0.55, nm, 0.75));
  }), c || [0.22, 0.78].forEach((z) => {
    R += uo(wt + Mt * z - 0.7, wt, 1.4, Math.max(0, te[w - 1] + 1 - wt), Pd, 0.85);
  }), { body: R, rails: [{ x: wt, y: wt + Mt * (1 - s) - 8, w: Mt, h: 8 }], head: 8.8 };
}
const Id = (n, s, o, c, m, h, w) => n === "curtain" ? am(s, o, m, h, w) : n === "venetian" ? im(s, o, c, w) : om(s, o, w);
function rm(n, s) {
  let o = "", c = "";
  return s.forEach((m) => {
    const h = m.w > m.h, w = Wa(h ? wt + Mt / 2 : m.x + m.w / 2, 17, 183), T = Wa(h ? m.y + m.h / 2 : wt + Mt / 2, 17, 183);
    o += h ? uo(wt, Wa(m.y + m.h / 2, wt, wt + Mt) - 1, Mt, 2, Qs) : uo(Wa(m.x + m.w / 2, wt, wt + Mt) - 1, wt, 2, Mt, Qs);
    const v = h ? "M" + Ht(w - 4) + " " + Ht(T - 3) + "l4 -3l4 3M" + Ht(w - 4) + " " + Ht(T + 3) + "l4 3l4 -3" : "M" + Ht(w - 3) + " " + Ht(T - 4) + "l-3 4l3 4M" + Ht(w + 3) + " " + Ht(T - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Ht(w) + '" cy="' + Ht(T) + '" r="11" fill="' + Qs + '" filter="url(#' + n + 's)"/><path d="' + v + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function sm(n, s) {
  const o = /* @__PURE__ */ new Date(), c = em(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), h = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = Id(s.kind, s.pos / 100, s.bar / 100, s.tilt, s.vel, s.ph, !1), T = s.ghostAlpha > 4e-3 && s.ghost != null ? Id(s.kind, s.ghost / 100, s.ghost / 100, s.tilt, 0, 0, !0).body : "", v = s.grip > 4e-3 ? rm(n, w.rails) : null, B = (ie) => uo(wt, wt, Mt, Mt, ie);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Ht(m) + '%" cy="' + Ht(h) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Ht(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Ht(100 - m * 0.8) + '%" cy="' + Ht(100 - h * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Ht(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Bd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (T ? '<g opacity="' + Ht(s.ghostAlpha) + '">' + T + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + kr + '" filter="url(#' + n + 's)"/></g>' + (v ? '<g clip-path="url(#' + n + 'c)" opacity="' + Ht(s.grip) + '">' + v.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Bd + '" stroke-width="3"/>' + (v ? '<g opacity="' + Ht(s.grip) + '">' + v.knobs + "</g>" : "") + "</svg>";
}
function lm({ onMove: n, onSet: s }) {
  var ne;
  const o = "cv" + ++Qp, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (ne = window.matchMedia) == null ? void 0 : ne.call(window, "(pointer: coarse)").matches;
  let h = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let T = 0, v = !1, B = !1, ie = null, te = 0, D = 0;
  const R = () => (h == null ? void 0 : h.kind) === "curtain" ? "x" : "y", z = () => ie || v || B || h.moving || h.target != null ? 1 : m ? performance.now() < D ? 1 : 0.4 : 0, J = () => {
    c.innerHTML = sm(o, { kind: h.kind, pos: w.pos, bar: h.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function V(E) {
    T = 0;
    const W = w.last ? Math.min(0.064, (E - w.last) / 1e3) : 1 / 60, he = W * 60;
    w.last = E;
    const Se = h.pos - w.pos, g = w.pos;
    w.pos += Math.sign(Se) * Math.min(Math.abs(Se), Math.max(10.5, Math.abs(Se) * 1.4) * W), Math.abs(h.pos - w.pos) < 0.03 && (w.pos = h.pos), w.vel = w.vel * 0.86 + (w.pos - g) / he * 0.14, Math.abs(w.vel) < 0.015 && w.pos === h.pos && (w.vel = 0), (w.pos !== g || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * he);
    const ye = h.tilt - w.tilt;
    w.tilt += Math.sign(ye) * Math.min(Math.abs(ye), Math.max(60, Math.abs(ye) * 4) * W);
    const Me = z();
    w.grip += (Me - w.grip) * Math.min(1, W * (Me > w.grip ? 11 : 3.5)), Math.abs(Me - w.grip) < 0.01 && (w.grip = Me);
    const Oe = h.target != null && Math.abs(h.target - w.pos) > 0.5 ? 0.22 : 0;
    h.target != null && (w.gpos = h.target), w.ghost += (Oe - w.ghost) * Math.min(1, W * (Oe > w.ghost ? 16 : 3)), Math.abs(Oe - w.ghost) < 4e-3 && (w.ghost = Oe), J(), w.pos !== h.pos || w.vel || w.tilt !== h.tilt || w.grip !== Me || w.ghost !== Oe ? T = requestAnimationFrame(V) : w.last = 0;
  }
  const q = () => {
    h && !T && (T = requestAnimationFrame(V));
  }, Y = setInterval(() => {
    h && !T && J();
  }, 60 * 1e3), F = (E) => {
    const W = c.getBoundingClientRect();
    return R() === "x" ? (E.clientX - W.left) / W.width : (E.clientY - W.top) / W.height;
  };
  c.addEventListener("pointerdown", (E) => {
    var Se;
    if (!(h != null && h.canSet) || E.button > 0) return;
    E.preventDefault(), (Se = c.setPointerCapture) == null || Se.call(c, E.pointerId);
    const W = h.target ?? h.pos, he = c.getBoundingClientRect();
    ie = { p0: F(E), from: W, x0: E.clientX, value: null, side: null }, h.kind === "curtain" && W > 0 && (ie.side = (E.clientX - he.left) / he.width < 0.5 ? "L" : "R"), q();
  }), c.addEventListener("pointermove", (E) => {
    if (!ie) return;
    let W;
    if (h.kind === "curtain") {
      if (!ie.side) {
        const Se = E.clientX - ie.x0;
        if (Math.abs(Se) < 4) return;
        ie.side = Se < 0 ? "L" : "R";
      }
      const he = (Mt / 2 - Mt * 0.12) / 200;
      W = ie.from + (ie.side === "L" ? -1 : 1) * ((F(E) - ie.p0) / he) * 100;
    } else W = ie.from - (F(E) - ie.p0) / (Mt / 200) * 100;
    ie.value = Wa(W, 0, 100), n(ie.value);
  });
  const G = () => {
    if (!ie) return;
    const E = ie.value;
    ie = null, E != null && s(Math.round(E)), q();
  };
  return c.addEventListener("pointerup", G), c.addEventListener("pointercancel", G), c.addEventListener("lostpointercapture", G), c.addEventListener("pointerenter", () => {
    v = !0, q();
  }), c.addEventListener("pointerleave", () => {
    v = !1, q();
  }), c.addEventListener("focus", () => {
    B = c.matches(":focus-visible"), q();
  }), c.addEventListener("blur", () => {
    B = !1, q();
  }), c.addEventListener("keydown", (E) => {
    if (!(h != null && h.canSet)) return;
    const W = Math.round(h.target ?? h.pos), he = E.shiftKey ? 10 : 1, Se = { ArrowUp: W + he, ArrowRight: W + he, ArrowDown: W - he, ArrowLeft: W - he, PageUp: W + 25, PageDown: W - 25, Home: 0, End: 100 }[E.key];
    if (Se == null) return;
    E.preventDefault();
    const g = Wa(Se, 0, 100);
    n(g), clearTimeout(te), te = setTimeout(() => s(g), 500);
  }), {
    el: c,
    update(E) {
      const W = !h;
      h = E, W && (w.pos = h.pos, w.tilt = h.tilt, D = performance.now() + 1500, m && setTimeout(q, 1600)), c.classList.toggle("x", R() === "x"), c.classList.toggle("y", R() === "y"), h.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(h.target ?? h.pos))), c.setAttribute("aria-orientation", R() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", h.name + (h.canSet ? " position" : "")), c.setAttribute("aria-valuetext", h.text), q();
    },
    destroy() {
      cancelAnimationFrame(T), T = 0, clearInterval(Y), clearTimeout(te), c.remove();
    }
  };
}
const Hd = "move-assistant-density", No = {
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
}, de = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), nl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', dm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', cm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', os = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Fd = 1, um = 4, Od = 16, Wd = 32, pm = 128, mm = 256, qd = 16384, hm = 1, fm = 2, Vd = 4, gm = 8, vm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, bm = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, al = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, zd = "move_assistant_house", jd = "move-assistant-house-used", xm = ["switch", "fan", "input_boolean", "automation"], Gd = "move-assistant-house-look", ym = [["popup", "Popup"], ["sheet", "Sheet"]], km = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Mm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', ma = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((s) => '<path d="' + s + '"/>').join("") + "</svg>", Ud = ma(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Sm = ma(["M20 6L9 17L4 12"]), Fa = {
  temp: ma(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: ma(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: ma(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: ma(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: ma(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: ma(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: ma(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: ma(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: ma(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: ma(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Tm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lm = 1, _m = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Yd = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ol = ["hs", "xy", "rgb", "rgbw", "rgbww"], il = ["door", "window", "garage_door", "opening"], is = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Am = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Zd = 10, Em = 20, Dm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rm = ["living room", "bedroom", "office"];
function Nm(n, { config: s, getHass: o }) {
  var ei, rr, sr;
  const c = (t) => n.getElementById(t), m = c("app"), w = String((s || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let T = No.get(Hd) === "1", v = {};
  const B = (t) => {
    var i;
    return (i = o()) == null ? void 0 : i.callWS(t);
  }, ie = (t, i, l) => B({ type: "call_service", domain: t, service: i, service_data: l }), te = n.querySelector("#appearancePane .toggleList");
  te && !c("densityToggle") && (te.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    T = !T, No.set(Hd, T ? "1" : "0"), ne();
  }));
  const D = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && rt(t).device_class === "power" && /^(W|kW)$/.test(rt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], R = (t, i, l, u) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + i + '">' + u.map(([f, I]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + l + '="' + f + '">' + I + "</button>").join("") + "</div>", z = (t, i, l, u) => '<div class="toggleRow"' + (u ? ' id="' + u + '"' : "") + "><div><strong>" + t + "</strong>" + (i ? '<div class="status">' + i + "</div>" : "") + "</div>" + l + "</div>";
  function J() {
    var P, ue, $;
    if (!w || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore test";
    const i = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], l = (Z, me) => '<div class="houseTab' + (Z === "look" ? " active" : "") + '" data-house-pane="' + Z + '"><section class="card">' + me + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([Z, me]) => '<button class="tab segBtn' + (Z === "look" ? " active" : "") + '" type="button" data-house-tab="' + Z + '">' + me + "</button>").join("") + "</div>" + l("look", '<div class="toggleList" id="houseLook"></div>') + l("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + l("sources", '<div class="toggleList">' + D.map(([Z, me, qe]) => z(me, qe, '<select class="settingsSelect" data-source="' + Z + '" aria-label="' + me + '"></select>')).join("") + "</div>") + l("sums", '<div class="toggleList">' + Object.entries(al).map(([Z, me]) => z(me.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Z + '" aria-label="' + me.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const u = c("houseLook");
    [(P = t.querySelector(".themeBtn")) == null ? void 0 : P.closest(".toggleRow"), (ue = c("densityToggle")) == null ? void 0 : ue.closest(".toggleRow"), ($ = c("moreInfoChoice")) == null ? void 0 : $.closest(".toggleRow")].forEach((Z) => Z && u.appendChild(Z)), u.insertAdjacentHTML("beforeend", z("Lights", "How lights show on the house page.", R("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + z("Pad", "What the Dual Axis Controller’s pad sets on its tile.", R("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const f = c("housePane"), I = f.querySelector(".houseTabs"), y = I.querySelector(".rubberIndicator"), _ = (Z) => {
      const me = I.querySelector(".tab.active");
      y.style.transition = Z ? "" : "none", y.style.left = me.offsetLeft + "px", y.style.width = me.offsetWidth + "px", Z && (y.style.transform = "scaleX(1.08)", setTimeout(() => y.style.transform = "", 180));
    };
    new ResizeObserver(() => _(!1)).observe(I), f.addEventListener("click", (Z) => {
      const me = Z.target.closest("[data-house-tab]");
      if (me) {
        I.querySelectorAll(".tab").forEach((He) => He.classList.toggle("active", He === me)), f.querySelectorAll(".houseTab").forEach((He) => He.classList.toggle("active", He.dataset.housePane === me.dataset.houseTab)), me.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), _(!0);
        return;
      }
      const qe = Z.target.closest("[data-light-fav]");
      if (qe) {
        ci(qe.dataset.lightFav);
        return;
      }
      const Ye = Z.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ye || Ye.disabled)) {
        if (Ye.dataset.lights && (yt.lights = Ye.dataset.lights), Ye.dataset.dacPad && (yt.dacPad = Ye.dataset.dacPad), (Ye.dataset.lights || Ye.dataset.dacPad) && (fa(), Kt.clear()), Ye.dataset.sumToggle) {
          const He = Ye.dataset.sumToggle, Ce = new Set(S.hiddenSums || []);
          Ce.has(He) ? Ce.delete(He) : Ce.add(He), S = { ...S, hiddenSums: [...Ce] }, Pt();
        }
        ya();
      }
    }), f.addEventListener("change", (Z) => {
      const me = Z.target;
      me.dataset.source && (S = { ...S, sources: { ...S.sources || {}, [me.dataset.source]: me.value || void 0 } }, Pt());
      const qe = me.dataset.lightStyle || me.dataset.lightPad;
      if (qe) {
        const Ye = me.dataset.lightStyle ? "lightStyles" : "lightPads", He = { ...yt[Ye] };
        me.value ? He[qe] = me.value : delete He[qe], yt[Ye] = He, fa(), [...Kt.keys()].filter((Ce) => Ce.endsWith(":" + qe)).forEach((Ce) => Kt.delete(Ce));
      }
      ya();
    });
  }
  function V() {
    var _;
    const t = c("housePane");
    if (!t) return;
    const i = !!customElements.get(ln), l = i ? yt.lights : "tile";
    t.querySelectorAll("[data-lights]").forEach((P) => {
      P.setAttribute("aria-pressed", String(P.dataset.lights === l)), P.dataset.lights === "dac" && (P.disabled = !i);
    }), c("lightsRow").querySelector(".status").textContent = i ? "How lights show on the house page." : "Install the Dual Axis Controller from HACS to use it.", t.querySelectorAll("[data-dac-pad]").forEach((P) => P.setAttribute("aria-pressed", String(P.dataset.dacPad === yt.dacPad))), c("dacPadRow").hidden = !i || !(yt.lights === "dac" || Object.values(yt.lightStyles).includes("dac"));
    for (const P of t.querySelectorAll("[data-source]")) {
      if (P === n.activeElement) continue;
      const [ue] = D.find(([Z]) => Z === P.dataset.source), $ = Object.keys(v).filter(D.find(([Z]) => Z === ue)[3]).sort((Z, me) => Pe(Z).localeCompare(Pe(me)));
      P.dataset.sig !== $.join(",") && (P.innerHTML = '<option value="">Automatic</option>' + $.map((Z) => '<option value="' + de(Z) + '">' + de(Pe(Z)) + "</option>").join(""), P.dataset.sig = $.join(",")), P.value = $.includes((_ = S.sources) == null ? void 0 : _[ue]) ? S.sources[ue] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((P) => {
      const ue = !(S.hiddenSums || []).includes(P.dataset.sumToggle);
      P.classList.toggle("on", ue), P.setAttribute("aria-checked", String(ue));
    });
    const u = c("lightRows");
    if (!u || u.contains(n.activeElement)) return;
    const f = new Set(Ya()), I = (P, ue, $, Z) => '<option value="' + P + '"' + (P === $ ? " selected" : "") + (Z ? " disabled" : "") + ">" + ue + "</option>", y = Object.keys(v).filter((P) => P.startsWith("light.")).sort((P, ue) => !Be.get(P) - !Be.get(ue) || (Be.get(P) || "").localeCompare(Be.get(ue) || "") || Pe(P).localeCompare(Pe(ue))).map((P) => {
      const ue = yt.lightStyles[P] || "", $ = yt.lightPads[P] || "", Z = f.has(P), me = de(Pe(P));
      return "<tr><td><strong>" + me + "</strong></td><td>" + de(Be.get(P) || "—") + "</td><td>" + de(It(P)) + '</td><td class="metaSwitchCol"><button class="switch' + (Z ? " on" : "") + '" type="button" role="switch" aria-checked="' + Z + '" data-light-fav="' + de(P) + '" aria-label="' + me + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + de(P) + '" aria-label="' + me + ' tile">' + I("", "Default", ue) + I("tile", "HomeCore tile", ue) + I("dac", "Dual Axis Controller", ue, !i) + '</select></td><td><select class="settingsSelect" data-light-pad="' + de(P) + '" aria-label="' + me + ' pad"' + (mo(P) ? "" : " disabled") + ">" + I("", "Default", $) + I("temperature", "Temperature", $) + I("colour", "Colour", $) + "</select></td></tr>";
    }).join("");
    u.dataset.html !== y && (u.innerHTML = y, u.dataset.html = y);
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, m.appendChild(q);
  let Y = 0;
  function F() {
    if (!T) return;
    const t = c("homeView"), i = (I) => I.offsetParent !== null && !I.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((I) => {
      i(I) && (I.dataset.h = Math.round(I.getBoundingClientRect().height) + " px");
    });
    const l = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(i), u = window.innerHeight, f = l.filter((I) => {
      const y = I.getBoundingClientRect();
      return y.height > 0 && y.top >= 0 && y.bottom <= u + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + f + "</b><small>of " + l.length + " readings on screen</small>";
  }
  const G = () => {
    T && requestAnimationFrame(F);
  };
  function ne() {
    var t;
    m.classList.toggle("showDensity", T), (t = c("densityToggle")) == null || t.classList.toggle("on", T), q.hidden = !T, clearInterval(Y), T && (Y = setInterval(F, 1e3), F());
  }
  window.addEventListener("scroll", G, { capture: !0, passive: !0 }), window.addEventListener("resize", G, { passive: !0 });
  const E = n.querySelector("#homeView .grid");
  let W = null, he = null, Se = null, g = null;
  const ye = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let S = { favourites: null }, oe = {}, K = {}, Q = [], ae = null;
  const re = (() => {
    try {
      return JSON.parse(No.get(jd)) || {};
    } catch {
      return {};
    }
  })();
  let Be = /* @__PURE__ */ new Map(), nt = 0;
  function Pt() {
    clearTimeout(nt), nt = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: zd, value: S })).catch(() => {
    }), 400);
  }
  const yt = (() => {
    let t = {};
    try {
      t = JSON.parse(No.get(Gd)) || {};
    } catch {
    }
    const i = (l, u) => Object.fromEntries(Object.entries(l || {}).filter(([, f]) => u.includes(f)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: i(t.lightStyles, ["tile", "dac"]),
      lightPads: i(t.lightPads, ["temperature", "colour"])
    };
  })(), fa = () => No.set(Gd, JSON.stringify(yt)), _a = () => {
    m.dataset.more = yt.more, ao();
  };
  w && te && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + ym.map(([t, i]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (yt.more === t) + '" data-more-style="' + t + '">' + i + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const i = t.target.closest("[data-more-style]");
    i && (yt.more = i.dataset.moreStyle, fa(), _a(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === i))));
  })), J();
  let Le = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const it = /* @__PURE__ */ new Map();
  let tn = "";
  const qa = w ? Eu({ onChange: () => vn() }) : null;
  w && m.classList.add("house");
  const Vt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let bn = null, ut = null, at = !1;
  function dt(t) {
    const i = Wo();
    if (m.classList.toggle("houseBento", !!i), bn && (ut !== i || t == null) && (bn.destroy(), bn = null), !i || t == null) {
      Vt.remove();
      return;
    }
    Vt.isConnected || E.append(Vt), Vt.style.order = t, !bn && !at && (bn = Nd(Vt, { getHass: o, entityId: i, style: "bitmap" }), ut = i);
  }
  const Po = [["wx", ["current"]], ["avg", ["compared_to_average"]]], Va = Object.fromEntries(Po.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let mn = null, Cn = null;
  function pt(t) {
    const i = Wo();
    mn && Cn !== i && (mn.forEach((l) => l.destroy()), mn = null), Object.values(Va).forEach((l) => i ? !l.isConnected && E.append(l) : l.remove()), i && !mn && !at && (mn = Po.map(([l, u]) => Nd(Va[l], { getHass: o, entityId: i, style: "bitmap", cards: u, onOpen: l === "wx" ? () => Ko("weather") : void 0 })), Cn = i);
  }
  const rt = (t) => {
    var i;
    return ((i = v[t]) == null ? void 0 : i.attributes) || {};
  }, Pe = (t) => rt(t).friendly_name || t, Ot = (t, i) => Bi(t) || (Number(rt(t).supported_features) & i) === i, Ct = (t) => {
    const i = String(t ?? "").replace(/_/g, " ");
    return i.charAt(0).toUpperCase() + i.slice(1);
  }, ht = (t, i = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: i, maximumFractionDigits: i }), Bn = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ue = (t) => rt(t).supported_color_modes || [], qi = (t) => {
    const i = t / 100;
    return [i <= 66 ? 255 : 329.7 * Math.pow(i - 60, -0.1332), i <= 66 ? 99.47 * Math.log(i) - 161.12 : 288.12 * Math.pow(i - 60, -0.0755), i >= 66 ? 255 : i <= 19 ? 0 : 138.52 * Math.log(i - 10) - 305.04];
  }, Io = (t, i) => [5, 3, 1].map((l) => {
    const u = (l + t / 60) % 6;
    return 255 * (1 - i / 100 * Math.max(0, Math.min(u, 4 - u, 1)));
  });
  function Pn(t) {
    const i = rt(t), l = (i.rgb_color || (i.hs_color && i.color_mode !== "color_temp" ? Io(...i.hs_color) : i.color_temp_kelvin ? qi(i.color_temp_kelvin) : [255, 170, 0])).map((f) => Math.round(Math.max(0, Math.min(255, f)))), u = (0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]) / 255 > 0.8;
    return "--light:rgb(" + l.join(",") + ");--light-ink:" + (u ? "#26221e" : "#ffffff");
  }
  const Ae = (t) => {
    var i;
    return t.startsWith("light.") && ((i = v[t]) == null ? void 0 : i.state) === "on" ? ' data-light style="' + Pn(t) + '"' : "";
  }, je = (t) => {
    const i = Ue(t);
    return i.length ? i.some((l) => l !== "onoff") : rt(t).brightness != null;
  }, jt = (t) => [rt(t).min_color_temp_kelvin || 2e3, rt(t).max_color_temp_kelvin || 6500], In = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function wn(t) {
    const i = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (i < 10) return "Just now";
    if (i < 60) return i + " seconds ago";
    const l = Math.round(i / 60);
    if (l < 60) return l + (l === 1 ? " minute ago" : " minutes ago");
    const u = Math.round(l / 60);
    if (u < 24) return u + (u === 1 ? " hour ago" : " hours ago");
    const f = Math.round(u / 24);
    return f + (f === 1 ? " day ago" : " days ago");
  }
  const St = (t) => {
    var i;
    return rt(t).current_position ?? (((i = v[t]) == null ? void 0 : i.state) === "closed" ? 0 : 100);
  }, Jn = (t) => {
    var i;
    return fn("pos", t, ((i = b.get(t)) == null ? void 0 : i.pos) ?? St(t));
  }, Wt = (t) => {
    var i;
    return fn("tilt", t, ((i = b.get(t)) == null ? void 0 : i.tilt) ?? rt(t).current_tilt_position);
  };
  function It(t) {
    var y;
    const i = v[t];
    if (!i) return "Not found";
    if (i.state === "unavailable") return "Unavailable";
    const l = i.attributes, u = t.split(".")[0];
    if (u === "light") {
      if (i.state !== "on") return "Off";
      const _ = l.color_temp_kelvin;
      return (je(t) ? Bn(i) + "%" : "On") + (l.color_mode === "color_temp" && _ ? " · " + Number(_).toLocaleString() + "k" : ol.includes(l.color_mode) ? " · Colour" : "");
    }
    if (u === "climate") return (i.state === "off" ? "Off" : Ct(l.hvac_action || i.state)) + " · " + ht(l.current_temperature) + " °C now";
    if (u === "cover") {
      const _ = St(t), P = l.current_tilt_position;
      return i.state === "opening" || i.state === "closing" ? Ct(i.state) + " - " + _ + "%" : (_ <= 0 ? "Closed" : _ >= 100 ? "Open" : "Partially open") + (P > 0 && P < 100 ? " · tilted" : "");
    }
    if (u === "humidifier") return i.state !== "on" ? "Off" : Ct(l.action || "on") + " · " + l.current_humidity + "% now";
    if (u === "vacuum") return Ct(i.state) + (i.state === "cleaning" && ((y = l.rooms) != null && y.length) ? " · " + l.rooms.join(", ") : "") + (l.battery_level != null ? " · " + l.battery_level + "%" : "");
    if (u === "media_player") return i.state === "playing" || i.state === "paused" ? (i.state === "paused" ? "Paused · " : "") + (l.media_title || "Playing") : Ct(i.state);
    if (u === "alarm_control_panel") return Yd[i.state] || Ct(i.state);
    if (u === "lock" || u === "valve") return Ct(i.state);
    if (u === "switch") return i.state === "on" ? "On" : "Off";
    if (u === "plant") return i.state === "ok" ? "Healthy" : Ct(l.problem);
    if (u === "binary_sensor")
      return l.device_class === "moisture" ? i.state === "on" ? "Wet" : "Dry" : il.includes(l.device_class) ? i.state === "on" ? "Open" : "Closed" : i.state === "on" ? "Detected" : "Clear";
    if (l.rang) return "Rang at " + In(l.rang);
    const f = o();
    if (f != null && f.formatEntityState && !Bi(t))
      try {
        return f.formatEntityState(i);
      } catch {
      }
    const I = Number(i.state);
    if (i.state !== "" && Number.isFinite(I)) {
      const _ = Math.abs(I) >= 100 ? 0 : Math.abs(I) >= 10 ? 1 : 2, P = l.unit_of_measurement ? l.unit_of_measurement === "%" ? "%" : " " + l.unit_of_measurement : "";
      return I.toLocaleString(void 0, { maximumFractionDigits: _ }) + P + (l.plant_low ? " · Low" : l.plant_high ? " · High" : "");
    }
    return Ct(i.state);
  }
  const za = (t) => t >= 1e3 ? ht(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function hn(t) {
    const i = o();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var I;
      const u = v[l.dataset.iconFor], f = l.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && u && !f) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (l.textContent = "", y = document.createElement("ha-state-icon"), l.appendChild(y)), y.hass = i, y.stateObj = u;
      } else if (customElements.get("ha-icon")) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-icon") && (l.textContent = "", y = document.createElement("ha-icon"), l.appendChild(y)), y.icon = f || ((I = u == null ? void 0 : u.attributes) == null ? void 0 : I.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || Pe(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Lt = (t, i, l) => ' data-icon-for="' + de(t) + '"' + (i ? ' data-icon-name="' + de(i) + '"' : "") + (l ? ' data-letter="' + de(l) + '"' : ""), Sn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : rt(t).rang ? "mdi:doorbell" : "", vt = (t, i, l, u) => de([t, i, l, u ? JSON.stringify(u) : ""].join("|")), Hn = (t) => de(JSON.stringify(t));
  function zt(t, i) {
    var f, I;
    const l = de(Pe(i) + ", " + It(i));
    return '<div class="activityRow' + (Number.isFinite(Number((f = v[i]) == null ? void 0 : f.state)) && ((I = v[i]) == null ? void 0 : I.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + de(t + "|" + i) + '" aria-label="' + l + '. Show the last 24 hours"' : '" aria-label="' + l + '"') + '><div class="tfIcon" aria-hidden="true"' + Lt(i, Sn(i)) + '></div><div><div class="activityRowName">' + de(Pe(i)) + '</div><div class="activityRowMeta">' + de(It(i)) + "</div></div></div>";
  }
  const Ho = (t, i, l) => '<div class="activityRow" aria-label="' + de(t + ", " + i) + '"><div class="tfIcon" aria-hidden="true"' + Lt("", l, t) + '></div><div><div class="activityRowName">' + de(t) + '</div><div class="activityRowMeta">' + de(i) + "</div></div></div>";
  function ja(t) {
    var l;
    const i = ((l = v[t]) == null ? void 0 : l.state) === "on";
    return '<div class="activityRow tfPlug' + (i ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + vt("switch", "toggle", t) + '" aria-label="Turn ' + de(Pe(t)) + (i ? " off" : " on") + '"' + Lt(t) + '></button><div><div class="activityRowName">' + de(Pe(t)) + '</div><div class="activityRowMeta">' + de(It(t)) + "</div></div></div>";
  }
  const Xn = (t) => {
    var i;
    return ((i = Me.get(t)) == null ? void 0 : i.name) ?? Pe(t);
  }, Ga = (t) => {
    var i;
    return ((i = Me.get(t)) == null ? void 0 : i.text) ?? It(t);
  };
  function C(t) {
    var l;
    const i = (l = Me.get(t)) == null ? void 0 : l.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (i ? Lt("", i, Xn(t)) : Lt(t, Sn(t))) + '></div><div><div class="activityRowName">' + de(Xn(t)) + '</div><div class="activityRowMeta">' + de(Ga(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + de(Xn(t)) + '’s last 24 hours">' + nl + '</button></div><svg class="tfGraph" data-graph="' + de(t) + '" role="img" aria-label="' + de(Xn(t)) + ', last 24 hours"></svg></div>';
  }
  function A(t, i, l, u, f = "", I = null, y = "") {
    const _ = W && W.key === t;
    return '<section class="card tfCard' + (y ? " " + y : "") + (_ ? " open" : "") + '" data-tf data-k="' + de(t) + '" style="order:' + i + (_ && W.h ? ";min-height:" + W.h + "px" : "") + '" aria-label="' + de(l) + '"><div class="activityHeader">' + (I ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + de(I) + '" aria-label="' + de(l + ", " + It(I) + ". More info") + '">' + de(l) + "</button>" : '<div class="activityTitle">' + de(l) + "</div>") + "</div>" + (_ ? C(W.id) : '<div class="activityRows">' + u.join("") + "</div>" + f) + "</section>";
  }
  function H(t, i) {
    const l = "readings:" + t.id, u = t.readings.map((f) => zt(l, f));
    return t.power != null && u.push(Ho("Power now", za(t.power), "mdi:flash")), A(l, i, "Readings", u.concat(t.plugs.map(ja)));
  }
  function O(t, i) {
    var _;
    const l = "energy:" + t.id, [u, f] = [t.solar.find((P) => P.endsWith("_power")), t.solar.find((P) => P.endsWith("_today"))], I = [u, f].filter(Boolean).map((P) => zt(l, P)), y = Number(((_ = v[u]) == null ? void 0 : _.state) || 0) * 1e3;
    return Le.grid && (I.push(zt(l, Le.grid)), I.push(Ho("House use", za(y + Number(v[Le.grid].state)), "mdi:home-lightning-bolt"))), A(l, i, "Energy", I, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const le = (t, i) => A("plant:" + t.id, i, Pe(t.id), t.readings.map((l) => zt("plant:" + t.id, l)), "", t.id), ve = (t) => A("openings", t, "Doors and windows", Le.security.openings.map((i) => zt("openings", i)));
  function ce(t, i, l, u, f, I, y = null) {
    const _ = l == null ? null : Math.max(0, Math.min(1, l)), P = _ == null ? 0 : Math.round(_ * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + de(u) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + P + '"' + (f ? ' aria-valuetext="' + de(f) + '"' : "") + ' data-drag="' + de(t + "|" + i) + '">' + (y != null ? '<span class="was" aria-hidden="true" style="left:' + y + '%"></span>' : "") + (I ? _ == null ? "" : '<b style="left:' + P + '%"></b>' : '<i style="width:' + P + '%"></i>') + "</div>";
  }
  const we = "move-assistant-house-last-bright", se = (() => {
    try {
      return JSON.parse(No.get(we)) || {};
    } catch {
      return {};
    }
  })();
  let Ee = 0;
  const Ge = (t, i) => {
    !i || se[t] === i || (se[t] = i, clearTimeout(Ee), Ee = setTimeout(() => No.set(we, JSON.stringify(se)), 500));
  }, Ke = (t, i, l, u) => '<div class="tfStep" role="group" aria-label="' + de(t) + '"><button type="button" data-act="' + l + '" aria-label="Lower ' + de(t.toLowerCase()) + '">−</button><output>' + de(i) + '</output><button type="button" data-act="' + u + '" aria-label="Raise ' + de(t.toLowerCase()) + '">+</button></div>', We = (t, i, l) => '<div class="' + t + '" role="group" aria-label="' + de(i) + '">' + l.filter(Boolean).map((u) => '<button type="button" data-act="' + u.act + '"' + (u.pressed != null ? ' aria-pressed="' + u.pressed + '"' : "") + (u.disabled ? " disabled" : "") + (u.aria ? ' aria-label="' + de(u.aria) + '"' : "") + ">" + (u.html || de(u.label)) + "</button>").join("") + "</div>", De = (t, i) => "width:" + Math.round(Math.max(0, Math.min(1, (t - i * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * i / 3).toFixed(2), Ie = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", Re = (t, i) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + de(Pe(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-blocks="' + de(t) + '">' + [0, 1, 2, 3].map((l) => '<span><i style="' + De(i, l) + '"></i><b' + (i >= (l + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (l + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Ie(i) + '">' + Math.round(i) + "%</output></div>";
  function et(t, i) {
    t.querySelectorAll(":scope>span").forEach((u, f) => {
      u.firstElementChild.setAttribute("style", De(i, f)), u.lastElementChild.classList.toggle("lit", i >= (f + 1) * 25 - 12);
    });
    const l = t.querySelector(".tfTip");
    l.setAttribute("style", Ie(i)), l.textContent = Math.round(i) + "%", t.setAttribute("aria-valuenow", String(Math.round(i))), t.setAttribute("aria-valuetext", Math.round(i) + "% open");
  }
  const mt = (t, i) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + de(Pe(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-drag="tilt|' + de(t) + '"><i style="width:calc((100% - 6px) * ' + i / 100 + ')"></i><span' + (i > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (i > 92 ? ' class="lit"' : "") + ">Open</span></div>", _t = (t, i, l) => '<div class="tfCoverBtns" role="group" aria-label="' + de(Pe(t)) + '">' + [
    Ot(t, hm) && ["open", "Open", "open_cover", i >= 100 && !l],
    Ot(t, gm) && ["stop", "Stop", "stop_cover", !1],
    Ot(t, fm) && ["close", "Close", "close_cover", i <= 0 && !l]
  ].filter(Boolean).map(([u, f, I, y]) => '<button type="button" data-act="' + vt("cover", I, t) + '" aria-label="' + f + '"' + (y ? " disabled" : "") + ">" + vm[u] + "</button>").join("") + "</div>", bt = (t, i) => '<button class="tfIcon' + (i.art ? " art" : "") + '" type="button" data-act="' + i.button.act + '" aria-label="' + de(i.button.label) + '"' + (i.art ? ' style="background-image:url(&quot;' + de(i.art) + '&quot;)"' : Lt(t, i.icon)) + "></button>", Gt = (t) => '<button class="tfName" type="button" data-more="' + de(t) + '" aria-label="' + de(Pe(t) + ", " + It(t) + ". More info") + '"><span class="activityRowName">' + de(Pe(t)) + '</span><span class="activityRowMeta">' + de(It(t)) + "</span></button>";
  function nn(t, i = !1, l = null) {
    if (t.startsWith("light.") && mo(t)) return '<div class="tfDac" data-k="' + de(t) + '" data-dac="' + (i ? "more:" : l ? "dash:" : "tile:") + de(t) + '"></div>';
    const u = Tn(t), f = l || (i && t.startsWith("light.") ? ["bright"] : null), I = u.sections.map((y, _) => y && (!f || f.includes((u.parts || [])[_])) ? y : "").filter(Boolean);
    return '<div class="tfAction' + (u.on ? " on" : "") + '" data-k="' + de(t) + '"' + (u.tone ? ' data-tone="' + u.tone + '"' : "") + Ae(t) + '><div class="tfActionHead">' + bt(t, u) + Gt(t) + "</div>" + I.join("") + "</div>";
  }
  const ln = "dual-controller-v3", Kt = /* @__PURE__ */ new Map();
  function mo(t) {
    return (yt.lightStyles[t] || yt.lights) === "dac" && !!customElements.get(ln);
  }
  const Vn = (t) => yt.lightPads[t] || yt.dacPad, ho = () => {
    const t = o();
    return t && { ...t, themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") } };
  }, fo = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}";
  function zn(t) {
    t.querySelectorAll("[data-dac]").forEach((i) => {
      const l = i.dataset.dac, u = l.startsWith("dash:");
      let f = Kt.get(l);
      if (!f) {
        const I = l.slice(l.indexOf(":") + 1);
        f = document.createElement(ln), f.setConfig({ type: "custom:" + ln, entity: I, pad: Vn(I), ...u ? { tap_action: { action: "none" } } : {} }), Kt.set(l, f);
      }
      f.hass = ho(), u && f.shadowRoot && !f.shadowRoot.querySelector("style[data-tf-fit]") && (f.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: fo })).dataset.tfFit = ""), f.parentNode !== i && i.replaceChildren(f);
    });
  }
  function ft() {
    const t = ho();
    Kt.forEach((i, l) => {
      i.isConnected ? i.hass = t : Kt.delete(l);
    });
  }
  customElements.whenDefined(ln).then(() => {
    w && (E != null && E.querySelector("[data-tf]")) && ya();
  });
  const fn = (t, i, l) => Oe.has(t + "|" + i) ? Oe.get(t + "|" + i) : l;
  function Tn(t) {
    var I;
    const i = v[t], l = i.attributes, u = t.split(".")[0], f = (y, _) => ({ act: vt(y, "toggle", t), label: _ });
    if (u === "light") {
      const y = i.state === "on", _ = Ue(t), [P, ue] = jt(t), $ = fn("bright", t, Bn(i));
      y && Ge(t, Bn(i));
      const Z = fn("ct", t, y && l.color_mode === "color_temp" ? l.color_temp_kelvin : null), me = fn("hue", t, y && ol.includes(l.color_mode) && l.hs_color ? l.hs_color[0] : null);
      return { on: y, button: f("light", "Turn " + Pe(t) + (y ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        je(t) && ce("bright", t, $ / 100, Pe(t) + " brightness", $ + "%", !1, y ? null : se[t] ?? null),
        _.includes("color_temp") && ce("ct", t, Z == null ? null : (Z - P) / (ue - P), Pe(t) + " warm to cool", Z == null ? "" : Math.round(Z) + " kelvin", !0),
        _.some((qe) => ol.includes(qe)) && ce("hue", t, me == null ? null : me / 360, Pe(t) + " colour", "", !0)
      ] };
    }
    if (u === "climate") {
      const y = l.target_temp_step || 0.5, _ = Number(l.temperature);
      return { on: i.state !== "off", tone: i.state === "cool" || l.hvac_action === "cooling" ? "cool" : "heat", button: f("climate", "Turn " + Pe(t) + (i.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(_) && Ke("Target temperature", ht(_) + " °C", vt("climate", "set_temperature", t, { temperature: _ - y }), vt("climate", "set_temperature", t, { temperature: _ + y })),
        We("tfSeg", "Mode", (l.hvac_modes || []).map((P) => ({ label: Ct(P), act: vt("climate", "set_hvac_mode", t, { hvac_mode: P }), pressed: i.state === P })))
      ] };
    }
    if (u === "cover") {
      const y = i.state === "opening" || i.state === "closing", _ = i.state === "closed", P = Jn(t), ue = Wt(t);
      return { on: !_, tone: "blue", icon: bm[tl(i)][_ ? 1 : 0], button: f("cover", (_ ? "Open " : "Close ") + Pe(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ot(t, Vd) && Re(t, P),
        ue != null && mt(t, ue),
        _t(t, P, y)
      ] };
    }
    if (u === "humidifier") {
      const y = Number(l.humidity);
      return { on: i.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: f("humidifier", "Turn " + Pe(t) + (i.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(y) && Ke("Target humidity", y + "%", vt("humidifier", "set_humidity", t, { humidity: y - 1 }), vt("humidifier", "set_humidity", t, { humidity: y + 1 })),
        ((I = l.available_modes) == null ? void 0 : I.length) && We("tfSeg", "Mode", l.available_modes.map((_) => ({ label: Ct(_), act: vt("humidifier", "set_mode", t, { mode: _ }), pressed: l.mode === _ })))
      ] };
    }
    if (u === "media_player") {
      const y = i.state === "playing", _ = i.state === "off" || i.state === "standby", P = fn("vol", t, l.volume_level), ue = _ ? { act: vt("media_player", Ot(t, pm) ? "turn_on" : "toggle", t), label: "Turn " + Pe(t) + " on" } : i.state === "playing" || i.state === "paused" ? { act: vt("media_player", "media_play_pause", t), label: (y ? "Pause " : "Play ") + Pe(t) } : { act: vt("media_player", Ot(t, mm) ? "turn_off" : "toggle", t), label: "Turn " + Pe(t) + " off" };
      return { on: !_, tone: "blue", art: !_ && l.entity_picture ? l.entity_picture : null, button: ue, parts: ["playback", "volume"], sections: _ ? [] : [
        (Ot(t, Od) || Ot(t, Wd) || Ot(t, Fd) || Ot(t, qd)) && We("tfSeg", "Playback", [
          { html: os.prev, aria: "Previous", act: vt("media_player", "media_previous_track", t), disabled: !Ot(t, Od) },
          { html: y ? os.pause : os.play, aria: y ? "Pause" : "Play", act: vt("media_player", "media_play_pause", t), disabled: !(Ot(t, Fd) || Ot(t, qd)) },
          { html: os.next, aria: "Next", act: vt("media_player", "media_next_track", t), disabled: !Ot(t, Wd) }
        ]),
        Ot(t, um) && P != null && ce("vol", t, P, Pe(t) + " volume", Math.round(P * 100) + "%")
      ] };
    }
    if (u === "vacuum") {
      const y = i.state === "cleaning", _ = l.rooms || [], P = ($) => _.includes($) ? _.filter((Z) => Z !== $) : _.concat($), ue = vt("vacuum", y ? "pause" : "start", t, Bi(t) ? { rooms: _ } : null);
      return { on: y || i.state === "returning", tone: "blue", button: { act: ue, label: (y ? "Pause " : "Start ") + Pe(t) }, parts: ["controls", "rooms"], sections: [
        We("tfSeg", Pe(t), [
          { label: y ? "Pause" : "Start", act: ue },
          { label: "Dock", act: vt("vacuum", "return_to_base", t), disabled: i.state === "docked" },
          { label: "Locate", act: vt("vacuum", "locate", t) }
        ]),
        Bi(t) && We("tfChips", "Rooms to clean", Le.rooms.filter(($) => $.id !== "balcony").map(($) => ({ label: $.name, act: vt("vacuum", "set_rooms", t, { rooms: P($.name) }), pressed: _.includes($.name) })))
      ] };
    }
    if (u === "lock") {
      const y = i.state === "locked";
      return { on: !y, tone: "heat", button: { act: vt("lock", y ? "unlock" : "lock", t), label: (y ? "Unlock " : "Lock ") + Pe(t) }, parts: ["controls"], sections: [
        We("tfSeg", Pe(t), [
          { label: "Lock", act: vt("lock", "lock", t), pressed: y },
          { label: "Unlock", act: vt("lock", "unlock", t), pressed: i.state === "unlocked" },
          Ot(t, Lm) && { label: "Open", act: vt("lock", "open", t), pressed: i.state === "open" }
        ])
      ] };
    }
    if (u === "alarm_control_panel") {
      const y = i.state === "disarmed";
      return { on: !y, tone: i.state === "triggered" ? "alarm" : "blue", button: { act: vt("alarm_control_panel", y ? "alarm_arm_away" : "alarm_disarm", t), label: y ? "Arm " + Pe(t) + ", away" : "Disarm " + Pe(t) }, parts: ["controls"], sections: [
        We("tfSeg", Pe(t), _m.filter(([, , , _]) => !_ || Ot(t, _)).map(([_, P, ue]) => ({ label: P, act: vt("alarm_control_panel", ue, t), pressed: i.state === _ })))
      ] };
    }
    if (u === "valve") {
      const y = i.state === "open";
      return { on: y, tone: "blue", icon: "mdi:sprinkler-variant", button: f("valve", (y ? "Close " : "Open ") + Pe(t)), parts: ["controls"], sections: [
        We("tfSeg", Pe(t), [
          { label: "Open", act: vt("valve", "open_valve", t), pressed: y },
          { label: "Close", act: vt("valve", "close_valve", t), pressed: !y }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Pe(t) }, sections: [] };
  }
  const xn = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : ht(t)) + "°";
  function Qn(t) {
    const i = (Ce) => t.readings.find((Ve) => rt(Ve).device_class === Ce), l = i("temperature"), u = i("humidity"), f = (Ce) => {
      var Ve;
      return Number((Ve = v[Ce]) == null ? void 0 : Ve.state);
    }, I = (Ce) => t.actions.filter((Ve) => Ce.test(Ve)), y = t.lights.filter((Ce) => {
      var Ve;
      return ((Ve = v[Ce]) == null ? void 0 : Ve.state) === "on";
    }), _ = I(/^cover\./), P = _.filter((Ce) => {
      var Ve;
      return ((Ve = v[Ce]) == null ? void 0 : Ve.state) !== "closed";
    }), ue = [...new Set(_.map((Ce) => tl(v[Ce])))], $ = I(/^climate\./)[0], Z = I(/^humidifier\./)[0], me = I(/^media_player\./), qe = me.find((Ce) => {
      var Ve;
      return ((Ve = v[Ce]) == null ? void 0 : Ve.state) === "playing";
    }) || me.find((Ce) => {
      var Ve;
      return ((Ve = v[Ce]) == null ? void 0 : Ve.state) === "paused";
    }), Ye = t.plugs.filter((Ce) => {
      var Ve;
      return ((Ve = v[Ce]) == null ? void 0 : Ve.state) === "on";
    }), He = [];
    if (l && Number.isFinite(f(l)) && He.push({ key: "temp", id: l, kind: "reading", icon: Fa.temp, label: "Temperature", value: ht(f(l)) + "°" }), u && Number.isFinite(f(u)) && He.push({ key: "hum", id: u, kind: "reading", icon: Fa.hum, label: "Humidity", value: Math.round(f(u)) + "%" }), t.lights.length && He.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Fa.lights,
      label: "Lights",
      value: y.length ? y.length + " of " + t.lights.length + " on" : "All off",
      short: y.length ? y.length + " on" : "Off",
      on: y.length > 0,
      light: y.length ? Pn(y[0]) : "",
      acts: t.lights.map((Ce) => ["light", y.length ? "turn_off" : "turn_on", Ce]),
      aria: (y.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), _.length) {
      const Ce = ue.length === 1 ? wm[ue[0]] : "covers", Ve = Math.round(_.reduce((qt, rn) => qt + St(rn), 0) / _.length);
      He.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Fa.covers,
        label: Ct(Ce),
        value: Ve <= 0 ? "Closed" : Ve >= 100 ? "Open" : Ve + "% open",
        short: Ve <= 0 ? "Closed" : Ve + "%",
        on: P.length > 0,
        acts: _.map((qt) => ["cover", P.length ? "close_cover" : "open_cover", qt]),
        aria: (P.length ? "Close the " : "Open the ") + Ce + " in " + t.name
      });
    }
    if ($) {
      const Ce = rt($), Ve = v[$].state === "off";
      He.push({
        key: "climate",
        kind: "control",
        tone: Ce.hvac_action === "cooling" ? "cool" : "heat",
        icon: Fa.climate,
        label: Pe($),
        value: Ve ? "Off" : Ct(Ce.hvac_action || v[$].state) + " · " + xn(Ce.temperature),
        short: Ve ? "Off" : xn(Ce.temperature),
        on: !Ve,
        acts: [["climate", "toggle", $]],
        aria: "Turn " + Pe($) + (Ve ? " on" : " off")
      });
    }
    if (Z) {
      const Ce = v[Z].state === "on";
      He.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Fa.humidifier,
        label: Pe(Z),
        value: Ce ? "On · " + rt(Z).humidity + "%" : "Off",
        short: Ce ? rt(Z).humidity + "%" : "Off",
        on: Ce,
        acts: [["humidifier", "toggle", Z]],
        aria: "Turn " + Pe(Z) + (Ce ? " off" : " on")
      });
    }
    if (me.length) {
      const Ce = qe || me[0], Ve = v[Ce], qt = Ve.state === "playing";
      He.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Fa.media,
        label: Pe(Ce),
        value: It(Ce),
        short: qt ? "Playing" : Ve.state === "paused" ? "Paused" : Ct(Ve.state),
        on: qt,
        acts: [["media_player", Ve.state === "playing" || Ve.state === "paused" ? "media_play_pause" : "toggle", Ce]],
        aria: (qt ? "Pause " : "Play ") + Pe(Ce)
      });
    }
    return t.plugs.length && He.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Fa.plugs,
      label: "Plugs",
      value: Ye.length ? Ye.length + " of " + t.plugs.length + " on" : "All off",
      short: Ye.length ? Ye.length + " on" : "Off",
      on: Ye.length > 0,
      acts: t.plugs.map((Ce) => ["switch", Ye.length ? "turn_off" : "turn_on", Ce]),
      aria: (Ye.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((Ce) => He.push(rt(Ce).device_class === "moisture" ? { key: "alert:" + Ce, kind: "alert", icon: Fa.alert, label: "Water leak" } : { key: "note:" + Ce, kind: "note", icon: Fa.door, label: Pe(Ce) + " " + It(Ce).toLowerCase() })), He;
  }
  const go = (t, i) => {
    const l = (u) => t.actions.filter((f) => u.test(f));
    return {
      lights: t.lights,
      covers: l(/^cover\./),
      climate: l(/^climate\./).slice(0, 1),
      humidifier: l(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const u = l(/^media_player\./);
        return [u.find((f) => {
          var I;
          return ((I = v[f]) == null ? void 0 : I.state) === "playing";
        }) || u.find((f) => {
          var I;
          return ((I = v[f]) == null ? void 0 : I.state) === "paused";
        }) || u[0]].filter(Boolean);
      })()
    }[i] || [];
  }, ga = (t, i, l) => '<button class="' + i + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Hn(t.acts) + '" aria-label="' + de(t.aria) + '" aria-pressed="' + t.on + '">' + l + "</button>", dn = (t) => '<button class="pill" type="button" data-go="' + de(t.id) + '" aria-label="Go to ' + de(t.name) + '">Go</button>', Rt = (t) => t.filter((i) => i.kind === "alert" || i.kind === "note").map((i) => '<span class="sourceTag">' + de(i.label) + "</span>").join(" "), li = (t) => t.readings.find((i) => rt(i).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((i) => v[i]) || null, gn = (t, i) => {
    const l = Pe(i);
    return l.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Ct(l.slice(t.name.length + 1)) : l;
  };
  function Vi(t) {
    const i = v[t], l = rt(t), u = t.split(".")[0], f = Number(i.state);
    if (i.state === "unavailable") return { text: "Unavailable" };
    if (u === "sensor" && Number.isFinite(f)) {
      if (l.device_class === "temperature") return { text: xn(f) };
      const I = l.unit_of_measurement || "";
      return I === "%" ? { text: Math.round(f) + "%" } : { text: ht(f, Number.isInteger(f) ? 0 : 1), unit: I };
    }
    if (u === "climate" && (l.current_temperature ?? l.temperature) != null) return { text: xn(l.current_temperature ?? l.temperature) };
    if (u === "light") return { text: i.state !== "on" ? "Off" : je(t) ? Bn(i) + "%" : "On" };
    if (u === "cover") {
      const I = St(t);
      return { text: I <= 0 ? "Closed" : I >= 100 ? "Open" : I + "%" };
    }
    return u === "humidifier" ? { text: i.state === "on" ? l.humidity + "%" : "Off" } : u === "media_player" ? { text: i.state === "playing" ? "Playing" : i.state === "paused" ? "Paused" : Ct(i.state) } : { text: It(t) };
  }
  const hs = (t, i, l) => {
    const u = l.find((_) => _.key === "temp"), f = l.find((_) => _.key === "hum"), I = rt(i), y = v[i].state === "off";
    return i.startsWith("climate.") ? [gn(t, i), y ? "Off" : Ct(I.hvac_action || v[i].state) + (I.temperature != null ? " · " + xn(I.temperature) : ""), f && f.value + " humidity"].filter(Boolean).join(" · ") : [!(u && u.id === i) && gn(t, i), u && u.id !== i && u.value, f && f.id !== i && f.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Mr(t, i, l) {
    const u = l && Vi(l), f = l ? hs(t, l, i) : "", I = (_) => {
      const P = go(t, _.key);
      return P.length === 1 ? P[0] : "group:" + t.id + ":" + _.key;
    }, y = i.filter((_) => _.kind === "control").slice(0, 4).map((_) => '<div class="tfATile' + (_.on ? " on" : "") + '" data-tone="' + _.tone + '"' + (_.light ? ' data-light style="' + _.light + '"' : "") + ">" + ga(_, "tfIcon", _.icon) + '<button class="tfName" type="button" data-more="' + de(I(_)) + '" aria-label="' + de(t.name + " " + _.label.toLowerCase() + ", " + _.value + ". Open") + '"><span class="activityRowName">' + de(_.label) + '</span><span class="activityRowMeta">' + de(_.value) + "</span></button></div>");
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + de(t.name) + "</div>" + Rt(i) + "</div>" + dn(t) + "</div>" + (l ? '<button class="tfABig" type="button" data-more="' + de(l) + '" aria-label="' + de(Pe(l) + ", " + It(l) + ". More info") + '"><span class="tfABigMain' + (u.text.length > 7 ? " long" : "") + '">' + de(u.text) + (u.unit ? '<span class="tfABigUnit">' + de(u.unit) + "</span>" : "") + "</span>" + (f ? '<span class="tfABigSub">' + de(f) + "</span>" : "") + "</button>" : "") + (y.length ? '<div class="tfATiles">' + y.join("") + "</div>" : "");
  }
  function di(t) {
    const i = t.id === he, l = Qn(t), u = li(t), f = u && Vi(u), I = [...l.filter((y) => y.kind === "control"), ...l.filter((y) => y.kind !== "control" && y.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (i ? " active" : "") + '" data-area="' + de(t.id) + '" tabindex="0" aria-expanded="' + i + '" aria-label="' + de(t.name) + '"><div class="panelExpanded"' + (i ? "" : " inert") + ">" + Mr(t, l, u) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop"><span class="tfACMain">' + (f ? de(f.text + (f.unit ? " " + f.unit : "")) : "") + '</span><span class="tfACName">' + de(t.name) + '</span></div><span class="tfACTiles" aria-hidden="true">' + I.map((y) => '<span class="tfACTile"><span class="tfIcon' + (y.kind === "alert" ? " alert" : "") + '"' + (y.on && y.light ? ' data-light style="' + y.light + '"' : "") + ">" + y.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Ua = [];
  const Cr = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Ua.map(di).join("") + "</section></div>", zi = () => [
    { key: "home", name: "Home", ids: Le.homeVacuums },
    { key: "security", name: "Security", ids: [...Le.security.alarms, ...Le.security.locks] },
    ...Le.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Fo = (t, i, l) => t + " " + (t === 1 ? i : l), Ya = () => (S.favourites ?? oe.favorite_entities ?? []).filter((t) => v[t]);
  function fs(t = 8) {
    const i = Ya();
    if (oe.hide_suggested_entities) return i;
    if (!ae) {
      const u = Object.entries(re).sort((I, y) => y[1] - I[1]).map(([I]) => I), f = Le.rooms.flatMap((I) => I.actions);
      ae = [.../* @__PURE__ */ new Set([...Q, ...u, ...f.filter((I) => Tn(I).on), ...f])];
    }
    const l = (u) => v[u] && v[u].state !== "unavailable" && !i.includes(u);
    return [...i, ...ae.filter(l)].slice(0, Math.max(t, i.length));
  }
  const gs = (t) => {
    const i = Ya().includes(t);
    return '<button class="tfStar" type="button" data-star="' + de(t) + '" aria-pressed="' + i + '" aria-label="Favourite: ' + de(Pe(t)) + '">' + Tm(i) + "</button>";
  };
  function Oo(t, { area: i = !1, star: l = !1 } = {}) {
    var ue;
    const u = t.split(".")[0], f = is.includes(u) ? Tn(t) : null, I = f ? f.on : ["on", "open", "playing"].includes((ue = v[t]) == null ? void 0 : ue.state), y = f ? f.button : xm.includes(u) ? { act: vt(u, "toggle", t), label: "Turn " + Pe(t) + (I ? " off" : " on") } : u === "scene" || u === "script" ? { act: vt(u, "turn_on", t), label: "Run " + Pe(t) } : null, _ = It(t) + (i && Be.get(t) ? " · " + Be.get(t) : ""), P = (f == null ? void 0 : f.icon) || Sn(t);
    return '<div class="activityRow' + (y ? " tfPlug" : "") + (I ? " on" : "") + (l ? " tfPick" : "") + '" data-k="' + de((i ? "fav:" : "row:") + t) + '" data-tone="' + (u === "light" ? "light" : (f == null ? void 0 : f.tone) || "blue") + '"' + Ae(t) + ">" + (y && !l ? '<button class="tfIcon" type="button" data-act="' + y.act + '" aria-label="' + de(y.label) + '"' + Lt(t, P) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Lt(t, P) + "></div>") + '<button class="tfName" type="button" data-more="' + de(t) + '" aria-label="' + de(Pe(t) + ", " + _ + ". More info") + '"><span class="activityRowName">' + de(Pe(t)) + '</span><span class="activityRowMeta">' + de(_) + "</span></button>" + (l ? gs(t) : "") + "</div>";
  }
  const Wo = () => {
    var t;
    return v[(t = S.sources) == null ? void 0 : t.weather] ? S.sources.weather : v["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(v).find((i) => i.startsWith("weather."));
  };
  function vs() {
    var l;
    const t = (u) => Object.keys(v).filter((f) => f.startsWith("binary_sensor.") && u.includes(rt(f).device_class));
    return ((l = K.alert_entities) != null && l.length ? K.alert_entities : [...t(["moisture", "smoke", "gas"]).map((u) => ({ entity: u, severity: "alert" })), ...t(il).map((u) => ({ entity: u, severity: "warning" }))]).filter((u) => v[u.entity]).map((u) => ({ ...u, on: ["on", "open", "unlocked", "triggered", "problem"].includes(v[u.entity].state) }));
  }
  function Sr() {
    const t = Object.keys(al), i = /* @__PURE__ */ new Set(), l = [];
    return (oe.shortcuts || []).forEach((u) => {
      if (u.type === "summary") {
        if (!t.includes(u.key) || i.has(u.key)) return;
        i.add(u.key);
      }
      l.push(u);
    }), t.forEach((u) => {
      i.has(u) || l.push({ type: "summary", key: u });
    }), l;
  }
  function Aa() {
    var fe;
    const t = Le.rooms, i = Le.security, l = (pe, Ne) => pe.actions.filter((cn) => Ne.test(cn)), u = (pe) => t.map((Ne) => ({ name: Ne.name, ids: pe(Ne) })).filter((Ne) => Ne.ids.length), f = t.flatMap((pe) => pe.lights), I = f.filter((pe) => {
      var Ne;
      return ((Ne = v[pe]) == null ? void 0 : Ne.state) === "on";
    }).length, y = t.map((pe) => pe.readings.find((Ne) => rt(Ne).device_class === "temperature")).filter(Boolean).map((pe) => Number(v[pe].state)).filter(Number.isFinite), [_, P] = [ht(Math.min(...y)), ht(Math.max(...y))], ue = t.flatMap((pe) => l(pe, /^media_player\./)), $ = ue.filter((pe) => {
      var Ne;
      return ((Ne = v[pe]) == null ? void 0 : Ne.state) === "playing";
    }).length, Z = vs(), me = Z.filter((pe) => pe.severity === "warning" && pe.on).length, qe = i.locks.filter((pe) => {
      var Ne;
      return ["unlocked", "jammed", "open"].includes((Ne = v[pe]) == null ? void 0 : Ne.state);
    }).length, Ye = i.alarms.filter((pe) => {
      var Ne;
      return ((Ne = v[pe]) == null ? void 0 : Ne.state) === "disarmed";
    }).length, He = me ? Fo(me, "warning", "warnings") : null, Ce = qe ? qe + " unlocked" : Ye ? Ye + " disarmed" : He ? null : "All secure", Ve = Object.keys(v).filter((pe) => pe.startsWith("sensor.") && rt(pe).device_class === "battery").sort((pe, Ne) => Number(v[pe].state) - Number(v[Ne].state)), qt = [...Ve.filter((pe) => Number(v[pe].state) < 20), ...Le.vacuums.filter((pe) => rt(pe).battery_level < 20)], rn = t.flatMap((pe) => pe.plants.map((Ne) => Ne.id)).sort((pe, Ne) => {
      var cn, Yn;
      return (((cn = v[Ne]) == null ? void 0 : cn.state) === "problem") - (((Yn = v[pe]) == null ? void 0 : Yn.state) === "problem");
    }), ti = rn.filter((pe) => {
      var Ne;
      return ((Ne = v[pe]) == null ? void 0 : Ne.state) === "problem";
    }), yi = t.flatMap((pe) => pe.solar), Ta = yi.find((pe) => pe.endsWith("_power")), Gn = {
      light: f.length && { value: I ? I + " on" : "All off", groups: u((pe) => pe.lights) },
      climate: y.length && { value: _ === P ? _ + "°" : _ + " - " + P + "°", groups: u((pe) => [...pe.readings.filter((Ne) => ["temperature", "humidity"].includes(rt(Ne).device_class)), ...l(pe, /^(climate|humidifier)\./)]) },
      security: (i.alarms.length || i.locks.length) && { value: [He, Ce].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...i.alarms, ...i.locks] }, { name: "Doors and windows", ids: i.openings }].filter((pe) => pe.ids.length) },
      media_players: ue.length && { value: $ ? $ + " playing" : "No media playing", groups: u((pe) => l(pe, /^media_player\./)) },
      maintenance: (Ve.length || rn.length) && { value: [qt.length && Fo(qt.length, "low battery", "low batteries"), ti.length && Fo(ti.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: rn }, { name: "Batteries", ids: [...Le.vacuums, ...Ve] }].filter((pe) => pe.ids.length) },
      energy: Le.grid && { value: za(Number(((fe = v[Ta]) == null ? void 0 : fe.state) || 0) * 1e3 + Number(v[Le.grid].state)) + " now", groups: [{ name: "Energy", ids: [...yi, Le.grid] }] }
    }, xt = [], Un = Z.filter((pe) => pe.severity !== "warning" && pe.on);
    return Un.length && xt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Fo(Un.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Un.map((pe) => pe.entity) }] }), Sr().forEach((pe) => {
      pe.type !== "summary" ? xt.push({ key: "path:" + pe.path, name: pe.label || pe.path, icon: pe.icon || "mdi:link-variant", colour: "", value: "" }) : !pe.hidden && Gn[pe.key] && !(S.hiddenSums || []).includes(pe.key) && xt.push({ key: pe.key, ...al[pe.key], ...Gn[pe.key] });
    }), xt;
  }
  const Tr = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + de(t.key) + '" data-k="sum:' + de(t.key) + '" aria-label="' + de(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Lt(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + de(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + de(t.value) + "</div>" : "") + "</div></div>";
  function ci(t) {
    const i = Ya();
    S = { ...S, favourites: i.includes(t) ? i.filter((l) => l !== t) : [...i, t] }, Pt(), vn();
  }
  function qo(t) {
    document.querySelector("home-assistant") && (ye.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ji(t, i) {
    if (t.startsWith("path:")) {
      qo(t.slice(5));
      return;
    }
    if (t === "security") {
      Ko("security");
      return;
    }
    tr("summary:" + t, i);
  }
  async function bs() {
    const t = (y) => Promise.resolve().then(() => B(y)).catch(() => null), [i, l, u, f] = await Promise.all([
      t({ type: "frontend/get_user_data", key: zd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), I = (i == null ? void 0 : i.value) || {};
    S = { favourites: I.favourites ?? null, sources: I.sources, hiddenSums: I.hiddenSums, dash: I.dash }, oe = (l == null ? void 0 : l.value) || {}, K = (u == null ? void 0 : u.value) || {}, Q = Array.isArray(f == null ? void 0 : f.entities) ? f.entities : [], ae = null, Object.keys(v).length && vn();
  }
  let vo = null, Vo = 0, At = !1;
  const Lr = (t) => {
    const i = t.split(".")[0];
    return Am.includes(i) && (i !== "binary_sensor" || il.includes(rt(t).device_class));
  };
  async function ws() {
    var t;
    if (!(At || Date.now() - Vo < 30 * 1e3)) {
      At = !0, Vo = Date.now();
      try {
        const i = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(Lr), l = i.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: i }) : null;
        vo = Array.isArray(l) ? l.filter((u) => u.entity_id && u.state != null && u.when) : null;
      } catch {
        vo = null;
      }
      At = !1, vn();
    }
  }
  function _r() {
    const t = /* @__PURE__ */ new Map(), i = (u) => {
      if (!v[u.entity_id] || !Lr(u.entity_id) || !mi(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      const f = t.get(u.entity_id);
      (!f || u.when > f.when + 1) && t.set(u.entity_id, u);
    };
    (vo || []).forEach(i);
    const l = vo ? Vo / 1e3 - 5 : 0;
    return Object.keys(v).forEach((u) => {
      var y;
      const f = v[u], I = f.last_changed ? Date.parse(f.last_changed) / 1e3 : 0;
      I > l && i({ entity_id: u, state: f.state, when: I, context_user_id: (y = f.context) == null ? void 0 : y.user_id });
    }), [...t.values()].sort((u, f) => f.when - u.when).slice(0, Em);
  }
  function bo(t) {
    var u;
    const i = t.context_user_id && Object.keys(v).find((f) => f.startsWith("person.") && rt(f).user_id === t.context_user_id);
    if (i) return Pe(i);
    const l = (u = o()) == null ? void 0 : u.user;
    return l && t.context_user_id === l.id ? l.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function xs(t) {
    const i = t.entity_id.split(".")[0], l = String(t.state);
    return i === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[l] || Ct(l).toLowerCase() : i === "cover" || i === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[l] || Ct(l).toLowerCase() : i === "binary_sensor" ? l === "on" ? "opened" : "closed" : i === "climate" ? l === "off" ? "turned off" : "set to " + Ct(l).toLowerCase() : i === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[l] || Ct(l).toLowerCase() : i === "alarm_control_panel" ? (Yd[l] || Ct(l)).toLowerCase() : i === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[l] || Ct(l).toLowerCase() : l === "on" ? "turned on" : l === "off" ? "turned off" : Ct(l).toLowerCase();
  }
  function Nt(t) {
    const i = t.entity_id, l = Pe(i) + " " + xs(t), u = [bo(t), In(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + Lt(i, Sn(i)) + '></div><button class="tfName" type="button" data-more="' + de(i) + '" aria-label="' + de(l + ", " + u + ". More info") + '"><span class="activityRowName">' + de(l) + '</span><span class="activityRowMeta">' + de(u) + "</span></button></div>";
  }
  let Fn = null, Za = 0;
  const ys = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function ui() {
    var i;
    if (Date.now() - Za < 5 * 60 * 1e3) return;
    Za = Date.now();
    const t = [];
    try {
      const l = ((i = await B({ type: "energy/get_prefs" })) == null ? void 0 : i.energy_sources) || [], u = (f) => l.filter((I) => I.type === f).flatMap((I) => f === "grid" ? (I.flow_from || []).map((y) => y.stat_energy_from) : [I.stat_energy_from]).filter(Boolean);
      for (const [f, I, y] of [["electricity", "Electricity", u("grid")], ["solar", "Solar", u("solar")], ["gas", "Gas", u("gas")], ["water", "Water", u("water")]]) {
        if (!y.length) continue;
        const _ = await Promise.all(y.map((P) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: P, calendar: { period: "day" }, types: ["change"] })).then((ue) => Number(ue == null ? void 0 : ue.change) || 0, () => 0)));
        t.push({ key: f, name: I, id: y[0], value: _.reduce((P, ue) => P + ue, 0), unit: rt(y[0]).unit_of_measurement || (f === "gas" || f === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Fn = t, vn();
  }
  let va = null;
  function zo() {
    var I;
    const t = Fn != null && Fn.length ? Fn : ys.map(([y, _, P, ue]) => {
      const $ = "sensor.made_up_energy_" + y;
      return v[$] = { entity_id: $, state: String(P), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: _ + " today", unit_of_measurement: ue, state_class: "total_increasing" } }, { key: y, name: _, id: $, value: P, unit: ue };
    });
    Me.clear(), t.some((y) => y.id === va) || (va = t[0].id);
    const i = t.map((y) => {
      const _ = Number(y.value).toLocaleString(void 0, { maximumFractionDigits: y.value < 10 ? 2 : 1 }) + " " + y.unit, P = Dm[y.key], ue = y.id === va;
      return Me.set(y.id, { name: y.name, text: _, icon: P }), '<div class="activityRow tap' + (ue ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + de(y.id) + '" aria-pressed="' + ue + '" aria-label="' + de(y.name + ", " + _) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Lt("", P, y.name) + '></div><div><div class="activityRowName">' + de(y.name) + '</div><div class="activityRowMeta">' + de(_) + "</div></div></div>";
    }), l = t.find((y) => y.id === va), u = (((I = na().opts.energy) == null ? void 0 : I.graph) || "above") === "below", f = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + de(l.id) + '" role="img" aria-label="' + de(l.name) + ', last 24 hours"></svg></div>';
    return A("dash:energy", 0, "Energy today", i, f, null, "tfDashCard tfDash-energy" + (u ? "" : " graphAbove"));
  }
  function ba(t) {
    const i = E.querySelector(".tfDash-energy"), l = i == null ? void 0 : i.querySelector(".tfDashGraph svg");
    !l || t === va || (va = t, i.querySelectorAll("[data-energy-pick]").forEach((u) => {
      const f = u.dataset.energyPick === t;
      u.classList.toggle("picked", f), u.setAttribute("aria-pressed", String(f));
    }), l.dataset.graph = t, l.dataset.drawn = "", it.set("dash:energy", zo()), bi(!0));
  }
  function Ea(t) {
    var f;
    if ((f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [i, l] = t.querySelectorAll("path");
    if (!(l != null && l.getTotalLength)) return;
    const u = l.getTotalLength();
    l.animate([{ strokeDasharray: u, strokeDashoffset: u }, { strokeDasharray: u, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), i == null || i.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let pi = null, wa = 0;
  const mi = (t) => !t.startsWith("light.") || Rm.includes((Be.get(t) || "").toLowerCase()), jn = () => Math.max(2, xo((E == null ? void 0 : E.clientWidth) || 0).n);
  function Ar(t) {
    if (!pi) {
      const l = (u) => {
        var f;
        return (((f = v[u]) == null ? void 0 : f.state) === "on" ? 1e6 : 0) + (re[u] || 0);
      };
      pi = {
        lights: Le.rooms.flatMap((u) => u.lights).filter((u) => {
          var f;
          return mi(u) && ((f = v[u]) == null ? void 0 : f.state) !== "unavailable";
        }).sort((u, f) => l(f) - l(u) || Pe(u).localeCompare(Pe(f))),
        climates: Le.rooms.flatMap((u) => u.actions.filter((f) => f.startsWith("climate.")))
      };
    }
    const i = pi.climates.filter((l) => v[l]).slice(0, t > 3 ? 2 : 1);
    return [...pi.lights.filter((l) => v[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const Er = (t, i, l, u) => (f) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + i + '" aria-label="' + l + '">' + (u ? '<div class="activityHeader"><div class="activityTitle">' + l + "</div></div>" : "") + '<div class="activityRows">' + f + "</div></section>";
  function Gi(t, i) {
    var I, y;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + de(((y = (I = o()) == null ? void 0 : I.config) == null ? void 0 : y.location_name) || "Home") + "</h1>" }), i.length && t.push({ key: "sums", wrap: (_) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Er("tfDash-bar", "sums-bar", "Summaries", !1)(_).replace(" data-tf", "") + "</div>", tiles: i.map((_) => ({ key: "sum:" + _.key, html: Tr(_) })) }), Ua.length && t.push({ key: "areas", html: Cr(0) });
    const l = fs(Zd * 3).filter(mi).slice(0, Zd);
    l.length && t.push({ key: "favs", wrap: Er("tfDash-favs", "favs", "Favourites", !0), tiles: l.map((_) => ({ key: "fav:" + _, html: Oo(_, { area: !0 }) })) });
    const u = _r();
    t.push({ key: "dash:act", html: A("dash:act", 0, "Activity", u.length ? u.map(Nt) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: zo() });
    const f = jn();
    return wa = f, t.push({
      key: "dash:tiles",
      wrap: (_) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + _ + "</div>",
      tiles: Ar(f >= 3 ? f : f * 2).map((_) => ({ key: _, html: nn(_, !1, _.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), ws(), ui(), t;
  }
  const jo = 252, Ut = 16, ks = 230, Ka = 60, $a = Ka + Ut, xa = 5, Ms = 3, Go = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Ja = ["wx", "favs", "act", "energy", "avg"], Ui = { wx: xa, areas: xa, favs: xa, act: xa, energy: 4, avg: 4 }, hi = 3, Uo = 94, Xa = /* @__PURE__ */ new Set(), Qa = (t) => Go[t] || Pe(t), Yi = 409, ea = 128;
  let an = !1, on = null, ta = null, Da = !1, Ra = /* @__PURE__ */ new Map(), wo = 0, Na = 0;
  const Zi = ["title", "sums"], xo = (t) => {
    let i = Math.floor((t + Ut) / (jo + Ut)), l = jo;
    return i < 4 && t >= 4 * ks + 3 * Ut && (i = 4, l = Math.floor((t - 3 * Ut) / 4)), { n: Math.max(1, i), w: l };
  }, na = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...S.dash || {} });
  function eo(t) {
    S = { ...S, dash: t }, Pt();
  }
  function fi() {
    const t = (i) => E.querySelector(i);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Va.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Va.avg, 2],
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((i) => [i.dataset.k, i, 1])
    ].filter(([, i]) => i == null ? void 0 : i.isConnected).map(([i, l, u]) => ({ key: i, el: l, span: u }));
  }
  function aa() {
    var Un;
    if (!w || !E) return;
    const t = E.clientWidth, { n: i, w: l } = xo(t), u = m.classList.contains("tfDash") && i >= 2;
    m.classList.toggle("tfBoard", u), m.classList.toggle("tfEditing", u && an);
    const f = c("dashEditNav");
    f && (f.hidden = !u, f.classList.toggle("active", an), f.setAttribute("aria-pressed", String(an)), f.setAttribute("aria-label", an ? "Done editing" : "Edit the dashboard"), f.title = an ? "Done" : "Edit", f.innerHTML = an ? Sm : Ud);
    const I = u ? fi() : [];
    if (!u) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((fe) => {
        fe.classList.remove("tfBoardItem", "tfBoardHidden"), fe.style.left = fe.style.top = fe.style.width = fe.style.height = "";
      }), (Un = E.querySelector(".tfDash-act > .activityRows")) == null || Un.style.removeProperty("max-height"), to(!1);
      return;
    }
    E.style.setProperty("--peg-w", l + "px");
    const y = na(), _ = new Set(y.hidden), P = l + Ut, ue = (fe) => fe.span === "full" ? i : fe.span === "areas" ? Math.min(i, Math.ceil((Yi + Math.max(0, Ua.length - 1) * (ea + Ut) + Ut) / P)) : Math.min(i, y.spans[fe.key] ?? fe.span);
    I.forEach((fe) => fe.el.classList.toggle("tfBoardHidden", _.has(fe.key)));
    const $ = I.filter((fe) => !_.has(fe.key) && getComputedStyle(fe.el).display !== "none");
    let Z = 0;
    $.filter((fe) => Zi.includes(fe.key)).forEach((fe) => {
      fe.el.classList.add("tfBoardItem"), Object.assign(fe.el.style, { width: t + "px", height: "", left: "0px", top: Z + "px" });
      const pe = fe.key === "sums" && fe.el.querySelector(".tfDash-bar"), Ne = pe ? pe.querySelectorAll(".activityRow").length : 0;
      pe && (pe.style.maxWidth = "none");
      for (let cn = 1; pe && cn <= Ne && (pe.style.setProperty("--bar-cols", String(Math.ceil(Ne / cn))), !(pe.offsetWidth <= t)); cn++)
        ;
      pe && (pe.style.maxWidth = ""), Z += fe.el.offsetHeight + Ut;
    }), Na = Z;
    const me = $.filter((fe) => !Zi.includes(fe.key));
    me.forEach((fe) => {
      fe.cols = ue(fe), fe.el.classList.add("tfBoardItem"), fe.el.style.width = (fe.cols === i ? t : fe.cols * l + (fe.cols - 1) * Ut) + "px", fe.el.style.height = "", fe.rows = Ui[fe.key] ?? (fe.el.classList.contains("tfDac") ? Xa.has(fe.key) ? xa : hi : Math.max(1, Math.ceil((fe.el.offsetHeight + Ut - 6) / $a)));
    });
    const qe = /* @__PURE__ */ new Set(), Ye = (fe, pe, Ne, cn) => {
      for (let Yn = pe; Yn < pe + cn; Yn++) for (let ki = fe; ki < fe + Ne; ki++) if (qe.has(ki + "," + Yn)) return !1;
      return !0;
    }, He = /* @__PURE__ */ new Map(), Ce = (fe, pe, Ne) => {
      for (let cn = Ne; cn < Ne + fe.rows; cn++) for (let Yn = pe; Yn < pe + fe.cols; Yn++) qe.add(Yn + "," + cn);
      He.set(fe.key, { col: pe, row: Ne, cols: fe.cols, rows: fe.rows, x: fe.cols === i ? 0 : pe * P, y: Na + Ne * $a, w: fe.cols === i ? t : fe.cols * l + (fe.cols - 1) * Ut, h: fe.rows * $a - Ut });
    }, Ve = (fe, pe, Ne) => {
      for (pe = Math.max(0, Math.min(i - fe.cols, pe)), Ne = Math.max(0, Ne); !Ye(pe, Ne, fe.cols, fe.rows); ) Ne++;
      Ce(fe, pe, Ne);
    }, qt = (fe) => {
      for (let pe = 0; ; pe++) for (let Ne = 0; Ne <= i - fe.cols; Ne++) if (Ye(Ne, pe, fe.cols, fe.rows)) {
        Ce(fe, Ne, pe);
        return;
      }
    }, rn = on && me.find((fe) => fe.key === on.key);
    rn && Ve(rn, on.col, on.row);
    const ti = me.filter((fe) => fe !== rn);
    ti.filter((fe) => y.cells[fe.key]).sort((fe, pe) => y.cells[fe.key].row - y.cells[pe.key].row || y.cells[fe.key].col - y.cells[pe.key].col).forEach((fe) => Ve(fe, y.cells[fe.key].col, y.cells[fe.key].row)), ti.filter((fe) => !y.cells[fe.key]).forEach(qt), me.forEach((fe) => {
      const pe = He.get(fe.key);
      fe.el.style.height = pe.h + "px", fe.el.classList.contains("tfDac") && fe.el.style.setProperty("--tf-dac-pad", pe.h - Uo + "px"), fe !== rn && (fe.el.style.left = pe.x + "px", fe.el.style.top = pe.y + "px");
    }), Ra = He;
    const Ta = He.get("act"), Gn = Ta && E.querySelector(".tfDash-act > .activityRows");
    Gn && (Gn.style.maxHeight = Math.max(Ka, Math.floor((Ta.h - Gn.offsetTop - 10) / Ka) * Ka) + "px"), wo = Math.max(0, ...[...He.values()].map((fe) => fe.row + fe.rows));
    let xt = Na + wo * $a - Ut;
    xt = to(an, me, He, xt, i, l), E.style.height = xt + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), I.forEach((fe) => yo.observe(fe.el)), bi();
  }
  const $t = () => {
    Da || (Da = !0, requestAnimationFrame(() => {
      Da = !1, aa();
    }));
  }, yo = new ResizeObserver(() => {
    on || $t();
  });
  function to(t, i = [], l = /* @__PURE__ */ new Map(), u = 0, f = 1, I = jo) {
    E.querySelectorAll(".tfEditChips").forEach((Z) => {
      (!t || !Z.closest(".tfBoardItem")) && Z.remove();
    }), E.querySelectorAll(".tfBoardItem").forEach((Z) => [...Z.children].forEach((me) => {
      me.classList.contains("tfEditChips") || me.toggleAttribute("inert", t);
    }));
    let y = E.querySelector(".tfBoardCells"), _ = E.querySelector(".tfBoardLand"), P = E.querySelector(".tfBoardTray");
    if (!t)
      return y == null || y.remove(), _ == null || _.remove(), P == null || P.remove(), Ba(), u;
    const ue = wo + Ms;
    if (y || (y = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), y.setAttribute("aria-hidden", "true"), E.prepend(y)), y.style.top = Na + "px", y.dataset.size !== f + "x" + ue + "x" + I && (y.dataset.size = f + "x" + ue + "x" + I, y.style.gridTemplateColumns = "repeat(" + f + "," + I + "px)", y.innerHTML = "<i></i>".repeat(f * ue)), u = Math.max(u, Na + ue * $a - Ut), i.forEach((Z) => {
      const me = Z.el;
      !me || me.querySelector(":scope > .tfEditChips") || me.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + km + '</span><button class="tfEditChip" type="button" data-board-more="' + de(Z.key) + '" aria-label="' + de(Qa(Z.key)) + ' options" aria-haspopup="menu">' + Mm + "</button></div>");
    }), on && l.has(on.key)) {
      _ || (_ = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(_));
      const Z = l.get(on.key);
      Object.assign(_.style, { left: Z.x + "px", top: Z.y + "px", width: Z.w + "px", height: Z.h + "px" });
    } else _ == null || _.remove();
    const $ = na().hidden.filter((Z) => fi().some((me) => me.key === Z));
    return $.length ? (P || (P = Object.assign(document.createElement("div"), { className: "tfBoardTray" }), E.appendChild(P)), P.innerHTML = $.map((Z) => '<button class="pill" type="button" data-board-show="' + de(Z) + '">Show ' + de(Qa(Z)) + "</button>").join(""), Object.assign(P.style, { top: u + Ut + "px", left: "0px", width: E.clientWidth + "px" }), u + Ut + P.offsetHeight) : (P == null || P.remove(), u);
  }
  function Dr(t) {
    an = t, t || (on = null, Ba()), aa();
  }
  function Rr(t, i) {
    var $, Z;
    Ba();
    const l = Ra.get(t), { n: u } = xo(E.clientWidth), f = na(), I = f.spans[t] ?? 2;
    if (!l) return;
    const y = l.cols >= u, _ = (me, qe, Ye) => '<button type="button" role="menuitem" data-board-act="' + me + '"' + (Ye ? " disabled" : "") + ">" + qe + "</button>", P = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    P.setAttribute("role", "menu"), P.setAttribute("aria-label", Qa(t) + " options"), P.innerHTML = (Ja.includes(t) ? _("size", I === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? _("graph", ((($ = f.opts.energy) == null ? void 0 : $.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + _("left", "Move left", y || l.col === 0) + _("right", "Move right", y || l.col + l.cols >= u) + _("up", "Move up", l.row <= 0) + _("down", "Move down") + _("hide", "Hide"), E.appendChild(P);
    const ue = Math.min(l.x + l.w - P.offsetWidth, E.clientWidth - P.offsetWidth);
    Object.assign(P.style, { left: Math.max(0, ue) + "px", top: l.y + 28 + "px" }), ta = { key: t, menu: P, opener: i }, (Z = P.querySelector("button:not([disabled])")) == null || Z.focus();
  }
  function Ba(t) {
    if (!ta) return;
    const { menu: i, opener: l } = ta;
    ta = null, i.remove(), t && (l == null || l.focus());
  }
  const gi = () => Object.fromEntries([...Ra].map(([t, i]) => [t, { col: i.col, row: i.row }]));
  function vi(t, i) {
    var I, y;
    const l = na(), u = gi(), f = u[t] || { col: 0, row: 0 };
    i === "size" && (l.spans = { ...l.spans, [t]: (l.spans[t] ?? 2) === 1 ? 2 : 1 }), i === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((I = l.opts.energy) == null ? void 0 : I.graph) || "above") === "above" ? "below" : "above" } }), i === "left" && (u[t] = { ...f, col: f.col - 1 }), i === "right" && (u[t] = { ...f, col: f.col + 1 }), i === "up" && (u[t] = { ...f, row: f.row - 1 }), i === "down" && (u[t] = { ...f, row: f.row + 1 }), i === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(i) && (on = { key: t, col: u[t].col, row: u[t].row }), eo({ ...l, cells: u }), on && (aa(), on = null, eo({ ...na(), cells: gi() })), Ba(), i === "graph" && (it.delete("dash:energy"), vn()), aa(), i !== "hide" && ((y = E.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus());
  }
  function Nr(t) {
    const i = na();
    eo({ ...i, hidden: i.hidden.filter((l) => l !== t) }), aa();
  }
  function Yo(t) {
    if (!an || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfBoardTray")) return;
    const i = t.target.closest(".tfBoardItem"), l = i && fi().find((Z) => Z.el === i);
    if (!l || Zi.includes(l.key)) return;
    const u = Ra.get(l.key), { w: f } = xo(E.clientWidth);
    if (!u) return;
    t.preventDefault(), Ba();
    const I = t.clientX, y = t.clientY;
    let _ = !1, P = 0;
    const ue = (Z) => {
      const me = Z.clientX - I, qe = Z.clientY - y;
      if (!_) {
        if (Math.hypot(me, qe) < 4) return;
        _ = !0, on = { key: l.key, col: u.col, row: u.row }, i.classList.add("tfDragging");
      }
      i.style.transform = "translate(" + me + "px," + qe + "px)", on.col = Math.round((u.x + me) / (f + Ut)), on.row = Math.round((u.y + qe - Na) / $a), P || (P = requestAnimationFrame(() => {
        P = 0, aa();
      }));
    }, $ = () => {
      window.removeEventListener("pointermove", ue), window.removeEventListener("pointerup", $), window.removeEventListener("pointercancel", $), _ && (cancelAnimationFrame(P), aa(), i.classList.remove("tfDragging"), i.style.transform = "", on = null, eo({ ...na(), cells: gi() }), aa(), vn());
    };
    window.addEventListener("pointermove", ue), window.addEventListener("pointerup", $), window.addEventListener("pointercancel", $);
  }
  function bi(t = !1) {
    const i = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(i != null && i.clientWidth)) return;
    const l = i.dataset.graph + "@" + i.clientWidth + "x" + i.clientHeight;
    i.dataset.drawn !== l && (i.dataset.drawn = l, Jo(i.dataset.graph, i).then(() => {
      t && Ea(i);
    }));
  }
  function oa() {
    var _, P, ue;
    Le = qa.model(o()), v = Le.states, v[(_ = S.sources) == null ? void 0 : _.grid] && (Le.grid = S.sources.grid), v[(P = S.sources) == null ? void 0 : P.alarm] && (Le.security.alarms = [S.sources.alarm]), b.forEach(($, Z) => {
      const me = v[Z], qe = (me == null ? void 0 : me.attributes) || {};
      if (!me || Date.now() - $.at > 2 * 60 * 1e3) {
        b.delete(Z);
        return;
      }
      $.pos != null && me.state !== "opening" && me.state !== "closing" && Math.abs(St(Z) - $.pos) < 1 && delete $.pos, $.tilt != null && Math.abs((qe.current_tilt_position ?? -1) - $.tilt) < 1 && delete $.tilt, $.pos == null && $.tilt == null && b.delete(Z);
    });
    const t = [];
    let i = 0;
    const l = zi();
    Ua = l.filter(($) => $.room).map(($) => $.room), Ua.some(($) => $.id === he) || (he = ((ue = Ua[0]) == null ? void 0 : ue.id) || null);
    const u = Se === "weather" ? { key: "weather", name: "Weather" } : Se && l.find(($) => $.key === Se);
    if (u || (Se = null), m.classList.toggle("tfAreaOpen", !!u), m.classList.toggle("tfWeatherOpen", (u == null ? void 0 : u.key) === "weather"), m.classList.toggle("tfDash", !u), Be = /* @__PURE__ */ new Map(), Le.rooms.forEach(($) => [...$.actions, ...$.plugs, ...$.readings, ...$.openings, ...$.solar, ...$.plants.flatMap((Z) => [Z.id, ...Z.readings])].forEach((Z) => Be.set(Z, $.name))), !u) return Gi(t, Aa());
    if (t.push({ key: "areahead", html: Zo(u, ++i) }), u.key === "weather")
      return t.weather = ++i, t;
    const f = u.ids, I = u.room ? u.room.id : u.key, y = u.room;
    return y != null && y.solar.length && t.push({ key: "energy:" + y.id, html: O(y, ++i) }), y && (y.readings.length || y.plugs.length || y.power != null) && t.push({ key: "readings:" + y.id, html: H(y, ++i) }), y == null || y.plants.forEach(($) => t.push({ key: "plant:" + $.id, html: le($, ++i) })), f.length && t.push({ key: "block:" + I, order: ++i, tiles: f.map(($) => ({ key: $, html: nn($) })) }), u.key === "security" && t.push({ key: "openings", html: ve(++i) }), t;
  }
  const Zo = (t, i) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + i + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + dm + '</button><div class="settingsTitle">' + de(t.name) + "</div></div>";
  function Ko(t) {
    var i, l;
    Se = t, t.startsWith("room:") && (he = t.slice(5)), ya(), (i = n.getElementById("homeView")) == null || i.scrollIntoView({ block: "start" }), (l = E.querySelector("[data-area-back]")) == null || l.focus({ preventScroll: !0 });
  }
  function Ki() {
    var l;
    const t = Se;
    Se = null, ya();
    const i = t.startsWith("room:") ? E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Va.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    i == null || i.scrollIntoView({ block: "center" }), (l = (i == null ? void 0 : i.querySelector("[data-go]")) || i) == null || l.focus({ preventScroll: !0 });
  }
  const $i = (t) => t.wrap ? t.wrap(t.tiles.map((i) => i.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + de(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((i) => i.html).join("") + "</div></div>", Ji = (t) => t.map((i) => i.key + (i.tiles ? "(" + i.tiles.map((l) => l.key).join(",") + ")" : "")).join(";");
  function ya() {
    if (!w || !E) return;
    E.querySelectorAll("[data-tf]").forEach((l) => l.remove());
    const t = oa();
    it.clear();
    const i = document.createElement("div");
    i.innerHTML = t.map((l) => l.tiles ? $i(l) : l.html).join(""), t.forEach((l) => l.tiles ? l.tiles.forEach((u) => it.set(u.key, u.html)) : it.set(l.key, l.html)), tn = Ji(t), E.append(...i.children), dt(t.weather), pt(), yo.disconnect(), aa(), hn(E), Sa(E), zn(E), V(), W && Jo(W.id), ar(), So(), er(), requestAnimationFrame(F);
  }
  const Pa = (t) => {
    var l;
    const i = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return i && { label: i.getAttribute("aria-label"), act: (l = i.dataset) == null ? void 0 : l.act };
  }, Xi = (t, i) => {
    var l;
    i && ((l = i.label && t.querySelector('[aria-label="' + CSS.escape(i.label) + '"]') || i.act && t.querySelector('[data-act="' + CSS.escape(i.act) + '"]')) == null || l.focus());
  };
  function Br(t, i) {
    const l = document.createElement("div");
    l.innerHTML = i;
    const u = l.firstElementChild, f = Pa(t);
    t.replaceWith(u), hn(u), Sa(u), zn(u), Xi(u, f);
  }
  function vn() {
    if (!w || !E || on) return;
    if (!E.querySelector("[data-tf]")) {
      ya();
      return;
    }
    const t = oa();
    if (Ji(t) !== tn) {
      ya();
      return;
    }
    const i = (l) => [...Oe.keys()].some((u) => {
      const f = u.slice(u.indexOf("|") + 1);
      return l === f || l.endsWith(":" + f);
    });
    t.forEach((l) => (l.tiles || [l]).forEach((u) => {
      if (it.get(u.key) === u.html || i(u.key)) return;
      const f = E.querySelector('[data-k="' + CSS.escape(u.key) + '"]');
      if (f) {
        if (it.set(u.key, u.html), W && W.key === u.key && f.querySelector(".tfOpen")) {
          f.querySelector(".tfOpen .activityRowMeta").textContent = Ga(W.id);
          return;
        }
        Br(f, u.html), W && W.key === u.key && Jo(W.id), u.key.startsWith("energy:") && ar();
      }
    })), So(), er(), ft(), V(), bn == null || bn.update(), mn == null || mn.forEach((l) => l.update()), m.classList.contains("tfDash") && $t(), requestAnimationFrame(F);
  }
  const no = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Ct(t.color_mode)]],
    climate: (t) => [["Current temperature", ht(t.current_temperature) + " °C"], ["Target", ht(t.temperature) + " °C"], ["Action", Ct(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Ct(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Ct(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", ht(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Ct(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, ko = (t) => {
    var l;
    const i = (((l = no[t.split(".")[0]]) == null ? void 0 : l.call(no, rt(t))) || []).filter(([, u]) => u != null && u !== "");
    return i.length ? '<div class="tfMoreRows">' + i.map(([u, f]) => '<div class="tfMoreRow"><span>' + de(u) + "</span><span>" + de(f) + "</span></div>").join("") + "</div>" : "";
  }, ka = (t) => Bi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Mo(t, i = {}, l = !1) {
    return '<div class="tfMoreList">' + t.map((u) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + de(u.name) + '</div><div class="tfMoreTiles' + (l ? " single" : "") + '">' + u.ids.map((f) => Oo(f, i)).join("") + "</div></div>").join("") + "</div>";
  }
  const ct = document.createElement("div");
  ct.className = "tfMoreBackdrop", ct.hidden = !0, m.appendChild(ct);
  function ao() {
    const t = ct.querySelector(".tfMorePair"), i = ct.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - i.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ao, { passive: !0 }), w && _a();
  let Ln = [];
  const Ma = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Pr(t) {
    const i = (_, P = "") => '<div class="tfMoreHead">' + (g != null && g.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + nl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + de(_) + "</div>" + P + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + cm + "</button></div>", l = (_, P) => '<div class="tfMoreNow"><div class="tfMoreState">' + de(_) + "</div>" + (P ? '<div class="tfMoreSub">' + de(P) + "</div>" : "") + "</div>", u = Mo;
    if (t === "favourites") {
      const _ = Ya(), P = new Set(_), ue = [{ name: "Starred", ids: _ }, { name: "Home", ids: Le.homeVacuums }, { name: "Security", ids: [...Le.security.alarms, ...Le.security.locks] }, ...Le.rooms.map(($) => ({ name: $.name, ids: [...$.actions, ...$.plugs] }))].map(($, Z) => Z ? { ...$, ids: $.ids.filter((me) => !P.has(me)) } : $).filter(($) => $.ids.length);
      return [i("Favourites"), l(_.length ? _.length + " starred" : "None starred"), u(ue, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const _ = Aa().find((Z) => Z.key === t.slice(8));
      if (!_) return null;
      const P = _.key === "light" ? (_.groups || []).flatMap((Z) => Z.ids) : [], ue = P.some((Z) => {
        var me;
        return ((me = v[Z]) == null ? void 0 : me.state) === "on";
      }), $ = P.length ? '<button class="primary" type="button" data-acts="' + Hn(P.map((Z) => ["light", ue ? "turn_off" : "turn_on", Z])) + '">' + (ue ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(_.name), '<div class="tfMoreNowRow">' + l(_.value) + $ + "</div>", ...(_.groups || []).map((Z) => {
        const me = Z.ids.filter((Ye) => is.includes(Ye.split(".")[0])), qe = Z.ids.filter((Ye) => !me.includes(Ye));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + de(Z.name) + "</div>" + (me.length ? '<div class="tfMoreActions">' + me.map((Ye) => nn(Ye, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((Ye) => Oo(Ye, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, _, P] = t.split(":"), ue = Le.rooms.find((He) => He.id === _), $ = ue && Qn(ue).find((He) => He.key === P);
      if (!$) return null;
      const Z = go(ue, P), me = Z.filter((He) => is.includes(He.split(".")[0])), qe = Z.filter((He) => !me.includes(He)), Ye = $.acts ? '<button class="primary" type="button" data-acts="' + Hn($.acts) + '">' + ($.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(ue.name + " " + $.label.toLowerCase()), '<div class="tfMoreNowRow">' + l($.value) + Ye + "</div>", '<div class="tfMoreGroup">' + (me.length ? '<div class="tfMoreActions">' + me.map((He) => nn(He, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((He) => Oo(He, {})).join("") + "</div>" : "") + "</div>"];
    }
    const f = t.split(".")[0], I = v[t], y = is.includes(f) ? Tn(t) : { sections: [] };
    return [
      i(Pe(t)),
      l(It(t), I.last_changed && wn(Date.parse(I.last_changed))),
      f === "cover" && '<div data-cover-art="' + de(t) + '"></div>',
      ...y.sections.filter(Boolean),
      Ir(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(g != null && g.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Cm + "</button>"
    ].filter(Boolean);
  }
  const Ir = (t) => Ma(t) ? "" : ko(t) + ka(t);
  let Co = "";
  function ia(t) {
    var i;
    g && (g.details = t, So(), (i = ct.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || i.focus());
  }
  const Ca = (t) => {
    const i = v[t], l = St(t), u = Jn(t);
    return { kind: tl(i), name: Pe(t), text: It(t), pos: l, target: Math.abs(u - l) > 0.5 ? u : null, moving: i.state === "opening" || i.state === "closing", tilt: Wt(t) ?? 100, canSet: Ot(t, Vd) };
  };
  function Sa(t) {
    t.querySelectorAll("[data-cover-art]").forEach((i) => {
      const l = i.dataset.coverArt, u = i.dataset.artKey || "more:" + l;
      let f = M.get(u);
      f || (f = lm({ onMove: (I) => Qo(l, I), onSet: (I) => {
        Qo(l, I), io("pos", l);
      } }), f.coverId = l, M.set(u, f)), i.replaceWith(f.el), f.update(Ca(l));
    });
  }
  const oo = (t) => [...M.values()].filter((i) => i.coverId === t), Qi = () => M.forEach((t) => {
    v[t.coverId] && t.update(Ca(t.coverId));
  }), er = () => {
    M.forEach((t, i) => {
      t.el.isConnected || (t.destroy(), M.delete(i));
    }), Qi();
  };
  function So() {
    var I, y;
    if (!g || !(Ma(g.id) || v[g.id])) {
      ct.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((_) => _.endsWith("|" + g.id))) {
      Qi();
      return;
    }
    const t = Pr(g.id), i = ct.querySelector(".tfMore");
    if (!t) {
      Ia();
      return;
    }
    const l = Pa(ct), u = Ir(g.id), f = g.id.startsWith("summary:") || g.id.startsWith("group:");
    if (ct.hidden || !i || t.length !== Ln.length || i.classList.contains("wide") !== f)
      ct.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (f ? " wide" : "") + '">' + t.join("") + "</section>" + (u ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + nl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + u + "</div></div></aside>" : "") + "</div>", Co = u, ct.hidden = !1, ao(), Sa(ct), zn(ct), hn(ct), Xi(ct, l), ct.contains(n.activeElement) || (I = ct.querySelector("[data-more-close]")) == null || I.focus();
    else {
      if (t.forEach((_, P) => {
        var Z, me;
        if (_ === Ln[P] || _.includes("data-cover-art") || i.children[P].contains((me = (Z = n.activeElement) == null ? void 0 : Z.matches) != null && me.call(Z, "input,select") ? n.activeElement : null) || [...Oe.keys()].some((qe) => i.children[P].querySelector('[data-drag="' + CSS.escape(qe) + '"]'))) return;
        const ue = document.createElement("div");
        ue.innerHTML = _;
        const $ = ue.firstElementChild;
        i.children[P].replaceWith($), hn($), zn($);
      }), u !== Co) {
        const _ = ct.querySelector(".tfMoreSideBody");
        _ && (_.innerHTML = u), Co = u;
      }
      ct.contains(n.activeElement) || Xi(ct, l);
    }
    (y = ct.querySelector(".tfMorePair")) == null || y.classList.toggle("details", !!(g.details && u)), Ln = t, Qi();
  }
  setInterval(() => {
    g && So();
  }, 15 * 1e3);
  function tr(t, i) {
    const l = !!(g && i && ct.contains(i));
    g = { id: t, opener: l ? g.opener : i, back: l ? g : null }, $o();
  }
  function $o() {
    Ln = [], ct.hidden = !0, M.forEach((t, i) => {
      i !== g.id && ct.contains(t.el) && (t.destroy(), M.delete(i));
    }), So();
  }
  function Ia() {
    var i, l, u, f, I, y;
    const t = g == null ? void 0 : g.opener;
    g = null, M.forEach((_, P) => {
      ct.contains(_.el) && (_.destroy(), M.delete(P));
    }), Kt.forEach((_, P) => {
      P.startsWith("more:") && Kt.delete(P);
    }), ct.hidden = !0, ct.innerHTML = "", t != null && t.isConnected ? t.focus() : (i = t == null ? void 0 : t.dataset) != null && i.more ? (l = E.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus() : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = E.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus() : (I = t == null ? void 0 : t.hasAttribute) != null && I.call(t, "data-favs-edit") && ((y = E.querySelector("[data-favs-edit]")) == null || y.focus());
  }
  function ra(t, i, l, u = {}) {
    const f = i.map((Ce) => Ce[1]), I = u.zero ? 0 : Math.min(...f), y = Math.max(...f), _ = Math.max(120, t.clientWidth || 260), P = Math.max(60, t.clientHeight || 130), ue = 8, $ = P - 20, Z = Date.now() - 24 * 3600 * 1e3, me = 24 * 3600 * 1e3, qe = (Ce) => Math.max(0, Math.min(_, (Ce - Z) / me * _)), Ye = (Ce) => y === I ? (ue + $) / 2 : $ - (Ce - I) / (y - I) * ($ - ue);
    let He = "M" + qe(i[0][0]).toFixed(1) + " " + Ye(i[0][1]).toFixed(1);
    for (let Ce = 1; Ce < i.length; Ce++) He += u.smooth ? "L" + qe(i[Ce][0]).toFixed(1) + " " + Ye(i[Ce][1]).toFixed(1) : "H" + qe(i[Ce][0]).toFixed(1) + "V" + Ye(i[Ce][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + _ + " " + P), t.setAttribute("aria-label", l), t.innerHTML = '<path d="' + He + "V" + $ + "H" + qe(i[0][0]).toFixed(1) + 'Z" fill="' + (u.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + He + '" fill="none" stroke="' + (u.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (P - 4) + '">24 h ago</text><text x="' + _ + '" y="' + (P - 4) + '" text-anchor="end">Now</text>';
  }
  function nr(t) {
    var u;
    const i = Number((u = v[t]) == null ? void 0 : u.state), l = Date.now();
    if (rt(t).state_class === "total_increasing") {
      const f = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), I = Math.max(1, l - f);
      return [...Array(49)].map((y, _) => f + I * _ / 48).map((y) => [y, Math.round(i * Math.pow((y - f) / I, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((f, I) => [l - (48 - I) * 30 * 60 * 1e3, Math.round(i * (0.96 + 0.04 * Math.sin(I / 6)) * 10) / 10]);
  }
  async function Jo(t, i) {
    var qe, Ye;
    let l = ye.get(t);
    if (t.endsWith("_solar_power")) l = { at: Date.now(), points: fd() };
    else if (Bi(t)) l = { at: Date.now(), points: nr(t) };
    else if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const He = new Date(Date.now() - 864e5).toISOString(), Ce = await B({ type: "history/history_during_period", start_time: He, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Ve = ((Ce == null ? void 0 : Ce[t]) || []).map((qt) => [qt.lu != null ? qt.lu * 1e3 : Date.parse(qt.last_updated || qt.last_changed), Number(qt.s ?? qt.state)]).filter(([qt, rn]) => Number.isFinite(qt) && Number.isFinite(rn));
        l = { at: Date.now(), points: Ve };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      ye.set(t, l);
    }
    const u = i || E.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!u) return;
    const f = v[t], I = ((qe = f == null ? void 0 : f.attributes) == null ? void 0 : qe.unit_of_measurement) || "", y = l.points.slice(), _ = Number(f == null ? void 0 : f.state);
    if (Number.isFinite(_) && !t.endsWith("_solar_power") && y.push([Date.now(), _]), y.length < 2) {
      u.setAttribute("aria-label", Pe(t) + ": no history for the last 24 hours"), u.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const P = y.map((He) => He[1]), ue = Math.min(...P), $ = Math.max(...P), Z = (He) => He.toLocaleString(void 0, { maximumFractionDigits: Math.abs(He) >= 100 ? 0 : 1 }), me = ((Ye = f == null ? void 0 : f.attributes) == null ? void 0 : Ye.state_class) === "total_increasing";
    ra(u, y, Pe(t) + ", last 24 hours: " + (me ? "+" + Z(P[P.length - 1] - P[0]) : ue === $ ? Z(ue) : Z(ue) + " to " + Z($)) + (I ? " " + I : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function ar() {
    const t = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!t) return;
    const i = fd();
    ra(t, i, "Solar, last 24 hours: up to " + ht(Math.max(...i.map((l) => l[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function To(t, i) {
    const l = i.entity_id, u = b.get(l) || {}, f = { open_cover: 100, close_cover: 0, set_cover_position: i.position, toggle: St(l) > 0 ? 0 : 100 }[t], I = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: i.tilt_position }[t];
    f != null && (u.pos = f), I != null && (u.tilt = I), t === "stop_cover" && (delete u.pos, delete u.tilt), t === "stop_cover_tilt" && delete u.tilt, u.at = Date.now(), b.set(l, u);
  }
  function Xo(t, i, l, u) {
    const f = { entity_id: l, ...u || {} };
    return t === "cover" && To(i, f), re[l] = (re[l] || 0) + 1, No.set(jd, JSON.stringify(re)), qa.call(t, i, f) ? Promise.resolve() : Promise.resolve(ie(t, i, f));
  }
  function Hr(t) {
    const [i, l, u, f] = t.split("|");
    Xo(i, l, u, f ? JSON.parse(f) : null).catch(() => {
    });
  }
  function Qo(t, i) {
    Oe.set("pos|" + t, i), it.delete(t), Ln = Ln.map(() => ""), [E, ct].forEach((u) => u.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((f) => et(f, i)));
    const l = E.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (l && (l.textContent = Math.round(i) + "%"), (g == null ? void 0 : g.id) === t) {
      const u = ct.querySelector(".tfMoreState"), f = ct.querySelector(".tfMoreSub");
      u && (u.textContent = Math.round(i) + "%", u.classList.add("live")), f && (f.textContent = "Currently " + St(t) + "%");
    }
    oo(t).forEach((u) => u.update(Ca(t)));
  }
  const Cs = (t, i) => {
    const l = t.shiftKey ? 10 : 1, u = { ArrowUp: i + l, ArrowRight: i + l, ArrowDown: i - l, ArrowLeft: i - l, PageUp: i + 25, PageDown: i - 25, Home: 0, End: 100 }[t.key];
    return u == null ? null : Math.max(0, Math.min(100, Math.round(u)));
  };
  function wi(t, i) {
    var He;
    const l = t.dataset.blocks;
    (He = t.setPointerCapture) == null || He.call(t, i.pointerId);
    const u = (Ce) => {
      const Ve = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (Ce.clientX - Ve.left) / Ve.width * 100));
    }, f = u(i), I = i.clientX;
    let y = !1, _ = Jn(l), P = f, ue = 0;
    const $ = () => {
      _ = Math.abs(P - _) < 0.2 ? P : _ + (P - _) * 0.14, Qo(l, _), ue = requestAnimationFrame($);
    }, Z = () => {
      y || (y = !0, t.classList.add("fine"), ue = requestAnimationFrame($));
    }, me = setTimeout(Z, 350), qe = (Ce) => {
      P = u(Ce), Math.abs(Ce.clientX - I) > 6 && (clearTimeout(me), Z());
    }, Ye = () => {
      clearTimeout(me), cancelAnimationFrame(ue), t.removeEventListener("pointermove", qe), t.removeEventListener("pointerup", Ye), t.removeEventListener("pointercancel", Ye), t.classList.remove("fine"), Qo(l, y ? Math.round(_) : (Math.min(3, Math.floor(f / 25)) + 1) * 25), io("pos", l);
    };
    t.addEventListener("pointermove", qe), t.addEventListener("pointerup", Ye), t.addEventListener("pointercancel", Ye);
  }
  function yn(t) {
    var f;
    const [i, l] = t.dataset.open.split("|"), u = t.closest(".tfCard");
    W = { key: i, id: l, h: u ? Math.round(u.getBoundingClientRect().height) : 0 }, it.delete(i), vn(), (f = E.querySelector(".tfOpen [data-close]")) == null || f.focus();
  }
  function kn(t) {
    var i;
    he = t.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((l) => {
      var f;
      const u = l === t;
      l.classList.toggle("active", u), l.setAttribute("aria-expanded", String(u)), (f = l.querySelector(".panelExpanded")) == null || f.toggleAttribute("inert", !u);
    }), it.set("areas", Cr(((i = E.querySelector('[data-k="areas"]')) == null ? void 0 : i.style.order) || 1));
  }
  const or = {
    bright: { value: (t, i) => Math.round(i * 100), text: (t, i) => i ? i + "%" : "Off", send: (t, i) => i > 0 ? ["light", "turn_on", { brightness_pct: i }] : ["light", "turn_off", {}] },
    ct: { value: (t, i) => {
      const [l, u] = jt(t);
      return Math.round(l + i * (u - l));
    }, text: (t, i) => i.toLocaleString() + "k", send: (t, i) => ["light", "turn_on", { color_temp_kelvin: i }] },
    hue: { value: (t, i) => Math.round(i * 360), text: () => "Colour", send: (t, i) => {
      var l;
      return ["light", "turn_on", { hs_color: [i, Math.max(60, ((l = rt(t).hs_color) == null ? void 0 : l[1]) || 100)] }];
    } },
    pos: { value: (t, i) => Math.round(i * 100), text: (t, i) => Math.round(i) + "%", send: (t, i) => ["cover", "set_cover_position", { position: Math.round(i) }] },
    tilt: { value: (t, i) => Math.round(i * 100), text: (t, i) => "Tilt " + i + "%", send: (t, i) => ["cover", "set_cover_tilt_position", { tilt_position: i }] },
    vol: { value: (t, i) => Math.round(i * 100) / 100, text: (t, i) => Math.round(i * 100) + "%", send: (t, i) => ["media_player", "volume_set", { volume_level: i }] }
  };
  function ir(t, i, l, u) {
    var P;
    const f = or[i].value(l, u);
    Oe.set(i + "|" + l, f);
    const I = Math.round(u * 100) + "%", y = t.querySelector("i");
    if (i === "tilt") {
      y.style.width = "calc((100% - 6px) * " + u + ")";
      const [ue, $] = t.querySelectorAll("span");
      ue.classList.toggle("lit", u > 0.08), $.classList.toggle("lit", u > 0.92), it.delete(l), Ln = Ln.map(() => ""), oo(l).forEach((Z) => Z.update(Ca(l)));
    } else if (y) y.style.width = I;
    else {
      let ue = t.querySelector("b");
      ue || (ue = document.createElement("b"), t.appendChild(ue)), ue.style.left = I;
    }
    t.setAttribute("aria-valuenow", String(Math.round(u * 100)));
    const _ = (P = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : P.querySelector(".tfName .activityRowMeta, .tfMoreState");
    _ && (_.textContent = or[i].text(l, f));
  }
  function io(t, i) {
    const l = Oe.get(t + "|" + i), [u, f, I] = or[t].send(i, l), y = () => setTimeout(() => {
      Oe.delete(t + "|" + i), vn();
    }, 1500);
    Xo(u, f, i, I).then(y, y);
  }
  function xi(t) {
    t.addEventListener("click", (i) => {
      var u;
      const l = i.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel");
      if (ta && !i.target.closest(".tfBoardMenu,[data-board-more]") && Ba(), !(!l || !t.contains(l) || l.disabled))
        if (l.dataset.boardMore)
          (ta == null ? void 0 : ta.key) === l.dataset.boardMore ? Ba(!0) : Rr(l.dataset.boardMore, l);
        else if (l.dataset.boardAct) vi(ta.key, l.dataset.boardAct);
        else if (l.dataset.boardShow) Nr(l.dataset.boardShow);
        else if (l.dataset.energyPick) ba(l.dataset.energyPick);
        else if (l.dataset.act) Hr(l.dataset.act);
        else if (l.hasAttribute("data-details")) ia(!(g != null && g.details));
        else if (l.hasAttribute("data-details-close")) ia(!1);
        else if (l.dataset.summary) ji(l.dataset.summary, l);
        else if (l.dataset.star) ci(l.dataset.star);
        else if (l.hasAttribute("data-more-back"))
          g = g.back, $o();
        else if (l.hasAttribute("data-favs-edit")) tr("favourites", l);
        else if (l.dataset.acts) JSON.parse(l.dataset.acts).forEach(([f, I, y, _]) => Xo(f, I, y, _).catch(() => {
        }));
        else if (l.dataset.more) tr(l.dataset.more, l);
        else if (l.hasAttribute("data-more-close")) Ia();
        else if (l.dataset.go) Ko("room:" + l.dataset.go);
        else if (l.hasAttribute("data-area-back")) Ki();
        else if (l.dataset.open) yn(l);
        else if (l.hasAttribute("data-close")) {
          const f = W;
          W = null, it.delete(f.key), vn(), (u = E.querySelector('[data-open="' + CSS.escape(f.key + "|" + f.id) + '"]')) == null || u.focus();
        } else l.classList.contains("tfAreaPanel") && !l.classList.contains("active") && kn(l);
    }), t.addEventListener("keydown", (i) => {
      var u, f, I, y, _, P, ue;
      const l = i.target;
      if ((u = l.dataset) != null && u.open && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), yn(l)), (f = l.dataset) != null && f.energyPick && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), ba(l.dataset.energyPick)), (I = l.classList) != null && I.contains("tfAreaPanel") && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), kn(l)), (y = l.dataset) != null && y.summary && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), ji(l.dataset.summary, l)), i.key === "Escape" && ta && t === E) {
        i.preventDefault(), Ba(!0);
        return;
      }
      if (i.key === "Escape" && an && t === E) {
        i.preventDefault(), Dr(!1), (_ = c("dashEditNav")) == null || _.focus();
        return;
      }
      if (i.key === "Escape" && Se && t === E && (i.preventDefault(), Ki()), (P = l.dataset) != null && P.blocks) {
        const $ = l.dataset.blocks, Z = Cs(i, Math.round(Jn($)));
        if (Z == null) return;
        i.preventDefault(), Qo($, Z), clearTimeout(k.get($)), k.set($, setTimeout(() => io("pos", $), 500));
        return;
      }
      if ((ue = l.dataset) != null && ue.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(i.key)) {
        i.preventDefault();
        const [$, Z] = l.dataset.drag.split("|"), me = Number(l.getAttribute("aria-valuenow")) / 100, qe = i.key === "Home" ? 0 : i.key === "End" ? 1 : Math.max(0, Math.min(1, me + (i.key === "ArrowLeft" || i.key === "ArrowDown" ? -0.05 : 0.05)));
        ir(l, $, Z, qe), io($, Z);
      }
    }), t.addEventListener("pointerdown", (i) => {
      var $;
      const l = i.target.closest("[data-blocks]");
      if (l && i.button === 0) {
        i.preventDefault(), wi(l, i);
        return;
      }
      const u = i.target.closest("[data-drag]");
      if (!u) return;
      const [f, I] = u.dataset.drag.split("|");
      if (f === "bright" && !je(I)) {
        Hr(vt("light", "toggle", I));
        return;
      }
      i.preventDefault(), ($ = u.setPointerCapture) == null || $.call(u, i.pointerId);
      const y = f === "tilt" ? 3 : 0, _ = (Z) => {
        const me = u.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Z.clientX - me.left - y) / (me.width - y * 2)));
      };
      ir(u, f, I, _(i));
      const P = (Z) => ir(u, f, I, _(Z)), ue = () => {
        u.removeEventListener("pointermove", P), u.removeEventListener("pointerup", ue), u.removeEventListener("pointercancel", ue), io(f, I);
      };
      u.addEventListener("pointermove", P), u.addEventListener("pointerup", ue), u.addEventListener("pointercancel", ue);
    });
  }
  return E && w && (bs(), xi(E), xi(ct), ct.addEventListener("click", (t) => {
    t.target === ct && Ia();
  }), (ei = n.getElementById("homeNav")) == null || ei.addEventListener("click", () => {
    Se && Ki();
  }), (rr = n.querySelector(".bottomNav")) == null || rr.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ud + "</button>"), (sr = c("dashEditNav")) == null || sr.addEventListener("click", () => Dr(!an)), E.addEventListener("pointerdown", Yo), E.addEventListener("hass-action", (t) => {
    var u, f;
    const i = (f = (u = t.target).closest) == null ? void 0 : f.call(u, ".tfDac"), l = i == null ? void 0 : i.dataset.k;
    !l || !i.dataset.dac.startsWith("dash:") || an || (t.stopPropagation(), Xa.has(l) ? Xa.delete(l) : Xa.add(l), aa());
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && jn() !== wa ? vn() : $t();
  }).observe(E), window.addEventListener("resize", $t, { passive: !0 }), ct.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), g != null && g.details ? ia(!1) : Ia());
  })), ne(), {
    update(t) {
      if (!w) return;
      const i = !Object.keys(v).length;
      v = t || {}, i ? ya() : vn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      at = !0, bn == null || bn.destroy(), bn = null, mn == null || mn.forEach((t) => t.destroy()), mn = null;
    },
    resume() {
      at = !1, !(!w || !(E != null && E.querySelector("[data-tf]"))) && (Vt.isConnected && dt(Vt.style.order), pt());
    }
  };
}
const Bm = "0.43.0", rl = "move_assistant", Pm = "move_assistant", Kd = "move_assistant_checkin_reminder";
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
    var c;
    const o = !this._hass;
    if (this._hass = s, o) {
      this._init();
      return;
    }
    this._app && s.states !== this._lastStates && (this._lastStates = s.states, this._app.updateStates(s.states), (c = this._test) == null || c.update(s.states));
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
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: rl
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Tu(s, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, h) => this._fire(m, h),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, h) => {
        var w, T;
        return (T = (w = this._hass) == null ? void 0 : w.connection) != null && T.subscribeMessage ? this._hass.connection.subscribeMessage(h, m) : Promise.reject(new Error("no connection"));
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
      (c) => {
        var h;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (h = this._app) == null || h.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: rl }
    ).catch(() => {
    });
  }
  _save(s) {
    this._pendingJson = JSON.stringify(s), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: rl,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(s, o = {}) {
    var c, m;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((m = this._hass) == null || m.callWS({
      type: "fire_event",
      event_type: Pm,
      event_data: { action: s, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(s) {
    const o = `config/automation/config/${Kd}`;
    if (!s) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (h) {
        if ((h == null ? void 0 : h.status_code) !== 404 && (h == null ? void 0 : h.status) !== 404) throw h;
      }
      return;
    }
    const c = (h) => `${h}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Kd,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: c(s.times.morning), id: "morning" },
        { trigger: "time", at: c(s.times.evening), id: "evening" }
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
    var c;
    const o = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    o && (o.textContent = s, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Hm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Bm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
