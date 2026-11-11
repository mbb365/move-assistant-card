const cu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', pu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(360px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, uu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, fu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', hu = `<main id="app"><div class="shell">
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
`, en = {
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
}, Qa = (i) => i < 0 ? 0 : i > 1 ? 1 : i, wc = (i, c, s) => i + (c - i) * s, ic = (i) => {
  const c = String(i || "#000000").trim().replace("#", ""), s = c.length === 3 ? c.split("").map((u) => u + u).join("") : c;
  return [0, 2, 4].map((u) => parseInt(s.slice(u, u + 2), 16) || 0);
}, mu = (i) => "#" + i.map((c) => Math.round(Math.max(0, Math.min(255, c))).toString(16).padStart(2, "0")).join(""), xc = {}, We = (i, c, s) => {
  const u = i + c + s;
  return xc[u] || (xc[u] = mu(ic(i).map((g, b) => g + (ic(c)[b] - g) * s)));
}, yc = {}, fd = (i) => yc[i] || (yc[i] = ic(i)), Od = (i, c, s, u) => (g) => {
  if (g <= 0) return 0;
  if (g >= 1) return 1;
  let b = 0, y = 1, E = g;
  for (let M = 0; M < 18; M++)
    E = (b + y) / 2, 3 * (1 - E) * (1 - E) * E * i + 3 * (1 - E) * E * E * s + E * E * E < g ? b = E : y = E;
  return 3 * (1 - E) * (1 - E) * E * c + 3 * (1 - E) * E * E * u + E * E * E;
}, gu = { std: Od(0.2, 0, 0, 1), acc: Od(0.3, 0, 1, 1), dec: Od(0, 0, 0, 1) };
function kd(i, c) {
  const s = String(i || "");
  return (s === "sunny" || s === "clear-night" ? "clear" : s === "partlycloudy" ? "partly" : s === "fog" ? "fog" : s === "lightning" || s === "lightning-rainy" ? "storm" : s === "snowy" || s === "snowy-rainy" ? "snow" : s === "rainy" || s === "pouring" || s === "hail" ? "rain" : "cloudy") + "/" + (s === "clear-night" || c ? "night" : "day");
}
function kp(i) {
  const c = { clear: [i.skyClearDay, i.skyClearNight], cloudy: [i.skyCloudyDay, i.skyCloudyNight], rain: [i.skyRainDay, i.skyRainNight], snow: [i.skySnowDay, i.skySnowNight], fog: [i.skyFogDay, i.skyFogNight] };
  return c.partly = [We(c.clear[0], c.cloudy[0], 0.12), We(c.clear[1], c.cloudy[1], 0.12)], c.storm = [We(c.rain[0], "#000000", 0.22), We(c.rain[1], "#000000", 0.22)], c;
}
const rc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], sc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], lc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function dc(i, c = en) {
  const s = { ...en, ...c }, u = kp(s), g = String(i).split("/"), b = u[g[0]] ? g[0] : "clear", y = g[1] === "night", E = u[b][y ? 1 : 0], M = {
    night: y,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: y ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: y ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: y ? 1 : 0 },
    stars: rc.map(() => ({ o: 0 })),
    rain: sc.map(() => ({ o: 0, dy: -16 })),
    snow: lc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, P = (W) => rc.map(() => ({ o: W }));
  return b === "clear" ? y ? (M.moon.o = 1, M.stars = P(1)) : M.sun.o = 1 : b === "partly" ? (M.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: y ? 1 : 0 }, y ? (M.moon = { x: 34, y: 33, d: 48, o: 1 }, M.stars = P(0.7)) : M.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (M.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: y ? 1 : 0 }, y ? M.moon = { x: 40, y: 36, d: 40, o: 0 } : M.sun = { x: 40, y: 36, r: 20, o: 0 }) : (M.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, y ? M.moon = { x: 38, y: 28, d: 36, o: 0 } : M.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? M.snow = lc.map(() => ({ o: 1, dy: 0 })) : M.rain = sc.map((W, H) => ({ o: b === "storm" && H === 1 ? 0 : 1, dy: 0 })), b === "storm" && (M.bolt = { o: 1, dy: 0 })), M;
}
const kc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function vu(i, c, s, u = en, g = !1) {
  const b = { ...en, ...u }, y = (O, V) => O > 0.01 && V > 0.01 ? "stay" : O > 0.01 ? "leave" : V > 0.01 ? "enter" : "none", E = (O, V, at, J) => {
    const Y = O[0] + V * J, q = O[1] - (at - 1 - V) * J;
    return gu[O[2]](Qa((s - Y) / Math.max(1e-3, q - Y)));
  }, M = (O, V, at, J = 0, Y = 1, q = 0) => {
    const ot = y(O.o, V.o);
    if (ot === "none") return { ...V, o: 0 };
    const it = E(kc[at][ot], J, Y, q), lt = {};
    for (const tt in V) lt[tt] = g && ot !== "stay" && tt !== "o" ? ot === "leave" ? O[tt] : V[tt] : wc(O[tt], V[tt], it);
    return lt;
  }, P = E(kc.sky, 0, 1, 0);
  let W, H;
  if (i.night !== c.night) {
    const O = Math.min(i.clearness, c.clearness), V = We(We(i.sky, c.sky, 0.5), b.dusk, 0.6 * O);
    W = P < 0.5 ? We(i.sky, V, P * 2) : We(V, c.sky, P * 2 - 1), H = O > 0.5 ? [i.sky, b.dusk, c.sky] : [i.sky, c.sky];
  } else
    W = We(i.sky, c.sky, P), H = [i.sky, c.sky];
  return {
    night: s < 0.5 ? i.night : c.night,
    clearness: wc(i.clearness, c.clearness, s),
    sky: W,
    skyStops: H,
    skyT: P,
    sun: M(i.sun, c.sun, "body"),
    moon: M(i.moon, c.moon, "body"),
    cloud: M(i.cloud, c.cloud, "cloud"),
    stars: c.stars.map((O, V) => M(i.stars[V], O, "fx", V, c.stars.length, 0.05)),
    rain: c.rain.map((O, V) => M(i.rain[V], O, "fx", V, c.rain.length, 0.05)),
    snow: c.snow.map((O, V) => M(i.snow[V], O, "fx", V, c.snow.length, 0.05)),
    bolt: M(i.bolt, c.bolt, "fx")
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
], Ja = (i, c) => (bu[(c & 7) * 8 + (i & 7)] + 0.5) / 64, wu = 0, uc = 1, fc = 2, hc = 3, mc = 4, Xa = 5, Is = 6, pr = 7, gc = 8, vd = (i, c) => c <= 0.6665 && ((i - 0.5) * (i - 0.5) + (c - 0.2877) * (c - 0.2877) <= 0.0824 || (i - 0.25) * (i - 0.25) + (c - 0.416) * (c - 0.416) <= 0.0625 || (i - 0.791) * (i - 0.791) + (c - 0.458) * (c - 0.458) <= 0.0437 || i >= 0.25 && i <= 0.791 && c >= 0.416), xu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], yu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((i) => [i[0] * 13 / 11, i[1] * 28 / 24]), Mp = (i, c, s) => {
  let u = !1;
  for (let g = 0, b = i.length - 1; g < i.length; b = g++) {
    const y = i[g], E = i[b];
    y[1] > s != E[1] > s && c < (E[0] - y[0]) * (s - y[1]) / (E[1] - y[1]) + y[0] && (u = !u);
  }
  return u;
};
function Sp(i, { size: c = 90, px: s = 2, oneBit: u = !1, colors: g = en, ink: b = "#26221e", paper: y = "#fbf9f6", clock: E = 0, idle: M = !1 } = {}) {
  const P = { ...en, ...g }, W = Math.sin, H = Math.PI * 2, O = Math.max(6, Math.round(c / s)), V = O / 90, at = M ? Math.floor(E / 100) * 100 : 0, J = M ? W(H * at / 3600) : 0, Y = M ? 1.8 * W(H * at / 6400) : 0, q = M ? 0.9 * W(H * at / 4100) : 0, ot = M ? 0.8 * W(H * at / 5200) : 0, it = at / 3400 % 1, lt = M && i.bolt.o > 0.5 && (it < 0.04 || it > 0.08 && it < 0.11), tt = new Array(O * O), K = new Uint8Array(O * O), B = (A, N, k, z, pt) => {
    k == null || A < 0 || N < 0 || A >= O || N >= O || (z >= 1 || z > Ja(A + 5, N + 3)) && (tt[N * O + A] = k, K[N * O + A] = pt);
  }, $ = (A, N, k, z) => {
    for (let pt = Math.max(0, Math.floor(N - k) - 1); pt <= Math.min(O - 1, N + k + 1); pt++) for (let st = Math.max(0, Math.floor(A - k) - 1); st <= Math.min(O - 1, A + k + 1); st++) z(st, pt, st + 0.5 - A, pt + 0.5 - N);
  }, gt = i.skyStops || [i.sky], et = i.skyT || 0;
  for (let A = 0; A < O; A++) {
    const N = i.night ? Qa(1 - (A + 0.5) / (O * 0.7)) * 0.85 : Qa(((A + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let k = 0; k < O; k++) {
      let z = gt[0];
      if (gt.length > 1) {
        const pt = et * (gt.length - 1), st = Math.min(gt.length - 2, Math.floor(pt));
        z = pt - st > Ja(k, A) ? gt[st + 1] : gt[st];
      }
      N > Ja(k + 2, A + 5) && (z = i.night ? We(z, "#000000", 0.28) : We(z, "#ffffff", 0.2)), tt[A * O + k] = lt ? We(z, "#ffffff", 0.25) : z;
    }
  }
  if (i.sun.o > 0.01) {
    const A = i.sun.x * V, N = i.sun.y * V, k = Math.max(1, i.sun.r * V);
    if (M) {
      const z = k * (1.45 + 0.06 * J), pt = We(P.sun, "#ffffff", 0.55);
      if ($(A, N, z, (st, ct, ut, mt) => {
        const Ft = Math.sqrt(ut * ut + mt * mt);
        Ft > k && Ft < z && B(st, ct, pt, 0.26 * (1 - (Ft - k) / (z - k)) * i.sun.o, wu);
      }), i.sun.o > 0.5) {
        const st = Math.floor(at / 500) % 2, ct = Math.max(1, k * 0.22);
        for (let ut = 0; ut < 8; ut++) if (ut % 2 === st) for (let mt = k + 1.5; mt < k + 1.5 + ct; mt += 0.7) B(Math.floor(A + Math.cos(ut * Math.PI / 4) * mt), Math.floor(N + Math.sin(ut * Math.PI / 4) * mt), P.sun, i.sun.o, gc);
      }
    }
    $(A, N, k, (z, pt, st, ct) => {
      if (st * st + ct * ct > k * k) return;
      const ut = ((st * 0.643 + ct * 0.766) / k + 1) / 2;
      B(z, pt, Qa((ut - 0.62) / 0.38) > Ja(z, pt) ? P.sunEdge : P.sun, i.sun.o, uc);
    });
  }
  if (rc.forEach((A, N) => {
    const k = i.stars[N].o;
    if (k < 0.01) return;
    const z = Math.floor(A[0] * V), pt = Math.floor(A[1] * V), st = M ? (Math.floor(at / 300) + N * 3) % 6 : 0;
    if (st === 5) return;
    const ct = Math.round(A[2] * V * (st === 4 ? 0.3 : st < 2 ? 1 : 0.6));
    B(z, pt, P.star, k, pr);
    for (let ut = 1; ut <= ct; ut++) {
      const mt = ut === ct && ct > 1 ? We(P.star, i.sky, 0.5) : P.star;
      B(z - ut, pt, mt, k, pr), B(z + ut, pt, mt, k, pr), B(z, pt - ut, mt, k, pr), B(z, pt + ut, mt, k, pr);
    }
  }), i.moon.o > 0.01) {
    const A = Math.max(1.5, i.moon.d * V * 0.37), N = i.moon.x * V, k = i.moon.y * V + (M && ot > 0.4 ? -1 : 0), z = N + 0.547 * A, pt = k - 0.503 * A, st = 0.82 * A, ct = We(P.moon, "#ffffff", 0.6);
    $(N, k, A, (ut, mt, Ft, Jt) => {
      if (Ft * Ft + Jt * Jt > A * A) return;
      const Ht = ut + 0.5 - z, Je = mt + 0.5 - pt;
      Ht * Ht + Je * Je <= st * st || B(ut, mt, Qa((Jt + A) / (2 * A) * 1.1 - 0.1) > Ja(ut, mt) ? P.moon : ct, i.moon.o, fc);
    });
  }
  const Lt = Math.max(2, Math.round(15.65 * V)), Q = Math.max(1, Math.round(5.87 * V * 0.5));
  sc.forEach((A, N) => {
    const k = i.rain[N];
    let z = k.dy, pt = k.o;
    if (pt < 0.01) return;
    if (M) {
      const ut = (at / 950 + N / 3) % 1;
      z += -5 + ut * 14, pt *= ut < 0.18 ? ut / 0.18 : ut > 0.72 ? (1 - ut) / 0.28 : 1;
    }
    const st = (A[0] + 3 + Y) * V, ct = (A[1] + z) * V;
    for (let ut = 0; ut < Lt; ut++) for (let mt = 0; mt < Q; mt++) B(Math.floor(st - 0.208 * ut) + mt, Math.floor(ct) + ut, P.rain, pt, mc);
  });
  const Mt = Math.max(0, Math.round(7.34 * V / 2.6));
  if (lc.forEach((A, N) => {
    const k = i.snow[N];
    let z = k.dy, pt = 0, st = k.o;
    if (st < 0.01) return;
    if (M) {
      const mt = (at / 3200 + N / 5) % 1;
      z += -6 + mt * 14, pt = 1.5 * W(H * (mt * 1.5 + N / 5)), st *= mt < 0.2 ? mt / 0.2 : mt > 0.75 ? (1 - mt) / 0.25 : 1;
    }
    const ct = Math.floor((A[0] + 3.67 + pt + Y) * V), ut = Math.floor((A[1] + 3.67 + z) * V);
    B(ct, ut, P.snow, st, Xa);
    for (let mt = 1; mt <= Mt; mt++)
      B(ct - mt, ut, P.snow, st, Xa), B(ct + mt, ut, P.snow, st, Xa), B(ct, ut - mt, P.snow, st, Xa), B(ct, ut + mt, P.snow, st, Xa), Mt > 1 && mt < Mt && (B(ct - mt, ut - mt, P.snow, st, Xa), B(ct + mt, ut - mt, P.snow, st, Xa), B(ct - mt, ut + mt, P.snow, st, Xa), B(ct + mt, ut + mt, P.snow, st, Xa));
  }), i.bolt.o > 0.01)
    if (O >= 30) {
      const A = 39 + Y, N = 50 + i.bolt.dy;
      for (let k = Math.floor(N * V); k <= (N + 28) * V; k++) for (let z = Math.floor(A * V); z <= (A + 13) * V; z++)
        Mp(yu, (z + 0.5) / V - A, (k + 0.5) / V - N) && B(z, k, P.sun, i.bolt.o, Is);
    } else {
      const A = O / 18, N = 7, k = 10 + Math.round(i.bolt.dy * 0.2);
      xu.forEach((z, pt) => z.split("").forEach((st, ct) => {
        if (st !== "#") return;
        const ut = Math.floor((N + ct) * A), mt = Math.floor((k + pt) * A);
        for (let Ft = mt; Ft < Math.max(mt + 1, Math.floor((k + pt + 1) * A)); Ft++) for (let Jt = ut; Jt < Math.max(ut + 1, Math.floor((N + ct + 1) * A)); Jt++) B(Jt, Ft, P.sun, i.bolt.o, Is);
      }));
    }
  if (i.cloud.o > 0.01) {
    const A = Math.max(3, i.cloud.w * V), N = A * 0.6665, k = (i.cloud.x + Y) * V - A / 2, z = (i.cloud.y + q) * V - N / 2, pt = We(P.cloudDay, P.cloudNight, Math.round(i.cloud.f * 4) / 4), st = We(pt, "#000000", 0.16);
    for (let ct = Math.max(0, Math.floor(z) - 1); ct <= Math.min(O - 1, z + N + 1); ct++) for (let ut = Math.max(0, Math.floor(k) - 1); ut <= Math.min(O - 1, k + A + 1); ut++) {
      const mt = (ut + 0.5 - k) / A, Ft = (ct + 0.5 - z) / A;
      vd(mt, Ft) && B(ut, ct, !vd(mt, Ft + 1 / A) || Qa((Ft - 0.42) / 0.25) * 0.8 > Ja(ut, ct) ? st : pt, i.cloud.o, hc);
    }
  }
  return Cp(tt, K, O, O, { oneBit: u, ink: b, paper: y, snowInk: !i.night });
}
function Cp(i, c, s, u, { oneBit: g, ink: b, paper: y, snowInk: E }) {
  const M = new Uint8ClampedArray(s * u * 4), P = fd(b), W = fd(y);
  for (let H = 0; H < u; H++) for (let O = 0; O < s; O++) {
    const V = H * s + O, at = c[V];
    if (i[V] == null) continue;
    let J = fd(i[V]);
    if (g) {
      let Y;
      at === mc || at === gc ? Y = !0 : at === Xa ? Y = E : at === pr || at === Is ? Y = !1 : Y = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= Ja(O, H), (at === uc || at === fc || at === hc || at === Is) && (O > 0 && c[V - 1] !== at || O < s - 1 && c[V + 1] !== at || H > 0 && c[V - s] !== at || H < u - 1 && c[V + s] !== at) && (Y = !0), J = Y ? P : W;
    }
    M[V * 4] = J[0], M[V * 4 + 1] = J[1], M[V * 4 + 2] = J[2], M[V * 4 + 3] = 255;
  }
  return { w: s, h: u, data: M };
}
const ku = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Mu = (i) => kd(i, !1).split("/")[0], qd = (i) => () => {
  i |= 0, i = i + 1831565813 | 0;
  let c = Math.imul(i ^ i >>> 15, 1 | i);
  return c = c + Math.imul(c ^ c >>> 7, 61 | c) ^ c, ((c ^ c >>> 14) >>> 0) / 4294967296;
}, Su = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Cu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Tu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Lu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Eu = [".##", "##.", ".#.", "#.."];
function Tp(i, { width: c, height: s, colors: u, wave: g = 0.38, soft: b = 6, glow: y = 0.6 }) {
  const E = { ...en, dawn: "#e5a77e", ...u }, M = kp(E), P = c, W = s, H = P / 6, O = H / 2, V = Math.PI * 2, at = i.length ? i : [{ cond: "cloudy", night: !1 }], J = [...Array(12)].map((it, lt) => {
    const tt = at[Math.min(lt, at.length - 1)], K = Mu(tt.cond), B = lt % 2 === 1;
    return { cond: tt.cond, k: K, night: B, sky: M[K][B ? 1 : 0], cover: ku[K] };
  }), Y = (it) => W * (0.5 - g * Math.cos(V * (it / H - 0.25)));
  return { C: E, S: J, W: P, H: W, cw: H, sw: O, TAU: V, yb: Y, side: (it, lt, tt) => {
    const K = (it ? Y(lt) - tt : tt - Y(lt)) / Math.max(3, b * 1.4) + 0.5;
    return K <= 0 ? 0 : K >= 1 ? 1 : K;
  }, glowAt: (it) => {
    const lt = ((it / H - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(5, Math.round(it / H - 0.25))), K = Math.max(0, Math.min(5, Math.round(it / H - 0.75))), B = 1 - (J[2 * tt].cover + J[2 * K + 1].cover) / 2, $ = Math.sin(Math.PI * Math.min(1, Math.max(0, Y(it) / W)));
    return { c: lt < 0.5 ? E.dusk : E.dawn, a: y * (0.2 + 0.8 * B) * $ * $ };
  }, soft: b, tw: H * 0.3, sy: W / 90 };
}
function Lp(i, { clock: c = 0, ambient: s = !1, seed: u = 1 }) {
  const { S: g, sw: b, side: y, C: E, TAU: M, sy: P } = i, W = c, H = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return g.forEach((O, V) => {
    const at = qd(u * 977 + V * 131 + 7), J = (V + 0.5) * b, Y = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let q = 0; q < Y; q++) {
      const ot = J + (at() - 0.5) * b * 1.6, it = (6 + at() * 76) * P, lt = at() < 0.35, tt = 1.8 + at() * 1.6, K = y(!0, ot, it) * (lt ? 0.95 : 0.7) * (s ? 0.6 + 0.4 * Math.sin(M * W / 2600 + q * 1.7 + V) : 1);
      K >= 0.03 && H.stars.push({ x: ot, y: it, big: lt, size: tt, o: K });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const q = J + (at() - 0.5) * b * 0.3, ot = Math.min(15, b * 0.29);
      H.suns.push({ x: q, y: 32 * P, rad: ot, halo: ot * 2.8 * (s ? 1 + 0.07 * Math.sin(M * W / 3600 + V) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const q = Math.min(0.78, b * 0.55 / 34), ot = J - 23 * q + (at() - 0.5) * b * 0.2;
      H.moons.push({ x: ot + 23 * q, y: (4 + (s ? 0.8 * Math.sin(M * W / 5200 + V) : 0)) * P + 23 * q, d: 46 * q });
    }
  }), g.forEach((O, V) => {
    const at = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!at) return;
    const J = qd(u * 577 + V * 71 + 3), Y = (V + 0.5) * b, q = O.k === "rain" || O.k === "storm" || O.night ? E.cloudNight : E.cloudDay, ot = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let it = 0; it < at; it++) {
      const lt = b / 46 * (O.k === "partly" ? 0.85 : 0.75 + J() * 0.55), tt = Y + (O.k === "partly" ? b * 0.12 : (J() - 0.5) * b * 1.05), K = (O.k === "partly" ? 40 : 6 + J() * 26) * P, B = s ? 2.5 * Math.sin(M * W / 9e3 + V * 1.3 + it * 2.1) : 0, $ = s ? 0.9 * Math.sin(M * W / 6100 + V + it) : 0;
      H.clouds.push({ x: tt - 23 * lt + B, y: K - 15.33 * lt + $, w: 46 * lt, h: 30.66 * lt, fill: q, o: ot * (at > 1 && it === 0 ? 0.85 : 1) });
    }
  }), g.forEach((O, V) => {
    const at = qd(u * 313 + V * 29 + 11), J = (V + 0.5) * b, Y = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let ot = 0; ot < Y; ot++) {
      let it = J + (at() - 0.5) * b * 1.05, lt = 44 + at() * 36, tt = 1;
      if (s) {
        const B = ((lt - 44 + W * 0.04) % 36 + 36) % 36;
        it -= 0.21 * (B - (lt - 44)), lt = 44 + B, tt = Math.min(1, B / 6, (36 - B) / 6);
      }
      lt *= P;
      const K = y(O.night, it, lt) * tt;
      K >= 0.05 && H.drops.push({ x: it, y: lt, o: K });
    }
    const q = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let ot = 0; ot < q; ot++) {
      let it = J + (at() - 0.5) * b * 1.05, lt = 40 + at() * 44, tt = 1;
      if (s) {
        const B = ((lt - 40 + W * 9e-3) % 44 + 44) % 44;
        lt = 40 + B, it += 1.6 * Math.sin(M * W / 2800 + ot * 1.9 + V), tt = Math.min(1, B / 6, (44 - B) / 6);
      }
      lt *= P;
      const K = y(O.night, it, lt) * tt;
      K >= 0.05 && H.flakes.push({ x: it, y: lt, o: K });
    }
    if (O.k === "fog") {
      const ot = O.night ? "#c8ccd6" : "#ffffff", it = O.night ? 0.28 : 0.62, lt = s ? 4 * Math.sin(M * W / 8e3 + V) : 0;
      for (let tt = 0; tt < 4; tt++) H.fogs.push({ x: J - b * 0.75 + tt % 2 * b * 0.18 + (tt % 2 ? lt : -lt), y: (30 + tt * 13) * P, w: b * 1.3, c: ot, a: it });
    }
    if (O.k === "storm") {
      const ot = (W / 3400 + V * 0.37) % 1;
      H.bolts.push({ x: J + (at() - 0.5) * b * 0.3 - 5, y: 36 * P, o: s && !(ot < 0.05 || ot > 0.09 && ot < 0.12) ? 0.8 : 1 });
    }
  }), H;
}
function _u(i, c, s, u, g, b, y, E) {
  const { S: M, C: P, cw: W, yb: H, glowAt: O, soft: V, tw: at, sy: J } = i, Y = new Array(s * u), q = new Uint8Array(s * u), ot = new Uint8Array(s * u), it = (A, N, k, z, pt) => {
    k == null || A < 0 || N < 0 || A >= s || N >= u || (z >= 1 || z > Ja(A + 5, N + 3)) && (Y[N * s + A] = k, q[N * s + A] = pt);
  }, lt = (A, N, k, z) => {
    for (let pt = Math.max(0, Math.floor(N - k) - 1); pt <= Math.min(u - 1, N + k + 1); pt++) for (let st = Math.max(0, Math.floor(A - k) - 1); st <= Math.min(s - 1, A + k + 1); st++) z(st, pt, st + 0.5 - A, pt + 0.5 - N);
  }, tt = (A, N, k) => {
    for (let pt = 0; pt < A.length - 1; pt++) {
      const st = (pt + N) * W;
      if (k < st - at / 2) return [A[pt], A[pt], 0];
      if (k <= st + at / 2) return [A[pt], A[pt + 1], (k - st + at / 2) / at];
    }
    const z = A[A.length - 1];
    return [z, z, 0];
  }, K = M.filter((A) => !A.night).map((A) => A.sky), B = M.filter((A) => A.night).map((A) => A.sky), $ = V / b, gt = 16 * J / b;
  for (let A = 0; A < s; A++) {
    const N = (A + 0.5) * g, k = H(N) / b, z = tt(K, 0.75, N), pt = tt(B, 1.25, N), st = O(N);
    for (let ct = 0; ct < u; ct++) {
      const ut = Ja(A, ct), mt = ct + 0.5 - k, Ft = ($ > 0.01 ? Qa(0.5 + mt / $) : mt > 0 ? 1 : 0) > ut;
      let Jt = Ft ? z[2] > ut ? z[1] : z[0] : pt[2] > ut ? pt[1] : pt[0];
      (Ft ? Qa(((ct + 0.5) / u - 0.45) / 0.55) * 0.7 : Qa(1 - (ct + 0.5) / (u * 0.55)) * 0.7) > Ja(A + 2, ct + 5) && (Jt = Ft ? We(Jt, "#ffffff", 0.18) : We(Jt, "#000000", 0.25)), Ft && mt >= 0 && mt < gt && st.a * 1.3 * (1 - mt / gt) > Ja(A + 6, ct + 1) && (Jt = st.c), Y[ct * s + A] = Jt, ot[ct * s + A] = Ft ? 0 : 1;
    }
  }
  const et = We(P.sun, "#ffffff", 0.55), Lt = We(P.moon, "#ffffff", 0.6);
  c.stars.forEach((A) => {
    const N = Math.floor(A.x / g), k = Math.floor(A.y / b);
    if (N < 0 || k < 0 || N >= s || k >= u || !ot[k * s + N] || A.o < 0.15) return;
    const z = A.o > 0.45 ? P.star : We(P.star, Y[k * s + N], 0.5), pt = A.big && A.o > 0.6 ? Math.floor(A.size / g) : 0;
    it(N, k, z, 1, pr);
    for (let st = 1; st <= pt; st++) [[N - st, k], [N + st, k], [N, k - st], [N, k + st]].forEach((ct) => {
      ct[0] >= 0 && ct[1] >= 0 && ct[0] < s && ct[1] < u && ot[ct[1] * s + ct[0]] && it(ct[0], ct[1], z, 1, pr);
    });
  }), c.suns.forEach((A) => {
    const N = Math.max(1.5, A.rad / g), k = A.x / g, z = A.y / b, pt = A.halo / g * 0.85;
    if (lt(k, z, pt, (st, ct, ut, mt) => {
      const Ft = Math.sqrt(ut * ut + mt * mt);
      Ft > N && Ft < pt && !ot[ct * s + st] && it(st, ct, et, 0.3 * (1 - (Ft - N) / (pt - N)), 0);
    }), E) {
      const st = Math.floor(y / 500) % 2, ct = Math.max(1, N * 0.3);
      for (let ut = 0; ut < 8; ut++) if (ut % 2 === st) for (let mt = N + 1.2; mt < N + 1.2 + ct; mt += 0.7) it(Math.floor(k + Math.cos(ut * Math.PI / 4) * mt), Math.floor(z + Math.sin(ut * Math.PI / 4) * mt), P.sun, 1, gc);
    }
    lt(k, z, N, (st, ct, ut, mt) => {
      ut * ut + mt * mt <= N * N && it(st, ct, Qa(((mt / N + 1) / 2 - 0.6) / 0.4) > Ja(st, ct) ? P.sunEdge : P.sun, 1, uc);
    });
  }), c.moons.forEach((A) => {
    const N = Math.max(1.5, A.d * 0.37 / g), k = A.x / g, z = A.y / b, pt = k + 0.547 * N, st = z - 0.503 * N, ct = 0.82 * N;
    lt(k, z, N, (ut, mt, Ft, Jt) => {
      if (Ft * Ft + Jt * Jt > N * N) return;
      const Ht = ut + 0.5 - pt, Je = mt + 0.5 - st;
      Ht * Ht + Je * Je > ct * ct && it(ut, mt, Qa((Jt + N) / (2 * N) * 1.1 - 0.1) > Ja(ut, mt) ? P.moon : Lt, 1, fc);
    });
  }), c.clouds.forEach((A) => {
    const N = Math.max(3, A.w / g), k = N * 0.6665, z = A.x / g, pt = A.y / b, st = We(A.fill, "#000000", 0.16);
    for (let ct = Math.max(0, Math.floor(pt) - 1); ct <= Math.min(u - 1, pt + k + 1); ct++) for (let ut = Math.max(0, Math.floor(z) - 1); ut <= Math.min(s - 1, z + N + 1); ut++) {
      const mt = (ut + 0.5 - z) / N, Ft = (ct + 0.5 - pt) / N;
      vd(mt, Ft) && it(ut, ct, !vd(mt, Ft + 1 / N) || Qa((Ft - 0.42) / 0.25) * 0.8 > Ja(ut, ct) ? st : A.fill, A.o, hc);
    }
  }), c.fogs.forEach((A) => {
    const N = Math.floor(A.y / b), k = Math.max(N, Math.floor((A.y + 6 * J) / b) - 1), z = Math.floor(A.x / g), pt = Math.floor((A.x + A.w) / g);
    for (let st = N; st <= k; st++) for (let ct = z; ct <= pt; ct++) {
      const ut = (ct - z) / Math.max(1, pt - z);
      it(ct, st, A.c, A.a * (ut < 0.25 ? ut / 0.25 : ut > 0.75 ? (1 - ut) / 0.25 : 1), 0);
    }
  });
  const Q = Math.max(2, Math.round(9 / b));
  c.drops.forEach((A) => {
    const N = A.x / g, k = Math.floor(A.y / b);
    for (let z = 0; z < Q; z++) it(Math.floor(N - 0.208 * z * b / g), k + z, P.rain, A.o, mc);
  });
  const Mt = Math.max(0, Math.round(4.4 / g / 2.6));
  return c.flakes.forEach((A) => {
    const N = Math.floor(A.x / g), k = Math.floor(A.y / b);
    it(N, k, P.snow, A.o, Xa);
    for (let z = 1; z <= Mt; z++)
      it(N - z, k, P.snow, A.o, Xa), it(N + z, k, P.snow, A.o, Xa), it(N, k - z, P.snow, A.o, Xa), it(N, k + z, P.snow, A.o, Xa);
  }), c.bolts.forEach((A) => {
    if (g <= 3.5)
      for (let N = Math.floor(A.y / b); N <= (A.y + 24) / b; N++) for (let k = Math.floor(A.x / g); k <= (A.x + 11) / g; k++)
        Mp(Au, (k + 0.5) * g - A.x, (N + 0.5) * b - A.y) && it(k, N, P.sun, 1, Is);
    else {
      const N = Math.round(A.x / g), k = Math.round(A.y / b);
      Eu.forEach((z, pt) => z.split("").forEach((st, ct) => {
        st === "#" && it(N + ct, k + pt, P.sun, 1, Is);
      }));
    }
  }), { col: Y, ids: q };
}
function Du(i, c) {
  const s = c.px, u = Math.max(6, Math.round(c.width / s)), g = Math.max(6, Math.round(c.height / s)), b = c.width / u, y = c.height / g, E = c.ambient ? Math.floor((c.clock || 0) / 100) * 100 : 0, M = (V) => {
    const at = Tp(V, c);
    return _u(at, Lp(at, { clock: E, ambient: c.ambient, seed: c.seed }), u, g, b, y, E, c.ambient);
  }, P = M(i), W = c.reveal == null ? 1 : Qa(c.reveal);
  let H = P.col, O = P.ids;
  if (W < 1) {
    const V = c.prev ? M(c.prev) : null, at = W * (u + 12);
    H = new Array(u * g), O = new Uint8Array(u * g);
    for (let J = 0; J < u * g; J++) {
      const Y = J % u, q = J / u | 0;
      (c.reduce ? W : Qa((at - Y) / 12)) > Ja(Y, q) ? (H[J] = P.col[J], O[J] = P.ids[J]) : V ? (H[J] = V.col[J], O[J] = V.ids[J]) : (H[J] = null, O[J] = 255);
    }
  }
  return Cp(H, O, u, g, { oneBit: c.oneBit, ink: c.ink, paper: c.paper, snowInk: !1 });
}
function Bu(i, c, s) {
  const u = s.width, g = s.height, b = s.reveal == null ? 1 : Qa(s.reveal), y = (O, V) => {
    const at = Tp(V, s);
    Ru(O, at, Lp(at, s));
  };
  if (i.clearRect(0, 0, u, g), b >= 1) {
    y(i, c);
    return;
  }
  if (s.prev && y(i, s.prev), s.reduce) {
    i.save(), i.globalAlpha = b, y(i, c), i.restore();
    return;
  }
  const E = i.canvas, M = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (M.width !== E.width || M.height !== E.height) && (M.width = E.width, M.height = E.height);
  const P = M.getContext("2d");
  P.setTransform(i.getTransform()), P.clearRect(0, 0, u, g), y(P, c);
  const W = b * (u + 64) - 64, H = P.createLinearGradient(W, 0, W + 64, 0);
  H.addColorStop(0, "rgba(0,0,0,1)"), H.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = H, P.fillRect(0, 0, u, g), P.globalCompositeOperation = "source-over", i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(M, 0, 0), i.restore();
}
function Ru(i, c, s) {
  const { W: u, H: g, S: b, C: y, cw: E, yb: M, glowAt: P, soft: W, tw: H, sy: O } = c, V = (et, Lt) => {
    const Q = fd(et);
    return "rgba(" + Q[0] + "," + Q[1] + "," + Q[2] + "," + Math.max(0, Math.min(1, Lt)).toFixed(3) + ")";
  }, at = (et, Lt) => {
    const Q = i.createLinearGradient(0, 0, u, 0);
    Q.addColorStop(0, et[0]);
    for (let Mt = 0; Mt < et.length - 1; Mt++) {
      const A = (Mt + Lt) * E, N = (A - H / 2) / u, k = (A + H / 2) / u;
      N > 0 && N < 1 && Q.addColorStop(N, et[Mt]), k > 0 && k < 1 && Q.addColorStop(k, et[Mt + 1]);
    }
    return Q.addColorStop(1, et[et.length - 1]), Q;
  }, J = Math.max(24, Math.ceil(u / 4)), Y = (et, Lt) => {
    i.beginPath();
    for (let Q = 0; Q <= J; Q++) {
      const Mt = u * Q / J, A = et == null ? 0 : M(Mt) + et;
      Q ? i.lineTo(Mt, A) : i.moveTo(Mt, A);
    }
    for (let Q = J; Q >= 0; Q--) {
      const Mt = u * Q / J;
      i.lineTo(Mt, M(Mt) + Lt);
    }
    i.closePath(), i.fill();
  };
  i.save(), i.fillStyle = at(b.filter((et) => !et.night).map((et) => et.sky), 0.75), i.fillRect(0, 0, u, g);
  const q = i.createLinearGradient(0, 0, u, 0);
  for (let et = 0; et <= 64; et++) {
    const Lt = P(u * et / 64);
    q.addColorStop(et / 64, V(Lt.c, Math.min(1, Lt.a)));
  }
  i.fillStyle = q;
  for (let et = 0; et < 8; et++)
    i.globalAlpha = 1 - et / 8, Y(et * 2 * O, (et + 1) * 2 * O);
  i.fillStyle = at(b.filter((et) => et.night).map((et) => et.sky), 1.25);
  const ot = Math.max(0.5, W), it = 6;
  i.globalAlpha = 1, Y(null, -ot);
  for (let et = 0; et < it; et++)
    i.globalAlpha = 1 - (et + 0.5) / it, Y(-ot + 2 * ot * et / it, -ot + 2 * ot * (et + 1) / it);
  i.globalAlpha = 1;
  const lt = new Path2D(Tu), tt = new Path2D(Cu), K = new Path2D(Su), B = new Path2D(Lu);
  i.fillStyle = y.star, s.stars.forEach((et) => {
    i.globalAlpha = et.o, et.big ? (i.save(), i.translate(et.x, et.y), i.scale(et.size, et.size), i.fill(lt), i.restore()) : (i.beginPath(), i.arc(et.x, et.y, 0.8, 0, Math.PI * 2), i.fill());
  }), i.globalAlpha = 1;
  const $ = We(y.sun, "#ffffff", 0.55);
  s.suns.forEach((et) => {
    const Lt = i.createRadialGradient(et.x, et.y, 0, et.x, et.y, et.halo);
    Lt.addColorStop(0, V($, 0.42)), Lt.addColorStop(0.7, V($, 0)), i.fillStyle = Lt, i.beginPath(), i.arc(et.x, et.y, et.halo, 0, Math.PI * 2), i.fill();
    const Q = i.createLinearGradient(0, et.y - et.rad, 0, et.y + et.rad);
    Q.addColorStop(0.6, y.sun), Q.addColorStop(1, y.sunEdge), i.fillStyle = Q, i.beginPath(), i.arc(et.x, et.y, et.rad, 0, Math.PI * 2), i.fill();
  });
  const gt = We(y.moon, "#ffffff", 0.6);
  s.moons.forEach((et) => {
    i.save(), i.translate(et.x - et.d / 2, et.y - et.d / 2), i.scale(et.d / 46, et.d / 46);
    const Lt = i.createLinearGradient(0, 6, 0, 40);
    Lt.addColorStop(0, gt), Lt.addColorStop(1, y.moon), i.fillStyle = Lt, i.fill(tt), i.restore();
  }), s.clouds.forEach((et) => {
    i.save(), i.globalAlpha = et.o, i.translate(et.x, et.y), i.scale(et.w / 46, et.h / 30.66), i.translate(-4, -9.67), i.fillStyle = et.fill, i.fill(K), i.restore();
  }), s.fogs.forEach((et) => {
    const Lt = i.createLinearGradient(et.x, 0, et.x + et.w, 0);
    Lt.addColorStop(0, V(et.c, 0)), Lt.addColorStop(0.25, V(et.c, et.a)), Lt.addColorStop(0.75, V(et.c, et.a)), Lt.addColorStop(1, V(et.c, 0)), i.fillStyle = Lt, i.fillRect(et.x, et.y, et.w, 6 * O);
  }), i.fillStyle = y.rain, s.drops.forEach((et) => {
    i.save(), i.globalAlpha = et.o, i.translate(et.x, et.y), i.rotate(12 * Math.PI / 180), i.fillRect(-1.5, 0, 3, 9), i.restore();
  }), i.fillStyle = y.snow, s.flakes.forEach((et) => {
    i.globalAlpha = et.o, i.beginPath(), i.arc(et.x, et.y, 2.2, 0, Math.PI * 2), i.fill();
  }), i.fillStyle = y.sun, s.bolts.forEach((et) => {
    i.save(), i.globalAlpha = et.o, i.translate(et.x, et.y), i.fill(B), i.restore();
  }), i.restore();
}
function Pu(i, c) {
  var xl, yl, kl, Ml, e, n, l;
  const s = (t) => i.getElementById(t), u = s("workoutView"), g = s("workoutNameInput");
  let b = !0;
  const y = s("homeClock");
  function E() {
    y && (y.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const M = s("createFlow"), P = s("createMovementsSlot"), W = s("createTimingSlot"), H = s("createFinishSlot"), O = s("movementStepSummary"), V = s("timingStepSummary"), at = s("finishStepSummary"), J = s("continueToTiming"), Y = s("continueToFinish"), q = s("finishMoveButton");
  let ot = !1, it = [];
  function lt(t) {
    !t || it.some((a) => a.node === t) || it.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function tt(t, a) {
    t && (lt(t), a.appendChild(t));
  }
  function K() {
    [...it].reverse().forEach(({ node: t, parent: a, next: o }) => {
      a && (o && o.parentNode === a ? a.insertBefore(t, o) : a.appendChild(t));
    }), it = [];
  }
  function B(t) {
    i.querySelectorAll(".createStep").forEach((a) => {
      a.classList.toggle("active", a.dataset.createStep === t);
    }), t === "timing" && (ot = !0), $();
  }
  function $() {
    var x, C;
    if (!Le) return;
    te[At];
    const t = oe.filter((L) => !L.hidden), a = t.filter((L) => L.kind !== "rest").length, o = t.filter((L) => L.kind === "rest").length;
    O.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (o ? " · " + o + " rest" + (o === 1 ? "" : "s") : "") : "No movements yet";
    const r = a > 0, d = i.querySelector('[data-open-step="timing"]'), p = i.querySelector('[data-open-step="finish"]');
    d.disabled = !r, J.disabled = !r, V.textContent = r ? Un(N.value) + " · " + ta(k.value) + " movement · " + ta(z.value) + " rest" : "Add a movement first", p.disabled = !(r && ot);
    const h = ((g == null ? void 0 : g.value) || "").trim(), m = [];
    (x = s("includeWarmupPreset")) != null && x.checked && m.push("warm-up"), (C = s("includeCooldownPreset")) != null && C.checked && m.push("cooldown"), at.textContent = h ? h + (m.length ? " · " + m.join(" + ") : "") : m.length ? m.join(" + ") : "Name and optional extras";
  }
  function gt() {
    var R, j, _;
    M.hidden = !1, ot = !1;
    const t = i.querySelector(".editNameRow"), a = s("createMoveOptions"), o = i.querySelector(".timeTiles"), r = s("routineSummaryModal"), d = i.querySelector(".tempoRevealRow"), p = s("tempoExperiment"), h = (R = s("warmupList")) == null ? void 0 : R.closest("section"), m = s("movementCreatorLaunch"), x = s("movementCreator"), C = (j = s("strengthList")) == null ? void 0 : j.closest("section"), L = (_ = s("cooldownList")) == null ? void 0 : _.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), h, m, x, C, L].forEach((F) => F && tt(F, P)), [a, o, r, d, p].forEach((F) => tt(F, W)), tt(t, H), B("movements"), $();
  }
  function et() {
    K(), M.hidden = !0, i.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  i.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || B(t.dataset.openStep);
  })), J.addEventListener("click", () => {
    J.disabled || B("timing");
  }), Y.addEventListener("click", () => B("finish")), q.addEventListener("click", () => s("saveWorkoutEdit").click());
  const Lt = { home: s("homeView"), workout: s("workoutView"), settings: s("settingsView") }, Q = s("homeNav"), Mt = s("settingsNav");
  function A(t) {
    Object.entries(Lt).forEach(([a, o]) => o.classList.toggle("active", a === t)), Q.classList.toggle("active", t === "home"), Mt.classList.toggle("active", t === "settings"), t === "home" && setTimeout(St, 400), t === "settings" && (requestAnimationFrame(() => Qi(i.querySelector(".tab.active"), !1)), ha());
  }
  const N = s("totalTime"), k = s("workTime"), z = s("restTime"), pt = s("totalOut"), st = s("workOut"), ct = s("restOut"), ut = s("totalFill"), mt = s("workFill"), Ft = s("restFill"), Jt = s("roundsInput"), Ht = s("roundsFill"), Je = s("roundsOut"), Ho = s("totalLabel"), xn = s("routineSummaryModal"), Vt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ae = Vt.map((t) => ({ ...t })), oe = [
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
  const an = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ge = an.map((t) => ({ ...t }));
  const ee = {
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
  }, Qt = ya(c.data), te = Qt.profiles;
  let At = te[Qt.selected] ? Qt.selected : Qt.order.find((t) => te[t]) || "kettlebell";
  function ya(t) {
    const a = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, o = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(ee)), r = (Array.isArray(a.order) ? a.order : Object.keys(o)).filter((d) => o[d]);
    return Object.keys(o).forEach((d) => {
      r.includes(d) || r.push(d);
    }), {
      v: 1,
      profiles: o,
      order: r,
      selected: a.selected || r[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : Vr(a.energy)).map(fr),
      settings: { ...a.settings || {} }
    };
  }
  function Vr(t) {
    if (!Array.isArray(t)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], o = [];
    return t.forEach((r) => {
      const d = new Date(r.at);
      if (isNaN(d)) return;
      const p = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"), h = d.getHours() < 14 ? "morning" : "evening";
      if (o.some((x) => x.date === p && x.slot === h)) return;
      const m = a.indexOf(r.value) + 1;
      m > 0 && o.push({ date: p, slot: h, mood: null, energy: m, at: r.at });
    }), o;
  }
  function fr(t) {
    if (t.scale === 100) return t;
    const a = (o) => o == null ? null : Math.round((Number(o) - 1) / 5 * 100);
    return { ...t, mood: a(t.mood), energy: a(t.energy), scale: 100 };
  }
  function Ue() {
    Le || (Qt.selected = At, Qt.order = Qt.order.filter((t) => te[t] && t !== Fa), c.save(Qt));
  }
  function zt() {
    return Qt.settings;
  }
  function Ha(t) {
    const a = te[t];
    if (!a) return;
    At = t;
    const o = s("workoutNameInput");
    if (o && (o.value = a.name), N.value = a.total, k.value = a.work, z.value = a.rest, Jt.value = a.rounds || 1, a.customSequence) {
      const r = (a.sequence || []).map((p) => ({ ...p })), d = (p) => r.filter((h) => h.presetRole === p).map(({ presetRole: h, ...m }) => m);
      ae = (a.warmup || d("warmup")).map((p) => ({ ...p })), Ge = (a.cooldown || d("cooldown")).map((p) => ({ ...p })), oe = r.filter((p) => !p.presetRole), Di(a.preset || "movement", !1);
    } else
      N.min = 3, N.max = 40, N.step = 1, k.min = 20, k.max = 60, k.step = 5, z.min = 5, z.max = 30, z.step = 5, ae = (a.warmup || Vt).map((r) => ({ ...r })), Ge = (a.cooldown || an).map((r) => ({ ...r })), oe = a.strength.map((r) => Array.isArray(r) ? (([d, p, h, m = !1]) => ({ id: d, name: p, group: h, kind: "work", hidden: !!m }))(r) : { ...r });
    i.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === t)), re();
  }
  function po(t, a, o) {
    const r = t.getBoundingClientRect(), d = r.width / 2, p = r.height / 2, h = a - d, m = o - p;
    let x = 1 / 0, C = 1 / 0;
    h !== 0 && (x = d / Math.abs(h)), m !== 0 && (C = p / Math.abs(m));
    const L = Math.min(Math.max(1 / Math.min(x, C), 0), 1);
    let T = Math.atan2(m, h) * (180 / Math.PI) + 90;
    return T < 0 && (T += 360), { edge: L, angle: T };
  }
  function Ai(t, a, o = !1) {
    const r = t.getBoundingClientRect(), d = a.clientX - r.left, p = a.clientY - r.top, { edge: h, angle: m } = po(t, d, p), x = o ? 100 : h * 100;
    t.style.setProperty("--edge-proximity", x.toFixed(3)), t.style.setProperty("--cursor-angle", m.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", o || x >= 30);
  }
  function Ei(t) {
    t.addEventListener("pointermove", (o) => Ai(t, o, !1)), t.addEventListener("pointerenter", (o) => Ai(t, o, !1)), t.addEventListener("pointerdown", (o) => Ai(t, o, !0));
    const a = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", a), t.addEventListener("pointerup", a), t.addEventListener("pointercancel", a);
  }
  Ei(s("addWorkoutPanel"));
  let Le = !1, Fa = null;
  function Zt(t) {
    return String(t ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function En(t) {
    return t.summary ? t.summary : t.customSequence ? Un(t.total) + " · custom move" : Un(t.total) + " · " + ta(t.work) + " / " + ta(t.rest) + " · warm-up + cooldown";
  }
  function je(t, a) {
    var p;
    const o = document.createElement("article");
    o.className = "workoutPanel", o.dataset.workout = t, o.tabIndex = 0;
    const r = a.activityCount ?? (((p = a.sequence) == null ? void 0 : p.length) || 0);
    o.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Zt(a.name) + '</div><div class="sub">' + Zt(En(a)) + '</div><span class="sourceTag">' + Zt(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (r ? r + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Zt(a.name) + "</div></div>";
    const d = s("addWorkoutPanel");
    return s("workoutGallery").insertBefore(o, d), Ei(o), o.addEventListener("click", (h) => {
      h.target.closest("button") || Ha(t);
    }), o.addEventListener("keydown", (h) => {
      (h.key === "Enter" || h.key === " ") && !h.target.closest("button") && (h.preventDefault(), Ha(t));
    }), o.querySelector(".seeWorkoutBtn").addEventListener("click", (h) => {
      h.stopPropagation(), Ha(t), Xr(!1);
    }), o.querySelector(".startWorkoutBtn").addEventListener("click", (h) => {
      h.stopPropagation(), Ha(t), Ys();
    }), o;
  }
  function Fo() {
    i.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), Qt.order.forEach((t) => {
      te[t] && je(t, te[t]);
    }), i.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === At));
  }
  Fo(), s("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), s("addWorkoutPanel").click());
  }), s("addWorkoutPanel").addEventListener("click", () => {
    Le = !0, Fa = "custom-" + Date.now(), te[Fa] = {
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
    }, Ha(Fa), Xr(!0);
  });
  let It = [], Gt = 0, Wt = 0, Ct = 1, xe = !1, Ut = null, Qe = null, Se = !1, Gn = Qt.settings.upcomingCount ?? "all", Gr = "movement";
  function uo(t, a, o) {
    return (Number(t) - a) / (o - a) * 100;
  }
  function ta(t) {
    const a = Math.max(0, Number(t) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function Un(t) {
    const a = Math.max(0, Number(t) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function _i() {
    ut.style.width = uo(N.value, Number(N.min), Number(N.max)) + "%", mt.style.width = uo(k.value, Number(k.min), Number(k.max)) + "%", Ft.style.width = uo(z.value, Number(z.min), Number(z.max)) + "%", st.textContent = ta(k.value), ct.textContent = ta(z.value);
    const t = Number(Jt.value) || 1;
    Ht.style.width = uo(t, 1, 10) + "%", Ho.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function fo(t) {
    return t.filter((a) => !a.hidden);
  }
  function ho(t) {
    const a = Math.max(0, Math.round(Number(t) || 0)), o = Math.floor(a / 3600), r = Math.floor(a % 3600 / 60), d = a % 60;
    return (o ? o + ":" + String(r).padStart(2, "0") : r) + ":" + String(d).padStart(2, "0");
  }
  function Hs(t) {
    let a;
    try {
      a = new URL(String(t || "").trim());
    } catch {
      return null;
    }
    const o = a.hostname.replace(/^(www|m|music)\./, "");
    let r = null;
    if (o === "youtu.be") r = a.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(o))
      if (a.pathname === "/watch") r = a.searchParams.get("v");
      else {
        const m = a.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        m && (r = m[2]);
      }
    if (!r || !/^[\w-]{11}$/.test(r)) return null;
    const d = (m) => {
      if (!m) return 0;
      if (/^\d+$/.test(m)) return Number(m);
      const x = m.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return x ? (Number(x[1]) || 0) * 3600 + (Number(x[2]) || 0) * 60 + (Number(x[3]) || 0) : 0;
    }, p = d(a.searchParams.get("t") || a.searchParams.get("start")), h = d(a.searchParams.get("end"));
    return { id: r, start: p, end: h > p ? h : null };
  }
  function yn(t, a) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || a || 300);
    const o = Number(t.start) || 0, r = Number(t.end) || Number(t.videoDuration) || 0;
    return r > o ? Math.round(r - o) : Number(t.duration) || 300;
  }
  function mo(t, a) {
    const o = Math.max(0, Number(t) || 0);
    return Math.round(a === "hour" ? o * 3600 : a === "min" ? o * 60 : o);
  }
  function Di(t, a = !0) {
    Gr = t, i.querySelectorAll(".createPresetBtn").forEach((r) => r.classList.toggle("active", r.dataset.movePreset === t));
    const o = te[At];
    o && (o.preset = t), t === "work" ? (N.min = 30, N.max = 480, N.step = 30, k.min = 300, k.max = 7200, k.step = 300, z.min = 60, z.max = 1800, z.step = 60, a && (N.value = 60, k.value = 1500, z.value = 300), s("addMovementUnit").value = "min", s("addMovementDuration").value = 25, s("addRestUnit").value = "min", s("addRestDuration").value = 5) : (N.min = 3, N.max = 40, N.step = 1, k.min = 20, k.max = 60, k.step = 5, z.min = 5, z.max = 30, z.step = 5, a && (N.value = 20, k.value = 45, z.value = 15), s("addMovementUnit").value = "sec", s("addMovementDuration").value = 45, s("addRestUnit").value = "sec", s("addRestDuration").value = 30), _i();
  }
  function hr(t, a) {
    const o = Gr === "work";
    return t.map((r, d) => ({ ...r, id: a + "-" + d + "-" + Date.now().toString(36), useGlobalTiming: !o, duration: o ? 60 : Number(k.value) }));
  }
  function mr() {
    const t = te[At];
    t != null && t.customSequence && (t.includeWarmup = s("includeWarmupPreset").checked, t.includeCooldown = s("includeCooldownPreset").checked, t.includeWarmup && !ae.length && (ae = hr(Vt, "warm")), t.includeCooldown && !Ge.length && (Ge = hr(an, "cool")), re());
  }
  function Fs() {
    const t = s("upcomingCountSetting");
    if (!t) return;
    const a = Math.max(1, It.length - 1), o = Gn;
    t.innerHTML = "";
    for (let p = 1; p <= a; p++) {
      const h = document.createElement("option");
      h.value = String(p), h.textContent = String(p), t.appendChild(h);
    }
    const r = document.createElement("option");
    r.value = "all", r.textContent = "All", t.appendChild(r);
    const d = o === "all" ? "all" : String(Math.min(Number(o) || 1, a));
    t.value = d, Gn = d === "all" ? "all" : Number(d);
  }
  function re() {
    Number(N.value) * 60;
    const t = Number(k.value), a = Number(z.value), o = te[At], r = !!(o != null && o.customSequence), d = (r ? !o.includeWarmup : o != null && o.warmupOff) ? [] : fo(ae), p = fo(oe), h = r && !o.includeCooldown ? [] : fo(Ge);
    if (o && (o.total = Number(N.value), o.work = t, o.rest = a, o.rounds = Number(Jt.value) || 1, o.customSequence ? (o.sequence = oe.map((kt) => ({ ...kt })), o.warmup = ae.map((kt) => ({ ...kt })), o.cooldown = Ge.map((kt) => ({ ...kt }))) : (o.strength = oe.map((kt) => ({ ...kt })), o.warmup = ae.map((kt) => ({ ...kt })), o.cooldown = Ge.map((kt) => ({ ...kt })))), o != null && o.customSequence) {
      const kt = [...d.map((Yt) => ({ ...Yt, section: "warmup" })), ...p, ...h.map((Yt) => ({ ...Yt, section: "cooldown" }))].map((Yt) => {
        if (Yt.kind === "video") return { ...Yt, duration: yn(Yt, t), rest: 0 };
        if (Yt.kind === "rest") {
          const la = Yt.useGlobalTiming === !0 ? a : Number(Yt.duration) || a;
          return { ...Yt, duration: la, rest: 0 };
        }
        const sa = Yt.useGlobalTiming === !1 && Number(Yt.duration) || t;
        return { ...Yt, duration: sa, rest: 0 };
      });
      o.autoRest && Number(o.autoRestDuration) > 0 ? (It = [], kt.forEach((Yt, sa) => {
        It.push(Yt);
        const la = kt[sa + 1];
        Yt.kind !== "rest" && la && la.kind !== "rest" && It.push({
          id: "auto-rest-" + sa,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(o.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : It = kt;
    } else
      It = [...d.map((kt) => ({ ...kt, section: "warmup" })), ...p, ...h.map((kt) => ({ ...kt, section: "cooldown" }))].map((kt) => kt.kind === "video" ? { ...kt, duration: yn(kt, t), rest: 0 } : kt.kind === "rest" ? { ...kt, duration: kt.useGlobalTiming === !0 ? a : Number(kt.duration) || a, rest: 0 } : { ...kt, duration: kt.useGlobalTiming === !1 && Number(kt.duration) || t, rest: a }), It.forEach((kt, Yt) => {
        var sa;
        ((sa = It[Yt + 1]) == null ? void 0 : sa.kind) === "rest" && (kt.rest = 0);
      }), It.length && (It[It.length - 1].rest = 0);
    const m = Math.max(1, Math.min(10, Number(Jt.value) || 1)), x = It, C = (kt) => m <= 1 ? null : kt.section === "warmup" || kt.presetRole === "warmup" ? "first" : kt.section === "cooldown" || kt.presetRole === "cooldown" ? "last" : kt.kind === "video" && (kt.videoRounds === "first" || kt.videoRounds === "last") ? kt.videoRounds : null, L = (kt) => !!C(kt), T = x.filter((kt) => !L(kt)), R = x.filter(L), j = T.length, _ = T.reduce((kt, Yt) => kt + Yt.duration + Yt.rest, 0), F = R.reduce((kt, Yt) => kt + Yt.duration + Yt.rest, 0), D = [
      R.some((kt) => kt.section === "warmup" || kt.presetRole === "warmup") && "warm-up",
      R.some((kt) => kt.section === "cooldown" || kt.presetRole === "cooldown") && "cooldown",
      R.some((kt) => kt.kind === "video" && !kt.section && !kt.presetRole) && "video"
    ].filter(Boolean), ft = D.length > 1 ? D.slice(0, -1).join(", ") + " & " + D[D.length - 1] : D[0] || "";
    It = [];
    const Bt = (kt, Yt) => {
      const sa = C(kt);
      return !sa || (sa === "first" ? Yt === 1 : Yt === m);
    };
    for (let kt = 1; kt <= m; kt++)
      if (x.filter((Yt) => Bt(Yt, kt)).forEach((Yt, sa) => It.push({ ...Yt, id: Yt.id + (m > 1 ? "-r" + kt : ""), round: kt, roundIndex: sa })), kt < m && j)
        if (o != null && o.customSequence)
          It.push({ id: "round-break-" + kt, name: "Rest", group: "Round " + (kt + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: kt, roundIndex: j, roundBreak: !0 });
        else {
          const Yt = It[It.length - 1];
          Yt.rest = a, Yt.roundBreakAfter = !0;
        }
    _i();
    const ht = It.reduce((kt, Yt) => kt + Yt.duration + Yt.rest, 0), Nt = Math.round(_ / 60), wt = Math.round(ht / 60), Et = m > 1 ? Un(Nt) + " × " + m + " rounds" + (F ? " + " + ta(F) + " " + ft : "") + " (" + Un(wt) + ")" : Un(wt), Pt = [d.length ? "warm-up" : "", h.length ? "cooldown" : ""].filter(Boolean), Me = o != null && o.customSequence ? Et + " · " + j + " items" + (Pt.length && !(m > 1 && F) ? " · " + Pt.join(" + ") : "") : Et + " · " + ta(t) + " / " + ta(a) + (Pt.length && !(m > 1 && F) ? " · " + Pt.join(" + ") : "");
    pt.textContent = ta(_);
    const ra = It.filter((kt) => !kt.roundBreak).length, De = m > 1 ? ra + " activities · " + m + " rounds" : j + " activities";
    Je.textContent = m > 1 ? m + " rounds · " + Un(wt) + " total" : "1 round", s("roundsCount").textContent = m, i.querySelectorAll("[data-rounds-step]").forEach((kt) => {
      kt.disabled = Number(kt.dataset.roundsStep) < 0 ? m <= 1 : m >= 10;
    }), o && (o.summary = Me, o.activityCount = j);
    const wi = i.querySelector(".workoutPanel.active .sub");
    wi && (wi.textContent = Me), xn.textContent = Me, vo(), i.querySelectorAll(".workoutPanel.active .activityCount").forEach((kt) => kt.textContent = De), _i(), Ri(), Xn(), bo(), Fs(), Le && $(), Lt.workout.classList.contains("active") && !Ut && ao();
  }
  const Oo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', nn = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', kn = {
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
  }, Oa = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (kn[t] || "") + "</svg>";
  i.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = Oa(t.dataset.icon);
  });
  let Ce = null, ga = null;
  function on(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function qo(t = !1) {
    const a = i.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), t && a.select());
  }
  function Bi(t, a, o = {}) {
    const r = t.kind === "rest", d = t.kind === "video", p = d ? t.useVideoLength !== !1 : r ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, h = Number(r ? z.value : k.value), m = on(d ? t.useVideoLength === !1 ? t.duration : yn({ ...t, useVideoLength: !0 }) : p ? h : t.duration || h), x = d && (Number(t.videoDuration) > 0 || Number(t.end) > 0), C = d ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Zt(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Zt(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([ht, Nt]) => '<option value="' + ht + '"' + ((t.videoRounds || "every") === ht ? " selected" : "") + ">" + Nt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Zt(t.name) + '" placeholder="' + (r ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Zt(t.group) + '" placeholder="' + (r ? "Rest" : "e.g. Glutes + legs") + '"></label>', L = d ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (x ? " · " + ho(yn({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + ta(h), T = document.createElement("div");
    T.className = "moveRow editing" + (o.sheet ? " inSheet" : ""), T.dataset.index = a, T.dataset.id = t.id;
    const R = o.isNew ?? (ga == null ? void 0 : ga.item) === t, j = o.sheet ? '<div class="moveEditActions sheetActions">' + (R ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Zt(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (R ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    T.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (d ? " videoFields" : "") + '">' + C + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (p ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Zt(L) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + m.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((ht) => '<option value="' + ht + '"' + (ht === m.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[ht] + "</option>").join("") + "</select></div></div>" + j + "</div>";
    const _ = (ht) => T.querySelector("[data-f=" + ht + "]"), F = () => {
      const ht = _("global").checked;
      _("dur").disabled = ht, _("unit").disabled = ht, T.querySelector(".creatorDurationRow").classList.toggle("isDisabled", ht);
    };
    _("global").addEventListener("change", F), F();
    const D = () => {
      var ht;
      if (o.sheet) {
        (ht = o.onCancel) == null || ht.call(o);
        return;
      }
      R && Pi(), Ce = null, re();
    }, ft = () => {
      var wt;
      if (d) {
        Bt();
        return;
      }
      const ht = _("name").value.trim();
      if (!ht) {
        _("name").focus();
        return;
      }
      t.name = ht, t.group = _("group").value.trim() || (r ? "Rest" : "Movement");
      const Nt = _("global").checked;
      if (t.useGlobalTiming = Nt, Nt || (t.duration = Math.max(r ? 5 : 1, mo(_("dur").value, _("unit").value))), o.sheet) {
        (wt = o.onSaved) == null || wt.call(o);
        return;
      }
      R && (ga = null), Ce = null, re(), pe(R ? r ? "Rest added" : "Movement added" : "Movement updated");
    }, Bt = () => {
      var Pt;
      const ht = _("url").value.trim(), Nt = Hs(ht);
      if (!Nt) {
        _("urlError").hidden = !1, _("url").classList.add("invalid"), _("url").focus();
        return;
      }
      const wt = Nt.id !== t.videoId;
      t.url = ht, t.videoId = Nt.id, t.start = Nt.start, t.end = Nt.end, wt && (t.videoDuration = null, t.videoError = null);
      const Et = _("name").value.trim();
      t.autoName = !Et, t.name = Et || (wt ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = _("rounds").value, t.useVideoLength = _("global").checked, t.useVideoLength || (t.duration = Math.max(5, mo(_("dur").value, _("unit").value))), o.sheet ? (Pt = o.onSaved) == null || Pt.call(o) : (R && (ga = null), Ce = null, re(), pe(R ? "Video added" : "Video updated")), (wt || !t.videoDuration || t.autoName && !t.videoTitle) && cs(t);
    };
    if (d && _("url").addEventListener("input", () => {
      _("urlError").hidden = !0, _("url").classList.remove("invalid");
    }), T.querySelector("[data-a=cancel]").addEventListener("click", D), T.querySelector("[data-a=save]").addEventListener("click", ft), o.sheet && !R) {
      T.querySelector("[data-a=hide]").addEventListener("click", () => {
        var Nt;
        return (Nt = o.onHide) == null ? void 0 : Nt.call(o);
      });
      const ht = T.querySelector("[data-a=remove]");
      na(ht, ht.querySelector(".removeFill"), 1200, () => {
        var Nt;
        return (Nt = o.onRemove) == null ? void 0 : Nt.call(o);
      });
    }
    return T.addEventListener("keydown", (ht) => {
      ht.key === "Escape" && (ht.preventDefault(), ht.stopPropagation(), D()), ht.key === "Enter" && ht.target.matches("input") && (ht.preventDefault(), ft());
    }), T;
  }
  function Re(t, a) {
    const o = s(a);
    o.innerHTML = "", t.forEach((r, d) => {
      if (r === Ce && !Yn()) {
        o.appendChild(Bi(r, d));
        return;
      }
      const p = document.createElement("div");
      p.className = "moveRow" + (r.hidden ? " hidden" : "") + (r.kind === "rest" ? " restItem" : "") + (r.kind === "video" ? " videoItem" : "") + (us(r) ? " noMeta" : ""), p.dataset.index = d, p.dataset.id = r.id;
      const h = r.kind === "rest" ? r.useGlobalTiming === !0 ? "Global timing" : ta(r.duration) : r.useGlobalTiming === !1 ? ta(r.duration) : "Global timing", m = r.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", x = r.kind === "video" ? r.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (r.useVideoLength === !1 ? "stops after " + ta(r.duration) : Number(r.videoDuration) > 0 || Number(r.end) > 0 ? ho(yn(r)) : "plays to the end") + (r.videoRounds === "first" ? " · first round only" : r.videoRounds === "last" ? " · last round only" : "") : r.group + " · " + h, C = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Zt(r.name) + '. Drag, or use the up and down arrow keys">' + Oo + "</button>", L = '<div class="moveText"><div class="moveItemName">' + Zt(r.name) + m + '</div><div class="moveMeta">' + Zt(x) + "</div></div>", T = (_) => _.addEventListener("keydown", (F) => {
        var Bt, ht;
        if (F.key !== "ArrowUp" && F.key !== "ArrowDown") return;
        F.preventDefault();
        const D = t.indexOf(r), ft = D + (F.key === "ArrowUp" ? -1 : 1);
        ft < 0 || ft >= t.length || (t.splice(D, 1), t.splice(ft, 0, r), re(), (ht = (Bt = s(a).children[ft]) == null ? void 0 : Bt.querySelector(".dragHandle")) == null || ht.focus());
      });
      if (Yn()) {
        p.classList.add("phoneRow"), p.tabIndex = 0, p.setAttribute("role", "button"), p.setAttribute("aria-label", "Edit " + (r.name || "step")), p.innerHTML = C + L + '<span class="rowChevron" aria-hidden="true">›</span>';
        const _ = p.querySelector(".dragHandle");
        _.addEventListener("pointerdown", (F) => gr(F, p, o, t)), T(_), p.addEventListener("click", (F) => {
          F.target.closest(".dragHandle") || Uo(r, t);
        }), p.addEventListener("keydown", (F) => {
          F.key === "Enter" && F.target === p && (F.preventDefault(), Uo(r, t));
        }), o.appendChild(p);
        return;
      }
      p.innerHTML = C + L + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Zt(r.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (r.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Zt(r.name) + '"><span class="removeFill"></span><span class="removeLabel">' + nn + "</span></button></div>", p.querySelector(".editBtn").addEventListener("click", () => {
        Pi(), Ce = r, re(), qo();
      }), p.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        r.hidden = !r.hidden, re();
      });
      const R = p.querySelector(".removeBtn");
      na(R, R.querySelector(".removeFill"), 1200, () => {
        const _ = t.indexOf(r);
        _ < 0 || (t.splice(_, 1), re(), pe("Removed " + r.name, { label: "Undo", run: () => {
          t.splice(Math.min(_, t.length), 0, r), re();
        } }));
      });
      const j = p.querySelector(".dragHandle");
      j.addEventListener("pointerdown", (_) => gr(_, p, o, t)), T(j), o.appendChild(p);
    });
  }
  const pa = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, rn = (t) => {
    var a;
    try {
      (a = navigator.vibrate) == null || a.call(navigator, t);
    } catch {
    }
  };
  function gr(t, a, o, r) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const d = t.currentTarget, p = t.pointerId, h = !pa();
    try {
      d.setPointerCapture(p);
    } catch {
    }
    const m = a.closest(".exerciseScroller") || Ae(a), x = o.style.position;
    o.style.position = "relative";
    const C = [...o.children].filter((Xt) => Xt.classList.contains("moveRow")), L = C.indexOf(a), T = parseFloat(getComputedStyle(o).rowGap) || 8, R = a.offsetHeight, j = R + T, _ = C.map((Xt) => Xt.offsetTop), F = C.map((Xt) => Xt.offsetHeight), D = () => o.getBoundingClientRect().top, ft = o.getBoundingClientRect().width, Bt = t.clientY - (D() + _[L]), ht = t.clientX;
    let Nt = t.clientY, wt = t.clientX, Et = D() + _[L], Pt = 0, Me = 0, ra = 0, De = 1, wi = 0, kt = L, Yt = !1, sa = 0, la = !1, td = !1, Es = _[L];
    o.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", rn(8);
    const ed = () => {
      const Xt = Nt - Bt + R / 2 - D();
      let le = 0;
      return C.forEach((Be, Za) => {
        Za !== L && Xt > _[Za] + F[Za] / 2 && le++;
      }), le;
    }, ad = () => {
      C.forEach((Xt, le) => {
        if (le === L) return;
        const Be = L < kt && le > L && le <= kt ? -j : L > kt && le >= kt && le < L ? j : 0;
        Xt.style.transform = Be ? "translateY(" + Be + "px)" : "";
      });
    }, Sl = () => {
      const Xt = o.getBoundingClientRect(), le = Math.abs(wt - ht) > Math.max(80, ft * 0.3) || wt < Xt.left - 24 || wt > Xt.right + 24;
      le !== Yt && (Yt = le, a.classList.toggle("willReturn", le), rn(le ? 10 : 4));
      const Be = Yt ? L : ed();
      Be !== kt && (kt = Be, ad(), Yt || rn(4));
    }, sr = () => {
      if (kt === L) return _[L];
      const Xt = C.filter((Be, Za) => Za !== L);
      let le = _[0];
      for (let Be = 0; Be < kt; Be++) le += Xt[Be].offsetHeight + T;
      return le;
    }, _s = () => {
      const Xt = h ? Math.min(Math.abs(Pt) / 40, 1) : 0, le = h && !la ? Math.max(-3, Math.min(3, ra * 0.6)) : 0;
      a.style.transform = "translate(" + Me.toFixed(2) + "px," + (Et - (D() + _[L])).toFixed(2) + "px) rotate(" + le.toFixed(2) + "deg) scale(" + (De * (1 - 0.04 * Xt)).toFixed(4) + "," + (De * (1 + 0.06 * Xt)).toFixed(4) + ")";
    }, Kt = () => {
      sa = requestAnimationFrame(Kt);
      const Xt = wt - ht, le = la ? D() + Es : Nt - Bt, Be = la ? 0 : Yt ? Xt * 0.9 : Math.max(-22, Math.min(22, Xt * 0.22)), Za = la ? 1 : Yt ? 0.97 : 1.035;
      if (!h) {
        Et = le, Me = la ? 0 : Be, De = 1, _s(), la && He();
        return;
      }
      const lu = la ? 0.24 : 0.2, du = la ? 0.62 : 0.68;
      Pt = (Pt + (le - Et) * lu) * du, Et += Pt, ra = (ra + (Be - Me) * 0.16) * 0.7, Me += ra, wi = (wi + (Za - De) * 0.22) * 0.6, De += wi, _s(), la && Math.abs(Pt) < 0.15 && Math.abs(le - Et) < 0.5 && Math.abs(Me) < 0.5 && Math.abs(De - 1) < 3e-3 && He();
    }, we = setInterval(() => {
      if (!m || la) return;
      const Xt = m.getBoundingClientRect(), le = 56, Be = Nt < Xt.top + le ? -10 : Nt > Xt.bottom - le ? 10 : 0;
      Be && (m.scrollTop += Be, Sl());
    }, 30);
    function He() {
      if (td) return;
      td = !0, cancelAnimationFrame(sa);
      const Xt = kt !== L, le = a.dataset.id;
      if (o.classList.remove("reordering"), C.forEach((Za) => {
        Za.style.transition = "none", Za.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), o.style.position = x, Xt) {
        const [Za] = r.splice(L, 1);
        r.splice(kt, 0, Za);
      }
      re();
      const Be = le && o.querySelector('.moveRow[data-id="' + le + '"]');
      Be && h && Be.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), Xt && pe("Order saved");
    }
    const da = (Xt) => {
      if (Xt.pointerId === p) {
        if (Xt.pointerType === "mouse" && Xt.buttons === 0) {
          An();
          return;
        }
        Nt = Xt.clientY, wt = Xt.clientX, Sl();
      }
    }, Ya = (Xt) => {
      Xt.pointerId === p && An();
    };
    function An() {
      la || (window.removeEventListener("pointermove", da, !0), window.removeEventListener("pointerup", Ya, !0), window.removeEventListener("pointercancel", Ya, !0), d.removeEventListener("lostpointercapture", An), clearInterval(we), Yt && kt !== L && (kt = L, ad()), Es = sr(), la = !0, rn(6), setTimeout(He, 800));
    }
    window.addEventListener("pointermove", da, !0), window.addEventListener("pointerup", Ya, !0), window.addEventListener("pointercancel", Ya, !0), d.addEventListener("lostpointercapture", An), sa = requestAnimationFrame(Kt), _s();
  }
  function Ri() {
    var d, p, h, m;
    const t = te[At], a = (d = s("warmupList")) == null ? void 0 : d.closest("section"), o = (p = s("cooldownList")) == null ? void 0 : p.closest("section"), r = (m = (h = s("strengthList")) == null ? void 0 : h.closest("section")) == null ? void 0 : m.querySelector(".sectionTitle");
    t != null && t.customSequence ? (a && (a.hidden = !t.includeWarmup), o && (o.hidden = !t.includeCooldown), r && (r.textContent = "Move sequence")) : (a && (a.hidden = !!(t != null && t.warmupOff)), o && (o.hidden = !1), r && (r.textContent = "Kettlebell work")), Re(ae, "warmupList"), Re(oe, "strengthList"), Re(Ge, "cooldownList");
  }
  function Pi() {
    if (!ga) return;
    const { item: t, arr: a } = ga;
    ga = null;
    const o = a.indexOf(t);
    o >= 0 && a.splice(o, 1), Ce === t && (Ce = null);
  }
  function Wo(t) {
    return t.id === "warmupList" ? { arr: ae, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: Ge, kind: "cooldown", group: "Cooldown" } : { arr: oe, kind: "work", group: "" };
  }
  function Ur(t, a) {
    const o = Wo(a), r = Date.now().toString(36);
    return t === "video" ? { id: "video-" + r, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + r, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(z.value) } : { id: "movement-" + r, name: "", group: o.group, kind: o.kind, hidden: !1, useGlobalTiming: !0, duration: Number(k.value) };
  }
  const jo = "cubic-bezier(.34,1.46,.64,1)";
  function zo(t, a) {
    if (pa() || !t) {
      a();
      return;
    }
    const o = (p) => {
      var h;
      return ((h = p.dataset) == null ? void 0 : h.id) || p;
    }, r = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], d = new Map(r().map((p) => [o(p), p.getBoundingClientRect().top]));
    a(), r().forEach((p) => {
      const h = d.get(o(p));
      if (h === void 0) return;
      const m = h - p.getBoundingClientRect().top;
      Math.abs(m) < 0.5 || p.animate([{ transform: "translateY(" + m + "px)" }, { transform: "none" }], { duration: 440, easing: jo });
    });
  }
  function go(t, a) {
    if (!t || pa()) return;
    const o = t.offsetHeight, r = Math.max(0, o - (a || 0));
    t.animate([{ clipPath: "inset(0 0 " + r + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: jo });
  }
  function Ni(t, a, o, r) {
    const { arr: d } = Wo(a), p = Ur(t, a);
    d.splice(Math.max(0, Math.min(o, d.length)), 0, p), ga = { item: p, arr: d }, Ce = p, zo(a.closest(".exerciseScroller,.createStepSlot") || a, () => re());
    const h = a.querySelector(".moveRow.editing");
    return go(h, r), qo(t === "rest"), h;
  }
  function Ae(t) {
    for (let a = t; a && a.nodeType === 1; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if (/(auto|scroll)/.test(o) && a.scrollHeight > a.clientHeight) return a;
    }
    return null;
  }
  const _n = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function ce(t, a) {
    const o = document.createElement("div");
    return o.className = "addGhost" + (t === "movement" ? "" : " rest"), o.innerHTML = '<span class="addGhostGrip">' + Oo + '</span><span class="addGhostText"><strong>' + Zt(a[0]) + "</strong><small>" + Zt(a[1]) + "</small></span>", s("workoutModal").appendChild(o), o;
  }
  function sn(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function Vo(t, a, o, r) {
    (Ce || ga) && (Pi(), Ce = null, re());
    const d = t.getBoundingClientRect(), p = ce(a, _n[a]);
    p.setAttribute("aria-hidden", "true"), p.style.width = d.width + "px", p.style.height = d.height + "px", p.style.transform = "translate(" + d.left + "px," + d.top + "px)", t.classList.add("lifting");
    const h = Ae(t);
    return Go({
      ghost: p,
      origin: d,
      sx: o,
      sy: r,
      scroller: h,
      column: t.closest(".exerciseScroller,.createFlow") || h,
      home: () => t.getBoundingClientRect(),
      onDrop: (m, x, C) => {
        sn(p), t.classList.remove("lifting"), Ni(a, m, x, C);
      },
      onReturn: () => {
        sn(p), t.classList.remove("lifting");
      }
    });
  }
  function Go({ ghost: t, origin: a, sx: o, sy: r, scroller: d, column: p, home: h, onDrop: m, onReturn: x, rowLook: C = !1 }) {
    var _s;
    const L = !pa(), T = ((_s = i.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : _s.offsetHeight) || 80, R = o - a.left, j = r - a.top, _ = 44;
    let F = o, D = r, ft = a.left, Bt = a.top, ht = 0, Nt = 0, wt = !L, Et = null, Pt = null, Me = -1, ra = 0, De = null;
    const wi = () => ["warmupList", "strengthList", "cooldownList"].map((Kt) => s(Kt)).filter((Kt) => Kt && Kt.getClientRects().length && !Kt.closest("[hidden]")), kt = (Kt) => {
      if (Kt === Et) return;
      Et = Kt, t.classList.toggle("overList", !!Kt || C);
      const we = Kt ? Kt.getBoundingClientRect().width : a.width;
      t.style.width = we + "px", t.style.height = (Kt ? T : a.height) + "px";
    }, Yt = (Kt) => {
      Kt.classList.add("leaving"), Kt.style.height = "0px", Kt.style.marginTop = "-8px", setTimeout(() => Kt.remove(), L ? 320 : 0);
    }, sa = (Kt, we, He) => {
      if (Pt && Pt.parentNode === Kt && Me === He || (Pt && (Yt(Pt), Pt = null, Me = -1), !Kt)) return;
      const da = document.createElement("div");
      da.className = "dropSlot", Kt.insertBefore(da, we), Pt = da, Me = He, da.getBoundingClientRect(), da.style.height = T + "px", da.style.marginTop = "0px";
    }, la = () => {
      let Kt = null, we = 1 / 0;
      for (const An of wi()) {
        const Xt = An.getBoundingClientRect();
        if (F < Xt.left - 48 || F > Xt.right + 48) continue;
        const le = Xt.top - 28, Be = Xt.bottom + 28, Za = D < le ? le - D : D > Be ? D - Be : 0;
        Za < we && (we = Za, Kt = An);
      }
      const He = p == null ? void 0 : p.getBoundingClientRect(), Ya = He && F >= He.left && F <= He.right && D >= He.top && D <= He.bottom || we === 0 ? Kt : null;
      if (Ya) {
        const An = [...Ya.children].filter((le) => le.classList.contains("moveRow"));
        let Xt = An.findIndex((le) => {
          const Be = le.getBoundingClientRect();
          return D < Be.top + Be.height / 2;
        });
        Xt < 0 && (Xt = An.length), sa(Ya, An[Xt] || null, Xt);
      } else sa(null);
      kt(Ya);
    }, td = () => {
      if (De) return De.aim();
      if (Et) {
        const Kt = Et.getBoundingClientRect();
        let we = D - T / 2;
        return Pt && (we = we * 0.6 + Pt.getBoundingClientRect().top * 0.4), { x: Kt.left, y: we };
      }
      return { x: F - R, y: D - j };
    }, Es = (Kt, we, He, da) => {
      t.style.transform = "translate(" + ft + "px," + Bt + "px) rotate(" + Kt + "deg) rotate(" + we + "rad) scale(" + He + "," + da + ") rotate(" + -we + "rad)";
    }, ed = () => {
      if (ra = requestAnimationFrame(ed), !wt) {
        const Xt = F - o, le = D - r, Be = Math.min(Math.hypot(Xt, le) / _, 1);
        ft = a.left + Xt * 0.35, Bt = a.top + le * 0.35, Es(0, Math.atan2(le, Xt), 1 + 0.155 * Be, 1 - 0.1 * Be);
        return;
      }
      const Kt = td();
      if (!L) {
        ft = Kt.x, Bt = Kt.y, Es(0, 0, 1, 1), De && (cancelAnimationFrame(ra), De.done());
        return;
      }
      const we = De ? De.k : 0.17, He = De ? De.d : 0.7;
      ht = (ht + (Kt.x - ft) * we) * He, Nt = (Nt + (Kt.y - Bt) * we) * He, ft += ht, Bt += Nt;
      const da = Math.hypot(ht, Nt), Ya = Math.min(da / 48, 1), An = Et || De ? 0 : Math.max(-5, Math.min(5, ht * 0.32));
      Es(An, Math.atan2(Nt, ht), 1 + 0.1 * Ya, 1 - 0.063 * Ya), De && da < 0.15 && Math.hypot(Kt.x - ft, Kt.y - Bt) < 0.6 && (cancelAnimationFrame(ra), De.done());
    }, ad = setInterval(() => {
      if (!d || De) return;
      const Kt = d.getBoundingClientRect(), we = 64, He = D < Kt.top + we ? -(Kt.top + we - D) / 4 : D > Kt.bottom - we ? (D - (Kt.bottom - we)) / 4 : 0;
      He && (d.scrollTop += Math.max(-18, Math.min(18, He)), la());
    }, 30);
    ra = requestAnimationFrame(ed);
    let Sl = !1;
    const sr = (Kt, we) => {
      if (Sl) return;
      Sl = !0, cancelAnimationFrame(ra);
      const He = Pt ? Pt.offsetHeight : T;
      !Kt && Pt && (Pt.remove(), Pt = null), Kt ? m(Kt, we, He) : x();
    };
    return {
      move(Kt, we) {
        F = Kt, D = we, !wt && Math.hypot(F - o, D - r) > _ && (wt = !0, ht = (F - o) * 0.085, Nt = (D - r) * 0.085), wt && la();
      },
      drop(Kt) {
        clearInterval(ad);
        const we = Et, He = Me;
        if (!Kt && we && Pt) {
          const da = Pt;
          De = { k: 0.24, d: 0.62, aim: () => {
            const Ya = da.getBoundingClientRect();
            return { x: Ya.left, y: Ya.top };
          }, done: () => sr(we, He) }, setTimeout(() => sr(we, He), 650), L || (cancelAnimationFrame(ra), sr(we, He));
          return;
        }
        sa(null), kt(null), De = { k: 0.2, d: 0.66, aim: () => {
          const da = h();
          return { x: da.left, y: da.top };
        }, done: () => sr(null) }, setTimeout(() => sr(null), 650), L || (cancelAnimationFrame(ra), sr(null));
      }
    };
  }
  function Ii(t, a) {
    let o = !1;
    t.addEventListener("click", (r) => {
      if (o) {
        o = !1, r.preventDefault();
        return;
      }
      if (Yn()) {
        br(a);
        return;
      }
      const d = s("strengthList"), p = Ni(a, d, Wo(d).arr.length, 0);
      p == null || p.scrollIntoView({ block: "nearest", behavior: pa() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (r) => {
      if (r.button !== void 0 && r.button !== 0) return;
      const d = r.pointerId, p = r.clientX, h = r.clientY;
      let m = null, x = !1;
      try {
        t.setPointerCapture(d);
      } catch {
      }
      const C = (D) => {
        if (D.pointerId === d) {
          if (D.pointerType === "mouse" && D.buttons === 0) {
            F(!1);
            return;
          }
          if (!m) {
            if (Math.hypot(D.clientX - p, D.clientY - h) < 6) return;
            m = Vo(t, a, p, h);
          }
          m.move(D.clientX, D.clientY);
        }
      }, L = (D) => {
        D.pointerId === d && F(!1);
      }, T = (D) => {
        D.pointerId === d && F(!0);
      }, R = () => F(!1), j = () => F(!0), _ = (D) => {
        D.key === "Escape" && m && (D.preventDefault(), D.stopPropagation(), F(!0));
      };
      function F(D) {
        if (!x && (x = !0, window.removeEventListener("pointermove", C, !0), window.removeEventListener("pointerup", L, !0), window.removeEventListener("pointercancel", T, !0), window.removeEventListener("keydown", _, !0), window.removeEventListener("blur", j), t.removeEventListener("lostpointercapture", R), m)) {
          const ft = m;
          m = null, o = !0, setTimeout(() => {
            o = !1;
          }, 0), ft.drop(D);
        }
      }
      window.addEventListener("pointermove", C, !0), window.addEventListener("pointerup", L, !0), window.addEventListener("pointercancel", T, !0), window.addEventListener("keydown", _, !0), window.addEventListener("blur", j), t.addEventListener("lostpointercapture", R);
    });
  }
  const ka = (xl = window.matchMedia) == null ? void 0 : xl.call(window, "(max-width: 620px)");
  function Yn() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const vr = (t) => t.charAt(0).toUpperCase() + t.slice(1), qa = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let Dn = null, ke = null;
  function ln(t, a, o, r) {
    Ye(), s("sheetTitle").textContent = t;
    const d = s("sheetBody");
    d.innerHTML = "", d.appendChild(a), Dn = o || null, s("sheet").setAttribute("aria-hidden", "false"), s("sheetScrim").classList.add("open"), s("sheet").classList.add("open"), setTimeout(() => {
      if (!s("sheet").classList.contains("open") || !d.contains(a)) return;
      const p = r ? d.querySelector("input[data-f=url],input[data-f=name]") : d.querySelector("button,input,select");
      p == null || p.focus({ preventScroll: !0 });
    }, pa() ? 0 : 360);
  }
  function Ye() {
    const t = s("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), s("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(i.activeElement) && i.activeElement.blur();
    const a = Dn;
    Dn = null, a == null || a(), setTimeout(ze, 0);
  }
  s("sheetScrim").addEventListener("click", Ye), s("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Ye());
  });
  function Uo(t, a) {
    const o = Bi(t, a.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Ye(), re(), pe(vr(qa(t)) + " updated");
      },
      onCancel: Ye,
      onHide() {
        t.hidden = !t.hidden, Ye(), re(), pe((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Ye();
        const r = a.indexOf(t);
        r < 0 || (a.splice(r, 1), re(), pe("Removed " + t.name, { label: "Undo", run: () => {
          a.splice(Math.min(r, a.length), 0, t), re();
        } }));
      }
    });
    ln("Edit " + qa(t), o, null, !1);
  }
  function Zn() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, o, r, d]) => {
      const p = document.createElement("button");
      p.type = "button", p.className = "sheetChoice", p.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Oa(o) + "</span><span><strong>" + r + "</strong><small>" + d + "</small></span>", p.addEventListener("click", () => br(a)), t.appendChild(p);
    }), ln("Add to the move", t, null, !1);
  }
  function br(t) {
    ke && Bn();
    const a = Ur(t, s("strengthList")), o = Bi(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Ye(), Os(a, t);
      },
      onCancel: Ye
    });
    ln("New " + qa(a), o, null, !0);
  }
  const Ze = s("workoutModal").querySelector(".modalStatic"), Kn = { parent: Ze.parentNode, next: Ze.nextSibling };
  function Mn() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Ze);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", Ye), t.appendChild(a), ln("Setup", t, () => {
      Kn.parent.insertBefore(Ze, Kn.next), vo();
    }, !1);
  }
  function vo() {
    var a, o;
    const t = s("setupSummaryName");
    t && (t.textContent = (((a = s("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((o = te[At]) == null ? void 0 : o.name) || "Move", s("setupSummaryMeta").textContent = xn.textContent);
  }
  s("setupSummary").addEventListener("click", Mn), s("addFab").addEventListener("click", Zn);
  function $n() {
    const t = s("strengthList");
    return Ae(t) || t.closest(".exerciseScroller");
  }
  function Hi() {
    const t = s("strengthList").getBoundingClientRect(), a = ($n() || s("strengthList")).getBoundingClientRect(), o = (ke == null ? void 0 : ke.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(a.top + 12, Math.min(a.bottom - o - 96, a.top + a.height * 0.55 - o / 2)), width: t.width, height: o };
  }
  function Os(t, a) {
    var m;
    const o = ce(a, [t.name || _n[a][0], "Drag into place"]);
    o.classList.add("overList", "hovering"), o.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const r = document.createElement("span");
    r.className = "addGhostActions", r.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Zt(t.name) + '">✕</button>', o.appendChild(r), ke = { item: t, type: a, ghost: o };
    const d = ((m = i.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : m.offsetHeight) || 64;
    o.style.width = s("strengthList").getBoundingClientRect().width + "px", o.style.height = d + "px";
    const p = Hi(), h = ea.querySelector(".modal").getBoundingClientRect().bottom;
    o.style.transform = "translate(" + p.left + "px," + h + "px)", o.getBoundingClientRect(), pa() || (o.classList.add("rising"), setTimeout(() => o.classList.remove("rising"), 650)), o.style.transform = "translate(" + p.left + "px," + p.top + "px)", r.querySelector("[data-a=end]").addEventListener("click", Bn), r.querySelector("[data-a=discard]").addEventListener("click", Yr), o.addEventListener("pointerdown", Fi);
  }
  function Fi(t) {
    if (!ke || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: a, ghost: o } = ke, r = t.pointerId;
    try {
      o.setPointerCapture(r);
    } catch {
    }
    o.classList.remove("hovering", "rising"), o.classList.add("held");
    const d = o.getBoundingClientRect(), p = $n(), h = Go({
      ghost: o,
      origin: { left: d.left, top: d.top, width: d.width, height: d.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: p,
      column: s("strengthList").closest(".exerciseScroller,.createFlow") || p,
      rowLook: !0,
      home: Hi,
      onDrop: (F, D, ft) => {
        ke = null, sn(o), wr(a, F, D, ft);
      },
      onReturn: () => {
        o.classList.remove("held"), o.classList.add("hovering");
      }
    });
    let m = !1;
    const x = (F) => {
      if (F.pointerId === r) {
        if (F.pointerType === "mouse" && F.buttons === 0) {
          _(!1);
          return;
        }
        h.move(F.clientX, F.clientY);
      }
    }, C = (F) => {
      F.pointerId === r && _(!1);
    }, L = (F) => {
      F.pointerId === r && _(!0);
    }, T = () => _(!1), R = () => _(!0), j = (F) => {
      F.key === "Escape" && (F.preventDefault(), _(!0));
    };
    function _(F) {
      m || (m = !0, window.removeEventListener("pointermove", x, !0), window.removeEventListener("pointerup", C, !0), window.removeEventListener("pointercancel", L, !0), window.removeEventListener("keydown", j, !0), window.removeEventListener("blur", R), o.removeEventListener("lostpointercapture", T), h.drop(F));
    }
    window.addEventListener("pointermove", x, !0), window.addEventListener("pointerup", C, !0), window.addEventListener("pointercancel", L, !0), window.addEventListener("keydown", j, !0), window.addEventListener("blur", R), o.addEventListener("lostpointercapture", T);
  }
  function wr(t, a, o, r) {
    const d = Wo(a);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = d.kind, d.group && (!t.group || t.group === "Movement") && (t.group = d.group)), d.arr.splice(Math.max(0, Math.min(o, d.arr.length)), 0, t), zo(a.closest(".exerciseScroller,.createStepSlot") || a, () => re()), go(a.querySelector('.moveRow[data-id="' + t.id + '"]'), r), pe(vr(qa(t)) + " added");
  }
  function Bn() {
    var r;
    if (!ke) return;
    const { item: t, ghost: a } = ke;
    ke = null, sn(a);
    const o = s("strengthList");
    wr(t, o, Wo(o).arr.length, 0), (r = o.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || r.scrollIntoView({ block: "nearest", behavior: pa() ? "auto" : "smooth" });
  }
  function Yr() {
    if (!ke) return;
    const t = ke.ghost;
    ke = null, sn(t), pe("Discarded");
  }
  function Yo() {
    ke && (ke.ghost.remove(), ke = null);
  }
  window.addEventListener("resize", () => {
    if (ke != null && ke.ghost.classList.contains("hovering")) {
      const t = Hi();
      ke.ghost.style.width = t.width + "px", ke.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (yl = ka == null ? void 0 : ka.addEventListener) == null || yl.call(ka, "change", () => {
    Ye(), ke && !Yn() && Bn(), Ri();
  });
  {
    const t = s("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function ze() {
    const t = s("workoutModal"), a = window.visualViewport;
    if (!t.classList.contains("open") || !Yn()) {
      xr();
      return;
    }
    const o = a ? a.offsetTop : 0, r = a ? a.offsetLeft : 0, d = a ? a.width : window.innerWidth, p = a ? a.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: d + "px", height: p + "px", top: o + "px", left: r + "px" });
    const h = t.getBoundingClientRect();
    Math.abs(h.top - o) > 0.5 && (t.style.top = 2 * o - h.top + "px"), Math.abs(h.left - r) > 0.5 && (t.style.left = 2 * r - h.left + "px");
  }
  function xr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => s("workoutModal").style.removeProperty(t));
  }
  (kl = window.visualViewport) == null || kl.addEventListener("resize", ze), (Ml = window.visualViewport) == null || Ml.addEventListener("scroll", ze), window.addEventListener("resize", ze), window.addEventListener("scroll", ze, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ze, 250));
  function Xn() {
    oe.length > 0;
    const t = s("addMovementBtn"), a = s("addRestBtn");
    t && (t.innerHTML = Oo + "<span>Add movement</span>"), a && (a.innerHTML = Oo + "<span>Add rest</span>");
    const o = s("addVideoBtn");
    o && (o.innerHTML = Oo + "<span>Add video</span>");
  }
  function bo() {
    const t = s("useGlobalTiming").checked, a = s("addMovementDuration"), o = s("addMovementUnit");
    a.disabled = t, o.disabled = t, a.parentElement.style.opacity = t ? ".38" : "1", s("globalTimingValue").textContent = "Use global timing · " + ta(k.value);
    const r = s("useGlobalRestTiming").checked, d = s("addRestDuration"), p = s("addRestUnit");
    d.disabled = r, p.disabled = r, d.parentElement.style.opacity = r ? ".38" : "1", s("globalRestTimingValue").textContent = "Use global timing · " + ta(z.value);
  }
  let Ma = "movement";
  function Zo(t) {
    Ma = t;
    const a = s("movementFields"), o = s("restFields");
    a.hidden = t !== "movement", o.hidden = t !== "rest", s("movementCreatorHeading").textContent = "Add movement", s("movementCreator").setAttribute("aria-label", "Create movement"), bo();
  }
  function Ko() {
    te[At];
    const t = Le ? !0 : s("useGlobalTiming").checked, a = t ? Number(k.value) : mo(
      s("addMovementDuration").value,
      s("addMovementUnit").value
    ), o = Le ? !0 : s("useGlobalRestTiming").checked, r = o ? Number(z.value) : mo(
      s("addRestDuration").value,
      s("addRestUnit").value
    );
    if (Ma === "rest") {
      const d = s("addRestTitle").value.trim() || "Rest", p = s("addRestGroup").value.trim() || "Rest";
      oe.push({
        id: "rest-" + Date.now(),
        name: d,
        group: p,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: o,
        duration: Math.max(5, r || Number(z.value))
      }), re(), s("movementCreator").hidden = !0, s("addRestTitle").value = "Rest", s("addRestGroup").value = "Rest", pe("Rest added"), Le && (B("movements"), $());
    } else {
      const d = s("addMovementInput").value.trim();
      if (!d) return;
      const p = s("addMovementGroup").value.trim() || "Movement";
      oe.push({
        id: "movement-" + Date.now(),
        name: d,
        group: p,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, a || Number(k.value))
      }), s("addMovementInput").value = "", s("addMovementGroup").value = "", re(), s("movementCreator").hidden = !0, pe("Movement added"), Le && (B("movements"), $());
    }
    Xn();
  }
  let Ea = null;
  function pe(t, a) {
    const o = s("toast");
    o.innerHTML = "";
    const r = document.createElement("span");
    if (r.textContent = t, o.appendChild(r), a) {
      const d = document.createElement("button");
      d.type = "button", d.className = "toastAction", d.textContent = a.label, d.addEventListener("click", () => {
        a.run(), o.classList.remove("show", "withAction"), clearTimeout(Ea);
      }), o.appendChild(d);
    }
    o.classList.toggle("withAction", !!a), o.classList.add("show"), clearTimeout(Ea), Ea = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const $o = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Zr = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function yr(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function Sa(t, a) {
    return $o[yr(a)];
  }
  function Ca(t) {
    return Zr[yr(t)];
  }
  function ye(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Rn() {
    return { morning: zt().morningTime || "08:00", evening: zt().eveningTime || "19:00" };
  }
  function Ta(t) {
    const [a, o] = String(t).split(":").map(Number);
    return (a || 0) * 60 + (o || 0);
  }
  function Jn(t) {
    const a = Rn();
    return t.getHours() * 60 + t.getMinutes() >= Ta(a.evening) ? "evening" : "morning";
  }
  function f(t, a) {
    return Qt.checkins.find((o) => o.date === t && o.slot === a);
  }
  function v(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function w() {
    const t = /* @__PURE__ */ new Date(), a = ye(t), o = Jn(t), r = Rn(), d = t.getHours() * 60 + t.getMinutes();
    return o === "morning" && d < Ta(r.morning) || v(f(a, o)) ? null : o;
  }
  const S = s("checkinModal"), I = s("checkinTab"), G = s("checkinBadge"), U = { mood: { input: s("moodInput"), fill: s("moodFill") }, energy: { input: s("energyLevelInput"), fill: s("energyLevelFill") } };
  function nt(t) {
    const { input: a, fill: o } = U[t];
    o.style.width = a.value + "%", a.setAttribute("aria-valuetext", Sa(t, a.value));
  }
  Object.keys(U).forEach((t) => U[t].input.addEventListener("input", () => nt(t)));
  let Z = null;
  function rt() {
    const t = Rn(), a = /* @__PURE__ */ new Date(), o = a.getHours() * 60 + a.getMinutes();
    return o < Ta(t.morning) ? "Next check-in at " + t.morning : o < Ta(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function dt() {
    const t = Rn(), a = /* @__PURE__ */ new Date(), o = a.getHours() * 60 + a.getMinutes(), r = (d, p) => {
      const [h, m] = d.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (p ? 1 : 0), h, m);
    };
    return o < Ta(t.morning) ? { date: r(t.morning), time: t.morning } : o < Ta(t.evening) ? { date: r(t.evening), time: t.evening } : { date: r(t.morning, !0), time: t.morning };
  }
  let vt = null, Ot = null;
  function _t() {
    if (w()) {
      qt(), ue();
      return;
    }
    const t = dt(), a = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), o = Math.floor(a / 3600), r = Math.floor(a % 3600 / 60), d = a % 60;
    s("peekCountdown").textContent = o + ":" + String(r).padStart(2, "0") + ":" + String(d).padStart(2, "0"), s("peekAt").textContent = "Available at " + t.time;
  }
  function xt() {
    _t(), I.classList.add("peek"), clearInterval(Ot), Ot = setInterval(_t, 1e3), clearTimeout(vt), vt = setTimeout(qt, 6e3);
  }
  function qt() {
    I.classList.remove("peek"), clearInterval(Ot), clearTimeout(vt);
  }
  function Rt() {
    const t = w();
    if (!t) {
      I.classList.contains("peek") ? qt() : xt();
      return;
    }
    Z = { date: ye(/* @__PURE__ */ new Date()), slot: t };
    const o = f(Z.date, t), r = Qt.checkins.find((d) => v(d));
    Object.keys(U).forEach((d) => {
      U[d].input.value = (o == null ? void 0 : o[d]) ?? (r == null ? void 0 : r[d]) ?? 50, nt(d);
    }), s("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", S.classList.add("open"), S.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => U.mood.input.focus());
  }
  function bt() {
    S.classList.remove("open"), S.setAttribute("aria-hidden", "true"), Z && (jt = Z.date + "-" + Z.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", jt);
    } catch {
    }
    Z = null, ue();
  }
  function $t() {
    if (!Z) return;
    if (v(f(Z.date, Z.slot))) {
      bt();
      return;
    }
    const { date: t, slot: a } = Z;
    let o = f(t, a);
    o || (o = { date: t, slot: a }, Qt.checkins.unshift(o), Qt.checkins = Qt.checkins.slice(0, 2e3)), o.mood = Number(U.mood.input.value), o.energy = Number(U.energy.input.value), o.scale = 100, o.at = (/* @__PURE__ */ new Date()).toISOString(), Ue(), c.fire("checkin", { slot: a, mood: o.mood, energy: o.energy, mood_label: Sa("mood", o.mood), energy_label: Sa("energy", o.energy) }), pe((a === "morning" ? "Morning" : "Evening") + " check-in saved"), bt(), Ee(), Pe(), ro(), Ga();
  }
  let jt = "";
  try {
    jt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ue() {
    const t = w();
    G.hidden = !t, I.hidden = !t, t || qt(), I.classList.toggle("due", !!t), I.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : rt()), I.title = t ? "Check in now" : rt();
  }
  function St() {
    ue();
    const t = w();
    !t || S.classList.contains("open") || zt().checkinAutoOpen !== !1 && (s("app").classList.contains("house") || !Lt.home.classList.contains("active") || ea.classList.contains("open") || jt !== ye(/* @__PURE__ */ new Date()) + "-" + t && Rt());
  }
  I.addEventListener("click", Rt), s("checkinLater").addEventListener("click", bt), s("checkinSave").addEventListener("click", $t), S.addEventListener("click", (t) => {
    t.target === S && bt();
  }), S.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), bt());
  }), setInterval(St, 3e4);
  function Ee() {
    const t = ye(/* @__PURE__ */ new Date()), a = (o) => Qt.checkins.find((r) => r.date === t && r[o] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([o, r]) => {
      const d = a(o);
      s(r).textContent = d ? Sa(o, d[o]) : "—";
    });
  }
  function Pe() {
    const t = s("feelCard");
    if (!t) return;
    const a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), r = [...Array(7)].map((C, L) => {
      const T = new Date(o.getFullYear(), o.getMonth(), o.getDate() + L), R = ye(T), j = Qt.checkins.filter((F) => F.date === R), _ = (F) => {
        const D = j.map((ft) => ft[F]).filter((ft) => ft != null);
        return D.length ? D.reduce((ft, Bt) => ft + Bt, 0) / D.length : null;
      };
      return { d: T, key: R, mood: _("mood"), energy: _("energy"), count: j.filter(v).length, future: T > a && R !== ye(a) };
    }), d = (C) => {
      const L = r.map((T) => T[C]).filter((T) => T != null);
      return L.length ? L.reduce((T, R) => T + R, 0) / L.length : null;
    }, p = d("mood"), h = d("energy"), m = (C, L) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + C + "</span><span>" + (L == null ? "—" : Zt(Sa("", L))) + '</span></div><div class="feelTrack"><span style="width:' + (L == null ? 0 : Math.max(4, L)) + "%;background:" + (L == null ? "transparent" : Ca(L)) + '"></span></div></div>', x = r.filter((C) => C.mood != null && C.energy != null).sort((C, L) => L.mood + L.energy - (C.mood + C.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (p == null ? "No check-ins yet" : Zt(Sa("", (p + h) / 2))) + '</div><div class="weekCopy">' + (p == null ? "Your first check-in will appear here." : "on average this week" + (x ? " · best day " + Zt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(x.d)) : "")) + '</div></div></div><div class="feelDays">' + r.map(
      (C) => '<div class="weekChip feelDay' + (C.future ? " future" : "") + (C.key === ye(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Zt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(C.d)) + "</strong>" + (C.count >= 2 ? '<span class="weekTick">' + Oa("check") + "</span>" : '<span class="feelDots">' + "●".repeat(C.count) + "</span>") + "</div>" + m("Mood", C.mood) + m("Energy", C.energy) + "</div>"
    ).join("") + "</div>";
  }
  const va = s("upcomingCountSetting");
  va.addEventListener("change", () => {
    Gn = va.value === "all" ? "all" : Number(va.value), Gi();
  });
  const ba = s("tempoRevealBtn"), Oi = s("tempoExperiment"), _a = s("tempoQuad"), Sn = s("tempoDot"), ie = s("tempoEstimate"), Qn = s("tempoReadout");
  let Wa = { x: 0.5, y: 0.5 }, Pn = !1, Nn = { total: 20, work: 45, rest: 15 };
  function qi(t, a, o, r) {
    const d = Math.max(a, Math.min(o, t));
    return Math.round((d - a) / r) * r + a;
  }
  function Xo(t, a) {
    const o = (t - 0.5) * 2, r = (a - 0.5) * 2, d = qi(
      Nn.total + o * 5 + r * 8,
      Number(N.min),
      Number(N.max),
      Number(N.step)
    ), p = qi(
      Nn.work + o * 10 + r * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), h = qi(
      Nn.rest + o * 6 + r * 6,
      Number(z.min),
      Number(z.max),
      Number(z.step)
    );
    return N.value = d, k.value = p, z.value = h, st.textContent = p + " sec", ct.textContent = h + " sec", _i(), { total: d, work: p, rest: h };
  }
  function ua(t, a) {
    const o = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", r = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", d = Xo(t, a);
    Qn.textContent = o + " + " + r, ie.textContent = d.total + " min", _a.setAttribute("aria-valuetext", o + " and " + r + ", estimated " + d.total + " minutes");
  }
  function Kr(t) {
    const a = _a.getBoundingClientRect(), o = Math.max(0, Math.min(1, (t.clientX - a.left) / a.width)), r = Math.max(0, Math.min(1, (t.clientY - a.top) / a.height));
    Wa = { x: o, y: r }, Sn.style.left = o * 100 + "%", Sn.style.top = r * 100 + "%", ua(o, r);
  }
  ba.addEventListener("click", () => {
    const t = Oi.hidden;
    Oi.hidden = !t, ba.setAttribute("aria-expanded", t ? "true" : "false"), ba.textContent = t ? "Now close this" : "Don’t try this!", t && (Nn = {
      total: Number(N.value),
      work: Number(k.value),
      rest: Number(z.value)
    }, Wa = { x: 0.5, y: 0.5 }, Sn.style.left = "50%", Sn.style.top = "50%", ua(Wa.x, Wa.y));
  }), i.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), i.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === t));
  }));
  const $r = s("testingFeedbackForm"), qs = s("testingFeedbackThanks"), Md = s("testingFeedbackAgain");
  $r.addEventListener("submit", (t) => {
    t.preventDefault(), $r.hidden = !0, qs.hidden = !1, pe("Feedback captured for prototype");
  }), Md.addEventListener("click", (t) => {
    t.preventDefault(), $r.reset(), i.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), qs.hidden = !0, $r.hidden = !1;
  }), _a.addEventListener("pointerdown", (t) => {
    var a;
    Pn = !0, Kr(t);
    try {
      (a = _a.setPointerCapture) == null || a.call(_a, t.pointerId);
    } catch {
    }
  }), _a.addEventListener("pointermove", (t) => {
    Pn && Kr(t);
  }), _a.addEventListener("pointerup", (t) => {
    Pn && (Pn = !1, Kr(t), re());
  }), _a.addEventListener("pointercancel", () => Pn = !1), _a.addEventListener("keydown", (t) => {
    let { x: a, y: o } = Wa, r = !0;
    t.key === "ArrowLeft" ? a -= 0.05 : t.key === "ArrowRight" ? a += 0.05 : t.key === "ArrowUp" ? o -= 0.05 : t.key === "ArrowDown" ? o += 0.05 : r = !1, r && (t.preventDefault(), a = Math.max(0, Math.min(1, a)), o = Math.max(0, Math.min(1, o)), Wa = { x: a, y: o }, Sn.style.left = a * 100 + "%", Sn.style.top = o * 100 + "%", ua(a, o), re());
  });
  const ea = s("workoutModal");
  let Jo = null;
  function wo(t) {
    return t.map((a) => ({ ...a }));
  }
  function _l() {
    const t = te[At];
    return {
      key: At,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: wo(ae),
      strength: wo(oe),
      cooldown: wo(Ge),
      total: Number(N.value),
      work: Number(k.value),
      rest: Number(z.value),
      rounds: Number(Jt.value) || 1
    };
  }
  function Xr(t = !1) {
    Le = !!t, Ce = null, ga = null, Ye(), Yo(), Jo = _l(), s("moveEditorTitle").textContent = Le ? "Create new move" : "Edit move", s("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", s("moveEditorSubtitle").hidden = !Le, s("warmupRow").hidden = Le, s("deleteMoveOpen").hidden = Le;
    const a = s("createMoveOptions");
    a.hidden = !Le;
    {
      const o = te[At];
      s("includeWarmupPreset").checked = !!(o != null && o.includeWarmup), s("includeCooldownPreset").checked = !!(o != null && o.includeCooldown);
    }
    if (Dl(), Le) {
      s("useGlobalTiming").checked = !0, s("useGlobalRestTiming").checked = !0;
      const o = te[At];
      Di((o == null ? void 0 : o.preset) || "movement", !1);
    }
    s("movementCreator").hidden = !0, Zo("movement"), Xn(), bo(), Oi.hidden = !0, ba.setAttribute("aria-expanded", "false"), ba.textContent = "Don’t try this!", ea.classList.toggle("createMode", Le), ea.querySelector(".modal").classList.toggle("createMode", Le), ea.classList.add("open"), ea.setAttribute("aria-hidden", "false"), ze(), Le && gt();
  }
  function Sd() {
    const t = te[At];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function Dl() {
    const t = Sd(), a = s("warmupSwitch");
    a.classList.toggle("on", t), a.setAttribute("aria-checked", String(t));
  }
  s("warmupSwitch").addEventListener("click", () => {
    const t = te[At];
    t && (t.customSequence ? (s("includeWarmupPreset").checked = !t.includeWarmup, mr()) : (t.warmupOff = !t.warmupOff, re()), Dl());
  });
  function Jr() {
    Ye(), Yo(), xr(), ga = null, Ce = null, ea.classList.contains("createMode") && et(), ea.classList.remove("createMode"), ea.querySelector(".modal").classList.remove("createMode"), ea.classList.remove("open"), ea.setAttribute("aria-hidden", "true");
  }
  function Bl() {
    if (!Jo) return;
    const t = Jo;
    t.profile && (te[t.key] = JSON.parse(JSON.stringify(t.profile))), At = t.key, ae = wo(t.warmup), oe = wo(t.strength), Ge = wo(t.cooldown), N.value = t.total, k.value = t.work, z.value = t.rest, Jt.value = t.rounds || 1;
    const a = te[At];
    if (a) {
      i.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === At));
      const o = i.querySelector(".workoutPanel.active");
      if (o) {
        const r = o.querySelector(".workoutName");
        r && (r.textContent = a.name);
        const d = o.querySelector(".panelCollapsedText");
        d && (d.textContent = a.name);
        const p = o.querySelector(".sourceTag");
        p && (p.textContent = a.source);
      }
      g.value = a.name;
    }
    re();
  }
  s("cancelWorkoutEdit").addEventListener("click", () => {
    if (Le) {
      const t = At;
      delete te[t], Le = !1, Fa = null, Ha(Qt.order.find((a) => te[a]) || Object.keys(te)[0]);
    } else
      Bl();
    Jr();
  }), s("saveWorkoutEdit").addEventListener("click", () => {
    Ye(), ke && Bn();
    const t = te[At], a = g.value.trim() || "New move";
    if (t && (t.name = a), Pi(), Ce = null, re(), Le && t)
      je(At, t), i.querySelectorAll(".workoutPanel[data-workout]").forEach((o) => o.classList.toggle("active", o.dataset.workout === At)), Le = !1, Fa = null, Qt.order.includes(At) || Qt.order.push(At), pe("Move created");
    else {
      const o = i.querySelector(".workoutPanel.active");
      if (o) {
        const r = o.querySelector(".workoutName");
        r && (r.textContent = a);
        const d = o.querySelector(".panelCollapsedText");
        d && (d.textContent = a);
      }
      pe("Move saved");
    }
    Jo = null, Jr(), Ue();
  }), ea.addEventListener("click", (t) => {
    if (t.target === ea) {
      if (Le) {
        const a = At;
        delete te[a], Le = !1, Fa = null, Ha(Qt.order.find((o) => te[o]) || Object.keys(te)[0]);
      } else
        Bl();
      Jr();
    }
  }), Ii(s("addMovementBtn"), "movement"), Ii(s("addRestBtn"), "rest"), Ii(s("addVideoBtn"), "video"), s("closeMovementCreator").addEventListener("click", () => {
    s("movementCreator").hidden = !0;
  }), s("useGlobalTiming").addEventListener("change", bo), s("useGlobalRestTiming").addEventListener("change", bo), i.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Di(t.dataset.movePreset, !0), re();
  })), s("includeWarmupPreset").addEventListener("change", mr), s("includeCooldownPreset").addEventListener("change", mr), s("includeWarmupPreset").addEventListener("change", $), s("includeCooldownPreset").addEventListener("change", $), g.addEventListener("input", $), g.addEventListener("input", vo), s("confirmAddMovement").addEventListener("click", Ko), s("confirmAddRest").addEventListener("click", Ko), s("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Ko();
  });
  const kr = s("countdown"), Qo = s("countNum"), In = s("countdownPixelCanvas");
  let Mr = null, Ws = "appear";
  class Wi {
    constructor(a, o, r, d, p, h, m) {
      this.width = a.width, this.height = a.height, this.ctx = o, this.x = r, this.y = d, this.color = p, this.speed = (Math.random() * 0.8 + 0.1) * h, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = m, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Qr = [], js = 1, zs = 1;
  function xo() {
    const t = parseFloat(getComputedStyle(s("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Rl() {
    var C;
    if (!In) return;
    const t = xo(), a = Math.max(1, window.innerWidth / t), o = Math.max(1, window.innerHeight / t);
    js = a, zs = o;
    const r = Math.min(window.devicePixelRatio || 1, 2);
    In.width = Math.floor(a * r), In.height = Math.floor(o * r), In.style.width = a + "px", In.style.height = o + "px";
    const d = In.getContext("2d");
    d.setTransform(r, 0, 0, r, 0, 0);
    const p = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], h = 12, m = (C = window.matchMedia) == null ? void 0 : C.call(window, "(prefers-reduced-motion: reduce)").matches, x = m ? 0 : 0.055;
    Qr = [];
    for (let L = 0; L < a; L += h)
      for (let T = 0; T < o; T += h) {
        const R = L - a / 2, j = T - o / 2, _ = Math.sqrt(R * R + j * j), F = m ? 0 : Math.random() * 75 + _ * 0.05, D = new Wi({ width: a, height: o }, d, L, T, p[Math.floor(Math.random() * p.length)], x, F);
        D.maxSizeInteger = 4, D.maxSize = Math.random() * 3.2 + 0.8, D.sizeStep = 0.35 + Math.random() * 0.45, Qr.push(D);
      }
  }
  function Pl(t) {
    cancelAnimationFrame(Mr), Ws = t;
    const a = In == null ? void 0 : In.getContext("2d");
    if (!a) return;
    function o() {
      a.clearRect(0, 0, js, zs);
      let r = !0;
      Qr.forEach((d) => {
        d[Ws](), d.isIdle || (r = !1);
      }), Ws === "disappear" && r || (Mr = requestAnimationFrame(o));
    }
    Mr = requestAnimationFrame(o);
  }
  function ts() {
    cancelAnimationFrame(Mr), Rl(), Pl("appear"), setTimeout(() => Pl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    kr.classList.contains("active") && ts();
  });
  const Sr = s("pixelTrailCanvas"), ti = Sr.getContext("2d");
  let dn = !0, ei = 0.7, yo = 600, ji = [], ai = null, ko = { x: 0, y: 0, ready: !1 };
  function Nl() {
    const t = u.getBoundingClientRect(), a = xo(), o = Math.min(window.devicePixelRatio || 1, 2), r = Math.max(1, t.width / a), d = Math.max(1, t.height / a);
    Sr.width = Math.max(1, Math.floor(r * o)), Sr.height = Math.max(1, Math.floor(d * o)), Sr.style.width = r + "px", Sr.style.height = d + "px", ti.setTransform(o, 0, 0, o, 0, 0);
  }
  function Il(t, a) {
    if (!dn) return;
    const o = performance.now();
    ko.ready || (ko = { x: t, y: a, ready: !0 });
    const r = 7;
    for (let d = 1; d <= r; d++) {
      const p = d / r;
      ji.push({
        x: ko.x + (t - ko.x) * p,
        y: ko.y + (a - ko.y) * p,
        born: o - (r - d) * 10
      });
    }
    ko = { x: t, y: a, ready: !0 };
  }
  function es(t) {
    if (ai = null, !b) return;
    if (!Lt.workout.classList.contains("active")) {
      ai = requestAnimationFrame(es);
      return;
    }
    const a = u.getBoundingClientRect(), o = xo();
    ti.clearRect(0, 0, a.width / o, a.height / o), dn && (ji = ji.filter((d) => t - d.born < yo), ti.fillStyle = s("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", ji.forEach((d) => {
      const p = (t - d.born) / yo, h = (1 - p) * ei, m = Math.round(d.x / 14) * 14, x = Math.round(d.y / 14) * 14;
      ti.globalAlpha = Math.max(0, h);
      const C = 2 + 5 * (1 - p) * ei;
      ti.fillRect(m - C / 2, x - C / 2, C, C);
    }), ti.globalAlpha = 1), ai = requestAnimationFrame(es);
  }
  u.addEventListener("pointermove", (t) => {
    const a = u.getBoundingClientRect(), o = xo();
    Il((t.clientX - a.left) / o, (t.clientY - a.top) / o);
  }), u.addEventListener("pointerleave", () => ko.ready = !1), new ResizeObserver(Nl).observe(u), Nl(), ai = requestAnimationFrame(es);
  const Cn = s("movementRippleCanvas"), me = Cn.getContext("2d");
  let ni = !0, zi = null, Cd = performance.now();
  function cn() {
    const t = Cn.parentElement.getBoundingClientRect(), a = xo(), o = Math.max(1, t.width / a), r = Math.max(1, t.height / a), d = Math.min(window.devicePixelRatio || 1, 2);
    Cn.width = Math.max(1, Math.floor(o * d)), Cn.height = Math.max(1, Math.floor(r * d)), Cn.style.width = o + "px", Cn.style.height = r + "px", me.setTransform(d, 0, 0, d, 0, 0);
  }
  function Hl() {
    var t;
    return Se || ((t = It[Gt]) == null ? void 0 : t.kind) === "rest";
  }
  function Td() {
    const t = It[Gt];
    return Hl() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function as(t) {
    if (zi = null, !b) return;
    if (!Lt.workout.classList.contains("active")) {
      zi = requestAnimationFrame(as);
      return;
    }
    const a = Cn.parentElement.getBoundingClientRect(), o = xo(), r = Math.max(1, a.width / o), d = Math.max(1, a.height / o);
    if (me.clearRect(0, 0, r, d), ni) {
      const p = Td(), h = (t - Cd) % p / p, m = 15, x = Math.max(8, Math.round(m * d / Math.max(1, r))), C = r / (m + 1), L = d / (x + 1), T = r * 0.5, R = d * 0.52, j = Math.hypot(T, R), F = s("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let D = 1; D <= x; D++)
        for (let ft = 1; ft <= m; ft++) {
          const Bt = ft * C, ht = D * L, Nt = Math.hypot(Bt - T, ht - R) / j, wt = Hl(), Et = wt ? Math.exp(-Math.pow((Nt - (h * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Pt = Math.exp(-Math.pow((Nt - h * 1.25) * 7, 2)), Me = wt ? Et : Pt, ra = wt ? 0.5 + 0.5 * Math.sin(h * Math.PI * 2 - Nt * 3) ** 2 : 0.35 + 0.65 * Math.sin(h * Math.PI * 2 - Nt * 5) ** 2, De = wt ? 1.4 + Me * 4.2 * ra : 1.2 + Me * 5 * ra;
          me.beginPath(), me.arc(Bt, ht, De, 0, Math.PI * 2), me.fillStyle = `rgba(${F},${wt ? 0.08 + Me * 0.48 : 0.05 + Me * 0.55})`, me.fill();
        }
    }
    zi = requestAnimationFrame(as);
  }
  new ResizeObserver(cn).observe(Cn.parentElement), cn(), zi = requestAnimationFrame(as);
  const Vi = s("exerciseTitle"), Hn = s("exerciseMeta"), Vs = s("stepLabel"), Gs = s("digits"), Us = s("fill"), Fn = s("progress"), ns = s("pause"), Ld = s("nextName"), Ad = s("nextMeta"), pn = s("nextIcon"), os = s("skipNextSession");
  let ja = null;
  function Ne(t) {
    for (let a = Math.max(0, t); a < It.length; a++)
      if (!It[a].sessionHidden) return a;
    return -1;
  }
  function se() {
    const t = It[Gt];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Se) {
      const r = Ne(Gt + 1), d = r >= 0 ? It[r] : null;
      return d ? { name: d.name, meta: to(d), icon: Cr(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = Ne(Gt + 1), o = a >= 0 ? It[a] : null;
    return o ? { name: o.name, meta: to(o), icon: Cr(o) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function La() {
    if (!It[Gt]) return It.length;
    const a = Ne(Gt + 1);
    return a < 0 ? It.length : a + 1;
  }
  function Cr(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function to(t) {
    return t.kind === "video" ? "YouTube · " + ho(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function oi() {
    return It.length && It[It.length - 1].round || 1;
  }
  function eo(t) {
    const a = It[t];
    if (!a) return "";
    const o = oi();
    if (o <= 1) return "Step " + (t + 1) + " of " + It.length;
    if (a.roundBreak) return "Round " + a.round + " of " + o + " · Rest";
    const r = It.filter((d) => d.round === a.round && !d.roundBreak).length;
    return "Round " + a.round + " of " + o + " · Step " + (a.roundIndex + 1) + " of " + r;
  }
  function ii() {
    return Fn.querySelector('[data-step="' + Gt + '"]');
  }
  function ri() {
    It[Gt] && Number(Fn.dataset.round) !== (It[Gt].round || 1) && ao(), [...Fn.children].forEach((t) => {
      const a = Number(t.dataset.step);
      t.classList.toggle("done", a < Gt), t.classList.toggle("active", a === Gt), t.classList.toggle("rewindable", a <= Gt), t.disabled = a > Gt, a === Gt && t.style.setProperty("--segment-progress", "0%");
    }), It[Gt] && (Vs.textContent = eo(Gt), di());
  }
  function _e(t) {
    const a = It.indexOf(t);
    a < 0 || a <= Gt || (t.sessionHidden = !t.sessionHidden, un(), pe((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Gi() {
    const t = s("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const a = La(), o = It.slice(a);
    (Gn === "all" ? o : o.slice(0, Math.max(1, Number(Gn) || 1))).forEach((d) => {
      const p = document.createElement("section");
      p.className = "upcomingCard" + (d.sessionHidden ? " sessionHidden" : "") + (us(d) ? " noMeta" : ""), p.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Oa(Cr(d)) + '</div><div><div class="upcomingName">' + Zt(d.name) + '</div><div class="upcomingMeta">' + Zt(to(d)) + (oi() > 1 ? " · round " + d.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (d.sessionHidden ? "Include this session" : "Skip this session") + "</button>", p.querySelector(".skipSessionBtn").addEventListener("click", () => _e(d)), t.appendChild(p);
    });
  }
  function un() {
    var a;
    const t = se();
    Ld.textContent = t.name, Ad.textContent = t.meta, pn.innerHTML = Oa(t.icon);
    {
      const o = Se ? It[Ne(Gt + 1)] : ((a = It[Gt]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : It[Ne(Gt + 1)];
      i.querySelector(".nextCard").classList.toggle("noMeta", !!(o && us(o)));
    }
    if (ja = null, Se) {
      const o = Ne(Gt + 1);
      o >= 0 && (ja = It[o]);
    } else {
      const o = It[Gt];
      if (o && o.rest > 0)
        ja = null;
      else {
        const r = Ne(Gt + 1);
        r >= 0 && (ja = It[r]);
      }
    }
    os && (os.hidden = !ja, os.textContent = ja != null && ja.sessionHidden ? "Include this session" : "Skip this session"), Gi();
  }
  os.addEventListener("click", () => {
    ja && (ja.sessionHidden = !ja.sessionHidden, pe((ja.sessionHidden ? "Hidden " : "Included ") + ja.name + " for this session"), un());
  });
  let Tn = null, is = null;
  function Ui(t, a = {}) {
    const o = te[At];
    c.fire(t, { move: (o == null ? void 0 : o.name) || "", move_id: At, ...a });
  }
  function Ed() {
    const t = te[At];
    Tn = { key: At, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(is), is = setInterval(() => {
      Tn && !xe && Tn.active++;
    }, 1e3), Ui("started", { steps: It.length });
  }
  function rs(t) {
    if (clearInterval(is), !Tn) return;
    const a = Tn;
    Tn = null, Ui(t ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (Qt.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: t }), Qt.history = Qt.history.slice(0, 1e3), Ue(), ro(), Ga());
  }
  let fn = null, Yi = null, Mo = !1;
  function aa() {
    return zt().sounds !== !1;
  }
  function Tr() {
    if (aa())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), fn = fn || new (window.AudioContext || window.webkitAudioContext)(), fn.state === "suspended" && fn.resume();
      } catch {
        fn = null;
      }
  }
  function So(t, a, o, { to: r = t, vol: d = 0.25, type: p = "sine" } = {}) {
    const h = fn.currentTime + a, m = fn.createOscillator(), x = fn.createGain();
    m.type = p, m.frequency.setValueAtTime(t, h), r !== t && m.frequency.exponentialRampToValueAtTime(r, h + o), x.gain.setValueAtTime(1e-4, h), x.gain.exponentialRampToValueAtTime(d, h + 0.01), x.gain.exponentialRampToValueAtTime(1e-4, h + o), m.connect(x).connect(fn.destination), m.start(h), m.stop(h + o + 0.02);
  }
  const _d = {
    tick: () => So(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      So(660, 0, 0.12, { type: "triangle", vol: 0.3 }), So(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => So(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      So(523, 0, 0.16, { type: "triangle" }), So(659, 0.16, 0.16, { type: "triangle" }), So(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function On(t) {
    if (!(!aa() || !fn))
      try {
        fn.state === "suspended" && fn.resume(), _d[t]();
      } catch {
      }
  }
  function Zi() {
    Wt >= 1 && Wt <= 3 && Wt !== Yi && (Yi = Wt, On("tick"));
  }
  function Ys() {
    Tr(), A("workout"), qn();
    const t = Ne(0);
    t >= 0 && It[t].kind === "video" && Er(It[t]);
  }
  function Zs() {
    li(), rs(!1), clearInterval(Ut), clearInterval(Qe), Se = !1, no(!1), s("app").classList.remove("resting"), kr.classList.remove("active"), A("home");
  }
  function qn() {
    kr.classList.add("active");
    let t = 5;
    Qo.textContent = t, On("tick"), requestAnimationFrame(ts), clearInterval(Qe), Qe = setInterval(() => {
      t--, t > 0 ? (Qo.textContent = t, On("tick"), ts()) : (clearInterval(Qe), Qo.textContent = "GO", On("move"), Mo = !0, ts(), setTimeout(() => {
        kr.classList.remove("active"), cancelAnimationFrame(Mr), Ks();
      }, 650));
    }, 1e3);
  }
  function ao() {
    var a;
    Fn.innerHTML = "";
    const t = ((a = It[Math.max(0, Gt)] || It[0]) == null ? void 0 : a.round) || 1;
    Fn.dataset.round = t, It.forEach((o, r) => {
      if ((o.round || 1) !== t) return;
      const d = document.createElement("button");
      d.dataset.step = r, d.type = "button", d.className = "progressSegment", d.setAttribute("aria-label", "Go to " + o.name), d.addEventListener("click", () => {
        r <= Gt && Fl(r);
      }), Fn.appendChild(d);
    });
  }
  function no(t) {
    t = !!t;
    const a = xe !== t;
    if (xe = t, ns.textContent = t ? "Resume" : "Pause", s("app").classList.toggle("paused", t), wa && ne)
      try {
        t ? ne.pauseVideo() : ne.playVideo();
      } catch {
      }
    a && Tn && Ui(t ? "paused" : "resumed");
  }
  function Fl(t) {
    t < 0 || t >= It.length || t > Gt || (clearInterval(Ut), Se = !1, s("app").classList.remove("resting"), Gt = t, no(!1), Lo(), Ut = setInterval(fa, 1e3));
  }
  function Ks() {
    if (Gt = Ne(0), no(!1), ao(), Gt < 0) {
      Vi.textContent = "No activities", Hn.textContent = "Open Edit and enable or add a movement", Hn.hidden = !1;
      return;
    }
    Ed(), Lo(), clearInterval(Ut), Ut = setInterval(fa, 1e3);
  }
  const Lr = s("videoStage"), si = s("videoSound"), Ol = 0, Ki = 1, $s = 2;
  let hn = 0, $i = null, Xi = null, ne = null, oo = null, Co = 0, To = !1, wa = null, Ar = null;
  function ql() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : $i || ($i = new Promise((a, o) => {
      const r = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          r == null || r();
        } catch {
        }
      };
      const d = setInterval(() => {
        var h;
        (h = window.YT) != null && h.Player && (clearInterval(d), clearTimeout(p), a(window.YT));
      }, 100), p = setTimeout(() => {
        clearInterval(d), $i = null, o(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const h = document.createElement("script");
        h.src = "https://www.youtube.com/iframe_api", h.async = !0, h.onerror = () => {
          clearInterval(d), clearTimeout(p), $i = null, o(new Error("YouTube did not load"));
        }, document.head.appendChild(h);
      }
    }), $i);
  }
  function Xs() {
    return Xi || (Xi = ql().then((t) => new Promise((a) => {
      const o = document.createElement("div");
      s("videoFrame").appendChild(o), ne = new t.Player(o, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(ne), onStateChange: (r) => ls(r.data), onError: (r) => Js(r.data) }
      });
    })), Xi.catch(() => {
      Xi = null;
    }), Xi);
  }
  function Er(t) {
    !(t != null && t.videoId) || t.videoError || Xs().then((a) => {
      wa || oo === t.videoId || (oo = t.videoId, Co = Number(t.start) || 0, To = !1, a.mute(), a.loadVideoById({ videoId: t.videoId, startSeconds: Co }));
    }).catch(() => {
    });
  }
  function ss() {
    const t = Ne(Gt + 1);
    t >= 0 && It[t].kind === "video" && Er(It[t]);
  }
  function ls(t) {
    if (!wa) {
      t === Ki && !To && (To = !0, ne.pauseVideo(), ne.seekTo(Co, !0));
      return;
    }
    Lr.classList.toggle("playing", t === Ki), It[Gt] === wa && performance.now() > hn && (t === Ki && xe ? no(!1) : t === $s && !xe && no(!0)), t === Ki && ge(wa.videoId, ne.getDuration()) && Ue(), t === Ol && _r();
  }
  function Js(t) {
    const a = wa;
    if (!a) {
      oo = null;
      return;
    }
    t === 101 || t === 150 ? (Da(a.videoId), pe("That video can’t play outside YouTube, so it was skipped")) : pe("The video couldn’t play, so it was skipped"), _r();
  }
  function Wl(t) {
    if (s("app").classList.add("videoStep"), si.hidden = !0, wa = t, clearTimeout(Ar), !t.videoId) {
      pe("This video step has no link yet, so it was skipped"), setTimeout(() => _r(), 0);
      return;
    }
    Xs().then((a) => {
      if (wa !== t) return;
      hn = performance.now() + 1500;
      const o = Number(t.start) || 0;
      oo !== t.videoId ? (oo = t.videoId, Co = o, a.loadVideoById({ videoId: t.videoId, startSeconds: o })) : (a.seekTo(o, !0), a.playVideo()), a.unMute(), xe && a.pauseVideo(), Ar = setTimeout(() => {
        wa !== t || xe || (a.getPlayerState() !== Ki ? (a.mute(), a.playVideo(), si.hidden = !1) : a.isMuted() && (si.hidden = !1));
      }, 1600);
    }).catch(() => {
      wa === t && (pe("YouTube didn’t load, so the video was skipped"), _r());
    });
  }
  function ds() {
    if (!s("app").classList.contains("videoStep")) return;
    const t = i.querySelector(".workGrid"), a = i.querySelector(".sessionControlRow"), o = t.getBoundingClientRect().top, r = (a == null ? void 0 : a.offsetHeight) || 42, d = window.innerHeight - o - 16 - r - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(d)) + "px");
  }
  window.addEventListener("resize", ds);
  function li() {
    clearTimeout(Ar);
    const t = wa;
    if (wa = null, s("app").classList.remove("videoStep"), Lr.classList.remove("playing"), si.hidden = !0, t && ne) {
      try {
        ne.pauseVideo();
      } catch {
      }
      oo = null;
    }
  }
  function _r() {
    const t = wa;
    !t || It[Gt] !== t || (li(), clearInterval(Ut), Ba(), Ut = setInterval(fa, 1e3));
  }
  si.addEventListener("click", () => {
    ne && (ne.unMute(), ne.playVideo()), si.hidden = !0;
  });
  function Dd(t) {
    var r;
    const a = Number(t.start) || 0;
    if (t.useVideoLength === !1) return a + (Number(t.duration) || 300);
    const o = ne && wa === t && Number((r = ne.getDuration) == null ? void 0 : r.call(ne)) || 0;
    return Number(t.end) || o || Number(t.videoDuration) || a + (Number(t.duration) || 300);
  }
  function jl(t, a) {
    const o = te[At];
    [ae, oe, Ge, o == null ? void 0 : o.warmup, o == null ? void 0 : o.strength, o == null ? void 0 : o.cooldown, o == null ? void 0 : o.sequence].forEach((r) => (Array.isArray(r) ? r : []).forEach((d) => {
      d && d.kind === "video" && d.videoId === t && a(d);
    }));
  }
  function ge(t, a) {
    a = Math.round(Number(a) || 0);
    let o = !1;
    return t && a > 0 && jl(t, (r) => {
      r.videoDuration !== a && (r.videoDuration = a, o = !0);
    }), o;
  }
  function Da(t) {
    jl(t, (a) => {
      a.videoError = "embed";
    }), Ue();
  }
  function cs(t) {
    const a = t.videoId;
    if (!a) return;
    const o = () => {
      ea.classList.contains("open") ? Ce || re() : (re(), Ue());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((r) => r.ok ? r.json() : Promise.reject(r.status)).then((r) => {
      t.videoId === a && (t.videoTitle = r.title || "", t.autoName && r.title && (t.name = r.title), o());
    }).catch((r) => {
      t.videoId === a && r === 401 && (t.videoError = "embed", o());
    }), Bd(a).then((r) => {
      ge(a, r) && o();
    }).catch((r) => {
      r === "embed" && t.videoId === a && (t.videoError = "embed", o());
    });
  }
  function Bd(t) {
    return ql().then((a) => new Promise((o, r) => {
      const d = document.createElement("div");
      d.className = "videoProbe", d.setAttribute("aria-hidden", "true");
      const p = document.createElement("div");
      d.appendChild(p), s("app").appendChild(d);
      let h = null, m = !1;
      const x = (T, R) => {
        m || (m = !0, clearTimeout(C), setTimeout(() => {
          try {
            h == null || h.destroy();
          } catch {
          }
          d.remove();
        }, 0), R ? r(R) : o(T));
      }, C = setTimeout(() => x(0), 2e4), L = () => {
        var R;
        const T = Number((R = h == null ? void 0 : h.getDuration) == null ? void 0 : R.call(h)) || 0;
        return T > 0 && x(T), T > 0;
      };
      h = new a.Player(p, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            L() || (h.mute(), h.playVideo());
          },
          onStateChange: () => L(),
          onError: (T) => x(0, T.data === 101 || T.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Lo() {
    Se = !1;
    const t = It[Gt];
    s("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? Wl(t) : li(), Wt = t.duration, Ct = t.duration, Yi = null, Mo ? Mo = !1 : On(t.kind === "rest" ? "rest" : "move"), Vi.textContent = t.name, Hn.textContent = t.group, Hn.hidden = !0, Vs.textContent = eo(Gt), Tn && Ui("step", { name: t.name, group: t.group, kind: t.kind, step: Gt + 1, of: It.length, round: t.round || 1, rounds: oi(), duration: t.duration }), un(), ri(), ss(), t.kind === "video" && setTimeout(ds, 0);
  }
  function di() {
    var d;
    const t = ((d = It[Gt]) == null ? void 0 : d.kind) === "video" && !Se, a = t && Wt >= 60;
    Gs.textContent = a ? ho(Wt) : Wt, Gs.classList.toggle("long", a), t && (s("videoClock").textContent = ho(Wt) + " left");
    const o = Wt / Ct * 100;
    Us.style.width = o + "%";
    const r = ii();
    if (r && !Se) {
      const p = 100 - o;
      r.style.setProperty("--segment-progress", p + "%");
    }
  }
  function fa() {
    var a, o;
    if (xe) return;
    const t = It[Gt];
    if ((t == null ? void 0 : t.kind) === "video" && !Se && wa === t) {
      const r = Number((a = ne == null ? void 0 : ne.getCurrentTime) == null ? void 0 : a.call(ne)) || 0, d = Number(t.start) || 0, p = Dd(t);
      Ct = Math.max(1, p - d), (r > d || ((o = ne == null ? void 0 : ne.getPlayerState) == null ? void 0 : o.call(ne)) === Ki) && (Wt = Math.max(0, Math.ceil(p - r))), di(), Zi(), r > d && r >= p - 0.25 && _r();
      return;
    }
    Wt--, di(), Zi(), Wt <= 0 && (t.rest > 0 ? Wn(t.rest) : Ba());
  }
  function Wn(t) {
    var o;
    Se = !0, s("app").classList.add("resting");
    const a = ii();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(Ut), Wt = t, Ct = t, Yi = null, On("rest"), Tn && Ui("rest", { duration: t }), Vi.textContent = "Rest", Hn.textContent = (o = It[Gt]) != null && o.roundBreakAfter ? "Round " + (It[Gt].round + 1) + " next" : "Recovery", un(), di(), Ut = setInterval(() => {
      xe || (Wt--, di(), Zi(), Wt <= 0 && (clearInterval(Ut), Ba(), Ut = setInterval(fa, 1e3)));
    }, 1e3);
  }
  function Ba() {
    Se = !1;
    const t = Ne(Gt + 1);
    if (t >= 0)
      Gt = t, Lo();
    else {
      clearInterval(Ut), li(), no(!1), s("app").classList.remove("resting"), Vi.textContent = "Complete", Hn.textContent = "Move finished", Hn.hidden = !1, Gs.textContent = "✓";
      {
        const a = oi();
        Vs.textContent = a > 1 ? a + " rounds done" : It.filter((o) => !o.roundBreak).length + " steps done";
      }
      rs(!0), On("done");
      {
        const a = Ul(7).reduce((o, r) => o + r.minutes, 0);
        Hn.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      Us.style.width = "100%", un();
    }
  }
  s("skipExercise").addEventListener("click", () => {
    Dr(), no(!1);
  });
  function Dr() {
    clearInterval(Ut);
    const t = It[Gt];
    if (Se) {
      Se = !1, s("app").classList.remove("resting");
      const o = Ne(Gt + 1);
      o >= 0 ? (Gt = o, Lo(), Ut = setInterval(fa, 1e3)) : Ba();
      return;
    }
    if (t && t.rest > 0) {
      Wn(t.rest);
      return;
    }
    const a = Ne(Gt + 1);
    a >= 0 ? (Gt = a, Lo(), Ut = setInterval(fa, 1e3)) : Ba();
  }
  s("restartSegment").addEventListener("click", () => {
    if (clearInterval(Ut), no(!1), Se) {
      const t = It[Gt];
      Wt = t.rest, Ct = t.rest, Yi = null, On("rest"), Vi.textContent = "Rest", Hn.textContent = "Recovery", s("app").classList.add("resting"), un(), di();
    } else
      Lo();
    Ut = setInterval(Se ? () => {
      xe || (Wt--, di(), Zi(), Wt <= 0 && (clearInterval(Ut), Ba(), Ut = setInterval(fa, 1e3)));
    } : fa, 1e3);
  });
  function na(t, a, o, r) {
    let d = 0, p = null, h = !1;
    function m() {
      p && cancelAnimationFrame(p), p = null, d = 0, h = !1, a.style.width = "0%", t.classList.remove("holding");
    }
    function x(T) {
      if (!h) return;
      d || (d = T);
      const R = Math.min(1, (T - d) / o);
      if (a.style.width = R * 100 + "%", R >= 1) {
        h = !1, p && cancelAnimationFrame(p), p = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), r();
        return;
      }
      p = requestAnimationFrame(x);
    }
    function C(T) {
      var R;
      if (!(T && T.button !== void 0 && T.button !== 0)) {
        T == null || T.preventDefault(), m(), h = !0, t.classList.add("holding");
        try {
          (R = t.setPointerCapture) == null || R.call(t, T.pointerId);
        } catch {
        }
        p = requestAnimationFrame(x);
      }
    }
    function L() {
      h && m();
    }
    t.addEventListener("pointerdown", C), t.addEventListener("pointerup", L), t.addEventListener("pointercancel", L), t.addEventListener("lostpointercapture", L), t.addEventListener("keydown", (T) => {
      (T.key === " " || T.key === "Enter") && !T.repeat && C(T);
    }), t.addEventListener("keyup", (T) => {
      (T.key === " " || T.key === "Enter") && L();
    });
  }
  const io = s("endWorkout");
  na(io, s("holdEndFill"), 1500, Zs);
  const Ao = s("deleteMoveConfirm");
  s("deleteMoveOpen").addEventListener("click", () => {
    Ao.classList.add("open"), Ao.setAttribute("aria-hidden", "false");
  }), s("deleteMoveCancel").addEventListener("click", () => {
    Ao.classList.remove("open"), Ao.setAttribute("aria-hidden", "true");
  });
  function Eo() {
    const t = At, a = i.querySelector('.workoutPanel[data-workout="' + t + '"]');
    a && a.remove(), delete te[t], Qt.order = Qt.order.filter((r) => r !== t);
    let o = i.querySelector(".workoutPanel[data-workout]");
    if (!o) {
      const r = "custom-" + Date.now();
      te[r] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Qt.order.push(r), o = je(r, te[r]);
    }
    Ao.classList.remove("open"), Ao.setAttribute("aria-hidden", "true"), Jo = null, Jr(), Ha(o.dataset.workout), Ue(), pe("Move deleted");
  }
  na(s("deleteMoveYes"), s("deleteMoveFill"), 1500, Eo);
  const ps = i.querySelector(".rubberTabs"), Ji = s("rubberIndicator");
  function Qi(t, a = !0) {
    if (!t || !ps || !Ji) return;
    const o = ps.getBoundingClientRect(), r = t.getBoundingClientRect();
    Ji.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const d = xo();
    Ji.style.left = (r.left - o.left) / d + ps.scrollLeft + "px", Ji.style.width = r.width / d + "px", a && (Ji.style.transform = "scaleX(1.08)", setTimeout(() => Ji.style.transform = "scaleX(1)", 180));
  }
  i.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), i.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), i.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), t.classList.add("active"), s(t.dataset.pane).classList.add("active"), Qi(t, !0);
  })), requestAnimationFrame(() => Qi(i.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Qi(i.querySelector(".tab.active"), !1));
  const Ke = s("pixelTrailToggle"), _o = s("rippleToggle"), ci = s("trailStrength"), tr = s("trailLife");
  function za(t, a) {
    zt()[t] = a, Ue();
  }
  const Qs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function tl(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function us(t) {
    var a;
    return !!((a = zt().hideMeta) != null && a[tl(t)]);
  }
  function Rd() {
    const t = /* @__PURE__ */ new Map(), a = (o, r, d) => {
      if (!o) return;
      Array.isArray(o) && (o = { name: o[1], group: o[2], kind: "work" });
      const p = tl(o);
      let h = t.get(p);
      h || (h = { key: p, label: p === "rest" ? "Rest" : p === "video" ? "Video" : String(o.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(p, h)), h.kinds.add(p === "rest" ? "Rest" : p === "video" ? "Video" : r), h.moves.add(d), h.count++;
    };
    return Object.values(te).forEach((o) => {
      const r = o.name || "Move";
      (o.warmup || (o.customSequence ? [] : Vt)).forEach((d) => a(d, "Warm-up", r)), (o.customSequence ? o.sequence || [] : o.strength || []).forEach((d) => a(d, d.presetRole === "warmup" ? "Warm-up" : d.presetRole === "cooldown" ? "Cooldown" : "Movement", r)), (o.cooldown || (o.customSequence ? [] : an)).forEach((d) => a(d, "Cooldown", r));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([o, r]) => {
      t.has(o) || t.set(o, { key: o, label: r, kinds: /* @__PURE__ */ new Set([r]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((o) => ({ ...o, kind: o.kinds.has("Movement") ? "Movement" : [...o.kinds][0], moves: [...o.moves] })).sort((o, r) => Qs.indexOf(o.kind) - Qs.indexOf(r.kind) || o.label.localeCompare(r.label));
  }
  let el = "all";
  function al() {
    const t = s("metaSearch").value.trim().toLowerCase();
    return Rd().filter((a) => (el === "all" || a.kind === el) && (!t || a.label.toLowerCase().includes(t) || a.moves.some((o) => o.toLowerCase().includes(t))));
  }
  function ha() {
    const t = s("metaTableBody");
    if (!t) return;
    const a = zt().hideMeta || {}, o = al();
    t.innerHTML = o.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', o.forEach((d) => {
      const p = !a[d.key], h = d.count ? (d.moves.length > 2 ? d.moves.slice(0, 2).join(", ") + " + " + (d.moves.length - 2) + " more" : d.moves.join(", ")) + " · " + d.count + " step" + (d.count === 1 ? "" : "s") : "Not used yet", m = document.createElement("tr");
      m.className = p ? "" : "off", m.innerHTML = '<td><div class="metaType">' + Zt(d.label) + '</div><div class="metaSub">' + Zt(d.kind + " · " + h) + '</div></td><td class="metaKindCol">' + Zt(d.kind) + '</td><td class="metaUsedCol">' + Zt(h) + '</td><td class="metaSwitchCol"><button class="switch' + (p ? " on" : "") + '" type="button" role="switch" aria-checked="' + p + '" aria-label="Second line for ' + Zt(d.label) + ' on phones"></button></td>', m.querySelector(".switch").addEventListener("click", () => Br([d.key], p)), t.appendChild(m);
    });
    const r = o.filter((d) => a[d.key]).length;
    s("metaCount").textContent = o.length ? o.length + " type" + (o.length === 1 ? "" : "s") + (r ? " · " + r + " hidden on phones" : "") : "";
  }
  function Br(t, a) {
    const o = { ...zt().hideMeta || {} };
    t.forEach((r) => {
      a ? o[r] = !0 : delete o[r];
    }), za("hideMeta", o), ha(), Ri(), un();
  }
  s("metaSearch").addEventListener("input", ha), s("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    el = t.dataset.kind, s("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === t)), ha();
  })), s("metaHideAll").addEventListener("click", () => Br(al().map((t) => t.key), !0)), s("metaShowAll").addEventListener("click", () => Br(al().map((t) => t.key), !1));
  const pi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...zt().toggles || {} };
  function nl() {
    i.querySelectorAll("[data-toggle]").forEach((o) => o.classList.toggle("on", pi[o.dataset.toggle] !== !1)), i.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([o, r]) => {
      s(r).hidden = pi[o] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((o) => pi[o] !== !1);
    i.querySelector(".activityCard").hidden = !t, s("weatherCard").hidden = !0;
    const a = i.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !t), a.classList.toggle("noWeather", !0);
  }
  i.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    pi[t.dataset.toggle] = pi[t.dataset.toggle] === !1, nl(), za("toggles", { ...pi });
  })), nl();
  function ol() {
    Ke.classList.toggle("on", dn), _o.classList.toggle("on", ni), ci.value = Math.round(ei * 100), s("trailStrengthValue").textContent = ci.value + "%", tr.value = yo, s("trailLifeValue").textContent = tr.value + " ms";
  }
  zt().trailEnabled !== void 0 && (dn = zt().trailEnabled), zt().rippleEnabled !== void 0 && (ni = zt().rippleEnabled), zt().trailStrength !== void 0 && (ei = zt().trailStrength), zt().trailMaxAge !== void 0 && (yo = zt().trailMaxAge), ol();
  const il = s("soundsToggle");
  il.classList.toggle("on", aa()), il.addEventListener("click", () => {
    za("sounds", !aa()), il.classList.toggle("on", aa()), aa() && (Tr(), On("move"));
  }), Ke.addEventListener("click", () => {
    dn = !dn, Ke.classList.toggle("on", dn), dn || (ji = []), za("trailEnabled", dn);
  }), _o.addEventListener("click", () => {
    ni = !ni, _o.classList.toggle("on", ni), za("rippleEnabled", ni);
  }), ci.addEventListener("input", () => {
    ei = Number(ci.value) / 100, s("trailStrengthValue").textContent = ci.value + "%";
  }), ci.addEventListener("change", () => za("trailStrength", ei)), tr.addEventListener("input", () => {
    yo = Number(tr.value), s("trailLifeValue").textContent = tr.value + " ms";
  }), tr.addEventListener("change", () => za("trailMaxAge", yo)), va.addEventListener("change", () => za("upcomingCount", Gn));
  function zl(t) {
    i.querySelectorAll(".themeBtn").forEach((o) => o.classList.toggle("active", o.dataset.theme === t));
    const a = t === "light";
    s("app").classList.toggle("light", a), c.setLight(a), mi(i);
  }
  zl(zt().theme || "dark"), i.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    zl(t.dataset.theme), za("theme", t.dataset.theme);
  }));
  const Va = { steps: null, weather: null, ...zt().entities || {} };
  let $e = null, fs = {};
  function Pd(t) {
    const a = Object.values(t).filter((m) => m.entity_id.startsWith("sensor.") || m.entity_id.startsWith("input_number.")), o = (m) => m.attributes.friendly_name || m.entity_id, r = a.filter((m) => /step/i.test(m.entity_id) || /step/i.test(o(m)) || ["steps", "step"].includes(String(m.attributes.unit_of_measurement || "").toLowerCase())), d = a.filter((m) => !r.includes(m)), p = (m, x) => o(m).localeCompare(o(x)), h = (m, x) => /health_steps/.test(x.entity_id) - /health_steps/.test(m.entity_id) || p(m, x);
    return { suggested: r.sort(h), rest: d.sort(p), label: o };
  }
  function rl(t) {
    const a = s("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: o, rest: r, label: d } = Pd(t), p = (x) => '<option value="' + Zt(x.entity_id) + '">' + Zt(d(x)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (o.length ? '<optgroup label="Suggested">' + o.map(p).join("") + "</optgroup>" : "") + (r.length ? '<optgroup label="All sensors">' + r.map(p).join("") + "</optgroup>" : ""), a.value = Va.steps || "";
    const h = s("stepsStatus"), m = Va.steps && t[Va.steps];
    h.textContent = m ? "Connected · " + d(m) : h.dataset.empty;
  }
  s("stepsEntity").addEventListener("change", () => {
    Va.steps = s("stepsEntity").value || null, za("entities", { ...Va }), fs = {}, Gl(), $e && (rl($e), ll($e));
  });
  function Vl(t, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(t);
  }
  function sl() {
    const t = Va.steps && ($e == null ? void 0 : $e[Va.steps]), a = Number(t == null ? void 0 : t.state);
    return Number.isFinite(a) ? a : null;
  }
  function ll(t) {
    var r;
    const a = Va.steps, o = a ? Number((r = t[a]) == null ? void 0 : r.state) : NaN;
    s("stepsMeta").textContent = a ? Number.isFinite(o) ? Vl(o) : "—" : "Set up in Settings";
  }
  let er = 0;
  async function Gl() {
    const t = Va.steps;
    if (!t || !c.ws) return;
    er = Date.now();
    const a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const r = await c.ws({ type: "recorder/statistics_during_period", start_time: o.toISOString(), end_time: a.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), d = (r == null ? void 0 : r[t]) || [], p = {};
      if (d.forEach((h) => {
        Number.isFinite(h.max) && (p[ye(new Date(h.start))] = h.max);
      }), !Object.keys(p).length) {
        const h = await c.ws({ type: "history/history_during_period", start_time: o.toISOString(), end_time: a.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((h == null ? void 0 : h[t]) || []).forEach((m) => {
          const x = Number(m.s ?? m.state), C = m.lu ? m.lu * 1e3 : Date.parse(m.last_updated || m.last_changed);
          if (!Number.isFinite(x) || !C) return;
          const L = ye(new Date(C));
          p[L] = Math.max(p[L] || 0, x);
        });
      }
      fs = p, Ga();
    } catch {
    }
  }
  function ro() {
    Ga();
  }
  ro(), setInterval(() => {
    ro(), Pe(), ue();
  }, 10 * 60 * 1e3);
  function Ul(t) {
    const a = {}, o = {};
    Qt.history.forEach((h) => {
      const m = ye(new Date(h.start));
      a[m] = (a[m] || 0) + (h.seconds || 0) / 60, o[m] = (o[m] || 0) + 1;
    });
    const r = /* @__PURE__ */ new Date(), d = ye(r), p = [];
    for (let h = t - 1; h >= 0; h--) {
      const m = new Date(r.getFullYear(), r.getMonth(), r.getDate() - h), x = ye(m), C = Qt.checkins.filter((T) => T.date === x), L = (T) => {
        const R = C.map((j) => j[T]).filter(Boolean);
        return R.length ? R.reduce((j, _) => j + _, 0) / R.length : null;
      };
      p.push({
        key: x,
        date: m,
        minutes: Math.round(a[x] || 0),
        moves: o[x] || 0,
        steps: x === d && sl() != null ? sl() : fs[x] ?? null,
        mood: L("mood"),
        energy: L("energy")
      });
    }
    return p;
  }
  function Yl(t) {
    let a = t.length - 1;
    t[a] && !t[a].minutes && a--;
    let o = 0;
    for (; a >= 0 && t[a].minutes > 0; )
      o++, a--;
    return o;
  }
  function Ga() {
    const t = s("insightCard");
    if (!t) return;
    const a = Ul(30), o = Yl(a), r = a.reduce((C, L) => C + L.minutes, 0), d = /* @__PURE__ */ new Date(), p = ye(d), h = ye(new Date(d.getFullYear(), d.getMonth(), d.getDate() - (d.getDay() + 6) % 7)), m = a.filter((C) => C.key >= h && C.key <= p).reduce((C, L) => C + L.minutes, 0), x = (C, L, T) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + C + '</div><div><div class="activityRowName">' + Zt(L) + '</div><div class="activityRowMeta">' + Zt(T) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Oa("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + x(Oa("clock"), "This week", m + " min") + x(Oa("streak"), "Streak", o + " day" + (o === 1 ? "" : "s")) + x(Oa("calendar"), "30 days", r + " min") + "</div>";
  }
  const hs = {
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
  }, so = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", ui = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ar = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let ms = 0;
  const dl = (t, a) => '<path class="' + a + '" d="' + t + '"/>', oa = (t, a) => ' style="animation-delay:-' + Math.round(t * 137 % a) + 'ms"', mn = (t, a, o, r) => {
    const d = o * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (r < 1 ? ' opacity="' + r + '"' : "") + oa(t, 2400) + ' d="M' + t + " " + (a - o) + "L" + (t + d) + " " + (a - d) + "L" + (t + o) + " " + a + "L" + (t + d) + " " + (a + d) + "L" + t + " " + (a + o) + "L" + (t - d) + " " + (a + d) + "L" + (t - o) + " " + a + "L" + (t - d) + " " + (a - d) + 'Z"/>';
  }, fi = ([t, a, o], r) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + r + ')"/><defs><linearGradient id="' + r + '" x1="0" y1="' + a + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Nd = (t, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Id = (t) => (t ? ["29.35", "43.04", "56.74"].map((a, o) => '<g class="wxDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, o) => '<g class="wxDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), Dt = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, o], r) => '<circle class="wxFlake" style="animation-delay:-' + r * 640 + 'ms" cx="' + a + '" cy="' + o + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function gn(t, a, o, r) {
    return t === "clear" ? a ? fi(o ? ar.l : ar.s, r) + (o ? mn(70, 20, 5.83, 1) + mn(78.33, 41.67, 3.75, 0.8) + mn(60, 71.67, 3.33, 0.6) : mn(42, 12, 3.5, 1) + mn(47, 25, 2.25, 0.8) + mn(36, 43, 2, 0.6)) : Nd(r, o) : t === "partly" ? (a ? fi(o ? ar.lp : ar.sp, r) : o ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + dl(o ? ui.lp : ui.sp, a ? "wxCloudLight" : "wxBright") + (a ? o ? mn(73.33, 16.67, 4.17, 0.9) : mn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? dl(o ? ui.lc : ui.s, a ? "wxCloudLight" : "wxBright") + (a ? o ? mn(15, 15, 3.75, 0.8) + mn(76.67, 13.33, 2.92, 0.6) : mn(9, 9, 2.25, 0.8) + mn(46, 8, 1.75, 0.6) : "") : dl(o ? ui.lr : ui.s, "wxCloudLight") + (t === "rain" ? Id(o) : Dt(o));
  }
  const cl = () => {
    var t;
    return ((t = $e == null ? void 0 : $e["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let ma = zt().weatherStyle || "bitmap", Zl = zt().weatherLayout === "strip" ? "strip" : "tiles", ia = zt().weatherMotion !== !1;
  const nr = () => ia && !pa(), hi = /* @__PURE__ */ new Map(), vn = 700, Hd = (t) => {
    const [a, o] = t.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: o === "night" };
  };
  function gs(t, a, o, r = ma, d, p) {
    let h = so(t);
    const m = h === "night" || (p != null ? !!p : !!o && cl());
    h === "night" && (h = "clear");
    const x = a ? 90 : 54, C = kd(t, m), L = performance.now();
    let T = d ? hi.get(d) : null;
    if (d && !T ? hi.set(d, T = { key: C, t0: -1e9 }) : T && T.key !== C && (T.fromKey = T.key, T.from = T.last || null, T.key = C, T.t0 = L), r !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + C + '"' + (d ? ' data-wx-slot="' + d + '"' : "") + ' data-wx-style="' + r + '" data-wx-size="' + x + '"></canvas></span>';
    let R = "";
    if (T && L - T.t0 < vn && (nr() || pa())) {
      const j = Hd(T.fromKey);
      R = '<span class="wxLayer wxOut ' + j.k + (j.night ? " night" : "") + '" style="animation-delay:' + Math.round(T.t0 - L) + 'ms"><svg viewBox="0 0 ' + x + " " + x + '">' + gn(j.k, j.night, a, "wxg" + ++ms) + "</svg></span>";
    }
    return '<span class="wxIcon ' + h + (m ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + x + " " + x + '">' + gn(h, m, a, "wxg" + ++ms) + "</svg>" + R + "</span>";
  }
  function vs() {
    const t = s("app"), a = getComputedStyle(t), o = (m) => a.getPropertyValue(m).trim(), r = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([m, x]) => {
      o(x) && (r[m] = o(x));
    });
    const d = o("--color-text-primary") || "#f1f1f1", p = o("--color-bg-card") || "#222222", h = t.classList.contains("light");
    return { colors: r, ink: h ? d : p, paper: h ? p : d };
  }
  function mi(t, a = performance.now()) {
    const o = t.querySelectorAll("canvas[data-wx]");
    if (!o.length) return;
    const r = vs(), d = nr(), p = pa();
    o.forEach((h) => {
      var T;
      const m = h.dataset.wx, x = h.dataset.wxSlot ? hi.get(h.dataset.wxSlot) : null;
      let C = dc(m, r.colors);
      if (x && x.key === m) {
        const R = (a - x.t0) / vn;
        R < 1 && (d || p) && (C = vu(x.from || dc(x.fromKey, r.colors), C, Math.max(0, R), r.colors, p)), x.last = C;
      }
      const L = Sp(C, { size: Number(h.dataset.wxSize) || 54, px: 2, oneBit: h.dataset.wxStyle === "onebit", colors: r.colors, ink: r.ink, paper: r.paper, clock: a, idle: d });
      h.width !== L.w && (h.width = L.w), h.height !== L.h && (h.height = L.h), (T = h.getContext("2d")) == null || T.putImageData(new ImageData(L.data, L.w, L.h), 0, 0);
    });
  }
  let bs = null, Kl = -1;
  function $l(t) {
    if (bs = null, !b) return;
    const a = nr(), o = Math.floor(t / 100), r = [...hi.values()].some((x) => t - x.t0 < vn), d = [...Rr.values()].some((x) => t - x.t0 < x.dur), p = Lt.home.classList.contains("active"), h = xa.classList.contains("open"), m = a && ma === "smooth" && (h || p && Zl === "strip");
    !document.hidden && (r || d || m || a && o !== Kl) && (Kl = o, p && (mi(s("weatherCard"), t), bi(s("weatherCard"), t)), h && (mi(xa, t), bi(xa, t))), (a || r || d) && (bs = requestAnimationFrame($l));
  }
  function gi() {
    s("app").classList.toggle("wxMotion", nr()), !bs && b && (bs = requestAnimationFrame($l));
  }
  let ws = [];
  const Oe = 36e5, xs = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Ln() {
    const t = /* @__PURE__ */ new Date(), a = (p, h) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + p, h), o = [], r = [], d = [...Array(6)].map((p, h) => {
      const m = a(h, 6), x = a(h, 18), C = a(h + 1, 6), L = ws.find((R) => ye(new Date(R.datetime)) === ye(m)), T = (R, j, _) => {
        const F = o.filter((Bt) => Bt.t >= +R && Bt.t < +j);
        if (F.length) {
          const Bt = {};
          return F.forEach((ht) => {
            Bt[ht.c] = (Bt[ht.c] || 0) + (xs.has(ht.c) ? 2 : 1);
          }), Object.entries(Bt).sort((ht, Nt) => Nt[1] - ht[1])[0][0];
        }
        const D = r.find((Bt) => {
          const ht = +new Date(Bt.datetime);
          return ht >= +R - 3 * Oe && ht < +j && (Bt.is_daytime == null || !!Bt.is_daytime == !_);
        });
        if (D) return D.condition;
        const ft = (L == null ? void 0 : L.condition) || "cloudy";
        return _ && ft === "sunny" ? "clear-night" : ft;
      };
      return { start: +m, end: +C, day: T(m, x, !1), night: T(x, C, !0), hi: Number(L == null ? void 0 : L.temperature), lo: Number(L == null ? void 0 : L.templow) };
    });
    return { days: d, hours: o, start: d[0].start, end: d[5].end };
  }
  const pl = (t, a) => {
    const o = t.days.findIndex((d) => a < d.end);
    if (o < 0) return 1;
    const r = t.days[o];
    return Math.max(0, (o + (a - r.start) / (r.end - r.start)) / 6);
  }, ul = (t, a) => {
    const o = Math.max(0, Math.min(0.99999, a)) * 6, r = Math.floor(o), d = t.days[r];
    return d.start + (o - r) * (d.end - d.start);
  };
  function ys(t, a) {
    const o = Math.max(0, t.days.findIndex((x) => a < x.end)), r = t.days[o], d = (a - r.start) / (r.end - r.start) >= 0.5;
    let p = d ? r.night : r.day, h = NaN;
    const m = t.hours;
    if (m.length && a >= m[0].t - Oe && a <= m[m.length - 1].t + Oe) {
      let x = m.findIndex((T) => T.t > a);
      x < 0 && (x = m.length);
      const C = m[Math.max(0, x - 1)], L = m[Math.min(m.length - 1, x)];
      p = C.c || p, h = L.t > C.t ? C.temp + (L.temp - C.temp) * Math.max(0, Math.min(1, (a - C.t) / (L.t - C.t))) : C.temp;
    }
    if (!Number.isFinite(h)) {
      const x = [];
      if (t.days.forEach((C) => {
        Number.isFinite(C.lo) && x.push([C.start - Oe, C.lo]), Number.isFinite(C.hi) && x.push([C.start + 9 * Oe, C.hi]);
      }), x.length) {
        h = a <= x[0][0] ? x[0][1] : x[x.length - 1][1];
        for (let C = 1; C < x.length; C++) if (a <= x[C][0] && a > x[C - 1][0]) {
          const [L, T] = x[C - 1], [R, j] = x[C];
          h = T + (j - T) * (1 - Math.cos(Math.PI * (a - L) / (R - L))) / 2;
          break;
        }
      }
    }
    return { cond: d && p === "sunny" ? "clear-night" : p, temp: h, night: d, day: r };
  }
  const vi = (t) => ye(new Date(t)) === ye(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), Rr = /* @__PURE__ */ new Map(), fl = 900, hl = 700;
  let Pr = null;
  const Ua = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((a) => {
    bi(a.target.parentElement), a.target.closest("#wxDialog") && ml();
  })) : null;
  function bi(t, a = performance.now()) {
    const o = t.querySelectorAll("canvas[data-wx-strip]");
    if (!o.length) return;
    const r = Ln(), d = r.days.flatMap((T) => [{ cond: T.day, night: !1 }, { cond: T.night, night: !0 }]), p = d.map((T) => T.cond).join(), h = vs(), m = nr(), x = pa(), C = Number(ye(new Date(r.start)).replace(/\D/g, "")) % 9973;
    let L = !1;
    o.forEach((T) => {
      var Bt;
      const R = T.clientWidth, j = T.clientHeight;
      if (!R || !j) return;
      const _ = T.dataset.wxStrip;
      let F = Rr.get(_);
      F ? F.sig !== p && (F.prev = F.segs, F.sig = p, F.segs = d, F.t0 = a, F.dur = hl) : Rr.set(_, F = { sig: p, segs: d, prev: null, t0: a, dur: fl });
      const D = m || x ? Math.min(1, Math.max(0, (a - F.t0) / F.dur)) : 1;
      D < 1 && (L = !0);
      const ft = { width: R, height: j, colors: h.colors, clock: a, ambient: m, seed: C, reveal: x ? D : 1 - Math.pow(1 - D, 3), prev: D < 1 ? F.prev : null, reduce: x };
      if (ma === "smooth") {
        const ht = Math.min(2, window.devicePixelRatio || 1), Nt = Math.round(R * ht), wt = Math.round(j * ht);
        T.width !== Nt && (T.width = Nt), T.height !== wt && (T.height = wt);
        const Et = T.getContext("2d");
        if (!Et) return;
        Et.setTransform(ht, 0, 0, ht, 0, 0), Bu(Et, d, ft);
      } else {
        const ht = Du(d, { ...ft, px: 2, oneBit: ma === "onebit", ink: h.ink, paper: h.paper });
        T.width !== ht.w && (T.width = ht.w), T.height !== ht.h && (T.height = ht.h), (Bt = T.getContext("2d")) == null || Bt.putImageData(new ImageData(ht.data, ht.w, ht.h), 0, 0);
      }
    }), L && gi();
  }
  function ks() {
    const t = s("weatherCard");
    if (!t || t.hidden) return;
    const a = Va.weather, o = a && ($e == null ? void 0 : $e[a]);
    if (!o) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + gs("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", mi(t);
      return;
    }
    const r = o.attributes || {}, d = r.temperature_unit || "°", p = (Et) => Number.isFinite(Number(Et)) ? Math.round(Number(Et)) + "°" : "—", h = (r.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", m = hs[o.state] || (o.state ? o.state.charAt(0).toUpperCase() + o.state.slice(1) : "—"), x = ye(/* @__PURE__ */ new Date()), C = ws.slice(0, 7), L = C.find((Et) => ye(new Date(Et.datetime)) === x) || null, T = C.filter((Et) => ye(new Date(Et.datetime)) >= x).slice(0, 6), R = /* @__PURE__ */ new Date(), j = ye(new Date(R.getFullYear(), R.getMonth(), R.getDate() + 1)), _ = L ? "H " + p(L.temperature) + "&ensp; L " + p(L.templow) : "", F = (Et) => {
      const Pt = ye(new Date(Et.datetime));
      return Pt === x ? "Today" : Pt === j ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Et.datetime));
    }, D = Number.isFinite(Number(r.temperature)) ? Math.round(Number(r.temperature)) : "—", ft = (Et) => {
      const Pt = new Date(Et.datetime);
      return Math.round((new Date(Pt.getFullYear(), Pt.getMonth(), Pt.getDate()) - new Date(R.getFullYear(), R.getMonth(), R.getDate())) / 864e5);
    }, Bt = (Et) => (hs[Et] || Et || "").toLowerCase(), ht = (Et, Pt) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ft(Et) + '" aria-label="' + Zt(F(Et) + ": " + Bt(Et.condition) + ", " + p(Et.temperature) + " / " + p(Et.templow) + ". Open the forecast") + '">' + gs(Et.condition, !1, !1, ma, "day" + Pt) + '<div><div class="activityRowName">' + Zt(F(Et)) + '</div><div class="activityRowMeta">' + p(Et.temperature) + " / " + p(Et.templow) + "</div></div></div>", Nt = () => '<div class="wxStrip"><div class="wxStripDays">' + Ln().days.map((Pt, Me) => {
      const De = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Pt.start)) + ": " + Bt(Pt.day) + (Bt(Pt.day) === Bt(Pt.night) ? " all day and night" : ", then " + Bt(Pt.night) + " overnight") + (Number.isFinite(Pt.hi) ? ". High " + p(Pt.hi) : "") + (Number.isFinite(Pt.lo) ? ", low " + p(Pt.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Me + '" aria-label="' + Zt(De) + '"><span class="wxDayName">' + Zt(vi(Pt.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + p(Pt.hi) + '</span><span class="wxLow">' + p(Pt.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Zt("Now in " + h + ": " + D + "°, " + Bt(o.state) + ". Open the forecast") + '"><div class="wxCurrent">' + gs(o.state, !0, !0, ma, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Zt(String(D)) + '</span><span class="wxUnit">' + Zt(d) + '</span></div><div class="wxPlace">' + Zt(h) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Zt(m) + "</div>" + (_ ? '<div class="wxRange">' + _ + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (T.length ? Zl === "strip" ? Nt() : '<div class="activityRows wxDays">' + T.map(ht).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", mi(t);
    const wt = t.querySelector("canvas[data-wx-strip]");
    Pr && Pr !== wt && (Ua == null || Ua.unobserve(Pr)), Pr = wt, wt && (Ua == null || Ua.observe(wt), bi(t)), gi(), Jl();
  }
  const Ms = s("weatherCard"), Nr = (t) => {
    const a = t.closest("[data-wx-day]");
    if (a) {
      const r = /* @__PURE__ */ new Date();
      Xl(+new Date(r.getFullYear(), r.getMonth(), r.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const o = t.closest("[data-wx-open]");
    o && Xl(Date.now(), o);
  };
  Ms.addEventListener("click", (t) => Nr(t.target)), Ms.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), Nr(t.target));
  });
  const xa = s("wxDialog"), Do = s("wxGraph"), Ir = s("wxGraphWrap");
  let bn = Date.now(), lo = null, Ss = !1, or = null;
  function Xl(t, a) {
    const o = Ln();
    lo = a || null, bn = Math.max(o.start, Math.min(o.end - Oe, t)), Rr.delete("dialog"), hi.delete("scrub"), xa.classList.add("open"), xa.setAttribute("aria-hidden", "false"), Jl(), Ua == null || Ua.observe(xa.querySelector("canvas[data-wx-strip]")), Do.focus({ preventScroll: !0 }), gi();
  }
  function Cs() {
    var t;
    xa.classList.remove("open"), xa.setAttribute("aria-hidden", "true"), Ua == null || Ua.unobserve(xa.querySelector("canvas[data-wx-strip]")), (t = lo == null ? void 0 : lo.focus) == null || t.call(lo, { preventScroll: !0 }), lo = null;
  }
  function Jl() {
    if (!xa.classList.contains("open")) return;
    const t = Ln();
    s("wxGraphDays").innerHTML = t.days.map((a) => "<span>" + Zt(vi(a.start)) + "</span>").join(""), ml(t), Ts(t), bi(xa);
  }
  function Ts(t = Ln()) {
    const a = ys(t, bn), o = $e == null ? void 0 : $e[Va.weather], r = (o == null ? void 0 : o.attributes) || {}, d = r.temperature_unit || "°", p = Math.abs(bn - Date.now()) < Oe / 2, h = p && o ? o.state : a.cond, m = p && Number.isFinite(Number(r.temperature)) ? Math.round(Number(r.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", x = hs[h] || (h ? h.charAt(0).toUpperCase() + h.slice(1) : "—"), C = p ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(bn / Oe) * Oe)), L = a.day, T = (Number.isFinite(L.hi) ? "H " + Math.round(L.hi) + "°" : "") + (Number.isFinite(L.lo) ? "&ensp; L " + Math.round(L.lo) + "°" : "");
    s("wxDialogNow").innerHTML = '<div class="wxCurrent">' + gs(h, !0, p, ma, "scrub", p ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Zt(String(m)) + '</span><span class="wxUnit">' + Zt(d) + '</span></div><div class="wxPlace">' + Zt(C) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Zt(x) + "</div>" + (T ? '<div class="wxRange">' + T + "</div>" : "") + "</div>", mi(s("wxDialogNow")), Do.setAttribute("aria-valuenow", String(Math.round((bn - t.start) / Oe))), Do.setAttribute("aria-valuetext", C + ", " + x.toLowerCase() + ", " + m + "°"), gl(t), gi();
  }
  function ml(t = Ln()) {
    const a = s("wxGraphLine"), o = Ir.clientWidth, r = Ir.clientHeight;
    if (!o || !r) return;
    const d = [];
    for (let D = t.start; D <= t.end; D += Oe) {
      const ft = ys(t, D).temp;
      Number.isFinite(ft) && d.push([pl(t, D) * o, ft]);
    }
    if (a.setAttribute("viewBox", "0 0 " + o + " " + r), d.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', or = null, gl(t);
      return;
    }
    const p = d.map((D) => D[1]), h = Math.min(...p), m = Math.max(...p), x = Math.max(4, m - h), C = ma !== "smooth", L = (D) => C ? Math.round(D / 2) * 2 : Math.round(D * 10) / 10;
    or = (D) => r * 0.84 - (D - h) / x * r * 0.62;
    const T = vs(), R = ma === "onebit" ? T.paper : "#ffffff", j = ma === "onebit" ? T.ink : "rgba(0,0,0,.28)", _ = "M" + d.map((D) => L(D[0]) + " " + L(or(D[1]))).join(" L"), F = (D, ft) => {
      const Bt = d.find((ht) => ht[1] === D);
      return '<text class="wxLineLabel" x="' + L(Math.min(o - 14, Math.max(14, Bt[0]))) + '" y="' + L(or(D) + (ft ? 18 : -10)) + '" fill="' + R + '" stroke="' + j + '">' + Math.round(D) + "°</text>";
    };
    a.setAttribute("shape-rendering", C ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + _ + '" fill="none" stroke="' + j + '" stroke-width="' + (C ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + _ + '" fill="none" stroke="' + R + '" stroke-width="2" stroke-linejoin="round"/>' + F(m, !1) + F(h, !0) + '<g id="wxCursorMark"></g>', gl(t);
  }
  function gl(t = Ln()) {
    const a = s("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const o = Ir.clientWidth, r = Ir.clientHeight, d = ma !== "smooth", p = (R) => d ? Math.round(R / 2) * 2 : R, h = p(pl(t, bn) * o), m = ys(t, bn).temp, x = vs(), C = ma === "onebit" ? x.paper : "#ffffff", L = ma === "onebit" ? x.ink : "rgba(0,0,0,.28)", T = or && Number.isFinite(m) ? p(or(m)) : null;
    a.innerHTML = '<rect x="' + (h - 2) + '" y="0" width="4" height="' + r + '" fill="' + L + '"/><rect x="' + (h - 1) + '" y="0" width="2" height="' + r + '" fill="' + C + '"/>' + (T == null ? "" : d ? '<rect x="' + (h - 5) + '" y="' + (T - 5) + '" width="10" height="10" fill="' + C + '" stroke="' + L + '" stroke-width="2"/>' : '<circle cx="' + h + '" cy="' + T + '" r="6" fill="' + C + '" stroke="' + L + '" stroke-width="2"/>');
  }
  const Hr = (t) => {
    const a = Ir.getBoundingClientRect();
    a.width && (bn = ul(Ln(), (t - a.left) / a.width), Ts());
  };
  Do.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Ss = !0;
      try {
        Do.setPointerCapture(t.pointerId);
      } catch {
      }
      Hr(t.clientX);
    }
  }), Do.addEventListener("pointermove", (t) => {
    Ss && Hr(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => Do.addEventListener(t, () => {
    Ss = !1;
  })), Do.addEventListener("keydown", (t) => {
    const a = Ln(), o = { ArrowLeft: -Oe, ArrowRight: Oe, ArrowDown: -Oe, ArrowUp: Oe, PageUp: -24 * Oe, PageDown: 24 * Oe }[t.key];
    o ? (t.preventDefault(), bn = Math.max(a.start, Math.min(a.end - Oe, Math.round(bn / Oe) * Oe + o)), Ts(a)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), bn = t.key === "Home" ? a.start : a.end - Oe, Ts(a));
  }), s("wxDialogClose").addEventListener("click", Cs), xa.addEventListener("click", (t) => {
    t.target === xa && Cs();
  }), xa.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Cs());
  }), ks(), (l = (e = window.matchMedia) == null ? void 0 : (n = e.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || l.call(n, "change", () => {
    gi(), mi(i);
  }), gi();
  const vl = s("tvNav");
  c.fullscreenSupported || (vl.hidden = !0), vl.addEventListener("click", () => c.toggleFullscreen()), i.addEventListener("keydown", (t) => {
    !Lt.workout.classList.contains("active") || kr.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), ns.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), s("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), s("restartSegment").click()));
  }), i.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(Jt.value) || 1) + Number(t.dataset.roundsStep)));
    String(a) !== Jt.value && (Jt.value = a, Jt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [N, k, z, Jt].forEach((t) => t.addEventListener("input", () => {
    const a = te[At];
    a && (a.total = Number(N.value), a.work = Number(k.value), a.rest = Number(z.value)), re();
  })), Q.addEventListener("click", Zs), Mt.addEventListener("click", () => A("settings")), s("settingsBack").addEventListener("click", Zs), ns.addEventListener("click", () => no(!xe)), Ha(At), Ee(), Pe(), Ga(), s("healthHelpOpen").addEventListener("click", () => i.querySelector(".tab[data-pane=helpPane]").click()), na(s("resetStats"), s("resetStatsFill"), 1500, () => {
    Qt.history = [], Qt.checkins = [], jt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ue(), ro(), Pe(), Ee(), Ga(), ue(), pe("Stats reset");
  });
  const bl = s("morningTime"), Ls = s("eveningTime"), ir = s("checkinAutoOpen");
  bl.value = Rn().morning, Ls.value = Rn().evening, ir.classList.toggle("on", zt().checkinAutoOpen !== !1), [["morningTime", bl], ["eveningTime", Ls]].forEach(([t, a]) => a.addEventListener("change", () => {
    a.value && (za(t, a.value), ue());
  })), ir.addEventListener("click", () => {
    const t = zt().checkinAutoOpen === !1;
    ir.classList.toggle("on", t), za("checkinAutoOpen", t);
  }), setTimeout(St, 800);
  const As = s("checkinNotify"), Bo = s("checkinNotifyTarget"), Ql = s("checkinNotifyStatus"), Fd = Ql.textContent;
  function wl() {
    const t = c.notifyServices(), a = t.filter((d) => d.startsWith("mobile_app_")), o = a.length ? a : t, r = (d) => d.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Bo.innerHTML = o.map((d) => '<option value="' + Zt(d) + '">' + Zt(r(d)) + "</option>").join(""), !zt().notifyTarget && o[0] && (zt().notifyTarget = o[0]), Bo.value = zt().notifyTarget || "";
  }
  function Fr() {
    const t = !!zt().notifyOn;
    As.classList.toggle("on", t), s("checkinNotifyTargetRow").hidden = !t;
    const a = Rn();
    Ql.textContent = t ? "Sends at " + a.morning + " and " + a.evening : Fd;
  }
  async function Or() {
    const t = !!zt().notifyOn;
    try {
      return await c.setReminderAutomation(t ? { target: zt().notifyTarget, times: Rn() } : null), !0;
    } catch {
      return pe("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  As.addEventListener("click", async () => {
    const t = !zt().notifyOn;
    if (t && (wl(), !zt().notifyTarget)) {
      pe("Install the Companion app on your phone first");
      return;
    }
    zt().notifyOn = t, Fr(), await Or() ? (Ue(), pe(t ? "Check-in notifications on" : "Check-in notifications off")) : (zt().notifyOn = !t, Fr());
  }), Bo.addEventListener("change", () => {
    za("notifyTarget", Bo.value), zt().notifyOn && Or();
  }), [bl, Ls].forEach((t) => t.addEventListener("change", () => {
    Fr(), zt().notifyOn && Or();
  })), wl(), Fr();
  let rr = null;
  function qr() {
    rr || (rr = setTimeout(() => {
      rr = null, Ga();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var o, r;
      const a = !$e || $e[Va.weather] !== t[Va.weather] || ((o = $e["sun.sun"]) == null ? void 0 : o.state) !== ((r = t["sun.sun"]) == null ? void 0 : r.state);
      $e = t, rl(t), ll(t), a && ks(), Date.now() - er > 60 * 60 * 1e3 && Gl(), qr();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (Qt.history = t.history, ro()), Array.isArray(t.history) && Ga(), Array.isArray(t.checkins) && (Qt.checkins = t.checkins.map(fr), ue(), Ee(), Pe(), ro(), Ga()), t.profiles && !ea.classList.contains("open") && !Tn)) {
        const a = ya(t);
        Object.keys(te).forEach((o) => delete te[o]), Object.assign(te, a.profiles), Qt.order = a.order, te[At] || (At = Qt.order[0]), Fo(), Ha(At);
      }
    },
    suspend() {
      b = !1;
    },
    resume() {
      b || (b = !0, ai || (ai = requestAnimationFrame(es)), zi || (zi = requestAnimationFrame(as)), gi(), Qi(i.querySelector(".tab.active"), !1));
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
}, Wr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ca = "made_up_", Ro = (i) => {
  var c;
  return (c = String(i).split(".")[1]) == null ? void 0 : c.startsWith(ca);
}, nd = (i) => i.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function vc(i) {
  const c = i.getHours() + i.getMinutes() / 60, s = Math.max(0, Math.sin((c - 7) / 13 * Math.PI));
  return 2.4 * s * s;
}
function Hu(i) {
  const c = new Date(i.getFullYear(), i.getMonth(), i.getDate());
  let s = 0;
  for (let u = +c; u < +i; u += 10 * 60 * 1e3) s += vc(new Date(u)) / 6;
  return s;
}
function Mc(i = /* @__PURE__ */ new Date()) {
  const c = [];
  for (let s = 0; s <= 96; s++) {
    const u = +i - (96 - s) * 15 * 60 * 1e3;
    c.push([u, vc(new Date(u))]);
  }
  return c;
}
function Fu({ onChange: i }) {
  const c = {}, s = {}, u = (Y, q, ot, it) => {
    c[Y] = { entity_id: Y, state: ot, attributes: it, last_changed: new Date(Date.now() - 18e6).toISOString() }, s[Y] = q;
  }, g = (Y, q, ot) => {
    const it = c[Y], lt = q ?? it.state;
    c[Y] = { ...it, state: lt, attributes: { ...it.attributes, ...ot }, last_changed: lt === it.state ? it.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (Y, q, ot, it) => u("binary_sensor." + ca + (Y ? Y + "_" : "") + nd(q), Y, it ? "on" : "off", { friendly_name: q, device_class: ot });
  Object.entries(Iu).forEach(([Y, q]) => {
    if (q.temperature != null && u("sensor." + ca + Y + "_temperature", Y, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && u("sensor." + ca + Y + "_humidity", Y, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && u("vacuum." + ca + "robot", Y, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && u("climate." + ca + Y, Y, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [ot, it, lt, tt] = q.cover;
      u("cover." + ca + Y + "_" + nd(ot), Y, lt ? "open" : "closed", { friendly_name: ot, device_class: it, current_position: lt, ...tt != null ? { current_tilt_position: tt } : {} });
    }
    if (q.humidifier && u("humidifier." + ca + Y, Y, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (u("sensor." + ca + Y + "_solar_power", Y, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + ca + Y + "_solar_today", Y, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && u("valve." + ca + Y + "_" + nd(q.valve), Y, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && b(Y, q.door, "door", q.doorOpen), q.window && b(Y, q.window, "window", !1), q.motion && b(Y, q.motion, "motion", !1), q.plant) {
      const [ot, it, lt, tt, K] = q.plant, B = ca + nd(ot), $ = (et, Lt, Q, Mt, A) => u("sensor." + B + "_" + et, Y, String(Q), { friendly_name: Lt, device_class: A, state_class: "measurement", unit_of_measurement: Mt, plant_low: Q < Wr[et][0], plant_high: Q > Wr[et][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[et] });
      $("moisture", "Moisture", it, "%", "moisture"), $("light", "Light", lt, "lx", "illuminance"), $("temperature", "Temperature", tt, "°C", "temperature"), $("fertility", "Fertility", K, "µS/cm", "conductivity");
      const gt = Object.entries({ moisture: it, light: lt, temperature: tt, fertility: K }).filter(([et, Lt]) => Lt < Wr[et][0] || Lt > Wr[et][1]).map(([et, Lt]) => et + (Lt < Wr[et][0] ? " low" : " high"));
      u("plant." + B, Y, gt.length ? "problem" : "ok", { friendly_name: ot, moisture: it, brightness: lt, temperature: tt, conductivity: K, problem: gt.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + ca + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), u("sensor." + ca + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const y = {}, E = {};
  let M = null;
  function P() {
    const Y = /* @__PURE__ */ new Date();
    Object.keys(c).forEach((q) => {
      q.endsWith("_solar_power") && (c[q] = { ...c[q], state: vc(Y).toFixed(2) }), q.endsWith("_solar_today") && (c[q] = { ...c[q], state: Hu(Y).toFixed(1) });
    });
  }
  P();
  let W = 0;
  function H() {
    let Y = !1;
    const q = ++W % 10 === 0, ot = (tt, K, B) => {
      g(tt, K, B), Y = !0;
    };
    Object.entries(y).forEach(([tt, K]) => {
      const B = c[tt].attributes.current_position, $ = B < K ? Math.min(K, B + 10) : Math.max(K, B - 10);
      $ === K && delete y[tt], ot(tt, $ === K ? $ === 0 ? "closed" : "open" : K > B ? "opening" : "closing", { current_position: $ });
    }), Object.entries(E).forEach(([tt, K]) => {
      const B = c[tt].attributes.current_tilt_position, $ = B < K ? Math.min(K, B + 25) : Math.max(K, B - 25);
      $ === K && delete E[tt], ot(tt, null, { current_tilt_position: $ });
    }), Object.keys(c).filter((tt) => tt.startsWith("climate.")).forEach((tt) => {
      const K = c[tt], B = K.attributes, $ = B.current_temperature, gt = (K.state === "heat" || K.state === "auto") && $ < B.temperature - 0.05, et = (K.state === "cool" || K.state === "auto") && $ > B.temperature + 0.05, Lt = K.state === "off" ? "off" : gt ? "heating" : et ? "cooling" : "idle", Q = q ? Math.round(($ + (gt ? 0.1 : et ? -0.1 : 0)) * 10) / 10 : $;
      (Q !== $ || Lt !== B.hvac_action) && ot(tt, null, { current_temperature: Q, hvac_action: Lt });
    }), Object.keys(c).filter((tt) => tt.startsWith("humidifier.")).forEach((tt) => {
      const K = c[tt], B = K.attributes, $ = B.current_humidity, gt = K.state === "on" && $ < B.humidity, et = gt && q ? $ + 1 : $, Lt = K.state !== "on" ? "off" : gt ? "humidifying" : "idle";
      if (et !== $ || Lt !== B.action) {
        ot(tt, null, { current_humidity: et, action: Lt });
        const Q = "sensor." + ca + s[tt] + "_humidity";
        c[Q] && ot(Q, String(et));
      }
    });
    const it = c["vacuum." + ca + "robot"], lt = it.attributes;
    it.state === "cleaning" && q && ot(it.entity_id, null, { battery_level: Math.max(5, lt.battery_level - 1) }), it.state === "returning" && ot(it.entity_id, "docked", {}), it.state === "docked" && lt.battery_level < 100 && ot(it.entity_id, null, { battery_level: Math.min(100, lt.battery_level + 2) }), M && Date.now() - M.at > 5e3 && (ot("alarm_control_panel." + ca + "house", "armed_" + M.mode, {}), M = null), Y && i();
  }
  const O = setInterval(H, 1e3), V = setInterval(() => {
    P(), i();
  }, 60 * 1e3);
  function at(Y, q, ot) {
    const it = ot == null ? void 0 : ot.entity_id;
    if (!c[it]) return !1;
    const lt = c[it], tt = lt.attributes, K = (B, $) => g(it, B, $);
    if (Y === "climate" && (q === "set_temperature" && K(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, ot.temperature)) }), q === "set_hvac_mode" && K(ot.hvac_mode, ot.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && K(lt.state === "off" ? "heat" : "off", lt.state === "off" ? {} : { hvac_action: "off" })), Y === "cover") {
      const B = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? ot.position : q === "toggle" ? tt.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete y[it], delete E[it], K(tt.current_position === 0 ? "closed" : "open")), B != null && B !== tt.current_position && (y[it] = B, K(B > tt.current_position ? "opening" : "closing"));
      const $ = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? ot.tilt_position : null;
      q === "stop_cover_tilt" && delete E[it], $ != null && tt.current_tilt_position != null && $ !== tt.current_tilt_position && (E[it] = $);
    }
    if (Y === "humidifier" && (q === "set_humidity" && K(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, ot.humidity)) }), q === "set_mode" && K(null, { mode: ot.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const B = q === "turn_on" || q === "toggle" && lt.state !== "on";
      K(B ? "on" : "off", { action: B ? "idle" : "off" });
    }
    if (Y === "vacuum" && (q === "start" && K("cleaning", { rooms: ot.rooms || tt.rooms }), q === "pause" && K("paused"), q === "return_to_base" && K("returning", { rooms: [] }), q === "locate" && K(null, { located: Date.now() }), q === "set_rooms" && K(null, { rooms: ot.rooms })), Y === "valve") {
      const B = q === "open_valve" || q === "toggle" && lt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && K(B ? "open" : "closed");
    }
    if (Y === "alarm_control_panel") {
      q === "alarm_disarm" && (M = null, K("disarmed", { changed_by: "Matt" }));
      const B = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      B && (M = { mode: B, at: Date.now() }, K("arming", { changed_by: "Matt" }));
    }
    return i(), !0;
  }
  function J(Y) {
    const q = (Y == null ? void 0 : Y.states) || {}, ot = (Y == null ? void 0 : Y.entities) || {}, it = (Y == null ? void 0 : Y.devices) || {}, lt = (k) => {
      var pt;
      const z = ot[k];
      return z && (z.area_id || z.device_id && ((pt = it[z.device_id]) == null ? void 0 : pt.area_id)) || null;
    }, tt = (k) => {
      const z = ot[k];
      return q[k] && q[k].state !== "unavailable" && !(z != null && z.hidden) && !(z != null && z.entity_category);
    }, K = {};
    Object.keys(q).forEach((k) => {
      const z = lt(k);
      z && tt(k) && (K[z] || (K[z] = [])).push(k);
    });
    const B = { ...q, ...c }, $ = (k) => {
      var z, pt;
      return (pt = (z = B[k]) == null ? void 0 : z.attributes) == null ? void 0 : pt.device_class;
    }, gt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], et = Object.keys(q).filter((k) => k.startsWith("vacuum.") && tt(k)), Lt = Object.values((Y == null ? void 0 : Y.areas) || {}).filter((k) => !Nu.has(k.area_id)).map((k) => {
      const z = k.area_id, pt = K[z] || [], st = (Vt) => pt.filter((ae) => ae.startsWith(Vt + ".")), ct = (Vt) => st("sensor").filter((ae) => $(ae) === Vt), ut = (Vt) => Object.keys(c).filter((ae) => s[ae] === z && Vt(ae)), mt = (Vt, ae) => Vt.length ? Vt : ut(ae), Ft = mt(ct("temperature"), (Vt) => Vt.endsWith(z + "_temperature")), Jt = mt(ct("humidity"), (Vt) => Vt.endsWith(z + "_humidity")), Ht = ct("power").filter((Vt) => /^(W|kW)$/.test(B[Vt].attributes.unit_of_measurement || "")), Je = st("binary_sensor").filter((Vt) => $(Vt) === "moisture"), Ho = mt(st("plant"), (Vt) => Vt.startsWith("plant.")).map((Vt) => ({ id: Vt, readings: ut((ae) => ae.startsWith("sensor." + Vt.split(".")[1] + "_")) })), xn = [...st("binary_sensor").filter((Vt) => gt.includes($(Vt))), ...ut((Vt) => Vt.startsWith("binary_sensor."))];
      return {
        id: z,
        name: k.name,
        icon: k.icon,
        readings: [...Ft.slice(0, 1), ...Jt.slice(0, 1), ...Je],
        power: Ht.length ? Ht.reduce((Vt, ae) => Vt + Number(B[ae].state) * (B[ae].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: st("switch"),
        lights: st("light"),
        actions: [...st("light"), ...mt(st("climate"), (Vt) => Vt.startsWith("climate.")), ...mt(st("cover"), (Vt) => Vt.startsWith("cover.")), ...mt(st("humidifier"), (Vt) => Vt.startsWith("humidifier.")), ...mt(st("valve"), (Vt) => Vt.startsWith("valve.")), ...st("media_player"), ...st("vacuum"), ...et.length ? [] : ut((Vt) => Vt.startsWith("vacuum."))],
        solar: ut((Vt) => Vt.includes("_solar_")),
        plants: Ho,
        openings: xn,
        alerts: [...Je, ...xn].filter((Vt) => {
          var ae;
          return ((ae = B[Vt]) == null ? void 0 : ae.state) === "on";
        })
      };
    }).filter((k) => k.readings.length || k.plugs.length || k.actions.length || k.solar.length || k.plants.length), Q = Object.keys(q).find((k) => /^sensor\..*(p1_meter_power|grid_power)$/.test(k) && q[k].state !== "unavailable") || null, Mt = (k) => Object.keys(q).filter((z) => z.startsWith(k + ".") && tt(z)), A = Mt("alarm_control_panel"), N = et.length ? et : ["vacuum." + ca + "robot"];
    return {
      states: B,
      rooms: Lt,
      grid: Q,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (k) => c[k] ? s[k] : lt(k),
      vacuums: N,
      homeVacuums: N.filter((k) => !Lt.some((z) => z.actions.includes(k))),
      security: {
        alarms: A.length ? A : ["alarm_control_panel." + ca + "house"],
        locks: Mt("lock"),
        openings: [...Object.keys(c).filter((k) => k.startsWith("binary_sensor.")), "sensor." + ca + "doorbell"]
      }
    };
  }
  return { model: J, call: at, stop() {
    clearInterval(O), clearInterval(V);
  } };
}
const Ci = (i) => i < 0 ? 0 : i > 1 ? 1 : i, cc = (i) => {
  const c = String(i || "#000000").trim().replace("#", ""), s = c.length === 3 ? c.split("").map((u) => u + u).join("") : c;
  return [0, 2, 4].map((u) => parseInt(s.slice(u, u + 2), 16) || 0);
}, Ou = (i) => "#" + i.map((c) => Math.round(Math.max(0, Math.min(255, c))).toString(16).padStart(2, "0")).join(""), Sc = {}, Vn = (i, c, s) => {
  const u = i + c + s;
  return Sc[u] || (Sc[u] = Ou(cc(i).map((g, b) => g + (cc(c)[b] - g) * s)));
}, Cc = {}, hd = (i) => Cc[i] || (Cc[i] = cc(i));
function qu(i) {
  const c = { clear: [i.skyClearDay, i.skyClearNight], cloudy: [i.skyCloudyDay, i.skyCloudyNight], rain: [i.skyRainDay, i.skyRainNight], snow: [i.skySnowDay, i.skySnowNight], fog: [i.skyFogDay, i.skyFogNight] };
  return c.partly = [Vn(c.clear[0], c.cloudy[0], 0.12), Vn(c.clear[1], c.cloudy[1], 0.12)], c.storm = [Vn(c.rain[0], "#000000", 0.22), Vn(c.rain[1], "#000000", 0.22)], c;
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
], Mi = (i, c) => (Wu[(c & 7) * 8 + (i & 7)] + 0.5) / 64, Ap = 1, Ep = 2, _p = 3, Dp = 4, Ps = 5, bd = 6, pc = 7, Bp = 8, Tc = (i, c) => c <= 0.6665 && ((i - 0.5) * (i - 0.5) + (c - 0.2877) * (c - 0.2877) <= 0.0824 || (i - 0.25) * (i - 0.25) + (c - 0.416) * (c - 0.416) <= 0.0625 || (i - 0.791) * (i - 0.791) + (c - 0.458) * (c - 0.458) <= 0.0437 || i >= 0.25 && i <= 0.791 && c >= 0.416), ju = (i, c, s) => {
  let u = !1;
  for (let g = 0, b = i.length - 1; g < i.length; b = g++) {
    const y = i[g], E = i[b];
    y[1] > s != E[1] > s && c < (E[0] - y[0]) * (s - y[1]) / (E[1] - y[1]) + y[0] && (u = !u);
  }
  return u;
};
function zu(i, c, s, u, { oneBit: g, ink: b, paper: y, snowInk: E }) {
  const M = new Uint8ClampedArray(s * u * 4), P = hd(b), W = hd(y);
  for (let H = 0; H < u; H++) for (let O = 0; O < s; O++) {
    const V = H * s + O, at = c[V];
    if (i[V] == null) continue;
    let J = hd(i[V]);
    if (g) {
      let Y;
      at === Dp || at === Bp ? Y = !0 : at === Ps ? Y = E : at === pc || at === bd ? Y = !1 : Y = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= Mi(O, H), (at === Ap || at === Ep || at === _p || at === bd) && (O > 0 && c[V - 1] !== at || O < s - 1 && c[V + 1] !== at || H > 0 && c[V - s] !== at || H < u - 1 && c[V + s] !== at) && (Y = !0), J = Y ? P : W;
    }
    M[V * 4] = J[0], M[V * 4 + 1] = J[1], M[V * 4 + 2] = J[2], M[V * 4 + 3] = 255;
  }
  return { w: s, h: u, data: M };
}
const Vu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Gu = (i) => kd(i, !1).split("/")[0], Wd = (i) => () => {
  i |= 0, i = i + 1831565813 | 0;
  let c = Math.imul(i ^ i >>> 15, 1 | i);
  return c = c + Math.imul(c ^ c >>> 7, 61 | c) ^ c, ((c ^ c >>> 14) >>> 0) / 4294967296;
}, Uu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Yu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Zu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ku = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", $u = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Xu = [".##", "##.", ".#.", "#.."];
function Rp(i, { width: c, height: s, colors: u, wave: g = 0.38, soft: b = 6, glow: y = 0.6, columns: E = 6 }) {
  const M = { ...en, dawn: "#e5a77e", ...u }, P = qu(M), W = c, H = s, O = W / E, V = O / 2, at = Math.PI * 2, J = i.length ? i : [{ cond: "cloudy", night: !1 }], Y = [...Array(E * 2)].map((lt, tt) => {
    const K = J[Math.min(tt, J.length - 1)], B = Gu(K.cond), $ = tt % 2 === 1;
    return { cond: K.cond, k: B, night: $, sky: P[B][$ ? 1 : 0], cover: Vu[B] };
  }), q = (lt) => H * (0.5 - g * Math.cos(at * (lt / O - 0.25)));
  return { C: M, S: Y, W, H, cw: O, sw: V, TAU: at, yb: q, side: (lt, tt, K) => {
    const B = (lt ? q(tt) - K : K - q(tt)) / Math.max(3, b * 1.4) + 0.5;
    return B <= 0 ? 0 : B >= 1 ? 1 : B;
  }, glowAt: (lt) => {
    const tt = ((lt / O - 0.25) % 1 + 1) % 1, K = Math.max(0, Math.min(E - 1, Math.round(lt / O - 0.25))), B = Math.max(0, Math.min(E - 1, Math.round(lt / O - 0.75))), $ = 1 - (Y[2 * K].cover + Y[2 * B + 1].cover) / 2, gt = Math.sin(Math.PI * Math.min(1, Math.max(0, q(lt) / H)));
    return { c: tt < 0.5 ? M.dusk : M.dawn, a: y * (0.2 + 0.8 * $) * gt * gt };
  }, soft: b, tw: O * 0.3, sy: H / 90 };
}
function Pp(i, { clock: c = 0, ambient: s = !1, seed: u = 1 }) {
  const { S: g, sw: b, side: y, C: E, TAU: M, sy: P, H: W } = i, H = c, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((J, Y) => {
    const q = Wd(u * 977 + Y * 131 + 7), ot = (Y + 0.5) * b, it = J.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[J.k] : 0;
    for (let lt = 0; lt < it; lt++) {
      const tt = ot + (q() - 0.5) * b * 1.6, K = (6 + q() * 76) * P, B = q() < 0.35, $ = 1.8 + q() * 1.6, gt = y(!0, tt, K) * (B ? 0.95 : 0.7) * (s ? 0.6 + 0.4 * Math.sin(M * H / 2600 + lt * 1.7 + Y) : 1);
      gt >= 0.03 && O.stars.push({ x: tt, y: K, big: B, size: $, o: gt });
    }
    if (!J.night && (J.k === "clear" || J.k === "partly")) {
      const lt = ot + (q() - 0.5) * b * 0.3, tt = Math.min(15, b * 0.29);
      O.suns.push({ x: lt, y: 32 * P, rad: tt, halo: tt * 2.8 * (s ? 1 + 0.07 * Math.sin(M * H / 3600 + Y) : 1) });
    }
    if (J.night && (J.k === "clear" || J.k === "partly")) {
      const lt = Math.min(0.78, b * 0.55 / 34), tt = ot - 23 * lt + (q() - 0.5) * b * 0.2;
      O.moons.push({ x: tt + 23 * lt, y: (4 + (s ? 0.8 * Math.sin(M * H / 5200 + Y) : 0)) * P + 23 * lt, d: 46 * lt });
    }
  });
  const V = Math.max(56, Math.min(100, W * 0.45)), at = Math.max(1, b / (V * 2.4));
  return g.forEach((J, Y) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[J.k];
    if (!q) return;
    const ot = J.k === "partly" ? 1 : Math.round(q * at), it = Wd(u * 577 + Y * 71 + 3), lt = (Y + 0.5) * b, tt = J.k === "rain" || J.k === "storm" || J.night ? E.cloudNight : E.cloudDay, K = J.night ? 0.82 : J.k === "storm" ? 0.75 : 1;
    for (let B = 0; B < ot; B++) {
      const $ = V / 46 * (J.k === "partly" ? 1 : 0.8 + it() * 0.4), gt = lt + (J.k === "partly" ? b * 0.12 : ((B + 0.5) / ot - 0.5) * b * 0.95 + (it() - 0.5) * b * 0.5 / ot), et = (J.k === "partly" ? 40 : 6 + it() * 26) * P, Lt = s ? 2.5 * Math.sin(M * H / 9e3 + Y * 1.3 + B * 2.1) : 0, Q = s ? 0.9 * Math.sin(M * H / 6100 + Y + B) : 0;
      O.clouds.push({ x: gt - 23 * $ + Lt, y: et - 15.33 * $ + Q, w: 46 * $, h: 30.66 * $, fill: tt, o: K * (ot > 1 && B === 0 ? 0.85 : 1) });
    }
  }), g.forEach((J, Y) => {
    const q = Wd(u * 313 + Y * 29 + 11), ot = (Y + 0.5) * b, it = J.cond === "pouring" ? 16 : J.cond === "rainy" || J.cond === "hail" ? 9 : J.cond === "lightning-rainy" ? 12 : J.cond === "snowy-rainy" ? 5 : 0;
    for (let tt = 0; tt < it; tt++) {
      let K = ot + (q() - 0.5) * b * 1.05, B = 44 + q() * 36, $ = 1;
      if (s) {
        const et = ((B - 44 + H * 0.04) % 36 + 36) % 36;
        K -= 0.21 * (et - (B - 44)), B = 44 + et, $ = Math.min(1, et / 6, (36 - et) / 6);
      }
      B *= P;
      const gt = y(J.night, K, B) * $;
      gt >= 0.05 && O.drops.push({ x: K, y: B, o: gt });
    }
    const lt = J.cond === "snowy" ? 11 : J.cond === "snowy-rainy" ? 6 : 0;
    for (let tt = 0; tt < lt; tt++) {
      let K = ot + (q() - 0.5) * b * 1.05, B = 40 + q() * 44, $ = 1;
      if (s) {
        const et = ((B - 40 + H * 9e-3) % 44 + 44) % 44;
        B = 40 + et, K += 1.6 * Math.sin(M * H / 2800 + tt * 1.9 + Y), $ = Math.min(1, et / 6, (44 - et) / 6);
      }
      B *= P;
      const gt = y(J.night, K, B) * $;
      gt >= 0.05 && O.flakes.push({ x: K, y: B, o: gt });
    }
    if (J.k === "fog") {
      const tt = J.night ? "#c8ccd6" : "#ffffff", K = J.night ? 0.28 : 0.62, B = s ? 4 * Math.sin(M * H / 8e3 + Y) : 0;
      for (let $ = 0; $ < 4; $++) O.fogs.push({ x: ot - b * 0.75 + $ % 2 * b * 0.18 + ($ % 2 ? B : -B), y: (30 + $ * 13) * P, w: b * 1.3, c: tt, a: K });
    }
    if (J.k === "storm") {
      const tt = (H / 3400 + Y * 0.37) % 1;
      O.bolts.push({ x: ot + (q() - 0.5) * b * 0.3 - 5, y: 36 * P, o: s && !(tt < 0.05 || tt > 0.09 && tt < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function Ju(i, c, s, u, g, b, y, E) {
  const { S: M, C: P, cw: W, yb: H, glowAt: O, soft: V, tw: at, sy: J } = i, Y = new Array(s * u), q = new Uint8Array(s * u), ot = new Uint8Array(s * u), it = (A, N, k, z, pt) => {
    k == null || A < 0 || N < 0 || A >= s || N >= u || (z >= 1 || z > Mi(A + 5, N + 3)) && (Y[N * s + A] = k, q[N * s + A] = pt);
  }, lt = (A, N, k, z) => {
    for (let pt = Math.max(0, Math.floor(N - k) - 1); pt <= Math.min(u - 1, N + k + 1); pt++) for (let st = Math.max(0, Math.floor(A - k) - 1); st <= Math.min(s - 1, A + k + 1); st++) z(st, pt, st + 0.5 - A, pt + 0.5 - N);
  }, tt = (A, N, k) => {
    for (let pt = 0; pt < A.length - 1; pt++) {
      const st = (pt + N) * W;
      if (k < st - at / 2) return [A[pt], A[pt], 0];
      if (k <= st + at / 2) return [A[pt], A[pt + 1], (k - st + at / 2) / at];
    }
    const z = A[A.length - 1];
    return [z, z, 0];
  }, K = M.filter((A) => !A.night).map((A) => A.sky), B = M.filter((A) => A.night).map((A) => A.sky), $ = V / b, gt = 16 * J / b;
  for (let A = 0; A < s; A++) {
    const N = (A + 0.5) * g, k = H(N) / b, z = tt(K, 0.75, N), pt = tt(B, 1.25, N), st = O(N);
    for (let ct = 0; ct < u; ct++) {
      const ut = Mi(A, ct), mt = ct + 0.5 - k, Ft = ($ > 0.01 ? Ci(0.5 + mt / $) : mt > 0 ? 1 : 0) > ut;
      let Jt = Ft ? z[2] > ut ? z[1] : z[0] : pt[2] > ut ? pt[1] : pt[0];
      (Ft ? Ci(((ct + 0.5) / u - 0.45) / 0.55) * 0.7 : Ci(1 - (ct + 0.5) / (u * 0.55)) * 0.7) > Mi(A + 2, ct + 5) && (Jt = Ft ? Vn(Jt, "#ffffff", 0.18) : Vn(Jt, "#000000", 0.25)), Ft && mt >= 0 && mt < gt && st.a * 1.3 * (1 - mt / gt) > Mi(A + 6, ct + 1) && (Jt = st.c), Y[ct * s + A] = Jt, ot[ct * s + A] = Ft ? 0 : 1;
    }
  }
  const et = Vn(P.sun, "#ffffff", 0.55), Lt = Vn(P.moon, "#ffffff", 0.6);
  c.stars.forEach((A) => {
    const N = Math.floor(A.x / g), k = Math.floor(A.y / b);
    if (N < 0 || k < 0 || N >= s || k >= u || !ot[k * s + N] || A.o < 0.15) return;
    const z = A.o > 0.45 ? P.star : Vn(P.star, Y[k * s + N], 0.5), pt = A.big && A.o > 0.6 ? Math.floor(A.size / g) : 0;
    it(N, k, z, 1, pc);
    for (let st = 1; st <= pt; st++) [[N - st, k], [N + st, k], [N, k - st], [N, k + st]].forEach((ct) => {
      ct[0] >= 0 && ct[1] >= 0 && ct[0] < s && ct[1] < u && ot[ct[1] * s + ct[0]] && it(ct[0], ct[1], z, 1, pc);
    });
  }), c.suns.forEach((A) => {
    const N = Math.max(1.5, A.rad / g), k = A.x / g, z = A.y / b, pt = A.halo / g * 0.85;
    if (lt(k, z, pt, (st, ct, ut, mt) => {
      const Ft = Math.sqrt(ut * ut + mt * mt);
      Ft > N && Ft < pt && !ot[ct * s + st] && it(st, ct, et, 0.3 * (1 - (Ft - N) / (pt - N)), 0);
    }), E) {
      const st = Math.floor(y / 500) % 2, ct = Math.max(1, N * 0.3);
      for (let ut = 0; ut < 8; ut++) if (ut % 2 === st) for (let mt = N + 1.2; mt < N + 1.2 + ct; mt += 0.7) it(Math.floor(k + Math.cos(ut * Math.PI / 4) * mt), Math.floor(z + Math.sin(ut * Math.PI / 4) * mt), P.sun, 1, Bp);
    }
    lt(k, z, N, (st, ct, ut, mt) => {
      ut * ut + mt * mt <= N * N && it(st, ct, Ci(((mt / N + 1) / 2 - 0.6) / 0.4) > Mi(st, ct) ? P.sunEdge : P.sun, 1, Ap);
    });
  }), c.moons.forEach((A) => {
    const N = Math.max(1.5, A.d * 0.37 / g), k = A.x / g, z = A.y / b, pt = k + 0.547 * N, st = z - 0.503 * N, ct = 0.82 * N;
    lt(k, z, N, (ut, mt, Ft, Jt) => {
      if (Ft * Ft + Jt * Jt > N * N) return;
      const Ht = ut + 0.5 - pt, Je = mt + 0.5 - st;
      Ht * Ht + Je * Je > ct * ct && it(ut, mt, Ci((Jt + N) / (2 * N) * 1.1 - 0.1) > Mi(ut, mt) ? P.moon : Lt, 1, Ep);
    });
  }), c.clouds.forEach((A) => {
    const N = Math.max(3, A.w / g), k = N * 0.6665, z = A.x / g, pt = A.y / b, st = Vn(A.fill, "#000000", 0.16);
    for (let ct = Math.max(0, Math.floor(pt) - 1); ct <= Math.min(u - 1, pt + k + 1); ct++) for (let ut = Math.max(0, Math.floor(z) - 1); ut <= Math.min(s - 1, z + N + 1); ut++) {
      const mt = (ut + 0.5 - z) / N, Ft = (ct + 0.5 - pt) / N;
      Tc(mt, Ft) && it(ut, ct, !Tc(mt, Ft + 1 / N) || Ci((Ft - 0.42) / 0.25) * 0.8 > Mi(ut, ct) ? st : A.fill, A.o, _p);
    }
  }), c.fogs.forEach((A) => {
    const N = Math.floor(A.y / b), k = Math.max(N, Math.floor((A.y + 6 * J) / b) - 1), z = Math.floor(A.x / g), pt = Math.floor((A.x + A.w) / g);
    for (let st = N; st <= k; st++) for (let ct = z; ct <= pt; ct++) {
      const ut = (ct - z) / Math.max(1, pt - z);
      it(ct, st, A.c, A.a * (ut < 0.25 ? ut / 0.25 : ut > 0.75 ? (1 - ut) / 0.25 : 1), 0);
    }
  });
  const Q = Math.max(2, Math.round(9 / b));
  c.drops.forEach((A) => {
    const N = A.x / g, k = Math.floor(A.y / b);
    for (let z = 0; z < Q; z++) it(Math.floor(N - 0.208 * z * b / g), k + z, P.rain, A.o, Dp);
  });
  const Mt = Math.max(0, Math.round(4.4 / g / 2.6));
  return c.flakes.forEach((A) => {
    const N = Math.floor(A.x / g), k = Math.floor(A.y / b);
    it(N, k, P.snow, A.o, Ps);
    for (let z = 1; z <= Mt; z++)
      it(N - z, k, P.snow, A.o, Ps), it(N + z, k, P.snow, A.o, Ps), it(N, k - z, P.snow, A.o, Ps), it(N, k + z, P.snow, A.o, Ps);
  }), c.bolts.forEach((A) => {
    if (g <= 3.5)
      for (let N = Math.floor(A.y / b); N <= (A.y + 24) / b; N++) for (let k = Math.floor(A.x / g); k <= (A.x + 11) / g; k++)
        ju($u, (k + 0.5) * g - A.x, (N + 0.5) * b - A.y) && it(k, N, P.sun, 1, bd);
    else {
      const N = Math.round(A.x / g), k = Math.round(A.y / b);
      Xu.forEach((z, pt) => z.split("").forEach((st, ct) => {
        st === "#" && it(N + ct, k + pt, P.sun, 1, bd);
      }));
    }
  }), { col: Y, ids: q };
}
function Qu(i, c) {
  const s = c.px, u = Math.max(6, Math.round(c.width / s)), g = Math.max(6, Math.round(c.height / s)), b = c.width / u, y = c.height / g, E = c.ambient ? Math.floor((c.clock || 0) / 100) * 100 : 0, M = (V) => {
    const at = Rp(V, c);
    return Ju(at, Pp(at, { clock: E, ambient: c.ambient, seed: c.seed }), u, g, b, y, E, c.ambient);
  }, P = M(i), W = c.reveal == null ? 1 : Ci(c.reveal);
  let H = P.col, O = P.ids;
  if (W < 1) {
    const V = c.prev ? M(c.prev) : null, at = W * (u + 12);
    H = new Array(u * g), O = new Uint8Array(u * g);
    for (let J = 0; J < u * g; J++) {
      const Y = J % u, q = J / u | 0;
      (c.reduce ? W : Ci((at - Y) / 12)) > Mi(Y, q) ? (H[J] = P.col[J], O[J] = P.ids[J]) : V ? (H[J] = V.col[J], O[J] = V.ids[J]) : (H[J] = null, O[J] = 255);
    }
  }
  return zu(H, O, u, g, { oneBit: c.oneBit, ink: c.ink || "#26221e", paper: c.paper || "#fbf9f6", snowInk: !1 });
}
function tf(i, c, s) {
  const u = s.width, g = s.height, b = s.reveal == null ? 1 : Ci(s.reveal), y = (O, V) => {
    const at = Rp(V, s);
    ef(O, at, Pp(at, s));
  };
  if (i.clearRect(0, 0, u, g), b >= 1) {
    y(i, c);
    return;
  }
  if (s.prev && y(i, s.prev), s.reduce) {
    i.save(), i.globalAlpha = b, y(i, c), i.restore();
    return;
  }
  const E = i.canvas, M = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (M.width !== E.width || M.height !== E.height) && (M.width = E.width, M.height = E.height);
  const P = M.getContext("2d");
  P.setTransform(i.getTransform()), P.clearRect(0, 0, u, g), y(P, c);
  const W = b * (u + 64) - 64, H = P.createLinearGradient(W, 0, W + 64, 0);
  H.addColorStop(0, "rgba(0,0,0,1)"), H.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = H, P.fillRect(0, 0, u, g), P.globalCompositeOperation = "source-over", i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(M, 0, 0), i.restore();
}
function ef(i, c, s) {
  const { W: u, H: g, S: b, C: y, cw: E, yb: M, glowAt: P, soft: W, tw: H, sy: O } = c, V = i.getTransform().a || 1, at = (Q) => {
    i.shadowColor = Q ? "rgba(28,18,8,.22)" : "transparent", i.shadowBlur = Q ? 4 * V : 0, i.shadowOffsetY = Q ? 1.5 * V : 0;
  }, J = (Q, Mt) => {
    const A = hd(Q);
    return "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + Math.max(0, Math.min(1, Mt)).toFixed(3) + ")";
  }, Y = (Q, Mt) => {
    const A = i.createLinearGradient(0, 0, u, 0);
    A.addColorStop(0, Q[0]);
    for (let N = 0; N < Q.length - 1; N++) {
      const k = (N + Mt) * E, z = (k - H / 2) / u, pt = (k + H / 2) / u;
      z > 0 && z < 1 && A.addColorStop(z, Q[N]), pt > 0 && pt < 1 && A.addColorStop(pt, Q[N + 1]);
    }
    return A.addColorStop(1, Q[Q.length - 1]), A;
  }, q = Math.max(24, Math.ceil(u / 4)), ot = (Q, Mt) => {
    i.beginPath();
    for (let A = 0; A <= q; A++) {
      const N = u * A / q, k = Q == null ? 0 : M(N) + Q;
      A ? i.lineTo(N, k) : i.moveTo(N, k);
    }
    for (let A = q; A >= 0; A--) {
      const N = u * A / q;
      i.lineTo(N, M(N) + Mt);
    }
    i.closePath(), i.fill();
  };
  i.save(), i.fillStyle = Y(b.filter((Q) => !Q.night).map((Q) => Q.sky), 0.75), i.fillRect(0, 0, u, g);
  const it = i.createLinearGradient(0, 0, u, 0);
  for (let Q = 0; Q <= 64; Q++) {
    const Mt = P(u * Q / 64);
    it.addColorStop(Q / 64, J(Mt.c, Math.min(1, Mt.a)));
  }
  i.fillStyle = it;
  for (let Q = 0; Q < 8; Q++)
    i.globalAlpha = 1 - Q / 8, ot(Q * 2 * O, (Q + 1) * 2 * O);
  i.fillStyle = Y(b.filter((Q) => Q.night).map((Q) => Q.sky), 1.25);
  const lt = Math.max(0.5, W), tt = 6;
  i.globalAlpha = 1, ot(null, -lt);
  for (let Q = 0; Q < tt; Q++)
    i.globalAlpha = 1 - (Q + 0.5) / tt, ot(-lt + 2 * lt * Q / tt, -lt + 2 * lt * (Q + 1) / tt);
  i.globalAlpha = 1;
  const K = new Path2D(Zu), B = new Path2D(Yu), $ = new Path2D(Uu), gt = new Path2D(Ku);
  i.fillStyle = y.star, s.stars.forEach((Q) => {
    i.globalAlpha = Q.o, Q.big ? (i.save(), i.translate(Q.x, Q.y), i.scale(Q.size, Q.size), i.fill(K), i.restore()) : (i.beginPath(), i.arc(Q.x, Q.y, 0.8, 0, Math.PI * 2), i.fill());
  }), i.globalAlpha = 1;
  const et = Vn(y.sun, "#ffffff", 0.55);
  s.suns.forEach((Q) => {
    const Mt = i.createRadialGradient(Q.x, Q.y, 0, Q.x, Q.y, Q.halo);
    Mt.addColorStop(0, J(et, 0.42)), Mt.addColorStop(0.7, J(et, 0)), i.fillStyle = Mt, i.beginPath(), i.arc(Q.x, Q.y, Q.halo, 0, Math.PI * 2), i.fill();
    const A = i.createLinearGradient(0, Q.y - Q.rad, 0, Q.y + Q.rad);
    A.addColorStop(0.6, y.sun), A.addColorStop(1, y.sunEdge), i.fillStyle = A, at(!0), i.beginPath(), i.arc(Q.x, Q.y, Q.rad, 0, Math.PI * 2), i.fill(), at(!1);
  });
  const Lt = Vn(y.moon, "#ffffff", 0.6);
  s.moons.forEach((Q) => {
    i.save(), i.translate(Q.x - Q.d / 2, Q.y - Q.d / 2), i.scale(Q.d / 46, Q.d / 46);
    const Mt = i.createLinearGradient(0, 6, 0, 40);
    Mt.addColorStop(0, Lt), Mt.addColorStop(1, y.moon), i.fillStyle = Mt, at(!0), i.fill(B), at(!1), i.restore();
  }), s.clouds.forEach((Q) => {
    i.save(), i.globalAlpha = Q.o, i.translate(Q.x, Q.y), i.scale(Q.w / 46, Q.h / 30.66), i.translate(-4, -9.67), i.fillStyle = Q.fill, at(!0), i.fill($), at(!1), i.restore();
  }), s.fogs.forEach((Q) => {
    const Mt = i.createLinearGradient(Q.x, 0, Q.x + Q.w, 0);
    Mt.addColorStop(0, J(Q.c, 0)), Mt.addColorStop(0.25, J(Q.c, Q.a)), Mt.addColorStop(0.75, J(Q.c, Q.a)), Mt.addColorStop(1, J(Q.c, 0)), i.fillStyle = Mt, i.fillRect(Q.x, Q.y, Q.w, 6 * O);
  }), i.fillStyle = y.rain, s.drops.forEach((Q) => {
    i.save(), i.globalAlpha = Q.o, i.translate(Q.x, Q.y), i.rotate(12 * Math.PI / 180), i.fillRect(-1.5, 0, 3, 9), i.restore();
  }), i.fillStyle = y.snow, s.flakes.forEach((Q) => {
    i.globalAlpha = Q.o, i.beginPath(), i.arc(Q.x, Q.y, 2.2, 0, Math.PI * 2), i.fill();
  }), i.fillStyle = y.sun, s.bolts.forEach((Q) => {
    i.save(), i.globalAlpha = Q.o, i.translate(Q.x, Q.y), i.fill(gt), i.restore();
  }), i.restore();
}
const af = (i) => i === "sunny" ? "clear" : i === "clear-night" ? "night" : i === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(i) ? "rain" : ["snowy", "snowy-rainy"].includes(i) ? "snow" : "cloudy", Ds = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, od = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, jd = (i, c) => '<path class="' + c + '" d="' + i + '"/>', nf = (i, c) => ' style="animation-delay:-' + Math.round(i * 137 % c) + 'ms"', jn = (i, c, s, u) => {
  const g = s * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + nf(i, 2400) + ' d="M' + i + " " + (c - s) + "L" + (i + g) + " " + (c - g) + "L" + (i + s) + " " + c + "L" + (i + g) + " " + (c + g) + "L" + i + " " + (c + s) + "L" + (i - g) + " " + (c + g) + "L" + (i - s) + " " + c + "L" + (i - g) + " " + (c - g) + 'Z"/>';
}, Lc = ([i, c, s], u) => '<path class="wbMoonPath" d="' + i + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + c + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', of = (i, c) => c ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + i + ')"/><defs><linearGradient id="' + i + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + i + ')"/><defs><linearGradient id="' + i + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', rf = (i) => (i ? ["29.35", "43.04", "56.74"].map((c, s) => '<g class="wbDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wbAccent" x="' + c + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + c + ' 60.65)"/></g>') : [19, 26, 33].map((c, s) => '<g class="wbDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + c + ' 38)"/></g>')).join(""), sf = (i) => (i ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([c, s], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + c + '" cy="' + s + '" r="' + (i ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function lf(i, c, s, u) {
  const g = (b) => '<g filter="url(#' + u + '-sh)">' + b + "</g>";
  return i === "clear" ? c ? g(Lc(s ? od.l : od.s, u)) + (s ? jn(70, 20, 5.83, 1) + jn(78.33, 41.67, 3.75, 0.8) + jn(60, 71.67, 3.33, 0.6) : jn(42, 12, 3.5, 1) + jn(47, 25, 2.25, 0.8) + jn(36, 43, 2, 0.6)) : g(of(u, s)) : i === "partly" ? g(c ? Lc(s ? od.lp : od.sp, u) : s ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(jd(s ? Ds.lp : Ds.sp, c ? "wbCloudLight" : "wbBright")) + (c ? s ? jn(73.33, 16.67, 4.17, 0.9) : jn(44, 10, 2.5, 0.9) : "") : i === "cloudy" ? g(jd(s ? Ds.lc : Ds.s, c ? "wbCloudLight" : "wbBright")) + (c ? s ? jn(15, 15, 3.75, 0.8) + jn(76.67, 13.33, 2.92, 0.6) : jn(9, 9, 2.25, 0.8) + jn(46, 8, 1.75, 0.6) : "") : g(jd(s ? Ds.lr : Ds.s, "wbCloudLight")) + (i === "rain" ? rf(s) : sf(s));
}
const df = (i, c) => '<defs><filter id="' + i + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (c ? 1.6 : 1) + '" stdDeviation="' + (c ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function cf(i, c, s, u) {
  let g = af(i);
  const b = g === "night" || !!s;
  g === "night" && (g = "clear");
  const y = c ? 90 : 54;
  return { k: g, night: b, svg: '<svg viewBox="0 0 ' + y + " " + y + '">' + df(u, c) + lf(g, b, c, u) + "</svg>" };
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
], id = (i, c) => (pf[c % 8 * 8 + i % 8] + 0.5) / 64, co = (i) => [parseInt(i.slice(1, 3), 16), parseInt(i.slice(3, 5), 16), parseInt(i.slice(5, 7), 16)], Na = (i, c, s) => [Math.round(i[0] + (c[0] - i[0]) * s), Math.round(i[1] + (c[1] - i[1]) * s), Math.round(i[2] + (c[2] - i[2]) * s)], Cl = (i) => i < 0 ? 0 : i > 1 ? 1 : i, Ac = (i, c) => {
  let s = i * 374761393 + c * 668265263 ^ 1540483477;
  return s = Math.imul(s ^ s >>> 13, 1274126177), ((s ^ s >>> 16) >>> 0) / 4294967296;
}, jr = [255, 255, 255], $a = co("#26221e"), Ec = co("#0288d1"), uf = co("#01579b"), zd = co(en.cloudDay), Vd = co(en.cloudNight), rd = co(en.dusk), Gd = co(en.sunEdge), ff = co(en.sun), hf = 10, _c = 0.3, Ti = 56, Np = 21;
function mf(i) {
  const c = Array.from({ length: Np }, () => new Array(Ti).fill(void 0)), s = (y, E, M) => {
    c[E][y] = M;
  }, u = Na(rd, $a, 0.35), g = Na($a, jr, 0.22);
  for (let y = 0; y <= 6; y++) {
    const E = y < 2 ? Ti - 2 : Ti - 1;
    for (let M = 6 - y; M <= E; M++) s(M, y, y < 2 ? u : y === 6 ? g : $a);
  }
  const b = [rd, Gd, Vd, co(en.skyRainDay), Na(rd, $a, 0.2), Na(i, $a, 0.35)];
  [2, 3, 2, 3, 3].forEach((y, E) => {
    const M = 9 + E * 6;
    for (let P = 0; P < y; P++) {
      const W = b[(E * 2 + P * 3) % b.length];
      for (let H = M; H < M + 5; H++)
        s(H, 7 + P * 2, Na(W, $a, 0.12)), s(H, 8 + P * 2, P === y - 1 ? Na(W, jr, 0.3) : W);
      s(M + 5, 7 + P * 2, $a), s(M + 5, 8 + P * 2, $a);
    }
  });
  for (let y = 7; y <= 12; y++) s(5, y, $a);
  s(5, 13, Gd);
  for (let y = 7; y <= 14; y++) for (let E = 42; E <= 51; E++) s(E, y, E === 51 ? Vd : zd);
  for (let y = 43; y <= 50; y += 2)
    s(y, 12, $a), s(y, 9, Na($a, zd, 0.4));
  for (let y = 40; y <= 53; y++) s(y, 14, y === 40 || y === 53 ? Vd : zd);
  for (let y = 15; y <= 18; y++) for (let E = 46; E <= 49; E++) s(E, y, y === 18 ? $a : y === 16 ? Gd : rd);
  for (let y = 15; y <= 19; y++) s(44, y, $a);
  return s(44, 20, ff), c;
}
function gf(i, c, s, u) {
  const g = Math.max(1, Math.round(i)), b = Math.max(1, Math.round(c)), y = new Uint8ClampedArray(g * b * 4), E = co(u.skyClearDay), M = co(u.skyFogDay), P = mf(E), W = Math.round(b * 0.55), H = Cl(1 - Math.log(s / _c) / Math.log(hf / _c)), O = Na(E, M, H), V = (q) => Cl((q - 0.1) / 0.9), at = Cl((1 - Math.exp(-2 / s) - 0.2) / 0.8), J = Math.round(g / 2 - Ti / 2), Y = W + 3;
  for (let q = 0; q < b; q++) {
    const ot = Y - 1 - q, it = q - Y;
    for (let lt = 0; lt < g; lt++) {
      const tt = lt - J;
      let K, B;
      const $ = ot >= 0 && ot < Np && tt >= 0 && tt < Ti ? P[ot][tt] : void 0;
      if ($)
        K = $, B = at;
      else if (ot >= 0 && ot <= 1 && tt >= 4 - ot && tt <= 5 - ot)
        K = Na(jr, Ec, 0.15), B = at;
      else if (q < W) {
        const Lt = Cl(((q + 0.5) / W - 0.15) / 0.85) * 3, Q = Math.min(3, Math.floor(Lt + id(lt + 2, q + 5)));
        K = Na(O, jr, Q * 0.1), B = H * 0.95;
      } else {
        const Lt = (q - W + 0.5) / (b - W), Q = Math.min(1.5, 6e-3 / (Lt * Lt)), Mt = Cl(Lt * 1.4) * 3, A = Math.min(3, Math.floor(Mt + id(lt + 1, q + 6)));
        K = Na(Ec, uf, A / 3);
        const N = 1 + Math.round(Lt * 7), k = Math.floor(lt / (N * 3)), z = 0.06 + 0.16 * Lt, pt = lt % (N * 3) < N;
        pt && Ac(k, q) < z ? K = Na(K, jr, 0.18 + 0.1 * (1 - Lt)) : pt && Lt > 0.5 && Ac(k, q - 1) < z && (K = Na(K, $a, 0.12)), B = V(1 - Math.exp(-Q / s)), it === 0 && tt >= 3 && tt <= 8 ? (K = Na(K, jr, tt < 6 ? 0.8 : 0.45), B = at) : it >= 0 && it <= 2 && tt >= Ti && tt < Ti + 40 ? ((1 - (tt - Ti) / 40) * (it === 1 ? 0.9 : 0.5) > id(lt, q + 3) && (K = Na(K, jr, 0.5)), B = at) : it === 0 && tt >= 6 && tt < Ti && (K = Na(K, $a, tt % 2 === 0 ? 0.35 : 0.2), B = at);
      }
      const gt = B > id(lt, q) ? M : K, et = (q * g + lt) * 4;
      y[et] = gt[0], y[et + 1] = gt[1], y[et + 2] = gt[2], y[et + 3] = 255;
    }
  }
  return { data: y, w: g, h: b };
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
function wf(i, c) {
  const s = i ? vf[String(i).toUpperCase()] : void 0;
  if (!s || !(c > 0)) return;
  const u = (b) => Math.abs(Math.log(b[2] / c)), g = s.reduce((b, y) => u(y) < u(b) ? y : b);
  return u(g) <= Math.log(bf) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const xf = (i, c) => c === "mi" ? i * 1.609344 : c === "m" ? i / 1e3 : c === "ft" ? i * 3048e-7 : c === "yd" ? i * 9144e-7 : i, yf = (i) => i < 1 ? "very_poor" : i < 4 ? "poor" : i < 10 ? "moderate" : i < 20 ? "good" : i < 40 ? "very_good" : "excellent", Ve = {
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
}, Ie = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Ia = () => {
  var i;
  return !!((i = window.matchMedia) != null && i.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function kf() {
  const { pivot: i, slider: c, iconbtn: s, warp: u, outline: g } = Ve;
  return [
    ["--pv-persp", i.persp + "px"],
    ["--pv-shine", i.shine / 100],
    ["--pv-size", i.size + "%"],
    ["--pv-ret", i.ret + "ms"],
    ["--pv-ease", Ie[i.ease]],
    ["--ab-blur", c.glow + "px"],
    ["--ab-spread", c.spread + "px"],
    ["--ab-str", c.strength + "%"],
    ["--ab-blur2", c.glow + c.hold + "px"],
    ["--ab-spread2", c.spread + c.hold / 4 + "px"],
    ["--ab-str2", c.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (c.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", c.ein + "ms"],
    ["--ab-out", c.eout + "ms"],
    ["--ab-ease", Ie[c.ease]],
    ["--ih-s", s.scale / 100],
    ["--ih-p", s.press / 100],
    ["--ih-dur", s.dur + "ms"],
    ["--ih-ease", Ie[s.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", u.cdur + "ms"],
    ["--wc-delay", u.cdelay + "ms"],
    ["--wc-ease", Ie[u.ease]],
    ["--ol-esens", g.glowFrom],
    ["--ol-csens", g.colourFrom],
    ["--ol-cone", g.cone],
    ["--ol-glow", g.glow / 100],
    ["--ol-border", g.border / 100],
    ["--ol-fill", g.fill / 100],
    ["--ol-size", g.size / 100],
    ["--ol-h", g.hue + "deg"],
    ["--ol-in", g.fin + "ms"],
    ["--ol-out", g.fout + "ms"]
  ].map(([b, y]) => b + ":" + y).join(";");
}
const Ud = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Mf = "#homeView .tfAreaPanel", Sf = 300, md = (i) => Math.min(1, Sf / Math.max(1, i)), Yd = (i, c) => 1 + (c / 100 - 1) * md(i.offsetWidth);
function Cf(i, c) {
  c.style.cssText += ";" + kf();
  let s = null;
  const u = (W) => {
    W.classList.remove("mvMoving", "mvLit"), W.style.setProperty("--rx", "0deg"), W.style.setProperty("--ry", "0deg"), W.style.setProperty("--sc", 1), W._down = !1;
  };
  i.addEventListener("pointermove", (W) => {
    var q, ot;
    const H = W.pointerType === "touch" || Ia() ? null : (ot = (q = W.target).closest) == null ? void 0 : ot.call(q, Ud);
    if (s && s !== H && u(s), s = H, !H || H.disabled) return;
    const O = Ve.pivot, V = H.getBoundingClientRect(), at = (W.clientX - V.left) / V.width, J = (W.clientY - V.top) / V.height, Y = 1;
    H.classList.add("mvPv", "mvMoving", "mvLit"), H.style.setProperty("--pv-persp", O.persp / md(Math.max(H.offsetWidth, H.offsetHeight)) + "px"), H.style.setProperty("--ry", (Y * (at - 0.5) * 2 * O.tilt * md(H.offsetWidth)).toFixed(3) + "deg"), H.style.setProperty("--rx", (Y * -(J - 0.5) * 2 * O.tilt * md(H.offsetHeight)).toFixed(3) + "deg"), H.style.setProperty("--mx", (at * 100).toFixed(1) + "%"), H.style.setProperty("--my", (J * 100).toFixed(1) + "%"), H._down || H.style.setProperty("--sc", Yd(H, O.lift));
  }, { passive: !0 }), i.addEventListener("pointerout", (W) => {
    s && !s.contains(W.relatedTarget) && (u(s), s = null);
  }), i.addEventListener("pointerdown", (W) => {
    var O, V;
    const H = Ia() ? null : (V = (O = W.target).closest) == null ? void 0 : V.call(O, Ud);
    H && (H._down = !0, H.classList.add("mvPv"), H.classList.remove("mvMoving"), H.style.setProperty("--sc", Yd(H, Ve.pivot.press)));
  }), i.addEventListener("pointerup", (W) => {
    var O, V;
    const H = (V = (O = W.target).closest) == null ? void 0 : V.call(O, Ud);
    H && (H._down = !1, H.style.setProperty("--sc", W.pointerType === "touch" ? 1 : Yd(H, Ve.pivot.lift)));
  });
  let g = null;
  i.addEventListener("pointerover", (W) => {
    var H, O, V;
    W.pointerType !== "touch" && ((V = (O = (H = W.target).closest) == null ? void 0 : O.call(H, ".tfBar")) == null || V.classList.add("mvHover"));
  }), i.addEventListener("pointerout", (W) => {
    var O, V;
    const H = (V = (O = W.target).closest) == null ? void 0 : V.call(O, ".tfBar");
    H && !H.contains(W.relatedTarget) && H !== g && H.classList.remove("mvHover");
  }), i.addEventListener("pointerdown", (W) => {
    var O, V;
    const H = (V = (O = W.target).closest) == null ? void 0 : V.call(O, ".tfBar");
    H && (g = H, H.classList.add("mvHold"));
  });
  const b = (W) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const H = g.getBoundingClientRect();
    (W.pointerType === "touch" || W.clientX < H.left || W.clientX > H.right || W.clientY < H.top || W.clientY > H.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", b, !0), i.addEventListener("focusin", (W) => {
    var H, O;
    (O = (H = W.target).matches) != null && O.call(H, ".tfBar:focus-visible") && W.target.classList.add("mvHover");
  }), i.addEventListener("focusout", (W) => {
    var H;
    (H = W.target.classList) == null || H.remove("mvHover", "mvHold");
  }), i.addEventListener("keydown", (W) => {
    var O, V;
    const H = (V = (O = W.target).closest) == null ? void 0 : V.call(O, ".tfBar");
    !H || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(W.key) || (H.classList.add("mvHold"), clearTimeout(H._k), H._k = setTimeout(() => H.classList.remove("mvHold"), 350));
  }), i.addEventListener("click", (W) => {
    var O, V;
    const H = (V = (O = W.target).closest) == null ? void 0 : V.call(O, "button.tfIcon[data-act]");
    H && Tf(H);
  });
  let y = null;
  const E = (W, H, O) => {
    W.querySelector(":scope>.mvEdge") || W.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const V = W.getBoundingClientRect(), at = V.width / 2, J = V.height / 2, Y = H.clientX - V.left - at, q = H.clientY - V.top - J, ot = Y ? at / Math.abs(Y) : 1 / 0, it = q ? J / Math.abs(q) : 1 / 0, lt = Math.min(Math.max(1 / Math.min(ot, it), 0), 1);
    let tt = Math.atan2(q, Y) * 180 / Math.PI + 90;
    tt < 0 && (tt += 360);
    const K = O ? 100 : lt * 100;
    W.style.setProperty("--edge-proximity", K.toFixed(3)), W.style.setProperty("--cursor-angle", tt.toFixed(3) + "deg"), W.classList.toggle("mvLitEdge", O || K >= Ve.outline.lightAt);
  }, M = (W) => {
    W.classList.remove("mvLitEdge"), W.style.setProperty("--edge-proximity", "0"), W._down = !1;
  }, P = (W) => {
    var O;
    const H = (O = W.closest) == null ? void 0 : O.call(W, Mf);
    return H && !c.classList.contains("tfEditing") ? H : null;
  };
  i.addEventListener("pointermove", (W) => {
    if (W.pointerType === "touch") return;
    const H = P(W.target);
    y && y !== H && M(y), y = H, H && !H._down && E(H, W, !1);
  }, { passive: !0 }), i.addEventListener("pointerout", (W) => {
    y && !y.contains(W.relatedTarget) && (M(y), y = null);
  }), i.addEventListener("pointerdown", (W) => {
    const H = P(W.target);
    H && Ve.outline.press && (H._down = !0, E(H, W, !0));
  }), i.addEventListener("pointerup", (W) => {
    const H = P(W.target);
    H && (H._down = !1, W.pointerType === "touch" ? M(H) : E(H, W, !1));
  }), new MutationObserver((W) => {
    var H;
    for (const O of W) {
      const V = O.target;
      if (O.type === "attributes") {
        (H = V.classList) != null && H.contains("tfMoreBackdrop") && !V.hidden && O.oldValue !== null && Dc(V);
        continue;
      }
      O.addedNodes.forEach((at) => {
        at.nodeType === 1 && at.classList.contains("tfMoreBackdrop") && !at.hidden && Dc(at);
      });
    }
  }).observe(c, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Ip = (i) => i.closest("[data-k],.tfMore,.tfMorePair") || i.getRootNode();
function Hp(i, c) {
  const s = [];
  for (let u = i; u && u !== c && u.parentNode; u = u.parentNode) s.unshift([...u.parentNode.children].indexOf(u));
  return s;
}
const Fp = (i, c) => c.reduce((s, u) => s == null ? void 0 : s.children[u], i);
function Tf(i) {
  var V;
  if (Ia() || i._warp) return;
  const c = Ve.warp, s = c.amount / 100, u = i.firstElementChild;
  if (!u) return;
  const g = { squash: { scale: 1 + 0.35 * s + " " + (1 - 0.55 * s) }, pinch: { scale: String(1 - 0.5 * s) }, twist: { rotate: 140 * s + "deg", scale: String(1 - 0.35 * s) }, flip: { rotate: "y 90deg" } }[c.style], b = "blur(" + 2 * s + "px)", y = i.getRootNode(), E = Ip(i), M = (V = E.dataset) == null ? void 0 : V.k, P = Hp(i, E), W = i.getAttribute("aria-pressed") + "|" + i.dataset.act;
  i._warp = 1;
  const H = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: b }], { duration: c.win, easing: Ie.exit, fill: "forwards" }), O = performance.now();
  H.finished.then(() => {
    const at = () => {
      var lt, tt;
      const J = M ? E.isConnected ? E : (lt = y.querySelector) == null ? void 0 : lt.call(y, '[data-k="' + CSS.escape(M) + '"]') : E, Y = J && Fp(J, P);
      if (Y === i && i.getAttribute("aria-pressed") + "|" + i.dataset.act === W && performance.now() - O < 420) {
        requestAnimationFrame(at);
        return;
      }
      (((tt = Y == null ? void 0 : Y.matches) != null && tt.call(Y, "button.tfIcon") ? Y : i).firstElementChild || u).animate([{ ...g, filter: b }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: c.wout, easing: Ie[c.ease] }), H.cancel(), i._warp = 0;
    };
    at();
  });
}
function Lf(i, c, s) {
  var W;
  if (Ia() || !i || !c) return;
  const u = Ve.expand, g = i.getBoundingClientRect(), b = "inset(" + (c.top - g.top).toFixed(1) + "px " + (g.right - c.right).toFixed(1) + "px " + (g.bottom - c.bottom).toFixed(1) + "px " + (c.left - g.left).toFixed(1) + "px round 24px)", y = i.firstElementChild, E = y == null ? void 0 : y.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), M = [...i.children].slice(1);
  i.animate([{ clipPath: b }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: u.dur, easing: Ie[u.ease] });
  const P = (W = y == null ? void 0 : y.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : W.getBoundingClientRect();
  y && P && s && y.animate([{ transform: "translate(" + (s.left - P.left).toFixed(1) + "px," + (s.top - P.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: u.dur, easing: Ie[u.ease] }), E == null || E.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: u.dur, easing: Ie[u.ease] }), M.forEach((H, O) => {
    H.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: u.delay + O * u.stagger, easing: Ie.standard, fill: "backwards" });
  });
}
function Af(i, c, s) {
  if (Ia() || !i || !c) {
    s();
    return;
  }
  const u = Ve.expand, g = u.dur * u.back / 100, b = i.getBoundingClientRect(), y = "inset(" + (c.top - b.top).toFixed(1) + "px " + (b.right - c.right).toFixed(1) + "px " + (b.bottom - c.bottom).toFixed(1) + "px " + (c.left - b.left).toFixed(1) + "px round 24px)";
  [...i.children].slice(1).forEach((W) => W.animate([{ opacity: 1 }, { opacity: 0 }], { duration: g * 0.3, easing: Ie.standard, fill: "forwards" }));
  const E = i.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: y, opacity: 1, offset: 0.85 }, { clipPath: y, opacity: 0 }], { duration: g, easing: Ie.standard, fill: "forwards" });
  let M = !1;
  const P = () => {
    M || (M = !0, s());
  };
  E.finished.then(P, P), setTimeout(P, g + 80);
}
const Op = (i) => {
  let c = "M" + i[0][0].toFixed(1) + " " + i[0][1].toFixed(1);
  for (let s = 0; s < i.length - 1; s++) {
    const u = i[s - 1] || i[s], g = i[s], b = i[s + 1], y = i[s + 2] || b, E = [g[0] + (b[0] - u[0]) / 6, g[1] + (b[1] - u[1]) / 6], M = [b[0] - (y[0] - g[0]) / 6, b[1] - (y[1] - g[1]) / 6];
    c += "C" + E.map((P) => P.toFixed(1)).join(" ") + " " + M.map((P) => P.toFixed(1)).join(" ") + " " + b.map((P) => P.toFixed(1)).join(" ");
  }
  return c;
}, qp = (i, c, s, u = "mvGrid") => [0, 1, 2].map((g) => {
  const b = (c + (s - c) * g / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + i + '" y1="' + b + '" y2="' + b + '"/>';
}).join("");
function Wp(i, c = i.querySelector(".mvLine"), s = i.querySelectorAll(".mvArea,.mvDot")) {
  if (Ia() || !(c != null && c.getTotalLength)) return;
  const u = Ve.graphs, g = c.getTotalLength();
  c.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: u.draw, easing: Ie.standard }), [...s].forEach((b, y) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + y * 12, easing: Ie.standard, fill: "backwards" }));
}
function jp(i, c, s, u, g) {
  if (i.getAnimations().forEach((W) => W.cancel()), i.style.left = u + "px", i.style.width = g + "px", Ia() || c === u && s === g) return;
  const b = Ve.tabs, y = b.stretch / 100, E = (W, H) => ({ left: W + "px", width: H + "px" }), P = u > c ? E(c + (u - c) * (0.15 * (1 - y)), u + g - (c + (u - c) * (0.15 * (1 - y)))) : E(u, c + s - u - (c - u) * (0.15 * (1 - y)));
  i.animate([E(c, s), { offset: 0.5, ...P }, E(u, g)], { duration: b.dur, easing: Ie.standard });
}
function Ef(i) {
  const c = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", s = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (g, b) => b ? [...g.children].indexOf(b) : -1;
  i.addEventListener("click", (g) => {
    var ot, it, lt;
    const b = (it = (ot = g.target).closest) == null ? void 0 : it.call(ot, c + ">button"), y = b == null ? void 0 : b.parentElement;
    if (!y || Ia() || b.disabled) return;
    const E = s(y);
    if (!E || E === b) return;
    const M = u(y, E), P = y.getBoundingClientRect(), W = E.getBoundingClientRect(), H = getComputedStyle(E).borderRadius, O = y.getRootNode(), V = Ip(y), at = (lt = V.dataset) == null ? void 0 : lt.k, J = Hp(y, V), Y = performance.now(), q = () => {
      var Q, Mt, A;
      const tt = at && !V.isConnected ? (Q = O.querySelector) == null ? void 0 : Q.call(O, '[data-k="' + CSS.escape(at) + '"]') : V, K = tt && Fp(tt, J), B = (Mt = K == null ? void 0 : K.matches) != null && Mt.call(K, c) ? s(K) : null;
      if (!B || u(K, B) === M) {
        performance.now() - Y < 700 && requestAnimationFrame(q);
        return;
      }
      const $ = K.getBoundingClientRect(), gt = B.getBoundingClientRect(), et = getComputedStyle(B);
      (A = K.querySelector(":scope>.mvSegInd")) == null || A.remove();
      const Lt = document.createElement("span");
      Lt.className = "mvSegInd", Lt.style.cssText = "top:" + (gt.top - $.top - K.clientTop) + "px;height:" + gt.height + "px;border-radius:" + H + ";background:" + et.backgroundColor + ";box-shadow:" + et.boxShadow, getComputedStyle(K).position === "static" && (K.style.position = "relative"), K.prepend(Lt), K.classList.add("mvSegMoving"), jp(Lt, W.left - P.left - K.clientLeft, W.width, gt.left - $.left - K.clientLeft, gt.width), clearTimeout(K._seg), K._seg = setTimeout(() => {
        Lt.remove(), K.classList.remove("mvSegMoving");
      }, Ve.tabs.dur + 20);
    };
    requestAnimationFrame(q);
  }, !0);
}
const zp = (i) => getComputedStyle(i).placeItems.startsWith("end");
function Dc(i) {
  const c = i.firstElementChild;
  if (Ia() || !c || c.classList.contains("still")) return;
  const s = Ve.dialog;
  i.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + s.blur + "px)" }], { duration: s.open, easing: Ie.standard }), c.style.animation = "none", c.animate(zp(i) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + s.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: s.open, easing: Ie[s.ease] }), [...(c.classList.contains("tfMorePair") && c.querySelector(".tfMore") || c).children].forEach((g, b) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: s.open * 0.6, delay: s.open * 0.35 + b * 40, easing: Ie.standard, fill: "backwards" }));
}
function _f(i, c) {
  const s = i == null ? void 0 : i.firstElementChild;
  if (Ia() || !s || i.hidden || i._closing) {
    c();
    return;
  }
  const u = Ve.dialog;
  i._closing = !0, i.style.pointerEvents = "none", i.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: Ie.exit, fill: "forwards" });
  const g = s.animate(zp(i) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: Ie.exit, fill: "forwards" });
  let b = !1;
  const y = () => {
    b || (b = !0, i._closing = !1, i.style.pointerEvents = "", i.getAnimations().forEach((E) => E.cancel()), s.getAnimations().forEach((E) => E.cancel()), c());
  };
  g.finished.then(y, y), setTimeout(y, u.close + 80);
}
const Df = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Bf(i, c) {
  i.replaceChildren(), i.insertAdjacentHTML("afterbegin", Df), i.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: c }));
}
function Rf(i) {
  if (Ia()) return;
  const c = Ve.confirm;
  i.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: c.dur, easing: Ie.spring });
  const s = i.querySelector(".mvTick path");
  s && c.draw && s.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: c.dur * 0.5, easing: Ie.standard, fill: "backwards" });
}
const Bc = (i, c, s, u, g = 1) => (i + c * s * g) * Math.pow(u, g);
function Pf(i) {
  const c = Ve.drag.squash / 100;
  !i || Ia() || !c || i.animate([{ transform: "scale(" + (1 + c * 0.4) + "," + (1 - c) + ")" }, { transform: "scale(" + (1 - c * 0.1) + "," + (1 + c * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Rc(i) {
  if (!i || Ia()) return;
  const c = Ve.expand;
  [...i.children].slice(1).forEach((s, u) => s.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: c.delay + u * c.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Aa = 6e4, ve = 36e5, wn = 864e5, Ll = 1440, Nf = 6, If = 10 * Aa, Pc = 3, Hf = 3, sd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Ff = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Of = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Nc = (i, c, s, u) => '<circle cx="' + i + '" cy="' + c + '" r="' + s + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const b = Math.cos(g * Math.PI / 180), y = Math.sin(g * Math.PI / 180), E = s + 2, M = s + 2 + u;
  return "M" + (i + b * E).toFixed(2) + " " + (c + y * E).toFixed(2) + "L" + (i + b * M).toFixed(2) + " " + (c + y * M).toFixed(2);
}).join("") + '"/>', xi = (i) => '<path d="' + Of + '"' + (i ? ' transform="' + i + '"' : "") + "/>", yi = (i) => '<path d="' + i + '"/>', Ic = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function qf(i, c) {
  const s = "translate(0,-3)";
  switch (i) {
    case "sunny":
      return c ? Ic : Nc(12, 12, 4, 2.5);
    case "clear-night":
      return Ic;
    case "partlycloudy":
      return (c ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Nc(7.5, 7.5, 2.6, 1.4)) + xi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return xi();
    case "fog":
      return yi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return xi(s) + yi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return xi(s) + yi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return xi(s) + yi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return xi(s) + yi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return xi(s) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return xi(s) + yi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return xi(s) + yi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return yi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + yi("M12 8v5M12 16h.01");
  }
}
const Zd = (i, c) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + qf(i, c) + "</svg>", Wf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), jf = 30 * Aa, zf = 7, Vf = 3, Hc = 1, Gf = Aa, Uf = 15 * Aa, Yf = 5, be = {
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
}, yt = {
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
}, Kf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], $f = Object.keys(yt.phases), Xf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Fc = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Vp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ld = 100, Oc = "µg/m³", Jf = "weather_alerts.air_quality_pollen", wd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Qf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, th = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], eh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, ah = { daily: 1, hourly: 2 }, Tt = (i) => String(i ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]), Ra = (i, c) => i.replace(/\{(\w+)\}/g, (s, u) => c[u] ?? ""), Si = (i) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + i + '"/></svg>', qc = /* @__PURE__ */ new Map();
function Gp(i) {
  let c = qc.get(i);
  if (c === void 0) {
    const s = "http://www.w3.org/2000/svg", u = document.createElementNS(s, "svg"), g = document.createElementNS(s, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", i), u.append(g), document.body.append(u);
    const b = g.getBBox();
    u.remove();
    const y = Math.max(b.width, b.height), E = y ? 26 * 24 / y : 0, M = E / 24;
    c = y ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * M).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * M).toFixed(2) + "px" : "", qc.set(i, c);
  }
  return c ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + c + '"><path d="' + i + '"/></svg>' : Si(i);
}
const nh = () => {
  var i;
  return !!((i = window.matchMedia) != null && i.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Te = (i) => i != null && i !== "" && Number.isFinite(Number(i)), Wc = /* @__PURE__ */ new Map(), jc = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new WeakMap(), oh = (i) => {
  switch (i == null ? void 0 : i.number_format) {
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
      return i == null ? void 0 : i.language;
  }
};
function de(i, c, s) {
  const u = Number(i);
  if (Number.isNaN(u)) return String(i);
  const g = (c == null ? void 0 : c.number_format) === "none", b = { maximumFractionDigits: 2, ...s, ...g ? { useGrouping: !1 } : {} }, y = g ? "en-US" : oh(c), E = JSON.stringify([y, b]);
  let M = Wc.get(E);
  if (!M) {
    try {
      M = new Intl.NumberFormat(y, b);
    } catch {
      M = new Intl.NumberFormat(void 0, b);
    }
    Wc.set(E, M);
  }
  return M.format(u);
}
const bc = (i) => {
  var c;
  return ((c = i == null ? void 0 : i.locale) == null ? void 0 : c.language) || (i == null ? void 0 : i.language) || void 0;
};
function ih(i) {
  if (!i) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Kd.has(i)) return Kd.get(i);
  const c = i.time_format, s = c === "language" || c === "system" || !c ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(c === "language" ? i.language : void 0).includes("10") : c === "12";
  return Kd.set(i, s), s;
}
const Up = (i) => {
  var c, s;
  return ((c = i == null ? void 0 : i.locale) == null ? void 0 : c.time_zone) === "server" && ((s = i == null ? void 0 : i.config) != null && s.time_zone) ? i.config.time_zone : void 0;
};
function Yp(i, c) {
  const s = JSON.stringify([i, c]);
  let u = jc.get(s);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(i, c);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...c, timeZone: void 0 });
    }
    jc.set(s, u);
  }
  return u;
}
const Pa = (i, c) => Yp(bc(c), { hour: "numeric", minute: "2-digit", hourCycle: ih(c == null ? void 0 : c.locale) ? "h12" : "h23", timeZone: Up(c) }).format(i), zc = (i, c) => Yp(bc(c), { weekday: "short", timeZone: Up(c) }).format(i), rh = (i, c) => i.toLocaleDateString(bc(c), { weekday: "narrow" }), Fe = (i, c) => Te(c) ? de(Math.round(Number(c)), i.locale) + "°" : "–", ur = (i) => {
  const c = new Date(i);
  return c.setHours(0, 0, 0, 0), c;
}, Bs = (i, c) => i.getFullYear() === c.getFullYear() && i.getMonth() === c.getMonth() && i.getDate() === c.getDate(), tn = Math.PI / 180, sh = 2440588, lh = 2451545, xd = tn * 23.4397, dh = 149598e3, ch = -0.833 * tn, ph = 0.133 * tn, Vc = 5 * Aa, Zp = (i) => i.getTime() / wn - 0.5 + sh - lh, Kp = (i, c) => Math.atan2(Math.sin(i) * Math.cos(xd) - Math.tan(c) * Math.sin(xd), Math.cos(i)), $p = (i, c) => Math.asin(Math.sin(c) * Math.cos(xd) + Math.cos(c) * Math.sin(xd) * Math.sin(i)), uh = (i, c) => tn * (280.16 + 360.9856235 * i) - c, fh = (i, c, s) => Math.asin(Math.sin(c) * Math.sin(s) + Math.cos(c) * Math.cos(s) * Math.cos(i));
function Xp(i) {
  const c = tn * (357.5291 + 0.98560028 * i), s = tn * (1.9148 * Math.sin(c) + 0.02 * Math.sin(2 * c) + 3e-4 * Math.sin(3 * c)), u = c + s + tn * 102.9372 + Math.PI;
  return { ra: Kp(u, 0), dec: $p(u, 0), dist: dh };
}
function Jp(i) {
  const c = tn * (218.316 + 13.176396 * i), s = tn * (134.963 + 13.064993 * i), u = tn * (93.272 + 13.22935 * i), g = c + tn * 6.289 * Math.sin(s), b = tn * 5.128 * Math.sin(u);
  return { ra: Kp(g, b), dec: $p(g, b), dist: 385001 - 20905 * Math.cos(s) };
}
const Qp = (i, c, s, u) => {
  const g = Zp(c), b = i(g);
  return fh(uh(g, tn * -u) - b.ra, tn * s, b.dec);
}, yd = (i, c, s) => Qp(Xp, i, c, s), hh = (i, c, s) => Qp(Jp, i, c, s);
function tu(i, c, s, u) {
  const g = {};
  let b = s.getTime(), y = i(s) - c;
  for (let E = b + Vc; E <= u.getTime(); E += Vc) {
    const M = i(new Date(E)) - c;
    if (y < 0 != M < 0) {
      const P = new Date(b + (E - b) * y / (y - M));
      M > 0 ? g.rise ?? (g.rise = P) : g.set ?? (g.set = P);
    }
    b = E, y = M;
  }
  return g;
}
const eu = (i) => {
  const c = ur(i);
  return [c, new Date(c.getTime() + wn)];
}, mh = (i, c, s) => tu((u) => yd(u, c, s), ch, ...eu(i)), gh = (i, c, s) => tu((u) => hh(u, c, s), ph, ...eu(i));
function $d(i) {
  const c = Zp(i), s = Xp(c), u = Jp(c), g = Math.acos(Math.sin(s.dec) * Math.sin(u.dec) + Math.cos(s.dec) * Math.cos(u.dec) * Math.cos(s.ra - u.ra)), b = Math.atan2(s.dist * Math.sin(g), u.dist - s.dist * Math.cos(g)), y = Math.atan2(Math.cos(s.dec) * Math.sin(s.ra - u.ra), Math.sin(s.dec) * Math.cos(u.dec) - Math.cos(s.dec) * Math.sin(u.dec) * Math.cos(s.ra - u.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (y < 0 ? -1 : 1) / Math.PI };
}
const vh = (i) => {
  const c = i * 28;
  return c < 0.5 || c > 27.5 ? "new_moon" : c < 6.5 ? "waxing_crescent" : c < 7.5 ? "first_quarter" : c < 13.5 ? "waxing_gibbous" : c < 14.5 ? "full_moon" : c < 20.5 ? "waning_gibbous" : c < 21.5 ? "last_quarter" : "waning_crescent";
}, Al = (i) => {
  const c = i == null ? void 0 : i.config;
  return c && Te(c.latitude) && Te(c.longitude) ? { lat: Number(c.latitude), lon: Number(c.longitude) } : null;
};
function Rs(i, c) {
  var P, W, H;
  const s = Al(i), u = s ? mh(c, s.lat, s.lon) : {}, g = (P = i == null ? void 0 : i.states) == null ? void 0 : P["sun.sun"], b = ur(c).getTime(), y = (O) => {
    const V = O ? new Date(O) : null;
    return V && Number.isFinite(V.getTime()) && ur(V).getTime() === b ? V : null;
  }, E = y((W = g == null ? void 0 : g.attributes) == null ? void 0 : W.next_rising), M = y((H = g == null ? void 0 : g.attributes) == null ? void 0 : H.next_setting);
  return E && (u.rise = E), M && (u.set = M), u;
}
function bh(i) {
  var u;
  const c = (u = i == null ? void 0 : i.states) == null ? void 0 : u["sun.sun"];
  if ((c == null ? void 0 : c.state) === "below_horizon" || (c == null ? void 0 : c.state) === "above_horizon") return c.state === "below_horizon";
  const s = Al(i);
  return s ? yd(/* @__PURE__ */ new Date(), s.lat, s.lon) < 0 : !1;
}
const zr = (i) => !!i && i.state !== "unavailable" && i.state !== "unknown", Ns = (i, c) => {
  var u;
  const s = (u = i.entities) == null ? void 0 : u[c];
  return !s || !s.hidden && !s.entity_category;
}, Xe = (i, c, s) => {
  var u, g;
  for (const b of c) {
    const y = (u = i.states) == null ? void 0 : u[b];
    if (!zr(y)) continue;
    const E = (g = y.attributes) == null ? void 0 : g[s];
    if (E != null && E !== "") return { stateObj: y, value: E };
  }
}, wh = (i, c) => c.map((s) => {
  var u;
  return (u = i.states) == null ? void 0 : u[s];
}).find(zr), xh = (i, c, s) => c.map((u) => {
  var g;
  return (g = i.states) == null ? void 0 : g[u];
}).find((u) => {
  var g;
  return zr(u) && (((g = u.attributes) == null ? void 0 : g.supported_features) == null || Number(u.attributes.supported_features) & ah[s]);
});
function cr(i, c, s) {
  var b, y, E, M;
  const u = ((y = (b = i.config) == null ? void 0 : b.unit_system) == null ? void 0 : y.length) || "", g = (c == null ? void 0 : c.attributes) || {};
  switch (s) {
    case "precipitation":
      return g.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return g.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return g.wind_speed_unit || u + "/h";
    case "visibility":
      return g.visibility_unit || u;
    default:
      return g.temperature_unit || ((M = (E = i.config) == null ? void 0 : E.unit_system) == null ? void 0 : M.temperature) || "";
  }
}
function gd(i, c, s, u) {
  try {
    if (typeof i.formatEntityAttributeValueToParts == "function") {
      const [g, ...b] = i.formatEntityAttributeValueToParts(c, s, u).map((y) => y.value);
      return { number: g, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: de(u, i.locale), unit: cr(i, c, s) };
}
function Gc(i, c, s, u) {
  try {
    if (typeof i.formatEntityAttributeValue == "function") return i.formatEntityAttributeValue(c, s, u);
  } catch {
  }
  const g = gd(i, c, s, u);
  return (g.number + " " + g.unit).trim();
}
function ki(i, c) {
  var u;
  try {
    if (typeof i.formatEntityState == "function") return i.formatEntityState(c);
  } catch {
  }
  const s = (u = c.attributes) == null ? void 0 : u.unit_of_measurement;
  return Zf[c.state] || (s && Te(c.state) ? de(c.state, i.locale) + " " + s : c.state);
}
function lr(i, c) {
  var s;
  try {
    if (typeof i.formatEntityName == "function") return i.formatEntityName(c, { type: "entity" });
  } catch {
  }
  return ((s = c.attributes) == null ? void 0 : s.friendly_name) || c.entity_id;
}
const Uc = (i) => i < 3 ? "low" : i < 6 ? "moderate" : i < 8 ? "high" : i < 11 ? "very_high" : "extreme", dd = (i) => Vp.find(([, c]) => i <= c)[0];
function yh(i, c) {
  if (c === "Beaufort") return Math.round(i);
  const s = c ? Qf[c] : void 0;
  if (s === void 0) return;
  const u = th.findIndex((g) => i * s < g);
  return u === -1 ? 12 : u;
}
const Yc = (i, c) => {
  const s = c ? eh[c] : void 0;
  return s === void 0 ? void 0 : i * s;
}, Zc = (i) => Object.keys(i.states || {}).find((c) => {
  var s, u;
  return c.startsWith("sensor.") && ((u = (s = i.entities) == null ? void 0 : s[c]) == null ? void 0 : u.platform) === "moon";
}), Xd = (i) => Object.values(i.states || {}).filter((c) => {
  var s, u;
  return c.entity_id.startsWith("sensor.") && ((s = c.attributes) == null ? void 0 : s.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = c.attributes) == null ? void 0 : u.state_class) ?? "") && Ns(i, c.entity_id);
}).map((c) => c.entity_id).sort()[0];
function kh(i) {
  var s;
  const c = {};
  for (const [u, g] of Object.entries(((s = i == null ? void 0 : i.core) == null ? void 0 : s.integration) ?? {})) {
    if (g && "integration_type" in g) {
      c[u] = g.categories;
      continue;
    }
    for (const [b, y] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) c[b] = y == null ? void 0 : y.categories;
  }
  return c;
}
const au = (i, c, s) => {
  var g, b, y;
  const u = (b = (g = i.entities) == null ? void 0 : g[s]) == null ? void 0 : b.platform;
  return !!u && !!((y = c[u]) != null && y.includes(Jf));
};
function Mh(i, c) {
  const s = /* @__PURE__ */ new Map();
  return Object.values(i.states || {}).filter((u) => {
    var g;
    return u.entity_id.startsWith("sensor.") && wd.includes(((g = u.attributes) == null ? void 0 : g.device_class) ?? "") && Ns(i, u.entity_id) && au(i, c, u.entity_id);
  }).sort((u, g) => u.entity_id.localeCompare(g.entity_id)).forEach((u) => {
    s.has(u.attributes.device_class) || s.set(u.attributes.device_class, u.entity_id);
  }), wd.map((u) => s.get(u)).filter(Boolean);
}
const Sh = (i, c) => Object.values(i.states || {}).filter((s) => {
  var u, g;
  return s.entity_id.startsWith("sensor.") && Ns(i, s.entity_id) && au(i, c, s.entity_id) && (((g = (u = i.entities) == null ? void 0 : u[s.entity_id]) == null ? void 0 : g.translation_key) ?? s.entity_id).toLowerCase().includes("pollen");
}).map((s) => s.entity_id).sort();
function Kc(i, c, s) {
  const u = Math.max(c - i, 1e-6), g = s[s.length - 1], b = s.find((P) => u / P <= 4) ?? g * Math.ceil(u / (4 * g)), y = Math.floor(i / b) * b;
  let E = Math.ceil(c / b) * b;
  E === y && (E = y + b);
  const M = [];
  for (let P = y; P <= E + b / 1e3; P += b) M.push(P);
  return { min: y, max: E, ticks: M };
}
const Ch = (i, c, s) => {
  const u = (y) => [1, 3, 5].map((E) => parseInt(y.slice(E, E + 2), 16)), g = u(i), b = u(c);
  return "rgb(" + g.map((y, E) => Math.round(y + (b[E] - y) * s)).join(", ") + ")";
}, Th = (i, c, s, u) => {
  const g = s * Math.abs(1 - 2 * u), b = u < 0.5 ? 0 : 1;
  return "M " + i + " " + (c - s) + " A " + s + " " + s + " 0 0 0 " + i + " " + (c + s) + " A " + g + " " + s + " 0 0 " + b + " " + i + " " + (c - s) + " Z";
}, Ka = ({ icon: i, name: c, sub: s, visual: u, double: g, backdrop: b, cls: y, zone: E, callouts: M }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (y ? " " + y : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Gp(i) + '</div><div class="wbText"><span class="wbName">' + Tt(c) + "</span>" + (s ? '<span class="wbSub">' + Tt(s) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (M != null && M.length ? '<div class="wbCallouts">' + M.slice(0, 3).map((P) => Array.isArray(P) ? '<span class="wbCallout"><span>' + Tt(P[0]) + "</span><span>" + Tt(P[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Tt(P) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", cd = (i) => '<div class="wbZoneM">' + i + "</div>", zn = (i, c) => '<div class="wbValue"><span class="wbNum">' + Tt(i) + "</span>" + (c ? '<span class="wbUnitV">' + Tt(c) + "</span>" : "") + "</div>";
function Lh(i) {
  const c = i.max - i.min || 1, s = (E) => 100 - (Math.min(i.max, Math.max(i.min, E)) - i.min) / c * 100, u = (E) => E / Ll * 100 + "%", g = (E) => E.map((M) => M.t + "," + s(M.v)).join(" "), b = i.kind === "line" ? i.points : [];
  let y = '<div class="wbDayChart"><div class="wbDcSun">' + i.sun.map((E) => '<span class="wbDcSunMark" style="left:' + u(E.t) + '">' + Si(E.rise ? be.sunsetUp : be.sunsetDown) + Tt(E.label) + "</span>").join("") + "</div>";
  return y += '<div class="wbDcY">' + i.ticks.map((E) => '<span style="top:' + s(E) + '%">' + Tt(i.format(E)) + "</span>").join("") + "</div>", y += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ll + ' 100" preserveAspectRatio="none">' + i.night.map(([E, M]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (M - E) + '" height="100"></rect>').join("") + i.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + Ll + '" y1="' + s(E) + '" y2="' + s(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + i.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (i.past && i.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(i.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + g(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (i.now ? '<line class="wbDcNow" x1="' + i.now.t + '" x2="' + i.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (i.kind === "bars" ? i.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + u(E.t + 12) + ";width:" + u(36) + ";height:" + (100 - s(E.v)) + '%"></i>').join("") : "") + (i.now && i.kind === "line" ? '<i class="wbDcDot" style="left:' + u(i.now.t) + ";top:" + s(i.now.v) + '%"></i>' : "") + (i.peak ? '<span class="wbDcPeak" style="left:' + u(i.peak.t) + ";top:" + s(i.peak.v) + '%">' + Tt(i.peak.label) + "</span>" : "") + (i.note ? '<span class="wbDcNote">' + Tt(i.note) + "</span>" : "") + "</div>", y += '<div class="wbDcX">' + i.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + u(E.t) + '">' + Tt(E.label) + "</span>").join("") + "</div></div>", y;
}
function $c(i, c, s = 120, u = 300) {
  const y = i.map((q) => q.value), E = Math.min(...y), M = Math.max(...y), P = M - E || 1, W = (q) => q / (i.length - 1) * u, H = (q) => 18 + (1 - (q - E) / P) * (s - 18 - 18), O = i.map((q, ot) => [W(ot), H(q.value)]), V = O.length > 2 ? Op(O) : "M" + O.map((q) => q[0].toFixed(1) + " " + q[1].toFixed(1)).join("L"), at = y.indexOf(M), J = y.indexOf(E), Y = (q) => q === 0 ? "start" : q === i.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + s + '" aria-hidden="true">' + qp(u, 18, s - 18) + ('<path class="wbArea" d="' + V + "L" + u + " " + (s - 18) + "L0 " + (s - 18) + 'Z"></path>') + '<path class="wbLine" d="' + V + '" vector-effect="non-scaling-stroke"></path><text x="' + W(at) + '" y="' + (H(M) - 6) + '" text-anchor="' + Y(at) + '">' + Tt(c(M)) + '</text><text x="' + W(J) + '" y="' + (H(E) + 14) + '" text-anchor="' + Y(J) + '">' + Tt(c(E)) + '</text><text x="0" y="' + s + '" text-anchor="start">' + Tt(i[0].label) + '</text><text x="' + u + '" y="' + s + '" text-anchor="end">' + Tt(i[i.length - 1].label) + "</text></svg>";
}
function Ah(i, c) {
  const b = i.map((H) => H.value).concat([]), y = Math.min(...b) - 2, E = Math.max(...b) + 1, M = E - y || 1, P = 300 / i.length, W = (H) => (1 - (H - y) / M) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + i.map((H, O) => '<rect class="wbBar' + (H.now ? " wbNowBar" : "") + '" x="' + (O * P + P * 0.2) + '" y="' + W(H.value) + '" width="' + P * 0.6 + '" height="' + (104 - W(H.value)) + '" rx="6"></rect><text x="' + (O * P + P / 2) + '" y="120" text-anchor="middle">' + Tt(H.label) + "</text>").join("") + "</svg>";
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
function Jc(i, { getHass: c, entityId: s, style: u = "bitmap", motion: g = !0, cards: b, onOpen: y, hoursWindow: E } = {}) {
  var Ta, Jn;
  const M = "wb" + ++Bh + "-", P = document.createElement("div");
  P.className = "wb", P.dataset.style = u;
  const W = document.createElement("div");
  W.className = "wbBento", P.appendChild(W), i.replaceChildren(P);
  const H = ["aq_tile", "pollen_tile", "radar_tile"], O = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !b || b.includes(f)), V = { current: "wide", hourly: "wide", compared_to_average: "double" }, at = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], J = {};
  O.forEach((f) => {
    const v = document.createElement("div");
    v.className = "wbItem", v.dataset.card = f, v.dataset.size = V[f] || "tile", v.hidden = !0, at.includes(f) && (v.dataset.xl = ""), W.appendChild(v), J[f] = { el: v, html: null };
  });
  let Y = !1, q = null, ot = 0, it = -1, lt = !1, tt = null;
  const K = "homecore-next-view", B = (() => {
    try {
      return localStorage.getItem(K);
    } catch {
      return null;
    }
  })(), $ = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: B === "bars" ? "bars" : "strip", aq: void 0 }, gt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let et = /* @__PURE__ */ new Date(), Lt = /* @__PURE__ */ new Date();
  const Q = {}, Mt = {}, A = {}, N = (f) => {
    var v;
    return ((v = A[f]) == null ? void 0 : v.forecast) ?? [];
  }, k = (f, v) => {
    var w;
    return A[v] ? (w = f.states) == null ? void 0 : w[A[v].entityId] : void 0;
  };
  function z(f) {
    const v = Mt[f];
    v && (v.unsub.then((w) => {
      typeof w == "function" && w();
    }).catch(() => {
    }), delete Mt[f]), A[f] && delete A[f];
  }
  function pt(f, v, w) {
    var I;
    if (typeof ((I = f.connection) == null ? void 0 : I.subscribeMessage) != "function") return;
    const S = { entityId: w };
    try {
      S.unsub = Promise.resolve(f.connection.subscribeMessage((G) => {
        Y || Mt[v] !== S || (G != null && G.forecast ? A[v] = { entityId: w, forecast: G.forecast } : delete A[v], Kn());
      }, { type: "weather/subscribe_forecast", forecast_type: v, entity_id: w }));
    } catch (G) {
      S.unsub = Promise.reject(G);
    }
    S.unsub.catch(() => {
      Mt[v] === S && delete Mt[v];
    }), Mt[v] = S;
  }
  function st(f, v) {
    var w;
    for (const S of ["daily", "hourly"]) {
      const I = xh(f, v, S);
      ((w = Mt[S]) == null ? void 0 : w.entityId) !== (I == null ? void 0 : I.entity_id) && (z(S), I && pt(f, S, I.entity_id));
    }
  }
  const ct = (f, v, w, S = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: w.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [v],
    minimal_response: S,
    no_attributes: S,
    significant_changes_only: !1
  });
  async function ut(f, v) {
    var U, nt, Z;
    const w = Xe(f, v, "pressure");
    if (!w) return;
    const S = w.stateObj.entity_id, I = await ct(f, S, new Date(Date.now() - 3 * ve)), G = (Z = (nt = (U = I == null ? void 0 : I[S]) == null ? void 0 : U.find((rt) => {
      var dt;
      return typeof ((dt = rt.a) == null ? void 0 : dt.pressure) == "number";
    })) == null ? void 0 : nt.a) == null ? void 0 : Z.pressure;
    gt.pressureHistory = typeof G == "number" ? { entityId: S, value: G } : void 0;
  }
  async function mt(f, v) {
    var nt;
    const w = Xe(f, v, "temperature");
    if (!w) return;
    const S = w.stateObj.entity_id, I = ur(/* @__PURE__ */ new Date()), G = await ct(f, S, new Date(I.getTime() - zf * wn)), U = /* @__PURE__ */ new Map();
    for (const Z of (G == null ? void 0 : G[S]) ?? []) {
      const rt = (nt = Z.a) == null ? void 0 : nt.temperature, dt = new Date((Z.lc ?? Z.lu) * 1e3);
      if (typeof rt != "number" || dt >= I) continue;
      const vt = dt.toDateString();
      U.set(vt, Math.max(U.get(vt) ?? -1 / 0, rt));
    }
    gt.temperatureHistory = { entityId: S, dailyHighs: [...U.values()], days: [...U.entries()].map(([Z, rt]) => ({ date: new Date(Z), high: rt })) };
  }
  async function Ft(f) {
    const v = Xd(f);
    if (!v) return;
    const w = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: v, rolling_window: { duration: { hours: 24 } } });
    gt.rain = { entityId: v, change: (w == null ? void 0 : w.change) ?? void 0 };
  }
  function Jt() {
    const f = c == null ? void 0 : c();
    if (!f || Y || typeof f.callWS != "function") return;
    const v = xn(f);
    gt.lastFetch = Date.now(), [ut(f, v), mt(f, v), Ft(f)].forEach((w) => w.then(() => Kn(), () => {
    }));
  }
  async function Ht() {
    const f = c == null ? void 0 : c();
    if (!f) return;
    const v = Xe(f, xn(f), "temperature");
    if (!v) return;
    const w = v.stateObj.entity_id, S = ur(/* @__PURE__ */ new Date());
    try {
      const I = await ct(f, w, S), G = (U) => ((I == null ? void 0 : I[w]) ?? []).map((nt) => {
        var Z;
        return { time: nt.lu * 1e3, value: (Z = nt.a) == null ? void 0 : Z[U] };
      }).filter((nt) => typeof nt.value == "number");
      gt.todayHistory = { day: S.toDateString(), fetched: Date.now(), temperature: G("temperature"), humidity: G("humidity") }, Kn();
    } catch {
    }
  }
  async function Je(f) {
    const v = c == null ? void 0 : c();
    if (v)
      try {
        const w = await ct(v, f, new Date(Date.now() - 24 * ve), !0), S = ((w == null ? void 0 : w[f]) ?? []).filter((G) => Te(G.s)), I = Math.max(1, Math.ceil(S.length / 48));
        gt.aqHistory = { entityId: f, points: S.filter((G, U) => U % I === 0).map((G) => ({ label: Pa(new Date(G.lu * 1e3), v), value: Number(G.s) })) }, Kn();
      } catch {
      }
  }
  function Ho(f) {
    gt.categories === void 0 && (gt.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((v) => {
      gt.categories = kh(v);
    }, () => {
      gt.categories = {};
    }).then(() => Kn()));
  }
  function xn(f) {
    var w;
    const v = Object.keys(f.states || {}).filter((S) => S.startsWith("weather.") && Ns(f, S)).sort();
    return s && ((w = f.states) != null && w[s]) ? [s, ...v.filter((S) => S !== s)] : v;
  }
  const Vt = (f) => gt.categories ? { air: Mh(f, gt.categories), pollen: Sh(f, gt.categories) } : { air: [], pollen: [] };
  function ae(f, v, w, S) {
    if (u === "line") return '<span class="wbWx wbS' + v + ' wbLineIcon" aria-hidden="true">' + Zd(f, w || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const I = cf(f, v === 90, w, M + "g-" + S);
      return '<span class="wbWx wbS' + v + " wb" + I.k[0].toUpperCase() + I.k.slice(1) + (I.night ? " wbNight" : "") + '" aria-hidden="true">' + I.svg + "</span>";
    }
    return '<span class="wbWx wbS' + v + '" aria-hidden="true"><canvas data-wb-wx="' + Tt(kd(f, w)) + '" data-size="' + v + '"></canvas></span>';
  }
  const oe = () => N("daily").filter((f) => f.templow != null).slice(0, Nf);
  function an(f, v) {
    const w = new Date(v.datetime), S = /* @__PURE__ */ new Date();
    return Bs(w, S) ? yt.today : Bs(w, new Date(S.getTime() + wn)) ? yt.tomorrow : zc(w, f);
  }
  const Ge = (f, v, w) => w === 0 ? an(f, v) : zc(new Date(v.datetime), f);
  function ee(f, v) {
    var dt, vt, Ot, _t;
    const w = wh(f, v);
    if (!w) return "";
    const S = oe(), I = $.openDay !== void 0 ? S[$.openDay] : void 0, G = Xe(f, v, "temperature"), U = S[0], nt = U && Bs(new Date(U.datetime), /* @__PURE__ */ new Date()), Z = ((vt = (dt = f.config) == null ? void 0 : dt.unit_system) == null ? void 0 : vt.temperature) || ((Ot = w.attributes) == null ? void 0 : Ot.temperature_unit) || "";
    let rt = '<div class="wbCard wbWeather' + (I ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (I ? " inert" : "") + '><div class="wbNow">' + (y ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Tt(yt.openPage) + '">' : '<div class="wbCurrent">') + ae(w.state, 90, bh(f), "now") + '<div class="wbTempBlock">' + (G && Te(G.value) ? '<div class="wbTemp"><span class="wbDeg">' + Tt(de(Math.round(Number(G.value)), f.locale)) + '</span><span class="wbUnit">' + Tt(Z) + "</span></div>" : "") + '<div class="wbPlace">' + Tt(((_t = f.config) == null ? void 0 : _t.location_name) ?? "") + "</div></div>" + (y ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Tt(ki(f, w)) + "</div>" + (nt && U.templow != null ? '<div class="wbRange">' + Tt(Ra(yt.range, { high: Fe(f, U.temperature), low: Fe(f, U.templow) })) + "</div>" : "") + "</div></div>";
    if (rt += ya(f) + Vr(f), S.length) {
      const xt = nt && G && Te(G.value) ? Fe(f, G.value) : "", qt = (Rt, bt, $t) => Rt === 0 && xt ? '<span class="wbAsDay">' + Tt(bt) + '</span><span class="wbAsNow">' + Tt($t) + "</span>" : Tt(bt);
      rt += '<div class="wbColumns" role="list">' + S.map((Rt, bt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + bt + '" data-wb-focus="col-' + bt + '"><span class="wbDay">' + qt(bt, Ge(f, Rt, bt), yt.now) + "</span>" + ae(Rt.condition ?? "cloudy", 60, !1, "col" + bt) + '<span class="wbTemps"><span class="wbHi">' + qt(bt, Fe(f, Rt.temperature), xt) + '</span><span class="wbLo">' + Tt(Fe(f, Rt.templow)) + "</span></span></button>").join("") + "</div>", rt += '<div class="wbHalves" role="list">' + S.map((Rt, bt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + bt + '" data-wb-focus="half-' + bt + '">' + ae(Rt.condition ?? "cloudy", 40, !1, "half" + bt) + '<span class="wbText"><span class="wbName">' + Tt(an(f, Rt)) + '</span><span class="wbSub">' + Tt(Ra(yt.highLow, { high: Fe(f, Rt.temperature), low: Fe(f, Rt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return rt + "</div>" + (I ? zt(f, v, I) : "") + "</div>";
  }
  const Qt = {
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
  function At(f) {
    const v = Date.now(), w = N("hourly").filter((vt) => new Date(vt.datetime).getTime() > v - ve).slice(0, 13);
    if (w.length < 2) return "";
    const S = (vt) => Pa(new Date(vt.datetime), f), I = (vt) => Qt[vt.condition] || "", G = (vt) => te[vt.condition] || vt.condition;
    let U = I(w[0]);
    if (!U) return "";
    let nt = w[0], Z = 0;
    for (const vt of w.slice(1))
      Z === 2 || G(vt) === G(nt) || !I(vt) || (U += (Z ? " and " : ", ") + I(vt) + " from " + S(vt), nt = vt, Z++);
    const rt = Number(w[0].temperature), dt = w.filter((vt) => Te(vt.temperature));
    if (Te(rt) && dt.length) {
      const vt = dt.reduce((_t, xt) => Number(xt.temperature) < Number(_t.temperature) ? xt : _t), Ot = dt.reduce((_t, xt) => Number(xt.temperature) > Number(_t.temperature) ? xt : _t);
      rt - Number(vt.temperature) >= 3 ? U += ", down to " + Fe(f, vt.temperature) + " by " + S(vt) : Number(Ot.temperature) - rt >= 3 && (U += ", up to " + Fe(f, Ot.temperature) + " by " + S(Ot));
    }
    return U[0].toUpperCase() + U.slice(1) + ".";
  }
  const ya = (f) => {
    const v = At(f);
    return v ? '<div class="wbSummary"><p class="wbSummaryText">' + Tt(v) + "</p></div>" : "";
  };
  function Vr(f) {
    const [v, w] = sd[E == null ? void 0 : E()] || sd.day, S = Date.now(), I = N("hourly").filter((G) => {
      const U = new Date(G.datetime), nt = U.getHours();
      return U.getTime() > S - ve / 2 && nt >= v && nt < w && Te(G.temperature);
    }).slice(0, 4);
    return I.length ? '<div class="wbNextHours" role="list">' + I.map((G, U) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Tt(Pa(new Date(G.datetime), f)) + "</span>" + ae(G.condition ?? "cloudy", 40, G.is_daytime === !1, "hr" + U) + '<span class="wbHourTemp">' + Tt(Fe(f, G.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function fr(f) {
    const v = f.getTime(), w = Date.now() - ve;
    return N("hourly").filter((S) => {
      const I = new Date(S.datetime).getTime();
      return I >= v && I < v + wn && I > w;
    });
  }
  function Ue(f) {
    if (!f.length) return ["temperature"];
    const v = ["temperature"];
    return f.some((w) => w.precipitation != null || w.precipitation_probability != null) && v.push("precipitation"), f.some((w) => w.humidity != null) && v.push("humidity"), v;
  }
  function zt(f, v, w) {
    const S = ur(new Date(w.datetime)), I = fr(S), G = Ue(I), U = G.includes($.dayMode) ? $.dayMode : "temperature", nt = (Z) => Z === "humidity" ? yt.humidity : yt.modes[Z];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + ae(w.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Tt(an(f, w)) + '</span><span class="wbSub">' + Tt(Ra(yt.highLow, { high: Fe(f, w.temperature), low: Fe(f, w.templow) })) + '</span></div><button class="wbBack" title="' + Tt(yt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Si(be.back) + "</button></div>" + (G.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + G.map((Z) => '<button aria-pressed="' + (Z === U) + '" data-wb="day-mode" data-mode="' + Z + '" data-wb-focus="day-mode-' + Z + '">' + Tt(nt(Z)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Lh(Ha(f, v, S, I, U)) + "</div></div>";
  }
  function Ha(f, v, w, S, I) {
    var Sn;
    const G = w.getTime(), U = Date.now(), nt = Bs(w, /* @__PURE__ */ new Date()), Z = (ie) => (ie - G) / Aa, rt = (ie) => Pa(new Date(ie), f), dt = (ie) => new Date(ie.datetime).getTime(), vt = [0, 3, 6, 9, 12, 15, 18, 21].map((ie) => ({ t: ie * 60, label: rt(G + ie * ve), minor: ie % 6 !== 0 })), { rise: Ot, set: _t } = Rs(f, w), xt = [], qt = [];
    Ot && (xt.push({ t: Z(Ot.getTime()), label: rt(Ot.getTime()), rise: !0 }), qt.push([0, Z(Ot.getTime())])), _t && (xt.push({ t: Z(_t.getTime()), label: rt(_t.getTime()), rise: !1 }), qt.push([Z(_t.getTime()), Ll]));
    const Rt = Al(f);
    !Ot && !_t && Rt && yd(new Date(G + wn / 2), Rt.lat, Rt.lon) < 0 && qt.push([0, Ll]);
    const bt = nt ? Z(U) : void 0, $t = { hours: vt, sun: xt, night: qt };
    if (!S.length && !nt) return { ...$t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: yt.noHourly };
    if (I === "precipitation") {
      const ie = S.some((ua) => ua.precipitation_probability != null), Qn = S.map((ua) => ({ t: Z(dt(ua)), v: Number((ie ? ua.precipitation_probability : ua.precipitation) ?? 0) })), Wa = cr(f, k(f, "hourly"), "precipitation"), Pn = Math.max(0, ...Qn.map((ua) => ua.v)), Nn = ie ? 100 : Kc(0, Math.max(Pn, 1), [0.5, 1, 2, 5, 10]).max, qi = (ua) => ie ? de(ua, f.locale) + "%" : de(ua, f.locale, { maximumFractionDigits: 1 }) + " " + Wa, Xo = Qn.find((ua) => ua.v === Pn);
      return {
        ...$t,
        kind: "bars",
        points: Qn,
        min: 0,
        max: Nn,
        ticks: [0, Nn / 2, Nn],
        format: qi,
        now: bt !== void 0 ? { t: bt, v: 0 } : void 0,
        peak: Xo && Pn > 0 ? { t: Xo.t + 30, v: Xo.v, label: qi(Xo.v) } : void 0,
        note: Pn > 0 ? void 0 : yt.noRain
      };
    }
    const jt = I === "humidity" ? "humidity" : "temperature", ue = S.filter((ie) => ie[jt] != null && (!nt || dt(ie) >= U)).map((ie) => ({ t: Z(dt(ie)), v: Number(ie[jt]) }));
    let St, Ee = [];
    if (bt !== void 0) {
      const ie = Xe(f, v, jt);
      ie && Te(ie.value) && (St = { t: bt, v: Number(ie.value) }, ue.unshift(St)), Ee = (((Sn = gt.todayHistory) == null ? void 0 : Sn.day) === w.toDateString() ? gt.todayHistory[jt] : []).filter((Wa) => Wa.time <= U).map((Wa) => ({ t: Math.max(0, Z(Wa.time)), v: Wa.value })), St && Ee.length && Ee.push(St);
    }
    const Pe = [...Ee, ...ue];
    if (!Pe.length) return { ...$t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: yt.noHourly };
    const va = Pe.map((ie) => ie.v), ba = Kc(Math.min(...va), Math.max(...va), jt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    jt === "humidity" && (ba.min = Math.max(0, ba.min), ba.max = Math.min(100, ba.max), ba.ticks = ba.ticks.filter((ie) => ie >= 0 && ie <= 100));
    const Oi = jt === "humidity" ? (ie) => de(ie, f.locale) + "%" : (ie) => Fe(f, ie), _a = jt === "temperature" ? Pe.reduce((ie, Qn) => Qn.v > ie.v ? Qn : ie) : void 0;
    return { ...$t, kind: "line", points: ue, past: Ee, ...ba, format: Oi, now: St, peak: _a ? { ..._a, label: Oi(_a.v) } : void 0 };
  }
  function po(f) {
    const v = ["temperature"];
    return f.some((w) => w.precipitation_probability != null || w.precipitation != null) && v.push("precipitation"), f.some((w) => w.wind_speed != null) && v.push("wind"), v;
  }
  function Ai(f, v, w = Pc) {
    var G, U;
    const S = N("daily"), I = [];
    for (let nt = 0; nt < w; nt++) for (const Z of [!1, !0]) {
      const rt = f.getTime() + (nt * 24 + (Z ? 12 : 0)) * ve, dt = rt + 12 * ve, vt = {};
      v.forEach((_t) => {
        const xt = new Date(_t.datetime).getTime();
        _t.condition && xt >= rt && xt < dt && (vt[_t.condition] = (vt[_t.condition] ?? 0) + (Wf.has(_t.condition) ? 2 : 1));
      });
      let Ot = (G = Object.entries(vt).sort((_t, xt) => xt[1] - _t[1])[0]) == null ? void 0 : G[0];
      if (!Ot) {
        const _t = new Date(rt).toDateString();
        Ot = ((U = S.find((xt) => new Date(xt.datetime).toDateString() === _t)) == null ? void 0 : U.condition) ?? "cloudy";
      }
      I.push({ cond: Z && Ot === "sunny" ? "clear-night" : Ot, night: Z });
    }
    return I;
  }
  function Ei(f, v, w) {
    const S = k(f, "hourly"), I = v.precipitation_probability != null ? de(v.precipitation_probability, f.locale) + "%" : "", G = v.precipitation ? de(v.precipitation, f.locale) + " " + cr(f, S, "precipitation") : "";
    switch (w) {
      case "precipitation":
        return I ? [I, G] : [G || "–", ""];
      case "wind":
        return v.wind_speed != null ? [de(Math.round(v.wind_speed), f.locale), cr(f, S, "wind_speed")] : ["–", ""];
      default:
        return [Fe(f, v.temperature), (v.precipitation_probability ?? 0) >= 20 ? I : ""];
    }
  }
  function Le(f, v, w) {
    const [S, I] = sd[E == null ? void 0 : E()] || sd.day, G = [];
    for (let U = 0; U < 4 && G.length < 3; U++) {
      const nt = /* @__PURE__ */ new Date();
      nt.setHours(0, 0, 0, 0), nt.setDate(nt.getDate() + U);
      const Z = new Date(nt);
      Z.setHours(I, 0, 0, 0), nt.setHours(S, 0, 0, 0), !(Z.getTime() <= w || !v.some((rt) => {
        const dt = new Date(rt.datetime).getTime();
        return dt >= nt.getTime() && dt <= Z.getTime();
      })) && G.push({ a: nt.getTime(), b: Z.getTime(), label: an(f, { datetime: nt.toISOString() }) });
    }
    return G;
  }
  function Fa(f, v, w, S, I, G) {
    const U = (w.b - v.a) / ve, nt = (bt) => ((bt - v.a) / ve).toFixed(3), Z = 80, rt = 32, dt = [];
    for (const bt = new Date(v.a - wn); bt.getTime() < w.b + wn; bt.setDate(bt.getDate() + 1)) {
      const { rise: $t, set: jt } = Rs(f, new Date(bt));
      $t && jt && dt.push({ rise: $t.getTime(), set: jt.getTime() });
    }
    const vt = (bt, $t) => Z - (Z - rt) * Math.sin(Math.PI * ($t - bt.rise) / (bt.set - bt.rise)), Ot = (bt) => !dt.some(($t) => bt >= $t.rise && bt <= $t.set);
    let _t = "", xt = "", qt = "";
    dt.forEach((bt, $t) => {
      const jt = [];
      for (let St = bt.rise; St <= bt.set; St += 15 * Aa) jt.push(nt(St) + "," + vt(bt, St).toFixed(2));
      jt.push(nt(bt.set) + "," + Z), _t += '<polyline class="wbLineArc" points="' + jt.join(" ") + '"/>';
      const ue = dt[$t + 1];
      ue && (_t += '<rect class="wbLineNight" x="' + nt(bt.set) + '" y="0" width="' + ((ue.rise - bt.set) / ve).toFixed(3) + '" height="100"/>'), [[bt.rise, "↑"], [bt.set, "↓"]].forEach(([St, Ee]) => {
        St < v.a || St > w.b || (xt += '<line class="wbLineEdge" x1="' + nt(St) + '" x2="' + nt(St) + '" y1="0" y2="100"/>', qt += '<span class="wbLineTime" style="left:' + G(St) + '">' + Ee + " " + Tt(Pa(new Date(St), f)) + "</span>");
      });
    });
    const Rt = dt.find((bt) => I >= bt.rise && I <= bt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + U + ' 100" preserveAspectRatio="none" aria-hidden="true">' + _t + xt + '<line class="wbLineHorizon" x1="0" x2="' + U + '" y1="' + Z + '" y2="' + Z + '"/></svg>' + qt + (Rt ? '<span class="wbLineNow" style="left:' + G(I) + ";top:" + vt(Rt, I) + '%">' + Zd("sunny", !1) + "</span>" : "") + S.filter((bt) => bt.entry && !bt.now).map((bt) => '<span class="wbLineGlyph' + bt.edge + '" style="left:' + G(bt.t) + '">' + Zd(bt.entry.condition ?? "cloudy", Ot(bt.t)) + "</span>").join("");
  }
  function Zt(f, v) {
    delete Q.hourly;
    const w = $.hourlyView === "bars" ? "bars" : "strip", S = '<div class="wbHeader"><h2 class="wbTitle">' + Tt(w === "bars" ? yt.nextDays : yt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Tt(yt.showAs) + '">' + ["strip", "bars"].map((St) => '<button aria-pressed="' + (St === w) + '" data-wb="hourly-view" data-view="' + St + '" data-wb-focus="hourly-view-' + St + '">' + Tt(yt.views[St]) + "</button>").join("") + "</div></div>";
    if (w === "bars") return je(f, v, S);
    const I = N("hourly"), G = Math.floor(Date.now() / Aa) * Aa, U = I.filter((St) => new Date(St.datetime).getTime() > G - ve);
    if (!U.length) return "";
    const nt = po(U), Z = nt.includes($.hourlyMode) ? $.hourlyMode : "temperature", rt = Le(f, I, G);
    if (!rt.length) return "";
    const dt = rt[0], vt = rt[rt.length - 1], Ot = (dt.b - dt.a) / ve, _t = (St) => "calc(var(--wb-u) * " + ((St - dt.a) / ve).toFixed(3) + ")", xt = new Date(dt.a);
    xt.setHours(6, 0, 0, 0), xt.getTime() > dt.a && xt.setDate(xt.getDate() - 1);
    const qt = Math.ceil((vt.b - xt.getTime()) / wn);
    u !== "line" && (Q.hourly = { segs: Ai(xt, I, qt), seed: xt.getDate(), columns: qt });
    const Rt = (St) => St === dt.a ? " wbFirst" : St === vt.b ? " wbLast" : "", bt = [];
    for (let St = dt.a; St < vt.b; ) {
      const Ee = new Date(St);
      Ee.setHours(24, 0, 0, 0);
      const Pe = Math.min(Ee.getTime(), vt.b);
      bt.push({ a: St, b: Pe, label: an(f, { datetime: new Date(St).toISOString() }), page: rt.find((va) => va.a >= St && va.a < Pe) || rt.find((va) => va.a < Pe && va.b > St) }), St = Pe;
    }
    const $t = G > dt.a && G < vt.b ? Math.floor((G - dt.a) / (2 * ve)) * 2 : 0, jt = [];
    for (let St = dt.a; St <= vt.b; St += ve) {
      const Ee = new Date(St), Pe = Rt(St);
      !Pe && Ee.getHours() % Hf || !Pe && (Math.abs(dt.a - St) < 2 * ve || Math.abs(vt.b - St) < 2 * ve) || G >= dt.a && Math.abs(St - G) < 1.5 * ve && !Pe || jt.push({ t: St, edge: Pe, label: Pa(Ee, f), entry: St >= G - ve ? I.find((va) => new Date(va.datetime).getTime() === St) : void 0 });
    }
    G > dt.a && G < dt.b && jt.push({ t: G, edge: G - dt.a < ve ? " wbFirst" : dt.b - G < ve ? " wbLast" : "", label: yt.now, entry: U[0], now: !0 });
    const ue = (St, Ee) => '<span class="wbMark' + St.edge + (St.now ? " wbNowMark" : "") + '" style="left:' + _t(St.t) + '">' + Ee + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + S + (nt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + nt.map((St) => '<button aria-pressed="' + (St === Z) + '" data-wb="hourly-mode" data-mode="' + St + '" data-wb-focus="hourly-mode-' + St + '">' + Tt(yt.modes[St]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Tt(yt.nextHours) + '" data-span="' + Ot + '" data-start="' + $t + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ot + ");width:calc(var(--wb-u) * " + (vt.b - dt.a) / ve + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((vt.b - dt.a) / (2 * ve)) + 1)].map((St, Ee) => '<i class="wbSnap" style="left:' + _t(dt.a + Ee * 2 * ve) + '"></i>').join("") + '<div class="wbDays">' + bt.map((St, Ee) => {
      var Pe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((St.b - St.a) / ve).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Ee === 0 ? $t : ((((Pe = St.page) == null ? void 0 : Pe.a) ?? St.a) - dt.a) / ve) + '" data-wb-focus="hours-day-' + Ee + '">' + Tt(St.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + jt.map((St) => ue(St, Tt(St.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + Fa(f, dt, vt, jt, G, _t) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + _t(xt.getTime()) + ";width:calc(var(--wb-u) * " + qt * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (G > dt.a ? '<i class="wbPast" style="width:' + _t(Math.min(G, vt.b)) + '"></i><i class="wbNowLine" style="left:' + _t(G) + '"></i>' : "") + bt.slice(1).map((St) => '<i class="wbMidnight" style="left:' + _t(St.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + jt.map((St) => {
      if (!St.entry) return "";
      const [Ee, Pe] = Ei(f, St.entry, Z);
      return ue(St, '<span class="wbPrimaryV">' + Tt(Ee) + '</span><span class="wbSecondary">' + Tt(Pe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function En(f) {
    const v = Ff, w = v.findIndex(([Z]) => Z >= f);
    if (w <= 0) return "rgb(" + v[w < 0 ? v.length - 1 : 0][1].join(",") + ")";
    const [S, I] = v[w - 1], [G, U] = v[w], nt = (f - S) / (G - S);
    return "rgb(" + I.map((Z, rt) => Math.round(Z + (U[rt] - Z) * nt)).join(",") + ")";
  }
  function je(f, v, w) {
    var _t;
    const S = N("daily").filter((xt) => Te(xt.templow) && Te(xt.temperature)).slice(0, 7);
    if (!S.length) return "";
    const I = Math.min(...S.map((xt) => Number(xt.templow))), G = Math.max(...S.map((xt) => Number(xt.temperature))), U = Math.max(1, G - I), nt = (xt) => Math.max(0, Math.min(100, (xt - I) / U * 100)).toFixed(2), Z = /F/.test(cr(f, k(f, "daily"), "temperature")), rt = (xt) => Z ? (xt - 32) / 1.8 : xt, dt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((xt) => En(rt(I + xt * U)) + " " + xt * 100 + "%").join(",") + ")", vt = (_t = Xe(f, v, "temperature")) == null ? void 0 : _t.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (po(N("hourly").filter((xt) => new Date(xt.datetime).getTime() > Date.now() - ve)).length > 1 ? " wbTabbed" : "") + '">' + w + '<div class="wbDayBars" role="list">' + S.map((xt, qt) => {
      const Rt = an(f, xt), bt = Bs(new Date(xt.datetime), /* @__PURE__ */ new Date()), $t = Number(xt.templow), jt = Number(xt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Tt(Ra(yt.rangeRow, { day: Rt, low: Fe(f, $t), high: Fe(f, jt) })) + '"><span class="wbRangeDay">' + Tt(Rt) + "</span>" + ae(xt.condition, 40, !1, "r" + qt) + '<span class="wbRangeLo">' + Tt(Fe(f, $t)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + dt + ";clip-path:inset(0 " + (100 - nt(jt)) + "% 0 " + nt($t) + '% round 4px)"></i>' + (bt && Te(vt) ? '<i class="wbRangeNow" style="left:' + nt(Number(vt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Tt(Fe(f, jt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Fo = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], It = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Gt = (f, v) => {
    if (v <= f[0][0]) return f[0][1];
    for (let w = 1; w < f.length; w++) if (v <= f[w][0]) {
      const [S, I] = f[w - 1], [G, U] = f[w];
      return Ch(I, U, (v - S) / (G - S));
    }
    return f[f.length - 1][1];
  }, Wt = (f, v, w) => {
    if (!v || !w) return Fo[5][1];
    const S = (f.getTime() - w.getTime()) / Aa;
    return S >= -90 ? Gt(It, S) : Gt(Fo, (f.getTime() - v.getTime()) / Aa);
  }, Ct = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function xe(f) {
    const v = et, { rise: w, set: S } = Rs(f, v), I = w && S ? Math.round((S.getTime() - w.getTime()) / Aa) : 0, G = Math.floor(I / 60), U = I % 60, nt = (ue) => ue ? Pa(ue, f) : "–", Z = new Date(v);
    Z.setDate(Z.getDate() + 1);
    const rt = Rs(f, Z), dt = rt.rise && rt.set ? Math.round((rt.set.getTime() - rt.rise.getTime()) / Aa) : 0, vt = new Date(v);
    vt.setDate(vt.getDate() - 1);
    const Ot = !!(w && S && v >= w && v <= S), _t = !!(w && v < w), xt = Ot ? w : _t ? Rs(f, vt).set : S, qt = Ot ? S : _t ? w : rt.rise, Rt = xt && qt ? Math.min(1, Math.max(0, (v.getTime() - xt.getTime()) / (qt.getTime() - xt.getTime()))) : 0, bt = qt ? Math.max(0, Math.round((qt.getTime() - v.getTime()) / Aa)) : 0, $t = qt ? Ct(bt) : "–", jt = Ot ? yt.untilSunset : yt.untilSunrise;
    return Ka({
      icon: be.sunny,
      name: yt.sun,
      sub: I ? Ra(yt.daylightShort, { hours: G, minutes: U }) : void 0,
      cls: "wbSunTile",
      callouts: [[yt.callout.riseTomorrow, nt(rt.rise)], [yt.callout.setTomorrow, nt(rt.set)], ...dt ? [[yt.callout.dayTomorrow, Math.floor(dt / 60) + "h " + dt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Wt(v, w, S) + '"><svg class="wbSunTrack" data-up="' + (Ot ? 1 : 0) + '" data-f="' + Rt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Tt($t) + '</span><span class="wbSunWord">' + Tt(jt) + '</span></div><span class="wbSunAt wbSunRise">' + Tt(nt(w)) + '</span><span class="wbSunAt wbSunSet">' + Tt(nt(S)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      cd(zn($t, ""))
    });
  }
  const Ut = 22;
  function Qe(f) {
    const v = Math.round(f.clientWidth), w = Math.round(f.clientHeight), S = Ut, I = S / 2, G = v + "x" + w + ":" + f.dataset.f + ":" + f.dataset.up;
    if (v < S * 3 || w < S * 3 || f.dataset.drawn === G) return;
    f.dataset.drawn = G;
    const U = "M" + I + " " + (w - S) + "V" + S + "A" + I + " " + I + " 0 0 1 " + S + " " + I + "H" + (v - S) + "A" + I + " " + I + " 0 0 1 " + (v - I) + " " + S + "V" + (w - S), nt = "M" + (v - I) + " " + (w - S) + "A" + I + " " + I + " 0 0 1 " + (v - S) + " " + (w - I) + "H" + S + "A" + I + " " + I + " 0 0 1 " + I + " " + (w - S), Z = 16, rt = 6, dt = "M" + Z + " 0H" + (v - Z) + "A" + Z + " " + Z + " 0 0 1 " + v + " " + Z + "V" + (w - Z) + "A" + Z + " " + Z + " 0 0 1 " + (v - Z) + " " + w + "H" + Z + "A" + Z + " " + Z + " 0 0 1 0 " + (w - Z) + "V" + Z + "A" + Z + " " + Z + " 0 0 1 " + Z + " 0ZM" + (S + rt) + " " + S + "A" + rt + " " + rt + " 0 0 0 " + S + " " + (S + rt) + "V" + (w - S - rt) + "A" + rt + " " + rt + " 0 0 0 " + (S + rt) + " " + (w - S) + "H" + (v - S - rt) + "A" + rt + " " + rt + " 0 0 0 " + (v - S) + " " + (w - S - rt) + "V" + (S + rt) + "A" + rt + " " + rt + " 0 0 0 " + (v - S - rt) + " " + S + "Z", vt = f.dataset.up === "1", Ot = Number(f.dataset.f) || 0, _t = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + v + " " + w);
    const xt = document.createElementNS(_t, "path");
    xt.setAttribute("d", vt ? U : nt), f.replaceChildren(xt);
    const qt = xt.getTotalLength(), Rt = xt.getPointAtLength(qt * Ot), bt = vt ? qt : 0;
    f.innerHTML = '<defs><mask id="' + M + 'sun-day"><path d="' + U + '" fill="none" stroke="#fff" stroke-width="' + S * 2 + '"></path></mask><mask id="' + M + 'sun-done"><path d="' + U + '" fill="none" stroke="#fff" stroke-width="' + S * 2 + '" stroke-dasharray="' + (vt ? (bt * Ot).toFixed(1) + " " + (bt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + dt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + dt + '" mask="url(#' + M + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + dt + '" mask="url(#' + M + 'sun-done)"></path><circle class="wbSunDot' + (vt ? "" : " wbSunNight") + '" cx="' + Rt.x.toFixed(1) + '" cy="' + Rt.y.toFixed(1) + '" r="' + I + '"></circle>';
  }
  const Se = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((v) => Qe(v.target))) : null;
  function Gn() {
    Se == null || Se.disconnect(), P.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      Qe(f), Se == null || Se.observe(f);
    });
  }
  function Gr(f, v, w) {
    const S = (U) => M + "moon-" + U, I = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + S("terminator") + ')" d="' + Th(61, 61, 57.9, f) + '"' + (v ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", G = (U, nt, Z, rt, dt, vt) => '<filter id="' + S(U) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + nt + '" numOctaves="' + Z + '" seed="' + rt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ot) => "<feFunc" + Ot + ' type="linear" slope="' + dt + '" intercept="' + vt + '"></feFunc' + Ot + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + S("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + S("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + S("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + S("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + S("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + G("mottle", "0.045", 4, 3, 1.8, -0.4) + G("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + S("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + S("fill") + ')"></circle><g' + (w ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + S("soften") + ')">' + Eh.map(([U, nt, Z, rt, dt, vt]) => '<ellipse cx="' + U + '" cy="' + nt + '" rx="' + Z + '" ry="' + rt + '" fill-opacity="' + vt + '" transform="rotate(' + dt + " " + U + " " + nt + ')"></ellipse>').join("") + "</g>" + _h.map(([U, nt, Z]) => '<circle class="wbCrater" cx="' + U + '" cy="' + nt + '" r="' + Z + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + S("glow") + ')">' + Dh.map(([U, nt]) => '<line x1="54.4" y1="95" x2="' + U + '" y2="' + nt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + S("glow") + ')">' + Xc.map(([U, nt, Z]) => '<circle cx="' + U + '" cy="' + nt + '" r="' + Z * 2 + '"></circle>').join("") + "</g>" + Xc.map(([U, nt, Z]) => '<circle class="wbBrightCenter" cx="' + U + '" cy="' + nt + '" r="' + Z + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + S("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + S("grain") + ')"></rect>' + I + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function uo(f) {
    const v = Lt, w = Al(f), S = (w == null ? void 0 : w.lat) ?? 0, I = $d(v), G = Zc(f), U = G ? f.states[G] : void 0, nt = zr(U) && $f.includes(U.state) ? U.state : vh(I.phase), { rise: Z, set: rt } = w ? gh(v, w.lat, w.lon) : {}, dt = I.phase > 0.5 != S < 0, vt = de(Math.round(I.fraction * 100), f.locale) + "%", Ot = Z ?? rt;
    return Ot && Pa(Ot, f), Ka({
      icon: be.night,
      name: yt.moon,
      sub: yt.phases[nt],
      callouts: [...Z ? [[yt.callout.moonrise, Pa(Z, f)]] : [], ...rt ? [[yt.callout.moonset, Pa(rt, f)]] : [], [yt.callout.lit, vt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Gr(I.fraction, dt, S < 0) + "</div>" + cd(zn(de(Math.round(I.fraction * 100), f.locale), "%"))
    });
  }
  function ta(f, v) {
    var xt;
    const w = Xe(f, v, "wind_speed");
    if (!w || !Te(w.value)) return "";
    const S = Xe(f, v, "wind_gust_speed"), I = Xe(f, v, "wind_bearing"), G = I && Te(I.value) ? Number(I.value) : void 0, U = yh(Number(w.value), (xt = w.stateObj.attributes) == null ? void 0 : xt.wind_speed_unit), nt = gd(f, w.stateObj, "wind_speed", w.value), Z = G !== void 0 ? yt.cardinal[Kf[((G + 11.25) / 22.5 | 0) % 16]] : void 0, rt = S ? Gc(f, S.stateObj, "wind_gust_speed", S.value) : void 0, dt = [Z ? Ra(yt.windFrom, { direction: Z }) : void 0, U !== void 0 ? U + " " + yt.beaufort : void 0].filter(Boolean).join(" · ") || rt, vt = (qt, Rt) => {
      const bt = (qt - 90) * Math.PI / 180;
      return [100 + Rt * Math.cos(bt), 100 + Rt * Math.sin(bt)];
    }, Ot = Array.from({ length: 36 }, (qt, Rt) => Rt * 10).map((qt) => {
      const Rt = qt % 90 === 0, [bt, $t] = vt(qt, 97), [jt, ue] = vt(qt, Rt ? 83 : 89);
      return '<line class="wbTick' + (Rt ? " wbMajor" : "") + '" x1="' + bt + '" y1="' + $t + '" x2="' + jt + '" y2="' + ue + '"></line>';
    }).join(""), _t = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([qt, Rt]) => {
      const [bt, $t] = vt(Rt, 64);
      return '<text class="wbLetter' + (qt === "n" ? " wbNorth" : "") + '" x="' + bt + '" y="' + $t + '">' + Tt(yt.cardinal[qt]) + "</text>";
    }).join("");
    return Ka({ icon: be.windy, name: yt.wind, sub: dt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ot + _t + (G !== void 0 ? '<path class="wbMarker" transform="rotate(' + G + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Tt(nt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Tt(nt.unit) + "</text></svg>" });
  }
  const Un = (f, v) => {
    if (f < 3) return yt.advice.fine;
    if (f < 8) return yt.advice.sunblock;
    const w = Date.now(), S = N("hourly").find((I) => I.uv_index != null && new Date(I.datetime).getTime() > w && I.uv_index < 6);
    return S && new Date(S.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ra(yt.advice.avoidUntil, { time: Pa(new Date(S.datetime), v) }) : yt.advice.avoidToday;
  };
  function _i(f, v) {
    const w = Xe(f, v, "uv_index");
    if (!w || !Te(w.value)) return "";
    const S = Number(w.value), I = yt.uvLevel[Uc(S)], G = /* @__PURE__ */ new Date();
    G.setHours(23, 59, 59, 999);
    const U = N("hourly").filter((dt) => dt.uv_index != null && new Date(dt.datetime) > /* @__PURE__ */ new Date() && new Date(dt.datetime) <= G).reduce((dt, vt) => !dt || vt.uv_index > dt.uv ? { uv: vt.uv_index, time: new Date(vt.datetime) } : dt, void 0), nt = Xf[Uc(S)], Z = 216 * Math.min(1, Math.max(0.08, 0.4 + (S - 4.5) * (0.5 / 5.5))), rt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + M + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + Z.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + nt + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + nt + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + nt + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + Z.toFixed(1) + '" fill="url(#' + M + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Tt(de(Math.round(S), f.locale)) + '</span><span class="wbUvWord">' + Tt(I) + "</span></div>" + cd(zn(de(Math.round(S), f.locale), ""));
    return Ka({
      icon: be.sunnyAlert,
      name: yt.metrics.uv_index,
      sub: U && U.uv > S ? Ra(yt.uvPeak, { level: I, uv_index: de(Math.round(U.uv), f.locale), time: Pa(U.time, f) }) : I,
      zone: rt,
      cls: "wbUv",
      callouts: [Un(S, f), [yt.callout.now, de(Math.round(S), f.locale) + " · " + I], [yt.callout.peak, U && U.uv > S ? de(Math.round(U.uv), f.locale) + " at " + Pa(U.time, f) : yt.callout.now]]
    });
  }
  function fo(f) {
    const v = N("daily")[0], w = gt.temperatureHistory;
    if (!v || new Date(v.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Te(v.temperature) || !w || w.dailyHighs.length < Vf) return "";
    const S = Number(v.temperature), I = w.dailyHighs.reduce((Rt, bt) => Rt + bt, 0) / w.dailyHighs.length, G = Math.round(S - I) || 0, U = G > 0 ? "above" : G < 0 ? "below" : "same", nt = [...w.days, { date: /* @__PURE__ */ new Date(), high: S, today: !0 }], Z = nt.map((Rt) => Rt.high).concat(I), rt = Math.min(...Z) - 1, dt = Math.max(...Z) + 1, vt = (Rt) => (1 - (Rt - rt) / (dt - rt)) * 100, Ot = (Rt) => (Rt + 0.5) / nt.length * 100, _t = nt.map((Rt, bt) => [Ot(bt), vt(Rt.high)]), xt = _t.map(([Rt, bt], $t) => ($t ? "L" : "M") + Rt.toFixed(2) + " " + bt.toFixed(2)).join(""), qt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + M + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + xt + "L" + _t[_t.length - 1][0].toFixed(2) + " 100L" + _t[0][0].toFixed(2) + ' 100Z" fill="url(#' + M + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + vt(I).toFixed(2) + '" y2="' + vt(I).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + xt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + vt(I).toFixed(2) + '%">' + Tt(Fe(f, I)) + "</span>" + nt.map((Rt, bt) => {
      const $t = Rt.today ? " wbToday" : "", jt = "left:" + Ot(bt).toFixed(2) + "%;top:" + vt(Rt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + $t + '" style="' + jt + '"></i><span class="wbAvgValue' + $t + '" style="' + jt + '">' + Tt(Fe(f, Rt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + nt.map((Rt, bt) => '<span class="wbAvgDay' + (Rt.today ? " wbToday" : "") + '" style="left:' + Ot(bt).toFixed(2) + '%">' + Tt(rh(Rt.date, f)) + "</span>").join("") + "</div></div>";
    return Ka({
      icon: be.chartLine,
      name: yt.metrics.compared_to_average,
      double: !0,
      sub: Ra(yt.highsLastDays, { days: w.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (G > 0 ? "+" : "") + Tt(Fe(f, G)) + '</div><div class="wbCompareWords">' + Tt(yt.average[U]) + '</div><div class="wbCompareTemps">' + Tt(Ra(yt.todayVsAverage, { today: Fe(f, S), average: Fe(f, I) })) + "</div></div>" + qt + "</div>"
    });
  }
  function ho(f, v) {
    const w = Xe(f, v, "humidity");
    if (!w || !Te(w.value)) return "";
    const S = Xe(f, v, "dew_point"), I = Math.max(0, Math.min(100, Number(w.value)));
    return Ka({
      icon: be.waterPercent,
      name: yt.metrics.humidity,
      sub: S && Te(S.value) ? Ra(yt.dewPoint, { dew_point: Fe(f, S.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + I + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + zn(de(Math.round(Number(w.value)), f.locale), "%") + "</div>"
    });
  }
  function Hs(f, v) {
    var Rt, bt, $t;
    const w = Xe(f, v, "pressure");
    if (!w || !Te(w.value)) return "";
    const S = Number(w.value), I = (Rt = w.stateObj.attributes) == null ? void 0 : Rt.pressure_unit, G = Yc(S, I), U = ((bt = gt.pressureHistory) == null ? void 0 : bt.entityId) === w.stateObj.entity_id ? Yc(gt.pressureHistory.value, I) : void 0;
    let nt;
    if (G !== void 0 && U !== void 0) {
      const jt = G - U;
      nt = jt >= Hc ? "rising" : jt <= -Hc ? "falling" : "steady";
    }
    const Z = gd(f, w.stateObj, "pressure", Math.round(S)), rt = w.stateObj, dt = (jt) => I === "inHg" ? Math.round(jt * 100) / 100 : Math.round(jt), vt = (jt) => Gc(f, rt, "pressure", dt(jt)), Ot = U !== void 0 ? gt.pressureHistory.value : void 0, _t = Ot !== void 0 ? dt(S - Ot) : void 0, xt = ($t = rt.entity_id) != null && $t.startsWith("weather.") ? N("hourly").find((jt) => Te(jt.pressure) && new Date(jt.datetime).getTime() >= Date.now() + 3 * ve - 30 * Aa) : void 0, qt = [
      ...nt ? [yt.advice[nt]] : [],
      ...Ot !== void 0 ? [[yt.callout.hoursAgo, vt(Ot)], [yt.callout.change, (_t > 0 ? "+" : _t < 0 ? "−" : "") + vt(Math.abs(_t))]] : [],
      ...xt ? [[yt.callout.inHours, vt(Number(xt.pressure))]] : []
    ];
    return Ka({
      icon: be.gauge,
      name: yt.metrics.pressure,
      sub: nt ? yt.pressure[nt] : void 0,
      cls: "wbPressure",
      callouts: qt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + zn(Z.number) + '<span class="wbTapeUnit">' + Tt(Z.unit) + "</span></div>" + (G !== void 0 ? yn(f, G) : "") + "</div>"
    });
  }
  function yn(f, v) {
    const I = Math.floor(v) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (G, U) => I + U).map((G) => {
      const U = 100 - (G - v) * 9;
      if (U < 22 || U > 178) return "";
      const nt = G % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(U - 100) / 100) + '"><line class="wbTapeTick" x1="' + (nt ? 2 : 8) + '" x2="26" y1="' + U + '" y2="' + U + '"></line>' + (nt ? '<text class="wbTapeLabel" x="33" y="' + U + '">' + Tt(de(G, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Tt(yt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Tt(yt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function mo(f) {
    var Z, rt;
    const v = Xd(f), w = v ? f.states[v] : void 0;
    if (!w || ((Z = gt.rain) == null ? void 0 : Z.entityId) !== v || !Te(gt.rain.change)) return "";
    const S = ((rt = w.attributes) == null ? void 0 : rt.unit_of_measurement) ?? "", I = k(f, "hourly"), G = Date.now() + wn, U = N("hourly").filter((dt) => dt.precipitation != null && new Date(dt.datetime).getTime() <= G), nt = U.reduce((dt, vt) => dt + Number(vt.precipitation), 0);
    return Ka({
      icon: be.rainy,
      name: yt.metrics.precipitation,
      sub: I && U.length ? Ra(yt.rainExpected, { amount: de(nt, f.locale, { maximumFractionDigits: 1 }) + " " + cr(f, I, "precipitation") }) : yt.rainLast24h,
      visual: zn(de(gt.rain.change, f.locale, { maximumFractionDigits: 1 }), S) + (U.length > 1 ? Ah(U.map((dt) => ({ label: "", value: Number(dt.precipitation) }))) : "")
    });
  }
  function Di(f, v) {
    const w = Xe(f, v, "visibility");
    if (!w || !Te(w.value)) return "";
    const S = gd(f, w.stateObj, "visibility", w.value), I = xf(Number(w.value), cr(f, w.stateObj, "visibility"));
    return Ka({
      icon: be.eyeOutline,
      name: yt.metrics.visibility,
      sub: yt.visibilityLevel[yf(I)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + I + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Tt(hr(f, I)) + '</div><div class="wbSeaValue">' + zn(S.number, S.unit) + "</div></div>"
    });
  }
  function hr(f, v) {
    var G;
    const w = wf((G = f.config) == null ? void 0 : G.country, v);
    if (w) return Ra(yt.visibilityLandmarks, { from: w.from, to: w.to });
    const S = v / Yf * 60;
    if (S < 60) {
      const U = S < 5 ? Math.max(1, Math.round(S)) : 5 * Math.round(S / 5);
      if (U < 60) return Ra(yt.walkMinutes, { minutes: de(U, f.locale) });
    }
    const I = Math.max(1, Math.round(S / 30) / 2);
    return I < 8 ? Ra(yt.walkHours, { hours: de(I, f.locale) }) : yt.walkDay;
  }
  function mr(f) {
    gt.categories === void 0 && Ho(f);
    const v = Vt(f), w = (Z) => Z.map((rt) => f.states[rt]).filter(zr), S = w(v.air), I = w(v.pollen);
    if (!S.length && !I.length) return "";
    const G = [...S, ...I], U = (Z) => I.includes(Z) ? be.flower : be.airFilter, nt = G.find((Z) => Z.entity_id === $.aq);
    return nt ? Fs(f, nt, U(nt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Tt(yt.airQuality) + '</h2></div><div class="wbAqTiles">' + G.map((Z) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Tt(Z.entity_id) + '"><span class="wbChip">' + Si(U(Z)) + '</span><span class="wbText"><span class="wbName">' + Tt(lr(f, Z)) + '</span><span class="wbSub">' + Tt(ki(f, Z)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Fs(f, v, w) {
    var dt, vt, Ot;
    const S = ((dt = v.attributes) == null ? void 0 : dt.unit_of_measurement) ?? "", I = ((vt = v.attributes) == null ? void 0 : vt.device_class) === "pm25" && S === Oc && Te(v.state), G = Number(v.state), U = I ? dd(G) : void 0, nt = ((Ot = gt.aqHistory) == null ? void 0 : Ot.entityId) === v.entity_id ? gt.aqHistory.points : void 0, Z = (_t) => Math.min(100, Math.max(0, _t / ld * 100));
    let rt;
    if (nt && nt.length > 1) rt = $c(nt, (_t) => (de(_t, f.locale, { maximumFractionDigits: 1 }) + " " + S).trim());
    else if (U) {
      let _t = 0;
      const xt = Vp.map(([qt, Rt]) => {
        const bt = Z(Math.min(Rt, ld)), $t = Fc[qt] + " " + _t + "% " + bt + "%";
        return _t = bt, $t;
      });
      rt = '<div class="wbScale" role="meter" aria-label="' + Tt(yt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ld + '" aria-valuenow="' + G + '" style="background:linear-gradient(to right, ' + xt.join(", ") + ')"><i style="left:' + Z(G) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ld + " " + Oc + "</span></div>";
    } else rt = '<span class="wbGraphNote"><span>' + Tt(ki(f, v)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Si(w) + '</span><span class="wbText"><span class="wbName">' + Tt(lr(f, v)) + '</span><span class="wbSub">' + Tt(ki(f, v)) + (U ? " · " + Tt(yt.aqLevel[U]) : "") + '</span></span><button class="wbBack" title="' + Tt(yt.back) + '" data-wb="aq-close">' + Si(be.back) + '</button></div><div class="wbGraph">' + rt + "</div></div></div>";
  }
  const re = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Oo = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function nn(f) {
    const v = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((w) => {
      var S;
      return w.entity_id.startsWith("sensor.") && wd.includes(((S = w.attributes) == null ? void 0 : S.device_class) ?? "") && zr(w) && Ns(f, w.entity_id);
    }).sort((w, S) => w.entity_id.localeCompare(S.entity_id)).forEach((w) => {
      v.has(w.attributes.device_class) || v.set(w.attributes.device_class, w);
    }), wd.map((w) => v.get(w)).filter(Boolean);
  }
  const kn = (f) => Object.values(f.states || {}).filter((v) => {
    var w, S;
    return v.entity_id.startsWith("sensor.") && zr(v) && Ns(f, v.entity_id) && (((S = (w = f.entities) == null ? void 0 : w[v.entity_id]) == null ? void 0 : S.translation_key) ?? v.entity_id).toLowerCase().includes("pollen");
  }), Oa = ["none", "very_low", "low", "moderate", "high", "very_high"], Ce = (f) => Te(f.state) ? Number(f.state) : Oa.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), ga = (f) => {
    const v = String(f).replace(/_/g, " ");
    return v[0].toUpperCase() + v.slice(1);
  }, on = (f, v, w) => {
    const S = w ? f === "aqi" ? v <= 50 ? "good" : v <= 100 ? "moderate" : "poor" : f === "pm25" ? dd(v) : null : null;
    return S === "good" || S === "fair" ? yt.advice.window : S === "moderate" || S === null ? yt.advice.fine : yt.advice.closed;
  }, qo = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Bi = (f) => qo[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], Re = "M43 43q1 8 0 10M77 42q1 8 -1 10", pa = {
    good: [Re, "M34 69Q61 98 86 67"],
    fair: [Re, "M40 74Q61 89 81 72"],
    moderate: [Re, "M41 79Q60 76 80 81"],
    poor: [Re, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, rn = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + pa[f][0] + '"></path><path d="' + pa[f][1] + '"></path></svg>';
  function gr(f) {
    const v = nn(f), w = v[0];
    if (!w) return Ka({ icon: be.airFilter, name: yt.airQuality, sub: yt.noAir, visual: zn("–", ""), cls: "wbBase" });
    const S = w.attributes.device_class, I = Number(w.state), G = Te(w.state), U = S === "aqi" && G ? Oo(I) : S === "pm25" && G ? re[dd(I)] : ki(f, w), nt = G ? de(Math.round(I), f.locale) : String(w.state), Z = S === "aqi" ? "AQI" : w.attributes.unit_of_measurement || "", rt = G && S === "aqi" ? Bi(I) : G && S === "pm25" ? dd(I) : null;
    return Ka(rt ? {
      icon: be.airFilter,
      name: yt.airQuality,
      sub: U,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Fc[rt] + '">' + rn(rt) + '<div class="wbAqBig"><span class="wbAqNum">' + Tt(nt) + "</span>" + (Z ? '<span class="wbAqUnit">' + Tt(Z) + "</span>" : "") + "</div></div>" + cd(zn(nt, Z)),
      callouts: [on(S, I, G), ...v.slice(1, 3).map((dt) => [lr(f, dt), ki(f, dt)])]
    } : {
      icon: be.airFilter,
      name: yt.airQuality,
      sub: U,
      cls: "wbBase",
      zone: zn(nt, Z),
      callouts: [on(S, I, G), ...v.slice(1, 3).map((dt) => [lr(f, dt), ki(f, dt)])]
    });
  }
  const Ri = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Pi = (f) => {
    const v = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: v }, (w, S) => {
      const [I, G] = Ri[S % 3], U = 10 + S * 7 % 9, nt = 2.6 + S * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + I + '" style="top:' + (4 + S * 37 % 52) + "%;--x:" + (S * 29 % 90 + 4) + "%;--s:" + (0.8 + S * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + U + "s;animation-delay:-" + (S * 2.3 % U).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + nt.toFixed(1) + "s;animation-delay:-" + (S * 0.7 % nt).toFixed(1) + 's">' + G + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Wo(f) {
    const v = kn(f).sort((I, G) => Ce(G) - Ce(I));
    if (!v.length) return Ka({ icon: be.flower, name: yt.pollen, sub: yt.noPollen, visual: zn("–", ""), cls: "wbBase" });
    const w = v[0], S = (I) => Te(I.state) ? ki(f, I) : ga(I.state);
    return Ka({
      icon: be.flower,
      name: yt.pollen,
      sub: lr(f, w) + " · " + S(w),
      cls: "wbBase wbPollen",
      zone: Pi(Ce(w)) + zn(S(w), ""),
      callouts: v.slice(0, 3).map((I) => [lr(f, I), S(I)])
    });
  }
  function Ur(f) {
    const v = Date.now(), w = N("hourly").filter((G) => {
      const U = new Date(G.datetime).getTime();
      return U > v - ve && U < v + 12 * ve;
    }), S = w.find((G) => (G.precipitation_probability ?? 0) >= 50 || (G.precipitation ?? 0) >= 0.2), I = S ? Ra(yt.rainFrom, { time: Pa(new Date(Math.max(v, new Date(S.datetime).getTime())), f) }) : w.length ? yt.noRain12 : void 0;
    return Ka({ icon: be.radar, name: yt.rainRadar, sub: I, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const jo = {
    current: ee,
    hourly: Zt,
    sun: xe,
    moon: uo,
    wind: ta,
    uv_index: _i,
    compared_to_average: fo,
    humidity: ho,
    pressure: Hs,
    precipitation: mo,
    visibility: Di,
    air_quality: mr,
    aq_tile: gr,
    pollen_tile: Wo,
    radar_tile: Ur
  }, zo = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], go = (f, v) => {
    var w;
    return v.toLocaleDateString((w = f.locale) == null ? void 0 : w.language, { day: "numeric", month: "short" });
  }, Ni = (f) => {
    const v = new Date(f);
    return v.setMinutes(v.getMinutes() - v.getTimezoneOffset()), v.toISOString().slice(0, 10);
  }, Ae = () => {
    const f = $.range, v = Date.now();
    if (f.preset !== "custom") {
      const I = zo.find(([G]) => G === f.preset)[2];
      return [v - I * wn, v];
    }
    const w = ur(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), S = Math.min(v, ur(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + wn);
    return [Math.min(w, S - ve), S];
  }, _n = (f) => {
    const v = $.range;
    if (v.preset !== "custom") return zo.find(([I]) => I === v.preset)[1];
    const [w, S] = Ae();
    return v.from === v.to ? go(f, new Date(w)) : go(f, new Date(w)) + " – " + go(f, new Date(S - 1));
  }, ce = () => $.range.preset === "custom" ? $.range.from + "_" + $.range.to : $.range.preset, sn = (f, v) => v - f <= 2 * wn, Vo = (f, v, w, S) => sn(w, S) ? Pa(v, f) : go(f, v), Go = (f, v = 60) => {
    const w = Math.max(1, Math.ceil(f.length / v));
    return f.filter((S, I) => I % w === 0 || I === f.length - 1);
  }, Ii = (f, v, w, S, I = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(w).toISOString(),
    end_time: new Date(S).toISOString(),
    entity_ids: [v],
    minimal_response: I,
    no_attributes: I,
    significant_changes_only: !1
  }), ka = (f) => async (v, w, S, I) => {
    const G = Xe(v, w, f);
    if (!G) return [];
    const U = G.stateObj.entity_id, nt = await Ii(v, U, S, I);
    return Go(((nt == null ? void 0 : nt[U]) ?? []).map((Z) => {
      var vt;
      const rt = ((vt = Z.a) == null ? void 0 : vt[f]) ?? (Te(Z.s) ? Number(Z.s) : void 0), dt = (Z.lu ?? Z.lc) * 1e3;
      return typeof rt == "number" && dt >= S && dt <= I ? { t: new Date(dt), value: rt } : null;
    }).filter(Boolean)).map((Z) => ({ label: Vo(v, Z.t, S, I), value: Z.value }));
  }, Yn = (f, v) => async (w, S, I, G) => {
    const U = f(w);
    if (!U) return [];
    const nt = U.entity_id, Z = await Ii(w, nt, I, G, !0);
    return Go(((Z == null ? void 0 : Z[nt]) ?? []).map((rt) => {
      const dt = v(rt.s), vt = rt.lu * 1e3;
      return dt == null || !Number.isFinite(dt) || vt < I || vt > G ? null : { t: new Date(vt), value: dt };
    }).filter(Boolean)).map((rt) => ({ label: Vo(w, rt.t, I, G), value: rt.value }));
  }, vr = (f, v) => async (w, S, I, G) => {
    const U = Al(w);
    if (!U) return [];
    const nt = [];
    if (sn(I, G)) for (let Z = I; Z <= G; Z += ve / 2) nt.push({ label: Pa(new Date(Z), w), value: f(new Date(Z), U) });
    else for (let Z = G; Z >= I; Z -= wn) {
      const rt = new Date(Z), dt = v(rt, U, w);
      dt != null && nt.unshift({ label: go(w, rt), value: dt });
    }
    return Go(nt);
  }, qa = (f) => kn(f).sort((v, w) => Ce(w) - Ce(v))[0], Dn = (f, v, w) => {
    const S = Xe(f, v, w);
    return S ? cr(f, S.stateObj, w) : "";
  }, ke = {
    current: { name: () => yt.modes.temperature, icon: () => be.sunny, load: ka("temperature"), fmt: (f, v, w) => Fe(f, w), now: (f, v) => {
      var w;
      return Fe(f, (w = Xe(f, v, "temperature")) == null ? void 0 : w.value);
    } },
    sun: {
      name: () => yt.sun,
      icon: () => be.sunny,
      load: vr((f, v) => Math.round(yd(f, v.lat, v.lon) / tn), (f, v, w) => {
        const S = Rs(w, f);
        return S.rise && S.set ? Math.round((S.set - S.rise) / ve * 10) / 10 : null;
      }),
      fmt: (f, v, w, S) => S ? de(w, f.locale) + "°" : de(w, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => yt.moon,
      icon: () => be.night,
      load: vr((f) => Math.round($d(f).fraction * 100), (f) => Math.round($d(f).fraction * 100)),
      fmt: (f, v, w) => de(w, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => yt.metrics.uv_index, icon: () => be.sunnyAlert, load: ka("uv_index"), fmt: (f, v, w) => de(Math.round(w * 10) / 10, f.locale), now: (f, v) => {
      const w = Xe(f, v, "uv_index");
      return w ? de(Number(w.value), f.locale) : "";
    } },
    humidity: { name: () => yt.metrics.humidity, icon: () => be.waterPercent, load: ka("humidity"), fmt: (f, v, w) => de(Math.round(w), f.locale) + "%", now: (f, v) => {
      const w = Xe(f, v, "humidity");
      return w ? de(Math.round(Number(w.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => yt.metrics.pressure, icon: () => be.gauge, load: ka("pressure"), fmt: (f, v, w) => de(Math.round(w), f.locale) + " " + Dn(f, v, "pressure"), now: (f, v) => {
      const w = Xe(f, v, "pressure");
      return w ? de(Math.round(Number(w.value)), f.locale) + " " + Dn(f, v, "pressure") : "";
    } },
    wind: { name: () => yt.wind, icon: () => be.windy, load: ka("wind_speed"), fmt: (f, v, w) => de(Math.round(w), f.locale) + " " + Dn(f, v, "wind_speed"), now: (f, v) => {
      const w = Xe(f, v, "wind_speed");
      return w ? de(Math.round(Number(w.value)), f.locale) + " " + Dn(f, v, "wind_speed") : "";
    } },
    visibility: { name: () => yt.metrics.visibility, icon: () => be.eyeOutline, load: ka("visibility"), fmt: (f, v, w) => de(Math.round(w * 10) / 10, f.locale) + " " + Dn(f, v, "visibility"), now: (f, v) => {
      const w = Xe(f, v, "visibility");
      return w ? de(Number(w.value), f.locale) + " " + Dn(f, v, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => nn(f)[0] ? lr(f, nn(f)[0]) : yt.airQuality,
      icon: () => be.airFilter,
      load: Yn((f) => nn(f)[0], (f) => Te(f) ? Number(f) : null),
      fmt: (f, v, w) => {
        var G, U;
        const S = nn(f)[0], I = (G = S == null ? void 0 : S.attributes) == null ? void 0 : G.device_class;
        return de(Math.round(w * 10) / 10, f.locale) + (I === "aqi" ? " AQI" : (U = S == null ? void 0 : S.attributes) != null && U.unit_of_measurement ? " " + S.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const v = nn(f)[0];
        return v ? ki(f, v) : "";
      }
    },
    pollen_tile: {
      name: (f) => qa(f) ? lr(f, qa(f)) : yt.pollen,
      icon: () => be.flower,
      load: Yn(qa, (f) => {
        const v = Ce({ state: f });
        return v < 0 ? null : v;
      }),
      fmt: (f, v, w) => ga(Oa[Math.round(w)] || ""),
      now: (f) => {
        const v = qa(f);
        return v ? ga(v.state) : "";
      }
    }
  }, ln = {};
  let Ye = null;
  async function Uo(f) {
    var U;
    const v = c == null ? void 0 : c();
    if (!v || !ke[f]) return;
    const w = f + "|" + ce(), [S, I] = Ae();
    if (ln[w] && Date.now() - ln[w].at < 5 * Aa) return;
    ln[w] = { at: Date.now(), points: null };
    try {
      ln[w].points = await ke[f].load(v, xn(v), S, I);
    } catch {
      ln[w].points = [];
    }
    Ze(!0), Ye === f && $.graph === f && (Ye = null, Rc(J[f].el.querySelector(".wbGraphCard")));
    const G = $.graph === f && ((U = J[f]) == null ? void 0 : U.el.querySelector(".wbGraph .wbChart"));
    G && Wp(G, G.querySelector(".wbLine"), G.querySelectorAll(".wbArea"));
  }
  function Zn(f, v) {
    const w = $.range, S = Ni(Date.now()), [I, G] = Ae(), U = w.pickFrom || Ni(I), nt = w.pickTo || Ni(G - 1);
    return '<div class="wbRangePick' + (v ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + zo.map(([Z, rt]) => '<button class="wbRangePreset" aria-pressed="' + (w.preset === Z) + '" data-wb="graph-preset" data-range="' + Z + '" data-wb-focus="graph-preset-' + Z + '">' + Tt(rt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + U + '" max="' + S + '"></label><label><span>To</span><input type="date" data-range-to value="' + nt + '" max="' + S + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function br(f, v, w) {
    var Ot;
    const S = ke[w], [I, G] = Ae(), U = sn(I, G), nt = (Ot = ln[w + "|" + ce()]) == null ? void 0 : Ot.points, Z = J[w].el, rt = Math.max(120, Z.clientWidth - 2 * 18 - 32), dt = Math.max(40, Z.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), vt = nt ? nt.length > 1 ? $c(nt, (_t) => S.fmt(f, v, _t, U), dt, rt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Gp(S.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Tt(S.name(f)) + '</span><span class="wbSub">' + Tt(S.sub ? S.sub(U) : S.now ? S.now(f, v) : "") + '</span></div><button class="wbBack" title="' + Tt(yt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + Si(be.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!$.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Si(be.calendar) + "<span>" + Tt(_n(f)) + "</span>" + Si(be.chevronDown) + '</button><div class="wbGraph">' + vt + "</div></div>" + ($.picking ? Zn(f, Z.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function Ze(f) {
    var vt, Ot, _t;
    const v = c == null ? void 0 : c();
    if (!v || Y) return;
    const w = xn(v);
    st(v, w), gt.lastFetch || Jt();
    const S = Vt(v), I = Zc(v), G = Xd(v), U = [
      ...w.map((xt) => v.states[xt]),
      v.states["sun.sun"],
      I && v.states[I],
      G && v.states[G],
      ...S.air.map((xt) => v.states[xt]),
      ...S.pollen.map((xt) => v.states[xt]),
      ...O.some((xt) => H.includes(xt)) ? [...nn(v), ...kn(v)] : [],
      v.locale,
      v.config,
      v.entities,
      Math.floor(Date.now() / Aa)
    ];
    if (!f && q && U.length === q.length && U.every((xt, qt) => xt === q[qt])) return;
    q = U;
    const nt = P.getRootNode(), Z = nt.activeElement || document.activeElement;
    for (const xt of O) {
      const qt = J[xt];
      let Rt = "";
      try {
        Rt = ($.graph === xt ? br(v, w, xt) : jo[xt](v, w)) || "";
      } catch {
        Rt = "";
      }
      if (Rt === qt.html) continue;
      const bt = Z && qt.el.contains(Z) ? (vt = Z.dataset) == null ? void 0 : vt.wbFocus : void 0, $t = qt.el.querySelector(".wbStripScroll"), jt = $t ? $t.scrollLeft : null;
      qt.html = Rt, qt.el.hidden = !Rt, qt.el.innerHTML = Rt;
      const ue = qt.el.querySelector(".wbStripScroll");
      ue && jt != null ? ue.scrollTo({ left: jt }) : ue != null && ue.dataset.start && ue.scrollTo({ left: Number(ue.dataset.start) * ue.clientWidth / Number(ue.dataset.span) }), bt && !tt && ((Ot = qt.el.querySelector('[data-wb-focus="' + bt + '"]')) == null || Ot.focus());
    }
    Gn(), tt && ((_t = P.querySelector('[data-wb-focus="' + tt + '"]')) == null || _t.focus({ preventScroll: !0 }), tt = null);
    let rt = !1, dt = !1;
    for (const xt of O) {
      const qt = J[xt], Rt = !qt.el.hidden, bt = V[xt] === "wide" || at.includes(xt), $t = O.indexOf(xt) >= O.indexOf("moon"), jt = Rt && ($t && bt && !rt || !bt && !dt);
      jt && bt && (rt = !0), jt && !bt && (dt = !0), qt.el.toggleAttribute("data-break", jt);
    }
    Fi(performance.now());
  }
  function Kn() {
    lt || Y || (lt = !0, queueMicrotask(() => {
      lt = !1, Ze(!0);
    }));
  }
  function Mn() {
    const f = getComputedStyle(P), v = (U) => f.getPropertyValue(U).trim(), w = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([U, nt]) => {
      v(nt) && (w[U] = v(nt));
    });
    const S = v("--color-text-primary") || "#f1f1f1", I = v("--color-bg-card") || "#222222", G = !!P.closest(".light");
    return { colors: { ...en, ...w }, ink: G ? S : I, paper: G ? I : S };
  }
  const vo = (f, v) => {
    var w;
    f.width !== v.w && (f.width = v.w), f.height !== v.h && (f.height = v.h), (w = f.getContext("2d")) == null || w.putImageData(new ImageData(v.data, v.w, v.h), 0, 0);
  }, $n = () => g && !nh();
  function Hi(f, v) {
    P.querySelectorAll("canvas[data-wb-strip]").forEach((w) => Os(w, Q[w.dataset.wbStrip], f, v));
  }
  function Os(f, v, w, S) {
    if (!v || !f.getClientRects().length) return;
    const I = f.clientWidth, G = f.clientHeight;
    if (!I || !G) return;
    const U = { width: I, height: G, columns: v.columns || Pc, colors: S.colors, clock: w, ambient: $n(), seed: v.seed, soft: 1.5 };
    if (u === "smooth") {
      const nt = Math.min(2, window.devicePixelRatio || 1), Z = Math.round(I * nt), rt = Math.round(G * nt);
      f.width !== Z && (f.width = Z), f.height !== rt && (f.height = rt);
      const dt = f.getContext("2d");
      if (!dt) return;
      dt.setTransform(nt, 0, 0, nt, 0, 0), tf(dt, v.segs, U);
    } else vo(f, Qu(v.segs, { ...U, px: 2, oneBit: u === "onebit", ink: S.ink, paper: S.paper }));
  }
  function Fi(f) {
    if (Y) return;
    const v = Mn();
    if (u !== "smooth") {
      const w = $n();
      P.querySelectorAll("canvas[data-wb-wx]").forEach((S) => {
        S.getClientRects().length && vo(S, Sp(dc(S.dataset.wbWx, v.colors), { size: Number(S.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: v.colors, ink: v.ink, paper: v.paper, clock: f, idle: w }));
      });
    }
    P.querySelectorAll("canvas[data-wb-sea]").forEach((w) => {
      const S = w.clientWidth, I = w.clientHeight, G = Number(w.dataset.wbSea), U = S + "x" + I + ":" + G + ":" + v.colors.skyClearDay;
      !S || !I || !(G > 0) || w.dataset.painted === U || (w.dataset.painted = U, vo(w, gf(S, I, G, v.colors)));
    }), Hi(f, v);
  }
  function wr(f) {
    if (ot = 0, !(Y || !$n())) {
      if (!document.hidden)
        if (u === "smooth") Hi(f, Mn());
        else {
          const v = Math.floor(f / 100);
          v !== it && (it = v, Fi(f));
        }
      ot = requestAnimationFrame(wr);
    }
  }
  function Bn() {
    P.classList.toggle("wbMotion", $n()), !ot && !Y && $n() && (ot = requestAnimationFrame(wr));
  }
  function Yr(f) {
    var w, S, I, G, U, nt, Z;
    const v = (S = (w = f.target).closest) == null ? void 0 : S.call(w, "[data-wb]");
    if (!v || !P.contains(v)) {
      const rt = (G = (I = f.target).closest) == null ? void 0 : G.call(I, ".wbItem"), dt = rt == null ? void 0 : rt.dataset.card;
      if (!rt || !P.contains(rt) || !ke[dt] || $.graph === dt || P.closest(".tfEditing") || rt.offsetHeight < 200 || dt === "current" && y) return;
      $.graph = dt, tt = "graph-close", Ze(!0), (U = ln[dt + "|" + ce()]) != null && U.points ? Rc(J[dt].el.querySelector(".wbGraphCard")) : Ye = dt, Uo(dt);
      return;
    }
    switch (v.dataset.wb) {
      case "day": {
        $.openDay = Number(v.dataset.index), $.opener = v.dataset.wbFocus, tt = "back-day";
        const rt = oe()[$.openDay], dt = !gt.todayHistory || gt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - gt.todayHistory.fetched > If;
        rt && Bs(new Date(rt.datetime), /* @__PURE__ */ new Date()) && dt && Ht();
        break;
      }
      case "close-day":
        $.openDay = void 0, tt = $.opener, $.opener = void 0;
        break;
      case "open-page":
        y == null || y();
        return;
      case "day-mode":
        $.dayMode = v.dataset.mode;
        break;
      case "hourly-mode":
        $.hourlyMode = v.dataset.mode;
        break;
      case "hourly-view":
        $.hourlyView = v.dataset.view;
        try {
          localStorage.setItem(K, $.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const rt = P.querySelector(".wbStripScroll");
        rt && rt.scrollTo({ left: Number(v.dataset.hours) * rt.clientWidth / Number(rt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        $.aq = v.dataset.entity, Je($.aq);
        break;
      case "aq-close":
        $.aq = void 0;
        break;
      case "graph-close":
        $.graph = void 0, $.picking = !1;
        break;
      case "graph-pick":
        $.picking = !$.picking, tt = $.picking ? "graph-preset-" + ($.range.preset === "custom" ? "day" : $.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        $.range = { preset: v.dataset.range }, $.picking = !1, tt = "graph-pick", Ze(!0), Uo($.graph);
        return;
      case "graph-apply": {
        let rt = $.range.pickFrom || ((nt = P.querySelector("[data-range-from]")) == null ? void 0 : nt.value), dt = $.range.pickTo || ((Z = P.querySelector("[data-range-to]")) == null ? void 0 : Z.value);
        if (!rt || !dt) return;
        rt > dt && ([rt, dt] = [dt, rt]), $.range = { preset: "custom", from: rt, to: dt }, $.picking = !1, tt = "graph-pick", Ze(!0), Uo($.graph);
        return;
      }
      default:
        return;
    }
    Ze(!0);
  }
  function Yo(f) {
    var v, w, S, I, G, U;
    f.key === "Escape" && $.openDay !== void 0 && ((w = (v = f.target).closest) != null && w.call(v, '[data-wb-open="day"]')) ? ($.openDay = void 0, tt = $.opener, $.opener = void 0, Ze(!0)) : f.key === "Escape" && $.picking && ((I = (S = f.target).closest) != null && I.call(S, ".wbGraphCard")) ? ($.picking = !1, tt = "graph-pick", Ze(!0)) : f.key === "Escape" && $.graph && ((U = (G = f.target).closest) != null && U.call(G, ".wbGraphCard")) && ($.graph = void 0, Ze(!0));
  }
  let ze = null;
  function xr(f) {
    var w, S;
    const v = (S = (w = f.target).closest) == null ? void 0 : S.call(w, ".wbStripScroll");
    !v || f.button !== 0 || (ze = { startX: f.pageX, left: v.scrollLeft, moved: !1 }, v.classList.add("wbHeld"), window.addEventListener("mousemove", Xn), window.addEventListener("mouseup", bo, { once: !0 }));
  }
  function Xn(f) {
    const v = P.querySelector(".wbStripScroll");
    if (!ze || !v) return;
    const w = f.pageX - ze.startX;
    !ze.moved && Math.abs(w) > 1 && (ze.moved = !0, v.classList.add("wbDragging")), v.scrollLeft = ze.left - w;
  }
  function bo() {
    ze = null, window.removeEventListener("mousemove", Xn);
    const f = P.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const v = [...f.querySelectorAll(".wbSnap")];
    if (v.length) {
      const w = v.reduce((S, I) => Math.abs(I.offsetLeft - f.scrollLeft) < Math.abs(S.offsetLeft - f.scrollLeft) ? I : S);
      f.scrollTo({ left: w.offsetLeft, behavior: "smooth" });
    }
  }
  const Ma = (f) => {
    var w, S;
    const v = f.target;
    (w = v.matches) != null && w.call(v, "[data-range-from]") ? $.range.pickFrom = v.value : (S = v.matches) != null && S.call(v, "[data-range-to]") && ($.range.pickTo = v.value);
  };
  P.addEventListener("change", Ma), P.addEventListener("click", Yr), P.addEventListener("keydown", Yo), P.addEventListener("mousedown", xr);
  const Zo = 64, Ko = 30;
  let Ea = null, pe = 0;
  const $o = () => {
    pe = 0, P.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let v = 0, w = 0;
      if (Ea) {
        const S = f.parentElement.getBoundingClientRect(), I = S.left + S.width / 2 - Ea.x, G = S.top + S.height / 2 - Ea.y, U = Math.hypot(I, G) || 1;
        if (U < Zo) {
          const nt = (1 - U / Zo) * Ko;
          v = I / U * nt, w = G / U * nt;
        }
      }
      f.style.transform = v || w ? "translate(" + v.toFixed(1) + "px," + w.toFixed(1) + "px)" : "";
    }), Ea && (pe = requestAnimationFrame($o));
  }, Zr = (f) => {
    var w, S;
    if (!((S = (w = f.target).closest) == null ? void 0 : S.call(w, ".wbPollen")) || Ca != null && Ca.matches) {
      Ea && (Ea = null, pe || (pe = requestAnimationFrame($o)));
      return;
    }
    Ea = { x: f.clientX, y: f.clientY }, pe || (pe = requestAnimationFrame($o));
  }, yr = () => {
    Ea = null, pe || (pe = requestAnimationFrame($o));
  };
  P.addEventListener("pointermove", Zr), P.addEventListener("pointerleave", yr);
  const Sa = typeof ResizeObserver == "function" ? new ResizeObserver(() => Fi(performance.now())) : null;
  Sa == null || Sa.observe(P);
  const Ca = (Ta = window.matchMedia) == null ? void 0 : Ta.call(window, "(prefers-reduced-motion: reduce)"), ye = () => {
    Bn(), Fi(performance.now());
  };
  (Jn = Ca == null ? void 0 : Ca.addEventListener) == null || Jn.call(Ca, "change", ye);
  const Rn = [
    setInterval(() => {
      et = /* @__PURE__ */ new Date(), Ze(!0);
    }, Gf),
    setInterval(() => {
      Lt = /* @__PURE__ */ new Date(), Ze(!0);
    }, Uf),
    setInterval(Jt, jf)
  ];
  return Ze(!0), Bn(), {
    update() {
      Ze(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ze(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, P.dataset.style = u, Ze(!0), Bn());
    },
    destroy() {
      var f;
      cancelAnimationFrame(pe), P.removeEventListener("pointermove", Zr), P.removeEventListener("pointerleave", yr), Y = !0, Rn.forEach(clearInterval), ot && cancelAnimationFrame(ot), ot = 0, Sa == null || Sa.disconnect(), (f = Ca == null ? void 0 : Ca.removeEventListener) == null || f.call(Ca, "change", ye), bo(), P.removeEventListener("click", Yr), P.removeEventListener("change", Ma), P.removeEventListener("keydown", Yo), P.removeEventListener("mousedown", xr), ["daily", "hourly"].forEach(z), P.remove();
    }
  };
}
const El = "#E1E1E1", Qc = "#F7F4F0", Jd = "#03a9f4", fe = 14, he = 172;
let Rh = 0;
const qe = (i) => Math.round(i * 100) / 100, Io = (i, c, s) => Math.max(c, Math.min(s, i)), Li = (i, c, s, u, g, b) => '<rect x="' + qe(i) + '" y="' + qe(c) + '" width="' + qe(s) + '" height="' + qe(u) + '" fill="' + g + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", Qd = (i) => i.map((c, s) => (s ? "L" : "M") + qe(c[0]) + " " + qe(c[1])).join("");
function tc(i) {
  const c = (i == null ? void 0 : i.attributes) || {};
  return c.device_class === "curtain" ? "curtain" : c.device_class === "blind" || c.current_tilt_position != null ? "venetian" : "blind";
}
const dr = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Ph(i) {
  const c = i < 2 ? i + 24 : i;
  let s = dr[0], u = dr[dr.length - 1];
  for (let E = 0; E < dr.length - 1; E++) if (c >= dr[E][0] && c <= dr[E + 1][0]) {
    s = dr[E], u = dr[E + 1];
    break;
  }
  const g = (c - s[0]) / (u[0] - s[0]), b = g * g * (3 - 2 * g), y = (E, M) => {
    const P = parseInt(E.slice(1), 16), W = parseInt(M.slice(1), 16);
    return "#" + [16, 8, 0].map((H) => Math.round((P >> H & 255) + ((W >> H & 255) - (P >> H & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: y(s[1][0], u[1][0]), bot: y(s[1][1], u[1][1]), warm: y(s[1][2], u[1][2]), cool: y(s[1][3], u[1][3]), op: s[1][4] + (u[1][4] - s[1][4]) * b, t: c };
}
function Nh(i) {
  const c = parseInt(i.slice(1), 16), s = (c >> 16 & 255) / 255, u = (c >> 8 & 255) / 255, g = (c & 255) / 255, b = Math.max(s, u, g), y = Math.min(s, u, g);
  let E = 0, M = 0;
  const P = (b + y) / 2;
  if (b !== y) {
    const W = b - y;
    M = P > 0.5 ? W / (2 - b - y) : W / (b + y), E = (b === s ? (u - g) / W + (u < g ? 6 : 0) : b === u ? (g - s) / W + 2 : (s - u) / W + 4) / 6;
  }
  return [E * 360, M * 100, P * 100];
}
function nu(i, c, s) {
  c = Io(c, 0, 100) / 100, s = Io(s, 0, 100) / 100;
  const u = (y) => (y + i / 30) % 12, g = c * Math.min(s, 1 - s), b = (y) => s - g * Math.max(-1, Math.min(u(y) - 3, Math.min(9 - u(y), 1)));
  return "#" + [b(0), b(8), b(4)].map((y) => Math.round(y * 255).toString(16).padStart(2, "0")).join("");
}
const [ou, iu, ru] = Nh(El), tp = nu(ou, iu, Math.max(6, ru - 14)), Ih = nu(ou, iu, Math.min(96, ru + 16));
function Hh(i, c, s, u, g) {
  const b = he / 2, y = he * 0.12, E = b - (b - y) * i, M = (at) => at ** 1.3, P = Io(s, -1.5, 1.5), W = (at) => -(Math.abs(P) * 4.6 * at ** 1.5) * Math.sign(P), H = i * 1.4, O = (at, J) => {
    const Y = Math.min(4.8, Math.abs(s) * 2.6) * (J ? 1 : -1) * Math.sign(s || 1), q = J ? at + E : at, ot = J ? at : at + E, it = (gt) => q + W(gt) + Y * Math.sin(gt * Math.PI * 1.2 + u) * M(gt) * 1.4 + H * Math.sin(gt * Math.PI * 2 + u * 0.6) * M(gt) * (J ? 1 : -1), lt = [[ot, fe]];
    for (let gt = 0; gt <= 12; gt++) lt.push([it(gt / 12), fe + he * gt / 12]);
    lt.push([ot, fe + he]);
    let tt = '<path d="' + Qd(lt) + 'Z" fill="' + El + '"/>';
    if (g) return tt;
    const K = 1.35 + ((J ? s > 0 : s < 0) ? 0.35 : 0), B = (gt) => {
      const et = gt / 7, Lt = J ? 1 - et : et, Q = (1 - Lt) ** 1.3, Mt = at + E * et;
      return Array.from({ length: 13 }, (A, N) => {
        const k = N / 12;
        return [Mt + W(k) * Q + Y * K * Math.sin(k * Math.PI * 1.2 + u - Lt * 3.2) * M(k) * 1.4 * Q + H * 1.6 * Math.sin(k * Math.PI * 2 + u * 0.6 - Lt * 2.5) * M(k) * i * (0.4 + 0.6 * Q), fe + he * k];
      });
    }, $ = [1, 2, 3, 4, 5, 6].map(B);
    for (let gt = 0; gt < 6; gt += 2) tt += '<path d="' + Qd($[gt]) + Qd($[gt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return tt;
  }, V = b - (b - y) * c;
  return { body: O(fe, !0) + O(fe + he - E, !1), rails: [{ x: fe + V - 4, y: fe, w: 4, h: he }, { x: fe + he - V, y: fe, w: 4, h: he }], head: 6.4 };
}
function Fh(i, c, s) {
  const u = he * (1 - i);
  let g = "";
  if (u > 1 && (g += Li(fe, fe, he, u, El), !s))
    for (let b = 1; b < 7; b += 2) g += Li(fe + he * b / 7, fe, he / 7, u, "#fff");
  return { body: g, rails: [{ x: fe, y: fe + he * (1 - c) - 7, w: he, h: 11 }], head: 10.4 };
}
function Oh(i, c, s, u) {
  const g = 9 - 7 * (s / 100), b = fe + he * (1 - i), y = Math.ceil(he / 10) + 1, E = fe + g / 2, M = (fe + he - g / 2 - E) / (y - 1), P = 0.8, W = 0.6, H = Array.from({ length: y }, (at, J) => Math.max(E + J * W, Math.min(E + J * M, b - g / 2 - (y - 1 - J) * W))), O = H.slice(0, -1).map((at, J) => Io((H[J + 1] - at - W) / (M - W), 0, 1));
  O.push(O[y - 2]);
  let V = "";
  return H.forEach((at, J) => {
    const Y = P + (g - P) * O[J], q = Math.max(0.5, Y / 2), ot = Math.max(0.4, Y * 0.114);
    V += Li(fe, at - q, he, Math.max(1, Y), El), !u && Y > 2.2 && (V += Li(fe, at + q - ot, he, ot, tp) + Li(fe, at - q, he, ot * 0.55, Ih, 0.75));
  }), u || [0.22, 0.78].forEach((at) => {
    V += Li(fe + he * at - 0.7, fe, 1.4, Math.max(0, H[y - 1] + 1 - fe), tp, 0.85);
  }), { body: V, rails: [{ x: fe, y: fe + he * (1 - c) - 8, w: he, h: 8 }], head: 8.8 };
}
const ep = (i, c, s, u, g, b, y) => i === "curtain" ? Hh(c, s, g, b, y) : i === "venetian" ? Oh(c, s, u, y) : Fh(c, s, y);
function qh(i, c) {
  let s = "", u = "";
  return c.forEach((g) => {
    const b = g.w > g.h, y = Io(b ? fe + he / 2 : g.x + g.w / 2, 17, 183), E = Io(b ? g.y + g.h / 2 : fe + he / 2, 17, 183);
    s += b ? Li(fe, Io(g.y + g.h / 2, fe, fe + he) - 1, he, 2, Jd) : Li(Io(g.x + g.w / 2, fe, fe + he) - 1, fe, 2, he, Jd);
    const M = b ? "M" + qe(y - 4) + " " + qe(E - 3) + "l4 -3l4 3M" + qe(y - 4) + " " + qe(E + 3) + "l4 3l4 -3" : "M" + qe(y - 3) + " " + qe(E - 4) + "l-3 4l3 4M" + qe(y + 3) + " " + qe(E - 4) + "l3 4l-3 4";
    u += '<circle cx="' + qe(y) + '" cy="' + qe(E) + '" r="11" fill="' + Jd + '" filter="url(#' + i + 's)"/><path d="' + M + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: s, knobs: u };
}
function Wh(i, c) {
  const s = /* @__PURE__ */ new Date(), u = Ph(s.getHours() + s.getMinutes() / 60), g = 42 + 18 * Math.sin(u.t * 0.5), b = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, y = ep(c.kind, c.pos / 100, c.bar / 100, c.tilt, c.vel, c.ph, !1), E = c.ghostAlpha > 4e-3 && c.ghost != null ? ep(c.kind, c.ghost / 100, c.ghost / 100, c.tilt, 0, 0, !0).body : "", M = c.grip > 4e-3 ? qh(i, y.rails) : null, P = (W) => Li(fe, fe, he, he, W);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + i + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + i + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + i + 'w" cx="' + qe(g) + '%" cy="' + qe(b) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + qe(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + i + 'k" cx="' + qe(100 - g * 0.8) + '%" cy="' + qe(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + qe(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + i + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Qc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + i + 'c)">' + P("url(#" + i + "l)") + P("url(#" + i + "w)") + P("url(#" + i + "k)") + (E ? '<g opacity="' + qe(c.ghostAlpha) + '">' + E + "</g>" : "") + y.body + '<rect x="14" y="14" width="172" height="' + y.head + '" fill="' + El + '" filter="url(#' + i + 's)"/></g>' + (M ? '<g clip-path="url(#' + i + 'c)" opacity="' + qe(c.grip) + '">' + M.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Qc + '" stroke-width="3"/>' + (M ? '<g opacity="' + qe(c.grip) + '">' + M.knobs + "</g>" : "") + "</svg>";
}
function jh({ onMove: i, onSet: c }) {
  var tt;
  const s = "cv" + ++Rh, u = document.createElement("div");
  u.className = "tfCoverArt";
  const g = (tt = window.matchMedia) == null ? void 0 : tt.call(window, "(pointer: coarse)").matches;
  let b = null;
  const y = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, M = !1, P = !1, W = null, H = 0, O = 0;
  const V = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", at = () => W || M || P || b.moving || b.target != null ? 1 : g ? performance.now() < O ? 1 : 0.4 : 0, J = () => {
    u.innerHTML = Wh(s, { kind: b.kind, pos: y.pos, bar: b.target ?? y.pos, tilt: y.tilt, vel: y.vel, ph: y.ph, ghost: y.gpos, ghostAlpha: y.ghost, grip: y.grip });
  };
  function Y(K) {
    E = 0;
    const B = y.last ? Math.min(0.064, (K - y.last) / 1e3) : 1 / 60, $ = B * 60;
    y.last = K;
    const gt = b.pos - y.pos, et = y.pos;
    y.pos += Math.sign(gt) * Math.min(Math.abs(gt), Math.max(10.5, Math.abs(gt) * 1.4) * B), Math.abs(b.pos - y.pos) < 0.03 && (y.pos = b.pos), y.vel = y.vel * 0.86 + (y.pos - et) / $ * 0.14, Math.abs(y.vel) < 0.015 && y.pos === b.pos && (y.vel = 0), (y.pos !== et || y.vel) && (y.ph += (0.06 + Math.abs(y.vel) * 0.03) * $);
    const Lt = b.tilt - y.tilt;
    y.tilt += Math.sign(Lt) * Math.min(Math.abs(Lt), Math.max(60, Math.abs(Lt) * 4) * B);
    const Q = at();
    y.grip += (Q - y.grip) * Math.min(1, B * (Q > y.grip ? 11 : 3.5)), Math.abs(Q - y.grip) < 0.01 && (y.grip = Q);
    const Mt = b.target != null && Math.abs(b.target - y.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (y.gpos = b.target), y.ghost += (Mt - y.ghost) * Math.min(1, B * (Mt > y.ghost ? 16 : 3)), Math.abs(Mt - y.ghost) < 4e-3 && (y.ghost = Mt), J(), y.pos !== b.pos || y.vel || y.tilt !== b.tilt || y.grip !== Q || y.ghost !== Mt ? E = requestAnimationFrame(Y) : y.last = 0;
  }
  const q = () => {
    b && !E && (E = requestAnimationFrame(Y));
  }, ot = setInterval(() => {
    b && !E && J();
  }, 60 * 1e3), it = (K) => {
    const B = u.getBoundingClientRect();
    return V() === "x" ? (K.clientX - B.left) / B.width : (K.clientY - B.top) / B.height;
  };
  u.addEventListener("pointerdown", (K) => {
    var gt;
    if (!(b != null && b.canSet) || K.button > 0) return;
    K.preventDefault(), (gt = u.setPointerCapture) == null || gt.call(u, K.pointerId);
    const B = b.target ?? b.pos, $ = u.getBoundingClientRect();
    W = { p0: it(K), from: B, x0: K.clientX, value: null, side: null }, b.kind === "curtain" && B > 0 && (W.side = (K.clientX - $.left) / $.width < 0.5 ? "L" : "R"), q();
  }), u.addEventListener("pointermove", (K) => {
    if (!W) return;
    let B;
    if (b.kind === "curtain") {
      if (!W.side) {
        const gt = K.clientX - W.x0;
        if (Math.abs(gt) < 4) return;
        W.side = gt < 0 ? "L" : "R";
      }
      const $ = (he / 2 - he * 0.12) / 200;
      B = W.from + (W.side === "L" ? -1 : 1) * ((it(K) - W.p0) / $) * 100;
    } else B = W.from - (it(K) - W.p0) / (he / 200) * 100;
    W.value = Io(B, 0, 100), i(W.value);
  });
  const lt = () => {
    if (!W) return;
    const K = W.value;
    W = null, K != null && c(Math.round(K)), q();
  };
  return u.addEventListener("pointerup", lt), u.addEventListener("pointercancel", lt), u.addEventListener("lostpointercapture", lt), u.addEventListener("pointerenter", () => {
    M = !0, q();
  }), u.addEventListener("pointerleave", () => {
    M = !1, q();
  }), u.addEventListener("focus", () => {
    P = u.matches(":focus-visible"), q();
  }), u.addEventListener("blur", () => {
    P = !1, q();
  }), u.addEventListener("keydown", (K) => {
    if (!(b != null && b.canSet)) return;
    const B = Math.round(b.target ?? b.pos), $ = K.shiftKey ? 10 : 1, gt = { ArrowUp: B + $, ArrowRight: B + $, ArrowDown: B - $, ArrowLeft: B - $, PageUp: B + 25, PageDown: B - 25, Home: 0, End: 100 }[K.key];
    if (gt == null) return;
    K.preventDefault();
    const et = Io(gt, 0, 100);
    i(et), clearTimeout(H), H = setTimeout(() => c(et), 500);
  }), {
    el: u,
    update(K) {
      const B = !b;
      b = K, B && (y.pos = b.pos, y.tilt = b.tilt, O = performance.now() + 1500, g && setTimeout(q, 1600)), u.classList.toggle("x", V() === "x"), u.classList.toggle("y", V() === "y"), b.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), u.setAttribute("aria-orientation", V() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), u.setAttribute("aria-valuetext", b.text), q();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(ot), clearTimeout(H), u.remove();
    }
  };
}
const ap = "move-assistant-density", Po = {
  get(i) {
    try {
      return localStorage.getItem(i);
    } catch {
      return null;
    }
  },
  set(i, c) {
    try {
      localStorage.setItem(i, c);
    } catch {
    }
  }
}, X = (i) => String(i ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]), ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', np = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', pd = {
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
}, up = "move_assistant_house", fp = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], hp = "move-assistant-house-look", Jh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Qh = [["popup", "Popup"], ["sheet", "Sheet"]], tm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], em = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], am = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], nc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', om = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', mp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', su = (i) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + i.map((c) => '<path d="' + c + '"/>').join("") + "</svg>", bp = su(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), im = su(["M20 6L9 17L4 12"]), No = (i, c = "") => '<span class="tfAreaGlyph" data-icon-for="' + X(i || "") + '"' + (c ? ' data-icon-name="' + X(c) + '"' : "") + "></span>", rm = (i) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (i ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', sm = 1, lm = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], wp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ud = ["door", "window", "garage_door", "opening"], xp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Tl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], dm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], cm = 10, pm = 20, um = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, fm = ["living room", "bedroom", "office"];
function hm(i, { config: c, getHass: s }) {
  var yl, kl, Ml;
  const u = (e) => i.getElementById(e), g = u("app"), y = String((c || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Po.get(ap) === "1", M = {};
  const P = (e) => {
    var n;
    return (n = s()) == null ? void 0 : n.callWS(e);
  }, W = (e, n, l) => P({ type: "call_service", domain: e, service: n, service_data: l }), H = i.querySelector("#appearancePane .toggleList");
  H && !u("densityToggle") && (H.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    E = !E, Po.set(ap, E ? "1" : "0"), K();
  }));
  const O = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && Wt(e).device_class === "power" && /^(W|kW)$/.test(Wt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], V = (e, n, l, t) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + t.map(([a, o]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + l + '="' + a + '">' + o + "</button>").join("") + "</div>", at = (e, n, l, t) => '<div class="toggleRow"' + (t ? ' id="' + t + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + l + "</div>";
  function J() {
    var C, L;
    if (!y || u("housePane")) return;
    const e = u("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], l = (T, R) => '<div class="houseTab' + (T === "look" ? " active" : "") + '" data-house-pane="' + T + '"><section class="card">' + R + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([T, R]) => '<button class="tab segBtn' + (T === "look" ? " active" : "") + '" type="button" data-house-tab="' + T + '">' + R + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    l("look", Jh.map(([T, R]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + T + '"><div class="tfCardTitle">' + R + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    l("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + l("sources", '<div class="toggleList">' + O.map(([T, R, j]) => at(R, j, '<select class="settingsSelect" data-source="' + T + '" aria-label="' + R + '"></select>')).join("") + "</div>") + l("sums", '<div class="toggleList">' + Object.entries(ac).map(([T, R]) => at(R.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + T + '" aria-label="' + R.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const t = (T) => e.querySelector('[data-look-group="' + T + '"]'), a = (T) => T == null ? void 0 : T.closest(".toggleRow");
    [a(e.querySelector(".themeBtn"))].forEach((T) => T && t("look").appendChild(T));
    const o = a(u("densityToggle"));
    o && (o.hidden = !0), [a(u("moreInfoChoice")), a(u("namesChoice"))].forEach((T) => T && t("house").appendChild(T)), t("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", V("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", V("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [a(u("hoursChoice")), a(u("wxStyleChoice"))].forEach((T) => T && t("weather").appendChild(T));
    const r = u("housePane"), d = r.querySelector(".houseTabs"), p = d.querySelector(".rubberIndicator"), h = "homecore-light-view", m = (T) => {
      r.classList.toggle("tfLightCardsOn", T === "cards"), r.querySelectorAll("[data-light-view]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.lightView === T))), Po.set(h, T);
    };
    m(Po.get(h) === "table" ? "table" : "cards"), r.querySelector(".tfLightView").addEventListener("click", (T) => {
      const R = T.target.closest("[data-light-view]");
      R && m(R.dataset.lightView);
    }), new ResizeObserver(() => q()).observe(r), (L = (C = document.fonts) == null ? void 0 : C.ready) == null || L.then(() => q());
    const x = (T) => {
      const R = d.querySelector(".tab.active");
      p.style.transition = "none", T ? jp(p, p.offsetLeft, p.offsetWidth, R.offsetLeft, R.offsetWidth) : (p.style.left = R.offsetLeft + "px", p.style.width = R.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(d), r.addEventListener("click", (T) => {
      const R = T.target.closest("[data-house-tab]");
      if (R) {
        d.querySelectorAll(".tab").forEach((D) => D.classList.toggle("active", D === R)), r.querySelectorAll(".houseTab").forEach((D) => D.classList.toggle("active", D.dataset.housePane === R.dataset.houseTab)), R.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), q();
        return;
      }
      const j = T.target.closest("[data-light-fav]");
      if (j) {
        Xo(j.dataset.lightFav);
        return;
      }
      const _ = T.target.closest("[data-light-pick]");
      if (_) {
        const [D, ft] = _.dataset.lightPick.split("|"), Bt = { ...ee[D] };
        _.dataset.v ? Bt[ft] = _.dataset.v : delete Bt[ft], ee[D] = Bt, Qt(), [...Ma.keys()].filter((ht) => ht.endsWith(":" + ft)).forEach((ht) => Ma.delete(ht)), so();
        return;
      }
      const F = T.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!F || F.disabled)) {
        if (F.dataset.lights && (ee.lights = F.dataset.lights), F.dataset.dacPad && (ee.dacPad = F.dataset.dacPad), (F.dataset.lights || F.dataset.dacPad) && (Qt(), Ma.clear()), F.dataset.sumToggle) {
          const D = F.dataset.sumToggle, ft = new Set(Ht.hiddenSums || []);
          ft.has(D) ? ft.delete(D) : ft.add(D), Ht = { ...Ht, hiddenSums: [...ft] }, Ge();
        }
        so();
      }
    }), r.addEventListener("change", (T) => {
      const R = T.target;
      R.dataset.source && (Ht = { ...Ht, sources: { ...Ht.sources || {}, [R.dataset.source]: R.value || void 0 } }, Ge());
      const j = R.dataset.lightStyle || R.dataset.lightPad;
      if (j) {
        const _ = R.dataset.lightStyle ? "lightStyles" : "lightPads", F = { ...ee[_] };
        R.value ? F[j] = R.value : delete F[j], ee[_] = F, Qt(), [...Ma.keys()].filter((D) => D.endsWith(":" + j)).forEach((D) => Ma.delete(D));
      }
      so();
    });
  }
  function Y() {
    var x, C;
    Ko() && bo();
    const e = u("housePane");
    if (!e) return;
    const n = !!customElements.get(ze);
    e.querySelectorAll("[data-lights]").forEach((L) => L.setAttribute("aria-pressed", String(L.dataset.lights === ee.lights))), u("lightsRow").querySelector(".status").textContent = n || !Ko() ? "How lights show on the house page." : Xn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((L) => L.setAttribute("aria-pressed", String(L.dataset.dacPad === ee.dacPad))), u("dacPadRow").hidden = !Ko();
    for (const L of e.querySelectorAll("[data-source]")) {
      if (L === i.activeElement) continue;
      const [T] = O.find(([j]) => j === L.dataset.source), R = Object.keys(M).filter(O.find(([j]) => j === T)[3]).sort((j, _) => Ct(j).localeCompare(Ct(_)));
      L.dataset.sig !== R.join(",") && (L.innerHTML = '<option value="">Automatic</option>' + R.map((j) => '<option value="' + X(j) + '">' + X(Ct(j)) + "</option>").join(""), L.dataset.sig = R.join(",")), L.value = R.includes((x = Ht.sources) == null ? void 0 : x[T]) ? Ht.sources[T] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((L) => {
      const T = !(Ht.hiddenSums || []).includes(L.dataset.sumToggle);
      L.classList.toggle("on", T), L.setAttribute("aria-checked", String(T));
    });
    const l = u("lightRows"), t = u("lightCards"), a = i.activeElement, o = l != null && l.contains(a) || t != null && t.contains(a) ? a : null;
    if (!l || o != null && o.matches("select")) {
      q();
      return;
    }
    const r = new Set(St()), d = (L, T, R, j) => '<option value="' + L + '"' + (L === R ? " selected" : "") + ">" + T + "</option>", p = Object.keys(M).filter((L) => L.startsWith("light.")).sort((L, T) => !oe.get(L) - !oe.get(T) || (oe.get(L) || "").localeCompare(oe.get(T) || "") || Ct(L).localeCompare(Ct(T))).map((L) => {
      const T = ee.lightStyles[L] || "", R = ee.lightPads[L] || "", j = r.has(L), _ = X(Ct(L));
      return "<tr><td><strong>" + _ + "</strong></td><td>" + X(oe.get(L) || "—") + "</td><td>" + X(Re(L)) + '</td><td class="metaSwitchCol"><button class="switch' + (j ? " on" : "") + '" type="button" role="switch" aria-checked="' + j + '" data-light-fav="' + X(L) + '" aria-label="' + _ + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + X(L) + '" aria-label="' + _ + ' tile">' + d("", "Default", T) + d("tile", "HomeCore tile", T) + d("dac", "Dual Axis Controller", T) + '</select></td><td><select class="settingsSelect" data-light-pad="' + X(L) + '" aria-label="' + _ + ' pad"' + (Zo(L) ? "" : " disabled") + ">" + d("", "Default", R) + d("temperature", "Temperature", R) + d("colour", "Colour", R) + "</select></td></tr>";
    }).join(""), h = (L, T, R, j, _) => '<div class="themeChoice" role="group" aria-label="' + R + '">' + j.map(([F, D]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (F === _) + '" data-light-pick="' + L + "|" + X(T) + '" data-v="' + F + '">' + D + "</button>").join("") + "</div>", m = Object.keys(M).filter((L) => L.startsWith("light.")).sort((L, T) => !oe.get(L) - !oe.get(T) || (oe.get(L) || "").localeCompare(oe.get(T) || "") || Ct(L).localeCompare(Ct(T))).map((L) => {
      const T = r.has(L), R = X(Ct(L)), j = [oe.get(L), Re(L)].filter(Boolean).map(X).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + R + '</strong><div class="status">' + j + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" data-light-fav="' + X(L) + '" aria-label="' + R + ' is a favourite"></button>') + at("Tile", "", h("lightStyles", L, R + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], ee.lightStyles[L] || "")) + (Zo(L) ? at("Pad", "", h("lightPads", L, R + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], ee.lightPads[L] || "")) : "") + "</div>";
    }).join("");
    l.dataset.html !== p && (l.innerHTML = p, l.dataset.html = p), t.dataset.html !== m && (t.innerHTML = m, t.dataset.html = m), o != null && o.dataset.lightFav && ((C = (t.contains(o) ? t : l).querySelector('[data-light-fav="' + CSS.escape(o.dataset.lightFav) + '"]')) == null || C.focus({ preventScroll: !0 })), q();
  }
  function q() {
    var n, l, t;
    const e = u("housePane");
    if (e)
      for (const a of e.querySelectorAll(".themeChoice")) {
        const o = [...a.querySelectorAll("button")];
        let r = (n = a.nextElementSibling) != null && n.classList.contains("tfChoiceList") ? a.nextElementSibling : null;
        if (!r) {
          r = document.createElement("select"), r.className = "settingsSelect tfChoiceList", r.setAttribute("aria-label", a.getAttribute("aria-label") || ((t = (l = a.closest(".toggleRow")) == null ? void 0 : l.querySelector("strong")) == null ? void 0 : t.textContent) || ""), r.addEventListener("change", () => {
            var x;
            return (x = o[Number(r.value)]) == null ? void 0 : x.click();
          }), a.after(r);
          const m = () => {
            r.innerHTML = o.map((C, L) => '<option value="' + L + '"' + (C.disabled ? " disabled" : "") + ">" + X(C.textContent) + "</option>").join("");
            const x = o.findIndex((C) => C.getAttribute("aria-pressed") === "true" || C.classList.contains("active"));
            x >= 0 && (r.value = String(x));
          };
          new MutationObserver(m).observe(a, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), m();
        }
        const d = (m) => {
          a.hidden !== !m && (a.hidden = !m), r.hidden !== m && (r.hidden = m);
        };
        if (o.length > 3) {
          d(!1);
          continue;
        }
        if (!a.getClientRects().length && !r.getClientRects().length) {
          r.dataset.fit || d(!0);
          continue;
        }
        const p = a.hidden;
        a.hidden = !1;
        const h = o.every((m) => m.scrollWidth <= m.clientWidth + 1);
        a.hidden = p, d(h), r.dataset.fit = "1";
      }
  }
  const ot = document.createElement("div");
  ot.className = "densityBadge", ot.setAttribute("aria-live", "polite"), ot.hidden = !0, g.appendChild(ot);
  let it = 0;
  function lt() {
    if (!E) return;
    const e = u("homeView"), n = (o) => o.offsetParent !== null && !o.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((o) => {
      n(o) && (o.dataset.h = Math.round(o.getBoundingClientRect().height) + " px");
    });
    const l = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), t = window.innerHeight, a = l.filter((o) => {
      const r = o.getBoundingClientRect();
      return r.height > 0 && r.top >= 0 && r.bottom <= t + 0.5;
    }).length;
    ot.hidden = !e.classList.contains("active"), ot.innerHTML = "<b>" + a + "</b><small>of " + l.length + " readings on screen</small>";
  }
  const tt = () => {
    E && requestAnimationFrame(lt);
  };
  function K() {
    var e;
    g.classList.toggle("showDensity", E), (e = u("densityToggle")) == null || e.classList.toggle("on", E), ot.hidden = !E, clearInterval(it), E && (it = setInterval(lt, 1e3), lt());
  }
  window.addEventListener("scroll", tt, { capture: !0, passive: !0 }), window.addEventListener("resize", tt, { passive: !0 });
  const B = i.querySelector("#homeView .grid"), $ = document.createElement("style");
  i.appendChild($);
  const gt = new ResizeObserver(() => Q()), et = /* @__PURE__ */ new Set(), Lt = (e) => {
    const n = e.getBoundingClientRect().height;
    return Math.abs(n - e.offsetHeight) < 1 ? n : e.offsetHeight;
  };
  function Q() {
    const e = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (B.classList.toggle("tfStack", e), et.forEach((p) => {
      (!e || !p.isConnected) && (gt.unobserve(p), et.delete(p));
    }), !e) {
      $.textContent = "";
      return;
    }
    const n = getComputedStyle(B), l = parseFloat(n.columnGap) || 0, t = n.gridTemplateColumns.split(" ").length, a = [...B.children].filter((p) => p.dataset.k && p.offsetParent);
    $.disabled = !0;
    const o = a.map((p) => {
      const h = getComputedStyle(p), m = /span (\d+)/.exec(h.gridColumnStart + " " + h.gridColumnEnd);
      return Math.min(t, m ? +m[1] : h.gridColumnEnd === "-1" ? t : 1);
    });
    $.disabled = !1;
    let r = 0;
    const d = a.map((p, h) => {
      et.has(p) || (et.add(p), gt.observe(p));
      const m = o[h];
      r + m > t && (r = 0);
      const x = r + 1;
      return r = (r + m) % t, '#homeView .grid.tfStack>[data-k="' + CSS.escape(p.dataset.k) + '"]{grid-column:' + x + " / span " + m + ";grid-row-end:span " + Math.max(1, Math.ceil(Lt(p) + l)) + "}";
    }).join(`
`);
    $.textContent !== d && ($.textContent = d);
  }
  new MutationObserver(Q).observe(B, { childList: !0 }), new MutationObserver(Q).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let Mt = null, A = null, N = null, k = null;
  const z = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), ct = 6;
  let ut = null;
  const mt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map();
  let Ht = { favourites: null }, Je = {}, Ho = {}, xn = [], Vt = null;
  const ae = (() => {
    try {
      return JSON.parse(Po.get(fp)) || {};
    } catch {
      return {};
    }
  })();
  let oe = /* @__PURE__ */ new Map(), an = 0;
  function Ge() {
    clearTimeout(an), an = setTimeout(() => Promise.resolve(P({ type: "frontend/set_user_data", key: up, value: Ht })).catch(() => {
    }), 400);
  }
  const ee = (() => {
    let e = {};
    try {
      e = JSON.parse(Po.get(hp)) || {};
    } catch {
    }
    const n = (l, t) => Object.fromEntries(Object.entries(l || {}).filter(([, a]) => t.includes(a)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(e.hoursWindow) ? e.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(e.wxStyle) ? e.wxStyle : "bitmap",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(e.lightStyles, ["tile", "dac"]),
      lightPads: n(e.lightPads, ["temperature", "colour"])
    };
  })(), Qt = () => Po.set(hp, JSON.stringify(ee)), te = () => {
    g.dataset.more = ee.more, g.dataset.names = ee.names, hi();
  };
  y && H && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ee.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (ee.more = n.dataset.moreStyle, Qt(), te(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === n))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + tm.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ee.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (ee.names = n.dataset.namesStyle, ee.namesPicked = !0, Qt(), te(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === n))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + em.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ee.hoursWindow === e) + '" data-hours-window="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-hours-window]");
    n && (ee.hoursWindow = n.dataset.hoursWindow, Qt(), zt == null || zt.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((l) => l.setAttribute("aria-pressed", String(l === n))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + am.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ee.wxStyle === e) + '" data-wx-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-wx-style]");
    n && (ee.wxStyle = n.dataset.wxStyle, Qt(), zt == null || zt.setStyle(ee.wxStyle), je == null || je.forEach((l) => l.setStyle(ee.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((l) => l.setAttribute("aria-pressed", String(l === n))));
  })), J();
  let At = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ya = /* @__PURE__ */ new Map();
  let Vr = "";
  const fr = y ? Fu({ onChange: () => oa() }) : null;
  y && g.classList.add("house");
  const Ue = Object.assign(document.createElement("div"), { className: "tfBento" });
  let zt = null, Ha = null, po = !1;
  function Ai(e) {
    const n = ie();
    if (g.classList.toggle("houseBento", !!n), zt && (Ha !== n || e == null) && (zt.destroy(), zt = null), !n || e == null) {
      Ue.remove();
      return;
    }
    Ue.isConnected || B.append(Ue), Ue.style.order = e, !zt && !po && (zt = Jc(Ue, { getHass: s, entityId: n, style: ee.wxStyle, hoursWindow: () => ee.hoursWindow }), Ha = n);
  }
  const Ei = [
    ["wx", ["current"]],
    ["avg", ["compared_to_average"]],
    ["aq", ["aq_tile"]],
    ["pollen", ["pollen_tile"]],
    ["radar", ["radar_tile"]],
    ["hourly", ["hourly"]],
    ["sun", ["sun"]],
    ["moon", ["moon"]],
    ["uv", ["uv_index"]],
    ["humidity", ["humidity"]],
    ["pressure", ["pressure"]],
    ["wind", ["wind"]],
    ["visibility", ["visibility"]]
  ], Le = Ei.map(([e]) => e), Fa = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Zt = { hourly: 2 }, En = Object.fromEntries(Ei.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let je = null, Fo = null;
  function It(e) {
    const n = ie();
    je && Fo !== n && (je.forEach((l) => l.destroy()), je = null), Object.values(En).forEach((l) => n ? !l.isConnected && B.append(l) : l.remove()), n && !je && !po && (je = /* @__PURE__ */ new Map(), Fo = n), Gt();
  }
  function Gt() {
    if (!je || po) return;
    const e = new Set(_e().hidden);
    Ei.forEach(([n, l]) => {
      je.has(n) || e.has(n) && !(se != null && se.fromTray && se.key === n) || je.set(n, Jc(En[n], { getHass: s, entityId: Fo, style: ee.wxStyle, cards: l, onOpen: n === "wx" ? () => ll("weather") : void 0 }));
    });
  }
  const Wt = (e) => {
    var n;
    return ((n = M[e]) == null ? void 0 : n.attributes) || {};
  }, Ct = (e) => Wt(e).friendly_name || e, xe = (e, n) => Ro(e) || (Number(Wt(e).supported_features) & n) === n, Ut = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Qe = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), Se = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Gn = (e) => Wt(e).supported_color_modes || [], Gr = (e, n) => [5, 3, 1].map((l) => {
    const t = (l + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(t, 4 - t, 1)));
  }), uo = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), ta = (e) => 0.2126 * uo(e[0]) + 0.7152 * uo(e[1]) + 0.0722 * uo(e[2]), Un = (e, n) => {
    const l = ta(e), t = ta(n);
    return (Math.max(l, t) + 0.05) / (Math.min(l, t) + 0.05);
  }, _i = 0.55, fo = ["hs", "xy", "rgb", "rgbw", "rgbww"], ho = (e) => {
    const n = Wt(e), l = fo.includes(n.color_mode);
    return (l && n.rgb_color ? n.rgb_color : l && n.hs_color ? Gr(...n.hs_color) : [255, 170, 0]).map((t) => Math.round(Math.max(0, Math.min(255, t))));
  }, Hs = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function yn(e) {
    var t;
    const n = e.split(".")[0], l = (t = M[e]) == null ? void 0 : t.state;
    return !l || l === "unavailable" || l === "unknown" ? null : n === "light" ? l === "on" ? ho(e) : null : n === "climate" ? Hs[l] || null : n === "cover" ? l !== "closed" ? [146, 107, 199] : null : n === "lock" ? l !== "locked" ? [244, 67, 54] : null : n === "media_player" ? ["playing", "paused", "on", "buffering"].includes(l) ? [3, 169, 244] : null : n === "humidifier" || n === "valve" ? ["on", "open", "opening", "closing"].includes(l) ? [33, 150, 243] : null : n === "vacuum" ? ["cleaning", "returning"].includes(l) ? [0, 150, 136] : null : n === "alarm_control_panel" ? l !== "disarmed" && l !== "triggered" ? [76, 175, 80] : null : n === "fan" ? l === "on" ? [0, 188, 212] : null : (n === "switch" || n === "input_boolean") && l === "on" ? [255, 193, 7] : null;
  }
  function mo(e, n, l = !1) {
    const [t, a, o] = e.map((T) => T / 255), r = Math.max(t, a, o), d = Math.min(t, a, o), p = r - d, h = p ? (r === t ? (a - o) / p + (a < o ? 6 : 0) : r === a ? (o - t) / p + 2 : (t - a) / p + 4) * 60 : 0, m = (r + d) / 2, x = p ? p / (1 - Math.abs(2 * m - 1)) : 0, C = p < 0.1 ? Math.min(x, 0.25) : 1, L = (T) => {
      const R = (_) => (_ + h / 30) % 12, j = C * Math.min(T, 1 - T);
      return [0, 8, 4].map((_) => Math.round(255 * (T - j * Math.max(-1, Math.min(R(_) - 3, 9 - R(_), 1)))));
    };
    for (let T = 0.5; l ? T < 0.96 : T > 0.04; T += l ? 0.01 : -0.01) {
      const R = L(T);
      if (Un(R, n) >= 3) return "rgb(" + R.join(",") + ")";
    }
    return l ? "#ffffff" : "#26221e";
  }
  const Di = (e) => {
    const n = [1, 3, 5].map((l) => parseInt(e.slice(l, l + 2), 16));
    return Math.max(...n) - Math.min(...n) < 26 ? "" : ";--sum-d:" + mo(n, [58, 58, 58], !0) + ";--sum-l:" + mo(n, [230, 230, 230]);
  }, hr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, mr = () => [0, 1, 2].map((e) => "--g" + e + "-d:" + hr.d[e] + ";--g" + e + "-l:" + hr.l[e]).join(";"), Fs = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((e, n) => '<stop offset="' + e + '" style="stop-color:var(--g' + n + ')"/>').join("") + "</linearGradient></defs></svg>", re = (e) => {
    const n = e.map((l) => Math.round(l + (255 - l) * _i));
    return "--light-soft:rgb(" + n.join(",") + ");--light-ink:" + mo(e, n);
  }, Oo = (e) => re(ho(e)), nn = (e) => {
    const n = yn(e);
    return n ? ' data-light style="' + re(n) + '"' : "";
  }, kn = (e) => {
    const n = Gn(e);
    return n.length ? n.some((l) => l !== "onoff") : Wt(e).brightness != null;
  }, Oa = (e) => [Wt(e).min_color_temp_kelvin || 2e3, Wt(e).max_color_temp_kelvin || 6500], Ce = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function ga(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const l = Math.round(n / 60);
    if (l < 60) return l + (l === 1 ? " minute ago" : " minutes ago");
    const t = Math.round(l / 60);
    if (t < 24) return t + (t === 1 ? " hour ago" : " hours ago");
    const a = Math.round(t / 24);
    return a + (a === 1 ? " day ago" : " days ago");
  }
  const on = (e) => {
    var n;
    return Wt(e).current_position ?? (((n = M[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, qo = (e) => {
    var n;
    return Ta("pos", e, ((n = mt.get(e)) == null ? void 0 : n.pos) ?? on(e));
  }, Bi = (e) => {
    var n;
    return Ta("tilt", e, ((n = mt.get(e)) == null ? void 0 : n.tilt) ?? Wt(e).current_tilt_position);
  };
  function Re(e) {
    var r;
    const n = M[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const l = n.attributes, t = e.split(".")[0];
    if (t === "light") {
      if (n.state !== "on") return "Off";
      const d = l.color_temp_kelvin;
      return (kn(e) ? Se(n) + "%" : "On") + (l.color_mode === "color_temp" && d ? " · " + Number(d).toLocaleString() + "k" : fo.includes(l.color_mode) ? " · Colour" : "");
    }
    if (t === "climate") return (n.state === "off" ? "Off" : Ut(l.hvac_action || n.state)) + " · " + Qe(l.current_temperature) + " °C now";
    if (t === "cover") {
      const d = on(e), p = l.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? Ut(n.state) + " - " + d + "%" : (d <= 0 ? "Closed" : d >= 100 ? "Open" : "Partially open") + (p > 0 && p < 100 ? " · tilted" : "");
    }
    if (t === "humidifier") return n.state !== "on" ? "Off" : Ut(l.action || "on") + " · " + l.current_humidity + "% now";
    if (t === "vacuum") return Ut(n.state) + (n.state === "cleaning" && ((r = l.rooms) != null && r.length) ? " · " + l.rooms.join(", ") : "") + (l.battery_level != null ? " · " + l.battery_level + "%" : "");
    if (t === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (l.media_title || "Playing") : Ut(n.state);
    if (t === "alarm_control_panel") return wp[n.state] || Ut(n.state);
    if (t === "lock" || t === "valve") return Ut(n.state);
    if (t === "switch") return n.state === "on" ? "On" : "Off";
    if (t === "plant") return n.state === "ok" ? "Healthy" : Ut(l.problem);
    if (t === "binary_sensor")
      return l.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : l.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : l.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : ud.includes(l.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (l.rang) return "Rang at " + Ce(l.rang);
    const a = s();
    if (a != null && a.formatEntityState && !Ro(e))
      try {
        return a.formatEntityState(n);
      } catch {
      }
    const o = Number(n.state);
    if (n.state !== "" && Number.isFinite(o)) {
      const d = Math.abs(o) >= 100 ? 0 : Math.abs(o) >= 10 ? 1 : 2, p = l.unit_of_measurement ? l.unit_of_measurement === "%" ? "%" : " " + l.unit_of_measurement : "";
      return o.toLocaleString(void 0, { maximumFractionDigits: d }) + p + (l.plant_low ? " · Low" : l.plant_high ? " · High" : "");
    }
    return Ut(n.state);
  }
  const pa = (e) => e >= 1e3 ? Qe(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function rn(e) {
    var l, t;
    const n = s();
    e.querySelectorAll("[data-icon-for]").forEach((a) => {
      var d;
      const o = M[a.dataset.iconFor], r = a.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && o && !r) {
        let p = a.firstElementChild;
        (!p || p.localName !== "ha-state-icon") && (a.textContent = "", p = document.createElement("ha-state-icon"), a.appendChild(p)), p.hass = n, p.stateObj = o;
      } else if (customElements.get("ha-icon")) {
        let p = a.firstElementChild;
        (!p || p.localName !== "ha-icon") && (a.textContent = "", p = document.createElement("ha-icon"), a.appendChild(p)), p.icon = r || ((d = o == null ? void 0 : o.attributes) == null ? void 0 : d.icon) || "mdi:circle-medium";
      } else a.textContent || (a.textContent = (a.dataset.letter || Ct(a.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (l = e.querySelectorAll) == null || l.call(e, ".tfIcon").forEach(Ri), (t = e.classList) != null && t.contains("tfIcon") && Ri(e), go();
  }
  const gr = /* @__PURE__ */ new Map();
  function Ri(e) {
    var o, r, d;
    const n = (((o = e.closest("[data-k]")) == null ? void 0 : o.dataset.k) || "") + "|" + (e.dataset.iconFor || ((r = e.querySelector("[data-icon-for]")) == null ? void 0 : r.dataset.iconFor) || e.getAttribute("aria-label") || ""), l = getComputedStyle(e), t = { backgroundColor: l.backgroundColor, color: l.color }, a = gr.get(n);
    gr.set(n, t), !(!a || a.backgroundColor === t.backgroundColor && a.color === t.color || (d = window.matchMedia) != null && d.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([a, t], { duration: Ve.warp.cdur, delay: Ve.warp.cdelay, easing: Ie[Ve.warp.ease], fill: "backwards" });
  }
  const Pi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Wo = (e) => {
    const n = [e];
    for (; n.length; ) {
      const l = n.shift();
      if (l.localName === "svg") return l;
      l.shadowRoot && n.push(...l.shadowRoot.children), n.push(...l.children);
    }
    return null;
  };
  function Ur(e) {
    var L, T, R;
    const n = e.localName === "svg" ? e : Wo(e), l = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!l.length) return !n;
    const t = (L = e.closest(".tfIcon")) == null ? void 0 : L.offsetWidth;
    if (t === void 0) return !0;
    if (!t) return !1;
    const a = t + "|" + l.map((j) => j.getAttribute("d") || j.localName).join("|");
    if (e.dataset.fitted === a) return !0;
    let o = 1 / 0, r = 1 / 0, d = -1 / 0, p = -1 / 0;
    for (const j of l) {
      const _ = j.getBBox(), F = getComputedStyle(j), D = F.stroke !== "none" ? (parseFloat(F.strokeWidth) || 0) / 2 : 0;
      !_.width && !_.height || (o = Math.min(o, _.x - D), r = Math.min(r, _.y - D), d = Math.max(d, _.x + _.width + D), p = Math.max(p, _.y + _.height + D));
    }
    if (!(d > o)) return !1;
    const h = (R = (T = n.viewBox) == null ? void 0 : T.baseVal) != null && R.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, m = t > 40 ? t * (26 / 40) : t - 14, x = m * h.width / Math.max(d - o, p - r), C = x / h.width;
    return e.localName === "svg" ? (e.style.width = x + "px", e.style.height = x + "px") : e.style.setProperty("--mdc-icon-size", x + "px"), n.style.translate = ((h.x + h.width / 2 - (o + d) / 2) * C).toFixed(2) + "px " + ((h.y + h.height / 2 - (r + p) / 2) * C).toFixed(2) + "px", e.dataset.fitted = a, !0;
  }
  let jo = 0;
  function zo(e = 0) {
    clearTimeout(jo), [...i.querySelectorAll(Pi)].filter((l) => !Ur(l)).length && e < 5 && (jo = setTimeout(() => zo(e + 1), 300));
  }
  function go() {
    clearTimeout(jo), jo = setTimeout(() => zo(), 60);
  }
  const Ni = (e) => {
    var n, l, t;
    return e.startsWith("light.") && M[e] && !Wt(e).icon && !((t = (l = (n = s()) == null ? void 0 : n.entities) == null ? void 0 : l[e]) != null && t.icon) ? "mdi:lightbulb" : "";
  }, Ae = (e, n, l) => (n = n || Ni(e), ' data-icon-for="' + X(e) + '"' + (n ? ' data-icon-name="' + X(n) + '"' : "") + (l ? ' data-letter="' + X(l) + '"' : "")), _n = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : Wt(e).rang ? "mdi:doorbell" : "", ce = (e, n, l, t) => X([e, n, l, t ? JSON.stringify(t) : ""].join("|")), sn = (e) => X(JSON.stringify(e));
  function Vo(e, n) {
    var a, o;
    const l = X(Ct(n) + ", " + Re(n));
    return '<div class="activityRow' + (Number.isFinite(Number((a = M[n]) == null ? void 0 : a.state)) && ((o = M[n]) == null ? void 0 : o.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + X(e + "|" + n) + '" aria-label="' + l + '. Show the last 24 hours"' : '" aria-label="' + l + '"') + '><div class="tfIcon" aria-hidden="true"' + Ae(n, _n(n)) + '></div><div><div class="activityRowName">' + X(Ct(n)) + '</div><div class="activityRowMeta">' + X(Re(n)) + "</div></div></div>";
  }
  const Go = (e, n, l) => '<div class="activityRow" aria-label="' + X(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Ae("", l, e) + '></div><div><div class="activityRowName">' + X(e) + '</div><div class="activityRowMeta">' + X(n) + "</div></div></div>";
  function Ii(e) {
    var l;
    const n = ((l = M[e]) == null ? void 0 : l.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ce("switch", "toggle", e) + '" aria-label="Turn ' + X(Ct(e)) + (n ? " off" : " on") + '"' + Ae(e) + '></button><button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(Ct(e) + ", " + Re(e) + ". More info") + '"><span class="activityRowName">' + X(Ct(e)) + '</span><span class="activityRowMeta">' + X(Re(e)) + "</span></button></div>";
  }
  const ka = (e) => {
    var n;
    return ((n = pt.get(e)) == null ? void 0 : n.name) ?? Ct(e);
  }, Yn = (e) => {
    var n;
    return ((n = pt.get(e)) == null ? void 0 : n.text) ?? Re(e);
  };
  function vr(e) {
    var l;
    const n = (l = pt.get(e)) == null ? void 0 : l.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Ae("", n, ka(e)) : Ae(e, _n(e))) + '></div><div><div class="activityRowName">' + X(ka(e)) + '</div><div class="activityRowMeta">' + X(Yn(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + X(ka(e)) + '’s last 24 hours">' + ec + '</button></div><svg class="tfGraph" data-graph="' + X(e) + '" role="img" aria-label="' + X(ka(e)) + ', last 24 hours"></svg></div>';
  }
  function qa(e, n, l, t, a = "", o = null, r = "") {
    const d = Mt && Mt.key === e;
    return '<section class="card tfCard' + (r ? " " + r : "") + (d ? " open" : "") + '" data-tf data-k="' + X(e) + '" style="order:' + n + (d && Mt.h ? ";min-height:" + Mt.h + "px" : "") + '" aria-label="' + X(l) + '"><div class="activityHeader">' + (o ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + X(o) + '" aria-label="' + X(l + (M[o] ? ", " + Re(o) : "") + ". More info") + '">' + X(l) + "</button>" : '<div class="activityTitle">' + X(l) + "</div>") + "</div>" + (d ? vr(Mt.id) : '<div class="activityRows">' + t.join("") + "</div>" + a) + "</section>";
  }
  function Dn(e, n) {
    const l = "readings:" + e.id, t = e.readings.map((a) => Vo(l, a));
    return e.power != null && t.push(Go("Power now", pa(e.power), "mdi:flash")), qa(l, n, "Readings", t.concat(e.plugs.map(Ii)));
  }
  function ke(e, n) {
    var d;
    const l = "energy:" + e.id, [t, a] = [e.solar.find((p) => p.endsWith("_power")), e.solar.find((p) => p.endsWith("_today"))], o = [t, a].filter(Boolean).map((p) => Vo(l, p)), r = Number(((d = M[t]) == null ? void 0 : d.state) || 0) * 1e3;
    return At.grid && (o.push(Vo(l, At.grid)), o.push(Go("House use", pa(r + Number(M[At.grid].state)), "mdi:home-lightning-bolt"))), qa(l, n, "Energy", o, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ln = (e, n) => qa("plant:" + e.id, n, Ct(e.id), e.readings.map((l) => Vo("plant:" + e.id, l)), "", e.id);
  function Ye(e, n, l, t, a, o, r = null) {
    const d = l == null ? null : Math.max(0, Math.min(1, l)), p = d == null ? 0 : Math.round(d * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + X(t) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"' + (a ? ' aria-valuetext="' + X(a) + '"' : "") + ' data-drag="' + X(e + "|" + n) + '">' + (r != null ? '<span class="was" aria-hidden="true" style="left:' + r + '%"></span>' : "") + (o ? d == null ? "" : '<b style="left:' + p + '%"></b>' : '<i style="width:' + p + '%"></i>') + "</div>";
  }
  const Uo = "move-assistant-house-last-bright", Zn = (() => {
    try {
      return JSON.parse(Po.get(Uo)) || {};
    } catch {
      return {};
    }
  })();
  let br = 0;
  const Ze = (e, n) => {
    !n || Zn[e] === n || (Zn[e] = n, clearTimeout(br), br = setTimeout(() => Po.set(Uo, JSON.stringify(Zn)), 500));
  }, Kn = (e, n, l, t) => '<div class="tfStep" role="group" aria-label="' + X(e) + '"><button type="button" data-act="' + l + '" aria-label="Lower ' + X(e.toLowerCase()) + '">' + ip.down + "</button><output>" + X(n) + '</output><button type="button" data-act="' + t + '" aria-label="Raise ' + X(e.toLowerCase()) + '">' + ip.up + "</button></div>", Mn = (e, n, l) => '<div class="' + e + '" role="group" aria-label="' + X(n) + '">' + l.filter(Boolean).map((t) => '<button type="button" data-act="' + t.act + '"' + (t.pressed != null ? ' aria-pressed="' + t.pressed + '"' : "") + (t.disabled ? " disabled" : "") + (t.aria ? ' aria-label="' + X(t.aria) + '"' : "") + ">" + (t.html || X(t.label)) + "</button>").join("") + "</div>", vo = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), $n = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", Hi = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + X(Ct(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + X(e) + '">' + [0, 1, 2, 3].map((l) => '<span><i style="' + vo(n, l) + '"></i><b' + (n >= (l + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (l + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + $n(n) + '">' + Math.round(n) + "%</output></div>";
  function Os(e, n) {
    e.querySelectorAll(":scope>span").forEach((t, a) => {
      t.firstElementChild.setAttribute("style", vo(n, a)), t.lastElementChild.classList.toggle("lit", n >= (a + 1) * 25 - 12);
    });
    const l = e.querySelector(".tfTip");
    l.setAttribute("style", $n(n)), l.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const Fi = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + X(Ct(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + X(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", wr = (e, n, l) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + X(Ct(e)) + '">' + [
    xe(e, Uh) && ["open", "Open", "open_cover", n >= 100 && !l],
    xe(e, Zh) && ["stop", "Stop", "stop_cover", !1],
    xe(e, Yh) && ["close", "Close", "close_cover", n <= 0 && !l]
  ].filter(Boolean).map(([t, a, o, r]) => '<button type="button" data-act="' + ce("cover", o, e) + '" aria-label="' + a + '"' + (r ? " disabled" : "") + ">" + Kh[t] + "</button>").join("") + "</div>", Bn = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + X(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + X(n.art) + '&quot;)"' : Ae(e, n.icon)) + "></button>", Yr = (e) => '<button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(Ct(e) + ", " + Re(e) + ". More info") + '"><span class="activityRowName">' + X(Ct(e)) + '</span><span class="activityRowMeta">' + X(Re(e)) + "</span></button>";
  function Yo(e, n = !1, l = null) {
    const t = Jn(e), a = e.startsWith("light.") && Ea(e) && !(l && Fn(e) < 3), o = l || (n && e.startsWith("light.") ? ["bright"] : null), r = a ? ['<div class="tfDacPad" data-dac="' + (n ? "more:" : l ? "dash:" : "tile:") + X(e) + '"></div>'] : t.sections.map((d, p) => d && (!o || o.includes((t.parts || [])[p])) ? d : "").filter(Boolean);
    return '<div class="tfAction' + (a ? " tfDac" : "") + (t.on ? " on" : "") + '" data-k="' + X(e) + '"' + (t.tone ? ' data-tone="' + t.tone + '"' : "") + nn(e) + '><div class="tfActionHead">' + Bn(e, t) + Yr(e) + "</div>" + r.join("") + "</div>";
  }
  const ze = "dual-controller-v3", xr = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Xn = null;
  async function bo() {
    if (Xn || customElements.get(ze)) return;
    Xn = "loading";
    const e = await Promise.resolve().then(() => P({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((t) => /dual-axis-controller/i.test(t.url || ""));
    if (await Promise.race([customElements.whenDefined(ze), new Promise((t) => setTimeout(t, n ? 8e3 : 0))]), customElements.get(ze)) return;
    const l = Object.assign(document.createElement("script"), { src: xr });
    l.onerror = () => {
      Xn = "failed", Y();
    }, document.head.appendChild(l);
  }
  const Ma = /* @__PURE__ */ new Map(), Zo = (e) => (ee.lightStyles[e] || ee.lights) === "dac", Ko = () => ee.lights === "dac" || Object.values(ee.lightStyles).includes("dac");
  function Ea(e) {
    return Zo(e) && !!customElements.get(ze);
  }
  const pe = (e) => ee.lightPads[e] || ee.dacPad, $o = () => {
    const e = s();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (n, l, t, ...a) => e.callService(n, ...Ls(n, l, t), ...a)
    };
  }, Zr = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", yr = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Zr })).dataset.tf = "");
  }, Sa = /* @__PURE__ */ new Map(), Ca = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const l = n.parentElement;
    !l || !n.offsetHeight || (l.style.removeProperty("min-height"), Sa.set(l.dataset.dac, l.offsetHeight));
  }));
  function ye(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const l = n.dataset.dac;
      let t = Ma.get(l);
      if (!t) {
        const a = l.slice(l.indexOf(":") + 1);
        t = document.createElement(ze), t.setConfig({ type: "custom:" + ze, entity: a, pad: pe(a), tap_action: { action: "none" } }), Ma.set(l, t);
      }
      t.hass = $o(), t.parentNode !== n && n.replaceChildren(t), !t.offsetHeight && Sa.has(l) && (n.style.minHeight = Sa.get(l) + "px"), Ca.observe(t), yr(t);
    });
  }
  function Rn() {
    const e = $o();
    Ma.forEach((n, l) => {
      n.isConnected ? n.hass = e : Ma.delete(l);
    });
  }
  customElements.whenDefined(ze).then(() => {
    y && (B != null && B.querySelector("[data-tf]")) && hs(so);
  });
  const Ta = (e, n, l) => st.has(e + "|" + n) ? st.get(e + "|" + n) : l;
  function Jn(e) {
    var o;
    const n = M[e], l = n.attributes, t = e.split(".")[0], a = (r, d) => ({ act: ce(r, "toggle", e), label: d });
    if (t === "light") {
      const r = n.state === "on", d = Gn(e), [p, h] = Oa(e), m = Ta("bright", e, Se(n));
      r && Ze(e, Se(n));
      const x = Ta("ct", e, r && l.color_mode === "color_temp" ? l.color_temp_kelvin : null), C = Ta("hue", e, r && fo.includes(l.color_mode) && l.hs_color ? l.hs_color[0] : null);
      return { on: r, button: a("light", "Turn " + Ct(e) + (r ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        kn(e) && Ye("bright", e, m / 100, Ct(e) + " brightness", m + "%", !1, r ? null : Zn[e] ?? null),
        d.includes("color_temp") && Ye("ct", e, x == null ? null : (x - p) / (h - p), Ct(e) + " warm to cool", x == null ? "" : Math.round(x) + " kelvin", !0),
        d.some((L) => fo.includes(L)) && Ye("hue", e, C == null ? null : C / 360, Ct(e) + " colour", "", !0)
      ] };
    }
    if (t === "climate") {
      const r = l.target_temp_step || 0.5, d = Number(l.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || l.hvac_action === "cooling" ? "cool" : "heat", button: a("climate", "Turn " + Ct(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(d) && Kn("Target temperature", Qe(d) + " °C", ce("climate", "set_temperature", e, { temperature: d - r }), ce("climate", "set_temperature", e, { temperature: d + r })),
        Mn("tfSeg", "Mode", (l.hvac_modes || []).map((p) => ({ label: Ut(p), act: ce("climate", "set_hvac_mode", e, { hvac_mode: p }), pressed: n.state === p })))
      ] };
    }
    if (t === "cover") {
      const r = n.state === "opening" || n.state === "closing", d = n.state === "closed", p = qo(e), h = Bi(e);
      return { on: !d, tone: "blue", icon: pp[tc(n)][d ? 1 : 0], button: a("cover", (d ? "Open " : "Close ") + Ct(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        xe(e, cp) && Hi(e, p),
        h != null && Fi(e, h),
        wr(e, p, r)
      ] };
    }
    if (t === "humidifier") {
      const r = Number(l.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: a("humidifier", "Turn " + Ct(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(r) && Kn("Target humidity", r + "%", ce("humidifier", "set_humidity", e, { humidity: r - 1 }), ce("humidifier", "set_humidity", e, { humidity: r + 1 })),
        ((o = l.available_modes) == null ? void 0 : o.length) && Mn("tfSeg", "Mode", l.available_modes.map((d) => ({ label: Ut(d), act: ce("humidifier", "set_mode", e, { mode: d }), pressed: l.mode === d })))
      ] };
    }
    if (t === "media_player") {
      const r = n.state === "playing", d = n.state === "off" || n.state === "standby", p = Ta("vol", e, l.volume_level), h = d ? { act: ce("media_player", xe(e, Vh) ? "turn_on" : "toggle", e), label: "Turn " + Ct(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: ce("media_player", "media_play_pause", e), label: (r ? "Pause " : "Play ") + Ct(e) } : { act: ce("media_player", xe(e, Gh) ? "turn_off" : "toggle", e), label: "Turn " + Ct(e) + " off" };
      return { on: !d, tone: "blue", art: !d && l.entity_picture ? l.entity_picture : null, button: h, parts: ["playback", "volume"], sections: d ? [] : [
        (xe(e, sp) || xe(e, lp) || xe(e, rp) || xe(e, dp)) && Mn("tfSeg", "Playback", [
          { html: pd.prev, aria: "Previous", act: ce("media_player", "media_previous_track", e), disabled: !xe(e, sp) },
          { html: r ? pd.pause : pd.play, aria: r ? "Pause" : "Play", act: ce("media_player", "media_play_pause", e), disabled: !(xe(e, rp) || xe(e, dp)) },
          { html: pd.next, aria: "Next", act: ce("media_player", "media_next_track", e), disabled: !xe(e, lp) }
        ]),
        xe(e, zh) && p != null && Ye("vol", e, p, Ct(e) + " volume", Math.round(p * 100) + "%")
      ] };
    }
    if (t === "vacuum") {
      const r = n.state === "cleaning", d = l.rooms || [], p = (m) => d.includes(m) ? d.filter((x) => x !== m) : d.concat(m), h = ce("vacuum", r ? "pause" : "start", e, Ro(e) ? { rooms: d } : null);
      return { on: r || n.state === "returning", tone: "blue", button: { act: h, label: (r ? "Pause " : "Start ") + Ct(e) }, parts: ["controls", "rooms"], sections: [
        Mn("tfSeg", Ct(e), [
          { label: r ? "Pause" : "Start", act: h },
          { label: "Dock", act: ce("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: ce("vacuum", "locate", e) }
        ]),
        Ro(e) && Mn("tfChips", "Rooms to clean", At.rooms.filter((m) => m.id !== "balcony").map((m) => ({ label: m.name, act: ce("vacuum", "set_rooms", e, { rooms: p(m.name) }), pressed: d.includes(m.name) })))
      ] };
    }
    if (t === "lock") {
      const r = n.state === "locked";
      return { on: !r, tone: "heat", button: { act: ce("lock", r ? "unlock" : "lock", e), label: (r ? "Unlock " : "Lock ") + Ct(e) }, parts: ["controls"], sections: [
        Mn("tfSeg", Ct(e), [
          { label: "Lock", act: ce("lock", "lock", e), pressed: r },
          { label: "Unlock", act: ce("lock", "unlock", e), pressed: n.state === "unlocked" },
          xe(e, sm) && { label: "Open", act: ce("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (t === "alarm_control_panel") {
      const r = n.state === "disarmed";
      return { on: !r, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: ce("alarm_control_panel", r ? "alarm_arm_away" : "alarm_disarm", e), label: r ? "Arm " + Ct(e) + ", away" : "Disarm " + Ct(e) }, parts: ["controls"], sections: [
        Mn("tfSeg", Ct(e), lm.filter(([, , , d]) => !d || xe(e, d)).map(([d, p, h]) => ({ label: p, act: ce("alarm_control_panel", h, e), pressed: n.state === d })))
      ] };
    }
    if (t === "valve") {
      const r = n.state === "open";
      return { on: r, tone: "blue", icon: "mdi:sprinkler-variant", button: a("valve", (r ? "Close " : "Open ") + Ct(e)), parts: ["controls"], sections: [
        Mn("tfSeg", Ct(e), [
          { label: "Open", act: ce("valve", "open_valve", e), pressed: r },
          { label: "Close", act: ce("valve", "close_valve", e), pressed: !r }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Ct(e) }, sections: [] };
  }
  const f = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Qe(e)) + "°";
  function v(e) {
    var j;
    const n = (_) => e.readings.find((F) => Wt(F).device_class === _), l = n("temperature"), t = n("humidity"), a = (_) => {
      var F;
      return Number((F = M[_]) == null ? void 0 : F.state);
    }, o = (_) => e.actions.filter((F) => _.test(F)), r = e.lights.filter((_) => {
      var F;
      return ((F = M[_]) == null ? void 0 : F.state) === "on";
    }), d = o(/^cover\./), p = d.filter((_) => {
      var F;
      return ((F = M[_]) == null ? void 0 : F.state) !== "closed";
    }), h = [...new Set(d.map((_) => tc(M[_])))], m = o(/^climate\./)[0], x = o(/^humidifier\./)[0], C = o(/^media_player\./), L = C.find((_) => {
      var F;
      return ((F = M[_]) == null ? void 0 : F.state) === "playing";
    }) || C.find((_) => {
      var F;
      return ((F = M[_]) == null ? void 0 : F.state) === "paused";
    }), T = e.plugs.filter((_) => {
      var F;
      return ((F = M[_]) == null ? void 0 : F.state) === "on";
    }), R = [];
    if (l && Number.isFinite(a(l)) && R.push({ key: "temp", id: l, kind: "reading", icon: No(l), label: "Temperature", value: Qe(a(l)) + "°" }), t && Number.isFinite(a(t)) && R.push({ key: "hum", id: t, kind: "reading", icon: No(t), label: "Humidity", value: Math.round(a(t)) + "%" }), e.lights.length && R.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: No("", "mdi:lightbulb"),
      label: "Lights",
      value: r.length ? r.length + " of " + e.lights.length + " on" : "All off",
      short: r.length ? r.length + " on" : "Off",
      on: r.length > 0,
      light: r.length ? Oo(r[0]) : "",
      acts: e.lights.map((_) => ["light", r.length ? "turn_off" : "turn_on", _]),
      aria: (r.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), d.length) {
      const _ = h.length === 1 ? $h[h[0]] : "covers", F = Math.round(d.reduce((D, ft) => D + on(ft), 0) / d.length);
      R.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: p.length ? re([146, 107, 199]) : "",
        icon: No("", ((j = pp[h[0]]) == null ? void 0 : j[p.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ut(_),
        value: F <= 0 ? "Closed" : F >= 100 ? "Open" : F + "% open",
        short: F <= 0 ? "Closed" : F + "%",
        on: p.length > 0,
        acts: d.map((D) => ["cover", p.length ? "close_cover" : "open_cover", D]),
        aria: (p.length ? "Close the " : "Open the ") + _ + " in " + e.name
      });
    }
    if (m) {
      const _ = Wt(m), F = M[m].state === "off";
      R.push({
        key: "climate",
        kind: "control",
        tone: _.hvac_action === "cooling" ? "cool" : "heat",
        light: yn(m) ? re(yn(m)) : "",
        icon: No(m),
        label: Ct(m),
        value: F ? "Off" : Ut(_.hvac_action || M[m].state) + " · " + f(_.temperature),
        short: F ? "Off" : f(_.temperature),
        on: !F,
        acts: [["climate", "toggle", m]],
        aria: "Turn " + Ct(m) + (F ? " on" : " off")
      });
    }
    if (x) {
      const _ = M[x].state === "on";
      R.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: _ ? re([33, 150, 243]) : "",
        icon: No("", "mdi:air-humidifier"),
        label: Ct(x),
        value: _ ? "On · " + Wt(x).humidity + "%" : "Off",
        short: _ ? Wt(x).humidity + "%" : "Off",
        on: _,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + Ct(x) + (_ ? " off" : " on")
      });
    }
    if (C.length) {
      const _ = L || C[0], F = M[_], D = F.state === "playing";
      R.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: yn(_) ? re(yn(_)) : "",
        icon: No(_),
        label: Ct(_),
        value: Re(_),
        short: D ? "Playing" : F.state === "paused" ? "Paused" : Ut(F.state),
        on: D,
        acts: [["media_player", F.state === "playing" || F.state === "paused" ? "media_play_pause" : "toggle", _]],
        aria: (D ? "Pause " : "Play ") + Ct(_)
      });
    }
    return e.plugs.length && R.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: T.length ? re([255, 193, 7]) : "",
      icon: No("", "mdi:power-plug"),
      label: "Plugs",
      value: T.length ? T.length + " of " + e.plugs.length + " on" : "All off",
      short: T.length ? T.length + " on" : "Off",
      on: T.length > 0,
      acts: e.plugs.map((_) => ["switch", T.length ? "turn_off" : "turn_on", _]),
      aria: (T.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((_) => R.push(Wt(_).device_class === "moisture" ? { key: "alert:" + _, kind: "alert", icon: No(_), label: "Water leak" } : { key: "note:" + _, kind: "note", icon: No(_), label: Ct(_) + " " + Re(_).toLowerCase() })), R;
  }
  const w = (e, n) => {
    const l = (t) => e.actions.filter((a) => t.test(a));
    return {
      lights: e.lights,
      covers: l(/^cover\./),
      climate: l(/^climate\./).slice(0, 1),
      humidifier: l(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const t = l(/^media_player\./);
        return [t.find((a) => {
          var o;
          return ((o = M[a]) == null ? void 0 : o.state) === "playing";
        }) || t.find((a) => {
          var o;
          return ((o = M[a]) == null ? void 0 : o.state) === "paused";
        }) || t[0]].filter(Boolean);
      })()
    }[n] || [];
  }, S = (e, n, l) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + sn(e.acts) + '" aria-label="' + X(e.aria) + '" aria-pressed="' + e.on + '">' + l + "</button>", I = (e) => '<button class="tfAName" type="button" data-go="' + X(e.id) + '" aria-label="Open ' + X(e.name) + '">' + X(e.name) + "</button>";
  function G(e, n, l = !1) {
    const t = n.find((d) => d.key === "lights"), a = !!(t != null && t.on), o = "", r = '<span class="tfAreaGlyph"' + Ae("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return l || !t ? '<span class="tfIcon tfAreaIcon' + (a ? " on" : "") + '"' + o + ' aria-hidden="true">' + r + "</span>" : '<button class="tfIcon tfAreaIcon' + (a ? " on" : "") + '" type="button"' + o + ' data-acts="' + sn(t.acts) + '" aria-label="' + X(t.aria) + '" aria-pressed="' + a + '">' + r + "</button>";
  }
  const U = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + X(n.label) + "</span>").join(" "), nt = (e) => e.readings.find((n) => Wt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => M[n]) || null, Z = (e, n) => {
    const l = Ct(n);
    return l.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Ut(l.slice(e.name.length + 1)) : l;
  };
  function rt(e) {
    const n = M[e], l = Wt(e), t = e.split(".")[0], a = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (t === "sensor" && Number.isFinite(a)) {
      if (l.device_class === "temperature") return { text: f(a) };
      const o = l.unit_of_measurement || "";
      return o === "%" ? { text: Math.round(a) + "%" } : { text: Qe(a, Number.isInteger(a) ? 0 : 1), unit: o };
    }
    if (t === "climate" && (l.current_temperature ?? l.temperature) != null) return { text: f(l.current_temperature ?? l.temperature) };
    if (t === "light") return { text: n.state !== "on" ? "Off" : kn(e) ? Se(n) + "%" : "On" };
    if (t === "cover") {
      const o = on(e);
      return { text: o <= 0 ? "Closed" : o >= 100 ? "Open" : o + "%" };
    }
    return t === "humidifier" ? { text: n.state === "on" ? l.humidity + "%" : "Off" } : t === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : Ut(n.state) } : { text: Re(e) };
  }
  const dt = (e, n, l) => {
    const t = l.find((d) => d.key === "temp"), a = l.find((d) => d.key === "hum"), o = Wt(n), r = M[n].state === "off";
    return n.startsWith("climate.") ? [Z(e, n), r ? "Off" : Ut(o.hvac_action || M[n].state) + (o.temperature != null ? " · " + f(o.temperature) : ""), a && a.value + " humidity"].filter(Boolean).join(" · ") : [!(t && t.id === n) && Z(e, n), t && t.id !== n && t.value, a && a.id !== n && a.value + " humidity"].filter(Boolean).join(" · ");
  };
  function vt(e, n, l) {
    const t = l && rt(l), a = l ? dt(e, l, n) : "", o = (p) => {
      const h = w(e, p.key);
      return h.length === 1 ? h[0] : "group:" + e.id + ":" + p.key;
    }, r = n.filter((p) => p.kind === "control").slice(0, 4).map((p) => '<div class="tfATile' + (p.on ? " on" : "") + '" data-tone="' + p.tone + '"' + (p.light ? ' data-light style="' + p.light + '"' : "") + ">" + S(p, "tfIcon", p.icon) + '<button class="tfName" type="button" data-more="' + X(o(p)) + '" aria-label="' + X(e.name + " " + p.label.toLowerCase() + ", " + p.value + ". Open") + '"><span class="activityRowName">' + X(p.label) + '</span><span class="activityRowMeta">' + X(p.value) + "</span></button></div>"), d = U(n);
    return '<div class="workoutPanelTop">' + G(e, n) + '<div class="tfATitle">' + I(e) + "</div>" + (d ? '<div class="tfATags">' + d + "</div>" : "") + "</div>" + (l ? '<button class="tfABig" type="button" data-more="' + X(l) + '" aria-label="' + X(Ct(l) + ", " + Re(l) + ". More info") + '"><span class="tfABigMain' + (t.text.length > 7 ? " long" : "") + '">' + X(t.text) + (t.unit ? '<span class="tfABigUnit">' + X(t.unit) + "</span>" : "") + "</span>" + (a ? '<span class="tfABigSub">' + X(a) + "</span>" : "") + "</button>" : "") + (r.length ? '<div class="tfATiles">' + r.join("") + "</div>" : "");
  }
  function Ot(e) {
    const n = e.id === A, l = v(e), t = nt(e), a = t && rt(t), o = [...l.filter((r) => r.kind === "control"), ...l.filter((r) => r.kind !== "control" && r.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + X(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + X(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + vt(e, l, t) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + G(e, l, !0) + '<span class="tfACName">' + X(e.name) + '</span></div><span class="tfACMain">' + (a ? X(a.text + (a.unit ? " " + a.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + o.map((r) => '<span class="tfACTile"><span class="tfIcon' + (r.kind === "alert" ? " alert" : "") + '"' + (r.on && r.light ? ' data-light style="' + r.light + '"' : "") + ">" + r.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let _t = [];
  const xt = () => {
    var n;
    const e = new Set(((n = Ht.dash) == null ? void 0 : n.areasOff) || []);
    return _t.filter((l) => !e.has(l.id));
  }, qt = (e) => {
    var l;
    const n = xt();
    return n.some((t) => t.id === A) || (A = ((l = n[0]) == null ? void 0 : l.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + n.map(Ot).join("") + "</section></div>";
  }, Rt = (e) => e.startsWith("room:"), bt = (e) => _t.find((n) => "room:" + n.id === e);
  function $t(e, n) {
    const l = v(e), t = nt(e), a = t && rt(t), o = t ? dt(e, t, l) : "", r = a ? a.text + (a.unit ? " " + a.unit : "") : "", d = (C) => {
      const L = w(e, C.key);
      return L.length === 1 ? L[0] : "group:" + e.id + ":" + C.key;
    }, p = l.filter((C) => C.kind === "control").slice(0, 4), h = (C) => C.on && C.light ? ' data-light style="' + C.light + '"' : "", m = p.map((C) => '<button class="tfIcon' + (C.on ? " on" : "") + '" type="button" data-tone="' + C.tone + '"' + h(C) + ' data-more="' + X(d(C)) + '" aria-label="' + X(C.label + ", " + C.value + ". Open its controls") + '">' + C.icon + "</button>"), x = p.map((C) => '<button class="tfRoomDev" type="button" data-more="' + X(d(C)) + '" aria-label="' + X(C.label + ", " + C.value + ". Open its controls") + '"><span class="tfIcon' + (C.on ? " on" : "") + '" data-tone="' + C.tone + '"' + h(C) + ">" + C.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + X(C.label) + '</span><span class="activityRowMeta">' + X(C.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + X(n) + '" data-go="' + X(e.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Ae("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><button class="tfName" type="button" data-go="' + X(e.id) + '" aria-label="Open ' + X(e.name) + '"><span class="activityRowName">' + X(e.name) + "</span>" + (r || o ? '<span class="activityRowMeta">' + (r ? '<span class="tfRoomInline">' + X(r) + (o ? " · " : "") + "</span>" : "") + X(o) + "</span>" : "") + "</button></div>" + (r ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + X(r) + "</span>" + (o ? '<span class="tfRoomSub">' + X(o) + "</span>" : "") + "</div>" : "") + (m.length ? '<div class="tfRoomDevices">' + m.join("") + '</div><div class="tfRoomHeads">' + x.join("") + "</div>" : "") + "</div>";
  }
  const jt = () => [
    { key: "home", name: "Home", ids: At.homeVacuums },
    ...At.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], ue = (e, n, l) => e + " " + (e === 1 ? n : l), St = () => (Ht.favourites ?? Je.favorite_entities ?? []).filter((e) => M[e]);
  function Ee() {
    if (!Vt) {
      const n = Object.entries(ae).sort((t, a) => a[1] - t[1]).map(([t]) => t), l = At.rooms.flatMap((t) => t.actions);
      Vt = [.../* @__PURE__ */ new Set([...xn, ...n, ...l.filter((t) => Jn(t).on), ...l])];
    }
    const e = St();
    return Vt.filter((n) => M[n] && M[n].state !== "unavailable" && !e.includes(n));
  }
  let Pe = !1;
  function va() {
    if (!Pe || Ht.favSeeded || !At.rooms.length) return;
    const e = (l) => Object.keys(M).find((t) => Ro(t) && l(t)), n = [e((l) => l.startsWith("climate.")), e((l) => l.startsWith("cover.") && /curtain/.test(l)), e((l) => l.startsWith("valve.")), At.security.locks[0]];
    Ht = { ...Ht, favourites: [.../* @__PURE__ */ new Set([...Ht.favourites ?? Je.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Ge();
  }
  const ba = () => Ht.suggest ?? !Je.hide_suggested_entities;
  function Oi() {
    const e = new Set(Ht.favHidden || []), n = St().filter((t) => !e.has(t)), l = ba() ? Ee().filter((t) => !e.has(t) && yo(t)) : [];
    return [...n, ...l].slice(0, cm);
  }
  const _a = (e) => {
    const n = St().includes(e);
    return '<button class="tfStar" type="button" data-star="' + X(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + X(Ct(e)) + '">' + rm(n) + "</button>";
  };
  function Sn(e, { area: n = !1, star: l = !1, plain: t = !1, say: a = null, alert: o = !1 } = {}) {
    var T, R, j, _, F, D;
    const r = t && ((F = (T = s()) == null ? void 0 : T.devices) == null ? void 0 : F[(_ = (j = (R = s()) == null ? void 0 : R.entities) == null ? void 0 : j[e]) == null ? void 0 : _.device_id]), d = r && (r.name_by_user || r.name) || Ct(e), p = e.split(".")[0], h = !t && Tl.includes(p) ? Jn(e) : null, m = h ? h.on : ["on", "open", "playing"].includes((D = M[e]) == null ? void 0 : D.state), x = t ? null : h ? h.button : Xh.includes(p) ? { act: ce(p, "toggle", e), label: "Turn " + Ct(e) + (m ? " off" : " on") } : p === "scene" || p === "script" ? { act: ce(p, "turn_on", e), label: "Run " + Ct(e) } : null, C = (a ?? Re(e)) + (n && oe.get(e) ? " · " + oe.get(e) : ""), L = (h == null ? void 0 : h.icon) || _n(e);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (m ? " on" : "") + (l ? " tfPick" : "") + (o ? " alert" : "") + '" data-k="' + X((n ? "fav:" : "row:") + e) + '" data-tone="' + (p === "light" ? "light" : (h == null ? void 0 : h.tone) || "blue") + '"' + nn(e) + ">" + (x && !l ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + X(x.label) + '"' + Ae(e, L) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ae(e, L) + "></div>") + '<button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(d + ", " + C + ". More info") + '"><span class="activityRowName">' + X(d) + '</span><span class="activityRowMeta">' + X(C) + "</span></button>" + (l ? _a(e) : "") + "</div>";
  }
  const ie = () => {
    var e;
    return M[(e = Ht.sources) == null ? void 0 : e.weather] ? Ht.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((n) => n.startsWith("weather."));
  };
  function Qn() {
    var l;
    const e = (t) => Object.keys(M).filter((a) => a.startsWith("binary_sensor.") && t.includes(Wt(a).device_class));
    return ((l = Ho.alert_entities) != null && l.length ? Ho.alert_entities : [...e(["moisture", "smoke", "gas"]).map((t) => ({ entity: t, severity: "alert" })), ...e(ud).map((t) => ({ entity: t, severity: "warning" }))]).filter((t) => M[t.entity]).map((t) => ({ ...t, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[t.entity].state) }));
  }
  function Wa() {
    const e = Object.keys(ac), n = /* @__PURE__ */ new Set(), l = [];
    return (Je.shortcuts || []).forEach((t) => {
      if (t.type === "summary") {
        if (!e.includes(t.key) || n.has(t.key)) return;
        n.add(t.key);
      }
      l.push(t);
    }), e.forEach((t) => {
      n.has(t) || l.push({ type: "summary", key: t });
    }), l;
  }
  function Pn() {
    var j;
    const e = ((j = s()) == null ? void 0 : j.entities) || {}, n = (_) => Wt(_).device_class, l = Object.keys(M).filter((_) => _.startsWith("sensor.") && n(_) === "battery" || _.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(_))), t = At.rooms.flatMap((_) => _.plants.map((F) => F.id));
    if (!l.length && !t.length) return null;
    const a = (_) => {
      var D;
      const F = (D = e[_]) == null ? void 0 : D.device_id;
      return !!F && Object.keys(M).some((ft) => {
        var Bt;
        return ft.startsWith("binary_sensor.") && ((Bt = e[ft]) == null ? void 0 : Bt.device_id) === F && n(ft) === "battery_charging" && M[ft].state === "on";
      });
    }, o = (_) => _.startsWith("vacuum.") ? Wt(_).battery_level <= 20 && M[_].state !== "docked" : _.startsWith("binary_sensor.") ? n(_) === "battery" && M[_].state === "on" : parseFloat(M[_].state) <= 20 && !a(_), r = [...l, ...At.vacuums].filter((_) => M[_] && o(_)), d = [...l.filter((_) => n(_) === "problem" && M[_].state === "on"), ...t.filter((_) => {
      var F;
      return ((F = M[_]) == null ? void 0 : F.state) === "problem";
    })], p = l.filter((_) => M[_].state === "unavailable"), h = [.../* @__PURE__ */ new Set([...r, ...d, ...p])], m = (_) => {
      const F = parseFloat(M[_].state);
      return n(_) === "battery" && Number.isFinite(F) ? F : 101;
    }, x = [...t, ...At.vacuums, ...[...l].sort((_, F) => m(_) - m(F))].filter((_) => M[_] && !h.includes(_)), C = /* @__PURE__ */ new Map();
    x.forEach((_) => {
      var D;
      const F = ((D = At.areaOf) == null ? void 0 : D.call(At, _)) || "";
      C.set(F, [...C.get(F) || [], _]);
    });
    const L = (_) => {
      const F = At.rooms.findIndex((D) => D.id === _);
      return _ === "" ? 1 / 0 : F < 0 ? At.rooms.length : F;
    }, T = [...C.keys()].sort((_, F) => L(_) - L(F)), R = (_) => {
      var F, D, ft, Bt;
      return ((F = At.rooms.find((ht) => ht.id === _)) == null ? void 0 : F.name) || ((Bt = (ft = (D = s()) == null ? void 0 : D.areas) == null ? void 0 : ft[_]) == null ? void 0 : Bt.name) || _;
    };
    return {
      value: [r.length && ue(r.length, "low battery", "low batteries"), d.length && ue(d.length, "problem", "problems"), p.length && ue(p.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: h, alert: !0 }, ...T.map((_) => ({ name: _ ? R(_) : T.length > 1 ? "Other devices" : "Devices", ids: C.get(_) }))].filter((_) => _.ids.length)
    };
  }
  function Nn() {
    var Nt;
    const e = At.rooms, n = At.security, l = (wt, Et) => wt.actions.filter((Pt) => Et.test(Pt)), t = (wt) => e.map((Et) => ({ name: Et.name, ids: wt(Et) })).filter((Et) => Et.ids.length), a = e.flatMap((wt) => wt.lights), o = a.filter((wt) => {
      var Et;
      return ((Et = M[wt]) == null ? void 0 : Et.state) === "on";
    }).length, r = e.map((wt) => wt.readings.find((Et) => Wt(Et).device_class === "temperature")).filter(Boolean).map((wt) => Number(M[wt].state)).filter(Number.isFinite), [d, p] = [Qe(Math.min(...r)), Qe(Math.max(...r))], h = e.flatMap((wt) => l(wt, /^media_player\./)), m = h.filter((wt) => {
      var Et;
      return ((Et = M[wt]) == null ? void 0 : Et.state) === "playing";
    }).length, x = Qn(), C = x.filter((wt) => wt.severity === "warning" && wt.on).length, L = n.locks.filter((wt) => {
      var Et;
      return ["unlocked", "jammed", "open"].includes((Et = M[wt]) == null ? void 0 : Et.state);
    }).length, T = n.alarms.filter((wt) => {
      var Et;
      return ((Et = M[wt]) == null ? void 0 : Et.state) === "disarmed";
    }).length, R = C ? ue(C, "warning", "warnings") : null, j = L ? L + " unlocked" : T ? T + " disarmed" : R ? null : "All secure", _ = Pn(), F = e.flatMap((wt) => wt.solar), D = F.find((wt) => wt.endsWith("_power")), ft = {
      light: a.length && { value: o ? o + " on" : "All off", groups: t((wt) => wt.lights) },
      climate: r.length && { value: d === p ? d + "°" : d + " - " + p + "°", groups: t((wt) => [...wt.readings.filter((Et) => ["temperature", "humidity"].includes(Wt(Et).device_class)), ...l(wt, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [R, j].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((wt) => wt.ids.length) },
      media_players: h.length && { value: m ? m + " playing" : "No media playing", groups: t((wt) => l(wt, /^media_player\./)) },
      maintenance: _,
      energy: At.grid && { value: pa(Number(((Nt = M[D]) == null ? void 0 : Nt.state) || 0) * 1e3 + Number(M[At.grid].state)) + " now", groups: [{ name: "Energy", ids: [...F, At.grid] }] }
    }, Bt = [], ht = x.filter((wt) => wt.severity !== "warning" && wt.on);
    return ht.length && Bt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: ue(ht.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: ht.map((wt) => wt.entity) }] }), Wa().forEach((wt) => {
      wt.type !== "summary" ? Bt.push({ key: "path:" + wt.path, name: wt.label || wt.path, icon: wt.icon || "mdi:link-variant", colour: "", value: "" }) : !wt.hidden && ft[wt.key] && !(Ht.hiddenSums || []).includes(wt.key) && Bt.push({ key: wt.key, ...ac[wt.key], ...ft[wt.key] });
    }), Bt;
  }
  const qi = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + X(e.key) + '" data-k="sum:' + X(e.key) + '" aria-label="' + X(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : e.key === "climate" ? ' style="' + mr() + '"' : e.colour && Di(e.colour) ? ' style="' + Di(e.colour).slice(1) + '"' : "") + ">" + (e.key === "climate" ? Fs : "") + '<div class="tfIcon" aria-hidden="true"' + Ae(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + X(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + X(e.value) + "</div>" : "") + "</div></div>";
  function Xo(e) {
    const n = St();
    Ht = { ...Ht, favourites: n.includes(e) ? n.filter((l) => l !== e) : [...n, e], favHidden: (Ht.favHidden || []).filter((l) => l !== e) }, Ge(), oa();
  }
  function ua(e) {
    document.querySelector("home-assistant") && (z.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Kr(e, n) {
    if (e.startsWith("path:")) {
      ua(e.slice(5));
      return;
    }
    bi("summary:" + e, n);
  }
  async function $r() {
    const e = (r) => Promise.resolve().then(() => P(r)).catch(() => null), [n, l, t, a] = await Promise.all([
      e({ type: "frontend/get_user_data", key: up }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), o = (n == null ? void 0 : n.value) || {};
    Ht = { favourites: o.favourites ?? null, sources: o.sources, hiddenSums: o.hiddenSums, dash: o.dash, named: o.named, favHidden: o.favHidden, suggest: o.suggest, favSeeded: o.favSeeded }, Je = (l == null ? void 0 : l.value) || {}, Ho = (t == null ? void 0 : t.value) || {}, xn = Array.isArray(a == null ? void 0 : a.entities) ? a.entities : [], Vt = null, Object.keys(M).length && oa(), Md(), Pe = !0, va();
  }
  const qs = "HomeCore";
  async function Md() {
    var t, a, o;
    const e = location.pathname.split("/")[1], n = Ht.named || [];
    if (!((a = (t = s()) == null ? void 0 : t.user) != null && a.is_admin) || !e || n.includes(e)) return;
    const l = () => {
      Ht = { ...Ht, named: [...n, e] }, Ge();
    };
    try {
      const r = (o = await P({ type: "lovelace/dashboards/list" })) == null ? void 0 : o.find((h) => h.url_path === e);
      if (!r || r.mode === "yaml") return;
      if (r.title === qs) {
        l();
        return;
      }
      const d = await P({ type: "lovelace/config", url_path: e }), p = ((d == null ? void 0 : d.views) || []).flatMap((h) => [...h.cards || [], ...(h.sections || []).flatMap((m) => m.cards || [])]);
      if (!p.length || !p.every((h) => (h == null ? void 0 : h.type) === "custom:move-assistant-card" && h.layout === "test-focus")) return;
      await P({ type: "lovelace/dashboards/update", dashboard_id: r.id, title: qs }), l();
    } catch {
    }
  }
  let ea = null, Jo = 0, wo = !1;
  const _l = (e) => {
    const n = e.split(".")[0], l = Wt(e).device_class;
    return dm.includes(n) && (n !== "binary_sensor" || ud.includes(l) || !!xp[l]);
  }, Xr = (e) => e.startsWith("binary_sensor.") ? xp[Wt(e).device_class] : null;
  async function Sd() {
    var e;
    if (!(wo || Date.now() - Jo < 30 * 1e3)) {
      wo = !0, Jo = Date.now();
      try {
        const n = Object.keys(((e = s()) == null ? void 0 : e.states) || {}).filter(_l), l = n.length ? await P({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        ea = Array.isArray(l) ? l.filter((t) => t.entity_id && t.state != null && t.when) : null;
      } catch {
        ea = null;
      }
      wo = !1, oa();
    }
  }
  function Dl() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = (a) => {
      if (!M[a.entity_id] || !_l(a.entity_id) || !yo(a.entity_id) || ["unavailable", "unknown"].includes(a.state)) return;
      if (Xr(a.entity_id)) {
        const r = n.get(a.entity_id);
        a.state === "on" ? (!r || a.when > r.when + 1) && n.set(a.entity_id, { ...a, alarm: !0, cleared: null }) : r && !r.cleared && a.when > r.when && (r.cleared = a.when);
        return;
      }
      const o = e.get(a.entity_id);
      (!o || a.when > o.when + 1) && e.set(a.entity_id, a);
    };
    [...ea || []].sort((a, o) => a.when - o.when).forEach(l);
    const t = ea ? Jo / 1e3 - 5 : 0;
    return Object.keys(M).forEach((a) => {
      var d;
      const o = M[a], r = o.last_changed ? Date.parse(o.last_changed) / 1e3 : 0;
      r > t && l({ entity_id: a, state: o.state, when: r, context_user_id: (d = o.context) == null ? void 0 : d.user_id });
    }), [...e.values(), ...n.values()].sort((a, o) => o.when - a.when).slice(0, pm);
  }
  function Jr(e) {
    var t;
    const n = e.context_user_id && Object.keys(M).find((a) => a.startsWith("person.") && Wt(a).user_id === e.context_user_id);
    if (n) return Ct(n);
    const l = (t = s()) == null ? void 0 : t.user;
    return l && e.context_user_id === l.id ? l.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Bl(e) {
    const n = e.entity_id.split(".")[0], l = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[l] || Ut(l).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[l] || Ut(l).toLowerCase() : n === "binary_sensor" ? l === "on" ? "opened" : "closed" : n === "climate" ? l === "off" ? "turned off" : "set to " + Ut(l).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[l] || Ut(l).toLowerCase() : n === "alarm_control_panel" ? (wp[l] || Ut(l)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[l] || Ut(l).toLowerCase() : l === "on" ? "turned on" : l === "off" ? "turned off" : Ut(l).toLowerCase();
  }
  function kr(e) {
    const n = e.entity_id, l = e.alarm && Xr(n), t = Ct(n) + " " + (l ? l[0] : Bl(e)), a = l ? Ce(e.when * 1e3) + (e.cleared ? " · " + l[1] + " since " + Ce(e.cleared * 1e3) : "") : [Jr(e), Ce(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (l ? " alert" : "") + '"><div class="tfIcon' + (l ? " alert" : "") + '" aria-hidden="true"' + Ae(n, _n(n)) + '></div><button class="tfName" type="button" data-more="' + X(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + X(t + ", " + a + ". More info") + '"><span class="activityRowName">' + X(t) + '</span><span class="activityRowMeta">' + X(a) + "</span></button></div>";
  }
  let Qo = null, In = 0;
  const Mr = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ws() {
    var n;
    if (Date.now() - In < 5 * 60 * 1e3) return;
    In = Date.now();
    const e = [];
    try {
      const l = ((n = await P({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], t = (a) => l.filter((o) => o.type === a).flatMap((o) => a === "grid" ? (o.flow_from || []).map((r) => r.stat_energy_from) : [o.stat_energy_from]).filter(Boolean);
      for (const [a, o, r] of [["electricity", "Electricity", t("grid")], ["solar", "Solar", t("solar")], ["gas", "Gas", t("gas")], ["water", "Water", t("water")]]) {
        if (!r.length) continue;
        const d = await Promise.all(r.map((p) => Promise.resolve(P({ type: "recorder/statistic_during_period", statistic_id: p, calendar: { period: "day" }, types: ["change"] })).then((h) => Number(h == null ? void 0 : h.change) || 0, () => 0)));
        e.push({ key: a, name: o, id: r[0], ids: r, value: d.reduce((p, h) => p + h, 0), unit: Wt(r[0]).unit_of_measurement || (a === "gas" || a === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Qo = e, oa();
  }
  let Wi = null, Qr = [];
  function js() {
    var o;
    const e = Qr = Qo != null && Qo.length ? Qo : Mr.map(([r, d, p, h]) => {
      if (r === "solar") {
        const x = Object.keys(M).find((C) => C.endsWith("_solar_today") && !C.includes("made_up_energy"));
        x && Number.isFinite(Number(M[x].state)) && (p = Number(M[x].state));
      }
      const m = "sensor.made_up_energy_" + r;
      return M[m] = { entity_id: m, state: String(p), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: d + " today", unit_of_measurement: h, state_class: "total_increasing" } }, { key: r, name: d, id: m, value: p, unit: h };
    });
    pt.clear(), e.some((r) => r.id === Wi) || (Wi = e[0].id);
    const n = e.map((r) => {
      const d = Number(r.value).toLocaleString(void 0, { maximumFractionDigits: r.value < 10 ? 2 : 1 }) + " " + r.unit, p = um[r.key], h = r.id === Wi;
      return pt.set(r.id, { name: r.name, text: d, icon: p }), '<div class="activityRow tap' + (h ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + X(r.id) + '" aria-pressed="' + h + '" aria-label="' + X(r.name + ", " + d) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ae("", p, r.name) + '></div><div><div class="activityRowName">' + X(r.name) + '</div><div class="activityRowMeta">' + X(d) + "</div></div></div>";
    }), l = e.find((r) => r.id === Wi), t = (((o = _e().opts.energy) == null ? void 0 : o.graph) || "above") === "below", a = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + X(l.id) + '" role="img" aria-label="' + X(l.name) + ', last 24 hours"></svg></div>';
    return qa("dash:energy", 0, "Energy today", n, a, Nn().some((r) => r.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (t ? "" : " graphAbove"));
  }
  function zs(e) {
    const n = B.querySelector(".tfDash-energy"), l = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !l || e === Wi || (Wi = e, n.querySelectorAll("[data-energy-pick]").forEach((t) => {
      const a = t.dataset.energyPick === e;
      t.classList.toggle("picked", a), t.setAttribute("aria-pressed", String(a));
    }), l.dataset.graph = e, l.dataset.drawn = "", ya.set("dash:energy", js()), $e(!0));
  }
  const xo = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Rl = /* @__PURE__ */ new Map();
  async function Pl(e) {
    const n = /* @__PURE__ */ new Date(), l = new Date(n).setHours(0, 0, 0, 0), t = n.getHours(), a = n.getMinutes() / 60, o = Array.from({ length: 24 }, (d, p) => p <= t ? 0 : null);
    if (!e.ids) {
      const d = xo[e.key] || xo.electricity, p = d.map((m, x) => x < t ? m : x === t ? m * a : 0), h = p.reduce((m, x) => m + x, 0) || 1;
      return o.map((m, x) => m == null ? null : e.value * p[x] / h);
    }
    const r = Rl.get(e.id);
    if (r && r.day === l && Date.now() - r.at < 5 * 60 * 1e3) return r.hours;
    try {
      const d = await P({ type: "recorder/statistics_during_period", start_time: new Date(l).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((m) => ((d == null ? void 0 : d[m]) || []).forEach((x) => {
        const C = typeof x.start == "number" ? x.start : Date.parse(x.start), L = new Date(C).getHours();
        C >= l && L < t && (o[L] += Number(x.change) || 0);
      }));
      const p = new Date(n).setMinutes(0, 0, 0), h = await Promise.all(e.ids.map((m) => Promise.resolve(P({ type: "recorder/statistic_during_period", statistic_id: m, fixed_period: { start_time: new Date(p).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      o[t] = h.reduce((m, x) => m + x, 0);
    } catch {
    }
    return Rl.set(e.id, { at: Date.now(), day: l, hours: o }), o;
  }
  async function ts(e, n) {
    const l = await Pl(n);
    if (!e.isConnected) return;
    const t = Math.max(120, e.clientWidth || 260), a = Math.max(60, e.clientHeight || 130), o = 18, r = a - 18, d = t / 24, p = d * 0.72, h = (/* @__PURE__ */ new Date()).getHours(), m = l.map((j) => j ?? 0), x = Math.max(0, ...m), C = (j) => r - (x > 0 ? j / x * (r - o) : 0), L = (j) => j.toLocaleString(void 0, { maximumFractionDigits: j < 10 ? 2 : 1 }) + " " + n.unit, T = (j) => String(j).padStart(2, "0") + ":00", R = x > 0 ? m.indexOf(x) : -1;
    e.setAttribute("viewBox", "0 0 " + t + " " + a), e.setAttribute("aria-label", n.name + " today by the hour: " + L(n.value) + (R >= 0 ? ", most " + L(x) + " at " + T(R) : "")), e.innerHTML = [o, (o + r) / 2, r].map((j) => '<line x1="0" x2="' + t + '" y1="' + j + '" y2="' + j + '" stroke="var(--line)" stroke-width="1"/>').join("") + l.map((j, _) => j > 0 ? '<rect x="' + (_ * d + (d - p) / 2).toFixed(1) + '" y="' + C(j).toFixed(1) + '" width="' + p.toFixed(1) + '" height="' + (r - C(j)).toFixed(1) + '" rx="2" fill="' + (_ === h ? "var(--primary)" : "var(--text)") + '"' + (_ === h ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((j) => '<text x="' + (j * d).toFixed(1) + '" y="' + (a - 3) + '">' + String(j).padStart(2, "0") + "</text>").join("") + (R >= 0 ? '<text x="0" y="11">Most: ' + X(L(x)) + " at " + T(R) + "</text>" : "");
  }
  function Sr(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((l, t) => l.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: t * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ti(e) {
    var t;
    if ((t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, l] = e.querySelectorAll("path");
    Wp(e, l, [n].filter(Boolean));
  }
  let dn = null, ei = 0;
  const yo = (e) => !e.startsWith("light.") || fm.includes((oe.get(e) || "").toLowerCase()), ji = () => Math.max(2, ri((B == null ? void 0 : B.clientWidth) || 0).n), ai = (e) => {
    const n = Jn(e);
    return n.sections.map((l, t) => l && (n.parts || [])[t]).filter(Boolean);
  }, ko = (e) => ai(e).slice(0, Fn(e) - 1);
  function Nl(e) {
    const n = _e().tiles;
    if (n) return n.filter((t) => M[t] || bt(t));
    if (!dn) {
      const t = (a) => {
        var o;
        return (((o = M[a]) == null ? void 0 : o.state) === "on" ? 1e6 : 0) + (ae[a] || 0);
      };
      dn = {
        lights: At.rooms.flatMap((a) => a.lights).filter((a) => {
          var o;
          return yo(a) && ((o = M[a]) == null ? void 0 : o.state) !== "unavailable";
        }).sort((a, o) => t(o) - t(a) || Ct(a).localeCompare(Ct(o))),
        climates: At.rooms.flatMap((a) => a.actions.filter((o) => o.startsWith("climate.")))
      };
    }
    const l = dn.climates.filter((t) => M[t]).slice(0, e > 3 ? 2 : 1);
    return [...dn.lights.filter((t) => M[t]).slice(0, Math.max(0, e - l.length)), ...l];
  }
  const Il = (e, n, l, t) => (a) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + l + '">' + (t ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + l + "</button>" : '<div class="activityTitle">' + l + "</div>") + "</div>" : "") + '<div class="activityRows">' + a + "</div></section>";
  function es(e, n) {
    var o, r;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + X(((r = (o = s()) == null ? void 0 : o.config) == null ? void 0 : r.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (d) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Il("tfDash-bar", "sums-bar", "Summaries", !1)(d).replace(" data-tf", "") + "</div>", tiles: n.map((d) => ({ key: "sum:" + d.key, html: qi(d) })) }), xt().length && e.push({ key: "areas", html: qt(0) });
    const l = Oi();
    l.length && e.push({ key: "favs", wrap: Il("tfDash-favs", "favs", "Favourites", !0), tiles: l.map((d) => ({ key: "fav:" + d, html: Sn(d, { area: !0 }) })) });
    const t = Dl();
    e.push({ key: "dash:act", html: qa("dash:act", 0, "Activity", t.length ? t.map(kr) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: js() });
    const a = ji();
    return ei = a, Nl(a >= 3 ? a : a * 2).forEach((d) => e.push({
      key: "dash:tile:" + d,
      wrap: (p) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + X(d) + '">' + p + "</div>",
      tiles: [{ key: d, html: Rt(d) ? $t(bt(d), d) : Yo(d, !1, ko(d)) }]
    })), Sd(), Ws(), e;
  }
  const Cn = 252, me = 16, ni = 200, zi = Math.round(Cn * 1.25), Cd = 60, cn = Cd + me, Hl = 3, Td = {
    title: "The name",
    sums: "Summaries",
    wx: "Weather",
    areas: "Areas",
    favs: "Favourites",
    act: "Activity",
    energy: "Energy today",
    avg: "Compared to average",
    aq: "Air quality",
    pollen: "Pollen",
    radar: "Rain radar",
    hourly: "Next hours",
    sun: "Sun",
    moon: "Moon",
    uv: "UV index",
    humidity: "Humidity",
    pressure: "Pressure",
    wind: "Wind",
    visibility: "Visibility"
  }, as = ["wx", "favs", "act", "energy", "avg"], Vi = ["XS", "S", "M", "L", "XL"], Hn = Vi.length, Vs = ["Narrow", "Wide", "Really wide"], Gs = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Us = (e) => !e.includes(".") || !M[e] || e.startsWith("light.") && Zo(e) ? Hn : Math.min(Hn, ai(e).length + 1), Fn = (e) => {
    const n = _e().opts[e] || {}, l = Us(e), t = Number(n.h) || (n.tall ? 5 : Gs[e] || ns);
    return Math.max(1, Math.min(l, t));
  }, ns = 2, Ld = 90, Ad = 56, pn = (e) => {
    var n;
    return Td[e] || (e.startsWith("room:") ? ((n = _t.find((l) => "room:" + l.id === e)) == null ? void 0 : n.name) || "Area" : Ct(e));
  }, os = 409, ja = 128;
  let Ne = !1, se = null, La = null, Cr = !1, to = /* @__PURE__ */ new Map(), oi = 0, eo = 0;
  const ii = ["title", "sums"], ri = (e) => {
    const n = Math.max(1, Math.floor((e + me) / (ni + me)));
    return { n, w: Math.max(1, Math.min(zi, Math.floor((e - (n - 1) * me) / n))) };
  }, _e = () => {
    const e = { cells: {}, spans: {}, hidden: [], opts: {}, ...Ht.dash || {} }, n = Fa.filter((l) => !(e.known || []).includes(l) && !e.hidden.includes(l));
    return n.length ? { ...e, hidden: [...e.hidden, ...n] } : e;
  };
  function Gi(e) {
    Ht = { ...Ht, dash: { ...e, known: Fa } }, Ge();
  }
  function un() {
    const e = (n) => B.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", En.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", En.avg, 2],
      ...Fa.map((n) => [n, En[n], Zt[n] || 1]),
      ...[...B.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, l, t, a = !1]) => ({ key: n, el: l, span: t, tile: a }));
  }
  const Tn = (e, n, l) => {
    var t;
    if (e.span === "full") return n;
    if (e.span === "areas") {
      const a = Math.ceil((os + Math.max(0, xt().length - 1) * (ja + me) + me) / (l + me));
      return Math.max(Math.min(n, 2), Math.min(a, n - (((t = _e().cells.areas) == null ? void 0 : t.col) || 0)));
    }
    return Math.min(n, _e().spans[e.key] ?? e.span);
  }, is = (e) => Fn(e.key);
  function Ui(e, n, l = null) {
    const t = _e().cells, a = e.every((d) => !t[d.key] || t[d.key].col + d.cols <= n), o = (d) => t[d.key] || { row: 1e9, col: 0 };
    return (() => {
      const d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), h = (R, j, _, F) => {
        for (let D = j; D < j + F; D++) for (let ft = R; ft < R + _; ft++) if (d.has(ft + "," + D)) return !1;
        return !0;
      }, m = (R, j, _) => {
        for (let F = _; F < _ + R.rows; F++) for (let D = j; D < j + R.cols; D++) d.add(D + "," + F);
        p.set(R.key, { col: j, row: _, cols: R.cols, rows: R.rows });
      }, x = (R, j, _) => {
        for (j = Math.max(0, Math.min(n - R.cols, j)), _ = Math.max(0, _); !h(j, _, R.cols, R.rows); ) _++;
        m(R, j, _);
      }, C = (R) => {
        for (let j = 0; ; j++) for (let _ = 0; _ <= n - R.cols; _++) if (h(_, j, R.cols, R.rows)) {
          m(R, _, j);
          return;
        }
      };
      l && x(l, se.col, se.row);
      const L = e.filter((R) => R !== l), T = (R, j) => o(R).row - o(j).row || o(R).col - o(j).col;
      return a ? (L.filter((R) => t[R.key]).sort(T).forEach((R) => x(R, t[R.key].col, t[R.key].row)), L.filter((R) => !t[R.key]).forEach(C), p) : ([...L].sort(T).forEach(C), p);
    })();
  }
  function Ed(e, n) {
    const l = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map(), a = (o, r, d) => {
      for (let p = r; p < r + d.rows; p++) for (let h = o; h < o + d.cols; h++) if (l.has(h + "," + p)) return !1;
      return !0;
    };
    return e.forEach((o) => {
      for (let r = 0; ; r++) {
        let d = 0;
        for (; d <= n - o.cols && !a(d, r, o); ) d++;
        if (!(d > n - o.cols)) {
          for (let p = r; p < r + o.rows; p++) for (let h = d; h < d + o.cols; h++) l.add(h + "," + p);
          t.set(o.key, { col: d, row: r, cols: o.cols, rows: o.rows });
          return;
        }
      }
    }), t;
  }
  function rs() {
    const e = _e(), n = new Set(e.hidden), l = un().filter((r) => !ii.includes(r.key));
    let t = to;
    if (!t.size) {
      const r = e.pegs || 4, d = l.filter((p) => !n.has(p.key));
      d.forEach((p) => {
        p.cols = Tn(p, r, Cn), p.rows = is(p) ?? ns;
      }), t = Ui(d, r);
    }
    const a = (r) => !n.has(r.key) && t.get(r.key) || { row: 1e9, col: 0 };
    l.sort((r, d) => a(r).row - a(d).row || a(r).col - a(d).col);
    const o = (e.phone || []).map((r) => l.find((d) => d.key === r && !n.has(r))).filter(Boolean);
    return [...o, ...l.filter((r) => !o.includes(r))];
  }
  const fn = () => {
    const e = rs();
    e.forEach((n, l) => n.el.style.setProperty("--o", String(3 + l))), Yi([...un().filter((n) => ii.includes(n.key)), ...e].map((n) => n.el));
  };
  function Yi(e) {
    if (se) return;
    const n = i.activeElement;
    let l = null;
    for (const t of new Set(e.map((a) => {
      for (; a && a.parentElement !== B; ) a = a.parentElement;
      return a;
    }).filter(Boolean))) {
      const a = l ? l.nextSibling : B.querySelector(":scope > [data-tf]");
      if (t !== a)
        try {
          B.moveBefore ? B.moveBefore(t, a) : B.insertBefore(t, a);
        } catch {
          B.insertBefore(t, a);
        }
      l = t;
    }
    n && n !== i.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const Mo = (e, n) => Gi({ ...e, cells: n, pegs: ri(B.clientWidth).n });
  function aa() {
    var F;
    if (!y || !B) return;
    const e = B.clientWidth, n = e < 2 * Cn + me, l = g.classList.contains("tfDash"), { n: t, w: a } = n ? { n: 2, w: Math.floor((e - me) / 2) } : ri(e);
    Ue.classList.add("tfPegs"), Ue.style.setProperty("--peg-n", t), Ue.style.setProperty("--peg-w", a + "px");
    const o = new Set(_e().hidden);
    Fa.forEach((D) => {
      var ft;
      return (ft = En[D]) == null ? void 0 : ft.classList.toggle("tfNotAdded", o.has(D) && !(se != null && se.fromTray && se.key === D));
    }), Gt(), g.classList.toggle("tfBoard", l), g.classList.toggle("tfEditing", l && Ne && !n);
    const r = u("dashEditNav");
    r && (r.hidden = !l || n, r.classList.toggle("active", Ne), r.setAttribute("aria-pressed", String(Ne)), r.setAttribute("aria-label", Ne ? "Done editing" : "Edit the dashboard"), r.title = Ne ? "Done" : "Edit", r.innerHTML = Ne ? im : bp);
    const d = l ? un() : [];
    if (!l) {
      B.style.height = "", B.querySelectorAll(".tfBoardItem").forEach((D) => {
        D.classList.remove("tfBoardItem", "tfBoardHidden"), D.style.left = D.style.top = D.style.width = D.style.height = "";
      }), (F = B.querySelector(".tfDash-act > .activityRows")) == null || F.style.removeProperty("max-height"), On(!1), g.classList.contains("tfDash") && fn(), Ke();
      return;
    }
    B.style.setProperty("--peg-w", a + "px");
    const p = new Set(_e().hidden), h = a + me;
    se != null && se.fromTray && p.delete(se.key), d.forEach((D) => D.el.classList.toggle("tfBoardHidden", p.has(D.key)));
    const m = d.filter((D) => !p.has(D.key) && getComputedStyle(D.el).display !== "none");
    let x = 0;
    m.filter((D) => ii.includes(D.key)).forEach((D) => {
      D.el.classList.add("tfBoardItem"), Object.assign(D.el.style, { width: e + "px", height: "", left: "0px", top: x + "px" });
      const ft = D.key === "sums" && D.el.querySelector(".tfDash-bar"), Bt = ft ? ft.querySelectorAll(".activityRow").length : 0;
      ft && (ft.style.maxWidth = "none");
      for (let ht = 1; ft && ht <= Bt && (ft.style.setProperty("--bar-cols", String(Math.ceil(Bt / ht))), !(ft.offsetWidth <= e)); ht++)
        ;
      ft && (ft.style.maxWidth = ""), x += D.el.offsetHeight + me;
    }), eo = x;
    const C = m.filter((D) => !ii.includes(D.key));
    C.forEach((D) => {
      D.cols = Tn(D, t, a), D.el.classList.add("tfBoardItem"), D.el.style.width = (D.cols === t ? e : D.cols * a + (D.cols - 1) * me) + "px", D.el.style.height = "", D.rows = is(D) ?? Math.max(1, Math.ceil((D.el.offsetHeight + me - 6) / cn));
    });
    const L = se && C.find((D) => D.key === se.key), T = n && rs().map((D) => D.key), R = (D) => T.includes(D.key) ? T.indexOf(D.key) : -1, j = n ? Ed([...C].sort((D, ft) => R(D) - R(ft)), t) : Ui(C, t, L);
    j.forEach((D) => Object.assign(D, { x: D.cols === t ? 0 : D.col * h, y: eo + D.row * cn, w: D.cols === t ? e : D.cols * a + (D.cols - 1) * me, h: D.rows * cn - me })), C.forEach((D) => {
      const ft = j.get(D.key);
      D.el.style.height = ft.h + "px", D.el.dataset.rows = n && D.key === "wx" ? 5 : Fn(D.key), D.el.toggleAttribute("data-narrow", !n && ft.cols === 1 && t > 1), D.el.dataset.cols = ft.cols, D.el.classList.contains("tfDac") && D.el.style.setProperty("--tf-dac-pad", ft.h - Ld + "px"), !(D === L && !se.fromTray) && (D.el.style.left = ft.x + "px", D.el.style.top = ft.y + "px");
    }), n || (to = j), Yi([...m.filter((D) => ii.includes(D.key)), ...C.slice().sort((D, ft) => j.get(D.key).row - j.get(ft.key).row || j.get(D.key).col - j.get(ft.key).col)].map((D) => D.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([D, ft]) => {
      const Bt = j.get(D), ht = Bt && B.querySelector(ft), Nt = ht == null ? void 0 : ht.querySelector(":scope > .activityRows"), wt = ht == null ? void 0 : ht.querySelector(":scope > .activityHeader");
      if (!Nt || !wt) return;
      const Et = Nt.getBoundingClientRect().top - ht.getBoundingClientRect().top, Pt = Bt.rows === 1 ? Bt.h : Math.floor(Bt.h - Et - parseFloat(getComputedStyle(ht).paddingBottom)), Me = Math.max(1, Math.floor(Pt / Ad));
      Nt.style.setProperty("--fill-row", (Pt / Me).toFixed(2) + "px"), Nt.style.maxHeight = Pt + "px";
    }), oi = Math.max(0, ...[...j.values()].map((D) => D.row + D.rows));
    let _ = eo + oi * cn - me;
    _ = On(Ne && !n, C, j, _, t, a), B.style.height = _ + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), d.forEach((D) => So.observe(D.el)), $e(), Ke();
  }
  const Tr = () => {
    Cr || (Cr = !0, requestAnimationFrame(() => {
      Cr = !1, aa();
    }));
  }, So = new ResizeObserver(() => {
    se || Tr();
  });
  function _d(e, n, l) {
    const t = l + me, a = e * l + (e - 1) * me, o = n * cn - me, r = me / 2, d = t / Math.max(1, Math.round(t / (cn / 4))), p = cn / 4, h = 6;
    let m = "";
    for (let x = 0; x <= e; x++) for (let C = 0; C <= n; C++) {
      const L = x * t - r, T = C * cn - r;
      m += "M" + (L - h) + " " + T + "H" + (L + h) + "M" + L + " " + (T - h) + "V" + (T + h);
    }
    return '<svg width="' + a + '" height="' + o + '" viewBox="0 0 ' + a + " " + o + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -r + '" y="' + -r + '" width="' + d.toFixed(3) + '" height="' + p + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + d.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + p + '" r="1.4"></circle><circle cx="' + d.toFixed(3) + '" cy="' + p + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -r + '" y="' + -r + '" width="' + (a + me) + '" height="' + (o + me) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + m + '"></path></svg>';
  }
  function On(e, n = [], l = /* @__PURE__ */ new Map(), t = 0, a = 1, o = Cn) {
    B.querySelectorAll(".tfEditChips").forEach((m) => {
      (!e || !m.closest(".tfBoardItem")) && m.remove();
    }), B.querySelectorAll(".tfFavHides").forEach((m) => m.remove()), B.querySelectorAll(".tfBoardItem").forEach((m) => [...m.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", e);
    }));
    let r = B.querySelector(".tfBoardCells"), d = B.querySelector(".tfBoardLand");
    if (!e)
      return r == null || r.remove(), d == null || d.remove(), qn(), t;
    const p = oi + Hl;
    if (r || (r = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), r.setAttribute("aria-hidden", "true"), B.prepend(r)), r.style.top = eo + "px", r.dataset.size !== a + "x" + p + "x" + o && (r.dataset.size = a + "x" + p + "x" + o, r.innerHTML = _d(a, p, o)), t = Math.max(t, eo + p * cn - me), n.forEach((m) => {
      const x = m.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + nc + '</span><button class="tfEditChip" type="button" data-board-more="' + X(m.key) + '" aria-label="' + X(pn(m.key)) + ' options" aria-haspopup="menu">' + nm + "</button></div>");
    }), se && l.has(se.key)) {
      d || (d = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), B.appendChild(d));
      const m = l.get(se.key);
      Object.assign(d.style, { left: m.x + "px", top: m.y + "px", width: m.w + "px", height: m.h + "px" });
    } else d == null || d.remove();
    const h = B.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (h) {
      const m = h.getBoundingClientRect();
      h.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...h.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const C = x.getBoundingClientRect(), L = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + X(L) + '" aria-label="Hide ' + X(Ct(L)) + ' from the dashboard" style="left:' + Math.round(C.right - m.left - 42) + "px;top:" + Math.round(C.top - m.top + (C.height - 32) / 2) + 'px">' + mp + "</button>";
      }).join("") + "</div>");
    }
    return t;
  }
  let Zi = "";
  function Ys(e) {
    Ne = e, e || (se = null, Wn = Ba = !1, qn()), aa(), e ? Zi = JSON.stringify(Ht) : Zi && JSON.stringify(Ht) !== Zi && hn("Changes saved");
  }
  function Zs(e, n) {
    var R, j;
    qn();
    const l = to.get(e), { n: t } = ri(B.clientWidth), a = _e(), o = a.spans[e] ?? (Rt(e) ? 1 : 2);
    if (!l) return;
    const r = l.cols >= t, d = (_, F, D) => '<button type="button" role="menuitem" data-board-act="' + _ + '"' + (D ? " disabled" : "") + ">" + F + "</button>", p = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    p.setAttribute("role", "menu"), p.setAttribute("aria-label", pn(e) + " options");
    const h = B.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), m = Us(e), x = Fn(e), C = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Vi.map((_, F) => '<button type="button" role="menuitemradio" aria-checked="' + (F + 1 === x) + '" aria-label="' + _ + ", " + (F + 1) + (F ? " rows" : " row") + '" data-board-act="h:' + (F + 1) + '"' + (F < m ? "" : " disabled") + ">" + _ + "</button>").join("") + "</div></div>", L = as.includes(e) || Rt(e) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Vs.map((_, F) => '<button type="button" role="menuitemradio" aria-checked="' + (F + 1 === Math.min(o, t)) + '" aria-label="' + _ + ", " + (F + 1) + (F ? " columns" : " column") + '" data-board-act="w:' + (F + 1) + '"' + (F < t ? "" : " disabled") + ">" + _ + "</button>").join("") + "</div></div>" : "";
    p.innerHTML = C + L + (e === "energy" ? d("graph", (((R = a.opts.energy) == null ? void 0 : R.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + d("left", "Move left", r || l.col === 0) + d("right", "Move right", r || l.col + l.cols >= t) + d("up", "Move up", l.row <= 0) + d("down", "Move down") + (h ? d("remove", "Remove") : d("hide", "Hide")), B.appendChild(p);
    const T = Math.min(l.x + l.w - p.offsetWidth, B.clientWidth - p.offsetWidth);
    Object.assign(p.style, { left: Math.max(0, T) + "px", top: l.y + 28 + "px" }), La = { key: e, menu: p, opener: n }, (j = p.querySelector("button:not([disabled])")) == null || j.focus();
  }
  function qn(e) {
    if (!La) return;
    const { menu: n, opener: l } = La;
    La = null, n.remove(), e && (l == null || l.focus());
  }
  const ao = () => Object.fromEntries([...to].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function no(e, n) {
    var d, p;
    if (n === "remove") {
      qn(), Ki(e);
      return;
    }
    const l = Ht, t = _e(), a = ao(), o = a[e] || { col: 0, row: 0 };
    n.startsWith("w:") && (t.spans = { ...t.spans, [e]: n === "w:full" ? "full" : Number(n.slice(2)) }), n.startsWith("h:") && (t.opts = { ...t.opts, [e]: { ...t.opts[e] || {}, h: Number(n.slice(2)), tall: void 0 } }), n === "graph" && (t.opts = { ...t.opts, energy: { ...t.opts.energy || {}, graph: (((d = t.opts.energy) == null ? void 0 : d.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (a[e] = { ...o, col: o.col - 1 }), n === "right" && (a[e] = { ...o, col: o.col + 1 }), n === "up" && (a[e] = { ...o, row: o.row - 1 }), n === "down" && (a[e] = { ...o, row: o.row + 1 }), n === "hide" && (t.hidden = [.../* @__PURE__ */ new Set([...t.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (se = { key: e, col: a[e].col, row: a[e].row }), Mo(t, a), se && (aa(), se = null, Mo(_e(), ao()));
    const r = /^[hw]:/.test(n) && !Ia() && (La == null ? void 0 : La.menu.querySelector('[data-board-act="' + CSS.escape(n) + '"]'));
    if (r) {
      const h = La;
      r.parentElement.querySelectorAll("[aria-checked]").forEach((m) => m.setAttribute("aria-checked", String(m === r))), setTimeout(() => {
        La === h && qn();
      }, Ve.tabs.dur);
    } else qn();
    n === "graph" && (ya.delete("dash:energy"), oa()), n.startsWith("h:") && e.includes(".") && oa(), aa(), n !== "hide" ? (p = B.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || p.focus() : hn(pn(e) + " hidden", li(l));
  }
  const Fl = (e) => {
    var n;
    return Fa.includes(e) && !(((n = Ht.dash) == null ? void 0 : n.cells) || {})[e] ? " added" : " put back";
  };
  function Ks(e) {
    const n = _e(), l = pn(e) + Fl(e);
    Gi({ ...n, hidden: n.hidden.filter((t) => t !== e) }), aa(), hn(l);
  }
  const Lr = () => _e().tiles || [...B.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !_e().hidden.includes(e));
  function si(e, n) {
    const l = _e();
    Mo({ ...l, tiles: e, hidden: l.hidden.filter((t) => !t.includes(".")) }, n), oa(), Ke();
  }
  const Ol = (e) => {
    si([...Lr().filter((n) => n !== e), e], ao()), hn(pn(e) + " added"), _r(e);
  }, Ki = (e) => {
    const n = Ht, l = ao();
    delete l[e], si(Lr().filter((t) => t !== e), l), hn(pn(e) + " removed", li(n));
  };
  let $s = 0;
  function hn(e, n = null) {
    var r;
    const l = u("toast");
    if (!l) return;
    if (Bf(l, e), n) {
      const d = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      d.addEventListener("click", () => {
        clearTimeout($s), l.classList.remove("show", "withAction"), n();
      }), l.appendChild(d);
    }
    const t = g.getBoundingClientRect(), a = (r = i.querySelector(".bottomNav")) == null ? void 0 : r.getBoundingClientRect(), o = ge.classList.contains("open") && !fa ? Math.min(t.right, ge.getBoundingClientRect().left) : t.right;
    l.style.left = (t.left + o) / 2 + "px", l.style.bottom = (a != null && a.height ? window.innerHeight - a.top + 12 : 26) + "px", l.classList.add("tfToast", "show"), l.classList.toggle("withAction", !!n), Rf(l), clearTimeout($s), $s = setTimeout(() => l.classList.remove("show", "withAction"), n ? 5e3 : Ve.confirm.stay);
  }
  const $i = 700, Xi = 1e3, ne = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ne.setAttribute("role", "tooltip"), ne.setAttribute("aria-hidden", "true"), g.appendChild(ne);
  let oo = null, Co = 0, To = 0, wa = -1 / 0;
  const Ar = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, ql = (e) => {
    for (let n = e; n && n !== g; n = n.parentElement) if (Ar(n)) return n;
    return null;
  };
  function Xs(e, n) {
    clearTimeout(Co), clearTimeout(To);
    const l = () => {
      if (!e.isConnected) return;
      oo = e, ne.textContent = n, ne.hidden = !1;
      const t = e.getBoundingClientRect(), a = ne.getBoundingClientRect(), o = t.top - a.height - 8 >= 8 ? t.top - a.height - 8 : t.bottom + 8;
      ne.style.left = Math.max(8, Math.min(window.innerWidth - a.width - 8, t.left + t.width / 2 - a.width / 2)) + "px", ne.style.top = o + "px";
    };
    !ne.hidden || performance.now() - wa < Xi ? l() : Co = setTimeout(l, $i);
  }
  function Er() {
    clearTimeout(Co), clearTimeout(To), ne.hidden || (wa = performance.now()), ne.hidden = !0, oo = null;
  }
  i.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (ne.contains(e.target)) {
      clearTimeout(To);
      return;
    }
    const n = ql(e.target);
    if (n && ee.names === "scroll" && n.matches(ss)) {
      Js(n);
      return;
    }
    if (n) {
      n !== oo ? Xs(n, n.textContent.trim()) : clearTimeout(To);
      return;
    }
    clearTimeout(Co), clearTimeout(To), To = setTimeout(Er, 120);
  }), i.addEventListener("focusin", (e) => {
    var t;
    const n = e.target;
    if (!((t = n.matches) != null && t.call(n, ":focus-visible"))) return;
    let l = [n, ...n.querySelectorAll("*")].filter(Ar);
    ee.names === "scroll" && (l.filter((a) => a.matches(ss)).forEach(Js), l = l.filter((a) => !a.matches(ss))), l.length && Xs(n, l.map((a) => a.textContent.trim()).join(" · "));
  }), i.addEventListener("focusout", (e) => {
    e.target === oo && Er();
  }), i.addEventListener("keydown", (e) => {
    e.key === "Escape" && !ne.hidden && (e.stopPropagation(), Er());
  }, !0), window.addEventListener("scroll", () => {
    (!ne.hidden || Co) && Er();
  }, { capture: !0, passive: !0 });
  const ss = ".activityRowName,.activityRowMeta", ls = /* @__PURE__ */ new WeakSet();
  function Js(e) {
    var l;
    if (ee.names !== "scroll" || ls.has(e) || e.closest("[inert]") || (l = window.matchMedia) != null && l.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ls.add(e);
    const n = () => Promise.all([e.closest(".workoutPanel"), e.closest(".panelExpanded")].filter(Boolean).flatMap((t) => t.getAnimations()).map((t) => t.finished.catch(() => {
    })));
    setTimeout(async () => {
      await n();
      const t = e.isConnected && !e.closest("[inert]") ? e.scrollWidth - e.clientWidth : 0;
      if (t < 2) {
        ls.delete(e);
        return;
      }
      const a = t / 30 * 1e3, o = a + 1e3 + a;
      e.style.textOverflow = "clip";
      const r = e.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -t + "px", offset: a / o },
        { textIndent: -t + "px", offset: (1e3 + a) / o, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: o });
      r.onfinish = r.oncancel = () => {
        e.style.textOverflow = "", ls.delete(e);
      };
    }, 600);
  }
  const Wl = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && !n.target.closest("[inert]") && (Wl.unobserve(n.target), Js(n.target));
  }), { threshold: 1 });
  let ds = !1;
  new MutationObserver(() => {
    ds || ee.names !== "scroll" || (ds = !0, setTimeout(() => {
      ds = !1, i.querySelectorAll(ss).forEach((e) => {
        !e.dataset.glided && Ar(e) && (e.dataset.glided = "1", Wl.observe(e));
      });
    }, 300));
  }).observe(i, { childList: !0, subtree: !0 });
  const li = (e) => () => {
    Ht = e, Ge(), oa(), aa(), Ke();
  };
  function _r(e) {
    const n = () => B.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var r;
      const l = n();
      if (!l) return;
      const t = (r = window.matchMedia) == null ? void 0 : r.call(window, "(prefers-reduced-motion: reduce)").matches, a = l.getBoundingClientRect();
      (a.top < 0 || a.bottom > window.innerHeight) && l.scrollIntoView({ behavior: t ? "auto" : "smooth", block: "center" });
      const o = (d) => "0 0 0 4px color-mix(in srgb,var(--primary) " + d + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + d + "%,transparent)";
      l.animate([{ boxShadow: o(55) }, { boxShadow: o(0) }], { duration: 1500, easing: t ? "steps(1, end)" : "ease-out" });
    }, Dd(e) ? 260 : 0);
  }
  function Dd(e) {
    const n = to.get(e);
    if (!n || !ge.classList.contains("open") || fa) return !1;
    const { n: l, w: t } = ri(B.clientWidth), a = ge.getBoundingClientRect().left - B.getBoundingClientRect().left, o = (p) => p * (t + me) + n.cols * t + (n.cols - 1) * me <= a;
    if (o(n.col)) return !1;
    const r = /* @__PURE__ */ new Set();
    to.forEach((p, h) => {
      if (h !== e) for (let m = p.row; m < p.row + p.rows; m++) for (let x = p.col; x < p.col + p.cols; x++) r.add(x + "," + m);
    });
    const d = (p, h) => {
      for (let m = h; m < h + n.rows; m++) for (let x = p; x < p + n.cols; x++) if (r.has(x + "," + m)) return !1;
      return !0;
    };
    for (let p = 0; p <= oi; p++) for (let h = 0; h + n.cols <= l && o(h); h++)
      if (d(h, p))
        return Mo(_e(), { ...ao(), [e]: { col: h, row: p } }), aa(), !0;
    return !1;
  }
  const jl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, ge = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  ge.setAttribute("aria-label", "Edit the dashboard"), ge.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(ge);
  const Da = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  Da.setAttribute("role", "dialog"), Da.setAttribute("aria-label", "Areas"), Da.hidden = !0, g.appendChild(Da);
  const cs = () => ge.querySelector("[data-area-choose]");
  function Bd() {
    const e = new Set(xt().map((n) => n.id));
    Da.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + _t.map((n) => '<div class="tfTrayPopRow"><button class="switch' + (e.has(n.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + e.has(n.id) + '" aria-label="' + X(n.name) + '" data-area-on="' + X(n.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + Ae("area:" + n.id, n.icon || "mdi:texture-box", n.name) + '></span></span><span class="tfTrayPopName">' + X(n.name) + "</span></div>").join(""), rn(Da);
  }
  function Lo() {
    var e;
    Da.hidden || (Da.hidden = !0, (e = cs()) == null || e.setAttribute("aria-expanded", "false"));
  }
  function di() {
    if (!Da.hidden) {
      Lo();
      return;
    }
    Bd(), Da.hidden = !1, cs().setAttribute("aria-expanded", "true");
    const e = cs().getBoundingClientRect();
    Da.style.top = Math.max(16, Math.min(e.top - 12, innerHeight - Da.offsetHeight - 16)) + "px";
  }
  Da.addEventListener("click", (e) => {
    var a;
    const n = e.target.closest("[data-area-on]");
    if (!n) return;
    const l = !n.classList.contains("on"), t = new Set(((a = Ht.dash) == null ? void 0 : a.areasOff) || []);
    l ? t.delete(n.dataset.areaOn) : t.add(n.dataset.areaOn), Gi({ ..._e(), areasOff: [...t] }), n.classList.toggle("on", l), n.setAttribute("aria-checked", String(l)), oa();
  }), Da.addEventListener("keydown", (e) => {
    var n;
    e.key === "Escape" && (e.stopPropagation(), Lo(), (n = cs()) == null || n.focus());
  });
  let fa = !1, Wn = !1, Ba = !1, Dr = !1, na = null, io = !1;
  const Ao = {}, Eo = (e, n) => {
    if (Ao[e] === n) return;
    Ao[e] = n;
    const l = ge.querySelector('[data-tray="' + e + '"]');
    l.innerHTML = n, rn(l);
  }, ps = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + X(Ct(e)) + '</span><span class="activityRowMeta">' + X(n) + "</span></span>", Ji = (e, n, l) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + X(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + nc + '</span><span class="tfIcon"' + Ae(e, _n(e)) + "></span>" + ps(e, n ? "Hidden" + (oe.get(e) ? " · " + oe.get(e) : "") : oe.get(e) || Re(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + X(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + X(Ct(e)) + ' on the dashboard">' + (n ? mp : om) + "</button>" + (l ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + X(e) + '" aria-label="Remove ' + X(Ct(e)) + ' from favourites">' + gp + "</button>" : "<span></span>") + "</li>";
  function Qi(e, n, l, t) {
    const a = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((r) => n(r) && !l.has(r) && M[r].state !== "unavailable").filter((r) => {
      const d = (Ct(r) + " " + (oe.get(r) || "") + " " + r).toLowerCase();
      return a.every((p) => d.includes(p));
    }).sort((r, d) => (oe.get(r) || "~").localeCompare(oe.get(d) || "~") || Ct(r).localeCompare(Ct(d))).slice(0, 40).map((r) => '<li><button class="tfTrayPickItem" type="button" ' + t + '="' + X(r) + '"><span class="tfIcon"' + Ae(r, _n(r)) + "></span>" + ps(r, oe.get(r) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function Ke() {
    const e = Ne && g.classList.contains("tfBoard");
    if (ge.classList.toggle("open", e), ge.classList.toggle("tucked", e && fa), ge.toggleAttribute("inert", !e), e || (io = !1), (!e || !g.classList.contains("tfEditing")) && Lo(), pi(), !e) return;
    const n = ge.querySelector("[data-tray-tuck]");
    n.innerHTML = fa ? np : vp, n.setAttribute("aria-expanded", String(!fa)), n.setAttribute("aria-label", fa ? "Show the edit tray" : "Tuck the edit tray away");
    const l = _e().hidden.filter((h) => un().some((m) => m.key === h)), t = (h, m) => '<button class="tfTrayCard" type="button" data-tray-card="' + X(h) + '" aria-label="' + X(pn(h)) + ": drag it onto the board, or press to " + m + '"><span class="tfTrayGrip" aria-hidden="true">' + nc + "</span>" + X(pn(h)) + "</button>", a = l.filter((h) => !Le.includes(h)), o = Le.filter((h) => l.includes(h));
    Eo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (a.length ? '<div class="tfTrayCards">' + a.map((h) => t(h, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Eo("weather", '<div class="sectionLabel">Weather</div>' + (o.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + o.map((h) => t(h, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Eo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (_e().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + io + '">' + (io ? "Hide the phone" : "Show the phone") + "</button>");
    const r = new Set(Ht.favHidden || []), d = St(), p = [...d, ...[...r].filter((h) => !d.includes(h) && M[h])];
    if (Eo("favs", p.map((h) => Ji(h, r.has(h), d.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), ge.querySelector('[data-pick="tiles"]').hidden = !Ba, ge.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Ba)), Ba && Eo("tilepick", Qi(ge.querySelector("[data-tile-search]").value, (h) => Tl.includes(h.split(".")[0]), new Set(Lr()), "data-tile-pick")), ge.querySelector('[data-tray="roompick"]').hidden = !Dr, ge.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Dr)), Dr) {
      const h = new Set(Lr());
      Eo("roompick", _t.filter((m) => !h.has("room:" + m.id)).map((m) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + X(m.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Ae("area:" + m.id, m.icon || "mdi:texture-box", m.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + X(m.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    ge.querySelector('[data-pick="favs"]').hidden = !Wn, ge.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Wn)), Wn && Eo("pick", Qi(ge.querySelector("[data-fav-search]").value, (h) => jl.test(h), new Set(St()), "data-fav-pick")), Eo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (ba() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ba() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const _o = (e) => {
    Ht = { ...Ht, ...e }, Ge(), oa(), Ke();
  };
  function ci(e, n) {
    const l = Ht, t = new Set(Ht.favHidden || []);
    n ? t.delete(e) : t.add(e), _o({ favHidden: [...t] }), n ? hn(Ct(e) + " put back") : hn(Ct(e) + " hidden", li(l));
  }
  const tr = (e) => {
    const n = Ht;
    _o({ favourites: St().filter((l) => l !== e), favHidden: (Ht.favHidden || []).filter((l) => l !== e) }), hn(Ct(e) + " removed from favourites", li(n));
  }, za = (e) => {
    _o({ favourites: [...St().filter((n) => n !== e), e], favHidden: (Ht.favHidden || []).filter((n) => n !== e) }), hn(Ct(e) + " added to favourites");
  };
  ge.addEventListener("click", (e) => {
    var l;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? Ys(!1) : n.hasAttribute("data-tray-tuck") ? (fa = !fa, Ke()) : n.hasAttribute("data-phone-toggle") ? (io = !io, Ke(), io && ((l = ha.querySelector("[data-phone-key]")) == null || l.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (Ks(n.dataset.trayCard), Ke()) : n.dataset.favEye ? ci(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? tr(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (Wn = !Wn, Ke(), Wn && ge.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? za(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (Ba = !Ba, Ke(), Ba && ge.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Ol(n.dataset.tilePick) : n.hasAttribute("data-area-choose") ? di() : n.hasAttribute("data-room-add") ? (Dr = !Dr, Ke()) : n.dataset.roomPick ? Ol("room:" + n.dataset.roomPick) : n.hasAttribute("data-fav-suggest") && _o({ suggest: !ba() }));
  }), ge.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && Ke();
  }), ge.addEventListener("keydown", (e) => {
    var l, t;
    const n = !!((t = (l = e.target).closest) != null && t.call(l, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? Ba : Wn) || (e.stopPropagation(), n ? Ba = !1 : Wn = !1, Ke(), ge.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Qs(e, n, l, t) {
    e.preventDefault();
    const a = e.clientX, o = e.clientY;
    let r = null, d = 0;
    const p = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), h = (x) => {
      if (!r) {
        if (Math.hypot(x.clientX - a, x.clientY - o) < 4) return;
        r = n.cloneNode(!0), r.classList.add("tfTrayGhost"), r.style.width = n.offsetWidth + "px", g.appendChild(r);
      }
      r.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const C = !fa && x.clientX >= ge.getBoundingClientRect().left;
      if (l === "card") {
        const R = B.getBoundingClientRect(), { w: j } = ri(B.clientWidth);
        se = !C && x.clientX >= R.left && x.clientX <= R.right && x.clientY >= R.top + eo ? { key: t, col: Math.max(0, Math.floor((x.clientX - R.left) / (j + me))), row: Math.max(0, Math.floor((x.clientY - R.top - eo) / cn)), fromTray: !0 } : null, d || (d = requestAnimationFrame(() => {
          d = 0, aa();
        }));
        return;
      }
      const L = B.querySelector(".tfDash-favs"), T = L == null ? void 0 : L.getBoundingClientRect();
      if (na = null, T && !C && x.clientX >= T.left && x.clientX <= T.right && x.clientY >= T.top && x.clientY <= T.bottom) {
        let R = 1 / 0;
        L.querySelectorAll('[data-k^="fav:"]').forEach((j, _) => {
          const F = j.getBoundingClientRect(), D = Math.hypot(x.clientX - (F.left + F.width / 2), x.clientY - (F.top + F.height / 2));
          D < R && (R = D, na = { i: _, r: F, after: x.clientX > F.left + F.width / 2 });
        }), na || (na = { i: 0, r: null, after: !1 });
      }
      na != null && na.r ? (p.isConnected || g.appendChild(p), Object.assign(p.style, { left: (na.after ? na.r.right : na.r.left) - 2 + "px", top: na.r.top + 8 + "px", height: na.r.height - 16 + "px" })) : p.remove();
    }, m = () => {
      if (window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m), cancelAnimationFrame(d), r == null || r.remove(), p.remove(), l === "card") {
        if (!r) Ks(t);
        else if (se != null && se.fromTray) {
          aa();
          const R = pn(t) + Fl(t), j = _e(), _ = ao();
          se = null, Mo({ ...j, hidden: j.hidden.filter((F) => F !== t) }, _), hn(R);
        }
        se = null, aa(), oa(), Ke();
        return;
      }
      if (!na) return;
      const x = new Set(Ht.favHidden || []);
      x.delete(t);
      const C = St().filter((R) => R !== t), L = C.filter((R) => !x.has(R)), T = L[Math.min(na.i + (na.after ? 1 : 0), L.length)];
      C.splice(T ? C.indexOf(T) : C.length, 0, t), na = null, _o({ favourites: C, favHidden: [...x] }), hn(Ct(t) + " put back");
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m);
  }
  const tl = {
    sums: 201,
    wx: 364,
    favs: 364,
    areas: 364,
    act: 364,
    energy: 288,
    avg: 288,
    aq: 288,
    pollen: 288,
    radar: 288,
    hourly: 288,
    sun: 288,
    moon: 288,
    uv: 288,
    humidity: 288,
    pressure: 288,
    wind: 288,
    visibility: 288
  }, us = 136, Rd = 288, el = 0.8, al = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ha = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ha.setAttribute("aria-label", "Phone order"), ha.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + gp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(ha);
  let Br = "";
  function pi() {
    var d;
    const e = io && Ne && g.classList.contains("tfBoard") && !fa;
    if (ha.classList.toggle("open", e), ha.toggleAttribute("inert", !e), !e) return;
    const n = rs().filter((p) => !_e().hidden.includes(p.key)), l = n.length, t = (p) => Math.round(p * el * 10) / 10 + "px", a = (p, h) => {
      const m = p.el.classList.contains("tfDac"), x = p.tile ? m ? Rd : us : tl[p.key] || us;
      return '<button class="tfPhoneBlock' + (p.tile ? " tile" : "") + '" type="button" data-phone-key="' + X(p.key) + '" style="min-height:' + t(x) + '" aria-label="' + X(pn(p.key) + ", " + (h + 1) + " of " + l + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (p.tile ? Ae(p.key, _n(p.key)) : Ae(p.key, al[p.key])) + '></span><span class="tfPhoneName">' + X(pn(p.key)) + "</span></button>";
    }, o = '<div class="tfPhoneTitle">' + X(((d = B.querySelector(".tfDashTitle")) == null ? void 0 : d.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + t(tl.sums) + '"><span class="tfPhoneName">' + X(pn("sums")) + "</span></div>" + n.map(a).join("");
    if (ha.querySelector('[data-phone="note"]').innerHTML = _e().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", o === Br) return;
    Br = o;
    const r = ha.querySelector('[data-phone="list"]');
    r.innerHTML = o, rn(r);
  }
  function nl(e, n) {
    var l;
    Gi({ ..._e(), phone: e }), Ke(), n && ((l = ha.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || l.focus({ preventScroll: !0 }));
  }
  const ol = () => [...ha.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function il(e, n) {
    e.preventDefault();
    const l = n.parentElement, t = ha.querySelector(".tfPhoneScreen"), a = ol().join();
    n.classList.add("moving");
    const o = (d) => {
      const p = t.getBoundingClientRect();
      d.clientY > p.bottom - 40 ? t.scrollTop += 12 : d.clientY < p.top + 40 && (t.scrollTop -= 12);
      const h = [...l.querySelectorAll("[data-phone-key]")].find((C) => {
        const L = C.getBoundingClientRect();
        return C !== n && d.clientX >= L.left && d.clientX <= L.right && d.clientY >= L.top && d.clientY <= L.bottom;
      });
      if (!h) return;
      const m = h.getBoundingClientRect(), x = h.classList.contains("tile") ? d.clientX < m.left + m.width / 2 : d.clientY < m.top + m.height / 2;
      l.insertBefore(n, x ? h : h.nextSibling);
    }, r = () => {
      window.removeEventListener("pointermove", o), window.removeEventListener("pointerup", r), window.removeEventListener("pointercancel", r), n.classList.remove("moving");
      const d = ol();
      Br = "", d.join() !== a ? nl(d) : pi();
    };
    window.addEventListener("pointermove", o), window.addEventListener("pointerup", r), window.addEventListener("pointercancel", r);
  }
  ha.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && il(e, n);
  }), ha.addEventListener("click", (e) => {
    var l;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      io = !1, Ke(), (l = ge.querySelector("[data-phone-toggle]")) == null || l.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: t, ...a } = _e();
      Gi(a), Ke();
    }
  }), ha.addEventListener("keydown", (e) => {
    var r, d, p, h;
    if (e.key === "Escape") {
      e.stopPropagation(), io = !1, Ke(), (r = ge.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
      return;
    }
    const n = (h = (p = (d = e.target).closest) == null ? void 0 : p.call(d, "[data-phone-key]")) == null ? void 0 : h.dataset.phoneKey, l = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !l) return;
    e.preventDefault();
    const t = ol(), a = t.indexOf(n), o = a + l;
    o < 0 || o >= t.length || ([t[a], t[o]] = [t[o], t[a]], nl(t, n));
  });
  function zl(e, n) {
    e.preventDefault();
    const l = n.parentElement;
    n.classList.add("moving");
    const t = (o) => {
      const r = [...l.children].find((d) => {
        const p = d.getBoundingClientRect();
        return d !== n && o.clientY >= p.top && o.clientY <= p.bottom;
      });
      if (r) {
        const d = r.getBoundingClientRect();
        l.insertBefore(n, o.clientY < d.top + d.height / 2 ? r : r.nextSibling);
      }
    }, a = () => {
      window.removeEventListener("pointermove", t), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), n.classList.remove("moving");
      const o = new Set(St());
      Ao.favs = null, _o({ favourites: [...l.children].map((r) => r.dataset.trayFav).filter((r) => o.has(r)) });
    };
    window.addEventListener("pointermove", t), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", a);
  }
  ge.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), l = e.target.closest(".tfTrayFav");
    n ? Qs(e, n, "card", n.dataset.trayCard) : l && e.target.closest(".tfTrayGrip") ? zl(e, l) : l != null && l.classList.contains("off") && !e.target.closest("button") && Qs(e, l, "fav", l.dataset.trayFav);
  });
  function Va(e) {
    if (!Ne || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), l = n && un().find((Nt) => Nt.el === n);
    if (!l || ii.includes(l.key)) return;
    const t = to.get(l.key), { w: a } = ri(B.clientWidth);
    if (!t) return;
    e.preventDefault(), qn();
    const o = e.clientX, r = e.clientY;
    let d = !1, p = 0;
    const h = Ve.drag, m = Ia();
    let x = 0, C = 0, L = 0, T = 0, R = 0, j = 0, _ = m || h.stick === 0, F = 0;
    const D = (Nt, wt, Et, Pt) => {
      n.style.transform = "translate(" + L.toFixed(2) + "px," + T.toFixed(2) + "px) rotate(" + Nt.toFixed(2) + "deg) rotate(" + wt + "rad) scale(" + Et.toFixed(4) + "," + Pt.toFixed(4) + ") rotate(" + -wt + "rad)";
    }, ft = () => {
      if (F = requestAnimationFrame(ft), m) {
        L = x, T = C, D(0, 0, 1, 1);
        return;
      }
      if (!_) {
        const Me = Math.min(Math.hypot(x, C) / Math.max(1, h.stick), 1);
        L = x * 0.35, T = C * 0.35, D(0, Math.atan2(C, x), 1 + 0.155 * Me, 1 - 0.1 * Me);
        return;
      }
      R = Bc(R, x - L, h.pull / 100, h.keep / 100), j = Bc(j, C - T, h.pull / 100, h.keep / 100), L += R, T += j;
      const Nt = Math.hypot(R, j), wt = Math.min(Nt / 48, 1), Et = Math.max(-5, Math.min(h.tilt, R * 0.32)), Pt = 1 + h.lift / 100;
      D(Et, Math.atan2(j, R), Pt * (1 + 0.1 * wt), Pt * (1 - 0.063 * wt));
    }, Bt = (Nt) => {
      if (x = Nt.clientX - o, C = Nt.clientY - r, !d) {
        if (Math.hypot(x, C) < 4) return;
        d = !0, se = { key: l.key, col: t.col, row: t.row }, n.classList.add("tfDragging", "mvDrag"), F = requestAnimationFrame(ft);
      }
      !_ && Math.hypot(x, C) > h.stick && (_ = !0, R = x * 0.085, j = C * 0.085), se.col = Math.round((t.x + x) / (a + me)), se.row = Math.round((t.y + C - eo) / cn), p || (p = requestAnimationFrame(() => {
        p = 0, aa();
      }));
    }, ht = () => {
      var kt;
      if (window.removeEventListener("pointermove", Bt), window.removeEventListener("pointerup", ht), window.removeEventListener("pointercancel", ht), !d) return;
      const Nt = (Yt) => {
        Yt.preventDefault(), Yt.stopImmediatePropagation();
      };
      window.addEventListener("click", Nt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Nt, { capture: !0 }), 300), cancelAnimationFrame(p), cancelAnimationFrame(F);
      const wt = n.getBoundingClientRect(), Et = l.key;
      n.style.transition = "none", aa(), n.classList.remove("tfDragging", "mvDrag"), n.style.transform = "", se = null, Mo(_e(), ao()), aa(), oa();
      const Pt = (kt = un().find((Yt) => Yt.key === Et)) == null ? void 0 : kt.el;
      if (requestAnimationFrame(() => {
        n.style.transition = "", Pt && (Pt.style.transition = "");
      }), !Pt || m) return;
      Pt.style.transition = "none";
      const Me = Pt.getBoundingClientRect(), ra = wt.left + wt.width / 2 - (Me.left + Me.width / 2), De = wt.top + wt.height / 2 - (Me.top + Me.height / 2);
      Pt.style.zIndex = "20", Pt.animate([{ transform: "translate(" + ra + "px," + De + "px) scale(" + (1 + h.lift / 100) + ")" }, { transform: "none" }], { duration: h.slide, easing: Ie.land }).finished.then(() => {
        Pt.style.zIndex = "", Pf(Pt);
      }, () => {
        Pt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Bt), window.addEventListener("pointerup", ht), window.addEventListener("pointercancel", ht);
  }
  function $e(e = !1) {
    const n = B == null ? void 0 : B.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const l = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === l) return;
    const t = !n.dataset.drawn;
    n.dataset.drawn = l;
    const a = Qr.find((o) => o.id === n.dataset.graph);
    a ? ts(n, a).then(() => {
      (e || t) && Sr(n);
    }) : Hr(n.dataset.graph, n).then(() => {
      e && ti(n);
    });
  }
  function fs() {
    var d, p, h;
    At = fr.model(s()), va(), M = At.states, M[(d = Ht.sources) == null ? void 0 : d.grid] && (At.grid = Ht.sources.grid), M[(p = Ht.sources) == null ? void 0 : p.alarm] && (At.security.alarms = [Ht.sources.alarm]), mt.forEach((m, x) => {
      const C = M[x], L = (C == null ? void 0 : C.attributes) || {};
      if (!C || Date.now() - m.at > 2 * 60 * 1e3) {
        mt.delete(x);
        return;
      }
      m.pos != null && C.state !== "opening" && C.state !== "closing" && Math.abs(on(x) - m.pos) < 1 && delete m.pos, m.tilt != null && Math.abs((L.current_tilt_position ?? -1) - m.tilt) < 1 && delete m.tilt, m.pos == null && m.tilt == null && mt.delete(x);
    });
    const e = [];
    let n = 0;
    const l = jt();
    _t = l.filter((m) => m.room).map((m) => m.room), _t.some((m) => m.id === A) || (A = ((h = _t[0]) == null ? void 0 : h.id) || null);
    const t = N === "weather" ? { key: "weather", name: "Weather" } : N && l.find((m) => m.key === N);
    if (t || (N = null), g.classList.toggle("tfAreaOpen", !!t), g.classList.toggle("tfWeatherOpen", (t == null ? void 0 : t.key) === "weather"), g.classList.toggle("tfDash", !t), oe = /* @__PURE__ */ new Map(), At.rooms.forEach((m) => [...m.actions, ...m.plugs, ...m.readings, ...m.openings, ...m.solar, ...m.plants.flatMap((x) => [x.id, ...x.readings])].forEach((x) => oe.set(x, m.name))), !t) return es(e, Nn());
    if (e.push({ key: "areahead", html: Pd(t, ++n) }), t.key === "weather")
      return e.weather = ++n, e;
    const a = t.ids, o = t.room ? t.room.id : t.key, r = t.room;
    return r != null && r.solar.length && e.push({ key: "energy:" + r.id, html: ke(r, ++n) }), r && (r.readings.length || r.plugs.length || r.power != null) && e.push({ key: "readings:" + r.id, html: Dn(r, ++n) }), r == null || r.plants.forEach((m) => e.push({ key: "plant:" + m.id, html: ln(m, ++n) })), a.length && e.push({ key: "block:" + o, order: ++n, tiles: a.map((m) => ({ key: m, html: Yo(m) })) }), e;
  }
  const Pd = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + np + '</button><div class="settingsTitle">' + X(e.name) + "</div></div>";
  let rl = 0, Vl = null;
  const sl = (e) => e === "weather" ? En.wx : e.startsWith("room:") && B.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || B.querySelector(".tfAreas");
  function ll(e) {
    var n, l;
    N || (rl = Ga().scrollTop, Vl = ((n = sl(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), N = e, e.startsWith("room:") && (A = e.slice(5)), so(), Ga().scrollTop = 0, (l = B.querySelector("[data-area-back]")) == null || l.focus({ preventScroll: !0 });
  }
  let er = null;
  function Gl(e, n) {
    if (er == null || er(), n == null) return;
    const l = Ga(), t = performance.now() + 1500, a = ["wheel", "touchstart", "pointerdown", "keydown"];
    let o = 0;
    const r = () => {
      cancelAnimationFrame(o), a.forEach((p) => window.removeEventListener(p, r, !0)), er = null;
    }, d = () => {
      const p = e();
      if (p != null && p.isConnected) {
        const h = p.getBoundingClientRect().top - n;
        Math.abs(h) > 0.5 && (l.scrollTop += h);
      }
      performance.now() < t ? o = requestAnimationFrame(d) : r();
    };
    a.forEach((p) => window.addEventListener(p, r, { capture: !0, passive: !0 })), er = r, d();
  }
  function ro() {
    var l;
    const e = N;
    N = null, so(), Ga().scrollTop = rl, Gl(() => sl(e), Vl);
    const n = e.startsWith("room:") ? B.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || B.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? En.wx.querySelector(".wbOpenPage") : B.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (l = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || l.focus({ preventScroll: !0 });
  }
  const Ul = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + X(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Yl = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((l) => l.key).join(",") + ")" : "")).join(";");
  function Ga() {
    for (let e = g.parentElement || g.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function hs(e) {
    const n = Ga(), l = (d) => {
      const p = d.getBoundingClientRect();
      return p.height && p.bottom > 0 && p.top < window.innerHeight;
    }, t = [...B.children, ...B.querySelectorAll(".tfDashTiles > *")].find((d) => !d.matches(".tfDashTiles") && l(d)), a = t == null ? void 0 : t.dataset.k, o = t == null ? void 0 : t.getBoundingClientRect().top;
    e();
    const r = t != null && t.isConnected ? t : a && B.querySelector('[data-k="' + CSS.escape(a) + '"]');
    r != null && r.isConnected && o != null && (n.scrollTop += r.getBoundingClientRect().top - o);
  }
  function so() {
    if (!y || !B) return;
    const e = fs(), n = (a) => {
      var o;
      return (((o = a.closest("[data-k]")) == null ? void 0 : o.dataset.k) || "") + "|" + a.dataset.iconFor + "|" + (a.dataset.iconName || "");
    }, l = /* @__PURE__ */ new Map();
    B.querySelectorAll("[data-tf] [data-icon-for]").forEach((a) => {
      a.firstElementChild && (l.get(n(a)) || l.set(n(a), []).get(n(a))).push(a.firstElementChild);
    }), B.querySelectorAll("[data-tf]").forEach((a) => a.remove()), ya.clear();
    const t = document.createElement("div");
    t.innerHTML = e.map((a) => a.tiles ? Ul(a) : a.html).join(""), e.forEach((a) => a.tiles ? a.tiles.forEach((o) => ya.set(o.key, o.html)) : ya.set(a.key, a.html)), Vr = Yl(e), t.querySelectorAll("[data-icon-for]").forEach((a) => {
      var r;
      const o = !a.firstElementChild && ((r = l.get(n(a))) == null ? void 0 : r.shift());
      o && a.appendChild(o);
    }), B.append(...t.children), Ai(e.weather), It(), So.disconnect(), aa(), rn(B), Ln(B), ye(B), Y(), Mt && Hr(Mt.id), vl(), vi(), ys(), requestAnimationFrame(lt);
  }
  const ui = (e) => {
    var l;
    const n = i.activeElement && e.contains(i.activeElement) ? i.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (l = n.dataset) == null ? void 0 : l.act };
  }, ar = (e, n) => {
    var l;
    n && ((l = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || l.focus({ preventScroll: !0 }));
  };
  function ms(e, n) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(n), n;
    const l = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), t = n.querySelector(":scope > .tfDacPad");
    if (l)
      return (t == null ? void 0 : t.dataset.dac) !== l.dataset.dac ? (e.replaceWith(n), n) : (e.querySelector(":scope > .tfActionHead").replaceWith(n.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", n.classList.contains("on")), ["data-light", "data-tone"].forEach((r) => n.hasAttribute(r) ? e.setAttribute(r, n.getAttribute(r)) : e.removeAttribute(r)), [...e.style].filter((r) => r.startsWith("--") && !r.startsWith("--tf-")).forEach((r) => e.style.removeProperty(r)), [...n.style].forEach((r) => e.style.setProperty(r, n.style.getPropertyValue(r))), e);
    const a = (r) => {
      var d;
      return ((d = r.dataset) == null ? void 0 : d.iconFor) !== void 0;
    };
    if (a(e) && a(n) && !n.children.length && e.dataset.iconFor === n.dataset.iconFor && e.dataset.iconName === n.dataset.iconName && e.firstElementChild)
      return [...e.attributes].forEach((r) => {
        n.hasAttribute(r.name) || e.removeAttribute(r.name);
      }), [...n.attributes].forEach((r) => {
        e.getAttribute(r.name) !== r.value && e.setAttribute(r.name, r.value);
      }), e;
    if (e.tagName !== n.tagName || e.children.length !== n.children.length)
      return e.replaceWith(n), n;
    [...e.attributes].forEach((r) => {
      n.hasAttribute(r.name) || e.removeAttribute(r.name);
    }), [...n.attributes].forEach((r) => e.setAttribute(r.name, r.value));
    const o = [...n.children];
    return [...e.children].forEach((r, d) => ms(r, o[d])), e;
  }
  function dl(e, n) {
    const l = document.createElement("div");
    l.innerHTML = n;
    const t = ui(e), a = ms(e, l.firstElementChild);
    rn(a), Ln(a), ye(a), ar(a, t);
  }
  function oa() {
    !y || !B || se || hs(mn);
  }
  function mn() {
    if (!B.querySelector("[data-tf]")) {
      so();
      return;
    }
    const e = fs();
    if (Yl(e) !== Vr) {
      so();
      return;
    }
    const n = (l) => [...st.keys()].some((t) => {
      const a = t.slice(t.indexOf("|") + 1);
      return l === a || l.endsWith(":" + a);
    });
    e.forEach((l) => (l.tiles || [l]).forEach((t) => {
      if (ya.get(t.key) === t.html || n(t.key)) return;
      const a = B.querySelector('[data-k="' + CSS.escape(t.key) + '"]');
      if (a) {
        if (ya.set(t.key, t.html), Mt && Mt.key === t.key && a.querySelector(".tfOpen")) {
          a.querySelector(".tfOpen .activityRowMeta").textContent = Yn(Mt.id);
          return;
        }
        dl(a, t.html), Mt && Mt.key === t.key && Hr(Mt.id), t.key.startsWith("energy:") && vl();
      }
    })), vi(), ys(), Rn(), Y(), zt == null || zt.update(), je == null || je.forEach((l) => l.update()), g.classList.contains("tfDash") && Tr(), requestAnimationFrame(lt);
  }
  const fi = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Ut(e.color_mode)]],
    climate: (e) => [["Current temperature", Qe(e.current_temperature) + " °C"], ["Target", Qe(e.temperature) + " °C"], ["Action", Ut(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Ut(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Ut(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Qe(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Ut(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, Nd = (e) => Ro(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Id(e, n = {}, l = !1) {
    return '<div class="tfMoreList">' + e.map((t) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + X(t.name) + '</div><div class="tfMoreTiles' + (l ? " single" : "") + '">' + t.ids.map((a) => Sn(a, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const Dt = document.createElement("div");
  Dt.className = "tfMoreBackdrop", Dt.hidden = !0, g.appendChild(Dt);
  const gn = document.createElement("div");
  gn.className = "tfMoreBackdrop tfMoreUnder", gn.hidden = !0, g.insertBefore(gn, Dt);
  const cl = (e, n) => {
    for (let l = e; l && l !== Dt; l = l.parentElement) {
      const t = getComputedStyle(l).overflowY;
      if ((t === "auto" || t === "scroll") && l.scrollHeight > l.clientHeight + 1 && (n < 0 ? l.scrollTop > 0 : l.scrollTop + l.clientHeight < l.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let ma = null;
  Dt.addEventListener("touchstart", (e) => {
    ma = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), Dt.addEventListener("touchmove", (e) => {
    var a, o;
    if (!ma || e.touches.length > 1 || (o = (a = e.target).closest) != null && o.call(a, "input,textarea,select")) return;
    const n = e.touches[0], l = ma.x - n.clientX, t = ma.y - n.clientY;
    ma = { x: n.clientX, y: n.clientY }, Math.abs(t) >= Math.abs(l) && !cl(e.target, t) && e.preventDefault();
  }, { passive: !1 }), Dt.addEventListener("wheel", (e) => {
    var n, l;
    Math.abs(e.deltaX) > Math.abs(e.deltaY) && ((l = (n = e.target).closest) != null && l.call(n, "[data-more-pages]")) || cl(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  const Zl = () => window.innerWidth <= 620;
  let ia = null;
  Dt.addEventListener("pointerdown", (e) => {
    const n = Dt.querySelector(".tfMorePair");
    !Zl() || !n || !n.contains(e.target) || !e.isPrimary || Dt._closing || e.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (ia = { x: e.clientX, y: e.clientY, t: performance.now(), dy: 0, v: 0, pair: n, from: e.target, grab: e.target.matches(".tfMore") || !!e.target.closest(".tfMoreHead") });
  }, !0), Dt.addEventListener("pointermove", (e) => {
    if (!ia || !e.isPrimary) return;
    const n = e.clientY - ia.y, l = performance.now();
    if (!ia.on) {
      if (Math.abs(e.clientX - ia.x) > 8 || n < -8 || !ia.grab && cl(ia.from, -1)) {
        ia = null;
        return;
      }
      if (n < 8) return;
      ia.on = !0;
      try {
        Dt.setPointerCapture(e.pointerId);
      } catch {
      }
    }
    ia.v = (n - ia.dy) / Math.max(1, l - ia.t), ia.dy = n, ia.t = l, ia.pair.style.transform = "translateY(" + Math.max(0, n) + "px)";
  });
  const nr = (e) => {
    if (!ia || !e.isPrimary) return;
    const n = ia;
    if (ia = null, !n.on) return;
    const l = (h) => {
      h.preventDefault(), h.stopImmediatePropagation();
    };
    window.addEventListener("click", l, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", l, { capture: !0 }), 300);
    const t = e.type === "pointerup" && (n.dy > 120 || n.v > 0.5), a = "translateY(" + Math.max(0, n.dy) + "px)";
    if (n.pair.style.transform = "", !t || Ia()) {
      t ? xa() : n.pair.animate([{ transform: a }, { transform: "none" }], { duration: 320, easing: Ie.spring });
      return;
    }
    const o = k;
    Dt._closing = !0, Dt.style.pointerEvents = "none", Dt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ie.exit, fill: "forwards" });
    const r = n.pair.animate([{ transform: a }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ie.exit, fill: "forwards" });
    let d = !1;
    const p = () => {
      d || (d = !0, Dt._closing = !1, Dt.style.pointerEvents = "", Dt.getAnimations().forEach((h) => h.cancel()), n.pair.getAnimations().forEach((h) => h.cancel()), k === o && xa());
    };
    r.finished.then(p, p), setTimeout(p, 300);
  };
  Dt.addEventListener("pointerup", nr), Dt.addEventListener("pointercancel", nr);
  function hi() {
    const e = Dt.querySelector(".tfMorePair"), n = Dt.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", hi, { passive: !0 }), y && te();
  let vn = [];
  const Hd = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function gs(e) {
    const n = (p, h = "") => '<div class="tfMoreHead">' + (k != null && k.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + X(p) + "</div>" + h + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>", l = (p, h) => '<div class="tfMoreNow"><div class="tfMoreState">' + X(p) + "</div></div>", t = Id;
    if (e === "favourites") {
      const p = St(), h = new Set(p), m = [{ name: "Starred", ids: p }, { name: "Home", ids: At.homeVacuums }, { name: "Security", ids: [...At.security.alarms, ...At.security.locks] }, ...At.rooms.map((x) => ({ name: x.name, ids: [...x.actions, ...x.plugs] }))].map((x, C) => C ? { ...x, ids: x.ids.filter((L) => !h.has(L)) } : x).filter((x) => x.ids.length);
      return [n("Favourites"), l(p.length ? p.length + " starred" : "None starred"), t(m, { star: !0 }, !0)];
    }
    const a = (p, { name: h = "", alert: m = !1, plain: x = !1 } = {}) => {
      const C = x ? [] : p.filter((R) => Tl.includes(R.split(".")[0])), L = p.filter((R) => !C.includes(R)), T = (R) => R.startsWith("vacuum.") && Wt(R).battery_level != null ? Wt(R).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (h ? '<div class="tfMoreGroupName">' + X(h) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((R) => Yo(R, !0)).join("") + L.map((R) => Sn(R, { plain: x, alert: m, say: x ? T(R) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const p = Nn().find((C) => C.key === e.slice(8));
      if (!p) return null;
      const h = p.key === "light" ? (p.groups || []).flatMap((C) => C.ids) : [], m = h.some((C) => {
        var L;
        return ((L = M[C]) == null ? void 0 : L.state) === "on";
      }), x = h.length ? '<button class="primary" type="button" data-acts="' + sn(h.map((C) => ["light", m ? "turn_off" : "turn_on", C])) + '">' + (m ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(p.name), '<div class="tfMoreNowRow">' + l(p.value) + x + "</div>", ...(p.groups || []).map((C) => a(C.ids, { name: C.name === p.name ? "" : C.name, alert: C.alert, plain: p.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, p, h] = e.split(":"), m = At.rooms.find((L) => L.id === p), x = m && v(m).find((L) => L.key === h);
      if (!x) return null;
      const C = x.acts ? '<button class="primary" type="button" data-acts="' + sn(x.acts) + '">' + (x.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(m.name + " " + x.label.toLowerCase()), '<div class="tfMoreNowRow">' + l(x.value) + C + "</div>", a(w(m, h))];
    }
    const o = e.split(".")[0];
    M[e];
    const r = Tl.includes(o) ? Jn(e) : { sections: [] }, d = (k == null ? void 0 : k.page) || 0;
    return [
      vs(e, r),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + bs(e) + (o === "plant" ? Ir(e).join("") : "") + r.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + $l(e) + "</section></div>",
      '<div class="tfMoreDots" role="tablist" aria-label="Pages">' + ["Control", "Info"].map((p, h) => '<button type="button" role="tab" aria-selected="' + (h === d) + '" aria-label="' + p + '" data-more-page="' + h + '"' + (h === d ? "" : ' tabindex="-1"') + "></button>").join("") + "</div>"
    ];
  }
  function vs(e, n, l) {
    var r, d, p, h, m;
    const t = (r = At.areaOf) == null ? void 0 : r.call(At, e), a = t && (((d = At.rooms.find((x) => x.id === t)) == null ? void 0 : d.name) || ((m = (h = (p = s()) == null ? void 0 : p.areas) == null ? void 0 : h[t]) == null ? void 0 : m.name)) || "", o = n.button ? Bn(e, n) : '<div class="tfIcon"' + Ae(e, n.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (n.on ? " on" : "") + '"' + (n.tone ? ' data-tone="' + n.tone + '"' : "") + nn(e) + ">" + (k != null && k.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + o + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + X(Ct(e)) + "</span>" + (a ? '<span class="activityRowMeta">' + X(a) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>";
  }
  const mi = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function bs(e) {
    const n = e.split(".")[0];
    if (mi.includes(n) || n === "light" && !Ea(e)) {
      const a = Tl.includes(n) ? Jn(e) : null;
      return a != null && a.button ? '<div class="tfMoreSpace tfMoreSwitch' + (a.on ? " on" : "") + '"' + (a.tone ? ' data-tone="' + a.tone + '"' : "") + nn(e) + ">" + Bn(e, a) + "</div>" : "";
    }
    if (n === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + X(e) + '"></div></div>';
    if (n === "light" && Ea(e)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + X(e) + '"></div></div>';
    const { big: l, lines: t } = Kl(e);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ta("pos", e) != null ? " live" : "") + '"><span class="tfMoreNum">' + X(l[0]) + "</span>" + (l[1] ? '<span class="tfMoreUnit">' + X(l[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + t.map(([a, o]) => '<div class="tfMoreFact"><span>' + X(a) + "</span><span>" + X(o) + "</span></div>").join("") + "</div></div>";
  }
  function Kl(e) {
    var m;
    const n = M[e], l = Wt(e), t = e.split(".")[0], a = (((m = fi[t]) == null ? void 0 : m.call(fi, l)) || []).filter(([, x]) => x != null && x !== ""), o = (x) => {
      const C = a.findIndex(([L]) => L === x);
      return C < 0 ? null : a.splice(C, 1)[0][1];
    }, r = (x) => {
      const C = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return C ? [C[1], C[2]] : [String(x), ""];
    }, d = () => [Ut(String(n.state).replace(/_/g, " ")), ""];
    let p;
    t === "light" ? (o("Brightness"), p = n.state === "on" && kn(e) ? [String(Se(n)), "%"] : d()) : t === "climate" ? p = r(o("Current temperature") || Qe(l.current_temperature) + " °C") : t === "cover" ? (o("Position"), p = l.current_position != null ? [String(on(e)), "%"] : d()) : t === "humidifier" ? p = r(o("Current humidity") || n.state) : t === "vacuum" ? p = r(o("Battery") || n.state) : t === "plant" ? p = r(o("Moisture") || n.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(t) ? p = d() : p = r(n.state + (l.unit_of_measurement ? " " + l.unit_of_measurement : ""));
    const h = a.length ? a.slice(0, 4) : [["State", Re(e)]];
    return { big: p, lines: h };
  }
  function $l(e) {
    var h, m, x, C, L, T, R;
    const n = M[e], l = s(), t = (h = l == null ? void 0 : l.entities) == null ? void 0 : h[e], a = t != null && t.device_id ? (m = l == null ? void 0 : l.devices) == null ? void 0 : m[t.device_id] : null, o = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + X(e) + '" role="img" aria-label="' + X(Ct(e)) + ', last 24 hours"></svg></div>', r = (x = At.areaOf) == null ? void 0 : x.call(At, e), d = r && (((C = At.rooms.find((j) => j.id === r)) == null ? void 0 : C.name) || ((T = (L = l == null ? void 0 : l.areas) == null ? void 0 : L[r]) == null ? void 0 : T.name)) || "", p = [
      ...((R = fi[e.split(".")[0]]) == null ? void 0 : R.call(fi, Wt(e))) || [],
      ["Changed", n.last_changed && ga(Date.parse(n.last_changed))],
      ["Area", d],
      ["Device", a && (a.name_by_user || a.name)],
      ["Integration", (t == null ? void 0 : t.platform) && Ut(t.platform.replace(/_/g, " "))],
      ["Entity", e]
    ].filter(([, j]) => j != null && j !== "");
    return o + '<div class="tfMoreRows">' + p.map(([j, _]) => '<div class="tfMoreRow"><span>' + X(j) + "</span><span>" + X(_) + "</span></div>").join("") + "</div>" + Nd(e) + (a ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + X(t.device_id) + '"><span>Device page</span>' + vp + "</button>" : "");
  }
  const gi = () => "";
  let ws = "";
  function Oe(e) {
    var n;
    k && (k.details = e, vi(), (n = Dt.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const xs = (e) => {
    const n = M[e], l = on(e), t = qo(e);
    return { kind: tc(n), name: Ct(e), text: Re(e), pos: l, target: Math.abs(t - l) > 0.5 ? t : null, moving: n.state === "opening" || n.state === "closing", tilt: Bi(e) ?? 100, canSet: xe(e, cp) };
  };
  function Ln(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const l = n.dataset.coverArt, t = n.dataset.artKey || "more:" + l;
      let a = Ft.get(t);
      a || (a = jh({ onMove: (o) => Bo(l, o), onSet: (o) => {
        Bo(l, o), qr("pos", l);
      } }), a.coverId = l, Ft.set(t, a)), n.replaceWith(a.el), a.update(xs(l));
    });
  }
  const pl = (e) => [...Ft.values()].filter((n) => n.coverId === e), ul = () => Ft.forEach((e) => {
    M[e.coverId] && e.update(xs(e.coverId));
  }), ys = () => {
    Ft.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), Ft.delete(n));
    }), ul();
  };
  function vi() {
    var o, r;
    if (!k || !(Hd(k.id) || M[k.id])) {
      Dt.hidden = !0;
      return;
    }
    if ([...st.keys()].some((d) => d.endsWith("|" + k.id))) {
      ul();
      return;
    }
    const e = gs(k.id), n = Dt.querySelector(".tfMore");
    if (!e) {
      Nr();
      return;
    }
    const l = ui(Dt), t = gi(k.id), a = k.frame ? k.frame.wide : k.id.startsWith("summary:") || k.id.startsWith("group:");
    if (Dt.hidden || !n || e.length !== vn.length || n.classList.contains("wide") !== a) {
      const d = ks ? k.scroll || 0 : !Dt.hidden && n ? n.scrollTop : 0;
      if (Dt.innerHTML = '<div class="tfMorePair' + (Dt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (a ? " wide" : "") + '"' + (k.frame ? ' style="height:' + k.frame.h + 'px"' : "") + ' tabindex="-1">' + e.join("") + "</section></div>", ws = t, Dt.classList.toggle("wide", a), Dt.hidden = !1, hi(), Ln(Dt), ye(Dt), rn(Dt), Dt.querySelectorAll("[data-day]").forEach((p) => ml(p.dataset.day, p, k.at)), bn(Dt), d && (Dt.querySelector(".tfMore").scrollTop = d), Rr(), ar(Dt, l), !Dt.contains(i.activeElement)) {
        const p = Dt.querySelector("[data-more-close]");
        (o = p != null && p.offsetParent ? p : Dt.querySelector(".tfMore")) == null || o.focus({ preventScroll: !0 });
      }
    } else {
      if (e.forEach((d, p) => {
        var x, C;
        if (d === vn[p] || d.includes("data-cover-art") || n.children[p].contains((C = (x = i.activeElement) == null ? void 0 : x.matches) != null && C.call(x, "input,select") ? i.activeElement : null) || [...st.keys()].some((L) => n.children[p].querySelector('[data-drag="' + CSS.escape(L) + '"]'))) return;
        const h = document.createElement("div");
        h.innerHTML = d;
        const m = ms(n.children[p], h.firstElementChild);
        rn(m), bn(m), ye(m);
      }), t !== ws) {
        const d = Dt.querySelector(".tfMoreSideBody");
        d && (d.innerHTML = t), ws = t;
      }
      n.querySelectorAll("[data-day]").forEach((d) => {
        d.innerHTML || ml(d.dataset.day, d, k.at);
      }), Rr(), Dt.contains(i.activeElement) || ar(Dt, l);
    }
    (r = Dt.querySelector(".tfMorePair")) == null || r.classList.toggle("details", !!(k.details && t)), vn = e, ul();
  }
  function Rr() {
    const e = Dt.querySelector("[data-more-pages]");
    !e || !k || (e.scrollTo({ left: (k.page || 0) * e.clientWidth, behavior: "instant" }), hl(), fl(e));
  }
  function fl(e) {
    const n = e.children[(k == null ? void 0 : k.page) || 0];
    n && (e.style.height = n.scrollHeight + "px");
  }
  function hl() {
    const e = (k == null ? void 0 : k.page) || 0;
    Dt.querySelectorAll("[data-more-page]").forEach((n) => {
      const l = Number(n.dataset.morePage) === e;
      n.setAttribute("aria-selected", String(l)), n.tabIndex = l ? 0 : -1;
    });
  }
  function Pr(e, n) {
    var t, a;
    const l = Dt.querySelector("[data-more-pages]");
    !l || !k || (k.page = Math.max(0, Math.min(1, e)), l.scrollTo({ left: k.page * l.clientWidth, behavior: (t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), hl(), fl(l), (a = Dt.querySelector('[data-more-page="' + k.page + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  let Ua = 0;
  Dt.addEventListener("scroll", (e) => {
    var l;
    const n = e.target;
    !((l = n.matches) != null && l.call(n, "[data-more-pages]")) || !k || (clearTimeout(Ua), Ua = setTimeout(() => {
      const t = Math.round(n.scrollLeft / Math.max(1, n.clientWidth));
      t !== (k.page || 0) && (k.page = t, hl(), fl(n));
    }, 80));
  }, !0), setInterval(() => {
    k && vi();
  }, 15 * 1e3);
  function bi(e, n) {
    var a, o;
    const l = !!(k && n && Dt.contains(n)), t = l && Dt.querySelector(".tfMore");
    if (l && (k.scroll = t.scrollTop), l && !k.under) {
      const r = Dt.querySelector(".tfMorePair"), d = { more: k, parts: vn, opener: n };
      r.classList.add("still"), r.style.transform = "", r.inert = !0, gn.innerHTML = "", gn.appendChild(r), gn.classList.toggle("wide", Dt.classList.contains("wide")), gn.hidden = !1, Dt.hidden = !0, Dt.innerHTML = "", k = { id: e, opener: n, back: null, frame: null, under: d, at: Number((a = n == null ? void 0 : n.dataset) == null ? void 0 : a.at) || null }, Ms();
      return;
    }
    k = { id: e, opener: l ? k.opener : n, back: l ? k : null, frame: l ? k.frame || { wide: t.classList.contains("wide"), h: t.offsetHeight } : null, under: l ? k.under : null, at: Number((o = n == null ? void 0 : n.dataset) == null ? void 0 : o.at) || null }, Ms();
  }
  let ks = !1;
  function Ms() {
    vn = [], ks = !Dt.hidden, Ft.forEach((e, n) => {
      n !== k.id && Dt.contains(e.el) && (e.destroy(), Ft.delete(n));
    }), vi(), ks = !1;
  }
  function Nr() {
    if (!k) return;
    const e = k;
    _f(Dt, () => {
      k === e && xa();
    });
  }
  function xa() {
    var t, a, o, r, d, p, h, m;
    const e = k == null ? void 0 : k.opener, n = k == null ? void 0 : k.under;
    k = null, Ft.forEach((x, C) => {
      Dt.contains(x.el) && (x.destroy(), Ft.delete(C));
    }), Ma.forEach((x, C) => {
      C.startsWith("more:") && Ma.delete(C);
    }), Dt.hidden = !0, Dt.innerHTML = "";
    const l = { preventScroll: !0 };
    if (n) {
      const x = gn.firstElementChild;
      k = n.more, vn = n.parts, x && (x.inert = !1, Dt.appendChild(x)), Dt.classList.toggle("wide", gn.classList.contains("wide")), gn.hidden = !0, gn.innerHTML = "", Dt.hidden = !1;
      const C = Dt.querySelector(".tfMore");
      C && (C.scrollTop = k.scroll || 0), vi(), (a = (t = n.opener) != null && t.isConnected ? n.opener : Dt.querySelector("[data-more-close]")) == null || a.focus(l);
      return;
    }
    e != null && e.isConnected ? e.focus(l) : (o = e == null ? void 0 : e.dataset) != null && o.more ? (r = B.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || r.focus(l) : (d = e == null ? void 0 : e.dataset) != null && d.summary ? (p = B.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || p.focus(l) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((m = B.querySelector("[data-favs-edit]")) == null || m.focus(l));
  }
  const Do = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Ir(e) {
    const n = String(Wt(e).problem || ""), l = "sensor." + e.split(".")[1] + "_";
    return n === "none" ? [] : n.split(",").map((t) => t.trim().split(" ")).map(([t, a]) => {
      const o = Do[t], r = l + o;
      if (!o || !M[r] || !Wr[o]) return "";
      const d = Wt(r).unit_of_measurement || "", [p, h] = Wr[o], m = a === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + X(Ct(r)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + X(r) + '" data-guide="' + (m ? p : h) + '" data-guide-word="' + X("Wants " + (m ? "" : "up to ") + (m ? p : h).toLocaleString() + (d === "%" ? "%" : d ? " " + d : "") + (m ? " or more" : "")) + '" role="img" aria-label="' + X(Ct(r)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const bn = (e) => e.querySelectorAll("[data-plant-graph]").forEach((n) => Hr(n.dataset.plantGraph, n, { guide: Number(n.dataset.guide), guideWord: n.dataset.guideWord }).then(() => ti(n)));
  function lo(e, n, l, t = {}) {
    const a = n.map((j) => j[1]).concat(t.guide != null ? [t.guide] : []), o = t.zero ? 0 : Math.min(...a), r = Math.max(...a), d = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), h = 8, m = p - 20, x = Date.now() - 24 * 3600 * 1e3, C = 24 * 3600 * 1e3, L = (j) => Math.max(0, Math.min(d, (j - x) / C * d)), T = (j) => r === o ? (h + m) / 2 : m - (j - o) / (r - o) * (m - h);
    let R = "M" + L(n[0][0]).toFixed(1) + " " + T(n[0][1]).toFixed(1);
    if (n.length > 2) R = Op(n.map((j) => [L(j[0]), T(j[1])]));
    else for (let j = 1; j < n.length; j++) R += t.smooth ? "L" + L(n[j][0]).toFixed(1) + " " + T(n[j][1]).toFixed(1) : "H" + L(n[j][0]).toFixed(1) + "V" + T(n[j][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + d + " " + p), e.setAttribute("aria-label", l), e.innerHTML = qp(d, h, m) + '<path d="' + R + "V" + m + "H" + L(n[0][0]).toFixed(1) + 'Z" fill="' + (t.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + R + '" fill="none" stroke="' + (t.colour || "var(--primary)") + '" stroke-width="' + Ve.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (p - 4) + '">24 h ago</text><text x="' + d + '" y="' + (p - 4) + '" text-anchor="end">Now</text>' + (t.guide != null ? '<line class="tfGuide" x1="0" x2="' + d + '" y1="' + T(t.guide).toFixed(1) + '" y2="' + T(t.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + d + '" y="' + (T(t.guide) < 20 ? T(t.guide) + 14 : T(t.guide) - 5).toFixed(1) + '" text-anchor="end">' + X(t.guideWord || "") + "</text>" : "");
  }
  const Ss = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, or = (e, n) => {
    const l = e.split(".")[0];
    return Ss[l] ? Ss[l].includes(n) : l === "alarm_control_panel" || l === "climate" || l === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, Xl = (e) => {
    const n = e.split(".")[0], l = Wt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[l] || (ud.includes(l) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, Cs = /* @__PURE__ */ new Map();
  let Jl = 0;
  async function Ts(e) {
    let n = Cs.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let a = [];
      try {
        const o = await P({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        a = ((o == null ? void 0 : o[e]) || []).map((r) => [r.lu != null ? r.lu * 1e3 : Date.parse(r.last_updated || r.last_changed), String(r.s ?? r.state)]).filter(([r]) => Number.isFinite(r));
      } catch {
      }
      a.length || (a = (ea || []).filter((o) => o.entity_id === e).map((o) => [o.when * 1e3, String(o.state)])), n = { at: Date.now(), pts: a }, Cs.set(e, n);
    }
    const l = M[e], t = n.pts.slice().sort((a, o) => a[0] - o[0]);
    return l && (!t.length || t[t.length - 1][1] !== l.state) && t.push([Date.parse(l.last_changed) || Date.now(), l.state]), t;
  }
  async function ml(e, n, l) {
    const t = await Ts(e);
    if (!n.isConnected) return;
    const a = t.map(([D, ft]) => [D, Number(ft)]);
    if (t.length > 1 && a.every(([, D]) => Number.isFinite(D))) {
      lo(n, a, Ct(e) + ", last 24 hours");
      return;
    }
    const o = Date.now(), r = o - 864e5, d = Math.max(200, n.clientWidth || 360), p = 62, h = (D) => Math.max(0, Math.min(d, (D - r) / 864e5 * d)), m = [];
    let x = null;
    t.forEach(([D, ft]) => {
      const Bt = or(e, ft);
      Bt && x == null ? x = Math.max(D, r) : !Bt && x != null && (m.push([x, Math.max(D, r)]), x = null);
    }), x != null && m.push([x, o]);
    const C = Xr(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", L = Xl(e), T = "tfDayClip" + ++Jl, R = m.map(([D, ft]) => L + (ft >= o - 1e3 && D <= r + 1e3 ? " all day" : ft >= o - 1e3 ? " since " + Ce(D) : D <= r + 1e3 ? " until " + Ce(ft) : " " + Ce(D) + "–" + Ce(ft)));
    let j = "", _ = -1 / 0;
    m.forEach(([D], ft) => {
      const Bt = R[ft].length * 5.4, ht = Math.min(h(D), d - Bt);
      ht < _ + 8 || (j += '<text x="' + ht.toFixed(1) + '" y="10">' + X(R[ft]) + "</text>", _ = ht + Bt);
    });
    let F = '<text x="' + d + '" y="' + (p - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((D) => {
      let ft = new Date(o).setHours(D, 0, 0, 0);
      ft > o && (ft -= 864e5), h(ft) > 8 && h(ft) < d - 34 && (F += '<text x="' + h(ft).toFixed(1) + '" y="' + (p - 2) + '" text-anchor="middle">' + String(D).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + d + " " + p), n.setAttribute("aria-label", Ct(e) + ", last 24 hours: " + (R.length ? R.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + T + '"><rect x="0" y="18" width="' + d + '" height="26" rx="8"/></clipPath>' + j + '<rect x="0" y="18" width="' + d + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + T + ')">' + m.map(([D, ft]) => '<rect x="' + h(D).toFixed(1) + '" y="18" width="' + Math.max(2, h(ft) - h(D)).toFixed(1) + '" height="26" fill="' + C + '"/>').join("") + "</g>" + (l && l >= r ? '<line x1="' + h(l).toFixed(1) + '" x2="' + h(l).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + F;
  }
  function gl(e) {
    var t;
    const n = Number((t = M[e]) == null ? void 0 : t.state), l = Date.now();
    if (Wt(e).state_class === "total_increasing") {
      const a = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), o = Math.max(1, l - a);
      return [...Array(49)].map((r, d) => a + o * d / 48).map((r) => [r, Math.round(n * Math.pow((r - a) / o, 1.3) * 100) / 100]);
    }
    if (Ro(e) && e.endsWith("_moisture")) return [...Array(48)].map((a, o) => [l - (48 - o) * 30 * 60 * 1e3, Math.round((n + 22 * Math.pow(1 - o / 48, 1.2)) * 10) / 10]);
    if (Ro(e) && e.endsWith("_light")) {
      const a = (r) => {
        const d = new Date(r).getHours() + new Date(r).getMinutes() / 60;
        return Math.max(0, Math.sin((d - 6) / 14 * Math.PI));
      }, o = (r) => 0.8 + 0.2 * a(r);
      return [...Array(48)].map((r, d) => l - (48 - d) * 30 * 60 * 1e3).map((r) => [r, Math.round(n * o(r) / o(l))]);
    }
    return [...Array(48)].map((a, o) => [l - (48 - o) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(o / 6)) * 10) / 10]);
  }
  async function Hr(e, n, l = {}) {
    var T, R;
    let t = z.get(e);
    if (e.endsWith("_solar_power")) t = { at: Date.now(), points: Mc() };
    else if (Ro(e)) t = { at: Date.now(), points: gl(e) };
    else if (!t || Date.now() - t.at > 5 * 60 * 1e3) {
      try {
        const j = new Date(Date.now() - 864e5).toISOString(), _ = await P({ type: "history/history_during_period", start_time: j, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), F = ((_ == null ? void 0 : _[e]) || []).map((D) => [D.lu != null ? D.lu * 1e3 : Date.parse(D.last_updated || D.last_changed), Number(D.s ?? D.state)]).filter(([D, ft]) => Number.isFinite(D) && Number.isFinite(ft));
        t = { at: Date.now(), points: F };
      } catch {
        t = { at: Date.now(), points: [] };
      }
      z.set(e, t);
    }
    const a = n || B.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!a) return;
    const o = M[e], r = ((T = o == null ? void 0 : o.attributes) == null ? void 0 : T.unit_of_measurement) || "", d = t.points.slice(), p = Number(o == null ? void 0 : o.state);
    if (Number.isFinite(p) && !e.endsWith("_solar_power") && d.push([Date.now(), p]), d.length < 2) {
      a.setAttribute("aria-label", Ct(e) + ": no history for the last 24 hours"), a.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const h = d.map((j) => j[1]), m = Math.min(...h), x = Math.max(...h), C = (j) => j.toLocaleString(void 0, { maximumFractionDigits: Math.abs(j) >= 100 ? 0 : 1 }), L = ((R = o == null ? void 0 : o.attributes) == null ? void 0 : R.state_class) === "total_increasing";
    lo(a, d, Ct(e) + ", last 24 hours: " + (L ? "+" + C(h[h.length - 1] - h[0]) : m === x ? C(m) : C(m) + " to " + C(x)) + (r ? " " + r : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power"), ...l });
  }
  function vl() {
    const e = B == null ? void 0 : B.querySelector("[data-solar]");
    if (!e) return;
    const n = Mc();
    lo(e, n, "Solar, last 24 hours: up to " + Qe(Math.max(...n.map((l) => l[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function bl(e, n) {
    const l = n.entity_id, t = mt.get(l) || {}, a = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: on(l) > 0 ? 0 : 100 }[e], o = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    a != null && (t.pos = a), o != null && (t.tilt = o), e === "stop_cover" && (delete t.pos, delete t.tilt), e === "stop_cover_tilt" && delete t.tilt, t.at = Date.now(), mt.set(l, t);
  }
  function Ls(e, n, l) {
    var a;
    const t = l == null ? void 0 : l.entity_id;
    return e !== "light" || typeof t != "string" || !Zn[t] || !kn(t) || l.brightness_pct != null || l.brightness != null ? [n, l] : n !== "turn_on" && !(n === "toggle" && ((a = M[t]) == null ? void 0 : a.state) !== "on") ? [n, l] : ["turn_on", { ...l, brightness_pct: Zn[t] }];
  }
  function ir(e, n, l, t) {
    let a = { entity_id: l, ...t || {} };
    return [n, a] = Ls(e, n, a), e === "cover" && bl(n, a), ae[l] = (ae[l] || 0) + 1, Po.set(fp, JSON.stringify(ae)), fr.call(e, n, a) ? Promise.resolve() : Promise.resolve(W(e, n, a));
  }
  function As(e) {
    const [n, l, t, a] = e.split("|");
    ir(n, l, t, a ? JSON.parse(a) : null).catch(() => {
    });
  }
  function Bo(e, n) {
    st.set("pos|" + e, n), ya.delete(e), vn = vn.map(() => ""), [B, Dt].forEach((t) => t.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((a) => Os(a, n)));
    const l = B.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (l && (l.textContent = Math.round(n) + "%"), (k == null ? void 0 : k.id) === e) {
      const t = Dt.querySelector(".tfMoreState"), a = Dt.querySelector(".tfMoreSub");
      t && (t.textContent = Math.round(n) + "%", t.classList.add("live")), a && (a.textContent = "Currently " + on(e) + "%");
    }
    pl(e).forEach((t) => t.update(xs(e)));
  }
  const Ql = (e, n) => {
    const l = e.shiftKey ? 10 : 1, t = { ArrowUp: n + l, ArrowRight: n + l, ArrowDown: n - l, ArrowLeft: n - l, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return t == null ? null : Math.max(0, Math.min(100, Math.round(t)));
  };
  function Fd(e, n) {
    var R;
    const l = e.dataset.blocks;
    (R = e.setPointerCapture) == null || R.call(e, n.pointerId);
    const t = (j) => {
      const _ = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (j.clientX - _.left) / _.width * 100));
    }, a = t(n), o = n.clientX;
    let r = !1, d = qo(l), p = a, h = 0;
    const m = () => {
      d = Math.abs(p - d) < 0.2 ? p : d + (p - d) * 0.14, Bo(l, d), h = requestAnimationFrame(m);
    }, x = () => {
      r || (r = !0, e.classList.add("fine"), h = requestAnimationFrame(m));
    }, C = setTimeout(x, 350), L = (j) => {
      p = t(j), Math.abs(j.clientX - o) > 6 && (clearTimeout(C), x());
    }, T = () => {
      clearTimeout(C), cancelAnimationFrame(h), e.removeEventListener("pointermove", L), e.removeEventListener("pointerup", T), e.removeEventListener("pointercancel", T), e.classList.remove("fine"), Bo(l, r ? Math.round(d) : (Math.min(3, Math.floor(a / 25)) + 1) * 25), qr("pos", l);
    };
    e.addEventListener("pointermove", L), e.addEventListener("pointerup", T), e.addEventListener("pointercancel", T);
  }
  function wl(e) {
    var d, p;
    const [n, l] = e.dataset.open.split("|"), t = e.closest(".tfCard"), a = e.getBoundingClientRect(), o = (d = e.querySelector(".tfIcon")) == null ? void 0 : d.getBoundingClientRect();
    Mt = { key: n, id: l, h: t ? Math.round(t.getBoundingClientRect().height) : 0, from: a, chip: o }, ya.delete(n), oa();
    const r = B.querySelector(".tfOpen");
    r && (Mt.rel = a.top - r.getBoundingClientRect().top), Lf(r, a, o), (p = B.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function Fr(e) {
    var n;
    A = e.dataset.area, B.querySelectorAll(".tfAreaPanel").forEach((l) => {
      var a;
      const t = l === e;
      l.classList.toggle("active", t), l.setAttribute("aria-expanded", String(t)), (a = l.querySelector(".panelExpanded")) == null || a.toggleAttribute("inert", !t);
    }), ya.set("areas", qt(((n = B.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const Or = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [l, t] = Oa(e);
      return Math.round(l + n * (t - l));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var l;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((l = Wt(e).hs_color) == null ? void 0 : l[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function rr(e, n, l, t) {
    var p;
    const a = Or[n].value(l, t);
    st.set(n + "|" + l, a);
    const o = Math.round(t * 100) + "%", r = e.querySelector("i");
    if (n === "tilt") {
      r.style.width = "calc((100% - 8px) * " + t + ")";
      const [h, m] = e.querySelectorAll("span");
      h.classList.toggle("lit", t > 0.08), m.classList.toggle("lit", t > 0.92), ya.delete(l), vn = vn.map(() => ""), pl(l).forEach((x) => x.update(xs(l)));
    } else if (r) r.style.width = o;
    else {
      let h = e.querySelector("b");
      h || (h = document.createElement("b"), e.appendChild(h)), h.style.left = o;
    }
    e.setAttribute("aria-valuenow", String(Math.round(t * 100)));
    const d = (p = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : p.querySelector(".tfName .activityRowMeta, .tfMoreState");
    d && (d.textContent = Or[n].text(l, a));
  }
  function qr(e, n) {
    const l = st.get(e + "|" + n), [t, a, o] = Or[e].send(n, l), r = () => setTimeout(() => {
      st.delete(e + "|" + n), oa();
    }, 1500);
    ir(t, a, n, o).then(r, r);
  }
  function xl(e) {
    e.addEventListener("click", (n) => {
      var t;
      const l = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (La && !n.target.closest(".tfBoardMenu,[data-board-more]") && qn(), !(!l || !e.contains(l) || l.disabled))
        if (l.dataset.boardMore)
          (La == null ? void 0 : La.key) === l.dataset.boardMore ? qn(!0) : Zs(l.dataset.boardMore, l);
        else if (l.dataset.boardAct) no(La.key, l.dataset.boardAct);
        else if (l.dataset.boardShow) Ks(l.dataset.boardShow);
        else if (l.dataset.favHide) ci(l.dataset.favHide, !1);
        else if (l.dataset.energyPick) zs(l.dataset.energyPick);
        else if (l.dataset.act) As(l.dataset.act);
        else if (l.hasAttribute("data-details")) Oe(!(k != null && k.details));
        else if (l.hasAttribute("data-details-close")) Oe(!1);
        else if (l.dataset.summary) Kr(l.dataset.summary, l);
        else if (l.dataset.star) Xo(l.dataset.star);
        else if (l.hasAttribute("data-more-back")) {
          const a = k.id;
          k = k.back, Ms(), (t = Dt.querySelector('.tfMore [data-more="' + CSS.escape(a) + '"]')) == null || t.focus({ preventScroll: !0 });
        } else if (l.hasAttribute("data-favs-edit")) bi("favourites", l);
        else if (l.dataset.acts) JSON.parse(l.dataset.acts).forEach(([a, o, r, d]) => ir(a, o, r, d).catch(() => {
        }));
        else if (l.dataset.more) bi(l.dataset.more, l);
        else if (l.hasAttribute("data-more-close")) Nr();
        else if (l.dataset.morePage) Pr(Number(l.dataset.morePage));
        else if (l.dataset.path) ua(l.dataset.path);
        else if (l.dataset.go) ll("room:" + l.dataset.go);
        else if (l.hasAttribute("data-area-back")) ro();
        else if (l.dataset.open) wl(l);
        else if (l.hasAttribute("data-close")) {
          const a = Mt, o = l.closest(".tfOpen"), r = o == null ? void 0 : o.getBoundingClientRect().top, d = a.from && r != null ? new DOMRect(a.from.left, r + (a.rel || 0), a.from.width, a.from.height) : a.from;
          Af(o, d, () => {
            var p;
            Mt === a && (Mt = null, ya.delete(a.key), oa(), (p = B.querySelector('[data-open="' + CSS.escape(a.key + "|" + a.id) + '"]')) == null || p.focus({ preventScroll: !0 }));
          });
        } else l.classList.contains("tfAreaPanel") && !l.classList.contains("active") && Fr(l);
    }), e.addEventListener("keydown", (n) => {
      var t, a, o, r, d, p, h;
      const l = n.target;
      if ((t = l.dataset) != null && t.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), wl(l)), (a = l.dataset) != null && a.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), zs(l.dataset.energyPick)), (o = l.classList) != null && o.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Fr(l)), (r = l.dataset) != null && r.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Kr(l.dataset.summary, l)), n.key === "Escape" && La && e === B) {
        n.preventDefault(), qn(!0);
        return;
      }
      if (n.key === "Escape" && Ne && e === B) {
        n.preventDefault(), Ys(!1), (d = u("dashEditNav")) == null || d.focus();
        return;
      }
      if (n.key === "Escape" && N && e === B && (n.preventDefault(), ro()), (p = l.dataset) != null && p.blocks) {
        const m = l.dataset.blocks, x = Ql(n, Math.round(qo(m)));
        if (x == null) return;
        n.preventDefault(), Bo(m, x), clearTimeout(Jt.get(m)), Jt.set(m, setTimeout(() => qr("pos", m), 500));
        return;
      }
      if ((h = l.dataset) != null && h.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [m, x] = l.dataset.drag.split("|"), C = Number(l.getAttribute("aria-valuenow")) / 100, L = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, C + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        rr(l, m, x, L), qr(m, x);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var Bt;
      const l = n.target.closest("[data-blocks]");
      if (l && n.button === 0) {
        n.preventDefault(), Fd(l, n);
        return;
      }
      const t = n.target.closest("[data-drag]");
      if (!t || n.button > 0) return;
      const [a, o] = t.dataset.drag.split("|"), r = a === "bright" && !kn(o), d = n.pointerType !== "mouse";
      if (r && !d) {
        As(ce("light", "toggle", o));
        return;
      }
      const p = a === "bright" && ((Bt = M[o]) == null ? void 0 : Bt.state) !== "on", h = a === "tilt" ? 4 : 0, m = () => t.getBoundingClientRect().width - h * 2, x = (ht) => {
        const Nt = t.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ht.clientX - Nt.left - h) / m()));
      };
      let C = d ? "waiting" : p ? "pressed" : "dragging", L = 0;
      const T = n.clientX, R = n.clientY, j = (ht, Nt) => Math.hypot(ht.clientX - T, ht.clientY - R) > Nt, _ = () => {
        try {
          t.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      d || (n.preventDefault(), _()), C === "dragging" && rr(t, a, o, x(n));
      const F = () => {
        var ht, Nt;
        C = "sliding", ut = t, t.classList.add("held"), _(), (ht = navigator.userActivation) != null && ht.hasBeenActive && ((Nt = navigator.vibrate) == null || Nt.call(navigator, 8)), L = p ? (Zn[o] ?? 100) / 100 : Number(t.getAttribute("aria-valuenow")) / 100;
      }, D = (ht) => {
        C === "waiting" && j(ht, ct) ? !r && Math.abs(ht.clientX - T) > Math.abs(ht.clientY - R) ? F() : C = "gone" : C === "pressed" && j(ht, 4) && (C = "dragging"), C === "sliding" ? rr(t, a, o, Math.max(0, Math.min(1, L + (ht.clientX - T) / m()))) : C === "dragging" && rr(t, a, o, x(ht));
      }, ft = (ht) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Nt, wt) => t.removeEventListener(Nt, wt ? ft : D)), t.classList.remove("held"), ut === t && (ut = null), C === "sliding" || C === "dragging" ? qr(a, o) : ht.type === "pointerup" && r ? As(ce("light", "toggle", o)) : ht.type === "pointerup" && p && (C === "waiting" || C === "pressed") && ir("light", "turn_on", o).catch(() => {
        });
      };
      t.addEventListener("pointermove", D), t.addEventListener("pointerup", ft), t.addEventListener("pointercancel", ft);
    }), e.addEventListener("touchmove", (n) => {
      ut && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return B && y && ($r(), xl(B), xl(Dt), Dt.addEventListener("click", (e) => {
    e.target === Dt && Nr();
  }), (yl = i.getElementById("homeNav")) == null || yl.addEventListener("click", () => {
    N && ro();
  }), (kl = i.querySelector(".bottomNav")) == null || kl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + bp + "</button>"), (Ml = u("dashEditNav")) == null || Ml.addEventListener("click", () => Ys(!Ne)), B.addEventListener("pointerdown", Va), new ResizeObserver(() => {
    g.classList.contains("tfDash") && ji() !== ei ? oa() : Tr();
  }).observe(B), window.addEventListener("resize", Tr, { passive: !0 }), Dt.addEventListener("keydown", (e) => {
    var n, l;
    e.key === "Escape" ? (e.stopPropagation(), k != null && k.details ? Oe(!1) : Nr()) : (e.key === "ArrowLeft" || e.key === "ArrowRight") && ((l = (n = e.target).closest) != null && l.call(n, ".tfMoreDots")) && (e.preventDefault(), Pr(((k == null ? void 0 : k.page) || 0) + (e.key === "ArrowRight" ? 1 : -1)));
  })), K(), {
    update(e) {
      if (!y) return;
      const n = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([t]) => Ro(t))), ...e || {} };
      for (const t in M) t.startsWith("light.") && M[t].state === "on" && kn(t) && Ze(t, Se(M[t]));
      n ? so() : oa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      po = !0, zt == null || zt.destroy(), zt = null, je == null || je.forEach((e) => e.destroy()), je = null;
    },
    resume() {
      po = !1, !(!y || !(B != null && B.querySelector("[data-tf]"))) && (Ue.isConnected && Ai(Ue.style.order), It());
    }
  };
}
const mm = "0.80.0", oc = "move_assistant", gm = "move_assistant", yp = "move_assistant_checkin_reminder";
function vm() {
  if (document.getElementById("move-assistant-inter")) return;
  const i = document.createElement("link");
  i.id = "move-assistant-inter", i.rel = "stylesheet", i.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(i);
}
class bm extends HTMLElement {
  setConfig(c) {
    this._config = c || {};
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
  set hass(c) {
    var u;
    const s = !this._hass;
    if (this._hass = c, s) {
      this._init();
      return;
    }
    this._app && c.states !== this._lastStates && (this._lastStates = c.states, this._app.updateStates(c.states), (u = this._test) == null || u.update(c.states));
  }
  connectedCallback() {
    var c, s;
    (c = this._app) == null || c.resume(), (s = this._test) == null || s.resume();
  }
  disconnectedCallback() {
    var c, s;
    (c = this._app) == null || c.suspend(), (s = this._test) == null || s.suspend();
  }
  async _init() {
    vm();
    const c = this.shadowRoot || this.attachShadow({ mode: "open" });
    c.innerHTML = `<style>${cu}${pu}${uu}${fu}</style>${hu}`;
    const s = c.getElementById("app");
    s.style.opacity = "0";
    let u = null;
    try {
      const g = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: oc
      });
      u = (g == null ? void 0 : g.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = Pu(c, {
      data: u,
      save: (g) => this._save(g),
      fire: (g, b) => this._fire(g, b),
      ws: (g) => this._hass.callWS(g),
      subscribe: (g, b) => {
        var y, E;
        return (E = (y = this._hass) == null ? void 0 : y.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(b, g) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var g, b;
        return Object.keys(((b = (g = this._hass) == null ? void 0 : g.services) == null ? void 0 : b.notify) || {}).sort();
      },
      setReminderAutomation: (g) => this._setReminderAutomation(g),
      setLight: (g) => this.classList.toggle("lightBody", g),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = hm(c, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Cf(c, s), Ef(c), this.isConnected || (this._app.suspend(), this._test.suspend()), s.style.transition = "opacity .2s ease", s.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var s;
    const c = (s = this._hass) == null ? void 0 : s.connection;
    c != null && c.subscribeMessage && c.subscribeMessage(
      (u) => {
        var b;
        const g = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        g === this._lastSaved || g === this._pendingJson || (this._lastSaved = g, (b = this._app) == null || b.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: oc }
    ).catch(() => {
    });
  }
  _save(c) {
    this._pendingJson = JSON.stringify(c), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const s = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: oc,
          value: JSON.parse(s)
        }), this._lastSaved = s;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(c, s = {}) {
    var u, g;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((g = this._hass) == null || g.callWS({
      type: "fire_event",
      event_type: gm,
      event_data: { action: c, ...s }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(c) {
    const s = `config/automation/config/${yp}`;
    if (!c) {
      try {
        await this._hass.callApi("DELETE", s);
      } catch (b) {
        if ((b == null ? void 0 : b.status_code) !== 404 && (b == null ? void 0 : b.status) !== 404) throw b;
      }
      return;
    }
    const u = (b) => `${b}:00`, g = window.location.pathname;
    await this._hass.callApi("POST", s, {
      id: yp,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: u(c.times.morning), id: "morning" },
        { trigger: "time", at: u(c.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${c.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: g, clickAction: g }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const c = document;
    if (c.fullscreenElement || c.webkitFullscreenElement) {
      (c.exitFullscreen || c.webkitExitFullscreen).call(c);
      return;
    }
    const s = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(s.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(c) {
    var u;
    const s = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    s && (s.textContent = c, s.classList.add("show"), setTimeout(() => s.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", bm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${mm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
