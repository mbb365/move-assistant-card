const cu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', pu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"] .tfRoomReading{display:none}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, uu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, fu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', hu = `<main id="app"><div class="shell">
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
`, Mn = {
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
}, yn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, wc = (n, l, i) => n + (l - n) * i, ic = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, mu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), xc = {}, Qe = (n, l, i) => {
  const c = n + l + i;
  return xc[c] || (xc[c] = mu(ic(n).map((m, x) => m + (ic(l)[x] - m) * i)));
}, yc = {}, fd = (n) => yc[n] || (yc[n] = ic(n)), Od = (n, l, i, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let x = 0, k = 1, E = m;
  for (let S = 0; S < 18; S++)
    E = (x + k) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < m ? x = E : k = E;
  return 3 * (1 - E) * (1 - E) * E * l + 3 * (1 - E) * E * E * c + E * E * E;
}, gu = { std: Od(0.2, 0, 0, 1), acc: Od(0.3, 0, 1, 1), dec: Od(0, 0, 0, 1) };
function kd(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function kp(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Qe(l.clear[0], l.cloudy[0], 0.12), Qe(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Qe(l.rain[0], "#000000", 0.22), Qe(l.rain[1], "#000000", 0.22)], l;
}
const rc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], sc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], lc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function dc(n, l = Mn) {
  const i = { ...Mn, ...l }, c = kp(i), m = String(n).split("/"), x = c[m[0]] ? m[0] : "clear", k = m[1] === "night", E = c[x][k ? 1 : 0], S = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: rc.map(() => ({ o: 0 })),
    rain: sc.map(() => ({ o: 0, dy: -16 })),
    snow: lc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, D = (z) => rc.map(() => ({ o: z }));
  return x === "clear" ? k ? (S.moon.o = 1, S.stars = D(1)) : S.sun.o = 1 : x === "partly" ? (S.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (S.moon = { x: 34, y: 33, d: 48, o: 1 }, S.stars = D(0.7)) : S.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (S.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? S.moon = { x: 40, y: 36, d: 40, o: 0 } : S.sun = { x: 40, y: 36, r: 20, o: 0 }) : (S.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? S.moon = { x: 38, y: 28, d: 36, o: 0 } : S.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? S.snow = lc.map(() => ({ o: 1, dy: 0 })) : S.rain = sc.map((z, I) => ({ o: x === "storm" && I === 1 ? 0 : 1, dy: 0 })), x === "storm" && (S.bolt = { o: 1, dy: 0 })), S;
}
const kc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function vu(n, l, i, c = Mn, m = !1) {
  const x = { ...Mn, ...c }, k = (q, G) => q > 0.01 && G > 0.01 ? "stay" : q > 0.01 ? "leave" : G > 0.01 ? "enter" : "none", E = (q, G, rt, at) => {
    const K = q[0] + G * at, j = q[1] - (rt - 1 - G) * at;
    return gu[q[2]](yn((i - K) / Math.max(1e-3, j - K)));
  }, S = (q, G, rt, at = 0, K = 1, j = 0) => {
    const ft = k(q.o, G.o);
    if (ft === "none") return { ...G, o: 0 };
    const ht = E(kc[rt][ft], at, K, j), wt = {};
    for (const ot in G) wt[ot] = m && ft !== "stay" && ot !== "o" ? ft === "leave" ? q[ot] : G[ot] : wc(q[ot], G[ot], ht);
    return wt;
  }, D = E(kc.sky, 0, 1, 0);
  let z, I;
  if (n.night !== l.night) {
    const q = Math.min(n.clearness, l.clearness), G = Qe(Qe(n.sky, l.sky, 0.5), x.dusk, 0.6 * q);
    z = D < 0.5 ? Qe(n.sky, G, D * 2) : Qe(G, l.sky, D * 2 - 1), I = q > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    z = Qe(n.sky, l.sky, D), I = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: wc(n.clearness, l.clearness, i),
    sky: z,
    skyStops: I,
    skyT: D,
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
], xn = (n, l) => (bu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, wu = 0, uc = 1, fc = 2, hc = 3, mc = 4, wn = 5, qs = 6, xr = 7, gc = 8, vd = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), xu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], yu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Mp = (n, l, i) => {
  let c = !1;
  for (let m = 0, x = n.length - 1; m < n.length; x = m++) {
    const k = n[m], E = n[x];
    k[1] > i != E[1] > i && l < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (c = !c);
  }
  return c;
};
function Sp(n, { size: l = 90, px: i = 2, oneBit: c = !1, colors: m = Mn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: E = 0, idle: S = !1 } = {}) {
  const D = { ...Mn, ...m }, z = Math.sin, I = Math.PI * 2, q = Math.max(6, Math.round(l / i)), G = q / 90, rt = S ? Math.floor(E / 100) * 100 : 0, at = S ? z(I * rt / 3600) : 0, K = S ? 1.8 * z(I * rt / 6400) : 0, j = S ? 0.9 * z(I * rt / 4100) : 0, ft = S ? 0.8 * z(I * rt / 5200) : 0, ht = rt / 3400 % 1, wt = S && n.bolt.o > 0.5 && (ht < 0.04 || ht > 0.08 && ht < 0.11), ot = new Array(q * q), tt = new Uint8Array(q * q), _ = (T, R, B, W, kt) => {
    B == null || T < 0 || R < 0 || T >= q || R >= q || (W >= 1 || W > xn(T + 5, R + 3)) && (ot[R * q + T] = B, tt[R * q + T] = kt);
  }, Z = (T, R, B, W) => {
    for (let kt = Math.max(0, Math.floor(R - B) - 1); kt <= Math.min(q - 1, R + B + 1); kt++) for (let xt = Math.max(0, Math.floor(T - B) - 1); xt <= Math.min(q - 1, T + B + 1); xt++) W(xt, kt, xt + 0.5 - T, kt + 0.5 - R);
  }, St = n.skyStops || [n.sky], et = n.skyT || 0;
  for (let T = 0; T < q; T++) {
    const R = n.night ? yn(1 - (T + 0.5) / (q * 0.7)) * 0.85 : yn(((T + 0.5) / q - 0.35) / 0.65) * 0.85;
    for (let B = 0; B < q; B++) {
      let W = St[0];
      if (St.length > 1) {
        const kt = et * (St.length - 1), xt = Math.min(St.length - 2, Math.floor(kt));
        W = kt - xt > xn(B, T) ? St[xt + 1] : St[xt];
      }
      R > xn(B + 2, T + 5) && (W = n.night ? Qe(W, "#000000", 0.28) : Qe(W, "#ffffff", 0.2)), ot[T * q + B] = wt ? Qe(W, "#ffffff", 0.25) : W;
    }
  }
  if (n.sun.o > 0.01) {
    const T = n.sun.x * G, R = n.sun.y * G, B = Math.max(1, n.sun.r * G);
    if (S) {
      const W = B * (1.45 + 0.06 * at), kt = Qe(D.sun, "#ffffff", 0.55);
      if (Z(T, R, W, (xt, J, Mt, Ct) => {
        const Jt = Math.sqrt(Mt * Mt + Ct * Ct);
        Jt > B && Jt < W && _(xt, J, kt, 0.26 * (1 - (Jt - B) / (W - B)) * n.sun.o, wu);
      }), n.sun.o > 0.5) {
        const xt = Math.floor(rt / 500) % 2, J = Math.max(1, B * 0.22);
        for (let Mt = 0; Mt < 8; Mt++) if (Mt % 2 === xt) for (let Ct = B + 1.5; Ct < B + 1.5 + J; Ct += 0.7) _(Math.floor(T + Math.cos(Mt * Math.PI / 4) * Ct), Math.floor(R + Math.sin(Mt * Math.PI / 4) * Ct), D.sun, n.sun.o, gc);
      }
    }
    Z(T, R, B, (W, kt, xt, J) => {
      if (xt * xt + J * J > B * B) return;
      const Mt = ((xt * 0.643 + J * 0.766) / B + 1) / 2;
      _(W, kt, yn((Mt - 0.62) / 0.38) > xn(W, kt) ? D.sunEdge : D.sun, n.sun.o, uc);
    });
  }
  if (rc.forEach((T, R) => {
    const B = n.stars[R].o;
    if (B < 0.01) return;
    const W = Math.floor(T[0] * G), kt = Math.floor(T[1] * G), xt = S ? (Math.floor(rt / 300) + R * 3) % 6 : 0;
    if (xt === 5) return;
    const J = Math.round(T[2] * G * (xt === 4 ? 0.3 : xt < 2 ? 1 : 0.6));
    _(W, kt, D.star, B, xr);
    for (let Mt = 1; Mt <= J; Mt++) {
      const Ct = Mt === J && J > 1 ? Qe(D.star, n.sky, 0.5) : D.star;
      _(W - Mt, kt, Ct, B, xr), _(W + Mt, kt, Ct, B, xr), _(W, kt - Mt, Ct, B, xr), _(W, kt + Mt, Ct, B, xr);
    }
  }), n.moon.o > 0.01) {
    const T = Math.max(1.5, n.moon.d * G * 0.37), R = n.moon.x * G, B = n.moon.y * G + (S && ft > 0.4 ? -1 : 0), W = R + 0.547 * T, kt = B - 0.503 * T, xt = 0.82 * T, J = Qe(D.moon, "#ffffff", 0.6);
    Z(R, B, T, (Mt, Ct, Jt, ie) => {
      if (Jt * Jt + ie * ie > T * T) return;
      const na = Mt + 0.5 - W, ye = Ct + 0.5 - kt;
      na * na + ye * ye <= xt * xt || _(Mt, Ct, yn((ie + T) / (2 * T) * 1.1 - 0.1) > xn(Mt, Ct) ? D.moon : J, n.moon.o, fc);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * G)), nt = Math.max(1, Math.round(5.87 * G * 0.5));
  sc.forEach((T, R) => {
    const B = n.rain[R];
    let W = B.dy, kt = B.o;
    if (kt < 0.01) return;
    if (S) {
      const Mt = (rt / 950 + R / 3) % 1;
      W += -5 + Mt * 14, kt *= Mt < 0.18 ? Mt / 0.18 : Mt > 0.72 ? (1 - Mt) / 0.28 : 1;
    }
    const xt = (T[0] + 3 + K) * G, J = (T[1] + W) * G;
    for (let Mt = 0; Mt < ct; Mt++) for (let Ct = 0; Ct < nt; Ct++) _(Math.floor(xt - 0.208 * Mt) + Ct, Math.floor(J) + Mt, D.rain, kt, mc);
  });
  const qt = Math.max(0, Math.round(7.34 * G / 2.6));
  if (lc.forEach((T, R) => {
    const B = n.snow[R];
    let W = B.dy, kt = 0, xt = B.o;
    if (xt < 0.01) return;
    if (S) {
      const Ct = (rt / 3200 + R / 5) % 1;
      W += -6 + Ct * 14, kt = 1.5 * z(I * (Ct * 1.5 + R / 5)), xt *= Ct < 0.2 ? Ct / 0.2 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1;
    }
    const J = Math.floor((T[0] + 3.67 + kt + K) * G), Mt = Math.floor((T[1] + 3.67 + W) * G);
    _(J, Mt, D.snow, xt, wn);
    for (let Ct = 1; Ct <= qt; Ct++)
      _(J - Ct, Mt, D.snow, xt, wn), _(J + Ct, Mt, D.snow, xt, wn), _(J, Mt - Ct, D.snow, xt, wn), _(J, Mt + Ct, D.snow, xt, wn), qt > 1 && Ct < qt && (_(J - Ct, Mt - Ct, D.snow, xt, wn), _(J + Ct, Mt - Ct, D.snow, xt, wn), _(J - Ct, Mt + Ct, D.snow, xt, wn), _(J + Ct, Mt + Ct, D.snow, xt, wn));
  }), n.bolt.o > 0.01)
    if (q >= 30) {
      const T = 39 + K, R = 50 + n.bolt.dy;
      for (let B = Math.floor(R * G); B <= (R + 28) * G; B++) for (let W = Math.floor(T * G); W <= (T + 13) * G; W++)
        Mp(yu, (W + 0.5) / G - T, (B + 0.5) / G - R) && _(W, B, D.sun, n.bolt.o, qs);
    } else {
      const T = q / 18, R = 7, B = 10 + Math.round(n.bolt.dy * 0.2);
      xu.forEach((W, kt) => W.split("").forEach((xt, J) => {
        if (xt !== "#") return;
        const Mt = Math.floor((R + J) * T), Ct = Math.floor((B + kt) * T);
        for (let Jt = Ct; Jt < Math.max(Ct + 1, Math.floor((B + kt + 1) * T)); Jt++) for (let ie = Mt; ie < Math.max(Mt + 1, Math.floor((R + J + 1) * T)); ie++) _(ie, Jt, D.sun, n.bolt.o, qs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const T = Math.max(3, n.cloud.w * G), R = T * 0.6665, B = (n.cloud.x + K) * G - T / 2, W = (n.cloud.y + j) * G - R / 2, kt = Qe(D.cloudDay, D.cloudNight, Math.round(n.cloud.f * 4) / 4), xt = Qe(kt, "#000000", 0.16);
    for (let J = Math.max(0, Math.floor(W) - 1); J <= Math.min(q - 1, W + R + 1); J++) for (let Mt = Math.max(0, Math.floor(B) - 1); Mt <= Math.min(q - 1, B + T + 1); Mt++) {
      const Ct = (Mt + 0.5 - B) / T, Jt = (J + 0.5 - W) / T;
      vd(Ct, Jt) && _(Mt, J, !vd(Ct, Jt + 1 / T) || yn((Jt - 0.42) / 0.25) * 0.8 > xn(Mt, J) ? xt : kt, n.cloud.o, hc);
    }
  }
  return Cp(ot, tt, q, q, { oneBit: c, ink: x, paper: k, snowInk: !n.night });
}
function Cp(n, l, i, c, { oneBit: m, ink: x, paper: k, snowInk: E }) {
  const S = new Uint8ClampedArray(i * c * 4), D = fd(x), z = fd(k);
  for (let I = 0; I < c; I++) for (let q = 0; q < i; q++) {
    const G = I * i + q, rt = l[G];
    if (n[G] == null) continue;
    let at = fd(n[G]);
    if (m) {
      let K;
      rt === mc || rt === gc ? K = !0 : rt === wn ? K = E : rt === xr || rt === qs ? K = !1 : K = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= xn(q, I), (rt === uc || rt === fc || rt === hc || rt === qs) && (q > 0 && l[G - 1] !== rt || q < i - 1 && l[G + 1] !== rt || I > 0 && l[G - i] !== rt || I < c - 1 && l[G + i] !== rt) && (K = !0), at = K ? D : z;
    }
    S[G * 4] = at[0], S[G * 4 + 1] = at[1], S[G * 4 + 2] = at[2], S[G * 4 + 3] = 255;
  }
  return { w: i, h: c, data: S };
}
const ku = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Mu = (n) => kd(n, !1).split("/")[0], qd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Su = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Cu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Tu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Lu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Eu = [".##", "##.", ".#.", "#.."];
function Tp(n, { width: l, height: i, colors: c, wave: m = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const E = { ...Mn, dawn: "#e5a77e", ...c }, S = kp(E), D = l, z = i, I = D / 6, q = I / 2, G = Math.PI * 2, rt = n.length ? n : [{ cond: "cloudy", night: !1 }], at = [...Array(12)].map((ht, wt) => {
    const ot = rt[Math.min(wt, rt.length - 1)], tt = Mu(ot.cond), _ = wt % 2 === 1;
    return { cond: ot.cond, k: tt, night: _, sky: S[tt][_ ? 1 : 0], cover: ku[tt] };
  }), K = (ht) => z * (0.5 - m * Math.cos(G * (ht / I - 0.25)));
  return { C: E, S: at, W: D, H: z, cw: I, sw: q, TAU: G, yb: K, side: (ht, wt, ot) => {
    const tt = (ht ? K(wt) - ot : ot - K(wt)) / Math.max(3, x * 1.4) + 0.5;
    return tt <= 0 ? 0 : tt >= 1 ? 1 : tt;
  }, glowAt: (ht) => {
    const wt = ((ht / I - 0.25) % 1 + 1) % 1, ot = Math.max(0, Math.min(5, Math.round(ht / I - 0.25))), tt = Math.max(0, Math.min(5, Math.round(ht / I - 0.75))), _ = 1 - (at[2 * ot].cover + at[2 * tt + 1].cover) / 2, Z = Math.sin(Math.PI * Math.min(1, Math.max(0, K(ht) / z)));
    return { c: wt < 0.5 ? E.dusk : E.dawn, a: k * (0.2 + 0.8 * _) * Z * Z };
  }, soft: x, tw: I * 0.3, sy: z / 90 };
}
function Lp(n, { clock: l = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: m, sw: x, side: k, C: E, TAU: S, sy: D } = n, z = l, I = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((q, G) => {
    const rt = qd(c * 977 + G * 131 + 7), at = (G + 0.5) * x, K = q.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[q.k] : 0;
    for (let j = 0; j < K; j++) {
      const ft = at + (rt() - 0.5) * x * 1.6, ht = (6 + rt() * 76) * D, wt = rt() < 0.35, ot = 1.8 + rt() * 1.6, tt = k(!0, ft, ht) * (wt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * z / 2600 + j * 1.7 + G) : 1);
      tt >= 0.03 && I.stars.push({ x: ft, y: ht, big: wt, size: ot, o: tt });
    }
    if (!q.night && (q.k === "clear" || q.k === "partly")) {
      const j = at + (rt() - 0.5) * x * 0.3, ft = Math.min(15, x * 0.29);
      I.suns.push({ x: j, y: 32 * D, rad: ft, halo: ft * 2.8 * (i ? 1 + 0.07 * Math.sin(S * z / 3600 + G) : 1) });
    }
    if (q.night && (q.k === "clear" || q.k === "partly")) {
      const j = Math.min(0.78, x * 0.55 / 34), ft = at - 23 * j + (rt() - 0.5) * x * 0.2;
      I.moons.push({ x: ft + 23 * j, y: (4 + (i ? 0.8 * Math.sin(S * z / 5200 + G) : 0)) * D + 23 * j, d: 46 * j });
    }
  }), m.forEach((q, G) => {
    const rt = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[q.k];
    if (!rt) return;
    const at = qd(c * 577 + G * 71 + 3), K = (G + 0.5) * x, j = q.k === "rain" || q.k === "storm" || q.night ? E.cloudNight : E.cloudDay, ft = q.night ? 0.82 : q.k === "storm" ? 0.75 : 1;
    for (let ht = 0; ht < rt; ht++) {
      const wt = x / 46 * (q.k === "partly" ? 0.85 : 0.75 + at() * 0.55), ot = K + (q.k === "partly" ? x * 0.12 : (at() - 0.5) * x * 1.05), tt = (q.k === "partly" ? 40 : 6 + at() * 26) * D, _ = i ? 2.5 * Math.sin(S * z / 9e3 + G * 1.3 + ht * 2.1) : 0, Z = i ? 0.9 * Math.sin(S * z / 6100 + G + ht) : 0;
      I.clouds.push({ x: ot - 23 * wt + _, y: tt - 15.33 * wt + Z, w: 46 * wt, h: 30.66 * wt, fill: j, o: ft * (rt > 1 && ht === 0 ? 0.85 : 1) });
    }
  }), m.forEach((q, G) => {
    const rt = qd(c * 313 + G * 29 + 11), at = (G + 0.5) * x, K = q.cond === "pouring" ? 16 : q.cond === "rainy" || q.cond === "hail" ? 9 : q.cond === "lightning-rainy" ? 12 : q.cond === "snowy-rainy" ? 5 : 0;
    for (let ft = 0; ft < K; ft++) {
      let ht = at + (rt() - 0.5) * x * 1.05, wt = 44 + rt() * 36, ot = 1;
      if (i) {
        const _ = ((wt - 44 + z * 0.04) % 36 + 36) % 36;
        ht -= 0.21 * (_ - (wt - 44)), wt = 44 + _, ot = Math.min(1, _ / 6, (36 - _) / 6);
      }
      wt *= D;
      const tt = k(q.night, ht, wt) * ot;
      tt >= 0.05 && I.drops.push({ x: ht, y: wt, o: tt });
    }
    const j = q.cond === "snowy" ? 11 : q.cond === "snowy-rainy" ? 6 : 0;
    for (let ft = 0; ft < j; ft++) {
      let ht = at + (rt() - 0.5) * x * 1.05, wt = 40 + rt() * 44, ot = 1;
      if (i) {
        const _ = ((wt - 40 + z * 9e-3) % 44 + 44) % 44;
        wt = 40 + _, ht += 1.6 * Math.sin(S * z / 2800 + ft * 1.9 + G), ot = Math.min(1, _ / 6, (44 - _) / 6);
      }
      wt *= D;
      const tt = k(q.night, ht, wt) * ot;
      tt >= 0.05 && I.flakes.push({ x: ht, y: wt, o: tt });
    }
    if (q.k === "fog") {
      const ft = q.night ? "#c8ccd6" : "#ffffff", ht = q.night ? 0.28 : 0.62, wt = i ? 4 * Math.sin(S * z / 8e3 + G) : 0;
      for (let ot = 0; ot < 4; ot++) I.fogs.push({ x: at - x * 0.75 + ot % 2 * x * 0.18 + (ot % 2 ? wt : -wt), y: (30 + ot * 13) * D, w: x * 1.3, c: ft, a: ht });
    }
    if (q.k === "storm") {
      const ft = (z / 3400 + G * 0.37) % 1;
      I.bolts.push({ x: at + (rt() - 0.5) * x * 0.3 - 5, y: 36 * D, o: i && !(ft < 0.05 || ft > 0.09 && ft < 0.12) ? 0.8 : 1 });
    }
  }), I;
}
function _u(n, l, i, c, m, x, k, E) {
  const { S, C: D, cw: z, yb: I, glowAt: q, soft: G, tw: rt, sy: at } = n, K = new Array(i * c), j = new Uint8Array(i * c), ft = new Uint8Array(i * c), ht = (T, R, B, W, kt) => {
    B == null || T < 0 || R < 0 || T >= i || R >= c || (W >= 1 || W > xn(T + 5, R + 3)) && (K[R * i + T] = B, j[R * i + T] = kt);
  }, wt = (T, R, B, W) => {
    for (let kt = Math.max(0, Math.floor(R - B) - 1); kt <= Math.min(c - 1, R + B + 1); kt++) for (let xt = Math.max(0, Math.floor(T - B) - 1); xt <= Math.min(i - 1, T + B + 1); xt++) W(xt, kt, xt + 0.5 - T, kt + 0.5 - R);
  }, ot = (T, R, B) => {
    for (let kt = 0; kt < T.length - 1; kt++) {
      const xt = (kt + R) * z;
      if (B < xt - rt / 2) return [T[kt], T[kt], 0];
      if (B <= xt + rt / 2) return [T[kt], T[kt + 1], (B - xt + rt / 2) / rt];
    }
    const W = T[T.length - 1];
    return [W, W, 0];
  }, tt = S.filter((T) => !T.night).map((T) => T.sky), _ = S.filter((T) => T.night).map((T) => T.sky), Z = G / x, St = 16 * at / x;
  for (let T = 0; T < i; T++) {
    const R = (T + 0.5) * m, B = I(R) / x, W = ot(tt, 0.75, R), kt = ot(_, 1.25, R), xt = q(R);
    for (let J = 0; J < c; J++) {
      const Mt = xn(T, J), Ct = J + 0.5 - B, Jt = (Z > 0.01 ? yn(0.5 + Ct / Z) : Ct > 0 ? 1 : 0) > Mt;
      let ie = Jt ? W[2] > Mt ? W[1] : W[0] : kt[2] > Mt ? kt[1] : kt[0];
      (Jt ? yn(((J + 0.5) / c - 0.45) / 0.55) * 0.7 : yn(1 - (J + 0.5) / (c * 0.55)) * 0.7) > xn(T + 2, J + 5) && (ie = Jt ? Qe(ie, "#ffffff", 0.18) : Qe(ie, "#000000", 0.25)), Jt && Ct >= 0 && Ct < St && xt.a * 1.3 * (1 - Ct / St) > xn(T + 6, J + 1) && (ie = xt.c), K[J * i + T] = ie, ft[J * i + T] = Jt ? 0 : 1;
    }
  }
  const et = Qe(D.sun, "#ffffff", 0.55), ct = Qe(D.moon, "#ffffff", 0.6);
  l.stars.forEach((T) => {
    const R = Math.floor(T.x / m), B = Math.floor(T.y / x);
    if (R < 0 || B < 0 || R >= i || B >= c || !ft[B * i + R] || T.o < 0.15) return;
    const W = T.o > 0.45 ? D.star : Qe(D.star, K[B * i + R], 0.5), kt = T.big && T.o > 0.6 ? Math.floor(T.size / m) : 0;
    ht(R, B, W, 1, xr);
    for (let xt = 1; xt <= kt; xt++) [[R - xt, B], [R + xt, B], [R, B - xt], [R, B + xt]].forEach((J) => {
      J[0] >= 0 && J[1] >= 0 && J[0] < i && J[1] < c && ft[J[1] * i + J[0]] && ht(J[0], J[1], W, 1, xr);
    });
  }), l.suns.forEach((T) => {
    const R = Math.max(1.5, T.rad / m), B = T.x / m, W = T.y / x, kt = T.halo / m * 0.85;
    if (wt(B, W, kt, (xt, J, Mt, Ct) => {
      const Jt = Math.sqrt(Mt * Mt + Ct * Ct);
      Jt > R && Jt < kt && !ft[J * i + xt] && ht(xt, J, et, 0.3 * (1 - (Jt - R) / (kt - R)), 0);
    }), E) {
      const xt = Math.floor(k / 500) % 2, J = Math.max(1, R * 0.3);
      for (let Mt = 0; Mt < 8; Mt++) if (Mt % 2 === xt) for (let Ct = R + 1.2; Ct < R + 1.2 + J; Ct += 0.7) ht(Math.floor(B + Math.cos(Mt * Math.PI / 4) * Ct), Math.floor(W + Math.sin(Mt * Math.PI / 4) * Ct), D.sun, 1, gc);
    }
    wt(B, W, R, (xt, J, Mt, Ct) => {
      Mt * Mt + Ct * Ct <= R * R && ht(xt, J, yn(((Ct / R + 1) / 2 - 0.6) / 0.4) > xn(xt, J) ? D.sunEdge : D.sun, 1, uc);
    });
  }), l.moons.forEach((T) => {
    const R = Math.max(1.5, T.d * 0.37 / m), B = T.x / m, W = T.y / x, kt = B + 0.547 * R, xt = W - 0.503 * R, J = 0.82 * R;
    wt(B, W, R, (Mt, Ct, Jt, ie) => {
      if (Jt * Jt + ie * ie > R * R) return;
      const na = Mt + 0.5 - kt, ye = Ct + 0.5 - xt;
      na * na + ye * ye > J * J && ht(Mt, Ct, yn((ie + R) / (2 * R) * 1.1 - 0.1) > xn(Mt, Ct) ? D.moon : ct, 1, fc);
    });
  }), l.clouds.forEach((T) => {
    const R = Math.max(3, T.w / m), B = R * 0.6665, W = T.x / m, kt = T.y / x, xt = Qe(T.fill, "#000000", 0.16);
    for (let J = Math.max(0, Math.floor(kt) - 1); J <= Math.min(c - 1, kt + B + 1); J++) for (let Mt = Math.max(0, Math.floor(W) - 1); Mt <= Math.min(i - 1, W + R + 1); Mt++) {
      const Ct = (Mt + 0.5 - W) / R, Jt = (J + 0.5 - kt) / R;
      vd(Ct, Jt) && ht(Mt, J, !vd(Ct, Jt + 1 / R) || yn((Jt - 0.42) / 0.25) * 0.8 > xn(Mt, J) ? xt : T.fill, T.o, hc);
    }
  }), l.fogs.forEach((T) => {
    const R = Math.floor(T.y / x), B = Math.max(R, Math.floor((T.y + 6 * at) / x) - 1), W = Math.floor(T.x / m), kt = Math.floor((T.x + T.w) / m);
    for (let xt = R; xt <= B; xt++) for (let J = W; J <= kt; J++) {
      const Mt = (J - W) / Math.max(1, kt - W);
      ht(J, xt, T.c, T.a * (Mt < 0.25 ? Mt / 0.25 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1), 0);
    }
  });
  const nt = Math.max(2, Math.round(9 / x));
  l.drops.forEach((T) => {
    const R = T.x / m, B = Math.floor(T.y / x);
    for (let W = 0; W < nt; W++) ht(Math.floor(R - 0.208 * W * x / m), B + W, D.rain, T.o, mc);
  });
  const qt = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((T) => {
    const R = Math.floor(T.x / m), B = Math.floor(T.y / x);
    ht(R, B, D.snow, T.o, wn);
    for (let W = 1; W <= qt; W++)
      ht(R - W, B, D.snow, T.o, wn), ht(R + W, B, D.snow, T.o, wn), ht(R, B - W, D.snow, T.o, wn), ht(R, B + W, D.snow, T.o, wn);
  }), l.bolts.forEach((T) => {
    if (m <= 3.5)
      for (let R = Math.floor(T.y / x); R <= (T.y + 24) / x; R++) for (let B = Math.floor(T.x / m); B <= (T.x + 11) / m; B++)
        Mp(Au, (B + 0.5) * m - T.x, (R + 0.5) * x - T.y) && ht(B, R, D.sun, 1, qs);
    else {
      const R = Math.round(T.x / m), B = Math.round(T.y / x);
      Eu.forEach((W, kt) => W.split("").forEach((xt, J) => {
        xt === "#" && ht(R + J, B + kt, D.sun, 1, qs);
      }));
    }
  }), { col: K, ids: j };
}
function Du(n, l) {
  const i = l.px, c = Math.max(6, Math.round(l.width / i)), m = Math.max(6, Math.round(l.height / i)), x = l.width / c, k = l.height / m, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, S = (G) => {
    const rt = Tp(G, l);
    return _u(rt, Lp(rt, { clock: E, ambient: l.ambient, seed: l.seed }), c, m, x, k, E, l.ambient);
  }, D = S(n), z = l.reveal == null ? 1 : yn(l.reveal);
  let I = D.col, q = D.ids;
  if (z < 1) {
    const G = l.prev ? S(l.prev) : null, rt = z * (c + 12);
    I = new Array(c * m), q = new Uint8Array(c * m);
    for (let at = 0; at < c * m; at++) {
      const K = at % c, j = at / c | 0;
      (l.reduce ? z : yn((rt - K) / 12)) > xn(K, j) ? (I[at] = D.col[at], q[at] = D.ids[at]) : G ? (I[at] = G.col[at], q[at] = G.ids[at]) : (I[at] = null, q[at] = 255);
    }
  }
  return Cp(I, q, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Bu(n, l, i) {
  const c = i.width, m = i.height, x = i.reveal == null ? 1 : yn(i.reveal), k = (q, G) => {
    const rt = Tp(G, i);
    Ru(q, rt, Lp(rt, i));
  };
  if (n.clearRect(0, 0, c, m), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const E = n.canvas, S = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (S.width !== E.width || S.height !== E.height) && (S.width = E.width, S.height = E.height);
  const D = S.getContext("2d");
  D.setTransform(n.getTransform()), D.clearRect(0, 0, c, m), k(D, l);
  const z = x * (c + 64) - 64, I = D.createLinearGradient(z, 0, z + 64, 0);
  I.addColorStop(0, "rgba(0,0,0,1)"), I.addColorStop(1, "rgba(0,0,0,0)"), D.globalCompositeOperation = "destination-in", D.fillStyle = I, D.fillRect(0, 0, c, m), D.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function Ru(n, l, i) {
  const { W: c, H: m, S: x, C: k, cw: E, yb: S, glowAt: D, soft: z, tw: I, sy: q } = l, G = (et, ct) => {
    const nt = fd(et);
    return "rgba(" + nt[0] + "," + nt[1] + "," + nt[2] + "," + Math.max(0, Math.min(1, ct)).toFixed(3) + ")";
  }, rt = (et, ct) => {
    const nt = n.createLinearGradient(0, 0, c, 0);
    nt.addColorStop(0, et[0]);
    for (let qt = 0; qt < et.length - 1; qt++) {
      const T = (qt + ct) * E, R = (T - I / 2) / c, B = (T + I / 2) / c;
      R > 0 && R < 1 && nt.addColorStop(R, et[qt]), B > 0 && B < 1 && nt.addColorStop(B, et[qt + 1]);
    }
    return nt.addColorStop(1, et[et.length - 1]), nt;
  }, at = Math.max(24, Math.ceil(c / 4)), K = (et, ct) => {
    n.beginPath();
    for (let nt = 0; nt <= at; nt++) {
      const qt = c * nt / at, T = et == null ? 0 : S(qt) + et;
      nt ? n.lineTo(qt, T) : n.moveTo(qt, T);
    }
    for (let nt = at; nt >= 0; nt--) {
      const qt = c * nt / at;
      n.lineTo(qt, S(qt) + ct);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = rt(x.filter((et) => !et.night).map((et) => et.sky), 0.75), n.fillRect(0, 0, c, m);
  const j = n.createLinearGradient(0, 0, c, 0);
  for (let et = 0; et <= 64; et++) {
    const ct = D(c * et / 64);
    j.addColorStop(et / 64, G(ct.c, Math.min(1, ct.a)));
  }
  n.fillStyle = j;
  for (let et = 0; et < 8; et++)
    n.globalAlpha = 1 - et / 8, K(et * 2 * q, (et + 1) * 2 * q);
  n.fillStyle = rt(x.filter((et) => et.night).map((et) => et.sky), 1.25);
  const ft = Math.max(0.5, z), ht = 6;
  n.globalAlpha = 1, K(null, -ft);
  for (let et = 0; et < ht; et++)
    n.globalAlpha = 1 - (et + 0.5) / ht, K(-ft + 2 * ft * et / ht, -ft + 2 * ft * (et + 1) / ht);
  n.globalAlpha = 1;
  const wt = new Path2D(Tu), ot = new Path2D(Cu), tt = new Path2D(Su), _ = new Path2D(Lu);
  n.fillStyle = k.star, i.stars.forEach((et) => {
    n.globalAlpha = et.o, et.big ? (n.save(), n.translate(et.x, et.y), n.scale(et.size, et.size), n.fill(wt), n.restore()) : (n.beginPath(), n.arc(et.x, et.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Z = Qe(k.sun, "#ffffff", 0.55);
  i.suns.forEach((et) => {
    const ct = n.createRadialGradient(et.x, et.y, 0, et.x, et.y, et.halo);
    ct.addColorStop(0, G(Z, 0.42)), ct.addColorStop(0.7, G(Z, 0)), n.fillStyle = ct, n.beginPath(), n.arc(et.x, et.y, et.halo, 0, Math.PI * 2), n.fill();
    const nt = n.createLinearGradient(0, et.y - et.rad, 0, et.y + et.rad);
    nt.addColorStop(0.6, k.sun), nt.addColorStop(1, k.sunEdge), n.fillStyle = nt, n.beginPath(), n.arc(et.x, et.y, et.rad, 0, Math.PI * 2), n.fill();
  });
  const St = Qe(k.moon, "#ffffff", 0.6);
  i.moons.forEach((et) => {
    n.save(), n.translate(et.x - et.d / 2, et.y - et.d / 2), n.scale(et.d / 46, et.d / 46);
    const ct = n.createLinearGradient(0, 6, 0, 40);
    ct.addColorStop(0, St), ct.addColorStop(1, k.moon), n.fillStyle = ct, n.fill(ot), n.restore();
  }), i.clouds.forEach((et) => {
    n.save(), n.globalAlpha = et.o, n.translate(et.x, et.y), n.scale(et.w / 46, et.h / 30.66), n.translate(-4, -9.67), n.fillStyle = et.fill, n.fill(tt), n.restore();
  }), i.fogs.forEach((et) => {
    const ct = n.createLinearGradient(et.x, 0, et.x + et.w, 0);
    ct.addColorStop(0, G(et.c, 0)), ct.addColorStop(0.25, G(et.c, et.a)), ct.addColorStop(0.75, G(et.c, et.a)), ct.addColorStop(1, G(et.c, 0)), n.fillStyle = ct, n.fillRect(et.x, et.y, et.w, 6 * q);
  }), n.fillStyle = k.rain, i.drops.forEach((et) => {
    n.save(), n.globalAlpha = et.o, n.translate(et.x, et.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((et) => {
    n.globalAlpha = et.o, n.beginPath(), n.arc(et.x, et.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((et) => {
    n.save(), n.globalAlpha = et.o, n.translate(et.x, et.y), n.fill(_), n.restore();
  }), n.restore();
}
function Pu(n, l) {
  var F, $, st, dt, X, ut, U;
  const i = (e) => n.getElementById(e), c = i("workoutView"), m = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function E() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const S = i("createFlow"), D = i("createMovementsSlot"), z = i("createTimingSlot"), I = i("createFinishSlot"), q = i("movementStepSummary"), G = i("timingStepSummary"), rt = i("finishStepSummary"), at = i("continueToTiming"), K = i("continueToFinish"), j = i("finishMoveButton");
  let ft = !1, ht = [];
  function wt(e) {
    !e || ht.some((o) => o.node === e) || ht.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ot(e, o) {
    e && (wt(e), o.appendChild(e));
  }
  function tt() {
    [...ht].reverse().forEach(({ node: e, parent: o, next: s }) => {
      o && (s && s.parentNode === o ? o.insertBefore(e, s) : o.appendChild(e));
    }), ht = [];
  }
  function _(e) {
    n.querySelectorAll(".createStep").forEach((o) => {
      o.classList.toggle("active", o.dataset.createStep === e);
    }), e === "timing" && (ft = !0), Z();
  }
  function Z() {
    var lt, bt;
    if (!Yt) return;
    te[Xt];
    const e = la.filter((vt) => !vt.hidden), o = e.filter((vt) => vt.kind !== "rest").length, s = e.filter((vt) => vt.kind === "rest").length;
    q.textContent = o ? o + " movement" + (o === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const h = o > 0, v = n.querySelector('[data-open-step="timing"]'), A = n.querySelector('[data-open-step="finish"]');
    v.disabled = !h, at.disabled = !h, G.textContent = h ? Un(R.value) + " · " + ca(B.value) + " movement · " + ca(W.value) + " rest" : "Add a movement first", A.disabled = !(h && ft);
    const L = ((m == null ? void 0 : m.value) || "").trim(), O = [];
    (lt = i("includeWarmupPreset")) != null && lt.checked && O.push("warm-up"), (bt = i("includeCooldownPreset")) != null && bt.checked && O.push("cooldown"), rt.textContent = L ? L + (O.length ? " · " + O.join(" + ") : "") : O.length ? O.join(" + ") : "Name and optional extras";
  }
  function St() {
    var Nt, $t, Ht;
    S.hidden = !1, ft = !1;
    const e = n.querySelector(".editNameRow"), o = i("createMoveOptions"), s = n.querySelector(".timeTiles"), h = i("routineSummaryModal"), v = n.querySelector(".tempoRevealRow"), A = i("tempoExperiment"), L = (Nt = i("warmupList")) == null ? void 0 : Nt.closest("section"), O = i("movementCreatorLaunch"), lt = i("movementCreator"), bt = ($t = i("strengthList")) == null ? void 0 : $t.closest("section"), vt = (Ht = i("cooldownList")) == null ? void 0 : Ht.closest("section");
    [o == null ? void 0 : o.querySelector(".createExtras"), L, O, lt, bt, vt].forEach((Rt) => Rt && ot(Rt, D)), [o, s, h, v, A].forEach((Rt) => ot(Rt, z)), ot(e, I), _("movements"), Z();
  }
  function et() {
    tt(), S.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || _(e.dataset.openStep);
  })), at.addEventListener("click", () => {
    at.disabled || _("timing");
  }), K.addEventListener("click", () => _("finish")), j.addEventListener("click", () => i("saveWorkoutEdit").click());
  const ct = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, nt = i("homeNav"), qt = i("settingsNav");
  function T(e) {
    Object.entries(ct).forEach(([o, s]) => s.classList.toggle("active", o === e)), nt.classList.toggle("active", e === "home"), qt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Ft, 400), e === "settings" && (requestAnimationFrame(() => or(n.querySelector(".tab.active"), !1)), Or());
  }
  const R = i("totalTime"), B = i("workTime"), W = i("restTime"), kt = i("totalOut"), xt = i("workOut"), J = i("restOut"), Mt = i("totalFill"), Ct = i("workFill"), Jt = i("restFill"), ie = i("roundsInput"), na = i("roundsFill"), ye = i("roundsOut"), Li = i("totalLabel"), Ca = i("routineSummaryModal"), Pt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ce = Pt.map((e) => ({ ...e })), la = [
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
  let je = Qt.map((e) => ({ ...e }));
  const Kr = {
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
  }, me = kr(l.data), te = me.profiles;
  let Xt = te[me.selected] ? me.selected : me.order.find((e) => te[e]) || "kettlebell";
  function kr(e) {
    const o = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = o.profiles && Object.keys(o.profiles).length ? o.profiles : JSON.parse(JSON.stringify(Kr)), h = (Array.isArray(o.order) ? o.order : Object.keys(s)).filter((v) => s[v]);
    return Object.keys(s).forEach((v) => {
      h.includes(v) || h.push(v);
    }), {
      v: 1,
      profiles: s,
      order: h,
      selected: o.selected || h[0],
      history: Array.isArray(o.history) ? o.history : [],
      checkins: (Array.isArray(o.checkins) ? o.checkins : Ai(o.energy)).map(Mr),
      settings: { ...o.settings || {} }
    };
  }
  function Ai(e) {
    if (!Array.isArray(e)) return [];
    const o = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((h) => {
      const v = new Date(h.at);
      if (isNaN(v)) return;
      const A = v.getFullYear() + "-" + String(v.getMonth() + 1).padStart(2, "0") + "-" + String(v.getDate()).padStart(2, "0"), L = v.getHours() < 14 ? "morning" : "evening";
      if (s.some((lt) => lt.date === A && lt.slot === L)) return;
      const O = o.indexOf(h.value) + 1;
      O > 0 && s.push({ date: A, slot: L, mood: null, energy: O, at: h.at });
    }), s;
  }
  function Mr(e) {
    if (e.scale === 100) return e;
    const o = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: o(e.mood), energy: o(e.energy), scale: 100 };
  }
  function en() {
    Yt || (me.selected = Xt, me.order = me.order.filter((e) => te[e] && e !== Bt), l.save(me));
  }
  function pe() {
    return me.settings;
  }
  function da(e) {
    const o = te[e];
    if (!o) return;
    Xt = e;
    const s = i("workoutNameInput");
    if (s && (s.value = o.name), R.value = o.total, B.value = o.work, W.value = o.rest, ie.value = o.rounds || 1, o.customSequence) {
      const h = (o.sequence || []).map((A) => ({ ...A })), v = (A) => h.filter((L) => L.presetRole === A).map(({ presetRole: L, ...O }) => O);
      ce = (o.warmup || v("warmup")).map((A) => ({ ...A })), je = (o.cooldown || v("cooldown")).map((A) => ({ ...A })), la = h.filter((A) => !A.presetRole), Di(o.preset || "movement", !1);
    } else
      R.min = 3, R.max = 40, R.step = 1, B.min = 20, B.max = 60, B.step = 5, W.min = 5, W.max = 30, W.step = 5, ce = (o.warmup || Pt).map((h) => ({ ...h })), je = (o.cooldown || Qt).map((h) => ({ ...h })), la = o.strength.map((h) => Array.isArray(h) ? (([v, A, L, O = !1]) => ({ id: v, name: A, group: L, kind: "work", hidden: !!O }))(h) : { ...h });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((h) => h.classList.toggle("active", h.dataset.workout === e)), Se();
  }
  function ha(e, o, s) {
    const h = e.getBoundingClientRect(), v = h.width / 2, A = h.height / 2, L = o - v, O = s - A;
    let lt = 1 / 0, bt = 1 / 0;
    L !== 0 && (lt = v / Math.abs(L)), O !== 0 && (bt = A / Math.abs(O));
    const vt = Math.min(Math.max(1 / Math.min(lt, bt), 0), 1);
    let mt = Math.atan2(O, L) * (180 / Math.PI) + 90;
    return mt < 0 && (mt += 360), { edge: vt, angle: mt };
  }
  function Ei(e, o, s = !1) {
    const h = e.getBoundingClientRect(), v = o.clientX - h.left, A = o.clientY - h.top, { edge: L, angle: O } = ha(e, v, A), lt = s ? 100 : L * 100;
    e.style.setProperty("--edge-proximity", lt.toFixed(3)), e.style.setProperty("--cursor-angle", O.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || lt >= 30);
  }
  function Sr(e) {
    e.addEventListener("pointermove", (s) => Ei(e, s, !1)), e.addEventListener("pointerenter", (s) => Ei(e, s, !1)), e.addEventListener("pointerdown", (s) => Ei(e, s, !0));
    const o = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", o), e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o);
  }
  Sr(i("addWorkoutPanel"));
  let Yt = !1, Bt = null;
  function Gt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
  }
  function Te(e) {
    return e.summary ? e.summary : e.customSequence ? Un(e.total) + " · custom move" : Un(e.total) + " · " + ca(e.work) + " / " + ca(e.rest) + " · warm-up + cooldown";
  }
  function Ta(e, o) {
    var A;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const h = o.activityCount ?? (((A = o.sequence) == null ? void 0 : A.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Gt(o.name) + '</div><div class="sub">' + Gt(Te(o)) + '</div><span class="sourceTag">' + Gt(o.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (h ? h + " activities" + ((o.rounds || 1) > 1 ? " × " + o.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Gt(o.name) + "</div></div>";
    const v = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, v), Sr(s), s.addEventListener("click", (L) => {
      L.target.closest("button") || da(e);
    }), s.addEventListener("keydown", (L) => {
      (L.key === "Enter" || L.key === " ") && !L.target.closest("button") && (L.preventDefault(), da(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (L) => {
      L.stopPropagation(), da(e), Ll(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (L) => {
      L.stopPropagation(), da(e), Hl();
    }), s;
  }
  function Vn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), me.order.forEach((e) => {
      te[e] && Ta(e, te[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Xt));
  }
  Vn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Yt = !0, Bt = "custom-" + Date.now(), te[Bt] = {
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
    }, da(Bt), Ll(!0);
  });
  let Vt = [], ee = 0, $e = 0, Ao = 1, an = !1, ta = null, Gn = null, Ge = !1, Eo = me.settings.upcomingCount ?? "all", _o = "movement";
  function Do(e, o, s) {
    return (Number(e) - o) / (s - o) * 100;
  }
  function ca(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 3600 && o % 3600 === 0 ? o / 3600 + " hr" : o >= 60 && o % 60 === 0 ? o / 60 + " min" : o >= 60 ? Math.round(o / 60) + " min" : Math.round(o) + " sec";
  }
  function Un(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 60 && o % 60 === 0 ? o / 60 + " hr" : o >= 60 ? Math.floor(o / 60) + " hr " + o % 60 + " min" : o + " min";
  }
  function _i() {
    Mt.style.width = Do(R.value, Number(R.min), Number(R.max)) + "%", Ct.style.width = Do(B.value, Number(B.min), Number(B.max)) + "%", Jt.style.width = Do(W.value, Number(W.min), Number(W.max)) + "%", xt.textContent = ca(B.value), J.textContent = ca(W.value);
    const e = Number(ie.value) || 1;
    na.style.width = Do(e, 1, 10) + "%", Li.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Cr(e) {
    return e.filter((o) => !o.hidden);
  }
  function nn(e) {
    const o = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(o / 3600), h = Math.floor(o % 3600 / 60), v = o % 60;
    return (s ? s + ":" + String(h).padStart(2, "0") : h) + ":" + String(v).padStart(2, "0");
  }
  function Ws(e) {
    let o;
    try {
      o = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = o.hostname.replace(/^(www|m|music)\./, "");
    let h = null;
    if (s === "youtu.be") h = o.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (o.pathname === "/watch") h = o.searchParams.get("v");
      else {
        const O = o.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        O && (h = O[2]);
      }
    if (!h || !/^[\w-]{11}$/.test(h)) return null;
    const v = (O) => {
      if (!O) return 0;
      if (/^\d+$/.test(O)) return Number(O);
      const lt = O.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return lt ? (Number(lt[1]) || 0) * 3600 + (Number(lt[2]) || 0) * 60 + (Number(lt[3]) || 0) : 0;
    }, A = v(o.searchParams.get("t") || o.searchParams.get("start")), L = v(o.searchParams.get("end"));
    return { id: h, start: A, end: L > A ? L : null };
  }
  function Yn(e, o) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || o || 300);
    const s = Number(e.start) || 0, h = Number(e.end) || Number(e.videoDuration) || 0;
    return h > s ? Math.round(h - s) : Number(e.duration) || 300;
  }
  function Sn(e, o) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(o === "hour" ? s * 3600 : o === "min" ? s * 60 : s);
  }
  function Di(e, o = !0) {
    _o = e, n.querySelectorAll(".createPresetBtn").forEach((h) => h.classList.toggle("active", h.dataset.movePreset === e));
    const s = te[Xt];
    s && (s.preset = e), e === "work" ? (R.min = 30, R.max = 480, R.step = 30, B.min = 300, B.max = 7200, B.step = 300, W.min = 60, W.max = 1800, W.step = 60, o && (R.value = 60, B.value = 1500, W.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (R.min = 3, R.max = 40, R.step = 1, B.min = 20, B.max = 60, B.step = 5, W.min = 5, W.max = 30, W.step = 5, o && (R.value = 20, B.value = 45, W.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), _i();
  }
  function Pn(e, o) {
    const s = _o === "work";
    return e.map((h, v) => ({ ...h, id: o + "-" + v + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(B.value) }));
  }
  function Tr() {
    const e = te[Xt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !ce.length && (ce = Pn(Pt, "warm")), e.includeCooldown && !je.length && (je = Pn(Qt, "cool")), Se());
  }
  function Nn() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const o = Math.max(1, Vt.length - 1), s = Eo;
    e.innerHTML = "";
    for (let A = 1; A <= o; A++) {
      const L = document.createElement("option");
      L.value = String(A), L.textContent = String(A), e.appendChild(L);
    }
    const h = document.createElement("option");
    h.value = "all", h.textContent = "All", e.appendChild(h);
    const v = s === "all" ? "all" : String(Math.min(Number(s) || 1, o));
    e.value = v, Eo = v === "all" ? "all" : Number(v);
  }
  function Se() {
    Number(R.value) * 60;
    const e = Number(B.value), o = Number(W.value), s = te[Xt], h = !!(s != null && s.customSequence), v = (h ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Cr(ce), A = Cr(la), L = h && !s.includeCooldown ? [] : Cr(je);
    if (s && (s.total = Number(R.value), s.work = e, s.rest = o, s.rounds = Number(ie.value) || 1, s.customSequence ? (s.sequence = la.map((Dt) => ({ ...Dt })), s.warmup = ce.map((Dt) => ({ ...Dt })), s.cooldown = je.map((Dt) => ({ ...Dt }))) : (s.strength = la.map((Dt) => ({ ...Dt })), s.warmup = ce.map((Dt) => ({ ...Dt })), s.cooldown = je.map((Dt) => ({ ...Dt })))), s != null && s.customSequence) {
      const Dt = [...v.map((se) => ({ ...se, section: "warmup" })), ...A, ...L.map((se) => ({ ...se, section: "cooldown" }))].map((se) => {
        if (se.kind === "video") return { ...se, duration: Yn(se, e), rest: 0 };
        if (se.kind === "rest") {
          const ka = se.useGlobalTiming === !0 ? o : Number(se.duration) || o;
          return { ...se, duration: ka, rest: 0 };
        }
        const ya = se.useGlobalTiming === !1 && Number(se.duration) || e;
        return { ...se, duration: ya, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Vt = [], Dt.forEach((se, ya) => {
        Vt.push(se);
        const ka = Dt[ya + 1];
        se.kind !== "rest" && ka && ka.kind !== "rest" && Vt.push({
          id: "auto-rest-" + ya,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Vt = Dt;
    } else
      Vt = [...v.map((Dt) => ({ ...Dt, section: "warmup" })), ...A, ...L.map((Dt) => ({ ...Dt, section: "cooldown" }))].map((Dt) => Dt.kind === "video" ? { ...Dt, duration: Yn(Dt, e), rest: 0 } : Dt.kind === "rest" ? { ...Dt, duration: Dt.useGlobalTiming === !0 ? o : Number(Dt.duration) || o, rest: 0 } : { ...Dt, duration: Dt.useGlobalTiming === !1 && Number(Dt.duration) || e, rest: o }), Vt.forEach((Dt, se) => {
        var ya;
        ((ya = Vt[se + 1]) == null ? void 0 : ya.kind) === "rest" && (Dt.rest = 0);
      }), Vt.length && (Vt[Vt.length - 1].rest = 0);
    const O = Math.max(1, Math.min(10, Number(ie.value) || 1)), lt = Vt, bt = (Dt) => O <= 1 ? null : Dt.section === "warmup" || Dt.presetRole === "warmup" ? "first" : Dt.section === "cooldown" || Dt.presetRole === "cooldown" ? "last" : Dt.kind === "video" && (Dt.videoRounds === "first" || Dt.videoRounds === "last") ? Dt.videoRounds : null, vt = (Dt) => !!bt(Dt), mt = lt.filter((Dt) => !vt(Dt)), Nt = lt.filter(vt), $t = mt.length, Ht = mt.reduce((Dt, se) => Dt + se.duration + se.rest, 0), Rt = Nt.reduce((Dt, se) => Dt + se.duration + se.rest, 0), _t = [
      Nt.some((Dt) => Dt.section === "warmup" || Dt.presetRole === "warmup") && "warm-up",
      Nt.some((Dt) => Dt.section === "cooldown" || Dt.presetRole === "cooldown") && "cooldown",
      Nt.some((Dt) => Dt.kind === "video" && !Dt.section && !Dt.presetRole) && "video"
    ].filter(Boolean), de = _t.length > 1 ? _t.slice(0, -1).join(", ") + " & " + _t[_t.length - 1] : _t[0] || "";
    Vt = [];
    const fe = (Dt, se) => {
      const ya = bt(Dt);
      return !ya || (ya === "first" ? se === 1 : se === O);
    };
    for (let Dt = 1; Dt <= O; Dt++)
      if (lt.filter((se) => fe(se, Dt)).forEach((se, ya) => Vt.push({ ...se, id: se.id + (O > 1 ? "-r" + Dt : ""), round: Dt, roundIndex: ya })), Dt < O && $t)
        if (s != null && s.customSequence)
          Vt.push({ id: "round-break-" + Dt, name: "Rest", group: "Round " + (Dt + 1) + " next", kind: "rest", hidden: !1, duration: o, rest: 0, round: Dt, roundIndex: $t, roundBreak: !0 });
        else {
          const se = Vt[Vt.length - 1];
          se.rest = o, se.roundBreakAfter = !0;
        }
    _i();
    const Wt = Vt.reduce((Dt, se) => Dt + se.duration + se.rest, 0), he = Math.round(Ht / 60), Ae = Math.round(Wt / 60), oe = O > 1 ? Un(he) + " × " + O + " rounds" + (Rt ? " + " + ca(Rt) + " " + de : "") + " (" + Un(Ae) + ")" : Un(Ae), ae = [v.length ? "warm-up" : "", L.length ? "cooldown" : ""].filter(Boolean), fa = s != null && s.customSequence ? oe + " · " + $t + " items" + (ae.length && !(O > 1 && Rt) ? " · " + ae.join(" + ") : "") : oe + " · " + ca(e) + " / " + ca(o) + (ae.length && !(O > 1 && Rt) ? " · " + ae.join(" + ") : "");
    kt.textContent = ca(Ht);
    const Pa = Vt.filter((Dt) => !Dt.roundBreak).length, ze = O > 1 ? Pa + " activities · " + O + " rounds" : $t + " activities";
    ye.textContent = O > 1 ? O + " rounds · " + Un(Ae) + " total" : "1 round", i("roundsCount").textContent = O, n.querySelectorAll("[data-rounds-step]").forEach((Dt) => {
      Dt.disabled = Number(Dt.dataset.roundsStep) < 0 ? O <= 1 : O >= 10;
    }), s && (s.summary = fa, s.activityCount = $t);
    const mr = n.querySelector(".workoutPanel.active .sub");
    mr && (mr.textContent = fa), Ca.textContent = fa, co(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Dt) => Dt.textContent = ze), _i(), Xe(), Wi(), Po(), Nn(), Yt && Z(), ct.workout.classList.contains("active") && !ta && cn();
  }
  const Bo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', We = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', $o = {
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
  }, La = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + ($o[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = La(e.dataset.icon);
  });
  let ea = null, Aa = null;
  function $r(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Xr(e = !1) {
    const o = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    o && (o.focus({ preventScroll: !0 }), e && o.select());
  }
  function Lr(e, o, s = {}) {
    const h = e.kind === "rest", v = e.kind === "video", A = v ? e.useVideoLength !== !1 : h ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, L = Number(h ? W.value : B.value), O = $r(v ? e.useVideoLength === !1 ? e.duration : Yn({ ...e, useVideoLength: !0 }) : A ? L : e.duration || L), lt = v && (Number(e.videoDuration) > 0 || Number(e.end) > 0), bt = v ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Gt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Wt, he]) => '<option value="' + Wt + '"' + ((e.videoRounds || "every") === Wt ? " selected" : "") + ">" + he + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Gt(e.name) + '" placeholder="' + (h ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Gt(e.group) + '" placeholder="' + (h ? "Rest" : "e.g. Glutes + legs") + '"></label>', vt = v ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (lt ? " · " + nn(Yn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + ca(L), mt = document.createElement("div");
    mt.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), mt.dataset.index = o, mt.dataset.id = e.id;
    const Nt = s.isNew ?? (Aa == null ? void 0 : Aa.item) === e, $t = s.sheet ? '<div class="moveEditActions sheetActions">' + (Nt ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Gt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Nt ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    mt.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (v ? " videoFields" : "") + '">' + bt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (A ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Gt(vt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + O.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Wt) => '<option value="' + Wt + '"' + (Wt === O.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Wt] + "</option>").join("") + "</select></div></div>" + $t + "</div>";
    const Ht = (Wt) => mt.querySelector("[data-f=" + Wt + "]"), Rt = () => {
      const Wt = Ht("global").checked;
      Ht("dur").disabled = Wt, Ht("unit").disabled = Wt, mt.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Wt);
    };
    Ht("global").addEventListener("change", Rt), Rt();
    const _t = () => {
      var Wt;
      if (s.sheet) {
        (Wt = s.onCancel) == null || Wt.call(s);
        return;
      }
      Nt && Cn(), ea = null, Se();
    }, de = () => {
      var Ae;
      if (v) {
        fe();
        return;
      }
      const Wt = Ht("name").value.trim();
      if (!Wt) {
        Ht("name").focus();
        return;
      }
      e.name = Wt, e.group = Ht("group").value.trim() || (h ? "Rest" : "Movement");
      const he = Ht("global").checked;
      if (e.useGlobalTiming = he, he || (e.duration = Math.max(h ? 5 : 1, Sn(Ht("dur").value, Ht("unit").value))), s.sheet) {
        (Ae = s.onSaved) == null || Ae.call(s);
        return;
      }
      Nt && (Aa = null), ea = null, Se(), ue(Nt ? h ? "Rest added" : "Movement added" : "Movement updated");
    }, fe = () => {
      var ae;
      const Wt = Ht("url").value.trim(), he = Ws(Wt);
      if (!he) {
        Ht("urlError").hidden = !1, Ht("url").classList.add("invalid"), Ht("url").focus();
        return;
      }
      const Ae = he.id !== e.videoId;
      e.url = Wt, e.videoId = he.id, e.start = he.start, e.end = he.end, Ae && (e.videoDuration = null, e.videoError = null);
      const oe = Ht("name").value.trim();
      e.autoName = !oe, e.name = oe || (Ae ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ht("rounds").value, e.useVideoLength = Ht("global").checked, e.useVideoLength || (e.duration = Math.max(5, Sn(Ht("dur").value, Ht("unit").value))), s.sheet ? (ae = s.onSaved) == null || ae.call(s) : (Nt && (Aa = null), ea = null, Se(), ue(Nt ? "Video added" : "Video updated")), (Ae || !e.videoDuration || e.autoName && !e.videoTitle) && jl(e);
    };
    if (v && Ht("url").addEventListener("input", () => {
      Ht("urlError").hidden = !0, Ht("url").classList.remove("invalid");
    }), mt.querySelector("[data-a=cancel]").addEventListener("click", _t), mt.querySelector("[data-a=save]").addEventListener("click", de), s.sheet && !Nt) {
      mt.querySelector("[data-a=hide]").addEventListener("click", () => {
        var he;
        return (he = s.onHide) == null ? void 0 : he.call(s);
      });
      const Wt = mt.querySelector("[data-a=remove]");
      ar(Wt, Wt.querySelector(".removeFill"), 1200, () => {
        var he;
        return (he = s.onRemove) == null ? void 0 : he.call(s);
      });
    }
    return mt.addEventListener("keydown", (Wt) => {
      Wt.key === "Escape" && (Wt.preventDefault(), Wt.stopPropagation(), _t()), Wt.key === "Enter" && Wt.target.matches("input") && (Wt.preventDefault(), de());
    }), mt;
  }
  function In(e, o) {
    const s = i(o);
    s.innerHTML = "", e.forEach((h, v) => {
      if (h === ea && !Ga()) {
        s.appendChild(Lr(h, v));
        return;
      }
      const A = document.createElement("div");
      A.className = "moveRow" + (h.hidden ? " hidden" : "") + (h.kind === "rest" ? " restItem" : "") + (h.kind === "video" ? " videoItem" : "") + (ol(h) ? " noMeta" : ""), A.dataset.index = v, A.dataset.id = h.id;
      const L = h.kind === "rest" ? h.useGlobalTiming === !0 ? "Global timing" : ca(h.duration) : h.useGlobalTiming === !1 ? ca(h.duration) : "Global timing", O = h.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", lt = h.kind === "video" ? h.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (h.useVideoLength === !1 ? "stops after " + ca(h.duration) : Number(h.videoDuration) > 0 || Number(h.end) > 0 ? nn(Yn(h)) : "plays to the end") + (h.videoRounds === "first" ? " · first round only" : h.videoRounds === "last" ? " · last round only" : "") : h.group + " · " + L, bt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Gt(h.name) + '. Drag, or use the up and down arrow keys">' + Bo + "</button>", vt = '<div class="moveText"><div class="moveItemName">' + Gt(h.name) + O + '</div><div class="moveMeta">' + Gt(lt) + "</div></div>", mt = (Ht) => Ht.addEventListener("keydown", (Rt) => {
        var fe, Wt;
        if (Rt.key !== "ArrowUp" && Rt.key !== "ArrowDown") return;
        Rt.preventDefault();
        const _t = e.indexOf(h), de = _t + (Rt.key === "ArrowUp" ? -1 : 1);
        de < 0 || de >= e.length || (e.splice(_t, 1), e.splice(de, 0, h), Se(), (Wt = (fe = i(o).children[de]) == null ? void 0 : fe.querySelector(".dragHandle")) == null || Wt.focus());
      });
      if (Ga()) {
        A.classList.add("phoneRow"), A.tabIndex = 0, A.setAttribute("role", "button"), A.setAttribute("aria-label", "Edit " + (h.name || "step")), A.innerHTML = bt + vt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ht = A.querySelector(".dragHandle");
        Ht.addEventListener("pointerdown", (Rt) => Jr(Rt, A, s, e)), mt(Ht), A.addEventListener("click", (Rt) => {
          Rt.target.closest(".dragHandle") || Ni(h, e);
        }), A.addEventListener("keydown", (Rt) => {
          Rt.key === "Enter" && Rt.target === A && (Rt.preventDefault(), Ni(h, e));
        }), s.appendChild(A);
        return;
      }
      A.innerHTML = bt + vt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Gt(h.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (h.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Gt(h.name) + '"><span class="removeFill"></span><span class="removeLabel">' + We + "</span></button></div>", A.querySelector(".editBtn").addEventListener("click", () => {
        Cn(), ea = h, Se(), Xr();
      }), A.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        h.hidden = !h.hidden, Se();
      });
      const Nt = A.querySelector(".removeBtn");
      ar(Nt, Nt.querySelector(".removeFill"), 1200, () => {
        const Ht = e.indexOf(h);
        Ht < 0 || (e.splice(Ht, 1), Se(), ue("Removed " + h.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ht, e.length), 0, h), Se();
        } }));
      });
      const $t = A.querySelector(".dragHandle");
      $t.addEventListener("pointerdown", (Ht) => Jr(Ht, A, s, e)), mt($t), s.appendChild(A);
    });
  }
  const Da = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Bi = (e) => {
    var o;
    try {
      (o = navigator.vibrate) == null || o.call(navigator, e);
    } catch {
    }
  };
  function Jr(e, o, s, h) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const v = e.currentTarget, A = e.pointerId, L = !Da();
    try {
      v.setPointerCapture(A);
    } catch {
    }
    const O = o.closest(".exerciseScroller") || ro(o), lt = s.style.position;
    s.style.position = "relative";
    const bt = [...s.children].filter((le) => le.classList.contains("moveRow")), vt = bt.indexOf(o), mt = parseFloat(getComputedStyle(s).rowGap) || 8, Nt = o.offsetHeight, $t = Nt + mt, Ht = bt.map((le) => le.offsetTop), Rt = bt.map((le) => le.offsetHeight), _t = () => s.getBoundingClientRect().top, de = s.getBoundingClientRect().width, fe = e.clientY - (_t() + Ht[vt]), Wt = e.clientX;
    let he = e.clientY, Ae = e.clientX, oe = _t() + Ht[vt], ae = 0, fa = 0, Pa = 0, ze = 1, mr = 0, Dt = vt, se = !1, ya = 0, ka = !1, td = !1, Rs = Ht[vt];
    s.classList.add("reordering"), o.classList.add("dragging"), o.style.transition = "none", Bi(8);
    const ed = () => {
      const le = he - fe + Nt / 2 - _t();
      let we = 0;
      return bt.forEach((qe, gn) => {
        gn !== vt && le > Ht[gn] + Rt[gn] / 2 && we++;
      }), we;
    }, ad = () => {
      bt.forEach((le, we) => {
        if (we === vt) return;
        const qe = vt < Dt && we > vt && we <= Dt ? -$t : vt > Dt && we >= Dt && we < vt ? $t : 0;
        le.style.transform = qe ? "translateY(" + qe + "px)" : "";
      });
    }, xl = () => {
      const le = s.getBoundingClientRect(), we = Math.abs(Ae - Wt) > Math.max(80, de * 0.3) || Ae < le.left - 24 || Ae > le.right + 24;
      we !== se && (se = we, o.classList.toggle("willReturn", we), Bi(we ? 10 : 4));
      const qe = se ? vt : ed();
      qe !== Dt && (Dt = qe, ad(), se || Bi(4));
    }, gr = () => {
      if (Dt === vt) return Ht[vt];
      const le = bt.filter((qe, gn) => gn !== vt);
      let we = Ht[0];
      for (let qe = 0; qe < Dt; qe++) we += le[qe].offsetHeight + mt;
      return we;
    }, Ps = () => {
      const le = L ? Math.min(Math.abs(ae) / 40, 1) : 0, we = L && !ka ? Math.max(-3, Math.min(3, Pa * 0.6)) : 0;
      o.style.transform = "translate(" + fa.toFixed(2) + "px," + (oe - (_t() + Ht[vt])).toFixed(2) + "px) rotate(" + we.toFixed(2) + "deg) scale(" + (ze * (1 - 0.04 * le)).toFixed(4) + "," + (ze * (1 + 0.06 * le)).toFixed(4) + ")";
    }, ne = () => {
      ya = requestAnimationFrame(ne);
      const le = Ae - Wt, we = ka ? _t() + Rs : he - fe, qe = ka ? 0 : se ? le * 0.9 : Math.max(-22, Math.min(22, le * 0.22)), gn = ka ? 1 : se ? 0.97 : 1.035;
      if (!L) {
        oe = we, fa = ka ? 0 : qe, ze = 1, Ps(), ka && Ze();
        return;
      }
      const lu = ka ? 0.24 : 0.2, du = ka ? 0.62 : 0.68;
      ae = (ae + (we - oe) * lu) * du, oe += ae, Pa = (Pa + (qe - fa) * 0.16) * 0.7, fa += Pa, mr = (mr + (gn - ze) * 0.22) * 0.6, ze += mr, Ps(), ka && Math.abs(ae) < 0.15 && Math.abs(we - oe) < 0.5 && Math.abs(fa) < 0.5 && Math.abs(ze - 1) < 3e-3 && Ze();
    }, Re = setInterval(() => {
      if (!O || ka) return;
      const le = O.getBoundingClientRect(), we = 56, qe = he < le.top + we ? -10 : he > le.bottom - we ? 10 : 0;
      qe && (O.scrollTop += qe, xl());
    }, 30);
    function Ze() {
      if (td) return;
      td = !0, cancelAnimationFrame(ya);
      const le = Dt !== vt, we = o.dataset.id;
      if (s.classList.remove("reordering"), bt.forEach((gn) => {
        gn.style.transition = "none", gn.style.transform = "";
      }), o.classList.remove("dragging", "willReturn"), s.style.position = lt, le) {
        const [gn] = h.splice(vt, 1);
        h.splice(Dt, 0, gn);
      }
      Se();
      const qe = we && s.querySelector('.moveRow[data-id="' + we + '"]');
      qe && L && qe.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), le && ue("Order saved");
    }
    const Ma = (le) => {
      if (le.pointerId === A) {
        if (le.pointerType === "mouse" && le.buttons === 0) {
          zn();
          return;
        }
        he = le.clientY, Ae = le.clientX, xl();
      }
    }, mn = (le) => {
      le.pointerId === A && zn();
    };
    function zn() {
      ka || (window.removeEventListener("pointermove", Ma, !0), window.removeEventListener("pointerup", mn, !0), window.removeEventListener("pointercancel", mn, !0), v.removeEventListener("lostpointercapture", zn), clearInterval(Re), se && Dt !== vt && (Dt = vt, ad()), Rs = gr(), ka = !0, Bi(6), setTimeout(Ze, 800));
    }
    window.addEventListener("pointermove", Ma, !0), window.addEventListener("pointerup", mn, !0), window.addEventListener("pointercancel", mn, !0), v.addEventListener("lostpointercapture", zn), ya = requestAnimationFrame(ne), Ps();
  }
  function Xe() {
    var v, A, L, O;
    const e = te[Xt], o = (v = i("warmupList")) == null ? void 0 : v.closest("section"), s = (A = i("cooldownList")) == null ? void 0 : A.closest("section"), h = (O = (L = i("strengthList")) == null ? void 0 : L.closest("section")) == null ? void 0 : O.querySelector(".sectionTitle");
    e != null && e.customSequence ? (o && (o.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), h && (h.textContent = "Move sequence")) : (o && (o.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), h && (h.textContent = "Kettlebell work")), In(ce, "warmupList"), In(la, "strengthList"), In(je, "cooldownList");
  }
  function Cn() {
    if (!Aa) return;
    const { item: e, arr: o } = Aa;
    Aa = null;
    const s = o.indexOf(e);
    s >= 0 && o.splice(s, 1), ea === e && (ea = null);
  }
  function ge(e) {
    return e.id === "warmupList" ? { arr: ce, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: je, kind: "cooldown", group: "Cooldown" } : { arr: la, kind: "work", group: "" };
  }
  function Xo(e, o) {
    const s = ge(o), h = Date.now().toString(36);
    return e === "video" ? { id: "video-" + h, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + h, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(W.value) } : { id: "movement-" + h, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(B.value) };
  }
  const Jo = "cubic-bezier(.34,1.46,.64,1)";
  function Qo(e, o) {
    if (Da() || !e) {
      o();
      return;
    }
    const s = (A) => {
      var L;
      return ((L = A.dataset) == null ? void 0 : L.id) || A;
    }, h = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], v = new Map(h().map((A) => [s(A), A.getBoundingClientRect().top]));
    o(), h().forEach((A) => {
      const L = v.get(s(A));
      if (L === void 0) return;
      const O = L - A.getBoundingClientRect().top;
      Math.abs(O) < 0.5 || A.animate([{ transform: "translateY(" + O + "px)" }, { transform: "none" }], { duration: 440, easing: Jo });
    });
  }
  function Ro(e, o) {
    if (!e || Da()) return;
    const s = e.offsetHeight, h = Math.max(0, s - (o || 0));
    e.animate([{ clipPath: "inset(0 0 " + h + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Jo });
  }
  function io(e, o, s, h) {
    const { arr: v } = ge(o), A = Xo(e, o);
    v.splice(Math.max(0, Math.min(s, v.length)), 0, A), Aa = { item: A, arr: v }, ea = A, Qo(o.closest(".exerciseScroller,.createStepSlot") || o, () => Se());
    const L = o.querySelector(".moveRow.editing");
    return Ro(L, h), Xr(e === "rest"), L;
  }
  function ro(e) {
    for (let o = e; o && o.nodeType === 1; o = o.parentElement) {
      const s = getComputedStyle(o).overflowY;
      if (/(auto|scroll)/.test(s) && o.scrollHeight > o.clientHeight) return o;
    }
    return null;
  }
  const Qr = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Zn(e, o) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Bo + '</span><span class="addGhostText"><strong>' + Gt(o[0]) + "</strong><small>" + Gt(o[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function so(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ts(e, o, s, h) {
    (ea || Aa) && (Cn(), ea = null, Se());
    const v = e.getBoundingClientRect(), A = Zn(o, Qr[o]);
    A.setAttribute("aria-hidden", "true"), A.style.width = v.width + "px", A.style.height = v.height + "px", A.style.transform = "translate(" + v.left + "px," + v.top + "px)", e.classList.add("lifting");
    const L = ro(e);
    return Ri({
      ghost: A,
      origin: v,
      sx: s,
      sy: h,
      scroller: L,
      column: e.closest(".exerciseScroller,.createFlow") || L,
      home: () => e.getBoundingClientRect(),
      onDrop: (O, lt, bt) => {
        so(A), e.classList.remove("lifting"), io(o, O, lt, bt);
      },
      onReturn: () => {
        so(A), e.classList.remove("lifting");
      }
    });
  }
  function Ri({ ghost: e, origin: o, sx: s, sy: h, scroller: v, column: A, home: L, onDrop: O, onReturn: lt, rowLook: bt = !1 }) {
    var Ps;
    const vt = !Da(), mt = ((Ps = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Ps.offsetHeight) || 80, Nt = s - o.left, $t = h - o.top, Ht = 44;
    let Rt = s, _t = h, de = o.left, fe = o.top, Wt = 0, he = 0, Ae = !vt, oe = null, ae = null, fa = -1, Pa = 0, ze = null;
    const mr = () => ["warmupList", "strengthList", "cooldownList"].map((ne) => i(ne)).filter((ne) => ne && ne.getClientRects().length && !ne.closest("[hidden]")), Dt = (ne) => {
      if (ne === oe) return;
      oe = ne, e.classList.toggle("overList", !!ne || bt);
      const Re = ne ? ne.getBoundingClientRect().width : o.width;
      e.style.width = Re + "px", e.style.height = (ne ? mt : o.height) + "px";
    }, se = (ne) => {
      ne.classList.add("leaving"), ne.style.height = "0px", ne.style.marginTop = "-8px", setTimeout(() => ne.remove(), vt ? 320 : 0);
    }, ya = (ne, Re, Ze) => {
      if (ae && ae.parentNode === ne && fa === Ze || (ae && (se(ae), ae = null, fa = -1), !ne)) return;
      const Ma = document.createElement("div");
      Ma.className = "dropSlot", ne.insertBefore(Ma, Re), ae = Ma, fa = Ze, Ma.getBoundingClientRect(), Ma.style.height = mt + "px", Ma.style.marginTop = "0px";
    }, ka = () => {
      let ne = null, Re = 1 / 0;
      for (const zn of mr()) {
        const le = zn.getBoundingClientRect();
        if (Rt < le.left - 48 || Rt > le.right + 48) continue;
        const we = le.top - 28, qe = le.bottom + 28, gn = _t < we ? we - _t : _t > qe ? _t - qe : 0;
        gn < Re && (Re = gn, ne = zn);
      }
      const Ze = A == null ? void 0 : A.getBoundingClientRect(), mn = Ze && Rt >= Ze.left && Rt <= Ze.right && _t >= Ze.top && _t <= Ze.bottom || Re === 0 ? ne : null;
      if (mn) {
        const zn = [...mn.children].filter((we) => we.classList.contains("moveRow"));
        let le = zn.findIndex((we) => {
          const qe = we.getBoundingClientRect();
          return _t < qe.top + qe.height / 2;
        });
        le < 0 && (le = zn.length), ya(mn, zn[le] || null, le);
      } else ya(null);
      Dt(mn);
    }, td = () => {
      if (ze) return ze.aim();
      if (oe) {
        const ne = oe.getBoundingClientRect();
        let Re = _t - mt / 2;
        return ae && (Re = Re * 0.6 + ae.getBoundingClientRect().top * 0.4), { x: ne.left, y: Re };
      }
      return { x: Rt - Nt, y: _t - $t };
    }, Rs = (ne, Re, Ze, Ma) => {
      e.style.transform = "translate(" + de + "px," + fe + "px) rotate(" + ne + "deg) rotate(" + Re + "rad) scale(" + Ze + "," + Ma + ") rotate(" + -Re + "rad)";
    }, ed = () => {
      if (Pa = requestAnimationFrame(ed), !Ae) {
        const le = Rt - s, we = _t - h, qe = Math.min(Math.hypot(le, we) / Ht, 1);
        de = o.left + le * 0.35, fe = o.top + we * 0.35, Rs(0, Math.atan2(we, le), 1 + 0.155 * qe, 1 - 0.1 * qe);
        return;
      }
      const ne = td();
      if (!vt) {
        de = ne.x, fe = ne.y, Rs(0, 0, 1, 1), ze && (cancelAnimationFrame(Pa), ze.done());
        return;
      }
      const Re = ze ? ze.k : 0.17, Ze = ze ? ze.d : 0.7;
      Wt = (Wt + (ne.x - de) * Re) * Ze, he = (he + (ne.y - fe) * Re) * Ze, de += Wt, fe += he;
      const Ma = Math.hypot(Wt, he), mn = Math.min(Ma / 48, 1), zn = oe || ze ? 0 : Math.max(-5, Math.min(5, Wt * 0.32));
      Rs(zn, Math.atan2(he, Wt), 1 + 0.1 * mn, 1 - 0.063 * mn), ze && Ma < 0.15 && Math.hypot(ne.x - de, ne.y - fe) < 0.6 && (cancelAnimationFrame(Pa), ze.done());
    }, ad = setInterval(() => {
      if (!v || ze) return;
      const ne = v.getBoundingClientRect(), Re = 64, Ze = _t < ne.top + Re ? -(ne.top + Re - _t) / 4 : _t > ne.bottom - Re ? (_t - (ne.bottom - Re)) / 4 : 0;
      Ze && (v.scrollTop += Math.max(-18, Math.min(18, Ze)), ka());
    }, 30);
    Pa = requestAnimationFrame(ed);
    let xl = !1;
    const gr = (ne, Re) => {
      if (xl) return;
      xl = !0, cancelAnimationFrame(Pa);
      const Ze = ae ? ae.offsetHeight : mt;
      !ne && ae && (ae.remove(), ae = null), ne ? O(ne, Re, Ze) : lt();
    };
    return {
      move(ne, Re) {
        Rt = ne, _t = Re, !Ae && Math.hypot(Rt - s, _t - h) > Ht && (Ae = !0, Wt = (Rt - s) * 0.085, he = (_t - h) * 0.085), Ae && ka();
      },
      drop(ne) {
        clearInterval(ad);
        const Re = oe, Ze = fa;
        if (!ne && Re && ae) {
          const Ma = ae;
          ze = { k: 0.24, d: 0.62, aim: () => {
            const mn = Ma.getBoundingClientRect();
            return { x: mn.left, y: mn.top };
          }, done: () => gr(Re, Ze) }, setTimeout(() => gr(Re, Ze), 650), vt || (cancelAnimationFrame(Pa), gr(Re, Ze));
          return;
        }
        ya(null), Dt(null), ze = { k: 0.2, d: 0.66, aim: () => {
          const Ma = L();
          return { x: Ma.left, y: Ma.top };
        }, done: () => gr(null) }, setTimeout(() => gr(null), 650), vt || (cancelAnimationFrame(Pa), gr(null));
      }
    };
  }
  function lo(e, o) {
    let s = !1;
    e.addEventListener("click", (h) => {
      if (s) {
        s = !1, h.preventDefault();
        return;
      }
      if (Ga()) {
        es(o);
        return;
      }
      const v = i("strengthList"), A = io(o, v, ge(v).arr.length, 0);
      A == null || A.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (h) => {
      if (h.button !== void 0 && h.button !== 0) return;
      const v = h.pointerId, A = h.clientX, L = h.clientY;
      let O = null, lt = !1;
      try {
        e.setPointerCapture(v);
      } catch {
      }
      const bt = (_t) => {
        if (_t.pointerId === v) {
          if (_t.pointerType === "mouse" && _t.buttons === 0) {
            Rt(!1);
            return;
          }
          if (!O) {
            if (Math.hypot(_t.clientX - A, _t.clientY - L) < 6) return;
            O = ts(e, o, A, L);
          }
          O.move(_t.clientX, _t.clientY);
        }
      }, vt = (_t) => {
        _t.pointerId === v && Rt(!1);
      }, mt = (_t) => {
        _t.pointerId === v && Rt(!0);
      }, Nt = () => Rt(!1), $t = () => Rt(!0), Ht = (_t) => {
        _t.key === "Escape" && O && (_t.preventDefault(), _t.stopPropagation(), Rt(!0));
      };
      function Rt(_t) {
        if (!lt && (lt = !0, window.removeEventListener("pointermove", bt, !0), window.removeEventListener("pointerup", vt, !0), window.removeEventListener("pointercancel", mt, !0), window.removeEventListener("keydown", Ht, !0), window.removeEventListener("blur", $t), e.removeEventListener("lostpointercapture", Nt), O)) {
          const de = O;
          O = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), de.drop(_t);
        }
      }
      window.addEventListener("pointermove", bt, !0), window.addEventListener("pointerup", vt, !0), window.addEventListener("pointercancel", mt, !0), window.addEventListener("keydown", Ht, !0), window.addEventListener("blur", $t), e.addEventListener("lostpointercapture", Nt);
    });
  }
  const on = (F = window.matchMedia) == null ? void 0 : F.call(window, "(max-width: 620px)");
  function Ga() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Pi = (e) => e.charAt(0).toUpperCase() + e.slice(1), Kn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Hn = null, ke = null;
  function rn(e, o, s, h) {
    pa(), i("sheetTitle").textContent = e;
    const v = i("sheetBody");
    v.innerHTML = "", v.appendChild(o), Hn = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !v.contains(o)) return;
      const A = h ? v.querySelector("input[data-f=url],input[data-f=name]") : v.querySelector("button,input,select");
      A == null || A.focus({ preventScroll: !0 });
    }, Da() ? 0 : 360);
  }
  function pa() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const o = Hn;
    Hn = null, o == null || o(), setTimeout(Ha, 0);
  }
  i("sheetScrim").addEventListener("click", pa), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), pa());
  });
  function Ni(e, o) {
    const s = Lr(e, o.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        pa(), Se(), ue(Pi(Kn(e)) + " updated");
      },
      onCancel: pa,
      onHide() {
        e.hidden = !e.hidden, pa(), Se(), ue((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        pa();
        const h = o.indexOf(e);
        h < 0 || (o.splice(h, 1), Se(), ue("Removed " + e.name, { label: "Undo", run: () => {
          o.splice(Math.min(h, o.length), 0, e), Se();
        } }));
      }
    });
    rn("Edit " + Kn(e), s, null, !1);
  }
  function js() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([o, s, h, v]) => {
      const A = document.createElement("button");
      A.type = "button", A.className = "sheetChoice", A.innerHTML = '<span class="timeIcon" aria-hidden="true">' + La(s) + "</span><span><strong>" + h + "</strong><small>" + v + "</small></span>", A.addEventListener("click", () => es(o)), e.appendChild(A);
    }), rn("Add to the move", e, null, !1);
  }
  function es(e) {
    ke && Fn();
    const o = Xo(e, i("strengthList")), s = Lr(o, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        pa(), Hi(o, e);
      },
      onCancel: pa
    });
    rn("New " + Kn(o), s, null, !0);
  }
  const oa = i("workoutModal").querySelector(".modalStatic"), $n = { parent: oa.parentNode, next: oa.nextSibling };
  function as() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(oa);
    const o = document.createElement("button");
    o.type = "button", o.className = "primary sheetDone", o.textContent = "Done", o.addEventListener("click", pa), e.appendChild(o), rn("Setup", e, () => {
      $n.parent.insertBefore(oa, $n.next), co();
    }, !1);
  }
  function co() {
    var o, s;
    const e = i("setupSummaryName");
    e && (e.textContent = (((o = i("workoutNameInput")) == null ? void 0 : o.value) || "").trim() || ((s = te[Xt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = Ca.textContent);
  }
  i("setupSummary").addEventListener("click", as), i("addFab").addEventListener("click", js);
  function Na() {
    const e = i("strengthList");
    return ro(e) || e.closest(".exerciseScroller");
  }
  function Ii() {
    const e = i("strengthList").getBoundingClientRect(), o = (Na() || i("strengthList")).getBoundingClientRect(), s = (ke == null ? void 0 : ke.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(o.top + 12, Math.min(o.bottom - s - 96, o.top + o.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function Hi(e, o) {
    var O;
    const s = Zn(o, [e.name || Qr[o][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const h = document.createElement("span");
    h.className = "addGhostActions", h.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Gt(e.name) + '">✕</button>', s.appendChild(h), ke = { item: e, type: o, ghost: s };
    const v = ((O = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : O.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = v + "px";
    const A = Ii(), L = Wa.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + A.left + "px," + L + "px)", s.getBoundingClientRect(), Da() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + A.left + "px," + A.top + "px)", h.querySelector("[data-a=end]").addEventListener("click", Fn), h.querySelector("[data-a=discard]").addEventListener("click", Oi), s.addEventListener("pointerdown", Fi);
  }
  function Fi(e) {
    if (!ke || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: o, ghost: s } = ke, h = e.pointerId;
    try {
      s.setPointerCapture(h);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const v = s.getBoundingClientRect(), A = Na(), L = Ri({
      ghost: s,
      origin: { left: v.left, top: v.top, width: v.width, height: v.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: A,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || A,
      rowLook: !0,
      home: Ii,
      onDrop: (Rt, _t, de) => {
        ke = null, so(s), Ia(o, Rt, _t, de);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let O = !1;
    const lt = (Rt) => {
      if (Rt.pointerId === h) {
        if (Rt.pointerType === "mouse" && Rt.buttons === 0) {
          Ht(!1);
          return;
        }
        L.move(Rt.clientX, Rt.clientY);
      }
    }, bt = (Rt) => {
      Rt.pointerId === h && Ht(!1);
    }, vt = (Rt) => {
      Rt.pointerId === h && Ht(!0);
    }, mt = () => Ht(!1), Nt = () => Ht(!0), $t = (Rt) => {
      Rt.key === "Escape" && (Rt.preventDefault(), Ht(!0));
    };
    function Ht(Rt) {
      O || (O = !0, window.removeEventListener("pointermove", lt, !0), window.removeEventListener("pointerup", bt, !0), window.removeEventListener("pointercancel", vt, !0), window.removeEventListener("keydown", $t, !0), window.removeEventListener("blur", Nt), s.removeEventListener("lostpointercapture", mt), L.drop(Rt));
    }
    window.addEventListener("pointermove", lt, !0), window.addEventListener("pointerup", bt, !0), window.addEventListener("pointercancel", vt, !0), window.addEventListener("keydown", $t, !0), window.addEventListener("blur", Nt), s.addEventListener("lostpointercapture", mt);
  }
  function Ia(e, o, s, h) {
    const v = ge(o);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = v.kind, v.group && (!e.group || e.group === "Movement") && (e.group = v.group)), v.arr.splice(Math.max(0, Math.min(s, v.arr.length)), 0, e), Qo(o.closest(".exerciseScroller,.createStepSlot") || o, () => Se()), Ro(o.querySelector('.moveRow[data-id="' + e.id + '"]'), h), ue(Pi(Kn(e)) + " added");
  }
  function Fn() {
    var h;
    if (!ke) return;
    const { item: e, ghost: o } = ke;
    ke = null, so(o);
    const s = i("strengthList");
    Ia(e, s, ge(s).arr.length, 0), (h = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || h.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
  }
  function Oi() {
    if (!ke) return;
    const e = ke.ghost;
    ke = null, so(e), ue("Discarded");
  }
  function ti() {
    ke && (ke.ghost.remove(), ke = null);
  }
  window.addEventListener("resize", () => {
    if (ke != null && ke.ghost.classList.contains("hovering")) {
      const e = Ii();
      ke.ghost.style.width = e.width + "px", ke.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), ($ = on == null ? void 0 : on.addEventListener) == null || $.call(on, "change", () => {
    pa(), ke && !Ga() && Fn(), Xe();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ha() {
    const e = i("workoutModal"), o = window.visualViewport;
    if (!e.classList.contains("open") || !Ga()) {
      qi();
      return;
    }
    const s = o ? o.offsetTop : 0, h = o ? o.offsetLeft : 0, v = o ? o.width : window.innerWidth, A = o ? o.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: v + "px", height: A + "px", top: s + "px", left: h + "px" });
    const L = e.getBoundingClientRect();
    Math.abs(L.top - s) > 0.5 && (e.style.top = 2 * s - L.top + "px"), Math.abs(L.left - h) > 0.5 && (e.style.left = 2 * h - L.left + "px");
  }
  function qi() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (st = window.visualViewport) == null || st.addEventListener("resize", Ha), (dt = window.visualViewport) == null || dt.addEventListener("scroll", Ha), window.addEventListener("resize", Ha), window.addEventListener("scroll", Ha, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ha, 250));
  function Wi() {
    la.length > 0;
    const e = i("addMovementBtn"), o = i("addRestBtn");
    e && (e.innerHTML = Bo + "<span>Add movement</span>"), o && (o.innerHTML = Bo + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = Bo + "<span>Add video</span>");
  }
  function Po() {
    const e = i("useGlobalTiming").checked, o = i("addMovementDuration"), s = i("addMovementUnit");
    o.disabled = e, s.disabled = e, o.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + ca(B.value);
    const h = i("useGlobalRestTiming").checked, v = i("addRestDuration"), A = i("addRestUnit");
    v.disabled = h, A.disabled = h, v.parentElement.style.opacity = h ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + ca(W.value);
  }
  let ei = "movement";
  function ns(e) {
    ei = e;
    const o = i("movementFields"), s = i("restFields");
    o.hidden = e !== "movement", s.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Po();
  }
  function No() {
    te[Xt];
    const e = Yt ? !0 : i("useGlobalTiming").checked, o = e ? Number(B.value) : Sn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = Yt ? !0 : i("useGlobalRestTiming").checked, h = s ? Number(W.value) : Sn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (ei === "rest") {
      const v = i("addRestTitle").value.trim() || "Rest", A = i("addRestGroup").value.trim() || "Rest";
      la.push({
        id: "rest-" + Date.now(),
        name: v,
        group: A,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, h || Number(W.value))
      }), Se(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", ue("Rest added"), Yt && (_("movements"), Z());
    } else {
      const v = i("addMovementInput").value.trim();
      if (!v) return;
      const A = i("addMovementGroup").value.trim() || "Movement";
      la.push({
        id: "movement-" + Date.now(),
        name: v,
        group: A,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, o || Number(B.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Se(), i("movementCreator").hidden = !0, ue("Movement added"), Yt && (_("movements"), Z());
    }
    Wi();
  }
  let Tn = null;
  function ue(e, o) {
    const s = i("toast");
    s.innerHTML = "";
    const h = document.createElement("span");
    if (h.textContent = e, s.appendChild(h), o) {
      const v = document.createElement("button");
      v.type = "button", v.className = "toastAction", v.textContent = o.label, v.addEventListener("click", () => {
        o.run(), s.classList.remove("show", "withAction"), clearTimeout(Tn);
      }), s.appendChild(v);
    }
    s.classList.toggle("withAction", !!o), s.classList.add("show"), clearTimeout(Tn), Tn = setTimeout(() => s.classList.remove("show", "withAction"), o ? 5e3 : 2200);
  }
  const On = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Io = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function ai(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Fa(e, o) {
    return On[ai(o)];
  }
  function Oa(e) {
    return Io[ai(e)];
  }
  function He(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function qn() {
    return { morning: pe().morningTime || "08:00", evening: pe().eveningTime || "19:00" };
  }
  function po(e) {
    const [o, s] = String(e).split(":").map(Number);
    return (o || 0) * 60 + (s || 0);
  }
  function Ar(e) {
    const o = qn();
    return e.getHours() * 60 + e.getMinutes() >= po(o.evening) ? "evening" : "morning";
  }
  function p(e, o) {
    return me.checkins.find((s) => s.date === e && s.slot === o);
  }
  function g(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function y() {
    const e = /* @__PURE__ */ new Date(), o = He(e), s = Ar(e), h = qn(), v = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && v < po(h.morning) || g(p(o, s)) ? null : s;
  }
  const C = i("checkinModal"), N = i("checkinTab"), V = i("checkinBadge"), Y = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function pt(e) {
    const { input: o, fill: s } = Y[e];
    s.style.width = o.value + "%", o.setAttribute("aria-valuetext", Fa(e, o.value));
  }
  Object.keys(Y).forEach((e) => Y[e].input.addEventListener("input", () => pt(e)));
  let Q = null;
  function gt() {
    const e = qn(), o = /* @__PURE__ */ new Date(), s = o.getHours() * 60 + o.getMinutes();
    return s < po(e.morning) ? "Next check-in at " + e.morning : s < po(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function yt() {
    const e = qn(), o = /* @__PURE__ */ new Date(), s = o.getHours() * 60 + o.getMinutes(), h = (v, A) => {
      const [L, O] = v.split(":").map(Number);
      return new Date(o.getFullYear(), o.getMonth(), o.getDate() + (A ? 1 : 0), L, O);
    };
    return s < po(e.morning) ? { date: h(e.morning), time: e.morning } : s < po(e.evening) ? { date: h(e.evening), time: e.evening } : { date: h(e.morning, !0), time: e.morning };
  }
  let Tt = null, jt = null;
  function zt() {
    if (y()) {
      Zt(), Le();
      return;
    }
    const e = yt(), o = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(o / 3600), h = Math.floor(o % 3600 / 60), v = o % 60;
    i("peekCountdown").textContent = s + ":" + String(h).padStart(2, "0") + ":" + String(v).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Et() {
    zt(), N.classList.add("peek"), clearInterval(jt), jt = setInterval(zt, 1e3), clearTimeout(Tt), Tt = setTimeout(Zt, 6e3);
  }
  function Zt() {
    N.classList.remove("peek"), clearInterval(jt), clearTimeout(Tt);
  }
  function Ot() {
    const e = y();
    if (!e) {
      N.classList.contains("peek") ? Zt() : Et();
      return;
    }
    Q = { date: He(/* @__PURE__ */ new Date()), slot: e };
    const s = p(Q.date, e), h = me.checkins.find((v) => g(v));
    Object.keys(Y).forEach((v) => {
      Y[v].input.value = (s == null ? void 0 : s[v]) ?? (h == null ? void 0 : h[v]) ?? 50, pt(v);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Y.mood.input.focus());
  }
  function Lt() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), Q && (Kt = Q.date + "-" + Q.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Kt);
    } catch {
    }
    Q = null, Le();
  }
  function re() {
    if (!Q) return;
    if (g(p(Q.date, Q.slot))) {
      Lt();
      return;
    }
    const { date: e, slot: o } = Q;
    let s = p(e, o);
    s || (s = { date: e, slot: o }, me.checkins.unshift(s), me.checkins = me.checkins.slice(0, 2e3)), s.mood = Number(Y.mood.input.value), s.energy = Number(Y.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), en(), l.fire("checkin", { slot: o, mood: s.mood, energy: s.energy, mood_label: Fa("mood", s.mood), energy_label: Fa("energy", s.energy) }), ue((o === "morning" ? "Morning" : "Evening") + " check-in saved"), Lt(), Fe(), Ue(), mi(), fn();
  }
  let Kt = "";
  try {
    Kt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Le() {
    const e = y();
    V.hidden = !e, N.hidden = !e, e || Zt(), N.classList.toggle("due", !!e), N.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : gt()), N.title = e ? "Check in now" : gt();
  }
  function Ft() {
    Le();
    const e = y();
    !e || C.classList.contains("open") || pe().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !ct.home.classList.contains("active") || Wa.classList.contains("open") || Kt !== He(/* @__PURE__ */ new Date()) + "-" + e && Ot());
  }
  N.addEventListener("click", Ot), i("checkinLater").addEventListener("click", Lt), i("checkinSave").addEventListener("click", re), C.addEventListener("click", (e) => {
    e.target === C && Lt();
  }), C.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Lt());
  }), setInterval(Ft, 3e4);
  function Fe() {
    const e = He(/* @__PURE__ */ new Date()), o = (s) => me.checkins.find((h) => h.date === e && h[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, h]) => {
      const v = o(s);
      i(h).textContent = v ? Fa(s, v[s]) : "—";
    });
  }
  function Ue() {
    const e = i("feelCard");
    if (!e) return;
    const o = /* @__PURE__ */ new Date(), s = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), h = [...Array(7)].map((bt, vt) => {
      const mt = new Date(s.getFullYear(), s.getMonth(), s.getDate() + vt), Nt = He(mt), $t = me.checkins.filter((Rt) => Rt.date === Nt), Ht = (Rt) => {
        const _t = $t.map((de) => de[Rt]).filter((de) => de != null);
        return _t.length ? _t.reduce((de, fe) => de + fe, 0) / _t.length : null;
      };
      return { d: mt, key: Nt, mood: Ht("mood"), energy: Ht("energy"), count: $t.filter(g).length, future: mt > o && Nt !== He(o) };
    }), v = (bt) => {
      const vt = h.map((mt) => mt[bt]).filter((mt) => mt != null);
      return vt.length ? vt.reduce((mt, Nt) => mt + Nt, 0) / vt.length : null;
    }, A = v("mood"), L = v("energy"), O = (bt, vt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + bt + "</span><span>" + (vt == null ? "—" : Gt(Fa("", vt))) + '</span></div><div class="feelTrack"><span style="width:' + (vt == null ? 0 : Math.max(4, vt)) + "%;background:" + (vt == null ? "transparent" : Oa(vt)) + '"></span></div></div>', lt = h.filter((bt) => bt.mood != null && bt.energy != null).sort((bt, vt) => vt.mood + vt.energy - (bt.mood + bt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (A == null ? "No check-ins yet" : Gt(Fa("", (A + L) / 2))) + '</div><div class="weekCopy">' + (A == null ? "Your first check-in will appear here." : "on average this week" + (lt ? " · best day " + Gt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(lt.d)) : "")) + '</div></div></div><div class="feelDays">' + h.map(
      (bt) => '<div class="weekChip feelDay' + (bt.future ? " future" : "") + (bt.key === He(o) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Gt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(bt.d)) + "</strong>" + (bt.count >= 2 ? '<span class="weekTick">' + La("check") + "</span>" : '<span class="feelDots">' + "●".repeat(bt.count) + "</span>") + "</div>" + O("Mood", bt.mood) + O("Energy", bt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Ea = i("upcomingCountSetting");
  Ea.addEventListener("change", () => {
    Eo = Ea.value === "all" ? "all" : Number(Ea.value), di();
  });
  const sn = i("tempoRevealBtn"), ni = i("tempoExperiment"), qa = i("tempoQuad"), Xn = i("tempoDot"), ve = i("tempoEstimate"), Jn = i("tempoReadout");
  let ln = { x: 0.5, y: 0.5 }, Ua = !1, Qn = { total: 20, work: 45, rest: 15 };
  function Ho(e, o, s, h) {
    const v = Math.max(o, Math.min(s, e));
    return Math.round((v - o) / h) * h + o;
  }
  function oi(e, o) {
    const s = (e - 0.5) * 2, h = (o - 0.5) * 2, v = Ho(
      Qn.total + s * 5 + h * 8,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    ), A = Ho(
      Qn.work + s * 10 + h * 8,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    ), L = Ho(
      Qn.rest + s * 6 + h * 6,
      Number(W.min),
      Number(W.max),
      Number(W.step)
    );
    return R.value = v, B.value = A, W.value = L, xt.textContent = A + " sec", J.textContent = L + " sec", _i(), { total: v, work: A, rest: L };
  }
  function ma(e, o) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", h = o < 0.34 ? "Fast" : o > 0.66 ? "Slow" : "Balanced", v = oi(e, o);
    Jn.textContent = s + " + " + h, ve.textContent = v.total + " min", qa.setAttribute("aria-valuetext", s + " and " + h + ", estimated " + v.total + " minutes");
  }
  function zs(e) {
    const o = qa.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - o.left) / o.width)), h = Math.max(0, Math.min(1, (e.clientY - o.top) / o.height));
    ln = { x: s, y: h }, Xn.style.left = s * 100 + "%", Xn.style.top = h * 100 + "%", ma(s, h);
  }
  sn.addEventListener("click", () => {
    const e = ni.hidden;
    ni.hidden = !e, sn.setAttribute("aria-expanded", e ? "true" : "false"), sn.textContent = e ? "Now close this" : "Don’t try this!", e && (Qn = {
      total: Number(R.value),
      work: Number(B.value),
      rest: Number(W.value)
    }, ln = { x: 0.5, y: 0.5 }, Xn.style.left = "50%", Xn.style.top = "50%", ma(ln.x, ln.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.toggle("selected", o === e));
  }));
  const os = i("testingFeedbackForm"), Tl = i("testingFeedbackThanks"), Md = i("testingFeedbackAgain");
  os.addEventListener("submit", (e) => {
    e.preventDefault(), os.hidden = !0, Tl.hidden = !1, ue("Feedback captured for prototype");
  }), Md.addEventListener("click", (e) => {
    e.preventDefault(), os.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.remove("selected")), Tl.hidden = !0, os.hidden = !1;
  }), qa.addEventListener("pointerdown", (e) => {
    var o;
    Ua = !0, zs(e);
    try {
      (o = qa.setPointerCapture) == null || o.call(qa, e.pointerId);
    } catch {
    }
  }), qa.addEventListener("pointermove", (e) => {
    Ua && zs(e);
  }), qa.addEventListener("pointerup", (e) => {
    Ua && (Ua = !1, zs(e), Se());
  }), qa.addEventListener("pointercancel", () => Ua = !1), qa.addEventListener("keydown", (e) => {
    let { x: o, y: s } = ln, h = !0;
    e.key === "ArrowLeft" ? o -= 0.05 : e.key === "ArrowRight" ? o += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : h = !1, h && (e.preventDefault(), o = Math.max(0, Math.min(1, o)), s = Math.max(0, Math.min(1, s)), ln = { x: o, y: s }, Xn.style.left = o * 100 + "%", Xn.style.top = s * 100 + "%", ma(o, s), Se());
  });
  const Wa = i("workoutModal");
  let uo = null;
  function ii(e) {
    return e.map((o) => ({ ...o }));
  }
  function Sd() {
    const e = te[Xt];
    return {
      key: Xt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ii(ce),
      strength: ii(la),
      cooldown: ii(je),
      total: Number(R.value),
      work: Number(B.value),
      rest: Number(W.value),
      rounds: Number(ie.value) || 1
    };
  }
  function Ll(e = !1) {
    Yt = !!e, ea = null, Aa = null, pa(), ti(), uo = Sd(), i("moveEditorTitle").textContent = Yt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Yt, i("warmupRow").hidden = Yt, i("deleteMoveOpen").hidden = Yt;
    const o = i("createMoveOptions");
    o.hidden = !Yt;
    {
      const s = te[Xt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Vs(), Yt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = te[Xt];
      Di((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, ns("movement"), Wi(), Po(), ni.hidden = !0, sn.setAttribute("aria-expanded", "false"), sn.textContent = "Don’t try this!", Wa.classList.toggle("createMode", Yt), Wa.querySelector(".modal").classList.toggle("createMode", Yt), Wa.classList.add("open"), Wa.setAttribute("aria-hidden", "false"), Ha(), Yt && St();
  }
  function ji() {
    const e = te[Xt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Vs() {
    const e = ji(), o = i("warmupSwitch");
    o.classList.toggle("on", e), o.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = te[Xt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, Tr()) : (e.warmupOff = !e.warmupOff, Se()), Vs());
  });
  function Er() {
    pa(), ti(), qi(), Aa = null, ea = null, Wa.classList.contains("createMode") && et(), Wa.classList.remove("createMode"), Wa.querySelector(".modal").classList.remove("createMode"), Wa.classList.remove("open"), Wa.setAttribute("aria-hidden", "true");
  }
  function Gs() {
    if (!uo) return;
    const e = uo;
    e.profile && (te[e.key] = JSON.parse(JSON.stringify(e.profile))), Xt = e.key, ce = ii(e.warmup), la = ii(e.strength), je = ii(e.cooldown), R.value = e.total, B.value = e.work, W.value = e.rest, ie.value = e.rounds || 1;
    const o = te[Xt];
    if (o) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((h) => h.classList.toggle("active", h.dataset.workout === Xt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const h = s.querySelector(".workoutName");
        h && (h.textContent = o.name);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = o.name);
        const A = s.querySelector(".sourceTag");
        A && (A.textContent = o.source);
      }
      m.value = o.name;
    }
    Se();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Yt) {
      const e = Xt;
      delete te[e], Yt = !1, Bt = null, da(me.order.find((o) => te[o]) || Object.keys(te)[0]);
    } else
      Gs();
    Er();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    pa(), ke && Fn();
    const e = te[Xt], o = m.value.trim() || "New move";
    if (e && (e.name = o), Cn(), ea = null, Se(), Yt && e)
      Ta(Xt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === Xt)), Yt = !1, Bt = null, me.order.includes(Xt) || me.order.push(Xt), ue("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const h = s.querySelector(".workoutName");
        h && (h.textContent = o);
        const v = s.querySelector(".panelCollapsedText");
        v && (v.textContent = o);
      }
      ue("Move saved");
    }
    uo = null, Er(), en();
  }), Wa.addEventListener("click", (e) => {
    if (e.target === Wa) {
      if (Yt) {
        const o = Xt;
        delete te[o], Yt = !1, Bt = null, da(me.order.find((s) => te[s]) || Object.keys(te)[0]);
      } else
        Gs();
      Er();
    }
  }), lo(i("addMovementBtn"), "movement"), lo(i("addRestBtn"), "rest"), lo(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Po), i("useGlobalRestTiming").addEventListener("change", Po), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Di(e.dataset.movePreset, !0), Se();
  })), i("includeWarmupPreset").addEventListener("change", Tr), i("includeCooldownPreset").addEventListener("change", Tr), i("includeWarmupPreset").addEventListener("change", Z), i("includeCooldownPreset").addEventListener("change", Z), m.addEventListener("input", Z), m.addEventListener("input", co), i("confirmAddMovement").addEventListener("click", No), i("confirmAddRest").addEventListener("click", No), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && No();
  });
  const zi = i("countdown"), is = i("countNum"), fo = i("countdownPixelCanvas");
  let _r = null, Us = "appear";
  class Al {
    constructor(o, s, h, v, A, L, O) {
      this.width = o.width, this.height = o.height, this.ctx = s, this.x = h, this.y = v, this.color = A, this.speed = (Math.random() * 0.8 + 0.1) * L, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = O, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Vi = [], Ys = 1, rs = 1;
  function Fo() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function El() {
    var bt;
    if (!fo) return;
    const e = Fo(), o = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    Ys = o, rs = s;
    const h = Math.min(window.devicePixelRatio || 1, 2);
    fo.width = Math.floor(o * h), fo.height = Math.floor(s * h), fo.style.width = o + "px", fo.style.height = s + "px";
    const v = fo.getContext("2d");
    v.setTransform(h, 0, 0, h, 0, 0);
    const A = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], L = 12, O = (bt = window.matchMedia) == null ? void 0 : bt.call(window, "(prefers-reduced-motion: reduce)").matches, lt = O ? 0 : 0.055;
    Vi = [];
    for (let vt = 0; vt < o; vt += L)
      for (let mt = 0; mt < s; mt += L) {
        const Nt = vt - o / 2, $t = mt - s / 2, Ht = Math.sqrt(Nt * Nt + $t * $t), Rt = O ? 0 : Math.random() * 75 + Ht * 0.05, _t = new Al({ width: o, height: s }, v, vt, mt, A[Math.floor(Math.random() * A.length)], lt, Rt);
        _t.maxSizeInteger = 4, _t.maxSize = Math.random() * 3.2 + 0.8, _t.sizeStep = 0.35 + Math.random() * 0.45, Vi.push(_t);
      }
  }
  function _l(e) {
    cancelAnimationFrame(_r), Us = e;
    const o = fo == null ? void 0 : fo.getContext("2d");
    if (!o) return;
    function s() {
      o.clearRect(0, 0, Ys, rs);
      let h = !0;
      Vi.forEach((v) => {
        v[Us](), v.isIdle || (h = !1);
      }), Us === "disappear" && h || (_r = requestAnimationFrame(s));
    }
    _r = requestAnimationFrame(s);
  }
  function ss() {
    cancelAnimationFrame(_r), El(), _l("appear"), setTimeout(() => _l("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    zi.classList.contains("active") && ss();
  });
  const Gi = i("pixelTrailCanvas"), Ui = Gi.getContext("2d");
  let Ln = !0, _e = 0.7, Yi = 600, Dr = [], Zi = null, ga = { x: 0, y: 0, ready: !1 };
  function Dl() {
    const e = c.getBoundingClientRect(), o = Fo(), s = Math.min(window.devicePixelRatio || 1, 2), h = Math.max(1, e.width / o), v = Math.max(1, e.height / o);
    Gi.width = Math.max(1, Math.floor(h * s)), Gi.height = Math.max(1, Math.floor(v * s)), Gi.style.width = h + "px", Gi.style.height = v + "px", Ui.setTransform(s, 0, 0, s, 0, 0);
  }
  function Cd(e, o) {
    if (!Ln) return;
    const s = performance.now();
    ga.ready || (ga = { x: e, y: o, ready: !0 });
    const h = 7;
    for (let v = 1; v <= h; v++) {
      const A = v / h;
      Dr.push({
        x: ga.x + (e - ga.x) * A,
        y: ga.y + (o - ga.y) * A,
        born: s - (h - v) * 10
      });
    }
    ga = { x: e, y: o, ready: !0 };
  }
  function ls(e) {
    if (Zi = null, !x) return;
    if (!ct.workout.classList.contains("active")) {
      Zi = requestAnimationFrame(ls);
      return;
    }
    const o = c.getBoundingClientRect(), s = Fo();
    Ui.clearRect(0, 0, o.width / s, o.height / s), Ln && (Dr = Dr.filter((v) => e - v.born < Yi), Ui.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Dr.forEach((v) => {
      const A = (e - v.born) / Yi, L = (1 - A) * _e, O = Math.round(v.x / 14) * 14, lt = Math.round(v.y / 14) * 14;
      Ui.globalAlpha = Math.max(0, L);
      const bt = 2 + 5 * (1 - A) * _e;
      Ui.fillRect(O - bt / 2, lt - bt / 2, bt, bt);
    }), Ui.globalAlpha = 1), Zi = requestAnimationFrame(ls);
  }
  c.addEventListener("pointermove", (e) => {
    const o = c.getBoundingClientRect(), s = Fo();
    Cd((e.clientX - o.left) / s, (e.clientY - o.top) / s);
  }), c.addEventListener("pointerleave", () => ga.ready = !1), new ResizeObserver(Dl).observe(c), Dl(), Zi = requestAnimationFrame(ls);
  const ho = i("movementRippleCanvas"), ri = ho.getContext("2d");
  let si = !0, Ki = null, Bl = performance.now();
  function $i() {
    const e = ho.parentElement.getBoundingClientRect(), o = Fo(), s = Math.max(1, e.width / o), h = Math.max(1, e.height / o), v = Math.min(window.devicePixelRatio || 1, 2);
    ho.width = Math.max(1, Math.floor(s * v)), ho.height = Math.max(1, Math.floor(h * v)), ho.style.width = s + "px", ho.style.height = h + "px", ri.setTransform(v, 0, 0, v, 0, 0);
  }
  function Zs() {
    var e;
    return Ge || ((e = Vt[ee]) == null ? void 0 : e.kind) === "rest";
  }
  function Td() {
    const e = Vt[ee];
    return Zs() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function ds(e) {
    if (Ki = null, !x) return;
    if (!ct.workout.classList.contains("active")) {
      Ki = requestAnimationFrame(ds);
      return;
    }
    const o = ho.parentElement.getBoundingClientRect(), s = Fo(), h = Math.max(1, o.width / s), v = Math.max(1, o.height / s);
    if (ri.clearRect(0, 0, h, v), si) {
      const A = Td(), L = (e - Bl) % A / A, O = 15, lt = Math.max(8, Math.round(O * v / Math.max(1, h))), bt = h / (O + 1), vt = v / (lt + 1), mt = h * 0.5, Nt = v * 0.52, $t = Math.hypot(mt, Nt), Rt = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let _t = 1; _t <= lt; _t++)
        for (let de = 1; de <= O; de++) {
          const fe = de * bt, Wt = _t * vt, he = Math.hypot(fe - mt, Wt - Nt) / $t, Ae = Zs(), oe = Ae ? Math.exp(-Math.pow((he - (L * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ae = Math.exp(-Math.pow((he - L * 1.25) * 7, 2)), fa = Ae ? oe : ae, Pa = Ae ? 0.5 + 0.5 * Math.sin(L * Math.PI * 2 - he * 3) ** 2 : 0.35 + 0.65 * Math.sin(L * Math.PI * 2 - he * 5) ** 2, ze = Ae ? 1.4 + fa * 4.2 * Pa : 1.2 + fa * 5 * Pa;
          ri.beginPath(), ri.arc(fe, Wt, ze, 0, Math.PI * 2), ri.fillStyle = `rgba(${Rt},${Ae ? 0.08 + fa * 0.48 : 0.05 + fa * 0.55})`, ri.fill();
        }
    }
    Ki = requestAnimationFrame(ds);
  }
  new ResizeObserver($i).observe(ho.parentElement), $i(), Ki = requestAnimationFrame(ds);
  const Ba = i("exerciseTitle"), mo = i("exerciseMeta"), Ks = i("stepLabel"), ja = i("digits"), Ce = i("fill"), ia = i("progress"), Br = i("pause"), li = i("nextName"), cs = i("nextMeta"), Oo = i("nextIcon"), go = i("skipNextSession");
  let ua = null;
  function be(e) {
    for (let o = Math.max(0, e); o < Vt.length; o++)
      if (!Vt[o].sessionHidden) return o;
    return -1;
  }
  function ps() {
    const e = Vt[ee];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ge) {
      const h = be(ee + 1), v = h >= 0 ? Vt[h] : null;
      return v ? { name: v.name, meta: fs(v), icon: us(v) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const o = be(ee + 1), s = o >= 0 ? Vt[o] : null;
    return s ? { name: s.name, meta: fs(s), icon: us(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Xi() {
    if (!Vt[ee]) return Vt.length;
    const o = be(ee + 1);
    return o < 0 ? Vt.length : o + 1;
  }
  function us(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function fs(e) {
    return e.kind === "video" ? "YouTube · " + nn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Rr() {
    return Vt.length && Vt[Vt.length - 1].round || 1;
  }
  function Rl(e) {
    const o = Vt[e];
    if (!o) return "";
    const s = Rr();
    if (s <= 1) return "Step " + (e + 1) + " of " + Vt.length;
    if (o.roundBreak) return "Round " + o.round + " of " + s + " · Rest";
    const h = Vt.filter((v) => v.round === o.round && !v.roundBreak).length;
    return "Round " + o.round + " of " + s + " · Step " + (o.roundIndex + 1) + " of " + h;
  }
  function hs() {
    return ia.querySelector('[data-step="' + ee + '"]');
  }
  function Ld() {
    Vt[ee] && Number(ia.dataset.round) !== (Vt[ee].round || 1) && cn(), [...ia.children].forEach((e) => {
      const o = Number(e.dataset.step);
      e.classList.toggle("done", o < ee), e.classList.toggle("active", o === ee), e.classList.toggle("rewindable", o <= ee), e.disabled = o > ee, o === ee && e.style.setProperty("--segment-progress", "0%");
    }), Vt[ee] && (Ks.textContent = Rl(ee), jo());
  }
  function Pl(e) {
    const o = Vt.indexOf(e);
    o < 0 || o <= ee || (e.sessionHidden = !e.sessionHidden, ra(), ue((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function di() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const o = Xi(), s = Vt.slice(o);
    (Eo === "all" ? s : s.slice(0, Math.max(1, Number(Eo) || 1))).forEach((v) => {
      const A = document.createElement("section");
      A.className = "upcomingCard" + (v.sessionHidden ? " sessionHidden" : "") + (ol(v) ? " noMeta" : ""), A.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + La(us(v)) + '</div><div><div class="upcomingName">' + Gt(v.name) + '</div><div class="upcomingMeta">' + Gt(fs(v)) + (Rr() > 1 ? " · round " + v.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (v.sessionHidden ? "Include this session" : "Skip this session") + "</button>", A.querySelector(".skipSessionBtn").addEventListener("click", () => Pl(v)), e.appendChild(A);
    });
  }
  function ra() {
    var o;
    const e = ps();
    li.textContent = e.name, cs.textContent = e.meta, Oo.innerHTML = La(e.icon);
    {
      const s = Ge ? Vt[be(ee + 1)] : ((o = Vt[ee]) == null ? void 0 : o.rest) > 0 ? { kind: "rest" } : Vt[be(ee + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && ol(s)));
    }
    if (ua = null, Ge) {
      const s = be(ee + 1);
      s >= 0 && (ua = Vt[s]);
    } else {
      const s = Vt[ee];
      if (s && s.rest > 0)
        ua = null;
      else {
        const h = be(ee + 1);
        h >= 0 && (ua = Vt[h]);
      }
    }
    go && (go.hidden = !ua, go.textContent = ua != null && ua.sessionHidden ? "Include this session" : "Skip this session"), di();
  }
  go.addEventListener("click", () => {
    ua && (ua.sessionHidden = !ua.sessionHidden, ue((ua.sessionHidden ? "Hidden " : "Included ") + ua.name + " for this session"), ra());
  });
  let dn = null, ms = null;
  function Pr(e, o = {}) {
    const s = te[Xt];
    l.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: Xt, ...o });
  }
  function Nl() {
    const e = te[Xt];
    dn = { key: Xt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ms), ms = setInterval(() => {
      dn && !an && dn.active++;
    }, 1e3), Pr("started", { steps: Vt.length });
  }
  function gs(e) {
    if (clearInterval(ms), !dn) return;
    const o = dn;
    dn = null, Pr(e ? "completed" : "ended", { seconds: o.active }), !(o.active < 30) && (me.history.unshift({ id: "h-" + o.startedAt, move_id: o.key, name: o.name, start: new Date(o.startedAt).toISOString(), seconds: o.active, completed: e }), me.history = me.history.slice(0, 1e3), en(), mi(), fn());
  }
  let Ya = null, Nr = null, An = !1;
  function En() {
    return pe().sounds !== !1;
  }
  function Il() {
    if (En())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Ya = Ya || new (window.AudioContext || window.webkitAudioContext)(), Ya.state === "suspended" && Ya.resume();
      } catch {
        Ya = null;
      }
  }
  function qo(e, o, s, { to: h = e, vol: v = 0.25, type: A = "sine" } = {}) {
    const L = Ya.currentTime + o, O = Ya.createOscillator(), lt = Ya.createGain();
    O.type = A, O.frequency.setValueAtTime(e, L), h !== e && O.frequency.exponentialRampToValueAtTime(h, L + s), lt.gain.setValueAtTime(1e-4, L), lt.gain.exponentialRampToValueAtTime(v, L + 0.01), lt.gain.exponentialRampToValueAtTime(1e-4, L + s), O.connect(lt).connect(Ya.destination), O.start(L), O.stop(L + s + 0.02);
  }
  const $s = {
    tick: () => qo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      qo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), qo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => qo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      qo(523, 0, 0.16, { type: "triangle" }), qo(659, 0.16, 0.16, { type: "triangle" }), qo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function _n(e) {
    if (!(!En() || !Ya))
      try {
        Ya.state === "suspended" && Ya.resume(), $s[e]();
      } catch {
      }
  }
  function Ir() {
    $e >= 1 && $e <= 3 && $e !== Nr && (Nr = $e, _n("tick"));
  }
  function Hl() {
    Il(), T("workout"), Js();
    const e = be(0);
    e >= 0 && Vt[e].kind === "video" && Wl(Vt[e]);
  }
  function Xs() {
    va(), gs(!1), clearInterval(ta), clearInterval(Gn), Ge = !1, vo(!1), i("app").classList.remove("resting"), zi.classList.remove("active"), T("home");
  }
  function Js() {
    zi.classList.add("active");
    let e = 5;
    is.textContent = e, _n("tick"), requestAnimationFrame(ss), clearInterval(Gn), Gn = setInterval(() => {
      e--, e > 0 ? (is.textContent = e, _n("tick"), ss()) : (clearInterval(Gn), is.textContent = "GO", _n("move"), An = !0, ss(), setTimeout(() => {
        zi.classList.remove("active"), cancelAnimationFrame(_r), Za();
      }, 650));
    }, 1e3);
  }
  function cn() {
    var o;
    ia.innerHTML = "";
    const e = ((o = Vt[Math.max(0, ee)] || Vt[0]) == null ? void 0 : o.round) || 1;
    ia.dataset.round = e, Vt.forEach((s, h) => {
      if ((s.round || 1) !== e) return;
      const v = document.createElement("button");
      v.dataset.step = h, v.type = "button", v.className = "progressSegment", v.setAttribute("aria-label", "Go to " + s.name), v.addEventListener("click", () => {
        h <= ee && Ad(h);
      }), ia.appendChild(v);
    });
  }
  function vo(e) {
    e = !!e;
    const o = an !== e;
    if (an = e, Br.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), _a && Pe)
      try {
        e ? Pe.pauseVideo() : Pe.playVideo();
      } catch {
      }
    o && dn && Pr(e ? "paused" : "resumed");
  }
  function Ad(e) {
    e < 0 || e >= Vt.length || e > ee || (clearInterval(ta), Ge = !1, i("app").classList.remove("resting"), ee = e, vo(!1), Wn(), ta = setInterval(zo, 1e3));
  }
  function Za() {
    if (ee = be(0), vo(!1), cn(), ee < 0) {
      Ba.textContent = "No activities", mo.textContent = "Open Edit and enable or add a movement", mo.hidden = !1;
      return;
    }
    Nl(), Wn(), clearInterval(ta), ta = setInterval(zo, 1e3);
  }
  const Hr = i("videoStage"), to = i("videoSound"), Ji = 0, ci = 1, Qs = 2;
  let Fl = 0, pi = null, bo = null, Pe = null, wo = null, Qi = 0, vs = !1, _a = null, tr = null;
  function Ol() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : pi || (pi = new Promise((o, s) => {
      const h = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          h == null || h();
        } catch {
        }
      };
      const v = setInterval(() => {
        var L;
        (L = window.YT) != null && L.Player && (clearInterval(v), clearTimeout(A), o(window.YT));
      }, 100), A = setTimeout(() => {
        clearInterval(v), pi = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const L = document.createElement("script");
        L.src = "https://www.youtube.com/iframe_api", L.async = !0, L.onerror = () => {
          clearInterval(v), clearTimeout(A), pi = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(L);
      }
    }), pi);
  }
  function ql() {
    return bo || (bo = Ol().then((e) => new Promise((o) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), Pe = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => o(Pe), onStateChange: (h) => eo(h.data), onError: (h) => xo(h.data) }
      });
    })), bo.catch(() => {
      bo = null;
    }), bo);
  }
  function Wl(e) {
    !(e != null && e.videoId) || e.videoError || ql().then((o) => {
      _a || wo === e.videoId || (wo = e.videoId, Qi = Number(e.start) || 0, vs = !1, o.mute(), o.loadVideoById({ videoId: e.videoId, startSeconds: Qi }));
    }).catch(() => {
    });
  }
  function Ne() {
    const e = be(ee + 1);
    e >= 0 && Vt[e].kind === "video" && Wl(Vt[e]);
  }
  function eo(e) {
    if (!_a) {
      e === ci && !vs && (vs = !0, Pe.pauseVideo(), Pe.seekTo(Qi, !0));
      return;
    }
    Hr.classList.toggle("playing", e === ci), Vt[ee] === _a && performance.now() > Fl && (e === ci && an ? vo(!1) : e === Qs && !an && vo(!0)), e === ci && el(_a.videoId, Pe.getDuration()) && en(), e === Ji && pn();
  }
  function xo(e) {
    const o = _a;
    if (!o) {
      wo = null;
      return;
    }
    e === 101 || e === 150 ? (Ed(o.videoId), ue("That video can’t play outside YouTube, so it was skipped")) : ue("The video couldn’t play, so it was skipped"), pn();
  }
  function yo(e) {
    if (i("app").classList.add("videoStep"), to.hidden = !0, _a = e, clearTimeout(tr), !e.videoId) {
      ue("This video step has no link yet, so it was skipped"), setTimeout(() => pn(), 0);
      return;
    }
    ql().then((o) => {
      if (_a !== e) return;
      Fl = performance.now() + 1500;
      const s = Number(e.start) || 0;
      wo !== e.videoId ? (wo = e.videoId, Qi = s, o.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (o.seekTo(s, !0), o.playVideo()), o.unMute(), an && o.pauseVideo(), tr = setTimeout(() => {
        _a !== e || an || (o.getPlayerState() !== ci ? (o.mute(), o.playVideo(), to.hidden = !1) : o.isMuted() && (to.hidden = !1));
      }, 1600);
    }).catch(() => {
      _a === e && (ue("YouTube didn’t load, so the video was skipped"), pn());
    });
  }
  function er() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), o = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, h = (o == null ? void 0 : o.offsetHeight) || 42, v = window.innerHeight - s - 16 - h - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(v)) + "px");
  }
  window.addEventListener("resize", er);
  function va() {
    clearTimeout(tr);
    const e = _a;
    if (_a = null, i("app").classList.remove("videoStep"), Hr.classList.remove("playing"), to.hidden = !0, e && Pe) {
      try {
        Pe.pauseVideo();
      } catch {
      }
      wo = null;
    }
  }
  function pn() {
    const e = _a;
    !e || Vt[ee] !== e || (va(), clearInterval(ta), ui(), ta = setInterval(zo, 1e3));
  }
  to.addEventListener("click", () => {
    Pe && (Pe.unMute(), Pe.playVideo()), to.hidden = !0;
  });
  function tl(e) {
    var h;
    const o = Number(e.start) || 0;
    if (e.useVideoLength === !1) return o + (Number(e.duration) || 300);
    const s = Pe && _a === e && Number((h = Pe.getDuration) == null ? void 0 : h.call(Pe)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || o + (Number(e.duration) || 300);
  }
  function Wo(e, o) {
    const s = te[Xt];
    [ce, la, je, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((h) => (Array.isArray(h) ? h : []).forEach((v) => {
      v && v.kind === "video" && v.videoId === e && o(v);
    }));
  }
  function el(e, o) {
    o = Math.round(Number(o) || 0);
    let s = !1;
    return e && o > 0 && Wo(e, (h) => {
      h.videoDuration !== o && (h.videoDuration = o, s = !0);
    }), s;
  }
  function Ed(e) {
    Wo(e, (o) => {
      o.videoError = "embed";
    }), en();
  }
  function jl(e) {
    const o = e.videoId;
    if (!o) return;
    const s = () => {
      Wa.classList.contains("open") ? ea || Se() : (Se(), en());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + o)).then((h) => h.ok ? h.json() : Promise.reject(h.status)).then((h) => {
      e.videoId === o && (e.videoTitle = h.title || "", e.autoName && h.title && (e.name = h.title), s());
    }).catch((h) => {
      e.videoId === o && h === 401 && (e.videoError = "embed", s());
    }), ba(o).then((h) => {
      el(o, h) && s();
    }).catch((h) => {
      h === "embed" && e.videoId === o && (e.videoError = "embed", s());
    });
  }
  function ba(e) {
    return Ol().then((o) => new Promise((s, h) => {
      const v = document.createElement("div");
      v.className = "videoProbe", v.setAttribute("aria-hidden", "true");
      const A = document.createElement("div");
      v.appendChild(A), i("app").appendChild(v);
      let L = null, O = !1;
      const lt = (mt, Nt) => {
        O || (O = !0, clearTimeout(bt), setTimeout(() => {
          try {
            L == null || L.destroy();
          } catch {
          }
          v.remove();
        }, 0), Nt ? h(Nt) : s(mt));
      }, bt = setTimeout(() => lt(0), 2e4), vt = () => {
        var Nt;
        const mt = Number((Nt = L == null ? void 0 : L.getDuration) == null ? void 0 : Nt.call(L)) || 0;
        return mt > 0 && lt(mt), mt > 0;
      };
      L = new o.Player(A, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            vt() || (L.mute(), L.playVideo());
          },
          onStateChange: () => vt(),
          onError: (mt) => lt(0, mt.data === 101 || mt.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Wn() {
    Ge = !1;
    const e = Vt[ee];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? yo(e) : va(), $e = e.duration, Ao = e.duration, Nr = null, An ? An = !1 : _n(e.kind === "rest" ? "rest" : "move"), Ba.textContent = e.name, mo.textContent = e.group, mo.hidden = !0, Ks.textContent = Rl(ee), dn && Pr("step", { name: e.name, group: e.group, kind: e.kind, step: ee + 1, of: Vt.length, round: e.round || 1, rounds: Rr(), duration: e.duration }), ra(), Ld(), Ne(), e.kind === "video" && setTimeout(er, 0);
  }
  function jo() {
    var v;
    const e = ((v = Vt[ee]) == null ? void 0 : v.kind) === "video" && !Ge, o = e && $e >= 60;
    ja.textContent = o ? nn($e) : $e, ja.classList.toggle("long", o), e && (i("videoClock").textContent = nn($e) + " left");
    const s = $e / Ao * 100;
    Ce.style.width = s + "%";
    const h = hs();
    if (h && !Ge) {
      const A = 100 - s;
      h.style.setProperty("--segment-progress", A + "%");
    }
  }
  function zo() {
    var o, s;
    if (an) return;
    const e = Vt[ee];
    if ((e == null ? void 0 : e.kind) === "video" && !Ge && _a === e) {
      const h = Number((o = Pe == null ? void 0 : Pe.getCurrentTime) == null ? void 0 : o.call(Pe)) || 0, v = Number(e.start) || 0, A = tl(e);
      Ao = Math.max(1, A - v), (h > v || ((s = Pe == null ? void 0 : Pe.getPlayerState) == null ? void 0 : s.call(Pe)) === ci) && ($e = Math.max(0, Math.ceil(A - h))), jo(), Ir(), h > v && h >= A - 0.25 && pn();
      return;
    }
    $e--, jo(), Ir(), $e <= 0 && (e.rest > 0 ? zl(e.rest) : ui());
  }
  function zl(e) {
    var s;
    Ge = !0, i("app").classList.add("resting");
    const o = hs();
    o && o.style.setProperty("--segment-progress", "100%"), clearInterval(ta), $e = e, Ao = e, Nr = null, _n("rest"), dn && Pr("rest", { duration: e }), Ba.textContent = "Rest", mo.textContent = (s = Vt[ee]) != null && s.roundBreakAfter ? "Round " + (Vt[ee].round + 1) + " next" : "Recovery", ra(), jo(), ta = setInterval(() => {
      an || ($e--, jo(), Ir(), $e <= 0 && (clearInterval(ta), ui(), ta = setInterval(zo, 1e3)));
    }, 1e3);
  }
  function ui() {
    Ge = !1;
    const e = be(ee + 1);
    if (e >= 0)
      ee = e, Wn();
    else {
      clearInterval(ta), va(), vo(!1), i("app").classList.remove("resting"), Ba.textContent = "Complete", mo.textContent = "Move finished", mo.hidden = !1, ja.textContent = "✓";
      {
        const o = Rr();
        Ks.textContent = o > 1 ? o + " rounds done" : Vt.filter((s) => !s.roundBreak).length + " steps done";
      }
      gs(!0), _n("done");
      {
        const o = Ut(7).reduce((s, h) => s + h.minutes, 0);
        mo.textContent = "Move finished · " + o + " min in the last 7 days";
      }
      Ce.style.width = "100%", ra();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Vl(), vo(!1);
  });
  function Vl() {
    clearInterval(ta);
    const e = Vt[ee];
    if (Ge) {
      Ge = !1, i("app").classList.remove("resting");
      const s = be(ee + 1);
      s >= 0 ? (ee = s, Wn(), ta = setInterval(zo, 1e3)) : ui();
      return;
    }
    if (e && e.rest > 0) {
      zl(e.rest);
      return;
    }
    const o = be(ee + 1);
    o >= 0 ? (ee = o, Wn(), ta = setInterval(zo, 1e3)) : ui();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(ta), vo(!1), Ge) {
      const e = Vt[ee];
      $e = e.rest, Ao = e.rest, Nr = null, _n("rest"), Ba.textContent = "Rest", mo.textContent = "Recovery", i("app").classList.add("resting"), ra(), jo();
    } else
      Wn();
    ta = setInterval(Ge ? () => {
      an || ($e--, jo(), Ir(), $e <= 0 && (clearInterval(ta), ui(), ta = setInterval(zo, 1e3)));
    } : zo, 1e3);
  });
  function ar(e, o, s, h) {
    let v = 0, A = null, L = !1;
    function O() {
      A && cancelAnimationFrame(A), A = null, v = 0, L = !1, o.style.width = "0%", e.classList.remove("holding");
    }
    function lt(mt) {
      if (!L) return;
      v || (v = mt);
      const Nt = Math.min(1, (mt - v) / s);
      if (o.style.width = Nt * 100 + "%", Nt >= 1) {
        L = !1, A && cancelAnimationFrame(A), A = null, o.style.width = "100%", setTimeout(() => o.style.width = "0%", 90), h();
        return;
      }
      A = requestAnimationFrame(lt);
    }
    function bt(mt) {
      var Nt;
      if (!(mt && mt.button !== void 0 && mt.button !== 0)) {
        mt == null || mt.preventDefault(), O(), L = !0, e.classList.add("holding");
        try {
          (Nt = e.setPointerCapture) == null || Nt.call(e, mt.pointerId);
        } catch {
        }
        A = requestAnimationFrame(lt);
      }
    }
    function vt() {
      L && O();
    }
    e.addEventListener("pointerdown", bt), e.addEventListener("pointerup", vt), e.addEventListener("pointercancel", vt), e.addEventListener("lostpointercapture", vt), e.addEventListener("keydown", (mt) => {
      (mt.key === " " || mt.key === "Enter") && !mt.repeat && bt(mt);
    }), e.addEventListener("keyup", (mt) => {
      (mt.key === " " || mt.key === "Enter") && vt();
    });
  }
  const _d = i("endWorkout");
  ar(_d, i("holdEndFill"), 1500, Xs);
  const nr = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    nr.classList.add("open"), nr.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    nr.classList.remove("open"), nr.setAttribute("aria-hidden", "true");
  });
  function Dd() {
    const e = Xt, o = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    o && o.remove(), delete te[e], me.order = me.order.filter((h) => h !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const h = "custom-" + Date.now();
      te[h] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, me.order.push(h), s = Ta(h, te[h]);
    }
    nr.classList.remove("open"), nr.setAttribute("aria-hidden", "true"), uo = null, Er(), da(s.dataset.workout), en(), ue("Move deleted");
  }
  ar(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Dd);
  const Ra = n.querySelector(".rubberTabs"), Vo = i("rubberIndicator");
  function or(e, o = !0) {
    if (!e || !Ra || !Vo) return;
    const s = Ra.getBoundingClientRect(), h = e.getBoundingClientRect();
    Vo.style.transition = o ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const v = Fo();
    Vo.style.left = (h.left - s.left) / v + Ra.scrollLeft + "px", Vo.style.width = h.width / v + "px", o && (Vo.style.transform = "scaleX(1.08)", setTimeout(() => Vo.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((o) => o.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((o) => o.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), or(e, !0);
  })), requestAnimationFrame(() => or(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => or(n.querySelector(".tab.active"), !1));
  const bs = i("pixelTrailToggle"), Fr = i("rippleToggle"), ir = i("trailStrength"), rr = i("trailLife");
  function un(e, o) {
    pe()[e] = o, en();
  }
  const al = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function nl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function ol(e) {
    var o;
    return !!((o = pe().hideMeta) != null && o[nl(e)]);
  }
  function Gl() {
    const e = /* @__PURE__ */ new Map(), o = (s, h, v) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const A = nl(s);
      let L = e.get(A);
      L || (L = { key: A, label: A === "rest" ? "Rest" : A === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(A, L)), L.kinds.add(A === "rest" ? "Rest" : A === "video" ? "Video" : h), L.moves.add(v), L.count++;
    };
    return Object.values(te).forEach((s) => {
      const h = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Pt)).forEach((v) => o(v, "Warm-up", h)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((v) => o(v, v.presetRole === "warmup" ? "Warm-up" : v.presetRole === "cooldown" ? "Cooldown" : "Movement", h)), (s.cooldown || (s.customSequence ? [] : Qt)).forEach((v) => o(v, "Cooldown", h));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, h]) => {
      e.has(s) || e.set(s, { key: s, label: h, kinds: /* @__PURE__ */ new Set([h]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, h) => al.indexOf(s.kind) - al.indexOf(h.kind) || s.label.localeCompare(h.label));
  }
  let ws = "all";
  function xs() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Gl().filter((o) => (ws === "all" || o.kind === ws) && (!e || o.label.toLowerCase().includes(e) || o.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function Or() {
    const e = i("metaTableBody");
    if (!e) return;
    const o = pe().hideMeta || {}, s = xs();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((v) => {
      const A = !o[v.key], L = v.count ? (v.moves.length > 2 ? v.moves.slice(0, 2).join(", ") + " + " + (v.moves.length - 2) + " more" : v.moves.join(", ")) + " · " + v.count + " step" + (v.count === 1 ? "" : "s") : "Not used yet", O = document.createElement("tr");
      O.className = A ? "" : "off", O.innerHTML = '<td><div class="metaType">' + Gt(v.label) + '</div><div class="metaSub">' + Gt(v.kind + " · " + L) + '</div></td><td class="metaKindCol">' + Gt(v.kind) + '</td><td class="metaUsedCol">' + Gt(L) + '</td><td class="metaSwitchCol"><button class="switch' + (A ? " on" : "") + '" type="button" role="switch" aria-checked="' + A + '" aria-label="Second line for ' + Gt(v.label) + ' on phones"></button></td>', O.querySelector(".switch").addEventListener("click", () => fi([v.key], A)), e.appendChild(O);
    });
    const h = s.filter((v) => o[v.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (h ? " · " + h + " hidden on phones" : "") : "";
  }
  function fi(e, o) {
    const s = { ...pe().hideMeta || {} };
    e.forEach((h) => {
      o ? s[h] = !0 : delete s[h];
    }), un("hideMeta", s), Or(), Xe(), ra();
  }
  i("metaSearch").addEventListener("input", Or), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ws = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((o) => o.classList.toggle("active", o === e)), Or();
  })), i("metaHideAll").addEventListener("click", () => fi(xs().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => fi(xs().map((e) => e.key), !1));
  const sr = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...pe().toggles || {} };
  function ys() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", sr[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, h]) => {
      i(h).hidden = sr[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => sr[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const o = n.querySelector("#homeView .grid");
    o.classList.toggle("noActivity", !e), o.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    sr[e.dataset.toggle] = sr[e.dataset.toggle] === !1, ys(), un("toggles", { ...sr });
  })), ys();
  function Bd() {
    bs.classList.toggle("on", Ln), Fr.classList.toggle("on", si), ir.value = Math.round(_e * 100), i("trailStrengthValue").textContent = ir.value + "%", rr.value = Yi, i("trailLifeValue").textContent = rr.value + " ms";
  }
  pe().trailEnabled !== void 0 && (Ln = pe().trailEnabled), pe().rippleEnabled !== void 0 && (si = pe().rippleEnabled), pe().trailStrength !== void 0 && (_e = pe().trailStrength), pe().trailMaxAge !== void 0 && (Yi = pe().trailMaxAge), Bd();
  const ks = i("soundsToggle");
  ks.classList.toggle("on", En()), ks.addEventListener("click", () => {
    un("sounds", !En()), ks.classList.toggle("on", En()), En() && (Il(), _n("move"));
  }), bs.addEventListener("click", () => {
    Ln = !Ln, bs.classList.toggle("on", Ln), Ln || (Dr = []), un("trailEnabled", Ln);
  }), Fr.addEventListener("click", () => {
    si = !si, Fr.classList.toggle("on", si), un("rippleEnabled", si);
  }), ir.addEventListener("input", () => {
    _e = Number(ir.value) / 100, i("trailStrengthValue").textContent = ir.value + "%";
  }), ir.addEventListener("change", () => un("trailStrength", _e)), rr.addEventListener("input", () => {
    Yi = Number(rr.value), i("trailLifeValue").textContent = rr.value + " ms";
  }), rr.addEventListener("change", () => un("trailMaxAge", Yi)), Ea.addEventListener("change", () => un("upcomingCount", Eo));
  function lr(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const o = e === "light";
    i("app").classList.toggle("light", o), l.setLight(o), Mo(n);
  }
  lr(pe().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    lr(e.dataset.theme), un("theme", e.dataset.theme);
  }));
  const Ka = { steps: null, weather: null, ...pe().entities || {} };
  let Oe = null, Ms = {};
  function il(e) {
    const o = Object.values(e).filter((O) => O.entity_id.startsWith("sensor.") || O.entity_id.startsWith("input_number.")), s = (O) => O.attributes.friendly_name || O.entity_id, h = o.filter((O) => /step/i.test(O.entity_id) || /step/i.test(s(O)) || ["steps", "step"].includes(String(O.attributes.unit_of_measurement || "").toLowerCase())), v = o.filter((O) => !h.includes(O)), A = (O, lt) => s(O).localeCompare(s(lt)), L = (O, lt) => /health_steps/.test(lt.entity_id) - /health_steps/.test(O.entity_id) || A(O, lt);
    return { suggested: h.sort(L), rest: v.sort(A), label: s };
  }
  function Ss(e) {
    const o = i("stepsEntity");
    if (!o || o.matches(":focus")) return;
    const { suggested: s, rest: h, label: v } = il(e), A = (lt) => '<option value="' + Gt(lt.entity_id) + '">' + Gt(v(lt)) + "</option>";
    o.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(A).join("") + "</optgroup>" : "") + (h.length ? '<optgroup label="All sensors">' + h.map(A).join("") + "</optgroup>" : ""), o.value = Ka.steps || "";
    const L = i("stepsStatus"), O = Ka.steps && e[Ka.steps];
    L.textContent = O ? "Connected · " + v(O) : L.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Ka.steps = i("stepsEntity").value || null, un("entities", { ...Ka }), Ms = {}, Yl(), Oe && (Ss(Oe), Ul(Oe));
  });
  function Rd(e, o = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: o }).format(e);
  }
  function wa() {
    const e = Ka.steps && (Oe == null ? void 0 : Oe[Ka.steps]), o = Number(e == null ? void 0 : e.state);
    return Number.isFinite(o) ? o : null;
  }
  function Ul(e) {
    var h;
    const o = Ka.steps, s = o ? Number((h = e[o]) == null ? void 0 : h.state) : NaN;
    i("stepsMeta").textContent = o ? Number.isFinite(s) ? Rd(s) : "—" : "Set up in Settings";
  }
  let hi = 0;
  async function Yl() {
    const e = Ka.steps;
    if (!e || !l.ws) return;
    hi = Date.now();
    const o = /* @__PURE__ */ new Date(), s = new Date(o.getFullYear(), o.getMonth(), o.getDate() - 30);
    try {
      const h = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: o.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), v = (h == null ? void 0 : h[e]) || [], A = {};
      if (v.forEach((L) => {
        Number.isFinite(L.max) && (A[He(new Date(L.start))] = L.max);
      }), !Object.keys(A).length) {
        const L = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: o.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((L == null ? void 0 : L[e]) || []).forEach((O) => {
          const lt = Number(O.s ?? O.state), bt = O.lu ? O.lu * 1e3 : Date.parse(O.last_updated || O.last_changed);
          if (!Number.isFinite(lt) || !bt) return;
          const vt = He(new Date(bt));
          A[vt] = Math.max(A[vt] || 0, lt);
        });
      }
      Ms = A, fn();
    } catch {
    }
  }
  function mi() {
    fn();
  }
  mi(), setInterval(() => {
    mi(), Ue(), Le();
  }, 10 * 60 * 1e3);
  function Ut(e) {
    const o = {}, s = {};
    me.history.forEach((L) => {
      const O = He(new Date(L.start));
      o[O] = (o[O] || 0) + (L.seconds || 0) / 60, s[O] = (s[O] || 0) + 1;
    });
    const h = /* @__PURE__ */ new Date(), v = He(h), A = [];
    for (let L = e - 1; L >= 0; L--) {
      const O = new Date(h.getFullYear(), h.getMonth(), h.getDate() - L), lt = He(O), bt = me.checkins.filter((mt) => mt.date === lt), vt = (mt) => {
        const Nt = bt.map(($t) => $t[mt]).filter(Boolean);
        return Nt.length ? Nt.reduce(($t, Ht) => $t + Ht, 0) / Nt.length : null;
      };
      A.push({
        key: lt,
        date: O,
        minutes: Math.round(o[lt] || 0),
        moves: s[lt] || 0,
        steps: lt === v && wa() != null ? wa() : Ms[lt] ?? null,
        mood: vt("mood"),
        energy: vt("energy")
      });
    }
    return A;
  }
  function rl(e) {
    let o = e.length - 1;
    e[o] && !e[o].minutes && o--;
    let s = 0;
    for (; o >= 0 && e[o].minutes > 0; )
      s++, o--;
    return s;
  }
  function fn() {
    const e = i("insightCard");
    if (!e) return;
    const o = Ut(30), s = rl(o), h = o.reduce((bt, vt) => bt + vt.minutes, 0), v = /* @__PURE__ */ new Date(), A = He(v), L = He(new Date(v.getFullYear(), v.getMonth(), v.getDate() - (v.getDay() + 6) % 7)), O = o.filter((bt) => bt.key >= L && bt.key <= A).reduce((bt, vt) => bt + vt.minutes, 0), lt = (bt, vt, mt) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + bt + '</div><div><div class="activityRowName">' + Gt(vt) + '</div><div class="activityRowMeta">' + Gt(mt) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + La("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + lt(La("clock"), "This week", O + " min") + lt(La("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + lt(La("calendar"), "30 days", h + " min") + "</div>";
  }
  const sl = {
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
  }, xa = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", gi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, dr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let ko = 0;
  const ll = (e, o) => '<path class="' + o + '" d="' + e + '"/>', Pd = (e, o) => ' style="animation-delay:-' + Math.round(e * 137 % o) + 'ms"', Dn = (e, o, s, h) => {
    const v = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (h < 1 ? ' opacity="' + h + '"' : "") + Pd(e, 2400) + ' d="M' + e + " " + (o - s) + "L" + (e + v) + " " + (o - v) + "L" + (e + s) + " " + o + "L" + (e + v) + " " + (o + v) + "L" + e + " " + (o + s) + "L" + (e - v) + " " + (o + v) + "L" + (e - s) + " " + o + "L" + (e - v) + " " + (o - v) + 'Z"/>';
  }, Zl = ([e, o, s], h) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + h + ')"/><defs><linearGradient id="' + h + '" x1="0" y1="' + o + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Nd = (e, o) => o ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Id = (e) => (e ? ["29.35", "43.04", "56.74"].map((o, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + o + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + o + ' 60.65)"/></g>') : [19, 26, 33].map((o, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + o + ' 38)"/></g>')).join(""), Hd = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([o, s], h) => '<circle class="wxFlake" style="animation-delay:-' + h * 640 + 'ms" cx="' + o + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Kl(e, o, s, h) {
    return e === "clear" ? o ? Zl(s ? dr.l : dr.s, h) + (s ? Dn(70, 20, 5.83, 1) + Dn(78.33, 41.67, 3.75, 0.8) + Dn(60, 71.67, 3.33, 0.6) : Dn(42, 12, 3.5, 1) + Dn(47, 25, 2.25, 0.8) + Dn(36, 43, 2, 0.6)) : Nd(h, s) : e === "partly" ? (o ? Zl(s ? dr.lp : dr.sp, h) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + ll(s ? gi.lp : gi.sp, o ? "wxCloudLight" : "wxBright") + (o ? s ? Dn(73.33, 16.67, 4.17, 0.9) : Dn(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? ll(s ? gi.lc : gi.s, o ? "wxCloudLight" : "wxBright") + (o ? s ? Dn(15, 15, 3.75, 0.8) + Dn(76.67, 13.33, 2.92, 0.6) : Dn(9, 9, 2.25, 0.8) + Dn(46, 8, 1.75, 0.6) : "") : ll(s ? gi.lr : gi.s, "wxCloudLight") + (e === "rain" ? Id(s) : Hd(s));
  }
  const dl = () => {
    var e;
    return ((e = Oe == null ? void 0 : Oe["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let za = pe().weatherStyle || "bitmap", qr = pe().weatherLayout === "strip" ? "strip" : "tiles", cl = pe().weatherMotion !== !1;
  const cr = () => cl && !Da(), vi = /* @__PURE__ */ new Map(), Cs = 700, Wr = (e) => {
    const [o, s] = e.split("/");
    return { k: o === "fog" ? "cloudy" : o === "storm" ? "rain" : o, night: s === "night" };
  };
  function jr(e, o, s, h = za, v, A) {
    let L = xa(e);
    const O = L === "night" || (A != null ? !!A : !!s && dl());
    L === "night" && (L = "clear");
    const lt = o ? 90 : 54, bt = kd(e, O), vt = performance.now();
    let mt = v ? vi.get(v) : null;
    if (v && !mt ? vi.set(v, mt = { key: bt, t0: -1e9 }) : mt && mt.key !== bt && (mt.fromKey = mt.key, mt.from = mt.last || null, mt.key = bt, mt.t0 = vt), h !== "smooth") return '<span class="wxIcon pixels' + (o ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + bt + '"' + (v ? ' data-wx-slot="' + v + '"' : "") + ' data-wx-style="' + h + '" data-wx-size="' + lt + '"></canvas></span>';
    let Nt = "";
    if (mt && vt - mt.t0 < Cs && (cr() || Da())) {
      const $t = Wr(mt.fromKey);
      Nt = '<span class="wxLayer wxOut ' + $t.k + ($t.night ? " night" : "") + '" style="animation-delay:' + Math.round(mt.t0 - vt) + 'ms"><svg viewBox="0 0 ' + lt + " " + lt + '">' + Kl($t.k, $t.night, o, "wxg" + ++ko) + "</svg></span>";
    }
    return '<span class="wxIcon ' + L + (O ? " night" : "") + (o ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + lt + " " + lt + '">' + Kl(L, O, o, "wxg" + ++ko) + "</svg>" + Nt + "</span>";
  }
  function pr() {
    const e = i("app"), o = getComputedStyle(e), s = (O) => o.getPropertyValue(O).trim(), h = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([O, lt]) => {
      s(lt) && (h[O] = s(lt));
    });
    const v = s("--color-text-primary") || "#f1f1f1", A = s("--color-bg-card") || "#222222", L = e.classList.contains("light");
    return { colors: h, ink: L ? v : A, paper: L ? A : v };
  }
  function Mo(e, o = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const h = pr(), v = cr(), A = Da();
    s.forEach((L) => {
      var mt;
      const O = L.dataset.wx, lt = L.dataset.wxSlot ? vi.get(L.dataset.wxSlot) : null;
      let bt = dc(O, h.colors);
      if (lt && lt.key === O) {
        const Nt = (o - lt.t0) / Cs;
        Nt < 1 && (v || A) && (bt = vu(lt.from || dc(lt.fromKey, h.colors), bt, Math.max(0, Nt), h.colors, A)), lt.last = bt;
      }
      const vt = Sp(bt, { size: Number(L.dataset.wxSize) || 54, px: 2, oneBit: L.dataset.wxStyle === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: o, idle: v });
      L.width !== vt.w && (L.width = vt.w), L.height !== vt.h && (L.height = vt.h), (mt = L.getContext("2d")) == null || mt.putImageData(new ImageData(vt.data, vt.w, vt.h), 0, 0);
    });
  }
  let zr = null, pl = -1;
  function Ts(e) {
    if (zr = null, !x) return;
    const o = cr(), s = Math.floor(e / 100), h = [...vi.values()].some((lt) => e - lt.t0 < Cs), v = [...Ls.values()].some((lt) => e - lt.t0 < lt.dur), A = ct.home.classList.contains("active"), L = $a.classList.contains("open"), O = o && za === "smooth" && (L || A && qr === "strip");
    !document.hidden && (h || v || O || o && s !== pl) && (pl = s, A && (Mo(i("weatherCard"), e), ur(i("weatherCard"), e)), L && (Mo($a, e), ur($a, e))), (o || h || v) && (zr = requestAnimationFrame(Ts));
  }
  function So() {
    i("app").classList.toggle("wxMotion", cr()), !zr && x && (zr = requestAnimationFrame(Ts));
  }
  let ul = [];
  const Ye = 36e5, fl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Co() {
    const e = /* @__PURE__ */ new Date(), o = (A, L) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + A, L), s = [], h = [], v = [...Array(6)].map((A, L) => {
      const O = o(L, 6), lt = o(L, 18), bt = o(L + 1, 6), vt = ul.find((Nt) => He(new Date(Nt.datetime)) === He(O)), mt = (Nt, $t, Ht) => {
        const Rt = s.filter((fe) => fe.t >= +Nt && fe.t < +$t);
        if (Rt.length) {
          const fe = {};
          return Rt.forEach((Wt) => {
            fe[Wt.c] = (fe[Wt.c] || 0) + (fl.has(Wt.c) ? 2 : 1);
          }), Object.entries(fe).sort((Wt, he) => he[1] - Wt[1])[0][0];
        }
        const _t = h.find((fe) => {
          const Wt = +new Date(fe.datetime);
          return Wt >= +Nt - 3 * Ye && Wt < +$t && (fe.is_daytime == null || !!fe.is_daytime == !Ht);
        });
        if (_t) return _t.condition;
        const de = (vt == null ? void 0 : vt.condition) || "cloudy";
        return Ht && de === "sunny" ? "clear-night" : de;
      };
      return { start: +O, end: +bt, day: mt(O, lt, !1), night: mt(lt, bt, !0), hi: Number(vt == null ? void 0 : vt.temperature), lo: Number(vt == null ? void 0 : vt.templow) };
    });
    return { days: v, hours: s, start: v[0].start, end: v[5].end };
  }
  const $l = (e, o) => {
    const s = e.days.findIndex((v) => o < v.end);
    if (s < 0) return 1;
    const h = e.days[s];
    return Math.max(0, (s + (o - h.start) / (h.end - h.start)) / 6);
  }, Xl = (e, o) => {
    const s = Math.max(0, Math.min(0.99999, o)) * 6, h = Math.floor(s), v = e.days[h];
    return v.start + (s - h) * (v.end - v.start);
  };
  function Vr(e, o) {
    const s = Math.max(0, e.days.findIndex((lt) => o < lt.end)), h = e.days[s], v = (o - h.start) / (h.end - h.start) >= 0.5;
    let A = v ? h.night : h.day, L = NaN;
    const O = e.hours;
    if (O.length && o >= O[0].t - Ye && o <= O[O.length - 1].t + Ye) {
      let lt = O.findIndex((mt) => mt.t > o);
      lt < 0 && (lt = O.length);
      const bt = O[Math.max(0, lt - 1)], vt = O[Math.min(O.length - 1, lt)];
      A = bt.c || A, L = vt.t > bt.t ? bt.temp + (vt.temp - bt.temp) * Math.max(0, Math.min(1, (o - bt.t) / (vt.t - bt.t))) : bt.temp;
    }
    if (!Number.isFinite(L)) {
      const lt = [];
      if (e.days.forEach((bt) => {
        Number.isFinite(bt.lo) && lt.push([bt.start - Ye, bt.lo]), Number.isFinite(bt.hi) && lt.push([bt.start + 9 * Ye, bt.hi]);
      }), lt.length) {
        L = o <= lt[0][0] ? lt[0][1] : lt[lt.length - 1][1];
        for (let bt = 1; bt < lt.length; bt++) if (o <= lt[bt][0] && o > lt[bt - 1][0]) {
          const [vt, mt] = lt[bt - 1], [Nt, $t] = lt[bt];
          L = mt + ($t - mt) * (1 - Math.cos(Math.PI * (o - vt) / (Nt - vt))) / 2;
          break;
        }
      }
    }
    return { cond: v && A === "sunny" ? "clear-night" : A, temp: L, night: v, day: h };
  }
  const hl = (e) => He(new Date(e)) === He(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Ls = /* @__PURE__ */ new Map(), Fd = 900, Jl = 700;
  let As = null;
  const Bn = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((o) => {
    ur(o.target.parentElement), o.target.closest("#wxDialog") && hr();
  })) : null;
  function ur(e, o = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const h = Co(), v = h.days.flatMap((mt) => [{ cond: mt.day, night: !1 }, { cond: mt.night, night: !0 }]), A = v.map((mt) => mt.cond).join(), L = pr(), O = cr(), lt = Da(), bt = Number(He(new Date(h.start)).replace(/\D/g, "")) % 9973;
    let vt = !1;
    s.forEach((mt) => {
      var fe;
      const Nt = mt.clientWidth, $t = mt.clientHeight;
      if (!Nt || !$t) return;
      const Ht = mt.dataset.wxStrip;
      let Rt = Ls.get(Ht);
      Rt ? Rt.sig !== A && (Rt.prev = Rt.segs, Rt.sig = A, Rt.segs = v, Rt.t0 = o, Rt.dur = Jl) : Ls.set(Ht, Rt = { sig: A, segs: v, prev: null, t0: o, dur: Fd });
      const _t = O || lt ? Math.min(1, Math.max(0, (o - Rt.t0) / Rt.dur)) : 1;
      _t < 1 && (vt = !0);
      const de = { width: Nt, height: $t, colors: L.colors, clock: o, ambient: O, seed: bt, reveal: lt ? _t : 1 - Math.pow(1 - _t, 3), prev: _t < 1 ? Rt.prev : null, reduce: lt };
      if (za === "smooth") {
        const Wt = Math.min(2, window.devicePixelRatio || 1), he = Math.round(Nt * Wt), Ae = Math.round($t * Wt);
        mt.width !== he && (mt.width = he), mt.height !== Ae && (mt.height = Ae);
        const oe = mt.getContext("2d");
        if (!oe) return;
        oe.setTransform(Wt, 0, 0, Wt, 0, 0), Bu(oe, v, de);
      } else {
        const Wt = Du(v, { ...de, px: 2, oneBit: za === "onebit", ink: L.ink, paper: L.paper });
        mt.width !== Wt.w && (mt.width = Wt.w), mt.height !== Wt.h && (mt.height = Wt.h), (fe = mt.getContext("2d")) == null || fe.putImageData(new ImageData(Wt.data, Wt.w, Wt.h), 0, 0);
      }
    }), vt && So();
  }
  function Ql() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const o = Ka.weather, s = o && (Oe == null ? void 0 : Oe[o]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + jr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (o ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Mo(e);
      return;
    }
    const h = s.attributes || {}, v = h.temperature_unit || "°", A = (oe) => Number.isFinite(Number(oe)) ? Math.round(Number(oe)) + "°" : "—", L = (h.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", O = sl[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), lt = He(/* @__PURE__ */ new Date()), bt = ul.slice(0, 7), vt = bt.find((oe) => He(new Date(oe.datetime)) === lt) || null, mt = bt.filter((oe) => He(new Date(oe.datetime)) >= lt).slice(0, 6), Nt = /* @__PURE__ */ new Date(), $t = He(new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate() + 1)), Ht = vt ? "H " + A(vt.temperature) + "&ensp; L " + A(vt.templow) : "", Rt = (oe) => {
      const ae = He(new Date(oe.datetime));
      return ae === lt ? "Today" : ae === $t ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(oe.datetime));
    }, _t = Number.isFinite(Number(h.temperature)) ? Math.round(Number(h.temperature)) : "—", de = (oe) => {
      const ae = new Date(oe.datetime);
      return Math.round((new Date(ae.getFullYear(), ae.getMonth(), ae.getDate()) - new Date(Nt.getFullYear(), Nt.getMonth(), Nt.getDate())) / 864e5);
    }, fe = (oe) => (sl[oe] || oe || "").toLowerCase(), Wt = (oe, ae) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + de(oe) + '" aria-label="' + Gt(Rt(oe) + ": " + fe(oe.condition) + ", " + A(oe.temperature) + " / " + A(oe.templow) + ". Open the forecast") + '">' + jr(oe.condition, !1, !1, za, "day" + ae) + '<div><div class="activityRowName">' + Gt(Rt(oe)) + '</div><div class="activityRowMeta">' + A(oe.temperature) + " / " + A(oe.templow) + "</div></div></div>", he = () => '<div class="wxStrip"><div class="wxStripDays">' + Co().days.map((ae, fa) => {
      const ze = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ae.start)) + ": " + fe(ae.day) + (fe(ae.day) === fe(ae.night) ? " all day and night" : ", then " + fe(ae.night) + " overnight") + (Number.isFinite(ae.hi) ? ". High " + A(ae.hi) : "") + (Number.isFinite(ae.lo) ? ", low " + A(ae.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + fa + '" aria-label="' + Gt(ze) + '"><span class="wxDayName">' + Gt(hl(ae.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + A(ae.hi) + '</span><span class="wxLow">' + A(ae.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Gt("Now in " + L + ": " + _t + "°, " + fe(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + jr(s.state, !0, !0, za, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(_t)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(L) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(O) + "</div>" + (Ht ? '<div class="wxRange">' + Ht + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (mt.length ? qr === "strip" ? he() : '<div class="activityRows wxDays">' + mt.map(Wt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Mo(e);
    const Ae = e.querySelector("canvas[data-wx-strip]");
    As && As !== Ae && (Bn == null || Bn.unobserve(As)), As = Ae, Ae && (Bn == null || Bn.observe(Ae), ur(e)), So(), _s();
  }
  const Gr = i("weatherCard"), ml = (e) => {
    const o = e.closest("[data-wx-day]");
    if (o) {
      const h = /* @__PURE__ */ new Date();
      vl(+new Date(h.getFullYear(), h.getMonth(), h.getDate() + Number(o.dataset.wxDay), 12), o);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && vl(Date.now(), s);
  };
  Gr.addEventListener("click", (e) => ml(e.target)), Gr.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), ml(e.target));
  });
  const $a = i("wxDialog"), To = i("wxGraph"), Go = i("wxGraphWrap");
  let hn = Date.now(), jn = null, gl = !1, fr = null;
  function vl(e, o) {
    const s = Co();
    jn = o || null, hn = Math.max(s.start, Math.min(s.end - Ye, e)), Ls.delete("dialog"), vi.delete("scrub"), $a.classList.add("open"), $a.setAttribute("aria-hidden", "false"), _s(), Bn == null || Bn.observe($a.querySelector("canvas[data-wx-strip]")), To.focus({ preventScroll: !0 }), So();
  }
  function Es() {
    var e;
    $a.classList.remove("open"), $a.setAttribute("aria-hidden", "true"), Bn == null || Bn.unobserve($a.querySelector("canvas[data-wx-strip]")), (e = jn == null ? void 0 : jn.focus) == null || e.call(jn, { preventScroll: !0 }), jn = null;
  }
  function _s() {
    if (!$a.classList.contains("open")) return;
    const e = Co();
    i("wxGraphDays").innerHTML = e.days.map((o) => "<span>" + Gt(hl(o.start)) + "</span>").join(""), hr(e), bi(e), ur($a);
  }
  function bi(e = Co()) {
    const o = Vr(e, hn), s = Oe == null ? void 0 : Oe[Ka.weather], h = (s == null ? void 0 : s.attributes) || {}, v = h.temperature_unit || "°", A = Math.abs(hn - Date.now()) < Ye / 2, L = A && s ? s.state : o.cond, O = A && Number.isFinite(Number(h.temperature)) ? Math.round(Number(h.temperature)) : Number.isFinite(o.temp) ? Math.round(o.temp) : "—", lt = sl[L] || (L ? L.charAt(0).toUpperCase() + L.slice(1) : "—"), bt = A ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(hn / Ye) * Ye)), vt = o.day, mt = (Number.isFinite(vt.hi) ? "H " + Math.round(vt.hi) + "°" : "") + (Number.isFinite(vt.lo) ? "&ensp; L " + Math.round(vt.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + jr(L, !0, A, za, "scrub", A ? void 0 : o.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Gt(String(O)) + '</span><span class="wxUnit">' + Gt(v) + '</span></div><div class="wxPlace">' + Gt(bt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Gt(lt) + "</div>" + (mt ? '<div class="wxRange">' + mt + "</div>" : "") + "</div>", Mo(i("wxDialogNow")), To.setAttribute("aria-valuenow", String(Math.round((hn - e.start) / Ye))), To.setAttribute("aria-valuetext", bt + ", " + lt.toLowerCase() + ", " + O + "°"), Ds(e), So();
  }
  function hr(e = Co()) {
    const o = i("wxGraphLine"), s = Go.clientWidth, h = Go.clientHeight;
    if (!s || !h) return;
    const v = [];
    for (let _t = e.start; _t <= e.end; _t += Ye) {
      const de = Vr(e, _t).temp;
      Number.isFinite(de) && v.push([$l(e, _t) * s, de]);
    }
    if (o.setAttribute("viewBox", "0 0 " + s + " " + h), v.length < 2) {
      o.innerHTML = '<g id="wxCursorMark"></g>', fr = null, Ds(e);
      return;
    }
    const A = v.map((_t) => _t[1]), L = Math.min(...A), O = Math.max(...A), lt = Math.max(4, O - L), bt = za !== "smooth", vt = (_t) => bt ? Math.round(_t / 2) * 2 : Math.round(_t * 10) / 10;
    fr = (_t) => h * 0.84 - (_t - L) / lt * h * 0.62;
    const mt = pr(), Nt = za === "onebit" ? mt.paper : "#ffffff", $t = za === "onebit" ? mt.ink : "rgba(0,0,0,.28)", Ht = "M" + v.map((_t) => vt(_t[0]) + " " + vt(fr(_t[1]))).join(" L"), Rt = (_t, de) => {
      const fe = v.find((Wt) => Wt[1] === _t);
      return '<text class="wxLineLabel" x="' + vt(Math.min(s - 14, Math.max(14, fe[0]))) + '" y="' + vt(fr(_t) + (de ? 18 : -10)) + '" fill="' + Nt + '" stroke="' + $t + '">' + Math.round(_t) + "°</text>";
    };
    o.setAttribute("shape-rendering", bt ? "crispEdges" : "auto"), o.innerHTML = '<path d="' + Ht + '" fill="none" stroke="' + $t + '" stroke-width="' + (bt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ht + '" fill="none" stroke="' + Nt + '" stroke-width="2" stroke-linejoin="round"/>' + Rt(O, !1) + Rt(L, !0) + '<g id="wxCursorMark"></g>', Ds(e);
  }
  function Ds(e = Co()) {
    const o = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!o) return;
    const s = Go.clientWidth, h = Go.clientHeight, v = za !== "smooth", A = (Nt) => v ? Math.round(Nt / 2) * 2 : Nt, L = A($l(e, hn) * s), O = Vr(e, hn).temp, lt = pr(), bt = za === "onebit" ? lt.paper : "#ffffff", vt = za === "onebit" ? lt.ink : "rgba(0,0,0,.28)", mt = fr && Number.isFinite(O) ? A(fr(O)) : null;
    o.innerHTML = '<rect x="' + (L - 2) + '" y="0" width="4" height="' + h + '" fill="' + vt + '"/><rect x="' + (L - 1) + '" y="0" width="2" height="' + h + '" fill="' + bt + '"/>' + (mt == null ? "" : v ? '<rect x="' + (L - 5) + '" y="' + (mt - 5) + '" width="10" height="10" fill="' + bt + '" stroke="' + vt + '" stroke-width="2"/>' : '<circle cx="' + L + '" cy="' + mt + '" r="6" fill="' + bt + '" stroke="' + vt + '" stroke-width="2"/>');
  }
  const bl = (e) => {
    const o = Go.getBoundingClientRect();
    o.width && (hn = Xl(Co(), (e - o.left) / o.width), bi());
  };
  To.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      gl = !0;
      try {
        To.setPointerCapture(e.pointerId);
      } catch {
      }
      bl(e.clientX);
    }
  }), To.addEventListener("pointermove", (e) => {
    gl && bl(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => To.addEventListener(e, () => {
    gl = !1;
  })), To.addEventListener("keydown", (e) => {
    const o = Co(), s = { ArrowLeft: -Ye, ArrowRight: Ye, ArrowDown: -Ye, ArrowUp: Ye, PageUp: -24 * Ye, PageDown: 24 * Ye }[e.key];
    s ? (e.preventDefault(), hn = Math.max(o.start, Math.min(o.end - Ye, Math.round(hn / Ye) * Ye + s)), bi(o)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), hn = e.key === "Home" ? o.start : o.end - Ye, bi(o));
  }), i("wxDialogClose").addEventListener("click", Es), $a.addEventListener("click", (e) => {
    e.target === $a && Es();
  }), $a.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Es());
  }), Ql(), (U = (X = window.matchMedia) == null ? void 0 : (ut = X.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || U.call(ut, "change", () => {
    So(), Mo(n);
  }), So();
  const wl = i("tvNav");
  l.fullscreenSupported || (wl.hidden = !0), wl.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ct.workout.classList.contains("active") || zi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Br.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const o = Math.max(1, Math.min(10, (Number(ie.value) || 1) + Number(e.dataset.roundsStep)));
    String(o) !== ie.value && (ie.value = o, ie.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [R, B, W, ie].forEach((e) => e.addEventListener("input", () => {
    const o = te[Xt];
    o && (o.total = Number(R.value), o.work = Number(B.value), o.rest = Number(W.value)), Se();
  })), nt.addEventListener("click", Xs), qt.addEventListener("click", () => T("settings")), i("settingsBack").addEventListener("click", Xs), Br.addEventListener("click", () => vo(!an)), da(Xt), Fe(), Ue(), fn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), ar(i("resetStats"), i("resetStatsFill"), 1500, () => {
    me.history = [], me.checkins = [], Kt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    en(), mi(), Ue(), Fe(), fn(), Le(), ue("Stats reset");
  });
  const Bs = i("morningTime"), t = i("eveningTime"), a = i("checkinAutoOpen");
  Bs.value = qn().morning, t.value = qn().evening, a.classList.toggle("on", pe().checkinAutoOpen !== !1), [["morningTime", Bs], ["eveningTime", t]].forEach(([e, o]) => o.addEventListener("change", () => {
    o.value && (un(e, o.value), Le());
  })), a.addEventListener("click", () => {
    const e = pe().checkinAutoOpen === !1;
    a.classList.toggle("on", e), un("checkinAutoOpen", e);
  }), setTimeout(Ft, 800);
  const r = i("checkinNotify"), d = i("checkinNotifyTarget"), u = i("checkinNotifyStatus"), b = u.textContent;
  function f() {
    const e = l.notifyServices(), o = e.filter((v) => v.startsWith("mobile_app_")), s = o.length ? o : e, h = (v) => v.replace(/^mobile_app_/, "").replace(/_/g, " ");
    d.innerHTML = s.map((v) => '<option value="' + Gt(v) + '">' + Gt(h(v)) + "</option>").join(""), !pe().notifyTarget && s[0] && (pe().notifyTarget = s[0]), d.value = pe().notifyTarget || "";
  }
  function w() {
    const e = !!pe().notifyOn;
    r.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const o = qn();
    u.textContent = e ? "Sends at " + o.morning + " and " + o.evening : b;
  }
  async function M() {
    const e = !!pe().notifyOn;
    try {
      return await l.setReminderAutomation(e ? { target: pe().notifyTarget, times: qn() } : null), !0;
    } catch {
      return ue("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  r.addEventListener("click", async () => {
    const e = !pe().notifyOn;
    if (e && (f(), !pe().notifyTarget)) {
      ue("Install the Companion app on your phone first");
      return;
    }
    pe().notifyOn = e, w(), await M() ? (en(), ue(e ? "Check-in notifications on" : "Check-in notifications off")) : (pe().notifyOn = !e, w());
  }), d.addEventListener("change", () => {
    un("notifyTarget", d.value), pe().notifyOn && M();
  }), [Bs, t].forEach((e) => e.addEventListener("change", () => {
    w(), pe().notifyOn && M();
  })), f(), w();
  let P = null;
  function H() {
    P || (P = setTimeout(() => {
      P = null, fn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, h;
      const o = !Oe || Oe[Ka.weather] !== e[Ka.weather] || ((s = Oe["sun.sun"]) == null ? void 0 : s.state) !== ((h = e["sun.sun"]) == null ? void 0 : h.state);
      Oe = e, Ss(e), Ul(e), o && Ql(), Date.now() - hi > 60 * 60 * 1e3 && Yl(), H();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (me.history = e.history, mi()), Array.isArray(e.history) && fn(), Array.isArray(e.checkins) && (me.checkins = e.checkins.map(Mr), Le(), Fe(), Ue(), mi(), fn()), e.profiles && !Wa.classList.contains("open") && !dn)) {
        const o = kr(e);
        Object.keys(te).forEach((s) => delete te[s]), Object.assign(te, o.profiles), me.order = o.order, te[Xt] || (Xt = me.order[0]), Vn(), da(Xt);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, Zi || (Zi = requestAnimationFrame(ls)), Ki || (Ki = requestAnimationFrame(ds)), So(), or(n.querySelector(".tab.active"), !1));
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
}, Ur = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Sa = "made_up_", Uo = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Sa);
}, nd = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
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
  const l = {}, i = {}, c = (K, j, ft, ht) => {
    l[K] = { entity_id: K, state: ft, attributes: ht, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[K] = j;
  }, m = (K, j, ft) => {
    const ht = l[K], wt = j ?? ht.state;
    l[K] = { ...ht, state: wt, attributes: { ...ht.attributes, ...ft }, last_changed: wt === ht.state ? ht.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (K, j, ft, ht) => c("binary_sensor." + Sa + (K ? K + "_" : "") + nd(j), K, ht ? "on" : "off", { friendly_name: j, device_class: ft });
  Object.entries(Iu).forEach(([K, j]) => {
    if (j.temperature != null && c("sensor." + Sa + K + "_temperature", K, String(j.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), j.humidity != null && c("sensor." + Sa + K + "_humidity", K, String(j.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), j.vacuum && c("vacuum." + Sa + "robot", K, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), j.climate && c("climate." + Sa + K, K, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: j.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), j.cover) {
      const [ft, ht, wt, ot] = j.cover;
      c("cover." + Sa + K + "_" + nd(ft), K, wt ? "open" : "closed", { friendly_name: ft, device_class: ht, current_position: wt, ...ot != null ? { current_tilt_position: ot } : {} });
    }
    if (j.humidifier && c("humidifier." + Sa + K, K, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: j.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), j.solar && (c("sensor." + Sa + K + "_solar_power", K, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + Sa + K + "_solar_today", K, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), j.valve && c("valve." + Sa + K + "_" + nd(j.valve), K, "closed", { friendly_name: j.valve, device_class: "water" }), j.door && x(K, j.door, "door", j.doorOpen), j.window && x(K, j.window, "window", !1), j.motion && x(K, j.motion, "motion", !1), j.plant) {
      const [ft, ht, wt, ot, tt] = j.plant, _ = Sa + nd(ft), Z = (et, ct, nt, qt, T) => c("sensor." + _ + "_" + et, K, String(nt), { friendly_name: ct, device_class: T, state_class: "measurement", unit_of_measurement: qt, plant_low: nt < Ur[et][0], plant_high: nt > Ur[et][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[et] });
      Z("moisture", "Moisture", ht, "%", "moisture"), Z("light", "Light", wt, "lx", "illuminance"), Z("temperature", "Temperature", ot, "°C", "temperature"), Z("fertility", "Fertility", tt, "µS/cm", "conductivity");
      const St = Object.entries({ moisture: ht, light: wt, temperature: ot, fertility: tt }).filter(([et, ct]) => ct < Ur[et][0] || ct > Ur[et][1]).map(([et, ct]) => et + (ct < Ur[et][0] ? " low" : " high"));
      c("plant." + _, K, St.length ? "problem" : "ok", { friendly_name: ft, moisture: ht, brightness: wt, temperature: ot, conductivity: tt, problem: St.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + Sa + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), c("sensor." + Sa + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, E = {};
  let S = null;
  function D() {
    const K = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((j) => {
      j.endsWith("_solar_power") && (l[j] = { ...l[j], state: vc(K).toFixed(2) }), j.endsWith("_solar_today") && (l[j] = { ...l[j], state: Hu(K).toFixed(1) });
    });
  }
  D();
  let z = 0;
  function I() {
    let K = !1;
    const j = ++z % 10 === 0, ft = (ot, tt, _) => {
      m(ot, tt, _), K = !0;
    };
    Object.entries(k).forEach(([ot, tt]) => {
      const _ = l[ot].attributes.current_position, Z = _ < tt ? Math.min(tt, _ + 10) : Math.max(tt, _ - 10);
      Z === tt && delete k[ot], ft(ot, Z === tt ? Z === 0 ? "closed" : "open" : tt > _ ? "opening" : "closing", { current_position: Z });
    }), Object.entries(E).forEach(([ot, tt]) => {
      const _ = l[ot].attributes.current_tilt_position, Z = _ < tt ? Math.min(tt, _ + 25) : Math.max(tt, _ - 25);
      Z === tt && delete E[ot], ft(ot, null, { current_tilt_position: Z });
    }), Object.keys(l).filter((ot) => ot.startsWith("climate.")).forEach((ot) => {
      const tt = l[ot], _ = tt.attributes, Z = _.current_temperature, St = (tt.state === "heat" || tt.state === "auto") && Z < _.temperature - 0.05, et = (tt.state === "cool" || tt.state === "auto") && Z > _.temperature + 0.05, ct = tt.state === "off" ? "off" : St ? "heating" : et ? "cooling" : "idle", nt = j ? Math.round((Z + (St ? 0.1 : et ? -0.1 : 0)) * 10) / 10 : Z;
      (nt !== Z || ct !== _.hvac_action) && ft(ot, null, { current_temperature: nt, hvac_action: ct });
    }), Object.keys(l).filter((ot) => ot.startsWith("humidifier.")).forEach((ot) => {
      const tt = l[ot], _ = tt.attributes, Z = _.current_humidity, St = tt.state === "on" && Z < _.humidity, et = St && j ? Z + 1 : Z, ct = tt.state !== "on" ? "off" : St ? "humidifying" : "idle";
      if (et !== Z || ct !== _.action) {
        ft(ot, null, { current_humidity: et, action: ct });
        const nt = "sensor." + Sa + i[ot] + "_humidity";
        l[nt] && ft(nt, String(et));
      }
    });
    const ht = l["vacuum." + Sa + "robot"], wt = ht.attributes;
    ht.state === "cleaning" && j && ft(ht.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), ht.state === "returning" && ft(ht.entity_id, "docked", {}), ht.state === "docked" && wt.battery_level < 100 && ft(ht.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), S && Date.now() - S.at > 5e3 && (ft("alarm_control_panel." + Sa + "house", "armed_" + S.mode, {}), S = null), K && n();
  }
  const q = setInterval(I, 1e3), G = setInterval(() => {
    D(), n();
  }, 60 * 1e3);
  function rt(K, j, ft) {
    const ht = ft == null ? void 0 : ft.entity_id;
    if (!l[ht]) return !1;
    const wt = l[ht], ot = wt.attributes, tt = (_, Z) => m(ht, _, Z);
    if (K === "climate" && (j === "set_temperature" && tt(null, { temperature: Math.max(ot.min_temp, Math.min(ot.max_temp, ft.temperature)) }), j === "set_hvac_mode" && tt(ft.hvac_mode, ft.hvac_mode === "off" ? { hvac_action: "off" } : {}), j === "toggle" && tt(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" })), K === "cover") {
      const _ = j === "open_cover" ? 100 : j === "close_cover" ? 0 : j === "set_cover_position" ? ft.position : j === "toggle" ? ot.current_position > 0 ? 0 : 100 : null;
      j === "stop_cover" && (delete k[ht], delete E[ht], tt(ot.current_position === 0 ? "closed" : "open")), _ != null && _ !== ot.current_position && (k[ht] = _, tt(_ > ot.current_position ? "opening" : "closing"));
      const Z = j === "open_cover_tilt" ? 100 : j === "close_cover_tilt" ? 0 : j === "set_cover_tilt_position" ? ft.tilt_position : null;
      j === "stop_cover_tilt" && delete E[ht], Z != null && ot.current_tilt_position != null && Z !== ot.current_tilt_position && (E[ht] = Z);
    }
    if (K === "humidifier" && (j === "set_humidity" && tt(null, { humidity: Math.max(ot.min_humidity, Math.min(ot.max_humidity, ft.humidity)) }), j === "set_mode" && tt(null, { mode: ft.mode }), j === "turn_on" || j === "turn_off" || j === "toggle")) {
      const _ = j === "turn_on" || j === "toggle" && wt.state !== "on";
      tt(_ ? "on" : "off", { action: _ ? "idle" : "off" });
    }
    if (K === "vacuum" && (j === "start" && tt("cleaning", { rooms: ft.rooms || ot.rooms }), j === "pause" && tt("paused"), j === "return_to_base" && tt("returning", { rooms: [] }), j === "locate" && tt(null, { located: Date.now() }), j === "set_rooms" && tt(null, { rooms: ft.rooms })), K === "valve") {
      const _ = j === "open_valve" || j === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(j) && tt(_ ? "open" : "closed");
    }
    if (K === "alarm_control_panel") {
      j === "alarm_disarm" && (S = null, tt("disarmed", { changed_by: "Matt" }));
      const _ = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[j];
      _ && (S = { mode: _, at: Date.now() }, tt("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function at(K) {
    const j = (K == null ? void 0 : K.states) || {}, ft = (K == null ? void 0 : K.entities) || {}, ht = (K == null ? void 0 : K.devices) || {}, wt = (B) => {
      var kt;
      const W = ft[B];
      return W && (W.area_id || W.device_id && ((kt = ht[W.device_id]) == null ? void 0 : kt.area_id)) || null;
    }, ot = (B) => {
      const W = ft[B];
      return j[B] && j[B].state !== "unavailable" && !(W != null && W.hidden) && !(W != null && W.entity_category);
    }, tt = {};
    Object.keys(j).forEach((B) => {
      const W = wt(B);
      W && ot(B) && (tt[W] || (tt[W] = [])).push(B);
    });
    const _ = { ...j, ...l }, Z = (B) => {
      var W, kt;
      return (kt = (W = _[B]) == null ? void 0 : W.attributes) == null ? void 0 : kt.device_class;
    }, St = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], et = Object.keys(j).filter((B) => B.startsWith("vacuum.") && ot(B)), ct = Object.values((K == null ? void 0 : K.areas) || {}).filter((B) => !Nu.has(B.area_id)).map((B) => {
      const W = B.area_id, kt = tt[W] || [], xt = (Pt) => kt.filter((ce) => ce.startsWith(Pt + ".")), J = (Pt) => xt("sensor").filter((ce) => Z(ce) === Pt), Mt = (Pt) => Object.keys(l).filter((ce) => i[ce] === W && Pt(ce)), Ct = (Pt, ce) => Pt.length ? Pt : Mt(ce), Jt = Ct(J("temperature"), (Pt) => Pt.endsWith(W + "_temperature")), ie = Ct(J("humidity"), (Pt) => Pt.endsWith(W + "_humidity")), na = J("power").filter((Pt) => /^(W|kW)$/.test(_[Pt].attributes.unit_of_measurement || "")), ye = xt("binary_sensor").filter((Pt) => Z(Pt) === "moisture"), Li = Ct(xt("plant"), (Pt) => Pt.startsWith("plant.")).map((Pt) => ({ id: Pt, readings: Mt((ce) => ce.startsWith("sensor." + Pt.split(".")[1] + "_")) })), Ca = [...xt("binary_sensor").filter((Pt) => St.includes(Z(Pt))), ...Mt((Pt) => Pt.startsWith("binary_sensor."))];
      return {
        id: W,
        name: B.name,
        icon: B.icon,
        readings: [...Jt.slice(0, 1), ...ie.slice(0, 1), ...ye],
        power: na.length ? na.reduce((Pt, ce) => Pt + Number(_[ce].state) * (_[ce].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: xt("switch"),
        lights: xt("light"),
        actions: [...xt("light"), ...Ct(xt("climate"), (Pt) => Pt.startsWith("climate.")), ...Ct(xt("cover"), (Pt) => Pt.startsWith("cover.")), ...Ct(xt("humidifier"), (Pt) => Pt.startsWith("humidifier.")), ...Ct(xt("valve"), (Pt) => Pt.startsWith("valve.")), ...xt("media_player"), ...xt("vacuum"), ...et.length ? [] : Mt((Pt) => Pt.startsWith("vacuum."))],
        solar: Mt((Pt) => Pt.includes("_solar_")),
        plants: Li,
        openings: Ca,
        alerts: [...ye, ...Ca].filter((Pt) => {
          var ce;
          return ((ce = _[Pt]) == null ? void 0 : ce.state) === "on";
        })
      };
    }).filter((B) => B.readings.length || B.plugs.length || B.actions.length || B.solar.length || B.plants.length), nt = Object.keys(j).find((B) => /^sensor\..*(p1_meter_power|grid_power)$/.test(B) && j[B].state !== "unavailable") || null, qt = (B) => Object.keys(j).filter((W) => W.startsWith(B + ".") && ot(W)), T = qt("alarm_control_panel"), R = et.length ? et : ["vacuum." + Sa + "robot"];
    return {
      states: _,
      rooms: ct,
      grid: nt,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (B) => l[B] ? i[B] : wt(B),
      vacuums: R,
      homeVacuums: R.filter((B) => !ct.some((W) => W.actions.includes(B))),
      security: {
        alarms: T.length ? T : ["alarm_control_panel." + Sa + "house"],
        locks: qt("lock"),
        openings: [...Object.keys(l).filter((B) => B.startsWith("binary_sensor.")), "sensor." + Sa + "doorbell"]
      }
    };
  }
  return { model: at, call: rt, stop() {
    clearInterval(q), clearInterval(G);
  } };
}
const Si = (n) => n < 0 ? 0 : n > 1 ? 1 : n, cc = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, Ou = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Sc = {}, oo = (n, l, i) => {
  const c = n + l + i;
  return Sc[c] || (Sc[c] = Ou(cc(n).map((m, x) => m + (cc(l)[x] - m) * i)));
}, Cc = {}, hd = (n) => Cc[n] || (Cc[n] = cc(n));
function qu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [oo(l.clear[0], l.cloudy[0], 0.12), oo(l.clear[1], l.cloudy[1], 0.12)], l.storm = [oo(l.rain[0], "#000000", 0.22), oo(l.rain[1], "#000000", 0.22)], l;
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
], ki = (n, l) => (Wu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Ap = 1, Ep = 2, _p = 3, Dp = 4, Fs = 5, bd = 6, pc = 7, Bp = 8, Tc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), ju = (n, l, i) => {
  let c = !1;
  for (let m = 0, x = n.length - 1; m < n.length; x = m++) {
    const k = n[m], E = n[x];
    k[1] > i != E[1] > i && l < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (c = !c);
  }
  return c;
};
function zu(n, l, i, c, { oneBit: m, ink: x, paper: k, snowInk: E }) {
  const S = new Uint8ClampedArray(i * c * 4), D = hd(x), z = hd(k);
  for (let I = 0; I < c; I++) for (let q = 0; q < i; q++) {
    const G = I * i + q, rt = l[G];
    if (n[G] == null) continue;
    let at = hd(n[G]);
    if (m) {
      let K;
      rt === Dp || rt === Bp ? K = !0 : rt === Fs ? K = E : rt === pc || rt === bd ? K = !1 : K = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= ki(q, I), (rt === Ap || rt === Ep || rt === _p || rt === bd) && (q > 0 && l[G - 1] !== rt || q < i - 1 && l[G + 1] !== rt || I > 0 && l[G - i] !== rt || I < c - 1 && l[G + i] !== rt) && (K = !0), at = K ? D : z;
    }
    S[G * 4] = at[0], S[G * 4 + 1] = at[1], S[G * 4 + 2] = at[2], S[G * 4 + 3] = 255;
  }
  return { w: i, h: c, data: S };
}
const Vu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Gu = (n) => kd(n, !1).split("/")[0], Wd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Uu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Yu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Zu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ku = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", $u = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Xu = [".##", "##.", ".#.", "#.."];
function Rp(n, { width: l, height: i, colors: c, wave: m = 0.38, soft: x = 6, glow: k = 0.6, columns: E = 6 }) {
  const S = { ...Mn, dawn: "#e5a77e", ...c }, D = qu(S), z = l, I = i, q = z / E, G = q / 2, rt = Math.PI * 2, at = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(E * 2)].map((wt, ot) => {
    const tt = at[Math.min(ot, at.length - 1)], _ = Gu(tt.cond), Z = ot % 2 === 1;
    return { cond: tt.cond, k: _, night: Z, sky: D[_][Z ? 1 : 0], cover: Vu[_] };
  }), j = (wt) => I * (0.5 - m * Math.cos(rt * (wt / q - 0.25)));
  return { C: S, S: K, W: z, H: I, cw: q, sw: G, TAU: rt, yb: j, side: (wt, ot, tt) => {
    const _ = (wt ? j(ot) - tt : tt - j(ot)) / Math.max(3, x * 1.4) + 0.5;
    return _ <= 0 ? 0 : _ >= 1 ? 1 : _;
  }, glowAt: (wt) => {
    const ot = ((wt / q - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(E - 1, Math.round(wt / q - 0.25))), _ = Math.max(0, Math.min(E - 1, Math.round(wt / q - 0.75))), Z = 1 - (K[2 * tt].cover + K[2 * _ + 1].cover) / 2, St = Math.sin(Math.PI * Math.min(1, Math.max(0, j(wt) / I)));
    return { c: ot < 0.5 ? S.dusk : S.dawn, a: k * (0.2 + 0.8 * Z) * St * St };
  }, soft: x, tw: q * 0.3, sy: I / 90 };
}
function Pp(n, { clock: l = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: m, sw: x, side: k, C: E, TAU: S, sy: D, H: z } = n, I = l, q = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((at, K) => {
    const j = Wd(c * 977 + K * 131 + 7), ft = (K + 0.5) * x, ht = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let wt = 0; wt < ht; wt++) {
      const ot = ft + (j() - 0.5) * x * 1.6, tt = (6 + j() * 76) * D, _ = j() < 0.35, Z = 1.8 + j() * 1.6, St = k(!0, ot, tt) * (_ ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * I / 2600 + wt * 1.7 + K) : 1);
      St >= 0.03 && q.stars.push({ x: ot, y: tt, big: _, size: Z, o: St });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const wt = ft + (j() - 0.5) * x * 0.3, ot = Math.min(15, x * 0.29);
      q.suns.push({ x: wt, y: 32 * D, rad: ot, halo: ot * 2.8 * (i ? 1 + 0.07 * Math.sin(S * I / 3600 + K) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const wt = Math.min(0.78, x * 0.55 / 34), ot = ft - 23 * wt + (j() - 0.5) * x * 0.2;
      q.moons.push({ x: ot + 23 * wt, y: (4 + (i ? 0.8 * Math.sin(S * I / 5200 + K) : 0)) * D + 23 * wt, d: 46 * wt });
    }
  });
  const G = Math.max(56, Math.min(100, z * 0.45)), rt = Math.max(1, x / (G * 2.4));
  return m.forEach((at, K) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!j) return;
    const ft = at.k === "partly" ? 1 : Math.round(j * rt), ht = Wd(c * 577 + K * 71 + 3), wt = (K + 0.5) * x, ot = at.k === "rain" || at.k === "storm" || at.night ? E.cloudNight : E.cloudDay, tt = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let _ = 0; _ < ft; _++) {
      const Z = G / 46 * (at.k === "partly" ? 1 : 0.8 + ht() * 0.4), St = wt + (at.k === "partly" ? x * 0.12 : ((_ + 0.5) / ft - 0.5) * x * 0.95 + (ht() - 0.5) * x * 0.5 / ft), et = (at.k === "partly" ? 40 : 6 + ht() * 26) * D, ct = i ? 2.5 * Math.sin(S * I / 9e3 + K * 1.3 + _ * 2.1) : 0, nt = i ? 0.9 * Math.sin(S * I / 6100 + K + _) : 0;
      q.clouds.push({ x: St - 23 * Z + ct, y: et - 15.33 * Z + nt, w: 46 * Z, h: 30.66 * Z, fill: ot, o: tt * (ft > 1 && _ === 0 ? 0.85 : 1) });
    }
  }), m.forEach((at, K) => {
    const j = Wd(c * 313 + K * 29 + 11), ft = (K + 0.5) * x, ht = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let ot = 0; ot < ht; ot++) {
      let tt = ft + (j() - 0.5) * x * 1.05, _ = 44 + j() * 36, Z = 1;
      if (i) {
        const et = ((_ - 44 + I * 0.04) % 36 + 36) % 36;
        tt -= 0.21 * (et - (_ - 44)), _ = 44 + et, Z = Math.min(1, et / 6, (36 - et) / 6);
      }
      _ *= D;
      const St = k(at.night, tt, _) * Z;
      St >= 0.05 && q.drops.push({ x: tt, y: _, o: St });
    }
    const wt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let ot = 0; ot < wt; ot++) {
      let tt = ft + (j() - 0.5) * x * 1.05, _ = 40 + j() * 44, Z = 1;
      if (i) {
        const et = ((_ - 40 + I * 9e-3) % 44 + 44) % 44;
        _ = 40 + et, tt += 1.6 * Math.sin(S * I / 2800 + ot * 1.9 + K), Z = Math.min(1, et / 6, (44 - et) / 6);
      }
      _ *= D;
      const St = k(at.night, tt, _) * Z;
      St >= 0.05 && q.flakes.push({ x: tt, y: _, o: St });
    }
    if (at.k === "fog") {
      const ot = at.night ? "#c8ccd6" : "#ffffff", tt = at.night ? 0.28 : 0.62, _ = i ? 4 * Math.sin(S * I / 8e3 + K) : 0;
      for (let Z = 0; Z < 4; Z++) q.fogs.push({ x: ft - x * 0.75 + Z % 2 * x * 0.18 + (Z % 2 ? _ : -_), y: (30 + Z * 13) * D, w: x * 1.3, c: ot, a: tt });
    }
    if (at.k === "storm") {
      const ot = (I / 3400 + K * 0.37) % 1;
      q.bolts.push({ x: ft + (j() - 0.5) * x * 0.3 - 5, y: 36 * D, o: i && !(ot < 0.05 || ot > 0.09 && ot < 0.12) ? 0.8 : 1 });
    }
  }), q;
}
function Ju(n, l, i, c, m, x, k, E) {
  const { S, C: D, cw: z, yb: I, glowAt: q, soft: G, tw: rt, sy: at } = n, K = new Array(i * c), j = new Uint8Array(i * c), ft = new Uint8Array(i * c), ht = (T, R, B, W, kt) => {
    B == null || T < 0 || R < 0 || T >= i || R >= c || (W >= 1 || W > ki(T + 5, R + 3)) && (K[R * i + T] = B, j[R * i + T] = kt);
  }, wt = (T, R, B, W) => {
    for (let kt = Math.max(0, Math.floor(R - B) - 1); kt <= Math.min(c - 1, R + B + 1); kt++) for (let xt = Math.max(0, Math.floor(T - B) - 1); xt <= Math.min(i - 1, T + B + 1); xt++) W(xt, kt, xt + 0.5 - T, kt + 0.5 - R);
  }, ot = (T, R, B) => {
    for (let kt = 0; kt < T.length - 1; kt++) {
      const xt = (kt + R) * z;
      if (B < xt - rt / 2) return [T[kt], T[kt], 0];
      if (B <= xt + rt / 2) return [T[kt], T[kt + 1], (B - xt + rt / 2) / rt];
    }
    const W = T[T.length - 1];
    return [W, W, 0];
  }, tt = S.filter((T) => !T.night).map((T) => T.sky), _ = S.filter((T) => T.night).map((T) => T.sky), Z = G / x, St = 16 * at / x;
  for (let T = 0; T < i; T++) {
    const R = (T + 0.5) * m, B = I(R) / x, W = ot(tt, 0.75, R), kt = ot(_, 1.25, R), xt = q(R);
    for (let J = 0; J < c; J++) {
      const Mt = ki(T, J), Ct = J + 0.5 - B, Jt = (Z > 0.01 ? Si(0.5 + Ct / Z) : Ct > 0 ? 1 : 0) > Mt;
      let ie = Jt ? W[2] > Mt ? W[1] : W[0] : kt[2] > Mt ? kt[1] : kt[0];
      (Jt ? Si(((J + 0.5) / c - 0.45) / 0.55) * 0.7 : Si(1 - (J + 0.5) / (c * 0.55)) * 0.7) > ki(T + 2, J + 5) && (ie = Jt ? oo(ie, "#ffffff", 0.18) : oo(ie, "#000000", 0.25)), Jt && Ct >= 0 && Ct < St && xt.a * 1.3 * (1 - Ct / St) > ki(T + 6, J + 1) && (ie = xt.c), K[J * i + T] = ie, ft[J * i + T] = Jt ? 0 : 1;
    }
  }
  const et = oo(D.sun, "#ffffff", 0.55), ct = oo(D.moon, "#ffffff", 0.6);
  l.stars.forEach((T) => {
    const R = Math.floor(T.x / m), B = Math.floor(T.y / x);
    if (R < 0 || B < 0 || R >= i || B >= c || !ft[B * i + R] || T.o < 0.15) return;
    const W = T.o > 0.45 ? D.star : oo(D.star, K[B * i + R], 0.5), kt = T.big && T.o > 0.6 ? Math.floor(T.size / m) : 0;
    ht(R, B, W, 1, pc);
    for (let xt = 1; xt <= kt; xt++) [[R - xt, B], [R + xt, B], [R, B - xt], [R, B + xt]].forEach((J) => {
      J[0] >= 0 && J[1] >= 0 && J[0] < i && J[1] < c && ft[J[1] * i + J[0]] && ht(J[0], J[1], W, 1, pc);
    });
  }), l.suns.forEach((T) => {
    const R = Math.max(1.5, T.rad / m), B = T.x / m, W = T.y / x, kt = T.halo / m * 0.85;
    if (wt(B, W, kt, (xt, J, Mt, Ct) => {
      const Jt = Math.sqrt(Mt * Mt + Ct * Ct);
      Jt > R && Jt < kt && !ft[J * i + xt] && ht(xt, J, et, 0.3 * (1 - (Jt - R) / (kt - R)), 0);
    }), E) {
      const xt = Math.floor(k / 500) % 2, J = Math.max(1, R * 0.3);
      for (let Mt = 0; Mt < 8; Mt++) if (Mt % 2 === xt) for (let Ct = R + 1.2; Ct < R + 1.2 + J; Ct += 0.7) ht(Math.floor(B + Math.cos(Mt * Math.PI / 4) * Ct), Math.floor(W + Math.sin(Mt * Math.PI / 4) * Ct), D.sun, 1, Bp);
    }
    wt(B, W, R, (xt, J, Mt, Ct) => {
      Mt * Mt + Ct * Ct <= R * R && ht(xt, J, Si(((Ct / R + 1) / 2 - 0.6) / 0.4) > ki(xt, J) ? D.sunEdge : D.sun, 1, Ap);
    });
  }), l.moons.forEach((T) => {
    const R = Math.max(1.5, T.d * 0.37 / m), B = T.x / m, W = T.y / x, kt = B + 0.547 * R, xt = W - 0.503 * R, J = 0.82 * R;
    wt(B, W, R, (Mt, Ct, Jt, ie) => {
      if (Jt * Jt + ie * ie > R * R) return;
      const na = Mt + 0.5 - kt, ye = Ct + 0.5 - xt;
      na * na + ye * ye > J * J && ht(Mt, Ct, Si((ie + R) / (2 * R) * 1.1 - 0.1) > ki(Mt, Ct) ? D.moon : ct, 1, Ep);
    });
  }), l.clouds.forEach((T) => {
    const R = Math.max(3, T.w / m), B = R * 0.6665, W = T.x / m, kt = T.y / x, xt = oo(T.fill, "#000000", 0.16);
    for (let J = Math.max(0, Math.floor(kt) - 1); J <= Math.min(c - 1, kt + B + 1); J++) for (let Mt = Math.max(0, Math.floor(W) - 1); Mt <= Math.min(i - 1, W + R + 1); Mt++) {
      const Ct = (Mt + 0.5 - W) / R, Jt = (J + 0.5 - kt) / R;
      Tc(Ct, Jt) && ht(Mt, J, !Tc(Ct, Jt + 1 / R) || Si((Jt - 0.42) / 0.25) * 0.8 > ki(Mt, J) ? xt : T.fill, T.o, _p);
    }
  }), l.fogs.forEach((T) => {
    const R = Math.floor(T.y / x), B = Math.max(R, Math.floor((T.y + 6 * at) / x) - 1), W = Math.floor(T.x / m), kt = Math.floor((T.x + T.w) / m);
    for (let xt = R; xt <= B; xt++) for (let J = W; J <= kt; J++) {
      const Mt = (J - W) / Math.max(1, kt - W);
      ht(J, xt, T.c, T.a * (Mt < 0.25 ? Mt / 0.25 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1), 0);
    }
  });
  const nt = Math.max(2, Math.round(9 / x));
  l.drops.forEach((T) => {
    const R = T.x / m, B = Math.floor(T.y / x);
    for (let W = 0; W < nt; W++) ht(Math.floor(R - 0.208 * W * x / m), B + W, D.rain, T.o, Dp);
  });
  const qt = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((T) => {
    const R = Math.floor(T.x / m), B = Math.floor(T.y / x);
    ht(R, B, D.snow, T.o, Fs);
    for (let W = 1; W <= qt; W++)
      ht(R - W, B, D.snow, T.o, Fs), ht(R + W, B, D.snow, T.o, Fs), ht(R, B - W, D.snow, T.o, Fs), ht(R, B + W, D.snow, T.o, Fs);
  }), l.bolts.forEach((T) => {
    if (m <= 3.5)
      for (let R = Math.floor(T.y / x); R <= (T.y + 24) / x; R++) for (let B = Math.floor(T.x / m); B <= (T.x + 11) / m; B++)
        ju($u, (B + 0.5) * m - T.x, (R + 0.5) * x - T.y) && ht(B, R, D.sun, 1, bd);
    else {
      const R = Math.round(T.x / m), B = Math.round(T.y / x);
      Xu.forEach((W, kt) => W.split("").forEach((xt, J) => {
        xt === "#" && ht(R + J, B + kt, D.sun, 1, bd);
      }));
    }
  }), { col: K, ids: j };
}
function Qu(n, l) {
  const i = l.px, c = Math.max(6, Math.round(l.width / i)), m = Math.max(6, Math.round(l.height / i)), x = l.width / c, k = l.height / m, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, S = (G) => {
    const rt = Rp(G, l);
    return Ju(rt, Pp(rt, { clock: E, ambient: l.ambient, seed: l.seed }), c, m, x, k, E, l.ambient);
  }, D = S(n), z = l.reveal == null ? 1 : Si(l.reveal);
  let I = D.col, q = D.ids;
  if (z < 1) {
    const G = l.prev ? S(l.prev) : null, rt = z * (c + 12);
    I = new Array(c * m), q = new Uint8Array(c * m);
    for (let at = 0; at < c * m; at++) {
      const K = at % c, j = at / c | 0;
      (l.reduce ? z : Si((rt - K) / 12)) > ki(K, j) ? (I[at] = D.col[at], q[at] = D.ids[at]) : G ? (I[at] = G.col[at], q[at] = G.ids[at]) : (I[at] = null, q[at] = 255);
    }
  }
  return zu(I, q, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function tf(n, l, i) {
  const c = i.width, m = i.height, x = i.reveal == null ? 1 : Si(i.reveal), k = (q, G) => {
    const rt = Rp(G, i);
    ef(q, rt, Pp(rt, i));
  };
  if (n.clearRect(0, 0, c, m), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const E = n.canvas, S = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (S.width !== E.width || S.height !== E.height) && (S.width = E.width, S.height = E.height);
  const D = S.getContext("2d");
  D.setTransform(n.getTransform()), D.clearRect(0, 0, c, m), k(D, l);
  const z = x * (c + 64) - 64, I = D.createLinearGradient(z, 0, z + 64, 0);
  I.addColorStop(0, "rgba(0,0,0,1)"), I.addColorStop(1, "rgba(0,0,0,0)"), D.globalCompositeOperation = "destination-in", D.fillStyle = I, D.fillRect(0, 0, c, m), D.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function ef(n, l, i) {
  const { W: c, H: m, S: x, C: k, cw: E, yb: S, glowAt: D, soft: z, tw: I, sy: q } = l, G = n.getTransform().a || 1, rt = (nt) => {
    n.shadowColor = nt ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = nt ? 4 * G : 0, n.shadowOffsetY = nt ? 1.5 * G : 0;
  }, at = (nt, qt) => {
    const T = hd(nt);
    return "rgba(" + T[0] + "," + T[1] + "," + T[2] + "," + Math.max(0, Math.min(1, qt)).toFixed(3) + ")";
  }, K = (nt, qt) => {
    const T = n.createLinearGradient(0, 0, c, 0);
    T.addColorStop(0, nt[0]);
    for (let R = 0; R < nt.length - 1; R++) {
      const B = (R + qt) * E, W = (B - I / 2) / c, kt = (B + I / 2) / c;
      W > 0 && W < 1 && T.addColorStop(W, nt[R]), kt > 0 && kt < 1 && T.addColorStop(kt, nt[R + 1]);
    }
    return T.addColorStop(1, nt[nt.length - 1]), T;
  }, j = Math.max(24, Math.ceil(c / 4)), ft = (nt, qt) => {
    n.beginPath();
    for (let T = 0; T <= j; T++) {
      const R = c * T / j, B = nt == null ? 0 : S(R) + nt;
      T ? n.lineTo(R, B) : n.moveTo(R, B);
    }
    for (let T = j; T >= 0; T--) {
      const R = c * T / j;
      n.lineTo(R, S(R) + qt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = K(x.filter((nt) => !nt.night).map((nt) => nt.sky), 0.75), n.fillRect(0, 0, c, m);
  const ht = n.createLinearGradient(0, 0, c, 0);
  for (let nt = 0; nt <= 64; nt++) {
    const qt = D(c * nt / 64);
    ht.addColorStop(nt / 64, at(qt.c, Math.min(1, qt.a)));
  }
  n.fillStyle = ht;
  for (let nt = 0; nt < 8; nt++)
    n.globalAlpha = 1 - nt / 8, ft(nt * 2 * q, (nt + 1) * 2 * q);
  n.fillStyle = K(x.filter((nt) => nt.night).map((nt) => nt.sky), 1.25);
  const wt = Math.max(0.5, z), ot = 6;
  n.globalAlpha = 1, ft(null, -wt);
  for (let nt = 0; nt < ot; nt++)
    n.globalAlpha = 1 - (nt + 0.5) / ot, ft(-wt + 2 * wt * nt / ot, -wt + 2 * wt * (nt + 1) / ot);
  n.globalAlpha = 1;
  const tt = new Path2D(Zu), _ = new Path2D(Yu), Z = new Path2D(Uu), St = new Path2D(Ku);
  n.fillStyle = k.star, i.stars.forEach((nt) => {
    n.globalAlpha = nt.o, nt.big ? (n.save(), n.translate(nt.x, nt.y), n.scale(nt.size, nt.size), n.fill(tt), n.restore()) : (n.beginPath(), n.arc(nt.x, nt.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const et = oo(k.sun, "#ffffff", 0.55);
  i.suns.forEach((nt) => {
    const qt = n.createRadialGradient(nt.x, nt.y, 0, nt.x, nt.y, nt.halo);
    qt.addColorStop(0, at(et, 0.42)), qt.addColorStop(0.7, at(et, 0)), n.fillStyle = qt, n.beginPath(), n.arc(nt.x, nt.y, nt.halo, 0, Math.PI * 2), n.fill();
    const T = n.createLinearGradient(0, nt.y - nt.rad, 0, nt.y + nt.rad);
    T.addColorStop(0.6, k.sun), T.addColorStop(1, k.sunEdge), n.fillStyle = T, rt(!0), n.beginPath(), n.arc(nt.x, nt.y, nt.rad, 0, Math.PI * 2), n.fill(), rt(!1);
  });
  const ct = oo(k.moon, "#ffffff", 0.6);
  i.moons.forEach((nt) => {
    n.save(), n.translate(nt.x - nt.d / 2, nt.y - nt.d / 2), n.scale(nt.d / 46, nt.d / 46);
    const qt = n.createLinearGradient(0, 6, 0, 40);
    qt.addColorStop(0, ct), qt.addColorStop(1, k.moon), n.fillStyle = qt, rt(!0), n.fill(_), rt(!1), n.restore();
  }), i.clouds.forEach((nt) => {
    n.save(), n.globalAlpha = nt.o, n.translate(nt.x, nt.y), n.scale(nt.w / 46, nt.h / 30.66), n.translate(-4, -9.67), n.fillStyle = nt.fill, rt(!0), n.fill(Z), rt(!1), n.restore();
  }), i.fogs.forEach((nt) => {
    const qt = n.createLinearGradient(nt.x, 0, nt.x + nt.w, 0);
    qt.addColorStop(0, at(nt.c, 0)), qt.addColorStop(0.25, at(nt.c, nt.a)), qt.addColorStop(0.75, at(nt.c, nt.a)), qt.addColorStop(1, at(nt.c, 0)), n.fillStyle = qt, n.fillRect(nt.x, nt.y, nt.w, 6 * q);
  }), n.fillStyle = k.rain, i.drops.forEach((nt) => {
    n.save(), n.globalAlpha = nt.o, n.translate(nt.x, nt.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((nt) => {
    n.globalAlpha = nt.o, n.beginPath(), n.arc(nt.x, nt.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((nt) => {
    n.save(), n.globalAlpha = nt.o, n.translate(nt.x, nt.y), n.fill(St), n.restore();
  }), n.restore();
}
const af = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Ns = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, od = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, jd = (n, l) => '<path class="' + l + '" d="' + n + '"/>', nf = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', ao = (n, l, i, c) => {
  const m = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + nf(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + m) + " " + (l - m) + "L" + (n + i) + " " + l + "L" + (n + m) + " " + (l + m) + "L" + n + " " + (l + i) + "L" + (n - m) + " " + (l + m) + "L" + (n - i) + " " + l + "L" + (n - m) + " " + (l - m) + 'Z"/>';
}, Lc = ([n, l, i], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', of = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', rf = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), sf = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function lf(n, l, i, c) {
  const m = (x) => '<g filter="url(#' + c + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? m(Lc(i ? od.l : od.s, c)) + (i ? ao(70, 20, 5.83, 1) + ao(78.33, 41.67, 3.75, 0.8) + ao(60, 71.67, 3.33, 0.6) : ao(42, 12, 3.5, 1) + ao(47, 25, 2.25, 0.8) + ao(36, 43, 2, 0.6)) : m(of(c, i)) : n === "partly" ? m(l ? Lc(i ? od.lp : od.sp, c) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(jd(i ? Ns.lp : Ns.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? ao(73.33, 16.67, 4.17, 0.9) : ao(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(jd(i ? Ns.lc : Ns.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? ao(15, 15, 3.75, 0.8) + ao(76.67, 13.33, 2.92, 0.6) : ao(9, 9, 2.25, 0.8) + ao(46, 8, 1.75, 0.6) : "") : m(jd(i ? Ns.lr : Ns.s, "wbCloudLight")) + (n === "rain" ? rf(i) : sf(i));
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
], id = (n, l) => (pf[l % 8 * 8 + n % 8] + 0.5) / 64, Lo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Qa = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], yl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ac = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Yr = [255, 255, 255], bn = Lo("#26221e"), Ec = Lo("#0288d1"), uf = Lo("#01579b"), zd = Lo(Mn.cloudDay), Vd = Lo(Mn.cloudNight), rd = Lo(Mn.dusk), Gd = Lo(Mn.sunEdge), ff = Lo(Mn.sun), hf = 10, _c = 0.3, Ci = 56, Np = 21;
function mf(n) {
  const l = Array.from({ length: Np }, () => new Array(Ci).fill(void 0)), i = (k, E, S) => {
    l[E][k] = S;
  }, c = Qa(rd, bn, 0.35), m = Qa(bn, Yr, 0.22);
  for (let k = 0; k <= 6; k++) {
    const E = k < 2 ? Ci - 2 : Ci - 1;
    for (let S = 6 - k; S <= E; S++) i(S, k, k < 2 ? c : k === 6 ? m : bn);
  }
  const x = [rd, Gd, Vd, Lo(Mn.skyRainDay), Qa(rd, bn, 0.2), Qa(n, bn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, E) => {
    const S = 9 + E * 6;
    for (let D = 0; D < k; D++) {
      const z = x[(E * 2 + D * 3) % x.length];
      for (let I = S; I < S + 5; I++)
        i(I, 7 + D * 2, Qa(z, bn, 0.12)), i(I, 8 + D * 2, D === k - 1 ? Qa(z, Yr, 0.3) : z);
      i(S + 5, 7 + D * 2, bn), i(S + 5, 8 + D * 2, bn);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, bn);
  i(5, 13, Gd);
  for (let k = 7; k <= 14; k++) for (let E = 42; E <= 51; E++) i(E, k, E === 51 ? Vd : zd);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, bn), i(k, 9, Qa(bn, zd, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? Vd : zd);
  for (let k = 15; k <= 18; k++) for (let E = 46; E <= 49; E++) i(E, k, k === 18 ? bn : k === 16 ? Gd : rd);
  for (let k = 15; k <= 19; k++) i(44, k, bn);
  return i(44, 20, ff), l;
}
function gf(n, l, i, c) {
  const m = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(m * x * 4), E = Lo(c.skyClearDay), S = Lo(c.skyFogDay), D = mf(E), z = Math.round(x * 0.55), I = yl(1 - Math.log(i / _c) / Math.log(hf / _c)), q = Qa(E, S, I), G = (j) => yl((j - 0.1) / 0.9), rt = yl((1 - Math.exp(-2 / i) - 0.2) / 0.8), at = Math.round(m / 2 - Ci / 2), K = z + 3;
  for (let j = 0; j < x; j++) {
    const ft = K - 1 - j, ht = j - K;
    for (let wt = 0; wt < m; wt++) {
      const ot = wt - at;
      let tt, _;
      const Z = ft >= 0 && ft < Np && ot >= 0 && ot < Ci ? D[ft][ot] : void 0;
      if (Z)
        tt = Z, _ = rt;
      else if (ft >= 0 && ft <= 1 && ot >= 4 - ft && ot <= 5 - ft)
        tt = Qa(Yr, Ec, 0.15), _ = rt;
      else if (j < z) {
        const ct = yl(((j + 0.5) / z - 0.15) / 0.85) * 3, nt = Math.min(3, Math.floor(ct + id(wt + 2, j + 5)));
        tt = Qa(q, Yr, nt * 0.1), _ = I * 0.95;
      } else {
        const ct = (j - z + 0.5) / (x - z), nt = Math.min(1.5, 6e-3 / (ct * ct)), qt = yl(ct * 1.4) * 3, T = Math.min(3, Math.floor(qt + id(wt + 1, j + 6)));
        tt = Qa(Ec, uf, T / 3);
        const R = 1 + Math.round(ct * 7), B = Math.floor(wt / (R * 3)), W = 0.06 + 0.16 * ct, kt = wt % (R * 3) < R;
        kt && Ac(B, j) < W ? tt = Qa(tt, Yr, 0.18 + 0.1 * (1 - ct)) : kt && ct > 0.5 && Ac(B, j - 1) < W && (tt = Qa(tt, bn, 0.12)), _ = G(1 - Math.exp(-nt / i)), ht === 0 && ot >= 3 && ot <= 8 ? (tt = Qa(tt, Yr, ot < 6 ? 0.8 : 0.45), _ = rt) : ht >= 0 && ht <= 2 && ot >= Ci && ot < Ci + 40 ? ((1 - (ot - Ci) / 40) * (ht === 1 ? 0.9 : 0.5) > id(wt, j + 3) && (tt = Qa(tt, Yr, 0.5)), _ = rt) : ht === 0 && ot >= 6 && ot < Ci && (tt = Qa(tt, bn, ot % 2 === 0 ? 0.35 : 0.2), _ = rt);
      }
      const St = _ > id(wt, j) ? S : tt, et = (j * m + wt) * 4;
      k[et] = St[0], k[et + 1] = St[1], k[et + 2] = St[2], k[et + 3] = 255;
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
}, Ve = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, tn = () => {
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
    ["--pv-ease", Ve[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", Ve[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Ve[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", c.cdur + "ms"],
    ["--wc-delay", c.cdelay + "ms"],
    ["--wc-ease", Ve[c.ease]],
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
const Ud = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Mf = "#homeView .tfAreaPanel", Sf = 300, md = (n) => Math.min(1, Sf / Math.max(1, n)), Yd = (n, l) => 1 + (l / 100 - 1) * md(n.offsetWidth);
function Cf(n, l) {
  l.style.cssText += ";" + kf();
  let i = null;
  const c = (z) => {
    z.classList.remove("mvMoving", "mvLit"), z.style.setProperty("--rx", "0deg"), z.style.setProperty("--ry", "0deg"), z.style.setProperty("--sc", 1), z._down = !1;
  };
  n.addEventListener("pointermove", (z) => {
    var j, ft;
    const I = z.pointerType === "touch" || tn() ? null : (ft = (j = z.target).closest) == null ? void 0 : ft.call(j, Ud);
    if (i && i !== I && c(i), i = I, !I || I.disabled) return;
    const q = aa.pivot, G = I.getBoundingClientRect(), rt = (z.clientX - G.left) / G.width, at = (z.clientY - G.top) / G.height, K = 1;
    I.classList.add("mvPv", "mvMoving", "mvLit"), I.style.setProperty("--pv-persp", q.persp / md(Math.max(I.offsetWidth, I.offsetHeight)) + "px"), I.style.setProperty("--ry", (K * (rt - 0.5) * 2 * q.tilt * md(I.offsetWidth)).toFixed(3) + "deg"), I.style.setProperty("--rx", (K * -(at - 0.5) * 2 * q.tilt * md(I.offsetHeight)).toFixed(3) + "deg"), I.style.setProperty("--mx", (rt * 100).toFixed(1) + "%"), I.style.setProperty("--my", (at * 100).toFixed(1) + "%"), I._down || I.style.setProperty("--sc", Yd(I, q.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (z) => {
    i && !i.contains(z.relatedTarget) && (c(i), i = null);
  }), n.addEventListener("pointerdown", (z) => {
    var q, G;
    const I = tn() ? null : (G = (q = z.target).closest) == null ? void 0 : G.call(q, Ud);
    I && (I._down = !0, I.classList.add("mvPv"), I.classList.remove("mvMoving"), I.style.setProperty("--sc", Yd(I, aa.pivot.press)));
  }), n.addEventListener("pointerup", (z) => {
    var q, G;
    const I = (G = (q = z.target).closest) == null ? void 0 : G.call(q, Ud);
    I && (I._down = !1, I.style.setProperty("--sc", z.pointerType === "touch" ? 1 : Yd(I, aa.pivot.lift)));
  });
  let m = null;
  n.addEventListener("pointerover", (z) => {
    var I, q, G;
    z.pointerType !== "touch" && ((G = (q = (I = z.target).closest) == null ? void 0 : q.call(I, ".tfBar")) == null || G.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (z) => {
    var q, G;
    const I = (G = (q = z.target).closest) == null ? void 0 : G.call(q, ".tfBar");
    I && !I.contains(z.relatedTarget) && I !== m && I.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (z) => {
    var q, G;
    const I = (G = (q = z.target).closest) == null ? void 0 : G.call(q, ".tfBar");
    I && (m = I, I.classList.add("mvHold"));
  });
  const x = (z) => {
    if (!m) return;
    m.classList.remove("mvHold");
    const I = m.getBoundingClientRect();
    (z.pointerType === "touch" || z.clientX < I.left || z.clientX > I.right || z.clientY < I.top || z.clientY > I.bottom) && m.classList.remove("mvHover"), m = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), n.addEventListener("focusin", (z) => {
    var I, q;
    (q = (I = z.target).matches) != null && q.call(I, ".tfBar:focus-visible") && z.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (z) => {
    var I;
    (I = z.target.classList) == null || I.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (z) => {
    var q, G;
    const I = (G = (q = z.target).closest) == null ? void 0 : G.call(q, ".tfBar");
    !I || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(z.key) || (I.classList.add("mvHold"), clearTimeout(I._k), I._k = setTimeout(() => I.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (z) => {
    var q, G;
    const I = (G = (q = z.target).closest) == null ? void 0 : G.call(q, "button.tfIcon[data-act]");
    I && Tf(I);
  });
  let k = null;
  const E = (z, I, q) => {
    z.querySelector(":scope>.mvEdge") || z.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const G = z.getBoundingClientRect(), rt = G.width / 2, at = G.height / 2, K = I.clientX - G.left - rt, j = I.clientY - G.top - at, ft = K ? rt / Math.abs(K) : 1 / 0, ht = j ? at / Math.abs(j) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(ft, ht), 0), 1);
    let ot = Math.atan2(j, K) * 180 / Math.PI + 90;
    ot < 0 && (ot += 360);
    const tt = q ? 100 : wt * 100;
    z.style.setProperty("--edge-proximity", tt.toFixed(3)), z.style.setProperty("--cursor-angle", ot.toFixed(3) + "deg"), z.classList.toggle("mvLitEdge", q || tt >= aa.outline.lightAt);
  }, S = (z) => {
    z.classList.remove("mvLitEdge"), z.style.setProperty("--edge-proximity", "0"), z._down = !1;
  }, D = (z) => {
    var q;
    const I = (q = z.closest) == null ? void 0 : q.call(z, Mf);
    return I && !l.classList.contains("tfEditing") ? I : null;
  };
  n.addEventListener("pointermove", (z) => {
    if (z.pointerType === "touch") return;
    const I = D(z.target);
    k && k !== I && S(k), k = I, I && !I._down && E(I, z, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (z) => {
    k && !k.contains(z.relatedTarget) && (S(k), k = null);
  }), n.addEventListener("pointerdown", (z) => {
    const I = D(z.target);
    I && aa.outline.press && (I._down = !0, E(I, z, !0));
  }), n.addEventListener("pointerup", (z) => {
    const I = D(z.target);
    I && (I._down = !1, z.pointerType === "touch" ? S(I) : E(I, z, !1));
  }), new MutationObserver((z) => {
    var I;
    for (const q of z) {
      const G = q.target;
      if (q.type === "attributes") {
        (I = G.classList) != null && I.contains("tfMoreBackdrop") && !G.hidden && q.oldValue !== null && Dc(G);
        continue;
      }
      q.addedNodes.forEach((rt) => {
        rt.nodeType === 1 && rt.classList.contains("tfMoreBackdrop") && !rt.hidden && Dc(rt);
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
  const m = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), E = Ip(n), S = (G = E.dataset) == null ? void 0 : G.k, D = Hp(n, E), z = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const I = c.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...m, filter: x }], { duration: l.win, easing: Ve.exit, fill: "forwards" }), q = performance.now();
  I.finished.then(() => {
    const rt = () => {
      var wt, ot;
      const at = S ? E.isConnected ? E : (wt = k.querySelector) == null ? void 0 : wt.call(k, '[data-k="' + CSS.escape(S) + '"]') : E, K = at && Fp(at, D);
      if (K === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === z && performance.now() - q < 420) {
        requestAnimationFrame(rt);
        return;
      }
      (((ot = K == null ? void 0 : K.matches) != null && ot.call(K, "button.tfIcon") ? K : n).firstElementChild || c).animate([{ ...m, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: Ve[l.ease] }), I.cancel(), n._warp = 0;
    };
    rt();
  });
}
function Lf(n, l, i) {
  var z;
  if (tn() || !n || !l) return;
  const c = aa.expand, m = n.getBoundingClientRect(), x = "inset(" + (l.top - m.top).toFixed(1) + "px " + (m.right - l.right).toFixed(1) + "px " + (m.bottom - l.bottom).toFixed(1) + "px " + (l.left - m.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, E = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), S = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: c.dur, easing: Ve[c.ease] });
  const D = (z = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : z.getBoundingClientRect();
  k && D && i && k.animate([{ transform: "translate(" + (i.left - D.left).toFixed(1) + "px," + (i.top - D.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: c.dur, easing: Ve[c.ease] }), E == null || E.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: c.dur, easing: Ve[c.ease] }), S.forEach((I, q) => {
    I.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: c.delay + q * c.stagger, easing: Ve.standard, fill: "backwards" });
  });
}
function Af(n, l, i) {
  if (tn() || !n || !l) {
    i();
    return;
  }
  const c = aa.expand, m = c.dur * c.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((z) => z.animate([{ opacity: 1 }, { opacity: 0 }], { duration: m * 0.3, easing: Ve.standard, fill: "forwards" }));
  const E = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: m, easing: Ve.standard, fill: "forwards" });
  let S = !1;
  const D = () => {
    S || (S = !0, i());
  };
  E.finished.then(D, D), setTimeout(D, m + 80);
}
const Op = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const c = n[i - 1] || n[i], m = n[i], x = n[i + 1], k = n[i + 2] || x, E = [m[0] + (x[0] - c[0]) / 6, m[1] + (x[1] - c[1]) / 6], S = [x[0] - (k[0] - m[0]) / 6, x[1] - (k[1] - m[1]) / 6];
    l += "C" + E.map((D) => D.toFixed(1)).join(" ") + " " + S.map((D) => D.toFixed(1)).join(" ") + " " + x.map((D) => D.toFixed(1)).join(" ");
  }
  return l;
}, qp = (n, l, i, c = "mvGrid") => [0, 1, 2].map((m) => {
  const x = (l + (i - l) * m / 2).toFixed(1);
  return '<line class="' + c + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function Wp(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (tn() || !(l != null && l.getTotalLength)) return;
  const c = aa.graphs, m = l.getTotalLength();
  l.animate([{ strokeDasharray: m, strokeDashoffset: m }, { strokeDasharray: m, strokeDashoffset: 0 }], { duration: c.draw, easing: Ve.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: c.draw * 0.6, delay: c.draw * 0.3 + k * 12, easing: Ve.standard, fill: "backwards" }));
}
function jp(n, l, i, c, m) {
  if (n.getAnimations().forEach((z) => z.cancel()), n.style.left = c + "px", n.style.width = m + "px", tn() || l === c && i === m) return;
  const x = aa.tabs, k = x.stretch / 100, E = (z, I) => ({ left: z + "px", width: I + "px" }), D = c > l ? E(l + (c - l) * (0.15 * (1 - k)), c + m - (l + (c - l) * (0.15 * (1 - k)))) : E(c, l + i - c - (l - c) * (0.15 * (1 - k)));
  n.animate([E(l, i), { offset: 0.5, ...D }, E(c, m)], { duration: x.dur, easing: Ve.standard });
}
function Ef(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (m) => m.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), c = (m, x) => x ? [...m.children].indexOf(x) : -1;
  n.addEventListener("click", (m) => {
    var ft, ht, wt;
    const x = (ht = (ft = m.target).closest) == null ? void 0 : ht.call(ft, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || tn() || x.disabled) return;
    const E = i(k);
    if (!E || E === x) return;
    const S = c(k, E), D = k.getBoundingClientRect(), z = E.getBoundingClientRect(), I = getComputedStyle(E).borderRadius, q = k.getRootNode(), G = Ip(k), rt = (wt = G.dataset) == null ? void 0 : wt.k, at = Hp(k, G), K = performance.now(), j = () => {
      var nt, qt, T;
      const ot = rt && !G.isConnected ? (nt = q.querySelector) == null ? void 0 : nt.call(q, '[data-k="' + CSS.escape(rt) + '"]') : G, tt = ot && Fp(ot, at), _ = (qt = tt == null ? void 0 : tt.matches) != null && qt.call(tt, l) ? i(tt) : null;
      if (!_ || c(tt, _) === S) {
        performance.now() - K < 700 && requestAnimationFrame(j);
        return;
      }
      const Z = tt.getBoundingClientRect(), St = _.getBoundingClientRect(), et = getComputedStyle(_);
      (T = tt.querySelector(":scope>.mvSegInd")) == null || T.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (St.top - Z.top - tt.clientTop) + "px;height:" + St.height + "px;border-radius:" + I + ";background:" + et.backgroundColor + ";box-shadow:" + et.boxShadow, getComputedStyle(tt).position === "static" && (tt.style.position = "relative"), tt.prepend(ct), tt.classList.add("mvSegMoving"), jp(ct, z.left - D.left - tt.clientLeft, z.width, St.left - Z.left - tt.clientLeft, St.width), clearTimeout(tt._seg), tt._seg = setTimeout(() => {
        ct.remove(), tt.classList.remove("mvSegMoving");
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
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Ve.standard }), l.style.animation = "none", l.animate(zp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Ve[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((m, x) => m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: Ve.standard, fill: "backwards" }));
}
function _f(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (tn() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const c = aa.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + c.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: c.close, easing: Ve.exit, fill: "forwards" });
  const m = i.animate(zp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + c.from / 100 + ")" }], { duration: c.close, easing: Ve.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((E) => E.cancel()), i.getAnimations().forEach((E) => E.cancel()), l());
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
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: Ve.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: Ve.standard, fill: "backwards" });
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
const Va = 6e4, De = 36e5, Rn = 864e5, Ml = 1440, Nf = 6, If = 10 * Va, Pc = 3, Hf = 3, sd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Ff = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Of = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Nc = (n, l, i, c) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const x = Math.cos(m * Math.PI / 180), k = Math.sin(m * Math.PI / 180), E = i + 2, S = i + 2 + c;
  return "M" + (n + x * E).toFixed(2) + " " + (l + k * E).toFixed(2) + "L" + (n + x * S).toFixed(2) + " " + (l + k * S).toFixed(2);
}).join("") + '"/>', wi = (n) => '<path d="' + Of + '"' + (n ? ' transform="' + n + '"' : "") + "/>", xi = (n) => '<path d="' + n + '"/>', Ic = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function qf(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Ic : Nc(12, 12, 4, 2.5);
    case "clear-night":
      return Ic;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Nc(7.5, 7.5, 2.6, 1.4)) + wi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return wi();
    case "fog":
      return xi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return wi(i) + xi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return wi(i) + xi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return wi(i) + xi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return wi(i) + xi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return wi(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return wi(i) + xi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return wi(i) + xi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return xi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + xi("M12 8v5M12 16h.01");
  }
}
const Zd = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + qf(n, l) + "</svg>", Wf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), jf = 30 * Va, zf = 7, Vf = 3, Hc = 1, Gf = Va, Uf = 15 * Va, Yf = 5, Be = {
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
}, At = {
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
}, Kf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], $f = Object.keys(At.phases), Xf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Fc = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Vp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ld = 100, Oc = "µg/m³", Jf = "weather_alerts.air_quality_pollen", wd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Qf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, th = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], eh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, ah = { daily: 1, hourly: 2 }, It = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Xa = (n, l) => n.replace(/\{(\w+)\}/g, (i, c) => l[c] ?? ""), Mi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', qc = /* @__PURE__ */ new Map();
function Gp(n) {
  let l = qc.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", c = document.createElementNS(i, "svg"), m = document.createElementNS(i, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), c.append(m), document.body.append(c);
    const x = m.getBBox();
    c.remove();
    const k = Math.max(x.width, x.height), E = k ? 26 * 24 / k : 0, S = E / 24;
    l = k ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * S).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * S).toFixed(2) + "px" : "", qc.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : Mi(n);
}
const nh = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ie = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Wc = /* @__PURE__ */ new Map(), jc = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new WeakMap(), oh = (n) => {
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
function xe(n, l, i) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...m ? { useGrouping: !1 } : {} }, k = m ? "en-US" : oh(l), E = JSON.stringify([k, x]);
  let S = Wc.get(E);
  if (!S) {
    try {
      S = new Intl.NumberFormat(k, x);
    } catch {
      S = new Intl.NumberFormat(void 0, x);
    }
    Wc.set(E, S);
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
const Ja = (n, l) => Yp(bc(l), { hour: "numeric", minute: "2-digit", hourCycle: ih(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Up(l) }).format(n), zc = (n, l) => Yp(bc(l), { weekday: "short", timeZone: Up(l) }).format(n), rh = (n, l) => n.toLocaleDateString(bc(l), { weekday: "narrow" }), Ke = (n, l) => Ie(l) ? xe(Math.round(Number(l)), n.locale) + "°" : "–", yr = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, Is = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), kn = Math.PI / 180, sh = 2440588, lh = 2451545, xd = kn * 23.4397, dh = 149598e3, ch = -0.833 * kn, ph = 0.133 * kn, Vc = 5 * Va, Zp = (n) => n.getTime() / Rn - 0.5 + sh - lh, Kp = (n, l) => Math.atan2(Math.sin(n) * Math.cos(xd) - Math.tan(l) * Math.sin(xd), Math.cos(n)), $p = (n, l) => Math.asin(Math.sin(l) * Math.cos(xd) + Math.cos(l) * Math.sin(xd) * Math.sin(n)), uh = (n, l) => kn * (280.16 + 360.9856235 * n) - l, fh = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function Xp(n) {
  const l = kn * (357.5291 + 0.98560028 * n), i = kn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + i + kn * 102.9372 + Math.PI;
  return { ra: Kp(c, 0), dec: $p(c, 0), dist: dh };
}
function Jp(n) {
  const l = kn * (218.316 + 13.176396 * n), i = kn * (134.963 + 13.064993 * n), c = kn * (93.272 + 13.22935 * n), m = l + kn * 6.289 * Math.sin(i), x = kn * 5.128 * Math.sin(c);
  return { ra: Kp(m, x), dec: $p(m, x), dist: 385001 - 20905 * Math.cos(i) };
}
const Qp = (n, l, i, c) => {
  const m = Zp(l), x = n(m);
  return fh(uh(m, kn * -c) - x.ra, kn * i, x.dec);
}, yd = (n, l, i) => Qp(Xp, n, l, i), hh = (n, l, i) => Qp(Jp, n, l, i);
function tu(n, l, i, c) {
  const m = {};
  let x = i.getTime(), k = n(i) - l;
  for (let E = x + Vc; E <= c.getTime(); E += Vc) {
    const S = n(new Date(E)) - l;
    if (k < 0 != S < 0) {
      const D = new Date(x + (E - x) * k / (k - S));
      S > 0 ? m.rise ?? (m.rise = D) : m.set ?? (m.set = D);
    }
    x = E, k = S;
  }
  return m;
}
const eu = (n) => {
  const l = yr(n);
  return [l, new Date(l.getTime() + Rn)];
}, mh = (n, l, i) => tu((c) => yd(c, l, i), ch, ...eu(n)), gh = (n, l, i) => tu((c) => hh(c, l, i), ph, ...eu(n));
function $d(n) {
  const l = Zp(n), i = Xp(l), c = Jp(l), m = Math.acos(Math.sin(i.dec) * Math.sin(c.dec) + Math.cos(i.dec) * Math.cos(c.dec) * Math.cos(i.ra - c.ra)), x = Math.atan2(i.dist * Math.sin(m), c.dist - i.dist * Math.cos(m)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - c.ra), Math.sin(i.dec) * Math.cos(c.dec) - Math.cos(i.dec) * Math.sin(c.dec) * Math.cos(i.ra - c.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const vh = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Sl = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Ie(l.latitude) && Ie(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Hs(n, l) {
  var D, z, I;
  const i = Sl(n), c = i ? mh(l, i.lat, i.lon) : {}, m = (D = n == null ? void 0 : n.states) == null ? void 0 : D["sun.sun"], x = yr(l).getTime(), k = (q) => {
    const G = q ? new Date(q) : null;
    return G && Number.isFinite(G.getTime()) && yr(G).getTime() === x ? G : null;
  }, E = k((z = m == null ? void 0 : m.attributes) == null ? void 0 : z.next_rising), S = k((I = m == null ? void 0 : m.attributes) == null ? void 0 : I.next_setting);
  return E && (c.rise = E), S && (c.set = S), c;
}
function bh(n) {
  var c;
  const l = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = Sl(n);
  return i ? yd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Zr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Os = (n, l) => {
  var c;
  const i = (c = n.entities) == null ? void 0 : c[l];
  return !i || !i.hidden && !i.entity_category;
}, sa = (n, l, i) => {
  var c, m;
  for (const x of l) {
    const k = (c = n.states) == null ? void 0 : c[x];
    if (!Zr(k)) continue;
    const E = (m = k.attributes) == null ? void 0 : m[i];
    if (E != null && E !== "") return { stateObj: k, value: E };
  }
}, wh = (n, l) => l.map((i) => {
  var c;
  return (c = n.states) == null ? void 0 : c[i];
}).find(Zr), xh = (n, l, i) => l.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return Zr(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & ah[i]);
});
function wr(n, l, i) {
  var x, k, E, S;
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
      return m.temperature_unit || ((S = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : S.temperature) || "";
  }
}
function gd(n, l, i, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...x] = n.formatEntityAttributeValueToParts(l, i, c).map((k) => k.value);
      return { number: m, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: xe(c, n.locale), unit: wr(n, l, i) };
}
function Gc(n, l, i, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, c);
  } catch {
  }
  const m = gd(n, l, i, c);
  return (m.number + " " + m.unit).trim();
}
function yi(n, l) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Zf[l.state] || (i && Ie(l.state) ? xe(l.state, n.locale) + " " + i : l.state);
}
function vr(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Uc = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", dd = (n) => Vp.find(([, l]) => n <= l)[0];
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
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && Os(n, l.entity_id);
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
    return c.entity_id.startsWith("sensor.") && wd.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && Os(n, c.entity_id) && au(n, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    i.has(c.attributes.device_class) || i.set(c.attributes.device_class, c.entity_id);
  }), wd.map((c) => i.get(c)).filter(Boolean);
}
const Sh = (n, l) => Object.values(n.states || {}).filter((i) => {
  var c, m;
  return i.entity_id.startsWith("sensor.") && Os(n, i.entity_id) && au(n, l, i.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[i.entity_id]) == null ? void 0 : m.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Kc(n, l, i) {
  const c = Math.max(l - n, 1e-6), m = i[i.length - 1], x = i.find((D) => c / D <= 4) ?? m * Math.ceil(c / (4 * m)), k = Math.floor(n / x) * x;
  let E = Math.ceil(l / x) * x;
  E === k && (E = k + x);
  const S = [];
  for (let D = k; D <= E + x / 1e3; D += x) S.push(D);
  return { min: k, max: E, ticks: S };
}
const Ch = (n, l, i) => {
  const c = (k) => [1, 3, 5].map((E) => parseInt(k.slice(E, E + 2), 16)), m = c(n), x = c(l);
  return "rgb(" + m.map((k, E) => Math.round(k + (x[E] - k) * i)).join(", ") + ")";
}, Th = (n, l, i, c) => {
  const m = i * Math.abs(1 - 2 * c), x = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + m + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, vn = ({ icon: n, name: l, sub: i, visual: c, double: m, backdrop: x, cls: k, zone: E, callouts: S }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Gp(n) + '</div><div class="wbText"><span class="wbName">' + It(l) + "</span>" + (i ? '<span class="wbSub">' + It(i) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (S != null && S.length ? '<div class="wbCallouts">' + S.slice(0, 3).map((D) => Array.isArray(D) ? '<span class="wbCallout"><span>' + It(D[0]) + "</span><span>" + It(D[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + It(D) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + c + "</div>") + "</div>", cd = (n) => '<div class="wbZoneM">' + n + "</div>", no = (n, l) => '<div class="wbValue"><span class="wbNum">' + It(n) + "</span>" + (l ? '<span class="wbUnitV">' + It(l) + "</span>" : "") + "</div>";
function Lh(n) {
  const l = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / l * 100, c = (E) => E / Ml * 100 + "%", m = (E) => E.map((S) => S.t + "," + i(S.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + c(E.t) + '">' + Mi(E.rise ? Be.sunsetUp : Be.sunsetDown) + It(E.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + It(n.format(E)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ml + ' 100" preserveAspectRatio="none">' + n.night.map(([E, S]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (S - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + Ml + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + m(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + c(E.t + 12) + ";width:" + c(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + It(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + It(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + c(E.t) + '">' + It(E.label) + "</span>").join("") + "</div></div>", k;
}
function $c(n, l, i = 120, c = 300) {
  const k = n.map((j) => j.value), E = Math.min(...k), S = Math.max(...k), D = S - E || 1, z = (j) => j / (n.length - 1) * c, I = (j) => 18 + (1 - (j - E) / D) * (i - 18 - 18), q = n.map((j, ft) => [z(ft), I(j.value)]), G = q.length > 2 ? Op(q) : "M" + q.map((j) => j[0].toFixed(1) + " " + j[1].toFixed(1)).join("L"), rt = k.indexOf(S), at = k.indexOf(E), K = (j) => j === 0 ? "start" : j === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + c + " " + i + '" aria-hidden="true">' + qp(c, 18, i - 18) + ('<path class="wbArea" d="' + G + "L" + c + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + G + '" vector-effect="non-scaling-stroke"></path><text x="' + z(rt) + '" y="' + (I(S) - 6) + '" text-anchor="' + K(rt) + '">' + It(l(S)) + '</text><text x="' + z(at) + '" y="' + (I(E) + 14) + '" text-anchor="' + K(at) + '">' + It(l(E)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + It(n[0].label) + '</text><text x="' + c + '" y="' + i + '" text-anchor="end">' + It(n[n.length - 1].label) + "</text></svg>";
}
function Ah(n, l) {
  const x = n.map((I) => I.value).concat([]), k = Math.min(...x) - 2, E = Math.max(...x) + 1, S = E - k || 1, D = 300 / n.length, z = (I) => (1 - (I - k) / S) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((I, q) => '<rect class="wbBar' + (I.now ? " wbNowBar" : "") + '" x="' + (q * D + D * 0.2) + '" y="' + z(I.value) + '" width="' + D * 0.6 + '" height="' + (104 - z(I.value)) + '" rx="6"></rect><text x="' + (q * D + D / 2) + '" y="120" text-anchor="middle">' + It(I.label) + "</text>").join("") + "</svg>";
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
function Jc(n, { getHass: l, entityId: i, style: c = "bitmap", motion: m = !0, cards: x, onOpen: k, hoursWindow: E } = {}) {
  var po, Ar;
  const S = "wb" + ++Bh + "-", D = document.createElement("div");
  D.className = "wb", D.dataset.style = c;
  const z = document.createElement("div");
  z.className = "wbBento", D.appendChild(z), n.replaceChildren(D);
  const I = ["aq_tile", "pollen_tile", "radar_tile"], q = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((p) => !x || x.includes(p)), G = { current: "wide", hourly: "wide", compared_to_average: "double" }, rt = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], at = {};
  q.forEach((p) => {
    const g = document.createElement("div");
    g.className = "wbItem", g.dataset.card = p, g.dataset.size = G[p] || "tile", g.hidden = !0, rt.includes(p) && (g.dataset.xl = ""), z.appendChild(g), at[p] = { el: g, html: null };
  });
  let K = !1, j = null, ft = 0, ht = -1, wt = !1, ot = null;
  const tt = "homecore-next-view", _ = (() => {
    try {
      return localStorage.getItem(tt);
    } catch {
      return null;
    }
  })(), Z = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: _ === "bars" ? "bars" : "strip", aq: void 0 }, St = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let et = /* @__PURE__ */ new Date(), ct = /* @__PURE__ */ new Date();
  const nt = {}, qt = {}, T = {}, R = (p) => {
    var g;
    return ((g = T[p]) == null ? void 0 : g.forecast) ?? [];
  }, B = (p, g) => {
    var y;
    return T[g] ? (y = p.states) == null ? void 0 : y[T[g].entityId] : void 0;
  };
  function W(p) {
    const g = qt[p];
    g && (g.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete qt[p]), T[p] && delete T[p];
  }
  function kt(p, g, y) {
    var N;
    if (typeof ((N = p.connection) == null ? void 0 : N.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(p.connection.subscribeMessage((V) => {
        K || qt[g] !== C || (V != null && V.forecast ? T[g] = { entityId: y, forecast: V.forecast } : delete T[g], $n());
      }, { type: "weather/subscribe_forecast", forecast_type: g, entity_id: y }));
    } catch (V) {
      C.unsub = Promise.reject(V);
    }
    C.unsub.catch(() => {
      qt[g] === C && delete qt[g];
    }), qt[g] = C;
  }
  function xt(p, g) {
    var y;
    for (const C of ["daily", "hourly"]) {
      const N = xh(p, g, C);
      ((y = qt[C]) == null ? void 0 : y.entityId) !== (N == null ? void 0 : N.entity_id) && (W(C), N && kt(p, C, N.entity_id));
    }
  }
  const J = (p, g, y, C = !1) => p.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [g],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function Mt(p, g) {
    var Y, pt, Q;
    const y = sa(p, g, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, N = await J(p, C, new Date(Date.now() - 3 * De)), V = (Q = (pt = (Y = N == null ? void 0 : N[C]) == null ? void 0 : Y.find((gt) => {
      var yt;
      return typeof ((yt = gt.a) == null ? void 0 : yt.pressure) == "number";
    })) == null ? void 0 : pt.a) == null ? void 0 : Q.pressure;
    St.pressureHistory = typeof V == "number" ? { entityId: C, value: V } : void 0;
  }
  async function Ct(p, g) {
    var pt;
    const y = sa(p, g, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, N = yr(/* @__PURE__ */ new Date()), V = await J(p, C, new Date(N.getTime() - zf * Rn)), Y = /* @__PURE__ */ new Map();
    for (const Q of (V == null ? void 0 : V[C]) ?? []) {
      const gt = (pt = Q.a) == null ? void 0 : pt.temperature, yt = new Date((Q.lc ?? Q.lu) * 1e3);
      if (typeof gt != "number" || yt >= N) continue;
      const Tt = yt.toDateString();
      Y.set(Tt, Math.max(Y.get(Tt) ?? -1 / 0, gt));
    }
    St.temperatureHistory = { entityId: C, dailyHighs: [...Y.values()], days: [...Y.entries()].map(([Q, gt]) => ({ date: new Date(Q), high: gt })) };
  }
  async function Jt(p) {
    const g = Xd(p);
    if (!g) return;
    const y = await p.callWS({ type: "recorder/statistic_during_period", statistic_id: g, rolling_window: { duration: { hours: 24 } } });
    St.rain = { entityId: g, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function ie() {
    const p = l == null ? void 0 : l();
    if (!p || K || typeof p.callWS != "function") return;
    const g = Ca(p);
    St.lastFetch = Date.now(), [Mt(p, g), Ct(p, g), Jt(p)].forEach((y) => y.then(() => $n(), () => {
    }));
  }
  async function na() {
    const p = l == null ? void 0 : l();
    if (!p) return;
    const g = sa(p, Ca(p), "temperature");
    if (!g) return;
    const y = g.stateObj.entity_id, C = yr(/* @__PURE__ */ new Date());
    try {
      const N = await J(p, y, C), V = (Y) => ((N == null ? void 0 : N[y]) ?? []).map((pt) => {
        var Q;
        return { time: pt.lu * 1e3, value: (Q = pt.a) == null ? void 0 : Q[Y] };
      }).filter((pt) => typeof pt.value == "number");
      St.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: V("temperature"), humidity: V("humidity") }, $n();
    } catch {
    }
  }
  async function ye(p) {
    const g = l == null ? void 0 : l();
    if (g)
      try {
        const y = await J(g, p, new Date(Date.now() - 24 * De), !0), C = ((y == null ? void 0 : y[p]) ?? []).filter((V) => Ie(V.s)), N = Math.max(1, Math.ceil(C.length / 48));
        St.aqHistory = { entityId: p, points: C.filter((V, Y) => Y % N === 0).map((V) => ({ label: Ja(new Date(V.lu * 1e3), g), value: Number(V.s) })) }, $n();
      } catch {
      }
  }
  function Li(p) {
    St.categories === void 0 && (St.categories = null, Promise.resolve().then(() => p.callWS({ type: "integration/descriptions" })).then((g) => {
      St.categories = kh(g);
    }, () => {
      St.categories = {};
    }).then(() => $n()));
  }
  function Ca(p) {
    var y;
    const g = Object.keys(p.states || {}).filter((C) => C.startsWith("weather.") && Os(p, C)).sort();
    return i && ((y = p.states) != null && y[i]) ? [i, ...g.filter((C) => C !== i)] : g;
  }
  const Pt = (p) => St.categories ? { air: Mh(p, St.categories), pollen: Sh(p, St.categories) } : { air: [], pollen: [] };
  function ce(p, g, y, C) {
    if (c === "line") return '<span class="wbWx wbS' + g + ' wbLineIcon" aria-hidden="true">' + Zd(p, y || p === "clear-night") + "</span>";
    if (c === "smooth") {
      const N = cf(p, g === 90, y, S + "g-" + C);
      return '<span class="wbWx wbS' + g + " wb" + N.k[0].toUpperCase() + N.k.slice(1) + (N.night ? " wbNight" : "") + '" aria-hidden="true">' + N.svg + "</span>";
    }
    return '<span class="wbWx wbS' + g + '" aria-hidden="true"><canvas data-wb-wx="' + It(kd(p, y)) + '" data-size="' + g + '"></canvas></span>';
  }
  const la = () => R("daily").filter((p) => p.templow != null).slice(0, Nf);
  function Qt(p, g) {
    const y = new Date(g.datetime), C = /* @__PURE__ */ new Date();
    return Is(y, C) ? At.today : Is(y, new Date(C.getTime() + Rn)) ? At.tomorrow : zc(y, p);
  }
  const je = (p, g, y) => y === 0 ? Qt(p, g) : zc(new Date(g.datetime), p);
  function Kr(p, g) {
    var yt, Tt, jt, zt;
    const y = wh(p, g);
    if (!y) return "";
    const C = la(), N = Z.openDay !== void 0 ? C[Z.openDay] : void 0, V = sa(p, g, "temperature"), Y = C[0], pt = Y && Is(new Date(Y.datetime), /* @__PURE__ */ new Date()), Q = ((Tt = (yt = p.config) == null ? void 0 : yt.unit_system) == null ? void 0 : Tt.temperature) || ((jt = y.attributes) == null ? void 0 : jt.temperature_unit) || "";
    let gt = '<div class="wbCard wbWeather' + (N ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (N ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + It(At.openPage) + '">' : '<div class="wbCurrent">') + ce(y.state, 90, bh(p), "now") + '<div class="wbTempBlock">' + (V && Ie(V.value) ? '<div class="wbTemp"><span class="wbDeg">' + It(xe(Math.round(Number(V.value)), p.locale)) + '</span><span class="wbUnit">' + It(Q) + "</span></div>" : "") + '<div class="wbPlace">' + It(((zt = p.config) == null ? void 0 : zt.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + It(yi(p, y)) + "</div>" + (pt && Y.templow != null ? '<div class="wbRange">' + It(Xa(At.range, { high: Ke(p, Y.temperature), low: Ke(p, Y.templow) })) + "</div>" : "") + "</div></div>";
    if (gt += kr(p) + Ai(p), C.length) {
      const Et = pt && V && Ie(V.value) ? Ke(p, V.value) : "", Zt = (Ot, Lt, re) => Ot === 0 && Et ? '<span class="wbAsDay">' + It(Lt) + '</span><span class="wbAsNow">' + It(re) + "</span>" : It(Lt);
      gt += '<div class="wbColumns" role="list">' + C.map((Ot, Lt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Lt + '" data-wb-focus="col-' + Lt + '"><span class="wbDay">' + Zt(Lt, je(p, Ot, Lt), At.now) + "</span>" + ce(Ot.condition ?? "cloudy", 60, !1, "col" + Lt) + '<span class="wbTemps"><span class="wbHi">' + Zt(Lt, Ke(p, Ot.temperature), Et) + '</span><span class="wbLo">' + It(Ke(p, Ot.templow)) + "</span></span></button>").join("") + "</div>", gt += '<div class="wbHalves" role="list">' + C.map((Ot, Lt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Lt + '" data-wb-focus="half-' + Lt + '">' + ce(Ot.condition ?? "cloudy", 40, !1, "half" + Lt) + '<span class="wbText"><span class="wbName">' + It(Qt(p, Ot)) + '</span><span class="wbSub">' + It(Xa(At.highLow, { high: Ke(p, Ot.temperature), low: Ke(p, Ot.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return gt + "</div>" + (N ? pe(p, g, N) : "") + "</div>";
  }
  const me = {
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
  }, te = {
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
  function Xt(p) {
    const g = Date.now(), y = R("hourly").filter((Tt) => new Date(Tt.datetime).getTime() > g - De).slice(0, 13);
    if (y.length < 2) return "";
    const C = (Tt) => Ja(new Date(Tt.datetime), p), N = (Tt) => me[Tt.condition] || "", V = (Tt) => te[Tt.condition] || Tt.condition;
    let Y = N(y[0]);
    if (!Y) return "";
    let pt = y[0], Q = 0;
    for (const Tt of y.slice(1))
      Q === 2 || V(Tt) === V(pt) || !N(Tt) || (Y += (Q ? " and " : ", ") + N(Tt) + " from " + C(Tt), pt = Tt, Q++);
    const gt = Number(y[0].temperature), yt = y.filter((Tt) => Ie(Tt.temperature));
    if (Ie(gt) && yt.length) {
      const Tt = yt.reduce((zt, Et) => Number(Et.temperature) < Number(zt.temperature) ? Et : zt), jt = yt.reduce((zt, Et) => Number(Et.temperature) > Number(zt.temperature) ? Et : zt);
      gt - Number(Tt.temperature) >= 3 ? Y += ", down to " + Ke(p, Tt.temperature) + " by " + C(Tt) : Number(jt.temperature) - gt >= 3 && (Y += ", up to " + Ke(p, jt.temperature) + " by " + C(jt));
    }
    return Y[0].toUpperCase() + Y.slice(1) + ".";
  }
  const kr = (p) => {
    const g = Xt(p);
    return g ? '<div class="wbSummary"><p class="wbSummaryText">' + It(g) + "</p></div>" : "";
  };
  function Ai(p) {
    const [g, y] = sd[E == null ? void 0 : E()] || sd.day, C = Date.now(), N = R("hourly").filter((V) => {
      const Y = new Date(V.datetime), pt = Y.getHours();
      return Y.getTime() > C - De / 2 && pt >= g && pt < y && Ie(V.temperature);
    }).slice(0, 4);
    return N.length ? '<div class="wbNextHours" role="list">' + N.map((V, Y) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + It(Ja(new Date(V.datetime), p)) + "</span>" + ce(V.condition ?? "cloudy", 40, V.is_daytime === !1, "hr" + Y) + '<span class="wbHourTemp">' + It(Ke(p, V.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Mr(p) {
    const g = p.getTime(), y = Date.now() - De;
    return R("hourly").filter((C) => {
      const N = new Date(C.datetime).getTime();
      return N >= g && N < g + Rn && N > y;
    });
  }
  function en(p) {
    if (!p.length) return ["temperature"];
    const g = ["temperature"];
    return p.some((y) => y.precipitation != null || y.precipitation_probability != null) && g.push("precipitation"), p.some((y) => y.humidity != null) && g.push("humidity"), g;
  }
  function pe(p, g, y) {
    const C = yr(new Date(y.datetime)), N = Mr(C), V = en(N), Y = V.includes(Z.dayMode) ? Z.dayMode : "temperature", pt = (Q) => Q === "humidity" ? At.humidity : At.modes[Q];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + ce(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + It(Qt(p, y)) + '</span><span class="wbSub">' + It(Xa(At.highLow, { high: Ke(p, y.temperature), low: Ke(p, y.templow) })) + '</span></div><button class="wbBack" title="' + It(At.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Mi(Be.back) + "</button></div>" + (V.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + V.map((Q) => '<button aria-pressed="' + (Q === Y) + '" data-wb="day-mode" data-mode="' + Q + '" data-wb-focus="day-mode-' + Q + '">' + It(pt(Q)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Lh(da(p, g, C, N, Y)) + "</div></div>";
  }
  function da(p, g, y, C, N) {
    var Xn;
    const V = y.getTime(), Y = Date.now(), pt = Is(y, /* @__PURE__ */ new Date()), Q = (ve) => (ve - V) / Va, gt = (ve) => Ja(new Date(ve), p), yt = (ve) => new Date(ve.datetime).getTime(), Tt = [0, 3, 6, 9, 12, 15, 18, 21].map((ve) => ({ t: ve * 60, label: gt(V + ve * De), minor: ve % 6 !== 0 })), { rise: jt, set: zt } = Hs(p, y), Et = [], Zt = [];
    jt && (Et.push({ t: Q(jt.getTime()), label: gt(jt.getTime()), rise: !0 }), Zt.push([0, Q(jt.getTime())])), zt && (Et.push({ t: Q(zt.getTime()), label: gt(zt.getTime()), rise: !1 }), Zt.push([Q(zt.getTime()), Ml]));
    const Ot = Sl(p);
    !jt && !zt && Ot && yd(new Date(V + Rn / 2), Ot.lat, Ot.lon) < 0 && Zt.push([0, Ml]);
    const Lt = pt ? Q(Y) : void 0, re = { hours: Tt, sun: Et, night: Zt };
    if (!C.length && !pt) return { ...re, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: At.noHourly };
    if (N === "precipitation") {
      const ve = C.some((ma) => ma.precipitation_probability != null), Jn = C.map((ma) => ({ t: Q(yt(ma)), v: Number((ve ? ma.precipitation_probability : ma.precipitation) ?? 0) })), ln = wr(p, B(p, "hourly"), "precipitation"), Ua = Math.max(0, ...Jn.map((ma) => ma.v)), Qn = ve ? 100 : Kc(0, Math.max(Ua, 1), [0.5, 1, 2, 5, 10]).max, Ho = (ma) => ve ? xe(ma, p.locale) + "%" : xe(ma, p.locale, { maximumFractionDigits: 1 }) + " " + ln, oi = Jn.find((ma) => ma.v === Ua);
      return {
        ...re,
        kind: "bars",
        points: Jn,
        min: 0,
        max: Qn,
        ticks: [0, Qn / 2, Qn],
        format: Ho,
        now: Lt !== void 0 ? { t: Lt, v: 0 } : void 0,
        peak: oi && Ua > 0 ? { t: oi.t + 30, v: oi.v, label: Ho(oi.v) } : void 0,
        note: Ua > 0 ? void 0 : At.noRain
      };
    }
    const Kt = N === "humidity" ? "humidity" : "temperature", Le = C.filter((ve) => ve[Kt] != null && (!pt || yt(ve) >= Y)).map((ve) => ({ t: Q(yt(ve)), v: Number(ve[Kt]) }));
    let Ft, Fe = [];
    if (Lt !== void 0) {
      const ve = sa(p, g, Kt);
      ve && Ie(ve.value) && (Ft = { t: Lt, v: Number(ve.value) }, Le.unshift(Ft)), Fe = (((Xn = St.todayHistory) == null ? void 0 : Xn.day) === y.toDateString() ? St.todayHistory[Kt] : []).filter((ln) => ln.time <= Y).map((ln) => ({ t: Math.max(0, Q(ln.time)), v: ln.value })), Ft && Fe.length && Fe.push(Ft);
    }
    const Ue = [...Fe, ...Le];
    if (!Ue.length) return { ...re, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: At.noHourly };
    const Ea = Ue.map((ve) => ve.v), sn = Kc(Math.min(...Ea), Math.max(...Ea), Kt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Kt === "humidity" && (sn.min = Math.max(0, sn.min), sn.max = Math.min(100, sn.max), sn.ticks = sn.ticks.filter((ve) => ve >= 0 && ve <= 100));
    const ni = Kt === "humidity" ? (ve) => xe(ve, p.locale) + "%" : (ve) => Ke(p, ve), qa = Kt === "temperature" ? Ue.reduce((ve, Jn) => Jn.v > ve.v ? Jn : ve) : void 0;
    return { ...re, kind: "line", points: Le, past: Fe, ...sn, format: ni, now: Ft, peak: qa ? { ...qa, label: ni(qa.v) } : void 0 };
  }
  function ha(p) {
    const g = ["temperature"];
    return p.some((y) => y.precipitation_probability != null || y.precipitation != null) && g.push("precipitation"), p.some((y) => y.wind_speed != null) && g.push("wind"), g;
  }
  function Ei(p, g, y = Pc) {
    var V, Y;
    const C = R("daily"), N = [];
    for (let pt = 0; pt < y; pt++) for (const Q of [!1, !0]) {
      const gt = p.getTime() + (pt * 24 + (Q ? 12 : 0)) * De, yt = gt + 12 * De, Tt = {};
      g.forEach((zt) => {
        const Et = new Date(zt.datetime).getTime();
        zt.condition && Et >= gt && Et < yt && (Tt[zt.condition] = (Tt[zt.condition] ?? 0) + (Wf.has(zt.condition) ? 2 : 1));
      });
      let jt = (V = Object.entries(Tt).sort((zt, Et) => Et[1] - zt[1])[0]) == null ? void 0 : V[0];
      if (!jt) {
        const zt = new Date(gt).toDateString();
        jt = ((Y = C.find((Et) => new Date(Et.datetime).toDateString() === zt)) == null ? void 0 : Y.condition) ?? "cloudy";
      }
      N.push({ cond: Q && jt === "sunny" ? "clear-night" : jt, night: Q });
    }
    return N;
  }
  function Sr(p, g, y) {
    const C = B(p, "hourly"), N = g.precipitation_probability != null ? xe(g.precipitation_probability, p.locale) + "%" : "", V = g.precipitation ? xe(g.precipitation, p.locale) + " " + wr(p, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return N ? [N, V] : [V || "–", ""];
      case "wind":
        return g.wind_speed != null ? [xe(Math.round(g.wind_speed), p.locale), wr(p, C, "wind_speed")] : ["–", ""];
      default:
        return [Ke(p, g.temperature), (g.precipitation_probability ?? 0) >= 20 ? N : ""];
    }
  }
  function Yt(p, g, y) {
    const [C, N] = sd[E == null ? void 0 : E()] || sd.day, V = [];
    for (let Y = 0; Y < 4 && V.length < 3; Y++) {
      const pt = /* @__PURE__ */ new Date();
      pt.setHours(0, 0, 0, 0), pt.setDate(pt.getDate() + Y);
      const Q = new Date(pt);
      Q.setHours(N, 0, 0, 0), pt.setHours(C, 0, 0, 0), !(Q.getTime() <= y || !g.some((gt) => {
        const yt = new Date(gt.datetime).getTime();
        return yt >= pt.getTime() && yt <= Q.getTime();
      })) && V.push({ a: pt.getTime(), b: Q.getTime(), label: Qt(p, { datetime: pt.toISOString() }) });
    }
    return V;
  }
  function Bt(p, g, y, C, N, V) {
    const Y = (y.b - g.a) / De, pt = (Lt) => ((Lt - g.a) / De).toFixed(3), Q = 80, gt = 32, yt = [];
    for (const Lt = new Date(g.a - Rn); Lt.getTime() < y.b + Rn; Lt.setDate(Lt.getDate() + 1)) {
      const { rise: re, set: Kt } = Hs(p, new Date(Lt));
      re && Kt && yt.push({ rise: re.getTime(), set: Kt.getTime() });
    }
    const Tt = (Lt, re) => Q - (Q - gt) * Math.sin(Math.PI * (re - Lt.rise) / (Lt.set - Lt.rise)), jt = (Lt) => !yt.some((re) => Lt >= re.rise && Lt <= re.set);
    let zt = "", Et = "", Zt = "";
    yt.forEach((Lt, re) => {
      const Kt = [];
      for (let Ft = Lt.rise; Ft <= Lt.set; Ft += 15 * Va) Kt.push(pt(Ft) + "," + Tt(Lt, Ft).toFixed(2));
      Kt.push(pt(Lt.set) + "," + Q), zt += '<polyline class="wbLineArc" points="' + Kt.join(" ") + '"/>';
      const Le = yt[re + 1];
      Le && (zt += '<rect class="wbLineNight" x="' + pt(Lt.set) + '" y="0" width="' + ((Le.rise - Lt.set) / De).toFixed(3) + '" height="100"/>'), [[Lt.rise, "↑"], [Lt.set, "↓"]].forEach(([Ft, Fe]) => {
        Ft < g.a || Ft > y.b || (Et += '<line class="wbLineEdge" x1="' + pt(Ft) + '" x2="' + pt(Ft) + '" y1="0" y2="100"/>', Zt += '<span class="wbLineTime" style="left:' + V(Ft) + '">' + Fe + " " + It(Ja(new Date(Ft), p)) + "</span>");
      });
    });
    const Ot = yt.find((Lt) => N >= Lt.rise && N <= Lt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Y + ' 100" preserveAspectRatio="none" aria-hidden="true">' + zt + Et + '<line class="wbLineHorizon" x1="0" x2="' + Y + '" y1="' + Q + '" y2="' + Q + '"/></svg>' + Zt + (Ot ? '<span class="wbLineNow" style="left:' + V(N) + ";top:" + Tt(Ot, N) + '%">' + Zd("sunny", !1) + "</span>" : "") + C.filter((Lt) => Lt.entry && !Lt.now).map((Lt) => '<span class="wbLineGlyph' + Lt.edge + '" style="left:' + V(Lt.t) + '">' + Zd(Lt.entry.condition ?? "cloudy", jt(Lt.t)) + "</span>").join("");
  }
  function Gt(p, g) {
    delete nt.hourly;
    const y = Z.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + It(y === "bars" ? At.nextDays : At.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + It(At.showAs) + '">' + ["strip", "bars"].map((Ft) => '<button aria-pressed="' + (Ft === y) + '" data-wb="hourly-view" data-view="' + Ft + '" data-wb-focus="hourly-view-' + Ft + '">' + It(At.views[Ft]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Ta(p, g, C);
    const N = R("hourly"), V = Math.floor(Date.now() / Va) * Va, Y = N.filter((Ft) => new Date(Ft.datetime).getTime() > V - De);
    if (!Y.length) return "";
    const pt = ha(Y), Q = pt.includes(Z.hourlyMode) ? Z.hourlyMode : "temperature", gt = Yt(p, N, V);
    if (!gt.length) return "";
    const yt = gt[0], Tt = gt[gt.length - 1], jt = (yt.b - yt.a) / De, zt = (Ft) => "calc(var(--wb-u) * " + ((Ft - yt.a) / De).toFixed(3) + ")", Et = new Date(yt.a);
    Et.setHours(6, 0, 0, 0), Et.getTime() > yt.a && Et.setDate(Et.getDate() - 1);
    const Zt = Math.ceil((Tt.b - Et.getTime()) / Rn);
    c !== "line" && (nt.hourly = { segs: Ei(Et, N, Zt), seed: Et.getDate(), columns: Zt });
    const Ot = (Ft) => Ft === yt.a ? " wbFirst" : Ft === Tt.b ? " wbLast" : "", Lt = [];
    for (let Ft = yt.a; Ft < Tt.b; ) {
      const Fe = new Date(Ft);
      Fe.setHours(24, 0, 0, 0);
      const Ue = Math.min(Fe.getTime(), Tt.b);
      Lt.push({ a: Ft, b: Ue, label: Qt(p, { datetime: new Date(Ft).toISOString() }), page: gt.find((Ea) => Ea.a >= Ft && Ea.a < Ue) || gt.find((Ea) => Ea.a < Ue && Ea.b > Ft) }), Ft = Ue;
    }
    const re = V > yt.a && V < Tt.b ? Math.floor((V - yt.a) / (2 * De)) * 2 : 0, Kt = [];
    for (let Ft = yt.a; Ft <= Tt.b; Ft += De) {
      const Fe = new Date(Ft), Ue = Ot(Ft);
      !Ue && Fe.getHours() % Hf || !Ue && (Math.abs(yt.a - Ft) < 2 * De || Math.abs(Tt.b - Ft) < 2 * De) || V >= yt.a && Math.abs(Ft - V) < 1.5 * De && !Ue || Kt.push({ t: Ft, edge: Ue, label: Ja(Fe, p), entry: Ft >= V - De ? N.find((Ea) => new Date(Ea.datetime).getTime() === Ft) : void 0 });
    }
    V > yt.a && V < yt.b && Kt.push({ t: V, edge: V - yt.a < De ? " wbFirst" : yt.b - V < De ? " wbLast" : "", label: At.now, entry: Y[0], now: !0 });
    const Le = (Ft, Fe) => '<span class="wbMark' + Ft.edge + (Ft.now ? " wbNowMark" : "") + '" style="left:' + zt(Ft.t) + '">' + Fe + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (pt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + pt.map((Ft) => '<button aria-pressed="' + (Ft === Q) + '" data-wb="hourly-mode" data-mode="' + Ft + '" data-wb-focus="hourly-mode-' + Ft + '">' + It(At.modes[Ft]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + It(At.nextHours) + '" data-span="' + jt + '" data-start="' + re + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + jt + ");width:calc(var(--wb-u) * " + (Tt.b - yt.a) / De + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Tt.b - yt.a) / (2 * De)) + 1)].map((Ft, Fe) => '<i class="wbSnap" style="left:' + zt(yt.a + Fe * 2 * De) + '"></i>').join("") + '<div class="wbDays">' + Lt.map((Ft, Fe) => {
      var Ue;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ft.b - Ft.a) / De).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Fe === 0 ? re : ((((Ue = Ft.page) == null ? void 0 : Ue.a) ?? Ft.a) - yt.a) / De) + '" data-wb-focus="hours-day-' + Fe + '">' + It(Ft.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Kt.map((Ft) => Le(Ft, It(Ft.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + Bt(p, yt, Tt, Kt, V, zt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + zt(Et.getTime()) + ";width:calc(var(--wb-u) * " + Zt * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (V > yt.a ? '<i class="wbPast" style="width:' + zt(Math.min(V, Tt.b)) + '"></i><i class="wbNowLine" style="left:' + zt(V) + '"></i>' : "") + Lt.slice(1).map((Ft) => '<i class="wbMidnight" style="left:' + zt(Ft.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Kt.map((Ft) => {
      if (!Ft.entry) return "";
      const [Fe, Ue] = Sr(p, Ft.entry, Q);
      return Le(Ft, '<span class="wbPrimaryV">' + It(Fe) + '</span><span class="wbSecondary">' + It(Ue) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Te(p) {
    const g = Ff, y = g.findIndex(([Q]) => Q >= p);
    if (y <= 0) return "rgb(" + g[y < 0 ? g.length - 1 : 0][1].join(",") + ")";
    const [C, N] = g[y - 1], [V, Y] = g[y], pt = (p - C) / (V - C);
    return "rgb(" + N.map((Q, gt) => Math.round(Q + (Y[gt] - Q) * pt)).join(",") + ")";
  }
  function Ta(p, g, y) {
    var zt;
    const C = R("daily").filter((Et) => Ie(Et.templow) && Ie(Et.temperature)).slice(0, 7);
    if (!C.length) return "";
    const N = Math.min(...C.map((Et) => Number(Et.templow))), V = Math.max(...C.map((Et) => Number(Et.temperature))), Y = Math.max(1, V - N), pt = (Et) => Math.max(0, Math.min(100, (Et - N) / Y * 100)).toFixed(2), Q = /F/.test(wr(p, B(p, "daily"), "temperature")), gt = (Et) => Q ? (Et - 32) / 1.8 : Et, yt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Et) => Te(gt(N + Et * Y)) + " " + Et * 100 + "%").join(",") + ")", Tt = (zt = sa(p, g, "temperature")) == null ? void 0 : zt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ha(R("hourly").filter((Et) => new Date(Et.datetime).getTime() > Date.now() - De)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((Et, Zt) => {
      const Ot = Qt(p, Et), Lt = Is(new Date(Et.datetime), /* @__PURE__ */ new Date()), re = Number(Et.templow), Kt = Number(Et.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + It(Xa(At.rangeRow, { day: Ot, low: Ke(p, re), high: Ke(p, Kt) })) + '"><span class="wbRangeDay">' + It(Ot) + "</span>" + ce(Et.condition, 40, !1, "r" + Zt) + '<span class="wbRangeLo">' + It(Ke(p, re)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + yt + ";clip-path:inset(0 " + (100 - pt(Kt)) + "% 0 " + pt(re) + '% round 4px)"></i>' + (Lt && Ie(Tt) ? '<i class="wbRangeNow" style="left:' + pt(Number(Tt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + It(Ke(p, Kt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Vn = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Vt = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], ee = (p, g) => {
    if (g <= p[0][0]) return p[0][1];
    for (let y = 1; y < p.length; y++) if (g <= p[y][0]) {
      const [C, N] = p[y - 1], [V, Y] = p[y];
      return Ch(N, Y, (g - C) / (V - C));
    }
    return p[p.length - 1][1];
  }, $e = (p, g, y) => {
    if (!g || !y) return Vn[5][1];
    const C = (p.getTime() - y.getTime()) / Va;
    return C >= -90 ? ee(Vt, C) : ee(Vn, (p.getTime() - g.getTime()) / Va);
  }, Ao = (p) => (p >= 60 ? Math.floor(p / 60) + "h " : "") + p % 60 + "m";
  function an(p) {
    const g = et, { rise: y, set: C } = Hs(p, g), N = y && C ? Math.round((C.getTime() - y.getTime()) / Va) : 0, V = Math.floor(N / 60), Y = N % 60, pt = (Le) => Le ? Ja(Le, p) : "–", Q = new Date(g);
    Q.setDate(Q.getDate() + 1);
    const gt = Hs(p, Q), yt = gt.rise && gt.set ? Math.round((gt.set.getTime() - gt.rise.getTime()) / Va) : 0, Tt = new Date(g);
    Tt.setDate(Tt.getDate() - 1);
    const jt = !!(y && C && g >= y && g <= C), zt = !!(y && g < y), Et = jt ? y : zt ? Hs(p, Tt).set : C, Zt = jt ? C : zt ? y : gt.rise, Ot = Et && Zt ? Math.min(1, Math.max(0, (g.getTime() - Et.getTime()) / (Zt.getTime() - Et.getTime()))) : 0, Lt = Zt ? Math.max(0, Math.round((Zt.getTime() - g.getTime()) / Va)) : 0, re = Zt ? Ao(Lt) : "–", Kt = jt ? At.untilSunset : At.untilSunrise;
    return vn({
      icon: Be.sunny,
      name: At.sun,
      sub: N ? Xa(At.daylightShort, { hours: V, minutes: Y }) : void 0,
      cls: "wbSunTile",
      callouts: [[At.callout.riseTomorrow, pt(gt.rise)], [At.callout.setTomorrow, pt(gt.set)], ...yt ? [[At.callout.dayTomorrow, Math.floor(yt / 60) + "h " + yt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + $e(g, y, C) + '"><svg class="wbSunTrack" data-up="' + (jt ? 1 : 0) + '" data-f="' + Ot.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + It(re) + '</span><span class="wbSunWord">' + It(Kt) + '</span></div><span class="wbSunAt wbSunRise">' + It(pt(y)) + '</span><span class="wbSunAt wbSunSet">' + It(pt(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      cd(no(re, ""))
    });
  }
  const ta = 22;
  function Gn(p) {
    const g = Math.round(p.clientWidth), y = Math.round(p.clientHeight), C = ta, N = C / 2, V = g + "x" + y + ":" + p.dataset.f + ":" + p.dataset.up;
    if (g < C * 3 || y < C * 3 || p.dataset.drawn === V) return;
    p.dataset.drawn = V;
    const Y = "M" + N + " " + (y - C) + "V" + C + "A" + N + " " + N + " 0 0 1 " + C + " " + N + "H" + (g - C) + "A" + N + " " + N + " 0 0 1 " + (g - N) + " " + C + "V" + (y - C), pt = "M" + (g - N) + " " + (y - C) + "A" + N + " " + N + " 0 0 1 " + (g - C) + " " + (y - N) + "H" + C + "A" + N + " " + N + " 0 0 1 " + N + " " + (y - C), Q = 16, gt = 6, yt = "M" + Q + " 0H" + (g - Q) + "A" + Q + " " + Q + " 0 0 1 " + g + " " + Q + "V" + (y - Q) + "A" + Q + " " + Q + " 0 0 1 " + (g - Q) + " " + y + "H" + Q + "A" + Q + " " + Q + " 0 0 1 0 " + (y - Q) + "V" + Q + "A" + Q + " " + Q + " 0 0 1 " + Q + " 0ZM" + (C + gt) + " " + C + "A" + gt + " " + gt + " 0 0 0 " + C + " " + (C + gt) + "V" + (y - C - gt) + "A" + gt + " " + gt + " 0 0 0 " + (C + gt) + " " + (y - C) + "H" + (g - C - gt) + "A" + gt + " " + gt + " 0 0 0 " + (g - C) + " " + (y - C - gt) + "V" + (C + gt) + "A" + gt + " " + gt + " 0 0 0 " + (g - C - gt) + " " + C + "Z", Tt = p.dataset.up === "1", jt = Number(p.dataset.f) || 0, zt = "http://www.w3.org/2000/svg";
    p.setAttribute("viewBox", "0 0 " + g + " " + y);
    const Et = document.createElementNS(zt, "path");
    Et.setAttribute("d", Tt ? Y : pt), p.replaceChildren(Et);
    const Zt = Et.getTotalLength(), Ot = Et.getPointAtLength(Zt * jt), Lt = Tt ? Zt : 0;
    p.innerHTML = '<defs><mask id="' + S + 'sun-day"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + S + 'sun-done"><path d="' + Y + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (Tt ? (Lt * jt).toFixed(1) + " " + (Lt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + yt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + yt + '" mask="url(#' + S + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + yt + '" mask="url(#' + S + 'sun-done)"></path><circle class="wbSunDot' + (Tt ? "" : " wbSunNight") + '" cx="' + Ot.x.toFixed(1) + '" cy="' + Ot.y.toFixed(1) + '" r="' + N + '"></circle>';
  }
  const Ge = typeof ResizeObserver == "function" ? new ResizeObserver((p) => p.forEach((g) => Gn(g.target))) : null;
  function Eo() {
    Ge == null || Ge.disconnect(), D.querySelectorAll("svg.wbSunTrack").forEach((p) => {
      Gn(p), Ge == null || Ge.observe(p);
    });
  }
  function _o(p, g, y) {
    const C = (Y) => S + "moon-" + Y, N = p > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Th(61, 61, 57.9, p) + '"' + (g ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", V = (Y, pt, Q, gt, yt, Tt) => '<filter id="' + C(Y) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + pt + '" numOctaves="' + Q + '" seed="' + gt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((jt) => "<feFunc" + jt + ' type="linear" slope="' + yt + '" intercept="' + Tt + '"></feFunc' + jt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + V("mottle", "0.045", 4, 3, 1.8, -0.4) + V("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + Eh.map(([Y, pt, Q, gt, yt, Tt]) => '<ellipse cx="' + Y + '" cy="' + pt + '" rx="' + Q + '" ry="' + gt + '" fill-opacity="' + Tt + '" transform="rotate(' + yt + " " + Y + " " + pt + ')"></ellipse>').join("") + "</g>" + _h.map(([Y, pt, Q]) => '<circle class="wbCrater" cx="' + Y + '" cy="' + pt + '" r="' + Q + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + Dh.map(([Y, pt]) => '<line x1="54.4" y1="95" x2="' + Y + '" y2="' + pt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + Xc.map(([Y, pt, Q]) => '<circle cx="' + Y + '" cy="' + pt + '" r="' + Q * 2 + '"></circle>').join("") + "</g>" + Xc.map(([Y, pt, Q]) => '<circle class="wbBrightCenter" cx="' + Y + '" cy="' + pt + '" r="' + Q + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + N + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Do(p) {
    const g = ct, y = Sl(p), C = (y == null ? void 0 : y.lat) ?? 0, N = $d(g), V = Zc(p), Y = V ? p.states[V] : void 0, pt = Zr(Y) && $f.includes(Y.state) ? Y.state : vh(N.phase), { rise: Q, set: gt } = y ? gh(g, y.lat, y.lon) : {}, yt = N.phase > 0.5 != C < 0, Tt = xe(Math.round(N.fraction * 100), p.locale) + "%", jt = Q ?? gt;
    return jt && Ja(jt, p), vn({
      icon: Be.night,
      name: At.moon,
      sub: At.phases[pt],
      callouts: [...Q ? [[At.callout.moonrise, Ja(Q, p)]] : [], ...gt ? [[At.callout.moonset, Ja(gt, p)]] : [], [At.callout.lit, Tt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + _o(N.fraction, yt, C < 0) + "</div>" + cd(no(xe(Math.round(N.fraction * 100), p.locale), "%"))
    });
  }
  function ca(p, g) {
    var Et;
    const y = sa(p, g, "wind_speed");
    if (!y || !Ie(y.value)) return "";
    const C = sa(p, g, "wind_gust_speed"), N = sa(p, g, "wind_bearing"), V = N && Ie(N.value) ? Number(N.value) : void 0, Y = yh(Number(y.value), (Et = y.stateObj.attributes) == null ? void 0 : Et.wind_speed_unit), pt = gd(p, y.stateObj, "wind_speed", y.value), Q = V !== void 0 ? At.cardinal[Kf[((V + 11.25) / 22.5 | 0) % 16]] : void 0, gt = C ? Gc(p, C.stateObj, "wind_gust_speed", C.value) : void 0, yt = [Q ? Xa(At.windFrom, { direction: Q }) : void 0, Y !== void 0 ? Y + " " + At.beaufort : void 0].filter(Boolean).join(" · ") || gt, Tt = (Zt, Ot) => {
      const Lt = (Zt - 90) * Math.PI / 180;
      return [100 + Ot * Math.cos(Lt), 100 + Ot * Math.sin(Lt)];
    }, jt = Array.from({ length: 36 }, (Zt, Ot) => Ot * 10).map((Zt) => {
      const Ot = Zt % 90 === 0, [Lt, re] = Tt(Zt, 97), [Kt, Le] = Tt(Zt, Ot ? 83 : 89);
      return '<line class="wbTick' + (Ot ? " wbMajor" : "") + '" x1="' + Lt + '" y1="' + re + '" x2="' + Kt + '" y2="' + Le + '"></line>';
    }).join(""), zt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Zt, Ot]) => {
      const [Lt, re] = Tt(Ot, 64);
      return '<text class="wbLetter' + (Zt === "n" ? " wbNorth" : "") + '" x="' + Lt + '" y="' + re + '">' + It(At.cardinal[Zt]) + "</text>";
    }).join("");
    return vn({ icon: Be.windy, name: At.wind, sub: yt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + jt + zt + (V !== void 0 ? '<path class="wbMarker" transform="rotate(' + V + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + It(pt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + It(pt.unit) + "</text></svg>" });
  }
  const Un = (p, g) => {
    if (p < 3) return At.advice.fine;
    if (p < 8) return At.advice.sunblock;
    const y = Date.now(), C = R("hourly").find((N) => N.uv_index != null && new Date(N.datetime).getTime() > y && N.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Xa(At.advice.avoidUntil, { time: Ja(new Date(C.datetime), g) }) : At.advice.avoidToday;
  };
  function _i(p, g) {
    const y = sa(p, g, "uv_index");
    if (!y || !Ie(y.value)) return "";
    const C = Number(y.value), N = At.uvLevel[Uc(C)], V = /* @__PURE__ */ new Date();
    V.setHours(23, 59, 59, 999);
    const Y = R("hourly").filter((yt) => yt.uv_index != null && new Date(yt.datetime) > /* @__PURE__ */ new Date() && new Date(yt.datetime) <= V).reduce((yt, Tt) => !yt || Tt.uv_index > yt.uv ? { uv: Tt.uv_index, time: new Date(Tt.datetime) } : yt, void 0), pt = Xf[Uc(C)], Q = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), gt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + S + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + Q.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + pt + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + pt + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + pt + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + Q.toFixed(1) + '" fill="url(#' + S + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + It(xe(Math.round(C), p.locale)) + '</span><span class="wbUvWord">' + It(N) + "</span></div>" + cd(no(xe(Math.round(C), p.locale), ""));
    return vn({
      icon: Be.sunnyAlert,
      name: At.metrics.uv_index,
      sub: Y && Y.uv > C ? Xa(At.uvPeak, { level: N, uv_index: xe(Math.round(Y.uv), p.locale), time: Ja(Y.time, p) }) : N,
      zone: gt,
      cls: "wbUv",
      callouts: [Un(C, p), [At.callout.now, xe(Math.round(C), p.locale) + " · " + N], [At.callout.peak, Y && Y.uv > C ? xe(Math.round(Y.uv), p.locale) + " at " + Ja(Y.time, p) : At.callout.now]]
    });
  }
  function Cr(p) {
    const g = R("daily")[0], y = St.temperatureHistory;
    if (!g || new Date(g.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ie(g.temperature) || !y || y.dailyHighs.length < Vf) return "";
    const C = Number(g.temperature), N = y.dailyHighs.reduce((Ot, Lt) => Ot + Lt, 0) / y.dailyHighs.length, V = Math.round(C - N) || 0, Y = V > 0 ? "above" : V < 0 ? "below" : "same", pt = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], Q = pt.map((Ot) => Ot.high).concat(N), gt = Math.min(...Q) - 1, yt = Math.max(...Q) + 1, Tt = (Ot) => (1 - (Ot - gt) / (yt - gt)) * 100, jt = (Ot) => (Ot + 0.5) / pt.length * 100, zt = pt.map((Ot, Lt) => [jt(Lt), Tt(Ot.high)]), Et = zt.map(([Ot, Lt], re) => (re ? "L" : "M") + Ot.toFixed(2) + " " + Lt.toFixed(2)).join(""), Zt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + S + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Et + "L" + zt[zt.length - 1][0].toFixed(2) + " 100L" + zt[0][0].toFixed(2) + ' 100Z" fill="url(#' + S + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Tt(N).toFixed(2) + '" y2="' + Tt(N).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Et + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Tt(N).toFixed(2) + '%">' + It(Ke(p, N)) + "</span>" + pt.map((Ot, Lt) => {
      const re = Ot.today ? " wbToday" : "", Kt = "left:" + jt(Lt).toFixed(2) + "%;top:" + Tt(Ot.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + re + '" style="' + Kt + '"></i><span class="wbAvgValue' + re + '" style="' + Kt + '">' + It(Ke(p, Ot.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + pt.map((Ot, Lt) => '<span class="wbAvgDay' + (Ot.today ? " wbToday" : "") + '" style="left:' + jt(Lt).toFixed(2) + '%">' + It(rh(Ot.date, p)) + "</span>").join("") + "</div></div>";
    return vn({
      icon: Be.chartLine,
      name: At.metrics.compared_to_average,
      double: !0,
      sub: Xa(At.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (V > 0 ? "+" : "") + It(Ke(p, V)) + '</div><div class="wbCompareWords">' + It(At.average[Y]) + '</div><div class="wbCompareTemps">' + It(Xa(At.todayVsAverage, { today: Ke(p, C), average: Ke(p, N) })) + "</div></div>" + Zt + "</div>"
    });
  }
  function nn(p, g) {
    const y = sa(p, g, "humidity");
    if (!y || !Ie(y.value)) return "";
    const C = sa(p, g, "dew_point"), N = Math.max(0, Math.min(100, Number(y.value)));
    return vn({
      icon: Be.waterPercent,
      name: At.metrics.humidity,
      sub: C && Ie(C.value) ? Xa(At.dewPoint, { dew_point: Ke(p, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + N + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + no(xe(Math.round(Number(y.value)), p.locale), "%") + "</div>"
    });
  }
  function Ws(p, g) {
    var Ot, Lt, re;
    const y = sa(p, g, "pressure");
    if (!y || !Ie(y.value)) return "";
    const C = Number(y.value), N = (Ot = y.stateObj.attributes) == null ? void 0 : Ot.pressure_unit, V = Yc(C, N), Y = ((Lt = St.pressureHistory) == null ? void 0 : Lt.entityId) === y.stateObj.entity_id ? Yc(St.pressureHistory.value, N) : void 0;
    let pt;
    if (V !== void 0 && Y !== void 0) {
      const Kt = V - Y;
      pt = Kt >= Hc ? "rising" : Kt <= -Hc ? "falling" : "steady";
    }
    const Q = gd(p, y.stateObj, "pressure", Math.round(C)), gt = y.stateObj, yt = (Kt) => N === "inHg" ? Math.round(Kt * 100) / 100 : Math.round(Kt), Tt = (Kt) => Gc(p, gt, "pressure", yt(Kt)), jt = Y !== void 0 ? St.pressureHistory.value : void 0, zt = jt !== void 0 ? yt(C - jt) : void 0, Et = (re = gt.entity_id) != null && re.startsWith("weather.") ? R("hourly").find((Kt) => Ie(Kt.pressure) && new Date(Kt.datetime).getTime() >= Date.now() + 3 * De - 30 * Va) : void 0, Zt = [
      ...pt ? [At.advice[pt]] : [],
      ...jt !== void 0 ? [[At.callout.hoursAgo, Tt(jt)], [At.callout.change, (zt > 0 ? "+" : zt < 0 ? "−" : "") + Tt(Math.abs(zt))]] : [],
      ...Et ? [[At.callout.inHours, Tt(Number(Et.pressure))]] : []
    ];
    return vn({
      icon: Be.gauge,
      name: At.metrics.pressure,
      sub: pt ? At.pressure[pt] : void 0,
      cls: "wbPressure",
      callouts: Zt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + no(Q.number) + '<span class="wbTapeUnit">' + It(Q.unit) + "</span></div>" + (V !== void 0 ? Yn(p, V) : "") + "</div>"
    });
  }
  function Yn(p, g) {
    const N = Math.floor(g) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (V, Y) => N + Y).map((V) => {
      const Y = 100 - (V - g) * 9;
      if (Y < 22 || Y > 178) return "";
      const pt = V % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Y - 100) / 100) + '"><line class="wbTapeTick" x1="' + (pt ? 2 : 8) + '" x2="26" y1="' + Y + '" y2="' + Y + '"></line>' + (pt ? '<text class="wbTapeLabel" x="33" y="' + Y + '">' + It(xe(V, p.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + It(At.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + It(At.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Sn(p) {
    var Q, gt;
    const g = Xd(p), y = g ? p.states[g] : void 0;
    if (!y || ((Q = St.rain) == null ? void 0 : Q.entityId) !== g || !Ie(St.rain.change)) return "";
    const C = ((gt = y.attributes) == null ? void 0 : gt.unit_of_measurement) ?? "", N = B(p, "hourly"), V = Date.now() + Rn, Y = R("hourly").filter((yt) => yt.precipitation != null && new Date(yt.datetime).getTime() <= V), pt = Y.reduce((yt, Tt) => yt + Number(Tt.precipitation), 0);
    return vn({
      icon: Be.rainy,
      name: At.metrics.precipitation,
      sub: N && Y.length ? Xa(At.rainExpected, { amount: xe(pt, p.locale, { maximumFractionDigits: 1 }) + " " + wr(p, N, "precipitation") }) : At.rainLast24h,
      visual: no(xe(St.rain.change, p.locale, { maximumFractionDigits: 1 }), C) + (Y.length > 1 ? Ah(Y.map((yt) => ({ label: "", value: Number(yt.precipitation) }))) : "")
    });
  }
  function Di(p, g) {
    const y = sa(p, g, "visibility");
    if (!y || !Ie(y.value)) return "";
    const C = gd(p, y.stateObj, "visibility", y.value), N = xf(Number(y.value), wr(p, y.stateObj, "visibility"));
    return vn({
      icon: Be.eyeOutline,
      name: At.metrics.visibility,
      sub: At.visibilityLevel[yf(N)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + N + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + It(Pn(p, N)) + '</div><div class="wbSeaValue">' + no(C.number, C.unit) + "</div></div>"
    });
  }
  function Pn(p, g) {
    var V;
    const y = wf((V = p.config) == null ? void 0 : V.country, g);
    if (y) return Xa(At.visibilityLandmarks, { from: y.from, to: y.to });
    const C = g / Yf * 60;
    if (C < 60) {
      const Y = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if (Y < 60) return Xa(At.walkMinutes, { minutes: xe(Y, p.locale) });
    }
    const N = Math.max(1, Math.round(C / 30) / 2);
    return N < 8 ? Xa(At.walkHours, { hours: xe(N, p.locale) }) : At.walkDay;
  }
  function Tr(p) {
    St.categories === void 0 && Li(p);
    const g = Pt(p), y = (Q) => Q.map((gt) => p.states[gt]).filter(Zr), C = y(g.air), N = y(g.pollen);
    if (!C.length && !N.length) return "";
    const V = [...C, ...N], Y = (Q) => N.includes(Q) ? Be.flower : Be.airFilter, pt = V.find((Q) => Q.entity_id === Z.aq);
    return pt ? Nn(p, pt, Y(pt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + It(At.airQuality) + '</h2></div><div class="wbAqTiles">' + V.map((Q) => '<button class="wbTile" data-wb="aq-open" data-entity="' + It(Q.entity_id) + '"><span class="wbChip">' + Mi(Y(Q)) + '</span><span class="wbText"><span class="wbName">' + It(vr(p, Q)) + '</span><span class="wbSub">' + It(yi(p, Q)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Nn(p, g, y) {
    var yt, Tt, jt;
    const C = ((yt = g.attributes) == null ? void 0 : yt.unit_of_measurement) ?? "", N = ((Tt = g.attributes) == null ? void 0 : Tt.device_class) === "pm25" && C === Oc && Ie(g.state), V = Number(g.state), Y = N ? dd(V) : void 0, pt = ((jt = St.aqHistory) == null ? void 0 : jt.entityId) === g.entity_id ? St.aqHistory.points : void 0, Q = (zt) => Math.min(100, Math.max(0, zt / ld * 100));
    let gt;
    if (pt && pt.length > 1) gt = $c(pt, (zt) => (xe(zt, p.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if (Y) {
      let zt = 0;
      const Et = Vp.map(([Zt, Ot]) => {
        const Lt = Q(Math.min(Ot, ld)), re = Fc[Zt] + " " + zt + "% " + Lt + "%";
        return zt = Lt, re;
      });
      gt = '<div class="wbScale" role="meter" aria-label="' + It(At.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ld + '" aria-valuenow="' + V + '" style="background:linear-gradient(to right, ' + Et.join(", ") + ')"><i style="left:' + Q(V) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ld + " " + Oc + "</span></div>";
    } else gt = '<span class="wbGraphNote"><span>' + It(yi(p, g)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Mi(y) + '</span><span class="wbText"><span class="wbName">' + It(vr(p, g)) + '</span><span class="wbSub">' + It(yi(p, g)) + (Y ? " · " + It(At.aqLevel[Y]) : "") + '</span></span><button class="wbBack" title="' + It(At.back) + '" data-wb="aq-close">' + Mi(Be.back) + '</button></div><div class="wbGraph">' + gt + "</div></div></div>";
  }
  const Se = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Bo = (p) => p <= 50 ? "Good" : p <= 100 ? "Moderate" : p <= 150 ? "Unhealthy for some" : p <= 200 ? "Unhealthy" : p <= 300 ? "Very unhealthy" : "Hazardous";
  function We(p) {
    const g = /* @__PURE__ */ new Map();
    return Object.values(p.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && wd.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && Zr(y) && Os(p, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      g.has(y.attributes.device_class) || g.set(y.attributes.device_class, y);
    }), wd.map((y) => g.get(y)).filter(Boolean);
  }
  const $o = (p) => Object.values(p.states || {}).filter((g) => {
    var y, C;
    return g.entity_id.startsWith("sensor.") && Zr(g) && Os(p, g.entity_id) && (((C = (y = p.entities) == null ? void 0 : y[g.entity_id]) == null ? void 0 : C.translation_key) ?? g.entity_id).toLowerCase().includes("pollen");
  }), La = ["none", "very_low", "low", "moderate", "high", "very_high"], ea = (p) => Ie(p.state) ? Number(p.state) : La.indexOf(String(p.state).toLowerCase().replace(/ /g, "_")), Aa = (p) => {
    const g = String(p).replace(/_/g, " ");
    return g[0].toUpperCase() + g.slice(1);
  }, $r = (p, g, y) => {
    const C = y ? p === "aqi" ? g <= 50 ? "good" : g <= 100 ? "moderate" : "poor" : p === "pm25" ? dd(g) : null : null;
    return C === "good" || C === "fair" ? At.advice.window : C === "moderate" || C === null ? At.advice.fine : At.advice.closed;
  }, Xr = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Lr = (p) => Xr[p <= 50 ? 0 : p <= 100 ? 1 : p <= 150 ? 2 : p <= 200 ? 3 : p <= 300 ? 4 : 5], In = "M43 43q1 8 0 10M77 42q1 8 -1 10", Da = {
    good: [In, "M34 69Q61 98 86 67"],
    fair: [In, "M40 74Q61 89 81 72"],
    moderate: [In, "M41 79Q60 76 80 81"],
    poor: [In, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Bi = (p) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Da[p][0] + '"></path><path d="' + Da[p][1] + '"></path></svg>';
  function Jr(p) {
    const g = We(p), y = g[0];
    if (!y) return vn({ icon: Be.airFilter, name: At.airQuality, sub: At.noAir, visual: no("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, N = Number(y.state), V = Ie(y.state), Y = C === "aqi" && V ? Bo(N) : C === "pm25" && V ? Se[dd(N)] : yi(p, y), pt = V ? xe(Math.round(N), p.locale) : String(y.state), Q = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", gt = V && C === "aqi" ? Lr(N) : V && C === "pm25" ? dd(N) : null;
    return vn(gt ? {
      icon: Be.airFilter,
      name: At.airQuality,
      sub: Y,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Fc[gt] + '">' + Bi(gt) + '<div class="wbAqBig"><span class="wbAqNum">' + It(pt) + "</span>" + (Q ? '<span class="wbAqUnit">' + It(Q) + "</span>" : "") + "</div></div>" + cd(no(pt, Q)),
      callouts: [$r(C, N, V), ...g.slice(1, 3).map((yt) => [vr(p, yt), yi(p, yt)])]
    } : {
      icon: Be.airFilter,
      name: At.airQuality,
      sub: Y,
      cls: "wbBase",
      zone: no(pt, Q),
      callouts: [$r(C, N, V), ...g.slice(1, 3).map((yt) => [vr(p, yt), yi(p, yt)])]
    });
  }
  const Xe = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Cn = (p) => {
    const g = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(p) ? Math.round(p) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: g }, (y, C) => {
      const [N, V] = Xe[C % 3], Y = 10 + C * 7 % 9, pt = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + N + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Y + "s;animation-delay:-" + (C * 2.3 % Y).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + pt.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % pt).toFixed(1) + 's">' + V + "</span></span></span>";
    }).join("") + "</div>";
  };
  function ge(p) {
    const g = $o(p).sort((N, V) => ea(V) - ea(N));
    if (!g.length) return vn({ icon: Be.flower, name: At.pollen, sub: At.noPollen, visual: no("–", ""), cls: "wbBase" });
    const y = g[0], C = (N) => Ie(N.state) ? yi(p, N) : Aa(N.state);
    return vn({
      icon: Be.flower,
      name: At.pollen,
      sub: vr(p, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: Cn(ea(y)) + no(C(y), ""),
      callouts: g.slice(0, 3).map((N) => [vr(p, N), C(N)])
    });
  }
  function Xo(p) {
    const g = Date.now(), y = R("hourly").filter((V) => {
      const Y = new Date(V.datetime).getTime();
      return Y > g - De && Y < g + 12 * De;
    }), C = y.find((V) => (V.precipitation_probability ?? 0) >= 50 || (V.precipitation ?? 0) >= 0.2), N = C ? Xa(At.rainFrom, { time: Ja(new Date(Math.max(g, new Date(C.datetime).getTime())), p) }) : y.length ? At.noRain12 : void 0;
    return vn({ icon: Be.radar, name: At.rainRadar, sub: N, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Jo = {
    current: Kr,
    hourly: Gt,
    sun: an,
    moon: Do,
    wind: ca,
    uv_index: _i,
    compared_to_average: Cr,
    humidity: nn,
    pressure: Ws,
    precipitation: Sn,
    visibility: Di,
    air_quality: Tr,
    aq_tile: Jr,
    pollen_tile: ge,
    radar_tile: Xo
  }, Qo = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Ro = (p, g) => {
    var y;
    return g.toLocaleDateString((y = p.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, io = (p) => {
    const g = new Date(p);
    return g.setMinutes(g.getMinutes() - g.getTimezoneOffset()), g.toISOString().slice(0, 10);
  }, ro = () => {
    const p = Z.range, g = Date.now();
    if (p.preset !== "custom") {
      const N = Qo.find(([V]) => V === p.preset)[2];
      return [g - N * Rn, g];
    }
    const y = yr(/* @__PURE__ */ new Date(p.from + "T00:00")).getTime(), C = Math.min(g, yr(/* @__PURE__ */ new Date(p.to + "T00:00")).getTime() + Rn);
    return [Math.min(y, C - De), C];
  }, Qr = (p) => {
    const g = Z.range;
    if (g.preset !== "custom") return Qo.find(([N]) => N === g.preset)[1];
    const [y, C] = ro();
    return g.from === g.to ? Ro(p, new Date(y)) : Ro(p, new Date(y)) + " – " + Ro(p, new Date(C - 1));
  }, Zn = () => Z.range.preset === "custom" ? Z.range.from + "_" + Z.range.to : Z.range.preset, so = (p, g) => g - p <= 2 * Rn, ts = (p, g, y, C) => so(y, C) ? Ja(g, p) : Ro(p, g), Ri = (p, g = 60) => {
    const y = Math.max(1, Math.ceil(p.length / g));
    return p.filter((C, N) => N % y === 0 || N === p.length - 1);
  }, lo = (p, g, y, C, N = !1) => p.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [g],
    minimal_response: N,
    no_attributes: N,
    significant_changes_only: !1
  }), on = (p) => async (g, y, C, N) => {
    const V = sa(g, y, p);
    if (!V) return [];
    const Y = V.stateObj.entity_id, pt = await lo(g, Y, C, N);
    return Ri(((pt == null ? void 0 : pt[Y]) ?? []).map((Q) => {
      var Tt;
      const gt = ((Tt = Q.a) == null ? void 0 : Tt[p]) ?? (Ie(Q.s) ? Number(Q.s) : void 0), yt = (Q.lu ?? Q.lc) * 1e3;
      return typeof gt == "number" && yt >= C && yt <= N ? { t: new Date(yt), value: gt } : null;
    }).filter(Boolean)).map((Q) => ({ label: ts(g, Q.t, C, N), value: Q.value }));
  }, Ga = (p, g) => async (y, C, N, V) => {
    const Y = p(y);
    if (!Y) return [];
    const pt = Y.entity_id, Q = await lo(y, pt, N, V, !0);
    return Ri(((Q == null ? void 0 : Q[pt]) ?? []).map((gt) => {
      const yt = g(gt.s), Tt = gt.lu * 1e3;
      return yt == null || !Number.isFinite(yt) || Tt < N || Tt > V ? null : { t: new Date(Tt), value: yt };
    }).filter(Boolean)).map((gt) => ({ label: ts(y, gt.t, N, V), value: gt.value }));
  }, Pi = (p, g) => async (y, C, N, V) => {
    const Y = Sl(y);
    if (!Y) return [];
    const pt = [];
    if (so(N, V)) for (let Q = N; Q <= V; Q += De / 2) pt.push({ label: Ja(new Date(Q), y), value: p(new Date(Q), Y) });
    else for (let Q = V; Q >= N; Q -= Rn) {
      const gt = new Date(Q), yt = g(gt, Y, y);
      yt != null && pt.unshift({ label: Ro(y, gt), value: yt });
    }
    return Ri(pt);
  }, Kn = (p) => $o(p).sort((g, y) => ea(y) - ea(g))[0], Hn = (p, g, y) => {
    const C = sa(p, g, y);
    return C ? wr(p, C.stateObj, y) : "";
  }, ke = {
    current: { name: () => At.modes.temperature, icon: () => Be.sunny, load: on("temperature"), fmt: (p, g, y) => Ke(p, y), now: (p, g) => {
      var y;
      return Ke(p, (y = sa(p, g, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => At.sun,
      icon: () => Be.sunny,
      load: Pi((p, g) => Math.round(yd(p, g.lat, g.lon) / kn), (p, g, y) => {
        const C = Hs(y, p);
        return C.rise && C.set ? Math.round((C.set - C.rise) / De * 10) / 10 : null;
      }),
      fmt: (p, g, y, C) => C ? xe(y, p.locale) + "°" : xe(y, p.locale) + " h",
      sub: (p) => p ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => At.moon,
      icon: () => Be.night,
      load: Pi((p) => Math.round($d(p).fraction * 100), (p) => Math.round($d(p).fraction * 100)),
      fmt: (p, g, y) => xe(y, p.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => At.metrics.uv_index, icon: () => Be.sunnyAlert, load: on("uv_index"), fmt: (p, g, y) => xe(Math.round(y * 10) / 10, p.locale), now: (p, g) => {
      const y = sa(p, g, "uv_index");
      return y ? xe(Number(y.value), p.locale) : "";
    } },
    humidity: { name: () => At.metrics.humidity, icon: () => Be.waterPercent, load: on("humidity"), fmt: (p, g, y) => xe(Math.round(y), p.locale) + "%", now: (p, g) => {
      const y = sa(p, g, "humidity");
      return y ? xe(Math.round(Number(y.value)), p.locale) + "%" : "";
    } },
    pressure: { name: () => At.metrics.pressure, icon: () => Be.gauge, load: on("pressure"), fmt: (p, g, y) => xe(Math.round(y), p.locale) + " " + Hn(p, g, "pressure"), now: (p, g) => {
      const y = sa(p, g, "pressure");
      return y ? xe(Math.round(Number(y.value)), p.locale) + " " + Hn(p, g, "pressure") : "";
    } },
    wind: { name: () => At.wind, icon: () => Be.windy, load: on("wind_speed"), fmt: (p, g, y) => xe(Math.round(y), p.locale) + " " + Hn(p, g, "wind_speed"), now: (p, g) => {
      const y = sa(p, g, "wind_speed");
      return y ? xe(Math.round(Number(y.value)), p.locale) + " " + Hn(p, g, "wind_speed") : "";
    } },
    visibility: { name: () => At.metrics.visibility, icon: () => Be.eyeOutline, load: on("visibility"), fmt: (p, g, y) => xe(Math.round(y * 10) / 10, p.locale) + " " + Hn(p, g, "visibility"), now: (p, g) => {
      const y = sa(p, g, "visibility");
      return y ? xe(Number(y.value), p.locale) + " " + Hn(p, g, "visibility") : "";
    } },
    aq_tile: {
      name: (p) => We(p)[0] ? vr(p, We(p)[0]) : At.airQuality,
      icon: () => Be.airFilter,
      load: Ga((p) => We(p)[0], (p) => Ie(p) ? Number(p) : null),
      fmt: (p, g, y) => {
        var V, Y;
        const C = We(p)[0], N = (V = C == null ? void 0 : C.attributes) == null ? void 0 : V.device_class;
        return xe(Math.round(y * 10) / 10, p.locale) + (N === "aqi" ? " AQI" : (Y = C == null ? void 0 : C.attributes) != null && Y.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (p) => {
        const g = We(p)[0];
        return g ? yi(p, g) : "";
      }
    },
    pollen_tile: {
      name: (p) => Kn(p) ? vr(p, Kn(p)) : At.pollen,
      icon: () => Be.flower,
      load: Ga(Kn, (p) => {
        const g = ea({ state: p });
        return g < 0 ? null : g;
      }),
      fmt: (p, g, y) => Aa(La[Math.round(y)] || ""),
      now: (p) => {
        const g = Kn(p);
        return g ? Aa(g.state) : "";
      }
    }
  }, rn = {};
  let pa = null;
  async function Ni(p) {
    var Y;
    const g = l == null ? void 0 : l();
    if (!g || !ke[p]) return;
    const y = p + "|" + Zn(), [C, N] = ro();
    if (rn[y] && Date.now() - rn[y].at < 5 * Va) return;
    rn[y] = { at: Date.now(), points: null };
    try {
      rn[y].points = await ke[p].load(g, Ca(g), C, N);
    } catch {
      rn[y].points = [];
    }
    oa(!0), pa === p && Z.graph === p && (pa = null, Rc(at[p].el.querySelector(".wbGraphCard")));
    const V = Z.graph === p && ((Y = at[p]) == null ? void 0 : Y.el.querySelector(".wbGraph .wbChart"));
    V && Wp(V, V.querySelector(".wbLine"), V.querySelectorAll(".wbArea"));
  }
  function js(p, g) {
    const y = Z.range, C = io(Date.now()), [N, V] = ro(), Y = y.pickFrom || io(N), pt = y.pickTo || io(V - 1);
    return '<div class="wbRangePick' + (g ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Qo.map(([Q, gt]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === Q) + '" data-wb="graph-preset" data-range="' + Q + '" data-wb-focus="graph-preset-' + Q + '">' + It(gt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Y + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + pt + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function es(p, g, y) {
    var jt;
    const C = ke[y], [N, V] = ro(), Y = so(N, V), pt = (jt = rn[y + "|" + Zn()]) == null ? void 0 : jt.points, Q = at[y].el, gt = Math.max(120, Q.clientWidth - 2 * 18 - 32), yt = Math.max(40, Q.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), Tt = pt ? pt.length > 1 ? $c(pt, (zt) => C.fmt(p, g, zt, Y), yt, gt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Gp(C.icon(p)) + '</div><div class="wbText"><span class="wbName">' + It(C.name(p)) + '</span><span class="wbSub">' + It(C.sub ? C.sub(Y) : C.now ? C.now(p, g) : "") + '</span></div><button class="wbBack" title="' + It(At.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + Mi(Be.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!Z.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Mi(Be.calendar) + "<span>" + It(Qr(p)) + "</span>" + Mi(Be.chevronDown) + '</button><div class="wbGraph">' + Tt + "</div></div>" + (Z.picking ? js(p, Q.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function oa(p) {
    var Tt, jt, zt;
    const g = l == null ? void 0 : l();
    if (!g || K) return;
    const y = Ca(g);
    xt(g, y), St.lastFetch || ie();
    const C = Pt(g), N = Zc(g), V = Xd(g), Y = [
      ...y.map((Et) => g.states[Et]),
      g.states["sun.sun"],
      N && g.states[N],
      V && g.states[V],
      ...C.air.map((Et) => g.states[Et]),
      ...C.pollen.map((Et) => g.states[Et]),
      ...q.some((Et) => I.includes(Et)) ? [...We(g), ...$o(g)] : [],
      g.locale,
      g.config,
      g.entities,
      Math.floor(Date.now() / Va)
    ];
    if (!p && j && Y.length === j.length && Y.every((Et, Zt) => Et === j[Zt])) return;
    j = Y;
    const pt = D.getRootNode(), Q = pt.activeElement || document.activeElement;
    for (const Et of q) {
      const Zt = at[Et];
      let Ot = "";
      try {
        Ot = (Z.graph === Et ? es(g, y, Et) : Jo[Et](g, y)) || "";
      } catch {
        Ot = "";
      }
      if (Ot === Zt.html) continue;
      const Lt = Q && Zt.el.contains(Q) ? (Tt = Q.dataset) == null ? void 0 : Tt.wbFocus : void 0, re = Zt.el.querySelector(".wbStripScroll"), Kt = re ? re.scrollLeft : null;
      Zt.html = Ot, Zt.el.hidden = !Ot, Zt.el.innerHTML = Ot;
      const Le = Zt.el.querySelector(".wbStripScroll");
      Le && Kt != null ? Le.scrollTo({ left: Kt }) : Le != null && Le.dataset.start && Le.scrollTo({ left: Number(Le.dataset.start) * Le.clientWidth / Number(Le.dataset.span) }), Lt && !ot && ((jt = Zt.el.querySelector('[data-wb-focus="' + Lt + '"]')) == null || jt.focus());
    }
    Eo(), ot && ((zt = D.querySelector('[data-wb-focus="' + ot + '"]')) == null || zt.focus({ preventScroll: !0 }), ot = null);
    let gt = !1, yt = !1;
    for (const Et of q) {
      const Zt = at[Et], Ot = !Zt.el.hidden, Lt = G[Et] === "wide" || rt.includes(Et), re = q.indexOf(Et) >= q.indexOf("moon"), Kt = Ot && (re && Lt && !gt || !Lt && !yt);
      Kt && Lt && (gt = !0), Kt && !Lt && (yt = !0), Zt.el.toggleAttribute("data-break", Kt);
    }
    Fi(performance.now());
  }
  function $n() {
    wt || K || (wt = !0, queueMicrotask(() => {
      wt = !1, oa(!0);
    }));
  }
  function as() {
    const p = getComputedStyle(D), g = (Y) => p.getPropertyValue(Y).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Y, pt]) => {
      g(pt) && (y[Y] = g(pt));
    });
    const C = g("--color-text-primary") || "#f1f1f1", N = g("--color-bg-card") || "#222222", V = !!D.closest(".light");
    return { colors: { ...Mn, ...y }, ink: V ? C : N, paper: V ? N : C };
  }
  const co = (p, g) => {
    var y;
    p.width !== g.w && (p.width = g.w), p.height !== g.h && (p.height = g.h), (y = p.getContext("2d")) == null || y.putImageData(new ImageData(g.data, g.w, g.h), 0, 0);
  }, Na = () => m && !nh();
  function Ii(p, g) {
    D.querySelectorAll("canvas[data-wb-strip]").forEach((y) => Hi(y, nt[y.dataset.wbStrip], p, g));
  }
  function Hi(p, g, y, C) {
    if (!g || !p.getClientRects().length) return;
    const N = p.clientWidth, V = p.clientHeight;
    if (!N || !V) return;
    const Y = { width: N, height: V, columns: g.columns || Pc, colors: C.colors, clock: y, ambient: Na(), seed: g.seed, soft: 1.5 };
    if (c === "smooth") {
      const pt = Math.min(2, window.devicePixelRatio || 1), Q = Math.round(N * pt), gt = Math.round(V * pt);
      p.width !== Q && (p.width = Q), p.height !== gt && (p.height = gt);
      const yt = p.getContext("2d");
      if (!yt) return;
      yt.setTransform(pt, 0, 0, pt, 0, 0), tf(yt, g.segs, Y);
    } else co(p, Qu(g.segs, { ...Y, px: 2, oneBit: c === "onebit", ink: C.ink, paper: C.paper }));
  }
  function Fi(p) {
    if (K) return;
    const g = as();
    if (c !== "smooth") {
      const y = Na();
      D.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && co(C, Sp(dc(C.dataset.wbWx, g.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: g.colors, ink: g.ink, paper: g.paper, clock: p, idle: y }));
      });
    }
    D.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, N = y.clientHeight, V = Number(y.dataset.wbSea), Y = C + "x" + N + ":" + V + ":" + g.colors.skyClearDay;
      !C || !N || !(V > 0) || y.dataset.painted === Y || (y.dataset.painted = Y, co(y, gf(C, N, V, g.colors)));
    }), Ii(p, g);
  }
  function Ia(p) {
    if (ft = 0, !(K || !Na())) {
      if (!document.hidden)
        if (c === "smooth") Ii(p, as());
        else {
          const g = Math.floor(p / 100);
          g !== ht && (ht = g, Fi(p));
        }
      ft = requestAnimationFrame(Ia);
    }
  }
  function Fn() {
    D.classList.toggle("wbMotion", Na()), !ft && !K && Na() && (ft = requestAnimationFrame(Ia));
  }
  function Oi(p) {
    var y, C, N, V, Y, pt, Q;
    const g = (C = (y = p.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!g || !D.contains(g)) {
      const gt = (V = (N = p.target).closest) == null ? void 0 : V.call(N, ".wbItem"), yt = gt == null ? void 0 : gt.dataset.card;
      if (!gt || !D.contains(gt) || !ke[yt] || Z.graph === yt || D.closest(".tfEditing") || gt.offsetHeight < 200 || yt === "current" && k) return;
      Z.graph = yt, ot = "graph-close", oa(!0), (Y = rn[yt + "|" + Zn()]) != null && Y.points ? Rc(at[yt].el.querySelector(".wbGraphCard")) : pa = yt, Ni(yt);
      return;
    }
    switch (g.dataset.wb) {
      case "day": {
        Z.openDay = Number(g.dataset.index), Z.opener = g.dataset.wbFocus, ot = "back-day";
        const gt = la()[Z.openDay], yt = !St.todayHistory || St.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - St.todayHistory.fetched > If;
        gt && Is(new Date(gt.datetime), /* @__PURE__ */ new Date()) && yt && na();
        break;
      }
      case "close-day":
        Z.openDay = void 0, ot = Z.opener, Z.opener = void 0;
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
          localStorage.setItem(tt, Z.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const gt = D.querySelector(".wbStripScroll");
        gt && gt.scrollTo({ left: Number(g.dataset.hours) * gt.clientWidth / Number(gt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        Z.aq = g.dataset.entity, ye(Z.aq);
        break;
      case "aq-close":
        Z.aq = void 0;
        break;
      case "graph-close":
        Z.graph = void 0, Z.picking = !1;
        break;
      case "graph-pick":
        Z.picking = !Z.picking, ot = Z.picking ? "graph-preset-" + (Z.range.preset === "custom" ? "day" : Z.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        Z.range = { preset: g.dataset.range }, Z.picking = !1, ot = "graph-pick", oa(!0), Ni(Z.graph);
        return;
      case "graph-apply": {
        let gt = Z.range.pickFrom || ((pt = D.querySelector("[data-range-from]")) == null ? void 0 : pt.value), yt = Z.range.pickTo || ((Q = D.querySelector("[data-range-to]")) == null ? void 0 : Q.value);
        if (!gt || !yt) return;
        gt > yt && ([gt, yt] = [yt, gt]), Z.range = { preset: "custom", from: gt, to: yt }, Z.picking = !1, ot = "graph-pick", oa(!0), Ni(Z.graph);
        return;
      }
      default:
        return;
    }
    oa(!0);
  }
  function ti(p) {
    var g, y, C, N, V, Y;
    p.key === "Escape" && Z.openDay !== void 0 && ((y = (g = p.target).closest) != null && y.call(g, '[data-wb-open="day"]')) ? (Z.openDay = void 0, ot = Z.opener, Z.opener = void 0, oa(!0)) : p.key === "Escape" && Z.picking && ((N = (C = p.target).closest) != null && N.call(C, ".wbGraphCard")) ? (Z.picking = !1, ot = "graph-pick", oa(!0)) : p.key === "Escape" && Z.graph && ((Y = (V = p.target).closest) != null && Y.call(V, ".wbGraphCard")) && (Z.graph = void 0, oa(!0));
  }
  let Ha = null;
  function qi(p) {
    var y, C;
    const g = (C = (y = p.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !g || p.button !== 0 || (Ha = { startX: p.pageX, left: g.scrollLeft, moved: !1 }, g.classList.add("wbHeld"), window.addEventListener("mousemove", Wi), window.addEventListener("mouseup", Po, { once: !0 }));
  }
  function Wi(p) {
    const g = D.querySelector(".wbStripScroll");
    if (!Ha || !g) return;
    const y = p.pageX - Ha.startX;
    !Ha.moved && Math.abs(y) > 1 && (Ha.moved = !0, g.classList.add("wbDragging")), g.scrollLeft = Ha.left - y;
  }
  function Po() {
    Ha = null, window.removeEventListener("mousemove", Wi);
    const p = D.querySelector(".wbStripScroll");
    if (!p) return;
    p.classList.remove("wbDragging", "wbHeld");
    const g = [...p.querySelectorAll(".wbSnap")];
    if (g.length) {
      const y = g.reduce((C, N) => Math.abs(N.offsetLeft - p.scrollLeft) < Math.abs(C.offsetLeft - p.scrollLeft) ? N : C);
      p.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const ei = (p) => {
    var y, C;
    const g = p.target;
    (y = g.matches) != null && y.call(g, "[data-range-from]") ? Z.range.pickFrom = g.value : (C = g.matches) != null && C.call(g, "[data-range-to]") && (Z.range.pickTo = g.value);
  };
  D.addEventListener("change", ei), D.addEventListener("click", Oi), D.addEventListener("keydown", ti), D.addEventListener("mousedown", qi);
  const ns = 64, No = 30;
  let Tn = null, ue = 0;
  const On = () => {
    ue = 0, D.querySelectorAll(".wbPollen .wbPush").forEach((p) => {
      let g = 0, y = 0;
      if (Tn) {
        const C = p.parentElement.getBoundingClientRect(), N = C.left + C.width / 2 - Tn.x, V = C.top + C.height / 2 - Tn.y, Y = Math.hypot(N, V) || 1;
        if (Y < ns) {
          const pt = (1 - Y / ns) * No;
          g = N / Y * pt, y = V / Y * pt;
        }
      }
      p.style.transform = g || y ? "translate(" + g.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), Tn && (ue = requestAnimationFrame(On));
  }, Io = (p) => {
    var y, C;
    if (!((C = (y = p.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || Oa != null && Oa.matches) {
      Tn && (Tn = null, ue || (ue = requestAnimationFrame(On)));
      return;
    }
    Tn = { x: p.clientX, y: p.clientY }, ue || (ue = requestAnimationFrame(On));
  }, ai = () => {
    Tn = null, ue || (ue = requestAnimationFrame(On));
  };
  D.addEventListener("pointermove", Io), D.addEventListener("pointerleave", ai);
  const Fa = typeof ResizeObserver == "function" ? new ResizeObserver(() => Fi(performance.now())) : null;
  Fa == null || Fa.observe(D);
  const Oa = (po = window.matchMedia) == null ? void 0 : po.call(window, "(prefers-reduced-motion: reduce)"), He = () => {
    Fn(), Fi(performance.now());
  };
  (Ar = Oa == null ? void 0 : Oa.addEventListener) == null || Ar.call(Oa, "change", He);
  const qn = [
    setInterval(() => {
      et = /* @__PURE__ */ new Date(), oa(!0);
    }, Gf),
    setInterval(() => {
      ct = /* @__PURE__ */ new Date(), oa(!0);
    }, Uf),
    setInterval(ie, jf)
  ];
  return oa(!0), Fn(), {
    update() {
      oa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      oa(!0);
    },
    setStyle(p) {
      !p || p === c || (c = p, D.dataset.style = c, oa(!0), Fn());
    },
    destroy() {
      var p;
      cancelAnimationFrame(ue), D.removeEventListener("pointermove", Io), D.removeEventListener("pointerleave", ai), K = !0, qn.forEach(clearInterval), ft && cancelAnimationFrame(ft), ft = 0, Fa == null || Fa.disconnect(), (p = Oa == null ? void 0 : Oa.removeEventListener) == null || p.call(Oa, "change", He), Po(), D.removeEventListener("click", Oi), D.removeEventListener("change", ei), D.removeEventListener("keydown", ti), D.removeEventListener("mousedown", qi), ["daily", "hourly"].forEach(W), D.remove();
    }
  };
}
const Cl = "#E1E1E1", Qc = "#F7F4F0", Jd = "#03a9f4", Me = 14, Ee = 172;
let Rh = 0;
const Je = (n) => Math.round(n * 100) / 100, Ko = (n, l, i) => Math.max(l, Math.min(i, n)), Ti = (n, l, i, c, m, x) => '<rect x="' + Je(n) + '" y="' + Je(l) + '" width="' + Je(i) + '" height="' + Je(c) + '" fill="' + m + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", Qd = (n) => n.map((l, i) => (i ? "L" : "M") + Je(l[0]) + " " + Je(l[1])).join("");
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
  for (let E = 0; E < br.length - 1; E++) if (l >= br[E][0] && l <= br[E + 1][0]) {
    i = br[E], c = br[E + 1];
    break;
  }
  const m = (l - i[0]) / (c[0] - i[0]), x = m * m * (3 - 2 * m), k = (E, S) => {
    const D = parseInt(E.slice(1), 16), z = parseInt(S.slice(1), 16);
    return "#" + [16, 8, 0].map((I) => Math.round((D >> I & 255) + ((z >> I & 255) - (D >> I & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], c[1][0]), bot: k(i[1][1], c[1][1]), warm: k(i[1][2], c[1][2]), cool: k(i[1][3], c[1][3]), op: i[1][4] + (c[1][4] - i[1][4]) * x, t: l };
}
function Nh(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, x = Math.max(i, c, m), k = Math.min(i, c, m);
  let E = 0, S = 0;
  const D = (x + k) / 2;
  if (x !== k) {
    const z = x - k;
    S = D > 0.5 ? z / (2 - x - k) : z / (x + k), E = (x === i ? (c - m) / z + (c < m ? 6 : 0) : x === c ? (m - i) / z + 2 : (i - c) / z + 4) / 6;
  }
  return [E * 360, S * 100, D * 100];
}
function nu(n, l, i) {
  l = Ko(l, 0, 100) / 100, i = Ko(i, 0, 100) / 100;
  const c = (k) => (k + n / 30) % 12, m = l * Math.min(i, 1 - i), x = (k) => i - m * Math.max(-1, Math.min(c(k) - 3, Math.min(9 - c(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [ou, iu, ru] = Nh(Cl), tp = nu(ou, iu, Math.max(6, ru - 14)), Ih = nu(ou, iu, Math.min(96, ru + 16));
function Hh(n, l, i, c, m) {
  const x = Ee / 2, k = Ee * 0.12, E = x - (x - k) * n, S = (rt) => rt ** 1.3, D = Ko(i, -1.5, 1.5), z = (rt) => -(Math.abs(D) * 4.6 * rt ** 1.5) * Math.sign(D), I = n * 1.4, q = (rt, at) => {
    const K = Math.min(4.8, Math.abs(i) * 2.6) * (at ? 1 : -1) * Math.sign(i || 1), j = at ? rt + E : rt, ft = at ? rt : rt + E, ht = (St) => j + z(St) + K * Math.sin(St * Math.PI * 1.2 + c) * S(St) * 1.4 + I * Math.sin(St * Math.PI * 2 + c * 0.6) * S(St) * (at ? 1 : -1), wt = [[ft, Me]];
    for (let St = 0; St <= 12; St++) wt.push([ht(St / 12), Me + Ee * St / 12]);
    wt.push([ft, Me + Ee]);
    let ot = '<path d="' + Qd(wt) + 'Z" fill="' + Cl + '"/>';
    if (m) return ot;
    const tt = 1.35 + ((at ? i > 0 : i < 0) ? 0.35 : 0), _ = (St) => {
      const et = St / 7, ct = at ? 1 - et : et, nt = (1 - ct) ** 1.3, qt = rt + E * et;
      return Array.from({ length: 13 }, (T, R) => {
        const B = R / 12;
        return [qt + z(B) * nt + K * tt * Math.sin(B * Math.PI * 1.2 + c - ct * 3.2) * S(B) * 1.4 * nt + I * 1.6 * Math.sin(B * Math.PI * 2 + c * 0.6 - ct * 2.5) * S(B) * n * (0.4 + 0.6 * nt), Me + Ee * B];
      });
    }, Z = [1, 2, 3, 4, 5, 6].map(_);
    for (let St = 0; St < 6; St += 2) ot += '<path d="' + Qd(Z[St]) + Qd(Z[St + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ot;
  }, G = x - (x - k) * l;
  return { body: q(Me, !0) + q(Me + Ee - E, !1), rails: [{ x: Me + G - 4, y: Me, w: 4, h: Ee }, { x: Me + Ee - G, y: Me, w: 4, h: Ee }], head: 6.4 };
}
function Fh(n, l, i) {
  const c = Ee * (1 - n);
  let m = "";
  if (c > 1 && (m += Ti(Me, Me, Ee, c, Cl), !i))
    for (let x = 1; x < 7; x += 2) m += Ti(Me + Ee * x / 7, Me, Ee / 7, c, "#fff");
  return { body: m, rails: [{ x: Me, y: Me + Ee * (1 - l) - 7, w: Ee, h: 11 }], head: 10.4 };
}
function Oh(n, l, i, c) {
  const m = 9 - 7 * (i / 100), x = Me + Ee * (1 - n), k = Math.ceil(Ee / 10) + 1, E = Me + m / 2, S = (Me + Ee - m / 2 - E) / (k - 1), D = 0.8, z = 0.6, I = Array.from({ length: k }, (rt, at) => Math.max(E + at * z, Math.min(E + at * S, x - m / 2 - (k - 1 - at) * z))), q = I.slice(0, -1).map((rt, at) => Ko((I[at + 1] - rt - z) / (S - z), 0, 1));
  q.push(q[k - 2]);
  let G = "";
  return I.forEach((rt, at) => {
    const K = D + (m - D) * q[at], j = Math.max(0.5, K / 2), ft = Math.max(0.4, K * 0.114);
    G += Ti(Me, rt - j, Ee, Math.max(1, K), Cl), !c && K > 2.2 && (G += Ti(Me, rt + j - ft, Ee, ft, tp) + Ti(Me, rt - j, Ee, ft * 0.55, Ih, 0.75));
  }), c || [0.22, 0.78].forEach((rt) => {
    G += Ti(Me + Ee * rt - 0.7, Me, 1.4, Math.max(0, I[k - 1] + 1 - Me), tp, 0.85);
  }), { body: G, rails: [{ x: Me, y: Me + Ee * (1 - l) - 8, w: Ee, h: 8 }], head: 8.8 };
}
const ep = (n, l, i, c, m, x, k) => n === "curtain" ? Hh(l, i, m, x, k) : n === "venetian" ? Oh(l, i, c, k) : Fh(l, i, k);
function qh(n, l) {
  let i = "", c = "";
  return l.forEach((m) => {
    const x = m.w > m.h, k = Ko(x ? Me + Ee / 2 : m.x + m.w / 2, 17, 183), E = Ko(x ? m.y + m.h / 2 : Me + Ee / 2, 17, 183);
    i += x ? Ti(Me, Ko(m.y + m.h / 2, Me, Me + Ee) - 1, Ee, 2, Jd) : Ti(Ko(m.x + m.w / 2, Me, Me + Ee) - 1, Me, 2, Ee, Jd);
    const S = x ? "M" + Je(k - 4) + " " + Je(E - 3) + "l4 -3l4 3M" + Je(k - 4) + " " + Je(E + 3) + "l4 3l4 -3" : "M" + Je(k - 3) + " " + Je(E - 4) + "l-3 4l3 4M" + Je(k + 3) + " " + Je(E - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Je(k) + '" cy="' + Je(E) + '" r="11" fill="' + Jd + '" filter="url(#' + n + 's)"/><path d="' + S + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: c };
}
function Wh(n, l) {
  const i = /* @__PURE__ */ new Date(), c = Ph(i.getHours() + i.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), x = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, k = ep(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), E = l.ghostAlpha > 4e-3 && l.ghost != null ? ep(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", S = l.grip > 4e-3 ? qh(n, k.rails) : null, D = (z) => Ti(Me, Me, Ee, Ee, z);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Je(m) + '%" cy="' + Je(x) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Je(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Je(100 - m * 0.8) + '%" cy="' + Je(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Je(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Qc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + D("url(#" + n + "l)") + D("url(#" + n + "w)") + D("url(#" + n + "k)") + (E ? '<g opacity="' + Je(l.ghostAlpha) + '">' + E + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + Cl + '" filter="url(#' + n + 's)"/></g>' + (S ? '<g clip-path="url(#' + n + 'c)" opacity="' + Je(l.grip) + '">' + S.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Qc + '" stroke-width="3"/>' + (S ? '<g opacity="' + Je(l.grip) + '">' + S.knobs + "</g>" : "") + "</svg>";
}
function jh({ onMove: n, onSet: l }) {
  var ot;
  const i = "cv" + ++Rh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (ot = window.matchMedia) == null ? void 0 : ot.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, S = !1, D = !1, z = null, I = 0, q = 0;
  const G = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", rt = () => z || S || D || x.moving || x.target != null ? 1 : m ? performance.now() < q ? 1 : 0.4 : 0, at = () => {
    c.innerHTML = Wh(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function K(tt) {
    E = 0;
    const _ = k.last ? Math.min(0.064, (tt - k.last) / 1e3) : 1 / 60, Z = _ * 60;
    k.last = tt;
    const St = x.pos - k.pos, et = k.pos;
    k.pos += Math.sign(St) * Math.min(Math.abs(St), Math.max(10.5, Math.abs(St) * 1.4) * _), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - et) / Z * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== et || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * Z);
    const ct = x.tilt - k.tilt;
    k.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * _);
    const nt = rt();
    k.grip += (nt - k.grip) * Math.min(1, _ * (nt > k.grip ? 11 : 3.5)), Math.abs(nt - k.grip) < 0.01 && (k.grip = nt);
    const qt = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (qt - k.ghost) * Math.min(1, _ * (qt > k.ghost ? 16 : 3)), Math.abs(qt - k.ghost) < 4e-3 && (k.ghost = qt), at(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== nt || k.ghost !== qt ? E = requestAnimationFrame(K) : k.last = 0;
  }
  const j = () => {
    x && !E && (E = requestAnimationFrame(K));
  }, ft = setInterval(() => {
    x && !E && at();
  }, 60 * 1e3), ht = (tt) => {
    const _ = c.getBoundingClientRect();
    return G() === "x" ? (tt.clientX - _.left) / _.width : (tt.clientY - _.top) / _.height;
  };
  c.addEventListener("pointerdown", (tt) => {
    var St;
    if (!(x != null && x.canSet) || tt.button > 0) return;
    tt.preventDefault(), (St = c.setPointerCapture) == null || St.call(c, tt.pointerId);
    const _ = x.target ?? x.pos, Z = c.getBoundingClientRect();
    z = { p0: ht(tt), from: _, x0: tt.clientX, value: null, side: null }, x.kind === "curtain" && _ > 0 && (z.side = (tt.clientX - Z.left) / Z.width < 0.5 ? "L" : "R"), j();
  }), c.addEventListener("pointermove", (tt) => {
    if (!z) return;
    let _;
    if (x.kind === "curtain") {
      if (!z.side) {
        const St = tt.clientX - z.x0;
        if (Math.abs(St) < 4) return;
        z.side = St < 0 ? "L" : "R";
      }
      const Z = (Ee / 2 - Ee * 0.12) / 200;
      _ = z.from + (z.side === "L" ? -1 : 1) * ((ht(tt) - z.p0) / Z) * 100;
    } else _ = z.from - (ht(tt) - z.p0) / (Ee / 200) * 100;
    z.value = Ko(_, 0, 100), n(z.value);
  });
  const wt = () => {
    if (!z) return;
    const tt = z.value;
    z = null, tt != null && l(Math.round(tt)), j();
  };
  return c.addEventListener("pointerup", wt), c.addEventListener("pointercancel", wt), c.addEventListener("lostpointercapture", wt), c.addEventListener("pointerenter", () => {
    S = !0, j();
  }), c.addEventListener("pointerleave", () => {
    S = !1, j();
  }), c.addEventListener("focus", () => {
    D = c.matches(":focus-visible"), j();
  }), c.addEventListener("blur", () => {
    D = !1, j();
  }), c.addEventListener("keydown", (tt) => {
    if (!(x != null && x.canSet)) return;
    const _ = Math.round(x.target ?? x.pos), Z = tt.shiftKey ? 10 : 1, St = { ArrowUp: _ + Z, ArrowRight: _ + Z, ArrowDown: _ - Z, ArrowLeft: _ - Z, PageUp: _ + 25, PageDown: _ - 25, Home: 0, End: 100 }[tt.key];
    if (St == null) return;
    tt.preventDefault();
    const et = Ko(St, 0, 100);
    n(et), clearTimeout(I), I = setTimeout(() => l(et), 500);
  }), {
    el: c,
    update(tt) {
      const _ = !x;
      x = tt, _ && (k.pos = x.pos, k.tilt = x.tilt, q = performance.now() + 1500, m && setTimeout(j, 1600)), c.classList.toggle("x", G() === "x"), c.classList.toggle("y", G() === "y"), x.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), c.setAttribute("aria-orientation", G() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), c.setAttribute("aria-valuetext", x.text), j();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(ft), clearTimeout(I), c.remove();
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
}, it = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', np = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', pd = {
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
}, up = "move_assistant_house", fp = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], hp = "move-assistant-house-look", Jh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Qh = [["popup", "Popup"], ["sheet", "Sheet"]], tm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], em = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], am = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], nc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', om = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', mp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', su = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", bp = su(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), im = su(["M20 6L9 17L4 12"]), Zo = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + it(n || "") + '"' + (l ? ' data-icon-name="' + it(l) + '"' : "") + "></span>", rm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', sm = 1, lm = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], wp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ud = ["door", "window", "garage_door", "opening"], xp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, kl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], dm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], cm = 10, pm = 20, um = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, fm = ["living room", "bedroom", "office"];
function hm(n, { config: l, getHass: i }) {
  var bl, wl, Bs;
  const c = (t) => n.getElementById(t), m = c("app"), k = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Yo.get(ap) === "1", S = {};
  const D = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, z = (t, a, r) => D({ type: "call_service", domain: t, service: a, service_data: r }), I = n.querySelector("#appearancePane .toggleList");
  I && !c("densityToggle") && (I.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    E = !E, Yo.set(ap, E ? "1" : "0"), tt();
  }));
  const q = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Yt(t).device_class === "power" && /^(W|kW)$/.test(Yt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], G = (t, a, r, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + d.map(([u, b]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + r + '="' + u + '">' + b + "</button>").join("") + "</div>", rt = (t, a, r, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + r + "</div>";
  function at() {
    var $, st;
    if (!k || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], r = (dt, X) => '<div class="houseTab' + (dt === "look" ? " active" : "") + '" data-house-pane="' + dt + '"><section class="card">' + X + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([dt, X]) => '<button class="tab segBtn' + (dt === "look" ? " active" : "") + '" type="button" data-house-tab="' + dt + '">' + X + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    r("look", Jh.map(([dt, X]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + dt + '"><div class="tfCardTitle">' + X + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    r("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + r("sources", '<div class="toggleList">' + q.map(([dt, X, ut]) => rt(X, ut, '<select class="settingsSelect" data-source="' + dt + '" aria-label="' + X + '"></select>')).join("") + "</div>") + r("sums", '<div class="toggleList">' + Object.entries(ac).map(([dt, X]) => rt(X.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + dt + '" aria-label="' + X.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = (dt) => t.querySelector('[data-look-group="' + dt + '"]'), u = (dt) => dt == null ? void 0 : dt.closest(".toggleRow");
    [u(t.querySelector(".themeBtn"))].forEach((dt) => dt && d("look").appendChild(dt));
    const b = u(c("densityToggle"));
    b && (b.hidden = !0), [u(c("moreInfoChoice")), u(c("namesChoice"))].forEach((dt) => dt && d("house").appendChild(dt)), d("house").insertAdjacentHTML("beforeend", rt("Lights", "How lights show on the house page.", G("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + rt("Pad", "What the Dual Axis Controller’s pad sets on its tile.", G("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [u(c("hoursChoice")), u(c("wxStyleChoice"))].forEach((dt) => dt && d("weather").appendChild(dt));
    const f = c("housePane"), w = f.querySelector(".houseTabs"), M = w.querySelector(".rubberIndicator"), P = "homecore-light-view", H = (dt) => {
      f.classList.toggle("tfLightCardsOn", dt === "cards"), f.querySelectorAll("[data-light-view]").forEach((X) => X.setAttribute("aria-pressed", String(X.dataset.lightView === dt))), Yo.set(P, dt);
    };
    H(Yo.get(P) === "table" ? "table" : "cards"), f.querySelector(".tfLightView").addEventListener("click", (dt) => {
      const X = dt.target.closest("[data-light-view]");
      X && H(X.dataset.lightView);
    }), new ResizeObserver(() => j()).observe(f), (st = ($ = document.fonts) == null ? void 0 : $.ready) == null || st.then(() => j());
    const F = (dt) => {
      const X = w.querySelector(".tab.active");
      M.style.transition = "none", dt ? jp(M, M.offsetLeft, M.offsetWidth, X.offsetLeft, X.offsetWidth) : (M.style.left = X.offsetLeft + "px", M.style.width = X.offsetWidth + "px");
    };
    new ResizeObserver(() => F(!1)).observe(w), f.addEventListener("click", (dt) => {
      const X = dt.target.closest("[data-house-tab]");
      if (X) {
        w.querySelectorAll(".tab").forEach((o) => o.classList.toggle("active", o === X)), f.querySelectorAll(".houseTab").forEach((o) => o.classList.toggle("active", o.dataset.housePane === X.dataset.houseTab)), X.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), F(!0), j();
        return;
      }
      const ut = dt.target.closest("[data-light-fav]");
      if (ut) {
        ni(ut.dataset.lightFav);
        return;
      }
      const U = dt.target.closest("[data-light-pick]");
      if (U) {
        const [o, s] = U.dataset.lightPick.split("|"), h = { ...Pt[o] };
        U.dataset.v ? h[s] = U.dataset.v : delete h[s], Pt[o] = h, ce(), [...Ia.keys()].filter((v) => v.endsWith(":" + s)).forEach((v) => Ia.delete(v)), Oe();
        return;
      }
      const e = dt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!e || e.disabled)) {
        if (e.dataset.lights && (Pt.lights = e.dataset.lights), e.dataset.dacPad && (Pt.dacPad = e.dataset.dacPad), (e.dataset.lights || e.dataset.dacPad) && (ce(), Ia.clear()), e.dataset.sumToggle) {
          const o = e.dataset.sumToggle, s = new Set(J.hiddenSums || []);
          s.has(o) ? s.delete(o) : s.add(o), J = { ...J, hiddenSums: [...s] }, Ca();
        }
        Oe();
      }
    }), f.addEventListener("change", (dt) => {
      const X = dt.target;
      X.dataset.source && (J = { ...J, sources: { ...J.sources || {}, [X.dataset.source]: X.value || void 0 } }, Ca());
      const ut = X.dataset.lightStyle || X.dataset.lightPad;
      if (ut) {
        const U = X.dataset.lightStyle ? "lightStyles" : "lightPads", e = { ...Pt[U] };
        X.value ? e[ut] = X.value : delete e[ut], Pt[U] = e, ce(), [...Ia.keys()].filter((o) => o.endsWith(":" + ut)).forEach((o) => Ia.delete(o));
      }
      Oe();
    });
  }
  function K() {
    var F, $;
    Oi() && Fi();
    const t = c("housePane");
    if (!t) return;
    const a = !!customElements.get(Na);
    t.querySelectorAll("[data-lights]").forEach((st) => st.setAttribute("aria-pressed", String(st.dataset.lights === Pt.lights))), c("lightsRow").querySelector(".status").textContent = a || !Oi() ? "How lights show on the house page." : Hi === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((st) => st.setAttribute("aria-pressed", String(st.dataset.dacPad === Pt.dacPad))), c("dacPadRow").hidden = !Oi();
    for (const st of t.querySelectorAll("[data-source]")) {
      if (st === n.activeElement) continue;
      const [dt] = q.find(([ut]) => ut === st.dataset.source), X = Object.keys(S).filter(q.find(([ut]) => ut === dt)[3]).sort((ut, U) => Bt(ut).localeCompare(Bt(U)));
      st.dataset.sig !== X.join(",") && (st.innerHTML = '<option value="">Automatic</option>' + X.map((ut) => '<option value="' + it(ut) + '">' + it(Bt(ut)) + "</option>").join(""), st.dataset.sig = X.join(",")), st.value = X.includes((F = J.sources) == null ? void 0 : F[dt]) ? J.sources[dt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((st) => {
      const dt = !(J.hiddenSums || []).includes(st.dataset.sumToggle);
      st.classList.toggle("on", dt), st.setAttribute("aria-checked", String(dt));
    });
    const r = c("lightRows"), d = c("lightCards"), u = n.activeElement, b = r != null && r.contains(u) || d != null && d.contains(u) ? u : null;
    if (!r || b != null && b.matches("select")) {
      j();
      return;
    }
    const f = new Set(jt()), w = (st, dt, X, ut) => '<option value="' + st + '"' + (st === X ? " selected" : "") + ">" + dt + "</option>", M = Object.keys(S).filter((st) => st.startsWith("light.")).sort((st, dt) => !ye.get(st) - !ye.get(dt) || (ye.get(st) || "").localeCompare(ye.get(dt) || "") || Bt(st).localeCompare(Bt(dt))).map((st) => {
      const dt = Pt.lightStyles[st] || "", X = Pt.lightPads[st] || "", ut = f.has(st), U = it(Bt(st));
      return "<tr><td><strong>" + U + "</strong></td><td>" + it(ye.get(st) || "—") + "</td><td>" + it(We(st)) + '</td><td class="metaSwitchCol"><button class="switch' + (ut ? " on" : "") + '" type="button" role="switch" aria-checked="' + ut + '" data-light-fav="' + it(st) + '" aria-label="' + U + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + it(st) + '" aria-label="' + U + ' tile">' + w("", "Default", dt) + w("tile", "HomeCore tile", dt) + w("dac", "Dual Axis Controller", dt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + it(st) + '" aria-label="' + U + ' pad"' + (Fn(st) ? "" : " disabled") + ">" + w("", "Default", X) + w("temperature", "Temperature", X) + w("colour", "Colour", X) + "</select></td></tr>";
    }).join(""), P = (st, dt, X, ut, U) => '<div class="themeChoice" role="group" aria-label="' + X + '">' + ut.map(([e, o]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (e === U) + '" data-light-pick="' + st + "|" + it(dt) + '" data-v="' + e + '">' + o + "</button>").join("") + "</div>", H = Object.keys(S).filter((st) => st.startsWith("light.")).sort((st, dt) => !ye.get(st) - !ye.get(dt) || (ye.get(st) || "").localeCompare(ye.get(dt) || "") || Bt(st).localeCompare(Bt(dt))).map((st) => {
      const dt = f.has(st), X = it(Bt(st)), ut = [ye.get(st), We(st)].filter(Boolean).map(it).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + X + '</strong><div class="status">' + ut + "</div></div></div>" + rt("Favourite", "", '<button class="switch' + (dt ? " on" : "") + '" type="button" role="switch" aria-checked="' + dt + '" data-light-fav="' + it(st) + '" aria-label="' + X + ' is a favourite"></button>') + rt("Tile", "", P("lightStyles", st, X + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Pt.lightStyles[st] || "")) + (Fn(st) ? rt("Pad", "", P("lightPads", st, X + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Pt.lightPads[st] || "")) : "") + "</div>";
    }).join("");
    r.dataset.html !== M && (r.innerHTML = M, r.dataset.html = M), d.dataset.html !== H && (d.innerHTML = H, d.dataset.html = H), b != null && b.dataset.lightFav && (($ = (d.contains(b) ? d : r).querySelector('[data-light-fav="' + CSS.escape(b.dataset.lightFav) + '"]')) == null || $.focus({ preventScroll: !0 })), j();
  }
  function j() {
    var a, r, d;
    const t = c("housePane");
    if (t)
      for (const u of t.querySelectorAll(".themeChoice")) {
        const b = [...u.querySelectorAll("button")];
        let f = (a = u.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? u.nextElementSibling : null;
        if (!f) {
          f = document.createElement("select"), f.className = "settingsSelect tfChoiceList", f.setAttribute("aria-label", u.getAttribute("aria-label") || ((d = (r = u.closest(".toggleRow")) == null ? void 0 : r.querySelector("strong")) == null ? void 0 : d.textContent) || ""), f.addEventListener("change", () => {
            var F;
            return (F = b[Number(f.value)]) == null ? void 0 : F.click();
          }), u.after(f);
          const H = () => {
            f.innerHTML = b.map(($, st) => '<option value="' + st + '"' + ($.disabled ? " disabled" : "") + ">" + it($.textContent) + "</option>").join("");
            const F = b.findIndex(($) => $.getAttribute("aria-pressed") === "true" || $.classList.contains("active"));
            F >= 0 && (f.value = String(F));
          };
          new MutationObserver(H).observe(u, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), H();
        }
        const w = (H) => {
          u.hidden !== !H && (u.hidden = !H), f.hidden !== H && (f.hidden = H);
        };
        if (b.length > 3) {
          w(!1);
          continue;
        }
        if (!u.getClientRects().length && !f.getClientRects().length) {
          f.dataset.fit || w(!0);
          continue;
        }
        const M = u.hidden;
        u.hidden = !1;
        const P = b.every((H) => H.scrollWidth <= H.clientWidth + 1);
        u.hidden = M, w(P), f.dataset.fit = "1";
      }
  }
  const ft = document.createElement("div");
  ft.className = "densityBadge", ft.setAttribute("aria-live", "polite"), ft.hidden = !0, m.appendChild(ft);
  let ht = 0;
  function wt() {
    if (!E) return;
    const t = c("homeView"), a = (b) => b.offsetParent !== null && !b.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((b) => {
      a(b) && (b.dataset.h = Math.round(b.getBoundingClientRect().height) + " px");
    });
    const r = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), d = window.innerHeight, u = r.filter((b) => {
      const f = b.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= d + 0.5;
    }).length;
    ft.hidden = !t.classList.contains("active"), ft.innerHTML = "<b>" + u + "</b><small>of " + r.length + " readings on screen</small>";
  }
  const ot = () => {
    E && requestAnimationFrame(wt);
  };
  function tt() {
    var t;
    m.classList.toggle("showDensity", E), (t = c("densityToggle")) == null || t.classList.toggle("on", E), ft.hidden = !E, clearInterval(ht), E && (ht = setInterval(wt, 1e3), wt());
  }
  window.addEventListener("scroll", ot, { capture: !0, passive: !0 }), window.addEventListener("resize", ot, { passive: !0 });
  const _ = n.querySelector("#homeView .grid");
  let Z = null, St = null, et = null, ct = null;
  const nt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), R = 6;
  let B = null;
  const W = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
  let J = { favourites: null }, Mt = {}, Ct = {}, Jt = [], ie = null;
  const na = (() => {
    try {
      return JSON.parse(Yo.get(fp)) || {};
    } catch {
      return {};
    }
  })();
  let ye = /* @__PURE__ */ new Map(), Li = 0;
  function Ca() {
    clearTimeout(Li), Li = setTimeout(() => Promise.resolve(D({ type: "frontend/set_user_data", key: up, value: J })).catch(() => {
    }), 400);
  }
  const Pt = (() => {
    let t = {};
    try {
      t = JSON.parse(Yo.get(hp)) || {};
    } catch {
    }
    const a = (r, d) => Object.fromEntries(Object.entries(r || {}).filter(([, u]) => d.includes(u)));
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
  })(), ce = () => Yo.set(hp, JSON.stringify(Pt)), la = () => {
    m.dataset.more = Pt.more, m.dataset.names = Pt.names, dr();
  };
  k && I && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Pt.more = a.dataset.moreStyle, ce(), la(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + tm.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Pt.names = a.dataset.namesStyle, Pt.namesPicked = !0, ce(), la(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + em.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Pt.hoursWindow = a.dataset.hoursWindow, ce(), Xt == null || Xt.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((r) => r.setAttribute("aria-pressed", String(r === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + am.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Pt.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Pt.wxStyle = a.dataset.wxStyle, ce(), Xt == null || Xt.setStyle(Pt.wxStyle), ha == null || ha.forEach((r) => r.setStyle(Pt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === a))));
  })), at();
  let Qt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const je = /* @__PURE__ */ new Map();
  let Kr = "";
  const me = k ? Fu({ onChange: () => wa() }) : null;
  k && m.classList.add("house");
  const te = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Xt = null, kr = null, Ai = !1;
  function Mr(t) {
    const a = Le();
    if (m.classList.toggle("houseBento", !!a), Xt && (kr !== a || t == null) && (Xt.destroy(), Xt = null), !a || t == null) {
      te.remove();
      return;
    }
    te.isConnected || _.append(te), te.style.order = t, !Xt && !Ai && (Xt = Jc(te, { getHass: i, entityId: a, style: Pt.wxStyle, hoursWindow: () => Pt.hoursWindow }), kr = a);
  }
  const en = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], pe = ["aq", "pollen", "radar"], da = Object.fromEntries(en.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ha = null, Ei = null;
  function Sr(t) {
    const a = Le();
    ha && Ei !== a && (ha.forEach((r) => r.destroy()), ha = null), Object.values(da).forEach((r) => a ? !r.isConnected && _.append(r) : r.remove()), a && !ha && !Ai && (ha = en.map(([r, d]) => Jc(da[r], { getHass: i, entityId: a, style: Pt.wxStyle, cards: d, onOpen: r === "wx" ? () => Or("weather") : void 0 })), Ei = a);
  }
  const Yt = (t) => {
    var a;
    return ((a = S[t]) == null ? void 0 : a.attributes) || {};
  }, Bt = (t) => Yt(t).friendly_name || t, Gt = (t, a) => Uo(t) || (Number(Yt(t).supported_features) & a) === a, Te = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ta = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), Vn = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Vt = (t) => Yt(t).supported_color_modes || [], ee = (t, a) => [5, 3, 1].map((r) => {
    const d = (r + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), $e = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ao = (t) => 0.2126 * $e(t[0]) + 0.7152 * $e(t[1]) + 0.0722 * $e(t[2]), an = (t, a) => {
    const r = Ao(t), d = Ao(a);
    return (Math.max(r, d) + 0.05) / (Math.min(r, d) + 0.05);
  }, ta = 0.55, Gn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ge = (t) => {
    const a = Yt(t), r = Gn.includes(a.color_mode);
    return (r && a.rgb_color ? a.rgb_color : r && a.hs_color ? ee(...a.hs_color) : [255, 170, 0]).map((d) => Math.round(Math.max(0, Math.min(255, d))));
  }, Eo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function _o(t) {
    var d;
    const a = t.split(".")[0], r = (d = S[t]) == null ? void 0 : d.state;
    return !r || r === "unavailable" || r === "unknown" ? null : a === "light" ? r === "on" ? Ge(t) : null : a === "climate" ? Eo[r] || null : a === "cover" ? r !== "closed" ? [146, 107, 199] : null : a === "lock" ? r !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(r) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(r) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(r) ? [0, 150, 136] : null : a === "alarm_control_panel" ? r !== "disarmed" && r !== "triggered" ? [76, 175, 80] : null : a === "fan" ? r === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && r === "on" ? [255, 193, 7] : null;
  }
  function Do(t, a, r = !1) {
    const [d, u, b] = t.map((dt) => dt / 255), f = Math.max(d, u, b), w = Math.min(d, u, b), M = f - w, P = M ? (f === d ? (u - b) / M + (u < b ? 6 : 0) : f === u ? (b - d) / M + 2 : (d - u) / M + 4) * 60 : 0, H = (f + w) / 2, F = M ? M / (1 - Math.abs(2 * H - 1)) : 0, $ = M < 0.1 ? Math.min(F, 0.25) : 1, st = (dt) => {
      const X = (U) => (U + P / 30) % 12, ut = $ * Math.min(dt, 1 - dt);
      return [0, 8, 4].map((U) => Math.round(255 * (dt - ut * Math.max(-1, Math.min(X(U) - 3, 9 - X(U), 1)))));
    };
    for (let dt = 0.5; r ? dt < 0.96 : dt > 0.04; dt += r ? 0.01 : -0.01) {
      const X = st(dt);
      if (an(X, a) >= 3) return "rgb(" + X.join(",") + ")";
    }
    return r ? "#ffffff" : "#26221e";
  }
  const ca = (t) => {
    const a = [1, 3, 5].map((r) => parseInt(t.slice(r, r + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + Do(a, [58, 58, 58], !0) + ";--sum-l:" + Do(a, [230, 230, 230]);
  }, Un = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, _i = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Un.d[t] + ";--g" + t + "-l:" + Un.l[t]).join(";"), Cr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", nn = (t) => {
    const a = t.map((r) => Math.round(r + (255 - r) * ta));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + Do(t, a);
  }, Ws = (t) => nn(Ge(t)), Yn = (t) => {
    const a = _o(t);
    return a ? ' data-light style="' + nn(a) + '"' : "";
  }, Sn = (t) => {
    const a = Vt(t);
    return a.length ? a.some((r) => r !== "onoff") : Yt(t).brightness != null;
  }, Di = (t) => [Yt(t).min_color_temp_kelvin || 2e3, Yt(t).max_color_temp_kelvin || 6500], Pn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Tr(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const r = Math.round(a / 60);
    if (r < 60) return r + (r === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(r / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const u = Math.round(d / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const Nn = (t) => {
    var a;
    return Yt(t).current_position ?? (((a = S[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Se = (t) => {
    var a;
    return ue("pos", t, ((a = W.get(t)) == null ? void 0 : a.pos) ?? Nn(t));
  }, Bo = (t) => {
    var a;
    return ue("tilt", t, ((a = W.get(t)) == null ? void 0 : a.tilt) ?? Yt(t).current_tilt_position);
  };
  function We(t) {
    var f;
    const a = S[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const r = a.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (a.state !== "on") return "Off";
      const w = r.color_temp_kelvin;
      return (Sn(t) ? Vn(a) + "%" : "On") + (r.color_mode === "color_temp" && w ? " · " + Number(w).toLocaleString() + "k" : Gn.includes(r.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (a.state === "off" ? "Off" : Te(r.hvac_action || a.state)) + " · " + Ta(r.current_temperature) + " °C now";
    if (d === "cover") {
      const w = Nn(t), M = r.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Te(a.state) + " - " + w + "%" : (w <= 0 ? "Closed" : w >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return a.state !== "on" ? "Off" : Te(r.action || "on") + " · " + r.current_humidity + "% now";
    if (d === "vacuum") return Te(a.state) + (a.state === "cleaning" && ((f = r.rooms) != null && f.length) ? " · " + r.rooms.join(", ") : "") + (r.battery_level != null ? " · " + r.battery_level + "%" : "");
    if (d === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (r.media_title || "Playing") : Te(a.state);
    if (d === "alarm_control_panel") return wp[a.state] || Te(a.state);
    if (d === "lock" || d === "valve") return Te(a.state);
    if (d === "switch") return a.state === "on" ? "On" : "Off";
    if (d === "plant") return a.state === "ok" ? "Healthy" : Te(r.problem);
    if (d === "binary_sensor")
      return r.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : r.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : r.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : ud.includes(r.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (r.rang) return "Rang at " + Pn(r.rang);
    const u = i();
    if (u != null && u.formatEntityState && !Uo(t))
      try {
        return u.formatEntityState(a);
      } catch {
      }
    const b = Number(a.state);
    if (a.state !== "" && Number.isFinite(b)) {
      const w = Math.abs(b) >= 100 ? 0 : Math.abs(b) >= 10 ? 1 : 2, M = r.unit_of_measurement ? r.unit_of_measurement === "%" ? "%" : " " + r.unit_of_measurement : "";
      return b.toLocaleString(void 0, { maximumFractionDigits: w }) + M + (r.plant_low ? " · Low" : r.plant_high ? " · High" : "");
    }
    return Te(a.state);
  }
  const $o = (t) => t >= 1e3 ? Ta(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function La(t) {
    var r, d;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((u) => {
      var w;
      const b = S[u.dataset.iconFor], f = u.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && b && !f) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (u.textContent = "", M = document.createElement("ha-state-icon"), u.appendChild(M)), M.hass = a, M.stateObj = b;
      } else if (customElements.get("ha-icon")) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-icon") && (u.textContent = "", M = document.createElement("ha-icon"), u.appendChild(M)), M.icon = f || ((w = b == null ? void 0 : b.attributes) == null ? void 0 : w.icon) || "mdi:circle-medium";
      } else u.textContent || (u.textContent = (u.dataset.letter || Bt(u.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (r = t.querySelectorAll) == null || r.call(t, ".tfIcon").forEach(Aa), (d = t.classList) != null && d.contains("tfIcon") && Aa(t), Bi();
  }
  const ea = /* @__PURE__ */ new Map();
  function Aa(t) {
    var b, f, w;
    const a = (((b = t.closest("[data-k]")) == null ? void 0 : b.dataset.k) || "") + "|" + (t.dataset.iconFor || ((f = t.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || t.getAttribute("aria-label") || ""), r = getComputedStyle(t), d = { backgroundColor: r.backgroundColor, color: r.color }, u = ea.get(a);
    ea.set(a, d), !(!u || u.backgroundColor === d.backgroundColor && u.color === d.color || (w = window.matchMedia) != null && w.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([u, d], { duration: aa.warp.cdur, delay: aa.warp.cdelay, easing: Ve[aa.warp.ease], fill: "backwards" });
  }
  const $r = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Xr = (t) => {
    const a = [t];
    for (; a.length; ) {
      const r = a.shift();
      if (r.localName === "svg") return r;
      r.shadowRoot && a.push(...r.shadowRoot.children), a.push(...r.children);
    }
    return null;
  };
  function Lr(t) {
    var st, dt, X;
    const a = t.localName === "svg" ? t : Xr(t), r = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!r.length) return !a;
    const d = (st = t.closest(".tfIcon")) == null ? void 0 : st.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const u = d + "|" + r.map((ut) => ut.getAttribute("d") || ut.localName).join("|");
    if (t.dataset.fitted === u) return !0;
    let b = 1 / 0, f = 1 / 0, w = -1 / 0, M = -1 / 0;
    for (const ut of r) {
      const U = ut.getBBox(), e = getComputedStyle(ut), o = e.stroke !== "none" ? (parseFloat(e.strokeWidth) || 0) / 2 : 0;
      !U.width && !U.height || (b = Math.min(b, U.x - o), f = Math.min(f, U.y - o), w = Math.max(w, U.x + U.width + o), M = Math.max(M, U.y + U.height + o));
    }
    if (!(w > b)) return !1;
    const P = (X = (dt = a.viewBox) == null ? void 0 : dt.baseVal) != null && X.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, H = d > 40 ? d * (26 / 40) : d - 14, F = H * P.width / Math.max(w - b, M - f), $ = F / P.width;
    return t.localName === "svg" ? (t.style.width = F + "px", t.style.height = F + "px") : t.style.setProperty("--mdc-icon-size", F + "px"), a.style.translate = ((P.x + P.width / 2 - (b + w) / 2) * $).toFixed(2) + "px " + ((P.y + P.height / 2 - (f + M) / 2) * $).toFixed(2) + "px", t.dataset.fitted = u, !0;
  }
  let In = 0;
  function Da(t = 0) {
    clearTimeout(In), [...n.querySelectorAll($r)].filter((r) => !Lr(r)).length && t < 5 && (In = setTimeout(() => Da(t + 1), 300));
  }
  function Bi() {
    clearTimeout(In), In = setTimeout(() => Da(), 60);
  }
  const Jr = (t) => {
    var a, r, d;
    return t.startsWith("light.") && S[t] && !Yt(t).icon && !((d = (r = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : r[t]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Xe = (t, a, r) => (a = a || Jr(t), ' data-icon-for="' + it(t) + '"' + (a ? ' data-icon-name="' + it(a) + '"' : "") + (r ? ' data-letter="' + it(r) + '"' : "")), Cn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Yt(t).rang ? "mdi:doorbell" : "", ge = (t, a, r, d) => it([t, a, r, d ? JSON.stringify(d) : ""].join("|")), Xo = (t) => it(JSON.stringify(t));
  function Jo(t, a) {
    var u, b;
    const r = it(Bt(a) + ", " + We(a));
    return '<div class="activityRow' + (Number.isFinite(Number((u = S[a]) == null ? void 0 : u.state)) && ((b = S[a]) == null ? void 0 : b.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + it(t + "|" + a) + '" aria-label="' + r + '. Show the last 24 hours"' : '" aria-label="' + r + '"') + '><div class="tfIcon" aria-hidden="true"' + Xe(a, Cn(a)) + '></div><div><div class="activityRowName">' + it(Bt(a)) + '</div><div class="activityRowMeta">' + it(We(a)) + "</div></div></div>";
  }
  const Qo = (t, a, r) => '<div class="activityRow" aria-label="' + it(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Xe("", r, t) + '></div><div><div class="activityRowName">' + it(t) + '</div><div class="activityRowMeta">' + it(a) + "</div></div></div>";
  function Ro(t) {
    var r;
    const a = ((r = S[t]) == null ? void 0 : r.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ge("switch", "toggle", t) + '" aria-label="Turn ' + it(Bt(t)) + (a ? " off" : " on") + '"' + Xe(t) + '></button><button class="tfName" type="button" data-more="' + it(t) + '" aria-label="' + it(Bt(t) + ", " + We(t) + ". More info") + '"><span class="activityRowName">' + it(Bt(t)) + '</span><span class="activityRowMeta">' + it(We(t)) + "</span></button></div>";
  }
  const io = (t) => {
    var a;
    return ((a = qt.get(t)) == null ? void 0 : a.name) ?? Bt(t);
  }, ro = (t) => {
    var a;
    return ((a = qt.get(t)) == null ? void 0 : a.text) ?? We(t);
  };
  function Qr(t) {
    var r;
    const a = (r = qt.get(t)) == null ? void 0 : r.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Xe("", a, io(t)) : Xe(t, Cn(t))) + '></div><div><div class="activityRowName">' + it(io(t)) + '</div><div class="activityRowMeta">' + it(ro(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + it(io(t)) + '’s last 24 hours">' + ec + '</button></div><svg class="tfGraph" data-graph="' + it(t) + '" role="img" aria-label="' + it(io(t)) + ', last 24 hours"></svg></div>';
  }
  function Zn(t, a, r, d, u = "", b = null, f = "") {
    const w = Z && Z.key === t;
    return '<section class="card tfCard' + (f ? " " + f : "") + (w ? " open" : "") + '" data-tf data-k="' + it(t) + '" style="order:' + a + (w && Z.h ? ";min-height:" + Z.h + "px" : "") + '" aria-label="' + it(r) + '"><div class="activityHeader">' + (b ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + it(b) + '" aria-label="' + it(r + (S[b] ? ", " + We(b) : "") + ". More info") + '">' + it(r) + "</button>" : '<div class="activityTitle">' + it(r) + "</div>") + "</div>" + (w ? Qr(Z.id) : '<div class="activityRows">' + d.join("") + "</div>" + u) + "</section>";
  }
  function so(t, a) {
    const r = "readings:" + t.id, d = t.readings.map((u) => Jo(r, u));
    return t.power != null && d.push(Qo("Power now", $o(t.power), "mdi:flash")), Zn(r, a, "Readings", d.concat(t.plugs.map(Ro)));
  }
  function ts(t, a) {
    var w;
    const r = "energy:" + t.id, [d, u] = [t.solar.find((M) => M.endsWith("_power")), t.solar.find((M) => M.endsWith("_today"))], b = [d, u].filter(Boolean).map((M) => Jo(r, M)), f = Number(((w = S[d]) == null ? void 0 : w.state) || 0) * 1e3;
    return Qt.grid && (b.push(Jo(r, Qt.grid)), b.push(Qo("House use", $o(f + Number(S[Qt.grid].state)), "mdi:home-lightning-bolt"))), Zn(r, a, "Energy", b, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Ri = (t, a) => Zn("plant:" + t.id, a, Bt(t.id), t.readings.map((r) => Jo("plant:" + t.id, r)), "", t.id);
  function lo(t, a, r, d, u, b, f = null) {
    const w = r == null ? null : Math.max(0, Math.min(1, r)), M = w == null ? 0 : Math.round(w * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + it(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (u ? ' aria-valuetext="' + it(u) + '"' : "") + ' data-drag="' + it(t + "|" + a) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (b ? w == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const on = "move-assistant-house-last-bright", Ga = (() => {
    try {
      return JSON.parse(Yo.get(on)) || {};
    } catch {
      return {};
    }
  })();
  let Pi = 0;
  const Kn = (t, a) => {
    !a || Ga[t] === a || (Ga[t] = a, clearTimeout(Pi), Pi = setTimeout(() => Yo.set(on, JSON.stringify(Ga)), 500));
  }, Hn = (t, a, r, d) => '<div class="tfStep" role="group" aria-label="' + it(t) + '"><button type="button" data-act="' + r + '" aria-label="Lower ' + it(t.toLowerCase()) + '">' + ip.down + "</button><output>" + it(a) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + it(t.toLowerCase()) + '">' + ip.up + "</button></div>", ke = (t, a, r) => '<div class="' + t + '" role="group" aria-label="' + it(a) + '">' + r.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + it(d.aria) + '"' : "") + ">" + (d.html || it(d.label)) + "</button>").join("") + "</div>", rn = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), pa = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ni = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + it(Bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + it(t) + '">' + [0, 1, 2, 3].map((r) => '<span><i style="' + rn(a, r) + '"></i><b' + (a >= (r + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (r + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + pa(a) + '">' + Math.round(a) + "%</output></div>";
  function js(t, a) {
    t.querySelectorAll(":scope>span").forEach((d, u) => {
      d.firstElementChild.setAttribute("style", rn(a, u)), d.lastElementChild.classList.toggle("lit", a >= (u + 1) * 25 - 12);
    });
    const r = t.querySelector(".tfTip");
    r.setAttribute("style", pa(a)), r.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const es = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + it(Bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + it(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", oa = (t, a, r) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + it(Bt(t)) + '">' + [
    Gt(t, Uh) && ["open", "Open", "open_cover", a >= 100 && !r],
    Gt(t, Zh) && ["stop", "Stop", "stop_cover", !1],
    Gt(t, Yh) && ["close", "Close", "close_cover", a <= 0 && !r]
  ].filter(Boolean).map(([d, u, b, f]) => '<button type="button" data-act="' + ge("cover", b, t) + '" aria-label="' + u + '"' + (f ? " disabled" : "") + ">" + Kh[d] + "</button>").join("") + "</div>", $n = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + it(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + it(a.art) + '&quot;)"' : Xe(t, a.icon)) + "></button>", as = (t) => '<button class="tfName" type="button" data-more="' + it(t) + '" aria-label="' + it(Bt(t) + ", " + We(t) + ". More info") + '"><span class="activityRowName">' + it(Bt(t)) + '</span><span class="activityRowMeta">' + it(We(t)) + "</span></button>";
  function co(t, a = !1, r = null) {
    const d = On(t), u = t.startsWith("light.") && ti(t) && !(r && $i(t) < 3), b = r || (a && t.startsWith("light.") ? ["bright"] : null), f = u ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : r ? "dash:" : "tile:") + it(t) + '"></div>'] : d.sections.map((w, M) => w && (!b || b.includes((d.parts || [])[M])) ? w : "").filter(Boolean);
    return '<div class="tfAction' + (u ? " tfDac" : "") + (d.on ? " on" : "") + '" data-k="' + it(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Yn(t) + '><div class="tfActionHead">' + $n(t, d) + as(t) + "</div>" + f.join("") + "</div>";
  }
  const Na = "dual-controller-v3", Ii = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Hi = null;
  async function Fi() {
    if (Hi || customElements.get(Na)) return;
    Hi = "loading";
    const t = await Promise.resolve().then(() => D({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Na), new Promise((d) => setTimeout(d, a ? 8e3 : 0))]), customElements.get(Na)) return;
    const r = Object.assign(document.createElement("script"), { src: Ii });
    r.onerror = () => {
      Hi = "failed", K();
    }, document.head.appendChild(r);
  }
  const Ia = /* @__PURE__ */ new Map(), Fn = (t) => (Pt.lightStyles[t] || Pt.lights) === "dac", Oi = () => Pt.lights === "dac" || Object.values(Pt.lightStyles).includes("dac");
  function ti(t) {
    return Fn(t) && !!customElements.get(Na);
  }
  const Ha = (t) => Pt.lightPads[t] || Pt.dacPad, qi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, r, d, ...u) => t.callService(a, ...To(a, r, d), ...u)
    };
  }, Wi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Po = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Wi })).dataset.tf = "");
  }, ei = /* @__PURE__ */ new Map(), ns = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const r = a.parentElement;
    !r || !a.offsetHeight || (r.style.removeProperty("min-height"), ei.set(r.dataset.dac, r.offsetHeight));
  }));
  function No(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const r = a.dataset.dac;
      let d = Ia.get(r);
      if (!d) {
        const u = r.slice(r.indexOf(":") + 1);
        d = document.createElement(Na), d.setConfig({ type: "custom:" + Na, entity: u, pad: Ha(u), tap_action: { action: "none" } }), Ia.set(r, d);
      }
      d.hass = qi(), d.parentNode !== a && a.replaceChildren(d), !d.offsetHeight && ei.has(r) && (a.style.minHeight = ei.get(r) + "px"), ns.observe(d), Po(d);
    });
  }
  function Tn() {
    const t = qi();
    Ia.forEach((a, r) => {
      a.isConnected ? a.hass = t : Ia.delete(r);
    });
  }
  customElements.whenDefined(Na).then(() => {
    k && (_ != null && _.querySelector("[data-tf]")) && Ka(Oe);
  });
  const ue = (t, a, r) => T.has(t + "|" + a) ? T.get(t + "|" + a) : r;
  function On(t) {
    var b;
    const a = S[t], r = a.attributes, d = t.split(".")[0], u = (f, w) => ({ act: ge(f, "toggle", t), label: w });
    if (d === "light") {
      const f = a.state === "on", w = Vt(t), [M, P] = Di(t), H = ue("bright", t, Vn(a));
      f && Kn(t, Vn(a));
      const F = ue("ct", t, f && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), $ = ue("hue", t, f && Gn.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null);
      return { on: f, button: u("light", "Turn " + Bt(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Sn(t) && lo("bright", t, H / 100, Bt(t) + " brightness", H + "%", !1, f ? null : Ga[t] ?? null),
        w.includes("color_temp") && lo("ct", t, F == null ? null : (F - M) / (P - M), Bt(t) + " warm to cool", F == null ? "" : Math.round(F) + " kelvin", !0),
        w.some((st) => Gn.includes(st)) && lo("hue", t, $ == null ? null : $ / 360, Bt(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const f = r.target_temp_step || 0.5, w = Number(r.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || r.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + Bt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(w) && Hn("Target temperature", Ta(w) + " °C", ge("climate", "set_temperature", t, { temperature: w - f }), ge("climate", "set_temperature", t, { temperature: w + f })),
        ke("tfSeg", "Mode", (r.hvac_modes || []).map((M) => ({ label: Te(M), act: ge("climate", "set_hvac_mode", t, { hvac_mode: M }), pressed: a.state === M })))
      ] };
    }
    if (d === "cover") {
      const f = a.state === "opening" || a.state === "closing", w = a.state === "closed", M = Se(t), P = Bo(t);
      return { on: !w, tone: "blue", icon: pp[tc(a)][w ? 1 : 0], button: u("cover", (w ? "Open " : "Close ") + Bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Gt(t, cp) && Ni(t, M),
        P != null && es(t, P),
        oa(t, M, f)
      ] };
    }
    if (d === "humidifier") {
      const f = Number(r.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + Bt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Hn("Target humidity", f + "%", ge("humidifier", "set_humidity", t, { humidity: f - 1 }), ge("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((b = r.available_modes) == null ? void 0 : b.length) && ke("tfSeg", "Mode", r.available_modes.map((w) => ({ label: Te(w), act: ge("humidifier", "set_mode", t, { mode: w }), pressed: r.mode === w })))
      ] };
    }
    if (d === "media_player") {
      const f = a.state === "playing", w = a.state === "off" || a.state === "standby", M = ue("vol", t, r.volume_level), P = w ? { act: ge("media_player", Gt(t, Vh) ? "turn_on" : "toggle", t), label: "Turn " + Bt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: ge("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + Bt(t) } : { act: ge("media_player", Gt(t, Gh) ? "turn_off" : "toggle", t), label: "Turn " + Bt(t) + " off" };
      return { on: !w, tone: "blue", art: !w && r.entity_picture ? r.entity_picture : null, button: P, parts: ["playback", "volume"], sections: w ? [] : [
        (Gt(t, sp) || Gt(t, lp) || Gt(t, rp) || Gt(t, dp)) && ke("tfSeg", "Playback", [
          { html: pd.prev, aria: "Previous", act: ge("media_player", "media_previous_track", t), disabled: !Gt(t, sp) },
          { html: f ? pd.pause : pd.play, aria: f ? "Pause" : "Play", act: ge("media_player", "media_play_pause", t), disabled: !(Gt(t, rp) || Gt(t, dp)) },
          { html: pd.next, aria: "Next", act: ge("media_player", "media_next_track", t), disabled: !Gt(t, lp) }
        ]),
        Gt(t, zh) && M != null && lo("vol", t, M, Bt(t) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const f = a.state === "cleaning", w = r.rooms || [], M = (H) => w.includes(H) ? w.filter((F) => F !== H) : w.concat(H), P = ge("vacuum", f ? "pause" : "start", t, Uo(t) ? { rooms: w } : null);
      return { on: f || a.state === "returning", tone: "blue", button: { act: P, label: (f ? "Pause " : "Start ") + Bt(t) }, parts: ["controls", "rooms"], sections: [
        ke("tfSeg", Bt(t), [
          { label: f ? "Pause" : "Start", act: P },
          { label: "Dock", act: ge("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: ge("vacuum", "locate", t) }
        ]),
        Uo(t) && ke("tfChips", "Rooms to clean", Qt.rooms.filter((H) => H.id !== "balcony").map((H) => ({ label: H.name, act: ge("vacuum", "set_rooms", t, { rooms: M(H.name) }), pressed: w.includes(H.name) })))
      ] };
    }
    if (d === "lock") {
      const f = a.state === "locked";
      return { on: !f, tone: "heat", button: { act: ge("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + Bt(t) }, parts: ["controls"], sections: [
        ke("tfSeg", Bt(t), [
          { label: "Lock", act: ge("lock", "lock", t), pressed: f },
          { label: "Unlock", act: ge("lock", "unlock", t), pressed: a.state === "unlocked" },
          Gt(t, sm) && { label: "Open", act: ge("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const f = a.state === "disarmed";
      return { on: !f, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: ge("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + Bt(t) + ", away" : "Disarm " + Bt(t) }, parts: ["controls"], sections: [
        ke("tfSeg", Bt(t), lm.filter(([, , , w]) => !w || Gt(t, w)).map(([w, M, P]) => ({ label: M, act: ge("alarm_control_panel", P, t), pressed: a.state === w })))
      ] };
    }
    if (d === "valve") {
      const f = a.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (f ? "Close " : "Open ") + Bt(t)), parts: ["controls"], sections: [
        ke("tfSeg", Bt(t), [
          { label: "Open", act: ge("valve", "open_valve", t), pressed: f },
          { label: "Close", act: ge("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Bt(t) }, sections: [] };
  }
  const Io = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ta(t)) + "°";
  function ai(t) {
    var ut;
    const a = (U) => t.readings.find((e) => Yt(e).device_class === U), r = a("temperature"), d = a("humidity"), u = (U) => {
      var e;
      return Number((e = S[U]) == null ? void 0 : e.state);
    }, b = (U) => t.actions.filter((e) => U.test(e)), f = t.lights.filter((U) => {
      var e;
      return ((e = S[U]) == null ? void 0 : e.state) === "on";
    }), w = b(/^cover\./), M = w.filter((U) => {
      var e;
      return ((e = S[U]) == null ? void 0 : e.state) !== "closed";
    }), P = [...new Set(w.map((U) => tc(S[U])))], H = b(/^climate\./)[0], F = b(/^humidifier\./)[0], $ = b(/^media_player\./), st = $.find((U) => {
      var e;
      return ((e = S[U]) == null ? void 0 : e.state) === "playing";
    }) || $.find((U) => {
      var e;
      return ((e = S[U]) == null ? void 0 : e.state) === "paused";
    }), dt = t.plugs.filter((U) => {
      var e;
      return ((e = S[U]) == null ? void 0 : e.state) === "on";
    }), X = [];
    if (r && Number.isFinite(u(r)) && X.push({ key: "temp", id: r, kind: "reading", icon: Zo(r), label: "Temperature", value: Ta(u(r)) + "°" }), d && Number.isFinite(u(d)) && X.push({ key: "hum", id: d, kind: "reading", icon: Zo(d), label: "Humidity", value: Math.round(u(d)) + "%" }), t.lights.length && X.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Zo("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + t.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? Ws(f[0]) : "",
      acts: t.lights.map((U) => ["light", f.length ? "turn_off" : "turn_on", U]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), w.length) {
      const U = P.length === 1 ? $h[P[0]] : "covers", e = Math.round(w.reduce((o, s) => o + Nn(s), 0) / w.length);
      X.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: M.length ? nn([146, 107, 199]) : "",
        icon: Zo("", ((ut = pp[P[0]]) == null ? void 0 : ut[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Te(U),
        value: e <= 0 ? "Closed" : e >= 100 ? "Open" : e + "% open",
        short: e <= 0 ? "Closed" : e + "%",
        on: M.length > 0,
        acts: w.map((o) => ["cover", M.length ? "close_cover" : "open_cover", o]),
        aria: (M.length ? "Close the " : "Open the ") + U + " in " + t.name
      });
    }
    if (H) {
      const U = Yt(H), e = S[H].state === "off";
      X.push({
        key: "climate",
        kind: "control",
        tone: U.hvac_action === "cooling" ? "cool" : "heat",
        light: _o(H) ? nn(_o(H)) : "",
        icon: Zo(H),
        label: Bt(H),
        value: e ? "Off" : Te(U.hvac_action || S[H].state) + " · " + Io(U.temperature),
        short: e ? "Off" : Io(U.temperature),
        on: !e,
        acts: [["climate", "toggle", H]],
        aria: "Turn " + Bt(H) + (e ? " on" : " off")
      });
    }
    if (F) {
      const U = S[F].state === "on";
      X.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: U ? nn([33, 150, 243]) : "",
        icon: Zo("", "mdi:air-humidifier"),
        label: Bt(F),
        value: U ? "On · " + Yt(F).humidity + "%" : "Off",
        short: U ? Yt(F).humidity + "%" : "Off",
        on: U,
        acts: [["humidifier", "toggle", F]],
        aria: "Turn " + Bt(F) + (U ? " off" : " on")
      });
    }
    if ($.length) {
      const U = st || $[0], e = S[U], o = e.state === "playing";
      X.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: _o(U) ? nn(_o(U)) : "",
        icon: Zo(U),
        label: Bt(U),
        value: We(U),
        short: o ? "Playing" : e.state === "paused" ? "Paused" : Te(e.state),
        on: o,
        acts: [["media_player", e.state === "playing" || e.state === "paused" ? "media_play_pause" : "toggle", U]],
        aria: (o ? "Pause " : "Play ") + Bt(U)
      });
    }
    return t.plugs.length && X.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: dt.length ? nn([255, 193, 7]) : "",
      icon: Zo("", "mdi:power-plug"),
      label: "Plugs",
      value: dt.length ? dt.length + " of " + t.plugs.length + " on" : "All off",
      short: dt.length ? dt.length + " on" : "Off",
      on: dt.length > 0,
      acts: t.plugs.map((U) => ["switch", dt.length ? "turn_off" : "turn_on", U]),
      aria: (dt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((U) => X.push(Yt(U).device_class === "moisture" ? { key: "alert:" + U, kind: "alert", icon: Zo(U), label: "Water leak" } : { key: "note:" + U, kind: "note", icon: Zo(U), label: Bt(U) + " " + We(U).toLowerCase() })), X;
  }
  const Fa = (t, a) => {
    const r = (d) => t.actions.filter((u) => d.test(u));
    return {
      lights: t.lights,
      covers: r(/^cover\./),
      climate: r(/^climate\./).slice(0, 1),
      humidifier: r(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = r(/^media_player\./);
        return [d.find((u) => {
          var b;
          return ((b = S[u]) == null ? void 0 : b.state) === "playing";
        }) || d.find((u) => {
          var b;
          return ((b = S[u]) == null ? void 0 : b.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[a] || [];
  }, Oa = (t, a, r) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Xo(t.acts) + '" aria-label="' + it(t.aria) + '" aria-pressed="' + t.on + '">' + r + "</button>", He = (t) => '<button class="tfAName" type="button" data-go="' + it(t.id) + '" aria-label="Open ' + it(t.name) + '">' + it(t.name) + "</button>";
  function qn(t, a, r = !1) {
    const d = a.find((w) => w.key === "lights"), u = !!(d != null && d.on), b = "", f = '<span class="tfAreaGlyph"' + Xe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return r || !d ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + b + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + b + ' data-acts="' + Xo(d.acts) + '" aria-label="' + it(d.aria) + '" aria-pressed="' + u + '">' + f + "</button>";
  }
  const po = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + it(a.label) + "</span>").join(" "), Ar = (t) => t.readings.find((a) => Yt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => S[a]) || null, p = (t, a) => {
    const r = Bt(a);
    return r.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Te(r.slice(t.name.length + 1)) : r;
  };
  function g(t) {
    const a = S[t], r = Yt(t), d = t.split(".")[0], u = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(u)) {
      if (r.device_class === "temperature") return { text: Io(u) };
      const b = r.unit_of_measurement || "";
      return b === "%" ? { text: Math.round(u) + "%" } : { text: Ta(u, Number.isInteger(u) ? 0 : 1), unit: b };
    }
    if (d === "climate" && (r.current_temperature ?? r.temperature) != null) return { text: Io(r.current_temperature ?? r.temperature) };
    if (d === "light") return { text: a.state !== "on" ? "Off" : Sn(t) ? Vn(a) + "%" : "On" };
    if (d === "cover") {
      const b = Nn(t);
      return { text: b <= 0 ? "Closed" : b >= 100 ? "Open" : b + "%" };
    }
    return d === "humidifier" ? { text: a.state === "on" ? r.humidity + "%" : "Off" } : d === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Te(a.state) } : { text: We(t) };
  }
  const y = (t, a, r) => {
    const d = r.find((w) => w.key === "temp"), u = r.find((w) => w.key === "hum"), b = Yt(a), f = S[a].state === "off";
    return a.startsWith("climate.") ? [p(t, a), f ? "Off" : Te(b.hvac_action || S[a].state) + (b.temperature != null ? " · " + Io(b.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === a) && p(t, a), d && d.id !== a && d.value, u && u.id !== a && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function C(t, a, r) {
    const d = r && g(r), u = r ? y(t, r, a) : "", b = (M) => {
      const P = Fa(t, M.key);
      return P.length === 1 ? P[0] : "group:" + t.id + ":" + M.key;
    }, f = a.filter((M) => M.kind === "control").slice(0, 4).map((M) => '<div class="tfATile' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + (M.light ? ' data-light style="' + M.light + '"' : "") + ">" + Oa(M, "tfIcon", M.icon) + '<button class="tfName" type="button" data-more="' + it(b(M)) + '" aria-label="' + it(t.name + " " + M.label.toLowerCase() + ", " + M.value + ". Open") + '"><span class="activityRowName">' + it(M.label) + '</span><span class="activityRowMeta">' + it(M.value) + "</span></button></div>"), w = po(a);
    return '<div class="workoutPanelTop">' + qn(t, a) + '<div class="tfATitle">' + He(t) + "</div>" + (w ? '<div class="tfATags">' + w + "</div>" : "") + "</div>" + (r ? '<button class="tfABig" type="button" data-more="' + it(r) + '" aria-label="' + it(Bt(r) + ", " + We(r) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + it(d.text) + (d.unit ? '<span class="tfABigUnit">' + it(d.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + it(u) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function N(t) {
    const a = t.id === St, r = ai(t), d = Ar(t), u = d && g(d), b = [...r.filter((f) => f.kind === "control"), ...r.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + it(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + it(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + C(t, r, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + qn(t, r, !0) + '<span class="tfACName">' + it(t.name) + '</span></div><span class="tfACMain">' + (u ? it(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + b.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let V = [];
  const Y = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + V.map(N).join("") + "</section></div>", pt = (t) => t.startsWith("room:"), Q = (t) => V.find((a) => "room:" + a.id === t);
  function gt(t, a) {
    const r = ai(t), d = Ar(t), u = d && g(d), b = d ? y(t, d, r) : "", f = u ? u.text + (u.unit ? " " + u.unit : "") : "", w = ($) => {
      const st = Fa(t, $.key);
      return st.length === 1 ? st[0] : "group:" + t.id + ":" + $.key;
    }, M = r.filter(($) => $.kind === "control").slice(0, 4), P = ($) => $.on && $.light ? ' data-light style="' + $.light + '"' : "", H = M.map(($) => '<button class="tfIcon' + ($.on ? " on" : "") + '" type="button" data-tone="' + $.tone + '"' + P($) + ' data-more="' + it(w($)) + '" aria-label="' + it($.label + ", " + $.value + ". Open its controls") + '">' + $.icon + "</button>"), F = M.map(($) => '<button class="tfRoomDev" type="button" data-more="' + it(w($)) + '" aria-label="' + it($.label + ", " + $.value + ". Open its controls") + '"><span class="tfIcon' + ($.on ? " on" : "") + '" data-tone="' + $.tone + '"' + P($) + ">" + $.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + it($.label) + '</span><span class="activityRowMeta">' + it($.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + it(a) + '" data-go="' + it(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Xe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + it(t.id) + '" aria-label="Open ' + it(t.name) + '"><span class="activityRowName">' + it(t.name) + "</span>" + (f || b ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + it(f) + (b ? " · " : "") + "</span>" : "") + it(b) + "</span>" : "") + "</button></div>" + (f ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + it(f) + "</span>" + (b ? '<span class="tfRoomSub">' + it(b) + "</span>" : "") + "</div>" : "") + (H.length ? '<div class="tfRoomDevices">' + H.join("") + '</div><div class="tfRoomHeads">' + F.join("") + "</div>" : "") + "</div>";
  }
  const yt = () => [
    { key: "home", name: "Home", ids: Qt.homeVacuums },
    ...Qt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Tt = (t, a, r) => t + " " + (t === 1 ? a : r), jt = () => (J.favourites ?? Mt.favorite_entities ?? []).filter((t) => S[t]);
  function zt() {
    if (!ie) {
      const a = Object.entries(na).sort((d, u) => u[1] - d[1]).map(([d]) => d), r = Qt.rooms.flatMap((d) => d.actions);
      ie = [.../* @__PURE__ */ new Set([...Jt, ...a, ...r.filter((d) => On(d).on), ...r])];
    }
    const t = jt();
    return ie.filter((a) => S[a] && S[a].state !== "unavailable" && !t.includes(a));
  }
  let Et = !1;
  function Zt() {
    if (!Et || J.favSeeded || !Qt.rooms.length) return;
    const t = (r) => Object.keys(S).find((d) => Uo(d) && r(d)), a = [t((r) => r.startsWith("climate.")), t((r) => r.startsWith("cover.") && /curtain/.test(r)), t((r) => r.startsWith("valve.")), Qt.security.locks[0]];
    J = { ...J, favourites: [.../* @__PURE__ */ new Set([...J.favourites ?? Mt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Ca();
  }
  const Ot = () => J.suggest ?? !Mt.hide_suggested_entities;
  function Lt() {
    const t = new Set(J.favHidden || []), a = jt().filter((d) => !t.has(d)), r = Ot() ? zt().filter((d) => !t.has(d) && rs(d)) : [];
    return [...a, ...r].slice(0, cm);
  }
  const re = (t) => {
    const a = jt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + it(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + it(Bt(t)) + '">' + rm(a) + "</button>";
  };
  function Kt(t, { area: a = !1, star: r = !1, plain: d = !1, say: u = null, alert: b = !1 } = {}) {
    var dt, X, ut, U, e, o;
    const f = d && ((e = (dt = i()) == null ? void 0 : dt.devices) == null ? void 0 : e[(U = (ut = (X = i()) == null ? void 0 : X.entities) == null ? void 0 : ut[t]) == null ? void 0 : U.device_id]), w = f && (f.name_by_user || f.name) || Bt(t), M = t.split(".")[0], P = !d && kl.includes(M) ? On(t) : null, H = P ? P.on : ["on", "open", "playing"].includes((o = S[t]) == null ? void 0 : o.state), F = d ? null : P ? P.button : Xh.includes(M) ? { act: ge(M, "toggle", t), label: "Turn " + Bt(t) + (H ? " off" : " on") } : M === "scene" || M === "script" ? { act: ge(M, "turn_on", t), label: "Run " + Bt(t) } : null, $ = (u ?? We(t)) + (a && ye.get(t) ? " · " + ye.get(t) : ""), st = (P == null ? void 0 : P.icon) || Cn(t);
    return '<div class="activityRow' + (F ? " tfPlug" : "") + (H ? " on" : "") + (r ? " tfPick" : "") + (b ? " alert" : "") + '" data-k="' + it((a ? "fav:" : "row:") + t) + '" data-tone="' + (M === "light" ? "light" : (P == null ? void 0 : P.tone) || "blue") + '"' + Yn(t) + ">" + (F && !r ? '<button class="tfIcon" type="button" data-act="' + F.act + '" aria-label="' + it(F.label) + '"' + Xe(t, st) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Xe(t, st) + "></div>") + '<button class="tfName" type="button" data-more="' + it(t) + '" aria-label="' + it(w + ", " + $ + ". More info") + '"><span class="activityRowName">' + it(w) + '</span><span class="activityRowMeta">' + it($) + "</span></button>" + (r ? re(t) : "") + "</div>";
  }
  const Le = () => {
    var t;
    return S[(t = J.sources) == null ? void 0 : t.weather] ? J.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((a) => a.startsWith("weather."));
  };
  function Ft() {
    var r;
    const t = (d) => Object.keys(S).filter((u) => u.startsWith("binary_sensor.") && d.includes(Yt(u).device_class));
    return ((r = Ct.alert_entities) != null && r.length ? Ct.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(ud).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => S[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[d.entity].state) }));
  }
  function Fe() {
    const t = Object.keys(ac), a = /* @__PURE__ */ new Set(), r = [];
    return (Mt.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || a.has(d.key)) return;
        a.add(d.key);
      }
      r.push(d);
    }), t.forEach((d) => {
      a.has(d) || r.push({ type: "summary", key: d });
    }), r;
  }
  function Ue() {
    var ut;
    const t = ((ut = i()) == null ? void 0 : ut.entities) || {}, a = (U) => Yt(U).device_class, r = Object.keys(S).filter((U) => U.startsWith("sensor.") && a(U) === "battery" || U.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(U))), d = Qt.rooms.flatMap((U) => U.plants.map((e) => e.id));
    if (!r.length && !d.length) return null;
    const u = (U) => {
      var o;
      const e = (o = t[U]) == null ? void 0 : o.device_id;
      return !!e && Object.keys(S).some((s) => {
        var h;
        return s.startsWith("binary_sensor.") && ((h = t[s]) == null ? void 0 : h.device_id) === e && a(s) === "battery_charging" && S[s].state === "on";
      });
    }, b = (U) => U.startsWith("vacuum.") ? Yt(U).battery_level <= 20 && S[U].state !== "docked" : U.startsWith("binary_sensor.") ? a(U) === "battery" && S[U].state === "on" : parseFloat(S[U].state) <= 20 && !u(U), f = [...r, ...Qt.vacuums].filter((U) => S[U] && b(U)), w = [...r.filter((U) => a(U) === "problem" && S[U].state === "on"), ...d.filter((U) => {
      var e;
      return ((e = S[U]) == null ? void 0 : e.state) === "problem";
    })], M = r.filter((U) => S[U].state === "unavailable"), P = [.../* @__PURE__ */ new Set([...f, ...w, ...M])], H = (U) => {
      const e = parseFloat(S[U].state);
      return a(U) === "battery" && Number.isFinite(e) ? e : 101;
    }, F = [...d, ...Qt.vacuums, ...[...r].sort((U, e) => H(U) - H(e))].filter((U) => S[U] && !P.includes(U)), $ = /* @__PURE__ */ new Map();
    F.forEach((U) => {
      var o;
      const e = ((o = Qt.areaOf) == null ? void 0 : o.call(Qt, U)) || "";
      $.set(e, [...$.get(e) || [], U]);
    });
    const st = (U) => {
      const e = Qt.rooms.findIndex((o) => o.id === U);
      return U === "" ? 1 / 0 : e < 0 ? Qt.rooms.length : e;
    }, dt = [...$.keys()].sort((U, e) => st(U) - st(e)), X = (U) => {
      var e, o, s, h;
      return ((e = Qt.rooms.find((v) => v.id === U)) == null ? void 0 : e.name) || ((h = (s = (o = i()) == null ? void 0 : o.areas) == null ? void 0 : s[U]) == null ? void 0 : h.name) || U;
    };
    return {
      value: [f.length && Tt(f.length, "low battery", "low batteries"), w.length && Tt(w.length, "problem", "problems"), M.length && Tt(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: P, alert: !0 }, ...dt.map((U) => ({ name: U ? X(U) : dt.length > 1 ? "Other devices" : "Devices", ids: $.get(U) }))].filter((U) => U.ids.length)
    };
  }
  function Ea() {
    var A;
    const t = Qt.rooms, a = Qt.security, r = (L, O) => L.actions.filter((lt) => O.test(lt)), d = (L) => t.map((O) => ({ name: O.name, ids: L(O) })).filter((O) => O.ids.length), u = t.flatMap((L) => L.lights), b = u.filter((L) => {
      var O;
      return ((O = S[L]) == null ? void 0 : O.state) === "on";
    }).length, f = t.map((L) => L.readings.find((O) => Yt(O).device_class === "temperature")).filter(Boolean).map((L) => Number(S[L].state)).filter(Number.isFinite), [w, M] = [Ta(Math.min(...f)), Ta(Math.max(...f))], P = t.flatMap((L) => r(L, /^media_player\./)), H = P.filter((L) => {
      var O;
      return ((O = S[L]) == null ? void 0 : O.state) === "playing";
    }).length, F = Ft(), $ = F.filter((L) => L.severity === "warning" && L.on).length, st = a.locks.filter((L) => {
      var O;
      return ["unlocked", "jammed", "open"].includes((O = S[L]) == null ? void 0 : O.state);
    }).length, dt = a.alarms.filter((L) => {
      var O;
      return ((O = S[L]) == null ? void 0 : O.state) === "disarmed";
    }).length, X = $ ? Tt($, "warning", "warnings") : null, ut = st ? st + " unlocked" : dt ? dt + " disarmed" : X ? null : "All secure", U = Ue(), e = t.flatMap((L) => L.solar), o = e.find((L) => L.endsWith("_power")), s = {
      light: u.length && { value: b ? b + " on" : "All off", groups: d((L) => L.lights) },
      climate: f.length && { value: w === M ? w + "°" : w + " - " + M + "°", groups: d((L) => [...L.readings.filter((O) => ["temperature", "humidity"].includes(Yt(O).device_class)), ...r(L, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [X, ut].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((L) => L.ids.length) },
      media_players: P.length && { value: H ? H + " playing" : "No media playing", groups: d((L) => r(L, /^media_player\./)) },
      maintenance: U,
      energy: Qt.grid && { value: $o(Number(((A = S[o]) == null ? void 0 : A.state) || 0) * 1e3 + Number(S[Qt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...e, Qt.grid] }] }
    }, h = [], v = F.filter((L) => L.severity !== "warning" && L.on);
    return v.length && h.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Tt(v.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: v.map((L) => L.entity) }] }), Fe().forEach((L) => {
      L.type !== "summary" ? h.push({ key: "path:" + L.path, name: L.label || L.path, icon: L.icon || "mdi:link-variant", colour: "", value: "" }) : !L.hidden && s[L.key] && !(J.hiddenSums || []).includes(L.key) && h.push({ key: L.key, ...ac[L.key], ...s[L.key] });
    }), h;
  }
  const sn = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + it(t.key) + '" data-k="sum:' + it(t.key) + '" aria-label="' + it(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + _i() + '"' : t.colour && ca(t.colour) ? ' style="' + ca(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Cr : "") + '<div class="tfIcon" aria-hidden="true"' + Xe(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + it(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + it(t.value) + "</div>" : "") + "</div></div>";
  function ni(t) {
    const a = jt();
    J = { ...J, favourites: a.includes(t) ? a.filter((r) => r !== t) : [...a, t], favHidden: (J.favHidden || []).filter((r) => r !== t) }, Ca(), wa();
  }
  function qa(t) {
    document.querySelector("home-assistant") && (nt.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Xn(t, a) {
    if (t.startsWith("path:")) {
      qa(t.slice(5));
      return;
    }
    Ts("summary:" + t, a);
  }
  async function ve() {
    const t = (f) => Promise.resolve().then(() => D(f)).catch(() => null), [a, r, d, u] = await Promise.all([
      t({ type: "frontend/get_user_data", key: up }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), b = (a == null ? void 0 : a.value) || {};
    J = { favourites: b.favourites ?? null, sources: b.sources, hiddenSums: b.hiddenSums, dash: b.dash, named: b.named, favHidden: b.favHidden, suggest: b.suggest, favSeeded: b.favSeeded }, Mt = (r == null ? void 0 : r.value) || {}, Ct = (d == null ? void 0 : d.value) || {}, Jt = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], ie = null, Object.keys(S).length && wa(), ln(), Et = !0, Zt();
  }
  const Jn = "HomeCore";
  async function ln() {
    var d, u, b;
    const t = location.pathname.split("/")[1], a = J.named || [];
    if (!((u = (d = i()) == null ? void 0 : d.user) != null && u.is_admin) || !t || a.includes(t)) return;
    const r = () => {
      J = { ...J, named: [...a, t] }, Ca();
    };
    try {
      const f = (b = await D({ type: "lovelace/dashboards/list" })) == null ? void 0 : b.find((P) => P.url_path === t);
      if (!f || f.mode === "yaml") return;
      if (f.title === Jn) {
        r();
        return;
      }
      const w = await D({ type: "lovelace/config", url_path: t }), M = ((w == null ? void 0 : w.views) || []).flatMap((P) => [...P.cards || [], ...(P.sections || []).flatMap((H) => H.cards || [])]);
      if (!M.length || !M.every((P) => (P == null ? void 0 : P.type) === "custom:move-assistant-card" && P.layout === "test-focus")) return;
      await D({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: Jn }), r();
    } catch {
    }
  }
  let Ua = null, Qn = 0, Ho = !1;
  const oi = (t) => {
    const a = t.split(".")[0], r = Yt(t).device_class;
    return dm.includes(a) && (a !== "binary_sensor" || ud.includes(r) || !!xp[r]);
  }, ma = (t) => t.startsWith("binary_sensor.") ? xp[Yt(t).device_class] : null;
  async function zs() {
    var t;
    if (!(Ho || Date.now() - Qn < 30 * 1e3)) {
      Ho = !0, Qn = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(oi), r = a.length ? await D({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        Ua = Array.isArray(r) ? r.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Ua = null;
      }
      Ho = !1, wa();
    }
  }
  function os() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = (u) => {
      if (!S[u.entity_id] || !oi(u.entity_id) || !rs(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      if (ma(u.entity_id)) {
        const f = a.get(u.entity_id);
        u.state === "on" ? (!f || u.when > f.when + 1) && a.set(u.entity_id, { ...u, alarm: !0, cleared: null }) : f && !f.cleared && u.when > f.when && (f.cleared = u.when);
        return;
      }
      const b = t.get(u.entity_id);
      (!b || u.when > b.when + 1) && t.set(u.entity_id, u);
    };
    [...Ua || []].sort((u, b) => u.when - b.when).forEach(r);
    const d = Ua ? Qn / 1e3 - 5 : 0;
    return Object.keys(S).forEach((u) => {
      var w;
      const b = S[u], f = b.last_changed ? Date.parse(b.last_changed) / 1e3 : 0;
      f > d && r({ entity_id: u, state: b.state, when: f, context_user_id: (w = b.context) == null ? void 0 : w.user_id });
    }), [...t.values(), ...a.values()].sort((u, b) => b.when - u.when).slice(0, pm);
  }
  function Tl(t) {
    var d;
    const a = t.context_user_id && Object.keys(S).find((u) => u.startsWith("person.") && Yt(u).user_id === t.context_user_id);
    if (a) return Bt(a);
    const r = (d = i()) == null ? void 0 : d.user;
    return r && t.context_user_id === r.id ? r.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Md(t) {
    const a = t.entity_id.split(".")[0], r = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[r] || Te(r).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[r] || Te(r).toLowerCase() : a === "binary_sensor" ? r === "on" ? "opened" : "closed" : a === "climate" ? r === "off" ? "turned off" : "set to " + Te(r).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[r] || Te(r).toLowerCase() : a === "alarm_control_panel" ? (wp[r] || Te(r)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[r] || Te(r).toLowerCase() : r === "on" ? "turned on" : r === "off" ? "turned off" : Te(r).toLowerCase();
  }
  function Wa(t) {
    const a = t.entity_id, r = t.alarm && ma(a), d = Bt(a) + " " + (r ? r[0] : Md(t)), u = r ? Pn(t.when * 1e3) + (t.cleared ? " · " + r[1] + " since " + Pn(t.cleared * 1e3) : "") : [Tl(t), Pn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (r ? " alert" : "") + '"><div class="tfIcon' + (r ? " alert" : "") + '" aria-hidden="true"' + Xe(a, Cn(a)) + '></div><button class="tfName" type="button" data-more="' + it(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + it(d + ", " + u + ". More info") + '"><span class="activityRowName">' + it(d) + '</span><span class="activityRowMeta">' + it(u) + "</span></button></div>";
  }
  let uo = null, ii = 0;
  const Sd = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ll() {
    var a;
    if (Date.now() - ii < 5 * 60 * 1e3) return;
    ii = Date.now();
    const t = [];
    try {
      const r = ((a = await D({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], d = (u) => r.filter((b) => b.type === u).flatMap((b) => u === "grid" ? (b.flow_from || []).map((f) => f.stat_energy_from) : [b.stat_energy_from]).filter(Boolean);
      for (const [u, b, f] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!f.length) continue;
        const w = await Promise.all(f.map((M) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((P) => Number(P == null ? void 0 : P.change) || 0, () => 0)));
        t.push({ key: u, name: b, id: f[0], ids: f, value: w.reduce((M, P) => M + P, 0), unit: Yt(f[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    uo = t, wa();
  }
  let ji = null, Vs = [];
  function Er() {
    var b;
    const t = Vs = uo != null && uo.length ? uo : Sd.map(([f, w, M, P]) => {
      if (f === "solar") {
        const F = Object.keys(S).find(($) => $.endsWith("_solar_today") && !$.includes("made_up_energy"));
        F && Number.isFinite(Number(S[F].state)) && (M = Number(S[F].state));
      }
      const H = "sensor.made_up_energy_" + f;
      return S[H] = { entity_id: H, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: w + " today", unit_of_measurement: P, state_class: "total_increasing" } }, { key: f, name: w, id: H, value: M, unit: P };
    });
    qt.clear(), t.some((f) => f.id === ji) || (ji = t[0].id);
    const a = t.map((f) => {
      const w = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, M = um[f.key], P = f.id === ji;
      return qt.set(f.id, { name: f.name, text: w, icon: M }), '<div class="activityRow tap' + (P ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + it(f.id) + '" aria-pressed="' + P + '" aria-label="' + it(f.name + ", " + w) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Xe("", M, f.name) + '></div><div><div class="activityRowName">' + it(f.name) + '</div><div class="activityRowMeta">' + it(w) + "</div></div></div>";
    }), r = t.find((f) => f.id === ji), d = (((b = be().opts.energy) == null ? void 0 : b.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + it(r.id) + '" role="img" aria-label="' + it(r.name) + ', last 24 hours"></svg></div>';
    return Zn("dash:energy", 0, "Energy today", a, u, Ea().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Gs(t) {
    const a = _.querySelector(".tfDash-energy"), r = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !r || t === ji || (ji = t, a.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const u = d.dataset.energyPick === t;
      d.classList.toggle("picked", u), d.setAttribute("aria-pressed", String(u));
    }), r.dataset.graph = t, r.dataset.drawn = "", je.set("dash:energy", Er()), al(!0));
  }
  const zi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, is = /* @__PURE__ */ new Map();
  async function fo(t) {
    const a = /* @__PURE__ */ new Date(), r = new Date(a).setHours(0, 0, 0, 0), d = a.getHours(), u = a.getMinutes() / 60, b = Array.from({ length: 24 }, (w, M) => M <= d ? 0 : null);
    if (!t.ids) {
      const w = zi[t.key] || zi.electricity, M = w.map((H, F) => F < d ? H : F === d ? H * u : 0), P = M.reduce((H, F) => H + F, 0) || 1;
      return b.map((H, F) => H == null ? null : t.value * M[F] / P);
    }
    const f = is.get(t.id);
    if (f && f.day === r && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const w = await D({ type: "recorder/statistics_during_period", start_time: new Date(r).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((H) => ((w == null ? void 0 : w[H]) || []).forEach((F) => {
        const $ = typeof F.start == "number" ? F.start : Date.parse(F.start), st = new Date($).getHours();
        $ >= r && st < d && (b[st] += Number(F.change) || 0);
      }));
      const M = new Date(a).setMinutes(0, 0, 0), P = await Promise.all(t.ids.map((H) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: H, fixed_period: { start_time: new Date(M).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((F) => Number(F == null ? void 0 : F.change) || 0, () => 0)));
      b[d] = P.reduce((H, F) => H + F, 0);
    } catch {
    }
    return is.set(t.id, { at: Date.now(), day: r, hours: b }), b;
  }
  async function _r(t, a) {
    const r = await fo(a);
    if (!t.isConnected) return;
    const d = Math.max(120, t.clientWidth || 260), u = Math.max(60, t.clientHeight || 130), b = 18, f = u - 18, w = d / 24, M = w * 0.72, P = (/* @__PURE__ */ new Date()).getHours(), H = r.map((ut) => ut ?? 0), F = Math.max(0, ...H), $ = (ut) => f - (F > 0 ? ut / F * (f - b) : 0), st = (ut) => ut.toLocaleString(void 0, { maximumFractionDigits: ut < 10 ? 2 : 1 }) + " " + a.unit, dt = (ut) => String(ut).padStart(2, "0") + ":00", X = F > 0 ? H.indexOf(F) : -1;
    t.setAttribute("viewBox", "0 0 " + d + " " + u), t.setAttribute("aria-label", a.name + " today by the hour: " + st(a.value) + (X >= 0 ? ", most " + st(F) + " at " + dt(X) : "")), t.innerHTML = [b, (b + f) / 2, f].map((ut) => '<line x1="0" x2="' + d + '" y1="' + ut + '" y2="' + ut + '" stroke="var(--line)" stroke-width="1"/>').join("") + r.map((ut, U) => ut > 0 ? '<rect x="' + (U * w + (w - M) / 2).toFixed(1) + '" y="' + $(ut).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (f - $(ut)).toFixed(1) + '" rx="2" fill="' + (U === P ? "var(--primary)" : "var(--text)") + '"' + (U === P ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((ut) => '<text x="' + (ut * w).toFixed(1) + '" y="' + (u - 3) + '">' + String(ut).padStart(2, "0") + "</text>").join("") + (X >= 0 ? '<text x="0" y="11">Most: ' + it(st(F)) + " at " + dt(X) + "</text>" : "");
  }
  function Us(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((r, d) => r.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Al(t) {
    var d;
    if ((d = window.matchMedia) != null && d.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, r] = t.querySelectorAll("path");
    Wp(t, r, [a].filter(Boolean));
  }
  let Vi = null, Ys = 0;
  const rs = (t) => !t.startsWith("light.") || fm.includes((ye.get(t) || "").toLowerCase()), Fo = () => Math.max(2, ua((_ == null ? void 0 : _.clientWidth) || 0).n), El = (t) => {
    const a = On(t);
    return a.sections.map((r, d) => r && (a.parts || [])[d]).filter(Boolean);
  }, _l = (t) => El(t).slice(0, $i(t) - 1);
  function ss(t) {
    const a = be().tiles;
    if (a) return a.filter((d) => S[d] || Q(d));
    if (!Vi) {
      const d = (u) => {
        var b;
        return (((b = S[u]) == null ? void 0 : b.state) === "on" ? 1e6 : 0) + (na[u] || 0);
      };
      Vi = {
        lights: Qt.rooms.flatMap((u) => u.lights).filter((u) => {
          var b;
          return rs(u) && ((b = S[u]) == null ? void 0 : b.state) !== "unavailable";
        }).sort((u, b) => d(b) - d(u) || Bt(u).localeCompare(Bt(b))),
        climates: Qt.rooms.flatMap((u) => u.actions.filter((b) => b.startsWith("climate.")))
      };
    }
    const r = Vi.climates.filter((d) => S[d]).slice(0, t > 3 ? 2 : 1);
    return [...Vi.lights.filter((d) => S[d]).slice(0, Math.max(0, t - r.length)), ...r];
  }
  const Gi = (t, a, r, d) => (u) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + r + '">' + (d ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + r + "</button>" : '<div class="activityTitle">' + r + "</div>") + "</div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function Ui(t, a) {
    var b, f;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + it(((f = (b = i()) == null ? void 0 : b.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (w) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Gi("tfDash-bar", "sums-bar", "Summaries", !1)(w).replace(" data-tf", "") + "</div>", tiles: a.map((w) => ({ key: "sum:" + w.key, html: sn(w) })) }), V.length && t.push({ key: "areas", html: Y(0) });
    const r = Lt();
    r.length && t.push({ key: "favs", wrap: Gi("tfDash-favs", "favs", "Favourites", !0), tiles: r.map((w) => ({ key: "fav:" + w, html: Kt(w, { area: !0 }) })) });
    const d = os();
    t.push({ key: "dash:act", html: Zn("dash:act", 0, "Activity", d.length ? d.map(Wa) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Er() });
    const u = Fo();
    return Ys = u, ss(u >= 3 ? u : u * 2).forEach((w) => t.push({
      key: "dash:tile:" + w,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + it(w) + '">' + M + "</div>",
      tiles: [{ key: w, html: pt(w) ? gt(Q(w), w) : co(w, !1, _l(w)) }]
    })), zs(), Ll(), t;
  }
  const Ln = 252, _e = 16, Yi = 200, Dr = Math.round(Ln * 1.25), Zi = 60, ga = Zi + _e, Dl = 3, Cd = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, ls = ["wx", "favs", "act", "energy", "avg"], ho = ["XS", "S", "M", "L", "XL"], ri = ho.length, si = ["Narrow", "Wide", "Really wide"], Ki = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Bl = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && Fn(t) ? ri : Math.min(ri, El(t).length + 1), $i = (t) => {
    const a = be().opts[t] || {}, r = Bl(t), d = Number(a.h) || (a.tall ? 5 : Ki[t] || Zs);
    return Math.max(1, Math.min(r, d));
  }, Zs = 2, Td = 90, ds = 56, Ba = (t) => {
    var a;
    return Cd[t] || (t.startsWith("room:") ? ((a = V.find((r) => "room:" + r.id === t)) == null ? void 0 : a.name) || "Area" : Bt(t));
  }, mo = 409, Ks = 128;
  let ja = !1, Ce = null, ia = null, Br = !1, li = /* @__PURE__ */ new Map(), cs = 0, Oo = 0;
  const go = ["title", "sums"], ua = (t) => {
    const a = Math.max(1, Math.floor((t + _e) / (Yi + _e)));
    return { n: a, w: Math.max(1, Math.min(Dr, Math.floor((t - (a - 1) * _e) / a))) };
  }, be = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...J.dash || {} }, a = pe.filter((r) => !(t.known || []).includes(r) && !t.hidden.includes(r));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function ps(t) {
    J = { ...J, dash: { ...t, known: pe } }, Ca();
  }
  function Xi() {
    const t = (a) => _.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", da.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", da.avg, 2],
      ...pe.map((a) => [a, da[a], 1]),
      ...[..._.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, r, d, u = !1]) => ({ key: a, el: r, span: d, tile: u }));
  }
  const us = (t, a, r) => {
    if (t.span === "full") return a;
    const d = t.span === "areas" && be().spans.areas;
    return d ? d === "full" ? a : Math.min(a, Math.max(2, d)) : t.span === "areas" ? Math.min(a, Math.ceil((mo + Math.max(0, V.length - 1) * (Ks + _e) + _e) / (r + _e))) : Math.min(a, be().spans[t.key] ?? t.span);
  }, fs = (t) => $i(t.key);
  function Rr(t, a, r = null) {
    const d = be().cells, u = t.every((w) => !d[w.key] || d[w.key].col + w.cols <= a), b = (w) => d[w.key] || { row: 1e9, col: 0 };
    return (() => {
      const w = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), P = (X, ut, U, e) => {
        for (let o = ut; o < ut + e; o++) for (let s = X; s < X + U; s++) if (w.has(s + "," + o)) return !1;
        return !0;
      }, H = (X, ut, U) => {
        for (let e = U; e < U + X.rows; e++) for (let o = ut; o < ut + X.cols; o++) w.add(o + "," + e);
        M.set(X.key, { col: ut, row: U, cols: X.cols, rows: X.rows });
      }, F = (X, ut, U) => {
        for (ut = Math.max(0, Math.min(a - X.cols, ut)), U = Math.max(0, U); !P(ut, U, X.cols, X.rows); ) U++;
        H(X, ut, U);
      }, $ = (X) => {
        for (let ut = 0; ; ut++) for (let U = 0; U <= a - X.cols; U++) if (P(U, ut, X.cols, X.rows)) {
          H(X, U, ut);
          return;
        }
      };
      r && F(r, Ce.col, Ce.row);
      const st = t.filter((X) => X !== r), dt = (X, ut) => b(X).row - b(ut).row || b(X).col - b(ut).col;
      return u ? (st.filter((X) => d[X.key]).sort(dt).forEach((X) => F(X, d[X.key].col, d[X.key].row)), st.filter((X) => !d[X.key]).forEach($), M) : ([...st].sort(dt).forEach($), M);
    })();
  }
  function Rl(t, a) {
    const r = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = (b, f, w) => {
      for (let M = f; M < f + w.rows; M++) for (let P = b; P < b + w.cols; P++) if (r.has(P + "," + M)) return !1;
      return !0;
    };
    return t.forEach((b) => {
      for (let f = 0; ; f++) {
        let w = 0;
        for (; w <= a - b.cols && !u(w, f, b); ) w++;
        if (!(w > a - b.cols)) {
          for (let M = f; M < f + b.rows; M++) for (let P = w; P < w + b.cols; P++) r.add(P + "," + M);
          d.set(b.key, { col: w, row: f, cols: b.cols, rows: b.rows });
          return;
        }
      }
    }), d;
  }
  function hs() {
    const t = be(), a = new Set(t.hidden), r = Xi().filter((f) => !go.includes(f.key));
    let d = li;
    if (!d.size) {
      const f = t.pegs || 4, w = r.filter((M) => !a.has(M.key));
      w.forEach((M) => {
        M.cols = us(M, f, Ln), M.rows = fs(M) ?? Zs;
      }), d = Rr(w, f);
    }
    const u = (f) => !a.has(f.key) && d.get(f.key) || { row: 1e9, col: 0 };
    r.sort((f, w) => u(f).row - u(w).row || u(f).col - u(w).col);
    const b = (t.phone || []).map((f) => r.find((w) => w.key === f && !a.has(f))).filter(Boolean);
    return [...b, ...r.filter((f) => !b.includes(f))];
  }
  const Ld = () => {
    const t = hs();
    t.forEach((a, r) => a.el.style.setProperty("--o", String(3 + r))), Pl([...Xi().filter((a) => go.includes(a.key)), ...t].map((a) => a.el));
  };
  function Pl(t) {
    if (Ce) return;
    const a = n.activeElement;
    let r = null;
    for (const d of new Set(t.map((u) => {
      for (; u && u.parentElement !== _; ) u = u.parentElement;
      return u;
    }).filter(Boolean))) {
      const u = r ? r.nextSibling : _.querySelector(":scope > [data-tf]");
      if (d !== u)
        try {
          _.moveBefore ? _.moveBefore(d, u) : _.insertBefore(d, u);
        } catch {
          _.insertBefore(d, u);
        }
      r = d;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const di = (t, a) => ps({ ...t, cells: a, pegs: ua(_.clientWidth).n });
  function ra() {
    var e;
    if (!k || !_) return;
    const t = _.clientWidth, a = t < 2 * Ln + _e, r = m.classList.contains("tfDash"), { n: d, w: u } = a ? { n: 2, w: Math.floor((t - _e) / 2) } : ua(t);
    te.classList.add("tfPegs"), te.style.setProperty("--peg-n", d), te.style.setProperty("--peg-w", u + "px");
    const b = new Set(be().hidden);
    pe.forEach((o) => {
      var s;
      return (s = da[o]) == null ? void 0 : s.classList.toggle("tfNotAdded", b.has(o) && !(Ce != null && Ce.fromTray && Ce.key === o));
    }), m.classList.toggle("tfBoard", r), m.classList.toggle("tfEditing", r && ja && !a);
    const f = c("dashEditNav");
    f && (f.hidden = !r || a, f.classList.toggle("active", ja), f.setAttribute("aria-pressed", String(ja)), f.setAttribute("aria-label", ja ? "Done editing" : "Edit the dashboard"), f.title = ja ? "Done" : "Edit", f.innerHTML = ja ? im : bp);
    const w = r ? Xi() : [];
    if (!r) {
      _.style.height = "", _.querySelectorAll(".tfBoardItem").forEach((o) => {
        o.classList.remove("tfBoardItem", "tfBoardHidden"), o.style.left = o.style.top = o.style.width = o.style.height = "";
      }), (e = _.querySelector(".tfDash-act > .activityRows")) == null || e.style.removeProperty("max-height"), Nl(!1), m.classList.contains("tfDash") && Ld(), ba();
      return;
    }
    _.style.setProperty("--peg-w", u + "px");
    const M = new Set(be().hidden), P = u + _e;
    Ce != null && Ce.fromTray && M.delete(Ce.key), w.forEach((o) => o.el.classList.toggle("tfBoardHidden", M.has(o.key)));
    const H = w.filter((o) => !M.has(o.key) && getComputedStyle(o.el).display !== "none");
    let F = 0;
    H.filter((o) => go.includes(o.key)).forEach((o) => {
      o.el.classList.add("tfBoardItem"), Object.assign(o.el.style, { width: t + "px", height: "", left: "0px", top: F + "px" });
      const s = o.key === "sums" && o.el.querySelector(".tfDash-bar"), h = s ? s.querySelectorAll(".activityRow").length : 0;
      s && (s.style.maxWidth = "none");
      for (let v = 1; s && v <= h && (s.style.setProperty("--bar-cols", String(Math.ceil(h / v))), !(s.offsetWidth <= t)); v++)
        ;
      s && (s.style.maxWidth = ""), F += o.el.offsetHeight + _e;
    }), Oo = F;
    const $ = H.filter((o) => !go.includes(o.key));
    $.forEach((o) => {
      o.cols = us(o, d, u), o.el.classList.add("tfBoardItem"), o.el.style.width = (o.cols === d ? t : o.cols * u + (o.cols - 1) * _e) + "px", o.el.style.height = "", o.rows = fs(o) ?? Math.max(1, Math.ceil((o.el.offsetHeight + _e - 6) / ga));
    });
    const st = Ce && $.find((o) => o.key === Ce.key), dt = a && hs().map((o) => o.key), X = (o) => dt.includes(o.key) ? dt.indexOf(o.key) : -1, ut = a ? Rl([...$].sort((o, s) => X(o) - X(s)), d) : Rr($, d, st);
    ut.forEach((o) => Object.assign(o, { x: o.cols === d ? 0 : o.col * P, y: Oo + o.row * ga, w: o.cols === d ? t : o.cols * u + (o.cols - 1) * _e, h: o.rows * ga - _e })), $.forEach((o) => {
      const s = ut.get(o.key);
      o.el.style.height = s.h + "px", o.el.dataset.rows = a && o.key === "wx" ? 5 : $i(o.key), o.el.toggleAttribute("data-narrow", !a && s.cols === 1 && d > 1), o.el.dataset.cols = s.cols, o.el.classList.contains("tfDac") && o.el.style.setProperty("--tf-dac-pad", s.h - Td + "px"), !(o === st && !Ce.fromTray) && (o.el.style.left = s.x + "px", o.el.style.top = s.y + "px");
    }), a || (li = ut), Pl([...H.filter((o) => go.includes(o.key)), ...$.slice().sort((o, s) => ut.get(o.key).row - ut.get(s.key).row || ut.get(o.key).col - ut.get(s.key).col)].map((o) => o.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([o, s]) => {
      const h = ut.get(o), v = h && _.querySelector(s), A = v == null ? void 0 : v.querySelector(":scope > .activityRows"), L = v == null ? void 0 : v.querySelector(":scope > .activityHeader");
      if (!A || !L) return;
      const O = A.getBoundingClientRect().top - v.getBoundingClientRect().top, lt = h.rows === 1 ? h.h : Math.floor(h.h - O - parseFloat(getComputedStyle(v).paddingBottom)), bt = Math.max(1, Math.floor(lt / ds));
      A.style.setProperty("--fill-row", (lt / bt).toFixed(2) + "px"), A.style.maxHeight = lt + "px";
    }), cs = Math.max(0, ...[...ut.values()].map((o) => o.row + o.rows));
    let U = Oo + cs * ga - _e;
    U = Nl(ja && !a, $, ut, U, d, u), _.style.height = U + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), w.forEach((o) => ms.observe(o.el)), al(), ba();
  }
  const dn = () => {
    Br || (Br = !0, requestAnimationFrame(() => {
      Br = !1, ra();
    }));
  }, ms = new ResizeObserver(() => {
    Ce || dn();
  });
  function Pr(t, a, r) {
    const d = r + _e, u = t * r + (t - 1) * _e, b = a * ga - _e, f = _e / 2, w = d / Math.max(1, Math.round(d / (ga / 4))), M = ga / 4, P = 6;
    let H = "";
    for (let F = 0; F <= t; F++) for (let $ = 0; $ <= a; $++) {
      const st = F * d - f, dt = $ * ga - f;
      H += "M" + (st - P) + " " + dt + "H" + (st + P) + "M" + st + " " + (dt - P) + "V" + (dt + P);
    }
    return '<svg width="' + u + '" height="' + b + '" viewBox="0 0 ' + u + " " + b + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -f + '" y="' + -f + '" width="' + w.toFixed(3) + '" height="' + M + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + w.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + M + '" r="1.4"></circle><circle cx="' + w.toFixed(3) + '" cy="' + M + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -f + '" y="' + -f + '" width="' + (u + _e) + '" height="' + (b + _e) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + H + '"></path></svg>';
  }
  function Nl(t, a = [], r = /* @__PURE__ */ new Map(), d = 0, u = 1, b = Ln) {
    _.querySelectorAll(".tfEditChips").forEach((H) => {
      (!t || !H.closest(".tfBoardItem")) && H.remove();
    }), _.querySelectorAll(".tfFavHides").forEach((H) => H.remove()), _.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((F) => {
      F.classList.contains("tfEditChips") || F.toggleAttribute("inert", t);
    }));
    let f = _.querySelector(".tfBoardCells"), w = _.querySelector(".tfBoardLand");
    if (!t)
      return f == null || f.remove(), w == null || w.remove(), An(), d;
    const M = cs + Dl;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), _.prepend(f)), f.style.top = Oo + "px", f.dataset.size !== u + "x" + M + "x" + b && (f.dataset.size = u + "x" + M + "x" + b, f.innerHTML = Pr(u, M, b)), d = Math.max(d, Oo + M * ga - _e), a.forEach((H) => {
      const F = H.el;
      !F || F.querySelector(":scope > .tfEditChips") || F.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + nc + '</span><button class="tfEditChip" type="button" data-board-more="' + it(H.key) + '" aria-label="' + it(Ba(H.key)) + ' options" aria-haspopup="menu">' + nm + "</button></div>");
    }), Ce && r.has(Ce.key)) {
      w || (w = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), _.appendChild(w));
      const H = r.get(Ce.key);
      Object.assign(w.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else w == null || w.remove();
    const P = _.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (P) {
      const H = P.getBoundingClientRect();
      P.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...P.querySelectorAll('[data-k^="fav:"]')].map((F) => {
        const $ = F.getBoundingClientRect(), st = F.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + it(st) + '" aria-label="Hide ' + it(Bt(st)) + ' from the dashboard" style="left:' + Math.round($.right - H.left - 42) + "px;top:" + Math.round($.top - H.top + ($.height - 32) / 2) + 'px">' + mp + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let gs = "";
  function Ya(t) {
    ja = t, t || (Ce = null, xo = yo = !1, An()), ra(), t ? gs = JSON.stringify(J) : gs && JSON.stringify(J) !== gs && cn("Changes saved");
  }
  function Nr(t, a) {
    var ut, U;
    An();
    const r = li.get(t), { n: d } = ua(_.clientWidth), u = be(), b = u.spans[t] ?? (pt(t) ? 1 : 2);
    if (!r) return;
    const f = r.cols >= d, w = (e, o, s) => '<button type="button" role="menuitem" data-board-act="' + e + '"' + (s ? " disabled" : "") + ">" + o + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Ba(t) + " options");
    const P = _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), H = Bl(t), F = $i(t), $ = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + ho.map((e, o) => '<button type="button" role="menuitemradio" aria-checked="' + (o + 1 === F) + '" aria-label="' + e + ", " + (o + 1) + (o ? " rows" : " row") + '" data-board-act="h:' + (o + 1) + '"' + (o < H ? "" : " disabled") + ">" + e + "</button>").join("") + "</div></div>", st = [["Wide", 2, d >= 2], ["Really wide", 3, d >= 3], ["Full width", "full", d >= 4]], dt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + st.map(([e, o, s]) => '<button type="button" role="menuitemradio" aria-checked="' + (s && (o === "full" ? r.cols === d : r.cols === o && !(o === d && u.spans.areas === "full"))) + '" aria-label="' + e + (o === "full" ? "" : ", " + o + " columns") + '" data-board-act="w:' + o + '"' + (s ? "" : " disabled") + ">" + e + "</button>").join("") + "</div></div>" : ls.includes(t) || pt(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + si.map((e, o) => '<button type="button" role="menuitemradio" aria-checked="' + (o + 1 === Math.min(b, d)) + '" aria-label="' + e + ", " + (o + 1) + (o ? " columns" : " column") + '" data-board-act="w:' + (o + 1) + '"' + (o < d ? "" : " disabled") + ">" + e + "</button>").join("") + "</div></div>" : "";
    M.innerHTML = $ + dt + (t === "energy" ? w("graph", (((ut = u.opts.energy) == null ? void 0 : ut.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + w("left", "Move left", f || r.col === 0) + w("right", "Move right", f || r.col + r.cols >= d) + w("up", "Move up", r.row <= 0) + w("down", "Move down") + (P ? w("remove", "Remove") : w("hide", "Hide")), _.appendChild(M);
    const X = Math.min(r.x + r.w - M.offsetWidth, _.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, X) + "px", top: r.y + 28 + "px" }), ia = { key: t, menu: M, opener: a }, (U = M.querySelector("button:not([disabled])")) == null || U.focus();
  }
  function An(t) {
    if (!ia) return;
    const { menu: a, opener: r } = ia;
    ia = null, a.remove(), t && (r == null || r.focus());
  }
  const En = () => Object.fromEntries([...li].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Il(t, a) {
    var w, M;
    if (a === "remove") {
      An(), Xs(t);
      return;
    }
    const r = J, d = be(), u = En(), b = u[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (d.spans = { ...d.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (d.opts = { ...d.opts, [t]: { ...d.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((w = d.opts.energy) == null ? void 0 : w.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (u[t] = { ...b, col: b.col - 1 }), a === "right" && (u[t] = { ...b, col: b.col + 1 }), a === "up" && (u[t] = { ...b, row: b.row - 1 }), a === "down" && (u[t] = { ...b, row: b.row + 1 }), a === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Ce = { key: t, col: u[t].col, row: u[t].row }), di(d, u), Ce && (ra(), Ce = null, di(be(), En()));
    const f = /^[hw]:/.test(a) && !tn() && (ia == null ? void 0 : ia.menu.querySelector('[data-board-act="' + CSS.escape(a) + '"]'));
    if (f) {
      const P = ia;
      f.parentElement.querySelectorAll("[aria-checked]").forEach((H) => H.setAttribute("aria-checked", String(H === f))), setTimeout(() => {
        ia === P && An();
      }, aa.tabs.dur);
    } else An();
    a === "graph" && (je.delete("dash:energy"), wa()), a.startsWith("h:") && t.includes(".") && wa(), ra(), a !== "hide" ? (M = _.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || M.focus() : cn(Ba(t) + " hidden", tr(r));
  }
  const qo = (t) => {
    var a;
    return pe.includes(t) && !(((a = J.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function $s(t) {
    const a = be(), r = Ba(t) + qo(t);
    ps({ ...a, hidden: a.hidden.filter((d) => d !== t) }), ra(), cn(r);
  }
  const _n = () => be().tiles || [..._.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !be().hidden.includes(t));
  function Ir(t, a) {
    const r = be();
    di({ ...r, tiles: t, hidden: r.hidden.filter((d) => !d.includes(".")) }, a), wa(), ba();
  }
  const Hl = (t) => {
    Ir([..._n().filter((a) => a !== t), t], En()), cn(Ba(t) + " added"), Ol(t);
  }, Xs = (t) => {
    const a = J, r = En();
    delete r[t], Ir(_n().filter((d) => d !== t), r), cn(Ba(t) + " removed", tr(a));
  };
  let Js = 0;
  function cn(t, a = null) {
    var f;
    const r = c("toast");
    if (!r) return;
    if (Bf(r, t), a) {
      const w = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      w.addEventListener("click", () => {
        clearTimeout(Js), r.classList.remove("show", "withAction"), a();
      }), r.appendChild(w);
    }
    const d = m.getBoundingClientRect(), u = (f = n.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), b = Ne.classList.contains("open") && !eo ? Math.min(d.right, Ne.getBoundingClientRect().left) : d.right;
    r.style.left = (d.left + b) / 2 + "px", r.style.bottom = (u != null && u.height ? window.innerHeight - u.top + 12 : 26) + "px", r.classList.add("tfToast", "show"), r.classList.toggle("withAction", !!a), Rf(r), clearTimeout(Js), Js = setTimeout(() => r.classList.remove("show", "withAction"), a ? 5e3 : aa.confirm.stay);
  }
  const vo = 700, Ad = 1e3, Za = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Za.setAttribute("role", "tooltip"), Za.setAttribute("aria-hidden", "true"), m.appendChild(Za);
  let Hr = null, to = 0, Ji = 0, ci = -1 / 0;
  const Qs = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Fl = (t) => {
    for (let a = t; a && a !== m; a = a.parentElement) if (Qs(a)) return a;
    return null;
  };
  function pi(t, a) {
    clearTimeout(to), clearTimeout(Ji);
    const r = () => {
      if (!t.isConnected) return;
      Hr = t, Za.textContent = a, Za.hidden = !1;
      const d = t.getBoundingClientRect(), u = Za.getBoundingClientRect(), b = d.top - u.height - 8 >= 8 ? d.top - u.height - 8 : d.bottom + 8;
      Za.style.left = Math.max(8, Math.min(window.innerWidth - u.width - 8, d.left + d.width / 2 - u.width / 2)) + "px", Za.style.top = b + "px";
    };
    !Za.hidden || performance.now() - ci < Ad ? r() : to = setTimeout(r, vo);
  }
  function bo() {
    clearTimeout(to), clearTimeout(Ji), Za.hidden || (ci = performance.now()), Za.hidden = !0, Hr = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Za.contains(t.target)) {
      clearTimeout(Ji);
      return;
    }
    const a = Fl(t.target);
    if (a && Pt.names === "scroll" && a.matches(Pe)) {
      Qi(a);
      return;
    }
    if (a) {
      a !== Hr ? pi(a, a.textContent.trim()) : clearTimeout(Ji);
      return;
    }
    clearTimeout(to), clearTimeout(Ji), Ji = setTimeout(bo, 120);
  }), n.addEventListener("focusin", (t) => {
    var d;
    const a = t.target;
    if (!((d = a.matches) != null && d.call(a, ":focus-visible"))) return;
    let r = [a, ...a.querySelectorAll("*")].filter(Qs);
    Pt.names === "scroll" && (r.filter((u) => u.matches(Pe)).forEach(Qi), r = r.filter((u) => !u.matches(Pe))), r.length && pi(a, r.map((u) => u.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === Hr && bo();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Za.hidden && (t.stopPropagation(), bo());
  }, !0), window.addEventListener("scroll", () => {
    (!Za.hidden || to) && bo();
  }, { capture: !0, passive: !0 });
  const Pe = ".activityRowName,.activityRowMeta", wo = /* @__PURE__ */ new WeakSet();
  function Qi(t) {
    var r;
    if (Pt.names !== "scroll" || wo.has(t) || t.closest("[inert]") || (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    wo.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((d) => d.getAnimations()).map((d) => d.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const d = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (d < 2) {
        wo.delete(t);
        return;
      }
      const u = d / 30 * 1e3, b = u + 1e3 + u;
      t.style.textOverflow = "clip";
      const f = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -d + "px", offset: u / b },
        { textIndent: -d + "px", offset: (1e3 + u) / b, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: b });
      f.onfinish = f.oncancel = () => {
        t.style.textOverflow = "", wo.delete(t);
      };
    }, 600);
  }
  const vs = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (vs.unobserve(a.target), Qi(a.target));
  }), { threshold: 1 });
  let _a = !1;
  new MutationObserver(() => {
    _a || Pt.names !== "scroll" || (_a = !0, setTimeout(() => {
      _a = !1, n.querySelectorAll(Pe).forEach((t) => {
        !t.dataset.glided && Qs(t) && (t.dataset.glided = "1", vs.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const tr = (t) => () => {
    J = t, Ca(), wa(), ra(), ba();
  };
  function Ol(t) {
    const a = () => _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var f;
      const r = a();
      if (!r) return;
      const d = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, u = r.getBoundingClientRect();
      (u.top < 0 || u.bottom > window.innerHeight) && r.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const b = (w) => "0 0 0 4px color-mix(in srgb,var(--primary) " + w + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + w + "%,transparent)";
      r.animate([{ boxShadow: b(55) }, { boxShadow: b(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, ql(t) ? 260 : 0);
  }
  function ql(t) {
    const a = li.get(t);
    if (!a || !Ne.classList.contains("open") || eo) return !1;
    const { n: r, w: d } = ua(_.clientWidth), u = Ne.getBoundingClientRect().left - _.getBoundingClientRect().left, b = (M) => M * (d + _e) + a.cols * d + (a.cols - 1) * _e <= u;
    if (b(a.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    li.forEach((M, P) => {
      if (P !== t) for (let H = M.row; H < M.row + M.rows; H++) for (let F = M.col; F < M.col + M.cols; F++) f.add(F + "," + H);
    });
    const w = (M, P) => {
      for (let H = P; H < P + a.rows; H++) for (let F = M; F < M + a.cols; F++) if (f.has(F + "," + H)) return !1;
      return !0;
    };
    for (let M = 0; M <= cs; M++) for (let P = 0; P + a.cols <= r && b(P); P++)
      if (w(P, M))
        return di(be(), { ...En(), [t]: { col: P, row: M } }), ra(), !0;
    return !1;
  }
  const Wl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Ne = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Ne.setAttribute("aria-label", "Edit the dashboard"), Ne.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Ne);
  let eo = !1, xo = !1, yo = !1, er = !1, va = null, pn = !1;
  const tl = {}, Wo = (t, a) => {
    if (tl[t] === a) return;
    tl[t] = a;
    const r = Ne.querySelector('[data-tray="' + t + '"]');
    r.innerHTML = a, La(r);
  }, el = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + it(Bt(t)) + '</span><span class="activityRowMeta">' + it(a) + "</span></span>", Ed = (t, a, r) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + it(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + nc + '</span><span class="tfIcon"' + Xe(t, Cn(t)) + "></span>" + el(t, a ? "Hidden" + (ye.get(t) ? " · " + ye.get(t) : "") : ye.get(t) || We(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + it(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + it(Bt(t)) + ' on the dashboard">' + (a ? mp : om) + "</button>" + (r ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + it(t) + '" aria-label="Remove ' + it(Bt(t)) + ' from favourites">' + gp + "</button>" : "<span></span>") + "</li>";
  function jl(t, a, r, d) {
    const u = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((f) => a(f) && !r.has(f) && S[f].state !== "unavailable").filter((f) => {
      const w = (Bt(f) + " " + (ye.get(f) || "") + " " + f).toLowerCase();
      return u.every((M) => w.includes(M));
    }).sort((f, w) => (ye.get(f) || "~").localeCompare(ye.get(w) || "~") || Bt(f).localeCompare(Bt(w))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + it(f) + '"><span class="tfIcon"' + Xe(f, Cn(f)) + "></span>" + el(f, ye.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ba() {
    const t = ja && m.classList.contains("tfBoard");
    if (Ne.classList.toggle("open", t), Ne.classList.toggle("tucked", t && eo), Ne.toggleAttribute("inert", !t), t || (pn = !1), or(), !t) return;
    const a = Ne.querySelector("[data-tray-tuck]");
    a.innerHTML = eo ? np : vp, a.setAttribute("aria-expanded", String(!eo)), a.setAttribute("aria-label", eo ? "Show the edit tray" : "Tuck the edit tray away");
    const r = be().hidden.filter((f) => Xi().some((w) => w.key === f));
    Wo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + it(f) + '" aria-label="' + it(Ba(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + nc + "</span>" + it(Ba(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Wo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (be().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + pn + '">' + (pn ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(J.favHidden || []), u = jt(), b = [...u, ...[...d].filter((f) => !u.includes(f) && S[f])];
    if (Wo("favs", b.map((f) => Ed(f, d.has(f), u.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ne.querySelector('[data-pick="tiles"]').hidden = !yo, Ne.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(yo)), yo && Wo("tilepick", jl(Ne.querySelector("[data-tile-search]").value, (f) => kl.includes(f.split(".")[0]), new Set(_n()), "data-tile-pick")), Ne.querySelector('[data-tray="roompick"]').hidden = !er, Ne.querySelector("[data-room-add]").setAttribute("aria-expanded", String(er)), er) {
      const f = new Set(_n());
      Wo("roompick", V.filter((w) => !f.has("room:" + w.id)).map((w) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + it(w.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Xe("area:" + w.id, w.icon || "mdi:texture-box", w.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + it(w.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Ne.querySelector('[data-pick="favs"]').hidden = !xo, Ne.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(xo)), xo && Wo("pick", jl(Ne.querySelector("[data-fav-search]").value, (f) => Wl.test(f), new Set(jt()), "data-fav-pick")), Wo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ot() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ot() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Wn = (t) => {
    J = { ...J, ...t }, Ca(), wa(), ba();
  };
  function jo(t, a) {
    const r = J, d = new Set(J.favHidden || []);
    a ? d.delete(t) : d.add(t), Wn({ favHidden: [...d] }), a ? cn(Bt(t) + " put back") : cn(Bt(t) + " hidden", tr(r));
  }
  const zo = (t) => {
    const a = J;
    Wn({ favourites: jt().filter((r) => r !== t), favHidden: (J.favHidden || []).filter((r) => r !== t) }), cn(Bt(t) + " removed from favourites", tr(a));
  }, zl = (t) => {
    Wn({ favourites: [...jt().filter((a) => a !== t), t], favHidden: (J.favHidden || []).filter((a) => a !== t) }), cn(Bt(t) + " added to favourites");
  };
  Ne.addEventListener("click", (t) => {
    var r;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? Ya(!1) : a.hasAttribute("data-tray-tuck") ? (eo = !eo, ba()) : a.hasAttribute("data-phone-toggle") ? (pn = !pn, ba(), pn && ((r = Ra.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && ($s(a.dataset.trayCard), ba()) : a.dataset.favEye ? jo(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? zo(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (xo = !xo, ba(), xo && Ne.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? zl(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (yo = !yo, ba(), yo && Ne.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Hl(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (er = !er, ba()) : a.dataset.roomPick ? Hl("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Wn({ suggest: !Ot() }));
  }), Ne.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ba();
  }), Ne.addEventListener("keydown", (t) => {
    var r, d;
    const a = !!((d = (r = t.target).closest) != null && d.call(r, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? yo : xo) || (t.stopPropagation(), a ? yo = !1 : xo = !1, ba(), Ne.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ui(t, a, r, d) {
    t.preventDefault();
    const u = t.clientX, b = t.clientY;
    let f = null, w = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), P = (F) => {
      if (!f) {
        if (Math.hypot(F.clientX - u, F.clientY - b) < 4) return;
        f = a.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = a.offsetWidth + "px", m.appendChild(f);
      }
      f.style.transform = "translate(" + (F.clientX - 24) + "px," + (F.clientY - 24) + "px)";
      const $ = !eo && F.clientX >= Ne.getBoundingClientRect().left;
      if (r === "card") {
        const X = _.getBoundingClientRect(), { w: ut } = ua(_.clientWidth);
        Ce = !$ && F.clientX >= X.left && F.clientX <= X.right && F.clientY >= X.top + Oo ? { key: d, col: Math.max(0, Math.floor((F.clientX - X.left) / (ut + _e))), row: Math.max(0, Math.floor((F.clientY - X.top - Oo) / ga)), fromTray: !0 } : null, w || (w = requestAnimationFrame(() => {
          w = 0, ra();
        }));
        return;
      }
      const st = _.querySelector(".tfDash-favs"), dt = st == null ? void 0 : st.getBoundingClientRect();
      if (va = null, dt && !$ && F.clientX >= dt.left && F.clientX <= dt.right && F.clientY >= dt.top && F.clientY <= dt.bottom) {
        let X = 1 / 0;
        st.querySelectorAll('[data-k^="fav:"]').forEach((ut, U) => {
          const e = ut.getBoundingClientRect(), o = Math.hypot(F.clientX - (e.left + e.width / 2), F.clientY - (e.top + e.height / 2));
          o < X && (X = o, va = { i: U, r: e, after: F.clientX > e.left + e.width / 2 });
        }), va || (va = { i: 0, r: null, after: !1 });
      }
      va != null && va.r ? (M.isConnected || m.appendChild(M), Object.assign(M.style, { left: (va.after ? va.r.right : va.r.left) - 2 + "px", top: va.r.top + 8 + "px", height: va.r.height - 16 + "px" })) : M.remove();
    }, H = () => {
      if (window.removeEventListener("pointermove", P), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), cancelAnimationFrame(w), f == null || f.remove(), M.remove(), r === "card") {
        if (!f) $s(d);
        else if (Ce != null && Ce.fromTray) {
          ra();
          const X = Ba(d) + qo(d), ut = be(), U = En();
          Ce = null, di({ ...ut, hidden: ut.hidden.filter((e) => e !== d) }, U), cn(X);
        }
        Ce = null, ra(), wa(), ba();
        return;
      }
      if (!va) return;
      const F = new Set(J.favHidden || []);
      F.delete(d);
      const $ = jt().filter((X) => X !== d), st = $.filter((X) => !F.has(X)), dt = st[Math.min(va.i + (va.after ? 1 : 0), st.length)];
      $.splice(dt ? $.indexOf(dt) : $.length, 0, d), va = null, Wn({ favourites: $, favHidden: [...F] }), cn(Bt(d) + " put back");
    };
    window.addEventListener("pointermove", P), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  const Vl = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, ar = 136, _d = 288, nr = 0.8, Dd = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Ra = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Ra.setAttribute("aria-label", "Phone order"), Ra.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + gp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(Ra);
  let Vo = "";
  function or() {
    var w;
    const t = pn && ja && m.classList.contains("tfBoard") && !eo;
    if (Ra.classList.toggle("open", t), Ra.toggleAttribute("inert", !t), !t) return;
    const a = hs().filter((M) => !be().hidden.includes(M.key)), r = a.length, d = (M) => Math.round(M * nr * 10) / 10 + "px", u = (M, P) => {
      const H = M.el.classList.contains("tfDac"), F = M.tile ? H ? _d : ar : Vl[M.key] || ar;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + it(M.key) + '" style="min-height:' + d(F) + '" aria-label="' + it(Ba(M.key) + ", " + (P + 1) + " of " + r + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? Xe(M.key, Cn(M.key)) : Xe(M.key, Dd[M.key])) + '></span><span class="tfPhoneName">' + it(Ba(M.key)) + "</span></button>";
    }, b = '<div class="tfPhoneTitle">' + it(((w = _.querySelector(".tfDashTitle")) == null ? void 0 : w.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(Vl.sums) + '"><span class="tfPhoneName">' + it(Ba("sums")) + "</span></div>" + a.map(u).join("");
    if (Ra.querySelector('[data-phone="note"]').innerHTML = be().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", b === Vo) return;
    Vo = b;
    const f = Ra.querySelector('[data-phone="list"]');
    f.innerHTML = b, La(f);
  }
  function bs(t, a) {
    var r;
    ps({ ...be(), phone: t }), ba(), a && ((r = Ra.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || r.focus({ preventScroll: !0 }));
  }
  const Fr = () => [...Ra.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function ir(t, a) {
    t.preventDefault();
    const r = a.parentElement, d = Ra.querySelector(".tfPhoneScreen"), u = Fr().join();
    a.classList.add("moving");
    const b = (w) => {
      const M = d.getBoundingClientRect();
      w.clientY > M.bottom - 40 ? d.scrollTop += 12 : w.clientY < M.top + 40 && (d.scrollTop -= 12);
      const P = [...r.querySelectorAll("[data-phone-key]")].find(($) => {
        const st = $.getBoundingClientRect();
        return $ !== a && w.clientX >= st.left && w.clientX <= st.right && w.clientY >= st.top && w.clientY <= st.bottom;
      });
      if (!P) return;
      const H = P.getBoundingClientRect(), F = P.classList.contains("tile") ? w.clientX < H.left + H.width / 2 : w.clientY < H.top + H.height / 2;
      r.insertBefore(a, F ? P : P.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const w = Fr();
      Vo = "", w.join() !== u ? bs(w) : or();
    };
    window.addEventListener("pointermove", b), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  Ra.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && ir(t, a);
  }), Ra.addEventListener("click", (t) => {
    var r;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      pn = !1, ba(), (r = Ne.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: d, ...u } = be();
      ps(u), ba();
    }
  }), Ra.addEventListener("keydown", (t) => {
    var f, w, M, P;
    if (t.key === "Escape") {
      t.stopPropagation(), pn = !1, ba(), (f = Ne.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const a = (P = (M = (w = t.target).closest) == null ? void 0 : M.call(w, "[data-phone-key]")) == null ? void 0 : P.dataset.phoneKey, r = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !r) return;
    t.preventDefault();
    const d = Fr(), u = d.indexOf(a), b = u + r;
    b < 0 || b >= d.length || ([d[u], d[b]] = [d[b], d[u]], bs(d, a));
  });
  function rr(t, a) {
    t.preventDefault();
    const r = a.parentElement;
    a.classList.add("moving");
    const d = (b) => {
      const f = [...r.children].find((w) => {
        const M = w.getBoundingClientRect();
        return w !== a && b.clientY >= M.top && b.clientY <= M.bottom;
      });
      if (f) {
        const w = f.getBoundingClientRect();
        r.insertBefore(a, b.clientY < w.top + w.height / 2 ? f : f.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const b = new Set(jt());
      tl.favs = null, Wn({ favourites: [...r.children].map((f) => f.dataset.trayFav).filter((f) => b.has(f)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  Ne.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), r = t.target.closest(".tfTrayFav");
    a ? ui(t, a, "card", a.dataset.trayCard) : r && t.target.closest(".tfTrayGrip") ? rr(t, r) : r != null && r.classList.contains("off") && !t.target.closest("button") && ui(t, r, "fav", r.dataset.trayFav);
  });
  function un(t) {
    if (!ja || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), r = a && Xi().find((A) => A.el === a);
    if (!r || go.includes(r.key)) return;
    const d = li.get(r.key), { w: u } = ua(_.clientWidth);
    if (!d) return;
    t.preventDefault(), An();
    const b = t.clientX, f = t.clientY;
    let w = !1, M = 0;
    const P = aa.drag, H = tn();
    let F = 0, $ = 0, st = 0, dt = 0, X = 0, ut = 0, U = H || P.stick === 0, e = 0;
    const o = (A, L, O, lt) => {
      a.style.transform = "translate(" + st.toFixed(2) + "px," + dt.toFixed(2) + "px) rotate(" + A.toFixed(2) + "deg) rotate(" + L + "rad) scale(" + O.toFixed(4) + "," + lt.toFixed(4) + ") rotate(" + -L + "rad)";
    }, s = () => {
      if (e = requestAnimationFrame(s), H) {
        st = F, dt = $, o(0, 0, 1, 1);
        return;
      }
      if (!U) {
        const bt = Math.min(Math.hypot(F, $) / Math.max(1, P.stick), 1);
        st = F * 0.35, dt = $ * 0.35, o(0, Math.atan2($, F), 1 + 0.155 * bt, 1 - 0.1 * bt);
        return;
      }
      X = Bc(X, F - st, P.pull / 100, P.keep / 100), ut = Bc(ut, $ - dt, P.pull / 100, P.keep / 100), st += X, dt += ut;
      const A = Math.hypot(X, ut), L = Math.min(A / 48, 1), O = Math.max(-5, Math.min(P.tilt, X * 0.32)), lt = 1 + P.lift / 100;
      o(O, Math.atan2(ut, X), lt * (1 + 0.1 * L), lt * (1 - 0.063 * L));
    }, h = (A) => {
      if (F = A.clientX - b, $ = A.clientY - f, !w) {
        if (Math.hypot(F, $) < 4) return;
        w = !0, Ce = { key: r.key, col: d.col, row: d.row }, a.classList.add("tfDragging", "mvDrag"), e = requestAnimationFrame(s);
      }
      !U && Math.hypot(F, $) > P.stick && (U = !0, X = F * 0.085, ut = $ * 0.085), Ce.col = Math.round((d.x + F) / (u + _e)), Ce.row = Math.round((d.y + $ - Oo) / ga), M || (M = requestAnimationFrame(() => {
        M = 0, ra();
      }));
    }, v = () => {
      var $t;
      if (window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", v), !w) return;
      const A = (Ht) => {
        Ht.preventDefault(), Ht.stopImmediatePropagation();
      };
      window.addEventListener("click", A, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", A, { capture: !0 }), 300), cancelAnimationFrame(M), cancelAnimationFrame(e);
      const L = a.getBoundingClientRect(), O = r.key;
      a.style.transition = "none", ra(), a.classList.remove("tfDragging", "mvDrag"), a.style.transform = "", Ce = null, di(be(), En()), ra(), wa();
      const lt = ($t = Xi().find((Ht) => Ht.key === O)) == null ? void 0 : $t.el;
      if (requestAnimationFrame(() => {
        a.style.transition = "", lt && (lt.style.transition = "");
      }), !lt || H) return;
      lt.style.transition = "none";
      const bt = lt.getBoundingClientRect(), vt = L.left + L.width / 2 - (bt.left + bt.width / 2), mt = L.top + L.height / 2 - (bt.top + bt.height / 2);
      lt.style.zIndex = "20", lt.animate([{ transform: "translate(" + vt + "px," + mt + "px) scale(" + (1 + P.lift / 100) + ")" }, { transform: "none" }], { duration: P.slide, easing: Ve.land }).finished.then(() => {
        lt.style.zIndex = "", Pf(lt);
      }, () => {
        lt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", v), window.addEventListener("pointercancel", v);
  }
  function al(t = !1) {
    const a = _ == null ? void 0 : _.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const r = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === r) return;
    const d = !a.dataset.drawn;
    a.dataset.drawn = r;
    const u = Vs.find((b) => b.id === a.dataset.graph);
    u ? _r(a, u).then(() => {
      (t || d) && Us(a);
    }) : Gr(a.dataset.graph, a).then(() => {
      t && Al(a);
    });
  }
  function nl() {
    var w, M, P;
    Qt = me.model(i()), Zt(), S = Qt.states, S[(w = J.sources) == null ? void 0 : w.grid] && (Qt.grid = J.sources.grid), S[(M = J.sources) == null ? void 0 : M.alarm] && (Qt.security.alarms = [J.sources.alarm]), W.forEach((H, F) => {
      const $ = S[F], st = ($ == null ? void 0 : $.attributes) || {};
      if (!$ || Date.now() - H.at > 2 * 60 * 1e3) {
        W.delete(F);
        return;
      }
      H.pos != null && $.state !== "opening" && $.state !== "closing" && Math.abs(Nn(F) - H.pos) < 1 && delete H.pos, H.tilt != null && Math.abs((st.current_tilt_position ?? -1) - H.tilt) < 1 && delete H.tilt, H.pos == null && H.tilt == null && W.delete(F);
    });
    const t = [];
    let a = 0;
    const r = yt();
    V = r.filter((H) => H.room).map((H) => H.room), V.some((H) => H.id === St) || (St = ((P = V[0]) == null ? void 0 : P.id) || null);
    const d = et === "weather" ? { key: "weather", name: "Weather" } : et && r.find((H) => H.key === et);
    if (d || (et = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), ye = /* @__PURE__ */ new Map(), Qt.rooms.forEach((H) => [...H.actions, ...H.plugs, ...H.readings, ...H.openings, ...H.solar, ...H.plants.flatMap((F) => [F.id, ...F.readings])].forEach((F) => ye.set(F, H.name))), !d) return Ui(t, Ea());
    if (t.push({ key: "areahead", html: ol(d, ++a) }), d.key === "weather")
      return t.weather = ++a, t;
    const u = d.ids, b = d.room ? d.room.id : d.key, f = d.room;
    return f != null && f.solar.length && t.push({ key: "energy:" + f.id, html: ts(f, ++a) }), f && (f.readings.length || f.plugs.length || f.power != null) && t.push({ key: "readings:" + f.id, html: so(f, ++a) }), f == null || f.plants.forEach((H) => t.push({ key: "plant:" + H.id, html: Ri(H, ++a) })), u.length && t.push({ key: "block:" + b, order: ++a, tiles: u.map((H) => ({ key: H, html: co(H) })) }), t;
  }
  const ol = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + np + '</button><div class="settingsTitle">' + it(t.name) + "</div></div>";
  let Gl = 0, ws = null;
  const xs = (t) => t === "weather" ? da.wx : t.startsWith("room:") && _.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || _.querySelector(".tfAreas");
  function Or(t) {
    var a, r;
    et || (Gl = lr().scrollTop, ws = ((a = xs(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), et = t, t.startsWith("room:") && (St = t.slice(5)), Oe(), lr().scrollTop = 0, (r = _.querySelector("[data-area-back]")) == null || r.focus({ preventScroll: !0 });
  }
  let fi = null;
  function sr(t, a) {
    if (fi == null || fi(), a == null) return;
    const r = lr(), d = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let b = 0;
    const f = () => {
      cancelAnimationFrame(b), u.forEach((M) => window.removeEventListener(M, f, !0)), fi = null;
    }, w = () => {
      const M = t();
      if (M != null && M.isConnected) {
        const P = M.getBoundingClientRect().top - a;
        Math.abs(P) > 0.5 && (r.scrollTop += P);
      }
      performance.now() < d ? b = requestAnimationFrame(w) : f();
    };
    u.forEach((M) => window.addEventListener(M, f, { capture: !0, passive: !0 })), fi = f, w();
  }
  function ys() {
    var r;
    const t = et;
    et = null, Oe(), lr().scrollTop = Gl, sr(() => xs(t), ws);
    const a = t.startsWith("room:") ? _.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || _.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? da.wx.querySelector(".wbOpenPage") : _.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (r = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || r.focus({ preventScroll: !0 });
  }
  const Bd = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + it(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", ks = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((r) => r.key).join(",") + ")" : "")).join(";");
  function lr() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Ka(t) {
    const a = lr(), r = (w) => {
      const M = w.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, d = [..._.children, ..._.querySelectorAll(".tfDashTiles > *")].find((w) => !w.matches(".tfDashTiles") && r(w)), u = d == null ? void 0 : d.dataset.k, b = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const f = d != null && d.isConnected ? d : u && _.querySelector('[data-k="' + CSS.escape(u) + '"]');
    f != null && f.isConnected && b != null && (a.scrollTop += f.getBoundingClientRect().top - b);
  }
  function Oe() {
    if (!k || !_) return;
    const t = nl(), a = (u) => {
      var b;
      return (((b = u.closest("[data-k]")) == null ? void 0 : b.dataset.k) || "") + "|" + u.dataset.iconFor + "|" + (u.dataset.iconName || "");
    }, r = /* @__PURE__ */ new Map();
    _.querySelectorAll("[data-tf] [data-icon-for]").forEach((u) => {
      u.firstElementChild && (r.get(a(u)) || r.set(a(u), []).get(a(u))).push(u.firstElementChild);
    }), _.querySelectorAll("[data-tf]").forEach((u) => u.remove()), je.clear();
    const d = document.createElement("div");
    d.innerHTML = t.map((u) => u.tiles ? Bd(u) : u.html).join(""), t.forEach((u) => u.tiles ? u.tiles.forEach((b) => je.set(b.key, b.html)) : je.set(u.key, u.html)), Kr = ks(t), d.querySelectorAll("[data-icon-for]").forEach((u) => {
      var f;
      const b = !u.firstElementChild && ((f = r.get(a(u))) == null ? void 0 : f.shift());
      b && u.appendChild(b);
    }), _.append(...d.children), Mr(t.weather), Sr(), ms.disconnect(), ra(), La(_), cl(_), No(_), K(), Z && Gr(Z.id), ml(), Wr(), Cs(), requestAnimationFrame(wt);
  }
  const Ms = (t) => {
    var r;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (r = a.dataset) == null ? void 0 : r.act };
  }, il = (t, a) => {
    var r;
    a && ((r = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || r.focus({ preventScroll: !0 }));
  };
  function Ss(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const r = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), d = a.querySelector(":scope > .tfDacPad");
    if (r)
      return (d == null ? void 0 : d.dataset.dac) !== r.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((f) => a.hasAttribute(f) ? t.setAttribute(f, a.getAttribute(f)) : t.removeAttribute(f)), [...t.style].filter((f) => f.startsWith("--") && !f.startsWith("--tf-")).forEach((f) => t.style.removeProperty(f)), [...a.style].forEach((f) => t.style.setProperty(f, a.style.getPropertyValue(f))), t);
    const u = (f) => {
      var w;
      return ((w = f.dataset) == null ? void 0 : w.iconFor) !== void 0;
    };
    if (u(t) && u(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((f) => {
        a.hasAttribute(f.name) || t.removeAttribute(f.name);
      }), [...a.attributes].forEach((f) => {
        t.getAttribute(f.name) !== f.value && t.setAttribute(f.name, f.value);
      }), t;
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((f) => {
      a.hasAttribute(f.name) || t.removeAttribute(f.name);
    }), [...a.attributes].forEach((f) => t.setAttribute(f.name, f.value));
    const b = [...a.children];
    return [...t.children].forEach((f, w) => Ss(f, b[w])), t;
  }
  function Rd(t, a) {
    const r = document.createElement("div");
    r.innerHTML = a;
    const d = Ms(t), u = Ss(t, r.firstElementChild);
    La(u), cl(u), No(u), il(u, d);
  }
  function wa() {
    !k || !_ || Ce || Ka(Ul);
  }
  function Ul() {
    if (!_.querySelector("[data-tf]")) {
      Oe();
      return;
    }
    const t = nl();
    if (ks(t) !== Kr) {
      Oe();
      return;
    }
    const a = (r) => [...T.keys()].some((d) => {
      const u = d.slice(d.indexOf("|") + 1);
      return r === u || r.endsWith(":" + u);
    });
    t.forEach((r) => (r.tiles || [r]).forEach((d) => {
      if (je.get(d.key) === d.html || a(d.key)) return;
      const u = _.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (u) {
        if (je.set(d.key, d.html), Z && Z.key === d.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = ro(Z.id);
          return;
        }
        Rd(u, d.html), Z && Z.key === d.key && Gr(Z.id), d.key.startsWith("energy:") && ml();
      }
    })), Wr(), Cs(), Tn(), K(), Xt == null || Xt.update(), ha == null || ha.forEach((r) => r.update()), m.classList.contains("tfDash") && dn(), requestAnimationFrame(wt);
  }
  const hi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Te(t.color_mode)]],
    climate: (t) => [["Current temperature", Ta(t.current_temperature) + " °C"], ["Target", Ta(t.temperature) + " °C"], ["Action", Te(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Te(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Te(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ta(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Te(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Yl = (t) => Uo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function mi(t, a = {}, r = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + it(d.name) + '</div><div class="tfMoreTiles' + (r ? " single" : "") + '">' + d.ids.map((u) => Kt(u, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ut = document.createElement("div");
  Ut.className = "tfMoreBackdrop", Ut.hidden = !0, m.appendChild(Ut);
  const rl = (t, a) => {
    for (let r = t; r && r !== Ut; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if ((d === "auto" || d === "scroll") && r.scrollHeight > r.clientHeight + 1 && (a < 0 ? r.scrollTop > 0 : r.scrollTop + r.clientHeight < r.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let fn = null;
  Ut.addEventListener("touchstart", (t) => {
    fn = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Ut.addEventListener("touchmove", (t) => {
    var u, b;
    if (!fn || t.touches.length > 1 || (b = (u = t.target).closest) != null && b.call(u, "input,textarea,select")) return;
    const a = t.touches[0], r = fn.x - a.clientX, d = fn.y - a.clientY;
    fn = { x: a.clientX, y: a.clientY }, Math.abs(d) >= Math.abs(r) && !rl(t.target, d) && t.preventDefault();
  }, { passive: !1 }), Ut.addEventListener("wheel", (t) => {
    var a, r;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((r = (a = t.target).closest) != null && r.call(a, "[data-more-pages]")) || rl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const sl = () => window.innerWidth <= 620;
  let xa = null;
  Ut.addEventListener("pointerdown", (t) => {
    const a = Ut.querySelector(".tfMorePair");
    !sl() || !a || !a.contains(t.target) || !t.isPrimary || Ut._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (xa = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: a, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Ut.addEventListener("pointermove", (t) => {
    if (!xa || !t.isPrimary) return;
    const a = t.clientY - xa.y, r = performance.now();
    if (!xa.on) {
      if (Math.abs(t.clientX - xa.x) > 8 || a < -8 || !xa.grab && rl(xa.from, -1)) {
        xa = null;
        return;
      }
      if (a < 8) return;
      xa.on = !0;
      try {
        Ut.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    xa.v = (a - xa.dy) / Math.max(1, r - xa.t), xa.dy = a, xa.t = r, xa.pair.style.transform = "translateY(" + Math.max(0, a) + "px)";
  });
  const gi = (t) => {
    if (!xa || !t.isPrimary) return;
    const a = xa;
    if (xa = null, !a.on) return;
    const r = (P) => {
      P.preventDefault(), P.stopImmediatePropagation();
    };
    window.addEventListener("click", r, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", r, { capture: !0 }), 300);
    const d = t.type === "pointerup" && (a.dy > 120 || a.v > 0.5), u = "translateY(" + Math.max(0, a.dy) + "px)";
    if (a.pair.style.transform = "", !d || tn()) {
      d ? fl() : a.pair.animate([{ transform: u }, { transform: "none" }], { duration: 320, easing: Ve.spring });
      return;
    }
    const b = ct;
    Ut._closing = !0, Ut.style.pointerEvents = "none", Ut.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ve.exit, fill: "forwards" });
    const f = a.pair.animate([{ transform: u }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ve.exit, fill: "forwards" });
    let w = !1;
    const M = () => {
      w || (w = !0, Ut._closing = !1, Ut.style.pointerEvents = "", Ut.getAnimations().forEach((P) => P.cancel()), a.pair.getAnimations().forEach((P) => P.cancel()), ct === b && fl());
    };
    f.finished.then(M, M), setTimeout(M, 300);
  };
  Ut.addEventListener("pointerup", gi), Ut.addEventListener("pointercancel", gi);
  function dr() {
    const t = Ut.querySelector(".tfMorePair"), a = Ut.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", dr, { passive: !0 }), k && la();
  let ko = [];
  const ll = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Pd(t) {
    const a = (M, P = "") => '<div class="tfMoreHead">' + (ct != null && ct.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + it(M) + "</div>" + P + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>", r = (M, P) => '<div class="tfMoreNow"><div class="tfMoreState">' + it(M) + "</div></div>", d = mi;
    if (t === "favourites") {
      const M = jt(), P = new Set(M), H = [{ name: "Starred", ids: M }, { name: "Home", ids: Qt.homeVacuums }, { name: "Security", ids: [...Qt.security.alarms, ...Qt.security.locks] }, ...Qt.rooms.map((F) => ({ name: F.name, ids: [...F.actions, ...F.plugs] }))].map((F, $) => $ ? { ...F, ids: F.ids.filter((st) => !P.has(st)) } : F).filter((F) => F.ids.length);
      return [a("Favourites"), r(M.length ? M.length + " starred" : "None starred"), d(H, { star: !0 }, !0)];
    }
    const u = (M, { name: P = "", alert: H = !1, plain: F = !1 } = {}) => {
      const $ = F ? [] : M.filter((X) => kl.includes(X.split(".")[0])), st = M.filter((X) => !$.includes(X)), dt = (X) => X.startsWith("vacuum.") && Yt(X).battery_level != null ? Yt(X).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (P ? '<div class="tfMoreGroupName">' + it(P) + "</div>" : "") + '<div class="tfMoreActions">' + $.map((X) => co(X, !0)).join("") + st.map((X) => Kt(X, { plain: F, alert: H, say: F ? dt(X) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = Ea().find(($) => $.key === t.slice(8));
      if (!M) return null;
      const P = M.key === "light" ? (M.groups || []).flatMap(($) => $.ids) : [], H = P.some(($) => {
        var st;
        return ((st = S[$]) == null ? void 0 : st.state) === "on";
      }), F = P.length ? '<button class="primary" type="button" data-acts="' + Xo(P.map(($) => ["light", H ? "turn_off" : "turn_on", $])) + '">' + (H ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(M.name), '<div class="tfMoreNowRow">' + r(M.value) + F + "</div>", ...(M.groups || []).map(($) => u($.ids, { name: $.name === M.name ? "" : $.name, alert: $.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, P] = t.split(":"), H = Qt.rooms.find((st) => st.id === M), F = H && ai(H).find((st) => st.key === P);
      if (!F) return null;
      const $ = F.acts ? '<button class="primary" type="button" data-acts="' + Xo(F.acts) + '">' + (F.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(H.name + " " + F.label.toLowerCase()), '<div class="tfMoreNowRow">' + r(F.value) + $ + "</div>", u(Fa(H, P))];
    }
    const b = t.split(".")[0];
    S[t];
    const f = kl.includes(b) ? On(t) : { sections: [] }, w = (ct == null ? void 0 : ct.page) || 0;
    return [
      Dn(t, f),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Nd(t) + (b === "plant" ? $l(t).join("") : "") + f.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + Hd(t) + "</section></div>",
      '<div class="tfMoreDots" role="tablist" aria-label="Pages">' + ["Control", "Info"].map((M, P) => '<button type="button" role="tab" aria-selected="' + (P === w) + '" aria-label="' + M + '" data-more-page="' + P + '"' + (P === w ? "" : ' tabindex="-1"') + "></button>").join("") + "</div>"
    ];
  }
  function Dn(t, a, r) {
    var f, w, M, P, H;
    const d = (f = Qt.areaOf) == null ? void 0 : f.call(Qt, t), u = d && (((w = Qt.rooms.find((F) => F.id === d)) == null ? void 0 : w.name) || ((H = (P = (M = i()) == null ? void 0 : M.areas) == null ? void 0 : P[d]) == null ? void 0 : H.name)) || "", b = a.button ? $n(t, a) : '<div class="tfIcon"' + Xe(t, a.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (a.on ? " on" : "") + '"' + (a.tone ? ' data-tone="' + a.tone + '"' : "") + Yn(t) + ">" + (ct != null && ct.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + b + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + it(Bt(t)) + "</span>" + (u ? '<span class="activityRowMeta">' + it(u) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>";
  }
  const Zl = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Nd(t) {
    const a = t.split(".")[0];
    if (Zl.includes(a) || a === "light" && !ti(t)) {
      const u = kl.includes(a) ? On(t) : null;
      return u != null && u.button ? '<div class="tfMoreSpace tfMoreSwitch' + (u.on ? " on" : "") + '"' + (u.tone ? ' data-tone="' + u.tone + '"' : "") + Yn(t) + ">" + $n(t, u) + "</div>" : "";
    }
    if (a === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + it(t) + '"></div></div>';
    if (a === "light" && ti(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + it(t) + '"></div></div>';
    const { big: r, lines: d } = Id(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (ue("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + it(r[0]) + "</span>" + (r[1] ? '<span class="tfMoreUnit">' + it(r[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + d.map(([u, b]) => '<div class="tfMoreFact"><span>' + it(u) + "</span><span>" + it(b) + "</span></div>").join("") + "</div></div>";
  }
  function Id(t) {
    var H;
    const a = S[t], r = Yt(t), d = t.split(".")[0], u = (((H = hi[d]) == null ? void 0 : H.call(hi, r)) || []).filter(([, F]) => F != null && F !== ""), b = (F) => {
      const $ = u.findIndex(([st]) => st === F);
      return $ < 0 ? null : u.splice($, 1)[0][1];
    }, f = (F) => {
      const $ = String(F).match(/^(-?[\d.,]+)\s*(.*)$/);
      return $ ? [$[1], $[2]] : [String(F), ""];
    }, w = () => [Te(String(a.state).replace(/_/g, " ")), ""];
    let M;
    d === "light" ? (b("Brightness"), M = a.state === "on" && Sn(t) ? [String(Vn(a)), "%"] : w()) : d === "climate" ? M = f(b("Current temperature") || Ta(r.current_temperature) + " °C") : d === "cover" ? (b("Position"), M = r.current_position != null ? [String(Nn(t)), "%"] : w()) : d === "humidifier" ? M = f(b("Current humidity") || a.state) : d === "vacuum" ? M = f(b("Battery") || a.state) : d === "plant" ? M = f(b("Moisture") || a.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(d) ? M = w() : M = f(a.state + (r.unit_of_measurement ? " " + r.unit_of_measurement : ""));
    const P = u.length ? u.slice(0, 4) : [["State", We(t)]];
    return { big: M, lines: P };
  }
  function Hd(t) {
    var P, H, F, $, st, dt, X;
    const a = S[t], r = i(), d = (P = r == null ? void 0 : r.entities) == null ? void 0 : P[t], u = d != null && d.device_id ? (H = r == null ? void 0 : r.devices) == null ? void 0 : H[d.device_id] : null, b = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + it(t) + '" role="img" aria-label="' + it(Bt(t)) + ', last 24 hours"></svg></div>', f = (F = Qt.areaOf) == null ? void 0 : F.call(Qt, t), w = f && ((($ = Qt.rooms.find((ut) => ut.id === f)) == null ? void 0 : $.name) || ((dt = (st = r == null ? void 0 : r.areas) == null ? void 0 : st[f]) == null ? void 0 : dt.name)) || "", M = [
      ...((X = hi[t.split(".")[0]]) == null ? void 0 : X.call(hi, Yt(t))) || [],
      ["Changed", a.last_changed && Tr(Date.parse(a.last_changed))],
      ["Area", w],
      ["Device", u && (u.name_by_user || u.name)],
      ["Integration", (d == null ? void 0 : d.platform) && Te(d.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, ut]) => ut != null && ut !== "");
    return b + '<div class="tfMoreRows">' + M.map(([ut, U]) => '<div class="tfMoreRow"><span>' + it(ut) + "</span><span>" + it(U) + "</span></div>").join("") + "</div>" + Yl(t) + (u ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + it(d.device_id) + '"><span>Device page</span>' + vp + "</button>" : "");
  }
  const Kl = () => "";
  let dl = "";
  function za(t) {
    var a;
    ct && (ct.details = t, Wr(), (a = Ut.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const qr = (t) => {
    const a = S[t], r = Nn(t), d = Se(t);
    return { kind: tc(a), name: Bt(t), text: We(t), pos: r, target: Math.abs(d - r) > 0.5 ? d : null, moving: a.state === "opening" || a.state === "closing", tilt: Bo(t) ?? 100, canSet: Gt(t, cp) };
  };
  function cl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const r = a.dataset.coverArt, d = a.dataset.artKey || "more:" + r;
      let u = kt.get(d);
      u || (u = jh({ onMove: (b) => jn(r, b), onSet: (b) => {
        jn(r, b), hr("pos", r);
      } }), u.coverId = r, kt.set(d, u)), a.replaceWith(u.el), u.update(qr(r));
    });
  }
  const cr = (t) => [...kt.values()].filter((a) => a.coverId === t), vi = () => kt.forEach((t) => {
    S[t.coverId] && t.update(qr(t.coverId));
  }), Cs = () => {
    kt.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), kt.delete(a));
    }), vi();
  };
  function Wr() {
    var b, f;
    if (!ct || !(ll(ct.id) || S[ct.id])) {
      Ut.hidden = !0;
      return;
    }
    if ([...T.keys()].some((w) => w.endsWith("|" + ct.id))) {
      vi();
      return;
    }
    const t = Pd(ct.id), a = Ut.querySelector(".tfMore");
    if (!t) {
      Ye();
      return;
    }
    const r = Ms(Ut), d = Kl(ct.id), u = ct.frame ? ct.frame.wide : ct.id.startsWith("summary:") || ct.id.startsWith("group:");
    if (Ut.hidden || !a || t.length !== ko.length || a.classList.contains("wide") !== u) {
      const w = So ? ct.scroll || 0 : !Ut.hidden && a ? a.scrollTop : 0;
      if (Ut.innerHTML = '<div class="tfMorePair' + (Ut.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '"' + (ct.frame ? ' style="height:' + ct.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", dl = d, Ut.classList.toggle("wide", u), Ut.hidden = !1, dr(), cl(Ut), No(Ut), La(Ut), Ut.querySelectorAll("[data-day]").forEach((M) => ur(M.dataset.day, M, ct.at)), Xl(Ut), w && (Ut.querySelector(".tfMore").scrollTop = w), jr(), il(Ut, r), !Ut.contains(n.activeElement)) {
        const M = Ut.querySelector("[data-more-close]");
        (b = M != null && M.offsetParent ? M : Ut.querySelector(".tfMore")) == null || b.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((w, M) => {
        var F, $;
        if (w === ko[M] || w.includes("data-cover-art") || a.children[M].contains(($ = (F = n.activeElement) == null ? void 0 : F.matches) != null && $.call(F, "input,select") ? n.activeElement : null) || [...T.keys()].some((st) => a.children[M].querySelector('[data-drag="' + CSS.escape(st) + '"]'))) return;
        const P = document.createElement("div");
        P.innerHTML = w;
        const H = Ss(a.children[M], P.firstElementChild);
        La(H), Xl(H), No(H);
      }), d !== dl) {
        const w = Ut.querySelector(".tfMoreSideBody");
        w && (w.innerHTML = d), dl = d;
      }
      a.querySelectorAll("[data-day]").forEach((w) => {
        w.innerHTML || ur(w.dataset.day, w, ct.at);
      }), jr(), Ut.contains(n.activeElement) || il(Ut, r);
    }
    (f = Ut.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(ct.details && d)), ko = t, vi();
  }
  function jr() {
    const t = Ut.querySelector("[data-more-pages]");
    !t || !ct || (t.scrollTo({ left: (ct.page || 0) * t.clientWidth, behavior: "instant" }), Mo(), pr(t));
  }
  function pr(t) {
    const a = t.children[(ct == null ? void 0 : ct.page) || 0];
    a && (t.style.height = a.scrollHeight + "px");
  }
  function Mo() {
    const t = (ct == null ? void 0 : ct.page) || 0;
    Ut.querySelectorAll("[data-more-page]").forEach((a) => {
      const r = Number(a.dataset.morePage) === t;
      a.setAttribute("aria-selected", String(r)), a.tabIndex = r ? 0 : -1;
    });
  }
  function zr(t, a) {
    var d, u;
    const r = Ut.querySelector("[data-more-pages]");
    !r || !ct || (ct.page = Math.max(0, Math.min(1, t)), r.scrollTo({ left: ct.page * r.clientWidth, behavior: (d = window.matchMedia) != null && d.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Mo(), pr(r), (u = Ut.querySelector('[data-more-page="' + ct.page + '"]')) == null || u.focus({ preventScroll: !0 }));
  }
  let pl = 0;
  Ut.addEventListener("scroll", (t) => {
    var r;
    const a = t.target;
    !((r = a.matches) != null && r.call(a, "[data-more-pages]")) || !ct || (clearTimeout(pl), pl = setTimeout(() => {
      const d = Math.round(a.scrollLeft / Math.max(1, a.clientWidth));
      d !== (ct.page || 0) && (ct.page = d, Mo(), pr(a));
    }, 80));
  }, !0), setInterval(() => {
    ct && Wr();
  }, 15 * 1e3);
  function Ts(t, a) {
    var u;
    const r = !!(ct && a && Ut.contains(a)), d = r && Ut.querySelector(".tfMore");
    r && (ct.scroll = d.scrollTop), ct = { id: t, opener: r ? ct.opener : a, back: r ? ct : null, frame: r ? ct.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((u = a == null ? void 0 : a.dataset) == null ? void 0 : u.at) || null }, ul();
  }
  let So = !1;
  function ul() {
    ko = [], So = !Ut.hidden, kt.forEach((t, a) => {
      a !== ct.id && Ut.contains(t.el) && (t.destroy(), kt.delete(a));
    }), Wr(), So = !1;
  }
  function Ye() {
    if (!ct) return;
    const t = ct;
    _f(Ut, () => {
      ct === t && fl();
    });
  }
  function fl() {
    var r, d, u, b, f, w;
    const t = ct == null ? void 0 : ct.opener;
    ct = null, kt.forEach((M, P) => {
      Ut.contains(M.el) && (M.destroy(), kt.delete(P));
    }), Ia.forEach((M, P) => {
      P.startsWith("more:") && Ia.delete(P);
    }), Ut.hidden = !0, Ut.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (r = t == null ? void 0 : t.dataset) != null && r.more ? (d = _.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (b = _.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || b.focus(a) : (f = t == null ? void 0 : t.hasAttribute) != null && f.call(t, "data-favs-edit") && ((w = _.querySelector("[data-favs-edit]")) == null || w.focus(a));
  }
  const Co = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function $l(t) {
    const a = String(Yt(t).problem || ""), r = "sensor." + t.split(".")[1] + "_";
    return a === "none" ? [] : a.split(",").map((d) => d.trim().split(" ")).map(([d, u]) => {
      const b = Co[d], f = r + b;
      if (!b || !S[f] || !Ur[b]) return "";
      const w = Yt(f).unit_of_measurement || "", [M, P] = Ur[b], H = u === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + it(Bt(f)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + it(f) + '" data-guide="' + (H ? M : P) + '" data-guide-word="' + it("Wants " + (H ? "" : "up to ") + (H ? M : P).toLocaleString() + (w === "%" ? "%" : w ? " " + w : "") + (H ? " or more" : "")) + '" role="img" aria-label="' + it(Bt(f)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Xl = (t) => t.querySelectorAll("[data-plant-graph]").forEach((a) => Gr(a.dataset.plantGraph, a, { guide: Number(a.dataset.guide), guideWord: a.dataset.guideWord }).then(() => Al(a)));
  function Vr(t, a, r, d = {}) {
    const u = a.map((ut) => ut[1]).concat(d.guide != null ? [d.guide] : []), b = d.zero ? 0 : Math.min(...u), f = Math.max(...u), w = Math.max(120, t.clientWidth || 260), M = Math.max(60, t.clientHeight || 130), P = 8, H = M - 20, F = Date.now() - 24 * 3600 * 1e3, $ = 24 * 3600 * 1e3, st = (ut) => Math.max(0, Math.min(w, (ut - F) / $ * w)), dt = (ut) => f === b ? (P + H) / 2 : H - (ut - b) / (f - b) * (H - P);
    let X = "M" + st(a[0][0]).toFixed(1) + " " + dt(a[0][1]).toFixed(1);
    if (a.length > 2) X = Op(a.map((ut) => [st(ut[0]), dt(ut[1])]));
    else for (let ut = 1; ut < a.length; ut++) X += d.smooth ? "L" + st(a[ut][0]).toFixed(1) + " " + dt(a[ut][1]).toFixed(1) : "H" + st(a[ut][0]).toFixed(1) + "V" + dt(a[ut][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + w + " " + M), t.setAttribute("aria-label", r), t.innerHTML = qp(w, P, H) + '<path d="' + X + "V" + H + "H" + st(a[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + X + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="' + aa.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + w + '" y="' + (M - 4) + '" text-anchor="end">Now</text>' + (d.guide != null ? '<line class="tfGuide" x1="0" x2="' + w + '" y1="' + dt(d.guide).toFixed(1) + '" y2="' + dt(d.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + w + '" y="' + (dt(d.guide) < 20 ? dt(d.guide) + 14 : dt(d.guide) - 5).toFixed(1) + '" text-anchor="end">' + it(d.guideWord || "") + "</text>" : "");
  }
  const hl = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Ls = (t, a) => {
    const r = t.split(".")[0];
    return hl[r] ? hl[r].includes(a) : r === "alarm_control_panel" || r === "climate" || r === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, Fd = (t) => {
    const a = t.split(".")[0], r = Yt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[r] || (ud.includes(r) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Jl = /* @__PURE__ */ new Map();
  let As = 0;
  async function Bn(t) {
    let a = Jl.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let u = [];
      try {
        const b = await D({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        u = ((b == null ? void 0 : b[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      u.length || (u = (Ua || []).filter((b) => b.entity_id === t).map((b) => [b.when * 1e3, String(b.state)])), a = { at: Date.now(), pts: u }, Jl.set(t, a);
    }
    const r = S[t], d = a.pts.slice().sort((u, b) => u[0] - b[0]);
    return r && (!d.length || d[d.length - 1][1] !== r.state) && d.push([Date.parse(r.last_changed) || Date.now(), r.state]), d;
  }
  async function ur(t, a, r) {
    const d = await Bn(t);
    if (!a.isConnected) return;
    const u = d.map(([o, s]) => [o, Number(s)]);
    if (d.length > 1 && u.every(([, o]) => Number.isFinite(o))) {
      Vr(a, u, Bt(t) + ", last 24 hours");
      return;
    }
    const b = Date.now(), f = b - 864e5, w = Math.max(200, a.clientWidth || 360), M = 62, P = (o) => Math.max(0, Math.min(w, (o - f) / 864e5 * w)), H = [];
    let F = null;
    d.forEach(([o, s]) => {
      const h = Ls(t, s);
      h && F == null ? F = Math.max(o, f) : !h && F != null && (H.push([F, Math.max(o, f)]), F = null);
    }), F != null && H.push([F, b]);
    const $ = ma(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", st = Fd(t), dt = "tfDayClip" + ++As, X = H.map(([o, s]) => st + (s >= b - 1e3 && o <= f + 1e3 ? " all day" : s >= b - 1e3 ? " since " + Pn(o) : o <= f + 1e3 ? " until " + Pn(s) : " " + Pn(o) + "–" + Pn(s)));
    let ut = "", U = -1 / 0;
    H.forEach(([o], s) => {
      const h = X[s].length * 5.4, v = Math.min(P(o), w - h);
      v < U + 8 || (ut += '<text x="' + v.toFixed(1) + '" y="10">' + it(X[s]) + "</text>", U = v + h);
    });
    let e = '<text x="' + w + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((o) => {
      let s = new Date(b).setHours(o, 0, 0, 0);
      s > b && (s -= 864e5), P(s) > 8 && P(s) < w - 34 && (e += '<text x="' + P(s).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(o).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + w + " " + M), a.setAttribute("aria-label", Bt(t) + ", last 24 hours: " + (X.length ? X.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + dt + '"><rect x="0" y="18" width="' + w + '" height="26" rx="8"/></clipPath>' + ut + '<rect x="0" y="18" width="' + w + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + dt + ')">' + H.map(([o, s]) => '<rect x="' + P(o).toFixed(1) + '" y="18" width="' + Math.max(2, P(s) - P(o)).toFixed(1) + '" height="26" fill="' + $ + '"/>').join("") + "</g>" + (r && r >= f ? '<line x1="' + P(r).toFixed(1) + '" x2="' + P(r).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + e;
  }
  function Ql(t) {
    var d;
    const a = Number((d = S[t]) == null ? void 0 : d.state), r = Date.now();
    if (Yt(t).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), b = Math.max(1, r - u);
      return [...Array(49)].map((f, w) => u + b * w / 48).map((f) => [f, Math.round(a * Math.pow((f - u) / b, 1.3) * 100) / 100]);
    }
    if (Uo(t) && t.endsWith("_moisture")) return [...Array(48)].map((u, b) => [r - (48 - b) * 30 * 60 * 1e3, Math.round((a + 22 * Math.pow(1 - b / 48, 1.2)) * 10) / 10]);
    if (Uo(t) && t.endsWith("_light")) {
      const u = (f) => {
        const w = new Date(f).getHours() + new Date(f).getMinutes() / 60;
        return Math.max(0, Math.sin((w - 6) / 14 * Math.PI));
      }, b = (f) => 0.8 + 0.2 * u(f);
      return [...Array(48)].map((f, w) => r - (48 - w) * 30 * 60 * 1e3).map((f) => [f, Math.round(a * b(f) / b(r))]);
    }
    return [...Array(48)].map((u, b) => [r - (48 - b) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(b / 6)) * 10) / 10]);
  }
  async function Gr(t, a, r = {}) {
    var dt, X;
    let d = nt.get(t);
    if (t.endsWith("_solar_power")) d = { at: Date.now(), points: Mc() };
    else if (Uo(t)) d = { at: Date.now(), points: Ql(t) };
    else if (!d || Date.now() - d.at > 5 * 60 * 1e3) {
      try {
        const ut = new Date(Date.now() - 864e5).toISOString(), U = await D({ type: "history/history_during_period", start_time: ut, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), e = ((U == null ? void 0 : U[t]) || []).map((o) => [o.lu != null ? o.lu * 1e3 : Date.parse(o.last_updated || o.last_changed), Number(o.s ?? o.state)]).filter(([o, s]) => Number.isFinite(o) && Number.isFinite(s));
        d = { at: Date.now(), points: e };
      } catch {
        d = { at: Date.now(), points: [] };
      }
      nt.set(t, d);
    }
    const u = a || _.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!u) return;
    const b = S[t], f = ((dt = b == null ? void 0 : b.attributes) == null ? void 0 : dt.unit_of_measurement) || "", w = d.points.slice(), M = Number(b == null ? void 0 : b.state);
    if (Number.isFinite(M) && !t.endsWith("_solar_power") && w.push([Date.now(), M]), w.length < 2) {
      u.setAttribute("aria-label", Bt(t) + ": no history for the last 24 hours"), u.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const P = w.map((ut) => ut[1]), H = Math.min(...P), F = Math.max(...P), $ = (ut) => ut.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ut) >= 100 ? 0 : 1 }), st = ((X = b == null ? void 0 : b.attributes) == null ? void 0 : X.state_class) === "total_increasing";
    Vr(u, w, Bt(t) + ", last 24 hours: " + (st ? "+" + $(P[P.length - 1] - P[0]) : H === F ? $(H) : $(H) + " to " + $(F)) + (f ? " " + f : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...r });
  }
  function ml() {
    const t = _ == null ? void 0 : _.querySelector("[data-solar]");
    if (!t) return;
    const a = Mc();
    Vr(t, a, "Solar, last 24 hours: up to " + Ta(Math.max(...a.map((r) => r[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function $a(t, a) {
    const r = a.entity_id, d = W.get(r) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Nn(r) > 0 ? 0 : 100 }[t], b = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    u != null && (d.pos = u), b != null && (d.tilt = b), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), W.set(r, d);
  }
  function To(t, a, r) {
    var u;
    const d = r == null ? void 0 : r.entity_id;
    return t !== "light" || typeof d != "string" || !Ga[d] || !Sn(d) || r.brightness_pct != null || r.brightness != null ? [a, r] : a !== "turn_on" && !(a === "toggle" && ((u = S[d]) == null ? void 0 : u.state) !== "on") ? [a, r] : ["turn_on", { ...r, brightness_pct: Ga[d] }];
  }
  function Go(t, a, r, d) {
    let u = { entity_id: r, ...d || {} };
    return [a, u] = To(t, a, u), t === "cover" && $a(a, u), na[r] = (na[r] || 0) + 1, Yo.set(fp, JSON.stringify(na)), me.call(t, a, u) ? Promise.resolve() : Promise.resolve(z(t, a, u));
  }
  function hn(t) {
    const [a, r, d, u] = t.split("|");
    Go(a, r, d, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function jn(t, a) {
    T.set("pos|" + t, a), je.delete(t), ko = ko.map(() => ""), [_, Ut].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((u) => js(u, a)));
    const r = _.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (r && (r.textContent = Math.round(a) + "%"), (ct == null ? void 0 : ct.id) === t) {
      const d = Ut.querySelector(".tfMoreState"), u = Ut.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(a) + "%", d.classList.add("live")), u && (u.textContent = "Currently " + Nn(t) + "%");
    }
    cr(t).forEach((d) => d.update(qr(t)));
  }
  const gl = (t, a) => {
    const r = t.shiftKey ? 10 : 1, d = { ArrowUp: a + r, ArrowRight: a + r, ArrowDown: a - r, ArrowLeft: a - r, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function fr(t, a) {
    var X;
    const r = t.dataset.blocks;
    (X = t.setPointerCapture) == null || X.call(t, a.pointerId);
    const d = (ut) => {
      const U = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ut.clientX - U.left) / U.width * 100));
    }, u = d(a), b = a.clientX;
    let f = !1, w = Se(r), M = u, P = 0;
    const H = () => {
      w = Math.abs(M - w) < 0.2 ? M : w + (M - w) * 0.14, jn(r, w), P = requestAnimationFrame(H);
    }, F = () => {
      f || (f = !0, t.classList.add("fine"), P = requestAnimationFrame(H));
    }, $ = setTimeout(F, 350), st = (ut) => {
      M = d(ut), Math.abs(ut.clientX - b) > 6 && (clearTimeout($), F());
    }, dt = () => {
      clearTimeout($), cancelAnimationFrame(P), t.removeEventListener("pointermove", st), t.removeEventListener("pointerup", dt), t.removeEventListener("pointercancel", dt), t.classList.remove("fine"), jn(r, f ? Math.round(w) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), hr("pos", r);
    };
    t.addEventListener("pointermove", st), t.addEventListener("pointerup", dt), t.addEventListener("pointercancel", dt);
  }
  function vl(t) {
    var w, M;
    const [a, r] = t.dataset.open.split("|"), d = t.closest(".tfCard"), u = t.getBoundingClientRect(), b = (w = t.querySelector(".tfIcon")) == null ? void 0 : w.getBoundingClientRect();
    Z = { key: a, id: r, h: d ? Math.round(d.getBoundingClientRect().height) : 0, from: u, chip: b }, je.delete(a), wa();
    const f = _.querySelector(".tfOpen");
    f && (Z.rel = u.top - f.getBoundingClientRect().top), Lf(f, u, b), (M = _.querySelector(".tfOpen [data-close]")) == null || M.focus({ preventScroll: !0 });
  }
  function Es(t) {
    var a;
    St = t.dataset.area, _.querySelectorAll(".tfAreaPanel").forEach((r) => {
      var u;
      const d = r === t;
      r.classList.toggle("active", d), r.setAttribute("aria-expanded", String(d)), (u = r.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !d);
    }), je.set("areas", Y(((a = _.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const _s = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [r, d] = Di(t);
      return Math.round(r + a * (d - r));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var r;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((r = Yt(t).hs_color) == null ? void 0 : r[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function bi(t, a, r, d) {
    var M;
    const u = _s[a].value(r, d);
    T.set(a + "|" + r, u);
    const b = Math.round(d * 100) + "%", f = t.querySelector("i");
    if (a === "tilt") {
      f.style.width = "calc((100% - 8px) * " + d + ")";
      const [P, H] = t.querySelectorAll("span");
      P.classList.toggle("lit", d > 0.08), H.classList.toggle("lit", d > 0.92), je.delete(r), ko = ko.map(() => ""), cr(r).forEach((F) => F.update(qr(r)));
    } else if (f) f.style.width = b;
    else {
      let P = t.querySelector("b");
      P || (P = document.createElement("b"), t.appendChild(P)), P.style.left = b;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const w = (M = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    w && (w.textContent = _s[a].text(r, u));
  }
  function hr(t, a) {
    const r = T.get(t + "|" + a), [d, u, b] = _s[t].send(a, r), f = () => setTimeout(() => {
      T.delete(t + "|" + a), wa();
    }, 1500);
    Go(d, u, a, b).then(f, f);
  }
  function Ds(t) {
    t.addEventListener("click", (a) => {
      var d;
      const r = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (ia && !a.target.closest(".tfBoardMenu,[data-board-more]") && An(), !(!r || !t.contains(r) || r.disabled))
        if (r.dataset.boardMore)
          (ia == null ? void 0 : ia.key) === r.dataset.boardMore ? An(!0) : Nr(r.dataset.boardMore, r);
        else if (r.dataset.boardAct) Il(ia.key, r.dataset.boardAct);
        else if (r.dataset.boardShow) $s(r.dataset.boardShow);
        else if (r.dataset.favHide) jo(r.dataset.favHide, !1);
        else if (r.dataset.energyPick) Gs(r.dataset.energyPick);
        else if (r.dataset.act) hn(r.dataset.act);
        else if (r.hasAttribute("data-details")) za(!(ct != null && ct.details));
        else if (r.hasAttribute("data-details-close")) za(!1);
        else if (r.dataset.summary) Xn(r.dataset.summary, r);
        else if (r.dataset.star) ni(r.dataset.star);
        else if (r.hasAttribute("data-more-back")) {
          const u = ct.id;
          ct = ct.back, ul(), (d = Ut.querySelector('.tfMore [data-more="' + CSS.escape(u) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (r.hasAttribute("data-favs-edit")) Ts("favourites", r);
        else if (r.dataset.acts) JSON.parse(r.dataset.acts).forEach(([u, b, f, w]) => Go(u, b, f, w).catch(() => {
        }));
        else if (r.dataset.more) Ts(r.dataset.more, r);
        else if (r.hasAttribute("data-more-close")) Ye();
        else if (r.dataset.morePage) zr(Number(r.dataset.morePage));
        else if (r.dataset.path) qa(r.dataset.path);
        else if (r.dataset.go) Or("room:" + r.dataset.go);
        else if (r.hasAttribute("data-area-back")) ys();
        else if (r.dataset.open) vl(r);
        else if (r.hasAttribute("data-close")) {
          const u = Z, b = r.closest(".tfOpen"), f = b == null ? void 0 : b.getBoundingClientRect().top, w = u.from && f != null ? new DOMRect(u.from.left, f + (u.rel || 0), u.from.width, u.from.height) : u.from;
          Af(b, w, () => {
            var M;
            Z === u && (Z = null, je.delete(u.key), wa(), (M = _.querySelector('[data-open="' + CSS.escape(u.key + "|" + u.id) + '"]')) == null || M.focus({ preventScroll: !0 }));
          });
        } else r.classList.contains("tfAreaPanel") && !r.classList.contains("active") && Es(r);
    }), t.addEventListener("keydown", (a) => {
      var d, u, b, f, w, M, P;
      const r = a.target;
      if ((d = r.dataset) != null && d.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), vl(r)), (u = r.dataset) != null && u.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Gs(r.dataset.energyPick)), (b = r.classList) != null && b.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Es(r)), (f = r.dataset) != null && f.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Xn(r.dataset.summary, r)), a.key === "Escape" && ia && t === _) {
        a.preventDefault(), An(!0);
        return;
      }
      if (a.key === "Escape" && ja && t === _) {
        a.preventDefault(), Ya(!1), (w = c("dashEditNav")) == null || w.focus();
        return;
      }
      if (a.key === "Escape" && et && t === _ && (a.preventDefault(), ys()), (M = r.dataset) != null && M.blocks) {
        const H = r.dataset.blocks, F = gl(a, Math.round(Se(H)));
        if (F == null) return;
        a.preventDefault(), jn(H, F), clearTimeout(xt.get(H)), xt.set(H, setTimeout(() => hr("pos", H), 500));
        return;
      }
      if ((P = r.dataset) != null && P.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [H, F] = r.dataset.drag.split("|"), $ = Number(r.getAttribute("aria-valuenow")) / 100, st = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, $ + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        bi(r, H, F, st), hr(H, F);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var h;
      const r = a.target.closest("[data-blocks]");
      if (r && a.button === 0) {
        a.preventDefault(), fr(r, a);
        return;
      }
      const d = a.target.closest("[data-drag]");
      if (!d || a.button > 0) return;
      const [u, b] = d.dataset.drag.split("|"), f = u === "bright" && !Sn(b), w = a.pointerType !== "mouse";
      if (f && !w) {
        hn(ge("light", "toggle", b));
        return;
      }
      const M = u === "bright" && ((h = S[b]) == null ? void 0 : h.state) !== "on", P = u === "tilt" ? 4 : 0, H = () => d.getBoundingClientRect().width - P * 2, F = (v) => {
        const A = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (v.clientX - A.left - P) / H()));
      };
      let $ = w ? "waiting" : M ? "pressed" : "dragging", st = 0;
      const dt = a.clientX, X = a.clientY, ut = (v, A) => Math.hypot(v.clientX - dt, v.clientY - X) > A, U = () => {
        try {
          d.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      w || (a.preventDefault(), U()), $ === "dragging" && bi(d, u, b, F(a));
      const e = () => {
        var v, A;
        $ = "sliding", B = d, d.classList.add("held"), U(), (v = navigator.userActivation) != null && v.hasBeenActive && ((A = navigator.vibrate) == null || A.call(navigator, 8)), st = M ? (Ga[b] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100;
      }, o = (v) => {
        $ === "waiting" && ut(v, R) ? !f && Math.abs(v.clientX - dt) > Math.abs(v.clientY - X) ? e() : $ = "gone" : $ === "pressed" && ut(v, 4) && ($ = "dragging"), $ === "sliding" ? bi(d, u, b, Math.max(0, Math.min(1, st + (v.clientX - dt) / H()))) : $ === "dragging" && bi(d, u, b, F(v));
      }, s = (v) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((A, L) => d.removeEventListener(A, L ? s : o)), d.classList.remove("held"), B === d && (B = null), $ === "sliding" || $ === "dragging" ? hr(u, b) : v.type === "pointerup" && f ? hn(ge("light", "toggle", b)) : v.type === "pointerup" && M && ($ === "waiting" || $ === "pressed") && Go("light", "turn_on", b).catch(() => {
        });
      };
      d.addEventListener("pointermove", o), d.addEventListener("pointerup", s), d.addEventListener("pointercancel", s);
    }), t.addEventListener("touchmove", (a) => {
      B && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return _ && k && (ve(), Ds(_), Ds(Ut), Ut.addEventListener("click", (t) => {
    t.target === Ut && Ye();
  }), (bl = n.getElementById("homeNav")) == null || bl.addEventListener("click", () => {
    et && ys();
  }), (wl = n.querySelector(".bottomNav")) == null || wl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + bp + "</button>"), (Bs = c("dashEditNav")) == null || Bs.addEventListener("click", () => Ya(!ja)), _.addEventListener("pointerdown", un), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Fo() !== Ys ? wa() : dn();
  }).observe(_), window.addEventListener("resize", dn, { passive: !0 }), Ut.addEventListener("keydown", (t) => {
    var a, r;
    t.key === "Escape" ? (t.stopPropagation(), ct != null && ct.details ? za(!1) : Ye()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((r = (a = t.target).closest) != null && r.call(a, ".tfMoreDots")) && (t.preventDefault(), zr(((ct == null ? void 0 : ct.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), tt(), {
    update(t) {
      if (!k) return;
      const a = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([d]) => Uo(d))), ...t || {} };
      for (const d in S) d.startsWith("light.") && S[d].state === "on" && Sn(d) && Kn(d, Vn(S[d]));
      a ? Oe() : wa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Ai = !0, Xt == null || Xt.destroy(), Xt = null, ha == null || ha.forEach((t) => t.destroy()), ha = null;
    },
    resume() {
      Ai = !1, !(!k || !(_ != null && _.querySelector("[data-tf]"))) && (te.isConnected && Mr(te.style.order), Sr());
    }
  };
}
const mm = "0.78.0", oc = "move_assistant", gm = "move_assistant", yp = "move_assistant_checkin_reminder";
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
        var k, E;
        return (E = (k = this._hass) == null ? void 0 : k.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(x, m) : Promise.reject(new Error("no connection"));
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
