const au = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', ou = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:none}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:none;width:46px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{padding:0 10px}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfAName{font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:10px 0;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:8px;max-width:calc(100% - 20px)}.tfACMain{max-width:100%;font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfBoardTray{position:absolute;z-index:1;display:flex;flex-wrap:wrap;gap:8px}#app.tfEditing .tfBoardTray .pill{cursor:pointer}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', iu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', ru = `<main id="app"><div class="shell">
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
`, fo = {
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
}, Ln = (n) => n < 0 ? 0 : n > 1 ? 1 : n, wd = (n, s, o) => n + (s - n) * o, xl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(o.slice(u, u + 2), 16) || 0);
}, su = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), xd = {}, Ht = (n, s, o) => {
  const u = n + s + o;
  return xd[u] || (xd[u] = su(xl(n).map((h, f) => h + (xl(s)[f] - h) * o)));
}, yd = {}, gs = (n) => yd[n] || (yd[n] = xl(n)), ol = (n, s, o, u) => (h) => {
  if (h <= 0) return 0;
  if (h >= 1) return 1;
  let f = 0, x = 1, L = h;
  for (let b = 0; b < 18; b++)
    L = (f + x) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * o + L * L * L < h ? f = L : x = L;
  return 3 * (1 - L) * (1 - L) * L * s + 3 * (1 - L) * L * L * u + L * L * L;
}, lu = { std: ol(0.2, 0, 0, 1), acc: ol(0.3, 0, 1, 1), dec: ol(0, 0, 0, 1) };
function ks(n, s) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || s ? "night" : "day");
}
function oc(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [Ht(s.clear[0], s.cloudy[0], 0.12), Ht(s.clear[1], s.cloudy[1], 0.12)], s.storm = [Ht(s.rain[0], "#000000", 0.22), Ht(s.rain[1], "#000000", 0.22)], s;
}
const yl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], kl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Ml = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Cl(n, s = fo) {
  const o = { ...fo, ...s }, u = oc(o), h = String(n).split("/"), f = u[h[0]] ? h[0] : "clear", x = h[1] === "night", L = u[f][x ? 1 : 0], b = {
    night: x,
    clearness: f === "clear" ? 1 : f === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: x ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: x ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: x ? 1 : 0 },
    stars: yl.map(() => ({ o: 0 })),
    rain: kl.map(() => ({ o: 0, dy: -16 })),
    snow: Ml.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (se) => yl.map(() => ({ o: se }));
  return f === "clear" ? x ? (b.moon.o = 1, b.stars = N(1)) : b.sun.o = 1 : f === "partly" ? (b.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: x ? 1 : 0 }, x ? (b.moon = { x: 34, y: 33, d: 48, o: 1 }, b.stars = N(0.7)) : b.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : f === "cloudy" || f === "fog" ? (b.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: x ? 1 : 0 }, x ? b.moon = { x: 40, y: 36, d: 40, o: 0 } : b.sun = { x: 40, y: 36, r: 20, o: 0 }) : (b.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, x ? b.moon = { x: 38, y: 28, d: 36, o: 0 } : b.sun = { x: 38, y: 28, r: 18, o: 0 }, f === "snow" ? b.snow = Ml.map(() => ({ o: 1, dy: 0 })) : b.rain = kl.map((se, ne) => ({ o: f === "storm" && ne === 1 ? 0 : 1, dy: 0 })), f === "storm" && (b.bolt = { o: 1, dy: 0 })), b;
}
const kd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function du(n, s, o, u = fo, h = !1) {
  const f = { ...fo, ...u }, x = (R, P) => R > 0.01 && P > 0.01 ? "stay" : R > 0.01 ? "leave" : P > 0.01 ? "enter" : "none", L = (R, P, z, X) => {
    const V = R[0] + P * X, q = R[1] - (z - 1 - P) * X;
    return lu[R[2]](Ln((o - V) / Math.max(1e-3, q - V)));
  }, b = (R, P, z, X = 0, V = 1, q = 0) => {
    const K = x(R.o, P.o);
    if (K === "none") return { ...P, o: 0 };
    const F = L(kd[z][K], X, V, q), Y = {};
    for (const ae in P) Y[ae] = h && K !== "stay" && ae !== "o" ? K === "leave" ? R[ae] : P[ae] : wd(R[ae], P[ae], F);
    return Y;
  }, N = L(kd.sky, 0, 1, 0);
  let se, ne;
  if (n.night !== s.night) {
    const R = Math.min(n.clearness, s.clearness), P = Ht(Ht(n.sky, s.sky, 0.5), f.dusk, 0.6 * R);
    se = N < 0.5 ? Ht(n.sky, P, N * 2) : Ht(P, s.sky, N * 2 - 1), ne = R > 0.5 ? [n.sky, f.dusk, s.sky] : [n.sky, s.sky];
  } else
    se = Ht(n.sky, s.sky, N), ne = [n.sky, s.sky];
  return {
    night: o < 0.5 ? n.night : s.night,
    clearness: wd(n.clearness, s.clearness, o),
    sky: se,
    skyStops: ne,
    skyT: N,
    sun: b(n.sun, s.sun, "body"),
    moon: b(n.moon, s.moon, "body"),
    cloud: b(n.cloud, s.cloud, "cloud"),
    stars: s.stars.map((R, P) => b(n.stars[P], R, "fx", P, s.stars.length, 0.05)),
    rain: s.rain.map((R, P) => b(n.rain[P], R, "fx", P, s.rain.length, 0.05)),
    snow: s.snow.map((R, P) => b(n.snow[P], R, "fx", P, s.snow.length, 0.05)),
    bolt: b(n.bolt, s.bolt, "fx")
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
], Tn = (n, s) => (cu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, uu = 0, _l = 1, Al = 2, El = 3, Dl = 4, Sn = 5, Vi = 6, Ho = 7, Rl = 8, bs = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), pu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), ic = (n, s, o) => {
  let u = !1;
  for (let h = 0, f = n.length - 1; h < n.length; f = h++) {
    const x = n[h], L = n[f];
    x[1] > o != L[1] > o && s < (L[0] - x[0]) * (o - x[1]) / (L[1] - x[1]) + x[0] && (u = !u);
  }
  return u;
};
function rc(n, { size: s = 90, px: o = 2, oneBit: u = !1, colors: h = fo, ink: f = "#26221e", paper: x = "#fbf9f6", clock: L = 0, idle: b = !1 } = {}) {
  const N = { ...fo, ...h }, se = Math.sin, ne = Math.PI * 2, R = Math.max(6, Math.round(s / o)), P = R / 90, z = b ? Math.floor(L / 100) * 100 : 0, X = b ? se(ne * z / 3600) : 0, V = b ? 1.8 * se(ne * z / 6400) : 0, q = b ? 0.9 * se(ne * z / 4100) : 0, K = b ? 0.8 * se(ne * z / 5200) : 0, F = z / 3400 % 1, Y = b && n.bolt.o > 0.5 && (F < 0.04 || F > 0.08 && F < 0.11), ae = new Array(R * R), A = new Uint8Array(R * R), W = (w, C, M, T, re) => {
    M == null || w < 0 || C < 0 || w >= R || C >= R || (T >= 1 || T > Tn(w + 5, C + 3)) && (ae[C * R + w] = M, A[C * R + w] = re);
  }, fe = (w, C, M, T) => {
    for (let re = Math.max(0, Math.floor(C - M) - 1); re <= Math.min(R - 1, C + M + 1); re++) for (let $ = Math.max(0, Math.floor(w - M) - 1); $ <= Math.min(R - 1, w + M + 1); $++) T($, re, $ + 0.5 - w, re + 0.5 - C);
  }, Se = n.skyStops || [n.sky], g = n.skyT || 0;
  for (let w = 0; w < R; w++) {
    const C = n.night ? Ln(1 - (w + 0.5) / (R * 0.7)) * 0.85 : Ln(((w + 0.5) / R - 0.35) / 0.65) * 0.85;
    for (let M = 0; M < R; M++) {
      let T = Se[0];
      if (Se.length > 1) {
        const re = g * (Se.length - 1), $ = Math.min(Se.length - 2, Math.floor(re));
        T = re - $ > Tn(M, w) ? Se[$ + 1] : Se[$];
      }
      C > Tn(M + 2, w + 5) && (T = n.night ? Ht(T, "#000000", 0.28) : Ht(T, "#ffffff", 0.2)), ae[w * R + M] = Y ? Ht(T, "#ffffff", 0.25) : T;
    }
  }
  if (n.sun.o > 0.01) {
    const w = n.sun.x * P, C = n.sun.y * P, M = Math.max(1, n.sun.r * P);
    if (b) {
      const T = M * (1.45 + 0.06 * X), re = Ht(N.sun, "#ffffff", 0.55);
      if (fe(w, C, T, ($, Q, oe, le) => {
        const Be = Math.sqrt(oe * oe + le * le);
        Be > M && Be < T && W($, Q, re, 0.26 * (1 - (Be - M) / (T - M)) * n.sun.o, uu);
      }), n.sun.o > 0.5) {
        const $ = Math.floor(z / 500) % 2, Q = Math.max(1, M * 0.22);
        for (let oe = 0; oe < 8; oe++) if (oe % 2 === $) for (let le = M + 1.5; le < M + 1.5 + Q; le += 0.7) W(Math.floor(w + Math.cos(oe * Math.PI / 4) * le), Math.floor(C + Math.sin(oe * Math.PI / 4) * le), N.sun, n.sun.o, Rl);
      }
    }
    fe(w, C, M, (T, re, $, Q) => {
      if ($ * $ + Q * Q > M * M) return;
      const oe = (($ * 0.643 + Q * 0.766) / M + 1) / 2;
      W(T, re, Ln((oe - 0.62) / 0.38) > Tn(T, re) ? N.sunEdge : N.sun, n.sun.o, _l);
    });
  }
  if (yl.forEach((w, C) => {
    const M = n.stars[C].o;
    if (M < 0.01) return;
    const T = Math.floor(w[0] * P), re = Math.floor(w[1] * P), $ = b ? (Math.floor(z / 300) + C * 3) % 6 : 0;
    if ($ === 5) return;
    const Q = Math.round(w[2] * P * ($ === 4 ? 0.3 : $ < 2 ? 1 : 0.6));
    W(T, re, N.star, M, Ho);
    for (let oe = 1; oe <= Q; oe++) {
      const le = oe === Q && Q > 1 ? Ht(N.star, n.sky, 0.5) : N.star;
      W(T - oe, re, le, M, Ho), W(T + oe, re, le, M, Ho), W(T, re - oe, le, M, Ho), W(T, re + oe, le, M, Ho);
    }
  }), n.moon.o > 0.01) {
    const w = Math.max(1.5, n.moon.d * P * 0.37), C = n.moon.x * P, M = n.moon.y * P + (b && K > 0.4 ? -1 : 0), T = C + 0.547 * w, re = M - 0.503 * w, $ = 0.82 * w, Q = Ht(N.moon, "#ffffff", 0.6);
    fe(C, M, w, (oe, le, Be, et) => {
      if (Be * Be + et * et > w * w) return;
      const Rt = oe + 0.5 - T, xt = le + 0.5 - re;
      Rt * Rt + xt * xt <= $ * $ || W(oe, le, Ln((et + w) / (2 * w) * 1.1 - 0.1) > Tn(oe, le) ? N.moon : Q, n.moon.o, Al);
    });
  }
  const ke = Math.max(2, Math.round(15.65 * P)), Ce = Math.max(1, Math.round(5.87 * P * 0.5));
  kl.forEach((w, C) => {
    const M = n.rain[C];
    let T = M.dy, re = M.o;
    if (re < 0.01) return;
    if (b) {
      const oe = (z / 950 + C / 3) % 1;
      T += -5 + oe * 14, re *= oe < 0.18 ? oe / 0.18 : oe > 0.72 ? (1 - oe) / 0.28 : 1;
    }
    const $ = (w[0] + 3 + V) * P, Q = (w[1] + T) * P;
    for (let oe = 0; oe < ke; oe++) for (let le = 0; le < Ce; le++) W(Math.floor($ - 0.208 * oe) + le, Math.floor(Q) + oe, N.rain, re, Dl);
  });
  const Fe = Math.max(0, Math.round(7.34 * P / 2.6));
  if (Ml.forEach((w, C) => {
    const M = n.snow[C];
    let T = M.dy, re = 0, $ = M.o;
    if ($ < 0.01) return;
    if (b) {
      const le = (z / 3200 + C / 5) % 1;
      T += -6 + le * 14, re = 1.5 * se(ne * (le * 1.5 + C / 5)), $ *= le < 0.2 ? le / 0.2 : le > 0.75 ? (1 - le) / 0.25 : 1;
    }
    const Q = Math.floor((w[0] + 3.67 + re + V) * P), oe = Math.floor((w[1] + 3.67 + T) * P);
    W(Q, oe, N.snow, $, Sn);
    for (let le = 1; le <= Fe; le++)
      W(Q - le, oe, N.snow, $, Sn), W(Q + le, oe, N.snow, $, Sn), W(Q, oe - le, N.snow, $, Sn), W(Q, oe + le, N.snow, $, Sn), Fe > 1 && le < Fe && (W(Q - le, oe - le, N.snow, $, Sn), W(Q + le, oe - le, N.snow, $, Sn), W(Q - le, oe + le, N.snow, $, Sn), W(Q + le, oe + le, N.snow, $, Sn));
  }), n.bolt.o > 0.01)
    if (R >= 30) {
      const w = 39 + V, C = 50 + n.bolt.dy;
      for (let M = Math.floor(C * P); M <= (C + 28) * P; M++) for (let T = Math.floor(w * P); T <= (w + 13) * P; T++)
        ic(mu, (T + 0.5) / P - w, (M + 0.5) / P - C) && W(T, M, N.sun, n.bolt.o, Vi);
    } else {
      const w = R / 18, C = 7, M = 10 + Math.round(n.bolt.dy * 0.2);
      pu.forEach((T, re) => T.split("").forEach(($, Q) => {
        if ($ !== "#") return;
        const oe = Math.floor((C + Q) * w), le = Math.floor((M + re) * w);
        for (let Be = le; Be < Math.max(le + 1, Math.floor((M + re + 1) * w)); Be++) for (let et = oe; et < Math.max(oe + 1, Math.floor((C + Q + 1) * w)); et++) W(et, Be, N.sun, n.bolt.o, Vi);
      }));
    }
  if (n.cloud.o > 0.01) {
    const w = Math.max(3, n.cloud.w * P), C = w * 0.6665, M = (n.cloud.x + V) * P - w / 2, T = (n.cloud.y + q) * P - C / 2, re = Ht(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), $ = Ht(re, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(T) - 1); Q <= Math.min(R - 1, T + C + 1); Q++) for (let oe = Math.max(0, Math.floor(M) - 1); oe <= Math.min(R - 1, M + w + 1); oe++) {
      const le = (oe + 0.5 - M) / w, Be = (Q + 0.5 - T) / w;
      bs(le, Be) && W(oe, Q, !bs(le, Be + 1 / w) || Ln((Be - 0.42) / 0.25) * 0.8 > Tn(oe, Q) ? $ : re, n.cloud.o, El);
    }
  }
  return sc(ae, A, R, R, { oneBit: u, ink: f, paper: x, snowInk: !n.night });
}
function sc(n, s, o, u, { oneBit: h, ink: f, paper: x, snowInk: L }) {
  const b = new Uint8ClampedArray(o * u * 4), N = gs(f), se = gs(x);
  for (let ne = 0; ne < u; ne++) for (let R = 0; R < o; R++) {
    const P = ne * o + R, z = s[P];
    if (n[P] == null) continue;
    let X = gs(n[P]);
    if (h) {
      let V;
      z === Dl || z === Rl ? V = !0 : z === Sn ? V = L : z === Ho || z === Vi ? V = !1 : V = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= Tn(R, ne), (z === _l || z === Al || z === El || z === Vi) && (R > 0 && s[P - 1] !== z || R < o - 1 && s[P + 1] !== z || ne > 0 && s[P - o] !== z || ne < u - 1 && s[P + o] !== z) && (V = !0), X = V ? N : se;
    }
    b[P * 4] = X[0], b[P * 4 + 1] = X[1], b[P * 4 + 2] = X[2], b[P * 4 + 3] = 255;
  }
  return { w: o, h: u, data: b };
}
const hu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fu = (n) => ks(n, !1).split("/")[0], il = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", bu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], yu = [".##", "##.", ".#.", "#.."];
function lc(n, { width: s, height: o, colors: u, wave: h = 0.38, soft: f = 6, glow: x = 0.6 }) {
  const L = { ...fo, dawn: "#e5a77e", ...u }, b = oc(L), N = s, se = o, ne = N / 6, R = ne / 2, P = Math.PI * 2, z = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(12)].map((F, Y) => {
    const ae = z[Math.min(Y, z.length - 1)], A = fu(ae.cond), W = Y % 2 === 1;
    return { cond: ae.cond, k: A, night: W, sky: b[A][W ? 1 : 0], cover: hu[A] };
  }), V = (F) => se * (0.5 - h * Math.cos(P * (F / ne - 0.25)));
  return { C: L, S: X, W: N, H: se, cw: ne, sw: R, TAU: P, yb: V, side: (F, Y, ae) => {
    const A = (F ? V(Y) - ae : ae - V(Y)) / Math.max(3, f * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (F) => {
    const Y = ((F / ne - 0.25) % 1 + 1) % 1, ae = Math.max(0, Math.min(5, Math.round(F / ne - 0.25))), A = Math.max(0, Math.min(5, Math.round(F / ne - 0.75))), W = 1 - (X[2 * ae].cover + X[2 * A + 1].cover) / 2, fe = Math.sin(Math.PI * Math.min(1, Math.max(0, V(F) / se)));
    return { c: Y < 0.5 ? L.dusk : L.dawn, a: x * (0.2 + 0.8 * W) * fe * fe };
  }, soft: f, tw: ne * 0.3, sy: se / 90 };
}
function dc(n, { clock: s = 0, ambient: o = !1, seed: u = 1 }) {
  const { S: h, sw: f, side: x, C: L, TAU: b, sy: N } = n, se = s, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((R, P) => {
    const z = il(u * 977 + P * 131 + 7), X = (P + 0.5) * f, V = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let q = 0; q < V; q++) {
      const K = X + (z() - 0.5) * f * 1.6, F = (6 + z() * 76) * N, Y = z() < 0.35, ae = 1.8 + z() * 1.6, A = x(!0, K, F) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(b * se / 2600 + q * 1.7 + P) : 1);
      A >= 0.03 && ne.stars.push({ x: K, y: F, big: Y, size: ae, o: A });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const q = X + (z() - 0.5) * f * 0.3, K = Math.min(15, f * 0.29);
      ne.suns.push({ x: q, y: 32 * N, rad: K, halo: K * 2.8 * (o ? 1 + 0.07 * Math.sin(b * se / 3600 + P) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const q = Math.min(0.78, f * 0.55 / 34), K = X - 23 * q + (z() - 0.5) * f * 0.2;
      ne.moons.push({ x: K + 23 * q, y: (4 + (o ? 0.8 * Math.sin(b * se / 5200 + P) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), h.forEach((R, P) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!z) return;
    const X = il(u * 577 + P * 71 + 3), V = (P + 0.5) * f, q = R.k === "rain" || R.k === "storm" || R.night ? L.cloudNight : L.cloudDay, K = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let F = 0; F < z; F++) {
      const Y = f / 46 * (R.k === "partly" ? 0.85 : 0.75 + X() * 0.55), ae = V + (R.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (R.k === "partly" ? 40 : 6 + X() * 26) * N, W = o ? 2.5 * Math.sin(b * se / 9e3 + P * 1.3 + F * 2.1) : 0, fe = o ? 0.9 * Math.sin(b * se / 6100 + P + F) : 0;
      ne.clouds.push({ x: ae - 23 * Y + W, y: A - 15.33 * Y + fe, w: 46 * Y, h: 30.66 * Y, fill: q, o: K * (z > 1 && F === 0 ? 0.85 : 1) });
    }
  }), h.forEach((R, P) => {
    const z = il(u * 313 + P * 29 + 11), X = (P + 0.5) * f, V = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let K = 0; K < V; K++) {
      let F = X + (z() - 0.5) * f * 1.05, Y = 44 + z() * 36, ae = 1;
      if (o) {
        const W = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (W - (Y - 44)), Y = 44 + W, ae = Math.min(1, W / 6, (36 - W) / 6);
      }
      Y *= N;
      const A = x(R.night, F, Y) * ae;
      A >= 0.05 && ne.drops.push({ x: F, y: Y, o: A });
    }
    const q = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let K = 0; K < q; K++) {
      let F = X + (z() - 0.5) * f * 1.05, Y = 40 + z() * 44, ae = 1;
      if (o) {
        const W = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + W, F += 1.6 * Math.sin(b * se / 2800 + K * 1.9 + P), ae = Math.min(1, W / 6, (44 - W) / 6);
      }
      Y *= N;
      const A = x(R.night, F, Y) * ae;
      A >= 0.05 && ne.flakes.push({ x: F, y: Y, o: A });
    }
    if (R.k === "fog") {
      const K = R.night ? "#c8ccd6" : "#ffffff", F = R.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(b * se / 8e3 + P) : 0;
      for (let ae = 0; ae < 4; ae++) ne.fogs.push({ x: X - f * 0.75 + ae % 2 * f * 0.18 + (ae % 2 ? Y : -Y), y: (30 + ae * 13) * N, w: f * 1.3, c: K, a: F });
    }
    if (R.k === "storm") {
      const K = (se / 3400 + P * 0.37) % 1;
      ne.bolts.push({ x: X + (z() - 0.5) * f * 0.3 - 5, y: 36 * N, o: o && !(K < 0.05 || K > 0.09 && K < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function ku(n, s, o, u, h, f, x, L) {
  const { S: b, C: N, cw: se, yb: ne, glowAt: R, soft: P, tw: z, sy: X } = n, V = new Array(o * u), q = new Uint8Array(o * u), K = new Uint8Array(o * u), F = (w, C, M, T, re) => {
    M == null || w < 0 || C < 0 || w >= o || C >= u || (T >= 1 || T > Tn(w + 5, C + 3)) && (V[C * o + w] = M, q[C * o + w] = re);
  }, Y = (w, C, M, T) => {
    for (let re = Math.max(0, Math.floor(C - M) - 1); re <= Math.min(u - 1, C + M + 1); re++) for (let $ = Math.max(0, Math.floor(w - M) - 1); $ <= Math.min(o - 1, w + M + 1); $++) T($, re, $ + 0.5 - w, re + 0.5 - C);
  }, ae = (w, C, M) => {
    for (let re = 0; re < w.length - 1; re++) {
      const $ = (re + C) * se;
      if (M < $ - z / 2) return [w[re], w[re], 0];
      if (M <= $ + z / 2) return [w[re], w[re + 1], (M - $ + z / 2) / z];
    }
    const T = w[w.length - 1];
    return [T, T, 0];
  }, A = b.filter((w) => !w.night).map((w) => w.sky), W = b.filter((w) => w.night).map((w) => w.sky), fe = P / f, Se = 16 * X / f;
  for (let w = 0; w < o; w++) {
    const C = (w + 0.5) * h, M = ne(C) / f, T = ae(A, 0.75, C), re = ae(W, 1.25, C), $ = R(C);
    for (let Q = 0; Q < u; Q++) {
      const oe = Tn(w, Q), le = Q + 0.5 - M, Be = (fe > 0.01 ? Ln(0.5 + le / fe) : le > 0 ? 1 : 0) > oe;
      let et = Be ? T[2] > oe ? T[1] : T[0] : re[2] > oe ? re[1] : re[0];
      (Be ? Ln(((Q + 0.5) / u - 0.45) / 0.55) * 0.7 : Ln(1 - (Q + 0.5) / (u * 0.55)) * 0.7) > Tn(w + 2, Q + 5) && (et = Be ? Ht(et, "#ffffff", 0.18) : Ht(et, "#000000", 0.25)), Be && le >= 0 && le < Se && $.a * 1.3 * (1 - le / Se) > Tn(w + 6, Q + 1) && (et = $.c), V[Q * o + w] = et, K[Q * o + w] = Be ? 0 : 1;
    }
  }
  const g = Ht(N.sun, "#ffffff", 0.55), ke = Ht(N.moon, "#ffffff", 0.6);
  s.stars.forEach((w) => {
    const C = Math.floor(w.x / h), M = Math.floor(w.y / f);
    if (C < 0 || M < 0 || C >= o || M >= u || !K[M * o + C] || w.o < 0.15) return;
    const T = w.o > 0.45 ? N.star : Ht(N.star, V[M * o + C], 0.5), re = w.big && w.o > 0.6 ? Math.floor(w.size / h) : 0;
    F(C, M, T, 1, Ho);
    for (let $ = 1; $ <= re; $++) [[C - $, M], [C + $, M], [C, M - $], [C, M + $]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < o && Q[1] < u && K[Q[1] * o + Q[0]] && F(Q[0], Q[1], T, 1, Ho);
    });
  }), s.suns.forEach((w) => {
    const C = Math.max(1.5, w.rad / h), M = w.x / h, T = w.y / f, re = w.halo / h * 0.85;
    if (Y(M, T, re, ($, Q, oe, le) => {
      const Be = Math.sqrt(oe * oe + le * le);
      Be > C && Be < re && !K[Q * o + $] && F($, Q, g, 0.3 * (1 - (Be - C) / (re - C)), 0);
    }), L) {
      const $ = Math.floor(x / 500) % 2, Q = Math.max(1, C * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === $) for (let le = C + 1.2; le < C + 1.2 + Q; le += 0.7) F(Math.floor(M + Math.cos(oe * Math.PI / 4) * le), Math.floor(T + Math.sin(oe * Math.PI / 4) * le), N.sun, 1, Rl);
    }
    Y(M, T, C, ($, Q, oe, le) => {
      oe * oe + le * le <= C * C && F($, Q, Ln(((le / C + 1) / 2 - 0.6) / 0.4) > Tn($, Q) ? N.sunEdge : N.sun, 1, _l);
    });
  }), s.moons.forEach((w) => {
    const C = Math.max(1.5, w.d * 0.37 / h), M = w.x / h, T = w.y / f, re = M + 0.547 * C, $ = T - 0.503 * C, Q = 0.82 * C;
    Y(M, T, C, (oe, le, Be, et) => {
      if (Be * Be + et * et > C * C) return;
      const Rt = oe + 0.5 - re, xt = le + 0.5 - $;
      Rt * Rt + xt * xt > Q * Q && F(oe, le, Ln((et + C) / (2 * C) * 1.1 - 0.1) > Tn(oe, le) ? N.moon : ke, 1, Al);
    });
  }), s.clouds.forEach((w) => {
    const C = Math.max(3, w.w / h), M = C * 0.6665, T = w.x / h, re = w.y / f, $ = Ht(w.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(re) - 1); Q <= Math.min(u - 1, re + M + 1); Q++) for (let oe = Math.max(0, Math.floor(T) - 1); oe <= Math.min(o - 1, T + C + 1); oe++) {
      const le = (oe + 0.5 - T) / C, Be = (Q + 0.5 - re) / C;
      bs(le, Be) && F(oe, Q, !bs(le, Be + 1 / C) || Ln((Be - 0.42) / 0.25) * 0.8 > Tn(oe, Q) ? $ : w.fill, w.o, El);
    }
  }), s.fogs.forEach((w) => {
    const C = Math.floor(w.y / f), M = Math.max(C, Math.floor((w.y + 6 * X) / f) - 1), T = Math.floor(w.x / h), re = Math.floor((w.x + w.w) / h);
    for (let $ = C; $ <= M; $++) for (let Q = T; Q <= re; Q++) {
      const oe = (Q - T) / Math.max(1, re - T);
      F(Q, $, w.c, w.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  s.drops.forEach((w) => {
    const C = w.x / h, M = Math.floor(w.y / f);
    for (let T = 0; T < Ce; T++) F(Math.floor(C - 0.208 * T * f / h), M + T, N.rain, w.o, Dl);
  });
  const Fe = Math.max(0, Math.round(4.4 / h / 2.6));
  return s.flakes.forEach((w) => {
    const C = Math.floor(w.x / h), M = Math.floor(w.y / f);
    F(C, M, N.snow, w.o, Sn);
    for (let T = 1; T <= Fe; T++)
      F(C - T, M, N.snow, w.o, Sn), F(C + T, M, N.snow, w.o, Sn), F(C, M - T, N.snow, w.o, Sn), F(C, M + T, N.snow, w.o, Sn);
  }), s.bolts.forEach((w) => {
    if (h <= 3.5)
      for (let C = Math.floor(w.y / f); C <= (w.y + 24) / f; C++) for (let M = Math.floor(w.x / h); M <= (w.x + 11) / h; M++)
        ic(xu, (M + 0.5) * h - w.x, (C + 0.5) * f - w.y) && F(M, C, N.sun, 1, Vi);
    else {
      const C = Math.round(w.x / h), M = Math.round(w.y / f);
      yu.forEach((T, re) => T.split("").forEach(($, Q) => {
        $ === "#" && F(C + Q, M + re, N.sun, 1, Vi);
      }));
    }
  }), { col: V, ids: q };
}
function Mu(n, s) {
  const o = s.px, u = Math.max(6, Math.round(s.width / o)), h = Math.max(6, Math.round(s.height / o)), f = s.width / u, x = s.height / h, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, b = (P) => {
    const z = lc(P, s);
    return ku(z, dc(z, { clock: L, ambient: s.ambient, seed: s.seed }), u, h, f, x, L, s.ambient);
  }, N = b(n), se = s.reveal == null ? 1 : Ln(s.reveal);
  let ne = N.col, R = N.ids;
  if (se < 1) {
    const P = s.prev ? b(s.prev) : null, z = se * (u + 12);
    ne = new Array(u * h), R = new Uint8Array(u * h);
    for (let X = 0; X < u * h; X++) {
      const V = X % u, q = X / u | 0;
      (s.reduce ? se : Ln((z - V) / 12)) > Tn(V, q) ? (ne[X] = N.col[X], R[X] = N.ids[X]) : P ? (ne[X] = P.col[X], R[X] = P.ids[X]) : (ne[X] = null, R[X] = 255);
    }
  }
  return sc(ne, R, u, h, { oneBit: s.oneBit, ink: s.ink, paper: s.paper, snowInk: !1 });
}
function Cu(n, s, o) {
  const u = o.width, h = o.height, f = o.reveal == null ? 1 : Ln(o.reveal), x = (R, P) => {
    const z = lc(P, o);
    Su(R, z, dc(z, o));
  };
  if (n.clearRect(0, 0, u, h), f >= 1) {
    x(n, s);
    return;
  }
  if (o.prev && x(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = f, x(n, s), n.restore();
    return;
  }
  const L = n.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const N = b.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, h), x(N, s);
  const se = f * (u + 64) - 64, ne = N.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = ne, N.fillRect(0, 0, u, h), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(b, 0, 0), n.restore();
}
function Su(n, s, o) {
  const { W: u, H: h, S: f, C: x, cw: L, yb: b, glowAt: N, soft: se, tw: ne, sy: R } = s, P = (g, ke) => {
    const Ce = gs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, z = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Fe = 0; Fe < g.length - 1; Fe++) {
      const w = (Fe + ke) * L, C = (w - ne / 2) / u, M = (w + ne / 2) / u;
      C > 0 && C < 1 && Ce.addColorStop(C, g[Fe]), M > 0 && M < 1 && Ce.addColorStop(M, g[Fe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), V = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Fe = u * Ce / X, w = g == null ? 0 : b(Fe) + g;
      Ce ? n.lineTo(Fe, w) : n.moveTo(Fe, w);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Fe = u * Ce / X;
      n.lineTo(Fe, b(Fe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = z(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, h);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = N(u * g / 64);
    q.addColorStop(g / 64, P(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, V(g * 2 * R, (g + 1) * 2 * R);
  n.fillStyle = z(f.filter((g) => g.night).map((g) => g.sky), 1.25);
  const K = Math.max(0.5, se), F = 6;
  n.globalAlpha = 1, V(null, -K);
  for (let g = 0; g < F; g++)
    n.globalAlpha = 1 - (g + 0.5) / F, V(-K + 2 * K * g / F, -K + 2 * K * (g + 1) / F);
  n.globalAlpha = 1;
  const Y = new Path2D(bu), ae = new Path2D(vu), A = new Path2D(gu), W = new Path2D(wu);
  n.fillStyle = x.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Y), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const fe = Ht(x.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, P(fe, 0.42)), ke.addColorStop(0.7, P(fe, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, x.sun), Ce.addColorStop(1, x.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Ht(x.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, x.moon), n.fillStyle = ke, n.fill(ae), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), o.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, P(g.c, 0)), ke.addColorStop(0.25, P(g.c, g.a)), ke.addColorStop(0.75, P(g.c, g.a)), ke.addColorStop(1, P(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * R);
  }), n.fillStyle = x.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = x.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = x.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
function Tu(n, s) {
  var pd, md, hd, fd, gd, vd, bd;
  const o = (e) => n.getElementById(e), u = o("workoutView"), h = o("workoutNameInput");
  let f = !0;
  const x = o("homeClock");
  function L() {
    x && (x.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const b = o("createFlow"), N = o("createMovementsSlot"), se = o("createTimingSlot"), ne = o("createFinishSlot"), R = o("movementStepSummary"), P = o("timingStepSummary"), z = o("finishStepSummary"), X = o("continueToTiming"), V = o("continueToFinish"), q = o("finishMoveButton");
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
    var J, te;
    if (!ht) return;
    tt[dt];
    const e = nn.filter((Z) => !Z.hidden), a = e.filter((Z) => Z.kind !== "rest").length, r = e.filter((Z) => Z.kind === "rest").length;
    R.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const c = a > 0, p = n.querySelector('[data-open-step="timing"]'), k = n.querySelector('[data-open-step="finish"]');
    p.disabled = !c, X.disabled = !c, P.textContent = c ? bn(C.value) + " · " + Tt(M.value) + " movement · " + Tt(T.value) + " rest" : "Add a movement first", k.disabled = !(c && K);
    const _ = ((h == null ? void 0 : h.value) || "").trim(), I = [];
    (J = o("includeWarmupPreset")) != null && J.checked && I.push("warm-up"), (te = o("includeCooldownPreset")) != null && te.checked && I.push("cooldown"), z.textContent = _ ? _ + (I.length ? " · " + I.join(" + ") : "") : I.length ? I.join(" + ") : "Name and optional extras";
  }
  function Se() {
    var Me, Ve, Te;
    b.hidden = !1, K = !1;
    const e = n.querySelector(".editNameRow"), a = o("createMoveOptions"), r = n.querySelector(".timeTiles"), c = o("routineSummaryModal"), p = n.querySelector(".tempoRevealRow"), k = o("tempoExperiment"), _ = (Me = o("warmupList")) == null ? void 0 : Me.closest("section"), I = o("movementCreatorLaunch"), J = o("movementCreator"), te = (Ve = o("strengthList")) == null ? void 0 : Ve.closest("section"), Z = (Te = o("cooldownList")) == null ? void 0 : Te.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), _, I, J, te, Z].forEach((ye) => ye && ae(ye, N)), [a, r, c, p, k].forEach((ye) => ae(ye, se)), ae(e, ne), W("movements"), fe();
  }
  function g() {
    A(), b.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || W(e.dataset.openStep);
  })), X.addEventListener("click", () => {
    X.disabled || W("timing");
  }), V.addEventListener("click", () => W("finish")), q.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ke = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), Fe = o("settingsNav");
  function w(e) {
    Object.entries(ke).forEach(([a, r]) => r.classList.toggle("active", a === e)), Ce.classList.toggle("active", e === "home"), Fe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(xo, 400), e === "settings" && (requestAnimationFrame(() => fr(n.querySelector(".tab.active"), !1)), Kr());
  }
  const C = o("totalTime"), M = o("workTime"), T = o("restTime"), re = o("totalOut"), $ = o("workOut"), Q = o("restOut"), oe = o("totalFill"), le = o("workFill"), Be = o("restFill"), et = o("roundsInput"), Rt = o("roundsFill"), xt = o("roundsOut"), va = o("totalLabel"), Ca = o("routineSummaryModal"), Le = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let it = Le.map((e) => ({ ...e })), nn = [
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
  const mn = {
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
  }, ct = Fo(s.data), tt = ct.profiles;
  let dt = tt[ct.selected] ? ct.selected : ct.order.find((e) => tt[e]) || "kettlebell";
  function Fo(e) {
    const a = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(mn)), c = (Array.isArray(a.order) ? a.order : Object.keys(r)).filter((p) => r[p]);
    return Object.keys(r).forEach((p) => {
      c.includes(p) || c.push(p);
    }), {
      v: 1,
      profiles: r,
      order: c,
      selected: a.selected || c[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : Va(a.energy)).map(cn),
      settings: { ...a.settings || {} }
    };
  }
  function Va(e) {
    if (!Array.isArray(e)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((c) => {
      const p = new Date(c.at);
      if (isNaN(p)) return;
      const k = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0"), _ = p.getHours() < 14 ? "morning" : "evening";
      if (r.some((J) => J.date === k && J.slot === _)) return;
      const I = a.indexOf(c.value) + 1;
      I > 0 && r.push({ date: k, slot: _, mood: null, energy: I, at: c.at });
    }), r;
  }
  function cn(e) {
    if (e.scale === 100) return e;
    const a = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: a(e.mood), energy: a(e.energy), scale: 100 };
  }
  function vn() {
    ht || (ct.selected = dt, ct.order = ct.order.filter((e) => tt[e] && e !== _n), s.save(ct));
  }
  function ut() {
    return ct.settings;
  }
  function rt(e) {
    const a = tt[e];
    if (!a) return;
    dt = e;
    const r = o("workoutNameInput");
    if (r && (r.value = a.name), C.value = a.total, M.value = a.work, T.value = a.rest, et.value = a.rounds || 1, a.customSequence) {
      const c = (a.sequence || []).map((k) => ({ ...k })), p = (k) => c.filter((_) => _.presetRole === k).map(({ presetRole: _, ...I }) => I);
      it = (a.warmup || p("warmup")).map((k) => ({ ...k })), Vt = (a.cooldown || p("cooldown")).map((k) => ({ ...k })), nn = c.filter((k) => !k.presetRole), Ga(a.preset || "movement", !1);
    } else
      C.min = 3, C.max = 40, C.step = 1, M.min = 20, M.max = 60, M.step = 5, T.min = 5, T.max = 30, T.step = 5, it = (a.warmup || Le).map((c) => ({ ...c })), Vt = (a.cooldown || qa).map((c) => ({ ...c })), nn = a.strength.map((c) => Array.isArray(c) ? (([p, k, _, I = !1]) => ({ id: p, name: k, group: _, kind: "work", hidden: !!I }))(c) : { ...c });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), O();
  }
  function Pe(e, a, r) {
    const c = e.getBoundingClientRect(), p = c.width / 2, k = c.height / 2, _ = a - p, I = r - k;
    let J = 1 / 0, te = 1 / 0;
    _ !== 0 && (J = p / Math.abs(_)), I !== 0 && (te = k / Math.abs(I));
    const Z = Math.min(Math.max(1 / Math.min(J, te), 0), 1);
    let U = Math.atan2(I, _) * (180 / Math.PI) + 90;
    return U < 0 && (U += 360), { edge: Z, angle: U };
  }
  function Ft(e, a, r = !1) {
    const c = e.getBoundingClientRect(), p = a.clientX - c.left, k = a.clientY - c.top, { edge: _, angle: I } = Pe(e, p, k), J = r ? 100 : _ * 100;
    e.style.setProperty("--edge-proximity", J.toFixed(3)), e.style.setProperty("--cursor-angle", I.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || J >= 30);
  }
  function Mt(e) {
    e.addEventListener("pointermove", (r) => Ft(e, r, !1)), e.addEventListener("pointerenter", (r) => Ft(e, r, !1)), e.addEventListener("pointerdown", (r) => Ft(e, r, !0));
    const a = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", a), e.addEventListener("pointerup", a), e.addEventListener("pointercancel", a);
  }
  Mt(o("addWorkoutPanel"));
  let ht = !1, _n = null;
  function Ge(e) {
    return String(e ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function zi(e) {
    return e.summary ? e.summary : e.customSequence ? bn(e.total) + " · custom move" : bn(e.total) + " · " + Tt(e.work) + " / " + Tt(e.rest) + " · warm-up + cooldown";
  }
  function Oo(e, a) {
    var k;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const c = a.activityCount ?? (((k = a.sequence) == null ? void 0 : k.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ge(a.name) + '</div><div class="sub">' + Ge(zi(a)) + '</div><span class="sourceTag">' + Ge(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ge(a.name) + "</div></div>";
    const p = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(r, p), Mt(r), r.addEventListener("click", (_) => {
      _.target.closest("button") || rt(e);
    }), r.addEventListener("keydown", (_) => {
      (_.key === "Enter" || _.key === " ") && !_.target.closest("button") && (_.preventDefault(), rt(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), rt(e), Mo(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (_) => {
      _.stopPropagation(), rt(e), Hs();
    }), r;
  }
  function An() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), ct.order.forEach((e) => {
      tt[e] && Oo(e, tt[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === dt));
  }
  An(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ht = !0, _n = "custom-" + Date.now(), tt[_n] = {
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
    }, rt(_n), Mo(!0);
  });
  let Ee = [], ze = 0, Gt = 0, En = 1, hn = !1, Ct = null, $n = null, qt = !1, Pt = ct.settings.upcomingCount ?? "all", za = "movement";
  function un(e, a, r) {
    return (Number(e) - a) / (r - a) * 100;
  }
  function Tt(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function bn(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function vt() {
    oe.style.width = un(C.value, Number(C.min), Number(C.max)) + "%", le.style.width = un(M.value, Number(M.min), Number(M.max)) + "%", Be.style.width = un(T.value, Number(T.min), Number(T.max)) + "%", $.textContent = Tt(M.value), Q.textContent = Tt(T.value);
    const e = Number(et.value) || 1;
    Rt.style.width = un(e, 1, 10) + "%", va.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Dn(e) {
    return e.filter((a) => !a.hidden);
  }
  function zt(e) {
    const a = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    return (r ? r + ":" + String(c).padStart(2, "0") : c) + ":" + String(p).padStart(2, "0");
  }
  function Wo(e) {
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
    }, k = p(a.searchParams.get("t") || a.searchParams.get("start")), _ = p(a.searchParams.get("end"));
    return { id: c, start: k, end: _ > k ? _ : null };
  }
  function ja(e, a) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || a || 300);
    const r = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > r ? Math.round(c - r) : Number(e.duration) || 300;
  }
  function Xn(e, a) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(a === "hour" ? r * 3600 : a === "min" ? r * 60 : r);
  }
  function Ga(e, a = !0) {
    za = e, n.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const r = tt[dt];
    r && (r.preset = e), e === "work" ? (C.min = 30, C.max = 480, C.step = 30, M.min = 300, M.max = 7200, M.step = 300, T.min = 60, T.max = 1800, T.step = 60, a && (C.value = 60, M.value = 1500, T.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (C.min = 3, C.max = 40, C.step = 1, M.min = 20, M.max = 60, M.step = 5, T.min = 5, T.max = 30, T.step = 5, a && (C.value = 20, M.value = 45, T.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), vt();
  }
  function S(e, a) {
    const r = za === "work";
    return e.map((c, p) => ({ ...c, id: a + "-" + p + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(M.value) }));
  }
  function D() {
    const e = tt[dt];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !it.length && (it = S(Le, "warm")), e.includeCooldown && !Vt.length && (Vt = S(qa, "cool")), O());
  }
  function H() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const a = Math.max(1, Ee.length - 1), r = Pt;
    e.innerHTML = "";
    for (let k = 1; k <= a; k++) {
      const _ = document.createElement("option");
      _.value = String(k), _.textContent = String(k), e.appendChild(_);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const p = r === "all" ? "all" : String(Math.min(Number(r) || 1, a));
    e.value = p, Pt = p === "all" ? "all" : Number(p);
  }
  function O() {
    Number(C.value) * 60;
    const e = Number(M.value), a = Number(T.value), r = tt[dt], c = !!(r != null && r.customSequence), p = (c ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Dn(it), k = Dn(nn), _ = c && !r.includeCooldown ? [] : Dn(Vt);
    if (r && (r.total = Number(C.value), r.work = e, r.rest = a, r.rounds = Number(et.value) || 1, r.customSequence ? (r.sequence = nn.map((we) => ({ ...we })), r.warmup = it.map((we) => ({ ...we })), r.cooldown = Vt.map((we) => ({ ...we }))) : (r.strength = nn.map((we) => ({ ...we })), r.warmup = it.map((we) => ({ ...we })), r.cooldown = Vt.map((we) => ({ ...we })))), r != null && r.customSequence) {
      const we = [...p.map(($e) => ({ ...$e, section: "warmup" })), ...k, ..._.map(($e) => ({ ...$e, section: "cooldown" }))].map(($e) => {
        if ($e.kind === "video") return { ...$e, duration: ja($e, e), rest: 0 };
        if ($e.kind === "rest") {
          const Qt = $e.useGlobalTiming === !0 ? a : Number($e.duration) || a;
          return { ...$e, duration: Qt, rest: 0 };
        }
        const Jt = $e.useGlobalTiming === !1 && Number($e.duration) || e;
        return { ...$e, duration: Jt, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Ee = [], we.forEach(($e, Jt) => {
        Ee.push($e);
        const Qt = we[Jt + 1];
        $e.kind !== "rest" && Qt && Qt.kind !== "rest" && Ee.push({
          id: "auto-rest-" + Jt,
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
      Ee = [...p.map((we) => ({ ...we, section: "warmup" })), ...k, ..._.map((we) => ({ ...we, section: "cooldown" }))].map((we) => we.kind === "video" ? { ...we, duration: ja(we, e), rest: 0 } : we.kind === "rest" ? { ...we, duration: we.useGlobalTiming === !0 ? a : Number(we.duration) || a, rest: 0 } : { ...we, duration: we.useGlobalTiming === !1 && Number(we.duration) || e, rest: a }), Ee.forEach((we, $e) => {
        var Jt;
        ((Jt = Ee[$e + 1]) == null ? void 0 : Jt.kind) === "rest" && (we.rest = 0);
      }), Ee.length && (Ee[Ee.length - 1].rest = 0);
    const I = Math.max(1, Math.min(10, Number(et.value) || 1)), J = Ee, te = (we) => I <= 1 ? null : we.section === "warmup" || we.presetRole === "warmup" ? "first" : we.section === "cooldown" || we.presetRole === "cooldown" ? "last" : we.kind === "video" && (we.videoRounds === "first" || we.videoRounds === "last") ? we.videoRounds : null, Z = (we) => !!te(we), U = J.filter((we) => !Z(we)), Me = J.filter(Z), Ve = U.length, Te = U.reduce((we, $e) => we + $e.duration + $e.rest, 0), ye = Me.reduce((we, $e) => we + $e.duration + $e.rest, 0), ge = [
      Me.some((we) => we.section === "warmup" || we.presetRole === "warmup") && "warm-up",
      Me.some((we) => we.section === "cooldown" || we.presetRole === "cooldown") && "cooldown",
      Me.some((we) => we.kind === "video" && !we.section && !we.presetRole) && "video"
    ].filter(Boolean), ot = ge.length > 1 ? ge.slice(0, -1).join(", ") + " & " + ge[ge.length - 1] : ge[0] || "";
    Ee = [];
    const st = (we, $e) => {
      const Jt = te(we);
      return !Jt || (Jt === "first" ? $e === 1 : $e === I);
    };
    for (let we = 1; we <= I; we++)
      if (J.filter(($e) => st($e, we)).forEach(($e, Jt) => Ee.push({ ...$e, id: $e.id + (I > 1 ? "-r" + we : ""), round: we, roundIndex: Jt })), we < I && Ve)
        if (r != null && r.customSequence)
          Ee.push({ id: "round-break-" + we, name: "Rest", group: "Round " + (we + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: we, roundIndex: Ve, roundBreak: !0 });
        else {
          const $e = Ee[Ee.length - 1];
          $e.rest = a, $e.roundBreakAfter = !0;
        }
    vt();
    const Ae = Ee.reduce((we, $e) => we + $e.duration + $e.rest, 0), lt = Math.round(Te / 60), yt = Math.round(Ae / 60), Ke = I > 1 ? bn(lt) + " × " + I + " rounds" + (ye ? " + " + Tt(ye) + " " + ot : "") + " (" + bn(yt) + ")" : bn(yt), Ue = [p.length ? "warm-up" : "", _.length ? "cooldown" : ""].filter(Boolean), $t = r != null && r.customSequence ? Ke + " · " + Ve + " items" + (Ue.length && !(I > 1 && ye) ? " · " + Ue.join(" + ") : "") : Ke + " · " + Tt(e) + " / " + Tt(a) + (Ue.length && !(I > 1 && ye) ? " · " + Ue.join(" + ") : "");
    re.textContent = Tt(Te);
    const ln = Ee.filter((we) => !we.roundBreak).length, Dt = I > 1 ? ln + " activities · " + I + " rounds" : Ve + " activities";
    xt.textContent = I > 1 ? I + " rounds · " + bn(yt) + " total" : "1 round", o("roundsCount").textContent = I, n.querySelectorAll("[data-rounds-step]").forEach((we) => {
      we.disabled = Number(we.dataset.roundsStep) < 0 ? I <= 1 : I >= 10;
    }), r && (r.summary = $t, r.activityCount = Ve);
    const Ro = n.querySelector(".workoutPanel.active .sub");
    Ro && (Ro.textContent = $t), Ca.textContent = $t, ri(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((we) => we.textContent = Dt), vt(), pt(), Yi(), Ta(), H(), ht && fe(), ke.workout.classList.contains("active") && !Ct && Si();
  }
  const ce = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', ve = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', me = {
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
  let de = null, De = null;
  function je(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ye(e = !1) {
    const a = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), e && a.select());
  }
  function We(e, a, r = {}) {
    const c = e.kind === "rest", p = e.kind === "video", k = p ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, _ = Number(c ? T.value : M.value), I = je(p ? e.useVideoLength === !1 ? e.duration : ja({ ...e, useVideoLength: !0 }) : k ? _ : e.duration || _), J = p && (Number(e.videoDuration) > 0 || Number(e.end) > 0), te = p ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ge(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ae, lt]) => '<option value="' + Ae + '"' + ((e.videoRounds || "every") === Ae ? " selected" : "") + ">" + lt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ge(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', Z = p ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (J ? " · " + zt(ja({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Tt(_), U = document.createElement("div");
    U.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), U.dataset.index = a, U.dataset.id = e.id;
    const Me = r.isNew ?? (De == null ? void 0 : De.item) === e, Ve = r.sheet ? '<div class="moveEditActions sheetActions">' + (Me ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ge(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Me ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    U.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (p ? " videoFields" : "") + '">' + te + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (k ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ge(Z) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + I.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ae) => '<option value="' + Ae + '"' + (Ae === I.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ae] + "</option>").join("") + "</select></div></div>" + Ve + "</div>";
    const Te = (Ae) => U.querySelector("[data-f=" + Ae + "]"), ye = () => {
      const Ae = Te("global").checked;
      Te("dur").disabled = Ae, Te("unit").disabled = Ae, U.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ae);
    };
    Te("global").addEventListener("change", ye), ye();
    const ge = () => {
      var Ae;
      if (r.sheet) {
        (Ae = r.onCancel) == null || Ae.call(r);
        return;
      }
      Me && _t(), de = null, O();
    }, ot = () => {
      var yt;
      if (p) {
        st();
        return;
      }
      const Ae = Te("name").value.trim();
      if (!Ae) {
        Te("name").focus();
        return;
      }
      e.name = Ae, e.group = Te("group").value.trim() || (c ? "Rest" : "Movement");
      const lt = Te("global").checked;
      if (e.useGlobalTiming = lt, lt || (e.duration = Math.max(c ? 5 : 1, Xn(Te("dur").value, Te("unit").value))), r.sheet) {
        (yt = r.onSaved) == null || yt.call(r);
        return;
      }
      Me && (De = null), de = null, O(), Et(Me ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, st = () => {
      var Ue;
      const Ae = Te("url").value.trim(), lt = Wo(Ae);
      if (!lt) {
        Te("urlError").hidden = !1, Te("url").classList.add("invalid"), Te("url").focus();
        return;
      }
      const yt = lt.id !== e.videoId;
      e.url = Ae, e.videoId = lt.id, e.start = lt.start, e.end = lt.end, yt && (e.videoDuration = null, e.videoError = null);
      const Ke = Te("name").value.trim();
      e.autoName = !Ke, e.name = Ke || (yt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Te("rounds").value, e.useVideoLength = Te("global").checked, e.useVideoLength || (e.duration = Math.max(5, Xn(Te("dur").value, Te("unit").value))), r.sheet ? (Ue = r.onSaved) == null || Ue.call(r) : (Me && (De = null), de = null, O(), Et(Me ? "Video added" : "Video updated")), (yt || !e.videoDuration || e.autoName && !e.videoTitle) && Ti(e);
    };
    if (p && Te("url").addEventListener("input", () => {
      Te("urlError").hidden = !0, Te("url").classList.remove("invalid");
    }), U.querySelector("[data-a=cancel]").addEventListener("click", ge), U.querySelector("[data-a=save]").addEventListener("click", ot), r.sheet && !Me) {
      U.querySelector("[data-a=hide]").addEventListener("click", () => {
        var lt;
        return (lt = r.onHide) == null ? void 0 : lt.call(r);
      });
      const Ae = U.querySelector("[data-a=remove]");
      hr(Ae, Ae.querySelector(".removeFill"), 1200, () => {
        var lt;
        return (lt = r.onRemove) == null ? void 0 : lt.call(r);
      });
    }
    return U.addEventListener("keydown", (Ae) => {
      Ae.key === "Escape" && (Ae.preventDefault(), Ae.stopPropagation(), ge()), Ae.key === "Enter" && Ae.target.matches("input") && (Ae.preventDefault(), ot());
    }), U;
  }
  function Re(e, a) {
    const r = o(a);
    r.innerHTML = "", e.forEach((c, p) => {
      if (c === de && !ba()) {
        r.appendChild(We(c, p));
        return;
      }
      const k = document.createElement("div");
      k.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (qs(c) ? " noMeta" : ""), k.dataset.index = p, k.dataset.id = c.id;
      const _ = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : Tt(c.duration) : c.useGlobalTiming === !1 ? Tt(c.duration) : "Global timing", I = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", J = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + Tt(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? zt(ja(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + _, te = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ge(c.name) + '. Drag, or use the up and down arrow keys">' + ce + "</button>", Z = '<div class="moveText"><div class="moveItemName">' + Ge(c.name) + I + '</div><div class="moveMeta">' + Ge(J) + "</div></div>", U = (Te) => Te.addEventListener("keydown", (ye) => {
        var st, Ae;
        if (ye.key !== "ArrowUp" && ye.key !== "ArrowDown") return;
        ye.preventDefault();
        const ge = e.indexOf(c), ot = ge + (ye.key === "ArrowUp" ? -1 : 1);
        ot < 0 || ot >= e.length || (e.splice(ge, 1), e.splice(ot, 0, c), O(), (Ae = (st = o(a).children[ot]) == null ? void 0 : st.querySelector(".dragHandle")) == null || Ae.focus());
      });
      if (ba()) {
        k.classList.add("phoneRow"), k.tabIndex = 0, k.setAttribute("role", "button"), k.setAttribute("aria-label", "Edit " + (c.name || "step")), k.innerHTML = te + Z + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Te = k.querySelector(".dragHandle");
        Te.addEventListener("pointerdown", (ye) => Je(ye, k, r, e)), U(Te), k.addEventListener("click", (ye) => {
          ye.target.closest(".dragHandle") || ji(c, e);
        }), k.addEventListener("keydown", (ye) => {
          ye.key === "Enter" && ye.target === k && (ye.preventDefault(), ji(c, e));
        }), r.appendChild(k);
        return;
      }
      k.innerHTML = te + Z + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ge(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ge(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + ve + "</span></button></div>", k.querySelector(".editBtn").addEventListener("click", () => {
        _t(), de = c, O(), Ye();
      }), k.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, O();
      });
      const Me = k.querySelector(".removeBtn");
      hr(Me, Me.querySelector(".removeFill"), 1200, () => {
        const Te = e.indexOf(c);
        Te < 0 || (e.splice(Te, 1), O(), Et("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Te, e.length), 0, c), O();
        } }));
      });
      const Ve = k.querySelector(".dragHandle");
      Ve.addEventListener("pointerdown", (Te) => Je(Te, k, r, e)), U(Ve), r.appendChild(k);
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
  function Je(e, a, r, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const p = e.currentTarget, k = e.pointerId, _ = !Ie();
    try {
      p.setPointerCapture(k);
    } catch {
    }
    const I = a.closest(".exerciseScroller") || Fn(a), J = r.style.position;
    r.style.position = "relative";
    const te = [...r.children].filter((Xe) => Xe.classList.contains("moveRow")), Z = te.indexOf(a), U = parseFloat(getComputedStyle(r).rowGap) || 8, Me = a.offsetHeight, Ve = Me + U, Te = te.map((Xe) => Xe.offsetTop), ye = te.map((Xe) => Xe.offsetHeight), ge = () => r.getBoundingClientRect().top, ot = r.getBoundingClientRect().width, st = e.clientY - (ge() + Te[Z]), Ae = e.clientX;
    let lt = e.clientY, yt = e.clientX, Ke = ge() + Te[Z], Ue = 0, $t = 0, ln = 0, Dt = 1, Ro = 0, we = Z, $e = !1, Jt = 0, Qt = !1, is = !1, Bi = Te[Z];
    r.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", Ne(8);
    const rs = () => {
      const Xe = lt - st + Me / 2 - ge();
      let gt = 0;
      return te.forEach((At, Mn) => {
        Mn !== Z && Xe > Te[Mn] + ye[Mn] / 2 && gt++;
      }), gt;
    }, ss = () => {
      te.forEach((Xe, gt) => {
        if (gt === Z) return;
        const At = Z < we && gt > Z && gt <= we ? -Ve : Z > we && gt >= we && gt < Z ? Ve : 0;
        Xe.style.transform = At ? "translateY(" + At + "px)" : "";
      });
    }, xr = () => {
      const Xe = r.getBoundingClientRect(), gt = Math.abs(yt - Ae) > Math.max(80, ot * 0.3) || yt < Xe.left - 24 || yt > Xe.right + 24;
      gt !== $e && ($e = gt, a.classList.toggle("willReturn", gt), Ne(gt ? 10 : 4));
      const At = $e ? Z : rs();
      At !== we && (we = At, ss(), $e || Ne(4));
    }, No = () => {
      if (we === Z) return Te[Z];
      const Xe = te.filter((At, Mn) => Mn !== Z);
      let gt = Te[0];
      for (let At = 0; At < we; At++) gt += Xe[At].offsetHeight + U;
      return gt;
    }, Pi = () => {
      const Xe = _ ? Math.min(Math.abs(Ue) / 40, 1) : 0, gt = _ && !Qt ? Math.max(-3, Math.min(3, ln * 0.6)) : 0;
      a.style.transform = "translate(" + $t.toFixed(2) + "px," + (Ke - (ge() + Te[Z])).toFixed(2) + "px) rotate(" + gt.toFixed(2) + "deg) scale(" + (Dt * (1 - 0.04 * Xe)).toFixed(4) + "," + (Dt * (1 + 0.06 * Xe)).toFixed(4) + ")";
    }, Ze = () => {
      Jt = requestAnimationFrame(Ze);
      const Xe = yt - Ae, gt = Qt ? ge() + Bi : lt - st, At = Qt ? 0 : $e ? Xe * 0.9 : Math.max(-22, Math.min(22, Xe * 0.22)), Mn = Qt ? 1 : $e ? 0.97 : 1.035;
      if (!_) {
        Ke = gt, $t = Qt ? 0 : At, Dt = 1, Pi(), Qt && Bt();
        return;
      }
      const tu = Qt ? 0.24 : 0.2, nu = Qt ? 0.62 : 0.68;
      Ue = (Ue + (gt - Ke) * tu) * nu, Ke += Ue, ln = (ln + (At - $t) * 0.16) * 0.7, $t += ln, Ro = (Ro + (Mn - Dt) * 0.22) * 0.6, Dt += Ro, Pi(), Qt && Math.abs(Ue) < 0.15 && Math.abs(gt - Ke) < 0.5 && Math.abs($t) < 0.5 && Math.abs(Dt - 1) < 3e-3 && Bt();
    }, St = setInterval(() => {
      if (!I || Qt) return;
      const Xe = I.getBoundingClientRect(), gt = 56, At = lt < Xe.top + gt ? -10 : lt > Xe.bottom - gt ? 10 : 0;
      At && (I.scrollTop += At, xr());
    }, 30);
    function Bt() {
      if (is) return;
      is = !0, cancelAnimationFrame(Jt);
      const Xe = we !== Z, gt = a.dataset.id;
      if (r.classList.remove("reordering"), te.forEach((Mn) => {
        Mn.style.transition = "none", Mn.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), r.style.position = J, Xe) {
        const [Mn] = c.splice(Z, 1);
        c.splice(we, 0, Mn);
      }
      O();
      const At = gt && r.querySelector('.moveRow[data-id="' + gt + '"]');
      At && _ && At.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), Xe && Et("Order saved");
    }
    const en = (Xe) => {
      if (Xe.pointerId === k) {
        if (Xe.pointerType === "mouse" && Xe.buttons === 0) {
          Kn();
          return;
        }
        lt = Xe.clientY, yt = Xe.clientX, xr();
      }
    }, kn = (Xe) => {
      Xe.pointerId === k && Kn();
    };
    function Kn() {
      Qt || (window.removeEventListener("pointermove", en, !0), window.removeEventListener("pointerup", kn, !0), window.removeEventListener("pointercancel", kn, !0), p.removeEventListener("lostpointercapture", Kn), clearInterval(St), $e && we !== Z && (we = Z, ss()), Bi = No(), Qt = !0, Ne(6), setTimeout(Bt, 800));
    }
    window.addEventListener("pointermove", en, !0), window.addEventListener("pointerup", kn, !0), window.addEventListener("pointercancel", kn, !0), p.addEventListener("lostpointercapture", Kn), Jt = requestAnimationFrame(Ze), Pi();
  }
  function pt() {
    var p, k, _, I;
    const e = tt[dt], a = (p = o("warmupList")) == null ? void 0 : p.closest("section"), r = (k = o("cooldownList")) == null ? void 0 : k.closest("section"), c = (I = (_ = o("strengthList")) == null ? void 0 : _.closest("section")) == null ? void 0 : I.querySelector(".sectionTitle");
    e != null && e.customSequence ? (a && (a.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (a && (a.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), c && (c.textContent = "Kettlebell work")), Re(it, "warmupList"), Re(nn, "strengthList"), Re(Vt, "cooldownList");
  }
  function _t() {
    if (!De) return;
    const { item: e, arr: a } = De;
    De = null;
    const r = a.indexOf(e);
    r >= 0 && a.splice(r, 1), de === e && (de = null);
  }
  function bt(e) {
    return e.id === "warmupList" ? { arr: it, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Vt, kind: "cooldown", group: "Cooldown" } : { arr: nn, kind: "work", group: "" };
  }
  function Ut(e, a) {
    const r = bt(a), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(T.value) } : { id: "movement-" + c, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(M.value) };
  }
  const an = "cubic-bezier(.34,1.46,.64,1)";
  function Yt(e, a) {
    if (Ie() || !e) {
      a();
      return;
    }
    const r = (k) => {
      var _;
      return ((_ = k.dataset) == null ? void 0 : _.id) || k;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], p = new Map(c().map((k) => [r(k), k.getBoundingClientRect().top]));
    a(), c().forEach((k) => {
      const _ = p.get(r(k));
      if (_ === void 0) return;
      const I = _ - k.getBoundingClientRect().top;
      Math.abs(I) < 0.5 || k.animate([{ transform: "translateY(" + I + "px)" }, { transform: "none" }], { duration: 440, easing: an });
    });
  }
  function Jn(e, a) {
    if (!e || Ie()) return;
    const r = e.offsetHeight, c = Math.max(0, r - (a || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: an });
  }
  function Sa(e, a, r, c) {
    const { arr: p } = bt(a), k = Ut(e, a);
    p.splice(Math.max(0, Math.min(r, p.length)), 0, k), De = { item: k, arr: p }, de = k, Yt(a.closest(".exerciseScroller,.createStepSlot") || a, () => O());
    const _ = a.querySelector(".moveRow.editing");
    return Jn(_, c), Ye(e === "rest"), _;
  }
  function Fn(e) {
    for (let a = e; a && a.nodeType === 1; a = a.parentElement) {
      const r = getComputedStyle(a).overflowY;
      if (/(auto|scroll)/.test(r) && a.scrollHeight > a.clientHeight) return a;
    }
    return null;
  }
  const wn = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Ua(e, a) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + ce + '</span><span class="addGhostText"><strong>' + Ge(a[0]) + "</strong><small>" + Ge(a[1]) + "</small></span>", o("workoutModal").appendChild(r), r;
  }
  function Qn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ft(e, a, r, c) {
    (de || De) && (_t(), de = null, O());
    const p = e.getBoundingClientRect(), k = Ua(a, wn[a]);
    k.setAttribute("aria-hidden", "true"), k.style.width = p.width + "px", k.style.height = p.height + "px", k.style.transform = "translate(" + p.left + "px," + p.top + "px)", e.classList.add("lifting");
    const _ = Fn(e);
    return ea({
      ghost: k,
      origin: p,
      sx: r,
      sy: c,
      scroller: _,
      column: e.closest(".exerciseScroller,.createFlow") || _,
      home: () => e.getBoundingClientRect(),
      onDrop: (I, J, te) => {
        Qn(k), e.classList.remove("lifting"), Sa(a, I, J, te);
      },
      onReturn: () => {
        Qn(k), e.classList.remove("lifting");
      }
    });
  }
  function ea({ ghost: e, origin: a, sx: r, sy: c, scroller: p, column: k, home: _, onDrop: I, onReturn: J, rowLook: te = !1 }) {
    var Pi;
    const Z = !Ie(), U = ((Pi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Pi.offsetHeight) || 80, Me = r - a.left, Ve = c - a.top, Te = 44;
    let ye = r, ge = c, ot = a.left, st = a.top, Ae = 0, lt = 0, yt = !Z, Ke = null, Ue = null, $t = -1, ln = 0, Dt = null;
    const Ro = () => ["warmupList", "strengthList", "cooldownList"].map((Ze) => o(Ze)).filter((Ze) => Ze && Ze.getClientRects().length && !Ze.closest("[hidden]")), we = (Ze) => {
      if (Ze === Ke) return;
      Ke = Ze, e.classList.toggle("overList", !!Ze || te);
      const St = Ze ? Ze.getBoundingClientRect().width : a.width;
      e.style.width = St + "px", e.style.height = (Ze ? U : a.height) + "px";
    }, $e = (Ze) => {
      Ze.classList.add("leaving"), Ze.style.height = "0px", Ze.style.marginTop = "-8px", setTimeout(() => Ze.remove(), Z ? 320 : 0);
    }, Jt = (Ze, St, Bt) => {
      if (Ue && Ue.parentNode === Ze && $t === Bt || (Ue && ($e(Ue), Ue = null, $t = -1), !Ze)) return;
      const en = document.createElement("div");
      en.className = "dropSlot", Ze.insertBefore(en, St), Ue = en, $t = Bt, en.getBoundingClientRect(), en.style.height = U + "px", en.style.marginTop = "0px";
    }, Qt = () => {
      let Ze = null, St = 1 / 0;
      for (const Kn of Ro()) {
        const Xe = Kn.getBoundingClientRect();
        if (ye < Xe.left - 48 || ye > Xe.right + 48) continue;
        const gt = Xe.top - 28, At = Xe.bottom + 28, Mn = ge < gt ? gt - ge : ge > At ? ge - At : 0;
        Mn < St && (St = Mn, Ze = Kn);
      }
      const Bt = k == null ? void 0 : k.getBoundingClientRect(), kn = Bt && ye >= Bt.left && ye <= Bt.right && ge >= Bt.top && ge <= Bt.bottom || St === 0 ? Ze : null;
      if (kn) {
        const Kn = [...kn.children].filter((gt) => gt.classList.contains("moveRow"));
        let Xe = Kn.findIndex((gt) => {
          const At = gt.getBoundingClientRect();
          return ge < At.top + At.height / 2;
        });
        Xe < 0 && (Xe = Kn.length), Jt(kn, Kn[Xe] || null, Xe);
      } else Jt(null);
      we(kn);
    }, is = () => {
      if (Dt) return Dt.aim();
      if (Ke) {
        const Ze = Ke.getBoundingClientRect();
        let St = ge - U / 2;
        return Ue && (St = St * 0.6 + Ue.getBoundingClientRect().top * 0.4), { x: Ze.left, y: St };
      }
      return { x: ye - Me, y: ge - Ve };
    }, Bi = (Ze, St, Bt, en) => {
      e.style.transform = "translate(" + ot + "px," + st + "px) rotate(" + Ze + "deg) rotate(" + St + "rad) scale(" + Bt + "," + en + ") rotate(" + -St + "rad)";
    }, rs = () => {
      if (ln = requestAnimationFrame(rs), !yt) {
        const Xe = ye - r, gt = ge - c, At = Math.min(Math.hypot(Xe, gt) / Te, 1);
        ot = a.left + Xe * 0.35, st = a.top + gt * 0.35, Bi(0, Math.atan2(gt, Xe), 1 + 0.155 * At, 1 - 0.1 * At);
        return;
      }
      const Ze = is();
      if (!Z) {
        ot = Ze.x, st = Ze.y, Bi(0, 0, 1, 1), Dt && (cancelAnimationFrame(ln), Dt.done());
        return;
      }
      const St = Dt ? Dt.k : 0.17, Bt = Dt ? Dt.d : 0.7;
      Ae = (Ae + (Ze.x - ot) * St) * Bt, lt = (lt + (Ze.y - st) * St) * Bt, ot += Ae, st += lt;
      const en = Math.hypot(Ae, lt), kn = Math.min(en / 48, 1), Kn = Ke || Dt ? 0 : Math.max(-5, Math.min(5, Ae * 0.32));
      Bi(Kn, Math.atan2(lt, Ae), 1 + 0.1 * kn, 1 - 0.063 * kn), Dt && en < 0.15 && Math.hypot(Ze.x - ot, Ze.y - st) < 0.6 && (cancelAnimationFrame(ln), Dt.done());
    }, ss = setInterval(() => {
      if (!p || Dt) return;
      const Ze = p.getBoundingClientRect(), St = 64, Bt = ge < Ze.top + St ? -(Ze.top + St - ge) / 4 : ge > Ze.bottom - St ? (ge - (Ze.bottom - St)) / 4 : 0;
      Bt && (p.scrollTop += Math.max(-18, Math.min(18, Bt)), Qt());
    }, 30);
    ln = requestAnimationFrame(rs);
    let xr = !1;
    const No = (Ze, St) => {
      if (xr) return;
      xr = !0, cancelAnimationFrame(ln);
      const Bt = Ue ? Ue.offsetHeight : U;
      !Ze && Ue && (Ue.remove(), Ue = null), Ze ? I(Ze, St, Bt) : J();
    };
    return {
      move(Ze, St) {
        ye = Ze, ge = St, !yt && Math.hypot(ye - r, ge - c) > Te && (yt = !0, Ae = (ye - r) * 0.085, lt = (ge - c) * 0.085), yt && Qt();
      },
      drop(Ze) {
        clearInterval(ss);
        const St = Ke, Bt = $t;
        if (!Ze && St && Ue) {
          const en = Ue;
          Dt = { k: 0.24, d: 0.62, aim: () => {
            const kn = en.getBoundingClientRect();
            return { x: kn.left, y: kn.top };
          }, done: () => No(St, Bt) }, setTimeout(() => No(St, Bt), 650), Z || (cancelAnimationFrame(ln), No(St, Bt));
          return;
        }
        Jt(null), we(null), Dt = { k: 0.2, d: 0.66, aim: () => {
          const en = _();
          return { x: en.left, y: en.top };
        }, done: () => No(null) }, setTimeout(() => No(null), 650), Z || (cancelAnimationFrame(ln), No(null));
      }
    };
  }
  function On(e, a) {
    let r = !1;
    e.addEventListener("click", (c) => {
      if (r) {
        r = !1, c.preventDefault();
        return;
      }
      if (ba()) {
        Ar(a);
        return;
      }
      const p = o("strengthList"), k = Sa(a, p, bt(p).arr.length, 0);
      k == null || k.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const p = c.pointerId, k = c.clientX, _ = c.clientY;
      let I = null, J = !1;
      try {
        e.setPointerCapture(p);
      } catch {
      }
      const te = (ge) => {
        if (ge.pointerId === p) {
          if (ge.pointerType === "mouse" && ge.buttons === 0) {
            ye(!1);
            return;
          }
          if (!I) {
            if (Math.hypot(ge.clientX - k, ge.clientY - _) < 6) return;
            I = ft(e, a, k, _);
          }
          I.move(ge.clientX, ge.clientY);
        }
      }, Z = (ge) => {
        ge.pointerId === p && ye(!1);
      }, U = (ge) => {
        ge.pointerId === p && ye(!0);
      }, Me = () => ye(!1), Ve = () => ye(!0), Te = (ge) => {
        ge.key === "Escape" && I && (ge.preventDefault(), ge.stopPropagation(), ye(!0));
      };
      function ye(ge) {
        if (!J && (J = !0, window.removeEventListener("pointermove", te, !0), window.removeEventListener("pointerup", Z, !0), window.removeEventListener("pointercancel", U, !0), window.removeEventListener("keydown", Te, !0), window.removeEventListener("blur", Ve), e.removeEventListener("lostpointercapture", Me), I)) {
          const ot = I;
          I = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), ot.drop(ge);
        }
      }
      window.addEventListener("pointermove", te, !0), window.addEventListener("pointerup", Z, !0), window.addEventListener("pointercancel", U, !0), window.addEventListener("keydown", Te, !0), window.addEventListener("blur", Ve), e.addEventListener("lostpointercapture", Me);
    });
  }
  const ta = (pd = window.matchMedia) == null ? void 0 : pd.call(window, "(max-width: 620px)");
  function ba() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const qo = (e) => e.charAt(0).toUpperCase() + e.slice(1), Rn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let rn = null, Lt = null;
  function Ya(e, a, r, c) {
    Xt(), o("sheetTitle").textContent = e;
    const p = o("sheetBody");
    p.innerHTML = "", p.appendChild(a), rn = r || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !p.contains(a)) return;
      const k = c ? p.querySelector("input[data-f=url],input[data-f=name]") : p.querySelector("button,input,select");
      k == null || k.focus({ preventScroll: !0 });
    }, Ie() ? 0 : 360);
  }
  function Xt() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const a = rn;
    rn = null, a == null || a(), setTimeout(Wn, 0);
  }
  o("sheetScrim").addEventListener("click", Xt), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Xt());
  });
  function ji(e, a) {
    const r = We(e, a.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Xt(), O(), Et(qo(Rn(e)) + " updated");
      },
      onCancel: Xt,
      onHide() {
        e.hidden = !e.hidden, Xt(), O(), Et((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Xt();
        const c = a.indexOf(e);
        c < 0 || (a.splice(c, 1), O(), Et("Removed " + e.name, { label: "Undo", run: () => {
          a.splice(Math.min(c, a.length), 0, e), O();
        } }));
      }
    });
    Ya("Edit " + Rn(e), r, null, !1);
  }
  function _r() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, r, c, p]) => {
      const k = document.createElement("button");
      k.type = "button", k.className = "sheetChoice", k.innerHTML = '<span class="timeIcon" aria-hidden="true">' + xe(r) + "</span><span><strong>" + c + "</strong><small>" + p + "</small></span>", k.addEventListener("click", () => Ar(a)), e.appendChild(k);
    }), Ya("Add to the move", e, null, !1);
  }
  function Ar(e) {
    Lt && Vo();
    const a = Ut(e, o("strengthList")), r = We(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Xt(), Ss(a, e);
      },
      onCancel: Xt
    });
    Ya("New " + Rn(a), r, null, !0);
  }
  const ii = o("workoutModal").querySelector(".modalStatic"), Er = { parent: ii.parentNode, next: ii.nextSibling };
  function Cs() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(ii);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", Xt), e.appendChild(a), Ya("Setup", e, () => {
      Er.parent.insertBefore(ii, Er.next), ri();
    }, !1);
  }
  function ri() {
    var a, r;
    const e = o("setupSummaryName");
    e && (e.textContent = (((a = o("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((r = tt[dt]) == null ? void 0 : r.name) || "Move", o("setupSummaryMeta").textContent = Ca.textContent);
  }
  o("setupSummary").addEventListener("click", Cs), o("addFab").addEventListener("click", _r);
  function Gi() {
    const e = o("strengthList");
    return Fn(e) || e.closest(".exerciseScroller");
  }
  function Ui() {
    const e = o("strengthList").getBoundingClientRect(), a = (Gi() || o("strengthList")).getBoundingClientRect(), r = (Lt == null ? void 0 : Lt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(a.top + 12, Math.min(a.bottom - r - 96, a.top + a.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function Ss(e, a) {
    var I;
    const r = Ua(a, [e.name || wn[a][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ge(e.name) + '">✕</button>', r.appendChild(c), Lt = { item: e, type: a, ghost: r };
    const p = ((I = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : I.offsetHeight) || 64;
    r.style.width = o("strengthList").getBoundingClientRect().width + "px", r.style.height = p + "px";
    const k = Ui(), _ = Zt.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + k.left + "px," + _ + "px)", r.getBoundingClientRect(), Ie() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + k.left + "px," + k.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", Vo), c.querySelector("[data-a=discard]").addEventListener("click", Ls), r.addEventListener("pointerdown", Ts);
  }
  function Ts(e) {
    if (!Lt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: a, ghost: r } = Lt, c = e.pointerId;
    try {
      r.setPointerCapture(c);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const p = r.getBoundingClientRect(), k = Gi(), _ = ea({
      ghost: r,
      origin: { left: p.left, top: p.top, width: p.width, height: p.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: k,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || k,
      rowLook: !0,
      home: Ui,
      onDrop: (ye, ge, ot) => {
        Lt = null, Qn(r), Za(a, ye, ge, ot);
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
      I || (I = !0, window.removeEventListener("pointermove", J, !0), window.removeEventListener("pointerup", te, !0), window.removeEventListener("pointercancel", Z, !0), window.removeEventListener("keydown", Ve, !0), window.removeEventListener("blur", Me), r.removeEventListener("lostpointercapture", U), _.drop(ye));
    }
    window.addEventListener("pointermove", J, !0), window.addEventListener("pointerup", te, !0), window.addEventListener("pointercancel", Z, !0), window.addEventListener("keydown", Ve, !0), window.addEventListener("blur", Me), r.addEventListener("lostpointercapture", U);
  }
  function Za(e, a, r, c) {
    const p = bt(a);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = p.kind, p.group && (!e.group || e.group === "Movement") && (e.group = p.group)), p.arr.splice(Math.max(0, Math.min(r, p.arr.length)), 0, e), Yt(a.closest(".exerciseScroller,.createStepSlot") || a, () => O()), Jn(a.querySelector('.moveRow[data-id="' + e.id + '"]'), c), Et(qo(Rn(e)) + " added");
  }
  function Vo() {
    var c;
    if (!Lt) return;
    const { item: e, ghost: a } = Lt;
    Lt = null, Qn(a);
    const r = o("strengthList");
    Za(e, r, bt(r).arr.length, 0), (c = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
  }
  function Ls() {
    if (!Lt) return;
    const e = Lt.ghost;
    Lt = null, Qn(e), Et("Discarded");
  }
  function zo() {
    Lt && (Lt.ghost.remove(), Lt = null);
  }
  window.addEventListener("resize", () => {
    if (Lt != null && Lt.ghost.classList.contains("hovering")) {
      const e = Ui();
      Lt.ghost.style.width = e.width + "px", Lt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (md = ta == null ? void 0 : ta.addEventListener) == null || md.call(ta, "change", () => {
    Xt(), Lt && !ba() && Vo(), pt();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Wn() {
    const e = o("workoutModal"), a = window.visualViewport;
    if (!e.classList.contains("open") || !ba()) {
      Dr();
      return;
    }
    const r = a ? a.offsetTop : 0, c = a ? a.offsetLeft : 0, p = a ? a.width : window.innerWidth, k = a ? a.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: p + "px", height: k + "px", top: r + "px", left: c + "px" });
    const _ = e.getBoundingClientRect();
    Math.abs(_.top - r) > 0.5 && (e.style.top = 2 * r - _.top + "px"), Math.abs(_.left - c) > 0.5 && (e.style.left = 2 * c - _.left + "px");
  }
  function Dr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (hd = window.visualViewport) == null || hd.addEventListener("resize", Wn), (fd = window.visualViewport) == null || fd.addEventListener("scroll", Wn), window.addEventListener("resize", Wn), window.addEventListener("scroll", Wn, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Wn, 250));
  function Yi() {
    nn.length > 0;
    const e = o("addMovementBtn"), a = o("addRestBtn");
    e && (e.innerHTML = ce + "<span>Add movement</span>"), a && (a.innerHTML = ce + "<span>Add rest</span>");
    const r = o("addVideoBtn");
    r && (r.innerHTML = ce + "<span>Add video</span>");
  }
  function Ta() {
    const e = o("useGlobalTiming").checked, a = o("addMovementDuration"), r = o("addMovementUnit");
    a.disabled = e, r.disabled = e, a.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Tt(M.value);
    const c = o("useGlobalRestTiming").checked, p = o("addRestDuration"), k = o("addRestUnit");
    p.disabled = c, k.disabled = c, p.parentElement.style.opacity = c ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Tt(T.value);
  }
  let Zi = "movement";
  function _s(e) {
    Zi = e;
    const a = o("movementFields"), r = o("restFields");
    a.hidden = e !== "movement", r.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Ta();
  }
  function Ki() {
    tt[dt];
    const e = ht ? !0 : o("useGlobalTiming").checked, a = e ? Number(M.value) : Xn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), r = ht ? !0 : o("useGlobalRestTiming").checked, c = r ? Number(T.value) : Xn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Zi === "rest") {
      const p = o("addRestTitle").value.trim() || "Rest", k = o("addRestGroup").value.trim() || "Rest";
      nn.push({
        id: "rest-" + Date.now(),
        name: p,
        group: k,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, c || Number(T.value))
      }), O(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Et("Rest added"), ht && (W("movements"), fe());
    } else {
      const p = o("addMovementInput").value.trim();
      if (!p) return;
      const k = o("addMovementGroup").value.trim() || "Movement";
      nn.push({
        id: "movement-" + Date.now(),
        name: p,
        group: k,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, a || Number(M.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", O(), o("movementCreator").hidden = !0, Et("Movement added"), ht && (W("movements"), fe());
    }
    Yi();
  }
  let si = null;
  function Et(e, a) {
    const r = o("toast");
    r.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, r.appendChild(c), a) {
      const p = document.createElement("button");
      p.type = "button", p.className = "toastAction", p.textContent = a.label, p.addEventListener("click", () => {
        a.run(), r.classList.remove("show", "withAction"), clearTimeout(si);
      }), r.appendChild(p);
    }
    r.classList.toggle("withAction", !!a), r.classList.add("show"), clearTimeout(si), si = setTimeout(() => r.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Rr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], As = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function $i(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function go(e, a) {
    return Rr[$i(a)];
  }
  function Nr(e) {
    return As[$i(e)];
  }
  function Nt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function qn() {
    return { morning: ut().morningTime || "08:00", evening: ut().eveningTime || "19:00" };
  }
  function La(e) {
    const [a, r] = String(e).split(":").map(Number);
    return (a || 0) * 60 + (r || 0);
  }
  function Xi(e) {
    const a = qn();
    return e.getHours() * 60 + e.getMinutes() >= La(a.evening) ? "evening" : "morning";
  }
  function jo(e, a) {
    return ct.checkins.find((r) => r.date === e && r.slot === a);
  }
  function li(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function di() {
    const e = /* @__PURE__ */ new Date(), a = Nt(e), r = Xi(e), c = qn(), p = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && p < La(c.morning) || li(jo(a, r)) ? null : r;
  }
  const _a = o("checkinModal"), Aa = o("checkinTab"), Es = o("checkinBadge"), Nn = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Ji(e) {
    const { input: a, fill: r } = Nn[e];
    r.style.width = a.value + "%", a.setAttribute("aria-valuetext", go(e, a.value));
  }
  Object.keys(Nn).forEach((e) => Nn[e].input.addEventListener("input", () => Ji(e)));
  let na = null;
  function Br() {
    const e = qn(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes();
    return r < La(e.morning) ? "Next check-in at " + e.morning : r < La(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function vo() {
    const e = qn(), a = /* @__PURE__ */ new Date(), r = a.getHours() * 60 + a.getMinutes(), c = (p, k) => {
      const [_, I] = p.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (k ? 1 : 0), _, I);
    };
    return r < La(e.morning) ? { date: c(e.morning), time: e.morning } : r < La(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let ci = null, ui = null;
  function Pr() {
    if (di()) {
      Go(), Ka();
      return;
    }
    const e = vo(), a = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), p = a % 60;
    o("peekCountdown").textContent = r + ":" + String(c).padStart(2, "0") + ":" + String(p).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function pi() {
    Pr(), Aa.classList.add("peek"), clearInterval(ui), ui = setInterval(Pr, 1e3), clearTimeout(ci), ci = setTimeout(Go, 6e3);
  }
  function Go() {
    Aa.classList.remove("peek"), clearInterval(ui), clearTimeout(ci);
  }
  function mi() {
    const e = di();
    if (!e) {
      Aa.classList.contains("peek") ? Go() : pi();
      return;
    }
    na = { date: Nt(/* @__PURE__ */ new Date()), slot: e };
    const r = jo(na.date, e), c = ct.checkins.find((p) => li(p));
    Object.keys(Nn).forEach((p) => {
      Nn[p].input.value = (r == null ? void 0 : r[p]) ?? (c == null ? void 0 : c[p]) ?? 50, Ji(p);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", _a.classList.add("open"), _a.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Nn.mood.input.focus());
  }
  function bo() {
    _a.classList.remove("open"), _a.setAttribute("aria-hidden", "true"), na && (wo = na.date + "-" + na.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", wo);
    } catch {
    }
    na = null, Ka();
  }
  function Ds() {
    if (!na) return;
    if (li(jo(na.date, na.slot))) {
      bo();
      return;
    }
    const { date: e, slot: a } = na;
    let r = jo(e, a);
    r || (r = { date: e, slot: a }, ct.checkins.unshift(r), ct.checkins = ct.checkins.slice(0, 2e3)), r.mood = Number(Nn.mood.input.value), r.energy = Number(Nn.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), vn(), s.fire("checkin", { slot: a, mood: r.mood, energy: r.energy, mood_label: go("mood", r.mood), energy_label: go("energy", r.energy) }), Et((a === "morning" ? "Morning" : "Evening") + " check-in saved"), bo(), Ot(), Uo(), ei(), co();
  }
  let wo = "";
  try {
    wo = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ka() {
    const e = di();
    Es.hidden = !e, Aa.hidden = !e, e || Go(), Aa.classList.toggle("due", !!e), Aa.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Br()), Aa.title = e ? "Check in now" : Br();
  }
  function xo() {
    Ka();
    const e = di();
    !e || _a.classList.contains("open") || ut().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !ke.home.classList.contains("active") || Zt.classList.contains("open") || wo !== Nt(/* @__PURE__ */ new Date()) + "-" + e && mi());
  }
  Aa.addEventListener("click", mi), o("checkinLater").addEventListener("click", bo), o("checkinSave").addEventListener("click", Ds), _a.addEventListener("click", (e) => {
    e.target === _a && bo();
  }), _a.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), bo());
  }), setInterval(xo, 3e4);
  function Ot() {
    const e = Nt(/* @__PURE__ */ new Date()), a = (r) => ct.checkins.find((c) => c.date === e && c[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, c]) => {
      const p = a(r);
      o(c).textContent = p ? go(r, p[r]) : "—";
    });
  }
  function Uo() {
    const e = o("feelCard");
    if (!e) return;
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), c = [...Array(7)].map((te, Z) => {
      const U = new Date(r.getFullYear(), r.getMonth(), r.getDate() + Z), Me = Nt(U), Ve = ct.checkins.filter((ye) => ye.date === Me), Te = (ye) => {
        const ge = Ve.map((ot) => ot[ye]).filter((ot) => ot != null);
        return ge.length ? ge.reduce((ot, st) => ot + st, 0) / ge.length : null;
      };
      return { d: U, key: Me, mood: Te("mood"), energy: Te("energy"), count: Ve.filter(li).length, future: U > a && Me !== Nt(a) };
    }), p = (te) => {
      const Z = c.map((U) => U[te]).filter((U) => U != null);
      return Z.length ? Z.reduce((U, Me) => U + Me, 0) / Z.length : null;
    }, k = p("mood"), _ = p("energy"), I = (te, Z) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + te + "</span><span>" + (Z == null ? "—" : Ge(go("", Z))) + '</span></div><div class="feelTrack"><span style="width:' + (Z == null ? 0 : Math.max(4, Z)) + "%;background:" + (Z == null ? "transparent" : Nr(Z)) + '"></span></div></div>', J = c.filter((te) => te.mood != null && te.energy != null).sort((te, Z) => Z.mood + Z.energy - (te.mood + te.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (k == null ? "No check-ins yet" : Ge(go("", (k + _) / 2))) + '</div><div class="weekCopy">' + (k == null ? "Your first check-in will appear here." : "on average this week" + (J ? " · best day " + Ge(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(J.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (te) => '<div class="weekChip feelDay' + (te.future ? " future" : "") + (te.key === Nt(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ge(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(te.d)) + "</strong>" + (te.count >= 2 ? '<span class="weekTick">' + xe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(te.count) + "</span>") + "</div>" + I("Mood", te.mood) + I("Energy", te.energy) + "</div>"
    ).join("") + "</div>";
  }
  const $a = o("upcomingCountSetting");
  $a.addEventListener("change", () => {
    Pt = $a.value === "all" ? "all" : Number($a.value), zr();
  });
  const aa = o("tempoRevealBtn"), Xa = o("tempoExperiment"), oa = o("tempoQuad"), yo = o("tempoDot"), Rs = o("tempoEstimate"), Ns = o("tempoReadout");
  let ko = { x: 0.5, y: 0.5 }, Yo = !1, Ea = { total: 20, work: 45, rest: 15 };
  function Zo(e, a, r, c) {
    const p = Math.max(a, Math.min(r, e));
    return Math.round((p - a) / c) * c + a;
  }
  function Bs(e, a) {
    const r = (e - 0.5) * 2, c = (a - 0.5) * 2, p = Zo(
      Ea.total + r * 5 + c * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), k = Zo(
      Ea.work + r * 10 + c * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), _ = Zo(
      Ea.rest + r * 6 + c * 6,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    );
    return C.value = p, M.value = k, T.value = _, $.textContent = k + " sec", Q.textContent = _ + " sec", vt(), { total: p, work: k, rest: _ };
  }
  function Qi(e, a) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", p = Bs(e, a);
    Ns.textContent = r + " + " + c, Rs.textContent = p.total + " min", oa.setAttribute("aria-valuetext", r + " and " + c + ", estimated " + p.total + " minutes");
  }
  function fn(e) {
    const a = oa.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)), c = Math.max(0, Math.min(1, (e.clientY - a.top) / a.height));
    ko = { x: r, y: c }, yo.style.left = r * 100 + "%", yo.style.top = c * 100 + "%", Qi(r, c);
  }
  aa.addEventListener("click", () => {
    const e = Xa.hidden;
    Xa.hidden = !e, aa.setAttribute("aria-expanded", e ? "true" : "false"), aa.textContent = e ? "Now close this" : "Don’t try this!", e && (Ea = {
      total: Number(C.value),
      work: Number(M.value),
      rest: Number(T.value)
    }, ko = { x: 0.5, y: 0.5 }, yo.style.left = "50%", yo.style.top = "50%", Qi(ko.x, ko.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === e));
  }));
  const jt = o("testingFeedbackForm"), Vn = o("testingFeedbackThanks"), er = o("testingFeedbackAgain");
  jt.addEventListener("submit", (e) => {
    e.preventDefault(), jt.hidden = !0, Vn.hidden = !1, Et("Feedback captured for prototype");
  }), er.addEventListener("click", (e) => {
    e.preventDefault(), jt.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), Vn.hidden = !0, jt.hidden = !1;
  }), oa.addEventListener("pointerdown", (e) => {
    var a;
    Yo = !0, fn(e);
    try {
      (a = oa.setPointerCapture) == null || a.call(oa, e.pointerId);
    } catch {
    }
  }), oa.addEventListener("pointermove", (e) => {
    Yo && fn(e);
  }), oa.addEventListener("pointerup", (e) => {
    Yo && (Yo = !1, fn(e), O());
  }), oa.addEventListener("pointercancel", () => Yo = !1), oa.addEventListener("keydown", (e) => {
    let { x: a, y: r } = ko, c = !0;
    e.key === "ArrowLeft" ? a -= 0.05 : e.key === "ArrowRight" ? a += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : c = !1, c && (e.preventDefault(), a = Math.max(0, Math.min(1, a)), r = Math.max(0, Math.min(1, r)), ko = { x: a, y: r }, yo.style.left = a * 100 + "%", yo.style.top = r * 100 + "%", Qi(a, r), O());
  });
  const Zt = o("workoutModal");
  let Ja = null;
  function zn(e) {
    return e.map((a) => ({ ...a }));
  }
  function hi() {
    const e = tt[dt];
    return {
      key: dt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: zn(it),
      strength: zn(nn),
      cooldown: zn(Vt),
      total: Number(C.value),
      work: Number(M.value),
      rest: Number(T.value),
      rounds: Number(et.value) || 1
    };
  }
  function Mo(e = !1) {
    ht = !!e, de = null, De = null, Xt(), zo(), Ja = hi(), o("moveEditorTitle").textContent = ht ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ht, o("warmupRow").hidden = ht, o("deleteMoveOpen").hidden = ht;
    const a = o("createMoveOptions");
    a.hidden = !ht;
    {
      const r = tt[dt];
      o("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), o("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (tr(), ht) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const r = tt[dt];
      Ga((r == null ? void 0 : r.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, _s("movement"), Yi(), Ta(), Xa.hidden = !0, aa.setAttribute("aria-expanded", "false"), aa.textContent = "Don’t try this!", Zt.classList.toggle("createMode", ht), Zt.querySelector(".modal").classList.toggle("createMode", ht), Zt.classList.add("open"), Zt.setAttribute("aria-hidden", "false"), Wn(), ht && Se();
  }
  function jn() {
    const e = tt[dt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function tr() {
    const e = jn(), a = o("warmupSwitch");
    a.classList.toggle("on", e), a.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = tt[dt];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, D()) : (e.warmupOff = !e.warmupOff, O()), tr());
  });
  function Qa() {
    Xt(), zo(), Dr(), De = null, de = null, Zt.classList.contains("createMode") && g(), Zt.classList.remove("createMode"), Zt.querySelector(".modal").classList.remove("createMode"), Zt.classList.remove("open"), Zt.setAttribute("aria-hidden", "true");
  }
  function nr() {
    if (!Ja) return;
    const e = Ja;
    e.profile && (tt[e.key] = JSON.parse(JSON.stringify(e.profile))), dt = e.key, it = zn(e.warmup), nn = zn(e.strength), Vt = zn(e.cooldown), C.value = e.total, M.value = e.work, T.value = e.rest, et.value = e.rounds || 1;
    const a = tt[dt];
    if (a) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === dt));
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
    O();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (ht) {
      const e = dt;
      delete tt[e], ht = !1, _n = null, rt(ct.order.find((a) => tt[a]) || Object.keys(tt)[0]);
    } else
      nr();
    Qa();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Xt(), Lt && Vo();
    const e = tt[dt], a = h.value.trim() || "New move";
    if (e && (e.name = a), _t(), de = null, O(), ht && e)
      Oo(dt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === dt)), ht = !1, _n = null, ct.order.includes(dt) || ct.order.push(dt), Et("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = a);
        const p = r.querySelector(".panelCollapsedText");
        p && (p.textContent = a);
      }
      Et("Move saved");
    }
    Ja = null, Qa(), vn();
  }), Zt.addEventListener("click", (e) => {
    if (e.target === Zt) {
      if (ht) {
        const a = dt;
        delete tt[a], ht = !1, _n = null, rt(ct.order.find((r) => tt[r]) || Object.keys(tt)[0]);
      } else
        nr();
      Qa();
    }
  }), On(o("addMovementBtn"), "movement"), On(o("addRestBtn"), "rest"), On(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Ta), o("useGlobalRestTiming").addEventListener("change", Ta), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Ga(e.dataset.movePreset, !0), O();
  })), o("includeWarmupPreset").addEventListener("change", D), o("includeCooldownPreset").addEventListener("change", D), o("includeWarmupPreset").addEventListener("change", fe), o("includeCooldownPreset").addEventListener("change", fe), h.addEventListener("input", fe), h.addEventListener("input", ri), o("confirmAddMovement").addEventListener("click", Ki), o("confirmAddRest").addEventListener("click", Ki), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Ki();
  });
  const Co = o("countdown"), fi = o("countNum"), wa = o("countdownPixelCanvas");
  let eo = null, Bn = "appear";
  class gi {
    constructor(a, r, c, p, k, _, I) {
      this.width = a.width, this.height = a.height, this.ctx = r, this.x = c, this.y = p, this.color = k, this.speed = (Math.random() * 0.8 + 0.1) * _, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = I, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let vi = [], ar = 1, or = 1;
  function to() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Da() {
    var te;
    if (!wa) return;
    const e = to(), a = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    ar = a, or = r;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    wa.width = Math.floor(a * c), wa.height = Math.floor(r * c), wa.style.width = a + "px", wa.style.height = r + "px";
    const p = wa.getContext("2d");
    p.setTransform(c, 0, 0, c, 0, 0);
    const k = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], _ = 12, I = (te = window.matchMedia) == null ? void 0 : te.call(window, "(prefers-reduced-motion: reduce)").matches, J = I ? 0 : 0.055;
    vi = [];
    for (let Z = 0; Z < a; Z += _)
      for (let U = 0; U < r; U += _) {
        const Me = Z - a / 2, Ve = U - r / 2, Te = Math.sqrt(Me * Me + Ve * Ve), ye = I ? 0 : Math.random() * 75 + Te * 0.05, ge = new gi({ width: a, height: r }, p, Z, U, k[Math.floor(Math.random() * k.length)], J, ye);
        ge.maxSizeInteger = 4, ge.maxSize = Math.random() * 3.2 + 0.8, ge.sizeStep = 0.35 + Math.random() * 0.45, vi.push(ge);
      }
  }
  function bi(e) {
    cancelAnimationFrame(eo), Bn = e;
    const a = wa == null ? void 0 : wa.getContext("2d");
    if (!a) return;
    function r() {
      a.clearRect(0, 0, ar, or);
      let c = !0;
      vi.forEach((p) => {
        p[Bn](), p.isIdle || (c = !1);
      }), Bn === "disappear" && c || (eo = requestAnimationFrame(r));
    }
    eo = requestAnimationFrame(r);
  }
  function wi() {
    cancelAnimationFrame(eo), Da(), bi("appear"), setTimeout(() => bi("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Co.classList.contains("active") && wi();
  });
  const Ko = o("pixelTrailCanvas"), So = Ko.getContext("2d");
  let ia = !0, no = 0.7, To = 600, Lo = [], Ra = null, ra = { x: 0, y: 0, ready: !1 };
  function Ir() {
    const e = u.getBoundingClientRect(), a = to(), r = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / a), p = Math.max(1, e.height / a);
    Ko.width = Math.max(1, Math.floor(c * r)), Ko.height = Math.max(1, Math.floor(p * r)), Ko.style.width = c + "px", Ko.style.height = p + "px", So.setTransform(r, 0, 0, r, 0, 0);
  }
  function Hr(e, a) {
    if (!ia) return;
    const r = performance.now();
    ra.ready || (ra = { x: e, y: a, ready: !0 });
    const c = 7;
    for (let p = 1; p <= c; p++) {
      const k = p / c;
      Lo.push({
        x: ra.x + (e - ra.x) * k,
        y: ra.y + (a - ra.y) * k,
        born: r - (c - p) * 10
      });
    }
    ra = { x: e, y: a, ready: !0 };
  }
  function ao(e) {
    if (Ra = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      Ra = requestAnimationFrame(ao);
      return;
    }
    const a = u.getBoundingClientRect(), r = to();
    So.clearRect(0, 0, a.width / r, a.height / r), ia && (Lo = Lo.filter((p) => e - p.born < To), So.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Lo.forEach((p) => {
      const k = (e - p.born) / To, _ = (1 - k) * no, I = Math.round(p.x / 14) * 14, J = Math.round(p.y / 14) * 14;
      So.globalAlpha = Math.max(0, _);
      const te = 2 + 5 * (1 - k) * no;
      So.fillRect(I - te / 2, J - te / 2, te, te);
    }), So.globalAlpha = 1), Ra = requestAnimationFrame(ao);
  }
  u.addEventListener("pointermove", (e) => {
    const a = u.getBoundingClientRect(), r = to();
    Hr((e.clientX - a.left) / r, (e.clientY - a.top) / r);
  }), u.addEventListener("pointerleave", () => ra.ready = !1), new ResizeObserver(Ir).observe(u), Ir(), Ra = requestAnimationFrame(ao);
  const xa = o("movementRippleCanvas"), xn = xa.getContext("2d");
  let Na = !0, Ba = null, Ps = performance.now();
  function yn() {
    const e = xa.parentElement.getBoundingClientRect(), a = to(), r = Math.max(1, e.width / a), c = Math.max(1, e.height / a), p = Math.min(window.devicePixelRatio || 1, 2);
    xa.width = Math.max(1, Math.floor(r * p)), xa.height = Math.max(1, Math.floor(c * p)), xa.style.width = r + "px", xa.style.height = c + "px", xn.setTransform(p, 0, 0, p, 0, 0);
  }
  function Fr() {
    var e;
    return qt || ((e = Ee[ze]) == null ? void 0 : e.kind) === "rest";
  }
  function ir() {
    const e = Ee[ze];
    return Fr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function xi(e) {
    if (Ba = null, !f) return;
    if (!ke.workout.classList.contains("active")) {
      Ba = requestAnimationFrame(xi);
      return;
    }
    const a = xa.parentElement.getBoundingClientRect(), r = to(), c = Math.max(1, a.width / r), p = Math.max(1, a.height / r);
    if (xn.clearRect(0, 0, c, p), Na) {
      const k = ir(), _ = (e - Ps) % k / k, I = 15, J = Math.max(8, Math.round(I * p / Math.max(1, c))), te = c / (I + 1), Z = p / (J + 1), U = c * 0.5, Me = p * 0.52, Ve = Math.hypot(U, Me), ye = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ge = 1; ge <= J; ge++)
        for (let ot = 1; ot <= I; ot++) {
          const st = ot * te, Ae = ge * Z, lt = Math.hypot(st - U, Ae - Me) / Ve, yt = Fr(), Ke = yt ? Math.exp(-Math.pow((lt - (_ * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ue = Math.exp(-Math.pow((lt - _ * 1.25) * 7, 2)), $t = yt ? Ke : Ue, ln = yt ? 0.5 + 0.5 * Math.sin(_ * Math.PI * 2 - lt * 3) ** 2 : 0.35 + 0.65 * Math.sin(_ * Math.PI * 2 - lt * 5) ** 2, Dt = yt ? 1.4 + $t * 4.2 * ln : 1.2 + $t * 5 * ln;
          xn.beginPath(), xn.arc(st, Ae, Dt, 0, Math.PI * 2), xn.fillStyle = `rgba(${ye},${yt ? 0.08 + $t * 0.48 : 0.05 + $t * 0.55})`, xn.fill();
        }
    }
    Ba = requestAnimationFrame(xi);
  }
  new ResizeObserver(yn).observe(xa.parentElement), yn(), Ba = requestAnimationFrame(xi);
  const $o = o("exerciseTitle"), ya = o("exerciseMeta"), nt = o("stepLabel"), yi = o("digits"), _o = o("fill"), Pa = o("progress"), sa = o("pause"), Or = o("nextName"), Is = o("nextMeta"), Wr = o("nextIcon"), Ao = o("skipNextSession");
  let pn = null;
  function sn(e) {
    for (let a = Math.max(0, e); a < Ee.length; a++)
      if (!Ee[a].sessionHidden) return a;
    return -1;
  }
  function rr() {
    const e = Ee[ze];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (qt) {
      const c = sn(ze + 1), p = c >= 0 ? Ee[c] : null;
      return p ? { name: p.name, meta: ki(p), icon: Xo(p) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = sn(ze + 1), r = a >= 0 ? Ee[a] : null;
    return r ? { name: r.name, meta: ki(r), icon: Xo(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function qr() {
    if (!Ee[ze]) return Ee.length;
    const a = sn(ze + 1);
    return a < 0 ? Ee.length : a + 1;
  }
  function Xo(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ki(e) {
    return e.kind === "video" ? "YouTube · " + zt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Ia() {
    return Ee.length && Ee[Ee.length - 1].round || 1;
  }
  function Mi(e) {
    const a = Ee[e];
    if (!a) return "";
    const r = Ia();
    if (r <= 1) return "Step " + (e + 1) + " of " + Ee.length;
    if (a.roundBreak) return "Round " + a.round + " of " + r + " · Rest";
    const c = Ee.filter((p) => p.round === a.round && !p.roundBreak).length;
    return "Round " + a.round + " of " + r + " · Step " + (a.roundIndex + 1) + " of " + c;
  }
  function sr() {
    return Pa.querySelector('[data-step="' + ze + '"]');
  }
  function Ci() {
    Ee[ze] && Number(Pa.dataset.round) !== (Ee[ze].round || 1) && Si(), [...Pa.children].forEach((e) => {
      const a = Number(e.dataset.step);
      e.classList.toggle("done", a < ze), e.classList.toggle("active", a === ze), e.classList.toggle("rewindable", a <= ze), e.disabled = a > ze, a === ze && e.style.setProperty("--segment-progress", "0%");
    }), Ee[ze] && (nt.textContent = Mi(ze), _e());
  }
  function Vr(e) {
    const a = Ee.indexOf(e);
    a < 0 || a <= ze || (e.sessionHidden = !e.sessionHidden, ka(), Et((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function zr() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const a = qr(), r = Ee.slice(a);
    (Pt === "all" ? r : r.slice(0, Math.max(1, Number(Pt) || 1))).forEach((p) => {
      const k = document.createElement("section");
      k.className = "upcomingCard" + (p.sessionHidden ? " sessionHidden" : "") + (qs(p) ? " noMeta" : ""), k.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xe(Xo(p)) + '</div><div><div class="upcomingName">' + Ge(p.name) + '</div><div class="upcomingMeta">' + Ge(ki(p)) + (Ia() > 1 ? " · round " + p.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (p.sessionHidden ? "Include this session" : "Skip this session") + "</button>", k.querySelector(".skipSessionBtn").addEventListener("click", () => Vr(p)), e.appendChild(k);
    });
  }
  function ka() {
    var a;
    const e = rr();
    Or.textContent = e.name, Is.textContent = e.meta, Wr.innerHTML = xe(e.icon);
    {
      const r = qt ? Ee[sn(ze + 1)] : ((a = Ee[ze]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : Ee[sn(ze + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && qs(r)));
    }
    if (pn = null, qt) {
      const r = sn(ze + 1);
      r >= 0 && (pn = Ee[r]);
    } else {
      const r = Ee[ze];
      if (r && r.rest > 0)
        pn = null;
      else {
        const c = sn(ze + 1);
        c >= 0 && (pn = Ee[c]);
      }
    }
    Ao && (Ao.hidden = !pn, Ao.textContent = pn != null && pn.sessionHidden ? "Include this session" : "Skip this session"), zr();
  }
  Ao.addEventListener("click", () => {
    pn && (pn.sessionHidden = !pn.sessionHidden, Et((pn.sessionHidden ? "Hidden " : "Included ") + pn.name + " for this session"), ka());
  });
  let Gn = null, lr = null;
  function oo(e, a = {}) {
    const r = tt[dt];
    s.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: dt, ...a });
  }
  function jr() {
    const e = tt[dt];
    Gn = { key: dt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(lr), lr = setInterval(() => {
      Gn && !hn && Gn.active++;
    }, 1e3), oo("started", { steps: Ee.length });
  }
  function Eo(e) {
    if (clearInterval(lr), !Gn) return;
    const a = Gn;
    Gn = null, oo(e ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (ct.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: e }), ct.history = ct.history.slice(0, 1e3), vn(), ei(), co());
  }
  function Hs() {
    w("workout"), Gr();
    const e = sn(0);
    e >= 0 && Ee[e].kind === "video" && pe(Ee[e]);
  }
  function dr() {
    at(), Eo(!1), clearInterval(Ct), clearInterval($n), qt = !1, Un(!1), o("app").classList.remove("resting"), Co.classList.remove("active"), w("home");
  }
  function Gr() {
    Co.classList.add("active");
    let e = 5;
    fi.textContent = e, requestAnimationFrame(wi), clearInterval($n), $n = setInterval(() => {
      e--, e > 0 ? (fi.textContent = e, wi()) : (clearInterval($n), fi.textContent = "GO", wi(), setTimeout(() => {
        Co.classList.remove("active"), cancelAnimationFrame(eo), Jo();
      }, 650));
    }, 1e3);
  }
  function Si() {
    var a;
    Pa.innerHTML = "";
    const e = ((a = Ee[Math.max(0, ze)] || Ee[0]) == null ? void 0 : a.round) || 1;
    Pa.dataset.round = e, Ee.forEach((r, c) => {
      if ((r.round || 1) !== e) return;
      const p = document.createElement("button");
      p.dataset.step = c, p.type = "button", p.className = "progressSegment", p.setAttribute("aria-label", "Go to " + r.name), p.addEventListener("click", () => {
        c <= ze && cr(c);
      }), Pa.appendChild(p);
    });
  }
  function Un(e) {
    e = !!e;
    const a = hn !== e;
    if (hn = e, sa.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), B && m)
      try {
        e ? m.pauseVideo() : m.playVideo();
      } catch {
      }
    a && Gn && oo(e ? "paused" : "resumed");
  }
  function cr(e) {
    e < 0 || e >= Ee.length || e > ze || (clearInterval(Ct), qt = !1, o("app").classList.remove("resting"), ze = e, Un(!1), so(), Ct = setInterval(mt, 1e3));
  }
  function Jo() {
    if (ze = sn(0), Un(!1), Si(), ze < 0) {
      $o.textContent = "No activities", ya.textContent = "Open Edit and enable or add a movement", ya.hidden = !1;
      return;
    }
    jr(), so(), clearInterval(Ct), Ct = setInterval(mt, 1e3);
  }
  const ur = o("videoStage"), io = o("videoSound"), Ur = 0, ro = 1, t = 2;
  let i = 0, l = null, d = null, m = null, E = null, y = 0, v = !1, B = null, ee = null;
  function j() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : l || (l = new Promise((a, r) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const p = setInterval(() => {
        var _;
        (_ = window.YT) != null && _.Player && (clearInterval(p), clearTimeout(k), a(window.YT));
      }, 100), k = setTimeout(() => {
        clearInterval(p), l = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const _ = document.createElement("script");
        _.src = "https://www.youtube.com/iframe_api", _.async = !0, _.onerror = () => {
          clearInterval(p), clearTimeout(k), l = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(_);
      }
    }), l);
  }
  function G() {
    return d || (d = j().then((e) => new Promise((a) => {
      const r = document.createElement("div");
      o("videoFrame").appendChild(r), m = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(m), onStateChange: (c) => Oe(c.data), onError: (c) => be(c.data) }
      });
    })), d.catch(() => {
      d = null;
    }), d);
  }
  function pe(e) {
    !(e != null && e.videoId) || e.videoError || G().then((a) => {
      B || E === e.videoId || (E = e.videoId, y = Number(e.start) || 0, v = !1, a.mute(), a.loadVideoById({ videoId: e.videoId, startSeconds: y }));
    }).catch(() => {
    });
  }
  function qe() {
    const e = sn(ze + 1);
    e >= 0 && Ee[e].kind === "video" && pe(Ee[e]);
  }
  function Oe(e) {
    if (!B) {
      e === ro && !v && (v = !0, m.pauseVideo(), m.seekTo(y, !0));
      return;
    }
    ur.classList.toggle("playing", e === ro), Ee[ze] === B && performance.now() > i && (e === ro && hn ? Un(!1) : e === t && !hn && Un(!0)), e === ro && Yr(B.videoId, m.getDuration()) && vn(), e === Ur && Wt();
  }
  function be(e) {
    const a = B;
    if (!a) {
      E = null;
      return;
    }
    e === 101 || e === 150 ? (Zr(a.videoId), Et("That video can’t play outside YouTube, so it was skipped")) : Et("The video couldn’t play, so it was skipped"), Wt();
  }
  function he(e) {
    if (o("app").classList.add("videoStep"), io.hidden = !0, B = e, clearTimeout(ee), !e.videoId) {
      Et("This video step has no link yet, so it was skipped"), setTimeout(() => Wt(), 0);
      return;
    }
    G().then((a) => {
      if (B !== e) return;
      i = performance.now() + 1500;
      const r = Number(e.start) || 0;
      E !== e.videoId ? (E = e.videoId, y = r, a.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (a.seekTo(r, !0), a.playVideo()), a.unMute(), hn && a.pauseVideo(), ee = setTimeout(() => {
        B !== e || hn || (a.getPlayerState() !== ro ? (a.mute(), a.playVideo(), io.hidden = !1) : a.isMuted() && (io.hidden = !1));
      }, 1600);
    }).catch(() => {
      B === e && (Et("YouTube didn’t load, so the video was skipped"), Wt());
    });
  }
  function ie() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), a = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, c = (a == null ? void 0 : a.offsetHeight) || 42, p = window.innerHeight - r - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(p)) + "px");
  }
  window.addEventListener("resize", ie);
  function at() {
    clearTimeout(ee);
    const e = B;
    if (B = null, o("app").classList.remove("videoStep"), ur.classList.remove("playing"), io.hidden = !0, e && m) {
      try {
        m.pauseVideo();
      } catch {
      }
      E = null;
    }
  }
  function Wt() {
    const e = B;
    !e || Ee[ze] !== e || (at(), clearInterval(Ct), lo(), Ct = setInterval(mt, 1e3));
  }
  io.addEventListener("click", () => {
    m && (m.unMute(), m.playVideo()), io.hidden = !0;
  });
  function la(e) {
    var c;
    const a = Number(e.start) || 0;
    if (e.useVideoLength === !1) return a + (Number(e.duration) || 300);
    const r = m && B === e && Number((c = m.getDuration) == null ? void 0 : c.call(m)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || a + (Number(e.duration) || 300);
  }
  function pr(e, a) {
    const r = tt[dt];
    [it, nn, Vt, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((p) => {
      p && p.kind === "video" && p.videoId === e && a(p);
    }));
  }
  function Yr(e, a) {
    a = Math.round(Number(a) || 0);
    let r = !1;
    return e && a > 0 && pr(e, (c) => {
      c.videoDuration !== a && (c.videoDuration = a, r = !0);
    }), r;
  }
  function Zr(e) {
    pr(e, (a) => {
      a.videoError = "embed";
    }), vn();
  }
  function Ti(e) {
    const a = e.videoId;
    if (!a) return;
    const r = () => {
      Zt.classList.contains("open") ? de || O() : (O(), vn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === a && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), r());
    }).catch((c) => {
      e.videoId === a && c === 401 && (e.videoError = "embed", r());
    }), mr(a).then((c) => {
      Yr(a, c) && r();
    }).catch((c) => {
      c === "embed" && e.videoId === a && (e.videoError = "embed", r());
    });
  }
  function mr(e) {
    return j().then((a) => new Promise((r, c) => {
      const p = document.createElement("div");
      p.className = "videoProbe", p.setAttribute("aria-hidden", "true");
      const k = document.createElement("div");
      p.appendChild(k), o("app").appendChild(p);
      let _ = null, I = !1;
      const J = (U, Me) => {
        I || (I = !0, clearTimeout(te), setTimeout(() => {
          try {
            _ == null || _.destroy();
          } catch {
          }
          p.remove();
        }, 0), Me ? c(Me) : r(U));
      }, te = setTimeout(() => J(0), 2e4), Z = () => {
        var Me;
        const U = Number((Me = _ == null ? void 0 : _.getDuration) == null ? void 0 : Me.call(_)) || 0;
        return U > 0 && J(U), U > 0;
      };
      _ = new a.Player(k, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            Z() || (_.mute(), _.playVideo());
          },
          onStateChange: () => Z(),
          onError: (U) => J(0, U.data === 101 || U.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function so() {
    qt = !1;
    const e = Ee[ze];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? he(e) : at(), Gt = e.duration, En = e.duration, $o.textContent = e.name, ya.textContent = e.group, ya.hidden = !0, nt.textContent = Mi(ze), Gn && oo("step", { name: e.name, group: e.group, kind: e.kind, step: ze + 1, of: Ee.length, round: e.round || 1, rounds: Ia(), duration: e.duration }), ka(), Ci(), qe(), e.kind === "video" && setTimeout(ie, 0);
  }
  function _e() {
    var p;
    const e = ((p = Ee[ze]) == null ? void 0 : p.kind) === "video" && !qt, a = e && Gt >= 60;
    yi.textContent = a ? zt(Gt) : Gt, yi.classList.toggle("long", a), e && (o("videoClock").textContent = zt(Gt) + " left");
    const r = Gt / En * 100;
    _o.style.width = r + "%";
    const c = sr();
    if (c && !qt) {
      const k = 100 - r;
      c.style.setProperty("--segment-progress", k + "%");
    }
  }
  function mt() {
    var a, r;
    if (hn) return;
    const e = Ee[ze];
    if ((e == null ? void 0 : e.kind) === "video" && !qt && B === e) {
      const c = Number((a = m == null ? void 0 : m.getCurrentTime) == null ? void 0 : a.call(m)) || 0, p = Number(e.start) || 0, k = la(e);
      En = Math.max(1, k - p), (c > p || ((r = m == null ? void 0 : m.getPlayerState) == null ? void 0 : r.call(m)) === ro) && (Gt = Math.max(0, Math.ceil(k - c))), _e(), c > p && c >= k - 0.25 && Wt();
      return;
    }
    Gt--, _e(), Gt <= 0 && (e.rest > 0 ? Qo(e.rest) : lo());
  }
  function Qo(e) {
    var r;
    qt = !0, o("app").classList.add("resting");
    const a = sr();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(Ct), Gt = e, En = e, Gn && oo("rest", { duration: e }), $o.textContent = "Rest", ya.textContent = (r = Ee[ze]) != null && r.roundBreakAfter ? "Round " + (Ee[ze].round + 1) + " next" : "Recovery", ka(), _e(), Ct = setInterval(() => {
      hn || (Gt--, _e(), Gt <= 0 && (clearInterval(Ct), lo(), Ct = setInterval(mt, 1e3)));
    }, 1e3);
  }
  function lo() {
    qt = !1;
    const e = sn(ze + 1);
    if (e >= 0)
      ze = e, so();
    else {
      clearInterval(Ct), at(), Un(!1), o("app").classList.remove("resting"), $o.textContent = "Complete", ya.textContent = "Move finished", ya.hidden = !1, yi.textContent = "✓";
      {
        const a = Ia();
        nt.textContent = a > 1 ? a + " rounds done" : Ee.filter((r) => !r.roundBreak).length + " steps done";
      }
      Eo(!0);
      {
        const a = Gl(7).reduce((r, c) => r + c.minutes, 0);
        ya.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      _o.style.width = "100%", ka();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Nc(), Un(!1);
  });
  function Nc() {
    clearInterval(Ct);
    const e = Ee[ze];
    if (qt) {
      qt = !1, o("app").classList.remove("resting");
      const r = sn(ze + 1);
      r >= 0 ? (ze = r, so(), Ct = setInterval(mt, 1e3)) : lo();
      return;
    }
    if (e && e.rest > 0) {
      Qo(e.rest);
      return;
    }
    const a = sn(ze + 1);
    a >= 0 ? (ze = a, so(), Ct = setInterval(mt, 1e3)) : lo();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Ct), Un(!1), qt) {
      const e = Ee[ze];
      Gt = e.rest, En = e.rest, $o.textContent = "Rest", ya.textContent = "Recovery", o("app").classList.add("resting"), ka(), _e();
    } else
      so();
    Ct = setInterval(qt ? () => {
      hn || (Gt--, _e(), Gt <= 0 && (clearInterval(Ct), lo(), Ct = setInterval(mt, 1e3)));
    } : mt, 1e3);
  });
  function hr(e, a, r, c) {
    let p = 0, k = null, _ = !1;
    function I() {
      k && cancelAnimationFrame(k), k = null, p = 0, _ = !1, a.style.width = "0%", e.classList.remove("holding");
    }
    function J(U) {
      if (!_) return;
      p || (p = U);
      const Me = Math.min(1, (U - p) / r);
      if (a.style.width = Me * 100 + "%", Me >= 1) {
        _ = !1, k && cancelAnimationFrame(k), k = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), c();
        return;
      }
      k = requestAnimationFrame(J);
    }
    function te(U) {
      var Me;
      if (!(U && U.button !== void 0 && U.button !== 0)) {
        U == null || U.preventDefault(), I(), _ = !0, e.classList.add("holding");
        try {
          (Me = e.setPointerCapture) == null || Me.call(e, U.pointerId);
        } catch {
        }
        k = requestAnimationFrame(J);
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
  hr(Bc, o("holdEndFill"), 1500, dr);
  const Li = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Li.classList.add("open"), Li.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Li.classList.remove("open"), Li.setAttribute("aria-hidden", "true");
  });
  function Pc() {
    const e = dt, a = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    a && a.remove(), delete tt[e], ct.order = ct.order.filter((c) => c !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const c = "custom-" + Date.now();
      tt[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ct.order.push(c), r = Oo(c, tt[c]);
    }
    Li.classList.remove("open"), Li.setAttribute("aria-hidden", "true"), Ja = null, Qa(), rt(r.dataset.workout), vn(), Et("Move deleted");
  }
  hr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, Pc);
  const Fs = n.querySelector(".rubberTabs"), _i = o("rubberIndicator");
  function fr(e, a = !0) {
    if (!e || !Fs || !_i) return;
    const r = Fs.getBoundingClientRect(), c = e.getBoundingClientRect();
    _i.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const p = to();
    _i.style.left = (c.left - r.left) / p + Fs.scrollLeft + "px", _i.style.width = c.width / p + "px", a && (_i.style.transform = "scaleX(1.08)", setTimeout(() => _i.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), fr(e, !0);
  })), requestAnimationFrame(() => fr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => fr(n.querySelector(".tab.active"), !1));
  const Os = o("pixelTrailToggle"), Ws = o("rippleToggle"), Ai = o("trailStrength"), Ei = o("trailLife");
  function da(e, a) {
    ut()[e] = a, vn();
  }
  const Il = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Hl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function qs(e) {
    var a;
    return !!((a = ut().hideMeta) != null && a[Hl(e)]);
  }
  function Ic() {
    const e = /* @__PURE__ */ new Map(), a = (r, c, p) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const k = Hl(r);
      let _ = e.get(k);
      _ || (_ = { key: k, label: k === "rest" ? "Rest" : k === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(k, _)), _.kinds.add(k === "rest" ? "Rest" : k === "video" ? "Video" : c), _.moves.add(p), _.count++;
    };
    return Object.values(tt).forEach((r) => {
      const c = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Le)).forEach((p) => a(p, "Warm-up", c)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((p) => a(p, p.presetRole === "warmup" ? "Warm-up" : p.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (r.cooldown || (r.customSequence ? [] : qa)).forEach((p) => a(p, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, c]) => {
      e.has(r) || e.set(r, { key: r, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, c) => Il.indexOf(r.kind) - Il.indexOf(c.kind) || r.label.localeCompare(c.label));
  }
  let Vs = "all";
  function zs() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return Ic().filter((a) => (Vs === "all" || a.kind === Vs) && (!e || a.label.toLowerCase().includes(e) || a.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function Kr() {
    const e = o("metaTableBody");
    if (!e) return;
    const a = ut().hideMeta || {}, r = zs();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((p) => {
      const k = !a[p.key], _ = p.count ? (p.moves.length > 2 ? p.moves.slice(0, 2).join(", ") + " + " + (p.moves.length - 2) + " more" : p.moves.join(", ")) + " · " + p.count + " step" + (p.count === 1 ? "" : "s") : "Not used yet", I = document.createElement("tr");
      I.className = k ? "" : "off", I.innerHTML = '<td><div class="metaType">' + Ge(p.label) + '</div><div class="metaSub">' + Ge(p.kind + " · " + _) + '</div></td><td class="metaKindCol">' + Ge(p.kind) + '</td><td class="metaUsedCol">' + Ge(_) + '</td><td class="metaSwitchCol"><button class="switch' + (k ? " on" : "") + '" type="button" role="switch" aria-checked="' + k + '" aria-label="Second line for ' + Ge(p.label) + ' on phones"></button></td>', I.querySelector(".switch").addEventListener("click", () => js([p.key], k)), e.appendChild(I);
    });
    const c = r.filter((p) => a[p.key]).length;
    o("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function js(e, a) {
    const r = { ...ut().hideMeta || {} };
    e.forEach((c) => {
      a ? r[c] = !0 : delete r[c];
    }), da("hideMeta", r), Kr(), pt(), ka();
  }
  o("metaSearch").addEventListener("input", Kr), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Vs = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === e)), Kr();
  })), o("metaHideAll").addEventListener("click", () => js(zs().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => js(zs().map((e) => e.key), !1));
  const Di = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ut().toggles || {} };
  function Fl() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", Di[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, c]) => {
      o(c).hidden = Di[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => Di[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const a = n.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !e), a.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Di[e.dataset.toggle] = Di[e.dataset.toggle] === !1, Fl(), da("toggles", { ...Di });
  })), Fl();
  function Hc() {
    Os.classList.toggle("on", ia), Ws.classList.toggle("on", Na), Ai.value = Math.round(no * 100), o("trailStrengthValue").textContent = Ai.value + "%", Ei.value = To, o("trailLifeValue").textContent = Ei.value + " ms";
  }
  ut().trailEnabled !== void 0 && (ia = ut().trailEnabled), ut().rippleEnabled !== void 0 && (Na = ut().rippleEnabled), ut().trailStrength !== void 0 && (no = ut().trailStrength), ut().trailMaxAge !== void 0 && (To = ut().trailMaxAge), Hc(), Os.addEventListener("click", () => {
    ia = !ia, Os.classList.toggle("on", ia), ia || (Lo = []), da("trailEnabled", ia);
  }), Ws.addEventListener("click", () => {
    Na = !Na, Ws.classList.toggle("on", Na), da("rippleEnabled", Na);
  }), Ai.addEventListener("input", () => {
    no = Number(Ai.value) / 100, o("trailStrengthValue").textContent = Ai.value + "%";
  }), Ai.addEventListener("change", () => da("trailStrength", no)), Ei.addEventListener("input", () => {
    To = Number(Ei.value), o("trailLifeValue").textContent = Ei.value + " ms";
  }), Ei.addEventListener("change", () => da("trailMaxAge", To)), $a.addEventListener("change", () => da("upcomingCount", Pt));
  function Ol(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const a = e === "light";
    o("app").classList.toggle("light", a), s.setLight(a), ti(n);
  }
  Ol(ut().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Ol(e.dataset.theme), da("theme", e.dataset.theme);
  }));
  const Yn = { steps: null, weather: null, ...ut().entities || {} };
  let on = null, Gs = {};
  function Fc(e) {
    const a = Object.values(e).filter((I) => I.entity_id.startsWith("sensor.") || I.entity_id.startsWith("input_number.")), r = (I) => I.attributes.friendly_name || I.entity_id, c = a.filter((I) => /step/i.test(I.entity_id) || /step/i.test(r(I)) || ["steps", "step"].includes(String(I.attributes.unit_of_measurement || "").toLowerCase())), p = a.filter((I) => !c.includes(I)), k = (I, J) => r(I).localeCompare(r(J)), _ = (I, J) => /health_steps/.test(J.entity_id) - /health_steps/.test(I.entity_id) || k(I, J);
    return { suggested: c.sort(_), rest: p.sort(k), label: r };
  }
  function Wl(e) {
    const a = o("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: r, rest: c, label: p } = Fc(e), k = (J) => '<option value="' + Ge(J.entity_id) + '">' + Ge(p(J)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(k).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(k).join("") + "</optgroup>" : ""), a.value = Yn.steps || "";
    const _ = o("stepsStatus"), I = Yn.steps && e[Yn.steps];
    _.textContent = I ? "Connected · " + p(I) : _.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Yn.steps = o("stepsEntity").value || null, da("entities", { ...Yn }), Gs = {}, jl(), on && (Wl(on), Vl(on));
  });
  function Oc(e, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(e);
  }
  function ql() {
    const e = Yn.steps && (on == null ? void 0 : on[Yn.steps]), a = Number(e == null ? void 0 : e.state);
    return Number.isFinite(a) ? a : null;
  }
  function Vl(e) {
    var c;
    const a = Yn.steps, r = a ? Number((c = e[a]) == null ? void 0 : c.state) : NaN;
    o("stepsMeta").textContent = a ? Number.isFinite(r) ? Oc(r) : "—" : "Set up in Settings";
  }
  let zl = 0;
  async function jl() {
    const e = Yn.steps;
    if (!e || !s.ws) return;
    zl = Date.now();
    const a = /* @__PURE__ */ new Date(), r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const c = await s.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: a.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), p = (c == null ? void 0 : c[e]) || [], k = {};
      if (p.forEach((_) => {
        Number.isFinite(_.max) && (k[Nt(new Date(_.start))] = _.max);
      }), !Object.keys(k).length) {
        const _ = await s.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: a.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((_ == null ? void 0 : _[e]) || []).forEach((I) => {
          const J = Number(I.s ?? I.state), te = I.lu ? I.lu * 1e3 : Date.parse(I.last_updated || I.last_changed);
          if (!Number.isFinite(J) || !te) return;
          const Z = Nt(new Date(te));
          k[Z] = Math.max(k[Z] || 0, J);
        });
      }
      Gs = k, co();
    } catch {
    }
  }
  function ei() {
    co();
  }
  ei(), setInterval(() => {
    ei(), Uo(), Ka();
  }, 10 * 60 * 1e3);
  function Gl(e) {
    const a = {}, r = {};
    ct.history.forEach((_) => {
      const I = Nt(new Date(_.start));
      a[I] = (a[I] || 0) + (_.seconds || 0) / 60, r[I] = (r[I] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), p = Nt(c), k = [];
    for (let _ = e - 1; _ >= 0; _--) {
      const I = new Date(c.getFullYear(), c.getMonth(), c.getDate() - _), J = Nt(I), te = ct.checkins.filter((U) => U.date === J), Z = (U) => {
        const Me = te.map((Ve) => Ve[U]).filter(Boolean);
        return Me.length ? Me.reduce((Ve, Te) => Ve + Te, 0) / Me.length : null;
      };
      k.push({
        key: J,
        date: I,
        minutes: Math.round(a[J] || 0),
        moves: r[J] || 0,
        steps: J === p && ql() != null ? ql() : Gs[J] ?? null,
        mood: Z("mood"),
        energy: Z("energy")
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
  function co() {
    const e = o("insightCard");
    if (!e) return;
    const a = Gl(30), r = Wc(a), c = a.reduce((te, Z) => te + Z.minutes, 0), p = /* @__PURE__ */ new Date(), k = Nt(p), _ = Nt(new Date(p.getFullYear(), p.getMonth(), p.getDate() - (p.getDay() + 6) % 7)), I = a.filter((te) => te.key >= _ && te.key <= k).reduce((te, Z) => te + Z.minutes, 0), J = (te, Z, U) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + te + '</div><div><div class="activityRowName">' + Ge(Z) + '</div><div class="activityRowMeta">' + Ge(U) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + xe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + J(xe("clock"), "This week", I + " min") + J(xe("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + J(xe("calendar"), "30 days", c + " min") + "</div>";
  }
  const Us = {
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
  }, qc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Ri = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, $r = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Ul = 0;
  const Ys = (e, a) => '<path class="' + a + '" d="' + e + '"/>', Vc = (e, a) => ' style="animation-delay:-' + Math.round(e * 137 % a) + 'ms"', ca = (e, a, r, c) => {
    const p = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Vc(e, 2400) + ' d="M' + e + " " + (a - r) + "L" + (e + p) + " " + (a - p) + "L" + (e + r) + " " + a + "L" + (e + p) + " " + (a + p) + "L" + e + " " + (a + r) + "L" + (e - p) + " " + (a + p) + "L" + (e - r) + " " + a + "L" + (e - p) + " " + (a - p) + 'Z"/>';
  }, Yl = ([e, a, r], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + a + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zc = (e, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', jc = (e) => (e ? ["29.35", "43.04", "56.74"].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), Gc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, r], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + a + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Zl(e, a, r, c) {
    return e === "clear" ? a ? Yl(r ? $r.l : $r.s, c) + (r ? ca(70, 20, 5.83, 1) + ca(78.33, 41.67, 3.75, 0.8) + ca(60, 71.67, 3.33, 0.6) : ca(42, 12, 3.5, 1) + ca(47, 25, 2.25, 0.8) + ca(36, 43, 2, 0.6)) : zc(c, r) : e === "partly" ? (a ? Yl(r ? $r.lp : $r.sp, c) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Ys(r ? Ri.lp : Ri.sp, a ? "wxCloudLight" : "wxBright") + (a ? r ? ca(73.33, 16.67, 4.17, 0.9) : ca(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Ys(r ? Ri.lc : Ri.s, a ? "wxCloudLight" : "wxBright") + (a ? r ? ca(15, 15, 3.75, 0.8) + ca(76.67, 13.33, 2.92, 0.6) : ca(9, 9, 2.25, 0.8) + ca(46, 8, 1.75, 0.6) : "") : Ys(r ? Ri.lr : Ri.s, "wxCloudLight") + (e === "rain" ? jc(r) : Gc(r));
  }
  const Uc = () => {
    var e;
    return ((e = on == null ? void 0 : on["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Zn = ut().weatherStyle || "bitmap", Kl = ut().weatherLayout === "strip" ? "strip" : "tiles", Yc = ut().weatherMotion !== !1;
  const gr = () => Yc && !Ie(), vr = /* @__PURE__ */ new Map(), Zs = 700, Zc = (e) => {
    const [a, r] = e.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: r === "night" };
  };
  function Xr(e, a, r, c = Zn, p, k) {
    let _ = qc(e);
    const I = _ === "night" || (k != null ? !!k : !!r && Uc());
    _ === "night" && (_ = "clear");
    const J = a ? 90 : 54, te = ks(e, I), Z = performance.now();
    let U = p ? vr.get(p) : null;
    if (p && !U ? vr.set(p, U = { key: te, t0: -1e9 }) : U && U.key !== te && (U.fromKey = U.key, U.from = U.last || null, U.key = te, U.t0 = Z), c !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + te + '"' + (p ? ' data-wx-slot="' + p + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + J + '"></canvas></span>';
    let Me = "";
    if (U && Z - U.t0 < Zs && (gr() || Ie())) {
      const Ve = Zc(U.fromKey);
      Me = '<span class="wxLayer wxOut ' + Ve.k + (Ve.night ? " night" : "") + '" style="animation-delay:' + Math.round(U.t0 - Z) + 'ms"><svg viewBox="0 0 ' + J + " " + J + '">' + Zl(Ve.k, Ve.night, a, "wxg" + ++Ul) + "</svg></span>";
    }
    return '<span class="wxIcon ' + _ + (I ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + J + " " + J + '">' + Zl(_, I, a, "wxg" + ++Ul) + "</svg>" + Me + "</span>";
  }
  function Jr() {
    const e = o("app"), a = getComputedStyle(e), r = (I) => a.getPropertyValue(I).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([I, J]) => {
      r(J) && (c[I] = r(J));
    });
    const p = r("--color-text-primary") || "#f1f1f1", k = r("--color-bg-card") || "#222222", _ = e.classList.contains("light");
    return { colors: c, ink: _ ? p : k, paper: _ ? k : p };
  }
  function ti(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const c = Jr(), p = gr(), k = Ie();
    r.forEach((_) => {
      var U;
      const I = _.dataset.wx, J = _.dataset.wxSlot ? vr.get(_.dataset.wxSlot) : null;
      let te = Cl(I, c.colors);
      if (J && J.key === I) {
        const Me = (a - J.t0) / Zs;
        Me < 1 && (p || k) && (te = du(J.from || Cl(J.fromKey, c.colors), te, Math.max(0, Me), c.colors, k)), J.last = te;
      }
      const Z = rc(te, { size: Number(_.dataset.wxSize) || 54, px: 2, oneBit: _.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: a, idle: p });
      _.width !== Z.w && (_.width = Z.w), _.height !== Z.h && (_.height = Z.h), (U = _.getContext("2d")) == null || U.putImageData(new ImageData(Z.data, Z.w, Z.h), 0, 0);
    });
  }
  let Qr = null, $l = -1;
  function Xl(e) {
    if (Qr = null, !f) return;
    const a = gr(), r = Math.floor(e / 100), c = [...vr.values()].some((J) => e - J.t0 < Zs), p = [...es.values()].some((J) => e - J.t0 < J.dur), k = ke.home.classList.contains("active"), _ = Pn.classList.contains("open"), I = a && Zn === "smooth" && (_ || k && Kl === "strip");
    !document.hidden && (c || p || I || a && r !== $l) && ($l = r, k && (ti(o("weatherCard"), e), br(o("weatherCard"), e)), _ && (ti(Pn, e), br(Pn, e))), (a || c || p) && (Qr = requestAnimationFrame(Xl));
  }
  function ni() {
    o("app").classList.toggle("wxMotion", gr()), !Qr && f && (Qr = requestAnimationFrame(Xl));
  }
  let Jl = [];
  const Kt = 36e5, Kc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function uo() {
    const e = /* @__PURE__ */ new Date(), a = (k, _) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + k, _), r = [], c = [], p = [...Array(6)].map((k, _) => {
      const I = a(_, 6), J = a(_, 18), te = a(_ + 1, 6), Z = Jl.find((Me) => Nt(new Date(Me.datetime)) === Nt(I)), U = (Me, Ve, Te) => {
        const ye = r.filter((st) => st.t >= +Me && st.t < +Ve);
        if (ye.length) {
          const st = {};
          return ye.forEach((Ae) => {
            st[Ae.c] = (st[Ae.c] || 0) + (Kc.has(Ae.c) ? 2 : 1);
          }), Object.entries(st).sort((Ae, lt) => lt[1] - Ae[1])[0][0];
        }
        const ge = c.find((st) => {
          const Ae = +new Date(st.datetime);
          return Ae >= +Me - 3 * Kt && Ae < +Ve && (st.is_daytime == null || !!st.is_daytime == !Te);
        });
        if (ge) return ge.condition;
        const ot = (Z == null ? void 0 : Z.condition) || "cloudy";
        return Te && ot === "sunny" ? "clear-night" : ot;
      };
      return { start: +I, end: +te, day: U(I, J, !1), night: U(J, te, !0), hi: Number(Z == null ? void 0 : Z.temperature), lo: Number(Z == null ? void 0 : Z.templow) };
    });
    return { days: p, hours: r, start: p[0].start, end: p[5].end };
  }
  const Ql = (e, a) => {
    const r = e.days.findIndex((p) => a < p.end);
    if (r < 0) return 1;
    const c = e.days[r];
    return Math.max(0, (r + (a - c.start) / (c.end - c.start)) / 6);
  }, $c = (e, a) => {
    const r = Math.max(0, Math.min(0.99999, a)) * 6, c = Math.floor(r), p = e.days[c];
    return p.start + (r - c) * (p.end - p.start);
  };
  function Ks(e, a) {
    const r = Math.max(0, e.days.findIndex((J) => a < J.end)), c = e.days[r], p = (a - c.start) / (c.end - c.start) >= 0.5;
    let k = p ? c.night : c.day, _ = NaN;
    const I = e.hours;
    if (I.length && a >= I[0].t - Kt && a <= I[I.length - 1].t + Kt) {
      let J = I.findIndex((U) => U.t > a);
      J < 0 && (J = I.length);
      const te = I[Math.max(0, J - 1)], Z = I[Math.min(I.length - 1, J)];
      k = te.c || k, _ = Z.t > te.t ? te.temp + (Z.temp - te.temp) * Math.max(0, Math.min(1, (a - te.t) / (Z.t - te.t))) : te.temp;
    }
    if (!Number.isFinite(_)) {
      const J = [];
      if (e.days.forEach((te) => {
        Number.isFinite(te.lo) && J.push([te.start - Kt, te.lo]), Number.isFinite(te.hi) && J.push([te.start + 9 * Kt, te.hi]);
      }), J.length) {
        _ = a <= J[0][0] ? J[0][1] : J[J.length - 1][1];
        for (let te = 1; te < J.length; te++) if (a <= J[te][0] && a > J[te - 1][0]) {
          const [Z, U] = J[te - 1], [Me, Ve] = J[te];
          _ = U + (Ve - U) * (1 - Math.cos(Math.PI * (a - Z) / (Me - Z))) / 2;
          break;
        }
      }
    }
    return { cond: p && k === "sunny" ? "clear-night" : k, temp: _, night: p, day: c };
  }
  const ed = (e) => Nt(new Date(e)) === Nt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), es = /* @__PURE__ */ new Map(), Xc = 900, Jc = 700;
  let ts = null;
  const ua = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((a) => {
    br(a.target.parentElement), a.target.closest("#wxDialog") && rd();
  })) : null;
  function br(e, a = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const c = uo(), p = c.days.flatMap((U) => [{ cond: U.day, night: !1 }, { cond: U.night, night: !0 }]), k = p.map((U) => U.cond).join(), _ = Jr(), I = gr(), J = Ie(), te = Number(Nt(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let Z = !1;
    r.forEach((U) => {
      var st;
      const Me = U.clientWidth, Ve = U.clientHeight;
      if (!Me || !Ve) return;
      const Te = U.dataset.wxStrip;
      let ye = es.get(Te);
      ye ? ye.sig !== k && (ye.prev = ye.segs, ye.sig = k, ye.segs = p, ye.t0 = a, ye.dur = Jc) : es.set(Te, ye = { sig: k, segs: p, prev: null, t0: a, dur: Xc });
      const ge = I || J ? Math.min(1, Math.max(0, (a - ye.t0) / ye.dur)) : 1;
      ge < 1 && (Z = !0);
      const ot = { width: Me, height: Ve, colors: _.colors, clock: a, ambient: I, seed: te, reveal: J ? ge : 1 - Math.pow(1 - ge, 3), prev: ge < 1 ? ye.prev : null, reduce: J };
      if (Zn === "smooth") {
        const Ae = Math.min(2, window.devicePixelRatio || 1), lt = Math.round(Me * Ae), yt = Math.round(Ve * Ae);
        U.width !== lt && (U.width = lt), U.height !== yt && (U.height = yt);
        const Ke = U.getContext("2d");
        if (!Ke) return;
        Ke.setTransform(Ae, 0, 0, Ae, 0, 0), Cu(Ke, p, ot);
      } else {
        const Ae = Mu(p, { ...ot, px: 2, oneBit: Zn === "onebit", ink: _.ink, paper: _.paper });
        U.width !== Ae.w && (U.width = Ae.w), U.height !== Ae.h && (U.height = Ae.h), (st = U.getContext("2d")) == null || st.putImageData(new ImageData(Ae.data, Ae.w, Ae.h), 0, 0);
      }
    }), Z && ni();
  }
  function td() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const a = Yn.weather, r = a && (on == null ? void 0 : on[a]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Xr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ti(e);
      return;
    }
    const c = r.attributes || {}, p = c.temperature_unit || "°", k = (Ke) => Number.isFinite(Number(Ke)) ? Math.round(Number(Ke)) + "°" : "—", _ = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", I = Us[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), J = Nt(/* @__PURE__ */ new Date()), te = Jl.slice(0, 7), Z = te.find((Ke) => Nt(new Date(Ke.datetime)) === J) || null, U = te.filter((Ke) => Nt(new Date(Ke.datetime)) >= J).slice(0, 6), Me = /* @__PURE__ */ new Date(), Ve = Nt(new Date(Me.getFullYear(), Me.getMonth(), Me.getDate() + 1)), Te = Z ? "H " + k(Z.temperature) + "&ensp; L " + k(Z.templow) : "", ye = (Ke) => {
      const Ue = Nt(new Date(Ke.datetime));
      return Ue === J ? "Today" : Ue === Ve ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Ke.datetime));
    }, ge = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", ot = (Ke) => {
      const Ue = new Date(Ke.datetime);
      return Math.round((new Date(Ue.getFullYear(), Ue.getMonth(), Ue.getDate()) - new Date(Me.getFullYear(), Me.getMonth(), Me.getDate())) / 864e5);
    }, st = (Ke) => (Us[Ke] || Ke || "").toLowerCase(), Ae = (Ke, Ue) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ot(Ke) + '" aria-label="' + Ge(ye(Ke) + ": " + st(Ke.condition) + ", " + k(Ke.temperature) + " / " + k(Ke.templow) + ". Open the forecast") + '">' + Xr(Ke.condition, !1, !1, Zn, "day" + Ue) + '<div><div class="activityRowName">' + Ge(ye(Ke)) + '</div><div class="activityRowMeta">' + k(Ke.temperature) + " / " + k(Ke.templow) + "</div></div></div>", lt = () => '<div class="wxStrip"><div class="wxStripDays">' + uo().days.map((Ue, $t) => {
      const Dt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ue.start)) + ": " + st(Ue.day) + (st(Ue.day) === st(Ue.night) ? " all day and night" : ", then " + st(Ue.night) + " overnight") + (Number.isFinite(Ue.hi) ? ". High " + k(Ue.hi) : "") + (Number.isFinite(Ue.lo) ? ", low " + k(Ue.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + $t + '" aria-label="' + Ge(Dt) + '"><span class="wxDayName">' + Ge(ed(Ue.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + k(Ue.hi) + '</span><span class="wxLow">' + k(Ue.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ge("Now in " + _ + ": " + ge + "°, " + st(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Xr(r.state, !0, !0, Zn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(ge)) + '</span><span class="wxUnit">' + Ge(p) + '</span></div><div class="wxPlace">' + Ge(_) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(I) + "</div>" + (Te ? '<div class="wxRange">' + Te + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (U.length ? Kl === "strip" ? lt() : '<div class="activityRows wxDays">' + U.map(Ae).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ti(e);
    const yt = e.querySelector("canvas[data-wx-strip]");
    ts && ts !== yt && (ua == null || ua.unobserve(ts)), ts = yt, yt && (ua == null || ua.observe(yt), br(e)), ni(), id();
  }
  const nd = o("weatherCard"), ad = (e) => {
    const a = e.closest("[data-wx-day]");
    if (a) {
      const c = /* @__PURE__ */ new Date();
      od(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && od(Date.now(), r);
  };
  nd.addEventListener("click", (e) => ad(e.target)), nd.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), ad(e.target));
  });
  const Pn = o("wxDialog"), Do = o("wxGraph"), wr = o("wxGraphWrap");
  let Ma = Date.now(), ai = null, $s = !1, Ni = null;
  function od(e, a) {
    const r = uo();
    ai = a || null, Ma = Math.max(r.start, Math.min(r.end - Kt, e)), es.delete("dialog"), vr.delete("scrub"), Pn.classList.add("open"), Pn.setAttribute("aria-hidden", "false"), id(), ua == null || ua.observe(Pn.querySelector("canvas[data-wx-strip]")), Do.focus({ preventScroll: !0 }), ni();
  }
  function Xs() {
    var e;
    Pn.classList.remove("open"), Pn.setAttribute("aria-hidden", "true"), ua == null || ua.unobserve(Pn.querySelector("canvas[data-wx-strip]")), (e = ai == null ? void 0 : ai.focus) == null || e.call(ai, { preventScroll: !0 }), ai = null;
  }
  function id() {
    if (!Pn.classList.contains("open")) return;
    const e = uo();
    o("wxGraphDays").innerHTML = e.days.map((a) => "<span>" + Ge(ed(a.start)) + "</span>").join(""), rd(e), ns(e), br(Pn);
  }
  function ns(e = uo()) {
    const a = Ks(e, Ma), r = on == null ? void 0 : on[Yn.weather], c = (r == null ? void 0 : r.attributes) || {}, p = c.temperature_unit || "°", k = Math.abs(Ma - Date.now()) < Kt / 2, _ = k && r ? r.state : a.cond, I = k && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", J = Us[_] || (_ ? _.charAt(0).toUpperCase() + _.slice(1) : "—"), te = k ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Ma / Kt) * Kt)), Z = a.day, U = (Number.isFinite(Z.hi) ? "H " + Math.round(Z.hi) + "°" : "") + (Number.isFinite(Z.lo) ? "&ensp; L " + Math.round(Z.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Xr(_, !0, k, Zn, "scrub", k ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(I)) + '</span><span class="wxUnit">' + Ge(p) + '</span></div><div class="wxPlace">' + Ge(te) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(J) + "</div>" + (U ? '<div class="wxRange">' + U + "</div>" : "") + "</div>", ti(o("wxDialogNow")), Do.setAttribute("aria-valuenow", String(Math.round((Ma - e.start) / Kt))), Do.setAttribute("aria-valuetext", te + ", " + J.toLowerCase() + ", " + I + "°"), Js(e), ni();
  }
  function rd(e = uo()) {
    const a = o("wxGraphLine"), r = wr.clientWidth, c = wr.clientHeight;
    if (!r || !c) return;
    const p = [];
    for (let ge = e.start; ge <= e.end; ge += Kt) {
      const ot = Ks(e, ge).temp;
      Number.isFinite(ot) && p.push([Ql(e, ge) * r, ot]);
    }
    if (a.setAttribute("viewBox", "0 0 " + r + " " + c), p.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', Ni = null, Js(e);
      return;
    }
    const k = p.map((ge) => ge[1]), _ = Math.min(...k), I = Math.max(...k), J = Math.max(4, I - _), te = Zn !== "smooth", Z = (ge) => te ? Math.round(ge / 2) * 2 : Math.round(ge * 10) / 10;
    Ni = (ge) => c * 0.84 - (ge - _) / J * c * 0.62;
    const U = Jr(), Me = Zn === "onebit" ? U.paper : "#ffffff", Ve = Zn === "onebit" ? U.ink : "rgba(0,0,0,.28)", Te = "M" + p.map((ge) => Z(ge[0]) + " " + Z(Ni(ge[1]))).join(" L"), ye = (ge, ot) => {
      const st = p.find((Ae) => Ae[1] === ge);
      return '<text class="wxLineLabel" x="' + Z(Math.min(r - 14, Math.max(14, st[0]))) + '" y="' + Z(Ni(ge) + (ot ? 18 : -10)) + '" fill="' + Me + '" stroke="' + Ve + '">' + Math.round(ge) + "°</text>";
    };
    a.setAttribute("shape-rendering", te ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + Te + '" fill="none" stroke="' + Ve + '" stroke-width="' + (te ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Te + '" fill="none" stroke="' + Me + '" stroke-width="2" stroke-linejoin="round"/>' + ye(I, !1) + ye(_, !0) + '<g id="wxCursorMark"></g>', Js(e);
  }
  function Js(e = uo()) {
    const a = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const r = wr.clientWidth, c = wr.clientHeight, p = Zn !== "smooth", k = (Me) => p ? Math.round(Me / 2) * 2 : Me, _ = k(Ql(e, Ma) * r), I = Ks(e, Ma).temp, J = Jr(), te = Zn === "onebit" ? J.paper : "#ffffff", Z = Zn === "onebit" ? J.ink : "rgba(0,0,0,.28)", U = Ni && Number.isFinite(I) ? k(Ni(I)) : null;
    a.innerHTML = '<rect x="' + (_ - 2) + '" y="0" width="4" height="' + c + '" fill="' + Z + '"/><rect x="' + (_ - 1) + '" y="0" width="2" height="' + c + '" fill="' + te + '"/>' + (U == null ? "" : p ? '<rect x="' + (_ - 5) + '" y="' + (U - 5) + '" width="10" height="10" fill="' + te + '" stroke="' + Z + '" stroke-width="2"/>' : '<circle cx="' + _ + '" cy="' + U + '" r="6" fill="' + te + '" stroke="' + Z + '" stroke-width="2"/>');
  }
  const sd = (e) => {
    const a = wr.getBoundingClientRect();
    a.width && (Ma = $c(uo(), (e - a.left) / a.width), ns());
  };
  Do.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      $s = !0;
      try {
        Do.setPointerCapture(e.pointerId);
      } catch {
      }
      sd(e.clientX);
    }
  }), Do.addEventListener("pointermove", (e) => {
    $s && sd(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Do.addEventListener(e, () => {
    $s = !1;
  })), Do.addEventListener("keydown", (e) => {
    const a = uo(), r = { ArrowLeft: -Kt, ArrowRight: Kt, ArrowDown: -Kt, ArrowUp: Kt, PageUp: -24 * Kt, PageDown: 24 * Kt }[e.key];
    r ? (e.preventDefault(), Ma = Math.max(a.start, Math.min(a.end - Kt, Math.round(Ma / Kt) * Kt + r)), ns(a)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Ma = e.key === "Home" ? a.start : a.end - Kt, ns(a));
  }), o("wxDialogClose").addEventListener("click", Xs), Pn.addEventListener("click", (e) => {
    e.target === Pn && Xs();
  }), Pn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Xs());
  }), td(), (bd = (gd = window.matchMedia) == null ? void 0 : (vd = gd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || bd.call(vd, "change", () => {
    ni(), ti(n);
  }), ni();
  const ld = o("tvNav");
  s.fullscreenSupported || (ld.hidden = !0), ld.addEventListener("click", () => s.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ke.workout.classList.contains("active") || Co.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), sa.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(et.value) || 1) + Number(e.dataset.roundsStep)));
    String(a) !== et.value && (et.value = a, et.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [C, M, T, et].forEach((e) => e.addEventListener("input", () => {
    const a = tt[dt];
    a && (a.total = Number(C.value), a.work = Number(M.value), a.rest = Number(T.value)), O();
  })), Ce.addEventListener("click", dr), Fe.addEventListener("click", () => w("settings")), o("settingsBack").addEventListener("click", dr), sa.addEventListener("click", () => Un(!hn)), rt(dt), Ot(), Uo(), co(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), hr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    ct.history = [], ct.checkins = [], wo = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    vn(), ei(), Uo(), Ot(), co(), Ka(), Et("Stats reset");
  });
  const Qs = o("morningTime"), el = o("eveningTime"), tl = o("checkinAutoOpen");
  Qs.value = qn().morning, el.value = qn().evening, tl.classList.toggle("on", ut().checkinAutoOpen !== !1), [["morningTime", Qs], ["eveningTime", el]].forEach(([e, a]) => a.addEventListener("change", () => {
    a.value && (da(e, a.value), Ka());
  })), tl.addEventListener("click", () => {
    const e = ut().checkinAutoOpen === !1;
    tl.classList.toggle("on", e), da("checkinAutoOpen", e);
  }), setTimeout(xo, 800);
  const dd = o("checkinNotify"), as = o("checkinNotifyTarget"), cd = o("checkinNotifyStatus"), Qc = cd.textContent;
  function ud() {
    const e = s.notifyServices(), a = e.filter((p) => p.startsWith("mobile_app_")), r = a.length ? a : e, c = (p) => p.replace(/^mobile_app_/, "").replace(/_/g, " ");
    as.innerHTML = r.map((p) => '<option value="' + Ge(p) + '">' + Ge(c(p)) + "</option>").join(""), !ut().notifyTarget && r[0] && (ut().notifyTarget = r[0]), as.value = ut().notifyTarget || "";
  }
  function os() {
    const e = !!ut().notifyOn;
    dd.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const a = qn();
    cd.textContent = e ? "Sends at " + a.morning + " and " + a.evening : Qc;
  }
  async function nl() {
    const e = !!ut().notifyOn;
    try {
      return await s.setReminderAutomation(e ? { target: ut().notifyTarget, times: qn() } : null), !0;
    } catch {
      return Et("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  dd.addEventListener("click", async () => {
    const e = !ut().notifyOn;
    if (e && (ud(), !ut().notifyTarget)) {
      Et("Install the Companion app on your phone first");
      return;
    }
    ut().notifyOn = e, os(), await nl() ? (vn(), Et(e ? "Check-in notifications on" : "Check-in notifications off")) : (ut().notifyOn = !e, os());
  }), as.addEventListener("change", () => {
    da("notifyTarget", as.value), ut().notifyOn && nl();
  }), [Qs, el].forEach((e) => e.addEventListener("change", () => {
    os(), ut().notifyOn && nl();
  })), ud(), os();
  let al = null;
  function eu() {
    al || (al = setTimeout(() => {
      al = null, co();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, c;
      const a = !on || on[Yn.weather] !== e[Yn.weather] || ((r = on["sun.sun"]) == null ? void 0 : r.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      on = e, Wl(e), Vl(e), a && td(), Date.now() - zl > 60 * 60 * 1e3 && jl(), eu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (ct.history = e.history, ei()), Array.isArray(e.history) && co(), Array.isArray(e.checkins) && (ct.checkins = e.checkins.map(cn), Ka(), Ot(), Uo(), ei(), co()), e.profiles && !Zt.classList.contains("open") && !Gn)) {
        const a = Fo(e);
        Object.keys(tt).forEach((r) => delete tt[r]), Object.assign(tt, a.profiles), ct.order = a.order, tt[dt] || (dt = ct.order[0]), An(), rt(dt);
      }
    },
    suspend() {
      f = !1;
    },
    resume() {
      f || (f = !0, Ra || (Ra = requestAnimationFrame(ao)), Ba || (Ba = requestAnimationFrame(xi)), ni(), fr(n.querySelector(".tab.active"), !1));
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
}, yr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, tn = "made_up_", Ii = (n) => {
  var s;
  return (s = String(n).split(".")[1]) == null ? void 0 : s.startsWith(tn);
}, ls = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Nl(n) {
  const s = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((s - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Au(n) {
  const s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let u = +s; u < +n; u += 10 * 60 * 1e3) o += Nl(new Date(u)) / 6;
  return o;
}
function Md(n = /* @__PURE__ */ new Date()) {
  const s = [];
  for (let o = 0; o <= 96; o++) {
    const u = +n - (96 - o) * 15 * 60 * 1e3;
    s.push([u, Nl(new Date(u))]);
  }
  return s;
}
function Eu({ onChange: n }) {
  const s = {}, o = {}, u = (V, q, K, F) => {
    s[V] = { entity_id: V, state: K, attributes: F, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[V] = q;
  }, h = (V, q, K) => {
    const F = s[V], Y = q ?? F.state;
    s[V] = { ...F, state: Y, attributes: { ...F.attributes, ...K }, last_changed: Y === F.state ? F.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, f = (V, q, K, F) => u("binary_sensor." + tn + (V ? V + "_" : "") + ls(q), V, F ? "on" : "off", { friendly_name: q, device_class: K });
  Object.entries(_u).forEach(([V, q]) => {
    if (q.temperature != null && u("sensor." + tn + V + "_temperature", V, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && u("sensor." + tn + V + "_humidity", V, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && u("vacuum." + tn + "robot", V, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && u("climate." + tn + V, V, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [K, F, Y, ae] = q.cover;
      u("cover." + tn + V + "_" + ls(K), V, Y ? "open" : "closed", { friendly_name: K, device_class: F, current_position: Y, ...ae != null ? { current_tilt_position: ae } : {} });
    }
    if (q.humidifier && u("humidifier." + tn + V, V, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (u("sensor." + tn + V + "_solar_power", V, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + tn + V + "_solar_today", V, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && u("valve." + tn + V + "_" + ls(q.valve), V, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && f(V, q.door, "door", q.doorOpen), q.window && f(V, q.window, "window", !1), q.motion && f(V, q.motion, "motion", !1), q.plant) {
      const [K, F, Y, ae, A] = q.plant, W = tn + ls(K), fe = (g, ke, Ce, Fe, w) => u("sensor." + W + "_" + g, V, String(Ce), { friendly_name: ke, device_class: w, state_class: "measurement", unit_of_measurement: Fe, plant_low: Ce < yr[g][0], plant_high: Ce > yr[g][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[g] });
      fe("moisture", "Moisture", F, "%", "moisture"), fe("light", "Light", Y, "lx", "illuminance"), fe("temperature", "Temperature", ae, "°C", "temperature"), fe("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Se = Object.entries({ moisture: F, light: Y, temperature: ae, fertility: A }).filter(([g, ke]) => ke < yr[g][0] || ke > yr[g][1]).map(([g, ke]) => g + (ke < yr[g][0] ? " low" : " high"));
      u("plant." + W, V, Se.length ? "problem" : "ok", { friendly_name: K, moisture: F, brightness: Y, temperature: ae, conductivity: A, problem: Se.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + tn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), f(null, "Front door", "door", !1), f(null, "Smoke alarm", "smoke", !1), u("sensor." + tn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const x = {}, L = {};
  let b = null;
  function N() {
    const V = /* @__PURE__ */ new Date();
    Object.keys(s).forEach((q) => {
      q.endsWith("_solar_power") && (s[q] = { ...s[q], state: Nl(V).toFixed(2) }), q.endsWith("_solar_today") && (s[q] = { ...s[q], state: Au(V).toFixed(1) });
    });
  }
  N();
  let se = 0;
  function ne() {
    let V = !1;
    const q = ++se % 10 === 0, K = (ae, A, W) => {
      h(ae, A, W), V = !0;
    };
    Object.entries(x).forEach(([ae, A]) => {
      const W = s[ae].attributes.current_position, fe = W < A ? Math.min(A, W + 10) : Math.max(A, W - 10);
      fe === A && delete x[ae], K(ae, fe === A ? fe === 0 ? "closed" : "open" : A > W ? "opening" : "closing", { current_position: fe });
    }), Object.entries(L).forEach(([ae, A]) => {
      const W = s[ae].attributes.current_tilt_position, fe = W < A ? Math.min(A, W + 25) : Math.max(A, W - 25);
      fe === A && delete L[ae], K(ae, null, { current_tilt_position: fe });
    }), Object.keys(s).filter((ae) => ae.startsWith("climate.")).forEach((ae) => {
      const A = s[ae], W = A.attributes, fe = W.current_temperature, Se = (A.state === "heat" || A.state === "auto") && fe < W.temperature - 0.05, g = (A.state === "cool" || A.state === "auto") && fe > W.temperature + 0.05, ke = A.state === "off" ? "off" : Se ? "heating" : g ? "cooling" : "idle", Ce = q ? Math.round((fe + (Se ? 0.1 : g ? -0.1 : 0)) * 10) / 10 : fe;
      (Ce !== fe || ke !== W.hvac_action) && K(ae, null, { current_temperature: Ce, hvac_action: ke });
    }), Object.keys(s).filter((ae) => ae.startsWith("humidifier.")).forEach((ae) => {
      const A = s[ae], W = A.attributes, fe = W.current_humidity, Se = A.state === "on" && fe < W.humidity, g = Se && q ? fe + 1 : fe, ke = A.state !== "on" ? "off" : Se ? "humidifying" : "idle";
      if (g !== fe || ke !== W.action) {
        K(ae, null, { current_humidity: g, action: ke });
        const Ce = "sensor." + tn + o[ae] + "_humidity";
        s[Ce] && K(Ce, String(g));
      }
    });
    const F = s["vacuum." + tn + "robot"], Y = F.attributes;
    F.state === "cleaning" && q && K(F.entity_id, null, { battery_level: Math.max(5, Y.battery_level - 1) }), F.state === "returning" && K(F.entity_id, "docked", {}), F.state === "docked" && Y.battery_level < 100 && K(F.entity_id, null, { battery_level: Math.min(100, Y.battery_level + 2) }), b && Date.now() - b.at > 5e3 && (K("alarm_control_panel." + tn + "house", "armed_" + b.mode, {}), b = null), V && n();
  }
  const R = setInterval(ne, 1e3), P = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function z(V, q, K) {
    const F = K == null ? void 0 : K.entity_id;
    if (!s[F]) return !1;
    const Y = s[F], ae = Y.attributes, A = (W, fe) => h(F, W, fe);
    if (V === "climate" && (q === "set_temperature" && A(null, { temperature: Math.max(ae.min_temp, Math.min(ae.max_temp, K.temperature)) }), q === "set_hvac_mode" && A(K.hvac_mode, K.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && A(Y.state === "off" ? "heat" : "off", Y.state === "off" ? {} : { hvac_action: "off" })), V === "cover") {
      const W = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? K.position : q === "toggle" ? ae.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete x[F], delete L[F], A(ae.current_position === 0 ? "closed" : "open")), W != null && W !== ae.current_position && (x[F] = W, A(W > ae.current_position ? "opening" : "closing"));
      const fe = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? K.tilt_position : null;
      q === "stop_cover_tilt" && delete L[F], fe != null && ae.current_tilt_position != null && fe !== ae.current_tilt_position && (L[F] = fe);
    }
    if (V === "humidifier" && (q === "set_humidity" && A(null, { humidity: Math.max(ae.min_humidity, Math.min(ae.max_humidity, K.humidity)) }), q === "set_mode" && A(null, { mode: K.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const W = q === "turn_on" || q === "toggle" && Y.state !== "on";
      A(W ? "on" : "off", { action: W ? "idle" : "off" });
    }
    if (V === "vacuum" && (q === "start" && A("cleaning", { rooms: K.rooms || ae.rooms }), q === "pause" && A("paused"), q === "return_to_base" && A("returning", { rooms: [] }), q === "locate" && A(null, { located: Date.now() }), q === "set_rooms" && A(null, { rooms: K.rooms })), V === "valve") {
      const W = q === "open_valve" || q === "toggle" && Y.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && A(W ? "open" : "closed");
    }
    if (V === "alarm_control_panel") {
      q === "alarm_disarm" && (b = null, A("disarmed", { changed_by: "Matt" }));
      const W = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      W && (b = { mode: W, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function X(V) {
    const q = (V == null ? void 0 : V.states) || {}, K = (V == null ? void 0 : V.entities) || {}, F = (V == null ? void 0 : V.devices) || {}, Y = (M) => {
      var re;
      const T = K[M];
      return T && (T.area_id || T.device_id && ((re = F[T.device_id]) == null ? void 0 : re.area_id)) || null;
    }, ae = (M) => {
      const T = K[M];
      return q[M] && q[M].state !== "unavailable" && !(T != null && T.hidden) && !(T != null && T.entity_category);
    }, A = {};
    Object.keys(q).forEach((M) => {
      const T = Y(M);
      T && ae(M) && (A[T] || (A[T] = [])).push(M);
    });
    const W = { ...q, ...s }, fe = (M) => {
      var T, re;
      return (re = (T = W[M]) == null ? void 0 : T.attributes) == null ? void 0 : re.device_class;
    }, Se = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], g = Object.keys(q).filter((M) => M.startsWith("vacuum.") && ae(M)), ke = Object.values((V == null ? void 0 : V.areas) || {}).filter((M) => !Lu.has(M.area_id)).map((M) => {
      const T = M.area_id, re = A[T] || [], $ = (Le) => re.filter((it) => it.startsWith(Le + ".")), Q = (Le) => $("sensor").filter((it) => fe(it) === Le), oe = (Le) => Object.keys(s).filter((it) => o[it] === T && Le(it)), le = (Le, it) => Le.length ? Le : oe(it), Be = le(Q("temperature"), (Le) => Le.endsWith(T + "_temperature")), et = le(Q("humidity"), (Le) => Le.endsWith(T + "_humidity")), Rt = Q("power").filter((Le) => /^(W|kW)$/.test(W[Le].attributes.unit_of_measurement || "")), xt = $("binary_sensor").filter((Le) => fe(Le) === "moisture"), va = le($("plant"), (Le) => Le.startsWith("plant.")).map((Le) => ({ id: Le, readings: oe((it) => it.startsWith("sensor." + Le.split(".")[1] + "_")) })), Ca = [...$("binary_sensor").filter((Le) => Se.includes(fe(Le))), ...oe((Le) => Le.startsWith("binary_sensor."))];
      return {
        id: T,
        name: M.name,
        icon: M.icon,
        readings: [...Be.slice(0, 1), ...et.slice(0, 1), ...xt],
        power: Rt.length ? Rt.reduce((Le, it) => Le + Number(W[it].state) * (W[it].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: $("switch"),
        lights: $("light"),
        actions: [...$("light"), ...le($("climate"), (Le) => Le.startsWith("climate.")), ...le($("cover"), (Le) => Le.startsWith("cover.")), ...le($("humidifier"), (Le) => Le.startsWith("humidifier.")), ...le($("valve"), (Le) => Le.startsWith("valve.")), ...$("media_player"), ...$("vacuum"), ...g.length ? [] : oe((Le) => Le.startsWith("vacuum."))],
        solar: oe((Le) => Le.includes("_solar_")),
        plants: va,
        openings: Ca,
        alerts: [...xt, ...Ca].filter((Le) => {
          var it;
          return ((it = W[Le]) == null ? void 0 : it.state) === "on";
        })
      };
    }).filter((M) => M.readings.length || M.plugs.length || M.actions.length || M.solar.length || M.plants.length), Ce = Object.keys(q).find((M) => /^sensor\..*(p1_meter_power|grid_power)$/.test(M) && q[M].state !== "unavailable") || null, Fe = (M) => Object.keys(q).filter((T) => T.startsWith(M + ".") && ae(T)), w = Fe("alarm_control_panel"), C = g.length ? g : ["vacuum." + tn + "robot"];
    return {
      states: W,
      rooms: ke,
      grid: Ce,
      vacuums: C,
      homeVacuums: C.filter((M) => !ke.some((T) => T.actions.includes(M))),
      security: {
        alarms: w.length ? w : ["alarm_control_panel." + tn + "house"],
        locks: Fe("lock"),
        openings: [...Object.keys(s).filter((M) => M.startsWith("binary_sensor.")), "sensor." + tn + "doorbell"]
      }
    };
  }
  return { model: X, call: z, stop() {
    clearInterval(R), clearInterval(P);
  } };
}
const mo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Sl = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((u) => u + u).join("") : s;
  return [0, 2, 4].map((u) => parseInt(o.slice(u, u + 2), 16) || 0);
}, Du = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), Cd = {}, ga = (n, s, o) => {
  const u = n + s + o;
  return Cd[u] || (Cd[u] = Du(Sl(n).map((h, f) => h + (Sl(s)[f] - h) * o)));
}, Sd = {}, vs = (n) => Sd[n] || (Sd[n] = Sl(n));
function Ru(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [ga(s.clear[0], s.cloudy[0], 0.12), ga(s.clear[1], s.cloudy[1], 0.12)], s.storm = [ga(s.rain[0], "#000000", 0.22), ga(s.rain[1], "#000000", 0.22)], s;
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
], po = (n, s) => (Nu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, cc = 1, uc = 2, pc = 3, mc = 4, Oi = 5, ws = 6, Tl = 7, hc = 8, Td = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), Bu = (n, s, o) => {
  let u = !1;
  for (let h = 0, f = n.length - 1; h < n.length; f = h++) {
    const x = n[h], L = n[f];
    x[1] > o != L[1] > o && s < (L[0] - x[0]) * (o - x[1]) / (L[1] - x[1]) + x[0] && (u = !u);
  }
  return u;
};
function Pu(n, s, o, u, { oneBit: h, ink: f, paper: x, snowInk: L }) {
  const b = new Uint8ClampedArray(o * u * 4), N = vs(f), se = vs(x);
  for (let ne = 0; ne < u; ne++) for (let R = 0; R < o; R++) {
    const P = ne * o + R, z = s[P];
    if (n[P] == null) continue;
    let X = vs(n[P]);
    if (h) {
      let V;
      z === mc || z === hc ? V = !0 : z === Oi ? V = L : z === Tl || z === ws ? V = !1 : V = Math.round((0.2126 * X[0] + 0.7152 * X[1] + 0.0722 * X[2]) / 255 * 4) / 4 <= po(R, ne), (z === cc || z === uc || z === pc || z === ws) && (R > 0 && s[P - 1] !== z || R < o - 1 && s[P + 1] !== z || ne > 0 && s[P - o] !== z || ne < u - 1 && s[P + o] !== z) && (V = !0), X = V ? N : se;
    }
    b[P * 4] = X[0], b[P * 4 + 1] = X[1], b[P * 4 + 2] = X[2], b[P * 4 + 3] = 255;
  }
  return { w: o, h: u, data: b };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (n) => ks(n, !1).split("/")[0], rl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zu = [".##", "##.", ".#.", "#.."];
function fc(n, { width: s, height: o, colors: u, wave: h = 0.38, soft: f = 6, glow: x = 0.6, columns: L = 6 }) {
  const b = { ...fo, dawn: "#e5a77e", ...u }, N = Ru(b), se = s, ne = o, R = se / L, P = R / 2, z = Math.PI * 2, X = n.length ? n : [{ cond: "cloudy", night: !1 }], V = [...Array(L * 2)].map((Y, ae) => {
    const A = X[Math.min(ae, X.length - 1)], W = Hu(A.cond), fe = ae % 2 === 1;
    return { cond: A.cond, k: W, night: fe, sky: N[W][fe ? 1 : 0], cover: Iu[W] };
  }), q = (Y) => ne * (0.5 - h * Math.cos(z * (Y / R - 0.25)));
  return { C: b, S: V, W: se, H: ne, cw: R, sw: P, TAU: z, yb: q, side: (Y, ae, A) => {
    const W = (Y ? q(ae) - A : A - q(ae)) / Math.max(3, f * 1.4) + 0.5;
    return W <= 0 ? 0 : W >= 1 ? 1 : W;
  }, glowAt: (Y) => {
    const ae = ((Y / R - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(L - 1, Math.round(Y / R - 0.25))), W = Math.max(0, Math.min(L - 1, Math.round(Y / R - 0.75))), fe = 1 - (V[2 * A].cover + V[2 * W + 1].cover) / 2, Se = Math.sin(Math.PI * Math.min(1, Math.max(0, q(Y) / ne)));
    return { c: ae < 0.5 ? b.dusk : b.dawn, a: x * (0.2 + 0.8 * fe) * Se * Se };
  }, soft: f, tw: R * 0.3, sy: ne / 90 };
}
function gc(n, { clock: s = 0, ambient: o = !1, seed: u = 1 }) {
  const { S: h, sw: f, side: x, C: L, TAU: b, sy: N } = n, se = s, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((R, P) => {
    const z = rl(u * 977 + P * 131 + 7), X = (P + 0.5) * f, V = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let q = 0; q < V; q++) {
      const K = X + (z() - 0.5) * f * 1.6, F = (6 + z() * 76) * N, Y = z() < 0.35, ae = 1.8 + z() * 1.6, A = x(!0, K, F) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(b * se / 2600 + q * 1.7 + P) : 1);
      A >= 0.03 && ne.stars.push({ x: K, y: F, big: Y, size: ae, o: A });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const q = X + (z() - 0.5) * f * 0.3, K = Math.min(15, f * 0.29);
      ne.suns.push({ x: q, y: 32 * N, rad: K, halo: K * 2.8 * (o ? 1 + 0.07 * Math.sin(b * se / 3600 + P) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const q = Math.min(0.78, f * 0.55 / 34), K = X - 23 * q + (z() - 0.5) * f * 0.2;
      ne.moons.push({ x: K + 23 * q, y: (4 + (o ? 0.8 * Math.sin(b * se / 5200 + P) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), h.forEach((R, P) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!z) return;
    const X = rl(u * 577 + P * 71 + 3), V = (P + 0.5) * f, q = R.k === "rain" || R.k === "storm" || R.night ? L.cloudNight : L.cloudDay, K = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let F = 0; F < z; F++) {
      const Y = f / 46 * (R.k === "partly" ? 0.85 : 0.75 + X() * 0.55), ae = V + (R.k === "partly" ? f * 0.12 : (X() - 0.5) * f * 1.05), A = (R.k === "partly" ? 40 : 6 + X() * 26) * N, W = o ? 2.5 * Math.sin(b * se / 9e3 + P * 1.3 + F * 2.1) : 0, fe = o ? 0.9 * Math.sin(b * se / 6100 + P + F) : 0;
      ne.clouds.push({ x: ae - 23 * Y + W, y: A - 15.33 * Y + fe, w: 46 * Y, h: 30.66 * Y, fill: q, o: K * (z > 1 && F === 0 ? 0.85 : 1) });
    }
  }), h.forEach((R, P) => {
    const z = rl(u * 313 + P * 29 + 11), X = (P + 0.5) * f, V = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let K = 0; K < V; K++) {
      let F = X + (z() - 0.5) * f * 1.05, Y = 44 + z() * 36, ae = 1;
      if (o) {
        const W = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        F -= 0.21 * (W - (Y - 44)), Y = 44 + W, ae = Math.min(1, W / 6, (36 - W) / 6);
      }
      Y *= N;
      const A = x(R.night, F, Y) * ae;
      A >= 0.05 && ne.drops.push({ x: F, y: Y, o: A });
    }
    const q = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let K = 0; K < q; K++) {
      let F = X + (z() - 0.5) * f * 1.05, Y = 40 + z() * 44, ae = 1;
      if (o) {
        const W = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + W, F += 1.6 * Math.sin(b * se / 2800 + K * 1.9 + P), ae = Math.min(1, W / 6, (44 - W) / 6);
      }
      Y *= N;
      const A = x(R.night, F, Y) * ae;
      A >= 0.05 && ne.flakes.push({ x: F, y: Y, o: A });
    }
    if (R.k === "fog") {
      const K = R.night ? "#c8ccd6" : "#ffffff", F = R.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(b * se / 8e3 + P) : 0;
      for (let ae = 0; ae < 4; ae++) ne.fogs.push({ x: X - f * 0.75 + ae % 2 * f * 0.18 + (ae % 2 ? Y : -Y), y: (30 + ae * 13) * N, w: f * 1.3, c: K, a: F });
    }
    if (R.k === "storm") {
      const K = (se / 3400 + P * 0.37) % 1;
      ne.bolts.push({ x: X + (z() - 0.5) * f * 0.3 - 5, y: 36 * N, o: o && !(K < 0.05 || K > 0.09 && K < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function ju(n, s, o, u, h, f, x, L) {
  const { S: b, C: N, cw: se, yb: ne, glowAt: R, soft: P, tw: z, sy: X } = n, V = new Array(o * u), q = new Uint8Array(o * u), K = new Uint8Array(o * u), F = (w, C, M, T, re) => {
    M == null || w < 0 || C < 0 || w >= o || C >= u || (T >= 1 || T > po(w + 5, C + 3)) && (V[C * o + w] = M, q[C * o + w] = re);
  }, Y = (w, C, M, T) => {
    for (let re = Math.max(0, Math.floor(C - M) - 1); re <= Math.min(u - 1, C + M + 1); re++) for (let $ = Math.max(0, Math.floor(w - M) - 1); $ <= Math.min(o - 1, w + M + 1); $++) T($, re, $ + 0.5 - w, re + 0.5 - C);
  }, ae = (w, C, M) => {
    for (let re = 0; re < w.length - 1; re++) {
      const $ = (re + C) * se;
      if (M < $ - z / 2) return [w[re], w[re], 0];
      if (M <= $ + z / 2) return [w[re], w[re + 1], (M - $ + z / 2) / z];
    }
    const T = w[w.length - 1];
    return [T, T, 0];
  }, A = b.filter((w) => !w.night).map((w) => w.sky), W = b.filter((w) => w.night).map((w) => w.sky), fe = P / f, Se = 16 * X / f;
  for (let w = 0; w < o; w++) {
    const C = (w + 0.5) * h, M = ne(C) / f, T = ae(A, 0.75, C), re = ae(W, 1.25, C), $ = R(C);
    for (let Q = 0; Q < u; Q++) {
      const oe = po(w, Q), le = Q + 0.5 - M, Be = (fe > 0.01 ? mo(0.5 + le / fe) : le > 0 ? 1 : 0) > oe;
      let et = Be ? T[2] > oe ? T[1] : T[0] : re[2] > oe ? re[1] : re[0];
      (Be ? mo(((Q + 0.5) / u - 0.45) / 0.55) * 0.7 : mo(1 - (Q + 0.5) / (u * 0.55)) * 0.7) > po(w + 2, Q + 5) && (et = Be ? ga(et, "#ffffff", 0.18) : ga(et, "#000000", 0.25)), Be && le >= 0 && le < Se && $.a * 1.3 * (1 - le / Se) > po(w + 6, Q + 1) && (et = $.c), V[Q * o + w] = et, K[Q * o + w] = Be ? 0 : 1;
    }
  }
  const g = ga(N.sun, "#ffffff", 0.55), ke = ga(N.moon, "#ffffff", 0.6);
  s.stars.forEach((w) => {
    const C = Math.floor(w.x / h), M = Math.floor(w.y / f);
    if (C < 0 || M < 0 || C >= o || M >= u || !K[M * o + C] || w.o < 0.15) return;
    const T = w.o > 0.45 ? N.star : ga(N.star, V[M * o + C], 0.5), re = w.big && w.o > 0.6 ? Math.floor(w.size / h) : 0;
    F(C, M, T, 1, Tl);
    for (let $ = 1; $ <= re; $++) [[C - $, M], [C + $, M], [C, M - $], [C, M + $]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < o && Q[1] < u && K[Q[1] * o + Q[0]] && F(Q[0], Q[1], T, 1, Tl);
    });
  }), s.suns.forEach((w) => {
    const C = Math.max(1.5, w.rad / h), M = w.x / h, T = w.y / f, re = w.halo / h * 0.85;
    if (Y(M, T, re, ($, Q, oe, le) => {
      const Be = Math.sqrt(oe * oe + le * le);
      Be > C && Be < re && !K[Q * o + $] && F($, Q, g, 0.3 * (1 - (Be - C) / (re - C)), 0);
    }), L) {
      const $ = Math.floor(x / 500) % 2, Q = Math.max(1, C * 0.3);
      for (let oe = 0; oe < 8; oe++) if (oe % 2 === $) for (let le = C + 1.2; le < C + 1.2 + Q; le += 0.7) F(Math.floor(M + Math.cos(oe * Math.PI / 4) * le), Math.floor(T + Math.sin(oe * Math.PI / 4) * le), N.sun, 1, hc);
    }
    Y(M, T, C, ($, Q, oe, le) => {
      oe * oe + le * le <= C * C && F($, Q, mo(((le / C + 1) / 2 - 0.6) / 0.4) > po($, Q) ? N.sunEdge : N.sun, 1, cc);
    });
  }), s.moons.forEach((w) => {
    const C = Math.max(1.5, w.d * 0.37 / h), M = w.x / h, T = w.y / f, re = M + 0.547 * C, $ = T - 0.503 * C, Q = 0.82 * C;
    Y(M, T, C, (oe, le, Be, et) => {
      if (Be * Be + et * et > C * C) return;
      const Rt = oe + 0.5 - re, xt = le + 0.5 - $;
      Rt * Rt + xt * xt > Q * Q && F(oe, le, mo((et + C) / (2 * C) * 1.1 - 0.1) > po(oe, le) ? N.moon : ke, 1, uc);
    });
  }), s.clouds.forEach((w) => {
    const C = Math.max(3, w.w / h), M = C * 0.6665, T = w.x / h, re = w.y / f, $ = ga(w.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(re) - 1); Q <= Math.min(u - 1, re + M + 1); Q++) for (let oe = Math.max(0, Math.floor(T) - 1); oe <= Math.min(o - 1, T + C + 1); oe++) {
      const le = (oe + 0.5 - T) / C, Be = (Q + 0.5 - re) / C;
      Td(le, Be) && F(oe, Q, !Td(le, Be + 1 / C) || mo((Be - 0.42) / 0.25) * 0.8 > po(oe, Q) ? $ : w.fill, w.o, pc);
    }
  }), s.fogs.forEach((w) => {
    const C = Math.floor(w.y / f), M = Math.max(C, Math.floor((w.y + 6 * X) / f) - 1), T = Math.floor(w.x / h), re = Math.floor((w.x + w.w) / h);
    for (let $ = C; $ <= M; $++) for (let Q = T; Q <= re; Q++) {
      const oe = (Q - T) / Math.max(1, re - T);
      F(Q, $, w.c, w.a * (oe < 0.25 ? oe / 0.25 : oe > 0.75 ? (1 - oe) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / f));
  s.drops.forEach((w) => {
    const C = w.x / h, M = Math.floor(w.y / f);
    for (let T = 0; T < Ce; T++) F(Math.floor(C - 0.208 * T * f / h), M + T, N.rain, w.o, mc);
  });
  const Fe = Math.max(0, Math.round(4.4 / h / 2.6));
  return s.flakes.forEach((w) => {
    const C = Math.floor(w.x / h), M = Math.floor(w.y / f);
    F(C, M, N.snow, w.o, Oi);
    for (let T = 1; T <= Fe; T++)
      F(C - T, M, N.snow, w.o, Oi), F(C + T, M, N.snow, w.o, Oi), F(C, M - T, N.snow, w.o, Oi), F(C, M + T, N.snow, w.o, Oi);
  }), s.bolts.forEach((w) => {
    if (h <= 3.5)
      for (let C = Math.floor(w.y / f); C <= (w.y + 24) / f; C++) for (let M = Math.floor(w.x / h); M <= (w.x + 11) / h; M++)
        Bu(Vu, (M + 0.5) * h - w.x, (C + 0.5) * f - w.y) && F(M, C, N.sun, 1, ws);
    else {
      const C = Math.round(w.x / h), M = Math.round(w.y / f);
      zu.forEach((T, re) => T.split("").forEach(($, Q) => {
        $ === "#" && F(C + Q, M + re, N.sun, 1, ws);
      }));
    }
  }), { col: V, ids: q };
}
function Gu(n, s) {
  const o = s.px, u = Math.max(6, Math.round(s.width / o)), h = Math.max(6, Math.round(s.height / o)), f = s.width / u, x = s.height / h, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, b = (P) => {
    const z = fc(P, s);
    return ju(z, gc(z, { clock: L, ambient: s.ambient, seed: s.seed }), u, h, f, x, L, s.ambient);
  }, N = b(n), se = s.reveal == null ? 1 : mo(s.reveal);
  let ne = N.col, R = N.ids;
  if (se < 1) {
    const P = s.prev ? b(s.prev) : null, z = se * (u + 12);
    ne = new Array(u * h), R = new Uint8Array(u * h);
    for (let X = 0; X < u * h; X++) {
      const V = X % u, q = X / u | 0;
      (s.reduce ? se : mo((z - V) / 12)) > po(V, q) ? (ne[X] = N.col[X], R[X] = N.ids[X]) : P ? (ne[X] = P.col[X], R[X] = P.ids[X]) : (ne[X] = null, R[X] = 255);
    }
  }
  return Pu(ne, R, u, h, { oneBit: s.oneBit, ink: s.ink || "#26221e", paper: s.paper || "#fbf9f6", snowInk: !1 });
}
function Uu(n, s, o) {
  const u = o.width, h = o.height, f = o.reveal == null ? 1 : mo(o.reveal), x = (R, P) => {
    const z = fc(P, o);
    Yu(R, z, gc(z, o));
  };
  if (n.clearRect(0, 0, u, h), f >= 1) {
    x(n, s);
    return;
  }
  if (o.prev && x(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = f, x(n, s), n.restore();
    return;
  }
  const L = n.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const N = b.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, h), x(N, s);
  const se = f * (u + 64) - 64, ne = N.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = ne, N.fillRect(0, 0, u, h), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(b, 0, 0), n.restore();
}
function Yu(n, s, o) {
  const { W: u, H: h, S: f, C: x, cw: L, yb: b, glowAt: N, soft: se, tw: ne, sy: R } = s, P = (g, ke) => {
    const Ce = vs(g);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, z = (g, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, g[0]);
    for (let Fe = 0; Fe < g.length - 1; Fe++) {
      const w = (Fe + ke) * L, C = (w - ne / 2) / u, M = (w + ne / 2) / u;
      C > 0 && C < 1 && Ce.addColorStop(C, g[Fe]), M > 0 && M < 1 && Ce.addColorStop(M, g[Fe + 1]);
    }
    return Ce.addColorStop(1, g[g.length - 1]), Ce;
  }, X = Math.max(24, Math.ceil(u / 4)), V = (g, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= X; Ce++) {
      const Fe = u * Ce / X, w = g == null ? 0 : b(Fe) + g;
      Ce ? n.lineTo(Fe, w) : n.moveTo(Fe, w);
    }
    for (let Ce = X; Ce >= 0; Ce--) {
      const Fe = u * Ce / X;
      n.lineTo(Fe, b(Fe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = z(f.filter((g) => !g.night).map((g) => g.sky), 0.75), n.fillRect(0, 0, u, h);
  const q = n.createLinearGradient(0, 0, u, 0);
  for (let g = 0; g <= 64; g++) {
    const ke = N(u * g / 64);
    q.addColorStop(g / 64, P(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = q;
  for (let g = 0; g < 8; g++)
    n.globalAlpha = 1 - g / 8, V(g * 2 * R, (g + 1) * 2 * R);
  n.fillStyle = z(f.filter((g) => g.night).map((g) => g.sky), 1.25);
  const K = Math.max(0.5, se), F = 6;
  n.globalAlpha = 1, V(null, -K);
  for (let g = 0; g < F; g++)
    n.globalAlpha = 1 - (g + 0.5) / F, V(-K + 2 * K * g / F, -K + 2 * K * (g + 1) / F);
  n.globalAlpha = 1;
  const Y = new Path2D(Wu), ae = new Path2D(Ou), A = new Path2D(Fu), W = new Path2D(qu);
  n.fillStyle = x.star, o.stars.forEach((g) => {
    n.globalAlpha = g.o, g.big ? (n.save(), n.translate(g.x, g.y), n.scale(g.size, g.size), n.fill(Y), n.restore()) : (n.beginPath(), n.arc(g.x, g.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const fe = ga(x.sun, "#ffffff", 0.55);
  o.suns.forEach((g) => {
    const ke = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.halo);
    ke.addColorStop(0, P(fe, 0.42)), ke.addColorStop(0.7, P(fe, 0)), n.fillStyle = ke, n.beginPath(), n.arc(g.x, g.y, g.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, g.y - g.rad, 0, g.y + g.rad);
    Ce.addColorStop(0.6, x.sun), Ce.addColorStop(1, x.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(g.x, g.y, g.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = ga(x.moon, "#ffffff", 0.6);
  o.moons.forEach((g) => {
    n.save(), n.translate(g.x - g.d / 2, g.y - g.d / 2), n.scale(g.d / 46, g.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, x.moon), n.fillStyle = ke, n.fill(ae), n.restore();
  }), o.clouds.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.scale(g.w / 46, g.h / 30.66), n.translate(-4, -9.67), n.fillStyle = g.fill, n.fill(A), n.restore();
  }), o.fogs.forEach((g) => {
    const ke = n.createLinearGradient(g.x, 0, g.x + g.w, 0);
    ke.addColorStop(0, P(g.c, 0)), ke.addColorStop(0.25, P(g.c, g.a)), ke.addColorStop(0.75, P(g.c, g.a)), ke.addColorStop(1, P(g.c, 0)), n.fillStyle = ke, n.fillRect(g.x, g.y, g.w, 6 * R);
  }), n.fillStyle = x.rain, o.drops.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = x.snow, o.flakes.forEach((g) => {
    n.globalAlpha = g.o, n.beginPath(), n.arc(g.x, g.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = x.sun, o.bolts.forEach((g) => {
    n.save(), n.globalAlpha = g.o, n.translate(g.x, g.y), n.fill(W), n.restore();
  }), n.restore();
}
const Zu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Hi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ds = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, sl = (n, s) => '<path class="' + s + '" d="' + n + '"/>', Ku = (n, s) => ' style="animation-delay:-' + Math.round(n * 137 % s) + 'ms"', pa = (n, s, o, u) => {
  const h = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ku(n, 2400) + ' d="M' + n + " " + (s - o) + "L" + (n + h) + " " + (s - h) + "L" + (n + o) + " " + s + "L" + (n + h) + " " + (s + h) + "L" + n + " " + (s + o) + "L" + (n - h) + " " + (s + h) + "L" + (n - o) + " " + s + "L" + (n - h) + " " + (s - h) + 'Z"/>';
}, Ld = ([n, s, o], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + s + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $u = (n, s) => s ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Xu = (n) => (n ? ["29.35", "43.04", "56.74"].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Ju = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, o], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + s + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Qu(n, s, o, u) {
  return n === "clear" ? s ? Ld(o ? ds.l : ds.s, u) + (o ? pa(70, 20, 5.83, 1) + pa(78.33, 41.67, 3.75, 0.8) + pa(60, 71.67, 3.33, 0.6) : pa(42, 12, 3.5, 1) + pa(47, 25, 2.25, 0.8) + pa(36, 43, 2, 0.6)) : $u(u, o) : n === "partly" ? (s ? Ld(o ? ds.lp : ds.sp, u) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + sl(o ? Hi.lp : Hi.sp, s ? "wbCloudLight" : "wbBright") + (s ? o ? pa(73.33, 16.67, 4.17, 0.9) : pa(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? sl(o ? Hi.lc : Hi.s, s ? "wbCloudLight" : "wbBright") + (s ? o ? pa(15, 15, 3.75, 0.8) + pa(76.67, 13.33, 2.92, 0.6) : pa(9, 9, 2.25, 0.8) + pa(46, 8, 1.75, 0.6) : "") : sl(o ? Hi.lr : Hi.s, "wbCloudLight") + (n === "rain" ? Xu(o) : Ju(o));
}
function ep(n, s, o, u) {
  let h = Zu(n);
  const f = h === "night" || !!o;
  h === "night" && (h = "clear");
  const x = s ? 90 : 54;
  return { k: h, night: f, svg: '<svg viewBox="0 0 ' + x + " " + x + '">' + Qu(h, f, s, u) + "</svg>" };
}
const Oa = 6e4, Ha = 36e5, oi = 864e5, Sr = 1440, tp = 6, np = 10 * Oa, cs = 3, ll = 20, ap = 3, op = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), ip = 30 * Oa, rp = 7, sp = 3, _d = 1, lp = Oa, dp = 15 * Oa, In = {
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
}, up = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], pp = Object.keys(Qe.phases), us = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, vc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ps = 100, Ad = "µg/m³", hp = "weather_alerts.air_quality_pollen", Ed = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bp = { daily: 1, hourly: 2 }, He = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), ma = (n, s) => n.replace(/\{(\w+)\}/g, (o, u) => s[u] ?? ""), Wi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, gn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Dd = /* @__PURE__ */ new Map(), Rd = /* @__PURE__ */ new Map(), dl = /* @__PURE__ */ new WeakMap(), xp = (n) => {
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
function dn(n, s, o) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const h = (s == null ? void 0 : s.number_format) === "none", f = { maximumFractionDigits: 2, ...o, ...h ? { useGrouping: !1 } : {} }, x = h ? "en-US" : xp(s), L = JSON.stringify([x, f]);
  let b = Dd.get(L);
  if (!b) {
    try {
      b = new Intl.NumberFormat(x, f);
    } catch {
      b = new Intl.NumberFormat(void 0, f);
    }
    Dd.set(L, b);
  }
  return b.format(u);
}
const Bl = (n) => {
  var s;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.language) || (n == null ? void 0 : n.language) || void 0;
};
function yp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (dl.has(n)) return dl.get(n);
  const s = n.time_format, o = s === "language" || s === "system" || !s ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(s === "language" ? n.language : void 0).includes("10") : s === "12";
  return dl.set(n, o), o;
}
const bc = (n) => {
  var s, o;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function wc(n, s) {
  const o = JSON.stringify([n, s]);
  let u = Rd.get(o);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, s);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...s, timeZone: void 0 });
    }
    Rd.set(o, u);
  }
  return u;
}
const Fi = (n, s) => wc(Bl(s), { hour: "numeric", minute: "2-digit", hourCycle: yp(s == null ? void 0 : s.locale) ? "h12" : "h23", timeZone: bc(s) }).format(n), Nd = (n, s) => wc(Bl(s), { weekday: "short", timeZone: bc(s) }).format(n), kp = (n, s) => n.toLocaleDateString(Bl(s), { weekday: "narrow" }), Cn = (n, s) => gn(s) ? dn(Math.round(Number(s)), n.locale) + "°" : "–", qi = (n) => {
  const s = new Date(n);
  return s.setHours(0, 0, 0, 0), s;
}, kr = (n, s) => n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth() && n.getDate() === s.getDate(), Hn = Math.PI / 180, Mp = 2440588, Cp = 2451545, xs = Hn * 23.4397, Sp = 149598e3, Tp = -0.833 * Hn, Lp = 0.133 * Hn, Bd = 5 * Oa, xc = (n) => n.getTime() / oi - 0.5 + Mp - Cp, yc = (n, s) => Math.atan2(Math.sin(n) * Math.cos(xs) - Math.tan(s) * Math.sin(xs), Math.cos(n)), kc = (n, s) => Math.asin(Math.sin(s) * Math.cos(xs) + Math.cos(s) * Math.sin(xs) * Math.sin(n)), _p = (n, s) => Hn * (280.16 + 360.9856235 * n) - s, Ap = (n, s, o) => Math.asin(Math.sin(s) * Math.sin(o) + Math.cos(s) * Math.cos(o) * Math.cos(n));
function Mc(n) {
  const s = Hn * (357.5291 + 0.98560028 * n), o = Hn * (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)), u = s + o + Hn * 102.9372 + Math.PI;
  return { ra: yc(u, 0), dec: kc(u, 0), dist: Sp };
}
function Cc(n) {
  const s = Hn * (218.316 + 13.176396 * n), o = Hn * (134.963 + 13.064993 * n), u = Hn * (93.272 + 13.22935 * n), h = s + Hn * 6.289 * Math.sin(o), f = Hn * 5.128 * Math.sin(u);
  return { ra: yc(h, f), dec: kc(h, f), dist: 385001 - 20905 * Math.cos(o) };
}
const Sc = (n, s, o, u) => {
  const h = xc(s), f = n(h);
  return Ap(_p(h, Hn * -u) - f.ra, Hn * o, f.dec);
}, Pl = (n, s, o) => Sc(Mc, n, s, o), Ep = (n, s, o) => Sc(Cc, n, s, o);
function Tc(n, s, o, u) {
  const h = {};
  let f = o.getTime(), x = n(o) - s;
  for (let L = f + Bd; L <= u.getTime(); L += Bd) {
    const b = n(new Date(L)) - s;
    if (x < 0 != b < 0) {
      const N = new Date(f + (L - f) * x / (x - b));
      b > 0 ? h.rise ?? (h.rise = N) : h.set ?? (h.set = N);
    }
    f = L, x = b;
  }
  return h;
}
const Lc = (n) => {
  const s = qi(n);
  return [s, new Date(s.getTime() + oi)];
}, Dp = (n, s, o) => Tc((u) => Pl(u, s, o), Tp, ...Lc(n)), Rp = (n, s, o) => Tc((u) => Ep(u, s, o), Lp, ...Lc(n));
function Np(n) {
  const s = xc(n), o = Mc(s), u = Cc(s), h = Math.acos(Math.sin(o.dec) * Math.sin(u.dec) + Math.cos(o.dec) * Math.cos(u.dec) * Math.cos(o.ra - u.ra)), f = Math.atan2(o.dist * Math.sin(h), u.dist - o.dist * Math.cos(h)), x = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - u.ra), Math.sin(o.dec) * Math.cos(u.dec) - Math.cos(o.dec) * Math.sin(u.dec) * Math.cos(o.ra - u.ra));
  return { fraction: (1 + Math.cos(f)) / 2, phase: 0.5 + 0.5 * f * (x < 0 ? -1 : 1) / Math.PI };
}
const Bp = (n) => {
  const s = n * 28;
  return s < 0.5 || s > 27.5 ? "new_moon" : s < 6.5 ? "waxing_crescent" : s < 7.5 ? "first_quarter" : s < 13.5 ? "waxing_gibbous" : s < 14.5 ? "full_moon" : s < 20.5 ? "waning_gibbous" : s < 21.5 ? "last_quarter" : "waning_crescent";
}, ys = (n) => {
  const s = n == null ? void 0 : n.config;
  return s && gn(s.latitude) && gn(s.longitude) ? { lat: Number(s.latitude), lon: Number(s.longitude) } : null;
};
function Pd(n, s) {
  var N, se, ne;
  const o = ys(n), u = o ? Dp(s, o.lat, o.lon) : {}, h = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], f = qi(s).getTime(), x = (R) => {
    const P = R ? new Date(R) : null;
    return P && Number.isFinite(P.getTime()) && qi(P).getTime() === f ? P : null;
  }, L = x((se = h == null ? void 0 : h.attributes) == null ? void 0 : se.next_rising), b = x((ne = h == null ? void 0 : h.attributes) == null ? void 0 : ne.next_setting);
  return L && (u.rise = L), b && (u.set = b), u;
}
function Pp(n) {
  var u;
  const s = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((s == null ? void 0 : s.state) === "below_horizon" || (s == null ? void 0 : s.state) === "above_horizon") return s.state === "below_horizon";
  const o = ys(n);
  return o ? Pl(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Tr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Ms = (n, s) => {
  var u;
  const o = (u = n.entities) == null ? void 0 : u[s];
  return !o || !o.hidden && !o.entity_category;
}, ha = (n, s, o) => {
  var u, h;
  for (const f of s) {
    const x = (u = n.states) == null ? void 0 : u[f];
    if (!Tr(x)) continue;
    const L = (h = x.attributes) == null ? void 0 : h[o];
    if (L != null && L !== "") return { stateObj: x, value: L };
  }
}, Ip = (n, s) => s.map((o) => {
  var u;
  return (u = n.states) == null ? void 0 : u[o];
}).find(Tr), Hp = (n, s, o) => s.map((u) => {
  var h;
  return (h = n.states) == null ? void 0 : h[u];
}).find((u) => {
  var h;
  return Tr(u) && (((h = u.attributes) == null ? void 0 : h.supported_features) == null || Number(u.attributes.supported_features) & bp[o]);
});
function Cr(n, s, o) {
  var f, x, L, b;
  const u = ((x = (f = n.config) == null ? void 0 : f.unit_system) == null ? void 0 : x.length) || "", h = (s == null ? void 0 : s.attributes) || {};
  switch (o) {
    case "precipitation":
      return h.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return h.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return h.wind_speed_unit || u + "/h";
    default:
      return h.temperature_unit || ((b = (L = n.config) == null ? void 0 : L.unit_system) == null ? void 0 : b.temperature) || "";
  }
}
function Ll(n, s, o, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [h, ...f] = n.formatEntityAttributeValueToParts(s, o, u).map((x) => x.value);
      return { number: h, unit: f.join("").trim() };
    }
  } catch {
  }
  return { number: dn(u, n.locale), unit: Cr(n, s, o) };
}
function Fp(n, s, o, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(s, o, u);
  } catch {
  }
  const h = Ll(n, s, o, u);
  return (h.number + " " + h.unit).trim();
}
function ms(n, s) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(s);
  } catch {
  }
  const o = (u = s.attributes) == null ? void 0 : u.unit_of_measurement;
  return cp[s.state] || (o && gn(s.state) ? dn(s.state, n.locale) + " " + o : s.state);
}
function Id(n, s) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(s, { type: "entity" });
  } catch {
  }
  return ((o = s.attributes) == null ? void 0 : o.friendly_name) || s.entity_id;
}
const Op = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Wp = (n) => vc.find(([, s]) => n <= s)[0];
function qp(n, s) {
  if (s === "Beaufort") return Math.round(n);
  const o = s ? fp[s] : void 0;
  if (o === void 0) return;
  const u = gp.findIndex((h) => n * o < h);
  return u === -1 ? 12 : u;
}
const Hd = (n, s) => {
  const o = s ? vp[s] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Fd = (n) => Object.keys(n.states || {}).find((s) => {
  var o, u;
  return s.startsWith("sensor.") && ((u = (o = n.entities) == null ? void 0 : o[s]) == null ? void 0 : u.platform) === "moon";
}), cl = (n) => Object.values(n.states || {}).filter((s) => {
  var o, u;
  return s.entity_id.startsWith("sensor.") && ((o = s.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = s.attributes) == null ? void 0 : u.state_class) ?? "") && Ms(n, s.entity_id);
}).map((s) => s.entity_id).sort()[0];
function Vp(n) {
  var o;
  const s = {};
  for (const [u, h] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (h && "integration_type" in h) {
      s[u] = h.categories;
      continue;
    }
    for (const [f, x] of Object.entries((h == null ? void 0 : h.integrations) ?? {})) s[f] = x == null ? void 0 : x.categories;
  }
  return s;
}
const _c = (n, s, o) => {
  var h, f, x;
  const u = (f = (h = n.entities) == null ? void 0 : h[o]) == null ? void 0 : f.platform;
  return !!u && !!((x = s[u]) != null && x.includes(hp));
};
function zp(n, s) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var h;
    return u.entity_id.startsWith("sensor.") && Ed.includes(((h = u.attributes) == null ? void 0 : h.device_class) ?? "") && Ms(n, u.entity_id) && _c(n, s, u.entity_id);
  }).sort((u, h) => u.entity_id.localeCompare(h.entity_id)).forEach((u) => {
    o.has(u.attributes.device_class) || o.set(u.attributes.device_class, u.entity_id);
  }), Ed.map((u) => o.get(u)).filter(Boolean);
}
const jp = (n, s) => Object.values(n.states || {}).filter((o) => {
  var u, h;
  return o.entity_id.startsWith("sensor.") && Ms(n, o.entity_id) && _c(n, s, o.entity_id) && (((h = (u = n.entities) == null ? void 0 : u[o.entity_id]) == null ? void 0 : h.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Od(n, s, o) {
  const u = Math.max(s - n, 1e-6), h = o[o.length - 1], f = o.find((N) => u / N <= 4) ?? h * Math.ceil(u / (4 * h)), x = Math.floor(n / f) * f;
  let L = Math.ceil(s / f) * f;
  L === x && (L = x + f);
  const b = [];
  for (let N = x; N <= L + f / 1e3; N += f) b.push(N);
  return { min: x, max: L, ticks: b };
}
const Mr = (n, s, o) => {
  const u = (x) => [1, 3, 5].map((L) => parseInt(x.slice(L, L + 2), 16)), h = u(n), f = u(s);
  return "rgb(" + h.map((x, L) => Math.round(x + (f[L] - x) * o)).join(", ") + ")";
}, Gp = (n, s, o, u) => {
  const h = o * Math.abs(1 - 2 * u), f = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (s - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (s + o) + " A " + h + " " + o + " 0 0 " + f + " " + n + " " + (s - o) + " Z";
}, Bo = ({ icon: n, name: s, sub: o, visual: u, double: h, backdrop: f, cls: x }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (f ? " wbHasBackdrop" : "") + (x ? " " + x : "") + '">' + (f ? '<div class="wbBackdrop" aria-hidden="true">' + f + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Wi(n) + '</div><div class="wbText"><span class="wbName">' + He(s) + "</span>" + (o ? '<span class="wbSub">' + He(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + u + "</div></div>", ul = (n, s) => '<div class="wbValue"><span class="wbNum">' + He(n) + "</span>" + (s ? '<span class="wbUnitV">' + He(s) + "</span>" : "") + "</div>";
function Up(n) {
  const s = n.max - n.min || 1, o = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / s * 100, u = (L) => L / Sr * 100 + "%", h = (L) => L.map((b) => b.t + "," + o(b.v)).join(" "), f = n.kind === "line" ? n.points : [];
  let x = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + u(L.t) + '">' + Wi(L.rise ? In.sunsetUp : In.sunsetDown) + He(L.label) + "</span>").join("") + "</div>";
  return x += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + o(L) + '%">' + He(n.format(L)) + "</span>").join("") + "</div>", x += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Sr + ' 100" preserveAspectRatio="none">' + n.night.map(([L, b]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (b - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + Sr + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (f.length > 1 ? '<polygon class="wbDcArea" points="' + f[0].t + ",100 " + h(f) + " " + f[f.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(f) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + u(L.t + 12) + ";width:" + u(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + He(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + He(n.note) + "</span>" : "") + "</div>", x += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + u(L.t) + '">' + He(L.label) + "</span>").join("") + "</div></div>", x;
}
function Yp(n, s) {
  const x = n.map((V) => V.value), L = Math.min(...x), b = Math.max(...x), N = b - L || 1, se = (V) => V / (n.length - 1) * 300, ne = (V) => 18 + (1 - (V - L) / N) * 84, R = n.map((V, q) => se(q) + "," + ne(V.value)).join(" "), P = x.indexOf(b), z = x.indexOf(L), X = (V) => V === 0 ? "start" : V === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + R + ' 300,102"></polygon><polyline class="wbLine" points="' + R + '" vector-effect="non-scaling-stroke"></polyline><text x="' + se(P) + '" y="' + (ne(b) - 6) + '" text-anchor="' + X(P) + '">' + He(s(b)) + '</text><text x="' + se(z) + '" y="' + (ne(L) + 14) + '" text-anchor="' + X(z) + '">' + He(s(L)) + '</text><text x="0" y="120" text-anchor="start">' + He(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + He(n[n.length - 1].label) + "</text></svg>";
}
function Zp(n, s) {
  const f = n.map((ne) => ne.value).concat([]), x = Math.min(...f) - 2, L = Math.max(...f) + 1, b = L - x || 1, N = 300 / n.length, se = (ne) => (1 - (ne - x) / b) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ne, R) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (R * N + N * 0.2) + '" y="' + se(ne.value) + '" width="' + N * 0.6 + '" height="' + (104 - se(ne.value)) + '" rx="6"></rect><text x="' + (R * N + N / 2) + '" y="120" text-anchor="middle">' + He(ne.label) + "</text>").join("") + "</svg>";
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
], $p = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Wd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Xp = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Jp = 0;
function qd(n, { getHass: s, entityId: o, style: u = "bitmap", motion: h = !0, cards: f, onOpen: x } = {}) {
  var Xn, Ga;
  const L = "wb" + ++Jp + "-", b = document.createElement("div");
  b.className = "wb";
  const N = document.createElement("div");
  N.className = "wbBento", b.appendChild(N), n.replaceChildren(b);
  const se = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((S) => !f || f.includes(S)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, R = {};
  se.forEach((S) => {
    const D = document.createElement("div");
    D.className = "wbItem", D.dataset.card = S, D.dataset.size = ne[S] || "tile", D.hidden = !0, N.appendChild(D), R[S] = { el: D, html: null };
  });
  let P = !1, z = null, X = 0, V = -1, q = !1, K = null;
  const F = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Y = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ae = /* @__PURE__ */ new Date(), A = /* @__PURE__ */ new Date(), W = null;
  const fe = {}, Se = {}, g = (S) => {
    var D;
    return ((D = Se[S]) == null ? void 0 : D.forecast) ?? [];
  }, ke = (S, D) => {
    var H;
    return Se[D] ? (H = S.states) == null ? void 0 : H[Se[D].entityId] : void 0;
  };
  function Ce(S) {
    const D = fe[S];
    D && (D.unsub.then((H) => {
      typeof H == "function" && H();
    }).catch(() => {
    }), delete fe[S]), Se[S] && delete Se[S];
  }
  function Fe(S, D, H) {
    var ce;
    if (typeof ((ce = S.connection) == null ? void 0 : ce.subscribeMessage) != "function") return;
    const O = { entityId: H };
    try {
      O.unsub = Promise.resolve(S.connection.subscribeMessage((ve) => {
        P || fe[D] !== O || (ve != null && ve.forecast ? Se[D] = { entityId: H, forecast: ve.forecast } : delete Se[D], Ee());
      }, { type: "weather/subscribe_forecast", forecast_type: D, entity_id: H }));
    } catch (ve) {
      O.unsub = Promise.reject(ve);
    }
    O.unsub.catch(() => {
      fe[D] === O && delete fe[D];
    }), fe[D] = O;
  }
  function w(S, D) {
    var H;
    for (const O of ["daily", "hourly"]) {
      const ce = Hp(S, D, O);
      ((H = fe[O]) == null ? void 0 : H.entityId) !== (ce == null ? void 0 : ce.entity_id) && (Ce(O), ce && Fe(S, O, ce.entity_id));
    }
  }
  const C = (S, D, H, O = !1) => S.callWS({
    type: "history/history_during_period",
    start_time: H.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [D],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function M(S, D) {
    var me, xe, de;
    const H = ha(S, D, "pressure");
    if (!H) return;
    const O = H.stateObj.entity_id, ce = await C(S, O, new Date(Date.now() - 3 * Ha)), ve = (de = (xe = (me = ce == null ? void 0 : ce[O]) == null ? void 0 : me.find((De) => {
      var je;
      return typeof ((je = De.a) == null ? void 0 : je.pressure) == "number";
    })) == null ? void 0 : xe.a) == null ? void 0 : de.pressure;
    Y.pressureHistory = typeof ve == "number" ? { entityId: O, value: ve } : void 0;
  }
  async function T(S, D) {
    var xe;
    const H = ha(S, D, "temperature");
    if (!H) return;
    const O = H.stateObj.entity_id, ce = qi(/* @__PURE__ */ new Date()), ve = await C(S, O, new Date(ce.getTime() - rp * oi)), me = /* @__PURE__ */ new Map();
    for (const de of (ve == null ? void 0 : ve[O]) ?? []) {
      const De = (xe = de.a) == null ? void 0 : xe.temperature, je = new Date((de.lc ?? de.lu) * 1e3);
      if (typeof De != "number" || je >= ce) continue;
      const Ye = je.toDateString();
      me.set(Ye, Math.max(me.get(Ye) ?? -1 / 0, De));
    }
    Y.temperatureHistory = { entityId: O, dailyHighs: [...me.values()], days: [...me.entries()].map(([de, De]) => ({ date: new Date(de), high: De })) };
  }
  async function re(S) {
    const D = cl(S);
    if (!D) return;
    const H = await S.callWS({ type: "recorder/statistic_during_period", statistic_id: D, rolling_window: { duration: { hours: 24 } } });
    Y.rain = { entityId: D, change: (H == null ? void 0 : H.change) ?? void 0 };
  }
  function $() {
    const S = s == null ? void 0 : s();
    if (!S || P || typeof S.callWS != "function") return;
    const D = Be(S);
    Y.lastFetch = Date.now(), [M(S, D), T(S, D), re(S)].forEach((H) => H.then(() => Ee(), () => {
    }));
  }
  async function Q() {
    const S = s == null ? void 0 : s();
    if (!S) return;
    const D = ha(S, Be(S), "temperature");
    if (!D) return;
    const H = D.stateObj.entity_id, O = qi(/* @__PURE__ */ new Date());
    try {
      const ce = await C(S, H, O), ve = (me) => ((ce == null ? void 0 : ce[H]) ?? []).map((xe) => {
        var de;
        return { time: xe.lu * 1e3, value: (de = xe.a) == null ? void 0 : de[me] };
      }).filter((xe) => typeof xe.value == "number");
      Y.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: ve("temperature"), humidity: ve("humidity") }, Ee();
    } catch {
    }
  }
  async function oe(S) {
    const D = s == null ? void 0 : s();
    if (D)
      try {
        const H = await C(D, S, new Date(Date.now() - 24 * Ha), !0), O = ((H == null ? void 0 : H[S]) ?? []).filter((ve) => gn(ve.s)), ce = Math.max(1, Math.ceil(O.length / 48));
        Y.aqHistory = { entityId: S, points: O.filter((ve, me) => me % ce === 0).map((ve) => ({ label: Fi(new Date(ve.lu * 1e3), D), value: Number(ve.s) })) }, Ee();
      } catch {
      }
  }
  function le(S) {
    Y.categories === void 0 && (Y.categories = null, Promise.resolve().then(() => S.callWS({ type: "integration/descriptions" })).then((D) => {
      Y.categories = Vp(D);
    }, () => {
      Y.categories = {};
    }).then(() => Ee()));
  }
  function Be(S) {
    var H;
    const D = Object.keys(S.states || {}).filter((O) => O.startsWith("weather.") && Ms(S, O)).sort();
    return o && ((H = S.states) != null && H[o]) ? [o, ...D.filter((O) => O !== o)] : D;
  }
  const et = (S) => Y.categories ? { air: zp(S, Y.categories), pollen: jp(S, Y.categories) } : { air: [], pollen: [] };
  function Rt(S, D, H, O) {
    if (u === "smooth") {
      const ce = ep(S, D === 90, H, L + "g-" + O);
      return '<span class="wbWx wbS' + D + " wb" + ce.k[0].toUpperCase() + ce.k.slice(1) + (ce.night ? " wbNight" : "") + '" aria-hidden="true">' + ce.svg + "</span>";
    }
    return '<span class="wbWx wbS' + D + '" aria-hidden="true"><canvas data-wb-wx="' + He(ks(S, H)) + '" data-size="' + D + '"></canvas></span>';
  }
  const xt = () => g("daily").filter((S) => S.templow != null).slice(0, tp);
  function va(S, D) {
    const H = new Date(D.datetime), O = /* @__PURE__ */ new Date();
    return kr(H, O) ? Qe.today : kr(H, new Date(O.getTime() + oi)) ? Qe.tomorrow : Nd(H, S);
  }
  const Ca = (S, D, H) => H === 0 ? va(S, D) : Nd(new Date(D.datetime), S);
  function Le(S, D) {
    var je, Ye, We, Re;
    const H = Ip(S, D);
    if (!H) return "";
    const O = xt(), ce = F.openDay !== void 0 ? O[F.openDay] : void 0, ve = ha(S, D, "temperature"), me = O[0], xe = me && kr(new Date(me.datetime), /* @__PURE__ */ new Date()), de = ((Ye = (je = S.config) == null ? void 0 : je.unit_system) == null ? void 0 : Ye.temperature) || ((We = H.attributes) == null ? void 0 : We.temperature_unit) || "";
    let De = '<div class="wbCard wbWeather' + (ce ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (ce ? " inert" : "") + '><div class="wbNow">' + (x ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + He(Qe.openPage) + '">' : '<div class="wbCurrent">') + Rt(H.state, 90, Pp(S), "now") + '<div class="wbTempBlock">' + (ve && gn(ve.value) ? '<div class="wbTemp"><span class="wbDeg">' + He(dn(Math.round(Number(ve.value)), S.locale)) + '</span><span class="wbUnit">' + He(de) + "</span></div>" : "") + '<div class="wbPlace">' + He(((Re = S.config) == null ? void 0 : Re.location_name) ?? "") + "</div></div>" + (x ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + He(ms(S, H)) + "</div>" + (xe && me.templow != null ? '<div class="wbRange">' + He(ma(Qe.range, { high: Cn(S, me.temperature), low: Cn(S, me.templow) })) + "</div>" : "") + "</div></div>";
    return O.length && (De += '<div class="wbColumns" role="list">' + O.map((Ie, Ne) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ne + '" data-wb-focus="col-' + Ne + '"><span class="wbDay">' + He(Ca(S, Ie, Ne)) + "</span>" + Rt(Ie.condition ?? "cloudy", 60, !1, "col" + Ne) + '<span class="wbTemps"><span class="wbHi">' + He(Cn(S, Ie.temperature)) + '</span><span class="wbLo">' + He(Cn(S, Ie.templow)) + "</span></span></button>").join("") + "</div>", De += '<div class="wbHalves" role="list">' + O.map((Ie, Ne) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ne + '" data-wb-focus="half-' + Ne + '">' + Rt(Ie.condition ?? "cloudy", 40, !1, "half" + Ne) + '<span class="wbText"><span class="wbName">' + He(va(S, Ie)) + '</span><span class="wbSub">' + He(ma(Qe.highLow, { high: Cn(S, Ie.temperature), low: Cn(S, Ie.templow) })) + "</span></span></button>").join("") + "</div>"), De + "</div>" + (ce ? qa(S, D, ce) : "") + "</div>";
  }
  function it(S) {
    const D = S.getTime(), H = Date.now() - Ha;
    return g("hourly").filter((O) => {
      const ce = new Date(O.datetime).getTime();
      return ce >= D && ce < D + oi && ce > H;
    });
  }
  function nn(S) {
    if (!S.length) return ["temperature"];
    const D = ["temperature"];
    return S.some((H) => H.precipitation != null || H.precipitation_probability != null) && D.push("precipitation"), S.some((H) => H.humidity != null) && D.push("humidity"), D;
  }
  function qa(S, D, H) {
    const O = qi(new Date(H.datetime)), ce = it(O), ve = nn(ce), me = ve.includes(F.dayMode) ? F.dayMode : "temperature", xe = (de) => de === "humidity" ? Qe.humidity : Qe.modes[de];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Rt(H.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + He(va(S, H)) + '</span><span class="wbSub">' + He(ma(Qe.highLow, { high: Cn(S, H.temperature), low: Cn(S, H.templow) })) + '</span></div><button class="wbBack" title="' + He(Qe.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Wi(In.back) + "</button></div>" + (ve.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + ve.map((de) => '<button aria-pressed="' + (de === me) + '" data-wb="day-mode" data-mode="' + de + '" data-wb-focus="day-mode-' + de + '">' + He(xe(de)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Up(Vt(S, D, O, ce, me)) + "</div></div>";
  }
  function Vt(S, D, H, O, ce) {
    var Qn;
    const ve = H.getTime(), me = Date.now(), xe = kr(H, /* @__PURE__ */ new Date()), de = (ft) => (ft - ve) / Oa, De = (ft) => Fi(new Date(ft), S), je = (ft) => new Date(ft.datetime).getTime(), Ye = [0, 3, 6, 9, 12, 15, 18, 21].map((ft) => ({ t: ft * 60, label: De(ve + ft * Ha), minor: ft % 6 !== 0 })), { rise: We, set: Re } = Pd(S, H), Ie = [], Ne = [];
    We && (Ie.push({ t: de(We.getTime()), label: De(We.getTime()), rise: !0 }), Ne.push([0, de(We.getTime())])), Re && (Ie.push({ t: de(Re.getTime()), label: De(Re.getTime()), rise: !1 }), Ne.push([de(Re.getTime()), Sr]));
    const Je = ys(S);
    !We && !Re && Je && Pl(new Date(ve + oi / 2), Je.lat, Je.lon) < 0 && Ne.push([0, Sr]);
    const pt = xe ? de(me) : void 0, _t = { hours: Ye, sun: Ie, night: Ne };
    if (!O.length && !xe) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Qe.noHourly };
    if (ce === "precipitation") {
      const ft = O.some((rn) => rn.precipitation_probability != null), ea = O.map((rn) => ({ t: de(je(rn)), v: Number((ft ? rn.precipitation_probability : rn.precipitation) ?? 0) })), On = Cr(S, ke(S, "hourly"), "precipitation"), ta = Math.max(0, ...ea.map((rn) => rn.v)), ba = ft ? 100 : Od(0, Math.max(ta, 1), [0.5, 1, 2, 5, 10]).max, qo = (rn) => ft ? dn(rn, S.locale) + "%" : dn(rn, S.locale, { maximumFractionDigits: 1 }) + " " + On, Rn = ea.find((rn) => rn.v === ta);
      return {
        ..._t,
        kind: "bars",
        points: ea,
        min: 0,
        max: ba,
        ticks: [0, ba / 2, ba],
        format: qo,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: Rn && ta > 0 ? { t: Rn.t + 30, v: Rn.v, label: qo(Rn.v) } : void 0,
        note: ta > 0 ? void 0 : Qe.noRain
      };
    }
    const bt = ce === "humidity" ? "humidity" : "temperature", Ut = O.filter((ft) => ft[bt] != null && (!xe || je(ft) >= me)).map((ft) => ({ t: de(je(ft)), v: Number(ft[bt]) }));
    let an, Yt = [];
    if (pt !== void 0) {
      const ft = ha(S, D, bt);
      ft && gn(ft.value) && (an = { t: pt, v: Number(ft.value) }, Ut.unshift(an)), Yt = (((Qn = Y.todayHistory) == null ? void 0 : Qn.day) === H.toDateString() ? Y.todayHistory[bt] : []).filter((On) => On.time <= me).map((On) => ({ t: Math.max(0, de(On.time)), v: On.value })), an && Yt.length && Yt.push(an);
    }
    const Jn = [...Yt, ...Ut];
    if (!Jn.length) return { ..._t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Qe.noHourly };
    const Sa = Jn.map((ft) => ft.v), Fn = Od(Math.min(...Sa), Math.max(...Sa), bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    bt === "humidity" && (Fn.min = Math.max(0, Fn.min), Fn.max = Math.min(100, Fn.max), Fn.ticks = Fn.ticks.filter((ft) => ft >= 0 && ft <= 100));
    const wn = bt === "humidity" ? (ft) => dn(ft, S.locale) + "%" : (ft) => Cn(S, ft), Ua = bt === "temperature" ? Jn.reduce((ft, ea) => ea.v > ft.v ? ea : ft) : void 0;
    return { ..._t, kind: "line", points: Ut, past: Yt, ...Fn, format: wn, now: an, peak: Ua ? { ...Ua, label: wn(Ua.v) } : void 0 };
  }
  function mn(S) {
    const D = ["temperature"];
    return S.some((H) => H.precipitation_probability != null || H.precipitation != null) && D.push("precipitation"), S.some((H) => H.wind_speed != null) && D.push("wind"), D;
  }
  function ct() {
    const S = /* @__PURE__ */ new Date();
    return S.setHours(6, 0, 0, 0), S.getTime() > Date.now() && S.setDate(S.getDate() - 1), S;
  }
  function tt(S, D) {
    var ce, ve;
    const H = g("daily"), O = [];
    for (let me = 0; me < cs; me++) for (const xe of [!1, !0]) {
      const de = S.getTime() + (me * 24 + (xe ? 12 : 0)) * Ha, De = de + 12 * Ha, je = {};
      D.forEach((We) => {
        const Re = new Date(We.datetime).getTime();
        We.condition && Re >= de && Re < De && (je[We.condition] = (je[We.condition] ?? 0) + (op.has(We.condition) ? 2 : 1));
      });
      let Ye = (ce = Object.entries(je).sort((We, Re) => Re[1] - We[1])[0]) == null ? void 0 : ce[0];
      if (!Ye) {
        const We = new Date(de).toDateString();
        Ye = ((ve = H.find((Re) => new Date(Re.datetime).toDateString() === We)) == null ? void 0 : ve.condition) ?? "cloudy";
      }
      O.push({ cond: xe && Ye === "sunny" ? "clear-night" : Ye, night: xe });
    }
    return O;
  }
  function dt(S, D, H) {
    const O = ke(S, "hourly"), ce = D.precipitation_probability != null ? dn(D.precipitation_probability, S.locale) + "%" : "", ve = D.precipitation ? dn(D.precipitation, S.locale) + " " + Cr(S, O, "precipitation") : "";
    switch (H) {
      case "precipitation":
        return ce ? [ce, ve] : [ve || "–", ""];
      case "wind":
        return D.wind_speed != null ? [dn(Math.round(D.wind_speed), S.locale), Cr(S, O, "wind_speed")] : ["–", ""];
      default:
        return [Cn(S, D.temperature), (D.precipitation_probability ?? 0) >= 20 ? ce : ""];
    }
  }
  function Fo(S) {
    W = null;
    const D = g("hourly"), H = Math.floor(Date.now() / Oa) * Oa, O = D.filter((Re) => new Date(Re.datetime).getTime() > H - Ha);
    if (!O.length) return "";
    const ce = mn(O), ve = ce.includes(F.hourlyMode) ? F.hourlyMode : "temperature", me = ct(), xe = me.getTime() + cs * 24 * Ha, de = (H - me.getTime()) / Ha * ll, De = cs * 24 * ll, je = (Re) => (Re - H) / Ha * ll, Ye = [{ x: 0, label: Qe.now, entry: O[0] }, ...O.filter((Re) => {
      const Ie = new Date(Re.datetime);
      return je(Ie.getTime()) >= 48 && Ie.getTime() < xe && Ie.getHours() % ap === 0;
    }).map((Re) => {
      const Ie = new Date(Re.datetime);
      return { x: je(Ie.getTime()), label: Fi(Ie, S), entry: Re };
    })], We = (Re, Ie, Ne) => '<span class="wbMark' + (Ie === 0 ? " wbFirst" : "") + '" style="left:' + Re.x + 'px">' + Ne + "</span>";
    return W = { segs: tt(me, D), seed: me.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + He(Qe.nextHours) + "</h2></div>" + (ce.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ce.map((Re) => '<button aria-pressed="' + (Re === ve) + '" data-wb="hourly-mode" data-mode="' + Re + '" data-wb-focus="hourly-mode-' + Re + '">' + He(Qe.modes[Re]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (De - de) + 'px"><div class="wbRow wbTimes">' + Ye.map((Re, Ie) => We(Re, Ie, He(Re.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -de + "px;width:" + De + 'px"><canvas data-wb-strip' + (u === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ye.map((Re, Ie) => {
      if (!Re.entry) return "";
      const [Ne, Je] = dt(S, Re.entry, ve);
      return We(Re, Ie, '<span class="wbPrimaryV">' + He(Ne) + '</span><span class="wbSecondary">' + He(Je) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Va(S) {
    const D = ae, { rise: H, set: O } = Pd(S, D), ce = H && O ? Math.round((O.getTime() - H.getTime()) / Oa) : 0, ve = Math.floor(ce / 60), me = ce % 60, xe = H && O ? (D.getTime() - H.getTime()) / (O.getTime() - H.getTime()) : -1, de = xe >= 0 && xe <= 1, De = Math.PI * (1 - Math.min(1, Math.max(0, xe))), je = 100 + 74 * Math.cos(De), Ye = 100 - 74 * Math.sin(De), We = de ? Math.sin(Math.PI * xe) : 0, Re = de ? Mr("#2e0a0d", "#43180a", We) : "#0e0507", Ie = de ? Mr("#7a1d12", "#8f400f", We) : "#1c0709", Ne = Mr("#f60c08", "#ff8f00", We), Je = Mr("#fd9b07", "#ffd84a", We), pt = de ? Mr("#fd9b07", "#ffd84a", We) : "#6b3a2a", _t = (Ut) => Ut ? Fi(Ut, S) : "–", bt = H && O ? new Date((H.getTime() + O.getTime()) / 2) : null;
    return Bo({
      icon: In.sunny,
      name: Qe.sun,
      sub: ce ? ma(Qe.daylightShort, { hours: ve, minutes: me }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Re + ", " + Ie + ");--wb-sun-line:" + pt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Ne + '"></stop><stop offset="0.45" stop-color="' + Ne + '"></stop><stop offset="1" stop-color="' + Je + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (de ? '<circle cx="' + je + '" cy="' + Ye + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (bt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + He(_t(bt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + He(_t(H)) + '</text><text class="wbSunTime" x="174" y="117">' + He(_t(O)) + "</text></svg></div>"
    });
  }
  function cn(S, D, H) {
    const O = (me) => L + "moon-" + me, ce = S > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Gp(61, 61, 57.9, S) + '"' + (D ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", ve = (me, xe, de, De, je, Ye) => '<filter id="' + O(me) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xe + '" numOctaves="' + de + '" seed="' + De + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((We) => "<feFunc" + We + ' type="linear" slope="' + je + '" intercept="' + Ye + '"></feFunc' + We + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + ve("mottle", "0.045", 4, 3, 1.8, -0.4) + ve("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (H ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Kp.map(([me, xe, de, De, je, Ye]) => '<ellipse cx="' + me + '" cy="' + xe + '" rx="' + de + '" ry="' + De + '" fill-opacity="' + Ye + '" transform="rotate(' + je + " " + me + " " + xe + ')"></ellipse>').join("") + "</g>" + $p.map(([me, xe, de]) => '<circle class="wbCrater" cx="' + me + '" cy="' + xe + '" r="' + de + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + Xp.map(([me, xe]) => '<line x1="54.4" y1="95" x2="' + me + '" y2="' + xe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Wd.map(([me, xe, de]) => '<circle cx="' + me + '" cy="' + xe + '" r="' + de * 2 + '"></circle>').join("") + "</g>" + Wd.map(([me, xe, de]) => '<circle class="wbBrightCenter" cx="' + me + '" cy="' + xe + '" r="' + de + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + ce + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function vn(S) {
    const D = A, H = ys(S), O = (H == null ? void 0 : H.lat) ?? 0, ce = Np(D), ve = Fd(S), me = ve ? S.states[ve] : void 0, xe = Tr(me) && pp.includes(me.state) ? me.state : Bp(ce.phase), { rise: de, set: De } = H ? Rp(D, H.lat, H.lon) : {}, je = ce.phase > 0.5 != O < 0, Ye = dn(Math.round(ce.fraction * 100), S.locale) + "%", We = de ?? De, Re = We ? Fi(We, S) : void 0;
    return Bo({
      icon: In.night,
      name: Qe.moon,
      sub: Qe.phases[xe],
      visual: '<div class="wbMoonBox">' + cn(ce.fraction, je, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Re ? He(ma(de ? Qe.moonriseAt : Qe.moonsetAt, { time: Re })) : "") + "</span><span>" + He(ma(Qe.lit, { illumination: Ye })) + "</span></div>"
    });
  }
  function ut(S, D) {
    var Ie;
    const H = ha(S, D, "wind_speed");
    if (!H || !gn(H.value)) return "";
    const O = ha(S, D, "wind_gust_speed"), ce = ha(S, D, "wind_bearing"), ve = ce && gn(ce.value) ? Number(ce.value) : void 0, me = qp(Number(H.value), (Ie = H.stateObj.attributes) == null ? void 0 : Ie.wind_speed_unit), xe = Ll(S, H.stateObj, "wind_speed", H.value), de = ve !== void 0 ? Qe.cardinal[up[((ve + 11.25) / 22.5 | 0) % 16]] : void 0, De = O ? Fp(S, O.stateObj, "wind_gust_speed", O.value) : void 0, je = [de ? ma(Qe.windFrom, { direction: de }) : void 0, me !== void 0 ? me + " " + Qe.beaufort : void 0].filter(Boolean).join(" · ") || De, Ye = (Ne, Je) => {
      const pt = (Ne - 90) * Math.PI / 180;
      return [100 + Je * Math.cos(pt), 100 + Je * Math.sin(pt)];
    }, We = Array.from({ length: 36 }, (Ne, Je) => Je * 10).map((Ne) => {
      const Je = Ne % 90 === 0, [pt, _t] = Ye(Ne, 97), [bt, Ut] = Ye(Ne, Je ? 83 : 89);
      return '<line class="wbTick' + (Je ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + _t + '" x2="' + bt + '" y2="' + Ut + '"></line>';
    }).join(""), Re = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ne, Je]) => {
      const [pt, _t] = Ye(Je, 64);
      return '<text class="wbLetter' + (Ne === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + _t + '">' + He(Qe.cardinal[Ne]) + "</text>";
    }).join("");
    return Bo({ icon: In.windy, name: Qe.wind, sub: je, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + We + Re + (ve !== void 0 ? '<path class="wbMarker" transform="rotate(' + ve + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + He(xe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + He(xe.unit) + "</text></svg>" });
  }
  function rt(S, D) {
    const H = ha(S, D, "uv_index");
    if (!H || !gn(H.value)) return "";
    const O = Number(H.value), ce = Qe.uvLevel[Op(O)], ve = /* @__PURE__ */ new Date();
    ve.setHours(23, 59, 59, 999);
    const me = g("hourly").filter((Ne) => Ne.uv_index != null && new Date(Ne.datetime) > /* @__PURE__ */ new Date() && new Date(Ne.datetime) <= ve).reduce((Ne, Je) => !Ne || Je.uv_index > Ne.uv ? { uv: Je.uv_index, time: new Date(Je.datetime) } : Ne, void 0), xe = 48, de = 100, De = 130, je = (Ne) => -xe + Math.min(Ne, 11) / 11 * 2 * xe, Ye = (Ne, Je) => {
      const pt = Ne * Math.PI / 180;
      return [de + Je * Math.sin(pt), De - Je * Math.cos(pt)];
    }, We = (Ne, Je, pt) => {
      const [_t, bt] = Ye(je(Ne), pt), [Ut, an] = Ye(je(Je), pt);
      return "M " + _t + " " + bt + " A " + pt + " " + pt + " 0 0 1 " + Ut + " " + an;
    }, Ie = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, us.low], [3, 6, us.moderate], [6, 8, us.high], [8, 11, us.very_high]].map(([Ne, Je, pt]) => '<path class="wbVuZone" d="' + We(Ne, Je, 96) + '" style="stroke:' + pt + '"></path>').join("") + Array.from({ length: 21 }, (Ne, Je) => ({ angle: -xe + Je * (2 * xe / 20), major: Je % 2 === 0 })).map(({ angle: Ne, major: Je }) => {
      const [pt, _t] = Ye(Ne, 102), [bt, Ut] = Ye(Ne, Je ? 114 : 108);
      return '<line class="wbVuTick' + (Je ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + _t + '" x2="' + bt + '" y2="' + Ut + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + je(O) + 'deg"><line x1="' + de + '" y1="' + De + '" x2="' + de + '" y2="' + (De - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + He(dn(Math.round(O), S.locale)) + "</text></svg>";
    return Bo({
      icon: In.sunnyAlert,
      name: Qe.metrics.uv_index,
      sub: me && me.uv > O ? ma(Qe.uvPeak, { level: ce, uv_index: dn(Math.round(me.uv), S.locale), time: Fi(me.time, S) }) : ce,
      visual: Ie
    });
  }
  function Pe(S) {
    const D = g("daily")[0], H = Y.temperatureHistory;
    if (!D || new Date(D.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !gn(D.temperature) || !H || H.dailyHighs.length < sp) return "";
    const O = Number(D.temperature), ce = H.dailyHighs.reduce((bt, Ut) => bt + Ut, 0) / H.dailyHighs.length, ve = Math.round(O - ce) || 0, me = ve > 0 ? "above" : ve < 0 ? "below" : "same", xe = [...H.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], de = 220, De = 158, je = 22, Ye = 20, We = xe.map((bt) => bt.high).concat(ce), Re = Math.min(...We) - 3, Ie = Math.max(...We) + 1, Ne = (bt) => je + (1 - (bt - Re) / (Ie - Re)) * (De - je - Ye), Je = de / xe.length, pt = Math.min(18, Je * 0.6), _t = '<svg class="wbCompareBars" viewBox="0 0 ' + de + " " + De + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + de + '" y1="' + Ne(ce) + '" y2="' + Ne(ce) + '"></line>' + xe.map((bt, Ut) => {
      const an = Ut * Je + Je / 2, Yt = Ne(bt.high), Jn = bt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Jn + '" x="' + (an - pt / 2) + '" y="' + Yt + '" width="' + pt + '" height="' + (De - Ye - Yt) + '" rx="5"></rect><text class="wbAvgValue' + Jn + '" x="' + an + '" y="' + (Yt - 6) + '">' + He(Cn(S, bt.high)) + '</text><text class="wbAvgDay' + Jn + '" x="' + an + '" y="' + (De - 4) + '">' + He(kp(bt.date, S)) + "</text>";
    }).join("") + "</svg>";
    return Bo({
      icon: In.chartLine,
      name: Qe.metrics.compared_to_average,
      double: !0,
      sub: ma(Qe.highsLastDays, { days: H.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (ve > 0 ? "+" : "") + He(Cn(S, ve)) + '</div><div class="wbCompareWords">' + He(Qe.average[me]) + '</div><div class="wbCompareTemps">' + He(ma(Qe.todayVsAverage, { today: Cn(S, O), average: Cn(S, ce) })) + "</div></div>" + _t + "</div>"
    });
  }
  function Ft(S, D) {
    const H = ha(S, D, "humidity");
    if (!H || !gn(H.value)) return "";
    const O = ha(S, D, "dew_point"), ce = Math.max(0, Math.min(100, Number(H.value)));
    return Bo({
      icon: In.waterPercent,
      name: Qe.metrics.humidity,
      sub: O && gn(O.value) ? ma(Qe.dewPoint, { dew_point: Cn(S, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + ce + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + ul(dn(Math.round(Number(H.value)), S.locale), "%") + "</div>"
    });
  }
  function Mt(S, D) {
    var De, je;
    const H = ha(S, D, "pressure");
    if (!H || !gn(H.value)) return "";
    const O = Number(H.value), ce = (De = H.stateObj.attributes) == null ? void 0 : De.pressure_unit, ve = Hd(O, ce), me = ((je = Y.pressureHistory) == null ? void 0 : je.entityId) === H.stateObj.entity_id ? Hd(Y.pressureHistory.value, ce) : void 0;
    let xe;
    if (ve !== void 0 && me !== void 0) {
      const Ye = ve - me;
      xe = Ye >= _d ? "rising" : Ye <= -_d ? "falling" : "steady";
    }
    const de = Ll(S, H.stateObj, "pressure", Math.round(O));
    return Bo({
      icon: In.gauge,
      name: Qe.metrics.pressure,
      sub: xe ? Qe.pressure[xe] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + ul(de.number) + '<span class="wbTapeUnit">' + He(de.unit) + "</span></div>" + (ve !== void 0 ? ht(S, ve) : "") + "</div>"
    });
  }
  function ht(S, D) {
    const ce = Math.floor(D) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (ve, me) => ce + me).map((ve) => {
      const me = 100 - (ve - D) * 9;
      if (me < 22 || me > 178) return "";
      const xe = ve % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(me - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xe ? 2 : 8) + '" x2="26" y1="' + me + '" y2="' + me + '"></line>' + (xe ? '<text class="wbTapeLabel" x="33" y="' + me + '">' + He(dn(ve, S.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + He(Qe.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + He(Qe.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function _n(S) {
    var de, De;
    const D = cl(S), H = D ? S.states[D] : void 0;
    if (!H || ((de = Y.rain) == null ? void 0 : de.entityId) !== D || !gn(Y.rain.change)) return "";
    const O = ((De = H.attributes) == null ? void 0 : De.unit_of_measurement) ?? "", ce = ke(S, "hourly"), ve = Date.now() + oi, me = g("hourly").filter((je) => je.precipitation != null && new Date(je.datetime).getTime() <= ve), xe = me.reduce((je, Ye) => je + Number(Ye.precipitation), 0);
    return Bo({
      icon: In.rainy,
      name: Qe.metrics.precipitation,
      sub: ce && me.length ? ma(Qe.rainExpected, { amount: dn(xe, S.locale, { maximumFractionDigits: 1 }) + " " + Cr(S, ce, "precipitation") }) : Qe.rainLast24h,
      visual: ul(dn(Y.rain.change, S.locale, { maximumFractionDigits: 1 }), O) + (me.length > 1 ? Zp(me.map((je) => ({ label: "", value: Number(je.precipitation) }))) : "")
    });
  }
  function Ge(S) {
    Y.categories === void 0 && le(S);
    const D = et(S), H = (de) => de.map((De) => S.states[De]).filter(Tr), O = H(D.air), ce = H(D.pollen);
    if (!O.length && !ce.length) return "";
    const ve = [...O, ...ce], me = (de) => ce.includes(de) ? In.flower : In.airFilter, xe = ve.find((de) => de.entity_id === F.aq);
    return xe ? zi(S, xe, me(xe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + He(Qe.airQuality) + '</h2></div><div class="wbAqTiles">' + ve.map((de) => '<button class="wbTile" data-wb="aq-open" data-entity="' + He(de.entity_id) + '"><span class="wbChip">' + Wi(me(de)) + '</span><span class="wbText"><span class="wbName">' + He(Id(S, de)) + '</span><span class="wbSub">' + He(ms(S, de)) + "</span></span></button>").join("") + "</div></div>";
  }
  function zi(S, D, H) {
    var je, Ye, We;
    const O = ((je = D.attributes) == null ? void 0 : je.unit_of_measurement) ?? "", ce = ((Ye = D.attributes) == null ? void 0 : Ye.device_class) === "pm25" && O === Ad && gn(D.state), ve = Number(D.state), me = ce ? Wp(ve) : void 0, xe = ((We = Y.aqHistory) == null ? void 0 : We.entityId) === D.entity_id ? Y.aqHistory.points : void 0, de = (Re) => Math.min(100, Math.max(0, Re / ps * 100));
    let De;
    if (xe && xe.length > 1) De = Yp(xe, (Re) => (dn(Re, S.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (me) {
      let Re = 0;
      const Ie = vc.map(([Ne, Je]) => {
        const pt = de(Math.min(Je, ps)), _t = mp[Ne] + " " + Re + "% " + pt + "%";
        return Re = pt, _t;
      });
      De = '<div class="wbScale" role="meter" aria-label="' + He(Qe.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ps + '" aria-valuenow="' + ve + '" style="background:linear-gradient(to right, ' + Ie.join(", ") + ')"><i style="left:' + de(ve) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ps + " " + Ad + "</span></div>";
    } else De = '<span class="wbGraphNote"><span>' + He(ms(S, D)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Wi(H) + '</span><span class="wbText"><span class="wbName">' + He(Id(S, D)) + '</span><span class="wbSub">' + He(ms(S, D)) + (me ? " · " + He(Qe.aqLevel[me]) : "") + '</span></span><button class="wbBack" title="' + He(Qe.back) + '" data-wb="aq-close">' + Wi(In.back) + '</button></div><div class="wbGraph">' + De + "</div></div></div>";
  }
  const Oo = {
    current: Le,
    hourly: Fo,
    sun: Va,
    moon: vn,
    wind: ut,
    uv_index: rt,
    compared_to_average: Pe,
    humidity: Ft,
    pressure: Mt,
    precipitation: _n,
    air_quality: Ge
  };
  function An(S) {
    var De, je, Ye, We;
    const D = s == null ? void 0 : s();
    if (!D || P) return;
    const H = Be(D);
    w(D, H), Y.lastFetch || $();
    const O = et(D), ce = Fd(D), ve = cl(D), me = [
      ...H.map((Re) => D.states[Re]),
      D.states["sun.sun"],
      ce && D.states[ce],
      ve && D.states[ve],
      ...O.air.map((Re) => D.states[Re]),
      ...O.pollen.map((Re) => D.states[Re]),
      D.locale,
      D.config,
      D.entities,
      Math.floor(Date.now() / Oa)
    ];
    if (!S && z && me.length === z.length && me.every((Re, Ie) => Re === z[Ie])) return;
    z = me;
    const xe = b.getRootNode(), de = xe.activeElement || document.activeElement;
    for (const Re of se) {
      const Ie = R[Re];
      let Ne = "";
      try {
        Ne = Oo[Re](D, H) || "";
      } catch {
        Ne = "";
      }
      if (Ne === Ie.html) continue;
      const Je = de && Ie.el.contains(de) ? (De = de.dataset) == null ? void 0 : De.wbFocus : void 0, pt = Ie.el.querySelector(".wbStripScroll"), _t = pt ? pt.scrollLeft : 0;
      Ie.html = Ne, Ie.el.hidden = !Ne, Ie.el.innerHTML = Ne, _t && ((je = Ie.el.querySelector(".wbStripScroll")) == null || je.scrollTo({ left: _t })), Je && !K && ((Ye = Ie.el.querySelector('[data-wb-focus="' + Je + '"]')) == null || Ye.focus());
    }
    K && ((We = b.querySelector('[data-wb-focus="' + K + '"]')) == null || We.focus(), K = null), Ct(performance.now());
  }
  function Ee() {
    q || P || (q = !0, queueMicrotask(() => {
      q = !1, An(!0);
    }));
  }
  function ze() {
    const S = getComputedStyle(b), D = (me) => S.getPropertyValue(me).trim(), H = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([me, xe]) => {
      D(xe) && (H[me] = D(xe));
    });
    const O = D("--color-text-primary") || "#f1f1f1", ce = D("--color-bg-card") || "#222222", ve = !!b.closest(".light");
    return { colors: { ...fo, ...H }, ink: ve ? O : ce, paper: ve ? ce : O };
  }
  const Gt = (S, D) => {
    var H;
    S.width !== D.w && (S.width = D.w), S.height !== D.h && (S.height = D.h), (H = S.getContext("2d")) == null || H.putImageData(new ImageData(D.data, D.w, D.h), 0, 0);
  }, En = () => h && !wp();
  function hn(S, D) {
    const H = b.querySelector("canvas[data-wb-strip]");
    if (!H || !W || !H.getClientRects().length) return;
    const O = H.clientWidth, ce = H.clientHeight;
    if (!O || !ce) return;
    const ve = { width: O, height: ce, columns: cs, colors: D.colors, clock: S, ambient: En(), seed: W.seed };
    if (u === "smooth") {
      const me = Math.min(2, window.devicePixelRatio || 1), xe = Math.round(O * me), de = Math.round(ce * me);
      H.width !== xe && (H.width = xe), H.height !== de && (H.height = de);
      const De = H.getContext("2d");
      if (!De) return;
      De.setTransform(me, 0, 0, me, 0, 0), Uu(De, W.segs, ve);
    } else Gt(H, Gu(W.segs, { ...ve, px: 2, oneBit: u === "onebit", ink: D.ink, paper: D.paper }));
  }
  function Ct(S) {
    if (P) return;
    const D = ze();
    if (u !== "smooth") {
      const H = En();
      b.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && Gt(O, rc(Cl(O.dataset.wbWx, D.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: D.colors, ink: D.ink, paper: D.paper, clock: S, idle: H }));
      });
    }
    hn(S, D);
  }
  function $n(S) {
    if (X = 0, !(P || !En())) {
      if (!document.hidden)
        if (u === "smooth") hn(S, ze());
        else {
          const D = Math.floor(S / 100);
          D !== V && (V = D, Ct(S));
        }
      X = requestAnimationFrame($n);
    }
  }
  function qt() {
    b.classList.toggle("wbMotion", En()), !X && !P && En() && (X = requestAnimationFrame($n));
  }
  function Pt(S) {
    var H, O;
    const D = (O = (H = S.target).closest) == null ? void 0 : O.call(H, "[data-wb]");
    if (!(!D || !b.contains(D))) {
      switch (D.dataset.wb) {
        case "day": {
          F.openDay = Number(D.dataset.index), F.opener = D.dataset.wbFocus, K = "back-day";
          const ce = xt()[F.openDay], ve = !Y.todayHistory || Y.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Y.todayHistory.fetched > np;
          ce && kr(new Date(ce.datetime), /* @__PURE__ */ new Date()) && ve && Q();
          break;
        }
        case "close-day":
          F.openDay = void 0, K = F.opener, F.opener = void 0;
          break;
        case "open-page":
          x == null || x();
          return;
        case "day-mode":
          F.dayMode = D.dataset.mode;
          break;
        case "hourly-mode":
          F.hourlyMode = D.dataset.mode;
          break;
        case "aq-open":
          F.aq = D.dataset.entity, oe(F.aq);
          break;
        case "aq-close":
          F.aq = void 0;
          break;
        default:
          return;
      }
      An(!0);
    }
  }
  function za(S) {
    var D, H;
    S.key === "Escape" && F.openDay !== void 0 && ((H = (D = S.target).closest) != null && H.call(D, '[data-wb-open="day"]')) && (F.openDay = void 0, K = F.opener, F.opener = void 0, An(!0));
  }
  let un = null;
  function Tt(S) {
    var H, O;
    const D = (O = (H = S.target).closest) == null ? void 0 : O.call(H, ".wbStripScroll");
    !D || S.button !== 0 || (un = { startX: S.pageX, left: D.scrollLeft, moved: !1 }, window.addEventListener("mousemove", bn), window.addEventListener("mouseup", vt, { once: !0 }));
  }
  function bn(S) {
    const D = b.querySelector(".wbStripScroll");
    if (!un || !D) return;
    const H = S.pageX - un.startX;
    !un.moved && Math.abs(H) > 1 && (un.moved = !0, D.classList.add("wbDragging")), D.scrollLeft = un.left - H;
  }
  function vt() {
    var S;
    un = null, window.removeEventListener("mousemove", bn), (S = b.querySelector(".wbStripScroll")) == null || S.classList.remove("wbDragging");
  }
  b.addEventListener("click", Pt), b.addEventListener("keydown", za), b.addEventListener("mousedown", Tt);
  const Dn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Ct(performance.now())) : null;
  Dn == null || Dn.observe(b);
  const zt = (Xn = window.matchMedia) == null ? void 0 : Xn.call(window, "(prefers-reduced-motion: reduce)"), Wo = () => {
    qt(), Ct(performance.now());
  };
  (Ga = zt == null ? void 0 : zt.addEventListener) == null || Ga.call(zt, "change", Wo);
  const ja = [
    setInterval(() => {
      ae = /* @__PURE__ */ new Date(), An(!0);
    }, lp),
    setInterval(() => {
      A = /* @__PURE__ */ new Date(), An(!0);
    }, dp),
    setInterval($, ip)
  ];
  return An(!0), qt(), {
    update() {
      An(!1);
    },
    setStyle(S) {
      !S || S === u || (u = S, An(!0), qt());
    },
    destroy() {
      var S;
      P = !0, ja.forEach(clearInterval), X && cancelAnimationFrame(X), X = 0, Dn == null || Dn.disconnect(), (S = zt == null ? void 0 : zt.removeEventListener) == null || S.call(zt, "change", Wo), vt(), b.removeEventListener("click", Pt), b.removeEventListener("keydown", za), b.removeEventListener("mousedown", Tt), ["daily", "hourly"].forEach(Ce), b.remove();
    }
  };
}
const Lr = "#E1E1E1", Vd = "#F7F4F0", pl = "#03a9f4", wt = 14, kt = 172;
let Qp = 0;
const It = (n) => Math.round(n * 100) / 100, Wa = (n, s, o) => Math.max(s, Math.min(o, n)), ho = (n, s, o, u, h, f) => '<rect x="' + It(n) + '" y="' + It(s) + '" width="' + It(o) + '" height="' + It(u) + '" fill="' + h + '"' + (f != null ? ' opacity="' + f + '"' : "") + "/>", ml = (n) => n.map((s, o) => (o ? "L" : "M") + It(s[0]) + " " + It(s[1])).join("");
function hl(n) {
  const s = (n == null ? void 0 : n.attributes) || {};
  return s.device_class === "curtain" ? "curtain" : s.device_class === "blind" || s.current_tilt_position != null ? "venetian" : "blind";
}
const Po = [
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
  let o = Po[0], u = Po[Po.length - 1];
  for (let L = 0; L < Po.length - 1; L++) if (s >= Po[L][0] && s <= Po[L + 1][0]) {
    o = Po[L], u = Po[L + 1];
    break;
  }
  const h = (s - o[0]) / (u[0] - o[0]), f = h * h * (3 - 2 * h), x = (L, b) => {
    const N = parseInt(L.slice(1), 16), se = parseInt(b.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((N >> ne & 255) + ((se >> ne & 255) - (N >> ne & 255)) * f).toString(16).padStart(2, "0")).join("");
  };
  return { top: x(o[1][0], u[1][0]), bot: x(o[1][1], u[1][1]), warm: x(o[1][2], u[1][2]), cool: x(o[1][3], u[1][3]), op: o[1][4] + (u[1][4] - o[1][4]) * f, t: s };
}
function tm(n) {
  const s = parseInt(n.slice(1), 16), o = (s >> 16 & 255) / 255, u = (s >> 8 & 255) / 255, h = (s & 255) / 255, f = Math.max(o, u, h), x = Math.min(o, u, h);
  let L = 0, b = 0;
  const N = (f + x) / 2;
  if (f !== x) {
    const se = f - x;
    b = N > 0.5 ? se / (2 - f - x) : se / (f + x), L = (f === o ? (u - h) / se + (u < h ? 6 : 0) : f === u ? (h - o) / se + 2 : (o - u) / se + 4) / 6;
  }
  return [L * 360, b * 100, N * 100];
}
function Ac(n, s, o) {
  s = Wa(s, 0, 100) / 100, o = Wa(o, 0, 100) / 100;
  const u = (x) => (x + n / 30) % 12, h = s * Math.min(o, 1 - o), f = (x) => o - h * Math.max(-1, Math.min(u(x) - 3, Math.min(9 - u(x), 1)));
  return "#" + [f(0), f(8), f(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}
const [Ec, Dc, Rc] = tm(Lr), zd = Ac(Ec, Dc, Math.max(6, Rc - 14)), nm = Ac(Ec, Dc, Math.min(96, Rc + 16));
function am(n, s, o, u, h) {
  const f = kt / 2, x = kt * 0.12, L = f - (f - x) * n, b = (z) => z ** 1.3, N = Wa(o, -1.5, 1.5), se = (z) => -(Math.abs(N) * 4.6 * z ** 1.5) * Math.sign(N), ne = n * 1.4, R = (z, X) => {
    const V = Math.min(4.8, Math.abs(o) * 2.6) * (X ? 1 : -1) * Math.sign(o || 1), q = X ? z + L : z, K = X ? z : z + L, F = (Se) => q + se(Se) + V * Math.sin(Se * Math.PI * 1.2 + u) * b(Se) * 1.4 + ne * Math.sin(Se * Math.PI * 2 + u * 0.6) * b(Se) * (X ? 1 : -1), Y = [[K, wt]];
    for (let Se = 0; Se <= 12; Se++) Y.push([F(Se / 12), wt + kt * Se / 12]);
    Y.push([K, wt + kt]);
    let ae = '<path d="' + ml(Y) + 'Z" fill="' + Lr + '"/>';
    if (h) return ae;
    const A = 1.35 + ((X ? o > 0 : o < 0) ? 0.35 : 0), W = (Se) => {
      const g = Se / 7, ke = X ? 1 - g : g, Ce = (1 - ke) ** 1.3, Fe = z + L * g;
      return Array.from({ length: 13 }, (w, C) => {
        const M = C / 12;
        return [Fe + se(M) * Ce + V * A * Math.sin(M * Math.PI * 1.2 + u - ke * 3.2) * b(M) * 1.4 * Ce + ne * 1.6 * Math.sin(M * Math.PI * 2 + u * 0.6 - ke * 2.5) * b(M) * n * (0.4 + 0.6 * Ce), wt + kt * M];
      });
    }, fe = [1, 2, 3, 4, 5, 6].map(W);
    for (let Se = 0; Se < 6; Se += 2) ae += '<path d="' + ml(fe[Se]) + ml(fe[Se + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ae;
  }, P = f - (f - x) * s;
  return { body: R(wt, !0) + R(wt + kt - L, !1), rails: [{ x: wt + P - 4, y: wt, w: 4, h: kt }, { x: wt + kt - P, y: wt, w: 4, h: kt }], head: 6.4 };
}
function om(n, s, o) {
  const u = kt * (1 - n);
  let h = "";
  if (u > 1 && (h += ho(wt, wt, kt, u, Lr), !o))
    for (let f = 1; f < 7; f += 2) h += ho(wt + kt * f / 7, wt, kt / 7, u, "#fff");
  return { body: h, rails: [{ x: wt, y: wt + kt * (1 - s) - 7, w: kt, h: 11 }], head: 10.4 };
}
function im(n, s, o, u) {
  const h = 9 - 7 * (o / 100), f = wt + kt * (1 - n), x = Math.ceil(kt / 10) + 1, L = wt + h / 2, b = (wt + kt - h / 2 - L) / (x - 1), N = 0.8, se = 0.6, ne = Array.from({ length: x }, (z, X) => Math.max(L + X * se, Math.min(L + X * b, f - h / 2 - (x - 1 - X) * se))), R = ne.slice(0, -1).map((z, X) => Wa((ne[X + 1] - z - se) / (b - se), 0, 1));
  R.push(R[x - 2]);
  let P = "";
  return ne.forEach((z, X) => {
    const V = N + (h - N) * R[X], q = Math.max(0.5, V / 2), K = Math.max(0.4, V * 0.114);
    P += ho(wt, z - q, kt, Math.max(1, V), Lr), !u && V > 2.2 && (P += ho(wt, z + q - K, kt, K, zd) + ho(wt, z - q, kt, K * 0.55, nm, 0.75));
  }), u || [0.22, 0.78].forEach((z) => {
    P += ho(wt + kt * z - 0.7, wt, 1.4, Math.max(0, ne[x - 1] + 1 - wt), zd, 0.85);
  }), { body: P, rails: [{ x: wt, y: wt + kt * (1 - s) - 8, w: kt, h: 8 }], head: 8.8 };
}
const jd = (n, s, o, u, h, f, x) => n === "curtain" ? am(s, o, h, f, x) : n === "venetian" ? im(s, o, u, x) : om(s, o, x);
function rm(n, s) {
  let o = "", u = "";
  return s.forEach((h) => {
    const f = h.w > h.h, x = Wa(f ? wt + kt / 2 : h.x + h.w / 2, 17, 183), L = Wa(f ? h.y + h.h / 2 : wt + kt / 2, 17, 183);
    o += f ? ho(wt, Wa(h.y + h.h / 2, wt, wt + kt) - 1, kt, 2, pl) : ho(Wa(h.x + h.w / 2, wt, wt + kt) - 1, wt, 2, kt, pl);
    const b = f ? "M" + It(x - 4) + " " + It(L - 3) + "l4 -3l4 3M" + It(x - 4) + " " + It(L + 3) + "l4 3l4 -3" : "M" + It(x - 3) + " " + It(L - 4) + "l-3 4l3 4M" + It(x + 3) + " " + It(L - 4) + "l3 4l-3 4";
    u += '<circle cx="' + It(x) + '" cy="' + It(L) + '" r="11" fill="' + pl + '" filter="url(#' + n + 's)"/><path d="' + b + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: u };
}
function sm(n, s) {
  const o = /* @__PURE__ */ new Date(), u = em(o.getHours() + o.getMinutes() / 60), h = 42 + 18 * Math.sin(u.t * 0.5), f = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, x = jd(s.kind, s.pos / 100, s.bar / 100, s.tilt, s.vel, s.ph, !1), L = s.ghostAlpha > 4e-3 && s.ghost != null ? jd(s.kind, s.ghost / 100, s.ghost / 100, s.tilt, 0, 0, !0).body : "", b = s.grip > 4e-3 ? rm(n, x.rails) : null, N = (se) => ho(wt, wt, kt, kt, se);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + It(h) + '%" cy="' + It(f) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + It(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + It(100 - h * 0.8) + '%" cy="' + It(100 - f * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + It(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Vd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (L ? '<g opacity="' + It(s.ghostAlpha) + '">' + L + "</g>" : "") + x.body + '<rect x="14" y="14" width="172" height="' + x.head + '" fill="' + Lr + '" filter="url(#' + n + 's)"/></g>' + (b ? '<g clip-path="url(#' + n + 'c)" opacity="' + It(s.grip) + '">' + b.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Vd + '" stroke-width="3"/>' + (b ? '<g opacity="' + It(s.grip) + '">' + b.knobs + "</g>" : "") + "</svg>";
}
function lm({ onMove: n, onSet: s }) {
  var ae;
  const o = "cv" + ++Qp, u = document.createElement("div");
  u.className = "tfCoverArt";
  const h = (ae = window.matchMedia) == null ? void 0 : ae.call(window, "(pointer: coarse)").matches;
  let f = null;
  const x = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, b = !1, N = !1, se = null, ne = 0, R = 0;
  const P = () => (f == null ? void 0 : f.kind) === "curtain" ? "x" : "y", z = () => se || b || N || f.moving || f.target != null ? 1 : h ? performance.now() < R ? 1 : 0.4 : 0, X = () => {
    u.innerHTML = sm(o, { kind: f.kind, pos: x.pos, bar: f.target ?? x.pos, tilt: x.tilt, vel: x.vel, ph: x.ph, ghost: x.gpos, ghostAlpha: x.ghost, grip: x.grip });
  };
  function V(A) {
    L = 0;
    const W = x.last ? Math.min(0.064, (A - x.last) / 1e3) : 1 / 60, fe = W * 60;
    x.last = A;
    const Se = f.pos - x.pos, g = x.pos;
    x.pos += Math.sign(Se) * Math.min(Math.abs(Se), Math.max(10.5, Math.abs(Se) * 1.4) * W), Math.abs(f.pos - x.pos) < 0.03 && (x.pos = f.pos), x.vel = x.vel * 0.86 + (x.pos - g) / fe * 0.14, Math.abs(x.vel) < 0.015 && x.pos === f.pos && (x.vel = 0), (x.pos !== g || x.vel) && (x.ph += (0.06 + Math.abs(x.vel) * 0.03) * fe);
    const ke = f.tilt - x.tilt;
    x.tilt += Math.sign(ke) * Math.min(Math.abs(ke), Math.max(60, Math.abs(ke) * 4) * W);
    const Ce = z();
    x.grip += (Ce - x.grip) * Math.min(1, W * (Ce > x.grip ? 11 : 3.5)), Math.abs(Ce - x.grip) < 0.01 && (x.grip = Ce);
    const Fe = f.target != null && Math.abs(f.target - x.pos) > 0.5 ? 0.22 : 0;
    f.target != null && (x.gpos = f.target), x.ghost += (Fe - x.ghost) * Math.min(1, W * (Fe > x.ghost ? 16 : 3)), Math.abs(Fe - x.ghost) < 4e-3 && (x.ghost = Fe), X(), x.pos !== f.pos || x.vel || x.tilt !== f.tilt || x.grip !== Ce || x.ghost !== Fe ? L = requestAnimationFrame(V) : x.last = 0;
  }
  const q = () => {
    f && !L && (L = requestAnimationFrame(V));
  }, K = setInterval(() => {
    f && !L && X();
  }, 60 * 1e3), F = (A) => {
    const W = u.getBoundingClientRect();
    return P() === "x" ? (A.clientX - W.left) / W.width : (A.clientY - W.top) / W.height;
  };
  u.addEventListener("pointerdown", (A) => {
    var Se;
    if (!(f != null && f.canSet) || A.button > 0) return;
    A.preventDefault(), (Se = u.setPointerCapture) == null || Se.call(u, A.pointerId);
    const W = f.target ?? f.pos, fe = u.getBoundingClientRect();
    se = { p0: F(A), from: W, x0: A.clientX, value: null, side: null }, f.kind === "curtain" && W > 0 && (se.side = (A.clientX - fe.left) / fe.width < 0.5 ? "L" : "R"), q();
  }), u.addEventListener("pointermove", (A) => {
    if (!se) return;
    let W;
    if (f.kind === "curtain") {
      if (!se.side) {
        const Se = A.clientX - se.x0;
        if (Math.abs(Se) < 4) return;
        se.side = Se < 0 ? "L" : "R";
      }
      const fe = (kt / 2 - kt * 0.12) / 200;
      W = se.from + (se.side === "L" ? -1 : 1) * ((F(A) - se.p0) / fe) * 100;
    } else W = se.from - (F(A) - se.p0) / (kt / 200) * 100;
    se.value = Wa(W, 0, 100), n(se.value);
  });
  const Y = () => {
    if (!se) return;
    const A = se.value;
    se = null, A != null && s(Math.round(A)), q();
  };
  return u.addEventListener("pointerup", Y), u.addEventListener("pointercancel", Y), u.addEventListener("lostpointercapture", Y), u.addEventListener("pointerenter", () => {
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
    const g = Wa(Se, 0, 100);
    n(g), clearTimeout(ne), ne = setTimeout(() => s(g), 500);
  }), {
    el: u,
    update(A) {
      const W = !f;
      f = A, W && (x.pos = f.pos, x.tilt = f.tilt, R = performance.now() + 1500, h && setTimeout(q, 1600)), u.classList.toggle("x", P() === "x"), u.classList.toggle("y", P() === "y"), f.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(f.target ?? f.pos))), u.setAttribute("aria-orientation", P() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", f.name + (f.canSet ? " position" : "")), u.setAttribute("aria-valuetext", f.text), q();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(K), clearTimeout(ne), u.remove();
    }
  };
}
const Gd = "move-assistant-density", Io = {
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
}, ue = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), fl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', dm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', cm = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', hs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Ud = 1, um = 4, Yd = 16, Zd = 32, pm = 128, mm = 256, Kd = 16384, hm = 1, fm = 2, $d = 4, gm = 8, vm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, bm = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, gl = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Xd = "move_assistant_house", Jd = "move-assistant-house-used", xm = ["switch", "fan", "input_boolean", "automation"], Qd = "move-assistant-house-look", ym = [["popup", "Popup"], ["sheet", "Sheet"]], km = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Mm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Cm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', fa = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((s) => '<path d="' + s + '"/>').join("") + "</svg>", ec = fa(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Sm = fa(["M20 6L9 17L4 12"]), Fa = {
  temp: fa(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: fa(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: fa(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: fa(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: fa(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: fa(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: fa(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: fa(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: fa(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: fa(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Tm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lm = 1, _m = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], tc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, vl = ["hs", "xy", "rgb", "rgbw", "rgbww"], bl = ["door", "window", "garage_door", "opening"], fs = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Am = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], nc = 10, Em = 20, Dm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rm = ["living room", "bedroom", "office"];
function Nm(n, { config: s, getHass: o }) {
  var io, Ur, ro;
  const u = (t) => n.getElementById(t), h = u("app"), x = String((s || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = Io.get(Gd) === "1", b = {};
  const N = (t) => {
    var i;
    return (i = o()) == null ? void 0 : i.callWS(t);
  }, se = (t, i, l) => N({ type: "call_service", domain: t, service: i, service_data: l }), ne = n.querySelector("#appearancePane .toggleList");
  ne && !u("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    L = !L, Io.set(Gd, L ? "1" : "0"), ae();
  }));
  const R = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && rt(t).device_class === "power" && /^(W|kW)$/.test(rt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], P = (t, i, l, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + i + '">' + d.map(([m, E]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + l + '="' + m + '">' + E + "</button>").join("") + "</div>", z = (t, i, l, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (i ? '<div class="status">' + i + "</div>" : "") + "</div>" + l + "</div>";
  function X() {
    var B, ee, j;
    if (!x || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const i = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], l = (G, pe) => '<div class="houseTab' + (G === "look" ? " active" : "") + '" data-house-pane="' + G + '"><section class="card">' + pe + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([G, pe]) => '<button class="tab segBtn' + (G === "look" ? " active" : "") + '" type="button" data-house-tab="' + G + '">' + pe + "</button>").join("") + "</div>" + l("look", '<div class="toggleList" id="houseLook"></div>') + l("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + l("sources", '<div class="toggleList">' + R.map(([G, pe, qe]) => z(pe, qe, '<select class="settingsSelect" data-source="' + G + '" aria-label="' + pe + '"></select>')).join("") + "</div>") + l("sums", '<div class="toggleList">' + Object.entries(gl).map(([G, pe]) => z(pe.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + G + '" aria-label="' + pe.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = u("houseLook");
    [(B = t.querySelector(".themeBtn")) == null ? void 0 : B.closest(".toggleRow"), (ee = u("densityToggle")) == null ? void 0 : ee.closest(".toggleRow"), (j = u("moreInfoChoice")) == null ? void 0 : j.closest(".toggleRow")].forEach((G) => G && d.appendChild(G)), d.insertAdjacentHTML("beforeend", z("Lights", "How lights show on the house page.", P("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + z("Pad", "What the Dual Axis Controller’s pad sets on its tile.", P("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const m = u("housePane"), E = m.querySelector(".houseTabs"), y = E.querySelector(".rubberIndicator"), v = (G) => {
      const pe = E.querySelector(".tab.active");
      y.style.transition = G ? "" : "none", y.style.left = pe.offsetLeft + "px", y.style.width = pe.offsetWidth + "px", G && (y.style.transform = "scaleX(1.08)", setTimeout(() => y.style.transform = "", 180));
    };
    new ResizeObserver(() => v(!1)).observe(E), m.addEventListener("click", (G) => {
      const pe = G.target.closest("[data-house-tab]");
      if (pe) {
        E.querySelectorAll(".tab").forEach((be) => be.classList.toggle("active", be === pe)), m.querySelectorAll(".houseTab").forEach((be) => be.classList.toggle("active", be.dataset.housePane === pe.dataset.houseTab)), pe.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0);
        return;
      }
      const qe = G.target.closest("[data-light-fav]");
      if (qe) {
        Rr(qe.dataset.lightFav);
        return;
      }
      const Oe = G.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Oe || Oe.disabled)) {
        if (Oe.dataset.lights && (xt.lights = Oe.dataset.lights), Oe.dataset.dacPad && (xt.dacPad = Oe.dataset.dacPad), (Oe.dataset.lights || Oe.dataset.dacPad) && (va(), wn.clear()), Oe.dataset.sumToggle) {
          const be = Oe.dataset.sumToggle, he = new Set(T.hiddenSums || []);
          he.has(be) ? he.delete(be) : he.add(be), T = { ...T, hiddenSums: [...he] }, Rt();
        }
        xn();
      }
    }), m.addEventListener("change", (G) => {
      const pe = G.target;
      pe.dataset.source && (T = { ...T, sources: { ...T.sources || {}, [pe.dataset.source]: pe.value || void 0 } }, Rt());
      const qe = pe.dataset.lightStyle || pe.dataset.lightPad;
      if (qe) {
        const Oe = pe.dataset.lightStyle ? "lightStyles" : "lightPads", be = { ...xt[Oe] };
        pe.value ? be[qe] = pe.value : delete be[qe], xt[Oe] = be, va(), [...wn.keys()].filter((he) => he.endsWith(":" + qe)).forEach((he) => wn.delete(he));
      }
      xn();
    });
  }
  function V() {
    var y;
    Qn() && Fn();
    const t = u("housePane");
    if (!t) return;
    const i = !!customElements.get(Yt);
    t.querySelectorAll("[data-lights]").forEach((v) => v.setAttribute("aria-pressed", String(v.dataset.lights === xt.lights))), u("lightsRow").querySelector(".status").textContent = i || !Qn() ? "How lights show on the house page." : Sa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((v) => v.setAttribute("aria-pressed", String(v.dataset.dacPad === xt.dacPad))), u("dacPadRow").hidden = !Qn();
    for (const v of t.querySelectorAll("[data-source]")) {
      if (v === n.activeElement) continue;
      const [B] = R.find(([j]) => j === v.dataset.source), ee = Object.keys(b).filter(R.find(([j]) => j === B)[3]).sort((j, G) => Pe(j).localeCompare(Pe(G)));
      v.dataset.sig !== ee.join(",") && (v.innerHTML = '<option value="">Automatic</option>' + ee.map((j) => '<option value="' + ue(j) + '">' + ue(Pe(j)) + "</option>").join(""), v.dataset.sig = ee.join(",")), v.value = ee.includes((y = T.sources) == null ? void 0 : y[B]) ? T.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((v) => {
      const B = !(T.hiddenSums || []).includes(v.dataset.sumToggle);
      v.classList.toggle("on", B), v.setAttribute("aria-checked", String(B));
    });
    const l = u("lightRows");
    if (!l || l.contains(n.activeElement)) return;
    const d = new Set(Wn()), m = (v, B, ee, j) => '<option value="' + v + '"' + (v === ee ? " selected" : "") + ">" + B + "</option>", E = Object.keys(b).filter((v) => v.startsWith("light.")).sort((v, B) => !Be.get(v) - !Be.get(B) || (Be.get(v) || "").localeCompare(Be.get(B) || "") || Pe(v).localeCompare(Pe(B))).map((v) => {
      const B = xt.lightStyles[v] || "", ee = xt.lightPads[v] || "", j = d.has(v), G = ue(Pe(v));
      return "<tr><td><strong>" + G + "</strong></td><td>" + ue(Be.get(v) || "—") + "</td><td>" + ue(Pt(v)) + '</td><td class="metaSwitchCol"><button class="switch' + (j ? " on" : "") + '" type="button" role="switch" aria-checked="' + j + '" data-light-fav="' + ue(v) + '" aria-label="' + G + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + ue(v) + '" aria-label="' + G + ' tile">' + m("", "Default", B) + m("tile", "HomeCore tile", B) + m("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + ue(v) + '" aria-label="' + G + ' pad"' + (Ua(v) ? "" : " disabled") + ">" + m("", "Default", ee) + m("temperature", "Temperature", ee) + m("colour", "Colour", ee) + "</select></td></tr>";
    }).join("");
    l.dataset.html !== E && (l.innerHTML = E, l.dataset.html = E);
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, h.appendChild(q);
  let K = 0;
  function F() {
    if (!L) return;
    const t = u("homeView"), i = (E) => E.offsetParent !== null && !E.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((E) => {
      i(E) && (E.dataset.h = Math.round(E.getBoundingClientRect().height) + " px");
    });
    const l = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(i), d = window.innerHeight, m = l.filter((E) => {
      const y = E.getBoundingClientRect();
      return y.height > 0 && y.top >= 0 && y.bottom <= d + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + m + "</b><small>of " + l.length + " readings on screen</small>";
  }
  const Y = () => {
    L && requestAnimationFrame(F);
  };
  function ae() {
    var t;
    h.classList.toggle("showDensity", L), (t = u("densityToggle")) == null || t.classList.toggle("on", L), q.hidden = !L, clearInterval(K), L && (K = setInterval(F, 1e3), F());
  }
  window.addEventListener("scroll", Y, { capture: !0, passive: !0 }), window.addEventListener("resize", Y, { passive: !0 });
  const A = n.querySelector("#homeView .grid");
  let W = null, fe = null, Se = null, g = null;
  const ke = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  let T = { favourites: null }, re = {}, $ = {}, Q = [], oe = null;
  const le = (() => {
    try {
      return JSON.parse(Io.get(Jd)) || {};
    } catch {
      return {};
    }
  })();
  let Be = /* @__PURE__ */ new Map(), et = 0;
  function Rt() {
    clearTimeout(et), et = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: Xd, value: T })).catch(() => {
    }), 400);
  }
  const xt = (() => {
    let t = {};
    try {
      t = JSON.parse(Io.get(Qd)) || {};
    } catch {
    }
    const i = (l, d) => Object.fromEntries(Object.entries(l || {}).filter(([, m]) => d.includes(m)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: i(t.lightStyles, ["tile", "dac"]),
      lightPads: i(t.lightPads, ["temperature", "colour"])
    };
  })(), va = () => Io.set(Qd, JSON.stringify(xt)), Ca = () => {
    h.dataset.more = xt.more, Pa();
  };
  x && ne && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + ym.map(([t, i]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (xt.more === t) + '" data-more-style="' + t + '">' + i + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const i = t.target.closest("[data-more-style]");
    i && (xt.more = i.dataset.moreStyle, va(), Ca(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === i))));
  })), X();
  let Le = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const it = /* @__PURE__ */ new Map();
  let nn = "";
  const qa = x ? Eu({ onChange: () => yn() }) : null;
  x && h.classList.add("house");
  const Vt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let mn = null, ct = null, tt = !1;
  function dt(t) {
    const i = Zi();
    if (h.classList.toggle("houseBento", !!i), mn && (ct !== i || t == null) && (mn.destroy(), mn = null), !i || t == null) {
      Vt.remove();
      return;
    }
    Vt.isConnected || A.append(Vt), Vt.style.order = t, !mn && !tt && (mn = qd(Vt, { getHass: o, entityId: i, style: "bitmap" }), ct = i);
  }
  const Fo = [["wx", ["current"]], ["avg", ["compared_to_average"]]], Va = Object.fromEntries(Fo.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let cn = null, vn = null;
  function ut(t) {
    const i = Zi();
    cn && vn !== i && (cn.forEach((l) => l.destroy()), cn = null), Object.values(Va).forEach((l) => i ? !l.isConnected && A.append(l) : l.remove()), i && !cn && !tt && (cn = Fo.map(([l, d]) => qd(Va[l], { getHass: o, entityId: i, style: "bitmap", cards: d, onOpen: l === "wx" ? () => Ra("weather") : void 0 })), vn = i);
  }
  const rt = (t) => {
    var i;
    return ((i = b[t]) == null ? void 0 : i.attributes) || {};
  }, Pe = (t) => rt(t).friendly_name || t, Ft = (t, i) => Ii(t) || (Number(rt(t).supported_features) & i) === i, Mt = (t) => {
    const i = String(t ?? "").replace(/_/g, " ");
    return i.charAt(0).toUpperCase() + i.slice(1);
  }, ht = (t, i = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: i, maximumFractionDigits: i }), _n = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ge = (t) => rt(t).supported_color_modes || [], zi = (t) => {
    const i = t / 100;
    return [i <= 66 ? 255 : 329.7 * Math.pow(i - 60, -0.1332), i <= 66 ? 99.47 * Math.log(i) - 161.12 : 288.12 * Math.pow(i - 60, -0.0755), i >= 66 ? 255 : i <= 19 ? 0 : 138.52 * Math.log(i - 10) - 305.04];
  }, Oo = (t, i) => [5, 3, 1].map((l) => {
    const d = (l + t / 60) % 6;
    return 255 * (1 - i / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function An(t) {
    const i = rt(t), l = (i.rgb_color || (i.hs_color && i.color_mode !== "color_temp" ? Oo(...i.hs_color) : i.color_temp_kelvin ? zi(i.color_temp_kelvin) : [255, 170, 0])).map((m) => Math.round(Math.max(0, Math.min(255, m)))), d = (0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]) / 255 > 0.8;
    return "--light:rgb(" + l.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Ee = (t) => {
    var i;
    return t.startsWith("light.") && ((i = b[t]) == null ? void 0 : i.state) === "on" ? ' data-light style="' + An(t) + '"' : "";
  }, ze = (t) => {
    const i = Ge(t);
    return i.length ? i.some((l) => l !== "onoff") : rt(t).brightness != null;
  }, Gt = (t) => [rt(t).min_color_temp_kelvin || 2e3, rt(t).max_color_temp_kelvin || 6500], En = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function hn(t) {
    const i = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (i < 10) return "Just now";
    if (i < 60) return i + " seconds ago";
    const l = Math.round(i / 60);
    if (l < 60) return l + (l === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(l / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const m = Math.round(d / 24);
    return m + (m === 1 ? " day ago" : " days ago");
  }
  const Ct = (t) => {
    var i;
    return rt(t).current_position ?? (((i = b[t]) == null ? void 0 : i.state) === "closed" ? 0 : 100);
  }, $n = (t) => {
    var i;
    return Lt("pos", t, ((i = w.get(t)) == null ? void 0 : i.pos) ?? Ct(t));
  }, qt = (t) => {
    var i;
    return Lt("tilt", t, ((i = w.get(t)) == null ? void 0 : i.tilt) ?? rt(t).current_tilt_position);
  };
  function Pt(t) {
    var y;
    const i = b[t];
    if (!i) return "Not found";
    if (i.state === "unavailable") return "Unavailable";
    const l = i.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (i.state !== "on") return "Off";
      const v = l.color_temp_kelvin;
      return (ze(t) ? _n(i) + "%" : "On") + (l.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : vl.includes(l.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (i.state === "off" ? "Off" : Mt(l.hvac_action || i.state)) + " · " + ht(l.current_temperature) + " °C now";
    if (d === "cover") {
      const v = Ct(t), B = l.current_tilt_position;
      return i.state === "opening" || i.state === "closing" ? Mt(i.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (B > 0 && B < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return i.state !== "on" ? "Off" : Mt(l.action || "on") + " · " + l.current_humidity + "% now";
    if (d === "vacuum") return Mt(i.state) + (i.state === "cleaning" && ((y = l.rooms) != null && y.length) ? " · " + l.rooms.join(", ") : "") + (l.battery_level != null ? " · " + l.battery_level + "%" : "");
    if (d === "media_player") return i.state === "playing" || i.state === "paused" ? (i.state === "paused" ? "Paused · " : "") + (l.media_title || "Playing") : Mt(i.state);
    if (d === "alarm_control_panel") return tc[i.state] || Mt(i.state);
    if (d === "lock" || d === "valve") return Mt(i.state);
    if (d === "switch") return i.state === "on" ? "On" : "Off";
    if (d === "plant") return i.state === "ok" ? "Healthy" : Mt(l.problem);
    if (d === "binary_sensor")
      return l.device_class === "moisture" ? i.state === "on" ? "Wet" : "Dry" : bl.includes(l.device_class) ? i.state === "on" ? "Open" : "Closed" : i.state === "on" ? "Detected" : "Clear";
    if (l.rang) return "Rang at " + En(l.rang);
    const m = o();
    if (m != null && m.formatEntityState && !Ii(t))
      try {
        return m.formatEntityState(i);
      } catch {
      }
    const E = Number(i.state);
    if (i.state !== "" && Number.isFinite(E)) {
      const v = Math.abs(E) >= 100 ? 0 : Math.abs(E) >= 10 ? 1 : 2, B = l.unit_of_measurement ? l.unit_of_measurement === "%" ? "%" : " " + l.unit_of_measurement : "";
      return E.toLocaleString(void 0, { maximumFractionDigits: v }) + B + (l.plant_low ? " · Low" : l.plant_high ? " · High" : "");
    }
    return Mt(i.state);
  }
  const za = (t) => t >= 1e3 ? ht(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function un(t) {
    const i = o();
    t.querySelectorAll("[data-icon-for]").forEach((l) => {
      var E;
      const d = b[l.dataset.iconFor], m = l.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !m) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (l.textContent = "", y = document.createElement("ha-state-icon"), l.appendChild(y)), y.hass = i, y.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let y = l.firstElementChild;
        (!y || y.localName !== "ha-icon") && (l.textContent = "", y = document.createElement("ha-icon"), l.appendChild(y)), y.icon = m || ((E = d == null ? void 0 : d.attributes) == null ? void 0 : E.icon) || "mdi:circle-medium";
      } else l.textContent || (l.textContent = (l.dataset.letter || Pe(l.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Tt = (t, i, l) => ' data-icon-for="' + ue(t) + '"' + (i ? ' data-icon-name="' + ue(i) + '"' : "") + (l ? ' data-letter="' + ue(l) + '"' : ""), bn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : rt(t).rang ? "mdi:doorbell" : "", vt = (t, i, l, d) => ue([t, i, l, d ? JSON.stringify(d) : ""].join("|")), Dn = (t) => ue(JSON.stringify(t));
  function zt(t, i) {
    var m, E;
    const l = ue(Pe(i) + ", " + Pt(i));
    return '<div class="activityRow' + (Number.isFinite(Number((m = b[i]) == null ? void 0 : m.state)) && ((E = b[i]) == null ? void 0 : E.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + ue(t + "|" + i) + '" aria-label="' + l + '. Show the last 24 hours"' : '" aria-label="' + l + '"') + '><div class="tfIcon" aria-hidden="true"' + Tt(i, bn(i)) + '></div><div><div class="activityRowName">' + ue(Pe(i)) + '</div><div class="activityRowMeta">' + ue(Pt(i)) + "</div></div></div>";
  }
  const Wo = (t, i, l) => '<div class="activityRow" aria-label="' + ue(t + ", " + i) + '"><div class="tfIcon" aria-hidden="true"' + Tt("", l, t) + '></div><div><div class="activityRowName">' + ue(t) + '</div><div class="activityRowMeta">' + ue(i) + "</div></div></div>";
  function ja(t) {
    var l;
    const i = ((l = b[t]) == null ? void 0 : l.state) === "on";
    return '<div class="activityRow tfPlug' + (i ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + vt("switch", "toggle", t) + '" aria-label="Turn ' + ue(Pe(t)) + (i ? " off" : " on") + '"' + Tt(t) + '></button><div><div class="activityRowName">' + ue(Pe(t)) + '</div><div class="activityRowMeta">' + ue(Pt(t)) + "</div></div></div>";
  }
  const Xn = (t) => {
    var i;
    return ((i = Ce.get(t)) == null ? void 0 : i.name) ?? Pe(t);
  }, Ga = (t) => {
    var i;
    return ((i = Ce.get(t)) == null ? void 0 : i.text) ?? Pt(t);
  };
  function S(t) {
    var l;
    const i = (l = Ce.get(t)) == null ? void 0 : l.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (i ? Tt("", i, Xn(t)) : Tt(t, bn(t))) + '></div><div><div class="activityRowName">' + ue(Xn(t)) + '</div><div class="activityRowMeta">' + ue(Ga(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + ue(Xn(t)) + '’s last 24 hours">' + fl + '</button></div><svg class="tfGraph" data-graph="' + ue(t) + '" role="img" aria-label="' + ue(Xn(t)) + ', last 24 hours"></svg></div>';
  }
  function D(t, i, l, d, m = "", E = null, y = "") {
    const v = W && W.key === t;
    return '<section class="card tfCard' + (y ? " " + y : "") + (v ? " open" : "") + '" data-tf data-k="' + ue(t) + '" style="order:' + i + (v && W.h ? ";min-height:" + W.h + "px" : "") + '" aria-label="' + ue(l) + '"><div class="activityHeader">' + (E ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + ue(E) + '" aria-label="' + ue(l + ", " + Pt(E) + ". More info") + '">' + ue(l) + "</button>" : '<div class="activityTitle">' + ue(l) + "</div>") + "</div>" + (v ? S(W.id) : '<div class="activityRows">' + d.join("") + "</div>" + m) + "</section>";
  }
  function H(t, i) {
    const l = "readings:" + t.id, d = t.readings.map((m) => zt(l, m));
    return t.power != null && d.push(Wo("Power now", za(t.power), "mdi:flash")), D(l, i, "Readings", d.concat(t.plugs.map(ja)));
  }
  function O(t, i) {
    var v;
    const l = "energy:" + t.id, [d, m] = [t.solar.find((B) => B.endsWith("_power")), t.solar.find((B) => B.endsWith("_today"))], E = [d, m].filter(Boolean).map((B) => zt(l, B)), y = Number(((v = b[d]) == null ? void 0 : v.state) || 0) * 1e3;
    return Le.grid && (E.push(zt(l, Le.grid)), E.push(Wo("House use", za(y + Number(b[Le.grid].state)), "mdi:home-lightning-bolt"))), D(l, i, "Energy", E, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ce = (t, i) => D("plant:" + t.id, i, Pe(t.id), t.readings.map((l) => zt("plant:" + t.id, l)), "", t.id), ve = (t) => D("openings", t, "Doors and windows", Le.security.openings.map((i) => zt("openings", i)));
  function me(t, i, l, d, m, E, y = null) {
    const v = l == null ? null : Math.max(0, Math.min(1, l)), B = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + ue(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + B + '"' + (m ? ' aria-valuetext="' + ue(m) + '"' : "") + ' data-drag="' + ue(t + "|" + i) + '">' + (y != null ? '<span class="was" aria-hidden="true" style="left:' + y + '%"></span>' : "") + (E ? v == null ? "" : '<b style="left:' + B + '%"></b>' : '<i style="width:' + B + '%"></i>') + "</div>";
  }
  const xe = "move-assistant-house-last-bright", de = (() => {
    try {
      return JSON.parse(Io.get(xe)) || {};
    } catch {
      return {};
    }
  })();
  let De = 0;
  const je = (t, i) => {
    !i || de[t] === i || (de[t] = i, clearTimeout(De), De = setTimeout(() => Io.set(xe, JSON.stringify(de)), 500));
  }, Ye = (t, i, l, d) => '<div class="tfStep" role="group" aria-label="' + ue(t) + '"><button type="button" data-act="' + l + '" aria-label="Lower ' + ue(t.toLowerCase()) + '">−</button><output>' + ue(i) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + ue(t.toLowerCase()) + '">+</button></div>', We = (t, i, l) => '<div class="' + t + '" role="group" aria-label="' + ue(i) + '">' + l.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + ue(d.aria) + '"' : "") + ">" + (d.html || ue(d.label)) + "</button>").join("") + "</div>", Re = (t, i) => "width:" + Math.round(Math.max(0, Math.min(1, (t - i * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * i / 3).toFixed(2), Ie = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", Ne = (t, i) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + ue(Pe(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-blocks="' + ue(t) + '">' + [0, 1, 2, 3].map((l) => '<span><i style="' + Re(i, l) + '"></i><b' + (i >= (l + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (l + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Ie(i) + '">' + Math.round(i) + "%</output></div>";
  function Je(t, i) {
    t.querySelectorAll(":scope>span").forEach((d, m) => {
      d.firstElementChild.setAttribute("style", Re(i, m)), d.lastElementChild.classList.toggle("lit", i >= (m + 1) * 25 - 12);
    });
    const l = t.querySelector(".tfTip");
    l.setAttribute("style", Ie(i)), l.textContent = Math.round(i) + "%", t.setAttribute("aria-valuenow", String(Math.round(i))), t.setAttribute("aria-valuetext", Math.round(i) + "% open");
  }
  const pt = (t, i) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + ue(Pe(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(i) + '" aria-valuetext="' + Math.round(i) + '% open" data-drag="tilt|' + ue(t) + '"><i style="width:calc((100% - 6px) * ' + i / 100 + ')"></i><span' + (i > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (i > 92 ? ' class="lit"' : "") + ">Open</span></div>", _t = (t, i, l) => '<div class="tfCoverBtns" role="group" aria-label="' + ue(Pe(t)) + '">' + [
    Ft(t, hm) && ["open", "Open", "open_cover", i >= 100 && !l],
    Ft(t, gm) && ["stop", "Stop", "stop_cover", !1],
    Ft(t, fm) && ["close", "Close", "close_cover", i <= 0 && !l]
  ].filter(Boolean).map(([d, m, E, y]) => '<button type="button" data-act="' + vt("cover", E, t) + '" aria-label="' + m + '"' + (y ? " disabled" : "") + ">" + vm[d] + "</button>").join("") + "</div>", bt = (t, i) => '<button class="tfIcon' + (i.art ? " art" : "") + '" type="button" data-act="' + i.button.act + '" aria-label="' + ue(i.button.label) + '"' + (i.art ? ' style="background-image:url(&quot;' + ue(i.art) + '&quot;)"' : Tt(t, i.icon)) + "></button>", Ut = (t) => '<button class="tfName" type="button" data-more="' + ue(t) + '" aria-label="' + ue(Pe(t) + ", " + Pt(t) + ". More info") + '"><span class="activityRowName">' + ue(Pe(t)) + '</span><span class="activityRowMeta">' + ue(Pt(t)) + "</span></button>";
  function an(t, i = !1, l = null) {
    if (t.startsWith("light.") && ft(t)) return '<div class="tfDac" data-k="' + ue(t) + '" data-dac="' + (i ? "more:" : l ? "dash:" : "tile:") + ue(t) + '"></div>';
    const d = Ya(t), m = l || (i && t.startsWith("light.") ? ["bright"] : null), E = d.sections.map((y, v) => y && (!m || m.includes((d.parts || [])[v])) ? y : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + ue(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Ee(t) + '><div class="tfActionHead">' + bt(t, d) + Ut(t) + "</div>" + E.join("") + "</div>";
  }
  const Yt = "dual-controller-v3", Jn = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.1/dist/dual-axis-controller-v4.js";
  let Sa = null;
  async function Fn() {
    if (Sa || customElements.get(Yt)) return;
    Sa = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), i = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Yt), new Promise((d) => setTimeout(d, i ? 8e3 : 0))]), customElements.get(Yt)) return;
    const l = Object.assign(document.createElement("script"), { src: Jn });
    l.onerror = () => {
      Sa = "failed", V();
    }, document.head.appendChild(l);
  }
  const wn = /* @__PURE__ */ new Map(), Ua = (t) => (xt.lightStyles[t] || xt.lights) === "dac", Qn = () => xt.lights === "dac" || Object.values(xt.lightStyles).includes("dac");
  function ft(t) {
    return Ua(t) && !!customElements.get(Yt);
  }
  const ea = (t) => xt.lightPads[t] || xt.dacPad, On = () => {
    const t = o();
    return t && { ...t, themes: { ...t.themes || {}, darkMode: !h.classList.contains("light") } };
  }, ta = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", ba = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", qo = (t, i) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: ba + (i ? ta : "") })).dataset.tf = "");
  };
  function Rn(t) {
    t.querySelectorAll("[data-dac]").forEach((i) => {
      const l = i.dataset.dac, d = l.startsWith("dash:");
      let m = wn.get(l);
      if (!m) {
        const E = l.slice(l.indexOf(":") + 1);
        m = document.createElement(Yt), m.setConfig({ type: "custom:" + Yt, entity: E, pad: ea(E), ...d ? { tap_action: { action: "none" } } : {} }), wn.set(l, m);
      }
      m.hass = On(), m.parentNode !== i && i.replaceChildren(m), qo(m, d);
    });
  }
  function rn() {
    const t = On();
    wn.forEach((i, l) => {
      i.isConnected ? i.hass = t : wn.delete(l);
    });
  }
  customElements.whenDefined(Yt).then(() => {
    x && (A != null && A.querySelector("[data-tf]")) && xa(xn);
  });
  const Lt = (t, i, l) => Fe.has(t + "|" + i) ? Fe.get(t + "|" + i) : l;
  function Ya(t) {
    var E;
    const i = b[t], l = i.attributes, d = t.split(".")[0], m = (y, v) => ({ act: vt(y, "toggle", t), label: v });
    if (d === "light") {
      const y = i.state === "on", v = Ge(t), [B, ee] = Gt(t), j = Lt("bright", t, _n(i));
      y && je(t, _n(i));
      const G = Lt("ct", t, y && l.color_mode === "color_temp" ? l.color_temp_kelvin : null), pe = Lt("hue", t, y && vl.includes(l.color_mode) && l.hs_color ? l.hs_color[0] : null);
      return { on: y, button: m("light", "Turn " + Pe(t) + (y ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ze(t) && me("bright", t, j / 100, Pe(t) + " brightness", j + "%", !1, y ? null : de[t] ?? null),
        v.includes("color_temp") && me("ct", t, G == null ? null : (G - B) / (ee - B), Pe(t) + " warm to cool", G == null ? "" : Math.round(G) + " kelvin", !0),
        v.some((qe) => vl.includes(qe)) && me("hue", t, pe == null ? null : pe / 360, Pe(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const y = l.target_temp_step || 0.5, v = Number(l.temperature);
      return { on: i.state !== "off", tone: i.state === "cool" || l.hvac_action === "cooling" ? "cool" : "heat", button: m("climate", "Turn " + Pe(t) + (i.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && Ye("Target temperature", ht(v) + " °C", vt("climate", "set_temperature", t, { temperature: v - y }), vt("climate", "set_temperature", t, { temperature: v + y })),
        We("tfSeg", "Mode", (l.hvac_modes || []).map((B) => ({ label: Mt(B), act: vt("climate", "set_hvac_mode", t, { hvac_mode: B }), pressed: i.state === B })))
      ] };
    }
    if (d === "cover") {
      const y = i.state === "opening" || i.state === "closing", v = i.state === "closed", B = $n(t), ee = qt(t);
      return { on: !v, tone: "blue", icon: bm[hl(i)][v ? 1 : 0], button: m("cover", (v ? "Open " : "Close ") + Pe(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ft(t, $d) && Ne(t, B),
        ee != null && pt(t, ee),
        _t(t, B, y)
      ] };
    }
    if (d === "humidifier") {
      const y = Number(l.humidity);
      return { on: i.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: m("humidifier", "Turn " + Pe(t) + (i.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(y) && Ye("Target humidity", y + "%", vt("humidifier", "set_humidity", t, { humidity: y - 1 }), vt("humidifier", "set_humidity", t, { humidity: y + 1 })),
        ((E = l.available_modes) == null ? void 0 : E.length) && We("tfSeg", "Mode", l.available_modes.map((v) => ({ label: Mt(v), act: vt("humidifier", "set_mode", t, { mode: v }), pressed: l.mode === v })))
      ] };
    }
    if (d === "media_player") {
      const y = i.state === "playing", v = i.state === "off" || i.state === "standby", B = Lt("vol", t, l.volume_level), ee = v ? { act: vt("media_player", Ft(t, pm) ? "turn_on" : "toggle", t), label: "Turn " + Pe(t) + " on" } : i.state === "playing" || i.state === "paused" ? { act: vt("media_player", "media_play_pause", t), label: (y ? "Pause " : "Play ") + Pe(t) } : { act: vt("media_player", Ft(t, mm) ? "turn_off" : "toggle", t), label: "Turn " + Pe(t) + " off" };
      return { on: !v, tone: "blue", art: !v && l.entity_picture ? l.entity_picture : null, button: ee, parts: ["playback", "volume"], sections: v ? [] : [
        (Ft(t, Yd) || Ft(t, Zd) || Ft(t, Ud) || Ft(t, Kd)) && We("tfSeg", "Playback", [
          { html: hs.prev, aria: "Previous", act: vt("media_player", "media_previous_track", t), disabled: !Ft(t, Yd) },
          { html: y ? hs.pause : hs.play, aria: y ? "Pause" : "Play", act: vt("media_player", "media_play_pause", t), disabled: !(Ft(t, Ud) || Ft(t, Kd)) },
          { html: hs.next, aria: "Next", act: vt("media_player", "media_next_track", t), disabled: !Ft(t, Zd) }
        ]),
        Ft(t, um) && B != null && me("vol", t, B, Pe(t) + " volume", Math.round(B * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const y = i.state === "cleaning", v = l.rooms || [], B = (j) => v.includes(j) ? v.filter((G) => G !== j) : v.concat(j), ee = vt("vacuum", y ? "pause" : "start", t, Ii(t) ? { rooms: v } : null);
      return { on: y || i.state === "returning", tone: "blue", button: { act: ee, label: (y ? "Pause " : "Start ") + Pe(t) }, parts: ["controls", "rooms"], sections: [
        We("tfSeg", Pe(t), [
          { label: y ? "Pause" : "Start", act: ee },
          { label: "Dock", act: vt("vacuum", "return_to_base", t), disabled: i.state === "docked" },
          { label: "Locate", act: vt("vacuum", "locate", t) }
        ]),
        Ii(t) && We("tfChips", "Rooms to clean", Le.rooms.filter((j) => j.id !== "balcony").map((j) => ({ label: j.name, act: vt("vacuum", "set_rooms", t, { rooms: B(j.name) }), pressed: v.includes(j.name) })))
      ] };
    }
    if (d === "lock") {
      const y = i.state === "locked";
      return { on: !y, tone: "heat", button: { act: vt("lock", y ? "unlock" : "lock", t), label: (y ? "Unlock " : "Lock ") + Pe(t) }, parts: ["controls"], sections: [
        We("tfSeg", Pe(t), [
          { label: "Lock", act: vt("lock", "lock", t), pressed: y },
          { label: "Unlock", act: vt("lock", "unlock", t), pressed: i.state === "unlocked" },
          Ft(t, Lm) && { label: "Open", act: vt("lock", "open", t), pressed: i.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const y = i.state === "disarmed";
      return { on: !y, tone: i.state === "triggered" ? "alarm" : "blue", button: { act: vt("alarm_control_panel", y ? "alarm_arm_away" : "alarm_disarm", t), label: y ? "Arm " + Pe(t) + ", away" : "Disarm " + Pe(t) }, parts: ["controls"], sections: [
        We("tfSeg", Pe(t), _m.filter(([, , , v]) => !v || Ft(t, v)).map(([v, B, ee]) => ({ label: B, act: vt("alarm_control_panel", ee, t), pressed: i.state === v })))
      ] };
    }
    if (d === "valve") {
      const y = i.state === "open";
      return { on: y, tone: "blue", icon: "mdi:sprinkler-variant", button: m("valve", (y ? "Close " : "Open ") + Pe(t)), parts: ["controls"], sections: [
        We("tfSeg", Pe(t), [
          { label: "Open", act: vt("valve", "open_valve", t), pressed: y },
          { label: "Close", act: vt("valve", "close_valve", t), pressed: !y }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Pe(t) }, sections: [] };
  }
  const Xt = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : ht(t)) + "°";
  function ji(t) {
    const i = (he) => t.readings.find((ie) => rt(ie).device_class === he), l = i("temperature"), d = i("humidity"), m = (he) => {
      var ie;
      return Number((ie = b[he]) == null ? void 0 : ie.state);
    }, E = (he) => t.actions.filter((ie) => he.test(ie)), y = t.lights.filter((he) => {
      var ie;
      return ((ie = b[he]) == null ? void 0 : ie.state) === "on";
    }), v = E(/^cover\./), B = v.filter((he) => {
      var ie;
      return ((ie = b[he]) == null ? void 0 : ie.state) !== "closed";
    }), ee = [...new Set(v.map((he) => hl(b[he])))], j = E(/^climate\./)[0], G = E(/^humidifier\./)[0], pe = E(/^media_player\./), qe = pe.find((he) => {
      var ie;
      return ((ie = b[he]) == null ? void 0 : ie.state) === "playing";
    }) || pe.find((he) => {
      var ie;
      return ((ie = b[he]) == null ? void 0 : ie.state) === "paused";
    }), Oe = t.plugs.filter((he) => {
      var ie;
      return ((ie = b[he]) == null ? void 0 : ie.state) === "on";
    }), be = [];
    if (l && Number.isFinite(m(l)) && be.push({ key: "temp", id: l, kind: "reading", icon: Fa.temp, label: "Temperature", value: ht(m(l)) + "°" }), d && Number.isFinite(m(d)) && be.push({ key: "hum", id: d, kind: "reading", icon: Fa.hum, label: "Humidity", value: Math.round(m(d)) + "%" }), t.lights.length && be.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Fa.lights,
      label: "Lights",
      value: y.length ? y.length + " of " + t.lights.length + " on" : "All off",
      short: y.length ? y.length + " on" : "Off",
      on: y.length > 0,
      light: y.length ? An(y[0]) : "",
      acts: t.lights.map((he) => ["light", y.length ? "turn_off" : "turn_on", he]),
      aria: (y.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), v.length) {
      const he = ee.length === 1 ? wm[ee[0]] : "covers", ie = Math.round(v.reduce((at, Wt) => at + Ct(Wt), 0) / v.length);
      be.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Fa.covers,
        label: Mt(he),
        value: ie <= 0 ? "Closed" : ie >= 100 ? "Open" : ie + "% open",
        short: ie <= 0 ? "Closed" : ie + "%",
        on: B.length > 0,
        acts: v.map((at) => ["cover", B.length ? "close_cover" : "open_cover", at]),
        aria: (B.length ? "Close the " : "Open the ") + he + " in " + t.name
      });
    }
    if (j) {
      const he = rt(j), ie = b[j].state === "off";
      be.push({
        key: "climate",
        kind: "control",
        tone: he.hvac_action === "cooling" ? "cool" : "heat",
        icon: Fa.climate,
        label: Pe(j),
        value: ie ? "Off" : Mt(he.hvac_action || b[j].state) + " · " + Xt(he.temperature),
        short: ie ? "Off" : Xt(he.temperature),
        on: !ie,
        acts: [["climate", "toggle", j]],
        aria: "Turn " + Pe(j) + (ie ? " on" : " off")
      });
    }
    if (G) {
      const he = b[G].state === "on";
      be.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Fa.humidifier,
        label: Pe(G),
        value: he ? "On · " + rt(G).humidity + "%" : "Off",
        short: he ? rt(G).humidity + "%" : "Off",
        on: he,
        acts: [["humidifier", "toggle", G]],
        aria: "Turn " + Pe(G) + (he ? " off" : " on")
      });
    }
    if (pe.length) {
      const he = qe || pe[0], ie = b[he], at = ie.state === "playing";
      be.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Fa.media,
        label: Pe(he),
        value: Pt(he),
        short: at ? "Playing" : ie.state === "paused" ? "Paused" : Mt(ie.state),
        on: at,
        acts: [["media_player", ie.state === "playing" || ie.state === "paused" ? "media_play_pause" : "toggle", he]],
        aria: (at ? "Pause " : "Play ") + Pe(he)
      });
    }
    return t.plugs.length && be.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Fa.plugs,
      label: "Plugs",
      value: Oe.length ? Oe.length + " of " + t.plugs.length + " on" : "All off",
      short: Oe.length ? Oe.length + " on" : "Off",
      on: Oe.length > 0,
      acts: t.plugs.map((he) => ["switch", Oe.length ? "turn_off" : "turn_on", he]),
      aria: (Oe.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((he) => be.push(rt(he).device_class === "moisture" ? { key: "alert:" + he, kind: "alert", icon: Fa.alert, label: "Water leak" } : { key: "note:" + he, kind: "note", icon: Fa.door, label: Pe(he) + " " + Pt(he).toLowerCase() })), be;
  }
  const _r = (t, i) => {
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
          var E;
          return ((E = b[m]) == null ? void 0 : E.state) === "playing";
        }) || d.find((m) => {
          var E;
          return ((E = b[m]) == null ? void 0 : E.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[i] || [];
  }, Ar = (t, i, l) => '<button class="' + i + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Dn(t.acts) + '" aria-label="' + ue(t.aria) + '" aria-pressed="' + t.on + '">' + l + "</button>", ii = (t) => '<button class="pill" type="button" data-go="' + ue(t.id) + '" aria-label="Go to ' + ue(t.name) + '">Go</button>', Er = (t) => t.filter((i) => i.kind === "alert" || i.kind === "note").map((i) => '<span class="sourceTag">' + ue(i.label) + "</span>").join(" "), Cs = (t) => t.readings.find((i) => rt(i).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((i) => b[i]) || null, ri = (t, i) => {
    const l = Pe(i);
    return l.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Mt(l.slice(t.name.length + 1)) : l;
  };
  function Gi(t) {
    const i = b[t], l = rt(t), d = t.split(".")[0], m = Number(i.state);
    if (i.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(m)) {
      if (l.device_class === "temperature") return { text: Xt(m) };
      const E = l.unit_of_measurement || "";
      return E === "%" ? { text: Math.round(m) + "%" } : { text: ht(m, Number.isInteger(m) ? 0 : 1), unit: E };
    }
    if (d === "climate" && (l.current_temperature ?? l.temperature) != null) return { text: Xt(l.current_temperature ?? l.temperature) };
    if (d === "light") return { text: i.state !== "on" ? "Off" : ze(t) ? _n(i) + "%" : "On" };
    if (d === "cover") {
      const E = Ct(t);
      return { text: E <= 0 ? "Closed" : E >= 100 ? "Open" : E + "%" };
    }
    return d === "humidifier" ? { text: i.state === "on" ? l.humidity + "%" : "Off" } : d === "media_player" ? { text: i.state === "playing" ? "Playing" : i.state === "paused" ? "Paused" : Mt(i.state) } : { text: Pt(t) };
  }
  const Ui = (t, i, l) => {
    const d = l.find((v) => v.key === "temp"), m = l.find((v) => v.key === "hum"), E = rt(i), y = b[i].state === "off";
    return i.startsWith("climate.") ? [ri(t, i), y ? "Off" : Mt(E.hvac_action || b[i].state) + (E.temperature != null ? " · " + Xt(E.temperature) : ""), m && m.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === i) && ri(t, i), d && d.id !== i && d.value, m && m.id !== i && m.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Ss(t, i, l) {
    const d = l && Gi(l), m = l ? Ui(t, l, i) : "", E = (v) => {
      const B = _r(t, v.key);
      return B.length === 1 ? B[0] : "group:" + t.id + ":" + v.key;
    }, y = i.filter((v) => v.kind === "control").slice(0, 4).map((v) => '<div class="tfATile' + (v.on ? " on" : "") + '" data-tone="' + v.tone + '"' + (v.light ? ' data-light style="' + v.light + '"' : "") + ">" + Ar(v, "tfIcon", v.icon) + '<button class="tfName" type="button" data-more="' + ue(E(v)) + '" aria-label="' + ue(t.name + " " + v.label.toLowerCase() + ", " + v.value + ". Open") + '"><span class="activityRowName">' + ue(v.label) + '</span><span class="activityRowMeta">' + ue(v.value) + "</span></button></div>");
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + ue(t.name) + "</div>" + Er(i) + "</div>" + ii(t) + "</div>" + (l ? '<button class="tfABig" type="button" data-more="' + ue(l) + '" aria-label="' + ue(Pe(l) + ", " + Pt(l) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + ue(d.text) + (d.unit ? '<span class="tfABigUnit">' + ue(d.unit) + "</span>" : "") + "</span>" + (m ? '<span class="tfABigSub">' + ue(m) + "</span>" : "") + "</button>" : "") + (y.length ? '<div class="tfATiles">' + y.join("") + "</div>" : "");
  }
  function Ts(t) {
    const i = t.id === fe, l = ji(t), d = Cs(t), m = d && Gi(d), E = [...l.filter((y) => y.kind === "control"), ...l.filter((y) => y.kind !== "control" && y.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (i ? " active" : "") + '" data-area="' + ue(t.id) + '" tabindex="0" aria-expanded="' + i + '" aria-label="' + ue(t.name) + '"><div class="panelExpanded"' + (i ? "" : " inert") + ">" + Ss(t, l, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop"><span class="tfACMain">' + (m ? ue(m.text + (m.unit ? " " + m.unit : "")) : "") + '</span><span class="tfACName">' + ue(t.name) + '</span></div><span class="tfACTiles" aria-hidden="true">' + E.map((y) => '<span class="tfACTile"><span class="tfIcon' + (y.kind === "alert" ? " alert" : "") + '"' + (y.on && y.light ? ' data-light style="' + y.light + '"' : "") + ">" + y.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Za = [];
  const Vo = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Za.map(Ts).join("") + "</section></div>", Ls = () => [
    { key: "home", name: "Home", ids: Le.homeVacuums },
    { key: "security", name: "Security", ids: [...Le.security.alarms, ...Le.security.locks] },
    ...Le.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], zo = (t, i, l) => t + " " + (t === 1 ? i : l), Wn = () => (T.favourites ?? re.favorite_entities ?? []).filter((t) => b[t]);
  function Dr(t = 8) {
    const i = Wn();
    if (re.hide_suggested_entities) return i;
    if (!oe) {
      const d = Object.entries(le).sort((E, y) => y[1] - E[1]).map(([E]) => E), m = Le.rooms.flatMap((E) => E.actions);
      oe = [.../* @__PURE__ */ new Set([...Q, ...d, ...m.filter((E) => Ya(E).on), ...m])];
    }
    const l = (d) => b[d] && b[d].state !== "unavailable" && !i.includes(d);
    return [...i, ...oe.filter(l)].slice(0, Math.max(t, i.length));
  }
  const Yi = (t) => {
    const i = Wn().includes(t);
    return '<button class="tfStar" type="button" data-star="' + ue(t) + '" aria-pressed="' + i + '" aria-label="Favourite: ' + ue(Pe(t)) + '">' + Tm(i) + "</button>";
  };
  function Ta(t, { area: i = !1, star: l = !1 } = {}) {
    var ee;
    const d = t.split(".")[0], m = fs.includes(d) ? Ya(t) : null, E = m ? m.on : ["on", "open", "playing"].includes((ee = b[t]) == null ? void 0 : ee.state), y = m ? m.button : xm.includes(d) ? { act: vt(d, "toggle", t), label: "Turn " + Pe(t) + (E ? " off" : " on") } : d === "scene" || d === "script" ? { act: vt(d, "turn_on", t), label: "Run " + Pe(t) } : null, v = Pt(t) + (i && Be.get(t) ? " · " + Be.get(t) : ""), B = (m == null ? void 0 : m.icon) || bn(t);
    return '<div class="activityRow' + (y ? " tfPlug" : "") + (E ? " on" : "") + (l ? " tfPick" : "") + '" data-k="' + ue((i ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (m == null ? void 0 : m.tone) || "blue") + '"' + Ee(t) + ">" + (y && !l ? '<button class="tfIcon" type="button" data-act="' + y.act + '" aria-label="' + ue(y.label) + '"' + Tt(t, B) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Tt(t, B) + "></div>") + '<button class="tfName" type="button" data-more="' + ue(t) + '" aria-label="' + ue(Pe(t) + ", " + v + ". More info") + '"><span class="activityRowName">' + ue(Pe(t)) + '</span><span class="activityRowMeta">' + ue(v) + "</span></button>" + (l ? Yi(t) : "") + "</div>";
  }
  const Zi = () => {
    var t;
    return b[(t = T.sources) == null ? void 0 : t.weather] ? T.sources.weather : b["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(b).find((i) => i.startsWith("weather."));
  };
  function _s() {
    var l;
    const t = (d) => Object.keys(b).filter((m) => m.startsWith("binary_sensor.") && d.includes(rt(m).device_class));
    return ((l = $.alert_entities) != null && l.length ? $.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(bl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => b[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(b[d.entity].state) }));
  }
  function Ki() {
    const t = Object.keys(gl), i = /* @__PURE__ */ new Set(), l = [];
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
  function si() {
    var so;
    const t = Le.rooms, i = Le.security, l = (_e, mt) => _e.actions.filter((Qo) => mt.test(Qo)), d = (_e) => t.map((mt) => ({ name: mt.name, ids: _e(mt) })).filter((mt) => mt.ids.length), m = t.flatMap((_e) => _e.lights), E = m.filter((_e) => {
      var mt;
      return ((mt = b[_e]) == null ? void 0 : mt.state) === "on";
    }).length, y = t.map((_e) => _e.readings.find((mt) => rt(mt).device_class === "temperature")).filter(Boolean).map((_e) => Number(b[_e].state)).filter(Number.isFinite), [v, B] = [ht(Math.min(...y)), ht(Math.max(...y))], ee = t.flatMap((_e) => l(_e, /^media_player\./)), j = ee.filter((_e) => {
      var mt;
      return ((mt = b[_e]) == null ? void 0 : mt.state) === "playing";
    }).length, G = _s(), pe = G.filter((_e) => _e.severity === "warning" && _e.on).length, qe = i.locks.filter((_e) => {
      var mt;
      return ["unlocked", "jammed", "open"].includes((mt = b[_e]) == null ? void 0 : mt.state);
    }).length, Oe = i.alarms.filter((_e) => {
      var mt;
      return ((mt = b[_e]) == null ? void 0 : mt.state) === "disarmed";
    }).length, be = pe ? zo(pe, "warning", "warnings") : null, he = qe ? qe + " unlocked" : Oe ? Oe + " disarmed" : be ? null : "All secure", ie = Object.keys(b).filter((_e) => _e.startsWith("sensor.") && rt(_e).device_class === "battery").sort((_e, mt) => Number(b[_e].state) - Number(b[mt].state)), at = [...ie.filter((_e) => Number(b[_e].state) < 20), ...Le.vacuums.filter((_e) => rt(_e).battery_level < 20)], Wt = t.flatMap((_e) => _e.plants.map((mt) => mt.id)).sort((_e, mt) => {
      var Qo, lo;
      return (((Qo = b[mt]) == null ? void 0 : Qo.state) === "problem") - (((lo = b[_e]) == null ? void 0 : lo.state) === "problem");
    }), la = Wt.filter((_e) => {
      var mt;
      return ((mt = b[_e]) == null ? void 0 : mt.state) === "problem";
    }), pr = t.flatMap((_e) => _e.solar), Yr = pr.find((_e) => _e.endsWith("_power")), Zr = {
      light: m.length && { value: E ? E + " on" : "All off", groups: d((_e) => _e.lights) },
      climate: y.length && { value: v === B ? v + "°" : v + " - " + B + "°", groups: d((_e) => [..._e.readings.filter((mt) => ["temperature", "humidity"].includes(rt(mt).device_class)), ...l(_e, /^(climate|humidifier)\./)]) },
      security: (i.alarms.length || i.locks.length) && { value: [be, he].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...i.alarms, ...i.locks] }, { name: "Doors and windows", ids: i.openings }].filter((_e) => _e.ids.length) },
      media_players: ee.length && { value: j ? j + " playing" : "No media playing", groups: d((_e) => l(_e, /^media_player\./)) },
      maintenance: (ie.length || Wt.length) && { value: [at.length && zo(at.length, "low battery", "low batteries"), la.length && zo(la.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: Wt }, { name: "Batteries", ids: [...Le.vacuums, ...ie] }].filter((_e) => _e.ids.length) },
      energy: Le.grid && { value: za(Number(((so = b[Yr]) == null ? void 0 : so.state) || 0) * 1e3 + Number(b[Le.grid].state)) + " now", groups: [{ name: "Energy", ids: [...pr, Le.grid] }] }
    }, Ti = [], mr = G.filter((_e) => _e.severity !== "warning" && _e.on);
    return mr.length && Ti.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: zo(mr.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: mr.map((_e) => _e.entity) }] }), Ki().forEach((_e) => {
      _e.type !== "summary" ? Ti.push({ key: "path:" + _e.path, name: _e.label || _e.path, icon: _e.icon || "mdi:link-variant", colour: "", value: "" }) : !_e.hidden && Zr[_e.key] && !(T.hiddenSums || []).includes(_e.key) && Ti.push({ key: _e.key, ...gl[_e.key], ...Zr[_e.key] });
    }), Ti;
  }
  const Et = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + ue(t.key) + '" data-k="sum:' + ue(t.key) + '" aria-label="' + ue(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Tt(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + ue(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + ue(t.value) + "</div>" : "") + "</div></div>";
  function Rr(t) {
    const i = Wn();
    T = { ...T, favourites: i.includes(t) ? i.filter((l) => l !== t) : [...i, t] }, Rt(), yn();
  }
  function As(t) {
    document.querySelector("home-assistant") && (ke.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function $i(t, i) {
    if (t.startsWith("path:")) {
      As(t.slice(5));
      return;
    }
    if (t === "security") {
      Ra("security");
      return;
    }
    Mi("summary:" + t, i);
  }
  async function go() {
    const t = (y) => Promise.resolve().then(() => N(y)).catch(() => null), [i, l, d, m] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Xd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), E = (i == null ? void 0 : i.value) || {};
    T = { favourites: E.favourites ?? null, sources: E.sources, hiddenSums: E.hiddenSums, dash: E.dash, named: E.named }, re = (l == null ? void 0 : l.value) || {}, $ = (d == null ? void 0 : d.value) || {}, Q = Array.isArray(m == null ? void 0 : m.entities) ? m.entities : [], oe = null, Object.keys(b).length && yn(), Nt();
  }
  const Nr = "HomeCore";
  async function Nt() {
    var d, m, E;
    const t = location.pathname.split("/")[1], i = T.named || [];
    if (!((m = (d = o()) == null ? void 0 : d.user) != null && m.is_admin) || !t || i.includes(t)) return;
    const l = () => {
      T = { ...T, named: [...i, t] }, Rt();
    };
    try {
      const y = (E = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : E.find((ee) => ee.url_path === t);
      if (!y || y.mode === "yaml") return;
      if (y.title === Nr) {
        l();
        return;
      }
      const v = await N({ type: "lovelace/config", url_path: t }), B = ((v == null ? void 0 : v.views) || []).flatMap((ee) => [...ee.cards || [], ...(ee.sections || []).flatMap((j) => j.cards || [])]);
      if (!B.length || !B.every((ee) => (ee == null ? void 0 : ee.type) === "custom:move-assistant-card" && ee.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: y.id, title: Nr }), l();
    } catch {
    }
  }
  let qn = null, La = 0, Xi = !1;
  const jo = (t) => {
    const i = t.split(".")[0];
    return Am.includes(i) && (i !== "binary_sensor" || bl.includes(rt(t).device_class));
  };
  async function li() {
    var t;
    if (!(Xi || Date.now() - La < 30 * 1e3)) {
      Xi = !0, La = Date.now();
      try {
        const i = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(jo), l = i.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: i }) : null;
        qn = Array.isArray(l) ? l.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        qn = null;
      }
      Xi = !1, yn();
    }
  }
  function di() {
    const t = /* @__PURE__ */ new Map(), i = (d) => {
      if (!b[d.entity_id] || !jo(d.entity_id) || !mi(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const m = t.get(d.entity_id);
      (!m || d.when > m.when + 1) && t.set(d.entity_id, d);
    };
    (qn || []).forEach(i);
    const l = qn ? La / 1e3 - 5 : 0;
    return Object.keys(b).forEach((d) => {
      var y;
      const m = b[d], E = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      E > l && i({ entity_id: d, state: m.state, when: E, context_user_id: (y = m.context) == null ? void 0 : y.user_id });
    }), [...t.values()].sort((d, m) => m.when - d.when).slice(0, Em);
  }
  function _a(t) {
    var d;
    const i = t.context_user_id && Object.keys(b).find((m) => m.startsWith("person.") && rt(m).user_id === t.context_user_id);
    if (i) return Pe(i);
    const l = (d = o()) == null ? void 0 : d.user;
    return l && t.context_user_id === l.id ? l.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Aa(t) {
    const i = t.entity_id.split(".")[0], l = String(t.state);
    return i === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[l] || Mt(l).toLowerCase() : i === "cover" || i === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[l] || Mt(l).toLowerCase() : i === "binary_sensor" ? l === "on" ? "opened" : "closed" : i === "climate" ? l === "off" ? "turned off" : "set to " + Mt(l).toLowerCase() : i === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[l] || Mt(l).toLowerCase() : i === "alarm_control_panel" ? (tc[l] || Mt(l)).toLowerCase() : i === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[l] || Mt(l).toLowerCase() : l === "on" ? "turned on" : l === "off" ? "turned off" : Mt(l).toLowerCase();
  }
  function Es(t) {
    const i = t.entity_id, l = Pe(i) + " " + Aa(t), d = [_a(t), En(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + Tt(i, bn(i)) + '></div><button class="tfName" type="button" data-more="' + ue(i) + '" aria-label="' + ue(l + ", " + d + ". More info") + '"><span class="activityRowName">' + ue(l) + '</span><span class="activityRowMeta">' + ue(d) + "</span></button></div>";
  }
  let Nn = null, Ji = 0;
  const na = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Br() {
    var i;
    if (Date.now() - Ji < 5 * 60 * 1e3) return;
    Ji = Date.now();
    const t = [];
    try {
      const l = ((i = await N({ type: "energy/get_prefs" })) == null ? void 0 : i.energy_sources) || [], d = (m) => l.filter((E) => E.type === m).flatMap((E) => m === "grid" ? (E.flow_from || []).map((y) => y.stat_energy_from) : [E.stat_energy_from]).filter(Boolean);
      for (const [m, E, y] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!y.length) continue;
        const v = await Promise.all(y.map((B) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: B, calendar: { period: "day" }, types: ["change"] })).then((ee) => Number(ee == null ? void 0 : ee.change) || 0, () => 0)));
        t.push({ key: m, name: E, id: y[0], value: v.reduce((B, ee) => B + ee, 0), unit: rt(y[0]).unit_of_measurement || (m === "gas" || m === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Nn = t, yn();
  }
  let vo = null;
  function ci() {
    var E;
    const t = Nn != null && Nn.length ? Nn : na.map(([y, v, B, ee]) => {
      const j = "sensor.made_up_energy_" + y;
      return b[j] = { entity_id: j, state: String(B), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: ee, state_class: "total_increasing" } }, { key: y, name: v, id: j, value: B, unit: ee };
    });
    Ce.clear(), t.some((y) => y.id === vo) || (vo = t[0].id);
    const i = t.map((y) => {
      const v = Number(y.value).toLocaleString(void 0, { maximumFractionDigits: y.value < 10 ? 2 : 1 }) + " " + y.unit, B = Dm[y.key], ee = y.id === vo;
      return Ce.set(y.id, { name: y.name, text: v, icon: B }), '<div class="activityRow tap' + (ee ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + ue(y.id) + '" aria-pressed="' + ee + '" aria-label="' + ue(y.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Tt("", B, y.name) + '></div><div><div class="activityRowName">' + ue(y.name) + '</div><div class="activityRowMeta">' + ue(v) + "</div></div></div>";
    }), l = t.find((y) => y.id === vo), d = (((E = jn().opts.energy) == null ? void 0 : E.graph) || "above") === "below", m = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + ue(l.id) + '" role="img" aria-label="' + ue(l.name) + ', last 24 hours"></svg></div>';
    return D("dash:energy", 0, "Energy today", i, m, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function ui(t) {
    const i = A.querySelector(".tfDash-energy"), l = i == null ? void 0 : i.querySelector(".tfDashGraph svg");
    !l || t === vo || (vo = t, i.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const m = d.dataset.energyPick === t;
      d.classList.toggle("picked", m), d.setAttribute("aria-pressed", String(m));
    }), l.dataset.graph = t, l.dataset.drawn = "", it.set("dash:energy", ci()), ia(!0));
  }
  function Pr(t) {
    var m;
    if ((m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [i, l] = t.querySelectorAll("path");
    if (!(l != null && l.getTotalLength)) return;
    const d = l.getTotalLength();
    l.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), i == null || i.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let pi = null, Go = 0;
  const mi = (t) => !t.startsWith("light.") || Rm.includes((Be.get(t) || "").toLowerCase()), bo = () => Math.max(2, Mo((A == null ? void 0 : A.clientWidth) || 0).n);
  function Ds(t) {
    if (!pi) {
      const l = (d) => {
        var m;
        return (((m = b[d]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + (le[d] || 0);
      };
      pi = {
        lights: Le.rooms.flatMap((d) => d.lights).filter((d) => {
          var m;
          return mi(d) && ((m = b[d]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((d, m) => l(m) - l(d) || Pe(d).localeCompare(Pe(m))),
        climates: Le.rooms.flatMap((d) => d.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const i = pi.climates.filter((l) => b[l]).slice(0, t > 3 ? 2 : 1);
    return [...pi.lights.filter((l) => b[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const wo = (t, i, l, d) => (m) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + i + '" aria-label="' + l + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + l + "</div></div>" : "") + '<div class="activityRows">' + m + "</div></section>";
  function Ka(t, i) {
    var E, y;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ue(((y = (E = o()) == null ? void 0 : E.config) == null ? void 0 : y.location_name) || "Home") + "</h1>" }), i.length && t.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + wo("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: i.map((v) => ({ key: "sum:" + v.key, html: Et(v) })) }), Za.length && t.push({ key: "areas", html: Vo(0) });
    const l = Dr(nc * 3).filter(mi).slice(0, nc);
    l.length && t.push({ key: "favs", wrap: wo("tfDash-favs", "favs", "Favourites", !0), tiles: l.map((v) => ({ key: "fav:" + v, html: Ta(v, { area: !0 }) })) });
    const d = di();
    t.push({ key: "dash:act", html: D("dash:act", 0, "Activity", d.length ? d.map(Es) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: ci() });
    const m = bo();
    return Go = m, t.push({
      key: "dash:tiles",
      wrap: (v) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + v + "</div>",
      tiles: Ds(m >= 3 ? m : m * 2).map((v) => ({ key: v, html: an(v, !1, v.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), li(), Br(), t;
  }
  const xo = 252, Ot = 16, Uo = 230, $a = 60, aa = $a + Ot, Xa = 5, oa = 3, yo = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Rs = ["wx", "favs", "act", "energy", "avg"], Ns = { wx: Xa, areas: Xa, favs: Xa, act: Xa, energy: 4, avg: 4 }, ko = 3, Yo = 94, Ea = /* @__PURE__ */ new Set(), Zo = (t) => yo[t] || Pe(t), Bs = 409, Qi = 128;
  let fn = !1, jt = null, Vn = null, er = !1, Zt = /* @__PURE__ */ new Map(), Ja = 0, zn = 0;
  const hi = ["title", "sums"], Mo = (t) => {
    let i = Math.floor((t + Ot) / (xo + Ot)), l = xo;
    return i < 4 && t >= 4 * Uo + 3 * Ot && (i = 4, l = Math.floor((t - 3 * Ot) / 4)), { n: Math.max(1, i), w: l };
  }, jn = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...T.dash || {} });
  function tr(t) {
    T = { ...T, dash: t }, Rt();
  }
  function Qa() {
    const t = (i) => A.querySelector(i);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Va.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Va.avg, 2],
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((i) => [i.dataset.k, i, 1, !0])
    ].filter(([, i]) => i == null ? void 0 : i.isConnected).map(([i, l, d, m = !1]) => ({ key: i, el: l, span: d, tile: m }));
  }
  const nr = (t, i, l) => t.span === "full" ? i : t.span === "areas" ? Math.min(i, Math.ceil((Bs + Math.max(0, Za.length - 1) * (Qi + Ot) + Ot) / (l + Ot))) : Math.min(i, jn().spans[t.key] ?? t.span), Co = (t) => Ns[t.key] ?? (t.el.classList.contains("tfDac") ? Ea.has(t.key) ? Xa : ko : null);
  function fi(t, i, l = null) {
    const d = jn().cells, m = t.every((v) => !d[v.key] || d[v.key].col + v.cols <= i), E = (v) => d[v.key] || { row: 1e9, col: 0 }, y = () => {
      const v = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Map(), ee = (be, he, ie, at) => {
        for (let Wt = he; Wt < he + at; Wt++) for (let la = be; la < be + ie; la++) if (v.has(la + "," + Wt)) return !1;
        return !0;
      }, j = (be, he, ie) => {
        for (let at = ie; at < ie + be.rows; at++) for (let Wt = he; Wt < he + be.cols; Wt++) v.add(Wt + "," + at);
        B.set(be.key, { col: he, row: ie, cols: be.cols, rows: be.rows });
      }, G = (be, he, ie) => {
        for (he = Math.max(0, Math.min(i - be.cols, he)), ie = Math.max(0, ie); !ee(he, ie, be.cols, be.rows); ) ie++;
        j(be, he, ie);
      }, pe = (be) => {
        for (let he = 0; ; he++) for (let ie = 0; ie <= i - be.cols; ie++) if (ee(ie, he, be.cols, be.rows)) {
          j(be, ie, he);
          return;
        }
      };
      l && G(l, jt.col, jt.row);
      const qe = t.filter((be) => be !== l), Oe = (be, he) => E(be).row - E(he).row || E(be).col - E(he).col;
      return m ? (qe.filter((be) => d[be.key]).sort(Oe).forEach((be) => G(be, d[be.key].col, d[be.key].row)), qe.filter((be) => !d[be.key]).forEach(pe), B) : ([...qe].sort(Oe).forEach(pe), B);
    };
    for (let v = 0; ; v++) {
      const B = y();
      if (v === 3) return B;
      const ee = t.filter((G) => G.tile && !Ea.has(G.key)).map((G) => ({ it: G, p: B.get(G.key) })).sort((G, pe) => G.p.row - pe.p.row || G.p.col - pe.p.col);
      let j = !1;
      for (let G = 0, pe; G < ee.length; G = pe) {
        for (pe = G + 1; pe < ee.length && ee[pe].p.row === ee[G].p.row && ee[pe].p.col === ee[pe - 1].p.col + 1; pe++) ;
        const qe = ee.slice(G, pe), Oe = Math.max(...qe.map((be) => be.it.rows));
        qe.forEach((be) => {
          be.it.rows < Oe && (be.it.rows = Oe, j = !0);
        });
      }
      if (!j) return B;
    }
  }
  function wa() {
    const t = jn(), i = new Set(t.hidden), l = Qa().filter((E) => !hi.includes(E.key));
    let d = Zt;
    if (!d.size) {
      const E = t.pegs || 4, y = l.filter((v) => !i.has(v.key));
      y.forEach((v) => {
        v.cols = nr(v, E, xo), v.rows = Co(v) ?? 2;
      }), d = fi(y, E);
    }
    const m = (E) => !i.has(E.key) && d.get(E.key) || { row: 1e9, col: 0 };
    l.sort((E, y) => m(E).row - m(y).row || m(E).col - m(y).col).forEach((E, y) => E.el.style.setProperty("--o", String(3 + y)));
  }
  const eo = (t, i) => tr({ ...t, cells: i, pegs: Mo(A.clientWidth).n });
  function Bn() {
    var he;
    if (!x || !A) return;
    const t = A.clientWidth, { n: i, w: l } = Mo(t), d = h.classList.contains("tfDash") && i >= 2;
    h.classList.toggle("tfBoard", d), h.classList.toggle("tfEditing", d && fn);
    const m = u("dashEditNav");
    m && (m.hidden = !d, m.classList.toggle("active", fn), m.setAttribute("aria-pressed", String(fn)), m.setAttribute("aria-label", fn ? "Done editing" : "Edit the dashboard"), m.title = fn ? "Done" : "Edit", m.innerHTML = fn ? Sm : ec);
    const E = d ? Qa() : [];
    if (!d) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((ie) => {
        ie.classList.remove("tfBoardItem", "tfBoardHidden"), ie.style.left = ie.style.top = ie.style.width = ie.style.height = "";
      }), (he = A.querySelector(".tfDash-act > .activityRows")) == null || he.style.removeProperty("max-height"), ar(!1), h.classList.contains("tfDash") && wa();
      return;
    }
    A.style.setProperty("--peg-w", l + "px");
    const y = new Set(jn().hidden), v = l + Ot;
    E.forEach((ie) => ie.el.classList.toggle("tfBoardHidden", y.has(ie.key)));
    const B = E.filter((ie) => !y.has(ie.key) && getComputedStyle(ie.el).display !== "none");
    let ee = 0;
    B.filter((ie) => hi.includes(ie.key)).forEach((ie) => {
      ie.el.classList.add("tfBoardItem"), Object.assign(ie.el.style, { width: t + "px", height: "", left: "0px", top: ee + "px" });
      const at = ie.key === "sums" && ie.el.querySelector(".tfDash-bar"), Wt = at ? at.querySelectorAll(".activityRow").length : 0;
      at && (at.style.maxWidth = "none");
      for (let la = 1; at && la <= Wt && (at.style.setProperty("--bar-cols", String(Math.ceil(Wt / la))), !(at.offsetWidth <= t)); la++)
        ;
      at && (at.style.maxWidth = ""), ee += ie.el.offsetHeight + Ot;
    }), zn = ee;
    const j = B.filter((ie) => !hi.includes(ie.key));
    j.forEach((ie) => {
      ie.cols = nr(ie, i, l), ie.el.classList.add("tfBoardItem"), ie.el.style.width = (ie.cols === i ? t : ie.cols * l + (ie.cols - 1) * Ot) + "px", ie.el.style.height = "", ie.rows = Co(ie) ?? Math.max(1, Math.ceil((ie.el.offsetHeight + Ot - 6) / aa));
    });
    const G = jt && j.find((ie) => ie.key === jt.key), pe = fi(j, i, G);
    pe.forEach((ie) => Object.assign(ie, { x: ie.cols === i ? 0 : ie.col * v, y: zn + ie.row * aa, w: ie.cols === i ? t : ie.cols * l + (ie.cols - 1) * Ot, h: ie.rows * aa - Ot })), j.forEach((ie) => {
      const at = pe.get(ie.key);
      ie.el.style.height = at.h + "px", ie.el.classList.contains("tfDac") && ie.el.style.setProperty("--tf-dac-pad", at.h - Yo + "px"), ie !== G && (ie.el.style.left = at.x + "px", ie.el.style.top = at.y + "px");
    }), Zt = pe;
    const qe = pe.get("act"), Oe = qe && A.querySelector(".tfDash-act > .activityRows");
    Oe && (Oe.style.maxHeight = Math.max($a, Math.floor((qe.h - Oe.offsetTop - 10) / $a) * $a) + "px"), Ja = Math.max(0, ...[...pe.values()].map((ie) => ie.row + ie.rows));
    let be = zn + Ja * aa - Ot;
    be = ar(fn, j, pe, be, i, l), A.style.height = be + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), E.forEach((ie) => vi.observe(ie.el)), ia();
  }
  const gi = () => {
    er || (er = !0, requestAnimationFrame(() => {
      er = !1, Bn();
    }));
  }, vi = new ResizeObserver(() => {
    jt || gi();
  });
  function ar(t, i = [], l = /* @__PURE__ */ new Map(), d = 0, m = 1, E = xo) {
    A.querySelectorAll(".tfEditChips").forEach((G) => {
      (!t || !G.closest(".tfBoardItem")) && G.remove();
    }), A.querySelectorAll(".tfBoardItem").forEach((G) => [...G.children].forEach((pe) => {
      pe.classList.contains("tfEditChips") || pe.toggleAttribute("inert", t);
    }));
    let y = A.querySelector(".tfBoardCells"), v = A.querySelector(".tfBoardLand"), B = A.querySelector(".tfBoardTray");
    if (!t)
      return y == null || y.remove(), v == null || v.remove(), B == null || B.remove(), Da(), d;
    const ee = Ja + oa;
    if (y || (y = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), y.setAttribute("aria-hidden", "true"), A.prepend(y)), y.style.top = zn + "px", y.dataset.size !== m + "x" + ee + "x" + E && (y.dataset.size = m + "x" + ee + "x" + E, y.style.gridTemplateColumns = "repeat(" + m + "," + E + "px)", y.innerHTML = "<i></i>".repeat(m * ee)), d = Math.max(d, zn + ee * aa - Ot), i.forEach((G) => {
      const pe = G.el;
      !pe || pe.querySelector(":scope > .tfEditChips") || pe.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + km + '</span><button class="tfEditChip" type="button" data-board-more="' + ue(G.key) + '" aria-label="' + ue(Zo(G.key)) + ' options" aria-haspopup="menu">' + Mm + "</button></div>");
    }), jt && l.has(jt.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(v));
      const G = l.get(jt.key);
      Object.assign(v.style, { left: G.x + "px", top: G.y + "px", width: G.w + "px", height: G.h + "px" });
    } else v == null || v.remove();
    const j = jn().hidden.filter((G) => Qa().some((pe) => pe.key === G));
    return j.length ? (B || (B = Object.assign(document.createElement("div"), { className: "tfBoardTray" }), A.appendChild(B)), B.innerHTML = j.map((G) => '<button class="pill" type="button" data-board-show="' + ue(G) + '">Show ' + ue(Zo(G)) + "</button>").join(""), Object.assign(B.style, { top: d + Ot + "px", left: "0px", width: A.clientWidth + "px" }), d + Ot + B.offsetHeight) : (B == null || B.remove(), d);
  }
  function or(t) {
    fn = t, t || (jt = null, Da()), Bn();
  }
  function to(t, i) {
    var j, G;
    Da();
    const l = Zt.get(t), { n: d } = Mo(A.clientWidth), m = jn(), E = m.spans[t] ?? 2;
    if (!l) return;
    const y = l.cols >= d, v = (pe, qe, Oe) => '<button type="button" role="menuitem" data-board-act="' + pe + '"' + (Oe ? " disabled" : "") + ">" + qe + "</button>", B = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    B.setAttribute("role", "menu"), B.setAttribute("aria-label", Zo(t) + " options"), B.innerHTML = (Rs.includes(t) ? v("size", E === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? v("graph", (((j = m.opts.energy) == null ? void 0 : j.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", y || l.col === 0) + v("right", "Move right", y || l.col + l.cols >= d) + v("up", "Move up", l.row <= 0) + v("down", "Move down") + v("hide", "Hide"), A.appendChild(B);
    const ee = Math.min(l.x + l.w - B.offsetWidth, A.clientWidth - B.offsetWidth);
    Object.assign(B.style, { left: Math.max(0, ee) + "px", top: l.y + 28 + "px" }), Vn = { key: t, menu: B, opener: i }, (G = B.querySelector("button:not([disabled])")) == null || G.focus();
  }
  function Da(t) {
    if (!Vn) return;
    const { menu: i, opener: l } = Vn;
    Vn = null, i.remove(), t && (l == null || l.focus());
  }
  const bi = () => Object.fromEntries([...Zt].map(([t, i]) => [t, { col: i.col, row: i.row }]));
  function wi(t, i) {
    var E, y;
    const l = jn(), d = bi(), m = d[t] || { col: 0, row: 0 };
    i === "size" && (l.spans = { ...l.spans, [t]: (l.spans[t] ?? 2) === 1 ? 2 : 1 }), i === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((E = l.opts.energy) == null ? void 0 : E.graph) || "above") === "above" ? "below" : "above" } }), i === "left" && (d[t] = { ...m, col: m.col - 1 }), i === "right" && (d[t] = { ...m, col: m.col + 1 }), i === "up" && (d[t] = { ...m, row: m.row - 1 }), i === "down" && (d[t] = { ...m, row: m.row + 1 }), i === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(i) && (jt = { key: t, col: d[t].col, row: d[t].row }), eo(l, d), jt && (Bn(), jt = null, eo(jn(), bi())), Da(), i === "graph" && (it.delete("dash:energy"), yn()), Bn(), i !== "hide" && ((y = A.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus());
  }
  function Ko(t) {
    const i = jn();
    tr({ ...i, hidden: i.hidden.filter((l) => l !== t) }), Bn();
  }
  function So(t) {
    if (!fn || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfBoardTray")) return;
    const i = t.target.closest(".tfBoardItem"), l = i && Qa().find((G) => G.el === i);
    if (!l || hi.includes(l.key)) return;
    const d = Zt.get(l.key), { w: m } = Mo(A.clientWidth);
    if (!d) return;
    t.preventDefault(), Da();
    const E = t.clientX, y = t.clientY;
    let v = !1, B = 0;
    const ee = (G) => {
      const pe = G.clientX - E, qe = G.clientY - y;
      if (!v) {
        if (Math.hypot(pe, qe) < 4) return;
        v = !0, jt = { key: l.key, col: d.col, row: d.row }, i.classList.add("tfDragging");
      }
      i.style.transform = "translate(" + pe + "px," + qe + "px)", jt.col = Math.round((d.x + pe) / (m + Ot)), jt.row = Math.round((d.y + qe - zn) / aa), B || (B = requestAnimationFrame(() => {
        B = 0, Bn();
      }));
    }, j = () => {
      window.removeEventListener("pointermove", ee), window.removeEventListener("pointerup", j), window.removeEventListener("pointercancel", j), v && (cancelAnimationFrame(B), Bn(), i.classList.remove("tfDragging"), i.style.transform = "", jt = null, eo(jn(), bi()), Bn(), yn());
    };
    window.addEventListener("pointermove", ee), window.addEventListener("pointerup", j), window.addEventListener("pointercancel", j);
  }
  function ia(t = !1) {
    const i = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(i != null && i.clientWidth)) return;
    const l = i.dataset.graph + "@" + i.clientWidth + "x" + i.clientHeight;
    i.dataset.drawn !== l && (i.dataset.drawn = l, ka(i.dataset.graph, i).then(() => {
      t && Pr(i);
    }));
  }
  function no() {
    var v, B, ee;
    Le = qa.model(o()), b = Le.states, b[(v = T.sources) == null ? void 0 : v.grid] && (Le.grid = T.sources.grid), b[(B = T.sources) == null ? void 0 : B.alarm] && (Le.security.alarms = [T.sources.alarm]), w.forEach((j, G) => {
      const pe = b[G], qe = (pe == null ? void 0 : pe.attributes) || {};
      if (!pe || Date.now() - j.at > 2 * 60 * 1e3) {
        w.delete(G);
        return;
      }
      j.pos != null && pe.state !== "opening" && pe.state !== "closing" && Math.abs(Ct(G) - j.pos) < 1 && delete j.pos, j.tilt != null && Math.abs((qe.current_tilt_position ?? -1) - j.tilt) < 1 && delete j.tilt, j.pos == null && j.tilt == null && w.delete(G);
    });
    const t = [];
    let i = 0;
    const l = Ls();
    Za = l.filter((j) => j.room).map((j) => j.room), Za.some((j) => j.id === fe) || (fe = ((ee = Za[0]) == null ? void 0 : ee.id) || null);
    const d = Se === "weather" ? { key: "weather", name: "Weather" } : Se && l.find((j) => j.key === Se);
    if (d || (Se = null), h.classList.toggle("tfAreaOpen", !!d), h.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), h.classList.toggle("tfDash", !d), Be = /* @__PURE__ */ new Map(), Le.rooms.forEach((j) => [...j.actions, ...j.plugs, ...j.readings, ...j.openings, ...j.solar, ...j.plants.flatMap((G) => [G.id, ...G.readings])].forEach((G) => Be.set(G, j.name))), !d) return Ka(t, si());
    if (t.push({ key: "areahead", html: To(d, ++i) }), d.key === "weather")
      return t.weather = ++i, t;
    const m = d.ids, E = d.room ? d.room.id : d.key, y = d.room;
    return y != null && y.solar.length && t.push({ key: "energy:" + y.id, html: O(y, ++i) }), y && (y.readings.length || y.plugs.length || y.power != null) && t.push({ key: "readings:" + y.id, html: H(y, ++i) }), y == null || y.plants.forEach((j) => t.push({ key: "plant:" + j.id, html: ce(j, ++i) })), m.length && t.push({ key: "block:" + E, order: ++i, tiles: m.map((j) => ({ key: j, html: an(j) })) }), d.key === "security" && t.push({ key: "openings", html: ve(++i) }), t;
  }
  const To = (t, i) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + i + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + dm + '</button><div class="settingsTitle">' + ue(t.name) + "</div></div>";
  let Lo = 0;
  function Ra(t) {
    var i;
    Se || (Lo = ao().scrollTop), Se = t, t.startsWith("room:") && (fe = t.slice(5)), xn(), ao().scrollTop = 0, (i = A.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  function ra() {
    var m;
    const t = Se;
    Se = null, xn();
    const i = ao(), l = Lo;
    i.scrollTop = l, requestAnimationFrame(() => {
      i.scrollTop = l;
    });
    const d = t.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Va.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (m = (d == null ? void 0 : d.querySelector("[data-go]")) || d) == null || m.focus({ preventScroll: !0 });
  }
  const Ir = (t) => t.wrap ? t.wrap(t.tiles.map((i) => i.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + ue(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((i) => i.html).join("") + "</div></div>", Hr = (t) => t.map((i) => i.key + (i.tiles ? "(" + i.tiles.map((l) => l.key).join(",") + ")" : "")).join(";");
  function ao() {
    for (let t = h.parentElement || h.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const i = getComputedStyle(t).overflowY;
      if ((i === "auto" || i === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function xa(t) {
    const i = ao(), l = (v) => {
      const B = v.getBoundingClientRect();
      return B.height && B.bottom > 0 && B.top < window.innerHeight;
    }, d = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && l(v)), m = d == null ? void 0 : d.dataset.k, E = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const y = d != null && d.isConnected ? d : m && A.querySelector('[data-k="' + CSS.escape(m) + '"]');
    y != null && y.isConnected && E != null && (i.scrollTop += y.getBoundingClientRect().top - E);
  }
  function xn() {
    if (!x || !A) return;
    const t = no();
    A.querySelectorAll("[data-tf]").forEach((l) => l.remove()), it.clear();
    const i = document.createElement("div");
    i.innerHTML = t.map((l) => l.tiles ? Ir(l) : l.html).join(""), t.forEach((l) => l.tiles ? l.tiles.forEach((d) => it.set(d.key, d.html)) : it.set(l.key, l.html)), nn = Hr(t), A.append(...i.children), dt(t.weather), ut(), vi.disconnect(), Bn(), un(A), rr(A), Rn(A), V(), W && ka(W.id), Gn(), Ia(), ki(), requestAnimationFrame(F);
  }
  const Na = (t) => {
    var l;
    const i = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return i && { label: i.getAttribute("aria-label"), act: (l = i.dataset) == null ? void 0 : l.act };
  }, Ba = (t, i) => {
    var l;
    i && ((l = i.label && t.querySelector('[aria-label="' + CSS.escape(i.label) + '"]') || i.act && t.querySelector('[data-act="' + CSS.escape(i.act) + '"]')) == null || l.focus({ preventScroll: !0 }));
  };
  function Ps(t, i) {
    const l = document.createElement("div");
    l.innerHTML = i;
    const d = l.firstElementChild, m = Na(t);
    t.replaceWith(d), un(d), rr(d), Rn(d), Ba(d, m);
  }
  function yn() {
    !x || !A || jt || xa(Fr);
  }
  function Fr() {
    if (!A.querySelector("[data-tf]")) {
      xn();
      return;
    }
    const t = no();
    if (Hr(t) !== nn) {
      xn();
      return;
    }
    const i = (l) => [...Fe.keys()].some((d) => {
      const m = d.slice(d.indexOf("|") + 1);
      return l === m || l.endsWith(":" + m);
    });
    t.forEach((l) => (l.tiles || [l]).forEach((d) => {
      if (it.get(d.key) === d.html || i(d.key)) return;
      const m = A.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (m) {
        if (it.set(d.key, d.html), W && W.key === d.key && m.querySelector(".tfOpen")) {
          m.querySelector(".tfOpen .activityRowMeta").textContent = Ga(W.id);
          return;
        }
        Ps(m, d.html), W && W.key === d.key && ka(W.id), d.key.startsWith("energy:") && Gn();
      }
    })), Ia(), ki(), rn(), V(), mn == null || mn.update(), cn == null || cn.forEach((l) => l.update()), h.classList.contains("tfDash") && gi(), requestAnimationFrame(F);
  }
  const ir = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Mt(t.color_mode)]],
    climate: (t) => [["Current temperature", ht(t.current_temperature) + " °C"], ["Target", ht(t.temperature) + " °C"], ["Action", Mt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Mt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Mt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", ht(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Mt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, xi = (t) => {
    var l;
    const i = (((l = ir[t.split(".")[0]]) == null ? void 0 : l.call(ir, rt(t))) || []).filter(([, d]) => d != null && d !== "");
    return i.length ? '<div class="tfMoreRows">' + i.map(([d, m]) => '<div class="tfMoreRow"><span>' + ue(d) + "</span><span>" + ue(m) + "</span></div>").join("") + "</div>" : "";
  }, $o = (t) => Ii(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function ya(t, i = {}, l = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ue(d.name) + '</div><div class="tfMoreTiles' + (l ? " single" : "") + '">' + d.ids.map((m) => Ta(m, i)).join("") + "</div></div>").join("") + "</div>";
  }
  const nt = document.createElement("div");
  nt.className = "tfMoreBackdrop", nt.hidden = !0, h.appendChild(nt);
  const yi = (t, i) => {
    for (let l = t; l && l !== nt; l = l.parentElement) {
      const d = getComputedStyle(l).overflowY;
      if ((d === "auto" || d === "scroll") && l.scrollHeight > l.clientHeight + 1 && (i < 0 ? l.scrollTop > 0 : l.scrollTop + l.clientHeight < l.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let _o = null;
  nt.addEventListener("touchstart", (t) => {
    _o = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), nt.addEventListener("touchmove", (t) => {
    var m, E;
    if (!_o || t.touches.length > 1 || (E = (m = t.target).closest) != null && E.call(m, "input,textarea,select")) return;
    const i = t.touches[0], l = _o.x - i.clientX, d = _o.y - i.clientY;
    _o = { x: i.clientX, y: i.clientY }, Math.abs(d) >= Math.abs(l) && !yi(t.target, d) && t.preventDefault();
  }, { passive: !1 }), nt.addEventListener("wheel", (t) => {
    yi(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Pa() {
    const t = nt.querySelector(".tfMorePair"), i = nt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - i.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Pa, { passive: !0 }), x && Ca();
  let sa = [];
  const Or = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Is(t) {
    const i = (v, B = "") => '<div class="tfMoreHead">' + (g != null && g.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + fl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + ue(v) + "</div>" + B + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + cm + "</button></div>", l = (v, B) => '<div class="tfMoreNow"><div class="tfMoreState">' + ue(v) + "</div>" + (B ? '<div class="tfMoreSub">' + ue(B) + "</div>" : "") + "</div>", d = ya;
    if (t === "favourites") {
      const v = Wn(), B = new Set(v), ee = [{ name: "Starred", ids: v }, { name: "Home", ids: Le.homeVacuums }, { name: "Security", ids: [...Le.security.alarms, ...Le.security.locks] }, ...Le.rooms.map((j) => ({ name: j.name, ids: [...j.actions, ...j.plugs] }))].map((j, G) => G ? { ...j, ids: j.ids.filter((pe) => !B.has(pe)) } : j).filter((j) => j.ids.length);
      return [i("Favourites"), l(v.length ? v.length + " starred" : "None starred"), d(ee, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const v = si().find((G) => G.key === t.slice(8));
      if (!v) return null;
      const B = v.key === "light" ? (v.groups || []).flatMap((G) => G.ids) : [], ee = B.some((G) => {
        var pe;
        return ((pe = b[G]) == null ? void 0 : pe.state) === "on";
      }), j = B.length ? '<button class="primary" type="button" data-acts="' + Dn(B.map((G) => ["light", ee ? "turn_off" : "turn_on", G])) + '">' + (ee ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(v.name), '<div class="tfMoreNowRow">' + l(v.value) + j + "</div>", ...(v.groups || []).map((G) => {
        const pe = G.ids.filter((Oe) => fs.includes(Oe.split(".")[0])), qe = G.ids.filter((Oe) => !pe.includes(Oe));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ue(G.name) + "</div>" + (pe.length ? '<div class="tfMoreActions">' + pe.map((Oe) => an(Oe, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((Oe) => Ta(Oe, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, v, B] = t.split(":"), ee = Le.rooms.find((be) => be.id === v), j = ee && ji(ee).find((be) => be.key === B);
      if (!j) return null;
      const G = _r(ee, B), pe = G.filter((be) => fs.includes(be.split(".")[0])), qe = G.filter((be) => !pe.includes(be)), Oe = j.acts ? '<button class="primary" type="button" data-acts="' + Dn(j.acts) + '">' + (j.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [i(ee.name + " " + j.label.toLowerCase()), '<div class="tfMoreNowRow">' + l(j.value) + Oe + "</div>", '<div class="tfMoreGroup">' + (pe.length ? '<div class="tfMoreActions">' + pe.map((be) => an(be, !0)).join("") + "</div>" : "") + (qe.length ? '<div class="tfMoreTiles">' + qe.map((be) => Ta(be, {})).join("") + "</div>" : "") + "</div>"];
    }
    const m = t.split(".")[0], E = b[t], y = fs.includes(m) ? Ya(t) : { sections: [] };
    return [
      i(Pe(t)),
      l(Pt(t), E.last_changed && hn(Date.parse(E.last_changed))),
      m === "cover" && '<div data-cover-art="' + ue(t) + '"></div>',
      ...y.sections.filter(Boolean),
      Wr(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(g != null && g.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Cm + "</button>"
    ].filter(Boolean);
  }
  const Wr = (t) => Or(t) ? "" : xi(t) + $o(t);
  let Ao = "";
  function pn(t) {
    var i;
    g && (g.details = t, Ia(), (i = nt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || i.focus({ preventScroll: !0 }));
  }
  const sn = (t) => {
    const i = b[t], l = Ct(t), d = $n(t);
    return { kind: hl(i), name: Pe(t), text: Pt(t), pos: l, target: Math.abs(d - l) > 0.5 ? d : null, moving: i.state === "opening" || i.state === "closing", tilt: qt(t) ?? 100, canSet: Ft(t, $d) };
  };
  function rr(t) {
    t.querySelectorAll("[data-cover-art]").forEach((i) => {
      const l = i.dataset.coverArt, d = i.dataset.artKey || "more:" + l;
      let m = C.get(d);
      m || (m = lm({ onMove: (E) => Eo(l, E), onSet: (E) => {
        Eo(l, E), Jo("pos", l);
      } }), m.coverId = l, C.set(d, m)), i.replaceWith(m.el), m.update(sn(l));
    });
  }
  const qr = (t) => [...C.values()].filter((i) => i.coverId === t), Xo = () => C.forEach((t) => {
    b[t.coverId] && t.update(sn(t.coverId));
  }), ki = () => {
    C.forEach((t, i) => {
      t.el.isConnected || (t.destroy(), C.delete(i));
    }), Xo();
  };
  function Ia() {
    var E, y;
    if (!g || !(Or(g.id) || b[g.id])) {
      nt.hidden = !0;
      return;
    }
    if ([...Fe.keys()].some((v) => v.endsWith("|" + g.id))) {
      Xo();
      return;
    }
    const t = Is(g.id), i = nt.querySelector(".tfMore");
    if (!t) {
      Ci();
      return;
    }
    const l = Na(nt), d = Wr(g.id), m = g.id.startsWith("summary:") || g.id.startsWith("group:");
    if (nt.hidden || !i || t.length !== sa.length || i.classList.contains("wide") !== m) {
      const v = !nt.hidden && i ? i.scrollTop : 0;
      nt.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (m ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + fl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Ao = d, nt.hidden = !1, Pa(), rr(nt), Rn(nt), un(nt), v && (nt.querySelector(".tfMore").scrollTop = v), Ba(nt, l), nt.contains(n.activeElement) || (E = nt.querySelector("[data-more-close]")) == null || E.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((v, B) => {
        var G, pe;
        if (v === sa[B] || v.includes("data-cover-art") || i.children[B].contains((pe = (G = n.activeElement) == null ? void 0 : G.matches) != null && pe.call(G, "input,select") ? n.activeElement : null) || [...Fe.keys()].some((qe) => i.children[B].querySelector('[data-drag="' + CSS.escape(qe) + '"]'))) return;
        const ee = document.createElement("div");
        ee.innerHTML = v;
        const j = ee.firstElementChild;
        i.children[B].replaceWith(j), un(j), Rn(j);
      }), d !== Ao) {
        const v = nt.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = d), Ao = d;
      }
      nt.contains(n.activeElement) || Ba(nt, l);
    }
    (y = nt.querySelector(".tfMorePair")) == null || y.classList.toggle("details", !!(g.details && d)), sa = t, Xo();
  }
  setInterval(() => {
    g && Ia();
  }, 15 * 1e3);
  function Mi(t, i) {
    const l = !!(g && i && nt.contains(i));
    g = { id: t, opener: l ? g.opener : i, back: l ? g : null }, sr();
  }
  function sr() {
    sa = [], nt.hidden = !0, C.forEach((t, i) => {
      i !== g.id && nt.contains(t.el) && (t.destroy(), C.delete(i));
    }), Ia();
  }
  function Ci() {
    var l, d, m, E, y, v;
    const t = g == null ? void 0 : g.opener;
    g = null, C.forEach((B, ee) => {
      nt.contains(B.el) && (B.destroy(), C.delete(ee));
    }), wn.forEach((B, ee) => {
      ee.startsWith("more:") && wn.delete(ee);
    }), nt.hidden = !0, nt.innerHTML = "";
    const i = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(i) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (d = A.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(i) : (m = t == null ? void 0 : t.dataset) != null && m.summary ? (E = A.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || E.focus(i) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((v = A.querySelector("[data-favs-edit]")) == null || v.focus(i));
  }
  function Vr(t, i, l, d = {}) {
    const m = i.map((he) => he[1]), E = d.zero ? 0 : Math.min(...m), y = Math.max(...m), v = Math.max(120, t.clientWidth || 260), B = Math.max(60, t.clientHeight || 130), ee = 8, j = B - 20, G = Date.now() - 24 * 3600 * 1e3, pe = 24 * 3600 * 1e3, qe = (he) => Math.max(0, Math.min(v, (he - G) / pe * v)), Oe = (he) => y === E ? (ee + j) / 2 : j - (he - E) / (y - E) * (j - ee);
    let be = "M" + qe(i[0][0]).toFixed(1) + " " + Oe(i[0][1]).toFixed(1);
    for (let he = 1; he < i.length; he++) be += d.smooth ? "L" + qe(i[he][0]).toFixed(1) + " " + Oe(i[he][1]).toFixed(1) : "H" + qe(i[he][0]).toFixed(1) + "V" + Oe(i[he][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + v + " " + B), t.setAttribute("aria-label", l), t.innerHTML = '<path d="' + be + "V" + j + "H" + qe(i[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + be + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (B - 4) + '">24 h ago</text><text x="' + v + '" y="' + (B - 4) + '" text-anchor="end">Now</text>';
  }
  function zr(t) {
    var d;
    const i = Number((d = b[t]) == null ? void 0 : d.state), l = Date.now();
    if (rt(t).state_class === "total_increasing") {
      const m = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), E = Math.max(1, l - m);
      return [...Array(49)].map((y, v) => m + E * v / 48).map((y) => [y, Math.round(i * Math.pow((y - m) / E, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((m, E) => [l - (48 - E) * 30 * 60 * 1e3, Math.round(i * (0.96 + 0.04 * Math.sin(E / 6)) * 10) / 10]);
  }
  async function ka(t, i) {
    var qe, Oe;
    let l = ke.get(t);
    if (t.endsWith("_solar_power")) l = { at: Date.now(), points: Md() };
    else if (Ii(t)) l = { at: Date.now(), points: zr(t) };
    else if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const be = new Date(Date.now() - 864e5).toISOString(), he = await N({ type: "history/history_during_period", start_time: be, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ie = ((he == null ? void 0 : he[t]) || []).map((at) => [at.lu != null ? at.lu * 1e3 : Date.parse(at.last_updated || at.last_changed), Number(at.s ?? at.state)]).filter(([at, Wt]) => Number.isFinite(at) && Number.isFinite(Wt));
        l = { at: Date.now(), points: ie };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      ke.set(t, l);
    }
    const d = i || A.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const m = b[t], E = ((qe = m == null ? void 0 : m.attributes) == null ? void 0 : qe.unit_of_measurement) || "", y = l.points.slice(), v = Number(m == null ? void 0 : m.state);
    if (Number.isFinite(v) && !t.endsWith("_solar_power") && y.push([Date.now(), v]), y.length < 2) {
      d.setAttribute("aria-label", Pe(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const B = y.map((be) => be[1]), ee = Math.min(...B), j = Math.max(...B), G = (be) => be.toLocaleString(void 0, { maximumFractionDigits: Math.abs(be) >= 100 ? 0 : 1 }), pe = ((Oe = m == null ? void 0 : m.attributes) == null ? void 0 : Oe.state_class) === "total_increasing";
    Vr(d, y, Pe(t) + ", last 24 hours: " + (pe ? "+" + G(B[B.length - 1] - B[0]) : ee === j ? G(ee) : G(ee) + " to " + G(j)) + (E ? " " + E : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Gn() {
    const t = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!t) return;
    const i = Md();
    Vr(t, i, "Solar, last 24 hours: up to " + ht(Math.max(...i.map((l) => l[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function lr(t, i) {
    const l = i.entity_id, d = w.get(l) || {}, m = { open_cover: 100, close_cover: 0, set_cover_position: i.position, toggle: Ct(l) > 0 ? 0 : 100 }[t], E = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: i.tilt_position }[t];
    m != null && (d.pos = m), E != null && (d.tilt = E), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), w.set(l, d);
  }
  function oo(t, i, l, d) {
    const m = { entity_id: l, ...d || {} };
    return t === "cover" && lr(i, m), le[l] = (le[l] || 0) + 1, Io.set(Jd, JSON.stringify(le)), qa.call(t, i, m) ? Promise.resolve() : Promise.resolve(se(t, i, m));
  }
  function jr(t) {
    const [i, l, d, m] = t.split("|");
    oo(i, l, d, m ? JSON.parse(m) : null).catch(() => {
    });
  }
  function Eo(t, i) {
    Fe.set("pos|" + t, i), it.delete(t), sa = sa.map(() => ""), [A, nt].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((m) => Je(m, i)));
    const l = A.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (l && (l.textContent = Math.round(i) + "%"), (g == null ? void 0 : g.id) === t) {
      const d = nt.querySelector(".tfMoreState"), m = nt.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(i) + "%", d.classList.add("live")), m && (m.textContent = "Currently " + Ct(t) + "%");
    }
    qr(t).forEach((d) => d.update(sn(t)));
  }
  const Hs = (t, i) => {
    const l = t.shiftKey ? 10 : 1, d = { ArrowUp: i + l, ArrowRight: i + l, ArrowDown: i - l, ArrowLeft: i - l, PageUp: i + 25, PageDown: i - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function dr(t, i) {
    var be;
    const l = t.dataset.blocks;
    (be = t.setPointerCapture) == null || be.call(t, i.pointerId);
    const d = (he) => {
      const ie = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (he.clientX - ie.left) / ie.width * 100));
    }, m = d(i), E = i.clientX;
    let y = !1, v = $n(l), B = m, ee = 0;
    const j = () => {
      v = Math.abs(B - v) < 0.2 ? B : v + (B - v) * 0.14, Eo(l, v), ee = requestAnimationFrame(j);
    }, G = () => {
      y || (y = !0, t.classList.add("fine"), ee = requestAnimationFrame(j));
    }, pe = setTimeout(G, 350), qe = (he) => {
      B = d(he), Math.abs(he.clientX - E) > 6 && (clearTimeout(pe), G());
    }, Oe = () => {
      clearTimeout(pe), cancelAnimationFrame(ee), t.removeEventListener("pointermove", qe), t.removeEventListener("pointerup", Oe), t.removeEventListener("pointercancel", Oe), t.classList.remove("fine"), Eo(l, y ? Math.round(v) : (Math.min(3, Math.floor(m / 25)) + 1) * 25), Jo("pos", l);
    };
    t.addEventListener("pointermove", qe), t.addEventListener("pointerup", Oe), t.addEventListener("pointercancel", Oe);
  }
  function Gr(t) {
    var m;
    const [i, l] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    W = { key: i, id: l, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, it.delete(i), yn(), (m = A.querySelector(".tfOpen [data-close]")) == null || m.focus({ preventScroll: !0 });
  }
  function Si(t) {
    var i;
    fe = t.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((l) => {
      var m;
      const d = l === t;
      l.classList.toggle("active", d), l.setAttribute("aria-expanded", String(d)), (m = l.querySelector(".panelExpanded")) == null || m.toggleAttribute("inert", !d);
    }), it.set("areas", Vo(((i = A.querySelector('[data-k="areas"]')) == null ? void 0 : i.style.order) || 1));
  }
  const Un = {
    bright: { value: (t, i) => Math.round(i * 100), text: (t, i) => i ? i + "%" : "Off", send: (t, i) => i > 0 ? ["light", "turn_on", { brightness_pct: i }] : ["light", "turn_off", {}] },
    ct: { value: (t, i) => {
      const [l, d] = Gt(t);
      return Math.round(l + i * (d - l));
    }, text: (t, i) => i.toLocaleString() + "k", send: (t, i) => ["light", "turn_on", { color_temp_kelvin: i }] },
    hue: { value: (t, i) => Math.round(i * 360), text: () => "Colour", send: (t, i) => {
      var l;
      return ["light", "turn_on", { hs_color: [i, Math.max(60, ((l = rt(t).hs_color) == null ? void 0 : l[1]) || 100)] }];
    } },
    pos: { value: (t, i) => Math.round(i * 100), text: (t, i) => Math.round(i) + "%", send: (t, i) => ["cover", "set_cover_position", { position: Math.round(i) }] },
    tilt: { value: (t, i) => Math.round(i * 100), text: (t, i) => "Tilt " + i + "%", send: (t, i) => ["cover", "set_cover_tilt_position", { tilt_position: i }] },
    vol: { value: (t, i) => Math.round(i * 100) / 100, text: (t, i) => Math.round(i * 100) + "%", send: (t, i) => ["media_player", "volume_set", { volume_level: i }] }
  };
  function cr(t, i, l, d) {
    var B;
    const m = Un[i].value(l, d);
    Fe.set(i + "|" + l, m);
    const E = Math.round(d * 100) + "%", y = t.querySelector("i");
    if (i === "tilt") {
      y.style.width = "calc((100% - 6px) * " + d + ")";
      const [ee, j] = t.querySelectorAll("span");
      ee.classList.toggle("lit", d > 0.08), j.classList.toggle("lit", d > 0.92), it.delete(l), sa = sa.map(() => ""), qr(l).forEach((G) => G.update(sn(l)));
    } else if (y) y.style.width = E;
    else {
      let ee = t.querySelector("b");
      ee || (ee = document.createElement("b"), t.appendChild(ee)), ee.style.left = E;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const v = (B = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : B.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = Un[i].text(l, m));
  }
  function Jo(t, i) {
    const l = Fe.get(t + "|" + i), [d, m, E] = Un[t].send(i, l), y = () => setTimeout(() => {
      Fe.delete(t + "|" + i), yn();
    }, 1500);
    oo(d, m, i, E).then(y, y);
  }
  function ur(t) {
    t.addEventListener("click", (i) => {
      var d;
      const l = i.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel");
      if (Vn && !i.target.closest(".tfBoardMenu,[data-board-more]") && Da(), !(!l || !t.contains(l) || l.disabled))
        if (l.dataset.boardMore)
          (Vn == null ? void 0 : Vn.key) === l.dataset.boardMore ? Da(!0) : to(l.dataset.boardMore, l);
        else if (l.dataset.boardAct) wi(Vn.key, l.dataset.boardAct);
        else if (l.dataset.boardShow) Ko(l.dataset.boardShow);
        else if (l.dataset.energyPick) ui(l.dataset.energyPick);
        else if (l.dataset.act) jr(l.dataset.act);
        else if (l.hasAttribute("data-details")) pn(!(g != null && g.details));
        else if (l.hasAttribute("data-details-close")) pn(!1);
        else if (l.dataset.summary) $i(l.dataset.summary, l);
        else if (l.dataset.star) Rr(l.dataset.star);
        else if (l.hasAttribute("data-more-back"))
          g = g.back, sr();
        else if (l.hasAttribute("data-favs-edit")) Mi("favourites", l);
        else if (l.dataset.acts) JSON.parse(l.dataset.acts).forEach(([m, E, y, v]) => oo(m, E, y, v).catch(() => {
        }));
        else if (l.dataset.more) Mi(l.dataset.more, l);
        else if (l.hasAttribute("data-more-close")) Ci();
        else if (l.dataset.go) Ra("room:" + l.dataset.go);
        else if (l.hasAttribute("data-area-back")) ra();
        else if (l.dataset.open) Gr(l);
        else if (l.hasAttribute("data-close")) {
          const m = W;
          W = null, it.delete(m.key), yn(), (d = A.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else l.classList.contains("tfAreaPanel") && !l.classList.contains("active") && Si(l);
    }), t.addEventListener("keydown", (i) => {
      var d, m, E, y, v, B, ee;
      const l = i.target;
      if ((d = l.dataset) != null && d.open && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Gr(l)), (m = l.dataset) != null && m.energyPick && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), ui(l.dataset.energyPick)), (E = l.classList) != null && E.contains("tfAreaPanel") && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), Si(l)), (y = l.dataset) != null && y.summary && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), $i(l.dataset.summary, l)), i.key === "Escape" && Vn && t === A) {
        i.preventDefault(), Da(!0);
        return;
      }
      if (i.key === "Escape" && fn && t === A) {
        i.preventDefault(), or(!1), (v = u("dashEditNav")) == null || v.focus();
        return;
      }
      if (i.key === "Escape" && Se && t === A && (i.preventDefault(), ra()), (B = l.dataset) != null && B.blocks) {
        const j = l.dataset.blocks, G = Hs(i, Math.round($n(j)));
        if (G == null) return;
        i.preventDefault(), Eo(j, G), clearTimeout(M.get(j)), M.set(j, setTimeout(() => Jo("pos", j), 500));
        return;
      }
      if ((ee = l.dataset) != null && ee.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(i.key)) {
        i.preventDefault();
        const [j, G] = l.dataset.drag.split("|"), pe = Number(l.getAttribute("aria-valuenow")) / 100, qe = i.key === "Home" ? 0 : i.key === "End" ? 1 : Math.max(0, Math.min(1, pe + (i.key === "ArrowLeft" || i.key === "ArrowDown" ? -0.05 : 0.05)));
        cr(l, j, G, qe), Jo(j, G);
      }
    }), t.addEventListener("pointerdown", (i) => {
      var j;
      const l = i.target.closest("[data-blocks]");
      if (l && i.button === 0) {
        i.preventDefault(), dr(l, i);
        return;
      }
      const d = i.target.closest("[data-drag]");
      if (!d) return;
      const [m, E] = d.dataset.drag.split("|");
      if (m === "bright" && !ze(E)) {
        jr(vt("light", "toggle", E));
        return;
      }
      i.preventDefault(), (j = d.setPointerCapture) == null || j.call(d, i.pointerId);
      const y = m === "tilt" ? 3 : 0, v = (G) => {
        const pe = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (G.clientX - pe.left - y) / (pe.width - y * 2)));
      };
      cr(d, m, E, v(i));
      const B = (G) => cr(d, m, E, v(G)), ee = () => {
        d.removeEventListener("pointermove", B), d.removeEventListener("pointerup", ee), d.removeEventListener("pointercancel", ee), Jo(m, E);
      };
      d.addEventListener("pointermove", B), d.addEventListener("pointerup", ee), d.addEventListener("pointercancel", ee);
    });
  }
  return A && x && (go(), ur(A), ur(nt), nt.addEventListener("click", (t) => {
    t.target === nt && Ci();
  }), (io = n.getElementById("homeNav")) == null || io.addEventListener("click", () => {
    Se && ra();
  }), (Ur = n.querySelector(".bottomNav")) == null || Ur.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + ec + "</button>"), (ro = u("dashEditNav")) == null || ro.addEventListener("click", () => or(!fn)), A.addEventListener("pointerdown", So), A.addEventListener("hass-action", (t) => {
    var d, m;
    const i = (m = (d = t.target).closest) == null ? void 0 : m.call(d, ".tfDac"), l = i == null ? void 0 : i.dataset.k;
    !l || !i.dataset.dac.startsWith("dash:") || fn || (t.stopPropagation(), Ea.has(l) ? Ea.delete(l) : Ea.add(l), Bn());
  }), new ResizeObserver(() => {
    h.classList.contains("tfDash") && bo() !== Go ? yn() : gi();
  }).observe(A), window.addEventListener("resize", gi, { passive: !0 }), nt.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), g != null && g.details ? pn(!1) : Ci());
  })), ae(), {
    update(t) {
      if (!x) return;
      const i = !Object.keys(b).length;
      b = t || {}, i ? xn() : yn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      tt = !0, mn == null || mn.destroy(), mn = null, cn == null || cn.forEach((t) => t.destroy()), cn = null;
    },
    resume() {
      tt = !1, !(!x || !(A != null && A.querySelector("[data-tf]"))) && (Vt.isConnected && dt(Vt.style.order), ut());
    }
  };
}
const Bm = "0.45.1", wl = "move_assistant", Pm = "move_assistant", ac = "move_assistant_checkin_reminder";
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
      const h = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: wl
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
        var x, L;
        return (L = (x = this._hass) == null ? void 0 : x.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(f, h) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var h, f;
        return Object.keys(((f = (h = this._hass) == null ? void 0 : h.services) == null ? void 0 : f.notify) || {}).sort();
      },
      setReminderAutomation: (h) => this._setReminderAutomation(h),
      setLight: (h) => this.classList.toggle("lightBody", h),
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
        const h = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        h === this._lastSaved || h === this._pendingJson || (this._lastSaved = h, (f = this._app) == null || f.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: wl }
    ).catch(() => {
    });
  }
  _save(s) {
    this._pendingJson = JSON.stringify(s), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: wl,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(s, o = {}) {
    var u, h;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((h = this._hass) == null || h.callWS({
      type: "fire_event",
      event_type: Pm,
      event_data: { action: s, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(s) {
    const o = `config/automation/config/${ac}`;
    if (!s) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (f) {
        if ((f == null ? void 0 : f.status_code) !== 404 && (f == null ? void 0 : f.status) !== 404) throw f;
      }
      return;
    }
    const u = (f) => `${f}:00`, h = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: ac,
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
