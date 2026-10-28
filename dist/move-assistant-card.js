const au = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', ou = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:none;width:46px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{padding:0 10px}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfAName{font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:10px 0;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:8px;max-width:calc(100% - 20px)}.tfACMain{max-width:100%;font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfBoardTray{position:absolute;z-index:1;display:flex;flex-wrap:wrap;gap:8px}#app.tfEditing .tfBoardTray .pill{cursor:pointer}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', iu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', ru = `<main id="app"><div class="shell">
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
`, so = {
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
}, Nn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, yd = (n, s, i) => n + (s - n) * i, kl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), i = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, su = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), kd = {}, Ot = (n, s, i) => {
  const u = n + s + i;
  return kd[u] || (kd[u] = su(kl(n).map((h, f) => h + (kl(s)[f] - h) * i)));
}, Md = {}, Cs = (n) => Md[n] || (Md[n] = kl(n)), rl = (n, s, i, u) => (h) => {
  if (h <= 0) return 0;
  if (h >= 1) return 1;
  let f = 0, w = 1, L = h;
  for (let v = 0; v < 18; v++)
    L = (f + w) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * i + L * L * L < h ? f = L : w = L;
  return 3 * (1 - L) * (1 - L) * L * s + 3 * (1 - L) * L * L * u + L * L * L;
}, lu = { std: rl(0.2, 0, 0, 1), acc: rl(0.3, 0, 1, 1), dec: rl(0, 0, 0, 1) };
function Es(n, s) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || s ? "night" : "day");
}
function rc(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [Ot(s.clear[0], s.cloudy[0], 0.12), Ot(s.clear[1], s.cloudy[1], 0.12)], s.storm = [Ot(s.rain[0], "#000000", 0.22), Ot(s.rain[1], "#000000", 0.22)], s;
}
const Ml = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Cl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Sl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Tl(n, s = so) {
  const i = { ...so, ...s }, u = rc(i), h = String(n).split("/"), f = u[h[0]] ? h[0] : "clear", w = h[1] === "night", L = u[f][w ? 1 : 0], v = {
    night: w,
    clearness: f === "clear" ? 1 : f === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ml.map(() => ({ o: 0 })),
    rain: Cl.map(() => ({ o: 0, dy: -16 })),
    snow: Sl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (re) => Ml.map(() => ({ o: re }));
  return f === "clear" ? w ? (v.moon.o = 1, v.stars = N(1)) : v.sun.o = 1 : f === "partly" ? (v.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (v.moon = { x: 34, y: 33, d: 48, o: 1 }, v.stars = N(0.7)) : v.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : f === "cloudy" || f === "fog" ? (v.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? v.moon = { x: 40, y: 36, d: 40, o: 0 } : v.sun = { x: 40, y: 36, r: 20, o: 0 }) : (v.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? v.moon = { x: 38, y: 28, d: 36, o: 0 } : v.sun = { x: 38, y: 28, r: 18, o: 0 }, f === "snow" ? v.snow = Sl.map(() => ({ o: 1, dy: 0 })) : v.rain = Cl.map((re, te) => ({ o: f === "storm" && te === 1 ? 0 : 1, dy: 0 })), f === "storm" && (v.bolt = { o: 1, dy: 0 })), v;
}
const Cd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function du(n, s, i, u = so, h = !1) {
  const f = { ...so, ...u }, w = (R, B) => R > 0.01 && B > 0.01 ? "stay" : R > 0.01 ? "leave" : B > 0.01 ? "enter" : "none", L = (R, B, G, X) => {
    const j = R[0] + B * X, q = R[1] - (G - 1 - B) * X;
    return lu[R[2]](Nn((i - j) / Math.max(1e-3, q - j)));
  }, v = (R, B, G, X = 0, j = 1, q = 0) => {
    const $ = w(R.o, B.o);
    if ($ === "none") return { ...B, o: 0 };
    const O = L(Cd[G][$], X, j, q), Z = {};
    for (const ne in B) Z[ne] = h && $ !== "stay" && ne !== "o" ? $ === "leave" ? R[ne] : B[ne] : yd(R[ne], B[ne], O);
    return Z;
  }, N = L(Cd.sky, 0, 1, 0);
  let re, te;
  if (n.night !== s.night) {
    const R = Math.min(n.clearness, s.clearness), B = Ot(Ot(n.sky, s.sky, 0.5), f.dusk, 0.6 * R);
    re = N < 0.5 ? Ot(n.sky, B, N * 2) : Ot(B, s.sky, N * 2 - 1), te = R > 0.5 ? [n.sky, f.dusk, s.sky] : [n.sky, s.sky];
  } else
    re = Ot(n.sky, s.sky, N), te = [n.sky, s.sky];
  return {
    night: i < 0.5 ? n.night : s.night,
    clearness: yd(n.clearness, s.clearness, i),
    sky: re,
    skyStops: te,
    skyT: N,
    sun: v(n.sun, s.sun, "body"),
    moon: v(n.moon, s.moon, "body"),
    cloud: v(n.cloud, s.cloud, "cloud"),
    stars: s.stars.map((R, B) => v(n.stars[B], R, "fx", B, s.stars.length, 0.05)),
    rain: s.rain.map((R, B) => v(n.rain[B], R, "fx", B, s.rain.length, 0.05)),
    snow: s.snow.map((R, B) => v(n.snow[B], R, "fx", B, s.snow.length, 0.05)),
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
], Rn = (n, s) => (cu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, uu = 0, El = 1, Dl = 2, Rl = 3, Nl = 4, Dn = 5, Xi = 6, Fo = 7, Bl = 8, Ts = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), pu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), sc = (n, s, i) => {
  let u = !1;
  for (let h = 0, f = n.length - 1; h < n.length; f = h++) {
    const w = n[h], L = n[f];
    w[1] > i != L[1] > i && s < (L[0] - w[0]) * (i - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function lc(n, { size: s = 90, px: i = 2, oneBit: u = !1, colors: h = so, ink: f = "#26221e", paper: w = "#fbf9f6", clock: L = 0, idle: v = !1 } = {}) {
  const N = { ...so, ...h }, re = Math.sin, te = Math.PI * 2, R = Math.max(6, Math.round(s / i)), B = R / 90, G = v ? Math.floor(L / 100) * 100 : 0, X = v ? re(te * G / 3600) : 0, j = v ? 1.8 * re(te * G / 6400) : 0, q = v ? 0.9 * re(te * G / 4100) : 0, $ = v ? 0.8 * re(te * G / 5200) : 0, O = G / 3400 % 1, Z = v && n.bolt.o > 0.5 && (O < 0.04 || O > 0.08 && O < 0.11), ne = new Array(R * R), A = new Uint8Array(R * R), W = (x, S, M, E, se) => {
    M == null || x < 0 || S < 0 || x >= R || S >= R || (E >= 1 || E > Rn(x + 5, S + 3)) && (ne[S * R + x] = M, A[S * R + x] = se);
  }, ge = (x, S, M, E) => {
    for (let se = Math.max(0, Math.floor(S - M) - 1); se <= Math.min(R - 1, S + M + 1); se++) for (let V = Math.max(0, Math.floor(x - M) - 1); V <= Math.min(R - 1, x + M + 1); V++) E(V, se, V + 0.5 - x, se + 0.5 - S);
  }, Se = n.skyStops || [n.sky], g = n.skyT || 0;
  for (let x = 0; x < R; x++) {
    const S = n.night ? Nn(1 - (x + 0.5) / (R * 0.7)) * 0.85 : Nn(((x + 0.5) / R - 0.35) / 0.65) * 0.85;
    for (let M = 0; M < R; M++) {
      let E = Se[0];
      if (Se.length > 1) {
        const se = g * (Se.length - 1), V = Math.min(Se.length - 2, Math.floor(se));
        E = se - V > Rn(M, x) ? Se[V + 1] : Se[V];
      }
      S > Rn(M + 2, x + 5) && (E = n.night ? Ot(E, "#000000", 0.28) : Ot(E, "#ffffff", 0.2)), ne[x * R + M] = Z ? Ot(E, "#ffffff", 0.25) : E;
    }
  }
  if (n.sun.o > 0.01) {
    const x = n.sun.x * B, S = n.sun.y * B, M = Math.max(1, n.sun.r * B);
    if (v) {
      const E = M * (1.45 + 0.06 * X), se = Ot(N.sun, "#ffffff", 0.55);
      if (ge(x, S, E, (V, Q, oe, de) => {
        const We = Math.sqrt(oe * oe + de * de);
        We > M && We < E && W(V, Q, se, 0.26 * (1 - (We - M) / (E - M)) * n.sun.o, uu);
      }), n.sun.o > 0.5) {
        const V = Math.floor(G / 500) % 2, Q = Math.max(1, M * 0.22);
        for (let oe = 0; oe < 8; oe++) if (oe % 2 === V) for (let de = M + 1.5; de < M + 1.5 + Q; de += 0.7) W(Math.floor(x + Math.cos(oe * Math.PI / 4) * de), Math.floor(S + Math.sin(oe * Math.PI / 4) * de), N.sun, n.sun.o, Bl);
      }
    }
    ge(x, S, M, (E, se, V, Q) => {
      if (V * V + Q * Q > M * M) return;
      const oe = ((V * 0.643 + Q * 0.766) / M + 1) / 2;
      W(E, se, Nn((oe - 0.62) / 0.38) > Rn(E, se) ? N.sunEdge : N.sun, n.sun.o, El);
    });
  }
  if (Ml.forEach((x, S) => {
    const M = n.stars[S].o;
    if (M < 0.01) return;
    const E = Math.floor(x[0] * B), se = Math.floor(x[1] * B), V = v ? (Math.floor(G / 300) + S * 3) % 6 : 0;
    if (V === 5) return;
    const Q = Math.round(x[2] * B * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    W(E, se, N.star, M, Fo);
    for (let oe = 1; oe <= Q; oe++) {
      const de = oe === Q && Q > 1 ? Ot(N.star, n.sky, 0.5) : N.star;
      W(E - oe, se, de, M, Fo), W(E + oe, se, de, M, Fo), W(E, se - oe, de, M, Fo), W(E, se + oe, de, M, Fo);
    }
  }), n.moon.o > 0.01) {
    const x = Math.max(1.5, n.moon.d * B * 0.37), S = n.moon.x * B, M = n.moon.y * B + (v && $ > 0.4 ? -1 : 0), E = S + 0.547 * x, se = M - 0.503 * x, V = 0.82 * x, Q = Ot(N.moon, "#ffffff", 0.6);
    ge(S, M, x, (oe, de, We, $e) => {
      if (We * We + $e * $e > x * x) return;
      const St = oe + 0.5 - E, Jt = de + 0.5 - se;
      St * St + Jt * Jt <= V * V || W(oe, de, Nn(($e + x) / (2 * x) * 1.1 - 0.1) > Rn(oe, de) ? N.moon : Q, n.moon.o, Dl);
    });
  }
  const ke = Math.max(2, Math.round(15.65 * B)), Ce = Math.max(1, Math.round(5.87 * B * 0.5));
  Cl.forEach((x, S) => {
    const M = n.rain[S];
    let E = M.dy, se = M.o;
    if (se < 0.01) return;
    if (v) {
      const oe = (G / 950 + S / 3) % 1;
      E += -5 + oe * 14, se *= oe < 0.18 ? oe / 0.18 : oe > 0.72 ? (1 - oe) / 0.28 : 1;
    }
    const V = (x[0] + 3 + j) * B, Q = (x[1] + E) * B;
    for (let oe = 0; oe < ke; oe++) for (let de = 0; de < Ce; de++) W(Math.floor(V - 0.208 * oe) + de, Math.floor(Q) + oe, N.rain, se, Nl);
  });
  const Oe = Math.max(0, Math.round(7.34 * B / 2.6));
  if (Sl.forEach((x, S) => {
    const M = n.snow[S];
    let E = M.dy, se = 0, V = M.o;
    if (V < 0.01) return;
    if (v) {
      const de = (G / 3200 + S / 5) % 1;
      E += -6 + de * 14, se = 1.5 * re(te * (de * 1.5 + S / 5)), V *= de < 0.2 ? de / 0.2 : de > 0.75 ? (1 - de) / 0.25 : 1;
    }
    const Q = Math.floor((x[0] + 3.67 + se + j) * B), oe = Math.floor((x[1] + 3.67 + E) * B);
    W(Q, oe, N.snow, V, Dn);
    for (let de = 1; de <= Oe; de++)
      W(Q - de, oe, N.snow, V, Dn), W(Q + de, oe, N.snow, V, Dn), W(Q, oe - de, N.snow, V, Dn), W(Q, oe + de, N.snow, V, Dn), Oe > 1 && de < Oe && (W(Q - de, oe - de, N.snow, V, Dn), W(Q + de, oe - de, N.snow, V, Dn), W(Q - de, oe + de, N.snow, V, Dn), W(Q + de, oe + de, N.snow, V, Dn));
  }), n.bolt.o > 0.01)
    if (R >= 30) {
      const x = 39 + j, S = 50 + n.bolt.dy;
      for (let M = Math.floor(S * B); M <= (S + 28) * B; M++) for (let E = Math.floor(x * B); E <= (x + 13) * B; E++)
        sc(mu, (E + 0.5) / B - x, (M + 0.5) / B - S) && W(E, M, N.sun, n.bolt.o, Xi);
    } else {
      const x = R / 18, S = 7, M = 10 + Math.round(n.bolt.dy * 0.2);
      pu.forEach((E, se) => E.split("").forEach((V, Q) => {
        if (V !== "#") return;
        const oe = Math.floor((S + Q) * x), de = Math.floor((M + se) * x);
        for (let We = de; We < Math.max(de + 1, Math.floor((M + se + 1) * x)); We++) for (let $e = oe; $e < Math.max(oe + 1, Math.floor((S + Q + 1) * x)); $e++) W($e, We, N.sun, n.bolt.o, Xi);
      }));
    }
  if (n.cloud.o > 0.01) {
    const x = Math.max(3, n.cloud.w * B), S = x * 0.6665, M = (n.cloud.x + j) * B - x / 2, E = (n.cloud.y + q) * B - S / 2, se = Ot(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), V = Ot(se, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(E) - 1); Q <= Math.min(R - 1, E + S + 1); Q++) for (let oe = Math.max(0, Math.floor(M) - 1); oe <= Math.min(R - 1, M + x + 1); oe++) {
      const de = (oe + 0.5 - M) / x, We = (Q + 0.5 - E) / x;
      Ts(de, We) && W(oe, Q, !Ts(de, We + 1 / x) || Nn((We - 0.42) / 0.25) * 0.8 > Rn(oe, Q) ? V : se, n.cloud.o, Rl);
    }
  }
  return dc(ne, A, R, R, { oneBit: u, ink: f, paper: w, snowInk: !n.night });
}
function dc(n, s, i, u, { oneBit: h, ink: f, paper: w, snowInk: L }) {
  const v = new Uint8ClampedArray(i * u * 4), N = Cs(f), re = Cs(w);
  for (let te = 0; te < u; te++) for (let R = 0; R < i; R++) {
    const B = te * i + R, G = s[B];
    if (n[B] == null) continue;
    let X = Cs(n[B]);
    if (h) {
      let j;
      G === Nl || G === Bl ? j = !0 : G === Dn ? j = L : G === Fo || G === Xi ? j = !1 : j = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= Rn(R, te), (G === El || G === Dl || G === Rl || G === Xi) && (R > 0 && s[B - 1] !== G || R < i - 1 && s[B + 1] !== G || te > 0 && s[B - i] !== G || te < u - 1 && s[B + i] !== G) && (j = !0), X = j ? N : re;
    }
    v[B * 4] = X[0], v[B * 4 + 1] = X[1], v[B * 4 + 2] = X[2], v[B * 4 + 3] = 255;
  }
  return { w: i, h: u, data: v };
}
const hu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fu = (n) => Es(n, !1).split("/")[0], sl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", bu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], yu = [".##", "##.", ".#.", "#.."];
function cc(n, { width: s, height: i, colors: u, wave: h = 0.38, soft: f = 6, glow: w = 0.6 }) {
  const L = { ...so, dawn: "#e5a77e", ...u }, v = rc(L), N = s, re = i, te = N / 6, R = te / 2, B = Math.PI * 2, G = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(12)].map((O, Z) => {
    const ne = G[Math.min(Z, G.length - 1)], A = fu(ne.cond), W = Z % 2 === 1;
    return { cond: ne.cond, k: A, night: W, sky: v[A][W ? 1 : 0], cover: hu[A] };
  }), j = (O) => re * (0.5 - h * Math.cos(B * (O / te - 0.25)));
  return { C: L, S: X, W: N, H: re, cw: te, sw: R, TAU: B, yb: j, side: (O, Z, ne) => {
    const A = (O ? j(Z) - ne : ne - j(Z)) / Math.max(3, f * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (O) => {
    const Z = ((O / te - 0.25) % 1 + 1) % 1, ne = Math.max(0, Math.min(5, Math.round(O / te - 0.25))), A = Math.max(0, Math.min(5, Math.round(O / te - 0.75))), W = 1 - (X[2 * ne].cover + X[2 * A + 1].cover) / 2, ge = Math.sin(Math.PI * Math.min(1, Math.max(0, j(O) / re)));
    return { c: Z < 0.5 ? L.dusk : L.dawn, a: w * (0.2 + 0.8 * W) * ge * ge };
  }, soft: f, tw: te * 0.3, sy: re / 90 };
}
function uc(n, { clock: s = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: h, sw: f, side: w, C: L, TAU: v, sy: N } = n, re = s, te = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((R, B) => {
    const G = sl(u * 977 + B * 131 + 7), X = (B + 0.5) * f, j = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let q = 0; q < j; q++) {
      const $ = X + (G() - 0.5) * f * 1.6, O = (6 + G() * 76) * N, Z = G() < 0.35, ne = 1.8 + G() * 1.6, A = w(!0, $, O) * (Z ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(v * re / 2600 + q * 1.7 + B) : 1);
      A >= 0.03 && te.stars.push({ x: $, y: O, big: Z, size: ne, o: A });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const q = X + (G() - 0.5) * f * 0.3, $ = Math.min(15, f * 0.29);
      te.suns.push({ x: q, y: 32 * N, rad: $, halo: $ * 2.8 * (i ? 1 + 0.07 * Math.sin(v * re / 3600 + B) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const q = Math.min(0.78, f * 0.55 / 34), $ = X - 23 * q + (G() - 0.5) * f * 0.2;
      te.moons.push({ x: $ + 23 * q, y: (4 + (i ? 0.8 * Math.sin(v * re / 5200 + B) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), h.forEach((R, B) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!G) return;
    const X = sl(u * 577 + B * 71 + 3), j = (B + 0.5) * f, q = R.k === "rain" || R.k === "storm" || R.night ? L.cloudNight : L.cloudDay, $ = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let O = 0; O < G; O++) {
      const Z = f / 46 * (R.k === "partly" ? 0.85 : 0.75 + X() * 0.55), ne = j + (R.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (R.k === "partly" ? 40 : 6 + X() * 26) * N, W = i ? 2.5 * Math.sin(v * re / 9e3 + B * 1.3 + O * 2.1) : 0, ge = i ? 0.9 * Math.sin(v * re / 6100 + B + O) : 0;
      te.clouds.push({ x: ne - 23 * Z + W, y: A - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: q, o: $ * (G > 1 && O === 0 ? 0.85 : 1) });
    }
  }), h.forEach((R, B) => {
    const G = sl(u * 313 + B * 29 + 11), X = (B + 0.5) * f, j = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < j; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 44 + G() * 36, ne = 1;
      if (i) {
        const W = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        O -= 0.21 * (W - (Z - 44)), Z = 44 + W, ne = Math.min(1, W / 6, (36 - W) / 6);
      }
      Z *= N;
      const A = w(R.night, O, Z) * ne;
      A >= 0.05 && te.drops.push({ x: O, y: Z, o: A });
    }
    const q = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < q; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 40 + G() * 44, ne = 1;
      if (i) {
        const W = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + W, O += 1.6 * Math.sin(v * re / 2800 + $ * 1.9 + B), ne = Math.min(1, W / 6, (44 - W) / 6);
      }
      Z *= N;
      const A = w(R.night, O, Z) * ne;
      A >= 0.05 && te.flakes.push({ x: O, y: Z, o: A });
    }
    if (R.k === "fog") {
      const $ = R.night ? "#c8ccd6" : "#ffffff", O = R.night ? 0.28 : 0.62, Z = i ? 4 * Math.sin(v * re / 8e3 + B) : 0;
      for (let ne = 0; ne < 4; ne++) te.fogs.push({ x: X - f * 0.75 + ne % 2 * f * 0.18 + (ne % 2 ? Z : -Z), y: (30 + ne * 13) * N, w: f * 1.3, c: $, a: O });
    }
    if (R.k === "storm") {
      const $ = (re / 3400 + B * 0.37) % 1;
      te.bolts.push({ x: X + (G() - 0.5) * f * 0.3 - 5, y: 36 * N, o: i && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), te;
}
function ku(n, s, i, u, h, f, w, L) {
  const { S: v, C: N, cw: re, yb: te, glowAt: R, soft: B, tw: G, sy: X } = n, j = new Array(i * u), q = new Uint8Array(i * u), $ = new Uint8Array(i * u), O = (x, S, M, E, se) => {
    M == null || x < 0 || S < 0 || x >= i || S >= u || (E >= 1 || E > Rn(x + 5, S + 3)) && (j[S * i + x] = M, q[S * i + x] = se);
  }, Z = (x, S, M, E) => {
    for (let se = Math.max(0, Math.floor(S - M) - 1); se <= Math.min(u - 1, S + M + 1); se++) for (let V = Math.max(0, Math.floor(x - M) - 1); V <= Math.min(i - 1, x + M + 1); V++) E(V, se, V + 0.5 - x, se + 0.5 - S);
  }, ne = (x, S, M) => {
    for (let se = 0; se < x.length - 1; se++) {
      const V = (se + S) * re;
      if (M < V - G / 2) return [x[se], x[se], 0];
      if (M <= V + G / 2) return [x[se], x[se + 1], (M - V + G / 2) / G];
    }
    const E = x[x.length - 1];
    return [E, E, 0];
  }, A = v.filter((x) => !x.night).map((x) => x.sky), W = v.filter((x) => x.night).map((x) => x.sky), ge = B / f, Se = 16 * X / f;
  for (let x = 0; x < i; x++) {
    const S = (x + 0.5) * h, M = te(S) / f, E = ne(A, 0.75, S), se = ne(W, 1.25, S), V = R(S);
    for (let Q = 0; Q < u; Q++) {
      const oe = Rn(x, Q), de = Q + 0.5 - M, We = (ge > 0.01 ? Nn(0.5 + de / ge) : de > 0 ? 1 : 0) > oe;
      let $e = We ? E[2] > oe ? E[1] : E[0] : se[2] > oe ? se[1] : se[0];
      (We ? Nn(((Q + 0.5) / u - 0.45) / 0.55) * 0.7 : Nn(1 - (Q + 0.5) / (u * 0.55)) * 0.7) > Rn(x + 2, Q + 5) && ($e = We ? Ot($e, "#ffffff", 0.18) : Ot($e, "#000000", 0.25)), We && de >= 0 && de < Se && V.a * 1.3 * (1 - de / Se) > Rn(x + 6, Q + 1) && ($e = V.c), j[Q * i + x] = $e, $[Q * i + x] = We ? 0 : 1;
    }
  }
  const g = Ot(N.sun, "#ffffff", 0.55), ke = Ot(N.moon, "#ffffff", 0.6);
  s.stars.forEach((x) => {
    const S = Math.floor(x.x / h), M = Math.floor(x.y / f);
    if (S < 0 || M < 0 || S >= i || M >= u || !$[M * i + S] || x.o < 0.15) return;
    const E = x.o > 0.45 ? N.star : Ot(N.star, j[M * i + S], 0.5), se = x.big && x.o > 0.6 ? Math.floor(x.size / h) : 0;
    O(S, M, E, 1, Fo);
    for (let V = 1; V <= se; V++) [[S - V, M], [S + V, M], [S, M - V], [S, M + V]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < i && Q[1] < u && $[Q[1] * i + Q[0]] && O(Q[0], Q[1], E, 1, Fo);
    });
  }), s.suns.forEach((x) => {
    const S = Math.max(1.5, x.rad / h), M = x.x / h, E = x.y / f, se = x.halo / h * 0.85;
    if (Z(M, E, se, (V, Q, oe, de) => {
      const We = Math.sqrt(oe * oe + de * de);
      We > S && We < se && !$[Q * i + V] && O(V, Q, g, 0.3 * (1 - (We - S) / (se - S)), 0);
    }), L) {
      const V = Math.floor(w / 500) % 2, Q = Math.max(1, S * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === V) for (let de = S + 1.2; de < S + 1.2 + Q; de += 0.7) O(Math.floor(M + Math.cos(oe * Math.PI / 4) * de), Math.floor(E + Math.sin(oe * Math.PI / 4) * de), N.sun, 1, Bl);
    }
    Z(M, E, S, (V, Q, oe, de) => {
      oe * oe + de * de <= S * S && O(V, Q, Nn(((de / S + 1) / 2 - 0.6) / 0.4) > Rn(V, Q) ? N.sunEdge : N.sun, 1, El);
    });
  }), s.moons.forEach((x) => {
    const S = Math.max(1.5, x.d * 0.37 / h), M = x.x / h, E = x.y / f, se = M + 0.547 * S, V = E - 0.503 * S, Q = 0.82 * S;
    Z(M, E, S, (oe, de, We, $e) => {
      if (We * We + $e * $e > S * S) return;
      const St = oe + 0.5 - se, Jt = de + 0.5 - V;
      St * St + Jt * Jt > Q * Q && O(oe, de, Nn(($e + S) / (2 * S) * 1.1 - 0.1) > Rn(oe, de) ? N.moon : ke, 1, Dl);
    });
  }), s.clouds.forEach((x) => {
    const S = Math.max(3, x.w / h), M = S * 0.6665, E = x.x / h, se = x.y / f, V = Ot(x.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(se) - 1); Q <= Math.min(u - 1, se + M + 1); Q++) for (let oe = Math.max(0, Math.floor(E) - 1); oe <= Math.min(i - 1, E + S + 1); oe++) {
      const de = (oe + 0.5 - E) / S, We = (Q + 0.5 - se) / S;
      Ts(de, We) && O(oe, Q, !Ts(de, We + 1 / S) || Nn((We - 0.42) / 0.25) * 0.8 > Rn(oe, Q) ? V : x.fill, x.o, Rl);
    }
  }), s.fogs.forEach((x) => {
    const S = Math.floor(x.y / f), M = Math.max(S, Math.floor((x.y + 6 * X) / f) - 1), E = Math.floor(x.x / h), se = Math.floor((x.x + x.w) / h);
    for (let V = S; V <= M; V++) for (let Q = E; Q <= se; Q++) {
      const oe = (Q - E) / Math.max(1, se - E);
      O(Q, V, x.c, x.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  s.drops.forEach((x) => {
    const S = x.x / h, M = Math.floor(x.y / f);
    for (let E = 0; E < Ce; E++) O(Math.floor(S - 0.208 * E * f / h), M + E, N.rain, x.o, Nl);
  });
  const Oe = Math.max(0, Math.round(4.4 / h / 2.6));
  return s.flakes.forEach((x) => {
    const S = Math.floor(x.x / h), M = Math.floor(x.y / f);
    O(S, M, N.snow, x.o, Dn);
    for (let E = 1; E <= Oe; E++)
      O(S - E, M, N.snow, x.o, Dn), O(S + E, M, N.snow, x.o, Dn), O(S, M - E, N.snow, x.o, Dn), O(S, M + E, N.snow, x.o, Dn);
  }), s.bolts.forEach((x) => {
    if (h <= 3.5)
      for (let S = Math.floor(x.y / f); S <= (x.y + 24) / f; S++) for (let M = Math.floor(x.x / h); M <= (x.x + 11) / h; M++)
        sc(xu, (M + 0.5) * h - x.x, (S + 0.5) * f - x.y) && O(M, S, N.sun, 1, Xi);
    else {
      const S = Math.round(x.x / h), M = Math.round(x.y / f);
      yu.forEach((E, se) => E.split("").forEach((V, Q) => {
        V === "#" && O(S + Q, M + se, N.sun, 1, Xi);
      }));
    }
  }), { col: j, ids: q };
}
function Mu(n, s) {
  const i = s.px, u = Math.max(6, Math.round(s.width / i)), h = Math.max(6, Math.round(s.height / i)), f = s.width / u, w = s.height / h, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (B) => {
    const G = cc(B, s);
    return ku(G, uc(G, { clock: L, ambient: s.ambient, seed: s.seed }), u, h, f, w, L, s.ambient);
  }, N = v(n), re = s.reveal == null ? 1 : Nn(s.reveal);
  let te = N.col, R = N.ids;
  if (re < 1) {
    const B = s.prev ? v(s.prev) : null, G = re * (u + 12);
    te = new Array(u * h), R = new Uint8Array(u * h);
    for (let X = 0; X < u * h; X++) {
      const j = X % u, q = X / u | 0;
      (s.reduce ? re : Nn((G - j) / 12)) > Rn(j, q) ? (te[X] = N.col[X], R[X] = N.ids[X]) : B ? (te[X] = B.col[X], R[X] = B.ids[X]) : (te[X] = null, R[X] = 255);
    }
  }
  return dc(te, R, u, h, { oneBit: s.oneBit, ink: s.ink, paper: s.paper, snowInk: !1 });
}
function Cu(n, s, i) {
  const u = i.width, h = i.height, f = i.reveal == null ? 1 : Nn(i.reveal), w = (R, B) => {
    const G = cc(B, i);
    Su(R, G, uc(G, i));
  };
  if (n.clearRect(0, 0, u, h), f >= 1) {
    w(n, s);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = f, w(n, s), n.restore();
    return;
  }
  const L = n.canvas, v = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (v.width !== L.width || v.height !== L.height) && (v.width = L.width, v.height = L.height);
  const N = v.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, h), w(N, s);
  const re = f * (u + 64) - 64, te = N.createLinearGradient(re, 0, re + 64, 0);
  te.addColorStop(0, "rgba(0,0,0,1)"), te.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = te, N.fillRect(0, 0, u, h), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Su(n, s, i) {
  const { W: u, H: h, S: f, C: w, cw: L, yb: v, glowAt: N, soft: re, tw: te, sy: R } = s, B = (g, ke) => {
    const Ce = Cs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, G = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const x = (Oe + ke) * L, S = (x - te / 2) / u, M = (x + te / 2) / u;
      S > 0 && S < 1 && Ce.addColorStop(S, g[Oe]), M > 0 && M < 1 && Ce.addColorStop(M, g[Oe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), j = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Oe = u * Ce / X, x = g == null ? 0 : v(Oe) + g;
      Ce ? n.lineTo(Oe, x) : n.moveTo(Oe, x);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Oe = u * Ce / X;
      n.lineTo(Oe, v(Oe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, h);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = N(u * g / 64);
    q.addColorStop(g / 64, B(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, j(g * 2 * R, (g + 1) * 2 * R);
  n.fillStyle = G(f.filter((g) => g.night).map((g) => g.sky), 1.25);
  const $ = Math.max(0.5, re), O = 6;
  n.globalAlpha = 1, j(null, -$);
  for (let g = 0; g < O; g++)
    n.globalAlpha = 1 - (g + 0.5) / O, j(-$ + 2 * $ * g / O, -$ + 2 * $ * (g + 1) / O);
  n.globalAlpha = 1;
  const Z = new Path2D(bu), ne = new Path2D(vu), A = new Path2D(gu), W = new Path2D(wu);
  n.fillStyle = w.star, i.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ge = Ot(w.sun, "#ffffff", 0.55);
  i.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, B(ge, 0.42)), ke.addColorStop(0.7, B(ge, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Ot(w.moon, "#ffffff", 0.6);
  i.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ne), n.restore();
  }), i.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), i.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, B(g.c, 0)), ke.addColorStop(0.25, B(g.c, g.a)), ke.addColorStop(0.75, B(g.c, g.a)), ke.addColorStop(1, B(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * R);
  }), n.fillStyle = w.rain, i.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
function Tu(n, s) {
  var hd, fd, gd, vd, bd, wd, xd;
  const i = (e) => n.getElementById(e), u = i("workoutView"), h = i("workoutNameInput");
  let f = !0;
  const w = i("homeClock");
  function L() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const v = i("createFlow"), N = i("createMovementsSlot"), re = i("createTimingSlot"), te = i("createFinishSlot"), R = i("movementStepSummary"), B = i("timingStepSummary"), G = i("finishStepSummary"), X = i("continueToTiming"), j = i("continueToFinish"), q = i("finishMoveButton");
  let $ = !1, O = [];
  function Z(e) {
    !e || O.some((o) => o.node === e) || O.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ne(e, o) {
    e && (Z(e), o.appendChild(e));
  }
  function A() {
    [...O].reverse().forEach(({ node: e, parent: o, next: r }) => {
      o && (r && r.parentNode === o ? o.insertBefore(e, r) : o.appendChild(e));
    }), O = [];
  }
  function W(e) {
    n.querySelectorAll(".createStep").forEach((o) => {
      o.classList.toggle("active", o.dataset.createStep === e);
    }), e === "timing" && ($ = !0), ge();
  }
  function ge() {
    var J, ee;
    if (!rt) return;
    ze[pt];
    const e = ot.filter((K) => !K.hidden), o = e.filter((K) => K.kind !== "rest").length, r = e.filter((K) => K.kind === "rest").length;
    R.textContent = o ? o + " movement" + (o === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const c = o > 0, p = n.querySelector('[data-open-step="timing"]'), k = n.querySelector('[data-open-step="finish"]');
    p.disabled = !c, X.disabled = !c, B.textContent = c ? Mn(S.value) + " · " + Vt(M.value) + " movement · " + Vt(E.value) + " rest" : "Add a movement first", k.disabled = !(c && $);
    const _ = ((h == null ? void 0 : h.value) || "").trim(), P = [];
    (J = i("includeWarmupPreset")) != null && J.checked && P.push("warm-up"), (ee = i("includeCooldownPreset")) != null && ee.checked && P.push("cooldown"), G.textContent = _ ? _ + (P.length ? " · " + P.join(" + ") : "") : P.length ? P.join(" + ") : "Name and optional extras";
  }
  function Se() {
    var Me, Ve, Te;
    v.hidden = !1, $ = !1;
    const e = n.querySelector(".editNameRow"), o = i("createMoveOptions"), r = n.querySelector(".timeTiles"), c = i("routineSummaryModal"), p = n.querySelector(".tempoRevealRow"), k = i("tempoExperiment"), _ = (Me = i("warmupList")) == null ? void 0 : Me.closest("section"), P = i("movementCreatorLaunch"), J = i("movementCreator"), ee = (Ve = i("strengthList")) == null ? void 0 : Ve.closest("section"), K = (Te = i("cooldownList")) == null ? void 0 : Te.closest("section");
    [o == null ? void 0 : o.querySelector(".createExtras"), _, P, J, ee, K].forEach((ye) => ye && ne(ye, N)), [o, r, c, p, k].forEach((ye) => ne(ye, re)), ne(e, te), W("movements"), ge();
  }
  function g() {
    A(), v.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || W(e.dataset.openStep);
  })), X.addEventListener("click", () => {
    X.disabled || W("timing");
  }), j.addEventListener("click", () => W("finish")), q.addEventListener("click", () => i("saveWorkoutEdit").click());
  const ke = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Ce = i("homeNav"), Oe = i("settingsNav");
  function x(e) {
    Object.entries(ke).forEach(([o, r]) => r.classList.toggle("active", o === e)), Ce.classList.toggle("active", e === "home"), Oe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(xi, 400), e === "settings" && (requestAnimationFrame(() => Sr(n.querySelector(".tab.active"), !1)), as());
  }
  const S = i("totalTime"), M = i("workTime"), E = i("restTime"), se = i("totalOut"), V = i("workOut"), Q = i("restOut"), oe = i("totalFill"), de = i("workFill"), We = i("restFill"), $e = i("roundsInput"), St = i("roundsFill"), Jt = i("roundsOut"), jn = i("totalLabel"), Bt = i("routineSummaryModal"), Ye = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let kt = Ye.map((e) => ({ ...e })), ot = [
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
  const Qt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let pn = Qt.map((e) => ({ ...e }));
  const ci = {
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
  }, it = qa(s.data), ze = it.profiles;
  let pt = ze[it.selected] ? it.selected : it.order.find((e) => ze[e]) || "kettlebell";
  function qa(e) {
    const o = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = o.profiles && Object.keys(o.profiles).length ? o.profiles : JSON.parse(JSON.stringify(ci)), c = (Array.isArray(o.order) ? o.order : Object.keys(r)).filter((p) => r[p]);
    return Object.keys(r).forEach((p) => {
      c.includes(p) || c.push(p);
    }), {
      v: 1,
      profiles: r,
      order: c,
      selected: o.selected || c[0],
      history: Array.isArray(o.history) ? o.history : [],
      checkins: (Array.isArray(o.checkins) ? o.checkins : ui(o.energy)).map(Oo),
      settings: { ...o.settings || {} }
    };
  }
  function ui(e) {
    if (!Array.isArray(e)) return [];
    const o = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((c) => {
      const p = new Date(c.at);
      if (isNaN(p)) return;
      const k = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0"), _ = p.getHours() < 14 ? "morning" : "evening";
      if (r.some((J) => J.date === k && J.slot === _)) return;
      const P = o.indexOf(c.value) + 1;
      P > 0 && r.push({ date: k, slot: _, mood: null, energy: P, at: c.at });
    }), r;
  }
  function Oo(e) {
    if (e.scale === 100) return e;
    const o = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: o(e.mood), energy: o(e.energy), scale: 100 };
  }
  function an() {
    rt || (it.selected = pt, it.order = it.order.filter((e) => ze[e] && e !== ft), s.save(it));
  }
  function Xe() {
    return it.settings;
  }
  function kn(e) {
    const o = ze[e];
    if (!o) return;
    pt = e;
    const r = i("workoutNameInput");
    if (r && (r.value = o.name), S.value = o.total, M.value = o.work, E.value = o.rest, $e.value = o.rounds || 1, o.customSequence) {
      const c = (o.sequence || []).map((k) => ({ ...k })), p = (k) => c.filter((_) => _.presetRole === k).map(({ presetRole: _, ...P }) => P);
      kt = (o.warmup || p("warmup")).map((k) => ({ ...k })), pn = (o.cooldown || p("cooldown")).map((k) => ({ ...k })), ot = c.filter((k) => !k.presetRole), po(o.preset || "movement", !1);
    } else
      S.min = 3, S.max = 40, S.step = 1, M.min = 20, M.max = 60, M.step = 5, E.min = 5, E.max = 30, E.step = 5, kt = (o.warmup || Ye).map((c) => ({ ...c })), pn = (o.cooldown || Qt).map((c) => ({ ...c })), ot = o.strength.map((c) => Array.isArray(c) ? (([p, k, _, P = !1]) => ({ id: p, name: k, group: _, kind: "work", hidden: !!P }))(c) : { ...c });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), H();
  }
  function pi(e, o, r) {
    const c = e.getBoundingClientRect(), p = c.width / 2, k = c.height / 2, _ = o - p, P = r - k;
    let J = 1 / 0, ee = 1 / 0;
    _ !== 0 && (J = p / Math.abs(_)), P !== 0 && (ee = k / Math.abs(P));
    const K = Math.min(Math.max(1 / Math.min(J, ee), 0), 1);
    let Y = Math.atan2(P, _) * (180 / Math.PI) + 90;
    return Y < 0 && (Y += 360), { edge: K, angle: Y };
  }
  function vt(e, o, r = !1) {
    const c = e.getBoundingClientRect(), p = o.clientX - c.left, k = o.clientY - c.top, { edge: _, angle: P } = pi(e, p, k), J = r ? 100 : _ * 100;
    e.style.setProperty("--edge-proximity", J.toFixed(3)), e.style.setProperty("--cursor-angle", P.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || J >= 30);
  }
  function Be(e) {
    e.addEventListener("pointermove", (r) => vt(e, r, !1)), e.addEventListener("pointerenter", (r) => vt(e, r, !1)), e.addEventListener("pointerdown", (r) => vt(e, r, !0));
    const o = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", o), e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o);
  }
  Be(i("addWorkoutPanel"));
  let rt = !1, ft = null;
  function Pe(e) {
    return String(e ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
  }
  function Va(e) {
    return e.summary ? e.summary : e.customSequence ? Mn(e.total) + " · custom move" : Mn(e.total) + " · " + Vt(e.work) + " / " + Vt(e.rest) + " · warm-up + cooldown";
  }
  function lo(e, o) {
    var k;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const c = o.activityCount ?? (((k = o.sequence) == null ? void 0 : k.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Pe(o.name) + '</div><div class="sub">' + Pe(Va(o)) + '</div><span class="sourceTag">' + Pe(o.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((o.rounds || 1) > 1 ? " × " + o.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Pe(o.name) + "</div></div>";
    const p = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(r, p), Be(r), r.addEventListener("click", (_) => {
      _.target.closest("button") || kn(e);
    }), r.addEventListener("keydown", (_) => {
      (_.key === "Enter" || _.key === " ") && !_.target.closest("button") && (_.preventDefault(), kn(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), kn(e), Za(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), kn(e), Ni();
    }), r;
  }
  function Gn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), it.order.forEach((e) => {
      ze[e] && lo(e, ze[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === pt));
  }
  Gn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    rt = !0, ft = "custom-" + Date.now(), ze[ft] = {
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
    }, kn(ft), Za(!0);
  });
  let Ee = [], je = 0, zt = 0, on = 1, mn = !1, Et = null, za = null, Lt = !1, Bn = it.settings.upcomingCount ?? "all", co = "movement";
  function Dt(e, o, r) {
    return (Number(e) - o) / (r - o) * 100;
  }
  function Vt(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 3600 && o % 3600 === 0 ? o / 3600 + " hr" : o >= 60 && o % 60 === 0 ? o / 60 + " min" : o >= 60 ? Math.round(o / 60) + " min" : Math.round(o) + " sec";
  }
  function Mn(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 60 && o % 60 === 0 ? o / 60 + " hr" : o >= 60 ? Math.floor(o / 60) + " hr " + o % 60 + " min" : o + " min";
  }
  function en() {
    oe.style.width = Dt(S.value, Number(S.min), Number(S.max)) + "%", de.style.width = Dt(M.value, Number(M.min), Number(M.max)) + "%", We.style.width = Dt(E.value, Number(E.min), Number(E.max)) + "%", V.textContent = Vt(M.value), Q.textContent = Vt(E.value);
    const e = Number($e.value) || 1;
    St.style.width = Dt(e, 1, 10) + "%", jn.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Cn(e) {
    return e.filter((o) => !o.hidden);
  }
  function at(e) {
    const o = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), p = o % 60;
    return (r ? r + ":" + String(c).padStart(2, "0") : c) + ":" + String(p).padStart(2, "0");
  }
  function uo(e) {
    let o;
    try {
      o = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const r = o.hostname.replace(/^(www|m|music)\./, "");
    let c = null;
    if (r === "youtu.be") c = o.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(r))
      if (o.pathname === "/watch") c = o.searchParams.get("v");
      else {
        const P = o.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        P && (c = P[2]);
      }
    if (!c || !/^[\w-]{11}$/.test(c)) return null;
    const p = (P) => {
      if (!P) return 0;
      if (/^\d+$/.test(P)) return Number(P);
      const J = P.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return J ? (Number(J[1]) || 0) * 3600 + (Number(J[2]) || 0) * 60 + (Number(J[3]) || 0) : 0;
    }, k = p(o.searchParams.get("t") || o.searchParams.get("start")), _ = p(o.searchParams.get("end"));
    return { id: c, start: k, end: _ > k ? _ : null };
  }
  function Un(e, o) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || o || 300);
    const r = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > r ? Math.round(c - r) : Number(e.duration) || 300;
  }
  function Ca(e, o) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(o === "hour" ? r * 3600 : o === "min" ? r * 60 : r);
  }
  function po(e, o = !0) {
    co = e, n.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const r = ze[pt];
    r && (r.preset = e), e === "work" ? (S.min = 30, S.max = 480, S.step = 30, M.min = 300, M.max = 7200, M.step = 300, E.min = 60, E.max = 1800, E.step = 60, o && (S.value = 60, M.value = 1500, E.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (S.min = 3, S.max = 40, S.step = 1, M.min = 20, M.max = 60, M.step = 5, E.min = 5, E.max = 30, E.step = 5, o && (S.value = 20, M.value = 45, E.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), en();
  }
  function C(e, o) {
    const r = co === "work";
    return e.map((c, p) => ({ ...c, id: o + "-" + p + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(M.value) }));
  }
  function D() {
    const e = ze[pt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !kt.length && (kt = C(Ye, "warm")), e.includeCooldown && !pn.length && (pn = C(Qt, "cool")), H());
  }
  function I() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const o = Math.max(1, Ee.length - 1), r = Bn;
    e.innerHTML = "";
    for (let k = 1; k <= o; k++) {
      const _ = document.createElement("option");
      _.value = String(k), _.textContent = String(k), e.appendChild(_);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const p = r === "all" ? "all" : String(Math.min(Number(r) || 1, o));
    e.value = p, Bn = p === "all" ? "all" : Number(p);
  }
  function H() {
    Number(S.value) * 60;
    const e = Number(M.value), o = Number(E.value), r = ze[pt], c = !!(r != null && r.customSequence), p = (c ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Cn(kt), k = Cn(ot), _ = c && !r.includeCooldown ? [] : Cn(pn);
    if (r && (r.total = Number(S.value), r.work = e, r.rest = o, r.rounds = Number($e.value) || 1, r.customSequence ? (r.sequence = ot.map((we) => ({ ...we })), r.warmup = kt.map((we) => ({ ...we })), r.cooldown = pn.map((we) => ({ ...we }))) : (r.strength = ot.map((we) => ({ ...we })), r.warmup = kt.map((we) => ({ ...we })), r.cooldown = pn.map((we) => ({ ...we })))), r != null && r.customSequence) {
      const we = [...p.map((et) => ({ ...et, section: "warmup" })), ...k, ..._.map((et) => ({ ...et, section: "cooldown" }))].map((et) => {
        if (et.kind === "video") return { ...et, duration: Un(et, e), rest: 0 };
        if (et.kind === "rest") {
          const Kt = et.useGlobalTiming === !0 ? o : Number(et.duration) || o;
          return { ...et, duration: Kt, rest: 0 };
        }
        const Zt = et.useGlobalTiming === !1 && Number(et.duration) || e;
        return { ...et, duration: Zt, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Ee = [], we.forEach((et, Zt) => {
        Ee.push(et);
        const Kt = we[Zt + 1];
        et.kind !== "rest" && Kt && Kt.kind !== "rest" && Ee.push({
          id: "auto-rest-" + Zt,
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
      Ee = [...p.map((we) => ({ ...we, section: "warmup" })), ...k, ..._.map((we) => ({ ...we, section: "cooldown" }))].map((we) => we.kind === "video" ? { ...we, duration: Un(we, e), rest: 0 } : we.kind === "rest" ? { ...we, duration: we.useGlobalTiming === !0 ? o : Number(we.duration) || o, rest: 0 } : { ...we, duration: we.useGlobalTiming === !1 && Number(we.duration) || e, rest: o }), Ee.forEach((we, et) => {
        var Zt;
        ((Zt = Ee[et + 1]) == null ? void 0 : Zt.kind) === "rest" && (we.rest = 0);
      }), Ee.length && (Ee[Ee.length - 1].rest = 0);
    const P = Math.max(1, Math.min(10, Number($e.value) || 1)), J = Ee, ee = (we) => P <= 1 ? null : we.section === "warmup" || we.presetRole === "warmup" ? "first" : we.section === "cooldown" || we.presetRole === "cooldown" ? "last" : we.kind === "video" && (we.videoRounds === "first" || we.videoRounds === "last") ? we.videoRounds : null, K = (we) => !!ee(we), Y = J.filter((we) => !K(we)), Me = J.filter(K), Ve = Y.length, Te = Y.reduce((we, et) => we + et.duration + et.rest, 0), ye = Me.reduce((we, et) => we + et.duration + et.rest, 0), ve = [
      Me.some((we) => we.section === "warmup" || we.presetRole === "warmup") && "warm-up",
      Me.some((we) => we.section === "cooldown" || we.presetRole === "cooldown") && "cooldown",
      Me.some((we) => we.kind === "video" && !we.section && !we.presetRole) && "video"
    ].filter(Boolean), lt = ve.length > 1 ? ve.slice(0, -1).join(", ") + " & " + ve[ve.length - 1] : ve[0] || "";
    Ee = [];
    const ct = (we, et) => {
      const Zt = ee(we);
      return !Zt || (Zt === "first" ? et === 1 : et === P);
    };
    for (let we = 1; we <= P; we++)
      if (J.filter((et) => ct(et, we)).forEach((et, Zt) => Ee.push({ ...et, id: et.id + (P > 1 ? "-r" + we : ""), round: we, roundIndex: Zt })), we < P && Ve)
        if (r != null && r.customSequence)
          Ee.push({ id: "round-break-" + we, name: "Rest", group: "Round " + (we + 1) + " next", kind: "rest", hidden: !1, duration: o, rest: 0, round: we, roundIndex: Ve, roundBreak: !0 });
        else {
          const et = Ee[Ee.length - 1];
          et.rest = o, et.roundBreakAfter = !0;
        }
    en();
    const _e = Ee.reduce((we, et) => we + et.duration + et.rest, 0), ut = Math.round(Te / 60), xt = Math.round(_e / 60), Je = P > 1 ? Mn(ut) + " × " + P + " rounds" + (ye ? " + " + Vt(ye) + " " + lt : "") + " (" + Mn(xt) + ")" : Mn(xt), Ue = [p.length ? "warm-up" : "", _.length ? "cooldown" : ""].filter(Boolean), Yt = r != null && r.customSequence ? Je + " · " + Ve + " items" + (Ue.length && !(P > 1 && ye) ? " · " + Ue.join(" + ") : "") : Je + " · " + Vt(e) + " / " + Vt(o) + (Ue.length && !(P > 1 && ye) ? " · " + Ue.join(" + ") : "");
    se.textContent = Vt(Te);
    const cn = Ee.filter((we) => !we.roundBreak).length, Nt = P > 1 ? cn + " activities · " + P + " rounds" : Ve + " activities";
    Jt.textContent = P > 1 ? P + " rounds · " + Mn(xt) + " total" : "1 round", i("roundsCount").textContent = P, n.querySelectorAll("[data-rounds-step]").forEach((we) => {
      we.disabled = Number(we.dataset.roundsStep) < 0 ? P <= 1 : P >= 10;
    }), r && (r.summary = Yt, r.activityCount = Ve);
    const No = n.querySelector(".workoutPanel.active .sub");
    No && (No.textContent = Yt), Bt.textContent = Yt, Qi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((we) => we.textContent = Nt), en(), mt(), Ga(), Go(), I(), rt && ge(), ke.workout.classList.contains("active") && !Et && kr();
  }
  const ce = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', be = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', he = {
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
  let le = null, Ae = null;
  function Fe(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ze(e = !1) {
    const o = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    o && (o.focus({ preventScroll: !0 }), e && o.select());
  }
  function Ge(e, o, r = {}) {
    const c = e.kind === "rest", p = e.kind === "video", k = p ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, _ = Number(c ? E.value : M.value), P = Fe(p ? e.useVideoLength === !1 ? e.duration : Un({ ...e, useVideoLength: !0 }) : k ? _ : e.duration || _), J = p && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ee = p ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Pe(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Pe(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([_e, ut]) => '<option value="' + _e + '"' + ((e.videoRounds || "every") === _e ? " selected" : "") + ">" + ut + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Pe(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Pe(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', K = p ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (J ? " · " + at(Un({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Vt(_), Y = document.createElement("div");
    Y.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), Y.dataset.index = o, Y.dataset.id = e.id;
    const Me = r.isNew ?? (Ae == null ? void 0 : Ae.item) === e, Ve = r.sheet ? '<div class="moveEditActions sheetActions">' + (Me ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Pe(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Me ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    Y.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (p ? " videoFields" : "") + '">' + ee + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (k ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Pe(K) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + P.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((_e) => '<option value="' + _e + '"' + (_e === P.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[_e] + "</option>").join("") + "</select></div></div>" + Ve + "</div>";
    const Te = (_e) => Y.querySelector("[data-f=" + _e + "]"), ye = () => {
      const _e = Te("global").checked;
      Te("dur").disabled = _e, Te("unit").disabled = _e, Y.querySelector(".creatorDurationRow").classList.toggle("isDisabled", _e);
    };
    Te("global").addEventListener("change", ye), ye();
    const ve = () => {
      var _e;
      if (r.sheet) {
        (_e = r.onCancel) == null || _e.call(r);
        return;
      }
      Me && Tt(), le = null, H();
    }, lt = () => {
      var xt;
      if (p) {
        ct();
        return;
      }
      const _e = Te("name").value.trim();
      if (!_e) {
        Te("name").focus();
        return;
      }
      e.name = _e, e.group = Te("group").value.trim() || (c ? "Rest" : "Movement");
      const ut = Te("global").checked;
      if (e.useGlobalTiming = ut, ut || (e.duration = Math.max(c ? 5 : 1, Ca(Te("dur").value, Te("unit").value))), r.sheet) {
        (xt = r.onSaved) == null || xt.call(r);
        return;
      }
      Me && (Ae = null), le = null, H(), Rt(Me ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, ct = () => {
      var Ue;
      const _e = Te("url").value.trim(), ut = uo(_e);
      if (!ut) {
        Te("urlError").hidden = !1, Te("url").classList.add("invalid"), Te("url").focus();
        return;
      }
      const xt = ut.id !== e.videoId;
      e.url = _e, e.videoId = ut.id, e.start = ut.start, e.end = ut.end, xt && (e.videoDuration = null, e.videoError = null);
      const Je = Te("name").value.trim();
      e.autoName = !Je, e.name = Je || (xt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Te("rounds").value, e.useVideoLength = Te("global").checked, e.useVideoLength || (e.duration = Math.max(5, Ca(Te("dur").value, Te("unit").value))), r.sheet ? (Ue = r.onSaved) == null || Ue.call(r) : (Me && (Ae = null), le = null, H(), Rt(Me ? "Video added" : "Video updated")), (xt || !e.videoDuration || e.autoName && !e.videoTitle) && oi(e);
    };
    if (p && Te("url").addEventListener("input", () => {
      Te("urlError").hidden = !0, Te("url").classList.remove("invalid");
    }), Y.querySelector("[data-a=cancel]").addEventListener("click", ve), Y.querySelector("[data-a=save]").addEventListener("click", lt), r.sheet && !Me) {
      Y.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ut;
        return (ut = r.onHide) == null ? void 0 : ut.call(r);
      });
      const _e = Y.querySelector("[data-a=remove]");
      Ia(_e, _e.querySelector(".removeFill"), 1200, () => {
        var ut;
        return (ut = r.onRemove) == null ? void 0 : ut.call(r);
      });
    }
    return Y.addEventListener("keydown", (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), _e.stopPropagation(), ve()), _e.key === "Enter" && _e.target.matches("input") && (_e.preventDefault(), lt());
    }), Y;
  }
  function De(e, o) {
    const r = i(o);
    r.innerHTML = "", e.forEach((c, p) => {
      if (c === le && !ea()) {
        r.appendChild(Ge(c, p));
        return;
      }
      const k = document.createElement("div");
      k.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (zs(c) ? " noMeta" : ""), k.dataset.index = p, k.dataset.id = c.id;
      const _ = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : Vt(c.duration) : c.useGlobalTiming === !1 ? Vt(c.duration) : "Global timing", P = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", J = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + Vt(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? at(Un(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + _, ee = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Pe(c.name) + '. Drag, or use the up and down arrow keys">' + ce + "</button>", K = '<div class="moveText"><div class="moveItemName">' + Pe(c.name) + P + '</div><div class="moveMeta">' + Pe(J) + "</div></div>", Y = (Te) => Te.addEventListener("keydown", (ye) => {
        var ct, _e;
        if (ye.key !== "ArrowUp" && ye.key !== "ArrowDown") return;
        ye.preventDefault();
        const ve = e.indexOf(c), lt = ve + (ye.key === "ArrowUp" ? -1 : 1);
        lt < 0 || lt >= e.length || (e.splice(ve, 1), e.splice(lt, 0, c), H(), (_e = (ct = i(o).children[lt]) == null ? void 0 : ct.querySelector(".dragHandle")) == null || _e.focus());
      });
      if (ea()) {
        k.classList.add("phoneRow"), k.tabIndex = 0, k.setAttribute("role", "button"), k.setAttribute("aria-label", "Edit " + (c.name || "step")), k.innerHTML = ee + K + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Te = k.querySelector(".dragHandle");
        Te.addEventListener("pointerdown", (ye) => Qe(ye, k, r, e)), Y(Te), k.addEventListener("click", (ye) => {
          ye.target.closest(".dragHandle") || qo(c, e);
        }), k.addEventListener("keydown", (ye) => {
          ye.key === "Enter" && ye.target === k && (ye.preventDefault(), qo(c, e));
        }), r.appendChild(k);
        return;
      }
      k.innerHTML = ee + K + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Pe(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Pe(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + be + "</span></button></div>", k.querySelector(".editBtn").addEventListener("click", () => {
        Tt(), le = c, H(), Ze();
      }), k.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, H();
      });
      const Me = k.querySelector(".removeBtn");
      Ia(Me, Me.querySelector(".removeFill"), 1200, () => {
        const Te = e.indexOf(c);
        Te < 0 || (e.splice(Te, 1), H(), Rt("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Te, e.length), 0, c), H();
        } }));
      });
      const Ve = k.querySelector(".dragHandle");
      Ve.addEventListener("pointerdown", (Te) => Qe(Te, k, r, e)), Y(Ve), r.appendChild(k);
    });
  }
  const Ne = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Re = (e) => {
    var o;
    try {
      (o = navigator.vibrate) == null || o.call(navigator, e);
    } catch {
    }
  };
  function Qe(e, o, r, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const p = e.currentTarget, k = e.pointerId, _ = !Ne();
    try {
      p.setPointerCapture(k);
    } catch {
    }
    const P = o.closest(".exerciseScroller") || Yn(o), J = r.style.position;
    r.style.position = "relative";
    const ee = [...r.children].filter((tt) => tt.classList.contains("moveRow")), K = ee.indexOf(o), Y = parseFloat(getComputedStyle(r).rowGap) || 8, Me = o.offsetHeight, Ve = Me + Y, Te = ee.map((tt) => tt.offsetTop), ye = ee.map((tt) => tt.offsetHeight), ve = () => r.getBoundingClientRect().top, lt = r.getBoundingClientRect().width, ct = e.clientY - (ve() + Te[K]), _e = e.clientX;
    let ut = e.clientY, xt = e.clientX, Je = ve() + Te[K], Ue = 0, Yt = 0, cn = 0, Nt = 1, No = 0, we = K, et = !1, Zt = 0, Kt = !1, ms = !1, zi = Te[K];
    r.classList.add("reordering"), o.classList.add("dragging"), o.style.transition = "none", Re(8);
    const hs = () => {
      const tt = ut - ct + Me / 2 - ve();
      let gt = 0;
      return ee.forEach((At, An) => {
        An !== K && tt > Te[An] + ye[An] / 2 && gt++;
      }), gt;
    }, fs = () => {
      ee.forEach((tt, gt) => {
        if (gt === K) return;
        const At = K < we && gt > K && gt <= we ? -Ve : K > we && gt >= we && gt < K ? Ve : 0;
        tt.style.transform = At ? "translateY(" + At + "px)" : "";
      });
    }, Er = () => {
      const tt = r.getBoundingClientRect(), gt = Math.abs(xt - _e) > Math.max(80, lt * 0.3) || xt < tt.left - 24 || xt > tt.right + 24;
      gt !== et && (et = gt, o.classList.toggle("willReturn", gt), Re(gt ? 10 : 4));
      const At = et ? K : hs();
      At !== we && (we = At, fs(), et || Re(4));
    }, Bo = () => {
      if (we === K) return Te[K];
      const tt = ee.filter((At, An) => An !== K);
      let gt = Te[0];
      for (let At = 0; At < we; At++) gt += tt[At].offsetHeight + Y;
      return gt;
    }, ji = () => {
      const tt = _ ? Math.min(Math.abs(Ue) / 40, 1) : 0, gt = _ && !Kt ? Math.max(-3, Math.min(3, cn * 0.6)) : 0;
      o.style.transform = "translate(" + Yt.toFixed(2) + "px," + (Je - (ve() + Te[K])).toFixed(2) + "px) rotate(" + gt.toFixed(2) + "deg) scale(" + (Nt * (1 - 0.04 * tt)).toFixed(4) + "," + (Nt * (1 + 0.06 * tt)).toFixed(4) + ")";
    }, Ke = () => {
      Zt = requestAnimationFrame(Ke);
      const tt = xt - _e, gt = Kt ? ve() + zi : ut - ct, At = Kt ? 0 : et ? tt * 0.9 : Math.max(-22, Math.min(22, tt * 0.22)), An = Kt ? 1 : et ? 0.97 : 1.035;
      if (!_) {
        Je = gt, Yt = Kt ? 0 : At, Nt = 1, ji(), Kt && Ht();
        return;
      }
      const tu = Kt ? 0.24 : 0.2, nu = Kt ? 0.62 : 0.68;
      Ue = (Ue + (gt - Je) * tu) * nu, Je += Ue, cn = (cn + (At - Yt) * 0.16) * 0.7, Yt += cn, No = (No + (An - Nt) * 0.22) * 0.6, Nt += No, ji(), Kt && Math.abs(Ue) < 0.15 && Math.abs(gt - Je) < 0.5 && Math.abs(Yt) < 0.5 && Math.abs(Nt - 1) < 3e-3 && Ht();
    }, Ct = setInterval(() => {
      if (!P || Kt) return;
      const tt = P.getBoundingClientRect(), gt = 56, At = ut < tt.top + gt ? -10 : ut > tt.bottom - gt ? 10 : 0;
      At && (P.scrollTop += At, Er());
    }, 30);
    function Ht() {
      if (ms) return;
      ms = !0, cancelAnimationFrame(Zt);
      const tt = we !== K, gt = o.dataset.id;
      if (r.classList.remove("reordering"), ee.forEach((An) => {
        An.style.transition = "none", An.style.transform = "";
      }), o.classList.remove("dragging", "willReturn"), r.style.position = J, tt) {
        const [An] = c.splice(K, 1);
        c.splice(we, 0, An);
      }
      H();
      const At = gt && r.querySelector('.moveRow[data-id="' + gt + '"]');
      At && _ && At.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), tt && Rt("Order saved");
    }
    const $t = (tt) => {
      if (tt.pointerId === k) {
        if (tt.pointerType === "mouse" && tt.buttons === 0) {
          Xn();
          return;
        }
        ut = tt.clientY, xt = tt.clientX, Er();
      }
    }, _n = (tt) => {
      tt.pointerId === k && Xn();
    };
    function Xn() {
      Kt || (window.removeEventListener("pointermove", $t, !0), window.removeEventListener("pointerup", _n, !0), window.removeEventListener("pointercancel", _n, !0), p.removeEventListener("lostpointercapture", Xn), clearInterval(Ct), et && we !== K && (we = K, fs()), zi = Bo(), Kt = !0, Re(6), setTimeout(Ht, 800));
    }
    window.addEventListener("pointermove", $t, !0), window.addEventListener("pointerup", _n, !0), window.addEventListener("pointercancel", _n, !0), p.addEventListener("lostpointercapture", Xn), Zt = requestAnimationFrame(Ke), ji();
  }
  function mt() {
    var p, k, _, P;
    const e = ze[pt], o = (p = i("warmupList")) == null ? void 0 : p.closest("section"), r = (k = i("cooldownList")) == null ? void 0 : k.closest("section"), c = (P = (_ = i("strengthList")) == null ? void 0 : _.closest("section")) == null ? void 0 : P.querySelector(".sectionTitle");
    e != null && e.customSequence ? (o && (o.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (o && (o.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), c && (c.textContent = "Kettlebell work")), De(kt, "warmupList"), De(ot, "strengthList"), De(pn, "cooldownList");
  }
  function Tt() {
    if (!Ae) return;
    const { item: e, arr: o } = Ae;
    Ae = null;
    const r = o.indexOf(e);
    r >= 0 && o.splice(r, 1), le === e && (le = null);
  }
  function bt(e) {
    return e.id === "warmupList" ? { arr: kt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: pn, kind: "cooldown", group: "Cooldown" } : { arr: ot, kind: "work", group: "" };
  }
  function jt(e, o) {
    const r = bt(o), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(E.value) } : { id: "movement-" + c, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(M.value) };
  }
  const gn = "cubic-bezier(.34,1.46,.64,1)";
  function Pn(e, o) {
    if (Ne() || !e) {
      o();
      return;
    }
    const r = (k) => {
      var _;
      return ((_ = k.dataset) == null ? void 0 : _.id) || k;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], p = new Map(c().map((k) => [r(k), k.getBoundingClientRect().top]));
    o(), c().forEach((k) => {
      const _ = p.get(r(k));
      if (_ === void 0) return;
      const P = _ - k.getBoundingClientRect().top;
      Math.abs(P) < 0.5 || k.animate([{ transform: "translateY(" + P + "px)" }, { transform: "none" }], { duration: 440, easing: gn });
    });
  }
  function Sn(e, o) {
    if (!e || Ne()) return;
    const r = e.offsetHeight, c = Math.max(0, r - (o || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: gn });
  }
  function In(e, o, r, c) {
    const { arr: p } = bt(o), k = jt(e, o);
    p.splice(Math.max(0, Math.min(r, p.length)), 0, k), Ae = { item: k, arr: p }, le = k, Pn(o.closest(".exerciseScroller,.createStepSlot") || o, () => H());
    const _ = o.querySelector(".moveRow.editing");
    return Sn(_, c), Ze(e === "rest"), _;
  }
  function Yn(e) {
    for (let o = e; o && o.nodeType === 1; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if (/(auto|scroll)/.test(r) && o.scrollHeight > o.clientHeight) return o;
    }
    return null;
  }
  const Sa = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function mo(e, o) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + ce + '</span><span class="addGhostText"><strong>' + Pe(o[0]) + "</strong><small>" + Pe(o[1]) + "</small></span>", i("workoutModal").appendChild(r), r;
  }
  function rn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ht(e, o, r, c) {
    (le || Ae) && (Tt(), le = null, H());
    const p = e.getBoundingClientRect(), k = mo(o, Sa[o]);
    k.setAttribute("aria-hidden", "true"), k.style.width = p.width + "px", k.style.height = p.height + "px", k.style.transform = "translate(" + p.left + "px," + p.top + "px)", e.classList.add("lifting");
    const _ = Yn(e);
    return Hn({
      ghost: k,
      origin: p,
      sx: r,
      sy: c,
      scroller: _,
      column: e.closest(".exerciseScroller,.createFlow") || _,
      home: () => e.getBoundingClientRect(),
      onDrop: (P, J, ee) => {
        rn(k), e.classList.remove("lifting"), In(o, P, J, ee);
      },
      onReturn: () => {
        rn(k), e.classList.remove("lifting");
      }
    });
  }
  function Hn({ ghost: e, origin: o, sx: r, sy: c, scroller: p, column: k, home: _, onDrop: P, onReturn: J, rowLook: ee = !1 }) {
    var ji;
    const K = !Ne(), Y = ((ji = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ji.offsetHeight) || 80, Me = r - o.left, Ve = c - o.top, Te = 44;
    let ye = r, ve = c, lt = o.left, ct = o.top, _e = 0, ut = 0, xt = !K, Je = null, Ue = null, Yt = -1, cn = 0, Nt = null;
    const No = () => ["warmupList", "strengthList", "cooldownList"].map((Ke) => i(Ke)).filter((Ke) => Ke && Ke.getClientRects().length && !Ke.closest("[hidden]")), we = (Ke) => {
      if (Ke === Je) return;
      Je = Ke, e.classList.toggle("overList", !!Ke || ee);
      const Ct = Ke ? Ke.getBoundingClientRect().width : o.width;
      e.style.width = Ct + "px", e.style.height = (Ke ? Y : o.height) + "px";
    }, et = (Ke) => {
      Ke.classList.add("leaving"), Ke.style.height = "0px", Ke.style.marginTop = "-8px", setTimeout(() => Ke.remove(), K ? 320 : 0);
    }, Zt = (Ke, Ct, Ht) => {
      if (Ue && Ue.parentNode === Ke && Yt === Ht || (Ue && (et(Ue), Ue = null, Yt = -1), !Ke)) return;
      const $t = document.createElement("div");
      $t.className = "dropSlot", Ke.insertBefore($t, Ct), Ue = $t, Yt = Ht, $t.getBoundingClientRect(), $t.style.height = Y + "px", $t.style.marginTop = "0px";
    }, Kt = () => {
      let Ke = null, Ct = 1 / 0;
      for (const Xn of No()) {
        const tt = Xn.getBoundingClientRect();
        if (ye < tt.left - 48 || ye > tt.right + 48) continue;
        const gt = tt.top - 28, At = tt.bottom + 28, An = ve < gt ? gt - ve : ve > At ? ve - At : 0;
        An < Ct && (Ct = An, Ke = Xn);
      }
      const Ht = k == null ? void 0 : k.getBoundingClientRect(), _n = Ht && ye >= Ht.left && ye <= Ht.right && ve >= Ht.top && ve <= Ht.bottom || Ct === 0 ? Ke : null;
      if (_n) {
        const Xn = [..._n.children].filter((gt) => gt.classList.contains("moveRow"));
        let tt = Xn.findIndex((gt) => {
          const At = gt.getBoundingClientRect();
          return ve < At.top + At.height / 2;
        });
        tt < 0 && (tt = Xn.length), Zt(_n, Xn[tt] || null, tt);
      } else Zt(null);
      we(_n);
    }, ms = () => {
      if (Nt) return Nt.aim();
      if (Je) {
        const Ke = Je.getBoundingClientRect();
        let Ct = ve - Y / 2;
        return Ue && (Ct = Ct * 0.6 + Ue.getBoundingClientRect().top * 0.4), { x: Ke.left, y: Ct };
      }
      return { x: ye - Me, y: ve - Ve };
    }, zi = (Ke, Ct, Ht, $t) => {
      e.style.transform = "translate(" + lt + "px," + ct + "px) rotate(" + Ke + "deg) rotate(" + Ct + "rad) scale(" + Ht + "," + $t + ") rotate(" + -Ct + "rad)";
    }, hs = () => {
      if (cn = requestAnimationFrame(hs), !xt) {
        const tt = ye - r, gt = ve - c, At = Math.min(Math.hypot(tt, gt) / Te, 1);
        lt = o.left + tt * 0.35, ct = o.top + gt * 0.35, zi(0, Math.atan2(gt, tt), 1 + 0.155 * At, 1 - 0.1 * At);
        return;
      }
      const Ke = ms();
      if (!K) {
        lt = Ke.x, ct = Ke.y, zi(0, 0, 1, 1), Nt && (cancelAnimationFrame(cn), Nt.done());
        return;
      }
      const Ct = Nt ? Nt.k : 0.17, Ht = Nt ? Nt.d : 0.7;
      _e = (_e + (Ke.x - lt) * Ct) * Ht, ut = (ut + (Ke.y - ct) * Ct) * Ht, lt += _e, ct += ut;
      const $t = Math.hypot(_e, ut), _n = Math.min($t / 48, 1), Xn = Je || Nt ? 0 : Math.max(-5, Math.min(5, _e * 0.32));
      zi(Xn, Math.atan2(ut, _e), 1 + 0.1 * _n, 1 - 0.063 * _n), Nt && $t < 0.15 && Math.hypot(Ke.x - lt, Ke.y - ct) < 0.6 && (cancelAnimationFrame(cn), Nt.done());
    }, fs = setInterval(() => {
      if (!p || Nt) return;
      const Ke = p.getBoundingClientRect(), Ct = 64, Ht = ve < Ke.top + Ct ? -(Ke.top + Ct - ve) / 4 : ve > Ke.bottom - Ct ? (ve - (Ke.bottom - Ct)) / 4 : 0;
      Ht && (p.scrollTop += Math.max(-18, Math.min(18, Ht)), Kt());
    }, 30);
    cn = requestAnimationFrame(hs);
    let Er = !1;
    const Bo = (Ke, Ct) => {
      if (Er) return;
      Er = !0, cancelAnimationFrame(cn);
      const Ht = Ue ? Ue.offsetHeight : Y;
      !Ke && Ue && (Ue.remove(), Ue = null), Ke ? P(Ke, Ct, Ht) : J();
    };
    return {
      move(Ke, Ct) {
        ye = Ke, ve = Ct, !xt && Math.hypot(ye - r, ve - c) > Te && (xt = !0, _e = (ye - r) * 0.085, ut = (ve - c) * 0.085), xt && Kt();
      },
      drop(Ke) {
        clearInterval(fs);
        const Ct = Je, Ht = Yt;
        if (!Ke && Ct && Ue) {
          const $t = Ue;
          Nt = { k: 0.24, d: 0.62, aim: () => {
            const _n = $t.getBoundingClientRect();
            return { x: _n.left, y: _n.top };
          }, done: () => Bo(Ct, Ht) }, setTimeout(() => Bo(Ct, Ht), 650), K || (cancelAnimationFrame(cn), Bo(Ct, Ht));
          return;
        }
        Zt(null), we(null), Nt = { k: 0.2, d: 0.66, aim: () => {
          const $t = _();
          return { x: $t.left, y: $t.top };
        }, done: () => Bo(null) }, setTimeout(() => Bo(null), 650), K || (cancelAnimationFrame(cn), Bo(null));
      }
    };
  }
  function Jn(e, o) {
    let r = !1;
    e.addEventListener("click", (c) => {
      if (r) {
        r = !1, c.preventDefault();
        return;
      }
      if (ea()) {
        Ji(o);
        return;
      }
      const p = i("strengthList"), k = In(o, p, bt(p).arr.length, 0);
      k == null || k.scrollIntoView({ block: "nearest", behavior: Ne() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const p = c.pointerId, k = c.clientX, _ = c.clientY;
      let P = null, J = !1;
      try {
        e.setPointerCapture(p);
      } catch {
      }
      const ee = (ve) => {
        if (ve.pointerId === p) {
          if (ve.pointerType === "mouse" && ve.buttons === 0) {
            ye(!1);
            return;
          }
          if (!P) {
            if (Math.hypot(ve.clientX - k, ve.clientY - _) < 6) return;
            P = ht(e, o, k, _);
          }
          P.move(ve.clientX, ve.clientY);
        }
      }, K = (ve) => {
        ve.pointerId === p && ye(!1);
      }, Y = (ve) => {
        ve.pointerId === p && ye(!0);
      }, Me = () => ye(!1), Ve = () => ye(!0), Te = (ve) => {
        ve.key === "Escape" && P && (ve.preventDefault(), ve.stopPropagation(), ye(!0));
      };
      function ye(ve) {
        if (!J && (J = !0, window.removeEventListener("pointermove", ee, !0), window.removeEventListener("pointerup", K, !0), window.removeEventListener("pointercancel", Y, !0), window.removeEventListener("keydown", Te, !0), window.removeEventListener("blur", Ve), e.removeEventListener("lostpointercapture", Me), P)) {
          const lt = P;
          P = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), lt.drop(ve);
        }
      }
      window.addEventListener("pointermove", ee, !0), window.addEventListener("pointerup", K, !0), window.addEventListener("pointercancel", Y, !0), window.addEventListener("keydown", Te, !0), window.addEventListener("blur", Ve), e.addEventListener("lostpointercapture", Me);
    });
  }
  const Qn = (hd = window.matchMedia) == null ? void 0 : hd.call(window, "(max-width: 620px)");
  function ea() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Wo = (e) => e.charAt(0).toUpperCase() + e.slice(1), fa = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let sn = null, _t = null;
  function mi(e, o, r, c) {
    Gt(), i("sheetTitle").textContent = e;
    const p = i("sheetBody");
    p.innerHTML = "", p.appendChild(o), sn = r || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !p.contains(o)) return;
      const k = c ? p.querySelector("input[data-f=url],input[data-f=name]") : p.querySelector("button,input,select");
      k == null || k.focus({ preventScroll: !0 });
    }, Ne() ? 0 : 360);
  }
  function Gt() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const o = sn;
    sn = null, o == null || o(), setTimeout(ja, 0);
  }
  i("sheetScrim").addEventListener("click", Gt), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Gt());
  });
  function qo(e, o) {
    const r = Ge(e, o.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Gt(), H(), Rt(Wo(fa(e)) + " updated");
      },
      onCancel: Gt,
      onHide() {
        e.hidden = !e.hidden, Gt(), H(), Rt((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Gt();
        const c = o.indexOf(e);
        c < 0 || (o.splice(c, 1), H(), Rt("Removed " + e.name, { label: "Undo", run: () => {
          o.splice(Math.min(c, o.length), 0, e), H();
        } }));
      }
    });
    mi("Edit " + fa(e), r, null, !1);
  }
  function Vo() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([o, r, c, p]) => {
      const k = document.createElement("button");
      k.type = "button", k.className = "sheetChoice", k.innerHTML = '<span class="timeIcon" aria-hidden="true">' + xe(r) + "</span><span><strong>" + c + "</strong><small>" + p + "</small></span>", k.addEventListener("click", () => Ji(o)), e.appendChild(k);
    }), mi("Add to the move", e, null, !1);
  }
  function Ji(e) {
    _t && fi();
    const o = jt(e, i("strengthList")), r = Ge(o, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Gt(), Wr(o, e);
      },
      onCancel: Gt
    });
    mi("New " + fa(o), r, null, !0);
  }
  const zo = i("workoutModal").querySelector(".modalStatic"), Fr = { parent: zo.parentNode, next: zo.nextSibling };
  function Rs() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(zo);
    const o = document.createElement("button");
    o.type = "button", o.className = "primary sheetDone", o.textContent = "Done", o.addEventListener("click", Gt), e.appendChild(o), mi("Setup", e, () => {
      Fr.parent.insertBefore(zo, Fr.next), Qi();
    }, !1);
  }
  function Qi() {
    var o, r;
    const e = i("setupSummaryName");
    e && (e.textContent = (((o = i("workoutNameInput")) == null ? void 0 : o.value) || "").trim() || ((r = ze[pt]) == null ? void 0 : r.name) || "Move", i("setupSummaryMeta").textContent = Bt.textContent);
  }
  i("setupSummary").addEventListener("click", Rs), i("addFab").addEventListener("click", Vo);
  function Or() {
    const e = i("strengthList");
    return Yn(e) || e.closest(".exerciseScroller");
  }
  function hi() {
    const e = i("strengthList").getBoundingClientRect(), o = (Or() || i("strengthList")).getBoundingClientRect(), r = (_t == null ? void 0 : _t.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(o.top + 12, Math.min(o.bottom - r - 96, o.top + o.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function Wr(e, o) {
    var P;
    const r = mo(o, [e.name || Sa[o][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Pe(e.name) + '">✕</button>', r.appendChild(c), _t = { item: e, type: o, ghost: r };
    const p = ((P = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : P.offsetHeight) || 64;
    r.style.width = i("strengthList").getBoundingClientRect().width + "px", r.style.height = p + "px";
    const k = hi(), _ = It.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + k.left + "px," + _ + "px)", r.getBoundingClientRect(), Ne() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + k.left + "px," + k.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", fi), c.querySelector("[data-a=discard]").addEventListener("click", ho), r.addEventListener("pointerdown", Ns);
  }
  function Ns(e) {
    if (!_t || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: o, ghost: r } = _t, c = e.pointerId;
    try {
      r.setPointerCapture(c);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const p = r.getBoundingClientRect(), k = Or(), _ = Hn({
      ghost: r,
      origin: { left: p.left, top: p.top, width: p.width, height: p.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: k,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || k,
      rowLook: !0,
      home: hi,
      onDrop: (ye, ve, lt) => {
        _t = null, rn(r), qr(o, ye, ve, lt);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let P = !1;
    const J = (ye) => {
      if (ye.pointerId === c) {
        if (ye.pointerType === "mouse" && ye.buttons === 0) {
          Te(!1);
          return;
        }
        _.move(ye.clientX, ye.clientY);
      }
    }, ee = (ye) => {
      ye.pointerId === c && Te(!1);
    }, K = (ye) => {
      ye.pointerId === c && Te(!0);
    }, Y = () => Te(!1), Me = () => Te(!0), Ve = (ye) => {
      ye.key === "Escape" && (ye.preventDefault(), Te(!0));
    };
    function Te(ye) {
      P || (P = !0, window.removeEventListener("pointermove", J, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", K, !0), window.removeEventListener("keydown", Ve, !0), window.removeEventListener("blur", Me), r.removeEventListener("lostpointercapture", Y), _.drop(ye));
    }
    window.addEventListener("pointermove", J, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", K, !0), window.addEventListener("keydown", Ve, !0), window.addEventListener("blur", Me), r.addEventListener("lostpointercapture", Y);
  }
  function qr(e, o, r, c) {
    const p = bt(o);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = p.kind, p.group && (!e.group || e.group === "Movement") && (e.group = p.group)), p.arr.splice(Math.max(0, Math.min(r, p.arr.length)), 0, e), Pn(o.closest(".exerciseScroller,.createStepSlot") || o, () => H()), Sn(o.querySelector('.moveRow[data-id="' + e.id + '"]'), c), Rt(Wo(fa(e)) + " added");
  }
  function fi() {
    var c;
    if (!_t) return;
    const { item: e, ghost: o } = _t;
    _t = null, rn(o);
    const r = i("strengthList");
    qr(e, r, bt(r).arr.length, 0), (c = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Ne() ? "auto" : "smooth" });
  }
  function ho() {
    if (!_t) return;
    const e = _t.ghost;
    _t = null, rn(e), Rt("Discarded");
  }
  function er() {
    _t && (_t.ghost.remove(), _t = null);
  }
  window.addEventListener("resize", () => {
    if (_t != null && _t.ghost.classList.contains("hovering")) {
      const e = hi();
      _t.ghost.style.width = e.width + "px", _t.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (fd = Qn == null ? void 0 : Qn.addEventListener) == null || fd.call(Qn, "change", () => {
    Gt(), _t && !ea() && fi(), mt();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function ja() {
    const e = i("workoutModal"), o = window.visualViewport;
    if (!e.classList.contains("open") || !ea()) {
      jo();
      return;
    }
    const r = o ? o.offsetTop : 0, c = o ? o.offsetLeft : 0, p = o ? o.width : window.innerWidth, k = o ? o.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: p + "px", height: k + "px", top: r + "px", left: c + "px" });
    const _ = e.getBoundingClientRect();
    Math.abs(_.top - r) > 0.5 && (e.style.top = 2 * r - _.top + "px"), Math.abs(_.left - c) > 0.5 && (e.style.left = 2 * c - _.left + "px");
  }
  function jo() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (gd = window.visualViewport) == null || gd.addEventListener("resize", ja), (vd = window.visualViewport) == null || vd.addEventListener("scroll", ja), window.addEventListener("resize", ja), window.addEventListener("scroll", ja, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ja, 250));
  function Ga() {
    ot.length > 0;
    const e = i("addMovementBtn"), o = i("addRestBtn");
    e && (e.innerHTML = ce + "<span>Add movement</span>"), o && (o.innerHTML = ce + "<span>Add rest</span>");
    const r = i("addVideoBtn");
    r && (r.innerHTML = ce + "<span>Add video</span>");
  }
  function Go() {
    const e = i("useGlobalTiming").checked, o = i("addMovementDuration"), r = i("addMovementUnit");
    o.disabled = e, r.disabled = e, o.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Vt(M.value);
    const c = i("useGlobalRestTiming").checked, p = i("addRestDuration"), k = i("addRestUnit");
    p.disabled = c, k.disabled = c, p.parentElement.style.opacity = c ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Vt(E.value);
  }
  let Vr = "movement";
  function gi(e) {
    Vr = e;
    const o = i("movementFields"), r = i("restFields");
    o.hidden = e !== "movement", r.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Go();
  }
  function vi() {
    ze[pt];
    const e = rt ? !0 : i("useGlobalTiming").checked, o = e ? Number(M.value) : Ca(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), r = rt ? !0 : i("useGlobalRestTiming").checked, c = r ? Number(E.value) : Ca(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Vr === "rest") {
      const p = i("addRestTitle").value.trim() || "Rest", k = i("addRestGroup").value.trim() || "Rest";
      ot.push({
        id: "rest-" + Date.now(),
        name: p,
        group: k,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, c || Number(E.value))
      }), H(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Rt("Rest added"), rt && (W("movements"), ge());
    } else {
      const p = i("addMovementInput").value.trim();
      if (!p) return;
      const k = i("addMovementGroup").value.trim() || "Movement";
      ot.push({
        id: "movement-" + Date.now(),
        name: p,
        group: k,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, o || Number(M.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", H(), i("movementCreator").hidden = !0, Rt("Movement added"), rt && (W("movements"), ge());
    }
    Ga();
  }
  let tr = null;
  function Rt(e, o) {
    const r = i("toast");
    r.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, r.appendChild(c), o) {
      const p = document.createElement("button");
      p.type = "button", p.className = "toastAction", p.textContent = o.label, p.addEventListener("click", () => {
        o.run(), r.classList.remove("show", "withAction"), clearTimeout(tr);
      }), r.appendChild(p);
    }
    r.classList.toggle("withAction", !!o), r.classList.add("show"), clearTimeout(tr), tr = setTimeout(() => r.classList.remove("show", "withAction"), o ? 5e3 : 2200);
  }
  const zr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Bs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function nr(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function fo(e, o) {
    return zr[nr(o)];
  }
  function jr(e) {
    return Bs[nr(e)];
  }
  function Pt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function ga() {
    return { morning: Xe().morningTime || "08:00", evening: Xe().eveningTime || "19:00" };
  }
  function go(e) {
    const [o, r] = String(e).split(":").map(Number);
    return (o || 0) * 60 + (r || 0);
  }
  function bi(e) {
    const o = ga();
    return e.getHours() * 60 + e.getMinutes() >= go(o.evening) ? "evening" : "morning";
  }
  function vo(e, o) {
    return it.checkins.find((r) => r.date === e && r.slot === o);
  }
  function bo(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Uo() {
    const e = /* @__PURE__ */ new Date(), o = Pt(e), r = bi(e), c = ga(), p = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && p < go(c.morning) || bo(vo(o, r)) ? null : r;
  }
  const Ta = i("checkinModal"), La = i("checkinTab"), Ps = i("checkinBadge"), _a = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Gr(e) {
    const { input: o, fill: r } = _a[e];
    r.style.width = o.value + "%", o.setAttribute("aria-valuetext", fo(e, o.value));
  }
  Object.keys(_a).forEach((e) => _a[e].input.addEventListener("input", () => Gr(e)));
  let vn = null;
  function ar() {
    const e = ga(), o = /* @__PURE__ */ new Date(), r = o.getHours() * 60 + o.getMinutes();
    return r < go(e.morning) ? "Next check-in at " + e.morning : r < go(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Is() {
    const e = ga(), o = /* @__PURE__ */ new Date(), r = o.getHours() * 60 + o.getMinutes(), c = (p, k) => {
      const [_, P] = p.split(":").map(Number);
      return new Date(o.getFullYear(), o.getMonth(), o.getDate() + (k ? 1 : 0), _, P);
    };
    return r < go(e.morning) ? { date: c(e.morning), time: e.morning } : r < go(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let or = null, Aa = null;
  function ir() {
    if (Uo()) {
      wi(), Ua();
      return;
    }
    const e = Is(), o = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), p = o % 60;
    i("peekCountdown").textContent = r + ":" + String(c).padStart(2, "0") + ":" + String(p).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Ur() {
    ir(), La.classList.add("peek"), clearInterval(Aa), Aa = setInterval(ir, 1e3), clearTimeout(or), or = setTimeout(wi, 6e3);
  }
  function wi() {
    La.classList.remove("peek"), clearInterval(Aa), clearTimeout(or);
  }
  function Yo() {
    const e = Uo();
    if (!e) {
      La.classList.contains("peek") ? wi() : Ur();
      return;
    }
    vn = { date: Pt(/* @__PURE__ */ new Date()), slot: e };
    const r = vo(vn.date, e), c = it.checkins.find((p) => bo(p));
    Object.keys(_a).forEach((p) => {
      _a[p].input.value = (r == null ? void 0 : r[p]) ?? (c == null ? void 0 : c[p]) ?? 50, Gr(p);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Ta.classList.add("open"), Ta.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => _a.mood.input.focus());
  }
  function wo() {
    Ta.classList.remove("open"), Ta.setAttribute("aria-hidden", "true"), vn && (xo = vn.date + "-" + vn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", xo);
    } catch {
    }
    vn = null, Ua();
  }
  function rr() {
    if (!vn) return;
    if (bo(vo(vn.date, vn.slot))) {
      wo();
      return;
    }
    const { date: e, slot: o } = vn;
    let r = vo(e, o);
    r || (r = { date: e, slot: o }, it.checkins.unshift(r), it.checkins = it.checkins.slice(0, 2e3)), r.mood = Number(_a.mood.input.value), r.energy = Number(_a.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), an(), s.fire("checkin", { slot: o, mood: r.mood, energy: r.energy, mood_label: fo("mood", r.mood), energy_label: fo("energy", r.energy) }), Rt((o === "morning" ? "Morning" : "Evening") + " check-in saved"), wo(), yi(), Ea(), ii(), no();
  }
  let xo = "";
  try {
    xo = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ua() {
    const e = Uo();
    Ps.hidden = !e, La.hidden = !e, e || wi(), La.classList.toggle("due", !!e), La.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : ar()), La.title = e ? "Check in now" : ar();
  }
  function xi() {
    Ua();
    const e = Uo();
    !e || Ta.classList.contains("open") || Xe().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !ke.home.classList.contains("active") || It.classList.contains("open") || xo !== Pt(/* @__PURE__ */ new Date()) + "-" + e && Yo());
  }
  La.addEventListener("click", Yo), i("checkinLater").addEventListener("click", wo), i("checkinSave").addEventListener("click", rr), Ta.addEventListener("click", (e) => {
    e.target === Ta && wo();
  }), Ta.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), wo());
  }), setInterval(xi, 3e4);
  function yi() {
    const e = Pt(/* @__PURE__ */ new Date()), o = (r) => it.checkins.find((c) => c.date === e && c[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, c]) => {
      const p = o(r);
      i(c).textContent = p ? fo(r, p[r]) : "—";
    });
  }
  function Ea() {
    const e = i("feelCard");
    if (!e) return;
    const o = /* @__PURE__ */ new Date(), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), c = [...Array(7)].map((ee, K) => {
      const Y = new Date(r.getFullYear(), r.getMonth(), r.getDate() + K), Me = Pt(Y), Ve = it.checkins.filter((ye) => ye.date === Me), Te = (ye) => {
        const ve = Ve.map((lt) => lt[ye]).filter((lt) => lt != null);
        return ve.length ? ve.reduce((lt, ct) => lt + ct, 0) / ve.length : null;
      };
      return { d: Y, key: Me, mood: Te("mood"), energy: Te("energy"), count: Ve.filter(bo).length, future: Y > o && Me !== Pt(o) };
    }), p = (ee) => {
      const K = c.map((Y) => Y[ee]).filter((Y) => Y != null);
      return K.length ? K.reduce((Y, Me) => Y + Me, 0) / K.length : null;
    }, k = p("mood"), _ = p("energy"), P = (ee, K) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ee + "</span><span>" + (K == null ? "—" : Pe(fo("", K))) + '</span></div><div class="feelTrack"><span style="width:' + (K == null ? 0 : Math.max(4, K)) + "%;background:" + (K == null ? "transparent" : jr(K)) + '"></span></div></div>', J = c.filter((ee) => ee.mood != null && ee.energy != null).sort((ee, K) => K.mood + K.energy - (ee.mood + ee.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (k == null ? "No check-ins yet" : Pe(fo("", (k + _) / 2))) + '</div><div class="weekCopy">' + (k == null ? "Your first check-in will appear here." : "on average this week" + (J ? " · best day " + Pe(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(J.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (ee) => '<div class="weekChip feelDay' + (ee.future ? " future" : "") + (ee.key === Pt(o) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Pe(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ee.d)) + "</strong>" + (ee.count >= 2 ? '<span class="weekTick">' + xe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ee.count) + "</span>") + "</div>" + P("Mood", ee.mood) + P("Energy", ee.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Wt = i("upcomingCountSetting");
  Wt.addEventListener("change", () => {
    Bn = Wt.value === "all" ? "all" : Number(Wt.value), ei();
  });
  const Zo = i("tempoRevealBtn"), yo = i("tempoExperiment"), hn = i("tempoQuad"), ta = i("tempoDot"), Hs = i("tempoEstimate"), Fs = i("tempoReadout");
  let ko = { x: 0.5, y: 0.5 }, Ko = !1, ki = { total: 20, work: 45, rest: 15 };
  function sr(e, o, r, c) {
    const p = Math.max(o, Math.min(r, e));
    return Math.round((p - o) / c) * c + o;
  }
  function $o(e, o) {
    const r = (e - 0.5) * 2, c = (o - 0.5) * 2, p = sr(
      ki.total + r * 5 + c * 8,
      Number(S.min),
      Number(S.max),
      Number(S.step)
    ), k = sr(
      ki.work + r * 10 + c * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), _ = sr(
      ki.rest + r * 6 + c * 6,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    );
    return S.value = p, M.value = k, E.value = _, V.textContent = k + " sec", Q.textContent = _ + " sec", en(), { total: p, work: k, rest: _ };
  }
  function Xo(e, o) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = o < 0.34 ? "Fast" : o > 0.66 ? "Slow" : "Balanced", p = $o(e, o);
    Fs.textContent = r + " + " + c, Hs.textContent = p.total + " min", hn.setAttribute("aria-valuetext", r + " and " + c + ", estimated " + p.total + " minutes");
  }
  function lr(e) {
    const o = hn.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - o.left) / o.width)), c = Math.max(0, Math.min(1, (e.clientY - o.top) / o.height));
    ko = { x: r, y: c }, ta.style.left = r * 100 + "%", ta.style.top = c * 100 + "%", Xo(r, c);
  }
  Zo.addEventListener("click", () => {
    const e = yo.hidden;
    yo.hidden = !e, Zo.setAttribute("aria-expanded", e ? "true" : "false"), Zo.textContent = e ? "Now close this" : "Don’t try this!", e && (ki = {
      total: Number(S.value),
      work: Number(M.value),
      rest: Number(E.value)
    }, ko = { x: 0.5, y: 0.5 }, ta.style.left = "50%", ta.style.top = "50%", Xo(ko.x, ko.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.toggle("selected", o === e));
  }));
  const Mi = i("testingFeedbackForm"), Tn = i("testingFeedbackThanks"), tn = i("testingFeedbackAgain");
  Mi.addEventListener("submit", (e) => {
    e.preventDefault(), Mi.hidden = !0, Tn.hidden = !1, Rt("Feedback captured for prototype");
  }), tn.addEventListener("click", (e) => {
    e.preventDefault(), Mi.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.remove("selected")), Tn.hidden = !0, Mi.hidden = !1;
  }), hn.addEventListener("pointerdown", (e) => {
    var o;
    Ko = !0, lr(e);
    try {
      (o = hn.setPointerCapture) == null || o.call(hn, e.pointerId);
    } catch {
    }
  }), hn.addEventListener("pointermove", (e) => {
    Ko && lr(e);
  }), hn.addEventListener("pointerup", (e) => {
    Ko && (Ko = !1, lr(e), H());
  }), hn.addEventListener("pointercancel", () => Ko = !1), hn.addEventListener("keydown", (e) => {
    let { x: o, y: r } = ko, c = !0;
    e.key === "ArrowLeft" ? o -= 0.05 : e.key === "ArrowRight" ? o += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : c = !1, c && (e.preventDefault(), o = Math.max(0, Math.min(1, o)), r = Math.max(0, Math.min(1, r)), ko = { x: o, y: r }, ta.style.left = o * 100 + "%", ta.style.top = r * 100 + "%", Xo(o, r), H());
  });
  const It = i("workoutModal");
  let Ya = null;
  function na(e) {
    return e.map((o) => ({ ...o }));
  }
  function dr() {
    const e = ze[pt];
    return {
      key: pt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: na(kt),
      strength: na(ot),
      cooldown: na(pn),
      total: Number(S.value),
      work: Number(M.value),
      rest: Number(E.value),
      rounds: Number($e.value) || 1
    };
  }
  function Za(e = !1) {
    rt = !!e, le = null, Ae = null, Gt(), er(), Ya = dr(), i("moveEditorTitle").textContent = rt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !rt, i("warmupRow").hidden = rt, i("deleteMoveOpen").hidden = rt;
    const o = i("createMoveOptions");
    o.hidden = !rt;
    {
      const r = ze[pt];
      i("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), i("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (Mo(), rt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const r = ze[pt];
      po((r == null ? void 0 : r.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, gi("movement"), Ga(), Go(), yo.hidden = !0, Zo.setAttribute("aria-expanded", "false"), Zo.textContent = "Don’t try this!", It.classList.toggle("createMode", rt), It.querySelector(".modal").classList.toggle("createMode", rt), It.classList.add("open"), It.setAttribute("aria-hidden", "false"), ja(), rt && Se();
  }
  function Ci() {
    const e = ze[pt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Mo() {
    const e = Ci(), o = i("warmupSwitch");
    o.classList.toggle("on", e), o.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ze[pt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, D()) : (e.warmupOff = !e.warmupOff, H()), Mo());
  });
  function bn() {
    Gt(), er(), jo(), Ae = null, le = null, It.classList.contains("createMode") && g(), It.classList.remove("createMode"), It.querySelector(".modal").classList.remove("createMode"), It.classList.remove("open"), It.setAttribute("aria-hidden", "true");
  }
  function cr() {
    if (!Ya) return;
    const e = Ya;
    e.profile && (ze[e.key] = JSON.parse(JSON.stringify(e.profile))), pt = e.key, kt = na(e.warmup), ot = na(e.strength), pn = na(e.cooldown), S.value = e.total, M.value = e.work, E.value = e.rest, $e.value = e.rounds || 1;
    const o = ze[pt];
    if (o) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === pt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = o.name);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = o.name);
        const k = r.querySelector(".sourceTag");
        k && (k.textContent = o.source);
      }
      h.value = o.name;
    }
    H();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (rt) {
      const e = pt;
      delete ze[e], rt = !1, ft = null, kn(it.order.find((o) => ze[o]) || Object.keys(ze)[0]);
    } else
      cr();
    bn();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Gt(), _t && fi();
    const e = ze[pt], o = h.value.trim() || "New move";
    if (e && (e.name = o), Tt(), le = null, H(), rt && e)
      lo(pt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === pt)), rt = !1, ft = null, it.order.includes(pt) || it.order.push(pt), Rt("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = o);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = o);
      }
      Rt("Move saved");
    }
    Ya = null, bn(), an();
  }), It.addEventListener("click", (e) => {
    if (e.target === It) {
      if (rt) {
        const o = pt;
        delete ze[o], rt = !1, ft = null, kn(it.order.find((r) => ze[r]) || Object.keys(ze)[0]);
      } else
        cr();
      bn();
    }
  }), Jn(i("addMovementBtn"), "movement"), Jn(i("addRestBtn"), "rest"), Jn(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Go), i("useGlobalRestTiming").addEventListener("change", Go), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    po(e.dataset.movePreset, !0), H();
  })), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), i("includeWarmupPreset").addEventListener("change", ge), i("includeCooldownPreset").addEventListener("change", ge), h.addEventListener("input", ge), h.addEventListener("input", Qi), i("confirmAddMovement").addEventListener("click", vi), i("confirmAddRest").addEventListener("click", vi), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && vi();
  });
  const Da = i("countdown"), Si = i("countNum"), aa = i("countdownPixelCanvas");
  let Co = null, ur = "appear";
  class pr {
    constructor(o, r, c, p, k, _, P) {
      this.width = o.width, this.height = o.height, this.ctx = r, this.x = c, this.y = p, this.color = k, this.speed = (Math.random() * 0.8 + 0.1) * _, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = P, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const o = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + o, this.y + o, this.size, this.size);
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
  let Fn = [], Jo = 1, mr = 1;
  function Ra() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Yr() {
    var ee;
    if (!aa) return;
    const e = Ra(), o = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    Jo = o, mr = r;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    aa.width = Math.floor(o * c), aa.height = Math.floor(r * c), aa.style.width = o + "px", aa.style.height = r + "px";
    const p = aa.getContext("2d");
    p.setTransform(c, 0, 0, c, 0, 0);
    const k = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], _ = 12, P = (ee = window.matchMedia) == null ? void 0 : ee.call(window, "(prefers-reduced-motion: reduce)").matches, J = P ? 0 : 0.055;
    Fn = [];
    for (let K = 0; K < o; K += _)
      for (let Y = 0; Y < r; Y += _) {
        const Me = K - o / 2, Ve = Y - r / 2, Te = Math.sqrt(Me * Me + Ve * Ve), ye = P ? 0 : Math.random() * 75 + Te * 0.05, ve = new pr({ width: o, height: r }, p, K, Y, k[Math.floor(Math.random() * k.length)], J, ye);
        ve.maxSizeInteger = 4, ve.maxSize = Math.random() * 3.2 + 0.8, ve.sizeStep = 0.35 + Math.random() * 0.45, Fn.push(ve);
      }
  }
  function Zr(e) {
    cancelAnimationFrame(Co), ur = e;
    const o = aa == null ? void 0 : aa.getContext("2d");
    if (!o) return;
    function r() {
      o.clearRect(0, 0, Jo, mr);
      let c = !0;
      Fn.forEach((p) => {
        p[ur](), p.isIdle || (c = !1);
      }), ur === "disappear" && c || (Co = requestAnimationFrame(r));
    }
    Co = requestAnimationFrame(r);
  }
  function Zn() {
    cancelAnimationFrame(Co), Yr(), Zr("appear"), setTimeout(() => Zr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Da.classList.contains("active") && Zn();
  });
  const Ka = i("pixelTrailCanvas"), So = Ka.getContext("2d");
  let va = !0, To = 0.7, $a = 600, Lo = [], _o = null, ba = { x: 0, y: 0, ready: !1 };
  function Ti() {
    const e = u.getBoundingClientRect(), o = Ra(), r = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / o), p = Math.max(1, e.height / o);
    Ka.width = Math.max(1, Math.floor(c * r)), Ka.height = Math.max(1, Math.floor(p * r)), Ka.style.width = c + "px", Ka.style.height = p + "px", So.setTransform(r, 0, 0, r, 0, 0);
  }
  function hr(e, o) {
    if (!va) return;
    const r = performance.now();
    ba.ready || (ba = { x: e, y: o, ready: !0 });
    const c = 7;
    for (let p = 1; p <= c; p++) {
      const k = p / c;
      Lo.push({
        x: ba.x + (e - ba.x) * k,
        y: ba.y + (o - ba.y) * k,
        born: r - (c - p) * 10
      });
    }
    ba = { x: e, y: o, ready: !0 };
  }
  function Li(e) {
    if (_o = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      _o = requestAnimationFrame(Li);
      return;
    }
    const o = u.getBoundingClientRect(), r = Ra();
    So.clearRect(0, 0, o.width / r, o.height / r), va && (Lo = Lo.filter((p) => e - p.born < $a), So.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Lo.forEach((p) => {
      const k = (e - p.born) / $a, _ = (1 - k) * To, P = Math.round(p.x / 14) * 14, J = Math.round(p.y / 14) * 14;
      So.globalAlpha = Math.max(0, _);
      const ee = 2 + 5 * (1 - k) * To;
      So.fillRect(P - ee / 2, J - ee / 2, ee, ee);
    }), So.globalAlpha = 1), _o = requestAnimationFrame(Li);
  }
  u.addEventListener("pointermove", (e) => {
    const o = u.getBoundingClientRect(), r = Ra();
    hr((e.clientX - o.left) / r, (e.clientY - o.top) / r);
  }), u.addEventListener("pointerleave", () => ba.ready = !1), new ResizeObserver(Ti).observe(u), Ti(), _o = requestAnimationFrame(Li);
  const wa = i("movementRippleCanvas"), xa = wa.getContext("2d");
  let Na = !0, Ln = null, Kr = performance.now();
  function _i() {
    const e = wa.parentElement.getBoundingClientRect(), o = Ra(), r = Math.max(1, e.width / o), c = Math.max(1, e.height / o), p = Math.min(window.devicePixelRatio || 1, 2);
    wa.width = Math.max(1, Math.floor(r * p)), wa.height = Math.max(1, Math.floor(c * p)), wa.style.width = r + "px", wa.style.height = c + "px", xa.setTransform(p, 0, 0, p, 0, 0);
  }
  function $r() {
    var e;
    return Lt || ((e = Ee[je]) == null ? void 0 : e.kind) === "rest";
  }
  function On() {
    const e = Ee[je];
    return $r() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ai(e) {
    if (Ln = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      Ln = requestAnimationFrame(Ai);
      return;
    }
    const o = wa.parentElement.getBoundingClientRect(), r = Ra(), c = Math.max(1, o.width / r), p = Math.max(1, o.height / r);
    if (xa.clearRect(0, 0, c, p), Na) {
      const k = On(), _ = (e - Kr) % k / k, P = 15, J = Math.max(8, Math.round(P * p / Math.max(1, c))), ee = c / (P + 1), K = p / (J + 1), Y = c * 0.5, Me = p * 0.52, Ve = Math.hypot(Y, Me), ye = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ve = 1; ve <= J; ve++)
        for (let lt = 1; lt <= P; lt++) {
          const ct = lt * ee, _e = ve * K, ut = Math.hypot(ct - Y, _e - Me) / Ve, xt = $r(), Je = xt ? Math.exp(-Math.pow((ut - (_ * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ue = Math.exp(-Math.pow((ut - _ * 1.25) * 7, 2)), Yt = xt ? Je : Ue, cn = xt ? 0.5 + 0.5 * Math.sin(_ * Math.PI * 2 - ut * 3) ** 2 : 0.35 + 0.65 * Math.sin(_ * Math.PI * 2 - ut * 5) ** 2, Nt = xt ? 1.4 + Yt * 4.2 * cn : 1.2 + Yt * 5 * cn;
          xa.beginPath(), xa.arc(ct, _e, Nt, 0, Math.PI * 2), xa.fillStyle = `rgba(${ye},${xt ? 0.08 + Yt * 0.48 : 0.05 + Yt * 0.55})`, xa.fill();
        }
    }
    Ln = requestAnimationFrame(Ai);
  }
  new ResizeObserver(_i).observe(wa.parentElement), _i(), Ln = requestAnimationFrame(Ai);
  const Xa = i("exerciseTitle"), ya = i("exerciseMeta"), fr = i("stepLabel"), gr = i("digits"), dt = i("fill"), Ja = i("progress"), Qa = i("pause"), vr = i("nextName"), Ba = i("nextMeta"), Xr = i("nextIcon"), Ei = i("skipNextSession");
  let wn = null;
  function fn(e) {
    for (let o = Math.max(0, e); o < Ee.length; o++)
      if (!Ee[o].sessionHidden) return o;
    return -1;
  }
  function br() {
    const e = Ee[je];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Lt) {
      const c = fn(je + 1), p = c >= 0 ? Ee[c] : null;
      return p ? { name: p.name, meta: Ri(p), icon: Qo(p) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const o = fn(je + 1), r = o >= 0 ? Ee[o] : null;
    return r ? { name: r.name, meta: Ri(r), icon: Qo(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Di() {
    if (!Ee[je]) return Ee.length;
    const o = fn(je + 1);
    return o < 0 ? Ee.length : o + 1;
  }
  function Qo(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Ri(e) {
    return e.kind === "video" ? "YouTube · " + at(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Ao() {
    return Ee.length && Ee[Ee.length - 1].round || 1;
  }
  function wr(e) {
    const o = Ee[e];
    if (!o) return "";
    const r = Ao();
    if (r <= 1) return "Step " + (e + 1) + " of " + Ee.length;
    if (o.roundBreak) return "Round " + o.round + " of " + r + " · Rest";
    const c = Ee.filter((p) => p.round === o.round && !p.roundBreak).length;
    return "Round " + o.round + " of " + r + " · Step " + (o.roundIndex + 1) + " of " + c;
  }
  function Eo() {
    return Ja.querySelector('[data-step="' + je + '"]');
  }
  function xr() {
    Ee[je] && Number(Ja.dataset.round) !== (Ee[je].round || 1) && kr(), [...Ja.children].forEach((e) => {
      const o = Number(e.dataset.step);
      e.classList.toggle("done", o < je), e.classList.toggle("active", o === je), e.classList.toggle("rewindable", o <= je), e.disabled = o > je, o === je && e.style.setProperty("--segment-progress", "0%");
    }), Ee[je] && (fr.textContent = wr(je), Wn());
  }
  function Jr(e) {
    const o = Ee.indexOf(e);
    o < 0 || o <= je || (e.sessionHidden = !e.sessionHidden, Pa(), Rt((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function ei() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const o = Di(), r = Ee.slice(o);
    (Bn === "all" ? r : r.slice(0, Math.max(1, Number(Bn) || 1))).forEach((p) => {
      const k = document.createElement("section");
      k.className = "upcomingCard" + (p.sessionHidden ? " sessionHidden" : "") + (zs(p) ? " noMeta" : ""), k.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xe(Qo(p)) + '</div><div><div class="upcomingName">' + Pe(p.name) + '</div><div class="upcomingMeta">' + Pe(Ri(p)) + (Ao() > 1 ? " · round " + p.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (p.sessionHidden ? "Include this session" : "Skip this session") + "</button>", k.querySelector(".skipSessionBtn").addEventListener("click", () => Jr(p)), e.appendChild(k);
    });
  }
  function Pa() {
    var o;
    const e = br();
    vr.textContent = e.name, Ba.textContent = e.meta, Xr.innerHTML = xe(e.icon);
    {
      const r = Lt ? Ee[fn(je + 1)] : ((o = Ee[je]) == null ? void 0 : o.rest) > 0 ? { kind: "rest" } : Ee[fn(je + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && zs(r)));
    }
    if (wn = null, Lt) {
      const r = fn(je + 1);
      r >= 0 && (wn = Ee[r]);
    } else {
      const r = Ee[je];
      if (r && r.rest > 0)
        wn = null;
      else {
        const c = fn(je + 1);
        c >= 0 && (wn = Ee[c]);
      }
    }
    Ei && (Ei.hidden = !wn, Ei.textContent = wn != null && wn.sessionHidden ? "Include this session" : "Skip this session"), ei();
  }
  Ei.addEventListener("click", () => {
    wn && (wn.sessionHidden = !wn.sessionHidden, Rt((wn.sessionHidden ? "Hidden " : "Included ") + wn.name + " for this session"), Pa());
  });
  let oa = null, ti = null;
  function Do(e, o = {}) {
    const r = ze[pt];
    s.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: pt, ...o });
  }
  function Os() {
    const e = ze[pt];
    oa = { key: pt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ti), ti = setInterval(() => {
      oa && !mn && oa.active++;
    }, 1e3), Do("started", { steps: Ee.length });
  }
  function yr(e) {
    if (clearInterval(ti), !oa) return;
    const o = oa;
    oa = null, Do(e ? "completed" : "ended", { seconds: o.active }), !(o.active < 30) && (it.history.unshift({ id: "h-" + o.startedAt, move_id: o.key, name: o.name, start: new Date(o.startedAt).toISOString(), seconds: o.active, completed: e }), it.history = it.history.slice(0, 1e3), an(), ii(), no());
  }
  function Ni() {
    x("workout"), ni();
    const e = fn(0);
    e >= 0 && Ee[e].kind === "video" && ae(Ee[e]);
  }
  function Bi() {
    fe(), yr(!1), clearInterval(Et), clearInterval(za), Lt = !1, ka(!1), i("app").classList.remove("resting"), Da.classList.remove("active"), x("home");
  }
  function ni() {
    Da.classList.add("active");
    let e = 5;
    Si.textContent = e, requestAnimationFrame(Zn), clearInterval(za), za = setInterval(() => {
      e--, e > 0 ? (Si.textContent = e, Zn()) : (clearInterval(za), Si.textContent = "GO", Zn(), setTimeout(() => {
        Da.classList.remove("active"), cancelAnimationFrame(Co), es();
      }, 650));
    }, 1e3);
  }
  function kr() {
    var o;
    Ja.innerHTML = "";
    const e = ((o = Ee[Math.max(0, je)] || Ee[0]) == null ? void 0 : o.round) || 1;
    Ja.dataset.round = e, Ee.forEach((r, c) => {
      if ((r.round || 1) !== e) return;
      const p = document.createElement("button");
      p.dataset.step = c, p.type = "button", p.className = "progressSegment", p.setAttribute("aria-label", "Go to " + r.name), p.addEventListener("click", () => {
        c <= je && Qr(c);
      }), Ja.appendChild(p);
    });
  }
  function ka(e) {
    e = !!e;
    const o = mn !== e;
    if (mn = e, Qa.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), T && a)
      try {
        e ? a.pauseVideo() : a.playVideo();
      } catch {
      }
    o && oa && Do(e ? "paused" : "resumed");
  }
  function Qr(e) {
    e < 0 || e >= Ee.length || e > je || (clearInterval(Et), Lt = !1, i("app").classList.remove("resting"), je = e, ka(!1), dn(), Et = setInterval(ra, 1e3));
  }
  function es() {
    if (je = fn(0), ka(!1), kr(), je < 0) {
      Xa.textContent = "No activities", ya.textContent = "Open Edit and enable or add a movement", ya.hidden = !1;
      return;
    }
    Os(), dn(), clearInterval(Et), Et = setInterval(ra, 1e3);
  }
  const Pi = i("videoStage"), ia = i("videoSound"), ai = 0, eo = 1, ts = 2;
  let Mr = 0, to = null, t = null, a = null, l = null, d = 0, m = !1, T = null, y = null;
  function b() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : to || (to = new Promise((o, r) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const p = setInterval(() => {
        var _;
        (_ = window.YT) != null && _.Player && (clearInterval(p), clearTimeout(k), o(window.YT));
      }, 100), k = setTimeout(() => {
        clearInterval(p), to = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const _ = document.createElement("script");
        _.src = "https://www.youtube.com/iframe_api", _.async = !0, _.onerror = () => {
          clearInterval(p), clearTimeout(k), to = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(_);
      }
    }), to);
  }
  function F() {
    return t || (t = b().then((e) => new Promise((o) => {
      const r = document.createElement("div");
      i("videoFrame").appendChild(r), a = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => o(a), onStateChange: (c) => z(c.data), onError: (c) => pe(c.data) }
      });
    })), t.catch(() => {
      t = null;
    }), t);
  }
  function ae(e) {
    !(e != null && e.videoId) || e.videoError || F().then((o) => {
      T || l === e.videoId || (l = e.videoId, d = Number(e.start) || 0, m = !1, o.mute(), o.loadVideoById({ videoId: e.videoId, startSeconds: d }));
    }).catch(() => {
    });
  }
  function U() {
    const e = fn(je + 1);
    e >= 0 && Ee[e].kind === "video" && ae(Ee[e]);
  }
  function z(e) {
    if (!T) {
      e === eo && !m && (m = !0, a.pauseVideo(), a.seekTo(d, !0));
      return;
    }
    Pi.classList.toggle("playing", e === eo), Ee[je] === T && performance.now() > Mr && (e === eo && mn ? ka(!1) : e === ts && !mn && ka(!0)), e === eo && qt(T.videoId, a.getDuration()) && an(), e === ai && me();
  }
  function pe(e) {
    const o = T;
    if (!o) {
      l = null;
      return;
    }
    e === 101 || e === 150 ? (xn(o.videoId), Rt("That video can’t play outside YouTube, so it was skipped")) : Rt("The video couldn’t play, so it was skipped"), me();
  }
  function qe(e) {
    if (i("app").classList.add("videoStep"), ia.hidden = !0, T = e, clearTimeout(y), !e.videoId) {
      Rt("This video step has no link yet, so it was skipped"), setTimeout(() => me(), 0);
      return;
    }
    F().then((o) => {
      if (T !== e) return;
      Mr = performance.now() + 1500;
      const r = Number(e.start) || 0;
      l !== e.videoId ? (l = e.videoId, d = r, o.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (o.seekTo(r, !0), o.playVideo()), o.unMute(), mn && o.pauseVideo(), y = setTimeout(() => {
        T !== e || mn || (o.getPlayerState() !== eo ? (o.mute(), o.playVideo(), ia.hidden = !1) : o.isMuted() && (ia.hidden = !1));
      }, 1600);
    }).catch(() => {
      T === e && (Rt("YouTube didn’t load, so the video was skipped"), me());
    });
  }
  function Ie() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), o = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, c = (o == null ? void 0 : o.offsetHeight) || 42, p = window.innerHeight - r - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(p)) + "px");
  }
  window.addEventListener("resize", Ie);
  function fe() {
    clearTimeout(y);
    const e = T;
    if (T = null, i("app").classList.remove("videoStep"), Pi.classList.remove("playing"), ia.hidden = !0, e && a) {
      try {
        a.pauseVideo();
      } catch {
      }
      l = null;
    }
  }
  function me() {
    const e = T;
    !e || Ee[je] !== e || (fe(), clearInterval(Et), Le(), Et = setInterval(ra, 1e3));
  }
  ia.addEventListener("click", () => {
    a && (a.unMute(), a.playVideo()), ia.hidden = !0;
  });
  function ie(e) {
    var c;
    const o = Number(e.start) || 0;
    if (e.useVideoLength === !1) return o + (Number(e.duration) || 300);
    const r = a && T === e && Number((c = a.getDuration) == null ? void 0 : c.call(a)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || o + (Number(e.duration) || 300);
  }
  function st(e, o) {
    const r = ze[pt];
    [kt, ot, pn, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((p) => {
      p && p.kind === "video" && p.videoId === e && o(p);
    }));
  }
  function qt(e, o) {
    o = Math.round(Number(o) || 0);
    let r = !1;
    return e && o > 0 && st(e, (c) => {
      c.videoDuration !== o && (c.videoDuration = o, r = !0);
    }), r;
  }
  function xn(e) {
    st(e, (o) => {
      o.videoError = "embed";
    }), an();
  }
  function oi(e) {
    const o = e.videoId;
    if (!o) return;
    const r = () => {
      It.classList.contains("open") ? le || H() : (H(), an());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + o)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === o && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), r());
    }).catch((c) => {
      e.videoId === o && c === 401 && (e.videoError = "embed", r());
    }), ln(o).then((c) => {
      qt(o, c) && r();
    }).catch((c) => {
      c === "embed" && e.videoId === o && (e.videoError = "embed", r());
    });
  }
  function ln(e) {
    return b().then((o) => new Promise((r, c) => {
      const p = document.createElement("div");
      p.className = "videoProbe", p.setAttribute("aria-hidden", "true");
      const k = document.createElement("div");
      p.appendChild(k), i("app").appendChild(p);
      let _ = null, P = !1;
      const J = (Y, Me) => {
        P || (P = !0, clearTimeout(ee), setTimeout(() => {
          try {
            _ == null || _.destroy();
          } catch {
          }
          p.remove();
        }, 0), Me ? c(Me) : r(Y));
      }, ee = setTimeout(() => J(0), 2e4), K = () => {
        var Me;
        const Y = Number((Me = _ == null ? void 0 : _.getDuration) == null ? void 0 : Me.call(_)) || 0;
        return Y > 0 && J(Y), Y > 0;
      };
      _ = new o.Player(k, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            K() || (_.mute(), _.playVideo());
          },
          onStateChange: () => K(),
          onError: (Y) => J(0, Y.data === 101 || Y.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function dn() {
    Lt = !1;
    const e = Ee[je];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? qe(e) : fe(), zt = e.duration, on = e.duration, Xa.textContent = e.name, ya.textContent = e.group, ya.hidden = !0, fr.textContent = wr(je), oa && Do("step", { name: e.name, group: e.group, kind: e.kind, step: je + 1, of: Ee.length, round: e.round || 1, rounds: Ao(), duration: e.duration }), Pa(), xr(), U(), e.kind === "video" && setTimeout(Ie, 0);
  }
  function Wn() {
    var p;
    const e = ((p = Ee[je]) == null ? void 0 : p.kind) === "video" && !Lt, o = e && zt >= 60;
    gr.textContent = o ? at(zt) : zt, gr.classList.toggle("long", o), e && (i("videoClock").textContent = at(zt) + " left");
    const r = zt / on * 100;
    dt.style.width = r + "%";
    const c = Eo();
    if (c && !Lt) {
      const k = 100 - r;
      c.style.setProperty("--segment-progress", k + "%");
    }
  }
  function ra() {
    var o, r;
    if (mn) return;
    const e = Ee[je];
    if ((e == null ? void 0 : e.kind) === "video" && !Lt && T === e) {
      const c = Number((o = a == null ? void 0 : a.getCurrentTime) == null ? void 0 : o.call(a)) || 0, p = Number(e.start) || 0, k = ie(e);
      on = Math.max(1, k - p), (c > p || ((r = a == null ? void 0 : a.getPlayerState) == null ? void 0 : r.call(a)) === eo) && (zt = Math.max(0, Math.ceil(k - c))), Wn(), c > p && c >= k - 0.25 && me();
      return;
    }
    zt--, Wn(), zt <= 0 && (e.rest > 0 ? Cr(e.rest) : Le());
  }
  function Cr(e) {
    var r;
    Lt = !0, i("app").classList.add("resting");
    const o = Eo();
    o && o.style.setProperty("--segment-progress", "100%"), clearInterval(Et), zt = e, on = e, oa && Do("rest", { duration: e }), Xa.textContent = "Rest", ya.textContent = (r = Ee[je]) != null && r.roundBreakAfter ? "Round " + (Ee[je].round + 1) + " next" : "Recovery", Pa(), Wn(), Et = setInterval(() => {
      mn || (zt--, Wn(), zt <= 0 && (clearInterval(Et), Le(), Et = setInterval(ra, 1e3)));
    }, 1e3);
  }
  function Le() {
    Lt = !1;
    const e = fn(je + 1);
    if (e >= 0)
      je = e, dn();
    else {
      clearInterval(Et), fe(), ka(!1), i("app").classList.remove("resting"), Xa.textContent = "Complete", ya.textContent = "Move finished", ya.hidden = !1, gr.textContent = "✓";
      {
        const o = Ao();
        fr.textContent = o > 1 ? o + " rounds done" : Ee.filter((r) => !r.roundBreak).length + " steps done";
      }
      yr(!0);
      {
        const o = Yl(7).reduce((r, c) => r + c.minutes, 0);
        ya.textContent = "Move finished · " + o + " min in the last 7 days";
      }
      dt.style.width = "100%", Pa();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Mt(), ka(!1);
  });
  function Mt() {
    clearInterval(Et);
    const e = Ee[je];
    if (Lt) {
      Lt = !1, i("app").classList.remove("resting");
      const r = fn(je + 1);
      r >= 0 ? (je = r, dn(), Et = setInterval(ra, 1e3)) : Le();
      return;
    }
    if (e && e.rest > 0) {
      Cr(e.rest);
      return;
    }
    const o = fn(je + 1);
    o >= 0 ? (je = o, dn(), Et = setInterval(ra, 1e3)) : Le();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Et), ka(!1), Lt) {
      const e = Ee[je];
      zt = e.rest, on = e.rest, Xa.textContent = "Rest", ya.textContent = "Recovery", i("app").classList.add("resting"), Pa(), Wn();
    } else
      dn();
    Et = setInterval(Lt ? () => {
      mn || (zt--, Wn(), zt <= 0 && (clearInterval(Et), Le(), Et = setInterval(ra, 1e3)));
    } : ra, 1e3);
  });
  function Ia(e, o, r, c) {
    let p = 0, k = null, _ = !1;
    function P() {
      k && cancelAnimationFrame(k), k = null, p = 0, _ = !1, o.style.width = "0%", e.classList.remove("holding");
    }
    function J(Y) {
      if (!_) return;
      p || (p = Y);
      const Me = Math.min(1, (Y - p) / r);
      if (o.style.width = Me * 100 + "%", Me >= 1) {
        _ = !1, k && cancelAnimationFrame(k), k = null, o.style.width = "100%", setTimeout(() => o.style.width = "0%", 90), c();
        return;
      }
      k = requestAnimationFrame(J);
    }
    function ee(Y) {
      var Me;
      if (!(Y && Y.button !== void 0 && Y.button !== 0)) {
        Y == null || Y.preventDefault(), P(), _ = !0, e.classList.add("holding");
        try {
          (Me = e.setPointerCapture) == null || Me.call(e, Y.pointerId);
        } catch {
        }
        k = requestAnimationFrame(J);
      }
    }
    function K() {
      _ && P();
    }
    e.addEventListener("pointerdown", ee), e.addEventListener("pointerup", K), e.addEventListener("pointercancel", K), e.addEventListener("lostpointercapture", K), e.addEventListener("keydown", (Y) => {
      (Y.key === " " || Y.key === "Enter") && !Y.repeat && ee(Y);
    }), e.addEventListener("keyup", (Y) => {
      (Y.key === " " || Y.key === "Enter") && K();
    });
  }
  const ns = i("endWorkout");
  Ia(ns, i("holdEndFill"), 1500, Bi);
  const Ii = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ii.classList.add("open"), Ii.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ii.classList.remove("open"), Ii.setAttribute("aria-hidden", "true");
  });
  function Pc() {
    const e = pt, o = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    o && o.remove(), delete ze[e], it.order = it.order.filter((c) => c !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const c = "custom-" + Date.now();
      ze[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, it.order.push(c), r = lo(c, ze[c]);
    }
    Ii.classList.remove("open"), Ii.setAttribute("aria-hidden", "true"), Ya = null, bn(), kn(r.dataset.workout), an(), Rt("Move deleted");
  }
  Ia(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Pc);
  const Ws = n.querySelector(".rubberTabs"), Hi = i("rubberIndicator");
  function Sr(e, o = !0) {
    if (!e || !Ws || !Hi) return;
    const r = Ws.getBoundingClientRect(), c = e.getBoundingClientRect();
    Hi.style.transition = o ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const p = Ra();
    Hi.style.left = (c.left - r.left) / p + Ws.scrollLeft + "px", Hi.style.width = c.width / p + "px", o && (Hi.style.transform = "scaleX(1.08)", setTimeout(() => Hi.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((o) => o.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((o) => o.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Sr(e, !0);
  })), requestAnimationFrame(() => Sr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Sr(n.querySelector(".tab.active"), !1));
  const qs = i("pixelTrailToggle"), Vs = i("rippleToggle"), Fi = i("trailStrength"), Oi = i("trailLife");
  function sa(e, o) {
    Xe()[e] = o, an();
  }
  const Fl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ol(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function zs(e) {
    var o;
    return !!((o = Xe().hideMeta) != null && o[Ol(e)]);
  }
  function Ic() {
    const e = /* @__PURE__ */ new Map(), o = (r, c, p) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const k = Ol(r);
      let _ = e.get(k);
      _ || (_ = { key: k, label: k === "rest" ? "Rest" : k === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(k, _)), _.kinds.add(k === "rest" ? "Rest" : k === "video" ? "Video" : c), _.moves.add(p), _.count++;
    };
    return Object.values(ze).forEach((r) => {
      const c = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Ye)).forEach((p) => o(p, "Warm-up", c)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((p) => o(p, p.presetRole === "warmup" ? "Warm-up" : p.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (r.cooldown || (r.customSequence ? [] : Qt)).forEach((p) => o(p, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, c]) => {
      e.has(r) || e.set(r, { key: r, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, c) => Fl.indexOf(r.kind) - Fl.indexOf(c.kind) || r.label.localeCompare(c.label));
  }
  let js = "all";
  function Gs() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Ic().filter((o) => (js === "all" || o.kind === js) && (!e || o.label.toLowerCase().includes(e) || o.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function as() {
    const e = i("metaTableBody");
    if (!e) return;
    const o = Xe().hideMeta || {}, r = Gs();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((p) => {
      const k = !o[p.key], _ = p.count ? (p.moves.length > 2 ? p.moves.slice(0, 2).join(", ") + " + " + (p.moves.length - 2) + " more" : p.moves.join(", ")) + " · " + p.count + " step" + (p.count === 1 ? "" : "s") : "Not used yet", P = document.createElement("tr");
      P.className = k ? "" : "off", P.innerHTML = '<td><div class="metaType">' + Pe(p.label) + '</div><div class="metaSub">' + Pe(p.kind + " · " + _) + '</div></td><td class="metaKindCol">' + Pe(p.kind) + '</td><td class="metaUsedCol">' + Pe(_) + '</td><td class="metaSwitchCol"><button class="switch' + (k ? " on" : "") + '" type="button" role="switch" aria-checked="' + k + '" aria-label="Second line for ' + Pe(p.label) + ' on phones"></button></td>', P.querySelector(".switch").addEventListener("click", () => Us([p.key], k)), e.appendChild(P);
    });
    const c = r.filter((p) => o[p.key]).length;
    i("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function Us(e, o) {
    const r = { ...Xe().hideMeta || {} };
    e.forEach((c) => {
      o ? r[c] = !0 : delete r[c];
    }), sa("hideMeta", r), as(), mt(), Pa();
  }
  i("metaSearch").addEventListener("input", as), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    js = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((o) => o.classList.toggle("active", o === e)), as();
  })), i("metaHideAll").addEventListener("click", () => Us(Gs().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => Us(Gs().map((e) => e.key), !1));
  const Wi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...Xe().toggles || {} };
  function Wl() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", Wi[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, c]) => {
      i(c).hidden = Wi[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => Wi[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const o = n.querySelector("#homeView .grid");
    o.classList.toggle("noActivity", !e), o.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Wi[e.dataset.toggle] = Wi[e.dataset.toggle] === !1, Wl(), sa("toggles", { ...Wi });
  })), Wl();
  function Hc() {
    qs.classList.toggle("on", va), Vs.classList.toggle("on", Na), Fi.value = Math.round(To * 100), i("trailStrengthValue").textContent = Fi.value + "%", Oi.value = $a, i("trailLifeValue").textContent = Oi.value + " ms";
  }
  Xe().trailEnabled !== void 0 && (va = Xe().trailEnabled), Xe().rippleEnabled !== void 0 && (Na = Xe().rippleEnabled), Xe().trailStrength !== void 0 && (To = Xe().trailStrength), Xe().trailMaxAge !== void 0 && ($a = Xe().trailMaxAge), Hc(), qs.addEventListener("click", () => {
    va = !va, qs.classList.toggle("on", va), va || (Lo = []), sa("trailEnabled", va);
  }), Vs.addEventListener("click", () => {
    Na = !Na, Vs.classList.toggle("on", Na), sa("rippleEnabled", Na);
  }), Fi.addEventListener("input", () => {
    To = Number(Fi.value) / 100, i("trailStrengthValue").textContent = Fi.value + "%";
  }), Fi.addEventListener("change", () => sa("trailStrength", To)), Oi.addEventListener("input", () => {
    $a = Number(Oi.value), i("trailLifeValue").textContent = Oi.value + " ms";
  }), Oi.addEventListener("change", () => sa("trailMaxAge", $a)), Wt.addEventListener("change", () => sa("upcomingCount", Bn));
  function ql(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const o = e === "light";
    i("app").classList.toggle("light", o), s.setLight(o), ri(n);
  }
  ql(Xe().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    ql(e.dataset.theme), sa("theme", e.dataset.theme);
  }));
  const Kn = { steps: null, weather: null, ...Xe().entities || {} };
  let nn = null, Ys = {};
  function Fc(e) {
    const o = Object.values(e).filter((P) => P.entity_id.startsWith("sensor.") || P.entity_id.startsWith("input_number.")), r = (P) => P.attributes.friendly_name || P.entity_id, c = o.filter((P) => /step/i.test(P.entity_id) || /step/i.test(r(P)) || ["steps", "step"].includes(String(P.attributes.unit_of_measurement || "").toLowerCase())), p = o.filter((P) => !c.includes(P)), k = (P, J) => r(P).localeCompare(r(J)), _ = (P, J) => /health_steps/.test(J.entity_id) - /health_steps/.test(P.entity_id) || k(P, J);
    return { suggested: c.sort(_), rest: p.sort(k), label: r };
  }
  function Vl(e) {
    const o = i("stepsEntity");
    if (!o || o.matches(":focus")) return;
    const { suggested: r, rest: c, label: p } = Fc(e), k = (J) => '<option value="' + Pe(J.entity_id) + '">' + Pe(p(J)) + "</option>";
    o.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(k).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(k).join("") + "</optgroup>" : ""), o.value = Kn.steps || "";
    const _ = i("stepsStatus"), P = Kn.steps && e[Kn.steps];
    _.textContent = P ? "Connected · " + p(P) : _.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Kn.steps = i("stepsEntity").value || null, sa("entities", { ...Kn }), Ys = {}, Ul(), nn && (Vl(nn), jl(nn));
  });
  function Oc(e, o = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: o }).format(e);
  }
  function zl() {
    const e = Kn.steps && (nn == null ? void 0 : nn[Kn.steps]), o = Number(e == null ? void 0 : e.state);
    return Number.isFinite(o) ? o : null;
  }
  function jl(e) {
    var c;
    const o = Kn.steps, r = o ? Number((c = e[o]) == null ? void 0 : c.state) : NaN;
    i("stepsMeta").textContent = o ? Number.isFinite(r) ? Oc(r) : "—" : "Set up in Settings";
  }
  let Gl = 0;
  async function Ul() {
    const e = Kn.steps;
    if (!e || !s.ws) return;
    Gl = Date.now();
    const o = /* @__PURE__ */ new Date(), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - 30);
    try {
      const c = await s.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: o.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), p = (c == null ? void 0 : c[e]) || [], k = {};
      if (p.forEach((_) => {
        Number.isFinite(_.max) && (k[Pt(new Date(_.start))] = _.max);
      }), !Object.keys(k).length) {
        const _ = await s.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: o.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((_ == null ? void 0 : _[e]) || []).forEach((P) => {
          const J = Number(P.s ?? P.state), ee = P.lu ? P.lu * 1e3 : Date.parse(P.last_updated || P.last_changed);
          if (!Number.isFinite(J) || !ee) return;
          const K = Pt(new Date(ee));
          k[K] = Math.max(k[K] || 0, J);
        });
      }
      Ys = k, no();
    } catch {
    }
  }
  function ii() {
    no();
  }
  ii(), setInterval(() => {
    ii(), Ea(), Ua();
  }, 10 * 60 * 1e3);
  function Yl(e) {
    const o = {}, r = {};
    it.history.forEach((_) => {
      const P = Pt(new Date(_.start));
      o[P] = (o[P] || 0) + (_.seconds || 0) / 60, r[P] = (r[P] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), p = Pt(c), k = [];
    for (let _ = e - 1; _ >= 0; _--) {
      const P = new Date(c.getFullYear(), c.getMonth(), c.getDate() - _), J = Pt(P), ee = it.checkins.filter((Y) => Y.date === J), K = (Y) => {
        const Me = ee.map((Ve) => Ve[Y]).filter(Boolean);
        return Me.length ? Me.reduce((Ve, Te) => Ve + Te, 0) / Me.length : null;
      };
      k.push({
        key: J,
        date: P,
        minutes: Math.round(o[J] || 0),
        moves: r[J] || 0,
        steps: J === p && zl() != null ? zl() : Ys[J] ?? null,
        mood: K("mood"),
        energy: K("energy")
      });
    }
    return k;
  }
  function Wc(e) {
    let o = e.length - 1;
    e[o] && !e[o].minutes && o--;
    let r = 0;
    for (; o >= 0 && e[o].minutes > 0; )
      r++, o--;
    return r;
  }
  function no() {
    const e = i("insightCard");
    if (!e) return;
    const o = Yl(30), r = Wc(o), c = o.reduce((ee, K) => ee + K.minutes, 0), p = /* @__PURE__ */ new Date(), k = Pt(p), _ = Pt(new Date(p.getFullYear(), p.getMonth(), p.getDate() - (p.getDay() + 6) % 7)), P = o.filter((ee) => ee.key >= _ && ee.key <= k).reduce((ee, K) => ee + K.minutes, 0), J = (ee, K, Y) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ee + '</div><div><div class="activityRowName">' + Pe(K) + '</div><div class="activityRowMeta">' + Pe(Y) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + xe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + J(xe("clock"), "This week", P + " min") + J(xe("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + J(xe("calendar"), "30 days", c + " min") + "</div>";
  }
  const Zs = {
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
  }, qc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", qi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, os = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Zl = 0;
  const Ks = (e, o) => '<path class="' + o + '" d="' + e + '"/>', Vc = (e, o) => ' style="animation-delay:-' + Math.round(e * 137 % o) + 'ms"', la = (e, o, r, c) => {
    const p = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Vc(e, 2400) + ' d="M' + e + " " + (o - r) + "L" + (e + p) + " " + (o - p) + "L" + (e + r) + " " + o + "L" + (e + p) + " " + (o + p) + "L" + e + " " + (o + r) + "L" + (e - p) + " " + (o + p) + "L" + (e - r) + " " + o + "L" + (e - p) + " " + (o - p) + 'Z"/>';
  }, Kl = ([e, o, r], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + o + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zc = (e, o) => o ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', jc = (e) => (e ? ["29.35", "43.04", "56.74"].map((o, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + o + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + o + ' 60.65)"/></g>') : [19, 26, 33].map((o, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + o + ' 38)"/></g>')).join(""), Gc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([o, r], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + o + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function $l(e, o, r, c) {
    return e === "clear" ? o ? Kl(r ? os.l : os.s, c) + (r ? la(70, 20, 5.83, 1) + la(78.33, 41.67, 3.75, 0.8) + la(60, 71.67, 3.33, 0.6) : la(42, 12, 3.5, 1) + la(47, 25, 2.25, 0.8) + la(36, 43, 2, 0.6)) : zc(c, r) : e === "partly" ? (o ? Kl(r ? os.lp : os.sp, c) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Ks(r ? qi.lp : qi.sp, o ? "wxCloudLight" : "wxBright") + (o ? r ? la(73.33, 16.67, 4.17, 0.9) : la(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Ks(r ? qi.lc : qi.s, o ? "wxCloudLight" : "wxBright") + (o ? r ? la(15, 15, 3.75, 0.8) + la(76.67, 13.33, 2.92, 0.6) : la(9, 9, 2.25, 0.8) + la(46, 8, 1.75, 0.6) : "") : Ks(r ? qi.lr : qi.s, "wxCloudLight") + (e === "rain" ? jc(r) : Gc(r));
  }
  const Uc = () => {
    var e;
    return ((e = nn == null ? void 0 : nn["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let $n = Xe().weatherStyle || "bitmap", Xl = Xe().weatherLayout === "strip" ? "strip" : "tiles", Yc = Xe().weatherMotion !== !1;
  const Tr = () => Yc && !Ne(), Lr = /* @__PURE__ */ new Map(), $s = 700, Zc = (e) => {
    const [o, r] = e.split("/");
    return { k: o === "fog" ? "cloudy" : o === "storm" ? "rain" : o, night: r === "night" };
  };
  function is(e, o, r, c = $n, p, k) {
    let _ = qc(e);
    const P = _ === "night" || (k != null ? !!k : !!r && Uc());
    _ === "night" && (_ = "clear");
    const J = o ? 90 : 54, ee = Es(e, P), K = performance.now();
    let Y = p ? Lr.get(p) : null;
    if (p && !Y ? Lr.set(p, Y = { key: ee, t0: -1e9 }) : Y && Y.key !== ee && (Y.fromKey = Y.key, Y.from = Y.last || null, Y.key = ee, Y.t0 = K), c !== "smooth") return '<span class="wxIcon pixels' + (o ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ee + '"' + (p ? ' data-wx-slot="' + p + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + J + '"></canvas></span>';
    let Me = "";
    if (Y && K - Y.t0 < $s && (Tr() || Ne())) {
      const Ve = Zc(Y.fromKey);
      Me = '<span class="wxLayer wxOut ' + Ve.k + (Ve.night ? " night" : "") + '" style="animation-delay:' + Math.round(Y.t0 - K) + 'ms"><svg viewBox="0 0 ' + J + " " + J + '">' + $l(Ve.k, Ve.night, o, "wxg" + ++Zl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + _ + (P ? " night" : "") + (o ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + J + " " + J + '">' + $l(_, P, o, "wxg" + ++Zl) + "</svg>" + Me + "</span>";
  }
  function rs() {
    const e = i("app"), o = getComputedStyle(e), r = (P) => o.getPropertyValue(P).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([P, J]) => {
      r(J) && (c[P] = r(J));
    });
    const p = r("--color-text-primary") || "#f1f1f1", k = r("--color-bg-card") || "#222222", _ = e.classList.contains("light");
    return { colors: c, ink: _ ? p : k, paper: _ ? k : p };
  }
  function ri(e, o = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const c = rs(), p = Tr(), k = Ne();
    r.forEach((_) => {
      var Y;
      const P = _.dataset.wx, J = _.dataset.wxSlot ? Lr.get(_.dataset.wxSlot) : null;
      let ee = Tl(P, c.colors);
      if (J && J.key === P) {
        const Me = (o - J.t0) / $s;
        Me < 1 && (p || k) && (ee = du(J.from || Tl(J.fromKey, c.colors), ee, Math.max(0, Me), c.colors, k)), J.last = ee;
      }
      const K = lc(ee, { size: Number(_.dataset.wxSize) || 54, px: 2, oneBit: _.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: o, idle: p });
      _.width !== K.w && (_.width = K.w), _.height !== K.h && (_.height = K.h), (Y = _.getContext("2d")) == null || Y.putImageData(new ImageData(K.data, K.w, K.h), 0, 0);
    });
  }
  let ss = null, Jl = -1;
  function Ql(e) {
    if (ss = null, !f) return;
    const o = Tr(), r = Math.floor(e / 100), c = [...Lr.values()].some((J) => e - J.t0 < $s), p = [...ls.values()].some((J) => e - J.t0 < J.dur), k = ke.home.classList.contains("active"), _ = qn.classList.contains("open"), P = o && $n === "smooth" && (_ || k && Xl === "strip");
    !document.hidden && (c || p || P || o && r !== Jl) && (Jl = r, k && (ri(i("weatherCard"), e), _r(i("weatherCard"), e)), _ && (ri(qn, e), _r(qn, e))), (o || c || p) && (ss = requestAnimationFrame(Ql));
  }
  function si() {
    i("app").classList.toggle("wxMotion", Tr()), !ss && f && (ss = requestAnimationFrame(Ql));
  }
  let ed = [];
  const Ut = 36e5, Kc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function ao() {
    const e = /* @__PURE__ */ new Date(), o = (k, _) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + k, _), r = [], c = [], p = [...Array(6)].map((k, _) => {
      const P = o(_, 6), J = o(_, 18), ee = o(_ + 1, 6), K = ed.find((Me) => Pt(new Date(Me.datetime)) === Pt(P)), Y = (Me, Ve, Te) => {
        const ye = r.filter((ct) => ct.t >= +Me && ct.t < +Ve);
        if (ye.length) {
          const ct = {};
          return ye.forEach((_e) => {
            ct[_e.c] = (ct[_e.c] || 0) + (Kc.has(_e.c) ? 2 : 1);
          }), Object.entries(ct).sort((_e, ut) => ut[1] - _e[1])[0][0];
        }
        const ve = c.find((ct) => {
          const _e = +new Date(ct.datetime);
          return _e >= +Me - 3 * Ut && _e < +Ve && (ct.is_daytime == null || !!ct.is_daytime == !Te);
        });
        if (ve) return ve.condition;
        const lt = (K == null ? void 0 : K.condition) || "cloudy";
        return Te && lt === "sunny" ? "clear-night" : lt;
      };
      return { start: +P, end: +ee, day: Y(P, J, !1), night: Y(J, ee, !0), hi: Number(K == null ? void 0 : K.temperature), lo: Number(K == null ? void 0 : K.templow) };
    });
    return { days: p, hours: r, start: p[0].start, end: p[5].end };
  }
  const td = (e, o) => {
    const r = e.days.findIndex((p) => o < p.end);
    if (r < 0) return 1;
    const c = e.days[r];
    return Math.max(0, (r + (o - c.start) / (c.end - c.start)) / 6);
  }, $c = (e, o) => {
    const r = Math.max(0, Math.min(0.99999, o)) * 6, c = Math.floor(r), p = e.days[c];
    return p.start + (r - c) * (p.end - p.start);
  };
  function Xs(e, o) {
    const r = Math.max(0, e.days.findIndex((J) => o < J.end)), c = e.days[r], p = (o - c.start) / (c.end - c.start) >= 0.5;
    let k = p ? c.night : c.day, _ = NaN;
    const P = e.hours;
    if (P.length && o >= P[0].t - Ut && o <= P[P.length - 1].t + Ut) {
      let J = P.findIndex((Y) => Y.t > o);
      J < 0 && (J = P.length);
      const ee = P[Math.max(0, J - 1)], K = P[Math.min(P.length - 1, J)];
      k = ee.c || k, _ = K.t > ee.t ? ee.temp + (K.temp - ee.temp) * Math.max(0, Math.min(1, (o - ee.t) / (K.t - ee.t))) : ee.temp;
    }
    if (!Number.isFinite(_)) {
      const J = [];
      if (e.days.forEach((ee) => {
        Number.isFinite(ee.lo) && J.push([ee.start - Ut, ee.lo]), Number.isFinite(ee.hi) && J.push([ee.start + 9 * Ut, ee.hi]);
      }), J.length) {
        _ = o <= J[0][0] ? J[0][1] : J[J.length - 1][1];
        for (let ee = 1; ee < J.length; ee++) if (o <= J[ee][0] && o > J[ee - 1][0]) {
          const [K, Y] = J[ee - 1], [Me, Ve] = J[ee];
          _ = Y + (Ve - Y) * (1 - Math.cos(Math.PI * (o - K) / (Me - K))) / 2;
          break;
        }
      }
    }
    return { cond: p && k === "sunny" ? "clear-night" : k, temp: _, night: p, day: c };
  }
  const nd = (e) => Pt(new Date(e)) === Pt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), ls = /* @__PURE__ */ new Map(), Xc = 900, Jc = 700;
  let ds = null;
  const da = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((o) => {
    _r(o.target.parentElement), o.target.closest("#wxDialog") && ld();
  })) : null;
  function _r(e, o = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const c = ao(), p = c.days.flatMap((Y) => [{ cond: Y.day, night: !1 }, { cond: Y.night, night: !0 }]), k = p.map((Y) => Y.cond).join(), _ = rs(), P = Tr(), J = Ne(), ee = Number(Pt(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let K = !1;
    r.forEach((Y) => {
      var ct;
      const Me = Y.clientWidth, Ve = Y.clientHeight;
      if (!Me || !Ve) return;
      const Te = Y.dataset.wxStrip;
      let ye = ls.get(Te);
      ye ? ye.sig !== k && (ye.prev = ye.segs, ye.sig = k, ye.segs = p, ye.t0 = o, ye.dur = Jc) : ls.set(Te, ye = { sig: k, segs: p, prev: null, t0: o, dur: Xc });
      const ve = P || J ? Math.min(1, Math.max(0, (o - ye.t0) / ye.dur)) : 1;
      ve < 1 && (K = !0);
      const lt = { width: Me, height: Ve, colors: _.colors, clock: o, ambient: P, seed: ee, reveal: J ? ve : 1 - Math.pow(1 - ve, 3), prev: ve < 1 ? ye.prev : null, reduce: J };
      if ($n === "smooth") {
        const _e = Math.min(2, window.devicePixelRatio || 1), ut = Math.round(Me * _e), xt = Math.round(Ve * _e);
        Y.width !== ut && (Y.width = ut), Y.height !== xt && (Y.height = xt);
        const Je = Y.getContext("2d");
        if (!Je) return;
        Je.setTransform(_e, 0, 0, _e, 0, 0), Cu(Je, p, lt);
      } else {
        const _e = Mu(p, { ...lt, px: 2, oneBit: $n === "onebit", ink: _.ink, paper: _.paper });
        Y.width !== _e.w && (Y.width = _e.w), Y.height !== _e.h && (Y.height = _e.h), (ct = Y.getContext("2d")) == null || ct.putImageData(new ImageData(_e.data, _e.w, _e.h), 0, 0);
      }
    }), K && si();
  }
  function ad() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const o = Kn.weather, r = o && (nn == null ? void 0 : nn[o]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + is("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (o ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ri(e);
      return;
    }
    const c = r.attributes || {}, p = c.temperature_unit || "°", k = (Je) => Number.isFinite(Number(Je)) ? Math.round(Number(Je)) + "°" : "—", _ = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", P = Zs[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), J = Pt(/* @__PURE__ */ new Date()), ee = ed.slice(0, 7), K = ee.find((Je) => Pt(new Date(Je.datetime)) === J) || null, Y = ee.filter((Je) => Pt(new Date(Je.datetime)) >= J).slice(0, 6), Me = /* @__PURE__ */ new Date(), Ve = Pt(new Date(Me.getFullYear(), Me.getMonth(), Me.getDate() + 1)), Te = K ? "H " + k(K.temperature) + "&ensp; L " + k(K.templow) : "", ye = (Je) => {
      const Ue = Pt(new Date(Je.datetime));
      return Ue === J ? "Today" : Ue === Ve ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Je.datetime));
    }, ve = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", lt = (Je) => {
      const Ue = new Date(Je.datetime);
      return Math.round((new Date(Ue.getFullYear(), Ue.getMonth(), Ue.getDate()) - new Date(Me.getFullYear(), Me.getMonth(), Me.getDate())) / 864e5);
    }, ct = (Je) => (Zs[Je] || Je || "").toLowerCase(), _e = (Je, Ue) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + lt(Je) + '" aria-label="' + Pe(ye(Je) + ": " + ct(Je.condition) + ", " + k(Je.temperature) + " / " + k(Je.templow) + ". Open the forecast") + '">' + is(Je.condition, !1, !1, $n, "day" + Ue) + '<div><div class="activityRowName">' + Pe(ye(Je)) + '</div><div class="activityRowMeta">' + k(Je.temperature) + " / " + k(Je.templow) + "</div></div></div>", ut = () => '<div class="wxStrip"><div class="wxStripDays">' + ao().days.map((Ue, Yt) => {
      const Nt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ue.start)) + ": " + ct(Ue.day) + (ct(Ue.day) === ct(Ue.night) ? " all day and night" : ", then " + ct(Ue.night) + " overnight") + (Number.isFinite(Ue.hi) ? ". High " + k(Ue.hi) : "") + (Number.isFinite(Ue.lo) ? ", low " + k(Ue.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Yt + '" aria-label="' + Pe(Nt) + '"><span class="wxDayName">' + Pe(nd(Ue.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + k(Ue.hi) + '</span><span class="wxLow">' + k(Ue.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Pe("Now in " + _ + ": " + ve + "°, " + ct(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + is(r.state, !0, !0, $n, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Pe(String(ve)) + '</span><span class="wxUnit">' + Pe(p) + '</span></div><div class="wxPlace">' + Pe(_) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Pe(P) + "</div>" + (Te ? '<div class="wxRange">' + Te + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (Y.length ? Xl === "strip" ? ut() : '<div class="activityRows wxDays">' + Y.map(_e).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ri(e);
    const xt = e.querySelector("canvas[data-wx-strip]");
    ds && ds !== xt && (da == null || da.unobserve(ds)), ds = xt, xt && (da == null || da.observe(xt), _r(e)), si(), sd();
  }
  const od = i("weatherCard"), id = (e) => {
    const o = e.closest("[data-wx-day]");
    if (o) {
      const c = /* @__PURE__ */ new Date();
      rd(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(o.dataset.wxDay), 12), o);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && rd(Date.now(), r);
  };
  od.addEventListener("click", (e) => id(e.target)), od.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), id(e.target));
  });
  const qn = i("wxDialog"), Ro = i("wxGraph"), Ar = i("wxGraphWrap");
  let Ma = Date.now(), li = null, Js = !1, Vi = null;
  function rd(e, o) {
    const r = ao();
    li = o || null, Ma = Math.max(r.start, Math.min(r.end - Ut, e)), ls.delete("dialog"), Lr.delete("scrub"), qn.classList.add("open"), qn.setAttribute("aria-hidden", "false"), sd(), da == null || da.observe(qn.querySelector("canvas[data-wx-strip]")), Ro.focus({ preventScroll: !0 }), si();
  }
  function Qs() {
    var e;
    qn.classList.remove("open"), qn.setAttribute("aria-hidden", "true"), da == null || da.unobserve(qn.querySelector("canvas[data-wx-strip]")), (e = li == null ? void 0 : li.focus) == null || e.call(li, { preventScroll: !0 }), li = null;
  }
  function sd() {
    if (!qn.classList.contains("open")) return;
    const e = ao();
    i("wxGraphDays").innerHTML = e.days.map((o) => "<span>" + Pe(nd(o.start)) + "</span>").join(""), ld(e), cs(e), _r(qn);
  }
  function cs(e = ao()) {
    const o = Xs(e, Ma), r = nn == null ? void 0 : nn[Kn.weather], c = (r == null ? void 0 : r.attributes) || {}, p = c.temperature_unit || "°", k = Math.abs(Ma - Date.now()) < Ut / 2, _ = k && r ? r.state : o.cond, P = k && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(o.temp) ? Math.round(o.temp) : "—", J = Zs[_] || (_ ? _.charAt(0).toUpperCase() + _.slice(1) : "—"), ee = k ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Ma / Ut) * Ut)), K = o.day, Y = (Number.isFinite(K.hi) ? "H " + Math.round(K.hi) + "°" : "") + (Number.isFinite(K.lo) ? "&ensp; L " + Math.round(K.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + is(_, !0, k, $n, "scrub", k ? void 0 : o.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Pe(String(P)) + '</span><span class="wxUnit">' + Pe(p) + '</span></div><div class="wxPlace">' + Pe(ee) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Pe(J) + "</div>" + (Y ? '<div class="wxRange">' + Y + "</div>" : "") + "</div>", ri(i("wxDialogNow")), Ro.setAttribute("aria-valuenow", String(Math.round((Ma - e.start) / Ut))), Ro.setAttribute("aria-valuetext", ee + ", " + J.toLowerCase() + ", " + P + "°"), el(e), si();
  }
  function ld(e = ao()) {
    const o = i("wxGraphLine"), r = Ar.clientWidth, c = Ar.clientHeight;
    if (!r || !c) return;
    const p = [];
    for (let ve = e.start; ve <= e.end; ve += Ut) {
      const lt = Xs(e, ve).temp;
      Number.isFinite(lt) && p.push([td(e, ve) * r, lt]);
    }
    if (o.setAttribute("viewBox", "0 0 " + r + " " + c), p.length < 2) {
      o.innerHTML = '<g id="wxCursorMark"></g>', Vi = null, el(e);
      return;
    }
    const k = p.map((ve) => ve[1]), _ = Math.min(...k), P = Math.max(...k), J = Math.max(4, P - _), ee = $n !== "smooth", K = (ve) => ee ? Math.round(ve / 2) * 2 : Math.round(ve * 10) / 10;
    Vi = (ve) => c * 0.84 - (ve - _) / J * c * 0.62;
    const Y = rs(), Me = $n === "onebit" ? Y.paper : "#ffffff", Ve = $n === "onebit" ? Y.ink : "rgba(0,0,0,.28)", Te = "M" + p.map((ve) => K(ve[0]) + " " + K(Vi(ve[1]))).join(" L"), ye = (ve, lt) => {
      const ct = p.find((_e) => _e[1] === ve);
      return '<text class="wxLineLabel" x="' + K(Math.min(r - 14, Math.max(14, ct[0]))) + '" y="' + K(Vi(ve) + (lt ? 18 : -10)) + '" fill="' + Me + '" stroke="' + Ve + '">' + Math.round(ve) + "°</text>";
    };
    o.setAttribute("shape-rendering", ee ? "crispEdges" : "auto"), o.innerHTML = '<path d="' + Te + '" fill="none" stroke="' + Ve + '" stroke-width="' + (ee ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Te + '" fill="none" stroke="' + Me + '" stroke-width="2" stroke-linejoin="round"/>' + ye(P, !1) + ye(_, !0) + '<g id="wxCursorMark"></g>', el(e);
  }
  function el(e = ao()) {
    const o = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!o) return;
    const r = Ar.clientWidth, c = Ar.clientHeight, p = $n !== "smooth", k = (Me) => p ? Math.round(Me / 2) * 2 : Me, _ = k(td(e, Ma) * r), P = Xs(e, Ma).temp, J = rs(), ee = $n === "onebit" ? J.paper : "#ffffff", K = $n === "onebit" ? J.ink : "rgba(0,0,0,.28)", Y = Vi && Number.isFinite(P) ? k(Vi(P)) : null;
    o.innerHTML = '<rect x="' + (_ - 2) + '" y="0" width="4" height="' + c + '" fill="' + K + '"/><rect x="' + (_ - 1) + '" y="0" width="2" height="' + c + '" fill="' + ee + '"/>' + (Y == null ? "" : p ? '<rect x="' + (_ - 5) + '" y="' + (Y - 5) + '" width="10" height="10" fill="' + ee + '" stroke="' + K + '" stroke-width="2"/>' : '<circle cx="' + _ + '" cy="' + Y + '" r="6" fill="' + ee + '" stroke="' + K + '" stroke-width="2"/>');
  }
  const dd = (e) => {
    const o = Ar.getBoundingClientRect();
    o.width && (Ma = $c(ao(), (e - o.left) / o.width), cs());
  };
  Ro.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Js = !0;
      try {
        Ro.setPointerCapture(e.pointerId);
      } catch {
      }
      dd(e.clientX);
    }
  }), Ro.addEventListener("pointermove", (e) => {
    Js && dd(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Ro.addEventListener(e, () => {
    Js = !1;
  })), Ro.addEventListener("keydown", (e) => {
    const o = ao(), r = { ArrowLeft: -Ut, ArrowRight: Ut, ArrowDown: -Ut, ArrowUp: Ut, PageUp: -24 * Ut, PageDown: 24 * Ut }[e.key];
    r ? (e.preventDefault(), Ma = Math.max(o.start, Math.min(o.end - Ut, Math.round(Ma / Ut) * Ut + r)), cs(o)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Ma = e.key === "Home" ? o.start : o.end - Ut, cs(o));
  }), i("wxDialogClose").addEventListener("click", Qs), qn.addEventListener("click", (e) => {
    e.target === qn && Qs();
  }), qn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Qs());
  }), ad(), (xd = (bd = window.matchMedia) == null ? void 0 : (wd = bd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || xd.call(wd, "change", () => {
    si(), ri(n);
  }), si();
  const cd = i("tvNav");
  s.fullscreenSupported || (cd.hidden = !0), cd.addEventListener("click", () => s.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ke.workout.classList.contains("active") || Da.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Qa.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const o = Math.max(1, Math.min(10, (Number($e.value) || 1) + Number(e.dataset.roundsStep)));
    String(o) !== $e.value && ($e.value = o, $e.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [S, M, E, $e].forEach((e) => e.addEventListener("input", () => {
    const o = ze[pt];
    o && (o.total = Number(S.value), o.work = Number(M.value), o.rest = Number(E.value)), H();
  })), Ce.addEventListener("click", Bi), Oe.addEventListener("click", () => x("settings")), i("settingsBack").addEventListener("click", Bi), Qa.addEventListener("click", () => ka(!mn)), kn(pt), yi(), Ea(), no(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), Ia(i("resetStats"), i("resetStatsFill"), 1500, () => {
    it.history = [], it.checkins = [], xo = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    an(), ii(), Ea(), yi(), no(), Ua(), Rt("Stats reset");
  });
  const tl = i("morningTime"), nl = i("eveningTime"), al = i("checkinAutoOpen");
  tl.value = ga().morning, nl.value = ga().evening, al.classList.toggle("on", Xe().checkinAutoOpen !== !1), [["morningTime", tl], ["eveningTime", nl]].forEach(([e, o]) => o.addEventListener("change", () => {
    o.value && (sa(e, o.value), Ua());
  })), al.addEventListener("click", () => {
    const e = Xe().checkinAutoOpen === !1;
    al.classList.toggle("on", e), sa("checkinAutoOpen", e);
  }), setTimeout(xi, 800);
  const ud = i("checkinNotify"), us = i("checkinNotifyTarget"), pd = i("checkinNotifyStatus"), Qc = pd.textContent;
  function md() {
    const e = s.notifyServices(), o = e.filter((p) => p.startsWith("mobile_app_")), r = o.length ? o : e, c = (p) => p.replace(/^mobile_app_/, "").replace(/_/g, " ");
    us.innerHTML = r.map((p) => '<option value="' + Pe(p) + '">' + Pe(c(p)) + "</option>").join(""), !Xe().notifyTarget && r[0] && (Xe().notifyTarget = r[0]), us.value = Xe().notifyTarget || "";
  }
  function ps() {
    const e = !!Xe().notifyOn;
    ud.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const o = ga();
    pd.textContent = e ? "Sends at " + o.morning + " and " + o.evening : Qc;
  }
  async function ol() {
    const e = !!Xe().notifyOn;
    try {
      return await s.setReminderAutomation(e ? { target: Xe().notifyTarget, times: ga() } : null), !0;
    } catch {
      return Rt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ud.addEventListener("click", async () => {
    const e = !Xe().notifyOn;
    if (e && (md(), !Xe().notifyTarget)) {
      Rt("Install the Companion app on your phone first");
      return;
    }
    Xe().notifyOn = e, ps(), await ol() ? (an(), Rt(e ? "Check-in notifications on" : "Check-in notifications off")) : (Xe().notifyOn = !e, ps());
  }), us.addEventListener("change", () => {
    sa("notifyTarget", us.value), Xe().notifyOn && ol();
  }), [tl, nl].forEach((e) => e.addEventListener("change", () => {
    ps(), Xe().notifyOn && ol();
  })), md(), ps();
  let il = null;
  function eu() {
    il || (il = setTimeout(() => {
      il = null, no();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, c;
      const o = !nn || nn[Kn.weather] !== e[Kn.weather] || ((r = nn["sun.sun"]) == null ? void 0 : r.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      nn = e, Vl(e), jl(e), o && ad(), Date.now() - Gl > 60 * 60 * 1e3 && Ul(), eu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (it.history = e.history, ii()), Array.isArray(e.history) && no(), Array.isArray(e.checkins) && (it.checkins = e.checkins.map(Oo), Ua(), yi(), Ea(), ii(), no()), e.profiles && !It.classList.contains("open") && !oa)) {
        const o = qa(e);
        Object.keys(ze).forEach((r) => delete ze[r]), Object.assign(ze, o.profiles), it.order = o.order, ze[pt] || (pt = it.order[0]), Gn(), kn(pt);
      }
    },
    suspend() {
      f = !1;
    },
    resume() {
      f || (f = !0, _o || (_o = requestAnimationFrame(Li)), Ln || (Ln = requestAnimationFrame(Ai)), si(), Sr(n.querySelector(".tab.active"), !1));
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
}, Dr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Xt = "made_up_", Gi = (n) => {
  var s;
  return (s = String(n).split(".")[1]) == null ? void 0 : s.startsWith(Xt);
}, gs = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Pl(n) {
  const s = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((s - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Au(n) {
  const s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +s; u < +n; u += 10 * 60 * 1e3) i += Pl(new Date(u)) / 6;
  return i;
}
function Sd(n = /* @__PURE__ */ new Date()) {
  const s = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    s.push([u, Pl(new Date(u))]);
  }
  return s;
}
function Eu({ onChange: n }) {
  const s = {}, i = {}, u = (j, q, $, O) => {
    s[j] = { entity_id: j, state: $, attributes: O, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[j] = q;
  }, h = (j, q, $) => {
    const O = s[j], Z = q ?? O.state;
    s[j] = { ...O, state: Z, attributes: { ...O.attributes, ...$ }, last_changed: Z === O.state ? O.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, f = (j, q, $, O) => u("binary_sensor." + Xt + (j ? j + "_" : "") + gs(q), j, O ? "on" : "off", { friendly_name: q, device_class: $ });
  Object.entries(_u).forEach(([j, q]) => {
    if (q.temperature != null && u("sensor." + Xt + j + "_temperature", j, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && u("sensor." + Xt + j + "_humidity", j, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && u("vacuum." + Xt + "robot", j, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && u("climate." + Xt + j, j, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [$, O, Z, ne] = q.cover;
      u("cover." + Xt + j + "_" + gs($), j, Z ? "open" : "closed", { friendly_name: $, device_class: O, current_position: Z, ...ne != null ? { current_tilt_position: ne } : {} });
    }
    if (q.humidifier && u("humidifier." + Xt + j, j, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (u("sensor." + Xt + j + "_solar_power", j, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Xt + j + "_solar_today", j, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && u("valve." + Xt + j + "_" + gs(q.valve), j, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && f(j, q.door, "door", q.doorOpen), q.window && f(j, q.window, "window", !1), q.motion && f(j, q.motion, "motion", !1), q.plant) {
      const [$, O, Z, ne, A] = q.plant, W = Xt + gs($), ge = (g, ke, Ce, Oe, x) => u("sensor." + W + "_" + g, j, String(Ce), { friendly_name: ke, device_class: x, state_class: "measurement", unit_of_measurement: Oe, plant_low: Ce < Dr[g][0], plant_high: Ce > Dr[g][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[g] });
      ge("moisture", "Moisture", O, "%", "moisture"), ge("light", "Light", Z, "lx", "illuminance"), ge("temperature", "Temperature", ne, "°C", "temperature"), ge("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Se = Object.entries({ moisture: O, light: Z, temperature: ne, fertility: A }).filter(([g, ke]) => ke < Dr[g][0] || ke > Dr[g][1]).map(([g, ke]) => g + (ke < Dr[g][0] ? " low" : " high"));
      u("plant." + W, j, Se.length ? "problem" : "ok", { friendly_name: $, moisture: O, brightness: Z, temperature: ne, conductivity: A, problem: Se.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Xt + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), f(null, "Front door", "door", !1), f(null, "Smoke alarm", "smoke", !1), u("sensor." + Xt + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, L = {};
  let v = null;
  function N() {
    const j = /* @__PURE__ */ new Date();
    Object.keys(s).forEach((q) => {
      q.endsWith("_solar_power") && (s[q] = { ...s[q], state: Pl(j).toFixed(2) }), q.endsWith("_solar_today") && (s[q] = { ...s[q], state: Au(j).toFixed(1) });
    });
  }
  N();
  let re = 0;
  function te() {
    let j = !1;
    const q = ++re % 10 === 0, $ = (ne, A, W) => {
      h(ne, A, W), j = !0;
    };
    Object.entries(w).forEach(([ne, A]) => {
      const W = s[ne].attributes.current_position, ge = W < A ? Math.min(A, W + 10) : Math.max(A, W - 10);
      ge === A && delete w[ne], $(ne, ge === A ? ge === 0 ? "closed" : "open" : A > W ? "opening" : "closing", { current_position: ge });
    }), Object.entries(L).forEach(([ne, A]) => {
      const W = s[ne].attributes.current_tilt_position, ge = W < A ? Math.min(A, W + 25) : Math.max(A, W - 25);
      ge === A && delete L[ne], $(ne, null, { current_tilt_position: ge });
    }), Object.keys(s).filter((ne) => ne.startsWith("climate.")).forEach((ne) => {
      const A = s[ne], W = A.attributes, ge = W.current_temperature, Se = (A.state === "heat" || A.state === "auto") && ge < W.temperature - 0.05, g = (A.state === "cool" || A.state === "auto") && ge > W.temperature + 0.05, ke = A.state === "off" ? "off" : Se ? "heating" : g ? "cooling" : "idle", Ce = q ? Math.round((ge + (Se ? 0.1 : g ? -0.1 : 0)) * 10) / 10 : ge;
      (Ce !== ge || ke !== W.hvac_action) && $(ne, null, { current_temperature: Ce, hvac_action: ke });
    }), Object.keys(s).filter((ne) => ne.startsWith("humidifier.")).forEach((ne) => {
      const A = s[ne], W = A.attributes, ge = W.current_humidity, Se = A.state === "on" && ge < W.humidity, g = Se && q ? ge + 1 : ge, ke = A.state !== "on" ? "off" : Se ? "humidifying" : "idle";
      if (g !== ge || ke !== W.action) {
        $(ne, null, { current_humidity: g, action: ke });
        const Ce = "sensor." + Xt + i[ne] + "_humidity";
        s[Ce] && $(Ce, String(g));
      }
    });
    const O = s["vacuum." + Xt + "robot"], Z = O.attributes;
    O.state === "cleaning" && q && $(O.entity_id, null, { battery_level: Math.max(5, Z.battery_level - 1) }), O.state === "returning" && $(O.entity_id, "docked", {}), O.state === "docked" && Z.battery_level < 100 && $(O.entity_id, null, { battery_level: Math.min(100, Z.battery_level + 2) }), v && Date.now() - v.at > 5e3 && ($("alarm_control_panel." + Xt + "house", "armed_" + v.mode, {}), v = null), j && n();
  }
  const R = setInterval(te, 1e3), B = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function G(j, q, $) {
    const O = $ == null ? void 0 : $.entity_id;
    if (!s[O]) return !1;
    const Z = s[O], ne = Z.attributes, A = (W, ge) => h(O, W, ge);
    if (j === "climate" && (q === "set_temperature" && A(null, { temperature: Math.max(ne.min_temp, Math.min(ne.max_temp, $.temperature)) }), q === "set_hvac_mode" && A($.hvac_mode, $.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && A(Z.state === "off" ? "heat" : "off", Z.state === "off" ? {} : { hvac_action: "off" })), j === "cover") {
      const W = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? $.position : q === "toggle" ? ne.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete w[O], delete L[O], A(ne.current_position === 0 ? "closed" : "open")), W != null && W !== ne.current_position && (w[O] = W, A(W > ne.current_position ? "opening" : "closing"));
      const ge = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? $.tilt_position : null;
      q === "stop_cover_tilt" && delete L[O], ge != null && ne.current_tilt_position != null && ge !== ne.current_tilt_position && (L[O] = ge);
    }
    if (j === "humidifier" && (q === "set_humidity" && A(null, { humidity: Math.max(ne.min_humidity, Math.min(ne.max_humidity, $.humidity)) }), q === "set_mode" && A(null, { mode: $.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const W = q === "turn_on" || q === "toggle" && Z.state !== "on";
      A(W ? "on" : "off", { action: W ? "idle" : "off" });
    }
    if (j === "vacuum" && (q === "start" && A("cleaning", { rooms: $.rooms || ne.rooms }), q === "pause" && A("paused"), q === "return_to_base" && A("returning", { rooms: [] }), q === "locate" && A(null, { located: Date.now() }), q === "set_rooms" && A(null, { rooms: $.rooms })), j === "valve") {
      const W = q === "open_valve" || q === "toggle" && Z.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && A(W ? "open" : "closed");
    }
    if (j === "alarm_control_panel") {
      q === "alarm_disarm" && (v = null, A("disarmed", { changed_by: "Matt" }));
      const W = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      W && (v = { mode: W, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function X(j) {
    const q = (j == null ? void 0 : j.states) || {}, $ = (j == null ? void 0 : j.entities) || {}, O = (j == null ? void 0 : j.devices) || {}, Z = (M) => {
      var se;
      const E = $[M];
      return E && (E.area_id || E.device_id && ((se = O[E.device_id]) == null ? void 0 : se.area_id)) || null;
    }, ne = (M) => {
      const E = $[M];
      return q[M] && q[M].state !== "unavailable" && !(E != null && E.hidden) && !(E != null && E.entity_category);
    }, A = {};
    Object.keys(q).forEach((M) => {
      const E = Z(M);
      E && ne(M) && (A[E] || (A[E] = [])).push(M);
    });
    const W = { ...q, ...s }, ge = (M) => {
      var E, se;
      return (se = (E = W[M]) == null ? void 0 : E.attributes) == null ? void 0 : se.device_class;
    }, Se = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], g = Object.keys(q).filter((M) => M.startsWith("vacuum.") && ne(M)), ke = Object.values((j == null ? void 0 : j.areas) || {}).filter((M) => !Lu.has(M.area_id)).map((M) => {
      const E = M.area_id, se = A[E] || [], V = (Ye) => se.filter((kt) => kt.startsWith(Ye + ".")), Q = (Ye) => V("sensor").filter((kt) => ge(kt) === Ye), oe = (Ye) => Object.keys(s).filter((kt) => i[kt] === E && Ye(kt)), de = (Ye, kt) => Ye.length ? Ye : oe(kt), We = de(Q("temperature"), (Ye) => Ye.endsWith(E + "_temperature")), $e = de(Q("humidity"), (Ye) => Ye.endsWith(E + "_humidity")), St = Q("power").filter((Ye) => /^(W|kW)$/.test(W[Ye].attributes.unit_of_measurement || "")), Jt = V("binary_sensor").filter((Ye) => ge(Ye) === "moisture"), jn = de(V("plant"), (Ye) => Ye.startsWith("plant.")).map((Ye) => ({ id: Ye, readings: oe((kt) => kt.startsWith("sensor." + Ye.split(".")[1] + "_")) })), Bt = [...V("binary_sensor").filter((Ye) => Se.includes(ge(Ye))), ...oe((Ye) => Ye.startsWith("binary_sensor."))];
      return {
        id: E,
        name: M.name,
        icon: M.icon,
        readings: [...We.slice(0, 1), ...$e.slice(0, 1), ...Jt],
        power: St.length ? St.reduce((Ye, kt) => Ye + Number(W[kt].state) * (W[kt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: V("switch"),
        lights: V("light"),
        actions: [...V("light"), ...de(V("climate"), (Ye) => Ye.startsWith("climate.")), ...de(V("cover"), (Ye) => Ye.startsWith("cover.")), ...de(V("humidifier"), (Ye) => Ye.startsWith("humidifier.")), ...de(V("valve"), (Ye) => Ye.startsWith("valve.")), ...V("media_player"), ...V("vacuum"), ...g.length ? [] : oe((Ye) => Ye.startsWith("vacuum."))],
        solar: oe((Ye) => Ye.includes("_solar_")),
        plants: jn,
        openings: Bt,
        alerts: [...Jt, ...Bt].filter((Ye) => {
          var kt;
          return ((kt = W[Ye]) == null ? void 0 : kt.state) === "on";
        })
      };
    }).filter((M) => M.readings.length || M.plugs.length || M.actions.length || M.solar.length || M.plants.length), Ce = Object.keys(q).find((M) => /^sensor\..*(p1_meter_power|grid_power)$/.test(M) && q[M].state !== "unavailable") || null, Oe = (M) => Object.keys(q).filter((E) => E.startsWith(M + ".") && ne(E)), x = Oe("alarm_control_panel"), S = g.length ? g : ["vacuum." + Xt + "robot"];
    return {
      states: W,
      rooms: ke,
      grid: Ce,
      vacuums: S,
      homeVacuums: S.filter((M) => !ke.some((E) => E.actions.includes(M))),
      security: {
        alarms: x.length ? x : ["alarm_control_panel." + Xt + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(s).filter((M) => M.startsWith("binary_sensor.")), "sensor." + Xt + "doorbell"]
      }
    };
  }
  return { model: X, call: G, stop() {
    clearInterval(R), clearInterval(B);
  } };
}
const io = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ll = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), i = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, Du = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), Td = {}, ha = (n, s, i) => {
  const u = n + s + i;
  return Td[u] || (Td[u] = Du(Ll(n).map((h, f) => h + (Ll(s)[f] - h) * i)));
}, Ld = {}, Ss = (n) => Ld[n] || (Ld[n] = Ll(n));
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
], oo = (n, s) => (Nu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, pc = 1, mc = 2, hc = 3, fc = 4, Zi = 5, Ls = 6, _l = 7, gc = 8, _d = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), Bu = (n, s, i) => {
  let u = !1;
  for (let h = 0, f = n.length - 1; h < n.length; f = h++) {
    const w = n[h], L = n[f];
    w[1] > i != L[1] > i && s < (L[0] - w[0]) * (i - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function Pu(n, s, i, u, { oneBit: h, ink: f, paper: w, snowInk: L }) {
  const v = new Uint8ClampedArray(i * u * 4), N = Ss(f), re = Ss(w);
  for (let te = 0; te < u; te++) for (let R = 0; R < i; R++) {
    const B = te * i + R, G = s[B];
    if (n[B] == null) continue;
    let X = Ss(n[B]);
    if (h) {
      let j;
      G === fc || G === gc ? j = !0 : G === Zi ? j = L : G === _l || G === Ls ? j = !1 : j = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= oo(R, te), (G === pc || G === mc || G === hc || G === Ls) && (R > 0 && s[B - 1] !== G || R < i - 1 && s[B + 1] !== G || te > 0 && s[B - i] !== G || te < u - 1 && s[B + i] !== G) && (j = !0), X = j ? N : re;
    }
    v[B * 4] = X[0], v[B * 4 + 1] = X[1], v[B * 4 + 2] = X[2], v[B * 4 + 3] = 255;
  }
  return { w: i, h: u, data: v };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (n) => Es(n, !1).split("/")[0], ll = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zu = [".##", "##.", ".#.", "#.."];
function vc(n, { width: s, height: i, colors: u, wave: h = 0.38, soft: f = 6, glow: w = 0.6, columns: L = 6 }) {
  const v = { ...so, dawn: "#e5a77e", ...u }, N = Ru(v), re = s, te = i, R = re / L, B = R / 2, G = Math.PI * 2, X = n.length ? n : [{ cond: "cloudy", night: !1 }], j = [...Array(L * 2)].map((Z, ne) => {
    const A = X[Math.min(ne, X.length - 1)], W = Hu(A.cond), ge = ne % 2 === 1;
    return { cond: A.cond, k: W, night: ge, sky: N[W][ge ? 1 : 0], cover: Iu[W] };
  }), q = (Z) => te * (0.5 - h * Math.cos(G * (Z / R - 0.25)));
  return { C: v, S: j, W: re, H: te, cw: R, sw: B, TAU: G, yb: q, side: (Z, ne, A) => {
    const W = (Z ? q(ne) - A : A - q(ne)) / Math.max(3, f * 1.4) + 0.5;
    return W <= 0 ? 0 : W >= 1 ? 1 : W;
  }, glowAt: (Z) => {
    const ne = ((Z / R - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(L - 1, Math.round(Z / R - 0.25))), W = Math.max(0, Math.min(L - 1, Math.round(Z / R - 0.75))), ge = 1 - (j[2 * A].cover + j[2 * W + 1].cover) / 2, Se = Math.sin(Math.PI * Math.min(1, Math.max(0, q(Z) / te)));
    return { c: ne < 0.5 ? v.dusk : v.dawn, a: w * (0.2 + 0.8 * ge) * Se * Se };
  }, soft: f, tw: R * 0.3, sy: te / 90 };
}
function bc(n, { clock: s = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: h, sw: f, side: w, C: L, TAU: v, sy: N } = n, re = s, te = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((R, B) => {
    const G = ll(u * 977 + B * 131 + 7), X = (B + 0.5) * f, j = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let q = 0; q < j; q++) {
      const $ = X + (G() - 0.5) * f * 1.6, O = (6 + G() * 76) * N, Z = G() < 0.35, ne = 1.8 + G() * 1.6, A = w(!0, $, O) * (Z ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(v * re / 2600 + q * 1.7 + B) : 1);
      A >= 0.03 && te.stars.push({ x: $, y: O, big: Z, size: ne, o: A });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const q = X + (G() - 0.5) * f * 0.3, $ = Math.min(15, f * 0.29);
      te.suns.push({ x: q, y: 32 * N, rad: $, halo: $ * 2.8 * (i ? 1 + 0.07 * Math.sin(v * re / 3600 + B) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const q = Math.min(0.78, f * 0.55 / 34), $ = X - 23 * q + (G() - 0.5) * f * 0.2;
      te.moons.push({ x: $ + 23 * q, y: (4 + (i ? 0.8 * Math.sin(v * re / 5200 + B) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), h.forEach((R, B) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!G) return;
    const X = ll(u * 577 + B * 71 + 3), j = (B + 0.5) * f, q = R.k === "rain" || R.k === "storm" || R.night ? L.cloudNight : L.cloudDay, $ = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let O = 0; O < G; O++) {
      const Z = f / 46 * (R.k === "partly" ? 0.85 : 0.75 + X() * 0.55), ne = j + (R.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (R.k === "partly" ? 40 : 6 + X() * 26) * N, W = i ? 2.5 * Math.sin(v * re / 9e3 + B * 1.3 + O * 2.1) : 0, ge = i ? 0.9 * Math.sin(v * re / 6100 + B + O) : 0;
      te.clouds.push({ x: ne - 23 * Z + W, y: A - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: q, o: $ * (G > 1 && O === 0 ? 0.85 : 1) });
    }
  }), h.forEach((R, B) => {
    const G = ll(u * 313 + B * 29 + 11), X = (B + 0.5) * f, j = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < j; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 44 + G() * 36, ne = 1;
      if (i) {
        const W = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        O -= 0.21 * (W - (Z - 44)), Z = 44 + W, ne = Math.min(1, W / 6, (36 - W) / 6);
      }
      Z *= N;
      const A = w(R.night, O, Z) * ne;
      A >= 0.05 && te.drops.push({ x: O, y: Z, o: A });
    }
    const q = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < q; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 40 + G() * 44, ne = 1;
      if (i) {
        const W = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + W, O += 1.6 * Math.sin(v * re / 2800 + $ * 1.9 + B), ne = Math.min(1, W / 6, (44 - W) / 6);
      }
      Z *= N;
      const A = w(R.night, O, Z) * ne;
      A >= 0.05 && te.flakes.push({ x: O, y: Z, o: A });
    }
    if (R.k === "fog") {
      const $ = R.night ? "#c8ccd6" : "#ffffff", O = R.night ? 0.28 : 0.62, Z = i ? 4 * Math.sin(v * re / 8e3 + B) : 0;
      for (let ne = 0; ne < 4; ne++) te.fogs.push({ x: X - f * 0.75 + ne % 2 * f * 0.18 + (ne % 2 ? Z : -Z), y: (30 + ne * 13) * N, w: f * 1.3, c: $, a: O });
    }
    if (R.k === "storm") {
      const $ = (re / 3400 + B * 0.37) % 1;
      te.bolts.push({ x: X + (G() - 0.5) * f * 0.3 - 5, y: 36 * N, o: i && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), te;
}
function ju(n, s, i, u, h, f, w, L) {
  const { S: v, C: N, cw: re, yb: te, glowAt: R, soft: B, tw: G, sy: X } = n, j = new Array(i * u), q = new Uint8Array(i * u), $ = new Uint8Array(i * u), O = (x, S, M, E, se) => {
    M == null || x < 0 || S < 0 || x >= i || S >= u || (E >= 1 || E > oo(x + 5, S + 3)) && (j[S * i + x] = M, q[S * i + x] = se);
  }, Z = (x, S, M, E) => {
    for (let se = Math.max(0, Math.floor(S - M) - 1); se <= Math.min(u - 1, S + M + 1); se++) for (let V = Math.max(0, Math.floor(x - M) - 1); V <= Math.min(i - 1, x + M + 1); V++) E(V, se, V + 0.5 - x, se + 0.5 - S);
  }, ne = (x, S, M) => {
    for (let se = 0; se < x.length - 1; se++) {
      const V = (se + S) * re;
      if (M < V - G / 2) return [x[se], x[se], 0];
      if (M <= V + G / 2) return [x[se], x[se + 1], (M - V + G / 2) / G];
    }
    const E = x[x.length - 1];
    return [E, E, 0];
  }, A = v.filter((x) => !x.night).map((x) => x.sky), W = v.filter((x) => x.night).map((x) => x.sky), ge = B / f, Se = 16 * X / f;
  for (let x = 0; x < i; x++) {
    const S = (x + 0.5) * h, M = te(S) / f, E = ne(A, 0.75, S), se = ne(W, 1.25, S), V = R(S);
    for (let Q = 0; Q < u; Q++) {
      const oe = oo(x, Q), de = Q + 0.5 - M, We = (ge > 0.01 ? io(0.5 + de / ge) : de > 0 ? 1 : 0) > oe;
      let $e = We ? E[2] > oe ? E[1] : E[0] : se[2] > oe ? se[1] : se[0];
      (We ? io(((Q + 0.5) / u - 0.45) / 0.55) * 0.7 : io(1 - (Q + 0.5) / (u * 0.55)) * 0.7) > oo(x + 2, Q + 5) && ($e = We ? ha($e, "#ffffff", 0.18) : ha($e, "#000000", 0.25)), We && de >= 0 && de < Se && V.a * 1.3 * (1 - de / Se) > oo(x + 6, Q + 1) && ($e = V.c), j[Q * i + x] = $e, $[Q * i + x] = We ? 0 : 1;
    }
  }
  const g = ha(N.sun, "#ffffff", 0.55), ke = ha(N.moon, "#ffffff", 0.6);
  s.stars.forEach((x) => {
    const S = Math.floor(x.x / h), M = Math.floor(x.y / f);
    if (S < 0 || M < 0 || S >= i || M >= u || !$[M * i + S] || x.o < 0.15) return;
    const E = x.o > 0.45 ? N.star : ha(N.star, j[M * i + S], 0.5), se = x.big && x.o > 0.6 ? Math.floor(x.size / h) : 0;
    O(S, M, E, 1, _l);
    for (let V = 1; V <= se; V++) [[S - V, M], [S + V, M], [S, M - V], [S, M + V]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < i && Q[1] < u && $[Q[1] * i + Q[0]] && O(Q[0], Q[1], E, 1, _l);
    });
  }), s.suns.forEach((x) => {
    const S = Math.max(1.5, x.rad / h), M = x.x / h, E = x.y / f, se = x.halo / h * 0.85;
    if (Z(M, E, se, (V, Q, oe, de) => {
      const We = Math.sqrt(oe * oe + de * de);
      We > S && We < se && !$[Q * i + V] && O(V, Q, g, 0.3 * (1 - (We - S) / (se - S)), 0);
    }), L) {
      const V = Math.floor(w / 500) % 2, Q = Math.max(1, S * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === V) for (let de = S + 1.2; de < S + 1.2 + Q; de += 0.7) O(Math.floor(M + Math.cos(oe * Math.PI / 4) * de), Math.floor(E + Math.sin(oe * Math.PI / 4) * de), N.sun, 1, gc);
    }
    Z(M, E, S, (V, Q, oe, de) => {
      oe * oe + de * de <= S * S && O(V, Q, io(((de / S + 1) / 2 - 0.6) / 0.4) > oo(V, Q) ? N.sunEdge : N.sun, 1, pc);
    });
  }), s.moons.forEach((x) => {
    const S = Math.max(1.5, x.d * 0.37 / h), M = x.x / h, E = x.y / f, se = M + 0.547 * S, V = E - 0.503 * S, Q = 0.82 * S;
    Z(M, E, S, (oe, de, We, $e) => {
      if (We * We + $e * $e > S * S) return;
      const St = oe + 0.5 - se, Jt = de + 0.5 - V;
      St * St + Jt * Jt > Q * Q && O(oe, de, io(($e + S) / (2 * S) * 1.1 - 0.1) > oo(oe, de) ? N.moon : ke, 1, mc);
    });
  }), s.clouds.forEach((x) => {
    const S = Math.max(3, x.w / h), M = S * 0.6665, E = x.x / h, se = x.y / f, V = ha(x.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(se) - 1); Q <= Math.min(u - 1, se + M + 1); Q++) for (let oe = Math.max(0, Math.floor(E) - 1); oe <= Math.min(i - 1, E + S + 1); oe++) {
      const de = (oe + 0.5 - E) / S, We = (Q + 0.5 - se) / S;
      _d(de, We) && O(oe, Q, !_d(de, We + 1 / S) || io((We - 0.42) / 0.25) * 0.8 > oo(oe, Q) ? V : x.fill, x.o, hc);
    }
  }), s.fogs.forEach((x) => {
    const S = Math.floor(x.y / f), M = Math.max(S, Math.floor((x.y + 6 * X) / f) - 1), E = Math.floor(x.x / h), se = Math.floor((x.x + x.w) / h);
    for (let V = S; V <= M; V++) for (let Q = E; Q <= se; Q++) {
      const oe = (Q - E) / Math.max(1, se - E);
      O(Q, V, x.c, x.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  s.drops.forEach((x) => {
    const S = x.x / h, M = Math.floor(x.y / f);
    for (let E = 0; E < Ce; E++) O(Math.floor(S - 0.208 * E * f / h), M + E, N.rain, x.o, fc);
  });
  const Oe = Math.max(0, Math.round(4.4 / h / 2.6));
  return s.flakes.forEach((x) => {
    const S = Math.floor(x.x / h), M = Math.floor(x.y / f);
    O(S, M, N.snow, x.o, Zi);
    for (let E = 1; E <= Oe; E++)
      O(S - E, M, N.snow, x.o, Zi), O(S + E, M, N.snow, x.o, Zi), O(S, M - E, N.snow, x.o, Zi), O(S, M + E, N.snow, x.o, Zi);
  }), s.bolts.forEach((x) => {
    if (h <= 3.5)
      for (let S = Math.floor(x.y / f); S <= (x.y + 24) / f; S++) for (let M = Math.floor(x.x / h); M <= (x.x + 11) / h; M++)
        Bu(Vu, (M + 0.5) * h - x.x, (S + 0.5) * f - x.y) && O(M, S, N.sun, 1, Ls);
    else {
      const S = Math.round(x.x / h), M = Math.round(x.y / f);
      zu.forEach((E, se) => E.split("").forEach((V, Q) => {
        V === "#" && O(S + Q, M + se, N.sun, 1, Ls);
      }));
    }
  }), { col: j, ids: q };
}
function Gu(n, s) {
  const i = s.px, u = Math.max(6, Math.round(s.width / i)), h = Math.max(6, Math.round(s.height / i)), f = s.width / u, w = s.height / h, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, v = (B) => {
    const G = vc(B, s);
    return ju(G, bc(G, { clock: L, ambient: s.ambient, seed: s.seed }), u, h, f, w, L, s.ambient);
  }, N = v(n), re = s.reveal == null ? 1 : io(s.reveal);
  let te = N.col, R = N.ids;
  if (re < 1) {
    const B = s.prev ? v(s.prev) : null, G = re * (u + 12);
    te = new Array(u * h), R = new Uint8Array(u * h);
    for (let X = 0; X < u * h; X++) {
      const j = X % u, q = X / u | 0;
      (s.reduce ? re : io((G - j) / 12)) > oo(j, q) ? (te[X] = N.col[X], R[X] = N.ids[X]) : B ? (te[X] = B.col[X], R[X] = B.ids[X]) : (te[X] = null, R[X] = 255);
    }
  }
  return Pu(te, R, u, h, { oneBit: s.oneBit, ink: s.ink || "#26221e", paper: s.paper || "#fbf9f6", snowInk: !1 });
}
function Uu(n, s, i) {
  const u = i.width, h = i.height, f = i.reveal == null ? 1 : io(i.reveal), w = (R, B) => {
    const G = vc(B, i);
    Yu(R, G, bc(G, i));
  };
  if (n.clearRect(0, 0, u, h), f >= 1) {
    w(n, s);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = f, w(n, s), n.restore();
    return;
  }
  const L = n.canvas, v = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (v.width !== L.width || v.height !== L.height) && (v.width = L.width, v.height = L.height);
  const N = v.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, h), w(N, s);
  const re = f * (u + 64) - 64, te = N.createLinearGradient(re, 0, re + 64, 0);
  te.addColorStop(0, "rgba(0,0,0,1)"), te.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = te, N.fillRect(0, 0, u, h), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(v, 0, 0), n.restore();
}
function Yu(n, s, i) {
  const { W: u, H: h, S: f, C: w, cw: L, yb: v, glowAt: N, soft: re, tw: te, sy: R } = s, B = (g, ke) => {
    const Ce = Ss(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, G = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const x = (Oe + ke) * L, S = (x - te / 2) / u, M = (x + te / 2) / u;
      S > 0 && S < 1 && Ce.addColorStop(S, g[Oe]), M > 0 && M < 1 && Ce.addColorStop(M, g[Oe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), j = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Oe = u * Ce / X, x = g == null ? 0 : v(Oe) + g;
      Ce ? n.lineTo(Oe, x) : n.moveTo(Oe, x);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Oe = u * Ce / X;
      n.lineTo(Oe, v(Oe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, h);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = N(u * g / 64);
    q.addColorStop(g / 64, B(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, j(g * 2 * R, (g + 1) * 2 * R);
  n.fillStyle = G(f.filter((g) => g.night).map((g) => g.sky), 1.25);
  const $ = Math.max(0.5, re), O = 6;
  n.globalAlpha = 1, j(null, -$);
  for (let g = 0; g < O; g++)
    n.globalAlpha = 1 - (g + 0.5) / O, j(-$ + 2 * $ * g / O, -$ + 2 * $ * (g + 1) / O);
  n.globalAlpha = 1;
  const Z = new Path2D(Wu), ne = new Path2D(Ou), A = new Path2D(Fu), W = new Path2D(qu);
  n.fillStyle = w.star, i.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ge = ha(w.sun, "#ffffff", 0.55);
  i.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, B(ge, 0.42)), ke.addColorStop(0.7, B(ge, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = ha(w.moon, "#ffffff", 0.6);
  i.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ne), n.restore();
  }), i.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), i.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, B(g.c, 0)), ke.addColorStop(0.25, B(g.c, g.a)), ke.addColorStop(0.75, B(g.c, g.a)), ke.addColorStop(1, B(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * R);
  }), n.fillStyle = w.rain, i.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
const Zu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Ui = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, vs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, dl = (n, s) => '<path class="' + s + '" d="' + n + '"/>', Ku = (n, s) => ' style="animation-delay:-' + Math.round(n * 137 % s) + 'ms"', ca = (n, s, i, u) => {
  const h = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ku(n, 2400) + ' d="M' + n + " " + (s - i) + "L" + (n + h) + " " + (s - h) + "L" + (n + i) + " " + s + "L" + (n + h) + " " + (s + h) + "L" + n + " " + (s + i) + "L" + (n - h) + " " + (s + h) + "L" + (n - i) + " " + s + "L" + (n - h) + " " + (s - h) + 'Z"/>';
}, Ad = ([n, s, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + s + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $u = (n, s) => s ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Xu = (n) => (n ? ["29.35", "43.04", "56.74"].map((s, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Ju = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + s + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Qu(n, s, i, u) {
  return n === "clear" ? s ? Ad(i ? vs.l : vs.s, u) + (i ? ca(70, 20, 5.83, 1) + ca(78.33, 41.67, 3.75, 0.8) + ca(60, 71.67, 3.33, 0.6) : ca(42, 12, 3.5, 1) + ca(47, 25, 2.25, 0.8) + ca(36, 43, 2, 0.6)) : $u(u, i) : n === "partly" ? (s ? Ad(i ? vs.lp : vs.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + dl(i ? Ui.lp : Ui.sp, s ? "wbCloudLight" : "wbBright") + (s ? i ? ca(73.33, 16.67, 4.17, 0.9) : ca(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? dl(i ? Ui.lc : Ui.s, s ? "wbCloudLight" : "wbBright") + (s ? i ? ca(15, 15, 3.75, 0.8) + ca(76.67, 13.33, 2.92, 0.6) : ca(9, 9, 2.25, 0.8) + ca(46, 8, 1.75, 0.6) : "") : dl(i ? Ui.lr : Ui.s, "wbCloudLight") + (n === "rain" ? Xu(i) : Ju(i));
}
function ep(n, s, i, u) {
  let h = Zu(n);
  const f = h === "night" || !!i;
  h === "night" && (h = "clear");
  const w = s ? 90 : 54;
  return { k: h, night: f, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Qu(h, f, s, u) + "</svg>" };
}
const Oa = 6e4, Ha = 36e5, di = 864e5, Pr = 1440, tp = 6, np = 10 * Oa, bs = 3, cl = 20, ap = 3, op = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), ip = 30 * Oa, rp = 7, sp = 3, Ed = 1, lp = Oa, dp = 15 * Oa, Vn = {
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
}, nt = {
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
}, up = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], pp = Object.keys(nt.phases), ws = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, wc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], xs = 100, Dd = "µg/m³", hp = "weather_alerts.air_quality_pollen", Rd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bp = { daily: 1, hourly: 2 }, He = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), ua = (n, s) => n.replace(/\{(\w+)\}/g, (i, u) => s[u] ?? ""), Ki = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, yn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Nd = /* @__PURE__ */ new Map(), Bd = /* @__PURE__ */ new Map(), ul = /* @__PURE__ */ new WeakMap(), xp = (n) => {
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
function un(n, s, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const h = (s == null ? void 0 : s.number_format) === "none", f = { maximumFractionDigits: 2, ...i, ...h ? { useGrouping: !1 } : {} }, w = h ? "en-US" : xp(s), L = JSON.stringify([w, f]);
  let v = Nd.get(L);
  if (!v) {
    try {
      v = new Intl.NumberFormat(w, f);
    } catch {
      v = new Intl.NumberFormat(void 0, f);
    }
    Nd.set(L, v);
  }
  return v.format(u);
}
const Il = (n) => {
  var s;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.language) || (n == null ? void 0 : n.language) || void 0;
};
function yp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (ul.has(n)) return ul.get(n);
  const s = n.time_format, i = s === "language" || s === "system" || !s ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(s === "language" ? n.language : void 0).includes("10") : s === "12";
  return ul.set(n, i), i;
}
const xc = (n) => {
  var s, i;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function yc(n, s) {
  const i = JSON.stringify([n, s]);
  let u = Bd.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, s);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...s, timeZone: void 0 });
    }
    Bd.set(i, u);
  }
  return u;
}
const Yi = (n, s) => yc(Il(s), { hour: "numeric", minute: "2-digit", hourCycle: yp(s == null ? void 0 : s.locale) ? "h12" : "h23", timeZone: xc(s) }).format(n), Pd = (n, s) => yc(Il(s), { weekday: "short", timeZone: xc(s) }).format(n), kp = (n, s) => n.toLocaleDateString(Il(s), { weekday: "narrow" }), En = (n, s) => yn(s) ? un(Math.round(Number(s)), n.locale) + "°" : "–", $i = (n) => {
  const s = new Date(n);
  return s.setHours(0, 0, 0, 0), s;
}, Rr = (n, s) => n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth() && n.getDate() === s.getDate(), zn = Math.PI / 180, Mp = 2440588, Cp = 2451545, _s = zn * 23.4397, Sp = 149598e3, Tp = -0.833 * zn, Lp = 0.133 * zn, Id = 5 * Oa, kc = (n) => n.getTime() / di - 0.5 + Mp - Cp, Mc = (n, s) => Math.atan2(Math.sin(n) * Math.cos(_s) - Math.tan(s) * Math.sin(_s), Math.cos(n)), Cc = (n, s) => Math.asin(Math.sin(s) * Math.cos(_s) + Math.cos(s) * Math.sin(_s) * Math.sin(n)), _p = (n, s) => zn * (280.16 + 360.9856235 * n) - s, Ap = (n, s, i) => Math.asin(Math.sin(s) * Math.sin(i) + Math.cos(s) * Math.cos(i) * Math.cos(n));
function Sc(n) {
  const s = zn * (357.5291 + 0.98560028 * n), i = zn * (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)), u = s + i + zn * 102.9372 + Math.PI;
  return { ra: Mc(u, 0), dec: Cc(u, 0), dist: Sp };
}
function Tc(n) {
  const s = zn * (218.316 + 13.176396 * n), i = zn * (134.963 + 13.064993 * n), u = zn * (93.272 + 13.22935 * n), h = s + zn * 6.289 * Math.sin(i), f = zn * 5.128 * Math.sin(u);
  return { ra: Mc(h, f), dec: Cc(h, f), dist: 385001 - 20905 * Math.cos(i) };
}
const Lc = (n, s, i, u) => {
  const h = kc(s), f = n(h);
  return Ap(_p(h, zn * -u) - f.ra, zn * i, f.dec);
}, Hl = (n, s, i) => Lc(Sc, n, s, i), Ep = (n, s, i) => Lc(Tc, n, s, i);
function _c(n, s, i, u) {
  const h = {};
  let f = i.getTime(), w = n(i) - s;
  for (let L = f + Id; L <= u.getTime(); L += Id) {
    const v = n(new Date(L)) - s;
    if (w < 0 != v < 0) {
      const N = new Date(f + (L - f) * w / (w - v));
      v > 0 ? h.rise ?? (h.rise = N) : h.set ?? (h.set = N);
    }
    f = L, w = v;
  }
  return h;
}
const Ac = (n) => {
  const s = $i(n);
  return [s, new Date(s.getTime() + di)];
}, Dp = (n, s, i) => _c((u) => Hl(u, s, i), Tp, ...Ac(n)), Rp = (n, s, i) => _c((u) => Ep(u, s, i), Lp, ...Ac(n));
function Np(n) {
  const s = kc(n), i = Sc(s), u = Tc(s), h = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), f = Math.atan2(i.dist * Math.sin(h), u.dist - i.dist * Math.cos(h)), w = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(f)) / 2, phase: 0.5 + 0.5 * f * (w < 0 ? -1 : 1) / Math.PI };
}
const Bp = (n) => {
  const s = n * 28;
  return s < 0.5 || s > 27.5 ? "new_moon" : s < 6.5 ? "waxing_crescent" : s < 7.5 ? "first_quarter" : s < 13.5 ? "waxing_gibbous" : s < 14.5 ? "full_moon" : s < 20.5 ? "waning_gibbous" : s < 21.5 ? "last_quarter" : "waning_crescent";
}, As = (n) => {
  const s = n == null ? void 0 : n.config;
  return s && yn(s.latitude) && yn(s.longitude) ? { lat: Number(s.latitude), lon: Number(s.longitude) } : null;
};
function Hd(n, s) {
  var N, re, te;
  const i = As(n), u = i ? Dp(s, i.lat, i.lon) : {}, h = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], f = $i(s).getTime(), w = (R) => {
    const B = R ? new Date(R) : null;
    return B && Number.isFinite(B.getTime()) && $i(B).getTime() === f ? B : null;
  }, L = w((re = h == null ? void 0 : h.attributes) == null ? void 0 : re.next_rising), v = w((te = h == null ? void 0 : h.attributes) == null ? void 0 : te.next_setting);
  return L && (u.rise = L), v && (u.set = v), u;
}
function Pp(n) {
  var u;
  const s = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((s == null ? void 0 : s.state) === "below_horizon" || (s == null ? void 0 : s.state) === "above_horizon") return s.state === "below_horizon";
  const i = As(n);
  return i ? Hl(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Ir = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Ds = (n, s) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[s];
  return !i || !i.hidden && !i.entity_category;
}, pa = (n, s, i) => {
  var u, h;
  for (const f of s) {
    const w = (u = n.states) == null ? void 0 : u[f];
    if (!Ir(w)) continue;
    const L = (h = w.attributes) == null ? void 0 : h[i];
    if (L != null && L !== "") return { stateObj: w, value: L };
  }
}, Ip = (n, s) => s.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(Ir), Hp = (n, s, i) => s.map((u) => {
  var h;
  return (h = n.states) == null ? void 0 : h[u];
}).find((u) => {
  var h;
  return Ir(u) && (((h = u.attributes) == null ? void 0 : h.supported_features) == null || Number(u.attributes.supported_features) & bp[i]);
});
function Br(n, s, i) {
  var f, w, L, v;
  const u = ((w = (f = n.config) == null ? void 0 : f.unit_system) == null ? void 0 : w.length) || "", h = (s == null ? void 0 : s.attributes) || {};
  switch (i) {
    case "precipitation":
      return h.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return h.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return h.wind_speed_unit || u + "/h";
    default:
      return h.temperature_unit || ((v = (L = n.config) == null ? void 0 : L.unit_system) == null ? void 0 : v.temperature) || "";
  }
}
function Al(n, s, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [h, ...f] = n.formatEntityAttributeValueToParts(s, i, u).map((w) => w.value);
      return { number: h, unit: f.join("").trim() };
    }
  } catch {
  }
  return { number: un(u, n.locale), unit: Br(n, s, i) };
}
function Fp(n, s, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(s, i, u);
  } catch {
  }
  const h = Al(n, s, i, u);
  return (h.number + " " + h.unit).trim();
}
function ys(n, s) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(s);
  } catch {
  }
  const i = (u = s.attributes) == null ? void 0 : u.unit_of_measurement;
  return cp[s.state] || (i && yn(s.state) ? un(s.state, n.locale) + " " + i : s.state);
}
function Fd(n, s) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(s, { type: "entity" });
  } catch {
  }
  return ((i = s.attributes) == null ? void 0 : i.friendly_name) || s.entity_id;
}
const Op = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Wp = (n) => wc.find(([, s]) => n <= s)[0];
function qp(n, s) {
  if (s === "Beaufort") return Math.round(n);
  const i = s ? fp[s] : void 0;
  if (i === void 0) return;
  const u = gp.findIndex((h) => n * i < h);
  return u === -1 ? 12 : u;
}
const Od = (n, s) => {
  const i = s ? vp[s] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Wd = (n) => Object.keys(n.states || {}).find((s) => {
  var i, u;
  return s.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[s]) == null ? void 0 : u.platform) === "moon";
}), pl = (n) => Object.values(n.states || {}).filter((s) => {
  var i, u;
  return s.entity_id.startsWith("sensor.") && ((i = s.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = s.attributes) == null ? void 0 : u.state_class) ?? "") && Ds(n, s.entity_id);
}).map((s) => s.entity_id).sort()[0];
function Vp(n) {
  var i;
  const s = {};
  for (const [u, h] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (h && "integration_type" in h) {
      s[u] = h.categories;
      continue;
    }
    for (const [f, w] of Object.entries((h == null ? void 0 : h.integrations) ?? {})) s[f] = w == null ? void 0 : w.categories;
  }
  return s;
}
const Ec = (n, s, i) => {
  var h, f, w;
  const u = (f = (h = n.entities) == null ? void 0 : h[i]) == null ? void 0 : f.platform;
  return !!u && !!((w = s[u]) != null && w.includes(hp));
};
function zp(n, s) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var h;
    return u.entity_id.startsWith("sensor.") && Rd.includes(((h = u.attributes) == null ? void 0 : h.device_class) ?? "") && Ds(n, u.entity_id) && Ec(n, s, u.entity_id);
  }).sort((u, h) => u.entity_id.localeCompare(h.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), Rd.map((u) => i.get(u)).filter(Boolean);
}
const jp = (n, s) => Object.values(n.states || {}).filter((i) => {
  var u, h;
  return i.entity_id.startsWith("sensor.") && Ds(n, i.entity_id) && Ec(n, s, i.entity_id) && (((h = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : h.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function qd(n, s, i) {
  const u = Math.max(s - n, 1e-6), h = i[i.length - 1], f = i.find((N) => u / N <= 4) ?? h * Math.ceil(u / (4 * h)), w = Math.floor(n / f) * f;
  let L = Math.ceil(s / f) * f;
  L === w && (L = w + f);
  const v = [];
  for (let N = w; N <= L + f / 1e3; N += f) v.push(N);
  return { min: w, max: L, ticks: v };
}
const Nr = (n, s, i) => {
  const u = (w) => [1, 3, 5].map((L) => parseInt(w.slice(L, L + 2), 16)), h = u(n), f = u(s);
  return "rgb(" + h.map((w, L) => Math.round(w + (f[L] - w) * i)).join(", ") + ")";
}, Gp = (n, s, i, u) => {
  const h = i * Math.abs(1 - 2 * u), f = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (s - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (s + i) + " A " + h + " " + i + " 0 0 " + f + " " + n + " " + (s - i) + " Z";
}, Po = ({ icon: n, name: s, sub: i, visual: u, double: h, backdrop: f, cls: w }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (f ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (f ? '<div class="wbBackdrop" aria-hidden="true">' + f + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Ki(n) + '</div><div class="wbText"><span class="wbName">' + He(s) + "</span>" + (i ? '<span class="wbSub">' + He(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + u + "</div></div>", ml = (n, s) => '<div class="wbValue"><span class="wbNum">' + He(n) + "</span>" + (s ? '<span class="wbUnitV">' + He(s) + "</span>" : "") + "</div>";
function Up(n) {
  const s = n.max - n.min || 1, i = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / s * 100, u = (L) => L / Pr * 100 + "%", h = (L) => L.map((v) => v.t + "," + i(v.v)).join(" "), f = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + u(L.t) + '">' + Ki(L.rise ? Vn.sunsetUp : Vn.sunsetDown) + He(L.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + i(L) + '%">' + He(n.format(L)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Pr + ' 100" preserveAspectRatio="none">' + n.night.map(([L, v]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (v - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + Pr + '" y1="' + i(L) + '" y2="' + i(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (f.length > 1 ? '<polygon class="wbDcArea" points="' + f[0].t + ",100 " + h(f) + " " + f[f.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(f) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + u(L.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + He(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + He(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + u(L.t) + '">' + He(L.label) + "</span>").join("") + "</div></div>", w;
}
function Yp(n, s) {
  const w = n.map((j) => j.value), L = Math.min(...w), v = Math.max(...w), N = v - L || 1, re = (j) => j / (n.length - 1) * 300, te = (j) => 18 + (1 - (j - L) / N) * 84, R = n.map((j, q) => re(q) + "," + te(j.value)).join(" "), B = w.indexOf(v), G = w.indexOf(L), X = (j) => j === 0 ? "start" : j === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + R + ' 300,102"></polygon><polyline class="wbLine" points="' + R + '" vector-effect="non-scaling-stroke"></polyline><text x="' + re(B) + '" y="' + (te(v) - 6) + '" text-anchor="' + X(B) + '">' + He(s(v)) + '</text><text x="' + re(G) + '" y="' + (te(L) + 14) + '" text-anchor="' + X(G) + '">' + He(s(L)) + '</text><text x="0" y="120" text-anchor="start">' + He(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + He(n[n.length - 1].label) + "</text></svg>";
}
function Zp(n, s) {
  const f = n.map((te) => te.value).concat([]), w = Math.min(...f) - 2, L = Math.max(...f) + 1, v = L - w || 1, N = 300 / n.length, re = (te) => (1 - (te - w) / v) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((te, R) => '<rect class="wbBar' + (te.now ? " wbNowBar" : "") + '" x="' + (R * N + N * 0.2) + '" y="' + re(te.value) + '" width="' + N * 0.6 + '" height="' + (104 - re(te.value)) + '" rx="6"></rect><text x="' + (R * N + N / 2) + '" y="120" text-anchor="middle">' + He(te.label) + "</text>").join("") + "</svg>";
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
], $p = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Vd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Xp = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Jp = 0;
function zd(n, { getHass: s, entityId: i, style: u = "bitmap", motion: h = !0, cards: f, onOpen: w } = {}) {
  var Ca, po;
  const L = "wb" + ++Jp + "-", v = document.createElement("div");
  v.className = "wb";
  const N = document.createElement("div");
  N.className = "wbBento", v.appendChild(N), n.replaceChildren(v);
  const re = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((C) => !f || f.includes(C)), te = { current: "wide", hourly: "wide", compared_to_average: "double" }, R = {};
  re.forEach((C) => {
    const D = document.createElement("div");
    D.className = "wbItem", D.dataset.card = C, D.dataset.size = te[C] || "tile", D.hidden = !0, N.appendChild(D), R[C] = { el: D, html: null };
  });
  let B = !1, G = null, X = 0, j = -1, q = !1, $ = null;
  const O = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ne = /* @__PURE__ */ new Date(), A = /* @__PURE__ */ new Date(), W = null;
  const ge = {}, Se = {}, g = (C) => {
    var D;
    return ((D = Se[C]) == null ? void 0 : D.forecast) ?? [];
  }, ke = (C, D) => {
    var I;
    return Se[D] ? (I = C.states) == null ? void 0 : I[Se[D].entityId] : void 0;
  };
  function Ce(C) {
    const D = ge[C];
    D && (D.unsub.then((I) => {
      typeof I == "function" && I();
    }).catch(() => {
    }), delete ge[C]), Se[C] && delete Se[C];
  }
  function Oe(C, D, I) {
    var ce;
    if (typeof ((ce = C.connection) == null ? void 0 : ce.subscribeMessage) != "function") return;
    const H = { entityId: I };
    try {
      H.unsub = Promise.resolve(C.connection.subscribeMessage((be) => {
        B || ge[D] !== H || (be != null && be.forecast ? Se[D] = { entityId: I, forecast: be.forecast } : delete Se[D], Ee());
      }, { type: "weather/subscribe_forecast", forecast_type: D, entity_id: I }));
    } catch (be) {
      H.unsub = Promise.reject(be);
    }
    H.unsub.catch(() => {
      ge[D] === H && delete ge[D];
    }), ge[D] = H;
  }
  function x(C, D) {
    var I;
    for (const H of ["daily", "hourly"]) {
      const ce = Hp(C, D, H);
      ((I = ge[H]) == null ? void 0 : I.entityId) !== (ce == null ? void 0 : ce.entity_id) && (Ce(H), ce && Oe(C, H, ce.entity_id));
    }
  }
  const S = (C, D, I, H = !1) => C.callWS({
    type: "history/history_during_period",
    start_time: I.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [D],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  });
  async function M(C, D) {
    var he, xe, le;
    const I = pa(C, D, "pressure");
    if (!I) return;
    const H = I.stateObj.entity_id, ce = await S(C, H, new Date(Date.now() - 3 * Ha)), be = (le = (xe = (he = ce == null ? void 0 : ce[H]) == null ? void 0 : he.find((Ae) => {
      var Fe;
      return typeof ((Fe = Ae.a) == null ? void 0 : Fe.pressure) == "number";
    })) == null ? void 0 : xe.a) == null ? void 0 : le.pressure;
    Z.pressureHistory = typeof be == "number" ? { entityId: H, value: be } : void 0;
  }
  async function E(C, D) {
    var xe;
    const I = pa(C, D, "temperature");
    if (!I) return;
    const H = I.stateObj.entity_id, ce = $i(/* @__PURE__ */ new Date()), be = await S(C, H, new Date(ce.getTime() - rp * di)), he = /* @__PURE__ */ new Map();
    for (const le of (be == null ? void 0 : be[H]) ?? []) {
      const Ae = (xe = le.a) == null ? void 0 : xe.temperature, Fe = new Date((le.lc ?? le.lu) * 1e3);
      if (typeof Ae != "number" || Fe >= ce) continue;
      const Ze = Fe.toDateString();
      he.set(Ze, Math.max(he.get(Ze) ?? -1 / 0, Ae));
    }
    Z.temperatureHistory = { entityId: H, dailyHighs: [...he.values()], days: [...he.entries()].map(([le, Ae]) => ({ date: new Date(le), high: Ae })) };
  }
  async function se(C) {
    const D = pl(C);
    if (!D) return;
    const I = await C.callWS({ type: "recorder/statistic_during_period", statistic_id: D, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: D, change: (I == null ? void 0 : I.change) ?? void 0 };
  }
  function V() {
    const C = s == null ? void 0 : s();
    if (!C || B || typeof C.callWS != "function") return;
    const D = We(C);
    Z.lastFetch = Date.now(), [M(C, D), E(C, D), se(C)].forEach((I) => I.then(() => Ee(), () => {
    }));
  }
  async function Q() {
    const C = s == null ? void 0 : s();
    if (!C) return;
    const D = pa(C, We(C), "temperature");
    if (!D) return;
    const I = D.stateObj.entity_id, H = $i(/* @__PURE__ */ new Date());
    try {
      const ce = await S(C, I, H), be = (he) => ((ce == null ? void 0 : ce[I]) ?? []).map((xe) => {
        var le;
        return { time: xe.lu * 1e3, value: (le = xe.a) == null ? void 0 : le[he] };
      }).filter((xe) => typeof xe.value == "number");
      Z.todayHistory = { day: H.toDateString(), fetched: Date.now(), temperature: be("temperature"), humidity: be("humidity") }, Ee();
    } catch {
    }
  }
  async function oe(C) {
    const D = s == null ? void 0 : s();
    if (D)
      try {
        const I = await S(D, C, new Date(Date.now() - 24 * Ha), !0), H = ((I == null ? void 0 : I[C]) ?? []).filter((be) => yn(be.s)), ce = Math.max(1, Math.ceil(H.length / 48));
        Z.aqHistory = { entityId: C, points: H.filter((be, he) => he % ce === 0).map((be) => ({ label: Yi(new Date(be.lu * 1e3), D), value: Number(be.s) })) }, Ee();
      } catch {
      }
  }
  function de(C) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => C.callWS({ type: "integration/descriptions" })).then((D) => {
      Z.categories = Vp(D);
    }, () => {
      Z.categories = {};
    }).then(() => Ee()));
  }
  function We(C) {
    var I;
    const D = Object.keys(C.states || {}).filter((H) => H.startsWith("weather.") && Ds(C, H)).sort();
    return i && ((I = C.states) != null && I[i]) ? [i, ...D.filter((H) => H !== i)] : D;
  }
  const $e = (C) => Z.categories ? { air: zp(C, Z.categories), pollen: jp(C, Z.categories) } : { air: [], pollen: [] };
  function St(C, D, I, H) {
    if (u === "smooth") {
      const ce = ep(C, D === 90, I, L + "g-" + H);
      return '<span class="wbWx wbS' + D + " wb" + ce.k[0].toUpperCase() + ce.k.slice(1) + (ce.night ? " wbNight" : "") + '" aria-hidden="true">' + ce.svg + "</span>";
    }
    return '<span class="wbWx wbS' + D + '" aria-hidden="true"><canvas data-wb-wx="' + He(Es(C, I)) + '" data-size="' + D + '"></canvas></span>';
  }
  const Jt = () => g("daily").filter((C) => C.templow != null).slice(0, tp);
  function jn(C, D) {
    const I = new Date(D.datetime), H = /* @__PURE__ */ new Date();
    return Rr(I, H) ? nt.today : Rr(I, new Date(H.getTime() + di)) ? nt.tomorrow : Pd(I, C);
  }
  const Bt = (C, D, I) => I === 0 ? jn(C, D) : Pd(new Date(D.datetime), C);
  function Ye(C, D) {
    var Fe, Ze, Ge, De;
    const I = Ip(C, D);
    if (!I) return "";
    const H = Jt(), ce = O.openDay !== void 0 ? H[O.openDay] : void 0, be = pa(C, D, "temperature"), he = H[0], xe = he && Rr(new Date(he.datetime), /* @__PURE__ */ new Date()), le = ((Ze = (Fe = C.config) == null ? void 0 : Fe.unit_system) == null ? void 0 : Ze.temperature) || ((Ge = I.attributes) == null ? void 0 : Ge.temperature_unit) || "";
    let Ae = '<div class="wbCard wbWeather' + (ce ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (ce ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + He(nt.openPage) + '">' : '<div class="wbCurrent">') + St(I.state, 90, Pp(C), "now") + '<div class="wbTempBlock">' + (be && yn(be.value) ? '<div class="wbTemp"><span class="wbDeg">' + He(un(Math.round(Number(be.value)), C.locale)) + '</span><span class="wbUnit">' + He(le) + "</span></div>" : "") + '<div class="wbPlace">' + He(((De = C.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + He(ys(C, I)) + "</div>" + (xe && he.templow != null ? '<div class="wbRange">' + He(ua(nt.range, { high: En(C, he.temperature), low: En(C, he.templow) })) + "</div>" : "") + "</div></div>";
    return H.length && (Ae += '<div class="wbColumns" role="list">' + H.map((Ne, Re) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Re + '" data-wb-focus="col-' + Re + '"><span class="wbDay">' + He(Bt(C, Ne, Re)) + "</span>" + St(Ne.condition ?? "cloudy", 60, !1, "col" + Re) + '<span class="wbTemps"><span class="wbHi">' + He(En(C, Ne.temperature)) + '</span><span class="wbLo">' + He(En(C, Ne.templow)) + "</span></span></button>").join("") + "</div>", Ae += '<div class="wbHalves" role="list">' + H.map((Ne, Re) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Re + '" data-wb-focus="half-' + Re + '">' + St(Ne.condition ?? "cloudy", 40, !1, "half" + Re) + '<span class="wbText"><span class="wbName">' + He(jn(C, Ne)) + '</span><span class="wbSub">' + He(ua(nt.highLow, { high: En(C, Ne.temperature), low: En(C, Ne.templow) })) + "</span></span></button>").join("") + "</div>"), Ae + "</div>" + (ce ? Qt(C, D, ce) : "") + "</div>";
  }
  function kt(C) {
    const D = C.getTime(), I = Date.now() - Ha;
    return g("hourly").filter((H) => {
      const ce = new Date(H.datetime).getTime();
      return ce >= D && ce < D + di && ce > I;
    });
  }
  function ot(C) {
    if (!C.length) return ["temperature"];
    const D = ["temperature"];
    return C.some((I) => I.precipitation != null || I.precipitation_probability != null) && D.push("precipitation"), C.some((I) => I.humidity != null) && D.push("humidity"), D;
  }
  function Qt(C, D, I) {
    const H = $i(new Date(I.datetime)), ce = kt(H), be = ot(ce), he = be.includes(O.dayMode) ? O.dayMode : "temperature", xe = (le) => le === "humidity" ? nt.humidity : nt.modes[le];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + St(I.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + He(jn(C, I)) + '</span><span class="wbSub">' + He(ua(nt.highLow, { high: En(C, I.temperature), low: En(C, I.templow) })) + '</span></div><button class="wbBack" title="' + He(nt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Ki(Vn.back) + "</button></div>" + (be.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + be.map((le) => '<button aria-pressed="' + (le === he) + '" data-wb="day-mode" data-mode="' + le + '" data-wb-focus="day-mode-' + le + '">' + He(xe(le)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Up(pn(C, D, H, ce, he)) + "</div></div>";
  }
  function pn(C, D, I, H, ce) {
    var rn;
    const be = I.getTime(), he = Date.now(), xe = Rr(I, /* @__PURE__ */ new Date()), le = (ht) => (ht - be) / Oa, Ae = (ht) => Yi(new Date(ht), C), Fe = (ht) => new Date(ht.datetime).getTime(), Ze = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: Ae(be + ht * Ha), minor: ht % 6 !== 0 })), { rise: Ge, set: De } = Hd(C, I), Ne = [], Re = [];
    Ge && (Ne.push({ t: le(Ge.getTime()), label: Ae(Ge.getTime()), rise: !0 }), Re.push([0, le(Ge.getTime())])), De && (Ne.push({ t: le(De.getTime()), label: Ae(De.getTime()), rise: !1 }), Re.push([le(De.getTime()), Pr]));
    const Qe = As(C);
    !Ge && !De && Qe && Hl(new Date(be + di / 2), Qe.lat, Qe.lon) < 0 && Re.push([0, Pr]);
    const mt = xe ? le(he) : void 0, Tt = { hours: Ze, sun: Ne, night: Re };
    if (!H.length && !xe) return { ...Tt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: nt.noHourly };
    if (ce === "precipitation") {
      const ht = H.some((sn) => sn.precipitation_probability != null), Hn = H.map((sn) => ({ t: le(Fe(sn)), v: Number((ht ? sn.precipitation_probability : sn.precipitation) ?? 0) })), Jn = Br(C, ke(C, "hourly"), "precipitation"), Qn = Math.max(0, ...Hn.map((sn) => sn.v)), ea = ht ? 100 : qd(0, Math.max(Qn, 1), [0.5, 1, 2, 5, 10]).max, Wo = (sn) => ht ? un(sn, C.locale) + "%" : un(sn, C.locale, { maximumFractionDigits: 1 }) + " " + Jn, fa = Hn.find((sn) => sn.v === Qn);
      return {
        ...Tt,
        kind: "bars",
        points: Hn,
        min: 0,
        max: ea,
        ticks: [0, ea / 2, ea],
        format: Wo,
        now: mt !== void 0 ? { t: mt, v: 0 } : void 0,
        peak: fa && Qn > 0 ? { t: fa.t + 30, v: fa.v, label: Wo(fa.v) } : void 0,
        note: Qn > 0 ? void 0 : nt.noRain
      };
    }
    const bt = ce === "humidity" ? "humidity" : "temperature", jt = H.filter((ht) => ht[bt] != null && (!xe || Fe(ht) >= he)).map((ht) => ({ t: le(Fe(ht)), v: Number(ht[bt]) }));
    let gn, Pn = [];
    if (mt !== void 0) {
      const ht = pa(C, D, bt);
      ht && yn(ht.value) && (gn = { t: mt, v: Number(ht.value) }, jt.unshift(gn)), Pn = (((rn = Z.todayHistory) == null ? void 0 : rn.day) === I.toDateString() ? Z.todayHistory[bt] : []).filter((Jn) => Jn.time <= he).map((Jn) => ({ t: Math.max(0, le(Jn.time)), v: Jn.value })), gn && Pn.length && Pn.push(gn);
    }
    const Sn = [...Pn, ...jt];
    if (!Sn.length) return { ...Tt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: nt.noHourly };
    const In = Sn.map((ht) => ht.v), Yn = qd(Math.min(...In), Math.max(...In), bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    bt === "humidity" && (Yn.min = Math.max(0, Yn.min), Yn.max = Math.min(100, Yn.max), Yn.ticks = Yn.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const Sa = bt === "humidity" ? (ht) => un(ht, C.locale) + "%" : (ht) => En(C, ht), mo = bt === "temperature" ? Sn.reduce((ht, Hn) => Hn.v > ht.v ? Hn : ht) : void 0;
    return { ...Tt, kind: "line", points: jt, past: Pn, ...Yn, format: Sa, now: gn, peak: mo ? { ...mo, label: Sa(mo.v) } : void 0 };
  }
  function ci(C) {
    const D = ["temperature"];
    return C.some((I) => I.precipitation_probability != null || I.precipitation != null) && D.push("precipitation"), C.some((I) => I.wind_speed != null) && D.push("wind"), D;
  }
  function it() {
    const C = /* @__PURE__ */ new Date();
    return C.setHours(6, 0, 0, 0), C.getTime() > Date.now() && C.setDate(C.getDate() - 1), C;
  }
  function ze(C, D) {
    var ce, be;
    const I = g("daily"), H = [];
    for (let he = 0; he < bs; he++) for (const xe of [!1, !0]) {
      const le = C.getTime() + (he * 24 + (xe ? 12 : 0)) * Ha, Ae = le + 12 * Ha, Fe = {};
      D.forEach((Ge) => {
        const De = new Date(Ge.datetime).getTime();
        Ge.condition && De >= le && De < Ae && (Fe[Ge.condition] = (Fe[Ge.condition] ?? 0) + (op.has(Ge.condition) ? 2 : 1));
      });
      let Ze = (ce = Object.entries(Fe).sort((Ge, De) => De[1] - Ge[1])[0]) == null ? void 0 : ce[0];
      if (!Ze) {
        const Ge = new Date(le).toDateString();
        Ze = ((be = I.find((De) => new Date(De.datetime).toDateString() === Ge)) == null ? void 0 : be.condition) ?? "cloudy";
      }
      H.push({ cond: xe && Ze === "sunny" ? "clear-night" : Ze, night: xe });
    }
    return H;
  }
  function pt(C, D, I) {
    const H = ke(C, "hourly"), ce = D.precipitation_probability != null ? un(D.precipitation_probability, C.locale) + "%" : "", be = D.precipitation ? un(D.precipitation, C.locale) + " " + Br(C, H, "precipitation") : "";
    switch (I) {
      case "precipitation":
        return ce ? [ce, be] : [be || "–", ""];
      case "wind":
        return D.wind_speed != null ? [un(Math.round(D.wind_speed), C.locale), Br(C, H, "wind_speed")] : ["–", ""];
      default:
        return [En(C, D.temperature), (D.precipitation_probability ?? 0) >= 20 ? ce : ""];
    }
  }
  function qa(C) {
    W = null;
    const D = g("hourly"), I = Math.floor(Date.now() / Oa) * Oa, H = D.filter((De) => new Date(De.datetime).getTime() > I - Ha);
    if (!H.length) return "";
    const ce = ci(H), be = ce.includes(O.hourlyMode) ? O.hourlyMode : "temperature", he = it(), xe = he.getTime() + bs * 24 * Ha, le = (I - he.getTime()) / Ha * cl, Ae = bs * 24 * cl, Fe = (De) => (De - I) / Ha * cl, Ze = [{ x: 0, label: nt.now, entry: H[0] }, ...H.filter((De) => {
      const Ne = new Date(De.datetime);
      return Fe(Ne.getTime()) >= 48 && Ne.getTime() < xe && Ne.getHours() % ap === 0;
    }).map((De) => {
      const Ne = new Date(De.datetime);
      return { x: Fe(Ne.getTime()), label: Yi(Ne, C), entry: De };
    })], Ge = (De, Ne, Re) => '<span class="wbMark' + (Ne === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Re + "</span>";
    return W = { segs: ze(he, D), seed: he.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + He(nt.nextHours) + "</h2></div>" + (ce.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ce.map((De) => '<button aria-pressed="' + (De === be) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + He(nt.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Ae - le) + 'px"><div class="wbRow wbTimes">' + Ze.map((De, Ne) => Ge(De, Ne, He(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -le + "px;width:" + Ae + 'px"><canvas data-wb-strip' + (u === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ze.map((De, Ne) => {
      if (!De.entry) return "";
      const [Re, Qe] = pt(C, De.entry, be);
      return Ge(De, Ne, '<span class="wbPrimaryV">' + He(Re) + '</span><span class="wbSecondary">' + He(Qe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function ui(C) {
    const D = ne, { rise: I, set: H } = Hd(C, D), ce = I && H ? Math.round((H.getTime() - I.getTime()) / Oa) : 0, be = Math.floor(ce / 60), he = ce % 60, xe = I && H ? (D.getTime() - I.getTime()) / (H.getTime() - I.getTime()) : -1, le = xe >= 0 && xe <= 1, Ae = Math.PI * (1 - Math.min(1, Math.max(0, xe))), Fe = 100 + 74 * Math.cos(Ae), Ze = 100 - 74 * Math.sin(Ae), Ge = le ? Math.sin(Math.PI * xe) : 0, De = le ? Nr("#2e0a0d", "#43180a", Ge) : "#0e0507", Ne = le ? Nr("#7a1d12", "#8f400f", Ge) : "#1c0709", Re = Nr("#f60c08", "#ff8f00", Ge), Qe = Nr("#fd9b07", "#ffd84a", Ge), mt = le ? Nr("#fd9b07", "#ffd84a", Ge) : "#6b3a2a", Tt = (jt) => jt ? Yi(jt, C) : "–", bt = I && H ? new Date((I.getTime() + H.getTime()) / 2) : null;
    return Po({
      icon: Vn.sunny,
      name: nt.sun,
      sub: ce ? ua(nt.daylightShort, { hours: be, minutes: he }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + Ne + ");--wb-sun-line:" + mt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Re + '"></stop><stop offset="0.45" stop-color="' + Re + '"></stop><stop offset="1" stop-color="' + Qe + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (le ? '<circle cx="' + Fe + '" cy="' + Ze + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (bt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + He(Tt(bt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + He(Tt(I)) + '</text><text class="wbSunTime" x="174" y="117">' + He(Tt(H)) + "</text></svg></div>"
    });
  }
  function Oo(C, D, I) {
    const H = (he) => L + "moon-" + he, ce = C > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + H("terminator") + ')" d="' + Gp(61, 61, 57.9, C) + '"' + (D ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", be = (he, xe, le, Ae, Fe, Ze) => '<filter id="' + H(he) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xe + '" numOctaves="' + le + '" seed="' + Ae + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ge) => "<feFunc" + Ge + ' type="linear" slope="' + Fe + '" intercept="' + Ze + '"></feFunc' + Ge + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + H("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + H("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + H("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + H("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + H("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + be("mottle", "0.045", 4, 3, 1.8, -0.4) + be("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + H("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + H("fill") + ')"></circle><g' + (I ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + H("soften") + ')">' + Kp.map(([he, xe, le, Ae, Fe, Ze]) => '<ellipse cx="' + he + '" cy="' + xe + '" rx="' + le + '" ry="' + Ae + '" fill-opacity="' + Ze + '" transform="rotate(' + Fe + " " + he + " " + xe + ')"></ellipse>').join("") + "</g>" + $p.map(([he, xe, le]) => '<circle class="wbCrater" cx="' + he + '" cy="' + xe + '" r="' + le + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + H("glow") + ')">' + Xp.map(([he, xe]) => '<line x1="54.4" y1="95" x2="' + he + '" y2="' + xe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + H("glow") + ')">' + Vd.map(([he, xe, le]) => '<circle cx="' + he + '" cy="' + xe + '" r="' + le * 2 + '"></circle>').join("") + "</g>" + Vd.map(([he, xe, le]) => '<circle class="wbBrightCenter" cx="' + he + '" cy="' + xe + '" r="' + le + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + H("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + H("grain") + ')"></rect>' + ce + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function an(C) {
    const D = A, I = As(C), H = (I == null ? void 0 : I.lat) ?? 0, ce = Np(D), be = Wd(C), he = be ? C.states[be] : void 0, xe = Ir(he) && pp.includes(he.state) ? he.state : Bp(ce.phase), { rise: le, set: Ae } = I ? Rp(D, I.lat, I.lon) : {}, Fe = ce.phase > 0.5 != H < 0, Ze = un(Math.round(ce.fraction * 100), C.locale) + "%", Ge = le ?? Ae, De = Ge ? Yi(Ge, C) : void 0;
    return Po({
      icon: Vn.night,
      name: nt.moon,
      sub: nt.phases[xe],
      visual: '<div class="wbMoonBox">' + Oo(ce.fraction, Fe, H < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? He(ua(le ? nt.moonriseAt : nt.moonsetAt, { time: De })) : "") + "</span><span>" + He(ua(nt.lit, { illumination: Ze })) + "</span></div>"
    });
  }
  function Xe(C, D) {
    var Ne;
    const I = pa(C, D, "wind_speed");
    if (!I || !yn(I.value)) return "";
    const H = pa(C, D, "wind_gust_speed"), ce = pa(C, D, "wind_bearing"), be = ce && yn(ce.value) ? Number(ce.value) : void 0, he = qp(Number(I.value), (Ne = I.stateObj.attributes) == null ? void 0 : Ne.wind_speed_unit), xe = Al(C, I.stateObj, "wind_speed", I.value), le = be !== void 0 ? nt.cardinal[up[((be + 11.25) / 22.5 | 0) % 16]] : void 0, Ae = H ? Fp(C, H.stateObj, "wind_gust_speed", H.value) : void 0, Fe = [le ? ua(nt.windFrom, { direction: le }) : void 0, he !== void 0 ? he + " " + nt.beaufort : void 0].filter(Boolean).join(" · ") || Ae, Ze = (Re, Qe) => {
      const mt = (Re - 90) * Math.PI / 180;
      return [100 + Qe * Math.cos(mt), 100 + Qe * Math.sin(mt)];
    }, Ge = Array.from({ length: 36 }, (Re, Qe) => Qe * 10).map((Re) => {
      const Qe = Re % 90 === 0, [mt, Tt] = Ze(Re, 97), [bt, jt] = Ze(Re, Qe ? 83 : 89);
      return '<line class="wbTick' + (Qe ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Tt + '" x2="' + bt + '" y2="' + jt + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Re, Qe]) => {
      const [mt, Tt] = Ze(Qe, 64);
      return '<text class="wbLetter' + (Re === "n" ? " wbNorth" : "") + '" x="' + mt + '" y="' + Tt + '">' + He(nt.cardinal[Re]) + "</text>";
    }).join("");
    return Po({ icon: Vn.windy, name: nt.wind, sub: Fe, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ge + De + (be !== void 0 ? '<path class="wbMarker" transform="rotate(' + be + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + He(xe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + He(xe.unit) + "</text></svg>" });
  }
  function kn(C, D) {
    const I = pa(C, D, "uv_index");
    if (!I || !yn(I.value)) return "";
    const H = Number(I.value), ce = nt.uvLevel[Op(H)], be = /* @__PURE__ */ new Date();
    be.setHours(23, 59, 59, 999);
    const he = g("hourly").filter((Re) => Re.uv_index != null && new Date(Re.datetime) > /* @__PURE__ */ new Date() && new Date(Re.datetime) <= be).reduce((Re, Qe) => !Re || Qe.uv_index > Re.uv ? { uv: Qe.uv_index, time: new Date(Qe.datetime) } : Re, void 0), xe = 48, le = 100, Ae = 130, Fe = (Re) => -xe + Math.min(Re, 11) / 11 * 2 * xe, Ze = (Re, Qe) => {
      const mt = Re * Math.PI / 180;
      return [le + Qe * Math.sin(mt), Ae - Qe * Math.cos(mt)];
    }, Ge = (Re, Qe, mt) => {
      const [Tt, bt] = Ze(Fe(Re), mt), [jt, gn] = Ze(Fe(Qe), mt);
      return "M " + Tt + " " + bt + " A " + mt + " " + mt + " 0 0 1 " + jt + " " + gn;
    }, Ne = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, ws.low], [3, 6, ws.moderate], [6, 8, ws.high], [8, 11, ws.very_high]].map(([Re, Qe, mt]) => '<path class="wbVuZone" d="' + Ge(Re, Qe, 96) + '" style="stroke:' + mt + '"></path>').join("") + Array.from({ length: 21 }, (Re, Qe) => ({ angle: -xe + Qe * (2 * xe / 20), major: Qe % 2 === 0 })).map(({ angle: Re, major: Qe }) => {
      const [mt, Tt] = Ze(Re, 102), [bt, jt] = Ze(Re, Qe ? 114 : 108);
      return '<line class="wbVuTick' + (Qe ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Tt + '" x2="' + bt + '" y2="' + jt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Fe(H) + 'deg"><line x1="' + le + '" y1="' + Ae + '" x2="' + le + '" y2="' + (Ae - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + He(un(Math.round(H), C.locale)) + "</text></svg>";
    return Po({
      icon: Vn.sunnyAlert,
      name: nt.metrics.uv_index,
      sub: he && he.uv > H ? ua(nt.uvPeak, { level: ce, uv_index: un(Math.round(he.uv), C.locale), time: Yi(he.time, C) }) : ce,
      visual: Ne
    });
  }
  function pi(C) {
    const D = g("daily")[0], I = Z.temperatureHistory;
    if (!D || new Date(D.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !yn(D.temperature) || !I || I.dailyHighs.length < sp) return "";
    const H = Number(D.temperature), ce = I.dailyHighs.reduce((bt, jt) => bt + jt, 0) / I.dailyHighs.length, be = Math.round(H - ce) || 0, he = be > 0 ? "above" : be < 0 ? "below" : "same", xe = [...I.days, { date: /* @__PURE__ */ new Date(), high: H, today: !0 }], le = 220, Ae = 158, Fe = 22, Ze = 20, Ge = xe.map((bt) => bt.high).concat(ce), De = Math.min(...Ge) - 3, Ne = Math.max(...Ge) + 1, Re = (bt) => Fe + (1 - (bt - De) / (Ne - De)) * (Ae - Fe - Ze), Qe = le / xe.length, mt = Math.min(18, Qe * 0.6), Tt = '<svg class="wbCompareBars" viewBox="0 0 ' + le + " " + Ae + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + le + '" y1="' + Re(ce) + '" y2="' + Re(ce) + '"></line>' + xe.map((bt, jt) => {
      const gn = jt * Qe + Qe / 2, Pn = Re(bt.high), Sn = bt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Sn + '" x="' + (gn - mt / 2) + '" y="' + Pn + '" width="' + mt + '" height="' + (Ae - Ze - Pn) + '" rx="5"></rect><text class="wbAvgValue' + Sn + '" x="' + gn + '" y="' + (Pn - 6) + '">' + He(En(C, bt.high)) + '</text><text class="wbAvgDay' + Sn + '" x="' + gn + '" y="' + (Ae - 4) + '">' + He(kp(bt.date, C)) + "</text>";
    }).join("") + "</svg>";
    return Po({
      icon: Vn.chartLine,
      name: nt.metrics.compared_to_average,
      double: !0,
      sub: ua(nt.highsLastDays, { days: I.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (be > 0 ? "+" : "") + He(En(C, be)) + '</div><div class="wbCompareWords">' + He(nt.average[he]) + '</div><div class="wbCompareTemps">' + He(ua(nt.todayVsAverage, { today: En(C, H), average: En(C, ce) })) + "</div></div>" + Tt + "</div>"
    });
  }
  function vt(C, D) {
    const I = pa(C, D, "humidity");
    if (!I || !yn(I.value)) return "";
    const H = pa(C, D, "dew_point"), ce = Math.max(0, Math.min(100, Number(I.value)));
    return Po({
      icon: Vn.waterPercent,
      name: nt.metrics.humidity,
      sub: H && yn(H.value) ? ua(nt.dewPoint, { dew_point: En(C, H.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + ce + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + ml(un(Math.round(Number(I.value)), C.locale), "%") + "</div>"
    });
  }
  function Be(C, D) {
    var Ae, Fe;
    const I = pa(C, D, "pressure");
    if (!I || !yn(I.value)) return "";
    const H = Number(I.value), ce = (Ae = I.stateObj.attributes) == null ? void 0 : Ae.pressure_unit, be = Od(H, ce), he = ((Fe = Z.pressureHistory) == null ? void 0 : Fe.entityId) === I.stateObj.entity_id ? Od(Z.pressureHistory.value, ce) : void 0;
    let xe;
    if (be !== void 0 && he !== void 0) {
      const Ze = be - he;
      xe = Ze >= Ed ? "rising" : Ze <= -Ed ? "falling" : "steady";
    }
    const le = Al(C, I.stateObj, "pressure", Math.round(H));
    return Po({
      icon: Vn.gauge,
      name: nt.metrics.pressure,
      sub: xe ? nt.pressure[xe] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + ml(le.number) + '<span class="wbTapeUnit">' + He(le.unit) + "</span></div>" + (be !== void 0 ? rt(C, be) : "") + "</div>"
    });
  }
  function rt(C, D) {
    const ce = Math.floor(D) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (be, he) => ce + he).map((be) => {
      const he = 100 - (be - D) * 9;
      if (he < 22 || he > 178) return "";
      const xe = be % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(he - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xe ? 2 : 8) + '" x2="26" y1="' + he + '" y2="' + he + '"></line>' + (xe ? '<text class="wbTapeLabel" x="33" y="' + he + '">' + He(un(be, C.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + He(nt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + He(nt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ft(C) {
    var le, Ae;
    const D = pl(C), I = D ? C.states[D] : void 0;
    if (!I || ((le = Z.rain) == null ? void 0 : le.entityId) !== D || !yn(Z.rain.change)) return "";
    const H = ((Ae = I.attributes) == null ? void 0 : Ae.unit_of_measurement) ?? "", ce = ke(C, "hourly"), be = Date.now() + di, he = g("hourly").filter((Fe) => Fe.precipitation != null && new Date(Fe.datetime).getTime() <= be), xe = he.reduce((Fe, Ze) => Fe + Number(Ze.precipitation), 0);
    return Po({
      icon: Vn.rainy,
      name: nt.metrics.precipitation,
      sub: ce && he.length ? ua(nt.rainExpected, { amount: un(xe, C.locale, { maximumFractionDigits: 1 }) + " " + Br(C, ce, "precipitation") }) : nt.rainLast24h,
      visual: ml(un(Z.rain.change, C.locale, { maximumFractionDigits: 1 }), H) + (he.length > 1 ? Zp(he.map((Fe) => ({ label: "", value: Number(Fe.precipitation) }))) : "")
    });
  }
  function Pe(C) {
    Z.categories === void 0 && de(C);
    const D = $e(C), I = (le) => le.map((Ae) => C.states[Ae]).filter(Ir), H = I(D.air), ce = I(D.pollen);
    if (!H.length && !ce.length) return "";
    const be = [...H, ...ce], he = (le) => ce.includes(le) ? Vn.flower : Vn.airFilter, xe = be.find((le) => le.entity_id === O.aq);
    return xe ? Va(C, xe, he(xe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + He(nt.airQuality) + '</h2></div><div class="wbAqTiles">' + be.map((le) => '<button class="wbTile" data-wb="aq-open" data-entity="' + He(le.entity_id) + '"><span class="wbChip">' + Ki(he(le)) + '</span><span class="wbText"><span class="wbName">' + He(Fd(C, le)) + '</span><span class="wbSub">' + He(ys(C, le)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Va(C, D, I) {
    var Fe, Ze, Ge;
    const H = ((Fe = D.attributes) == null ? void 0 : Fe.unit_of_measurement) ?? "", ce = ((Ze = D.attributes) == null ? void 0 : Ze.device_class) === "pm25" && H === Dd && yn(D.state), be = Number(D.state), he = ce ? Wp(be) : void 0, xe = ((Ge = Z.aqHistory) == null ? void 0 : Ge.entityId) === D.entity_id ? Z.aqHistory.points : void 0, le = (De) => Math.min(100, Math.max(0, De / xs * 100));
    let Ae;
    if (xe && xe.length > 1) Ae = Yp(xe, (De) => (un(De, C.locale, { maximumFractionDigits: 1 }) + " " + H).trim());
    else if (he) {
      let De = 0;
      const Ne = wc.map(([Re, Qe]) => {
        const mt = le(Math.min(Qe, xs)), Tt = mp[Re] + " " + De + "% " + mt + "%";
        return De = mt, Tt;
      });
      Ae = '<div class="wbScale" role="meter" aria-label="' + He(nt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + xs + '" aria-valuenow="' + be + '" style="background:linear-gradient(to right, ' + Ne.join(", ") + ')"><i style="left:' + le(be) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + xs + " " + Dd + "</span></div>";
    } else Ae = '<span class="wbGraphNote"><span>' + He(ys(C, D)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Ki(I) + '</span><span class="wbText"><span class="wbName">' + He(Fd(C, D)) + '</span><span class="wbSub">' + He(ys(C, D)) + (he ? " · " + He(nt.aqLevel[he]) : "") + '</span></span><button class="wbBack" title="' + He(nt.back) + '" data-wb="aq-close">' + Ki(Vn.back) + '</button></div><div class="wbGraph">' + Ae + "</div></div></div>";
  }
  const lo = {
    current: Ye,
    hourly: qa,
    sun: ui,
    moon: an,
    wind: Xe,
    uv_index: kn,
    compared_to_average: pi,
    humidity: vt,
    pressure: Be,
    precipitation: ft,
    air_quality: Pe
  };
  function Gn(C) {
    var Ae, Fe, Ze, Ge;
    const D = s == null ? void 0 : s();
    if (!D || B) return;
    const I = We(D);
    x(D, I), Z.lastFetch || V();
    const H = $e(D), ce = Wd(D), be = pl(D), he = [
      ...I.map((De) => D.states[De]),
      D.states["sun.sun"],
      ce && D.states[ce],
      be && D.states[be],
      ...H.air.map((De) => D.states[De]),
      ...H.pollen.map((De) => D.states[De]),
      D.locale,
      D.config,
      D.entities,
      Math.floor(Date.now() / Oa)
    ];
    if (!C && G && he.length === G.length && he.every((De, Ne) => De === G[Ne])) return;
    G = he;
    const xe = v.getRootNode(), le = xe.activeElement || document.activeElement;
    for (const De of re) {
      const Ne = R[De];
      let Re = "";
      try {
        Re = lo[De](D, I) || "";
      } catch {
        Re = "";
      }
      if (Re === Ne.html) continue;
      const Qe = le && Ne.el.contains(le) ? (Ae = le.dataset) == null ? void 0 : Ae.wbFocus : void 0, mt = Ne.el.querySelector(".wbStripScroll"), Tt = mt ? mt.scrollLeft : 0;
      Ne.html = Re, Ne.el.hidden = !Re, Ne.el.innerHTML = Re, Tt && ((Fe = Ne.el.querySelector(".wbStripScroll")) == null || Fe.scrollTo({ left: Tt })), Qe && !$ && ((Ze = Ne.el.querySelector('[data-wb-focus="' + Qe + '"]')) == null || Ze.focus());
    }
    $ && ((Ge = v.querySelector('[data-wb-focus="' + $ + '"]')) == null || Ge.focus(), $ = null), Et(performance.now());
  }
  function Ee() {
    q || B || (q = !0, queueMicrotask(() => {
      q = !1, Gn(!0);
    }));
  }
  function je() {
    const C = getComputedStyle(v), D = (he) => C.getPropertyValue(he).trim(), I = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([he, xe]) => {
      D(xe) && (I[he] = D(xe));
    });
    const H = D("--color-text-primary") || "#f1f1f1", ce = D("--color-bg-card") || "#222222", be = !!v.closest(".light");
    return { colors: { ...so, ...I }, ink: be ? H : ce, paper: be ? ce : H };
  }
  const zt = (C, D) => {
    var I;
    C.width !== D.w && (C.width = D.w), C.height !== D.h && (C.height = D.h), (I = C.getContext("2d")) == null || I.putImageData(new ImageData(D.data, D.w, D.h), 0, 0);
  }, on = () => h && !wp();
  function mn(C, D) {
    const I = v.querySelector("canvas[data-wb-strip]");
    if (!I || !W || !I.getClientRects().length) return;
    const H = I.clientWidth, ce = I.clientHeight;
    if (!H || !ce) return;
    const be = { width: H, height: ce, columns: bs, colors: D.colors, clock: C, ambient: on(), seed: W.seed };
    if (u === "smooth") {
      const he = Math.min(2, window.devicePixelRatio || 1), xe = Math.round(H * he), le = Math.round(ce * he);
      I.width !== xe && (I.width = xe), I.height !== le && (I.height = le);
      const Ae = I.getContext("2d");
      if (!Ae) return;
      Ae.setTransform(he, 0, 0, he, 0, 0), Uu(Ae, W.segs, be);
    } else zt(I, Gu(W.segs, { ...be, px: 2, oneBit: u === "onebit", ink: D.ink, paper: D.paper }));
  }
  function Et(C) {
    if (B) return;
    const D = je();
    if (u !== "smooth") {
      const I = on();
      v.querySelectorAll("canvas[data-wb-wx]").forEach((H) => {
        H.getClientRects().length && zt(H, lc(Tl(H.dataset.wbWx, D.colors), { size: Number(H.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: D.colors, ink: D.ink, paper: D.paper, clock: C, idle: I }));
      });
    }
    mn(C, D);
  }
  function za(C) {
    if (X = 0, !(B || !on())) {
      if (!document.hidden)
        if (u === "smooth") mn(C, je());
        else {
          const D = Math.floor(C / 100);
          D !== j && (j = D, Et(C));
        }
      X = requestAnimationFrame(za);
    }
  }
  function Lt() {
    v.classList.toggle("wbMotion", on()), !X && !B && on() && (X = requestAnimationFrame(za));
  }
  function Bn(C) {
    var I, H;
    const D = (H = (I = C.target).closest) == null ? void 0 : H.call(I, "[data-wb]");
    if (!(!D || !v.contains(D))) {
      switch (D.dataset.wb) {
        case "day": {
          O.openDay = Number(D.dataset.index), O.opener = D.dataset.wbFocus, $ = "back-day";
          const ce = Jt()[O.openDay], be = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > np;
          ce && Rr(new Date(ce.datetime), /* @__PURE__ */ new Date()) && be && Q();
          break;
        }
        case "close-day":
          O.openDay = void 0, $ = O.opener, O.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          O.dayMode = D.dataset.mode;
          break;
        case "hourly-mode":
          O.hourlyMode = D.dataset.mode;
          break;
        case "aq-open":
          O.aq = D.dataset.entity, oe(O.aq);
          break;
        case "aq-close":
          O.aq = void 0;
          break;
        default:
          return;
      }
      Gn(!0);
    }
  }
  function co(C) {
    var D, I;
    C.key === "Escape" && O.openDay !== void 0 && ((I = (D = C.target).closest) != null && I.call(D, '[data-wb-open="day"]')) && (O.openDay = void 0, $ = O.opener, O.opener = void 0, Gn(!0));
  }
  let Dt = null;
  function Vt(C) {
    var I, H;
    const D = (H = (I = C.target).closest) == null ? void 0 : H.call(I, ".wbStripScroll");
    !D || C.button !== 0 || (Dt = { startX: C.pageX, left: D.scrollLeft, moved: !1 }, window.addEventListener("mousemove", Mn), window.addEventListener("mouseup", en, { once: !0 }));
  }
  function Mn(C) {
    const D = v.querySelector(".wbStripScroll");
    if (!Dt || !D) return;
    const I = C.pageX - Dt.startX;
    !Dt.moved && Math.abs(I) > 1 && (Dt.moved = !0, D.classList.add("wbDragging")), D.scrollLeft = Dt.left - I;
  }
  function en() {
    var C;
    Dt = null, window.removeEventListener("mousemove", Mn), (C = v.querySelector(".wbStripScroll")) == null || C.classList.remove("wbDragging");
  }
  v.addEventListener("click", Bn), v.addEventListener("keydown", co), v.addEventListener("mousedown", Vt);
  const Cn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Et(performance.now())) : null;
  Cn == null || Cn.observe(v);
  const at = (Ca = window.matchMedia) == null ? void 0 : Ca.call(window, "(prefers-reduced-motion: reduce)"), uo = () => {
    Lt(), Et(performance.now());
  };
  (po = at == null ? void 0 : at.addEventListener) == null || po.call(at, "change", uo);
  const Un = [
    setInterval(() => {
      ne = /* @__PURE__ */ new Date(), Gn(!0);
    }, lp),
    setInterval(() => {
      A = /* @__PURE__ */ new Date(), Gn(!0);
    }, dp),
    setInterval(V, ip)
  ];
  return Gn(!0), Lt(), {
    update() {
      Gn(!1);
    },
    setStyle(C) {
      !C || C === u || (u = C, Gn(!0), Lt());
    },
    destroy() {
      var C;
      B = !0, Un.forEach(clearInterval), X && cancelAnimationFrame(X), X = 0, Cn == null || Cn.disconnect(), (C = at == null ? void 0 : at.removeEventListener) == null || C.call(at, "change", uo), en(), v.removeEventListener("click", Bn), v.removeEventListener("keydown", co), v.removeEventListener("mousedown", Vt), ["daily", "hourly"].forEach(Ce), v.remove();
    }
  };
}
const Hr = "#E1E1E1", jd = "#F7F4F0", hl = "#03a9f4", wt = 14, yt = 172;
let Qp = 0;
const Ft = (n) => Math.round(n * 100) / 100, Wa = (n, s, i) => Math.max(s, Math.min(i, n)), ro = (n, s, i, u, h, f) => '<rect x="' + Ft(n) + '" y="' + Ft(s) + '" width="' + Ft(i) + '" height="' + Ft(u) + '" fill="' + h + '"' + (f != null ? ' opacity="' + f + '"' : "") + "/>", fl = (n) => n.map((s, i) => (i ? "L" : "M") + Ft(s[0]) + " " + Ft(s[1])).join("");
function gl(n) {
  const s = (n == null ? void 0 : n.attributes) || {};
  return s.device_class === "curtain" ? "curtain" : s.device_class === "blind" || s.current_tilt_position != null ? "venetian" : "blind";
}
const Io = [
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
  let i = Io[0], u = Io[Io.length - 1];
  for (let L = 0; L < Io.length - 1; L++) if (s >= Io[L][0] && s <= Io[L + 1][0]) {
    i = Io[L], u = Io[L + 1];
    break;
  }
  const h = (s - i[0]) / (u[0] - i[0]), f = h * h * (3 - 2 * h), w = (L, v) => {
    const N = parseInt(L.slice(1), 16), re = parseInt(v.slice(1), 16);
    return "#" + [16, 8, 0].map((te) => Math.round((N >> te & 255) + ((re >> te & 255) - (N >> te & 255)) * f).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(i[1][0], u[1][0]), bot: w(i[1][1], u[1][1]), warm: w(i[1][2], u[1][2]), cool: w(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * f, t: s };
}
function tm(n) {
  const s = parseInt(n.slice(1), 16), i = (s >> 16 & 255) / 255, u = (s >> 8 & 255) / 255, h = (s & 255) / 255, f = Math.max(i, u, h), w = Math.min(i, u, h);
  let L = 0, v = 0;
  const N = (f + w) / 2;
  if (f !== w) {
    const re = f - w;
    v = N > 0.5 ? re / (2 - f - w) : re / (f + w), L = (f === i ? (u - h) / re + (u < h ? 6 : 0) : f === u ? (h - i) / re + 2 : (i - u) / re + 4) / 6;
  }
  return [L * 360, v * 100, N * 100];
}
function Dc(n, s, i) {
  s = Wa(s, 0, 100) / 100, i = Wa(i, 0, 100) / 100;
  const u = (w) => (w + n / 30) % 12, h = s * Math.min(i, 1 - i), f = (w) => i - h * Math.max(-1, Math.min(u(w) - 3, Math.min(9 - u(w), 1)));
  return "#" + [f(0), f(8), f(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Rc, Nc, Bc] = tm(Hr), Gd = Dc(Rc, Nc, Math.max(6, Bc - 14)), nm = Dc(Rc, Nc, Math.min(96, Bc + 16));
function am(n, s, i, u, h) {
  const f = yt / 2, w = yt * 0.12, L = f - (f - w) * n, v = (G) => G ** 1.3, N = Wa(i, -1.5, 1.5), re = (G) => -(Math.abs(N) * 4.6 * G ** 1.5) * Math.sign(N), te = n * 1.4, R = (G, X) => {
    const j = Math.min(4.8, Math.abs(i) * 2.6) * (X ? 1 : -1) * Math.sign(i || 1), q = X ? G + L : G, $ = X ? G : G + L, O = (Se) => q + re(Se) + j * Math.sin(Se * Math.PI * 1.2 + u) * v(Se) * 1.4 + te * Math.sin(Se * Math.PI * 2 + u * 0.6) * v(Se) * (X ? 1 : -1), Z = [[$, wt]];
    for (let Se = 0; Se <= 12; Se++) Z.push([O(Se / 12), wt + yt * Se / 12]);
    Z.push([$, wt + yt]);
    let ne = '<path d="' + fl(Z) + 'Z" fill="' + Hr + '"/>';
    if (h) return ne;
    const A = 1.35 + ((X ? i > 0 : i < 0) ? 0.35 : 0), W = (Se) => {
      const g = Se / 7, ke = X ? 1 - g : g, Ce = (1 - ke) ** 1.3, Oe = G + L * g;
      return Array.from({ length: 13 }, (x, S) => {
        const M = S / 12;
        return [Oe + re(M) * Ce + j * A * Math.sin(M * Math.PI * 1.2 + u - ke * 3.2) * v(M) * 1.4 * Ce + te * 1.6 * Math.sin(M * Math.PI * 2 + u * 0.6 - ke * 2.5) * v(M) * n * (0.4 + 0.6 * Ce), wt + yt * M];
      });
    }, ge = [1, 2, 3, 4, 5, 6].map(W);
    for (let Se = 0; Se < 6; Se += 2) ne += '<path d="' + fl(ge[Se]) + fl(ge[Se + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ne;
  }, B = f - (f - w) * s;
  return { body: R(wt, !0) + R(wt + yt - L, !1), rails: [{ x: wt + B - 4, y: wt, w: 4, h: yt }, { x: wt + yt - B, y: wt, w: 4, h: yt }], head: 6.4 };
}
function om(n, s, i) {
  const u = yt * (1 - n);
  let h = "";
  if (u > 1 && (h += ro(wt, wt, yt, u, Hr), !i))
    for (let f = 1; f < 7; f += 2) h += ro(wt + yt * f / 7, wt, yt / 7, u, "#fff");
  return { body: h, rails: [{ x: wt, y: wt + yt * (1 - s) - 7, w: yt, h: 11 }], head: 10.4 };
}
function im(n, s, i, u) {
  const h = 9 - 7 * (i / 100), f = wt + yt * (1 - n), w = Math.ceil(yt / 10) + 1, L = wt + h / 2, v = (wt + yt - h / 2 - L) / (w - 1), N = 0.8, re = 0.6, te = Array.from({ length: w }, (G, X) => Math.max(L + X * re, Math.min(L + X * v, f - h / 2 - (w - 1 - X) * re))), R = te.slice(0, -1).map((G, X) => Wa((te[X + 1] - G - re) / (v - re), 0, 1));
  R.push(R[w - 2]);
  let B = "";
  return te.forEach((G, X) => {
    const j = N + (h - N) * R[X], q = Math.max(0.5, j / 2), $ = Math.max(0.4, j * 0.114);
    B += ro(wt, G - q, yt, Math.max(1, j), Hr), !u && j > 2.2 && (B += ro(wt, G + q - $, yt, $, Gd) + ro(wt, G - q, yt, $ * 0.55, nm, 0.75));
  }), u || [0.22, 0.78].forEach((G) => {
    B += ro(wt + yt * G - 0.7, wt, 1.4, Math.max(0, te[w - 1] + 1 - wt), Gd, 0.85);
  }), { body: B, rails: [{ x: wt, y: wt + yt * (1 - s) - 8, w: yt, h: 8 }], head: 8.8 };
}
const Ud = (n, s, i, u, h, f, w) => n === "curtain" ? am(s, i, h, f, w) : n === "venetian" ? im(s, i, u, w) : om(s, i, w);
function rm(n, s) {
  let i = "", u = "";
  return s.forEach((h) => {
    const f = h.w > h.h, w = Wa(f ? wt + yt / 2 : h.x + h.w / 2, 17, 183), L = Wa(f ? h.y + h.h / 2 : wt + yt / 2, 17, 183);
    i += f ? ro(wt, Wa(h.y + h.h / 2, wt, wt + yt) - 1, yt, 2, hl) : ro(Wa(h.x + h.w / 2, wt, wt + yt) - 1, wt, 2, yt, hl);
    const v = f ? "M" + Ft(w - 4) + " " + Ft(L - 3) + "l4 -3l4 3M" + Ft(w - 4) + " " + Ft(L + 3) + "l4 3l4 -3" : "M" + Ft(w - 3) + " " + Ft(L - 4) + "l-3 4l3 4M" + Ft(w + 3) + " " + Ft(L - 4) + "l3 4l-3 4";
    u += '<circle cx="' + Ft(w) + '" cy="' + Ft(L) + '" r="11" fill="' + hl + '" filter="url(#' + n + 's)"/><path d="' + v + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function sm(n, s) {
  const i = /* @__PURE__ */ new Date(), u = em(i.getHours() + i.getMinutes() / 60), h = 42 + 18 * Math.sin(u.t * 0.5), f = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, w = Ud(s.kind, s.pos / 100, s.bar / 100, s.tilt, s.vel, s.ph, !1), L = s.ghostAlpha > 4e-3 && s.ghost != null ? Ud(s.kind, s.ghost / 100, s.ghost / 100, s.tilt, 0, 0, !0).body : "", v = s.grip > 4e-3 ? rm(n, w.rails) : null, N = (re) => ro(wt, wt, yt, yt, re);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Ft(h) + '%" cy="' + Ft(f) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + Ft(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Ft(100 - h * 0.8) + '%" cy="' + Ft(100 - f * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + Ft(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + jd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (L ? '<g opacity="' + Ft(s.ghostAlpha) + '">' + L + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Hr + '" filter="url(#' + n + 's)"/></g>' + (v ? '<g clip-path="url(#' + n + 'c)" opacity="' + Ft(s.grip) + '">' + v.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + jd + '" stroke-width="3"/>' + (v ? '<g opacity="' + Ft(s.grip) + '">' + v.knobs + "</g>" : "") + "</svg>";
}
function lm({ onMove: n, onSet: s }) {
  var ne;
  const i = "cv" + ++Qp, u = document.createElement("div");
  u.className = "tfCoverArt";
  const h = (ne = window.matchMedia) == null ? void 0 : ne.call(window, "(pointer: coarse)").matches;
  let f = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, v = !1, N = !1, re = null, te = 0, R = 0;
  const B = () => (f == null ? void 0 : f.kind) === "curtain" ? "x" : "y", G = () => re || v || N || f.moving || f.target != null ? 1 : h ? performance.now() < R ? 1 : 0.4 : 0, X = () => {
    u.innerHTML = sm(i, { kind: f.kind, pos: w.pos, bar: f.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function j(A) {
    L = 0;
    const W = w.last ? Math.min(0.064, (A - w.last) / 1e3) : 1 / 60, ge = W * 60;
    w.last = A;
    const Se = f.pos - w.pos, g = w.pos;
    w.pos += Math.sign(Se) * Math.min(Math.abs(Se), Math.max(10.5, Math.abs(Se) * 1.4) * W), Math.abs(f.pos - w.pos) < 0.03 && (w.pos = f.pos), w.vel = w.vel * 0.86 + (w.pos - g) / ge * 0.14, Math.abs(w.vel) < 0.015 && w.pos === f.pos && (w.vel = 0), (w.pos !== g || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * ge);
    const ke = f.tilt - w.tilt;
    w.tilt += Math.sign(ke) * Math.min(Math.abs(ke), Math.max(60, Math.abs(ke) * 4) * W);
    const Ce = G();
    w.grip += (Ce - w.grip) * Math.min(1, W * (Ce > w.grip ? 11 : 3.5)), Math.abs(Ce - w.grip) < 0.01 && (w.grip = Ce);
    const Oe = f.target != null && Math.abs(f.target - w.pos) > 0.5 ? 0.22 : 0;
    f.target != null && (w.gpos = f.target), w.ghost += (Oe - w.ghost) * Math.min(1, W * (Oe > w.ghost ? 16 : 3)), Math.abs(Oe - w.ghost) < 4e-3 && (w.ghost = Oe), X(), w.pos !== f.pos || w.vel || w.tilt !== f.tilt || w.grip !== Ce || w.ghost !== Oe ? L = requestAnimationFrame(j) : w.last = 0;
  }
  const q = () => {
    f && !L && (L = requestAnimationFrame(j));
  }, $ = setInterval(() => {
    f && !L && X();
  }, 60 * 1e3), O = (A) => {
    const W = u.getBoundingClientRect();
    return B() === "x" ? (A.clientX - W.left) / W.width : (A.clientY - W.top) / W.height;
  };
  u.addEventListener("pointerdown", (A) => {
    var Se;
    if (!(f != null && f.canSet) || A.button > 0) return;
    A.preventDefault(), (Se = u.setPointerCapture) == null || Se.call(u, A.pointerId);
    const W = f.target ?? f.pos, ge = u.getBoundingClientRect();
    re = { p0: O(A), from: W, x0: A.clientX, value: null, side: null }, f.kind === "curtain" && W > 0 && (re.side = (A.clientX - ge.left) / ge.width < 0.5 ? "L" : "R"), q();
  }), u.addEventListener("pointermove", (A) => {
    if (!re) return;
    let W;
    if (f.kind === "curtain") {
      if (!re.side) {
        const Se = A.clientX - re.x0;
        if (Math.abs(Se) < 4) return;
        re.side = Se < 0 ? "L" : "R";
      }
      const ge = (yt / 2 - yt * 0.12) / 200;
      W = re.from + (re.side === "L" ? -1 : 1) * ((O(A) - re.p0) / ge) * 100;
    } else W = re.from - (O(A) - re.p0) / (yt / 200) * 100;
    re.value = Wa(W, 0, 100), n(re.value);
  });
  const Z = () => {
    if (!re) return;
    const A = re.value;
    re = null, A != null && s(Math.round(A)), q();
  };
  return u.addEventListener("pointerup", Z), u.addEventListener("pointercancel", Z), u.addEventListener("lostpointercapture", Z), u.addEventListener("pointerenter", () => {
    v = !0, q();
  }), u.addEventListener("pointerleave", () => {
    v = !1, q();
  }), u.addEventListener("focus", () => {
    N = u.matches(":focus-visible"), q();
  }), u.addEventListener("blur", () => {
    N = !1, q();
  }), u.addEventListener("keydown", (A) => {
    if (!(f != null && f.canSet)) return;
    const W = Math.round(f.target ?? f.pos), ge = A.shiftKey ? 10 : 1, Se = { ArrowUp: W + ge, ArrowRight: W + ge, ArrowDown: W - ge, ArrowLeft: W - ge, PageUp: W + 25, PageDown: W - 25, Home: 0, End: 100 }[A.key];
    if (Se == null) return;
    A.preventDefault();
    const g = Wa(Se, 0, 100);
    n(g), clearTimeout(te), te = setTimeout(() => s(g), 500);
  }), {
    el: u,
    update(A) {
      const W = !f;
      f = A, W && (w.pos = f.pos, w.tilt = f.tilt, R = performance.now() + 1500, h && setTimeout(q, 1600)), u.classList.toggle("x", B() === "x"), u.classList.toggle("y", B() === "y"), f.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(f.target ?? f.pos))), u.setAttribute("aria-orientation", B() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", f.name + (f.canSet ? " position" : "")), u.setAttribute("aria-valuetext", f.text), q();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval($), clearTimeout(te), u.remove();
    }
  };
}
const Yd = "move-assistant-density", Ho = {
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
}, ue = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), vl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', dm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', cm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', ks = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Zd = 1, um = 4, Kd = 16, $d = 32, pm = 128, mm = 256, Xd = 16384, hm = 1, fm = 2, Jd = 4, gm = 8, vm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, bm = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, bl = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Qd = "move_assistant_house", ec = "move-assistant-house-used", xm = ["switch", "fan", "input_boolean", "automation"], tc = "move-assistant-house-look", ym = [["popup", "Popup"], ["sheet", "Sheet"]], km = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Mm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', ma = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((s) => '<path d="' + s + '"/>').join("") + "</svg>", nc = ma(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Sm = ma(["M20 6L9 17L4 12"]), Fa = {
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
}, Tm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lm = 1, _m = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], ac = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, wl = ["hs", "xy", "rgb", "rgbw", "rgbww"], xl = ["door", "window", "garage_door", "opening"], Ms = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Am = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], oc = 10, Em = 20, Dm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rm = ["living room", "bedroom", "office"];
function Nm(n, { config: s, getHass: i }) {
  var ts, Mr, to;
  const u = (t) => n.getElementById(t), h = u("app"), w = String((s || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = Ho.get(Yd) === "1", v = {};
  const N = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, re = (t, a, l) => N({ type: "call_service", domain: t, service: a, service_data: l }), te = n.querySelector("#appearancePane .toggleList");
  te && !u("densityToggle") && (te.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    L = !L, Ho.set(Yd, L ? "1" : "0"), ne();
  }));
  const R = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && vt(t).device_class === "power" && /^(W|kW)$/.test(vt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], B = (t, a, l, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + d.map(([m, T]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + l + '="' + m + '">' + T + "</button>").join("") + "</div>", G = (t, a, l, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + l + "</div>";
  function X() {
    var F, ae, U;
    if (!w || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], l = (z, pe) => '<div class="houseTab' + (z === "look" ? " active" : "") + '" data-house-pane="' + z + '"><section class="card">' + pe + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([z, pe]) => '<button class="tab segBtn' + (z === "look" ? " active" : "") + '" type="button" data-house-tab="' + z + '">' + pe + "</button>").join("") + "</div>" + l("look", '<div class="toggleList" id="houseLook"></div>') + l("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + l("sources", '<div class="toggleList">' + R.map(([z, pe, qe]) => G(pe, qe, '<select class="settingsSelect" data-source="' + z + '" aria-label="' + pe + '"></select>')).join("") + "</div>") + l("sums", '<div class="toggleList">' + Object.entries(bl).map(([z, pe]) => G(pe.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + z + '" aria-label="' + pe.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = u("houseLook");
    [(F = t.querySelector(".themeBtn")) == null ? void 0 : F.closest(".toggleRow"), (ae = u("densityToggle")) == null ? void 0 : ae.closest(".toggleRow"), (U = u("moreInfoChoice")) == null ? void 0 : U.closest(".toggleRow")].forEach((z) => z && d.appendChild(z)), d.insertAdjacentHTML("beforeend", G("Lights", "How lights show on the house page.", B("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + G("Pad", "What the Dual Axis Controller’s pad sets on its tile.", B("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const m = u("housePane"), T = m.querySelector(".houseTabs"), y = T.querySelector(".rubberIndicator"), b = (z) => {
      const pe = T.querySelector(".tab.active");
      y.style.transition = z ? "" : "none", y.style.left = pe.offsetLeft + "px", y.style.width = pe.offsetWidth + "px", z && (y.style.transform = "scaleX(1.08)", setTimeout(() => y.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(T), m.addEventListener("click", (z) => {
      const pe = z.target.closest("[data-house-tab]");
      if (pe) {
        T.querySelectorAll(".tab").forEach((fe) => fe.classList.toggle("active", fe === pe)), m.querySelectorAll(".houseTab").forEach((fe) => fe.classList.toggle("active", fe.dataset.housePane === pe.dataset.houseTab)), pe.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const qe = z.target.closest("[data-light-fav]");
      if (qe) {
        nr(qe.dataset.lightFav);
        return;
      }
      const Ie = z.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ie || Ie.disabled)) {
        if (Ie.dataset.lights && (Bt.lights = Ie.dataset.lights), Ie.dataset.dacPad && (Bt.dacPad = Ie.dataset.dacPad), (Ie.dataset.lights || Ie.dataset.dacPad) && (Ye(), rn.clear()), Ie.dataset.sumToggle) {
          const fe = Ie.dataset.sumToggle, me = new Set(V.hiddenSums || []);
          me.has(fe) ? me.delete(fe) : me.add(fe), V = { ...V, hiddenSums: [...me] }, jn();
        }
        Ln();
      }
    }), m.addEventListener("change", (z) => {
      const pe = z.target;
      pe.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [pe.dataset.source]: pe.value || void 0 } }, jn());
      const qe = pe.dataset.lightStyle || pe.dataset.lightPad;
      if (qe) {
        const Ie = pe.dataset.lightStyle ? "lightStyles" : "lightPads", fe = { ...Bt[Ie] };
        pe.value ? fe[qe] = pe.value : delete fe[qe], Bt[Ie] = fe, Ye(), [...rn.keys()].filter((me) => me.endsWith(":" + qe)).forEach((me) => rn.delete(me));
      }
      Ln();
    });
  }
  function j() {
    var y;
    Hn() && mo();
    const t = u("housePane");
    if (!t) return;
    const a = !!customElements.get(In);
    t.querySelectorAll("[data-lights]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lights === Bt.lights))), u("lightsRow").querySelector(".status").textContent = a || !Hn() ? "How lights show on the house page." : Sa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.dacPad === Bt.dacPad))), u("dacPadRow").hidden = !Hn();
    for (const b of t.querySelectorAll("[data-source]")) {
      if (b === n.activeElement) continue;
      const [F] = R.find(([U]) => U === b.dataset.source), ae = Object.keys(v).filter(R.find(([U]) => U === F)[3]).sort((U, z) => Be(U).localeCompare(Be(z)));
      b.dataset.sig !== ae.join(",") && (b.innerHTML = '<option value="">Automatic</option>' + ae.map((U) => '<option value="' + ue(U) + '">' + ue(Be(U)) + "</option>").join(""), b.dataset.sig = ae.join(",")), b.value = ae.includes((y = V.sources) == null ? void 0 : y[F]) ? V.sources[F] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((b) => {
      const F = !(V.hiddenSums || []).includes(b.dataset.sumToggle);
      b.classList.toggle("on", F), b.setAttribute("aria-checked", String(F));
    });
    const l = u("lightRows");
    if (!l || l.contains(n.activeElement)) return;
    const d = new Set(Ga()), m = (b, F, ae, U) => '<option value="' + b + '"' + (b === ae ? " selected" : "") + ">" + F + "</option>", T = Object.keys(v).filter((b) => b.startsWith("light.")).sort((b, F) => !St.get(b) - !St.get(F) || (St.get(b) || "").localeCompare(St.get(F) || "") || Be(b).localeCompare(Be(F))).map((b) => {
      const F = Bt.lightStyles[b] || "", ae = Bt.lightPads[b] || "", U = d.has(b), z = ue(Be(b));
      return "<tr><td><strong>" + z + "</strong></td><td>" + ue(St.get(b) || "—") + "</td><td>" + ue(Dt(b)) + '</td><td class="metaSwitchCol"><button class="switch' + (U ? " on" : "") + '" type="button" role="switch" aria-checked="' + U + '" data-light-fav="' + ue(b) + '" aria-label="' + z + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + ue(b) + '" aria-label="' + z + ' tile">' + m("", "Default", F) + m("tile", "HomeCore tile", F) + m("dac", "Dual Axis Controller", F) + '</select></td><td><select class="settingsSelect" data-light-pad="' + ue(b) + '" aria-label="' + z + ' pad"' + (ht(b) ? "" : " disabled") + ">" + m("", "Default", ae) + m("temperature", "Temperature", ae) + m("colour", "Colour", ae) + "</select></td></tr>";
    }).join("");
    l.dataset.html !== T && (l.innerHTML = T, l.dataset.html = T);
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, h.appendChild(q);
  let $ = 0;
  function O() {
    if (!L) return;
    const t = u("homeView"), a = (T) => T.offsetParent !== null && !T.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((T) => {
      a(T) && (T.dataset.h = Math.round(T.getBoundingClientRect().height) + " px");
    });
    const l = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), d = window.innerHeight, m = l.filter((T) => {
      const y = T.getBoundingClientRect();
      return y.height > 0 && y.top >= 0 && y.bottom <= d + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + m + "</b><small>of " + l.length + " readings on screen</small>";
  }
  const Z = () => {
    L && requestAnimationFrame(O);
  };
  function ne() {
    var t;
    h.classList.toggle("showDensity", L), (t = u("densityToggle")) == null || t.classList.toggle("on", L), q.hidden = !L, clearInterval($), L && ($ = setInterval(O, 1e3), O());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const A = n.querySelector("#homeView .grid");
  let W = null, ge = null, Se = null, g = null;
  const ke = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), x = 350;
  let S = null;
  const M = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
  let V = { favourites: null }, Q = {}, oe = {}, de = [], We = null;
  const $e = (() => {
    try {
      return JSON.parse(Ho.get(ec)) || {};
    } catch {
      return {};
    }
  })();
  let St = /* @__PURE__ */ new Map(), Jt = 0;
  function jn() {
    clearTimeout(Jt), Jt = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: Qd, value: V })).catch(() => {
    }), 400);
  }
  const Bt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ho.get(tc)) || {};
    } catch {
    }
    const a = (l, d) => Object.fromEntries(Object.entries(l || {}).filter(([, m]) => d.includes(m)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: a(t.lightStyles, ["tile", "dac"]),
      lightPads: a(t.lightPads, ["temperature", "colour"])
    };
  })(), Ye = () => Ho.set(tc, JSON.stringify(Bt)), kt = () => {
    h.dataset.more = Bt.more, vr();
  };
  w && te && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + ym.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Bt.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Bt.more = a.dataset.moreStyle, Ye(), kt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === a))));
  })), X();
  let ot = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Qt = /* @__PURE__ */ new Map();
  let pn = "";
  const ci = w ? Eu({ onChange: () => On() }) : null;
  w && h.classList.add("house");
  const it = Object.assign(document.createElement("div"), { className: "tfBento" });
  let ze = null, pt = null, qa = !1;
  function ui(t) {
    const a = vi();
    if (h.classList.toggle("houseBento", !!a), ze && (pt !== a || t == null) && (ze.destroy(), ze = null), !a || t == null) {
      it.remove();
      return;
    }
    it.isConnected || A.append(it), it.style.order = t, !ze && !qa && (ze = zd(it, { getHass: i, entityId: a, style: "bitmap" }), pt = a);
  }
  const Oo = [["wx", ["current"]], ["avg", ["compared_to_average"]]], an = Object.fromEntries(Oo.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Xe = null, kn = null;
  function pi(t) {
    const a = vi();
    Xe && kn !== a && (Xe.forEach((l) => l.destroy()), Xe = null), Object.values(an).forEach((l) => a ? !l.isConnected && A.append(l) : l.remove()), a && !Xe && !qa && (Xe = Oo.map(([l, d]) => zd(an[l], { getHass: i, entityId: a, style: "bitmap", cards: d, onOpen: l === "wx" ? () => Ti("weather") : void 0 })), kn = a);
  }
  const vt = (t) => {
    var a;
    return ((a = v[t]) == null ? void 0 : a.attributes) || {};
  }, Be = (t) => vt(t).friendly_name || t, rt = (t, a) => Gi(t) || (Number(vt(t).supported_features) & a) === a, ft = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Pe = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), Va = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, lo = (t) => vt(t).supported_color_modes || [], Gn = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, Ee = (t, a) => [5, 3, 1].map((l) => {
    const d = (l + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function je(t) {
    const a = vt(t), l = (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? Ee(...a.hs_color) : a.color_temp_kelvin ? Gn(a.color_temp_kelvin) : [255, 170, 0])).map((m) => Math.round(Math.max(0, Math.min(255, m)))), d = (0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]) / 255 > 0.8;
    return "--light:rgb(" + l.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const zt = (t) => {
    var a;
    return t.startsWith("light.") && ((a = v[t]) == null ? void 0 : a.state) === "on" ? ' data-light style="' + je(t) + '"' : "";
  }, on = (t) => {
    const a = lo(t);
    return a.length ? a.some((l) => l !== "onoff") : vt(t).brightness != null;
  }, mn = (t) => [vt(t).min_color_temp_kelvin || 2e3, vt(t).max_color_temp_kelvin || 6500], Et = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function za(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const l = Math.round(a / 60);
    if (l < 60) return l + (l === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(l / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const m = Math.round(d / 24);
    return m + (m === 1 ? " day ago" : " days ago");
  }
  const Lt = (t) => {
    var a;
    return vt(t).current_position ?? (((a = v[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Bn = (t) => {
    var a;
    return Gt("pos", t, ((a = M.get(t)) == null ? void 0 : a.pos) ?? Lt(t));
  }, co = (t) => {
    var a;
    return Gt("tilt", t, ((a = M.get(t)) == null ? void 0 : a.tilt) ?? vt(t).current_tilt_position);
  };
  function Dt(t) {
    var y;
    const a = v[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const l = a.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (a.state !== "on") return "Off";
      const b = l.color_temp_kelvin;
      return (on(t) ? Va(a) + "%" : "On") + (l.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : wl.includes(l.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (a.state === "off" ? "Off" : ft(l.hvac_action || a.state)) + " · " + Pe(l.current_temperature) + " °C now";
    if (d === "cover") {
      const b = Lt(t), F = l.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? ft(a.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (F > 0 && F < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return a.state !== "on" ? "Off" : ft(l.action || "on") + " · " + l.current_humidity + "% now";
    if (d === "vacuum") return ft(a.state) + (a.state === "cleaning" && ((y = l.rooms) != null && y.length) ? " · " + l.rooms.join(", ") : "") + (l.battery_level != null ? " · " + l.battery_level + "%" : "");
    if (d === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (l.media_title || "Playing") : ft(a.state);
    if (d === "alarm_control_panel") return ac[a.state] || ft(a.state);
    if (d === "lock" || d === "valve") return ft(a.state);
    if (d === "switch") return a.state === "on" ? "On" : "Off";
    if (d === "plant") return a.state === "ok" ? "Healthy" : ft(l.problem);
    if (d === "binary_sensor")
      return l.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : xl.includes(l.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (l.rang) return "Rang at " + Et(l.rang);
    const m = i();
    if (m != null && m.formatEntityState && !Gi(t))
      try {
        return m.formatEntityState(a);
      } catch {
      }
    const T = Number(a.state);
    if (a.state !== "" && Number.isFinite(T)) {
      const b = Math.abs(T) >= 100 ? 0 : Math.abs(T) >= 10 ? 1 : 2, F = l.unit_of_measurement ? l.unit_of_measurement === "%" ? "%" : " " + l.unit_of_measurement : "";
      return T.toLocaleString(void 0, { maximumFractionDigits: b }) + F + (l.plant_low ? " · Low" : l.plant_high ? " · High" : "");
    }
    return ft(a.state);
  }
  const Vt = (t) => t >= 1e3 ? Pe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Mn(t) {
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var T;
      const d = v[l.dataset.iconFor], m = l.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !m) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (l.textContent = "", y = document.createElement("ha-state-icon"), l.appendChild(y)), y.hass = a, y.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-icon") && (l.textContent = "", y = document.createElement("ha-icon"), l.appendChild(y)), y.icon = m || ((T = d == null ? void 0 : d.attributes) == null ? void 0 : T.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || Be(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const en = (t, a, l) => ' data-icon-for="' + ue(t) + '"' + (a ? ' data-icon-name="' + ue(a) + '"' : "") + (l ? ' data-letter="' + ue(l) + '"' : ""), Cn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : vt(t).rang ? "mdi:doorbell" : "", at = (t, a, l, d) => ue([t, a, l, d ? JSON.stringify(d) : ""].join("|")), uo = (t) => ue(JSON.stringify(t));
  function Un(t, a) {
    var m, T;
    const l = ue(Be(a) + ", " + Dt(a));
    return '<div class="activityRow' + (Number.isFinite(Number((m = v[a]) == null ? void 0 : m.state)) && ((T = v[a]) == null ? void 0 : T.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + ue(t + "|" + a) + '" aria-label="' + l + '. Show the last 24 hours"' : '" aria-label="' + l + '"') + '><div class="tfIcon" aria-hidden="true"' + en(a, Cn(a)) + '></div><div><div class="activityRowName">' + ue(Be(a)) + '</div><div class="activityRowMeta">' + ue(Dt(a)) + "</div></div></div>";
  }
  const Ca = (t, a, l) => '<div class="activityRow" aria-label="' + ue(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + en("", l, t) + '></div><div><div class="activityRowName">' + ue(t) + '</div><div class="activityRowMeta">' + ue(a) + "</div></div></div>";
  function po(t) {
    var l;
    const a = ((l = v[t]) == null ? void 0 : l.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + at("switch", "toggle", t) + '" aria-label="Turn ' + ue(Be(t)) + (a ? " off" : " on") + '"' + en(t) + '></button><div><div class="activityRowName">' + ue(Be(t)) + '</div><div class="activityRowMeta">' + ue(Dt(t)) + "</div></div></div>";
  }
  const C = (t) => {
    var a;
    return ((a = Ce.get(t)) == null ? void 0 : a.name) ?? Be(t);
  }, D = (t) => {
    var a;
    return ((a = Ce.get(t)) == null ? void 0 : a.text) ?? Dt(t);
  };
  function I(t) {
    var l;
    const a = (l = Ce.get(t)) == null ? void 0 : l.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? en("", a, C(t)) : en(t, Cn(t))) + '></div><div><div class="activityRowName">' + ue(C(t)) + '</div><div class="activityRowMeta">' + ue(D(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + ue(C(t)) + '’s last 24 hours">' + vl + '</button></div><svg class="tfGraph" data-graph="' + ue(t) + '" role="img" aria-label="' + ue(C(t)) + ', last 24 hours"></svg></div>';
  }
  function H(t, a, l, d, m = "", T = null, y = "") {
    const b = W && W.key === t;
    return '<section class="card tfCard' + (y ? " " + y : "") + (b ? " open" : "") + '" data-tf data-k="' + ue(t) + '" style="order:' + a + (b && W.h ? ";min-height:" + W.h + "px" : "") + '" aria-label="' + ue(l) + '"><div class="activityHeader">' + (T ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + ue(T) + '" aria-label="' + ue(l + ", " + Dt(T) + ". More info") + '">' + ue(l) + "</button>" : '<div class="activityTitle">' + ue(l) + "</div>") + "</div>" + (b ? I(W.id) : '<div class="activityRows">' + d.join("") + "</div>" + m) + "</section>";
  }
  function ce(t, a) {
    const l = "readings:" + t.id, d = t.readings.map((m) => Un(l, m));
    return t.power != null && d.push(Ca("Power now", Vt(t.power), "mdi:flash")), H(l, a, "Readings", d.concat(t.plugs.map(po)));
  }
  function be(t, a) {
    var b;
    const l = "energy:" + t.id, [d, m] = [t.solar.find((F) => F.endsWith("_power")), t.solar.find((F) => F.endsWith("_today"))], T = [d, m].filter(Boolean).map((F) => Un(l, F)), y = Number(((b = v[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return ot.grid && (T.push(Un(l, ot.grid)), T.push(Ca("House use", Vt(y + Number(v[ot.grid].state)), "mdi:home-lightning-bolt"))), H(l, a, "Energy", T, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const he = (t, a) => H("plant:" + t.id, a, Be(t.id), t.readings.map((l) => Un("plant:" + t.id, l)), "", t.id), xe = (t) => H("openings", t, "Doors and windows", ot.security.openings.map((a) => Un("openings", a)));
  function le(t, a, l, d, m, T, y = null) {
    const b = l == null ? null : Math.max(0, Math.min(1, l)), F = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + ue(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + F + '"' + (m ? ' aria-valuetext="' + ue(m) + '"' : "") + ' data-drag="' + ue(t + "|" + a) + '">' + (y != null ? '<span class="was" aria-hidden="true" style="left:' + y + '%"></span>' : "") + (T ? b == null ? "" : '<b style="left:' + F + '%"></b>' : '<i style="width:' + F + '%"></i>') + "</div>";
  }
  const Ae = "move-assistant-house-last-bright", Fe = (() => {
    try {
      return JSON.parse(Ho.get(Ae)) || {};
    } catch {
      return {};
    }
  })();
  let Ze = 0;
  const Ge = (t, a) => {
    !a || Fe[t] === a || (Fe[t] = a, clearTimeout(Ze), Ze = setTimeout(() => Ho.set(Ae, JSON.stringify(Fe)), 500));
  }, De = (t, a, l, d) => '<div class="tfStep" role="group" aria-label="' + ue(t) + '"><button type="button" data-act="' + l + '" aria-label="Lower ' + ue(t.toLowerCase()) + '">−</button><output>' + ue(a) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + ue(t.toLowerCase()) + '">+</button></div>', Ne = (t, a, l) => '<div class="' + t + '" role="group" aria-label="' + ue(a) + '">' + l.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + ue(d.aria) + '"' : "") + ">" + (d.html || ue(d.label)) + "</button>").join("") + "</div>", Re = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), Qe = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", mt = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + ue(Be(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + ue(t) + '">' + [0, 1, 2, 3].map((l) => '<span><i style="' + Re(a, l) + '"></i><b' + (a >= (l + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (l + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Qe(a) + '">' + Math.round(a) + "%</output></div>";
  function Tt(t, a) {
    t.querySelectorAll(":scope>span").forEach((d, m) => {
      d.firstElementChild.setAttribute("style", Re(a, m)), d.lastElementChild.classList.toggle("lit", a >= (m + 1) * 25 - 12);
    });
    const l = t.querySelector(".tfTip");
    l.setAttribute("style", Qe(a)), l.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const bt = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + ue(Be(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + ue(t) + '"><i style="width:calc((100% - 6px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", jt = (t, a, l) => '<div class="tfCoverBtns" role="group" aria-label="' + ue(Be(t)) + '">' + [
    rt(t, hm) && ["open", "Open", "open_cover", a >= 100 && !l],
    rt(t, gm) && ["stop", "Stop", "stop_cover", !1],
    rt(t, fm) && ["close", "Close", "close_cover", a <= 0 && !l]
  ].filter(Boolean).map(([d, m, T, y]) => '<button type="button" data-act="' + at("cover", T, t) + '" aria-label="' + m + '"' + (y ? " disabled" : "") + ">" + vm[d] + "</button>").join("") + "</div>", gn = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + ue(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + ue(a.art) + '&quot;)"' : en(t, a.icon)) + "></button>", Pn = (t) => '<button class="tfName" type="button" data-more="' + ue(t) + '" aria-label="' + ue(Be(t) + ", " + Dt(t) + ". More info") + '"><span class="activityRowName">' + ue(Be(t)) + '</span><span class="activityRowMeta">' + ue(Dt(t)) + "</span></button>";
  function Sn(t, a = !1, l = null) {
    if (t.startsWith("light.") && Jn(t)) return '<div class="tfDac" data-k="' + ue(t) + '" data-dac="' + (a ? "more:" : l ? "dash:" : "tile:") + ue(t) + '"></div>';
    const d = qo(t), m = l || (a && t.startsWith("light.") ? ["bright"] : null), T = d.sections.map((y, b) => y && (!m || m.includes((d.parts || [])[b])) ? y : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + ue(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + zt(t) + '><div class="tfActionHead">' + gn(t, d) + Pn(t) + "</div>" + T.join("") + "</div>";
  }
  const In = "dual-controller-v3", Yn = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.3/dist/dual-axis-controller-v4.js";
  let Sa = null;
  async function mo() {
    if (Sa || customElements.get(In)) return;
    Sa = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(In), new Promise((d) => setTimeout(d, a ? 8e3 : 0))]), customElements.get(In)) return;
    const l = Object.assign(document.createElement("script"), { src: Yn });
    l.onerror = () => {
      Sa = "failed", j();
    }, document.head.appendChild(l);
  }
  const rn = /* @__PURE__ */ new Map(), ht = (t) => (Bt.lightStyles[t] || Bt.lights) === "dac", Hn = () => Bt.lights === "dac" || Object.values(Bt.lightStyles).includes("dac");
  function Jn(t) {
    return ht(t) && !!customElements.get(In);
  }
  const Qn = (t) => Bt.lightPads[t] || Bt.dacPad, ea = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !h.classList.contains("light") },
      callService: (a, l, d, ...m) => t.callService(a, ...yr(a, l, d), ...m)
    };
  }, Wo = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", fa = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", sn = (t, a) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: fa + (a ? Wo : "") })).dataset.tf = "");
  };
  function _t(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const l = a.dataset.dac, d = l.startsWith("dash:");
      let m = rn.get(l);
      if (!m) {
        const T = l.slice(l.indexOf(":") + 1);
        m = document.createElement(In), m.setConfig({ type: "custom:" + In, entity: T, pad: Qn(T), ...d ? { tap_action: { action: "none" } } : {} }), rn.set(l, m);
      }
      m.hass = ea(), m.parentNode !== a && a.replaceChildren(m), sn(m, d);
    });
  }
  function mi() {
    const t = ea();
    rn.forEach((a, l) => {
      a.isConnected ? a.hass = t : rn.delete(l);
    });
  }
  customElements.whenDefined(In).then(() => {
    w && (A != null && A.querySelector("[data-tf]")) && Na(Ln);
  });
  const Gt = (t, a, l) => Oe.has(t + "|" + a) ? Oe.get(t + "|" + a) : l;
  function qo(t) {
    var T;
    const a = v[t], l = a.attributes, d = t.split(".")[0], m = (y, b) => ({ act: at(y, "toggle", t), label: b });
    if (d === "light") {
      const y = a.state === "on", b = lo(t), [F, ae] = mn(t), U = Gt("bright", t, Va(a));
      y && Ge(t, Va(a));
      const z = Gt("ct", t, y && l.color_mode === "color_temp" ? l.color_temp_kelvin : null), pe = Gt("hue", t, y && wl.includes(l.color_mode) && l.hs_color ? l.hs_color[0] : null);
      return { on: y, button: m("light", "Turn " + Be(t) + (y ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        on(t) && le("bright", t, U / 100, Be(t) + " brightness", U + "%", !1, y ? null : Fe[t] ?? null),
        b.includes("color_temp") && le("ct", t, z == null ? null : (z - F) / (ae - F), Be(t) + " warm to cool", z == null ? "" : Math.round(z) + " kelvin", !0),
        b.some((qe) => wl.includes(qe)) && le("hue", t, pe == null ? null : pe / 360, Be(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const y = l.target_temp_step || 0.5, b = Number(l.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || l.hvac_action === "cooling" ? "cool" : "heat", button: m("climate", "Turn " + Be(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && De("Target temperature", Pe(b) + " °C", at("climate", "set_temperature", t, { temperature: b - y }), at("climate", "set_temperature", t, { temperature: b + y })),
        Ne("tfSeg", "Mode", (l.hvac_modes || []).map((F) => ({ label: ft(F), act: at("climate", "set_hvac_mode", t, { hvac_mode: F }), pressed: a.state === F })))
      ] };
    }
    if (d === "cover") {
      const y = a.state === "opening" || a.state === "closing", b = a.state === "closed", F = Bn(t), ae = co(t);
      return { on: !b, tone: "blue", icon: bm[gl(a)][b ? 1 : 0], button: m("cover", (b ? "Open " : "Close ") + Be(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        rt(t, Jd) && mt(t, F),
        ae != null && bt(t, ae),
        jt(t, F, y)
      ] };
    }
    if (d === "humidifier") {
      const y = Number(l.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: m("humidifier", "Turn " + Be(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(y) && De("Target humidity", y + "%", at("humidifier", "set_humidity", t, { humidity: y - 1 }), at("humidifier", "set_humidity", t, { humidity: y + 1 })),
        ((T = l.available_modes) == null ? void 0 : T.length) && Ne("tfSeg", "Mode", l.available_modes.map((b) => ({ label: ft(b), act: at("humidifier", "set_mode", t, { mode: b }), pressed: l.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const y = a.state === "playing", b = a.state === "off" || a.state === "standby", F = Gt("vol", t, l.volume_level), ae = b ? { act: at("media_player", rt(t, pm) ? "turn_on" : "toggle", t), label: "Turn " + Be(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: at("media_player", "media_play_pause", t), label: (y ? "Pause " : "Play ") + Be(t) } : { act: at("media_player", rt(t, mm) ? "turn_off" : "toggle", t), label: "Turn " + Be(t) + " off" };
      return { on: !b, tone: "blue", art: !b && l.entity_picture ? l.entity_picture : null, button: ae, parts: ["playback", "volume"], sections: b ? [] : [
        (rt(t, Kd) || rt(t, $d) || rt(t, Zd) || rt(t, Xd)) && Ne("tfSeg", "Playback", [
          { html: ks.prev, aria: "Previous", act: at("media_player", "media_previous_track", t), disabled: !rt(t, Kd) },
          { html: y ? ks.pause : ks.play, aria: y ? "Pause" : "Play", act: at("media_player", "media_play_pause", t), disabled: !(rt(t, Zd) || rt(t, Xd)) },
          { html: ks.next, aria: "Next", act: at("media_player", "media_next_track", t), disabled: !rt(t, $d) }
        ]),
        rt(t, um) && F != null && le("vol", t, F, Be(t) + " volume", Math.round(F * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const y = a.state === "cleaning", b = l.rooms || [], F = (U) => b.includes(U) ? b.filter((z) => z !== U) : b.concat(U), ae = at("vacuum", y ? "pause" : "start", t, Gi(t) ? { rooms: b } : null);
      return { on: y || a.state === "returning", tone: "blue", button: { act: ae, label: (y ? "Pause " : "Start ") + Be(t) }, parts: ["controls", "rooms"], sections: [
        Ne("tfSeg", Be(t), [
          { label: y ? "Pause" : "Start", act: ae },
          { label: "Dock", act: at("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: at("vacuum", "locate", t) }
        ]),
        Gi(t) && Ne("tfChips", "Rooms to clean", ot.rooms.filter((U) => U.id !== "balcony").map((U) => ({ label: U.name, act: at("vacuum", "set_rooms", t, { rooms: F(U.name) }), pressed: b.includes(U.name) })))
      ] };
    }
    if (d === "lock") {
      const y = a.state === "locked";
      return { on: !y, tone: "heat", button: { act: at("lock", y ? "unlock" : "lock", t), label: (y ? "Unlock " : "Lock ") + Be(t) }, parts: ["controls"], sections: [
        Ne("tfSeg", Be(t), [
          { label: "Lock", act: at("lock", "lock", t), pressed: y },
          { label: "Unlock", act: at("lock", "unlock", t), pressed: a.state === "unlocked" },
          rt(t, Lm) && { label: "Open", act: at("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const y = a.state === "disarmed";
      return { on: !y, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: at("alarm_control_panel", y ? "alarm_arm_away" : "alarm_disarm", t), label: y ? "Arm " + Be(t) + ", away" : "Disarm " + Be(t) }, parts: ["controls"], sections: [
        Ne("tfSeg", Be(t), _m.filter(([, , , b]) => !b || rt(t, b)).map(([b, F, ae]) => ({ label: F, act: at("alarm_control_panel", ae, t), pressed: a.state === b })))
      ] };
    }
    if (d === "valve") {
      const y = a.state === "open";
      return { on: y, tone: "blue", icon: "mdi:sprinkler-variant", button: m("valve", (y ? "Close " : "Open ") + Be(t)), parts: ["controls"], sections: [
        Ne("tfSeg", Be(t), [
          { label: "Open", act: at("valve", "open_valve", t), pressed: y },
          { label: "Close", act: at("valve", "close_valve", t), pressed: !y }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Be(t) }, sections: [] };
  }
  const Vo = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Pe(t)) + "°";
  function Ji(t) {
    const a = (me) => t.readings.find((ie) => vt(ie).device_class === me), l = a("temperature"), d = a("humidity"), m = (me) => {
      var ie;
      return Number((ie = v[me]) == null ? void 0 : ie.state);
    }, T = (me) => t.actions.filter((ie) => me.test(ie)), y = t.lights.filter((me) => {
      var ie;
      return ((ie = v[me]) == null ? void 0 : ie.state) === "on";
    }), b = T(/^cover\./), F = b.filter((me) => {
      var ie;
      return ((ie = v[me]) == null ? void 0 : ie.state) !== "closed";
    }), ae = [...new Set(b.map((me) => gl(v[me])))], U = T(/^climate\./)[0], z = T(/^humidifier\./)[0], pe = T(/^media_player\./), qe = pe.find((me) => {
      var ie;
      return ((ie = v[me]) == null ? void 0 : ie.state) === "playing";
    }) || pe.find((me) => {
      var ie;
      return ((ie = v[me]) == null ? void 0 : ie.state) === "paused";
    }), Ie = t.plugs.filter((me) => {
      var ie;
      return ((ie = v[me]) == null ? void 0 : ie.state) === "on";
    }), fe = [];
    if (l && Number.isFinite(m(l)) && fe.push({ key: "temp", id: l, kind: "reading", icon: Fa.temp, label: "Temperature", value: Pe(m(l)) + "°" }), d && Number.isFinite(m(d)) && fe.push({ key: "hum", id: d, kind: "reading", icon: Fa.hum, label: "Humidity", value: Math.round(m(d)) + "%" }), t.lights.length && fe.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Fa.lights,
      label: "Lights",
      value: y.length ? y.length + " of " + t.lights.length + " on" : "All off",
      short: y.length ? y.length + " on" : "Off",
      on: y.length > 0,
      light: y.length ? je(y[0]) : "",
      acts: t.lights.map((me) => ["light", y.length ? "turn_off" : "turn_on", me]),
      aria: (y.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), b.length) {
      const me = ae.length === 1 ? wm[ae[0]] : "covers", ie = Math.round(b.reduce((st, qt) => st + Lt(qt), 0) / b.length);
      fe.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Fa.covers,
        label: ft(me),
        value: ie <= 0 ? "Closed" : ie >= 100 ? "Open" : ie + "% open",
        short: ie <= 0 ? "Closed" : ie + "%",
        on: F.length > 0,
        acts: b.map((st) => ["cover", F.length ? "close_cover" : "open_cover", st]),
        aria: (F.length ? "Close the " : "Open the ") + me + " in " + t.name
      });
    }
    if (U) {
      const me = vt(U), ie = v[U].state === "off";
      fe.push({
        key: "climate",
        kind: "control",
        tone: me.hvac_action === "cooling" ? "cool" : "heat",
        icon: Fa.climate,
        label: Be(U),
        value: ie ? "Off" : ft(me.hvac_action || v[U].state) + " · " + Vo(me.temperature),
        short: ie ? "Off" : Vo(me.temperature),
        on: !ie,
        acts: [["climate", "toggle", U]],
        aria: "Turn " + Be(U) + (ie ? " on" : " off")
      });
    }
    if (z) {
      const me = v[z].state === "on";
      fe.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Fa.humidifier,
        label: Be(z),
        value: me ? "On · " + vt(z).humidity + "%" : "Off",
        short: me ? vt(z).humidity + "%" : "Off",
        on: me,
        acts: [["humidifier", "toggle", z]],
        aria: "Turn " + Be(z) + (me ? " off" : " on")
      });
    }
    if (pe.length) {
      const me = qe || pe[0], ie = v[me], st = ie.state === "playing";
      fe.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Fa.media,
        label: Be(me),
        value: Dt(me),
        short: st ? "Playing" : ie.state === "paused" ? "Paused" : ft(ie.state),
        on: st,
        acts: [["media_player", ie.state === "playing" || ie.state === "paused" ? "media_play_pause" : "toggle", me]],
        aria: (st ? "Pause " : "Play ") + Be(me)
      });
    }
    return t.plugs.length && fe.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Fa.plugs,
      label: "Plugs",
      value: Ie.length ? Ie.length + " of " + t.plugs.length + " on" : "All off",
      short: Ie.length ? Ie.length + " on" : "Off",
      on: Ie.length > 0,
      acts: t.plugs.map((me) => ["switch", Ie.length ? "turn_off" : "turn_on", me]),
      aria: (Ie.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((me) => fe.push(vt(me).device_class === "moisture" ? { key: "alert:" + me, kind: "alert", icon: Fa.alert, label: "Water leak" } : { key: "note:" + me, kind: "note", icon: Fa.door, label: Be(me) + " " + Dt(me).toLowerCase() })), fe;
  }
  const zo = (t, a) => {
    const l = (d) => t.actions.filter((m) => d.test(m));
    return {
      lights: t.lights,
      covers: l(/^cover\./),
      climate: l(/^climate\./).slice(0, 1),
      humidifier: l(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = l(/^media_player\./);
        return [d.find((m) => {
          var T;
          return ((T = v[m]) == null ? void 0 : T.state) === "playing";
        }) || d.find((m) => {
          var T;
          return ((T = v[m]) == null ? void 0 : T.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[a] || [];
  }, Fr = (t, a, l) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + uo(t.acts) + '" aria-label="' + ue(t.aria) + '" aria-pressed="' + t.on + '">' + l + "</button>", Rs = (t) => '<button class="pill" type="button" data-go="' + ue(t.id) + '" aria-label="Go to ' + ue(t.name) + '">Go</button>', Qi = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + ue(a.label) + "</span>").join(" "), Or = (t) => t.readings.find((a) => vt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => v[a]) || null, hi = (t, a) => {
    const l = Be(a);
    return l.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? ft(l.slice(t.name.length + 1)) : l;
  };
  function Wr(t) {
    const a = v[t], l = vt(t), d = t.split(".")[0], m = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(m)) {
      if (l.device_class === "temperature") return { text: Vo(m) };
      const T = l.unit_of_measurement || "";
      return T === "%" ? { text: Math.round(m) + "%" } : { text: Pe(m, Number.isInteger(m) ? 0 : 1), unit: T };
    }
    if (d === "climate" && (l.current_temperature ?? l.temperature) != null) return { text: Vo(l.current_temperature ?? l.temperature) };
    if (d === "light") return { text: a.state !== "on" ? "Off" : on(t) ? Va(a) + "%" : "On" };
    if (d === "cover") {
      const T = Lt(t);
      return { text: T <= 0 ? "Closed" : T >= 100 ? "Open" : T + "%" };
    }
    return d === "humidifier" ? { text: a.state === "on" ? l.humidity + "%" : "Off" } : d === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : ft(a.state) } : { text: Dt(t) };
  }
  const Ns = (t, a, l) => {
    const d = l.find((b) => b.key === "temp"), m = l.find((b) => b.key === "hum"), T = vt(a), y = v[a].state === "off";
    return a.startsWith("climate.") ? [hi(t, a), y ? "Off" : ft(T.hvac_action || v[a].state) + (T.temperature != null ? " · " + Vo(T.temperature) : ""), m && m.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === a) && hi(t, a), d && d.id !== a && d.value, m && m.id !== a && m.value + " humidity"].filter(Boolean).join(" · ");
  };
  function qr(t, a, l) {
    const d = l && Wr(l), m = l ? Ns(t, l, a) : "", T = (b) => {
      const F = zo(t, b.key);
      return F.length === 1 ? F[0] : "group:" + t.id + ":" + b.key;
    }, y = a.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + Fr(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + ue(T(b)) + '" aria-label="' + ue(t.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + ue(b.label) + '</span><span class="activityRowMeta">' + ue(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + ue(t.name) + "</div>" + Qi(a) + "</div>" + Rs(t) + "</div>" + (l ? '<button class="tfABig" type="button" data-more="' + ue(l) + '" aria-label="' + ue(Be(l) + ", " + Dt(l) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + ue(d.text) + (d.unit ? '<span class="tfABigUnit">' + ue(d.unit) + "</span>" : "") + "</span>" + (m ? '<span class="tfABigSub">' + ue(m) + "</span>" : "") + "</button>" : "") + (y.length ? '<div class="tfATiles">' + y.join("") + "</div>" : "");
  }
  function fi(t) {
    const a = t.id === ge, l = Ji(t), d = Or(t), m = d && Wr(d), T = [...l.filter((y) => y.kind === "control"), ...l.filter((y) => y.kind !== "control" && y.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + ue(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + ue(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + qr(t, l, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop"><span class="tfACMain">' + (m ? ue(m.text + (m.unit ? " " + m.unit : "")) : "") + '</span><span class="tfACName">' + ue(t.name) + '</span></div><span class="tfACTiles" aria-hidden="true">' + T.map((y) => '<span class="tfACTile"><span class="tfIcon' + (y.kind === "alert" ? " alert" : "") + '"' + (y.on && y.light ? ' data-light style="' + y.light + '"' : "") + ">" + y.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let ho = [];
  const er = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + ho.map(fi).join("") + "</section></div>", ja = () => [
    { key: "home", name: "Home", ids: ot.homeVacuums },
    { key: "security", name: "Security", ids: [...ot.security.alarms, ...ot.security.locks] },
    ...ot.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], jo = (t, a, l) => t + " " + (t === 1 ? a : l), Ga = () => (V.favourites ?? Q.favorite_entities ?? []).filter((t) => v[t]);
  function Go(t = 8) {
    const a = Ga();
    if (Q.hide_suggested_entities) return a;
    if (!We) {
      const d = Object.entries($e).sort((T, y) => y[1] - T[1]).map(([T]) => T), m = ot.rooms.flatMap((T) => T.actions);
      We = [.../* @__PURE__ */ new Set([...de, ...d, ...m.filter((T) => qo(T).on), ...m])];
    }
    const l = (d) => v[d] && v[d].state !== "unavailable" && !a.includes(d);
    return [...a, ...We.filter(l)].slice(0, Math.max(t, a.length));
  }
  const Vr = (t) => {
    const a = Ga().includes(t);
    return '<button class="tfStar" type="button" data-star="' + ue(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + ue(Be(t)) + '">' + Tm(a) + "</button>";
  };
  function gi(t, { area: a = !1, star: l = !1 } = {}) {
    var ae;
    const d = t.split(".")[0], m = Ms.includes(d) ? qo(t) : null, T = m ? m.on : ["on", "open", "playing"].includes((ae = v[t]) == null ? void 0 : ae.state), y = m ? m.button : xm.includes(d) ? { act: at(d, "toggle", t), label: "Turn " + Be(t) + (T ? " off" : " on") } : d === "scene" || d === "script" ? { act: at(d, "turn_on", t), label: "Run " + Be(t) } : null, b = Dt(t) + (a && St.get(t) ? " · " + St.get(t) : ""), F = (m == null ? void 0 : m.icon) || Cn(t);
    return '<div class="activityRow' + (y ? " tfPlug" : "") + (T ? " on" : "") + (l ? " tfPick" : "") + '" data-k="' + ue((a ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (m == null ? void 0 : m.tone) || "blue") + '"' + zt(t) + ">" + (y && !l ? '<button class="tfIcon" type="button" data-act="' + y.act + '" aria-label="' + ue(y.label) + '"' + en(t, F) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + en(t, F) + "></div>") + '<button class="tfName" type="button" data-more="' + ue(t) + '" aria-label="' + ue(Be(t) + ", " + b + ". More info") + '"><span class="activityRowName">' + ue(Be(t)) + '</span><span class="activityRowMeta">' + ue(b) + "</span></button>" + (l ? Vr(t) : "") + "</div>";
  }
  const vi = () => {
    var t;
    return v[(t = V.sources) == null ? void 0 : t.weather] ? V.sources.weather : v["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(v).find((a) => a.startsWith("weather."));
  };
  function tr() {
    var l;
    const t = (d) => Object.keys(v).filter((m) => m.startsWith("binary_sensor.") && d.includes(vt(m).device_class));
    return ((l = oe.alert_entities) != null && l.length ? oe.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(xl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => v[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(v[d.entity].state) }));
  }
  function Rt() {
    const t = Object.keys(bl), a = /* @__PURE__ */ new Set(), l = [];
    return (Q.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || a.has(d.key)) return;
        a.add(d.key);
      }
      l.push(d);
    }), t.forEach((d) => {
      a.has(d) || l.push({ type: "summary", key: d });
    }), l;
  }
  function zr() {
    var Cr;
    const t = ot.rooms, a = ot.security, l = (Le, Mt) => Le.actions.filter((Ia) => Mt.test(Ia)), d = (Le) => t.map((Mt) => ({ name: Mt.name, ids: Le(Mt) })).filter((Mt) => Mt.ids.length), m = t.flatMap((Le) => Le.lights), T = m.filter((Le) => {
      var Mt;
      return ((Mt = v[Le]) == null ? void 0 : Mt.state) === "on";
    }).length, y = t.map((Le) => Le.readings.find((Mt) => vt(Mt).device_class === "temperature")).filter(Boolean).map((Le) => Number(v[Le].state)).filter(Number.isFinite), [b, F] = [Pe(Math.min(...y)), Pe(Math.max(...y))], ae = t.flatMap((Le) => l(Le, /^media_player\./)), U = ae.filter((Le) => {
      var Mt;
      return ((Mt = v[Le]) == null ? void 0 : Mt.state) === "playing";
    }).length, z = tr(), pe = z.filter((Le) => Le.severity === "warning" && Le.on).length, qe = a.locks.filter((Le) => {
      var Mt;
      return ["unlocked", "jammed", "open"].includes((Mt = v[Le]) == null ? void 0 : Mt.state);
    }).length, Ie = a.alarms.filter((Le) => {
      var Mt;
      return ((Mt = v[Le]) == null ? void 0 : Mt.state) === "disarmed";
    }).length, fe = pe ? jo(pe, "warning", "warnings") : null, me = qe ? qe + " unlocked" : Ie ? Ie + " disarmed" : fe ? null : "All secure", ie = Object.keys(v).filter((Le) => Le.startsWith("sensor.") && vt(Le).device_class === "battery").sort((Le, Mt) => Number(v[Le].state) - Number(v[Mt].state)), st = [...ie.filter((Le) => Number(v[Le].state) < 20), ...ot.vacuums.filter((Le) => vt(Le).battery_level < 20)], qt = t.flatMap((Le) => Le.plants.map((Mt) => Mt.id)).sort((Le, Mt) => {
      var Ia, ns;
      return (((Ia = v[Mt]) == null ? void 0 : Ia.state) === "problem") - (((ns = v[Le]) == null ? void 0 : ns.state) === "problem");
    }), xn = qt.filter((Le) => {
      var Mt;
      return ((Mt = v[Le]) == null ? void 0 : Mt.state) === "problem";
    }), oi = t.flatMap((Le) => Le.solar), ln = oi.find((Le) => Le.endsWith("_power")), dn = {
      light: m.length && { value: T ? T + " on" : "All off", groups: d((Le) => Le.lights) },
      climate: y.length && { value: b === F ? b + "°" : b + " - " + F + "°", groups: d((Le) => [...Le.readings.filter((Mt) => ["temperature", "humidity"].includes(vt(Mt).device_class)), ...l(Le, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [fe, me].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Le) => Le.ids.length) },
      media_players: ae.length && { value: U ? U + " playing" : "No media playing", groups: d((Le) => l(Le, /^media_player\./)) },
      maintenance: (ie.length || qt.length) && { value: [st.length && jo(st.length, "low battery", "low batteries"), xn.length && jo(xn.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: qt }, { name: "Batteries", ids: [...ot.vacuums, ...ie] }].filter((Le) => Le.ids.length) },
      energy: ot.grid && { value: Vt(Number(((Cr = v[ln]) == null ? void 0 : Cr.state) || 0) * 1e3 + Number(v[ot.grid].state)) + " now", groups: [{ name: "Energy", ids: [...oi, ot.grid] }] }
    }, Wn = [], ra = z.filter((Le) => Le.severity !== "warning" && Le.on);
    return ra.length && Wn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: jo(ra.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: ra.map((Le) => Le.entity) }] }), Rt().forEach((Le) => {
      Le.type !== "summary" ? Wn.push({ key: "path:" + Le.path, name: Le.label || Le.path, icon: Le.icon || "mdi:link-variant", colour: "", value: "" }) : !Le.hidden && dn[Le.key] && !(V.hiddenSums || []).includes(Le.key) && Wn.push({ key: Le.key, ...bl[Le.key], ...dn[Le.key] });
    }), Wn;
  }
  const Bs = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + ue(t.key) + '" data-k="sum:' + ue(t.key) + '" aria-label="' + ue(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + en(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + ue(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + ue(t.value) + "</div>" : "") + "</div></div>";
  function nr(t) {
    const a = Ga();
    V = { ...V, favourites: a.includes(t) ? a.filter((l) => l !== t) : [...a, t] }, jn(), On();
  }
  function fo(t) {
    document.querySelector("home-assistant") && (ke.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function jr(t, a) {
    if (t.startsWith("path:")) {
      fo(t.slice(5));
      return;
    }
    if (t === "security") {
      Ti("security");
      return;
    }
    xr("summary:" + t, a);
  }
  async function Pt() {
    const t = (y) => Promise.resolve().then(() => N(y)).catch(() => null), [a, l, d, m] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Qd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), T = (a == null ? void 0 : a.value) || {};
    V = { favourites: T.favourites ?? null, sources: T.sources, hiddenSums: T.hiddenSums, dash: T.dash, named: T.named }, Q = (l == null ? void 0 : l.value) || {}, oe = (d == null ? void 0 : d.value) || {}, de = Array.isArray(m == null ? void 0 : m.entities) ? m.entities : [], We = null, Object.keys(v).length && On(), go();
  }
  const ga = "HomeCore";
  async function go() {
    var d, m, T;
    const t = location.pathname.split("/")[1], a = V.named || [];
    if (!((m = (d = i()) == null ? void 0 : d.user) != null && m.is_admin) || !t || a.includes(t)) return;
    const l = () => {
      V = { ...V, named: [...a, t] }, jn();
    };
    try {
      const y = (T = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : T.find((ae) => ae.url_path === t);
      if (!y || y.mode === "yaml") return;
      if (y.title === ga) {
        l();
        return;
      }
      const b = await N({ type: "lovelace/config", url_path: t }), F = ((b == null ? void 0 : b.views) || []).flatMap((ae) => [...ae.cards || [], ...(ae.sections || []).flatMap((U) => U.cards || [])]);
      if (!F.length || !F.every((ae) => (ae == null ? void 0 : ae.type) === "custom:move-assistant-card" && ae.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: y.id, title: ga }), l();
    } catch {
    }
  }
  let bi = null, vo = 0, bo = !1;
  const Uo = (t) => {
    const a = t.split(".")[0];
    return Am.includes(a) && (a !== "binary_sensor" || xl.includes(vt(t).device_class));
  };
  async function Ta() {
    var t;
    if (!(bo || Date.now() - vo < 30 * 1e3)) {
      bo = !0, vo = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Uo), l = a.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        bi = Array.isArray(l) ? l.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        bi = null;
      }
      bo = !1, On();
    }
  }
  function La() {
    const t = /* @__PURE__ */ new Map(), a = (d) => {
      if (!v[d.entity_id] || !Uo(d.entity_id) || !rr(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const m = t.get(d.entity_id);
      (!m || d.when > m.when + 1) && t.set(d.entity_id, d);
    };
    (bi || []).forEach(a);
    const l = bi ? vo / 1e3 - 5 : 0;
    return Object.keys(v).forEach((d) => {
      var y;
      const m = v[d], T = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      T > l && a({ entity_id: d, state: m.state, when: T, context_user_id: (y = m.context) == null ? void 0 : y.user_id });
    }), [...t.values()].sort((d, m) => m.when - d.when).slice(0, Em);
  }
  function Ps(t) {
    var d;
    const a = t.context_user_id && Object.keys(v).find((m) => m.startsWith("person.") && vt(m).user_id === t.context_user_id);
    if (a) return Be(a);
    const l = (d = i()) == null ? void 0 : d.user;
    return l && t.context_user_id === l.id ? l.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function _a(t) {
    const a = t.entity_id.split(".")[0], l = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[l] || ft(l).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[l] || ft(l).toLowerCase() : a === "binary_sensor" ? l === "on" ? "opened" : "closed" : a === "climate" ? l === "off" ? "turned off" : "set to " + ft(l).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[l] || ft(l).toLowerCase() : a === "alarm_control_panel" ? (ac[l] || ft(l)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[l] || ft(l).toLowerCase() : l === "on" ? "turned on" : l === "off" ? "turned off" : ft(l).toLowerCase();
  }
  function Gr(t) {
    const a = t.entity_id, l = Be(a) + " " + _a(t), d = [Ps(t), Et(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + en(a, Cn(a)) + '></div><button class="tfName" type="button" data-more="' + ue(a) + '" aria-label="' + ue(l + ", " + d + ". More info") + '"><span class="activityRowName">' + ue(l) + '</span><span class="activityRowMeta">' + ue(d) + "</span></button></div>";
  }
  let vn = null, ar = 0;
  const Is = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function or() {
    var a;
    if (Date.now() - ar < 5 * 60 * 1e3) return;
    ar = Date.now();
    const t = [];
    try {
      const l = ((a = await N({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], d = (m) => l.filter((T) => T.type === m).flatMap((T) => m === "grid" ? (T.flow_from || []).map((y) => y.stat_energy_from) : [T.stat_energy_from]).filter(Boolean);
      for (const [m, T, y] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!y.length) continue;
        const b = await Promise.all(y.map((F) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: F, calendar: { period: "day" }, types: ["change"] })).then((ae) => Number(ae == null ? void 0 : ae.change) || 0, () => 0)));
        t.push({ key: m, name: T, id: y[0], value: b.reduce((F, ae) => F + ae, 0), unit: vt(y[0]).unit_of_measurement || (m === "gas" || m === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    vn = t, On();
  }
  let Aa = null;
  function ir() {
    var T;
    const t = vn != null && vn.length ? vn : Is.map(([y, b, F, ae]) => {
      const U = "sensor.made_up_energy_" + y;
      return v[U] = { entity_id: U, state: String(F), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: ae, state_class: "total_increasing" } }, { key: y, name: b, id: U, value: F, unit: ae };
    });
    Ce.clear(), t.some((y) => y.id === Aa) || (Aa = t[0].id);
    const a = t.map((y) => {
      const b = Number(y.value).toLocaleString(void 0, { maximumFractionDigits: y.value < 10 ? 2 : 1 }) + " " + y.unit, F = Dm[y.key], ae = y.id === Aa;
      return Ce.set(y.id, { name: y.name, text: b, icon: F }), '<div class="activityRow tap' + (ae ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + ue(y.id) + '" aria-pressed="' + ae + '" aria-label="' + ue(y.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + en("", F, y.name) + '></div><div><div class="activityRowName">' + ue(y.name) + '</div><div class="activityRowMeta">' + ue(b) + "</div></div></div>";
    }), l = t.find((y) => y.id === Aa), d = (((T = bn().opts.energy) == null ? void 0 : T.graph) || "above") === "below", m = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + ue(l.id) + '" role="img" aria-label="' + ue(l.name) + ', last 24 hours"></svg></div>';
    return H("dash:energy", 0, "Energy today", a, m, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Ur(t) {
    const a = A.querySelector(".tfDash-energy"), l = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !l || t === Aa || (Aa = t, a.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const m = d.dataset.energyPick === t;
      d.classList.toggle("picked", m), d.setAttribute("aria-pressed", String(m));
    }), l.dataset.graph = t, l.dataset.drawn = "", Qt.set("dash:energy", ir()), $a(!0));
  }
  function wi(t) {
    var m;
    if ((m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, l] = t.querySelectorAll("path");
    if (!(l != null && l.getTotalLength)) return;
    const d = l.getTotalLength();
    l.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Yo = null, wo = 0;
  const rr = (t) => !t.startsWith("light.") || Rm.includes((St.get(t) || "").toLowerCase()), xo = () => Math.max(2, Mo((A == null ? void 0 : A.clientWidth) || 0).n);
  function Ua(t) {
    if (!Yo) {
      const l = (d) => {
        var m;
        return (((m = v[d]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + ($e[d] || 0);
      };
      Yo = {
        lights: ot.rooms.flatMap((d) => d.lights).filter((d) => {
          var m;
          return rr(d) && ((m = v[d]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((d, m) => l(m) - l(d) || Be(d).localeCompare(Be(m))),
        climates: ot.rooms.flatMap((d) => d.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const a = Yo.climates.filter((l) => v[l]).slice(0, t > 3 ? 2 : 1);
    return [...Yo.lights.filter((l) => v[l]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const xi = (t, a, l, d) => (m) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + l + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + l + "</div></div>" : "") + '<div class="activityRows">' + m + "</div></section>";
  function yi(t, a) {
    var T, y;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ue(((y = (T = i()) == null ? void 0 : T.config) == null ? void 0 : y.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + xi("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: a.map((b) => ({ key: "sum:" + b.key, html: Bs(b) })) }), ho.length && t.push({ key: "areas", html: er(0) });
    const l = Go(oc * 3).filter(rr).slice(0, oc);
    l.length && t.push({ key: "favs", wrap: xi("tfDash-favs", "favs", "Favourites", !0), tiles: l.map((b) => ({ key: "fav:" + b, html: gi(b, { area: !0 }) })) });
    const d = La();
    t.push({ key: "dash:act", html: H("dash:act", 0, "Activity", d.length ? d.map(Gr) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: ir() });
    const m = xo();
    return wo = m, t.push({
      key: "dash:tiles",
      wrap: (b) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + b + "</div>",
      tiles: Ua(m >= 3 ? m : m * 2).map((b) => ({ key: b, html: Sn(b, !1, b.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), Ta(), or(), t;
  }
  const Ea = 252, Wt = 16, Zo = 230, yo = 60, hn = yo + Wt, ta = 5, Hs = 3, Fs = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, ko = ["wx", "favs", "act", "energy", "avg"], Ko = { wx: ta, areas: ta, favs: ta, act: ta, energy: 4, avg: 4 }, ki = 3, sr = 94, $o = /* @__PURE__ */ new Set(), Xo = (t) => Fs[t] || Be(t), lr = 409, Mi = 128;
  let Tn = !1, tn = null, It = null, Ya = !1, na = /* @__PURE__ */ new Map(), dr = 0, Za = 0;
  const Ci = ["title", "sums"], Mo = (t) => {
    let a = Math.floor((t + Wt) / (Ea + Wt)), l = Ea;
    return a < 4 && t >= 4 * Zo + 3 * Wt && (a = 4, l = Math.floor((t - 3 * Wt) / 4)), { n: Math.max(1, a), w: l };
  }, bn = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} });
  function cr(t) {
    V = { ...V, dash: t }, jn();
  }
  function Da() {
    const t = (a) => A.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", an.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", an.avg, 2],
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, l, d, m = !1]) => ({ key: a, el: l, span: d, tile: m }));
  }
  const Si = (t, a, l) => t.span === "full" ? a : t.span === "areas" ? Math.min(a, Math.ceil((lr + Math.max(0, ho.length - 1) * (Mi + Wt) + Wt) / (l + Wt))) : Math.min(a, bn().spans[t.key] ?? t.span), aa = (t) => Ko[t.key] ?? (t.el.classList.contains("tfDac") ? $o.has(t.key) ? ta : ki : null);
  function Co(t, a, l = null) {
    const d = bn().cells, m = t.every((b) => !d[b.key] || d[b.key].col + b.cols <= a), T = (b) => d[b.key] || { row: 1e9, col: 0 }, y = () => {
      const b = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map(), ae = (fe, me, ie, st) => {
        for (let qt = me; qt < me + st; qt++) for (let xn = fe; xn < fe + ie; xn++) if (b.has(xn + "," + qt)) return !1;
        return !0;
      }, U = (fe, me, ie) => {
        for (let st = ie; st < ie + fe.rows; st++) for (let qt = me; qt < me + fe.cols; qt++) b.add(qt + "," + st);
        F.set(fe.key, { col: me, row: ie, cols: fe.cols, rows: fe.rows });
      }, z = (fe, me, ie) => {
        for (me = Math.max(0, Math.min(a - fe.cols, me)), ie = Math.max(0, ie); !ae(me, ie, fe.cols, fe.rows); ) ie++;
        U(fe, me, ie);
      }, pe = (fe) => {
        for (let me = 0; ; me++) for (let ie = 0; ie <= a - fe.cols; ie++) if (ae(ie, me, fe.cols, fe.rows)) {
          U(fe, ie, me);
          return;
        }
      };
      l && z(l, tn.col, tn.row);
      const qe = t.filter((fe) => fe !== l), Ie = (fe, me) => T(fe).row - T(me).row || T(fe).col - T(me).col;
      return m ? (qe.filter((fe) => d[fe.key]).sort(Ie).forEach((fe) => z(fe, d[fe.key].col, d[fe.key].row)), qe.filter((fe) => !d[fe.key]).forEach(pe), F) : ([...qe].sort(Ie).forEach(pe), F);
    };
    for (let b = 0; ; b++) {
      const F = y();
      if (b === 3) return F;
      const ae = t.filter((z) => z.tile && !$o.has(z.key)).map((z) => ({ it: z, p: F.get(z.key) })).sort((z, pe) => z.p.row - pe.p.row || z.p.col - pe.p.col);
      let U = !1;
      for (let z = 0, pe; z < ae.length; z = pe) {
        for (pe = z + 1; pe < ae.length && ae[pe].p.row === ae[z].p.row && ae[pe].p.col === ae[pe - 1].p.col + 1; pe++) ;
        const qe = ae.slice(z, pe), Ie = Math.max(...qe.map((fe) => fe.it.rows));
        qe.forEach((fe) => {
          fe.it.rows < Ie && (fe.it.rows = Ie, U = !0);
        });
      }
      if (!U) return F;
    }
  }
  function ur() {
    const t = bn(), a = new Set(t.hidden), l = Da().filter((T) => !Ci.includes(T.key));
    let d = na;
    if (!d.size) {
      const T = t.pegs || 4, y = l.filter((b) => !a.has(b.key));
      y.forEach((b) => {
        b.cols = Si(b, T, Ea), b.rows = aa(b) ?? 2;
      }), d = Co(y, T);
    }
    const m = (T) => !a.has(T.key) && d.get(T.key) || { row: 1e9, col: 0 };
    l.sort((T, y) => m(T).row - m(y).row || m(T).col - m(y).col).forEach((T, y) => T.el.style.setProperty("--o", String(3 + y)));
  }
  const pr = (t, a) => cr({ ...t, cells: a, pegs: Mo(A.clientWidth).n });
  function Fn() {
    var me;
    if (!w || !A) return;
    const t = A.clientWidth, { n: a, w: l } = Mo(t), d = h.classList.contains("tfDash") && a >= 2;
    h.classList.toggle("tfBoard", d), h.classList.toggle("tfEditing", d && Tn);
    const m = u("dashEditNav");
    m && (m.hidden = !d, m.classList.toggle("active", Tn), m.setAttribute("aria-pressed", String(Tn)), m.setAttribute("aria-label", Tn ? "Done editing" : "Edit the dashboard"), m.title = Tn ? "Done" : "Edit", m.innerHTML = Tn ? Sm : nc);
    const T = d ? Da() : [];
    if (!d) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((ie) => {
        ie.classList.remove("tfBoardItem", "tfBoardHidden"), ie.style.left = ie.style.top = ie.style.width = ie.style.height = "";
      }), (me = A.querySelector(".tfDash-act > .activityRows")) == null || me.style.removeProperty("max-height"), Ra(!1), h.classList.contains("tfDash") && ur();
      return;
    }
    A.style.setProperty("--peg-w", l + "px");
    const y = new Set(bn().hidden), b = l + Wt;
    T.forEach((ie) => ie.el.classList.toggle("tfBoardHidden", y.has(ie.key)));
    const F = T.filter((ie) => !y.has(ie.key) && getComputedStyle(ie.el).display !== "none");
    let ae = 0;
    F.filter((ie) => Ci.includes(ie.key)).forEach((ie) => {
      ie.el.classList.add("tfBoardItem"), Object.assign(ie.el.style, { width: t + "px", height: "", left: "0px", top: ae + "px" });
      const st = ie.key === "sums" && ie.el.querySelector(".tfDash-bar"), qt = st ? st.querySelectorAll(".activityRow").length : 0;
      st && (st.style.maxWidth = "none");
      for (let xn = 1; st && xn <= qt && (st.style.setProperty("--bar-cols", String(Math.ceil(qt / xn))), !(st.offsetWidth <= t)); xn++)
        ;
      st && (st.style.maxWidth = ""), ae += ie.el.offsetHeight + Wt;
    }), Za = ae;
    const U = F.filter((ie) => !Ci.includes(ie.key));
    U.forEach((ie) => {
      ie.cols = Si(ie, a, l), ie.el.classList.add("tfBoardItem"), ie.el.style.width = (ie.cols === a ? t : ie.cols * l + (ie.cols - 1) * Wt) + "px", ie.el.style.height = "", ie.rows = aa(ie) ?? Math.max(1, Math.ceil((ie.el.offsetHeight + Wt - 6) / hn));
    });
    const z = tn && U.find((ie) => ie.key === tn.key), pe = Co(U, a, z);
    pe.forEach((ie) => Object.assign(ie, { x: ie.cols === a ? 0 : ie.col * b, y: Za + ie.row * hn, w: ie.cols === a ? t : ie.cols * l + (ie.cols - 1) * Wt, h: ie.rows * hn - Wt })), U.forEach((ie) => {
      const st = pe.get(ie.key);
      ie.el.style.height = st.h + "px", ie.el.classList.contains("tfDac") && ie.el.style.setProperty("--tf-dac-pad", st.h - sr + "px"), ie !== z && (ie.el.style.left = st.x + "px", ie.el.style.top = st.y + "px");
    }), na = pe;
    const qe = pe.get("act"), Ie = qe && A.querySelector(".tfDash-act > .activityRows");
    Ie && (Ie.style.maxHeight = Math.max(yo, Math.floor((qe.h - Ie.offsetTop - 10) / yo) * yo) + "px"), dr = Math.max(0, ...[...pe.values()].map((ie) => ie.row + ie.rows));
    let fe = Za + dr * hn - Wt;
    fe = Ra(Tn, U, pe, fe, a, l), A.style.height = fe + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), T.forEach((ie) => mr.observe(ie.el)), $a();
  }
  const Jo = () => {
    Ya || (Ya = !0, requestAnimationFrame(() => {
      Ya = !1, Fn();
    }));
  }, mr = new ResizeObserver(() => {
    tn || Jo();
  });
  function Ra(t, a = [], l = /* @__PURE__ */ new Map(), d = 0, m = 1, T = Ea) {
    A.querySelectorAll(".tfEditChips").forEach((z) => {
      (!t || !z.closest(".tfBoardItem")) && z.remove();
    }), A.querySelectorAll(".tfBoardItem").forEach((z) => [...z.children].forEach((pe) => {
      pe.classList.contains("tfEditChips") || pe.toggleAttribute("inert", t);
    }));
    let y = A.querySelector(".tfBoardCells"), b = A.querySelector(".tfBoardLand"), F = A.querySelector(".tfBoardTray");
    if (!t)
      return y == null || y.remove(), b == null || b.remove(), F == null || F.remove(), Zn(), d;
    const ae = dr + Hs;
    if (y || (y = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), y.setAttribute("aria-hidden", "true"), A.prepend(y)), y.style.top = Za + "px", y.dataset.size !== m + "x" + ae + "x" + T && (y.dataset.size = m + "x" + ae + "x" + T, y.style.gridTemplateColumns = "repeat(" + m + "," + T + "px)", y.innerHTML = "<i></i>".repeat(m * ae)), d = Math.max(d, Za + ae * hn - Wt), a.forEach((z) => {
      const pe = z.el;
      !pe || pe.querySelector(":scope > .tfEditChips") || pe.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + km + '</span><button class="tfEditChip" type="button" data-board-more="' + ue(z.key) + '" aria-label="' + ue(Xo(z.key)) + ' options" aria-haspopup="menu">' + Mm + "</button></div>");
    }), tn && l.has(tn.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(b));
      const z = l.get(tn.key);
      Object.assign(b.style, { left: z.x + "px", top: z.y + "px", width: z.w + "px", height: z.h + "px" });
    } else b == null || b.remove();
    const U = bn().hidden.filter((z) => Da().some((pe) => pe.key === z));
    return U.length ? (F || (F = Object.assign(document.createElement("div"), { className: "tfBoardTray" }), A.appendChild(F)), F.innerHTML = U.map((z) => '<button class="pill" type="button" data-board-show="' + ue(z) + '">Show ' + ue(Xo(z)) + "</button>").join(""), Object.assign(F.style, { top: d + Wt + "px", left: "0px", width: A.clientWidth + "px" }), d + Wt + F.offsetHeight) : (F == null || F.remove(), d);
  }
  function Yr(t) {
    Tn = t, t || (tn = null, Zn()), Fn();
  }
  function Zr(t, a) {
    var U, z;
    Zn();
    const l = na.get(t), { n: d } = Mo(A.clientWidth), m = bn(), T = m.spans[t] ?? 2;
    if (!l) return;
    const y = l.cols >= d, b = (pe, qe, Ie) => '<button type="button" role="menuitem" data-board-act="' + pe + '"' + (Ie ? " disabled" : "") + ">" + qe + "</button>", F = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    F.setAttribute("role", "menu"), F.setAttribute("aria-label", Xo(t) + " options"), F.innerHTML = (ko.includes(t) ? b("size", T === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? b("graph", (((U = m.opts.energy) == null ? void 0 : U.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", y || l.col === 0) + b("right", "Move right", y || l.col + l.cols >= d) + b("up", "Move up", l.row <= 0) + b("down", "Move down") + b("hide", "Hide"), A.appendChild(F);
    const ae = Math.min(l.x + l.w - F.offsetWidth, A.clientWidth - F.offsetWidth);
    Object.assign(F.style, { left: Math.max(0, ae) + "px", top: l.y + 28 + "px" }), It = { key: t, menu: F, opener: a }, (z = F.querySelector("button:not([disabled])")) == null || z.focus();
  }
  function Zn(t) {
    if (!It) return;
    const { menu: a, opener: l } = It;
    It = null, a.remove(), t && (l == null || l.focus());
  }
  const Ka = () => Object.fromEntries([...na].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function So(t, a) {
    var T, y;
    const l = bn(), d = Ka(), m = d[t] || { col: 0, row: 0 };
    a === "size" && (l.spans = { ...l.spans, [t]: (l.spans[t] ?? 2) === 1 ? 2 : 1 }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((T = l.opts.energy) == null ? void 0 : T.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (d[t] = { ...m, col: m.col - 1 }), a === "right" && (d[t] = { ...m, col: m.col + 1 }), a === "up" && (d[t] = { ...m, row: m.row - 1 }), a === "down" && (d[t] = { ...m, row: m.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (tn = { key: t, col: d[t].col, row: d[t].row }), pr(l, d), tn && (Fn(), tn = null, pr(bn(), Ka())), Zn(), a === "graph" && (Qt.delete("dash:energy"), On()), Fn(), a !== "hide" && ((y = A.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus());
  }
  function va(t) {
    const a = bn();
    cr({ ...a, hidden: a.hidden.filter((l) => l !== t) }), Fn();
  }
  function To(t) {
    if (!Tn || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfBoardTray")) return;
    const a = t.target.closest(".tfBoardItem"), l = a && Da().find((z) => z.el === a);
    if (!l || Ci.includes(l.key)) return;
    const d = na.get(l.key), { w: m } = Mo(A.clientWidth);
    if (!d) return;
    t.preventDefault(), Zn();
    const T = t.clientX, y = t.clientY;
    let b = !1, F = 0;
    const ae = (z) => {
      const pe = z.clientX - T, qe = z.clientY - y;
      if (!b) {
        if (Math.hypot(pe, qe) < 4) return;
        b = !0, tn = { key: l.key, col: d.col, row: d.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + pe + "px," + qe + "px)", tn.col = Math.round((d.x + pe) / (m + Wt)), tn.row = Math.round((d.y + qe - Za) / hn), F || (F = requestAnimationFrame(() => {
        F = 0, Fn();
      }));
    }, U = () => {
      window.removeEventListener("pointermove", ae), window.removeEventListener("pointerup", U), window.removeEventListener("pointercancel", U), b && (cancelAnimationFrame(F), Fn(), a.classList.remove("tfDragging"), a.style.transform = "", tn = null, pr(bn(), Ka()), Fn(), On());
    };
    window.addEventListener("pointermove", ae), window.addEventListener("pointerup", U), window.addEventListener("pointercancel", U);
  }
  function $a(t = !1) {
    const a = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const l = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight;
    a.dataset.drawn !== l && (a.dataset.drawn = l, ti(a.dataset.graph, a).then(() => {
      t && wi(a);
    }));
  }
  function Lo() {
    var b, F, ae;
    ot = ci.model(i()), v = ot.states, v[(b = V.sources) == null ? void 0 : b.grid] && (ot.grid = V.sources.grid), v[(F = V.sources) == null ? void 0 : F.alarm] && (ot.security.alarms = [V.sources.alarm]), M.forEach((U, z) => {
      const pe = v[z], qe = (pe == null ? void 0 : pe.attributes) || {};
      if (!pe || Date.now() - U.at > 2 * 60 * 1e3) {
        M.delete(z);
        return;
      }
      U.pos != null && pe.state !== "opening" && pe.state !== "closing" && Math.abs(Lt(z) - U.pos) < 1 && delete U.pos, U.tilt != null && Math.abs((qe.current_tilt_position ?? -1) - U.tilt) < 1 && delete U.tilt, U.pos == null && U.tilt == null && M.delete(z);
    });
    const t = [];
    let a = 0;
    const l = ja();
    ho = l.filter((U) => U.room).map((U) => U.room), ho.some((U) => U.id === ge) || (ge = ((ae = ho[0]) == null ? void 0 : ae.id) || null);
    const d = Se === "weather" ? { key: "weather", name: "Weather" } : Se && l.find((U) => U.key === Se);
    if (d || (Se = null), h.classList.toggle("tfAreaOpen", !!d), h.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), h.classList.toggle("tfDash", !d), St = /* @__PURE__ */ new Map(), ot.rooms.forEach((U) => [...U.actions, ...U.plugs, ...U.readings, ...U.openings, ...U.solar, ...U.plants.flatMap((z) => [z.id, ...z.readings])].forEach((z) => St.set(z, U.name))), !d) return yi(t, zr());
    if (t.push({ key: "areahead", html: _o(d, ++a) }), d.key === "weather")
      return t.weather = ++a, t;
    const m = d.ids, T = d.room ? d.room.id : d.key, y = d.room;
    return y != null && y.solar.length && t.push({ key: "energy:" + y.id, html: be(y, ++a) }), y && (y.readings.length || y.plugs.length || y.power != null) && t.push({ key: "readings:" + y.id, html: ce(y, ++a) }), y == null || y.plants.forEach((U) => t.push({ key: "plant:" + U.id, html: he(U, ++a) })), m.length && t.push({ key: "block:" + T, order: ++a, tiles: m.map((U) => ({ key: U, html: Sn(U) })) }), d.key === "security" && t.push({ key: "openings", html: xe(++a) }), t;
  }
  const _o = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + dm + '</button><div class="settingsTitle">' + ue(t.name) + "</div></div>";
  let ba = 0;
  function Ti(t) {
    var a;
    Se || (ba = xa().scrollTop), Se = t, t.startsWith("room:") && (ge = t.slice(5)), Ln(), xa().scrollTop = 0, (a = A.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  function hr() {
    var m;
    const t = Se;
    Se = null, Ln();
    const a = xa(), l = ba;
    a.scrollTop = l, requestAnimationFrame(() => {
      a.scrollTop = l;
    });
    const d = t.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? an.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (m = (d == null ? void 0 : d.querySelector("[data-go]")) || d) == null || m.focus({ preventScroll: !0 });
  }
  const Li = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + ue(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", wa = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((l) => l.key).join(",") + ")" : "")).join(";");
  function xa() {
    for (let t = h.parentElement || h.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Na(t) {
    const a = xa(), l = (b) => {
      const F = b.getBoundingClientRect();
      return F.height && F.bottom > 0 && F.top < window.innerHeight;
    }, d = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && l(b)), m = d == null ? void 0 : d.dataset.k, T = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const y = d != null && d.isConnected ? d : m && A.querySelector('[data-k="' + CSS.escape(m) + '"]');
    y != null && y.isConnected && T != null && (a.scrollTop += y.getBoundingClientRect().top - T);
  }
  function Ln() {
    if (!w || !A) return;
    const t = Lo();
    A.querySelectorAll("[data-tf]").forEach((l) => l.remove()), Qt.clear();
    const a = document.createElement("div");
    a.innerHTML = t.map((l) => l.tiles ? Li(l) : l.html).join(""), t.forEach((l) => l.tiles ? l.tiles.forEach((d) => Qt.set(d.key, d.html)) : Qt.set(l.key, l.html)), pn = wa(t), A.append(...a.children), ui(t.weather), pi(), mr.disconnect(), Fn(), Mn(A), Qo(A), _t(A), j(), W && ti(W.id), Do(), Eo(), wr(), requestAnimationFrame(O);
  }
  const Kr = (t) => {
    var l;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (l = a.dataset) == null ? void 0 : l.act };
  }, _i = (t, a) => {
    var l;
    a && ((l = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || l.focus({ preventScroll: !0 }));
  };
  function $r(t, a) {
    const l = document.createElement("div");
    l.innerHTML = a;
    const d = l.firstElementChild, m = Kr(t);
    t.replaceWith(d), Mn(d), Qo(d), _t(d), _i(d, m);
  }
  function On() {
    !w || !A || tn || Na(Ai);
  }
  function Ai() {
    if (!A.querySelector("[data-tf]")) {
      Ln();
      return;
    }
    const t = Lo();
    if (wa(t) !== pn) {
      Ln();
      return;
    }
    const a = (l) => [...Oe.keys()].some((d) => {
      const m = d.slice(d.indexOf("|") + 1);
      return l === m || l.endsWith(":" + m);
    });
    t.forEach((l) => (l.tiles || [l]).forEach((d) => {
      if (Qt.get(d.key) === d.html || a(d.key)) return;
      const m = A.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (m) {
        if (Qt.set(d.key, d.html), W && W.key === d.key && m.querySelector(".tfOpen")) {
          m.querySelector(".tfOpen .activityRowMeta").textContent = D(W.id);
          return;
        }
        $r(m, d.html), W && W.key === d.key && ti(W.id), d.key.startsWith("energy:") && Do();
      }
    })), Eo(), wr(), mi(), j(), ze == null || ze.update(), Xe == null || Xe.forEach((l) => l.update()), h.classList.contains("tfDash") && Jo(), requestAnimationFrame(O);
  }
  const Xa = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && ft(t.color_mode)]],
    climate: (t) => [["Current temperature", Pe(t.current_temperature) + " °C"], ["Target", Pe(t.temperature) + " °C"], ["Action", ft(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", ft(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", ft(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Pe(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : ft(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, ya = (t) => {
    var l;
    const a = (((l = Xa[t.split(".")[0]]) == null ? void 0 : l.call(Xa, vt(t))) || []).filter(([, d]) => d != null && d !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([d, m]) => '<div class="tfMoreRow"><span>' + ue(d) + "</span><span>" + ue(m) + "</span></div>").join("") + "</div>" : "";
  }, fr = (t) => Gi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function gr(t, a = {}, l = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ue(d.name) + '</div><div class="tfMoreTiles' + (l ? " single" : "") + '">' + d.ids.map((m) => gi(m, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const dt = document.createElement("div");
  dt.className = "tfMoreBackdrop", dt.hidden = !0, h.appendChild(dt);
  const Ja = (t, a) => {
    for (let l = t; l && l !== dt; l = l.parentElement) {
      const d = getComputedStyle(l).overflowY;
      if ((d === "auto" || d === "scroll") && l.scrollHeight > l.clientHeight + 1 && (a < 0 ? l.scrollTop > 0 : l.scrollTop + l.clientHeight < l.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Qa = null;
  dt.addEventListener("touchstart", (t) => {
    Qa = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), dt.addEventListener("touchmove", (t) => {
    var m, T;
    if (!Qa || t.touches.length > 1 || (T = (m = t.target).closest) != null && T.call(m, "input,textarea,select")) return;
    const a = t.touches[0], l = Qa.x - a.clientX, d = Qa.y - a.clientY;
    Qa = { x: a.clientX, y: a.clientY }, Math.abs(d) >= Math.abs(l) && !Ja(t.target, d) && t.preventDefault();
  }, { passive: !1 }), dt.addEventListener("wheel", (t) => {
    Ja(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function vr() {
    const t = dt.querySelector(".tfMorePair"), a = dt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", vr, { passive: !0 }), w && kt();
  let Ba = [];
  const Xr = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Ei(t) {
    const a = (b, F = "") => '<div class="tfMoreHead">' + (g != null && g.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + vl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + ue(b) + "</div>" + F + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + cm + "</button></div>", l = (b, F) => '<div class="tfMoreNow"><div class="tfMoreState">' + ue(b) + "</div>" + (F ? '<div class="tfMoreSub">' + ue(F) + "</div>" : "") + "</div>", d = gr;
    if (t === "favourites") {
      const b = Ga(), F = new Set(b), ae = [{ name: "Starred", ids: b }, { name: "Home", ids: ot.homeVacuums }, { name: "Security", ids: [...ot.security.alarms, ...ot.security.locks] }, ...ot.rooms.map((U) => ({ name: U.name, ids: [...U.actions, ...U.plugs] }))].map((U, z) => z ? { ...U, ids: U.ids.filter((pe) => !F.has(pe)) } : U).filter((U) => U.ids.length);
      return [a("Favourites"), l(b.length ? b.length + " starred" : "None starred"), d(ae, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const b = zr().find((z) => z.key === t.slice(8));
      if (!b) return null;
      const F = b.key === "light" ? (b.groups || []).flatMap((z) => z.ids) : [], ae = F.some((z) => {
        var pe;
        return ((pe = v[z]) == null ? void 0 : pe.state) === "on";
      }), U = F.length ? '<button class="primary" type="button" data-acts="' + uo(F.map((z) => ["light", ae ? "turn_off" : "turn_on", z])) + '">' + (ae ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(b.name), '<div class="tfMoreNowRow">' + l(b.value) + U + "</div>", ...(b.groups || []).map((z) => {
        const pe = z.ids.filter((Ie) => Ms.includes(Ie.split(".")[0])), qe = z.ids.filter((Ie) => !pe.includes(Ie));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ue(z.name) + "</div>" + (pe.length ? '<div class="tfMoreActions">' + pe.map((Ie) => Sn(Ie, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((Ie) => gi(Ie, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, b, F] = t.split(":"), ae = ot.rooms.find((fe) => fe.id === b), U = ae && Ji(ae).find((fe) => fe.key === F);
      if (!U) return null;
      const z = zo(ae, F), pe = z.filter((fe) => Ms.includes(fe.split(".")[0])), qe = z.filter((fe) => !pe.includes(fe)), Ie = U.acts ? '<button class="primary" type="button" data-acts="' + uo(U.acts) + '">' + (U.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(ae.name + " " + U.label.toLowerCase()), '<div class="tfMoreNowRow">' + l(U.value) + Ie + "</div>", '<div class="tfMoreGroup">' + (pe.length ? '<div class="tfMoreActions">' + pe.map((fe) => Sn(fe, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((fe) => gi(fe, {})).join("") + "</div>" : "") + "</div>"];
    }
    const m = t.split(".")[0], T = v[t], y = Ms.includes(m) ? qo(t) : { sections: [] };
    return [
      a(Be(t)),
      l(Dt(t), T.last_changed && za(Date.parse(T.last_changed))),
      m === "cover" && '<div data-cover-art="' + ue(t) + '"></div>',
      ...y.sections.filter(Boolean),
      wn(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(g != null && g.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Cm + "</button>"
    ].filter(Boolean);
  }
  const wn = (t) => Xr(t) ? "" : ya(t) + fr(t);
  let fn = "";
  function br(t) {
    var a;
    g && (g.details = t, Eo(), (a = dt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Di = (t) => {
    const a = v[t], l = Lt(t), d = Bn(t);
    return { kind: gl(a), name: Be(t), text: Dt(t), pos: l, target: Math.abs(d - l) > 0.5 ? d : null, moving: a.state === "opening" || a.state === "closing", tilt: co(t) ?? 100, canSet: rt(t, Jd) };
  };
  function Qo(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const l = a.dataset.coverArt, d = a.dataset.artKey || "more:" + l;
      let m = E.get(d);
      m || (m = lm({ onMove: (T) => ni(l, T), onSet: (T) => {
        ni(l, T), ai("pos", l);
      } }), m.coverId = l, E.set(d, m)), a.replaceWith(m.el), m.update(Di(l));
    });
  }
  const Ri = (t) => [...E.values()].filter((a) => a.coverId === t), Ao = () => E.forEach((t) => {
    v[t.coverId] && t.update(Di(t.coverId));
  }), wr = () => {
    E.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), E.delete(a));
    }), Ao();
  };
  function Eo() {
    var T, y;
    if (!g || !(Xr(g.id) || v[g.id])) {
      dt.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((b) => b.endsWith("|" + g.id))) {
      Ao();
      return;
    }
    const t = Ei(g.id), a = dt.querySelector(".tfMore");
    if (!t) {
      ei();
      return;
    }
    const l = Kr(dt), d = wn(g.id), m = g.id.startsWith("summary:") || g.id.startsWith("group:");
    if (dt.hidden || !a || t.length !== Ba.length || a.classList.contains("wide") !== m) {
      const b = !dt.hidden && a ? a.scrollTop : 0;
      dt.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (m ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + vl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", fn = d, dt.hidden = !1, vr(), Qo(dt), _t(dt), Mn(dt), b && (dt.querySelector(".tfMore").scrollTop = b), _i(dt, l), dt.contains(n.activeElement) || (T = dt.querySelector("[data-more-close]")) == null || T.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((b, F) => {
        var z, pe;
        if (b === Ba[F] || b.includes("data-cover-art") || a.children[F].contains((pe = (z = n.activeElement) == null ? void 0 : z.matches) != null && pe.call(z, "input,select") ? n.activeElement : null) || [...Oe.keys()].some((qe) => a.children[F].querySelector('[data-drag="' + CSS.escape(qe) + '"]'))) return;
        const ae = document.createElement("div");
        ae.innerHTML = b;
        const U = ae.firstElementChild;
        a.children[F].replaceWith(U), Mn(U), _t(U);
      }), d !== fn) {
        const b = dt.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), fn = d;
      }
      dt.contains(n.activeElement) || _i(dt, l);
    }
    (y = dt.querySelector(".tfMorePair")) == null || y.classList.toggle("details", !!(g.details && d)), Ba = t, Ao();
  }
  setInterval(() => {
    g && Eo();
  }, 15 * 1e3);
  function xr(t, a) {
    const l = !!(g && a && dt.contains(a));
    g = { id: t, opener: l ? g.opener : a, back: l ? g : null }, Jr();
  }
  function Jr() {
    Ba = [], dt.hidden = !0, E.forEach((t, a) => {
      a !== g.id && dt.contains(t.el) && (t.destroy(), E.delete(a));
    }), Eo();
  }
  function ei() {
    var l, d, m, T, y, b;
    const t = g == null ? void 0 : g.opener;
    g = null, E.forEach((F, ae) => {
      dt.contains(F.el) && (F.destroy(), E.delete(ae));
    }), rn.forEach((F, ae) => {
      ae.startsWith("more:") && rn.delete(ae);
    }), dt.hidden = !0, dt.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (d = A.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(a) : (m = t == null ? void 0 : t.dataset) != null && m.summary ? (T = A.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || T.focus(a) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((b = A.querySelector("[data-favs-edit]")) == null || b.focus(a));
  }
  function Pa(t, a, l, d = {}) {
    const m = a.map((me) => me[1]), T = d.zero ? 0 : Math.min(...m), y = Math.max(...m), b = Math.max(120, t.clientWidth || 260), F = Math.max(60, t.clientHeight || 130), ae = 8, U = F - 20, z = Date.now() - 24 * 3600 * 1e3, pe = 24 * 3600 * 1e3, qe = (me) => Math.max(0, Math.min(b, (me - z) / pe * b)), Ie = (me) => y === T ? (ae + U) / 2 : U - (me - T) / (y - T) * (U - ae);
    let fe = "M" + qe(a[0][0]).toFixed(1) + " " + Ie(a[0][1]).toFixed(1);
    for (let me = 1; me < a.length; me++) fe += d.smooth ? "L" + qe(a[me][0]).toFixed(1) + " " + Ie(a[me][1]).toFixed(1) : "H" + qe(a[me][0]).toFixed(1) + "V" + Ie(a[me][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + b + " " + F), t.setAttribute("aria-label", l), t.innerHTML = '<path d="' + fe + "V" + U + "H" + qe(a[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + fe + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (F - 4) + '">24 h ago</text><text x="' + b + '" y="' + (F - 4) + '" text-anchor="end">Now</text>';
  }
  function oa(t) {
    var d;
    const a = Number((d = v[t]) == null ? void 0 : d.state), l = Date.now();
    if (vt(t).state_class === "total_increasing") {
      const m = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), T = Math.max(1, l - m);
      return [...Array(49)].map((y, b) => m + T * b / 48).map((y) => [y, Math.round(a * Math.pow((y - m) / T, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((m, T) => [l - (48 - T) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(T / 6)) * 10) / 10]);
  }
  async function ti(t, a) {
    var qe, Ie;
    let l = ke.get(t);
    if (t.endsWith("_solar_power")) l = { at: Date.now(), points: Sd() };
    else if (Gi(t)) l = { at: Date.now(), points: oa(t) };
    else if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const fe = new Date(Date.now() - 864e5).toISOString(), me = await N({ type: "history/history_during_period", start_time: fe, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ie = ((me == null ? void 0 : me[t]) || []).map((st) => [st.lu != null ? st.lu * 1e3 : Date.parse(st.last_updated || st.last_changed), Number(st.s ?? st.state)]).filter(([st, qt]) => Number.isFinite(st) && Number.isFinite(qt));
        l = { at: Date.now(), points: ie };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      ke.set(t, l);
    }
    const d = a || A.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const m = v[t], T = ((qe = m == null ? void 0 : m.attributes) == null ? void 0 : qe.unit_of_measurement) || "", y = l.points.slice(), b = Number(m == null ? void 0 : m.state);
    if (Number.isFinite(b) && !t.endsWith("_solar_power") && y.push([Date.now(), b]), y.length < 2) {
      d.setAttribute("aria-label", Be(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const F = y.map((fe) => fe[1]), ae = Math.min(...F), U = Math.max(...F), z = (fe) => fe.toLocaleString(void 0, { maximumFractionDigits: Math.abs(fe) >= 100 ? 0 : 1 }), pe = ((Ie = m == null ? void 0 : m.attributes) == null ? void 0 : Ie.state_class) === "total_increasing";
    Pa(d, y, Be(t) + ", last 24 hours: " + (pe ? "+" + z(F[F.length - 1] - F[0]) : ae === U ? z(ae) : z(ae) + " to " + z(U)) + (T ? " " + T : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Do() {
    const t = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!t) return;
    const a = Sd();
    Pa(t, a, "Solar, last 24 hours: up to " + Pe(Math.max(...a.map((l) => l[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Os(t, a) {
    const l = a.entity_id, d = M.get(l) || {}, m = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Lt(l) > 0 ? 0 : 100 }[t], T = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    m != null && (d.pos = m), T != null && (d.tilt = T), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), M.set(l, d);
  }
  function yr(t, a, l) {
    var m;
    const d = l == null ? void 0 : l.entity_id;
    return t !== "light" || typeof d != "string" || !Fe[d] || !on(d) || l.brightness_pct != null || l.brightness != null ? [a, l] : a !== "turn_on" && !(a === "toggle" && ((m = v[d]) == null ? void 0 : m.state) !== "on") ? [a, l] : ["turn_on", { ...l, brightness_pct: Fe[d] }];
  }
  function Ni(t, a, l, d) {
    let m = { entity_id: l, ...d || {} };
    return [a, m] = yr(t, a, m), t === "cover" && Os(a, m), $e[l] = ($e[l] || 0) + 1, Ho.set(ec, JSON.stringify($e)), ci.call(t, a, m) ? Promise.resolve() : Promise.resolve(re(t, a, m));
  }
  function Bi(t) {
    const [a, l, d, m] = t.split("|");
    Ni(a, l, d, m ? JSON.parse(m) : null).catch(() => {
    });
  }
  function ni(t, a) {
    Oe.set("pos|" + t, a), Qt.delete(t), Ba = Ba.map(() => ""), [A, dt].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((m) => Tt(m, a)));
    const l = A.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (l && (l.textContent = Math.round(a) + "%"), (g == null ? void 0 : g.id) === t) {
      const d = dt.querySelector(".tfMoreState"), m = dt.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(a) + "%", d.classList.add("live")), m && (m.textContent = "Currently " + Lt(t) + "%");
    }
    Ri(t).forEach((d) => d.update(Di(t)));
  }
  const kr = (t, a) => {
    const l = t.shiftKey ? 10 : 1, d = { ArrowUp: a + l, ArrowRight: a + l, ArrowDown: a - l, ArrowLeft: a - l, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function ka(t, a) {
    var fe;
    const l = t.dataset.blocks;
    (fe = t.setPointerCapture) == null || fe.call(t, a.pointerId);
    const d = (me) => {
      const ie = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (me.clientX - ie.left) / ie.width * 100));
    }, m = d(a), T = a.clientX;
    let y = !1, b = Bn(l), F = m, ae = 0;
    const U = () => {
      b = Math.abs(F - b) < 0.2 ? F : b + (F - b) * 0.14, ni(l, b), ae = requestAnimationFrame(U);
    }, z = () => {
      y || (y = !0, t.classList.add("fine"), ae = requestAnimationFrame(U));
    }, pe = setTimeout(z, 350), qe = (me) => {
      F = d(me), Math.abs(me.clientX - T) > 6 && (clearTimeout(pe), z());
    }, Ie = () => {
      clearTimeout(pe), cancelAnimationFrame(ae), t.removeEventListener("pointermove", qe), t.removeEventListener("pointerup", Ie), t.removeEventListener("pointercancel", Ie), t.classList.remove("fine"), ni(l, y ? Math.round(b) : (Math.min(3, Math.floor(m / 25)) + 1) * 25), ai("pos", l);
    };
    t.addEventListener("pointermove", qe), t.addEventListener("pointerup", Ie), t.addEventListener("pointercancel", Ie);
  }
  function Qr(t) {
    var m;
    const [a, l] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    W = { key: a, id: l, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, Qt.delete(a), On(), (m = A.querySelector(".tfOpen [data-close]")) == null || m.focus({ preventScroll: !0 });
  }
  function es(t) {
    var a;
    ge = t.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((l) => {
      var m;
      const d = l === t;
      l.classList.toggle("active", d), l.setAttribute("aria-expanded", String(d)), (m = l.querySelector(".panelExpanded")) == null || m.toggleAttribute("inert", !d);
    }), Qt.set("areas", er(((a = A.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Pi = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [l, d] = mn(t);
      return Math.round(l + a * (d - l));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var l;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((l = vt(t).hs_color) == null ? void 0 : l[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function ia(t, a, l, d) {
    var F;
    const m = Pi[a].value(l, d);
    Oe.set(a + "|" + l, m);
    const T = Math.round(d * 100) + "%", y = t.querySelector("i");
    if (a === "tilt") {
      y.style.width = "calc((100% - 6px) * " + d + ")";
      const [ae, U] = t.querySelectorAll("span");
      ae.classList.toggle("lit", d > 0.08), U.classList.toggle("lit", d > 0.92), Qt.delete(l), Ba = Ba.map(() => ""), Ri(l).forEach((z) => z.update(Di(l)));
    } else if (y) y.style.width = T;
    else {
      let ae = t.querySelector("b");
      ae || (ae = document.createElement("b"), t.appendChild(ae)), ae.style.left = T;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (F = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : F.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = Pi[a].text(l, m));
  }
  function ai(t, a) {
    const l = Oe.get(t + "|" + a), [d, m, T] = Pi[t].send(a, l), y = () => setTimeout(() => {
      Oe.delete(t + "|" + a), On();
    }, 1500);
    Ni(d, m, a, T).then(y, y);
  }
  function eo(t) {
    t.addEventListener("click", (a) => {
      var d;
      const l = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel");
      if (It && !a.target.closest(".tfBoardMenu,[data-board-more]") && Zn(), !(!l || !t.contains(l) || l.disabled))
        if (l.dataset.boardMore)
          (It == null ? void 0 : It.key) === l.dataset.boardMore ? Zn(!0) : Zr(l.dataset.boardMore, l);
        else if (l.dataset.boardAct) So(It.key, l.dataset.boardAct);
        else if (l.dataset.boardShow) va(l.dataset.boardShow);
        else if (l.dataset.energyPick) Ur(l.dataset.energyPick);
        else if (l.dataset.act) Bi(l.dataset.act);
        else if (l.hasAttribute("data-details")) br(!(g != null && g.details));
        else if (l.hasAttribute("data-details-close")) br(!1);
        else if (l.dataset.summary) jr(l.dataset.summary, l);
        else if (l.dataset.star) nr(l.dataset.star);
        else if (l.hasAttribute("data-more-back"))
          g = g.back, Jr();
        else if (l.hasAttribute("data-favs-edit")) xr("favourites", l);
        else if (l.dataset.acts) JSON.parse(l.dataset.acts).forEach(([m, T, y, b]) => Ni(m, T, y, b).catch(() => {
        }));
        else if (l.dataset.more) xr(l.dataset.more, l);
        else if (l.hasAttribute("data-more-close")) ei();
        else if (l.dataset.go) Ti("room:" + l.dataset.go);
        else if (l.hasAttribute("data-area-back")) hr();
        else if (l.dataset.open) Qr(l);
        else if (l.hasAttribute("data-close")) {
          const m = W;
          W = null, Qt.delete(m.key), On(), (d = A.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else l.classList.contains("tfAreaPanel") && !l.classList.contains("active") && es(l);
    }), t.addEventListener("keydown", (a) => {
      var d, m, T, y, b, F, ae;
      const l = a.target;
      if ((d = l.dataset) != null && d.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Qr(l)), (m = l.dataset) != null && m.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ur(l.dataset.energyPick)), (T = l.classList) != null && T.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), es(l)), (y = l.dataset) != null && y.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), jr(l.dataset.summary, l)), a.key === "Escape" && It && t === A) {
        a.preventDefault(), Zn(!0);
        return;
      }
      if (a.key === "Escape" && Tn && t === A) {
        a.preventDefault(), Yr(!1), (b = u("dashEditNav")) == null || b.focus();
        return;
      }
      if (a.key === "Escape" && Se && t === A && (a.preventDefault(), hr()), (F = l.dataset) != null && F.blocks) {
        const U = l.dataset.blocks, z = kr(a, Math.round(Bn(U)));
        if (z == null) return;
        a.preventDefault(), ni(U, z), clearTimeout(se.get(U)), se.set(U, setTimeout(() => ai("pos", U), 500));
        return;
      }
      if ((ae = l.dataset) != null && ae.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [U, z] = l.dataset.drag.split("|"), pe = Number(l.getAttribute("aria-valuenow")) / 100, qe = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, pe + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        ia(l, U, z, qe), ai(U, z);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var oi;
      const l = a.target.closest("[data-blocks]");
      if (l && a.button === 0) {
        a.preventDefault(), ka(l, a);
        return;
      }
      const d = a.target.closest("[data-drag]");
      if (!d || a.button > 0) return;
      const [m, T] = d.dataset.drag.split("|");
      if (m === "bright" && !on(T)) {
        Bi(at("light", "toggle", T));
        return;
      }
      const y = m === "bright" && ((oi = v[T]) == null ? void 0 : oi.state) !== "on", b = a.pointerType !== "mouse", F = m === "tilt" ? 3 : 0, ae = () => d.getBoundingClientRect().width - F * 2, U = (ln) => {
        const dn = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ln.clientX - dn.left - F) / ae()));
      };
      let z = b ? "waiting" : y ? "pressed" : "dragging", pe = 0, qe = 0;
      const Ie = a.clientX, fe = a.clientY, me = (ln, dn) => Math.hypot(ln.clientX - Ie, ln.clientY - fe) > dn, ie = () => {
        try {
          d.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      b || (a.preventDefault(), ie()), z === "dragging" && ia(d, m, T, U(a));
      const st = b && setTimeout(() => {
        var ln, dn;
        z === "waiting" && (z = "held", S = d, d.classList.add("held"), ie(), (ln = navigator.userActivation) != null && ln.hasBeenActive && ((dn = navigator.vibrate) == null || dn.call(navigator, 8)), pe = y ? (Fe[T] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, qe = Ie, ia(d, m, T, pe));
      }, x), qt = (ln) => {
        z === "waiting" && me(ln, 8) ? z = "gone" : z === "pressed" && me(ln, 4) && (z = "dragging"), z === "held" ? ia(d, m, T, Math.max(0, Math.min(1, pe + (ln.clientX - qe) / ae()))) : z === "dragging" && ia(d, m, T, U(ln));
      }, xn = (ln) => {
        clearTimeout(st), ["pointermove", "pointerup", "pointercancel"].forEach((dn, Wn) => d.removeEventListener(dn, Wn ? xn : qt)), d.classList.remove("held"), S === d && (S = null), z === "held" || z === "dragging" ? ai(m, T) : ln.type === "pointerup" && y && (z === "waiting" || z === "pressed") && Ni("light", "turn_on", T).catch(() => {
        });
      };
      d.addEventListener("pointermove", qt), d.addEventListener("pointerup", xn), d.addEventListener("pointercancel", xn);
    }), t.addEventListener("touchmove", (a) => {
      S && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return A && w && (Pt(), eo(A), eo(dt), dt.addEventListener("click", (t) => {
    t.target === dt && ei();
  }), (ts = n.getElementById("homeNav")) == null || ts.addEventListener("click", () => {
    Se && hr();
  }), (Mr = n.querySelector(".bottomNav")) == null || Mr.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + nc + "</button>"), (to = u("dashEditNav")) == null || to.addEventListener("click", () => Yr(!Tn)), A.addEventListener("pointerdown", To), A.addEventListener("hass-action", (t) => {
    var d, m;
    const a = (m = (d = t.target).closest) == null ? void 0 : m.call(d, ".tfDac"), l = a == null ? void 0 : a.dataset.k;
    !l || !a.dataset.dac.startsWith("dash:") || Tn || (t.stopPropagation(), $o.has(l) ? $o.delete(l) : $o.add(l), Fn());
  }), new ResizeObserver(() => {
    h.classList.contains("tfDash") && xo() !== wo ? On() : Jo();
  }).observe(A), window.addEventListener("resize", Jo, { passive: !0 }), dt.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), g != null && g.details ? br(!1) : ei());
  })), ne(), {
    update(t) {
      if (!w) return;
      const a = !Object.keys(v).length;
      v = t || {};
      for (const l in v) l.startsWith("light.") && v[l].state === "on" && on(l) && Ge(l, Va(v[l]));
      a ? Ln() : On();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      qa = !0, ze == null || ze.destroy(), ze = null, Xe == null || Xe.forEach((t) => t.destroy()), Xe = null;
    },
    resume() {
      qa = !1, !(!w || !(A != null && A.querySelector("[data-tf]"))) && (it.isConnected && ui(it.style.order), pi());
    }
  };
}
const Bm = "0.45.3", yl = "move_assistant", Pm = "move_assistant", ic = "move_assistant_checkin_reminder";
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
    const i = !this._hass;
    if (this._hass = s, i) {
      this._init();
      return;
    }
    this._app && s.states !== this._lastStates && (this._lastStates = s.states, this._app.updateStates(s.states), (u = this._test) == null || u.update(s.states));
  }
  connectedCallback() {
    var s, i;
    (s = this._app) == null || s.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var s, i;
    (s = this._app) == null || s.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Im();
    const s = this.shadowRoot || this.attachShadow({ mode: "open" });
    s.innerHTML = `<style>${au}${ou}${iu}</style>${ru}`;
    const i = s.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const h = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: yl
      });
      u = (h == null ? void 0 : h.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = Tu(s, {
      data: u,
      save: (h) => this._save(h),
      fire: (h, f) => this._fire(h, f),
      ws: (h) => this._hass.callWS(h),
      subscribe: (h, f) => {
        var w, L;
        return (L = (w = this._hass) == null ? void 0 : w.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(f, h) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var h, f;
        return Object.keys(((f = (h = this._hass) == null ? void 0 : h.services) == null ? void 0 : f.notify) || {}).sort();
      },
      setReminderAutomation: (h) => this._setReminderAutomation(h),
      setLight: (h) => this.classList.toggle("lightBody", h),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Nm(s, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const s = (i = this._hass) == null ? void 0 : i.connection;
    s != null && s.subscribeMessage && s.subscribeMessage(
      (u) => {
        var f;
        const h = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        h === this._lastSaved || h === this._pendingJson || (this._lastSaved = h, (f = this._app) == null || f.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: yl }
    ).catch(() => {
    });
  }
  _save(s) {
    this._pendingJson = JSON.stringify(s), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: yl,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(s, i = {}) {
    var u, h;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((h = this._hass) == null || h.callWS({
      type: "fire_event",
      event_type: Pm,
      event_data: { action: s, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(s) {
    const i = `config/automation/config/${ic}`;
    if (!s) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (f) {
        if ((f == null ? void 0 : f.status_code) !== 404 && (f == null ? void 0 : f.status) !== 404) throw f;
      }
      return;
    }
    const u = (f) => `${f}:00`, h = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: ic,
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
            data: { url: h, clickAction: h }
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
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(s) {
    var u;
    const i = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    i && (i.textContent = s, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Hm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Bm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
