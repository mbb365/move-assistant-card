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
}, An = (n) => n < 0 ? 0 : n > 1 ? 1 : n, vd = (n, s, o) => n + (s - n) * o, vl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(o.slice(u, u + 2), 16) || 0);
}, su = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), bd = {}, Ht = (n, s, o) => {
  const u = n + s + o;
  return bd[u] || (bd[u] = su(vl(n).map((m, f) => m + (vl(s)[f] - m) * o)));
}, wd = {}, vs = (n) => wd[n] || (wd[n] = vl(n)), tl = (n, s, o, u) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let f = 0, w = 1, L = m;
  for (let v = 0; v < 18; v++)
    L = (f + w) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * o + L * L * L < m ? f = L : w = L;
  return 3 * (1 - L) * (1 - L) * L * s + 3 * (1 - L) * L * L * u + L * L * L;
}, lu = { std: tl(0.2, 0, 0, 1), acc: tl(0.3, 0, 1, 1), dec: tl(0, 0, 0, 1) };
function Ms(n, s) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || s ? "night" : "day");
}
function nc(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [Ht(s.clear[0], s.cloudy[0], 0.12), Ht(s.clear[1], s.cloudy[1], 0.12)], s.storm = [Ht(s.rain[0], "#000000", 0.22), Ht(s.rain[1], "#000000", 0.22)], s;
}
const bl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], wl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], xl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function yl(n, s = oo) {
  const o = { ...oo, ...s }, u = nc(o), m = String(n).split("/"), f = u[m[0]] ? m[0] : "clear", w = m[1] === "night", L = u[f][w ? 1 : 0], v = {
    night: w,
    clearness: f === "clear" ? 1 : f === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: bl.map(() => ({ o: 0 })),
    rain: wl.map(() => ({ o: 0, dy: -16 })),
    snow: xl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (se) => bl.map(() => ({ o: se }));
  return f === "clear" ? w ? (v.moon.o = 1, v.stars = B(1)) : v.sun.o = 1 : f === "partly" ? (v.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (v.moon = { x: 34, y: 33, d: 48, o: 1 }, v.stars = B(0.7)) : v.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : f === "cloudy" || f === "fog" ? (v.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? v.moon = { x: 40, y: 36, d: 40, o: 0 } : v.sun = { x: 40, y: 36, r: 20, o: 0 }) : (v.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? v.moon = { x: 38, y: 28, d: 36, o: 0 } : v.sun = { x: 38, y: 28, r: 18, o: 0 }, f === "snow" ? v.snow = xl.map(() => ({ o: 1, dy: 0 })) : v.rain = wl.map((se, ne) => ({ o: f === "storm" && ne === 1 ? 0 : 1, dy: 0 })), f === "storm" && (v.bolt = { o: 1, dy: 0 })), v;
}
const xd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function du(n, s, o, u = oo, m = !1) {
  const f = { ...oo, ...u }, w = (N, P) => N > 0.01 && P > 0.01 ? "stay" : N > 0.01 ? "leave" : P > 0.01 ? "enter" : "none", L = (N, P, G, X) => {
    const z = N[0] + P * X, V = N[1] - (G - 1 - P) * X;
    return lu[N[2]](An((o - z) / Math.max(1e-3, V - z)));
  }, v = (N, P, G, X = 0, z = 1, V = 0) => {
    const $ = w(N.o, P.o);
    if ($ === "none") return { ...P, o: 0 };
    const O = L(xd[G][$], X, z, V), Y = {};
    for (const ae in P) Y[ae] = m && $ !== "stay" && ae !== "o" ? $ === "leave" ? N[ae] : P[ae] : vd(N[ae], P[ae], O);
    return Y;
  }, B = L(xd.sky, 0, 1, 0);
  let se, ne;
  if (n.night !== s.night) {
    const N = Math.min(n.clearness, s.clearness), P = Ht(Ht(n.sky, s.sky, 0.5), f.dusk, 0.6 * N);
    se = B < 0.5 ? Ht(n.sky, P, B * 2) : Ht(P, s.sky, B * 2 - 1), ne = N > 0.5 ? [n.sky, f.dusk, s.sky] : [n.sky, s.sky];
  } else
    se = Ht(n.sky, s.sky, B), ne = [n.sky, s.sky];
  return {
    night: o < 0.5 ? n.night : s.night,
    clearness: vd(n.clearness, s.clearness, o),
    sky: se,
    skyStops: ne,
    skyT: B,
    sun: v(n.sun, s.sun, "body"),
    moon: v(n.moon, s.moon, "body"),
    cloud: v(n.cloud, s.cloud, "cloud"),
    stars: s.stars.map((N, P) => v(n.stars[P], N, "fx", P, s.stars.length, 0.05)),
    rain: s.rain.map((N, P) => v(n.rain[P], N, "fx", P, s.rain.length, 0.05)),
    snow: s.snow.map((N, P) => v(n.snow[P], N, "fx", P, s.snow.length, 0.05)),
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
], _n = (n, s) => (cu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, uu = 0, Sl = 1, Tl = 2, Ll = 3, _l = 4, Ln = 5, ji = 6, Bo = 7, Al = 8, ws = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), pu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), ac = (n, s, o) => {
  let u = !1;
  for (let m = 0, f = n.length - 1; m < n.length; f = m++) {
    const w = n[m], L = n[f];
    w[1] > o != L[1] > o && s < (L[0] - w[0]) * (o - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function oc(n, { size: s = 90, px: o = 2, oneBit: u = !1, colors: m = oo, ink: f = "#26221e", paper: w = "#fbf9f6", clock: L = 0, idle: v = !1 } = {}) {
  const B = { ...oo, ...m }, se = Math.sin, ne = Math.PI * 2, N = Math.max(6, Math.round(s / o)), P = N / 90, G = v ? Math.floor(L / 100) * 100 : 0, X = v ? se(ne * G / 3600) : 0, z = v ? 1.8 * se(ne * G / 6400) : 0, V = v ? 0.9 * se(ne * G / 4100) : 0, $ = v ? 0.8 * se(ne * G / 5200) : 0, O = G / 3400 % 1, Y = v && n.bolt.o > 0.5 && (O < 0.04 || O > 0.08 && O < 0.11), ae = new Array(N * N), A = new Uint8Array(N * N), q = (b, C, k, T, re) => {
    k == null || b < 0 || C < 0 || b >= N || C >= N || (T >= 1 || T > _n(b + 5, C + 3)) && (ae[C * N + b] = k, A[C * N + b] = re);
  }, ge = (b, C, k, T) => {
    for (let re = Math.max(0, Math.floor(C - k) - 1); re <= Math.min(N - 1, C + k + 1); re++) for (let J = Math.max(0, Math.floor(b - k) - 1); J <= Math.min(N - 1, b + k + 1); J++) T(J, re, J + 0.5 - b, re + 0.5 - C);
  }, Se = n.skyStops || [n.sky], g = n.skyT || 0;
  for (let b = 0; b < N; b++) {
    const C = n.night ? An(1 - (b + 0.5) / (N * 0.7)) * 0.85 : An(((b + 0.5) / N - 0.35) / 0.65) * 0.85;
    for (let k = 0; k < N; k++) {
      let T = Se[0];
      if (Se.length > 1) {
        const re = g * (Se.length - 1), J = Math.min(Se.length - 2, Math.floor(re));
        T = re - J > _n(k, b) ? Se[J + 1] : Se[J];
      }
      C > _n(k + 2, b + 5) && (T = n.night ? Ht(T, "#000000", 0.28) : Ht(T, "#ffffff", 0.2)), ae[b * N + k] = Y ? Ht(T, "#ffffff", 0.25) : T;
    }
  }
  if (n.sun.o > 0.01) {
    const b = n.sun.x * P, C = n.sun.y * P, k = Math.max(1, n.sun.r * P);
    if (v) {
      const T = k * (1.45 + 0.06 * X), re = Ht(B.sun, "#ffffff", 0.55);
      if (ge(b, C, T, (J, ee, oe, de) => {
        const Be = Math.sqrt(oe * oe + de * de);
        Be > k && Be < T && q(J, ee, re, 0.26 * (1 - (Be - k) / (T - k)) * n.sun.o, uu);
      }), n.sun.o > 0.5) {
        const J = Math.floor(G / 500) % 2, ee = Math.max(1, k * 0.22);
        for (let oe = 0; oe < 8; oe++) if (oe % 2 === J) for (let de = k + 1.5; de < k + 1.5 + ee; de += 0.7) q(Math.floor(b + Math.cos(oe * Math.PI / 4) * de), Math.floor(C + Math.sin(oe * Math.PI / 4) * de), B.sun, n.sun.o, Al);
      }
    }
    ge(b, C, k, (T, re, J, ee) => {
      if (J * J + ee * ee > k * k) return;
      const oe = ((J * 0.643 + ee * 0.766) / k + 1) / 2;
      q(T, re, An((oe - 0.62) / 0.38) > _n(T, re) ? B.sunEdge : B.sun, n.sun.o, Sl);
    });
  }
  if (bl.forEach((b, C) => {
    const k = n.stars[C].o;
    if (k < 0.01) return;
    const T = Math.floor(b[0] * P), re = Math.floor(b[1] * P), J = v ? (Math.floor(G / 300) + C * 3) % 6 : 0;
    if (J === 5) return;
    const ee = Math.round(b[2] * P * (J === 4 ? 0.3 : J < 2 ? 1 : 0.6));
    q(T, re, B.star, k, Bo);
    for (let oe = 1; oe <= ee; oe++) {
      const de = oe === ee && ee > 1 ? Ht(B.star, n.sky, 0.5) : B.star;
      q(T - oe, re, de, k, Bo), q(T + oe, re, de, k, Bo), q(T, re - oe, de, k, Bo), q(T, re + oe, de, k, Bo);
    }
  }), n.moon.o > 0.01) {
    const b = Math.max(1.5, n.moon.d * P * 0.37), C = n.moon.x * P, k = n.moon.y * P + (v && $ > 0.4 ? -1 : 0), T = C + 0.547 * b, re = k - 0.503 * b, J = 0.82 * b, ee = Ht(B.moon, "#ffffff", 0.6);
    ge(C, k, b, (oe, de, Be, et) => {
      if (Be * Be + et * et > b * b) return;
      const Dt = oe + 0.5 - T, wt = de + 0.5 - re;
      Dt * Dt + wt * wt <= J * J || q(oe, de, An((et + b) / (2 * b) * 1.1 - 0.1) > _n(oe, de) ? B.moon : ee, n.moon.o, Tl);
    });
  }
  const ke = Math.max(2, Math.round(15.65 * P)), Ce = Math.max(1, Math.round(5.87 * P * 0.5));
  wl.forEach((b, C) => {
    const k = n.rain[C];
    let T = k.dy, re = k.o;
    if (re < 0.01) return;
    if (v) {
      const oe = (G / 950 + C / 3) % 1;
      T += -5 + oe * 14, re *= oe < 0.18 ? oe / 0.18 : oe > 0.72 ? (1 - oe) / 0.28 : 1;
    }
    const J = (b[0] + 3 + z) * P, ee = (b[1] + T) * P;
    for (let oe = 0; oe < ke; oe++) for (let de = 0; de < Ce; de++) q(Math.floor(J - 0.208 * oe) + de, Math.floor(ee) + oe, B.rain, re, _l);
  });
  const Oe = Math.max(0, Math.round(7.34 * P / 2.6));
  if (xl.forEach((b, C) => {
    const k = n.snow[C];
    let T = k.dy, re = 0, J = k.o;
    if (J < 0.01) return;
    if (v) {
      const de = (G / 3200 + C / 5) % 1;
      T += -6 + de * 14, re = 1.5 * se(ne * (de * 1.5 + C / 5)), J *= de < 0.2 ? de / 0.2 : de > 0.75 ? (1 - de) / 0.25 : 1;
    }
    const ee = Math.floor((b[0] + 3.67 + re + z) * P), oe = Math.floor((b[1] + 3.67 + T) * P);
    q(ee, oe, B.snow, J, Ln);
    for (let de = 1; de <= Oe; de++)
      q(ee - de, oe, B.snow, J, Ln), q(ee + de, oe, B.snow, J, Ln), q(ee, oe - de, B.snow, J, Ln), q(ee, oe + de, B.snow, J, Ln), Oe > 1 && de < Oe && (q(ee - de, oe - de, B.snow, J, Ln), q(ee + de, oe - de, B.snow, J, Ln), q(ee - de, oe + de, B.snow, J, Ln), q(ee + de, oe + de, B.snow, J, Ln));
  }), n.bolt.o > 0.01)
    if (N >= 30) {
      const b = 39 + z, C = 50 + n.bolt.dy;
      for (let k = Math.floor(C * P); k <= (C + 28) * P; k++) for (let T = Math.floor(b * P); T <= (b + 13) * P; T++)
        ac(mu, (T + 0.5) / P - b, (k + 0.5) / P - C) && q(T, k, B.sun, n.bolt.o, ji);
    } else {
      const b = N / 18, C = 7, k = 10 + Math.round(n.bolt.dy * 0.2);
      pu.forEach((T, re) => T.split("").forEach((J, ee) => {
        if (J !== "#") return;
        const oe = Math.floor((C + ee) * b), de = Math.floor((k + re) * b);
        for (let Be = de; Be < Math.max(de + 1, Math.floor((k + re + 1) * b)); Be++) for (let et = oe; et < Math.max(oe + 1, Math.floor((C + ee + 1) * b)); et++) q(et, Be, B.sun, n.bolt.o, ji);
      }));
    }
  if (n.cloud.o > 0.01) {
    const b = Math.max(3, n.cloud.w * P), C = b * 0.6665, k = (n.cloud.x + z) * P - b / 2, T = (n.cloud.y + V) * P - C / 2, re = Ht(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), J = Ht(re, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(T) - 1); ee <= Math.min(N - 1, T + C + 1); ee++) for (let oe = Math.max(0, Math.floor(k) - 1); oe <= Math.min(N - 1, k + b + 1); oe++) {
      const de = (oe + 0.5 - k) / b, Be = (ee + 0.5 - T) / b;
      ws(de, Be) && q(oe, ee, !ws(de, Be + 1 / b) || An((Be - 0.42) / 0.25) * 0.8 > _n(oe, ee) ? J : re, n.cloud.o, Ll);
    }
  }
  return ic(ae, A, N, N, { oneBit: u, ink: f, paper: w, snowInk: !n.night });
}
function ic(n, s, o, u, { oneBit: m, ink: f, paper: w, snowInk: L }) {
  const v = new Uint8ClampedArray(o * u * 4), B = vs(f), se = vs(w);
  for (let ne = 0; ne < u; ne++) for (let N = 0; N < o; N++) {
    const P = ne * o + N, G = s[P];
    if (n[P] == null) continue;
    let X = vs(n[P]);
    if (m) {
      let z;
      G === _l || G === Al ? z = !0 : G === Ln ? z = L : G === Bo || G === ji ? z = !1 : z = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= _n(N, ne), (G === Sl || G === Tl || G === Ll || G === ji) && (N > 0 && s[P - 1] !== G || N < o - 1 && s[P + 1] !== G || ne > 0 && s[P - o] !== G || ne < u - 1 && s[P + o] !== G) && (z = !0), X = z ? B : se;
    }
    v[P * 4] = X[0], v[P * 4 + 1] = X[1], v[P * 4 + 2] = X[2], v[P * 4 + 3] = 255;
  }
  return { w: o, h: u, data: v };
}
const hu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fu = (n) => Ms(n, !1).split("/")[0], nl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", bu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], yu = [".##", "##.", ".#.", "#.."];
function rc(n, { width: s, height: o, colors: u, wave: m = 0.38, soft: f = 6, glow: w = 0.6 }) {
  const L = { ...oo, dawn: "#e5a77e", ...u }, v = nc(L), B = s, se = o, ne = B / 6, N = ne / 2, P = Math.PI * 2, G = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(12)].map((O, Y) => {
    const ae = G[Math.min(Y, G.length - 1)], A = fu(ae.cond), q = Y % 2 === 1;
    return { cond: ae.cond, k: A, night: q, sky: v[A][q ? 1 : 0], cover: hu[A] };
  }), z = (O) => se * (0.5 - m * Math.cos(P * (O / ne - 0.25)));
  return { C: L, S: X, W: B, H: se, cw: ne, sw: N, TAU: P, yb: z, side: (O, Y, ae) => {
    const A = (O ? z(Y) - ae : ae - z(Y)) / Math.max(3, f * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (O) => {
    const Y = ((O / ne - 0.25) % 1 + 1) % 1, ae = Math.max(0, Math.min(5, Math.round(O / ne - 0.25))), A = Math.max(0, Math.min(5, Math.round(O / ne - 0.75))), q = 1 - (X[2 * ae].cover + X[2 * A + 1].cover) / 2, ge = Math.sin(Math.PI * Math.min(1, Math.max(0, z(O) / se)));
    return { c: Y < 0.5 ? L.dusk : L.dawn, a: w * (0.2 + 0.8 * q) * ge * ge };
  }, soft: f, tw: ne * 0.3, sy: se / 90 };
}
function sc(n, { clock: s = 0, ambient: o = !1, seed: u = 1 }) {
  const { S: m, sw: f, side: w, C: L, TAU: v, sy: B } = n, se = s, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((N, P) => {
    const G = nl(u * 977 + P * 131 + 7), X = (P + 0.5) * f, z = N.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[N.k] : 0;
    for (let V = 0; V < z; V++) {
      const $ = X + (G() - 0.5) * f * 1.6, O = (6 + G() * 76) * B, Y = G() < 0.35, ae = 1.8 + G() * 1.6, A = w(!0, $, O) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(v * se / 2600 + V * 1.7 + P) : 1);
      A >= 0.03 && ne.stars.push({ x: $, y: O, big: Y, size: ae, o: A });
    }
    if (!N.night && (N.k === "clear" || N.k === "partly")) {
      const V = X + (G() - 0.5) * f * 0.3, $ = Math.min(15, f * 0.29);
      ne.suns.push({ x: V, y: 32 * B, rad: $, halo: $ * 2.8 * (o ? 1 + 0.07 * Math.sin(v * se / 3600 + P) : 1) });
    }
    if (N.night && (N.k === "clear" || N.k === "partly")) {
      const V = Math.min(0.78, f * 0.55 / 34), $ = X - 23 * V + (G() - 0.5) * f * 0.2;
      ne.moons.push({ x: $ + 23 * V, y: (4 + (o ? 0.8 * Math.sin(v * se / 5200 + P) : 0)) * B + 23 * V, d: 46 * V });
    }
  }), m.forEach((N, P) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[N.k];
    if (!G) return;
    const X = nl(u * 577 + P * 71 + 3), z = (P + 0.5) * f, V = N.k === "rain" || N.k === "storm" || N.night ? L.cloudNight : L.cloudDay, $ = N.night ? 0.82 : N.k === "storm" ? 0.75 : 1;
    for (let O = 0; O < G; O++) {
      const Y = f / 46 * (N.k === "partly" ? 0.85 : 0.75 + X() * 0.55), ae = z + (N.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (N.k === "partly" ? 40 : 6 + X() * 26) * B, q = o ? 2.5 * Math.sin(v * se / 9e3 + P * 1.3 + O * 2.1) : 0, ge = o ? 0.9 * Math.sin(v * se / 6100 + P + O) : 0;
      ne.clouds.push({ x: ae - 23 * Y + q, y: A - 15.33 * Y + ge, w: 46 * Y, h: 30.66 * Y, fill: V, o: $ * (G > 1 && O === 0 ? 0.85 : 1) });
    }
  }), m.forEach((N, P) => {
    const G = nl(u * 313 + P * 29 + 11), X = (P + 0.5) * f, z = N.cond === "pouring" ? 16 : N.cond === "rainy" || N.cond === "hail" ? 9 : N.cond === "lightning-rainy" ? 12 : N.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < z; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Y = 44 + G() * 36, ae = 1;
      if (o) {
        const q = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        O -= 0.21 * (q - (Y - 44)), Y = 44 + q, ae = Math.min(1, q / 6, (36 - q) / 6);
      }
      Y *= B;
      const A = w(N.night, O, Y) * ae;
      A >= 0.05 && ne.drops.push({ x: O, y: Y, o: A });
    }
    const V = N.cond === "snowy" ? 11 : N.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < V; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Y = 40 + G() * 44, ae = 1;
      if (o) {
        const q = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + q, O += 1.6 * Math.sin(v * se / 2800 + $ * 1.9 + P), ae = Math.min(1, q / 6, (44 - q) / 6);
      }
      Y *= B;
      const A = w(N.night, O, Y) * ae;
      A >= 0.05 && ne.flakes.push({ x: O, y: Y, o: A });
    }
    if (N.k === "fog") {
      const $ = N.night ? "#c8ccd6" : "#ffffff", O = N.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(v * se / 8e3 + P) : 0;
      for (let ae = 0; ae < 4; ae++) ne.fogs.push({ x: X - f * 0.75 + ae % 2 * f * 0.18 + (ae % 2 ? Y : -Y), y: (30 + ae * 13) * B, w: f * 1.3, c: $, a: O });
    }
    if (N.k === "storm") {
      const $ = (se / 3400 + P * 0.37) % 1;
      ne.bolts.push({ x: X + (G() - 0.5) * f * 0.3 - 5, y: 36 * B, o: o && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function ku(n, s, o, u, m, f, w, L) {
  const { S: v, C: B, cw: se, yb: ne, glowAt: N, soft: P, tw: G, sy: X } = n, z = new Array(o * u), V = new Uint8Array(o * u), $ = new Uint8Array(o * u), O = (b, C, k, T, re) => {
    k == null || b < 0 || C < 0 || b >= o || C >= u || (T >= 1 || T > _n(b + 5, C + 3)) && (z[C * o + b] = k, V[C * o + b] = re);
  }, Y = (b, C, k, T) => {
    for (let re = Math.max(0, Math.floor(C - k) - 1); re <= Math.min(u - 1, C + k + 1); re++) for (let J = Math.max(0, Math.floor(b - k) - 1); J <= Math.min(o - 1, b + k + 1); J++) T(J, re, J + 0.5 - b, re + 0.5 - C);
  }, ae = (b, C, k) => {
    for (let re = 0; re < b.length - 1; re++) {
      const J = (re + C) * se;
      if (k < J - G / 2) return [b[re], b[re], 0];
      if (k <= J + G / 2) return [b[re], b[re + 1], (k - J + G / 2) / G];
    }
    const T = b[b.length - 1];
    return [T, T, 0];
  }, A = v.filter((b) => !b.night).map((b) => b.sky), q = v.filter((b) => b.night).map((b) => b.sky), ge = P / f, Se = 16 * X / f;
  for (let b = 0; b < o; b++) {
    const C = (b + 0.5) * m, k = ne(C) / f, T = ae(A, 0.75, C), re = ae(q, 1.25, C), J = N(C);
    for (let ee = 0; ee < u; ee++) {
      const oe = _n(b, ee), de = ee + 0.5 - k, Be = (ge > 0.01 ? An(0.5 + de / ge) : de > 0 ? 1 : 0) > oe;
      let et = Be ? T[2] > oe ? T[1] : T[0] : re[2] > oe ? re[1] : re[0];
      (Be ? An(((ee + 0.5) / u - 0.45) / 0.55) * 0.7 : An(1 - (ee + 0.5) / (u * 0.55)) * 0.7) > _n(b + 2, ee + 5) && (et = Be ? Ht(et, "#ffffff", 0.18) : Ht(et, "#000000", 0.25)), Be && de >= 0 && de < Se && J.a * 1.3 * (1 - de / Se) > _n(b + 6, ee + 1) && (et = J.c), z[ee * o + b] = et, $[ee * o + b] = Be ? 0 : 1;
    }
  }
  const g = Ht(B.sun, "#ffffff", 0.55), ke = Ht(B.moon, "#ffffff", 0.6);
  s.stars.forEach((b) => {
    const C = Math.floor(b.x / m), k = Math.floor(b.y / f);
    if (C < 0 || k < 0 || C >= o || k >= u || !$[k * o + C] || b.o < 0.15) return;
    const T = b.o > 0.45 ? B.star : Ht(B.star, z[k * o + C], 0.5), re = b.big && b.o > 0.6 ? Math.floor(b.size / m) : 0;
    O(C, k, T, 1, Bo);
    for (let J = 1; J <= re; J++) [[C - J, k], [C + J, k], [C, k - J], [C, k + J]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < o && ee[1] < u && $[ee[1] * o + ee[0]] && O(ee[0], ee[1], T, 1, Bo);
    });
  }), s.suns.forEach((b) => {
    const C = Math.max(1.5, b.rad / m), k = b.x / m, T = b.y / f, re = b.halo / m * 0.85;
    if (Y(k, T, re, (J, ee, oe, de) => {
      const Be = Math.sqrt(oe * oe + de * de);
      Be > C && Be < re && !$[ee * o + J] && O(J, ee, g, 0.3 * (1 - (Be - C) / (re - C)), 0);
    }), L) {
      const J = Math.floor(w / 500) % 2, ee = Math.max(1, C * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === J) for (let de = C + 1.2; de < C + 1.2 + ee; de += 0.7) O(Math.floor(k + Math.cos(oe * Math.PI / 4) * de), Math.floor(T + Math.sin(oe * Math.PI / 4) * de), B.sun, 1, Al);
    }
    Y(k, T, C, (J, ee, oe, de) => {
      oe * oe + de * de <= C * C && O(J, ee, An(((de / C + 1) / 2 - 0.6) / 0.4) > _n(J, ee) ? B.sunEdge : B.sun, 1, Sl);
    });
  }), s.moons.forEach((b) => {
    const C = Math.max(1.5, b.d * 0.37 / m), k = b.x / m, T = b.y / f, re = k + 0.547 * C, J = T - 0.503 * C, ee = 0.82 * C;
    Y(k, T, C, (oe, de, Be, et) => {
      if (Be * Be + et * et > C * C) return;
      const Dt = oe + 0.5 - re, wt = de + 0.5 - J;
      Dt * Dt + wt * wt > ee * ee && O(oe, de, An((et + C) / (2 * C) * 1.1 - 0.1) > _n(oe, de) ? B.moon : ke, 1, Tl);
    });
  }), s.clouds.forEach((b) => {
    const C = Math.max(3, b.w / m), k = C * 0.6665, T = b.x / m, re = b.y / f, J = Ht(b.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(re) - 1); ee <= Math.min(u - 1, re + k + 1); ee++) for (let oe = Math.max(0, Math.floor(T) - 1); oe <= Math.min(o - 1, T + C + 1); oe++) {
      const de = (oe + 0.5 - T) / C, Be = (ee + 0.5 - re) / C;
      ws(de, Be) && O(oe, ee, !ws(de, Be + 1 / C) || An((Be - 0.42) / 0.25) * 0.8 > _n(oe, ee) ? J : b.fill, b.o, Ll);
    }
  }), s.fogs.forEach((b) => {
    const C = Math.floor(b.y / f), k = Math.max(C, Math.floor((b.y + 6 * X) / f) - 1), T = Math.floor(b.x / m), re = Math.floor((b.x + b.w) / m);
    for (let J = C; J <= k; J++) for (let ee = T; ee <= re; ee++) {
      const oe = (ee - T) / Math.max(1, re - T);
      O(ee, J, b.c, b.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  s.drops.forEach((b) => {
    const C = b.x / m, k = Math.floor(b.y / f);
    for (let T = 0; T < Ce; T++) O(Math.floor(C - 0.208 * T * f / m), k + T, B.rain, b.o, _l);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((b) => {
    const C = Math.floor(b.x / m), k = Math.floor(b.y / f);
    O(C, k, B.snow, b.o, Ln);
    for (let T = 1; T <= Oe; T++)
      O(C - T, k, B.snow, b.o, Ln), O(C + T, k, B.snow, b.o, Ln), O(C, k - T, B.snow, b.o, Ln), O(C, k + T, B.snow, b.o, Ln);
  }), s.bolts.forEach((b) => {
    if (m <= 3.5)
      for (let C = Math.floor(b.y / f); C <= (b.y + 24) / f; C++) for (let k = Math.floor(b.x / m); k <= (b.x + 11) / m; k++)
        ac(xu, (k + 0.5) * m - b.x, (C + 0.5) * f - b.y) && O(k, C, B.sun, 1, ji);
    else {
      const C = Math.round(b.x / m), k = Math.round(b.y / f);
      yu.forEach((T, re) => T.split("").forEach((J, ee) => {
        J === "#" && O(C + ee, k + re, B.sun, 1, ji);
      }));
    }
  }), { col: z, ids: V };
}
function Mu(n, s) {
  const o = s.px, u = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), f = s.width / u, w = s.height / m, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (P) => {
    const G = rc(P, s);
    return ku(G, sc(G, { clock: L, ambient: s.ambient, seed: s.seed }), u, m, f, w, L, s.ambient);
  }, B = v(n), se = s.reveal == null ? 1 : An(s.reveal);
  let ne = B.col, N = B.ids;
  if (se < 1) {
    const P = s.prev ? v(s.prev) : null, G = se * (u + 12);
    ne = new Array(u * m), N = new Uint8Array(u * m);
    for (let X = 0; X < u * m; X++) {
      const z = X % u, V = X / u | 0;
      (s.reduce ? se : An((G - z) / 12)) > _n(z, V) ? (ne[X] = B.col[X], N[X] = B.ids[X]) : P ? (ne[X] = P.col[X], N[X] = P.ids[X]) : (ne[X] = null, N[X] = 255);
    }
  }
  return ic(ne, N, u, m, { oneBit: s.oneBit, ink: s.ink, paper: s.paper, snowInk: !1 });
}
function Cu(n, s, o) {
  const u = o.width, m = o.height, f = o.reveal == null ? 1 : An(o.reveal), w = (N, P) => {
    const G = rc(P, o);
    Su(N, G, sc(G, o));
  };
  if (n.clearRect(0, 0, u, m), f >= 1) {
    w(n, s);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = f, w(n, s), n.restore();
    return;
  }
  const L = n.canvas, v = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (v.width !== L.width || v.height !== L.height) && (v.width = L.width, v.height = L.height);
  const B = v.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, u, m), w(B, s);
  const se = f * (u + 64) - 64, ne = B.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ne, B.fillRect(0, 0, u, m), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Su(n, s, o) {
  const { W: u, H: m, S: f, C: w, cw: L, yb: v, glowAt: B, soft: se, tw: ne, sy: N } = s, P = (g, ke) => {
    const Ce = vs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, G = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const b = (Oe + ke) * L, C = (b - ne / 2) / u, k = (b + ne / 2) / u;
      C > 0 && C < 1 && Ce.addColorStop(C, g[Oe]), k > 0 && k < 1 && Ce.addColorStop(k, g[Oe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), z = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Oe = u * Ce / X, b = g == null ? 0 : v(Oe) + g;
      Ce ? n.lineTo(Oe, b) : n.moveTo(Oe, b);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Oe = u * Ce / X;
      n.lineTo(Oe, v(Oe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, m);
  const V = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = B(u * g / 64);
    V.addColorStop(g / 64, P(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = V;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, z(g * 2 * N, (g + 1) * 2 * N);
  n.fillStyle = G(f.filter((g) => g.night).map((g) => g.sky), 1.25);
  const $ = Math.max(0.5, se), O = 6;
  n.globalAlpha = 1, z(null, -$);
  for (let g = 0; g < O; g++)
    n.globalAlpha = 1 - (g + 0.5) / O, z(-$ + 2 * $ * g / O, -$ + 2 * $ * (g + 1) / O);
  n.globalAlpha = 1;
  const Y = new Path2D(bu), ae = new Path2D(vu), A = new Path2D(gu), q = new Path2D(wu);
  n.fillStyle = w.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Y), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ge = Ht(w.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, P(ge, 0.42)), ke.addColorStop(0.7, P(ge, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Ht(w.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ae), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), o.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, P(g.c, 0)), ke.addColorStop(0.25, P(g.c, g.a)), ke.addColorStop(0.75, P(g.c, g.a)), ke.addColorStop(1, P(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * N);
  }), n.fillStyle = w.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(q), n.restore();
  }), n.restore();
}
function Tu(n, s) {
  var cd, ud, pd, md, hd, fd, gd;
  const o = (e) => n.getElementById(e), u = o("workoutView"), m = o("workoutNameInput");
  let f = !0;
  const w = o("homeClock");
  function L() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const v = o("createFlow"), B = o("createMovementsSlot"), se = o("createTimingSlot"), ne = o("createFinishSlot"), N = o("movementStepSummary"), P = o("timingStepSummary"), G = o("finishStepSummary"), X = o("continueToTiming"), z = o("continueToFinish"), V = o("finishMoveButton");
  let $ = !1, O = [];
  function Y(e) {
    !e || O.some((a) => a.node === e) || O.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ae(e, a) {
    e && (Y(e), a.appendChild(e));
  }
  function A() {
    [...O].reverse().forEach(({ node: e, parent: a, next: r }) => {
      a && (r && r.parentNode === a ? a.insertBefore(e, r) : a.appendChild(e));
    }), O = [];
  }
  function q(e) {
    n.querySelectorAll(".createStep").forEach((a) => {
      a.classList.toggle("active", a.dataset.createStep === e);
    }), e === "timing" && ($ = !0), ge();
  }
  function ge() {
    var Q, te;
    if (!mt) return;
    tt[dt];
    const e = tn.filter((Z) => !Z.hidden), a = e.filter((Z) => Z.kind !== "rest").length, r = e.filter((Z) => Z.kind === "rest").length;
    N.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const c = a > 0, p = n.querySelector('[data-open-step="timing"]'), y = n.querySelector('[data-open-step="finish"]');
    p.disabled = !c, X.disabled = !c, P.textContent = c ? yn(C.value) + " · " + Tt(k.value) + " movement · " + Tt(T.value) + " rest" : "Add a movement first", y.disabled = !(c && $);
    const _ = ((m == null ? void 0 : m.value) || "").trim(), I = [];
    (Q = o("includeWarmupPreset")) != null && Q.checked && I.push("warm-up"), (te = o("includeCooldownPreset")) != null && te.checked && I.push("cooldown"), G.textContent = _ ? _ + (I.length ? " · " + I.join(" + ") : "") : I.length ? I.join(" + ") : "Name and optional extras";
  }
  function Se() {
    var Me, Ve, Te;
    v.hidden = !1, $ = !1;
    const e = n.querySelector(".editNameRow"), a = o("createMoveOptions"), r = n.querySelector(".timeTiles"), c = o("routineSummaryModal"), p = n.querySelector(".tempoRevealRow"), y = o("tempoExperiment"), _ = (Me = o("warmupList")) == null ? void 0 : Me.closest("section"), I = o("movementCreatorLaunch"), Q = o("movementCreator"), te = (Ve = o("strengthList")) == null ? void 0 : Ve.closest("section"), Z = (Te = o("cooldownList")) == null ? void 0 : Te.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), _, I, Q, te, Z].forEach((ye) => ye && ae(ye, B)), [a, r, c, p, y].forEach((ye) => ae(ye, se)), ae(e, ne), q("movements"), ge();
  }
  function g() {
    A(), v.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || q(e.dataset.openStep);
  })), X.addEventListener("click", () => {
    X.disabled || q("timing");
  }), z.addEventListener("click", () => q("finish")), V.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ke = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), Oe = o("settingsNav");
  function b(e) {
    Object.entries(ke).forEach(([a, r]) => r.classList.toggle("active", a === e)), Ce.classList.toggle("active", e === "home"), Oe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(er, 400), e === "settings" && (requestAnimationFrame(() => mr(n.querySelector(".tab.active"), !1)), $r());
  }
  const C = o("totalTime"), k = o("workTime"), T = o("restTime"), re = o("totalOut"), J = o("workOut"), ee = o("restOut"), oe = o("totalFill"), de = o("workFill"), Be = o("restFill"), et = o("roundsInput"), Dt = o("roundsFill"), wt = o("roundsOut"), ma = o("totalLabel"), ka = o("routineSummaryModal"), Le = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let at = Le.map((e) => ({ ...e })), tn = [
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
  const Pa = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Vt = Pa.map((e) => ({ ...e }));
  const hn = {
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
  }, ct = Po(s.data), tt = ct.profiles;
  let dt = tt[ct.selected] ? ct.selected : ct.order.find((e) => tt[e]) || "kettlebell";
  function Po(e) {
    const a = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(hn)), c = (Array.isArray(a.order) ? a.order : Object.keys(r)).filter((p) => r[p]);
    return Object.keys(r).forEach((p) => {
      c.includes(p) || c.push(p);
    }), {
      v: 1,
      profiles: r,
      order: c,
      selected: a.selected || c[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : Ia(a.energy)).map(dn),
      settings: { ...a.settings || {} }
    };
  }
  function Ia(e) {
    if (!Array.isArray(e)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((c) => {
      const p = new Date(c.at);
      if (isNaN(p)) return;
      const y = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0"), _ = p.getHours() < 14 ? "morning" : "evening";
      if (r.some((Q) => Q.date === y && Q.slot === _)) return;
      const I = a.indexOf(c.value) + 1;
      I > 0 && r.push({ date: y, slot: _, mood: null, energy: I, at: c.at });
    }), r;
  }
  function dn(e) {
    if (e.scale === 100) return e;
    const a = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: a(e.mood), energy: a(e.energy), scale: 100 };
  }
  function xn() {
    mt || (ct.selected = dt, ct.order = ct.order.filter((e) => tt[e] && e !== En), s.save(ct));
  }
  function ut() {
    return ct.settings;
  }
  function ot(e) {
    const a = tt[e];
    if (!a) return;
    dt = e;
    const r = o("workoutNameInput");
    if (r && (r.value = a.name), C.value = a.total, k.value = a.work, T.value = a.rest, et.value = a.rounds || 1, a.customSequence) {
      const c = (a.sequence || []).map((y) => ({ ...y })), p = (y) => c.filter((_) => _.presetRole === y).map(({ presetRole: _, ...I }) => I);
      at = (a.warmup || p("warmup")).map((y) => ({ ...y })), Vt = (a.cooldown || p("cooldown")).map((y) => ({ ...y })), tn = c.filter((y) => !y.presetRole), Oa(a.preset || "movement", !1);
    } else
      C.min = 3, C.max = 40, C.step = 1, k.min = 20, k.max = 60, k.step = 5, T.min = 5, T.max = 30, T.step = 5, at = (a.warmup || Le).map((c) => ({ ...c })), Vt = (a.cooldown || Pa).map((c) => ({ ...c })), tn = a.strength.map((c) => Array.isArray(c) ? (([p, y, _, I = !1]) => ({ id: p, name: y, group: _, kind: "work", hidden: !!I }))(c) : { ...c });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), W();
  }
  function Pe(e, a, r) {
    const c = e.getBoundingClientRect(), p = c.width / 2, y = c.height / 2, _ = a - p, I = r - y;
    let Q = 1 / 0, te = 1 / 0;
    _ !== 0 && (Q = p / Math.abs(_)), I !== 0 && (te = y / Math.abs(I));
    const Z = Math.min(Math.max(1 / Math.min(Q, te), 0), 1);
    let U = Math.atan2(I, _) * (180 / Math.PI) + 90;
    return U < 0 && (U += 360), { edge: Z, angle: U };
  }
  function Ft(e, a, r = !1) {
    const c = e.getBoundingClientRect(), p = a.clientX - c.left, y = a.clientY - c.top, { edge: _, angle: I } = Pe(e, p, y), Q = r ? 100 : _ * 100;
    e.style.setProperty("--edge-proximity", Q.toFixed(3)), e.style.setProperty("--cursor-angle", I.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || Q >= 30);
  }
  function kt(e) {
    e.addEventListener("pointermove", (r) => Ft(e, r, !1)), e.addEventListener("pointerenter", (r) => Ft(e, r, !1)), e.addEventListener("pointerdown", (r) => Ft(e, r, !0));
    const a = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", a), e.addEventListener("pointerup", a), e.addEventListener("pointercancel", a);
  }
  kt(o("addWorkoutPanel"));
  let mt = !1, En = null;
  function Ge(e) {
    return String(e ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function Gi(e) {
    return e.summary ? e.summary : e.customSequence ? yn(e.total) + " · custom move" : yn(e.total) + " · " + Tt(e.work) + " / " + Tt(e.rest) + " · warm-up + cooldown";
  }
  function Io(e, a) {
    var y;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const c = a.activityCount ?? (((y = a.sequence) == null ? void 0 : y.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ge(a.name) + '</div><div class="sub">' + Ge(Gi(a)) + '</div><span class="sourceTag">' + Ge(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ge(a.name) + "</div></div>";
    const p = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(r, p), kt(r), r.addEventListener("click", (_) => {
      _.target.closest("button") || ot(e);
    }), r.addEventListener("keydown", (_) => {
      (_.key === "Enter" || _.key === " ") && !_.target.closest("button") && (_.preventDefault(), ot(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), ot(e), Ir(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), ot(e), Gr();
    }), r;
  }
  function Dn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), ct.order.forEach((e) => {
      tt[e] && Io(e, tt[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === dt));
  }
  Dn(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    mt = !0, En = "custom-" + Date.now(), tt[En] = {
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
    }, ot(En), Ir(!0);
  });
  let Ae = [], ze = 0, jt = 0, Rn = 1, fn = !1, Mt = null, Xn = null, qt = !1, Pt = ct.settings.upcomingCount ?? "all", Ha = "movement";
  function cn(e, a, r) {
    return (Number(e) - a) / (r - a) * 100;
  }
  function Tt(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function yn(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function gt() {
    oe.style.width = cn(C.value, Number(C.min), Number(C.max)) + "%", de.style.width = cn(k.value, Number(k.min), Number(k.max)) + "%", Be.style.width = cn(T.value, Number(T.min), Number(T.max)) + "%", J.textContent = Tt(k.value), ee.textContent = Tt(T.value);
    const e = Number(et.value) || 1;
    Dt.style.width = cn(e, 1, 10) + "%", ma.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Nn(e) {
    return e.filter((a) => !a.hidden);
  }
  function zt(e) {
    const a = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    return (r ? r + ":" + String(c).padStart(2, "0") : c) + ":" + String(p).padStart(2, "0");
  }
  function Ho(e) {
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
        const I = a.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        I && (c = I[2]);
      }
    if (!c || !/^[\w-]{11}$/.test(c)) return null;
    const p = (I) => {
      if (!I) return 0;
      if (/^\d+$/.test(I)) return Number(I);
      const Q = I.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return Q ? (Number(Q[1]) || 0) * 3600 + (Number(Q[2]) || 0) * 60 + (Number(Q[3]) || 0) : 0;
    }, y = p(a.searchParams.get("t") || a.searchParams.get("start")), _ = p(a.searchParams.get("end"));
    return { id: c, start: y, end: _ > y ? _ : null };
  }
  function Fa(e, a) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || a || 300);
    const r = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > r ? Math.round(c - r) : Number(e.duration) || 300;
  }
  function Qn(e, a) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(a === "hour" ? r * 3600 : a === "min" ? r * 60 : r);
  }
  function Oa(e, a = !0) {
    Ha = e, n.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const r = tt[dt];
    r && (r.preset = e), e === "work" ? (C.min = 30, C.max = 480, C.step = 30, k.min = 300, k.max = 7200, k.step = 300, T.min = 60, T.max = 1800, T.step = 60, a && (C.value = 60, k.value = 1500, T.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (C.min = 3, C.max = 40, C.step = 1, k.min = 20, k.max = 60, k.step = 5, T.min = 5, T.max = 30, T.step = 5, a && (C.value = 20, k.value = 45, T.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), gt();
  }
  function S(e, a) {
    const r = Ha === "work";
    return e.map((c, p) => ({ ...c, id: a + "-" + p + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(k.value) }));
  }
  function E() {
    const e = tt[dt];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !at.length && (at = S(Le, "warm")), e.includeCooldown && !Vt.length && (Vt = S(Pa, "cool")), W());
  }
  function F() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const a = Math.max(1, Ae.length - 1), r = Pt;
    e.innerHTML = "";
    for (let y = 1; y <= a; y++) {
      const _ = document.createElement("option");
      _.value = String(y), _.textContent = String(y), e.appendChild(_);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const p = r === "all" ? "all" : String(Math.min(Number(r) || 1, a));
    e.value = p, Pt = p === "all" ? "all" : Number(p);
  }
  function W() {
    Number(C.value) * 60;
    const e = Number(k.value), a = Number(T.value), r = tt[dt], c = !!(r != null && r.customSequence), p = (c ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Nn(at), y = Nn(tn), _ = c && !r.includeCooldown ? [] : Nn(Vt);
    if (r && (r.total = Number(C.value), r.work = e, r.rest = a, r.rounds = Number(et.value) || 1, r.customSequence ? (r.sequence = tn.map((we) => ({ ...we })), r.warmup = at.map((we) => ({ ...we })), r.cooldown = Vt.map((we) => ({ ...we }))) : (r.strength = tn.map((we) => ({ ...we })), r.warmup = at.map((we) => ({ ...we })), r.cooldown = Vt.map((we) => ({ ...we })))), r != null && r.customSequence) {
      const we = [...p.map(($e) => ({ ...$e, section: "warmup" })), ...y, ..._.map(($e) => ({ ...$e, section: "cooldown" }))].map(($e) => {
        if ($e.kind === "video") return { ...$e, duration: Fa($e, e), rest: 0 };
        if ($e.kind === "rest") {
          const Xt = $e.useGlobalTiming === !0 ? a : Number($e.duration) || a;
          return { ...$e, duration: Xt, rest: 0 };
        }
        const Jt = $e.useGlobalTiming === !1 && Number($e.duration) || e;
        return { ...$e, duration: Jt, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Ae = [], we.forEach(($e, Jt) => {
        Ae.push($e);
        const Xt = we[Jt + 1];
        $e.kind !== "rest" && Xt && Xt.kind !== "rest" && Ae.push({
          id: "auto-rest-" + Jt,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ae = we;
    } else
      Ae = [...p.map((we) => ({ ...we, section: "warmup" })), ...y, ..._.map((we) => ({ ...we, section: "cooldown" }))].map((we) => we.kind === "video" ? { ...we, duration: Fa(we, e), rest: 0 } : we.kind === "rest" ? { ...we, duration: we.useGlobalTiming === !0 ? a : Number(we.duration) || a, rest: 0 } : { ...we, duration: we.useGlobalTiming === !1 && Number(we.duration) || e, rest: a }), Ae.forEach((we, $e) => {
        var Jt;
        ((Jt = Ae[$e + 1]) == null ? void 0 : Jt.kind) === "rest" && (we.rest = 0);
      }), Ae.length && (Ae[Ae.length - 1].rest = 0);
    const I = Math.max(1, Math.min(10, Number(et.value) || 1)), Q = Ae, te = (we) => I <= 1 ? null : we.section === "warmup" || we.presetRole === "warmup" ? "first" : we.section === "cooldown" || we.presetRole === "cooldown" ? "last" : we.kind === "video" && (we.videoRounds === "first" || we.videoRounds === "last") ? we.videoRounds : null, Z = (we) => !!te(we), U = Q.filter((we) => !Z(we)), Me = Q.filter(Z), Ve = U.length, Te = U.reduce((we, $e) => we + $e.duration + $e.rest, 0), ye = Me.reduce((we, $e) => we + $e.duration + $e.rest, 0), ve = [
      Me.some((we) => we.section === "warmup" || we.presetRole === "warmup") && "warm-up",
      Me.some((we) => we.section === "cooldown" || we.presetRole === "cooldown") && "cooldown",
      Me.some((we) => we.kind === "video" && !we.section && !we.presetRole) && "video"
    ].filter(Boolean), nt = ve.length > 1 ? ve.slice(0, -1).join(", ") + " & " + ve[ve.length - 1] : ve[0] || "";
    Ae = [];
    const it = (we, $e) => {
      const Jt = te(we);
      return !Jt || (Jt === "first" ? $e === 1 : $e === I);
    };
    for (let we = 1; we <= I; we++)
      if (Q.filter(($e) => it($e, we)).forEach(($e, Jt) => Ae.push({ ...$e, id: $e.id + (I > 1 ? "-r" + we : ""), round: we, roundIndex: Jt })), we < I && Ve)
        if (r != null && r.customSequence)
          Ae.push({ id: "round-break-" + we, name: "Rest", group: "Round " + (we + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: we, roundIndex: Ve, roundBreak: !0 });
        else {
          const $e = Ae[Ae.length - 1];
          $e.rest = a, $e.roundBreakAfter = !0;
        }
    gt();
    const _e = Ae.reduce((we, $e) => we + $e.duration + $e.rest, 0), lt = Math.round(Te / 60), xt = Math.round(_e / 60), Ke = I > 1 ? yn(lt) + " × " + I + " rounds" + (ye ? " + " + Tt(ye) + " " + nt : "") + " (" + yn(xt) + ")" : yn(xt), Ue = [p.length ? "warm-up" : "", _.length ? "cooldown" : ""].filter(Boolean), Zt = r != null && r.customSequence ? Ke + " · " + Ve + " items" + (Ue.length && !(I > 1 && ye) ? " · " + Ue.join(" + ") : "") : Ke + " · " + Tt(e) + " / " + Tt(a) + (Ue.length && !(I > 1 && ye) ? " · " + Ue.join(" + ") : "");
    re.textContent = Tt(Te);
    const sn = Ae.filter((we) => !we.roundBreak).length, Et = I > 1 ? sn + " activities · " + I + " rounds" : Ve + " activities";
    wt.textContent = I > 1 ? I + " rounds · " + yn(xt) + " total" : "1 round", o("roundsCount").textContent = I, n.querySelectorAll("[data-rounds-step]").forEach((we) => {
      we.disabled = Number(we.dataset.roundsStep) < 0 ? I <= 1 : I >= 10;
    }), r && (r.summary = Zt, r.activityCount = Ve);
    const Ao = n.querySelector(".workoutPanel.active .sub");
    Ao && (Ao.textContent = Zt), ka.textContent = Zt, Yi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((we) => we.textContent = Et), gt(), pt(), di(), qo(), F(), mt && ge(), ke.workout.classList.contains("active") && !Mt && Ti();
  }
  const ue = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', be = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', he = {
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
  }, xe = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (he[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = xe(e.dataset.icon);
  });
  let ce = null, Ee = null;
  function je(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ye(e = !1) {
    const a = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), e && a.select());
  }
  function qe(e, a, r = {}) {
    const c = e.kind === "rest", p = e.kind === "video", y = p ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, _ = Number(c ? T.value : k.value), I = je(p ? e.useVideoLength === !1 ? e.duration : Fa({ ...e, useVideoLength: !0 }) : y ? _ : e.duration || _), Q = p && (Number(e.videoDuration) > 0 || Number(e.end) > 0), te = p ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ge(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([_e, lt]) => '<option value="' + _e + '"' + ((e.videoRounds || "every") === _e ? " selected" : "") + ">" + lt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ge(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', Z = p ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (Q ? " · " + zt(Fa({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Tt(_), U = document.createElement("div");
    U.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), U.dataset.index = a, U.dataset.id = e.id;
    const Me = r.isNew ?? (Ee == null ? void 0 : Ee.item) === e, Ve = r.sheet ? '<div class="moveEditActions sheetActions">' + (Me ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ge(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Me ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    U.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (p ? " videoFields" : "") + '">' + te + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (y ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ge(Z) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + I.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((_e) => '<option value="' + _e + '"' + (_e === I.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[_e] + "</option>").join("") + "</select></div></div>" + Ve + "</div>";
    const Te = (_e) => U.querySelector("[data-f=" + _e + "]"), ye = () => {
      const _e = Te("global").checked;
      Te("dur").disabled = _e, Te("unit").disabled = _e, U.querySelector(".creatorDurationRow").classList.toggle("isDisabled", _e);
    };
    Te("global").addEventListener("change", ye), ye();
    const ve = () => {
      var _e;
      if (r.sheet) {
        (_e = r.onCancel) == null || _e.call(r);
        return;
      }
      Me && _t(), ce = null, W();
    }, nt = () => {
      var xt;
      if (p) {
        it();
        return;
      }
      const _e = Te("name").value.trim();
      if (!_e) {
        Te("name").focus();
        return;
      }
      e.name = _e, e.group = Te("group").value.trim() || (c ? "Rest" : "Movement");
      const lt = Te("global").checked;
      if (e.useGlobalTiming = lt, lt || (e.duration = Math.max(c ? 5 : 1, Qn(Te("dur").value, Te("unit").value))), r.sheet) {
        (xt = r.onSaved) == null || xt.call(r);
        return;
      }
      Me && (Ee = null), ce = null, W(), Lt(Me ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, it = () => {
      var Ue;
      const _e = Te("url").value.trim(), lt = Ho(_e);
      if (!lt) {
        Te("urlError").hidden = !1, Te("url").classList.add("invalid"), Te("url").focus();
        return;
      }
      const xt = lt.id !== e.videoId;
      e.url = _e, e.videoId = lt.id, e.start = lt.start, e.end = lt.end, xt && (e.videoDuration = null, e.videoError = null);
      const Ke = Te("name").value.trim();
      e.autoName = !Ke, e.name = Ke || (xt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Te("rounds").value, e.useVideoLength = Te("global").checked, e.useVideoLength || (e.duration = Math.max(5, Qn(Te("dur").value, Te("unit").value))), r.sheet ? (Ue = r.onSaved) == null || Ue.call(r) : (Me && (Ee = null), ce = null, W(), Lt(Me ? "Video added" : "Video updated")), (xt || !e.videoDuration || e.autoName && !e.videoTitle) && Dc(e);
    };
    if (p && Te("url").addEventListener("input", () => {
      Te("urlError").hidden = !0, Te("url").classList.remove("invalid");
    }), U.querySelector("[data-a=cancel]").addEventListener("click", ve), U.querySelector("[data-a=save]").addEventListener("click", nt), r.sheet && !Me) {
      U.querySelector("[data-a=hide]").addEventListener("click", () => {
        var lt;
        return (lt = r.onHide) == null ? void 0 : lt.call(r);
      });
      const _e = U.querySelector("[data-a=remove]");
      pr(_e, _e.querySelector(".removeFill"), 1200, () => {
        var lt;
        return (lt = r.onRemove) == null ? void 0 : lt.call(r);
      });
    }
    return U.addEventListener("keydown", (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), _e.stopPropagation(), ve()), _e.key === "Enter" && _e.target.matches("input") && (_e.preventDefault(), nt());
    }), U;
  }
  function De(e, a) {
    const r = o(a);
    r.innerHTML = "", e.forEach((c, p) => {
      if (c === ce && !ea()) {
        r.appendChild(qe(c, p));
        return;
      }
      const y = document.createElement("div");
      y.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (Fs(c) ? " noMeta" : ""), y.dataset.index = p, y.dataset.id = c.id;
      const _ = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : Tt(c.duration) : c.useGlobalTiming === !1 ? Tt(c.duration) : "Global timing", I = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", Q = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + Tt(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? zt(Fa(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + _, te = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ge(c.name) + '. Drag, or use the up and down arrow keys">' + ue + "</button>", Z = '<div class="moveText"><div class="moveItemName">' + Ge(c.name) + I + '</div><div class="moveMeta">' + Ge(Q) + "</div></div>", U = (Te) => Te.addEventListener("keydown", (ye) => {
        var it, _e;
        if (ye.key !== "ArrowUp" && ye.key !== "ArrowDown") return;
        ye.preventDefault();
        const ve = e.indexOf(c), nt = ve + (ye.key === "ArrowUp" ? -1 : 1);
        nt < 0 || nt >= e.length || (e.splice(ve, 1), e.splice(nt, 0, c), W(), (_e = (it = o(a).children[nt]) == null ? void 0 : it.querySelector(".dragHandle")) == null || _e.focus());
      });
      if (ea()) {
        y.classList.add("phoneRow"), y.tabIndex = 0, y.setAttribute("role", "button"), y.setAttribute("aria-label", "Edit " + (c.name || "step")), y.innerHTML = te + Z + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Te = y.querySelector(".dragHandle");
        Te.addEventListener("pointerdown", (ye) => Xe(ye, y, r, e)), U(Te), y.addEventListener("click", (ye) => {
          ye.target.closest(".dragHandle") || Ui(c, e);
        }), y.addEventListener("keydown", (ye) => {
          ye.key === "Enter" && ye.target === y && (ye.preventDefault(), Ui(c, e));
        }), r.appendChild(y);
        return;
      }
      y.innerHTML = te + Z + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ge(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ge(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + be + "</span></button></div>", y.querySelector(".editBtn").addEventListener("click", () => {
        _t(), ce = c, W(), Ye();
      }), y.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, W();
      });
      const Me = y.querySelector(".removeBtn");
      pr(Me, Me.querySelector(".removeFill"), 1200, () => {
        const Te = e.indexOf(c);
        Te < 0 || (e.splice(Te, 1), W(), Lt("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Te, e.length), 0, c), W();
        } }));
      });
      const Ve = y.querySelector(".dragHandle");
      Ve.addEventListener("pointerdown", (Te) => Xe(Te, y, r, e)), U(Ve), r.appendChild(y);
    });
  }
  const Ie = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ne = (e) => {
    var a;
    try {
      (a = navigator.vibrate) == null || a.call(navigator, e);
    } catch {
    }
  };
  function Xe(e, a, r, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const p = e.currentTarget, y = e.pointerId, _ = !Ie();
    try {
      p.setPointerCapture(y);
    } catch {
    }
    const I = a.closest(".exerciseScroller") || zn(a), Q = r.style.position;
    r.style.position = "relative";
    const te = [...r.children].filter((Je) => Je.classList.contains("moveRow")), Z = te.indexOf(a), U = parseFloat(getComputedStyle(r).rowGap) || 8, Me = a.offsetHeight, Ve = Me + U, Te = te.map((Je) => Je.offsetTop), ye = te.map((Je) => Je.offsetHeight), ve = () => r.getBoundingClientRect().top, nt = r.getBoundingClientRect().width, it = e.clientY - (ve() + Te[Z]), _e = e.clientX;
    let lt = e.clientY, xt = e.clientX, Ke = ve() + Te[Z], Ue = 0, Zt = 0, sn = 0, Et = 1, Ao = 0, we = Z, $e = !1, Jt = 0, Xt = !1, rs = !1, Ii = Te[Z];
    r.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", Ne(8);
    const ss = () => {
      const Je = lt - it + Me / 2 - ve();
      let ft = 0;
      return te.forEach((At, Sn) => {
        Sn !== Z && Je > Te[Sn] + ye[Sn] / 2 && ft++;
      }), ft;
    }, ls = () => {
      te.forEach((Je, ft) => {
        if (ft === Z) return;
        const At = Z < we && ft > Z && ft <= we ? -Ve : Z > we && ft >= we && ft < Z ? Ve : 0;
        Je.style.transform = At ? "translateY(" + At + "px)" : "";
      });
    }, br = () => {
      const Je = r.getBoundingClientRect(), ft = Math.abs(xt - _e) > Math.max(80, nt * 0.3) || xt < Je.left - 24 || xt > Je.right + 24;
      ft !== $e && ($e = ft, a.classList.toggle("willReturn", ft), Ne(ft ? 10 : 4));
      const At = $e ? Z : ss();
      At !== we && (we = At, ls(), $e || Ne(4));
    }, Eo = () => {
      if (we === Z) return Te[Z];
      const Je = te.filter((At, Sn) => Sn !== Z);
      let ft = Te[0];
      for (let At = 0; At < we; At++) ft += Je[At].offsetHeight + U;
      return ft;
    }, Hi = () => {
      const Je = _ ? Math.min(Math.abs(Ue) / 40, 1) : 0, ft = _ && !Xt ? Math.max(-3, Math.min(3, sn * 0.6)) : 0;
      a.style.transform = "translate(" + Zt.toFixed(2) + "px," + (Ke - (ve() + Te[Z])).toFixed(2) + "px) rotate(" + ft.toFixed(2) + "deg) scale(" + (Et * (1 - 0.04 * Je)).toFixed(4) + "," + (Et * (1 + 0.06 * Je)).toFixed(4) + ")";
    }, Ze = () => {
      Jt = requestAnimationFrame(Ze);
      const Je = xt - _e, ft = Xt ? ve() + Ii : lt - it, At = Xt ? 0 : $e ? Je * 0.9 : Math.max(-22, Math.min(22, Je * 0.22)), Sn = Xt ? 1 : $e ? 0.97 : 1.035;
      if (!_) {
        Ke = ft, Zt = Xt ? 0 : At, Et = 1, Hi(), Xt && Bt();
        return;
      }
      const tu = Xt ? 0.24 : 0.2, nu = Xt ? 0.62 : 0.68;
      Ue = (Ue + (ft - Ke) * tu) * nu, Ke += Ue, sn = (sn + (At - Zt) * 0.16) * 0.7, Zt += sn, Ao = (Ao + (Sn - Et) * 0.22) * 0.6, Et += Ao, Hi(), Xt && Math.abs(Ue) < 0.15 && Math.abs(ft - Ke) < 0.5 && Math.abs(Zt) < 0.5 && Math.abs(Et - 1) < 3e-3 && Bt();
    }, St = setInterval(() => {
      if (!I || Xt) return;
      const Je = I.getBoundingClientRect(), ft = 56, At = lt < Je.top + ft ? -10 : lt > Je.bottom - ft ? 10 : 0;
      At && (I.scrollTop += At, br());
    }, 30);
    function Bt() {
      if (rs) return;
      rs = !0, cancelAnimationFrame(Jt);
      const Je = we !== Z, ft = a.dataset.id;
      if (r.classList.remove("reordering"), te.forEach((Sn) => {
        Sn.style.transition = "none", Sn.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), r.style.position = Q, Je) {
        const [Sn] = c.splice(Z, 1);
        c.splice(we, 0, Sn);
      }
      W();
      const At = ft && r.querySelector('.moveRow[data-id="' + ft + '"]');
      At && _ && At.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), Je && Lt("Order saved");
    }
    const Qt = (Je) => {
      if (Je.pointerId === y) {
        if (Je.pointerType === "mouse" && Je.buttons === 0) {
          Jn();
          return;
        }
        lt = Je.clientY, xt = Je.clientX, br();
      }
    }, Cn = (Je) => {
      Je.pointerId === y && Jn();
    };
    function Jn() {
      Xt || (window.removeEventListener("pointermove", Qt, !0), window.removeEventListener("pointerup", Cn, !0), window.removeEventListener("pointercancel", Cn, !0), p.removeEventListener("lostpointercapture", Jn), clearInterval(St), $e && we !== Z && (we = Z, ls()), Ii = Eo(), Xt = !0, Ne(6), setTimeout(Bt, 800));
    }
    window.addEventListener("pointermove", Qt, !0), window.addEventListener("pointerup", Cn, !0), window.addEventListener("pointercancel", Cn, !0), p.addEventListener("lostpointercapture", Jn), Jt = requestAnimationFrame(Ze), Hi();
  }
  function pt() {
    var p, y, _, I;
    const e = tt[dt], a = (p = o("warmupList")) == null ? void 0 : p.closest("section"), r = (y = o("cooldownList")) == null ? void 0 : y.closest("section"), c = (I = (_ = o("strengthList")) == null ? void 0 : _.closest("section")) == null ? void 0 : I.querySelector(".sectionTitle");
    e != null && e.customSequence ? (a && (a.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (a && (a.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), c && (c.textContent = "Kettlebell work")), De(at, "warmupList"), De(tn, "strengthList"), De(Vt, "cooldownList");
  }
  function _t() {
    if (!Ee) return;
    const { item: e, arr: a } = Ee;
    Ee = null;
    const r = a.indexOf(e);
    r >= 0 && a.splice(r, 1), ce === e && (ce = null);
  }
  function vt(e) {
    return e.id === "warmupList" ? { arr: at, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Vt, kind: "cooldown", group: "Cooldown" } : { arr: tn, kind: "work", group: "" };
  }
  function Gt(e, a) {
    const r = vt(a), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(T.value) } : { id: "movement-" + c, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(k.value) };
  }
  const nn = "cubic-bezier(.34,1.46,.64,1)";
  function on(e, a) {
    if (Ie() || !e) {
      a();
      return;
    }
    const r = (y) => {
      var _;
      return ((_ = y.dataset) == null ? void 0 : _.id) || y;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], p = new Map(c().map((y) => [r(y), y.getBoundingClientRect().top]));
    a(), c().forEach((y) => {
      const _ = p.get(r(y));
      if (_ === void 0) return;
      const I = _ - y.getBoundingClientRect().top;
      Math.abs(I) < 0.5 || y.animate([{ transform: "translateY(" + I + "px)" }, { transform: "none" }], { duration: 440, easing: nn });
    });
  }
  function Kt(e, a) {
    if (!e || Ie()) return;
    const r = e.offsetHeight, c = Math.max(0, r - (a || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: nn });
  }
  function io(e, a, r, c) {
    const { arr: p } = vt(a), y = Gt(e, a);
    p.splice(Math.max(0, Math.min(r, p.length)), 0, y), Ee = { item: y, arr: p }, ce = y, on(a.closest(".exerciseScroller,.createStepSlot") || a, () => W());
    const _ = a.querySelector(".moveRow.editing");
    return Kt(_, c), Ye(e === "rest"), _;
  }
  function zn(e) {
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
  function jn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ht(e, a, r, c) {
    (ce || Ee) && (_t(), ce = null, W());
    const p = e.getBoundingClientRect(), y = so(a, ro[a]);
    y.setAttribute("aria-hidden", "true"), y.style.width = p.width + "px", y.style.height = p.height + "px", y.style.transform = "translate(" + p.left + "px," + p.top + "px)", e.classList.add("lifting");
    const _ = zn(e);
    return un({
      ghost: y,
      origin: p,
      sx: r,
      sy: c,
      scroller: _,
      column: e.closest(".exerciseScroller,.createFlow") || _,
      home: () => e.getBoundingClientRect(),
      onDrop: (I, Q, te) => {
        jn(y), e.classList.remove("lifting"), io(a, I, Q, te);
      },
      onReturn: () => {
        jn(y), e.classList.remove("lifting");
      }
    });
  }
  function un({ ghost: e, origin: a, sx: r, sy: c, scroller: p, column: y, home: _, onDrop: I, onReturn: Q, rowLook: te = !1 }) {
    var Hi;
    const Z = !Ie(), U = ((Hi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Hi.offsetHeight) || 80, Me = r - a.left, Ve = c - a.top, Te = 44;
    let ye = r, ve = c, nt = a.left, it = a.top, _e = 0, lt = 0, xt = !Z, Ke = null, Ue = null, Zt = -1, sn = 0, Et = null;
    const Ao = () => ["warmupList", "strengthList", "cooldownList"].map((Ze) => o(Ze)).filter((Ze) => Ze && Ze.getClientRects().length && !Ze.closest("[hidden]")), we = (Ze) => {
      if (Ze === Ke) return;
      Ke = Ze, e.classList.toggle("overList", !!Ze || te);
      const St = Ze ? Ze.getBoundingClientRect().width : a.width;
      e.style.width = St + "px", e.style.height = (Ze ? U : a.height) + "px";
    }, $e = (Ze) => {
      Ze.classList.add("leaving"), Ze.style.height = "0px", Ze.style.marginTop = "-8px", setTimeout(() => Ze.remove(), Z ? 320 : 0);
    }, Jt = (Ze, St, Bt) => {
      if (Ue && Ue.parentNode === Ze && Zt === Bt || (Ue && ($e(Ue), Ue = null, Zt = -1), !Ze)) return;
      const Qt = document.createElement("div");
      Qt.className = "dropSlot", Ze.insertBefore(Qt, St), Ue = Qt, Zt = Bt, Qt.getBoundingClientRect(), Qt.style.height = U + "px", Qt.style.marginTop = "0px";
    }, Xt = () => {
      let Ze = null, St = 1 / 0;
      for (const Jn of Ao()) {
        const Je = Jn.getBoundingClientRect();
        if (ye < Je.left - 48 || ye > Je.right + 48) continue;
        const ft = Je.top - 28, At = Je.bottom + 28, Sn = ve < ft ? ft - ve : ve > At ? ve - At : 0;
        Sn < St && (St = Sn, Ze = Jn);
      }
      const Bt = y == null ? void 0 : y.getBoundingClientRect(), Cn = Bt && ye >= Bt.left && ye <= Bt.right && ve >= Bt.top && ve <= Bt.bottom || St === 0 ? Ze : null;
      if (Cn) {
        const Jn = [...Cn.children].filter((ft) => ft.classList.contains("moveRow"));
        let Je = Jn.findIndex((ft) => {
          const At = ft.getBoundingClientRect();
          return ve < At.top + At.height / 2;
        });
        Je < 0 && (Je = Jn.length), Jt(Cn, Jn[Je] || null, Je);
      } else Jt(null);
      we(Cn);
    }, rs = () => {
      if (Et) return Et.aim();
      if (Ke) {
        const Ze = Ke.getBoundingClientRect();
        let St = ve - U / 2;
        return Ue && (St = St * 0.6 + Ue.getBoundingClientRect().top * 0.4), { x: Ze.left, y: St };
      }
      return { x: ye - Me, y: ve - Ve };
    }, Ii = (Ze, St, Bt, Qt) => {
      e.style.transform = "translate(" + nt + "px," + it + "px) rotate(" + Ze + "deg) rotate(" + St + "rad) scale(" + Bt + "," + Qt + ") rotate(" + -St + "rad)";
    }, ss = () => {
      if (sn = requestAnimationFrame(ss), !xt) {
        const Je = ye - r, ft = ve - c, At = Math.min(Math.hypot(Je, ft) / Te, 1);
        nt = a.left + Je * 0.35, it = a.top + ft * 0.35, Ii(0, Math.atan2(ft, Je), 1 + 0.155 * At, 1 - 0.1 * At);
        return;
      }
      const Ze = rs();
      if (!Z) {
        nt = Ze.x, it = Ze.y, Ii(0, 0, 1, 1), Et && (cancelAnimationFrame(sn), Et.done());
        return;
      }
      const St = Et ? Et.k : 0.17, Bt = Et ? Et.d : 0.7;
      _e = (_e + (Ze.x - nt) * St) * Bt, lt = (lt + (Ze.y - it) * St) * Bt, nt += _e, it += lt;
      const Qt = Math.hypot(_e, lt), Cn = Math.min(Qt / 48, 1), Jn = Ke || Et ? 0 : Math.max(-5, Math.min(5, _e * 0.32));
      Ii(Jn, Math.atan2(lt, _e), 1 + 0.1 * Cn, 1 - 0.063 * Cn), Et && Qt < 0.15 && Math.hypot(Ze.x - nt, Ze.y - it) < 0.6 && (cancelAnimationFrame(sn), Et.done());
    }, ls = setInterval(() => {
      if (!p || Et) return;
      const Ze = p.getBoundingClientRect(), St = 64, Bt = ve < Ze.top + St ? -(Ze.top + St - ve) / 4 : ve > Ze.bottom - St ? (ve - (Ze.bottom - St)) / 4 : 0;
      Bt && (p.scrollTop += Math.max(-18, Math.min(18, Bt)), Xt());
    }, 30);
    sn = requestAnimationFrame(ss);
    let br = !1;
    const Eo = (Ze, St) => {
      if (br) return;
      br = !0, cancelAnimationFrame(sn);
      const Bt = Ue ? Ue.offsetHeight : U;
      !Ze && Ue && (Ue.remove(), Ue = null), Ze ? I(Ze, St, Bt) : Q();
    };
    return {
      move(Ze, St) {
        ye = Ze, ve = St, !xt && Math.hypot(ye - r, ve - c) > Te && (xt = !0, _e = (ye - r) * 0.085, lt = (ve - c) * 0.085), xt && Xt();
      },
      drop(Ze) {
        clearInterval(ls);
        const St = Ke, Bt = Zt;
        if (!Ze && St && Ue) {
          const Qt = Ue;
          Et = { k: 0.24, d: 0.62, aim: () => {
            const Cn = Qt.getBoundingClientRect();
            return { x: Cn.left, y: Cn.top };
          }, done: () => Eo(St, Bt) }, setTimeout(() => Eo(St, Bt), 650), Z || (cancelAnimationFrame(sn), Eo(St, Bt));
          return;
        }
        Jt(null), we(null), Et = { k: 0.2, d: 0.66, aim: () => {
          const Qt = _();
          return { x: Qt.left, y: Qt.top };
        }, done: () => Eo(null) }, setTimeout(() => Eo(null), 650), Z || (cancelAnimationFrame(sn), Eo(null));
      }
    };
  }
  function kn(e, a) {
    let r = !1;
    e.addEventListener("click", (c) => {
      if (r) {
        r = !1, c.preventDefault();
        return;
      }
      if (ea()) {
        Tr(a);
        return;
      }
      const p = o("strengthList"), y = io(a, p, vt(p).arr.length, 0);
      y == null || y.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const p = c.pointerId, y = c.clientX, _ = c.clientY;
      let I = null, Q = !1;
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
          if (!I) {
            if (Math.hypot(ve.clientX - y, ve.clientY - _) < 6) return;
            I = ht(e, a, y, _);
          }
          I.move(ve.clientX, ve.clientY);
        }
      }, Z = (ve) => {
        ve.pointerId === p && ye(!1);
      }, U = (ve) => {
        ve.pointerId === p && ye(!0);
      }, Me = () => ye(!1), Ve = () => ye(!0), Te = (ve) => {
        ve.key === "Escape" && I && (ve.preventDefault(), ve.stopPropagation(), ye(!0));
      };
      function ye(ve) {
        if (!Q && (Q = !0, window.removeEventListener("pointermove", te, !0), window.removeEventListener("pointerup", Z, !0), window.removeEventListener("pointercancel", U, !0), window.removeEventListener("keydown", Te, !0), window.removeEventListener("blur", Ve), e.removeEventListener("lostpointercapture", Me), I)) {
          const nt = I;
          I = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), nt.drop(ve);
        }
      }
      window.addEventListener("pointermove", te, !0), window.addEventListener("pointerup", Z, !0), window.addEventListener("pointercancel", U, !0), window.addEventListener("keydown", Te, !0), window.addEventListener("blur", Ve), e.addEventListener("lostpointercapture", Me);
    });
  }
  const gn = (cd = window.matchMedia) == null ? void 0 : cd.call(window, "(max-width: 620px)");
  function ea() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const lo = (e) => e.charAt(0).toUpperCase() + e.slice(1), ha = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let rn = null, Rt = null;
  function si(e, a, r, c) {
    pn(), o("sheetTitle").textContent = e;
    const p = o("sheetBody");
    p.innerHTML = "", p.appendChild(a), rn = r || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !p.contains(a)) return;
      const y = c ? p.querySelector("input[data-f=url],input[data-f=name]") : p.querySelector("button,input,select");
      y == null || y.focus({ preventScroll: !0 });
    }, Ie() ? 0 : 360);
  }
  function pn() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const a = rn;
    rn = null, a == null || a(), setTimeout(Ma, 0);
  }
  o("sheetScrim").addEventListener("click", pn), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), pn());
  });
  function Ui(e, a) {
    const r = qe(e, a.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        pn(), W(), Lt(lo(ha(e)) + " updated");
      },
      onCancel: pn,
      onHide() {
        e.hidden = !e.hidden, pn(), W(), Lt((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        pn();
        const c = a.indexOf(e);
        c < 0 || (a.splice(c, 1), W(), Lt("Removed " + e.name, { label: "Undo", run: () => {
          a.splice(Math.min(c, a.length), 0, e), W();
        } }));
      }
    });
    si("Edit " + ha(e), r, null, !1);
  }
  function Ss() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, r, c, p]) => {
      const y = document.createElement("button");
      y.type = "button", y.className = "sheetChoice", y.innerHTML = '<span class="timeIcon" aria-hidden="true">' + xe(r) + "</span><span><strong>" + c + "</strong><small>" + p + "</small></span>", y.addEventListener("click", () => Tr(a)), e.appendChild(y);
    }), si("Add to the move", e, null, !1);
  }
  function Tr(e) {
    Rt && Wo();
    const a = Gt(e, o("strengthList")), r = qe(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        pn(), Ts(a, e);
      },
      onCancel: pn
    });
    si("New " + ha(a), r, null, !0);
  }
  const li = o("workoutModal").querySelector(".modalStatic"), Wa = { parent: li.parentNode, next: li.nextSibling };
  function Lr() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(li);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", pn), e.appendChild(a), si("Setup", e, () => {
      Wa.parent.insertBefore(li, Wa.next), Yi();
    }, !1);
  }
  function Yi() {
    var a, r;
    const e = o("setupSummaryName");
    e && (e.textContent = (((a = o("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((r = tt[dt]) == null ? void 0 : r.name) || "Move", o("setupSummaryMeta").textContent = ka.textContent);
  }
  o("setupSummary").addEventListener("click", Lr), o("addFab").addEventListener("click", Ss);
  function Fo() {
    const e = o("strengthList");
    return zn(e) || e.closest(".exerciseScroller");
  }
  function qa() {
    const e = o("strengthList").getBoundingClientRect(), a = (Fo() || o("strengthList")).getBoundingClientRect(), r = (Rt == null ? void 0 : Rt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(a.top + 12, Math.min(a.bottom - r - 96, a.top + a.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function Ts(e, a) {
    var I;
    const r = so(a, [e.name || ro[a][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ge(e.name) + '">✕</button>', r.appendChild(c), Rt = { item: e, type: a, ghost: r };
    const p = ((I = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : I.offsetHeight) || 64;
    r.style.width = o("strengthList").getBoundingClientRect().width + "px", r.style.height = p + "px";
    const y = qa(), _ = $t.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + y.left + "px," + _ + "px)", r.getBoundingClientRect(), Ie() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + y.left + "px," + y.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", Wo), c.querySelector("[data-a=discard]").addEventListener("click", _s), r.addEventListener("pointerdown", Ls);
  }
  function Ls(e) {
    if (!Rt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: a, ghost: r } = Rt, c = e.pointerId;
    try {
      r.setPointerCapture(c);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const p = r.getBoundingClientRect(), y = Fo(), _ = un({
      ghost: r,
      origin: { left: p.left, top: p.top, width: p.width, height: p.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: y,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || y,
      rowLook: !0,
      home: qa,
      onDrop: (ye, ve, nt) => {
        Rt = null, jn(r), Oo(a, ye, ve, nt);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let I = !1;
    const Q = (ye) => {
      if (ye.pointerId === c) {
        if (ye.pointerType === "mouse" && ye.buttons === 0) {
          Te(!1);
          return;
        }
        _.move(ye.clientX, ye.clientY);
      }
    }, te = (ye) => {
      ye.pointerId === c && Te(!1);
    }, Z = (ye) => {
      ye.pointerId === c && Te(!0);
    }, U = () => Te(!1), Me = () => Te(!0), Ve = (ye) => {
      ye.key === "Escape" && (ye.preventDefault(), Te(!0));
    };
    function Te(ye) {
      I || (I = !0, window.removeEventListener("pointermove", Q, !0), window.removeEventListener("pointerup", te, !0), window.removeEventListener("pointercancel", Z, !0), window.removeEventListener("keydown", Ve, !0), window.removeEventListener("blur", Me), r.removeEventListener("lostpointercapture", U), _.drop(ye));
    }
    window.addEventListener("pointermove", Q, !0), window.addEventListener("pointerup", te, !0), window.addEventListener("pointercancel", Z, !0), window.addEventListener("keydown", Ve, !0), window.addEventListener("blur", Me), r.addEventListener("lostpointercapture", U);
  }
  function Oo(e, a, r, c) {
    const p = vt(a);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = p.kind, p.group && (!e.group || e.group === "Movement") && (e.group = p.group)), p.arr.splice(Math.max(0, Math.min(r, p.arr.length)), 0, e), on(a.closest(".exerciseScroller,.createStepSlot") || a, () => W()), Kt(a.querySelector('.moveRow[data-id="' + e.id + '"]'), c), Lt(lo(ha(e)) + " added");
  }
  function Wo() {
    var c;
    if (!Rt) return;
    const { item: e, ghost: a } = Rt;
    Rt = null, jn(a);
    const r = o("strengthList");
    Oo(e, r, vt(r).arr.length, 0), (c = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
  }
  function _s() {
    if (!Rt) return;
    const e = Rt.ghost;
    Rt = null, jn(e), Lt("Discarded");
  }
  function _r() {
    Rt && (Rt.ghost.remove(), Rt = null);
  }
  window.addEventListener("resize", () => {
    if (Rt != null && Rt.ghost.classList.contains("hovering")) {
      const e = qa();
      Rt.ghost.style.width = e.width + "px", Rt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (ud = gn == null ? void 0 : gn.addEventListener) == null || ud.call(gn, "change", () => {
    pn(), Rt && !ea() && Wo(), pt();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ma() {
    const e = o("workoutModal"), a = window.visualViewport;
    if (!e.classList.contains("open") || !ea()) {
      Ar();
      return;
    }
    const r = a ? a.offsetTop : 0, c = a ? a.offsetLeft : 0, p = a ? a.width : window.innerWidth, y = a ? a.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: p + "px", height: y + "px", top: r + "px", left: c + "px" });
    const _ = e.getBoundingClientRect();
    Math.abs(_.top - r) > 0.5 && (e.style.top = 2 * r - _.top + "px"), Math.abs(_.left - c) > 0.5 && (e.style.left = 2 * c - _.left + "px");
  }
  function Ar() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (pd = window.visualViewport) == null || pd.addEventListener("resize", Ma), (md = window.visualViewport) == null || md.addEventListener("scroll", Ma), window.addEventListener("resize", Ma), window.addEventListener("scroll", Ma, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ma, 250));
  function di() {
    tn.length > 0;
    const e = o("addMovementBtn"), a = o("addRestBtn");
    e && (e.innerHTML = ue + "<span>Add movement</span>"), a && (a.innerHTML = ue + "<span>Add rest</span>");
    const r = o("addVideoBtn");
    r && (r.innerHTML = ue + "<span>Add video</span>");
  }
  function qo() {
    const e = o("useGlobalTiming").checked, a = o("addMovementDuration"), r = o("addMovementUnit");
    a.disabled = e, r.disabled = e, a.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Tt(k.value);
    const c = o("useGlobalRestTiming").checked, p = o("addRestDuration"), y = o("addRestUnit");
    p.disabled = c, y.disabled = c, p.parentElement.style.opacity = c ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Tt(T.value);
  }
  let Zi = "movement";
  function As(e) {
    Zi = e;
    const a = o("movementFields"), r = o("restFields");
    a.hidden = e !== "movement", r.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), qo();
  }
  function ci() {
    tt[dt];
    const e = mt ? !0 : o("useGlobalTiming").checked, a = e ? Number(k.value) : Qn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), r = mt ? !0 : o("useGlobalRestTiming").checked, c = r ? Number(T.value) : Qn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Zi === "rest") {
      const p = o("addRestTitle").value.trim() || "Rest", y = o("addRestGroup").value.trim() || "Rest";
      tn.push({
        id: "rest-" + Date.now(),
        name: p,
        group: y,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, c || Number(T.value))
      }), W(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Lt("Rest added"), mt && (q("movements"), ge());
    } else {
      const p = o("addMovementInput").value.trim();
      if (!p) return;
      const y = o("addMovementGroup").value.trim() || "Movement";
      tn.push({
        id: "movement-" + Date.now(),
        name: p,
        group: y,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, a || Number(k.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", W(), o("movementCreator").hidden = !0, Lt("Movement added"), mt && (q("movements"), ge());
    }
    di();
  }
  let Ki = null;
  function Lt(e, a) {
    const r = o("toast");
    r.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, r.appendChild(c), a) {
      const p = document.createElement("button");
      p.type = "button", p.className = "toastAction", p.textContent = a.label, p.addEventListener("click", () => {
        a.run(), r.classList.remove("show", "withAction"), clearTimeout(Ki);
      }), r.appendChild(p);
    }
    r.classList.toggle("withAction", !!a), r.classList.add("show"), clearTimeout(Ki), Ki = setTimeout(() => r.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const $i = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ji = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Xi(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function co(e, a) {
    return $i[Xi(a)];
  }
  function Es(e) {
    return Ji[Xi(e)];
  }
  function Nt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Ca() {
    return { morning: ut().morningTime || "08:00", evening: ut().eveningTime || "19:00" };
  }
  function uo(e) {
    const [a, r] = String(e).split(":").map(Number);
    return (a || 0) * 60 + (r || 0);
  }
  function Vo(e) {
    const a = Ca();
    return e.getHours() * 60 + e.getMinutes() >= uo(a.evening) ? "evening" : "morning";
  }
  function zo(e, a) {
    return ct.checkins.find((r) => r.date === e && r.slot === a);
  }
  function ui(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function pi() {
    const e = /* @__PURE__ */ new Date(), a = Nt(e), r = Vo(e), c = Ca(), p = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && p < uo(c.morning) || ui(zo(a, r)) ? null : r;
  }
  const Mn = o("checkinModal"), fa = o("checkinTab"), Er = o("checkinBadge"), Sa = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function jo(e) {
    const { input: a, fill: r } = Sa[e];
    r.style.width = a.value + "%", a.setAttribute("aria-valuetext", co(e, a.value));
  }
  Object.keys(Sa).forEach((e) => Sa[e].input.addEventListener("input", () => jo(e)));
  let Gn = null;
  function mi() {
    const e = Ca(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes();
    return r < uo(e.morning) ? "Next check-in at " + e.morning : r < uo(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Dr() {
    const e = Ca(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes(), c = (p, y) => {
      const [_, I] = p.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (y ? 1 : 0), _, I);
    };
    return r < uo(e.morning) ? { date: c(e.morning), time: e.morning } : r < uo(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let Qi = null, hi = null;
  function Rr() {
    if (pi()) {
      Ot(), Va();
      return;
    }
    const e = Dr(), a = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    o("peekCountdown").textContent = r + ":" + String(c).padStart(2, "0") + ":" + String(p).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function fi() {
    Rr(), fa.classList.add("peek"), clearInterval(hi), hi = setInterval(Rr, 1e3), clearTimeout(Qi), Qi = setTimeout(Ot, 6e3);
  }
  function Ot() {
    fa.classList.remove("peek"), clearInterval(hi), clearTimeout(Qi);
  }
  function Nr() {
    const e = pi();
    if (!e) {
      fa.classList.contains("peek") ? Ot() : fi();
      return;
    }
    Gn = { date: Nt(/* @__PURE__ */ new Date()), slot: e };
    const r = zo(Gn.date, e), c = ct.checkins.find((p) => ui(p));
    Object.keys(Sa).forEach((p) => {
      Sa[p].input.value = (r == null ? void 0 : r[p]) ?? (c == null ? void 0 : c[p]) ?? 50, jo(p);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Mn.classList.add("open"), Mn.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Sa.mood.input.focus());
  }
  function Ta() {
    Mn.classList.remove("open"), Mn.setAttribute("aria-hidden", "true"), Gn && (ga = Gn.date + "-" + Gn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ga);
    } catch {
    }
    Gn = null, Va();
  }
  function po() {
    if (!Gn) return;
    if (ui(zo(Gn.date, Gn.slot))) {
      Ta();
      return;
    }
    const { date: e, slot: a } = Gn;
    let r = zo(e, a);
    r || (r = { date: e, slot: a }, ct.checkins.unshift(r), ct.checkins = ct.checkins.slice(0, 2e3)), r.mood = Number(Sa.mood.input.value), r.energy = Number(Sa.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), xn(), s.fire("checkin", { slot: a, mood: r.mood, energy: r.energy, mood_label: co("mood", r.mood), energy_label: co("energy", r.energy) }), Lt((a === "morning" ? "Morning" : "Evening") + " check-in saved"), Ta(), gi(), Go(), ni(), Qa();
  }
  let ga = "";
  try {
    ga = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Va() {
    const e = pi();
    Er.hidden = !e, fa.hidden = !e, e || Ot(), fa.classList.toggle("due", !!e), fa.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : mi()), fa.title = e ? "Check in now" : mi();
  }
  function er() {
    Va();
    const e = pi();
    !e || Mn.classList.contains("open") || ut().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !ke.home.classList.contains("active") || $t.classList.contains("open") || ga !== Nt(/* @__PURE__ */ new Date()) + "-" + e && Nr());
  }
  fa.addEventListener("click", Nr), o("checkinLater").addEventListener("click", Ta), o("checkinSave").addEventListener("click", po), Mn.addEventListener("click", (e) => {
    e.target === Mn && Ta();
  }), Mn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ta());
  }), setInterval(er, 3e4);
  function gi() {
    const e = Nt(/* @__PURE__ */ new Date()), a = (r) => ct.checkins.find((c) => c.date === e && c[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, c]) => {
      const p = a(r);
      o(c).textContent = p ? co(r, p[r]) : "—";
    });
  }
  function Go() {
    const e = o("feelCard");
    if (!e) return;
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), c = [...Array(7)].map((te, Z) => {
      const U = new Date(r.getFullYear(), r.getMonth(), r.getDate() + Z), Me = Nt(U), Ve = ct.checkins.filter((ye) => ye.date === Me), Te = (ye) => {
        const ve = Ve.map((nt) => nt[ye]).filter((nt) => nt != null);
        return ve.length ? ve.reduce((nt, it) => nt + it, 0) / ve.length : null;
      };
      return { d: U, key: Me, mood: Te("mood"), energy: Te("energy"), count: Ve.filter(ui).length, future: U > a && Me !== Nt(a) };
    }), p = (te) => {
      const Z = c.map((U) => U[te]).filter((U) => U != null);
      return Z.length ? Z.reduce((U, Me) => U + Me, 0) / Z.length : null;
    }, y = p("mood"), _ = p("energy"), I = (te, Z) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + te + "</span><span>" + (Z == null ? "—" : Ge(co("", Z))) + '</span></div><div class="feelTrack"><span style="width:' + (Z == null ? 0 : Math.max(4, Z)) + "%;background:" + (Z == null ? "transparent" : Es(Z)) + '"></span></div></div>', Q = c.filter((te) => te.mood != null && te.energy != null).sort((te, Z) => Z.mood + Z.energy - (te.mood + te.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (y == null ? "No check-ins yet" : Ge(co("", (y + _) / 2))) + '</div><div class="weekCopy">' + (y == null ? "Your first check-in will appear here." : "on average this week" + (Q ? " · best day " + Ge(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(Q.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (te) => '<div class="weekChip feelDay' + (te.future ? " future" : "") + (te.key === Nt(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ge(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(te.d)) + "</strong>" + (te.count >= 2 ? '<span class="weekTick">' + xe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(te.count) + "</span>") + "</div>" + I("Mood", te.mood) + I("Energy", te.energy) + "</div>"
    ).join("") + "</div>";
  }
  const vi = o("upcomingCountSetting");
  vi.addEventListener("change", () => {
    Pt = vi.value === "all" ? "all" : Number(vi.value), jr();
  });
  const Uo = o("tempoRevealBtn"), za = o("tempoExperiment"), Bn = o("tempoQuad"), mo = o("tempoDot"), Ds = o("tempoEstimate"), Pn = o("tempoReadout");
  let Wt = { x: 0.5, y: 0.5 }, vn = !1, ho = { total: 20, work: 45, rest: 15 };
  function ja(e, a, r, c) {
    const p = Math.max(a, Math.min(r, e));
    return Math.round((p - a) / c) * c + a;
  }
  function tr(e, a) {
    const r = (e - 0.5) * 2, c = (a - 0.5) * 2, p = ja(
      ho.total + r * 5 + c * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), y = ja(
      ho.work + r * 10 + c * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), _ = ja(
      ho.rest + r * 6 + c * 6,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    );
    return C.value = p, k.value = y, T.value = _, J.textContent = y + " sec", ee.textContent = _ + " sec", gt(), { total: p, work: y, rest: _ };
  }
  function La(e, a) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", p = tr(e, a);
    Pn.textContent = r + " + " + c, Ds.textContent = p.total + " min", Bn.setAttribute("aria-valuetext", r + " and " + c + ", estimated " + p.total + " minutes");
  }
  function fo(e) {
    const a = Bn.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)), c = Math.max(0, Math.min(1, (e.clientY - a.top) / a.height));
    Wt = { x: r, y: c }, mo.style.left = r * 100 + "%", mo.style.top = c * 100 + "%", La(r, c);
  }
  Uo.addEventListener("click", () => {
    const e = za.hidden;
    za.hidden = !e, Uo.setAttribute("aria-expanded", e ? "true" : "false"), Uo.textContent = e ? "Now close this" : "Don’t try this!", e && (ho = {
      total: Number(C.value),
      work: Number(k.value),
      rest: Number(T.value)
    }, Wt = { x: 0.5, y: 0.5 }, mo.style.left = "50%", mo.style.top = "50%", La(Wt.x, Wt.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === e));
  }));
  const _a = o("testingFeedbackForm"), In = o("testingFeedbackThanks"), Br = o("testingFeedbackAgain");
  _a.addEventListener("submit", (e) => {
    e.preventDefault(), _a.hidden = !0, In.hidden = !1, Lt("Feedback captured for prototype");
  }), Br.addEventListener("click", (e) => {
    e.preventDefault(), _a.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), In.hidden = !0, _a.hidden = !1;
  }), Bn.addEventListener("pointerdown", (e) => {
    var a;
    vn = !0, fo(e);
    try {
      (a = Bn.setPointerCapture) == null || a.call(Bn, e.pointerId);
    } catch {
    }
  }), Bn.addEventListener("pointermove", (e) => {
    vn && fo(e);
  }), Bn.addEventListener("pointerup", (e) => {
    vn && (vn = !1, fo(e), W());
  }), Bn.addEventListener("pointercancel", () => vn = !1), Bn.addEventListener("keydown", (e) => {
    let { x: a, y: r } = Wt, c = !0;
    e.key === "ArrowLeft" ? a -= 0.05 : e.key === "ArrowRight" ? a += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : c = !1, c && (e.preventDefault(), a = Math.max(0, Math.min(1, a)), r = Math.max(0, Math.min(1, r)), Wt = { x: a, y: r }, mo.style.left = a * 100 + "%", mo.style.top = r * 100 + "%", La(a, r), W());
  });
  const $t = o("workoutModal");
  let go = null;
  function Ga(e) {
    return e.map((a) => ({ ...a }));
  }
  function Pr() {
    const e = tt[dt];
    return {
      key: dt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ga(at),
      strength: Ga(tn),
      cooldown: Ga(Vt),
      total: Number(C.value),
      work: Number(k.value),
      rest: Number(T.value),
      rounds: Number(et.value) || 1
    };
  }
  function Ir(e = !1) {
    mt = !!e, ce = null, Ee = null, pn(), _r(), go = Pr(), o("moveEditorTitle").textContent = mt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !mt, o("warmupRow").hidden = mt, o("deleteMoveOpen").hidden = mt;
    const a = o("createMoveOptions");
    a.hidden = !mt;
    {
      const r = tt[dt];
      o("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), o("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (Un(), mt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const r = tt[dt];
      Oa((r == null ? void 0 : r.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, As("movement"), di(), qo(), za.hidden = !0, Uo.setAttribute("aria-expanded", "false"), Uo.textContent = "Don’t try this!", $t.classList.toggle("createMode", mt), $t.querySelector(".modal").classList.toggle("createMode", mt), $t.classList.add("open"), $t.setAttribute("aria-hidden", "false"), Ma(), mt && Se();
  }
  function nr() {
    const e = tt[dt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Un() {
    const e = nr(), a = o("warmupSwitch");
    a.classList.toggle("on", e), a.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = tt[dt];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, E()) : (e.warmupOff = !e.warmupOff, W()), Un());
  });
  function Ua() {
    pn(), _r(), Ar(), Ee = null, ce = null, $t.classList.contains("createMode") && g(), $t.classList.remove("createMode"), $t.querySelector(".modal").classList.remove("createMode"), $t.classList.remove("open"), $t.setAttribute("aria-hidden", "true");
  }
  function ar() {
    if (!go) return;
    const e = go;
    e.profile && (tt[e.key] = JSON.parse(JSON.stringify(e.profile))), dt = e.key, at = Ga(e.warmup), tn = Ga(e.strength), Vt = Ga(e.cooldown), C.value = e.total, k.value = e.work, T.value = e.rest, et.value = e.rounds || 1;
    const a = tt[dt];
    if (a) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === dt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = a.name);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a.name);
        const y = r.querySelector(".sourceTag");
        y && (y.textContent = a.source);
      }
      m.value = a.name;
    }
    W();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (mt) {
      const e = dt;
      delete tt[e], mt = !1, En = null, ot(ct.order.find((a) => tt[a]) || Object.keys(tt)[0]);
    } else
      ar();
    Ua();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    pn(), Rt && Wo();
    const e = tt[dt], a = m.value.trim() || "New move";
    if (e && (e.name = a), _t(), ce = null, W(), mt && e)
      Io(dt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === dt)), mt = !1, En = null, ct.order.includes(dt) || ct.order.push(dt), Lt("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = a);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a);
      }
      Lt("Move saved");
    }
    go = null, Ua(), xn();
  }), $t.addEventListener("click", (e) => {
    if (e.target === $t) {
      if (mt) {
        const a = dt;
        delete tt[a], mt = !1, En = null, ot(ct.order.find((r) => tt[r]) || Object.keys(tt)[0]);
      } else
        ar();
      Ua();
    }
  }), kn(o("addMovementBtn"), "movement"), kn(o("addRestBtn"), "rest"), kn(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", qo), o("useGlobalRestTiming").addEventListener("change", qo), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Oa(e.dataset.movePreset, !0), W();
  })), o("includeWarmupPreset").addEventListener("change", E), o("includeCooldownPreset").addEventListener("change", E), o("includeWarmupPreset").addEventListener("change", ge), o("includeCooldownPreset").addEventListener("change", ge), m.addEventListener("input", ge), m.addEventListener("input", Yi), o("confirmAddMovement").addEventListener("click", ci), o("confirmAddRest").addEventListener("click", ci), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && ci();
  });
  const vo = o("countdown"), bi = o("countNum"), va = o("countdownPixelCanvas");
  let Hn = null, Yo = "appear";
  class Rs {
    constructor(a, r, c, p, y, _, I) {
      this.width = a.width, this.height = a.height, this.ctx = r, this.x = c, this.y = p, this.color = y, this.speed = (Math.random() * 0.8 + 0.1) * _, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = I, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let or = [], Hr = 1, ir = 1;
  function Aa() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Ns() {
    var te;
    if (!va) return;
    const e = Aa(), a = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    Hr = a, ir = r;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    va.width = Math.floor(a * c), va.height = Math.floor(r * c), va.style.width = a + "px", va.style.height = r + "px";
    const p = va.getContext("2d");
    p.setTransform(c, 0, 0, c, 0, 0);
    const y = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], _ = 12, I = (te = window.matchMedia) == null ? void 0 : te.call(window, "(prefers-reduced-motion: reduce)").matches, Q = I ? 0 : 0.055;
    or = [];
    for (let Z = 0; Z < a; Z += _)
      for (let U = 0; U < r; U += _) {
        const Me = Z - a / 2, Ve = U - r / 2, Te = Math.sqrt(Me * Me + Ve * Ve), ye = I ? 0 : Math.random() * 75 + Te * 0.05, ve = new Rs({ width: a, height: r }, p, Z, U, y[Math.floor(Math.random() * y.length)], Q, ye);
        ve.maxSizeInteger = 4, ve.maxSize = Math.random() * 3.2 + 0.8, ve.sizeStep = 0.35 + Math.random() * 0.45, or.push(ve);
      }
  }
  function rr(e) {
    cancelAnimationFrame(Hn), Yo = e;
    const a = va == null ? void 0 : va.getContext("2d");
    if (!a) return;
    function r() {
      a.clearRect(0, 0, Hr, ir);
      let c = !0;
      or.forEach((p) => {
        p[Yo](), p.isIdle || (c = !1);
      }), Yo === "disappear" && c || (Hn = requestAnimationFrame(r));
    }
    Hn = requestAnimationFrame(r);
  }
  function bo() {
    cancelAnimationFrame(Hn), Ns(), rr("appear"), setTimeout(() => rr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    vo.classList.contains("active") && bo();
  });
  const Ya = o("pixelTrailCanvas"), wo = Ya.getContext("2d");
  let ta = !0, ba = 0.7, Za = 600, Fn = [], Ka = null, na = { x: 0, y: 0, ready: !1 };
  function Fr() {
    const e = u.getBoundingClientRect(), a = Aa(), r = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / a), p = Math.max(1, e.height / a);
    Ya.width = Math.max(1, Math.floor(c * r)), Ya.height = Math.max(1, Math.floor(p * r)), Ya.style.width = c + "px", Ya.style.height = p + "px", wo.setTransform(r, 0, 0, r, 0, 0);
  }
  function On(e, a) {
    if (!ta) return;
    const r = performance.now();
    na.ready || (na = { x: e, y: a, ready: !0 });
    const c = 7;
    for (let p = 1; p <= c; p++) {
      const y = p / c;
      Fn.push({
        x: na.x + (e - na.x) * y,
        y: na.y + (a - na.y) * y,
        born: r - (c - p) * 10
      });
    }
    na = { x: e, y: a, ready: !0 };
  }
  function wi(e) {
    if (Ka = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      Ka = requestAnimationFrame(wi);
      return;
    }
    const a = u.getBoundingClientRect(), r = Aa();
    wo.clearRect(0, 0, a.width / r, a.height / r), ta && (Fn = Fn.filter((p) => e - p.born < Za), wo.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Fn.forEach((p) => {
      const y = (e - p.born) / Za, _ = (1 - y) * ba, I = Math.round(p.x / 14) * 14, Q = Math.round(p.y / 14) * 14;
      wo.globalAlpha = Math.max(0, _);
      const te = 2 + 5 * (1 - y) * ba;
      wo.fillRect(I - te / 2, Q - te / 2, te, te);
    }), wo.globalAlpha = 1), Ka = requestAnimationFrame(wi);
  }
  u.addEventListener("pointermove", (e) => {
    const a = u.getBoundingClientRect(), r = Aa();
    On((e.clientX - a.left) / r, (e.clientY - a.top) / r);
  }), u.addEventListener("pointerleave", () => na.ready = !1), new ResizeObserver(Fr).observe(u), Fr(), Ka = requestAnimationFrame(wi);
  const aa = o("movementRippleCanvas"), xo = aa.getContext("2d");
  let $a = !0, yo = null, rt = performance.now();
  function sr() {
    const e = aa.parentElement.getBoundingClientRect(), a = Aa(), r = Math.max(1, e.width / a), c = Math.max(1, e.height / a), p = Math.min(window.devicePixelRatio || 1, 2);
    aa.width = Math.max(1, Math.floor(r * p)), aa.height = Math.max(1, Math.floor(c * p)), aa.style.width = r + "px", aa.style.height = c + "px", xo.setTransform(p, 0, 0, p, 0, 0);
  }
  function ko() {
    var e;
    return qt || ((e = Ae[ze]) == null ? void 0 : e.kind) === "rest";
  }
  function lr() {
    const e = Ae[ze];
    return ko() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Yn(e) {
    if (yo = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      yo = requestAnimationFrame(Yn);
      return;
    }
    const a = aa.parentElement.getBoundingClientRect(), r = Aa(), c = Math.max(1, a.width / r), p = Math.max(1, a.height / r);
    if (xo.clearRect(0, 0, c, p), $a) {
      const y = lr(), _ = (e - rt) % y / y, I = 15, Q = Math.max(8, Math.round(I * p / Math.max(1, c))), te = c / (I + 1), Z = p / (Q + 1), U = c * 0.5, Me = p * 0.52, Ve = Math.hypot(U, Me), ye = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ve = 1; ve <= Q; ve++)
        for (let nt = 1; nt <= I; nt++) {
          const it = nt * te, _e = ve * Z, lt = Math.hypot(it - U, _e - Me) / Ve, xt = ko(), Ke = xt ? Math.exp(-Math.pow((lt - (_ * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ue = Math.exp(-Math.pow((lt - _ * 1.25) * 7, 2)), Zt = xt ? Ke : Ue, sn = xt ? 0.5 + 0.5 * Math.sin(_ * Math.PI * 2 - lt * 3) ** 2 : 0.35 + 0.65 * Math.sin(_ * Math.PI * 2 - lt * 5) ** 2, Et = xt ? 1.4 + Zt * 4.2 * sn : 1.2 + Zt * 5 * sn;
          xo.beginPath(), xo.arc(it, _e, Et, 0, Math.PI * 2), xo.fillStyle = `rgba(${ye},${xt ? 0.08 + Zt * 0.48 : 0.05 + Zt * 0.55})`, xo.fill();
        }
    }
    yo = requestAnimationFrame(Yn);
  }
  new ResizeObserver(sr).observe(aa.parentElement), sr(), yo = requestAnimationFrame(Yn);
  const Mo = o("exerciseTitle"), wa = o("exerciseMeta"), xi = o("stepLabel"), Zo = o("digits"), yi = o("fill"), xa = o("progress"), Ko = o("pause"), Or = o("nextName"), dr = o("nextMeta"), Wr = o("nextIcon"), Ea = o("skipNextSession");
  let mn = null;
  function bn(e) {
    for (let a = Math.max(0, e); a < Ae.length; a++)
      if (!Ae[a].sessionHidden) return a;
    return -1;
  }
  function ki() {
    const e = Ae[ze];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (qt) {
      const c = bn(ze + 1), p = c >= 0 ? Ae[c] : null;
      return p ? { name: p.name, meta: $o(p), icon: cr(p) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = bn(ze + 1), r = a >= 0 ? Ae[a] : null;
    return r ? { name: r.name, meta: $o(r), icon: cr(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function qr() {
    if (!Ae[ze]) return Ae.length;
    const a = bn(ze + 1);
    return a < 0 ? Ae.length : a + 1;
  }
  function cr(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function $o(e) {
    return e.kind === "video" ? "YouTube · " + zt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Jo() {
    return Ae.length && Ae[Ae.length - 1].round || 1;
  }
  function Vr(e) {
    const a = Ae[e];
    if (!a) return "";
    const r = Jo();
    if (r <= 1) return "Step " + (e + 1) + " of " + Ae.length;
    if (a.roundBreak) return "Round " + a.round + " of " + r + " · Rest";
    const c = Ae.filter((p) => p.round === a.round && !p.roundBreak).length;
    return "Round " + a.round + " of " + r + " · Step " + (a.roundIndex + 1) + " of " + c;
  }
  function Mi() {
    return xa.querySelector('[data-step="' + ze + '"]');
  }
  function zr() {
    Ae[ze] && Number(xa.dataset.round) !== (Ae[ze].round || 1) && Ti(), [...xa.children].forEach((e) => {
      const a = Number(e.dataset.step);
      e.classList.toggle("done", a < ze), e.classList.toggle("active", a === ze), e.classList.toggle("rewindable", a <= ze), e.disabled = a > ze, a === ze && e.style.setProperty("--segment-progress", "0%");
    }), Ae[ze] && (xi.textContent = Vr(ze), ti());
  }
  function Xo(e) {
    const a = Ae.indexOf(e);
    a < 0 || a <= ze || (e.sessionHidden = !e.sessionHidden, Ja(), Lt((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function jr() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const a = qr(), r = Ae.slice(a);
    (Pt === "all" ? r : r.slice(0, Math.max(1, Number(Pt) || 1))).forEach((p) => {
      const y = document.createElement("section");
      y.className = "upcomingCard" + (p.sessionHidden ? " sessionHidden" : "") + (Fs(p) ? " noMeta" : ""), y.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xe(cr(p)) + '</div><div><div class="upcomingName">' + Ge(p.name) + '</div><div class="upcomingMeta">' + Ge($o(p)) + (Jo() > 1 ? " · round " + p.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (p.sessionHidden ? "Include this session" : "Skip this session") + "</button>", y.querySelector(".skipSessionBtn").addEventListener("click", () => Xo(p)), e.appendChild(y);
    });
  }
  function Ja() {
    var a;
    const e = ki();
    Or.textContent = e.name, dr.textContent = e.meta, Wr.innerHTML = xe(e.icon);
    {
      const r = qt ? Ae[bn(ze + 1)] : ((a = Ae[ze]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : Ae[bn(ze + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && Fs(r)));
    }
    if (mn = null, qt) {
      const r = bn(ze + 1);
      r >= 0 && (mn = Ae[r]);
    } else {
      const r = Ae[ze];
      if (r && r.rest > 0)
        mn = null;
      else {
        const c = bn(ze + 1);
        c >= 0 && (mn = Ae[c]);
      }
    }
    Ea && (Ea.hidden = !mn, Ea.textContent = mn != null && mn.sessionHidden ? "Include this session" : "Skip this session"), jr();
  }
  Ea.addEventListener("click", () => {
    mn && (mn.sessionHidden = !mn.sessionHidden, Lt((mn.sessionHidden ? "Hidden " : "Included ") + mn.name + " for this session"), Ja());
  });
  let Zn = null, Ci = null;
  function Xa(e, a = {}) {
    const r = tt[dt];
    s.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: dt, ...a });
  }
  function ur() {
    const e = tt[dt];
    Zn = { key: dt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ci), Ci = setInterval(() => {
      Zn && !fn && Zn.active++;
    }, 1e3), Xa("started", { steps: Ae.length });
  }
  function Co(e) {
    if (clearInterval(Ci), !Zn) return;
    const a = Zn;
    Zn = null, Xa(e ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (ct.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: e }), ct.history = ct.history.slice(0, 1e3), xn(), ni(), Qa());
  }
  function Gr() {
    b("workout"), Ur();
    const e = bn(0);
    e >= 0 && Ae[e].kind === "video" && Ut(Ae[e]);
  }
  function Si() {
    So(), Co(!1), clearInterval(Mt), clearInterval(Xn), qt = !1, t(!1), o("app").classList.remove("resting"), vo.classList.remove("active"), b("home");
  }
  function Ur() {
    vo.classList.add("active");
    let e = 5;
    bi.textContent = e, requestAnimationFrame(bo), clearInterval(Xn), Xn = setInterval(() => {
      e--, e > 0 ? (bi.textContent = e, bo()) : (clearInterval(Xn), bi.textContent = "GO", bo(), setTimeout(() => {
        vo.classList.remove("active"), cancelAnimationFrame(Hn), l();
      }, 650));
    }, 1e3);
  }
  function Ti() {
    var a;
    xa.innerHTML = "";
    const e = ((a = Ae[Math.max(0, ze)] || Ae[0]) == null ? void 0 : a.round) || 1;
    xa.dataset.round = e, Ae.forEach((r, c) => {
      if ((r.round || 1) !== e) return;
      const p = document.createElement("button");
      p.dataset.step = c, p.type = "button", p.className = "progressSegment", p.setAttribute("aria-label", "Go to " + r.name), p.addEventListener("click", () => {
        c <= ze && i(c);
      }), xa.appendChild(p);
    });
  }
  function t(e) {
    e = !!e;
    const a = fn !== e;
    if (fn = e, Ko.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), me && H)
      try {
        e ? H.pauseVideo() : H.playVideo();
      } catch {
      }
    a && Zn && Xa(e ? "paused" : "resumed");
  }
  function i(e) {
    e < 0 || e >= Ae.length || e > ze || (clearInterval(Mt), qt = !1, o("app").classList.remove("resting"), ze = e, t(!1), Li(), Mt = setInterval(Lo, 1e3));
  }
  function l() {
    if (ze = bn(0), t(!1), Ti(), ze < 0) {
      Mo.textContent = "No activities", wa.textContent = "Open Edit and enable or add a movement", wa.hidden = !1;
      return;
    }
    ur(), Li(), clearInterval(Mt), Mt = setInterval(Lo, 1e3);
  }
  const d = o("videoStage"), h = o("videoSound"), D = 0, x = 1, M = 2;
  let R = 0, K = null, j = null, H = null, le = null, We = 0, Fe = !1, me = null, fe = null;
  function ie() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : K || (K = new Promise((a, r) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const p = setInterval(() => {
        var _;
        (_ = window.YT) != null && _.Player && (clearInterval(p), clearTimeout(y), a(window.YT));
      }, 100), y = setTimeout(() => {
        clearInterval(p), K = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const _ = document.createElement("script");
        _.src = "https://www.youtube.com/iframe_api", _.async = !0, _.onerror = () => {
          clearInterval(p), clearTimeout(y), K = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(_);
      }
    }), K);
  }
  function st() {
    return j || (j = ie().then((e) => new Promise((a) => {
      const r = document.createElement("div");
      o("videoFrame").appendChild(r), H = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(H), onStateChange: (c) => Yr(c.data), onError: (c) => Bs(c.data) }
      });
    })), j.catch(() => {
      j = null;
    }), j);
  }
  function Ut(e) {
    !(e != null && e.videoId) || e.videoError || st().then((a) => {
      me || le === e.videoId || (le = e.videoId, We = Number(e.start) || 0, Fe = !1, a.mute(), a.loadVideoById({ videoId: e.videoId, startSeconds: We }));
    }).catch(() => {
    });
  }
  function oa() {
    const e = bn(ze + 1);
    e >= 0 && Ae[e].kind === "video" && Ut(Ae[e]);
  }
  function Yr(e) {
    if (!me) {
      e === x && !Fe && (Fe = !0, H.pauseVideo(), H.seekTo(We, !0));
      return;
    }
    d.classList.toggle("playing", e === x), Ae[ze] === me && performance.now() > R && (e === x && fn ? t(!1) : e === M && !fn && t(!0)), e === x && ei(me.videoId, H.getDuration()) && xn(), e === D && To();
  }
  function Bs(e) {
    const a = me;
    if (!a) {
      le = null;
      return;
    }
    e === 101 || e === 150 ? (Kr(a.videoId), Lt("That video can’t play outside YouTube, so it was skipped")) : Lt("The video couldn’t play, so it was skipped"), To();
  }
  function Zr(e) {
    if (o("app").classList.add("videoStep"), h.hidden = !0, me = e, clearTimeout(fe), !e.videoId) {
      Lt("This video step has no link yet, so it was skipped"), setTimeout(() => To(), 0);
      return;
    }
    st().then((a) => {
      if (me !== e) return;
      R = performance.now() + 1500;
      const r = Number(e.start) || 0;
      le !== e.videoId ? (le = e.videoId, We = r, a.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (a.seekTo(r, !0), a.playVideo()), a.unMute(), fn && a.pauseVideo(), fe = setTimeout(() => {
        me !== e || fn || (a.getPlayerState() !== x ? (a.mute(), a.playVideo(), h.hidden = !1) : a.isMuted() && (h.hidden = !1));
      }, 1600);
    }).catch(() => {
      me === e && (Lt("YouTube didn’t load, so the video was skipped"), To());
    });
  }
  function Qo() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), a = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, c = (a == null ? void 0 : a.offsetHeight) || 42, p = window.innerHeight - r - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(p)) + "px");
  }
  window.addEventListener("resize", Qo);
  function So() {
    clearTimeout(fe);
    const e = me;
    if (me = null, o("app").classList.remove("videoStep"), d.classList.remove("playing"), h.hidden = !0, e && H) {
      try {
        H.pauseVideo();
      } catch {
      }
      le = null;
    }
  }
  function To() {
    const e = me;
    !e || Ae[ze] !== e || (So(), clearInterval(Mt), _i(), Mt = setInterval(Lo, 1e3));
  }
  h.addEventListener("click", () => {
    H && (H.unMute(), H.playVideo()), h.hidden = !0;
  });
  function Re(e) {
    var c;
    const a = Number(e.start) || 0;
    if (e.useVideoLength === !1) return a + (Number(e.duration) || 300);
    const r = H && me === e && Number((c = H.getDuration) == null ? void 0 : c.call(H)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || a + (Number(e.duration) || 300);
  }
  function Ct(e, a) {
    const r = tt[dt];
    [at, tn, Vt, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((p) => {
      p && p.kind === "video" && p.videoId === e && a(p);
    }));
  }
  function ei(e, a) {
    a = Math.round(Number(a) || 0);
    let r = !1;
    return e && a > 0 && Ct(e, (c) => {
      c.videoDuration !== a && (c.videoDuration = a, r = !0);
    }), r;
  }
  function Kr(e) {
    Ct(e, (a) => {
      a.videoError = "embed";
    }), xn();
  }
  function Dc(e) {
    const a = e.videoId;
    if (!a) return;
    const r = () => {
      $t.classList.contains("open") ? ce || W() : (W(), xn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === a && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), r());
    }).catch((c) => {
      e.videoId === a && c === 401 && (e.videoError = "embed", r());
    }), Rc(a).then((c) => {
      ei(a, c) && r();
    }).catch((c) => {
      c === "embed" && e.videoId === a && (e.videoError = "embed", r());
    });
  }
  function Rc(e) {
    return ie().then((a) => new Promise((r, c) => {
      const p = document.createElement("div");
      p.className = "videoProbe", p.setAttribute("aria-hidden", "true");
      const y = document.createElement("div");
      p.appendChild(y), o("app").appendChild(p);
      let _ = null, I = !1;
      const Q = (U, Me) => {
        I || (I = !0, clearTimeout(te), setTimeout(() => {
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
      _ = new a.Player(y, {
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
  function Li() {
    qt = !1;
    const e = Ae[ze];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Zr(e) : So(), jt = e.duration, Rn = e.duration, Mo.textContent = e.name, wa.textContent = e.group, wa.hidden = !0, xi.textContent = Vr(ze), Zn && Xa("step", { name: e.name, group: e.group, kind: e.kind, step: ze + 1, of: Ae.length, round: e.round || 1, rounds: Jo(), duration: e.duration }), Ja(), zr(), oa(), e.kind === "video" && setTimeout(Qo, 0);
  }
  function ti() {
    var p;
    const e = ((p = Ae[ze]) == null ? void 0 : p.kind) === "video" && !qt, a = e && jt >= 60;
    Zo.textContent = a ? zt(jt) : jt, Zo.classList.toggle("long", a), e && (o("videoClock").textContent = zt(jt) + " left");
    const r = jt / Rn * 100;
    yi.style.width = r + "%";
    const c = Mi();
    if (c && !qt) {
      const y = 100 - r;
      c.style.setProperty("--segment-progress", y + "%");
    }
  }
  function Lo() {
    var a, r;
    if (fn) return;
    const e = Ae[ze];
    if ((e == null ? void 0 : e.kind) === "video" && !qt && me === e) {
      const c = Number((a = H == null ? void 0 : H.getCurrentTime) == null ? void 0 : a.call(H)) || 0, p = Number(e.start) || 0, y = Re(e);
      Rn = Math.max(1, y - p), (c > p || ((r = H == null ? void 0 : H.getPlayerState) == null ? void 0 : r.call(H)) === x) && (jt = Math.max(0, Math.ceil(y - c))), ti(), c > p && c >= y - 0.25 && To();
      return;
    }
    jt--, ti(), jt <= 0 && (e.rest > 0 ? Nl(e.rest) : _i());
  }
  function Nl(e) {
    var r;
    qt = !0, o("app").classList.add("resting");
    const a = Mi();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(Mt), jt = e, Rn = e, Zn && Xa("rest", { duration: e }), Mo.textContent = "Rest", wa.textContent = (r = Ae[ze]) != null && r.roundBreakAfter ? "Round " + (Ae[ze].round + 1) + " next" : "Recovery", Ja(), ti(), Mt = setInterval(() => {
      fn || (jt--, ti(), jt <= 0 && (clearInterval(Mt), _i(), Mt = setInterval(Lo, 1e3)));
    }, 1e3);
  }
  function _i() {
    qt = !1;
    const e = bn(ze + 1);
    if (e >= 0)
      ze = e, Li();
    else {
      clearInterval(Mt), So(), t(!1), o("app").classList.remove("resting"), Mo.textContent = "Complete", wa.textContent = "Move finished", wa.hidden = !1, Zo.textContent = "✓";
      {
        const a = Jo();
        xi.textContent = a > 1 ? a + " rounds done" : Ae.filter((r) => !r.roundBreak).length + " steps done";
      }
      Co(!0);
      {
        const a = zl(7).reduce((r, c) => r + c.minutes, 0);
        wa.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      yi.style.width = "100%", Ja();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Nc(), t(!1);
  });
  function Nc() {
    clearInterval(Mt);
    const e = Ae[ze];
    if (qt) {
      qt = !1, o("app").classList.remove("resting");
      const r = bn(ze + 1);
      r >= 0 ? (ze = r, Li(), Mt = setInterval(Lo, 1e3)) : _i();
      return;
    }
    if (e && e.rest > 0) {
      Nl(e.rest);
      return;
    }
    const a = bn(ze + 1);
    a >= 0 ? (ze = a, Li(), Mt = setInterval(Lo, 1e3)) : _i();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Mt), t(!1), qt) {
      const e = Ae[ze];
      jt = e.rest, Rn = e.rest, Mo.textContent = "Rest", wa.textContent = "Recovery", o("app").classList.add("resting"), Ja(), ti();
    } else
      Li();
    Mt = setInterval(qt ? () => {
      fn || (jt--, ti(), jt <= 0 && (clearInterval(Mt), _i(), Mt = setInterval(Lo, 1e3)));
    } : Lo, 1e3);
  });
  function pr(e, a, r, c) {
    let p = 0, y = null, _ = !1;
    function I() {
      y && cancelAnimationFrame(y), y = null, p = 0, _ = !1, a.style.width = "0%", e.classList.remove("holding");
    }
    function Q(U) {
      if (!_) return;
      p || (p = U);
      const Me = Math.min(1, (U - p) / r);
      if (a.style.width = Me * 100 + "%", Me >= 1) {
        _ = !1, y && cancelAnimationFrame(y), y = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), c();
        return;
      }
      y = requestAnimationFrame(Q);
    }
    function te(U) {
      var Me;
      if (!(U && U.button !== void 0 && U.button !== 0)) {
        U == null || U.preventDefault(), I(), _ = !0, e.classList.add("holding");
        try {
          (Me = e.setPointerCapture) == null || Me.call(e, U.pointerId);
        } catch {
        }
        y = requestAnimationFrame(Q);
      }
    }
    function Z() {
      _ && I();
    }
    e.addEventListener("pointerdown", te), e.addEventListener("pointerup", Z), e.addEventListener("pointercancel", Z), e.addEventListener("lostpointercapture", Z), e.addEventListener("keydown", (U) => {
      (U.key === " " || U.key === "Enter") && !U.repeat && te(U);
    }), e.addEventListener("keyup", (U) => {
      (U.key === " " || U.key === "Enter") && Z();
    });
  }
  const Bc = o("endWorkout");
  pr(Bc, o("holdEndFill"), 1500, Si);
  const Ai = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Ai.classList.add("open"), Ai.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Ai.classList.remove("open"), Ai.setAttribute("aria-hidden", "true");
  });
  function Pc() {
    const e = dt, a = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    a && a.remove(), delete tt[e], ct.order = ct.order.filter((c) => c !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const c = "custom-" + Date.now();
      tt[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ct.order.push(c), r = Io(c, tt[c]);
    }
    Ai.classList.remove("open"), Ai.setAttribute("aria-hidden", "true"), go = null, Ua(), ot(r.dataset.workout), xn(), Lt("Move deleted");
  }
  pr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, Pc);
  const Ps = n.querySelector(".rubberTabs"), Ei = o("rubberIndicator");
  function mr(e, a = !0) {
    if (!e || !Ps || !Ei) return;
    const r = Ps.getBoundingClientRect(), c = e.getBoundingClientRect();
    Ei.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const p = Aa();
    Ei.style.left = (c.left - r.left) / p + Ps.scrollLeft + "px", Ei.style.width = c.width / p + "px", a && (Ei.style.transform = "scaleX(1.08)", setTimeout(() => Ei.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), mr(e, !0);
  })), requestAnimationFrame(() => mr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => mr(n.querySelector(".tab.active"), !1));
  const Is = o("pixelTrailToggle"), Hs = o("rippleToggle"), Di = o("trailStrength"), Ri = o("trailLife");
  function ia(e, a) {
    ut()[e] = a, xn();
  }
  const Bl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Pl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Fs(e) {
    var a;
    return !!((a = ut().hideMeta) != null && a[Pl(e)]);
  }
  function Ic() {
    const e = /* @__PURE__ */ new Map(), a = (r, c, p) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const y = Pl(r);
      let _ = e.get(y);
      _ || (_ = { key: y, label: y === "rest" ? "Rest" : y === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(y, _)), _.kinds.add(y === "rest" ? "Rest" : y === "video" ? "Video" : c), _.moves.add(p), _.count++;
    };
    return Object.values(tt).forEach((r) => {
      const c = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Le)).forEach((p) => a(p, "Warm-up", c)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((p) => a(p, p.presetRole === "warmup" ? "Warm-up" : p.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (r.cooldown || (r.customSequence ? [] : Pa)).forEach((p) => a(p, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, c]) => {
      e.has(r) || e.set(r, { key: r, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, c) => Bl.indexOf(r.kind) - Bl.indexOf(c.kind) || r.label.localeCompare(c.label));
  }
  let Os = "all";
  function Ws() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return Ic().filter((a) => (Os === "all" || a.kind === Os) && (!e || a.label.toLowerCase().includes(e) || a.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function $r() {
    const e = o("metaTableBody");
    if (!e) return;
    const a = ut().hideMeta || {}, r = Ws();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((p) => {
      const y = !a[p.key], _ = p.count ? (p.moves.length > 2 ? p.moves.slice(0, 2).join(", ") + " + " + (p.moves.length - 2) + " more" : p.moves.join(", ")) + " · " + p.count + " step" + (p.count === 1 ? "" : "s") : "Not used yet", I = document.createElement("tr");
      I.className = y ? "" : "off", I.innerHTML = '<td><div class="metaType">' + Ge(p.label) + '</div><div class="metaSub">' + Ge(p.kind + " · " + _) + '</div></td><td class="metaKindCol">' + Ge(p.kind) + '</td><td class="metaUsedCol">' + Ge(_) + '</td><td class="metaSwitchCol"><button class="switch' + (y ? " on" : "") + '" type="button" role="switch" aria-checked="' + y + '" aria-label="Second line for ' + Ge(p.label) + ' on phones"></button></td>', I.querySelector(".switch").addEventListener("click", () => qs([p.key], y)), e.appendChild(I);
    });
    const c = r.filter((p) => a[p.key]).length;
    o("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function qs(e, a) {
    const r = { ...ut().hideMeta || {} };
    e.forEach((c) => {
      a ? r[c] = !0 : delete r[c];
    }), ia("hideMeta", r), $r(), pt(), Ja();
  }
  o("metaSearch").addEventListener("input", $r), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Os = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === e)), $r();
  })), o("metaHideAll").addEventListener("click", () => qs(Ws().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => qs(Ws().map((e) => e.key), !1));
  const Ni = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ut().toggles || {} };
  function Il() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", Ni[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, c]) => {
      o(c).hidden = Ni[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => Ni[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const a = n.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !e), a.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Ni[e.dataset.toggle] = Ni[e.dataset.toggle] === !1, Il(), ia("toggles", { ...Ni });
  })), Il();
  function Hc() {
    Is.classList.toggle("on", ta), Hs.classList.toggle("on", $a), Di.value = Math.round(ba * 100), o("trailStrengthValue").textContent = Di.value + "%", Ri.value = Za, o("trailLifeValue").textContent = Ri.value + " ms";
  }
  ut().trailEnabled !== void 0 && (ta = ut().trailEnabled), ut().rippleEnabled !== void 0 && ($a = ut().rippleEnabled), ut().trailStrength !== void 0 && (ba = ut().trailStrength), ut().trailMaxAge !== void 0 && (Za = ut().trailMaxAge), Hc(), Is.addEventListener("click", () => {
    ta = !ta, Is.classList.toggle("on", ta), ta || (Fn = []), ia("trailEnabled", ta);
  }), Hs.addEventListener("click", () => {
    $a = !$a, Hs.classList.toggle("on", $a), ia("rippleEnabled", $a);
  }), Di.addEventListener("input", () => {
    ba = Number(Di.value) / 100, o("trailStrengthValue").textContent = Di.value + "%";
  }), Di.addEventListener("change", () => ia("trailStrength", ba)), Ri.addEventListener("input", () => {
    Za = Number(Ri.value), o("trailLifeValue").textContent = Ri.value + " ms";
  }), Ri.addEventListener("change", () => ia("trailMaxAge", Za)), vi.addEventListener("change", () => ia("upcomingCount", Pt));
  function Hl(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const a = e === "light";
    o("app").classList.toggle("light", a), s.setLight(a), ai(n);
  }
  Hl(ut().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Hl(e.dataset.theme), ia("theme", e.dataset.theme);
  }));
  const Kn = { steps: null, weather: null, ...ut().entities || {} };
  let an = null, Vs = {};
  function Fc(e) {
    const a = Object.values(e).filter((I) => I.entity_id.startsWith("sensor.") || I.entity_id.startsWith("input_number.")), r = (I) => I.attributes.friendly_name || I.entity_id, c = a.filter((I) => /step/i.test(I.entity_id) || /step/i.test(r(I)) || ["steps", "step"].includes(String(I.attributes.unit_of_measurement || "").toLowerCase())), p = a.filter((I) => !c.includes(I)), y = (I, Q) => r(I).localeCompare(r(Q)), _ = (I, Q) => /health_steps/.test(Q.entity_id) - /health_steps/.test(I.entity_id) || y(I, Q);
    return { suggested: c.sort(_), rest: p.sort(y), label: r };
  }
  function Fl(e) {
    const a = o("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: r, rest: c, label: p } = Fc(e), y = (Q) => '<option value="' + Ge(Q.entity_id) + '">' + Ge(p(Q)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(y).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(y).join("") + "</optgroup>" : ""), a.value = Kn.steps || "";
    const _ = o("stepsStatus"), I = Kn.steps && e[Kn.steps];
    _.textContent = I ? "Connected · " + p(I) : _.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Kn.steps = o("stepsEntity").value || null, ia("entities", { ...Kn }), Vs = {}, Vl(), an && (Fl(an), Wl(an));
  });
  function Oc(e, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(e);
  }
  function Ol() {
    const e = Kn.steps && (an == null ? void 0 : an[Kn.steps]), a = Number(e == null ? void 0 : e.state);
    return Number.isFinite(a) ? a : null;
  }
  function Wl(e) {
    var c;
    const a = Kn.steps, r = a ? Number((c = e[a]) == null ? void 0 : c.state) : NaN;
    o("stepsMeta").textContent = a ? Number.isFinite(r) ? Oc(r) : "—" : "Set up in Settings";
  }
  let ql = 0;
  async function Vl() {
    const e = Kn.steps;
    if (!e || !s.ws) return;
    ql = Date.now();
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const c = await s.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: a.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), p = (c == null ? void 0 : c[e]) || [], y = {};
      if (p.forEach((_) => {
        Number.isFinite(_.max) && (y[Nt(new Date(_.start))] = _.max);
      }), !Object.keys(y).length) {
        const _ = await s.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: a.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((_ == null ? void 0 : _[e]) || []).forEach((I) => {
          const Q = Number(I.s ?? I.state), te = I.lu ? I.lu * 1e3 : Date.parse(I.last_updated || I.last_changed);
          if (!Number.isFinite(Q) || !te) return;
          const Z = Nt(new Date(te));
          y[Z] = Math.max(y[Z] || 0, Q);
        });
      }
      Vs = y, Qa();
    } catch {
    }
  }
  function ni() {
    Qa();
  }
  ni(), setInterval(() => {
    ni(), Go(), Va();
  }, 10 * 60 * 1e3);
  function zl(e) {
    const a = {}, r = {};
    ct.history.forEach((_) => {
      const I = Nt(new Date(_.start));
      a[I] = (a[I] || 0) + (_.seconds || 0) / 60, r[I] = (r[I] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), p = Nt(c), y = [];
    for (let _ = e - 1; _ >= 0; _--) {
      const I = new Date(c.getFullYear(), c.getMonth(), c.getDate() - _), Q = Nt(I), te = ct.checkins.filter((U) => U.date === Q), Z = (U) => {
        const Me = te.map((Ve) => Ve[U]).filter(Boolean);
        return Me.length ? Me.reduce((Ve, Te) => Ve + Te, 0) / Me.length : null;
      };
      y.push({
        key: Q,
        date: I,
        minutes: Math.round(a[Q] || 0),
        moves: r[Q] || 0,
        steps: Q === p && Ol() != null ? Ol() : Vs[Q] ?? null,
        mood: Z("mood"),
        energy: Z("energy")
      });
    }
    return y;
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
    const a = zl(30), r = Wc(a), c = a.reduce((te, Z) => te + Z.minutes, 0), p = /* @__PURE__ */ new Date(), y = Nt(p), _ = Nt(new Date(p.getFullYear(), p.getMonth(), p.getDate() - (p.getDay() + 6) % 7)), I = a.filter((te) => te.key >= _ && te.key <= y).reduce((te, Z) => te + Z.minutes, 0), Q = (te, Z, U) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + te + '</div><div><div class="activityRowName">' + Ge(Z) + '</div><div class="activityRowMeta">' + Ge(U) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + xe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + Q(xe("clock"), "This week", I + " min") + Q(xe("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + Q(xe("calendar"), "30 days", c + " min") + "</div>";
  }
  const zs = {
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
  }, qc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Bi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Jr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let jl = 0;
  const js = (e, a) => '<path class="' + a + '" d="' + e + '"/>', Vc = (e, a) => ' style="animation-delay:-' + Math.round(e * 137 % a) + 'ms"', ra = (e, a, r, c) => {
    const p = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Vc(e, 2400) + ' d="M' + e + " " + (a - r) + "L" + (e + p) + " " + (a - p) + "L" + (e + r) + " " + a + "L" + (e + p) + " " + (a + p) + "L" + e + " " + (a + r) + "L" + (e - p) + " " + (a + p) + "L" + (e - r) + " " + a + "L" + (e - p) + " " + (a - p) + 'Z"/>';
  }, Gl = ([e, a, r], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + a + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zc = (e, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', jc = (e) => (e ? ["29.35", "43.04", "56.74"].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), Gc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, r], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + a + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Ul(e, a, r, c) {
    return e === "clear" ? a ? Gl(r ? Jr.l : Jr.s, c) + (r ? ra(70, 20, 5.83, 1) + ra(78.33, 41.67, 3.75, 0.8) + ra(60, 71.67, 3.33, 0.6) : ra(42, 12, 3.5, 1) + ra(47, 25, 2.25, 0.8) + ra(36, 43, 2, 0.6)) : zc(c, r) : e === "partly" ? (a ? Gl(r ? Jr.lp : Jr.sp, c) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + js(r ? Bi.lp : Bi.sp, a ? "wxCloudLight" : "wxBright") + (a ? r ? ra(73.33, 16.67, 4.17, 0.9) : ra(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? js(r ? Bi.lc : Bi.s, a ? "wxCloudLight" : "wxBright") + (a ? r ? ra(15, 15, 3.75, 0.8) + ra(76.67, 13.33, 2.92, 0.6) : ra(9, 9, 2.25, 0.8) + ra(46, 8, 1.75, 0.6) : "") : js(r ? Bi.lr : Bi.s, "wxCloudLight") + (e === "rain" ? jc(r) : Gc(r));
  }
  const Uc = () => {
    var e;
    return ((e = an == null ? void 0 : an["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let $n = ut().weatherStyle || "bitmap", Yl = ut().weatherLayout === "strip" ? "strip" : "tiles", Yc = ut().weatherMotion !== !1;
  const hr = () => Yc && !Ie(), fr = /* @__PURE__ */ new Map(), Gs = 700, Zc = (e) => {
    const [a, r] = e.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: r === "night" };
  };
  function Xr(e, a, r, c = $n, p, y) {
    let _ = qc(e);
    const I = _ === "night" || (y != null ? !!y : !!r && Uc());
    _ === "night" && (_ = "clear");
    const Q = a ? 90 : 54, te = Ms(e, I), Z = performance.now();
    let U = p ? fr.get(p) : null;
    if (p && !U ? fr.set(p, U = { key: te, t0: -1e9 }) : U && U.key !== te && (U.fromKey = U.key, U.from = U.last || null, U.key = te, U.t0 = Z), c !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + te + '"' + (p ? ' data-wx-slot="' + p + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + Q + '"></canvas></span>';
    let Me = "";
    if (U && Z - U.t0 < Gs && (hr() || Ie())) {
      const Ve = Zc(U.fromKey);
      Me = '<span class="wxLayer wxOut ' + Ve.k + (Ve.night ? " night" : "") + '" style="animation-delay:' + Math.round(U.t0 - Z) + 'ms"><svg viewBox="0 0 ' + Q + " " + Q + '">' + Ul(Ve.k, Ve.night, a, "wxg" + ++jl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + _ + (I ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + Q + " " + Q + '">' + Ul(_, I, a, "wxg" + ++jl) + "</svg>" + Me + "</span>";
  }
  function Qr() {
    const e = o("app"), a = getComputedStyle(e), r = (I) => a.getPropertyValue(I).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([I, Q]) => {
      r(Q) && (c[I] = r(Q));
    });
    const p = r("--color-text-primary") || "#f1f1f1", y = r("--color-bg-card") || "#222222", _ = e.classList.contains("light");
    return { colors: c, ink: _ ? p : y, paper: _ ? y : p };
  }
  function ai(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const c = Qr(), p = hr(), y = Ie();
    r.forEach((_) => {
      var U;
      const I = _.dataset.wx, Q = _.dataset.wxSlot ? fr.get(_.dataset.wxSlot) : null;
      let te = yl(I, c.colors);
      if (Q && Q.key === I) {
        const Me = (a - Q.t0) / Gs;
        Me < 1 && (p || y) && (te = du(Q.from || yl(Q.fromKey, c.colors), te, Math.max(0, Me), c.colors, y)), Q.last = te;
      }
      const Z = oc(te, { size: Number(_.dataset.wxSize) || 54, px: 2, oneBit: _.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: a, idle: p });
      _.width !== Z.w && (_.width = Z.w), _.height !== Z.h && (_.height = Z.h), (U = _.getContext("2d")) == null || U.putImageData(new ImageData(Z.data, Z.w, Z.h), 0, 0);
    });
  }
  let es = null, Zl = -1;
  function Kl(e) {
    if (es = null, !f) return;
    const a = hr(), r = Math.floor(e / 100), c = [...fr.values()].some((Q) => e - Q.t0 < Gs), p = [...ts.values()].some((Q) => e - Q.t0 < Q.dur), y = ke.home.classList.contains("active"), _ = Wn.classList.contains("open"), I = a && $n === "smooth" && (_ || y && Yl === "strip");
    !document.hidden && (c || p || I || a && r !== Zl) && (Zl = r, y && (ai(o("weatherCard"), e), gr(o("weatherCard"), e)), _ && (ai(Wn, e), gr(Wn, e))), (a || c || p) && (es = requestAnimationFrame(Kl));
  }
  function oi() {
    o("app").classList.toggle("wxMotion", hr()), !es && f && (es = requestAnimationFrame(Kl));
  }
  let $l = [];
  const Yt = 36e5, Kc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function eo() {
    const e = /* @__PURE__ */ new Date(), a = (y, _) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + y, _), r = [], c = [], p = [...Array(6)].map((y, _) => {
      const I = a(_, 6), Q = a(_, 18), te = a(_ + 1, 6), Z = $l.find((Me) => Nt(new Date(Me.datetime)) === Nt(I)), U = (Me, Ve, Te) => {
        const ye = r.filter((it) => it.t >= +Me && it.t < +Ve);
        if (ye.length) {
          const it = {};
          return ye.forEach((_e) => {
            it[_e.c] = (it[_e.c] || 0) + (Kc.has(_e.c) ? 2 : 1);
          }), Object.entries(it).sort((_e, lt) => lt[1] - _e[1])[0][0];
        }
        const ve = c.find((it) => {
          const _e = +new Date(it.datetime);
          return _e >= +Me - 3 * Yt && _e < +Ve && (it.is_daytime == null || !!it.is_daytime == !Te);
        });
        if (ve) return ve.condition;
        const nt = (Z == null ? void 0 : Z.condition) || "cloudy";
        return Te && nt === "sunny" ? "clear-night" : nt;
      };
      return { start: +I, end: +te, day: U(I, Q, !1), night: U(Q, te, !0), hi: Number(Z == null ? void 0 : Z.temperature), lo: Number(Z == null ? void 0 : Z.templow) };
    });
    return { days: p, hours: r, start: p[0].start, end: p[5].end };
  }
  const Jl = (e, a) => {
    const r = e.days.findIndex((p) => a < p.end);
    if (r < 0) return 1;
    const c = e.days[r];
    return Math.max(0, (r + (a - c.start) / (c.end - c.start)) / 6);
  }, $c = (e, a) => {
    const r = Math.max(0, Math.min(0.99999, a)) * 6, c = Math.floor(r), p = e.days[c];
    return p.start + (r - c) * (p.end - p.start);
  };
  function Us(e, a) {
    const r = Math.max(0, e.days.findIndex((Q) => a < Q.end)), c = e.days[r], p = (a - c.start) / (c.end - c.start) >= 0.5;
    let y = p ? c.night : c.day, _ = NaN;
    const I = e.hours;
    if (I.length && a >= I[0].t - Yt && a <= I[I.length - 1].t + Yt) {
      let Q = I.findIndex((U) => U.t > a);
      Q < 0 && (Q = I.length);
      const te = I[Math.max(0, Q - 1)], Z = I[Math.min(I.length - 1, Q)];
      y = te.c || y, _ = Z.t > te.t ? te.temp + (Z.temp - te.temp) * Math.max(0, Math.min(1, (a - te.t) / (Z.t - te.t))) : te.temp;
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
    return { cond: p && y === "sunny" ? "clear-night" : y, temp: _, night: p, day: c };
  }
  const Xl = (e) => Nt(new Date(e)) === Nt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), ts = /* @__PURE__ */ new Map(), Jc = 900, Xc = 700;
  let ns = null;
  const sa = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((a) => {
    gr(a.target.parentElement), a.target.closest("#wxDialog") && od();
  })) : null;
  function gr(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const c = eo(), p = c.days.flatMap((U) => [{ cond: U.day, night: !1 }, { cond: U.night, night: !0 }]), y = p.map((U) => U.cond).join(), _ = Qr(), I = hr(), Q = Ie(), te = Number(Nt(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let Z = !1;
    r.forEach((U) => {
      var it;
      const Me = U.clientWidth, Ve = U.clientHeight;
      if (!Me || !Ve) return;
      const Te = U.dataset.wxStrip;
      let ye = ts.get(Te);
      ye ? ye.sig !== y && (ye.prev = ye.segs, ye.sig = y, ye.segs = p, ye.t0 = a, ye.dur = Xc) : ts.set(Te, ye = { sig: y, segs: p, prev: null, t0: a, dur: Jc });
      const ve = I || Q ? Math.min(1, Math.max(0, (a - ye.t0) / ye.dur)) : 1;
      ve < 1 && (Z = !0);
      const nt = { width: Me, height: Ve, colors: _.colors, clock: a, ambient: I, seed: te, reveal: Q ? ve : 1 - Math.pow(1 - ve, 3), prev: ve < 1 ? ye.prev : null, reduce: Q };
      if ($n === "smooth") {
        const _e = Math.min(2, window.devicePixelRatio || 1), lt = Math.round(Me * _e), xt = Math.round(Ve * _e);
        U.width !== lt && (U.width = lt), U.height !== xt && (U.height = xt);
        const Ke = U.getContext("2d");
        if (!Ke) return;
        Ke.setTransform(_e, 0, 0, _e, 0, 0), Cu(Ke, p, nt);
      } else {
        const _e = Mu(p, { ...nt, px: 2, oneBit: $n === "onebit", ink: _.ink, paper: _.paper });
        U.width !== _e.w && (U.width = _e.w), U.height !== _e.h && (U.height = _e.h), (it = U.getContext("2d")) == null || it.putImageData(new ImageData(_e.data, _e.w, _e.h), 0, 0);
      }
    }), Z && oi();
  }
  function Ql() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const a = Kn.weather, r = a && (an == null ? void 0 : an[a]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Xr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ai(e);
      return;
    }
    const c = r.attributes || {}, p = c.temperature_unit || "°", y = (Ke) => Number.isFinite(Number(Ke)) ? Math.round(Number(Ke)) + "°" : "—", _ = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", I = zs[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), Q = Nt(/* @__PURE__ */ new Date()), te = $l.slice(0, 7), Z = te.find((Ke) => Nt(new Date(Ke.datetime)) === Q) || null, U = te.filter((Ke) => Nt(new Date(Ke.datetime)) >= Q).slice(0, 6), Me = /* @__PURE__ */ new Date(), Ve = Nt(new Date(Me.getFullYear(), Me.getMonth(), Me.getDate() + 1)), Te = Z ? "H " + y(Z.temperature) + "&ensp; L " + y(Z.templow) : "", ye = (Ke) => {
      const Ue = Nt(new Date(Ke.datetime));
      return Ue === Q ? "Today" : Ue === Ve ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Ke.datetime));
    }, ve = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", nt = (Ke) => {
      const Ue = new Date(Ke.datetime);
      return Math.round((new Date(Ue.getFullYear(), Ue.getMonth(), Ue.getDate()) - new Date(Me.getFullYear(), Me.getMonth(), Me.getDate())) / 864e5);
    }, it = (Ke) => (zs[Ke] || Ke || "").toLowerCase(), _e = (Ke, Ue) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + nt(Ke) + '" aria-label="' + Ge(ye(Ke) + ": " + it(Ke.condition) + ", " + y(Ke.temperature) + " / " + y(Ke.templow) + ". Open the forecast") + '">' + Xr(Ke.condition, !1, !1, $n, "day" + Ue) + '<div><div class="activityRowName">' + Ge(ye(Ke)) + '</div><div class="activityRowMeta">' + y(Ke.temperature) + " / " + y(Ke.templow) + "</div></div></div>", lt = () => '<div class="wxStrip"><div class="wxStripDays">' + eo().days.map((Ue, Zt) => {
      const Et = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ue.start)) + ": " + it(Ue.day) + (it(Ue.day) === it(Ue.night) ? " all day and night" : ", then " + it(Ue.night) + " overnight") + (Number.isFinite(Ue.hi) ? ". High " + y(Ue.hi) : "") + (Number.isFinite(Ue.lo) ? ", low " + y(Ue.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Zt + '" aria-label="' + Ge(Et) + '"><span class="wxDayName">' + Ge(Xl(Ue.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + y(Ue.hi) + '</span><span class="wxLow">' + y(Ue.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ge("Now in " + _ + ": " + ve + "°, " + it(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Xr(r.state, !0, !0, $n, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(ve)) + '</span><span class="wxUnit">' + Ge(p) + '</span></div><div class="wxPlace">' + Ge(_) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(I) + "</div>" + (Te ? '<div class="wxRange">' + Te + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (U.length ? Yl === "strip" ? lt() : '<div class="activityRows wxDays">' + U.map(_e).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ai(e);
    const xt = e.querySelector("canvas[data-wx-strip]");
    ns && ns !== xt && (sa == null || sa.unobserve(ns)), ns = xt, xt && (sa == null || sa.observe(xt), gr(e)), oi(), ad();
  }
  const ed = o("weatherCard"), td = (e) => {
    const a = e.closest("[data-wx-day]");
    if (a) {
      const c = /* @__PURE__ */ new Date();
      nd(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && nd(Date.now(), r);
  };
  ed.addEventListener("click", (e) => td(e.target)), ed.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), td(e.target));
  });
  const Wn = o("wxDialog"), _o = o("wxGraph"), vr = o("wxGraphWrap");
  let ya = Date.now(), ii = null, Ys = !1, Pi = null;
  function nd(e, a) {
    const r = eo();
    ii = a || null, ya = Math.max(r.start, Math.min(r.end - Yt, e)), ts.delete("dialog"), fr.delete("scrub"), Wn.classList.add("open"), Wn.setAttribute("aria-hidden", "false"), ad(), sa == null || sa.observe(Wn.querySelector("canvas[data-wx-strip]")), _o.focus({ preventScroll: !0 }), oi();
  }
  function Zs() {
    var e;
    Wn.classList.remove("open"), Wn.setAttribute("aria-hidden", "true"), sa == null || sa.unobserve(Wn.querySelector("canvas[data-wx-strip]")), (e = ii == null ? void 0 : ii.focus) == null || e.call(ii, { preventScroll: !0 }), ii = null;
  }
  function ad() {
    if (!Wn.classList.contains("open")) return;
    const e = eo();
    o("wxGraphDays").innerHTML = e.days.map((a) => "<span>" + Ge(Xl(a.start)) + "</span>").join(""), od(e), as(e), gr(Wn);
  }
  function as(e = eo()) {
    const a = Us(e, ya), r = an == null ? void 0 : an[Kn.weather], c = (r == null ? void 0 : r.attributes) || {}, p = c.temperature_unit || "°", y = Math.abs(ya - Date.now()) < Yt / 2, _ = y && r ? r.state : a.cond, I = y && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", Q = zs[_] || (_ ? _.charAt(0).toUpperCase() + _.slice(1) : "—"), te = y ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(ya / Yt) * Yt)), Z = a.day, U = (Number.isFinite(Z.hi) ? "H " + Math.round(Z.hi) + "°" : "") + (Number.isFinite(Z.lo) ? "&ensp; L " + Math.round(Z.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Xr(_, !0, y, $n, "scrub", y ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(I)) + '</span><span class="wxUnit">' + Ge(p) + '</span></div><div class="wxPlace">' + Ge(te) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(Q) + "</div>" + (U ? '<div class="wxRange">' + U + "</div>" : "") + "</div>", ai(o("wxDialogNow")), _o.setAttribute("aria-valuenow", String(Math.round((ya - e.start) / Yt))), _o.setAttribute("aria-valuetext", te + ", " + Q.toLowerCase() + ", " + I + "°"), Ks(e), oi();
  }
  function od(e = eo()) {
    const a = o("wxGraphLine"), r = vr.clientWidth, c = vr.clientHeight;
    if (!r || !c) return;
    const p = [];
    for (let ve = e.start; ve <= e.end; ve += Yt) {
      const nt = Us(e, ve).temp;
      Number.isFinite(nt) && p.push([Jl(e, ve) * r, nt]);
    }
    if (a.setAttribute("viewBox", "0 0 " + r + " " + c), p.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', Pi = null, Ks(e);
      return;
    }
    const y = p.map((ve) => ve[1]), _ = Math.min(...y), I = Math.max(...y), Q = Math.max(4, I - _), te = $n !== "smooth", Z = (ve) => te ? Math.round(ve / 2) * 2 : Math.round(ve * 10) / 10;
    Pi = (ve) => c * 0.84 - (ve - _) / Q * c * 0.62;
    const U = Qr(), Me = $n === "onebit" ? U.paper : "#ffffff", Ve = $n === "onebit" ? U.ink : "rgba(0,0,0,.28)", Te = "M" + p.map((ve) => Z(ve[0]) + " " + Z(Pi(ve[1]))).join(" L"), ye = (ve, nt) => {
      const it = p.find((_e) => _e[1] === ve);
      return '<text class="wxLineLabel" x="' + Z(Math.min(r - 14, Math.max(14, it[0]))) + '" y="' + Z(Pi(ve) + (nt ? 18 : -10)) + '" fill="' + Me + '" stroke="' + Ve + '">' + Math.round(ve) + "°</text>";
    };
    a.setAttribute("shape-rendering", te ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + Te + '" fill="none" stroke="' + Ve + '" stroke-width="' + (te ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Te + '" fill="none" stroke="' + Me + '" stroke-width="2" stroke-linejoin="round"/>' + ye(I, !1) + ye(_, !0) + '<g id="wxCursorMark"></g>', Ks(e);
  }
  function Ks(e = eo()) {
    const a = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const r = vr.clientWidth, c = vr.clientHeight, p = $n !== "smooth", y = (Me) => p ? Math.round(Me / 2) * 2 : Me, _ = y(Jl(e, ya) * r), I = Us(e, ya).temp, Q = Qr(), te = $n === "onebit" ? Q.paper : "#ffffff", Z = $n === "onebit" ? Q.ink : "rgba(0,0,0,.28)", U = Pi && Number.isFinite(I) ? y(Pi(I)) : null;
    a.innerHTML = '<rect x="' + (_ - 2) + '" y="0" width="4" height="' + c + '" fill="' + Z + '"/><rect x="' + (_ - 1) + '" y="0" width="2" height="' + c + '" fill="' + te + '"/>' + (U == null ? "" : p ? '<rect x="' + (_ - 5) + '" y="' + (U - 5) + '" width="10" height="10" fill="' + te + '" stroke="' + Z + '" stroke-width="2"/>' : '<circle cx="' + _ + '" cy="' + U + '" r="6" fill="' + te + '" stroke="' + Z + '" stroke-width="2"/>');
  }
  const id = (e) => {
    const a = vr.getBoundingClientRect();
    a.width && (ya = $c(eo(), (e - a.left) / a.width), as());
  };
  _o.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Ys = !0;
      try {
        _o.setPointerCapture(e.pointerId);
      } catch {
      }
      id(e.clientX);
    }
  }), _o.addEventListener("pointermove", (e) => {
    Ys && id(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => _o.addEventListener(e, () => {
    Ys = !1;
  })), _o.addEventListener("keydown", (e) => {
    const a = eo(), r = { ArrowLeft: -Yt, ArrowRight: Yt, ArrowDown: -Yt, ArrowUp: Yt, PageUp: -24 * Yt, PageDown: 24 * Yt }[e.key];
    r ? (e.preventDefault(), ya = Math.max(a.start, Math.min(a.end - Yt, Math.round(ya / Yt) * Yt + r)), as(a)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), ya = e.key === "Home" ? a.start : a.end - Yt, as(a));
  }), o("wxDialogClose").addEventListener("click", Zs), Wn.addEventListener("click", (e) => {
    e.target === Wn && Zs();
  }), Wn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Zs());
  }), Ql(), (gd = (hd = window.matchMedia) == null ? void 0 : (fd = hd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || gd.call(fd, "change", () => {
    oi(), ai(n);
  }), oi();
  const rd = o("tvNav");
  s.fullscreenSupported || (rd.hidden = !0), rd.addEventListener("click", () => s.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ke.workout.classList.contains("active") || vo.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ko.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(et.value) || 1) + Number(e.dataset.roundsStep)));
    String(a) !== et.value && (et.value = a, et.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [C, k, T, et].forEach((e) => e.addEventListener("input", () => {
    const a = tt[dt];
    a && (a.total = Number(C.value), a.work = Number(k.value), a.rest = Number(T.value)), W();
  })), Ce.addEventListener("click", Si), Oe.addEventListener("click", () => b("settings")), o("settingsBack").addEventListener("click", Si), Ko.addEventListener("click", () => t(!fn)), ot(dt), gi(), Go(), Qa(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), pr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    ct.history = [], ct.checkins = [], ga = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    xn(), ni(), Go(), gi(), Qa(), Va(), Lt("Stats reset");
  });
  const $s = o("morningTime"), Js = o("eveningTime"), Xs = o("checkinAutoOpen");
  $s.value = Ca().morning, Js.value = Ca().evening, Xs.classList.toggle("on", ut().checkinAutoOpen !== !1), [["morningTime", $s], ["eveningTime", Js]].forEach(([e, a]) => a.addEventListener("change", () => {
    a.value && (ia(e, a.value), Va());
  })), Xs.addEventListener("click", () => {
    const e = ut().checkinAutoOpen === !1;
    Xs.classList.toggle("on", e), ia("checkinAutoOpen", e);
  }), setTimeout(er, 800);
  const sd = o("checkinNotify"), os = o("checkinNotifyTarget"), ld = o("checkinNotifyStatus"), Qc = ld.textContent;
  function dd() {
    const e = s.notifyServices(), a = e.filter((p) => p.startsWith("mobile_app_")), r = a.length ? a : e, c = (p) => p.replace(/^mobile_app_/, "").replace(/_/g, " ");
    os.innerHTML = r.map((p) => '<option value="' + Ge(p) + '">' + Ge(c(p)) + "</option>").join(""), !ut().notifyTarget && r[0] && (ut().notifyTarget = r[0]), os.value = ut().notifyTarget || "";
  }
  function is() {
    const e = !!ut().notifyOn;
    sd.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const a = Ca();
    ld.textContent = e ? "Sends at " + a.morning + " and " + a.evening : Qc;
  }
  async function Qs() {
    const e = !!ut().notifyOn;
    try {
      return await s.setReminderAutomation(e ? { target: ut().notifyTarget, times: Ca() } : null), !0;
    } catch {
      return Lt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  sd.addEventListener("click", async () => {
    const e = !ut().notifyOn;
    if (e && (dd(), !ut().notifyTarget)) {
      Lt("Install the Companion app on your phone first");
      return;
    }
    ut().notifyOn = e, is(), await Qs() ? (xn(), Lt(e ? "Check-in notifications on" : "Check-in notifications off")) : (ut().notifyOn = !e, is());
  }), os.addEventListener("change", () => {
    ia("notifyTarget", os.value), ut().notifyOn && Qs();
  }), [$s, Js].forEach((e) => e.addEventListener("change", () => {
    is(), ut().notifyOn && Qs();
  })), dd(), is();
  let el = null;
  function eu() {
    el || (el = setTimeout(() => {
      el = null, Qa();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, c;
      const a = !an || an[Kn.weather] !== e[Kn.weather] || ((r = an["sun.sun"]) == null ? void 0 : r.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      an = e, Fl(e), Wl(e), a && Ql(), Date.now() - ql > 60 * 60 * 1e3 && Vl(), eu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (ct.history = e.history, ni()), Array.isArray(e.history) && Qa(), Array.isArray(e.checkins) && (ct.checkins = e.checkins.map(dn), Va(), gi(), Go(), ni(), Qa()), e.profiles && !$t.classList.contains("open") && !Zn)) {
        const a = Po(e);
        Object.keys(tt).forEach((r) => delete tt[r]), Object.assign(tt, a.profiles), ct.order = a.order, tt[dt] || (dt = ct.order[0]), Dn(), ot(dt);
      }
    },
    suspend() {
      f = !1;
    },
    resume() {
      f || (f = !0, Ka || (Ka = requestAnimationFrame(wi)), yo || (yo = requestAnimationFrame(Yn)), oi(), mr(n.querySelector(".tab.active"), !1));
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
}, wr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, en = "made_up_", Fi = (n) => {
  var s;
  return (s = String(n).split(".")[1]) == null ? void 0 : s.startsWith(en);
}, ds = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function El(n) {
  const s = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((s - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Au(n) {
  const s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let u = +s; u < +n; u += 10 * 60 * 1e3) o += El(new Date(u)) / 6;
  return o;
}
function yd(n = /* @__PURE__ */ new Date()) {
  const s = [];
  for (let o = 0; o <= 96; o++) {
    const u = +n - (96 - o) * 15 * 60 * 1e3;
    s.push([u, El(new Date(u))]);
  }
  return s;
}
function Eu({ onChange: n }) {
  const s = {}, o = {}, u = (z, V, $, O) => {
    s[z] = { entity_id: z, state: $, attributes: O, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[z] = V;
  }, m = (z, V, $) => {
    const O = s[z], Y = V ?? O.state;
    s[z] = { ...O, state: Y, attributes: { ...O.attributes, ...$ }, last_changed: Y === O.state ? O.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, f = (z, V, $, O) => u("binary_sensor." + en + (z ? z + "_" : "") + ds(V), z, O ? "on" : "off", { friendly_name: V, device_class: $ });
  Object.entries(_u).forEach(([z, V]) => {
    if (V.temperature != null && u("sensor." + en + z + "_temperature", z, String(V.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), V.humidity != null && u("sensor." + en + z + "_humidity", z, String(V.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), V.vacuum && u("vacuum." + en + "robot", z, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), V.climate && u("climate." + en + z, z, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: V.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), V.cover) {
      const [$, O, Y, ae] = V.cover;
      u("cover." + en + z + "_" + ds($), z, Y ? "open" : "closed", { friendly_name: $, device_class: O, current_position: Y, ...ae != null ? { current_tilt_position: ae } : {} });
    }
    if (V.humidifier && u("humidifier." + en + z, z, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: V.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), V.solar && (u("sensor." + en + z + "_solar_power", z, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + en + z + "_solar_today", z, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), V.valve && u("valve." + en + z + "_" + ds(V.valve), z, "closed", { friendly_name: V.valve, device_class: "water" }), V.door && f(z, V.door, "door", V.doorOpen), V.window && f(z, V.window, "window", !1), V.motion && f(z, V.motion, "motion", !1), V.plant) {
      const [$, O, Y, ae, A] = V.plant, q = en + ds($), ge = (g, ke, Ce, Oe, b) => u("sensor." + q + "_" + g, z, String(Ce), { friendly_name: ke, device_class: b, state_class: "measurement", unit_of_measurement: Oe, plant_low: Ce < wr[g][0], plant_high: Ce > wr[g][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[g] });
      ge("moisture", "Moisture", O, "%", "moisture"), ge("light", "Light", Y, "lx", "illuminance"), ge("temperature", "Temperature", ae, "°C", "temperature"), ge("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Se = Object.entries({ moisture: O, light: Y, temperature: ae, fertility: A }).filter(([g, ke]) => ke < wr[g][0] || ke > wr[g][1]).map(([g, ke]) => g + (ke < wr[g][0] ? " low" : " high"));
      u("plant." + q, z, Se.length ? "problem" : "ok", { friendly_name: $, moisture: O, brightness: Y, temperature: ae, conductivity: A, problem: Se.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + en + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), f(null, "Front door", "door", !1), f(null, "Smoke alarm", "smoke", !1), u("sensor." + en + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, L = {};
  let v = null;
  function B() {
    const z = /* @__PURE__ */ new Date();
    Object.keys(s).forEach((V) => {
      V.endsWith("_solar_power") && (s[V] = { ...s[V], state: El(z).toFixed(2) }), V.endsWith("_solar_today") && (s[V] = { ...s[V], state: Au(z).toFixed(1) });
    });
  }
  B();
  let se = 0;
  function ne() {
    let z = !1;
    const V = ++se % 10 === 0, $ = (ae, A, q) => {
      m(ae, A, q), z = !0;
    };
    Object.entries(w).forEach(([ae, A]) => {
      const q = s[ae].attributes.current_position, ge = q < A ? Math.min(A, q + 10) : Math.max(A, q - 10);
      ge === A && delete w[ae], $(ae, ge === A ? ge === 0 ? "closed" : "open" : A > q ? "opening" : "closing", { current_position: ge });
    }), Object.entries(L).forEach(([ae, A]) => {
      const q = s[ae].attributes.current_tilt_position, ge = q < A ? Math.min(A, q + 25) : Math.max(A, q - 25);
      ge === A && delete L[ae], $(ae, null, { current_tilt_position: ge });
    }), Object.keys(s).filter((ae) => ae.startsWith("climate.")).forEach((ae) => {
      const A = s[ae], q = A.attributes, ge = q.current_temperature, Se = (A.state === "heat" || A.state === "auto") && ge < q.temperature - 0.05, g = (A.state === "cool" || A.state === "auto") && ge > q.temperature + 0.05, ke = A.state === "off" ? "off" : Se ? "heating" : g ? "cooling" : "idle", Ce = V ? Math.round((ge + (Se ? 0.1 : g ? -0.1 : 0)) * 10) / 10 : ge;
      (Ce !== ge || ke !== q.hvac_action) && $(ae, null, { current_temperature: Ce, hvac_action: ke });
    }), Object.keys(s).filter((ae) => ae.startsWith("humidifier.")).forEach((ae) => {
      const A = s[ae], q = A.attributes, ge = q.current_humidity, Se = A.state === "on" && ge < q.humidity, g = Se && V ? ge + 1 : ge, ke = A.state !== "on" ? "off" : Se ? "humidifying" : "idle";
      if (g !== ge || ke !== q.action) {
        $(ae, null, { current_humidity: g, action: ke });
        const Ce = "sensor." + en + o[ae] + "_humidity";
        s[Ce] && $(Ce, String(g));
      }
    });
    const O = s["vacuum." + en + "robot"], Y = O.attributes;
    O.state === "cleaning" && V && $(O.entity_id, null, { battery_level: Math.max(5, Y.battery_level - 1) }), O.state === "returning" && $(O.entity_id, "docked", {}), O.state === "docked" && Y.battery_level < 100 && $(O.entity_id, null, { battery_level: Math.min(100, Y.battery_level + 2) }), v && Date.now() - v.at > 5e3 && ($("alarm_control_panel." + en + "house", "armed_" + v.mode, {}), v = null), z && n();
  }
  const N = setInterval(ne, 1e3), P = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function G(z, V, $) {
    const O = $ == null ? void 0 : $.entity_id;
    if (!s[O]) return !1;
    const Y = s[O], ae = Y.attributes, A = (q, ge) => m(O, q, ge);
    if (z === "climate" && (V === "set_temperature" && A(null, { temperature: Math.max(ae.min_temp, Math.min(ae.max_temp, $.temperature)) }), V === "set_hvac_mode" && A($.hvac_mode, $.hvac_mode === "off" ? { hvac_action: "off" } : {}), V === "toggle" && A(Y.state === "off" ? "heat" : "off", Y.state === "off" ? {} : { hvac_action: "off" })), z === "cover") {
      const q = V === "open_cover" ? 100 : V === "close_cover" ? 0 : V === "set_cover_position" ? $.position : V === "toggle" ? ae.current_position > 0 ? 0 : 100 : null;
      V === "stop_cover" && (delete w[O], delete L[O], A(ae.current_position === 0 ? "closed" : "open")), q != null && q !== ae.current_position && (w[O] = q, A(q > ae.current_position ? "opening" : "closing"));
      const ge = V === "open_cover_tilt" ? 100 : V === "close_cover_tilt" ? 0 : V === "set_cover_tilt_position" ? $.tilt_position : null;
      V === "stop_cover_tilt" && delete L[O], ge != null && ae.current_tilt_position != null && ge !== ae.current_tilt_position && (L[O] = ge);
    }
    if (z === "humidifier" && (V === "set_humidity" && A(null, { humidity: Math.max(ae.min_humidity, Math.min(ae.max_humidity, $.humidity)) }), V === "set_mode" && A(null, { mode: $.mode }), V === "turn_on" || V === "turn_off" || V === "toggle")) {
      const q = V === "turn_on" || V === "toggle" && Y.state !== "on";
      A(q ? "on" : "off", { action: q ? "idle" : "off" });
    }
    if (z === "vacuum" && (V === "start" && A("cleaning", { rooms: $.rooms || ae.rooms }), V === "pause" && A("paused"), V === "return_to_base" && A("returning", { rooms: [] }), V === "locate" && A(null, { located: Date.now() }), V === "set_rooms" && A(null, { rooms: $.rooms })), z === "valve") {
      const q = V === "open_valve" || V === "toggle" && Y.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(V) && A(q ? "open" : "closed");
    }
    if (z === "alarm_control_panel") {
      V === "alarm_disarm" && (v = null, A("disarmed", { changed_by: "Matt" }));
      const q = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[V];
      q && (v = { mode: q, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function X(z) {
    const V = (z == null ? void 0 : z.states) || {}, $ = (z == null ? void 0 : z.entities) || {}, O = (z == null ? void 0 : z.devices) || {}, Y = (k) => {
      var re;
      const T = $[k];
      return T && (T.area_id || T.device_id && ((re = O[T.device_id]) == null ? void 0 : re.area_id)) || null;
    }, ae = (k) => {
      const T = $[k];
      return V[k] && V[k].state !== "unavailable" && !(T != null && T.hidden) && !(T != null && T.entity_category);
    }, A = {};
    Object.keys(V).forEach((k) => {
      const T = Y(k);
      T && ae(k) && (A[T] || (A[T] = [])).push(k);
    });
    const q = { ...V, ...s }, ge = (k) => {
      var T, re;
      return (re = (T = q[k]) == null ? void 0 : T.attributes) == null ? void 0 : re.device_class;
    }, Se = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], g = Object.keys(V).filter((k) => k.startsWith("vacuum.") && ae(k)), ke = Object.values((z == null ? void 0 : z.areas) || {}).filter((k) => !Lu.has(k.area_id)).map((k) => {
      const T = k.area_id, re = A[T] || [], J = (Le) => re.filter((at) => at.startsWith(Le + ".")), ee = (Le) => J("sensor").filter((at) => ge(at) === Le), oe = (Le) => Object.keys(s).filter((at) => o[at] === T && Le(at)), de = (Le, at) => Le.length ? Le : oe(at), Be = de(ee("temperature"), (Le) => Le.endsWith(T + "_temperature")), et = de(ee("humidity"), (Le) => Le.endsWith(T + "_humidity")), Dt = ee("power").filter((Le) => /^(W|kW)$/.test(q[Le].attributes.unit_of_measurement || "")), wt = J("binary_sensor").filter((Le) => ge(Le) === "moisture"), ma = de(J("plant"), (Le) => Le.startsWith("plant.")).map((Le) => ({ id: Le, readings: oe((at) => at.startsWith("sensor." + Le.split(".")[1] + "_")) })), ka = [...J("binary_sensor").filter((Le) => Se.includes(ge(Le))), ...oe((Le) => Le.startsWith("binary_sensor."))];
      return {
        id: T,
        name: k.name,
        icon: k.icon,
        readings: [...Be.slice(0, 1), ...et.slice(0, 1), ...wt],
        power: Dt.length ? Dt.reduce((Le, at) => Le + Number(q[at].state) * (q[at].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: J("switch"),
        lights: J("light"),
        actions: [...J("light"), ...de(J("climate"), (Le) => Le.startsWith("climate.")), ...de(J("cover"), (Le) => Le.startsWith("cover.")), ...de(J("humidifier"), (Le) => Le.startsWith("humidifier.")), ...de(J("valve"), (Le) => Le.startsWith("valve.")), ...J("media_player"), ...J("vacuum"), ...g.length ? [] : oe((Le) => Le.startsWith("vacuum."))],
        solar: oe((Le) => Le.includes("_solar_")),
        plants: ma,
        openings: ka,
        alerts: [...wt, ...ka].filter((Le) => {
          var at;
          return ((at = q[Le]) == null ? void 0 : at.state) === "on";
        })
      };
    }).filter((k) => k.readings.length || k.plugs.length || k.actions.length || k.solar.length || k.plants.length), Ce = Object.keys(V).find((k) => /^sensor\..*(p1_meter_power|grid_power)$/.test(k) && V[k].state !== "unavailable") || null, Oe = (k) => Object.keys(V).filter((T) => T.startsWith(k + ".") && ae(T)), b = Oe("alarm_control_panel"), C = g.length ? g : ["vacuum." + en + "robot"];
    return {
      states: q,
      rooms: ke,
      grid: Ce,
      vacuums: C,
      homeVacuums: C.filter((k) => !ke.some((T) => T.actions.includes(k))),
      security: {
        alarms: b.length ? b : ["alarm_control_panel." + en + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(s).filter((k) => k.startsWith("binary_sensor.")), "sensor." + en + "doorbell"]
      }
    };
  }
  return { model: X, call: G, stop() {
    clearInterval(N), clearInterval(P);
  } };
}
const no = (n) => n < 0 ? 0 : n > 1 ? 1 : n, kl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(o.slice(u, u + 2), 16) || 0);
}, Du = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), kd = {}, pa = (n, s, o) => {
  const u = n + s + o;
  return kd[u] || (kd[u] = Du(kl(n).map((m, f) => m + (kl(s)[f] - m) * o)));
}, Md = {}, bs = (n) => Md[n] || (Md[n] = kl(n));
function Ru(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [pa(s.clear[0], s.cloudy[0], 0.12), pa(s.clear[1], s.cloudy[1], 0.12)], s.storm = [pa(s.rain[0], "#000000", 0.22), pa(s.rain[1], "#000000", 0.22)], s;
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
], to = (n, s) => (Nu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, lc = 1, dc = 2, cc = 3, uc = 4, qi = 5, xs = 6, Ml = 7, pc = 8, Cd = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), Bu = (n, s, o) => {
  let u = !1;
  for (let m = 0, f = n.length - 1; m < n.length; f = m++) {
    const w = n[m], L = n[f];
    w[1] > o != L[1] > o && s < (L[0] - w[0]) * (o - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function Pu(n, s, o, u, { oneBit: m, ink: f, paper: w, snowInk: L }) {
  const v = new Uint8ClampedArray(o * u * 4), B = bs(f), se = bs(w);
  for (let ne = 0; ne < u; ne++) for (let N = 0; N < o; N++) {
    const P = ne * o + N, G = s[P];
    if (n[P] == null) continue;
    let X = bs(n[P]);
    if (m) {
      let z;
      G === uc || G === pc ? z = !0 : G === qi ? z = L : G === Ml || G === xs ? z = !1 : z = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= to(N, ne), (G === lc || G === dc || G === cc || G === xs) && (N > 0 && s[P - 1] !== G || N < o - 1 && s[P + 1] !== G || ne > 0 && s[P - o] !== G || ne < u - 1 && s[P + o] !== G) && (z = !0), X = z ? B : se;
    }
    v[P * 4] = X[0], v[P * 4 + 1] = X[1], v[P * 4 + 2] = X[2], v[P * 4 + 3] = 255;
  }
  return { w: o, h: u, data: v };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (n) => Ms(n, !1).split("/")[0], al = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zu = [".##", "##.", ".#.", "#.."];
function mc(n, { width: s, height: o, colors: u, wave: m = 0.38, soft: f = 6, glow: w = 0.6, columns: L = 6 }) {
  const v = { ...oo, dawn: "#e5a77e", ...u }, B = Ru(v), se = s, ne = o, N = se / L, P = N / 2, G = Math.PI * 2, X = n.length ? n : [{ cond: "cloudy", night: !1 }], z = [...Array(L * 2)].map((Y, ae) => {
    const A = X[Math.min(ae, X.length - 1)], q = Hu(A.cond), ge = ae % 2 === 1;
    return { cond: A.cond, k: q, night: ge, sky: B[q][ge ? 1 : 0], cover: Iu[q] };
  }), V = (Y) => ne * (0.5 - m * Math.cos(G * (Y / N - 0.25)));
  return { C: v, S: z, W: se, H: ne, cw: N, sw: P, TAU: G, yb: V, side: (Y, ae, A) => {
    const q = (Y ? V(ae) - A : A - V(ae)) / Math.max(3, f * 1.4) + 0.5;
    return q <= 0 ? 0 : q >= 1 ? 1 : q;
  }, glowAt: (Y) => {
    const ae = ((Y / N - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(L - 1, Math.round(Y / N - 0.25))), q = Math.max(0, Math.min(L - 1, Math.round(Y / N - 0.75))), ge = 1 - (z[2 * A].cover + z[2 * q + 1].cover) / 2, Se = Math.sin(Math.PI * Math.min(1, Math.max(0, V(Y) / ne)));
    return { c: ae < 0.5 ? v.dusk : v.dawn, a: w * (0.2 + 0.8 * ge) * Se * Se };
  }, soft: f, tw: N * 0.3, sy: ne / 90 };
}
function hc(n, { clock: s = 0, ambient: o = !1, seed: u = 1 }) {
  const { S: m, sw: f, side: w, C: L, TAU: v, sy: B } = n, se = s, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((N, P) => {
    const G = al(u * 977 + P * 131 + 7), X = (P + 0.5) * f, z = N.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[N.k] : 0;
    for (let V = 0; V < z; V++) {
      const $ = X + (G() - 0.5) * f * 1.6, O = (6 + G() * 76) * B, Y = G() < 0.35, ae = 1.8 + G() * 1.6, A = w(!0, $, O) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(v * se / 2600 + V * 1.7 + P) : 1);
      A >= 0.03 && ne.stars.push({ x: $, y: O, big: Y, size: ae, o: A });
    }
    if (!N.night && (N.k === "clear" || N.k === "partly")) {
      const V = X + (G() - 0.5) * f * 0.3, $ = Math.min(15, f * 0.29);
      ne.suns.push({ x: V, y: 32 * B, rad: $, halo: $ * 2.8 * (o ? 1 + 0.07 * Math.sin(v * se / 3600 + P) : 1) });
    }
    if (N.night && (N.k === "clear" || N.k === "partly")) {
      const V = Math.min(0.78, f * 0.55 / 34), $ = X - 23 * V + (G() - 0.5) * f * 0.2;
      ne.moons.push({ x: $ + 23 * V, y: (4 + (o ? 0.8 * Math.sin(v * se / 5200 + P) : 0)) * B + 23 * V, d: 46 * V });
    }
  }), m.forEach((N, P) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[N.k];
    if (!G) return;
    const X = al(u * 577 + P * 71 + 3), z = (P + 0.5) * f, V = N.k === "rain" || N.k === "storm" || N.night ? L.cloudNight : L.cloudDay, $ = N.night ? 0.82 : N.k === "storm" ? 0.75 : 1;
    for (let O = 0; O < G; O++) {
      const Y = f / 46 * (N.k === "partly" ? 0.85 : 0.75 + X() * 0.55), ae = z + (N.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (N.k === "partly" ? 40 : 6 + X() * 26) * B, q = o ? 2.5 * Math.sin(v * se / 9e3 + P * 1.3 + O * 2.1) : 0, ge = o ? 0.9 * Math.sin(v * se / 6100 + P + O) : 0;
      ne.clouds.push({ x: ae - 23 * Y + q, y: A - 15.33 * Y + ge, w: 46 * Y, h: 30.66 * Y, fill: V, o: $ * (G > 1 && O === 0 ? 0.85 : 1) });
    }
  }), m.forEach((N, P) => {
    const G = al(u * 313 + P * 29 + 11), X = (P + 0.5) * f, z = N.cond === "pouring" ? 16 : N.cond === "rainy" || N.cond === "hail" ? 9 : N.cond === "lightning-rainy" ? 12 : N.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < z; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Y = 44 + G() * 36, ae = 1;
      if (o) {
        const q = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        O -= 0.21 * (q - (Y - 44)), Y = 44 + q, ae = Math.min(1, q / 6, (36 - q) / 6);
      }
      Y *= B;
      const A = w(N.night, O, Y) * ae;
      A >= 0.05 && ne.drops.push({ x: O, y: Y, o: A });
    }
    const V = N.cond === "snowy" ? 11 : N.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < V; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Y = 40 + G() * 44, ae = 1;
      if (o) {
        const q = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + q, O += 1.6 * Math.sin(v * se / 2800 + $ * 1.9 + P), ae = Math.min(1, q / 6, (44 - q) / 6);
      }
      Y *= B;
      const A = w(N.night, O, Y) * ae;
      A >= 0.05 && ne.flakes.push({ x: O, y: Y, o: A });
    }
    if (N.k === "fog") {
      const $ = N.night ? "#c8ccd6" : "#ffffff", O = N.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(v * se / 8e3 + P) : 0;
      for (let ae = 0; ae < 4; ae++) ne.fogs.push({ x: X - f * 0.75 + ae % 2 * f * 0.18 + (ae % 2 ? Y : -Y), y: (30 + ae * 13) * B, w: f * 1.3, c: $, a: O });
    }
    if (N.k === "storm") {
      const $ = (se / 3400 + P * 0.37) % 1;
      ne.bolts.push({ x: X + (G() - 0.5) * f * 0.3 - 5, y: 36 * B, o: o && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function ju(n, s, o, u, m, f, w, L) {
  const { S: v, C: B, cw: se, yb: ne, glowAt: N, soft: P, tw: G, sy: X } = n, z = new Array(o * u), V = new Uint8Array(o * u), $ = new Uint8Array(o * u), O = (b, C, k, T, re) => {
    k == null || b < 0 || C < 0 || b >= o || C >= u || (T >= 1 || T > to(b + 5, C + 3)) && (z[C * o + b] = k, V[C * o + b] = re);
  }, Y = (b, C, k, T) => {
    for (let re = Math.max(0, Math.floor(C - k) - 1); re <= Math.min(u - 1, C + k + 1); re++) for (let J = Math.max(0, Math.floor(b - k) - 1); J <= Math.min(o - 1, b + k + 1); J++) T(J, re, J + 0.5 - b, re + 0.5 - C);
  }, ae = (b, C, k) => {
    for (let re = 0; re < b.length - 1; re++) {
      const J = (re + C) * se;
      if (k < J - G / 2) return [b[re], b[re], 0];
      if (k <= J + G / 2) return [b[re], b[re + 1], (k - J + G / 2) / G];
    }
    const T = b[b.length - 1];
    return [T, T, 0];
  }, A = v.filter((b) => !b.night).map((b) => b.sky), q = v.filter((b) => b.night).map((b) => b.sky), ge = P / f, Se = 16 * X / f;
  for (let b = 0; b < o; b++) {
    const C = (b + 0.5) * m, k = ne(C) / f, T = ae(A, 0.75, C), re = ae(q, 1.25, C), J = N(C);
    for (let ee = 0; ee < u; ee++) {
      const oe = to(b, ee), de = ee + 0.5 - k, Be = (ge > 0.01 ? no(0.5 + de / ge) : de > 0 ? 1 : 0) > oe;
      let et = Be ? T[2] > oe ? T[1] : T[0] : re[2] > oe ? re[1] : re[0];
      (Be ? no(((ee + 0.5) / u - 0.45) / 0.55) * 0.7 : no(1 - (ee + 0.5) / (u * 0.55)) * 0.7) > to(b + 2, ee + 5) && (et = Be ? pa(et, "#ffffff", 0.18) : pa(et, "#000000", 0.25)), Be && de >= 0 && de < Se && J.a * 1.3 * (1 - de / Se) > to(b + 6, ee + 1) && (et = J.c), z[ee * o + b] = et, $[ee * o + b] = Be ? 0 : 1;
    }
  }
  const g = pa(B.sun, "#ffffff", 0.55), ke = pa(B.moon, "#ffffff", 0.6);
  s.stars.forEach((b) => {
    const C = Math.floor(b.x / m), k = Math.floor(b.y / f);
    if (C < 0 || k < 0 || C >= o || k >= u || !$[k * o + C] || b.o < 0.15) return;
    const T = b.o > 0.45 ? B.star : pa(B.star, z[k * o + C], 0.5), re = b.big && b.o > 0.6 ? Math.floor(b.size / m) : 0;
    O(C, k, T, 1, Ml);
    for (let J = 1; J <= re; J++) [[C - J, k], [C + J, k], [C, k - J], [C, k + J]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < o && ee[1] < u && $[ee[1] * o + ee[0]] && O(ee[0], ee[1], T, 1, Ml);
    });
  }), s.suns.forEach((b) => {
    const C = Math.max(1.5, b.rad / m), k = b.x / m, T = b.y / f, re = b.halo / m * 0.85;
    if (Y(k, T, re, (J, ee, oe, de) => {
      const Be = Math.sqrt(oe * oe + de * de);
      Be > C && Be < re && !$[ee * o + J] && O(J, ee, g, 0.3 * (1 - (Be - C) / (re - C)), 0);
    }), L) {
      const J = Math.floor(w / 500) % 2, ee = Math.max(1, C * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === J) for (let de = C + 1.2; de < C + 1.2 + ee; de += 0.7) O(Math.floor(k + Math.cos(oe * Math.PI / 4) * de), Math.floor(T + Math.sin(oe * Math.PI / 4) * de), B.sun, 1, pc);
    }
    Y(k, T, C, (J, ee, oe, de) => {
      oe * oe + de * de <= C * C && O(J, ee, no(((de / C + 1) / 2 - 0.6) / 0.4) > to(J, ee) ? B.sunEdge : B.sun, 1, lc);
    });
  }), s.moons.forEach((b) => {
    const C = Math.max(1.5, b.d * 0.37 / m), k = b.x / m, T = b.y / f, re = k + 0.547 * C, J = T - 0.503 * C, ee = 0.82 * C;
    Y(k, T, C, (oe, de, Be, et) => {
      if (Be * Be + et * et > C * C) return;
      const Dt = oe + 0.5 - re, wt = de + 0.5 - J;
      Dt * Dt + wt * wt > ee * ee && O(oe, de, no((et + C) / (2 * C) * 1.1 - 0.1) > to(oe, de) ? B.moon : ke, 1, dc);
    });
  }), s.clouds.forEach((b) => {
    const C = Math.max(3, b.w / m), k = C * 0.6665, T = b.x / m, re = b.y / f, J = pa(b.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(re) - 1); ee <= Math.min(u - 1, re + k + 1); ee++) for (let oe = Math.max(0, Math.floor(T) - 1); oe <= Math.min(o - 1, T + C + 1); oe++) {
      const de = (oe + 0.5 - T) / C, Be = (ee + 0.5 - re) / C;
      Cd(de, Be) && O(oe, ee, !Cd(de, Be + 1 / C) || no((Be - 0.42) / 0.25) * 0.8 > to(oe, ee) ? J : b.fill, b.o, cc);
    }
  }), s.fogs.forEach((b) => {
    const C = Math.floor(b.y / f), k = Math.max(C, Math.floor((b.y + 6 * X) / f) - 1), T = Math.floor(b.x / m), re = Math.floor((b.x + b.w) / m);
    for (let J = C; J <= k; J++) for (let ee = T; ee <= re; ee++) {
      const oe = (ee - T) / Math.max(1, re - T);
      O(ee, J, b.c, b.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  s.drops.forEach((b) => {
    const C = b.x / m, k = Math.floor(b.y / f);
    for (let T = 0; T < Ce; T++) O(Math.floor(C - 0.208 * T * f / m), k + T, B.rain, b.o, uc);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((b) => {
    const C = Math.floor(b.x / m), k = Math.floor(b.y / f);
    O(C, k, B.snow, b.o, qi);
    for (let T = 1; T <= Oe; T++)
      O(C - T, k, B.snow, b.o, qi), O(C + T, k, B.snow, b.o, qi), O(C, k - T, B.snow, b.o, qi), O(C, k + T, B.snow, b.o, qi);
  }), s.bolts.forEach((b) => {
    if (m <= 3.5)
      for (let C = Math.floor(b.y / f); C <= (b.y + 24) / f; C++) for (let k = Math.floor(b.x / m); k <= (b.x + 11) / m; k++)
        Bu(Vu, (k + 0.5) * m - b.x, (C + 0.5) * f - b.y) && O(k, C, B.sun, 1, xs);
    else {
      const C = Math.round(b.x / m), k = Math.round(b.y / f);
      zu.forEach((T, re) => T.split("").forEach((J, ee) => {
        J === "#" && O(C + ee, k + re, B.sun, 1, xs);
      }));
    }
  }), { col: z, ids: V };
}
function Gu(n, s) {
  const o = s.px, u = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), f = s.width / u, w = s.height / m, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (P) => {
    const G = mc(P, s);
    return ju(G, hc(G, { clock: L, ambient: s.ambient, seed: s.seed }), u, m, f, w, L, s.ambient);
  }, B = v(n), se = s.reveal == null ? 1 : no(s.reveal);
  let ne = B.col, N = B.ids;
  if (se < 1) {
    const P = s.prev ? v(s.prev) : null, G = se * (u + 12);
    ne = new Array(u * m), N = new Uint8Array(u * m);
    for (let X = 0; X < u * m; X++) {
      const z = X % u, V = X / u | 0;
      (s.reduce ? se : no((G - z) / 12)) > to(z, V) ? (ne[X] = B.col[X], N[X] = B.ids[X]) : P ? (ne[X] = P.col[X], N[X] = P.ids[X]) : (ne[X] = null, N[X] = 255);
    }
  }
  return Pu(ne, N, u, m, { oneBit: s.oneBit, ink: s.ink || "#26221e", paper: s.paper || "#fbf9f6", snowInk: !1 });
}
function Uu(n, s, o) {
  const u = o.width, m = o.height, f = o.reveal == null ? 1 : no(o.reveal), w = (N, P) => {
    const G = mc(P, o);
    Yu(N, G, hc(G, o));
  };
  if (n.clearRect(0, 0, u, m), f >= 1) {
    w(n, s);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = f, w(n, s), n.restore();
    return;
  }
  const L = n.canvas, v = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (v.width !== L.width || v.height !== L.height) && (v.width = L.width, v.height = L.height);
  const B = v.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, u, m), w(B, s);
  const se = f * (u + 64) - 64, ne = B.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ne, B.fillRect(0, 0, u, m), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Yu(n, s, o) {
  const { W: u, H: m, S: f, C: w, cw: L, yb: v, glowAt: B, soft: se, tw: ne, sy: N } = s, P = (g, ke) => {
    const Ce = bs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, G = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const b = (Oe + ke) * L, C = (b - ne / 2) / u, k = (b + ne / 2) / u;
      C > 0 && C < 1 && Ce.addColorStop(C, g[Oe]), k > 0 && k < 1 && Ce.addColorStop(k, g[Oe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), z = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Oe = u * Ce / X, b = g == null ? 0 : v(Oe) + g;
      Ce ? n.lineTo(Oe, b) : n.moveTo(Oe, b);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Oe = u * Ce / X;
      n.lineTo(Oe, v(Oe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, m);
  const V = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = B(u * g / 64);
    V.addColorStop(g / 64, P(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = V;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, z(g * 2 * N, (g + 1) * 2 * N);
  n.fillStyle = G(f.filter((g) => g.night).map((g) => g.sky), 1.25);
  const $ = Math.max(0.5, se), O = 6;
  n.globalAlpha = 1, z(null, -$);
  for (let g = 0; g < O; g++)
    n.globalAlpha = 1 - (g + 0.5) / O, z(-$ + 2 * $ * g / O, -$ + 2 * $ * (g + 1) / O);
  n.globalAlpha = 1;
  const Y = new Path2D(Wu), ae = new Path2D(Ou), A = new Path2D(Fu), q = new Path2D(qu);
  n.fillStyle = w.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Y), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ge = pa(w.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, P(ge, 0.42)), ke.addColorStop(0.7, P(ge, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = pa(w.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ae), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), o.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, P(g.c, 0)), ke.addColorStop(0.25, P(g.c, g.a)), ke.addColorStop(0.75, P(g.c, g.a)), ke.addColorStop(1, P(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * N);
  }), n.fillStyle = w.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(q), n.restore();
  }), n.restore();
}
const Zu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Oi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, cs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, ol = (n, s) => '<path class="' + s + '" d="' + n + '"/>', Ku = (n, s) => ' style="animation-delay:-' + Math.round(n * 137 % s) + 'ms"', la = (n, s, o, u) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ku(n, 2400) + ' d="M' + n + " " + (s - o) + "L" + (n + m) + " " + (s - m) + "L" + (n + o) + " " + s + "L" + (n + m) + " " + (s + m) + "L" + n + " " + (s + o) + "L" + (n - m) + " " + (s + m) + "L" + (n - o) + " " + s + "L" + (n - m) + " " + (s - m) + 'Z"/>';
}, Sd = ([n, s, o], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + s + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $u = (n, s) => s ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ju = (n) => (n ? ["29.35", "43.04", "56.74"].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Xu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, o], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + s + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Qu(n, s, o, u) {
  return n === "clear" ? s ? Sd(o ? cs.l : cs.s, u) + (o ? la(70, 20, 5.83, 1) + la(78.33, 41.67, 3.75, 0.8) + la(60, 71.67, 3.33, 0.6) : la(42, 12, 3.5, 1) + la(47, 25, 2.25, 0.8) + la(36, 43, 2, 0.6)) : $u(u, o) : n === "partly" ? (s ? Sd(o ? cs.lp : cs.sp, u) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + ol(o ? Oi.lp : Oi.sp, s ? "wbCloudLight" : "wbBright") + (s ? o ? la(73.33, 16.67, 4.17, 0.9) : la(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? ol(o ? Oi.lc : Oi.s, s ? "wbCloudLight" : "wbBright") + (s ? o ? la(15, 15, 3.75, 0.8) + la(76.67, 13.33, 2.92, 0.6) : la(9, 9, 2.25, 0.8) + la(46, 8, 1.75, 0.6) : "") : ol(o ? Oi.lr : Oi.s, "wbCloudLight") + (n === "rain" ? Ju(o) : Xu(o));
}
function ep(n, s, o, u) {
  let m = Zu(n);
  const f = m === "night" || !!o;
  m === "night" && (m = "clear");
  const w = s ? 90 : 54;
  return { k: m, night: f, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Qu(m, f, s, u) + "</svg>" };
}
const Na = 6e4, Da = 36e5, ri = 864e5, Mr = 1440, tp = 6, np = 10 * Na, us = 3, il = 20, ap = 3, op = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), ip = 30 * Na, rp = 7, sp = 3, Td = 1, lp = Na, dp = 15 * Na, qn = {
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
}, Qe = {
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
}, up = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], pp = Object.keys(Qe.phases), ps = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, fc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ms = 100, Ld = "µg/m³", hp = "weather_alerts.air_quality_pollen", _d = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bp = { daily: 1, hourly: 2 }, He = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), da = (n, s) => n.replace(/\{(\w+)\}/g, (o, u) => s[u] ?? ""), Vi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, wn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Ad = /* @__PURE__ */ new Map(), Ed = /* @__PURE__ */ new Map(), rl = /* @__PURE__ */ new WeakMap(), xp = (n) => {
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
function ln(n, s, o) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const m = (s == null ? void 0 : s.number_format) === "none", f = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : xp(s), L = JSON.stringify([w, f]);
  let v = Ad.get(L);
  if (!v) {
    try {
      v = new Intl.NumberFormat(w, f);
    } catch {
      v = new Intl.NumberFormat(void 0, f);
    }
    Ad.set(L, v);
  }
  return v.format(u);
}
const Dl = (n) => {
  var s;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.language) || (n == null ? void 0 : n.language) || void 0;
};
function yp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (rl.has(n)) return rl.get(n);
  const s = n.time_format, o = s === "language" || s === "system" || !s ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(s === "language" ? n.language : void 0).includes("10") : s === "12";
  return rl.set(n, o), o;
}
const gc = (n) => {
  var s, o;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function vc(n, s) {
  const o = JSON.stringify([n, s]);
  let u = Ed.get(o);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, s);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...s, timeZone: void 0 });
    }
    Ed.set(o, u);
  }
  return u;
}
const Wi = (n, s) => vc(Dl(s), { hour: "numeric", minute: "2-digit", hourCycle: yp(s == null ? void 0 : s.locale) ? "h12" : "h23", timeZone: gc(s) }).format(n), Dd = (n, s) => vc(Dl(s), { weekday: "short", timeZone: gc(s) }).format(n), kp = (n, s) => n.toLocaleDateString(Dl(s), { weekday: "narrow" }), Tn = (n, s) => wn(s) ? ln(Math.round(Number(s)), n.locale) + "°" : "–", zi = (n) => {
  const s = new Date(n);
  return s.setHours(0, 0, 0, 0), s;
}, xr = (n, s) => n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth() && n.getDate() === s.getDate(), Vn = Math.PI / 180, Mp = 2440588, Cp = 2451545, ys = Vn * 23.4397, Sp = 149598e3, Tp = -0.833 * Vn, Lp = 0.133 * Vn, Rd = 5 * Na, bc = (n) => n.getTime() / ri - 0.5 + Mp - Cp, wc = (n, s) => Math.atan2(Math.sin(n) * Math.cos(ys) - Math.tan(s) * Math.sin(ys), Math.cos(n)), xc = (n, s) => Math.asin(Math.sin(s) * Math.cos(ys) + Math.cos(s) * Math.sin(ys) * Math.sin(n)), _p = (n, s) => Vn * (280.16 + 360.9856235 * n) - s, Ap = (n, s, o) => Math.asin(Math.sin(s) * Math.sin(o) + Math.cos(s) * Math.cos(o) * Math.cos(n));
function yc(n) {
  const s = Vn * (357.5291 + 0.98560028 * n), o = Vn * (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)), u = s + o + Vn * 102.9372 + Math.PI;
  return { ra: wc(u, 0), dec: xc(u, 0), dist: Sp };
}
function kc(n) {
  const s = Vn * (218.316 + 13.176396 * n), o = Vn * (134.963 + 13.064993 * n), u = Vn * (93.272 + 13.22935 * n), m = s + Vn * 6.289 * Math.sin(o), f = Vn * 5.128 * Math.sin(u);
  return { ra: wc(m, f), dec: xc(m, f), dist: 385001 - 20905 * Math.cos(o) };
}
const Mc = (n, s, o, u) => {
  const m = bc(s), f = n(m);
  return Ap(_p(m, Vn * -u) - f.ra, Vn * o, f.dec);
}, Rl = (n, s, o) => Mc(yc, n, s, o), Ep = (n, s, o) => Mc(kc, n, s, o);
function Cc(n, s, o, u) {
  const m = {};
  let f = o.getTime(), w = n(o) - s;
  for (let L = f + Rd; L <= u.getTime(); L += Rd) {
    const v = n(new Date(L)) - s;
    if (w < 0 != v < 0) {
      const B = new Date(f + (L - f) * w / (w - v));
      v > 0 ? m.rise ?? (m.rise = B) : m.set ?? (m.set = B);
    }
    f = L, w = v;
  }
  return m;
}
const Sc = (n) => {
  const s = zi(n);
  return [s, new Date(s.getTime() + ri)];
}, Dp = (n, s, o) => Cc((u) => Rl(u, s, o), Tp, ...Sc(n)), Rp = (n, s, o) => Cc((u) => Ep(u, s, o), Lp, ...Sc(n));
function Np(n) {
  const s = bc(n), o = yc(s), u = kc(s), m = Math.acos(Math.sin(o.dec) * Math.sin(u.dec) + Math.cos(o.dec) * Math.cos(u.dec) * Math.cos(o.ra - u.ra)), f = Math.atan2(o.dist * Math.sin(m), u.dist - o.dist * Math.cos(m)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - u.ra), Math.sin(o.dec) * Math.cos(u.dec) - Math.cos(o.dec) * Math.sin(u.dec) * Math.cos(o.ra - u.ra));
  return { fraction: (1 + Math.cos(f)) / 2, phase: 0.5 + 0.5 * f * (w < 0 ? -1 : 1) / Math.PI };
}
const Bp = (n) => {
  const s = n * 28;
  return s < 0.5 || s > 27.5 ? "new_moon" : s < 6.5 ? "waxing_crescent" : s < 7.5 ? "first_quarter" : s < 13.5 ? "waxing_gibbous" : s < 14.5 ? "full_moon" : s < 20.5 ? "waning_gibbous" : s < 21.5 ? "last_quarter" : "waning_crescent";
}, ks = (n) => {
  const s = n == null ? void 0 : n.config;
  return s && wn(s.latitude) && wn(s.longitude) ? { lat: Number(s.latitude), lon: Number(s.longitude) } : null;
};
function Nd(n, s) {
  var B, se, ne;
  const o = ks(n), u = o ? Dp(s, o.lat, o.lon) : {}, m = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], f = zi(s).getTime(), w = (N) => {
    const P = N ? new Date(N) : null;
    return P && Number.isFinite(P.getTime()) && zi(P).getTime() === f ? P : null;
  }, L = w((se = m == null ? void 0 : m.attributes) == null ? void 0 : se.next_rising), v = w((ne = m == null ? void 0 : m.attributes) == null ? void 0 : ne.next_setting);
  return L && (u.rise = L), v && (u.set = v), u;
}
function Pp(n) {
  var u;
  const s = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((s == null ? void 0 : s.state) === "below_horizon" || (s == null ? void 0 : s.state) === "above_horizon") return s.state === "below_horizon";
  const o = ks(n);
  return o ? Rl(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Cr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Cs = (n, s) => {
  var u;
  const o = (u = n.entities) == null ? void 0 : u[s];
  return !o || !o.hidden && !o.entity_category;
}, ca = (n, s, o) => {
  var u, m;
  for (const f of s) {
    const w = (u = n.states) == null ? void 0 : u[f];
    if (!Cr(w)) continue;
    const L = (m = w.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: w, value: L };
  }
}, Ip = (n, s) => s.map((o) => {
  var u;
  return (u = n.states) == null ? void 0 : u[o];
}).find(Cr), Hp = (n, s, o) => s.map((u) => {
  var m;
  return (m = n.states) == null ? void 0 : m[u];
}).find((u) => {
  var m;
  return Cr(u) && (((m = u.attributes) == null ? void 0 : m.supported_features) == null || Number(u.attributes.supported_features) & bp[o]);
});
function kr(n, s, o) {
  var f, w, L, v;
  const u = ((w = (f = n.config) == null ? void 0 : f.unit_system) == null ? void 0 : w.length) || "", m = (s == null ? void 0 : s.attributes) || {};
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
function Cl(n, s, o, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...f] = n.formatEntityAttributeValueToParts(s, o, u).map((w) => w.value);
      return { number: m, unit: f.join("").trim() };
    }
  } catch {
  }
  return { number: ln(u, n.locale), unit: kr(n, s, o) };
}
function Fp(n, s, o, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(s, o, u);
  } catch {
  }
  const m = Cl(n, s, o, u);
  return (m.number + " " + m.unit).trim();
}
function hs(n, s) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(s);
  } catch {
  }
  const o = (u = s.attributes) == null ? void 0 : u.unit_of_measurement;
  return cp[s.state] || (o && wn(s.state) ? ln(s.state, n.locale) + " " + o : s.state);
}
function Bd(n, s) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(s, { type: "entity" });
  } catch {
  }
  return ((o = s.attributes) == null ? void 0 : o.friendly_name) || s.entity_id;
}
const Op = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Wp = (n) => fc.find(([, s]) => n <= s)[0];
function qp(n, s) {
  if (s === "Beaufort") return Math.round(n);
  const o = s ? fp[s] : void 0;
  if (o === void 0) return;
  const u = gp.findIndex((m) => n * o < m);
  return u === -1 ? 12 : u;
}
const Pd = (n, s) => {
  const o = s ? vp[s] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Id = (n) => Object.keys(n.states || {}).find((s) => {
  var o, u;
  return s.startsWith("sensor.") && ((u = (o = n.entities) == null ? void 0 : o[s]) == null ? void 0 : u.platform) === "moon";
}), sl = (n) => Object.values(n.states || {}).filter((s) => {
  var o, u;
  return s.entity_id.startsWith("sensor.") && ((o = s.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = s.attributes) == null ? void 0 : u.state_class) ?? "") && Cs(n, s.entity_id);
}).map((s) => s.entity_id).sort()[0];
function Vp(n) {
  var o;
  const s = {};
  for (const [u, m] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      s[u] = m.categories;
      continue;
    }
    for (const [f, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) s[f] = w == null ? void 0 : w.categories;
  }
  return s;
}
const Tc = (n, s, o) => {
  var m, f, w;
  const u = (f = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : f.platform;
  return !!u && !!((w = s[u]) != null && w.includes(hp));
};
function zp(n, s) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var m;
    return u.entity_id.startsWith("sensor.") && _d.includes(((m = u.attributes) == null ? void 0 : m.device_class) ?? "") && Cs(n, u.entity_id) && Tc(n, s, u.entity_id);
  }).sort((u, m) => u.entity_id.localeCompare(m.entity_id)).forEach((u) => {
    o.has(u.attributes.device_class) || o.set(u.attributes.device_class, u.entity_id);
  }), _d.map((u) => o.get(u)).filter(Boolean);
}
const jp = (n, s) => Object.values(n.states || {}).filter((o) => {
  var u, m;
  return o.entity_id.startsWith("sensor.") && Cs(n, o.entity_id) && Tc(n, s, o.entity_id) && (((m = (u = n.entities) == null ? void 0 : u[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Hd(n, s, o) {
  const u = Math.max(s - n, 1e-6), m = o[o.length - 1], f = o.find((B) => u / B <= 4) ?? m * Math.ceil(u / (4 * m)), w = Math.floor(n / f) * f;
  let L = Math.ceil(s / f) * f;
  L === w && (L = w + f);
  const v = [];
  for (let B = w; B <= L + f / 1e3; B += f) v.push(B);
  return { min: w, max: L, ticks: v };
}
const yr = (n, s, o) => {
  const u = (w) => [1, 3, 5].map((L) => parseInt(w.slice(L, L + 2), 16)), m = u(n), f = u(s);
  return "rgb(" + m.map((w, L) => Math.round(w + (f[L] - w) * o)).join(", ") + ")";
}, Gp = (n, s, o, u) => {
  const m = o * Math.abs(1 - 2 * u), f = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (s - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (s + o) + " A " + m + " " + o + " 0 0 " + f + " " + n + " " + (s - o) + " Z";
}, Do = ({ icon: n, name: s, sub: o, visual: u, double: m, backdrop: f, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (f ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (f ? '<div class="wbBackdrop" aria-hidden="true">' + f + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Vi(n) + '</div><div class="wbText"><span class="wbName">' + He(s) + "</span>" + (o ? '<span class="wbSub">' + He(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + u + "</div></div>", ll = (n, s) => '<div class="wbValue"><span class="wbNum">' + He(n) + "</span>" + (s ? '<span class="wbUnitV">' + He(s) + "</span>" : "") + "</div>";
function Up(n) {
  const s = n.max - n.min || 1, o = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / s * 100, u = (L) => L / Mr * 100 + "%", m = (L) => L.map((v) => v.t + "," + o(v.v)).join(" "), f = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + u(L.t) + '">' + Vi(L.rise ? qn.sunsetUp : qn.sunsetDown) + He(L.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + o(L) + '%">' + He(n.format(L)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Mr + ' 100" preserveAspectRatio="none">' + n.night.map(([L, v]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (v - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + Mr + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (f.length > 1 ? '<polygon class="wbDcArea" points="' + f[0].t + ",100 " + m(f) + " " + f[f.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(f) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + u(L.t + 12) + ";width:" + u(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + He(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + He(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + u(L.t) + '">' + He(L.label) + "</span>").join("") + "</div></div>", w;
}
function Yp(n, s) {
  const w = n.map((z) => z.value), L = Math.min(...w), v = Math.max(...w), B = v - L || 1, se = (z) => z / (n.length - 1) * 300, ne = (z) => 18 + (1 - (z - L) / B) * 84, N = n.map((z, V) => se(V) + "," + ne(z.value)).join(" "), P = w.indexOf(v), G = w.indexOf(L), X = (z) => z === 0 ? "start" : z === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + N + ' 300,102"></polygon><polyline class="wbLine" points="' + N + '" vector-effect="non-scaling-stroke"></polyline><text x="' + se(P) + '" y="' + (ne(v) - 6) + '" text-anchor="' + X(P) + '">' + He(s(v)) + '</text><text x="' + se(G) + '" y="' + (ne(L) + 14) + '" text-anchor="' + X(G) + '">' + He(s(L)) + '</text><text x="0" y="120" text-anchor="start">' + He(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + He(n[n.length - 1].label) + "</text></svg>";
}
function Zp(n, s) {
  const f = n.map((ne) => ne.value).concat([]), w = Math.min(...f) - 2, L = Math.max(...f) + 1, v = L - w || 1, B = 300 / n.length, se = (ne) => (1 - (ne - w) / v) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ne, N) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (N * B + B * 0.2) + '" y="' + se(ne.value) + '" width="' + B * 0.6 + '" height="' + (104 - se(ne.value)) + '" rx="6"></rect><text x="' + (N * B + B / 2) + '" y="120" text-anchor="middle">' + He(ne.label) + "</text>").join("") + "</svg>";
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
], $p = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Fd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Jp = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Xp = 0;
function Od(n, { getHass: s, entityId: o, style: u = "bitmap", motion: m = !0, cards: f, onOpen: w } = {}) {
  var Qn, Oa;
  const L = "wb" + ++Xp + "-", v = document.createElement("div");
  v.className = "wb";
  const B = document.createElement("div");
  B.className = "wbBento", v.appendChild(B), n.replaceChildren(v);
  const se = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((S) => !f || f.includes(S)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, N = {};
  se.forEach((S) => {
    const E = document.createElement("div");
    E.className = "wbItem", E.dataset.card = S, E.dataset.size = ne[S] || "tile", E.hidden = !0, B.appendChild(E), N[S] = { el: E, html: null };
  });
  let P = !1, G = null, X = 0, z = -1, V = !1, $ = null;
  const O = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Y = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ae = /* @__PURE__ */ new Date(), A = /* @__PURE__ */ new Date(), q = null;
  const ge = {}, Se = {}, g = (S) => {
    var E;
    return ((E = Se[S]) == null ? void 0 : E.forecast) ?? [];
  }, ke = (S, E) => {
    var F;
    return Se[E] ? (F = S.states) == null ? void 0 : F[Se[E].entityId] : void 0;
  };
  function Ce(S) {
    const E = ge[S];
    E && (E.unsub.then((F) => {
      typeof F == "function" && F();
    }).catch(() => {
    }), delete ge[S]), Se[S] && delete Se[S];
  }
  function Oe(S, E, F) {
    var ue;
    if (typeof ((ue = S.connection) == null ? void 0 : ue.subscribeMessage) != "function") return;
    const W = { entityId: F };
    try {
      W.unsub = Promise.resolve(S.connection.subscribeMessage((be) => {
        P || ge[E] !== W || (be != null && be.forecast ? Se[E] = { entityId: F, forecast: be.forecast } : delete Se[E], Ae());
      }, { type: "weather/subscribe_forecast", forecast_type: E, entity_id: F }));
    } catch (be) {
      W.unsub = Promise.reject(be);
    }
    W.unsub.catch(() => {
      ge[E] === W && delete ge[E];
    }), ge[E] = W;
  }
  function b(S, E) {
    var F;
    for (const W of ["daily", "hourly"]) {
      const ue = Hp(S, E, W);
      ((F = ge[W]) == null ? void 0 : F.entityId) !== (ue == null ? void 0 : ue.entity_id) && (Ce(W), ue && Oe(S, W, ue.entity_id));
    }
  }
  const C = (S, E, F, W = !1) => S.callWS({
    type: "history/history_during_period",
    start_time: F.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [E],
    minimal_response: W,
    no_attributes: W,
    significant_changes_only: !1
  });
  async function k(S, E) {
    var he, xe, ce;
    const F = ca(S, E, "pressure");
    if (!F) return;
    const W = F.stateObj.entity_id, ue = await C(S, W, new Date(Date.now() - 3 * Da)), be = (ce = (xe = (he = ue == null ? void 0 : ue[W]) == null ? void 0 : he.find((Ee) => {
      var je;
      return typeof ((je = Ee.a) == null ? void 0 : je.pressure) == "number";
    })) == null ? void 0 : xe.a) == null ? void 0 : ce.pressure;
    Y.pressureHistory = typeof be == "number" ? { entityId: W, value: be } : void 0;
  }
  async function T(S, E) {
    var xe;
    const F = ca(S, E, "temperature");
    if (!F) return;
    const W = F.stateObj.entity_id, ue = zi(/* @__PURE__ */ new Date()), be = await C(S, W, new Date(ue.getTime() - rp * ri)), he = /* @__PURE__ */ new Map();
    for (const ce of (be == null ? void 0 : be[W]) ?? []) {
      const Ee = (xe = ce.a) == null ? void 0 : xe.temperature, je = new Date((ce.lc ?? ce.lu) * 1e3);
      if (typeof Ee != "number" || je >= ue) continue;
      const Ye = je.toDateString();
      he.set(Ye, Math.max(he.get(Ye) ?? -1 / 0, Ee));
    }
    Y.temperatureHistory = { entityId: W, dailyHighs: [...he.values()], days: [...he.entries()].map(([ce, Ee]) => ({ date: new Date(ce), high: Ee })) };
  }
  async function re(S) {
    const E = sl(S);
    if (!E) return;
    const F = await S.callWS({ type: "recorder/statistic_during_period", statistic_id: E, rolling_window: { duration: { hours: 24 } } });
    Y.rain = { entityId: E, change: (F == null ? void 0 : F.change) ?? void 0 };
  }
  function J() {
    const S = s == null ? void 0 : s();
    if (!S || P || typeof S.callWS != "function") return;
    const E = Be(S);
    Y.lastFetch = Date.now(), [k(S, E), T(S, E), re(S)].forEach((F) => F.then(() => Ae(), () => {
    }));
  }
  async function ee() {
    const S = s == null ? void 0 : s();
    if (!S) return;
    const E = ca(S, Be(S), "temperature");
    if (!E) return;
    const F = E.stateObj.entity_id, W = zi(/* @__PURE__ */ new Date());
    try {
      const ue = await C(S, F, W), be = (he) => ((ue == null ? void 0 : ue[F]) ?? []).map((xe) => {
        var ce;
        return { time: xe.lu * 1e3, value: (ce = xe.a) == null ? void 0 : ce[he] };
      }).filter((xe) => typeof xe.value == "number");
      Y.todayHistory = { day: W.toDateString(), fetched: Date.now(), temperature: be("temperature"), humidity: be("humidity") }, Ae();
    } catch {
    }
  }
  async function oe(S) {
    const E = s == null ? void 0 : s();
    if (E)
      try {
        const F = await C(E, S, new Date(Date.now() - 24 * Da), !0), W = ((F == null ? void 0 : F[S]) ?? []).filter((be) => wn(be.s)), ue = Math.max(1, Math.ceil(W.length / 48));
        Y.aqHistory = { entityId: S, points: W.filter((be, he) => he % ue === 0).map((be) => ({ label: Wi(new Date(be.lu * 1e3), E), value: Number(be.s) })) }, Ae();
      } catch {
      }
  }
  function de(S) {
    Y.categories === void 0 && (Y.categories = null, Promise.resolve().then(() => S.callWS({ type: "integration/descriptions" })).then((E) => {
      Y.categories = Vp(E);
    }, () => {
      Y.categories = {};
    }).then(() => Ae()));
  }
  function Be(S) {
    var F;
    const E = Object.keys(S.states || {}).filter((W) => W.startsWith("weather.") && Cs(S, W)).sort();
    return o && ((F = S.states) != null && F[o]) ? [o, ...E.filter((W) => W !== o)] : E;
  }
  const et = (S) => Y.categories ? { air: zp(S, Y.categories), pollen: jp(S, Y.categories) } : { air: [], pollen: [] };
  function Dt(S, E, F, W) {
    if (u === "smooth") {
      const ue = ep(S, E === 90, F, L + "g-" + W);
      return '<span class="wbWx wbS' + E + " wb" + ue.k[0].toUpperCase() + ue.k.slice(1) + (ue.night ? " wbNight" : "") + '" aria-hidden="true">' + ue.svg + "</span>";
    }
    return '<span class="wbWx wbS' + E + '" aria-hidden="true"><canvas data-wb-wx="' + He(Ms(S, F)) + '" data-size="' + E + '"></canvas></span>';
  }
  const wt = () => g("daily").filter((S) => S.templow != null).slice(0, tp);
  function ma(S, E) {
    const F = new Date(E.datetime), W = /* @__PURE__ */ new Date();
    return xr(F, W) ? Qe.today : xr(F, new Date(W.getTime() + ri)) ? Qe.tomorrow : Dd(F, S);
  }
  const ka = (S, E, F) => F === 0 ? ma(S, E) : Dd(new Date(E.datetime), S);
  function Le(S, E) {
    var je, Ye, qe, De;
    const F = Ip(S, E);
    if (!F) return "";
    const W = wt(), ue = O.openDay !== void 0 ? W[O.openDay] : void 0, be = ca(S, E, "temperature"), he = W[0], xe = he && xr(new Date(he.datetime), /* @__PURE__ */ new Date()), ce = ((Ye = (je = S.config) == null ? void 0 : je.unit_system) == null ? void 0 : Ye.temperature) || ((qe = F.attributes) == null ? void 0 : qe.temperature_unit) || "";
    let Ee = '<div class="wbCard wbWeather' + (ue ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (ue ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + He(Qe.openPage) + '">' : '<div class="wbCurrent">') + Dt(F.state, 90, Pp(S), "now") + '<div class="wbTempBlock">' + (be && wn(be.value) ? '<div class="wbTemp"><span class="wbDeg">' + He(ln(Math.round(Number(be.value)), S.locale)) + '</span><span class="wbUnit">' + He(ce) + "</span></div>" : "") + '<div class="wbPlace">' + He(((De = S.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + He(hs(S, F)) + "</div>" + (xe && he.templow != null ? '<div class="wbRange">' + He(da(Qe.range, { high: Tn(S, he.temperature), low: Tn(S, he.templow) })) + "</div>" : "") + "</div></div>";
    return W.length && (Ee += '<div class="wbColumns" role="list">' + W.map((Ie, Ne) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ne + '" data-wb-focus="col-' + Ne + '"><span class="wbDay">' + He(ka(S, Ie, Ne)) + "</span>" + Dt(Ie.condition ?? "cloudy", 60, !1, "col" + Ne) + '<span class="wbTemps"><span class="wbHi">' + He(Tn(S, Ie.temperature)) + '</span><span class="wbLo">' + He(Tn(S, Ie.templow)) + "</span></span></button>").join("") + "</div>", Ee += '<div class="wbHalves" role="list">' + W.map((Ie, Ne) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ne + '" data-wb-focus="half-' + Ne + '">' + Dt(Ie.condition ?? "cloudy", 40, !1, "half" + Ne) + '<span class="wbText"><span class="wbName">' + He(ma(S, Ie)) + '</span><span class="wbSub">' + He(da(Qe.highLow, { high: Tn(S, Ie.temperature), low: Tn(S, Ie.templow) })) + "</span></span></button>").join("") + "</div>"), Ee + "</div>" + (ue ? Pa(S, E, ue) : "") + "</div>";
  }
  function at(S) {
    const E = S.getTime(), F = Date.now() - Da;
    return g("hourly").filter((W) => {
      const ue = new Date(W.datetime).getTime();
      return ue >= E && ue < E + ri && ue > F;
    });
  }
  function tn(S) {
    if (!S.length) return ["temperature"];
    const E = ["temperature"];
    return S.some((F) => F.precipitation != null || F.precipitation_probability != null) && E.push("precipitation"), S.some((F) => F.humidity != null) && E.push("humidity"), E;
  }
  function Pa(S, E, F) {
    const W = zi(new Date(F.datetime)), ue = at(W), be = tn(ue), he = be.includes(O.dayMode) ? O.dayMode : "temperature", xe = (ce) => ce === "humidity" ? Qe.humidity : Qe.modes[ce];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Dt(F.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + He(ma(S, F)) + '</span><span class="wbSub">' + He(da(Qe.highLow, { high: Tn(S, F.temperature), low: Tn(S, F.templow) })) + '</span></div><button class="wbBack" title="' + He(Qe.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Vi(qn.back) + "</button></div>" + (be.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + be.map((ce) => '<button aria-pressed="' + (ce === he) + '" data-wb="day-mode" data-mode="' + ce + '" data-wb-focus="day-mode-' + ce + '">' + He(xe(ce)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Up(Vt(S, E, W, ue, he)) + "</div></div>";
  }
  function Vt(S, E, F, W, ue) {
    var jn;
    const be = F.getTime(), he = Date.now(), xe = xr(F, /* @__PURE__ */ new Date()), ce = (ht) => (ht - be) / Na, Ee = (ht) => Wi(new Date(ht), S), je = (ht) => new Date(ht.datetime).getTime(), Ye = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: Ee(be + ht * Da), minor: ht % 6 !== 0 })), { rise: qe, set: De } = Nd(S, F), Ie = [], Ne = [];
    qe && (Ie.push({ t: ce(qe.getTime()), label: Ee(qe.getTime()), rise: !0 }), Ne.push([0, ce(qe.getTime())])), De && (Ie.push({ t: ce(De.getTime()), label: Ee(De.getTime()), rise: !1 }), Ne.push([ce(De.getTime()), Mr]));
    const Xe = ks(S);
    !qe && !De && Xe && Rl(new Date(be + ri / 2), Xe.lat, Xe.lon) < 0 && Ne.push([0, Mr]);
    const pt = xe ? ce(he) : void 0, _t = { hours: Ye, sun: Ie, night: Ne };
    if (!W.length && !xe) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Qe.noHourly };
    if (ue === "precipitation") {
      const ht = W.some((rn) => rn.precipitation_probability != null), un = W.map((rn) => ({ t: ce(je(rn)), v: Number((ht ? rn.precipitation_probability : rn.precipitation) ?? 0) })), kn = kr(S, ke(S, "hourly"), "precipitation"), gn = Math.max(0, ...un.map((rn) => rn.v)), ea = ht ? 100 : Hd(0, Math.max(gn, 1), [0.5, 1, 2, 5, 10]).max, lo = (rn) => ht ? ln(rn, S.locale) + "%" : ln(rn, S.locale, { maximumFractionDigits: 1 }) + " " + kn, ha = un.find((rn) => rn.v === gn);
      return {
        ..._t,
        kind: "bars",
        points: un,
        min: 0,
        max: ea,
        ticks: [0, ea / 2, ea],
        format: lo,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: ha && gn > 0 ? { t: ha.t + 30, v: ha.v, label: lo(ha.v) } : void 0,
        note: gn > 0 ? void 0 : Qe.noRain
      };
    }
    const vt = ue === "humidity" ? "humidity" : "temperature", Gt = W.filter((ht) => ht[vt] != null && (!xe || je(ht) >= he)).map((ht) => ({ t: ce(je(ht)), v: Number(ht[vt]) }));
    let nn, on = [];
    if (pt !== void 0) {
      const ht = ca(S, E, vt);
      ht && wn(ht.value) && (nn = { t: pt, v: Number(ht.value) }, Gt.unshift(nn)), on = (((jn = Y.todayHistory) == null ? void 0 : jn.day) === F.toDateString() ? Y.todayHistory[vt] : []).filter((kn) => kn.time <= he).map((kn) => ({ t: Math.max(0, ce(kn.time)), v: kn.value })), nn && on.length && on.push(nn);
    }
    const Kt = [...on, ...Gt];
    if (!Kt.length) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Qe.noHourly };
    const io = Kt.map((ht) => ht.v), zn = Hd(Math.min(...io), Math.max(...io), vt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    vt === "humidity" && (zn.min = Math.max(0, zn.min), zn.max = Math.min(100, zn.max), zn.ticks = zn.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const ro = vt === "humidity" ? (ht) => ln(ht, S.locale) + "%" : (ht) => Tn(S, ht), so = vt === "temperature" ? Kt.reduce((ht, un) => un.v > ht.v ? un : ht) : void 0;
    return { ..._t, kind: "line", points: Gt, past: on, ...zn, format: ro, now: nn, peak: so ? { ...so, label: ro(so.v) } : void 0 };
  }
  function hn(S) {
    const E = ["temperature"];
    return S.some((F) => F.precipitation_probability != null || F.precipitation != null) && E.push("precipitation"), S.some((F) => F.wind_speed != null) && E.push("wind"), E;
  }
  function ct() {
    const S = /* @__PURE__ */ new Date();
    return S.setHours(6, 0, 0, 0), S.getTime() > Date.now() && S.setDate(S.getDate() - 1), S;
  }
  function tt(S, E) {
    var ue, be;
    const F = g("daily"), W = [];
    for (let he = 0; he < us; he++) for (const xe of [!1, !0]) {
      const ce = S.getTime() + (he * 24 + (xe ? 12 : 0)) * Da, Ee = ce + 12 * Da, je = {};
      E.forEach((qe) => {
        const De = new Date(qe.datetime).getTime();
        qe.condition && De >= ce && De < Ee && (je[qe.condition] = (je[qe.condition] ?? 0) + (op.has(qe.condition) ? 2 : 1));
      });
      let Ye = (ue = Object.entries(je).sort((qe, De) => De[1] - qe[1])[0]) == null ? void 0 : ue[0];
      if (!Ye) {
        const qe = new Date(ce).toDateString();
        Ye = ((be = F.find((De) => new Date(De.datetime).toDateString() === qe)) == null ? void 0 : be.condition) ?? "cloudy";
      }
      W.push({ cond: xe && Ye === "sunny" ? "clear-night" : Ye, night: xe });
    }
    return W;
  }
  function dt(S, E, F) {
    const W = ke(S, "hourly"), ue = E.precipitation_probability != null ? ln(E.precipitation_probability, S.locale) + "%" : "", be = E.precipitation ? ln(E.precipitation, S.locale) + " " + kr(S, W, "precipitation") : "";
    switch (F) {
      case "precipitation":
        return ue ? [ue, be] : [be || "–", ""];
      case "wind":
        return E.wind_speed != null ? [ln(Math.round(E.wind_speed), S.locale), kr(S, W, "wind_speed")] : ["–", ""];
      default:
        return [Tn(S, E.temperature), (E.precipitation_probability ?? 0) >= 20 ? ue : ""];
    }
  }
  function Po(S) {
    q = null;
    const E = g("hourly"), F = Math.floor(Date.now() / Na) * Na, W = E.filter((De) => new Date(De.datetime).getTime() > F - Da);
    if (!W.length) return "";
    const ue = hn(W), be = ue.includes(O.hourlyMode) ? O.hourlyMode : "temperature", he = ct(), xe = he.getTime() + us * 24 * Da, ce = (F - he.getTime()) / Da * il, Ee = us * 24 * il, je = (De) => (De - F) / Da * il, Ye = [{ x: 0, label: Qe.now, entry: W[0] }, ...W.filter((De) => {
      const Ie = new Date(De.datetime);
      return je(Ie.getTime()) >= 48 && Ie.getTime() < xe && Ie.getHours() % ap === 0;
    }).map((De) => {
      const Ie = new Date(De.datetime);
      return { x: je(Ie.getTime()), label: Wi(Ie, S), entry: De };
    })], qe = (De, Ie, Ne) => '<span class="wbMark' + (Ie === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Ne + "</span>";
    return q = { segs: tt(he, E), seed: he.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + He(Qe.nextHours) + "</h2></div>" + (ue.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ue.map((De) => '<button aria-pressed="' + (De === be) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + He(Qe.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Ee - ce) + 'px"><div class="wbRow wbTimes">' + Ye.map((De, Ie) => qe(De, Ie, He(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -ce + "px;width:" + Ee + 'px"><canvas data-wb-strip' + (u === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ye.map((De, Ie) => {
      if (!De.entry) return "";
      const [Ne, Xe] = dt(S, De.entry, be);
      return qe(De, Ie, '<span class="wbPrimaryV">' + He(Ne) + '</span><span class="wbSecondary">' + He(Xe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ia(S) {
    const E = ae, { rise: F, set: W } = Nd(S, E), ue = F && W ? Math.round((W.getTime() - F.getTime()) / Na) : 0, be = Math.floor(ue / 60), he = ue % 60, xe = F && W ? (E.getTime() - F.getTime()) / (W.getTime() - F.getTime()) : -1, ce = xe >= 0 && xe <= 1, Ee = Math.PI * (1 - Math.min(1, Math.max(0, xe))), je = 100 + 74 * Math.cos(Ee), Ye = 100 - 74 * Math.sin(Ee), qe = ce ? Math.sin(Math.PI * xe) : 0, De = ce ? yr("#2e0a0d", "#43180a", qe) : "#0e0507", Ie = ce ? yr("#7a1d12", "#8f400f", qe) : "#1c0709", Ne = yr("#f60c08", "#ff8f00", qe), Xe = yr("#fd9b07", "#ffd84a", qe), pt = ce ? yr("#fd9b07", "#ffd84a", qe) : "#6b3a2a", _t = (Gt) => Gt ? Wi(Gt, S) : "–", vt = F && W ? new Date((F.getTime() + W.getTime()) / 2) : null;
    return Do({
      icon: qn.sunny,
      name: Qe.sun,
      sub: ue ? da(Qe.daylightShort, { hours: be, minutes: he }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + Ie + ");--wb-sun-line:" + pt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Ne + '"></stop><stop offset="0.45" stop-color="' + Ne + '"></stop><stop offset="1" stop-color="' + Xe + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ce ? '<circle cx="' + je + '" cy="' + Ye + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (vt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + He(_t(vt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + He(_t(F)) + '</text><text class="wbSunTime" x="174" y="117">' + He(_t(W)) + "</text></svg></div>"
    });
  }
  function dn(S, E, F) {
    const W = (he) => L + "moon-" + he, ue = S > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + W("terminator") + ')" d="' + Gp(61, 61, 57.9, S) + '"' + (E ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", be = (he, xe, ce, Ee, je, Ye) => '<filter id="' + W(he) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xe + '" numOctaves="' + ce + '" seed="' + Ee + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((qe) => "<feFunc" + qe + ' type="linear" slope="' + je + '" intercept="' + Ye + '"></feFunc' + qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + W("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + W("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + W("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + W("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + W("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + be("mottle", "0.045", 4, 3, 1.8, -0.4) + be("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + W("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + W("fill") + ')"></circle><g' + (F ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + W("soften") + ')">' + Kp.map(([he, xe, ce, Ee, je, Ye]) => '<ellipse cx="' + he + '" cy="' + xe + '" rx="' + ce + '" ry="' + Ee + '" fill-opacity="' + Ye + '" transform="rotate(' + je + " " + he + " " + xe + ')"></ellipse>').join("") + "</g>" + $p.map(([he, xe, ce]) => '<circle class="wbCrater" cx="' + he + '" cy="' + xe + '" r="' + ce + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + W("glow") + ')">' + Jp.map(([he, xe]) => '<line x1="54.4" y1="95" x2="' + he + '" y2="' + xe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + W("glow") + ')">' + Fd.map(([he, xe, ce]) => '<circle cx="' + he + '" cy="' + xe + '" r="' + ce * 2 + '"></circle>').join("") + "</g>" + Fd.map(([he, xe, ce]) => '<circle class="wbBrightCenter" cx="' + he + '" cy="' + xe + '" r="' + ce + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + W("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + W("grain") + ')"></rect>' + ue + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function xn(S) {
    const E = A, F = ks(S), W = (F == null ? void 0 : F.lat) ?? 0, ue = Np(E), be = Id(S), he = be ? S.states[be] : void 0, xe = Cr(he) && pp.includes(he.state) ? he.state : Bp(ue.phase), { rise: ce, set: Ee } = F ? Rp(E, F.lat, F.lon) : {}, je = ue.phase > 0.5 != W < 0, Ye = ln(Math.round(ue.fraction * 100), S.locale) + "%", qe = ce ?? Ee, De = qe ? Wi(qe, S) : void 0;
    return Do({
      icon: qn.night,
      name: Qe.moon,
      sub: Qe.phases[xe],
      visual: '<div class="wbMoonBox">' + dn(ue.fraction, je, W < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? He(da(ce ? Qe.moonriseAt : Qe.moonsetAt, { time: De })) : "") + "</span><span>" + He(da(Qe.lit, { illumination: Ye })) + "</span></div>"
    });
  }
  function ut(S, E) {
    var Ie;
    const F = ca(S, E, "wind_speed");
    if (!F || !wn(F.value)) return "";
    const W = ca(S, E, "wind_gust_speed"), ue = ca(S, E, "wind_bearing"), be = ue && wn(ue.value) ? Number(ue.value) : void 0, he = qp(Number(F.value), (Ie = F.stateObj.attributes) == null ? void 0 : Ie.wind_speed_unit), xe = Cl(S, F.stateObj, "wind_speed", F.value), ce = be !== void 0 ? Qe.cardinal[up[((be + 11.25) / 22.5 | 0) % 16]] : void 0, Ee = W ? Fp(S, W.stateObj, "wind_gust_speed", W.value) : void 0, je = [ce ? da(Qe.windFrom, { direction: ce }) : void 0, he !== void 0 ? he + " " + Qe.beaufort : void 0].filter(Boolean).join(" · ") || Ee, Ye = (Ne, Xe) => {
      const pt = (Ne - 90) * Math.PI / 180;
      return [100 + Xe * Math.cos(pt), 100 + Xe * Math.sin(pt)];
    }, qe = Array.from({ length: 36 }, (Ne, Xe) => Xe * 10).map((Ne) => {
      const Xe = Ne % 90 === 0, [pt, _t] = Ye(Ne, 97), [vt, Gt] = Ye(Ne, Xe ? 83 : 89);
      return '<line class="wbTick' + (Xe ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + _t + '" x2="' + vt + '" y2="' + Gt + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ne, Xe]) => {
      const [pt, _t] = Ye(Xe, 64);
      return '<text class="wbLetter' + (Ne === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + _t + '">' + He(Qe.cardinal[Ne]) + "</text>";
    }).join("");
    return Do({ icon: qn.windy, name: Qe.wind, sub: je, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + qe + De + (be !== void 0 ? '<path class="wbMarker" transform="rotate(' + be + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + He(xe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + He(xe.unit) + "</text></svg>" });
  }
  function ot(S, E) {
    const F = ca(S, E, "uv_index");
    if (!F || !wn(F.value)) return "";
    const W = Number(F.value), ue = Qe.uvLevel[Op(W)], be = /* @__PURE__ */ new Date();
    be.setHours(23, 59, 59, 999);
    const he = g("hourly").filter((Ne) => Ne.uv_index != null && new Date(Ne.datetime) > /* @__PURE__ */ new Date() && new Date(Ne.datetime) <= be).reduce((Ne, Xe) => !Ne || Xe.uv_index > Ne.uv ? { uv: Xe.uv_index, time: new Date(Xe.datetime) } : Ne, void 0), xe = 48, ce = 100, Ee = 130, je = (Ne) => -xe + Math.min(Ne, 11) / 11 * 2 * xe, Ye = (Ne, Xe) => {
      const pt = Ne * Math.PI / 180;
      return [ce + Xe * Math.sin(pt), Ee - Xe * Math.cos(pt)];
    }, qe = (Ne, Xe, pt) => {
      const [_t, vt] = Ye(je(Ne), pt), [Gt, nn] = Ye(je(Xe), pt);
      return "M " + _t + " " + vt + " A " + pt + " " + pt + " 0 0 1 " + Gt + " " + nn;
    }, Ie = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, ps.low], [3, 6, ps.moderate], [6, 8, ps.high], [8, 11, ps.very_high]].map(([Ne, Xe, pt]) => '<path class="wbVuZone" d="' + qe(Ne, Xe, 96) + '" style="stroke:' + pt + '"></path>').join("") + Array.from({ length: 21 }, (Ne, Xe) => ({ angle: -xe + Xe * (2 * xe / 20), major: Xe % 2 === 0 })).map(({ angle: Ne, major: Xe }) => {
      const [pt, _t] = Ye(Ne, 102), [vt, Gt] = Ye(Ne, Xe ? 114 : 108);
      return '<line class="wbVuTick' + (Xe ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + _t + '" x2="' + vt + '" y2="' + Gt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + je(W) + 'deg"><line x1="' + ce + '" y1="' + Ee + '" x2="' + ce + '" y2="' + (Ee - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + He(ln(Math.round(W), S.locale)) + "</text></svg>";
    return Do({
      icon: qn.sunnyAlert,
      name: Qe.metrics.uv_index,
      sub: he && he.uv > W ? da(Qe.uvPeak, { level: ue, uv_index: ln(Math.round(he.uv), S.locale), time: Wi(he.time, S) }) : ue,
      visual: Ie
    });
  }
  function Pe(S) {
    const E = g("daily")[0], F = Y.temperatureHistory;
    if (!E || new Date(E.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !wn(E.temperature) || !F || F.dailyHighs.length < sp) return "";
    const W = Number(E.temperature), ue = F.dailyHighs.reduce((vt, Gt) => vt + Gt, 0) / F.dailyHighs.length, be = Math.round(W - ue) || 0, he = be > 0 ? "above" : be < 0 ? "below" : "same", xe = [...F.days, { date: /* @__PURE__ */ new Date(), high: W, today: !0 }], ce = 220, Ee = 158, je = 22, Ye = 20, qe = xe.map((vt) => vt.high).concat(ue), De = Math.min(...qe) - 3, Ie = Math.max(...qe) + 1, Ne = (vt) => je + (1 - (vt - De) / (Ie - De)) * (Ee - je - Ye), Xe = ce / xe.length, pt = Math.min(18, Xe * 0.6), _t = '<svg class="wbCompareBars" viewBox="0 0 ' + ce + " " + Ee + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ce + '" y1="' + Ne(ue) + '" y2="' + Ne(ue) + '"></line>' + xe.map((vt, Gt) => {
      const nn = Gt * Xe + Xe / 2, on = Ne(vt.high), Kt = vt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Kt + '" x="' + (nn - pt / 2) + '" y="' + on + '" width="' + pt + '" height="' + (Ee - Ye - on) + '" rx="5"></rect><text class="wbAvgValue' + Kt + '" x="' + nn + '" y="' + (on - 6) + '">' + He(Tn(S, vt.high)) + '</text><text class="wbAvgDay' + Kt + '" x="' + nn + '" y="' + (Ee - 4) + '">' + He(kp(vt.date, S)) + "</text>";
    }).join("") + "</svg>";
    return Do({
      icon: qn.chartLine,
      name: Qe.metrics.compared_to_average,
      double: !0,
      sub: da(Qe.highsLastDays, { days: F.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (be > 0 ? "+" : "") + He(Tn(S, be)) + '</div><div class="wbCompareWords">' + He(Qe.average[he]) + '</div><div class="wbCompareTemps">' + He(da(Qe.todayVsAverage, { today: Tn(S, W), average: Tn(S, ue) })) + "</div></div>" + _t + "</div>"
    });
  }
  function Ft(S, E) {
    const F = ca(S, E, "humidity");
    if (!F || !wn(F.value)) return "";
    const W = ca(S, E, "dew_point"), ue = Math.max(0, Math.min(100, Number(F.value)));
    return Do({
      icon: qn.waterPercent,
      name: Qe.metrics.humidity,
      sub: W && wn(W.value) ? da(Qe.dewPoint, { dew_point: Tn(S, W.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + ue + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + ll(ln(Math.round(Number(F.value)), S.locale), "%") + "</div>"
    });
  }
  function kt(S, E) {
    var Ee, je;
    const F = ca(S, E, "pressure");
    if (!F || !wn(F.value)) return "";
    const W = Number(F.value), ue = (Ee = F.stateObj.attributes) == null ? void 0 : Ee.pressure_unit, be = Pd(W, ue), he = ((je = Y.pressureHistory) == null ? void 0 : je.entityId) === F.stateObj.entity_id ? Pd(Y.pressureHistory.value, ue) : void 0;
    let xe;
    if (be !== void 0 && he !== void 0) {
      const Ye = be - he;
      xe = Ye >= Td ? "rising" : Ye <= -Td ? "falling" : "steady";
    }
    const ce = Cl(S, F.stateObj, "pressure", Math.round(W));
    return Do({
      icon: qn.gauge,
      name: Qe.metrics.pressure,
      sub: xe ? Qe.pressure[xe] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + ll(ce.number) + '<span class="wbTapeUnit">' + He(ce.unit) + "</span></div>" + (be !== void 0 ? mt(S, be) : "") + "</div>"
    });
  }
  function mt(S, E) {
    const ue = Math.floor(E) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (be, he) => ue + he).map((be) => {
      const he = 100 - (be - E) * 9;
      if (he < 22 || he > 178) return "";
      const xe = be % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(he - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xe ? 2 : 8) + '" x2="26" y1="' + he + '" y2="' + he + '"></line>' + (xe ? '<text class="wbTapeLabel" x="33" y="' + he + '">' + He(ln(be, S.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + He(Qe.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + He(Qe.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function En(S) {
    var ce, Ee;
    const E = sl(S), F = E ? S.states[E] : void 0;
    if (!F || ((ce = Y.rain) == null ? void 0 : ce.entityId) !== E || !wn(Y.rain.change)) return "";
    const W = ((Ee = F.attributes) == null ? void 0 : Ee.unit_of_measurement) ?? "", ue = ke(S, "hourly"), be = Date.now() + ri, he = g("hourly").filter((je) => je.precipitation != null && new Date(je.datetime).getTime() <= be), xe = he.reduce((je, Ye) => je + Number(Ye.precipitation), 0);
    return Do({
      icon: qn.rainy,
      name: Qe.metrics.precipitation,
      sub: ue && he.length ? da(Qe.rainExpected, { amount: ln(xe, S.locale, { maximumFractionDigits: 1 }) + " " + kr(S, ue, "precipitation") }) : Qe.rainLast24h,
      visual: ll(ln(Y.rain.change, S.locale, { maximumFractionDigits: 1 }), W) + (he.length > 1 ? Zp(he.map((je) => ({ label: "", value: Number(je.precipitation) }))) : "")
    });
  }
  function Ge(S) {
    Y.categories === void 0 && de(S);
    const E = et(S), F = (ce) => ce.map((Ee) => S.states[Ee]).filter(Cr), W = F(E.air), ue = F(E.pollen);
    if (!W.length && !ue.length) return "";
    const be = [...W, ...ue], he = (ce) => ue.includes(ce) ? qn.flower : qn.airFilter, xe = be.find((ce) => ce.entity_id === O.aq);
    return xe ? Gi(S, xe, he(xe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + He(Qe.airQuality) + '</h2></div><div class="wbAqTiles">' + be.map((ce) => '<button class="wbTile" data-wb="aq-open" data-entity="' + He(ce.entity_id) + '"><span class="wbChip">' + Vi(he(ce)) + '</span><span class="wbText"><span class="wbName">' + He(Bd(S, ce)) + '</span><span class="wbSub">' + He(hs(S, ce)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Gi(S, E, F) {
    var je, Ye, qe;
    const W = ((je = E.attributes) == null ? void 0 : je.unit_of_measurement) ?? "", ue = ((Ye = E.attributes) == null ? void 0 : Ye.device_class) === "pm25" && W === Ld && wn(E.state), be = Number(E.state), he = ue ? Wp(be) : void 0, xe = ((qe = Y.aqHistory) == null ? void 0 : qe.entityId) === E.entity_id ? Y.aqHistory.points : void 0, ce = (De) => Math.min(100, Math.max(0, De / ms * 100));
    let Ee;
    if (xe && xe.length > 1) Ee = Yp(xe, (De) => (ln(De, S.locale, { maximumFractionDigits: 1 }) + " " + W).trim());
    else if (he) {
      let De = 0;
      const Ie = fc.map(([Ne, Xe]) => {
        const pt = ce(Math.min(Xe, ms)), _t = mp[Ne] + " " + De + "% " + pt + "%";
        return De = pt, _t;
      });
      Ee = '<div class="wbScale" role="meter" aria-label="' + He(Qe.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ms + '" aria-valuenow="' + be + '" style="background:linear-gradient(to right, ' + Ie.join(", ") + ')"><i style="left:' + ce(be) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ms + " " + Ld + "</span></div>";
    } else Ee = '<span class="wbGraphNote"><span>' + He(hs(S, E)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Vi(F) + '</span><span class="wbText"><span class="wbName">' + He(Bd(S, E)) + '</span><span class="wbSub">' + He(hs(S, E)) + (he ? " · " + He(Qe.aqLevel[he]) : "") + '</span></span><button class="wbBack" title="' + He(Qe.back) + '" data-wb="aq-close">' + Vi(qn.back) + '</button></div><div class="wbGraph">' + Ee + "</div></div></div>";
  }
  const Io = {
    current: Le,
    hourly: Po,
    sun: Ia,
    moon: xn,
    wind: ut,
    uv_index: ot,
    compared_to_average: Pe,
    humidity: Ft,
    pressure: kt,
    precipitation: En,
    air_quality: Ge
  };
  function Dn(S) {
    var Ee, je, Ye, qe;
    const E = s == null ? void 0 : s();
    if (!E || P) return;
    const F = Be(E);
    b(E, F), Y.lastFetch || J();
    const W = et(E), ue = Id(E), be = sl(E), he = [
      ...F.map((De) => E.states[De]),
      E.states["sun.sun"],
      ue && E.states[ue],
      be && E.states[be],
      ...W.air.map((De) => E.states[De]),
      ...W.pollen.map((De) => E.states[De]),
      E.locale,
      E.config,
      E.entities,
      Math.floor(Date.now() / Na)
    ];
    if (!S && G && he.length === G.length && he.every((De, Ie) => De === G[Ie])) return;
    G = he;
    const xe = v.getRootNode(), ce = xe.activeElement || document.activeElement;
    for (const De of se) {
      const Ie = N[De];
      let Ne = "";
      try {
        Ne = Io[De](E, F) || "";
      } catch {
        Ne = "";
      }
      if (Ne === Ie.html) continue;
      const Xe = ce && Ie.el.contains(ce) ? (Ee = ce.dataset) == null ? void 0 : Ee.wbFocus : void 0, pt = Ie.el.querySelector(".wbStripScroll"), _t = pt ? pt.scrollLeft : 0;
      Ie.html = Ne, Ie.el.hidden = !Ne, Ie.el.innerHTML = Ne, _t && ((je = Ie.el.querySelector(".wbStripScroll")) == null || je.scrollTo({ left: _t })), Xe && !$ && ((Ye = Ie.el.querySelector('[data-wb-focus="' + Xe + '"]')) == null || Ye.focus());
    }
    $ && ((qe = v.querySelector('[data-wb-focus="' + $ + '"]')) == null || qe.focus(), $ = null), Mt(performance.now());
  }
  function Ae() {
    V || P || (V = !0, queueMicrotask(() => {
      V = !1, Dn(!0);
    }));
  }
  function ze() {
    const S = getComputedStyle(v), E = (he) => S.getPropertyValue(he).trim(), F = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([he, xe]) => {
      E(xe) && (F[he] = E(xe));
    });
    const W = E("--color-text-primary") || "#f1f1f1", ue = E("--color-bg-card") || "#222222", be = !!v.closest(".light");
    return { colors: { ...oo, ...F }, ink: be ? W : ue, paper: be ? ue : W };
  }
  const jt = (S, E) => {
    var F;
    S.width !== E.w && (S.width = E.w), S.height !== E.h && (S.height = E.h), (F = S.getContext("2d")) == null || F.putImageData(new ImageData(E.data, E.w, E.h), 0, 0);
  }, Rn = () => m && !wp();
  function fn(S, E) {
    const F = v.querySelector("canvas[data-wb-strip]");
    if (!F || !q || !F.getClientRects().length) return;
    const W = F.clientWidth, ue = F.clientHeight;
    if (!W || !ue) return;
    const be = { width: W, height: ue, columns: us, colors: E.colors, clock: S, ambient: Rn(), seed: q.seed };
    if (u === "smooth") {
      const he = Math.min(2, window.devicePixelRatio || 1), xe = Math.round(W * he), ce = Math.round(ue * he);
      F.width !== xe && (F.width = xe), F.height !== ce && (F.height = ce);
      const Ee = F.getContext("2d");
      if (!Ee) return;
      Ee.setTransform(he, 0, 0, he, 0, 0), Uu(Ee, q.segs, be);
    } else jt(F, Gu(q.segs, { ...be, px: 2, oneBit: u === "onebit", ink: E.ink, paper: E.paper }));
  }
  function Mt(S) {
    if (P) return;
    const E = ze();
    if (u !== "smooth") {
      const F = Rn();
      v.querySelectorAll("canvas[data-wb-wx]").forEach((W) => {
        W.getClientRects().length && jt(W, oc(yl(W.dataset.wbWx, E.colors), { size: Number(W.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: E.colors, ink: E.ink, paper: E.paper, clock: S, idle: F }));
      });
    }
    fn(S, E);
  }
  function Xn(S) {
    if (X = 0, !(P || !Rn())) {
      if (!document.hidden)
        if (u === "smooth") fn(S, ze());
        else {
          const E = Math.floor(S / 100);
          E !== z && (z = E, Mt(S));
        }
      X = requestAnimationFrame(Xn);
    }
  }
  function qt() {
    v.classList.toggle("wbMotion", Rn()), !X && !P && Rn() && (X = requestAnimationFrame(Xn));
  }
  function Pt(S) {
    var F, W;
    const E = (W = (F = S.target).closest) == null ? void 0 : W.call(F, "[data-wb]");
    if (!(!E || !v.contains(E))) {
      switch (E.dataset.wb) {
        case "day": {
          O.openDay = Number(E.dataset.index), O.opener = E.dataset.wbFocus, $ = "back-day";
          const ue = wt()[O.openDay], be = !Y.todayHistory || Y.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Y.todayHistory.fetched > np;
          ue && xr(new Date(ue.datetime), /* @__PURE__ */ new Date()) && be && ee();
          break;
        }
        case "close-day":
          O.openDay = void 0, $ = O.opener, O.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          O.dayMode = E.dataset.mode;
          break;
        case "hourly-mode":
          O.hourlyMode = E.dataset.mode;
          break;
        case "aq-open":
          O.aq = E.dataset.entity, oe(O.aq);
          break;
        case "aq-close":
          O.aq = void 0;
          break;
        default:
          return;
      }
      Dn(!0);
    }
  }
  function Ha(S) {
    var E, F;
    S.key === "Escape" && O.openDay !== void 0 && ((F = (E = S.target).closest) != null && F.call(E, '[data-wb-open="day"]')) && (O.openDay = void 0, $ = O.opener, O.opener = void 0, Dn(!0));
  }
  let cn = null;
  function Tt(S) {
    var F, W;
    const E = (W = (F = S.target).closest) == null ? void 0 : W.call(F, ".wbStripScroll");
    !E || S.button !== 0 || (cn = { startX: S.pageX, left: E.scrollLeft, moved: !1 }, window.addEventListener("mousemove", yn), window.addEventListener("mouseup", gt, { once: !0 }));
  }
  function yn(S) {
    const E = v.querySelector(".wbStripScroll");
    if (!cn || !E) return;
    const F = S.pageX - cn.startX;
    !cn.moved && Math.abs(F) > 1 && (cn.moved = !0, E.classList.add("wbDragging")), E.scrollLeft = cn.left - F;
  }
  function gt() {
    var S;
    cn = null, window.removeEventListener("mousemove", yn), (S = v.querySelector(".wbStripScroll")) == null || S.classList.remove("wbDragging");
  }
  v.addEventListener("click", Pt), v.addEventListener("keydown", Ha), v.addEventListener("mousedown", Tt);
  const Nn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Mt(performance.now())) : null;
  Nn == null || Nn.observe(v);
  const zt = (Qn = window.matchMedia) == null ? void 0 : Qn.call(window, "(prefers-reduced-motion: reduce)"), Ho = () => {
    qt(), Mt(performance.now());
  };
  (Oa = zt == null ? void 0 : zt.addEventListener) == null || Oa.call(zt, "change", Ho);
  const Fa = [
    setInterval(() => {
      ae = /* @__PURE__ */ new Date(), Dn(!0);
    }, lp),
    setInterval(() => {
      A = /* @__PURE__ */ new Date(), Dn(!0);
    }, dp),
    setInterval(J, ip)
  ];
  return Dn(!0), qt(), {
    update() {
      Dn(!1);
    },
    setStyle(S) {
      !S || S === u || (u = S, Dn(!0), qt());
    },
    destroy() {
      var S;
      P = !0, Fa.forEach(clearInterval), X && cancelAnimationFrame(X), X = 0, Nn == null || Nn.disconnect(), (S = zt == null ? void 0 : zt.removeEventListener) == null || S.call(zt, "change", Ho), gt(), v.removeEventListener("click", Pt), v.removeEventListener("keydown", Ha), v.removeEventListener("mousedown", Tt), ["daily", "hourly"].forEach(Ce), v.remove();
    }
  };
}
const Sr = "#E1E1E1", Wd = "#F7F4F0", dl = "#03a9f4", bt = 14, yt = 172;
let Qp = 0;
const It = (n) => Math.round(n * 100) / 100, Ba = (n, s, o) => Math.max(s, Math.min(o, n)), ao = (n, s, o, u, m, f) => '<rect x="' + It(n) + '" y="' + It(s) + '" width="' + It(o) + '" height="' + It(u) + '" fill="' + m + '"' + (f != null ? ' opacity="' + f + '"' : "") + "/>", cl = (n) => n.map((s, o) => (o ? "L" : "M") + It(s[0]) + " " + It(s[1])).join("");
function ul(n) {
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
  let o = Ro[0], u = Ro[Ro.length - 1];
  for (let L = 0; L < Ro.length - 1; L++) if (s >= Ro[L][0] && s <= Ro[L + 1][0]) {
    o = Ro[L], u = Ro[L + 1];
    break;
  }
  const m = (s - o[0]) / (u[0] - o[0]), f = m * m * (3 - 2 * m), w = (L, v) => {
    const B = parseInt(L.slice(1), 16), se = parseInt(v.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((B >> ne & 255) + ((se >> ne & 255) - (B >> ne & 255)) * f).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], u[1][0]), bot: w(o[1][1], u[1][1]), warm: w(o[1][2], u[1][2]), cool: w(o[1][3], u[1][3]), op: o[1][4] + (u[1][4] - o[1][4]) * f, t: s };
}
function tm(n) {
  const s = parseInt(n.slice(1), 16), o = (s >> 16 & 255) / 255, u = (s >> 8 & 255) / 255, m = (s & 255) / 255, f = Math.max(o, u, m), w = Math.min(o, u, m);
  let L = 0, v = 0;
  const B = (f + w) / 2;
  if (f !== w) {
    const se = f - w;
    v = B > 0.5 ? se / (2 - f - w) : se / (f + w), L = (f === o ? (u - m) / se + (u < m ? 6 : 0) : f === u ? (m - o) / se + 2 : (o - u) / se + 4) / 6;
  }
  return [L * 360, v * 100, B * 100];
}
function Lc(n, s, o) {
  s = Ba(s, 0, 100) / 100, o = Ba(o, 0, 100) / 100;
  const u = (w) => (w + n / 30) % 12, m = s * Math.min(o, 1 - o), f = (w) => o - m * Math.max(-1, Math.min(u(w) - 3, Math.min(9 - u(w), 1)));
  return "#" + [f(0), f(8), f(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [_c, Ac, Ec] = tm(Sr), qd = Lc(_c, Ac, Math.max(6, Ec - 14)), nm = Lc(_c, Ac, Math.min(96, Ec + 16));
function am(n, s, o, u, m) {
  const f = yt / 2, w = yt * 0.12, L = f - (f - w) * n, v = (G) => G ** 1.3, B = Ba(o, -1.5, 1.5), se = (G) => -(Math.abs(B) * 4.6 * G ** 1.5) * Math.sign(B), ne = n * 1.4, N = (G, X) => {
    const z = Math.min(4.8, Math.abs(o) * 2.6) * (X ? 1 : -1) * Math.sign(o || 1), V = X ? G + L : G, $ = X ? G : G + L, O = (Se) => V + se(Se) + z * Math.sin(Se * Math.PI * 1.2 + u) * v(Se) * 1.4 + ne * Math.sin(Se * Math.PI * 2 + u * 0.6) * v(Se) * (X ? 1 : -1), Y = [[$, bt]];
    for (let Se = 0; Se <= 12; Se++) Y.push([O(Se / 12), bt + yt * Se / 12]);
    Y.push([$, bt + yt]);
    let ae = '<path d="' + cl(Y) + 'Z" fill="' + Sr + '"/>';
    if (m) return ae;
    const A = 1.35 + ((X ? o > 0 : o < 0) ? 0.35 : 0), q = (Se) => {
      const g = Se / 7, ke = X ? 1 - g : g, Ce = (1 - ke) ** 1.3, Oe = G + L * g;
      return Array.from({ length: 13 }, (b, C) => {
        const k = C / 12;
        return [Oe + se(k) * Ce + z * A * Math.sin(k * Math.PI * 1.2 + u - ke * 3.2) * v(k) * 1.4 * Ce + ne * 1.6 * Math.sin(k * Math.PI * 2 + u * 0.6 - ke * 2.5) * v(k) * n * (0.4 + 0.6 * Ce), bt + yt * k];
      });
    }, ge = [1, 2, 3, 4, 5, 6].map(q);
    for (let Se = 0; Se < 6; Se += 2) ae += '<path d="' + cl(ge[Se]) + cl(ge[Se + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ae;
  }, P = f - (f - w) * s;
  return { body: N(bt, !0) + N(bt + yt - L, !1), rails: [{ x: bt + P - 4, y: bt, w: 4, h: yt }, { x: bt + yt - P, y: bt, w: 4, h: yt }], head: 6.4 };
}
function om(n, s, o) {
  const u = yt * (1 - n);
  let m = "";
  if (u > 1 && (m += ao(bt, bt, yt, u, Sr), !o))
    for (let f = 1; f < 7; f += 2) m += ao(bt + yt * f / 7, bt, yt / 7, u, "#fff");
  return { body: m, rails: [{ x: bt, y: bt + yt * (1 - s) - 7, w: yt, h: 11 }], head: 10.4 };
}
function im(n, s, o, u) {
  const m = 9 - 7 * (o / 100), f = bt + yt * (1 - n), w = Math.ceil(yt / 10) + 1, L = bt + m / 2, v = (bt + yt - m / 2 - L) / (w - 1), B = 0.8, se = 0.6, ne = Array.from({ length: w }, (G, X) => Math.max(L + X * se, Math.min(L + X * v, f - m / 2 - (w - 1 - X) * se))), N = ne.slice(0, -1).map((G, X) => Ba((ne[X + 1] - G - se) / (v - se), 0, 1));
  N.push(N[w - 2]);
  let P = "";
  return ne.forEach((G, X) => {
    const z = B + (m - B) * N[X], V = Math.max(0.5, z / 2), $ = Math.max(0.4, z * 0.114);
    P += ao(bt, G - V, yt, Math.max(1, z), Sr), !u && z > 2.2 && (P += ao(bt, G + V - $, yt, $, qd) + ao(bt, G - V, yt, $ * 0.55, nm, 0.75));
  }), u || [0.22, 0.78].forEach((G) => {
    P += ao(bt + yt * G - 0.7, bt, 1.4, Math.max(0, ne[w - 1] + 1 - bt), qd, 0.85);
  }), { body: P, rails: [{ x: bt, y: bt + yt * (1 - s) - 8, w: yt, h: 8 }], head: 8.8 };
}
const Vd = (n, s, o, u, m, f, w) => n === "curtain" ? am(s, o, m, f, w) : n === "venetian" ? im(s, o, u, w) : om(s, o, w);
function rm(n, s) {
  let o = "", u = "";
  return s.forEach((m) => {
    const f = m.w > m.h, w = Ba(f ? bt + yt / 2 : m.x + m.w / 2, 17, 183), L = Ba(f ? m.y + m.h / 2 : bt + yt / 2, 17, 183);
    o += f ? ao(bt, Ba(m.y + m.h / 2, bt, bt + yt) - 1, yt, 2, dl) : ao(Ba(m.x + m.w / 2, bt, bt + yt) - 1, bt, 2, yt, dl);
    const v = f ? "M" + It(w - 4) + " " + It(L - 3) + "l4 -3l4 3M" + It(w - 4) + " " + It(L + 3) + "l4 3l4 -3" : "M" + It(w - 3) + " " + It(L - 4) + "l-3 4l3 4M" + It(w + 3) + " " + It(L - 4) + "l3 4l-3 4";
    u += '<circle cx="' + It(w) + '" cy="' + It(L) + '" r="11" fill="' + dl + '" filter="url(#' + n + 's)"/><path d="' + v + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: u };
}
function sm(n, s) {
  const o = /* @__PURE__ */ new Date(), u = em(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(u.t * 0.5), f = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, w = Vd(s.kind, s.pos / 100, s.bar / 100, s.tilt, s.vel, s.ph, !1), L = s.ghostAlpha > 4e-3 && s.ghost != null ? Vd(s.kind, s.ghost / 100, s.ghost / 100, s.tilt, 0, 0, !0).body : "", v = s.grip > 4e-3 ? rm(n, w.rails) : null, B = (se) => ao(bt, bt, yt, yt, se);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + It(m) + '%" cy="' + It(f) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + It(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + It(100 - m * 0.8) + '%" cy="' + It(100 - f * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + It(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Wd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (L ? '<g opacity="' + It(s.ghostAlpha) + '">' + L + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Sr + '" filter="url(#' + n + 's)"/></g>' + (v ? '<g clip-path="url(#' + n + 'c)" opacity="' + It(s.grip) + '">' + v.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Wd + '" stroke-width="3"/>' + (v ? '<g opacity="' + It(s.grip) + '">' + v.knobs + "</g>" : "") + "</svg>";
}
function lm({ onMove: n, onSet: s }) {
  var ae;
  const o = "cv" + ++Qp, u = document.createElement("div");
  u.className = "tfCoverArt";
  const m = (ae = window.matchMedia) == null ? void 0 : ae.call(window, "(pointer: coarse)").matches;
  let f = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, v = !1, B = !1, se = null, ne = 0, N = 0;
  const P = () => (f == null ? void 0 : f.kind) === "curtain" ? "x" : "y", G = () => se || v || B || f.moving || f.target != null ? 1 : m ? performance.now() < N ? 1 : 0.4 : 0, X = () => {
    u.innerHTML = sm(o, { kind: f.kind, pos: w.pos, bar: f.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function z(A) {
    L = 0;
    const q = w.last ? Math.min(0.064, (A - w.last) / 1e3) : 1 / 60, ge = q * 60;
    w.last = A;
    const Se = f.pos - w.pos, g = w.pos;
    w.pos += Math.sign(Se) * Math.min(Math.abs(Se), Math.max(10.5, Math.abs(Se) * 1.4) * q), Math.abs(f.pos - w.pos) < 0.03 && (w.pos = f.pos), w.vel = w.vel * 0.86 + (w.pos - g) / ge * 0.14, Math.abs(w.vel) < 0.015 && w.pos === f.pos && (w.vel = 0), (w.pos !== g || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * ge);
    const ke = f.tilt - w.tilt;
    w.tilt += Math.sign(ke) * Math.min(Math.abs(ke), Math.max(60, Math.abs(ke) * 4) * q);
    const Ce = G();
    w.grip += (Ce - w.grip) * Math.min(1, q * (Ce > w.grip ? 11 : 3.5)), Math.abs(Ce - w.grip) < 0.01 && (w.grip = Ce);
    const Oe = f.target != null && Math.abs(f.target - w.pos) > 0.5 ? 0.22 : 0;
    f.target != null && (w.gpos = f.target), w.ghost += (Oe - w.ghost) * Math.min(1, q * (Oe > w.ghost ? 16 : 3)), Math.abs(Oe - w.ghost) < 4e-3 && (w.ghost = Oe), X(), w.pos !== f.pos || w.vel || w.tilt !== f.tilt || w.grip !== Ce || w.ghost !== Oe ? L = requestAnimationFrame(z) : w.last = 0;
  }
  const V = () => {
    f && !L && (L = requestAnimationFrame(z));
  }, $ = setInterval(() => {
    f && !L && X();
  }, 60 * 1e3), O = (A) => {
    const q = u.getBoundingClientRect();
    return P() === "x" ? (A.clientX - q.left) / q.width : (A.clientY - q.top) / q.height;
  };
  u.addEventListener("pointerdown", (A) => {
    var Se;
    if (!(f != null && f.canSet) || A.button > 0) return;
    A.preventDefault(), (Se = u.setPointerCapture) == null || Se.call(u, A.pointerId);
    const q = f.target ?? f.pos, ge = u.getBoundingClientRect();
    se = { p0: O(A), from: q, x0: A.clientX, value: null, side: null }, f.kind === "curtain" && q > 0 && (se.side = (A.clientX - ge.left) / ge.width < 0.5 ? "L" : "R"), V();
  }), u.addEventListener("pointermove", (A) => {
    if (!se) return;
    let q;
    if (f.kind === "curtain") {
      if (!se.side) {
        const Se = A.clientX - se.x0;
        if (Math.abs(Se) < 4) return;
        se.side = Se < 0 ? "L" : "R";
      }
      const ge = (yt / 2 - yt * 0.12) / 200;
      q = se.from + (se.side === "L" ? -1 : 1) * ((O(A) - se.p0) / ge) * 100;
    } else q = se.from - (O(A) - se.p0) / (yt / 200) * 100;
    se.value = Ba(q, 0, 100), n(se.value);
  });
  const Y = () => {
    if (!se) return;
    const A = se.value;
    se = null, A != null && s(Math.round(A)), V();
  };
  return u.addEventListener("pointerup", Y), u.addEventListener("pointercancel", Y), u.addEventListener("lostpointercapture", Y), u.addEventListener("pointerenter", () => {
    v = !0, V();
  }), u.addEventListener("pointerleave", () => {
    v = !1, V();
  }), u.addEventListener("focus", () => {
    B = u.matches(":focus-visible"), V();
  }), u.addEventListener("blur", () => {
    B = !1, V();
  }), u.addEventListener("keydown", (A) => {
    if (!(f != null && f.canSet)) return;
    const q = Math.round(f.target ?? f.pos), ge = A.shiftKey ? 10 : 1, Se = { ArrowUp: q + ge, ArrowRight: q + ge, ArrowDown: q - ge, ArrowLeft: q - ge, PageUp: q + 25, PageDown: q - 25, Home: 0, End: 100 }[A.key];
    if (Se == null) return;
    A.preventDefault();
    const g = Ba(Se, 0, 100);
    n(g), clearTimeout(ne), ne = setTimeout(() => s(g), 500);
  }), {
    el: u,
    update(A) {
      const q = !f;
      f = A, q && (w.pos = f.pos, w.tilt = f.tilt, N = performance.now() + 1500, m && setTimeout(V, 1600)), u.classList.toggle("x", P() === "x"), u.classList.toggle("y", P() === "y"), f.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(f.target ?? f.pos))), u.setAttribute("aria-orientation", P() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", f.name + (f.canSet ? " position" : "")), u.setAttribute("aria-valuetext", f.text), V();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval($), clearTimeout(ne), u.remove();
    }
  };
}
const zd = "move-assistant-density", No = {
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
}, pe = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), pl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', dm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', cm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', fs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, jd = 1, um = 4, Gd = 16, Ud = 32, pm = 128, mm = 256, Yd = 16384, hm = 1, fm = 2, Zd = 4, gm = 8, vm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, bm = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ml = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Kd = "move_assistant_house", $d = "move-assistant-house-used", xm = ["switch", "fan", "input_boolean", "automation"], Jd = "move-assistant-house-look", ym = [["popup", "Popup"], ["sheet", "Sheet"]], km = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Mm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', ua = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((s) => '<path d="' + s + '"/>').join("") + "</svg>", Xd = ua(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Sm = ua(["M20 6L9 17L4 12"]), Ra = {
  temp: ua(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: ua(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: ua(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: ua(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: ua(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: ua(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: ua(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: ua(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: ua(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: ua(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Tm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lm = 1, _m = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Qd = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, hl = ["hs", "xy", "rgb", "rgbw", "rgbww"], fl = ["door", "window", "garage_door", "opening"], gs = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Am = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], ec = 10, Em = 20, Dm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rm = ["living room", "bedroom", "office"];
function Nm(n, { config: s, getHass: o }) {
  var Si, Ur, Ti;
  const u = (t) => n.getElementById(t), m = u("app"), w = String((s || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = No.get(zd) === "1", v = {};
  const B = (t) => {
    var i;
    return (i = o()) == null ? void 0 : i.callWS(t);
  }, se = (t, i, l) => B({ type: "call_service", domain: t, service: i, service_data: l }), ne = n.querySelector("#appearancePane .toggleList");
  ne && !u("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    L = !L, No.set(zd, L ? "1" : "0"), ae();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && ot(t).device_class === "power" && /^(W|kW)$/.test(ot(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], P = (t, i, l, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + i + '">' + d.map(([h, D]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + l + '="' + h + '">' + D + "</button>").join("") + "</div>", G = (t, i, l, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (i ? '<div class="status">' + i + "</div>" : "") + "</div>" + l + "</div>";
  function X() {
    var R, K, j;
    if (!w || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const i = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], l = (H, le) => '<div class="houseTab' + (H === "look" ? " active" : "") + '" data-house-pane="' + H + '"><section class="card">' + le + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([H, le]) => '<button class="tab segBtn' + (H === "look" ? " active" : "") + '" type="button" data-house-tab="' + H + '">' + le + "</button>").join("") + "</div>" + l("look", '<div class="toggleList" id="houseLook"></div>') + l("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + l("sources", '<div class="toggleList">' + N.map(([H, le, We]) => G(le, We, '<select class="settingsSelect" data-source="' + H + '" aria-label="' + le + '"></select>')).join("") + "</div>") + l("sums", '<div class="toggleList">' + Object.entries(ml).map(([H, le]) => G(le.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + H + '" aria-label="' + le.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = u("houseLook");
    [(R = t.querySelector(".themeBtn")) == null ? void 0 : R.closest(".toggleRow"), (K = u("densityToggle")) == null ? void 0 : K.closest(".toggleRow"), (j = u("moreInfoChoice")) == null ? void 0 : j.closest(".toggleRow")].forEach((H) => H && d.appendChild(H)), d.insertAdjacentHTML("beforeend", G("Lights", "How lights show on the house page.", P("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + G("Pad", "What the Dual Axis Controller’s pad sets on its tile.", P("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const h = u("housePane"), D = h.querySelector(".houseTabs"), x = D.querySelector(".rubberIndicator"), M = (H) => {
      const le = D.querySelector(".tab.active");
      x.style.transition = H ? "" : "none", x.style.left = le.offsetLeft + "px", x.style.width = le.offsetWidth + "px", H && (x.style.transform = "scaleX(1.08)", setTimeout(() => x.style.transform = "", 180));
    };
    new ResizeObserver(() => M(!1)).observe(D), h.addEventListener("click", (H) => {
      const le = H.target.closest("[data-house-tab]");
      if (le) {
        D.querySelectorAll(".tab").forEach((me) => me.classList.toggle("active", me === le)), h.querySelectorAll(".houseTab").forEach((me) => me.classList.toggle("active", me.dataset.housePane === le.dataset.houseTab)), le.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), M(!0);
        return;
      }
      const We = H.target.closest("[data-light-fav]");
      if (We) {
        di(We.dataset.lightFav);
        return;
      }
      const Fe = H.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Fe || Fe.disabled)) {
        if (Fe.dataset.lights && (wt.lights = Fe.dataset.lights), Fe.dataset.dacPad && (wt.dacPad = Fe.dataset.dacPad), (Fe.dataset.lights || Fe.dataset.dacPad) && (ma(), Kt.clear()), Fe.dataset.sumToggle) {
          const me = Fe.dataset.sumToggle, fe = new Set(T.hiddenSums || []);
          fe.has(me) ? fe.delete(me) : fe.add(me), T = { ...T, hiddenSums: [...fe] }, Dt();
        }
        Fn();
      }
    }), h.addEventListener("change", (H) => {
      const le = H.target;
      le.dataset.source && (T = { ...T, sources: { ...T.sources || {}, [le.dataset.source]: le.value || void 0 } }, Dt());
      const We = le.dataset.lightStyle || le.dataset.lightPad;
      if (We) {
        const Fe = le.dataset.lightStyle ? "lightStyles" : "lightPads", me = { ...wt[Fe] };
        le.value ? me[We] = le.value : delete me[We], wt[Fe] = me, ma(), [...Kt.keys()].filter((fe) => fe.endsWith(":" + We)).forEach((fe) => Kt.delete(fe));
      }
      Fn();
    });
  }
  function z() {
    var M;
    const t = u("housePane");
    if (!t) return;
    const i = !!customElements.get(on), l = i ? wt.lights : "tile";
    t.querySelectorAll("[data-lights]").forEach((R) => {
      R.setAttribute("aria-pressed", String(R.dataset.lights === l)), R.dataset.lights === "dac" && (R.disabled = !i);
    }), u("lightsRow").querySelector(".status").textContent = i ? "How lights show on the house page." : "Install the Dual Axis Controller from HACS to use it.", t.querySelectorAll("[data-dac-pad]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.dacPad === wt.dacPad))), u("dacPadRow").hidden = !i || !(wt.lights === "dac" || Object.values(wt.lightStyles).includes("dac"));
    for (const R of t.querySelectorAll("[data-source]")) {
      if (R === n.activeElement) continue;
      const [K] = N.find(([H]) => H === R.dataset.source), j = Object.keys(v).filter(N.find(([H]) => H === K)[3]).sort((H, le) => Pe(H).localeCompare(Pe(le)));
      R.dataset.sig !== j.join(",") && (R.innerHTML = '<option value="">Automatic</option>' + j.map((H) => '<option value="' + pe(H) + '">' + pe(Pe(H)) + "</option>").join(""), R.dataset.sig = j.join(",")), R.value = j.includes((M = T.sources) == null ? void 0 : M[K]) ? T.sources[K] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((R) => {
      const K = !(T.hiddenSums || []).includes(R.dataset.sumToggle);
      R.classList.toggle("on", K), R.setAttribute("aria-checked", String(K));
    });
    const d = u("lightRows");
    if (!d || d.contains(n.activeElement)) return;
    const h = new Set(qa()), D = (R, K, j, H) => '<option value="' + R + '"' + (R === j ? " selected" : "") + (H ? " disabled" : "") + ">" + K + "</option>", x = Object.keys(v).filter((R) => R.startsWith("light.")).sort((R, K) => !Be.get(R) - !Be.get(K) || (Be.get(R) || "").localeCompare(Be.get(K) || "") || Pe(R).localeCompare(Pe(K))).map((R) => {
      const K = wt.lightStyles[R] || "", j = wt.lightPads[R] || "", H = h.has(R), le = pe(Pe(R));
      return "<tr><td><strong>" + le + "</strong></td><td>" + pe(Be.get(R) || "—") + "</td><td>" + pe(Pt(R)) + '</td><td class="metaSwitchCol"><button class="switch' + (H ? " on" : "") + '" type="button" role="switch" aria-checked="' + H + '" data-light-fav="' + pe(R) + '" aria-label="' + le + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + pe(R) + '" aria-label="' + le + ' tile">' + D("", "Default", K) + D("tile", "HomeCore tile", K) + D("dac", "Dual Axis Controller", K, !i) + '</select></td><td><select class="settingsSelect" data-light-pad="' + pe(R) + '" aria-label="' + le + ' pad"' + (io(R) ? "" : " disabled") + ">" + D("", "Default", j) + D("temperature", "Temperature", j) + D("colour", "Colour", j) + "</select></td></tr>";
    }).join("");
    d.dataset.html !== x && (d.innerHTML = x, d.dataset.html = x);
  }
  const V = document.createElement("div");
  V.className = "densityBadge", V.setAttribute("aria-live", "polite"), V.hidden = !0, m.appendChild(V);
  let $ = 0;
  function O() {
    if (!L) return;
    const t = u("homeView"), i = (D) => D.offsetParent !== null && !D.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((D) => {
      i(D) && (D.dataset.h = Math.round(D.getBoundingClientRect().height) + " px");
    });
    const l = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(i), d = window.innerHeight, h = l.filter((D) => {
      const x = D.getBoundingClientRect();
      return x.height > 0 && x.top >= 0 && x.bottom <= d + 0.5;
    }).length;
    V.hidden = !t.classList.contains("active"), V.innerHTML = "<b>" + h + "</b><small>of " + l.length + " readings on screen</small>";
  }
  const Y = () => {
    L && requestAnimationFrame(O);
  };
  function ae() {
    var t;
    m.classList.toggle("showDensity", L), (t = u("densityToggle")) == null || t.classList.toggle("on", L), V.hidden = !L, clearInterval($), L && ($ = setInterval(O, 1e3), O());
  }
  window.addEventListener("scroll", Y, { capture: !0, passive: !0 }), window.addEventListener("resize", Y, { passive: !0 });
  const A = n.querySelector("#homeView .grid");
  let q = null, ge = null, Se = null, g = null;
  const ke = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let T = { favourites: null }, re = {}, J = {}, ee = [], oe = null;
  const de = (() => {
    try {
      return JSON.parse(No.get($d)) || {};
    } catch {
      return {};
    }
  })();
  let Be = /* @__PURE__ */ new Map(), et = 0;
  function Dt() {
    clearTimeout(et), et = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: Kd, value: T })).catch(() => {
    }), 400);
  }
  const wt = (() => {
    let t = {};
    try {
      t = JSON.parse(No.get(Jd)) || {};
    } catch {
    }
    const i = (l, d) => Object.fromEntries(Object.entries(l || {}).filter(([, h]) => d.includes(h)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: i(t.lightStyles, ["tile", "dac"]),
      lightPads: i(t.lightPads, ["temperature", "colour"])
    };
  })(), ma = () => No.set(Jd, JSON.stringify(wt)), ka = () => {
    m.dataset.more = wt.more, lr();
  };
  w && ne && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + ym.map(([t, i]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (wt.more === t) + '" data-more-style="' + t + '">' + i + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const i = t.target.closest("[data-more-style]");
    i && (wt.more = i.dataset.moreStyle, ma(), ka(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === i))));
  })), X();
  let Le = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const at = /* @__PURE__ */ new Map();
  let tn = "";
  const Pa = w ? Eu({ onChange: () => On() }) : null;
  w && m.classList.add("house");
  const Vt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let hn = null, ct = null, tt = !1;
  function dt(t) {
    const i = Wo();
    if (m.classList.toggle("houseBento", !!i), hn && (ct !== i || t == null) && (hn.destroy(), hn = null), !i || t == null) {
      Vt.remove();
      return;
    }
    Vt.isConnected || A.append(Vt), Vt.style.order = t, !hn && !tt && (hn = Od(Vt, { getHass: o, entityId: i, style: "bitmap" }), ct = i);
  }
  const Po = [["wx", ["current"]], ["avg", ["compared_to_average"]]], Ia = Object.fromEntries(Po.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let dn = null, xn = null;
  function ut(t) {
    const i = Wo();
    dn && xn !== i && (dn.forEach((l) => l.destroy()), dn = null), Object.values(Ia).forEach((l) => i ? !l.isConnected && A.append(l) : l.remove()), i && !dn && !tt && (dn = Po.map(([l, d]) => Od(Ia[l], { getHass: o, entityId: i, style: "bitmap", cards: d, onOpen: l === "wx" ? () => bo("weather") : void 0 })), xn = i);
  }
  const ot = (t) => {
    var i;
    return ((i = v[t]) == null ? void 0 : i.attributes) || {};
  }, Pe = (t) => ot(t).friendly_name || t, Ft = (t, i) => Fi(t) || (Number(ot(t).supported_features) & i) === i, kt = (t) => {
    const i = String(t ?? "").replace(/_/g, " ");
    return i.charAt(0).toUpperCase() + i.slice(1);
  }, mt = (t, i = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: i, maximumFractionDigits: i }), En = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ge = (t) => ot(t).supported_color_modes || [], Gi = (t) => {
    const i = t / 100;
    return [i <= 66 ? 255 : 329.7 * Math.pow(i - 60, -0.1332), i <= 66 ? 99.47 * Math.log(i) - 161.12 : 288.12 * Math.pow(i - 60, -0.0755), i >= 66 ? 255 : i <= 19 ? 0 : 138.52 * Math.log(i - 10) - 305.04];
  }, Io = (t, i) => [5, 3, 1].map((l) => {
    const d = (l + t / 60) % 6;
    return 255 * (1 - i / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function Dn(t) {
    const i = ot(t), l = (i.rgb_color || (i.hs_color && i.color_mode !== "color_temp" ? Io(...i.hs_color) : i.color_temp_kelvin ? Gi(i.color_temp_kelvin) : [255, 170, 0])).map((h) => Math.round(Math.max(0, Math.min(255, h)))), d = (0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]) / 255 > 0.8;
    return "--light:rgb(" + l.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Ae = (t) => {
    var i;
    return t.startsWith("light.") && ((i = v[t]) == null ? void 0 : i.state) === "on" ? ' data-light style="' + Dn(t) + '"' : "";
  }, ze = (t) => {
    const i = Ge(t);
    return i.length ? i.some((l) => l !== "onoff") : ot(t).brightness != null;
  }, jt = (t) => [ot(t).min_color_temp_kelvin || 2e3, ot(t).max_color_temp_kelvin || 6500], Rn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function fn(t) {
    const i = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (i < 10) return "Just now";
    if (i < 60) return i + " seconds ago";
    const l = Math.round(i / 60);
    if (l < 60) return l + (l === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(l / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const h = Math.round(d / 24);
    return h + (h === 1 ? " day ago" : " days ago");
  }
  const Mt = (t) => {
    var i;
    return ot(t).current_position ?? (((i = v[t]) == null ? void 0 : i.state) === "closed" ? 0 : 100);
  }, Xn = (t) => {
    var i;
    return un("pos", t, ((i = b.get(t)) == null ? void 0 : i.pos) ?? Mt(t));
  }, qt = (t) => {
    var i;
    return un("tilt", t, ((i = b.get(t)) == null ? void 0 : i.tilt) ?? ot(t).current_tilt_position);
  };
  function Pt(t) {
    var x;
    const i = v[t];
    if (!i) return "Not found";
    if (i.state === "unavailable") return "Unavailable";
    const l = i.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (i.state !== "on") return "Off";
      const M = l.color_temp_kelvin;
      return (ze(t) ? En(i) + "%" : "On") + (l.color_mode === "color_temp" && M ? " · " + Number(M).toLocaleString() + "k" : hl.includes(l.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (i.state === "off" ? "Off" : kt(l.hvac_action || i.state)) + " · " + mt(l.current_temperature) + " °C now";
    if (d === "cover") {
      const M = Mt(t), R = l.current_tilt_position;
      return i.state === "opening" || i.state === "closing" ? kt(i.state) + " - " + M + "%" : (M <= 0 ? "Closed" : M >= 100 ? "Open" : "Partially open") + (R > 0 && R < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return i.state !== "on" ? "Off" : kt(l.action || "on") + " · " + l.current_humidity + "% now";
    if (d === "vacuum") return kt(i.state) + (i.state === "cleaning" && ((x = l.rooms) != null && x.length) ? " · " + l.rooms.join(", ") : "") + (l.battery_level != null ? " · " + l.battery_level + "%" : "");
    if (d === "media_player") return i.state === "playing" || i.state === "paused" ? (i.state === "paused" ? "Paused · " : "") + (l.media_title || "Playing") : kt(i.state);
    if (d === "alarm_control_panel") return Qd[i.state] || kt(i.state);
    if (d === "lock" || d === "valve") return kt(i.state);
    if (d === "switch") return i.state === "on" ? "On" : "Off";
    if (d === "plant") return i.state === "ok" ? "Healthy" : kt(l.problem);
    if (d === "binary_sensor")
      return l.device_class === "moisture" ? i.state === "on" ? "Wet" : "Dry" : fl.includes(l.device_class) ? i.state === "on" ? "Open" : "Closed" : i.state === "on" ? "Detected" : "Clear";
    if (l.rang) return "Rang at " + Rn(l.rang);
    const h = o();
    if (h != null && h.formatEntityState && !Fi(t))
      try {
        return h.formatEntityState(i);
      } catch {
      }
    const D = Number(i.state);
    if (i.state !== "" && Number.isFinite(D)) {
      const M = Math.abs(D) >= 100 ? 0 : Math.abs(D) >= 10 ? 1 : 2, R = l.unit_of_measurement ? l.unit_of_measurement === "%" ? "%" : " " + l.unit_of_measurement : "";
      return D.toLocaleString(void 0, { maximumFractionDigits: M }) + R + (l.plant_low ? " · Low" : l.plant_high ? " · High" : "");
    }
    return kt(i.state);
  }
  const Ha = (t) => t >= 1e3 ? mt(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function cn(t) {
    const i = o();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var D;
      const d = v[l.dataset.iconFor], h = l.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !h) {
        let x = l.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (l.textContent = "", x = document.createElement("ha-state-icon"), l.appendChild(x)), x.hass = i, x.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let x = l.firstElementChild;
        (!x || x.localName !== "ha-icon") && (l.textContent = "", x = document.createElement("ha-icon"), l.appendChild(x)), x.icon = h || ((D = d == null ? void 0 : d.attributes) == null ? void 0 : D.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || Pe(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Tt = (t, i, l) => ' data-icon-for="' + pe(t) + '"' + (i ? ' data-icon-name="' + pe(i) + '"' : "") + (l ? ' data-letter="' + pe(l) + '"' : ""), yn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : ot(t).rang ? "mdi:doorbell" : "", gt = (t, i, l, d) => pe([t, i, l, d ? JSON.stringify(d) : ""].join("|")), Nn = (t) => pe(JSON.stringify(t));
  function zt(t, i) {
    var h, D;
    const l = pe(Pe(i) + ", " + Pt(i));
    return '<div class="activityRow' + (Number.isFinite(Number((h = v[i]) == null ? void 0 : h.state)) && ((D = v[i]) == null ? void 0 : D.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + pe(t + "|" + i) + '" aria-label="' + l + '. Show the last 24 hours"' : '" aria-label="' + l + '"') + '><div class="tfIcon" aria-hidden="true"' + Tt(i, yn(i)) + '></div><div><div class="activityRowName">' + pe(Pe(i)) + '</div><div class="activityRowMeta">' + pe(Pt(i)) + "</div></div></div>";
  }
  const Ho = (t, i, l) => '<div class="activityRow" aria-label="' + pe(t + ", " + i) + '"><div class="tfIcon" aria-hidden="true"' + Tt("", l, t) + '></div><div><div class="activityRowName">' + pe(t) + '</div><div class="activityRowMeta">' + pe(i) + "</div></div></div>";
  function Fa(t) {
    var l;
    const i = ((l = v[t]) == null ? void 0 : l.state) === "on";
    return '<div class="activityRow tfPlug' + (i ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + gt("switch", "toggle", t) + '" aria-label="Turn ' + pe(Pe(t)) + (i ? " off" : " on") + '"' + Tt(t) + '></button><div><div class="activityRowName">' + pe(Pe(t)) + '</div><div class="activityRowMeta">' + pe(Pt(t)) + "</div></div></div>";
  }
  const Qn = (t) => {
    var i;
    return ((i = Ce.get(t)) == null ? void 0 : i.name) ?? Pe(t);
  }, Oa = (t) => {
    var i;
    return ((i = Ce.get(t)) == null ? void 0 : i.text) ?? Pt(t);
  };
  function S(t) {
    var l;
    const i = (l = Ce.get(t)) == null ? void 0 : l.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (i ? Tt("", i, Qn(t)) : Tt(t, yn(t))) + '></div><div><div class="activityRowName">' + pe(Qn(t)) + '</div><div class="activityRowMeta">' + pe(Oa(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + pe(Qn(t)) + '’s last 24 hours">' + pl + '</button></div><svg class="tfGraph" data-graph="' + pe(t) + '" role="img" aria-label="' + pe(Qn(t)) + ', last 24 hours"></svg></div>';
  }
  function E(t, i, l, d, h = "", D = null, x = "") {
    const M = q && q.key === t;
    return '<section class="card tfCard' + (x ? " " + x : "") + (M ? " open" : "") + '" data-tf data-k="' + pe(t) + '" style="order:' + i + (M && q.h ? ";min-height:" + q.h + "px" : "") + '" aria-label="' + pe(l) + '"><div class="activityHeader">' + (D ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + pe(D) + '" aria-label="' + pe(l + ", " + Pt(D) + ". More info") + '">' + pe(l) + "</button>" : '<div class="activityTitle">' + pe(l) + "</div>") + "</div>" + (M ? S(q.id) : '<div class="activityRows">' + d.join("") + "</div>" + h) + "</section>";
  }
  function F(t, i) {
    const l = "readings:" + t.id, d = t.readings.map((h) => zt(l, h));
    return t.power != null && d.push(Ho("Power now", Ha(t.power), "mdi:flash")), E(l, i, "Readings", d.concat(t.plugs.map(Fa)));
  }
  function W(t, i) {
    var M;
    const l = "energy:" + t.id, [d, h] = [t.solar.find((R) => R.endsWith("_power")), t.solar.find((R) => R.endsWith("_today"))], D = [d, h].filter(Boolean).map((R) => zt(l, R)), x = Number(((M = v[d]) == null ? void 0 : M.state) || 0) * 1e3;
    return Le.grid && (D.push(zt(l, Le.grid)), D.push(Ho("House use", Ha(x + Number(v[Le.grid].state)), "mdi:home-lightning-bolt"))), E(l, i, "Energy", D, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ue = (t, i) => E("plant:" + t.id, i, Pe(t.id), t.readings.map((l) => zt("plant:" + t.id, l)), "", t.id), be = (t) => E("openings", t, "Doors and windows", Le.security.openings.map((i) => zt("openings", i)));
  function he(t, i, l, d, h, D, x = null) {
    const M = l == null ? null : Math.max(0, Math.min(1, l)), R = M == null ? 0 : Math.round(M * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + pe(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + R + '"' + (h ? ' aria-valuetext="' + pe(h) + '"' : "") + ' data-drag="' + pe(t + "|" + i) + '">' + (x != null ? '<span class="was" aria-hidden="true" style="left:' + x + '%"></span>' : "") + (D ? M == null ? "" : '<b style="left:' + R + '%"></b>' : '<i style="width:' + R + '%"></i>') + "</div>";
  }
  const xe = "move-assistant-house-last-bright", ce = (() => {
    try {
      return JSON.parse(No.get(xe)) || {};
    } catch {
      return {};
    }
  })();
  let Ee = 0;
  const je = (t, i) => {
    !i || ce[t] === i || (ce[t] = i, clearTimeout(Ee), Ee = setTimeout(() => No.set(xe, JSON.stringify(ce)), 500));
  }, Ye = (t, i, l, d) => '<div class="tfStep" role="group" aria-label="' + pe(t) + '"><button type="button" data-act="' + l + '" aria-label="Lower ' + pe(t.toLowerCase()) + '">−</button><output>' + pe(i) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + pe(t.toLowerCase()) + '">+</button></div>', qe = (t, i, l) => '<div class="' + t + '" role="group" aria-label="' + pe(i) + '">' + l.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + pe(d.aria) + '"' : "") + ">" + (d.html || pe(d.label)) + "</button>").join("") + "</div>", De = (t, i) => "width:" + Math.round(Math.max(0, Math.min(1, (t - i * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * i / 3).toFixed(2), Ie = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", Ne = (t, i) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + pe(Pe(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-blocks="' + pe(t) + '">' + [0, 1, 2, 3].map((l) => '<span><i style="' + De(i, l) + '"></i><b' + (i >= (l + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (l + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Ie(i) + '">' + Math.round(i) + "%</output></div>";
  function Xe(t, i) {
    t.querySelectorAll(":scope>span").forEach((d, h) => {
      d.firstElementChild.setAttribute("style", De(i, h)), d.lastElementChild.classList.toggle("lit", i >= (h + 1) * 25 - 12);
    });
    const l = t.querySelector(".tfTip");
    l.setAttribute("style", Ie(i)), l.textContent = Math.round(i) + "%", t.setAttribute("aria-valuenow", String(Math.round(i))), t.setAttribute("aria-valuetext", Math.round(i) + "% open");
  }
  const pt = (t, i) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + pe(Pe(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-drag="tilt|' + pe(t) + '"><i style="width:calc((100% - 6px) * ' + i / 100 + ')"></i><span' + (i > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (i > 92 ? ' class="lit"' : "") + ">Open</span></div>", _t = (t, i, l) => '<div class="tfCoverBtns" role="group" aria-label="' + pe(Pe(t)) + '">' + [
    Ft(t, hm) && ["open", "Open", "open_cover", i >= 100 && !l],
    Ft(t, gm) && ["stop", "Stop", "stop_cover", !1],
    Ft(t, fm) && ["close", "Close", "close_cover", i <= 0 && !l]
  ].filter(Boolean).map(([d, h, D, x]) => '<button type="button" data-act="' + gt("cover", D, t) + '" aria-label="' + h + '"' + (x ? " disabled" : "") + ">" + vm[d] + "</button>").join("") + "</div>", vt = (t, i) => '<button class="tfIcon' + (i.art ? " art" : "") + '" type="button" data-act="' + i.button.act + '" aria-label="' + pe(i.button.label) + '"' + (i.art ? ' style="background-image:url(&quot;' + pe(i.art) + '&quot;)"' : Tt(t, i.icon)) + "></button>", Gt = (t) => '<button class="tfName" type="button" data-more="' + pe(t) + '" aria-label="' + pe(Pe(t) + ", " + Pt(t) + ". More info") + '"><span class="activityRowName">' + pe(Pe(t)) + '</span><span class="activityRowMeta">' + pe(Pt(t)) + "</span></button>";
  function nn(t, i = !1, l = null) {
    if (t.startsWith("light.") && io(t)) return '<div class="tfDac" data-k="' + pe(t) + '" data-dac="' + (i ? "more:" : l ? "dash:" : "tile:") + pe(t) + '"></div>';
    const d = kn(t), h = l || (i && t.startsWith("light.") ? ["bright"] : null), D = d.sections.map((x, M) => x && (!h || h.includes((d.parts || [])[M])) ? x : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + pe(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Ae(t) + '><div class="tfActionHead">' + vt(t, d) + Gt(t) + "</div>" + D.join("") + "</div>";
  }
  const on = "dual-controller-v3", Kt = /* @__PURE__ */ new Map();
  function io(t) {
    return (wt.lightStyles[t] || wt.lights) === "dac" && !!customElements.get(on);
  }
  const zn = (t) => wt.lightPads[t] || wt.dacPad, ro = () => {
    const t = o();
    return t && { ...t, themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") } };
  }, so = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}";
  function jn(t) {
    t.querySelectorAll("[data-dac]").forEach((i) => {
      const l = i.dataset.dac, d = l.startsWith("dash:");
      let h = Kt.get(l);
      if (!h) {
        const D = l.slice(l.indexOf(":") + 1);
        h = document.createElement(on), h.setConfig({ type: "custom:" + on, entity: D, pad: zn(D), ...d ? { tap_action: { action: "none" } } : {} }), Kt.set(l, h);
      }
      h.hass = ro(), d && h.shadowRoot && !h.shadowRoot.querySelector("style[data-tf-fit]") && (h.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: so })).dataset.tfFit = ""), h.parentNode !== i && i.replaceChildren(h);
    });
  }
  function ht() {
    const t = ro();
    Kt.forEach((i, l) => {
      i.isConnected ? i.hass = t : Kt.delete(l);
    });
  }
  customElements.whenDefined(on).then(() => {
    w && (A != null && A.querySelector("[data-tf]")) && Za(Fn);
  });
  const un = (t, i, l) => Oe.has(t + "|" + i) ? Oe.get(t + "|" + i) : l;
  function kn(t) {
    var D;
    const i = v[t], l = i.attributes, d = t.split(".")[0], h = (x, M) => ({ act: gt(x, "toggle", t), label: M });
    if (d === "light") {
      const x = i.state === "on", M = Ge(t), [R, K] = jt(t), j = un("bright", t, En(i));
      x && je(t, En(i));
      const H = un("ct", t, x && l.color_mode === "color_temp" ? l.color_temp_kelvin : null), le = un("hue", t, x && hl.includes(l.color_mode) && l.hs_color ? l.hs_color[0] : null);
      return { on: x, button: h("light", "Turn " + Pe(t) + (x ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ze(t) && he("bright", t, j / 100, Pe(t) + " brightness", j + "%", !1, x ? null : ce[t] ?? null),
        M.includes("color_temp") && he("ct", t, H == null ? null : (H - R) / (K - R), Pe(t) + " warm to cool", H == null ? "" : Math.round(H) + " kelvin", !0),
        M.some((We) => hl.includes(We)) && he("hue", t, le == null ? null : le / 360, Pe(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const x = l.target_temp_step || 0.5, M = Number(l.temperature);
      return { on: i.state !== "off", tone: i.state === "cool" || l.hvac_action === "cooling" ? "cool" : "heat", button: h("climate", "Turn " + Pe(t) + (i.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(M) && Ye("Target temperature", mt(M) + " °C", gt("climate", "set_temperature", t, { temperature: M - x }), gt("climate", "set_temperature", t, { temperature: M + x })),
        qe("tfSeg", "Mode", (l.hvac_modes || []).map((R) => ({ label: kt(R), act: gt("climate", "set_hvac_mode", t, { hvac_mode: R }), pressed: i.state === R })))
      ] };
    }
    if (d === "cover") {
      const x = i.state === "opening" || i.state === "closing", M = i.state === "closed", R = Xn(t), K = qt(t);
      return { on: !M, tone: "blue", icon: bm[ul(i)][M ? 1 : 0], button: h("cover", (M ? "Open " : "Close ") + Pe(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ft(t, Zd) && Ne(t, R),
        K != null && pt(t, K),
        _t(t, R, x)
      ] };
    }
    if (d === "humidifier") {
      const x = Number(l.humidity);
      return { on: i.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: h("humidifier", "Turn " + Pe(t) + (i.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(x) && Ye("Target humidity", x + "%", gt("humidifier", "set_humidity", t, { humidity: x - 1 }), gt("humidifier", "set_humidity", t, { humidity: x + 1 })),
        ((D = l.available_modes) == null ? void 0 : D.length) && qe("tfSeg", "Mode", l.available_modes.map((M) => ({ label: kt(M), act: gt("humidifier", "set_mode", t, { mode: M }), pressed: l.mode === M })))
      ] };
    }
    if (d === "media_player") {
      const x = i.state === "playing", M = i.state === "off" || i.state === "standby", R = un("vol", t, l.volume_level), K = M ? { act: gt("media_player", Ft(t, pm) ? "turn_on" : "toggle", t), label: "Turn " + Pe(t) + " on" } : i.state === "playing" || i.state === "paused" ? { act: gt("media_player", "media_play_pause", t), label: (x ? "Pause " : "Play ") + Pe(t) } : { act: gt("media_player", Ft(t, mm) ? "turn_off" : "toggle", t), label: "Turn " + Pe(t) + " off" };
      return { on: !M, tone: "blue", art: !M && l.entity_picture ? l.entity_picture : null, button: K, parts: ["playback", "volume"], sections: M ? [] : [
        (Ft(t, Gd) || Ft(t, Ud) || Ft(t, jd) || Ft(t, Yd)) && qe("tfSeg", "Playback", [
          { html: fs.prev, aria: "Previous", act: gt("media_player", "media_previous_track", t), disabled: !Ft(t, Gd) },
          { html: x ? fs.pause : fs.play, aria: x ? "Pause" : "Play", act: gt("media_player", "media_play_pause", t), disabled: !(Ft(t, jd) || Ft(t, Yd)) },
          { html: fs.next, aria: "Next", act: gt("media_player", "media_next_track", t), disabled: !Ft(t, Ud) }
        ]),
        Ft(t, um) && R != null && he("vol", t, R, Pe(t) + " volume", Math.round(R * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const x = i.state === "cleaning", M = l.rooms || [], R = (j) => M.includes(j) ? M.filter((H) => H !== j) : M.concat(j), K = gt("vacuum", x ? "pause" : "start", t, Fi(t) ? { rooms: M } : null);
      return { on: x || i.state === "returning", tone: "blue", button: { act: K, label: (x ? "Pause " : "Start ") + Pe(t) }, parts: ["controls", "rooms"], sections: [
        qe("tfSeg", Pe(t), [
          { label: x ? "Pause" : "Start", act: K },
          { label: "Dock", act: gt("vacuum", "return_to_base", t), disabled: i.state === "docked" },
          { label: "Locate", act: gt("vacuum", "locate", t) }
        ]),
        Fi(t) && qe("tfChips", "Rooms to clean", Le.rooms.filter((j) => j.id !== "balcony").map((j) => ({ label: j.name, act: gt("vacuum", "set_rooms", t, { rooms: R(j.name) }), pressed: M.includes(j.name) })))
      ] };
    }
    if (d === "lock") {
      const x = i.state === "locked";
      return { on: !x, tone: "heat", button: { act: gt("lock", x ? "unlock" : "lock", t), label: (x ? "Unlock " : "Lock ") + Pe(t) }, parts: ["controls"], sections: [
        qe("tfSeg", Pe(t), [
          { label: "Lock", act: gt("lock", "lock", t), pressed: x },
          { label: "Unlock", act: gt("lock", "unlock", t), pressed: i.state === "unlocked" },
          Ft(t, Lm) && { label: "Open", act: gt("lock", "open", t), pressed: i.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const x = i.state === "disarmed";
      return { on: !x, tone: i.state === "triggered" ? "alarm" : "blue", button: { act: gt("alarm_control_panel", x ? "alarm_arm_away" : "alarm_disarm", t), label: x ? "Arm " + Pe(t) + ", away" : "Disarm " + Pe(t) }, parts: ["controls"], sections: [
        qe("tfSeg", Pe(t), _m.filter(([, , , M]) => !M || Ft(t, M)).map(([M, R, K]) => ({ label: R, act: gt("alarm_control_panel", K, t), pressed: i.state === M })))
      ] };
    }
    if (d === "valve") {
      const x = i.state === "open";
      return { on: x, tone: "blue", icon: "mdi:sprinkler-variant", button: h("valve", (x ? "Close " : "Open ") + Pe(t)), parts: ["controls"], sections: [
        qe("tfSeg", Pe(t), [
          { label: "Open", act: gt("valve", "open_valve", t), pressed: x },
          { label: "Close", act: gt("valve", "close_valve", t), pressed: !x }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Pe(t) }, sections: [] };
  }
  const gn = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : mt(t)) + "°";
  function ea(t) {
    const i = (fe) => t.readings.find((ie) => ot(ie).device_class === fe), l = i("temperature"), d = i("humidity"), h = (fe) => {
      var ie;
      return Number((ie = v[fe]) == null ? void 0 : ie.state);
    }, D = (fe) => t.actions.filter((ie) => fe.test(ie)), x = t.lights.filter((fe) => {
      var ie;
      return ((ie = v[fe]) == null ? void 0 : ie.state) === "on";
    }), M = D(/^cover\./), R = M.filter((fe) => {
      var ie;
      return ((ie = v[fe]) == null ? void 0 : ie.state) !== "closed";
    }), K = [...new Set(M.map((fe) => ul(v[fe])))], j = D(/^climate\./)[0], H = D(/^humidifier\./)[0], le = D(/^media_player\./), We = le.find((fe) => {
      var ie;
      return ((ie = v[fe]) == null ? void 0 : ie.state) === "playing";
    }) || le.find((fe) => {
      var ie;
      return ((ie = v[fe]) == null ? void 0 : ie.state) === "paused";
    }), Fe = t.plugs.filter((fe) => {
      var ie;
      return ((ie = v[fe]) == null ? void 0 : ie.state) === "on";
    }), me = [];
    if (l && Number.isFinite(h(l)) && me.push({ key: "temp", id: l, kind: "reading", icon: Ra.temp, label: "Temperature", value: mt(h(l)) + "°" }), d && Number.isFinite(h(d)) && me.push({ key: "hum", id: d, kind: "reading", icon: Ra.hum, label: "Humidity", value: Math.round(h(d)) + "%" }), t.lights.length && me.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Ra.lights,
      label: "Lights",
      value: x.length ? x.length + " of " + t.lights.length + " on" : "All off",
      short: x.length ? x.length + " on" : "Off",
      on: x.length > 0,
      light: x.length ? Dn(x[0]) : "",
      acts: t.lights.map((fe) => ["light", x.length ? "turn_off" : "turn_on", fe]),
      aria: (x.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), M.length) {
      const fe = K.length === 1 ? wm[K[0]] : "covers", ie = Math.round(M.reduce((st, Ut) => st + Mt(Ut), 0) / M.length);
      me.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Ra.covers,
        label: kt(fe),
        value: ie <= 0 ? "Closed" : ie >= 100 ? "Open" : ie + "% open",
        short: ie <= 0 ? "Closed" : ie + "%",
        on: R.length > 0,
        acts: M.map((st) => ["cover", R.length ? "close_cover" : "open_cover", st]),
        aria: (R.length ? "Close the " : "Open the ") + fe + " in " + t.name
      });
    }
    if (j) {
      const fe = ot(j), ie = v[j].state === "off";
      me.push({
        key: "climate",
        kind: "control",
        tone: fe.hvac_action === "cooling" ? "cool" : "heat",
        icon: Ra.climate,
        label: Pe(j),
        value: ie ? "Off" : kt(fe.hvac_action || v[j].state) + " · " + gn(fe.temperature),
        short: ie ? "Off" : gn(fe.temperature),
        on: !ie,
        acts: [["climate", "toggle", j]],
        aria: "Turn " + Pe(j) + (ie ? " on" : " off")
      });
    }
    if (H) {
      const fe = v[H].state === "on";
      me.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Ra.humidifier,
        label: Pe(H),
        value: fe ? "On · " + ot(H).humidity + "%" : "Off",
        short: fe ? ot(H).humidity + "%" : "Off",
        on: fe,
        acts: [["humidifier", "toggle", H]],
        aria: "Turn " + Pe(H) + (fe ? " off" : " on")
      });
    }
    if (le.length) {
      const fe = We || le[0], ie = v[fe], st = ie.state === "playing";
      me.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Ra.media,
        label: Pe(fe),
        value: Pt(fe),
        short: st ? "Playing" : ie.state === "paused" ? "Paused" : kt(ie.state),
        on: st,
        acts: [["media_player", ie.state === "playing" || ie.state === "paused" ? "media_play_pause" : "toggle", fe]],
        aria: (st ? "Pause " : "Play ") + Pe(fe)
      });
    }
    return t.plugs.length && me.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Ra.plugs,
      label: "Plugs",
      value: Fe.length ? Fe.length + " of " + t.plugs.length + " on" : "All off",
      short: Fe.length ? Fe.length + " on" : "Off",
      on: Fe.length > 0,
      acts: t.plugs.map((fe) => ["switch", Fe.length ? "turn_off" : "turn_on", fe]),
      aria: (Fe.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((fe) => me.push(ot(fe).device_class === "moisture" ? { key: "alert:" + fe, kind: "alert", icon: Ra.alert, label: "Water leak" } : { key: "note:" + fe, kind: "note", icon: Ra.door, label: Pe(fe) + " " + Pt(fe).toLowerCase() })), me;
  }
  const lo = (t, i) => {
    const l = (d) => t.actions.filter((h) => d.test(h));
    return {
      lights: t.lights,
      covers: l(/^cover\./),
      climate: l(/^climate\./).slice(0, 1),
      humidifier: l(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = l(/^media_player\./);
        return [d.find((h) => {
          var D;
          return ((D = v[h]) == null ? void 0 : D.state) === "playing";
        }) || d.find((h) => {
          var D;
          return ((D = v[h]) == null ? void 0 : D.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[i] || [];
  }, ha = (t, i, l) => '<button class="' + i + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Nn(t.acts) + '" aria-label="' + pe(t.aria) + '" aria-pressed="' + t.on + '">' + l + "</button>", rn = (t) => '<button class="pill" type="button" data-go="' + pe(t.id) + '" aria-label="Go to ' + pe(t.name) + '">Go</button>', Rt = (t) => t.filter((i) => i.kind === "alert" || i.kind === "note").map((i) => '<span class="sourceTag">' + pe(i.label) + "</span>").join(" "), si = (t) => t.readings.find((i) => ot(i).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((i) => v[i]) || null, pn = (t, i) => {
    const l = Pe(i);
    return l.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? kt(l.slice(t.name.length + 1)) : l;
  };
  function Ui(t) {
    const i = v[t], l = ot(t), d = t.split(".")[0], h = Number(i.state);
    if (i.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(h)) {
      if (l.device_class === "temperature") return { text: gn(h) };
      const D = l.unit_of_measurement || "";
      return D === "%" ? { text: Math.round(h) + "%" } : { text: mt(h, Number.isInteger(h) ? 0 : 1), unit: D };
    }
    if (d === "climate" && (l.current_temperature ?? l.temperature) != null) return { text: gn(l.current_temperature ?? l.temperature) };
    if (d === "light") return { text: i.state !== "on" ? "Off" : ze(t) ? En(i) + "%" : "On" };
    if (d === "cover") {
      const D = Mt(t);
      return { text: D <= 0 ? "Closed" : D >= 100 ? "Open" : D + "%" };
    }
    return d === "humidifier" ? { text: i.state === "on" ? l.humidity + "%" : "Off" } : d === "media_player" ? { text: i.state === "playing" ? "Playing" : i.state === "paused" ? "Paused" : kt(i.state) } : { text: Pt(t) };
  }
  const Ss = (t, i, l) => {
    const d = l.find((M) => M.key === "temp"), h = l.find((M) => M.key === "hum"), D = ot(i), x = v[i].state === "off";
    return i.startsWith("climate.") ? [pn(t, i), x ? "Off" : kt(D.hvac_action || v[i].state) + (D.temperature != null ? " · " + gn(D.temperature) : ""), h && h.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === i) && pn(t, i), d && d.id !== i && d.value, h && h.id !== i && h.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Tr(t, i, l) {
    const d = l && Ui(l), h = l ? Ss(t, l, i) : "", D = (M) => {
      const R = lo(t, M.key);
      return R.length === 1 ? R[0] : "group:" + t.id + ":" + M.key;
    }, x = i.filter((M) => M.kind === "control").slice(0, 4).map((M) => '<div class="tfATile' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + (M.light ? ' data-light style="' + M.light + '"' : "") + ">" + ha(M, "tfIcon", M.icon) + '<button class="tfName" type="button" data-more="' + pe(D(M)) + '" aria-label="' + pe(t.name + " " + M.label.toLowerCase() + ", " + M.value + ". Open") + '"><span class="activityRowName">' + pe(M.label) + '</span><span class="activityRowMeta">' + pe(M.value) + "</span></button></div>");
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + pe(t.name) + "</div>" + Rt(i) + "</div>" + rn(t) + "</div>" + (l ? '<button class="tfABig" type="button" data-more="' + pe(l) + '" aria-label="' + pe(Pe(l) + ", " + Pt(l) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + pe(d.text) + (d.unit ? '<span class="tfABigUnit">' + pe(d.unit) + "</span>" : "") + "</span>" + (h ? '<span class="tfABigSub">' + pe(h) + "</span>" : "") + "</button>" : "") + (x.length ? '<div class="tfATiles">' + x.join("") + "</div>" : "");
  }
  function li(t) {
    const i = t.id === ge, l = ea(t), d = si(t), h = d && Ui(d), D = [...l.filter((x) => x.kind === "control"), ...l.filter((x) => x.kind !== "control" && x.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (i ? " active" : "") + '" data-area="' + pe(t.id) + '" tabindex="0" aria-expanded="' + i + '" aria-label="' + pe(t.name) + '"><div class="panelExpanded"' + (i ? "" : " inert") + ">" + Tr(t, l, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop"><span class="tfACMain">' + (h ? pe(h.text + (h.unit ? " " + h.unit : "")) : "") + '</span><span class="tfACName">' + pe(t.name) + '</span></div><span class="tfACTiles" aria-hidden="true">' + D.map((x) => '<span class="tfACTile"><span class="tfIcon' + (x.kind === "alert" ? " alert" : "") + '"' + (x.on && x.light ? ' data-light style="' + x.light + '"' : "") + ">" + x.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Wa = [];
  const Lr = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Wa.map(li).join("") + "</section></div>", Yi = () => [
    { key: "home", name: "Home", ids: Le.homeVacuums },
    { key: "security", name: "Security", ids: [...Le.security.alarms, ...Le.security.locks] },
    ...Le.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Fo = (t, i, l) => t + " " + (t === 1 ? i : l), qa = () => (T.favourites ?? re.favorite_entities ?? []).filter((t) => v[t]);
  function Ts(t = 8) {
    const i = qa();
    if (re.hide_suggested_entities) return i;
    if (!oe) {
      const d = Object.entries(de).sort((D, x) => x[1] - D[1]).map(([D]) => D), h = Le.rooms.flatMap((D) => D.actions);
      oe = [.../* @__PURE__ */ new Set([...ee, ...d, ...h.filter((D) => kn(D).on), ...h])];
    }
    const l = (d) => v[d] && v[d].state !== "unavailable" && !i.includes(d);
    return [...i, ...oe.filter(l)].slice(0, Math.max(t, i.length));
  }
  const Ls = (t) => {
    const i = qa().includes(t);
    return '<button class="tfStar" type="button" data-star="' + pe(t) + '" aria-pressed="' + i + '" aria-label="Favourite: ' + pe(Pe(t)) + '">' + Tm(i) + "</button>";
  };
  function Oo(t, { area: i = !1, star: l = !1 } = {}) {
    var K;
    const d = t.split(".")[0], h = gs.includes(d) ? kn(t) : null, D = h ? h.on : ["on", "open", "playing"].includes((K = v[t]) == null ? void 0 : K.state), x = h ? h.button : xm.includes(d) ? { act: gt(d, "toggle", t), label: "Turn " + Pe(t) + (D ? " off" : " on") } : d === "scene" || d === "script" ? { act: gt(d, "turn_on", t), label: "Run " + Pe(t) } : null, M = Pt(t) + (i && Be.get(t) ? " · " + Be.get(t) : ""), R = (h == null ? void 0 : h.icon) || yn(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (D ? " on" : "") + (l ? " tfPick" : "") + '" data-k="' + pe((i ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (h == null ? void 0 : h.tone) || "blue") + '"' + Ae(t) + ">" + (x && !l ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + pe(x.label) + '"' + Tt(t, R) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Tt(t, R) + "></div>") + '<button class="tfName" type="button" data-more="' + pe(t) + '" aria-label="' + pe(Pe(t) + ", " + M + ". More info") + '"><span class="activityRowName">' + pe(Pe(t)) + '</span><span class="activityRowMeta">' + pe(M) + "</span></button>" + (l ? Ls(t) : "") + "</div>";
  }
  const Wo = () => {
    var t;
    return v[(t = T.sources) == null ? void 0 : t.weather] ? T.sources.weather : v["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(v).find((i) => i.startsWith("weather."));
  };
  function _s() {
    var l;
    const t = (d) => Object.keys(v).filter((h) => h.startsWith("binary_sensor.") && d.includes(ot(h).device_class));
    return ((l = J.alert_entities) != null && l.length ? J.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(fl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => v[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(v[d.entity].state) }));
  }
  function _r() {
    const t = Object.keys(ml), i = /* @__PURE__ */ new Set(), l = [];
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
  function Ma() {
    var To;
    const t = Le.rooms, i = Le.security, l = (Re, Ct) => Re.actions.filter((ei) => Ct.test(ei)), d = (Re) => t.map((Ct) => ({ name: Ct.name, ids: Re(Ct) })).filter((Ct) => Ct.ids.length), h = t.flatMap((Re) => Re.lights), D = h.filter((Re) => {
      var Ct;
      return ((Ct = v[Re]) == null ? void 0 : Ct.state) === "on";
    }).length, x = t.map((Re) => Re.readings.find((Ct) => ot(Ct).device_class === "temperature")).filter(Boolean).map((Re) => Number(v[Re].state)).filter(Number.isFinite), [M, R] = [mt(Math.min(...x)), mt(Math.max(...x))], K = t.flatMap((Re) => l(Re, /^media_player\./)), j = K.filter((Re) => {
      var Ct;
      return ((Ct = v[Re]) == null ? void 0 : Ct.state) === "playing";
    }).length, H = _s(), le = H.filter((Re) => Re.severity === "warning" && Re.on).length, We = i.locks.filter((Re) => {
      var Ct;
      return ["unlocked", "jammed", "open"].includes((Ct = v[Re]) == null ? void 0 : Ct.state);
    }).length, Fe = i.alarms.filter((Re) => {
      var Ct;
      return ((Ct = v[Re]) == null ? void 0 : Ct.state) === "disarmed";
    }).length, me = le ? Fo(le, "warning", "warnings") : null, fe = We ? We + " unlocked" : Fe ? Fe + " disarmed" : me ? null : "All secure", ie = Object.keys(v).filter((Re) => Re.startsWith("sensor.") && ot(Re).device_class === "battery").sort((Re, Ct) => Number(v[Re].state) - Number(v[Ct].state)), st = [...ie.filter((Re) => Number(v[Re].state) < 20), ...Le.vacuums.filter((Re) => ot(Re).battery_level < 20)], Ut = t.flatMap((Re) => Re.plants.map((Ct) => Ct.id)).sort((Re, Ct) => {
      var ei, Kr;
      return (((ei = v[Ct]) == null ? void 0 : ei.state) === "problem") - (((Kr = v[Re]) == null ? void 0 : Kr.state) === "problem");
    }), oa = Ut.filter((Re) => {
      var Ct;
      return ((Ct = v[Re]) == null ? void 0 : Ct.state) === "problem";
    }), Yr = t.flatMap((Re) => Re.solar), Bs = Yr.find((Re) => Re.endsWith("_power")), Zr = {
      light: h.length && { value: D ? D + " on" : "All off", groups: d((Re) => Re.lights) },
      climate: x.length && { value: M === R ? M + "°" : M + " - " + R + "°", groups: d((Re) => [...Re.readings.filter((Ct) => ["temperature", "humidity"].includes(ot(Ct).device_class)), ...l(Re, /^(climate|humidifier)\./)]) },
      security: (i.alarms.length || i.locks.length) && { value: [me, fe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...i.alarms, ...i.locks] }, { name: "Doors and windows", ids: i.openings }].filter((Re) => Re.ids.length) },
      media_players: K.length && { value: j ? j + " playing" : "No media playing", groups: d((Re) => l(Re, /^media_player\./)) },
      maintenance: (ie.length || Ut.length) && { value: [st.length && Fo(st.length, "low battery", "low batteries"), oa.length && Fo(oa.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: Ut }, { name: "Batteries", ids: [...Le.vacuums, ...ie] }].filter((Re) => Re.ids.length) },
      energy: Le.grid && { value: Ha(Number(((To = v[Bs]) == null ? void 0 : To.state) || 0) * 1e3 + Number(v[Le.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Yr, Le.grid] }] }
    }, Qo = [], So = H.filter((Re) => Re.severity !== "warning" && Re.on);
    return So.length && Qo.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Fo(So.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: So.map((Re) => Re.entity) }] }), _r().forEach((Re) => {
      Re.type !== "summary" ? Qo.push({ key: "path:" + Re.path, name: Re.label || Re.path, icon: Re.icon || "mdi:link-variant", colour: "", value: "" }) : !Re.hidden && Zr[Re.key] && !(T.hiddenSums || []).includes(Re.key) && Qo.push({ key: Re.key, ...ml[Re.key], ...Zr[Re.key] });
    }), Qo;
  }
  const Ar = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + pe(t.key) + '" data-k="sum:' + pe(t.key) + '" aria-label="' + pe(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Tt(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + pe(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + pe(t.value) + "</div>" : "") + "</div></div>";
  function di(t) {
    const i = qa();
    T = { ...T, favourites: i.includes(t) ? i.filter((l) => l !== t) : [...i, t] }, Dt(), On();
  }
  function qo(t) {
    document.querySelector("home-assistant") && (ke.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Zi(t, i) {
    if (t.startsWith("path:")) {
      qo(t.slice(5));
      return;
    }
    if (t === "security") {
      bo("security");
      return;
    }
    mn("summary:" + t, i);
  }
  async function As() {
    const t = (x) => Promise.resolve().then(() => B(x)).catch(() => null), [i, l, d, h] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Kd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), D = (i == null ? void 0 : i.value) || {};
    T = { favourites: D.favourites ?? null, sources: D.sources, hiddenSums: D.hiddenSums, dash: D.dash, named: D.named }, re = (l == null ? void 0 : l.value) || {}, J = (d == null ? void 0 : d.value) || {}, ee = Array.isArray(h == null ? void 0 : h.entities) ? h.entities : [], oe = null, Object.keys(v).length && On(), Ki();
  }
  const ci = "HomeCore";
  async function Ki() {
    var d, h, D;
    const t = location.pathname.split("/")[1], i = T.named || [];
    if (!((h = (d = o()) == null ? void 0 : d.user) != null && h.is_admin) || !t || i.includes(t)) return;
    const l = () => {
      T = { ...T, named: [...i, t] }, Dt();
    };
    try {
      const x = (D = await B({ type: "lovelace/dashboards/list" })) == null ? void 0 : D.find((K) => K.url_path === t);
      if (!x || x.mode === "yaml") return;
      if (x.title === ci) {
        l();
        return;
      }
      const M = await B({ type: "lovelace/config", url_path: t }), R = ((M == null ? void 0 : M.views) || []).flatMap((K) => [...K.cards || [], ...(K.sections || []).flatMap((j) => j.cards || [])]);
      if (!R.length || !R.every((K) => (K == null ? void 0 : K.type) === "custom:move-assistant-card" && K.layout === "test-focus")) return;
      await B({ type: "lovelace/dashboards/update", dashboard_id: x.id, title: ci }), l();
    } catch {
    }
  }
  let Lt = null, $i = 0, Ji = !1;
  const Xi = (t) => {
    const i = t.split(".")[0];
    return Am.includes(i) && (i !== "binary_sensor" || fl.includes(ot(t).device_class));
  };
  async function co() {
    var t;
    if (!(Ji || Date.now() - $i < 30 * 1e3)) {
      Ji = !0, $i = Date.now();
      try {
        const i = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(Xi), l = i.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: i }) : null;
        Lt = Array.isArray(l) ? l.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Lt = null;
      }
      Ji = !1, On();
    }
  }
  function Es() {
    const t = /* @__PURE__ */ new Map(), i = (d) => {
      if (!v[d.entity_id] || !Xi(d.entity_id) || !mi(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const h = t.get(d.entity_id);
      (!h || d.when > h.when + 1) && t.set(d.entity_id, d);
    };
    (Lt || []).forEach(i);
    const l = Lt ? $i / 1e3 - 5 : 0;
    return Object.keys(v).forEach((d) => {
      var x;
      const h = v[d], D = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      D > l && i({ entity_id: d, state: h.state, when: D, context_user_id: (x = h.context) == null ? void 0 : x.user_id });
    }), [...t.values()].sort((d, h) => h.when - d.when).slice(0, Em);
  }
  function Nt(t) {
    var d;
    const i = t.context_user_id && Object.keys(v).find((h) => h.startsWith("person.") && ot(h).user_id === t.context_user_id);
    if (i) return Pe(i);
    const l = (d = o()) == null ? void 0 : d.user;
    return l && t.context_user_id === l.id ? l.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Ca(t) {
    const i = t.entity_id.split(".")[0], l = String(t.state);
    return i === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[l] || kt(l).toLowerCase() : i === "cover" || i === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[l] || kt(l).toLowerCase() : i === "binary_sensor" ? l === "on" ? "opened" : "closed" : i === "climate" ? l === "off" ? "turned off" : "set to " + kt(l).toLowerCase() : i === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[l] || kt(l).toLowerCase() : i === "alarm_control_panel" ? (Qd[l] || kt(l)).toLowerCase() : i === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[l] || kt(l).toLowerCase() : l === "on" ? "turned on" : l === "off" ? "turned off" : kt(l).toLowerCase();
  }
  function uo(t) {
    const i = t.entity_id, l = Pe(i) + " " + Ca(t), d = [Nt(t), Rn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + Tt(i, yn(i)) + '></div><button class="tfName" type="button" data-more="' + pe(i) + '" aria-label="' + pe(l + ", " + d + ". More info") + '"><span class="activityRowName">' + pe(l) + '</span><span class="activityRowMeta">' + pe(d) + "</span></button></div>";
  }
  let Vo = null, zo = 0;
  const ui = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function pi() {
    var i;
    if (Date.now() - zo < 5 * 60 * 1e3) return;
    zo = Date.now();
    const t = [];
    try {
      const l = ((i = await B({ type: "energy/get_prefs" })) == null ? void 0 : i.energy_sources) || [], d = (h) => l.filter((D) => D.type === h).flatMap((D) => h === "grid" ? (D.flow_from || []).map((x) => x.stat_energy_from) : [D.stat_energy_from]).filter(Boolean);
      for (const [h, D, x] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!x.length) continue;
        const M = await Promise.all(x.map((R) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: R, calendar: { period: "day" }, types: ["change"] })).then((K) => Number(K == null ? void 0 : K.change) || 0, () => 0)));
        t.push({ key: h, name: D, id: x[0], value: M.reduce((R, K) => R + K, 0), unit: ot(x[0]).unit_of_measurement || (h === "gas" || h === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Vo = t, On();
  }
  let Mn = null;
  function fa() {
    var D;
    const t = Vo != null && Vo.length ? Vo : ui.map(([x, M, R, K]) => {
      const j = "sensor.made_up_energy_" + x;
      return v[j] = { entity_id: j, state: String(R), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: M + " today", unit_of_measurement: K, state_class: "total_increasing" } }, { key: x, name: M, id: j, value: R, unit: K };
    });
    Ce.clear(), t.some((x) => x.id === Mn) || (Mn = t[0].id);
    const i = t.map((x) => {
      const M = Number(x.value).toLocaleString(void 0, { maximumFractionDigits: x.value < 10 ? 2 : 1 }) + " " + x.unit, R = Dm[x.key], K = x.id === Mn;
      return Ce.set(x.id, { name: x.name, text: M, icon: R }), '<div class="activityRow tap' + (K ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + pe(x.id) + '" aria-pressed="' + K + '" aria-label="' + pe(x.name + ", " + M) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Tt("", R, x.name) + '></div><div><div class="activityRowName">' + pe(x.name) + '</div><div class="activityRowMeta">' + pe(M) + "</div></div></div>";
    }), l = t.find((x) => x.id === Mn), d = (((D = In().opts.energy) == null ? void 0 : D.graph) || "above") === "below", h = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + pe(l.id) + '" role="img" aria-label="' + pe(l.name) + ', last 24 hours"></svg></div>';
    return E("dash:energy", 0, "Energy today", i, h, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Er(t) {
    const i = A.querySelector(".tfDash-energy"), l = i == null ? void 0 : i.querySelector(".tfDashGraph svg");
    !l || t === Mn || (Mn = t, i.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const h = d.dataset.energyPick === t;
      d.classList.toggle("picked", h), d.setAttribute("aria-pressed", String(h));
    }), l.dataset.graph = t, l.dataset.drawn = "", at.set("dash:energy", fa()), ir(!0));
  }
  function Sa(t) {
    var h;
    if ((h = window.matchMedia) != null && h.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [i, l] = t.querySelectorAll("path");
    if (!(l != null && l.getTotalLength)) return;
    const d = l.getTotalLength();
    l.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), i == null || i.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let jo = null, Gn = 0;
  const mi = (t) => !t.startsWith("light.") || Rm.includes((Be.get(t) || "").toLowerCase()), Dr = () => Math.max(2, _a((A == null ? void 0 : A.clientWidth) || 0).n);
  function Qi(t) {
    if (!jo) {
      const l = (d) => {
        var h;
        return (((h = v[d]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (de[d] || 0);
      };
      jo = {
        lights: Le.rooms.flatMap((d) => d.lights).filter((d) => {
          var h;
          return mi(d) && ((h = v[d]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((d, h) => l(h) - l(d) || Pe(d).localeCompare(Pe(h))),
        climates: Le.rooms.flatMap((d) => d.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const i = jo.climates.filter((l) => v[l]).slice(0, t > 3 ? 2 : 1);
    return [...jo.lights.filter((l) => v[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const hi = (t, i, l, d) => (h) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + i + '" aria-label="' + l + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + l + "</div></div>" : "") + '<div class="activityRows">' + h + "</div></section>";
  function Rr(t, i) {
    var D, x;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + pe(((x = (D = o()) == null ? void 0 : D.config) == null ? void 0 : x.location_name) || "Home") + "</h1>" }), i.length && t.push({ key: "sums", wrap: (M) => '<div class="tfDashBarRow" data-tf data-k="sums">' + hi("tfDash-bar", "sums-bar", "Summaries", !1)(M).replace(" data-tf", "") + "</div>", tiles: i.map((M) => ({ key: "sum:" + M.key, html: Ar(M) })) }), Wa.length && t.push({ key: "areas", html: Lr(0) });
    const l = Ts(ec * 3).filter(mi).slice(0, ec);
    l.length && t.push({ key: "favs", wrap: hi("tfDash-favs", "favs", "Favourites", !0), tiles: l.map((M) => ({ key: "fav:" + M, html: Oo(M, { area: !0 }) })) });
    const d = Es();
    t.push({ key: "dash:act", html: E("dash:act", 0, "Activity", d.length ? d.map(uo) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: fa() });
    const h = Dr();
    return Gn = h, t.push({
      key: "dash:tiles",
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + M + "</div>",
      tiles: Qi(h >= 3 ? h : h * 2).map((M) => ({ key: M, html: nn(M, !1, M.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), co(), pi(), t;
  }
  const fi = 252, Ot = 16, Nr = 230, Ta = 60, po = Ta + Ot, ga = 5, Va = 3, er = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, gi = ["wx", "favs", "act", "energy", "avg"], Go = { wx: ga, areas: ga, favs: ga, act: ga, energy: 4, avg: 4 }, vi = 3, Uo = 94, za = /* @__PURE__ */ new Set(), Bn = (t) => er[t] || Pe(t), mo = 409, Ds = 128;
  let Pn = !1, Wt = null, vn = null, ho = !1, ja = /* @__PURE__ */ new Map(), tr = 0, La = 0;
  const fo = ["title", "sums"], _a = (t) => {
    let i = Math.floor((t + Ot) / (fi + Ot)), l = fi;
    return i < 4 && t >= 4 * Nr + 3 * Ot && (i = 4, l = Math.floor((t - 3 * Ot) / 4)), { n: Math.max(1, i), w: l };
  }, In = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...T.dash || {} });
  function Br(t) {
    T = { ...T, dash: t }, Dt();
  }
  function $t() {
    const t = (i) => A.querySelector(i);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Ia.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Ia.avg, 2],
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((i) => [i.dataset.k, i, 1, !0])
    ].filter(([, i]) => i == null ? void 0 : i.isConnected).map(([i, l, d, h = !1]) => ({ key: i, el: l, span: d, tile: h }));
  }
  const go = (t, i, l) => t.span === "full" ? i : t.span === "areas" ? Math.min(i, Math.ceil((mo + Math.max(0, Wa.length - 1) * (Ds + Ot) + Ot) / (l + Ot))) : Math.min(i, In().spans[t.key] ?? t.span), Ga = (t) => Go[t.key] ?? (t.el.classList.contains("tfDac") ? za.has(t.key) ? ga : vi : null);
  function Pr(t, i, l = null) {
    const d = In().cells, h = t.every((M) => !d[M.key] || d[M.key].col + M.cols <= i), D = (M) => d[M.key] || { row: 1e9, col: 0 }, x = () => {
      const M = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), K = (me, fe, ie, st) => {
        for (let Ut = fe; Ut < fe + st; Ut++) for (let oa = me; oa < me + ie; oa++) if (M.has(oa + "," + Ut)) return !1;
        return !0;
      }, j = (me, fe, ie) => {
        for (let st = ie; st < ie + me.rows; st++) for (let Ut = fe; Ut < fe + me.cols; Ut++) M.add(Ut + "," + st);
        R.set(me.key, { col: fe, row: ie, cols: me.cols, rows: me.rows });
      }, H = (me, fe, ie) => {
        for (fe = Math.max(0, Math.min(i - me.cols, fe)), ie = Math.max(0, ie); !K(fe, ie, me.cols, me.rows); ) ie++;
        j(me, fe, ie);
      }, le = (me) => {
        for (let fe = 0; ; fe++) for (let ie = 0; ie <= i - me.cols; ie++) if (K(ie, fe, me.cols, me.rows)) {
          j(me, ie, fe);
          return;
        }
      };
      l && H(l, Wt.col, Wt.row);
      const We = t.filter((me) => me !== l), Fe = (me, fe) => D(me).row - D(fe).row || D(me).col - D(fe).col;
      return h ? (We.filter((me) => d[me.key]).sort(Fe).forEach((me) => H(me, d[me.key].col, d[me.key].row)), We.filter((me) => !d[me.key]).forEach(le), R) : ([...We].sort(Fe).forEach(le), R);
    };
    for (let M = 0; ; M++) {
      const R = x();
      if (M === 3) return R;
      const K = t.filter((H) => H.tile && !za.has(H.key)).map((H) => ({ it: H, p: R.get(H.key) })).sort((H, le) => H.p.row - le.p.row || H.p.col - le.p.col);
      let j = !1;
      for (let H = 0, le; H < K.length; H = le) {
        for (le = H + 1; le < K.length && K[le].p.row === K[H].p.row && K[le].p.col === K[le - 1].p.col + 1; le++) ;
        const We = K.slice(H, le), Fe = Math.max(...We.map((me) => me.it.rows));
        We.forEach((me) => {
          me.it.rows < Fe && (me.it.rows = Fe, j = !0);
        });
      }
      if (!j) return R;
    }
  }
  function Ir() {
    const t = In(), i = new Set(t.hidden), l = $t().filter((D) => !fo.includes(D.key));
    let d = ja;
    if (!d.size) {
      const D = t.pegs || 4, x = l.filter((M) => !i.has(M.key));
      x.forEach((M) => {
        M.cols = go(M, D, fi), M.rows = Ga(M) ?? 2;
      }), d = Pr(x, D);
    }
    const h = (D) => !i.has(D.key) && d.get(D.key) || { row: 1e9, col: 0 };
    l.sort((D, x) => h(D).row - h(x).row || h(D).col - h(x).col).forEach((D, x) => D.el.style.setProperty("--o", String(3 + x)));
  }
  const nr = (t, i) => Br({ ...t, cells: i, pegs: _a(A.clientWidth).n });
  function Un() {
    var fe;
    if (!w || !A) return;
    const t = A.clientWidth, { n: i, w: l } = _a(t), d = m.classList.contains("tfDash") && i >= 2;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && Pn);
    const h = u("dashEditNav");
    h && (h.hidden = !d, h.classList.toggle("active", Pn), h.setAttribute("aria-pressed", String(Pn)), h.setAttribute("aria-label", Pn ? "Done editing" : "Edit the dashboard"), h.title = Pn ? "Done" : "Edit", h.innerHTML = Pn ? Sm : Xd);
    const D = d ? $t() : [];
    if (!d) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((ie) => {
        ie.classList.remove("tfBoardItem", "tfBoardHidden"), ie.style.left = ie.style.top = ie.style.width = ie.style.height = "";
      }), (fe = A.querySelector(".tfDash-act > .activityRows")) == null || fe.style.removeProperty("max-height"), vo(!1), m.classList.contains("tfDash") && Ir();
      return;
    }
    A.style.setProperty("--peg-w", l + "px");
    const x = new Set(In().hidden), M = l + Ot;
    D.forEach((ie) => ie.el.classList.toggle("tfBoardHidden", x.has(ie.key)));
    const R = D.filter((ie) => !x.has(ie.key) && getComputedStyle(ie.el).display !== "none");
    let K = 0;
    R.filter((ie) => fo.includes(ie.key)).forEach((ie) => {
      ie.el.classList.add("tfBoardItem"), Object.assign(ie.el.style, { width: t + "px", height: "", left: "0px", top: K + "px" });
      const st = ie.key === "sums" && ie.el.querySelector(".tfDash-bar"), Ut = st ? st.querySelectorAll(".activityRow").length : 0;
      st && (st.style.maxWidth = "none");
      for (let oa = 1; st && oa <= Ut && (st.style.setProperty("--bar-cols", String(Math.ceil(Ut / oa))), !(st.offsetWidth <= t)); oa++)
        ;
      st && (st.style.maxWidth = ""), K += ie.el.offsetHeight + Ot;
    }), La = K;
    const j = R.filter((ie) => !fo.includes(ie.key));
    j.forEach((ie) => {
      ie.cols = go(ie, i, l), ie.el.classList.add("tfBoardItem"), ie.el.style.width = (ie.cols === i ? t : ie.cols * l + (ie.cols - 1) * Ot) + "px", ie.el.style.height = "", ie.rows = Ga(ie) ?? Math.max(1, Math.ceil((ie.el.offsetHeight + Ot - 6) / po));
    });
    const H = Wt && j.find((ie) => ie.key === Wt.key), le = Pr(j, i, H);
    le.forEach((ie) => Object.assign(ie, { x: ie.cols === i ? 0 : ie.col * M, y: La + ie.row * po, w: ie.cols === i ? t : ie.cols * l + (ie.cols - 1) * Ot, h: ie.rows * po - Ot })), j.forEach((ie) => {
      const st = le.get(ie.key);
      ie.el.style.height = st.h + "px", ie.el.classList.contains("tfDac") && ie.el.style.setProperty("--tf-dac-pad", st.h - Uo + "px"), ie !== H && (ie.el.style.left = st.x + "px", ie.el.style.top = st.y + "px");
    }), ja = le;
    const We = le.get("act"), Fe = We && A.querySelector(".tfDash-act > .activityRows");
    Fe && (Fe.style.maxHeight = Math.max(Ta, Math.floor((We.h - Fe.offsetTop - 10) / Ta) * Ta) + "px"), tr = Math.max(0, ...[...le.values()].map((ie) => ie.row + ie.rows));
    let me = La + tr * po - Ot;
    me = vo(Pn, j, le, me, i, l), A.style.height = me + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), D.forEach((ie) => ar.observe(ie.el)), ir();
  }
  const Ua = () => {
    ho || (ho = !0, requestAnimationFrame(() => {
      ho = !1, Un();
    }));
  }, ar = new ResizeObserver(() => {
    Wt || Ua();
  });
  function vo(t, i = [], l = /* @__PURE__ */ new Map(), d = 0, h = 1, D = fi) {
    A.querySelectorAll(".tfEditChips").forEach((H) => {
      (!t || !H.closest(".tfBoardItem")) && H.remove();
    }), A.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((le) => {
      le.classList.contains("tfEditChips") || le.toggleAttribute("inert", t);
    }));
    let x = A.querySelector(".tfBoardCells"), M = A.querySelector(".tfBoardLand"), R = A.querySelector(".tfBoardTray");
    if (!t)
      return x == null || x.remove(), M == null || M.remove(), R == null || R.remove(), Hn(), d;
    const K = tr + Va;
    if (x || (x = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), x.setAttribute("aria-hidden", "true"), A.prepend(x)), x.style.top = La + "px", x.dataset.size !== h + "x" + K + "x" + D && (x.dataset.size = h + "x" + K + "x" + D, x.style.gridTemplateColumns = "repeat(" + h + "," + D + "px)", x.innerHTML = "<i></i>".repeat(h * K)), d = Math.max(d, La + K * po - Ot), i.forEach((H) => {
      const le = H.el;
      !le || le.querySelector(":scope > .tfEditChips") || le.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + km + '</span><button class="tfEditChip" type="button" data-board-more="' + pe(H.key) + '" aria-label="' + pe(Bn(H.key)) + ' options" aria-haspopup="menu">' + Mm + "</button></div>");
    }), Wt && l.has(Wt.key)) {
      M || (M = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(M));
      const H = l.get(Wt.key);
      Object.assign(M.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else M == null || M.remove();
    const j = In().hidden.filter((H) => $t().some((le) => le.key === H));
    return j.length ? (R || (R = Object.assign(document.createElement("div"), { className: "tfBoardTray" }), A.appendChild(R)), R.innerHTML = j.map((H) => '<button class="pill" type="button" data-board-show="' + pe(H) + '">Show ' + pe(Bn(H)) + "</button>").join(""), Object.assign(R.style, { top: d + Ot + "px", left: "0px", width: A.clientWidth + "px" }), d + Ot + R.offsetHeight) : (R == null || R.remove(), d);
  }
  function bi(t) {
    Pn = t, t || (Wt = null, Hn()), Un();
  }
  function va(t, i) {
    var j, H;
    Hn();
    const l = ja.get(t), { n: d } = _a(A.clientWidth), h = In(), D = h.spans[t] ?? 2;
    if (!l) return;
    const x = l.cols >= d, M = (le, We, Fe) => '<button type="button" role="menuitem" data-board-act="' + le + '"' + (Fe ? " disabled" : "") + ">" + We + "</button>", R = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    R.setAttribute("role", "menu"), R.setAttribute("aria-label", Bn(t) + " options"), R.innerHTML = (gi.includes(t) ? M("size", D === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? M("graph", (((j = h.opts.energy) == null ? void 0 : j.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + M("left", "Move left", x || l.col === 0) + M("right", "Move right", x || l.col + l.cols >= d) + M("up", "Move up", l.row <= 0) + M("down", "Move down") + M("hide", "Hide"), A.appendChild(R);
    const K = Math.min(l.x + l.w - R.offsetWidth, A.clientWidth - R.offsetWidth);
    Object.assign(R.style, { left: Math.max(0, K) + "px", top: l.y + 28 + "px" }), vn = { key: t, menu: R, opener: i }, (H = R.querySelector("button:not([disabled])")) == null || H.focus();
  }
  function Hn(t) {
    if (!vn) return;
    const { menu: i, opener: l } = vn;
    vn = null, i.remove(), t && (l == null || l.focus());
  }
  const Yo = () => Object.fromEntries([...ja].map(([t, i]) => [t, { col: i.col, row: i.row }]));
  function Rs(t, i) {
    var D, x;
    const l = In(), d = Yo(), h = d[t] || { col: 0, row: 0 };
    i === "size" && (l.spans = { ...l.spans, [t]: (l.spans[t] ?? 2) === 1 ? 2 : 1 }), i === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((D = l.opts.energy) == null ? void 0 : D.graph) || "above") === "above" ? "below" : "above" } }), i === "left" && (d[t] = { ...h, col: h.col - 1 }), i === "right" && (d[t] = { ...h, col: h.col + 1 }), i === "up" && (d[t] = { ...h, row: h.row - 1 }), i === "down" && (d[t] = { ...h, row: h.row + 1 }), i === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(i) && (Wt = { key: t, col: d[t].col, row: d[t].row }), nr(l, d), Wt && (Un(), Wt = null, nr(In(), Yo())), Hn(), i === "graph" && (at.delete("dash:energy"), On()), Un(), i !== "hide" && ((x = A.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus());
  }
  function or(t) {
    const i = In();
    Br({ ...i, hidden: i.hidden.filter((l) => l !== t) }), Un();
  }
  function Hr(t) {
    if (!Pn || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfBoardTray")) return;
    const i = t.target.closest(".tfBoardItem"), l = i && $t().find((H) => H.el === i);
    if (!l || fo.includes(l.key)) return;
    const d = ja.get(l.key), { w: h } = _a(A.clientWidth);
    if (!d) return;
    t.preventDefault(), Hn();
    const D = t.clientX, x = t.clientY;
    let M = !1, R = 0;
    const K = (H) => {
      const le = H.clientX - D, We = H.clientY - x;
      if (!M) {
        if (Math.hypot(le, We) < 4) return;
        M = !0, Wt = { key: l.key, col: d.col, row: d.row }, i.classList.add("tfDragging");
      }
      i.style.transform = "translate(" + le + "px," + We + "px)", Wt.col = Math.round((d.x + le) / (h + Ot)), Wt.row = Math.round((d.y + We - La) / po), R || (R = requestAnimationFrame(() => {
        R = 0, Un();
      }));
    }, j = () => {
      window.removeEventListener("pointermove", K), window.removeEventListener("pointerup", j), window.removeEventListener("pointercancel", j), M && (cancelAnimationFrame(R), Un(), i.classList.remove("tfDragging"), i.style.transform = "", Wt = null, nr(In(), Yo()), Un(), On());
    };
    window.addEventListener("pointermove", K), window.addEventListener("pointerup", j), window.addEventListener("pointercancel", j);
  }
  function ir(t = !1) {
    const i = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(i != null && i.clientWidth)) return;
    const l = i.dataset.graph + "@" + i.clientWidth + "x" + i.clientHeight;
    i.dataset.drawn !== l && (i.dataset.drawn = l, $o(i.dataset.graph, i).then(() => {
      t && Sa(i);
    }));
  }
  function Aa() {
    var M, R, K;
    Le = Pa.model(o()), v = Le.states, v[(M = T.sources) == null ? void 0 : M.grid] && (Le.grid = T.sources.grid), v[(R = T.sources) == null ? void 0 : R.alarm] && (Le.security.alarms = [T.sources.alarm]), b.forEach((j, H) => {
      const le = v[H], We = (le == null ? void 0 : le.attributes) || {};
      if (!le || Date.now() - j.at > 2 * 60 * 1e3) {
        b.delete(H);
        return;
      }
      j.pos != null && le.state !== "opening" && le.state !== "closing" && Math.abs(Mt(H) - j.pos) < 1 && delete j.pos, j.tilt != null && Math.abs((We.current_tilt_position ?? -1) - j.tilt) < 1 && delete j.tilt, j.pos == null && j.tilt == null && b.delete(H);
    });
    const t = [];
    let i = 0;
    const l = Yi();
    Wa = l.filter((j) => j.room).map((j) => j.room), Wa.some((j) => j.id === ge) || (ge = ((K = Wa[0]) == null ? void 0 : K.id) || null);
    const d = Se === "weather" ? { key: "weather", name: "Weather" } : Se && l.find((j) => j.key === Se);
    if (d || (Se = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), Be = /* @__PURE__ */ new Map(), Le.rooms.forEach((j) => [...j.actions, ...j.plugs, ...j.readings, ...j.openings, ...j.solar, ...j.plants.flatMap((H) => [H.id, ...H.readings])].forEach((H) => Be.set(H, j.name))), !d) return Rr(t, Ma());
    if (t.push({ key: "areahead", html: Ns(d, ++i) }), d.key === "weather")
      return t.weather = ++i, t;
    const h = d.ids, D = d.room ? d.room.id : d.key, x = d.room;
    return x != null && x.solar.length && t.push({ key: "energy:" + x.id, html: W(x, ++i) }), x && (x.readings.length || x.plugs.length || x.power != null) && t.push({ key: "readings:" + x.id, html: F(x, ++i) }), x == null || x.plants.forEach((j) => t.push({ key: "plant:" + j.id, html: ue(j, ++i) })), h.length && t.push({ key: "block:" + D, order: ++i, tiles: h.map((j) => ({ key: j, html: nn(j) })) }), d.key === "security" && t.push({ key: "openings", html: be(++i) }), t;
  }
  const Ns = (t, i) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + i + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + dm + '</button><div class="settingsTitle">' + pe(t.name) + "</div></div>";
  let rr = 0;
  function bo(t) {
    var i;
    Se || (rr = ba().scrollTop), Se = t, t.startsWith("room:") && (ge = t.slice(5)), Fn(), ba().scrollTop = 0, (i = A.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  function Ya() {
    var h;
    const t = Se;
    Se = null, Fn();
    const i = ba(), l = rr;
    i.scrollTop = l, requestAnimationFrame(() => {
      i.scrollTop = l;
    });
    const d = t.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Ia.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (h = (d == null ? void 0 : d.querySelector("[data-go]")) || d) == null || h.focus({ preventScroll: !0 });
  }
  const wo = (t) => t.wrap ? t.wrap(t.tiles.map((i) => i.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + pe(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((i) => i.html).join("") + "</div></div>", ta = (t) => t.map((i) => i.key + (i.tiles ? "(" + i.tiles.map((l) => l.key).join(",") + ")" : "")).join(";");
  function ba() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const i = getComputedStyle(t).overflowY;
      if ((i === "auto" || i === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Za(t) {
    const i = ba(), l = (M) => {
      const R = M.getBoundingClientRect();
      return R.height && R.bottom > 0 && R.top < window.innerHeight;
    }, d = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((M) => !M.matches(".tfDashTiles") && l(M)), h = d == null ? void 0 : d.dataset.k, D = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const x = d != null && d.isConnected ? d : h && A.querySelector('[data-k="' + CSS.escape(h) + '"]');
    x != null && x.isConnected && D != null && (i.scrollTop += x.getBoundingClientRect().top - D);
  }
  function Fn() {
    if (!w || !A) return;
    const t = Aa();
    A.querySelectorAll("[data-tf]").forEach((l) => l.remove()), at.clear();
    const i = document.createElement("div");
    i.innerHTML = t.map((l) => l.tiles ? wo(l) : l.html).join(""), t.forEach((l) => l.tiles ? l.tiles.forEach((d) => at.set(d.key, d.html)) : at.set(l.key, l.html)), tn = ta(t), A.append(...i.children), dt(t.weather), ut(), ar.disconnect(), Un(), cn(A), Ko(A), jn(A), z(), q && $o(q.id), Jo(), Ea(), Wr(), requestAnimationFrame(O);
  }
  const Ka = (t) => {
    var l;
    const i = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return i && { label: i.getAttribute("aria-label"), act: (l = i.dataset) == null ? void 0 : l.act };
  }, na = (t, i) => {
    var l;
    i && ((l = i.label && t.querySelector('[aria-label="' + CSS.escape(i.label) + '"]') || i.act && t.querySelector('[data-act="' + CSS.escape(i.act) + '"]')) == null || l.focus({ preventScroll: !0 }));
  };
  function Fr(t, i) {
    const l = document.createElement("div");
    l.innerHTML = i;
    const d = l.firstElementChild, h = Ka(t);
    t.replaceWith(d), cn(d), Ko(d), jn(d), na(d, h);
  }
  function On() {
    !w || !A || Wt || Za(wi);
  }
  function wi() {
    if (!A.querySelector("[data-tf]")) {
      Fn();
      return;
    }
    const t = Aa();
    if (ta(t) !== tn) {
      Fn();
      return;
    }
    const i = (l) => [...Oe.keys()].some((d) => {
      const h = d.slice(d.indexOf("|") + 1);
      return l === h || l.endsWith(":" + h);
    });
    t.forEach((l) => (l.tiles || [l]).forEach((d) => {
      if (at.get(d.key) === d.html || i(d.key)) return;
      const h = A.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (h) {
        if (at.set(d.key, d.html), q && q.key === d.key && h.querySelector(".tfOpen")) {
          h.querySelector(".tfOpen .activityRowMeta").textContent = Oa(q.id);
          return;
        }
        Fr(h, d.html), q && q.key === d.key && $o(q.id), d.key.startsWith("energy:") && Jo();
      }
    })), Ea(), Wr(), ht(), z(), hn == null || hn.update(), dn == null || dn.forEach((l) => l.update()), m.classList.contains("tfDash") && Ua(), requestAnimationFrame(O);
  }
  const aa = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && kt(t.color_mode)]],
    climate: (t) => [["Current temperature", mt(t.current_temperature) + " °C"], ["Target", mt(t.temperature) + " °C"], ["Action", kt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", kt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", kt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", mt(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : kt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, xo = (t) => {
    var l;
    const i = (((l = aa[t.split(".")[0]]) == null ? void 0 : l.call(aa, ot(t))) || []).filter(([, d]) => d != null && d !== "");
    return i.length ? '<div class="tfMoreRows">' + i.map(([d, h]) => '<div class="tfMoreRow"><span>' + pe(d) + "</span><span>" + pe(h) + "</span></div>").join("") + "</div>" : "";
  }, $a = (t) => Fi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function yo(t, i = {}, l = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + pe(d.name) + '</div><div class="tfMoreTiles' + (l ? " single" : "") + '">' + d.ids.map((h) => Oo(h, i)).join("") + "</div></div>").join("") + "</div>";
  }
  const rt = document.createElement("div");
  rt.className = "tfMoreBackdrop", rt.hidden = !0, m.appendChild(rt);
  const sr = (t, i) => {
    for (let l = t; l && l !== rt; l = l.parentElement) {
      const d = getComputedStyle(l).overflowY;
      if ((d === "auto" || d === "scroll") && l.scrollHeight > l.clientHeight + 1 && (i < 0 ? l.scrollTop > 0 : l.scrollTop + l.clientHeight < l.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let ko = null;
  rt.addEventListener("touchstart", (t) => {
    ko = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), rt.addEventListener("touchmove", (t) => {
    var h, D;
    if (!ko || t.touches.length > 1 || (D = (h = t.target).closest) != null && D.call(h, "input,textarea,select")) return;
    const i = t.touches[0], l = ko.x - i.clientX, d = ko.y - i.clientY;
    ko = { x: i.clientX, y: i.clientY }, Math.abs(d) >= Math.abs(l) && !sr(t.target, d) && t.preventDefault();
  }, { passive: !1 }), rt.addEventListener("wheel", (t) => {
    sr(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function lr() {
    const t = rt.querySelector(".tfMorePair"), i = rt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - i.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", lr, { passive: !0 }), w && ka();
  let Yn = [];
  const Mo = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function wa(t) {
    const i = (M, R = "") => '<div class="tfMoreHead">' + (g != null && g.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + pl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + pe(M) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + cm + "</button></div>", l = (M, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + pe(M) + "</div>" + (R ? '<div class="tfMoreSub">' + pe(R) + "</div>" : "") + "</div>", d = yo;
    if (t === "favourites") {
      const M = qa(), R = new Set(M), K = [{ name: "Starred", ids: M }, { name: "Home", ids: Le.homeVacuums }, { name: "Security", ids: [...Le.security.alarms, ...Le.security.locks] }, ...Le.rooms.map((j) => ({ name: j.name, ids: [...j.actions, ...j.plugs] }))].map((j, H) => H ? { ...j, ids: j.ids.filter((le) => !R.has(le)) } : j).filter((j) => j.ids.length);
      return [i("Favourites"), l(M.length ? M.length + " starred" : "None starred"), d(K, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const M = Ma().find((H) => H.key === t.slice(8));
      if (!M) return null;
      const R = M.key === "light" ? (M.groups || []).flatMap((H) => H.ids) : [], K = R.some((H) => {
        var le;
        return ((le = v[H]) == null ? void 0 : le.state) === "on";
      }), j = R.length ? '<button class="primary" type="button" data-acts="' + Nn(R.map((H) => ["light", K ? "turn_off" : "turn_on", H])) + '">' + (K ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(M.name), '<div class="tfMoreNowRow">' + l(M.value) + j + "</div>", ...(M.groups || []).map((H) => {
        const le = H.ids.filter((Fe) => gs.includes(Fe.split(".")[0])), We = H.ids.filter((Fe) => !le.includes(Fe));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + pe(H.name) + "</div>" + (le.length ? '<div class="tfMoreActions">' + le.map((Fe) => nn(Fe, !0)).join("") + "</div>" : "") + (We.length ? '<div class="tfMoreTiles">' + We.map((Fe) => Oo(Fe, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, M, R] = t.split(":"), K = Le.rooms.find((me) => me.id === M), j = K && ea(K).find((me) => me.key === R);
      if (!j) return null;
      const H = lo(K, R), le = H.filter((me) => gs.includes(me.split(".")[0])), We = H.filter((me) => !le.includes(me)), Fe = j.acts ? '<button class="primary" type="button" data-acts="' + Nn(j.acts) + '">' + (j.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(K.name + " " + j.label.toLowerCase()), '<div class="tfMoreNowRow">' + l(j.value) + Fe + "</div>", '<div class="tfMoreGroup">' + (le.length ? '<div class="tfMoreActions">' + le.map((me) => nn(me, !0)).join("") + "</div>" : "") + (We.length ? '<div class="tfMoreTiles">' + We.map((me) => Oo(me, {})).join("") + "</div>" : "") + "</div>"];
    }
    const h = t.split(".")[0], D = v[t], x = gs.includes(h) ? kn(t) : { sections: [] };
    return [
      i(Pe(t)),
      l(Pt(t), D.last_changed && fn(Date.parse(D.last_changed))),
      h === "cover" && '<div data-cover-art="' + pe(t) + '"></div>',
      ...x.sections.filter(Boolean),
      xi(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(g != null && g.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Cm + "</button>"
    ].filter(Boolean);
  }
  const xi = (t) => Mo(t) ? "" : xo(t) + $a(t);
  let Zo = "";
  function yi(t) {
    var i;
    g && (g.details = t, Ea(), (i = rt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || i.focus({ preventScroll: !0 }));
  }
  const xa = (t) => {
    const i = v[t], l = Mt(t), d = Xn(t);
    return { kind: ul(i), name: Pe(t), text: Pt(t), pos: l, target: Math.abs(d - l) > 0.5 ? d : null, moving: i.state === "opening" || i.state === "closing", tilt: qt(t) ?? 100, canSet: Ft(t, Zd) };
  };
  function Ko(t) {
    t.querySelectorAll("[data-cover-art]").forEach((i) => {
      const l = i.dataset.coverArt, d = i.dataset.artKey || "more:" + l;
      let h = C.get(d);
      h || (h = lm({ onMove: (D) => Xo(l, D), onSet: (D) => {
        Xo(l, D), Co("pos", l);
      } }), h.coverId = l, C.set(d, h)), i.replaceWith(h.el), h.update(xa(l));
    });
  }
  const Or = (t) => [...C.values()].filter((i) => i.coverId === t), dr = () => C.forEach((t) => {
    v[t.coverId] && t.update(xa(t.coverId));
  }), Wr = () => {
    C.forEach((t, i) => {
      t.el.isConnected || (t.destroy(), C.delete(i));
    }), dr();
  };
  function Ea() {
    var D, x;
    if (!g || !(Mo(g.id) || v[g.id])) {
      rt.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((M) => M.endsWith("|" + g.id))) {
      dr();
      return;
    }
    const t = wa(g.id), i = rt.querySelector(".tfMore");
    if (!t) {
      ki();
      return;
    }
    const l = Ka(rt), d = xi(g.id), h = g.id.startsWith("summary:") || g.id.startsWith("group:");
    if (rt.hidden || !i || t.length !== Yn.length || i.classList.contains("wide") !== h) {
      const M = !rt.hidden && i ? i.scrollTop : 0;
      rt.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (h ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + pl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Zo = d, rt.hidden = !1, lr(), Ko(rt), jn(rt), cn(rt), M && (rt.querySelector(".tfMore").scrollTop = M), na(rt, l), rt.contains(n.activeElement) || (D = rt.querySelector("[data-more-close]")) == null || D.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((M, R) => {
        var H, le;
        if (M === Yn[R] || M.includes("data-cover-art") || i.children[R].contains((le = (H = n.activeElement) == null ? void 0 : H.matches) != null && le.call(H, "input,select") ? n.activeElement : null) || [...Oe.keys()].some((We) => i.children[R].querySelector('[data-drag="' + CSS.escape(We) + '"]'))) return;
        const K = document.createElement("div");
        K.innerHTML = M;
        const j = K.firstElementChild;
        i.children[R].replaceWith(j), cn(j), jn(j);
      }), d !== Zo) {
        const M = rt.querySelector(".tfMoreSideBody");
        M && (M.innerHTML = d), Zo = d;
      }
      rt.contains(n.activeElement) || na(rt, l);
    }
    (x = rt.querySelector(".tfMorePair")) == null || x.classList.toggle("details", !!(g.details && d)), Yn = t, dr();
  }
  setInterval(() => {
    g && Ea();
  }, 15 * 1e3);
  function mn(t, i) {
    const l = !!(g && i && rt.contains(i));
    g = { id: t, opener: l ? g.opener : i, back: l ? g : null }, bn();
  }
  function bn() {
    Yn = [], rt.hidden = !0, C.forEach((t, i) => {
      i !== g.id && rt.contains(t.el) && (t.destroy(), C.delete(i));
    }), Ea();
  }
  function ki() {
    var l, d, h, D, x, M;
    const t = g == null ? void 0 : g.opener;
    g = null, C.forEach((R, K) => {
      rt.contains(R.el) && (R.destroy(), C.delete(K));
    }), Kt.forEach((R, K) => {
      K.startsWith("more:") && Kt.delete(K);
    }), rt.hidden = !0, rt.innerHTML = "";
    const i = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(i) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (d = A.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(i) : (h = t == null ? void 0 : t.dataset) != null && h.summary ? (D = A.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || D.focus(i) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((M = A.querySelector("[data-favs-edit]")) == null || M.focus(i));
  }
  function qr(t, i, l, d = {}) {
    const h = i.map((fe) => fe[1]), D = d.zero ? 0 : Math.min(...h), x = Math.max(...h), M = Math.max(120, t.clientWidth || 260), R = Math.max(60, t.clientHeight || 130), K = 8, j = R - 20, H = Date.now() - 24 * 3600 * 1e3, le = 24 * 3600 * 1e3, We = (fe) => Math.max(0, Math.min(M, (fe - H) / le * M)), Fe = (fe) => x === D ? (K + j) / 2 : j - (fe - D) / (x - D) * (j - K);
    let me = "M" + We(i[0][0]).toFixed(1) + " " + Fe(i[0][1]).toFixed(1);
    for (let fe = 1; fe < i.length; fe++) me += d.smooth ? "L" + We(i[fe][0]).toFixed(1) + " " + Fe(i[fe][1]).toFixed(1) : "H" + We(i[fe][0]).toFixed(1) + "V" + Fe(i[fe][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + M + " " + R), t.setAttribute("aria-label", l), t.innerHTML = '<path d="' + me + "V" + j + "H" + We(i[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + me + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (R - 4) + '">24 h ago</text><text x="' + M + '" y="' + (R - 4) + '" text-anchor="end">Now</text>';
  }
  function cr(t) {
    var d;
    const i = Number((d = v[t]) == null ? void 0 : d.state), l = Date.now();
    if (ot(t).state_class === "total_increasing") {
      const h = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), D = Math.max(1, l - h);
      return [...Array(49)].map((x, M) => h + D * M / 48).map((x) => [x, Math.round(i * Math.pow((x - h) / D, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((h, D) => [l - (48 - D) * 30 * 60 * 1e3, Math.round(i * (0.96 + 0.04 * Math.sin(D / 6)) * 10) / 10]);
  }
  async function $o(t, i) {
    var We, Fe;
    let l = ke.get(t);
    if (t.endsWith("_solar_power")) l = { at: Date.now(), points: yd() };
    else if (Fi(t)) l = { at: Date.now(), points: cr(t) };
    else if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const me = new Date(Date.now() - 864e5).toISOString(), fe = await B({ type: "history/history_during_period", start_time: me, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ie = ((fe == null ? void 0 : fe[t]) || []).map((st) => [st.lu != null ? st.lu * 1e3 : Date.parse(st.last_updated || st.last_changed), Number(st.s ?? st.state)]).filter(([st, Ut]) => Number.isFinite(st) && Number.isFinite(Ut));
        l = { at: Date.now(), points: ie };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      ke.set(t, l);
    }
    const d = i || A.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const h = v[t], D = ((We = h == null ? void 0 : h.attributes) == null ? void 0 : We.unit_of_measurement) || "", x = l.points.slice(), M = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(M) && !t.endsWith("_solar_power") && x.push([Date.now(), M]), x.length < 2) {
      d.setAttribute("aria-label", Pe(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const R = x.map((me) => me[1]), K = Math.min(...R), j = Math.max(...R), H = (me) => me.toLocaleString(void 0, { maximumFractionDigits: Math.abs(me) >= 100 ? 0 : 1 }), le = ((Fe = h == null ? void 0 : h.attributes) == null ? void 0 : Fe.state_class) === "total_increasing";
    qr(d, x, Pe(t) + ", last 24 hours: " + (le ? "+" + H(R[R.length - 1] - R[0]) : K === j ? H(K) : H(K) + " to " + H(j)) + (D ? " " + D : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Jo() {
    const t = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!t) return;
    const i = yd();
    qr(t, i, "Solar, last 24 hours: up to " + mt(Math.max(...i.map((l) => l[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Vr(t, i) {
    const l = i.entity_id, d = b.get(l) || {}, h = { open_cover: 100, close_cover: 0, set_cover_position: i.position, toggle: Mt(l) > 0 ? 0 : 100 }[t], D = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: i.tilt_position }[t];
    h != null && (d.pos = h), D != null && (d.tilt = D), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), b.set(l, d);
  }
  function Mi(t, i, l, d) {
    const h = { entity_id: l, ...d || {} };
    return t === "cover" && Vr(i, h), de[l] = (de[l] || 0) + 1, No.set($d, JSON.stringify(de)), Pa.call(t, i, h) ? Promise.resolve() : Promise.resolve(se(t, i, h));
  }
  function zr(t) {
    const [i, l, d, h] = t.split("|");
    Mi(i, l, d, h ? JSON.parse(h) : null).catch(() => {
    });
  }
  function Xo(t, i) {
    Oe.set("pos|" + t, i), at.delete(t), Yn = Yn.map(() => ""), [A, rt].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((h) => Xe(h, i)));
    const l = A.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (l && (l.textContent = Math.round(i) + "%"), (g == null ? void 0 : g.id) === t) {
      const d = rt.querySelector(".tfMoreState"), h = rt.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(i) + "%", d.classList.add("live")), h && (h.textContent = "Currently " + Mt(t) + "%");
    }
    Or(t).forEach((d) => d.update(xa(t)));
  }
  const jr = (t, i) => {
    const l = t.shiftKey ? 10 : 1, d = { ArrowUp: i + l, ArrowRight: i + l, ArrowDown: i - l, ArrowLeft: i - l, PageUp: i + 25, PageDown: i - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Ja(t, i) {
    var me;
    const l = t.dataset.blocks;
    (me = t.setPointerCapture) == null || me.call(t, i.pointerId);
    const d = (fe) => {
      const ie = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (fe.clientX - ie.left) / ie.width * 100));
    }, h = d(i), D = i.clientX;
    let x = !1, M = Xn(l), R = h, K = 0;
    const j = () => {
      M = Math.abs(R - M) < 0.2 ? R : M + (R - M) * 0.14, Xo(l, M), K = requestAnimationFrame(j);
    }, H = () => {
      x || (x = !0, t.classList.add("fine"), K = requestAnimationFrame(j));
    }, le = setTimeout(H, 350), We = (fe) => {
      R = d(fe), Math.abs(fe.clientX - D) > 6 && (clearTimeout(le), H());
    }, Fe = () => {
      clearTimeout(le), cancelAnimationFrame(K), t.removeEventListener("pointermove", We), t.removeEventListener("pointerup", Fe), t.removeEventListener("pointercancel", Fe), t.classList.remove("fine"), Xo(l, x ? Math.round(M) : (Math.min(3, Math.floor(h / 25)) + 1) * 25), Co("pos", l);
    };
    t.addEventListener("pointermove", We), t.addEventListener("pointerup", Fe), t.addEventListener("pointercancel", Fe);
  }
  function Zn(t) {
    var h;
    const [i, l] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    q = { key: i, id: l, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, at.delete(i), On(), (h = A.querySelector(".tfOpen [data-close]")) == null || h.focus({ preventScroll: !0 });
  }
  function Ci(t) {
    var i;
    ge = t.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((l) => {
      var h;
      const d = l === t;
      l.classList.toggle("active", d), l.setAttribute("aria-expanded", String(d)), (h = l.querySelector(".panelExpanded")) == null || h.toggleAttribute("inert", !d);
    }), at.set("areas", Lr(((i = A.querySelector('[data-k="areas"]')) == null ? void 0 : i.style.order) || 1));
  }
  const Xa = {
    bright: { value: (t, i) => Math.round(i * 100), text: (t, i) => i ? i + "%" : "Off", send: (t, i) => i > 0 ? ["light", "turn_on", { brightness_pct: i }] : ["light", "turn_off", {}] },
    ct: { value: (t, i) => {
      const [l, d] = jt(t);
      return Math.round(l + i * (d - l));
    }, text: (t, i) => i.toLocaleString() + "k", send: (t, i) => ["light", "turn_on", { color_temp_kelvin: i }] },
    hue: { value: (t, i) => Math.round(i * 360), text: () => "Colour", send: (t, i) => {
      var l;
      return ["light", "turn_on", { hs_color: [i, Math.max(60, ((l = ot(t).hs_color) == null ? void 0 : l[1]) || 100)] }];
    } },
    pos: { value: (t, i) => Math.round(i * 100), text: (t, i) => Math.round(i) + "%", send: (t, i) => ["cover", "set_cover_position", { position: Math.round(i) }] },
    tilt: { value: (t, i) => Math.round(i * 100), text: (t, i) => "Tilt " + i + "%", send: (t, i) => ["cover", "set_cover_tilt_position", { tilt_position: i }] },
    vol: { value: (t, i) => Math.round(i * 100) / 100, text: (t, i) => Math.round(i * 100) + "%", send: (t, i) => ["media_player", "volume_set", { volume_level: i }] }
  };
  function ur(t, i, l, d) {
    var R;
    const h = Xa[i].value(l, d);
    Oe.set(i + "|" + l, h);
    const D = Math.round(d * 100) + "%", x = t.querySelector("i");
    if (i === "tilt") {
      x.style.width = "calc((100% - 6px) * " + d + ")";
      const [K, j] = t.querySelectorAll("span");
      K.classList.toggle("lit", d > 0.08), j.classList.toggle("lit", d > 0.92), at.delete(l), Yn = Yn.map(() => ""), Or(l).forEach((H) => H.update(xa(l)));
    } else if (x) x.style.width = D;
    else {
      let K = t.querySelector("b");
      K || (K = document.createElement("b"), t.appendChild(K)), K.style.left = D;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const M = (R = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : R.querySelector(".tfName .activityRowMeta, .tfMoreState");
    M && (M.textContent = Xa[i].text(l, h));
  }
  function Co(t, i) {
    const l = Oe.get(t + "|" + i), [d, h, D] = Xa[t].send(i, l), x = () => setTimeout(() => {
      Oe.delete(t + "|" + i), On();
    }, 1500);
    Mi(d, h, i, D).then(x, x);
  }
  function Gr(t) {
    t.addEventListener("click", (i) => {
      var d;
      const l = i.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel");
      if (vn && !i.target.closest(".tfBoardMenu,[data-board-more]") && Hn(), !(!l || !t.contains(l) || l.disabled))
        if (l.dataset.boardMore)
          (vn == null ? void 0 : vn.key) === l.dataset.boardMore ? Hn(!0) : va(l.dataset.boardMore, l);
        else if (l.dataset.boardAct) Rs(vn.key, l.dataset.boardAct);
        else if (l.dataset.boardShow) or(l.dataset.boardShow);
        else if (l.dataset.energyPick) Er(l.dataset.energyPick);
        else if (l.dataset.act) zr(l.dataset.act);
        else if (l.hasAttribute("data-details")) yi(!(g != null && g.details));
        else if (l.hasAttribute("data-details-close")) yi(!1);
        else if (l.dataset.summary) Zi(l.dataset.summary, l);
        else if (l.dataset.star) di(l.dataset.star);
        else if (l.hasAttribute("data-more-back"))
          g = g.back, bn();
        else if (l.hasAttribute("data-favs-edit")) mn("favourites", l);
        else if (l.dataset.acts) JSON.parse(l.dataset.acts).forEach(([h, D, x, M]) => Mi(h, D, x, M).catch(() => {
        }));
        else if (l.dataset.more) mn(l.dataset.more, l);
        else if (l.hasAttribute("data-more-close")) ki();
        else if (l.dataset.go) bo("room:" + l.dataset.go);
        else if (l.hasAttribute("data-area-back")) Ya();
        else if (l.dataset.open) Zn(l);
        else if (l.hasAttribute("data-close")) {
          const h = q;
          q = null, at.delete(h.key), On(), (d = A.querySelector('[data-open="' + CSS.escape(h.key + "|" + h.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else l.classList.contains("tfAreaPanel") && !l.classList.contains("active") && Ci(l);
    }), t.addEventListener("keydown", (i) => {
      var d, h, D, x, M, R, K;
      const l = i.target;
      if ((d = l.dataset) != null && d.open && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Zn(l)), (h = l.dataset) != null && h.energyPick && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Er(l.dataset.energyPick)), (D = l.classList) != null && D.contains("tfAreaPanel") && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Ci(l)), (x = l.dataset) != null && x.summary && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Zi(l.dataset.summary, l)), i.key === "Escape" && vn && t === A) {
        i.preventDefault(), Hn(!0);
        return;
      }
      if (i.key === "Escape" && Pn && t === A) {
        i.preventDefault(), bi(!1), (M = u("dashEditNav")) == null || M.focus();
        return;
      }
      if (i.key === "Escape" && Se && t === A && (i.preventDefault(), Ya()), (R = l.dataset) != null && R.blocks) {
        const j = l.dataset.blocks, H = jr(i, Math.round(Xn(j)));
        if (H == null) return;
        i.preventDefault(), Xo(j, H), clearTimeout(k.get(j)), k.set(j, setTimeout(() => Co("pos", j), 500));
        return;
      }
      if ((K = l.dataset) != null && K.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(i.key)) {
        i.preventDefault();
        const [j, H] = l.dataset.drag.split("|"), le = Number(l.getAttribute("aria-valuenow")) / 100, We = i.key === "Home" ? 0 : i.key === "End" ? 1 : Math.max(0, Math.min(1, le + (i.key === "ArrowLeft" || i.key === "ArrowDown" ? -0.05 : 0.05)));
        ur(l, j, H, We), Co(j, H);
      }
    }), t.addEventListener("pointerdown", (i) => {
      var j;
      const l = i.target.closest("[data-blocks]");
      if (l && i.button === 0) {
        i.preventDefault(), Ja(l, i);
        return;
      }
      const d = i.target.closest("[data-drag]");
      if (!d) return;
      const [h, D] = d.dataset.drag.split("|");
      if (h === "bright" && !ze(D)) {
        zr(gt("light", "toggle", D));
        return;
      }
      i.preventDefault(), (j = d.setPointerCapture) == null || j.call(d, i.pointerId);
      const x = h === "tilt" ? 3 : 0, M = (H) => {
        const le = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (H.clientX - le.left - x) / (le.width - x * 2)));
      };
      ur(d, h, D, M(i));
      const R = (H) => ur(d, h, D, M(H)), K = () => {
        d.removeEventListener("pointermove", R), d.removeEventListener("pointerup", K), d.removeEventListener("pointercancel", K), Co(h, D);
      };
      d.addEventListener("pointermove", R), d.addEventListener("pointerup", K), d.addEventListener("pointercancel", K);
    });
  }
  return A && w && (As(), Gr(A), Gr(rt), rt.addEventListener("click", (t) => {
    t.target === rt && ki();
  }), (Si = n.getElementById("homeNav")) == null || Si.addEventListener("click", () => {
    Se && Ya();
  }), (Ur = n.querySelector(".bottomNav")) == null || Ur.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Xd + "</button>"), (Ti = u("dashEditNav")) == null || Ti.addEventListener("click", () => bi(!Pn)), A.addEventListener("pointerdown", Hr), A.addEventListener("hass-action", (t) => {
    var d, h;
    const i = (h = (d = t.target).closest) == null ? void 0 : h.call(d, ".tfDac"), l = i == null ? void 0 : i.dataset.k;
    !l || !i.dataset.dac.startsWith("dash:") || Pn || (t.stopPropagation(), za.has(l) ? za.delete(l) : za.add(l), Un());
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Dr() !== Gn ? On() : Ua();
  }).observe(A), window.addEventListener("resize", Ua, { passive: !0 }), rt.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), g != null && g.details ? yi(!1) : ki());
  })), ae(), {
    update(t) {
      if (!w) return;
      const i = !Object.keys(v).length;
      v = t || {}, i ? Fn() : On();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      tt = !0, hn == null || hn.destroy(), hn = null, dn == null || dn.forEach((t) => t.destroy()), dn = null;
    },
    resume() {
      tt = !1, !(!w || !(A != null && A.querySelector("[data-tf]"))) && (Vt.isConnected && dt(Vt.style.order), ut());
    }
  };
}
const Bm = "0.44.0", gl = "move_assistant", Pm = "move_assistant", tc = "move_assistant_checkin_reminder";
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
        key: gl
      });
      u = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = Tu(s, {
      data: u,
      save: (m) => this._save(m),
      fire: (m, f) => this._fire(m, f),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, f) => {
        var w, L;
        return (L = (w = this._hass) == null ? void 0 : w.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(f, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, f;
        return Object.keys(((f = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : f.notify) || {}).sort();
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
        var f;
        const m = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (f = this._app) == null || f.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: gl }
    ).catch(() => {
    });
  }
  _save(s) {
    this._pendingJson = JSON.stringify(s), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: gl,
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
    const o = `config/automation/config/${tc}`;
    if (!s) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (f) {
        if ((f == null ? void 0 : f.status_code) !== 404 && (f == null ? void 0 : f.status) !== 404) throw f;
      }
      return;
    }
    const u = (f) => `${f}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: tc,
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
