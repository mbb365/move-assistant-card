const au = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', ou = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:none;width:46px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfBoardTray{position:absolute;z-index:1;display:flex;flex-wrap:wrap;gap:8px}#app.tfEditing .tfBoardTray .pill{cursor:pointer}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', iu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', ru = `<main id="app"><div class="shell">
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
`, co = {
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
}, Bn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, kd = (n, l, i) => n + (l - n) * i, Ml = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, su = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Md = {}, Wt = (n, l, i) => {
  const u = n + l + i;
  return Md[u] || (Md[u] = su(Ml(n).map((h, f) => h + (Ml(l)[f] - h) * i)));
}, Cd = {}, bs = (n) => Cd[n] || (Cd[n] = Ml(n)), sl = (n, l, i, u) => (h) => {
  if (h <= 0) return 0;
  if (h >= 1) return 1;
  let f = 0, x = 1, T = h;
  for (let b = 0; b < 18; b++)
    T = (f + x) / 2, 3 * (1 - T) * (1 - T) * T * n + 3 * (1 - T) * T * T * i + T * T * T < h ? f = T : x = T;
  return 3 * (1 - T) * (1 - T) * T * l + 3 * (1 - T) * T * T * u + T * T * T;
}, lu = { std: sl(0.2, 0, 0, 1), acc: sl(0.3, 0, 1, 1), dec: sl(0, 0, 0, 1) };
function Cs(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function sc(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Wt(l.clear[0], l.cloudy[0], 0.12), Wt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Wt(l.rain[0], "#000000", 0.22), Wt(l.rain[1], "#000000", 0.22)], l;
}
const Cl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Sl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Tl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Ll(n, l = co) {
  const i = { ...co, ...l }, u = sc(i), h = String(n).split("/"), f = u[h[0]] ? h[0] : "clear", x = h[1] === "night", T = u[f][x ? 1 : 0], b = {
    night: x,
    clearness: f === "clear" ? 1 : f === "partly" ? 0.7 : 0.25,
    sky: T,
    skyStops: [T],
    skyT: 0,
    sun: { x: 45, y: x ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: x ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: x ? 1 : 0 },
    stars: Cl.map(() => ({ o: 0 })),
    rain: Sl.map(() => ({ o: 0, dy: -16 })),
    snow: Tl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (re) => Cl.map(() => ({ o: re }));
  return f === "clear" ? x ? (b.moon.o = 1, b.stars = N(1)) : b.sun.o = 1 : f === "partly" ? (b.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: x ? 1 : 0 }, x ? (b.moon = { x: 34, y: 33, d: 48, o: 1 }, b.stars = N(0.7)) : b.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : f === "cloudy" || f === "fog" ? (b.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: x ? 1 : 0 }, x ? b.moon = { x: 40, y: 36, d: 40, o: 0 } : b.sun = { x: 40, y: 36, r: 20, o: 0 }) : (b.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, x ? b.moon = { x: 38, y: 28, d: 36, o: 0 } : b.sun = { x: 38, y: 28, r: 18, o: 0 }, f === "snow" ? b.snow = Tl.map(() => ({ o: 1, dy: 0 })) : b.rain = Sl.map((re, ae) => ({ o: f === "storm" && ae === 1 ? 0 : 1, dy: 0 })), f === "storm" && (b.bolt = { o: 1, dy: 0 })), b;
}
const Sd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function du(n, l, i, u = co, h = !1) {
  const f = { ...co, ...u }, x = (R, P) => R > 0.01 && P > 0.01 ? "stay" : R > 0.01 ? "leave" : P > 0.01 ? "enter" : "none", T = (R, P, G, X) => {
    const j = R[0] + P * X, q = R[1] - (G - 1 - P) * X;
    return lu[R[2]](Bn((i - j) / Math.max(1e-3, q - j)));
  }, b = (R, P, G, X = 0, j = 1, q = 0) => {
    const $ = x(R.o, P.o);
    if ($ === "none") return { ...P, o: 0 };
    const O = T(Sd[G][$], X, j, q), Z = {};
    for (const oe in P) Z[oe] = h && $ !== "stay" && oe !== "o" ? $ === "leave" ? R[oe] : P[oe] : kd(R[oe], P[oe], O);
    return Z;
  }, N = T(Sd.sky, 0, 1, 0);
  let re, ae;
  if (n.night !== l.night) {
    const R = Math.min(n.clearness, l.clearness), P = Wt(Wt(n.sky, l.sky, 0.5), f.dusk, 0.6 * R);
    re = N < 0.5 ? Wt(n.sky, P, N * 2) : Wt(P, l.sky, N * 2 - 1), ae = R > 0.5 ? [n.sky, f.dusk, l.sky] : [n.sky, l.sky];
  } else
    re = Wt(n.sky, l.sky, N), ae = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: kd(n.clearness, l.clearness, i),
    sky: re,
    skyStops: ae,
    skyT: N,
    sun: b(n.sun, l.sun, "body"),
    moon: b(n.moon, l.moon, "body"),
    cloud: b(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((R, P) => b(n.stars[P], R, "fx", P, l.stars.length, 0.05)),
    rain: l.rain.map((R, P) => b(n.rain[P], R, "fx", P, l.rain.length, 0.05)),
    snow: l.snow.map((R, P) => b(n.snow[P], R, "fx", P, l.snow.length, 0.05)),
    bolt: b(n.bolt, l.bolt, "fx")
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
], Nn = (n, l) => (cu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, uu = 0, Dl = 1, Rl = 2, Nl = 3, Bl = 4, Rn = 5, nr = 6, No = 7, Pl = 8, xs = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), pu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), lc = (n, l, i) => {
  let u = !1;
  for (let h = 0, f = n.length - 1; h < n.length; f = h++) {
    const x = n[h], T = n[f];
    x[1] > i != T[1] > i && l < (T[0] - x[0]) * (i - x[1]) / (T[1] - x[1]) + x[0] && (u = !u);
  }
  return u;
};
function dc(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: h = co, ink: f = "#26221e", paper: x = "#fbf9f6", clock: T = 0, idle: b = !1 } = {}) {
  const N = { ...co, ...h }, re = Math.sin, ae = Math.PI * 2, R = Math.max(6, Math.round(l / i)), P = R / 90, G = b ? Math.floor(T / 100) * 100 : 0, X = b ? re(ae * G / 3600) : 0, j = b ? 1.8 * re(ae * G / 6400) : 0, q = b ? 0.9 * re(ae * G / 4100) : 0, $ = b ? 0.8 * re(ae * G / 5200) : 0, O = G / 3400 % 1, Z = b && n.bolt.o > 0.5 && (O < 0.04 || O > 0.08 && O < 0.11), oe = new Array(R * R), A = new Uint8Array(R * R), W = (y, S, M, E, se) => {
    M == null || y < 0 || S < 0 || y >= R || S >= R || (E >= 1 || E > Nn(y + 5, S + 3)) && (oe[S * R + y] = M, A[S * R + y] = se);
  }, fe = (y, S, M, E) => {
    for (let se = Math.max(0, Math.floor(S - M) - 1); se <= Math.min(R - 1, S + M + 1); se++) for (let V = Math.max(0, Math.floor(y - M) - 1); V <= Math.min(R - 1, y + M + 1); V++) E(V, se, V + 0.5 - y, se + 0.5 - S);
  }, Se = n.skyStops || [n.sky], g = n.skyT || 0;
  for (let y = 0; y < R; y++) {
    const S = n.night ? Bn(1 - (y + 0.5) / (R * 0.7)) * 0.85 : Bn(((y + 0.5) / R - 0.35) / 0.65) * 0.85;
    for (let M = 0; M < R; M++) {
      let E = Se[0];
      if (Se.length > 1) {
        const se = g * (Se.length - 1), V = Math.min(Se.length - 2, Math.floor(se));
        E = se - V > Nn(M, y) ? Se[V + 1] : Se[V];
      }
      S > Nn(M + 2, y + 5) && (E = n.night ? Wt(E, "#000000", 0.28) : Wt(E, "#ffffff", 0.2)), oe[y * R + M] = Z ? Wt(E, "#ffffff", 0.25) : E;
    }
  }
  if (n.sun.o > 0.01) {
    const y = n.sun.x * P, S = n.sun.y * P, M = Math.max(1, n.sun.r * P);
    if (b) {
      const E = M * (1.45 + 0.06 * X), se = Wt(N.sun, "#ffffff", 0.55);
      if (fe(y, S, E, (V, Q, ie, ce) => {
        const We = Math.sqrt(ie * ie + ce * ce);
        We > M && We < E && W(V, Q, se, 0.26 * (1 - (We - M) / (E - M)) * n.sun.o, uu);
      }), n.sun.o > 0.5) {
        const V = Math.floor(G / 500) % 2, Q = Math.max(1, M * 0.22);
        for (let ie = 0; ie < 8; ie++) if (ie % 2 === V) for (let ce = M + 1.5; ce < M + 1.5 + Q; ce += 0.7) W(Math.floor(y + Math.cos(ie * Math.PI / 4) * ce), Math.floor(S + Math.sin(ie * Math.PI / 4) * ce), N.sun, n.sun.o, Pl);
      }
    }
    fe(y, S, M, (E, se, V, Q) => {
      if (V * V + Q * Q > M * M) return;
      const ie = ((V * 0.643 + Q * 0.766) / M + 1) / 2;
      W(E, se, Bn((ie - 0.62) / 0.38) > Nn(E, se) ? N.sunEdge : N.sun, n.sun.o, Dl);
    });
  }
  if (Cl.forEach((y, S) => {
    const M = n.stars[S].o;
    if (M < 0.01) return;
    const E = Math.floor(y[0] * P), se = Math.floor(y[1] * P), V = b ? (Math.floor(G / 300) + S * 3) % 6 : 0;
    if (V === 5) return;
    const Q = Math.round(y[2] * P * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    W(E, se, N.star, M, No);
    for (let ie = 1; ie <= Q; ie++) {
      const ce = ie === Q && Q > 1 ? Wt(N.star, n.sky, 0.5) : N.star;
      W(E - ie, se, ce, M, No), W(E + ie, se, ce, M, No), W(E, se - ie, ce, M, No), W(E, se + ie, ce, M, No);
    }
  }), n.moon.o > 0.01) {
    const y = Math.max(1.5, n.moon.d * P * 0.37), S = n.moon.x * P, M = n.moon.y * P + (b && $ > 0.4 ? -1 : 0), E = S + 0.547 * y, se = M - 0.503 * y, V = 0.82 * y, Q = Wt(N.moon, "#ffffff", 0.6);
    fe(S, M, y, (ie, ce, We, Je) => {
      if (We * We + Je * Je > y * y) return;
      const Tt = ie + 0.5 - E, tn = ce + 0.5 - se;
      Tt * Tt + tn * tn <= V * V || W(ie, ce, Bn((Je + y) / (2 * y) * 1.1 - 0.1) > Nn(ie, ce) ? N.moon : Q, n.moon.o, Rl);
    });
  }
  const ke = Math.max(2, Math.round(15.65 * P)), Ce = Math.max(1, Math.round(5.87 * P * 0.5));
  Sl.forEach((y, S) => {
    const M = n.rain[S];
    let E = M.dy, se = M.o;
    if (se < 0.01) return;
    if (b) {
      const ie = (G / 950 + S / 3) % 1;
      E += -5 + ie * 14, se *= ie < 0.18 ? ie / 0.18 : ie > 0.72 ? (1 - ie) / 0.28 : 1;
    }
    const V = (y[0] + 3 + j) * P, Q = (y[1] + E) * P;
    for (let ie = 0; ie < ke; ie++) for (let ce = 0; ce < Ce; ce++) W(Math.floor(V - 0.208 * ie) + ce, Math.floor(Q) + ie, N.rain, se, Bl);
  });
  const Oe = Math.max(0, Math.round(7.34 * P / 2.6));
  if (Tl.forEach((y, S) => {
    const M = n.snow[S];
    let E = M.dy, se = 0, V = M.o;
    if (V < 0.01) return;
    if (b) {
      const ce = (G / 3200 + S / 5) % 1;
      E += -6 + ce * 14, se = 1.5 * re(ae * (ce * 1.5 + S / 5)), V *= ce < 0.2 ? ce / 0.2 : ce > 0.75 ? (1 - ce) / 0.25 : 1;
    }
    const Q = Math.floor((y[0] + 3.67 + se + j) * P), ie = Math.floor((y[1] + 3.67 + E) * P);
    W(Q, ie, N.snow, V, Rn);
    for (let ce = 1; ce <= Oe; ce++)
      W(Q - ce, ie, N.snow, V, Rn), W(Q + ce, ie, N.snow, V, Rn), W(Q, ie - ce, N.snow, V, Rn), W(Q, ie + ce, N.snow, V, Rn), Oe > 1 && ce < Oe && (W(Q - ce, ie - ce, N.snow, V, Rn), W(Q + ce, ie - ce, N.snow, V, Rn), W(Q - ce, ie + ce, N.snow, V, Rn), W(Q + ce, ie + ce, N.snow, V, Rn));
  }), n.bolt.o > 0.01)
    if (R >= 30) {
      const y = 39 + j, S = 50 + n.bolt.dy;
      for (let M = Math.floor(S * P); M <= (S + 28) * P; M++) for (let E = Math.floor(y * P); E <= (y + 13) * P; E++)
        lc(mu, (E + 0.5) / P - y, (M + 0.5) / P - S) && W(E, M, N.sun, n.bolt.o, nr);
    } else {
      const y = R / 18, S = 7, M = 10 + Math.round(n.bolt.dy * 0.2);
      pu.forEach((E, se) => E.split("").forEach((V, Q) => {
        if (V !== "#") return;
        const ie = Math.floor((S + Q) * y), ce = Math.floor((M + se) * y);
        for (let We = ce; We < Math.max(ce + 1, Math.floor((M + se + 1) * y)); We++) for (let Je = ie; Je < Math.max(ie + 1, Math.floor((S + Q + 1) * y)); Je++) W(Je, We, N.sun, n.bolt.o, nr);
      }));
    }
  if (n.cloud.o > 0.01) {
    const y = Math.max(3, n.cloud.w * P), S = y * 0.6665, M = (n.cloud.x + j) * P - y / 2, E = (n.cloud.y + q) * P - S / 2, se = Wt(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), V = Wt(se, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(E) - 1); Q <= Math.min(R - 1, E + S + 1); Q++) for (let ie = Math.max(0, Math.floor(M) - 1); ie <= Math.min(R - 1, M + y + 1); ie++) {
      const ce = (ie + 0.5 - M) / y, We = (Q + 0.5 - E) / y;
      xs(ce, We) && W(ie, Q, !xs(ce, We + 1 / y) || Bn((We - 0.42) / 0.25) * 0.8 > Nn(ie, Q) ? V : se, n.cloud.o, Nl);
    }
  }
  return cc(oe, A, R, R, { oneBit: u, ink: f, paper: x, snowInk: !n.night });
}
function cc(n, l, i, u, { oneBit: h, ink: f, paper: x, snowInk: T }) {
  const b = new Uint8ClampedArray(i * u * 4), N = bs(f), re = bs(x);
  for (let ae = 0; ae < u; ae++) for (let R = 0; R < i; R++) {
    const P = ae * i + R, G = l[P];
    if (n[P] == null) continue;
    let X = bs(n[P]);
    if (h) {
      let j;
      G === Bl || G === Pl ? j = !0 : G === Rn ? j = T : G === No || G === nr ? j = !1 : j = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= Nn(R, ae), (G === Dl || G === Rl || G === Nl || G === nr) && (R > 0 && l[P - 1] !== G || R < i - 1 && l[P + 1] !== G || ae > 0 && l[P - i] !== G || ae < u - 1 && l[P + i] !== G) && (j = !0), X = j ? N : re;
    }
    b[P * 4] = X[0], b[P * 4 + 1] = X[1], b[P * 4 + 2] = X[2], b[P * 4 + 3] = 255;
  }
  return { w: i, h: u, data: b };
}
const hu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fu = (n) => Cs(n, !1).split("/")[0], ll = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", bu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], yu = [".##", "##.", ".#.", "#.."];
function uc(n, { width: l, height: i, colors: u, wave: h = 0.38, soft: f = 6, glow: x = 0.6 }) {
  const T = { ...co, dawn: "#e5a77e", ...u }, b = sc(T), N = l, re = i, ae = N / 6, R = ae / 2, P = Math.PI * 2, G = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(12)].map((O, Z) => {
    const oe = G[Math.min(Z, G.length - 1)], A = fu(oe.cond), W = Z % 2 === 1;
    return { cond: oe.cond, k: A, night: W, sky: b[A][W ? 1 : 0], cover: hu[A] };
  }), j = (O) => re * (0.5 - h * Math.cos(P * (O / ae - 0.25)));
  return { C: T, S: X, W: N, H: re, cw: ae, sw: R, TAU: P, yb: j, side: (O, Z, oe) => {
    const A = (O ? j(Z) - oe : oe - j(Z)) / Math.max(3, f * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (O) => {
    const Z = ((O / ae - 0.25) % 1 + 1) % 1, oe = Math.max(0, Math.min(5, Math.round(O / ae - 0.25))), A = Math.max(0, Math.min(5, Math.round(O / ae - 0.75))), W = 1 - (X[2 * oe].cover + X[2 * A + 1].cover) / 2, fe = Math.sin(Math.PI * Math.min(1, Math.max(0, j(O) / re)));
    return { c: Z < 0.5 ? T.dusk : T.dawn, a: x * (0.2 + 0.8 * W) * fe * fe };
  }, soft: f, tw: ae * 0.3, sy: re / 90 };
}
function pc(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: h, sw: f, side: x, C: T, TAU: b, sy: N } = n, re = l, ae = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((R, P) => {
    const G = ll(u * 977 + P * 131 + 7), X = (P + 0.5) * f, j = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let q = 0; q < j; q++) {
      const $ = X + (G() - 0.5) * f * 1.6, O = (6 + G() * 76) * N, Z = G() < 0.35, oe = 1.8 + G() * 1.6, A = x(!0, $, O) * (Z ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(b * re / 2600 + q * 1.7 + P) : 1);
      A >= 0.03 && ae.stars.push({ x: $, y: O, big: Z, size: oe, o: A });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const q = X + (G() - 0.5) * f * 0.3, $ = Math.min(15, f * 0.29);
      ae.suns.push({ x: q, y: 32 * N, rad: $, halo: $ * 2.8 * (i ? 1 + 0.07 * Math.sin(b * re / 3600 + P) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const q = Math.min(0.78, f * 0.55 / 34), $ = X - 23 * q + (G() - 0.5) * f * 0.2;
      ae.moons.push({ x: $ + 23 * q, y: (4 + (i ? 0.8 * Math.sin(b * re / 5200 + P) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), h.forEach((R, P) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!G) return;
    const X = ll(u * 577 + P * 71 + 3), j = (P + 0.5) * f, q = R.k === "rain" || R.k === "storm" || R.night ? T.cloudNight : T.cloudDay, $ = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let O = 0; O < G; O++) {
      const Z = f / 46 * (R.k === "partly" ? 0.85 : 0.75 + X() * 0.55), oe = j + (R.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (R.k === "partly" ? 40 : 6 + X() * 26) * N, W = i ? 2.5 * Math.sin(b * re / 9e3 + P * 1.3 + O * 2.1) : 0, fe = i ? 0.9 * Math.sin(b * re / 6100 + P + O) : 0;
      ae.clouds.push({ x: oe - 23 * Z + W, y: A - 15.33 * Z + fe, w: 46 * Z, h: 30.66 * Z, fill: q, o: $ * (G > 1 && O === 0 ? 0.85 : 1) });
    }
  }), h.forEach((R, P) => {
    const G = ll(u * 313 + P * 29 + 11), X = (P + 0.5) * f, j = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < j; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 44 + G() * 36, oe = 1;
      if (i) {
        const W = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        O -= 0.21 * (W - (Z - 44)), Z = 44 + W, oe = Math.min(1, W / 6, (36 - W) / 6);
      }
      Z *= N;
      const A = x(R.night, O, Z) * oe;
      A >= 0.05 && ae.drops.push({ x: O, y: Z, o: A });
    }
    const q = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < q; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 40 + G() * 44, oe = 1;
      if (i) {
        const W = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + W, O += 1.6 * Math.sin(b * re / 2800 + $ * 1.9 + P), oe = Math.min(1, W / 6, (44 - W) / 6);
      }
      Z *= N;
      const A = x(R.night, O, Z) * oe;
      A >= 0.05 && ae.flakes.push({ x: O, y: Z, o: A });
    }
    if (R.k === "fog") {
      const $ = R.night ? "#c8ccd6" : "#ffffff", O = R.night ? 0.28 : 0.62, Z = i ? 4 * Math.sin(b * re / 8e3 + P) : 0;
      for (let oe = 0; oe < 4; oe++) ae.fogs.push({ x: X - f * 0.75 + oe % 2 * f * 0.18 + (oe % 2 ? Z : -Z), y: (30 + oe * 13) * N, w: f * 1.3, c: $, a: O });
    }
    if (R.k === "storm") {
      const $ = (re / 3400 + P * 0.37) % 1;
      ae.bolts.push({ x: X + (G() - 0.5) * f * 0.3 - 5, y: 36 * N, o: i && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), ae;
}
function ku(n, l, i, u, h, f, x, T) {
  const { S: b, C: N, cw: re, yb: ae, glowAt: R, soft: P, tw: G, sy: X } = n, j = new Array(i * u), q = new Uint8Array(i * u), $ = new Uint8Array(i * u), O = (y, S, M, E, se) => {
    M == null || y < 0 || S < 0 || y >= i || S >= u || (E >= 1 || E > Nn(y + 5, S + 3)) && (j[S * i + y] = M, q[S * i + y] = se);
  }, Z = (y, S, M, E) => {
    for (let se = Math.max(0, Math.floor(S - M) - 1); se <= Math.min(u - 1, S + M + 1); se++) for (let V = Math.max(0, Math.floor(y - M) - 1); V <= Math.min(i - 1, y + M + 1); V++) E(V, se, V + 0.5 - y, se + 0.5 - S);
  }, oe = (y, S, M) => {
    for (let se = 0; se < y.length - 1; se++) {
      const V = (se + S) * re;
      if (M < V - G / 2) return [y[se], y[se], 0];
      if (M <= V + G / 2) return [y[se], y[se + 1], (M - V + G / 2) / G];
    }
    const E = y[y.length - 1];
    return [E, E, 0];
  }, A = b.filter((y) => !y.night).map((y) => y.sky), W = b.filter((y) => y.night).map((y) => y.sky), fe = P / f, Se = 16 * X / f;
  for (let y = 0; y < i; y++) {
    const S = (y + 0.5) * h, M = ae(S) / f, E = oe(A, 0.75, S), se = oe(W, 1.25, S), V = R(S);
    for (let Q = 0; Q < u; Q++) {
      const ie = Nn(y, Q), ce = Q + 0.5 - M, We = (fe > 0.01 ? Bn(0.5 + ce / fe) : ce > 0 ? 1 : 0) > ie;
      let Je = We ? E[2] > ie ? E[1] : E[0] : se[2] > ie ? se[1] : se[0];
      (We ? Bn(((Q + 0.5) / u - 0.45) / 0.55) * 0.7 : Bn(1 - (Q + 0.5) / (u * 0.55)) * 0.7) > Nn(y + 2, Q + 5) && (Je = We ? Wt(Je, "#ffffff", 0.18) : Wt(Je, "#000000", 0.25)), We && ce >= 0 && ce < Se && V.a * 1.3 * (1 - ce / Se) > Nn(y + 6, Q + 1) && (Je = V.c), j[Q * i + y] = Je, $[Q * i + y] = We ? 0 : 1;
    }
  }
  const g = Wt(N.sun, "#ffffff", 0.55), ke = Wt(N.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const S = Math.floor(y.x / h), M = Math.floor(y.y / f);
    if (S < 0 || M < 0 || S >= i || M >= u || !$[M * i + S] || y.o < 0.15) return;
    const E = y.o > 0.45 ? N.star : Wt(N.star, j[M * i + S], 0.5), se = y.big && y.o > 0.6 ? Math.floor(y.size / h) : 0;
    O(S, M, E, 1, No);
    for (let V = 1; V <= se; V++) [[S - V, M], [S + V, M], [S, M - V], [S, M + V]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < i && Q[1] < u && $[Q[1] * i + Q[0]] && O(Q[0], Q[1], E, 1, No);
    });
  }), l.suns.forEach((y) => {
    const S = Math.max(1.5, y.rad / h), M = y.x / h, E = y.y / f, se = y.halo / h * 0.85;
    if (Z(M, E, se, (V, Q, ie, ce) => {
      const We = Math.sqrt(ie * ie + ce * ce);
      We > S && We < se && !$[Q * i + V] && O(V, Q, g, 0.3 * (1 - (We - S) / (se - S)), 0);
    }), T) {
      const V = Math.floor(x / 500) % 2, Q = Math.max(1, S * 0.3);
      for (let ie = 0; ie < 8; ie++) if (ie % 2 === V) for (let ce = S + 1.2; ce < S + 1.2 + Q; ce += 0.7) O(Math.floor(M + Math.cos(ie * Math.PI / 4) * ce), Math.floor(E + Math.sin(ie * Math.PI / 4) * ce), N.sun, 1, Pl);
    }
    Z(M, E, S, (V, Q, ie, ce) => {
      ie * ie + ce * ce <= S * S && O(V, Q, Bn(((ce / S + 1) / 2 - 0.6) / 0.4) > Nn(V, Q) ? N.sunEdge : N.sun, 1, Dl);
    });
  }), l.moons.forEach((y) => {
    const S = Math.max(1.5, y.d * 0.37 / h), M = y.x / h, E = y.y / f, se = M + 0.547 * S, V = E - 0.503 * S, Q = 0.82 * S;
    Z(M, E, S, (ie, ce, We, Je) => {
      if (We * We + Je * Je > S * S) return;
      const Tt = ie + 0.5 - se, tn = ce + 0.5 - V;
      Tt * Tt + tn * tn > Q * Q && O(ie, ce, Bn((Je + S) / (2 * S) * 1.1 - 0.1) > Nn(ie, ce) ? N.moon : ke, 1, Rl);
    });
  }), l.clouds.forEach((y) => {
    const S = Math.max(3, y.w / h), M = S * 0.6665, E = y.x / h, se = y.y / f, V = Wt(y.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(se) - 1); Q <= Math.min(u - 1, se + M + 1); Q++) for (let ie = Math.max(0, Math.floor(E) - 1); ie <= Math.min(i - 1, E + S + 1); ie++) {
      const ce = (ie + 0.5 - E) / S, We = (Q + 0.5 - se) / S;
      xs(ce, We) && O(ie, Q, !xs(ce, We + 1 / S) || Bn((We - 0.42) / 0.25) * 0.8 > Nn(ie, Q) ? V : y.fill, y.o, Nl);
    }
  }), l.fogs.forEach((y) => {
    const S = Math.floor(y.y / f), M = Math.max(S, Math.floor((y.y + 6 * X) / f) - 1), E = Math.floor(y.x / h), se = Math.floor((y.x + y.w) / h);
    for (let V = S; V <= M; V++) for (let Q = E; Q <= se; Q++) {
      const ie = (Q - E) / Math.max(1, se - E);
      O(Q, V, y.c, y.a * (ie < 0.25 ? ie / 0.25 : ie > 0.75 ? (1 - ie) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  l.drops.forEach((y) => {
    const S = y.x / h, M = Math.floor(y.y / f);
    for (let E = 0; E < Ce; E++) O(Math.floor(S - 0.208 * E * f / h), M + E, N.rain, y.o, Bl);
  });
  const Oe = Math.max(0, Math.round(4.4 / h / 2.6));
  return l.flakes.forEach((y) => {
    const S = Math.floor(y.x / h), M = Math.floor(y.y / f);
    O(S, M, N.snow, y.o, Rn);
    for (let E = 1; E <= Oe; E++)
      O(S - E, M, N.snow, y.o, Rn), O(S + E, M, N.snow, y.o, Rn), O(S, M - E, N.snow, y.o, Rn), O(S, M + E, N.snow, y.o, Rn);
  }), l.bolts.forEach((y) => {
    if (h <= 3.5)
      for (let S = Math.floor(y.y / f); S <= (y.y + 24) / f; S++) for (let M = Math.floor(y.x / h); M <= (y.x + 11) / h; M++)
        lc(xu, (M + 0.5) * h - y.x, (S + 0.5) * f - y.y) && O(M, S, N.sun, 1, nr);
    else {
      const S = Math.round(y.x / h), M = Math.round(y.y / f);
      yu.forEach((E, se) => E.split("").forEach((V, Q) => {
        V === "#" && O(S + Q, M + se, N.sun, 1, nr);
      }));
    }
  }), { col: j, ids: q };
}
function Mu(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), h = Math.max(6, Math.round(l.height / i)), f = l.width / u, x = l.height / h, T = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (P) => {
    const G = uc(P, l);
    return ku(G, pc(G, { clock: T, ambient: l.ambient, seed: l.seed }), u, h, f, x, T, l.ambient);
  }, N = b(n), re = l.reveal == null ? 1 : Bn(l.reveal);
  let ae = N.col, R = N.ids;
  if (re < 1) {
    const P = l.prev ? b(l.prev) : null, G = re * (u + 12);
    ae = new Array(u * h), R = new Uint8Array(u * h);
    for (let X = 0; X < u * h; X++) {
      const j = X % u, q = X / u | 0;
      (l.reduce ? re : Bn((G - j) / 12)) > Nn(j, q) ? (ae[X] = N.col[X], R[X] = N.ids[X]) : P ? (ae[X] = P.col[X], R[X] = P.ids[X]) : (ae[X] = null, R[X] = 255);
    }
  }
  return cc(ae, R, u, h, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Cu(n, l, i) {
  const u = i.width, h = i.height, f = i.reveal == null ? 1 : Bn(i.reveal), x = (R, P) => {
    const G = uc(P, i);
    Su(R, G, pc(G, i));
  };
  if (n.clearRect(0, 0, u, h), f >= 1) {
    x(n, l);
    return;
  }
  if (i.prev && x(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = f, x(n, l), n.restore();
    return;
  }
  const T = n.canvas, b = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (b.width !== T.width || b.height !== T.height) && (b.width = T.width, b.height = T.height);
  const N = b.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, h), x(N, l);
  const re = f * (u + 64) - 64, ae = N.createLinearGradient(re, 0, re + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = ae, N.fillRect(0, 0, u, h), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(b, 0, 0), n.restore();
}
function Su(n, l, i) {
  const { W: u, H: h, S: f, C: x, cw: T, yb: b, glowAt: N, soft: re, tw: ae, sy: R } = l, P = (g, ke) => {
    const Ce = bs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, G = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const y = (Oe + ke) * T, S = (y - ae / 2) / u, M = (y + ae / 2) / u;
      S > 0 && S < 1 && Ce.addColorStop(S, g[Oe]), M > 0 && M < 1 && Ce.addColorStop(M, g[Oe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), j = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Oe = u * Ce / X, y = g == null ? 0 : b(Oe) + g;
      Ce ? n.lineTo(Oe, y) : n.moveTo(Oe, y);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Oe = u * Ce / X;
      n.lineTo(Oe, b(Oe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, h);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = N(u * g / 64);
    q.addColorStop(g / 64, P(ke.c, Math.min(1, ke.a)));
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
  const Z = new Path2D(bu), oe = new Path2D(vu), A = new Path2D(gu), W = new Path2D(wu);
  n.fillStyle = x.star, i.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const fe = Wt(x.sun, "#ffffff", 0.55);
  i.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, P(fe, 0.42)), ke.addColorStop(0.7, P(fe, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, x.sun), Ce.addColorStop(1, x.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Wt(x.moon, "#ffffff", 0.6);
  i.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, x.moon), n.fillStyle = ke, n.fill(oe), n.restore();
  }), i.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), i.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, P(g.c, 0)), ke.addColorStop(0.25, P(g.c, g.a)), ke.addColorStop(0.75, P(g.c, g.a)), ke.addColorStop(1, P(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * R);
  }), n.fillStyle = x.rain, i.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = x.snow, i.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = x.sun, i.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
function Tu(n, l) {
  var fd, gd, vd, bd, wd, xd, yd;
  const i = (e) => n.getElementById(e), u = i("workoutView"), h = i("workoutNameInput");
  let f = !0;
  const x = i("homeClock");
  function T() {
    x && (x.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  T(), setInterval(T, 15e3);
  const b = i("createFlow"), N = i("createMovementsSlot"), re = i("createTimingSlot"), ae = i("createFinishSlot"), R = i("movementStepSummary"), P = i("timingStepSummary"), G = i("finishStepSummary"), X = i("continueToTiming"), j = i("continueToFinish"), q = i("finishMoveButton");
  let $ = !1, O = [];
  function Z(e) {
    !e || O.some((a) => a.node === e) || O.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function oe(e, a) {
    e && (Z(e), a.appendChild(e));
  }
  function A() {
    [...O].reverse().forEach(({ node: e, parent: a, next: r }) => {
      a && (r && r.parentNode === a ? a.insertBefore(e, r) : a.appendChild(e));
    }), O = [];
  }
  function W(e) {
    n.querySelectorAll(".createStep").forEach((a) => {
      a.classList.toggle("active", a.dataset.createStep === e);
    }), e === "timing" && ($ = !0), fe();
  }
  function fe() {
    var J, ne;
    if (!lt) return;
    ze[pt];
    const e = rt.filter((K) => !K.hidden), a = e.filter((K) => K.kind !== "rest").length, r = e.filter((K) => K.kind === "rest").length;
    R.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const c = a > 0, p = n.querySelector('[data-open-step="timing"]'), k = n.querySelector('[data-open-step="finish"]');
    p.disabled = !c, X.disabled = !c, P.textContent = c ? Sn(S.value) + " · " + zt(M.value) + " movement · " + zt(E.value) + " rest" : "Add a movement first", k.disabled = !(c && $);
    const L = ((h == null ? void 0 : h.value) || "").trim(), I = [];
    (J = i("includeWarmupPreset")) != null && J.checked && I.push("warm-up"), (ne = i("includeCooldownPreset")) != null && ne.checked && I.push("cooldown"), G.textContent = L ? L + (I.length ? " · " + I.join(" + ") : "") : I.length ? I.join(" + ") : "Name and optional extras";
  }
  function Se() {
    var Me, Ve, Te;
    b.hidden = !1, $ = !1;
    const e = n.querySelector(".editNameRow"), a = i("createMoveOptions"), r = n.querySelector(".timeTiles"), c = i("routineSummaryModal"), p = n.querySelector(".tempoRevealRow"), k = i("tempoExperiment"), L = (Me = i("warmupList")) == null ? void 0 : Me.closest("section"), I = i("movementCreatorLaunch"), J = i("movementCreator"), ne = (Ve = i("strengthList")) == null ? void 0 : Ve.closest("section"), K = (Te = i("cooldownList")) == null ? void 0 : Te.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), L, I, J, ne, K].forEach((ye) => ye && oe(ye, N)), [a, r, c, p, k].forEach((ye) => oe(ye, re)), oe(e, ae), W("movements"), fe();
  }
  function g() {
    A(), b.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || W(e.dataset.openStep);
  })), X.addEventListener("click", () => {
    X.disabled || W("timing");
  }), j.addEventListener("click", () => W("finish")), q.addEventListener("click", () => i("saveWorkoutEdit").click());
  const ke = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Ce = i("homeNav"), Oe = i("settingsNav");
  function y(e) {
    Object.entries(ke).forEach(([a, r]) => r.classList.toggle("active", a === e)), Ce.classList.toggle("active", e === "home"), Oe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Vo, 400), e === "settings" && (requestAnimationFrame(() => wt(n.querySelector(".tab.active"), !1)), Xr());
  }
  const S = i("totalTime"), M = i("workTime"), E = i("restTime"), se = i("totalOut"), V = i("workOut"), Q = i("restOut"), ie = i("totalFill"), ce = i("workFill"), We = i("restFill"), Je = i("roundsInput"), Tt = i("roundsFill"), tn = i("roundsOut"), zn = i("totalLabel"), Ht = i("routineSummaryModal"), Ze = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Mt = Ze.map((e) => ({ ...e })), rt = [
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
  const nn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let bn = nn.map((e) => ({ ...e }));
  const ui = {
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
  }, st = Ga(l.data), ze = st.profiles;
  let pt = ze[st.selected] ? st.selected : st.order.find((e) => ze[e]) || "kettlebell";
  function Ga(e) {
    const a = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(ui)), c = (Array.isArray(a.order) ? a.order : Object.keys(r)).filter((p) => r[p]);
    return Object.keys(r).forEach((p) => {
      c.includes(p) || c.push(p);
    }), {
      v: 1,
      profiles: r,
      order: c,
      selected: a.selected || c[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : pi(a.energy)).map(Bo),
      settings: { ...a.settings || {} }
    };
  }
  function pi(e) {
    if (!Array.isArray(e)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((c) => {
      const p = new Date(c.at);
      if (isNaN(p)) return;
      const k = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0"), L = p.getHours() < 14 ? "morning" : "evening";
      if (r.some((J) => J.date === k && J.slot === L)) return;
      const I = a.indexOf(c.value) + 1;
      I > 0 && r.push({ date: k, slot: L, mood: null, energy: I, at: c.at });
    }), r;
  }
  function Bo(e) {
    if (e.scale === 100) return e;
    const a = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: a(e.mood), energy: a(e.energy), scale: 100 };
  }
  function an() {
    lt || (st.selected = pt, st.order = st.order.filter((e) => ze[e] && e !== ft), l.save(st));
  }
  function Qe() {
    return st.settings;
  }
  function Cn(e) {
    const a = ze[e];
    if (!a) return;
    pt = e;
    const r = i("workoutNameInput");
    if (r && (r.value = a.name), S.value = a.total, M.value = a.work, E.value = a.rest, Je.value = a.rounds || 1, a.customSequence) {
      const c = (a.sequence || []).map((k) => ({ ...k })), p = (k) => c.filter((L) => L.presetRole === k).map(({ presetRole: L, ...I }) => I);
      Mt = (a.warmup || p("warmup")).map((k) => ({ ...k })), bn = (a.cooldown || p("cooldown")).map((k) => ({ ...k })), rt = c.filter((k) => !k.presetRole), mo(a.preset || "movement", !1);
    } else
      S.min = 3, S.max = 40, S.step = 1, M.min = 20, M.max = 60, M.step = 5, E.min = 5, E.max = 30, E.step = 5, Mt = (a.warmup || Ze).map((c) => ({ ...c })), bn = (a.cooldown || nn).map((c) => ({ ...c })), rt = a.strength.map((c) => Array.isArray(c) ? (([p, k, L, I = !1]) => ({ id: p, name: k, group: L, kind: "work", hidden: !!I }))(c) : { ...c });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), F();
  }
  function mi(e, a, r) {
    const c = e.getBoundingClientRect(), p = c.width / 2, k = c.height / 2, L = a - p, I = r - k;
    let J = 1 / 0, ne = 1 / 0;
    L !== 0 && (J = p / Math.abs(L)), I !== 0 && (ne = k / Math.abs(I));
    const K = Math.min(Math.max(1 / Math.min(J, ne), 0), 1);
    let Y = Math.atan2(I, L) * (180 / Math.PI) + 90;
    return Y < 0 && (Y += 360), { edge: K, angle: Y };
  }
  function vt(e, a, r = !1) {
    const c = e.getBoundingClientRect(), p = a.clientX - c.left, k = a.clientY - c.top, { edge: L, angle: I } = mi(e, p, k), J = r ? 100 : L * 100;
    e.style.setProperty("--edge-proximity", J.toFixed(3)), e.style.setProperty("--cursor-angle", I.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || J >= 30);
  }
  function Be(e) {
    e.addEventListener("pointermove", (r) => vt(e, r, !1)), e.addEventListener("pointerenter", (r) => vt(e, r, !1)), e.addEventListener("pointerdown", (r) => vt(e, r, !0));
    const a = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", a), e.addEventListener("pointerup", a), e.addEventListener("pointercancel", a);
  }
  Be(i("addWorkoutPanel"));
  let lt = !1, ft = null;
  function Pe(e) {
    return String(e ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function Ua(e) {
    return e.summary ? e.summary : e.customSequence ? Sn(e.total) + " · custom move" : Sn(e.total) + " · " + zt(e.work) + " / " + zt(e.rest) + " · warm-up + cooldown";
  }
  function uo(e, a) {
    var k;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const c = a.activityCount ?? (((k = a.sequence) == null ? void 0 : k.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Pe(a.name) + '</div><div class="sub">' + Pe(Ua(a)) + '</div><span class="sourceTag">' + Pe(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Pe(a.name) + "</div></div>";
    const p = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(r, p), Be(r), r.addEventListener("click", (L) => {
      L.target.closest("button") || Cn(e);
    }), r.addEventListener("keydown", (L) => {
      (L.key === "Enter" || L.key === " ") && !L.target.closest("button") && (L.preventDefault(), Cn(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (L) => {
      L.stopPropagation(), Cn(e), ki(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (L) => {
      L.stopPropagation(), Cn(e), Hi();
    }), r;
  }
  function jn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), st.order.forEach((e) => {
      ze[e] && uo(e, ze[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === pt));
  }
  jn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    lt = !0, ft = "custom-" + Date.now(), ze[ft] = {
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
    }, Cn(ft), ki(!0);
  });
  let Ee = [], Ge = 0, Gt = 0, ln = 1, wn = !1, Rt = null, Ya = null, Et = !1, Pn = st.settings.upcomingCount ?? "all", po = "movement";
  function Nt(e, a, r) {
    return (Number(e) - a) / (r - a) * 100;
  }
  function zt(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function Sn(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function $t() {
    ie.style.width = Nt(S.value, Number(S.min), Number(S.max)) + "%", ce.style.width = Nt(M.value, Number(M.min), Number(M.max)) + "%", We.style.width = Nt(E.value, Number(E.min), Number(E.max)) + "%", V.textContent = zt(M.value), Q.textContent = zt(E.value);
    const e = Number(Je.value) || 1;
    Tt.style.width = Nt(e, 1, 10) + "%", zn.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Tn(e) {
    return e.filter((a) => !a.hidden);
  }
  function it(e) {
    const a = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    return (r ? r + ":" + String(c).padStart(2, "0") : c) + ":" + String(p).padStart(2, "0");
  }
  function Za(e) {
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
      const J = I.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return J ? (Number(J[1]) || 0) * 3600 + (Number(J[2]) || 0) * 60 + (Number(J[3]) || 0) : 0;
    }, k = p(a.searchParams.get("t") || a.searchParams.get("start")), L = p(a.searchParams.get("end"));
    return { id: c, start: k, end: L > k ? L : null };
  }
  function Gn(e, a) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || a || 300);
    const r = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > r ? Math.round(c - r) : Number(e.duration) || 300;
  }
  function _a(e, a) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(a === "hour" ? r * 3600 : a === "min" ? r * 60 : r);
  }
  function mo(e, a = !0) {
    po = e, n.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const r = ze[pt];
    r && (r.preset = e), e === "work" ? (S.min = 30, S.max = 480, S.step = 30, M.min = 300, M.max = 7200, M.step = 300, E.min = 60, E.max = 1800, E.step = 60, a && (S.value = 60, M.value = 1500, E.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (S.min = 3, S.max = 40, S.step = 1, M.min = 20, M.max = 60, M.step = 5, E.min = 5, E.max = 30, E.step = 5, a && (S.value = 20, M.value = 45, E.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), $t();
  }
  function C(e, a) {
    const r = po === "work";
    return e.map((c, p) => ({ ...c, id: a + "-" + p + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(M.value) }));
  }
  function D() {
    const e = ze[pt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !Mt.length && (Mt = C(Ze, "warm")), e.includeCooldown && !bn.length && (bn = C(nn, "cool")), F());
  }
  function H() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const a = Math.max(1, Ee.length - 1), r = Pn;
    e.innerHTML = "";
    for (let k = 1; k <= a; k++) {
      const L = document.createElement("option");
      L.value = String(k), L.textContent = String(k), e.appendChild(L);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const p = r === "all" ? "all" : String(Math.min(Number(r) || 1, a));
    e.value = p, Pn = p === "all" ? "all" : Number(p);
  }
  function F() {
    Number(S.value) * 60;
    const e = Number(M.value), a = Number(E.value), r = ze[pt], c = !!(r != null && r.customSequence), p = (c ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Tn(Mt), k = Tn(rt), L = c && !r.includeCooldown ? [] : Tn(bn);
    if (r && (r.total = Number(S.value), r.work = e, r.rest = a, r.rounds = Number(Je.value) || 1, r.customSequence ? (r.sequence = rt.map((we) => ({ ...we })), r.warmup = Mt.map((we) => ({ ...we })), r.cooldown = bn.map((we) => ({ ...we }))) : (r.strength = rt.map((we) => ({ ...we })), r.warmup = Mt.map((we) => ({ ...we })), r.cooldown = bn.map((we) => ({ ...we })))), r != null && r.customSequence) {
      const we = [...p.map((nt) => ({ ...nt, section: "warmup" })), ...k, ...L.map((nt) => ({ ...nt, section: "cooldown" }))].map((nt) => {
        if (nt.kind === "video") return { ...nt, duration: Gn(nt, e), rest: 0 };
        if (nt.kind === "rest") {
          const Jt = nt.useGlobalTiming === !0 ? a : Number(nt.duration) || a;
          return { ...nt, duration: Jt, rest: 0 };
        }
        const Xt = nt.useGlobalTiming === !1 && Number(nt.duration) || e;
        return { ...nt, duration: Xt, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Ee = [], we.forEach((nt, Xt) => {
        Ee.push(nt);
        const Jt = we[Xt + 1];
        nt.kind !== "rest" && Jt && Jt.kind !== "rest" && Ee.push({
          id: "auto-rest-" + Xt,
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
      Ee = [...p.map((we) => ({ ...we, section: "warmup" })), ...k, ...L.map((we) => ({ ...we, section: "cooldown" }))].map((we) => we.kind === "video" ? { ...we, duration: Gn(we, e), rest: 0 } : we.kind === "rest" ? { ...we, duration: we.useGlobalTiming === !0 ? a : Number(we.duration) || a, rest: 0 } : { ...we, duration: we.useGlobalTiming === !1 && Number(we.duration) || e, rest: a }), Ee.forEach((we, nt) => {
        var Xt;
        ((Xt = Ee[nt + 1]) == null ? void 0 : Xt.kind) === "rest" && (we.rest = 0);
      }), Ee.length && (Ee[Ee.length - 1].rest = 0);
    const I = Math.max(1, Math.min(10, Number(Je.value) || 1)), J = Ee, ne = (we) => I <= 1 ? null : we.section === "warmup" || we.presetRole === "warmup" ? "first" : we.section === "cooldown" || we.presetRole === "cooldown" ? "last" : we.kind === "video" && (we.videoRounds === "first" || we.videoRounds === "last") ? we.videoRounds : null, K = (we) => !!ne(we), Y = J.filter((we) => !K(we)), Me = J.filter(K), Ve = Y.length, Te = Y.reduce((we, nt) => we + nt.duration + nt.rest, 0), ye = Me.reduce((we, nt) => we + nt.duration + nt.rest, 0), ve = [
      Me.some((we) => we.section === "warmup" || we.presetRole === "warmup") && "warm-up",
      Me.some((we) => we.section === "cooldown" || we.presetRole === "cooldown") && "cooldown",
      Me.some((we) => we.kind === "video" && !we.section && !we.presetRole) && "video"
    ].filter(Boolean), dt = ve.length > 1 ? ve.slice(0, -1).join(", ") + " & " + ve[ve.length - 1] : ve[0] || "";
    Ee = [];
    const ct = (we, nt) => {
      const Xt = ne(we);
      return !Xt || (Xt === "first" ? nt === 1 : nt === I);
    };
    for (let we = 1; we <= I; we++)
      if (J.filter((nt) => ct(nt, we)).forEach((nt, Xt) => Ee.push({ ...nt, id: nt.id + (I > 1 ? "-r" + we : ""), round: we, roundIndex: Xt })), we < I && Ve)
        if (r != null && r.customSequence)
          Ee.push({ id: "round-break-" + we, name: "Rest", group: "Round " + (we + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: we, roundIndex: Ve, roundBreak: !0 });
        else {
          const nt = Ee[Ee.length - 1];
          nt.rest = a, nt.roundBreakAfter = !0;
        }
    $t();
    const _e = Ee.reduce((we, nt) => we + nt.duration + nt.rest, 0), ut = Math.round(Te / 60), yt = Math.round(_e / 60), et = I > 1 ? Sn(ut) + " × " + I + " rounds" + (ye ? " + " + zt(ye) + " " + dt : "") + " (" + Sn(yt) + ")" : Sn(yt), Ye = [p.length ? "warm-up" : "", L.length ? "cooldown" : ""].filter(Boolean), Kt = r != null && r.customSequence ? et + " · " + Ve + " items" + (Ye.length && !(I > 1 && ye) ? " · " + Ye.join(" + ") : "") : et + " · " + zt(e) + " / " + zt(a) + (Ye.length && !(I > 1 && ye) ? " · " + Ye.join(" + ") : "");
    se.textContent = zt(Te);
    const gn = Ee.filter((we) => !we.roundBreak).length, It = I > 1 ? gn + " activities · " + I + " rounds" : Ve + " activities";
    tn.textContent = I > 1 ? I + " rounds · " + Sn(yt) + " total" : "1 round", i("roundsCount").textContent = I, n.querySelectorAll("[data-rounds-step]").forEach((we) => {
      we.disabled = Number(we.dataset.roundsStep) < 0 ? I <= 1 : I >= 10;
    }), r && (r.summary = Kt, r.activityCount = Ve);
    const _o = n.querySelector(".workoutPanel.active .sub");
    _o && (_o.textContent = Kt), Ht.textContent = Kt, or(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((we) => we.textContent = It), $t(), mt(), gi(), Fo(), H(), lt && fe(), ke.workout.classList.contains("active") && !Rt && ti();
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
  let le = null, Ae = null;
  function Fe(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ke(e = !1) {
    const a = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), e && a.select());
  }
  function Ue(e, a, r = {}) {
    const c = e.kind === "rest", p = e.kind === "video", k = p ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, L = Number(c ? E.value : M.value), I = Fe(p ? e.useVideoLength === !1 ? e.duration : Gn({ ...e, useVideoLength: !0 }) : k ? L : e.duration || L), J = p && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ne = p ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Pe(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Pe(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([_e, ut]) => '<option value="' + _e + '"' + ((e.videoRounds || "every") === _e ? " selected" : "") + ">" + ut + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Pe(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Pe(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', K = p ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (J ? " · " + it(Gn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + zt(L), Y = document.createElement("div");
    Y.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), Y.dataset.index = a, Y.dataset.id = e.id;
    const Me = r.isNew ?? (Ae == null ? void 0 : Ae.item) === e, Ve = r.sheet ? '<div class="moveEditActions sheetActions">' + (Me ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Pe(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Me ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    Y.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (p ? " videoFields" : "") + '">' + ne + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (k ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Pe(K) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + I.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((_e) => '<option value="' + _e + '"' + (_e === I.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[_e] + "</option>").join("") + "</select></div></div>" + Ve + "</div>";
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
      Me && _t(), le = null, F();
    }, dt = () => {
      var yt;
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
      if (e.useGlobalTiming = ut, ut || (e.duration = Math.max(c ? 5 : 1, _a(Te("dur").value, Te("unit").value))), r.sheet) {
        (yt = r.onSaved) == null || yt.call(r);
        return;
      }
      Me && (Ae = null), le = null, F(), Lt(Me ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, ct = () => {
      var Ye;
      const _e = Te("url").value.trim(), ut = Za(_e);
      if (!ut) {
        Te("urlError").hidden = !1, Te("url").classList.add("invalid"), Te("url").focus();
        return;
      }
      const yt = ut.id !== e.videoId;
      e.url = _e, e.videoId = ut.id, e.start = ut.start, e.end = ut.end, yt && (e.videoDuration = null, e.videoError = null);
      const et = Te("name").value.trim();
      e.autoName = !et, e.name = et || (yt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Te("rounds").value, e.useVideoLength = Te("global").checked, e.useVideoLength || (e.duration = Math.max(5, _a(Te("dur").value, Te("unit").value))), r.sheet ? (Ye = r.onSaved) == null || Ye.call(r) : (Me && (Ae = null), le = null, F(), Lt(Me ? "Video added" : "Video updated")), (yt || !e.videoDuration || e.autoName && !e.videoTitle) && Ie(e);
    };
    if (p && Te("url").addEventListener("input", () => {
      Te("urlError").hidden = !0, Te("url").classList.remove("invalid");
    }), Y.querySelector("[data-a=cancel]").addEventListener("click", ve), Y.querySelector("[data-a=save]").addEventListener("click", dt), r.sheet && !Me) {
      Y.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ut;
        return (ut = r.onHide) == null ? void 0 : ut.call(r);
      });
      const _e = Y.querySelector("[data-a=remove]");
      jt(_e, _e.querySelector(".removeFill"), 1200, () => {
        var ut;
        return (ut = r.onRemove) == null ? void 0 : ut.call(r);
      });
    }
    return Y.addEventListener("keydown", (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), _e.stopPropagation(), ve()), _e.key === "Enter" && _e.target.matches("input") && (_e.preventDefault(), dt());
    }), Y;
  }
  function De(e, a) {
    const r = i(a);
    r.innerHTML = "", e.forEach((c, p) => {
      if (c === le && !ea()) {
        r.appendChild(Ue(c, p));
        return;
      }
      const k = document.createElement("div");
      k.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (js(c) ? " noMeta" : ""), k.dataset.index = p, k.dataset.id = c.id;
      const L = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : zt(c.duration) : c.useGlobalTiming === !1 ? zt(c.duration) : "Global timing", I = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", J = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + zt(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? it(Gn(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + L, ne = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Pe(c.name) + '. Drag, or use the up and down arrow keys">' + ue + "</button>", K = '<div class="moveText"><div class="moveItemName">' + Pe(c.name) + I + '</div><div class="moveMeta">' + Pe(J) + "</div></div>", Y = (Te) => Te.addEventListener("keydown", (ye) => {
        var ct, _e;
        if (ye.key !== "ArrowUp" && ye.key !== "ArrowDown") return;
        ye.preventDefault();
        const ve = e.indexOf(c), dt = ve + (ye.key === "ArrowUp" ? -1 : 1);
        dt < 0 || dt >= e.length || (e.splice(ve, 1), e.splice(dt, 0, c), F(), (_e = (ct = i(a).children[dt]) == null ? void 0 : ct.querySelector(".dragHandle")) == null || _e.focus());
      });
      if (ea()) {
        k.classList.add("phoneRow"), k.tabIndex = 0, k.setAttribute("role", "button"), k.setAttribute("aria-label", "Edit " + (c.name || "step")), k.innerHTML = ne + K + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Te = k.querySelector(".dragHandle");
        Te.addEventListener("pointerdown", (ye) => tt(ye, k, r, e)), Y(Te), k.addEventListener("click", (ye) => {
          ye.target.closest(".dragHandle") || Pr(c, e);
        }), k.addEventListener("keydown", (ye) => {
          ye.key === "Enter" && ye.target === k && (ye.preventDefault(), Pr(c, e));
        }), r.appendChild(k);
        return;
      }
      k.innerHTML = ne + K + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Pe(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Pe(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + be + "</span></button></div>", k.querySelector(".editBtn").addEventListener("click", () => {
        _t(), le = c, F(), Ke();
      }), k.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, F();
      });
      const Me = k.querySelector(".removeBtn");
      jt(Me, Me.querySelector(".removeFill"), 1200, () => {
        const Te = e.indexOf(c);
        Te < 0 || (e.splice(Te, 1), F(), Lt("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Te, e.length), 0, c), F();
        } }));
      });
      const Ve = k.querySelector(".dragHandle");
      Ve.addEventListener("pointerdown", (Te) => tt(Te, k, r, e)), Y(Ve), r.appendChild(k);
    });
  }
  const Ne = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Re = (e) => {
    var a;
    try {
      (a = navigator.vibrate) == null || a.call(navigator, e);
    } catch {
    }
  };
  function tt(e, a, r, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const p = e.currentTarget, k = e.pointerId, L = !Ne();
    try {
      p.setPointerCapture(k);
    } catch {
    }
    const I = a.closest(".exerciseScroller") || Un(a), J = r.style.position;
    r.style.position = "relative";
    const ne = [...r.children].filter((at) => at.classList.contains("moveRow")), K = ne.indexOf(a), Y = parseFloat(getComputedStyle(r).rowGap) || 8, Me = a.offsetHeight, Ve = Me + Y, Te = ne.map((at) => at.offsetTop), ye = ne.map((at) => at.offsetHeight), ve = () => r.getBoundingClientRect().top, dt = r.getBoundingClientRect().width, ct = e.clientY - (ve() + Te[K]), _e = e.clientX;
    let ut = e.clientY, yt = e.clientX, et = ve() + Te[K], Ye = 0, Kt = 0, gn = 0, It = 1, _o = 0, we = K, nt = !1, Xt = 0, Jt = !1, ss = !1, Zi = Te[K];
    r.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", Re(8);
    const ls = () => {
      const at = ut - ct + Me / 2 - ve();
      let gt = 0;
      return ne.forEach((Dt, En) => {
        En !== K && at > Te[En] + ye[En] / 2 && gt++;
      }), gt;
    }, ds = () => {
      ne.forEach((at, gt) => {
        if (gt === K) return;
        const Dt = K < we && gt > K && gt <= we ? -Ve : K > we && gt >= we && gt < K ? Ve : 0;
        at.style.transform = Dt ? "translateY(" + Dt + "px)" : "";
      });
    }, Lr = () => {
      const at = r.getBoundingClientRect(), gt = Math.abs(yt - _e) > Math.max(80, dt * 0.3) || yt < at.left - 24 || yt > at.right + 24;
      gt !== nt && (nt = gt, a.classList.toggle("willReturn", gt), Re(gt ? 10 : 4));
      const Dt = nt ? K : ls();
      Dt !== we && (we = Dt, ds(), nt || Re(4));
    }, Ao = () => {
      if (we === K) return Te[K];
      const at = ne.filter((Dt, En) => En !== K);
      let gt = Te[0];
      for (let Dt = 0; Dt < we; Dt++) gt += at[Dt].offsetHeight + Y;
      return gt;
    }, Ki = () => {
      const at = L ? Math.min(Math.abs(Ye) / 40, 1) : 0, gt = L && !Jt ? Math.max(-3, Math.min(3, gn * 0.6)) : 0;
      a.style.transform = "translate(" + Kt.toFixed(2) + "px," + (et - (ve() + Te[K])).toFixed(2) + "px) rotate(" + gt.toFixed(2) + "deg) scale(" + (It * (1 - 0.04 * at)).toFixed(4) + "," + (It * (1 + 0.06 * at)).toFixed(4) + ")";
    }, Xe = () => {
      Xt = requestAnimationFrame(Xe);
      const at = yt - _e, gt = Jt ? ve() + Zi : ut - ct, Dt = Jt ? 0 : nt ? at * 0.9 : Math.max(-22, Math.min(22, at * 0.22)), En = Jt ? 1 : nt ? 0.97 : 1.035;
      if (!L) {
        et = gt, Kt = Jt ? 0 : Dt, It = 1, Ki(), Jt && Ft();
        return;
      }
      const tu = Jt ? 0.24 : 0.2, nu = Jt ? 0.62 : 0.68;
      Ye = (Ye + (gt - et) * tu) * nu, et += Ye, gn = (gn + (Dt - Kt) * 0.16) * 0.7, Kt += gn, _o = (_o + (En - It) * 0.22) * 0.6, It += _o, Ki(), Jt && Math.abs(Ye) < 0.15 && Math.abs(gt - et) < 0.5 && Math.abs(Kt) < 0.5 && Math.abs(It - 1) < 3e-3 && Ft();
    }, St = setInterval(() => {
      if (!I || Jt) return;
      const at = I.getBoundingClientRect(), gt = 56, Dt = ut < at.top + gt ? -10 : ut > at.bottom - gt ? 10 : 0;
      Dt && (I.scrollTop += Dt, Lr());
    }, 30);
    function Ft() {
      if (ss) return;
      ss = !0, cancelAnimationFrame(Xt);
      const at = we !== K, gt = a.dataset.id;
      if (r.classList.remove("reordering"), ne.forEach((En) => {
        En.style.transition = "none", En.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), r.style.position = J, at) {
        const [En] = c.splice(K, 1);
        c.splice(we, 0, En);
      }
      F();
      const Dt = gt && r.querySelector('.moveRow[data-id="' + gt + '"]');
      Dt && L && Dt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), at && Lt("Order saved");
    }
    const Qt = (at) => {
      if (at.pointerId === k) {
        if (at.pointerType === "mouse" && at.buttons === 0) {
          Xn();
          return;
        }
        ut = at.clientY, yt = at.clientX, Lr();
      }
    }, An = (at) => {
      at.pointerId === k && Xn();
    };
    function Xn() {
      Jt || (window.removeEventListener("pointermove", Qt, !0), window.removeEventListener("pointerup", An, !0), window.removeEventListener("pointercancel", An, !0), p.removeEventListener("lostpointercapture", Xn), clearInterval(St), nt && we !== K && (we = K, ds()), Zi = Ao(), Jt = !0, Re(6), setTimeout(Ft, 800));
    }
    window.addEventListener("pointermove", Qt, !0), window.addEventListener("pointerup", An, !0), window.addEventListener("pointercancel", An, !0), p.addEventListener("lostpointercapture", Xn), Xt = requestAnimationFrame(Xe), Ki();
  }
  function mt() {
    var p, k, L, I;
    const e = ze[pt], a = (p = i("warmupList")) == null ? void 0 : p.closest("section"), r = (k = i("cooldownList")) == null ? void 0 : k.closest("section"), c = (I = (L = i("strengthList")) == null ? void 0 : L.closest("section")) == null ? void 0 : I.querySelector(".sectionTitle");
    e != null && e.customSequence ? (a && (a.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (a && (a.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), c && (c.textContent = "Kettlebell work")), De(Mt, "warmupList"), De(rt, "strengthList"), De(bn, "cooldownList");
  }
  function _t() {
    if (!Ae) return;
    const { item: e, arr: a } = Ae;
    Ae = null;
    const r = a.indexOf(e);
    r >= 0 && a.splice(r, 1), le === e && (le = null);
  }
  function bt(e) {
    return e.id === "warmupList" ? { arr: Mt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: bn, kind: "cooldown", group: "Cooldown" } : { arr: rt, kind: "work", group: "" };
  }
  function Ut(e, a) {
    const r = bt(a), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(E.value) } : { id: "movement-" + c, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(M.value) };
  }
  const yn = "cubic-bezier(.34,1.46,.64,1)";
  function In(e, a) {
    if (Ne() || !e) {
      a();
      return;
    }
    const r = (k) => {
      var L;
      return ((L = k.dataset) == null ? void 0 : L.id) || k;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], p = new Map(c().map((k) => [r(k), k.getBoundingClientRect().top]));
    a(), c().forEach((k) => {
      const L = p.get(r(k));
      if (L === void 0) return;
      const I = L - k.getBoundingClientRect().top;
      Math.abs(I) < 0.5 || k.animate([{ transform: "translateY(" + I + "px)" }, { transform: "none" }], { duration: 440, easing: yn });
    });
  }
  function Ln(e, a) {
    if (!e || Ne()) return;
    const r = e.offsetHeight, c = Math.max(0, r - (a || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: yn });
  }
  function Hn(e, a, r, c) {
    const { arr: p } = bt(a), k = Ut(e, a);
    p.splice(Math.max(0, Math.min(r, p.length)), 0, k), Ae = { item: k, arr: p }, le = k, In(a.closest(".exerciseScroller,.createStepSlot") || a, () => F());
    const L = a.querySelector(".moveRow.editing");
    return Ln(L, c), Ke(e === "rest"), L;
  }
  function Un(e) {
    for (let a = e; a && a.nodeType === 1; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if (/(auto|scroll)/.test(r) && a.scrollHeight > a.clientHeight) return a;
    }
    return null;
  }
  const Aa = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function ho(e, a) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + ue + '</span><span class="addGhostText"><strong>' + Pe(a[0]) + "</strong><small>" + Pe(a[1]) + "</small></span>", i("workoutModal").appendChild(r), r;
  }
  function dn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ht(e, a, r, c) {
    (le || Ae) && (_t(), le = null, F());
    const p = e.getBoundingClientRect(), k = ho(a, Aa[a]);
    k.setAttribute("aria-hidden", "true"), k.style.width = p.width + "px", k.style.height = p.height + "px", k.style.transform = "translate(" + p.left + "px," + p.top + "px)", e.classList.add("lifting");
    const L = Un(e);
    return Fn({
      ghost: k,
      origin: p,
      sx: r,
      sy: c,
      scroller: L,
      column: e.closest(".exerciseScroller,.createFlow") || L,
      home: () => e.getBoundingClientRect(),
      onDrop: (I, J, ne) => {
        dn(k), e.classList.remove("lifting"), Hn(a, I, J, ne);
      },
      onReturn: () => {
        dn(k), e.classList.remove("lifting");
      }
    });
  }
  function Fn({ ghost: e, origin: a, sx: r, sy: c, scroller: p, column: k, home: L, onDrop: I, onReturn: J, rowLook: ne = !1 }) {
    var Ki;
    const K = !Ne(), Y = ((Ki = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Ki.offsetHeight) || 80, Me = r - a.left, Ve = c - a.top, Te = 44;
    let ye = r, ve = c, dt = a.left, ct = a.top, _e = 0, ut = 0, yt = !K, et = null, Ye = null, Kt = -1, gn = 0, It = null;
    const _o = () => ["warmupList", "strengthList", "cooldownList"].map((Xe) => i(Xe)).filter((Xe) => Xe && Xe.getClientRects().length && !Xe.closest("[hidden]")), we = (Xe) => {
      if (Xe === et) return;
      et = Xe, e.classList.toggle("overList", !!Xe || ne);
      const St = Xe ? Xe.getBoundingClientRect().width : a.width;
      e.style.width = St + "px", e.style.height = (Xe ? Y : a.height) + "px";
    }, nt = (Xe) => {
      Xe.classList.add("leaving"), Xe.style.height = "0px", Xe.style.marginTop = "-8px", setTimeout(() => Xe.remove(), K ? 320 : 0);
    }, Xt = (Xe, St, Ft) => {
      if (Ye && Ye.parentNode === Xe && Kt === Ft || (Ye && (nt(Ye), Ye = null, Kt = -1), !Xe)) return;
      const Qt = document.createElement("div");
      Qt.className = "dropSlot", Xe.insertBefore(Qt, St), Ye = Qt, Kt = Ft, Qt.getBoundingClientRect(), Qt.style.height = Y + "px", Qt.style.marginTop = "0px";
    }, Jt = () => {
      let Xe = null, St = 1 / 0;
      for (const Xn of _o()) {
        const at = Xn.getBoundingClientRect();
        if (ye < at.left - 48 || ye > at.right + 48) continue;
        const gt = at.top - 28, Dt = at.bottom + 28, En = ve < gt ? gt - ve : ve > Dt ? ve - Dt : 0;
        En < St && (St = En, Xe = Xn);
      }
      const Ft = k == null ? void 0 : k.getBoundingClientRect(), An = Ft && ye >= Ft.left && ye <= Ft.right && ve >= Ft.top && ve <= Ft.bottom || St === 0 ? Xe : null;
      if (An) {
        const Xn = [...An.children].filter((gt) => gt.classList.contains("moveRow"));
        let at = Xn.findIndex((gt) => {
          const Dt = gt.getBoundingClientRect();
          return ve < Dt.top + Dt.height / 2;
        });
        at < 0 && (at = Xn.length), Xt(An, Xn[at] || null, at);
      } else Xt(null);
      we(An);
    }, ss = () => {
      if (It) return It.aim();
      if (et) {
        const Xe = et.getBoundingClientRect();
        let St = ve - Y / 2;
        return Ye && (St = St * 0.6 + Ye.getBoundingClientRect().top * 0.4), { x: Xe.left, y: St };
      }
      return { x: ye - Me, y: ve - Ve };
    }, Zi = (Xe, St, Ft, Qt) => {
      e.style.transform = "translate(" + dt + "px," + ct + "px) rotate(" + Xe + "deg) rotate(" + St + "rad) scale(" + Ft + "," + Qt + ") rotate(" + -St + "rad)";
    }, ls = () => {
      if (gn = requestAnimationFrame(ls), !yt) {
        const at = ye - r, gt = ve - c, Dt = Math.min(Math.hypot(at, gt) / Te, 1);
        dt = a.left + at * 0.35, ct = a.top + gt * 0.35, Zi(0, Math.atan2(gt, at), 1 + 0.155 * Dt, 1 - 0.1 * Dt);
        return;
      }
      const Xe = ss();
      if (!K) {
        dt = Xe.x, ct = Xe.y, Zi(0, 0, 1, 1), It && (cancelAnimationFrame(gn), It.done());
        return;
      }
      const St = It ? It.k : 0.17, Ft = It ? It.d : 0.7;
      _e = (_e + (Xe.x - dt) * St) * Ft, ut = (ut + (Xe.y - ct) * St) * Ft, dt += _e, ct += ut;
      const Qt = Math.hypot(_e, ut), An = Math.min(Qt / 48, 1), Xn = et || It ? 0 : Math.max(-5, Math.min(5, _e * 0.32));
      Zi(Xn, Math.atan2(ut, _e), 1 + 0.1 * An, 1 - 0.063 * An), It && Qt < 0.15 && Math.hypot(Xe.x - dt, Xe.y - ct) < 0.6 && (cancelAnimationFrame(gn), It.done());
    }, ds = setInterval(() => {
      if (!p || It) return;
      const Xe = p.getBoundingClientRect(), St = 64, Ft = ve < Xe.top + St ? -(Xe.top + St - ve) / 4 : ve > Xe.bottom - St ? (ve - (Xe.bottom - St)) / 4 : 0;
      Ft && (p.scrollTop += Math.max(-18, Math.min(18, Ft)), Jt());
    }, 30);
    gn = requestAnimationFrame(ls);
    let Lr = !1;
    const Ao = (Xe, St) => {
      if (Lr) return;
      Lr = !0, cancelAnimationFrame(gn);
      const Ft = Ye ? Ye.offsetHeight : Y;
      !Xe && Ye && (Ye.remove(), Ye = null), Xe ? I(Xe, St, Ft) : J();
    };
    return {
      move(Xe, St) {
        ye = Xe, ve = St, !yt && Math.hypot(ye - r, ve - c) > Te && (yt = !0, _e = (ye - r) * 0.085, ut = (ve - c) * 0.085), yt && Jt();
      },
      drop(Xe) {
        clearInterval(ds);
        const St = et, Ft = Kt;
        if (!Xe && St && Ye) {
          const Qt = Ye;
          It = { k: 0.24, d: 0.62, aim: () => {
            const An = Qt.getBoundingClientRect();
            return { x: An.left, y: An.top };
          }, done: () => Ao(St, Ft) }, setTimeout(() => Ao(St, Ft), 650), K || (cancelAnimationFrame(gn), Ao(St, Ft));
          return;
        }
        Xt(null), we(null), It = { k: 0.2, d: 0.66, aim: () => {
          const Qt = L();
          return { x: Qt.left, y: Qt.top };
        }, done: () => Ao(null) }, setTimeout(() => Ao(null), 650), K || (cancelAnimationFrame(gn), Ao(null));
      }
    };
  }
  function Jn(e, a) {
    let r = !1;
    e.addEventListener("click", (c) => {
      if (r) {
        r = !1, c.preventDefault();
        return;
      }
      if (ea()) {
        Io(a);
        return;
      }
      const p = i("strengthList"), k = Hn(a, p, bt(p).arr.length, 0);
      k == null || k.scrollIntoView({ block: "nearest", behavior: Ne() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const p = c.pointerId, k = c.clientX, L = c.clientY;
      let I = null, J = !1;
      try {
        e.setPointerCapture(p);
      } catch {
      }
      const ne = (ve) => {
        if (ve.pointerId === p) {
          if (ve.pointerType === "mouse" && ve.buttons === 0) {
            ye(!1);
            return;
          }
          if (!I) {
            if (Math.hypot(ve.clientX - k, ve.clientY - L) < 6) return;
            I = ht(e, a, k, L);
          }
          I.move(ve.clientX, ve.clientY);
        }
      }, K = (ve) => {
        ve.pointerId === p && ye(!1);
      }, Y = (ve) => {
        ve.pointerId === p && ye(!0);
      }, Me = () => ye(!1), Ve = () => ye(!0), Te = (ve) => {
        ve.key === "Escape" && I && (ve.preventDefault(), ve.stopPropagation(), ye(!0));
      };
      function ye(ve) {
        if (!J && (J = !0, window.removeEventListener("pointermove", ne, !0), window.removeEventListener("pointerup", K, !0), window.removeEventListener("pointercancel", Y, !0), window.removeEventListener("keydown", Te, !0), window.removeEventListener("blur", Ve), e.removeEventListener("lostpointercapture", Me), I)) {
          const dt = I;
          I = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), dt.drop(ve);
        }
      }
      window.addEventListener("pointermove", ne, !0), window.addEventListener("pointerup", K, !0), window.addEventListener("pointercancel", Y, !0), window.addEventListener("keydown", Te, !0), window.addEventListener("blur", Ve), e.addEventListener("lostpointercapture", Me);
    });
  }
  const Qn = (fd = window.matchMedia) == null ? void 0 : fd.call(window, "(max-width: 620px)");
  function ea() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Po = (e) => e.charAt(0).toUpperCase() + e.slice(1), wa = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let cn = null, Bt = null;
  function hi(e, a, r, c) {
    on(), i("sheetTitle").textContent = e;
    const p = i("sheetBody");
    p.innerHTML = "", p.appendChild(a), cn = r || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !p.contains(a)) return;
      const k = c ? p.querySelector("input[data-f=url],input[data-f=name]") : p.querySelector("button,input,select");
      k == null || k.focus({ preventScroll: !0 });
    }, Ne() ? 0 : 360);
  }
  function on() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const a = cn;
    cn = null, a == null || a(), setTimeout(Ka, 0);
  }
  i("sheetScrim").addEventListener("click", on), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), on());
  });
  function Pr(e, a) {
    const r = Ue(e, a.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        on(), F(), Lt(Po(wa(e)) + " updated");
      },
      onCancel: on,
      onHide() {
        e.hidden = !e.hidden, on(), F(), Lt((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        on();
        const c = a.indexOf(e);
        c < 0 || (a.splice(c, 1), F(), Lt("Removed " + e.name, { label: "Undo", run: () => {
          a.splice(Math.min(c, a.length), 0, e), F();
        } }));
      }
    });
    hi("Edit " + wa(e), r, null, !1);
  }
  function fo() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, r, c, p]) => {
      const k = document.createElement("button");
      k.type = "button", k.className = "sheetChoice", k.innerHTML = '<span class="timeIcon" aria-hidden="true">' + xe(r) + "</span><span><strong>" + c + "</strong><small>" + p + "</small></span>", k.addEventListener("click", () => Io(a)), e.appendChild(k);
    }), hi("Add to the move", e, null, !1);
  }
  function Io(e) {
    Bt && Ho();
    const a = Ut(e, i("strengthList")), r = Ue(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        on(), Ts(a, e);
      },
      onCancel: on
    });
    hi("New " + wa(a), r, null, !0);
  }
  const Ea = i("workoutModal").querySelector(".modalStatic"), ar = { parent: Ea.parentNode, next: Ea.nextSibling };
  function Ir() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Ea);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", on), e.appendChild(a), hi("Setup", e, () => {
      ar.parent.insertBefore(Ea, ar.next), or();
    }, !1);
  }
  function or() {
    var a, r;
    const e = i("setupSummaryName");
    e && (e.textContent = (((a = i("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((r = ze[pt]) == null ? void 0 : r.name) || "Move", i("setupSummaryMeta").textContent = Ht.textContent);
  }
  i("setupSummary").addEventListener("click", Ir), i("addFab").addEventListener("click", fo);
  function Hr() {
    const e = i("strengthList");
    return Un(e) || e.closest(".exerciseScroller");
  }
  function fi() {
    const e = i("strengthList").getBoundingClientRect(), a = (Hr() || i("strengthList")).getBoundingClientRect(), r = (Bt == null ? void 0 : Bt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(a.top + 12, Math.min(a.bottom - r - 96, a.top + a.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function Ts(e, a) {
    var I;
    const r = ho(a, [e.name || Aa[a][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Pe(e.name) + '">✕</button>', r.appendChild(c), Bt = { item: e, type: a, ghost: r };
    const p = ((I = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : I.offsetHeight) || 64;
    r.style.width = i("strengthList").getBoundingClientRect().width + "px", r.style.height = p + "px";
    const k = fi(), L = xn.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + k.left + "px," + L + "px)", r.getBoundingClientRect(), Ne() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + k.left + "px," + k.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", Ho), c.querySelector("[data-a=discard]").addEventListener("click", _s), r.addEventListener("pointerdown", Ls);
  }
  function Ls(e) {
    if (!Bt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: a, ghost: r } = Bt, c = e.pointerId;
    try {
      r.setPointerCapture(c);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const p = r.getBoundingClientRect(), k = Hr(), L = Fn({
      ghost: r,
      origin: { left: p.left, top: p.top, width: p.width, height: p.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: k,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || k,
      rowLook: !0,
      home: fi,
      onDrop: (ye, ve, dt) => {
        Bt = null, dn(r), ir(a, ye, ve, dt);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let I = !1;
    const J = (ye) => {
      if (ye.pointerId === c) {
        if (ye.pointerType === "mouse" && ye.buttons === 0) {
          Te(!1);
          return;
        }
        L.move(ye.clientX, ye.clientY);
      }
    }, ne = (ye) => {
      ye.pointerId === c && Te(!1);
    }, K = (ye) => {
      ye.pointerId === c && Te(!0);
    }, Y = () => Te(!1), Me = () => Te(!0), Ve = (ye) => {
      ye.key === "Escape" && (ye.preventDefault(), Te(!0));
    };
    function Te(ye) {
      I || (I = !0, window.removeEventListener("pointermove", J, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", K, !0), window.removeEventListener("keydown", Ve, !0), window.removeEventListener("blur", Me), r.removeEventListener("lostpointercapture", Y), L.drop(ye));
    }
    window.addEventListener("pointermove", J, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", K, !0), window.addEventListener("keydown", Ve, !0), window.addEventListener("blur", Me), r.addEventListener("lostpointercapture", Y);
  }
  function ir(e, a, r, c) {
    const p = bt(a);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = p.kind, p.group && (!e.group || e.group === "Movement") && (e.group = p.group)), p.arr.splice(Math.max(0, Math.min(r, p.arr.length)), 0, e), In(a.closest(".exerciseScroller,.createStepSlot") || a, () => F()), Ln(a.querySelector('.moveRow[data-id="' + e.id + '"]'), c), Lt(Po(wa(e)) + " added");
  }
  function Ho() {
    var c;
    if (!Bt) return;
    const { item: e, ghost: a } = Bt;
    Bt = null, dn(a);
    const r = i("strengthList");
    ir(e, r, bt(r).arr.length, 0), (c = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Ne() ? "auto" : "smooth" });
  }
  function _s() {
    if (!Bt) return;
    const e = Bt.ghost;
    Bt = null, dn(e), Lt("Discarded");
  }
  function Fr() {
    Bt && (Bt.ghost.remove(), Bt = null);
  }
  window.addEventListener("resize", () => {
    if (Bt != null && Bt.ghost.classList.contains("hovering")) {
      const e = fi();
      Bt.ghost.style.width = e.width + "px", Bt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (gd = Qn == null ? void 0 : Qn.addEventListener) == null || gd.call(Qn, "change", () => {
    on(), Bt && !ea() && Ho(), mt();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ka() {
    const e = i("workoutModal"), a = window.visualViewport;
    if (!e.classList.contains("open") || !ea()) {
      $a();
      return;
    }
    const r = a ? a.offsetTop : 0, c = a ? a.offsetLeft : 0, p = a ? a.width : window.innerWidth, k = a ? a.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: p + "px", height: k + "px", top: r + "px", left: c + "px" });
    const L = e.getBoundingClientRect();
    Math.abs(L.top - r) > 0.5 && (e.style.top = 2 * r - L.top + "px"), Math.abs(L.left - c) > 0.5 && (e.style.left = 2 * c - L.left + "px");
  }
  function $a() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (vd = window.visualViewport) == null || vd.addEventListener("resize", Ka), (bd = window.visualViewport) == null || bd.addEventListener("scroll", Ka), window.addEventListener("resize", Ka), window.addEventListener("scroll", Ka, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ka, 250));
  function gi() {
    rt.length > 0;
    const e = i("addMovementBtn"), a = i("addRestBtn");
    e && (e.innerHTML = ue + "<span>Add movement</span>"), a && (a.innerHTML = ue + "<span>Add rest</span>");
    const r = i("addVideoBtn");
    r && (r.innerHTML = ue + "<span>Add video</span>");
  }
  function Fo() {
    const e = i("useGlobalTiming").checked, a = i("addMovementDuration"), r = i("addMovementUnit");
    a.disabled = e, r.disabled = e, a.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + zt(M.value);
    const c = i("useGlobalRestTiming").checked, p = i("addRestDuration"), k = i("addRestUnit");
    p.disabled = c, k.disabled = c, p.parentElement.style.opacity = c ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + zt(E.value);
  }
  let Oo = "movement";
  function Wo(e) {
    Oo = e;
    const a = i("movementFields"), r = i("restFields");
    a.hidden = e !== "movement", r.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Fo();
  }
  function rr() {
    ze[pt];
    const e = lt ? !0 : i("useGlobalTiming").checked, a = e ? Number(M.value) : _a(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), r = lt ? !0 : i("useGlobalRestTiming").checked, c = r ? Number(E.value) : _a(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Oo === "rest") {
      const p = i("addRestTitle").value.trim() || "Rest", k = i("addRestGroup").value.trim() || "Rest";
      rt.push({
        id: "rest-" + Date.now(),
        name: p,
        group: k,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, c || Number(E.value))
      }), F(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Lt("Rest added"), lt && (W("movements"), fe());
    } else {
      const p = i("addMovementInput").value.trim();
      if (!p) return;
      const k = i("addMovementGroup").value.trim() || "Movement";
      rt.push({
        id: "movement-" + Date.now(),
        name: p,
        group: k,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, a || Number(M.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", F(), i("movementCreator").hidden = !0, Lt("Movement added"), lt && (W("movements"), fe());
    }
    gi();
  }
  let sr = null;
  function Lt(e, a) {
    const r = i("toast");
    r.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, r.appendChild(c), a) {
      const p = document.createElement("button");
      p.type = "button", p.className = "toastAction", p.textContent = a.label, p.addEventListener("click", () => {
        a.run(), r.classList.remove("show", "withAction"), clearTimeout(sr);
      }), r.appendChild(p);
    }
    r.classList.toggle("withAction", !!a), r.classList.add("show"), clearTimeout(sr), sr = setTimeout(() => r.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Or = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], As = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Wr(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Xa(e, a) {
    return Or[Wr(a)];
  }
  function Es(e) {
    return As[Wr(e)];
  }
  function Pt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Da() {
    return { morning: Qe().morningTime || "08:00", evening: Qe().eveningTime || "19:00" };
  }
  function Ja(e) {
    const [a, r] = String(e).split(":").map(Number);
    return (a || 0) * 60 + (r || 0);
  }
  function Ds(e) {
    const a = Da();
    return e.getHours() * 60 + e.getMinutes() >= Ja(a.evening) ? "evening" : "morning";
  }
  function qo(e, a) {
    return st.checkins.find((r) => r.date === e && r.slot === a);
  }
  function vi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Qa() {
    const e = /* @__PURE__ */ new Date(), a = Pt(e), r = Ds(e), c = Da(), p = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && p < Ja(c.morning) || vi(qo(a, r)) ? null : r;
  }
  const ta = i("checkinModal"), na = i("checkinTab"), qr = i("checkinBadge"), Ra = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Vr(e) {
    const { input: a, fill: r } = Ra[e];
    r.style.width = a.value + "%", a.setAttribute("aria-valuetext", Xa(e, a.value));
  }
  Object.keys(Ra).forEach((e) => Ra[e].input.addEventListener("input", () => Vr(e)));
  let aa = null;
  function zr() {
    const e = Da(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes();
    return r < Ja(e.morning) ? "Next check-in at " + e.morning : r < Ja(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Rs() {
    const e = Da(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes(), c = (p, k) => {
      const [L, I] = p.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (k ? 1 : 0), L, I);
    };
    return r < Ja(e.morning) ? { date: c(e.morning), time: e.morning } : r < Ja(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let eo = null, bi = null;
  function jr() {
    if (Qa()) {
      xa(), Ba();
      return;
    }
    const e = Rs(), a = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    i("peekCountdown").textContent = r + ":" + String(c).padStart(2, "0") + ":" + String(p).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Ns() {
    jr(), na.classList.add("peek"), clearInterval(bi), bi = setInterval(jr, 1e3), clearTimeout(eo), eo = setTimeout(xa, 6e3);
  }
  function xa() {
    na.classList.remove("peek"), clearInterval(bi), clearTimeout(eo);
  }
  function lr() {
    const e = Qa();
    if (!e) {
      na.classList.contains("peek") ? xa() : Ns();
      return;
    }
    aa = { date: Pt(/* @__PURE__ */ new Date()), slot: e };
    const r = qo(aa.date, e), c = st.checkins.find((p) => vi(p));
    Object.keys(Ra).forEach((p) => {
      Ra[p].input.value = (r == null ? void 0 : r[p]) ?? (c == null ? void 0 : c[p]) ?? 50, Vr(p);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ta.classList.add("open"), ta.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ra.mood.input.focus());
  }
  function go() {
    ta.classList.remove("open"), ta.setAttribute("aria-hidden", "true"), aa && (Na = aa.date + "-" + aa.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Na);
    } catch {
    }
    aa = null, Ba();
  }
  function Bs() {
    if (!aa) return;
    if (vi(qo(aa.date, aa.slot))) {
      go();
      return;
    }
    const { date: e, slot: a } = aa;
    let r = qo(e, a);
    r || (r = { date: e, slot: a }, st.checkins.unshift(r), st.checkins = st.checkins.slice(0, 2e3)), r.mood = Number(Ra.mood.input.value), r.energy = Number(Ra.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), an(), l.fire("checkin", { slot: a, mood: r.mood, energy: r.energy, mood_label: Xa("mood", r.mood), energy_label: Xa("energy", r.energy) }), Lt((a === "morning" ? "Morning" : "Evening") + " check-in saved"), go(), zo(), jo(), ri(), oo();
  }
  let Na = "";
  try {
    Na = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ba() {
    const e = Qa();
    qr.hidden = !e, na.hidden = !e, e || xa(), na.classList.toggle("due", !!e), na.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : zr()), na.title = e ? "Check in now" : zr();
  }
  function Vo() {
    Ba();
    const e = Qa();
    !e || ta.classList.contains("open") || Qe().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !ke.home.classList.contains("active") || xn.classList.contains("open") || Na !== Pt(/* @__PURE__ */ new Date()) + "-" + e && lr());
  }
  na.addEventListener("click", lr), i("checkinLater").addEventListener("click", go), i("checkinSave").addEventListener("click", Bs), ta.addEventListener("click", (e) => {
    e.target === ta && go();
  }), ta.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), go());
  }), setInterval(Vo, 3e4);
  function zo() {
    const e = Pt(/* @__PURE__ */ new Date()), a = (r) => st.checkins.find((c) => c.date === e && c[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, c]) => {
      const p = a(r);
      i(c).textContent = p ? Xa(r, p[r]) : "—";
    });
  }
  function jo() {
    const e = i("feelCard");
    if (!e) return;
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), c = [...Array(7)].map((ne, K) => {
      const Y = new Date(r.getFullYear(), r.getMonth(), r.getDate() + K), Me = Pt(Y), Ve = st.checkins.filter((ye) => ye.date === Me), Te = (ye) => {
        const ve = Ve.map((dt) => dt[ye]).filter((dt) => dt != null);
        return ve.length ? ve.reduce((dt, ct) => dt + ct, 0) / ve.length : null;
      };
      return { d: Y, key: Me, mood: Te("mood"), energy: Te("energy"), count: Ve.filter(vi).length, future: Y > a && Me !== Pt(a) };
    }), p = (ne) => {
      const K = c.map((Y) => Y[ne]).filter((Y) => Y != null);
      return K.length ? K.reduce((Y, Me) => Y + Me, 0) / K.length : null;
    }, k = p("mood"), L = p("energy"), I = (ne, K) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ne + "</span><span>" + (K == null ? "—" : Pe(Xa("", K))) + '</span></div><div class="feelTrack"><span style="width:' + (K == null ? 0 : Math.max(4, K)) + "%;background:" + (K == null ? "transparent" : Es(K)) + '"></span></div></div>', J = c.filter((ne) => ne.mood != null && ne.energy != null).sort((ne, K) => K.mood + K.energy - (ne.mood + ne.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (k == null ? "No check-ins yet" : Pe(Xa("", (k + L) / 2))) + '</div><div class="weekCopy">' + (k == null ? "Your first check-in will appear here." : "on average this week" + (J ? " · best day " + Pe(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(J.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (ne) => '<div class="weekChip feelDay' + (ne.future ? " future" : "") + (ne.key === Pt(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Pe(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ne.d)) + "</strong>" + (ne.count >= 2 ? '<span class="weekTick">' + xe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ne.count) + "</span>") + "</div>" + I("Mood", ne.mood) + I("Energy", ne.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Go = i("upcomingCountSetting");
  Go.addEventListener("change", () => {
    Pn = Go.value === "all" ? "all" : Number(Go.value), Pi();
  });
  const Uo = i("tempoRevealBtn"), vo = i("tempoExperiment"), At = i("tempoQuad"), bo = i("tempoDot"), wi = i("tempoEstimate"), wo = i("tempoReadout");
  let oa = { x: 0.5, y: 0.5 }, Yo = !1, xi = { total: 20, work: 45, rest: 15 };
  function dr(e, a, r, c) {
    const p = Math.max(a, Math.min(r, e));
    return Math.round((p - a) / c) * c + a;
  }
  function Ps(e, a) {
    const r = (e - 0.5) * 2, c = (a - 0.5) * 2, p = dr(
      xi.total + r * 5 + c * 8,
      Number(S.min),
      Number(S.max),
      Number(S.step)
    ), k = dr(
      xi.work + r * 10 + c * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), L = dr(
      xi.rest + r * 6 + c * 6,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    );
    return S.value = p, M.value = k, E.value = L, V.textContent = k + " sec", Q.textContent = L + " sec", $t(), { total: p, work: k, rest: L };
  }
  function cr(e, a) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", p = Ps(e, a);
    wo.textContent = r + " + " + c, wi.textContent = p.total + " min", At.setAttribute("aria-valuetext", r + " and " + c + ", estimated " + p.total + " minutes");
  }
  function ur(e) {
    const a = At.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)), c = Math.max(0, Math.min(1, (e.clientY - a.top) / a.height));
    oa = { x: r, y: c }, bo.style.left = r * 100 + "%", bo.style.top = c * 100 + "%", cr(r, c);
  }
  Uo.addEventListener("click", () => {
    const e = vo.hidden;
    vo.hidden = !e, Uo.setAttribute("aria-expanded", e ? "true" : "false"), Uo.textContent = e ? "Now close this" : "Don’t try this!", e && (xi = {
      total: Number(S.value),
      work: Number(M.value),
      rest: Number(E.value)
    }, oa = { x: 0.5, y: 0.5 }, bo.style.left = "50%", bo.style.top = "50%", cr(oa.x, oa.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === e));
  }));
  const Pa = i("testingFeedbackForm"), yi = i("testingFeedbackThanks"), Is = i("testingFeedbackAgain");
  Pa.addEventListener("submit", (e) => {
    e.preventDefault(), Pa.hidden = !0, yi.hidden = !1, Lt("Feedback captured for prototype");
  }), Is.addEventListener("click", (e) => {
    e.preventDefault(), Pa.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), yi.hidden = !0, Pa.hidden = !1;
  }), At.addEventListener("pointerdown", (e) => {
    var a;
    Yo = !0, ur(e);
    try {
      (a = At.setPointerCapture) == null || a.call(At, e.pointerId);
    } catch {
    }
  }), At.addEventListener("pointermove", (e) => {
    Yo && ur(e);
  }), At.addEventListener("pointerup", (e) => {
    Yo && (Yo = !1, ur(e), F());
  }), At.addEventListener("pointercancel", () => Yo = !1), At.addEventListener("keydown", (e) => {
    let { x: a, y: r } = oa, c = !0;
    e.key === "ArrowLeft" ? a -= 0.05 : e.key === "ArrowRight" ? a += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : c = !1, c && (e.preventDefault(), a = Math.max(0, Math.min(1, a)), r = Math.max(0, Math.min(1, r)), oa = { x: a, y: r }, bo.style.left = a * 100 + "%", bo.style.top = r * 100 + "%", cr(a, r), F());
  });
  const xn = i("workoutModal");
  let un = null;
  function qt(e) {
    return e.map((a) => ({ ...a }));
  }
  function ia() {
    const e = ze[pt];
    return {
      key: pt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: qt(Mt),
      strength: qt(rt),
      cooldown: qt(bn),
      total: Number(S.value),
      work: Number(M.value),
      rest: Number(E.value),
      rounds: Number(Je.value) || 1
    };
  }
  function ki(e = !1) {
    lt = !!e, le = null, Ae = null, on(), Fr(), un = ia(), i("moveEditorTitle").textContent = lt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !lt, i("warmupRow").hidden = lt, i("deleteMoveOpen").hidden = lt;
    const a = i("createMoveOptions");
    a.hidden = !lt;
    {
      const r = ze[pt];
      i("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), i("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (Mi(), lt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const r = ze[pt];
      mo((r == null ? void 0 : r.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Wo("movement"), gi(), Fo(), vo.hidden = !0, Uo.setAttribute("aria-expanded", "false"), Uo.textContent = "Don’t try this!", xn.classList.toggle("createMode", lt), xn.querySelector(".modal").classList.toggle("createMode", lt), xn.classList.add("open"), xn.setAttribute("aria-hidden", "false"), Ka(), lt && Se();
  }
  function Zo() {
    const e = ze[pt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Mi() {
    const e = Zo(), a = i("warmupSwitch");
    a.classList.toggle("on", e), a.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ze[pt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, D()) : (e.warmupOff = !e.warmupOff, F()), Mi());
  });
  function ya() {
    on(), Fr(), $a(), Ae = null, le = null, xn.classList.contains("createMode") && g(), xn.classList.remove("createMode"), xn.querySelector(".modal").classList.remove("createMode"), xn.classList.remove("open"), xn.setAttribute("aria-hidden", "true");
  }
  function Ko() {
    if (!un) return;
    const e = un;
    e.profile && (ze[e.key] = JSON.parse(JSON.stringify(e.profile))), pt = e.key, Mt = qt(e.warmup), rt = qt(e.strength), bn = qt(e.cooldown), S.value = e.total, M.value = e.work, E.value = e.rest, Je.value = e.rounds || 1;
    const a = ze[pt];
    if (a) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === pt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = a.name);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a.name);
        const k = r.querySelector(".sourceTag");
        k && (k.textContent = a.source);
      }
      h.value = a.name;
    }
    F();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (lt) {
      const e = pt;
      delete ze[e], lt = !1, ft = null, Cn(st.order.find((a) => ze[a]) || Object.keys(ze)[0]);
    } else
      Ko();
    ya();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    on(), Bt && Ho();
    const e = ze[pt], a = h.value.trim() || "New move";
    if (e && (e.name = a), _t(), le = null, F(), lt && e)
      uo(pt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === pt)), lt = !1, ft = null, st.order.includes(pt) || st.order.push(pt), Lt("Move created");
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
    un = null, ya(), an();
  }), xn.addEventListener("click", (e) => {
    if (e.target === xn) {
      if (lt) {
        const a = pt;
        delete ze[a], lt = !1, ft = null, Cn(st.order.find((r) => ze[r]) || Object.keys(ze)[0]);
      } else
        Ko();
      ya();
    }
  }), Jn(i("addMovementBtn"), "movement"), Jn(i("addRestBtn"), "rest"), Jn(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Fo), i("useGlobalRestTiming").addEventListener("change", Fo), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    mo(e.dataset.movePreset, !0), F();
  })), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), i("includeWarmupPreset").addEventListener("change", fe), i("includeCooldownPreset").addEventListener("change", fe), h.addEventListener("input", fe), h.addEventListener("input", or), i("confirmAddMovement").addEventListener("click", rr), i("confirmAddRest").addEventListener("click", rr), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && rr();
  });
  const ka = i("countdown"), _n = i("countNum"), ra = i("countdownPixelCanvas");
  let Ia = null, Ci = "appear";
  class Gr {
    constructor(a, r, c, p, k, L, I) {
      this.width = a.width, this.height = a.height, this.ctx = r, this.x = c, this.y = p, this.color = k, this.speed = (Math.random() * 0.8 + 0.1) * L, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = I, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Si = [], Ur = 1, Ti = 1;
  function pn() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Li() {
    var ne;
    if (!ra) return;
    const e = pn(), a = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    Ur = a, Ti = r;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    ra.width = Math.floor(a * c), ra.height = Math.floor(r * c), ra.style.width = a + "px", ra.style.height = r + "px";
    const p = ra.getContext("2d");
    p.setTransform(c, 0, 0, c, 0, 0);
    const k = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], L = 12, I = (ne = window.matchMedia) == null ? void 0 : ne.call(window, "(prefers-reduced-motion: reduce)").matches, J = I ? 0 : 0.055;
    Si = [];
    for (let K = 0; K < a; K += L)
      for (let Y = 0; Y < r; Y += L) {
        const Me = K - a / 2, Ve = Y - r / 2, Te = Math.sqrt(Me * Me + Ve * Ve), ye = I ? 0 : Math.random() * 75 + Te * 0.05, ve = new Gr({ width: a, height: r }, p, K, Y, k[Math.floor(Math.random() * k.length)], J, ye);
        ve.maxSizeInteger = 4, ve.maxSize = Math.random() * 3.2 + 0.8, ve.sizeStep = 0.35 + Math.random() * 0.45, Si.push(ve);
      }
  }
  function pr(e) {
    cancelAnimationFrame(Ia), Ci = e;
    const a = ra == null ? void 0 : ra.getContext("2d");
    if (!a) return;
    function r() {
      a.clearRect(0, 0, Ur, Ti);
      let c = !0;
      Si.forEach((p) => {
        p[Ci](), p.isIdle || (c = !1);
      }), Ci === "disappear" && c || (Ia = requestAnimationFrame(r));
    }
    Ia = requestAnimationFrame(r);
  }
  function $o() {
    cancelAnimationFrame(Ia), Li(), pr("appear"), setTimeout(() => pr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    ka.classList.contains("active") && $o();
  });
  const xo = i("pixelTrailCanvas"), yo = xo.getContext("2d");
  let mn = !0, Ha = 0.7, ko = 600, Xo = [], Mo = null, Ma = { x: 0, y: 0, ready: !1 };
  function mr() {
    const e = u.getBoundingClientRect(), a = pn(), r = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / a), p = Math.max(1, e.height / a);
    xo.width = Math.max(1, Math.floor(c * r)), xo.height = Math.max(1, Math.floor(p * r)), xo.style.width = c + "px", xo.style.height = p + "px", yo.setTransform(r, 0, 0, r, 0, 0);
  }
  function Hs(e, a) {
    if (!mn) return;
    const r = performance.now();
    Ma.ready || (Ma = { x: e, y: a, ready: !0 });
    const c = 7;
    for (let p = 1; p <= c; p++) {
      const k = p / c;
      Xo.push({
        x: Ma.x + (e - Ma.x) * k,
        y: Ma.y + (a - Ma.y) * k,
        born: r - (c - p) * 10
      });
    }
    Ma = { x: e, y: a, ready: !0 };
  }
  function Jo(e) {
    if (Mo = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      Mo = requestAnimationFrame(Jo);
      return;
    }
    const a = u.getBoundingClientRect(), r = pn();
    yo.clearRect(0, 0, a.width / r, a.height / r), mn && (Xo = Xo.filter((p) => e - p.born < ko), yo.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Xo.forEach((p) => {
      const k = (e - p.born) / ko, L = (1 - k) * Ha, I = Math.round(p.x / 14) * 14, J = Math.round(p.y / 14) * 14;
      yo.globalAlpha = Math.max(0, L);
      const ne = 2 + 5 * (1 - k) * Ha;
      yo.fillRect(I - ne / 2, J - ne / 2, ne, ne);
    }), yo.globalAlpha = 1), Mo = requestAnimationFrame(Jo);
  }
  u.addEventListener("pointermove", (e) => {
    const a = u.getBoundingClientRect(), r = pn();
    Hs((e.clientX - a.left) / r, (e.clientY - a.top) / r);
  }), u.addEventListener("pointerleave", () => Ma.ready = !1), new ResizeObserver(mr).observe(u), mr(), Mo = requestAnimationFrame(Jo);
  const Ca = i("movementRippleCanvas"), to = Ca.getContext("2d");
  let Sa = !0, sa = null, Fs = performance.now();
  function _i() {
    const e = Ca.parentElement.getBoundingClientRect(), a = pn(), r = Math.max(1, e.width / a), c = Math.max(1, e.height / a), p = Math.min(window.devicePixelRatio || 1, 2);
    Ca.width = Math.max(1, Math.floor(r * p)), Ca.height = Math.max(1, Math.floor(c * p)), Ca.style.width = r + "px", Ca.style.height = c + "px", to.setTransform(p, 0, 0, p, 0, 0);
  }
  function Yr() {
    var e;
    return Et || ((e = Ee[Ge]) == null ? void 0 : e.kind) === "rest";
  }
  function Zr() {
    const e = Ee[Ge];
    return Yr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Fa(e) {
    if (sa = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      sa = requestAnimationFrame(Fa);
      return;
    }
    const a = Ca.parentElement.getBoundingClientRect(), r = pn(), c = Math.max(1, a.width / r), p = Math.max(1, a.height / r);
    if (to.clearRect(0, 0, c, p), Sa) {
      const k = Zr(), L = (e - Fs) % k / k, I = 15, J = Math.max(8, Math.round(I * p / Math.max(1, c))), ne = c / (I + 1), K = p / (J + 1), Y = c * 0.5, Me = p * 0.52, Ve = Math.hypot(Y, Me), ye = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ve = 1; ve <= J; ve++)
        for (let dt = 1; dt <= I; dt++) {
          const ct = dt * ne, _e = ve * K, ut = Math.hypot(ct - Y, _e - Me) / Ve, yt = Yr(), et = yt ? Math.exp(-Math.pow((ut - (L * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ye = Math.exp(-Math.pow((ut - L * 1.25) * 7, 2)), Kt = yt ? et : Ye, gn = yt ? 0.5 + 0.5 * Math.sin(L * Math.PI * 2 - ut * 3) ** 2 : 0.35 + 0.65 * Math.sin(L * Math.PI * 2 - ut * 5) ** 2, It = yt ? 1.4 + Kt * 4.2 * gn : 1.2 + Kt * 5 * gn;
          to.beginPath(), to.arc(ct, _e, It, 0, Math.PI * 2), to.fillStyle = `rgba(${ye},${yt ? 0.08 + Kt * 0.48 : 0.05 + Kt * 0.55})`, to.fill();
        }
    }
    sa = requestAnimationFrame(Fa);
  }
  new ResizeObserver(_i).observe(Ca.parentElement), _i(), sa = requestAnimationFrame(Fa);
  const Co = i("exerciseTitle"), hn = i("exerciseMeta"), Ai = i("stepLabel"), Qo = i("digits"), Kr = i("fill"), rn = i("progress"), hr = i("pause"), fr = i("nextName"), Os = i("nextMeta"), Ws = i("nextIcon"), Ei = i("skipNextSession");
  let je = null;
  function kn(e) {
    for (let a = Math.max(0, e); a < Ee.length; a++)
      if (!Ee[a].sessionHidden) return a;
    return -1;
  }
  function ei() {
    const e = Ee[Ge];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Et) {
      const c = kn(Ge + 1), p = c >= 0 ? Ee[c] : null;
      return p ? { name: p.name, meta: Di(p), icon: la(p) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = kn(Ge + 1), r = a >= 0 ? Ee[a] : null;
    return r ? { name: r.name, meta: Di(r), icon: la(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function gr() {
    if (!Ee[Ge]) return Ee.length;
    const a = kn(Ge + 1);
    return a < 0 ? Ee.length : a + 1;
  }
  function la(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Di(e) {
    return e.kind === "video" ? "YouTube · " + it(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Ri() {
    return Ee.length && Ee[Ee.length - 1].round || 1;
  }
  function vr(e) {
    const a = Ee[e];
    if (!a) return "";
    const r = Ri();
    if (r <= 1) return "Step " + (e + 1) + " of " + Ee.length;
    if (a.roundBreak) return "Round " + a.round + " of " + r + " · Rest";
    const c = Ee.filter((p) => p.round === a.round && !p.roundBreak).length;
    return "Round " + a.round + " of " + r + " · Step " + (a.roundIndex + 1) + " of " + c;
  }
  function Ni() {
    return rn.querySelector('[data-step="' + Ge + '"]');
  }
  function br() {
    Ee[Ge] && Number(rn.dataset.round) !== (Ee[Ge].round || 1) && ti(), [...rn.children].forEach((e) => {
      const a = Number(e.dataset.step);
      e.classList.toggle("done", a < Ge), e.classList.toggle("active", a === Ge), e.classList.toggle("rewindable", a <= Ge), e.disabled = a > Ge, a === Ge && e.style.setProperty("--segment-progress", "0%");
    }), Ee[Ge] && (Ai.textContent = vr(Ge), te());
  }
  function Bi(e) {
    const a = Ee.indexOf(e);
    a < 0 || a <= Ge || (e.sessionHidden = !e.sessionHidden, Oa(), Lt((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Pi() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const a = gr(), r = Ee.slice(a);
    (Pn === "all" ? r : r.slice(0, Math.max(1, Number(Pn) || 1))).forEach((p) => {
      const k = document.createElement("section");
      k.className = "upcomingCard" + (p.sessionHidden ? " sessionHidden" : "") + (js(p) ? " noMeta" : ""), k.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xe(la(p)) + '</div><div><div class="upcomingName">' + Pe(p.name) + '</div><div class="upcomingMeta">' + Pe(Di(p)) + (Ri() > 1 ? " · round " + p.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (p.sessionHidden ? "Include this session" : "Skip this session") + "</button>", k.querySelector(".skipSessionBtn").addEventListener("click", () => Bi(p)), e.appendChild(k);
    });
  }
  function Oa() {
    var a;
    const e = ei();
    fr.textContent = e.name, Os.textContent = e.meta, Ws.innerHTML = xe(e.icon);
    {
      const r = Et ? Ee[kn(Ge + 1)] : ((a = Ee[Ge]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : Ee[kn(Ge + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && js(r)));
    }
    if (je = null, Et) {
      const r = kn(Ge + 1);
      r >= 0 && (je = Ee[r]);
    } else {
      const r = Ee[Ge];
      if (r && r.rest > 0)
        je = null;
      else {
        const c = kn(Ge + 1);
        c >= 0 && (je = Ee[c]);
      }
    }
    Ei && (Ei.hidden = !je, Ei.textContent = je != null && je.sessionHidden ? "Include this session" : "Skip this session"), Pi();
  }
  Ei.addEventListener("click", () => {
    je && (je.sessionHidden = !je.sessionHidden, Lt((je.sessionHidden ? "Hidden " : "Included ") + je.name + " for this session"), Oa());
  });
  let On = null, Ii = null;
  function Ta(e, a = {}) {
    const r = ze[pt];
    l.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: pt, ...a });
  }
  function wr() {
    const e = ze[pt];
    On = { key: pt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ii), Ii = setInterval(() => {
      On && !wn && On.active++;
    }, 1e3), Ta("started", { steps: Ee.length });
  }
  function xr(e) {
    if (clearInterval(Ii), !On) return;
    const a = On;
    On = null, Ta(e ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (st.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: e }), st.history = st.history.slice(0, 1e3), an(), ri(), oo());
  }
  function Hi() {
    y("workout"), qs();
    const e = kn(0);
    e >= 0 && Ee[e].kind === "video" && s(Ee[e]);
  }
  function Fi() {
    B(), xr(!1), clearInterval(Rt), clearInterval(Ya), Et = !1, da(!1), i("app").classList.remove("resting"), ka.classList.remove("active"), y("home");
  }
  function qs() {
    ka.classList.add("active");
    let e = 5;
    _n.textContent = e, requestAnimationFrame($o), clearInterval(Ya), Ya = setInterval(() => {
      e--, e > 0 ? (_n.textContent = e, $o()) : (clearInterval(Ya), _n.textContent = "GO", $o(), setTimeout(() => {
        ka.classList.remove("active"), cancelAnimationFrame(Ia), $r();
      }, 650));
    }, 1e3);
  }
  function ti() {
    var a;
    rn.innerHTML = "";
    const e = ((a = Ee[Math.max(0, Ge)] || Ee[0]) == null ? void 0 : a.round) || 1;
    rn.dataset.round = e, Ee.forEach((r, c) => {
      if ((r.round || 1) !== e) return;
      const p = document.createElement("button");
      p.dataset.step = c, p.type = "button", p.className = "progressSegment", p.setAttribute("aria-label", "Go to " + r.name), p.addEventListener("click", () => {
        c <= Ge && Vs(c);
      }), rn.appendChild(p);
    });
  }
  function da(e) {
    e = !!e;
    const a = wn !== e;
    if (wn = e, hr.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), fn && Ct)
      try {
        e ? Ct.pauseVideo() : Ct.playVideo();
      } catch {
      }
    a && On && Ta(e ? "paused" : "resumed");
  }
  function Vs(e) {
    e < 0 || e >= Ee.length || e > Ge || (clearInterval(Rt), Et = !1, i("app").classList.remove("resting"), Ge = e, da(!1), me(), Rt = setInterval($e, 1e3));
  }
  function $r() {
    if (Ge = kn(0), da(!1), ti(), Ge < 0) {
      Co.textContent = "No activities", hn.textContent = "Open Edit and enable or add a movement", hn.hidden = !1;
      return;
    }
    wr(), me(), clearInterval(Rt), Rt = setInterval($e, 1e3);
  }
  const ni = i("videoStage"), no = i("videoSound"), ai = 0, So = 1, zs = 2;
  let yr = 0, ao = null, Wa = null, Ct = null, ca = null, oi = 0, Oi = !1, fn = null, Wi = null;
  function t() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : ao || (ao = new Promise((a, r) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const p = setInterval(() => {
        var L;
        (L = window.YT) != null && L.Player && (clearInterval(p), clearTimeout(k), a(window.YT));
      }, 100), k = setTimeout(() => {
        clearInterval(p), ao = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const L = document.createElement("script");
        L.src = "https://www.youtube.com/iframe_api", L.async = !0, L.onerror = () => {
          clearInterval(p), clearTimeout(k), ao = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(L);
      }
    }), ao);
  }
  function o() {
    return Wa || (Wa = t().then((e) => new Promise((a) => {
      const r = document.createElement("div");
      i("videoFrame").appendChild(r), Ct = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(Ct), onStateChange: (c) => m(c.data), onError: (c) => _(c.data) }
      });
    })), Wa.catch(() => {
      Wa = null;
    }), Wa);
  }
  function s(e) {
    !(e != null && e.videoId) || e.videoError || o().then((a) => {
      fn || ca === e.videoId || (ca = e.videoId, oi = Number(e.start) || 0, Oi = !1, a.mute(), a.loadVideoById({ videoId: e.videoId, startSeconds: oi }));
    }).catch(() => {
    });
  }
  function d() {
    const e = kn(Ge + 1);
    e >= 0 && Ee[e].kind === "video" && s(Ee[e]);
  }
  function m(e) {
    if (!fn) {
      e === So && !Oi && (Oi = !0, Ct.pauseVideo(), Ct.seekTo(oi, !0));
      return;
    }
    ni.classList.toggle("playing", e === So), Ee[Ge] === fn && performance.now() > yr && (e === So && wn ? da(!1) : e === zs && !wn && da(!0)), e === So && pe(fn.videoId, Ct.getDuration()) && an(), e === ai && ee();
  }
  function _(e) {
    const a = fn;
    if (!a) {
      ca = null;
      return;
    }
    e === 101 || e === 150 ? (qe(a.videoId), Lt("That video can’t play outside YouTube, so it was skipped")) : Lt("The video couldn’t play, so it was skipped"), ee();
  }
  function w(e) {
    if (i("app").classList.add("videoStep"), no.hidden = !0, fn = e, clearTimeout(Wi), !e.videoId) {
      Lt("This video step has no link yet, so it was skipped"), setTimeout(() => ee(), 0);
      return;
    }
    o().then((a) => {
      if (fn !== e) return;
      yr = performance.now() + 1500;
      const r = Number(e.start) || 0;
      ca !== e.videoId ? (ca = e.videoId, oi = r, a.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (a.seekTo(r, !0), a.playVideo()), a.unMute(), wn && a.pauseVideo(), Wi = setTimeout(() => {
        fn !== e || wn || (a.getPlayerState() !== So ? (a.mute(), a.playVideo(), no.hidden = !1) : a.isMuted() && (no.hidden = !1));
      }, 1600);
    }).catch(() => {
      fn === e && (Lt("YouTube didn’t load, so the video was skipped"), ee());
    });
  }
  function v() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), a = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, c = (a == null ? void 0 : a.offsetHeight) || 42, p = window.innerHeight - r - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(p)) + "px");
  }
  window.addEventListener("resize", v);
  function B() {
    clearTimeout(Wi);
    const e = fn;
    if (fn = null, i("app").classList.remove("videoStep"), ni.classList.remove("playing"), no.hidden = !0, e && Ct) {
      try {
        Ct.pauseVideo();
      } catch {
      }
      ca = null;
    }
  }
  function ee() {
    const e = fn;
    !e || Ee[Ge] !== e || (B(), clearInterval(Rt), Yt(), Rt = setInterval($e, 1e3));
  }
  no.addEventListener("click", () => {
    Ct && (Ct.unMute(), Ct.playVideo()), no.hidden = !0;
  });
  function U(e) {
    var c;
    const a = Number(e.start) || 0;
    if (e.useVideoLength === !1) return a + (Number(e.duration) || 300);
    const r = Ct && fn === e && Number((c = Ct.getDuration) == null ? void 0 : c.call(Ct)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || a + (Number(e.duration) || 300);
  }
  function z(e, a) {
    const r = ze[pt];
    [Mt, rt, bn, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((p) => {
      p && p.kind === "video" && p.videoId === e && a(p);
    }));
  }
  function pe(e, a) {
    a = Math.round(Number(a) || 0);
    let r = !1;
    return e && a > 0 && z(e, (c) => {
      c.videoDuration !== a && (c.videoDuration = a, r = !0);
    }), r;
  }
  function qe(e) {
    z(e, (a) => {
      a.videoError = "embed";
    }), an();
  }
  function Ie(e) {
    const a = e.videoId;
    if (!a) return;
    const r = () => {
      xn.classList.contains("open") ? le || F() : (F(), an());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === a && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), r());
    }).catch((c) => {
      e.videoId === a && c === 401 && (e.videoError = "embed", r());
    }), ge(a).then((c) => {
      pe(a, c) && r();
    }).catch((c) => {
      c === "embed" && e.videoId === a && (e.videoError = "embed", r());
    });
  }
  function ge(e) {
    return t().then((a) => new Promise((r, c) => {
      const p = document.createElement("div");
      p.className = "videoProbe", p.setAttribute("aria-hidden", "true");
      const k = document.createElement("div");
      p.appendChild(k), i("app").appendChild(p);
      let L = null, I = !1;
      const J = (Y, Me) => {
        I || (I = !0, clearTimeout(ne), setTimeout(() => {
          try {
            L == null || L.destroy();
          } catch {
          }
          p.remove();
        }, 0), Me ? c(Me) : r(Y));
      }, ne = setTimeout(() => J(0), 2e4), K = () => {
        var Me;
        const Y = Number((Me = L == null ? void 0 : L.getDuration) == null ? void 0 : Me.call(L)) || 0;
        return Y > 0 && J(Y), Y > 0;
      };
      L = new a.Player(k, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            K() || (L.mute(), L.playVideo());
          },
          onStateChange: () => K(),
          onError: (Y) => J(0, Y.data === 101 || Y.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function me() {
    Et = !1;
    const e = Ee[Ge];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? w(e) : B(), Gt = e.duration, ln = e.duration, Co.textContent = e.name, hn.textContent = e.group, hn.hidden = !0, Ai.textContent = vr(Ge), On && Ta("step", { name: e.name, group: e.group, kind: e.kind, step: Ge + 1, of: Ee.length, round: e.round || 1, rounds: Ri(), duration: e.duration }), Oa(), br(), d(), e.kind === "video" && setTimeout(v, 0);
  }
  function te() {
    var p;
    const e = ((p = Ee[Ge]) == null ? void 0 : p.kind) === "video" && !Et, a = e && Gt >= 60;
    Qo.textContent = a ? it(Gt) : Gt, Qo.classList.toggle("long", a), e && (i("videoClock").textContent = it(Gt) + " left");
    const r = Gt / ln * 100;
    Kr.style.width = r + "%";
    const c = Ni();
    if (c && !Et) {
      const k = 100 - r;
      c.style.setProperty("--segment-progress", k + "%");
    }
  }
  function $e() {
    var a, r;
    if (wn) return;
    const e = Ee[Ge];
    if ((e == null ? void 0 : e.kind) === "video" && !Et && fn === e) {
      const c = Number((a = Ct == null ? void 0 : Ct.getCurrentTime) == null ? void 0 : a.call(Ct)) || 0, p = Number(e.start) || 0, k = U(e);
      ln = Math.max(1, k - p), (c > p || ((r = Ct == null ? void 0 : Ct.getPlayerState) == null ? void 0 : r.call(Ct)) === So) && (Gt = Math.max(0, Math.ceil(k - c))), te(), c > p && c >= k - 0.25 && ee();
      return;
    }
    Gt--, te(), Gt <= 0 && (e.rest > 0 ? Vt(e.rest) : Yt());
  }
  function Vt(e) {
    var r;
    Et = !0, i("app").classList.add("resting");
    const a = Ni();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(Rt), Gt = e, ln = e, On && Ta("rest", { duration: e }), Co.textContent = "Rest", hn.textContent = (r = Ee[Ge]) != null && r.roundBreakAfter ? "Round " + (Ee[Ge].round + 1) + " next" : "Recovery", Oa(), te(), Rt = setInterval(() => {
      wn || (Gt--, te(), Gt <= 0 && (clearInterval(Rt), Yt(), Rt = setInterval($e, 1e3)));
    }, 1e3);
  }
  function Yt() {
    Et = !1;
    const e = kn(Ge + 1);
    if (e >= 0)
      Ge = e, me();
    else {
      clearInterval(Rt), B(), da(!1), i("app").classList.remove("resting"), Co.textContent = "Complete", hn.textContent = "Move finished", hn.hidden = !1, Qo.textContent = "✓";
      {
        const a = Ri();
        Ai.textContent = a > 1 ? a + " rounds done" : Ee.filter((r) => !r.roundBreak).length + " steps done";
      }
      xr(!0);
      {
        const a = Zl(7).reduce((r, c) => r + c.minutes, 0);
        hn.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      Kr.style.width = "100%", Oa();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    ii(), da(!1);
  });
  function ii() {
    clearInterval(Rt);
    const e = Ee[Ge];
    if (Et) {
      Et = !1, i("app").classList.remove("resting");
      const r = kn(Ge + 1);
      r >= 0 ? (Ge = r, me(), Rt = setInterval($e, 1e3)) : Yt();
      return;
    }
    if (e && e.rest > 0) {
      Vt(e.rest);
      return;
    }
    const a = kn(Ge + 1);
    a >= 0 ? (Ge = a, me(), Rt = setInterval($e, 1e3)) : Yt();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Rt), da(!1), Et) {
      const e = Ee[Ge];
      Gt = e.rest, ln = e.rest, Co.textContent = "Rest", hn.textContent = "Recovery", i("app").classList.add("resting"), Oa(), te();
    } else
      me();
    Rt = setInterval(Et ? () => {
      wn || (Gt--, te(), Gt <= 0 && (clearInterval(Rt), Yt(), Rt = setInterval($e, 1e3)));
    } : $e, 1e3);
  });
  function jt(e, a, r, c) {
    let p = 0, k = null, L = !1;
    function I() {
      k && cancelAnimationFrame(k), k = null, p = 0, L = !1, a.style.width = "0%", e.classList.remove("holding");
    }
    function J(Y) {
      if (!L) return;
      p || (p = Y);
      const Me = Math.min(1, (Y - p) / r);
      if (a.style.width = Me * 100 + "%", Me >= 1) {
        L = !1, k && cancelAnimationFrame(k), k = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), c();
        return;
      }
      k = requestAnimationFrame(J);
    }
    function ne(Y) {
      var Me;
      if (!(Y && Y.button !== void 0 && Y.button !== 0)) {
        Y == null || Y.preventDefault(), I(), L = !0, e.classList.add("holding");
        try {
          (Me = e.setPointerCapture) == null || Me.call(e, Y.pointerId);
        } catch {
        }
        k = requestAnimationFrame(J);
      }
    }
    function K() {
      L && I();
    }
    e.addEventListener("pointerdown", ne), e.addEventListener("pointerup", K), e.addEventListener("pointercancel", K), e.addEventListener("lostpointercapture", K), e.addEventListener("keydown", (Y) => {
      (Y.key === " " || Y.key === "Enter") && !Y.repeat && ne(Y);
    }), e.addEventListener("keyup", (Y) => {
      (Y.key === " " || Y.key === "Enter") && K();
    });
  }
  const Yn = i("endWorkout");
  jt(Yn, i("holdEndFill"), 1500, Fi);
  const Zn = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Zn.classList.add("open"), Zn.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Zn.classList.remove("open"), Zn.setAttribute("aria-hidden", "true");
  });
  function kr() {
    const e = pt, a = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    a && a.remove(), delete ze[e], st.order = st.order.filter((c) => c !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const c = "custom-" + Date.now();
      ze[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, st.order.push(c), r = uo(c, ze[c]);
    }
    Zn.classList.remove("open"), Zn.setAttribute("aria-hidden", "true"), un = null, ya(), Cn(r.dataset.workout), an(), Lt("Move deleted");
  }
  jt(i("deleteMoveYes"), i("deleteMoveFill"), 1500, kr);
  const qi = n.querySelector(".rubberTabs"), Le = i("rubberIndicator");
  function wt(e, a = !0) {
    if (!e || !qi || !Le) return;
    const r = qi.getBoundingClientRect(), c = e.getBoundingClientRect();
    Le.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const p = pn();
    Le.style.left = (c.left - r.left) / p + qi.scrollLeft + "px", Le.style.width = c.width / p + "px", a && (Le.style.transform = "scaleX(1.08)", setTimeout(() => Le.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), wt(e, !0);
  })), requestAnimationFrame(() => wt(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => wt(n.querySelector(".tab.active"), !1));
  const To = i("pixelTrailToggle"), Vi = i("rippleToggle"), zi = i("trailStrength"), ji = i("trailLife");
  function ua(e, a) {
    Qe()[e] = a, an();
  }
  const Ol = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Wl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function js(e) {
    var a;
    return !!((a = Qe().hideMeta) != null && a[Wl(e)]);
  }
  function Ic() {
    const e = /* @__PURE__ */ new Map(), a = (r, c, p) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const k = Wl(r);
      let L = e.get(k);
      L || (L = { key: k, label: k === "rest" ? "Rest" : k === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(k, L)), L.kinds.add(k === "rest" ? "Rest" : k === "video" ? "Video" : c), L.moves.add(p), L.count++;
    };
    return Object.values(ze).forEach((r) => {
      const c = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Ze)).forEach((p) => a(p, "Warm-up", c)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((p) => a(p, p.presetRole === "warmup" ? "Warm-up" : p.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (r.cooldown || (r.customSequence ? [] : nn)).forEach((p) => a(p, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, c]) => {
      e.has(r) || e.set(r, { key: r, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, c) => Ol.indexOf(r.kind) - Ol.indexOf(c.kind) || r.label.localeCompare(c.label));
  }
  let Gs = "all";
  function Us() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Ic().filter((a) => (Gs === "all" || a.kind === Gs) && (!e || a.label.toLowerCase().includes(e) || a.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function Xr() {
    const e = i("metaTableBody");
    if (!e) return;
    const a = Qe().hideMeta || {}, r = Us();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((p) => {
      const k = !a[p.key], L = p.count ? (p.moves.length > 2 ? p.moves.slice(0, 2).join(", ") + " + " + (p.moves.length - 2) + " more" : p.moves.join(", ")) + " · " + p.count + " step" + (p.count === 1 ? "" : "s") : "Not used yet", I = document.createElement("tr");
      I.className = k ? "" : "off", I.innerHTML = '<td><div class="metaType">' + Pe(p.label) + '</div><div class="metaSub">' + Pe(p.kind + " · " + L) + '</div></td><td class="metaKindCol">' + Pe(p.kind) + '</td><td class="metaUsedCol">' + Pe(L) + '</td><td class="metaSwitchCol"><button class="switch' + (k ? " on" : "") + '" type="button" role="switch" aria-checked="' + k + '" aria-label="Second line for ' + Pe(p.label) + ' on phones"></button></td>', I.querySelector(".switch").addEventListener("click", () => Ys([p.key], k)), e.appendChild(I);
    });
    const c = r.filter((p) => a[p.key]).length;
    i("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function Ys(e, a) {
    const r = { ...Qe().hideMeta || {} };
    e.forEach((c) => {
      a ? r[c] = !0 : delete r[c];
    }), ua("hideMeta", r), Xr(), mt(), Oa();
  }
  i("metaSearch").addEventListener("input", Xr), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Gs = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === e)), Xr();
  })), i("metaHideAll").addEventListener("click", () => Ys(Us().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => Ys(Us().map((e) => e.key), !1));
  const Gi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...Qe().toggles || {} };
  function ql() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", Gi[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, c]) => {
      i(c).hidden = Gi[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => Gi[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const a = n.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !e), a.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Gi[e.dataset.toggle] = Gi[e.dataset.toggle] === !1, ql(), ua("toggles", { ...Gi });
  })), ql();
  function Hc() {
    To.classList.toggle("on", mn), Vi.classList.toggle("on", Sa), zi.value = Math.round(Ha * 100), i("trailStrengthValue").textContent = zi.value + "%", ji.value = ko, i("trailLifeValue").textContent = ji.value + " ms";
  }
  Qe().trailEnabled !== void 0 && (mn = Qe().trailEnabled), Qe().rippleEnabled !== void 0 && (Sa = Qe().rippleEnabled), Qe().trailStrength !== void 0 && (Ha = Qe().trailStrength), Qe().trailMaxAge !== void 0 && (ko = Qe().trailMaxAge), Hc(), To.addEventListener("click", () => {
    mn = !mn, To.classList.toggle("on", mn), mn || (Xo = []), ua("trailEnabled", mn);
  }), Vi.addEventListener("click", () => {
    Sa = !Sa, Vi.classList.toggle("on", Sa), ua("rippleEnabled", Sa);
  }), zi.addEventListener("input", () => {
    Ha = Number(zi.value) / 100, i("trailStrengthValue").textContent = zi.value + "%";
  }), zi.addEventListener("change", () => ua("trailStrength", Ha)), ji.addEventListener("input", () => {
    ko = Number(ji.value), i("trailLifeValue").textContent = ji.value + " ms";
  }), ji.addEventListener("change", () => ua("trailMaxAge", ko)), Go.addEventListener("change", () => ua("upcomingCount", Pn));
  function Vl(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const a = e === "light";
    i("app").classList.toggle("light", a), l.setLight(a), si(n);
  }
  Vl(Qe().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Vl(e.dataset.theme), ua("theme", e.dataset.theme);
  }));
  const Kn = { steps: null, weather: null, ...Qe().entities || {} };
  let sn = null, Zs = {};
  function Fc(e) {
    const a = Object.values(e).filter((I) => I.entity_id.startsWith("sensor.") || I.entity_id.startsWith("input_number.")), r = (I) => I.attributes.friendly_name || I.entity_id, c = a.filter((I) => /step/i.test(I.entity_id) || /step/i.test(r(I)) || ["steps", "step"].includes(String(I.attributes.unit_of_measurement || "").toLowerCase())), p = a.filter((I) => !c.includes(I)), k = (I, J) => r(I).localeCompare(r(J)), L = (I, J) => /health_steps/.test(J.entity_id) - /health_steps/.test(I.entity_id) || k(I, J);
    return { suggested: c.sort(L), rest: p.sort(k), label: r };
  }
  function zl(e) {
    const a = i("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: r, rest: c, label: p } = Fc(e), k = (J) => '<option value="' + Pe(J.entity_id) + '">' + Pe(p(J)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(k).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(k).join("") + "</optgroup>" : ""), a.value = Kn.steps || "";
    const L = i("stepsStatus"), I = Kn.steps && e[Kn.steps];
    L.textContent = I ? "Connected · " + p(I) : L.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Kn.steps = i("stepsEntity").value || null, ua("entities", { ...Kn }), Zs = {}, Yl(), sn && (zl(sn), Gl(sn));
  });
  function Oc(e, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(e);
  }
  function jl() {
    const e = Kn.steps && (sn == null ? void 0 : sn[Kn.steps]), a = Number(e == null ? void 0 : e.state);
    return Number.isFinite(a) ? a : null;
  }
  function Gl(e) {
    var c;
    const a = Kn.steps, r = a ? Number((c = e[a]) == null ? void 0 : c.state) : NaN;
    i("stepsMeta").textContent = a ? Number.isFinite(r) ? Oc(r) : "—" : "Set up in Settings";
  }
  let Ul = 0;
  async function Yl() {
    const e = Kn.steps;
    if (!e || !l.ws) return;
    Ul = Date.now();
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const c = await l.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: a.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), p = (c == null ? void 0 : c[e]) || [], k = {};
      if (p.forEach((L) => {
        Number.isFinite(L.max) && (k[Pt(new Date(L.start))] = L.max);
      }), !Object.keys(k).length) {
        const L = await l.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: a.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((L == null ? void 0 : L[e]) || []).forEach((I) => {
          const J = Number(I.s ?? I.state), ne = I.lu ? I.lu * 1e3 : Date.parse(I.last_updated || I.last_changed);
          if (!Number.isFinite(J) || !ne) return;
          const K = Pt(new Date(ne));
          k[K] = Math.max(k[K] || 0, J);
        });
      }
      Zs = k, oo();
    } catch {
    }
  }
  function ri() {
    oo();
  }
  ri(), setInterval(() => {
    ri(), jo(), Ba();
  }, 10 * 60 * 1e3);
  function Zl(e) {
    const a = {}, r = {};
    st.history.forEach((L) => {
      const I = Pt(new Date(L.start));
      a[I] = (a[I] || 0) + (L.seconds || 0) / 60, r[I] = (r[I] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), p = Pt(c), k = [];
    for (let L = e - 1; L >= 0; L--) {
      const I = new Date(c.getFullYear(), c.getMonth(), c.getDate() - L), J = Pt(I), ne = st.checkins.filter((Y) => Y.date === J), K = (Y) => {
        const Me = ne.map((Ve) => Ve[Y]).filter(Boolean);
        return Me.length ? Me.reduce((Ve, Te) => Ve + Te, 0) / Me.length : null;
      };
      k.push({
        key: J,
        date: I,
        minutes: Math.round(a[J] || 0),
        moves: r[J] || 0,
        steps: J === p && jl() != null ? jl() : Zs[J] ?? null,
        mood: K("mood"),
        energy: K("energy")
      });
    }
    return k;
  }
  function Wc(e) {
    let a = e.length - 1;
    e[a] && !e[a].minutes && a--;
    let r = 0;
    for (; a >= 0 && e[a].minutes > 0; )
      r++, a--;
    return r;
  }
  function oo() {
    const e = i("insightCard");
    if (!e) return;
    const a = Zl(30), r = Wc(a), c = a.reduce((ne, K) => ne + K.minutes, 0), p = /* @__PURE__ */ new Date(), k = Pt(p), L = Pt(new Date(p.getFullYear(), p.getMonth(), p.getDate() - (p.getDay() + 6) % 7)), I = a.filter((ne) => ne.key >= L && ne.key <= k).reduce((ne, K) => ne + K.minutes, 0), J = (ne, K, Y) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ne + '</div><div><div class="activityRowName">' + Pe(K) + '</div><div class="activityRowMeta">' + Pe(Y) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + xe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + J(xe("clock"), "This week", I + " min") + J(xe("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + J(xe("calendar"), "30 days", c + " min") + "</div>";
  }
  const Ks = {
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
  }, qc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Ui = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Jr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Kl = 0;
  const $s = (e, a) => '<path class="' + a + '" d="' + e + '"/>', Vc = (e, a) => ' style="animation-delay:-' + Math.round(e * 137 % a) + 'ms"', pa = (e, a, r, c) => {
    const p = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Vc(e, 2400) + ' d="M' + e + " " + (a - r) + "L" + (e + p) + " " + (a - p) + "L" + (e + r) + " " + a + "L" + (e + p) + " " + (a + p) + "L" + e + " " + (a + r) + "L" + (e - p) + " " + (a + p) + "L" + (e - r) + " " + a + "L" + (e - p) + " " + (a - p) + 'Z"/>';
  }, $l = ([e, a, r], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + a + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zc = (e, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', jc = (e) => (e ? ["29.35", "43.04", "56.74"].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), Gc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, r], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + a + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Xl(e, a, r, c) {
    return e === "clear" ? a ? $l(r ? Jr.l : Jr.s, c) + (r ? pa(70, 20, 5.83, 1) + pa(78.33, 41.67, 3.75, 0.8) + pa(60, 71.67, 3.33, 0.6) : pa(42, 12, 3.5, 1) + pa(47, 25, 2.25, 0.8) + pa(36, 43, 2, 0.6)) : zc(c, r) : e === "partly" ? (a ? $l(r ? Jr.lp : Jr.sp, c) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + $s(r ? Ui.lp : Ui.sp, a ? "wxCloudLight" : "wxBright") + (a ? r ? pa(73.33, 16.67, 4.17, 0.9) : pa(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? $s(r ? Ui.lc : Ui.s, a ? "wxCloudLight" : "wxBright") + (a ? r ? pa(15, 15, 3.75, 0.8) + pa(76.67, 13.33, 2.92, 0.6) : pa(9, 9, 2.25, 0.8) + pa(46, 8, 1.75, 0.6) : "") : $s(r ? Ui.lr : Ui.s, "wxCloudLight") + (e === "rain" ? jc(r) : Gc(r));
  }
  const Uc = () => {
    var e;
    return ((e = sn == null ? void 0 : sn["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let $n = Qe().weatherStyle || "bitmap", Jl = Qe().weatherLayout === "strip" ? "strip" : "tiles", Yc = Qe().weatherMotion !== !1;
  const Mr = () => Yc && !Ne(), Cr = /* @__PURE__ */ new Map(), Xs = 700, Zc = (e) => {
    const [a, r] = e.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: r === "night" };
  };
  function Qr(e, a, r, c = $n, p, k) {
    let L = qc(e);
    const I = L === "night" || (k != null ? !!k : !!r && Uc());
    L === "night" && (L = "clear");
    const J = a ? 90 : 54, ne = Cs(e, I), K = performance.now();
    let Y = p ? Cr.get(p) : null;
    if (p && !Y ? Cr.set(p, Y = { key: ne, t0: -1e9 }) : Y && Y.key !== ne && (Y.fromKey = Y.key, Y.from = Y.last || null, Y.key = ne, Y.t0 = K), c !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ne + '"' + (p ? ' data-wx-slot="' + p + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + J + '"></canvas></span>';
    let Me = "";
    if (Y && K - Y.t0 < Xs && (Mr() || Ne())) {
      const Ve = Zc(Y.fromKey);
      Me = '<span class="wxLayer wxOut ' + Ve.k + (Ve.night ? " night" : "") + '" style="animation-delay:' + Math.round(Y.t0 - K) + 'ms"><svg viewBox="0 0 ' + J + " " + J + '">' + Xl(Ve.k, Ve.night, a, "wxg" + ++Kl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + L + (I ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + J + " " + J + '">' + Xl(L, I, a, "wxg" + ++Kl) + "</svg>" + Me + "</span>";
  }
  function es() {
    const e = i("app"), a = getComputedStyle(e), r = (I) => a.getPropertyValue(I).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([I, J]) => {
      r(J) && (c[I] = r(J));
    });
    const p = r("--color-text-primary") || "#f1f1f1", k = r("--color-bg-card") || "#222222", L = e.classList.contains("light");
    return { colors: c, ink: L ? p : k, paper: L ? k : p };
  }
  function si(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const c = es(), p = Mr(), k = Ne();
    r.forEach((L) => {
      var Y;
      const I = L.dataset.wx, J = L.dataset.wxSlot ? Cr.get(L.dataset.wxSlot) : null;
      let ne = Ll(I, c.colors);
      if (J && J.key === I) {
        const Me = (a - J.t0) / Xs;
        Me < 1 && (p || k) && (ne = du(J.from || Ll(J.fromKey, c.colors), ne, Math.max(0, Me), c.colors, k)), J.last = ne;
      }
      const K = dc(ne, { size: Number(L.dataset.wxSize) || 54, px: 2, oneBit: L.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: a, idle: p });
      L.width !== K.w && (L.width = K.w), L.height !== K.h && (L.height = K.h), (Y = L.getContext("2d")) == null || Y.putImageData(new ImageData(K.data, K.w, K.h), 0, 0);
    });
  }
  let ts = null, Ql = -1;
  function ed(e) {
    if (ts = null, !f) return;
    const a = Mr(), r = Math.floor(e / 100), c = [...Cr.values()].some((J) => e - J.t0 < Xs), p = [...ns.values()].some((J) => e - J.t0 < J.dur), k = ke.home.classList.contains("active"), L = Wn.classList.contains("open"), I = a && $n === "smooth" && (L || k && Jl === "strip");
    !document.hidden && (c || p || I || a && r !== Ql) && (Ql = r, k && (si(i("weatherCard"), e), Sr(i("weatherCard"), e)), L && (si(Wn, e), Sr(Wn, e))), (a || c || p) && (ts = requestAnimationFrame(ed));
  }
  function li() {
    i("app").classList.toggle("wxMotion", Mr()), !ts && f && (ts = requestAnimationFrame(ed));
  }
  let td = [];
  const Zt = 36e5, Kc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function io() {
    const e = /* @__PURE__ */ new Date(), a = (k, L) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + k, L), r = [], c = [], p = [...Array(6)].map((k, L) => {
      const I = a(L, 6), J = a(L, 18), ne = a(L + 1, 6), K = td.find((Me) => Pt(new Date(Me.datetime)) === Pt(I)), Y = (Me, Ve, Te) => {
        const ye = r.filter((ct) => ct.t >= +Me && ct.t < +Ve);
        if (ye.length) {
          const ct = {};
          return ye.forEach((_e) => {
            ct[_e.c] = (ct[_e.c] || 0) + (Kc.has(_e.c) ? 2 : 1);
          }), Object.entries(ct).sort((_e, ut) => ut[1] - _e[1])[0][0];
        }
        const ve = c.find((ct) => {
          const _e = +new Date(ct.datetime);
          return _e >= +Me - 3 * Zt && _e < +Ve && (ct.is_daytime == null || !!ct.is_daytime == !Te);
        });
        if (ve) return ve.condition;
        const dt = (K == null ? void 0 : K.condition) || "cloudy";
        return Te && dt === "sunny" ? "clear-night" : dt;
      };
      return { start: +I, end: +ne, day: Y(I, J, !1), night: Y(J, ne, !0), hi: Number(K == null ? void 0 : K.temperature), lo: Number(K == null ? void 0 : K.templow) };
    });
    return { days: p, hours: r, start: p[0].start, end: p[5].end };
  }
  const nd = (e, a) => {
    const r = e.days.findIndex((p) => a < p.end);
    if (r < 0) return 1;
    const c = e.days[r];
    return Math.max(0, (r + (a - c.start) / (c.end - c.start)) / 6);
  }, $c = (e, a) => {
    const r = Math.max(0, Math.min(0.99999, a)) * 6, c = Math.floor(r), p = e.days[c];
    return p.start + (r - c) * (p.end - p.start);
  };
  function Js(e, a) {
    const r = Math.max(0, e.days.findIndex((J) => a < J.end)), c = e.days[r], p = (a - c.start) / (c.end - c.start) >= 0.5;
    let k = p ? c.night : c.day, L = NaN;
    const I = e.hours;
    if (I.length && a >= I[0].t - Zt && a <= I[I.length - 1].t + Zt) {
      let J = I.findIndex((Y) => Y.t > a);
      J < 0 && (J = I.length);
      const ne = I[Math.max(0, J - 1)], K = I[Math.min(I.length - 1, J)];
      k = ne.c || k, L = K.t > ne.t ? ne.temp + (K.temp - ne.temp) * Math.max(0, Math.min(1, (a - ne.t) / (K.t - ne.t))) : ne.temp;
    }
    if (!Number.isFinite(L)) {
      const J = [];
      if (e.days.forEach((ne) => {
        Number.isFinite(ne.lo) && J.push([ne.start - Zt, ne.lo]), Number.isFinite(ne.hi) && J.push([ne.start + 9 * Zt, ne.hi]);
      }), J.length) {
        L = a <= J[0][0] ? J[0][1] : J[J.length - 1][1];
        for (let ne = 1; ne < J.length; ne++) if (a <= J[ne][0] && a > J[ne - 1][0]) {
          const [K, Y] = J[ne - 1], [Me, Ve] = J[ne];
          L = Y + (Ve - Y) * (1 - Math.cos(Math.PI * (a - K) / (Me - K))) / 2;
          break;
        }
      }
    }
    return { cond: p && k === "sunny" ? "clear-night" : k, temp: L, night: p, day: c };
  }
  const ad = (e) => Pt(new Date(e)) === Pt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), ns = /* @__PURE__ */ new Map(), Xc = 900, Jc = 700;
  let as = null;
  const ma = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((a) => {
    Sr(a.target.parentElement), a.target.closest("#wxDialog") && dd();
  })) : null;
  function Sr(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const c = io(), p = c.days.flatMap((Y) => [{ cond: Y.day, night: !1 }, { cond: Y.night, night: !0 }]), k = p.map((Y) => Y.cond).join(), L = es(), I = Mr(), J = Ne(), ne = Number(Pt(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let K = !1;
    r.forEach((Y) => {
      var ct;
      const Me = Y.clientWidth, Ve = Y.clientHeight;
      if (!Me || !Ve) return;
      const Te = Y.dataset.wxStrip;
      let ye = ns.get(Te);
      ye ? ye.sig !== k && (ye.prev = ye.segs, ye.sig = k, ye.segs = p, ye.t0 = a, ye.dur = Jc) : ns.set(Te, ye = { sig: k, segs: p, prev: null, t0: a, dur: Xc });
      const ve = I || J ? Math.min(1, Math.max(0, (a - ye.t0) / ye.dur)) : 1;
      ve < 1 && (K = !0);
      const dt = { width: Me, height: Ve, colors: L.colors, clock: a, ambient: I, seed: ne, reveal: J ? ve : 1 - Math.pow(1 - ve, 3), prev: ve < 1 ? ye.prev : null, reduce: J };
      if ($n === "smooth") {
        const _e = Math.min(2, window.devicePixelRatio || 1), ut = Math.round(Me * _e), yt = Math.round(Ve * _e);
        Y.width !== ut && (Y.width = ut), Y.height !== yt && (Y.height = yt);
        const et = Y.getContext("2d");
        if (!et) return;
        et.setTransform(_e, 0, 0, _e, 0, 0), Cu(et, p, dt);
      } else {
        const _e = Mu(p, { ...dt, px: 2, oneBit: $n === "onebit", ink: L.ink, paper: L.paper });
        Y.width !== _e.w && (Y.width = _e.w), Y.height !== _e.h && (Y.height = _e.h), (ct = Y.getContext("2d")) == null || ct.putImageData(new ImageData(_e.data, _e.w, _e.h), 0, 0);
      }
    }), K && li();
  }
  function od() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const a = Kn.weather, r = a && (sn == null ? void 0 : sn[a]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Qr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", si(e);
      return;
    }
    const c = r.attributes || {}, p = c.temperature_unit || "°", k = (et) => Number.isFinite(Number(et)) ? Math.round(Number(et)) + "°" : "—", L = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", I = Ks[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), J = Pt(/* @__PURE__ */ new Date()), ne = td.slice(0, 7), K = ne.find((et) => Pt(new Date(et.datetime)) === J) || null, Y = ne.filter((et) => Pt(new Date(et.datetime)) >= J).slice(0, 6), Me = /* @__PURE__ */ new Date(), Ve = Pt(new Date(Me.getFullYear(), Me.getMonth(), Me.getDate() + 1)), Te = K ? "H " + k(K.temperature) + "&ensp; L " + k(K.templow) : "", ye = (et) => {
      const Ye = Pt(new Date(et.datetime));
      return Ye === J ? "Today" : Ye === Ve ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(et.datetime));
    }, ve = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", dt = (et) => {
      const Ye = new Date(et.datetime);
      return Math.round((new Date(Ye.getFullYear(), Ye.getMonth(), Ye.getDate()) - new Date(Me.getFullYear(), Me.getMonth(), Me.getDate())) / 864e5);
    }, ct = (et) => (Ks[et] || et || "").toLowerCase(), _e = (et, Ye) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + dt(et) + '" aria-label="' + Pe(ye(et) + ": " + ct(et.condition) + ", " + k(et.temperature) + " / " + k(et.templow) + ". Open the forecast") + '">' + Qr(et.condition, !1, !1, $n, "day" + Ye) + '<div><div class="activityRowName">' + Pe(ye(et)) + '</div><div class="activityRowMeta">' + k(et.temperature) + " / " + k(et.templow) + "</div></div></div>", ut = () => '<div class="wxStrip"><div class="wxStripDays">' + io().days.map((Ye, Kt) => {
      const It = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ye.start)) + ": " + ct(Ye.day) + (ct(Ye.day) === ct(Ye.night) ? " all day and night" : ", then " + ct(Ye.night) + " overnight") + (Number.isFinite(Ye.hi) ? ". High " + k(Ye.hi) : "") + (Number.isFinite(Ye.lo) ? ", low " + k(Ye.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Kt + '" aria-label="' + Pe(It) + '"><span class="wxDayName">' + Pe(ad(Ye.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + k(Ye.hi) + '</span><span class="wxLow">' + k(Ye.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Pe("Now in " + L + ": " + ve + "°, " + ct(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Qr(r.state, !0, !0, $n, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Pe(String(ve)) + '</span><span class="wxUnit">' + Pe(p) + '</span></div><div class="wxPlace">' + Pe(L) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Pe(I) + "</div>" + (Te ? '<div class="wxRange">' + Te + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (Y.length ? Jl === "strip" ? ut() : '<div class="activityRows wxDays">' + Y.map(_e).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", si(e);
    const yt = e.querySelector("canvas[data-wx-strip]");
    as && as !== yt && (ma == null || ma.unobserve(as)), as = yt, yt && (ma == null || ma.observe(yt), Sr(e)), li(), ld();
  }
  const id = i("weatherCard"), rd = (e) => {
    const a = e.closest("[data-wx-day]");
    if (a) {
      const c = /* @__PURE__ */ new Date();
      sd(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && sd(Date.now(), r);
  };
  id.addEventListener("click", (e) => rd(e.target)), id.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), rd(e.target));
  });
  const Wn = i("wxDialog"), Lo = i("wxGraph"), Tr = i("wxGraphWrap");
  let La = Date.now(), di = null, Qs = !1, Yi = null;
  function sd(e, a) {
    const r = io();
    di = a || null, La = Math.max(r.start, Math.min(r.end - Zt, e)), ns.delete("dialog"), Cr.delete("scrub"), Wn.classList.add("open"), Wn.setAttribute("aria-hidden", "false"), ld(), ma == null || ma.observe(Wn.querySelector("canvas[data-wx-strip]")), Lo.focus({ preventScroll: !0 }), li();
  }
  function el() {
    var e;
    Wn.classList.remove("open"), Wn.setAttribute("aria-hidden", "true"), ma == null || ma.unobserve(Wn.querySelector("canvas[data-wx-strip]")), (e = di == null ? void 0 : di.focus) == null || e.call(di, { preventScroll: !0 }), di = null;
  }
  function ld() {
    if (!Wn.classList.contains("open")) return;
    const e = io();
    i("wxGraphDays").innerHTML = e.days.map((a) => "<span>" + Pe(ad(a.start)) + "</span>").join(""), dd(e), os(e), Sr(Wn);
  }
  function os(e = io()) {
    const a = Js(e, La), r = sn == null ? void 0 : sn[Kn.weather], c = (r == null ? void 0 : r.attributes) || {}, p = c.temperature_unit || "°", k = Math.abs(La - Date.now()) < Zt / 2, L = k && r ? r.state : a.cond, I = k && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", J = Ks[L] || (L ? L.charAt(0).toUpperCase() + L.slice(1) : "—"), ne = k ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(La / Zt) * Zt)), K = a.day, Y = (Number.isFinite(K.hi) ? "H " + Math.round(K.hi) + "°" : "") + (Number.isFinite(K.lo) ? "&ensp; L " + Math.round(K.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Qr(L, !0, k, $n, "scrub", k ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Pe(String(I)) + '</span><span class="wxUnit">' + Pe(p) + '</span></div><div class="wxPlace">' + Pe(ne) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Pe(J) + "</div>" + (Y ? '<div class="wxRange">' + Y + "</div>" : "") + "</div>", si(i("wxDialogNow")), Lo.setAttribute("aria-valuenow", String(Math.round((La - e.start) / Zt))), Lo.setAttribute("aria-valuetext", ne + ", " + J.toLowerCase() + ", " + I + "°"), tl(e), li();
  }
  function dd(e = io()) {
    const a = i("wxGraphLine"), r = Tr.clientWidth, c = Tr.clientHeight;
    if (!r || !c) return;
    const p = [];
    for (let ve = e.start; ve <= e.end; ve += Zt) {
      const dt = Js(e, ve).temp;
      Number.isFinite(dt) && p.push([nd(e, ve) * r, dt]);
    }
    if (a.setAttribute("viewBox", "0 0 " + r + " " + c), p.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', Yi = null, tl(e);
      return;
    }
    const k = p.map((ve) => ve[1]), L = Math.min(...k), I = Math.max(...k), J = Math.max(4, I - L), ne = $n !== "smooth", K = (ve) => ne ? Math.round(ve / 2) * 2 : Math.round(ve * 10) / 10;
    Yi = (ve) => c * 0.84 - (ve - L) / J * c * 0.62;
    const Y = es(), Me = $n === "onebit" ? Y.paper : "#ffffff", Ve = $n === "onebit" ? Y.ink : "rgba(0,0,0,.28)", Te = "M" + p.map((ve) => K(ve[0]) + " " + K(Yi(ve[1]))).join(" L"), ye = (ve, dt) => {
      const ct = p.find((_e) => _e[1] === ve);
      return '<text class="wxLineLabel" x="' + K(Math.min(r - 14, Math.max(14, ct[0]))) + '" y="' + K(Yi(ve) + (dt ? 18 : -10)) + '" fill="' + Me + '" stroke="' + Ve + '">' + Math.round(ve) + "°</text>";
    };
    a.setAttribute("shape-rendering", ne ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + Te + '" fill="none" stroke="' + Ve + '" stroke-width="' + (ne ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Te + '" fill="none" stroke="' + Me + '" stroke-width="2" stroke-linejoin="round"/>' + ye(I, !1) + ye(L, !0) + '<g id="wxCursorMark"></g>', tl(e);
  }
  function tl(e = io()) {
    const a = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const r = Tr.clientWidth, c = Tr.clientHeight, p = $n !== "smooth", k = (Me) => p ? Math.round(Me / 2) * 2 : Me, L = k(nd(e, La) * r), I = Js(e, La).temp, J = es(), ne = $n === "onebit" ? J.paper : "#ffffff", K = $n === "onebit" ? J.ink : "rgba(0,0,0,.28)", Y = Yi && Number.isFinite(I) ? k(Yi(I)) : null;
    a.innerHTML = '<rect x="' + (L - 2) + '" y="0" width="4" height="' + c + '" fill="' + K + '"/><rect x="' + (L - 1) + '" y="0" width="2" height="' + c + '" fill="' + ne + '"/>' + (Y == null ? "" : p ? '<rect x="' + (L - 5) + '" y="' + (Y - 5) + '" width="10" height="10" fill="' + ne + '" stroke="' + K + '" stroke-width="2"/>' : '<circle cx="' + L + '" cy="' + Y + '" r="6" fill="' + ne + '" stroke="' + K + '" stroke-width="2"/>');
  }
  const cd = (e) => {
    const a = Tr.getBoundingClientRect();
    a.width && (La = $c(io(), (e - a.left) / a.width), os());
  };
  Lo.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Qs = !0;
      try {
        Lo.setPointerCapture(e.pointerId);
      } catch {
      }
      cd(e.clientX);
    }
  }), Lo.addEventListener("pointermove", (e) => {
    Qs && cd(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Lo.addEventListener(e, () => {
    Qs = !1;
  })), Lo.addEventListener("keydown", (e) => {
    const a = io(), r = { ArrowLeft: -Zt, ArrowRight: Zt, ArrowDown: -Zt, ArrowUp: Zt, PageUp: -24 * Zt, PageDown: 24 * Zt }[e.key];
    r ? (e.preventDefault(), La = Math.max(a.start, Math.min(a.end - Zt, Math.round(La / Zt) * Zt + r)), os(a)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), La = e.key === "Home" ? a.start : a.end - Zt, os(a));
  }), i("wxDialogClose").addEventListener("click", el), Wn.addEventListener("click", (e) => {
    e.target === Wn && el();
  }), Wn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), el());
  }), od(), (yd = (wd = window.matchMedia) == null ? void 0 : (xd = wd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || yd.call(xd, "change", () => {
    li(), si(n);
  }), li();
  const ud = i("tvNav");
  l.fullscreenSupported || (ud.hidden = !0), ud.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ke.workout.classList.contains("active") || ka.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), hr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(Je.value) || 1) + Number(e.dataset.roundsStep)));
    String(a) !== Je.value && (Je.value = a, Je.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [S, M, E, Je].forEach((e) => e.addEventListener("input", () => {
    const a = ze[pt];
    a && (a.total = Number(S.value), a.work = Number(M.value), a.rest = Number(E.value)), F();
  })), Ce.addEventListener("click", Fi), Oe.addEventListener("click", () => y("settings")), i("settingsBack").addEventListener("click", Fi), hr.addEventListener("click", () => da(!wn)), Cn(pt), zo(), jo(), oo(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), jt(i("resetStats"), i("resetStatsFill"), 1500, () => {
    st.history = [], st.checkins = [], Na = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    an(), ri(), jo(), zo(), oo(), Ba(), Lt("Stats reset");
  });
  const nl = i("morningTime"), al = i("eveningTime"), ol = i("checkinAutoOpen");
  nl.value = Da().morning, al.value = Da().evening, ol.classList.toggle("on", Qe().checkinAutoOpen !== !1), [["morningTime", nl], ["eveningTime", al]].forEach(([e, a]) => a.addEventListener("change", () => {
    a.value && (ua(e, a.value), Ba());
  })), ol.addEventListener("click", () => {
    const e = Qe().checkinAutoOpen === !1;
    ol.classList.toggle("on", e), ua("checkinAutoOpen", e);
  }), setTimeout(Vo, 800);
  const pd = i("checkinNotify"), is = i("checkinNotifyTarget"), md = i("checkinNotifyStatus"), Qc = md.textContent;
  function hd() {
    const e = l.notifyServices(), a = e.filter((p) => p.startsWith("mobile_app_")), r = a.length ? a : e, c = (p) => p.replace(/^mobile_app_/, "").replace(/_/g, " ");
    is.innerHTML = r.map((p) => '<option value="' + Pe(p) + '">' + Pe(c(p)) + "</option>").join(""), !Qe().notifyTarget && r[0] && (Qe().notifyTarget = r[0]), is.value = Qe().notifyTarget || "";
  }
  function rs() {
    const e = !!Qe().notifyOn;
    pd.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const a = Da();
    md.textContent = e ? "Sends at " + a.morning + " and " + a.evening : Qc;
  }
  async function il() {
    const e = !!Qe().notifyOn;
    try {
      return await l.setReminderAutomation(e ? { target: Qe().notifyTarget, times: Da() } : null), !0;
    } catch {
      return Lt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  pd.addEventListener("click", async () => {
    const e = !Qe().notifyOn;
    if (e && (hd(), !Qe().notifyTarget)) {
      Lt("Install the Companion app on your phone first");
      return;
    }
    Qe().notifyOn = e, rs(), await il() ? (an(), Lt(e ? "Check-in notifications on" : "Check-in notifications off")) : (Qe().notifyOn = !e, rs());
  }), is.addEventListener("change", () => {
    ua("notifyTarget", is.value), Qe().notifyOn && il();
  }), [nl, al].forEach((e) => e.addEventListener("change", () => {
    rs(), Qe().notifyOn && il();
  })), hd(), rs();
  let rl = null;
  function eu() {
    rl || (rl = setTimeout(() => {
      rl = null, oo();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, c;
      const a = !sn || sn[Kn.weather] !== e[Kn.weather] || ((r = sn["sun.sun"]) == null ? void 0 : r.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      sn = e, zl(e), Gl(e), a && od(), Date.now() - Ul > 60 * 60 * 1e3 && Yl(), eu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (st.history = e.history, ri()), Array.isArray(e.history) && oo(), Array.isArray(e.checkins) && (st.checkins = e.checkins.map(Bo), Ba(), zo(), jo(), ri(), oo()), e.profiles && !xn.classList.contains("open") && !On)) {
        const a = Ga(e);
        Object.keys(ze).forEach((r) => delete ze[r]), Object.assign(ze, a.profiles), st.order = a.order, ze[pt] || (pt = st.order[0]), jn(), Cn(pt);
      }
    },
    suspend() {
      f = !1;
    },
    resume() {
      f || (f = !0, Mo || (Mo = requestAnimationFrame(Jo)), sa || (sa = requestAnimationFrame(Fa)), li(), wt(n.querySelector(".tab.active"), !1));
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
}, _r = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, en = "made_up_", $i = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(en);
}, cs = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Il(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Au(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Il(new Date(u)) / 6;
  return i;
}
function Td(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Il(new Date(u))]);
  }
  return l;
}
function Eu({ onChange: n }) {
  const l = {}, i = {}, u = (j, q, $, O) => {
    l[j] = { entity_id: j, state: $, attributes: O, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[j] = q;
  }, h = (j, q, $) => {
    const O = l[j], Z = q ?? O.state;
    l[j] = { ...O, state: Z, attributes: { ...O.attributes, ...$ }, last_changed: Z === O.state ? O.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, f = (j, q, $, O) => u("binary_sensor." + en + (j ? j + "_" : "") + cs(q), j, O ? "on" : "off", { friendly_name: q, device_class: $ });
  Object.entries(_u).forEach(([j, q]) => {
    if (q.temperature != null && u("sensor." + en + j + "_temperature", j, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && u("sensor." + en + j + "_humidity", j, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && u("vacuum." + en + "robot", j, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && u("climate." + en + j, j, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [$, O, Z, oe] = q.cover;
      u("cover." + en + j + "_" + cs($), j, Z ? "open" : "closed", { friendly_name: $, device_class: O, current_position: Z, ...oe != null ? { current_tilt_position: oe } : {} });
    }
    if (q.humidifier && u("humidifier." + en + j, j, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (u("sensor." + en + j + "_solar_power", j, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + en + j + "_solar_today", j, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && u("valve." + en + j + "_" + cs(q.valve), j, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && f(j, q.door, "door", q.doorOpen), q.window && f(j, q.window, "window", !1), q.motion && f(j, q.motion, "motion", !1), q.plant) {
      const [$, O, Z, oe, A] = q.plant, W = en + cs($), fe = (g, ke, Ce, Oe, y) => u("sensor." + W + "_" + g, j, String(Ce), { friendly_name: ke, device_class: y, state_class: "measurement", unit_of_measurement: Oe, plant_low: Ce < _r[g][0], plant_high: Ce > _r[g][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[g] });
      fe("moisture", "Moisture", O, "%", "moisture"), fe("light", "Light", Z, "lx", "illuminance"), fe("temperature", "Temperature", oe, "°C", "temperature"), fe("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Se = Object.entries({ moisture: O, light: Z, temperature: oe, fertility: A }).filter(([g, ke]) => ke < _r[g][0] || ke > _r[g][1]).map(([g, ke]) => g + (ke < _r[g][0] ? " low" : " high"));
      u("plant." + W, j, Se.length ? "problem" : "ok", { friendly_name: $, moisture: O, brightness: Z, temperature: oe, conductivity: A, problem: Se.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + en + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), f(null, "Front door", "door", !1), f(null, "Smoke alarm", "smoke", !1), u("sensor." + en + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const x = {}, T = {};
  let b = null;
  function N() {
    const j = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((q) => {
      q.endsWith("_solar_power") && (l[q] = { ...l[q], state: Il(j).toFixed(2) }), q.endsWith("_solar_today") && (l[q] = { ...l[q], state: Au(j).toFixed(1) });
    });
  }
  N();
  let re = 0;
  function ae() {
    let j = !1;
    const q = ++re % 10 === 0, $ = (oe, A, W) => {
      h(oe, A, W), j = !0;
    };
    Object.entries(x).forEach(([oe, A]) => {
      const W = l[oe].attributes.current_position, fe = W < A ? Math.min(A, W + 10) : Math.max(A, W - 10);
      fe === A && delete x[oe], $(oe, fe === A ? fe === 0 ? "closed" : "open" : A > W ? "opening" : "closing", { current_position: fe });
    }), Object.entries(T).forEach(([oe, A]) => {
      const W = l[oe].attributes.current_tilt_position, fe = W < A ? Math.min(A, W + 25) : Math.max(A, W - 25);
      fe === A && delete T[oe], $(oe, null, { current_tilt_position: fe });
    }), Object.keys(l).filter((oe) => oe.startsWith("climate.")).forEach((oe) => {
      const A = l[oe], W = A.attributes, fe = W.current_temperature, Se = (A.state === "heat" || A.state === "auto") && fe < W.temperature - 0.05, g = (A.state === "cool" || A.state === "auto") && fe > W.temperature + 0.05, ke = A.state === "off" ? "off" : Se ? "heating" : g ? "cooling" : "idle", Ce = q ? Math.round((fe + (Se ? 0.1 : g ? -0.1 : 0)) * 10) / 10 : fe;
      (Ce !== fe || ke !== W.hvac_action) && $(oe, null, { current_temperature: Ce, hvac_action: ke });
    }), Object.keys(l).filter((oe) => oe.startsWith("humidifier.")).forEach((oe) => {
      const A = l[oe], W = A.attributes, fe = W.current_humidity, Se = A.state === "on" && fe < W.humidity, g = Se && q ? fe + 1 : fe, ke = A.state !== "on" ? "off" : Se ? "humidifying" : "idle";
      if (g !== fe || ke !== W.action) {
        $(oe, null, { current_humidity: g, action: ke });
        const Ce = "sensor." + en + i[oe] + "_humidity";
        l[Ce] && $(Ce, String(g));
      }
    });
    const O = l["vacuum." + en + "robot"], Z = O.attributes;
    O.state === "cleaning" && q && $(O.entity_id, null, { battery_level: Math.max(5, Z.battery_level - 1) }), O.state === "returning" && $(O.entity_id, "docked", {}), O.state === "docked" && Z.battery_level < 100 && $(O.entity_id, null, { battery_level: Math.min(100, Z.battery_level + 2) }), b && Date.now() - b.at > 5e3 && ($("alarm_control_panel." + en + "house", "armed_" + b.mode, {}), b = null), j && n();
  }
  const R = setInterval(ae, 1e3), P = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function G(j, q, $) {
    const O = $ == null ? void 0 : $.entity_id;
    if (!l[O]) return !1;
    const Z = l[O], oe = Z.attributes, A = (W, fe) => h(O, W, fe);
    if (j === "climate" && (q === "set_temperature" && A(null, { temperature: Math.max(oe.min_temp, Math.min(oe.max_temp, $.temperature)) }), q === "set_hvac_mode" && A($.hvac_mode, $.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && A(Z.state === "off" ? "heat" : "off", Z.state === "off" ? {} : { hvac_action: "off" })), j === "cover") {
      const W = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? $.position : q === "toggle" ? oe.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete x[O], delete T[O], A(oe.current_position === 0 ? "closed" : "open")), W != null && W !== oe.current_position && (x[O] = W, A(W > oe.current_position ? "opening" : "closing"));
      const fe = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? $.tilt_position : null;
      q === "stop_cover_tilt" && delete T[O], fe != null && oe.current_tilt_position != null && fe !== oe.current_tilt_position && (T[O] = fe);
    }
    if (j === "humidifier" && (q === "set_humidity" && A(null, { humidity: Math.max(oe.min_humidity, Math.min(oe.max_humidity, $.humidity)) }), q === "set_mode" && A(null, { mode: $.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const W = q === "turn_on" || q === "toggle" && Z.state !== "on";
      A(W ? "on" : "off", { action: W ? "idle" : "off" });
    }
    if (j === "vacuum" && (q === "start" && A("cleaning", { rooms: $.rooms || oe.rooms }), q === "pause" && A("paused"), q === "return_to_base" && A("returning", { rooms: [] }), q === "locate" && A(null, { located: Date.now() }), q === "set_rooms" && A(null, { rooms: $.rooms })), j === "valve") {
      const W = q === "open_valve" || q === "toggle" && Z.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && A(W ? "open" : "closed");
    }
    if (j === "alarm_control_panel") {
      q === "alarm_disarm" && (b = null, A("disarmed", { changed_by: "Matt" }));
      const W = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      W && (b = { mode: W, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function X(j) {
    const q = (j == null ? void 0 : j.states) || {}, $ = (j == null ? void 0 : j.entities) || {}, O = (j == null ? void 0 : j.devices) || {}, Z = (M) => {
      var se;
      const E = $[M];
      return E && (E.area_id || E.device_id && ((se = O[E.device_id]) == null ? void 0 : se.area_id)) || null;
    }, oe = (M) => {
      const E = $[M];
      return q[M] && q[M].state !== "unavailable" && !(E != null && E.hidden) && !(E != null && E.entity_category);
    }, A = {};
    Object.keys(q).forEach((M) => {
      const E = Z(M);
      E && oe(M) && (A[E] || (A[E] = [])).push(M);
    });
    const W = { ...q, ...l }, fe = (M) => {
      var E, se;
      return (se = (E = W[M]) == null ? void 0 : E.attributes) == null ? void 0 : se.device_class;
    }, Se = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], g = Object.keys(q).filter((M) => M.startsWith("vacuum.") && oe(M)), ke = Object.values((j == null ? void 0 : j.areas) || {}).filter((M) => !Lu.has(M.area_id)).map((M) => {
      const E = M.area_id, se = A[E] || [], V = (Ze) => se.filter((Mt) => Mt.startsWith(Ze + ".")), Q = (Ze) => V("sensor").filter((Mt) => fe(Mt) === Ze), ie = (Ze) => Object.keys(l).filter((Mt) => i[Mt] === E && Ze(Mt)), ce = (Ze, Mt) => Ze.length ? Ze : ie(Mt), We = ce(Q("temperature"), (Ze) => Ze.endsWith(E + "_temperature")), Je = ce(Q("humidity"), (Ze) => Ze.endsWith(E + "_humidity")), Tt = Q("power").filter((Ze) => /^(W|kW)$/.test(W[Ze].attributes.unit_of_measurement || "")), tn = V("binary_sensor").filter((Ze) => fe(Ze) === "moisture"), zn = ce(V("plant"), (Ze) => Ze.startsWith("plant.")).map((Ze) => ({ id: Ze, readings: ie((Mt) => Mt.startsWith("sensor." + Ze.split(".")[1] + "_")) })), Ht = [...V("binary_sensor").filter((Ze) => Se.includes(fe(Ze))), ...ie((Ze) => Ze.startsWith("binary_sensor."))];
      return {
        id: E,
        name: M.name,
        icon: M.icon,
        readings: [...We.slice(0, 1), ...Je.slice(0, 1), ...tn],
        power: Tt.length ? Tt.reduce((Ze, Mt) => Ze + Number(W[Mt].state) * (W[Mt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: V("switch"),
        lights: V("light"),
        actions: [...V("light"), ...ce(V("climate"), (Ze) => Ze.startsWith("climate.")), ...ce(V("cover"), (Ze) => Ze.startsWith("cover.")), ...ce(V("humidifier"), (Ze) => Ze.startsWith("humidifier.")), ...ce(V("valve"), (Ze) => Ze.startsWith("valve.")), ...V("media_player"), ...V("vacuum"), ...g.length ? [] : ie((Ze) => Ze.startsWith("vacuum."))],
        solar: ie((Ze) => Ze.includes("_solar_")),
        plants: zn,
        openings: Ht,
        alerts: [...tn, ...Ht].filter((Ze) => {
          var Mt;
          return ((Mt = W[Ze]) == null ? void 0 : Mt.state) === "on";
        })
      };
    }).filter((M) => M.readings.length || M.plugs.length || M.actions.length || M.solar.length || M.plants.length), Ce = Object.keys(q).find((M) => /^sensor\..*(p1_meter_power|grid_power)$/.test(M) && q[M].state !== "unavailable") || null, Oe = (M) => Object.keys(q).filter((E) => E.startsWith(M + ".") && oe(E)), y = Oe("alarm_control_panel"), S = g.length ? g : ["vacuum." + en + "robot"];
    return {
      states: W,
      rooms: ke,
      grid: Ce,
      vacuums: S,
      homeVacuums: S.filter((M) => !ke.some((E) => E.actions.includes(M))),
      security: {
        alarms: y.length ? y : ["alarm_control_panel." + en + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(l).filter((M) => M.startsWith("binary_sensor.")), "sensor." + en + "doorbell"]
      }
    };
  }
  return { model: X, call: G, stop() {
    clearInterval(R), clearInterval(P);
  } };
}
const so = (n) => n < 0 ? 0 : n > 1 ? 1 : n, _l = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, Du = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Ld = {}, ba = (n, l, i) => {
  const u = n + l + i;
  return Ld[u] || (Ld[u] = Du(_l(n).map((h, f) => h + (_l(l)[f] - h) * i)));
}, _d = {}, ws = (n) => _d[n] || (_d[n] = _l(n));
function Ru(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ba(l.clear[0], l.cloudy[0], 0.12), ba(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ba(l.rain[0], "#000000", 0.22), ba(l.rain[1], "#000000", 0.22)], l;
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
], ro = (n, l) => (Nu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, mc = 1, hc = 2, fc = 3, gc = 4, Qi = 5, ys = 6, Al = 7, vc = 8, Ad = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Bu = (n, l, i) => {
  let u = !1;
  for (let h = 0, f = n.length - 1; h < n.length; f = h++) {
    const x = n[h], T = n[f];
    x[1] > i != T[1] > i && l < (T[0] - x[0]) * (i - x[1]) / (T[1] - x[1]) + x[0] && (u = !u);
  }
  return u;
};
function Pu(n, l, i, u, { oneBit: h, ink: f, paper: x, snowInk: T }) {
  const b = new Uint8ClampedArray(i * u * 4), N = ws(f), re = ws(x);
  for (let ae = 0; ae < u; ae++) for (let R = 0; R < i; R++) {
    const P = ae * i + R, G = l[P];
    if (n[P] == null) continue;
    let X = ws(n[P]);
    if (h) {
      let j;
      G === gc || G === vc ? j = !0 : G === Qi ? j = T : G === Al || G === ys ? j = !1 : j = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= ro(R, ae), (G === mc || G === hc || G === fc || G === ys) && (R > 0 && l[P - 1] !== G || R < i - 1 && l[P + 1] !== G || ae > 0 && l[P - i] !== G || ae < u - 1 && l[P + i] !== G) && (j = !0), X = j ? N : re;
    }
    b[P * 4] = X[0], b[P * 4 + 1] = X[1], b[P * 4 + 2] = X[2], b[P * 4 + 3] = 255;
  }
  return { w: i, h: u, data: b };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (n) => Cs(n, !1).split("/")[0], dl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zu = [".##", "##.", ".#.", "#.."];
function bc(n, { width: l, height: i, colors: u, wave: h = 0.38, soft: f = 6, glow: x = 0.6, columns: T = 6 }) {
  const b = { ...co, dawn: "#e5a77e", ...u }, N = Ru(b), re = l, ae = i, R = re / T, P = R / 2, G = Math.PI * 2, X = n.length ? n : [{ cond: "cloudy", night: !1 }], j = [...Array(T * 2)].map((Z, oe) => {
    const A = X[Math.min(oe, X.length - 1)], W = Hu(A.cond), fe = oe % 2 === 1;
    return { cond: A.cond, k: W, night: fe, sky: N[W][fe ? 1 : 0], cover: Iu[W] };
  }), q = (Z) => ae * (0.5 - h * Math.cos(G * (Z / R - 0.25)));
  return { C: b, S: j, W: re, H: ae, cw: R, sw: P, TAU: G, yb: q, side: (Z, oe, A) => {
    const W = (Z ? q(oe) - A : A - q(oe)) / Math.max(3, f * 1.4) + 0.5;
    return W <= 0 ? 0 : W >= 1 ? 1 : W;
  }, glowAt: (Z) => {
    const oe = ((Z / R - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(T - 1, Math.round(Z / R - 0.25))), W = Math.max(0, Math.min(T - 1, Math.round(Z / R - 0.75))), fe = 1 - (j[2 * A].cover + j[2 * W + 1].cover) / 2, Se = Math.sin(Math.PI * Math.min(1, Math.max(0, q(Z) / ae)));
    return { c: oe < 0.5 ? b.dusk : b.dawn, a: x * (0.2 + 0.8 * fe) * Se * Se };
  }, soft: f, tw: R * 0.3, sy: ae / 90 };
}
function wc(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: h, sw: f, side: x, C: T, TAU: b, sy: N } = n, re = l, ae = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((R, P) => {
    const G = dl(u * 977 + P * 131 + 7), X = (P + 0.5) * f, j = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let q = 0; q < j; q++) {
      const $ = X + (G() - 0.5) * f * 1.6, O = (6 + G() * 76) * N, Z = G() < 0.35, oe = 1.8 + G() * 1.6, A = x(!0, $, O) * (Z ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(b * re / 2600 + q * 1.7 + P) : 1);
      A >= 0.03 && ae.stars.push({ x: $, y: O, big: Z, size: oe, o: A });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const q = X + (G() - 0.5) * f * 0.3, $ = Math.min(15, f * 0.29);
      ae.suns.push({ x: q, y: 32 * N, rad: $, halo: $ * 2.8 * (i ? 1 + 0.07 * Math.sin(b * re / 3600 + P) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const q = Math.min(0.78, f * 0.55 / 34), $ = X - 23 * q + (G() - 0.5) * f * 0.2;
      ae.moons.push({ x: $ + 23 * q, y: (4 + (i ? 0.8 * Math.sin(b * re / 5200 + P) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), h.forEach((R, P) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!G) return;
    const X = dl(u * 577 + P * 71 + 3), j = (P + 0.5) * f, q = R.k === "rain" || R.k === "storm" || R.night ? T.cloudNight : T.cloudDay, $ = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let O = 0; O < G; O++) {
      const Z = f / 46 * (R.k === "partly" ? 0.85 : 0.75 + X() * 0.55), oe = j + (R.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (R.k === "partly" ? 40 : 6 + X() * 26) * N, W = i ? 2.5 * Math.sin(b * re / 9e3 + P * 1.3 + O * 2.1) : 0, fe = i ? 0.9 * Math.sin(b * re / 6100 + P + O) : 0;
      ae.clouds.push({ x: oe - 23 * Z + W, y: A - 15.33 * Z + fe, w: 46 * Z, h: 30.66 * Z, fill: q, o: $ * (G > 1 && O === 0 ? 0.85 : 1) });
    }
  }), h.forEach((R, P) => {
    const G = dl(u * 313 + P * 29 + 11), X = (P + 0.5) * f, j = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < j; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 44 + G() * 36, oe = 1;
      if (i) {
        const W = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        O -= 0.21 * (W - (Z - 44)), Z = 44 + W, oe = Math.min(1, W / 6, (36 - W) / 6);
      }
      Z *= N;
      const A = x(R.night, O, Z) * oe;
      A >= 0.05 && ae.drops.push({ x: O, y: Z, o: A });
    }
    const q = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < q; $++) {
      let O = X + (G() - 0.5) * f * 1.05, Z = 40 + G() * 44, oe = 1;
      if (i) {
        const W = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + W, O += 1.6 * Math.sin(b * re / 2800 + $ * 1.9 + P), oe = Math.min(1, W / 6, (44 - W) / 6);
      }
      Z *= N;
      const A = x(R.night, O, Z) * oe;
      A >= 0.05 && ae.flakes.push({ x: O, y: Z, o: A });
    }
    if (R.k === "fog") {
      const $ = R.night ? "#c8ccd6" : "#ffffff", O = R.night ? 0.28 : 0.62, Z = i ? 4 * Math.sin(b * re / 8e3 + P) : 0;
      for (let oe = 0; oe < 4; oe++) ae.fogs.push({ x: X - f * 0.75 + oe % 2 * f * 0.18 + (oe % 2 ? Z : -Z), y: (30 + oe * 13) * N, w: f * 1.3, c: $, a: O });
    }
    if (R.k === "storm") {
      const $ = (re / 3400 + P * 0.37) % 1;
      ae.bolts.push({ x: X + (G() - 0.5) * f * 0.3 - 5, y: 36 * N, o: i && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), ae;
}
function ju(n, l, i, u, h, f, x, T) {
  const { S: b, C: N, cw: re, yb: ae, glowAt: R, soft: P, tw: G, sy: X } = n, j = new Array(i * u), q = new Uint8Array(i * u), $ = new Uint8Array(i * u), O = (y, S, M, E, se) => {
    M == null || y < 0 || S < 0 || y >= i || S >= u || (E >= 1 || E > ro(y + 5, S + 3)) && (j[S * i + y] = M, q[S * i + y] = se);
  }, Z = (y, S, M, E) => {
    for (let se = Math.max(0, Math.floor(S - M) - 1); se <= Math.min(u - 1, S + M + 1); se++) for (let V = Math.max(0, Math.floor(y - M) - 1); V <= Math.min(i - 1, y + M + 1); V++) E(V, se, V + 0.5 - y, se + 0.5 - S);
  }, oe = (y, S, M) => {
    for (let se = 0; se < y.length - 1; se++) {
      const V = (se + S) * re;
      if (M < V - G / 2) return [y[se], y[se], 0];
      if (M <= V + G / 2) return [y[se], y[se + 1], (M - V + G / 2) / G];
    }
    const E = y[y.length - 1];
    return [E, E, 0];
  }, A = b.filter((y) => !y.night).map((y) => y.sky), W = b.filter((y) => y.night).map((y) => y.sky), fe = P / f, Se = 16 * X / f;
  for (let y = 0; y < i; y++) {
    const S = (y + 0.5) * h, M = ae(S) / f, E = oe(A, 0.75, S), se = oe(W, 1.25, S), V = R(S);
    for (let Q = 0; Q < u; Q++) {
      const ie = ro(y, Q), ce = Q + 0.5 - M, We = (fe > 0.01 ? so(0.5 + ce / fe) : ce > 0 ? 1 : 0) > ie;
      let Je = We ? E[2] > ie ? E[1] : E[0] : se[2] > ie ? se[1] : se[0];
      (We ? so(((Q + 0.5) / u - 0.45) / 0.55) * 0.7 : so(1 - (Q + 0.5) / (u * 0.55)) * 0.7) > ro(y + 2, Q + 5) && (Je = We ? ba(Je, "#ffffff", 0.18) : ba(Je, "#000000", 0.25)), We && ce >= 0 && ce < Se && V.a * 1.3 * (1 - ce / Se) > ro(y + 6, Q + 1) && (Je = V.c), j[Q * i + y] = Je, $[Q * i + y] = We ? 0 : 1;
    }
  }
  const g = ba(N.sun, "#ffffff", 0.55), ke = ba(N.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const S = Math.floor(y.x / h), M = Math.floor(y.y / f);
    if (S < 0 || M < 0 || S >= i || M >= u || !$[M * i + S] || y.o < 0.15) return;
    const E = y.o > 0.45 ? N.star : ba(N.star, j[M * i + S], 0.5), se = y.big && y.o > 0.6 ? Math.floor(y.size / h) : 0;
    O(S, M, E, 1, Al);
    for (let V = 1; V <= se; V++) [[S - V, M], [S + V, M], [S, M - V], [S, M + V]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < i && Q[1] < u && $[Q[1] * i + Q[0]] && O(Q[0], Q[1], E, 1, Al);
    });
  }), l.suns.forEach((y) => {
    const S = Math.max(1.5, y.rad / h), M = y.x / h, E = y.y / f, se = y.halo / h * 0.85;
    if (Z(M, E, se, (V, Q, ie, ce) => {
      const We = Math.sqrt(ie * ie + ce * ce);
      We > S && We < se && !$[Q * i + V] && O(V, Q, g, 0.3 * (1 - (We - S) / (se - S)), 0);
    }), T) {
      const V = Math.floor(x / 500) % 2, Q = Math.max(1, S * 0.3);
      for (let ie = 0; ie < 8; ie++) if (ie % 2 === V) for (let ce = S + 1.2; ce < S + 1.2 + Q; ce += 0.7) O(Math.floor(M + Math.cos(ie * Math.PI / 4) * ce), Math.floor(E + Math.sin(ie * Math.PI / 4) * ce), N.sun, 1, vc);
    }
    Z(M, E, S, (V, Q, ie, ce) => {
      ie * ie + ce * ce <= S * S && O(V, Q, so(((ce / S + 1) / 2 - 0.6) / 0.4) > ro(V, Q) ? N.sunEdge : N.sun, 1, mc);
    });
  }), l.moons.forEach((y) => {
    const S = Math.max(1.5, y.d * 0.37 / h), M = y.x / h, E = y.y / f, se = M + 0.547 * S, V = E - 0.503 * S, Q = 0.82 * S;
    Z(M, E, S, (ie, ce, We, Je) => {
      if (We * We + Je * Je > S * S) return;
      const Tt = ie + 0.5 - se, tn = ce + 0.5 - V;
      Tt * Tt + tn * tn > Q * Q && O(ie, ce, so((Je + S) / (2 * S) * 1.1 - 0.1) > ro(ie, ce) ? N.moon : ke, 1, hc);
    });
  }), l.clouds.forEach((y) => {
    const S = Math.max(3, y.w / h), M = S * 0.6665, E = y.x / h, se = y.y / f, V = ba(y.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(se) - 1); Q <= Math.min(u - 1, se + M + 1); Q++) for (let ie = Math.max(0, Math.floor(E) - 1); ie <= Math.min(i - 1, E + S + 1); ie++) {
      const ce = (ie + 0.5 - E) / S, We = (Q + 0.5 - se) / S;
      Ad(ce, We) && O(ie, Q, !Ad(ce, We + 1 / S) || so((We - 0.42) / 0.25) * 0.8 > ro(ie, Q) ? V : y.fill, y.o, fc);
    }
  }), l.fogs.forEach((y) => {
    const S = Math.floor(y.y / f), M = Math.max(S, Math.floor((y.y + 6 * X) / f) - 1), E = Math.floor(y.x / h), se = Math.floor((y.x + y.w) / h);
    for (let V = S; V <= M; V++) for (let Q = E; Q <= se; Q++) {
      const ie = (Q - E) / Math.max(1, se - E);
      O(Q, V, y.c, y.a * (ie < 0.25 ? ie / 0.25 : ie > 0.75 ? (1 - ie) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  l.drops.forEach((y) => {
    const S = y.x / h, M = Math.floor(y.y / f);
    for (let E = 0; E < Ce; E++) O(Math.floor(S - 0.208 * E * f / h), M + E, N.rain, y.o, gc);
  });
  const Oe = Math.max(0, Math.round(4.4 / h / 2.6));
  return l.flakes.forEach((y) => {
    const S = Math.floor(y.x / h), M = Math.floor(y.y / f);
    O(S, M, N.snow, y.o, Qi);
    for (let E = 1; E <= Oe; E++)
      O(S - E, M, N.snow, y.o, Qi), O(S + E, M, N.snow, y.o, Qi), O(S, M - E, N.snow, y.o, Qi), O(S, M + E, N.snow, y.o, Qi);
  }), l.bolts.forEach((y) => {
    if (h <= 3.5)
      for (let S = Math.floor(y.y / f); S <= (y.y + 24) / f; S++) for (let M = Math.floor(y.x / h); M <= (y.x + 11) / h; M++)
        Bu(Vu, (M + 0.5) * h - y.x, (S + 0.5) * f - y.y) && O(M, S, N.sun, 1, ys);
    else {
      const S = Math.round(y.x / h), M = Math.round(y.y / f);
      zu.forEach((E, se) => E.split("").forEach((V, Q) => {
        V === "#" && O(S + Q, M + se, N.sun, 1, ys);
      }));
    }
  }), { col: j, ids: q };
}
function Gu(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), h = Math.max(6, Math.round(l.height / i)), f = l.width / u, x = l.height / h, T = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (P) => {
    const G = bc(P, l);
    return ju(G, wc(G, { clock: T, ambient: l.ambient, seed: l.seed }), u, h, f, x, T, l.ambient);
  }, N = b(n), re = l.reveal == null ? 1 : so(l.reveal);
  let ae = N.col, R = N.ids;
  if (re < 1) {
    const P = l.prev ? b(l.prev) : null, G = re * (u + 12);
    ae = new Array(u * h), R = new Uint8Array(u * h);
    for (let X = 0; X < u * h; X++) {
      const j = X % u, q = X / u | 0;
      (l.reduce ? re : so((G - j) / 12)) > ro(j, q) ? (ae[X] = N.col[X], R[X] = N.ids[X]) : P ? (ae[X] = P.col[X], R[X] = P.ids[X]) : (ae[X] = null, R[X] = 255);
    }
  }
  return Pu(ae, R, u, h, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function Uu(n, l, i) {
  const u = i.width, h = i.height, f = i.reveal == null ? 1 : so(i.reveal), x = (R, P) => {
    const G = bc(P, i);
    Yu(R, G, wc(G, i));
  };
  if (n.clearRect(0, 0, u, h), f >= 1) {
    x(n, l);
    return;
  }
  if (i.prev && x(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = f, x(n, l), n.restore();
    return;
  }
  const T = n.canvas, b = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (b.width !== T.width || b.height !== T.height) && (b.width = T.width, b.height = T.height);
  const N = b.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, h), x(N, l);
  const re = f * (u + 64) - 64, ae = N.createLinearGradient(re, 0, re + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = ae, N.fillRect(0, 0, u, h), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(b, 0, 0), n.restore();
}
function Yu(n, l, i) {
  const { W: u, H: h, S: f, C: x, cw: T, yb: b, glowAt: N, soft: re, tw: ae, sy: R } = l, P = (g, ke) => {
    const Ce = ws(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, G = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Oe = 0; Oe < g.length - 1; Oe++) {
      const y = (Oe + ke) * T, S = (y - ae / 2) / u, M = (y + ae / 2) / u;
      S > 0 && S < 1 && Ce.addColorStop(S, g[Oe]), M > 0 && M < 1 && Ce.addColorStop(M, g[Oe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), j = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Oe = u * Ce / X, y = g == null ? 0 : b(Oe) + g;
      Ce ? n.lineTo(Oe, y) : n.moveTo(Oe, y);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Oe = u * Ce / X;
      n.lineTo(Oe, b(Oe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, h);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = N(u * g / 64);
    q.addColorStop(g / 64, P(ke.c, Math.min(1, ke.a)));
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
  const Z = new Path2D(Wu), oe = new Path2D(Ou), A = new Path2D(Fu), W = new Path2D(qu);
  n.fillStyle = x.star, i.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const fe = ba(x.sun, "#ffffff", 0.55);
  i.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, P(fe, 0.42)), ke.addColorStop(0.7, P(fe, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, x.sun), Ce.addColorStop(1, x.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = ba(x.moon, "#ffffff", 0.6);
  i.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, x.moon), n.fillStyle = ke, n.fill(oe), n.restore();
  }), i.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), i.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, P(g.c, 0)), ke.addColorStop(0.25, P(g.c, g.a)), ke.addColorStop(0.75, P(g.c, g.a)), ke.addColorStop(1, P(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * R);
  }), n.fillStyle = x.rain, i.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = x.snow, i.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = x.sun, i.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
const Zu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Xi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, us = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, cl = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Ku = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', ha = (n, l, i, u) => {
  const h = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ku(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + h) + " " + (l - h) + "L" + (n + i) + " " + l + "L" + (n + h) + " " + (l + h) + "L" + n + " " + (l + i) + "L" + (n - h) + " " + (l + h) + "L" + (n - i) + " " + l + "L" + (n - h) + " " + (l - h) + 'Z"/>';
}, Ed = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $u = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Xu = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Ju = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Qu(n, l, i, u) {
  return n === "clear" ? l ? Ed(i ? us.l : us.s, u) + (i ? ha(70, 20, 5.83, 1) + ha(78.33, 41.67, 3.75, 0.8) + ha(60, 71.67, 3.33, 0.6) : ha(42, 12, 3.5, 1) + ha(47, 25, 2.25, 0.8) + ha(36, 43, 2, 0.6)) : $u(u, i) : n === "partly" ? (l ? Ed(i ? us.lp : us.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + cl(i ? Xi.lp : Xi.sp, l ? "wbCloudLight" : "wbBright") + (l ? i ? ha(73.33, 16.67, 4.17, 0.9) : ha(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? cl(i ? Xi.lc : Xi.s, l ? "wbCloudLight" : "wbBright") + (l ? i ? ha(15, 15, 3.75, 0.8) + ha(76.67, 13.33, 2.92, 0.6) : ha(9, 9, 2.25, 0.8) + ha(46, 8, 1.75, 0.6) : "") : cl(i ? Xi.lr : Xi.s, "wbCloudLight") + (n === "rain" ? Xu(i) : Ju(i));
}
function ep(n, l, i, u) {
  let h = Zu(n);
  const f = h === "night" || !!i;
  h === "night" && (h = "clear");
  const x = l ? 90 : 54;
  return { k: h, night: f, svg: '<svg viewBox="0 0 ' + x + " " + x + '">' + Qu(h, f, l, u) + "</svg>" };
}
const za = 6e4, qa = 36e5, ci = 864e5, Rr = 1440, tp = 6, np = 10 * za, ps = 3, ul = 20, ap = 3, op = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), ip = 30 * za, rp = 7, sp = 3, Dd = 1, lp = za, dp = 15 * za, qn = {
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
}, ot = {
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
}, up = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], pp = Object.keys(ot.phases), ms = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, xc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], hs = 100, Rd = "µg/m³", hp = "weather_alerts.air_quality_pollen", Nd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bp = { daily: 1, hourly: 2 }, He = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), fa = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), er = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Mn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Bd = /* @__PURE__ */ new Map(), Pd = /* @__PURE__ */ new Map(), pl = /* @__PURE__ */ new WeakMap(), xp = (n) => {
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
function vn(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const h = (l == null ? void 0 : l.number_format) === "none", f = { maximumFractionDigits: 2, ...i, ...h ? { useGrouping: !1 } : {} }, x = h ? "en-US" : xp(l), T = JSON.stringify([x, f]);
  let b = Bd.get(T);
  if (!b) {
    try {
      b = new Intl.NumberFormat(x, f);
    } catch {
      b = new Intl.NumberFormat(void 0, f);
    }
    Bd.set(T, b);
  }
  return b.format(u);
}
const Hl = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function yp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (pl.has(n)) return pl.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return pl.set(n, i), i;
}
const yc = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function kc(n, l) {
  const i = JSON.stringify([n, l]);
  let u = Pd.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    Pd.set(i, u);
  }
  return u;
}
const Ji = (n, l) => kc(Hl(l), { hour: "numeric", minute: "2-digit", hourCycle: yp(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: yc(l) }).format(n), Id = (n, l) => kc(Hl(l), { weekday: "short", timeZone: yc(l) }).format(n), kp = (n, l) => n.toLocaleDateString(Hl(l), { weekday: "narrow" }), Dn = (n, l) => Mn(l) ? vn(Math.round(Number(l)), n.locale) + "°" : "–", tr = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, Ar = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), Vn = Math.PI / 180, Mp = 2440588, Cp = 2451545, ks = Vn * 23.4397, Sp = 149598e3, Tp = -0.833 * Vn, Lp = 0.133 * Vn, Hd = 5 * za, Mc = (n) => n.getTime() / ci - 0.5 + Mp - Cp, Cc = (n, l) => Math.atan2(Math.sin(n) * Math.cos(ks) - Math.tan(l) * Math.sin(ks), Math.cos(n)), Sc = (n, l) => Math.asin(Math.sin(l) * Math.cos(ks) + Math.cos(l) * Math.sin(ks) * Math.sin(n)), _p = (n, l) => Vn * (280.16 + 360.9856235 * n) - l, Ap = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function Tc(n) {
  const l = Vn * (357.5291 + 0.98560028 * n), i = Vn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + Vn * 102.9372 + Math.PI;
  return { ra: Cc(u, 0), dec: Sc(u, 0), dist: Sp };
}
function Lc(n) {
  const l = Vn * (218.316 + 13.176396 * n), i = Vn * (134.963 + 13.064993 * n), u = Vn * (93.272 + 13.22935 * n), h = l + Vn * 6.289 * Math.sin(i), f = Vn * 5.128 * Math.sin(u);
  return { ra: Cc(h, f), dec: Sc(h, f), dist: 385001 - 20905 * Math.cos(i) };
}
const _c = (n, l, i, u) => {
  const h = Mc(l), f = n(h);
  return Ap(_p(h, Vn * -u) - f.ra, Vn * i, f.dec);
}, Fl = (n, l, i) => _c(Tc, n, l, i), Ep = (n, l, i) => _c(Lc, n, l, i);
function Ac(n, l, i, u) {
  const h = {};
  let f = i.getTime(), x = n(i) - l;
  for (let T = f + Hd; T <= u.getTime(); T += Hd) {
    const b = n(new Date(T)) - l;
    if (x < 0 != b < 0) {
      const N = new Date(f + (T - f) * x / (x - b));
      b > 0 ? h.rise ?? (h.rise = N) : h.set ?? (h.set = N);
    }
    f = T, x = b;
  }
  return h;
}
const Ec = (n) => {
  const l = tr(n);
  return [l, new Date(l.getTime() + ci)];
}, Dp = (n, l, i) => Ac((u) => Fl(u, l, i), Tp, ...Ec(n)), Rp = (n, l, i) => Ac((u) => Ep(u, l, i), Lp, ...Ec(n));
function Np(n) {
  const l = Mc(n), i = Tc(l), u = Lc(l), h = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), f = Math.atan2(i.dist * Math.sin(h), u.dist - i.dist * Math.cos(h)), x = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(f)) / 2, phase: 0.5 + 0.5 * f * (x < 0 ? -1 : 1) / Math.PI };
}
const Bp = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Ms = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Mn(l.latitude) && Mn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Fd(n, l) {
  var N, re, ae;
  const i = Ms(n), u = i ? Dp(l, i.lat, i.lon) : {}, h = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], f = tr(l).getTime(), x = (R) => {
    const P = R ? new Date(R) : null;
    return P && Number.isFinite(P.getTime()) && tr(P).getTime() === f ? P : null;
  }, T = x((re = h == null ? void 0 : h.attributes) == null ? void 0 : re.next_rising), b = x((ae = h == null ? void 0 : h.attributes) == null ? void 0 : ae.next_setting);
  return T && (u.rise = T), b && (u.set = b), u;
}
function Pp(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = Ms(n);
  return i ? Fl(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Nr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Ss = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, ga = (n, l, i) => {
  var u, h;
  for (const f of l) {
    const x = (u = n.states) == null ? void 0 : u[f];
    if (!Nr(x)) continue;
    const T = (h = x.attributes) == null ? void 0 : h[i];
    if (T != null && T !== "") return { stateObj: x, value: T };
  }
}, Ip = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(Nr), Hp = (n, l, i) => l.map((u) => {
  var h;
  return (h = n.states) == null ? void 0 : h[u];
}).find((u) => {
  var h;
  return Nr(u) && (((h = u.attributes) == null ? void 0 : h.supported_features) == null || Number(u.attributes.supported_features) & bp[i]);
});
function Dr(n, l, i) {
  var f, x, T, b;
  const u = ((x = (f = n.config) == null ? void 0 : f.unit_system) == null ? void 0 : x.length) || "", h = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return h.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return h.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return h.wind_speed_unit || u + "/h";
    default:
      return h.temperature_unit || ((b = (T = n.config) == null ? void 0 : T.unit_system) == null ? void 0 : b.temperature) || "";
  }
}
function El(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [h, ...f] = n.formatEntityAttributeValueToParts(l, i, u).map((x) => x.value);
      return { number: h, unit: f.join("").trim() };
    }
  } catch {
  }
  return { number: vn(u, n.locale), unit: Dr(n, l, i) };
}
function Fp(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const h = El(n, l, i, u);
  return (h.number + " " + h.unit).trim();
}
function fs(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return cp[l.state] || (i && Mn(l.state) ? vn(l.state, n.locale) + " " + i : l.state);
}
function Od(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Op = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Wp = (n) => xc.find(([, l]) => n <= l)[0];
function qp(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? fp[l] : void 0;
  if (i === void 0) return;
  const u = gp.findIndex((h) => n * i < h);
  return u === -1 ? 12 : u;
}
const Wd = (n, l) => {
  const i = l ? vp[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, qd = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), ml = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && Ss(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Vp(n) {
  var i;
  const l = {};
  for (const [u, h] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (h && "integration_type" in h) {
      l[u] = h.categories;
      continue;
    }
    for (const [f, x] of Object.entries((h == null ? void 0 : h.integrations) ?? {})) l[f] = x == null ? void 0 : x.categories;
  }
  return l;
}
const Dc = (n, l, i) => {
  var h, f, x;
  const u = (f = (h = n.entities) == null ? void 0 : h[i]) == null ? void 0 : f.platform;
  return !!u && !!((x = l[u]) != null && x.includes(hp));
};
function zp(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var h;
    return u.entity_id.startsWith("sensor.") && Nd.includes(((h = u.attributes) == null ? void 0 : h.device_class) ?? "") && Ss(n, u.entity_id) && Dc(n, l, u.entity_id);
  }).sort((u, h) => u.entity_id.localeCompare(h.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), Nd.map((u) => i.get(u)).filter(Boolean);
}
const jp = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, h;
  return i.entity_id.startsWith("sensor.") && Ss(n, i.entity_id) && Dc(n, l, i.entity_id) && (((h = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : h.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Vd(n, l, i) {
  const u = Math.max(l - n, 1e-6), h = i[i.length - 1], f = i.find((N) => u / N <= 4) ?? h * Math.ceil(u / (4 * h)), x = Math.floor(n / f) * f;
  let T = Math.ceil(l / f) * f;
  T === x && (T = x + f);
  const b = [];
  for (let N = x; N <= T + f / 1e3; N += f) b.push(N);
  return { min: x, max: T, ticks: b };
}
const Er = (n, l, i) => {
  const u = (x) => [1, 3, 5].map((T) => parseInt(x.slice(T, T + 2), 16)), h = u(n), f = u(l);
  return "rgb(" + h.map((x, T) => Math.round(x + (f[T] - x) * i)).join(", ") + ")";
}, Gp = (n, l, i, u) => {
  const h = i * Math.abs(1 - 2 * u), f = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + h + " " + i + " 0 0 " + f + " " + n + " " + (l - i) + " Z";
}, Eo = ({ icon: n, name: l, sub: i, visual: u, double: h, backdrop: f, cls: x }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (f ? " wbHasBackdrop" : "") + (x ? " " + x : "") + '">' + (f ? '<div class="wbBackdrop" aria-hidden="true">' + f + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + er(n) + '</div><div class="wbText"><span class="wbName">' + He(l) + "</span>" + (i ? '<span class="wbSub">' + He(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + u + "</div></div>", hl = (n, l) => '<div class="wbValue"><span class="wbNum">' + He(n) + "</span>" + (l ? '<span class="wbUnitV">' + He(l) + "</span>" : "") + "</div>";
function Up(n) {
  const l = n.max - n.min || 1, i = (T) => 100 - (Math.min(n.max, Math.max(n.min, T)) - n.min) / l * 100, u = (T) => T / Rr * 100 + "%", h = (T) => T.map((b) => b.t + "," + i(b.v)).join(" "), f = n.kind === "line" ? n.points : [];
  let x = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((T) => '<span class="wbDcSunMark" style="left:' + u(T.t) + '">' + er(T.rise ? qn.sunsetUp : qn.sunsetDown) + He(T.label) + "</span>").join("") + "</div>";
  return x += '<div class="wbDcY">' + n.ticks.map((T) => '<span style="top:' + i(T) + '%">' + He(n.format(T)) + "</span>").join("") + "</div>", x += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Rr + ' 100" preserveAspectRatio="none">' + n.night.map(([T, b]) => '<rect class="wbDcNight" x="' + T + '" y="0" width="' + (b - T) + '" height="100"></rect>').join("") + n.ticks.map((T) => '<line class="wbDcGrid" x1="0" x2="' + Rr + '" y1="' + i(T) + '" y2="' + i(T) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((T) => '<line class="wbDcSunLine" x1="' + T.t + '" x2="' + T.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (f.length > 1 ? '<polygon class="wbDcArea" points="' + f[0].t + ",100 " + h(f) + " " + f[f.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(f) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((T) => T.v > 0).map((T) => '<i class="wbDcBar" style="left:' + u(T.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(T.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + He(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + He(n.note) + "</span>" : "") + "</div>", x += '<div class="wbDcX">' + n.hours.map((T) => '<span class="' + (T.minor ? "wbMinor" : "") + '" style="left:' + u(T.t) + '">' + He(T.label) + "</span>").join("") + "</div></div>", x;
}
function Yp(n, l) {
  const x = n.map((j) => j.value), T = Math.min(...x), b = Math.max(...x), N = b - T || 1, re = (j) => j / (n.length - 1) * 300, ae = (j) => 18 + (1 - (j - T) / N) * 84, R = n.map((j, q) => re(q) + "," + ae(j.value)).join(" "), P = x.indexOf(b), G = x.indexOf(T), X = (j) => j === 0 ? "start" : j === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + R + ' 300,102"></polygon><polyline class="wbLine" points="' + R + '" vector-effect="non-scaling-stroke"></polyline><text x="' + re(P) + '" y="' + (ae(b) - 6) + '" text-anchor="' + X(P) + '">' + He(l(b)) + '</text><text x="' + re(G) + '" y="' + (ae(T) + 14) + '" text-anchor="' + X(G) + '">' + He(l(T)) + '</text><text x="0" y="120" text-anchor="start">' + He(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + He(n[n.length - 1].label) + "</text></svg>";
}
function Zp(n, l) {
  const f = n.map((ae) => ae.value).concat([]), x = Math.min(...f) - 2, T = Math.max(...f) + 1, b = T - x || 1, N = 300 / n.length, re = (ae) => (1 - (ae - x) / b) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ae, R) => '<rect class="wbBar' + (ae.now ? " wbNowBar" : "") + '" x="' + (R * N + N * 0.2) + '" y="' + re(ae.value) + '" width="' + N * 0.6 + '" height="' + (104 - re(ae.value)) + '" rx="6"></rect><text x="' + (R * N + N / 2) + '" y="120" text-anchor="middle">' + He(ae.label) + "</text>").join("") + "</svg>";
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
], $p = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], zd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Xp = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Jp = 0;
function jd(n, { getHass: l, entityId: i, style: u = "bitmap", motion: h = !0, cards: f, onOpen: x } = {}) {
  var _a, mo;
  const T = "wb" + ++Jp + "-", b = document.createElement("div");
  b.className = "wb";
  const N = document.createElement("div");
  N.className = "wbBento", b.appendChild(N), n.replaceChildren(b);
  const re = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((C) => !f || f.includes(C)), ae = { current: "wide", hourly: "wide", compared_to_average: "double" }, R = {};
  re.forEach((C) => {
    const D = document.createElement("div");
    D.className = "wbItem", D.dataset.card = C, D.dataset.size = ae[C] || "tile", D.hidden = !0, N.appendChild(D), R[C] = { el: D, html: null };
  });
  let P = !1, G = null, X = 0, j = -1, q = !1, $ = null;
  const O = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let oe = /* @__PURE__ */ new Date(), A = /* @__PURE__ */ new Date(), W = null;
  const fe = {}, Se = {}, g = (C) => {
    var D;
    return ((D = Se[C]) == null ? void 0 : D.forecast) ?? [];
  }, ke = (C, D) => {
    var H;
    return Se[D] ? (H = C.states) == null ? void 0 : H[Se[D].entityId] : void 0;
  };
  function Ce(C) {
    const D = fe[C];
    D && (D.unsub.then((H) => {
      typeof H == "function" && H();
    }).catch(() => {
    }), delete fe[C]), Se[C] && delete Se[C];
  }
  function Oe(C, D, H) {
    var ue;
    if (typeof ((ue = C.connection) == null ? void 0 : ue.subscribeMessage) != "function") return;
    const F = { entityId: H };
    try {
      F.unsub = Promise.resolve(C.connection.subscribeMessage((be) => {
        P || fe[D] !== F || (be != null && be.forecast ? Se[D] = { entityId: H, forecast: be.forecast } : delete Se[D], Ee());
      }, { type: "weather/subscribe_forecast", forecast_type: D, entity_id: H }));
    } catch (be) {
      F.unsub = Promise.reject(be);
    }
    F.unsub.catch(() => {
      fe[D] === F && delete fe[D];
    }), fe[D] = F;
  }
  function y(C, D) {
    var H;
    for (const F of ["daily", "hourly"]) {
      const ue = Hp(C, D, F);
      ((H = fe[F]) == null ? void 0 : H.entityId) !== (ue == null ? void 0 : ue.entity_id) && (Ce(F), ue && Oe(C, F, ue.entity_id));
    }
  }
  const S = (C, D, H, F = !1) => C.callWS({
    type: "history/history_during_period",
    start_time: H.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [D],
    minimal_response: F,
    no_attributes: F,
    significant_changes_only: !1
  });
  async function M(C, D) {
    var he, xe, le;
    const H = ga(C, D, "pressure");
    if (!H) return;
    const F = H.stateObj.entity_id, ue = await S(C, F, new Date(Date.now() - 3 * qa)), be = (le = (xe = (he = ue == null ? void 0 : ue[F]) == null ? void 0 : he.find((Ae) => {
      var Fe;
      return typeof ((Fe = Ae.a) == null ? void 0 : Fe.pressure) == "number";
    })) == null ? void 0 : xe.a) == null ? void 0 : le.pressure;
    Z.pressureHistory = typeof be == "number" ? { entityId: F, value: be } : void 0;
  }
  async function E(C, D) {
    var xe;
    const H = ga(C, D, "temperature");
    if (!H) return;
    const F = H.stateObj.entity_id, ue = tr(/* @__PURE__ */ new Date()), be = await S(C, F, new Date(ue.getTime() - rp * ci)), he = /* @__PURE__ */ new Map();
    for (const le of (be == null ? void 0 : be[F]) ?? []) {
      const Ae = (xe = le.a) == null ? void 0 : xe.temperature, Fe = new Date((le.lc ?? le.lu) * 1e3);
      if (typeof Ae != "number" || Fe >= ue) continue;
      const Ke = Fe.toDateString();
      he.set(Ke, Math.max(he.get(Ke) ?? -1 / 0, Ae));
    }
    Z.temperatureHistory = { entityId: F, dailyHighs: [...he.values()], days: [...he.entries()].map(([le, Ae]) => ({ date: new Date(le), high: Ae })) };
  }
  async function se(C) {
    const D = ml(C);
    if (!D) return;
    const H = await C.callWS({ type: "recorder/statistic_during_period", statistic_id: D, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: D, change: (H == null ? void 0 : H.change) ?? void 0 };
  }
  function V() {
    const C = l == null ? void 0 : l();
    if (!C || P || typeof C.callWS != "function") return;
    const D = We(C);
    Z.lastFetch = Date.now(), [M(C, D), E(C, D), se(C)].forEach((H) => H.then(() => Ee(), () => {
    }));
  }
  async function Q() {
    const C = l == null ? void 0 : l();
    if (!C) return;
    const D = ga(C, We(C), "temperature");
    if (!D) return;
    const H = D.stateObj.entity_id, F = tr(/* @__PURE__ */ new Date());
    try {
      const ue = await S(C, H, F), be = (he) => ((ue == null ? void 0 : ue[H]) ?? []).map((xe) => {
        var le;
        return { time: xe.lu * 1e3, value: (le = xe.a) == null ? void 0 : le[he] };
      }).filter((xe) => typeof xe.value == "number");
      Z.todayHistory = { day: F.toDateString(), fetched: Date.now(), temperature: be("temperature"), humidity: be("humidity") }, Ee();
    } catch {
    }
  }
  async function ie(C) {
    const D = l == null ? void 0 : l();
    if (D)
      try {
        const H = await S(D, C, new Date(Date.now() - 24 * qa), !0), F = ((H == null ? void 0 : H[C]) ?? []).filter((be) => Mn(be.s)), ue = Math.max(1, Math.ceil(F.length / 48));
        Z.aqHistory = { entityId: C, points: F.filter((be, he) => he % ue === 0).map((be) => ({ label: Ji(new Date(be.lu * 1e3), D), value: Number(be.s) })) }, Ee();
      } catch {
      }
  }
  function ce(C) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => C.callWS({ type: "integration/descriptions" })).then((D) => {
      Z.categories = Vp(D);
    }, () => {
      Z.categories = {};
    }).then(() => Ee()));
  }
  function We(C) {
    var H;
    const D = Object.keys(C.states || {}).filter((F) => F.startsWith("weather.") && Ss(C, F)).sort();
    return i && ((H = C.states) != null && H[i]) ? [i, ...D.filter((F) => F !== i)] : D;
  }
  const Je = (C) => Z.categories ? { air: zp(C, Z.categories), pollen: jp(C, Z.categories) } : { air: [], pollen: [] };
  function Tt(C, D, H, F) {
    if (u === "smooth") {
      const ue = ep(C, D === 90, H, T + "g-" + F);
      return '<span class="wbWx wbS' + D + " wb" + ue.k[0].toUpperCase() + ue.k.slice(1) + (ue.night ? " wbNight" : "") + '" aria-hidden="true">' + ue.svg + "</span>";
    }
    return '<span class="wbWx wbS' + D + '" aria-hidden="true"><canvas data-wb-wx="' + He(Cs(C, H)) + '" data-size="' + D + '"></canvas></span>';
  }
  const tn = () => g("daily").filter((C) => C.templow != null).slice(0, tp);
  function zn(C, D) {
    const H = new Date(D.datetime), F = /* @__PURE__ */ new Date();
    return Ar(H, F) ? ot.today : Ar(H, new Date(F.getTime() + ci)) ? ot.tomorrow : Id(H, C);
  }
  const Ht = (C, D, H) => H === 0 ? zn(C, D) : Id(new Date(D.datetime), C);
  function Ze(C, D) {
    var Fe, Ke, Ue, De;
    const H = Ip(C, D);
    if (!H) return "";
    const F = tn(), ue = O.openDay !== void 0 ? F[O.openDay] : void 0, be = ga(C, D, "temperature"), he = F[0], xe = he && Ar(new Date(he.datetime), /* @__PURE__ */ new Date()), le = ((Ke = (Fe = C.config) == null ? void 0 : Fe.unit_system) == null ? void 0 : Ke.temperature) || ((Ue = H.attributes) == null ? void 0 : Ue.temperature_unit) || "";
    let Ae = '<div class="wbCard wbWeather' + (ue ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (ue ? " inert" : "") + '><div class="wbNow">' + (x ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + He(ot.openPage) + '">' : '<div class="wbCurrent">') + Tt(H.state, 90, Pp(C), "now") + '<div class="wbTempBlock">' + (be && Mn(be.value) ? '<div class="wbTemp"><span class="wbDeg">' + He(vn(Math.round(Number(be.value)), C.locale)) + '</span><span class="wbUnit">' + He(le) + "</span></div>" : "") + '<div class="wbPlace">' + He(((De = C.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (x ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + He(fs(C, H)) + "</div>" + (xe && he.templow != null ? '<div class="wbRange">' + He(fa(ot.range, { high: Dn(C, he.temperature), low: Dn(C, he.templow) })) + "</div>" : "") + "</div></div>";
    return F.length && (Ae += '<div class="wbColumns" role="list">' + F.map((Ne, Re) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Re + '" data-wb-focus="col-' + Re + '"><span class="wbDay">' + He(Ht(C, Ne, Re)) + "</span>" + Tt(Ne.condition ?? "cloudy", 60, !1, "col" + Re) + '<span class="wbTemps"><span class="wbHi">' + He(Dn(C, Ne.temperature)) + '</span><span class="wbLo">' + He(Dn(C, Ne.templow)) + "</span></span></button>").join("") + "</div>", Ae += '<div class="wbHalves" role="list">' + F.map((Ne, Re) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Re + '" data-wb-focus="half-' + Re + '">' + Tt(Ne.condition ?? "cloudy", 40, !1, "half" + Re) + '<span class="wbText"><span class="wbName">' + He(zn(C, Ne)) + '</span><span class="wbSub">' + He(fa(ot.highLow, { high: Dn(C, Ne.temperature), low: Dn(C, Ne.templow) })) + "</span></span></button>").join("") + "</div>"), Ae + "</div>" + (ue ? nn(C, D, ue) : "") + "</div>";
  }
  function Mt(C) {
    const D = C.getTime(), H = Date.now() - qa;
    return g("hourly").filter((F) => {
      const ue = new Date(F.datetime).getTime();
      return ue >= D && ue < D + ci && ue > H;
    });
  }
  function rt(C) {
    if (!C.length) return ["temperature"];
    const D = ["temperature"];
    return C.some((H) => H.precipitation != null || H.precipitation_probability != null) && D.push("precipitation"), C.some((H) => H.humidity != null) && D.push("humidity"), D;
  }
  function nn(C, D, H) {
    const F = tr(new Date(H.datetime)), ue = Mt(F), be = rt(ue), he = be.includes(O.dayMode) ? O.dayMode : "temperature", xe = (le) => le === "humidity" ? ot.humidity : ot.modes[le];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Tt(H.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + He(zn(C, H)) + '</span><span class="wbSub">' + He(fa(ot.highLow, { high: Dn(C, H.temperature), low: Dn(C, H.templow) })) + '</span></div><button class="wbBack" title="' + He(ot.back) + '" data-wb="close-day" data-wb-focus="back-day">' + er(qn.back) + "</button></div>" + (be.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + be.map((le) => '<button aria-pressed="' + (le === he) + '" data-wb="day-mode" data-mode="' + le + '" data-wb-focus="day-mode-' + le + '">' + He(xe(le)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Up(bn(C, D, F, ue, he)) + "</div></div>";
  }
  function bn(C, D, H, F, ue) {
    var dn;
    const be = H.getTime(), he = Date.now(), xe = Ar(H, /* @__PURE__ */ new Date()), le = (ht) => (ht - be) / za, Ae = (ht) => Ji(new Date(ht), C), Fe = (ht) => new Date(ht.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: Ae(be + ht * qa), minor: ht % 6 !== 0 })), { rise: Ue, set: De } = Fd(C, H), Ne = [], Re = [];
    Ue && (Ne.push({ t: le(Ue.getTime()), label: Ae(Ue.getTime()), rise: !0 }), Re.push([0, le(Ue.getTime())])), De && (Ne.push({ t: le(De.getTime()), label: Ae(De.getTime()), rise: !1 }), Re.push([le(De.getTime()), Rr]));
    const tt = Ms(C);
    !Ue && !De && tt && Fl(new Date(be + ci / 2), tt.lat, tt.lon) < 0 && Re.push([0, Rr]);
    const mt = xe ? le(he) : void 0, _t = { hours: Ke, sun: Ne, night: Re };
    if (!F.length && !xe) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ot.noHourly };
    if (ue === "precipitation") {
      const ht = F.some((cn) => cn.precipitation_probability != null), Fn = F.map((cn) => ({ t: le(Fe(cn)), v: Number((ht ? cn.precipitation_probability : cn.precipitation) ?? 0) })), Jn = Dr(C, ke(C, "hourly"), "precipitation"), Qn = Math.max(0, ...Fn.map((cn) => cn.v)), ea = ht ? 100 : Vd(0, Math.max(Qn, 1), [0.5, 1, 2, 5, 10]).max, Po = (cn) => ht ? vn(cn, C.locale) + "%" : vn(cn, C.locale, { maximumFractionDigits: 1 }) + " " + Jn, wa = Fn.find((cn) => cn.v === Qn);
      return {
        ..._t,
        kind: "bars",
        points: Fn,
        min: 0,
        max: ea,
        ticks: [0, ea / 2, ea],
        format: Po,
        now: mt !== void 0 ? { t: mt, v: 0 } : void 0,
        peak: wa && Qn > 0 ? { t: wa.t + 30, v: wa.v, label: Po(wa.v) } : void 0,
        note: Qn > 0 ? void 0 : ot.noRain
      };
    }
    const bt = ue === "humidity" ? "humidity" : "temperature", Ut = F.filter((ht) => ht[bt] != null && (!xe || Fe(ht) >= he)).map((ht) => ({ t: le(Fe(ht)), v: Number(ht[bt]) }));
    let yn, In = [];
    if (mt !== void 0) {
      const ht = ga(C, D, bt);
      ht && Mn(ht.value) && (yn = { t: mt, v: Number(ht.value) }, Ut.unshift(yn)), In = (((dn = Z.todayHistory) == null ? void 0 : dn.day) === H.toDateString() ? Z.todayHistory[bt] : []).filter((Jn) => Jn.time <= he).map((Jn) => ({ t: Math.max(0, le(Jn.time)), v: Jn.value })), yn && In.length && In.push(yn);
    }
    const Ln = [...In, ...Ut];
    if (!Ln.length) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ot.noHourly };
    const Hn = Ln.map((ht) => ht.v), Un = Vd(Math.min(...Hn), Math.max(...Hn), bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    bt === "humidity" && (Un.min = Math.max(0, Un.min), Un.max = Math.min(100, Un.max), Un.ticks = Un.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const Aa = bt === "humidity" ? (ht) => vn(ht, C.locale) + "%" : (ht) => Dn(C, ht), ho = bt === "temperature" ? Ln.reduce((ht, Fn) => Fn.v > ht.v ? Fn : ht) : void 0;
    return { ..._t, kind: "line", points: Ut, past: In, ...Un, format: Aa, now: yn, peak: ho ? { ...ho, label: Aa(ho.v) } : void 0 };
  }
  function ui(C) {
    const D = ["temperature"];
    return C.some((H) => H.precipitation_probability != null || H.precipitation != null) && D.push("precipitation"), C.some((H) => H.wind_speed != null) && D.push("wind"), D;
  }
  function st() {
    const C = /* @__PURE__ */ new Date();
    return C.setHours(6, 0, 0, 0), C.getTime() > Date.now() && C.setDate(C.getDate() - 1), C;
  }
  function ze(C, D) {
    var ue, be;
    const H = g("daily"), F = [];
    for (let he = 0; he < ps; he++) for (const xe of [!1, !0]) {
      const le = C.getTime() + (he * 24 + (xe ? 12 : 0)) * qa, Ae = le + 12 * qa, Fe = {};
      D.forEach((Ue) => {
        const De = new Date(Ue.datetime).getTime();
        Ue.condition && De >= le && De < Ae && (Fe[Ue.condition] = (Fe[Ue.condition] ?? 0) + (op.has(Ue.condition) ? 2 : 1));
      });
      let Ke = (ue = Object.entries(Fe).sort((Ue, De) => De[1] - Ue[1])[0]) == null ? void 0 : ue[0];
      if (!Ke) {
        const Ue = new Date(le).toDateString();
        Ke = ((be = H.find((De) => new Date(De.datetime).toDateString() === Ue)) == null ? void 0 : be.condition) ?? "cloudy";
      }
      F.push({ cond: xe && Ke === "sunny" ? "clear-night" : Ke, night: xe });
    }
    return F;
  }
  function pt(C, D, H) {
    const F = ke(C, "hourly"), ue = D.precipitation_probability != null ? vn(D.precipitation_probability, C.locale) + "%" : "", be = D.precipitation ? vn(D.precipitation, C.locale) + " " + Dr(C, F, "precipitation") : "";
    switch (H) {
      case "precipitation":
        return ue ? [ue, be] : [be || "–", ""];
      case "wind":
        return D.wind_speed != null ? [vn(Math.round(D.wind_speed), C.locale), Dr(C, F, "wind_speed")] : ["–", ""];
      default:
        return [Dn(C, D.temperature), (D.precipitation_probability ?? 0) >= 20 ? ue : ""];
    }
  }
  function Ga(C) {
    W = null;
    const D = g("hourly"), H = Math.floor(Date.now() / za) * za, F = D.filter((De) => new Date(De.datetime).getTime() > H - qa);
    if (!F.length) return "";
    const ue = ui(F), be = ue.includes(O.hourlyMode) ? O.hourlyMode : "temperature", he = st(), xe = he.getTime() + ps * 24 * qa, le = (H - he.getTime()) / qa * ul, Ae = ps * 24 * ul, Fe = (De) => (De - H) / qa * ul, Ke = [{ x: 0, label: ot.now, entry: F[0] }, ...F.filter((De) => {
      const Ne = new Date(De.datetime);
      return Fe(Ne.getTime()) >= 48 && Ne.getTime() < xe && Ne.getHours() % ap === 0;
    }).map((De) => {
      const Ne = new Date(De.datetime);
      return { x: Fe(Ne.getTime()), label: Ji(Ne, C), entry: De };
    })], Ue = (De, Ne, Re) => '<span class="wbMark' + (Ne === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Re + "</span>";
    return W = { segs: ze(he, D), seed: he.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + He(ot.nextHours) + "</h2></div>" + (ue.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ue.map((De) => '<button aria-pressed="' + (De === be) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + He(ot.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Ae - le) + 'px"><div class="wbRow wbTimes">' + Ke.map((De, Ne) => Ue(De, Ne, He(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -le + "px;width:" + Ae + 'px"><canvas data-wb-strip' + (u === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((De, Ne) => {
      if (!De.entry) return "";
      const [Re, tt] = pt(C, De.entry, be);
      return Ue(De, Ne, '<span class="wbPrimaryV">' + He(Re) + '</span><span class="wbSecondary">' + He(tt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function pi(C) {
    const D = oe, { rise: H, set: F } = Fd(C, D), ue = H && F ? Math.round((F.getTime() - H.getTime()) / za) : 0, be = Math.floor(ue / 60), he = ue % 60, xe = H && F ? (D.getTime() - H.getTime()) / (F.getTime() - H.getTime()) : -1, le = xe >= 0 && xe <= 1, Ae = Math.PI * (1 - Math.min(1, Math.max(0, xe))), Fe = 100 + 74 * Math.cos(Ae), Ke = 100 - 74 * Math.sin(Ae), Ue = le ? Math.sin(Math.PI * xe) : 0, De = le ? Er("#2e0a0d", "#43180a", Ue) : "#0e0507", Ne = le ? Er("#7a1d12", "#8f400f", Ue) : "#1c0709", Re = Er("#f60c08", "#ff8f00", Ue), tt = Er("#fd9b07", "#ffd84a", Ue), mt = le ? Er("#fd9b07", "#ffd84a", Ue) : "#6b3a2a", _t = (Ut) => Ut ? Ji(Ut, C) : "–", bt = H && F ? new Date((H.getTime() + F.getTime()) / 2) : null;
    return Eo({
      icon: qn.sunny,
      name: ot.sun,
      sub: ue ? fa(ot.daylightShort, { hours: be, minutes: he }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + Ne + ");--wb-sun-line:" + mt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + T + 'sun-glow"><stop offset="0" stop-color="' + Re + '"></stop><stop offset="0.45" stop-color="' + Re + '"></stop><stop offset="1" stop-color="' + tt + '"></stop></radialGradient><clipPath id="' + T + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (le ? '<circle cx="' + Fe + '" cy="' + Ke + '" r="14" fill="url(#' + T + 'sun-glow)" clip-path="url(#' + T + 'above-horizon)"></circle>' : "") + (bt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + He(_t(bt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + He(_t(H)) + '</text><text class="wbSunTime" x="174" y="117">' + He(_t(F)) + "</text></svg></div>"
    });
  }
  function Bo(C, D, H) {
    const F = (he) => T + "moon-" + he, ue = C > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + F("terminator") + ')" d="' + Gp(61, 61, 57.9, C) + '"' + (D ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", be = (he, xe, le, Ae, Fe, Ke) => '<filter id="' + F(he) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xe + '" numOctaves="' + le + '" seed="' + Ae + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ue) => "<feFunc" + Ue + ' type="linear" slope="' + Fe + '" intercept="' + Ke + '"></feFunc' + Ue + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + F("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + F("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + F("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + F("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + F("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + be("mottle", "0.045", 4, 3, 1.8, -0.4) + be("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + F("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + F("fill") + ')"></circle><g' + (H ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + F("soften") + ')">' + Kp.map(([he, xe, le, Ae, Fe, Ke]) => '<ellipse cx="' + he + '" cy="' + xe + '" rx="' + le + '" ry="' + Ae + '" fill-opacity="' + Ke + '" transform="rotate(' + Fe + " " + he + " " + xe + ')"></ellipse>').join("") + "</g>" + $p.map(([he, xe, le]) => '<circle class="wbCrater" cx="' + he + '" cy="' + xe + '" r="' + le + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + F("glow") + ')">' + Xp.map(([he, xe]) => '<line x1="54.4" y1="95" x2="' + he + '" y2="' + xe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + F("glow") + ')">' + zd.map(([he, xe, le]) => '<circle cx="' + he + '" cy="' + xe + '" r="' + le * 2 + '"></circle>').join("") + "</g>" + zd.map(([he, xe, le]) => '<circle class="wbBrightCenter" cx="' + he + '" cy="' + xe + '" r="' + le + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + F("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + F("grain") + ')"></rect>' + ue + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function an(C) {
    const D = A, H = Ms(C), F = (H == null ? void 0 : H.lat) ?? 0, ue = Np(D), be = qd(C), he = be ? C.states[be] : void 0, xe = Nr(he) && pp.includes(he.state) ? he.state : Bp(ue.phase), { rise: le, set: Ae } = H ? Rp(D, H.lat, H.lon) : {}, Fe = ue.phase > 0.5 != F < 0, Ke = vn(Math.round(ue.fraction * 100), C.locale) + "%", Ue = le ?? Ae, De = Ue ? Ji(Ue, C) : void 0;
    return Eo({
      icon: qn.night,
      name: ot.moon,
      sub: ot.phases[xe],
      visual: '<div class="wbMoonBox">' + Bo(ue.fraction, Fe, F < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? He(fa(le ? ot.moonriseAt : ot.moonsetAt, { time: De })) : "") + "</span><span>" + He(fa(ot.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function Qe(C, D) {
    var Ne;
    const H = ga(C, D, "wind_speed");
    if (!H || !Mn(H.value)) return "";
    const F = ga(C, D, "wind_gust_speed"), ue = ga(C, D, "wind_bearing"), be = ue && Mn(ue.value) ? Number(ue.value) : void 0, he = qp(Number(H.value), (Ne = H.stateObj.attributes) == null ? void 0 : Ne.wind_speed_unit), xe = El(C, H.stateObj, "wind_speed", H.value), le = be !== void 0 ? ot.cardinal[up[((be + 11.25) / 22.5 | 0) % 16]] : void 0, Ae = F ? Fp(C, F.stateObj, "wind_gust_speed", F.value) : void 0, Fe = [le ? fa(ot.windFrom, { direction: le }) : void 0, he !== void 0 ? he + " " + ot.beaufort : void 0].filter(Boolean).join(" · ") || Ae, Ke = (Re, tt) => {
      const mt = (Re - 90) * Math.PI / 180;
      return [100 + tt * Math.cos(mt), 100 + tt * Math.sin(mt)];
    }, Ue = Array.from({ length: 36 }, (Re, tt) => tt * 10).map((Re) => {
      const tt = Re % 90 === 0, [mt, _t] = Ke(Re, 97), [bt, Ut] = Ke(Re, tt ? 83 : 89);
      return '<line class="wbTick' + (tt ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + _t + '" x2="' + bt + '" y2="' + Ut + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Re, tt]) => {
      const [mt, _t] = Ke(tt, 64);
      return '<text class="wbLetter' + (Re === "n" ? " wbNorth" : "") + '" x="' + mt + '" y="' + _t + '">' + He(ot.cardinal[Re]) + "</text>";
    }).join("");
    return Eo({ icon: qn.windy, name: ot.wind, sub: Fe, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ue + De + (be !== void 0 ? '<path class="wbMarker" transform="rotate(' + be + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + He(xe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + He(xe.unit) + "</text></svg>" });
  }
  function Cn(C, D) {
    const H = ga(C, D, "uv_index");
    if (!H || !Mn(H.value)) return "";
    const F = Number(H.value), ue = ot.uvLevel[Op(F)], be = /* @__PURE__ */ new Date();
    be.setHours(23, 59, 59, 999);
    const he = g("hourly").filter((Re) => Re.uv_index != null && new Date(Re.datetime) > /* @__PURE__ */ new Date() && new Date(Re.datetime) <= be).reduce((Re, tt) => !Re || tt.uv_index > Re.uv ? { uv: tt.uv_index, time: new Date(tt.datetime) } : Re, void 0), xe = 48, le = 100, Ae = 130, Fe = (Re) => -xe + Math.min(Re, 11) / 11 * 2 * xe, Ke = (Re, tt) => {
      const mt = Re * Math.PI / 180;
      return [le + tt * Math.sin(mt), Ae - tt * Math.cos(mt)];
    }, Ue = (Re, tt, mt) => {
      const [_t, bt] = Ke(Fe(Re), mt), [Ut, yn] = Ke(Fe(tt), mt);
      return "M " + _t + " " + bt + " A " + mt + " " + mt + " 0 0 1 " + Ut + " " + yn;
    }, Ne = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, ms.low], [3, 6, ms.moderate], [6, 8, ms.high], [8, 11, ms.very_high]].map(([Re, tt, mt]) => '<path class="wbVuZone" d="' + Ue(Re, tt, 96) + '" style="stroke:' + mt + '"></path>').join("") + Array.from({ length: 21 }, (Re, tt) => ({ angle: -xe + tt * (2 * xe / 20), major: tt % 2 === 0 })).map(({ angle: Re, major: tt }) => {
      const [mt, _t] = Ke(Re, 102), [bt, Ut] = Ke(Re, tt ? 114 : 108);
      return '<line class="wbVuTick' + (tt ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + _t + '" x2="' + bt + '" y2="' + Ut + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Fe(F) + 'deg"><line x1="' + le + '" y1="' + Ae + '" x2="' + le + '" y2="' + (Ae - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + He(vn(Math.round(F), C.locale)) + "</text></svg>";
    return Eo({
      icon: qn.sunnyAlert,
      name: ot.metrics.uv_index,
      sub: he && he.uv > F ? fa(ot.uvPeak, { level: ue, uv_index: vn(Math.round(he.uv), C.locale), time: Ji(he.time, C) }) : ue,
      visual: Ne
    });
  }
  function mi(C) {
    const D = g("daily")[0], H = Z.temperatureHistory;
    if (!D || new Date(D.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Mn(D.temperature) || !H || H.dailyHighs.length < sp) return "";
    const F = Number(D.temperature), ue = H.dailyHighs.reduce((bt, Ut) => bt + Ut, 0) / H.dailyHighs.length, be = Math.round(F - ue) || 0, he = be > 0 ? "above" : be < 0 ? "below" : "same", xe = [...H.days, { date: /* @__PURE__ */ new Date(), high: F, today: !0 }], le = 220, Ae = 158, Fe = 22, Ke = 20, Ue = xe.map((bt) => bt.high).concat(ue), De = Math.min(...Ue) - 3, Ne = Math.max(...Ue) + 1, Re = (bt) => Fe + (1 - (bt - De) / (Ne - De)) * (Ae - Fe - Ke), tt = le / xe.length, mt = Math.min(18, tt * 0.6), _t = '<svg class="wbCompareBars" viewBox="0 0 ' + le + " " + Ae + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + le + '" y1="' + Re(ue) + '" y2="' + Re(ue) + '"></line>' + xe.map((bt, Ut) => {
      const yn = Ut * tt + tt / 2, In = Re(bt.high), Ln = bt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Ln + '" x="' + (yn - mt / 2) + '" y="' + In + '" width="' + mt + '" height="' + (Ae - Ke - In) + '" rx="5"></rect><text class="wbAvgValue' + Ln + '" x="' + yn + '" y="' + (In - 6) + '">' + He(Dn(C, bt.high)) + '</text><text class="wbAvgDay' + Ln + '" x="' + yn + '" y="' + (Ae - 4) + '">' + He(kp(bt.date, C)) + "</text>";
    }).join("") + "</svg>";
    return Eo({
      icon: qn.chartLine,
      name: ot.metrics.compared_to_average,
      double: !0,
      sub: fa(ot.highsLastDays, { days: H.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (be > 0 ? "+" : "") + He(Dn(C, be)) + '</div><div class="wbCompareWords">' + He(ot.average[he]) + '</div><div class="wbCompareTemps">' + He(fa(ot.todayVsAverage, { today: Dn(C, F), average: Dn(C, ue) })) + "</div></div>" + _t + "</div>"
    });
  }
  function vt(C, D) {
    const H = ga(C, D, "humidity");
    if (!H || !Mn(H.value)) return "";
    const F = ga(C, D, "dew_point"), ue = Math.max(0, Math.min(100, Number(H.value)));
    return Eo({
      icon: qn.waterPercent,
      name: ot.metrics.humidity,
      sub: F && Mn(F.value) ? fa(ot.dewPoint, { dew_point: Dn(C, F.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + ue + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + hl(vn(Math.round(Number(H.value)), C.locale), "%") + "</div>"
    });
  }
  function Be(C, D) {
    var Ae, Fe;
    const H = ga(C, D, "pressure");
    if (!H || !Mn(H.value)) return "";
    const F = Number(H.value), ue = (Ae = H.stateObj.attributes) == null ? void 0 : Ae.pressure_unit, be = Wd(F, ue), he = ((Fe = Z.pressureHistory) == null ? void 0 : Fe.entityId) === H.stateObj.entity_id ? Wd(Z.pressureHistory.value, ue) : void 0;
    let xe;
    if (be !== void 0 && he !== void 0) {
      const Ke = be - he;
      xe = Ke >= Dd ? "rising" : Ke <= -Dd ? "falling" : "steady";
    }
    const le = El(C, H.stateObj, "pressure", Math.round(F));
    return Eo({
      icon: qn.gauge,
      name: ot.metrics.pressure,
      sub: xe ? ot.pressure[xe] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + hl(le.number) + '<span class="wbTapeUnit">' + He(le.unit) + "</span></div>" + (be !== void 0 ? lt(C, be) : "") + "</div>"
    });
  }
  function lt(C, D) {
    const ue = Math.floor(D) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (be, he) => ue + he).map((be) => {
      const he = 100 - (be - D) * 9;
      if (he < 22 || he > 178) return "";
      const xe = be % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(he - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xe ? 2 : 8) + '" x2="26" y1="' + he + '" y2="' + he + '"></line>' + (xe ? '<text class="wbTapeLabel" x="33" y="' + he + '">' + He(vn(be, C.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + He(ot.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + He(ot.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ft(C) {
    var le, Ae;
    const D = ml(C), H = D ? C.states[D] : void 0;
    if (!H || ((le = Z.rain) == null ? void 0 : le.entityId) !== D || !Mn(Z.rain.change)) return "";
    const F = ((Ae = H.attributes) == null ? void 0 : Ae.unit_of_measurement) ?? "", ue = ke(C, "hourly"), be = Date.now() + ci, he = g("hourly").filter((Fe) => Fe.precipitation != null && new Date(Fe.datetime).getTime() <= be), xe = he.reduce((Fe, Ke) => Fe + Number(Ke.precipitation), 0);
    return Eo({
      icon: qn.rainy,
      name: ot.metrics.precipitation,
      sub: ue && he.length ? fa(ot.rainExpected, { amount: vn(xe, C.locale, { maximumFractionDigits: 1 }) + " " + Dr(C, ue, "precipitation") }) : ot.rainLast24h,
      visual: hl(vn(Z.rain.change, C.locale, { maximumFractionDigits: 1 }), F) + (he.length > 1 ? Zp(he.map((Fe) => ({ label: "", value: Number(Fe.precipitation) }))) : "")
    });
  }
  function Pe(C) {
    Z.categories === void 0 && ce(C);
    const D = Je(C), H = (le) => le.map((Ae) => C.states[Ae]).filter(Nr), F = H(D.air), ue = H(D.pollen);
    if (!F.length && !ue.length) return "";
    const be = [...F, ...ue], he = (le) => ue.includes(le) ? qn.flower : qn.airFilter, xe = be.find((le) => le.entity_id === O.aq);
    return xe ? Ua(C, xe, he(xe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + He(ot.airQuality) + '</h2></div><div class="wbAqTiles">' + be.map((le) => '<button class="wbTile" data-wb="aq-open" data-entity="' + He(le.entity_id) + '"><span class="wbChip">' + er(he(le)) + '</span><span class="wbText"><span class="wbName">' + He(Od(C, le)) + '</span><span class="wbSub">' + He(fs(C, le)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Ua(C, D, H) {
    var Fe, Ke, Ue;
    const F = ((Fe = D.attributes) == null ? void 0 : Fe.unit_of_measurement) ?? "", ue = ((Ke = D.attributes) == null ? void 0 : Ke.device_class) === "pm25" && F === Rd && Mn(D.state), be = Number(D.state), he = ue ? Wp(be) : void 0, xe = ((Ue = Z.aqHistory) == null ? void 0 : Ue.entityId) === D.entity_id ? Z.aqHistory.points : void 0, le = (De) => Math.min(100, Math.max(0, De / hs * 100));
    let Ae;
    if (xe && xe.length > 1) Ae = Yp(xe, (De) => (vn(De, C.locale, { maximumFractionDigits: 1 }) + " " + F).trim());
    else if (he) {
      let De = 0;
      const Ne = xc.map(([Re, tt]) => {
        const mt = le(Math.min(tt, hs)), _t = mp[Re] + " " + De + "% " + mt + "%";
        return De = mt, _t;
      });
      Ae = '<div class="wbScale" role="meter" aria-label="' + He(ot.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + hs + '" aria-valuenow="' + be + '" style="background:linear-gradient(to right, ' + Ne.join(", ") + ')"><i style="left:' + le(be) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + hs + " " + Rd + "</span></div>";
    } else Ae = '<span class="wbGraphNote"><span>' + He(fs(C, D)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + er(H) + '</span><span class="wbText"><span class="wbName">' + He(Od(C, D)) + '</span><span class="wbSub">' + He(fs(C, D)) + (he ? " · " + He(ot.aqLevel[he]) : "") + '</span></span><button class="wbBack" title="' + He(ot.back) + '" data-wb="aq-close">' + er(qn.back) + '</button></div><div class="wbGraph">' + Ae + "</div></div></div>";
  }
  const uo = {
    current: Ze,
    hourly: Ga,
    sun: pi,
    moon: an,
    wind: Qe,
    uv_index: Cn,
    compared_to_average: mi,
    humidity: vt,
    pressure: Be,
    precipitation: ft,
    air_quality: Pe
  };
  function jn(C) {
    var Ae, Fe, Ke, Ue;
    const D = l == null ? void 0 : l();
    if (!D || P) return;
    const H = We(D);
    y(D, H), Z.lastFetch || V();
    const F = Je(D), ue = qd(D), be = ml(D), he = [
      ...H.map((De) => D.states[De]),
      D.states["sun.sun"],
      ue && D.states[ue],
      be && D.states[be],
      ...F.air.map((De) => D.states[De]),
      ...F.pollen.map((De) => D.states[De]),
      D.locale,
      D.config,
      D.entities,
      Math.floor(Date.now() / za)
    ];
    if (!C && G && he.length === G.length && he.every((De, Ne) => De === G[Ne])) return;
    G = he;
    const xe = b.getRootNode(), le = xe.activeElement || document.activeElement;
    for (const De of re) {
      const Ne = R[De];
      let Re = "";
      try {
        Re = uo[De](D, H) || "";
      } catch {
        Re = "";
      }
      if (Re === Ne.html) continue;
      const tt = le && Ne.el.contains(le) ? (Ae = le.dataset) == null ? void 0 : Ae.wbFocus : void 0, mt = Ne.el.querySelector(".wbStripScroll"), _t = mt ? mt.scrollLeft : 0;
      Ne.html = Re, Ne.el.hidden = !Re, Ne.el.innerHTML = Re, _t && ((Fe = Ne.el.querySelector(".wbStripScroll")) == null || Fe.scrollTo({ left: _t })), tt && !$ && ((Ke = Ne.el.querySelector('[data-wb-focus="' + tt + '"]')) == null || Ke.focus());
    }
    $ && ((Ue = b.querySelector('[data-wb-focus="' + $ + '"]')) == null || Ue.focus(), $ = null), Rt(performance.now());
  }
  function Ee() {
    q || P || (q = !0, queueMicrotask(() => {
      q = !1, jn(!0);
    }));
  }
  function Ge() {
    const C = getComputedStyle(b), D = (he) => C.getPropertyValue(he).trim(), H = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([he, xe]) => {
      D(xe) && (H[he] = D(xe));
    });
    const F = D("--color-text-primary") || "#f1f1f1", ue = D("--color-bg-card") || "#222222", be = !!b.closest(".light");
    return { colors: { ...co, ...H }, ink: be ? F : ue, paper: be ? ue : F };
  }
  const Gt = (C, D) => {
    var H;
    C.width !== D.w && (C.width = D.w), C.height !== D.h && (C.height = D.h), (H = C.getContext("2d")) == null || H.putImageData(new ImageData(D.data, D.w, D.h), 0, 0);
  }, ln = () => h && !wp();
  function wn(C, D) {
    const H = b.querySelector("canvas[data-wb-strip]");
    if (!H || !W || !H.getClientRects().length) return;
    const F = H.clientWidth, ue = H.clientHeight;
    if (!F || !ue) return;
    const be = { width: F, height: ue, columns: ps, colors: D.colors, clock: C, ambient: ln(), seed: W.seed };
    if (u === "smooth") {
      const he = Math.min(2, window.devicePixelRatio || 1), xe = Math.round(F * he), le = Math.round(ue * he);
      H.width !== xe && (H.width = xe), H.height !== le && (H.height = le);
      const Ae = H.getContext("2d");
      if (!Ae) return;
      Ae.setTransform(he, 0, 0, he, 0, 0), Uu(Ae, W.segs, be);
    } else Gt(H, Gu(W.segs, { ...be, px: 2, oneBit: u === "onebit", ink: D.ink, paper: D.paper }));
  }
  function Rt(C) {
    if (P) return;
    const D = Ge();
    if (u !== "smooth") {
      const H = ln();
      b.querySelectorAll("canvas[data-wb-wx]").forEach((F) => {
        F.getClientRects().length && Gt(F, dc(Ll(F.dataset.wbWx, D.colors), { size: Number(F.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: D.colors, ink: D.ink, paper: D.paper, clock: C, idle: H }));
      });
    }
    wn(C, D);
  }
  function Ya(C) {
    if (X = 0, !(P || !ln())) {
      if (!document.hidden)
        if (u === "smooth") wn(C, Ge());
        else {
          const D = Math.floor(C / 100);
          D !== j && (j = D, Rt(C));
        }
      X = requestAnimationFrame(Ya);
    }
  }
  function Et() {
    b.classList.toggle("wbMotion", ln()), !X && !P && ln() && (X = requestAnimationFrame(Ya));
  }
  function Pn(C) {
    var H, F;
    const D = (F = (H = C.target).closest) == null ? void 0 : F.call(H, "[data-wb]");
    if (!(!D || !b.contains(D))) {
      switch (D.dataset.wb) {
        case "day": {
          O.openDay = Number(D.dataset.index), O.opener = D.dataset.wbFocus, $ = "back-day";
          const ue = tn()[O.openDay], be = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > np;
          ue && Ar(new Date(ue.datetime), /* @__PURE__ */ new Date()) && be && Q();
          break;
        }
        case "close-day":
          O.openDay = void 0, $ = O.opener, O.opener = void 0;
          break;
        case "open-page":
          x == null || x();
          return;
        case "day-mode":
          O.dayMode = D.dataset.mode;
          break;
        case "hourly-mode":
          O.hourlyMode = D.dataset.mode;
          break;
        case "aq-open":
          O.aq = D.dataset.entity, ie(O.aq);
          break;
        case "aq-close":
          O.aq = void 0;
          break;
        default:
          return;
      }
      jn(!0);
    }
  }
  function po(C) {
    var D, H;
    C.key === "Escape" && O.openDay !== void 0 && ((H = (D = C.target).closest) != null && H.call(D, '[data-wb-open="day"]')) && (O.openDay = void 0, $ = O.opener, O.opener = void 0, jn(!0));
  }
  let Nt = null;
  function zt(C) {
    var H, F;
    const D = (F = (H = C.target).closest) == null ? void 0 : F.call(H, ".wbStripScroll");
    !D || C.button !== 0 || (Nt = { startX: C.pageX, left: D.scrollLeft, moved: !1 }, window.addEventListener("mousemove", Sn), window.addEventListener("mouseup", $t, { once: !0 }));
  }
  function Sn(C) {
    const D = b.querySelector(".wbStripScroll");
    if (!Nt || !D) return;
    const H = C.pageX - Nt.startX;
    !Nt.moved && Math.abs(H) > 1 && (Nt.moved = !0, D.classList.add("wbDragging")), D.scrollLeft = Nt.left - H;
  }
  function $t() {
    var C;
    Nt = null, window.removeEventListener("mousemove", Sn), (C = b.querySelector(".wbStripScroll")) == null || C.classList.remove("wbDragging");
  }
  b.addEventListener("click", Pn), b.addEventListener("keydown", po), b.addEventListener("mousedown", zt);
  const Tn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Rt(performance.now())) : null;
  Tn == null || Tn.observe(b);
  const it = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)"), Za = () => {
    Et(), Rt(performance.now());
  };
  (mo = it == null ? void 0 : it.addEventListener) == null || mo.call(it, "change", Za);
  const Gn = [
    setInterval(() => {
      oe = /* @__PURE__ */ new Date(), jn(!0);
    }, lp),
    setInterval(() => {
      A = /* @__PURE__ */ new Date(), jn(!0);
    }, dp),
    setInterval(V, ip)
  ];
  return jn(!0), Et(), {
    update() {
      jn(!1);
    },
    setStyle(C) {
      !C || C === u || (u = C, jn(!0), Et());
    },
    destroy() {
      var C;
      P = !0, Gn.forEach(clearInterval), X && cancelAnimationFrame(X), X = 0, Tn == null || Tn.disconnect(), (C = it == null ? void 0 : it.removeEventListener) == null || C.call(it, "change", Za), $t(), b.removeEventListener("click", Pn), b.removeEventListener("keydown", po), b.removeEventListener("mousedown", zt), ["daily", "hourly"].forEach(Ce), b.remove();
    }
  };
}
const Br = "#E1E1E1", Gd = "#F7F4F0", fl = "#03a9f4", xt = 14, kt = 172;
let Qp = 0;
const Ot = (n) => Math.round(n * 100) / 100, ja = (n, l, i) => Math.max(l, Math.min(i, n)), lo = (n, l, i, u, h, f) => '<rect x="' + Ot(n) + '" y="' + Ot(l) + '" width="' + Ot(i) + '" height="' + Ot(u) + '" fill="' + h + '"' + (f != null ? ' opacity="' + f + '"' : "") + "/>", gl = (n) => n.map((l, i) => (i ? "L" : "M") + Ot(l[0]) + " " + Ot(l[1])).join("");
function vl(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Do = [
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
  const l = n < 2 ? n + 24 : n;
  let i = Do[0], u = Do[Do.length - 1];
  for (let T = 0; T < Do.length - 1; T++) if (l >= Do[T][0] && l <= Do[T + 1][0]) {
    i = Do[T], u = Do[T + 1];
    break;
  }
  const h = (l - i[0]) / (u[0] - i[0]), f = h * h * (3 - 2 * h), x = (T, b) => {
    const N = parseInt(T.slice(1), 16), re = parseInt(b.slice(1), 16);
    return "#" + [16, 8, 0].map((ae) => Math.round((N >> ae & 255) + ((re >> ae & 255) - (N >> ae & 255)) * f).toString(16).padStart(2, "0")).join("");
  };
  return { top: x(i[1][0], u[1][0]), bot: x(i[1][1], u[1][1]), warm: x(i[1][2], u[1][2]), cool: x(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * f, t: l };
}
function tm(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, h = (l & 255) / 255, f = Math.max(i, u, h), x = Math.min(i, u, h);
  let T = 0, b = 0;
  const N = (f + x) / 2;
  if (f !== x) {
    const re = f - x;
    b = N > 0.5 ? re / (2 - f - x) : re / (f + x), T = (f === i ? (u - h) / re + (u < h ? 6 : 0) : f === u ? (h - i) / re + 2 : (i - u) / re + 4) / 6;
  }
  return [T * 360, b * 100, N * 100];
}
function Rc(n, l, i) {
  l = ja(l, 0, 100) / 100, i = ja(i, 0, 100) / 100;
  const u = (x) => (x + n / 30) % 12, h = l * Math.min(i, 1 - i), f = (x) => i - h * Math.max(-1, Math.min(u(x) - 3, Math.min(9 - u(x), 1)));
  return "#" + [f(0), f(8), f(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}
const [Nc, Bc, Pc] = tm(Br), Ud = Rc(Nc, Bc, Math.max(6, Pc - 14)), nm = Rc(Nc, Bc, Math.min(96, Pc + 16));
function am(n, l, i, u, h) {
  const f = kt / 2, x = kt * 0.12, T = f - (f - x) * n, b = (G) => G ** 1.3, N = ja(i, -1.5, 1.5), re = (G) => -(Math.abs(N) * 4.6 * G ** 1.5) * Math.sign(N), ae = n * 1.4, R = (G, X) => {
    const j = Math.min(4.8, Math.abs(i) * 2.6) * (X ? 1 : -1) * Math.sign(i || 1), q = X ? G + T : G, $ = X ? G : G + T, O = (Se) => q + re(Se) + j * Math.sin(Se * Math.PI * 1.2 + u) * b(Se) * 1.4 + ae * Math.sin(Se * Math.PI * 2 + u * 0.6) * b(Se) * (X ? 1 : -1), Z = [[$, xt]];
    for (let Se = 0; Se <= 12; Se++) Z.push([O(Se / 12), xt + kt * Se / 12]);
    Z.push([$, xt + kt]);
    let oe = '<path d="' + gl(Z) + 'Z" fill="' + Br + '"/>';
    if (h) return oe;
    const A = 1.35 + ((X ? i > 0 : i < 0) ? 0.35 : 0), W = (Se) => {
      const g = Se / 7, ke = X ? 1 - g : g, Ce = (1 - ke) ** 1.3, Oe = G + T * g;
      return Array.from({ length: 13 }, (y, S) => {
        const M = S / 12;
        return [Oe + re(M) * Ce + j * A * Math.sin(M * Math.PI * 1.2 + u - ke * 3.2) * b(M) * 1.4 * Ce + ae * 1.6 * Math.sin(M * Math.PI * 2 + u * 0.6 - ke * 2.5) * b(M) * n * (0.4 + 0.6 * Ce), xt + kt * M];
      });
    }, fe = [1, 2, 3, 4, 5, 6].map(W);
    for (let Se = 0; Se < 6; Se += 2) oe += '<path d="' + gl(fe[Se]) + gl(fe[Se + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return oe;
  }, P = f - (f - x) * l;
  return { body: R(xt, !0) + R(xt + kt - T, !1), rails: [{ x: xt + P - 4, y: xt, w: 4, h: kt }, { x: xt + kt - P, y: xt, w: 4, h: kt }], head: 6.4 };
}
function om(n, l, i) {
  const u = kt * (1 - n);
  let h = "";
  if (u > 1 && (h += lo(xt, xt, kt, u, Br), !i))
    for (let f = 1; f < 7; f += 2) h += lo(xt + kt * f / 7, xt, kt / 7, u, "#fff");
  return { body: h, rails: [{ x: xt, y: xt + kt * (1 - l) - 7, w: kt, h: 11 }], head: 10.4 };
}
function im(n, l, i, u) {
  const h = 9 - 7 * (i / 100), f = xt + kt * (1 - n), x = Math.ceil(kt / 10) + 1, T = xt + h / 2, b = (xt + kt - h / 2 - T) / (x - 1), N = 0.8, re = 0.6, ae = Array.from({ length: x }, (G, X) => Math.max(T + X * re, Math.min(T + X * b, f - h / 2 - (x - 1 - X) * re))), R = ae.slice(0, -1).map((G, X) => ja((ae[X + 1] - G - re) / (b - re), 0, 1));
  R.push(R[x - 2]);
  let P = "";
  return ae.forEach((G, X) => {
    const j = N + (h - N) * R[X], q = Math.max(0.5, j / 2), $ = Math.max(0.4, j * 0.114);
    P += lo(xt, G - q, kt, Math.max(1, j), Br), !u && j > 2.2 && (P += lo(xt, G + q - $, kt, $, Ud) + lo(xt, G - q, kt, $ * 0.55, nm, 0.75));
  }), u || [0.22, 0.78].forEach((G) => {
    P += lo(xt + kt * G - 0.7, xt, 1.4, Math.max(0, ae[x - 1] + 1 - xt), Ud, 0.85);
  }), { body: P, rails: [{ x: xt, y: xt + kt * (1 - l) - 8, w: kt, h: 8 }], head: 8.8 };
}
const Yd = (n, l, i, u, h, f, x) => n === "curtain" ? am(l, i, h, f, x) : n === "venetian" ? im(l, i, u, x) : om(l, i, x);
function rm(n, l) {
  let i = "", u = "";
  return l.forEach((h) => {
    const f = h.w > h.h, x = ja(f ? xt + kt / 2 : h.x + h.w / 2, 17, 183), T = ja(f ? h.y + h.h / 2 : xt + kt / 2, 17, 183);
    i += f ? lo(xt, ja(h.y + h.h / 2, xt, xt + kt) - 1, kt, 2, fl) : lo(ja(h.x + h.w / 2, xt, xt + kt) - 1, xt, 2, kt, fl);
    const b = f ? "M" + Ot(x - 4) + " " + Ot(T - 3) + "l4 -3l4 3M" + Ot(x - 4) + " " + Ot(T + 3) + "l4 3l4 -3" : "M" + Ot(x - 3) + " " + Ot(T - 4) + "l-3 4l3 4M" + Ot(x + 3) + " " + Ot(T - 4) + "l3 4l-3 4";
    u += '<circle cx="' + Ot(x) + '" cy="' + Ot(T) + '" r="11" fill="' + fl + '" filter="url(#' + n + 's)"/><path d="' + b + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function sm(n, l) {
  const i = /* @__PURE__ */ new Date(), u = em(i.getHours() + i.getMinutes() / 60), h = 42 + 18 * Math.sin(u.t * 0.5), f = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, x = Yd(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), T = l.ghostAlpha > 4e-3 && l.ghost != null ? Yd(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", b = l.grip > 4e-3 ? rm(n, x.rails) : null, N = (re) => lo(xt, xt, kt, kt, re);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Ot(h) + '%" cy="' + Ot(f) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + Ot(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Ot(100 - h * 0.8) + '%" cy="' + Ot(100 - f * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + Ot(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Gd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (T ? '<g opacity="' + Ot(l.ghostAlpha) + '">' + T + "</g>" : "") + x.body + '<rect x="14" y="14" width="172" height="' + x.head + '" fill="' + Br + '" filter="url(#' + n + 's)"/></g>' + (b ? '<g clip-path="url(#' + n + 'c)" opacity="' + Ot(l.grip) + '">' + b.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Gd + '" stroke-width="3"/>' + (b ? '<g opacity="' + Ot(l.grip) + '">' + b.knobs + "</g>" : "") + "</svg>";
}
function lm({ onMove: n, onSet: l }) {
  var oe;
  const i = "cv" + ++Qp, u = document.createElement("div");
  u.className = "tfCoverArt";
  const h = (oe = window.matchMedia) == null ? void 0 : oe.call(window, "(pointer: coarse)").matches;
  let f = null;
  const x = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let T = 0, b = !1, N = !1, re = null, ae = 0, R = 0;
  const P = () => (f == null ? void 0 : f.kind) === "curtain" ? "x" : "y", G = () => re || b || N || f.moving || f.target != null ? 1 : h ? performance.now() < R ? 1 : 0.4 : 0, X = () => {
    u.innerHTML = sm(i, { kind: f.kind, pos: x.pos, bar: f.target ?? x.pos, tilt: x.tilt, vel: x.vel, ph: x.ph, ghost: x.gpos, ghostAlpha: x.ghost, grip: x.grip });
  };
  function j(A) {
    T = 0;
    const W = x.last ? Math.min(0.064, (A - x.last) / 1e3) : 1 / 60, fe = W * 60;
    x.last = A;
    const Se = f.pos - x.pos, g = x.pos;
    x.pos += Math.sign(Se) * Math.min(Math.abs(Se), Math.max(10.5, Math.abs(Se) * 1.4) * W), Math.abs(f.pos - x.pos) < 0.03 && (x.pos = f.pos), x.vel = x.vel * 0.86 + (x.pos - g) / fe * 0.14, Math.abs(x.vel) < 0.015 && x.pos === f.pos && (x.vel = 0), (x.pos !== g || x.vel) && (x.ph += (0.06 + Math.abs(x.vel) * 0.03) * fe);
    const ke = f.tilt - x.tilt;
    x.tilt += Math.sign(ke) * Math.min(Math.abs(ke), Math.max(60, Math.abs(ke) * 4) * W);
    const Ce = G();
    x.grip += (Ce - x.grip) * Math.min(1, W * (Ce > x.grip ? 11 : 3.5)), Math.abs(Ce - x.grip) < 0.01 && (x.grip = Ce);
    const Oe = f.target != null && Math.abs(f.target - x.pos) > 0.5 ? 0.22 : 0;
    f.target != null && (x.gpos = f.target), x.ghost += (Oe - x.ghost) * Math.min(1, W * (Oe > x.ghost ? 16 : 3)), Math.abs(Oe - x.ghost) < 4e-3 && (x.ghost = Oe), X(), x.pos !== f.pos || x.vel || x.tilt !== f.tilt || x.grip !== Ce || x.ghost !== Oe ? T = requestAnimationFrame(j) : x.last = 0;
  }
  const q = () => {
    f && !T && (T = requestAnimationFrame(j));
  }, $ = setInterval(() => {
    f && !T && X();
  }, 60 * 1e3), O = (A) => {
    const W = u.getBoundingClientRect();
    return P() === "x" ? (A.clientX - W.left) / W.width : (A.clientY - W.top) / W.height;
  };
  u.addEventListener("pointerdown", (A) => {
    var Se;
    if (!(f != null && f.canSet) || A.button > 0) return;
    A.preventDefault(), (Se = u.setPointerCapture) == null || Se.call(u, A.pointerId);
    const W = f.target ?? f.pos, fe = u.getBoundingClientRect();
    re = { p0: O(A), from: W, x0: A.clientX, value: null, side: null }, f.kind === "curtain" && W > 0 && (re.side = (A.clientX - fe.left) / fe.width < 0.5 ? "L" : "R"), q();
  }), u.addEventListener("pointermove", (A) => {
    if (!re) return;
    let W;
    if (f.kind === "curtain") {
      if (!re.side) {
        const Se = A.clientX - re.x0;
        if (Math.abs(Se) < 4) return;
        re.side = Se < 0 ? "L" : "R";
      }
      const fe = (kt / 2 - kt * 0.12) / 200;
      W = re.from + (re.side === "L" ? -1 : 1) * ((O(A) - re.p0) / fe) * 100;
    } else W = re.from - (O(A) - re.p0) / (kt / 200) * 100;
    re.value = ja(W, 0, 100), n(re.value);
  });
  const Z = () => {
    if (!re) return;
    const A = re.value;
    re = null, A != null && l(Math.round(A)), q();
  };
  return u.addEventListener("pointerup", Z), u.addEventListener("pointercancel", Z), u.addEventListener("lostpointercapture", Z), u.addEventListener("pointerenter", () => {
    b = !0, q();
  }), u.addEventListener("pointerleave", () => {
    b = !1, q();
  }), u.addEventListener("focus", () => {
    N = u.matches(":focus-visible"), q();
  }), u.addEventListener("blur", () => {
    N = !1, q();
  }), u.addEventListener("keydown", (A) => {
    if (!(f != null && f.canSet)) return;
    const W = Math.round(f.target ?? f.pos), fe = A.shiftKey ? 10 : 1, Se = { ArrowUp: W + fe, ArrowRight: W + fe, ArrowDown: W - fe, ArrowLeft: W - fe, PageUp: W + 25, PageDown: W - 25, Home: 0, End: 100 }[A.key];
    if (Se == null) return;
    A.preventDefault();
    const g = ja(Se, 0, 100);
    n(g), clearTimeout(ae), ae = setTimeout(() => l(g), 500);
  }), {
    el: u,
    update(A) {
      const W = !f;
      f = A, W && (x.pos = f.pos, x.tilt = f.tilt, R = performance.now() + 1500, h && setTimeout(q, 1600)), u.classList.toggle("x", P() === "x"), u.classList.toggle("y", P() === "y"), f.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(f.target ?? f.pos))), u.setAttribute("aria-orientation", P() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", f.name + (f.canSet ? " position" : "")), u.setAttribute("aria-valuetext", f.text), q();
    },
    destroy() {
      cancelAnimationFrame(T), T = 0, clearInterval($), clearTimeout(ae), u.remove();
    }
  };
}
const Zd = "move-assistant-density", Ro = {
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
}, de = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), bl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', dm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', cm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', gs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Kd = 1, um = 4, $d = 16, Xd = 32, pm = 128, mm = 256, Jd = 16384, hm = 1, fm = 2, Qd = 4, gm = 8, vm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, bm = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, wl = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, ec = "move_assistant_house", tc = "move-assistant-house-used", xm = ["switch", "fan", "input_boolean", "automation"], nc = "move-assistant-house-look", ym = [["popup", "Popup"], ["sheet", "Sheet"]], km = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Mm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', va = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", ac = va(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Sm = va(["M20 6L9 17L4 12"]), Va = {
  temp: va(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: va(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: va(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: va(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: va(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: va(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: va(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: va(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: va(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: va(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Tm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lm = 1, _m = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], oc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, xl = ["hs", "xy", "rgb", "rgbw", "rgbww"], yl = ["door", "window", "garage_door", "opening"], vs = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Am = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], ic = 10, Em = 20, Dm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rm = ["living room", "bedroom", "office"];
function Nm(n, { config: l, getHass: i }) {
  var Oi, fn, Wi;
  const u = (t) => n.getElementById(t), h = u("app"), x = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let T = Ro.get(Zd) === "1", b = {};
  const N = (t) => {
    var o;
    return (o = i()) == null ? void 0 : o.callWS(t);
  }, re = (t, o, s) => N({ type: "call_service", domain: t, service: o, service_data: s }), ae = n.querySelector("#appearancePane .toggleList");
  ae && !u("densityToggle") && (ae.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    T = !T, Ro.set(Zd, T ? "1" : "0"), oe();
  }));
  const R = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && vt(t).device_class === "power" && /^(W|kW)$/.test(vt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], P = (t, o, s, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + o + '">' + d.map(([m, _]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + s + '="' + m + '">' + _ + "</button>").join("") + "</div>", G = (t, o, s, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (o ? '<div class="status">' + o + "</div>" : "") + "</div>" + s + "</div>";
  function X() {
    var B, ee, U;
    if (!x || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const o = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], s = (z, pe) => '<div class="houseTab' + (z === "look" ? " active" : "") + '" data-house-pane="' + z + '"><section class="card">' + pe + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + o.map(([z, pe]) => '<button class="tab segBtn' + (z === "look" ? " active" : "") + '" type="button" data-house-tab="' + z + '">' + pe + "</button>").join("") + "</div>" + s("look", '<div class="toggleList" id="houseLook"></div>') + s("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + s("sources", '<div class="toggleList">' + R.map(([z, pe, qe]) => G(pe, qe, '<select class="settingsSelect" data-source="' + z + '" aria-label="' + pe + '"></select>')).join("") + "</div>") + s("sums", '<div class="toggleList">' + Object.entries(wl).map(([z, pe]) => G(pe.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + z + '" aria-label="' + pe.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = u("houseLook");
    [(B = t.querySelector(".themeBtn")) == null ? void 0 : B.closest(".toggleRow"), (ee = u("densityToggle")) == null ? void 0 : ee.closest(".toggleRow"), (U = u("moreInfoChoice")) == null ? void 0 : U.closest(".toggleRow")].forEach((z) => z && d.appendChild(z)), d.insertAdjacentHTML("beforeend", G("Lights", "How lights show on the house page.", P("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + G("Pad", "What the Dual Axis Controller’s pad sets on its tile.", P("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const m = u("housePane"), _ = m.querySelector(".houseTabs"), w = _.querySelector(".rubberIndicator"), v = (z) => {
      const pe = _.querySelector(".tab.active");
      w.style.transition = z ? "" : "none", w.style.left = pe.offsetLeft + "px", w.style.width = pe.offsetWidth + "px", z && (w.style.transform = "scaleX(1.08)", setTimeout(() => w.style.transform = "", 180));
    };
    new ResizeObserver(() => v(!1)).observe(_), m.addEventListener("click", (z) => {
      const pe = z.target.closest("[data-house-tab]");
      if (pe) {
        _.querySelectorAll(".tab").forEach((ge) => ge.classList.toggle("active", ge === pe)), m.querySelectorAll(".houseTab").forEach((ge) => ge.classList.toggle("active", ge.dataset.housePane === pe.dataset.houseTab)), pe.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0);
        return;
      }
      const qe = z.target.closest("[data-light-fav]");
      if (qe) {
        Pt(qe.dataset.lightFav);
        return;
      }
      const Ie = z.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ie || Ie.disabled)) {
        if (Ie.dataset.lights && (Ht.lights = Ie.dataset.lights), Ie.dataset.dacPad && (Ht.dacPad = Ie.dataset.dacPad), (Ie.dataset.lights || Ie.dataset.dacPad) && (Ze(), dn.clear()), Ie.dataset.sumToggle) {
          const ge = Ie.dataset.sumToggle, me = new Set(V.hiddenSums || []);
          me.has(ge) ? me.delete(ge) : me.add(ge), V = { ...V, hiddenSums: [...me] }, zn();
        }
        hn();
      }
    }), m.addEventListener("change", (z) => {
      const pe = z.target;
      pe.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [pe.dataset.source]: pe.value || void 0 } }, zn());
      const qe = pe.dataset.lightStyle || pe.dataset.lightPad;
      if (qe) {
        const Ie = pe.dataset.lightStyle ? "lightStyles" : "lightPads", ge = { ...Ht[Ie] };
        pe.value ? ge[qe] = pe.value : delete ge[qe], Ht[Ie] = ge, Ze(), [...dn.keys()].filter((me) => me.endsWith(":" + qe)).forEach((me) => dn.delete(me));
      }
      hn();
    });
  }
  function j() {
    var w;
    Fn() && ho();
    const t = u("housePane");
    if (!t) return;
    const o = !!customElements.get(Hn);
    t.querySelectorAll("[data-lights]").forEach((v) => v.setAttribute("aria-pressed", String(v.dataset.lights === Ht.lights))), u("lightsRow").querySelector(".status").textContent = o || !Fn() ? "How lights show on the house page." : Aa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((v) => v.setAttribute("aria-pressed", String(v.dataset.dacPad === Ht.dacPad))), u("dacPadRow").hidden = !Fn();
    for (const v of t.querySelectorAll("[data-source]")) {
      if (v === n.activeElement) continue;
      const [B] = R.find(([U]) => U === v.dataset.source), ee = Object.keys(b).filter(R.find(([U]) => U === B)[3]).sort((U, z) => Be(U).localeCompare(Be(z)));
      v.dataset.sig !== ee.join(",") && (v.innerHTML = '<option value="">Automatic</option>' + ee.map((U) => '<option value="' + de(U) + '">' + de(Be(U)) + "</option>").join(""), v.dataset.sig = ee.join(",")), v.value = ee.includes((w = V.sources) == null ? void 0 : w[B]) ? V.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((v) => {
      const B = !(V.hiddenSums || []).includes(v.dataset.sumToggle);
      v.classList.toggle("on", B), v.setAttribute("aria-checked", String(B));
    });
    const s = u("lightRows");
    if (!s || s.contains(n.activeElement)) return;
    const d = new Set(Wo()), m = (v, B, ee, U) => '<option value="' + v + '"' + (v === ee ? " selected" : "") + ">" + B + "</option>", _ = Object.keys(b).filter((v) => v.startsWith("light.")).sort((v, B) => !Tt.get(v) - !Tt.get(B) || (Tt.get(v) || "").localeCompare(Tt.get(B) || "") || Be(v).localeCompare(Be(B))).map((v) => {
      const B = Ht.lightStyles[v] || "", ee = Ht.lightPads[v] || "", U = d.has(v), z = de(Be(v));
      return "<tr><td><strong>" + z + "</strong></td><td>" + de(Tt.get(v) || "—") + "</td><td>" + de(Nt(v)) + '</td><td class="metaSwitchCol"><button class="switch' + (U ? " on" : "") + '" type="button" role="switch" aria-checked="' + U + '" data-light-fav="' + de(v) + '" aria-label="' + z + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + de(v) + '" aria-label="' + z + ' tile">' + m("", "Default", B) + m("tile", "HomeCore tile", B) + m("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + de(v) + '" aria-label="' + z + ' pad"' + (ht(v) ? "" : " disabled") + ">" + m("", "Default", ee) + m("temperature", "Temperature", ee) + m("colour", "Colour", ee) + "</select></td></tr>";
    }).join("");
    s.dataset.html !== _ && (s.innerHTML = _, s.dataset.html = _);
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, h.appendChild(q);
  let $ = 0;
  function O() {
    if (!T) return;
    const t = u("homeView"), o = (_) => _.offsetParent !== null && !_.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((_) => {
      o(_) && (_.dataset.h = Math.round(_.getBoundingClientRect().height) + " px");
    });
    const s = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(o), d = window.innerHeight, m = s.filter((_) => {
      const w = _.getBoundingClientRect();
      return w.height > 0 && w.top >= 0 && w.bottom <= d + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + m + "</b><small>of " + s.length + " readings on screen</small>";
  }
  const Z = () => {
    T && requestAnimationFrame(O);
  };
  function oe() {
    var t;
    h.classList.toggle("showDensity", T), (t = u("densityToggle")) == null || t.classList.toggle("on", T), q.hidden = !T, clearInterval($), T && ($ = setInterval(O, 1e3), O());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const A = n.querySelector("#homeView .grid");
  let W = null, fe = null, Se = null, g = null;
  const ke = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), y = 350;
  let S = null;
  const M = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
  let V = { favourites: null }, Q = {}, ie = {}, ce = [], We = null;
  const Je = (() => {
    try {
      return JSON.parse(Ro.get(tc)) || {};
    } catch {
      return {};
    }
  })();
  let Tt = /* @__PURE__ */ new Map(), tn = 0;
  function zn() {
    clearTimeout(tn), tn = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: ec, value: V })).catch(() => {
    }), 400);
  }
  const Ht = (() => {
    let t = {};
    try {
      t = JSON.parse(Ro.get(nc)) || {};
    } catch {
    }
    const o = (s, d) => Object.fromEntries(Object.entries(s || {}).filter(([, m]) => d.includes(m)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: o(t.lightStyles, ["tile", "dac"]),
      lightPads: o(t.lightPads, ["temperature", "colour"])
    };
  })(), Ze = () => Ro.set(nc, JSON.stringify(Ht)), Mt = () => {
    h.dataset.more = Ht.more, gr();
  };
  x && ae && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + ym.map(([t, o]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.more === t) + '" data-more-style="' + t + '">' + o + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const o = t.target.closest("[data-more-style]");
    o && (Ht.more = o.dataset.moreStyle, Ze(), Mt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((s) => s.setAttribute("aria-pressed", String(s === o))));
  })), X();
  let rt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const nn = /* @__PURE__ */ new Map();
  let bn = "";
  const ui = x ? Eu({ onChange: () => rn() }) : null;
  x && h.classList.add("house");
  const st = Object.assign(document.createElement("div"), { className: "tfBento" });
  let ze = null, pt = null, Ga = !1;
  function pi(t) {
    const o = Or();
    if (h.classList.toggle("houseBento", !!o), ze && (pt !== o || t == null) && (ze.destroy(), ze = null), !o || t == null) {
      st.remove();
      return;
    }
    st.isConnected || A.append(st), st.style.order = t, !ze && !Ga && (ze = jd(st, { getHass: i, entityId: o, style: "bitmap" }), pt = o);
  }
  const Bo = [["wx", ["current"]], ["avg", ["compared_to_average"]]], an = Object.fromEntries(Bo.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Qe = null, Cn = null;
  function mi(t) {
    const o = Or();
    Qe && Cn !== o && (Qe.forEach((s) => s.destroy()), Qe = null), Object.values(an).forEach((s) => o ? !s.isConnected && A.append(s) : s.remove()), o && !Qe && !Ga && (Qe = Bo.map(([s, d]) => jd(an[s], { getHass: i, entityId: o, style: "bitmap", cards: d, onOpen: s === "wx" ? () => Sa("weather") : void 0 })), Cn = o);
  }
  const vt = (t) => {
    var o;
    return ((o = b[t]) == null ? void 0 : o.attributes) || {};
  }, Be = (t) => vt(t).friendly_name || t, lt = (t, o) => $i(t) || (Number(vt(t).supported_features) & o) === o, ft = (t) => {
    const o = String(t ?? "").replace(/_/g, " ");
    return o.charAt(0).toUpperCase() + o.slice(1);
  }, Pe = (t, o = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: o, maximumFractionDigits: o }), Ua = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, uo = (t) => vt(t).supported_color_modes || [], jn = (t) => {
    const o = t / 100;
    return [o <= 66 ? 255 : 329.7 * Math.pow(o - 60, -0.1332), o <= 66 ? 99.47 * Math.log(o) - 161.12 : 288.12 * Math.pow(o - 60, -0.0755), o >= 66 ? 255 : o <= 19 ? 0 : 138.52 * Math.log(o - 10) - 305.04];
  }, Ee = (t, o) => [5, 3, 1].map((s) => {
    const d = (s + t / 60) % 6;
    return 255 * (1 - o / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function Ge(t) {
    const o = vt(t), s = (o.rgb_color || (o.hs_color && o.color_mode !== "color_temp" ? Ee(...o.hs_color) : o.color_temp_kelvin ? jn(o.color_temp_kelvin) : [255, 170, 0])).map((m) => Math.round(Math.max(0, Math.min(255, m)))), d = (0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]) / 255 > 0.8;
    return "--light:rgb(" + s.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Gt = (t) => {
    var o;
    return t.startsWith("light.") && ((o = b[t]) == null ? void 0 : o.state) === "on" ? ' data-light style="' + Ge(t) + '"' : "";
  }, ln = (t) => {
    const o = uo(t);
    return o.length ? o.some((s) => s !== "onoff") : vt(t).brightness != null;
  }, wn = (t) => [vt(t).min_color_temp_kelvin || 2e3, vt(t).max_color_temp_kelvin || 6500], Rt = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Ya(t) {
    const o = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (o < 10) return "Just now";
    if (o < 60) return o + " seconds ago";
    const s = Math.round(o / 60);
    if (s < 60) return s + (s === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(s / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const m = Math.round(d / 24);
    return m + (m === 1 ? " day ago" : " days ago");
  }
  const Et = (t) => {
    var o;
    return vt(t).current_position ?? (((o = b[t]) == null ? void 0 : o.state) === "closed" ? 0 : 100);
  }, Pn = (t) => {
    var o;
    return fo("pos", t, ((o = M.get(t)) == null ? void 0 : o.pos) ?? Et(t));
  }, po = (t) => {
    var o;
    return fo("tilt", t, ((o = M.get(t)) == null ? void 0 : o.tilt) ?? vt(t).current_tilt_position);
  };
  function Nt(t) {
    var w;
    const o = b[t];
    if (!o) return "Not found";
    if (o.state === "unavailable") return "Unavailable";
    const s = o.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (o.state !== "on") return "Off";
      const v = s.color_temp_kelvin;
      return (ln(t) ? Ua(o) + "%" : "On") + (s.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : xl.includes(s.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (o.state === "off" ? "Off" : ft(s.hvac_action || o.state)) + " · " + Pe(s.current_temperature) + " °C now";
    if (d === "cover") {
      const v = Et(t), B = s.current_tilt_position;
      return o.state === "opening" || o.state === "closing" ? ft(o.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (B > 0 && B < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return o.state !== "on" ? "Off" : ft(s.action || "on") + " · " + s.current_humidity + "% now";
    if (d === "vacuum") return ft(o.state) + (o.state === "cleaning" && ((w = s.rooms) != null && w.length) ? " · " + s.rooms.join(", ") : "") + (s.battery_level != null ? " · " + s.battery_level + "%" : "");
    if (d === "media_player") return o.state === "playing" || o.state === "paused" ? (o.state === "paused" ? "Paused · " : "") + (s.media_title || "Playing") : ft(o.state);
    if (d === "alarm_control_panel") return oc[o.state] || ft(o.state);
    if (d === "lock" || d === "valve") return ft(o.state);
    if (d === "switch") return o.state === "on" ? "On" : "Off";
    if (d === "plant") return o.state === "ok" ? "Healthy" : ft(s.problem);
    if (d === "binary_sensor")
      return s.device_class === "moisture" ? o.state === "on" ? "Wet" : "Dry" : yl.includes(s.device_class) ? o.state === "on" ? "Open" : "Closed" : o.state === "on" ? "Detected" : "Clear";
    if (s.rang) return "Rang at " + Rt(s.rang);
    const m = i();
    if (m != null && m.formatEntityState && !$i(t))
      try {
        return m.formatEntityState(o);
      } catch {
      }
    const _ = Number(o.state);
    if (o.state !== "" && Number.isFinite(_)) {
      const v = Math.abs(_) >= 100 ? 0 : Math.abs(_) >= 10 ? 1 : 2, B = s.unit_of_measurement ? s.unit_of_measurement === "%" ? "%" : " " + s.unit_of_measurement : "";
      return _.toLocaleString(void 0, { maximumFractionDigits: v }) + B + (s.plant_low ? " · Low" : s.plant_high ? " · High" : "");
    }
    return ft(o.state);
  }
  const zt = (t) => t >= 1e3 ? Pe(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Sn(t) {
    const o = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var _;
      const d = b[s.dataset.iconFor], m = s.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !m) {
        let w = s.firstElementChild;
        (!w || w.localName !== "ha-state-icon") && (s.textContent = "", w = document.createElement("ha-state-icon"), s.appendChild(w)), w.hass = o, w.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let w = s.firstElementChild;
        (!w || w.localName !== "ha-icon") && (s.textContent = "", w = document.createElement("ha-icon"), s.appendChild(w)), w.icon = m || ((_ = d == null ? void 0 : d.attributes) == null ? void 0 : _.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || Be(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const $t = (t, o, s) => ' data-icon-for="' + de(t) + '"' + (o ? ' data-icon-name="' + de(o) + '"' : "") + (s ? ' data-letter="' + de(s) + '"' : ""), Tn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : vt(t).rang ? "mdi:doorbell" : "", it = (t, o, s, d) => de([t, o, s, d ? JSON.stringify(d) : ""].join("|")), Za = (t) => de(JSON.stringify(t));
  function Gn(t, o) {
    var m, _;
    const s = de(Be(o) + ", " + Nt(o));
    return '<div class="activityRow' + (Number.isFinite(Number((m = b[o]) == null ? void 0 : m.state)) && ((_ = b[o]) == null ? void 0 : _.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + de(t + "|" + o) + '" aria-label="' + s + '. Show the last 24 hours"' : '" aria-label="' + s + '"') + '><div class="tfIcon" aria-hidden="true"' + $t(o, Tn(o)) + '></div><div><div class="activityRowName">' + de(Be(o)) + '</div><div class="activityRowMeta">' + de(Nt(o)) + "</div></div></div>";
  }
  const _a = (t, o, s) => '<div class="activityRow" aria-label="' + de(t + ", " + o) + '"><div class="tfIcon" aria-hidden="true"' + $t("", s, t) + '></div><div><div class="activityRowName">' + de(t) + '</div><div class="activityRowMeta">' + de(o) + "</div></div></div>";
  function mo(t) {
    var s;
    const o = ((s = b[t]) == null ? void 0 : s.state) === "on";
    return '<div class="activityRow tfPlug' + (o ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + it("switch", "toggle", t) + '" aria-label="Turn ' + de(Be(t)) + (o ? " off" : " on") + '"' + $t(t) + '></button><div><div class="activityRowName">' + de(Be(t)) + '</div><div class="activityRowMeta">' + de(Nt(t)) + "</div></div></div>";
  }
  const C = (t) => {
    var o;
    return ((o = Ce.get(t)) == null ? void 0 : o.name) ?? Be(t);
  }, D = (t) => {
    var o;
    return ((o = Ce.get(t)) == null ? void 0 : o.text) ?? Nt(t);
  };
  function H(t) {
    var s;
    const o = (s = Ce.get(t)) == null ? void 0 : s.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (o ? $t("", o, C(t)) : $t(t, Tn(t))) + '></div><div><div class="activityRowName">' + de(C(t)) + '</div><div class="activityRowMeta">' + de(D(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + de(C(t)) + '’s last 24 hours">' + bl + '</button></div><svg class="tfGraph" data-graph="' + de(t) + '" role="img" aria-label="' + de(C(t)) + ', last 24 hours"></svg></div>';
  }
  function F(t, o, s, d, m = "", _ = null, w = "") {
    const v = W && W.key === t;
    return '<section class="card tfCard' + (w ? " " + w : "") + (v ? " open" : "") + '" data-tf data-k="' + de(t) + '" style="order:' + o + (v && W.h ? ";min-height:" + W.h + "px" : "") + '" aria-label="' + de(s) + '"><div class="activityHeader">' + (_ ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + de(_) + '" aria-label="' + de(s + ", " + Nt(_) + ". More info") + '">' + de(s) + "</button>" : '<div class="activityTitle">' + de(s) + "</div>") + "</div>" + (v ? H(W.id) : '<div class="activityRows">' + d.join("") + "</div>" + m) + "</section>";
  }
  function ue(t, o) {
    const s = "readings:" + t.id, d = t.readings.map((m) => Gn(s, m));
    return t.power != null && d.push(_a("Power now", zt(t.power), "mdi:flash")), F(s, o, "Readings", d.concat(t.plugs.map(mo)));
  }
  function be(t, o) {
    var v;
    const s = "energy:" + t.id, [d, m] = [t.solar.find((B) => B.endsWith("_power")), t.solar.find((B) => B.endsWith("_today"))], _ = [d, m].filter(Boolean).map((B) => Gn(s, B)), w = Number(((v = b[d]) == null ? void 0 : v.state) || 0) * 1e3;
    return rt.grid && (_.push(Gn(s, rt.grid)), _.push(_a("House use", zt(w + Number(b[rt.grid].state)), "mdi:home-lightning-bolt"))), F(s, o, "Energy", _, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const he = (t, o) => F("plant:" + t.id, o, Be(t.id), t.readings.map((s) => Gn("plant:" + t.id, s)), "", t.id), xe = (t) => F("openings", t, "Doors and windows", rt.security.openings.map((o) => Gn("openings", o)));
  function le(t, o, s, d, m, _, w = null) {
    const v = s == null ? null : Math.max(0, Math.min(1, s)), B = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + de(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + B + '"' + (m ? ' aria-valuetext="' + de(m) + '"' : "") + ' data-drag="' + de(t + "|" + o) + '">' + (w != null ? '<span class="was" aria-hidden="true" style="left:' + w + '%"></span>' : "") + (_ ? v == null ? "" : '<b style="left:' + B + '%"></b>' : '<i style="width:' + B + '%"></i>') + "</div>";
  }
  const Ae = "move-assistant-house-last-bright", Fe = (() => {
    try {
      return JSON.parse(Ro.get(Ae)) || {};
    } catch {
      return {};
    }
  })();
  let Ke = 0;
  const Ue = (t, o) => {
    !o || Fe[t] === o || (Fe[t] = o, clearTimeout(Ke), Ke = setTimeout(() => Ro.set(Ae, JSON.stringify(Fe)), 500));
  }, De = (t, o, s, d) => '<div class="tfStep" role="group" aria-label="' + de(t) + '"><button type="button" data-act="' + s + '" aria-label="Lower ' + de(t.toLowerCase()) + '">−</button><output>' + de(o) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + de(t.toLowerCase()) + '">+</button></div>', Ne = (t, o, s) => '<div class="' + t + '" role="group" aria-label="' + de(o) + '">' + s.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + de(d.aria) + '"' : "") + ">" + (d.html || de(d.label)) + "</button>").join("") + "</div>", Re = (t, o) => "width:" + Math.round(Math.max(0, Math.min(1, (t - o * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * o / 3).toFixed(2), tt = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", mt = (t, o) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + de(Be(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(o) + '" aria-valuetext="' + Math.round(o) + '% open" data-blocks="' + de(t) + '">' + [0, 1, 2, 3].map((s) => '<span><i style="' + Re(o, s) + '"></i><b' + (o >= (s + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (s + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + tt(o) + '">' + Math.round(o) + "%</output></div>";
  function _t(t, o) {
    t.querySelectorAll(":scope>span").forEach((d, m) => {
      d.firstElementChild.setAttribute("style", Re(o, m)), d.lastElementChild.classList.toggle("lit", o >= (m + 1) * 25 - 12);
    });
    const s = t.querySelector(".tfTip");
    s.setAttribute("style", tt(o)), s.textContent = Math.round(o) + "%", t.setAttribute("aria-valuenow", String(Math.round(o))), t.setAttribute("aria-valuetext", Math.round(o) + "% open");
  }
  const bt = (t, o) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + de(Be(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(o) + '" aria-valuetext="' + Math.round(o) + '% open" data-drag="tilt|' + de(t) + '"><i style="width:calc((100% - 6px) * ' + o / 100 + ')"></i><span' + (o > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (o > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ut = (t, o, s) => '<div class="tfCoverBtns" role="group" aria-label="' + de(Be(t)) + '">' + [
    lt(t, hm) && ["open", "Open", "open_cover", o >= 100 && !s],
    lt(t, gm) && ["stop", "Stop", "stop_cover", !1],
    lt(t, fm) && ["close", "Close", "close_cover", o <= 0 && !s]
  ].filter(Boolean).map(([d, m, _, w]) => '<button type="button" data-act="' + it("cover", _, t) + '" aria-label="' + m + '"' + (w ? " disabled" : "") + ">" + vm[d] + "</button>").join("") + "</div>", yn = (t, o) => '<button class="tfIcon' + (o.art ? " art" : "") + '" type="button" data-act="' + o.button.act + '" aria-label="' + de(o.button.label) + '"' + (o.art ? ' style="background-image:url(&quot;' + de(o.art) + '&quot;)"' : $t(t, o.icon)) + "></button>", In = (t) => '<button class="tfName" type="button" data-more="' + de(t) + '" aria-label="' + de(Be(t) + ", " + Nt(t) + ". More info") + '"><span class="activityRowName">' + de(Be(t)) + '</span><span class="activityRowMeta">' + de(Nt(t)) + "</span></button>";
  function Ln(t, o = !1, s = null) {
    if (t.startsWith("light.") && Jn(t)) return '<div class="tfDac" data-k="' + de(t) + '" data-dac="' + (o ? "more:" : s ? "dash:" : "tile:") + de(t) + '"></div>';
    const d = Io(t), m = s || (o && t.startsWith("light.") ? ["bright"] : null), _ = d.sections.map((w, v) => w && (!m || m.includes((d.parts || [])[v])) ? w : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + de(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Gt(t) + '><div class="tfActionHead">' + yn(t, d) + In(t) + "</div>" + _.join("") + "</div>";
  }
  const Hn = "dual-controller-v3", Un = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.3/dist/dual-axis-controller-v4.js";
  let Aa = null;
  async function ho() {
    if (Aa || customElements.get(Hn)) return;
    Aa = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), o = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Hn), new Promise((d) => setTimeout(d, o ? 8e3 : 0))]), customElements.get(Hn)) return;
    const s = Object.assign(document.createElement("script"), { src: Un });
    s.onerror = () => {
      Aa = "failed", j();
    }, document.head.appendChild(s);
  }
  const dn = /* @__PURE__ */ new Map(), ht = (t) => (Ht.lightStyles[t] || Ht.lights) === "dac", Fn = () => Ht.lights === "dac" || Object.values(Ht.lightStyles).includes("dac");
  function Jn(t) {
    return ht(t) && !!customElements.get(Hn);
  }
  const Qn = (t) => Ht.lightPads[t] || Ht.dacPad, ea = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !h.classList.contains("light") },
      callService: (o, s, d, ...m) => t.callService(o, ...$r(o, s, d), ...m)
    };
  }, Po = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", wa = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", cn = (t, o) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: wa + (o ? Po : "") })).dataset.tf = "");
  }, Bt = /* @__PURE__ */ new Map(), hi = new ResizeObserver((t) => t.forEach(({ target: o }) => {
    const s = o.parentElement;
    !s || !o.offsetHeight || (s.style.removeProperty("min-height"), Bt.set(s.dataset.dac, s.offsetHeight));
  }));
  function on(t) {
    t.querySelectorAll("[data-dac]").forEach((o) => {
      const s = o.dataset.dac, d = s.startsWith("dash:");
      let m = dn.get(s);
      if (!m) {
        const _ = s.slice(s.indexOf(":") + 1);
        m = document.createElement(Hn), m.setConfig({ type: "custom:" + Hn, entity: _, pad: Qn(_), ...d ? { tap_action: { action: "none" } } : {} }), dn.set(s, m);
      }
      m.hass = ea(), m.parentNode !== o && o.replaceChildren(m), !m.offsetHeight && Bt.has(s) && (o.style.minHeight = Bt.get(s) + "px"), hi.observe(m), cn(m, d);
    });
  }
  function Pr() {
    const t = ea();
    dn.forEach((o, s) => {
      o.isConnected ? o.hass = t : dn.delete(s);
    });
  }
  customElements.whenDefined(Hn).then(() => {
    x && (A != null && A.querySelector("[data-tf]")) && Co(hn);
  });
  const fo = (t, o, s) => Oe.has(t + "|" + o) ? Oe.get(t + "|" + o) : s;
  function Io(t) {
    var _;
    const o = b[t], s = o.attributes, d = t.split(".")[0], m = (w, v) => ({ act: it(w, "toggle", t), label: v });
    if (d === "light") {
      const w = o.state === "on", v = uo(t), [B, ee] = wn(t), U = fo("bright", t, Ua(o));
      w && Ue(t, Ua(o));
      const z = fo("ct", t, w && s.color_mode === "color_temp" ? s.color_temp_kelvin : null), pe = fo("hue", t, w && xl.includes(s.color_mode) && s.hs_color ? s.hs_color[0] : null);
      return { on: w, button: m("light", "Turn " + Be(t) + (w ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ln(t) && le("bright", t, U / 100, Be(t) + " brightness", U + "%", !1, w ? null : Fe[t] ?? null),
        v.includes("color_temp") && le("ct", t, z == null ? null : (z - B) / (ee - B), Be(t) + " warm to cool", z == null ? "" : Math.round(z) + " kelvin", !0),
        v.some((qe) => xl.includes(qe)) && le("hue", t, pe == null ? null : pe / 360, Be(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const w = s.target_temp_step || 0.5, v = Number(s.temperature);
      return { on: o.state !== "off", tone: o.state === "cool" || s.hvac_action === "cooling" ? "cool" : "heat", button: m("climate", "Turn " + Be(t) + (o.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && De("Target temperature", Pe(v) + " °C", it("climate", "set_temperature", t, { temperature: v - w }), it("climate", "set_temperature", t, { temperature: v + w })),
        Ne("tfSeg", "Mode", (s.hvac_modes || []).map((B) => ({ label: ft(B), act: it("climate", "set_hvac_mode", t, { hvac_mode: B }), pressed: o.state === B })))
      ] };
    }
    if (d === "cover") {
      const w = o.state === "opening" || o.state === "closing", v = o.state === "closed", B = Pn(t), ee = po(t);
      return { on: !v, tone: "blue", icon: bm[vl(o)][v ? 1 : 0], button: m("cover", (v ? "Open " : "Close ") + Be(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        lt(t, Qd) && mt(t, B),
        ee != null && bt(t, ee),
        Ut(t, B, w)
      ] };
    }
    if (d === "humidifier") {
      const w = Number(s.humidity);
      return { on: o.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: m("humidifier", "Turn " + Be(t) + (o.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(w) && De("Target humidity", w + "%", it("humidifier", "set_humidity", t, { humidity: w - 1 }), it("humidifier", "set_humidity", t, { humidity: w + 1 })),
        ((_ = s.available_modes) == null ? void 0 : _.length) && Ne("tfSeg", "Mode", s.available_modes.map((v) => ({ label: ft(v), act: it("humidifier", "set_mode", t, { mode: v }), pressed: s.mode === v })))
      ] };
    }
    if (d === "media_player") {
      const w = o.state === "playing", v = o.state === "off" || o.state === "standby", B = fo("vol", t, s.volume_level), ee = v ? { act: it("media_player", lt(t, pm) ? "turn_on" : "toggle", t), label: "Turn " + Be(t) + " on" } : o.state === "playing" || o.state === "paused" ? { act: it("media_player", "media_play_pause", t), label: (w ? "Pause " : "Play ") + Be(t) } : { act: it("media_player", lt(t, mm) ? "turn_off" : "toggle", t), label: "Turn " + Be(t) + " off" };
      return { on: !v, tone: "blue", art: !v && s.entity_picture ? s.entity_picture : null, button: ee, parts: ["playback", "volume"], sections: v ? [] : [
        (lt(t, $d) || lt(t, Xd) || lt(t, Kd) || lt(t, Jd)) && Ne("tfSeg", "Playback", [
          { html: gs.prev, aria: "Previous", act: it("media_player", "media_previous_track", t), disabled: !lt(t, $d) },
          { html: w ? gs.pause : gs.play, aria: w ? "Pause" : "Play", act: it("media_player", "media_play_pause", t), disabled: !(lt(t, Kd) || lt(t, Jd)) },
          { html: gs.next, aria: "Next", act: it("media_player", "media_next_track", t), disabled: !lt(t, Xd) }
        ]),
        lt(t, um) && B != null && le("vol", t, B, Be(t) + " volume", Math.round(B * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const w = o.state === "cleaning", v = s.rooms || [], B = (U) => v.includes(U) ? v.filter((z) => z !== U) : v.concat(U), ee = it("vacuum", w ? "pause" : "start", t, $i(t) ? { rooms: v } : null);
      return { on: w || o.state === "returning", tone: "blue", button: { act: ee, label: (w ? "Pause " : "Start ") + Be(t) }, parts: ["controls", "rooms"], sections: [
        Ne("tfSeg", Be(t), [
          { label: w ? "Pause" : "Start", act: ee },
          { label: "Dock", act: it("vacuum", "return_to_base", t), disabled: o.state === "docked" },
          { label: "Locate", act: it("vacuum", "locate", t) }
        ]),
        $i(t) && Ne("tfChips", "Rooms to clean", rt.rooms.filter((U) => U.id !== "balcony").map((U) => ({ label: U.name, act: it("vacuum", "set_rooms", t, { rooms: B(U.name) }), pressed: v.includes(U.name) })))
      ] };
    }
    if (d === "lock") {
      const w = o.state === "locked";
      return { on: !w, tone: "heat", button: { act: it("lock", w ? "unlock" : "lock", t), label: (w ? "Unlock " : "Lock ") + Be(t) }, parts: ["controls"], sections: [
        Ne("tfSeg", Be(t), [
          { label: "Lock", act: it("lock", "lock", t), pressed: w },
          { label: "Unlock", act: it("lock", "unlock", t), pressed: o.state === "unlocked" },
          lt(t, Lm) && { label: "Open", act: it("lock", "open", t), pressed: o.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const w = o.state === "disarmed";
      return { on: !w, tone: o.state === "triggered" ? "alarm" : "blue", button: { act: it("alarm_control_panel", w ? "alarm_arm_away" : "alarm_disarm", t), label: w ? "Arm " + Be(t) + ", away" : "Disarm " + Be(t) }, parts: ["controls"], sections: [
        Ne("tfSeg", Be(t), _m.filter(([, , , v]) => !v || lt(t, v)).map(([v, B, ee]) => ({ label: B, act: it("alarm_control_panel", ee, t), pressed: o.state === v })))
      ] };
    }
    if (d === "valve") {
      const w = o.state === "open";
      return { on: w, tone: "blue", icon: "mdi:sprinkler-variant", button: m("valve", (w ? "Close " : "Open ") + Be(t)), parts: ["controls"], sections: [
        Ne("tfSeg", Be(t), [
          { label: "Open", act: it("valve", "open_valve", t), pressed: w },
          { label: "Close", act: it("valve", "close_valve", t), pressed: !w }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Be(t) }, sections: [] };
  }
  const Ea = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Pe(t)) + "°";
  function ar(t) {
    const o = (me) => t.readings.find((te) => vt(te).device_class === me), s = o("temperature"), d = o("humidity"), m = (me) => {
      var te;
      return Number((te = b[me]) == null ? void 0 : te.state);
    }, _ = (me) => t.actions.filter((te) => me.test(te)), w = t.lights.filter((me) => {
      var te;
      return ((te = b[me]) == null ? void 0 : te.state) === "on";
    }), v = _(/^cover\./), B = v.filter((me) => {
      var te;
      return ((te = b[me]) == null ? void 0 : te.state) !== "closed";
    }), ee = [...new Set(v.map((me) => vl(b[me])))], U = _(/^climate\./)[0], z = _(/^humidifier\./)[0], pe = _(/^media_player\./), qe = pe.find((me) => {
      var te;
      return ((te = b[me]) == null ? void 0 : te.state) === "playing";
    }) || pe.find((me) => {
      var te;
      return ((te = b[me]) == null ? void 0 : te.state) === "paused";
    }), Ie = t.plugs.filter((me) => {
      var te;
      return ((te = b[me]) == null ? void 0 : te.state) === "on";
    }), ge = [];
    if (s && Number.isFinite(m(s)) && ge.push({ key: "temp", id: s, kind: "reading", icon: Va.temp, label: "Temperature", value: Pe(m(s)) + "°" }), d && Number.isFinite(m(d)) && ge.push({ key: "hum", id: d, kind: "reading", icon: Va.hum, label: "Humidity", value: Math.round(m(d)) + "%" }), t.lights.length && ge.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Va.lights,
      label: "Lights",
      value: w.length ? w.length + " of " + t.lights.length + " on" : "All off",
      short: w.length ? w.length + " on" : "Off",
      on: w.length > 0,
      light: w.length ? Ge(w[0]) : "",
      acts: t.lights.map((me) => ["light", w.length ? "turn_off" : "turn_on", me]),
      aria: (w.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), v.length) {
      const me = ee.length === 1 ? wm[ee[0]] : "covers", te = Math.round(v.reduce(($e, Vt) => $e + Et(Vt), 0) / v.length);
      ge.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Va.covers,
        label: ft(me),
        value: te <= 0 ? "Closed" : te >= 100 ? "Open" : te + "% open",
        short: te <= 0 ? "Closed" : te + "%",
        on: B.length > 0,
        acts: v.map(($e) => ["cover", B.length ? "close_cover" : "open_cover", $e]),
        aria: (B.length ? "Close the " : "Open the ") + me + " in " + t.name
      });
    }
    if (U) {
      const me = vt(U), te = b[U].state === "off";
      ge.push({
        key: "climate",
        kind: "control",
        tone: me.hvac_action === "cooling" ? "cool" : "heat",
        icon: Va.climate,
        label: Be(U),
        value: te ? "Off" : ft(me.hvac_action || b[U].state) + " · " + Ea(me.temperature),
        short: te ? "Off" : Ea(me.temperature),
        on: !te,
        acts: [["climate", "toggle", U]],
        aria: "Turn " + Be(U) + (te ? " on" : " off")
      });
    }
    if (z) {
      const me = b[z].state === "on";
      ge.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Va.humidifier,
        label: Be(z),
        value: me ? "On · " + vt(z).humidity + "%" : "Off",
        short: me ? vt(z).humidity + "%" : "Off",
        on: me,
        acts: [["humidifier", "toggle", z]],
        aria: "Turn " + Be(z) + (me ? " off" : " on")
      });
    }
    if (pe.length) {
      const me = qe || pe[0], te = b[me], $e = te.state === "playing";
      ge.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Va.media,
        label: Be(me),
        value: Nt(me),
        short: $e ? "Playing" : te.state === "paused" ? "Paused" : ft(te.state),
        on: $e,
        acts: [["media_player", te.state === "playing" || te.state === "paused" ? "media_play_pause" : "toggle", me]],
        aria: ($e ? "Pause " : "Play ") + Be(me)
      });
    }
    return t.plugs.length && ge.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Va.plugs,
      label: "Plugs",
      value: Ie.length ? Ie.length + " of " + t.plugs.length + " on" : "All off",
      short: Ie.length ? Ie.length + " on" : "Off",
      on: Ie.length > 0,
      acts: t.plugs.map((me) => ["switch", Ie.length ? "turn_off" : "turn_on", me]),
      aria: (Ie.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((me) => ge.push(vt(me).device_class === "moisture" ? { key: "alert:" + me, kind: "alert", icon: Va.alert, label: "Water leak" } : { key: "note:" + me, kind: "note", icon: Va.door, label: Be(me) + " " + Nt(me).toLowerCase() })), ge;
  }
  const Ir = (t, o) => {
    const s = (d) => t.actions.filter((m) => d.test(m));
    return {
      lights: t.lights,
      covers: s(/^cover\./),
      climate: s(/^climate\./).slice(0, 1),
      humidifier: s(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = s(/^media_player\./);
        return [d.find((m) => {
          var _;
          return ((_ = b[m]) == null ? void 0 : _.state) === "playing";
        }) || d.find((m) => {
          var _;
          return ((_ = b[m]) == null ? void 0 : _.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[o] || [];
  }, or = (t, o, s) => '<button class="' + o + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Za(t.acts) + '" aria-label="' + de(t.aria) + '" aria-pressed="' + t.on + '">' + s + "</button>", Hr = (t) => '<button class="tfAName" type="button" data-go="' + de(t.id) + '" aria-label="Open ' + de(t.name) + '">' + de(t.name) + "</button>";
  function fi(t, o, s = !1) {
    const d = o.find((v) => v.key === "lights"), m = !!(d != null && d.on), _ = m && d.light ? ' data-light style="' + d.light + '"' : "", w = '<span class="tfAreaGlyph"' + $t("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return s || !d ? '<span class="tfIcon tfAreaIcon' + (m ? " on" : "") + '"' + _ + ' aria-hidden="true">' + w + "</span>" : '<button class="tfIcon tfAreaIcon' + (m ? " on" : "") + '" type="button"' + _ + ' data-acts="' + Za(d.acts) + '" aria-label="' + de(d.aria) + '" aria-pressed="' + m + '">' + w + "</button>";
  }
  const Ts = (t) => t.filter((o) => o.kind === "alert" || o.kind === "note").map((o) => '<span class="sourceTag">' + de(o.label) + "</span>").join(" "), Ls = (t) => t.readings.find((o) => vt(o).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((o) => b[o]) || null, ir = (t, o) => {
    const s = Be(o);
    return s.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? ft(s.slice(t.name.length + 1)) : s;
  };
  function Ho(t) {
    const o = b[t], s = vt(t), d = t.split(".")[0], m = Number(o.state);
    if (o.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(m)) {
      if (s.device_class === "temperature") return { text: Ea(m) };
      const _ = s.unit_of_measurement || "";
      return _ === "%" ? { text: Math.round(m) + "%" } : { text: Pe(m, Number.isInteger(m) ? 0 : 1), unit: _ };
    }
    if (d === "climate" && (s.current_temperature ?? s.temperature) != null) return { text: Ea(s.current_temperature ?? s.temperature) };
    if (d === "light") return { text: o.state !== "on" ? "Off" : ln(t) ? Ua(o) + "%" : "On" };
    if (d === "cover") {
      const _ = Et(t);
      return { text: _ <= 0 ? "Closed" : _ >= 100 ? "Open" : _ + "%" };
    }
    return d === "humidifier" ? { text: o.state === "on" ? s.humidity + "%" : "Off" } : d === "media_player" ? { text: o.state === "playing" ? "Playing" : o.state === "paused" ? "Paused" : ft(o.state) } : { text: Nt(t) };
  }
  const _s = (t, o, s) => {
    const d = s.find((v) => v.key === "temp"), m = s.find((v) => v.key === "hum"), _ = vt(o), w = b[o].state === "off";
    return o.startsWith("climate.") ? [ir(t, o), w ? "Off" : ft(_.hvac_action || b[o].state) + (_.temperature != null ? " · " + Ea(_.temperature) : ""), m && m.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === o) && ir(t, o), d && d.id !== o && d.value, m && m.id !== o && m.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Fr(t, o, s) {
    const d = s && Ho(s), m = s ? _s(t, s, o) : "", _ = (v) => {
      const B = Ir(t, v.key);
      return B.length === 1 ? B[0] : "group:" + t.id + ":" + v.key;
    }, w = o.filter((v) => v.kind === "control").slice(0, 4).map((v) => '<div class="tfATile' + (v.on ? " on" : "") + '" data-tone="' + v.tone + '"' + (v.light ? ' data-light style="' + v.light + '"' : "") + ">" + or(v, "tfIcon", v.icon) + '<button class="tfName" type="button" data-more="' + de(_(v)) + '" aria-label="' + de(t.name + " " + v.label.toLowerCase() + ", " + v.value + ". Open") + '"><span class="activityRowName">' + de(v.label) + '</span><span class="activityRowMeta">' + de(v.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + fi(t, o) + '<div class="tfATitle">' + Hr(t) + Ts(o) + "</div></div>" + (s ? '<button class="tfABig" type="button" data-more="' + de(s) + '" aria-label="' + de(Be(s) + ", " + Nt(s) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + de(d.text) + (d.unit ? '<span class="tfABigUnit">' + de(d.unit) + "</span>" : "") + "</span>" + (m ? '<span class="tfABigSub">' + de(m) + "</span>" : "") + "</button>" : "") + (w.length ? '<div class="tfATiles">' + w.join("") + "</div>" : "");
  }
  function Ka(t) {
    const o = t.id === fe, s = ar(t), d = Ls(t), m = d && Ho(d), _ = [...s.filter((w) => w.kind === "control"), ...s.filter((w) => w.kind !== "control" && w.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (o ? " active" : "") + '" data-area="' + de(t.id) + '" tabindex="0" aria-expanded="' + o + '" aria-label="' + de(t.name) + '"><div class="panelExpanded"' + (o ? "" : " inert") + ">" + Fr(t, s, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + fi(t, s, !0) + '<span class="tfACName">' + de(t.name) + '</span></div><span class="tfACMain">' + (m ? de(m.text + (m.unit ? " " + m.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + _.map((w) => '<span class="tfACTile"><span class="tfIcon' + (w.kind === "alert" ? " alert" : "") + '"' + (w.on && w.light ? ' data-light style="' + w.light + '"' : "") + ">" + w.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let $a = [];
  const gi = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + $a.map(Ka).join("") + "</section></div>", Fo = () => [
    { key: "home", name: "Home", ids: rt.homeVacuums },
    { key: "security", name: "Security", ids: [...rt.security.alarms, ...rt.security.locks] },
    ...rt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Oo = (t, o, s) => t + " " + (t === 1 ? o : s), Wo = () => (V.favourites ?? Q.favorite_entities ?? []).filter((t) => b[t]);
  function rr(t = 8) {
    const o = Wo();
    if (Q.hide_suggested_entities) return o;
    if (!We) {
      const d = Object.entries(Je).sort((_, w) => w[1] - _[1]).map(([_]) => _), m = rt.rooms.flatMap((_) => _.actions);
      We = [.../* @__PURE__ */ new Set([...ce, ...d, ...m.filter((_) => Io(_).on), ...m])];
    }
    const s = (d) => b[d] && b[d].state !== "unavailable" && !o.includes(d);
    return [...o, ...We.filter(s)].slice(0, Math.max(t, o.length));
  }
  const sr = (t) => {
    const o = Wo().includes(t);
    return '<button class="tfStar" type="button" data-star="' + de(t) + '" aria-pressed="' + o + '" aria-label="Favourite: ' + de(Be(t)) + '">' + Tm(o) + "</button>";
  };
  function Lt(t, { area: o = !1, star: s = !1 } = {}) {
    var ee;
    const d = t.split(".")[0], m = vs.includes(d) ? Io(t) : null, _ = m ? m.on : ["on", "open", "playing"].includes((ee = b[t]) == null ? void 0 : ee.state), w = m ? m.button : xm.includes(d) ? { act: it(d, "toggle", t), label: "Turn " + Be(t) + (_ ? " off" : " on") } : d === "scene" || d === "script" ? { act: it(d, "turn_on", t), label: "Run " + Be(t) } : null, v = Nt(t) + (o && Tt.get(t) ? " · " + Tt.get(t) : ""), B = (m == null ? void 0 : m.icon) || Tn(t);
    return '<div class="activityRow' + (w ? " tfPlug" : "") + (_ ? " on" : "") + (s ? " tfPick" : "") + '" data-k="' + de((o ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (m == null ? void 0 : m.tone) || "blue") + '"' + Gt(t) + ">" + (w && !s ? '<button class="tfIcon" type="button" data-act="' + w.act + '" aria-label="' + de(w.label) + '"' + $t(t, B) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + $t(t, B) + "></div>") + '<button class="tfName" type="button" data-more="' + de(t) + '" aria-label="' + de(Be(t) + ", " + v + ". More info") + '"><span class="activityRowName">' + de(Be(t)) + '</span><span class="activityRowMeta">' + de(v) + "</span></button>" + (s ? sr(t) : "") + "</div>";
  }
  const Or = () => {
    var t;
    return b[(t = V.sources) == null ? void 0 : t.weather] ? V.sources.weather : b["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(b).find((o) => o.startsWith("weather."));
  };
  function As() {
    var s;
    const t = (d) => Object.keys(b).filter((m) => m.startsWith("binary_sensor.") && d.includes(vt(m).device_class));
    return ((s = ie.alert_entities) != null && s.length ? ie.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(yl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => b[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(b[d.entity].state) }));
  }
  function Wr() {
    const t = Object.keys(wl), o = /* @__PURE__ */ new Set(), s = [];
    return (Q.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || o.has(d.key)) return;
        o.add(d.key);
      }
      s.push(d);
    }), t.forEach((d) => {
      o.has(d) || s.push({ type: "summary", key: d });
    }), s;
  }
  function Xa() {
    var qi;
    const t = rt.rooms, o = rt.security, s = (Le, wt) => Le.actions.filter((To) => wt.test(To)), d = (Le) => t.map((wt) => ({ name: wt.name, ids: Le(wt) })).filter((wt) => wt.ids.length), m = t.flatMap((Le) => Le.lights), _ = m.filter((Le) => {
      var wt;
      return ((wt = b[Le]) == null ? void 0 : wt.state) === "on";
    }).length, w = t.map((Le) => Le.readings.find((wt) => vt(wt).device_class === "temperature")).filter(Boolean).map((Le) => Number(b[Le].state)).filter(Number.isFinite), [v, B] = [Pe(Math.min(...w)), Pe(Math.max(...w))], ee = t.flatMap((Le) => s(Le, /^media_player\./)), U = ee.filter((Le) => {
      var wt;
      return ((wt = b[Le]) == null ? void 0 : wt.state) === "playing";
    }).length, z = As(), pe = z.filter((Le) => Le.severity === "warning" && Le.on).length, qe = o.locks.filter((Le) => {
      var wt;
      return ["unlocked", "jammed", "open"].includes((wt = b[Le]) == null ? void 0 : wt.state);
    }).length, Ie = o.alarms.filter((Le) => {
      var wt;
      return ((wt = b[Le]) == null ? void 0 : wt.state) === "disarmed";
    }).length, ge = pe ? Oo(pe, "warning", "warnings") : null, me = qe ? qe + " unlocked" : Ie ? Ie + " disarmed" : ge ? null : "All secure", te = Object.keys(b).filter((Le) => Le.startsWith("sensor.") && vt(Le).device_class === "battery").sort((Le, wt) => Number(b[Le].state) - Number(b[wt].state)), $e = [...te.filter((Le) => Number(b[Le].state) < 20), ...rt.vacuums.filter((Le) => vt(Le).battery_level < 20)], Vt = t.flatMap((Le) => Le.plants.map((wt) => wt.id)).sort((Le, wt) => {
      var To, Vi;
      return (((To = b[wt]) == null ? void 0 : To.state) === "problem") - (((Vi = b[Le]) == null ? void 0 : Vi.state) === "problem");
    }), Yt = Vt.filter((Le) => {
      var wt;
      return ((wt = b[Le]) == null ? void 0 : wt.state) === "problem";
    }), ii = t.flatMap((Le) => Le.solar), jt = ii.find((Le) => Le.endsWith("_power")), Yn = {
      light: m.length && { value: _ ? _ + " on" : "All off", groups: d((Le) => Le.lights) },
      climate: w.length && { value: v === B ? v + "°" : v + " - " + B + "°", groups: d((Le) => [...Le.readings.filter((wt) => ["temperature", "humidity"].includes(vt(wt).device_class)), ...s(Le, /^(climate|humidifier)\./)]) },
      security: (o.alarms.length || o.locks.length) && { value: [ge, me].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...o.alarms, ...o.locks] }, { name: "Doors and windows", ids: o.openings }].filter((Le) => Le.ids.length) },
      media_players: ee.length && { value: U ? U + " playing" : "No media playing", groups: d((Le) => s(Le, /^media_player\./)) },
      maintenance: (te.length || Vt.length) && { value: [$e.length && Oo($e.length, "low battery", "low batteries"), Yt.length && Oo(Yt.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: Vt }, { name: "Batteries", ids: [...rt.vacuums, ...te] }].filter((Le) => Le.ids.length) },
      energy: rt.grid && { value: zt(Number(((qi = b[jt]) == null ? void 0 : qi.state) || 0) * 1e3 + Number(b[rt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ii, rt.grid] }] }
    }, Zn = [], kr = z.filter((Le) => Le.severity !== "warning" && Le.on);
    return kr.length && Zn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Oo(kr.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: kr.map((Le) => Le.entity) }] }), Wr().forEach((Le) => {
      Le.type !== "summary" ? Zn.push({ key: "path:" + Le.path, name: Le.label || Le.path, icon: Le.icon || "mdi:link-variant", colour: "", value: "" }) : !Le.hidden && Yn[Le.key] && !(V.hiddenSums || []).includes(Le.key) && Zn.push({ key: Le.key, ...wl[Le.key], ...Yn[Le.key] });
    }), Zn;
  }
  const Es = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + de(t.key) + '" data-k="sum:' + de(t.key) + '" aria-label="' + de(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + $t(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + de(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + de(t.value) + "</div>" : "") + "</div></div>";
  function Pt(t) {
    const o = Wo();
    V = { ...V, favourites: o.includes(t) ? o.filter((s) => s !== t) : [...o, t] }, zn(), rn();
  }
  function Da(t) {
    document.querySelector("home-assistant") && (ke.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Ja(t, o) {
    if (t.startsWith("path:")) {
      Da(t.slice(5));
      return;
    }
    if (t === "security") {
      Sa("security");
      return;
    }
    wr("summary:" + t, o);
  }
  async function Ds() {
    const t = (w) => Promise.resolve().then(() => N(w)).catch(() => null), [o, s, d, m] = await Promise.all([
      t({ type: "frontend/get_user_data", key: ec }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), _ = (o == null ? void 0 : o.value) || {};
    V = { favourites: _.favourites ?? null, sources: _.sources, hiddenSums: _.hiddenSums, dash: _.dash, named: _.named }, Q = (s == null ? void 0 : s.value) || {}, ie = (d == null ? void 0 : d.value) || {}, ce = Array.isArray(m == null ? void 0 : m.entities) ? m.entities : [], We = null, Object.keys(b).length && rn(), vi();
  }
  const qo = "HomeCore";
  async function vi() {
    var d, m, _;
    const t = location.pathname.split("/")[1], o = V.named || [];
    if (!((m = (d = i()) == null ? void 0 : d.user) != null && m.is_admin) || !t || o.includes(t)) return;
    const s = () => {
      V = { ...V, named: [...o, t] }, zn();
    };
    try {
      const w = (_ = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : _.find((ee) => ee.url_path === t);
      if (!w || w.mode === "yaml") return;
      if (w.title === qo) {
        s();
        return;
      }
      const v = await N({ type: "lovelace/config", url_path: t }), B = ((v == null ? void 0 : v.views) || []).flatMap((ee) => [...ee.cards || [], ...(ee.sections || []).flatMap((U) => U.cards || [])]);
      if (!B.length || !B.every((ee) => (ee == null ? void 0 : ee.type) === "custom:move-assistant-card" && ee.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: w.id, title: qo }), s();
    } catch {
    }
  }
  let Qa = null, ta = 0, na = !1;
  const qr = (t) => {
    const o = t.split(".")[0];
    return Am.includes(o) && (o !== "binary_sensor" || yl.includes(vt(t).device_class));
  };
  async function Ra() {
    var t;
    if (!(na || Date.now() - ta < 30 * 1e3)) {
      na = !0, ta = Date.now();
      try {
        const o = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(qr), s = o.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: o }) : null;
        Qa = Array.isArray(s) ? s.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Qa = null;
      }
      na = !1, rn();
    }
  }
  function Vr() {
    const t = /* @__PURE__ */ new Map(), o = (d) => {
      if (!b[d.entity_id] || !qr(d.entity_id) || !Vo(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const m = t.get(d.entity_id);
      (!m || d.when > m.when + 1) && t.set(d.entity_id, d);
    };
    (Qa || []).forEach(o);
    const s = Qa ? ta / 1e3 - 5 : 0;
    return Object.keys(b).forEach((d) => {
      var w;
      const m = b[d], _ = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      _ > s && o({ entity_id: d, state: m.state, when: _, context_user_id: (w = m.context) == null ? void 0 : w.user_id });
    }), [...t.values()].sort((d, m) => m.when - d.when).slice(0, Em);
  }
  function aa(t) {
    var d;
    const o = t.context_user_id && Object.keys(b).find((m) => m.startsWith("person.") && vt(m).user_id === t.context_user_id);
    if (o) return Be(o);
    const s = (d = i()) == null ? void 0 : d.user;
    return s && t.context_user_id === s.id ? s.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function zr(t) {
    const o = t.entity_id.split(".")[0], s = String(t.state);
    return o === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[s] || ft(s).toLowerCase() : o === "cover" || o === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[s] || ft(s).toLowerCase() : o === "binary_sensor" ? s === "on" ? "opened" : "closed" : o === "climate" ? s === "off" ? "turned off" : "set to " + ft(s).toLowerCase() : o === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[s] || ft(s).toLowerCase() : o === "alarm_control_panel" ? (oc[s] || ft(s)).toLowerCase() : o === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[s] || ft(s).toLowerCase() : s === "on" ? "turned on" : s === "off" ? "turned off" : ft(s).toLowerCase();
  }
  function Rs(t) {
    const o = t.entity_id, s = Be(o) + " " + zr(t), d = [aa(t), Rt(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + $t(o, Tn(o)) + '></div><button class="tfName" type="button" data-more="' + de(o) + '" aria-label="' + de(s + ", " + d + ". More info") + '"><span class="activityRowName">' + de(s) + '</span><span class="activityRowMeta">' + de(d) + "</span></button></div>";
  }
  let eo = null, bi = 0;
  const jr = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ns() {
    var o;
    if (Date.now() - bi < 5 * 60 * 1e3) return;
    bi = Date.now();
    const t = [];
    try {
      const s = ((o = await N({ type: "energy/get_prefs" })) == null ? void 0 : o.energy_sources) || [], d = (m) => s.filter((_) => _.type === m).flatMap((_) => m === "grid" ? (_.flow_from || []).map((w) => w.stat_energy_from) : [_.stat_energy_from]).filter(Boolean);
      for (const [m, _, w] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!w.length) continue;
        const v = await Promise.all(w.map((B) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: B, calendar: { period: "day" }, types: ["change"] })).then((ee) => Number(ee == null ? void 0 : ee.change) || 0, () => 0)));
        t.push({ key: m, name: _, id: w[0], value: v.reduce((B, ee) => B + ee, 0), unit: vt(w[0]).unit_of_measurement || (m === "gas" || m === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    eo = t, rn();
  }
  let xa = null;
  function lr() {
    var _;
    const t = eo != null && eo.length ? eo : jr.map(([w, v, B, ee]) => {
      const U = "sensor.made_up_energy_" + w;
      return b[U] = { entity_id: U, state: String(B), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: ee, state_class: "total_increasing" } }, { key: w, name: v, id: U, value: B, unit: ee };
    });
    Ce.clear(), t.some((w) => w.id === xa) || (xa = t[0].id);
    const o = t.map((w) => {
      const v = Number(w.value).toLocaleString(void 0, { maximumFractionDigits: w.value < 10 ? 2 : 1 }) + " " + w.unit, B = Dm[w.key], ee = w.id === xa;
      return Ce.set(w.id, { name: w.name, text: v, icon: B }), '<div class="activityRow tap' + (ee ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + de(w.id) + '" aria-pressed="' + ee + '" aria-label="' + de(w.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + $t("", B, w.name) + '></div><div><div class="activityRowName">' + de(w.name) + '</div><div class="activityRowMeta">' + de(v) + "</div></div></div>";
    }), s = t.find((w) => w.id === xa), d = (((_ = _n().opts.energy) == null ? void 0 : _.graph) || "above") === "below", m = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + de(s.id) + '" role="img" aria-label="' + de(s.name) + ', last 24 hours"></svg></div>';
    return F("dash:energy", 0, "Energy today", o, m, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function go(t) {
    const o = A.querySelector(".tfDash-energy"), s = o == null ? void 0 : o.querySelector(".tfDashGraph svg");
    !s || t === xa || (xa = t, o.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const m = d.dataset.energyPick === t;
      d.classList.toggle("picked", m), d.setAttribute("aria-pressed", String(m));
    }), s.dataset.graph = t, s.dataset.drawn = "", nn.set("dash:energy", lr()), Ma(!0));
  }
  function Bs(t) {
    var m;
    if ((m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [o, s] = t.querySelectorAll("path");
    if (!(s != null && s.getTotalLength)) return;
    const d = s.getTotalLength();
    s.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), o == null || o.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Na = null, Ba = 0;
  const Vo = (t) => !t.startsWith("light.") || Rm.includes((Tt.get(t) || "").toLowerCase()), zo = () => Math.max(2, ka((A == null ? void 0 : A.clientWidth) || 0).n);
  function jo(t) {
    if (!Na) {
      const s = (d) => {
        var m;
        return (((m = b[d]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + (Je[d] || 0);
      };
      Na = {
        lights: rt.rooms.flatMap((d) => d.lights).filter((d) => {
          var m;
          return Vo(d) && ((m = b[d]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((d, m) => s(m) - s(d) || Be(d).localeCompare(Be(m))),
        climates: rt.rooms.flatMap((d) => d.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const o = Na.climates.filter((s) => b[s]).slice(0, t > 3 ? 2 : 1);
    return [...Na.lights.filter((s) => b[s]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const Go = (t, o, s, d) => (m) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + o + '" aria-label="' + s + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + s + "</div></div>" : "") + '<div class="activityRows">' + m + "</div></section>";
  function Uo(t, o) {
    var _, w;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + de(((w = (_ = i()) == null ? void 0 : _.config) == null ? void 0 : w.location_name) || "Home") + "</h1>" }), o.length && t.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Go("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: o.map((v) => ({ key: "sum:" + v.key, html: Es(v) })) }), $a.length && t.push({ key: "areas", html: gi(0) });
    const s = rr(ic * 3).filter(Vo).slice(0, ic);
    s.length && t.push({ key: "favs", wrap: Go("tfDash-favs", "favs", "Favourites", !0), tiles: s.map((v) => ({ key: "fav:" + v, html: Lt(v, { area: !0 }) })) });
    const d = Vr();
    t.push({ key: "dash:act", html: F("dash:act", 0, "Activity", d.length ? d.map(Rs) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: lr() });
    const m = zo();
    return Ba = m, t.push({
      key: "dash:tiles",
      wrap: (v) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + v + "</div>",
      tiles: jo(m >= 3 ? m : m * 2).map((v) => ({ key: v, html: Ln(v, !1, v.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), Ra(), Ns(), t;
  }
  const vo = 252, At = 16, bo = 230, wi = 60, wo = wi + At, oa = 5, Yo = 3, xi = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, dr = ["wx", "favs", "act", "energy", "avg"], Ps = { wx: oa, areas: oa, favs: oa, act: oa, energy: 4, avg: 4 }, cr = 3, ur = 94, Pa = /* @__PURE__ */ new Set(), yi = (t) => xi[t] || Be(t), Is = 409, xn = 128;
  let un = !1, qt = null, ia = null, ki = !1, Zo = /* @__PURE__ */ new Map(), Mi = 0, ya = 0;
  const Ko = ["title", "sums"], ka = (t) => {
    let o = Math.floor((t + At) / (vo + At)), s = vo;
    return o < 4 && t >= 4 * bo + 3 * At && (o = 4, s = Math.floor((t - 3 * At) / 4)), { n: Math.max(1, o), w: s };
  }, _n = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} });
  function ra(t) {
    V = { ...V, dash: t }, zn();
  }
  function Ia() {
    const t = (o) => A.querySelector(o);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", an.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", an.avg, 2],
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((o) => [o.dataset.k, o, 1, !0])
    ].filter(([, o]) => o == null ? void 0 : o.isConnected).map(([o, s, d, m = !1]) => ({ key: o, el: s, span: d, tile: m }));
  }
  const Ci = (t, o, s) => t.span === "full" ? o : t.span === "areas" ? Math.min(o, Math.ceil((Is + Math.max(0, $a.length - 1) * (xn + At) + At) / (s + At))) : Math.min(o, _n().spans[t.key] ?? t.span), Gr = (t) => Ps[t.key] ?? (t.el.classList.contains("tfDac") ? Pa.has(t.key) ? oa : cr : null);
  function Si(t, o, s = null) {
    const d = _n().cells, m = t.every((v) => !d[v.key] || d[v.key].col + v.cols <= o), _ = (v) => d[v.key] || { row: 1e9, col: 0 }, w = () => {
      const v = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Map(), ee = (ge, me, te, $e) => {
        for (let Vt = me; Vt < me + $e; Vt++) for (let Yt = ge; Yt < ge + te; Yt++) if (v.has(Yt + "," + Vt)) return !1;
        return !0;
      }, U = (ge, me, te) => {
        for (let $e = te; $e < te + ge.rows; $e++) for (let Vt = me; Vt < me + ge.cols; Vt++) v.add(Vt + "," + $e);
        B.set(ge.key, { col: me, row: te, cols: ge.cols, rows: ge.rows });
      }, z = (ge, me, te) => {
        for (me = Math.max(0, Math.min(o - ge.cols, me)), te = Math.max(0, te); !ee(me, te, ge.cols, ge.rows); ) te++;
        U(ge, me, te);
      }, pe = (ge) => {
        for (let me = 0; ; me++) for (let te = 0; te <= o - ge.cols; te++) if (ee(te, me, ge.cols, ge.rows)) {
          U(ge, te, me);
          return;
        }
      };
      s && z(s, qt.col, qt.row);
      const qe = t.filter((ge) => ge !== s), Ie = (ge, me) => _(ge).row - _(me).row || _(ge).col - _(me).col;
      return m ? (qe.filter((ge) => d[ge.key]).sort(Ie).forEach((ge) => z(ge, d[ge.key].col, d[ge.key].row)), qe.filter((ge) => !d[ge.key]).forEach(pe), B) : ([...qe].sort(Ie).forEach(pe), B);
    };
    for (let v = 0; ; v++) {
      const B = w();
      if (v === 3) return B;
      const ee = t.filter((z) => z.tile && !Pa.has(z.key)).map((z) => ({ it: z, p: B.get(z.key) })).sort((z, pe) => z.p.row - pe.p.row || z.p.col - pe.p.col);
      let U = !1;
      for (let z = 0, pe; z < ee.length; z = pe) {
        for (pe = z + 1; pe < ee.length && ee[pe].p.row === ee[z].p.row && ee[pe].p.col === ee[pe - 1].p.col + 1; pe++) ;
        const qe = ee.slice(z, pe), Ie = Math.max(...qe.map((ge) => ge.it.rows));
        qe.forEach((ge) => {
          ge.it.rows < Ie && (ge.it.rows = Ie, U = !0);
        });
      }
      if (!U) return B;
    }
  }
  function Ur() {
    const t = _n(), o = new Set(t.hidden), s = Ia().filter((_) => !Ko.includes(_.key));
    let d = Zo;
    if (!d.size) {
      const _ = t.pegs || 4, w = s.filter((v) => !o.has(v.key));
      w.forEach((v) => {
        v.cols = Ci(v, _, vo), v.rows = Gr(v) ?? 2;
      }), d = Si(w, _);
    }
    const m = (_) => !o.has(_.key) && d.get(_.key) || { row: 1e9, col: 0 };
    s.sort((_, w) => m(_).row - m(w).row || m(_).col - m(w).col).forEach((_, w) => _.el.style.setProperty("--o", String(3 + w)));
  }
  const Ti = (t, o) => ra({ ...t, cells: o, pegs: ka(A.clientWidth).n });
  function pn() {
    var me;
    if (!x || !A) return;
    const t = A.clientWidth, { n: o, w: s } = ka(t), d = h.classList.contains("tfDash") && o >= 2;
    h.classList.toggle("tfBoard", d), h.classList.toggle("tfEditing", d && un);
    const m = u("dashEditNav");
    m && (m.hidden = !d, m.classList.toggle("active", un), m.setAttribute("aria-pressed", String(un)), m.setAttribute("aria-label", un ? "Done editing" : "Edit the dashboard"), m.title = un ? "Done" : "Edit", m.innerHTML = un ? Sm : ac);
    const _ = d ? Ia() : [];
    if (!d) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((te) => {
        te.classList.remove("tfBoardItem", "tfBoardHidden"), te.style.left = te.style.top = te.style.width = te.style.height = "";
      }), (me = A.querySelector(".tfDash-act > .activityRows")) == null || me.style.removeProperty("max-height"), $o(!1), h.classList.contains("tfDash") && Ur();
      return;
    }
    A.style.setProperty("--peg-w", s + "px");
    const w = new Set(_n().hidden), v = s + At;
    _.forEach((te) => te.el.classList.toggle("tfBoardHidden", w.has(te.key)));
    const B = _.filter((te) => !w.has(te.key) && getComputedStyle(te.el).display !== "none");
    let ee = 0;
    B.filter((te) => Ko.includes(te.key)).forEach((te) => {
      te.el.classList.add("tfBoardItem"), Object.assign(te.el.style, { width: t + "px", height: "", left: "0px", top: ee + "px" });
      const $e = te.key === "sums" && te.el.querySelector(".tfDash-bar"), Vt = $e ? $e.querySelectorAll(".activityRow").length : 0;
      $e && ($e.style.maxWidth = "none");
      for (let Yt = 1; $e && Yt <= Vt && ($e.style.setProperty("--bar-cols", String(Math.ceil(Vt / Yt))), !($e.offsetWidth <= t)); Yt++)
        ;
      $e && ($e.style.maxWidth = ""), ee += te.el.offsetHeight + At;
    }), ya = ee;
    const U = B.filter((te) => !Ko.includes(te.key));
    U.forEach((te) => {
      te.cols = Ci(te, o, s), te.el.classList.add("tfBoardItem"), te.el.style.width = (te.cols === o ? t : te.cols * s + (te.cols - 1) * At) + "px", te.el.style.height = "", te.rows = Gr(te) ?? Math.max(1, Math.ceil((te.el.offsetHeight + At - 6) / wo));
    });
    const z = qt && U.find((te) => te.key === qt.key), pe = Si(U, o, z);
    pe.forEach((te) => Object.assign(te, { x: te.cols === o ? 0 : te.col * v, y: ya + te.row * wo, w: te.cols === o ? t : te.cols * s + (te.cols - 1) * At, h: te.rows * wo - At })), U.forEach((te) => {
      const $e = pe.get(te.key);
      te.el.style.height = $e.h + "px", te.el.classList.contains("tfDac") && te.el.style.setProperty("--tf-dac-pad", $e.h - ur + "px"), te !== z && (te.el.style.left = $e.x + "px", te.el.style.top = $e.y + "px");
    }), Zo = pe;
    const qe = pe.get("act"), Ie = qe && A.querySelector(".tfDash-act > .activityRows");
    Ie && (Ie.style.maxHeight = Math.max(wi, Math.floor((qe.h - Ie.offsetTop - 10) / wi) * wi) + "px"), Mi = Math.max(0, ...[...pe.values()].map((te) => te.row + te.rows));
    let ge = ya + Mi * wo - At;
    ge = $o(un, U, pe, ge, o, s), A.style.height = ge + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), _.forEach((te) => pr.observe(te.el)), Ma();
  }
  const Li = () => {
    ki || (ki = !0, requestAnimationFrame(() => {
      ki = !1, pn();
    }));
  }, pr = new ResizeObserver(() => {
    qt || Li();
  });
  function $o(t, o = [], s = /* @__PURE__ */ new Map(), d = 0, m = 1, _ = vo) {
    A.querySelectorAll(".tfEditChips").forEach((z) => {
      (!t || !z.closest(".tfBoardItem")) && z.remove();
    }), A.querySelectorAll(".tfBoardItem").forEach((z) => [...z.children].forEach((pe) => {
      pe.classList.contains("tfEditChips") || pe.toggleAttribute("inert", t);
    }));
    let w = A.querySelector(".tfBoardCells"), v = A.querySelector(".tfBoardLand"), B = A.querySelector(".tfBoardTray");
    if (!t)
      return w == null || w.remove(), v == null || v.remove(), B == null || B.remove(), mn(), d;
    const ee = Mi + Yo;
    if (w || (w = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), w.setAttribute("aria-hidden", "true"), A.prepend(w)), w.style.top = ya + "px", w.dataset.size !== m + "x" + ee + "x" + _ && (w.dataset.size = m + "x" + ee + "x" + _, w.style.gridTemplateColumns = "repeat(" + m + "," + _ + "px)", w.innerHTML = "<i></i>".repeat(m * ee)), d = Math.max(d, ya + ee * wo - At), o.forEach((z) => {
      const pe = z.el;
      !pe || pe.querySelector(":scope > .tfEditChips") || pe.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + km + '</span><button class="tfEditChip" type="button" data-board-more="' + de(z.key) + '" aria-label="' + de(yi(z.key)) + ' options" aria-haspopup="menu">' + Mm + "</button></div>");
    }), qt && s.has(qt.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(v));
      const z = s.get(qt.key);
      Object.assign(v.style, { left: z.x + "px", top: z.y + "px", width: z.w + "px", height: z.h + "px" });
    } else v == null || v.remove();
    const U = _n().hidden.filter((z) => Ia().some((pe) => pe.key === z));
    return U.length ? (B || (B = Object.assign(document.createElement("div"), { className: "tfBoardTray" }), A.appendChild(B)), B.innerHTML = U.map((z) => '<button class="pill" type="button" data-board-show="' + de(z) + '">Show ' + de(yi(z)) + "</button>").join(""), Object.assign(B.style, { top: d + At + "px", left: "0px", width: A.clientWidth + "px" }), d + At + B.offsetHeight) : (B == null || B.remove(), d);
  }
  function xo(t) {
    un = t, t || (qt = null, mn()), pn();
  }
  function yo(t, o) {
    var U, z;
    mn();
    const s = Zo.get(t), { n: d } = ka(A.clientWidth), m = _n(), _ = m.spans[t] ?? 2;
    if (!s) return;
    const w = s.cols >= d, v = (pe, qe, Ie) => '<button type="button" role="menuitem" data-board-act="' + pe + '"' + (Ie ? " disabled" : "") + ">" + qe + "</button>", B = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    B.setAttribute("role", "menu"), B.setAttribute("aria-label", yi(t) + " options"), B.innerHTML = (dr.includes(t) ? v("size", _ === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? v("graph", (((U = m.opts.energy) == null ? void 0 : U.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", w || s.col === 0) + v("right", "Move right", w || s.col + s.cols >= d) + v("up", "Move up", s.row <= 0) + v("down", "Move down") + v("hide", "Hide"), A.appendChild(B);
    const ee = Math.min(s.x + s.w - B.offsetWidth, A.clientWidth - B.offsetWidth);
    Object.assign(B.style, { left: Math.max(0, ee) + "px", top: s.y + 28 + "px" }), ia = { key: t, menu: B, opener: o }, (z = B.querySelector("button:not([disabled])")) == null || z.focus();
  }
  function mn(t) {
    if (!ia) return;
    const { menu: o, opener: s } = ia;
    ia = null, o.remove(), t && (s == null || s.focus());
  }
  const Ha = () => Object.fromEntries([...Zo].map(([t, o]) => [t, { col: o.col, row: o.row }]));
  function ko(t, o) {
    var _, w;
    const s = _n(), d = Ha(), m = d[t] || { col: 0, row: 0 };
    o === "size" && (s.spans = { ...s.spans, [t]: (s.spans[t] ?? 2) === 1 ? 2 : 1 }), o === "graph" && (s.opts = { ...s.opts, energy: { ...s.opts.energy || {}, graph: (((_ = s.opts.energy) == null ? void 0 : _.graph) || "above") === "above" ? "below" : "above" } }), o === "left" && (d[t] = { ...m, col: m.col - 1 }), o === "right" && (d[t] = { ...m, col: m.col + 1 }), o === "up" && (d[t] = { ...m, row: m.row - 1 }), o === "down" && (d[t] = { ...m, row: m.row + 1 }), o === "hide" && (s.hidden = [.../* @__PURE__ */ new Set([...s.hidden, t])]), ["left", "right", "up", "down"].includes(o) && (qt = { key: t, col: d[t].col, row: d[t].row }), Ti(s, d), qt && (pn(), qt = null, Ti(_n(), Ha())), mn(), o === "graph" && (nn.delete("dash:energy"), rn()), pn(), o !== "hide" && ((w = A.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || w.focus());
  }
  function Xo(t) {
    const o = _n();
    ra({ ...o, hidden: o.hidden.filter((s) => s !== t) }), pn();
  }
  function Mo(t) {
    if (!un || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfBoardTray")) return;
    const o = t.target.closest(".tfBoardItem"), s = o && Ia().find((z) => z.el === o);
    if (!s || Ko.includes(s.key)) return;
    const d = Zo.get(s.key), { w: m } = ka(A.clientWidth);
    if (!d) return;
    t.preventDefault(), mn();
    const _ = t.clientX, w = t.clientY;
    let v = !1, B = 0;
    const ee = (z) => {
      const pe = z.clientX - _, qe = z.clientY - w;
      if (!v) {
        if (Math.hypot(pe, qe) < 4) return;
        v = !0, qt = { key: s.key, col: d.col, row: d.row }, o.classList.add("tfDragging");
      }
      o.style.transform = "translate(" + pe + "px," + qe + "px)", qt.col = Math.round((d.x + pe) / (m + At)), qt.row = Math.round((d.y + qe - ya) / wo), B || (B = requestAnimationFrame(() => {
        B = 0, pn();
      }));
    }, U = () => {
      window.removeEventListener("pointermove", ee), window.removeEventListener("pointerup", U), window.removeEventListener("pointercancel", U), v && (cancelAnimationFrame(B), pn(), o.classList.remove("tfDragging"), o.style.transform = "", qt = null, Ti(_n(), Ha()), pn(), rn());
    };
    window.addEventListener("pointermove", ee), window.addEventListener("pointerup", U), window.addEventListener("pointercancel", U);
  }
  function Ma(t = !1) {
    const o = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(o != null && o.clientWidth)) return;
    const s = o.dataset.graph + "@" + o.clientWidth + "x" + o.clientHeight;
    o.dataset.drawn !== s && (o.dataset.drawn = s, ti(o.dataset.graph, o).then(() => {
      t && Bs(o);
    }));
  }
  function mr() {
    var v, B, ee;
    rt = ui.model(i()), b = rt.states, b[(v = V.sources) == null ? void 0 : v.grid] && (rt.grid = V.sources.grid), b[(B = V.sources) == null ? void 0 : B.alarm] && (rt.security.alarms = [V.sources.alarm]), M.forEach((U, z) => {
      const pe = b[z], qe = (pe == null ? void 0 : pe.attributes) || {};
      if (!pe || Date.now() - U.at > 2 * 60 * 1e3) {
        M.delete(z);
        return;
      }
      U.pos != null && pe.state !== "opening" && pe.state !== "closing" && Math.abs(Et(z) - U.pos) < 1 && delete U.pos, U.tilt != null && Math.abs((qe.current_tilt_position ?? -1) - U.tilt) < 1 && delete U.tilt, U.pos == null && U.tilt == null && M.delete(z);
    });
    const t = [];
    let o = 0;
    const s = Fo();
    $a = s.filter((U) => U.room).map((U) => U.room), $a.some((U) => U.id === fe) || (fe = ((ee = $a[0]) == null ? void 0 : ee.id) || null);
    const d = Se === "weather" ? { key: "weather", name: "Weather" } : Se && s.find((U) => U.key === Se);
    if (d || (Se = null), h.classList.toggle("tfAreaOpen", !!d), h.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), h.classList.toggle("tfDash", !d), Tt = /* @__PURE__ */ new Map(), rt.rooms.forEach((U) => [...U.actions, ...U.plugs, ...U.readings, ...U.openings, ...U.solar, ...U.plants.flatMap((z) => [z.id, ...z.readings])].forEach((z) => Tt.set(z, U.name))), !d) return Uo(t, Xa());
    if (t.push({ key: "areahead", html: Hs(d, ++o) }), d.key === "weather")
      return t.weather = ++o, t;
    const m = d.ids, _ = d.room ? d.room.id : d.key, w = d.room;
    return w != null && w.solar.length && t.push({ key: "energy:" + w.id, html: be(w, ++o) }), w && (w.readings.length || w.plugs.length || w.power != null) && t.push({ key: "readings:" + w.id, html: ue(w, ++o) }), w == null || w.plants.forEach((U) => t.push({ key: "plant:" + U.id, html: he(U, ++o) })), m.length && t.push({ key: "block:" + _, order: ++o, tiles: m.map((U) => ({ key: U, html: Ln(U) })) }), d.key === "security" && t.push({ key: "openings", html: xe(++o) }), t;
  }
  const Hs = (t, o) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + o + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + dm + '</button><div class="settingsTitle">' + de(t.name) + "</div></div>";
  let Jo = 0, Ca = null;
  const to = (t) => t === "weather" ? an.wx : t.startsWith("room:") ? A.querySelector(".tfAreas") : A.querySelector(".tfDashBarRow");
  function Sa(t) {
    var o, s;
    Se || (Jo = Fa().scrollTop, Ca = ((o = to(t)) == null ? void 0 : o.getBoundingClientRect().top) ?? null), Se = t, t.startsWith("room:") && (fe = t.slice(5)), hn(), Fa().scrollTop = 0, (s = A.querySelector("[data-area-back]")) == null || s.focus({ preventScroll: !0 });
  }
  let sa = null;
  function Fs(t, o) {
    if (sa == null || sa(), o == null) return;
    const s = Fa(), d = performance.now() + 1500, m = ["wheel", "touchstart", "pointerdown", "keydown"];
    let _ = 0;
    const w = () => {
      cancelAnimationFrame(_), m.forEach((B) => window.removeEventListener(B, w, !0)), sa = null;
    }, v = () => {
      const B = t();
      if (B != null && B.isConnected) {
        const ee = B.getBoundingClientRect().top - o;
        Math.abs(ee) > 0.5 && (s.scrollTop += ee);
      }
      performance.now() < d ? _ = requestAnimationFrame(v) : w();
    };
    m.forEach((B) => window.addEventListener(B, w, { capture: !0, passive: !0 })), sa = w, v();
  }
  function _i() {
    var s;
    const t = Se;
    Se = null, hn(), Fa().scrollTop = Jo, Fs(() => to(t), Ca);
    const o = t.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? an.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (s = (o == null ? void 0 : o.querySelector("[data-go]")) || o) == null || s.focus({ preventScroll: !0 });
  }
  const Yr = (t) => t.wrap ? t.wrap(t.tiles.map((o) => o.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + de(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((o) => o.html).join("") + "</div></div>", Zr = (t) => t.map((o) => o.key + (o.tiles ? "(" + o.tiles.map((s) => s.key).join(",") + ")" : "")).join(";");
  function Fa() {
    for (let t = h.parentElement || h.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const o = getComputedStyle(t).overflowY;
      if ((o === "auto" || o === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Co(t) {
    const o = Fa(), s = (v) => {
      const B = v.getBoundingClientRect();
      return B.height && B.bottom > 0 && B.top < window.innerHeight;
    }, d = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && s(v)), m = d == null ? void 0 : d.dataset.k, _ = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const w = d != null && d.isConnected ? d : m && A.querySelector('[data-k="' + CSS.escape(m) + '"]');
    w != null && w.isConnected && _ != null && (o.scrollTop += w.getBoundingClientRect().top - _);
  }
  function hn() {
    if (!x || !A) return;
    const t = mr();
    A.querySelectorAll("[data-tf]").forEach((s) => s.remove()), nn.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((s) => s.tiles ? Yr(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((d) => nn.set(d.key, d.html)) : nn.set(s.key, s.html)), bn = Zr(t), A.append(...o.children), pi(t.weather), mi(), pr.disconnect(), pn(), Sn(A), Pi(A), on(A), j(), W && ti(W.id), da(), Ta(), Ii(), requestAnimationFrame(O);
  }
  const Ai = (t) => {
    var s;
    const o = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return o && { label: o.getAttribute("aria-label"), act: (s = o.dataset) == null ? void 0 : s.act };
  }, Qo = (t, o) => {
    var s;
    o && ((s = o.label && t.querySelector('[aria-label="' + CSS.escape(o.label) + '"]') || o.act && t.querySelector('[data-act="' + CSS.escape(o.act) + '"]')) == null || s.focus({ preventScroll: !0 }));
  };
  function Kr(t, o) {
    const s = document.createElement("div");
    s.innerHTML = o;
    const d = s.firstElementChild, m = Ai(t);
    t.replaceWith(d), Sn(d), Pi(d), on(d), Qo(d, m);
  }
  function rn() {
    !x || !A || qt || Co(hr);
  }
  function hr() {
    if (!A.querySelector("[data-tf]")) {
      hn();
      return;
    }
    const t = mr();
    if (Zr(t) !== bn) {
      hn();
      return;
    }
    const o = (s) => [...Oe.keys()].some((d) => {
      const m = d.slice(d.indexOf("|") + 1);
      return s === m || s.endsWith(":" + m);
    });
    t.forEach((s) => (s.tiles || [s]).forEach((d) => {
      if (nn.get(d.key) === d.html || o(d.key)) return;
      const m = A.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (m) {
        if (nn.set(d.key, d.html), W && W.key === d.key && m.querySelector(".tfOpen")) {
          m.querySelector(".tfOpen .activityRowMeta").textContent = D(W.id);
          return;
        }
        Kr(m, d.html), W && W.key === d.key && ti(W.id), d.key.startsWith("energy:") && da();
      }
    })), Ta(), Ii(), Pr(), j(), ze == null || ze.update(), Qe == null || Qe.forEach((s) => s.update()), h.classList.contains("tfDash") && Li(), requestAnimationFrame(O);
  }
  const fr = {
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
  }, Os = (t) => {
    var s;
    const o = (((s = fr[t.split(".")[0]]) == null ? void 0 : s.call(fr, vt(t))) || []).filter(([, d]) => d != null && d !== "");
    return o.length ? '<div class="tfMoreRows">' + o.map(([d, m]) => '<div class="tfMoreRow"><span>' + de(d) + "</span><span>" + de(m) + "</span></div>").join("") + "</div>" : "";
  }, Ws = (t) => $i(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Ei(t, o = {}, s = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + de(d.name) + '</div><div class="tfMoreTiles' + (s ? " single" : "") + '">' + d.ids.map((m) => Lt(m, o)).join("") + "</div></div>").join("") + "</div>";
  }
  const je = document.createElement("div");
  je.className = "tfMoreBackdrop", je.hidden = !0, h.appendChild(je);
  const kn = (t, o) => {
    for (let s = t; s && s !== je; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if ((d === "auto" || d === "scroll") && s.scrollHeight > s.clientHeight + 1 && (o < 0 ? s.scrollTop > 0 : s.scrollTop + s.clientHeight < s.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let ei = null;
  je.addEventListener("touchstart", (t) => {
    ei = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), je.addEventListener("touchmove", (t) => {
    var m, _;
    if (!ei || t.touches.length > 1 || (_ = (m = t.target).closest) != null && _.call(m, "input,textarea,select")) return;
    const o = t.touches[0], s = ei.x - o.clientX, d = ei.y - o.clientY;
    ei = { x: o.clientX, y: o.clientY }, Math.abs(d) >= Math.abs(s) && !kn(t.target, d) && t.preventDefault();
  }, { passive: !1 }), je.addEventListener("wheel", (t) => {
    kn(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function gr() {
    const t = je.querySelector(".tfMorePair"), o = je.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - o.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", gr, { passive: !0 }), x && Mt();
  let la = [];
  const Di = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Ri(t) {
    const o = (v, B = "") => '<div class="tfMoreHead">' + (g != null && g.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + bl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + de(v) + "</div>" + B + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + cm + "</button></div>", s = (v, B) => '<div class="tfMoreNow"><div class="tfMoreState">' + de(v) + "</div>" + (B ? '<div class="tfMoreSub">' + de(B) + "</div>" : "") + "</div>", d = Ei;
    if (t === "favourites") {
      const v = Wo(), B = new Set(v), ee = [{ name: "Starred", ids: v }, { name: "Home", ids: rt.homeVacuums }, { name: "Security", ids: [...rt.security.alarms, ...rt.security.locks] }, ...rt.rooms.map((U) => ({ name: U.name, ids: [...U.actions, ...U.plugs] }))].map((U, z) => z ? { ...U, ids: U.ids.filter((pe) => !B.has(pe)) } : U).filter((U) => U.ids.length);
      return [o("Favourites"), s(v.length ? v.length + " starred" : "None starred"), d(ee, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const v = Xa().find((z) => z.key === t.slice(8));
      if (!v) return null;
      const B = v.key === "light" ? (v.groups || []).flatMap((z) => z.ids) : [], ee = B.some((z) => {
        var pe;
        return ((pe = b[z]) == null ? void 0 : pe.state) === "on";
      }), U = B.length ? '<button class="primary" type="button" data-acts="' + Za(B.map((z) => ["light", ee ? "turn_off" : "turn_on", z])) + '">' + (ee ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [o(v.name), '<div class="tfMoreNowRow">' + s(v.value) + U + "</div>", ...(v.groups || []).map((z) => {
        const pe = z.ids.filter((Ie) => vs.includes(Ie.split(".")[0])), qe = z.ids.filter((Ie) => !pe.includes(Ie));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + de(z.name) + "</div>" + (pe.length ? '<div class="tfMoreActions">' + pe.map((Ie) => Ln(Ie, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((Ie) => Lt(Ie, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, v, B] = t.split(":"), ee = rt.rooms.find((ge) => ge.id === v), U = ee && ar(ee).find((ge) => ge.key === B);
      if (!U) return null;
      const z = Ir(ee, B), pe = z.filter((ge) => vs.includes(ge.split(".")[0])), qe = z.filter((ge) => !pe.includes(ge)), Ie = U.acts ? '<button class="primary" type="button" data-acts="' + Za(U.acts) + '">' + (U.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [o(ee.name + " " + U.label.toLowerCase()), '<div class="tfMoreNowRow">' + s(U.value) + Ie + "</div>", '<div class="tfMoreGroup">' + (pe.length ? '<div class="tfMoreActions">' + pe.map((ge) => Ln(ge, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((ge) => Lt(ge, {})).join("") + "</div>" : "") + "</div>"];
    }
    const m = t.split(".")[0], _ = b[t], w = vs.includes(m) ? Io(t) : { sections: [] };
    return [
      o(Be(t)),
      s(Nt(t), _.last_changed && Ya(Date.parse(_.last_changed))),
      m === "cover" && '<div data-cover-art="' + de(t) + '"></div>',
      ...w.sections.filter(Boolean),
      vr(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(g != null && g.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Cm + "</button>"
    ].filter(Boolean);
  }
  const vr = (t) => Di(t) ? "" : Os(t) + Ws(t);
  let Ni = "";
  function br(t) {
    var o;
    g && (g.details = t, Ta(), (o = je.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || o.focus({ preventScroll: !0 }));
  }
  const Bi = (t) => {
    const o = b[t], s = Et(t), d = Pn(t);
    return { kind: vl(o), name: Be(t), text: Nt(t), pos: s, target: Math.abs(d - s) > 0.5 ? d : null, moving: o.state === "opening" || o.state === "closing", tilt: po(t) ?? 100, canSet: lt(t, Qd) };
  };
  function Pi(t) {
    t.querySelectorAll("[data-cover-art]").forEach((o) => {
      const s = o.dataset.coverArt, d = o.dataset.artKey || "more:" + s;
      let m = E.get(d);
      m || (m = lm({ onMove: (_) => ai(s, _), onSet: (_) => {
        ai(s, _), ca("pos", s);
      } }), m.coverId = s, E.set(d, m)), o.replaceWith(m.el), m.update(Bi(s));
    });
  }
  const Oa = (t) => [...E.values()].filter((o) => o.coverId === t), On = () => E.forEach((t) => {
    b[t.coverId] && t.update(Bi(t.coverId));
  }), Ii = () => {
    E.forEach((t, o) => {
      t.el.isConnected || (t.destroy(), E.delete(o));
    }), On();
  };
  function Ta() {
    var _, w;
    if (!g || !(Di(g.id) || b[g.id])) {
      je.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((v) => v.endsWith("|" + g.id))) {
      On();
      return;
    }
    const t = Ri(g.id), o = je.querySelector(".tfMore");
    if (!t) {
      Hi();
      return;
    }
    const s = Ai(je), d = vr(g.id), m = g.id.startsWith("summary:") || g.id.startsWith("group:");
    if (je.hidden || !o || t.length !== la.length || o.classList.contains("wide") !== m) {
      const v = !je.hidden && o ? o.scrollTop : 0;
      je.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (m ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + bl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Ni = d, je.hidden = !1, gr(), Pi(je), on(je), Sn(je), v && (je.querySelector(".tfMore").scrollTop = v), Qo(je, s), je.contains(n.activeElement) || (_ = je.querySelector("[data-more-close]")) == null || _.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((v, B) => {
        var z, pe;
        if (v === la[B] || v.includes("data-cover-art") || o.children[B].contains((pe = (z = n.activeElement) == null ? void 0 : z.matches) != null && pe.call(z, "input,select") ? n.activeElement : null) || [...Oe.keys()].some((qe) => o.children[B].querySelector('[data-drag="' + CSS.escape(qe) + '"]'))) return;
        const ee = document.createElement("div");
        ee.innerHTML = v;
        const U = ee.firstElementChild;
        o.children[B].replaceWith(U), Sn(U), on(U);
      }), d !== Ni) {
        const v = je.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = d), Ni = d;
      }
      je.contains(n.activeElement) || Qo(je, s);
    }
    (w = je.querySelector(".tfMorePair")) == null || w.classList.toggle("details", !!(g.details && d)), la = t, On();
  }
  setInterval(() => {
    g && Ta();
  }, 15 * 1e3);
  function wr(t, o) {
    const s = !!(g && o && je.contains(o));
    g = { id: t, opener: s ? g.opener : o, back: s ? g : null }, xr();
  }
  function xr() {
    la = [], je.hidden = !0, E.forEach((t, o) => {
      o !== g.id && je.contains(t.el) && (t.destroy(), E.delete(o));
    }), Ta();
  }
  function Hi() {
    var s, d, m, _, w, v;
    const t = g == null ? void 0 : g.opener;
    g = null, E.forEach((B, ee) => {
      je.contains(B.el) && (B.destroy(), E.delete(ee));
    }), dn.forEach((B, ee) => {
      ee.startsWith("more:") && dn.delete(ee);
    }), je.hidden = !0, je.innerHTML = "";
    const o = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(o) : (s = t == null ? void 0 : t.dataset) != null && s.more ? (d = A.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(o) : (m = t == null ? void 0 : t.dataset) != null && m.summary ? (_ = A.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || _.focus(o) : (w = t == null ? void 0 : t.hasAttribute) != null && w.call(t, "data-favs-edit") && ((v = A.querySelector("[data-favs-edit]")) == null || v.focus(o));
  }
  function Fi(t, o, s, d = {}) {
    const m = o.map((me) => me[1]), _ = d.zero ? 0 : Math.min(...m), w = Math.max(...m), v = Math.max(120, t.clientWidth || 260), B = Math.max(60, t.clientHeight || 130), ee = 8, U = B - 20, z = Date.now() - 24 * 3600 * 1e3, pe = 24 * 3600 * 1e3, qe = (me) => Math.max(0, Math.min(v, (me - z) / pe * v)), Ie = (me) => w === _ ? (ee + U) / 2 : U - (me - _) / (w - _) * (U - ee);
    let ge = "M" + qe(o[0][0]).toFixed(1) + " " + Ie(o[0][1]).toFixed(1);
    for (let me = 1; me < o.length; me++) ge += d.smooth ? "L" + qe(o[me][0]).toFixed(1) + " " + Ie(o[me][1]).toFixed(1) : "H" + qe(o[me][0]).toFixed(1) + "V" + Ie(o[me][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + v + " " + B), t.setAttribute("aria-label", s), t.innerHTML = '<path d="' + ge + "V" + U + "H" + qe(o[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ge + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (B - 4) + '">24 h ago</text><text x="' + v + '" y="' + (B - 4) + '" text-anchor="end">Now</text>';
  }
  function qs(t) {
    var d;
    const o = Number((d = b[t]) == null ? void 0 : d.state), s = Date.now();
    if (vt(t).state_class === "total_increasing") {
      const m = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), _ = Math.max(1, s - m);
      return [...Array(49)].map((w, v) => m + _ * v / 48).map((w) => [w, Math.round(o * Math.pow((w - m) / _, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((m, _) => [s - (48 - _) * 30 * 60 * 1e3, Math.round(o * (0.96 + 0.04 * Math.sin(_ / 6)) * 10) / 10]);
  }
  async function ti(t, o) {
    var qe, Ie;
    let s = ke.get(t);
    if (t.endsWith("_solar_power")) s = { at: Date.now(), points: Td() };
    else if ($i(t)) s = { at: Date.now(), points: qs(t) };
    else if (!s || Date.now() - s.at > 5 * 60 * 1e3) {
      try {
        const ge = new Date(Date.now() - 864e5).toISOString(), me = await N({ type: "history/history_during_period", start_time: ge, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), te = ((me == null ? void 0 : me[t]) || []).map(($e) => [$e.lu != null ? $e.lu * 1e3 : Date.parse($e.last_updated || $e.last_changed), Number($e.s ?? $e.state)]).filter(([$e, Vt]) => Number.isFinite($e) && Number.isFinite(Vt));
        s = { at: Date.now(), points: te };
      } catch {
        s = { at: Date.now(), points: [] };
      }
      ke.set(t, s);
    }
    const d = o || A.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const m = b[t], _ = ((qe = m == null ? void 0 : m.attributes) == null ? void 0 : qe.unit_of_measurement) || "", w = s.points.slice(), v = Number(m == null ? void 0 : m.state);
    if (Number.isFinite(v) && !t.endsWith("_solar_power") && w.push([Date.now(), v]), w.length < 2) {
      d.setAttribute("aria-label", Be(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const B = w.map((ge) => ge[1]), ee = Math.min(...B), U = Math.max(...B), z = (ge) => ge.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ge) >= 100 ? 0 : 1 }), pe = ((Ie = m == null ? void 0 : m.attributes) == null ? void 0 : Ie.state_class) === "total_increasing";
    Fi(d, w, Be(t) + ", last 24 hours: " + (pe ? "+" + z(B[B.length - 1] - B[0]) : ee === U ? z(ee) : z(ee) + " to " + z(U)) + (_ ? " " + _ : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function da() {
    const t = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!t) return;
    const o = Td();
    Fi(t, o, "Solar, last 24 hours: up to " + Pe(Math.max(...o.map((s) => s[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Vs(t, o) {
    const s = o.entity_id, d = M.get(s) || {}, m = { open_cover: 100, close_cover: 0, set_cover_position: o.position, toggle: Et(s) > 0 ? 0 : 100 }[t], _ = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: o.tilt_position }[t];
    m != null && (d.pos = m), _ != null && (d.tilt = _), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), M.set(s, d);
  }
  function $r(t, o, s) {
    var m;
    const d = s == null ? void 0 : s.entity_id;
    return t !== "light" || typeof d != "string" || !Fe[d] || !ln(d) || s.brightness_pct != null || s.brightness != null ? [o, s] : o !== "turn_on" && !(o === "toggle" && ((m = b[d]) == null ? void 0 : m.state) !== "on") ? [o, s] : ["turn_on", { ...s, brightness_pct: Fe[d] }];
  }
  function ni(t, o, s, d) {
    let m = { entity_id: s, ...d || {} };
    return [o, m] = $r(t, o, m), t === "cover" && Vs(o, m), Je[s] = (Je[s] || 0) + 1, Ro.set(tc, JSON.stringify(Je)), ui.call(t, o, m) ? Promise.resolve() : Promise.resolve(re(t, o, m));
  }
  function no(t) {
    const [o, s, d, m] = t.split("|");
    ni(o, s, d, m ? JSON.parse(m) : null).catch(() => {
    });
  }
  function ai(t, o) {
    Oe.set("pos|" + t, o), nn.delete(t), la = la.map(() => ""), [A, je].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((m) => _t(m, o)));
    const s = A.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (s && (s.textContent = Math.round(o) + "%"), (g == null ? void 0 : g.id) === t) {
      const d = je.querySelector(".tfMoreState"), m = je.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(o) + "%", d.classList.add("live")), m && (m.textContent = "Currently " + Et(t) + "%");
    }
    Oa(t).forEach((d) => d.update(Bi(t)));
  }
  const So = (t, o) => {
    const s = t.shiftKey ? 10 : 1, d = { ArrowUp: o + s, ArrowRight: o + s, ArrowDown: o - s, ArrowLeft: o - s, PageUp: o + 25, PageDown: o - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function zs(t, o) {
    var ge;
    const s = t.dataset.blocks;
    (ge = t.setPointerCapture) == null || ge.call(t, o.pointerId);
    const d = (me) => {
      const te = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (me.clientX - te.left) / te.width * 100));
    }, m = d(o), _ = o.clientX;
    let w = !1, v = Pn(s), B = m, ee = 0;
    const U = () => {
      v = Math.abs(B - v) < 0.2 ? B : v + (B - v) * 0.14, ai(s, v), ee = requestAnimationFrame(U);
    }, z = () => {
      w || (w = !0, t.classList.add("fine"), ee = requestAnimationFrame(U));
    }, pe = setTimeout(z, 350), qe = (me) => {
      B = d(me), Math.abs(me.clientX - _) > 6 && (clearTimeout(pe), z());
    }, Ie = () => {
      clearTimeout(pe), cancelAnimationFrame(ee), t.removeEventListener("pointermove", qe), t.removeEventListener("pointerup", Ie), t.removeEventListener("pointercancel", Ie), t.classList.remove("fine"), ai(s, w ? Math.round(v) : (Math.min(3, Math.floor(m / 25)) + 1) * 25), ca("pos", s);
    };
    t.addEventListener("pointermove", qe), t.addEventListener("pointerup", Ie), t.addEventListener("pointercancel", Ie);
  }
  function yr(t) {
    var m;
    const [o, s] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    W = { key: o, id: s, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, nn.delete(o), rn(), (m = A.querySelector(".tfOpen [data-close]")) == null || m.focus({ preventScroll: !0 });
  }
  function ao(t) {
    var o;
    fe = t.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((s) => {
      var m;
      const d = s === t;
      s.classList.toggle("active", d), s.setAttribute("aria-expanded", String(d)), (m = s.querySelector(".panelExpanded")) == null || m.toggleAttribute("inert", !d);
    }), nn.set("areas", gi(((o = A.querySelector('[data-k="areas"]')) == null ? void 0 : o.style.order) || 1));
  }
  const Wa = {
    bright: { value: (t, o) => Math.round(o * 100), text: (t, o) => o ? o + "%" : "Off", send: (t, o) => o > 0 ? ["light", "turn_on", { brightness_pct: o }] : ["light", "turn_off", {}] },
    ct: { value: (t, o) => {
      const [s, d] = wn(t);
      return Math.round(s + o * (d - s));
    }, text: (t, o) => o.toLocaleString() + "k", send: (t, o) => ["light", "turn_on", { color_temp_kelvin: o }] },
    hue: { value: (t, o) => Math.round(o * 360), text: () => "Colour", send: (t, o) => {
      var s;
      return ["light", "turn_on", { hs_color: [o, Math.max(60, ((s = vt(t).hs_color) == null ? void 0 : s[1]) || 100)] }];
    } },
    pos: { value: (t, o) => Math.round(o * 100), text: (t, o) => Math.round(o) + "%", send: (t, o) => ["cover", "set_cover_position", { position: Math.round(o) }] },
    tilt: { value: (t, o) => Math.round(o * 100), text: (t, o) => "Tilt " + o + "%", send: (t, o) => ["cover", "set_cover_tilt_position", { tilt_position: o }] },
    vol: { value: (t, o) => Math.round(o * 100) / 100, text: (t, o) => Math.round(o * 100) + "%", send: (t, o) => ["media_player", "volume_set", { volume_level: o }] }
  };
  function Ct(t, o, s, d) {
    var B;
    const m = Wa[o].value(s, d);
    Oe.set(o + "|" + s, m);
    const _ = Math.round(d * 100) + "%", w = t.querySelector("i");
    if (o === "tilt") {
      w.style.width = "calc((100% - 6px) * " + d + ")";
      const [ee, U] = t.querySelectorAll("span");
      ee.classList.toggle("lit", d > 0.08), U.classList.toggle("lit", d > 0.92), nn.delete(s), la = la.map(() => ""), Oa(s).forEach((z) => z.update(Bi(s)));
    } else if (w) w.style.width = _;
    else {
      let ee = t.querySelector("b");
      ee || (ee = document.createElement("b"), t.appendChild(ee)), ee.style.left = _;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const v = (B = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : B.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = Wa[o].text(s, m));
  }
  function ca(t, o) {
    const s = Oe.get(t + "|" + o), [d, m, _] = Wa[t].send(o, s), w = () => setTimeout(() => {
      Oe.delete(t + "|" + o), rn();
    }, 1500);
    ni(d, m, o, _).then(w, w);
  }
  function oi(t) {
    t.addEventListener("click", (o) => {
      var d;
      const s = o.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel");
      if (ia && !o.target.closest(".tfBoardMenu,[data-board-more]") && mn(), !(!s || !t.contains(s) || s.disabled))
        if (s.dataset.boardMore)
          (ia == null ? void 0 : ia.key) === s.dataset.boardMore ? mn(!0) : yo(s.dataset.boardMore, s);
        else if (s.dataset.boardAct) ko(ia.key, s.dataset.boardAct);
        else if (s.dataset.boardShow) Xo(s.dataset.boardShow);
        else if (s.dataset.energyPick) go(s.dataset.energyPick);
        else if (s.dataset.act) no(s.dataset.act);
        else if (s.hasAttribute("data-details")) br(!(g != null && g.details));
        else if (s.hasAttribute("data-details-close")) br(!1);
        else if (s.dataset.summary) Ja(s.dataset.summary, s);
        else if (s.dataset.star) Pt(s.dataset.star);
        else if (s.hasAttribute("data-more-back"))
          g = g.back, xr();
        else if (s.hasAttribute("data-favs-edit")) wr("favourites", s);
        else if (s.dataset.acts) JSON.parse(s.dataset.acts).forEach(([m, _, w, v]) => ni(m, _, w, v).catch(() => {
        }));
        else if (s.dataset.more) wr(s.dataset.more, s);
        else if (s.hasAttribute("data-more-close")) Hi();
        else if (s.dataset.go) Sa("room:" + s.dataset.go);
        else if (s.hasAttribute("data-area-back")) _i();
        else if (s.dataset.open) yr(s);
        else if (s.hasAttribute("data-close")) {
          const m = W;
          W = null, nn.delete(m.key), rn(), (d = A.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else s.classList.contains("tfAreaPanel") && !s.classList.contains("active") && ao(s);
    }), t.addEventListener("keydown", (o) => {
      var d, m, _, w, v, B, ee;
      const s = o.target;
      if ((d = s.dataset) != null && d.open && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), yr(s)), (m = s.dataset) != null && m.energyPick && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), go(s.dataset.energyPick)), (_ = s.classList) != null && _.contains("tfAreaPanel") && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), ao(s)), (w = s.dataset) != null && w.summary && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), Ja(s.dataset.summary, s)), o.key === "Escape" && ia && t === A) {
        o.preventDefault(), mn(!0);
        return;
      }
      if (o.key === "Escape" && un && t === A) {
        o.preventDefault(), xo(!1), (v = u("dashEditNav")) == null || v.focus();
        return;
      }
      if (o.key === "Escape" && Se && t === A && (o.preventDefault(), _i()), (B = s.dataset) != null && B.blocks) {
        const U = s.dataset.blocks, z = So(o, Math.round(Pn(U)));
        if (z == null) return;
        o.preventDefault(), ai(U, z), clearTimeout(se.get(U)), se.set(U, setTimeout(() => ca("pos", U), 500));
        return;
      }
      if ((ee = s.dataset) != null && ee.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(o.key)) {
        o.preventDefault();
        const [U, z] = s.dataset.drag.split("|"), pe = Number(s.getAttribute("aria-valuenow")) / 100, qe = o.key === "Home" ? 0 : o.key === "End" ? 1 : Math.max(0, Math.min(1, pe + (o.key === "ArrowLeft" || o.key === "ArrowDown" ? -0.05 : 0.05)));
        Ct(s, U, z, qe), ca(U, z);
      }
    }), t.addEventListener("pointerdown", (o) => {
      var ii;
      const s = o.target.closest("[data-blocks]");
      if (s && o.button === 0) {
        o.preventDefault(), zs(s, o);
        return;
      }
      const d = o.target.closest("[data-drag]");
      if (!d || o.button > 0) return;
      const [m, _] = d.dataset.drag.split("|");
      if (m === "bright" && !ln(_)) {
        no(it("light", "toggle", _));
        return;
      }
      const w = m === "bright" && ((ii = b[_]) == null ? void 0 : ii.state) !== "on", v = o.pointerType !== "mouse", B = m === "tilt" ? 3 : 0, ee = () => d.getBoundingClientRect().width - B * 2, U = (jt) => {
        const Yn = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (jt.clientX - Yn.left - B) / ee()));
      };
      let z = v ? "waiting" : w ? "pressed" : "dragging", pe = 0, qe = 0;
      const Ie = o.clientX, ge = o.clientY, me = (jt, Yn) => Math.hypot(jt.clientX - Ie, jt.clientY - ge) > Yn, te = () => {
        try {
          d.setPointerCapture(o.pointerId);
        } catch {
        }
      };
      v || (o.preventDefault(), te()), z === "dragging" && Ct(d, m, _, U(o));
      const $e = v && setTimeout(() => {
        var jt, Yn;
        z === "waiting" && (z = "held", S = d, d.classList.add("held"), te(), (jt = navigator.userActivation) != null && jt.hasBeenActive && ((Yn = navigator.vibrate) == null || Yn.call(navigator, 8)), pe = w ? (Fe[_] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, qe = Ie, Ct(d, m, _, pe));
      }, y), Vt = (jt) => {
        z === "waiting" && me(jt, 8) ? z = "gone" : z === "pressed" && me(jt, 4) && (z = "dragging"), z === "held" ? Ct(d, m, _, Math.max(0, Math.min(1, pe + (jt.clientX - qe) / ee()))) : z === "dragging" && Ct(d, m, _, U(jt));
      }, Yt = (jt) => {
        clearTimeout($e), ["pointermove", "pointerup", "pointercancel"].forEach((Yn, Zn) => d.removeEventListener(Yn, Zn ? Yt : Vt)), d.classList.remove("held"), S === d && (S = null), z === "held" || z === "dragging" ? ca(m, _) : jt.type === "pointerup" && w && (z === "waiting" || z === "pressed") && ni("light", "turn_on", _).catch(() => {
        });
      };
      d.addEventListener("pointermove", Vt), d.addEventListener("pointerup", Yt), d.addEventListener("pointercancel", Yt);
    }), t.addEventListener("touchmove", (o) => {
      S && o.cancelable && o.preventDefault();
    }, { passive: !1 });
  }
  return A && x && (Ds(), oi(A), oi(je), je.addEventListener("click", (t) => {
    t.target === je && Hi();
  }), (Oi = n.getElementById("homeNav")) == null || Oi.addEventListener("click", () => {
    Se && _i();
  }), (fn = n.querySelector(".bottomNav")) == null || fn.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + ac + "</button>"), (Wi = u("dashEditNav")) == null || Wi.addEventListener("click", () => xo(!un)), A.addEventListener("pointerdown", Mo), A.addEventListener("hass-action", (t) => {
    var d, m;
    const o = (m = (d = t.target).closest) == null ? void 0 : m.call(d, ".tfDac"), s = o == null ? void 0 : o.dataset.k;
    !s || !o.dataset.dac.startsWith("dash:") || un || (t.stopPropagation(), Pa.has(s) ? Pa.delete(s) : Pa.add(s), pn());
  }), new ResizeObserver(() => {
    h.classList.contains("tfDash") && zo() !== Ba ? rn() : Li();
  }).observe(A), window.addEventListener("resize", Li, { passive: !0 }), je.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), g != null && g.details ? br(!1) : Hi());
  })), oe(), {
    update(t) {
      if (!x) return;
      const o = !Object.keys(b).length;
      b = t || {};
      for (const s in b) s.startsWith("light.") && b[s].state === "on" && ln(s) && Ue(s, Ua(b[s]));
      o ? hn() : rn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Ga = !0, ze == null || ze.destroy(), ze = null, Qe == null || Qe.forEach((t) => t.destroy()), Qe = null;
    },
    resume() {
      Ga = !1, !(!x || !(A != null && A.querySelector("[data-tf]"))) && (st.isConnected && pi(st.style.order), mi());
    }
  };
}
const Bm = "0.45.5", kl = "move_assistant", Pm = "move_assistant", rc = "move_assistant_checkin_reminder";
function Im() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Hm extends HTMLElement {
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
    var u;
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (u = this._test) == null || u.update(l.states));
  }
  connectedCallback() {
    var l, i;
    (l = this._app) == null || l.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var l, i;
    (l = this._app) == null || l.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Im();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${au}${ou}${iu}</style>${ru}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const h = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: kl
      });
      u = (h == null ? void 0 : h.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = Tu(l, {
      data: u,
      save: (h) => this._save(h),
      fire: (h, f) => this._fire(h, f),
      ws: (h) => this._hass.callWS(h),
      subscribe: (h, f) => {
        var x, T;
        return (T = (x = this._hass) == null ? void 0 : x.connection) != null && T.subscribeMessage ? this._hass.connection.subscribeMessage(f, h) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var h, f;
        return Object.keys(((f = (h = this._hass) == null ? void 0 : h.services) == null ? void 0 : f.notify) || {}).sort();
      },
      setReminderAutomation: (h) => this._setReminderAutomation(h),
      setLight: (h) => this.classList.toggle("lightBody", h),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Nm(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var f;
        const h = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        h === this._lastSaved || h === this._pendingJson || (this._lastSaved = h, (f = this._app) == null || f.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: kl }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: kl,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var u, h;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((h = this._hass) == null || h.callWS({
      type: "fire_event",
      event_type: Pm,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${rc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (f) {
        if ((f == null ? void 0 : f.status_code) !== 404 && (f == null ? void 0 : f.status) !== 404) throw f;
      }
      return;
    }
    const u = (f) => `${f}:00`, h = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: rc,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: u(l.times.morning), id: "morning" },
        { trigger: "time", at: u(l.times.evening), id: "evening" }
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
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(l) {
    var u;
    const i = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Hm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Bm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
