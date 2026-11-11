const cu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', pu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"] .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, uu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, fu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', hu = `<main id="app"><div class="shell">
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
`, yn = {
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
}, wn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, wc = (n, l, i) => n + (l - n) * i, ic = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, mu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), xc = {}, Qe = (n, l, i) => {
  const c = n + l + i;
  return xc[c] || (xc[c] = mu(ic(n).map((m, x) => m + (ic(l)[x] - m) * i)));
}, yc = {}, dd = (n) => yc[n] || (yc[n] = ic(n)), Od = (n, l, i, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let x = 0, k = 1, A = m;
  for (let S = 0; S < 18; S++)
    A = (x + k) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * i + A * A * A < m ? x = A : k = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, gu = { std: Od(0.2, 0, 0, 1), acc: Od(0.3, 0, 1, 1), dec: Od(0, 0, 0, 1) };
function bd(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function kp(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Qe(l.clear[0], l.cloudy[0], 0.12), Qe(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Qe(l.rain[0], "#000000", 0.22), Qe(l.rain[1], "#000000", 0.22)], l;
}
const rc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], sc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], lc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function dc(n, l = yn) {
  const i = { ...yn, ...l }, c = kp(i), m = String(n).split("/"), x = c[m[0]] ? m[0] : "clear", k = m[1] === "night", A = c[x][k ? 1 : 0], S = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: rc.map(() => ({ o: 0 })),
    rain: sc.map(() => ({ o: 0, dy: -16 })),
    snow: lc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, _ = (z) => rc.map(() => ({ o: z }));
  return x === "clear" ? k ? (S.moon.o = 1, S.stars = _(1)) : S.sun.o = 1 : x === "partly" ? (S.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (S.moon = { x: 34, y: 33, d: 48, o: 1 }, S.stars = _(0.7)) : S.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (S.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? S.moon = { x: 40, y: 36, d: 40, o: 0 } : S.sun = { x: 40, y: 36, r: 20, o: 0 }) : (S.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? S.moon = { x: 38, y: 28, d: 36, o: 0 } : S.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? S.snow = lc.map(() => ({ o: 1, dy: 0 })) : S.rain = sc.map((z, F) => ({ o: x === "storm" && F === 1 ? 0 : 1, dy: 0 })), x === "storm" && (S.bolt = { o: 1, dy: 0 })), S;
}
const kc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function vu(n, l, i, c = yn, m = !1) {
  const x = { ...yn, ...c }, k = (q, G) => q > 0.01 && G > 0.01 ? "stay" : q > 0.01 ? "leave" : G > 0.01 ? "enter" : "none", A = (q, G, st, et) => {
    const K = q[0] + G * et, j = q[1] - (st - 1 - G) * et;
    return gu[q[2]](wn((i - K) / Math.max(1e-3, j - K)));
  }, S = (q, G, st, et = 0, K = 1, j = 0) => {
    const ft = k(q.o, G.o);
    if (ft === "none") return { ...G, o: 0 };
    const mt = A(kc[st][ft], et, K, j), bt = {};
    for (const nt in G) bt[nt] = m && ft !== "stay" && nt !== "o" ? ft === "leave" ? q[nt] : G[nt] : wc(q[nt], G[nt], mt);
    return bt;
  }, _ = A(kc.sky, 0, 1, 0);
  let z, F;
  if (n.night !== l.night) {
    const q = Math.min(n.clearness, l.clearness), G = Qe(Qe(n.sky, l.sky, 0.5), x.dusk, 0.6 * q);
    z = _ < 0.5 ? Qe(n.sky, G, _ * 2) : Qe(G, l.sky, _ * 2 - 1), F = q > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    z = Qe(n.sky, l.sky, _), F = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: wc(n.clearness, l.clearness, i),
    sky: z,
    skyStops: F,
    skyT: _,
    sun: S(n.sun, l.sun, "body"),
    moon: S(n.moon, l.moon, "body"),
    cloud: S(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((q, G) => S(n.stars[G], q, "fx", G, l.stars.length, 0.05)),
    rain: l.rain.map((q, G) => S(n.rain[G], q, "fx", G, l.rain.length, 0.05)),
    snow: l.snow.map((q, G) => S(n.snow[G], q, "fx", G, l.snow.length, 0.05)),
    bolt: S(n.bolt, l.bolt, "fx")
  };
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
], bn = (n, l) => (bu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, wu = 0, uc = 1, fc = 2, hc = 3, mc = 4, vn = 5, Vs = 6, xr = 7, gc = 8, fd = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), xu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], yu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Mp = (n, l, i) => {
  let c = !1;
  for (let m = 0, x = n.length - 1; m < n.length; x = m++) {
    const k = n[m], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (c = !c);
  }
  return c;
};
function Sp(n, { size: l = 90, px: i = 2, oneBit: c = !1, colors: m = yn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: A = 0, idle: S = !1 } = {}) {
  const _ = { ...yn, ...m }, z = Math.sin, F = Math.PI * 2, q = Math.max(6, Math.round(l / i)), G = q / 90, st = S ? Math.floor(A / 100) * 100 : 0, et = S ? z(F * st / 3600) : 0, K = S ? 1.8 * z(F * st / 6400) : 0, j = S ? 0.9 * z(F * st / 4100) : 0, ft = S ? 0.8 * z(F * st / 5200) : 0, mt = st / 3400 % 1, bt = S && n.bolt.o > 0.5 && (mt < 0.04 || mt > 0.08 && mt < 0.11), nt = new Array(q * q), Q = new Uint8Array(q * q), E = (L, P, B, W, yt) => {
    B == null || L < 0 || P < 0 || L >= q || P >= q || (W >= 1 || W > bn(L + 5, P + 3)) && (nt[P * q + L] = B, Q[P * q + L] = yt);
  }, Z = (L, P, B, W) => {
    for (let yt = Math.max(0, Math.floor(P - B) - 1); yt <= Math.min(q - 1, P + B + 1); yt++) for (let wt = Math.max(0, Math.floor(L - B) - 1); wt <= Math.min(q - 1, L + B + 1); wt++) W(wt, yt, wt + 0.5 - L, yt + 0.5 - P);
  }, Mt = n.skyStops || [n.sky], tt = n.skyT || 0;
  for (let L = 0; L < q; L++) {
    const P = n.night ? wn(1 - (L + 0.5) / (q * 0.7)) * 0.85 : wn(((L + 0.5) / q - 0.35) / 0.65) * 0.85;
    for (let B = 0; B < q; B++) {
      let W = Mt[0];
      if (Mt.length > 1) {
        const yt = tt * (Mt.length - 1), wt = Math.min(Mt.length - 2, Math.floor(yt));
        W = yt - wt > bn(B, L) ? Mt[wt + 1] : Mt[wt];
      }
      P > bn(B + 2, L + 5) && (W = n.night ? Qe(W, "#000000", 0.28) : Qe(W, "#ffffff", 0.2)), nt[L * q + B] = bt ? Qe(W, "#ffffff", 0.25) : W;
    }
  }
  if (n.sun.o > 0.01) {
    const L = n.sun.x * G, P = n.sun.y * G, B = Math.max(1, n.sun.r * G);
    if (S) {
      const W = B * (1.45 + 0.06 * et), yt = Qe(_.sun, "#ffffff", 0.55);
      if (Z(L, P, W, (wt, X, kt, St) => {
        const Xt = Math.sqrt(kt * kt + St * St);
        Xt > B && Xt < W && E(wt, X, yt, 0.26 * (1 - (Xt - B) / (W - B)) * n.sun.o, wu);
      }), n.sun.o > 0.5) {
        const wt = Math.floor(st / 500) % 2, X = Math.max(1, B * 0.22);
        for (let kt = 0; kt < 8; kt++) if (kt % 2 === wt) for (let St = B + 1.5; St < B + 1.5 + X; St += 0.7) E(Math.floor(L + Math.cos(kt * Math.PI / 4) * St), Math.floor(P + Math.sin(kt * Math.PI / 4) * St), _.sun, n.sun.o, gc);
      }
    }
    Z(L, P, B, (W, yt, wt, X) => {
      if (wt * wt + X * X > B * B) return;
      const kt = ((wt * 0.643 + X * 0.766) / B + 1) / 2;
      E(W, yt, wn((kt - 0.62) / 0.38) > bn(W, yt) ? _.sunEdge : _.sun, n.sun.o, uc);
    });
  }
  if (rc.forEach((L, P) => {
    const B = n.stars[P].o;
    if (B < 0.01) return;
    const W = Math.floor(L[0] * G), yt = Math.floor(L[1] * G), wt = S ? (Math.floor(st / 300) + P * 3) % 6 : 0;
    if (wt === 5) return;
    const X = Math.round(L[2] * G * (wt === 4 ? 0.3 : wt < 2 ? 1 : 0.6));
    E(W, yt, _.star, B, xr);
    for (let kt = 1; kt <= X; kt++) {
      const St = kt === X && X > 1 ? Qe(_.star, n.sky, 0.5) : _.star;
      E(W - kt, yt, St, B, xr), E(W + kt, yt, St, B, xr), E(W, yt - kt, St, B, xr), E(W, yt + kt, St, B, xr);
    }
  }), n.moon.o > 0.01) {
    const L = Math.max(1.5, n.moon.d * G * 0.37), P = n.moon.x * G, B = n.moon.y * G + (S && ft > 0.4 ? -1 : 0), W = P + 0.547 * L, yt = B - 0.503 * L, wt = 0.82 * L, X = Qe(_.moon, "#ffffff", 0.6);
    Z(P, B, L, (kt, St, Xt, oe) => {
      if (Xt * Xt + oe * oe > L * L) return;
      const na = kt + 0.5 - W, xe = St + 0.5 - yt;
      na * na + xe * xe <= wt * wt || E(kt, St, wn((oe + L) / (2 * L) * 1.1 - 0.1) > bn(kt, St) ? _.moon : X, n.moon.o, fc);
    });
  }
  const rt = Math.max(2, Math.round(15.65 * G)), at = Math.max(1, Math.round(5.87 * G * 0.5));
  sc.forEach((L, P) => {
    const B = n.rain[P];
    let W = B.dy, yt = B.o;
    if (yt < 0.01) return;
    if (S) {
      const kt = (st / 950 + P / 3) % 1;
      W += -5 + kt * 14, yt *= kt < 0.18 ? kt / 0.18 : kt > 0.72 ? (1 - kt) / 0.28 : 1;
    }
    const wt = (L[0] + 3 + K) * G, X = (L[1] + W) * G;
    for (let kt = 0; kt < rt; kt++) for (let St = 0; St < at; St++) E(Math.floor(wt - 0.208 * kt) + St, Math.floor(X) + kt, _.rain, yt, mc);
  });
  const qt = Math.max(0, Math.round(7.34 * G / 2.6));
  if (lc.forEach((L, P) => {
    const B = n.snow[P];
    let W = B.dy, yt = 0, wt = B.o;
    if (wt < 0.01) return;
    if (S) {
      const St = (st / 3200 + P / 5) % 1;
      W += -6 + St * 14, yt = 1.5 * z(F * (St * 1.5 + P / 5)), wt *= St < 0.2 ? St / 0.2 : St > 0.75 ? (1 - St) / 0.25 : 1;
    }
    const X = Math.floor((L[0] + 3.67 + yt + K) * G), kt = Math.floor((L[1] + 3.67 + W) * G);
    E(X, kt, _.snow, wt, vn);
    for (let St = 1; St <= qt; St++)
      E(X - St, kt, _.snow, wt, vn), E(X + St, kt, _.snow, wt, vn), E(X, kt - St, _.snow, wt, vn), E(X, kt + St, _.snow, wt, vn), qt > 1 && St < qt && (E(X - St, kt - St, _.snow, wt, vn), E(X + St, kt - St, _.snow, wt, vn), E(X - St, kt + St, _.snow, wt, vn), E(X + St, kt + St, _.snow, wt, vn));
  }), n.bolt.o > 0.01)
    if (q >= 30) {
      const L = 39 + K, P = 50 + n.bolt.dy;
      for (let B = Math.floor(P * G); B <= (P + 28) * G; B++) for (let W = Math.floor(L * G); W <= (L + 13) * G; W++)
        Mp(yu, (W + 0.5) / G - L, (B + 0.5) / G - P) && E(W, B, _.sun, n.bolt.o, Vs);
    } else {
      const L = q / 18, P = 7, B = 10 + Math.round(n.bolt.dy * 0.2);
      xu.forEach((W, yt) => W.split("").forEach((wt, X) => {
        if (wt !== "#") return;
        const kt = Math.floor((P + X) * L), St = Math.floor((B + yt) * L);
        for (let Xt = St; Xt < Math.max(St + 1, Math.floor((B + yt + 1) * L)); Xt++) for (let oe = kt; oe < Math.max(kt + 1, Math.floor((P + X + 1) * L)); oe++) E(oe, Xt, _.sun, n.bolt.o, Vs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const L = Math.max(3, n.cloud.w * G), P = L * 0.6665, B = (n.cloud.x + K) * G - L / 2, W = (n.cloud.y + j) * G - P / 2, yt = Qe(_.cloudDay, _.cloudNight, Math.round(n.cloud.f * 4) / 4), wt = Qe(yt, "#000000", 0.16);
    for (let X = Math.max(0, Math.floor(W) - 1); X <= Math.min(q - 1, W + P + 1); X++) for (let kt = Math.max(0, Math.floor(B) - 1); kt <= Math.min(q - 1, B + L + 1); kt++) {
      const St = (kt + 0.5 - B) / L, Xt = (X + 0.5 - W) / L;
      fd(St, Xt) && E(kt, X, !fd(St, Xt + 1 / L) || wn((Xt - 0.42) / 0.25) * 0.8 > bn(kt, X) ? wt : yt, n.cloud.o, hc);
    }
  }
  return Cp(nt, Q, q, q, { oneBit: c, ink: x, paper: k, snowInk: !n.night });
}
function Cp(n, l, i, c, { oneBit: m, ink: x, paper: k, snowInk: A }) {
  const S = new Uint8ClampedArray(i * c * 4), _ = dd(x), z = dd(k);
  for (let F = 0; F < c; F++) for (let q = 0; q < i; q++) {
    const G = F * i + q, st = l[G];
    if (n[G] == null) continue;
    let et = dd(n[G]);
    if (m) {
      let K;
      st === mc || st === gc ? K = !0 : st === vn ? K = A : st === xr || st === Vs ? K = !1 : K = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= bn(q, F), (st === uc || st === fc || st === hc || st === Vs) && (q > 0 && l[G - 1] !== st || q < i - 1 && l[G + 1] !== st || F > 0 && l[G - i] !== st || F < c - 1 && l[G + i] !== st) && (K = !0), et = K ? _ : z;
    }
    S[G * 4] = et[0], S[G * 4 + 1] = et[1], S[G * 4 + 2] = et[2], S[G * 4 + 3] = 255;
  }
  return { w: i, h: c, data: S };
}
const ku = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Mu = (n) => bd(n, !1).split("/")[0], qd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Su = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Cu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Tu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Lu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Eu = [".##", "##.", ".#.", "#.."];
function Tp(n, { width: l, height: i, colors: c, wave: m = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const A = { ...yn, dawn: "#e5a77e", ...c }, S = kp(A), _ = l, z = i, F = _ / 6, q = F / 2, G = Math.PI * 2, st = n.length ? n : [{ cond: "cloudy", night: !1 }], et = [...Array(12)].map((mt, bt) => {
    const nt = st[Math.min(bt, st.length - 1)], Q = Mu(nt.cond), E = bt % 2 === 1;
    return { cond: nt.cond, k: Q, night: E, sky: S[Q][E ? 1 : 0], cover: ku[Q] };
  }), K = (mt) => z * (0.5 - m * Math.cos(G * (mt / F - 0.25)));
  return { C: A, S: et, W: _, H: z, cw: F, sw: q, TAU: G, yb: K, side: (mt, bt, nt) => {
    const Q = (mt ? K(bt) - nt : nt - K(bt)) / Math.max(3, x * 1.4) + 0.5;
    return Q <= 0 ? 0 : Q >= 1 ? 1 : Q;
  }, glowAt: (mt) => {
    const bt = ((mt / F - 0.25) % 1 + 1) % 1, nt = Math.max(0, Math.min(5, Math.round(mt / F - 0.25))), Q = Math.max(0, Math.min(5, Math.round(mt / F - 0.75))), E = 1 - (et[2 * nt].cover + et[2 * Q + 1].cover) / 2, Z = Math.sin(Math.PI * Math.min(1, Math.max(0, K(mt) / z)));
    return { c: bt < 0.5 ? A.dusk : A.dawn, a: k * (0.2 + 0.8 * E) * Z * Z };
  }, soft: x, tw: F * 0.3, sy: z / 90 };
}
function Lp(n, { clock: l = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: m, sw: x, side: k, C: A, TAU: S, sy: _ } = n, z = l, F = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((q, G) => {
    const st = qd(c * 977 + G * 131 + 7), et = (G + 0.5) * x, K = q.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[q.k] : 0;
    for (let j = 0; j < K; j++) {
      const ft = et + (st() - 0.5) * x * 1.6, mt = (6 + st() * 76) * _, bt = st() < 0.35, nt = 1.8 + st() * 1.6, Q = k(!0, ft, mt) * (bt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * z / 2600 + j * 1.7 + G) : 1);
      Q >= 0.03 && F.stars.push({ x: ft, y: mt, big: bt, size: nt, o: Q });
    }
    if (!q.night && (q.k === "clear" || q.k === "partly")) {
      const j = et + (st() - 0.5) * x * 0.3, ft = Math.min(15, x * 0.29);
      F.suns.push({ x: j, y: 32 * _, rad: ft, halo: ft * 2.8 * (i ? 1 + 0.07 * Math.sin(S * z / 3600 + G) : 1) });
    }
    if (q.night && (q.k === "clear" || q.k === "partly")) {
      const j = Math.min(0.78, x * 0.55 / 34), ft = et - 23 * j + (st() - 0.5) * x * 0.2;
      F.moons.push({ x: ft + 23 * j, y: (4 + (i ? 0.8 * Math.sin(S * z / 5200 + G) : 0)) * _ + 23 * j, d: 46 * j });
    }
  }), m.forEach((q, G) => {
    const st = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[q.k];
    if (!st) return;
    const et = qd(c * 577 + G * 71 + 3), K = (G + 0.5) * x, j = q.k === "rain" || q.k === "storm" || q.night ? A.cloudNight : A.cloudDay, ft = q.night ? 0.82 : q.k === "storm" ? 0.75 : 1;
    for (let mt = 0; mt < st; mt++) {
      const bt = x / 46 * (q.k === "partly" ? 0.85 : 0.75 + et() * 0.55), nt = K + (q.k === "partly" ? x * 0.12 : (et() - 0.5) * x * 1.05), Q = (q.k === "partly" ? 40 : 6 + et() * 26) * _, E = i ? 2.5 * Math.sin(S * z / 9e3 + G * 1.3 + mt * 2.1) : 0, Z = i ? 0.9 * Math.sin(S * z / 6100 + G + mt) : 0;
      F.clouds.push({ x: nt - 23 * bt + E, y: Q - 15.33 * bt + Z, w: 46 * bt, h: 30.66 * bt, fill: j, o: ft * (st > 1 && mt === 0 ? 0.85 : 1) });
    }
  }), m.forEach((q, G) => {
    const st = qd(c * 313 + G * 29 + 11), et = (G + 0.5) * x, K = q.cond === "pouring" ? 16 : q.cond === "rainy" || q.cond === "hail" ? 9 : q.cond === "lightning-rainy" ? 12 : q.cond === "snowy-rainy" ? 5 : 0;
    for (let ft = 0; ft < K; ft++) {
      let mt = et + (st() - 0.5) * x * 1.05, bt = 44 + st() * 36, nt = 1;
      if (i) {
        const E = ((bt - 44 + z * 0.04) % 36 + 36) % 36;
        mt -= 0.21 * (E - (bt - 44)), bt = 44 + E, nt = Math.min(1, E / 6, (36 - E) / 6);
      }
      bt *= _;
      const Q = k(q.night, mt, bt) * nt;
      Q >= 0.05 && F.drops.push({ x: mt, y: bt, o: Q });
    }
    const j = q.cond === "snowy" ? 11 : q.cond === "snowy-rainy" ? 6 : 0;
    for (let ft = 0; ft < j; ft++) {
      let mt = et + (st() - 0.5) * x * 1.05, bt = 40 + st() * 44, nt = 1;
      if (i) {
        const E = ((bt - 40 + z * 9e-3) % 44 + 44) % 44;
        bt = 40 + E, mt += 1.6 * Math.sin(S * z / 2800 + ft * 1.9 + G), nt = Math.min(1, E / 6, (44 - E) / 6);
      }
      bt *= _;
      const Q = k(q.night, mt, bt) * nt;
      Q >= 0.05 && F.flakes.push({ x: mt, y: bt, o: Q });
    }
    if (q.k === "fog") {
      const ft = q.night ? "#c8ccd6" : "#ffffff", mt = q.night ? 0.28 : 0.62, bt = i ? 4 * Math.sin(S * z / 8e3 + G) : 0;
      for (let nt = 0; nt < 4; nt++) F.fogs.push({ x: et - x * 0.75 + nt % 2 * x * 0.18 + (nt % 2 ? bt : -bt), y: (30 + nt * 13) * _, w: x * 1.3, c: ft, a: mt });
    }
    if (q.k === "storm") {
      const ft = (z / 3400 + G * 0.37) % 1;
      F.bolts.push({ x: et + (st() - 0.5) * x * 0.3 - 5, y: 36 * _, o: i && !(ft < 0.05 || ft > 0.09 && ft < 0.12) ? 0.8 : 1 });
    }
  }), F;
}
function _u(n, l, i, c, m, x, k, A) {
  const { S, C: _, cw: z, yb: F, glowAt: q, soft: G, tw: st, sy: et } = n, K = new Array(i * c), j = new Uint8Array(i * c), ft = new Uint8Array(i * c), mt = (L, P, B, W, yt) => {
    B == null || L < 0 || P < 0 || L >= i || P >= c || (W >= 1 || W > bn(L + 5, P + 3)) && (K[P * i + L] = B, j[P * i + L] = yt);
  }, bt = (L, P, B, W) => {
    for (let yt = Math.max(0, Math.floor(P - B) - 1); yt <= Math.min(c - 1, P + B + 1); yt++) for (let wt = Math.max(0, Math.floor(L - B) - 1); wt <= Math.min(i - 1, L + B + 1); wt++) W(wt, yt, wt + 0.5 - L, yt + 0.5 - P);
  }, nt = (L, P, B) => {
    for (let yt = 0; yt < L.length - 1; yt++) {
      const wt = (yt + P) * z;
      if (B < wt - st / 2) return [L[yt], L[yt], 0];
      if (B <= wt + st / 2) return [L[yt], L[yt + 1], (B - wt + st / 2) / st];
    }
    const W = L[L.length - 1];
    return [W, W, 0];
  }, Q = S.filter((L) => !L.night).map((L) => L.sky), E = S.filter((L) => L.night).map((L) => L.sky), Z = G / x, Mt = 16 * et / x;
  for (let L = 0; L < i; L++) {
    const P = (L + 0.5) * m, B = F(P) / x, W = nt(Q, 0.75, P), yt = nt(E, 1.25, P), wt = q(P);
    for (let X = 0; X < c; X++) {
      const kt = bn(L, X), St = X + 0.5 - B, Xt = (Z > 0.01 ? wn(0.5 + St / Z) : St > 0 ? 1 : 0) > kt;
      let oe = Xt ? W[2] > kt ? W[1] : W[0] : yt[2] > kt ? yt[1] : yt[0];
      (Xt ? wn(((X + 0.5) / c - 0.45) / 0.55) * 0.7 : wn(1 - (X + 0.5) / (c * 0.55)) * 0.7) > bn(L + 2, X + 5) && (oe = Xt ? Qe(oe, "#ffffff", 0.18) : Qe(oe, "#000000", 0.25)), Xt && St >= 0 && St < Mt && wt.a * 1.3 * (1 - St / Mt) > bn(L + 6, X + 1) && (oe = wt.c), K[X * i + L] = oe, ft[X * i + L] = Xt ? 0 : 1;
    }
  }
  const tt = Qe(_.sun, "#ffffff", 0.55), rt = Qe(_.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const P = Math.floor(L.x / m), B = Math.floor(L.y / x);
    if (P < 0 || B < 0 || P >= i || B >= c || !ft[B * i + P] || L.o < 0.15) return;
    const W = L.o > 0.45 ? _.star : Qe(_.star, K[B * i + P], 0.5), yt = L.big && L.o > 0.6 ? Math.floor(L.size / m) : 0;
    mt(P, B, W, 1, xr);
    for (let wt = 1; wt <= yt; wt++) [[P - wt, B], [P + wt, B], [P, B - wt], [P, B + wt]].forEach((X) => {
      X[0] >= 0 && X[1] >= 0 && X[0] < i && X[1] < c && ft[X[1] * i + X[0]] && mt(X[0], X[1], W, 1, xr);
    });
  }), l.suns.forEach((L) => {
    const P = Math.max(1.5, L.rad / m), B = L.x / m, W = L.y / x, yt = L.halo / m * 0.85;
    if (bt(B, W, yt, (wt, X, kt, St) => {
      const Xt = Math.sqrt(kt * kt + St * St);
      Xt > P && Xt < yt && !ft[X * i + wt] && mt(wt, X, tt, 0.3 * (1 - (Xt - P) / (yt - P)), 0);
    }), A) {
      const wt = Math.floor(k / 500) % 2, X = Math.max(1, P * 0.3);
      for (let kt = 0; kt < 8; kt++) if (kt % 2 === wt) for (let St = P + 1.2; St < P + 1.2 + X; St += 0.7) mt(Math.floor(B + Math.cos(kt * Math.PI / 4) * St), Math.floor(W + Math.sin(kt * Math.PI / 4) * St), _.sun, 1, gc);
    }
    bt(B, W, P, (wt, X, kt, St) => {
      kt * kt + St * St <= P * P && mt(wt, X, wn(((St / P + 1) / 2 - 0.6) / 0.4) > bn(wt, X) ? _.sunEdge : _.sun, 1, uc);
    });
  }), l.moons.forEach((L) => {
    const P = Math.max(1.5, L.d * 0.37 / m), B = L.x / m, W = L.y / x, yt = B + 0.547 * P, wt = W - 0.503 * P, X = 0.82 * P;
    bt(B, W, P, (kt, St, Xt, oe) => {
      if (Xt * Xt + oe * oe > P * P) return;
      const na = kt + 0.5 - yt, xe = St + 0.5 - wt;
      na * na + xe * xe > X * X && mt(kt, St, wn((oe + P) / (2 * P) * 1.1 - 0.1) > bn(kt, St) ? _.moon : rt, 1, fc);
    });
  }), l.clouds.forEach((L) => {
    const P = Math.max(3, L.w / m), B = P * 0.6665, W = L.x / m, yt = L.y / x, wt = Qe(L.fill, "#000000", 0.16);
    for (let X = Math.max(0, Math.floor(yt) - 1); X <= Math.min(c - 1, yt + B + 1); X++) for (let kt = Math.max(0, Math.floor(W) - 1); kt <= Math.min(i - 1, W + P + 1); kt++) {
      const St = (kt + 0.5 - W) / P, Xt = (X + 0.5 - yt) / P;
      fd(St, Xt) && mt(kt, X, !fd(St, Xt + 1 / P) || wn((Xt - 0.42) / 0.25) * 0.8 > bn(kt, X) ? wt : L.fill, L.o, hc);
    }
  }), l.fogs.forEach((L) => {
    const P = Math.floor(L.y / x), B = Math.max(P, Math.floor((L.y + 6 * et) / x) - 1), W = Math.floor(L.x / m), yt = Math.floor((L.x + L.w) / m);
    for (let wt = P; wt <= B; wt++) for (let X = W; X <= yt; X++) {
      const kt = (X - W) / Math.max(1, yt - W);
      mt(X, wt, L.c, L.a * (kt < 0.25 ? kt / 0.25 : kt > 0.75 ? (1 - kt) / 0.25 : 1), 0);
    }
  });
  const at = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const P = L.x / m, B = Math.floor(L.y / x);
    for (let W = 0; W < at; W++) mt(Math.floor(P - 0.208 * W * x / m), B + W, _.rain, L.o, mc);
  });
  const qt = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((L) => {
    const P = Math.floor(L.x / m), B = Math.floor(L.y / x);
    mt(P, B, _.snow, L.o, vn);
    for (let W = 1; W <= qt; W++)
      mt(P - W, B, _.snow, L.o, vn), mt(P + W, B, _.snow, L.o, vn), mt(P, B - W, _.snow, L.o, vn), mt(P, B + W, _.snow, L.o, vn);
  }), l.bolts.forEach((L) => {
    if (m <= 3.5)
      for (let P = Math.floor(L.y / x); P <= (L.y + 24) / x; P++) for (let B = Math.floor(L.x / m); B <= (L.x + 11) / m; B++)
        Mp(Au, (B + 0.5) * m - L.x, (P + 0.5) * x - L.y) && mt(B, P, _.sun, 1, Vs);
    else {
      const P = Math.round(L.x / m), B = Math.round(L.y / x);
      Eu.forEach((W, yt) => W.split("").forEach((wt, X) => {
        wt === "#" && mt(P + X, B + yt, _.sun, 1, Vs);
      }));
    }
  }), { col: K, ids: j };
}
function Du(n, l) {
  const i = l.px, c = Math.max(6, Math.round(l.width / i)), m = Math.max(6, Math.round(l.height / i)), x = l.width / c, k = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, S = (G) => {
    const st = Tp(G, l);
    return _u(st, Lp(st, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, x, k, A, l.ambient);
  }, _ = S(n), z = l.reveal == null ? 1 : wn(l.reveal);
  let F = _.col, q = _.ids;
  if (z < 1) {
    const G = l.prev ? S(l.prev) : null, st = z * (c + 12);
    F = new Array(c * m), q = new Uint8Array(c * m);
    for (let et = 0; et < c * m; et++) {
      const K = et % c, j = et / c | 0;
      (l.reduce ? z : wn((st - K) / 12)) > bn(K, j) ? (F[et] = _.col[et], q[et] = _.ids[et]) : G ? (F[et] = G.col[et], q[et] = G.ids[et]) : (F[et] = null, q[et] = 255);
    }
  }
  return Cp(F, q, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Bu(n, l, i) {
  const c = i.width, m = i.height, x = i.reveal == null ? 1 : wn(i.reveal), k = (q, G) => {
    const st = Tp(G, i);
    Ru(q, st, Lp(st, i));
  };
  if (n.clearRect(0, 0, c, m), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const A = n.canvas, S = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (S.width !== A.width || S.height !== A.height) && (S.width = A.width, S.height = A.height);
  const _ = S.getContext("2d");
  _.setTransform(n.getTransform()), _.clearRect(0, 0, c, m), k(_, l);
  const z = x * (c + 64) - 64, F = _.createLinearGradient(z, 0, z + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), _.globalCompositeOperation = "destination-in", _.fillStyle = F, _.fillRect(0, 0, c, m), _.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function Ru(n, l, i) {
  const { W: c, H: m, S: x, C: k, cw: A, yb: S, glowAt: _, soft: z, tw: F, sy: q } = l, G = (tt, rt) => {
    const at = dd(tt);
    return "rgba(" + at[0] + "," + at[1] + "," + at[2] + "," + Math.max(0, Math.min(1, rt)).toFixed(3) + ")";
  }, st = (tt, rt) => {
    const at = n.createLinearGradient(0, 0, c, 0);
    at.addColorStop(0, tt[0]);
    for (let qt = 0; qt < tt.length - 1; qt++) {
      const L = (qt + rt) * A, P = (L - F / 2) / c, B = (L + F / 2) / c;
      P > 0 && P < 1 && at.addColorStop(P, tt[qt]), B > 0 && B < 1 && at.addColorStop(B, tt[qt + 1]);
    }
    return at.addColorStop(1, tt[tt.length - 1]), at;
  }, et = Math.max(24, Math.ceil(c / 4)), K = (tt, rt) => {
    n.beginPath();
    for (let at = 0; at <= et; at++) {
      const qt = c * at / et, L = tt == null ? 0 : S(qt) + tt;
      at ? n.lineTo(qt, L) : n.moveTo(qt, L);
    }
    for (let at = et; at >= 0; at--) {
      const qt = c * at / et;
      n.lineTo(qt, S(qt) + rt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = st(x.filter((tt) => !tt.night).map((tt) => tt.sky), 0.75), n.fillRect(0, 0, c, m);
  const j = n.createLinearGradient(0, 0, c, 0);
  for (let tt = 0; tt <= 64; tt++) {
    const rt = _(c * tt / 64);
    j.addColorStop(tt / 64, G(rt.c, Math.min(1, rt.a)));
  }
  n.fillStyle = j;
  for (let tt = 0; tt < 8; tt++)
    n.globalAlpha = 1 - tt / 8, K(tt * 2 * q, (tt + 1) * 2 * q);
  n.fillStyle = st(x.filter((tt) => tt.night).map((tt) => tt.sky), 1.25);
  const ft = Math.max(0.5, z), mt = 6;
  n.globalAlpha = 1, K(null, -ft);
  for (let tt = 0; tt < mt; tt++)
    n.globalAlpha = 1 - (tt + 0.5) / mt, K(-ft + 2 * ft * tt / mt, -ft + 2 * ft * (tt + 1) / mt);
  n.globalAlpha = 1;
  const bt = new Path2D(Tu), nt = new Path2D(Cu), Q = new Path2D(Su), E = new Path2D(Lu);
  n.fillStyle = k.star, i.stars.forEach((tt) => {
    n.globalAlpha = tt.o, tt.big ? (n.save(), n.translate(tt.x, tt.y), n.scale(tt.size, tt.size), n.fill(bt), n.restore()) : (n.beginPath(), n.arc(tt.x, tt.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Z = Qe(k.sun, "#ffffff", 0.55);
  i.suns.forEach((tt) => {
    const rt = n.createRadialGradient(tt.x, tt.y, 0, tt.x, tt.y, tt.halo);
    rt.addColorStop(0, G(Z, 0.42)), rt.addColorStop(0.7, G(Z, 0)), n.fillStyle = rt, n.beginPath(), n.arc(tt.x, tt.y, tt.halo, 0, Math.PI * 2), n.fill();
    const at = n.createLinearGradient(0, tt.y - tt.rad, 0, tt.y + tt.rad);
    at.addColorStop(0.6, k.sun), at.addColorStop(1, k.sunEdge), n.fillStyle = at, n.beginPath(), n.arc(tt.x, tt.y, tt.rad, 0, Math.PI * 2), n.fill();
  });
  const Mt = Qe(k.moon, "#ffffff", 0.6);
  i.moons.forEach((tt) => {
    n.save(), n.translate(tt.x - tt.d / 2, tt.y - tt.d / 2), n.scale(tt.d / 46, tt.d / 46);
    const rt = n.createLinearGradient(0, 6, 0, 40);
    rt.addColorStop(0, Mt), rt.addColorStop(1, k.moon), n.fillStyle = rt, n.fill(nt), n.restore();
  }), i.clouds.forEach((tt) => {
    n.save(), n.globalAlpha = tt.o, n.translate(tt.x, tt.y), n.scale(tt.w / 46, tt.h / 30.66), n.translate(-4, -9.67), n.fillStyle = tt.fill, n.fill(Q), n.restore();
  }), i.fogs.forEach((tt) => {
    const rt = n.createLinearGradient(tt.x, 0, tt.x + tt.w, 0);
    rt.addColorStop(0, G(tt.c, 0)), rt.addColorStop(0.25, G(tt.c, tt.a)), rt.addColorStop(0.75, G(tt.c, tt.a)), rt.addColorStop(1, G(tt.c, 0)), n.fillStyle = rt, n.fillRect(tt.x, tt.y, tt.w, 6 * q);
  }), n.fillStyle = k.rain, i.drops.forEach((tt) => {
    n.save(), n.globalAlpha = tt.o, n.translate(tt.x, tt.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((tt) => {
    n.globalAlpha = tt.o, n.beginPath(), n.arc(tt.x, tt.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((tt) => {
    n.save(), n.globalAlpha = tt.o, n.translate(tt.x, tt.y), n.fill(E), n.restore();
  }), n.restore();
}
function Pu(n, l) {
  var N, O, U, lt, dt, $, pt;
  const i = (e) => n.getElementById(e), c = i("workoutView"), m = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function A() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const S = i("createFlow"), _ = i("createMovementsSlot"), z = i("createTimingSlot"), F = i("createFinishSlot"), q = i("movementStepSummary"), G = i("timingStepSummary"), st = i("finishStepSummary"), et = i("continueToTiming"), K = i("continueToFinish"), j = i("finishMoveButton");
  let ft = !1, mt = [];
  function bt(e) {
    !e || mt.some((o) => o.node === e) || mt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function nt(e, o) {
    e && (bt(e), o.appendChild(e));
  }
  function Q() {
    [...mt].reverse().forEach(({ node: e, parent: o, next: r }) => {
      o && (r && r.parentNode === o ? o.insertBefore(e, r) : o.appendChild(e));
    }), mt = [];
  }
  function E(e) {
    n.querySelectorAll(".createStep").forEach((o) => {
      o.classList.toggle("active", o.dataset.createStep === e);
    }), e === "timing" && (ft = !0), Z();
  }
  function Z() {
    var ot, ut;
    if (!Ut) return;
    Qt[Kt];
    const e = la.filter((ht) => !ht.hidden), o = e.filter((ht) => ht.kind !== "rest").length, r = e.filter((ht) => ht.kind === "rest").length;
    q.textContent = o ? o + " movement" + (o === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const p = o > 0, w = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    w.disabled = !p, et.disabled = !p, G.textContent = p ? Yn(P.value) + " · " + ca(B.value) + " movement · " + ca(W.value) + " rest" : "Add a movement first", T.disabled = !(p && ft);
    const R = ((m == null ? void 0 : m.value) || "").trim(), D = [];
    (ot = i("includeWarmupPreset")) != null && ot.checked && D.push("warm-up"), (ut = i("includeCooldownPreset")) != null && ut.checked && D.push("cooldown"), st.textContent = R ? R + (D.length ? " · " + D.join(" + ") : "") : D.length ? D.join(" + ") : "Name and optional extras";
  }
  function Mt() {
    var Rt, $t, It;
    S.hidden = !1, ft = !1;
    const e = n.querySelector(".editNameRow"), o = i("createMoveOptions"), r = n.querySelector(".timeTiles"), p = i("routineSummaryModal"), w = n.querySelector(".tempoRevealRow"), T = i("tempoExperiment"), R = (Rt = i("warmupList")) == null ? void 0 : Rt.closest("section"), D = i("movementCreatorLaunch"), ot = i("movementCreator"), ut = ($t = i("strengthList")) == null ? void 0 : $t.closest("section"), ht = (It = i("cooldownList")) == null ? void 0 : It.closest("section");
    [o == null ? void 0 : o.querySelector(".createExtras"), R, D, ot, ut, ht].forEach((_t) => _t && nt(_t, _)), [o, r, p, w, T].forEach((_t) => nt(_t, z)), nt(e, F), E("movements"), Z();
  }
  function tt() {
    Q(), S.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || E(e.dataset.openStep);
  })), et.addEventListener("click", () => {
    et.disabled || E("timing");
  }), K.addEventListener("click", () => E("finish")), j.addEventListener("click", () => i("saveWorkoutEdit").click());
  const rt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, at = i("homeNav"), qt = i("settingsNav");
  function L(e) {
    Object.entries(rt).forEach(([o, r]) => r.classList.toggle("active", o === e)), at.classList.toggle("active", e === "home"), qt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Ht, 400), e === "settings" && (requestAnimationFrame(() => ir(n.querySelector(".tab.active"), !1)), Or());
  }
  const P = i("totalTime"), B = i("workTime"), W = i("restTime"), yt = i("totalOut"), wt = i("workOut"), X = i("restOut"), kt = i("totalFill"), St = i("workFill"), Xt = i("restFill"), oe = i("roundsInput"), na = i("roundsFill"), xe = i("roundsOut"), Ai = i("totalLabel"), Sa = i("routineSummaryModal"), Pt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let de = Pt.map((e) => ({ ...e })), la = [
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
  const Jt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let We = Jt.map((e) => ({ ...e }));
  const Xr = {
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
  }, he = kr(l.data), Qt = he.profiles;
  let Kt = Qt[he.selected] ? he.selected : he.order.find((e) => Qt[e]) || "kettlebell";
  function kr(e) {
    const o = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = o.profiles && Object.keys(o.profiles).length ? o.profiles : JSON.parse(JSON.stringify(Xr)), p = (Array.isArray(o.order) ? o.order : Object.keys(r)).filter((w) => r[w]);
    return Object.keys(r).forEach((w) => {
      p.includes(w) || p.push(w);
    }), {
      v: 1,
      profiles: r,
      order: p,
      selected: o.selected || p[0],
      history: Array.isArray(o.history) ? o.history : [],
      checkins: (Array.isArray(o.checkins) ? o.checkins : Ei(o.energy)).map(Mr),
      settings: { ...o.settings || {} }
    };
  }
  function Ei(e) {
    if (!Array.isArray(e)) return [];
    const o = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((p) => {
      const w = new Date(p.at);
      if (isNaN(w)) return;
      const T = w.getFullYear() + "-" + String(w.getMonth() + 1).padStart(2, "0") + "-" + String(w.getDate()).padStart(2, "0"), R = w.getHours() < 14 ? "morning" : "evening";
      if (r.some((ot) => ot.date === T && ot.slot === R)) return;
      const D = o.indexOf(p.value) + 1;
      D > 0 && r.push({ date: T, slot: R, mood: null, energy: D, at: p.at });
    }), r;
  }
  function Mr(e) {
    if (e.scale === 100) return e;
    const o = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: o(e.mood), energy: o(e.energy), scale: 100 };
  }
  function en() {
    Ut || (he.selected = Kt, he.order = he.order.filter((e) => Qt[e] && e !== Bt), l.save(he));
  }
  function ce() {
    return he.settings;
  }
  function da(e) {
    const o = Qt[e];
    if (!o) return;
    Kt = e;
    const r = i("workoutNameInput");
    if (r && (r.value = o.name), P.value = o.total, B.value = o.work, W.value = o.rest, oe.value = o.rounds || 1, o.customSequence) {
      const p = (o.sequence || []).map((T) => ({ ...T })), w = (T) => p.filter((R) => R.presetRole === T).map(({ presetRole: R, ...D }) => D);
      de = (o.warmup || w("warmup")).map((T) => ({ ...T })), We = (o.cooldown || w("cooldown")).map((T) => ({ ...T })), la = p.filter((T) => !T.presetRole), Bi(o.preset || "movement", !1);
    } else
      P.min = 3, P.max = 40, P.step = 1, B.min = 20, B.max = 60, B.step = 5, W.min = 5, W.max = 30, W.step = 5, de = (o.warmup || Pt).map((p) => ({ ...p })), We = (o.cooldown || Jt).map((p) => ({ ...p })), la = o.strength.map((p) => Array.isArray(p) ? (([w, T, R, D = !1]) => ({ id: w, name: T, group: R, kind: "work", hidden: !!D }))(p) : { ...p });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === e)), Me();
  }
  function ha(e, o, r) {
    const p = e.getBoundingClientRect(), w = p.width / 2, T = p.height / 2, R = o - w, D = r - T;
    let ot = 1 / 0, ut = 1 / 0;
    R !== 0 && (ot = w / Math.abs(R)), D !== 0 && (ut = T / Math.abs(D));
    const ht = Math.min(Math.max(1 / Math.min(ot, ut), 0), 1);
    let gt = Math.atan2(D, R) * (180 / Math.PI) + 90;
    return gt < 0 && (gt += 360), { edge: ht, angle: gt };
  }
  function _i(e, o, r = !1) {
    const p = e.getBoundingClientRect(), w = o.clientX - p.left, T = o.clientY - p.top, { edge: R, angle: D } = ha(e, w, T), ot = r ? 100 : R * 100;
    e.style.setProperty("--edge-proximity", ot.toFixed(3)), e.style.setProperty("--cursor-angle", D.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || ot >= 30);
  }
  function Sr(e) {
    e.addEventListener("pointermove", (r) => _i(e, r, !1)), e.addEventListener("pointerenter", (r) => _i(e, r, !1)), e.addEventListener("pointerdown", (r) => _i(e, r, !0));
    const o = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", o), e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o);
  }
  Sr(i("addWorkoutPanel"));
  let Ut = !1, Bt = null;
  function Gt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
  }
  function Ce(e) {
    return e.summary ? e.summary : e.customSequence ? Yn(e.total) + " · custom move" : Yn(e.total) + " · " + ca(e.work) + " / " + ca(e.rest) + " · warm-up + cooldown";
  }
  function Ca(e, o) {
    var T;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const p = o.activityCount ?? (((T = o.sequence) == null ? void 0 : T.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Gt(o.name) + '</div><div class="sub">' + Gt(Ce(o)) + '</div><span class="sourceTag">' + Gt(o.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (p ? p + " activities" + ((o.rounds || 1) > 1 ? " × " + o.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Gt(o.name) + "</div></div>";
    const w = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(r, w), Sr(r), r.addEventListener("click", (R) => {
      R.target.closest("button") || da(e);
    }), r.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), da(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), da(e), Ml(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), da(e), Rl();
    }), r;
  }
  function Gn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), he.order.forEach((e) => {
      Qt[e] && Ca(e, Qt[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Kt));
  }
  Gn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Ut = !0, Bt = "custom-" + Date.now(), Qt[Bt] = {
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
    }, da(Bt), Ml(!0);
  });
  let Vt = [], te = 0, Ze = 0, Ao = 1, an = !1, ta = null, Un = null, Ve = !1, Eo = he.settings.upcomingCount ?? "all", _o = "movement";
  function Do(e, o, r) {
    return (Number(e) - o) / (r - o) * 100;
  }
  function ca(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 3600 && o % 3600 === 0 ? o / 3600 + " hr" : o >= 60 && o % 60 === 0 ? o / 60 + " min" : o >= 60 ? Math.round(o / 60) + " min" : Math.round(o) + " sec";
  }
  function Yn(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 60 && o % 60 === 0 ? o / 60 + " hr" : o >= 60 ? Math.floor(o / 60) + " hr " + o % 60 + " min" : o + " min";
  }
  function Di() {
    kt.style.width = Do(P.value, Number(P.min), Number(P.max)) + "%", St.style.width = Do(B.value, Number(B.min), Number(B.max)) + "%", Xt.style.width = Do(W.value, Number(W.min), Number(W.max)) + "%", wt.textContent = ca(B.value), X.textContent = ca(W.value);
    const e = Number(oe.value) || 1;
    na.style.width = Do(e, 1, 10) + "%", Ai.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Cr(e) {
    return e.filter((o) => !o.hidden);
  }
  function nn(e) {
    const o = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(o / 3600), p = Math.floor(o % 3600 / 60), w = o % 60;
    return (r ? r + ":" + String(p).padStart(2, "0") : p) + ":" + String(w).padStart(2, "0");
  }
  function Gs(e) {
    let o;
    try {
      o = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const r = o.hostname.replace(/^(www|m|music)\./, "");
    let p = null;
    if (r === "youtu.be") p = o.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(r))
      if (o.pathname === "/watch") p = o.searchParams.get("v");
      else {
        const D = o.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        D && (p = D[2]);
      }
    if (!p || !/^[\w-]{11}$/.test(p)) return null;
    const w = (D) => {
      if (!D) return 0;
      if (/^\d+$/.test(D)) return Number(D);
      const ot = D.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ot ? (Number(ot[1]) || 0) * 3600 + (Number(ot[2]) || 0) * 60 + (Number(ot[3]) || 0) : 0;
    }, T = w(o.searchParams.get("t") || o.searchParams.get("start")), R = w(o.searchParams.get("end"));
    return { id: p, start: T, end: R > T ? R : null };
  }
  function Zn(e, o) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || o || 300);
    const r = Number(e.start) || 0, p = Number(e.end) || Number(e.videoDuration) || 0;
    return p > r ? Math.round(p - r) : Number(e.duration) || 300;
  }
  function kn(e, o) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(o === "hour" ? r * 3600 : o === "min" ? r * 60 : r);
  }
  function Bi(e, o = !0) {
    _o = e, n.querySelectorAll(".createPresetBtn").forEach((p) => p.classList.toggle("active", p.dataset.movePreset === e));
    const r = Qt[Kt];
    r && (r.preset = e), e === "work" ? (P.min = 30, P.max = 480, P.step = 30, B.min = 300, B.max = 7200, B.step = 300, W.min = 60, W.max = 1800, W.step = 60, o && (P.value = 60, B.value = 1500, W.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (P.min = 3, P.max = 40, P.step = 1, B.min = 20, B.max = 60, B.step = 5, W.min = 5, W.max = 30, W.step = 5, o && (P.value = 20, B.value = 45, W.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Di();
  }
  function Rn(e, o) {
    const r = _o === "work";
    return e.map((p, w) => ({ ...p, id: o + "-" + w + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(B.value) }));
  }
  function Tr() {
    const e = Qt[Kt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !de.length && (de = Rn(Pt, "warm")), e.includeCooldown && !We.length && (We = Rn(Jt, "cool")), Me());
  }
  function Pn() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const o = Math.max(1, Vt.length - 1), r = Eo;
    e.innerHTML = "";
    for (let T = 1; T <= o; T++) {
      const R = document.createElement("option");
      R.value = String(T), R.textContent = String(T), e.appendChild(R);
    }
    const p = document.createElement("option");
    p.value = "all", p.textContent = "All", e.appendChild(p);
    const w = r === "all" ? "all" : String(Math.min(Number(r) || 1, o));
    e.value = w, Eo = w === "all" ? "all" : Number(w);
  }
  function Me() {
    Number(P.value) * 60;
    const e = Number(B.value), o = Number(W.value), r = Qt[Kt], p = !!(r != null && r.customSequence), w = (p ? !r.includeWarmup : r != null && r.warmupOff) ? [] : Cr(de), T = Cr(la), R = p && !r.includeCooldown ? [] : Cr(We);
    if (r && (r.total = Number(P.value), r.work = e, r.rest = o, r.rounds = Number(oe.value) || 1, r.customSequence ? (r.sequence = la.map((Dt) => ({ ...Dt })), r.warmup = de.map((Dt) => ({ ...Dt })), r.cooldown = We.map((Dt) => ({ ...Dt }))) : (r.strength = la.map((Dt) => ({ ...Dt })), r.warmup = de.map((Dt) => ({ ...Dt })), r.cooldown = We.map((Dt) => ({ ...Dt })))), r != null && r.customSequence) {
      const Dt = [...w.map((re) => ({ ...re, section: "warmup" })), ...T, ...R.map((re) => ({ ...re, section: "cooldown" }))].map((re) => {
        if (re.kind === "video") return { ...re, duration: Zn(re, e), rest: 0 };
        if (re.kind === "rest") {
          const ya = re.useGlobalTiming === !0 ? o : Number(re.duration) || o;
          return { ...re, duration: ya, rest: 0 };
        }
        const xa = re.useGlobalTiming === !1 && Number(re.duration) || e;
        return { ...re, duration: xa, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (Vt = [], Dt.forEach((re, xa) => {
        Vt.push(re);
        const ya = Dt[xa + 1];
        re.kind !== "rest" && ya && ya.kind !== "rest" && Vt.push({
          id: "auto-rest-" + xa,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Vt = Dt;
    } else
      Vt = [...w.map((Dt) => ({ ...Dt, section: "warmup" })), ...T, ...R.map((Dt) => ({ ...Dt, section: "cooldown" }))].map((Dt) => Dt.kind === "video" ? { ...Dt, duration: Zn(Dt, e), rest: 0 } : Dt.kind === "rest" ? { ...Dt, duration: Dt.useGlobalTiming === !0 ? o : Number(Dt.duration) || o, rest: 0 } : { ...Dt, duration: Dt.useGlobalTiming === !1 && Number(Dt.duration) || e, rest: o }), Vt.forEach((Dt, re) => {
        var xa;
        ((xa = Vt[re + 1]) == null ? void 0 : xa.kind) === "rest" && (Dt.rest = 0);
      }), Vt.length && (Vt[Vt.length - 1].rest = 0);
    const D = Math.max(1, Math.min(10, Number(oe.value) || 1)), ot = Vt, ut = (Dt) => D <= 1 ? null : Dt.section === "warmup" || Dt.presetRole === "warmup" ? "first" : Dt.section === "cooldown" || Dt.presetRole === "cooldown" ? "last" : Dt.kind === "video" && (Dt.videoRounds === "first" || Dt.videoRounds === "last") ? Dt.videoRounds : null, ht = (Dt) => !!ut(Dt), gt = ot.filter((Dt) => !ht(Dt)), Rt = ot.filter(ht), $t = gt.length, It = gt.reduce((Dt, re) => Dt + re.duration + re.rest, 0), _t = Rt.reduce((Dt, re) => Dt + re.duration + re.rest, 0), Et = [
      Rt.some((Dt) => Dt.section === "warmup" || Dt.presetRole === "warmup") && "warm-up",
      Rt.some((Dt) => Dt.section === "cooldown" || Dt.presetRole === "cooldown") && "cooldown",
      Rt.some((Dt) => Dt.kind === "video" && !Dt.section && !Dt.presetRole) && "video"
    ].filter(Boolean), le = Et.length > 1 ? Et.slice(0, -1).join(", ") + " & " + Et[Et.length - 1] : Et[0] || "";
    Vt = [];
    const ue = (Dt, re) => {
      const xa = ut(Dt);
      return !xa || (xa === "first" ? re === 1 : re === D);
    };
    for (let Dt = 1; Dt <= D; Dt++)
      if (ot.filter((re) => ue(re, Dt)).forEach((re, xa) => Vt.push({ ...re, id: re.id + (D > 1 ? "-r" + Dt : ""), round: Dt, roundIndex: xa })), Dt < D && $t)
        if (r != null && r.customSequence)
          Vt.push({ id: "round-break-" + Dt, name: "Rest", group: "Round " + (Dt + 1) + " next", kind: "rest", hidden: !1, duration: o, rest: 0, round: Dt, roundIndex: $t, roundBreak: !0 });
        else {
          const re = Vt[Vt.length - 1];
          re.rest = o, re.roundBreakAfter = !0;
        }
    Di();
    const Wt = Vt.reduce((Dt, re) => Dt + re.duration + re.rest, 0), fe = Math.round(It / 60), Le = Math.round(Wt / 60), ne = D > 1 ? Yn(fe) + " × " + D + " rounds" + (_t ? " + " + ca(_t) + " " + le : "") + " (" + Yn(Le) + ")" : Yn(Le), ee = [w.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), fa = r != null && r.customSequence ? ne + " · " + $t + " items" + (ee.length && !(D > 1 && _t) ? " · " + ee.join(" + ") : "") : ne + " · " + ca(e) + " / " + ca(o) + (ee.length && !(D > 1 && _t) ? " · " + ee.join(" + ") : "");
    yt.textContent = ca(It);
    const Ra = Vt.filter((Dt) => !Dt.roundBreak).length, je = D > 1 ? Ra + " activities · " + D + " rounds" : $t + " activities";
    xe.textContent = D > 1 ? D + " rounds · " + Yn(Le) + " total" : "1 round", i("roundsCount").textContent = D, n.querySelectorAll("[data-rounds-step]").forEach((Dt) => {
      Dt.disabled = Number(Dt.dataset.roundsStep) < 0 ? D <= 1 : D >= 10;
    }), r && (r.summary = fa, r.activityCount = $t);
    const mr = n.querySelector(".workoutPanel.active .sub");
    mr && (mr.textContent = fa), Sa.textContent = fa, po(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Dt) => Dt.textContent = je), Di(), Ke(), ji(), Po(), Pn(), Ut && Z(), rt.workout.classList.contains("active") && !ta && cn();
  }
  const Bo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', qe = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', $o = {
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
  }, Ta = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + ($o[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Ta(e.dataset.icon);
  });
  let ea = null, La = null;
  function Jr(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Qr(e = !1) {
    const o = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    o && (o.focus({ preventScroll: !0 }), e && o.select());
  }
  function Lr(e, o, r = {}) {
    const p = e.kind === "rest", w = e.kind === "video", T = w ? e.useVideoLength !== !1 : p ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, R = Number(p ? W.value : B.value), D = Jr(w ? e.useVideoLength === !1 ? e.duration : Zn({ ...e, useVideoLength: !0 }) : T ? R : e.duration || R), ot = w && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ut = w ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Gt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Wt, fe]) => '<option value="' + Wt + '"' + ((e.videoRounds || "every") === Wt ? " selected" : "") + ">" + fe + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.name) + '" placeholder="' + (p ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Gt(e.group) + '" placeholder="' + (p ? "Rest" : "e.g. Glutes + legs") + '"></label>', ht = w ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (ot ? " · " + nn(Zn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + ca(R), gt = document.createElement("div");
    gt.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), gt.dataset.index = o, gt.dataset.id = e.id;
    const Rt = r.isNew ?? (La == null ? void 0 : La.item) === e, $t = r.sheet ? '<div class="moveEditActions sheetActions">' + (Rt ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Gt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Rt ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    gt.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (w ? " videoFields" : "") + '">' + ut + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Gt(ht) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + D.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Wt) => '<option value="' + Wt + '"' + (Wt === D.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Wt] + "</option>").join("") + "</select></div></div>" + $t + "</div>";
    const It = (Wt) => gt.querySelector("[data-f=" + Wt + "]"), _t = () => {
      const Wt = It("global").checked;
      It("dur").disabled = Wt, It("unit").disabled = Wt, gt.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Wt);
    };
    It("global").addEventListener("change", _t), _t();
    const Et = () => {
      var Wt;
      if (r.sheet) {
        (Wt = r.onCancel) == null || Wt.call(r);
        return;
      }
      Rt && Mn(), ea = null, Me();
    }, le = () => {
      var Le;
      if (w) {
        ue();
        return;
      }
      const Wt = It("name").value.trim();
      if (!Wt) {
        It("name").focus();
        return;
      }
      e.name = Wt, e.group = It("group").value.trim() || (p ? "Rest" : "Movement");
      const fe = It("global").checked;
      if (e.useGlobalTiming = fe, fe || (e.duration = Math.max(p ? 5 : 1, kn(It("dur").value, It("unit").value))), r.sheet) {
        (Le = r.onSaved) == null || Le.call(r);
        return;
      }
      Rt && (La = null), ea = null, Me(), pe(Rt ? p ? "Rest added" : "Movement added" : "Movement updated");
    }, ue = () => {
      var ee;
      const Wt = It("url").value.trim(), fe = Gs(Wt);
      if (!fe) {
        It("urlError").hidden = !1, It("url").classList.add("invalid"), It("url").focus();
        return;
      }
      const Le = fe.id !== e.videoId;
      e.url = Wt, e.videoId = fe.id, e.start = fe.start, e.end = fe.end, Le && (e.videoDuration = null, e.videoError = null);
      const ne = It("name").value.trim();
      e.autoName = !ne, e.name = ne || (Le ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = It("rounds").value, e.useVideoLength = It("global").checked, e.useVideoLength || (e.duration = Math.max(5, kn(It("dur").value, It("unit").value))), r.sheet ? (ee = r.onSaved) == null || ee.call(r) : (Rt && (La = null), ea = null, Me(), pe(Rt ? "Video added" : "Video updated")), (Le || !e.videoDuration || e.autoName && !e.videoTitle) && Fl(e);
    };
    if (w && It("url").addEventListener("input", () => {
      It("urlError").hidden = !0, It("url").classList.remove("invalid");
    }), gt.querySelector("[data-a=cancel]").addEventListener("click", Et), gt.querySelector("[data-a=save]").addEventListener("click", le), r.sheet && !Rt) {
      gt.querySelector("[data-a=hide]").addEventListener("click", () => {
        var fe;
        return (fe = r.onHide) == null ? void 0 : fe.call(r);
      });
      const Wt = gt.querySelector("[data-a=remove]");
      nr(Wt, Wt.querySelector(".removeFill"), 1200, () => {
        var fe;
        return (fe = r.onRemove) == null ? void 0 : fe.call(r);
      });
    }
    return gt.addEventListener("keydown", (Wt) => {
      Wt.key === "Escape" && (Wt.preventDefault(), Wt.stopPropagation(), Et()), Wt.key === "Enter" && Wt.target.matches("input") && (Wt.preventDefault(), le());
    }), gt;
  }
  function Nn(e, o) {
    const r = i(o);
    r.innerHTML = "", e.forEach((p, w) => {
      if (p === ea && !Ga()) {
        r.appendChild(Lr(p, w));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (p.hidden ? " hidden" : "") + (p.kind === "rest" ? " restItem" : "") + (p.kind === "video" ? " videoItem" : "") + (ll(p) ? " noMeta" : ""), T.dataset.index = w, T.dataset.id = p.id;
      const R = p.kind === "rest" ? p.useGlobalTiming === !0 ? "Global timing" : ca(p.duration) : p.useGlobalTiming === !1 ? ca(p.duration) : "Global timing", D = p.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ot = p.kind === "video" ? p.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (p.useVideoLength === !1 ? "stops after " + ca(p.duration) : Number(p.videoDuration) > 0 || Number(p.end) > 0 ? nn(Zn(p)) : "plays to the end") + (p.videoRounds === "first" ? " · first round only" : p.videoRounds === "last" ? " · last round only" : "") : p.group + " · " + R, ut = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Gt(p.name) + '. Drag, or use the up and down arrow keys">' + Bo + "</button>", ht = '<div class="moveText"><div class="moveItemName">' + Gt(p.name) + D + '</div><div class="moveMeta">' + Gt(ot) + "</div></div>", gt = (It) => It.addEventListener("keydown", (_t) => {
        var ue, Wt;
        if (_t.key !== "ArrowUp" && _t.key !== "ArrowDown") return;
        _t.preventDefault();
        const Et = e.indexOf(p), le = Et + (_t.key === "ArrowUp" ? -1 : 1);
        le < 0 || le >= e.length || (e.splice(Et, 1), e.splice(le, 0, p), Me(), (Wt = (ue = i(o).children[le]) == null ? void 0 : ue.querySelector(".dragHandle")) == null || Wt.focus());
      });
      if (Ga()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (p.name || "step")), T.innerHTML = ut + ht + '<span class="rowChevron" aria-hidden="true">›</span>';
        const It = T.querySelector(".dragHandle");
        It.addEventListener("pointerdown", (_t) => ts(_t, T, r, e)), gt(It), T.addEventListener("click", (_t) => {
          _t.target.closest(".dragHandle") || Ii(p, e);
        }), T.addEventListener("keydown", (_t) => {
          _t.key === "Enter" && _t.target === T && (_t.preventDefault(), Ii(p, e));
        }), r.appendChild(T);
        return;
      }
      T.innerHTML = ut + ht + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Gt(p.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (p.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Gt(p.name) + '"><span class="removeFill"></span><span class="removeLabel">' + qe + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        Mn(), ea = p, Me(), Qr();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        p.hidden = !p.hidden, Me();
      });
      const Rt = T.querySelector(".removeBtn");
      nr(Rt, Rt.querySelector(".removeFill"), 1200, () => {
        const It = e.indexOf(p);
        It < 0 || (e.splice(It, 1), Me(), pe("Removed " + p.name, { label: "Undo", run: () => {
          e.splice(Math.min(It, e.length), 0, p), Me();
        } }));
      });
      const $t = T.querySelector(".dragHandle");
      $t.addEventListener("pointerdown", (It) => ts(It, T, r, e)), gt($t), r.appendChild(T);
    });
  }
  const _a = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ri = (e) => {
    var o;
    try {
      (o = navigator.vibrate) == null || o.call(navigator, e);
    } catch {
    }
  };
  function ts(e, o, r, p) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const w = e.currentTarget, T = e.pointerId, R = !_a();
    try {
      w.setPointerCapture(T);
    } catch {
    }
    const D = o.closest(".exerciseScroller") || so(o), ot = r.style.position;
    r.style.position = "relative";
    const ut = [...r.children].filter((se) => se.classList.contains("moveRow")), ht = ut.indexOf(o), gt = parseFloat(getComputedStyle(r).rowGap) || 8, Rt = o.offsetHeight, $t = Rt + gt, It = ut.map((se) => se.offsetTop), _t = ut.map((se) => se.offsetHeight), Et = () => r.getBoundingClientRect().top, le = r.getBoundingClientRect().width, ue = e.clientY - (Et() + It[ht]), Wt = e.clientX;
    let fe = e.clientY, Le = e.clientX, ne = Et() + It[ht], ee = 0, fa = 0, Ra = 0, je = 1, mr = 0, Dt = ht, re = !1, xa = 0, ya = !1, $l = !1, Hs = It[ht];
    r.classList.add("reordering"), o.classList.add("dragging"), o.style.transition = "none", Ri(8);
    const Xl = () => {
      const se = fe - ue + Rt / 2 - Et();
      let be = 0;
      return ut.forEach((Oe, hn) => {
        hn !== ht && se > It[hn] + _t[hn] / 2 && be++;
      }), be;
    }, Jl = () => {
      ut.forEach((se, be) => {
        if (be === ht) return;
        const Oe = ht < Dt && be > ht && be <= Dt ? -$t : ht > Dt && be >= Dt && be < ht ? $t : 0;
        se.style.transform = Oe ? "translateY(" + Oe + "px)" : "";
      });
    }, gl = () => {
      const se = r.getBoundingClientRect(), be = Math.abs(Le - Wt) > Math.max(80, le * 0.3) || Le < se.left - 24 || Le > se.right + 24;
      be !== re && (re = be, o.classList.toggle("willReturn", be), Ri(be ? 10 : 4));
      const Oe = re ? ht : Xl();
      Oe !== Dt && (Dt = Oe, Jl(), re || Ri(4));
    }, gr = () => {
      if (Dt === ht) return It[ht];
      const se = ut.filter((Oe, hn) => hn !== ht);
      let be = It[0];
      for (let Oe = 0; Oe < Dt; Oe++) be += se[Oe].offsetHeight + gt;
      return be;
    }, Fs = () => {
      const se = R ? Math.min(Math.abs(ee) / 40, 1) : 0, be = R && !ya ? Math.max(-3, Math.min(3, Ra * 0.6)) : 0;
      o.style.transform = "translate(" + fa.toFixed(2) + "px," + (ne - (Et() + It[ht])).toFixed(2) + "px) rotate(" + be.toFixed(2) + "deg) scale(" + (je * (1 - 0.04 * se)).toFixed(4) + "," + (je * (1 + 0.06 * se)).toFixed(4) + ")";
    }, ae = () => {
      xa = requestAnimationFrame(ae);
      const se = Le - Wt, be = ya ? Et() + Hs : fe - ue, Oe = ya ? 0 : re ? se * 0.9 : Math.max(-22, Math.min(22, se * 0.22)), hn = ya ? 1 : re ? 0.97 : 1.035;
      if (!R) {
        ne = be, fa = ya ? 0 : Oe, je = 1, Fs(), ya && Ue();
        return;
      }
      const lu = ya ? 0.24 : 0.2, du = ya ? 0.62 : 0.68;
      ee = (ee + (be - ne) * lu) * du, ne += ee, Ra = (Ra + (Oe - fa) * 0.16) * 0.7, fa += Ra, mr = (mr + (hn - je) * 0.22) * 0.6, je += mr, Fs(), ya && Math.abs(ee) < 0.15 && Math.abs(be - ne) < 0.5 && Math.abs(fa) < 0.5 && Math.abs(je - 1) < 3e-3 && Ue();
    }, Be = setInterval(() => {
      if (!D || ya) return;
      const se = D.getBoundingClientRect(), be = 56, Oe = fe < se.top + be ? -10 : fe > se.bottom - be ? 10 : 0;
      Oe && (D.scrollTop += Oe, gl());
    }, 30);
    function Ue() {
      if ($l) return;
      $l = !0, cancelAnimationFrame(xa);
      const se = Dt !== ht, be = o.dataset.id;
      if (r.classList.remove("reordering"), ut.forEach((hn) => {
        hn.style.transition = "none", hn.style.transform = "";
      }), o.classList.remove("dragging", "willReturn"), r.style.position = ot, se) {
        const [hn] = p.splice(ht, 1);
        p.splice(Dt, 0, hn);
      }
      Me();
      const Oe = be && r.querySelector('.moveRow[data-id="' + be + '"]');
      Oe && R && Oe.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), se && pe("Order saved");
    }
    const ka = (se) => {
      if (se.pointerId === T) {
        if (se.pointerType === "mouse" && se.buttons === 0) {
          Vn();
          return;
        }
        fe = se.clientY, Le = se.clientX, gl();
      }
    }, fn = (se) => {
      se.pointerId === T && Vn();
    };
    function Vn() {
      ya || (window.removeEventListener("pointermove", ka, !0), window.removeEventListener("pointerup", fn, !0), window.removeEventListener("pointercancel", fn, !0), w.removeEventListener("lostpointercapture", Vn), clearInterval(Be), re && Dt !== ht && (Dt = ht, Jl()), Hs = gr(), ya = !0, Ri(6), setTimeout(Ue, 800));
    }
    window.addEventListener("pointermove", ka, !0), window.addEventListener("pointerup", fn, !0), window.addEventListener("pointercancel", fn, !0), w.addEventListener("lostpointercapture", Vn), xa = requestAnimationFrame(ae), Fs();
  }
  function Ke() {
    var w, T, R, D;
    const e = Qt[Kt], o = (w = i("warmupList")) == null ? void 0 : w.closest("section"), r = (T = i("cooldownList")) == null ? void 0 : T.closest("section"), p = (D = (R = i("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : D.querySelector(".sectionTitle");
    e != null && e.customSequence ? (o && (o.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), p && (p.textContent = "Move sequence")) : (o && (o.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), p && (p.textContent = "Kettlebell work")), Nn(de, "warmupList"), Nn(la, "strengthList"), Nn(We, "cooldownList");
  }
  function Mn() {
    if (!La) return;
    const { item: e, arr: o } = La;
    La = null;
    const r = o.indexOf(e);
    r >= 0 && o.splice(r, 1), ea === e && (ea = null);
  }
  function me(e) {
    return e.id === "warmupList" ? { arr: de, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: We, kind: "cooldown", group: "Cooldown" } : { arr: la, kind: "work", group: "" };
  }
  function Xo(e, o) {
    const r = me(o), p = Date.now().toString(36);
    return e === "video" ? { id: "video-" + p, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + p, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(W.value) } : { id: "movement-" + p, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(B.value) };
  }
  const Jo = "cubic-bezier(.34,1.46,.64,1)";
  function Qo(e, o) {
    if (_a() || !e) {
      o();
      return;
    }
    const r = (T) => {
      var R;
      return ((R = T.dataset) == null ? void 0 : R.id) || T;
    }, p = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], w = new Map(p().map((T) => [r(T), T.getBoundingClientRect().top]));
    o(), p().forEach((T) => {
      const R = w.get(r(T));
      if (R === void 0) return;
      const D = R - T.getBoundingClientRect().top;
      Math.abs(D) < 0.5 || T.animate([{ transform: "translateY(" + D + "px)" }, { transform: "none" }], { duration: 440, easing: Jo });
    });
  }
  function Ro(e, o) {
    if (!e || _a()) return;
    const r = e.offsetHeight, p = Math.max(0, r - (o || 0));
    e.animate([{ clipPath: "inset(0 0 " + p + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Jo });
  }
  function ro(e, o, r, p) {
    const { arr: w } = me(o), T = Xo(e, o);
    w.splice(Math.max(0, Math.min(r, w.length)), 0, T), La = { item: T, arr: w }, ea = T, Qo(o.closest(".exerciseScroller,.createStepSlot") || o, () => Me());
    const R = o.querySelector(".moveRow.editing");
    return Ro(R, p), Qr(e === "rest"), R;
  }
  function so(e) {
    for (let o = e; o && o.nodeType === 1; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if (/(auto|scroll)/.test(r) && o.scrollHeight > o.clientHeight) return o;
    }
    return null;
  }
  const es = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Kn(e, o) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + Bo + '</span><span class="addGhostText"><strong>' + Gt(o[0]) + "</strong><small>" + Gt(o[1]) + "</small></span>", i("workoutModal").appendChild(r), r;
  }
  function lo(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function as(e, o, r, p) {
    (ea || La) && (Mn(), ea = null, Me());
    const w = e.getBoundingClientRect(), T = Kn(o, es[o]);
    T.setAttribute("aria-hidden", "true"), T.style.width = w.width + "px", T.style.height = w.height + "px", T.style.transform = "translate(" + w.left + "px," + w.top + "px)", e.classList.add("lifting");
    const R = so(e);
    return Pi({
      ghost: T,
      origin: w,
      sx: r,
      sy: p,
      scroller: R,
      column: e.closest(".exerciseScroller,.createFlow") || R,
      home: () => e.getBoundingClientRect(),
      onDrop: (D, ot, ut) => {
        lo(T), e.classList.remove("lifting"), ro(o, D, ot, ut);
      },
      onReturn: () => {
        lo(T), e.classList.remove("lifting");
      }
    });
  }
  function Pi({ ghost: e, origin: o, sx: r, sy: p, scroller: w, column: T, home: R, onDrop: D, onReturn: ot, rowLook: ut = !1 }) {
    var Fs;
    const ht = !_a(), gt = ((Fs = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Fs.offsetHeight) || 80, Rt = r - o.left, $t = p - o.top, It = 44;
    let _t = r, Et = p, le = o.left, ue = o.top, Wt = 0, fe = 0, Le = !ht, ne = null, ee = null, fa = -1, Ra = 0, je = null;
    const mr = () => ["warmupList", "strengthList", "cooldownList"].map((ae) => i(ae)).filter((ae) => ae && ae.getClientRects().length && !ae.closest("[hidden]")), Dt = (ae) => {
      if (ae === ne) return;
      ne = ae, e.classList.toggle("overList", !!ae || ut);
      const Be = ae ? ae.getBoundingClientRect().width : o.width;
      e.style.width = Be + "px", e.style.height = (ae ? gt : o.height) + "px";
    }, re = (ae) => {
      ae.classList.add("leaving"), ae.style.height = "0px", ae.style.marginTop = "-8px", setTimeout(() => ae.remove(), ht ? 320 : 0);
    }, xa = (ae, Be, Ue) => {
      if (ee && ee.parentNode === ae && fa === Ue || (ee && (re(ee), ee = null, fa = -1), !ae)) return;
      const ka = document.createElement("div");
      ka.className = "dropSlot", ae.insertBefore(ka, Be), ee = ka, fa = Ue, ka.getBoundingClientRect(), ka.style.height = gt + "px", ka.style.marginTop = "0px";
    }, ya = () => {
      let ae = null, Be = 1 / 0;
      for (const Vn of mr()) {
        const se = Vn.getBoundingClientRect();
        if (_t < se.left - 48 || _t > se.right + 48) continue;
        const be = se.top - 28, Oe = se.bottom + 28, hn = Et < be ? be - Et : Et > Oe ? Et - Oe : 0;
        hn < Be && (Be = hn, ae = Vn);
      }
      const Ue = T == null ? void 0 : T.getBoundingClientRect(), fn = Ue && _t >= Ue.left && _t <= Ue.right && Et >= Ue.top && Et <= Ue.bottom || Be === 0 ? ae : null;
      if (fn) {
        const Vn = [...fn.children].filter((be) => be.classList.contains("moveRow"));
        let se = Vn.findIndex((be) => {
          const Oe = be.getBoundingClientRect();
          return Et < Oe.top + Oe.height / 2;
        });
        se < 0 && (se = Vn.length), xa(fn, Vn[se] || null, se);
      } else xa(null);
      Dt(fn);
    }, $l = () => {
      if (je) return je.aim();
      if (ne) {
        const ae = ne.getBoundingClientRect();
        let Be = Et - gt / 2;
        return ee && (Be = Be * 0.6 + ee.getBoundingClientRect().top * 0.4), { x: ae.left, y: Be };
      }
      return { x: _t - Rt, y: Et - $t };
    }, Hs = (ae, Be, Ue, ka) => {
      e.style.transform = "translate(" + le + "px," + ue + "px) rotate(" + ae + "deg) rotate(" + Be + "rad) scale(" + Ue + "," + ka + ") rotate(" + -Be + "rad)";
    }, Xl = () => {
      if (Ra = requestAnimationFrame(Xl), !Le) {
        const se = _t - r, be = Et - p, Oe = Math.min(Math.hypot(se, be) / It, 1);
        le = o.left + se * 0.35, ue = o.top + be * 0.35, Hs(0, Math.atan2(be, se), 1 + 0.155 * Oe, 1 - 0.1 * Oe);
        return;
      }
      const ae = $l();
      if (!ht) {
        le = ae.x, ue = ae.y, Hs(0, 0, 1, 1), je && (cancelAnimationFrame(Ra), je.done());
        return;
      }
      const Be = je ? je.k : 0.17, Ue = je ? je.d : 0.7;
      Wt = (Wt + (ae.x - le) * Be) * Ue, fe = (fe + (ae.y - ue) * Be) * Ue, le += Wt, ue += fe;
      const ka = Math.hypot(Wt, fe), fn = Math.min(ka / 48, 1), Vn = ne || je ? 0 : Math.max(-5, Math.min(5, Wt * 0.32));
      Hs(Vn, Math.atan2(fe, Wt), 1 + 0.1 * fn, 1 - 0.063 * fn), je && ka < 0.15 && Math.hypot(ae.x - le, ae.y - ue) < 0.6 && (cancelAnimationFrame(Ra), je.done());
    }, Jl = setInterval(() => {
      if (!w || je) return;
      const ae = w.getBoundingClientRect(), Be = 64, Ue = Et < ae.top + Be ? -(ae.top + Be - Et) / 4 : Et > ae.bottom - Be ? (Et - (ae.bottom - Be)) / 4 : 0;
      Ue && (w.scrollTop += Math.max(-18, Math.min(18, Ue)), ya());
    }, 30);
    Ra = requestAnimationFrame(Xl);
    let gl = !1;
    const gr = (ae, Be) => {
      if (gl) return;
      gl = !0, cancelAnimationFrame(Ra);
      const Ue = ee ? ee.offsetHeight : gt;
      !ae && ee && (ee.remove(), ee = null), ae ? D(ae, Be, Ue) : ot();
    };
    return {
      move(ae, Be) {
        _t = ae, Et = Be, !Le && Math.hypot(_t - r, Et - p) > It && (Le = !0, Wt = (_t - r) * 0.085, fe = (Et - p) * 0.085), Le && ya();
      },
      drop(ae) {
        clearInterval(Jl);
        const Be = ne, Ue = fa;
        if (!ae && Be && ee) {
          const ka = ee;
          je = { k: 0.24, d: 0.62, aim: () => {
            const fn = ka.getBoundingClientRect();
            return { x: fn.left, y: fn.top };
          }, done: () => gr(Be, Ue) }, setTimeout(() => gr(Be, Ue), 650), ht || (cancelAnimationFrame(Ra), gr(Be, Ue));
          return;
        }
        xa(null), Dt(null), je = { k: 0.2, d: 0.66, aim: () => {
          const ka = R();
          return { x: ka.left, y: ka.top };
        }, done: () => gr(null) }, setTimeout(() => gr(null), 650), ht || (cancelAnimationFrame(Ra), gr(null));
      }
    };
  }
  function co(e, o) {
    let r = !1;
    e.addEventListener("click", (p) => {
      if (r) {
        r = !1, p.preventDefault();
        return;
      }
      if (Ga()) {
        ns(o);
        return;
      }
      const w = i("strengthList"), T = ro(o, w, me(w).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: _a() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (p) => {
      if (p.button !== void 0 && p.button !== 0) return;
      const w = p.pointerId, T = p.clientX, R = p.clientY;
      let D = null, ot = !1;
      try {
        e.setPointerCapture(w);
      } catch {
      }
      const ut = (Et) => {
        if (Et.pointerId === w) {
          if (Et.pointerType === "mouse" && Et.buttons === 0) {
            _t(!1);
            return;
          }
          if (!D) {
            if (Math.hypot(Et.clientX - T, Et.clientY - R) < 6) return;
            D = as(e, o, T, R);
          }
          D.move(Et.clientX, Et.clientY);
        }
      }, ht = (Et) => {
        Et.pointerId === w && _t(!1);
      }, gt = (Et) => {
        Et.pointerId === w && _t(!0);
      }, Rt = () => _t(!1), $t = () => _t(!0), It = (Et) => {
        Et.key === "Escape" && D && (Et.preventDefault(), Et.stopPropagation(), _t(!0));
      };
      function _t(Et) {
        if (!ot && (ot = !0, window.removeEventListener("pointermove", ut, !0), window.removeEventListener("pointerup", ht, !0), window.removeEventListener("pointercancel", gt, !0), window.removeEventListener("keydown", It, !0), window.removeEventListener("blur", $t), e.removeEventListener("lostpointercapture", Rt), D)) {
          const le = D;
          D = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), le.drop(Et);
        }
      }
      window.addEventListener("pointermove", ut, !0), window.addEventListener("pointerup", ht, !0), window.addEventListener("pointercancel", gt, !0), window.addEventListener("keydown", It, !0), window.addEventListener("blur", $t), e.addEventListener("lostpointercapture", Rt);
    });
  }
  const on = (N = window.matchMedia) == null ? void 0 : N.call(window, "(max-width: 620px)");
  function Ga() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Ni = (e) => e.charAt(0).toUpperCase() + e.slice(1), $n = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let In = null, ye = null;
  function rn(e, o, r, p) {
    pa(), i("sheetTitle").textContent = e;
    const w = i("sheetBody");
    w.innerHTML = "", w.appendChild(o), In = r || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !w.contains(o)) return;
      const T = p ? w.querySelector("input[data-f=url],input[data-f=name]") : w.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, _a() ? 0 : 360);
  }
  function pa() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const o = In;
    In = null, o == null || o(), setTimeout(Ia, 0);
  }
  i("sheetScrim").addEventListener("click", pa), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), pa());
  });
  function Ii(e, o) {
    const r = Lr(e, o.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        pa(), Me(), pe(Ni($n(e)) + " updated");
      },
      onCancel: pa,
      onHide() {
        e.hidden = !e.hidden, pa(), Me(), pe((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        pa();
        const p = o.indexOf(e);
        p < 0 || (o.splice(p, 1), Me(), pe("Removed " + e.name, { label: "Undo", run: () => {
          o.splice(Math.min(p, o.length), 0, e), Me();
        } }));
      }
    });
    rn("Edit " + $n(e), r, null, !1);
  }
  function Us() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([o, r, p, w]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ta(r) + "</span><span><strong>" + p + "</strong><small>" + w + "</small></span>", T.addEventListener("click", () => ns(o)), e.appendChild(T);
    }), rn("Add to the move", e, null, !1);
  }
  function ns(e) {
    ye && Hn();
    const o = Xo(e, i("strengthList")), r = Lr(o, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        pa(), Fi(o, e);
      },
      onCancel: pa
    });
    rn("New " + $n(o), r, null, !0);
  }
  const oa = i("workoutModal").querySelector(".modalStatic"), Xn = { parent: oa.parentNode, next: oa.nextSibling };
  function os() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(oa);
    const o = document.createElement("button");
    o.type = "button", o.className = "primary sheetDone", o.textContent = "Done", o.addEventListener("click", pa), e.appendChild(o), rn("Setup", e, () => {
      Xn.parent.insertBefore(oa, Xn.next), po();
    }, !1);
  }
  function po() {
    var o, r;
    const e = i("setupSummaryName");
    e && (e.textContent = (((o = i("workoutNameInput")) == null ? void 0 : o.value) || "").trim() || ((r = Qt[Kt]) == null ? void 0 : r.name) || "Move", i("setupSummaryMeta").textContent = Sa.textContent);
  }
  i("setupSummary").addEventListener("click", os), i("addFab").addEventListener("click", Us);
  function Pa() {
    const e = i("strengthList");
    return so(e) || e.closest(".exerciseScroller");
  }
  function Hi() {
    const e = i("strengthList").getBoundingClientRect(), o = (Pa() || i("strengthList")).getBoundingClientRect(), r = (ye == null ? void 0 : ye.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(o.top + 12, Math.min(o.bottom - r - 96, o.top + o.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function Fi(e, o) {
    var D;
    const r = Kn(o, [e.name || es[o][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const p = document.createElement("span");
    p.className = "addGhostActions", p.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Gt(e.name) + '">✕</button>', r.appendChild(p), ye = { item: e, type: o, ghost: r };
    const w = ((D = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : D.offsetHeight) || 64;
    r.style.width = i("strengthList").getBoundingClientRect().width + "px", r.style.height = w + "px";
    const T = Hi(), R = qa.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + T.left + "px," + R + "px)", r.getBoundingClientRect(), _a() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + T.left + "px," + T.top + "px)", p.querySelector("[data-a=end]").addEventListener("click", Hn), p.querySelector("[data-a=discard]").addEventListener("click", qi), r.addEventListener("pointerdown", Oi);
  }
  function Oi(e) {
    if (!ye || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: o, ghost: r } = ye, p = e.pointerId;
    try {
      r.setPointerCapture(p);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const w = r.getBoundingClientRect(), T = Pa(), R = Pi({
      ghost: r,
      origin: { left: w.left, top: w.top, width: w.width, height: w.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: T,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Hi,
      onDrop: (_t, Et, le) => {
        ye = null, lo(r), Na(o, _t, Et, le);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let D = !1;
    const ot = (_t) => {
      if (_t.pointerId === p) {
        if (_t.pointerType === "mouse" && _t.buttons === 0) {
          It(!1);
          return;
        }
        R.move(_t.clientX, _t.clientY);
      }
    }, ut = (_t) => {
      _t.pointerId === p && It(!1);
    }, ht = (_t) => {
      _t.pointerId === p && It(!0);
    }, gt = () => It(!1), Rt = () => It(!0), $t = (_t) => {
      _t.key === "Escape" && (_t.preventDefault(), It(!0));
    };
    function It(_t) {
      D || (D = !0, window.removeEventListener("pointermove", ot, !0), window.removeEventListener("pointerup", ut, !0), window.removeEventListener("pointercancel", ht, !0), window.removeEventListener("keydown", $t, !0), window.removeEventListener("blur", Rt), r.removeEventListener("lostpointercapture", gt), R.drop(_t));
    }
    window.addEventListener("pointermove", ot, !0), window.addEventListener("pointerup", ut, !0), window.addEventListener("pointercancel", ht, !0), window.addEventListener("keydown", $t, !0), window.addEventListener("blur", Rt), r.addEventListener("lostpointercapture", gt);
  }
  function Na(e, o, r, p) {
    const w = me(o);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = w.kind, w.group && (!e.group || e.group === "Movement") && (e.group = w.group)), w.arr.splice(Math.max(0, Math.min(r, w.arr.length)), 0, e), Qo(o.closest(".exerciseScroller,.createStepSlot") || o, () => Me()), Ro(o.querySelector('.moveRow[data-id="' + e.id + '"]'), p), pe(Ni($n(e)) + " added");
  }
  function Hn() {
    var p;
    if (!ye) return;
    const { item: e, ghost: o } = ye;
    ye = null, lo(o);
    const r = i("strengthList");
    Na(e, r, me(r).arr.length, 0), (p = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || p.scrollIntoView({ block: "nearest", behavior: _a() ? "auto" : "smooth" });
  }
  function qi() {
    if (!ye) return;
    const e = ye.ghost;
    ye = null, lo(e), pe("Discarded");
  }
  function ti() {
    ye && (ye.ghost.remove(), ye = null);
  }
  window.addEventListener("resize", () => {
    if (ye != null && ye.ghost.classList.contains("hovering")) {
      const e = Hi();
      ye.ghost.style.width = e.width + "px", ye.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (O = on == null ? void 0 : on.addEventListener) == null || O.call(on, "change", () => {
    pa(), ye && !Ga() && Hn(), Ke();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ia() {
    const e = i("workoutModal"), o = window.visualViewport;
    if (!e.classList.contains("open") || !Ga()) {
      Wi();
      return;
    }
    const r = o ? o.offsetTop : 0, p = o ? o.offsetLeft : 0, w = o ? o.width : window.innerWidth, T = o ? o.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: w + "px", height: T + "px", top: r + "px", left: p + "px" });
    const R = e.getBoundingClientRect();
    Math.abs(R.top - r) > 0.5 && (e.style.top = 2 * r - R.top + "px"), Math.abs(R.left - p) > 0.5 && (e.style.left = 2 * p - R.left + "px");
  }
  function Wi() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (U = window.visualViewport) == null || U.addEventListener("resize", Ia), (lt = window.visualViewport) == null || lt.addEventListener("scroll", Ia), window.addEventListener("resize", Ia), window.addEventListener("scroll", Ia, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ia, 250));
  function ji() {
    la.length > 0;
    const e = i("addMovementBtn"), o = i("addRestBtn");
    e && (e.innerHTML = Bo + "<span>Add movement</span>"), o && (o.innerHTML = Bo + "<span>Add rest</span>");
    const r = i("addVideoBtn");
    r && (r.innerHTML = Bo + "<span>Add video</span>");
  }
  function Po() {
    const e = i("useGlobalTiming").checked, o = i("addMovementDuration"), r = i("addMovementUnit");
    o.disabled = e, r.disabled = e, o.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + ca(B.value);
    const p = i("useGlobalRestTiming").checked, w = i("addRestDuration"), T = i("addRestUnit");
    w.disabled = p, T.disabled = p, w.parentElement.style.opacity = p ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + ca(W.value);
  }
  let ei = "movement";
  function is(e) {
    ei = e;
    const o = i("movementFields"), r = i("restFields");
    o.hidden = e !== "movement", r.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Po();
  }
  function No() {
    Qt[Kt];
    const e = Ut ? !0 : i("useGlobalTiming").checked, o = e ? Number(B.value) : kn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), r = Ut ? !0 : i("useGlobalRestTiming").checked, p = r ? Number(W.value) : kn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (ei === "rest") {
      const w = i("addRestTitle").value.trim() || "Rest", T = i("addRestGroup").value.trim() || "Rest";
      la.push({
        id: "rest-" + Date.now(),
        name: w,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, p || Number(W.value))
      }), Me(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", pe("Rest added"), Ut && (E("movements"), Z());
    } else {
      const w = i("addMovementInput").value.trim();
      if (!w) return;
      const T = i("addMovementGroup").value.trim() || "Movement";
      la.push({
        id: "movement-" + Date.now(),
        name: w,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, o || Number(B.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Me(), i("movementCreator").hidden = !0, pe("Movement added"), Ut && (E("movements"), Z());
    }
    ji();
  }
  let Sn = null;
  function pe(e, o) {
    const r = i("toast");
    r.innerHTML = "";
    const p = document.createElement("span");
    if (p.textContent = e, r.appendChild(p), o) {
      const w = document.createElement("button");
      w.type = "button", w.className = "toastAction", w.textContent = o.label, w.addEventListener("click", () => {
        o.run(), r.classList.remove("show", "withAction"), clearTimeout(Sn);
      }), r.appendChild(w);
    }
    r.classList.toggle("withAction", !!o), r.classList.add("show"), clearTimeout(Sn), Sn = setTimeout(() => r.classList.remove("show", "withAction"), o ? 5e3 : 2200);
  }
  const Fn = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Io = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function ai(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ha(e, o) {
    return Fn[ai(o)];
  }
  function Fa(e) {
    return Io[ai(e)];
  }
  function Ie(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function On() {
    return { morning: ce().morningTime || "08:00", evening: ce().eveningTime || "19:00" };
  }
  function uo(e) {
    const [o, r] = String(e).split(":").map(Number);
    return (o || 0) * 60 + (r || 0);
  }
  function Ar(e) {
    const o = On();
    return e.getHours() * 60 + e.getMinutes() >= uo(o.evening) ? "evening" : "morning";
  }
  function u(e, o) {
    return he.checkins.find((r) => r.date === e && r.slot === o);
  }
  function g(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function y() {
    const e = /* @__PURE__ */ new Date(), o = Ie(e), r = Ar(e), p = On(), w = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && w < uo(p.morning) || g(u(o, r)) ? null : r;
  }
  const C = i("checkinModal"), I = i("checkinTab"), V = i("checkinBadge"), Y = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function ct(e) {
    const { input: o, fill: r } = Y[e];
    r.style.width = o.value + "%", o.setAttribute("aria-valuetext", Ha(e, o.value));
  }
  Object.keys(Y).forEach((e) => Y[e].input.addEventListener("input", () => ct(e)));
  let J = null;
  function vt() {
    const e = On(), o = /* @__PURE__ */ new Date(), r = o.getHours() * 60 + o.getMinutes();
    return r < uo(e.morning) ? "Next check-in at " + e.morning : r < uo(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function xt() {
    const e = On(), o = /* @__PURE__ */ new Date(), r = o.getHours() * 60 + o.getMinutes(), p = (w, T) => {
      const [R, D] = w.split(":").map(Number);
      return new Date(o.getFullYear(), o.getMonth(), o.getDate() + (T ? 1 : 0), R, D);
    };
    return r < uo(e.morning) ? { date: p(e.morning), time: e.morning } : r < uo(e.evening) ? { date: p(e.evening), time: e.evening } : { date: p(e.morning, !0), time: e.morning };
  }
  let Ct = null, jt = null;
  function zt() {
    if (y()) {
      Yt(), Te();
      return;
    }
    const e = xt(), o = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(o / 3600), p = Math.floor(o % 3600 / 60), w = o % 60;
    i("peekCountdown").textContent = r + ":" + String(p).padStart(2, "0") + ":" + String(w).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function At() {
    zt(), I.classList.add("peek"), clearInterval(jt), jt = setInterval(zt, 1e3), clearTimeout(Ct), Ct = setTimeout(Yt, 6e3);
  }
  function Yt() {
    I.classList.remove("peek"), clearInterval(jt), clearTimeout(Ct);
  }
  function Ot() {
    const e = y();
    if (!e) {
      I.classList.contains("peek") ? Yt() : At();
      return;
    }
    J = { date: Ie(/* @__PURE__ */ new Date()), slot: e };
    const r = u(J.date, e), p = he.checkins.find((w) => g(w));
    Object.keys(Y).forEach((w) => {
      Y[w].input.value = (r == null ? void 0 : r[w]) ?? (p == null ? void 0 : p[w]) ?? 50, ct(w);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Y.mood.input.focus());
  }
  function Tt() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), J && (Zt = J.date + "-" + J.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Zt);
    } catch {
    }
    J = null, Te();
  }
  function ie() {
    if (!J) return;
    if (g(u(J.date, J.slot))) {
      Tt();
      return;
    }
    const { date: e, slot: o } = J;
    let r = u(e, o);
    r || (r = { date: e, slot: o }, he.checkins.unshift(r), he.checkins = he.checkins.slice(0, 2e3)), r.mood = Number(Y.mood.input.value), r.energy = Number(Y.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), en(), l.fire("checkin", { slot: o, mood: r.mood, energy: r.energy, mood_label: Ha("mood", r.mood), energy_label: Ha("energy", r.energy) }), pe((o === "morning" ? "Morning" : "Evening") + " check-in saved"), Tt(), He(), Ge(), mi(), jn();
  }
  let Zt = "";
  try {
    Zt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Te() {
    const e = y();
    V.hidden = !e, I.hidden = !e, e || Yt(), I.classList.toggle("due", !!e), I.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : vt()), I.title = e ? "Check in now" : vt();
  }
  function Ht() {
    Te();
    const e = y();
    !e || C.classList.contains("open") || ce().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !rt.home.classList.contains("active") || qa.classList.contains("open") || Zt !== Ie(/* @__PURE__ */ new Date()) + "-" + e && Ot());
  }
  I.addEventListener("click", Ot), i("checkinLater").addEventListener("click", Tt), i("checkinSave").addEventListener("click", ie), C.addEventListener("click", (e) => {
    e.target === C && Tt();
  }), C.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Tt());
  }), setInterval(Ht, 3e4);
  function He() {
    const e = Ie(/* @__PURE__ */ new Date()), o = (r) => he.checkins.find((p) => p.date === e && p[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, p]) => {
      const w = o(r);
      i(p).textContent = w ? Ha(r, w[r]) : "—";
    });
  }
  function Ge() {
    const e = i("feelCard");
    if (!e) return;
    const o = /* @__PURE__ */ new Date(), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), p = [...Array(7)].map((ut, ht) => {
      const gt = new Date(r.getFullYear(), r.getMonth(), r.getDate() + ht), Rt = Ie(gt), $t = he.checkins.filter((_t) => _t.date === Rt), It = (_t) => {
        const Et = $t.map((le) => le[_t]).filter((le) => le != null);
        return Et.length ? Et.reduce((le, ue) => le + ue, 0) / Et.length : null;
      };
      return { d: gt, key: Rt, mood: It("mood"), energy: It("energy"), count: $t.filter(g).length, future: gt > o && Rt !== Ie(o) };
    }), w = (ut) => {
      const ht = p.map((gt) => gt[ut]).filter((gt) => gt != null);
      return ht.length ? ht.reduce((gt, Rt) => gt + Rt, 0) / ht.length : null;
    }, T = w("mood"), R = w("energy"), D = (ut, ht) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ut + "</span><span>" + (ht == null ? "—" : Gt(Ha("", ht))) + '</span></div><div class="feelTrack"><span style="width:' + (ht == null ? 0 : Math.max(4, ht)) + "%;background:" + (ht == null ? "transparent" : Fa(ht)) + '"></span></div></div>', ot = p.filter((ut) => ut.mood != null && ut.energy != null).sort((ut, ht) => ht.mood + ht.energy - (ut.mood + ut.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Gt(Ha("", (T + R) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (ot ? " · best day " + Gt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ot.d)) : "")) + '</div></div></div><div class="feelDays">' + p.map(
      (ut) => '<div class="weekChip feelDay' + (ut.future ? " future" : "") + (ut.key === Ie(o) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Gt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ut.d)) + "</strong>" + (ut.count >= 2 ? '<span class="weekTick">' + Ta("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ut.count) + "</span>") + "</div>" + D("Mood", ut.mood) + D("Energy", ut.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Aa = i("upcomingCountSetting");
  Aa.addEventListener("change", () => {
    Eo = Aa.value === "all" ? "all" : Number(Aa.value), di();
  });
  const sn = i("tempoRevealBtn"), ni = i("tempoExperiment"), Oa = i("tempoQuad"), Jn = i("tempoDot"), ge = i("tempoEstimate"), Qn = i("tempoReadout");
  let ln = { x: 0.5, y: 0.5 }, Ua = !1, to = { total: 20, work: 45, rest: 15 };
  function Ho(e, o, r, p) {
    const w = Math.max(o, Math.min(r, e));
    return Math.round((w - o) / p) * p + o;
  }
  function oi(e, o) {
    const r = (e - 0.5) * 2, p = (o - 0.5) * 2, w = Ho(
      to.total + r * 5 + p * 8,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    ), T = Ho(
      to.work + r * 10 + p * 8,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    ), R = Ho(
      to.rest + r * 6 + p * 6,
      Number(W.min),
      Number(W.max),
      Number(W.step)
    );
    return P.value = w, B.value = T, W.value = R, wt.textContent = T + " sec", X.textContent = R + " sec", Di(), { total: w, work: T, rest: R };
  }
  function ma(e, o) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", p = o < 0.34 ? "Fast" : o > 0.66 ? "Slow" : "Balanced", w = oi(e, o);
    Qn.textContent = r + " + " + p, ge.textContent = w.total + " min", Oa.setAttribute("aria-valuetext", r + " and " + p + ", estimated " + w.total + " minutes");
  }
  function Ys(e) {
    const o = Oa.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - o.left) / o.width)), p = Math.max(0, Math.min(1, (e.clientY - o.top) / o.height));
    ln = { x: r, y: p }, Jn.style.left = r * 100 + "%", Jn.style.top = p * 100 + "%", ma(r, p);
  }
  sn.addEventListener("click", () => {
    const e = ni.hidden;
    ni.hidden = !e, sn.setAttribute("aria-expanded", e ? "true" : "false"), sn.textContent = e ? "Now close this" : "Don’t try this!", e && (to = {
      total: Number(P.value),
      work: Number(B.value),
      rest: Number(W.value)
    }, ln = { x: 0.5, y: 0.5 }, Jn.style.left = "50%", Jn.style.top = "50%", ma(ln.x, ln.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.toggle("selected", o === e));
  }));
  const rs = i("testingFeedbackForm"), kl = i("testingFeedbackThanks"), wd = i("testingFeedbackAgain");
  rs.addEventListener("submit", (e) => {
    e.preventDefault(), rs.hidden = !0, kl.hidden = !1, pe("Feedback captured for prototype");
  }), wd.addEventListener("click", (e) => {
    e.preventDefault(), rs.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.remove("selected")), kl.hidden = !0, rs.hidden = !1;
  }), Oa.addEventListener("pointerdown", (e) => {
    var o;
    Ua = !0, Ys(e);
    try {
      (o = Oa.setPointerCapture) == null || o.call(Oa, e.pointerId);
    } catch {
    }
  }), Oa.addEventListener("pointermove", (e) => {
    Ua && Ys(e);
  }), Oa.addEventListener("pointerup", (e) => {
    Ua && (Ua = !1, Ys(e), Me());
  }), Oa.addEventListener("pointercancel", () => Ua = !1), Oa.addEventListener("keydown", (e) => {
    let { x: o, y: r } = ln, p = !0;
    e.key === "ArrowLeft" ? o -= 0.05 : e.key === "ArrowRight" ? o += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : p = !1, p && (e.preventDefault(), o = Math.max(0, Math.min(1, o)), r = Math.max(0, Math.min(1, r)), ln = { x: o, y: r }, Jn.style.left = o * 100 + "%", Jn.style.top = r * 100 + "%", ma(o, r), Me());
  });
  const qa = i("workoutModal");
  let fo = null;
  function ii(e) {
    return e.map((o) => ({ ...o }));
  }
  function xd() {
    const e = Qt[Kt];
    return {
      key: Kt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ii(de),
      strength: ii(la),
      cooldown: ii(We),
      total: Number(P.value),
      work: Number(B.value),
      rest: Number(W.value),
      rounds: Number(oe.value) || 1
    };
  }
  function Ml(e = !1) {
    Ut = !!e, ea = null, La = null, pa(), ti(), fo = xd(), i("moveEditorTitle").textContent = Ut ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Ut, i("warmupRow").hidden = Ut, i("deleteMoveOpen").hidden = Ut;
    const o = i("createMoveOptions");
    o.hidden = !Ut;
    {
      const r = Qt[Kt];
      i("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), i("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (Zs(), Ut) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const r = Qt[Kt];
      Bi((r == null ? void 0 : r.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, is("movement"), ji(), Po(), ni.hidden = !0, sn.setAttribute("aria-expanded", "false"), sn.textContent = "Don’t try this!", qa.classList.toggle("createMode", Ut), qa.querySelector(".modal").classList.toggle("createMode", Ut), qa.classList.add("open"), qa.setAttribute("aria-hidden", "false"), Ia(), Ut && Mt();
  }
  function zi() {
    const e = Qt[Kt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Zs() {
    const e = zi(), o = i("warmupSwitch");
    o.classList.toggle("on", e), o.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = Qt[Kt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, Tr()) : (e.warmupOff = !e.warmupOff, Me()), Zs());
  });
  function Er() {
    pa(), ti(), Wi(), La = null, ea = null, qa.classList.contains("createMode") && tt(), qa.classList.remove("createMode"), qa.querySelector(".modal").classList.remove("createMode"), qa.classList.remove("open"), qa.setAttribute("aria-hidden", "true");
  }
  function Ks() {
    if (!fo) return;
    const e = fo;
    e.profile && (Qt[e.key] = JSON.parse(JSON.stringify(e.profile))), Kt = e.key, de = ii(e.warmup), la = ii(e.strength), We = ii(e.cooldown), P.value = e.total, B.value = e.work, W.value = e.rest, oe.value = e.rounds || 1;
    const o = Qt[Kt];
    if (o) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === Kt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const p = r.querySelector(".workoutName");
        p && (p.textContent = o.name);
        const w = r.querySelector(".panelCollapsedText");
        w && (w.textContent = o.name);
        const T = r.querySelector(".sourceTag");
        T && (T.textContent = o.source);
      }
      m.value = o.name;
    }
    Me();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Ut) {
      const e = Kt;
      delete Qt[e], Ut = !1, Bt = null, da(he.order.find((o) => Qt[o]) || Object.keys(Qt)[0]);
    } else
      Ks();
    Er();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    pa(), ye && Hn();
    const e = Qt[Kt], o = m.value.trim() || "New move";
    if (e && (e.name = o), Mn(), ea = null, Me(), Ut && e)
      Ca(Kt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === Kt)), Ut = !1, Bt = null, he.order.includes(Kt) || he.order.push(Kt), pe("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const p = r.querySelector(".workoutName");
        p && (p.textContent = o);
        const w = r.querySelector(".panelCollapsedText");
        w && (w.textContent = o);
      }
      pe("Move saved");
    }
    fo = null, Er(), en();
  }), qa.addEventListener("click", (e) => {
    if (e.target === qa) {
      if (Ut) {
        const o = Kt;
        delete Qt[o], Ut = !1, Bt = null, da(he.order.find((r) => Qt[r]) || Object.keys(Qt)[0]);
      } else
        Ks();
      Er();
    }
  }), co(i("addMovementBtn"), "movement"), co(i("addRestBtn"), "rest"), co(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Po), i("useGlobalRestTiming").addEventListener("change", Po), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Bi(e.dataset.movePreset, !0), Me();
  })), i("includeWarmupPreset").addEventListener("change", Tr), i("includeCooldownPreset").addEventListener("change", Tr), i("includeWarmupPreset").addEventListener("change", Z), i("includeCooldownPreset").addEventListener("change", Z), m.addEventListener("input", Z), m.addEventListener("input", po), i("confirmAddMovement").addEventListener("click", No), i("confirmAddRest").addEventListener("click", No), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && No();
  });
  const Vi = i("countdown"), ss = i("countNum"), ho = i("countdownPixelCanvas");
  let _r = null, $s = "appear";
  class Sl {
    constructor(o, r, p, w, T, R, D) {
      this.width = o.width, this.height = o.height, this.ctx = r, this.x = p, this.y = w, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = D, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Gi = [], Xs = 1, ls = 1;
  function Fo() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Cl() {
    var ut;
    if (!ho) return;
    const e = Fo(), o = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    Xs = o, ls = r;
    const p = Math.min(window.devicePixelRatio || 1, 2);
    ho.width = Math.floor(o * p), ho.height = Math.floor(r * p), ho.style.width = o + "px", ho.style.height = r + "px";
    const w = ho.getContext("2d");
    w.setTransform(p, 0, 0, p, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, D = (ut = window.matchMedia) == null ? void 0 : ut.call(window, "(prefers-reduced-motion: reduce)").matches, ot = D ? 0 : 0.055;
    Gi = [];
    for (let ht = 0; ht < o; ht += R)
      for (let gt = 0; gt < r; gt += R) {
        const Rt = ht - o / 2, $t = gt - r / 2, It = Math.sqrt(Rt * Rt + $t * $t), _t = D ? 0 : Math.random() * 75 + It * 0.05, Et = new Sl({ width: o, height: r }, w, ht, gt, T[Math.floor(Math.random() * T.length)], ot, _t);
        Et.maxSizeInteger = 4, Et.maxSize = Math.random() * 3.2 + 0.8, Et.sizeStep = 0.35 + Math.random() * 0.45, Gi.push(Et);
      }
  }
  function Tl(e) {
    cancelAnimationFrame(_r), $s = e;
    const o = ho == null ? void 0 : ho.getContext("2d");
    if (!o) return;
    function r() {
      o.clearRect(0, 0, Xs, ls);
      let p = !0;
      Gi.forEach((w) => {
        w[$s](), w.isIdle || (p = !1);
      }), $s === "disappear" && p || (_r = requestAnimationFrame(r));
    }
    _r = requestAnimationFrame(r);
  }
  function ds() {
    cancelAnimationFrame(_r), Cl(), Tl("appear"), setTimeout(() => Tl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Vi.classList.contains("active") && ds();
  });
  const Ui = i("pixelTrailCanvas"), Yi = Ui.getContext("2d");
  let Cn = !0, Ee = 0.7, Zi = 600, Dr = [], Ki = null, ga = { x: 0, y: 0, ready: !1 };
  function Ll() {
    const e = c.getBoundingClientRect(), o = Fo(), r = Math.min(window.devicePixelRatio || 1, 2), p = Math.max(1, e.width / o), w = Math.max(1, e.height / o);
    Ui.width = Math.max(1, Math.floor(p * r)), Ui.height = Math.max(1, Math.floor(w * r)), Ui.style.width = p + "px", Ui.style.height = w + "px", Yi.setTransform(r, 0, 0, r, 0, 0);
  }
  function yd(e, o) {
    if (!Cn) return;
    const r = performance.now();
    ga.ready || (ga = { x: e, y: o, ready: !0 });
    const p = 7;
    for (let w = 1; w <= p; w++) {
      const T = w / p;
      Dr.push({
        x: ga.x + (e - ga.x) * T,
        y: ga.y + (o - ga.y) * T,
        born: r - (p - w) * 10
      });
    }
    ga = { x: e, y: o, ready: !0 };
  }
  function cs(e) {
    if (Ki = null, !x) return;
    if (!rt.workout.classList.contains("active")) {
      Ki = requestAnimationFrame(cs);
      return;
    }
    const o = c.getBoundingClientRect(), r = Fo();
    Yi.clearRect(0, 0, o.width / r, o.height / r), Cn && (Dr = Dr.filter((w) => e - w.born < Zi), Yi.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Dr.forEach((w) => {
      const T = (e - w.born) / Zi, R = (1 - T) * Ee, D = Math.round(w.x / 14) * 14, ot = Math.round(w.y / 14) * 14;
      Yi.globalAlpha = Math.max(0, R);
      const ut = 2 + 5 * (1 - T) * Ee;
      Yi.fillRect(D - ut / 2, ot - ut / 2, ut, ut);
    }), Yi.globalAlpha = 1), Ki = requestAnimationFrame(cs);
  }
  c.addEventListener("pointermove", (e) => {
    const o = c.getBoundingClientRect(), r = Fo();
    yd((e.clientX - o.left) / r, (e.clientY - o.top) / r);
  }), c.addEventListener("pointerleave", () => ga.ready = !1), new ResizeObserver(Ll).observe(c), Ll(), Ki = requestAnimationFrame(cs);
  const mo = i("movementRippleCanvas"), ri = mo.getContext("2d");
  let si = !0, $i = null, Al = performance.now();
  function Xi() {
    const e = mo.parentElement.getBoundingClientRect(), o = Fo(), r = Math.max(1, e.width / o), p = Math.max(1, e.height / o), w = Math.min(window.devicePixelRatio || 1, 2);
    mo.width = Math.max(1, Math.floor(r * w)), mo.height = Math.max(1, Math.floor(p * w)), mo.style.width = r + "px", mo.style.height = p + "px", ri.setTransform(w, 0, 0, w, 0, 0);
  }
  function Js() {
    var e;
    return Ve || ((e = Vt[te]) == null ? void 0 : e.kind) === "rest";
  }
  function kd() {
    const e = Vt[te];
    return Js() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function ps(e) {
    if ($i = null, !x) return;
    if (!rt.workout.classList.contains("active")) {
      $i = requestAnimationFrame(ps);
      return;
    }
    const o = mo.parentElement.getBoundingClientRect(), r = Fo(), p = Math.max(1, o.width / r), w = Math.max(1, o.height / r);
    if (ri.clearRect(0, 0, p, w), si) {
      const T = kd(), R = (e - Al) % T / T, D = 15, ot = Math.max(8, Math.round(D * w / Math.max(1, p))), ut = p / (D + 1), ht = w / (ot + 1), gt = p * 0.5, Rt = w * 0.52, $t = Math.hypot(gt, Rt), _t = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Et = 1; Et <= ot; Et++)
        for (let le = 1; le <= D; le++) {
          const ue = le * ut, Wt = Et * ht, fe = Math.hypot(ue - gt, Wt - Rt) / $t, Le = Js(), ne = Le ? Math.exp(-Math.pow((fe - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ee = Math.exp(-Math.pow((fe - R * 1.25) * 7, 2)), fa = Le ? ne : ee, Ra = Le ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - fe * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - fe * 5) ** 2, je = Le ? 1.4 + fa * 4.2 * Ra : 1.2 + fa * 5 * Ra;
          ri.beginPath(), ri.arc(ue, Wt, je, 0, Math.PI * 2), ri.fillStyle = `rgba(${_t},${Le ? 0.08 + fa * 0.48 : 0.05 + fa * 0.55})`, ri.fill();
        }
    }
    $i = requestAnimationFrame(ps);
  }
  new ResizeObserver(Xi).observe(mo.parentElement), Xi(), $i = requestAnimationFrame(ps);
  const Da = i("exerciseTitle"), go = i("exerciseMeta"), Qs = i("stepLabel"), Wa = i("digits"), Se = i("fill"), ia = i("progress"), Br = i("pause"), li = i("nextName"), us = i("nextMeta"), Oo = i("nextIcon"), vo = i("skipNextSession");
  let ua = null;
  function ve(e) {
    for (let o = Math.max(0, e); o < Vt.length; o++)
      if (!Vt[o].sessionHidden) return o;
    return -1;
  }
  function fs() {
    const e = Vt[te];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ve) {
      const p = ve(te + 1), w = p >= 0 ? Vt[p] : null;
      return w ? { name: w.name, meta: ms(w), icon: hs(w) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const o = ve(te + 1), r = o >= 0 ? Vt[o] : null;
    return r ? { name: r.name, meta: ms(r), icon: hs(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Ji() {
    if (!Vt[te]) return Vt.length;
    const o = ve(te + 1);
    return o < 0 ? Vt.length : o + 1;
  }
  function hs(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ms(e) {
    return e.kind === "video" ? "YouTube · " + nn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Rr() {
    return Vt.length && Vt[Vt.length - 1].round || 1;
  }
  function El(e) {
    const o = Vt[e];
    if (!o) return "";
    const r = Rr();
    if (r <= 1) return "Step " + (e + 1) + " of " + Vt.length;
    if (o.roundBreak) return "Round " + o.round + " of " + r + " · Rest";
    const p = Vt.filter((w) => w.round === o.round && !w.roundBreak).length;
    return "Round " + o.round + " of " + r + " · Step " + (o.roundIndex + 1) + " of " + p;
  }
  function gs() {
    return ia.querySelector('[data-step="' + te + '"]');
  }
  function Md() {
    Vt[te] && Number(ia.dataset.round) !== (Vt[te].round || 1) && cn(), [...ia.children].forEach((e) => {
      const o = Number(e.dataset.step);
      e.classList.toggle("done", o < te), e.classList.toggle("active", o === te), e.classList.toggle("rewindable", o <= te), e.disabled = o > te, o === te && e.style.setProperty("--segment-progress", "0%");
    }), Vt[te] && (Qs.textContent = El(te), jo());
  }
  function _l(e) {
    const o = Vt.indexOf(e);
    o < 0 || o <= te || (e.sessionHidden = !e.sessionHidden, ra(), pe((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function di() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const o = Ji(), r = Vt.slice(o);
    (Eo === "all" ? r : r.slice(0, Math.max(1, Number(Eo) || 1))).forEach((w) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (w.sessionHidden ? " sessionHidden" : "") + (ll(w) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ta(hs(w)) + '</div><div><div class="upcomingName">' + Gt(w.name) + '</div><div class="upcomingMeta">' + Gt(ms(w)) + (Rr() > 1 ? " · round " + w.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (w.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => _l(w)), e.appendChild(T);
    });
  }
  function ra() {
    var o;
    const e = fs();
    li.textContent = e.name, us.textContent = e.meta, Oo.innerHTML = Ta(e.icon);
    {
      const r = Ve ? Vt[ve(te + 1)] : ((o = Vt[te]) == null ? void 0 : o.rest) > 0 ? { kind: "rest" } : Vt[ve(te + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && ll(r)));
    }
    if (ua = null, Ve) {
      const r = ve(te + 1);
      r >= 0 && (ua = Vt[r]);
    } else {
      const r = Vt[te];
      if (r && r.rest > 0)
        ua = null;
      else {
        const p = ve(te + 1);
        p >= 0 && (ua = Vt[p]);
      }
    }
    vo && (vo.hidden = !ua, vo.textContent = ua != null && ua.sessionHidden ? "Include this session" : "Skip this session"), di();
  }
  vo.addEventListener("click", () => {
    ua && (ua.sessionHidden = !ua.sessionHidden, pe((ua.sessionHidden ? "Hidden " : "Included ") + ua.name + " for this session"), ra());
  });
  let dn = null, vs = null;
  function Pr(e, o = {}) {
    const r = Qt[Kt];
    l.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: Kt, ...o });
  }
  function Dl() {
    const e = Qt[Kt];
    dn = { key: Kt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(vs), vs = setInterval(() => {
      dn && !an && dn.active++;
    }, 1e3), Pr("started", { steps: Vt.length });
  }
  function bs(e) {
    if (clearInterval(vs), !dn) return;
    const o = dn;
    dn = null, Pr(e ? "completed" : "ended", { seconds: o.active }), !(o.active < 30) && (he.history.unshift({ id: "h-" + o.startedAt, move_id: o.key, name: o.name, start: new Date(o.startedAt).toISOString(), seconds: o.active, completed: e }), he.history = he.history.slice(0, 1e3), en(), mi(), jn());
  }
  let Ya = null, Nr = null, Tn = !1;
  function Ln() {
    return ce().sounds !== !1;
  }
  function Bl() {
    if (Ln())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Ya = Ya || new (window.AudioContext || window.webkitAudioContext)(), Ya.state === "suspended" && Ya.resume();
      } catch {
        Ya = null;
      }
  }
  function qo(e, o, r, { to: p = e, vol: w = 0.25, type: T = "sine" } = {}) {
    const R = Ya.currentTime + o, D = Ya.createOscillator(), ot = Ya.createGain();
    D.type = T, D.frequency.setValueAtTime(e, R), p !== e && D.frequency.exponentialRampToValueAtTime(p, R + r), ot.gain.setValueAtTime(1e-4, R), ot.gain.exponentialRampToValueAtTime(w, R + 0.01), ot.gain.exponentialRampToValueAtTime(1e-4, R + r), D.connect(ot).connect(Ya.destination), D.start(R), D.stop(R + r + 0.02);
  }
  const tl = {
    tick: () => qo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      qo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), qo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => qo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      qo(523, 0, 0.16, { type: "triangle" }), qo(659, 0.16, 0.16, { type: "triangle" }), qo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function An(e) {
    if (!(!Ln() || !Ya))
      try {
        Ya.state === "suspended" && Ya.resume(), tl[e]();
      } catch {
      }
  }
  function Ir() {
    Ze >= 1 && Ze <= 3 && Ze !== Nr && (Nr = Ze, An("tick"));
  }
  function Rl() {
    Bl(), L("workout"), al();
    const e = ve(0);
    e >= 0 && Vt[e].kind === "video" && Hl(Vt[e]);
  }
  function el() {
    va(), bs(!1), clearInterval(ta), clearInterval(Un), Ve = !1, bo(!1), i("app").classList.remove("resting"), Vi.classList.remove("active"), L("home");
  }
  function al() {
    Vi.classList.add("active");
    let e = 5;
    ss.textContent = e, An("tick"), requestAnimationFrame(ds), clearInterval(Un), Un = setInterval(() => {
      e--, e > 0 ? (ss.textContent = e, An("tick"), ds()) : (clearInterval(Un), ss.textContent = "GO", An("move"), Tn = !0, ds(), setTimeout(() => {
        Vi.classList.remove("active"), cancelAnimationFrame(_r), Za();
      }, 650));
    }, 1e3);
  }
  function cn() {
    var o;
    ia.innerHTML = "";
    const e = ((o = Vt[Math.max(0, te)] || Vt[0]) == null ? void 0 : o.round) || 1;
    ia.dataset.round = e, Vt.forEach((r, p) => {
      if ((r.round || 1) !== e) return;
      const w = document.createElement("button");
      w.dataset.step = p, w.type = "button", w.className = "progressSegment", w.setAttribute("aria-label", "Go to " + r.name), w.addEventListener("click", () => {
        p <= te && Sd(p);
      }), ia.appendChild(w);
    });
  }
  function bo(e) {
    e = !!e;
    const o = an !== e;
    if (an = e, Br.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), Ea && Re)
      try {
        e ? Re.pauseVideo() : Re.playVideo();
      } catch {
      }
    o && dn && Pr(e ? "paused" : "resumed");
  }
  function Sd(e) {
    e < 0 || e >= Vt.length || e > te || (clearInterval(ta), Ve = !1, i("app").classList.remove("resting"), te = e, bo(!1), qn(), ta = setInterval(zo, 1e3));
  }
  function Za() {
    if (te = ve(0), bo(!1), cn(), te < 0) {
      Da.textContent = "No activities", go.textContent = "Open Edit and enable or add a movement", go.hidden = !1;
      return;
    }
    Dl(), qn(), clearInterval(ta), ta = setInterval(zo, 1e3);
  }
  const Hr = i("videoStage"), eo = i("videoSound"), Qi = 0, ci = 1, nl = 2;
  let Pl = 0, pi = null, wo = null, Re = null, xo = null, tr = 0, ws = !1, Ea = null, er = null;
  function Nl() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : pi || (pi = new Promise((o, r) => {
      const p = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          p == null || p();
        } catch {
        }
      };
      const w = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(w), clearTimeout(T), o(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(w), pi = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(w), clearTimeout(T), pi = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), pi);
  }
  function Il() {
    return wo || (wo = Nl().then((e) => new Promise((o) => {
      const r = document.createElement("div");
      i("videoFrame").appendChild(r), Re = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => o(Re), onStateChange: (p) => ao(p.data), onError: (p) => yo(p.data) }
      });
    })), wo.catch(() => {
      wo = null;
    }), wo);
  }
  function Hl(e) {
    !(e != null && e.videoId) || e.videoError || Il().then((o) => {
      Ea || xo === e.videoId || (xo = e.videoId, tr = Number(e.start) || 0, ws = !1, o.mute(), o.loadVideoById({ videoId: e.videoId, startSeconds: tr }));
    }).catch(() => {
    });
  }
  function Pe() {
    const e = ve(te + 1);
    e >= 0 && Vt[e].kind === "video" && Hl(Vt[e]);
  }
  function ao(e) {
    if (!Ea) {
      e === ci && !ws && (ws = !0, Re.pauseVideo(), Re.seekTo(tr, !0));
      return;
    }
    Hr.classList.toggle("playing", e === ci), Vt[te] === Ea && performance.now() > Pl && (e === ci && an ? bo(!1) : e === nl && !an && bo(!0)), e === ci && il(Ea.videoId, Re.getDuration()) && en(), e === Qi && pn();
  }
  function yo(e) {
    const o = Ea;
    if (!o) {
      xo = null;
      return;
    }
    e === 101 || e === 150 ? (Cd(o.videoId), pe("That video can’t play outside YouTube, so it was skipped")) : pe("The video couldn’t play, so it was skipped"), pn();
  }
  function ko(e) {
    if (i("app").classList.add("videoStep"), eo.hidden = !0, Ea = e, clearTimeout(er), !e.videoId) {
      pe("This video step has no link yet, so it was skipped"), setTimeout(() => pn(), 0);
      return;
    }
    Il().then((o) => {
      if (Ea !== e) return;
      Pl = performance.now() + 1500;
      const r = Number(e.start) || 0;
      xo !== e.videoId ? (xo = e.videoId, tr = r, o.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (o.seekTo(r, !0), o.playVideo()), o.unMute(), an && o.pauseVideo(), er = setTimeout(() => {
        Ea !== e || an || (o.getPlayerState() !== ci ? (o.mute(), o.playVideo(), eo.hidden = !1) : o.isMuted() && (eo.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ea === e && (pe("YouTube didn’t load, so the video was skipped"), pn());
    });
  }
  function ar() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), o = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, p = (o == null ? void 0 : o.offsetHeight) || 42, w = window.innerHeight - r - 16 - p - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(w)) + "px");
  }
  window.addEventListener("resize", ar);
  function va() {
    clearTimeout(er);
    const e = Ea;
    if (Ea = null, i("app").classList.remove("videoStep"), Hr.classList.remove("playing"), eo.hidden = !0, e && Re) {
      try {
        Re.pauseVideo();
      } catch {
      }
      xo = null;
    }
  }
  function pn() {
    const e = Ea;
    !e || Vt[te] !== e || (va(), clearInterval(ta), ui(), ta = setInterval(zo, 1e3));
  }
  eo.addEventListener("click", () => {
    Re && (Re.unMute(), Re.playVideo()), eo.hidden = !0;
  });
  function ol(e) {
    var p;
    const o = Number(e.start) || 0;
    if (e.useVideoLength === !1) return o + (Number(e.duration) || 300);
    const r = Re && Ea === e && Number((p = Re.getDuration) == null ? void 0 : p.call(Re)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || o + (Number(e.duration) || 300);
  }
  function Wo(e, o) {
    const r = Qt[Kt];
    [de, la, We, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((p) => (Array.isArray(p) ? p : []).forEach((w) => {
      w && w.kind === "video" && w.videoId === e && o(w);
    }));
  }
  function il(e, o) {
    o = Math.round(Number(o) || 0);
    let r = !1;
    return e && o > 0 && Wo(e, (p) => {
      p.videoDuration !== o && (p.videoDuration = o, r = !0);
    }), r;
  }
  function Cd(e) {
    Wo(e, (o) => {
      o.videoError = "embed";
    }), en();
  }
  function Fl(e) {
    const o = e.videoId;
    if (!o) return;
    const r = () => {
      qa.classList.contains("open") ? ea || Me() : (Me(), en());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + o)).then((p) => p.ok ? p.json() : Promise.reject(p.status)).then((p) => {
      e.videoId === o && (e.videoTitle = p.title || "", e.autoName && p.title && (e.name = p.title), r());
    }).catch((p) => {
      e.videoId === o && p === 401 && (e.videoError = "embed", r());
    }), ba(o).then((p) => {
      il(o, p) && r();
    }).catch((p) => {
      p === "embed" && e.videoId === o && (e.videoError = "embed", r());
    });
  }
  function ba(e) {
    return Nl().then((o) => new Promise((r, p) => {
      const w = document.createElement("div");
      w.className = "videoProbe", w.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      w.appendChild(T), i("app").appendChild(w);
      let R = null, D = !1;
      const ot = (gt, Rt) => {
        D || (D = !0, clearTimeout(ut), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          w.remove();
        }, 0), Rt ? p(Rt) : r(gt));
      }, ut = setTimeout(() => ot(0), 2e4), ht = () => {
        var Rt;
        const gt = Number((Rt = R == null ? void 0 : R.getDuration) == null ? void 0 : Rt.call(R)) || 0;
        return gt > 0 && ot(gt), gt > 0;
      };
      R = new o.Player(T, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ht() || (R.mute(), R.playVideo());
          },
          onStateChange: () => ht(),
          onError: (gt) => ot(0, gt.data === 101 || gt.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function qn() {
    Ve = !1;
    const e = Vt[te];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? ko(e) : va(), Ze = e.duration, Ao = e.duration, Nr = null, Tn ? Tn = !1 : An(e.kind === "rest" ? "rest" : "move"), Da.textContent = e.name, go.textContent = e.group, go.hidden = !0, Qs.textContent = El(te), dn && Pr("step", { name: e.name, group: e.group, kind: e.kind, step: te + 1, of: Vt.length, round: e.round || 1, rounds: Rr(), duration: e.duration }), ra(), Md(), Pe(), e.kind === "video" && setTimeout(ar, 0);
  }
  function jo() {
    var w;
    const e = ((w = Vt[te]) == null ? void 0 : w.kind) === "video" && !Ve, o = e && Ze >= 60;
    Wa.textContent = o ? nn(Ze) : Ze, Wa.classList.toggle("long", o), e && (i("videoClock").textContent = nn(Ze) + " left");
    const r = Ze / Ao * 100;
    Se.style.width = r + "%";
    const p = gs();
    if (p && !Ve) {
      const T = 100 - r;
      p.style.setProperty("--segment-progress", T + "%");
    }
  }
  function zo() {
    var o, r;
    if (an) return;
    const e = Vt[te];
    if ((e == null ? void 0 : e.kind) === "video" && !Ve && Ea === e) {
      const p = Number((o = Re == null ? void 0 : Re.getCurrentTime) == null ? void 0 : o.call(Re)) || 0, w = Number(e.start) || 0, T = ol(e);
      Ao = Math.max(1, T - w), (p > w || ((r = Re == null ? void 0 : Re.getPlayerState) == null ? void 0 : r.call(Re)) === ci) && (Ze = Math.max(0, Math.ceil(T - p))), jo(), Ir(), p > w && p >= T - 0.25 && pn();
      return;
    }
    Ze--, jo(), Ir(), Ze <= 0 && (e.rest > 0 ? Ol(e.rest) : ui());
  }
  function Ol(e) {
    var r;
    Ve = !0, i("app").classList.add("resting");
    const o = gs();
    o && o.style.setProperty("--segment-progress", "100%"), clearInterval(ta), Ze = e, Ao = e, Nr = null, An("rest"), dn && Pr("rest", { duration: e }), Da.textContent = "Rest", go.textContent = (r = Vt[te]) != null && r.roundBreakAfter ? "Round " + (Vt[te].round + 1) + " next" : "Recovery", ra(), jo(), ta = setInterval(() => {
      an || (Ze--, jo(), Ir(), Ze <= 0 && (clearInterval(ta), ui(), ta = setInterval(zo, 1e3)));
    }, 1e3);
  }
  function ui() {
    Ve = !1;
    const e = ve(te + 1);
    if (e >= 0)
      te = e, qn();
    else {
      clearInterval(ta), va(), bo(!1), i("app").classList.remove("resting"), Da.textContent = "Complete", go.textContent = "Move finished", go.hidden = !1, Wa.textContent = "✓";
      {
        const o = Rr();
        Qs.textContent = o > 1 ? o + " rounds done" : Vt.filter((r) => !r.roundBreak).length + " steps done";
      }
      bs(!0), An("done");
      {
        const o = Ft(7).reduce((r, p) => r + p.minutes, 0);
        go.textContent = "Move finished · " + o + " min in the last 7 days";
      }
      Se.style.width = "100%", ra();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    ql(), bo(!1);
  });
  function ql() {
    clearInterval(ta);
    const e = Vt[te];
    if (Ve) {
      Ve = !1, i("app").classList.remove("resting");
      const r = ve(te + 1);
      r >= 0 ? (te = r, qn(), ta = setInterval(zo, 1e3)) : ui();
      return;
    }
    if (e && e.rest > 0) {
      Ol(e.rest);
      return;
    }
    const o = ve(te + 1);
    o >= 0 ? (te = o, qn(), ta = setInterval(zo, 1e3)) : ui();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(ta), bo(!1), Ve) {
      const e = Vt[te];
      Ze = e.rest, Ao = e.rest, Nr = null, An("rest"), Da.textContent = "Rest", go.textContent = "Recovery", i("app").classList.add("resting"), ra(), jo();
    } else
      qn();
    ta = setInterval(Ve ? () => {
      an || (Ze--, jo(), Ir(), Ze <= 0 && (clearInterval(ta), ui(), ta = setInterval(zo, 1e3)));
    } : zo, 1e3);
  });
  function nr(e, o, r, p) {
    let w = 0, T = null, R = !1;
    function D() {
      T && cancelAnimationFrame(T), T = null, w = 0, R = !1, o.style.width = "0%", e.classList.remove("holding");
    }
    function ot(gt) {
      if (!R) return;
      w || (w = gt);
      const Rt = Math.min(1, (gt - w) / r);
      if (o.style.width = Rt * 100 + "%", Rt >= 1) {
        R = !1, T && cancelAnimationFrame(T), T = null, o.style.width = "100%", setTimeout(() => o.style.width = "0%", 90), p();
        return;
      }
      T = requestAnimationFrame(ot);
    }
    function ut(gt) {
      var Rt;
      if (!(gt && gt.button !== void 0 && gt.button !== 0)) {
        gt == null || gt.preventDefault(), D(), R = !0, e.classList.add("holding");
        try {
          (Rt = e.setPointerCapture) == null || Rt.call(e, gt.pointerId);
        } catch {
        }
        T = requestAnimationFrame(ot);
      }
    }
    function ht() {
      R && D();
    }
    e.addEventListener("pointerdown", ut), e.addEventListener("pointerup", ht), e.addEventListener("pointercancel", ht), e.addEventListener("lostpointercapture", ht), e.addEventListener("keydown", (gt) => {
      (gt.key === " " || gt.key === "Enter") && !gt.repeat && ut(gt);
    }), e.addEventListener("keyup", (gt) => {
      (gt.key === " " || gt.key === "Enter") && ht();
    });
  }
  const Td = i("endWorkout");
  nr(Td, i("holdEndFill"), 1500, el);
  const or = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    or.classList.add("open"), or.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    or.classList.remove("open"), or.setAttribute("aria-hidden", "true");
  });
  function Ld() {
    const e = Kt, o = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    o && o.remove(), delete Qt[e], he.order = he.order.filter((p) => p !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const p = "custom-" + Date.now();
      Qt[p] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, he.order.push(p), r = Ca(p, Qt[p]);
    }
    or.classList.remove("open"), or.setAttribute("aria-hidden", "true"), fo = null, Er(), da(r.dataset.workout), en(), pe("Move deleted");
  }
  nr(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ld);
  const Ba = n.querySelector(".rubberTabs"), Vo = i("rubberIndicator");
  function ir(e, o = !0) {
    if (!e || !Ba || !Vo) return;
    const r = Ba.getBoundingClientRect(), p = e.getBoundingClientRect();
    Vo.style.transition = o ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const w = Fo();
    Vo.style.left = (p.left - r.left) / w + Ba.scrollLeft + "px", Vo.style.width = p.width / w + "px", o && (Vo.style.transform = "scaleX(1.08)", setTimeout(() => Vo.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((o) => o.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((o) => o.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), ir(e, !0);
  })), requestAnimationFrame(() => ir(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => ir(n.querySelector(".tab.active"), !1));
  const xs = i("pixelTrailToggle"), Fr = i("rippleToggle"), rr = i("trailStrength"), sr = i("trailLife");
  function un(e, o) {
    ce()[e] = o, en();
  }
  const rl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function sl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function ll(e) {
    var o;
    return !!((o = ce().hideMeta) != null && o[sl(e)]);
  }
  function Wl() {
    const e = /* @__PURE__ */ new Map(), o = (r, p, w) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const T = sl(r);
      let R = e.get(T);
      R || (R = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(T, R)), R.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : p), R.moves.add(w), R.count++;
    };
    return Object.values(Qt).forEach((r) => {
      const p = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Pt)).forEach((w) => o(w, "Warm-up", p)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((w) => o(w, w.presetRole === "warmup" ? "Warm-up" : w.presetRole === "cooldown" ? "Cooldown" : "Movement", p)), (r.cooldown || (r.customSequence ? [] : Jt)).forEach((w) => o(w, "Cooldown", p));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, p]) => {
      e.has(r) || e.set(r, { key: r, label: p, kinds: /* @__PURE__ */ new Set([p]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, p) => rl.indexOf(r.kind) - rl.indexOf(p.kind) || r.label.localeCompare(p.label));
  }
  let ys = "all";
  function ks() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Wl().filter((o) => (ys === "all" || o.kind === ys) && (!e || o.label.toLowerCase().includes(e) || o.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function Or() {
    const e = i("metaTableBody");
    if (!e) return;
    const o = ce().hideMeta || {}, r = ks();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((w) => {
      const T = !o[w.key], R = w.count ? (w.moves.length > 2 ? w.moves.slice(0, 2).join(", ") + " + " + (w.moves.length - 2) + " more" : w.moves.join(", ")) + " · " + w.count + " step" + (w.count === 1 ? "" : "s") : "Not used yet", D = document.createElement("tr");
      D.className = T ? "" : "off", D.innerHTML = '<td><div class="metaType">' + Gt(w.label) + '</div><div class="metaSub">' + Gt(w.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Gt(w.kind) + '</td><td class="metaUsedCol">' + Gt(R) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Gt(w.label) + ' on phones"></button></td>', D.querySelector(".switch").addEventListener("click", () => fi([w.key], T)), e.appendChild(D);
    });
    const p = r.filter((w) => o[w.key]).length;
    i("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (p ? " · " + p + " hidden on phones" : "") : "";
  }
  function fi(e, o) {
    const r = { ...ce().hideMeta || {} };
    e.forEach((p) => {
      o ? r[p] = !0 : delete r[p];
    }), un("hideMeta", r), Or(), Ke(), ra();
  }
  i("metaSearch").addEventListener("input", Or), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ys = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((o) => o.classList.toggle("active", o === e)), Or();
  })), i("metaHideAll").addEventListener("click", () => fi(ks().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => fi(ks().map((e) => e.key), !1));
  const lr = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ce().toggles || {} };
  function Ms() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", lr[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, p]) => {
      i(p).hidden = lr[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => lr[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const o = n.querySelector("#homeView .grid");
    o.classList.toggle("noActivity", !e), o.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    lr[e.dataset.toggle] = lr[e.dataset.toggle] === !1, Ms(), un("toggles", { ...lr });
  })), Ms();
  function Ad() {
    xs.classList.toggle("on", Cn), Fr.classList.toggle("on", si), rr.value = Math.round(Ee * 100), i("trailStrengthValue").textContent = rr.value + "%", sr.value = Zi, i("trailLifeValue").textContent = sr.value + " ms";
  }
  ce().trailEnabled !== void 0 && (Cn = ce().trailEnabled), ce().rippleEnabled !== void 0 && (si = ce().rippleEnabled), ce().trailStrength !== void 0 && (Ee = ce().trailStrength), ce().trailMaxAge !== void 0 && (Zi = ce().trailMaxAge), Ad();
  const Ss = i("soundsToggle");
  Ss.classList.toggle("on", Ln()), Ss.addEventListener("click", () => {
    un("sounds", !Ln()), Ss.classList.toggle("on", Ln()), Ln() && (Bl(), An("move"));
  }), xs.addEventListener("click", () => {
    Cn = !Cn, xs.classList.toggle("on", Cn), Cn || (Dr = []), un("trailEnabled", Cn);
  }), Fr.addEventListener("click", () => {
    si = !si, Fr.classList.toggle("on", si), un("rippleEnabled", si);
  }), rr.addEventListener("input", () => {
    Ee = Number(rr.value) / 100, i("trailStrengthValue").textContent = rr.value + "%";
  }), rr.addEventListener("change", () => un("trailStrength", Ee)), sr.addEventListener("input", () => {
    Zi = Number(sr.value), i("trailLifeValue").textContent = sr.value + " ms";
  }), sr.addEventListener("change", () => un("trailMaxAge", Zi)), Aa.addEventListener("change", () => un("upcomingCount", Eo));
  function dr(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const o = e === "light";
    i("app").classList.toggle("light", o), l.setLight(o), So(n);
  }
  dr(ce().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    dr(e.dataset.theme), un("theme", e.dataset.theme);
  }));
  const Ka = { steps: null, weather: null, ...ce().entities || {} };
  let Fe = null, Cs = {};
  function dl(e) {
    const o = Object.values(e).filter((D) => D.entity_id.startsWith("sensor.") || D.entity_id.startsWith("input_number.")), r = (D) => D.attributes.friendly_name || D.entity_id, p = o.filter((D) => /step/i.test(D.entity_id) || /step/i.test(r(D)) || ["steps", "step"].includes(String(D.attributes.unit_of_measurement || "").toLowerCase())), w = o.filter((D) => !p.includes(D)), T = (D, ot) => r(D).localeCompare(r(ot)), R = (D, ot) => /health_steps/.test(ot.entity_id) - /health_steps/.test(D.entity_id) || T(D, ot);
    return { suggested: p.sort(R), rest: w.sort(T), label: r };
  }
  function Ts(e) {
    const o = i("stepsEntity");
    if (!o || o.matches(":focus")) return;
    const { suggested: r, rest: p, label: w } = dl(e), T = (ot) => '<option value="' + Gt(ot.entity_id) + '">' + Gt(w(ot)) + "</option>";
    o.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(T).join("") + "</optgroup>" : "") + (p.length ? '<optgroup label="All sensors">' + p.map(T).join("") + "</optgroup>" : ""), o.value = Ka.steps || "";
    const R = i("stepsStatus"), D = Ka.steps && e[Ka.steps];
    R.textContent = D ? "Connected · " + w(D) : R.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Ka.steps = i("stepsEntity").value || null, un("entities", { ...Ka }), Cs = {}, zl(), Fe && (Ts(Fe), jl(Fe));
  });
  function Ed(e, o = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: o }).format(e);
  }
  function wa() {
    const e = Ka.steps && (Fe == null ? void 0 : Fe[Ka.steps]), o = Number(e == null ? void 0 : e.state);
    return Number.isFinite(o) ? o : null;
  }
  function jl(e) {
    var p;
    const o = Ka.steps, r = o ? Number((p = e[o]) == null ? void 0 : p.state) : NaN;
    i("stepsMeta").textContent = o ? Number.isFinite(r) ? Ed(r) : "—" : "Set up in Settings";
  }
  let hi = 0;
  async function zl() {
    const e = Ka.steps;
    if (!e || !l.ws) return;
    hi = Date.now();
    const o = /* @__PURE__ */ new Date(), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - 30);
    try {
      const p = await l.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: o.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), w = (p == null ? void 0 : p[e]) || [], T = {};
      if (w.forEach((R) => {
        Number.isFinite(R.max) && (T[Ie(new Date(R.start))] = R.max);
      }), !Object.keys(T).length) {
        const R = await l.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: o.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[e]) || []).forEach((D) => {
          const ot = Number(D.s ?? D.state), ut = D.lu ? D.lu * 1e3 : Date.parse(D.last_updated || D.last_changed);
          if (!Number.isFinite(ot) || !ut) return;
          const ht = Ie(new Date(ut));
          T[ht] = Math.max(T[ht] || 0, ot);
        });
      }
      Cs = T, jn();
    } catch {
    }
  }
  function mi() {
    jn();
  }
  mi(), setInterval(() => {
    mi(), Ge(), Te();
  }, 10 * 60 * 1e3);
  function Ft(e) {
    const o = {}, r = {};
    he.history.forEach((R) => {
      const D = Ie(new Date(R.start));
      o[D] = (o[D] || 0) + (R.seconds || 0) / 60, r[D] = (r[D] || 0) + 1;
    });
    const p = /* @__PURE__ */ new Date(), w = Ie(p), T = [];
    for (let R = e - 1; R >= 0; R--) {
      const D = new Date(p.getFullYear(), p.getMonth(), p.getDate() - R), ot = Ie(D), ut = he.checkins.filter((gt) => gt.date === ot), ht = (gt) => {
        const Rt = ut.map(($t) => $t[gt]).filter(Boolean);
        return Rt.length ? Rt.reduce(($t, It) => $t + It, 0) / Rt.length : null;
      };
      T.push({
        key: ot,
        date: D,
        minutes: Math.round(o[ot] || 0),
        moves: r[ot] || 0,
        steps: ot === w && wa() != null ? wa() : Cs[ot] ?? null,
        mood: ht("mood"),
        energy: ht("energy")
      });
    }
    return T;
  }
  function Wn(e) {
    let o = e.length - 1;
    e[o] && !e[o].minutes && o--;
    let r = 0;
    for (; o >= 0 && e[o].minutes > 0; )
      r++, o--;
    return r;
  }
  function jn() {
    const e = i("insightCard");
    if (!e) return;
    const o = Ft(30), r = Wn(o), p = o.reduce((ut, ht) => ut + ht.minutes, 0), w = /* @__PURE__ */ new Date(), T = Ie(w), R = Ie(new Date(w.getFullYear(), w.getMonth(), w.getDate() - (w.getDay() + 6) % 7)), D = o.filter((ut) => ut.key >= R && ut.key <= T).reduce((ut, ht) => ut + ht.minutes, 0), ot = (ut, ht, gt) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ut + '</div><div><div class="activityRowName">' + Gt(ht) + '</div><div class="activityRowMeta">' + Gt(gt) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ta("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ot(Ta("clock"), "This week", D + " min") + ot(Ta("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + ot(Ta("calendar"), "30 days", p + " min") + "</div>";
  }
  const gi = {
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
  }, _d = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", $e = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, qr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Ls = 0;
  const En = (e, o) => '<path class="' + o + '" d="' + e + '"/>', Dd = (e, o) => ' style="animation-delay:-' + Math.round(e * 137 % o) + 'ms"', _n = (e, o, r, p) => {
    const w = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Dd(e, 2400) + ' d="M' + e + " " + (o - r) + "L" + (e + w) + " " + (o - w) + "L" + (e + r) + " " + o + "L" + (e + w) + " " + (o + w) + "L" + e + " " + (o + r) + "L" + (e - w) + " " + (o + w) + "L" + (e - r) + " " + o + "L" + (e - w) + " " + (o - w) + 'Z"/>';
  }, Vl = ([e, o, r], p) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + o + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Bd = (e, o) => o ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Rd = (e) => (e ? ["29.35", "43.04", "56.74"].map((o, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + o + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + o + ' 60.65)"/></g>') : [19, 26, 33].map((o, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + o + ' 38)"/></g>')).join(""), Pd = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([o, r], p) => '<circle class="wxFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + o + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Gl(e, o, r, p) {
    return e === "clear" ? o ? Vl(r ? qr.l : qr.s, p) + (r ? _n(70, 20, 5.83, 1) + _n(78.33, 41.67, 3.75, 0.8) + _n(60, 71.67, 3.33, 0.6) : _n(42, 12, 3.5, 1) + _n(47, 25, 2.25, 0.8) + _n(36, 43, 2, 0.6)) : Bd(p, r) : e === "partly" ? (o ? Vl(r ? qr.lp : qr.sp, p) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + En(r ? $e.lp : $e.sp, o ? "wxCloudLight" : "wxBright") + (o ? r ? _n(73.33, 16.67, 4.17, 0.9) : _n(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? En(r ? $e.lc : $e.s, o ? "wxCloudLight" : "wxBright") + (o ? r ? _n(15, 15, 3.75, 0.8) + _n(76.67, 13.33, 2.92, 0.6) : _n(9, 9, 2.25, 0.8) + _n(46, 8, 1.75, 0.6) : "") : En(r ? $e.lr : $e.s, "wxCloudLight") + (e === "rain" ? Rd(r) : Pd(r));
  }
  const Nd = () => {
    var e;
    return ((e = Fe == null ? void 0 : Fe["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let ja = ce().weatherStyle || "bitmap", As = ce().weatherLayout === "strip" ? "strip" : "tiles", Es = ce().weatherMotion !== !1;
  const vi = () => Es && !_a(), cr = /* @__PURE__ */ new Map(), Wr = 700, Ul = (e) => {
    const [o, r] = e.split("/");
    return { k: o === "fog" ? "cloudy" : o === "storm" ? "rain" : o, night: r === "night" };
  };
  function Mo(e, o, r, p = ja, w, T) {
    let R = _d(e);
    const D = R === "night" || (T != null ? !!T : !!r && Nd());
    R === "night" && (R = "clear");
    const ot = o ? 90 : 54, ut = bd(e, D), ht = performance.now();
    let gt = w ? cr.get(w) : null;
    if (w && !gt ? cr.set(w, gt = { key: ut, t0: -1e9 }) : gt && gt.key !== ut && (gt.fromKey = gt.key, gt.from = gt.last || null, gt.key = ut, gt.t0 = ht), p !== "smooth") return '<span class="wxIcon pixels' + (o ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ut + '"' + (w ? ' data-wx-slot="' + w + '"' : "") + ' data-wx-style="' + p + '" data-wx-size="' + ot + '"></canvas></span>';
    let Rt = "";
    if (gt && ht - gt.t0 < Wr && (vi() || _a())) {
      const $t = Ul(gt.fromKey);
      Rt = '<span class="wxLayer wxOut ' + $t.k + ($t.night ? " night" : "") + '" style="animation-delay:' + Math.round(gt.t0 - ht) + 'ms"><svg viewBox="0 0 ' + ot + " " + ot + '">' + Gl($t.k, $t.night, o, "wxg" + ++Ls) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (D ? " night" : "") + (o ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ot + " " + ot + '">' + Gl(R, D, o, "wxg" + ++Ls) + "</svg>" + Rt + "</span>";
  }
  function jr() {
    const e = i("app"), o = getComputedStyle(e), r = (D) => o.getPropertyValue(D).trim(), p = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([D, ot]) => {
      r(ot) && (p[D] = r(ot));
    });
    const w = r("--color-text-primary") || "#f1f1f1", T = r("--color-bg-card") || "#222222", R = e.classList.contains("light");
    return { colors: p, ink: R ? w : T, paper: R ? T : w };
  }
  function So(e, o = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const p = jr(), w = vi(), T = _a();
    r.forEach((R) => {
      var gt;
      const D = R.dataset.wx, ot = R.dataset.wxSlot ? cr.get(R.dataset.wxSlot) : null;
      let ut = dc(D, p.colors);
      if (ot && ot.key === D) {
        const Rt = (o - ot.t0) / Wr;
        Rt < 1 && (w || T) && (ut = vu(ot.from || dc(ot.fromKey, p.colors), ut, Math.max(0, Rt), p.colors, T)), ot.last = ut;
      }
      const ht = Sp(ut, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: p.colors, ink: p.ink, paper: p.paper, clock: o, idle: w });
      R.width !== ht.w && (R.width = ht.w), R.height !== ht.h && (R.height = ht.h), (gt = R.getContext("2d")) == null || gt.putImageData(new ImageData(ht.data, ht.w, ht.h), 0, 0);
    });
  }
  let pr = null, cl = -1;
  function pl(e) {
    if (pr = null, !x) return;
    const o = vi(), r = Math.floor(e / 100), p = [...cr.values()].some((ot) => e - ot.t0 < Wr), w = [...zr.values()].some((ot) => e - ot.t0 < ot.dur), T = rt.home.classList.contains("active"), R = za.classList.contains("open"), D = o && ja === "smooth" && (R || T && As === "strip");
    !document.hidden && (p || w || D || o && r !== cl) && (cl = r, T && (So(i("weatherCard"), e), Gr(i("weatherCard"), e)), R && (So(za, e), Gr(za, e))), (o || p || w) && (pr = requestAnimationFrame(pl));
  }
  function Co() {
    i("app").classList.toggle("wxMotion", vi()), !pr && x && (pr = requestAnimationFrame(pl));
  }
  let _s = [];
  const Xe = 36e5, Ds = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function zn() {
    const e = /* @__PURE__ */ new Date(), o = (T, R) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + T, R), r = [], p = [], w = [...Array(6)].map((T, R) => {
      const D = o(R, 6), ot = o(R, 18), ut = o(R + 1, 6), ht = _s.find((Rt) => Ie(new Date(Rt.datetime)) === Ie(D)), gt = (Rt, $t, It) => {
        const _t = r.filter((ue) => ue.t >= +Rt && ue.t < +$t);
        if (_t.length) {
          const ue = {};
          return _t.forEach((Wt) => {
            ue[Wt.c] = (ue[Wt.c] || 0) + (Ds.has(Wt.c) ? 2 : 1);
          }), Object.entries(ue).sort((Wt, fe) => fe[1] - Wt[1])[0][0];
        }
        const Et = p.find((ue) => {
          const Wt = +new Date(ue.datetime);
          return Wt >= +Rt - 3 * Xe && Wt < +$t && (ue.is_daytime == null || !!ue.is_daytime == !It);
        });
        if (Et) return Et.condition;
        const le = (ht == null ? void 0 : ht.condition) || "cloudy";
        return It && le === "sunny" ? "clear-night" : le;
      };
      return { start: +D, end: +ut, day: gt(D, ot, !1), night: gt(ot, ut, !0), hi: Number(ht == null ? void 0 : ht.temperature), lo: Number(ht == null ? void 0 : ht.templow) };
    });
    return { days: w, hours: r, start: w[0].start, end: w[5].end };
  }
  const Yl = (e, o) => {
    const r = e.days.findIndex((w) => o < w.end);
    if (r < 0) return 1;
    const p = e.days[r];
    return Math.max(0, (r + (o - p.start) / (p.end - p.start)) / 6);
  }, Id = (e, o) => {
    const r = Math.max(0, Math.min(0.99999, o)) * 6, p = Math.floor(r), w = e.days[p];
    return w.start + (r - p) * (w.end - w.start);
  };
  function Bs(e, o) {
    const r = Math.max(0, e.days.findIndex((ot) => o < ot.end)), p = e.days[r], w = (o - p.start) / (p.end - p.start) >= 0.5;
    let T = w ? p.night : p.day, R = NaN;
    const D = e.hours;
    if (D.length && o >= D[0].t - Xe && o <= D[D.length - 1].t + Xe) {
      let ot = D.findIndex((gt) => gt.t > o);
      ot < 0 && (ot = D.length);
      const ut = D[Math.max(0, ot - 1)], ht = D[Math.min(D.length - 1, ot)];
      T = ut.c || T, R = ht.t > ut.t ? ut.temp + (ht.temp - ut.temp) * Math.max(0, Math.min(1, (o - ut.t) / (ht.t - ut.t))) : ut.temp;
    }
    if (!Number.isFinite(R)) {
      const ot = [];
      if (e.days.forEach((ut) => {
        Number.isFinite(ut.lo) && ot.push([ut.start - Xe, ut.lo]), Number.isFinite(ut.hi) && ot.push([ut.start + 9 * Xe, ut.hi]);
      }), ot.length) {
        R = o <= ot[0][0] ? ot[0][1] : ot[ot.length - 1][1];
        for (let ut = 1; ut < ot.length; ut++) if (o <= ot[ut][0] && o > ot[ut - 1][0]) {
          const [ht, gt] = ot[ut - 1], [Rt, $t] = ot[ut];
          R = gt + ($t - gt) * (1 - Math.cos(Math.PI * (o - ht) / (Rt - ht))) / 2;
          break;
        }
      }
    }
    return { cond: w && T === "sunny" ? "clear-night" : T, temp: R, night: w, day: p };
  }
  const Rs = (e) => Ie(new Date(e)) === Ie(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), zr = /* @__PURE__ */ new Map(), Hd = 900, Fd = 700;
  let Vr = null;
  const Dn = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((o) => {
    Gr(o.target.parentElement), o.target.closest("#wxDialog") && Yr();
  })) : null;
  function Gr(e, o = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const p = zn(), w = p.days.flatMap((gt) => [{ cond: gt.day, night: !1 }, { cond: gt.night, night: !0 }]), T = w.map((gt) => gt.cond).join(), R = jr(), D = vi(), ot = _a(), ut = Number(Ie(new Date(p.start)).replace(/\D/g, "")) % 9973;
    let ht = !1;
    r.forEach((gt) => {
      var ue;
      const Rt = gt.clientWidth, $t = gt.clientHeight;
      if (!Rt || !$t) return;
      const It = gt.dataset.wxStrip;
      let _t = zr.get(It);
      _t ? _t.sig !== T && (_t.prev = _t.segs, _t.sig = T, _t.segs = w, _t.t0 = o, _t.dur = Fd) : zr.set(It, _t = { sig: T, segs: w, prev: null, t0: o, dur: Hd });
      const Et = D || ot ? Math.min(1, Math.max(0, (o - _t.t0) / _t.dur)) : 1;
      Et < 1 && (ht = !0);
      const le = { width: Rt, height: $t, colors: R.colors, clock: o, ambient: D, seed: ut, reveal: ot ? Et : 1 - Math.pow(1 - Et, 3), prev: Et < 1 ? _t.prev : null, reduce: ot };
      if (ja === "smooth") {
        const Wt = Math.min(2, window.devicePixelRatio || 1), fe = Math.round(Rt * Wt), Le = Math.round($t * Wt);
        gt.width !== fe && (gt.width = fe), gt.height !== Le && (gt.height = Le);
        const ne = gt.getContext("2d");
        if (!ne) return;
        ne.setTransform(Wt, 0, 0, Wt, 0, 0), Bu(ne, w, le);
      } else {
        const Wt = Du(w, { ...le, px: 2, oneBit: ja === "onebit", ink: R.ink, paper: R.paper });
        gt.width !== Wt.w && (gt.width = Wt.w), gt.height !== Wt.h && (gt.height = Wt.h), (ue = gt.getContext("2d")) == null || ue.putImageData(new ImageData(Wt.data, Wt.w, Wt.h), 0, 0);
      }
    }), ht && Co();
  }
  function ul() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const o = Ka.weather, r = o && (Fe == null ? void 0 : Fe[o]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Mo("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (o ? "Not available" : "Set up in Settings") + "</div></div></div></div>", So(e);
      return;
    }
    const p = r.attributes || {}, w = p.temperature_unit || "°", T = (ne) => Number.isFinite(Number(ne)) ? Math.round(Number(ne)) + "°" : "—", R = (p.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", D = gi[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), ot = Ie(/* @__PURE__ */ new Date()), ut = _s.slice(0, 7), ht = ut.find((ne) => Ie(new Date(ne.datetime)) === ot) || null, gt = ut.filter((ne) => Ie(new Date(ne.datetime)) >= ot).slice(0, 6), Rt = /* @__PURE__ */ new Date(), $t = Ie(new Date(Rt.getFullYear(), Rt.getMonth(), Rt.getDate() + 1)), It = ht ? "H " + T(ht.temperature) + "&ensp; L " + T(ht.templow) : "", _t = (ne) => {
      const ee = Ie(new Date(ne.datetime));
      return ee === ot ? "Today" : ee === $t ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ne.datetime));
    }, Et = Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : "—", le = (ne) => {
      const ee = new Date(ne.datetime);
      return Math.round((new Date(ee.getFullYear(), ee.getMonth(), ee.getDate()) - new Date(Rt.getFullYear(), Rt.getMonth(), Rt.getDate())) / 864e5);
    }, ue = (ne) => (gi[ne] || ne || "").toLowerCase(), Wt = (ne, ee) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + le(ne) + '" aria-label="' + Gt(_t(ne) + ": " + ue(ne.condition) + ", " + T(ne.temperature) + " / " + T(ne.templow) + ". Open the forecast") + '">' + Mo(ne.condition, !1, !1, ja, "day" + ee) + '<div><div class="activityRowName">' + Gt(_t(ne)) + '</div><div class="activityRowMeta">' + T(ne.temperature) + " / " + T(ne.templow) + "</div></div></div>", fe = () => '<div class="wxStrip"><div class="wxStripDays">' + zn().days.map((ee, fa) => {
      const je = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ee.start)) + ": " + ue(ee.day) + (ue(ee.day) === ue(ee.night) ? " all day and night" : ", then " + ue(ee.night) + " overnight") + (Number.isFinite(ee.hi) ? ". High " + T(ee.hi) : "") + (Number.isFinite(ee.lo) ? ", low " + T(ee.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + fa + '" aria-label="' + Gt(je) + '"><span class="wxDayName">' + Gt(Rs(ee.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(ee.hi) + '</span><span class="wxLow">' + T(ee.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Gt("Now in " + R + ": " + Et + "°, " + ue(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Mo(r.state, !0, !0, ja, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(Et)) + '</span><span class="wxUnit">' + Gt(w) + '</span></div><div class="wxPlace">' + Gt(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(D) + "</div>" + (It ? '<div class="wxRange">' + It + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (gt.length ? As === "strip" ? fe() : '<div class="activityRows wxDays">' + gt.map(Wt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", So(e);
    const Le = e.querySelector("canvas[data-wx-strip]");
    Vr && Vr !== Le && (Dn == null || Dn.unobserve(Vr)), Vr = Le, Le && (Dn == null || Dn.observe(Le), Gr(e)), Co(), fl();
  }
  const Zl = i("weatherCard"), Ur = (e) => {
    const o = e.closest("[data-wx-day]");
    if (o) {
      const p = /* @__PURE__ */ new Date();
      Kl(+new Date(p.getFullYear(), p.getMonth(), p.getDate() + Number(o.dataset.wxDay), 12), o);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && Kl(Date.now(), r);
  };
  Zl.addEventListener("click", (e) => Ur(e.target)), Zl.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Ur(e.target));
  });
  const za = i("wxDialog"), Go = i("wxGraph"), ur = i("wxGraphWrap");
  let $a = Date.now(), To = null, bi = !1, fr = null;
  function Kl(e, o) {
    const r = zn();
    To = o || null, $a = Math.max(r.start, Math.min(r.end - Xe, e)), zr.delete("dialog"), cr.delete("scrub"), za.classList.add("open"), za.setAttribute("aria-hidden", "false"), fl(), Dn == null || Dn.observe(za.querySelector("canvas[data-wx-strip]")), Go.focus({ preventScroll: !0 }), Co();
  }
  function Ps() {
    var e;
    za.classList.remove("open"), za.setAttribute("aria-hidden", "true"), Dn == null || Dn.unobserve(za.querySelector("canvas[data-wx-strip]")), (e = To == null ? void 0 : To.focus) == null || e.call(To, { preventScroll: !0 }), To = null;
  }
  function fl() {
    if (!za.classList.contains("open")) return;
    const e = zn();
    i("wxGraphDays").innerHTML = e.days.map((o) => "<span>" + Gt(Rs(o.start)) + "</span>").join(""), Yr(e), hr(e), Gr(za);
  }
  function hr(e = zn()) {
    const o = Bs(e, $a), r = Fe == null ? void 0 : Fe[Ka.weather], p = (r == null ? void 0 : r.attributes) || {}, w = p.temperature_unit || "°", T = Math.abs($a - Date.now()) < Xe / 2, R = T && r ? r.state : o.cond, D = T && Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : Number.isFinite(o.temp) ? Math.round(o.temp) : "—", ot = gi[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), ut = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round($a / Xe) * Xe)), ht = o.day, gt = (Number.isFinite(ht.hi) ? "H " + Math.round(ht.hi) + "°" : "") + (Number.isFinite(ht.lo) ? "&ensp; L " + Math.round(ht.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Mo(R, !0, T, ja, "scrub", T ? void 0 : o.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(D)) + '</span><span class="wxUnit">' + Gt(w) + '</span></div><div class="wxPlace">' + Gt(ut) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(ot) + "</div>" + (gt ? '<div class="wxRange">' + gt + "</div>" : "") + "</div>", So(i("wxDialogNow")), Go.setAttribute("aria-valuenow", String(Math.round(($a - e.start) / Xe))), Go.setAttribute("aria-valuetext", ut + ", " + ot.toLowerCase() + ", " + D + "°"), wi(e), Co();
  }
  function Yr(e = zn()) {
    const o = i("wxGraphLine"), r = ur.clientWidth, p = ur.clientHeight;
    if (!r || !p) return;
    const w = [];
    for (let Et = e.start; Et <= e.end; Et += Xe) {
      const le = Bs(e, Et).temp;
      Number.isFinite(le) && w.push([Yl(e, Et) * r, le]);
    }
    if (o.setAttribute("viewBox", "0 0 " + r + " " + p), w.length < 2) {
      o.innerHTML = '<g id="wxCursorMark"></g>', fr = null, wi(e);
      return;
    }
    const T = w.map((Et) => Et[1]), R = Math.min(...T), D = Math.max(...T), ot = Math.max(4, D - R), ut = ja !== "smooth", ht = (Et) => ut ? Math.round(Et / 2) * 2 : Math.round(Et * 10) / 10;
    fr = (Et) => p * 0.84 - (Et - R) / ot * p * 0.62;
    const gt = jr(), Rt = ja === "onebit" ? gt.paper : "#ffffff", $t = ja === "onebit" ? gt.ink : "rgba(0,0,0,.28)", It = "M" + w.map((Et) => ht(Et[0]) + " " + ht(fr(Et[1]))).join(" L"), _t = (Et, le) => {
      const ue = w.find((Wt) => Wt[1] === Et);
      return '<text class="wxLineLabel" x="' + ht(Math.min(r - 14, Math.max(14, ue[0]))) + '" y="' + ht(fr(Et) + (le ? 18 : -10)) + '" fill="' + Rt + '" stroke="' + $t + '">' + Math.round(Et) + "°</text>";
    };
    o.setAttribute("shape-rendering", ut ? "crispEdges" : "auto"), o.innerHTML = '<path d="' + It + '" fill="none" stroke="' + $t + '" stroke-width="' + (ut ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + It + '" fill="none" stroke="' + Rt + '" stroke-width="2" stroke-linejoin="round"/>' + _t(D, !1) + _t(R, !0) + '<g id="wxCursorMark"></g>', wi(e);
  }
  function wi(e = zn()) {
    const o = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!o) return;
    const r = ur.clientWidth, p = ur.clientHeight, w = ja !== "smooth", T = (Rt) => w ? Math.round(Rt / 2) * 2 : Rt, R = T(Yl(e, $a) * r), D = Bs(e, $a).temp, ot = jr(), ut = ja === "onebit" ? ot.paper : "#ffffff", ht = ja === "onebit" ? ot.ink : "rgba(0,0,0,.28)", gt = fr && Number.isFinite(D) ? T(fr(D)) : null;
    o.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + p + '" fill="' + ht + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + p + '" fill="' + ut + '"/>' + (gt == null ? "" : w ? '<rect x="' + (R - 5) + '" y="' + (gt - 5) + '" width="10" height="10" fill="' + ut + '" stroke="' + ht + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + gt + '" r="6" fill="' + ut + '" stroke="' + ht + '" stroke-width="2"/>');
  }
  const hl = (e) => {
    const o = ur.getBoundingClientRect();
    o.width && ($a = Id(zn(), (e - o.left) / o.width), hr());
  };
  Go.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      bi = !0;
      try {
        Go.setPointerCapture(e.pointerId);
      } catch {
      }
      hl(e.clientX);
    }
  }), Go.addEventListener("pointermove", (e) => {
    bi && hl(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Go.addEventListener(e, () => {
    bi = !1;
  })), Go.addEventListener("keydown", (e) => {
    const o = zn(), r = { ArrowLeft: -Xe, ArrowRight: Xe, ArrowDown: -Xe, ArrowUp: Xe, PageUp: -24 * Xe, PageDown: 24 * Xe }[e.key];
    r ? (e.preventDefault(), $a = Math.max(o.start, Math.min(o.end - Xe, Math.round($a / Xe) * Xe + r)), hr(o)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), $a = e.key === "Home" ? o.start : o.end - Xe, hr(o));
  }), i("wxDialogClose").addEventListener("click", Ps), za.addEventListener("click", (e) => {
    e.target === za && Ps();
  }), za.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ps());
  }), ul(), (pt = (dt = window.matchMedia) == null ? void 0 : ($ = dt.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || pt.call($, "change", () => {
    Co(), So(n);
  }), Co();
  const ml = i("tvNav");
  l.fullscreenSupported || (ml.hidden = !0), ml.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !rt.workout.classList.contains("active") || Vi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Br.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const o = Math.max(1, Math.min(10, (Number(oe.value) || 1) + Number(e.dataset.roundsStep)));
    String(o) !== oe.value && (oe.value = o, oe.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [P, B, W, oe].forEach((e) => e.addEventListener("input", () => {
    const o = Qt[Kt];
    o && (o.total = Number(P.value), o.work = Number(B.value), o.rest = Number(W.value)), Me();
  })), at.addEventListener("click", el), qt.addEventListener("click", () => L("settings")), i("settingsBack").addEventListener("click", el), Br.addEventListener("click", () => bo(!an)), da(Kt), He(), Ge(), jn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), nr(i("resetStats"), i("resetStatsFill"), 1500, () => {
    he.history = [], he.checkins = [], Zt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    en(), mi(), Ge(), He(), jn(), Te(), pe("Stats reset");
  });
  const Ns = i("morningTime"), Is = i("eveningTime"), t = i("checkinAutoOpen");
  Ns.value = On().morning, Is.value = On().evening, t.classList.toggle("on", ce().checkinAutoOpen !== !1), [["morningTime", Ns], ["eveningTime", Is]].forEach(([e, o]) => o.addEventListener("change", () => {
    o.value && (un(e, o.value), Te());
  })), t.addEventListener("click", () => {
    const e = ce().checkinAutoOpen === !1;
    t.classList.toggle("on", e), un("checkinAutoOpen", e);
  }), setTimeout(Ht, 800);
  const a = i("checkinNotify"), s = i("checkinNotifyTarget"), d = i("checkinNotifyStatus"), f = d.textContent;
  function v() {
    const e = l.notifyServices(), o = e.filter((w) => w.startsWith("mobile_app_")), r = o.length ? o : e, p = (w) => w.replace(/^mobile_app_/, "").replace(/_/g, " ");
    s.innerHTML = r.map((w) => '<option value="' + Gt(w) + '">' + Gt(p(w)) + "</option>").join(""), !ce().notifyTarget && r[0] && (ce().notifyTarget = r[0]), s.value = ce().notifyTarget || "";
  }
  function h() {
    const e = !!ce().notifyOn;
    a.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const o = On();
    d.textContent = e ? "Sends at " + o.morning + " and " + o.evening : f;
  }
  async function b() {
    const e = !!ce().notifyOn;
    try {
      return await l.setReminderAutomation(e ? { target: ce().notifyTarget, times: On() } : null), !0;
    } catch {
      return pe("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  a.addEventListener("click", async () => {
    const e = !ce().notifyOn;
    if (e && (v(), !ce().notifyTarget)) {
      pe("Install the Companion app on your phone first");
      return;
    }
    ce().notifyOn = e, h(), await b() ? (en(), pe(e ? "Check-in notifications on" : "Check-in notifications off")) : (ce().notifyOn = !e, h());
  }), s.addEventListener("change", () => {
    un("notifyTarget", s.value), ce().notifyOn && b();
  }), [Ns, Is].forEach((e) => e.addEventListener("change", () => {
    h(), ce().notifyOn && b();
  })), v(), h();
  let M = null;
  function H() {
    M || (M = setTimeout(() => {
      M = null, jn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, p;
      const o = !Fe || Fe[Ka.weather] !== e[Ka.weather] || ((r = Fe["sun.sun"]) == null ? void 0 : r.state) !== ((p = e["sun.sun"]) == null ? void 0 : p.state);
      Fe = e, Ts(e), jl(e), o && ul(), Date.now() - hi > 60 * 60 * 1e3 && zl(), H();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (he.history = e.history, mi()), Array.isArray(e.history) && jn(), Array.isArray(e.checkins) && (he.checkins = e.checkins.map(Mr), Te(), He(), Ge(), mi(), jn()), e.profiles && !qa.classList.contains("open") && !dn)) {
        const o = kr(e);
        Object.keys(Qt).forEach((r) => delete Qt[r]), Object.assign(Qt, o.profiles), he.order = o.order, Qt[Kt] || (Kt = he.order[0]), Gn(), da(Kt);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, Ki || (Ki = requestAnimationFrame(cs)), $i || ($i = requestAnimationFrame(ps)), Co(), ir(n.querySelector(".tab.active"), !1));
    }
  };
}
const Nu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Iu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Zr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ma = "made_up_", Uo = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Ma);
}, Ql = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function vc(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Hu(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let c = +l; c < +n; c += 10 * 60 * 1e3) i += vc(new Date(c)) / 6;
  return i;
}
function Mc(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const c = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([c, vc(new Date(c))]);
  }
  return l;
}
function Fu({ onChange: n }) {
  const l = {}, i = {}, c = (K, j, ft, mt) => {
    l[K] = { entity_id: K, state: ft, attributes: mt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[K] = j;
  }, m = (K, j, ft) => {
    const mt = l[K], bt = j ?? mt.state;
    l[K] = { ...mt, state: bt, attributes: { ...mt.attributes, ...ft }, last_changed: bt === mt.state ? mt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (K, j, ft, mt) => c("binary_sensor." + Ma + (K ? K + "_" : "") + Ql(j), K, mt ? "on" : "off", { friendly_name: j, device_class: ft });
  Object.entries(Iu).forEach(([K, j]) => {
    if (j.temperature != null && c("sensor." + Ma + K + "_temperature", K, String(j.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), j.humidity != null && c("sensor." + Ma + K + "_humidity", K, String(j.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), j.vacuum && c("vacuum." + Ma + "robot", K, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), j.climate && c("climate." + Ma + K, K, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: j.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), j.cover) {
      const [ft, mt, bt, nt] = j.cover;
      c("cover." + Ma + K + "_" + Ql(ft), K, bt ? "open" : "closed", { friendly_name: ft, device_class: mt, current_position: bt, ...nt != null ? { current_tilt_position: nt } : {} });
    }
    if (j.humidifier && c("humidifier." + Ma + K, K, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: j.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), j.solar && (c("sensor." + Ma + K + "_solar_power", K, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + Ma + K + "_solar_today", K, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), j.valve && c("valve." + Ma + K + "_" + Ql(j.valve), K, "closed", { friendly_name: j.valve, device_class: "water" }), j.door && x(K, j.door, "door", j.doorOpen), j.window && x(K, j.window, "window", !1), j.motion && x(K, j.motion, "motion", !1), j.plant) {
      const [ft, mt, bt, nt, Q] = j.plant, E = Ma + Ql(ft), Z = (tt, rt, at, qt, L) => c("sensor." + E + "_" + tt, K, String(at), { friendly_name: rt, device_class: L, state_class: "measurement", unit_of_measurement: qt, plant_low: at < Zr[tt][0], plant_high: at > Zr[tt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[tt] });
      Z("moisture", "Moisture", mt, "%", "moisture"), Z("light", "Light", bt, "lx", "illuminance"), Z("temperature", "Temperature", nt, "°C", "temperature"), Z("fertility", "Fertility", Q, "µS/cm", "conductivity");
      const Mt = Object.entries({ moisture: mt, light: bt, temperature: nt, fertility: Q }).filter(([tt, rt]) => rt < Zr[tt][0] || rt > Zr[tt][1]).map(([tt, rt]) => tt + (rt < Zr[tt][0] ? " low" : " high"));
      c("plant." + E, K, Mt.length ? "problem" : "ok", { friendly_name: ft, moisture: mt, brightness: bt, temperature: nt, conductivity: Q, problem: Mt.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + Ma + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), c("sensor." + Ma + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, A = {};
  let S = null;
  function _() {
    const K = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((j) => {
      j.endsWith("_solar_power") && (l[j] = { ...l[j], state: vc(K).toFixed(2) }), j.endsWith("_solar_today") && (l[j] = { ...l[j], state: Hu(K).toFixed(1) });
    });
  }
  _();
  let z = 0;
  function F() {
    let K = !1;
    const j = ++z % 10 === 0, ft = (nt, Q, E) => {
      m(nt, Q, E), K = !0;
    };
    Object.entries(k).forEach(([nt, Q]) => {
      const E = l[nt].attributes.current_position, Z = E < Q ? Math.min(Q, E + 10) : Math.max(Q, E - 10);
      Z === Q && delete k[nt], ft(nt, Z === Q ? Z === 0 ? "closed" : "open" : Q > E ? "opening" : "closing", { current_position: Z });
    }), Object.entries(A).forEach(([nt, Q]) => {
      const E = l[nt].attributes.current_tilt_position, Z = E < Q ? Math.min(Q, E + 25) : Math.max(Q, E - 25);
      Z === Q && delete A[nt], ft(nt, null, { current_tilt_position: Z });
    }), Object.keys(l).filter((nt) => nt.startsWith("climate.")).forEach((nt) => {
      const Q = l[nt], E = Q.attributes, Z = E.current_temperature, Mt = (Q.state === "heat" || Q.state === "auto") && Z < E.temperature - 0.05, tt = (Q.state === "cool" || Q.state === "auto") && Z > E.temperature + 0.05, rt = Q.state === "off" ? "off" : Mt ? "heating" : tt ? "cooling" : "idle", at = j ? Math.round((Z + (Mt ? 0.1 : tt ? -0.1 : 0)) * 10) / 10 : Z;
      (at !== Z || rt !== E.hvac_action) && ft(nt, null, { current_temperature: at, hvac_action: rt });
    }), Object.keys(l).filter((nt) => nt.startsWith("humidifier.")).forEach((nt) => {
      const Q = l[nt], E = Q.attributes, Z = E.current_humidity, Mt = Q.state === "on" && Z < E.humidity, tt = Mt && j ? Z + 1 : Z, rt = Q.state !== "on" ? "off" : Mt ? "humidifying" : "idle";
      if (tt !== Z || rt !== E.action) {
        ft(nt, null, { current_humidity: tt, action: rt });
        const at = "sensor." + Ma + i[nt] + "_humidity";
        l[at] && ft(at, String(tt));
      }
    });
    const mt = l["vacuum." + Ma + "robot"], bt = mt.attributes;
    mt.state === "cleaning" && j && ft(mt.entity_id, null, { battery_level: Math.max(5, bt.battery_level - 1) }), mt.state === "returning" && ft(mt.entity_id, "docked", {}), mt.state === "docked" && bt.battery_level < 100 && ft(mt.entity_id, null, { battery_level: Math.min(100, bt.battery_level + 2) }), S && Date.now() - S.at > 5e3 && (ft("alarm_control_panel." + Ma + "house", "armed_" + S.mode, {}), S = null), K && n();
  }
  const q = setInterval(F, 1e3), G = setInterval(() => {
    _(), n();
  }, 60 * 1e3);
  function st(K, j, ft) {
    const mt = ft == null ? void 0 : ft.entity_id;
    if (!l[mt]) return !1;
    const bt = l[mt], nt = bt.attributes, Q = (E, Z) => m(mt, E, Z);
    if (K === "climate" && (j === "set_temperature" && Q(null, { temperature: Math.max(nt.min_temp, Math.min(nt.max_temp, ft.temperature)) }), j === "set_hvac_mode" && Q(ft.hvac_mode, ft.hvac_mode === "off" ? { hvac_action: "off" } : {}), j === "toggle" && Q(bt.state === "off" ? "heat" : "off", bt.state === "off" ? {} : { hvac_action: "off" })), K === "cover") {
      const E = j === "open_cover" ? 100 : j === "close_cover" ? 0 : j === "set_cover_position" ? ft.position : j === "toggle" ? nt.current_position > 0 ? 0 : 100 : null;
      j === "stop_cover" && (delete k[mt], delete A[mt], Q(nt.current_position === 0 ? "closed" : "open")), E != null && E !== nt.current_position && (k[mt] = E, Q(E > nt.current_position ? "opening" : "closing"));
      const Z = j === "open_cover_tilt" ? 100 : j === "close_cover_tilt" ? 0 : j === "set_cover_tilt_position" ? ft.tilt_position : null;
      j === "stop_cover_tilt" && delete A[mt], Z != null && nt.current_tilt_position != null && Z !== nt.current_tilt_position && (A[mt] = Z);
    }
    if (K === "humidifier" && (j === "set_humidity" && Q(null, { humidity: Math.max(nt.min_humidity, Math.min(nt.max_humidity, ft.humidity)) }), j === "set_mode" && Q(null, { mode: ft.mode }), j === "turn_on" || j === "turn_off" || j === "toggle")) {
      const E = j === "turn_on" || j === "toggle" && bt.state !== "on";
      Q(E ? "on" : "off", { action: E ? "idle" : "off" });
    }
    if (K === "vacuum" && (j === "start" && Q("cleaning", { rooms: ft.rooms || nt.rooms }), j === "pause" && Q("paused"), j === "return_to_base" && Q("returning", { rooms: [] }), j === "locate" && Q(null, { located: Date.now() }), j === "set_rooms" && Q(null, { rooms: ft.rooms })), K === "valve") {
      const E = j === "open_valve" || j === "toggle" && bt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(j) && Q(E ? "open" : "closed");
    }
    if (K === "alarm_control_panel") {
      j === "alarm_disarm" && (S = null, Q("disarmed", { changed_by: "Matt" }));
      const E = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[j];
      E && (S = { mode: E, at: Date.now() }, Q("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function et(K) {
    const j = (K == null ? void 0 : K.states) || {}, ft = (K == null ? void 0 : K.entities) || {}, mt = (K == null ? void 0 : K.devices) || {}, bt = (B) => {
      var yt;
      const W = ft[B];
      return W && (W.area_id || W.device_id && ((yt = mt[W.device_id]) == null ? void 0 : yt.area_id)) || null;
    }, nt = (B) => {
      const W = ft[B];
      return j[B] && j[B].state !== "unavailable" && !(W != null && W.hidden) && !(W != null && W.entity_category);
    }, Q = {};
    Object.keys(j).forEach((B) => {
      const W = bt(B);
      W && nt(B) && (Q[W] || (Q[W] = [])).push(B);
    });
    const E = { ...j, ...l }, Z = (B) => {
      var W, yt;
      return (yt = (W = E[B]) == null ? void 0 : W.attributes) == null ? void 0 : yt.device_class;
    }, Mt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], tt = Object.keys(j).filter((B) => B.startsWith("vacuum.") && nt(B)), rt = Object.values((K == null ? void 0 : K.areas) || {}).filter((B) => !Nu.has(B.area_id)).map((B) => {
      const W = B.area_id, yt = Q[W] || [], wt = (Pt) => yt.filter((de) => de.startsWith(Pt + ".")), X = (Pt) => wt("sensor").filter((de) => Z(de) === Pt), kt = (Pt) => Object.keys(l).filter((de) => i[de] === W && Pt(de)), St = (Pt, de) => Pt.length ? Pt : kt(de), Xt = St(X("temperature"), (Pt) => Pt.endsWith(W + "_temperature")), oe = St(X("humidity"), (Pt) => Pt.endsWith(W + "_humidity")), na = X("power").filter((Pt) => /^(W|kW)$/.test(E[Pt].attributes.unit_of_measurement || "")), xe = wt("binary_sensor").filter((Pt) => Z(Pt) === "moisture"), Ai = St(wt("plant"), (Pt) => Pt.startsWith("plant.")).map((Pt) => ({ id: Pt, readings: kt((de) => de.startsWith("sensor." + Pt.split(".")[1] + "_")) })), Sa = [...wt("binary_sensor").filter((Pt) => Mt.includes(Z(Pt))), ...kt((Pt) => Pt.startsWith("binary_sensor."))];
      return {
        id: W,
        name: B.name,
        icon: B.icon,
        readings: [...Xt.slice(0, 1), ...oe.slice(0, 1), ...xe],
        power: na.length ? na.reduce((Pt, de) => Pt + Number(E[de].state) * (E[de].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: wt("switch"),
        lights: wt("light"),
        actions: [...wt("light"), ...St(wt("climate"), (Pt) => Pt.startsWith("climate.")), ...St(wt("cover"), (Pt) => Pt.startsWith("cover.")), ...St(wt("humidifier"), (Pt) => Pt.startsWith("humidifier.")), ...St(wt("valve"), (Pt) => Pt.startsWith("valve.")), ...wt("media_player"), ...wt("vacuum"), ...tt.length ? [] : kt((Pt) => Pt.startsWith("vacuum."))],
        solar: kt((Pt) => Pt.includes("_solar_")),
        plants: Ai,
        openings: Sa,
        alerts: [...xe, ...Sa].filter((Pt) => {
          var de;
          return ((de = E[Pt]) == null ? void 0 : de.state) === "on";
        })
      };
    }).filter((B) => B.readings.length || B.plugs.length || B.actions.length || B.solar.length || B.plants.length), at = Object.keys(j).find((B) => /^sensor\..*(p1_meter_power|grid_power)$/.test(B) && j[B].state !== "unavailable") || null, qt = (B) => Object.keys(j).filter((W) => W.startsWith(B + ".") && nt(W)), L = qt("alarm_control_panel"), P = tt.length ? tt : ["vacuum." + Ma + "robot"];
    return {
      states: E,
      rooms: rt,
      grid: at,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (B) => l[B] ? i[B] : bt(B),
      vacuums: P,
      homeVacuums: P.filter((B) => !rt.some((W) => W.actions.includes(B))),
      security: {
        alarms: L.length ? L : ["alarm_control_panel." + Ma + "house"],
        locks: qt("lock"),
        openings: [...Object.keys(l).filter((B) => B.startsWith("binary_sensor.")), "sensor." + Ma + "doorbell"]
      }
    };
  }
  return { model: et, call: st, stop() {
    clearInterval(q), clearInterval(G);
  } };
}
const Ci = (n) => n < 0 ? 0 : n > 1 ? 1 : n, cc = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, Ou = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Sc = {}, io = (n, l, i) => {
  const c = n + l + i;
  return Sc[c] || (Sc[c] = Ou(cc(n).map((m, x) => m + (cc(l)[x] - m) * i)));
}, Cc = {}, cd = (n) => Cc[n] || (Cc[n] = cc(n));
function qu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [io(l.clear[0], l.cloudy[0], 0.12), io(l.clear[1], l.cloudy[1], 0.12)], l.storm = [io(l.rain[0], "#000000", 0.22), io(l.rain[1], "#000000", 0.22)], l;
}
const Wu = [
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
], Mi = (n, l) => (Wu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Ap = 1, Ep = 2, _p = 3, Dp = 4, js = 5, hd = 6, pc = 7, Bp = 8, Tc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), ju = (n, l, i) => {
  let c = !1;
  for (let m = 0, x = n.length - 1; m < n.length; x = m++) {
    const k = n[m], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (c = !c);
  }
  return c;
};
function zu(n, l, i, c, { oneBit: m, ink: x, paper: k, snowInk: A }) {
  const S = new Uint8ClampedArray(i * c * 4), _ = cd(x), z = cd(k);
  for (let F = 0; F < c; F++) for (let q = 0; q < i; q++) {
    const G = F * i + q, st = l[G];
    if (n[G] == null) continue;
    let et = cd(n[G]);
    if (m) {
      let K;
      st === Dp || st === Bp ? K = !0 : st === js ? K = A : st === pc || st === hd ? K = !1 : K = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= Mi(q, F), (st === Ap || st === Ep || st === _p || st === hd) && (q > 0 && l[G - 1] !== st || q < i - 1 && l[G + 1] !== st || F > 0 && l[G - i] !== st || F < c - 1 && l[G + i] !== st) && (K = !0), et = K ? _ : z;
    }
    S[G * 4] = et[0], S[G * 4 + 1] = et[1], S[G * 4 + 2] = et[2], S[G * 4 + 3] = 255;
  }
  return { w: i, h: c, data: S };
}
const Vu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Gu = (n) => bd(n, !1).split("/")[0], Wd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Uu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Yu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Zu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ku = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", $u = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Xu = [".##", "##.", ".#.", "#.."];
function Rp(n, { width: l, height: i, colors: c, wave: m = 0.38, soft: x = 6, glow: k = 0.6, columns: A = 6 }) {
  const S = { ...yn, dawn: "#e5a77e", ...c }, _ = qu(S), z = l, F = i, q = z / A, G = q / 2, st = Math.PI * 2, et = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(A * 2)].map((bt, nt) => {
    const Q = et[Math.min(nt, et.length - 1)], E = Gu(Q.cond), Z = nt % 2 === 1;
    return { cond: Q.cond, k: E, night: Z, sky: _[E][Z ? 1 : 0], cover: Vu[E] };
  }), j = (bt) => F * (0.5 - m * Math.cos(st * (bt / q - 0.25)));
  return { C: S, S: K, W: z, H: F, cw: q, sw: G, TAU: st, yb: j, side: (bt, nt, Q) => {
    const E = (bt ? j(nt) - Q : Q - j(nt)) / Math.max(3, x * 1.4) + 0.5;
    return E <= 0 ? 0 : E >= 1 ? 1 : E;
  }, glowAt: (bt) => {
    const nt = ((bt / q - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(A - 1, Math.round(bt / q - 0.25))), E = Math.max(0, Math.min(A - 1, Math.round(bt / q - 0.75))), Z = 1 - (K[2 * Q].cover + K[2 * E + 1].cover) / 2, Mt = Math.sin(Math.PI * Math.min(1, Math.max(0, j(bt) / F)));
    return { c: nt < 0.5 ? S.dusk : S.dawn, a: k * (0.2 + 0.8 * Z) * Mt * Mt };
  }, soft: x, tw: q * 0.3, sy: F / 90 };
}
function Pp(n, { clock: l = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: m, sw: x, side: k, C: A, TAU: S, sy: _, H: z } = n, F = l, q = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((et, K) => {
    const j = Wd(c * 977 + K * 131 + 7), ft = (K + 0.5) * x, mt = et.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[et.k] : 0;
    for (let bt = 0; bt < mt; bt++) {
      const nt = ft + (j() - 0.5) * x * 1.6, Q = (6 + j() * 76) * _, E = j() < 0.35, Z = 1.8 + j() * 1.6, Mt = k(!0, nt, Q) * (E ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * F / 2600 + bt * 1.7 + K) : 1);
      Mt >= 0.03 && q.stars.push({ x: nt, y: Q, big: E, size: Z, o: Mt });
    }
    if (!et.night && (et.k === "clear" || et.k === "partly")) {
      const bt = ft + (j() - 0.5) * x * 0.3, nt = Math.min(15, x * 0.29);
      q.suns.push({ x: bt, y: 32 * _, rad: nt, halo: nt * 2.8 * (i ? 1 + 0.07 * Math.sin(S * F / 3600 + K) : 1) });
    }
    if (et.night && (et.k === "clear" || et.k === "partly")) {
      const bt = Math.min(0.78, x * 0.55 / 34), nt = ft - 23 * bt + (j() - 0.5) * x * 0.2;
      q.moons.push({ x: nt + 23 * bt, y: (4 + (i ? 0.8 * Math.sin(S * F / 5200 + K) : 0)) * _ + 23 * bt, d: 46 * bt });
    }
  });
  const G = Math.max(56, Math.min(100, z * 0.45)), st = Math.max(1, x / (G * 2.4));
  return m.forEach((et, K) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[et.k];
    if (!j) return;
    const ft = et.k === "partly" ? 1 : Math.round(j * st), mt = Wd(c * 577 + K * 71 + 3), bt = (K + 0.5) * x, nt = et.k === "rain" || et.k === "storm" || et.night ? A.cloudNight : A.cloudDay, Q = et.night ? 0.82 : et.k === "storm" ? 0.75 : 1;
    for (let E = 0; E < ft; E++) {
      const Z = G / 46 * (et.k === "partly" ? 1 : 0.8 + mt() * 0.4), Mt = bt + (et.k === "partly" ? x * 0.12 : ((E + 0.5) / ft - 0.5) * x * 0.95 + (mt() - 0.5) * x * 0.5 / ft), tt = (et.k === "partly" ? 40 : 6 + mt() * 26) * _, rt = i ? 2.5 * Math.sin(S * F / 9e3 + K * 1.3 + E * 2.1) : 0, at = i ? 0.9 * Math.sin(S * F / 6100 + K + E) : 0;
      q.clouds.push({ x: Mt - 23 * Z + rt, y: tt - 15.33 * Z + at, w: 46 * Z, h: 30.66 * Z, fill: nt, o: Q * (ft > 1 && E === 0 ? 0.85 : 1) });
    }
  }), m.forEach((et, K) => {
    const j = Wd(c * 313 + K * 29 + 11), ft = (K + 0.5) * x, mt = et.cond === "pouring" ? 16 : et.cond === "rainy" || et.cond === "hail" ? 9 : et.cond === "lightning-rainy" ? 12 : et.cond === "snowy-rainy" ? 5 : 0;
    for (let nt = 0; nt < mt; nt++) {
      let Q = ft + (j() - 0.5) * x * 1.05, E = 44 + j() * 36, Z = 1;
      if (i) {
        const tt = ((E - 44 + F * 0.04) % 36 + 36) % 36;
        Q -= 0.21 * (tt - (E - 44)), E = 44 + tt, Z = Math.min(1, tt / 6, (36 - tt) / 6);
      }
      E *= _;
      const Mt = k(et.night, Q, E) * Z;
      Mt >= 0.05 && q.drops.push({ x: Q, y: E, o: Mt });
    }
    const bt = et.cond === "snowy" ? 11 : et.cond === "snowy-rainy" ? 6 : 0;
    for (let nt = 0; nt < bt; nt++) {
      let Q = ft + (j() - 0.5) * x * 1.05, E = 40 + j() * 44, Z = 1;
      if (i) {
        const tt = ((E - 40 + F * 9e-3) % 44 + 44) % 44;
        E = 40 + tt, Q += 1.6 * Math.sin(S * F / 2800 + nt * 1.9 + K), Z = Math.min(1, tt / 6, (44 - tt) / 6);
      }
      E *= _;
      const Mt = k(et.night, Q, E) * Z;
      Mt >= 0.05 && q.flakes.push({ x: Q, y: E, o: Mt });
    }
    if (et.k === "fog") {
      const nt = et.night ? "#c8ccd6" : "#ffffff", Q = et.night ? 0.28 : 0.62, E = i ? 4 * Math.sin(S * F / 8e3 + K) : 0;
      for (let Z = 0; Z < 4; Z++) q.fogs.push({ x: ft - x * 0.75 + Z % 2 * x * 0.18 + (Z % 2 ? E : -E), y: (30 + Z * 13) * _, w: x * 1.3, c: nt, a: Q });
    }
    if (et.k === "storm") {
      const nt = (F / 3400 + K * 0.37) % 1;
      q.bolts.push({ x: ft + (j() - 0.5) * x * 0.3 - 5, y: 36 * _, o: i && !(nt < 0.05 || nt > 0.09 && nt < 0.12) ? 0.8 : 1 });
    }
  }), q;
}
function Ju(n, l, i, c, m, x, k, A) {
  const { S, C: _, cw: z, yb: F, glowAt: q, soft: G, tw: st, sy: et } = n, K = new Array(i * c), j = new Uint8Array(i * c), ft = new Uint8Array(i * c), mt = (L, P, B, W, yt) => {
    B == null || L < 0 || P < 0 || L >= i || P >= c || (W >= 1 || W > Mi(L + 5, P + 3)) && (K[P * i + L] = B, j[P * i + L] = yt);
  }, bt = (L, P, B, W) => {
    for (let yt = Math.max(0, Math.floor(P - B) - 1); yt <= Math.min(c - 1, P + B + 1); yt++) for (let wt = Math.max(0, Math.floor(L - B) - 1); wt <= Math.min(i - 1, L + B + 1); wt++) W(wt, yt, wt + 0.5 - L, yt + 0.5 - P);
  }, nt = (L, P, B) => {
    for (let yt = 0; yt < L.length - 1; yt++) {
      const wt = (yt + P) * z;
      if (B < wt - st / 2) return [L[yt], L[yt], 0];
      if (B <= wt + st / 2) return [L[yt], L[yt + 1], (B - wt + st / 2) / st];
    }
    const W = L[L.length - 1];
    return [W, W, 0];
  }, Q = S.filter((L) => !L.night).map((L) => L.sky), E = S.filter((L) => L.night).map((L) => L.sky), Z = G / x, Mt = 16 * et / x;
  for (let L = 0; L < i; L++) {
    const P = (L + 0.5) * m, B = F(P) / x, W = nt(Q, 0.75, P), yt = nt(E, 1.25, P), wt = q(P);
    for (let X = 0; X < c; X++) {
      const kt = Mi(L, X), St = X + 0.5 - B, Xt = (Z > 0.01 ? Ci(0.5 + St / Z) : St > 0 ? 1 : 0) > kt;
      let oe = Xt ? W[2] > kt ? W[1] : W[0] : yt[2] > kt ? yt[1] : yt[0];
      (Xt ? Ci(((X + 0.5) / c - 0.45) / 0.55) * 0.7 : Ci(1 - (X + 0.5) / (c * 0.55)) * 0.7) > Mi(L + 2, X + 5) && (oe = Xt ? io(oe, "#ffffff", 0.18) : io(oe, "#000000", 0.25)), Xt && St >= 0 && St < Mt && wt.a * 1.3 * (1 - St / Mt) > Mi(L + 6, X + 1) && (oe = wt.c), K[X * i + L] = oe, ft[X * i + L] = Xt ? 0 : 1;
    }
  }
  const tt = io(_.sun, "#ffffff", 0.55), rt = io(_.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const P = Math.floor(L.x / m), B = Math.floor(L.y / x);
    if (P < 0 || B < 0 || P >= i || B >= c || !ft[B * i + P] || L.o < 0.15) return;
    const W = L.o > 0.45 ? _.star : io(_.star, K[B * i + P], 0.5), yt = L.big && L.o > 0.6 ? Math.floor(L.size / m) : 0;
    mt(P, B, W, 1, pc);
    for (let wt = 1; wt <= yt; wt++) [[P - wt, B], [P + wt, B], [P, B - wt], [P, B + wt]].forEach((X) => {
      X[0] >= 0 && X[1] >= 0 && X[0] < i && X[1] < c && ft[X[1] * i + X[0]] && mt(X[0], X[1], W, 1, pc);
    });
  }), l.suns.forEach((L) => {
    const P = Math.max(1.5, L.rad / m), B = L.x / m, W = L.y / x, yt = L.halo / m * 0.85;
    if (bt(B, W, yt, (wt, X, kt, St) => {
      const Xt = Math.sqrt(kt * kt + St * St);
      Xt > P && Xt < yt && !ft[X * i + wt] && mt(wt, X, tt, 0.3 * (1 - (Xt - P) / (yt - P)), 0);
    }), A) {
      const wt = Math.floor(k / 500) % 2, X = Math.max(1, P * 0.3);
      for (let kt = 0; kt < 8; kt++) if (kt % 2 === wt) for (let St = P + 1.2; St < P + 1.2 + X; St += 0.7) mt(Math.floor(B + Math.cos(kt * Math.PI / 4) * St), Math.floor(W + Math.sin(kt * Math.PI / 4) * St), _.sun, 1, Bp);
    }
    bt(B, W, P, (wt, X, kt, St) => {
      kt * kt + St * St <= P * P && mt(wt, X, Ci(((St / P + 1) / 2 - 0.6) / 0.4) > Mi(wt, X) ? _.sunEdge : _.sun, 1, Ap);
    });
  }), l.moons.forEach((L) => {
    const P = Math.max(1.5, L.d * 0.37 / m), B = L.x / m, W = L.y / x, yt = B + 0.547 * P, wt = W - 0.503 * P, X = 0.82 * P;
    bt(B, W, P, (kt, St, Xt, oe) => {
      if (Xt * Xt + oe * oe > P * P) return;
      const na = kt + 0.5 - yt, xe = St + 0.5 - wt;
      na * na + xe * xe > X * X && mt(kt, St, Ci((oe + P) / (2 * P) * 1.1 - 0.1) > Mi(kt, St) ? _.moon : rt, 1, Ep);
    });
  }), l.clouds.forEach((L) => {
    const P = Math.max(3, L.w / m), B = P * 0.6665, W = L.x / m, yt = L.y / x, wt = io(L.fill, "#000000", 0.16);
    for (let X = Math.max(0, Math.floor(yt) - 1); X <= Math.min(c - 1, yt + B + 1); X++) for (let kt = Math.max(0, Math.floor(W) - 1); kt <= Math.min(i - 1, W + P + 1); kt++) {
      const St = (kt + 0.5 - W) / P, Xt = (X + 0.5 - yt) / P;
      Tc(St, Xt) && mt(kt, X, !Tc(St, Xt + 1 / P) || Ci((Xt - 0.42) / 0.25) * 0.8 > Mi(kt, X) ? wt : L.fill, L.o, _p);
    }
  }), l.fogs.forEach((L) => {
    const P = Math.floor(L.y / x), B = Math.max(P, Math.floor((L.y + 6 * et) / x) - 1), W = Math.floor(L.x / m), yt = Math.floor((L.x + L.w) / m);
    for (let wt = P; wt <= B; wt++) for (let X = W; X <= yt; X++) {
      const kt = (X - W) / Math.max(1, yt - W);
      mt(X, wt, L.c, L.a * (kt < 0.25 ? kt / 0.25 : kt > 0.75 ? (1 - kt) / 0.25 : 1), 0);
    }
  });
  const at = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const P = L.x / m, B = Math.floor(L.y / x);
    for (let W = 0; W < at; W++) mt(Math.floor(P - 0.208 * W * x / m), B + W, _.rain, L.o, Dp);
  });
  const qt = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((L) => {
    const P = Math.floor(L.x / m), B = Math.floor(L.y / x);
    mt(P, B, _.snow, L.o, js);
    for (let W = 1; W <= qt; W++)
      mt(P - W, B, _.snow, L.o, js), mt(P + W, B, _.snow, L.o, js), mt(P, B - W, _.snow, L.o, js), mt(P, B + W, _.snow, L.o, js);
  }), l.bolts.forEach((L) => {
    if (m <= 3.5)
      for (let P = Math.floor(L.y / x); P <= (L.y + 24) / x; P++) for (let B = Math.floor(L.x / m); B <= (L.x + 11) / m; B++)
        ju($u, (B + 0.5) * m - L.x, (P + 0.5) * x - L.y) && mt(B, P, _.sun, 1, hd);
    else {
      const P = Math.round(L.x / m), B = Math.round(L.y / x);
      Xu.forEach((W, yt) => W.split("").forEach((wt, X) => {
        wt === "#" && mt(P + X, B + yt, _.sun, 1, hd);
      }));
    }
  }), { col: K, ids: j };
}
function Qu(n, l) {
  const i = l.px, c = Math.max(6, Math.round(l.width / i)), m = Math.max(6, Math.round(l.height / i)), x = l.width / c, k = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, S = (G) => {
    const st = Rp(G, l);
    return Ju(st, Pp(st, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, x, k, A, l.ambient);
  }, _ = S(n), z = l.reveal == null ? 1 : Ci(l.reveal);
  let F = _.col, q = _.ids;
  if (z < 1) {
    const G = l.prev ? S(l.prev) : null, st = z * (c + 12);
    F = new Array(c * m), q = new Uint8Array(c * m);
    for (let et = 0; et < c * m; et++) {
      const K = et % c, j = et / c | 0;
      (l.reduce ? z : Ci((st - K) / 12)) > Mi(K, j) ? (F[et] = _.col[et], q[et] = _.ids[et]) : G ? (F[et] = G.col[et], q[et] = G.ids[et]) : (F[et] = null, q[et] = 255);
    }
  }
  return zu(F, q, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function tf(n, l, i) {
  const c = i.width, m = i.height, x = i.reveal == null ? 1 : Ci(i.reveal), k = (q, G) => {
    const st = Rp(G, i);
    ef(q, st, Pp(st, i));
  };
  if (n.clearRect(0, 0, c, m), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const A = n.canvas, S = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (S.width !== A.width || S.height !== A.height) && (S.width = A.width, S.height = A.height);
  const _ = S.getContext("2d");
  _.setTransform(n.getTransform()), _.clearRect(0, 0, c, m), k(_, l);
  const z = x * (c + 64) - 64, F = _.createLinearGradient(z, 0, z + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), _.globalCompositeOperation = "destination-in", _.fillStyle = F, _.fillRect(0, 0, c, m), _.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function ef(n, l, i) {
  const { W: c, H: m, S: x, C: k, cw: A, yb: S, glowAt: _, soft: z, tw: F, sy: q } = l, G = n.getTransform().a || 1, st = (at) => {
    n.shadowColor = at ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = at ? 4 * G : 0, n.shadowOffsetY = at ? 1.5 * G : 0;
  }, et = (at, qt) => {
    const L = cd(at);
    return "rgba(" + L[0] + "," + L[1] + "," + L[2] + "," + Math.max(0, Math.min(1, qt)).toFixed(3) + ")";
  }, K = (at, qt) => {
    const L = n.createLinearGradient(0, 0, c, 0);
    L.addColorStop(0, at[0]);
    for (let P = 0; P < at.length - 1; P++) {
      const B = (P + qt) * A, W = (B - F / 2) / c, yt = (B + F / 2) / c;
      W > 0 && W < 1 && L.addColorStop(W, at[P]), yt > 0 && yt < 1 && L.addColorStop(yt, at[P + 1]);
    }
    return L.addColorStop(1, at[at.length - 1]), L;
  }, j = Math.max(24, Math.ceil(c / 4)), ft = (at, qt) => {
    n.beginPath();
    for (let L = 0; L <= j; L++) {
      const P = c * L / j, B = at == null ? 0 : S(P) + at;
      L ? n.lineTo(P, B) : n.moveTo(P, B);
    }
    for (let L = j; L >= 0; L--) {
      const P = c * L / j;
      n.lineTo(P, S(P) + qt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = K(x.filter((at) => !at.night).map((at) => at.sky), 0.75), n.fillRect(0, 0, c, m);
  const mt = n.createLinearGradient(0, 0, c, 0);
  for (let at = 0; at <= 64; at++) {
    const qt = _(c * at / 64);
    mt.addColorStop(at / 64, et(qt.c, Math.min(1, qt.a)));
  }
  n.fillStyle = mt;
  for (let at = 0; at < 8; at++)
    n.globalAlpha = 1 - at / 8, ft(at * 2 * q, (at + 1) * 2 * q);
  n.fillStyle = K(x.filter((at) => at.night).map((at) => at.sky), 1.25);
  const bt = Math.max(0.5, z), nt = 6;
  n.globalAlpha = 1, ft(null, -bt);
  for (let at = 0; at < nt; at++)
    n.globalAlpha = 1 - (at + 0.5) / nt, ft(-bt + 2 * bt * at / nt, -bt + 2 * bt * (at + 1) / nt);
  n.globalAlpha = 1;
  const Q = new Path2D(Zu), E = new Path2D(Yu), Z = new Path2D(Uu), Mt = new Path2D(Ku);
  n.fillStyle = k.star, i.stars.forEach((at) => {
    n.globalAlpha = at.o, at.big ? (n.save(), n.translate(at.x, at.y), n.scale(at.size, at.size), n.fill(Q), n.restore()) : (n.beginPath(), n.arc(at.x, at.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const tt = io(k.sun, "#ffffff", 0.55);
  i.suns.forEach((at) => {
    const qt = n.createRadialGradient(at.x, at.y, 0, at.x, at.y, at.halo);
    qt.addColorStop(0, et(tt, 0.42)), qt.addColorStop(0.7, et(tt, 0)), n.fillStyle = qt, n.beginPath(), n.arc(at.x, at.y, at.halo, 0, Math.PI * 2), n.fill();
    const L = n.createLinearGradient(0, at.y - at.rad, 0, at.y + at.rad);
    L.addColorStop(0.6, k.sun), L.addColorStop(1, k.sunEdge), n.fillStyle = L, st(!0), n.beginPath(), n.arc(at.x, at.y, at.rad, 0, Math.PI * 2), n.fill(), st(!1);
  });
  const rt = io(k.moon, "#ffffff", 0.6);
  i.moons.forEach((at) => {
    n.save(), n.translate(at.x - at.d / 2, at.y - at.d / 2), n.scale(at.d / 46, at.d / 46);
    const qt = n.createLinearGradient(0, 6, 0, 40);
    qt.addColorStop(0, rt), qt.addColorStop(1, k.moon), n.fillStyle = qt, st(!0), n.fill(E), st(!1), n.restore();
  }), i.clouds.forEach((at) => {
    n.save(), n.globalAlpha = at.o, n.translate(at.x, at.y), n.scale(at.w / 46, at.h / 30.66), n.translate(-4, -9.67), n.fillStyle = at.fill, st(!0), n.fill(Z), st(!1), n.restore();
  }), i.fogs.forEach((at) => {
    const qt = n.createLinearGradient(at.x, 0, at.x + at.w, 0);
    qt.addColorStop(0, et(at.c, 0)), qt.addColorStop(0.25, et(at.c, at.a)), qt.addColorStop(0.75, et(at.c, at.a)), qt.addColorStop(1, et(at.c, 0)), n.fillStyle = qt, n.fillRect(at.x, at.y, at.w, 6 * q);
  }), n.fillStyle = k.rain, i.drops.forEach((at) => {
    n.save(), n.globalAlpha = at.o, n.translate(at.x, at.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((at) => {
    n.globalAlpha = at.o, n.beginPath(), n.arc(at.x, at.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((at) => {
    n.save(), n.globalAlpha = at.o, n.translate(at.x, at.y), n.fill(Mt), n.restore();
  }), n.restore();
}
const af = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Os = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, td = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, jd = (n, l) => '<path class="' + l + '" d="' + n + '"/>', nf = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', no = (n, l, i, c) => {
  const m = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + nf(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + m) + " " + (l - m) + "L" + (n + i) + " " + l + "L" + (n + m) + " " + (l + m) + "L" + n + " " + (l + i) + "L" + (n - m) + " " + (l + m) + "L" + (n - i) + " " + l + "L" + (n - m) + " " + (l - m) + 'Z"/>';
}, Lc = ([n, l, i], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', of = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', rf = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), sf = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function lf(n, l, i, c) {
  const m = (x) => '<g filter="url(#' + c + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? m(Lc(i ? td.l : td.s, c)) + (i ? no(70, 20, 5.83, 1) + no(78.33, 41.67, 3.75, 0.8) + no(60, 71.67, 3.33, 0.6) : no(42, 12, 3.5, 1) + no(47, 25, 2.25, 0.8) + no(36, 43, 2, 0.6)) : m(of(c, i)) : n === "partly" ? m(l ? Lc(i ? td.lp : td.sp, c) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(jd(i ? Os.lp : Os.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? no(73.33, 16.67, 4.17, 0.9) : no(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(jd(i ? Os.lc : Os.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? no(15, 15, 3.75, 0.8) + no(76.67, 13.33, 2.92, 0.6) : no(9, 9, 2.25, 0.8) + no(46, 8, 1.75, 0.6) : "") : m(jd(i ? Os.lr : Os.s, "wbCloudLight")) + (n === "rain" ? rf(i) : sf(i));
}
const df = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function cf(n, l, i, c) {
  let m = af(n);
  const x = m === "night" || !!i;
  m === "night" && (m = "clear");
  const k = l ? 90 : 54;
  return { k: m, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + df(c, l) + lf(m, x, l, c) + "</svg>" };
}
const pf = [
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
], ed = (n, l) => (pf[l % 8 * 8 + n % 8] + 0.5) / 64, Lo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Qa = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], vl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ac = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Kr = [255, 255, 255], gn = Lo("#26221e"), Ec = Lo("#0288d1"), uf = Lo("#01579b"), zd = Lo(yn.cloudDay), Vd = Lo(yn.cloudNight), ad = Lo(yn.dusk), Gd = Lo(yn.sunEdge), ff = Lo(yn.sun), hf = 10, _c = 0.3, Ti = 56, Np = 21;
function mf(n) {
  const l = Array.from({ length: Np }, () => new Array(Ti).fill(void 0)), i = (k, A, S) => {
    l[A][k] = S;
  }, c = Qa(ad, gn, 0.35), m = Qa(gn, Kr, 0.22);
  for (let k = 0; k <= 6; k++) {
    const A = k < 2 ? Ti - 2 : Ti - 1;
    for (let S = 6 - k; S <= A; S++) i(S, k, k < 2 ? c : k === 6 ? m : gn);
  }
  const x = [ad, Gd, Vd, Lo(yn.skyRainDay), Qa(ad, gn, 0.2), Qa(n, gn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, A) => {
    const S = 9 + A * 6;
    for (let _ = 0; _ < k; _++) {
      const z = x[(A * 2 + _ * 3) % x.length];
      for (let F = S; F < S + 5; F++)
        i(F, 7 + _ * 2, Qa(z, gn, 0.12)), i(F, 8 + _ * 2, _ === k - 1 ? Qa(z, Kr, 0.3) : z);
      i(S + 5, 7 + _ * 2, gn), i(S + 5, 8 + _ * 2, gn);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, gn);
  i(5, 13, Gd);
  for (let k = 7; k <= 14; k++) for (let A = 42; A <= 51; A++) i(A, k, A === 51 ? Vd : zd);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, gn), i(k, 9, Qa(gn, zd, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? Vd : zd);
  for (let k = 15; k <= 18; k++) for (let A = 46; A <= 49; A++) i(A, k, k === 18 ? gn : k === 16 ? Gd : ad);
  for (let k = 15; k <= 19; k++) i(44, k, gn);
  return i(44, 20, ff), l;
}
function gf(n, l, i, c) {
  const m = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(m * x * 4), A = Lo(c.skyClearDay), S = Lo(c.skyFogDay), _ = mf(A), z = Math.round(x * 0.55), F = vl(1 - Math.log(i / _c) / Math.log(hf / _c)), q = Qa(A, S, F), G = (j) => vl((j - 0.1) / 0.9), st = vl((1 - Math.exp(-2 / i) - 0.2) / 0.8), et = Math.round(m / 2 - Ti / 2), K = z + 3;
  for (let j = 0; j < x; j++) {
    const ft = K - 1 - j, mt = j - K;
    for (let bt = 0; bt < m; bt++) {
      const nt = bt - et;
      let Q, E;
      const Z = ft >= 0 && ft < Np && nt >= 0 && nt < Ti ? _[ft][nt] : void 0;
      if (Z)
        Q = Z, E = st;
      else if (ft >= 0 && ft <= 1 && nt >= 4 - ft && nt <= 5 - ft)
        Q = Qa(Kr, Ec, 0.15), E = st;
      else if (j < z) {
        const rt = vl(((j + 0.5) / z - 0.15) / 0.85) * 3, at = Math.min(3, Math.floor(rt + ed(bt + 2, j + 5)));
        Q = Qa(q, Kr, at * 0.1), E = F * 0.95;
      } else {
        const rt = (j - z + 0.5) / (x - z), at = Math.min(1.5, 6e-3 / (rt * rt)), qt = vl(rt * 1.4) * 3, L = Math.min(3, Math.floor(qt + ed(bt + 1, j + 6)));
        Q = Qa(Ec, uf, L / 3);
        const P = 1 + Math.round(rt * 7), B = Math.floor(bt / (P * 3)), W = 0.06 + 0.16 * rt, yt = bt % (P * 3) < P;
        yt && Ac(B, j) < W ? Q = Qa(Q, Kr, 0.18 + 0.1 * (1 - rt)) : yt && rt > 0.5 && Ac(B, j - 1) < W && (Q = Qa(Q, gn, 0.12)), E = G(1 - Math.exp(-at / i)), mt === 0 && nt >= 3 && nt <= 8 ? (Q = Qa(Q, Kr, nt < 6 ? 0.8 : 0.45), E = st) : mt >= 0 && mt <= 2 && nt >= Ti && nt < Ti + 40 ? ((1 - (nt - Ti) / 40) * (mt === 1 ? 0.9 : 0.5) > ed(bt, j + 3) && (Q = Qa(Q, Kr, 0.5)), E = st) : mt === 0 && nt >= 6 && nt < Ti && (Q = Qa(Q, gn, nt % 2 === 0 ? 0.35 : 0.2), E = st);
      }
      const Mt = E > ed(bt, j) ? S : Q, tt = (j * m + bt) * 4;
      k[tt] = Mt[0], k[tt + 1] = Mt[1], k[tt + 2] = Mt[2], k[tt + 3] = 255;
    }
  }
  return { data: k, w: m, h: x };
}
const vf = {
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
}, bf = 1.6;
function wf(n, l) {
  const i = n ? vf[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const c = (x) => Math.abs(Math.log(x[2] / l)), m = i.reduce((x, k) => c(k) < c(x) ? k : x);
  return c(m) <= Math.log(bf) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const xf = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, yf = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", aa = {
  pivot: {
    tilt: 2,
    persp: 220,
    lift: 102.4,
    /* 103 in the lab, its lift 20% less (Matt, 10 Nov) */
    press: 98,
    shine: 10,
    size: 80,
    ret: 210,
    ease: "soft"
  },
  slider: { glow: 6, spread: 1, strength: 14, hold: 5, holdStrength: 42, grow: 101, ein: 140, eout: 520, ease: "soft" },
  iconbtn: {
    scale: 108.4,
    // 107 in the lab, its growth 20% bigger (Matt, 10 Nov)
    press: 90,
    dur: 160,
    ease: "soft"
  },
  warp: { style: "pinch", amount: 60, win: 120, cdelay: 0, cdur: 500, wout: 340, ease: "soft" },
  expand: { dur: 660, ease: "standard", delay: 140, stagger: 145, back: 105 },
  graphs: { weight: 1, draw: 1e3 },
  tabs: { dur: 360, stretch: 56 },
  dialog: { open: 380, close: 240, ease: "spring", blur: 12, from: 80 },
  confirm: { stay: 2600, dur: 360, draw: 1 },
  drag: { pull: 17, keep: 70, stick: 44, tilt: 5, lift: 3.5, slide: 420, squash: 5 },
  outline: { lightAt: 30, glowFrom: 20, colourFrom: 50, cone: 20, glow: 15, border: 49, fill: 15, size: 60, hue: 199, press: 1, fin: 180, fout: 350 }
}, ze = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, tn = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function kf() {
  const { pivot: n, slider: l, iconbtn: i, warp: c, outline: m } = aa;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", ze[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", ze[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", ze[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", c.cdur + "ms"],
    ["--wc-delay", c.cdelay + "ms"],
    ["--wc-ease", ze[c.ease]],
    ["--ol-esens", m.glowFrom],
    ["--ol-csens", m.colourFrom],
    ["--ol-cone", m.cone],
    ["--ol-glow", m.glow / 100],
    ["--ol-border", m.border / 100],
    ["--ol-fill", m.fill / 100],
    ["--ol-size", m.size / 100],
    ["--ol-h", m.hue + "deg"],
    ["--ol-in", m.fin + "ms"],
    ["--ol-out", m.fout + "ms"]
  ].map(([x, k]) => x + ":" + k).join(";");
}
const Ud = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Mf = "#homeView .tfAreaPanel", Sf = 300, pd = (n) => Math.min(1, Sf / Math.max(1, n)), Yd = (n, l) => 1 + (l / 100 - 1) * pd(n.offsetWidth);
function Cf(n, l) {
  l.style.cssText += ";" + kf();
  let i = null;
  const c = (z) => {
    z.classList.remove("mvMoving", "mvLit"), z.style.setProperty("--rx", "0deg"), z.style.setProperty("--ry", "0deg"), z.style.setProperty("--sc", 1), z._down = !1;
  };
  n.addEventListener("pointermove", (z) => {
    var j, ft;
    const F = z.pointerType === "touch" || tn() ? null : (ft = (j = z.target).closest) == null ? void 0 : ft.call(j, Ud);
    if (i && i !== F && c(i), i = F, !F || F.disabled) return;
    const q = aa.pivot, G = F.getBoundingClientRect(), st = (z.clientX - G.left) / G.width, et = (z.clientY - G.top) / G.height, K = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", q.persp / pd(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", (K * (st - 0.5) * 2 * q.tilt * pd(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", (K * -(et - 0.5) * 2 * q.tilt * pd(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (st * 100).toFixed(1) + "%"), F.style.setProperty("--my", (et * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", Yd(F, q.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (z) => {
    i && !i.contains(z.relatedTarget) && (c(i), i = null);
  }), n.addEventListener("pointerdown", (z) => {
    var q, G;
    const F = tn() ? null : (G = (q = z.target).closest) == null ? void 0 : G.call(q, Ud);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", Yd(F, aa.pivot.press)));
  }), n.addEventListener("pointerup", (z) => {
    var q, G;
    const F = (G = (q = z.target).closest) == null ? void 0 : G.call(q, Ud);
    F && (F._down = !1, F.style.setProperty("--sc", z.pointerType === "touch" ? 1 : Yd(F, aa.pivot.lift)));
  });
  let m = null;
  n.addEventListener("pointerover", (z) => {
    var F, q, G;
    z.pointerType !== "touch" && ((G = (q = (F = z.target).closest) == null ? void 0 : q.call(F, ".tfBar")) == null || G.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (z) => {
    var q, G;
    const F = (G = (q = z.target).closest) == null ? void 0 : G.call(q, ".tfBar");
    F && !F.contains(z.relatedTarget) && F !== m && F.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (z) => {
    var q, G;
    const F = (G = (q = z.target).closest) == null ? void 0 : G.call(q, ".tfBar");
    F && (m = F, F.classList.add("mvHold"));
  });
  const x = (z) => {
    if (!m) return;
    m.classList.remove("mvHold");
    const F = m.getBoundingClientRect();
    (z.pointerType === "touch" || z.clientX < F.left || z.clientX > F.right || z.clientY < F.top || z.clientY > F.bottom) && m.classList.remove("mvHover"), m = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), n.addEventListener("focusin", (z) => {
    var F, q;
    (q = (F = z.target).matches) != null && q.call(F, ".tfBar:focus-visible") && z.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (z) => {
    var F;
    (F = z.target.classList) == null || F.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (z) => {
    var q, G;
    const F = (G = (q = z.target).closest) == null ? void 0 : G.call(q, ".tfBar");
    !F || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(z.key) || (F.classList.add("mvHold"), clearTimeout(F._k), F._k = setTimeout(() => F.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (z) => {
    var q, G;
    const F = (G = (q = z.target).closest) == null ? void 0 : G.call(q, "button.tfIcon[data-act]");
    F && Tf(F);
  });
  let k = null;
  const A = (z, F, q) => {
    z.querySelector(":scope>.mvEdge") || z.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const G = z.getBoundingClientRect(), st = G.width / 2, et = G.height / 2, K = F.clientX - G.left - st, j = F.clientY - G.top - et, ft = K ? st / Math.abs(K) : 1 / 0, mt = j ? et / Math.abs(j) : 1 / 0, bt = Math.min(Math.max(1 / Math.min(ft, mt), 0), 1);
    let nt = Math.atan2(j, K) * 180 / Math.PI + 90;
    nt < 0 && (nt += 360);
    const Q = q ? 100 : bt * 100;
    z.style.setProperty("--edge-proximity", Q.toFixed(3)), z.style.setProperty("--cursor-angle", nt.toFixed(3) + "deg"), z.classList.toggle("mvLitEdge", q || Q >= aa.outline.lightAt);
  }, S = (z) => {
    z.classList.remove("mvLitEdge"), z.style.setProperty("--edge-proximity", "0"), z._down = !1;
  }, _ = (z) => {
    var q;
    const F = (q = z.closest) == null ? void 0 : q.call(z, Mf);
    return F && !l.classList.contains("tfEditing") ? F : null;
  };
  n.addEventListener("pointermove", (z) => {
    if (z.pointerType === "touch") return;
    const F = _(z.target);
    k && k !== F && S(k), k = F, F && !F._down && A(F, z, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (z) => {
    k && !k.contains(z.relatedTarget) && (S(k), k = null);
  }), n.addEventListener("pointerdown", (z) => {
    const F = _(z.target);
    F && aa.outline.press && (F._down = !0, A(F, z, !0));
  }), n.addEventListener("pointerup", (z) => {
    const F = _(z.target);
    F && (F._down = !1, z.pointerType === "touch" ? S(F) : A(F, z, !1));
  }), new MutationObserver((z) => {
    var F;
    for (const q of z) {
      const G = q.target;
      if (q.type === "attributes") {
        (F = G.classList) != null && F.contains("tfMoreBackdrop") && !G.hidden && q.oldValue !== null && Dc(G);
        continue;
      }
      q.addedNodes.forEach((st) => {
        st.nodeType === 1 && st.classList.contains("tfMoreBackdrop") && !st.hidden && Dc(st);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Ip = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Hp(n, l) {
  const i = [];
  for (let c = n; c && c !== l && c.parentNode; c = c.parentNode) i.unshift([...c.parentNode.children].indexOf(c));
  return i;
}
const Fp = (n, l) => l.reduce((i, c) => i == null ? void 0 : i.children[c], n);
function Tf(n) {
  var G;
  if (tn() || n._warp) return;
  const l = aa.warp, i = l.amount / 100, c = n.firstElementChild;
  if (!c) return;
  const m = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), A = Ip(n), S = (G = A.dataset) == null ? void 0 : G.k, _ = Hp(n, A), z = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = c.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...m, filter: x }], { duration: l.win, easing: ze.exit, fill: "forwards" }), q = performance.now();
  F.finished.then(() => {
    const st = () => {
      var bt, nt;
      const et = S ? A.isConnected ? A : (bt = k.querySelector) == null ? void 0 : bt.call(k, '[data-k="' + CSS.escape(S) + '"]') : A, K = et && Fp(et, _);
      if (K === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === z && performance.now() - q < 420) {
        requestAnimationFrame(st);
        return;
      }
      (((nt = K == null ? void 0 : K.matches) != null && nt.call(K, "button.tfIcon") ? K : n).firstElementChild || c).animate([{ ...m, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: ze[l.ease] }), F.cancel(), n._warp = 0;
    };
    st();
  });
}
function Lf(n, l, i) {
  var z;
  if (tn() || !n || !l) return;
  const c = aa.expand, m = n.getBoundingClientRect(), x = "inset(" + (l.top - m.top).toFixed(1) + "px " + (m.right - l.right).toFixed(1) + "px " + (m.bottom - l.bottom).toFixed(1) + "px " + (l.left - m.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, A = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), S = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: c.dur, easing: ze[c.ease] });
  const _ = (z = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : z.getBoundingClientRect();
  k && _ && i && k.animate([{ transform: "translate(" + (i.left - _.left).toFixed(1) + "px," + (i.top - _.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: c.dur, easing: ze[c.ease] }), A == null || A.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: c.dur, easing: ze[c.ease] }), S.forEach((F, q) => {
    F.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: c.delay + q * c.stagger, easing: ze.standard, fill: "backwards" });
  });
}
function Af(n, l, i) {
  if (tn() || !n || !l) {
    i();
    return;
  }
  const c = aa.expand, m = c.dur * c.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((z) => z.animate([{ opacity: 1 }, { opacity: 0 }], { duration: m * 0.3, easing: ze.standard, fill: "forwards" }));
  const A = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: m, easing: ze.standard, fill: "forwards" });
  let S = !1;
  const _ = () => {
    S || (S = !0, i());
  };
  A.finished.then(_, _), setTimeout(_, m + 80);
}
const Op = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const c = n[i - 1] || n[i], m = n[i], x = n[i + 1], k = n[i + 2] || x, A = [m[0] + (x[0] - c[0]) / 6, m[1] + (x[1] - c[1]) / 6], S = [x[0] - (k[0] - m[0]) / 6, x[1] - (k[1] - m[1]) / 6];
    l += "C" + A.map((_) => _.toFixed(1)).join(" ") + " " + S.map((_) => _.toFixed(1)).join(" ") + " " + x.map((_) => _.toFixed(1)).join(" ");
  }
  return l;
}, qp = (n, l, i, c = "mvGrid") => [0, 1, 2].map((m) => {
  const x = (l + (i - l) * m / 2).toFixed(1);
  return '<line class="' + c + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function Wp(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (tn() || !(l != null && l.getTotalLength)) return;
  const c = aa.graphs, m = l.getTotalLength();
  l.animate([{ strokeDasharray: m, strokeDashoffset: m }, { strokeDasharray: m, strokeDashoffset: 0 }], { duration: c.draw, easing: ze.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: c.draw * 0.6, delay: c.draw * 0.3 + k * 12, easing: ze.standard, fill: "backwards" }));
}
function jp(n, l, i, c, m) {
  if (n.getAnimations().forEach((z) => z.cancel()), n.style.left = c + "px", n.style.width = m + "px", tn() || l === c && i === m) return;
  const x = aa.tabs, k = x.stretch / 100, A = (z, F) => ({ left: z + "px", width: F + "px" }), _ = c > l ? A(l + (c - l) * (0.15 * (1 - k)), c + m - (l + (c - l) * (0.15 * (1 - k)))) : A(c, l + i - c - (l - c) * (0.15 * (1 - k)));
  n.animate([A(l, i), { offset: 0.5, ..._ }, A(c, m)], { duration: x.dur, easing: ze.standard });
}
function Ef(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (m) => m.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), c = (m, x) => x ? [...m.children].indexOf(x) : -1;
  n.addEventListener("click", (m) => {
    var ft, mt, bt;
    const x = (mt = (ft = m.target).closest) == null ? void 0 : mt.call(ft, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || tn() || x.disabled) return;
    const A = i(k);
    if (!A || A === x) return;
    const S = c(k, A), _ = k.getBoundingClientRect(), z = A.getBoundingClientRect(), F = getComputedStyle(A).borderRadius, q = k.getRootNode(), G = Ip(k), st = (bt = G.dataset) == null ? void 0 : bt.k, et = Hp(k, G), K = performance.now(), j = () => {
      var at, qt, L;
      const nt = st && !G.isConnected ? (at = q.querySelector) == null ? void 0 : at.call(q, '[data-k="' + CSS.escape(st) + '"]') : G, Q = nt && Fp(nt, et), E = (qt = Q == null ? void 0 : Q.matches) != null && qt.call(Q, l) ? i(Q) : null;
      if (!E || c(Q, E) === S) {
        performance.now() - K < 700 && requestAnimationFrame(j);
        return;
      }
      const Z = Q.getBoundingClientRect(), Mt = E.getBoundingClientRect(), tt = getComputedStyle(E);
      (L = Q.querySelector(":scope>.mvSegInd")) == null || L.remove();
      const rt = document.createElement("span");
      rt.className = "mvSegInd", rt.style.cssText = "top:" + (Mt.top - Z.top - Q.clientTop) + "px;height:" + Mt.height + "px;border-radius:" + F + ";background:" + tt.backgroundColor + ";box-shadow:" + tt.boxShadow, getComputedStyle(Q).position === "static" && (Q.style.position = "relative"), Q.prepend(rt), Q.classList.add("mvSegMoving"), jp(rt, z.left - _.left - Q.clientLeft, z.width, Mt.left - Z.left - Q.clientLeft, Mt.width), clearTimeout(Q._seg), Q._seg = setTimeout(() => {
        rt.remove(), Q.classList.remove("mvSegMoving");
      }, aa.tabs.dur + 20);
    };
    requestAnimationFrame(j);
  }, !0);
}
const zp = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Dc(n) {
  const l = n.firstElementChild;
  if (tn() || !l || l.classList.contains("still")) return;
  const i = aa.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: ze.standard }), l.style.animation = "none", l.animate(zp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: ze[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((m, x) => m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: ze.standard, fill: "backwards" }));
}
function _f(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (tn() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const c = aa.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + c.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: c.close, easing: ze.exit, fill: "forwards" });
  const m = i.animate(zp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + c.from / 100 + ")" }], { duration: c.close, easing: ze.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), i.getAnimations().forEach((A) => A.cancel()), l());
  };
  m.finished.then(k, k), setTimeout(k, c.close + 80);
}
const Df = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Bf(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Df), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function Rf(n) {
  if (tn()) return;
  const l = aa.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: ze.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: ze.standard, fill: "backwards" });
}
const Bc = (n, l, i, c, m = 1) => (n + l * i * m) * Math.pow(c, m);
function Pf(n) {
  const l = aa.drag.squash / 100;
  !n || tn() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Rc(n) {
  if (!n || tn()) return;
  const l = aa.expand;
  [...n.children].slice(1).forEach((i, c) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + c * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Va = 6e4, _e = 36e5, Bn = 864e5, wl = 1440, Nf = 6, If = 10 * Va, Pc = 3, Hf = 3, nd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Ff = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Of = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Nc = (n, l, i, c) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const x = Math.cos(m * Math.PI / 180), k = Math.sin(m * Math.PI / 180), A = i + 2, S = i + 2 + c;
  return "M" + (n + x * A).toFixed(2) + " " + (l + k * A).toFixed(2) + "L" + (n + x * S).toFixed(2) + " " + (l + k * S).toFixed(2);
}).join("") + '"/>', xi = (n) => '<path d="' + Of + '"' + (n ? ' transform="' + n + '"' : "") + "/>", yi = (n) => '<path d="' + n + '"/>', Ic = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function qf(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Ic : Nc(12, 12, 4, 2.5);
    case "clear-night":
      return Ic;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Nc(7.5, 7.5, 2.6, 1.4)) + xi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return xi();
    case "fog":
      return yi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return xi(i) + yi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return xi(i) + yi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return xi(i) + yi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return xi(i) + yi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return xi(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return xi(i) + yi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return xi(i) + yi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return yi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + yi("M12 8v5M12 16h.01");
  }
}
const Zd = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + qf(n, l) + "</svg>", Wf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), jf = 30 * Va, zf = 7, Vf = 3, Hc = 1, Gf = Va, Uf = 15 * Va, Yf = 5, De = {
  back: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  calendar: "M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z",
  chevronDown: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
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
}, Lt = {
  // the XL widgets' callout rows (Matt, 9 Nov)
  advice: { fine: "We're all good here 🙂", sunblock: "Cover up with sunblock", avoidUntil: "Avoid the sun until {time}", avoidToday: "Stay out of the sun today", window: "Open the window", closed: "Keep the windows closed", rising: "Rising: fine weather ahead", falling: "Falling: unsettled ahead", steady: "Steady: little change" },
  callout: { riseTomorrow: "Sunrise tomorrow", setTomorrow: "Sunset tomorrow", dayTomorrow: "Daylight tomorrow", moonrise: "Moonrise", moonset: "Moonset", lit: "Lit", now: "Now", peak: "Peak today", hoursAgo: "3 hours ago", change: "Change", inHours: "In 3 hours" },
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
  untilSunset: "until sunset",
  untilSunrise: "until sunrise",
  moon: "Moon",
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
}, Zf = {
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
}, Kf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], $f = Object.keys(Lt.phases), Xf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Fc = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Vp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], od = 100, Oc = "µg/m³", Jf = "weather_alerts.air_quality_pollen", md = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Qf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, th = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], eh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, ah = { daily: 1, hourly: 2 }, Nt = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Xa = (n, l) => n.replace(/\{(\w+)\}/g, (i, c) => l[c] ?? ""), Si = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', qc = /* @__PURE__ */ new Map();
function Gp(n) {
  let l = qc.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", c = document.createElementNS(i, "svg"), m = document.createElementNS(i, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), c.append(m), document.body.append(c);
    const x = m.getBBox();
    c.remove();
    const k = Math.max(x.width, x.height), A = k ? 26 * 24 / k : 0, S = A / 24;
    l = k ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * S).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * S).toFixed(2) + "px" : "", qc.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : Si(n);
}
const nh = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ne = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Wc = /* @__PURE__ */ new Map(), jc = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new WeakMap(), oh = (n) => {
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
function we(n, l, i) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...m ? { useGrouping: !1 } : {} }, k = m ? "en-US" : oh(l), A = JSON.stringify([k, x]);
  let S = Wc.get(A);
  if (!S) {
    try {
      S = new Intl.NumberFormat(k, x);
    } catch {
      S = new Intl.NumberFormat(void 0, x);
    }
    Wc.set(A, S);
  }
  return S.format(c);
}
const bc = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function ih(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Kd.has(n)) return Kd.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return Kd.set(n, i), i;
}
const Up = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Yp(n, l) {
  const i = JSON.stringify([n, l]);
  let c = jc.get(i);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    jc.set(i, c);
  }
  return c;
}
const Ja = (n, l) => Yp(bc(l), { hour: "numeric", minute: "2-digit", hourCycle: ih(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Up(l) }).format(n), zc = (n, l) => Yp(bc(l), { weekday: "short", timeZone: Up(l) }).format(n), rh = (n, l) => n.toLocaleDateString(bc(l), { weekday: "narrow" }), Ye = (n, l) => Ne(l) ? we(Math.round(Number(l)), n.locale) + "°" : "–", yr = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, qs = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), xn = Math.PI / 180, sh = 2440588, lh = 2451545, gd = xn * 23.4397, dh = 149598e3, ch = -0.833 * xn, ph = 0.133 * xn, Vc = 5 * Va, Zp = (n) => n.getTime() / Bn - 0.5 + sh - lh, Kp = (n, l) => Math.atan2(Math.sin(n) * Math.cos(gd) - Math.tan(l) * Math.sin(gd), Math.cos(n)), $p = (n, l) => Math.asin(Math.sin(l) * Math.cos(gd) + Math.cos(l) * Math.sin(gd) * Math.sin(n)), uh = (n, l) => xn * (280.16 + 360.9856235 * n) - l, fh = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function Xp(n) {
  const l = xn * (357.5291 + 0.98560028 * n), i = xn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + i + xn * 102.9372 + Math.PI;
  return { ra: Kp(c, 0), dec: $p(c, 0), dist: dh };
}
function Jp(n) {
  const l = xn * (218.316 + 13.176396 * n), i = xn * (134.963 + 13.064993 * n), c = xn * (93.272 + 13.22935 * n), m = l + xn * 6.289 * Math.sin(i), x = xn * 5.128 * Math.sin(c);
  return { ra: Kp(m, x), dec: $p(m, x), dist: 385001 - 20905 * Math.cos(i) };
}
const Qp = (n, l, i, c) => {
  const m = Zp(l), x = n(m);
  return fh(uh(m, xn * -c) - x.ra, xn * i, x.dec);
}, vd = (n, l, i) => Qp(Xp, n, l, i), hh = (n, l, i) => Qp(Jp, n, l, i);
function tu(n, l, i, c) {
  const m = {};
  let x = i.getTime(), k = n(i) - l;
  for (let A = x + Vc; A <= c.getTime(); A += Vc) {
    const S = n(new Date(A)) - l;
    if (k < 0 != S < 0) {
      const _ = new Date(x + (A - x) * k / (k - S));
      S > 0 ? m.rise ?? (m.rise = _) : m.set ?? (m.set = _);
    }
    x = A, k = S;
  }
  return m;
}
const eu = (n) => {
  const l = yr(n);
  return [l, new Date(l.getTime() + Bn)];
}, mh = (n, l, i) => tu((c) => vd(c, l, i), ch, ...eu(n)), gh = (n, l, i) => tu((c) => hh(c, l, i), ph, ...eu(n));
function $d(n) {
  const l = Zp(n), i = Xp(l), c = Jp(l), m = Math.acos(Math.sin(i.dec) * Math.sin(c.dec) + Math.cos(i.dec) * Math.cos(c.dec) * Math.cos(i.ra - c.ra)), x = Math.atan2(i.dist * Math.sin(m), c.dist - i.dist * Math.cos(m)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - c.ra), Math.sin(i.dec) * Math.cos(c.dec) - Math.cos(i.dec) * Math.sin(c.dec) * Math.cos(i.ra - c.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const vh = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, xl = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Ne(l.latitude) && Ne(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Ws(n, l) {
  var _, z, F;
  const i = xl(n), c = i ? mh(l, i.lat, i.lon) : {}, m = (_ = n == null ? void 0 : n.states) == null ? void 0 : _["sun.sun"], x = yr(l).getTime(), k = (q) => {
    const G = q ? new Date(q) : null;
    return G && Number.isFinite(G.getTime()) && yr(G).getTime() === x ? G : null;
  }, A = k((z = m == null ? void 0 : m.attributes) == null ? void 0 : z.next_rising), S = k((F = m == null ? void 0 : m.attributes) == null ? void 0 : F.next_setting);
  return A && (c.rise = A), S && (c.set = S), c;
}
function bh(n) {
  var c;
  const l = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = xl(n);
  return i ? vd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const $r = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", zs = (n, l) => {
  var c;
  const i = (c = n.entities) == null ? void 0 : c[l];
  return !i || !i.hidden && !i.entity_category;
}, sa = (n, l, i) => {
  var c, m;
  for (const x of l) {
    const k = (c = n.states) == null ? void 0 : c[x];
    if (!$r(k)) continue;
    const A = (m = k.attributes) == null ? void 0 : m[i];
    if (A != null && A !== "") return { stateObj: k, value: A };
  }
}, wh = (n, l) => l.map((i) => {
  var c;
  return (c = n.states) == null ? void 0 : c[i];
}).find($r), xh = (n, l, i) => l.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return $r(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & ah[i]);
});
function wr(n, l, i) {
  var x, k, A, S;
  const c = ((k = (x = n.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", m = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
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
      return m.temperature_unit || ((S = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : S.temperature) || "";
  }
}
function ud(n, l, i, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...x] = n.formatEntityAttributeValueToParts(l, i, c).map((k) => k.value);
      return { number: m, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: we(c, n.locale), unit: wr(n, l, i) };
}
function Gc(n, l, i, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, c);
  } catch {
  }
  const m = ud(n, l, i, c);
  return (m.number + " " + m.unit).trim();
}
function ki(n, l) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Zf[l.state] || (i && Ne(l.state) ? we(l.state, n.locale) + " " + i : l.state);
}
function vr(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Uc = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", id = (n) => Vp.find(([, l]) => n <= l)[0];
function yh(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? Qf[l] : void 0;
  if (i === void 0) return;
  const c = th.findIndex((m) => n * i < m);
  return c === -1 ? 12 : c;
}
const Yc = (n, l) => {
  const i = l ? eh[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Zc = (n) => Object.keys(n.states || {}).find((l) => {
  var i, c;
  return l.startsWith("sensor.") && ((c = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : c.platform) === "moon";
}), Xd = (n) => Object.values(n.states || {}).filter((l) => {
  var i, c;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && zs(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function kh(n) {
  var i;
  const l = {};
  for (const [c, m] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (m && "integration_type" in m) {
      l[c] = m.categories;
      continue;
    }
    for (const [x, k] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) l[x] = k == null ? void 0 : k.categories;
  }
  return l;
}
const au = (n, l, i) => {
  var m, x, k;
  const c = (x = (m = n.entities) == null ? void 0 : m[i]) == null ? void 0 : x.platform;
  return !!c && !!((k = l[c]) != null && k.includes(Jf));
};
function Mh(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && md.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && zs(n, c.entity_id) && au(n, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    i.has(c.attributes.device_class) || i.set(c.attributes.device_class, c.entity_id);
  }), md.map((c) => i.get(c)).filter(Boolean);
}
const Sh = (n, l) => Object.values(n.states || {}).filter((i) => {
  var c, m;
  return i.entity_id.startsWith("sensor.") && zs(n, i.entity_id) && au(n, l, i.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[i.entity_id]) == null ? void 0 : m.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Kc(n, l, i) {
  const c = Math.max(l - n, 1e-6), m = i[i.length - 1], x = i.find((_) => c / _ <= 4) ?? m * Math.ceil(c / (4 * m)), k = Math.floor(n / x) * x;
  let A = Math.ceil(l / x) * x;
  A === k && (A = k + x);
  const S = [];
  for (let _ = k; _ <= A + x / 1e3; _ += x) S.push(_);
  return { min: k, max: A, ticks: S };
}
const Ch = (n, l, i) => {
  const c = (k) => [1, 3, 5].map((A) => parseInt(k.slice(A, A + 2), 16)), m = c(n), x = c(l);
  return "rgb(" + m.map((k, A) => Math.round(k + (x[A] - k) * i)).join(", ") + ")";
}, Th = (n, l, i, c) => {
  const m = i * Math.abs(1 - 2 * c), x = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + m + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, mn = ({ icon: n, name: l, sub: i, visual: c, double: m, backdrop: x, cls: k, zone: A, callouts: S }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Gp(n) + '</div><div class="wbText"><span class="wbName">' + Nt(l) + "</span>" + (i ? '<span class="wbSub">' + Nt(i) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (S != null && S.length ? '<div class="wbCallouts">' + S.slice(0, 3).map((_) => Array.isArray(_) ? '<span class="wbCallout"><span>' + Nt(_[0]) + "</span><span>" + Nt(_[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Nt(_) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + c + "</div>") + "</div>", rd = (n) => '<div class="wbZoneM">' + n + "</div>", oo = (n, l) => '<div class="wbValue"><span class="wbNum">' + Nt(n) + "</span>" + (l ? '<span class="wbUnitV">' + Nt(l) + "</span>" : "") + "</div>";
function Lh(n) {
  const l = n.max - n.min || 1, i = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, c = (A) => A / wl * 100 + "%", m = (A) => A.map((S) => S.t + "," + i(S.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + Si(A.rise ? De.sunsetUp : De.sunsetDown) + Nt(A.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + i(A) + '%">' + Nt(n.format(A)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + wl + ' 100" preserveAspectRatio="none">' + n.night.map(([A, S]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (S - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + wl + '" y1="' + i(A) + '" y2="' + i(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + m(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - i(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Nt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Nt(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + Nt(A.label) + "</span>").join("") + "</div></div>", k;
}
function $c(n, l, i = 120, c = 300) {
  const k = n.map((j) => j.value), A = Math.min(...k), S = Math.max(...k), _ = S - A || 1, z = (j) => j / (n.length - 1) * c, F = (j) => 18 + (1 - (j - A) / _) * (i - 18 - 18), q = n.map((j, ft) => [z(ft), F(j.value)]), G = q.length > 2 ? Op(q) : "M" + q.map((j) => j[0].toFixed(1) + " " + j[1].toFixed(1)).join("L"), st = k.indexOf(S), et = k.indexOf(A), K = (j) => j === 0 ? "start" : j === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + c + " " + i + '" aria-hidden="true">' + qp(c, 18, i - 18) + ('<path class="wbArea" d="' + G + "L" + c + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + G + '" vector-effect="non-scaling-stroke"></path><text x="' + z(st) + '" y="' + (F(S) - 6) + '" text-anchor="' + K(st) + '">' + Nt(l(S)) + '</text><text x="' + z(et) + '" y="' + (F(A) + 14) + '" text-anchor="' + K(et) + '">' + Nt(l(A)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Nt(n[0].label) + '</text><text x="' + c + '" y="' + i + '" text-anchor="end">' + Nt(n[n.length - 1].label) + "</text></svg>";
}
function Ah(n, l) {
  const x = n.map((F) => F.value).concat([]), k = Math.min(...x) - 2, A = Math.max(...x) + 1, S = A - k || 1, _ = 300 / n.length, z = (F) => (1 - (F - k) / S) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, q) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (q * _ + _ * 0.2) + '" y="' + z(F.value) + '" width="' + _ * 0.6 + '" height="' + (104 - z(F.value)) + '" rx="6"></rect><text x="' + (q * _ + _ / 2) + '" y="120" text-anchor="middle">' + Nt(F.label) + "</text>").join("") + "</svg>";
}
const Eh = [
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
], _h = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Xc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Dh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Bh = 0;
function Jc(n, { getHass: l, entityId: i, style: c = "bitmap", motion: m = !0, cards: x, onOpen: k, hoursWindow: A } = {}) {
  var uo, Ar;
  const S = "wb" + ++Bh + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = c;
  const z = document.createElement("div");
  z.className = "wbBento", _.appendChild(z), n.replaceChildren(_);
  const F = ["aq_tile", "pollen_tile", "radar_tile"], q = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((u) => !x || x.includes(u)), G = { current: "wide", hourly: "wide", compared_to_average: "double" }, st = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], et = {};
  q.forEach((u) => {
    const g = document.createElement("div");
    g.className = "wbItem", g.dataset.card = u, g.dataset.size = G[u] || "tile", g.hidden = !0, st.includes(u) && (g.dataset.xl = ""), z.appendChild(g), et[u] = { el: g, html: null };
  });
  let K = !1, j = null, ft = 0, mt = -1, bt = !1, nt = null;
  const Q = "homecore-next-view", E = (() => {
    try {
      return localStorage.getItem(Q);
    } catch {
      return null;
    }
  })(), Z = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: E === "bars" ? "bars" : "strip", aq: void 0 }, Mt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let tt = /* @__PURE__ */ new Date(), rt = /* @__PURE__ */ new Date();
  const at = {}, qt = {}, L = {}, P = (u) => {
    var g;
    return ((g = L[u]) == null ? void 0 : g.forecast) ?? [];
  }, B = (u, g) => {
    var y;
    return L[g] ? (y = u.states) == null ? void 0 : y[L[g].entityId] : void 0;
  };
  function W(u) {
    const g = qt[u];
    g && (g.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete qt[u]), L[u] && delete L[u];
  }
  function yt(u, g, y) {
    var I;
    if (typeof ((I = u.connection) == null ? void 0 : I.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(u.connection.subscribeMessage((V) => {
        K || qt[g] !== C || (V != null && V.forecast ? L[g] = { entityId: y, forecast: V.forecast } : delete L[g], Xn());
      }, { type: "weather/subscribe_forecast", forecast_type: g, entity_id: y }));
    } catch (V) {
      C.unsub = Promise.reject(V);
    }
    C.unsub.catch(() => {
      qt[g] === C && delete qt[g];
    }), qt[g] = C;
  }
  function wt(u, g) {
    var y;
    for (const C of ["daily", "hourly"]) {
      const I = xh(u, g, C);
      ((y = qt[C]) == null ? void 0 : y.entityId) !== (I == null ? void 0 : I.entity_id) && (W(C), I && yt(u, C, I.entity_id));
    }
  }
  const X = (u, g, y, C = !1) => u.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [g],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function kt(u, g) {
    var Y, ct, J;
    const y = sa(u, g, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, I = await X(u, C, new Date(Date.now() - 3 * _e)), V = (J = (ct = (Y = I == null ? void 0 : I[C]) == null ? void 0 : Y.find((vt) => {
      var xt;
      return typeof ((xt = vt.a) == null ? void 0 : xt.pressure) == "number";
    })) == null ? void 0 : ct.a) == null ? void 0 : J.pressure;
    Mt.pressureHistory = typeof V == "number" ? { entityId: C, value: V } : void 0;
  }
  async function St(u, g) {
    var ct;
    const y = sa(u, g, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, I = yr(/* @__PURE__ */ new Date()), V = await X(u, C, new Date(I.getTime() - zf * Bn)), Y = /* @__PURE__ */ new Map();
    for (const J of (V == null ? void 0 : V[C]) ?? []) {
      const vt = (ct = J.a) == null ? void 0 : ct.temperature, xt = new Date((J.lc ?? J.lu) * 1e3);
      if (typeof vt != "number" || xt >= I) continue;
      const Ct = xt.toDateString();
      Y.set(Ct, Math.max(Y.get(Ct) ?? -1 / 0, vt));
    }
    Mt.temperatureHistory = { entityId: C, dailyHighs: [...Y.values()], days: [...Y.entries()].map(([J, vt]) => ({ date: new Date(J), high: vt })) };
  }
  async function Xt(u) {
    const g = Xd(u);
    if (!g) return;
    const y = await u.callWS({ type: "recorder/statistic_during_period", statistic_id: g, rolling_window: { duration: { hours: 24 } } });
    Mt.rain = { entityId: g, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function oe() {
    const u = l == null ? void 0 : l();
    if (!u || K || typeof u.callWS != "function") return;
    const g = Sa(u);
    Mt.lastFetch = Date.now(), [kt(u, g), St(u, g), Xt(u)].forEach((y) => y.then(() => Xn(), () => {
    }));
  }
  async function na() {
    const u = l == null ? void 0 : l();
    if (!u) return;
    const g = sa(u, Sa(u), "temperature");
    if (!g) return;
    const y = g.stateObj.entity_id, C = yr(/* @__PURE__ */ new Date());
    try {
      const I = await X(u, y, C), V = (Y) => ((I == null ? void 0 : I[y]) ?? []).map((ct) => {
        var J;
        return { time: ct.lu * 1e3, value: (J = ct.a) == null ? void 0 : J[Y] };
      }).filter((ct) => typeof ct.value == "number");
      Mt.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: V("temperature"), humidity: V("humidity") }, Xn();
    } catch {
    }
  }
  async function xe(u) {
    const g = l == null ? void 0 : l();
    if (g)
      try {
        const y = await X(g, u, new Date(Date.now() - 24 * _e), !0), C = ((y == null ? void 0 : y[u]) ?? []).filter((V) => Ne(V.s)), I = Math.max(1, Math.ceil(C.length / 48));
        Mt.aqHistory = { entityId: u, points: C.filter((V, Y) => Y % I === 0).map((V) => ({ label: Ja(new Date(V.lu * 1e3), g), value: Number(V.s) })) }, Xn();
      } catch {
      }
  }
  function Ai(u) {
    Mt.categories === void 0 && (Mt.categories = null, Promise.resolve().then(() => u.callWS({ type: "integration/descriptions" })).then((g) => {
      Mt.categories = kh(g);
    }, () => {
      Mt.categories = {};
    }).then(() => Xn()));
  }
  function Sa(u) {
    var y;
    const g = Object.keys(u.states || {}).filter((C) => C.startsWith("weather.") && zs(u, C)).sort();
    return i && ((y = u.states) != null && y[i]) ? [i, ...g.filter((C) => C !== i)] : g;
  }
  const Pt = (u) => Mt.categories ? { air: Mh(u, Mt.categories), pollen: Sh(u, Mt.categories) } : { air: [], pollen: [] };
  function de(u, g, y, C) {
    if (c === "line") return '<span class="wbWx wbS' + g + ' wbLineIcon" aria-hidden="true">' + Zd(u, y || u === "clear-night") + "</span>";
    if (c === "smooth") {
      const I = cf(u, g === 90, y, S + "g-" + C);
      return '<span class="wbWx wbS' + g + " wb" + I.k[0].toUpperCase() + I.k.slice(1) + (I.night ? " wbNight" : "") + '" aria-hidden="true">' + I.svg + "</span>";
    }
    return '<span class="wbWx wbS' + g + '" aria-hidden="true"><canvas data-wb-wx="' + Nt(bd(u, y)) + '" data-size="' + g + '"></canvas></span>';
  }
  const la = () => P("daily").filter((u) => u.templow != null).slice(0, Nf);
  function Jt(u, g) {
    const y = new Date(g.datetime), C = /* @__PURE__ */ new Date();
    return qs(y, C) ? Lt.today : qs(y, new Date(C.getTime() + Bn)) ? Lt.tomorrow : zc(y, u);
  }
  const We = (u, g, y) => y === 0 ? Jt(u, g) : zc(new Date(g.datetime), u);
  function Xr(u, g) {
    var xt, Ct, jt, zt;
    const y = wh(u, g);
    if (!y) return "";
    const C = la(), I = Z.openDay !== void 0 ? C[Z.openDay] : void 0, V = sa(u, g, "temperature"), Y = C[0], ct = Y && qs(new Date(Y.datetime), /* @__PURE__ */ new Date()), J = ((Ct = (xt = u.config) == null ? void 0 : xt.unit_system) == null ? void 0 : Ct.temperature) || ((jt = y.attributes) == null ? void 0 : jt.temperature_unit) || "";
    let vt = '<div class="wbCard wbWeather' + (I ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (I ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Nt(Lt.openPage) + '">' : '<div class="wbCurrent">') + de(y.state, 90, bh(u), "now") + '<div class="wbTempBlock">' + (V && Ne(V.value) ? '<div class="wbTemp"><span class="wbDeg">' + Nt(we(Math.round(Number(V.value)), u.locale)) + '</span><span class="wbUnit">' + Nt(J) + "</span></div>" : "") + '<div class="wbPlace">' + Nt(((zt = u.config) == null ? void 0 : zt.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Nt(ki(u, y)) + "</div>" + (ct && Y.templow != null ? '<div class="wbRange">' + Nt(Xa(Lt.range, { high: Ye(u, Y.temperature), low: Ye(u, Y.templow) })) + "</div>" : "") + "</div></div>";
    if (vt += kr(u) + Ei(u), C.length) {
      const At = ct && V && Ne(V.value) ? Ye(u, V.value) : "", Yt = (Ot, Tt, ie) => Ot === 0 && At ? '<span class="wbAsDay">' + Nt(Tt) + '</span><span class="wbAsNow">' + Nt(ie) + "</span>" : Nt(Tt);
      vt += '<div class="wbColumns" role="list">' + C.map((Ot, Tt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="col-' + Tt + '"><span class="wbDay">' + Yt(Tt, We(u, Ot, Tt), Lt.now) + "</span>" + de(Ot.condition ?? "cloudy", 60, !1, "col" + Tt) + '<span class="wbTemps"><span class="wbHi">' + Yt(Tt, Ye(u, Ot.temperature), At) + '</span><span class="wbLo">' + Nt(Ye(u, Ot.templow)) + "</span></span></button>").join("") + "</div>", vt += '<div class="wbHalves" role="list">' + C.map((Ot, Tt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="half-' + Tt + '">' + de(Ot.condition ?? "cloudy", 40, !1, "half" + Tt) + '<span class="wbText"><span class="wbName">' + Nt(Jt(u, Ot)) + '</span><span class="wbSub">' + Nt(Xa(Lt.highLow, { high: Ye(u, Ot.temperature), low: Ye(u, Ot.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return vt + "</div>" + (I ? ce(u, g, I) : "") + "</div>";
  }
  const he = {
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
  }, Qt = {
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
  function Kt(u) {
    const g = Date.now(), y = P("hourly").filter((Ct) => new Date(Ct.datetime).getTime() > g - _e).slice(0, 13);
    if (y.length < 2) return "";
    const C = (Ct) => Ja(new Date(Ct.datetime), u), I = (Ct) => he[Ct.condition] || "", V = (Ct) => Qt[Ct.condition] || Ct.condition;
    let Y = I(y[0]);
    if (!Y) return "";
    let ct = y[0], J = 0;
    for (const Ct of y.slice(1))
      J === 2 || V(Ct) === V(ct) || !I(Ct) || (Y += (J ? " and " : ", ") + I(Ct) + " from " + C(Ct), ct = Ct, J++);
    const vt = Number(y[0].temperature), xt = y.filter((Ct) => Ne(Ct.temperature));
    if (Ne(vt) && xt.length) {
      const Ct = xt.reduce((zt, At) => Number(At.temperature) < Number(zt.temperature) ? At : zt), jt = xt.reduce((zt, At) => Number(At.temperature) > Number(zt.temperature) ? At : zt);
      vt - Number(Ct.temperature) >= 3 ? Y += ", down to " + Ye(u, Ct.temperature) + " by " + C(Ct) : Number(jt.temperature) - vt >= 3 && (Y += ", up to " + Ye(u, jt.temperature) + " by " + C(jt));
    }
    return Y[0].toUpperCase() + Y.slice(1) + ".";
  }
  const kr = (u) => {
    const g = Kt(u);
    return g ? '<div class="wbSummary"><p class="wbSummaryText">' + Nt(g) + "</p></div>" : "";
  };
  function Ei(u) {
    const [g, y] = nd[A == null ? void 0 : A()] || nd.day, C = Date.now(), I = P("hourly").filter((V) => {
      const Y = new Date(V.datetime), ct = Y.getHours();
      return Y.getTime() > C - _e / 2 && ct >= g && ct < y && Ne(V.temperature);
    }).slice(0, 4);
    return I.length ? '<div class="wbNextHours" role="list">' + I.map((V, Y) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Nt(Ja(new Date(V.datetime), u)) + "</span>" + de(V.condition ?? "cloudy", 40, V.is_daytime === !1, "hr" + Y) + '<span class="wbHourTemp">' + Nt(Ye(u, V.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Mr(u) {
    const g = u.getTime(), y = Date.now() - _e;
    return P("hourly").filter((C) => {
      const I = new Date(C.datetime).getTime();
      return I >= g && I < g + Bn && I > y;
    });
  }
  function en(u) {
    if (!u.length) return ["temperature"];
    const g = ["temperature"];
    return u.some((y) => y.precipitation != null || y.precipitation_probability != null) && g.push("precipitation"), u.some((y) => y.humidity != null) && g.push("humidity"), g;
  }
  function ce(u, g, y) {
    const C = yr(new Date(y.datetime)), I = Mr(C), V = en(I), Y = V.includes(Z.dayMode) ? Z.dayMode : "temperature", ct = (J) => J === "humidity" ? Lt.humidity : Lt.modes[J];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + de(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Nt(Jt(u, y)) + '</span><span class="wbSub">' + Nt(Xa(Lt.highLow, { high: Ye(u, y.temperature), low: Ye(u, y.templow) })) + '</span></div><button class="wbBack" title="' + Nt(Lt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Si(De.back) + "</button></div>" + (V.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + V.map((J) => '<button aria-pressed="' + (J === Y) + '" data-wb="day-mode" data-mode="' + J + '" data-wb-focus="day-mode-' + J + '">' + Nt(ct(J)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Lh(da(u, g, C, I, Y)) + "</div></div>";
  }
  function da(u, g, y, C, I) {
    var Jn;
    const V = y.getTime(), Y = Date.now(), ct = qs(y, /* @__PURE__ */ new Date()), J = (ge) => (ge - V) / Va, vt = (ge) => Ja(new Date(ge), u), xt = (ge) => new Date(ge.datetime).getTime(), Ct = [0, 3, 6, 9, 12, 15, 18, 21].map((ge) => ({ t: ge * 60, label: vt(V + ge * _e), minor: ge % 6 !== 0 })), { rise: jt, set: zt } = Ws(u, y), At = [], Yt = [];
    jt && (At.push({ t: J(jt.getTime()), label: vt(jt.getTime()), rise: !0 }), Yt.push([0, J(jt.getTime())])), zt && (At.push({ t: J(zt.getTime()), label: vt(zt.getTime()), rise: !1 }), Yt.push([J(zt.getTime()), wl]));
    const Ot = xl(u);
    !jt && !zt && Ot && vd(new Date(V + Bn / 2), Ot.lat, Ot.lon) < 0 && Yt.push([0, wl]);
    const Tt = ct ? J(Y) : void 0, ie = { hours: Ct, sun: At, night: Yt };
    if (!C.length && !ct) return { ...ie, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Lt.noHourly };
    if (I === "precipitation") {
      const ge = C.some((ma) => ma.precipitation_probability != null), Qn = C.map((ma) => ({ t: J(xt(ma)), v: Number((ge ? ma.precipitation_probability : ma.precipitation) ?? 0) })), ln = wr(u, B(u, "hourly"), "precipitation"), Ua = Math.max(0, ...Qn.map((ma) => ma.v)), to = ge ? 100 : Kc(0, Math.max(Ua, 1), [0.5, 1, 2, 5, 10]).max, Ho = (ma) => ge ? we(ma, u.locale) + "%" : we(ma, u.locale, { maximumFractionDigits: 1 }) + " " + ln, oi = Qn.find((ma) => ma.v === Ua);
      return {
        ...ie,
        kind: "bars",
        points: Qn,
        min: 0,
        max: to,
        ticks: [0, to / 2, to],
        format: Ho,
        now: Tt !== void 0 ? { t: Tt, v: 0 } : void 0,
        peak: oi && Ua > 0 ? { t: oi.t + 30, v: oi.v, label: Ho(oi.v) } : void 0,
        note: Ua > 0 ? void 0 : Lt.noRain
      };
    }
    const Zt = I === "humidity" ? "humidity" : "temperature", Te = C.filter((ge) => ge[Zt] != null && (!ct || xt(ge) >= Y)).map((ge) => ({ t: J(xt(ge)), v: Number(ge[Zt]) }));
    let Ht, He = [];
    if (Tt !== void 0) {
      const ge = sa(u, g, Zt);
      ge && Ne(ge.value) && (Ht = { t: Tt, v: Number(ge.value) }, Te.unshift(Ht)), He = (((Jn = Mt.todayHistory) == null ? void 0 : Jn.day) === y.toDateString() ? Mt.todayHistory[Zt] : []).filter((ln) => ln.time <= Y).map((ln) => ({ t: Math.max(0, J(ln.time)), v: ln.value })), Ht && He.length && He.push(Ht);
    }
    const Ge = [...He, ...Te];
    if (!Ge.length) return { ...ie, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Lt.noHourly };
    const Aa = Ge.map((ge) => ge.v), sn = Kc(Math.min(...Aa), Math.max(...Aa), Zt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Zt === "humidity" && (sn.min = Math.max(0, sn.min), sn.max = Math.min(100, sn.max), sn.ticks = sn.ticks.filter((ge) => ge >= 0 && ge <= 100));
    const ni = Zt === "humidity" ? (ge) => we(ge, u.locale) + "%" : (ge) => Ye(u, ge), Oa = Zt === "temperature" ? Ge.reduce((ge, Qn) => Qn.v > ge.v ? Qn : ge) : void 0;
    return { ...ie, kind: "line", points: Te, past: He, ...sn, format: ni, now: Ht, peak: Oa ? { ...Oa, label: ni(Oa.v) } : void 0 };
  }
  function ha(u) {
    const g = ["temperature"];
    return u.some((y) => y.precipitation_probability != null || y.precipitation != null) && g.push("precipitation"), u.some((y) => y.wind_speed != null) && g.push("wind"), g;
  }
  function _i(u, g, y = Pc) {
    var V, Y;
    const C = P("daily"), I = [];
    for (let ct = 0; ct < y; ct++) for (const J of [!1, !0]) {
      const vt = u.getTime() + (ct * 24 + (J ? 12 : 0)) * _e, xt = vt + 12 * _e, Ct = {};
      g.forEach((zt) => {
        const At = new Date(zt.datetime).getTime();
        zt.condition && At >= vt && At < xt && (Ct[zt.condition] = (Ct[zt.condition] ?? 0) + (Wf.has(zt.condition) ? 2 : 1));
      });
      let jt = (V = Object.entries(Ct).sort((zt, At) => At[1] - zt[1])[0]) == null ? void 0 : V[0];
      if (!jt) {
        const zt = new Date(vt).toDateString();
        jt = ((Y = C.find((At) => new Date(At.datetime).toDateString() === zt)) == null ? void 0 : Y.condition) ?? "cloudy";
      }
      I.push({ cond: J && jt === "sunny" ? "clear-night" : jt, night: J });
    }
    return I;
  }
  function Sr(u, g, y) {
    const C = B(u, "hourly"), I = g.precipitation_probability != null ? we(g.precipitation_probability, u.locale) + "%" : "", V = g.precipitation ? we(g.precipitation, u.locale) + " " + wr(u, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return I ? [I, V] : [V || "–", ""];
      case "wind":
        return g.wind_speed != null ? [we(Math.round(g.wind_speed), u.locale), wr(u, C, "wind_speed")] : ["–", ""];
      default:
        return [Ye(u, g.temperature), (g.precipitation_probability ?? 0) >= 20 ? I : ""];
    }
  }
  function Ut(u, g, y) {
    const [C, I] = nd[A == null ? void 0 : A()] || nd.day, V = [];
    for (let Y = 0; Y < 4 && V.length < 3; Y++) {
      const ct = /* @__PURE__ */ new Date();
      ct.setHours(0, 0, 0, 0), ct.setDate(ct.getDate() + Y);
      const J = new Date(ct);
      J.setHours(I, 0, 0, 0), ct.setHours(C, 0, 0, 0), !(J.getTime() <= y || !g.some((vt) => {
        const xt = new Date(vt.datetime).getTime();
        return xt >= ct.getTime() && xt <= J.getTime();
      })) && V.push({ a: ct.getTime(), b: J.getTime(), label: Jt(u, { datetime: ct.toISOString() }) });
    }
    return V;
  }
  function Bt(u, g, y, C, I, V) {
    const Y = (y.b - g.a) / _e, ct = (Tt) => ((Tt - g.a) / _e).toFixed(3), J = 80, vt = 32, xt = [];
    for (const Tt = new Date(g.a - Bn); Tt.getTime() < y.b + Bn; Tt.setDate(Tt.getDate() + 1)) {
      const { rise: ie, set: Zt } = Ws(u, new Date(Tt));
      ie && Zt && xt.push({ rise: ie.getTime(), set: Zt.getTime() });
    }
    const Ct = (Tt, ie) => J - (J - vt) * Math.sin(Math.PI * (ie - Tt.rise) / (Tt.set - Tt.rise)), jt = (Tt) => !xt.some((ie) => Tt >= ie.rise && Tt <= ie.set);
    let zt = "", At = "", Yt = "";
    xt.forEach((Tt, ie) => {
      const Zt = [];
      for (let Ht = Tt.rise; Ht <= Tt.set; Ht += 15 * Va) Zt.push(ct(Ht) + "," + Ct(Tt, Ht).toFixed(2));
      Zt.push(ct(Tt.set) + "," + J), zt += '<polyline class="wbLineArc" points="' + Zt.join(" ") + '"/>';
      const Te = xt[ie + 1];
      Te && (zt += '<rect class="wbLineNight" x="' + ct(Tt.set) + '" y="0" width="' + ((Te.rise - Tt.set) / _e).toFixed(3) + '" height="100"/>'), [[Tt.rise, "↑"], [Tt.set, "↓"]].forEach(([Ht, He]) => {
        Ht < g.a || Ht > y.b || (At += '<line class="wbLineEdge" x1="' + ct(Ht) + '" x2="' + ct(Ht) + '" y1="0" y2="100"/>', Yt += '<span class="wbLineTime" style="left:' + V(Ht) + '">' + He + " " + Nt(Ja(new Date(Ht), u)) + "</span>");
      });
    });
    const Ot = xt.find((Tt) => I >= Tt.rise && I <= Tt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Y + ' 100" preserveAspectRatio="none" aria-hidden="true">' + zt + At + '<line class="wbLineHorizon" x1="0" x2="' + Y + '" y1="' + J + '" y2="' + J + '"/></svg>' + Yt + (Ot ? '<span class="wbLineNow" style="left:' + V(I) + ";top:" + Ct(Ot, I) + '%">' + Zd("sunny", !1) + "</span>" : "") + C.filter((Tt) => Tt.entry && !Tt.now).map((Tt) => '<span class="wbLineGlyph' + Tt.edge + '" style="left:' + V(Tt.t) + '">' + Zd(Tt.entry.condition ?? "cloudy", jt(Tt.t)) + "</span>").join("");
  }
  function Gt(u, g) {
    delete at.hourly;
    const y = Z.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Nt(y === "bars" ? Lt.nextDays : Lt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Nt(Lt.showAs) + '">' + ["strip", "bars"].map((Ht) => '<button aria-pressed="' + (Ht === y) + '" data-wb="hourly-view" data-view="' + Ht + '" data-wb-focus="hourly-view-' + Ht + '">' + Nt(Lt.views[Ht]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Ca(u, g, C);
    const I = P("hourly"), V = Math.floor(Date.now() / Va) * Va, Y = I.filter((Ht) => new Date(Ht.datetime).getTime() > V - _e);
    if (!Y.length) return "";
    const ct = ha(Y), J = ct.includes(Z.hourlyMode) ? Z.hourlyMode : "temperature", vt = Ut(u, I, V);
    if (!vt.length) return "";
    const xt = vt[0], Ct = vt[vt.length - 1], jt = (xt.b - xt.a) / _e, zt = (Ht) => "calc(var(--wb-u) * " + ((Ht - xt.a) / _e).toFixed(3) + ")", At = new Date(xt.a);
    At.setHours(6, 0, 0, 0), At.getTime() > xt.a && At.setDate(At.getDate() - 1);
    const Yt = Math.ceil((Ct.b - At.getTime()) / Bn);
    c !== "line" && (at.hourly = { segs: _i(At, I, Yt), seed: At.getDate(), columns: Yt });
    const Ot = (Ht) => Ht === xt.a ? " wbFirst" : Ht === Ct.b ? " wbLast" : "", Tt = [];
    for (let Ht = xt.a; Ht < Ct.b; ) {
      const He = new Date(Ht);
      He.setHours(24, 0, 0, 0);
      const Ge = Math.min(He.getTime(), Ct.b);
      Tt.push({ a: Ht, b: Ge, label: Jt(u, { datetime: new Date(Ht).toISOString() }), page: vt.find((Aa) => Aa.a >= Ht && Aa.a < Ge) || vt.find((Aa) => Aa.a < Ge && Aa.b > Ht) }), Ht = Ge;
    }
    const ie = V > xt.a && V < Ct.b ? Math.floor((V - xt.a) / (2 * _e)) * 2 : 0, Zt = [];
    for (let Ht = xt.a; Ht <= Ct.b; Ht += _e) {
      const He = new Date(Ht), Ge = Ot(Ht);
      !Ge && He.getHours() % Hf || !Ge && (Math.abs(xt.a - Ht) < 2 * _e || Math.abs(Ct.b - Ht) < 2 * _e) || V >= xt.a && Math.abs(Ht - V) < 1.5 * _e && !Ge || Zt.push({ t: Ht, edge: Ge, label: Ja(He, u), entry: Ht >= V - _e ? I.find((Aa) => new Date(Aa.datetime).getTime() === Ht) : void 0 });
    }
    V > xt.a && V < xt.b && Zt.push({ t: V, edge: V - xt.a < _e ? " wbFirst" : xt.b - V < _e ? " wbLast" : "", label: Lt.now, entry: Y[0], now: !0 });
    const Te = (Ht, He) => '<span class="wbMark' + Ht.edge + (Ht.now ? " wbNowMark" : "") + '" style="left:' + zt(Ht.t) + '">' + He + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (ct.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ct.map((Ht) => '<button aria-pressed="' + (Ht === J) + '" data-wb="hourly-mode" data-mode="' + Ht + '" data-wb-focus="hourly-mode-' + Ht + '">' + Nt(Lt.modes[Ht]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Nt(Lt.nextHours) + '" data-span="' + jt + '" data-start="' + ie + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + jt + ");width:calc(var(--wb-u) * " + (Ct.b - xt.a) / _e + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ct.b - xt.a) / (2 * _e)) + 1)].map((Ht, He) => '<i class="wbSnap" style="left:' + zt(xt.a + He * 2 * _e) + '"></i>').join("") + '<div class="wbDays">' + Tt.map((Ht, He) => {
      var Ge;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ht.b - Ht.a) / _e).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (He === 0 ? ie : ((((Ge = Ht.page) == null ? void 0 : Ge.a) ?? Ht.a) - xt.a) / _e) + '" data-wb-focus="hours-day-' + He + '">' + Nt(Ht.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Zt.map((Ht) => Te(Ht, Nt(Ht.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + Bt(u, xt, Ct, Zt, V, zt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + zt(At.getTime()) + ";width:calc(var(--wb-u) * " + Yt * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (V > xt.a ? '<i class="wbPast" style="width:' + zt(Math.min(V, Ct.b)) + '"></i><i class="wbNowLine" style="left:' + zt(V) + '"></i>' : "") + Tt.slice(1).map((Ht) => '<i class="wbMidnight" style="left:' + zt(Ht.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Zt.map((Ht) => {
      if (!Ht.entry) return "";
      const [He, Ge] = Sr(u, Ht.entry, J);
      return Te(Ht, '<span class="wbPrimaryV">' + Nt(He) + '</span><span class="wbSecondary">' + Nt(Ge) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ce(u) {
    const g = Ff, y = g.findIndex(([J]) => J >= u);
    if (y <= 0) return "rgb(" + g[y < 0 ? g.length - 1 : 0][1].join(",") + ")";
    const [C, I] = g[y - 1], [V, Y] = g[y], ct = (u - C) / (V - C);
    return "rgb(" + I.map((J, vt) => Math.round(J + (Y[vt] - J) * ct)).join(",") + ")";
  }
  function Ca(u, g, y) {
    var zt;
    const C = P("daily").filter((At) => Ne(At.templow) && Ne(At.temperature)).slice(0, 7);
    if (!C.length) return "";
    const I = Math.min(...C.map((At) => Number(At.templow))), V = Math.max(...C.map((At) => Number(At.temperature))), Y = Math.max(1, V - I), ct = (At) => Math.max(0, Math.min(100, (At - I) / Y * 100)).toFixed(2), J = /F/.test(wr(u, B(u, "daily"), "temperature")), vt = (At) => J ? (At - 32) / 1.8 : At, xt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((At) => Ce(vt(I + At * Y)) + " " + At * 100 + "%").join(",") + ")", Ct = (zt = sa(u, g, "temperature")) == null ? void 0 : zt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ha(P("hourly").filter((At) => new Date(At.datetime).getTime() > Date.now() - _e)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((At, Yt) => {
      const Ot = Jt(u, At), Tt = qs(new Date(At.datetime), /* @__PURE__ */ new Date()), ie = Number(At.templow), Zt = Number(At.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Nt(Xa(Lt.rangeRow, { day: Ot, low: Ye(u, ie), high: Ye(u, Zt) })) + '"><span class="wbRangeDay">' + Nt(Ot) + "</span>" + de(At.condition, 40, !1, "r" + Yt) + '<span class="wbRangeLo">' + Nt(Ye(u, ie)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + xt + ";clip-path:inset(0 " + (100 - ct(Zt)) + "% 0 " + ct(ie) + '% round 4px)"></i>' + (Tt && Ne(Ct) ? '<i class="wbRangeNow" style="left:' + ct(Number(Ct)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Nt(Ye(u, Zt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Gn = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Vt = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], te = (u, g) => {
    if (g <= u[0][0]) return u[0][1];
    for (let y = 1; y < u.length; y++) if (g <= u[y][0]) {
      const [C, I] = u[y - 1], [V, Y] = u[y];
      return Ch(I, Y, (g - C) / (V - C));
    }
    return u[u.length - 1][1];
  }, Ze = (u, g, y) => {
    if (!g || !y) return Gn[5][1];
    const C = (u.getTime() - y.getTime()) / Va;
    return C >= -90 ? te(Vt, C) : te(Gn, (u.getTime() - g.getTime()) / Va);
  }, Ao = (u) => (u >= 60 ? Math.floor(u / 60) + "h " : "") + u % 60 + "m";
  function an(u) {
    const g = tt, { rise: y, set: C } = Ws(u, g), I = y && C ? Math.round((C.getTime() - y.getTime()) / Va) : 0, V = Math.floor(I / 60), Y = I % 60, ct = (Te) => Te ? Ja(Te, u) : "–", J = new Date(g);
    J.setDate(J.getDate() + 1);
    const vt = Ws(u, J), xt = vt.rise && vt.set ? Math.round((vt.set.getTime() - vt.rise.getTime()) / Va) : 0, Ct = new Date(g);
    Ct.setDate(Ct.getDate() - 1);
    const jt = !!(y && C && g >= y && g <= C), zt = !!(y && g < y), At = jt ? y : zt ? Ws(u, Ct).set : C, Yt = jt ? C : zt ? y : vt.rise, Ot = At && Yt ? Math.min(1, Math.max(0, (g.getTime() - At.getTime()) / (Yt.getTime() - At.getTime()))) : 0, Tt = Yt ? Math.max(0, Math.round((Yt.getTime() - g.getTime()) / Va)) : 0, ie = Yt ? Ao(Tt) : "–", Zt = jt ? Lt.untilSunset : Lt.untilSunrise;
    return mn({
      icon: De.sunny,
      name: Lt.sun,
      sub: I ? Xa(Lt.daylightShort, { hours: V, minutes: Y }) : void 0,
      cls: "wbSunTile",
      callouts: [[Lt.callout.riseTomorrow, ct(vt.rise)], [Lt.callout.setTomorrow, ct(vt.set)], ...xt ? [[Lt.callout.dayTomorrow, Math.floor(xt / 60) + "h " + xt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Ze(g, y, C) + '"><svg class="wbSunTrack" data-up="' + (jt ? 1 : 0) + '" data-f="' + Ot.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Nt(ie) + '</span><span class="wbSunWord">' + Nt(Zt) + '</span></div><span class="wbSunAt wbSunRise">' + Nt(ct(y)) + '</span><span class="wbSunAt wbSunSet">' + Nt(ct(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      rd(oo(ie, ""))
    });
  }
  const ta = 22;
  function Un(u) {
    const g = Math.round(u.clientWidth), y = Math.round(u.clientHeight), C = ta, I = C / 2, V = g + "x" + y + ":" + u.dataset.f + ":" + u.dataset.up;
    if (g < C * 3 || y < C * 3 || u.dataset.drawn === V) return;
    u.dataset.drawn = V;
    const Y = "M" + I + " " + (y - C) + "V" + C + "A" + I + " " + I + " 0 0 1 " + C + " " + I + "H" + (g - C) + "A" + I + " " + I + " 0 0 1 " + (g - I) + " " + C + "V" + (y - C), ct = "M" + (g - I) + " " + (y - C) + "A" + I + " " + I + " 0 0 1 " + (g - C) + " " + (y - I) + "H" + C + "A" + I + " " + I + " 0 0 1 " + I + " " + (y - C), J = 16, vt = 6, xt = "M" + J + " 0H" + (g - J) + "A" + J + " " + J + " 0 0 1 " + g + " " + J + "V" + (y - J) + "A" + J + " " + J + " 0 0 1 " + (g - J) + " " + y + "H" + J + "A" + J + " " + J + " 0 0 1 0 " + (y - J) + "V" + J + "A" + J + " " + J + " 0 0 1 " + J + " 0ZM" + (C + vt) + " " + C + "A" + vt + " " + vt + " 0 0 0 " + C + " " + (C + vt) + "V" + (y - C - vt) + "A" + vt + " " + vt + " 0 0 0 " + (C + vt) + " " + (y - C) + "H" + (g - C - vt) + "A" + vt + " " + vt + " 0 0 0 " + (g - C) + " " + (y - C - vt) + "V" + (C + vt) + "A" + vt + " " + vt + " 0 0 0 " + (g - C - vt) + " " + C + "Z", Ct = u.dataset.up === "1", jt = Number(u.dataset.f) || 0, zt = "http://www.w3.org/2000/svg";
    u.setAttribute("viewBox", "0 0 " + g + " " + y);
    const At = document.createElementNS(zt, "path");
    At.setAttribute("d", Ct ? Y : ct), u.replaceChildren(At);
    const Yt = At.getTotalLength(), Ot = At.getPointAtLength(Yt * jt), Tt = Ct ? Yt : 0;
    u.innerHTML = '<defs><mask id="' + S + 'sun-day"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + S + 'sun-done"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (Ct ? (Tt * jt).toFixed(1) + " " + (Tt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + xt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + xt + '" mask="url(#' + S + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + xt + '" mask="url(#' + S + 'sun-done)"></path><circle class="wbSunDot' + (Ct ? "" : " wbSunNight") + '" cx="' + Ot.x.toFixed(1) + '" cy="' + Ot.y.toFixed(1) + '" r="' + I + '"></circle>';
  }
  const Ve = typeof ResizeObserver == "function" ? new ResizeObserver((u) => u.forEach((g) => Un(g.target))) : null;
  function Eo() {
    Ve == null || Ve.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((u) => {
      Un(u), Ve == null || Ve.observe(u);
    });
  }
  function _o(u, g, y) {
    const C = (Y) => S + "moon-" + Y, I = u > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Th(61, 61, 57.9, u) + '"' + (g ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", V = (Y, ct, J, vt, xt, Ct) => '<filter id="' + C(Y) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ct + '" numOctaves="' + J + '" seed="' + vt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((jt) => "<feFunc" + jt + ' type="linear" slope="' + xt + '" intercept="' + Ct + '"></feFunc' + jt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + V("mottle", "0.045", 4, 3, 1.8, -0.4) + V("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + Eh.map(([Y, ct, J, vt, xt, Ct]) => '<ellipse cx="' + Y + '" cy="' + ct + '" rx="' + J + '" ry="' + vt + '" fill-opacity="' + Ct + '" transform="rotate(' + xt + " " + Y + " " + ct + ')"></ellipse>').join("") + "</g>" + _h.map(([Y, ct, J]) => '<circle class="wbCrater" cx="' + Y + '" cy="' + ct + '" r="' + J + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + Dh.map(([Y, ct]) => '<line x1="54.4" y1="95" x2="' + Y + '" y2="' + ct + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + Xc.map(([Y, ct, J]) => '<circle cx="' + Y + '" cy="' + ct + '" r="' + J * 2 + '"></circle>').join("") + "</g>" + Xc.map(([Y, ct, J]) => '<circle class="wbBrightCenter" cx="' + Y + '" cy="' + ct + '" r="' + J + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + I + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Do(u) {
    const g = rt, y = xl(u), C = (y == null ? void 0 : y.lat) ?? 0, I = $d(g), V = Zc(u), Y = V ? u.states[V] : void 0, ct = $r(Y) && $f.includes(Y.state) ? Y.state : vh(I.phase), { rise: J, set: vt } = y ? gh(g, y.lat, y.lon) : {}, xt = I.phase > 0.5 != C < 0, Ct = we(Math.round(I.fraction * 100), u.locale) + "%", jt = J ?? vt;
    return jt && Ja(jt, u), mn({
      icon: De.night,
      name: Lt.moon,
      sub: Lt.phases[ct],
      callouts: [...J ? [[Lt.callout.moonrise, Ja(J, u)]] : [], ...vt ? [[Lt.callout.moonset, Ja(vt, u)]] : [], [Lt.callout.lit, Ct]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + _o(I.fraction, xt, C < 0) + "</div>" + rd(oo(we(Math.round(I.fraction * 100), u.locale), "%"))
    });
  }
  function ca(u, g) {
    var At;
    const y = sa(u, g, "wind_speed");
    if (!y || !Ne(y.value)) return "";
    const C = sa(u, g, "wind_gust_speed"), I = sa(u, g, "wind_bearing"), V = I && Ne(I.value) ? Number(I.value) : void 0, Y = yh(Number(y.value), (At = y.stateObj.attributes) == null ? void 0 : At.wind_speed_unit), ct = ud(u, y.stateObj, "wind_speed", y.value), J = V !== void 0 ? Lt.cardinal[Kf[((V + 11.25) / 22.5 | 0) % 16]] : void 0, vt = C ? Gc(u, C.stateObj, "wind_gust_speed", C.value) : void 0, xt = [J ? Xa(Lt.windFrom, { direction: J }) : void 0, Y !== void 0 ? Y + " " + Lt.beaufort : void 0].filter(Boolean).join(" · ") || vt, Ct = (Yt, Ot) => {
      const Tt = (Yt - 90) * Math.PI / 180;
      return [100 + Ot * Math.cos(Tt), 100 + Ot * Math.sin(Tt)];
    }, jt = Array.from({ length: 36 }, (Yt, Ot) => Ot * 10).map((Yt) => {
      const Ot = Yt % 90 === 0, [Tt, ie] = Ct(Yt, 97), [Zt, Te] = Ct(Yt, Ot ? 83 : 89);
      return '<line class="wbTick' + (Ot ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ie + '" x2="' + Zt + '" y2="' + Te + '"></line>';
    }).join(""), zt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Yt, Ot]) => {
      const [Tt, ie] = Ct(Ot, 64);
      return '<text class="wbLetter' + (Yt === "n" ? " wbNorth" : "") + '" x="' + Tt + '" y="' + ie + '">' + Nt(Lt.cardinal[Yt]) + "</text>";
    }).join("");
    return mn({ icon: De.windy, name: Lt.wind, sub: xt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + jt + zt + (V !== void 0 ? '<path class="wbMarker" transform="rotate(' + V + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Nt(ct.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Nt(ct.unit) + "</text></svg>" });
  }
  const Yn = (u, g) => {
    if (u < 3) return Lt.advice.fine;
    if (u < 8) return Lt.advice.sunblock;
    const y = Date.now(), C = P("hourly").find((I) => I.uv_index != null && new Date(I.datetime).getTime() > y && I.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Xa(Lt.advice.avoidUntil, { time: Ja(new Date(C.datetime), g) }) : Lt.advice.avoidToday;
  };
  function Di(u, g) {
    const y = sa(u, g, "uv_index");
    if (!y || !Ne(y.value)) return "";
    const C = Number(y.value), I = Lt.uvLevel[Uc(C)], V = /* @__PURE__ */ new Date();
    V.setHours(23, 59, 59, 999);
    const Y = P("hourly").filter((xt) => xt.uv_index != null && new Date(xt.datetime) > /* @__PURE__ */ new Date() && new Date(xt.datetime) <= V).reduce((xt, Ct) => !xt || Ct.uv_index > xt.uv ? { uv: Ct.uv_index, time: new Date(Ct.datetime) } : xt, void 0), ct = Xf[Uc(C)], J = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), vt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + S + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + J.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + ct + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + ct + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + ct + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + J.toFixed(1) + '" fill="url(#' + S + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Nt(we(Math.round(C), u.locale)) + '</span><span class="wbUvWord">' + Nt(I) + "</span></div>" + rd(oo(we(Math.round(C), u.locale), ""));
    return mn({
      icon: De.sunnyAlert,
      name: Lt.metrics.uv_index,
      sub: Y && Y.uv > C ? Xa(Lt.uvPeak, { level: I, uv_index: we(Math.round(Y.uv), u.locale), time: Ja(Y.time, u) }) : I,
      zone: vt,
      cls: "wbUv",
      callouts: [Yn(C, u), [Lt.callout.now, we(Math.round(C), u.locale) + " · " + I], [Lt.callout.peak, Y && Y.uv > C ? we(Math.round(Y.uv), u.locale) + " at " + Ja(Y.time, u) : Lt.callout.now]]
    });
  }
  function Cr(u) {
    const g = P("daily")[0], y = Mt.temperatureHistory;
    if (!g || new Date(g.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ne(g.temperature) || !y || y.dailyHighs.length < Vf) return "";
    const C = Number(g.temperature), I = y.dailyHighs.reduce((Ot, Tt) => Ot + Tt, 0) / y.dailyHighs.length, V = Math.round(C - I) || 0, Y = V > 0 ? "above" : V < 0 ? "below" : "same", ct = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], J = ct.map((Ot) => Ot.high).concat(I), vt = Math.min(...J) - 1, xt = Math.max(...J) + 1, Ct = (Ot) => (1 - (Ot - vt) / (xt - vt)) * 100, jt = (Ot) => (Ot + 0.5) / ct.length * 100, zt = ct.map((Ot, Tt) => [jt(Tt), Ct(Ot.high)]), At = zt.map(([Ot, Tt], ie) => (ie ? "L" : "M") + Ot.toFixed(2) + " " + Tt.toFixed(2)).join(""), Yt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + S + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + At + "L" + zt[zt.length - 1][0].toFixed(2) + " 100L" + zt[0][0].toFixed(2) + ' 100Z" fill="url(#' + S + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Ct(I).toFixed(2) + '" y2="' + Ct(I).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + At + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Ct(I).toFixed(2) + '%">' + Nt(Ye(u, I)) + "</span>" + ct.map((Ot, Tt) => {
      const ie = Ot.today ? " wbToday" : "", Zt = "left:" + jt(Tt).toFixed(2) + "%;top:" + Ct(Ot.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + ie + '" style="' + Zt + '"></i><span class="wbAvgValue' + ie + '" style="' + Zt + '">' + Nt(Ye(u, Ot.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + ct.map((Ot, Tt) => '<span class="wbAvgDay' + (Ot.today ? " wbToday" : "") + '" style="left:' + jt(Tt).toFixed(2) + '%">' + Nt(rh(Ot.date, u)) + "</span>").join("") + "</div></div>";
    return mn({
      icon: De.chartLine,
      name: Lt.metrics.compared_to_average,
      double: !0,
      sub: Xa(Lt.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (V > 0 ? "+" : "") + Nt(Ye(u, V)) + '</div><div class="wbCompareWords">' + Nt(Lt.average[Y]) + '</div><div class="wbCompareTemps">' + Nt(Xa(Lt.todayVsAverage, { today: Ye(u, C), average: Ye(u, I) })) + "</div></div>" + Yt + "</div>"
    });
  }
  function nn(u, g) {
    const y = sa(u, g, "humidity");
    if (!y || !Ne(y.value)) return "";
    const C = sa(u, g, "dew_point"), I = Math.max(0, Math.min(100, Number(y.value)));
    return mn({
      icon: De.waterPercent,
      name: Lt.metrics.humidity,
      sub: C && Ne(C.value) ? Xa(Lt.dewPoint, { dew_point: Ye(u, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + I + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + oo(we(Math.round(Number(y.value)), u.locale), "%") + "</div>"
    });
  }
  function Gs(u, g) {
    var Ot, Tt, ie;
    const y = sa(u, g, "pressure");
    if (!y || !Ne(y.value)) return "";
    const C = Number(y.value), I = (Ot = y.stateObj.attributes) == null ? void 0 : Ot.pressure_unit, V = Yc(C, I), Y = ((Tt = Mt.pressureHistory) == null ? void 0 : Tt.entityId) === y.stateObj.entity_id ? Yc(Mt.pressureHistory.value, I) : void 0;
    let ct;
    if (V !== void 0 && Y !== void 0) {
      const Zt = V - Y;
      ct = Zt >= Hc ? "rising" : Zt <= -Hc ? "falling" : "steady";
    }
    const J = ud(u, y.stateObj, "pressure", Math.round(C)), vt = y.stateObj, xt = (Zt) => I === "inHg" ? Math.round(Zt * 100) / 100 : Math.round(Zt), Ct = (Zt) => Gc(u, vt, "pressure", xt(Zt)), jt = Y !== void 0 ? Mt.pressureHistory.value : void 0, zt = jt !== void 0 ? xt(C - jt) : void 0, At = (ie = vt.entity_id) != null && ie.startsWith("weather.") ? P("hourly").find((Zt) => Ne(Zt.pressure) && new Date(Zt.datetime).getTime() >= Date.now() + 3 * _e - 30 * Va) : void 0, Yt = [
      ...ct ? [Lt.advice[ct]] : [],
      ...jt !== void 0 ? [[Lt.callout.hoursAgo, Ct(jt)], [Lt.callout.change, (zt > 0 ? "+" : zt < 0 ? "−" : "") + Ct(Math.abs(zt))]] : [],
      ...At ? [[Lt.callout.inHours, Ct(Number(At.pressure))]] : []
    ];
    return mn({
      icon: De.gauge,
      name: Lt.metrics.pressure,
      sub: ct ? Lt.pressure[ct] : void 0,
      cls: "wbPressure",
      callouts: Yt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + oo(J.number) + '<span class="wbTapeUnit">' + Nt(J.unit) + "</span></div>" + (V !== void 0 ? Zn(u, V) : "") + "</div>"
    });
  }
  function Zn(u, g) {
    const I = Math.floor(g) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (V, Y) => I + Y).map((V) => {
      const Y = 100 - (V - g) * 9;
      if (Y < 22 || Y > 178) return "";
      const ct = V % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Y - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ct ? 2 : 8) + '" x2="26" y1="' + Y + '" y2="' + Y + '"></line>' + (ct ? '<text class="wbTapeLabel" x="33" y="' + Y + '">' + Nt(we(V, u.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Nt(Lt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Nt(Lt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function kn(u) {
    var J, vt;
    const g = Xd(u), y = g ? u.states[g] : void 0;
    if (!y || ((J = Mt.rain) == null ? void 0 : J.entityId) !== g || !Ne(Mt.rain.change)) return "";
    const C = ((vt = y.attributes) == null ? void 0 : vt.unit_of_measurement) ?? "", I = B(u, "hourly"), V = Date.now() + Bn, Y = P("hourly").filter((xt) => xt.precipitation != null && new Date(xt.datetime).getTime() <= V), ct = Y.reduce((xt, Ct) => xt + Number(Ct.precipitation), 0);
    return mn({
      icon: De.rainy,
      name: Lt.metrics.precipitation,
      sub: I && Y.length ? Xa(Lt.rainExpected, { amount: we(ct, u.locale, { maximumFractionDigits: 1 }) + " " + wr(u, I, "precipitation") }) : Lt.rainLast24h,
      visual: oo(we(Mt.rain.change, u.locale, { maximumFractionDigits: 1 }), C) + (Y.length > 1 ? Ah(Y.map((xt) => ({ label: "", value: Number(xt.precipitation) }))) : "")
    });
  }
  function Bi(u, g) {
    const y = sa(u, g, "visibility");
    if (!y || !Ne(y.value)) return "";
    const C = ud(u, y.stateObj, "visibility", y.value), I = xf(Number(y.value), wr(u, y.stateObj, "visibility"));
    return mn({
      icon: De.eyeOutline,
      name: Lt.metrics.visibility,
      sub: Lt.visibilityLevel[yf(I)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + I + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Nt(Rn(u, I)) + '</div><div class="wbSeaValue">' + oo(C.number, C.unit) + "</div></div>"
    });
  }
  function Rn(u, g) {
    var V;
    const y = wf((V = u.config) == null ? void 0 : V.country, g);
    if (y) return Xa(Lt.visibilityLandmarks, { from: y.from, to: y.to });
    const C = g / Yf * 60;
    if (C < 60) {
      const Y = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if (Y < 60) return Xa(Lt.walkMinutes, { minutes: we(Y, u.locale) });
    }
    const I = Math.max(1, Math.round(C / 30) / 2);
    return I < 8 ? Xa(Lt.walkHours, { hours: we(I, u.locale) }) : Lt.walkDay;
  }
  function Tr(u) {
    Mt.categories === void 0 && Ai(u);
    const g = Pt(u), y = (J) => J.map((vt) => u.states[vt]).filter($r), C = y(g.air), I = y(g.pollen);
    if (!C.length && !I.length) return "";
    const V = [...C, ...I], Y = (J) => I.includes(J) ? De.flower : De.airFilter, ct = V.find((J) => J.entity_id === Z.aq);
    return ct ? Pn(u, ct, Y(ct)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Nt(Lt.airQuality) + '</h2></div><div class="wbAqTiles">' + V.map((J) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Nt(J.entity_id) + '"><span class="wbChip">' + Si(Y(J)) + '</span><span class="wbText"><span class="wbName">' + Nt(vr(u, J)) + '</span><span class="wbSub">' + Nt(ki(u, J)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Pn(u, g, y) {
    var xt, Ct, jt;
    const C = ((xt = g.attributes) == null ? void 0 : xt.unit_of_measurement) ?? "", I = ((Ct = g.attributes) == null ? void 0 : Ct.device_class) === "pm25" && C === Oc && Ne(g.state), V = Number(g.state), Y = I ? id(V) : void 0, ct = ((jt = Mt.aqHistory) == null ? void 0 : jt.entityId) === g.entity_id ? Mt.aqHistory.points : void 0, J = (zt) => Math.min(100, Math.max(0, zt / od * 100));
    let vt;
    if (ct && ct.length > 1) vt = $c(ct, (zt) => (we(zt, u.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if (Y) {
      let zt = 0;
      const At = Vp.map(([Yt, Ot]) => {
        const Tt = J(Math.min(Ot, od)), ie = Fc[Yt] + " " + zt + "% " + Tt + "%";
        return zt = Tt, ie;
      });
      vt = '<div class="wbScale" role="meter" aria-label="' + Nt(Lt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + od + '" aria-valuenow="' + V + '" style="background:linear-gradient(to right, ' + At.join(", ") + ')"><i style="left:' + J(V) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + od + " " + Oc + "</span></div>";
    } else vt = '<span class="wbGraphNote"><span>' + Nt(ki(u, g)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Si(y) + '</span><span class="wbText"><span class="wbName">' + Nt(vr(u, g)) + '</span><span class="wbSub">' + Nt(ki(u, g)) + (Y ? " · " + Nt(Lt.aqLevel[Y]) : "") + '</span></span><button class="wbBack" title="' + Nt(Lt.back) + '" data-wb="aq-close">' + Si(De.back) + '</button></div><div class="wbGraph">' + vt + "</div></div></div>";
  }
  const Me = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Bo = (u) => u <= 50 ? "Good" : u <= 100 ? "Moderate" : u <= 150 ? "Unhealthy for some" : u <= 200 ? "Unhealthy" : u <= 300 ? "Very unhealthy" : "Hazardous";
  function qe(u) {
    const g = /* @__PURE__ */ new Map();
    return Object.values(u.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && md.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && $r(y) && zs(u, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      g.has(y.attributes.device_class) || g.set(y.attributes.device_class, y);
    }), md.map((y) => g.get(y)).filter(Boolean);
  }
  const $o = (u) => Object.values(u.states || {}).filter((g) => {
    var y, C;
    return g.entity_id.startsWith("sensor.") && $r(g) && zs(u, g.entity_id) && (((C = (y = u.entities) == null ? void 0 : y[g.entity_id]) == null ? void 0 : C.translation_key) ?? g.entity_id).toLowerCase().includes("pollen");
  }), Ta = ["none", "very_low", "low", "moderate", "high", "very_high"], ea = (u) => Ne(u.state) ? Number(u.state) : Ta.indexOf(String(u.state).toLowerCase().replace(/ /g, "_")), La = (u) => {
    const g = String(u).replace(/_/g, " ");
    return g[0].toUpperCase() + g.slice(1);
  }, Jr = (u, g, y) => {
    const C = y ? u === "aqi" ? g <= 50 ? "good" : g <= 100 ? "moderate" : "poor" : u === "pm25" ? id(g) : null : null;
    return C === "good" || C === "fair" ? Lt.advice.window : C === "moderate" || C === null ? Lt.advice.fine : Lt.advice.closed;
  }, Qr = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Lr = (u) => Qr[u <= 50 ? 0 : u <= 100 ? 1 : u <= 150 ? 2 : u <= 200 ? 3 : u <= 300 ? 4 : 5], Nn = "M43 43q1 8 0 10M77 42q1 8 -1 10", _a = {
    good: [Nn, "M34 69Q61 98 86 67"],
    fair: [Nn, "M40 74Q61 89 81 72"],
    moderate: [Nn, "M41 79Q60 76 80 81"],
    poor: [Nn, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Ri = (u) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + _a[u][0] + '"></path><path d="' + _a[u][1] + '"></path></svg>';
  function ts(u) {
    const g = qe(u), y = g[0];
    if (!y) return mn({ icon: De.airFilter, name: Lt.airQuality, sub: Lt.noAir, visual: oo("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, I = Number(y.state), V = Ne(y.state), Y = C === "aqi" && V ? Bo(I) : C === "pm25" && V ? Me[id(I)] : ki(u, y), ct = V ? we(Math.round(I), u.locale) : String(y.state), J = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", vt = V && C === "aqi" ? Lr(I) : V && C === "pm25" ? id(I) : null;
    return mn(vt ? {
      icon: De.airFilter,
      name: Lt.airQuality,
      sub: Y,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Fc[vt] + '">' + Ri(vt) + '<div class="wbAqBig"><span class="wbAqNum">' + Nt(ct) + "</span>" + (J ? '<span class="wbAqUnit">' + Nt(J) + "</span>" : "") + "</div></div>" + rd(oo(ct, J)),
      callouts: [Jr(C, I, V), ...g.slice(1, 3).map((xt) => [vr(u, xt), ki(u, xt)])]
    } : {
      icon: De.airFilter,
      name: Lt.airQuality,
      sub: Y,
      cls: "wbBase",
      zone: oo(ct, J),
      callouts: [Jr(C, I, V), ...g.slice(1, 3).map((xt) => [vr(u, xt), ki(u, xt)])]
    });
  }
  const Ke = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Mn = (u) => {
    const g = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(u) ? Math.round(u) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: g }, (y, C) => {
      const [I, V] = Ke[C % 3], Y = 10 + C * 7 % 9, ct = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + I + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Y + "s;animation-delay:-" + (C * 2.3 % Y).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + ct.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % ct).toFixed(1) + 's">' + V + "</span></span></span>";
    }).join("") + "</div>";
  };
  function me(u) {
    const g = $o(u).sort((I, V) => ea(V) - ea(I));
    if (!g.length) return mn({ icon: De.flower, name: Lt.pollen, sub: Lt.noPollen, visual: oo("–", ""), cls: "wbBase" });
    const y = g[0], C = (I) => Ne(I.state) ? ki(u, I) : La(I.state);
    return mn({
      icon: De.flower,
      name: Lt.pollen,
      sub: vr(u, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: Mn(ea(y)) + oo(C(y), ""),
      callouts: g.slice(0, 3).map((I) => [vr(u, I), C(I)])
    });
  }
  function Xo(u) {
    const g = Date.now(), y = P("hourly").filter((V) => {
      const Y = new Date(V.datetime).getTime();
      return Y > g - _e && Y < g + 12 * _e;
    }), C = y.find((V) => (V.precipitation_probability ?? 0) >= 50 || (V.precipitation ?? 0) >= 0.2), I = C ? Xa(Lt.rainFrom, { time: Ja(new Date(Math.max(g, new Date(C.datetime).getTime())), u) }) : y.length ? Lt.noRain12 : void 0;
    return mn({ icon: De.radar, name: Lt.rainRadar, sub: I, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Jo = {
    current: Xr,
    hourly: Gt,
    sun: an,
    moon: Do,
    wind: ca,
    uv_index: Di,
    compared_to_average: Cr,
    humidity: nn,
    pressure: Gs,
    precipitation: kn,
    visibility: Bi,
    air_quality: Tr,
    aq_tile: ts,
    pollen_tile: me,
    radar_tile: Xo
  }, Qo = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Ro = (u, g) => {
    var y;
    return g.toLocaleDateString((y = u.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, ro = (u) => {
    const g = new Date(u);
    return g.setMinutes(g.getMinutes() - g.getTimezoneOffset()), g.toISOString().slice(0, 10);
  }, so = () => {
    const u = Z.range, g = Date.now();
    if (u.preset !== "custom") {
      const I = Qo.find(([V]) => V === u.preset)[2];
      return [g - I * Bn, g];
    }
    const y = yr(/* @__PURE__ */ new Date(u.from + "T00:00")).getTime(), C = Math.min(g, yr(/* @__PURE__ */ new Date(u.to + "T00:00")).getTime() + Bn);
    return [Math.min(y, C - _e), C];
  }, es = (u) => {
    const g = Z.range;
    if (g.preset !== "custom") return Qo.find(([I]) => I === g.preset)[1];
    const [y, C] = so();
    return g.from === g.to ? Ro(u, new Date(y)) : Ro(u, new Date(y)) + " – " + Ro(u, new Date(C - 1));
  }, Kn = () => Z.range.preset === "custom" ? Z.range.from + "_" + Z.range.to : Z.range.preset, lo = (u, g) => g - u <= 2 * Bn, as = (u, g, y, C) => lo(y, C) ? Ja(g, u) : Ro(u, g), Pi = (u, g = 60) => {
    const y = Math.max(1, Math.ceil(u.length / g));
    return u.filter((C, I) => I % y === 0 || I === u.length - 1);
  }, co = (u, g, y, C, I = !1) => u.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [g],
    minimal_response: I,
    no_attributes: I,
    significant_changes_only: !1
  }), on = (u) => async (g, y, C, I) => {
    const V = sa(g, y, u);
    if (!V) return [];
    const Y = V.stateObj.entity_id, ct = await co(g, Y, C, I);
    return Pi(((ct == null ? void 0 : ct[Y]) ?? []).map((J) => {
      var Ct;
      const vt = ((Ct = J.a) == null ? void 0 : Ct[u]) ?? (Ne(J.s) ? Number(J.s) : void 0), xt = (J.lu ?? J.lc) * 1e3;
      return typeof vt == "number" && xt >= C && xt <= I ? { t: new Date(xt), value: vt } : null;
    }).filter(Boolean)).map((J) => ({ label: as(g, J.t, C, I), value: J.value }));
  }, Ga = (u, g) => async (y, C, I, V) => {
    const Y = u(y);
    if (!Y) return [];
    const ct = Y.entity_id, J = await co(y, ct, I, V, !0);
    return Pi(((J == null ? void 0 : J[ct]) ?? []).map((vt) => {
      const xt = g(vt.s), Ct = vt.lu * 1e3;
      return xt == null || !Number.isFinite(xt) || Ct < I || Ct > V ? null : { t: new Date(Ct), value: xt };
    }).filter(Boolean)).map((vt) => ({ label: as(y, vt.t, I, V), value: vt.value }));
  }, Ni = (u, g) => async (y, C, I, V) => {
    const Y = xl(y);
    if (!Y) return [];
    const ct = [];
    if (lo(I, V)) for (let J = I; J <= V; J += _e / 2) ct.push({ label: Ja(new Date(J), y), value: u(new Date(J), Y) });
    else for (let J = V; J >= I; J -= Bn) {
      const vt = new Date(J), xt = g(vt, Y, y);
      xt != null && ct.unshift({ label: Ro(y, vt), value: xt });
    }
    return Pi(ct);
  }, $n = (u) => $o(u).sort((g, y) => ea(y) - ea(g))[0], In = (u, g, y) => {
    const C = sa(u, g, y);
    return C ? wr(u, C.stateObj, y) : "";
  }, ye = {
    current: { name: () => Lt.modes.temperature, icon: () => De.sunny, load: on("temperature"), fmt: (u, g, y) => Ye(u, y), now: (u, g) => {
      var y;
      return Ye(u, (y = sa(u, g, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Lt.sun,
      icon: () => De.sunny,
      load: Ni((u, g) => Math.round(vd(u, g.lat, g.lon) / xn), (u, g, y) => {
        const C = Ws(y, u);
        return C.rise && C.set ? Math.round((C.set - C.rise) / _e * 10) / 10 : null;
      }),
      fmt: (u, g, y, C) => C ? we(y, u.locale) + "°" : we(y, u.locale) + " h",
      sub: (u) => u ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Lt.moon,
      icon: () => De.night,
      load: Ni((u) => Math.round($d(u).fraction * 100), (u) => Math.round($d(u).fraction * 100)),
      fmt: (u, g, y) => we(y, u.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Lt.metrics.uv_index, icon: () => De.sunnyAlert, load: on("uv_index"), fmt: (u, g, y) => we(Math.round(y * 10) / 10, u.locale), now: (u, g) => {
      const y = sa(u, g, "uv_index");
      return y ? we(Number(y.value), u.locale) : "";
    } },
    humidity: { name: () => Lt.metrics.humidity, icon: () => De.waterPercent, load: on("humidity"), fmt: (u, g, y) => we(Math.round(y), u.locale) + "%", now: (u, g) => {
      const y = sa(u, g, "humidity");
      return y ? we(Math.round(Number(y.value)), u.locale) + "%" : "";
    } },
    pressure: { name: () => Lt.metrics.pressure, icon: () => De.gauge, load: on("pressure"), fmt: (u, g, y) => we(Math.round(y), u.locale) + " " + In(u, g, "pressure"), now: (u, g) => {
      const y = sa(u, g, "pressure");
      return y ? we(Math.round(Number(y.value)), u.locale) + " " + In(u, g, "pressure") : "";
    } },
    wind: { name: () => Lt.wind, icon: () => De.windy, load: on("wind_speed"), fmt: (u, g, y) => we(Math.round(y), u.locale) + " " + In(u, g, "wind_speed"), now: (u, g) => {
      const y = sa(u, g, "wind_speed");
      return y ? we(Math.round(Number(y.value)), u.locale) + " " + In(u, g, "wind_speed") : "";
    } },
    visibility: { name: () => Lt.metrics.visibility, icon: () => De.eyeOutline, load: on("visibility"), fmt: (u, g, y) => we(Math.round(y * 10) / 10, u.locale) + " " + In(u, g, "visibility"), now: (u, g) => {
      const y = sa(u, g, "visibility");
      return y ? we(Number(y.value), u.locale) + " " + In(u, g, "visibility") : "";
    } },
    aq_tile: {
      name: (u) => qe(u)[0] ? vr(u, qe(u)[0]) : Lt.airQuality,
      icon: () => De.airFilter,
      load: Ga((u) => qe(u)[0], (u) => Ne(u) ? Number(u) : null),
      fmt: (u, g, y) => {
        var V, Y;
        const C = qe(u)[0], I = (V = C == null ? void 0 : C.attributes) == null ? void 0 : V.device_class;
        return we(Math.round(y * 10) / 10, u.locale) + (I === "aqi" ? " AQI" : (Y = C == null ? void 0 : C.attributes) != null && Y.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (u) => {
        const g = qe(u)[0];
        return g ? ki(u, g) : "";
      }
    },
    pollen_tile: {
      name: (u) => $n(u) ? vr(u, $n(u)) : Lt.pollen,
      icon: () => De.flower,
      load: Ga($n, (u) => {
        const g = ea({ state: u });
        return g < 0 ? null : g;
      }),
      fmt: (u, g, y) => La(Ta[Math.round(y)] || ""),
      now: (u) => {
        const g = $n(u);
        return g ? La(g.state) : "";
      }
    }
  }, rn = {};
  let pa = null;
  async function Ii(u) {
    var Y;
    const g = l == null ? void 0 : l();
    if (!g || !ye[u]) return;
    const y = u + "|" + Kn(), [C, I] = so();
    if (rn[y] && Date.now() - rn[y].at < 5 * Va) return;
    rn[y] = { at: Date.now(), points: null };
    try {
      rn[y].points = await ye[u].load(g, Sa(g), C, I);
    } catch {
      rn[y].points = [];
    }
    oa(!0), pa === u && Z.graph === u && (pa = null, Rc(et[u].el.querySelector(".wbGraphCard")));
    const V = Z.graph === u && ((Y = et[u]) == null ? void 0 : Y.el.querySelector(".wbGraph .wbChart"));
    V && Wp(V, V.querySelector(".wbLine"), V.querySelectorAll(".wbArea"));
  }
  function Us(u, g) {
    const y = Z.range, C = ro(Date.now()), [I, V] = so(), Y = y.pickFrom || ro(I), ct = y.pickTo || ro(V - 1);
    return '<div class="wbRangePick' + (g ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Qo.map(([J, vt]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === J) + '" data-wb="graph-preset" data-range="' + J + '" data-wb-focus="graph-preset-' + J + '">' + Nt(vt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Y + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + ct + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ns(u, g, y) {
    var jt;
    const C = ye[y], [I, V] = so(), Y = lo(I, V), ct = (jt = rn[y + "|" + Kn()]) == null ? void 0 : jt.points, J = et[y].el, vt = Math.max(120, J.clientWidth - 2 * 18 - 32), xt = Math.max(40, J.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), Ct = ct ? ct.length > 1 ? $c(ct, (zt) => C.fmt(u, g, zt, Y), xt, vt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Gp(C.icon(u)) + '</div><div class="wbText"><span class="wbName">' + Nt(C.name(u)) + '</span><span class="wbSub">' + Nt(C.sub ? C.sub(Y) : C.now ? C.now(u, g) : "") + '</span></div><button class="wbBack" title="' + Nt(Lt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + Si(De.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!Z.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Si(De.calendar) + "<span>" + Nt(es(u)) + "</span>" + Si(De.chevronDown) + '</button><div class="wbGraph">' + Ct + "</div></div>" + (Z.picking ? Us(u, J.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function oa(u) {
    var Ct, jt, zt;
    const g = l == null ? void 0 : l();
    if (!g || K) return;
    const y = Sa(g);
    wt(g, y), Mt.lastFetch || oe();
    const C = Pt(g), I = Zc(g), V = Xd(g), Y = [
      ...y.map((At) => g.states[At]),
      g.states["sun.sun"],
      I && g.states[I],
      V && g.states[V],
      ...C.air.map((At) => g.states[At]),
      ...C.pollen.map((At) => g.states[At]),
      ...q.some((At) => F.includes(At)) ? [...qe(g), ...$o(g)] : [],
      g.locale,
      g.config,
      g.entities,
      Math.floor(Date.now() / Va)
    ];
    if (!u && j && Y.length === j.length && Y.every((At, Yt) => At === j[Yt])) return;
    j = Y;
    const ct = _.getRootNode(), J = ct.activeElement || document.activeElement;
    for (const At of q) {
      const Yt = et[At];
      let Ot = "";
      try {
        Ot = (Z.graph === At ? ns(g, y, At) : Jo[At](g, y)) || "";
      } catch {
        Ot = "";
      }
      if (Ot === Yt.html) continue;
      const Tt = J && Yt.el.contains(J) ? (Ct = J.dataset) == null ? void 0 : Ct.wbFocus : void 0, ie = Yt.el.querySelector(".wbStripScroll"), Zt = ie ? ie.scrollLeft : null;
      Yt.html = Ot, Yt.el.hidden = !Ot, Yt.el.innerHTML = Ot;
      const Te = Yt.el.querySelector(".wbStripScroll");
      Te && Zt != null ? Te.scrollTo({ left: Zt }) : Te != null && Te.dataset.start && Te.scrollTo({ left: Number(Te.dataset.start) * Te.clientWidth / Number(Te.dataset.span) }), Tt && !nt && ((jt = Yt.el.querySelector('[data-wb-focus="' + Tt + '"]')) == null || jt.focus());
    }
    Eo(), nt && ((zt = _.querySelector('[data-wb-focus="' + nt + '"]')) == null || zt.focus({ preventScroll: !0 }), nt = null);
    let vt = !1, xt = !1;
    for (const At of q) {
      const Yt = et[At], Ot = !Yt.el.hidden, Tt = G[At] === "wide" || st.includes(At), ie = q.indexOf(At) >= q.indexOf("moon"), Zt = Ot && (ie && Tt && !vt || !Tt && !xt);
      Zt && Tt && (vt = !0), Zt && !Tt && (xt = !0), Yt.el.toggleAttribute("data-break", Zt);
    }
    Oi(performance.now());
  }
  function Xn() {
    bt || K || (bt = !0, queueMicrotask(() => {
      bt = !1, oa(!0);
    }));
  }
  function os() {
    const u = getComputedStyle(_), g = (Y) => u.getPropertyValue(Y).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Y, ct]) => {
      g(ct) && (y[Y] = g(ct));
    });
    const C = g("--color-text-primary") || "#f1f1f1", I = g("--color-bg-card") || "#222222", V = !!_.closest(".light");
    return { colors: { ...yn, ...y }, ink: V ? C : I, paper: V ? I : C };
  }
  const po = (u, g) => {
    var y;
    u.width !== g.w && (u.width = g.w), u.height !== g.h && (u.height = g.h), (y = u.getContext("2d")) == null || y.putImageData(new ImageData(g.data, g.w, g.h), 0, 0);
  }, Pa = () => m && !nh();
  function Hi(u, g) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((y) => Fi(y, at[y.dataset.wbStrip], u, g));
  }
  function Fi(u, g, y, C) {
    if (!g || !u.getClientRects().length) return;
    const I = u.clientWidth, V = u.clientHeight;
    if (!I || !V) return;
    const Y = { width: I, height: V, columns: g.columns || Pc, colors: C.colors, clock: y, ambient: Pa(), seed: g.seed, soft: 1.5 };
    if (c === "smooth") {
      const ct = Math.min(2, window.devicePixelRatio || 1), J = Math.round(I * ct), vt = Math.round(V * ct);
      u.width !== J && (u.width = J), u.height !== vt && (u.height = vt);
      const xt = u.getContext("2d");
      if (!xt) return;
      xt.setTransform(ct, 0, 0, ct, 0, 0), tf(xt, g.segs, Y);
    } else po(u, Qu(g.segs, { ...Y, px: 2, oneBit: c === "onebit", ink: C.ink, paper: C.paper }));
  }
  function Oi(u) {
    if (K) return;
    const g = os();
    if (c !== "smooth") {
      const y = Pa();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && po(C, Sp(dc(C.dataset.wbWx, g.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: g.colors, ink: g.ink, paper: g.paper, clock: u, idle: y }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, I = y.clientHeight, V = Number(y.dataset.wbSea), Y = C + "x" + I + ":" + V + ":" + g.colors.skyClearDay;
      !C || !I || !(V > 0) || y.dataset.painted === Y || (y.dataset.painted = Y, po(y, gf(C, I, V, g.colors)));
    }), Hi(u, g);
  }
  function Na(u) {
    if (ft = 0, !(K || !Pa())) {
      if (!document.hidden)
        if (c === "smooth") Hi(u, os());
        else {
          const g = Math.floor(u / 100);
          g !== mt && (mt = g, Oi(u));
        }
      ft = requestAnimationFrame(Na);
    }
  }
  function Hn() {
    _.classList.toggle("wbMotion", Pa()), !ft && !K && Pa() && (ft = requestAnimationFrame(Na));
  }
  function qi(u) {
    var y, C, I, V, Y, ct, J;
    const g = (C = (y = u.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!g || !_.contains(g)) {
      const vt = (V = (I = u.target).closest) == null ? void 0 : V.call(I, ".wbItem"), xt = vt == null ? void 0 : vt.dataset.card;
      if (!vt || !_.contains(vt) || !ye[xt] || Z.graph === xt || _.closest(".tfEditing") || vt.offsetHeight < 200 || xt === "current" && k) return;
      Z.graph = xt, nt = "graph-close", oa(!0), (Y = rn[xt + "|" + Kn()]) != null && Y.points ? Rc(et[xt].el.querySelector(".wbGraphCard")) : pa = xt, Ii(xt);
      return;
    }
    switch (g.dataset.wb) {
      case "day": {
        Z.openDay = Number(g.dataset.index), Z.opener = g.dataset.wbFocus, nt = "back-day";
        const vt = la()[Z.openDay], xt = !Mt.todayHistory || Mt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Mt.todayHistory.fetched > If;
        vt && qs(new Date(vt.datetime), /* @__PURE__ */ new Date()) && xt && na();
        break;
      }
      case "close-day":
        Z.openDay = void 0, nt = Z.opener, Z.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        Z.dayMode = g.dataset.mode;
        break;
      case "hourly-mode":
        Z.hourlyMode = g.dataset.mode;
        break;
      case "hourly-view":
        Z.hourlyView = g.dataset.view;
        try {
          localStorage.setItem(Q, Z.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const vt = _.querySelector(".wbStripScroll");
        vt && vt.scrollTo({ left: Number(g.dataset.hours) * vt.clientWidth / Number(vt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        Z.aq = g.dataset.entity, xe(Z.aq);
        break;
      case "aq-close":
        Z.aq = void 0;
        break;
      case "graph-close":
        Z.graph = void 0, Z.picking = !1;
        break;
      case "graph-pick":
        Z.picking = !Z.picking, nt = Z.picking ? "graph-preset-" + (Z.range.preset === "custom" ? "day" : Z.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        Z.range = { preset: g.dataset.range }, Z.picking = !1, nt = "graph-pick", oa(!0), Ii(Z.graph);
        return;
      case "graph-apply": {
        let vt = Z.range.pickFrom || ((ct = _.querySelector("[data-range-from]")) == null ? void 0 : ct.value), xt = Z.range.pickTo || ((J = _.querySelector("[data-range-to]")) == null ? void 0 : J.value);
        if (!vt || !xt) return;
        vt > xt && ([vt, xt] = [xt, vt]), Z.range = { preset: "custom", from: vt, to: xt }, Z.picking = !1, nt = "graph-pick", oa(!0), Ii(Z.graph);
        return;
      }
      default:
        return;
    }
    oa(!0);
  }
  function ti(u) {
    var g, y, C, I, V, Y;
    u.key === "Escape" && Z.openDay !== void 0 && ((y = (g = u.target).closest) != null && y.call(g, '[data-wb-open="day"]')) ? (Z.openDay = void 0, nt = Z.opener, Z.opener = void 0, oa(!0)) : u.key === "Escape" && Z.picking && ((I = (C = u.target).closest) != null && I.call(C, ".wbGraphCard")) ? (Z.picking = !1, nt = "graph-pick", oa(!0)) : u.key === "Escape" && Z.graph && ((Y = (V = u.target).closest) != null && Y.call(V, ".wbGraphCard")) && (Z.graph = void 0, oa(!0));
  }
  let Ia = null;
  function Wi(u) {
    var y, C;
    const g = (C = (y = u.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !g || u.button !== 0 || (Ia = { startX: u.pageX, left: g.scrollLeft, moved: !1 }, g.classList.add("wbHeld"), window.addEventListener("mousemove", ji), window.addEventListener("mouseup", Po, { once: !0 }));
  }
  function ji(u) {
    const g = _.querySelector(".wbStripScroll");
    if (!Ia || !g) return;
    const y = u.pageX - Ia.startX;
    !Ia.moved && Math.abs(y) > 1 && (Ia.moved = !0, g.classList.add("wbDragging")), g.scrollLeft = Ia.left - y;
  }
  function Po() {
    Ia = null, window.removeEventListener("mousemove", ji);
    const u = _.querySelector(".wbStripScroll");
    if (!u) return;
    u.classList.remove("wbDragging", "wbHeld");
    const g = [...u.querySelectorAll(".wbSnap")];
    if (g.length) {
      const y = g.reduce((C, I) => Math.abs(I.offsetLeft - u.scrollLeft) < Math.abs(C.offsetLeft - u.scrollLeft) ? I : C);
      u.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const ei = (u) => {
    var y, C;
    const g = u.target;
    (y = g.matches) != null && y.call(g, "[data-range-from]") ? Z.range.pickFrom = g.value : (C = g.matches) != null && C.call(g, "[data-range-to]") && (Z.range.pickTo = g.value);
  };
  _.addEventListener("change", ei), _.addEventListener("click", qi), _.addEventListener("keydown", ti), _.addEventListener("mousedown", Wi);
  const is = 64, No = 30;
  let Sn = null, pe = 0;
  const Fn = () => {
    pe = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((u) => {
      let g = 0, y = 0;
      if (Sn) {
        const C = u.parentElement.getBoundingClientRect(), I = C.left + C.width / 2 - Sn.x, V = C.top + C.height / 2 - Sn.y, Y = Math.hypot(I, V) || 1;
        if (Y < is) {
          const ct = (1 - Y / is) * No;
          g = I / Y * ct, y = V / Y * ct;
        }
      }
      u.style.transform = g || y ? "translate(" + g.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), Sn && (pe = requestAnimationFrame(Fn));
  }, Io = (u) => {
    var y, C;
    if (!((C = (y = u.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || Fa != null && Fa.matches) {
      Sn && (Sn = null, pe || (pe = requestAnimationFrame(Fn)));
      return;
    }
    Sn = { x: u.clientX, y: u.clientY }, pe || (pe = requestAnimationFrame(Fn));
  }, ai = () => {
    Sn = null, pe || (pe = requestAnimationFrame(Fn));
  };
  _.addEventListener("pointermove", Io), _.addEventListener("pointerleave", ai);
  const Ha = typeof ResizeObserver == "function" ? new ResizeObserver(() => Oi(performance.now())) : null;
  Ha == null || Ha.observe(_);
  const Fa = (uo = window.matchMedia) == null ? void 0 : uo.call(window, "(prefers-reduced-motion: reduce)"), Ie = () => {
    Hn(), Oi(performance.now());
  };
  (Ar = Fa == null ? void 0 : Fa.addEventListener) == null || Ar.call(Fa, "change", Ie);
  const On = [
    setInterval(() => {
      tt = /* @__PURE__ */ new Date(), oa(!0);
    }, Gf),
    setInterval(() => {
      rt = /* @__PURE__ */ new Date(), oa(!0);
    }, Uf),
    setInterval(oe, jf)
  ];
  return oa(!0), Hn(), {
    update() {
      oa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      oa(!0);
    },
    setStyle(u) {
      !u || u === c || (c = u, _.dataset.style = c, oa(!0), Hn());
    },
    destroy() {
      var u;
      cancelAnimationFrame(pe), _.removeEventListener("pointermove", Io), _.removeEventListener("pointerleave", ai), K = !0, On.forEach(clearInterval), ft && cancelAnimationFrame(ft), ft = 0, Ha == null || Ha.disconnect(), (u = Fa == null ? void 0 : Fa.removeEventListener) == null || u.call(Fa, "change", Ie), Po(), _.removeEventListener("click", qi), _.removeEventListener("change", ei), _.removeEventListener("keydown", ti), _.removeEventListener("mousedown", Wi), ["daily", "hourly"].forEach(W), _.remove();
    }
  };
}
const yl = "#E1E1E1", Qc = "#F7F4F0", Jd = "#03a9f4", ke = 14, Ae = 172;
let Rh = 0;
const Je = (n) => Math.round(n * 100) / 100, Ko = (n, l, i) => Math.max(l, Math.min(i, n)), Li = (n, l, i, c, m, x) => '<rect x="' + Je(n) + '" y="' + Je(l) + '" width="' + Je(i) + '" height="' + Je(c) + '" fill="' + m + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", Qd = (n) => n.map((l, i) => (i ? "L" : "M") + Je(l[0]) + " " + Je(l[1])).join("");
function tc(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const br = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Ph(n) {
  const l = n < 2 ? n + 24 : n;
  let i = br[0], c = br[br.length - 1];
  for (let A = 0; A < br.length - 1; A++) if (l >= br[A][0] && l <= br[A + 1][0]) {
    i = br[A], c = br[A + 1];
    break;
  }
  const m = (l - i[0]) / (c[0] - i[0]), x = m * m * (3 - 2 * m), k = (A, S) => {
    const _ = parseInt(A.slice(1), 16), z = parseInt(S.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((_ >> F & 255) + ((z >> F & 255) - (_ >> F & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], c[1][0]), bot: k(i[1][1], c[1][1]), warm: k(i[1][2], c[1][2]), cool: k(i[1][3], c[1][3]), op: i[1][4] + (c[1][4] - i[1][4]) * x, t: l };
}
function Nh(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, x = Math.max(i, c, m), k = Math.min(i, c, m);
  let A = 0, S = 0;
  const _ = (x + k) / 2;
  if (x !== k) {
    const z = x - k;
    S = _ > 0.5 ? z / (2 - x - k) : z / (x + k), A = (x === i ? (c - m) / z + (c < m ? 6 : 0) : x === c ? (m - i) / z + 2 : (i - c) / z + 4) / 6;
  }
  return [A * 360, S * 100, _ * 100];
}
function nu(n, l, i) {
  l = Ko(l, 0, 100) / 100, i = Ko(i, 0, 100) / 100;
  const c = (k) => (k + n / 30) % 12, m = l * Math.min(i, 1 - i), x = (k) => i - m * Math.max(-1, Math.min(c(k) - 3, Math.min(9 - c(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [ou, iu, ru] = Nh(yl), tp = nu(ou, iu, Math.max(6, ru - 14)), Ih = nu(ou, iu, Math.min(96, ru + 16));
function Hh(n, l, i, c, m) {
  const x = Ae / 2, k = Ae * 0.12, A = x - (x - k) * n, S = (st) => st ** 1.3, _ = Ko(i, -1.5, 1.5), z = (st) => -(Math.abs(_) * 4.6 * st ** 1.5) * Math.sign(_), F = n * 1.4, q = (st, et) => {
    const K = Math.min(4.8, Math.abs(i) * 2.6) * (et ? 1 : -1) * Math.sign(i || 1), j = et ? st + A : st, ft = et ? st : st + A, mt = (Mt) => j + z(Mt) + K * Math.sin(Mt * Math.PI * 1.2 + c) * S(Mt) * 1.4 + F * Math.sin(Mt * Math.PI * 2 + c * 0.6) * S(Mt) * (et ? 1 : -1), bt = [[ft, ke]];
    for (let Mt = 0; Mt <= 12; Mt++) bt.push([mt(Mt / 12), ke + Ae * Mt / 12]);
    bt.push([ft, ke + Ae]);
    let nt = '<path d="' + Qd(bt) + 'Z" fill="' + yl + '"/>';
    if (m) return nt;
    const Q = 1.35 + ((et ? i > 0 : i < 0) ? 0.35 : 0), E = (Mt) => {
      const tt = Mt / 7, rt = et ? 1 - tt : tt, at = (1 - rt) ** 1.3, qt = st + A * tt;
      return Array.from({ length: 13 }, (L, P) => {
        const B = P / 12;
        return [qt + z(B) * at + K * Q * Math.sin(B * Math.PI * 1.2 + c - rt * 3.2) * S(B) * 1.4 * at + F * 1.6 * Math.sin(B * Math.PI * 2 + c * 0.6 - rt * 2.5) * S(B) * n * (0.4 + 0.6 * at), ke + Ae * B];
      });
    }, Z = [1, 2, 3, 4, 5, 6].map(E);
    for (let Mt = 0; Mt < 6; Mt += 2) nt += '<path d="' + Qd(Z[Mt]) + Qd(Z[Mt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return nt;
  }, G = x - (x - k) * l;
  return { body: q(ke, !0) + q(ke + Ae - A, !1), rails: [{ x: ke + G - 4, y: ke, w: 4, h: Ae }, { x: ke + Ae - G, y: ke, w: 4, h: Ae }], head: 6.4 };
}
function Fh(n, l, i) {
  const c = Ae * (1 - n);
  let m = "";
  if (c > 1 && (m += Li(ke, ke, Ae, c, yl), !i))
    for (let x = 1; x < 7; x += 2) m += Li(ke + Ae * x / 7, ke, Ae / 7, c, "#fff");
  return { body: m, rails: [{ x: ke, y: ke + Ae * (1 - l) - 7, w: Ae, h: 11 }], head: 10.4 };
}
function Oh(n, l, i, c) {
  const m = 9 - 7 * (i / 100), x = ke + Ae * (1 - n), k = Math.ceil(Ae / 10) + 1, A = ke + m / 2, S = (ke + Ae - m / 2 - A) / (k - 1), _ = 0.8, z = 0.6, F = Array.from({ length: k }, (st, et) => Math.max(A + et * z, Math.min(A + et * S, x - m / 2 - (k - 1 - et) * z))), q = F.slice(0, -1).map((st, et) => Ko((F[et + 1] - st - z) / (S - z), 0, 1));
  q.push(q[k - 2]);
  let G = "";
  return F.forEach((st, et) => {
    const K = _ + (m - _) * q[et], j = Math.max(0.5, K / 2), ft = Math.max(0.4, K * 0.114);
    G += Li(ke, st - j, Ae, Math.max(1, K), yl), !c && K > 2.2 && (G += Li(ke, st + j - ft, Ae, ft, tp) + Li(ke, st - j, Ae, ft * 0.55, Ih, 0.75));
  }), c || [0.22, 0.78].forEach((st) => {
    G += Li(ke + Ae * st - 0.7, ke, 1.4, Math.max(0, F[k - 1] + 1 - ke), tp, 0.85);
  }), { body: G, rails: [{ x: ke, y: ke + Ae * (1 - l) - 8, w: Ae, h: 8 }], head: 8.8 };
}
const ep = (n, l, i, c, m, x, k) => n === "curtain" ? Hh(l, i, m, x, k) : n === "venetian" ? Oh(l, i, c, k) : Fh(l, i, k);
function qh(n, l) {
  let i = "", c = "";
  return l.forEach((m) => {
    const x = m.w > m.h, k = Ko(x ? ke + Ae / 2 : m.x + m.w / 2, 17, 183), A = Ko(x ? m.y + m.h / 2 : ke + Ae / 2, 17, 183);
    i += x ? Li(ke, Ko(m.y + m.h / 2, ke, ke + Ae) - 1, Ae, 2, Jd) : Li(Ko(m.x + m.w / 2, ke, ke + Ae) - 1, ke, 2, Ae, Jd);
    const S = x ? "M" + Je(k - 4) + " " + Je(A - 3) + "l4 -3l4 3M" + Je(k - 4) + " " + Je(A + 3) + "l4 3l4 -3" : "M" + Je(k - 3) + " " + Je(A - 4) + "l-3 4l3 4M" + Je(k + 3) + " " + Je(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Je(k) + '" cy="' + Je(A) + '" r="11" fill="' + Jd + '" filter="url(#' + n + 's)"/><path d="' + S + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: c };
}
function Wh(n, l) {
  const i = /* @__PURE__ */ new Date(), c = Ph(i.getHours() + i.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), x = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, k = ep(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? ep(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", S = l.grip > 4e-3 ? qh(n, k.rails) : null, _ = (z) => Li(ke, ke, Ae, Ae, z);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Je(m) + '%" cy="' + Je(x) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Je(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Je(100 - m * 0.8) + '%" cy="' + Je(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Je(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Qc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + _("url(#" + n + "l)") + _("url(#" + n + "w)") + _("url(#" + n + "k)") + (A ? '<g opacity="' + Je(l.ghostAlpha) + '">' + A + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + yl + '" filter="url(#' + n + 's)"/></g>' + (S ? '<g clip-path="url(#' + n + 'c)" opacity="' + Je(l.grip) + '">' + S.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Qc + '" stroke-width="3"/>' + (S ? '<g opacity="' + Je(l.grip) + '">' + S.knobs + "</g>" : "") + "</svg>";
}
function jh({ onMove: n, onSet: l }) {
  var nt;
  const i = "cv" + ++Rh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (nt = window.matchMedia) == null ? void 0 : nt.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, S = !1, _ = !1, z = null, F = 0, q = 0;
  const G = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", st = () => z || S || _ || x.moving || x.target != null ? 1 : m ? performance.now() < q ? 1 : 0.4 : 0, et = () => {
    c.innerHTML = Wh(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function K(Q) {
    A = 0;
    const E = k.last ? Math.min(0.064, (Q - k.last) / 1e3) : 1 / 60, Z = E * 60;
    k.last = Q;
    const Mt = x.pos - k.pos, tt = k.pos;
    k.pos += Math.sign(Mt) * Math.min(Math.abs(Mt), Math.max(10.5, Math.abs(Mt) * 1.4) * E), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - tt) / Z * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== tt || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * Z);
    const rt = x.tilt - k.tilt;
    k.tilt += Math.sign(rt) * Math.min(Math.abs(rt), Math.max(60, Math.abs(rt) * 4) * E);
    const at = st();
    k.grip += (at - k.grip) * Math.min(1, E * (at > k.grip ? 11 : 3.5)), Math.abs(at - k.grip) < 0.01 && (k.grip = at);
    const qt = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (qt - k.ghost) * Math.min(1, E * (qt > k.ghost ? 16 : 3)), Math.abs(qt - k.ghost) < 4e-3 && (k.ghost = qt), et(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== at || k.ghost !== qt ? A = requestAnimationFrame(K) : k.last = 0;
  }
  const j = () => {
    x && !A && (A = requestAnimationFrame(K));
  }, ft = setInterval(() => {
    x && !A && et();
  }, 60 * 1e3), mt = (Q) => {
    const E = c.getBoundingClientRect();
    return G() === "x" ? (Q.clientX - E.left) / E.width : (Q.clientY - E.top) / E.height;
  };
  c.addEventListener("pointerdown", (Q) => {
    var Mt;
    if (!(x != null && x.canSet) || Q.button > 0) return;
    Q.preventDefault(), (Mt = c.setPointerCapture) == null || Mt.call(c, Q.pointerId);
    const E = x.target ?? x.pos, Z = c.getBoundingClientRect();
    z = { p0: mt(Q), from: E, x0: Q.clientX, value: null, side: null }, x.kind === "curtain" && E > 0 && (z.side = (Q.clientX - Z.left) / Z.width < 0.5 ? "L" : "R"), j();
  }), c.addEventListener("pointermove", (Q) => {
    if (!z) return;
    let E;
    if (x.kind === "curtain") {
      if (!z.side) {
        const Mt = Q.clientX - z.x0;
        if (Math.abs(Mt) < 4) return;
        z.side = Mt < 0 ? "L" : "R";
      }
      const Z = (Ae / 2 - Ae * 0.12) / 200;
      E = z.from + (z.side === "L" ? -1 : 1) * ((mt(Q) - z.p0) / Z) * 100;
    } else E = z.from - (mt(Q) - z.p0) / (Ae / 200) * 100;
    z.value = Ko(E, 0, 100), n(z.value);
  });
  const bt = () => {
    if (!z) return;
    const Q = z.value;
    z = null, Q != null && l(Math.round(Q)), j();
  };
  return c.addEventListener("pointerup", bt), c.addEventListener("pointercancel", bt), c.addEventListener("lostpointercapture", bt), c.addEventListener("pointerenter", () => {
    S = !0, j();
  }), c.addEventListener("pointerleave", () => {
    S = !1, j();
  }), c.addEventListener("focus", () => {
    _ = c.matches(":focus-visible"), j();
  }), c.addEventListener("blur", () => {
    _ = !1, j();
  }), c.addEventListener("keydown", (Q) => {
    if (!(x != null && x.canSet)) return;
    const E = Math.round(x.target ?? x.pos), Z = Q.shiftKey ? 10 : 1, Mt = { ArrowUp: E + Z, ArrowRight: E + Z, ArrowDown: E - Z, ArrowLeft: E - Z, PageUp: E + 25, PageDown: E - 25, Home: 0, End: 100 }[Q.key];
    if (Mt == null) return;
    Q.preventDefault();
    const tt = Ko(Mt, 0, 100);
    n(tt), clearTimeout(F), F = setTimeout(() => l(tt), 500);
  }), {
    el: c,
    update(Q) {
      const E = !x;
      x = Q, E && (k.pos = x.pos, k.tilt = x.tilt, q = performance.now() + 1500, m && setTimeout(j, 1600)), c.classList.toggle("x", G() === "x"), c.classList.toggle("y", G() === "y"), x.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), c.setAttribute("aria-orientation", G() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), c.setAttribute("aria-valuetext", x.text), j();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(ft), clearTimeout(F), c.remove();
    }
  };
}
const ap = "move-assistant-density", Yo = {
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
}, it = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', np = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', sd = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, ip = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, rp = 1, zh = 4, sp = 16, lp = 32, Vh = 128, Gh = 256, dp = 16384, Uh = 1, Yh = 2, cp = 4, Zh = 8, Kh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, pp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, $h = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ac = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, up = "move_assistant_house", fp = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], hp = "move-assistant-house-look", Jh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Qh = [["popup", "Popup"], ["sheet", "Sheet"]], tm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], em = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], am = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], nc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', om = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', mp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', su = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", bp = su(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), im = su(["M20 6L9 17L4 12"]), Zo = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + it(n || "") + '"' + (l ? ' data-icon-name="' + it(l) + '"' : "") + "></span>", rm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', sm = 1, lm = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], wp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ld = ["door", "window", "garage_door", "opening"], xp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, bl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], dm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], cm = 10, pm = 20, um = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, fm = ["living room", "bedroom", "office"];
function hm(n, { config: l, getHass: i }) {
  var ml, Ns, Is;
  const c = (t) => n.getElementById(t), m = c("app"), k = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = Yo.get(ap) === "1", S = {};
  const _ = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, z = (t, a, s) => _({ type: "call_service", domain: t, service: a, service_data: s }), F = n.querySelector("#appearancePane .toggleList");
  F && !c("densityToggle") && (F.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, Yo.set(ap, A ? "1" : "0"), Q();
  }));
  const q = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Ut(t).device_class === "power" && /^(W|kW)$/.test(Ut(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], G = (t, a, s, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + d.map(([f, v]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + s + '="' + f + '">' + v + "</button>").join("") + "</div>", st = (t, a, s, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + s + "</div>";
  function et() {
    var U, lt;
    if (!k || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], s = (dt, $) => '<div class="houseTab' + (dt === "look" ? " active" : "") + '" data-house-pane="' + dt + '"><section class="card">' + $ + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([dt, $]) => '<button class="tab segBtn' + (dt === "look" ? " active" : "") + '" type="button" data-house-tab="' + dt + '">' + $ + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    s("look", Jh.map(([dt, $]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + dt + '"><div class="tfCardTitle">' + $ + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    s("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + s("sources", '<div class="toggleList">' + q.map(([dt, $, pt]) => st($, pt, '<select class="settingsSelect" data-source="' + dt + '" aria-label="' + $ + '"></select>')).join("") + "</div>") + s("sums", '<div class="toggleList">' + Object.entries(ac).map(([dt, $]) => st($.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + dt + '" aria-label="' + $.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = (dt) => t.querySelector('[data-look-group="' + dt + '"]'), f = (dt) => dt == null ? void 0 : dt.closest(".toggleRow");
    [f(t.querySelector(".themeBtn"))].forEach((dt) => dt && d("look").appendChild(dt));
    const v = f(c("densityToggle"));
    v && (v.hidden = !0), [f(c("moreInfoChoice")), f(c("namesChoice"))].forEach((dt) => dt && d("house").appendChild(dt)), d("house").insertAdjacentHTML("beforeend", st("Lights", "How lights show on the house page.", G("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + st("Pad", "What the Dual Axis Controller’s pad sets on its tile.", G("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [f(c("hoursChoice")), f(c("wxStyleChoice"))].forEach((dt) => dt && d("weather").appendChild(dt));
    const h = c("housePane"), b = h.querySelector(".houseTabs"), M = b.querySelector(".rubberIndicator"), H = "homecore-light-view", N = (dt) => {
      h.classList.toggle("tfLightCardsOn", dt === "cards"), h.querySelectorAll("[data-light-view]").forEach(($) => $.setAttribute("aria-pressed", String($.dataset.lightView === dt))), Yo.set(H, dt);
    };
    N(Yo.get(H) === "table" ? "table" : "cards"), h.querySelector(".tfLightView").addEventListener("click", (dt) => {
      const $ = dt.target.closest("[data-light-view]");
      $ && N($.dataset.lightView);
    }), new ResizeObserver(() => j()).observe(h), (lt = (U = document.fonts) == null ? void 0 : U.ready) == null || lt.then(() => j());
    const O = (dt) => {
      const $ = b.querySelector(".tab.active");
      M.style.transition = "none", dt ? jp(M, M.offsetLeft, M.offsetWidth, $.offsetLeft, $.offsetWidth) : (M.style.left = $.offsetLeft + "px", M.style.width = $.offsetWidth + "px");
    };
    new ResizeObserver(() => O(!1)).observe(b), h.addEventListener("click", (dt) => {
      const $ = dt.target.closest("[data-house-tab]");
      if ($) {
        b.querySelectorAll(".tab").forEach((r) => r.classList.toggle("active", r === $)), h.querySelectorAll(".houseTab").forEach((r) => r.classList.toggle("active", r.dataset.housePane === $.dataset.houseTab)), $.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), O(!0), j();
        return;
      }
      const pt = dt.target.closest("[data-light-fav]");
      if (pt) {
        ni(pt.dataset.lightFav);
        return;
      }
      const e = dt.target.closest("[data-light-pick]");
      if (e) {
        const [r, p] = e.dataset.lightPick.split("|"), w = { ...Pt[r] };
        e.dataset.v ? w[p] = e.dataset.v : delete w[p], Pt[r] = w, de(), [...Na.keys()].filter((T) => T.endsWith(":" + p)).forEach((T) => Na.delete(T)), Fe();
        return;
      }
      const o = dt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!o || o.disabled)) {
        if (o.dataset.lights && (Pt.lights = o.dataset.lights), o.dataset.dacPad && (Pt.dacPad = o.dataset.dacPad), (o.dataset.lights || o.dataset.dacPad) && (de(), Na.clear()), o.dataset.sumToggle) {
          const r = o.dataset.sumToggle, p = new Set(X.hiddenSums || []);
          p.has(r) ? p.delete(r) : p.add(r), X = { ...X, hiddenSums: [...p] }, Sa();
        }
        Fe();
      }
    }), h.addEventListener("change", (dt) => {
      const $ = dt.target;
      $.dataset.source && (X = { ...X, sources: { ...X.sources || {}, [$.dataset.source]: $.value || void 0 } }, Sa());
      const pt = $.dataset.lightStyle || $.dataset.lightPad;
      if (pt) {
        const e = $.dataset.lightStyle ? "lightStyles" : "lightPads", o = { ...Pt[e] };
        $.value ? o[pt] = $.value : delete o[pt], Pt[e] = o, de(), [...Na.keys()].filter((r) => r.endsWith(":" + pt)).forEach((r) => Na.delete(r));
      }
      Fe();
    });
  }
  function K() {
    var O, U;
    qi() && Oi();
    const t = c("housePane");
    if (!t) return;
    const a = !!customElements.get(Pa);
    t.querySelectorAll("[data-lights]").forEach((lt) => lt.setAttribute("aria-pressed", String(lt.dataset.lights === Pt.lights))), c("lightsRow").querySelector(".status").textContent = a || !qi() ? "How lights show on the house page." : Fi === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((lt) => lt.setAttribute("aria-pressed", String(lt.dataset.dacPad === Pt.dacPad))), c("dacPadRow").hidden = !qi();
    for (const lt of t.querySelectorAll("[data-source]")) {
      if (lt === n.activeElement) continue;
      const [dt] = q.find(([pt]) => pt === lt.dataset.source), $ = Object.keys(S).filter(q.find(([pt]) => pt === dt)[3]).sort((pt, e) => Bt(pt).localeCompare(Bt(e)));
      lt.dataset.sig !== $.join(",") && (lt.innerHTML = '<option value="">Automatic</option>' + $.map((pt) => '<option value="' + it(pt) + '">' + it(Bt(pt)) + "</option>").join(""), lt.dataset.sig = $.join(",")), lt.value = $.includes((O = X.sources) == null ? void 0 : O[dt]) ? X.sources[dt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((lt) => {
      const dt = !(X.hiddenSums || []).includes(lt.dataset.sumToggle);
      lt.classList.toggle("on", dt), lt.setAttribute("aria-checked", String(dt));
    });
    const s = c("lightRows"), d = c("lightCards"), f = n.activeElement, v = s != null && s.contains(f) || d != null && d.contains(f) ? f : null;
    if (!s || v != null && v.matches("select")) {
      j();
      return;
    }
    const h = new Set(jt()), b = (lt, dt, $, pt) => '<option value="' + lt + '"' + (lt === $ ? " selected" : "") + ">" + dt + "</option>", M = Object.keys(S).filter((lt) => lt.startsWith("light.")).sort((lt, dt) => !xe.get(lt) - !xe.get(dt) || (xe.get(lt) || "").localeCompare(xe.get(dt) || "") || Bt(lt).localeCompare(Bt(dt))).map((lt) => {
      const dt = Pt.lightStyles[lt] || "", $ = Pt.lightPads[lt] || "", pt = h.has(lt), e = it(Bt(lt));
      return "<tr><td><strong>" + e + "</strong></td><td>" + it(xe.get(lt) || "—") + "</td><td>" + it(qe(lt)) + '</td><td class="metaSwitchCol"><button class="switch' + (pt ? " on" : "") + '" type="button" role="switch" aria-checked="' + pt + '" data-light-fav="' + it(lt) + '" aria-label="' + e + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + it(lt) + '" aria-label="' + e + ' tile">' + b("", "Default", dt) + b("tile", "HomeCore tile", dt) + b("dac", "Dual Axis Controller", dt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + it(lt) + '" aria-label="' + e + ' pad"' + (Hn(lt) ? "" : " disabled") + ">" + b("", "Default", $) + b("temperature", "Temperature", $) + b("colour", "Colour", $) + "</select></td></tr>";
    }).join(""), H = (lt, dt, $, pt, e) => '<div class="themeChoice" role="group" aria-label="' + $ + '">' + pt.map(([o, r]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (o === e) + '" data-light-pick="' + lt + "|" + it(dt) + '" data-v="' + o + '">' + r + "</button>").join("") + "</div>", N = Object.keys(S).filter((lt) => lt.startsWith("light.")).sort((lt, dt) => !xe.get(lt) - !xe.get(dt) || (xe.get(lt) || "").localeCompare(xe.get(dt) || "") || Bt(lt).localeCompare(Bt(dt))).map((lt) => {
      const dt = h.has(lt), $ = it(Bt(lt)), pt = [xe.get(lt), qe(lt)].filter(Boolean).map(it).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + $ + '</strong><div class="status">' + pt + "</div></div></div>" + st("Favourite", "", '<button class="switch' + (dt ? " on" : "") + '" type="button" role="switch" aria-checked="' + dt + '" data-light-fav="' + it(lt) + '" aria-label="' + $ + ' is a favourite"></button>') + st("Tile", "", H("lightStyles", lt, $ + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Pt.lightStyles[lt] || "")) + (Hn(lt) ? st("Pad", "", H("lightPads", lt, $ + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Pt.lightPads[lt] || "")) : "") + "</div>";
    }).join("");
    s.dataset.html !== M && (s.innerHTML = M, s.dataset.html = M), d.dataset.html !== N && (d.innerHTML = N, d.dataset.html = N), v != null && v.dataset.lightFav && ((U = (d.contains(v) ? d : s).querySelector('[data-light-fav="' + CSS.escape(v.dataset.lightFav) + '"]')) == null || U.focus({ preventScroll: !0 })), j();
  }
  function j() {
    var a, s, d;
    const t = c("housePane");
    if (t)
      for (const f of t.querySelectorAll(".themeChoice")) {
        const v = [...f.querySelectorAll("button")];
        let h = (a = f.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? f.nextElementSibling : null;
        if (!h) {
          h = document.createElement("select"), h.className = "settingsSelect tfChoiceList", h.setAttribute("aria-label", f.getAttribute("aria-label") || ((d = (s = f.closest(".toggleRow")) == null ? void 0 : s.querySelector("strong")) == null ? void 0 : d.textContent) || ""), h.addEventListener("change", () => {
            var O;
            return (O = v[Number(h.value)]) == null ? void 0 : O.click();
          }), f.after(h);
          const N = () => {
            h.innerHTML = v.map((U, lt) => '<option value="' + lt + '"' + (U.disabled ? " disabled" : "") + ">" + it(U.textContent) + "</option>").join("");
            const O = v.findIndex((U) => U.getAttribute("aria-pressed") === "true" || U.classList.contains("active"));
            O >= 0 && (h.value = String(O));
          };
          new MutationObserver(N).observe(f, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), N();
        }
        const b = (N) => {
          f.hidden !== !N && (f.hidden = !N), h.hidden !== N && (h.hidden = N);
        };
        if (v.length > 3) {
          b(!1);
          continue;
        }
        if (!f.getClientRects().length && !h.getClientRects().length) {
          h.dataset.fit || b(!0);
          continue;
        }
        const M = f.hidden;
        f.hidden = !1;
        const H = v.every((N) => N.scrollWidth <= N.clientWidth + 1);
        f.hidden = M, b(H), h.dataset.fit = "1";
      }
  }
  const ft = document.createElement("div");
  ft.className = "densityBadge", ft.setAttribute("aria-live", "polite"), ft.hidden = !0, m.appendChild(ft);
  let mt = 0;
  function bt() {
    if (!A) return;
    const t = c("homeView"), a = (v) => v.offsetParent !== null && !v.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((v) => {
      a(v) && (v.dataset.h = Math.round(v.getBoundingClientRect().height) + " px");
    });
    const s = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), d = window.innerHeight, f = s.filter((v) => {
      const h = v.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= d + 0.5;
    }).length;
    ft.hidden = !t.classList.contains("active"), ft.innerHTML = "<b>" + f + "</b><small>of " + s.length + " readings on screen</small>";
  }
  const nt = () => {
    A && requestAnimationFrame(bt);
  };
  function Q() {
    var t;
    m.classList.toggle("showDensity", A), (t = c("densityToggle")) == null || t.classList.toggle("on", A), ft.hidden = !A, clearInterval(mt), A && (mt = setInterval(bt, 1e3), bt());
  }
  window.addEventListener("scroll", nt, { capture: !0, passive: !0 }), window.addEventListener("resize", nt, { passive: !0 });
  const E = n.querySelector("#homeView .grid");
  let Z = null, Mt = null, tt = null, rt = null;
  const at = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), P = 6;
  let B = null;
  const W = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map();
  let X = { favourites: null }, kt = {}, St = {}, Xt = [], oe = null;
  const na = (() => {
    try {
      return JSON.parse(Yo.get(fp)) || {};
    } catch {
      return {};
    }
  })();
  let xe = /* @__PURE__ */ new Map(), Ai = 0;
  function Sa() {
    clearTimeout(Ai), Ai = setTimeout(() => Promise.resolve(_({ type: "frontend/set_user_data", key: up, value: X })).catch(() => {
    }), 400);
  }
  const Pt = (() => {
    let t = {};
    try {
      t = JSON.parse(Yo.get(hp)) || {};
    } catch {
    }
    const a = (s, d) => Object.fromEntries(Object.entries(s || {}).filter(([, f]) => d.includes(f)));
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
  })(), de = () => Yo.set(hp, JSON.stringify(Pt)), la = () => {
    m.dataset.more = Pt.more, m.dataset.names = Pt.names, Ls();
  };
  k && F && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Pt.more = a.dataset.moreStyle, de(), la(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((s) => s.setAttribute("aria-pressed", String(s === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + tm.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Pt.names = a.dataset.namesStyle, Pt.namesPicked = !0, de(), la(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((s) => s.setAttribute("aria-pressed", String(s === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + em.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Pt.hoursWindow = a.dataset.hoursWindow, de(), Kt == null || Kt.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((s) => s.setAttribute("aria-pressed", String(s === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + am.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Pt.wxStyle = a.dataset.wxStyle, de(), Kt == null || Kt.setStyle(Pt.wxStyle), ha == null || ha.forEach((s) => s.setStyle(Pt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((s) => s.setAttribute("aria-pressed", String(s === a))));
  })), et();
  let Jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const We = /* @__PURE__ */ new Map();
  let Xr = "";
  const he = k ? Fu({ onChange: () => wa() }) : null;
  k && m.classList.add("house");
  const Qt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Kt = null, kr = null, Ei = !1;
  function Mr(t) {
    const a = Te();
    if (m.classList.toggle("houseBento", !!a), Kt && (kr !== a || t == null) && (Kt.destroy(), Kt = null), !a || t == null) {
      Qt.remove();
      return;
    }
    Qt.isConnected || E.append(Qt), Qt.style.order = t, !Kt && !Ei && (Kt = Jc(Qt, { getHass: i, entityId: a, style: Pt.wxStyle, hoursWindow: () => Pt.hoursWindow }), kr = a);
  }
  const en = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], ce = ["aq", "pollen", "radar"], da = Object.fromEntries(en.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ha = null, _i = null;
  function Sr(t) {
    const a = Te();
    ha && _i !== a && (ha.forEach((s) => s.destroy()), ha = null), Object.values(da).forEach((s) => a ? !s.isConnected && E.append(s) : s.remove()), a && !ha && !Ei && (ha = en.map(([s, d]) => Jc(da[s], { getHass: i, entityId: a, style: Pt.wxStyle, cards: d, onOpen: s === "wx" ? () => Or("weather") : void 0 })), _i = a);
  }
  const Ut = (t) => {
    var a;
    return ((a = S[t]) == null ? void 0 : a.attributes) || {};
  }, Bt = (t) => Ut(t).friendly_name || t, Gt = (t, a) => Uo(t) || (Number(Ut(t).supported_features) & a) === a, Ce = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ca = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), Gn = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Vt = (t) => Ut(t).supported_color_modes || [], te = (t, a) => [5, 3, 1].map((s) => {
    const d = (s + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), Ze = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ao = (t) => 0.2126 * Ze(t[0]) + 0.7152 * Ze(t[1]) + 0.0722 * Ze(t[2]), an = (t, a) => {
    const s = Ao(t), d = Ao(a);
    return (Math.max(s, d) + 0.05) / (Math.min(s, d) + 0.05);
  }, ta = 0.55, Un = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ve = (t) => {
    const a = Ut(t), s = Un.includes(a.color_mode);
    return (s && a.rgb_color ? a.rgb_color : s && a.hs_color ? te(...a.hs_color) : [255, 170, 0]).map((d) => Math.round(Math.max(0, Math.min(255, d))));
  }, Eo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function _o(t) {
    var d;
    const a = t.split(".")[0], s = (d = S[t]) == null ? void 0 : d.state;
    return !s || s === "unavailable" || s === "unknown" ? null : a === "light" ? s === "on" ? Ve(t) : null : a === "climate" ? Eo[s] || null : a === "cover" ? s !== "closed" ? [146, 107, 199] : null : a === "lock" ? s !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(s) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(s) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(s) ? [0, 150, 136] : null : a === "alarm_control_panel" ? s !== "disarmed" && s !== "triggered" ? [76, 175, 80] : null : a === "fan" ? s === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && s === "on" ? [255, 193, 7] : null;
  }
  function Do(t, a, s = !1) {
    const [d, f, v] = t.map((dt) => dt / 255), h = Math.max(d, f, v), b = Math.min(d, f, v), M = h - b, H = M ? (h === d ? (f - v) / M + (f < v ? 6 : 0) : h === f ? (v - d) / M + 2 : (d - f) / M + 4) * 60 : 0, N = (h + b) / 2, O = M ? M / (1 - Math.abs(2 * N - 1)) : 0, U = M < 0.1 ? Math.min(O, 0.25) : 1, lt = (dt) => {
      const $ = (e) => (e + H / 30) % 12, pt = U * Math.min(dt, 1 - dt);
      return [0, 8, 4].map((e) => Math.round(255 * (dt - pt * Math.max(-1, Math.min($(e) - 3, 9 - $(e), 1)))));
    };
    for (let dt = 0.5; s ? dt < 0.96 : dt > 0.04; dt += s ? 0.01 : -0.01) {
      const $ = lt(dt);
      if (an($, a) >= 3) return "rgb(" + $.join(",") + ")";
    }
    return s ? "#ffffff" : "#26221e";
  }
  const ca = (t) => {
    const a = [1, 3, 5].map((s) => parseInt(t.slice(s, s + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + Do(a, [58, 58, 58], !0) + ";--sum-l:" + Do(a, [230, 230, 230]);
  }, Yn = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Di = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Yn.d[t] + ";--g" + t + "-l:" + Yn.l[t]).join(";"), Cr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", nn = (t) => {
    const a = t.map((s) => Math.round(s + (255 - s) * ta));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + Do(t, a);
  }, Gs = (t) => nn(Ve(t)), Zn = (t) => {
    const a = _o(t);
    return a ? ' data-light style="' + nn(a) + '"' : "";
  }, kn = (t) => {
    const a = Vt(t);
    return a.length ? a.some((s) => s !== "onoff") : Ut(t).brightness != null;
  }, Bi = (t) => [Ut(t).min_color_temp_kelvin || 2e3, Ut(t).max_color_temp_kelvin || 6500], Rn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Tr(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const s = Math.round(a / 60);
    if (s < 60) return s + (s === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(s / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const f = Math.round(d / 24);
    return f + (f === 1 ? " day ago" : " days ago");
  }
  const Pn = (t) => {
    var a;
    return Ut(t).current_position ?? (((a = S[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Me = (t) => {
    var a;
    return pe("pos", t, ((a = W.get(t)) == null ? void 0 : a.pos) ?? Pn(t));
  }, Bo = (t) => {
    var a;
    return pe("tilt", t, ((a = W.get(t)) == null ? void 0 : a.tilt) ?? Ut(t).current_tilt_position);
  };
  function qe(t) {
    var h;
    const a = S[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const s = a.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (a.state !== "on") return "Off";
      const b = s.color_temp_kelvin;
      return (kn(t) ? Gn(a) + "%" : "On") + (s.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Un.includes(s.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (a.state === "off" ? "Off" : Ce(s.hvac_action || a.state)) + " · " + Ca(s.current_temperature) + " °C now";
    if (d === "cover") {
      const b = Pn(t), M = s.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Ce(a.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return a.state !== "on" ? "Off" : Ce(s.action || "on") + " · " + s.current_humidity + "% now";
    if (d === "vacuum") return Ce(a.state) + (a.state === "cleaning" && ((h = s.rooms) != null && h.length) ? " · " + s.rooms.join(", ") : "") + (s.battery_level != null ? " · " + s.battery_level + "%" : "");
    if (d === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (s.media_title || "Playing") : Ce(a.state);
    if (d === "alarm_control_panel") return wp[a.state] || Ce(a.state);
    if (d === "lock" || d === "valve") return Ce(a.state);
    if (d === "switch") return a.state === "on" ? "On" : "Off";
    if (d === "plant") return a.state === "ok" ? "Healthy" : Ce(s.problem);
    if (d === "binary_sensor")
      return s.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : s.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : s.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : ld.includes(s.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (s.rang) return "Rang at " + Rn(s.rang);
    const f = i();
    if (f != null && f.formatEntityState && !Uo(t))
      try {
        return f.formatEntityState(a);
      } catch {
      }
    const v = Number(a.state);
    if (a.state !== "" && Number.isFinite(v)) {
      const b = Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2, M = s.unit_of_measurement ? s.unit_of_measurement === "%" ? "%" : " " + s.unit_of_measurement : "";
      return v.toLocaleString(void 0, { maximumFractionDigits: b }) + M + (s.plant_low ? " · Low" : s.plant_high ? " · High" : "");
    }
    return Ce(a.state);
  }
  const $o = (t) => t >= 1e3 ? Ca(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Ta(t) {
    var s, d;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((f) => {
      var b;
      const v = S[f.dataset.iconFor], h = f.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && v && !h) {
        let M = f.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (f.textContent = "", M = document.createElement("ha-state-icon"), f.appendChild(M)), M.hass = a, M.stateObj = v;
      } else if (customElements.get("ha-icon")) {
        let M = f.firstElementChild;
        (!M || M.localName !== "ha-icon") && (f.textContent = "", M = document.createElement("ha-icon"), f.appendChild(M)), M.icon = h || ((b = v == null ? void 0 : v.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else f.textContent || (f.textContent = (f.dataset.letter || Bt(f.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (s = t.querySelectorAll) == null || s.call(t, ".tfIcon").forEach(La), (d = t.classList) != null && d.contains("tfIcon") && La(t), Ri();
  }
  const ea = /* @__PURE__ */ new Map();
  function La(t) {
    var v, h, b;
    const a = (((v = t.closest("[data-k]")) == null ? void 0 : v.dataset.k) || "") + "|" + (t.dataset.iconFor || ((h = t.querySelector("[data-icon-for]")) == null ? void 0 : h.dataset.iconFor) || t.getAttribute("aria-label") || ""), s = getComputedStyle(t), d = { backgroundColor: s.backgroundColor, color: s.color }, f = ea.get(a);
    ea.set(a, d), !(!f || f.backgroundColor === d.backgroundColor && f.color === d.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([f, d], { duration: aa.warp.cdur, delay: aa.warp.cdelay, easing: ze[aa.warp.ease], fill: "backwards" });
  }
  const Jr = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Qr = (t) => {
    const a = [t];
    for (; a.length; ) {
      const s = a.shift();
      if (s.localName === "svg") return s;
      s.shadowRoot && a.push(...s.shadowRoot.children), a.push(...s.children);
    }
    return null;
  };
  function Lr(t) {
    var lt, dt, $;
    const a = t.localName === "svg" ? t : Qr(t), s = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!s.length) return !a;
    const d = (lt = t.closest(".tfIcon")) == null ? void 0 : lt.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const f = d + "|" + s.map((pt) => pt.getAttribute("d") || pt.localName).join("|");
    if (t.dataset.fitted === f) return !0;
    let v = 1 / 0, h = 1 / 0, b = -1 / 0, M = -1 / 0;
    for (const pt of s) {
      const e = pt.getBBox(), o = getComputedStyle(pt), r = o.stroke !== "none" ? (parseFloat(o.strokeWidth) || 0) / 2 : 0;
      !e.width && !e.height || (v = Math.min(v, e.x - r), h = Math.min(h, e.y - r), b = Math.max(b, e.x + e.width + r), M = Math.max(M, e.y + e.height + r));
    }
    if (!(b > v)) return !1;
    const H = ($ = (dt = a.viewBox) == null ? void 0 : dt.baseVal) != null && $.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = d > 40 ? d * (26 / 40) : d - 14, O = N * H.width / Math.max(b - v, M - h), U = O / H.width;
    return t.localName === "svg" ? (t.style.width = O + "px", t.style.height = O + "px") : t.style.setProperty("--mdc-icon-size", O + "px"), a.style.translate = ((H.x + H.width / 2 - (v + b) / 2) * U).toFixed(2) + "px " + ((H.y + H.height / 2 - (h + M) / 2) * U).toFixed(2) + "px", t.dataset.fitted = f, !0;
  }
  let Nn = 0;
  function _a(t = 0) {
    clearTimeout(Nn), [...n.querySelectorAll(Jr)].filter((s) => !Lr(s)).length && t < 5 && (Nn = setTimeout(() => _a(t + 1), 300));
  }
  function Ri() {
    clearTimeout(Nn), Nn = setTimeout(() => _a(), 60);
  }
  const ts = (t) => {
    var a, s, d;
    return t.startsWith("light.") && S[t] && !Ut(t).icon && !((d = (s = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : s[t]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Ke = (t, a, s) => (a = a || ts(t), ' data-icon-for="' + it(t) + '"' + (a ? ' data-icon-name="' + it(a) + '"' : "") + (s ? ' data-letter="' + it(s) + '"' : "")), Mn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ut(t).rang ? "mdi:doorbell" : "", me = (t, a, s, d) => it([t, a, s, d ? JSON.stringify(d) : ""].join("|")), Xo = (t) => it(JSON.stringify(t));
  function Jo(t, a) {
    var f, v;
    const s = it(Bt(a) + ", " + qe(a));
    return '<div class="activityRow' + (Number.isFinite(Number((f = S[a]) == null ? void 0 : f.state)) && ((v = S[a]) == null ? void 0 : v.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + it(t + "|" + a) + '" aria-label="' + s + '. Show the last 24 hours"' : '" aria-label="' + s + '"') + '><div class="tfIcon" aria-hidden="true"' + Ke(a, Mn(a)) + '></div><div><div class="activityRowName">' + it(Bt(a)) + '</div><div class="activityRowMeta">' + it(qe(a)) + "</div></div></div>";
  }
  const Qo = (t, a, s) => '<div class="activityRow" aria-label="' + it(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Ke("", s, t) + '></div><div><div class="activityRowName">' + it(t) + '</div><div class="activityRowMeta">' + it(a) + "</div></div></div>";
  function Ro(t) {
    var s;
    const a = ((s = S[t]) == null ? void 0 : s.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + me("switch", "toggle", t) + '" aria-label="Turn ' + it(Bt(t)) + (a ? " off" : " on") + '"' + Ke(t) + '></button><button class="tfName" type="button" data-more="' + it(t) + '" aria-label="' + it(Bt(t) + ", " + qe(t) + ". More info") + '"><span class="activityRowName">' + it(Bt(t)) + '</span><span class="activityRowMeta">' + it(qe(t)) + "</span></button></div>";
  }
  const ro = (t) => {
    var a;
    return ((a = qt.get(t)) == null ? void 0 : a.name) ?? Bt(t);
  }, so = (t) => {
    var a;
    return ((a = qt.get(t)) == null ? void 0 : a.text) ?? qe(t);
  };
  function es(t) {
    var s;
    const a = (s = qt.get(t)) == null ? void 0 : s.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Ke("", a, ro(t)) : Ke(t, Mn(t))) + '></div><div><div class="activityRowName">' + it(ro(t)) + '</div><div class="activityRowMeta">' + it(so(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + it(ro(t)) + '’s last 24 hours">' + ec + '</button></div><svg class="tfGraph" data-graph="' + it(t) + '" role="img" aria-label="' + it(ro(t)) + ', last 24 hours"></svg></div>';
  }
  function Kn(t, a, s, d, f = "", v = null, h = "") {
    const b = Z && Z.key === t;
    return '<section class="card tfCard' + (h ? " " + h : "") + (b ? " open" : "") + '" data-tf data-k="' + it(t) + '" style="order:' + a + (b && Z.h ? ";min-height:" + Z.h + "px" : "") + '" aria-label="' + it(s) + '"><div class="activityHeader">' + (v ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + it(v) + '" aria-label="' + it(s + (S[v] ? ", " + qe(v) : "") + ". More info") + '">' + it(s) + "</button>" : '<div class="activityTitle">' + it(s) + "</div>") + "</div>" + (b ? es(Z.id) : '<div class="activityRows">' + d.join("") + "</div>" + f) + "</section>";
  }
  function lo(t, a) {
    const s = "readings:" + t.id, d = t.readings.map((f) => Jo(s, f));
    return t.power != null && d.push(Qo("Power now", $o(t.power), "mdi:flash")), Kn(s, a, "Readings", d.concat(t.plugs.map(Ro)));
  }
  function as(t, a) {
    var b;
    const s = "energy:" + t.id, [d, f] = [t.solar.find((M) => M.endsWith("_power")), t.solar.find((M) => M.endsWith("_today"))], v = [d, f].filter(Boolean).map((M) => Jo(s, M)), h = Number(((b = S[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return Jt.grid && (v.push(Jo(s, Jt.grid)), v.push(Qo("House use", $o(h + Number(S[Jt.grid].state)), "mdi:home-lightning-bolt"))), Kn(s, a, "Energy", v, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Pi = (t, a) => Kn("plant:" + t.id, a, Bt(t.id), t.readings.map((s) => Jo("plant:" + t.id, s)), "", t.id);
  function co(t, a, s, d, f, v, h = null) {
    const b = s == null ? null : Math.max(0, Math.min(1, s)), M = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + it(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (f ? ' aria-valuetext="' + it(f) + '"' : "") + ' data-drag="' + it(t + "|" + a) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (v ? b == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const on = "move-assistant-house-last-bright", Ga = (() => {
    try {
      return JSON.parse(Yo.get(on)) || {};
    } catch {
      return {};
    }
  })();
  let Ni = 0;
  const $n = (t, a) => {
    !a || Ga[t] === a || (Ga[t] = a, clearTimeout(Ni), Ni = setTimeout(() => Yo.set(on, JSON.stringify(Ga)), 500));
  }, In = (t, a, s, d) => '<div class="tfStep" role="group" aria-label="' + it(t) + '"><button type="button" data-act="' + s + '" aria-label="Lower ' + it(t.toLowerCase()) + '">' + ip.down + "</button><output>" + it(a) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + it(t.toLowerCase()) + '">' + ip.up + "</button></div>", ye = (t, a, s) => '<div class="' + t + '" role="group" aria-label="' + it(a) + '">' + s.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + it(d.aria) + '"' : "") + ">" + (d.html || it(d.label)) + "</button>").join("") + "</div>", rn = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), pa = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ii = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + it(Bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + it(t) + '">' + [0, 1, 2, 3].map((s) => '<span><i style="' + rn(a, s) + '"></i><b' + (a >= (s + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (s + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + pa(a) + '">' + Math.round(a) + "%</output></div>";
  function Us(t, a) {
    t.querySelectorAll(":scope>span").forEach((d, f) => {
      d.firstElementChild.setAttribute("style", rn(a, f)), d.lastElementChild.classList.toggle("lit", a >= (f + 1) * 25 - 12);
    });
    const s = t.querySelector(".tfTip");
    s.setAttribute("style", pa(a)), s.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const ns = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + it(Bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + it(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", oa = (t, a, s) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + it(Bt(t)) + '">' + [
    Gt(t, Uh) && ["open", "Open", "open_cover", a >= 100 && !s],
    Gt(t, Zh) && ["stop", "Stop", "stop_cover", !1],
    Gt(t, Yh) && ["close", "Close", "close_cover", a <= 0 && !s]
  ].filter(Boolean).map(([d, f, v, h]) => '<button type="button" data-act="' + me("cover", v, t) + '" aria-label="' + f + '"' + (h ? " disabled" : "") + ">" + Kh[d] + "</button>").join("") + "</div>", Xn = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + it(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + it(a.art) + '&quot;)"' : Ke(t, a.icon)) + "></button>", os = (t) => '<button class="tfName" type="button" data-more="' + it(t) + '" aria-label="' + it(Bt(t) + ", " + qe(t) + ". More info") + '"><span class="activityRowName">' + it(Bt(t)) + '</span><span class="activityRowMeta">' + it(qe(t)) + "</span></button>";
  function po(t, a = !1, s = null) {
    const d = Fn(t), f = t.startsWith("light.") && ti(t) && !(s && Xi(t) < 3), v = s || (a && t.startsWith("light.") ? ["bright"] : null), h = f ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : s ? "dash:" : "tile:") + it(t) + '"></div>'] : d.sections.map((b, M) => b && (!v || v.includes((d.parts || [])[M])) ? b : "").filter(Boolean);
    return '<div class="tfAction' + (f ? " tfDac" : "") + (d.on ? " on" : "") + '" data-k="' + it(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Zn(t) + '><div class="tfActionHead">' + Xn(t, d) + os(t) + "</div>" + h.join("") + "</div>";
  }
  const Pa = "dual-controller-v3", Hi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Fi = null;
  async function Oi() {
    if (Fi || customElements.get(Pa)) return;
    Fi = "loading";
    const t = await Promise.resolve().then(() => _({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Pa), new Promise((d) => setTimeout(d, a ? 8e3 : 0))]), customElements.get(Pa)) return;
    const s = Object.assign(document.createElement("script"), { src: Hi });
    s.onerror = () => {
      Fi = "failed", K();
    }, document.head.appendChild(s);
  }
  const Na = /* @__PURE__ */ new Map(), Hn = (t) => (Pt.lightStyles[t] || Pt.lights) === "dac", qi = () => Pt.lights === "dac" || Object.values(Pt.lightStyles).includes("dac");
  function ti(t) {
    return Hn(t) && !!customElements.get(Pa);
  }
  const Ia = (t) => Pt.lightPads[t] || Pt.dacPad, Wi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, s, d, ...f) => t.callService(a, ...ur(a, s, d), ...f)
    };
  }, ji = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Po = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: ji })).dataset.tf = "");
  }, ei = /* @__PURE__ */ new Map(), is = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const s = a.parentElement;
    !s || !a.offsetHeight || (s.style.removeProperty("min-height"), ei.set(s.dataset.dac, s.offsetHeight));
  }));
  function No(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const s = a.dataset.dac;
      let d = Na.get(s);
      if (!d) {
        const f = s.slice(s.indexOf(":") + 1);
        d = document.createElement(Pa), d.setConfig({ type: "custom:" + Pa, entity: f, pad: Ia(f), tap_action: { action: "none" } }), Na.set(s, d);
      }
      d.hass = Wi(), d.parentNode !== a && a.replaceChildren(d), !d.offsetHeight && ei.has(s) && (a.style.minHeight = ei.get(s) + "px"), is.observe(d), Po(d);
    });
  }
  function Sn() {
    const t = Wi();
    Na.forEach((a, s) => {
      a.isConnected ? a.hass = t : Na.delete(s);
    });
  }
  customElements.whenDefined(Pa).then(() => {
    k && (E != null && E.querySelector("[data-tf]")) && Ka(Fe);
  });
  const pe = (t, a, s) => L.has(t + "|" + a) ? L.get(t + "|" + a) : s;
  function Fn(t) {
    var v;
    const a = S[t], s = a.attributes, d = t.split(".")[0], f = (h, b) => ({ act: me(h, "toggle", t), label: b });
    if (d === "light") {
      const h = a.state === "on", b = Vt(t), [M, H] = Bi(t), N = pe("bright", t, Gn(a));
      h && $n(t, Gn(a));
      const O = pe("ct", t, h && s.color_mode === "color_temp" ? s.color_temp_kelvin : null), U = pe("hue", t, h && Un.includes(s.color_mode) && s.hs_color ? s.hs_color[0] : null);
      return { on: h, button: f("light", "Turn " + Bt(t) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        kn(t) && co("bright", t, N / 100, Bt(t) + " brightness", N + "%", !1, h ? null : Ga[t] ?? null),
        b.includes("color_temp") && co("ct", t, O == null ? null : (O - M) / (H - M), Bt(t) + " warm to cool", O == null ? "" : Math.round(O) + " kelvin", !0),
        b.some((lt) => Un.includes(lt)) && co("hue", t, U == null ? null : U / 360, Bt(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = s.target_temp_step || 0.5, b = Number(s.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || s.hvac_action === "cooling" ? "cool" : "heat", button: f("climate", "Turn " + Bt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && In("Target temperature", Ca(b) + " °C", me("climate", "set_temperature", t, { temperature: b - h }), me("climate", "set_temperature", t, { temperature: b + h })),
        ye("tfSeg", "Mode", (s.hvac_modes || []).map((M) => ({ label: Ce(M), act: me("climate", "set_hvac_mode", t, { hvac_mode: M }), pressed: a.state === M })))
      ] };
    }
    if (d === "cover") {
      const h = a.state === "opening" || a.state === "closing", b = a.state === "closed", M = Me(t), H = Bo(t);
      return { on: !b, tone: "blue", icon: pp[tc(a)][b ? 1 : 0], button: f("cover", (b ? "Open " : "Close ") + Bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Gt(t, cp) && Ii(t, M),
        H != null && ns(t, H),
        oa(t, M, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(s.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: f("humidifier", "Turn " + Bt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && In("Target humidity", h + "%", me("humidifier", "set_humidity", t, { humidity: h - 1 }), me("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((v = s.available_modes) == null ? void 0 : v.length) && ye("tfSeg", "Mode", s.available_modes.map((b) => ({ label: Ce(b), act: me("humidifier", "set_mode", t, { mode: b }), pressed: s.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const h = a.state === "playing", b = a.state === "off" || a.state === "standby", M = pe("vol", t, s.volume_level), H = b ? { act: me("media_player", Gt(t, Vh) ? "turn_on" : "toggle", t), label: "Turn " + Bt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: me("media_player", "media_play_pause", t), label: (h ? "Pause " : "Play ") + Bt(t) } : { act: me("media_player", Gt(t, Gh) ? "turn_off" : "toggle", t), label: "Turn " + Bt(t) + " off" };
      return { on: !b, tone: "blue", art: !b && s.entity_picture ? s.entity_picture : null, button: H, parts: ["playback", "volume"], sections: b ? [] : [
        (Gt(t, sp) || Gt(t, lp) || Gt(t, rp) || Gt(t, dp)) && ye("tfSeg", "Playback", [
          { html: sd.prev, aria: "Previous", act: me("media_player", "media_previous_track", t), disabled: !Gt(t, sp) },
          { html: h ? sd.pause : sd.play, aria: h ? "Pause" : "Play", act: me("media_player", "media_play_pause", t), disabled: !(Gt(t, rp) || Gt(t, dp)) },
          { html: sd.next, aria: "Next", act: me("media_player", "media_next_track", t), disabled: !Gt(t, lp) }
        ]),
        Gt(t, zh) && M != null && co("vol", t, M, Bt(t) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = a.state === "cleaning", b = s.rooms || [], M = (N) => b.includes(N) ? b.filter((O) => O !== N) : b.concat(N), H = me("vacuum", h ? "pause" : "start", t, Uo(t) ? { rooms: b } : null);
      return { on: h || a.state === "returning", tone: "blue", button: { act: H, label: (h ? "Pause " : "Start ") + Bt(t) }, parts: ["controls", "rooms"], sections: [
        ye("tfSeg", Bt(t), [
          { label: h ? "Pause" : "Start", act: H },
          { label: "Dock", act: me("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: me("vacuum", "locate", t) }
        ]),
        Uo(t) && ye("tfChips", "Rooms to clean", Jt.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: me("vacuum", "set_rooms", t, { rooms: M(N.name) }), pressed: b.includes(N.name) })))
      ] };
    }
    if (d === "lock") {
      const h = a.state === "locked";
      return { on: !h, tone: "heat", button: { act: me("lock", h ? "unlock" : "lock", t), label: (h ? "Unlock " : "Lock ") + Bt(t) }, parts: ["controls"], sections: [
        ye("tfSeg", Bt(t), [
          { label: "Lock", act: me("lock", "lock", t), pressed: h },
          { label: "Unlock", act: me("lock", "unlock", t), pressed: a.state === "unlocked" },
          Gt(t, sm) && { label: "Open", act: me("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = a.state === "disarmed";
      return { on: !h, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: me("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", t), label: h ? "Arm " + Bt(t) + ", away" : "Disarm " + Bt(t) }, parts: ["controls"], sections: [
        ye("tfSeg", Bt(t), lm.filter(([, , , b]) => !b || Gt(t, b)).map(([b, M, H]) => ({ label: M, act: me("alarm_control_panel", H, t), pressed: a.state === b })))
      ] };
    }
    if (d === "valve") {
      const h = a.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: f("valve", (h ? "Close " : "Open ") + Bt(t)), parts: ["controls"], sections: [
        ye("tfSeg", Bt(t), [
          { label: "Open", act: me("valve", "open_valve", t), pressed: h },
          { label: "Close", act: me("valve", "close_valve", t), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Bt(t) }, sections: [] };
  }
  const Io = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ca(t)) + "°";
  function ai(t) {
    var pt;
    const a = (e) => t.readings.find((o) => Ut(o).device_class === e), s = a("temperature"), d = a("humidity"), f = (e) => {
      var o;
      return Number((o = S[e]) == null ? void 0 : o.state);
    }, v = (e) => t.actions.filter((o) => e.test(o)), h = t.lights.filter((e) => {
      var o;
      return ((o = S[e]) == null ? void 0 : o.state) === "on";
    }), b = v(/^cover\./), M = b.filter((e) => {
      var o;
      return ((o = S[e]) == null ? void 0 : o.state) !== "closed";
    }), H = [...new Set(b.map((e) => tc(S[e])))], N = v(/^climate\./)[0], O = v(/^humidifier\./)[0], U = v(/^media_player\./), lt = U.find((e) => {
      var o;
      return ((o = S[e]) == null ? void 0 : o.state) === "playing";
    }) || U.find((e) => {
      var o;
      return ((o = S[e]) == null ? void 0 : o.state) === "paused";
    }), dt = t.plugs.filter((e) => {
      var o;
      return ((o = S[e]) == null ? void 0 : o.state) === "on";
    }), $ = [];
    if (s && Number.isFinite(f(s)) && $.push({ key: "temp", id: s, kind: "reading", icon: Zo(s), label: "Temperature", value: Ca(f(s)) + "°" }), d && Number.isFinite(f(d)) && $.push({ key: "hum", id: d, kind: "reading", icon: Zo(d), label: "Humidity", value: Math.round(f(d)) + "%" }), t.lights.length && $.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Zo("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + t.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? Gs(h[0]) : "",
      acts: t.lights.map((e) => ["light", h.length ? "turn_off" : "turn_on", e]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), b.length) {
      const e = H.length === 1 ? $h[H[0]] : "covers", o = Math.round(b.reduce((r, p) => r + Pn(p), 0) / b.length);
      $.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: M.length ? nn([146, 107, 199]) : "",
        icon: Zo("", ((pt = pp[H[0]]) == null ? void 0 : pt[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ce(e),
        value: o <= 0 ? "Closed" : o >= 100 ? "Open" : o + "% open",
        short: o <= 0 ? "Closed" : o + "%",
        on: M.length > 0,
        acts: b.map((r) => ["cover", M.length ? "close_cover" : "open_cover", r]),
        aria: (M.length ? "Close the " : "Open the ") + e + " in " + t.name
      });
    }
    if (N) {
      const e = Ut(N), o = S[N].state === "off";
      $.push({
        key: "climate",
        kind: "control",
        tone: e.hvac_action === "cooling" ? "cool" : "heat",
        light: _o(N) ? nn(_o(N)) : "",
        icon: Zo(N),
        label: Bt(N),
        value: o ? "Off" : Ce(e.hvac_action || S[N].state) + " · " + Io(e.temperature),
        short: o ? "Off" : Io(e.temperature),
        on: !o,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + Bt(N) + (o ? " on" : " off")
      });
    }
    if (O) {
      const e = S[O].state === "on";
      $.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: e ? nn([33, 150, 243]) : "",
        icon: Zo("", "mdi:air-humidifier"),
        label: Bt(O),
        value: e ? "On · " + Ut(O).humidity + "%" : "Off",
        short: e ? Ut(O).humidity + "%" : "Off",
        on: e,
        acts: [["humidifier", "toggle", O]],
        aria: "Turn " + Bt(O) + (e ? " off" : " on")
      });
    }
    if (U.length) {
      const e = lt || U[0], o = S[e], r = o.state === "playing";
      $.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: _o(e) ? nn(_o(e)) : "",
        icon: Zo(e),
        label: Bt(e),
        value: qe(e),
        short: r ? "Playing" : o.state === "paused" ? "Paused" : Ce(o.state),
        on: r,
        acts: [["media_player", o.state === "playing" || o.state === "paused" ? "media_play_pause" : "toggle", e]],
        aria: (r ? "Pause " : "Play ") + Bt(e)
      });
    }
    return t.plugs.length && $.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: dt.length ? nn([255, 193, 7]) : "",
      icon: Zo("", "mdi:power-plug"),
      label: "Plugs",
      value: dt.length ? dt.length + " of " + t.plugs.length + " on" : "All off",
      short: dt.length ? dt.length + " on" : "Off",
      on: dt.length > 0,
      acts: t.plugs.map((e) => ["switch", dt.length ? "turn_off" : "turn_on", e]),
      aria: (dt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((e) => $.push(Ut(e).device_class === "moisture" ? { key: "alert:" + e, kind: "alert", icon: Zo(e), label: "Water leak" } : { key: "note:" + e, kind: "note", icon: Zo(e), label: Bt(e) + " " + qe(e).toLowerCase() })), $;
  }
  const Ha = (t, a) => {
    const s = (d) => t.actions.filter((f) => d.test(f));
    return {
      lights: t.lights,
      covers: s(/^cover\./),
      climate: s(/^climate\./).slice(0, 1),
      humidifier: s(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = s(/^media_player\./);
        return [d.find((f) => {
          var v;
          return ((v = S[f]) == null ? void 0 : v.state) === "playing";
        }) || d.find((f) => {
          var v;
          return ((v = S[f]) == null ? void 0 : v.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[a] || [];
  }, Fa = (t, a, s) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Xo(t.acts) + '" aria-label="' + it(t.aria) + '" aria-pressed="' + t.on + '">' + s + "</button>", Ie = (t) => '<button class="tfAName" type="button" data-go="' + it(t.id) + '" aria-label="Open ' + it(t.name) + '">' + it(t.name) + "</button>";
  function On(t, a, s = !1) {
    const d = a.find((b) => b.key === "lights"), f = !!(d != null && d.on), v = "", h = '<span class="tfAreaGlyph"' + Ke("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return s || !d ? '<span class="tfIcon tfAreaIcon' + (f ? " on" : "") + '"' + v + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (f ? " on" : "") + '" type="button"' + v + ' data-acts="' + Xo(d.acts) + '" aria-label="' + it(d.aria) + '" aria-pressed="' + f + '">' + h + "</button>";
  }
  const uo = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + it(a.label) + "</span>").join(" "), Ar = (t) => t.readings.find((a) => Ut(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => S[a]) || null, u = (t, a) => {
    const s = Bt(a);
    return s.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Ce(s.slice(t.name.length + 1)) : s;
  };
  function g(t) {
    const a = S[t], s = Ut(t), d = t.split(".")[0], f = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(f)) {
      if (s.device_class === "temperature") return { text: Io(f) };
      const v = s.unit_of_measurement || "";
      return v === "%" ? { text: Math.round(f) + "%" } : { text: Ca(f, Number.isInteger(f) ? 0 : 1), unit: v };
    }
    if (d === "climate" && (s.current_temperature ?? s.temperature) != null) return { text: Io(s.current_temperature ?? s.temperature) };
    if (d === "light") return { text: a.state !== "on" ? "Off" : kn(t) ? Gn(a) + "%" : "On" };
    if (d === "cover") {
      const v = Pn(t);
      return { text: v <= 0 ? "Closed" : v >= 100 ? "Open" : v + "%" };
    }
    return d === "humidifier" ? { text: a.state === "on" ? s.humidity + "%" : "Off" } : d === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Ce(a.state) } : { text: qe(t) };
  }
  const y = (t, a, s) => {
    const d = s.find((b) => b.key === "temp"), f = s.find((b) => b.key === "hum"), v = Ut(a), h = S[a].state === "off";
    return a.startsWith("climate.") ? [u(t, a), h ? "Off" : Ce(v.hvac_action || S[a].state) + (v.temperature != null ? " · " + Io(v.temperature) : ""), f && f.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === a) && u(t, a), d && d.id !== a && d.value, f && f.id !== a && f.value + " humidity"].filter(Boolean).join(" · ");
  };
  function C(t, a, s) {
    const d = s && g(s), f = s ? y(t, s, a) : "", v = (M) => {
      const H = Ha(t, M.key);
      return H.length === 1 ? H[0] : "group:" + t.id + ":" + M.key;
    }, h = a.filter((M) => M.kind === "control").slice(0, 4).map((M) => '<div class="tfATile' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + (M.light ? ' data-light style="' + M.light + '"' : "") + ">" + Fa(M, "tfIcon", M.icon) + '<button class="tfName" type="button" data-more="' + it(v(M)) + '" aria-label="' + it(t.name + " " + M.label.toLowerCase() + ", " + M.value + ". Open") + '"><span class="activityRowName">' + it(M.label) + '</span><span class="activityRowMeta">' + it(M.value) + "</span></button></div>"), b = uo(a);
    return '<div class="workoutPanelTop">' + On(t, a) + '<div class="tfATitle">' + Ie(t) + "</div>" + (b ? '<div class="tfATags">' + b + "</div>" : "") + "</div>" + (s ? '<button class="tfABig" type="button" data-more="' + it(s) + '" aria-label="' + it(Bt(s) + ", " + qe(s) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + it(d.text) + (d.unit ? '<span class="tfABigUnit">' + it(d.unit) + "</span>" : "") + "</span>" + (f ? '<span class="tfABigSub">' + it(f) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function I(t) {
    const a = t.id === Mt, s = ai(t), d = Ar(t), f = d && g(d), v = [...s.filter((h) => h.kind === "control"), ...s.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + it(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + it(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + C(t, s, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + On(t, s, !0) + '<span class="tfACName">' + it(t.name) + '</span></div><span class="tfACMain">' + (f ? it(f.text + (f.unit ? " " + f.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + v.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let V = [];
  const Y = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + V.map(I).join("") + "</section></div>", ct = (t) => t.startsWith("room:"), J = (t) => V.find((a) => "room:" + a.id === t);
  function vt(t, a) {
    const s = ai(t), d = Ar(t), f = d && g(d), v = d ? y(t, d, s) : "", h = f ? f.text + (f.unit ? " " + f.unit : "") : "", b = (U) => {
      const lt = Ha(t, U.key);
      return lt.length === 1 ? lt[0] : "group:" + t.id + ":" + U.key;
    }, M = s.filter((U) => U.kind === "control").slice(0, 4), H = (U) => U.on && U.light ? ' data-light style="' + U.light + '"' : "", N = M.map((U) => '<button class="tfIcon' + (U.on ? " on" : "") + '" type="button" data-tone="' + U.tone + '"' + H(U) + ' data-more="' + it(b(U)) + '" aria-label="' + it(U.label + ", " + U.value + ". Open its controls") + '">' + U.icon + "</button>"), O = M.map((U) => '<button class="tfRoomDev" type="button" data-more="' + it(b(U)) + '" aria-label="' + it(U.label + ", " + U.value + ". Open its controls") + '"><span class="tfIcon' + (U.on ? " on" : "") + '" data-tone="' + U.tone + '"' + H(U) + ">" + U.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + it(U.label) + '</span><span class="activityRowMeta">' + it(U.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + it(a) + '" data-go="' + it(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Ke("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + it(t.id) + '" aria-label="Open ' + it(t.name) + '"><span class="activityRowName">' + it(t.name) + "</span>" + (h || v ? '<span class="activityRowMeta">' + (h ? '<span class="tfRoomInline">' + it(h) + (v ? " · " : "") + "</span>" : "") + it(v) + "</span>" : "") + "</button></div>" + (h ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + it(h) + "</span>" + (v ? '<span class="tfRoomSub">' + it(v) + "</span>" : "") + "</div>" : "") + (N.length ? '<div class="tfRoomDevices">' + N.join("") + '</div><div class="tfRoomHeads">' + O.join("") + "</div>" : "") + "</div>";
  }
  const xt = () => [
    { key: "home", name: "Home", ids: Jt.homeVacuums },
    ...Jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Ct = (t, a, s) => t + " " + (t === 1 ? a : s), jt = () => (X.favourites ?? kt.favorite_entities ?? []).filter((t) => S[t]);
  function zt() {
    if (!oe) {
      const a = Object.entries(na).sort((d, f) => f[1] - d[1]).map(([d]) => d), s = Jt.rooms.flatMap((d) => d.actions);
      oe = [.../* @__PURE__ */ new Set([...Xt, ...a, ...s.filter((d) => Fn(d).on), ...s])];
    }
    const t = jt();
    return oe.filter((a) => S[a] && S[a].state !== "unavailable" && !t.includes(a));
  }
  let At = !1;
  function Yt() {
    if (!At || X.favSeeded || !Jt.rooms.length) return;
    const t = (s) => Object.keys(S).find((d) => Uo(d) && s(d)), a = [t((s) => s.startsWith("climate.")), t((s) => s.startsWith("cover.") && /curtain/.test(s)), t((s) => s.startsWith("valve.")), Jt.security.locks[0]];
    X = { ...X, favourites: [.../* @__PURE__ */ new Set([...X.favourites ?? kt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Sa();
  }
  const Ot = () => X.suggest ?? !kt.hide_suggested_entities;
  function Tt() {
    const t = new Set(X.favHidden || []), a = jt().filter((d) => !t.has(d)), s = Ot() ? zt().filter((d) => !t.has(d) && ls(d)) : [];
    return [...a, ...s].slice(0, cm);
  }
  const ie = (t) => {
    const a = jt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + it(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + it(Bt(t)) + '">' + rm(a) + "</button>";
  };
  function Zt(t, { area: a = !1, star: s = !1, plain: d = !1, say: f = null, alert: v = !1 } = {}) {
    var dt, $, pt, e, o, r;
    const h = d && ((o = (dt = i()) == null ? void 0 : dt.devices) == null ? void 0 : o[(e = (pt = ($ = i()) == null ? void 0 : $.entities) == null ? void 0 : pt[t]) == null ? void 0 : e.device_id]), b = h && (h.name_by_user || h.name) || Bt(t), M = t.split(".")[0], H = !d && bl.includes(M) ? Fn(t) : null, N = H ? H.on : ["on", "open", "playing"].includes((r = S[t]) == null ? void 0 : r.state), O = d ? null : H ? H.button : Xh.includes(M) ? { act: me(M, "toggle", t), label: "Turn " + Bt(t) + (N ? " off" : " on") } : M === "scene" || M === "script" ? { act: me(M, "turn_on", t), label: "Run " + Bt(t) } : null, U = (f ?? qe(t)) + (a && xe.get(t) ? " · " + xe.get(t) : ""), lt = (H == null ? void 0 : H.icon) || Mn(t);
    return '<div class="activityRow' + (O ? " tfPlug" : "") + (N ? " on" : "") + (s ? " tfPick" : "") + (v ? " alert" : "") + '" data-k="' + it((a ? "fav:" : "row:") + t) + '" data-tone="' + (M === "light" ? "light" : (H == null ? void 0 : H.tone) || "blue") + '"' + Zn(t) + ">" + (O && !s ? '<button class="tfIcon" type="button" data-act="' + O.act + '" aria-label="' + it(O.label) + '"' + Ke(t, lt) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ke(t, lt) + "></div>") + '<button class="tfName" type="button" data-more="' + it(t) + '" aria-label="' + it(b + ", " + U + ". More info") + '"><span class="activityRowName">' + it(b) + '</span><span class="activityRowMeta">' + it(U) + "</span></button>" + (s ? ie(t) : "") + "</div>";
  }
  const Te = () => {
    var t;
    return S[(t = X.sources) == null ? void 0 : t.weather] ? X.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((a) => a.startsWith("weather."));
  };
  function Ht() {
    var s;
    const t = (d) => Object.keys(S).filter((f) => f.startsWith("binary_sensor.") && d.includes(Ut(f).device_class));
    return ((s = St.alert_entities) != null && s.length ? St.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(ld).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => S[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[d.entity].state) }));
  }
  function He() {
    const t = Object.keys(ac), a = /* @__PURE__ */ new Set(), s = [];
    return (kt.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || a.has(d.key)) return;
        a.add(d.key);
      }
      s.push(d);
    }), t.forEach((d) => {
      a.has(d) || s.push({ type: "summary", key: d });
    }), s;
  }
  function Ge() {
    var pt;
    const t = ((pt = i()) == null ? void 0 : pt.entities) || {}, a = (e) => Ut(e).device_class, s = Object.keys(S).filter((e) => e.startsWith("sensor.") && a(e) === "battery" || e.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(e))), d = Jt.rooms.flatMap((e) => e.plants.map((o) => o.id));
    if (!s.length && !d.length) return null;
    const f = (e) => {
      var r;
      const o = (r = t[e]) == null ? void 0 : r.device_id;
      return !!o && Object.keys(S).some((p) => {
        var w;
        return p.startsWith("binary_sensor.") && ((w = t[p]) == null ? void 0 : w.device_id) === o && a(p) === "battery_charging" && S[p].state === "on";
      });
    }, v = (e) => e.startsWith("vacuum.") ? Ut(e).battery_level <= 20 && S[e].state !== "docked" : e.startsWith("binary_sensor.") ? a(e) === "battery" && S[e].state === "on" : parseFloat(S[e].state) <= 20 && !f(e), h = [...s, ...Jt.vacuums].filter((e) => S[e] && v(e)), b = [...s.filter((e) => a(e) === "problem" && S[e].state === "on"), ...d.filter((e) => {
      var o;
      return ((o = S[e]) == null ? void 0 : o.state) === "problem";
    })], M = s.filter((e) => S[e].state === "unavailable"), H = [.../* @__PURE__ */ new Set([...h, ...b, ...M])], N = (e) => {
      const o = parseFloat(S[e].state);
      return a(e) === "battery" && Number.isFinite(o) ? o : 101;
    }, O = [...d, ...Jt.vacuums, ...[...s].sort((e, o) => N(e) - N(o))].filter((e) => S[e] && !H.includes(e)), U = /* @__PURE__ */ new Map();
    O.forEach((e) => {
      var r;
      const o = ((r = Jt.areaOf) == null ? void 0 : r.call(Jt, e)) || "";
      U.set(o, [...U.get(o) || [], e]);
    });
    const lt = (e) => {
      const o = Jt.rooms.findIndex((r) => r.id === e);
      return e === "" ? 1 / 0 : o < 0 ? Jt.rooms.length : o;
    }, dt = [...U.keys()].sort((e, o) => lt(e) - lt(o)), $ = (e) => {
      var o, r, p, w;
      return ((o = Jt.rooms.find((T) => T.id === e)) == null ? void 0 : o.name) || ((w = (p = (r = i()) == null ? void 0 : r.areas) == null ? void 0 : p[e]) == null ? void 0 : w.name) || e;
    };
    return {
      value: [h.length && Ct(h.length, "low battery", "low batteries"), b.length && Ct(b.length, "problem", "problems"), M.length && Ct(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: H, alert: !0 }, ...dt.map((e) => ({ name: e ? $(e) : dt.length > 1 ? "Other devices" : "Devices", ids: U.get(e) }))].filter((e) => e.ids.length)
    };
  }
  function Aa() {
    var R;
    const t = Jt.rooms, a = Jt.security, s = (D, ot) => D.actions.filter((ut) => ot.test(ut)), d = (D) => t.map((ot) => ({ name: ot.name, ids: D(ot) })).filter((ot) => ot.ids.length), f = t.flatMap((D) => D.lights), v = f.filter((D) => {
      var ot;
      return ((ot = S[D]) == null ? void 0 : ot.state) === "on";
    }).length, h = t.map((D) => D.readings.find((ot) => Ut(ot).device_class === "temperature")).filter(Boolean).map((D) => Number(S[D].state)).filter(Number.isFinite), [b, M] = [Ca(Math.min(...h)), Ca(Math.max(...h))], H = t.flatMap((D) => s(D, /^media_player\./)), N = H.filter((D) => {
      var ot;
      return ((ot = S[D]) == null ? void 0 : ot.state) === "playing";
    }).length, O = Ht(), U = O.filter((D) => D.severity === "warning" && D.on).length, lt = a.locks.filter((D) => {
      var ot;
      return ["unlocked", "jammed", "open"].includes((ot = S[D]) == null ? void 0 : ot.state);
    }).length, dt = a.alarms.filter((D) => {
      var ot;
      return ((ot = S[D]) == null ? void 0 : ot.state) === "disarmed";
    }).length, $ = U ? Ct(U, "warning", "warnings") : null, pt = lt ? lt + " unlocked" : dt ? dt + " disarmed" : $ ? null : "All secure", e = Ge(), o = t.flatMap((D) => D.solar), r = o.find((D) => D.endsWith("_power")), p = {
      light: f.length && { value: v ? v + " on" : "All off", groups: d((D) => D.lights) },
      climate: h.length && { value: b === M ? b + "°" : b + " - " + M + "°", groups: d((D) => [...D.readings.filter((ot) => ["temperature", "humidity"].includes(Ut(ot).device_class)), ...s(D, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [$, pt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((D) => D.ids.length) },
      media_players: H.length && { value: N ? N + " playing" : "No media playing", groups: d((D) => s(D, /^media_player\./)) },
      maintenance: e,
      energy: Jt.grid && { value: $o(Number(((R = S[r]) == null ? void 0 : R.state) || 0) * 1e3 + Number(S[Jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...o, Jt.grid] }] }
    }, w = [], T = O.filter((D) => D.severity !== "warning" && D.on);
    return T.length && w.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ct(T.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: T.map((D) => D.entity) }] }), He().forEach((D) => {
      D.type !== "summary" ? w.push({ key: "path:" + D.path, name: D.label || D.path, icon: D.icon || "mdi:link-variant", colour: "", value: "" }) : !D.hidden && p[D.key] && !(X.hiddenSums || []).includes(D.key) && w.push({ key: D.key, ...ac[D.key], ...p[D.key] });
    }), w;
  }
  const sn = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + it(t.key) + '" data-k="sum:' + it(t.key) + '" aria-label="' + it(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Di() + '"' : t.colour && ca(t.colour) ? ' style="' + ca(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Cr : "") + '<div class="tfIcon" aria-hidden="true"' + Ke(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + it(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + it(t.value) + "</div>" : "") + "</div></div>";
  function ni(t) {
    const a = jt();
    X = { ...X, favourites: a.includes(t) ? a.filter((s) => s !== t) : [...a, t], favHidden: (X.favHidden || []).filter((s) => s !== t) }, Sa(), wa();
  }
  function Oa(t) {
    document.querySelector("home-assistant") && (at.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Jn(t, a) {
    if (t.startsWith("path:")) {
      Oa(t.slice(5));
      return;
    }
    Co("summary:" + t, a);
  }
  async function ge() {
    const t = (h) => Promise.resolve().then(() => _(h)).catch(() => null), [a, s, d, f] = await Promise.all([
      t({ type: "frontend/get_user_data", key: up }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), v = (a == null ? void 0 : a.value) || {};
    X = { favourites: v.favourites ?? null, sources: v.sources, hiddenSums: v.hiddenSums, dash: v.dash, named: v.named, favHidden: v.favHidden, suggest: v.suggest, favSeeded: v.favSeeded }, kt = (s == null ? void 0 : s.value) || {}, St = (d == null ? void 0 : d.value) || {}, Xt = Array.isArray(f == null ? void 0 : f.entities) ? f.entities : [], oe = null, Object.keys(S).length && wa(), ln(), At = !0, Yt();
  }
  const Qn = "HomeCore";
  async function ln() {
    var d, f, v;
    const t = location.pathname.split("/")[1], a = X.named || [];
    if (!((f = (d = i()) == null ? void 0 : d.user) != null && f.is_admin) || !t || a.includes(t)) return;
    const s = () => {
      X = { ...X, named: [...a, t] }, Sa();
    };
    try {
      const h = (v = await _({ type: "lovelace/dashboards/list" })) == null ? void 0 : v.find((H) => H.url_path === t);
      if (!h || h.mode === "yaml") return;
      if (h.title === Qn) {
        s();
        return;
      }
      const b = await _({ type: "lovelace/config", url_path: t }), M = ((b == null ? void 0 : b.views) || []).flatMap((H) => [...H.cards || [], ...(H.sections || []).flatMap((N) => N.cards || [])]);
      if (!M.length || !M.every((H) => (H == null ? void 0 : H.type) === "custom:move-assistant-card" && H.layout === "test-focus")) return;
      await _({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Qn }), s();
    } catch {
    }
  }
  let Ua = null, to = 0, Ho = !1;
  const oi = (t) => {
    const a = t.split(".")[0], s = Ut(t).device_class;
    return dm.includes(a) && (a !== "binary_sensor" || ld.includes(s) || !!xp[s]);
  }, ma = (t) => t.startsWith("binary_sensor.") ? xp[Ut(t).device_class] : null;
  async function Ys() {
    var t;
    if (!(Ho || Date.now() - to < 30 * 1e3)) {
      Ho = !0, to = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(oi), s = a.length ? await _({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        Ua = Array.isArray(s) ? s.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Ua = null;
      }
      Ho = !1, wa();
    }
  }
  function rs() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), s = (f) => {
      if (!S[f.entity_id] || !oi(f.entity_id) || !ls(f.entity_id) || ["unavailable", "unknown"].includes(f.state)) return;
      if (ma(f.entity_id)) {
        const h = a.get(f.entity_id);
        f.state === "on" ? (!h || f.when > h.when + 1) && a.set(f.entity_id, { ...f, alarm: !0, cleared: null }) : h && !h.cleared && f.when > h.when && (h.cleared = f.when);
        return;
      }
      const v = t.get(f.entity_id);
      (!v || f.when > v.when + 1) && t.set(f.entity_id, f);
    };
    [...Ua || []].sort((f, v) => f.when - v.when).forEach(s);
    const d = Ua ? to / 1e3 - 5 : 0;
    return Object.keys(S).forEach((f) => {
      var b;
      const v = S[f], h = v.last_changed ? Date.parse(v.last_changed) / 1e3 : 0;
      h > d && s({ entity_id: f, state: v.state, when: h, context_user_id: (b = v.context) == null ? void 0 : b.user_id });
    }), [...t.values(), ...a.values()].sort((f, v) => v.when - f.when).slice(0, pm);
  }
  function kl(t) {
    var d;
    const a = t.context_user_id && Object.keys(S).find((f) => f.startsWith("person.") && Ut(f).user_id === t.context_user_id);
    if (a) return Bt(a);
    const s = (d = i()) == null ? void 0 : d.user;
    return s && t.context_user_id === s.id ? s.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function wd(t) {
    const a = t.entity_id.split(".")[0], s = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[s] || Ce(s).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[s] || Ce(s).toLowerCase() : a === "binary_sensor" ? s === "on" ? "opened" : "closed" : a === "climate" ? s === "off" ? "turned off" : "set to " + Ce(s).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[s] || Ce(s).toLowerCase() : a === "alarm_control_panel" ? (wp[s] || Ce(s)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[s] || Ce(s).toLowerCase() : s === "on" ? "turned on" : s === "off" ? "turned off" : Ce(s).toLowerCase();
  }
  function qa(t) {
    const a = t.entity_id, s = t.alarm && ma(a), d = Bt(a) + " " + (s ? s[0] : wd(t)), f = s ? Rn(t.when * 1e3) + (t.cleared ? " · " + s[1] + " since " + Rn(t.cleared * 1e3) : "") : [kl(t), Rn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (s ? " alert" : "") + '"><div class="tfIcon' + (s ? " alert" : "") + '" aria-hidden="true"' + Ke(a, Mn(a)) + '></div><button class="tfName" type="button" data-more="' + it(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + it(d + ", " + f + ". More info") + '"><span class="activityRowName">' + it(d) + '</span><span class="activityRowMeta">' + it(f) + "</span></button></div>";
  }
  let fo = null, ii = 0;
  const xd = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ml() {
    var a;
    if (Date.now() - ii < 5 * 60 * 1e3) return;
    ii = Date.now();
    const t = [];
    try {
      const s = ((a = await _({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], d = (f) => s.filter((v) => v.type === f).flatMap((v) => f === "grid" ? (v.flow_from || []).map((h) => h.stat_energy_from) : [v.stat_energy_from]).filter(Boolean);
      for (const [f, v, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const b = await Promise.all(h.map((M) => Promise.resolve(_({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((H) => Number(H == null ? void 0 : H.change) || 0, () => 0)));
        t.push({ key: f, name: v, id: h[0], ids: h, value: b.reduce((M, H) => M + H, 0), unit: Ut(h[0]).unit_of_measurement || (f === "gas" || f === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    fo = t, wa();
  }
  let zi = null, Zs = [];
  function Er() {
    var v;
    const t = Zs = fo != null && fo.length ? fo : xd.map(([h, b, M, H]) => {
      if (h === "solar") {
        const O = Object.keys(S).find((U) => U.endsWith("_solar_today") && !U.includes("made_up_energy"));
        O && Number.isFinite(Number(S[O].state)) && (M = Number(S[O].state));
      }
      const N = "sensor.made_up_energy_" + h;
      return S[N] = { entity_id: N, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: H, state_class: "total_increasing" } }, { key: h, name: b, id: N, value: M, unit: H };
    });
    qt.clear(), t.some((h) => h.id === zi) || (zi = t[0].id);
    const a = t.map((h) => {
      const b = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, M = um[h.key], H = h.id === zi;
      return qt.set(h.id, { name: h.name, text: b, icon: M }), '<div class="activityRow tap' + (H ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + it(h.id) + '" aria-pressed="' + H + '" aria-label="' + it(h.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ke("", M, h.name) + '></div><div><div class="activityRowName">' + it(h.name) + '</div><div class="activityRowMeta">' + it(b) + "</div></div></div>";
    }), s = t.find((h) => h.id === zi), d = (((v = ve().opts.energy) == null ? void 0 : v.graph) || "above") === "below", f = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + it(s.id) + '" role="img" aria-label="' + it(s.name) + ', last 24 hours"></svg></div>';
    return Kn("dash:energy", 0, "Energy today", a, f, Aa().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Ks(t) {
    const a = E.querySelector(".tfDash-energy"), s = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !s || t === zi || (zi = t, a.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const f = d.dataset.energyPick === t;
      d.classList.toggle("picked", f), d.setAttribute("aria-pressed", String(f));
    }), s.dataset.graph = t, s.dataset.drawn = "", We.set("dash:energy", Er()), rl(!0));
  }
  const Vi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ss = /* @__PURE__ */ new Map();
  async function ho(t) {
    const a = /* @__PURE__ */ new Date(), s = new Date(a).setHours(0, 0, 0, 0), d = a.getHours(), f = a.getMinutes() / 60, v = Array.from({ length: 24 }, (b, M) => M <= d ? 0 : null);
    if (!t.ids) {
      const b = Vi[t.key] || Vi.electricity, M = b.map((N, O) => O < d ? N : O === d ? N * f : 0), H = M.reduce((N, O) => N + O, 0) || 1;
      return v.map((N, O) => N == null ? null : t.value * M[O] / H);
    }
    const h = ss.get(t.id);
    if (h && h.day === s && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const b = await _({ type: "recorder/statistics_during_period", start_time: new Date(s).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((N) => ((b == null ? void 0 : b[N]) || []).forEach((O) => {
        const U = typeof O.start == "number" ? O.start : Date.parse(O.start), lt = new Date(U).getHours();
        U >= s && lt < d && (v[lt] += Number(O.change) || 0);
      }));
      const M = new Date(a).setMinutes(0, 0, 0), H = await Promise.all(t.ids.map((N) => Promise.resolve(_({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(M).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((O) => Number(O == null ? void 0 : O.change) || 0, () => 0)));
      v[d] = H.reduce((N, O) => N + O, 0);
    } catch {
    }
    return ss.set(t.id, { at: Date.now(), day: s, hours: v }), v;
  }
  async function _r(t, a) {
    const s = await ho(a);
    if (!t.isConnected) return;
    const d = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), v = 18, h = f - 18, b = d / 24, M = b * 0.72, H = (/* @__PURE__ */ new Date()).getHours(), N = s.map((pt) => pt ?? 0), O = Math.max(0, ...N), U = (pt) => h - (O > 0 ? pt / O * (h - v) : 0), lt = (pt) => pt.toLocaleString(void 0, { maximumFractionDigits: pt < 10 ? 2 : 1 }) + " " + a.unit, dt = (pt) => String(pt).padStart(2, "0") + ":00", $ = O > 0 ? N.indexOf(O) : -1;
    t.setAttribute("viewBox", "0 0 " + d + " " + f), t.setAttribute("aria-label", a.name + " today by the hour: " + lt(a.value) + ($ >= 0 ? ", most " + lt(O) + " at " + dt($) : "")), t.innerHTML = [v, (v + h) / 2, h].map((pt) => '<line x1="0" x2="' + d + '" y1="' + pt + '" y2="' + pt + '" stroke="var(--line)" stroke-width="1"/>').join("") + s.map((pt, e) => pt > 0 ? '<rect x="' + (e * b + (b - M) / 2).toFixed(1) + '" y="' + U(pt).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (h - U(pt)).toFixed(1) + '" rx="2" fill="' + (e === H ? "var(--primary)" : "var(--text)") + '"' + (e === H ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((pt) => '<text x="' + (pt * b).toFixed(1) + '" y="' + (f - 3) + '">' + String(pt).padStart(2, "0") + "</text>").join("") + ($ >= 0 ? '<text x="0" y="11">Most: ' + it(lt(O)) + " at " + dt($) + "</text>" : "");
  }
  function $s(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((s, d) => s.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Sl(t) {
    var d;
    if ((d = window.matchMedia) != null && d.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, s] = t.querySelectorAll("path");
    Wp(t, s, [a].filter(Boolean));
  }
  let Gi = null, Xs = 0;
  const ls = (t) => !t.startsWith("light.") || fm.includes((xe.get(t) || "").toLowerCase()), Fo = () => Math.max(2, ua((E == null ? void 0 : E.clientWidth) || 0).n), Cl = (t) => {
    const a = Fn(t);
    return a.sections.map((s, d) => s && (a.parts || [])[d]).filter(Boolean);
  }, Tl = (t) => Cl(t).slice(0, Xi(t) - 1);
  function ds(t) {
    const a = ve().tiles;
    if (a) return a.filter((d) => S[d] || J(d));
    if (!Gi) {
      const d = (f) => {
        var v;
        return (((v = S[f]) == null ? void 0 : v.state) === "on" ? 1e6 : 0) + (na[f] || 0);
      };
      Gi = {
        lights: Jt.rooms.flatMap((f) => f.lights).filter((f) => {
          var v;
          return ls(f) && ((v = S[f]) == null ? void 0 : v.state) !== "unavailable";
        }).sort((f, v) => d(v) - d(f) || Bt(f).localeCompare(Bt(v))),
        climates: Jt.rooms.flatMap((f) => f.actions.filter((v) => v.startsWith("climate.")))
      };
    }
    const s = Gi.climates.filter((d) => S[d]).slice(0, t > 3 ? 2 : 1);
    return [...Gi.lights.filter((d) => S[d]).slice(0, Math.max(0, t - s.length)), ...s];
  }
  const Ui = (t, a, s, d) => (f) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + s + '">' + (d ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + s + "</button>" : '<div class="activityTitle">' + s + "</div>") + "</div>" : "") + '<div class="activityRows">' + f + "</div></section>";
  function Yi(t, a) {
    var v, h;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + it(((h = (v = i()) == null ? void 0 : v.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ui("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: a.map((b) => ({ key: "sum:" + b.key, html: sn(b) })) }), V.length && t.push({ key: "areas", html: Y(0) });
    const s = Tt();
    s.length && t.push({ key: "favs", wrap: Ui("tfDash-favs", "favs", "Favourites", !0), tiles: s.map((b) => ({ key: "fav:" + b, html: Zt(b, { area: !0 }) })) });
    const d = rs();
    t.push({ key: "dash:act", html: Kn("dash:act", 0, "Activity", d.length ? d.map(qa) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Er() });
    const f = Fo();
    return Xs = f, ds(f >= 3 ? f : f * 2).forEach((b) => t.push({
      key: "dash:tile:" + b,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + it(b) + '">' + M + "</div>",
      tiles: [{ key: b, html: ct(b) ? vt(J(b), b) : po(b, !1, Tl(b)) }]
    })), Ys(), Ml(), t;
  }
  const Cn = 252, Ee = 16, Zi = 200, Dr = Math.round(Cn * 1.25), Ki = 60, ga = Ki + Ee, Ll = 3, yd = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, cs = ["wx", "favs", "act", "energy", "avg"], mo = ["XS", "S", "M", "L", "XL"], ri = mo.length, si = ["Narrow", "Wide", "Really wide"], $i = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Al = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && Hn(t) ? ri : Math.min(ri, Cl(t).length + 1), Xi = (t) => {
    const a = ve().opts[t] || {}, s = Al(t), d = Number(a.h) || (a.tall ? 5 : $i[t] || Js);
    return Math.max(1, Math.min(s, d));
  }, Js = 2, kd = 90, ps = 56, Da = (t) => {
    var a;
    return yd[t] || (t.startsWith("room:") ? ((a = V.find((s) => "room:" + s.id === t)) == null ? void 0 : a.name) || "Area" : Bt(t));
  }, go = 409, Qs = 128;
  let Wa = !1, Se = null, ia = null, Br = !1, li = /* @__PURE__ */ new Map(), us = 0, Oo = 0;
  const vo = ["title", "sums"], ua = (t) => {
    const a = Math.max(1, Math.floor((t + Ee) / (Zi + Ee)));
    return { n: a, w: Math.max(1, Math.min(Dr, Math.floor((t - (a - 1) * Ee) / a))) };
  }, ve = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...X.dash || {} }, a = ce.filter((s) => !(t.known || []).includes(s) && !t.hidden.includes(s));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function fs(t) {
    X = { ...X, dash: { ...t, known: ce } }, Sa();
  }
  function Ji() {
    const t = (a) => E.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", da.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", da.avg, 2],
      ...ce.map((a) => [a, da[a], 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, s, d, f = !1]) => ({ key: a, el: s, span: d, tile: f }));
  }
  const hs = (t, a, s) => {
    if (t.span === "full") return a;
    const d = t.span === "areas" && ve().spans.areas;
    return d ? d === "full" ? a : Math.min(a, Math.max(2, d)) : t.span === "areas" ? Math.min(a, Math.ceil((go + Math.max(0, V.length - 1) * (Qs + Ee) + Ee) / (s + Ee))) : Math.min(a, ve().spans[t.key] ?? t.span);
  }, ms = (t) => Xi(t.key);
  function Rr(t, a, s = null) {
    const d = ve().cells, f = t.every((b) => !d[b.key] || d[b.key].col + b.cols <= a), v = (b) => d[b.key] || { row: 1e9, col: 0 };
    return (() => {
      const b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), H = ($, pt, e, o) => {
        for (let r = pt; r < pt + o; r++) for (let p = $; p < $ + e; p++) if (b.has(p + "," + r)) return !1;
        return !0;
      }, N = ($, pt, e) => {
        for (let o = e; o < e + $.rows; o++) for (let r = pt; r < pt + $.cols; r++) b.add(r + "," + o);
        M.set($.key, { col: pt, row: e, cols: $.cols, rows: $.rows });
      }, O = ($, pt, e) => {
        for (pt = Math.max(0, Math.min(a - $.cols, pt)), e = Math.max(0, e); !H(pt, e, $.cols, $.rows); ) e++;
        N($, pt, e);
      }, U = ($) => {
        for (let pt = 0; ; pt++) for (let e = 0; e <= a - $.cols; e++) if (H(e, pt, $.cols, $.rows)) {
          N($, e, pt);
          return;
        }
      };
      s && O(s, Se.col, Se.row);
      const lt = t.filter(($) => $ !== s), dt = ($, pt) => v($).row - v(pt).row || v($).col - v(pt).col;
      return f ? (lt.filter(($) => d[$.key]).sort(dt).forEach(($) => O($, d[$.key].col, d[$.key].row)), lt.filter(($) => !d[$.key]).forEach(U), M) : ([...lt].sort(dt).forEach(U), M);
    })();
  }
  function El(t, a) {
    const s = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = (v, h, b) => {
      for (let M = h; M < h + b.rows; M++) for (let H = v; H < v + b.cols; H++) if (s.has(H + "," + M)) return !1;
      return !0;
    };
    return t.forEach((v) => {
      for (let h = 0; ; h++) {
        let b = 0;
        for (; b <= a - v.cols && !f(b, h, v); ) b++;
        if (!(b > a - v.cols)) {
          for (let M = h; M < h + v.rows; M++) for (let H = b; H < b + v.cols; H++) s.add(H + "," + M);
          d.set(v.key, { col: b, row: h, cols: v.cols, rows: v.rows });
          return;
        }
      }
    }), d;
  }
  function gs() {
    const t = ve(), a = new Set(t.hidden), s = Ji().filter((h) => !vo.includes(h.key));
    let d = li;
    if (!d.size) {
      const h = t.pegs || 4, b = s.filter((M) => !a.has(M.key));
      b.forEach((M) => {
        M.cols = hs(M, h, Cn), M.rows = ms(M) ?? Js;
      }), d = Rr(b, h);
    }
    const f = (h) => !a.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    s.sort((h, b) => f(h).row - f(b).row || f(h).col - f(b).col);
    const v = (t.phone || []).map((h) => s.find((b) => b.key === h && !a.has(h))).filter(Boolean);
    return [...v, ...s.filter((h) => !v.includes(h))];
  }
  const Md = () => {
    const t = gs();
    t.forEach((a, s) => a.el.style.setProperty("--o", String(3 + s))), _l([...Ji().filter((a) => vo.includes(a.key)), ...t].map((a) => a.el));
  };
  function _l(t) {
    if (Se) return;
    const a = n.activeElement;
    let s = null;
    for (const d of new Set(t.map((f) => {
      for (; f && f.parentElement !== E; ) f = f.parentElement;
      return f;
    }).filter(Boolean))) {
      const f = s ? s.nextSibling : E.querySelector(":scope > [data-tf]");
      if (d !== f)
        try {
          E.moveBefore ? E.moveBefore(d, f) : E.insertBefore(d, f);
        } catch {
          E.insertBefore(d, f);
        }
      s = d;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const di = (t, a) => fs({ ...t, cells: a, pegs: ua(E.clientWidth).n });
  function ra() {
    var o;
    if (!k || !E) return;
    const t = E.clientWidth, a = t < 2 * Cn + Ee, s = m.classList.contains("tfDash"), { n: d, w: f } = a ? { n: 2, w: Math.floor((t - Ee) / 2) } : ua(t);
    Qt.classList.add("tfPegs"), Qt.style.setProperty("--peg-n", d), Qt.style.setProperty("--peg-w", f + "px");
    const v = new Set(ve().hidden);
    ce.forEach((r) => {
      var p;
      return (p = da[r]) == null ? void 0 : p.classList.toggle("tfNotAdded", v.has(r) && !(Se != null && Se.fromTray && Se.key === r));
    }), m.classList.toggle("tfBoard", s), m.classList.toggle("tfEditing", s && Wa && !a);
    const h = c("dashEditNav");
    h && (h.hidden = !s || a, h.classList.toggle("active", Wa), h.setAttribute("aria-pressed", String(Wa)), h.setAttribute("aria-label", Wa ? "Done editing" : "Edit the dashboard"), h.title = Wa ? "Done" : "Edit", h.innerHTML = Wa ? im : bp);
    const b = s ? Ji() : [];
    if (!s) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((r) => {
        r.classList.remove("tfBoardItem", "tfBoardHidden"), r.style.left = r.style.top = r.style.width = r.style.height = "";
      }), (o = E.querySelector(".tfDash-act > .activityRows")) == null || o.style.removeProperty("max-height"), Dl(!1), m.classList.contains("tfDash") && Md(), ba();
      return;
    }
    E.style.setProperty("--peg-w", f + "px");
    const M = new Set(ve().hidden), H = f + Ee;
    Se != null && Se.fromTray && M.delete(Se.key), b.forEach((r) => r.el.classList.toggle("tfBoardHidden", M.has(r.key)));
    const N = b.filter((r) => !M.has(r.key) && getComputedStyle(r.el).display !== "none");
    let O = 0;
    N.filter((r) => vo.includes(r.key)).forEach((r) => {
      r.el.classList.add("tfBoardItem"), Object.assign(r.el.style, { width: t + "px", height: "", left: "0px", top: O + "px" });
      const p = r.key === "sums" && r.el.querySelector(".tfDash-bar"), w = p ? p.querySelectorAll(".activityRow").length : 0;
      p && (p.style.maxWidth = "none");
      for (let T = 1; p && T <= w && (p.style.setProperty("--bar-cols", String(Math.ceil(w / T))), !(p.offsetWidth <= t)); T++)
        ;
      p && (p.style.maxWidth = ""), O += r.el.offsetHeight + Ee;
    }), Oo = O;
    const U = N.filter((r) => !vo.includes(r.key));
    U.forEach((r) => {
      r.cols = hs(r, d, f), r.el.classList.add("tfBoardItem"), r.el.style.width = (r.cols === d ? t : r.cols * f + (r.cols - 1) * Ee) + "px", r.el.style.height = "", r.rows = ms(r) ?? Math.max(1, Math.ceil((r.el.offsetHeight + Ee - 6) / ga));
    });
    const lt = Se && U.find((r) => r.key === Se.key), dt = a && gs().map((r) => r.key), $ = (r) => dt.includes(r.key) ? dt.indexOf(r.key) : -1, pt = a ? El([...U].sort((r, p) => $(r) - $(p)), d) : Rr(U, d, lt);
    pt.forEach((r) => Object.assign(r, { x: r.cols === d ? 0 : r.col * H, y: Oo + r.row * ga, w: r.cols === d ? t : r.cols * f + (r.cols - 1) * Ee, h: r.rows * ga - Ee })), U.forEach((r) => {
      const p = pt.get(r.key);
      r.el.style.height = p.h + "px", r.el.dataset.rows = a && r.key === "wx" ? 5 : Xi(r.key), r.el.toggleAttribute("data-narrow", !a && p.cols === 1 && d > 1), r.el.dataset.cols = p.cols, r.el.classList.contains("tfDac") && r.el.style.setProperty("--tf-dac-pad", p.h - kd + "px"), !(r === lt && !Se.fromTray) && (r.el.style.left = p.x + "px", r.el.style.top = p.y + "px");
    }), a || (li = pt), _l([...N.filter((r) => vo.includes(r.key)), ...U.slice().sort((r, p) => pt.get(r.key).row - pt.get(p.key).row || pt.get(r.key).col - pt.get(p.key).col)].map((r) => r.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([r, p]) => {
      const w = pt.get(r), T = w && E.querySelector(p), R = T == null ? void 0 : T.querySelector(":scope > .activityRows"), D = T == null ? void 0 : T.querySelector(":scope > .activityHeader");
      if (!R || !D) return;
      const ot = R.getBoundingClientRect().top - T.getBoundingClientRect().top, ut = w.rows === 1 ? w.h : Math.floor(w.h - ot - parseFloat(getComputedStyle(T).paddingBottom)), ht = Math.max(1, Math.floor(ut / ps));
      R.style.setProperty("--fill-row", (ut / ht).toFixed(2) + "px"), R.style.maxHeight = ut + "px";
    }), us = Math.max(0, ...[...pt.values()].map((r) => r.row + r.rows));
    let e = Oo + us * ga - Ee;
    e = Dl(Wa && !a, U, pt, e, d, f), E.style.height = e + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), b.forEach((r) => vs.observe(r.el)), rl(), ba();
  }
  const dn = () => {
    Br || (Br = !0, requestAnimationFrame(() => {
      Br = !1, ra();
    }));
  }, vs = new ResizeObserver(() => {
    Se || dn();
  });
  function Pr(t, a, s) {
    const d = s + Ee, f = t * s + (t - 1) * Ee, v = a * ga - Ee, h = Ee / 2, b = d / Math.max(1, Math.round(d / (ga / 4))), M = ga / 4, H = 6;
    let N = "";
    for (let O = 0; O <= t; O++) for (let U = 0; U <= a; U++) {
      const lt = O * d - h, dt = U * ga - h;
      N += "M" + (lt - H) + " " + dt + "H" + (lt + H) + "M" + lt + " " + (dt - H) + "V" + (dt + H);
    }
    return '<svg width="' + f + '" height="' + v + '" viewBox="0 0 ' + f + " " + v + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -h + '" y="' + -h + '" width="' + b.toFixed(3) + '" height="' + M + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + b.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + M + '" r="1.4"></circle><circle cx="' + b.toFixed(3) + '" cy="' + M + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -h + '" y="' + -h + '" width="' + (f + Ee) + '" height="' + (v + Ee) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + N + '"></path></svg>';
  }
  function Dl(t, a = [], s = /* @__PURE__ */ new Map(), d = 0, f = 1, v = Cn) {
    E.querySelectorAll(".tfEditChips").forEach((N) => {
      (!t || !N.closest(".tfBoardItem")) && N.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), E.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((O) => {
      O.classList.contains("tfEditChips") || O.toggleAttribute("inert", t);
    }));
    let h = E.querySelector(".tfBoardCells"), b = E.querySelector(".tfBoardLand");
    if (!t)
      return h == null || h.remove(), b == null || b.remove(), Tn(), d;
    const M = us + Ll;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), E.prepend(h)), h.style.top = Oo + "px", h.dataset.size !== f + "x" + M + "x" + v && (h.dataset.size = f + "x" + M + "x" + v, h.innerHTML = Pr(f, M, v)), d = Math.max(d, Oo + M * ga - Ee), a.forEach((N) => {
      const O = N.el;
      !O || O.querySelector(":scope > .tfEditChips") || O.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + nc + '</span><button class="tfEditChip" type="button" data-board-more="' + it(N.key) + '" aria-label="' + it(Da(N.key)) + ' options" aria-haspopup="menu">' + nm + "</button></div>");
    }), Se && s.has(Se.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(b));
      const N = s.get(Se.key);
      Object.assign(b.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else b == null || b.remove();
    const H = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (H) {
      const N = H.getBoundingClientRect();
      H.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...H.querySelectorAll('[data-k^="fav:"]')].map((O) => {
        const U = O.getBoundingClientRect(), lt = O.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + it(lt) + '" aria-label="Hide ' + it(Bt(lt)) + ' from the dashboard" style="left:' + Math.round(U.right - N.left - 42) + "px;top:" + Math.round(U.top - N.top + (U.height - 32) / 2) + 'px">' + mp + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let bs = "";
  function Ya(t) {
    Wa = t, t || (Se = null, yo = ko = !1, Tn()), ra(), t ? bs = JSON.stringify(X) : bs && JSON.stringify(X) !== bs && cn("Changes saved");
  }
  function Nr(t, a) {
    var pt, e;
    Tn();
    const s = li.get(t), { n: d } = ua(E.clientWidth), f = ve(), v = f.spans[t] ?? (ct(t) ? 1 : 2);
    if (!s) return;
    const h = s.cols >= d, b = (o, r, p) => '<button type="button" role="menuitem" data-board-act="' + o + '"' + (p ? " disabled" : "") + ">" + r + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Da(t) + " options");
    const H = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), N = Al(t), O = Xi(t), U = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + mo.map((o, r) => '<button type="button" role="menuitemradio" aria-checked="' + (r + 1 === O) + '" aria-label="' + o + ", " + (r + 1) + (r ? " rows" : " row") + '" data-board-act="h:' + (r + 1) + '"' + (r < N ? "" : " disabled") + ">" + o + "</button>").join("") + "</div></div>", lt = [["Wide", 2, d >= 2], ["Really wide", 3, d >= 3], ["Full width", "full", d >= 4]], dt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + lt.map(([o, r, p]) => '<button type="button" role="menuitemradio" aria-checked="' + (p && (r === "full" ? s.cols === d : s.cols === r && !(r === d && f.spans.areas === "full"))) + '" aria-label="' + o + (r === "full" ? "" : ", " + r + " columns") + '" data-board-act="w:' + r + '"' + (p ? "" : " disabled") + ">" + o + "</button>").join("") + "</div></div>" : cs.includes(t) || ct(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + si.map((o, r) => '<button type="button" role="menuitemradio" aria-checked="' + (r + 1 === Math.min(v, d)) + '" aria-label="' + o + ", " + (r + 1) + (r ? " columns" : " column") + '" data-board-act="w:' + (r + 1) + '"' + (r < d ? "" : " disabled") + ">" + o + "</button>").join("") + "</div></div>" : "";
    M.innerHTML = U + dt + (t === "energy" ? b("graph", (((pt = f.opts.energy) == null ? void 0 : pt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", h || s.col === 0) + b("right", "Move right", h || s.col + s.cols >= d) + b("up", "Move up", s.row <= 0) + b("down", "Move down") + (H ? b("remove", "Remove") : b("hide", "Hide")), E.appendChild(M);
    const $ = Math.min(s.x + s.w - M.offsetWidth, E.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, $) + "px", top: s.y + 28 + "px" }), ia = { key: t, menu: M, opener: a }, (e = M.querySelector("button:not([disabled])")) == null || e.focus();
  }
  function Tn(t) {
    if (!ia) return;
    const { menu: a, opener: s } = ia;
    ia = null, a.remove(), t && (s == null || s.focus());
  }
  const Ln = () => Object.fromEntries([...li].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Bl(t, a) {
    var b, M;
    if (a === "remove") {
      Tn(), el(t);
      return;
    }
    const s = X, d = ve(), f = Ln(), v = f[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (d.spans = { ...d.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (d.opts = { ...d.opts, [t]: { ...d.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((b = d.opts.energy) == null ? void 0 : b.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (f[t] = { ...v, col: v.col - 1 }), a === "right" && (f[t] = { ...v, col: v.col + 1 }), a === "up" && (f[t] = { ...v, row: v.row - 1 }), a === "down" && (f[t] = { ...v, row: v.row + 1 }), a === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Se = { key: t, col: f[t].col, row: f[t].row }), di(d, f), Se && (ra(), Se = null, di(ve(), Ln()));
    const h = /^[hw]:/.test(a) && !tn() && (ia == null ? void 0 : ia.menu.querySelector('[data-board-act="' + CSS.escape(a) + '"]'));
    if (h) {
      const H = ia;
      h.parentElement.querySelectorAll("[aria-checked]").forEach((N) => N.setAttribute("aria-checked", String(N === h))), setTimeout(() => {
        ia === H && Tn();
      }, aa.tabs.dur);
    } else Tn();
    a === "graph" && (We.delete("dash:energy"), wa()), a.startsWith("h:") && t.includes(".") && wa(), ra(), a !== "hide" ? (M = E.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || M.focus() : cn(Da(t) + " hidden", er(s));
  }
  const qo = (t) => {
    var a;
    return ce.includes(t) && !(((a = X.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function tl(t) {
    const a = ve(), s = Da(t) + qo(t);
    fs({ ...a, hidden: a.hidden.filter((d) => d !== t) }), ra(), cn(s);
  }
  const An = () => ve().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ve().hidden.includes(t));
  function Ir(t, a) {
    const s = ve();
    di({ ...s, tiles: t, hidden: s.hidden.filter((d) => !d.includes(".")) }, a), wa(), ba();
  }
  const Rl = (t) => {
    Ir([...An().filter((a) => a !== t), t], Ln()), cn(Da(t) + " added"), Nl(t);
  }, el = (t) => {
    const a = X, s = Ln();
    delete s[t], Ir(An().filter((d) => d !== t), s), cn(Da(t) + " removed", er(a));
  };
  let al = 0;
  function cn(t, a = null) {
    var h;
    const s = c("toast");
    if (!s) return;
    if (Bf(s, t), a) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(al), s.classList.remove("show", "withAction"), a();
      }), s.appendChild(b);
    }
    const d = m.getBoundingClientRect(), f = (h = n.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), v = Pe.classList.contains("open") && !ao ? Math.min(d.right, Pe.getBoundingClientRect().left) : d.right;
    s.style.left = (d.left + v) / 2 + "px", s.style.bottom = (f != null && f.height ? window.innerHeight - f.top + 12 : 26) + "px", s.classList.add("tfToast", "show"), s.classList.toggle("withAction", !!a), Rf(s), clearTimeout(al), al = setTimeout(() => s.classList.remove("show", "withAction"), a ? 5e3 : aa.confirm.stay);
  }
  const bo = 700, Sd = 1e3, Za = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Za.setAttribute("role", "tooltip"), Za.setAttribute("aria-hidden", "true"), m.appendChild(Za);
  let Hr = null, eo = 0, Qi = 0, ci = -1 / 0;
  const nl = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Pl = (t) => {
    for (let a = t; a && a !== m; a = a.parentElement) if (nl(a)) return a;
    return null;
  };
  function pi(t, a) {
    clearTimeout(eo), clearTimeout(Qi);
    const s = () => {
      if (!t.isConnected) return;
      Hr = t, Za.textContent = a, Za.hidden = !1;
      const d = t.getBoundingClientRect(), f = Za.getBoundingClientRect(), v = d.top - f.height - 8 >= 8 ? d.top - f.height - 8 : d.bottom + 8;
      Za.style.left = Math.max(8, Math.min(window.innerWidth - f.width - 8, d.left + d.width / 2 - f.width / 2)) + "px", Za.style.top = v + "px";
    };
    !Za.hidden || performance.now() - ci < Sd ? s() : eo = setTimeout(s, bo);
  }
  function wo() {
    clearTimeout(eo), clearTimeout(Qi), Za.hidden || (ci = performance.now()), Za.hidden = !0, Hr = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Za.contains(t.target)) {
      clearTimeout(Qi);
      return;
    }
    const a = Pl(t.target);
    if (a && Pt.names === "scroll" && a.matches(Re)) {
      tr(a);
      return;
    }
    if (a) {
      a !== Hr ? pi(a, a.textContent.trim()) : clearTimeout(Qi);
      return;
    }
    clearTimeout(eo), clearTimeout(Qi), Qi = setTimeout(wo, 120);
  }), n.addEventListener("focusin", (t) => {
    var d;
    const a = t.target;
    if (!((d = a.matches) != null && d.call(a, ":focus-visible"))) return;
    let s = [a, ...a.querySelectorAll("*")].filter(nl);
    Pt.names === "scroll" && (s.filter((f) => f.matches(Re)).forEach(tr), s = s.filter((f) => !f.matches(Re))), s.length && pi(a, s.map((f) => f.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === Hr && wo();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Za.hidden && (t.stopPropagation(), wo());
  }, !0), window.addEventListener("scroll", () => {
    (!Za.hidden || eo) && wo();
  }, { capture: !0, passive: !0 });
  const Re = ".activityRowName,.activityRowMeta", xo = /* @__PURE__ */ new WeakSet();
  function tr(t) {
    var s;
    if (Pt.names !== "scroll" || xo.has(t) || t.closest("[inert]") || (s = window.matchMedia) != null && s.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    xo.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((d) => d.getAnimations()).map((d) => d.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const d = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (d < 2) {
        xo.delete(t);
        return;
      }
      const f = d / 30 * 1e3, v = f + 1e3 + f;
      t.style.textOverflow = "clip";
      const h = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -d + "px", offset: f / v },
        { textIndent: -d + "px", offset: (1e3 + f) / v, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: v });
      h.onfinish = h.oncancel = () => {
        t.style.textOverflow = "", xo.delete(t);
      };
    }, 600);
  }
  const ws = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (ws.unobserve(a.target), tr(a.target));
  }), { threshold: 1 });
  let Ea = !1;
  new MutationObserver(() => {
    Ea || Pt.names !== "scroll" || (Ea = !0, setTimeout(() => {
      Ea = !1, n.querySelectorAll(Re).forEach((t) => {
        !t.dataset.glided && nl(t) && (t.dataset.glided = "1", ws.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const er = (t) => () => {
    X = t, Sa(), wa(), ra(), ba();
  };
  function Nl(t) {
    const a = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var h;
      const s = a();
      if (!s) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, f = s.getBoundingClientRect();
      (f.top < 0 || f.bottom > window.innerHeight) && s.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const v = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      s.animate([{ boxShadow: v(55) }, { boxShadow: v(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, Il(t) ? 260 : 0);
  }
  function Il(t) {
    const a = li.get(t);
    if (!a || !Pe.classList.contains("open") || ao) return !1;
    const { n: s, w: d } = ua(E.clientWidth), f = Pe.getBoundingClientRect().left - E.getBoundingClientRect().left, v = (M) => M * (d + Ee) + a.cols * d + (a.cols - 1) * Ee <= f;
    if (v(a.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    li.forEach((M, H) => {
      if (H !== t) for (let N = M.row; N < M.row + M.rows; N++) for (let O = M.col; O < M.col + M.cols; O++) h.add(O + "," + N);
    });
    const b = (M, H) => {
      for (let N = H; N < H + a.rows; N++) for (let O = M; O < M + a.cols; O++) if (h.has(O + "," + N)) return !1;
      return !0;
    };
    for (let M = 0; M <= us; M++) for (let H = 0; H + a.cols <= s && v(H); H++)
      if (b(H, M))
        return di(ve(), { ...Ln(), [t]: { col: H, row: M } }), ra(), !0;
    return !1;
  }
  const Hl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Pe = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Pe.setAttribute("aria-label", "Edit the dashboard"), Pe.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Pe);
  let ao = !1, yo = !1, ko = !1, ar = !1, va = null, pn = !1;
  const ol = {}, Wo = (t, a) => {
    if (ol[t] === a) return;
    ol[t] = a;
    const s = Pe.querySelector('[data-tray="' + t + '"]');
    s.innerHTML = a, Ta(s);
  }, il = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + it(Bt(t)) + '</span><span class="activityRowMeta">' + it(a) + "</span></span>", Cd = (t, a, s) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + it(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + nc + '</span><span class="tfIcon"' + Ke(t, Mn(t)) + "></span>" + il(t, a ? "Hidden" + (xe.get(t) ? " · " + xe.get(t) : "") : xe.get(t) || qe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + it(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + it(Bt(t)) + ' on the dashboard">' + (a ? mp : om) + "</button>" + (s ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + it(t) + '" aria-label="Remove ' + it(Bt(t)) + ' from favourites">' + gp + "</button>" : "<span></span>") + "</li>";
  function Fl(t, a, s, d) {
    const f = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((h) => a(h) && !s.has(h) && S[h].state !== "unavailable").filter((h) => {
      const b = (Bt(h) + " " + (xe.get(h) || "") + " " + h).toLowerCase();
      return f.every((M) => b.includes(M));
    }).sort((h, b) => (xe.get(h) || "~").localeCompare(xe.get(b) || "~") || Bt(h).localeCompare(Bt(b))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + it(h) + '"><span class="tfIcon"' + Ke(h, Mn(h)) + "></span>" + il(h, xe.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ba() {
    const t = Wa && m.classList.contains("tfBoard");
    if (Pe.classList.toggle("open", t), Pe.classList.toggle("tucked", t && ao), Pe.toggleAttribute("inert", !t), t || (pn = !1), ir(), !t) return;
    const a = Pe.querySelector("[data-tray-tuck]");
    a.innerHTML = ao ? np : vp, a.setAttribute("aria-expanded", String(!ao)), a.setAttribute("aria-label", ao ? "Show the edit tray" : "Tuck the edit tray away");
    const s = ve().hidden.filter((h) => Ji().some((b) => b.key === h));
    Wo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + it(h) + '" aria-label="' + it(Da(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + nc + "</span>" + it(Da(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Wo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ve().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + pn + '">' + (pn ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(X.favHidden || []), f = jt(), v = [...f, ...[...d].filter((h) => !f.includes(h) && S[h])];
    if (Wo("favs", v.map((h) => Cd(h, d.has(h), f.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Pe.querySelector('[data-pick="tiles"]').hidden = !ko, Pe.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ko)), ko && Wo("tilepick", Fl(Pe.querySelector("[data-tile-search]").value, (h) => bl.includes(h.split(".")[0]), new Set(An()), "data-tile-pick")), Pe.querySelector('[data-tray="roompick"]').hidden = !ar, Pe.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ar)), ar) {
      const h = new Set(An());
      Wo("roompick", V.filter((b) => !h.has("room:" + b.id)).map((b) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + it(b.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Ke("area:" + b.id, b.icon || "mdi:texture-box", b.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + it(b.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Pe.querySelector('[data-pick="favs"]').hidden = !yo, Pe.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(yo)), yo && Wo("pick", Fl(Pe.querySelector("[data-fav-search]").value, (h) => Hl.test(h), new Set(jt()), "data-fav-pick")), Wo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ot() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ot() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const qn = (t) => {
    X = { ...X, ...t }, Sa(), wa(), ba();
  };
  function jo(t, a) {
    const s = X, d = new Set(X.favHidden || []);
    a ? d.delete(t) : d.add(t), qn({ favHidden: [...d] }), a ? cn(Bt(t) + " put back") : cn(Bt(t) + " hidden", er(s));
  }
  const zo = (t) => {
    const a = X;
    qn({ favourites: jt().filter((s) => s !== t), favHidden: (X.favHidden || []).filter((s) => s !== t) }), cn(Bt(t) + " removed from favourites", er(a));
  }, Ol = (t) => {
    qn({ favourites: [...jt().filter((a) => a !== t), t], favHidden: (X.favHidden || []).filter((a) => a !== t) }), cn(Bt(t) + " added to favourites");
  };
  Pe.addEventListener("click", (t) => {
    var s;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? Ya(!1) : a.hasAttribute("data-tray-tuck") ? (ao = !ao, ba()) : a.hasAttribute("data-phone-toggle") ? (pn = !pn, ba(), pn && ((s = Ba.querySelector("[data-phone-key]")) == null || s.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (tl(a.dataset.trayCard), ba()) : a.dataset.favEye ? jo(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? zo(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (yo = !yo, ba(), yo && Pe.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? Ol(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (ko = !ko, ba(), ko && Pe.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Rl(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (ar = !ar, ba()) : a.dataset.roomPick ? Rl("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && qn({ suggest: !Ot() }));
  }), Pe.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ba();
  }), Pe.addEventListener("keydown", (t) => {
    var s, d;
    const a = !!((d = (s = t.target).closest) != null && d.call(s, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? ko : yo) || (t.stopPropagation(), a ? ko = !1 : yo = !1, ba(), Pe.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ui(t, a, s, d) {
    t.preventDefault();
    const f = t.clientX, v = t.clientY;
    let h = null, b = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), H = (O) => {
      if (!h) {
        if (Math.hypot(O.clientX - f, O.clientY - v) < 4) return;
        h = a.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = a.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (O.clientX - 24) + "px," + (O.clientY - 24) + "px)";
      const U = !ao && O.clientX >= Pe.getBoundingClientRect().left;
      if (s === "card") {
        const $ = E.getBoundingClientRect(), { w: pt } = ua(E.clientWidth);
        Se = !U && O.clientX >= $.left && O.clientX <= $.right && O.clientY >= $.top + Oo ? { key: d, col: Math.max(0, Math.floor((O.clientX - $.left) / (pt + Ee))), row: Math.max(0, Math.floor((O.clientY - $.top - Oo) / ga)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, ra();
        }));
        return;
      }
      const lt = E.querySelector(".tfDash-favs"), dt = lt == null ? void 0 : lt.getBoundingClientRect();
      if (va = null, dt && !U && O.clientX >= dt.left && O.clientX <= dt.right && O.clientY >= dt.top && O.clientY <= dt.bottom) {
        let $ = 1 / 0;
        lt.querySelectorAll('[data-k^="fav:"]').forEach((pt, e) => {
          const o = pt.getBoundingClientRect(), r = Math.hypot(O.clientX - (o.left + o.width / 2), O.clientY - (o.top + o.height / 2));
          r < $ && ($ = r, va = { i: e, r: o, after: O.clientX > o.left + o.width / 2 });
        }), va || (va = { i: 0, r: null, after: !1 });
      }
      va != null && va.r ? (M.isConnected || m.appendChild(M), Object.assign(M.style, { left: (va.after ? va.r.right : va.r.left) - 2 + "px", top: va.r.top + 8 + "px", height: va.r.height - 16 + "px" })) : M.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(b), h == null || h.remove(), M.remove(), s === "card") {
        if (!h) tl(d);
        else if (Se != null && Se.fromTray) {
          ra();
          const $ = Da(d) + qo(d), pt = ve(), e = Ln();
          Se = null, di({ ...pt, hidden: pt.hidden.filter((o) => o !== d) }, e), cn($);
        }
        Se = null, ra(), wa(), ba();
        return;
      }
      if (!va) return;
      const O = new Set(X.favHidden || []);
      O.delete(d);
      const U = jt().filter(($) => $ !== d), lt = U.filter(($) => !O.has($)), dt = lt[Math.min(va.i + (va.after ? 1 : 0), lt.length)];
      U.splice(dt ? U.indexOf(dt) : U.length, 0, d), va = null, qn({ favourites: U, favHidden: [...O] }), cn(Bt(d) + " put back");
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const ql = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, nr = 136, Td = 288, or = 0.8, Ld = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Ba = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Ba.setAttribute("aria-label", "Phone order"), Ba.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + gp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(Ba);
  let Vo = "";
  function ir() {
    var b;
    const t = pn && Wa && m.classList.contains("tfBoard") && !ao;
    if (Ba.classList.toggle("open", t), Ba.toggleAttribute("inert", !t), !t) return;
    const a = gs().filter((M) => !ve().hidden.includes(M.key)), s = a.length, d = (M) => Math.round(M * or * 10) / 10 + "px", f = (M, H) => {
      const N = M.el.classList.contains("tfDac"), O = M.tile ? N ? Td : nr : ql[M.key] || nr;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + it(M.key) + '" style="min-height:' + d(O) + '" aria-label="' + it(Da(M.key) + ", " + (H + 1) + " of " + s + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? Ke(M.key, Mn(M.key)) : Ke(M.key, Ld[M.key])) + '></span><span class="tfPhoneName">' + it(Da(M.key)) + "</span></button>";
    }, v = '<div class="tfPhoneTitle">' + it(((b = E.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(ql.sums) + '"><span class="tfPhoneName">' + it(Da("sums")) + "</span></div>" + a.map(f).join("");
    if (Ba.querySelector('[data-phone="note"]').innerHTML = ve().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", v === Vo) return;
    Vo = v;
    const h = Ba.querySelector('[data-phone="list"]');
    h.innerHTML = v, Ta(h);
  }
  function xs(t, a) {
    var s;
    fs({ ...ve(), phone: t }), ba(), a && ((s = Ba.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || s.focus({ preventScroll: !0 }));
  }
  const Fr = () => [...Ba.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function rr(t, a) {
    t.preventDefault();
    const s = a.parentElement, d = Ba.querySelector(".tfPhoneScreen"), f = Fr().join();
    a.classList.add("moving");
    const v = (b) => {
      const M = d.getBoundingClientRect();
      b.clientY > M.bottom - 40 ? d.scrollTop += 12 : b.clientY < M.top + 40 && (d.scrollTop -= 12);
      const H = [...s.querySelectorAll("[data-phone-key]")].find((U) => {
        const lt = U.getBoundingClientRect();
        return U !== a && b.clientX >= lt.left && b.clientX <= lt.right && b.clientY >= lt.top && b.clientY <= lt.bottom;
      });
      if (!H) return;
      const N = H.getBoundingClientRect(), O = H.classList.contains("tile") ? b.clientX < N.left + N.width / 2 : b.clientY < N.top + N.height / 2;
      s.insertBefore(a, O ? H : H.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), a.classList.remove("moving");
      const b = Fr();
      Vo = "", b.join() !== f ? xs(b) : ir();
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  Ba.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && rr(t, a);
  }), Ba.addEventListener("click", (t) => {
    var s;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      pn = !1, ba(), (s = Pe.querySelector("[data-phone-toggle]")) == null || s.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: d, ...f } = ve();
      fs(f), ba();
    }
  }), Ba.addEventListener("keydown", (t) => {
    var h, b, M, H;
    if (t.key === "Escape") {
      t.stopPropagation(), pn = !1, ba(), (h = Pe.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const a = (H = (M = (b = t.target).closest) == null ? void 0 : M.call(b, "[data-phone-key]")) == null ? void 0 : H.dataset.phoneKey, s = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !s) return;
    t.preventDefault();
    const d = Fr(), f = d.indexOf(a), v = f + s;
    v < 0 || v >= d.length || ([d[f], d[v]] = [d[v], d[f]], xs(d, a));
  });
  function sr(t, a) {
    t.preventDefault();
    const s = a.parentElement;
    a.classList.add("moving");
    const d = (v) => {
      const h = [...s.children].find((b) => {
        const M = b.getBoundingClientRect();
        return b !== a && v.clientY >= M.top && v.clientY <= M.bottom;
      });
      if (h) {
        const b = h.getBoundingClientRect();
        s.insertBefore(a, v.clientY < b.top + b.height / 2 ? h : h.nextSibling);
      }
    }, f = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const v = new Set(jt());
      ol.favs = null, qn({ favourites: [...s.children].map((h) => h.dataset.trayFav).filter((h) => v.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  Pe.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), s = t.target.closest(".tfTrayFav");
    a ? ui(t, a, "card", a.dataset.trayCard) : s && t.target.closest(".tfTrayGrip") ? sr(t, s) : s != null && s.classList.contains("off") && !t.target.closest("button") && ui(t, s, "fav", s.dataset.trayFav);
  });
  function un(t) {
    if (!Wa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), s = a && Ji().find((R) => R.el === a);
    if (!s || vo.includes(s.key)) return;
    const d = li.get(s.key), { w: f } = ua(E.clientWidth);
    if (!d) return;
    t.preventDefault(), Tn();
    const v = t.clientX, h = t.clientY;
    let b = !1, M = 0;
    const H = aa.drag, N = tn();
    let O = 0, U = 0, lt = 0, dt = 0, $ = 0, pt = 0, e = N || H.stick === 0, o = 0;
    const r = (R, D, ot, ut) => {
      a.style.transform = "translate(" + lt.toFixed(2) + "px," + dt.toFixed(2) + "px) rotate(" + R.toFixed(2) + "deg) rotate(" + D + "rad) scale(" + ot.toFixed(4) + "," + ut.toFixed(4) + ") rotate(" + -D + "rad)";
    }, p = () => {
      if (o = requestAnimationFrame(p), N) {
        lt = O, dt = U, r(0, 0, 1, 1);
        return;
      }
      if (!e) {
        const ht = Math.min(Math.hypot(O, U) / Math.max(1, H.stick), 1);
        lt = O * 0.35, dt = U * 0.35, r(0, Math.atan2(U, O), 1 + 0.155 * ht, 1 - 0.1 * ht);
        return;
      }
      $ = Bc($, O - lt, H.pull / 100, H.keep / 100), pt = Bc(pt, U - dt, H.pull / 100, H.keep / 100), lt += $, dt += pt;
      const R = Math.hypot($, pt), D = Math.min(R / 48, 1), ot = Math.max(-5, Math.min(H.tilt, $ * 0.32)), ut = 1 + H.lift / 100;
      r(ot, Math.atan2(pt, $), ut * (1 + 0.1 * D), ut * (1 - 0.063 * D));
    }, w = (R) => {
      if (O = R.clientX - v, U = R.clientY - h, !b) {
        if (Math.hypot(O, U) < 4) return;
        b = !0, Se = { key: s.key, col: d.col, row: d.row }, a.classList.add("tfDragging", "mvDrag"), o = requestAnimationFrame(p);
      }
      !e && Math.hypot(O, U) > H.stick && (e = !0, $ = O * 0.085, pt = U * 0.085), Se.col = Math.round((d.x + O) / (f + Ee)), Se.row = Math.round((d.y + U - Oo) / ga), M || (M = requestAnimationFrame(() => {
        M = 0, ra();
      }));
    }, T = () => {
      var It;
      if (window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), !b) return;
      const R = (_t) => {
        _t.preventDefault(), _t.stopImmediatePropagation();
      };
      window.addEventListener("click", R, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", R, { capture: !0 }), 300), cancelAnimationFrame(M), cancelAnimationFrame(o);
      const D = a.getBoundingClientRect(), ot = s.key;
      a.style.transition = "none", ra(), a.classList.remove("tfDragging", "mvDrag"), a.style.transform = "", Se = null, di(ve(), Ln()), ra(), wa();
      const ut = (It = Ji().find((_t) => _t.key === ot)) == null ? void 0 : It.el;
      if (requestAnimationFrame(() => {
        a.style.transition = "", ut && (ut.style.transition = "");
      }), !ut || N) return;
      ut.style.transition = "none";
      const ht = ut.getBoundingClientRect(), gt = D.left + D.width / 2 - (ht.left + ht.width / 2), Rt = D.top + D.height / 2 - (ht.top + ht.height / 2);
      ut.style.zIndex = "20", ut.animate([{ transform: "translate(" + gt + "px," + Rt + "px) scale(" + (1 + H.lift / 100) + ")" }, { transform: "none" }], { duration: H.slide, easing: ze.land }).finished.then(() => {
        ut.style.zIndex = "", Pf(ut);
      }, () => {
        ut.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", T), window.addEventListener("pointercancel", T);
  }
  function rl(t = !1) {
    const a = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const s = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === s) return;
    const d = !a.dataset.drawn;
    a.dataset.drawn = s;
    const f = Zs.find((v) => v.id === a.dataset.graph);
    f ? _r(a, f).then(() => {
      (t || d) && $s(a);
    }) : Ur(a.dataset.graph, a).then(() => {
      t && Sl(a);
    });
  }
  function sl() {
    var b, M, H;
    Jt = he.model(i()), Yt(), S = Jt.states, S[(b = X.sources) == null ? void 0 : b.grid] && (Jt.grid = X.sources.grid), S[(M = X.sources) == null ? void 0 : M.alarm] && (Jt.security.alarms = [X.sources.alarm]), W.forEach((N, O) => {
      const U = S[O], lt = (U == null ? void 0 : U.attributes) || {};
      if (!U || Date.now() - N.at > 2 * 60 * 1e3) {
        W.delete(O);
        return;
      }
      N.pos != null && U.state !== "opening" && U.state !== "closing" && Math.abs(Pn(O) - N.pos) < 1 && delete N.pos, N.tilt != null && Math.abs((lt.current_tilt_position ?? -1) - N.tilt) < 1 && delete N.tilt, N.pos == null && N.tilt == null && W.delete(O);
    });
    const t = [];
    let a = 0;
    const s = xt();
    V = s.filter((N) => N.room).map((N) => N.room), V.some((N) => N.id === Mt) || (Mt = ((H = V[0]) == null ? void 0 : H.id) || null);
    const d = tt === "weather" ? { key: "weather", name: "Weather" } : tt && s.find((N) => N.key === tt);
    if (d || (tt = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), xe = /* @__PURE__ */ new Map(), Jt.rooms.forEach((N) => [...N.actions, ...N.plugs, ...N.readings, ...N.openings, ...N.solar, ...N.plants.flatMap((O) => [O.id, ...O.readings])].forEach((O) => xe.set(O, N.name))), !d) return Yi(t, Aa());
    if (t.push({ key: "areahead", html: ll(d, ++a) }), d.key === "weather")
      return t.weather = ++a, t;
    const f = d.ids, v = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && t.push({ key: "energy:" + h.id, html: as(h, ++a) }), h && (h.readings.length || h.plugs.length || h.power != null) && t.push({ key: "readings:" + h.id, html: lo(h, ++a) }), h == null || h.plants.forEach((N) => t.push({ key: "plant:" + N.id, html: Pi(N, ++a) })), f.length && t.push({ key: "block:" + v, order: ++a, tiles: f.map((N) => ({ key: N, html: po(N) })) }), t;
  }
  const ll = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + np + '</button><div class="settingsTitle">' + it(t.name) + "</div></div>";
  let Wl = 0, ys = null;
  const ks = (t) => t === "weather" ? da.wx : t.startsWith("room:") && E.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || E.querySelector(".tfAreas");
  function Or(t) {
    var a, s;
    tt || (Wl = dr().scrollTop, ys = ((a = ks(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), tt = t, t.startsWith("room:") && (Mt = t.slice(5)), Fe(), dr().scrollTop = 0, (s = E.querySelector("[data-area-back]")) == null || s.focus({ preventScroll: !0 });
  }
  let fi = null;
  function lr(t, a) {
    if (fi == null || fi(), a == null) return;
    const s = dr(), d = performance.now() + 1500, f = ["wheel", "touchstart", "pointerdown", "keydown"];
    let v = 0;
    const h = () => {
      cancelAnimationFrame(v), f.forEach((M) => window.removeEventListener(M, h, !0)), fi = null;
    }, b = () => {
      const M = t();
      if (M != null && M.isConnected) {
        const H = M.getBoundingClientRect().top - a;
        Math.abs(H) > 0.5 && (s.scrollTop += H);
      }
      performance.now() < d ? v = requestAnimationFrame(b) : h();
    };
    f.forEach((M) => window.addEventListener(M, h, { capture: !0, passive: !0 })), fi = h, b();
  }
  function Ms() {
    var s;
    const t = tt;
    tt = null, Fe(), dr().scrollTop = Wl, lr(() => ks(t), ys);
    const a = t.startsWith("room:") ? E.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? da.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (s = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || s.focus({ preventScroll: !0 });
  }
  const Ad = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + it(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Ss = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((s) => s.key).join(",") + ")" : "")).join(";");
  function dr() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Ka(t) {
    const a = dr(), s = (b) => {
      const M = b.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, d = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && s(b)), f = d == null ? void 0 : d.dataset.k, v = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const h = d != null && d.isConnected ? d : f && E.querySelector('[data-k="' + CSS.escape(f) + '"]');
    h != null && h.isConnected && v != null && (a.scrollTop += h.getBoundingClientRect().top - v);
  }
  function Fe() {
    if (!k || !E) return;
    const t = sl(), a = (f) => {
      var v;
      return (((v = f.closest("[data-k]")) == null ? void 0 : v.dataset.k) || "") + "|" + f.dataset.iconFor + "|" + (f.dataset.iconName || "");
    }, s = /* @__PURE__ */ new Map();
    E.querySelectorAll("[data-tf] [data-icon-for]").forEach((f) => {
      f.firstElementChild && (s.get(a(f)) || s.set(a(f), []).get(a(f))).push(f.firstElementChild);
    }), E.querySelectorAll("[data-tf]").forEach((f) => f.remove()), We.clear();
    const d = document.createElement("div");
    d.innerHTML = t.map((f) => f.tiles ? Ad(f) : f.html).join(""), t.forEach((f) => f.tiles ? f.tiles.forEach((v) => We.set(v.key, v.html)) : We.set(f.key, f.html)), Xr = Ss(t), d.querySelectorAll("[data-icon-for]").forEach((f) => {
      var h;
      const v = !f.firstElementChild && ((h = s.get(a(f))) == null ? void 0 : h.shift());
      v && f.appendChild(v);
    }), E.append(...d.children), Mr(t.weather), Sr(), vs.disconnect(), ra(), Ta(E), vi(E), No(E), K(), Z && Ur(Z.id), za(), Mo(), Ul(), requestAnimationFrame(bt);
  }
  const Cs = (t) => {
    var s;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (s = a.dataset) == null ? void 0 : s.act };
  }, dl = (t, a) => {
    var s;
    a && ((s = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || s.focus({ preventScroll: !0 }));
  };
  function Ts(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const s = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), d = a.querySelector(":scope > .tfDacPad");
    if (s)
      return (d == null ? void 0 : d.dataset.dac) !== s.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((h) => a.hasAttribute(h) ? t.setAttribute(h, a.getAttribute(h)) : t.removeAttribute(h)), [...t.style].filter((h) => h.startsWith("--") && !h.startsWith("--tf-")).forEach((h) => t.style.removeProperty(h)), [...a.style].forEach((h) => t.style.setProperty(h, a.style.getPropertyValue(h))), t);
    const f = (h) => {
      var b;
      return ((b = h.dataset) == null ? void 0 : b.iconFor) !== void 0;
    };
    if (f(t) && f(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((h) => {
        a.hasAttribute(h.name) || t.removeAttribute(h.name);
      }), [...a.attributes].forEach((h) => {
        t.getAttribute(h.name) !== h.value && t.setAttribute(h.name, h.value);
      }), t;
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((h) => {
      a.hasAttribute(h.name) || t.removeAttribute(h.name);
    }), [...a.attributes].forEach((h) => t.setAttribute(h.name, h.value));
    const v = [...a.children];
    return [...t.children].forEach((h, b) => Ts(h, v[b])), t;
  }
  function Ed(t, a) {
    const s = document.createElement("div");
    s.innerHTML = a;
    const d = Cs(t), f = Ts(t, s.firstElementChild);
    Ta(f), vi(f), No(f), dl(f, d);
  }
  function wa() {
    !k || !E || Se || Ka(jl);
  }
  function jl() {
    if (!E.querySelector("[data-tf]")) {
      Fe();
      return;
    }
    const t = sl();
    if (Ss(t) !== Xr) {
      Fe();
      return;
    }
    const a = (s) => [...L.keys()].some((d) => {
      const f = d.slice(d.indexOf("|") + 1);
      return s === f || s.endsWith(":" + f);
    });
    t.forEach((s) => (s.tiles || [s]).forEach((d) => {
      if (We.get(d.key) === d.html || a(d.key)) return;
      const f = E.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (f) {
        if (We.set(d.key, d.html), Z && Z.key === d.key && f.querySelector(".tfOpen")) {
          f.querySelector(".tfOpen .activityRowMeta").textContent = so(Z.id);
          return;
        }
        Ed(f, d.html), Z && Z.key === d.key && Ur(Z.id), d.key.startsWith("energy:") && za();
      }
    })), Mo(), Ul(), Sn(), K(), Kt == null || Kt.update(), ha == null || ha.forEach((s) => s.update()), m.classList.contains("tfDash") && dn(), requestAnimationFrame(bt);
  }
  const hi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Ce(t.color_mode)]],
    climate: (t) => [["Current temperature", Ca(t.current_temperature) + " °C"], ["Target", Ca(t.temperature) + " °C"], ["Action", Ce(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Ce(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Ce(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ca(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Ce(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, zl = (t) => Uo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function mi(t, a = {}, s = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + it(d.name) + '</div><div class="tfMoreTiles' + (s ? " single" : "") + '">' + d.ids.map((f) => Zt(f, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ft = document.createElement("div");
  Ft.className = "tfMoreBackdrop", Ft.hidden = !0, m.appendChild(Ft);
  const Wn = document.createElement("div");
  Wn.className = "tfMoreBackdrop tfMoreUnder", Wn.hidden = !0, m.insertBefore(Wn, Ft);
  const jn = (t, a) => {
    for (let s = t; s && s !== Ft; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if ((d === "auto" || d === "scroll") && s.scrollHeight > s.clientHeight + 1 && (a < 0 ? s.scrollTop > 0 : s.scrollTop + s.clientHeight < s.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let gi = null;
  Ft.addEventListener("touchstart", (t) => {
    gi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Ft.addEventListener("touchmove", (t) => {
    var f, v;
    if (!gi || t.touches.length > 1 || (v = (f = t.target).closest) != null && v.call(f, "input,textarea,select")) return;
    const a = t.touches[0], s = gi.x - a.clientX, d = gi.y - a.clientY;
    gi = { x: a.clientX, y: a.clientY }, Math.abs(d) >= Math.abs(s) && !jn(t.target, d) && t.preventDefault();
  }, { passive: !1 }), Ft.addEventListener("wheel", (t) => {
    var a, s;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((s = (a = t.target).closest) != null && s.call(a, "[data-more-pages]")) || jn(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const _d = () => window.innerWidth <= 620;
  let $e = null;
  Ft.addEventListener("pointerdown", (t) => {
    const a = Ft.querySelector(".tfMorePair");
    !_d() || !a || !a.contains(t.target) || !t.isPrimary || Ft._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || ($e = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: a, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Ft.addEventListener("pointermove", (t) => {
    if (!$e || !t.isPrimary) return;
    const a = t.clientY - $e.y, s = performance.now();
    if (!$e.on) {
      if (Math.abs(t.clientX - $e.x) > 8 || a < -8 || !$e.grab && jn($e.from, -1)) {
        $e = null;
        return;
      }
      if (a < 8) return;
      $e.on = !0;
      try {
        Ft.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    $e.v = (a - $e.dy) / Math.max(1, s - $e.t), $e.dy = a, $e.t = s, $e.pair.style.transform = "translateY(" + Math.max(0, a) + "px)";
  });
  const qr = (t) => {
    if (!$e || !t.isPrimary) return;
    const a = $e;
    if ($e = null, !a.on) return;
    const s = (H) => {
      H.preventDefault(), H.stopImmediatePropagation();
    };
    window.addEventListener("click", s, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", s, { capture: !0 }), 300);
    const d = t.type === "pointerup" && (a.dy > 120 || a.v > 0.5), f = "translateY(" + Math.max(0, a.dy) + "px)";
    if (a.pair.style.transform = "", !d || tn()) {
      d ? zn() : a.pair.animate([{ transform: f }, { transform: "none" }], { duration: 320, easing: ze.spring });
      return;
    }
    const v = rt;
    Ft._closing = !0, Ft.style.pointerEvents = "none", Ft.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: ze.exit, fill: "forwards" });
    const h = a.pair.animate([{ transform: f }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: ze.exit, fill: "forwards" });
    let b = !1;
    const M = () => {
      b || (b = !0, Ft._closing = !1, Ft.style.pointerEvents = "", Ft.getAnimations().forEach((H) => H.cancel()), a.pair.getAnimations().forEach((H) => H.cancel()), rt === v && zn());
    };
    h.finished.then(M, M), setTimeout(M, 300);
  };
  Ft.addEventListener("pointerup", qr), Ft.addEventListener("pointercancel", qr);
  function Ls() {
    const t = Ft.querySelector(".tfMorePair"), a = Ft.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Ls, { passive: !0 }), k && la();
  let En = [];
  const Dd = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function _n(t) {
    const a = (M, H = "") => '<div class="tfMoreHead">' + (rt != null && rt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + it(M) + "</div>" + H + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>", s = (M, H) => '<div class="tfMoreNow"><div class="tfMoreState">' + it(M) + "</div></div>", d = mi;
    if (t === "favourites") {
      const M = jt(), H = new Set(M), N = [{ name: "Starred", ids: M }, { name: "Home", ids: Jt.homeVacuums }, { name: "Security", ids: [...Jt.security.alarms, ...Jt.security.locks] }, ...Jt.rooms.map((O) => ({ name: O.name, ids: [...O.actions, ...O.plugs] }))].map((O, U) => U ? { ...O, ids: O.ids.filter((lt) => !H.has(lt)) } : O).filter((O) => O.ids.length);
      return [a("Favourites"), s(M.length ? M.length + " starred" : "None starred"), d(N, { star: !0 }, !0)];
    }
    const f = (M, { name: H = "", alert: N = !1, plain: O = !1 } = {}) => {
      const U = O ? [] : M.filter(($) => bl.includes($.split(".")[0])), lt = M.filter(($) => !U.includes($)), dt = ($) => $.startsWith("vacuum.") && Ut($).battery_level != null ? Ut($).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (H ? '<div class="tfMoreGroupName">' + it(H) + "</div>" : "") + '<div class="tfMoreActions">' + U.map(($) => po($, !0)).join("") + lt.map(($) => Zt($, { plain: O, alert: N, say: O ? dt($) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = Aa().find((U) => U.key === t.slice(8));
      if (!M) return null;
      const H = M.key === "light" ? (M.groups || []).flatMap((U) => U.ids) : [], N = H.some((U) => {
        var lt;
        return ((lt = S[U]) == null ? void 0 : lt.state) === "on";
      }), O = H.length ? '<button class="primary" type="button" data-acts="' + Xo(H.map((U) => ["light", N ? "turn_off" : "turn_on", U])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(M.name), '<div class="tfMoreNowRow">' + s(M.value) + O + "</div>", ...(M.groups || []).map((U) => f(U.ids, { name: U.name === M.name ? "" : U.name, alert: U.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, H] = t.split(":"), N = Jt.rooms.find((lt) => lt.id === M), O = N && ai(N).find((lt) => lt.key === H);
      if (!O) return null;
      const U = O.acts ? '<button class="primary" type="button" data-acts="' + Xo(O.acts) + '">' + (O.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(N.name + " " + O.label.toLowerCase()), '<div class="tfMoreNowRow">' + s(O.value) + U + "</div>", f(Ha(N, H))];
    }
    const v = t.split(".")[0];
    S[t];
    const h = bl.includes(v) ? Fn(t) : { sections: [] }, b = (rt == null ? void 0 : rt.page) || 0;
    return [
      Vl(t, h),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Rd(t) + (v === "plant" ? Id(t).join("") : "") + h.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + Gl(t) + "</section></div>",
      '<div class="tfMoreDots" role="tablist" aria-label="Pages">' + ["Control", "Info"].map((M, H) => '<button type="button" role="tab" aria-selected="' + (H === b) + '" aria-label="' + M + '" data-more-page="' + H + '"' + (H === b ? "" : ' tabindex="-1"') + "></button>").join("") + "</div>"
    ];
  }
  function Vl(t, a, s) {
    var h, b, M, H, N;
    const d = (h = Jt.areaOf) == null ? void 0 : h.call(Jt, t), f = d && (((b = Jt.rooms.find((O) => O.id === d)) == null ? void 0 : b.name) || ((N = (H = (M = i()) == null ? void 0 : M.areas) == null ? void 0 : H[d]) == null ? void 0 : N.name)) || "", v = a.button ? Xn(t, a) : '<div class="tfIcon"' + Ke(t, a.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (a.on ? " on" : "") + '"' + (a.tone ? ' data-tone="' + a.tone + '"' : "") + Zn(t) + ">" + (rt != null && rt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + v + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + it(Bt(t)) + "</span>" + (f ? '<span class="activityRowMeta">' + it(f) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>";
  }
  const Bd = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Rd(t) {
    const a = t.split(".")[0];
    if (Bd.includes(a) || a === "light" && !ti(t)) {
      const f = bl.includes(a) ? Fn(t) : null;
      return f != null && f.button ? '<div class="tfMoreSpace tfMoreSwitch' + (f.on ? " on" : "") + '"' + (f.tone ? ' data-tone="' + f.tone + '"' : "") + Zn(t) + ">" + Xn(t, f) + "</div>" : "";
    }
    if (a === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + it(t) + '"></div></div>';
    if (a === "light" && ti(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + it(t) + '"></div></div>';
    const { big: s, lines: d } = Pd(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (pe("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + it(s[0]) + "</span>" + (s[1] ? '<span class="tfMoreUnit">' + it(s[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + d.map(([f, v]) => '<div class="tfMoreFact"><span>' + it(f) + "</span><span>" + it(v) + "</span></div>").join("") + "</div></div>";
  }
  function Pd(t) {
    var N;
    const a = S[t], s = Ut(t), d = t.split(".")[0], f = (((N = hi[d]) == null ? void 0 : N.call(hi, s)) || []).filter(([, O]) => O != null && O !== ""), v = (O) => {
      const U = f.findIndex(([lt]) => lt === O);
      return U < 0 ? null : f.splice(U, 1)[0][1];
    }, h = (O) => {
      const U = String(O).match(/^(-?[\d.,]+)\s*(.*)$/);
      return U ? [U[1], U[2]] : [String(O), ""];
    }, b = () => [Ce(String(a.state).replace(/_/g, " ")), ""];
    let M;
    d === "light" ? (v("Brightness"), M = a.state === "on" && kn(t) ? [String(Gn(a)), "%"] : b()) : d === "climate" ? M = h(v("Current temperature") || Ca(s.current_temperature) + " °C") : d === "cover" ? (v("Position"), M = s.current_position != null ? [String(Pn(t)), "%"] : b()) : d === "humidifier" ? M = h(v("Current humidity") || a.state) : d === "vacuum" ? M = h(v("Battery") || a.state) : d === "plant" ? M = h(v("Moisture") || a.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(d) ? M = b() : M = h(a.state + (s.unit_of_measurement ? " " + s.unit_of_measurement : ""));
    const H = f.length ? f.slice(0, 4) : [["State", qe(t)]];
    return { big: M, lines: H };
  }
  function Gl(t) {
    var H, N, O, U, lt, dt, $;
    const a = S[t], s = i(), d = (H = s == null ? void 0 : s.entities) == null ? void 0 : H[t], f = d != null && d.device_id ? (N = s == null ? void 0 : s.devices) == null ? void 0 : N[d.device_id] : null, v = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + it(t) + '" role="img" aria-label="' + it(Bt(t)) + ', last 24 hours"></svg></div>', h = (O = Jt.areaOf) == null ? void 0 : O.call(Jt, t), b = h && (((U = Jt.rooms.find((pt) => pt.id === h)) == null ? void 0 : U.name) || ((dt = (lt = s == null ? void 0 : s.areas) == null ? void 0 : lt[h]) == null ? void 0 : dt.name)) || "", M = [
      ...(($ = hi[t.split(".")[0]]) == null ? void 0 : $.call(hi, Ut(t))) || [],
      ["Changed", a.last_changed && Tr(Date.parse(a.last_changed))],
      ["Area", b],
      ["Device", f && (f.name_by_user || f.name)],
      ["Integration", (d == null ? void 0 : d.platform) && Ce(d.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, pt]) => pt != null && pt !== "");
    return v + '<div class="tfMoreRows">' + M.map(([pt, e]) => '<div class="tfMoreRow"><span>' + it(pt) + "</span><span>" + it(e) + "</span></div>").join("") + "</div>" + zl(t) + (f ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + it(d.device_id) + '"><span>Device page</span>' + vp + "</button>" : "");
  }
  const Nd = () => "";
  let ja = "";
  function As(t) {
    var a;
    rt && (rt.details = t, Mo(), (a = Ft.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Es = (t) => {
    const a = S[t], s = Pn(t), d = Me(t);
    return { kind: tc(a), name: Bt(t), text: qe(t), pos: s, target: Math.abs(d - s) > 0.5 ? d : null, moving: a.state === "opening" || a.state === "closing", tilt: Bo(t) ?? 100, canSet: Gt(t, cp) };
  };
  function vi(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const s = a.dataset.coverArt, d = a.dataset.artKey || "more:" + s;
      let f = yt.get(d);
      f || (f = jh({ onMove: (v) => bi(s, v), onSet: (v) => {
        bi(s, v), wi("pos", s);
      } }), f.coverId = s, yt.set(d, f)), a.replaceWith(f.el), f.update(Es(s));
    });
  }
  const cr = (t) => [...yt.values()].filter((a) => a.coverId === t), Wr = () => yt.forEach((t) => {
    S[t.coverId] && t.update(Es(t.coverId));
  }), Ul = () => {
    yt.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), yt.delete(a));
    }), Wr();
  };
  function Mo() {
    var v, h;
    if (!rt || !(Dd(rt.id) || S[rt.id])) {
      Ft.hidden = !0;
      return;
    }
    if ([...L.keys()].some((b) => b.endsWith("|" + rt.id))) {
      Wr();
      return;
    }
    const t = _n(rt.id), a = Ft.querySelector(".tfMore");
    if (!t) {
      Ds();
      return;
    }
    const s = Cs(Ft), d = Nd(rt.id), f = rt.frame ? rt.frame.wide : rt.id.startsWith("summary:") || rt.id.startsWith("group:");
    if (Ft.hidden || !a || t.length !== En.length || a.classList.contains("wide") !== f) {
      const b = _s ? rt.scroll || 0 : !Ft.hidden && a ? a.scrollTop : 0;
      if (Ft.innerHTML = '<div class="tfMorePair' + (Ft.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (f ? " wide" : "") + '"' + (rt.frame ? ' style="height:' + rt.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", ja = d, Ft.classList.toggle("wide", f), Ft.hidden = !1, Ls(), vi(Ft), No(Ft), Ta(Ft), Ft.querySelectorAll("[data-day]").forEach((M) => ul(M.dataset.day, M, rt.at)), Bs(Ft), b && (Ft.querySelector(".tfMore").scrollTop = b), jr(), dl(Ft, s), !Ft.contains(n.activeElement)) {
        const M = Ft.querySelector("[data-more-close]");
        (v = M != null && M.offsetParent ? M : Ft.querySelector(".tfMore")) == null || v.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((b, M) => {
        var O, U;
        if (b === En[M] || b.includes("data-cover-art") || a.children[M].contains((U = (O = n.activeElement) == null ? void 0 : O.matches) != null && U.call(O, "input,select") ? n.activeElement : null) || [...L.keys()].some((lt) => a.children[M].querySelector('[data-drag="' + CSS.escape(lt) + '"]'))) return;
        const H = document.createElement("div");
        H.innerHTML = b;
        const N = Ts(a.children[M], H.firstElementChild);
        Ta(N), Bs(N), No(N);
      }), d !== ja) {
        const b = Ft.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), ja = d;
      }
      a.querySelectorAll("[data-day]").forEach((b) => {
        b.innerHTML || ul(b.dataset.day, b, rt.at);
      }), jr(), Ft.contains(n.activeElement) || dl(Ft, s);
    }
    (h = Ft.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(rt.details && d)), En = t, Wr();
  }
  function jr() {
    const t = Ft.querySelector("[data-more-pages]");
    !t || !rt || (t.scrollTo({ left: (rt.page || 0) * t.clientWidth, behavior: "instant" }), pr(), So(t));
  }
  function So(t) {
    const a = t.children[(rt == null ? void 0 : rt.page) || 0];
    a && (t.style.height = a.scrollHeight + "px");
  }
  function pr() {
    const t = (rt == null ? void 0 : rt.page) || 0;
    Ft.querySelectorAll("[data-more-page]").forEach((a) => {
      const s = Number(a.dataset.morePage) === t;
      a.setAttribute("aria-selected", String(s)), a.tabIndex = s ? 0 : -1;
    });
  }
  function cl(t, a) {
    var d, f;
    const s = Ft.querySelector("[data-more-pages]");
    !s || !rt || (rt.page = Math.max(0, Math.min(1, t)), s.scrollTo({ left: rt.page * s.clientWidth, behavior: (d = window.matchMedia) != null && d.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), pr(), So(s), (f = Ft.querySelector('[data-more-page="' + rt.page + '"]')) == null || f.focus({ preventScroll: !0 }));
  }
  let pl = 0;
  Ft.addEventListener("scroll", (t) => {
    var s;
    const a = t.target;
    !((s = a.matches) != null && s.call(a, "[data-more-pages]")) || !rt || (clearTimeout(pl), pl = setTimeout(() => {
      const d = Math.round(a.scrollLeft / Math.max(1, a.clientWidth));
      d !== (rt.page || 0) && (rt.page = d, pr(), So(a));
    }, 80));
  }, !0), setInterval(() => {
    rt && Mo();
  }, 15 * 1e3);
  function Co(t, a) {
    var f, v;
    const s = !!(rt && a && Ft.contains(a)), d = s && Ft.querySelector(".tfMore");
    if (s && (rt.scroll = d.scrollTop), s && !rt.under) {
      const h = Ft.querySelector(".tfMorePair"), b = { more: rt, parts: En, opener: a };
      h.classList.add("still"), h.style.transform = "", h.inert = !0, Wn.innerHTML = "", Wn.appendChild(h), Wn.classList.toggle("wide", Ft.classList.contains("wide")), Wn.hidden = !1, Ft.hidden = !0, Ft.innerHTML = "", rt = { id: t, opener: a, back: null, frame: null, under: b, at: Number((f = a == null ? void 0 : a.dataset) == null ? void 0 : f.at) || null }, Xe();
      return;
    }
    rt = { id: t, opener: s ? rt.opener : a, back: s ? rt : null, frame: s ? rt.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, under: s ? rt.under : null, at: Number((v = a == null ? void 0 : a.dataset) == null ? void 0 : v.at) || null }, Xe();
  }
  let _s = !1;
  function Xe() {
    En = [], _s = !Ft.hidden, yt.forEach((t, a) => {
      a !== rt.id && Ft.contains(t.el) && (t.destroy(), yt.delete(a));
    }), Mo(), _s = !1;
  }
  function Ds() {
    if (!rt) return;
    const t = rt;
    _f(Ft, () => {
      rt === t && zn();
    });
  }
  function zn() {
    var d, f, v, h, b, M, H, N;
    const t = rt == null ? void 0 : rt.opener, a = rt == null ? void 0 : rt.under;
    rt = null, yt.forEach((O, U) => {
      Ft.contains(O.el) && (O.destroy(), yt.delete(U));
    }), Na.forEach((O, U) => {
      U.startsWith("more:") && Na.delete(U);
    }), Ft.hidden = !0, Ft.innerHTML = "";
    const s = { preventScroll: !0 };
    if (a) {
      const O = Wn.firstElementChild;
      rt = a.more, En = a.parts, O && (O.inert = !1, Ft.appendChild(O)), Ft.classList.toggle("wide", Wn.classList.contains("wide")), Wn.hidden = !0, Wn.innerHTML = "", Ft.hidden = !1;
      const U = Ft.querySelector(".tfMore");
      U && (U.scrollTop = rt.scroll || 0), Mo(), (f = (d = a.opener) != null && d.isConnected ? a.opener : Ft.querySelector("[data-more-close]")) == null || f.focus(s);
      return;
    }
    t != null && t.isConnected ? t.focus(s) : (v = t == null ? void 0 : t.dataset) != null && v.more ? (h = E.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || h.focus(s) : (b = t == null ? void 0 : t.dataset) != null && b.summary ? (M = E.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || M.focus(s) : (H = t == null ? void 0 : t.hasAttribute) != null && H.call(t, "data-favs-edit") && ((N = E.querySelector("[data-favs-edit]")) == null || N.focus(s));
  }
  const Yl = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Id(t) {
    const a = String(Ut(t).problem || ""), s = "sensor." + t.split(".")[1] + "_";
    return a === "none" ? [] : a.split(",").map((d) => d.trim().split(" ")).map(([d, f]) => {
      const v = Yl[d], h = s + v;
      if (!v || !S[h] || !Zr[v]) return "";
      const b = Ut(h).unit_of_measurement || "", [M, H] = Zr[v], N = f === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + it(Bt(h)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + it(h) + '" data-guide="' + (N ? M : H) + '" data-guide-word="' + it("Wants " + (N ? "" : "up to ") + (N ? M : H).toLocaleString() + (b === "%" ? "%" : b ? " " + b : "") + (N ? " or more" : "")) + '" role="img" aria-label="' + it(Bt(h)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Bs = (t) => t.querySelectorAll("[data-plant-graph]").forEach((a) => Ur(a.dataset.plantGraph, a, { guide: Number(a.dataset.guide), guideWord: a.dataset.guideWord }).then(() => Sl(a)));
  function Rs(t, a, s, d = {}) {
    const f = a.map((pt) => pt[1]).concat(d.guide != null ? [d.guide] : []), v = d.zero ? 0 : Math.min(...f), h = Math.max(...f), b = Math.max(120, t.clientWidth || 260), M = Math.max(60, t.clientHeight || 130), H = 8, N = M - 20, O = Date.now() - 24 * 3600 * 1e3, U = 24 * 3600 * 1e3, lt = (pt) => Math.max(0, Math.min(b, (pt - O) / U * b)), dt = (pt) => h === v ? (H + N) / 2 : N - (pt - v) / (h - v) * (N - H);
    let $ = "M" + lt(a[0][0]).toFixed(1) + " " + dt(a[0][1]).toFixed(1);
    if (a.length > 2) $ = Op(a.map((pt) => [lt(pt[0]), dt(pt[1])]));
    else for (let pt = 1; pt < a.length; pt++) $ += d.smooth ? "L" + lt(a[pt][0]).toFixed(1) + " " + dt(a[pt][1]).toFixed(1) : "H" + lt(a[pt][0]).toFixed(1) + "V" + dt(a[pt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + b + " " + M), t.setAttribute("aria-label", s), t.innerHTML = qp(b, H, N) + '<path d="' + $ + "V" + N + "H" + lt(a[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + $ + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="' + aa.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + b + '" y="' + (M - 4) + '" text-anchor="end">Now</text>' + (d.guide != null ? '<line class="tfGuide" x1="0" x2="' + b + '" y1="' + dt(d.guide).toFixed(1) + '" y2="' + dt(d.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + b + '" y="' + (dt(d.guide) < 20 ? dt(d.guide) + 14 : dt(d.guide) - 5).toFixed(1) + '" text-anchor="end">' + it(d.guideWord || "") + "</text>" : "");
  }
  const zr = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Hd = (t, a) => {
    const s = t.split(".")[0];
    return zr[s] ? zr[s].includes(a) : s === "alarm_control_panel" || s === "climate" || s === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, Fd = (t) => {
    const a = t.split(".")[0], s = Ut(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[s] || (ld.includes(s) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Vr = /* @__PURE__ */ new Map();
  let Dn = 0;
  async function Gr(t) {
    let a = Vr.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let f = [];
      try {
        const v = await _({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        f = ((v == null ? void 0 : v[t]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      f.length || (f = (Ua || []).filter((v) => v.entity_id === t).map((v) => [v.when * 1e3, String(v.state)])), a = { at: Date.now(), pts: f }, Vr.set(t, a);
    }
    const s = S[t], d = a.pts.slice().sort((f, v) => f[0] - v[0]);
    return s && (!d.length || d[d.length - 1][1] !== s.state) && d.push([Date.parse(s.last_changed) || Date.now(), s.state]), d;
  }
  async function ul(t, a, s) {
    const d = await Gr(t);
    if (!a.isConnected) return;
    const f = d.map(([r, p]) => [r, Number(p)]);
    if (d.length > 1 && f.every(([, r]) => Number.isFinite(r))) {
      Rs(a, f, Bt(t) + ", last 24 hours");
      return;
    }
    const v = Date.now(), h = v - 864e5, b = Math.max(200, a.clientWidth || 360), M = 62, H = (r) => Math.max(0, Math.min(b, (r - h) / 864e5 * b)), N = [];
    let O = null;
    d.forEach(([r, p]) => {
      const w = Hd(t, p);
      w && O == null ? O = Math.max(r, h) : !w && O != null && (N.push([O, Math.max(r, h)]), O = null);
    }), O != null && N.push([O, v]);
    const U = ma(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", lt = Fd(t), dt = "tfDayClip" + ++Dn, $ = N.map(([r, p]) => lt + (p >= v - 1e3 && r <= h + 1e3 ? " all day" : p >= v - 1e3 ? " since " + Rn(r) : r <= h + 1e3 ? " until " + Rn(p) : " " + Rn(r) + "–" + Rn(p)));
    let pt = "", e = -1 / 0;
    N.forEach(([r], p) => {
      const w = $[p].length * 5.4, T = Math.min(H(r), b - w);
      T < e + 8 || (pt += '<text x="' + T.toFixed(1) + '" y="10">' + it($[p]) + "</text>", e = T + w);
    });
    let o = '<text x="' + b + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((r) => {
      let p = new Date(v).setHours(r, 0, 0, 0);
      p > v && (p -= 864e5), H(p) > 8 && H(p) < b - 34 && (o += '<text x="' + H(p).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(r).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + b + " " + M), a.setAttribute("aria-label", Bt(t) + ", last 24 hours: " + ($.length ? $.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + dt + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + pt + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + dt + ')">' + N.map(([r, p]) => '<rect x="' + H(r).toFixed(1) + '" y="18" width="' + Math.max(2, H(p) - H(r)).toFixed(1) + '" height="26" fill="' + U + '"/>').join("") + "</g>" + (s && s >= h ? '<line x1="' + H(s).toFixed(1) + '" x2="' + H(s).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + o;
  }
  function Zl(t) {
    var d;
    const a = Number((d = S[t]) == null ? void 0 : d.state), s = Date.now();
    if (Ut(t).state_class === "total_increasing") {
      const f = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), v = Math.max(1, s - f);
      return [...Array(49)].map((h, b) => f + v * b / 48).map((h) => [h, Math.round(a * Math.pow((h - f) / v, 1.3) * 100) / 100]);
    }
    if (Uo(t) && t.endsWith("_moisture")) return [...Array(48)].map((f, v) => [s - (48 - v) * 30 * 60 * 1e3, Math.round((a + 22 * Math.pow(1 - v / 48, 1.2)) * 10) / 10]);
    if (Uo(t) && t.endsWith("_light")) {
      const f = (h) => {
        const b = new Date(h).getHours() + new Date(h).getMinutes() / 60;
        return Math.max(0, Math.sin((b - 6) / 14 * Math.PI));
      }, v = (h) => 0.8 + 0.2 * f(h);
      return [...Array(48)].map((h, b) => s - (48 - b) * 30 * 60 * 1e3).map((h) => [h, Math.round(a * v(h) / v(s))]);
    }
    return [...Array(48)].map((f, v) => [s - (48 - v) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(v / 6)) * 10) / 10]);
  }
  async function Ur(t, a, s = {}) {
    var dt, $;
    let d = at.get(t);
    if (t.endsWith("_solar_power")) d = { at: Date.now(), points: Mc() };
    else if (Uo(t)) d = { at: Date.now(), points: Zl(t) };
    else if (!d || Date.now() - d.at > 5 * 60 * 1e3) {
      try {
        const pt = new Date(Date.now() - 864e5).toISOString(), e = await _({ type: "history/history_during_period", start_time: pt, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), o = ((e == null ? void 0 : e[t]) || []).map((r) => [r.lu != null ? r.lu * 1e3 : Date.parse(r.last_updated || r.last_changed), Number(r.s ?? r.state)]).filter(([r, p]) => Number.isFinite(r) && Number.isFinite(p));
        d = { at: Date.now(), points: o };
      } catch {
        d = { at: Date.now(), points: [] };
      }
      at.set(t, d);
    }
    const f = a || E.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!f) return;
    const v = S[t], h = ((dt = v == null ? void 0 : v.attributes) == null ? void 0 : dt.unit_of_measurement) || "", b = d.points.slice(), M = Number(v == null ? void 0 : v.state);
    if (Number.isFinite(M) && !t.endsWith("_solar_power") && b.push([Date.now(), M]), b.length < 2) {
      f.setAttribute("aria-label", Bt(t) + ": no history for the last 24 hours"), f.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const H = b.map((pt) => pt[1]), N = Math.min(...H), O = Math.max(...H), U = (pt) => pt.toLocaleString(void 0, { maximumFractionDigits: Math.abs(pt) >= 100 ? 0 : 1 }), lt = (($ = v == null ? void 0 : v.attributes) == null ? void 0 : $.state_class) === "total_increasing";
    Rs(f, b, Bt(t) + ", last 24 hours: " + (lt ? "+" + U(H[H.length - 1] - H[0]) : N === O ? U(N) : U(N) + " to " + U(O)) + (h ? " " + h : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...s });
  }
  function za() {
    const t = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!t) return;
    const a = Mc();
    Rs(t, a, "Solar, last 24 hours: up to " + Ca(Math.max(...a.map((s) => s[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Go(t, a) {
    const s = a.entity_id, d = W.get(s) || {}, f = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Pn(s) > 0 ? 0 : 100 }[t], v = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    f != null && (d.pos = f), v != null && (d.tilt = v), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), W.set(s, d);
  }
  function ur(t, a, s) {
    var f;
    const d = s == null ? void 0 : s.entity_id;
    return t !== "light" || typeof d != "string" || !Ga[d] || !kn(d) || s.brightness_pct != null || s.brightness != null ? [a, s] : a !== "turn_on" && !(a === "toggle" && ((f = S[d]) == null ? void 0 : f.state) !== "on") ? [a, s] : ["turn_on", { ...s, brightness_pct: Ga[d] }];
  }
  function $a(t, a, s, d) {
    let f = { entity_id: s, ...d || {} };
    return [a, f] = ur(t, a, f), t === "cover" && Go(a, f), na[s] = (na[s] || 0) + 1, Yo.set(fp, JSON.stringify(na)), he.call(t, a, f) ? Promise.resolve() : Promise.resolve(z(t, a, f));
  }
  function To(t) {
    const [a, s, d, f] = t.split("|");
    $a(a, s, d, f ? JSON.parse(f) : null).catch(() => {
    });
  }
  function bi(t, a) {
    L.set("pos|" + t, a), We.delete(t), En = En.map(() => ""), [E, Ft].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((f) => Us(f, a)));
    const s = E.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (s && (s.textContent = Math.round(a) + "%"), (rt == null ? void 0 : rt.id) === t) {
      const d = Ft.querySelector(".tfMoreState"), f = Ft.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(a) + "%", d.classList.add("live")), f && (f.textContent = "Currently " + Pn(t) + "%");
    }
    cr(t).forEach((d) => d.update(Es(t)));
  }
  const fr = (t, a) => {
    const s = t.shiftKey ? 10 : 1, d = { ArrowUp: a + s, ArrowRight: a + s, ArrowDown: a - s, ArrowLeft: a - s, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Kl(t, a) {
    var $;
    const s = t.dataset.blocks;
    ($ = t.setPointerCapture) == null || $.call(t, a.pointerId);
    const d = (pt) => {
      const e = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (pt.clientX - e.left) / e.width * 100));
    }, f = d(a), v = a.clientX;
    let h = !1, b = Me(s), M = f, H = 0;
    const N = () => {
      b = Math.abs(M - b) < 0.2 ? M : b + (M - b) * 0.14, bi(s, b), H = requestAnimationFrame(N);
    }, O = () => {
      h || (h = !0, t.classList.add("fine"), H = requestAnimationFrame(N));
    }, U = setTimeout(O, 350), lt = (pt) => {
      M = d(pt), Math.abs(pt.clientX - v) > 6 && (clearTimeout(U), O());
    }, dt = () => {
      clearTimeout(U), cancelAnimationFrame(H), t.removeEventListener("pointermove", lt), t.removeEventListener("pointerup", dt), t.removeEventListener("pointercancel", dt), t.classList.remove("fine"), bi(s, h ? Math.round(b) : (Math.min(3, Math.floor(f / 25)) + 1) * 25), wi("pos", s);
    };
    t.addEventListener("pointermove", lt), t.addEventListener("pointerup", dt), t.addEventListener("pointercancel", dt);
  }
  function Ps(t) {
    var b, M;
    const [a, s] = t.dataset.open.split("|"), d = t.closest(".tfCard"), f = t.getBoundingClientRect(), v = (b = t.querySelector(".tfIcon")) == null ? void 0 : b.getBoundingClientRect();
    Z = { key: a, id: s, h: d ? Math.round(d.getBoundingClientRect().height) : 0, from: f, chip: v }, We.delete(a), wa();
    const h = E.querySelector(".tfOpen");
    h && (Z.rel = f.top - h.getBoundingClientRect().top), Lf(h, f, v), (M = E.querySelector(".tfOpen [data-close]")) == null || M.focus({ preventScroll: !0 });
  }
  function fl(t) {
    var a;
    Mt = t.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((s) => {
      var f;
      const d = s === t;
      s.classList.toggle("active", d), s.setAttribute("aria-expanded", String(d)), (f = s.querySelector(".panelExpanded")) == null || f.toggleAttribute("inert", !d);
    }), We.set("areas", Y(((a = E.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const hr = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [s, d] = Bi(t);
      return Math.round(s + a * (d - s));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var s;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((s = Ut(t).hs_color) == null ? void 0 : s[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function Yr(t, a, s, d) {
    var M;
    const f = hr[a].value(s, d);
    L.set(a + "|" + s, f);
    const v = Math.round(d * 100) + "%", h = t.querySelector("i");
    if (a === "tilt") {
      h.style.width = "calc((100% - 8px) * " + d + ")";
      const [H, N] = t.querySelectorAll("span");
      H.classList.toggle("lit", d > 0.08), N.classList.toggle("lit", d > 0.92), We.delete(s), En = En.map(() => ""), cr(s).forEach((O) => O.update(Es(s)));
    } else if (h) h.style.width = v;
    else {
      let H = t.querySelector("b");
      H || (H = document.createElement("b"), t.appendChild(H)), H.style.left = v;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (M = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = hr[a].text(s, f));
  }
  function wi(t, a) {
    const s = L.get(t + "|" + a), [d, f, v] = hr[t].send(a, s), h = () => setTimeout(() => {
      L.delete(t + "|" + a), wa();
    }, 1500);
    $a(d, f, a, v).then(h, h);
  }
  function hl(t) {
    t.addEventListener("click", (a) => {
      var d;
      const s = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (ia && !a.target.closest(".tfBoardMenu,[data-board-more]") && Tn(), !(!s || !t.contains(s) || s.disabled))
        if (s.dataset.boardMore)
          (ia == null ? void 0 : ia.key) === s.dataset.boardMore ? Tn(!0) : Nr(s.dataset.boardMore, s);
        else if (s.dataset.boardAct) Bl(ia.key, s.dataset.boardAct);
        else if (s.dataset.boardShow) tl(s.dataset.boardShow);
        else if (s.dataset.favHide) jo(s.dataset.favHide, !1);
        else if (s.dataset.energyPick) Ks(s.dataset.energyPick);
        else if (s.dataset.act) To(s.dataset.act);
        else if (s.hasAttribute("data-details")) As(!(rt != null && rt.details));
        else if (s.hasAttribute("data-details-close")) As(!1);
        else if (s.dataset.summary) Jn(s.dataset.summary, s);
        else if (s.dataset.star) ni(s.dataset.star);
        else if (s.hasAttribute("data-more-back")) {
          const f = rt.id;
          rt = rt.back, Xe(), (d = Ft.querySelector('.tfMore [data-more="' + CSS.escape(f) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (s.hasAttribute("data-favs-edit")) Co("favourites", s);
        else if (s.dataset.acts) JSON.parse(s.dataset.acts).forEach(([f, v, h, b]) => $a(f, v, h, b).catch(() => {
        }));
        else if (s.dataset.more) Co(s.dataset.more, s);
        else if (s.hasAttribute("data-more-close")) Ds();
        else if (s.dataset.morePage) cl(Number(s.dataset.morePage));
        else if (s.dataset.path) Oa(s.dataset.path);
        else if (s.dataset.go) Or("room:" + s.dataset.go);
        else if (s.hasAttribute("data-area-back")) Ms();
        else if (s.dataset.open) Ps(s);
        else if (s.hasAttribute("data-close")) {
          const f = Z, v = s.closest(".tfOpen"), h = v == null ? void 0 : v.getBoundingClientRect().top, b = f.from && h != null ? new DOMRect(f.from.left, h + (f.rel || 0), f.from.width, f.from.height) : f.from;
          Af(v, b, () => {
            var M;
            Z === f && (Z = null, We.delete(f.key), wa(), (M = E.querySelector('[data-open="' + CSS.escape(f.key + "|" + f.id) + '"]')) == null || M.focus({ preventScroll: !0 }));
          });
        } else s.classList.contains("tfAreaPanel") && !s.classList.contains("active") && fl(s);
    }), t.addEventListener("keydown", (a) => {
      var d, f, v, h, b, M, H;
      const s = a.target;
      if ((d = s.dataset) != null && d.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ps(s)), (f = s.dataset) != null && f.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ks(s.dataset.energyPick)), (v = s.classList) != null && v.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), fl(s)), (h = s.dataset) != null && h.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Jn(s.dataset.summary, s)), a.key === "Escape" && ia && t === E) {
        a.preventDefault(), Tn(!0);
        return;
      }
      if (a.key === "Escape" && Wa && t === E) {
        a.preventDefault(), Ya(!1), (b = c("dashEditNav")) == null || b.focus();
        return;
      }
      if (a.key === "Escape" && tt && t === E && (a.preventDefault(), Ms()), (M = s.dataset) != null && M.blocks) {
        const N = s.dataset.blocks, O = fr(a, Math.round(Me(N)));
        if (O == null) return;
        a.preventDefault(), bi(N, O), clearTimeout(wt.get(N)), wt.set(N, setTimeout(() => wi("pos", N), 500));
        return;
      }
      if ((H = s.dataset) != null && H.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [N, O] = s.dataset.drag.split("|"), U = Number(s.getAttribute("aria-valuenow")) / 100, lt = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, U + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        Yr(s, N, O, lt), wi(N, O);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var w;
      const s = a.target.closest("[data-blocks]");
      if (s && a.button === 0) {
        a.preventDefault(), Kl(s, a);
        return;
      }
      const d = a.target.closest("[data-drag]");
      if (!d || a.button > 0) return;
      const [f, v] = d.dataset.drag.split("|"), h = f === "bright" && !kn(v), b = a.pointerType !== "mouse";
      if (h && !b) {
        To(me("light", "toggle", v));
        return;
      }
      const M = f === "bright" && ((w = S[v]) == null ? void 0 : w.state) !== "on", H = f === "tilt" ? 4 : 0, N = () => d.getBoundingClientRect().width - H * 2, O = (T) => {
        const R = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (T.clientX - R.left - H) / N()));
      };
      let U = b ? "waiting" : M ? "pressed" : "dragging", lt = 0;
      const dt = a.clientX, $ = a.clientY, pt = (T, R) => Math.hypot(T.clientX - dt, T.clientY - $) > R, e = () => {
        try {
          d.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      b || (a.preventDefault(), e()), U === "dragging" && Yr(d, f, v, O(a));
      const o = () => {
        var T, R;
        U = "sliding", B = d, d.classList.add("held"), e(), (T = navigator.userActivation) != null && T.hasBeenActive && ((R = navigator.vibrate) == null || R.call(navigator, 8)), lt = M ? (Ga[v] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100;
      }, r = (T) => {
        U === "waiting" && pt(T, P) ? !h && Math.abs(T.clientX - dt) > Math.abs(T.clientY - $) ? o() : U = "gone" : U === "pressed" && pt(T, 4) && (U = "dragging"), U === "sliding" ? Yr(d, f, v, Math.max(0, Math.min(1, lt + (T.clientX - dt) / N()))) : U === "dragging" && Yr(d, f, v, O(T));
      }, p = (T) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((R, D) => d.removeEventListener(R, D ? p : r)), d.classList.remove("held"), B === d && (B = null), U === "sliding" || U === "dragging" ? wi(f, v) : T.type === "pointerup" && h ? To(me("light", "toggle", v)) : T.type === "pointerup" && M && (U === "waiting" || U === "pressed") && $a("light", "turn_on", v).catch(() => {
        });
      };
      d.addEventListener("pointermove", r), d.addEventListener("pointerup", p), d.addEventListener("pointercancel", p);
    }), t.addEventListener("touchmove", (a) => {
      B && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return E && k && (ge(), hl(E), hl(Ft), Ft.addEventListener("click", (t) => {
    t.target === Ft && Ds();
  }), (ml = n.getElementById("homeNav")) == null || ml.addEventListener("click", () => {
    tt && Ms();
  }), (Ns = n.querySelector(".bottomNav")) == null || Ns.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + bp + "</button>"), (Is = c("dashEditNav")) == null || Is.addEventListener("click", () => Ya(!Wa)), E.addEventListener("pointerdown", un), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Fo() !== Xs ? wa() : dn();
  }).observe(E), window.addEventListener("resize", dn, { passive: !0 }), Ft.addEventListener("keydown", (t) => {
    var a, s;
    t.key === "Escape" ? (t.stopPropagation(), rt != null && rt.details ? As(!1) : Ds()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((s = (a = t.target).closest) != null && s.call(a, ".tfMoreDots")) && (t.preventDefault(), cl(((rt == null ? void 0 : rt.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), Q(), {
    update(t) {
      if (!k) return;
      const a = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([d]) => Uo(d))), ...t || {} };
      for (const d in S) d.startsWith("light.") && S[d].state === "on" && kn(d) && $n(d, Gn(S[d]));
      a ? Fe() : wa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Ei = !0, Kt == null || Kt.destroy(), Kt = null, ha == null || ha.forEach((t) => t.destroy()), ha = null;
    },
    resume() {
      Ei = !1, !(!k || !(E != null && E.querySelector("[data-tf]"))) && (Qt.isConnected && Mr(Qt.style.order), Sr());
    }
  };
}
const mm = "0.79.0", oc = "move_assistant", gm = "move_assistant", yp = "move_assistant_checkin_reminder";
function vm() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class bm extends HTMLElement {
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
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (c = this._test) == null || c.update(l.states));
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
    vm();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${cu}${pu}${uu}${fu}</style>${hu}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: oc
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Pu(l, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, x) => this._fire(m, x),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, x) => {
        var k, A;
        return (A = (k = this._hass) == null ? void 0 : k.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(x, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, x;
        return Object.keys(((x = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = hm(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Cf(l, i), Ef(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var x;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (x = this._app) == null || x.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: oc }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: oc,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var c, m;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((m = this._hass) == null || m.callWS({
      type: "fire_event",
      event_type: gm,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${yp}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (x) {
        if ((x == null ? void 0 : x.status_code) !== 404 && (x == null ? void 0 : x.status) !== 404) throw x;
      }
      return;
    }
    const c = (x) => `${x}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: yp,
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
            data: { url: m, clickAction: m }
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
    var c;
    const i = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", bm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${mm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
