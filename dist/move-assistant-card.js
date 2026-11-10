const cu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', pu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}`, uu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, fu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', hu = `<main id="app"><div class="shell">
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
`, Sn = {
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
}, kn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, wc = (n, s, o) => n + (s - n) * o, ic = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((c) => c + c).join("") : s;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, mu = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), xc = {}, ta = (n, s, o) => {
  const c = n + s + o;
  return xc[c] || (xc[c] = mu(ic(n).map((m, x) => m + (ic(s)[x] - m) * o)));
}, yc = {}, hd = (n) => yc[n] || (yc[n] = ic(n)), Od = (n, s, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let x = 0, k = 1, L = m;
  for (let S = 0; S < 18; S++)
    L = (x + k) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * o + L * L * L < m ? x = L : k = L;
  return 3 * (1 - L) * (1 - L) * L * s + 3 * (1 - L) * L * L * c + L * L * L;
}, gu = { std: Od(0.2, 0, 0, 1), acc: Od(0.3, 0, 1, 1), dec: Od(0, 0, 0, 1) };
function Md(n, s) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || s ? "night" : "day");
}
function kp(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [ta(s.clear[0], s.cloudy[0], 0.12), ta(s.clear[1], s.cloudy[1], 0.12)], s.storm = [ta(s.rain[0], "#000000", 0.22), ta(s.rain[1], "#000000", 0.22)], s;
}
const rc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], sc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], lc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function dc(n, s = Sn) {
  const o = { ...Sn, ...s }, c = kp(o), m = String(n).split("/"), x = c[m[0]] ? m[0] : "clear", k = m[1] === "night", L = c[x][k ? 1 : 0], S = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: rc.map(() => ({ o: 0 })),
    rain: sc.map(() => ({ o: 0, dy: -16 })),
    snow: lc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, E = (j) => rc.map(() => ({ o: j }));
  return x === "clear" ? k ? (S.moon.o = 1, S.stars = E(1)) : S.sun.o = 1 : x === "partly" ? (S.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (S.moon = { x: 34, y: 33, d: 48, o: 1 }, S.stars = E(0.7)) : S.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (S.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? S.moon = { x: 40, y: 36, d: 40, o: 0 } : S.sun = { x: 40, y: 36, r: 20, o: 0 }) : (S.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? S.moon = { x: 38, y: 28, d: 36, o: 0 } : S.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? S.snow = lc.map(() => ({ o: 1, dy: 0 })) : S.rain = sc.map((j, P) => ({ o: x === "storm" && P === 1 ? 0 : 1, dy: 0 })), x === "storm" && (S.bolt = { o: 1, dy: 0 })), S;
}
const kc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function vu(n, s, o, c = Sn, m = !1) {
  const x = { ...Sn, ...c }, k = (O, V) => O > 0.01 && V > 0.01 ? "stay" : O > 0.01 ? "leave" : V > 0.01 ? "enter" : "none", L = (O, V, st, nt) => {
    const $ = O[0] + V * nt, W = O[1] - (st - 1 - V) * nt;
    return gu[O[2]](kn((o - $) / Math.max(1e-3, W - $)));
  }, S = (O, V, st, nt = 0, $ = 1, W = 0) => {
    const ft = k(O.o, V.o);
    if (ft === "none") return { ...V, o: 0 };
    const ht = L(kc[st][ft], nt, $, W), wt = {};
    for (const it in V) wt[it] = m && ft !== "stay" && it !== "o" ? ft === "leave" ? O[it] : V[it] : wc(O[it], V[it], ht);
    return wt;
  }, E = L(kc.sky, 0, 1, 0);
  let j, P;
  if (n.night !== s.night) {
    const O = Math.min(n.clearness, s.clearness), V = ta(ta(n.sky, s.sky, 0.5), x.dusk, 0.6 * O);
    j = E < 0.5 ? ta(n.sky, V, E * 2) : ta(V, s.sky, E * 2 - 1), P = O > 0.5 ? [n.sky, x.dusk, s.sky] : [n.sky, s.sky];
  } else
    j = ta(n.sky, s.sky, E), P = [n.sky, s.sky];
  return {
    night: o < 0.5 ? n.night : s.night,
    clearness: wc(n.clearness, s.clearness, o),
    sky: j,
    skyStops: P,
    skyT: E,
    sun: S(n.sun, s.sun, "body"),
    moon: S(n.moon, s.moon, "body"),
    cloud: S(n.cloud, s.cloud, "cloud"),
    stars: s.stars.map((O, V) => S(n.stars[V], O, "fx", V, s.stars.length, 0.05)),
    rain: s.rain.map((O, V) => S(n.rain[V], O, "fx", V, s.rain.length, 0.05)),
    snow: s.snow.map((O, V) => S(n.snow[V], O, "fx", V, s.snow.length, 0.05)),
    bolt: S(n.bolt, s.bolt, "fx")
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
], yn = (n, s) => (bu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, wu = 0, uc = 1, fc = 2, hc = 3, mc = 4, xn = 5, Ws = 6, wr = 7, gc = 8, bd = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), xu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], yu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Mp = (n, s, o) => {
  let c = !1;
  for (let m = 0, x = n.length - 1; m < n.length; x = m++) {
    const k = n[m], L = n[x];
    k[1] > o != L[1] > o && s < (L[0] - k[0]) * (o - k[1]) / (L[1] - k[1]) + k[0] && (c = !c);
  }
  return c;
};
function Sp(n, { size: s = 90, px: o = 2, oneBit: c = !1, colors: m = Sn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: L = 0, idle: S = !1 } = {}) {
  const E = { ...Sn, ...m }, j = Math.sin, P = Math.PI * 2, O = Math.max(6, Math.round(s / o)), V = O / 90, st = S ? Math.floor(L / 100) * 100 : 0, nt = S ? j(P * st / 3600) : 0, $ = S ? 1.8 * j(P * st / 6400) : 0, W = S ? 0.9 * j(P * st / 4100) : 0, ft = S ? 0.8 * j(P * st / 5200) : 0, ht = st / 3400 % 1, wt = S && n.bolt.o > 0.5 && (ht < 0.04 || ht > 0.08 && ht < 0.11), it = new Array(O * O), et = new Uint8Array(O * O), _ = (T, B, D, q, kt) => {
    D == null || T < 0 || B < 0 || T >= O || B >= O || (q >= 1 || q > yn(T + 5, B + 3)) && (it[B * O + T] = D, et[B * O + T] = kt);
  }, K = (T, B, D, q) => {
    for (let kt = Math.max(0, Math.floor(B - D) - 1); kt <= Math.min(O - 1, B + D + 1); kt++) for (let xt = Math.max(0, Math.floor(T - D) - 1); xt <= Math.min(O - 1, T + D + 1); xt++) q(xt, kt, xt + 0.5 - T, kt + 0.5 - B);
  }, Tt = n.skyStops || [n.sky], at = n.skyT || 0;
  for (let T = 0; T < O; T++) {
    const B = n.night ? kn(1 - (T + 0.5) / (O * 0.7)) * 0.85 : kn(((T + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let D = 0; D < O; D++) {
      let q = Tt[0];
      if (Tt.length > 1) {
        const kt = at * (Tt.length - 1), xt = Math.min(Tt.length - 2, Math.floor(kt));
        q = kt - xt > yn(D, T) ? Tt[xt + 1] : Tt[xt];
      }
      B > yn(D + 2, T + 5) && (q = n.night ? ta(q, "#000000", 0.28) : ta(q, "#ffffff", 0.2)), it[T * O + D] = wt ? ta(q, "#ffffff", 0.25) : q;
    }
  }
  if (n.sun.o > 0.01) {
    const T = n.sun.x * V, B = n.sun.y * V, D = Math.max(1, n.sun.r * V);
    if (S) {
      const q = D * (1.45 + 0.06 * nt), kt = ta(E.sun, "#ffffff", 0.55);
      if (K(T, B, q, (xt, Q, Ct, Lt) => {
        const Qt = Math.sqrt(Ct * Ct + Lt * Lt);
        Qt > D && Qt < q && _(xt, Q, kt, 0.26 * (1 - (Qt - D) / (q - D)) * n.sun.o, wu);
      }), n.sun.o > 0.5) {
        const xt = Math.floor(st / 500) % 2, Q = Math.max(1, D * 0.22);
        for (let Ct = 0; Ct < 8; Ct++) if (Ct % 2 === xt) for (let Lt = D + 1.5; Lt < D + 1.5 + Q; Lt += 0.7) _(Math.floor(T + Math.cos(Ct * Math.PI / 4) * Lt), Math.floor(B + Math.sin(Ct * Math.PI / 4) * Lt), E.sun, n.sun.o, gc);
      }
    }
    K(T, B, D, (q, kt, xt, Q) => {
      if (xt * xt + Q * Q > D * D) return;
      const Ct = ((xt * 0.643 + Q * 0.766) / D + 1) / 2;
      _(q, kt, kn((Ct - 0.62) / 0.38) > yn(q, kt) ? E.sunEdge : E.sun, n.sun.o, uc);
    });
  }
  if (rc.forEach((T, B) => {
    const D = n.stars[B].o;
    if (D < 0.01) return;
    const q = Math.floor(T[0] * V), kt = Math.floor(T[1] * V), xt = S ? (Math.floor(st / 300) + B * 3) % 6 : 0;
    if (xt === 5) return;
    const Q = Math.round(T[2] * V * (xt === 4 ? 0.3 : xt < 2 ? 1 : 0.6));
    _(q, kt, E.star, D, wr);
    for (let Ct = 1; Ct <= Q; Ct++) {
      const Lt = Ct === Q && Q > 1 ? ta(E.star, n.sky, 0.5) : E.star;
      _(q - Ct, kt, Lt, D, wr), _(q + Ct, kt, Lt, D, wr), _(q, kt - Ct, Lt, D, wr), _(q, kt + Ct, Lt, D, wr);
    }
  }), n.moon.o > 0.01) {
    const T = Math.max(1.5, n.moon.d * V * 0.37), B = n.moon.x * V, D = n.moon.y * V + (S && ft > 0.4 ? -1 : 0), q = B + 0.547 * T, kt = D - 0.503 * T, xt = 0.82 * T, Q = ta(E.moon, "#ffffff", 0.6);
    K(B, D, T, (Ct, Lt, Qt, le) => {
      if (Qt * Qt + le * le > T * T) return;
      const ia = Ct + 0.5 - q, Se = Lt + 0.5 - kt;
      ia * ia + Se * Se <= xt * xt || _(Ct, Lt, kn((le + T) / (2 * T) * 1.1 - 0.1) > yn(Ct, Lt) ? E.moon : Q, n.moon.o, fc);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * V)), ot = Math.max(1, Math.round(5.87 * V * 0.5));
  sc.forEach((T, B) => {
    const D = n.rain[B];
    let q = D.dy, kt = D.o;
    if (kt < 0.01) return;
    if (S) {
      const Ct = (st / 950 + B / 3) % 1;
      q += -5 + Ct * 14, kt *= Ct < 0.18 ? Ct / 0.18 : Ct > 0.72 ? (1 - Ct) / 0.28 : 1;
    }
    const xt = (T[0] + 3 + $) * V, Q = (T[1] + q) * V;
    for (let Ct = 0; Ct < ct; Ct++) for (let Lt = 0; Lt < ot; Lt++) _(Math.floor(xt - 0.208 * Ct) + Lt, Math.floor(Q) + Ct, E.rain, kt, mc);
  });
  const zt = Math.max(0, Math.round(7.34 * V / 2.6));
  if (lc.forEach((T, B) => {
    const D = n.snow[B];
    let q = D.dy, kt = 0, xt = D.o;
    if (xt < 0.01) return;
    if (S) {
      const Lt = (st / 3200 + B / 5) % 1;
      q += -6 + Lt * 14, kt = 1.5 * j(P * (Lt * 1.5 + B / 5)), xt *= Lt < 0.2 ? Lt / 0.2 : Lt > 0.75 ? (1 - Lt) / 0.25 : 1;
    }
    const Q = Math.floor((T[0] + 3.67 + kt + $) * V), Ct = Math.floor((T[1] + 3.67 + q) * V);
    _(Q, Ct, E.snow, xt, xn);
    for (let Lt = 1; Lt <= zt; Lt++)
      _(Q - Lt, Ct, E.snow, xt, xn), _(Q + Lt, Ct, E.snow, xt, xn), _(Q, Ct - Lt, E.snow, xt, xn), _(Q, Ct + Lt, E.snow, xt, xn), zt > 1 && Lt < zt && (_(Q - Lt, Ct - Lt, E.snow, xt, xn), _(Q + Lt, Ct - Lt, E.snow, xt, xn), _(Q - Lt, Ct + Lt, E.snow, xt, xn), _(Q + Lt, Ct + Lt, E.snow, xt, xn));
  }), n.bolt.o > 0.01)
    if (O >= 30) {
      const T = 39 + $, B = 50 + n.bolt.dy;
      for (let D = Math.floor(B * V); D <= (B + 28) * V; D++) for (let q = Math.floor(T * V); q <= (T + 13) * V; q++)
        Mp(yu, (q + 0.5) / V - T, (D + 0.5) / V - B) && _(q, D, E.sun, n.bolt.o, Ws);
    } else {
      const T = O / 18, B = 7, D = 10 + Math.round(n.bolt.dy * 0.2);
      xu.forEach((q, kt) => q.split("").forEach((xt, Q) => {
        if (xt !== "#") return;
        const Ct = Math.floor((B + Q) * T), Lt = Math.floor((D + kt) * T);
        for (let Qt = Lt; Qt < Math.max(Lt + 1, Math.floor((D + kt + 1) * T)); Qt++) for (let le = Ct; le < Math.max(Ct + 1, Math.floor((B + Q + 1) * T)); le++) _(le, Qt, E.sun, n.bolt.o, Ws);
      }));
    }
  if (n.cloud.o > 0.01) {
    const T = Math.max(3, n.cloud.w * V), B = T * 0.6665, D = (n.cloud.x + $) * V - T / 2, q = (n.cloud.y + W) * V - B / 2, kt = ta(E.cloudDay, E.cloudNight, Math.round(n.cloud.f * 4) / 4), xt = ta(kt, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(q) - 1); Q <= Math.min(O - 1, q + B + 1); Q++) for (let Ct = Math.max(0, Math.floor(D) - 1); Ct <= Math.min(O - 1, D + T + 1); Ct++) {
      const Lt = (Ct + 0.5 - D) / T, Qt = (Q + 0.5 - q) / T;
      bd(Lt, Qt) && _(Ct, Q, !bd(Lt, Qt + 1 / T) || kn((Qt - 0.42) / 0.25) * 0.8 > yn(Ct, Q) ? xt : kt, n.cloud.o, hc);
    }
  }
  return Cp(it, et, O, O, { oneBit: c, ink: x, paper: k, snowInk: !n.night });
}
function Cp(n, s, o, c, { oneBit: m, ink: x, paper: k, snowInk: L }) {
  const S = new Uint8ClampedArray(o * c * 4), E = hd(x), j = hd(k);
  for (let P = 0; P < c; P++) for (let O = 0; O < o; O++) {
    const V = P * o + O, st = s[V];
    if (n[V] == null) continue;
    let nt = hd(n[V]);
    if (m) {
      let $;
      st === mc || st === gc ? $ = !0 : st === xn ? $ = L : st === wr || st === Ws ? $ = !1 : $ = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= yn(O, P), (st === uc || st === fc || st === hc || st === Ws) && (O > 0 && s[V - 1] !== st || O < o - 1 && s[V + 1] !== st || P > 0 && s[V - o] !== st || P < c - 1 && s[V + o] !== st) && ($ = !0), nt = $ ? E : j;
    }
    S[V * 4] = nt[0], S[V * 4 + 1] = nt[1], S[V * 4 + 2] = nt[2], S[V * 4 + 3] = 255;
  }
  return { w: o, h: c, data: S };
}
const ku = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Mu = (n) => Md(n, !1).split("/")[0], qd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Su = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Cu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Tu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Lu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], _u = [".##", "##.", ".#.", "#.."];
function Tp(n, { width: s, height: o, colors: c, wave: m = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const L = { ...Sn, dawn: "#e5a77e", ...c }, S = kp(L), E = s, j = o, P = E / 6, O = P / 2, V = Math.PI * 2, st = n.length ? n : [{ cond: "cloudy", night: !1 }], nt = [...Array(12)].map((ht, wt) => {
    const it = st[Math.min(wt, st.length - 1)], et = Mu(it.cond), _ = wt % 2 === 1;
    return { cond: it.cond, k: et, night: _, sky: S[et][_ ? 1 : 0], cover: ku[et] };
  }), $ = (ht) => j * (0.5 - m * Math.cos(V * (ht / P - 0.25)));
  return { C: L, S: nt, W: E, H: j, cw: P, sw: O, TAU: V, yb: $, side: (ht, wt, it) => {
    const et = (ht ? $(wt) - it : it - $(wt)) / Math.max(3, x * 1.4) + 0.5;
    return et <= 0 ? 0 : et >= 1 ? 1 : et;
  }, glowAt: (ht) => {
    const wt = ((ht / P - 0.25) % 1 + 1) % 1, it = Math.max(0, Math.min(5, Math.round(ht / P - 0.25))), et = Math.max(0, Math.min(5, Math.round(ht / P - 0.75))), _ = 1 - (nt[2 * it].cover + nt[2 * et + 1].cover) / 2, K = Math.sin(Math.PI * Math.min(1, Math.max(0, $(ht) / j)));
    return { c: wt < 0.5 ? L.dusk : L.dawn, a: k * (0.2 + 0.8 * _) * K * K };
  }, soft: x, tw: P * 0.3, sy: j / 90 };
}
function Lp(n, { clock: s = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: x, side: k, C: L, TAU: S, sy: E } = n, j = s, P = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, V) => {
    const st = qd(c * 977 + V * 131 + 7), nt = (V + 0.5) * x, $ = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < $; W++) {
      const ft = nt + (st() - 0.5) * x * 1.6, ht = (6 + st() * 76) * E, wt = st() < 0.35, it = 1.8 + st() * 1.6, et = k(!0, ft, ht) * (wt ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(S * j / 2600 + W * 1.7 + V) : 1);
      et >= 0.03 && P.stars.push({ x: ft, y: ht, big: wt, size: it, o: et });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = nt + (st() - 0.5) * x * 0.3, ft = Math.min(15, x * 0.29);
      P.suns.push({ x: W, y: 32 * E, rad: ft, halo: ft * 2.8 * (o ? 1 + 0.07 * Math.sin(S * j / 3600 + V) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, x * 0.55 / 34), ft = nt - 23 * W + (st() - 0.5) * x * 0.2;
      P.moons.push({ x: ft + 23 * W, y: (4 + (o ? 0.8 * Math.sin(S * j / 5200 + V) : 0)) * E + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, V) => {
    const st = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!st) return;
    const nt = qd(c * 577 + V * 71 + 3), $ = (V + 0.5) * x, W = O.k === "rain" || O.k === "storm" || O.night ? L.cloudNight : L.cloudDay, ft = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let ht = 0; ht < st; ht++) {
      const wt = x / 46 * (O.k === "partly" ? 0.85 : 0.75 + nt() * 0.55), it = $ + (O.k === "partly" ? x * 0.12 : (nt() - 0.5) * x * 1.05), et = (O.k === "partly" ? 40 : 6 + nt() * 26) * E, _ = o ? 2.5 * Math.sin(S * j / 9e3 + V * 1.3 + ht * 2.1) : 0, K = o ? 0.9 * Math.sin(S * j / 6100 + V + ht) : 0;
      P.clouds.push({ x: it - 23 * wt + _, y: et - 15.33 * wt + K, w: 46 * wt, h: 30.66 * wt, fill: W, o: ft * (st > 1 && ht === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, V) => {
    const st = qd(c * 313 + V * 29 + 11), nt = (V + 0.5) * x, $ = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let ft = 0; ft < $; ft++) {
      let ht = nt + (st() - 0.5) * x * 1.05, wt = 44 + st() * 36, it = 1;
      if (o) {
        const _ = ((wt - 44 + j * 0.04) % 36 + 36) % 36;
        ht -= 0.21 * (_ - (wt - 44)), wt = 44 + _, it = Math.min(1, _ / 6, (36 - _) / 6);
      }
      wt *= E;
      const et = k(O.night, ht, wt) * it;
      et >= 0.05 && P.drops.push({ x: ht, y: wt, o: et });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let ft = 0; ft < W; ft++) {
      let ht = nt + (st() - 0.5) * x * 1.05, wt = 40 + st() * 44, it = 1;
      if (o) {
        const _ = ((wt - 40 + j * 9e-3) % 44 + 44) % 44;
        wt = 40 + _, ht += 1.6 * Math.sin(S * j / 2800 + ft * 1.9 + V), it = Math.min(1, _ / 6, (44 - _) / 6);
      }
      wt *= E;
      const et = k(O.night, ht, wt) * it;
      et >= 0.05 && P.flakes.push({ x: ht, y: wt, o: et });
    }
    if (O.k === "fog") {
      const ft = O.night ? "#c8ccd6" : "#ffffff", ht = O.night ? 0.28 : 0.62, wt = o ? 4 * Math.sin(S * j / 8e3 + V) : 0;
      for (let it = 0; it < 4; it++) P.fogs.push({ x: nt - x * 0.75 + it % 2 * x * 0.18 + (it % 2 ? wt : -wt), y: (30 + it * 13) * E, w: x * 1.3, c: ft, a: ht });
    }
    if (O.k === "storm") {
      const ft = (j / 3400 + V * 0.37) % 1;
      P.bolts.push({ x: nt + (st() - 0.5) * x * 0.3 - 5, y: 36 * E, o: o && !(ft < 0.05 || ft > 0.09 && ft < 0.12) ? 0.8 : 1 });
    }
  }), P;
}
function Eu(n, s, o, c, m, x, k, L) {
  const { S, C: E, cw: j, yb: P, glowAt: O, soft: V, tw: st, sy: nt } = n, $ = new Array(o * c), W = new Uint8Array(o * c), ft = new Uint8Array(o * c), ht = (T, B, D, q, kt) => {
    D == null || T < 0 || B < 0 || T >= o || B >= c || (q >= 1 || q > yn(T + 5, B + 3)) && ($[B * o + T] = D, W[B * o + T] = kt);
  }, wt = (T, B, D, q) => {
    for (let kt = Math.max(0, Math.floor(B - D) - 1); kt <= Math.min(c - 1, B + D + 1); kt++) for (let xt = Math.max(0, Math.floor(T - D) - 1); xt <= Math.min(o - 1, T + D + 1); xt++) q(xt, kt, xt + 0.5 - T, kt + 0.5 - B);
  }, it = (T, B, D) => {
    for (let kt = 0; kt < T.length - 1; kt++) {
      const xt = (kt + B) * j;
      if (D < xt - st / 2) return [T[kt], T[kt], 0];
      if (D <= xt + st / 2) return [T[kt], T[kt + 1], (D - xt + st / 2) / st];
    }
    const q = T[T.length - 1];
    return [q, q, 0];
  }, et = S.filter((T) => !T.night).map((T) => T.sky), _ = S.filter((T) => T.night).map((T) => T.sky), K = V / x, Tt = 16 * nt / x;
  for (let T = 0; T < o; T++) {
    const B = (T + 0.5) * m, D = P(B) / x, q = it(et, 0.75, B), kt = it(_, 1.25, B), xt = O(B);
    for (let Q = 0; Q < c; Q++) {
      const Ct = yn(T, Q), Lt = Q + 0.5 - D, Qt = (K > 0.01 ? kn(0.5 + Lt / K) : Lt > 0 ? 1 : 0) > Ct;
      let le = Qt ? q[2] > Ct ? q[1] : q[0] : kt[2] > Ct ? kt[1] : kt[0];
      (Qt ? kn(((Q + 0.5) / c - 0.45) / 0.55) * 0.7 : kn(1 - (Q + 0.5) / (c * 0.55)) * 0.7) > yn(T + 2, Q + 5) && (le = Qt ? ta(le, "#ffffff", 0.18) : ta(le, "#000000", 0.25)), Qt && Lt >= 0 && Lt < Tt && xt.a * 1.3 * (1 - Lt / Tt) > yn(T + 6, Q + 1) && (le = xt.c), $[Q * o + T] = le, ft[Q * o + T] = Qt ? 0 : 1;
    }
  }
  const at = ta(E.sun, "#ffffff", 0.55), ct = ta(E.moon, "#ffffff", 0.6);
  s.stars.forEach((T) => {
    const B = Math.floor(T.x / m), D = Math.floor(T.y / x);
    if (B < 0 || D < 0 || B >= o || D >= c || !ft[D * o + B] || T.o < 0.15) return;
    const q = T.o > 0.45 ? E.star : ta(E.star, $[D * o + B], 0.5), kt = T.big && T.o > 0.6 ? Math.floor(T.size / m) : 0;
    ht(B, D, q, 1, wr);
    for (let xt = 1; xt <= kt; xt++) [[B - xt, D], [B + xt, D], [B, D - xt], [B, D + xt]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < o && Q[1] < c && ft[Q[1] * o + Q[0]] && ht(Q[0], Q[1], q, 1, wr);
    });
  }), s.suns.forEach((T) => {
    const B = Math.max(1.5, T.rad / m), D = T.x / m, q = T.y / x, kt = T.halo / m * 0.85;
    if (wt(D, q, kt, (xt, Q, Ct, Lt) => {
      const Qt = Math.sqrt(Ct * Ct + Lt * Lt);
      Qt > B && Qt < kt && !ft[Q * o + xt] && ht(xt, Q, at, 0.3 * (1 - (Qt - B) / (kt - B)), 0);
    }), L) {
      const xt = Math.floor(k / 500) % 2, Q = Math.max(1, B * 0.3);
      for (let Ct = 0; Ct < 8; Ct++) if (Ct % 2 === xt) for (let Lt = B + 1.2; Lt < B + 1.2 + Q; Lt += 0.7) ht(Math.floor(D + Math.cos(Ct * Math.PI / 4) * Lt), Math.floor(q + Math.sin(Ct * Math.PI / 4) * Lt), E.sun, 1, gc);
    }
    wt(D, q, B, (xt, Q, Ct, Lt) => {
      Ct * Ct + Lt * Lt <= B * B && ht(xt, Q, kn(((Lt / B + 1) / 2 - 0.6) / 0.4) > yn(xt, Q) ? E.sunEdge : E.sun, 1, uc);
    });
  }), s.moons.forEach((T) => {
    const B = Math.max(1.5, T.d * 0.37 / m), D = T.x / m, q = T.y / x, kt = D + 0.547 * B, xt = q - 0.503 * B, Q = 0.82 * B;
    wt(D, q, B, (Ct, Lt, Qt, le) => {
      if (Qt * Qt + le * le > B * B) return;
      const ia = Ct + 0.5 - kt, Se = Lt + 0.5 - xt;
      ia * ia + Se * Se > Q * Q && ht(Ct, Lt, kn((le + B) / (2 * B) * 1.1 - 0.1) > yn(Ct, Lt) ? E.moon : ct, 1, fc);
    });
  }), s.clouds.forEach((T) => {
    const B = Math.max(3, T.w / m), D = B * 0.6665, q = T.x / m, kt = T.y / x, xt = ta(T.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(kt) - 1); Q <= Math.min(c - 1, kt + D + 1); Q++) for (let Ct = Math.max(0, Math.floor(q) - 1); Ct <= Math.min(o - 1, q + B + 1); Ct++) {
      const Lt = (Ct + 0.5 - q) / B, Qt = (Q + 0.5 - kt) / B;
      bd(Lt, Qt) && ht(Ct, Q, !bd(Lt, Qt + 1 / B) || kn((Qt - 0.42) / 0.25) * 0.8 > yn(Ct, Q) ? xt : T.fill, T.o, hc);
    }
  }), s.fogs.forEach((T) => {
    const B = Math.floor(T.y / x), D = Math.max(B, Math.floor((T.y + 6 * nt) / x) - 1), q = Math.floor(T.x / m), kt = Math.floor((T.x + T.w) / m);
    for (let xt = B; xt <= D; xt++) for (let Q = q; Q <= kt; Q++) {
      const Ct = (Q - q) / Math.max(1, kt - q);
      ht(Q, xt, T.c, T.a * (Ct < 0.25 ? Ct / 0.25 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1), 0);
    }
  });
  const ot = Math.max(2, Math.round(9 / x));
  s.drops.forEach((T) => {
    const B = T.x / m, D = Math.floor(T.y / x);
    for (let q = 0; q < ot; q++) ht(Math.floor(B - 0.208 * q * x / m), D + q, E.rain, T.o, mc);
  });
  const zt = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((T) => {
    const B = Math.floor(T.x / m), D = Math.floor(T.y / x);
    ht(B, D, E.snow, T.o, xn);
    for (let q = 1; q <= zt; q++)
      ht(B - q, D, E.snow, T.o, xn), ht(B + q, D, E.snow, T.o, xn), ht(B, D - q, E.snow, T.o, xn), ht(B, D + q, E.snow, T.o, xn);
  }), s.bolts.forEach((T) => {
    if (m <= 3.5)
      for (let B = Math.floor(T.y / x); B <= (T.y + 24) / x; B++) for (let D = Math.floor(T.x / m); D <= (T.x + 11) / m; D++)
        Mp(Au, (D + 0.5) * m - T.x, (B + 0.5) * x - T.y) && ht(D, B, E.sun, 1, Ws);
    else {
      const B = Math.round(T.x / m), D = Math.round(T.y / x);
      _u.forEach((q, kt) => q.split("").forEach((xt, Q) => {
        xt === "#" && ht(B + Q, D + kt, E.sun, 1, Ws);
      }));
    }
  }), { col: $, ids: W };
}
function Du(n, s) {
  const o = s.px, c = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), x = s.width / c, k = s.height / m, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, S = (V) => {
    const st = Tp(V, s);
    return Eu(st, Lp(st, { clock: L, ambient: s.ambient, seed: s.seed }), c, m, x, k, L, s.ambient);
  }, E = S(n), j = s.reveal == null ? 1 : kn(s.reveal);
  let P = E.col, O = E.ids;
  if (j < 1) {
    const V = s.prev ? S(s.prev) : null, st = j * (c + 12);
    P = new Array(c * m), O = new Uint8Array(c * m);
    for (let nt = 0; nt < c * m; nt++) {
      const $ = nt % c, W = nt / c | 0;
      (s.reduce ? j : kn((st - $) / 12)) > yn($, W) ? (P[nt] = E.col[nt], O[nt] = E.ids[nt]) : V ? (P[nt] = V.col[nt], O[nt] = V.ids[nt]) : (P[nt] = null, O[nt] = 255);
    }
  }
  return Cp(P, O, c, m, { oneBit: s.oneBit, ink: s.ink, paper: s.paper, snowInk: !1 });
}
function Bu(n, s, o) {
  const c = o.width, m = o.height, x = o.reveal == null ? 1 : kn(o.reveal), k = (O, V) => {
    const st = Tp(V, o);
    Ru(O, st, Lp(st, o));
  };
  if (n.clearRect(0, 0, c, m), x >= 1) {
    k(n, s);
    return;
  }
  if (o.prev && k(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = x, k(n, s), n.restore();
    return;
  }
  const L = n.canvas, S = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (S.width !== L.width || S.height !== L.height) && (S.width = L.width, S.height = L.height);
  const E = S.getContext("2d");
  E.setTransform(n.getTransform()), E.clearRect(0, 0, c, m), k(E, s);
  const j = x * (c + 64) - 64, P = E.createLinearGradient(j, 0, j + 64, 0);
  P.addColorStop(0, "rgba(0,0,0,1)"), P.addColorStop(1, "rgba(0,0,0,0)"), E.globalCompositeOperation = "destination-in", E.fillStyle = P, E.fillRect(0, 0, c, m), E.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function Ru(n, s, o) {
  const { W: c, H: m, S: x, C: k, cw: L, yb: S, glowAt: E, soft: j, tw: P, sy: O } = s, V = (at, ct) => {
    const ot = hd(at);
    return "rgba(" + ot[0] + "," + ot[1] + "," + ot[2] + "," + Math.max(0, Math.min(1, ct)).toFixed(3) + ")";
  }, st = (at, ct) => {
    const ot = n.createLinearGradient(0, 0, c, 0);
    ot.addColorStop(0, at[0]);
    for (let zt = 0; zt < at.length - 1; zt++) {
      const T = (zt + ct) * L, B = (T - P / 2) / c, D = (T + P / 2) / c;
      B > 0 && B < 1 && ot.addColorStop(B, at[zt]), D > 0 && D < 1 && ot.addColorStop(D, at[zt + 1]);
    }
    return ot.addColorStop(1, at[at.length - 1]), ot;
  }, nt = Math.max(24, Math.ceil(c / 4)), $ = (at, ct) => {
    n.beginPath();
    for (let ot = 0; ot <= nt; ot++) {
      const zt = c * ot / nt, T = at == null ? 0 : S(zt) + at;
      ot ? n.lineTo(zt, T) : n.moveTo(zt, T);
    }
    for (let ot = nt; ot >= 0; ot--) {
      const zt = c * ot / nt;
      n.lineTo(zt, S(zt) + ct);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = st(x.filter((at) => !at.night).map((at) => at.sky), 0.75), n.fillRect(0, 0, c, m);
  const W = n.createLinearGradient(0, 0, c, 0);
  for (let at = 0; at <= 64; at++) {
    const ct = E(c * at / 64);
    W.addColorStop(at / 64, V(ct.c, Math.min(1, ct.a)));
  }
  n.fillStyle = W;
  for (let at = 0; at < 8; at++)
    n.globalAlpha = 1 - at / 8, $(at * 2 * O, (at + 1) * 2 * O);
  n.fillStyle = st(x.filter((at) => at.night).map((at) => at.sky), 1.25);
  const ft = Math.max(0.5, j), ht = 6;
  n.globalAlpha = 1, $(null, -ft);
  for (let at = 0; at < ht; at++)
    n.globalAlpha = 1 - (at + 0.5) / ht, $(-ft + 2 * ft * at / ht, -ft + 2 * ft * (at + 1) / ht);
  n.globalAlpha = 1;
  const wt = new Path2D(Tu), it = new Path2D(Cu), et = new Path2D(Su), _ = new Path2D(Lu);
  n.fillStyle = k.star, o.stars.forEach((at) => {
    n.globalAlpha = at.o, at.big ? (n.save(), n.translate(at.x, at.y), n.scale(at.size, at.size), n.fill(wt), n.restore()) : (n.beginPath(), n.arc(at.x, at.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const K = ta(k.sun, "#ffffff", 0.55);
  o.suns.forEach((at) => {
    const ct = n.createRadialGradient(at.x, at.y, 0, at.x, at.y, at.halo);
    ct.addColorStop(0, V(K, 0.42)), ct.addColorStop(0.7, V(K, 0)), n.fillStyle = ct, n.beginPath(), n.arc(at.x, at.y, at.halo, 0, Math.PI * 2), n.fill();
    const ot = n.createLinearGradient(0, at.y - at.rad, 0, at.y + at.rad);
    ot.addColorStop(0.6, k.sun), ot.addColorStop(1, k.sunEdge), n.fillStyle = ot, n.beginPath(), n.arc(at.x, at.y, at.rad, 0, Math.PI * 2), n.fill();
  });
  const Tt = ta(k.moon, "#ffffff", 0.6);
  o.moons.forEach((at) => {
    n.save(), n.translate(at.x - at.d / 2, at.y - at.d / 2), n.scale(at.d / 46, at.d / 46);
    const ct = n.createLinearGradient(0, 6, 0, 40);
    ct.addColorStop(0, Tt), ct.addColorStop(1, k.moon), n.fillStyle = ct, n.fill(it), n.restore();
  }), o.clouds.forEach((at) => {
    n.save(), n.globalAlpha = at.o, n.translate(at.x, at.y), n.scale(at.w / 46, at.h / 30.66), n.translate(-4, -9.67), n.fillStyle = at.fill, n.fill(et), n.restore();
  }), o.fogs.forEach((at) => {
    const ct = n.createLinearGradient(at.x, 0, at.x + at.w, 0);
    ct.addColorStop(0, V(at.c, 0)), ct.addColorStop(0.25, V(at.c, at.a)), ct.addColorStop(0.75, V(at.c, at.a)), ct.addColorStop(1, V(at.c, 0)), n.fillStyle = ct, n.fillRect(at.x, at.y, at.w, 6 * O);
  }), n.fillStyle = k.rain, o.drops.forEach((at) => {
    n.save(), n.globalAlpha = at.o, n.translate(at.x, at.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, o.flakes.forEach((at) => {
    n.globalAlpha = at.o, n.beginPath(), n.arc(at.x, at.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, o.bolts.forEach((at) => {
    n.save(), n.globalAlpha = at.o, n.translate(at.x, at.y), n.fill(_), n.restore();
  }), n.restore();
}
function Nu(n, s) {
  var dt, J, ut, U, St, G, Ht;
  const o = (e) => n.getElementById(e), c = o("workoutView"), m = o("workoutNameInput");
  let x = !0;
  const k = o("homeClock");
  function L() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const S = o("createFlow"), E = o("createMovementsSlot"), j = o("createTimingSlot"), P = o("createFinishSlot"), O = o("movementStepSummary"), V = o("timingStepSummary"), st = o("finishStepSummary"), nt = o("continueToTiming"), $ = o("continueToFinish"), W = o("finishMoveButton");
  let ft = !1, ht = [];
  function wt(e) {
    !e || ht.some((r) => r.node === e) || ht.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function it(e, r) {
    e && (wt(e), r.appendChild(e));
  }
  function et() {
    [...ht].reverse().forEach(({ node: e, parent: r, next: d }) => {
      r && (d && d.parentNode === r ? r.insertBefore(e, d) : r.appendChild(e));
    }), ht = [];
  }
  function _(e) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === e);
    }), e === "timing" && (ft = !0), K();
  }
  function K() {
    var bt, Mt;
    if (!Kt) return;
    ne[Jt];
    const e = pa.filter((vt) => !vt.hidden), r = e.filter((vt) => vt.kind !== "rest").length, d = e.filter((vt) => vt.kind === "rest").length;
    O.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (d ? " · " + d + " rest" + (d === 1 ? "" : "s") : "") : "No movements yet";
    const f = r > 0, b = n.querySelector('[data-open-step="timing"]'), A = n.querySelector('[data-open-step="finish"]');
    b.disabled = !f, nt.disabled = !f, V.textContent = f ? Zn(B.value) + " · " + fa(D.value) + " movement · " + fa(q.value) + " rest" : "Add a movement first", A.disabled = !(f && ft);
    const H = ((m == null ? void 0 : m.value) || "").trim(), Y = [];
    (bt = o("includeWarmupPreset")) != null && bt.checked && Y.push("warm-up"), (Mt = o("includeCooldownPreset")) != null && Mt.checked && Y.push("cooldown"), st.textContent = H ? H + (Y.length ? " · " + Y.join(" + ") : "") : Y.length ? Y.join(" + ") : "Name and optional extras";
  }
  function Tt() {
    var Ft, te, Wt;
    S.hidden = !1, ft = !1;
    const e = n.querySelector(".editNameRow"), r = o("createMoveOptions"), d = n.querySelector(".timeTiles"), f = o("routineSummaryModal"), b = n.querySelector(".tempoRevealRow"), A = o("tempoExperiment"), H = (Ft = o("warmupList")) == null ? void 0 : Ft.closest("section"), Y = o("movementCreatorLaunch"), bt = o("movementCreator"), Mt = (te = o("strengthList")) == null ? void 0 : te.closest("section"), vt = (Wt = o("cooldownList")) == null ? void 0 : Wt.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), H, Y, bt, Mt, vt].forEach((Pt) => Pt && it(Pt, E)), [r, d, f, b, A].forEach((Pt) => it(Pt, j)), it(e, P), _("movements"), K();
  }
  function at() {
    et(), S.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || _(e.dataset.openStep);
  })), nt.addEventListener("click", () => {
    nt.disabled || _("timing");
  }), $.addEventListener("click", () => _("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ct = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, ot = o("homeNav"), zt = o("settingsNav");
  function T(e) {
    Object.entries(ct).forEach(([r, d]) => d.classList.toggle("active", r === e)), ot.classList.toggle("active", e === "home"), zt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(qt, 400), e === "settings" && (requestAnimationFrame(() => ir(n.querySelector(".tab.active"), !1)), Fr());
  }
  const B = o("totalTime"), D = o("workTime"), q = o("restTime"), kt = o("totalOut"), xt = o("workOut"), Q = o("restOut"), Ct = o("totalFill"), Lt = o("workFill"), Qt = o("restFill"), le = o("roundsInput"), ia = o("roundsFill"), Se = o("roundsOut"), Ai = o("totalLabel"), La = o("routineSummaryModal"), It = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let fe = It.map((e) => ({ ...e })), pa = [
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
  const ae = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ge = ae.map((e) => ({ ...e }));
  const Jr = {
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
  }, be = yr(s.data), ne = be.profiles;
  let Jt = ne[be.selected] ? be.selected : be.order.find((e) => ne[e]) || "kettlebell";
  function yr(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, d = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Jr)), f = (Array.isArray(r.order) ? r.order : Object.keys(d)).filter((b) => d[b]);
    return Object.keys(d).forEach((b) => {
      f.includes(b) || f.push(b);
    }), {
      v: 1,
      profiles: d,
      order: f,
      selected: r.selected || f[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : _i(r.energy)).map(kr),
      settings: { ...r.settings || {} }
    };
  }
  function _i(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], d = [];
    return e.forEach((f) => {
      const b = new Date(f.at);
      if (isNaN(b)) return;
      const A = b.getFullYear() + "-" + String(b.getMonth() + 1).padStart(2, "0") + "-" + String(b.getDate()).padStart(2, "0"), H = b.getHours() < 14 ? "morning" : "evening";
      if (d.some((bt) => bt.date === A && bt.slot === H)) return;
      const Y = r.indexOf(f.value) + 1;
      Y > 0 && d.push({ date: A, slot: H, mood: null, energy: Y, at: f.at });
    }), d;
  }
  function kr(e) {
    if (e.scale === 100) return e;
    const r = (d) => d == null ? null : Math.round((Number(d) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function nn() {
    Kt || (be.selected = Jt, be.order = be.order.filter((e) => ne[e] && e !== Nt), s.save(be));
  }
  function he() {
    return be.settings;
  }
  function ua(e) {
    const r = ne[e];
    if (!r) return;
    Jt = e;
    const d = o("workoutNameInput");
    if (d && (d.value = r.name), B.value = r.total, D.value = r.work, q.value = r.rest, le.value = r.rounds || 1, r.customSequence) {
      const f = (r.sequence || []).map((A) => ({ ...A })), b = (A) => f.filter((H) => H.presetRole === A).map(({ presetRole: H, ...Y }) => Y);
      fe = (r.warmup || b("warmup")).map((A) => ({ ...A })), Ge = (r.cooldown || b("cooldown")).map((A) => ({ ...A })), pa = f.filter((A) => !A.presetRole), Bi(r.preset || "movement", !1);
    } else
      B.min = 3, B.max = 40, B.step = 1, D.min = 20, D.max = 60, D.step = 5, q.min = 5, q.max = 30, q.step = 5, fe = (r.warmup || It).map((f) => ({ ...f })), Ge = (r.cooldown || ae).map((f) => ({ ...f })), pa = r.strength.map((f) => Array.isArray(f) ? (([b, A, H, Y = !1]) => ({ id: b, name: A, group: H, kind: "work", hidden: !!Y }))(f) : { ...f });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((f) => f.classList.toggle("active", f.dataset.workout === e)), Le();
  }
  function va(e, r, d) {
    const f = e.getBoundingClientRect(), b = f.width / 2, A = f.height / 2, H = r - b, Y = d - A;
    let bt = 1 / 0, Mt = 1 / 0;
    H !== 0 && (bt = b / Math.abs(H)), Y !== 0 && (Mt = A / Math.abs(Y));
    const vt = Math.min(Math.max(1 / Math.min(bt, Mt), 0), 1);
    let mt = Math.atan2(Y, H) * (180 / Math.PI) + 90;
    return mt < 0 && (mt += 360), { edge: vt, angle: mt };
  }
  function Ei(e, r, d = !1) {
    const f = e.getBoundingClientRect(), b = r.clientX - f.left, A = r.clientY - f.top, { edge: H, angle: Y } = va(e, b, A), bt = d ? 100 : H * 100;
    e.style.setProperty("--edge-proximity", bt.toFixed(3)), e.style.setProperty("--cursor-angle", Y.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", d || bt >= 30);
  }
  function Mr(e) {
    e.addEventListener("pointermove", (d) => Ei(e, d, !1)), e.addEventListener("pointerenter", (d) => Ei(e, d, !1)), e.addEventListener("pointerdown", (d) => Ei(e, d, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  Mr(o("addWorkoutPanel"));
  let Kt = !1, Nt = null;
  function Zt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function _e(e) {
    return e.summary ? e.summary : e.customSequence ? Zn(e.total) + " · custom move" : Zn(e.total) + " · " + fa(e.work) + " / " + fa(e.rest) + " · warm-up + cooldown";
  }
  function Aa(e, r) {
    var A;
    const d = document.createElement("article");
    d.className = "workoutPanel", d.dataset.workout = e, d.tabIndex = 0;
    const f = r.activityCount ?? (((A = r.sequence) == null ? void 0 : A.length) || 0);
    d.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Zt(r.name) + '</div><div class="sub">' + Zt(_e(r)) + '</div><span class="sourceTag">' + Zt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (f ? f + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Zt(r.name) + "</div></div>";
    const b = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(d, b), Mr(d), d.addEventListener("click", (H) => {
      H.target.closest("button") || ua(e);
    }), d.addEventListener("keydown", (H) => {
      (H.key === "Enter" || H.key === " ") && !H.target.closest("button") && (H.preventDefault(), ua(e));
    }), d.querySelector(".seeWorkoutBtn").addEventListener("click", (H) => {
      H.stopPropagation(), ua(e), Cl(!1);
    }), d.querySelector(".startWorkoutBtn").addEventListener("click", (H) => {
      H.stopPropagation(), ua(e), Pl();
    }), d;
  }
  function Un() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), be.order.forEach((e) => {
      ne[e] && Aa(e, ne[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Jt));
  }
  Un(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    Kt = !0, Nt = "custom-" + Date.now(), ne[Nt] = {
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
    }, ua(Nt), Cl(!0);
  });
  let Yt = [], oe = 0, Xe = 0, Ao = 1, on = !1, ea = null, Yn = null, Ye = !1, _o = be.settings.upcomingCount ?? "all", Eo = "movement";
  function Do(e, r, d) {
    return (Number(e) - r) / (d - r) * 100;
  }
  function fa(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Zn(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Di() {
    Ct.style.width = Do(B.value, Number(B.min), Number(B.max)) + "%", Lt.style.width = Do(D.value, Number(D.min), Number(D.max)) + "%", Qt.style.width = Do(q.value, Number(q.min), Number(q.max)) + "%", xt.textContent = fa(D.value), Q.textContent = fa(q.value);
    const e = Number(le.value) || 1;
    ia.style.width = Do(e, 1, 10) + "%", Ai.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Sr(e) {
    return e.filter((r) => !r.hidden);
  }
  function rn(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), d = Math.floor(r / 3600), f = Math.floor(r % 3600 / 60), b = r % 60;
    return (d ? d + ":" + String(f).padStart(2, "0") : f) + ":" + String(b).padStart(2, "0");
  }
  function js(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const d = r.hostname.replace(/^(www|m|music)\./, "");
    let f = null;
    if (d === "youtu.be") f = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(d))
      if (r.pathname === "/watch") f = r.searchParams.get("v");
      else {
        const Y = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        Y && (f = Y[2]);
      }
    if (!f || !/^[\w-]{11}$/.test(f)) return null;
    const b = (Y) => {
      if (!Y) return 0;
      if (/^\d+$/.test(Y)) return Number(Y);
      const bt = Y.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return bt ? (Number(bt[1]) || 0) * 3600 + (Number(bt[2]) || 0) * 60 + (Number(bt[3]) || 0) : 0;
    }, A = b(r.searchParams.get("t") || r.searchParams.get("start")), H = b(r.searchParams.get("end"));
    return { id: f, start: A, end: H > A ? H : null };
  }
  function ro(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const d = Number(e.start) || 0, f = Number(e.end) || Number(e.videoDuration) || 0;
    return f > d ? Math.round(f - d) : Number(e.duration) || 300;
  }
  function Tn(e, r) {
    const d = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? d * 3600 : r === "min" ? d * 60 : d);
  }
  function Bi(e, r = !0) {
    Eo = e, n.querySelectorAll(".createPresetBtn").forEach((f) => f.classList.toggle("active", f.dataset.movePreset === e));
    const d = ne[Jt];
    d && (d.preset = e), e === "work" ? (B.min = 30, B.max = 480, B.step = 30, D.min = 300, D.max = 7200, D.step = 300, q.min = 60, q.max = 1800, q.step = 60, r && (B.value = 60, D.value = 1500, q.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (B.min = 3, B.max = 40, B.step = 1, D.min = 20, D.max = 60, D.step = 5, q.min = 5, q.max = 30, q.step = 5, r && (B.value = 20, D.value = 45, q.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Di();
  }
  function In(e, r) {
    const d = Eo === "work";
    return e.map((f, b) => ({ ...f, id: r + "-" + b + "-" + Date.now().toString(36), useGlobalTiming: !d, duration: d ? 60 : Number(D.value) }));
  }
  function Cr() {
    const e = ne[Jt];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !fe.length && (fe = In(It, "warm")), e.includeCooldown && !Ge.length && (Ge = In(ae, "cool")), Le());
  }
  function Hn() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Yt.length - 1), d = _o;
    e.innerHTML = "";
    for (let A = 1; A <= r; A++) {
      const H = document.createElement("option");
      H.value = String(A), H.textContent = String(A), e.appendChild(H);
    }
    const f = document.createElement("option");
    f.value = "all", f.textContent = "All", e.appendChild(f);
    const b = d === "all" ? "all" : String(Math.min(Number(d) || 1, r));
    e.value = b, _o = b === "all" ? "all" : Number(b);
  }
  function Le() {
    Number(B.value) * 60;
    const e = Number(D.value), r = Number(q.value), d = ne[Jt], f = !!(d != null && d.customSequence), b = (f ? !d.includeWarmup : d != null && d.warmupOff) ? [] : Sr(fe), A = Sr(pa), H = f && !d.includeCooldown ? [] : Sr(Ge);
    if (d && (d.total = Number(B.value), d.work = e, d.rest = r, d.rounds = Number(le.value) || 1, d.customSequence ? (d.sequence = pa.map((Rt) => ({ ...Rt })), d.warmup = fe.map((Rt) => ({ ...Rt })), d.cooldown = Ge.map((Rt) => ({ ...Rt }))) : (d.strength = pa.map((Rt) => ({ ...Rt })), d.warmup = fe.map((Rt) => ({ ...Rt })), d.cooldown = Ge.map((Rt) => ({ ...Rt })))), d != null && d.customSequence) {
      const Rt = [...b.map((ce) => ({ ...ce, section: "warmup" })), ...A, ...H.map((ce) => ({ ...ce, section: "cooldown" }))].map((ce) => {
        if (ce.kind === "video") return { ...ce, duration: ro(ce, e), rest: 0 };
        if (ce.kind === "rest") {
          const Sa = ce.useGlobalTiming === !0 ? r : Number(ce.duration) || r;
          return { ...ce, duration: Sa, rest: 0 };
        }
        const Ma = ce.useGlobalTiming === !1 && Number(ce.duration) || e;
        return { ...ce, duration: Ma, rest: 0 };
      });
      d.autoRest && Number(d.autoRestDuration) > 0 ? (Yt = [], Rt.forEach((ce, Ma) => {
        Yt.push(ce);
        const Sa = Rt[Ma + 1];
        ce.kind !== "rest" && Sa && Sa.kind !== "rest" && Yt.push({
          id: "auto-rest-" + Ma,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(d.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Yt = Rt;
    } else
      Yt = [...b.map((Rt) => ({ ...Rt, section: "warmup" })), ...A, ...H.map((Rt) => ({ ...Rt, section: "cooldown" }))].map((Rt) => Rt.kind === "video" ? { ...Rt, duration: ro(Rt, e), rest: 0 } : Rt.kind === "rest" ? { ...Rt, duration: Rt.useGlobalTiming === !0 ? r : Number(Rt.duration) || r, rest: 0 } : { ...Rt, duration: Rt.useGlobalTiming === !1 && Number(Rt.duration) || e, rest: r }), Yt.forEach((Rt, ce) => {
        var Ma;
        ((Ma = Yt[ce + 1]) == null ? void 0 : Ma.kind) === "rest" && (Rt.rest = 0);
      }), Yt.length && (Yt[Yt.length - 1].rest = 0);
    const Y = Math.max(1, Math.min(10, Number(le.value) || 1)), bt = Yt, Mt = (Rt) => Y <= 1 ? null : Rt.section === "warmup" || Rt.presetRole === "warmup" ? "first" : Rt.section === "cooldown" || Rt.presetRole === "cooldown" ? "last" : Rt.kind === "video" && (Rt.videoRounds === "first" || Rt.videoRounds === "last") ? Rt.videoRounds : null, vt = (Rt) => !!Mt(Rt), mt = bt.filter((Rt) => !vt(Rt)), Ft = bt.filter(vt), te = mt.length, Wt = mt.reduce((Rt, ce) => Rt + ce.duration + ce.rest, 0), Pt = Ft.reduce((Rt, ce) => Rt + ce.duration + ce.rest, 0), Bt = [
      Ft.some((Rt) => Rt.section === "warmup" || Rt.presetRole === "warmup") && "warm-up",
      Ft.some((Rt) => Rt.section === "cooldown" || Rt.presetRole === "cooldown") && "cooldown",
      Ft.some((Rt) => Rt.kind === "video" && !Rt.section && !Rt.presetRole) && "video"
    ].filter(Boolean), ue = Bt.length > 1 ? Bt.slice(0, -1).join(", ") + " & " + Bt[Bt.length - 1] : Bt[0] || "";
    Yt = [];
    const ge = (Rt, ce) => {
      const Ma = Mt(Rt);
      return !Ma || (Ma === "first" ? ce === 1 : ce === Y);
    };
    for (let Rt = 1; Rt <= Y; Rt++)
      if (bt.filter((ce) => ge(ce, Rt)).forEach((ce, Ma) => Yt.push({ ...ce, id: ce.id + (Y > 1 ? "-r" + Rt : ""), round: Rt, roundIndex: Ma })), Rt < Y && te)
        if (d != null && d.customSequence)
          Yt.push({ id: "round-break-" + Rt, name: "Rest", group: "Round " + (Rt + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Rt, roundIndex: te, roundBreak: !0 });
        else {
          const ce = Yt[Yt.length - 1];
          ce.rest = r, ce.roundBreakAfter = !0;
        }
    Di();
    const Vt = Yt.reduce((Rt, ce) => Rt + ce.duration + ce.rest, 0), ve = Math.round(Wt / 60), De = Math.round(Vt / 60), se = Y > 1 ? Zn(ve) + " × " + Y + " rounds" + (Pt ? " + " + fa(Pt) + " " + ue : "") + " (" + Zn(De) + ")" : Zn(De), ie = [b.length ? "warm-up" : "", H.length ? "cooldown" : ""].filter(Boolean), ga = d != null && d.customSequence ? se + " · " + te + " items" + (ie.length && !(Y > 1 && Pt) ? " · " + ie.join(" + ") : "") : se + " · " + fa(e) + " / " + fa(r) + (ie.length && !(Y > 1 && Pt) ? " · " + ie.join(" + ") : "");
    kt.textContent = fa(Wt);
    const Ha = Yt.filter((Rt) => !Rt.roundBreak).length, Ue = Y > 1 ? Ha + " activities · " + Y + " rounds" : te + " activities";
    Se.textContent = Y > 1 ? Y + " rounds · " + Zn(De) + " total" : "1 round", o("roundsCount").textContent = Y, n.querySelectorAll("[data-rounds-step]").forEach((Rt) => {
      Rt.disabled = Number(Rt.dataset.roundsStep) < 0 ? Y <= 1 : Y >= 10;
    }), d && (d.summary = ga, d.activityCount = te);
    const hr = n.querySelector(".workoutPanel.active .sub");
    hr && (hr.textContent = ga), La.textContent = ga, fo(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Rt) => Rt.textContent = Ue), Di(), Je(), ji(), No(), Hn(), Kt && K(), ct.workout.classList.contains("active") && !ea && un();
  }
  const Bo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Ve = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Jo = {
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
  }, _a = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Jo[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = _a(e.dataset.icon);
  });
  let aa = null, Ea = null;
  function Qr(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function ts(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function Tr(e, r, d = {}) {
    const f = e.kind === "rest", b = e.kind === "video", A = b ? e.useVideoLength !== !1 : f ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, H = Number(f ? q.value : D.value), Y = Qr(b ? e.useVideoLength === !1 ? e.duration : ro({ ...e, useVideoLength: !0 }) : A ? H : e.duration || H), bt = b && (Number(e.videoDuration) > 0 || Number(e.end) > 0), Mt = b ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Zt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Zt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Vt, ve]) => '<option value="' + Vt + '"' + ((e.videoRounds || "every") === Vt ? " selected" : "") + ">" + ve + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Zt(e.name) + '" placeholder="' + (f ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Zt(e.group) + '" placeholder="' + (f ? "Rest" : "e.g. Glutes + legs") + '"></label>', vt = b ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (bt ? " · " + rn(ro({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + fa(H), mt = document.createElement("div");
    mt.className = "moveRow editing" + (d.sheet ? " inSheet" : ""), mt.dataset.index = r, mt.dataset.id = e.id;
    const Ft = d.isNew ?? (Ea == null ? void 0 : Ea.item) === e, te = d.sheet ? '<div class="moveEditActions sheetActions">' + (Ft ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Zt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ft ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    mt.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (b ? " videoFields" : "") + '">' + Mt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (A ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Zt(vt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + Y.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Vt) => '<option value="' + Vt + '"' + (Vt === Y.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Vt] + "</option>").join("") + "</select></div></div>" + te + "</div>";
    const Wt = (Vt) => mt.querySelector("[data-f=" + Vt + "]"), Pt = () => {
      const Vt = Wt("global").checked;
      Wt("dur").disabled = Vt, Wt("unit").disabled = Vt, mt.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Vt);
    };
    Wt("global").addEventListener("change", Pt), Pt();
    const Bt = () => {
      var Vt;
      if (d.sheet) {
        (Vt = d.onCancel) == null || Vt.call(d);
        return;
      }
      Ft && Ln(), aa = null, Le();
    }, ue = () => {
      var De;
      if (b) {
        ge();
        return;
      }
      const Vt = Wt("name").value.trim();
      if (!Vt) {
        Wt("name").focus();
        return;
      }
      e.name = Vt, e.group = Wt("group").value.trim() || (f ? "Rest" : "Movement");
      const ve = Wt("global").checked;
      if (e.useGlobalTiming = ve, ve || (e.duration = Math.max(f ? 5 : 1, Tn(Wt("dur").value, Wt("unit").value))), d.sheet) {
        (De = d.onSaved) == null || De.call(d);
        return;
      }
      Ft && (Ea = null), aa = null, Le(), me(Ft ? f ? "Rest added" : "Movement added" : "Movement updated");
    }, ge = () => {
      var ie;
      const Vt = Wt("url").value.trim(), ve = js(Vt);
      if (!ve) {
        Wt("urlError").hidden = !1, Wt("url").classList.add("invalid"), Wt("url").focus();
        return;
      }
      const De = ve.id !== e.videoId;
      e.url = Vt, e.videoId = ve.id, e.start = ve.start, e.end = ve.end, De && (e.videoDuration = null, e.videoError = null);
      const se = Wt("name").value.trim();
      e.autoName = !se, e.name = se || (De ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Wt("rounds").value, e.useVideoLength = Wt("global").checked, e.useVideoLength || (e.duration = Math.max(5, Tn(Wt("dur").value, Wt("unit").value))), d.sheet ? (ie = d.onSaved) == null || ie.call(d) : (Ft && (Ea = null), aa = null, Le(), me(Ft ? "Video added" : "Video updated")), (De || !e.videoDuration || e.autoName && !e.videoTitle) && ql(e);
    };
    if (b && Wt("url").addEventListener("input", () => {
      Wt("urlError").hidden = !0, Wt("url").classList.remove("invalid");
    }), mt.querySelector("[data-a=cancel]").addEventListener("click", Bt), mt.querySelector("[data-a=save]").addEventListener("click", ue), d.sheet && !Ft) {
      mt.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ve;
        return (ve = d.onHide) == null ? void 0 : ve.call(d);
      });
      const Vt = mt.querySelector("[data-a=remove]");
      nr(Vt, Vt.querySelector(".removeFill"), 1200, () => {
        var ve;
        return (ve = d.onRemove) == null ? void 0 : ve.call(d);
      });
    }
    return mt.addEventListener("keydown", (Vt) => {
      Vt.key === "Escape" && (Vt.preventDefault(), Vt.stopPropagation(), Bt()), Vt.key === "Enter" && Vt.target.matches("input") && (Vt.preventDefault(), ue());
    }), mt;
  }
  function Fn(e, r) {
    const d = o(r);
    d.innerHTML = "", e.forEach((f, b) => {
      if (f === aa && !Za()) {
        d.appendChild(Tr(f, b));
        return;
      }
      const A = document.createElement("div");
      A.className = "moveRow" + (f.hidden ? " hidden" : "") + (f.kind === "rest" ? " restItem" : "") + (f.kind === "video" ? " videoItem" : "") + (il(f) ? " noMeta" : ""), A.dataset.index = b, A.dataset.id = f.id;
      const H = f.kind === "rest" ? f.useGlobalTiming === !0 ? "Global timing" : fa(f.duration) : f.useGlobalTiming === !1 ? fa(f.duration) : "Global timing", Y = f.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", bt = f.kind === "video" ? f.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (f.useVideoLength === !1 ? "stops after " + fa(f.duration) : Number(f.videoDuration) > 0 || Number(f.end) > 0 ? rn(ro(f)) : "plays to the end") + (f.videoRounds === "first" ? " · first round only" : f.videoRounds === "last" ? " · last round only" : "") : f.group + " · " + H, Mt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Zt(f.name) + '. Drag, or use the up and down arrow keys">' + Bo + "</button>", vt = '<div class="moveText"><div class="moveItemName">' + Zt(f.name) + Y + '</div><div class="moveMeta">' + Zt(bt) + "</div></div>", mt = (Wt) => Wt.addEventListener("keydown", (Pt) => {
        var ge, Vt;
        if (Pt.key !== "ArrowUp" && Pt.key !== "ArrowDown") return;
        Pt.preventDefault();
        const Bt = e.indexOf(f), ue = Bt + (Pt.key === "ArrowUp" ? -1 : 1);
        ue < 0 || ue >= e.length || (e.splice(Bt, 1), e.splice(ue, 0, f), Le(), (Vt = (ge = o(r).children[ue]) == null ? void 0 : ge.querySelector(".dragHandle")) == null || Vt.focus());
      });
      if (Za()) {
        A.classList.add("phoneRow"), A.tabIndex = 0, A.setAttribute("role", "button"), A.setAttribute("aria-label", "Edit " + (f.name || "step")), A.innerHTML = Mt + vt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Wt = A.querySelector(".dragHandle");
        Wt.addEventListener("pointerdown", (Pt) => es(Pt, A, d, e)), mt(Wt), A.addEventListener("click", (Pt) => {
          Pt.target.closest(".dragHandle") || Ii(f, e);
        }), A.addEventListener("keydown", (Pt) => {
          Pt.key === "Enter" && Pt.target === A && (Pt.preventDefault(), Ii(f, e));
        }), d.appendChild(A);
        return;
      }
      A.innerHTML = Mt + vt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Zt(f.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (f.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Zt(f.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Ve + "</span></button></div>", A.querySelector(".editBtn").addEventListener("click", () => {
        Ln(), aa = f, Le(), ts();
      }), A.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        f.hidden = !f.hidden, Le();
      });
      const Ft = A.querySelector(".removeBtn");
      nr(Ft, Ft.querySelector(".removeFill"), 1200, () => {
        const Wt = e.indexOf(f);
        Wt < 0 || (e.splice(Wt, 1), Le(), me("Removed " + f.name, { label: "Undo", run: () => {
          e.splice(Math.min(Wt, e.length), 0, f), Le();
        } }));
      });
      const te = A.querySelector(".dragHandle");
      te.addEventListener("pointerdown", (Wt) => es(Wt, A, d, e)), mt(te), d.appendChild(A);
    });
  }
  const Ra = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ri = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function es(e, r, d, f) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const b = e.currentTarget, A = e.pointerId, H = !Ra();
    try {
      b.setPointerCapture(A);
    } catch {
    }
    const Y = r.closest(".exerciseScroller") || lo(r), bt = d.style.position;
    d.style.position = "relative";
    const Mt = [...d.children].filter((pe) => pe.classList.contains("moveRow")), vt = Mt.indexOf(r), mt = parseFloat(getComputedStyle(d).rowGap) || 8, Ft = r.offsetHeight, te = Ft + mt, Wt = Mt.map((pe) => pe.offsetTop), Pt = Mt.map((pe) => pe.offsetHeight), Bt = () => d.getBoundingClientRect().top, ue = d.getBoundingClientRect().width, ge = e.clientY - (Bt() + Wt[vt]), Vt = e.clientX;
    let ve = e.clientY, De = e.clientX, se = Bt() + Wt[vt], ie = 0, ga = 0, Ha = 0, Ue = 1, hr = 0, Rt = vt, ce = !1, Ma = 0, Sa = !1, td = !1, Ns = Wt[vt];
    d.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Ri(8);
    const ed = () => {
      const pe = ve - ge + Ft / 2 - Bt();
      let ke = 0;
      return Mt.forEach((ze, vn) => {
        vn !== vt && pe > Wt[vn] + Pt[vn] / 2 && ke++;
      }), ke;
    }, ad = () => {
      Mt.forEach((pe, ke) => {
        if (ke === vt) return;
        const ze = vt < Rt && ke > vt && ke <= Rt ? -te : vt > Rt && ke >= Rt && ke < vt ? te : 0;
        pe.style.transform = ze ? "translateY(" + ze + "px)" : "";
      });
    }, wl = () => {
      const pe = d.getBoundingClientRect(), ke = Math.abs(De - Vt) > Math.max(80, ue * 0.3) || De < pe.left - 24 || De > pe.right + 24;
      ke !== ce && (ce = ke, r.classList.toggle("willReturn", ke), Ri(ke ? 10 : 4));
      const ze = ce ? vt : ed();
      ze !== Rt && (Rt = ze, ad(), ce || Ri(4));
    }, mr = () => {
      if (Rt === vt) return Wt[vt];
      const pe = Mt.filter((ze, vn) => vn !== vt);
      let ke = Wt[0];
      for (let ze = 0; ze < Rt; ze++) ke += pe[ze].offsetHeight + mt;
      return ke;
    }, Ps = () => {
      const pe = H ? Math.min(Math.abs(ie) / 40, 1) : 0, ke = H && !Sa ? Math.max(-3, Math.min(3, Ha * 0.6)) : 0;
      r.style.transform = "translate(" + ga.toFixed(2) + "px," + (se - (Bt() + Wt[vt])).toFixed(2) + "px) rotate(" + ke.toFixed(2) + "deg) scale(" + (Ue * (1 - 0.04 * pe)).toFixed(4) + "," + (Ue * (1 + 0.06 * pe)).toFixed(4) + ")";
    }, re = () => {
      Ma = requestAnimationFrame(re);
      const pe = De - Vt, ke = Sa ? Bt() + Ns : ve - ge, ze = Sa ? 0 : ce ? pe * 0.9 : Math.max(-22, Math.min(22, pe * 0.22)), vn = Sa ? 1 : ce ? 0.97 : 1.035;
      if (!H) {
        se = ke, ga = Sa ? 0 : ze, Ue = 1, Ps(), Sa && Ke();
        return;
      }
      const lu = Sa ? 0.24 : 0.2, du = Sa ? 0.62 : 0.68;
      ie = (ie + (ke - se) * lu) * du, se += ie, Ha = (Ha + (ze - ga) * 0.16) * 0.7, ga += Ha, hr = (hr + (vn - Ue) * 0.22) * 0.6, Ue += hr, Ps(), Sa && Math.abs(ie) < 0.15 && Math.abs(ke - se) < 0.5 && Math.abs(ga) < 0.5 && Math.abs(Ue - 1) < 3e-3 && Ke();
    }, Ie = setInterval(() => {
      if (!Y || Sa) return;
      const pe = Y.getBoundingClientRect(), ke = 56, ze = ve < pe.top + ke ? -10 : ve > pe.bottom - ke ? 10 : 0;
      ze && (Y.scrollTop += ze, wl());
    }, 30);
    function Ke() {
      if (td) return;
      td = !0, cancelAnimationFrame(Ma);
      const pe = Rt !== vt, ke = r.dataset.id;
      if (d.classList.remove("reordering"), Mt.forEach((vn) => {
        vn.style.transition = "none", vn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), d.style.position = bt, pe) {
        const [vn] = f.splice(vt, 1);
        f.splice(Rt, 0, vn);
      }
      Le();
      const ze = ke && d.querySelector('.moveRow[data-id="' + ke + '"]');
      ze && H && ze.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), pe && me("Order saved");
    }
    const Ca = (pe) => {
      if (pe.pointerId === A) {
        if (pe.pointerType === "mouse" && pe.buttons === 0) {
          Gn();
          return;
        }
        ve = pe.clientY, De = pe.clientX, wl();
      }
    }, gn = (pe) => {
      pe.pointerId === A && Gn();
    };
    function Gn() {
      Sa || (window.removeEventListener("pointermove", Ca, !0), window.removeEventListener("pointerup", gn, !0), window.removeEventListener("pointercancel", gn, !0), b.removeEventListener("lostpointercapture", Gn), clearInterval(Ie), ce && Rt !== vt && (Rt = vt, ad()), Ns = mr(), Sa = !0, Ri(6), setTimeout(Ke, 800));
    }
    window.addEventListener("pointermove", Ca, !0), window.addEventListener("pointerup", gn, !0), window.addEventListener("pointercancel", gn, !0), b.addEventListener("lostpointercapture", Gn), Ma = requestAnimationFrame(re), Ps();
  }
  function Je() {
    var b, A, H, Y;
    const e = ne[Jt], r = (b = o("warmupList")) == null ? void 0 : b.closest("section"), d = (A = o("cooldownList")) == null ? void 0 : A.closest("section"), f = (Y = (H = o("strengthList")) == null ? void 0 : H.closest("section")) == null ? void 0 : Y.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), d && (d.hidden = !e.includeCooldown), f && (f.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), d && (d.hidden = !1), f && (f.textContent = "Kettlebell work")), Fn(fe, "warmupList"), Fn(pa, "strengthList"), Fn(Ge, "cooldownList");
  }
  function Ln() {
    if (!Ea) return;
    const { item: e, arr: r } = Ea;
    Ea = null;
    const d = r.indexOf(e);
    d >= 0 && r.splice(d, 1), aa === e && (aa = null);
  }
  function we(e) {
    return e.id === "warmupList" ? { arr: fe, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Ge, kind: "cooldown", group: "Cooldown" } : { arr: pa, kind: "work", group: "" };
  }
  function Qo(e, r) {
    const d = we(r), f = Date.now().toString(36);
    return e === "video" ? { id: "video-" + f, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + f, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(q.value) } : { id: "movement-" + f, name: "", group: d.group, kind: d.kind, hidden: !1, useGlobalTiming: !0, duration: Number(D.value) };
  }
  const ti = "cubic-bezier(.34,1.46,.64,1)";
  function ei(e, r) {
    if (Ra() || !e) {
      r();
      return;
    }
    const d = (A) => {
      var H;
      return ((H = A.dataset) == null ? void 0 : H.id) || A;
    }, f = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], b = new Map(f().map((A) => [d(A), A.getBoundingClientRect().top]));
    r(), f().forEach((A) => {
      const H = b.get(d(A));
      if (H === void 0) return;
      const Y = H - A.getBoundingClientRect().top;
      Math.abs(Y) < 0.5 || A.animate([{ transform: "translateY(" + Y + "px)" }, { transform: "none" }], { duration: 440, easing: ti });
    });
  }
  function Ro(e, r) {
    if (!e || Ra()) return;
    const d = e.offsetHeight, f = Math.max(0, d - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + f + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: ti });
  }
  function so(e, r, d, f) {
    const { arr: b } = we(r), A = Qo(e, r);
    b.splice(Math.max(0, Math.min(d, b.length)), 0, A), Ea = { item: A, arr: b }, aa = A, ei(r.closest(".exerciseScroller,.createStepSlot") || r, () => Le());
    const H = r.querySelector(".moveRow.editing");
    return Ro(H, f), ts(e === "rest"), H;
  }
  function lo(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(d) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const as = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Kn(e, r) {
    const d = document.createElement("div");
    return d.className = "addGhost" + (e === "movement" ? "" : " rest"), d.innerHTML = '<span class="addGhostGrip">' + Bo + '</span><span class="addGhostText"><strong>' + Zt(r[0]) + "</strong><small>" + Zt(r[1]) + "</small></span>", o("workoutModal").appendChild(d), d;
  }
  function co(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ns(e, r, d, f) {
    (aa || Ea) && (Ln(), aa = null, Le());
    const b = e.getBoundingClientRect(), A = Kn(r, as[r]);
    A.setAttribute("aria-hidden", "true"), A.style.width = b.width + "px", A.style.height = b.height + "px", A.style.transform = "translate(" + b.left + "px," + b.top + "px)", e.classList.add("lifting");
    const H = lo(e);
    return Ni({
      ghost: A,
      origin: b,
      sx: d,
      sy: f,
      scroller: H,
      column: e.closest(".exerciseScroller,.createFlow") || H,
      home: () => e.getBoundingClientRect(),
      onDrop: (Y, bt, Mt) => {
        co(A), e.classList.remove("lifting"), so(r, Y, bt, Mt);
      },
      onReturn: () => {
        co(A), e.classList.remove("lifting");
      }
    });
  }
  function Ni({ ghost: e, origin: r, sx: d, sy: f, scroller: b, column: A, home: H, onDrop: Y, onReturn: bt, rowLook: Mt = !1 }) {
    var Ps;
    const vt = !Ra(), mt = ((Ps = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Ps.offsetHeight) || 80, Ft = d - r.left, te = f - r.top, Wt = 44;
    let Pt = d, Bt = f, ue = r.left, ge = r.top, Vt = 0, ve = 0, De = !vt, se = null, ie = null, ga = -1, Ha = 0, Ue = null;
    const hr = () => ["warmupList", "strengthList", "cooldownList"].map((re) => o(re)).filter((re) => re && re.getClientRects().length && !re.closest("[hidden]")), Rt = (re) => {
      if (re === se) return;
      se = re, e.classList.toggle("overList", !!re || Mt);
      const Ie = re ? re.getBoundingClientRect().width : r.width;
      e.style.width = Ie + "px", e.style.height = (re ? mt : r.height) + "px";
    }, ce = (re) => {
      re.classList.add("leaving"), re.style.height = "0px", re.style.marginTop = "-8px", setTimeout(() => re.remove(), vt ? 320 : 0);
    }, Ma = (re, Ie, Ke) => {
      if (ie && ie.parentNode === re && ga === Ke || (ie && (ce(ie), ie = null, ga = -1), !re)) return;
      const Ca = document.createElement("div");
      Ca.className = "dropSlot", re.insertBefore(Ca, Ie), ie = Ca, ga = Ke, Ca.getBoundingClientRect(), Ca.style.height = mt + "px", Ca.style.marginTop = "0px";
    }, Sa = () => {
      let re = null, Ie = 1 / 0;
      for (const Gn of hr()) {
        const pe = Gn.getBoundingClientRect();
        if (Pt < pe.left - 48 || Pt > pe.right + 48) continue;
        const ke = pe.top - 28, ze = pe.bottom + 28, vn = Bt < ke ? ke - Bt : Bt > ze ? Bt - ze : 0;
        vn < Ie && (Ie = vn, re = Gn);
      }
      const Ke = A == null ? void 0 : A.getBoundingClientRect(), gn = Ke && Pt >= Ke.left && Pt <= Ke.right && Bt >= Ke.top && Bt <= Ke.bottom || Ie === 0 ? re : null;
      if (gn) {
        const Gn = [...gn.children].filter((ke) => ke.classList.contains("moveRow"));
        let pe = Gn.findIndex((ke) => {
          const ze = ke.getBoundingClientRect();
          return Bt < ze.top + ze.height / 2;
        });
        pe < 0 && (pe = Gn.length), Ma(gn, Gn[pe] || null, pe);
      } else Ma(null);
      Rt(gn);
    }, td = () => {
      if (Ue) return Ue.aim();
      if (se) {
        const re = se.getBoundingClientRect();
        let Ie = Bt - mt / 2;
        return ie && (Ie = Ie * 0.6 + ie.getBoundingClientRect().top * 0.4), { x: re.left, y: Ie };
      }
      return { x: Pt - Ft, y: Bt - te };
    }, Ns = (re, Ie, Ke, Ca) => {
      e.style.transform = "translate(" + ue + "px," + ge + "px) rotate(" + re + "deg) rotate(" + Ie + "rad) scale(" + Ke + "," + Ca + ") rotate(" + -Ie + "rad)";
    }, ed = () => {
      if (Ha = requestAnimationFrame(ed), !De) {
        const pe = Pt - d, ke = Bt - f, ze = Math.min(Math.hypot(pe, ke) / Wt, 1);
        ue = r.left + pe * 0.35, ge = r.top + ke * 0.35, Ns(0, Math.atan2(ke, pe), 1 + 0.155 * ze, 1 - 0.1 * ze);
        return;
      }
      const re = td();
      if (!vt) {
        ue = re.x, ge = re.y, Ns(0, 0, 1, 1), Ue && (cancelAnimationFrame(Ha), Ue.done());
        return;
      }
      const Ie = Ue ? Ue.k : 0.17, Ke = Ue ? Ue.d : 0.7;
      Vt = (Vt + (re.x - ue) * Ie) * Ke, ve = (ve + (re.y - ge) * Ie) * Ke, ue += Vt, ge += ve;
      const Ca = Math.hypot(Vt, ve), gn = Math.min(Ca / 48, 1), Gn = se || Ue ? 0 : Math.max(-5, Math.min(5, Vt * 0.32));
      Ns(Gn, Math.atan2(ve, Vt), 1 + 0.1 * gn, 1 - 0.063 * gn), Ue && Ca < 0.15 && Math.hypot(re.x - ue, re.y - ge) < 0.6 && (cancelAnimationFrame(Ha), Ue.done());
    }, ad = setInterval(() => {
      if (!b || Ue) return;
      const re = b.getBoundingClientRect(), Ie = 64, Ke = Bt < re.top + Ie ? -(re.top + Ie - Bt) / 4 : Bt > re.bottom - Ie ? (Bt - (re.bottom - Ie)) / 4 : 0;
      Ke && (b.scrollTop += Math.max(-18, Math.min(18, Ke)), Sa());
    }, 30);
    Ha = requestAnimationFrame(ed);
    let wl = !1;
    const mr = (re, Ie) => {
      if (wl) return;
      wl = !0, cancelAnimationFrame(Ha);
      const Ke = ie ? ie.offsetHeight : mt;
      !re && ie && (ie.remove(), ie = null), re ? Y(re, Ie, Ke) : bt();
    };
    return {
      move(re, Ie) {
        Pt = re, Bt = Ie, !De && Math.hypot(Pt - d, Bt - f) > Wt && (De = !0, Vt = (Pt - d) * 0.085, ve = (Bt - f) * 0.085), De && Sa();
      },
      drop(re) {
        clearInterval(ad);
        const Ie = se, Ke = ga;
        if (!re && Ie && ie) {
          const Ca = ie;
          Ue = { k: 0.24, d: 0.62, aim: () => {
            const gn = Ca.getBoundingClientRect();
            return { x: gn.left, y: gn.top };
          }, done: () => mr(Ie, Ke) }, setTimeout(() => mr(Ie, Ke), 650), vt || (cancelAnimationFrame(Ha), mr(Ie, Ke));
          return;
        }
        Ma(null), Rt(null), Ue = { k: 0.2, d: 0.66, aim: () => {
          const Ca = H();
          return { x: Ca.left, y: Ca.top };
        }, done: () => mr(null) }, setTimeout(() => mr(null), 650), vt || (cancelAnimationFrame(Ha), mr(null));
      }
    };
  }
  function po(e, r) {
    let d = !1;
    e.addEventListener("click", (f) => {
      if (d) {
        d = !1, f.preventDefault();
        return;
      }
      if (Za()) {
        os(r);
        return;
      }
      const b = o("strengthList"), A = so(r, b, we(b).arr.length, 0);
      A == null || A.scrollIntoView({ block: "nearest", behavior: Ra() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (f) => {
      if (f.button !== void 0 && f.button !== 0) return;
      const b = f.pointerId, A = f.clientX, H = f.clientY;
      let Y = null, bt = !1;
      try {
        e.setPointerCapture(b);
      } catch {
      }
      const Mt = (Bt) => {
        if (Bt.pointerId === b) {
          if (Bt.pointerType === "mouse" && Bt.buttons === 0) {
            Pt(!1);
            return;
          }
          if (!Y) {
            if (Math.hypot(Bt.clientX - A, Bt.clientY - H) < 6) return;
            Y = ns(e, r, A, H);
          }
          Y.move(Bt.clientX, Bt.clientY);
        }
      }, vt = (Bt) => {
        Bt.pointerId === b && Pt(!1);
      }, mt = (Bt) => {
        Bt.pointerId === b && Pt(!0);
      }, Ft = () => Pt(!1), te = () => Pt(!0), Wt = (Bt) => {
        Bt.key === "Escape" && Y && (Bt.preventDefault(), Bt.stopPropagation(), Pt(!0));
      };
      function Pt(Bt) {
        if (!bt && (bt = !0, window.removeEventListener("pointermove", Mt, !0), window.removeEventListener("pointerup", vt, !0), window.removeEventListener("pointercancel", mt, !0), window.removeEventListener("keydown", Wt, !0), window.removeEventListener("blur", te), e.removeEventListener("lostpointercapture", Ft), Y)) {
          const ue = Y;
          Y = null, d = !0, setTimeout(() => {
            d = !1;
          }, 0), ue.drop(Bt);
        }
      }
      window.addEventListener("pointermove", Mt, !0), window.addEventListener("pointerup", vt, !0), window.addEventListener("pointercancel", mt, !0), window.addEventListener("keydown", Wt, !0), window.addEventListener("blur", te), e.addEventListener("lostpointercapture", Ft);
    });
  }
  const sn = (dt = window.matchMedia) == null ? void 0 : dt.call(window, "(max-width: 620px)");
  function Za() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Pi = (e) => e.charAt(0).toUpperCase() + e.slice(1), $n = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let On = null, Ce = null;
  function ln(e, r, d, f) {
    ha(), o("sheetTitle").textContent = e;
    const b = o("sheetBody");
    b.innerHTML = "", b.appendChild(r), On = d || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !b.contains(r)) return;
      const A = f ? b.querySelector("input[data-f=url],input[data-f=name]") : b.querySelector("button,input,select");
      A == null || A.focus({ preventScroll: !0 });
    }, Ra() ? 0 : 360);
  }
  function ha() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = On;
    On = null, r == null || r(), setTimeout(qa, 0);
  }
  o("sheetScrim").addEventListener("click", ha), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), ha());
  });
  function Ii(e, r) {
    const d = Tr(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        ha(), Le(), me(Pi($n(e)) + " updated");
      },
      onCancel: ha,
      onHide() {
        e.hidden = !e.hidden, ha(), Le(), me((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        ha();
        const f = r.indexOf(e);
        f < 0 || (r.splice(f, 1), Le(), me("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(f, r.length), 0, e), Le();
        } }));
      }
    });
    ln("Edit " + $n(e), d, null, !1);
  }
  function zs() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, d, f, b]) => {
      const A = document.createElement("button");
      A.type = "button", A.className = "sheetChoice", A.innerHTML = '<span class="timeIcon" aria-hidden="true">' + _a(d) + "</span><span><strong>" + f + "</strong><small>" + b + "</small></span>", A.addEventListener("click", () => os(r)), e.appendChild(A);
    }), ln("Add to the move", e, null, !1);
  }
  function os(e) {
    Ce && qn();
    const r = Qo(e, o("strengthList")), d = Tr(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        ha(), Fi(r, e);
      },
      onCancel: ha
    });
    ln("New " + $n(r), d, null, !0);
  }
  const sa = o("workoutModal").querySelector(".modalStatic"), uo = { parent: sa.parentNode, next: sa.nextSibling };
  function is() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(sa);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", ha), e.appendChild(r), ln("Setup", e, () => {
      uo.parent.insertBefore(sa, uo.next), fo();
    }, !1);
  }
  function fo() {
    var r, d;
    const e = o("setupSummaryName");
    e && (e.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((d = ne[Jt]) == null ? void 0 : d.name) || "Move", o("setupSummaryMeta").textContent = La.textContent);
  }
  o("setupSummary").addEventListener("click", is), o("addFab").addEventListener("click", zs);
  function Fa() {
    const e = o("strengthList");
    return lo(e) || e.closest(".exerciseScroller");
  }
  function Hi() {
    const e = o("strengthList").getBoundingClientRect(), r = (Fa() || o("strengthList")).getBoundingClientRect(), d = (Ce == null ? void 0 : Ce.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - d - 96, r.top + r.height * 0.55 - d / 2)), width: e.width, height: d };
  }
  function Fi(e, r) {
    var Y;
    const d = Kn(r, [e.name || as[r][0], "Drag into place"]);
    d.classList.add("overList", "hovering"), d.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const f = document.createElement("span");
    f.className = "addGhostActions", f.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Zt(e.name) + '">✕</button>', d.appendChild(f), Ce = { item: e, type: r, ghost: d };
    const b = ((Y = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Y.offsetHeight) || 64;
    d.style.width = o("strengthList").getBoundingClientRect().width + "px", d.style.height = b + "px";
    const A = Hi(), H = Va.querySelector(".modal").getBoundingClientRect().bottom;
    d.style.transform = "translate(" + A.left + "px," + H + "px)", d.getBoundingClientRect(), Ra() || (d.classList.add("rising"), setTimeout(() => d.classList.remove("rising"), 650)), d.style.transform = "translate(" + A.left + "px," + A.top + "px)", f.querySelector("[data-a=end]").addEventListener("click", qn), f.querySelector("[data-a=discard]").addEventListener("click", qi), d.addEventListener("pointerdown", Oi);
  }
  function Oi(e) {
    if (!Ce || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: d } = Ce, f = e.pointerId;
    try {
      d.setPointerCapture(f);
    } catch {
    }
    d.classList.remove("hovering", "rising"), d.classList.add("held");
    const b = d.getBoundingClientRect(), A = Fa(), H = Ni({
      ghost: d,
      origin: { left: b.left, top: b.top, width: b.width, height: b.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: A,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || A,
      rowLook: !0,
      home: Hi,
      onDrop: (Pt, Bt, ue) => {
        Ce = null, co(d), Oa(r, Pt, Bt, ue);
      },
      onReturn: () => {
        d.classList.remove("held"), d.classList.add("hovering");
      }
    });
    let Y = !1;
    const bt = (Pt) => {
      if (Pt.pointerId === f) {
        if (Pt.pointerType === "mouse" && Pt.buttons === 0) {
          Wt(!1);
          return;
        }
        H.move(Pt.clientX, Pt.clientY);
      }
    }, Mt = (Pt) => {
      Pt.pointerId === f && Wt(!1);
    }, vt = (Pt) => {
      Pt.pointerId === f && Wt(!0);
    }, mt = () => Wt(!1), Ft = () => Wt(!0), te = (Pt) => {
      Pt.key === "Escape" && (Pt.preventDefault(), Wt(!0));
    };
    function Wt(Pt) {
      Y || (Y = !0, window.removeEventListener("pointermove", bt, !0), window.removeEventListener("pointerup", Mt, !0), window.removeEventListener("pointercancel", vt, !0), window.removeEventListener("keydown", te, !0), window.removeEventListener("blur", Ft), d.removeEventListener("lostpointercapture", mt), H.drop(Pt));
    }
    window.addEventListener("pointermove", bt, !0), window.addEventListener("pointerup", Mt, !0), window.addEventListener("pointercancel", vt, !0), window.addEventListener("keydown", te, !0), window.addEventListener("blur", Ft), d.addEventListener("lostpointercapture", mt);
  }
  function Oa(e, r, d, f) {
    const b = we(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = b.kind, b.group && (!e.group || e.group === "Movement") && (e.group = b.group)), b.arr.splice(Math.max(0, Math.min(d, b.arr.length)), 0, e), ei(r.closest(".exerciseScroller,.createStepSlot") || r, () => Le()), Ro(r.querySelector('.moveRow[data-id="' + e.id + '"]'), f), me(Pi($n(e)) + " added");
  }
  function qn() {
    var f;
    if (!Ce) return;
    const { item: e, ghost: r } = Ce;
    Ce = null, co(r);
    const d = o("strengthList");
    Oa(e, d, we(d).arr.length, 0), (f = d.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || f.scrollIntoView({ block: "nearest", behavior: Ra() ? "auto" : "smooth" });
  }
  function qi() {
    if (!Ce) return;
    const e = Ce.ghost;
    Ce = null, co(e), me("Discarded");
  }
  function ai() {
    Ce && (Ce.ghost.remove(), Ce = null);
  }
  window.addEventListener("resize", () => {
    if (Ce != null && Ce.ghost.classList.contains("hovering")) {
      const e = Hi();
      Ce.ghost.style.width = e.width + "px", Ce.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (J = sn == null ? void 0 : sn.addEventListener) == null || J.call(sn, "change", () => {
    ha(), Ce && !Za() && qn(), Je();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function qa() {
    const e = o("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !Za()) {
      Wi();
      return;
    }
    const d = r ? r.offsetTop : 0, f = r ? r.offsetLeft : 0, b = r ? r.width : window.innerWidth, A = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: b + "px", height: A + "px", top: d + "px", left: f + "px" });
    const H = e.getBoundingClientRect();
    Math.abs(H.top - d) > 0.5 && (e.style.top = 2 * d - H.top + "px"), Math.abs(H.left - f) > 0.5 && (e.style.left = 2 * f - H.left + "px");
  }
  function Wi() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (ut = window.visualViewport) == null || ut.addEventListener("resize", qa), (U = window.visualViewport) == null || U.addEventListener("scroll", qa), window.addEventListener("resize", qa), window.addEventListener("scroll", qa, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(qa, 250));
  function ji() {
    pa.length > 0;
    const e = o("addMovementBtn"), r = o("addRestBtn");
    e && (e.innerHTML = Bo + "<span>Add movement</span>"), r && (r.innerHTML = Bo + "<span>Add rest</span>");
    const d = o("addVideoBtn");
    d && (d.innerHTML = Bo + "<span>Add video</span>");
  }
  function No() {
    const e = o("useGlobalTiming").checked, r = o("addMovementDuration"), d = o("addMovementUnit");
    r.disabled = e, d.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + fa(D.value);
    const f = o("useGlobalRestTiming").checked, b = o("addRestDuration"), A = o("addRestUnit");
    b.disabled = f, A.disabled = f, b.parentElement.style.opacity = f ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + fa(q.value);
  }
  let ni = "movement";
  function rs(e) {
    ni = e;
    const r = o("movementFields"), d = o("restFields");
    r.hidden = e !== "movement", d.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), No();
  }
  function Po() {
    ne[Jt];
    const e = Kt ? !0 : o("useGlobalTiming").checked, r = e ? Number(D.value) : Tn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), d = Kt ? !0 : o("useGlobalRestTiming").checked, f = d ? Number(q.value) : Tn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (ni === "rest") {
      const b = o("addRestTitle").value.trim() || "Rest", A = o("addRestGroup").value.trim() || "Rest";
      pa.push({
        id: "rest-" + Date.now(),
        name: b,
        group: A,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: d,
        duration: Math.max(5, f || Number(q.value))
      }), Le(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", me("Rest added"), Kt && (_("movements"), K());
    } else {
      const b = o("addMovementInput").value.trim();
      if (!b) return;
      const A = o("addMovementGroup").value.trim() || "Movement";
      pa.push({
        id: "movement-" + Date.now(),
        name: b,
        group: A,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(D.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", Le(), o("movementCreator").hidden = !0, me("Movement added"), Kt && (_("movements"), K());
    }
    ji();
  }
  let An = null;
  function me(e, r) {
    const d = o("toast");
    d.innerHTML = "";
    const f = document.createElement("span");
    if (f.textContent = e, d.appendChild(f), r) {
      const b = document.createElement("button");
      b.type = "button", b.className = "toastAction", b.textContent = r.label, b.addEventListener("click", () => {
        r.run(), d.classList.remove("show", "withAction"), clearTimeout(An);
      }), d.appendChild(b);
    }
    d.classList.toggle("withAction", !!r), d.classList.add("show"), clearTimeout(An), An = setTimeout(() => d.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Xn = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Io = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function oi(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Wa(e, r) {
    return Xn[oi(r)];
  }
  function ja(e) {
    return Io[oi(e)];
  }
  function qe(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Wn() {
    return { morning: he().morningTime || "08:00", evening: he().eveningTime || "19:00" };
  }
  function ho(e) {
    const [r, d] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (d || 0);
  }
  function Lr(e) {
    const r = Wn();
    return e.getHours() * 60 + e.getMinutes() >= ho(r.evening) ? "evening" : "morning";
  }
  function p(e, r) {
    return be.checkins.find((d) => d.date === e && d.slot === r);
  }
  function g(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function y() {
    const e = /* @__PURE__ */ new Date(), r = qe(e), d = Lr(e), f = Wn(), b = e.getHours() * 60 + e.getMinutes();
    return d === "morning" && b < ho(f.morning) || g(p(r, d)) ? null : d;
  }
  const C = o("checkinModal"), R = o("checkinTab"), z = o("checkinBadge"), Z = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function pt(e) {
    const { input: r, fill: d } = Z[e];
    d.style.width = r.value + "%", r.setAttribute("aria-valuetext", Wa(e, r.value));
  }
  Object.keys(Z).forEach((e) => Z[e].input.addEventListener("input", () => pt(e)));
  let tt = null;
  function gt() {
    const e = Wn(), r = /* @__PURE__ */ new Date(), d = r.getHours() * 60 + r.getMinutes();
    return d < ho(e.morning) ? "Next check-in at " + e.morning : d < ho(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function yt() {
    const e = Wn(), r = /* @__PURE__ */ new Date(), d = r.getHours() * 60 + r.getMinutes(), f = (b, A) => {
      const [H, Y] = b.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (A ? 1 : 0), H, Y);
    };
    return d < ho(e.morning) ? { date: f(e.morning), time: e.morning } : d < ho(e.evening) ? { date: f(e.evening), time: e.evening } : { date: f(e.morning, !0), time: e.morning };
  }
  let At = null, Gt = null;
  function Ut() {
    if (y()) {
      $t(), Ee();
      return;
    }
    const e = yt(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), d = Math.floor(r / 3600), f = Math.floor(r % 3600 / 60), b = r % 60;
    o("peekCountdown").textContent = d + ":" + String(f).padStart(2, "0") + ":" + String(b).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function Dt() {
    Ut(), R.classList.add("peek"), clearInterval(Gt), Gt = setInterval(Ut, 1e3), clearTimeout(At), At = setTimeout($t, 6e3);
  }
  function $t() {
    R.classList.remove("peek"), clearInterval(Gt), clearTimeout(At);
  }
  function jt() {
    const e = y();
    if (!e) {
      R.classList.contains("peek") ? $t() : Dt();
      return;
    }
    tt = { date: qe(/* @__PURE__ */ new Date()), slot: e };
    const d = p(tt.date, e), f = be.checkins.find((b) => g(b));
    Object.keys(Z).forEach((b) => {
      Z[b].input.value = (d == null ? void 0 : d[b]) ?? (f == null ? void 0 : f[b]) ?? 50, pt(b);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Z.mood.input.focus());
  }
  function _t() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), tt && (Xt = tt.date + "-" + tt.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Xt);
    } catch {
    }
    tt = null, Ee();
  }
  function de() {
    if (!tt) return;
    if (g(p(tt.date, tt.slot))) {
      _t();
      return;
    }
    const { date: e, slot: r } = tt;
    let d = p(e, r);
    d || (d = { date: e, slot: r }, be.checkins.unshift(d), be.checkins = be.checkins.slice(0, 2e3)), d.mood = Number(Z.mood.input.value), d.energy = Number(Z.energy.input.value), d.scale = 100, d.at = (/* @__PURE__ */ new Date()).toISOString(), nn(), s.fire("checkin", { slot: r, mood: d.mood, energy: d.energy, mood_label: Wa("mood", d.mood), energy_label: Wa("energy", d.energy) }), me((r === "morning" ? "Morning" : "Evening") + " check-in saved"), _t(), We(), Ze(), vi(), mn();
  }
  let Xt = "";
  try {
    Xt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ee() {
    const e = y();
    z.hidden = !e, R.hidden = !e, e || $t(), R.classList.toggle("due", !!e), R.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : gt()), R.title = e ? "Check in now" : gt();
  }
  function qt() {
    Ee();
    const e = y();
    !e || C.classList.contains("open") || he().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !ct.home.classList.contains("active") || Va.classList.contains("open") || Xt !== qe(/* @__PURE__ */ new Date()) + "-" + e && jt());
  }
  R.addEventListener("click", jt), o("checkinLater").addEventListener("click", _t), o("checkinSave").addEventListener("click", de), C.addEventListener("click", (e) => {
    e.target === C && _t();
  }), C.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), _t());
  }), setInterval(qt, 3e4);
  function We() {
    const e = qe(/* @__PURE__ */ new Date()), r = (d) => be.checkins.find((f) => f.date === e && f[d] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([d, f]) => {
      const b = r(d);
      o(f).textContent = b ? Wa(d, b[d]) : "—";
    });
  }
  function Ze() {
    const e = o("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), d = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), f = [...Array(7)].map((Mt, vt) => {
      const mt = new Date(d.getFullYear(), d.getMonth(), d.getDate() + vt), Ft = qe(mt), te = be.checkins.filter((Pt) => Pt.date === Ft), Wt = (Pt) => {
        const Bt = te.map((ue) => ue[Pt]).filter((ue) => ue != null);
        return Bt.length ? Bt.reduce((ue, ge) => ue + ge, 0) / Bt.length : null;
      };
      return { d: mt, key: Ft, mood: Wt("mood"), energy: Wt("energy"), count: te.filter(g).length, future: mt > r && Ft !== qe(r) };
    }), b = (Mt) => {
      const vt = f.map((mt) => mt[Mt]).filter((mt) => mt != null);
      return vt.length ? vt.reduce((mt, Ft) => mt + Ft, 0) / vt.length : null;
    }, A = b("mood"), H = b("energy"), Y = (Mt, vt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + Mt + "</span><span>" + (vt == null ? "—" : Zt(Wa("", vt))) + '</span></div><div class="feelTrack"><span style="width:' + (vt == null ? 0 : Math.max(4, vt)) + "%;background:" + (vt == null ? "transparent" : ja(vt)) + '"></span></div></div>', bt = f.filter((Mt) => Mt.mood != null && Mt.energy != null).sort((Mt, vt) => vt.mood + vt.energy - (Mt.mood + Mt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (A == null ? "No check-ins yet" : Zt(Wa("", (A + H) / 2))) + '</div><div class="weekCopy">' + (A == null ? "Your first check-in will appear here." : "on average this week" + (bt ? " · best day " + Zt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(bt.d)) : "")) + '</div></div></div><div class="feelDays">' + f.map(
      (Mt) => '<div class="weekChip feelDay' + (Mt.future ? " future" : "") + (Mt.key === qe(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Zt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(Mt.d)) + "</strong>" + (Mt.count >= 2 ? '<span class="weekTick">' + _a("check") + "</span>" : '<span class="feelDots">' + "●".repeat(Mt.count) + "</span>") + "</div>" + Y("Mood", Mt.mood) + Y("Energy", Mt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Da = o("upcomingCountSetting");
  Da.addEventListener("change", () => {
    _o = Da.value === "all" ? "all" : Number(Da.value), pi();
  });
  const dn = o("tempoRevealBtn"), ii = o("tempoExperiment"), za = o("tempoQuad"), Jn = o("tempoDot"), xe = o("tempoEstimate"), Qn = o("tempoReadout");
  let cn = { x: 0.5, y: 0.5 }, Ka = !1, to = { total: 20, work: 45, rest: 15 };
  function Ho(e, r, d, f) {
    const b = Math.max(r, Math.min(d, e));
    return Math.round((b - r) / f) * f + r;
  }
  function ri(e, r) {
    const d = (e - 0.5) * 2, f = (r - 0.5) * 2, b = Ho(
      to.total + d * 5 + f * 8,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    ), A = Ho(
      to.work + d * 10 + f * 8,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    ), H = Ho(
      to.rest + d * 6 + f * 6,
      Number(q.min),
      Number(q.max),
      Number(q.step)
    );
    return B.value = b, D.value = A, q.value = H, xt.textContent = A + " sec", Q.textContent = H + " sec", Di(), { total: b, work: A, rest: H };
  }
  function ba(e, r) {
    const d = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", f = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", b = ri(e, r);
    Qn.textContent = d + " + " + f, xe.textContent = b.total + " min", za.setAttribute("aria-valuetext", d + " and " + f + ", estimated " + b.total + " minutes");
  }
  function Vs(e) {
    const r = za.getBoundingClientRect(), d = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), f = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    cn = { x: d, y: f }, Jn.style.left = d * 100 + "%", Jn.style.top = f * 100 + "%", ba(d, f);
  }
  dn.addEventListener("click", () => {
    const e = ii.hidden;
    ii.hidden = !e, dn.setAttribute("aria-expanded", e ? "true" : "false"), dn.textContent = e ? "Now close this" : "Don’t try this!", e && (to = {
      total: Number(B.value),
      work: Number(D.value),
      rest: Number(q.value)
    }, cn = { x: 0.5, y: 0.5 }, Jn.style.left = "50%", Jn.style.top = "50%", ba(cn.x, cn.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const ss = o("testingFeedbackForm"), Sl = o("testingFeedbackThanks"), Sd = o("testingFeedbackAgain");
  ss.addEventListener("submit", (e) => {
    e.preventDefault(), ss.hidden = !0, Sl.hidden = !1, me("Feedback captured for prototype");
  }), Sd.addEventListener("click", (e) => {
    e.preventDefault(), ss.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), Sl.hidden = !0, ss.hidden = !1;
  }), za.addEventListener("pointerdown", (e) => {
    var r;
    Ka = !0, Vs(e);
    try {
      (r = za.setPointerCapture) == null || r.call(za, e.pointerId);
    } catch {
    }
  }), za.addEventListener("pointermove", (e) => {
    Ka && Vs(e);
  }), za.addEventListener("pointerup", (e) => {
    Ka && (Ka = !1, Vs(e), Le());
  }), za.addEventListener("pointercancel", () => Ka = !1), za.addEventListener("keydown", (e) => {
    let { x: r, y: d } = cn, f = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? d -= 0.05 : e.key === "ArrowDown" ? d += 0.05 : f = !1, f && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), d = Math.max(0, Math.min(1, d)), cn = { x: r, y: d }, Jn.style.left = r * 100 + "%", Jn.style.top = d * 100 + "%", ba(r, d), Le());
  });
  const Va = o("workoutModal");
  let mo = null;
  function si(e) {
    return e.map((r) => ({ ...r }));
  }
  function Cd() {
    const e = ne[Jt];
    return {
      key: Jt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: si(fe),
      strength: si(pa),
      cooldown: si(Ge),
      total: Number(B.value),
      work: Number(D.value),
      rest: Number(q.value),
      rounds: Number(le.value) || 1
    };
  }
  function Cl(e = !1) {
    Kt = !!e, aa = null, Ea = null, ha(), ai(), mo = Cd(), o("moveEditorTitle").textContent = Kt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !Kt, o("warmupRow").hidden = Kt, o("deleteMoveOpen").hidden = Kt;
    const r = o("createMoveOptions");
    r.hidden = !Kt;
    {
      const d = ne[Jt];
      o("includeWarmupPreset").checked = !!(d != null && d.includeWarmup), o("includeCooldownPreset").checked = !!(d != null && d.includeCooldown);
    }
    if (Gs(), Kt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const d = ne[Jt];
      Bi((d == null ? void 0 : d.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, rs("movement"), ji(), No(), ii.hidden = !0, dn.setAttribute("aria-expanded", "false"), dn.textContent = "Don’t try this!", Va.classList.toggle("createMode", Kt), Va.querySelector(".modal").classList.toggle("createMode", Kt), Va.classList.add("open"), Va.setAttribute("aria-hidden", "false"), qa(), Kt && Tt();
  }
  function zi() {
    const e = ne[Jt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Gs() {
    const e = zi(), r = o("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = ne[Jt];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, Cr()) : (e.warmupOff = !e.warmupOff, Le()), Gs());
  });
  function Ar() {
    ha(), ai(), Wi(), Ea = null, aa = null, Va.classList.contains("createMode") && at(), Va.classList.remove("createMode"), Va.querySelector(".modal").classList.remove("createMode"), Va.classList.remove("open"), Va.setAttribute("aria-hidden", "true");
  }
  function Us() {
    if (!mo) return;
    const e = mo;
    e.profile && (ne[e.key] = JSON.parse(JSON.stringify(e.profile))), Jt = e.key, fe = si(e.warmup), pa = si(e.strength), Ge = si(e.cooldown), B.value = e.total, D.value = e.work, q.value = e.rest, le.value = e.rounds || 1;
    const r = ne[Jt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((f) => f.classList.toggle("active", f.dataset.workout === Jt));
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const f = d.querySelector(".workoutName");
        f && (f.textContent = r.name);
        const b = d.querySelector(".panelCollapsedText");
        b && (b.textContent = r.name);
        const A = d.querySelector(".sourceTag");
        A && (A.textContent = r.source);
      }
      m.value = r.name;
    }
    Le();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (Kt) {
      const e = Jt;
      delete ne[e], Kt = !1, Nt = null, ua(be.order.find((r) => ne[r]) || Object.keys(ne)[0]);
    } else
      Us();
    Ar();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    ha(), Ce && qn();
    const e = ne[Jt], r = m.value.trim() || "New move";
    if (e && (e.name = r), Ln(), aa = null, Le(), Kt && e)
      Aa(Jt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === Jt)), Kt = !1, Nt = null, be.order.includes(Jt) || be.order.push(Jt), me("Move created");
    else {
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const f = d.querySelector(".workoutName");
        f && (f.textContent = r);
        const b = d.querySelector(".panelCollapsedText");
        b && (b.textContent = r);
      }
      me("Move saved");
    }
    mo = null, Ar(), nn();
  }), Va.addEventListener("click", (e) => {
    if (e.target === Va) {
      if (Kt) {
        const r = Jt;
        delete ne[r], Kt = !1, Nt = null, ua(be.order.find((d) => ne[d]) || Object.keys(ne)[0]);
      } else
        Us();
      Ar();
    }
  }), po(o("addMovementBtn"), "movement"), po(o("addRestBtn"), "rest"), po(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", No), o("useGlobalRestTiming").addEventListener("change", No), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Bi(e.dataset.movePreset, !0), Le();
  })), o("includeWarmupPreset").addEventListener("change", Cr), o("includeCooldownPreset").addEventListener("change", Cr), o("includeWarmupPreset").addEventListener("change", K), o("includeCooldownPreset").addEventListener("change", K), m.addEventListener("input", K), m.addEventListener("input", fo), o("confirmAddMovement").addEventListener("click", Po), o("confirmAddRest").addEventListener("click", Po), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Po();
  });
  const Vi = o("countdown"), ls = o("countNum"), go = o("countdownPixelCanvas");
  let _r = null, Ys = "appear";
  class Tl {
    constructor(r, d, f, b, A, H, Y) {
      this.width = r.width, this.height = r.height, this.ctx = d, this.x = f, this.y = b, this.color = A, this.speed = (Math.random() * 0.8 + 0.1) * H, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = Y, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Gi = [], Zs = 1, ds = 1;
  function Fo() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Ll() {
    var Mt;
    if (!go) return;
    const e = Fo(), r = Math.max(1, window.innerWidth / e), d = Math.max(1, window.innerHeight / e);
    Zs = r, ds = d;
    const f = Math.min(window.devicePixelRatio || 1, 2);
    go.width = Math.floor(r * f), go.height = Math.floor(d * f), go.style.width = r + "px", go.style.height = d + "px";
    const b = go.getContext("2d");
    b.setTransform(f, 0, 0, f, 0, 0);
    const A = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], H = 12, Y = (Mt = window.matchMedia) == null ? void 0 : Mt.call(window, "(prefers-reduced-motion: reduce)").matches, bt = Y ? 0 : 0.055;
    Gi = [];
    for (let vt = 0; vt < r; vt += H)
      for (let mt = 0; mt < d; mt += H) {
        const Ft = vt - r / 2, te = mt - d / 2, Wt = Math.sqrt(Ft * Ft + te * te), Pt = Y ? 0 : Math.random() * 75 + Wt * 0.05, Bt = new Tl({ width: r, height: d }, b, vt, mt, A[Math.floor(Math.random() * A.length)], bt, Pt);
        Bt.maxSizeInteger = 4, Bt.maxSize = Math.random() * 3.2 + 0.8, Bt.sizeStep = 0.35 + Math.random() * 0.45, Gi.push(Bt);
      }
  }
  function Al(e) {
    cancelAnimationFrame(_r), Ys = e;
    const r = go == null ? void 0 : go.getContext("2d");
    if (!r) return;
    function d() {
      r.clearRect(0, 0, Zs, ds);
      let f = !0;
      Gi.forEach((b) => {
        b[Ys](), b.isIdle || (f = !1);
      }), Ys === "disappear" && f || (_r = requestAnimationFrame(d));
    }
    _r = requestAnimationFrame(d);
  }
  function cs() {
    cancelAnimationFrame(_r), Ll(), Al("appear"), setTimeout(() => Al("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Vi.classList.contains("active") && cs();
  });
  const Ui = o("pixelTrailCanvas"), Yi = Ui.getContext("2d");
  let _n = !0, Re = 0.7, Zi = 600, Er = [], Ki = null, wa = { x: 0, y: 0, ready: !1 };
  function _l() {
    const e = c.getBoundingClientRect(), r = Fo(), d = Math.min(window.devicePixelRatio || 1, 2), f = Math.max(1, e.width / r), b = Math.max(1, e.height / r);
    Ui.width = Math.max(1, Math.floor(f * d)), Ui.height = Math.max(1, Math.floor(b * d)), Ui.style.width = f + "px", Ui.style.height = b + "px", Yi.setTransform(d, 0, 0, d, 0, 0);
  }
  function Td(e, r) {
    if (!_n) return;
    const d = performance.now();
    wa.ready || (wa = { x: e, y: r, ready: !0 });
    const f = 7;
    for (let b = 1; b <= f; b++) {
      const A = b / f;
      Er.push({
        x: wa.x + (e - wa.x) * A,
        y: wa.y + (r - wa.y) * A,
        born: d - (f - b) * 10
      });
    }
    wa = { x: e, y: r, ready: !0 };
  }
  function ps(e) {
    if (Ki = null, !x) return;
    if (!ct.workout.classList.contains("active")) {
      Ki = requestAnimationFrame(ps);
      return;
    }
    const r = c.getBoundingClientRect(), d = Fo();
    Yi.clearRect(0, 0, r.width / d, r.height / d), _n && (Er = Er.filter((b) => e - b.born < Zi), Yi.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Er.forEach((b) => {
      const A = (e - b.born) / Zi, H = (1 - A) * Re, Y = Math.round(b.x / 14) * 14, bt = Math.round(b.y / 14) * 14;
      Yi.globalAlpha = Math.max(0, H);
      const Mt = 2 + 5 * (1 - A) * Re;
      Yi.fillRect(Y - Mt / 2, bt - Mt / 2, Mt, Mt);
    }), Yi.globalAlpha = 1), Ki = requestAnimationFrame(ps);
  }
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect(), d = Fo();
    Td((e.clientX - r.left) / d, (e.clientY - r.top) / d);
  }), c.addEventListener("pointerleave", () => wa.ready = !1), new ResizeObserver(_l).observe(c), _l(), Ki = requestAnimationFrame(ps);
  const vo = o("movementRippleCanvas"), li = vo.getContext("2d");
  let di = !0, $i = null, El = performance.now();
  function Xi() {
    const e = vo.parentElement.getBoundingClientRect(), r = Fo(), d = Math.max(1, e.width / r), f = Math.max(1, e.height / r), b = Math.min(window.devicePixelRatio || 1, 2);
    vo.width = Math.max(1, Math.floor(d * b)), vo.height = Math.max(1, Math.floor(f * b)), vo.style.width = d + "px", vo.style.height = f + "px", li.setTransform(b, 0, 0, b, 0, 0);
  }
  function Ks() {
    var e;
    return Ye || ((e = Yt[oe]) == null ? void 0 : e.kind) === "rest";
  }
  function Ld() {
    const e = Yt[oe];
    return Ks() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function us(e) {
    if ($i = null, !x) return;
    if (!ct.workout.classList.contains("active")) {
      $i = requestAnimationFrame(us);
      return;
    }
    const r = vo.parentElement.getBoundingClientRect(), d = Fo(), f = Math.max(1, r.width / d), b = Math.max(1, r.height / d);
    if (li.clearRect(0, 0, f, b), di) {
      const A = Ld(), H = (e - El) % A / A, Y = 15, bt = Math.max(8, Math.round(Y * b / Math.max(1, f))), Mt = f / (Y + 1), vt = b / (bt + 1), mt = f * 0.5, Ft = b * 0.52, te = Math.hypot(mt, Ft), Pt = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Bt = 1; Bt <= bt; Bt++)
        for (let ue = 1; ue <= Y; ue++) {
          const ge = ue * Mt, Vt = Bt * vt, ve = Math.hypot(ge - mt, Vt - Ft) / te, De = Ks(), se = De ? Math.exp(-Math.pow((ve - (H * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ie = Math.exp(-Math.pow((ve - H * 1.25) * 7, 2)), ga = De ? se : ie, Ha = De ? 0.5 + 0.5 * Math.sin(H * Math.PI * 2 - ve * 3) ** 2 : 0.35 + 0.65 * Math.sin(H * Math.PI * 2 - ve * 5) ** 2, Ue = De ? 1.4 + ga * 4.2 * Ha : 1.2 + ga * 5 * Ha;
          li.beginPath(), li.arc(ge, Vt, Ue, 0, Math.PI * 2), li.fillStyle = `rgba(${Pt},${De ? 0.08 + ga * 0.48 : 0.05 + ga * 0.55})`, li.fill();
        }
    }
    $i = requestAnimationFrame(us);
  }
  new ResizeObserver(Xi).observe(vo.parentElement), Xi(), $i = requestAnimationFrame(us);
  const Na = o("exerciseTitle"), bo = o("exerciseMeta"), $s = o("stepLabel"), Ga = o("digits"), Ae = o("fill"), la = o("progress"), Dr = o("pause"), ci = o("nextName"), fs = o("nextMeta"), Oo = o("nextIcon"), wo = o("skipNextSession");
  let ma = null;
  function ye(e) {
    for (let r = Math.max(0, e); r < Yt.length; r++)
      if (!Yt[r].sessionHidden) return r;
    return -1;
  }
  function hs() {
    const e = Yt[oe];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ye) {
      const f = ye(oe + 1), b = f >= 0 ? Yt[f] : null;
      return b ? { name: b.name, meta: gs(b), icon: ms(b) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = ye(oe + 1), d = r >= 0 ? Yt[r] : null;
    return d ? { name: d.name, meta: gs(d), icon: ms(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Ji() {
    if (!Yt[oe]) return Yt.length;
    const r = ye(oe + 1);
    return r < 0 ? Yt.length : r + 1;
  }
  function ms(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function gs(e) {
    return e.kind === "video" ? "YouTube · " + rn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Br() {
    return Yt.length && Yt[Yt.length - 1].round || 1;
  }
  function Dl(e) {
    const r = Yt[e];
    if (!r) return "";
    const d = Br();
    if (d <= 1) return "Step " + (e + 1) + " of " + Yt.length;
    if (r.roundBreak) return "Round " + r.round + " of " + d + " · Rest";
    const f = Yt.filter((b) => b.round === r.round && !b.roundBreak).length;
    return "Round " + r.round + " of " + d + " · Step " + (r.roundIndex + 1) + " of " + f;
  }
  function vs() {
    return la.querySelector('[data-step="' + oe + '"]');
  }
  function Ad() {
    Yt[oe] && Number(la.dataset.round) !== (Yt[oe].round || 1) && un(), [...la.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < oe), e.classList.toggle("active", r === oe), e.classList.toggle("rewindable", r <= oe), e.disabled = r > oe, r === oe && e.style.setProperty("--segment-progress", "0%");
    }), Yt[oe] && ($s.textContent = Dl(oe), jo());
  }
  function Bl(e) {
    const r = Yt.indexOf(e);
    r < 0 || r <= oe || (e.sessionHidden = !e.sessionHidden, da(), me((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function pi() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = Ji(), d = Yt.slice(r);
    (_o === "all" ? d : d.slice(0, Math.max(1, Number(_o) || 1))).forEach((b) => {
      const A = document.createElement("section");
      A.className = "upcomingCard" + (b.sessionHidden ? " sessionHidden" : "") + (il(b) ? " noMeta" : ""), A.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + _a(ms(b)) + '</div><div><div class="upcomingName">' + Zt(b.name) + '</div><div class="upcomingMeta">' + Zt(gs(b)) + (Br() > 1 ? " · round " + b.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (b.sessionHidden ? "Include this session" : "Skip this session") + "</button>", A.querySelector(".skipSessionBtn").addEventListener("click", () => Bl(b)), e.appendChild(A);
    });
  }
  function da() {
    var r;
    const e = hs();
    ci.textContent = e.name, fs.textContent = e.meta, Oo.innerHTML = _a(e.icon);
    {
      const d = Ye ? Yt[ye(oe + 1)] : ((r = Yt[oe]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Yt[ye(oe + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(d && il(d)));
    }
    if (ma = null, Ye) {
      const d = ye(oe + 1);
      d >= 0 && (ma = Yt[d]);
    } else {
      const d = Yt[oe];
      if (d && d.rest > 0)
        ma = null;
      else {
        const f = ye(oe + 1);
        f >= 0 && (ma = Yt[f]);
      }
    }
    wo && (wo.hidden = !ma, wo.textContent = ma != null && ma.sessionHidden ? "Include this session" : "Skip this session"), pi();
  }
  wo.addEventListener("click", () => {
    ma && (ma.sessionHidden = !ma.sessionHidden, me((ma.sessionHidden ? "Hidden " : "Included ") + ma.name + " for this session"), da());
  });
  let pn = null, bs = null;
  function Rr(e, r = {}) {
    const d = ne[Jt];
    s.fire(e, { move: (d == null ? void 0 : d.name) || "", move_id: Jt, ...r });
  }
  function Rl() {
    const e = ne[Jt];
    pn = { key: Jt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(bs), bs = setInterval(() => {
      pn && !on && pn.active++;
    }, 1e3), Rr("started", { steps: Yt.length });
  }
  function ws(e) {
    if (clearInterval(bs), !pn) return;
    const r = pn;
    pn = null, Rr(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (be.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), be.history = be.history.slice(0, 1e3), nn(), vi(), mn());
  }
  let $a = null, Nr = null, En = !1;
  function Dn() {
    return he().sounds !== !1;
  }
  function Nl() {
    if (Dn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), $a = $a || new (window.AudioContext || window.webkitAudioContext)(), $a.state === "suspended" && $a.resume();
      } catch {
        $a = null;
      }
  }
  function qo(e, r, d, { to: f = e, vol: b = 0.25, type: A = "sine" } = {}) {
    const H = $a.currentTime + r, Y = $a.createOscillator(), bt = $a.createGain();
    Y.type = A, Y.frequency.setValueAtTime(e, H), f !== e && Y.frequency.exponentialRampToValueAtTime(f, H + d), bt.gain.setValueAtTime(1e-4, H), bt.gain.exponentialRampToValueAtTime(b, H + 0.01), bt.gain.exponentialRampToValueAtTime(1e-4, H + d), Y.connect(bt).connect($a.destination), Y.start(H), Y.stop(H + d + 0.02);
  }
  const Xs = {
    tick: () => qo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      qo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), qo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => qo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      qo(523, 0, 0.16, { type: "triangle" }), qo(659, 0.16, 0.16, { type: "triangle" }), qo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Bn(e) {
    if (!(!Dn() || !$a))
      try {
        $a.state === "suspended" && $a.resume(), Xs[e]();
      } catch {
      }
  }
  function Pr() {
    Xe >= 1 && Xe <= 3 && Xe !== Nr && (Nr = Xe, Bn("tick"));
  }
  function Pl() {
    Nl(), T("workout"), Qs();
    const e = ye(0);
    e >= 0 && Yt[e].kind === "video" && Ol(Yt[e]);
  }
  function Js() {
    xa(), ws(!1), clearInterval(ea), clearInterval(Yn), Ye = !1, xo(!1), o("app").classList.remove("resting"), Vi.classList.remove("active"), T("home");
  }
  function Qs() {
    Vi.classList.add("active");
    let e = 5;
    ls.textContent = e, Bn("tick"), requestAnimationFrame(cs), clearInterval(Yn), Yn = setInterval(() => {
      e--, e > 0 ? (ls.textContent = e, Bn("tick"), cs()) : (clearInterval(Yn), ls.textContent = "GO", Bn("move"), En = !0, cs(), setTimeout(() => {
        Vi.classList.remove("active"), cancelAnimationFrame(_r), Xa();
      }, 650));
    }, 1e3);
  }
  function un() {
    var r;
    la.innerHTML = "";
    const e = ((r = Yt[Math.max(0, oe)] || Yt[0]) == null ? void 0 : r.round) || 1;
    la.dataset.round = e, Yt.forEach((d, f) => {
      if ((d.round || 1) !== e) return;
      const b = document.createElement("button");
      b.dataset.step = f, b.type = "button", b.className = "progressSegment", b.setAttribute("aria-label", "Go to " + d.name), b.addEventListener("click", () => {
        f <= oe && _d(f);
      }), la.appendChild(b);
    });
  }
  function xo(e) {
    e = !!e;
    const r = on !== e;
    if (on = e, Dr.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), Ba && He)
      try {
        e ? He.pauseVideo() : He.playVideo();
      } catch {
      }
    r && pn && Rr(e ? "paused" : "resumed");
  }
  function _d(e) {
    e < 0 || e >= Yt.length || e > oe || (clearInterval(ea), Ye = !1, o("app").classList.remove("resting"), oe = e, xo(!1), jn(), ea = setInterval(zo, 1e3));
  }
  function Xa() {
    if (oe = ye(0), xo(!1), un(), oe < 0) {
      Na.textContent = "No activities", bo.textContent = "Open Edit and enable or add a movement", bo.hidden = !1;
      return;
    }
    Rl(), jn(), clearInterval(ea), ea = setInterval(zo, 1e3);
  }
  const Ir = o("videoStage"), eo = o("videoSound"), Qi = 0, ui = 1, tl = 2;
  let Il = 0, fi = null, yo = null, He = null, ko = null, tr = 0, xs = !1, Ba = null, er = null;
  function Hl() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : fi || (fi = new Promise((r, d) => {
      const f = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          f == null || f();
        } catch {
        }
      };
      const b = setInterval(() => {
        var H;
        (H = window.YT) != null && H.Player && (clearInterval(b), clearTimeout(A), r(window.YT));
      }, 100), A = setTimeout(() => {
        clearInterval(b), fi = null, d(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const H = document.createElement("script");
        H.src = "https://www.youtube.com/iframe_api", H.async = !0, H.onerror = () => {
          clearInterval(b), clearTimeout(A), fi = null, d(new Error("YouTube did not load"));
        }, document.head.appendChild(H);
      }
    }), fi);
  }
  function Fl() {
    return yo || (yo = Hl().then((e) => new Promise((r) => {
      const d = document.createElement("div");
      o("videoFrame").appendChild(d), He = new e.Player(d, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(He), onStateChange: (f) => ao(f.data), onError: (f) => Mo(f.data) }
      });
    })), yo.catch(() => {
      yo = null;
    }), yo);
  }
  function Ol(e) {
    !(e != null && e.videoId) || e.videoError || Fl().then((r) => {
      Ba || ko === e.videoId || (ko = e.videoId, tr = Number(e.start) || 0, xs = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: tr }));
    }).catch(() => {
    });
  }
  function Fe() {
    const e = ye(oe + 1);
    e >= 0 && Yt[e].kind === "video" && Ol(Yt[e]);
  }
  function ao(e) {
    if (!Ba) {
      e === ui && !xs && (xs = !0, He.pauseVideo(), He.seekTo(tr, !0));
      return;
    }
    Ir.classList.toggle("playing", e === ui), Yt[oe] === Ba && performance.now() > Il && (e === ui && on ? xo(!1) : e === tl && !on && xo(!0)), e === ui && al(Ba.videoId, He.getDuration()) && nn(), e === Qi && fn();
  }
  function Mo(e) {
    const r = Ba;
    if (!r) {
      ko = null;
      return;
    }
    e === 101 || e === 150 ? (Ed(r.videoId), me("That video can’t play outside YouTube, so it was skipped")) : me("The video couldn’t play, so it was skipped"), fn();
  }
  function So(e) {
    if (o("app").classList.add("videoStep"), eo.hidden = !0, Ba = e, clearTimeout(er), !e.videoId) {
      me("This video step has no link yet, so it was skipped"), setTimeout(() => fn(), 0);
      return;
    }
    Fl().then((r) => {
      if (Ba !== e) return;
      Il = performance.now() + 1500;
      const d = Number(e.start) || 0;
      ko !== e.videoId ? (ko = e.videoId, tr = d, r.loadVideoById({ videoId: e.videoId, startSeconds: d })) : (r.seekTo(d, !0), r.playVideo()), r.unMute(), on && r.pauseVideo(), er = setTimeout(() => {
        Ba !== e || on || (r.getPlayerState() !== ui ? (r.mute(), r.playVideo(), eo.hidden = !1) : r.isMuted() && (eo.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ba === e && (me("YouTube didn’t load, so the video was skipped"), fn());
    });
  }
  function ar() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), d = e.getBoundingClientRect().top, f = (r == null ? void 0 : r.offsetHeight) || 42, b = window.innerHeight - d - 16 - f - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(b)) + "px");
  }
  window.addEventListener("resize", ar);
  function xa() {
    clearTimeout(er);
    const e = Ba;
    if (Ba = null, o("app").classList.remove("videoStep"), Ir.classList.remove("playing"), eo.hidden = !0, e && He) {
      try {
        He.pauseVideo();
      } catch {
      }
      ko = null;
    }
  }
  function fn() {
    const e = Ba;
    !e || Yt[oe] !== e || (xa(), clearInterval(ea), hi(), ea = setInterval(zo, 1e3));
  }
  eo.addEventListener("click", () => {
    He && (He.unMute(), He.playVideo()), eo.hidden = !0;
  });
  function el(e) {
    var f;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const d = He && Ba === e && Number((f = He.getDuration) == null ? void 0 : f.call(He)) || 0;
    return Number(e.end) || d || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function Wo(e, r) {
    const d = ne[Jt];
    [fe, pa, Ge, d == null ? void 0 : d.warmup, d == null ? void 0 : d.strength, d == null ? void 0 : d.cooldown, d == null ? void 0 : d.sequence].forEach((f) => (Array.isArray(f) ? f : []).forEach((b) => {
      b && b.kind === "video" && b.videoId === e && r(b);
    }));
  }
  function al(e, r) {
    r = Math.round(Number(r) || 0);
    let d = !1;
    return e && r > 0 && Wo(e, (f) => {
      f.videoDuration !== r && (f.videoDuration = r, d = !0);
    }), d;
  }
  function Ed(e) {
    Wo(e, (r) => {
      r.videoError = "embed";
    }), nn();
  }
  function ql(e) {
    const r = e.videoId;
    if (!r) return;
    const d = () => {
      Va.classList.contains("open") ? aa || Le() : (Le(), nn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((f) => f.ok ? f.json() : Promise.reject(f.status)).then((f) => {
      e.videoId === r && (e.videoTitle = f.title || "", e.autoName && f.title && (e.name = f.title), d());
    }).catch((f) => {
      e.videoId === r && f === 401 && (e.videoError = "embed", d());
    }), ya(r).then((f) => {
      al(r, f) && d();
    }).catch((f) => {
      f === "embed" && e.videoId === r && (e.videoError = "embed", d());
    });
  }
  function ya(e) {
    return Hl().then((r) => new Promise((d, f) => {
      const b = document.createElement("div");
      b.className = "videoProbe", b.setAttribute("aria-hidden", "true");
      const A = document.createElement("div");
      b.appendChild(A), o("app").appendChild(b);
      let H = null, Y = !1;
      const bt = (mt, Ft) => {
        Y || (Y = !0, clearTimeout(Mt), setTimeout(() => {
          try {
            H == null || H.destroy();
          } catch {
          }
          b.remove();
        }, 0), Ft ? f(Ft) : d(mt));
      }, Mt = setTimeout(() => bt(0), 2e4), vt = () => {
        var Ft;
        const mt = Number((Ft = H == null ? void 0 : H.getDuration) == null ? void 0 : Ft.call(H)) || 0;
        return mt > 0 && bt(mt), mt > 0;
      };
      H = new r.Player(A, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            vt() || (H.mute(), H.playVideo());
          },
          onStateChange: () => vt(),
          onError: (mt) => bt(0, mt.data === 101 || mt.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function jn() {
    Ye = !1;
    const e = Yt[oe];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? So(e) : xa(), Xe = e.duration, Ao = e.duration, Nr = null, En ? En = !1 : Bn(e.kind === "rest" ? "rest" : "move"), Na.textContent = e.name, bo.textContent = e.group, bo.hidden = !0, $s.textContent = Dl(oe), pn && Rr("step", { name: e.name, group: e.group, kind: e.kind, step: oe + 1, of: Yt.length, round: e.round || 1, rounds: Br(), duration: e.duration }), da(), Ad(), Fe(), e.kind === "video" && setTimeout(ar, 0);
  }
  function jo() {
    var b;
    const e = ((b = Yt[oe]) == null ? void 0 : b.kind) === "video" && !Ye, r = e && Xe >= 60;
    Ga.textContent = r ? rn(Xe) : Xe, Ga.classList.toggle("long", r), e && (o("videoClock").textContent = rn(Xe) + " left");
    const d = Xe / Ao * 100;
    Ae.style.width = d + "%";
    const f = vs();
    if (f && !Ye) {
      const A = 100 - d;
      f.style.setProperty("--segment-progress", A + "%");
    }
  }
  function zo() {
    var r, d;
    if (on) return;
    const e = Yt[oe];
    if ((e == null ? void 0 : e.kind) === "video" && !Ye && Ba === e) {
      const f = Number((r = He == null ? void 0 : He.getCurrentTime) == null ? void 0 : r.call(He)) || 0, b = Number(e.start) || 0, A = el(e);
      Ao = Math.max(1, A - b), (f > b || ((d = He == null ? void 0 : He.getPlayerState) == null ? void 0 : d.call(He)) === ui) && (Xe = Math.max(0, Math.ceil(A - f))), jo(), Pr(), f > b && f >= A - 0.25 && fn();
      return;
    }
    Xe--, jo(), Pr(), Xe <= 0 && (e.rest > 0 ? Wl(e.rest) : hi());
  }
  function Wl(e) {
    var d;
    Ye = !0, o("app").classList.add("resting");
    const r = vs();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(ea), Xe = e, Ao = e, Nr = null, Bn("rest"), pn && Rr("rest", { duration: e }), Na.textContent = "Rest", bo.textContent = (d = Yt[oe]) != null && d.roundBreakAfter ? "Round " + (Yt[oe].round + 1) + " next" : "Recovery", da(), jo(), ea = setInterval(() => {
      on || (Xe--, jo(), Pr(), Xe <= 0 && (clearInterval(ea), hi(), ea = setInterval(zo, 1e3)));
    }, 1e3);
  }
  function hi() {
    Ye = !1;
    const e = ye(oe + 1);
    if (e >= 0)
      oe = e, jn();
    else {
      clearInterval(ea), xa(), xo(!1), o("app").classList.remove("resting"), Na.textContent = "Complete", bo.textContent = "Move finished", bo.hidden = !1, Ga.textContent = "✓";
      {
        const r = Br();
        $s.textContent = r > 1 ? r + " rounds done" : Yt.filter((d) => !d.roundBreak).length + " steps done";
      }
      ws(!0), Bn("done");
      {
        const r = ee(7).reduce((d, f) => d + f.minutes, 0);
        bo.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Ae.style.width = "100%", da();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    jl(), xo(!1);
  });
  function jl() {
    clearInterval(ea);
    const e = Yt[oe];
    if (Ye) {
      Ye = !1, o("app").classList.remove("resting");
      const d = ye(oe + 1);
      d >= 0 ? (oe = d, jn(), ea = setInterval(zo, 1e3)) : hi();
      return;
    }
    if (e && e.rest > 0) {
      Wl(e.rest);
      return;
    }
    const r = ye(oe + 1);
    r >= 0 ? (oe = r, jn(), ea = setInterval(zo, 1e3)) : hi();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(ea), xo(!1), Ye) {
      const e = Yt[oe];
      Xe = e.rest, Ao = e.rest, Nr = null, Bn("rest"), Na.textContent = "Rest", bo.textContent = "Recovery", o("app").classList.add("resting"), da(), jo();
    } else
      jn();
    ea = setInterval(Ye ? () => {
      on || (Xe--, jo(), Pr(), Xe <= 0 && (clearInterval(ea), hi(), ea = setInterval(zo, 1e3)));
    } : zo, 1e3);
  });
  function nr(e, r, d, f) {
    let b = 0, A = null, H = !1;
    function Y() {
      A && cancelAnimationFrame(A), A = null, b = 0, H = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function bt(mt) {
      if (!H) return;
      b || (b = mt);
      const Ft = Math.min(1, (mt - b) / d);
      if (r.style.width = Ft * 100 + "%", Ft >= 1) {
        H = !1, A && cancelAnimationFrame(A), A = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), f();
        return;
      }
      A = requestAnimationFrame(bt);
    }
    function Mt(mt) {
      var Ft;
      if (!(mt && mt.button !== void 0 && mt.button !== 0)) {
        mt == null || mt.preventDefault(), Y(), H = !0, e.classList.add("holding");
        try {
          (Ft = e.setPointerCapture) == null || Ft.call(e, mt.pointerId);
        } catch {
        }
        A = requestAnimationFrame(bt);
      }
    }
    function vt() {
      H && Y();
    }
    e.addEventListener("pointerdown", Mt), e.addEventListener("pointerup", vt), e.addEventListener("pointercancel", vt), e.addEventListener("lostpointercapture", vt), e.addEventListener("keydown", (mt) => {
      (mt.key === " " || mt.key === "Enter") && !mt.repeat && Mt(mt);
    }), e.addEventListener("keyup", (mt) => {
      (mt.key === " " || mt.key === "Enter") && vt();
    });
  }
  const Dd = o("endWorkout");
  nr(Dd, o("holdEndFill"), 1500, Js);
  const or = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    or.classList.add("open"), or.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    or.classList.remove("open"), or.setAttribute("aria-hidden", "true");
  });
  function Bd() {
    const e = Jt, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ne[e], be.order = be.order.filter((f) => f !== e);
    let d = n.querySelector(".workoutPanel[data-workout]");
    if (!d) {
      const f = "custom-" + Date.now();
      ne[f] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, be.order.push(f), d = Aa(f, ne[f]);
    }
    or.classList.remove("open"), or.setAttribute("aria-hidden", "true"), mo = null, Ar(), ua(d.dataset.workout), nn(), me("Move deleted");
  }
  nr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, Bd);
  const Pa = n.querySelector(".rubberTabs"), Vo = o("rubberIndicator");
  function ir(e, r = !0) {
    if (!e || !Pa || !Vo) return;
    const d = Pa.getBoundingClientRect(), f = e.getBoundingClientRect();
    Vo.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const b = Fo();
    Vo.style.left = (f.left - d.left) / b + Pa.scrollLeft + "px", Vo.style.width = f.width / b + "px", r && (Vo.style.transform = "scaleX(1.08)", setTimeout(() => Vo.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), ir(e, !0);
  })), requestAnimationFrame(() => ir(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => ir(n.querySelector(".tab.active"), !1));
  const ys = o("pixelTrailToggle"), Hr = o("rippleToggle"), rr = o("trailStrength"), sr = o("trailLife");
  function hn(e, r) {
    he()[e] = r, nn();
  }
  const nl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ol(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function il(e) {
    var r;
    return !!((r = he().hideMeta) != null && r[ol(e)]);
  }
  function zl() {
    const e = /* @__PURE__ */ new Map(), r = (d, f, b) => {
      if (!d) return;
      Array.isArray(d) && (d = { name: d[1], group: d[2], kind: "work" });
      const A = ol(d);
      let H = e.get(A);
      H || (H = { key: A, label: A === "rest" ? "Rest" : A === "video" ? "Video" : String(d.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(A, H)), H.kinds.add(A === "rest" ? "Rest" : A === "video" ? "Video" : f), H.moves.add(b), H.count++;
    };
    return Object.values(ne).forEach((d) => {
      const f = d.name || "Move";
      (d.warmup || (d.customSequence ? [] : It)).forEach((b) => r(b, "Warm-up", f)), (d.customSequence ? d.sequence || [] : d.strength || []).forEach((b) => r(b, b.presetRole === "warmup" ? "Warm-up" : b.presetRole === "cooldown" ? "Cooldown" : "Movement", f)), (d.cooldown || (d.customSequence ? [] : ae)).forEach((b) => r(b, "Cooldown", f));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([d, f]) => {
      e.has(d) || e.set(d, { key: d, label: f, kinds: /* @__PURE__ */ new Set([f]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((d) => ({ ...d, kind: d.kinds.has("Movement") ? "Movement" : [...d.kinds][0], moves: [...d.moves] })).sort((d, f) => nl.indexOf(d.kind) - nl.indexOf(f.kind) || d.label.localeCompare(f.label));
  }
  let ks = "all";
  function Ms() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return zl().filter((r) => (ks === "all" || r.kind === ks) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((d) => d.toLowerCase().includes(e))));
  }
  function Fr() {
    const e = o("metaTableBody");
    if (!e) return;
    const r = he().hideMeta || {}, d = Ms();
    e.innerHTML = d.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', d.forEach((b) => {
      const A = !r[b.key], H = b.count ? (b.moves.length > 2 ? b.moves.slice(0, 2).join(", ") + " + " + (b.moves.length - 2) + " more" : b.moves.join(", ")) + " · " + b.count + " step" + (b.count === 1 ? "" : "s") : "Not used yet", Y = document.createElement("tr");
      Y.className = A ? "" : "off", Y.innerHTML = '<td><div class="metaType">' + Zt(b.label) + '</div><div class="metaSub">' + Zt(b.kind + " · " + H) + '</div></td><td class="metaKindCol">' + Zt(b.kind) + '</td><td class="metaUsedCol">' + Zt(H) + '</td><td class="metaSwitchCol"><button class="switch' + (A ? " on" : "") + '" type="button" role="switch" aria-checked="' + A + '" aria-label="Second line for ' + Zt(b.label) + ' on phones"></button></td>', Y.querySelector(".switch").addEventListener("click", () => mi([b.key], A)), e.appendChild(Y);
    });
    const f = d.filter((b) => r[b.key]).length;
    o("metaCount").textContent = d.length ? d.length + " type" + (d.length === 1 ? "" : "s") + (f ? " · " + f + " hidden on phones" : "") : "";
  }
  function mi(e, r) {
    const d = { ...he().hideMeta || {} };
    e.forEach((f) => {
      r ? d[f] = !0 : delete d[f];
    }), hn("hideMeta", d), Fr(), Je(), da();
  }
  o("metaSearch").addEventListener("input", Fr), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ks = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), Fr();
  })), o("metaHideAll").addEventListener("click", () => mi(Ms().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => mi(Ms().map((e) => e.key), !1));
  const lr = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...he().toggles || {} };
  function Ss() {
    n.querySelectorAll("[data-toggle]").forEach((d) => d.classList.toggle("on", lr[d.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([d, f]) => {
      o(f).hidden = lr[d] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((d) => lr[d] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    lr[e.dataset.toggle] = lr[e.dataset.toggle] === !1, Ss(), hn("toggles", { ...lr });
  })), Ss();
  function Rd() {
    ys.classList.toggle("on", _n), Hr.classList.toggle("on", di), rr.value = Math.round(Re * 100), o("trailStrengthValue").textContent = rr.value + "%", sr.value = Zi, o("trailLifeValue").textContent = sr.value + " ms";
  }
  he().trailEnabled !== void 0 && (_n = he().trailEnabled), he().rippleEnabled !== void 0 && (di = he().rippleEnabled), he().trailStrength !== void 0 && (Re = he().trailStrength), he().trailMaxAge !== void 0 && (Zi = he().trailMaxAge), Rd();
  const Cs = o("soundsToggle");
  Cs.classList.toggle("on", Dn()), Cs.addEventListener("click", () => {
    hn("sounds", !Dn()), Cs.classList.toggle("on", Dn()), Dn() && (Nl(), Bn("move"));
  }), ys.addEventListener("click", () => {
    _n = !_n, ys.classList.toggle("on", _n), _n || (Er = []), hn("trailEnabled", _n);
  }), Hr.addEventListener("click", () => {
    di = !di, Hr.classList.toggle("on", di), hn("rippleEnabled", di);
  }), rr.addEventListener("input", () => {
    Re = Number(rr.value) / 100, o("trailStrengthValue").textContent = rr.value + "%";
  }), rr.addEventListener("change", () => hn("trailStrength", Re)), sr.addEventListener("input", () => {
    Zi = Number(sr.value), o("trailLifeValue").textContent = sr.value + " ms";
  }), sr.addEventListener("change", () => hn("trailMaxAge", Zi)), Da.addEventListener("change", () => hn("upcomingCount", _o));
  function dr(e) {
    n.querySelectorAll(".themeBtn").forEach((d) => d.classList.toggle("active", d.dataset.theme === e));
    const r = e === "light";
    o("app").classList.toggle("light", r), s.setLight(r), To(n);
  }
  dr(he().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    dr(e.dataset.theme), hn("theme", e.dataset.theme);
  }));
  const Ja = { steps: null, weather: null, ...he().entities || {} };
  let je = null, Ts = {};
  function rl(e) {
    const r = Object.values(e).filter((Y) => Y.entity_id.startsWith("sensor.") || Y.entity_id.startsWith("input_number.")), d = (Y) => Y.attributes.friendly_name || Y.entity_id, f = r.filter((Y) => /step/i.test(Y.entity_id) || /step/i.test(d(Y)) || ["steps", "step"].includes(String(Y.attributes.unit_of_measurement || "").toLowerCase())), b = r.filter((Y) => !f.includes(Y)), A = (Y, bt) => d(Y).localeCompare(d(bt)), H = (Y, bt) => /health_steps/.test(bt.entity_id) - /health_steps/.test(Y.entity_id) || A(Y, bt);
    return { suggested: f.sort(H), rest: b.sort(A), label: d };
  }
  function Ls(e) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: d, rest: f, label: b } = rl(e), A = (bt) => '<option value="' + Zt(bt.entity_id) + '">' + Zt(b(bt)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (d.length ? '<optgroup label="Suggested">' + d.map(A).join("") + "</optgroup>" : "") + (f.length ? '<optgroup label="All sensors">' + f.map(A).join("") + "</optgroup>" : ""), r.value = Ja.steps || "";
    const H = o("stepsStatus"), Y = Ja.steps && e[Ja.steps];
    H.textContent = Y ? "Connected · " + b(Y) : H.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Ja.steps = o("stepsEntity").value || null, hn("entities", { ...Ja }), Ts = {}, Gl(), je && (Ls(je), Vl(je));
  });
  function Nd(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function ka() {
    const e = Ja.steps && (je == null ? void 0 : je[Ja.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function Vl(e) {
    var f;
    const r = Ja.steps, d = r ? Number((f = e[r]) == null ? void 0 : f.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(d) ? Nd(d) : "—" : "Set up in Settings";
  }
  let gi = 0;
  async function Gl() {
    const e = Ja.steps;
    if (!e || !s.ws) return;
    gi = Date.now();
    const r = /* @__PURE__ */ new Date(), d = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const f = await s.ws({ type: "recorder/statistics_during_period", start_time: d.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), b = (f == null ? void 0 : f[e]) || [], A = {};
      if (b.forEach((H) => {
        Number.isFinite(H.max) && (A[qe(new Date(H.start))] = H.max);
      }), !Object.keys(A).length) {
        const H = await s.ws({ type: "history/history_during_period", start_time: d.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((H == null ? void 0 : H[e]) || []).forEach((Y) => {
          const bt = Number(Y.s ?? Y.state), Mt = Y.lu ? Y.lu * 1e3 : Date.parse(Y.last_updated || Y.last_changed);
          if (!Number.isFinite(bt) || !Mt) return;
          const vt = qe(new Date(Mt));
          A[vt] = Math.max(A[vt] || 0, bt);
        });
      }
      Ts = A, mn();
    } catch {
    }
  }
  function vi() {
    mn();
  }
  vi(), setInterval(() => {
    vi(), Ze(), Ee();
  }, 10 * 60 * 1e3);
  function ee(e) {
    const r = {}, d = {};
    be.history.forEach((H) => {
      const Y = qe(new Date(H.start));
      r[Y] = (r[Y] || 0) + (H.seconds || 0) / 60, d[Y] = (d[Y] || 0) + 1;
    });
    const f = /* @__PURE__ */ new Date(), b = qe(f), A = [];
    for (let H = e - 1; H >= 0; H--) {
      const Y = new Date(f.getFullYear(), f.getMonth(), f.getDate() - H), bt = qe(Y), Mt = be.checkins.filter((mt) => mt.date === bt), vt = (mt) => {
        const Ft = Mt.map((te) => te[mt]).filter(Boolean);
        return Ft.length ? Ft.reduce((te, Wt) => te + Wt, 0) / Ft.length : null;
      };
      A.push({
        key: bt,
        date: Y,
        minutes: Math.round(r[bt] || 0),
        moves: d[bt] || 0,
        steps: bt === b && ka() != null ? ka() : Ts[bt] ?? null,
        mood: vt("mood"),
        energy: vt("energy")
      });
    }
    return A;
  }
  function Ul(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let d = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      d++, r--;
    return d;
  }
  function mn() {
    const e = o("insightCard");
    if (!e) return;
    const r = ee(30), d = Ul(r), f = r.reduce((Mt, vt) => Mt + vt.minutes, 0), b = /* @__PURE__ */ new Date(), A = qe(b), H = qe(new Date(b.getFullYear(), b.getMonth(), b.getDate() - (b.getDay() + 6) % 7)), Y = r.filter((Mt) => Mt.key >= H && Mt.key <= A).reduce((Mt, vt) => Mt + vt.minutes, 0), bt = (Mt, vt, mt) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + Mt + '</div><div><div class="activityRowName">' + Zt(vt) + '</div><div class="activityRowMeta">' + Zt(mt) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + _a("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + bt(_a("clock"), "This week", Y + " min") + bt(_a("streak"), "Streak", d + " day" + (d === 1 ? "" : "s")) + bt(_a("calendar"), "30 days", f + " min") + "</div>";
  }
  const Or = {
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
  }, Go = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", cr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, As = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Yl = 0;
  const sl = (e, r) => '<path class="' + r + '" d="' + e + '"/>', Pd = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', Rn = (e, r, d, f) => {
    const b = d * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (f < 1 ? ' opacity="' + f + '"' : "") + Pd(e, 2400) + ' d="M' + e + " " + (r - d) + "L" + (e + b) + " " + (r - b) + "L" + (e + d) + " " + r + "L" + (e + b) + " " + (r + b) + "L" + e + " " + (r + d) + "L" + (e - b) + " " + (r + b) + "L" + (e - d) + " " + r + "L" + (e - b) + " " + (r - b) + 'Z"/>';
  }, Zl = ([e, r, d], f) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + f + ')"/><defs><linearGradient id="' + f + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Id = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ll = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), dl = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], f) => '<circle class="wxFlake" style="animation-delay:-' + f * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function qr(e, r, d, f) {
    return e === "clear" ? r ? Zl(d ? As.l : As.s, f) + (d ? Rn(70, 20, 5.83, 1) + Rn(78.33, 41.67, 3.75, 0.8) + Rn(60, 71.67, 3.33, 0.6) : Rn(42, 12, 3.5, 1) + Rn(47, 25, 2.25, 0.8) + Rn(36, 43, 2, 0.6)) : Id(f, d) : e === "partly" ? (r ? Zl(d ? As.lp : As.sp, f) : d ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + sl(d ? cr.lp : cr.sp, r ? "wxCloudLight" : "wxBright") + (r ? d ? Rn(73.33, 16.67, 4.17, 0.9) : Rn(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? sl(d ? cr.lc : cr.s, r ? "wxCloudLight" : "wxBright") + (r ? d ? Rn(15, 15, 3.75, 0.8) + Rn(76.67, 13.33, 2.92, 0.6) : Rn(9, 9, 2.25, 0.8) + Rn(46, 8, 1.75, 0.6) : "") : sl(d ? cr.lr : cr.s, "wxCloudLight") + (e === "rain" ? ll(d) : dl(d));
  }
  const cl = () => {
    var e;
    return ((e = je == null ? void 0 : je["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Qa = he().weatherStyle || "bitmap", _s = he().weatherLayout === "strip" ? "strip" : "tiles", Kl = he().weatherMotion !== !1;
  const Co = () => Kl && !Ra(), pr = /* @__PURE__ */ new Map(), Wr = 700, pl = (e) => {
    const [r, d] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: d === "night" };
  };
  function jr(e, r, d, f = Qa, b, A) {
    let H = Go(e);
    const Y = H === "night" || (A != null ? !!A : !!d && cl());
    H === "night" && (H = "clear");
    const bt = r ? 90 : 54, Mt = Md(e, Y), vt = performance.now();
    let mt = b ? pr.get(b) : null;
    if (b && !mt ? pr.set(b, mt = { key: Mt, t0: -1e9 }) : mt && mt.key !== Mt && (mt.fromKey = mt.key, mt.from = mt.last || null, mt.key = Mt, mt.t0 = vt), f !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + Mt + '"' + (b ? ' data-wx-slot="' + b + '"' : "") + ' data-wx-style="' + f + '" data-wx-size="' + bt + '"></canvas></span>';
    let Ft = "";
    if (mt && vt - mt.t0 < Wr && (Co() || Ra())) {
      const te = pl(mt.fromKey);
      Ft = '<span class="wxLayer wxOut ' + te.k + (te.night ? " night" : "") + '" style="animation-delay:' + Math.round(mt.t0 - vt) + 'ms"><svg viewBox="0 0 ' + bt + " " + bt + '">' + qr(te.k, te.night, r, "wxg" + ++Yl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + H + (Y ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + bt + " " + bt + '">' + qr(H, Y, r, "wxg" + ++Yl) + "</svg>" + Ft + "</span>";
  }
  function zr() {
    const e = o("app"), r = getComputedStyle(e), d = (Y) => r.getPropertyValue(Y).trim(), f = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([Y, bt]) => {
      d(bt) && (f[Y] = d(bt));
    });
    const b = d("--color-text-primary") || "#f1f1f1", A = d("--color-bg-card") || "#222222", H = e.classList.contains("light");
    return { colors: f, ink: H ? b : A, paper: H ? A : b };
  }
  function To(e, r = performance.now()) {
    const d = e.querySelectorAll("canvas[data-wx]");
    if (!d.length) return;
    const f = zr(), b = Co(), A = Ra();
    d.forEach((H) => {
      var mt;
      const Y = H.dataset.wx, bt = H.dataset.wxSlot ? pr.get(H.dataset.wxSlot) : null;
      let Mt = dc(Y, f.colors);
      if (bt && bt.key === Y) {
        const Ft = (r - bt.t0) / Wr;
        Ft < 1 && (b || A) && (Mt = vu(bt.from || dc(bt.fromKey, f.colors), Mt, Math.max(0, Ft), f.colors, A)), bt.last = Mt;
      }
      const vt = Sp(Mt, { size: Number(H.dataset.wxSize) || 54, px: 2, oneBit: H.dataset.wxStyle === "onebit", colors: f.colors, ink: f.ink, paper: f.paper, clock: r, idle: b });
      H.width !== vt.w && (H.width = vt.w), H.height !== vt.h && (H.height = vt.h), (mt = H.getContext("2d")) == null || mt.putImageData(new ImageData(vt.data, vt.w, vt.h), 0, 0);
    });
  }
  let ur = null, ul = -1;
  function Vr(e) {
    if (ur = null, !x) return;
    const r = Co(), d = Math.floor(e / 100), f = [...pr.values()].some((bt) => e - bt.t0 < Wr), b = [...Es.values()].some((bt) => e - bt.t0 < bt.dur), A = ct.home.classList.contains("active"), H = Ia.classList.contains("open"), Y = r && Qa === "smooth" && (H || A && _s === "strip");
    !document.hidden && (f || b || Y || r && d !== ul) && (ul = d, A && (To(o("weatherCard"), e), fr(o("weatherCard"), e)), H && (To(Ia, e), fr(Ia, e))), (r || f || b) && (ur = requestAnimationFrame(Vr));
  }
  function bi() {
    o("app").classList.toggle("wxMotion", Co()), !ur && x && (ur = requestAnimationFrame(Vr));
  }
  let $l = [];
  const ra = 36e5, Xl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function zn() {
    const e = /* @__PURE__ */ new Date(), r = (A, H) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + A, H), d = [], f = [], b = [...Array(6)].map((A, H) => {
      const Y = r(H, 6), bt = r(H, 18), Mt = r(H + 1, 6), vt = $l.find((Ft) => qe(new Date(Ft.datetime)) === qe(Y)), mt = (Ft, te, Wt) => {
        const Pt = d.filter((ge) => ge.t >= +Ft && ge.t < +te);
        if (Pt.length) {
          const ge = {};
          return Pt.forEach((Vt) => {
            ge[Vt.c] = (ge[Vt.c] || 0) + (Xl.has(Vt.c) ? 2 : 1);
          }), Object.entries(ge).sort((Vt, ve) => ve[1] - Vt[1])[0][0];
        }
        const Bt = f.find((ge) => {
          const Vt = +new Date(ge.datetime);
          return Vt >= +Ft - 3 * ra && Vt < +te && (ge.is_daytime == null || !!ge.is_daytime == !Wt);
        });
        if (Bt) return Bt.condition;
        const ue = (vt == null ? void 0 : vt.condition) || "cloudy";
        return Wt && ue === "sunny" ? "clear-night" : ue;
      };
      return { start: +Y, end: +Mt, day: mt(Y, bt, !1), night: mt(bt, Mt, !0), hi: Number(vt == null ? void 0 : vt.temperature), lo: Number(vt == null ? void 0 : vt.templow) };
    });
    return { days: b, hours: d, start: b[0].start, end: b[5].end };
  }
  const fl = (e, r) => {
    const d = e.days.findIndex((b) => r < b.end);
    if (d < 0) return 1;
    const f = e.days[d];
    return Math.max(0, (d + (r - f.start) / (f.end - f.start)) / 6);
  }, Hd = (e, r) => {
    const d = Math.max(0, Math.min(0.99999, r)) * 6, f = Math.floor(d), b = e.days[f];
    return b.start + (d - f) * (b.end - b.start);
  };
  function hl(e, r) {
    const d = Math.max(0, e.days.findIndex((bt) => r < bt.end)), f = e.days[d], b = (r - f.start) / (f.end - f.start) >= 0.5;
    let A = b ? f.night : f.day, H = NaN;
    const Y = e.hours;
    if (Y.length && r >= Y[0].t - ra && r <= Y[Y.length - 1].t + ra) {
      let bt = Y.findIndex((mt) => mt.t > r);
      bt < 0 && (bt = Y.length);
      const Mt = Y[Math.max(0, bt - 1)], vt = Y[Math.min(Y.length - 1, bt)];
      A = Mt.c || A, H = vt.t > Mt.t ? Mt.temp + (vt.temp - Mt.temp) * Math.max(0, Math.min(1, (r - Mt.t) / (vt.t - Mt.t))) : Mt.temp;
    }
    if (!Number.isFinite(H)) {
      const bt = [];
      if (e.days.forEach((Mt) => {
        Number.isFinite(Mt.lo) && bt.push([Mt.start - ra, Mt.lo]), Number.isFinite(Mt.hi) && bt.push([Mt.start + 9 * ra, Mt.hi]);
      }), bt.length) {
        H = r <= bt[0][0] ? bt[0][1] : bt[bt.length - 1][1];
        for (let Mt = 1; Mt < bt.length; Mt++) if (r <= bt[Mt][0] && r > bt[Mt - 1][0]) {
          const [vt, mt] = bt[Mt - 1], [Ft, te] = bt[Mt];
          H = mt + (te - mt) * (1 - Math.cos(Math.PI * (r - vt) / (Ft - vt))) / 2;
          break;
        }
      }
    }
    return { cond: b && A === "sunny" ? "clear-night" : A, temp: H, night: b, day: f };
  }
  const ml = (e) => qe(new Date(e)) === qe(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Es = /* @__PURE__ */ new Map(), Fd = 900, Jl = 700;
  let Ds = null;
  const Ua = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    fr(r.target.parentElement), r.target.closest("#wxDialog") && bl();
  })) : null;
  function fr(e, r = performance.now()) {
    const d = e.querySelectorAll("canvas[data-wx-strip]");
    if (!d.length) return;
    const f = zn(), b = f.days.flatMap((mt) => [{ cond: mt.day, night: !1 }, { cond: mt.night, night: !0 }]), A = b.map((mt) => mt.cond).join(), H = zr(), Y = Co(), bt = Ra(), Mt = Number(qe(new Date(f.start)).replace(/\D/g, "")) % 9973;
    let vt = !1;
    d.forEach((mt) => {
      var ge;
      const Ft = mt.clientWidth, te = mt.clientHeight;
      if (!Ft || !te) return;
      const Wt = mt.dataset.wxStrip;
      let Pt = Es.get(Wt);
      Pt ? Pt.sig !== A && (Pt.prev = Pt.segs, Pt.sig = A, Pt.segs = b, Pt.t0 = r, Pt.dur = Jl) : Es.set(Wt, Pt = { sig: A, segs: b, prev: null, t0: r, dur: Fd });
      const Bt = Y || bt ? Math.min(1, Math.max(0, (r - Pt.t0) / Pt.dur)) : 1;
      Bt < 1 && (vt = !0);
      const ue = { width: Ft, height: te, colors: H.colors, clock: r, ambient: Y, seed: Mt, reveal: bt ? Bt : 1 - Math.pow(1 - Bt, 3), prev: Bt < 1 ? Pt.prev : null, reduce: bt };
      if (Qa === "smooth") {
        const Vt = Math.min(2, window.devicePixelRatio || 1), ve = Math.round(Ft * Vt), De = Math.round(te * Vt);
        mt.width !== ve && (mt.width = ve), mt.height !== De && (mt.height = De);
        const se = mt.getContext("2d");
        if (!se) return;
        se.setTransform(Vt, 0, 0, Vt, 0, 0), Bu(se, b, ue);
      } else {
        const Vt = Du(b, { ...ue, px: 2, oneBit: Qa === "onebit", ink: H.ink, paper: H.paper });
        mt.width !== Vt.w && (mt.width = Vt.w), mt.height !== Vt.h && (mt.height = Vt.h), (ge = mt.getContext("2d")) == null || ge.putImageData(new ImageData(Vt.data, Vt.w, Vt.h), 0, 0);
      }
    }), vt && bi();
  }
  function Ql() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const r = Ja.weather, d = r && (je == null ? void 0 : je[r]);
    if (!d) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + jr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", To(e);
      return;
    }
    const f = d.attributes || {}, b = f.temperature_unit || "°", A = (se) => Number.isFinite(Number(se)) ? Math.round(Number(se)) + "°" : "—", H = (f.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", Y = Or[d.state] || (d.state ? d.state.charAt(0).toUpperCase() + d.state.slice(1) : "—"), bt = qe(/* @__PURE__ */ new Date()), Mt = $l.slice(0, 7), vt = Mt.find((se) => qe(new Date(se.datetime)) === bt) || null, mt = Mt.filter((se) => qe(new Date(se.datetime)) >= bt).slice(0, 6), Ft = /* @__PURE__ */ new Date(), te = qe(new Date(Ft.getFullYear(), Ft.getMonth(), Ft.getDate() + 1)), Wt = vt ? "H " + A(vt.temperature) + "&ensp; L " + A(vt.templow) : "", Pt = (se) => {
      const ie = qe(new Date(se.datetime));
      return ie === bt ? "Today" : ie === te ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(se.datetime));
    }, Bt = Number.isFinite(Number(f.temperature)) ? Math.round(Number(f.temperature)) : "—", ue = (se) => {
      const ie = new Date(se.datetime);
      return Math.round((new Date(ie.getFullYear(), ie.getMonth(), ie.getDate()) - new Date(Ft.getFullYear(), Ft.getMonth(), Ft.getDate())) / 864e5);
    }, ge = (se) => (Or[se] || se || "").toLowerCase(), Vt = (se, ie) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ue(se) + '" aria-label="' + Zt(Pt(se) + ": " + ge(se.condition) + ", " + A(se.temperature) + " / " + A(se.templow) + ". Open the forecast") + '">' + jr(se.condition, !1, !1, Qa, "day" + ie) + '<div><div class="activityRowName">' + Zt(Pt(se)) + '</div><div class="activityRowMeta">' + A(se.temperature) + " / " + A(se.templow) + "</div></div></div>", ve = () => '<div class="wxStrip"><div class="wxStripDays">' + zn().days.map((ie, ga) => {
      const Ue = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ie.start)) + ": " + ge(ie.day) + (ge(ie.day) === ge(ie.night) ? " all day and night" : ", then " + ge(ie.night) + " overnight") + (Number.isFinite(ie.hi) ? ". High " + A(ie.hi) : "") + (Number.isFinite(ie.lo) ? ", low " + A(ie.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ga + '" aria-label="' + Zt(Ue) + '"><span class="wxDayName">' + Zt(ml(ie.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + A(ie.hi) + '</span><span class="wxLow">' + A(ie.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Zt("Now in " + H + ": " + Bt + "°, " + ge(d.state) + ". Open the forecast") + '"><div class="wxCurrent">' + jr(d.state, !0, !0, Qa, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Zt(String(Bt)) + '</span><span class="wxUnit">' + Zt(b) + '</span></div><div class="wxPlace">' + Zt(H) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Zt(Y) + "</div>" + (Wt ? '<div class="wxRange">' + Wt + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (mt.length ? _s === "strip" ? ve() : '<div class="activityRows wxDays">' + mt.map(Vt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", To(e);
    const De = e.querySelector("canvas[data-wx-strip]");
    Ds && Ds !== De && (Ua == null || Ua.unobserve(Ds)), Ds = De, De && (Ua == null || Ua.observe(De), fr(e)), bi(), vl();
  }
  const gl = o("weatherCard"), Gr = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const f = /* @__PURE__ */ new Date();
      Yr(+new Date(f.getFullYear(), f.getMonth(), f.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const d = e.closest("[data-wx-open]");
    d && Yr(Date.now(), d);
  };
  gl.addEventListener("click", (e) => Gr(e.target)), gl.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Gr(e.target));
  });
  const Ia = o("wxDialog"), Nn = o("wxGraph"), Ur = o("wxGraphWrap");
  let Vn = Date.now(), Uo = null, Bs = !1, Yo = null;
  function Yr(e, r) {
    const d = zn();
    Uo = r || null, Vn = Math.max(d.start, Math.min(d.end - ra, e)), Es.delete("dialog"), pr.delete("scrub"), Ia.classList.add("open"), Ia.setAttribute("aria-hidden", "false"), vl(), Ua == null || Ua.observe(Ia.querySelector("canvas[data-wx-strip]")), Nn.focus({ preventScroll: !0 }), bi();
  }
  function wi() {
    var e;
    Ia.classList.remove("open"), Ia.setAttribute("aria-hidden", "true"), Ua == null || Ua.unobserve(Ia.querySelector("canvas[data-wx-strip]")), (e = Uo == null ? void 0 : Uo.focus) == null || e.call(Uo, { preventScroll: !0 }), Uo = null;
  }
  function vl() {
    if (!Ia.classList.contains("open")) return;
    const e = zn();
    o("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Zt(ml(r.start)) + "</span>").join(""), bl(e), Zr(e), fr(Ia);
  }
  function Zr(e = zn()) {
    const r = hl(e, Vn), d = je == null ? void 0 : je[Ja.weather], f = (d == null ? void 0 : d.attributes) || {}, b = f.temperature_unit || "°", A = Math.abs(Vn - Date.now()) < ra / 2, H = A && d ? d.state : r.cond, Y = A && Number.isFinite(Number(f.temperature)) ? Math.round(Number(f.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", bt = Or[H] || (H ? H.charAt(0).toUpperCase() + H.slice(1) : "—"), Mt = A ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Vn / ra) * ra)), vt = r.day, mt = (Number.isFinite(vt.hi) ? "H " + Math.round(vt.hi) + "°" : "") + (Number.isFinite(vt.lo) ? "&ensp; L " + Math.round(vt.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + jr(H, !0, A, Qa, "scrub", A ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Zt(String(Y)) + '</span><span class="wxUnit">' + Zt(b) + '</span></div><div class="wxPlace">' + Zt(Mt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Zt(bt) + "</div>" + (mt ? '<div class="wxRange">' + mt + "</div>" : "") + "</div>", To(o("wxDialogNow")), Nn.setAttribute("aria-valuenow", String(Math.round((Vn - e.start) / ra))), Nn.setAttribute("aria-valuetext", Mt + ", " + bt.toLowerCase() + ", " + Y + "°"), Rs(e), bi();
  }
  function bl(e = zn()) {
    const r = o("wxGraphLine"), d = Ur.clientWidth, f = Ur.clientHeight;
    if (!d || !f) return;
    const b = [];
    for (let Bt = e.start; Bt <= e.end; Bt += ra) {
      const ue = hl(e, Bt).temp;
      Number.isFinite(ue) && b.push([fl(e, Bt) * d, ue]);
    }
    if (r.setAttribute("viewBox", "0 0 " + d + " " + f), b.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', Yo = null, Rs(e);
      return;
    }
    const A = b.map((Bt) => Bt[1]), H = Math.min(...A), Y = Math.max(...A), bt = Math.max(4, Y - H), Mt = Qa !== "smooth", vt = (Bt) => Mt ? Math.round(Bt / 2) * 2 : Math.round(Bt * 10) / 10;
    Yo = (Bt) => f * 0.84 - (Bt - H) / bt * f * 0.62;
    const mt = zr(), Ft = Qa === "onebit" ? mt.paper : "#ffffff", te = Qa === "onebit" ? mt.ink : "rgba(0,0,0,.28)", Wt = "M" + b.map((Bt) => vt(Bt[0]) + " " + vt(Yo(Bt[1]))).join(" L"), Pt = (Bt, ue) => {
      const ge = b.find((Vt) => Vt[1] === Bt);
      return '<text class="wxLineLabel" x="' + vt(Math.min(d - 14, Math.max(14, ge[0]))) + '" y="' + vt(Yo(Bt) + (ue ? 18 : -10)) + '" fill="' + Ft + '" stroke="' + te + '">' + Math.round(Bt) + "°</text>";
    };
    r.setAttribute("shape-rendering", Mt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Wt + '" fill="none" stroke="' + te + '" stroke-width="' + (Mt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Wt + '" fill="none" stroke="' + Ft + '" stroke-width="2" stroke-linejoin="round"/>' + Pt(Y, !1) + Pt(H, !0) + '<g id="wxCursorMark"></g>', Rs(e);
  }
  function Rs(e = zn()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const d = Ur.clientWidth, f = Ur.clientHeight, b = Qa !== "smooth", A = (Ft) => b ? Math.round(Ft / 2) * 2 : Ft, H = A(fl(e, Vn) * d), Y = hl(e, Vn).temp, bt = zr(), Mt = Qa === "onebit" ? bt.paper : "#ffffff", vt = Qa === "onebit" ? bt.ink : "rgba(0,0,0,.28)", mt = Yo && Number.isFinite(Y) ? A(Yo(Y)) : null;
    r.innerHTML = '<rect x="' + (H - 2) + '" y="0" width="4" height="' + f + '" fill="' + vt + '"/><rect x="' + (H - 1) + '" y="0" width="2" height="' + f + '" fill="' + Mt + '"/>' + (mt == null ? "" : b ? '<rect x="' + (H - 5) + '" y="' + (mt - 5) + '" width="10" height="10" fill="' + Mt + '" stroke="' + vt + '" stroke-width="2"/>' : '<circle cx="' + H + '" cy="' + mt + '" r="6" fill="' + Mt + '" stroke="' + vt + '" stroke-width="2"/>');
  }
  const t = (e) => {
    const r = Ur.getBoundingClientRect();
    r.width && (Vn = Hd(zn(), (e - r.left) / r.width), Zr());
  };
  Nn.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Bs = !0;
      try {
        Nn.setPointerCapture(e.pointerId);
      } catch {
      }
      t(e.clientX);
    }
  }), Nn.addEventListener("pointermove", (e) => {
    Bs && t(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Nn.addEventListener(e, () => {
    Bs = !1;
  })), Nn.addEventListener("keydown", (e) => {
    const r = zn(), d = { ArrowLeft: -ra, ArrowRight: ra, ArrowDown: -ra, ArrowUp: ra, PageUp: -24 * ra, PageDown: 24 * ra }[e.key];
    d ? (e.preventDefault(), Vn = Math.max(r.start, Math.min(r.end - ra, Math.round(Vn / ra) * ra + d)), Zr(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Vn = e.key === "Home" ? r.start : r.end - ra, Zr(r));
  }), o("wxDialogClose").addEventListener("click", wi), Ia.addEventListener("click", (e) => {
    e.target === Ia && wi();
  }), Ia.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), wi());
  }), Ql(), (Ht = (St = window.matchMedia) == null ? void 0 : (G = St.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Ht.call(G, "change", () => {
    bi(), To(n);
  }), bi();
  const a = o("tvNav");
  s.fullscreenSupported || (a.hidden = !0), a.addEventListener("click", () => s.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ct.workout.classList.contains("active") || Vi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Dr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(le.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== le.value && (le.value = r, le.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [B, D, q, le].forEach((e) => e.addEventListener("input", () => {
    const r = ne[Jt];
    r && (r.total = Number(B.value), r.work = Number(D.value), r.rest = Number(q.value)), Le();
  })), ot.addEventListener("click", Js), zt.addEventListener("click", () => T("settings")), o("settingsBack").addEventListener("click", Js), Dr.addEventListener("click", () => xo(!on)), ua(Jt), We(), Ze(), mn(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), nr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    be.history = [], be.checkins = [], Xt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    nn(), vi(), Ze(), We(), mn(), Ee(), me("Stats reset");
  });
  const i = o("morningTime"), l = o("eveningTime"), u = o("checkinAutoOpen");
  i.value = Wn().morning, l.value = Wn().evening, u.classList.toggle("on", he().checkinAutoOpen !== !1), [["morningTime", i], ["eveningTime", l]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (hn(e, r.value), Ee());
  })), u.addEventListener("click", () => {
    const e = he().checkinAutoOpen === !1;
    u.classList.toggle("on", e), hn("checkinAutoOpen", e);
  }), setTimeout(qt, 800);
  const v = o("checkinNotify"), h = o("checkinNotifyTarget"), w = o("checkinNotifyStatus"), M = w.textContent;
  function I() {
    const e = s.notifyServices(), r = e.filter((b) => b.startsWith("mobile_app_")), d = r.length ? r : e, f = (b) => b.replace(/^mobile_app_/, "").replace(/_/g, " ");
    h.innerHTML = d.map((b) => '<option value="' + Zt(b) + '">' + Zt(f(b)) + "</option>").join(""), !he().notifyTarget && d[0] && (he().notifyTarget = d[0]), h.value = he().notifyTarget || "";
  }
  function N() {
    const e = !!he().notifyOn;
    v.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const r = Wn();
    w.textContent = e ? "Sends at " + r.morning + " and " + r.evening : M;
  }
  async function F() {
    const e = !!he().notifyOn;
    try {
      return await s.setReminderAutomation(e ? { target: he().notifyTarget, times: Wn() } : null), !0;
    } catch {
      return me("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  v.addEventListener("click", async () => {
    const e = !he().notifyOn;
    if (e && (I(), !he().notifyTarget)) {
      me("Install the Companion app on your phone first");
      return;
    }
    he().notifyOn = e, N(), await F() ? (nn(), me(e ? "Check-in notifications on" : "Check-in notifications off")) : (he().notifyOn = !e, N());
  }), h.addEventListener("change", () => {
    hn("notifyTarget", h.value), he().notifyOn && F();
  }), [i, l].forEach((e) => e.addEventListener("change", () => {
    N(), he().notifyOn && F();
  })), I(), N();
  let X = null;
  function lt() {
    X || (X = setTimeout(() => {
      X = null, mn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var d, f;
      const r = !je || je[Ja.weather] !== e[Ja.weather] || ((d = je["sun.sun"]) == null ? void 0 : d.state) !== ((f = e["sun.sun"]) == null ? void 0 : f.state);
      je = e, Ls(e), Vl(e), r && Ql(), Date.now() - gi > 60 * 60 * 1e3 && Gl(), lt();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (be.history = e.history, vi()), Array.isArray(e.history) && mn(), Array.isArray(e.checkins) && (be.checkins = e.checkins.map(kr), Ee(), We(), Ze(), vi(), mn()), e.profiles && !Va.classList.contains("open") && !pn)) {
        const r = yr(e);
        Object.keys(ne).forEach((d) => delete ne[d]), Object.assign(ne, r.profiles), be.order = r.order, ne[Jt] || (Jt = be.order[0]), Un(), ua(Jt);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, Ki || (Ki = requestAnimationFrame(ps)), $i || ($i = requestAnimationFrame(us)), bi(), ir(n.querySelector(".tab.active"), !1));
    }
  };
}
const Pu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Iu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Kr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ta = "made_up_", Zo = (n) => {
  var s;
  return (s = String(n).split(".")[1]) == null ? void 0 : s.startsWith(Ta);
}, nd = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function vc(n) {
  const s = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((s - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Hu(n) {
  const s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let c = +s; c < +n; c += 10 * 60 * 1e3) o += vc(new Date(c)) / 6;
  return o;
}
function Mc(n = /* @__PURE__ */ new Date()) {
  const s = [];
  for (let o = 0; o <= 96; o++) {
    const c = +n - (96 - o) * 15 * 60 * 1e3;
    s.push([c, vc(new Date(c))]);
  }
  return s;
}
function Fu({ onChange: n }) {
  const s = {}, o = {}, c = ($, W, ft, ht) => {
    s[$] = { entity_id: $, state: ft, attributes: ht, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[$] = W;
  }, m = ($, W, ft) => {
    const ht = s[$], wt = W ?? ht.state;
    s[$] = { ...ht, state: wt, attributes: { ...ht.attributes, ...ft }, last_changed: wt === ht.state ? ht.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = ($, W, ft, ht) => c("binary_sensor." + Ta + ($ ? $ + "_" : "") + nd(W), $, ht ? "on" : "off", { friendly_name: W, device_class: ft });
  Object.entries(Iu).forEach(([$, W]) => {
    if (W.temperature != null && c("sensor." + Ta + $ + "_temperature", $, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + Ta + $ + "_humidity", $, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + Ta + "robot", $, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + Ta + $, $, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [ft, ht, wt, it] = W.cover;
      c("cover." + Ta + $ + "_" + nd(ft), $, wt ? "open" : "closed", { friendly_name: ft, device_class: ht, current_position: wt, ...it != null ? { current_tilt_position: it } : {} });
    }
    if (W.humidifier && c("humidifier." + Ta + $, $, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + Ta + $ + "_solar_power", $, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + Ta + $ + "_solar_today", $, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + Ta + $ + "_" + nd(W.valve), $, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && x($, W.door, "door", W.doorOpen), W.window && x($, W.window, "window", !1), W.motion && x($, W.motion, "motion", !1), W.plant) {
      const [ft, ht, wt, it, et] = W.plant, _ = Ta + nd(ft), K = (at, ct, ot, zt, T) => c("sensor." + _ + "_" + at, $, String(ot), { friendly_name: ct, device_class: T, state_class: "measurement", unit_of_measurement: zt, plant_low: ot < Kr[at][0], plant_high: ot > Kr[at][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[at] });
      K("moisture", "Moisture", ht, "%", "moisture"), K("light", "Light", wt, "lx", "illuminance"), K("temperature", "Temperature", it, "°C", "temperature"), K("fertility", "Fertility", et, "µS/cm", "conductivity");
      const Tt = Object.entries({ moisture: ht, light: wt, temperature: it, fertility: et }).filter(([at, ct]) => ct < Kr[at][0] || ct > Kr[at][1]).map(([at, ct]) => at + (ct < Kr[at][0] ? " low" : " high"));
      c("plant." + _, $, Tt.length ? "problem" : "ok", { friendly_name: ft, moisture: ht, brightness: wt, temperature: it, conductivity: et, problem: Tt.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + Ta + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), c("sensor." + Ta + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, L = {};
  let S = null;
  function E() {
    const $ = /* @__PURE__ */ new Date();
    Object.keys(s).forEach((W) => {
      W.endsWith("_solar_power") && (s[W] = { ...s[W], state: vc($).toFixed(2) }), W.endsWith("_solar_today") && (s[W] = { ...s[W], state: Hu($).toFixed(1) });
    });
  }
  E();
  let j = 0;
  function P() {
    let $ = !1;
    const W = ++j % 10 === 0, ft = (it, et, _) => {
      m(it, et, _), $ = !0;
    };
    Object.entries(k).forEach(([it, et]) => {
      const _ = s[it].attributes.current_position, K = _ < et ? Math.min(et, _ + 10) : Math.max(et, _ - 10);
      K === et && delete k[it], ft(it, K === et ? K === 0 ? "closed" : "open" : et > _ ? "opening" : "closing", { current_position: K });
    }), Object.entries(L).forEach(([it, et]) => {
      const _ = s[it].attributes.current_tilt_position, K = _ < et ? Math.min(et, _ + 25) : Math.max(et, _ - 25);
      K === et && delete L[it], ft(it, null, { current_tilt_position: K });
    }), Object.keys(s).filter((it) => it.startsWith("climate.")).forEach((it) => {
      const et = s[it], _ = et.attributes, K = _.current_temperature, Tt = (et.state === "heat" || et.state === "auto") && K < _.temperature - 0.05, at = (et.state === "cool" || et.state === "auto") && K > _.temperature + 0.05, ct = et.state === "off" ? "off" : Tt ? "heating" : at ? "cooling" : "idle", ot = W ? Math.round((K + (Tt ? 0.1 : at ? -0.1 : 0)) * 10) / 10 : K;
      (ot !== K || ct !== _.hvac_action) && ft(it, null, { current_temperature: ot, hvac_action: ct });
    }), Object.keys(s).filter((it) => it.startsWith("humidifier.")).forEach((it) => {
      const et = s[it], _ = et.attributes, K = _.current_humidity, Tt = et.state === "on" && K < _.humidity, at = Tt && W ? K + 1 : K, ct = et.state !== "on" ? "off" : Tt ? "humidifying" : "idle";
      if (at !== K || ct !== _.action) {
        ft(it, null, { current_humidity: at, action: ct });
        const ot = "sensor." + Ta + o[it] + "_humidity";
        s[ot] && ft(ot, String(at));
      }
    });
    const ht = s["vacuum." + Ta + "robot"], wt = ht.attributes;
    ht.state === "cleaning" && W && ft(ht.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), ht.state === "returning" && ft(ht.entity_id, "docked", {}), ht.state === "docked" && wt.battery_level < 100 && ft(ht.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), S && Date.now() - S.at > 5e3 && (ft("alarm_control_panel." + Ta + "house", "armed_" + S.mode, {}), S = null), $ && n();
  }
  const O = setInterval(P, 1e3), V = setInterval(() => {
    E(), n();
  }, 60 * 1e3);
  function st($, W, ft) {
    const ht = ft == null ? void 0 : ft.entity_id;
    if (!s[ht]) return !1;
    const wt = s[ht], it = wt.attributes, et = (_, K) => m(ht, _, K);
    if ($ === "climate" && (W === "set_temperature" && et(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, ft.temperature)) }), W === "set_hvac_mode" && et(ft.hvac_mode, ft.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && et(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" })), $ === "cover") {
      const _ = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? ft.position : W === "toggle" ? it.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete k[ht], delete L[ht], et(it.current_position === 0 ? "closed" : "open")), _ != null && _ !== it.current_position && (k[ht] = _, et(_ > it.current_position ? "opening" : "closing"));
      const K = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? ft.tilt_position : null;
      W === "stop_cover_tilt" && delete L[ht], K != null && it.current_tilt_position != null && K !== it.current_tilt_position && (L[ht] = K);
    }
    if ($ === "humidifier" && (W === "set_humidity" && et(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, ft.humidity)) }), W === "set_mode" && et(null, { mode: ft.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const _ = W === "turn_on" || W === "toggle" && wt.state !== "on";
      et(_ ? "on" : "off", { action: _ ? "idle" : "off" });
    }
    if ($ === "vacuum" && (W === "start" && et("cleaning", { rooms: ft.rooms || it.rooms }), W === "pause" && et("paused"), W === "return_to_base" && et("returning", { rooms: [] }), W === "locate" && et(null, { located: Date.now() }), W === "set_rooms" && et(null, { rooms: ft.rooms })), $ === "valve") {
      const _ = W === "open_valve" || W === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && et(_ ? "open" : "closed");
    }
    if ($ === "alarm_control_panel") {
      W === "alarm_disarm" && (S = null, et("disarmed", { changed_by: "Matt" }));
      const _ = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      _ && (S = { mode: _, at: Date.now() }, et("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function nt($) {
    const W = ($ == null ? void 0 : $.states) || {}, ft = ($ == null ? void 0 : $.entities) || {}, ht = ($ == null ? void 0 : $.devices) || {}, wt = (D) => {
      var kt;
      const q = ft[D];
      return q && (q.area_id || q.device_id && ((kt = ht[q.device_id]) == null ? void 0 : kt.area_id)) || null;
    }, it = (D) => {
      const q = ft[D];
      return W[D] && W[D].state !== "unavailable" && !(q != null && q.hidden) && !(q != null && q.entity_category);
    }, et = {};
    Object.keys(W).forEach((D) => {
      const q = wt(D);
      q && it(D) && (et[q] || (et[q] = [])).push(D);
    });
    const _ = { ...W, ...s }, K = (D) => {
      var q, kt;
      return (kt = (q = _[D]) == null ? void 0 : q.attributes) == null ? void 0 : kt.device_class;
    }, Tt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], at = Object.keys(W).filter((D) => D.startsWith("vacuum.") && it(D)), ct = Object.values(($ == null ? void 0 : $.areas) || {}).filter((D) => !Pu.has(D.area_id)).map((D) => {
      const q = D.area_id, kt = et[q] || [], xt = (It) => kt.filter((fe) => fe.startsWith(It + ".")), Q = (It) => xt("sensor").filter((fe) => K(fe) === It), Ct = (It) => Object.keys(s).filter((fe) => o[fe] === q && It(fe)), Lt = (It, fe) => It.length ? It : Ct(fe), Qt = Lt(Q("temperature"), (It) => It.endsWith(q + "_temperature")), le = Lt(Q("humidity"), (It) => It.endsWith(q + "_humidity")), ia = Q("power").filter((It) => /^(W|kW)$/.test(_[It].attributes.unit_of_measurement || "")), Se = xt("binary_sensor").filter((It) => K(It) === "moisture"), Ai = Lt(xt("plant"), (It) => It.startsWith("plant.")).map((It) => ({ id: It, readings: Ct((fe) => fe.startsWith("sensor." + It.split(".")[1] + "_")) })), La = [...xt("binary_sensor").filter((It) => Tt.includes(K(It))), ...Ct((It) => It.startsWith("binary_sensor."))];
      return {
        id: q,
        name: D.name,
        icon: D.icon,
        readings: [...Qt.slice(0, 1), ...le.slice(0, 1), ...Se],
        power: ia.length ? ia.reduce((It, fe) => It + Number(_[fe].state) * (_[fe].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: xt("switch"),
        lights: xt("light"),
        actions: [...xt("light"), ...Lt(xt("climate"), (It) => It.startsWith("climate.")), ...Lt(xt("cover"), (It) => It.startsWith("cover.")), ...Lt(xt("humidifier"), (It) => It.startsWith("humidifier.")), ...Lt(xt("valve"), (It) => It.startsWith("valve.")), ...xt("media_player"), ...xt("vacuum"), ...at.length ? [] : Ct((It) => It.startsWith("vacuum."))],
        solar: Ct((It) => It.includes("_solar_")),
        plants: Ai,
        openings: La,
        alerts: [...Se, ...La].filter((It) => {
          var fe;
          return ((fe = _[It]) == null ? void 0 : fe.state) === "on";
        })
      };
    }).filter((D) => D.readings.length || D.plugs.length || D.actions.length || D.solar.length || D.plants.length), ot = Object.keys(W).find((D) => /^sensor\..*(p1_meter_power|grid_power)$/.test(D) && W[D].state !== "unavailable") || null, zt = (D) => Object.keys(W).filter((q) => q.startsWith(D + ".") && it(q)), T = zt("alarm_control_panel"), B = at.length ? at : ["vacuum." + Ta + "robot"];
    return {
      states: _,
      rooms: ct,
      grid: ot,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (D) => s[D] ? o[D] : wt(D),
      vacuums: B,
      homeVacuums: B.filter((D) => !ct.some((q) => q.actions.includes(D))),
      security: {
        alarms: T.length ? T : ["alarm_control_panel." + Ta + "house"],
        locks: zt("lock"),
        openings: [...Object.keys(s).filter((D) => D.startsWith("binary_sensor.")), "sensor." + Ta + "doorbell"]
      }
    };
  }
  return { model: nt, call: st, stop() {
    clearInterval(O), clearInterval(V);
  } };
}
const Ci = (n) => n < 0 ? 0 : n > 1 ? 1 : n, cc = (n) => {
  const s = String(n || "#000000").trim().replace("#", ""), o = s.length === 3 ? s.split("").map((c) => c + c).join("") : s;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Ou = (n) => "#" + n.map((s) => Math.round(Math.max(0, Math.min(255, s))).toString(16).padStart(2, "0")).join(""), Sc = {}, io = (n, s, o) => {
  const c = n + s + o;
  return Sc[c] || (Sc[c] = Ou(cc(n).map((m, x) => m + (cc(s)[x] - m) * o)));
}, Cc = {}, md = (n) => Cc[n] || (Cc[n] = cc(n));
function qu(n) {
  const s = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return s.partly = [io(s.clear[0], s.cloudy[0], 0.12), io(s.clear[1], s.cloudy[1], 0.12)], s.storm = [io(s.rain[0], "#000000", 0.22), io(s.rain[1], "#000000", 0.22)], s;
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
], Mi = (n, s) => (Wu[(s & 7) * 8 + (n & 7)] + 0.5) / 64, Ap = 1, _p = 2, Ep = 3, Dp = 4, Os = 5, wd = 6, pc = 7, Bp = 8, Tc = (n, s) => s <= 0.6665 && ((n - 0.5) * (n - 0.5) + (s - 0.2877) * (s - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (s - 0.416) * (s - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (s - 0.458) * (s - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && s >= 0.416), ju = (n, s, o) => {
  let c = !1;
  for (let m = 0, x = n.length - 1; m < n.length; x = m++) {
    const k = n[m], L = n[x];
    k[1] > o != L[1] > o && s < (L[0] - k[0]) * (o - k[1]) / (L[1] - k[1]) + k[0] && (c = !c);
  }
  return c;
};
function zu(n, s, o, c, { oneBit: m, ink: x, paper: k, snowInk: L }) {
  const S = new Uint8ClampedArray(o * c * 4), E = md(x), j = md(k);
  for (let P = 0; P < c; P++) for (let O = 0; O < o; O++) {
    const V = P * o + O, st = s[V];
    if (n[V] == null) continue;
    let nt = md(n[V]);
    if (m) {
      let $;
      st === Dp || st === Bp ? $ = !0 : st === Os ? $ = L : st === pc || st === wd ? $ = !1 : $ = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= Mi(O, P), (st === Ap || st === _p || st === Ep || st === wd) && (O > 0 && s[V - 1] !== st || O < o - 1 && s[V + 1] !== st || P > 0 && s[V - o] !== st || P < c - 1 && s[V + o] !== st) && ($ = !0), nt = $ ? E : j;
    }
    S[V * 4] = nt[0], S[V * 4 + 1] = nt[1], S[V * 4 + 2] = nt[2], S[V * 4 + 3] = 255;
  }
  return { w: o, h: c, data: S };
}
const Vu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Gu = (n) => Md(n, !1).split("/")[0], Wd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let s = Math.imul(n ^ n >>> 15, 1 | n);
  return s = s + Math.imul(s ^ s >>> 7, 61 | s) ^ s, ((s ^ s >>> 14) >>> 0) / 4294967296;
}, Uu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Yu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Zu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ku = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", $u = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Xu = [".##", "##.", ".#.", "#.."];
function Rp(n, { width: s, height: o, colors: c, wave: m = 0.38, soft: x = 6, glow: k = 0.6, columns: L = 6 }) {
  const S = { ...Sn, dawn: "#e5a77e", ...c }, E = qu(S), j = s, P = o, O = j / L, V = O / 2, st = Math.PI * 2, nt = n.length ? n : [{ cond: "cloudy", night: !1 }], $ = [...Array(L * 2)].map((wt, it) => {
    const et = nt[Math.min(it, nt.length - 1)], _ = Gu(et.cond), K = it % 2 === 1;
    return { cond: et.cond, k: _, night: K, sky: E[_][K ? 1 : 0], cover: Vu[_] };
  }), W = (wt) => P * (0.5 - m * Math.cos(st * (wt / O - 0.25)));
  return { C: S, S: $, W: j, H: P, cw: O, sw: V, TAU: st, yb: W, side: (wt, it, et) => {
    const _ = (wt ? W(it) - et : et - W(it)) / Math.max(3, x * 1.4) + 0.5;
    return _ <= 0 ? 0 : _ >= 1 ? 1 : _;
  }, glowAt: (wt) => {
    const it = ((wt / O - 0.25) % 1 + 1) % 1, et = Math.max(0, Math.min(L - 1, Math.round(wt / O - 0.25))), _ = Math.max(0, Math.min(L - 1, Math.round(wt / O - 0.75))), K = 1 - ($[2 * et].cover + $[2 * _ + 1].cover) / 2, Tt = Math.sin(Math.PI * Math.min(1, Math.max(0, W(wt) / P)));
    return { c: it < 0.5 ? S.dusk : S.dawn, a: k * (0.2 + 0.8 * K) * Tt * Tt };
  }, soft: x, tw: O * 0.3, sy: P / 90 };
}
function Np(n, { clock: s = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: x, side: k, C: L, TAU: S, sy: E, H: j } = n, P = s, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((nt, $) => {
    const W = Wd(c * 977 + $ * 131 + 7), ft = ($ + 0.5) * x, ht = nt.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[nt.k] : 0;
    for (let wt = 0; wt < ht; wt++) {
      const it = ft + (W() - 0.5) * x * 1.6, et = (6 + W() * 76) * E, _ = W() < 0.35, K = 1.8 + W() * 1.6, Tt = k(!0, it, et) * (_ ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(S * P / 2600 + wt * 1.7 + $) : 1);
      Tt >= 0.03 && O.stars.push({ x: it, y: et, big: _, size: K, o: Tt });
    }
    if (!nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const wt = ft + (W() - 0.5) * x * 0.3, it = Math.min(15, x * 0.29);
      O.suns.push({ x: wt, y: 32 * E, rad: it, halo: it * 2.8 * (o ? 1 + 0.07 * Math.sin(S * P / 3600 + $) : 1) });
    }
    if (nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const wt = Math.min(0.78, x * 0.55 / 34), it = ft - 23 * wt + (W() - 0.5) * x * 0.2;
      O.moons.push({ x: it + 23 * wt, y: (4 + (o ? 0.8 * Math.sin(S * P / 5200 + $) : 0)) * E + 23 * wt, d: 46 * wt });
    }
  });
  const V = Math.max(56, Math.min(100, j * 0.45)), st = Math.max(1, x / (V * 2.4));
  return m.forEach((nt, $) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[nt.k];
    if (!W) return;
    const ft = nt.k === "partly" ? 1 : Math.round(W * st), ht = Wd(c * 577 + $ * 71 + 3), wt = ($ + 0.5) * x, it = nt.k === "rain" || nt.k === "storm" || nt.night ? L.cloudNight : L.cloudDay, et = nt.night ? 0.82 : nt.k === "storm" ? 0.75 : 1;
    for (let _ = 0; _ < ft; _++) {
      const K = V / 46 * (nt.k === "partly" ? 1 : 0.8 + ht() * 0.4), Tt = wt + (nt.k === "partly" ? x * 0.12 : ((_ + 0.5) / ft - 0.5) * x * 0.95 + (ht() - 0.5) * x * 0.5 / ft), at = (nt.k === "partly" ? 40 : 6 + ht() * 26) * E, ct = o ? 2.5 * Math.sin(S * P / 9e3 + $ * 1.3 + _ * 2.1) : 0, ot = o ? 0.9 * Math.sin(S * P / 6100 + $ + _) : 0;
      O.clouds.push({ x: Tt - 23 * K + ct, y: at - 15.33 * K + ot, w: 46 * K, h: 30.66 * K, fill: it, o: et * (ft > 1 && _ === 0 ? 0.85 : 1) });
    }
  }), m.forEach((nt, $) => {
    const W = Wd(c * 313 + $ * 29 + 11), ft = ($ + 0.5) * x, ht = nt.cond === "pouring" ? 16 : nt.cond === "rainy" || nt.cond === "hail" ? 9 : nt.cond === "lightning-rainy" ? 12 : nt.cond === "snowy-rainy" ? 5 : 0;
    for (let it = 0; it < ht; it++) {
      let et = ft + (W() - 0.5) * x * 1.05, _ = 44 + W() * 36, K = 1;
      if (o) {
        const at = ((_ - 44 + P * 0.04) % 36 + 36) % 36;
        et -= 0.21 * (at - (_ - 44)), _ = 44 + at, K = Math.min(1, at / 6, (36 - at) / 6);
      }
      _ *= E;
      const Tt = k(nt.night, et, _) * K;
      Tt >= 0.05 && O.drops.push({ x: et, y: _, o: Tt });
    }
    const wt = nt.cond === "snowy" ? 11 : nt.cond === "snowy-rainy" ? 6 : 0;
    for (let it = 0; it < wt; it++) {
      let et = ft + (W() - 0.5) * x * 1.05, _ = 40 + W() * 44, K = 1;
      if (o) {
        const at = ((_ - 40 + P * 9e-3) % 44 + 44) % 44;
        _ = 40 + at, et += 1.6 * Math.sin(S * P / 2800 + it * 1.9 + $), K = Math.min(1, at / 6, (44 - at) / 6);
      }
      _ *= E;
      const Tt = k(nt.night, et, _) * K;
      Tt >= 0.05 && O.flakes.push({ x: et, y: _, o: Tt });
    }
    if (nt.k === "fog") {
      const it = nt.night ? "#c8ccd6" : "#ffffff", et = nt.night ? 0.28 : 0.62, _ = o ? 4 * Math.sin(S * P / 8e3 + $) : 0;
      for (let K = 0; K < 4; K++) O.fogs.push({ x: ft - x * 0.75 + K % 2 * x * 0.18 + (K % 2 ? _ : -_), y: (30 + K * 13) * E, w: x * 1.3, c: it, a: et });
    }
    if (nt.k === "storm") {
      const it = (P / 3400 + $ * 0.37) % 1;
      O.bolts.push({ x: ft + (W() - 0.5) * x * 0.3 - 5, y: 36 * E, o: o && !(it < 0.05 || it > 0.09 && it < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function Ju(n, s, o, c, m, x, k, L) {
  const { S, C: E, cw: j, yb: P, glowAt: O, soft: V, tw: st, sy: nt } = n, $ = new Array(o * c), W = new Uint8Array(o * c), ft = new Uint8Array(o * c), ht = (T, B, D, q, kt) => {
    D == null || T < 0 || B < 0 || T >= o || B >= c || (q >= 1 || q > Mi(T + 5, B + 3)) && ($[B * o + T] = D, W[B * o + T] = kt);
  }, wt = (T, B, D, q) => {
    for (let kt = Math.max(0, Math.floor(B - D) - 1); kt <= Math.min(c - 1, B + D + 1); kt++) for (let xt = Math.max(0, Math.floor(T - D) - 1); xt <= Math.min(o - 1, T + D + 1); xt++) q(xt, kt, xt + 0.5 - T, kt + 0.5 - B);
  }, it = (T, B, D) => {
    for (let kt = 0; kt < T.length - 1; kt++) {
      const xt = (kt + B) * j;
      if (D < xt - st / 2) return [T[kt], T[kt], 0];
      if (D <= xt + st / 2) return [T[kt], T[kt + 1], (D - xt + st / 2) / st];
    }
    const q = T[T.length - 1];
    return [q, q, 0];
  }, et = S.filter((T) => !T.night).map((T) => T.sky), _ = S.filter((T) => T.night).map((T) => T.sky), K = V / x, Tt = 16 * nt / x;
  for (let T = 0; T < o; T++) {
    const B = (T + 0.5) * m, D = P(B) / x, q = it(et, 0.75, B), kt = it(_, 1.25, B), xt = O(B);
    for (let Q = 0; Q < c; Q++) {
      const Ct = Mi(T, Q), Lt = Q + 0.5 - D, Qt = (K > 0.01 ? Ci(0.5 + Lt / K) : Lt > 0 ? 1 : 0) > Ct;
      let le = Qt ? q[2] > Ct ? q[1] : q[0] : kt[2] > Ct ? kt[1] : kt[0];
      (Qt ? Ci(((Q + 0.5) / c - 0.45) / 0.55) * 0.7 : Ci(1 - (Q + 0.5) / (c * 0.55)) * 0.7) > Mi(T + 2, Q + 5) && (le = Qt ? io(le, "#ffffff", 0.18) : io(le, "#000000", 0.25)), Qt && Lt >= 0 && Lt < Tt && xt.a * 1.3 * (1 - Lt / Tt) > Mi(T + 6, Q + 1) && (le = xt.c), $[Q * o + T] = le, ft[Q * o + T] = Qt ? 0 : 1;
    }
  }
  const at = io(E.sun, "#ffffff", 0.55), ct = io(E.moon, "#ffffff", 0.6);
  s.stars.forEach((T) => {
    const B = Math.floor(T.x / m), D = Math.floor(T.y / x);
    if (B < 0 || D < 0 || B >= o || D >= c || !ft[D * o + B] || T.o < 0.15) return;
    const q = T.o > 0.45 ? E.star : io(E.star, $[D * o + B], 0.5), kt = T.big && T.o > 0.6 ? Math.floor(T.size / m) : 0;
    ht(B, D, q, 1, pc);
    for (let xt = 1; xt <= kt; xt++) [[B - xt, D], [B + xt, D], [B, D - xt], [B, D + xt]].forEach((Q) => {
      Q[0] >= 0 && Q[1] >= 0 && Q[0] < o && Q[1] < c && ft[Q[1] * o + Q[0]] && ht(Q[0], Q[1], q, 1, pc);
    });
  }), s.suns.forEach((T) => {
    const B = Math.max(1.5, T.rad / m), D = T.x / m, q = T.y / x, kt = T.halo / m * 0.85;
    if (wt(D, q, kt, (xt, Q, Ct, Lt) => {
      const Qt = Math.sqrt(Ct * Ct + Lt * Lt);
      Qt > B && Qt < kt && !ft[Q * o + xt] && ht(xt, Q, at, 0.3 * (1 - (Qt - B) / (kt - B)), 0);
    }), L) {
      const xt = Math.floor(k / 500) % 2, Q = Math.max(1, B * 0.3);
      for (let Ct = 0; Ct < 8; Ct++) if (Ct % 2 === xt) for (let Lt = B + 1.2; Lt < B + 1.2 + Q; Lt += 0.7) ht(Math.floor(D + Math.cos(Ct * Math.PI / 4) * Lt), Math.floor(q + Math.sin(Ct * Math.PI / 4) * Lt), E.sun, 1, Bp);
    }
    wt(D, q, B, (xt, Q, Ct, Lt) => {
      Ct * Ct + Lt * Lt <= B * B && ht(xt, Q, Ci(((Lt / B + 1) / 2 - 0.6) / 0.4) > Mi(xt, Q) ? E.sunEdge : E.sun, 1, Ap);
    });
  }), s.moons.forEach((T) => {
    const B = Math.max(1.5, T.d * 0.37 / m), D = T.x / m, q = T.y / x, kt = D + 0.547 * B, xt = q - 0.503 * B, Q = 0.82 * B;
    wt(D, q, B, (Ct, Lt, Qt, le) => {
      if (Qt * Qt + le * le > B * B) return;
      const ia = Ct + 0.5 - kt, Se = Lt + 0.5 - xt;
      ia * ia + Se * Se > Q * Q && ht(Ct, Lt, Ci((le + B) / (2 * B) * 1.1 - 0.1) > Mi(Ct, Lt) ? E.moon : ct, 1, _p);
    });
  }), s.clouds.forEach((T) => {
    const B = Math.max(3, T.w / m), D = B * 0.6665, q = T.x / m, kt = T.y / x, xt = io(T.fill, "#000000", 0.16);
    for (let Q = Math.max(0, Math.floor(kt) - 1); Q <= Math.min(c - 1, kt + D + 1); Q++) for (let Ct = Math.max(0, Math.floor(q) - 1); Ct <= Math.min(o - 1, q + B + 1); Ct++) {
      const Lt = (Ct + 0.5 - q) / B, Qt = (Q + 0.5 - kt) / B;
      Tc(Lt, Qt) && ht(Ct, Q, !Tc(Lt, Qt + 1 / B) || Ci((Qt - 0.42) / 0.25) * 0.8 > Mi(Ct, Q) ? xt : T.fill, T.o, Ep);
    }
  }), s.fogs.forEach((T) => {
    const B = Math.floor(T.y / x), D = Math.max(B, Math.floor((T.y + 6 * nt) / x) - 1), q = Math.floor(T.x / m), kt = Math.floor((T.x + T.w) / m);
    for (let xt = B; xt <= D; xt++) for (let Q = q; Q <= kt; Q++) {
      const Ct = (Q - q) / Math.max(1, kt - q);
      ht(Q, xt, T.c, T.a * (Ct < 0.25 ? Ct / 0.25 : Ct > 0.75 ? (1 - Ct) / 0.25 : 1), 0);
    }
  });
  const ot = Math.max(2, Math.round(9 / x));
  s.drops.forEach((T) => {
    const B = T.x / m, D = Math.floor(T.y / x);
    for (let q = 0; q < ot; q++) ht(Math.floor(B - 0.208 * q * x / m), D + q, E.rain, T.o, Dp);
  });
  const zt = Math.max(0, Math.round(4.4 / m / 2.6));
  return s.flakes.forEach((T) => {
    const B = Math.floor(T.x / m), D = Math.floor(T.y / x);
    ht(B, D, E.snow, T.o, Os);
    for (let q = 1; q <= zt; q++)
      ht(B - q, D, E.snow, T.o, Os), ht(B + q, D, E.snow, T.o, Os), ht(B, D - q, E.snow, T.o, Os), ht(B, D + q, E.snow, T.o, Os);
  }), s.bolts.forEach((T) => {
    if (m <= 3.5)
      for (let B = Math.floor(T.y / x); B <= (T.y + 24) / x; B++) for (let D = Math.floor(T.x / m); D <= (T.x + 11) / m; D++)
        ju($u, (D + 0.5) * m - T.x, (B + 0.5) * x - T.y) && ht(D, B, E.sun, 1, wd);
    else {
      const B = Math.round(T.x / m), D = Math.round(T.y / x);
      Xu.forEach((q, kt) => q.split("").forEach((xt, Q) => {
        xt === "#" && ht(B + Q, D + kt, E.sun, 1, wd);
      }));
    }
  }), { col: $, ids: W };
}
function Qu(n, s) {
  const o = s.px, c = Math.max(6, Math.round(s.width / o)), m = Math.max(6, Math.round(s.height / o)), x = s.width / c, k = s.height / m, L = s.ambient ? Math.floor((s.clock || 0) / 100) * 100 : 0, S = (V) => {
    const st = Rp(V, s);
    return Ju(st, Np(st, { clock: L, ambient: s.ambient, seed: s.seed }), c, m, x, k, L, s.ambient);
  }, E = S(n), j = s.reveal == null ? 1 : Ci(s.reveal);
  let P = E.col, O = E.ids;
  if (j < 1) {
    const V = s.prev ? S(s.prev) : null, st = j * (c + 12);
    P = new Array(c * m), O = new Uint8Array(c * m);
    for (let nt = 0; nt < c * m; nt++) {
      const $ = nt % c, W = nt / c | 0;
      (s.reduce ? j : Ci((st - $) / 12)) > Mi($, W) ? (P[nt] = E.col[nt], O[nt] = E.ids[nt]) : V ? (P[nt] = V.col[nt], O[nt] = V.ids[nt]) : (P[nt] = null, O[nt] = 255);
    }
  }
  return zu(P, O, c, m, { oneBit: s.oneBit, ink: s.ink || "#26221e", paper: s.paper || "#fbf9f6", snowInk: !1 });
}
function tf(n, s, o) {
  const c = o.width, m = o.height, x = o.reveal == null ? 1 : Ci(o.reveal), k = (O, V) => {
    const st = Rp(V, o);
    ef(O, st, Np(st, o));
  };
  if (n.clearRect(0, 0, c, m), x >= 1) {
    k(n, s);
    return;
  }
  if (o.prev && k(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = x, k(n, s), n.restore();
    return;
  }
  const L = n.canvas, S = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (S.width !== L.width || S.height !== L.height) && (S.width = L.width, S.height = L.height);
  const E = S.getContext("2d");
  E.setTransform(n.getTransform()), E.clearRect(0, 0, c, m), k(E, s);
  const j = x * (c + 64) - 64, P = E.createLinearGradient(j, 0, j + 64, 0);
  P.addColorStop(0, "rgba(0,0,0,1)"), P.addColorStop(1, "rgba(0,0,0,0)"), E.globalCompositeOperation = "destination-in", E.fillStyle = P, E.fillRect(0, 0, c, m), E.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function ef(n, s, o) {
  const { W: c, H: m, S: x, C: k, cw: L, yb: S, glowAt: E, soft: j, tw: P, sy: O } = s, V = n.getTransform().a || 1, st = (ot) => {
    n.shadowColor = ot ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = ot ? 4 * V : 0, n.shadowOffsetY = ot ? 1.5 * V : 0;
  }, nt = (ot, zt) => {
    const T = md(ot);
    return "rgba(" + T[0] + "," + T[1] + "," + T[2] + "," + Math.max(0, Math.min(1, zt)).toFixed(3) + ")";
  }, $ = (ot, zt) => {
    const T = n.createLinearGradient(0, 0, c, 0);
    T.addColorStop(0, ot[0]);
    for (let B = 0; B < ot.length - 1; B++) {
      const D = (B + zt) * L, q = (D - P / 2) / c, kt = (D + P / 2) / c;
      q > 0 && q < 1 && T.addColorStop(q, ot[B]), kt > 0 && kt < 1 && T.addColorStop(kt, ot[B + 1]);
    }
    return T.addColorStop(1, ot[ot.length - 1]), T;
  }, W = Math.max(24, Math.ceil(c / 4)), ft = (ot, zt) => {
    n.beginPath();
    for (let T = 0; T <= W; T++) {
      const B = c * T / W, D = ot == null ? 0 : S(B) + ot;
      T ? n.lineTo(B, D) : n.moveTo(B, D);
    }
    for (let T = W; T >= 0; T--) {
      const B = c * T / W;
      n.lineTo(B, S(B) + zt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = $(x.filter((ot) => !ot.night).map((ot) => ot.sky), 0.75), n.fillRect(0, 0, c, m);
  const ht = n.createLinearGradient(0, 0, c, 0);
  for (let ot = 0; ot <= 64; ot++) {
    const zt = E(c * ot / 64);
    ht.addColorStop(ot / 64, nt(zt.c, Math.min(1, zt.a)));
  }
  n.fillStyle = ht;
  for (let ot = 0; ot < 8; ot++)
    n.globalAlpha = 1 - ot / 8, ft(ot * 2 * O, (ot + 1) * 2 * O);
  n.fillStyle = $(x.filter((ot) => ot.night).map((ot) => ot.sky), 1.25);
  const wt = Math.max(0.5, j), it = 6;
  n.globalAlpha = 1, ft(null, -wt);
  for (let ot = 0; ot < it; ot++)
    n.globalAlpha = 1 - (ot + 0.5) / it, ft(-wt + 2 * wt * ot / it, -wt + 2 * wt * (ot + 1) / it);
  n.globalAlpha = 1;
  const et = new Path2D(Zu), _ = new Path2D(Yu), K = new Path2D(Uu), Tt = new Path2D(Ku);
  n.fillStyle = k.star, o.stars.forEach((ot) => {
    n.globalAlpha = ot.o, ot.big ? (n.save(), n.translate(ot.x, ot.y), n.scale(ot.size, ot.size), n.fill(et), n.restore()) : (n.beginPath(), n.arc(ot.x, ot.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const at = io(k.sun, "#ffffff", 0.55);
  o.suns.forEach((ot) => {
    const zt = n.createRadialGradient(ot.x, ot.y, 0, ot.x, ot.y, ot.halo);
    zt.addColorStop(0, nt(at, 0.42)), zt.addColorStop(0.7, nt(at, 0)), n.fillStyle = zt, n.beginPath(), n.arc(ot.x, ot.y, ot.halo, 0, Math.PI * 2), n.fill();
    const T = n.createLinearGradient(0, ot.y - ot.rad, 0, ot.y + ot.rad);
    T.addColorStop(0.6, k.sun), T.addColorStop(1, k.sunEdge), n.fillStyle = T, st(!0), n.beginPath(), n.arc(ot.x, ot.y, ot.rad, 0, Math.PI * 2), n.fill(), st(!1);
  });
  const ct = io(k.moon, "#ffffff", 0.6);
  o.moons.forEach((ot) => {
    n.save(), n.translate(ot.x - ot.d / 2, ot.y - ot.d / 2), n.scale(ot.d / 46, ot.d / 46);
    const zt = n.createLinearGradient(0, 6, 0, 40);
    zt.addColorStop(0, ct), zt.addColorStop(1, k.moon), n.fillStyle = zt, st(!0), n.fill(_), st(!1), n.restore();
  }), o.clouds.forEach((ot) => {
    n.save(), n.globalAlpha = ot.o, n.translate(ot.x, ot.y), n.scale(ot.w / 46, ot.h / 30.66), n.translate(-4, -9.67), n.fillStyle = ot.fill, st(!0), n.fill(K), st(!1), n.restore();
  }), o.fogs.forEach((ot) => {
    const zt = n.createLinearGradient(ot.x, 0, ot.x + ot.w, 0);
    zt.addColorStop(0, nt(ot.c, 0)), zt.addColorStop(0.25, nt(ot.c, ot.a)), zt.addColorStop(0.75, nt(ot.c, ot.a)), zt.addColorStop(1, nt(ot.c, 0)), n.fillStyle = zt, n.fillRect(ot.x, ot.y, ot.w, 6 * O);
  }), n.fillStyle = k.rain, o.drops.forEach((ot) => {
    n.save(), n.globalAlpha = ot.o, n.translate(ot.x, ot.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, o.flakes.forEach((ot) => {
    n.globalAlpha = ot.o, n.beginPath(), n.arc(ot.x, ot.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, o.bolts.forEach((ot) => {
    n.save(), n.globalAlpha = ot.o, n.translate(ot.x, ot.y), n.fill(Tt), n.restore();
  }), n.restore();
}
const af = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Is = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, od = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, jd = (n, s) => '<path class="' + s + '" d="' + n + '"/>', nf = (n, s) => ' style="animation-delay:-' + Math.round(n * 137 % s) + 'ms"', no = (n, s, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + nf(n, 2400) + ' d="M' + n + " " + (s - o) + "L" + (n + m) + " " + (s - m) + "L" + (n + o) + " " + s + "L" + (n + m) + " " + (s + m) + "L" + n + " " + (s + o) + "L" + (n - m) + " " + (s + m) + "L" + (n - o) + " " + s + "L" + (n - m) + " " + (s - m) + 'Z"/>';
}, Lc = ([n, s, o], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + s + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', of = (n, s) => s ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', rf = (n) => (n ? ["29.35", "43.04", "56.74"].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), sf = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + s + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function lf(n, s, o, c) {
  const m = (x) => '<g filter="url(#' + c + '-sh)">' + x + "</g>";
  return n === "clear" ? s ? m(Lc(o ? od.l : od.s, c)) + (o ? no(70, 20, 5.83, 1) + no(78.33, 41.67, 3.75, 0.8) + no(60, 71.67, 3.33, 0.6) : no(42, 12, 3.5, 1) + no(47, 25, 2.25, 0.8) + no(36, 43, 2, 0.6)) : m(of(c, o)) : n === "partly" ? m(s ? Lc(o ? od.lp : od.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(jd(o ? Is.lp : Is.sp, s ? "wbCloudLight" : "wbBright")) + (s ? o ? no(73.33, 16.67, 4.17, 0.9) : no(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(jd(o ? Is.lc : Is.s, s ? "wbCloudLight" : "wbBright")) + (s ? o ? no(15, 15, 3.75, 0.8) + no(76.67, 13.33, 2.92, 0.6) : no(9, 9, 2.25, 0.8) + no(46, 8, 1.75, 0.6) : "") : m(jd(o ? Is.lr : Is.s, "wbCloudLight")) + (n === "rain" ? rf(o) : sf(o));
}
const df = (n, s) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (s ? 1.6 : 1) + '" stdDeviation="' + (s ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function cf(n, s, o, c) {
  let m = af(n);
  const x = m === "night" || !!o;
  m === "night" && (m = "clear");
  const k = s ? 90 : 54;
  return { k: m, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + df(c, s) + lf(m, x, s, c) + "</svg>" };
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
], id = (n, s) => (pf[s % 8 * 8 + n % 8] + 0.5) / 64, Lo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], an = (n, s, o) => [Math.round(n[0] + (s[0] - n[0]) * o), Math.round(n[1] + (s[1] - n[1]) * o), Math.round(n[2] + (s[2] - n[2]) * o)], xl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ac = (n, s) => {
  let o = n * 374761393 + s * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, $r = [255, 255, 255], wn = Lo("#26221e"), _c = Lo("#0288d1"), uf = Lo("#01579b"), zd = Lo(Sn.cloudDay), Vd = Lo(Sn.cloudNight), rd = Lo(Sn.dusk), Gd = Lo(Sn.sunEdge), ff = Lo(Sn.sun), hf = 10, Ec = 0.3, Ti = 56, Pp = 21;
function mf(n) {
  const s = Array.from({ length: Pp }, () => new Array(Ti).fill(void 0)), o = (k, L, S) => {
    s[L][k] = S;
  }, c = an(rd, wn, 0.35), m = an(wn, $r, 0.22);
  for (let k = 0; k <= 6; k++) {
    const L = k < 2 ? Ti - 2 : Ti - 1;
    for (let S = 6 - k; S <= L; S++) o(S, k, k < 2 ? c : k === 6 ? m : wn);
  }
  const x = [rd, Gd, Vd, Lo(Sn.skyRainDay), an(rd, wn, 0.2), an(n, wn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, L) => {
    const S = 9 + L * 6;
    for (let E = 0; E < k; E++) {
      const j = x[(L * 2 + E * 3) % x.length];
      for (let P = S; P < S + 5; P++)
        o(P, 7 + E * 2, an(j, wn, 0.12)), o(P, 8 + E * 2, E === k - 1 ? an(j, $r, 0.3) : j);
      o(S + 5, 7 + E * 2, wn), o(S + 5, 8 + E * 2, wn);
    }
  });
  for (let k = 7; k <= 12; k++) o(5, k, wn);
  o(5, 13, Gd);
  for (let k = 7; k <= 14; k++) for (let L = 42; L <= 51; L++) o(L, k, L === 51 ? Vd : zd);
  for (let k = 43; k <= 50; k += 2)
    o(k, 12, wn), o(k, 9, an(wn, zd, 0.4));
  for (let k = 40; k <= 53; k++) o(k, 14, k === 40 || k === 53 ? Vd : zd);
  for (let k = 15; k <= 18; k++) for (let L = 46; L <= 49; L++) o(L, k, k === 18 ? wn : k === 16 ? Gd : rd);
  for (let k = 15; k <= 19; k++) o(44, k, wn);
  return o(44, 20, ff), s;
}
function gf(n, s, o, c) {
  const m = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(s)), k = new Uint8ClampedArray(m * x * 4), L = Lo(c.skyClearDay), S = Lo(c.skyFogDay), E = mf(L), j = Math.round(x * 0.55), P = xl(1 - Math.log(o / Ec) / Math.log(hf / Ec)), O = an(L, S, P), V = (W) => xl((W - 0.1) / 0.9), st = xl((1 - Math.exp(-2 / o) - 0.2) / 0.8), nt = Math.round(m / 2 - Ti / 2), $ = j + 3;
  for (let W = 0; W < x; W++) {
    const ft = $ - 1 - W, ht = W - $;
    for (let wt = 0; wt < m; wt++) {
      const it = wt - nt;
      let et, _;
      const K = ft >= 0 && ft < Pp && it >= 0 && it < Ti ? E[ft][it] : void 0;
      if (K)
        et = K, _ = st;
      else if (ft >= 0 && ft <= 1 && it >= 4 - ft && it <= 5 - ft)
        et = an($r, _c, 0.15), _ = st;
      else if (W < j) {
        const ct = xl(((W + 0.5) / j - 0.15) / 0.85) * 3, ot = Math.min(3, Math.floor(ct + id(wt + 2, W + 5)));
        et = an(O, $r, ot * 0.1), _ = P * 0.95;
      } else {
        const ct = (W - j + 0.5) / (x - j), ot = Math.min(1.5, 6e-3 / (ct * ct)), zt = xl(ct * 1.4) * 3, T = Math.min(3, Math.floor(zt + id(wt + 1, W + 6)));
        et = an(_c, uf, T / 3);
        const B = 1 + Math.round(ct * 7), D = Math.floor(wt / (B * 3)), q = 0.06 + 0.16 * ct, kt = wt % (B * 3) < B;
        kt && Ac(D, W) < q ? et = an(et, $r, 0.18 + 0.1 * (1 - ct)) : kt && ct > 0.5 && Ac(D, W - 1) < q && (et = an(et, wn, 0.12)), _ = V(1 - Math.exp(-ot / o)), ht === 0 && it >= 3 && it <= 8 ? (et = an(et, $r, it < 6 ? 0.8 : 0.45), _ = st) : ht >= 0 && ht <= 2 && it >= Ti && it < Ti + 40 ? ((1 - (it - Ti) / 40) * (ht === 1 ? 0.9 : 0.5) > id(wt, W + 3) && (et = an(et, $r, 0.5)), _ = st) : ht === 0 && it >= 6 && it < Ti && (et = an(et, wn, it % 2 === 0 ? 0.35 : 0.2), _ = st);
      }
      const Tt = _ > id(wt, W) ? S : et, at = (W * m + wt) * 4;
      k[at] = Tt[0], k[at + 1] = Tt[1], k[at + 2] = Tt[2], k[at + 3] = 255;
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
function wf(n, s) {
  const o = n ? vf[String(n).toUpperCase()] : void 0;
  if (!o || !(s > 0)) return;
  const c = (x) => Math.abs(Math.log(x[2] / s)), m = o.reduce((x, k) => c(k) < c(x) ? k : x);
  return c(m) <= Math.log(bf) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const xf = (n, s) => s === "mi" ? n * 1.609344 : s === "m" ? n / 1e3 : s === "ft" ? n * 3048e-7 : s === "yd" ? n * 9144e-7 : n, yf = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", na = {
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
}, oa = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Cn = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function kf() {
  const { pivot: n, slider: s, iconbtn: o, warp: c, outline: m } = na;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", oa[n.ease]],
    ["--ab-blur", s.glow + "px"],
    ["--ab-spread", s.spread + "px"],
    ["--ab-str", s.strength + "%"],
    ["--ab-blur2", s.glow + s.hold + "px"],
    ["--ab-spread2", s.spread + s.hold / 4 + "px"],
    ["--ab-str2", s.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (s.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", s.ein + "ms"],
    ["--ab-out", s.eout + "ms"],
    ["--ab-ease", oa[s.ease]],
    ["--ih-s", o.scale / 100],
    ["--ih-p", o.press / 100],
    ["--ih-dur", o.dur + "ms"],
    ["--ih-ease", oa[o.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", c.cdur + "ms"],
    ["--wc-delay", c.cdelay + "ms"],
    ["--wc-ease", oa[c.ease]],
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
const Ud = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Mf = "#homeView .tfAreaPanel", Sf = 300, gd = (n) => Math.min(1, Sf / Math.max(1, n)), Yd = (n, s) => 1 + (s / 100 - 1) * gd(n.offsetWidth);
function Cf(n, s) {
  s.style.cssText += ";" + kf();
  let o = null;
  const c = (j) => {
    j.classList.remove("mvMoving", "mvLit"), j.style.setProperty("--rx", "0deg"), j.style.setProperty("--ry", "0deg"), j.style.setProperty("--sc", 1), j._down = !1;
  };
  n.addEventListener("pointermove", (j) => {
    var W, ft;
    const P = j.pointerType === "touch" || Cn() ? null : (ft = (W = j.target).closest) == null ? void 0 : ft.call(W, Ud);
    if (o && o !== P && c(o), o = P, !P || P.disabled) return;
    const O = na.pivot, V = P.getBoundingClientRect(), st = (j.clientX - V.left) / V.width, nt = (j.clientY - V.top) / V.height, $ = 1;
    P.classList.add("mvPv", "mvMoving", "mvLit"), P.style.setProperty("--pv-persp", O.persp / gd(Math.max(P.offsetWidth, P.offsetHeight)) + "px"), P.style.setProperty("--ry", ($ * (st - 0.5) * 2 * O.tilt * gd(P.offsetWidth)).toFixed(3) + "deg"), P.style.setProperty("--rx", ($ * -(nt - 0.5) * 2 * O.tilt * gd(P.offsetHeight)).toFixed(3) + "deg"), P.style.setProperty("--mx", (st * 100).toFixed(1) + "%"), P.style.setProperty("--my", (nt * 100).toFixed(1) + "%"), P._down || P.style.setProperty("--sc", Yd(P, O.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (j) => {
    o && !o.contains(j.relatedTarget) && (c(o), o = null);
  }), n.addEventListener("pointerdown", (j) => {
    var O, V;
    const P = Cn() ? null : (V = (O = j.target).closest) == null ? void 0 : V.call(O, Ud);
    P && (P._down = !0, P.classList.add("mvPv"), P.classList.remove("mvMoving"), P.style.setProperty("--sc", Yd(P, na.pivot.press)));
  }), n.addEventListener("pointerup", (j) => {
    var O, V;
    const P = (V = (O = j.target).closest) == null ? void 0 : V.call(O, Ud);
    P && (P._down = !1, P.style.setProperty("--sc", j.pointerType === "touch" ? 1 : Yd(P, na.pivot.lift)));
  });
  let m = null;
  n.addEventListener("pointerover", (j) => {
    var P, O, V;
    j.pointerType !== "touch" && ((V = (O = (P = j.target).closest) == null ? void 0 : O.call(P, ".tfBar")) == null || V.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (j) => {
    var O, V;
    const P = (V = (O = j.target).closest) == null ? void 0 : V.call(O, ".tfBar");
    P && !P.contains(j.relatedTarget) && P !== m && P.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (j) => {
    var O, V;
    const P = (V = (O = j.target).closest) == null ? void 0 : V.call(O, ".tfBar");
    P && (m = P, P.classList.add("mvHold"));
  });
  const x = (j) => {
    if (!m) return;
    m.classList.remove("mvHold");
    const P = m.getBoundingClientRect();
    (j.pointerType === "touch" || j.clientX < P.left || j.clientX > P.right || j.clientY < P.top || j.clientY > P.bottom) && m.classList.remove("mvHover"), m = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), n.addEventListener("focusin", (j) => {
    var P, O;
    (O = (P = j.target).matches) != null && O.call(P, ".tfBar:focus-visible") && j.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (j) => {
    var P;
    (P = j.target.classList) == null || P.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (j) => {
    var O, V;
    const P = (V = (O = j.target).closest) == null ? void 0 : V.call(O, ".tfBar");
    !P || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(j.key) || (P.classList.add("mvHold"), clearTimeout(P._k), P._k = setTimeout(() => P.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (j) => {
    var O, V;
    const P = (V = (O = j.target).closest) == null ? void 0 : V.call(O, "button.tfIcon[data-act]");
    P && Tf(P);
  });
  let k = null;
  const L = (j, P, O) => {
    j.querySelector(":scope>.mvEdge") || j.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const V = j.getBoundingClientRect(), st = V.width / 2, nt = V.height / 2, $ = P.clientX - V.left - st, W = P.clientY - V.top - nt, ft = $ ? st / Math.abs($) : 1 / 0, ht = W ? nt / Math.abs(W) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(ft, ht), 0), 1);
    let it = Math.atan2(W, $) * 180 / Math.PI + 90;
    it < 0 && (it += 360);
    const et = O ? 100 : wt * 100;
    j.style.setProperty("--edge-proximity", et.toFixed(3)), j.style.setProperty("--cursor-angle", it.toFixed(3) + "deg"), j.classList.toggle("mvLitEdge", O || et >= na.outline.lightAt);
  }, S = (j) => {
    j.classList.remove("mvLitEdge"), j.style.setProperty("--edge-proximity", "0"), j._down = !1;
  }, E = (j) => {
    var O;
    const P = (O = j.closest) == null ? void 0 : O.call(j, Mf);
    return P && !s.classList.contains("tfEditing") ? P : null;
  };
  n.addEventListener("pointermove", (j) => {
    if (j.pointerType === "touch") return;
    const P = E(j.target);
    k && k !== P && S(k), k = P, P && !P._down && L(P, j, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (j) => {
    k && !k.contains(j.relatedTarget) && (S(k), k = null);
  }), n.addEventListener("pointerdown", (j) => {
    const P = E(j.target);
    P && na.outline.press && (P._down = !0, L(P, j, !0));
  }), n.addEventListener("pointerup", (j) => {
    const P = E(j.target);
    P && (P._down = !1, j.pointerType === "touch" ? S(P) : L(P, j, !1));
  }), new MutationObserver((j) => {
    var P;
    for (const O of j) {
      const V = O.target;
      if (O.type === "attributes") {
        (P = V.classList) != null && P.contains("tfMoreBackdrop") && !V.hidden && O.oldValue !== null && Dc(V);
        continue;
      }
      O.addedNodes.forEach((st) => {
        st.nodeType === 1 && st.classList.contains("tfMoreBackdrop") && !st.hidden && Dc(st);
      });
    }
  }).observe(s, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Ip = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Hp(n, s) {
  const o = [];
  for (let c = n; c && c !== s && c.parentNode; c = c.parentNode) o.unshift([...c.parentNode.children].indexOf(c));
  return o;
}
const Fp = (n, s) => s.reduce((o, c) => o == null ? void 0 : o.children[c], n);
function Tf(n) {
  var V;
  if (Cn() || n._warp) return;
  const s = na.warp, o = s.amount / 100, c = n.firstElementChild;
  if (!c) return;
  const m = { squash: { scale: 1 + 0.35 * o + " " + (1 - 0.55 * o) }, pinch: { scale: String(1 - 0.5 * o) }, twist: { rotate: 140 * o + "deg", scale: String(1 - 0.35 * o) }, flip: { rotate: "y 90deg" } }[s.style], x = "blur(" + 2 * o + "px)", k = n.getRootNode(), L = Ip(n), S = (V = L.dataset) == null ? void 0 : V.k, E = Hp(n, L), j = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const P = c.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...m, filter: x }], { duration: s.win, easing: oa.exit, fill: "forwards" }), O = performance.now();
  P.finished.then(() => {
    const st = () => {
      var wt, it;
      const nt = S ? L.isConnected ? L : (wt = k.querySelector) == null ? void 0 : wt.call(k, '[data-k="' + CSS.escape(S) + '"]') : L, $ = nt && Fp(nt, E);
      if ($ === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === j && performance.now() - O < 420) {
        requestAnimationFrame(st);
        return;
      }
      (((it = $ == null ? void 0 : $.matches) != null && it.call($, "button.tfIcon") ? $ : n).firstElementChild || c).animate([{ ...m, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: s.wout, easing: oa[s.ease] }), P.cancel(), n._warp = 0;
    };
    st();
  });
}
function Lf(n, s, o) {
  var j;
  if (Cn() || !n || !s) return;
  const c = na.expand, m = n.getBoundingClientRect(), x = "inset(" + (s.top - m.top).toFixed(1) + "px " + (m.right - s.right).toFixed(1) + "px " + (m.bottom - s.bottom).toFixed(1) + "px " + (s.left - m.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, L = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), S = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: c.dur, easing: oa[c.ease] });
  const E = (j = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : j.getBoundingClientRect();
  k && E && o && k.animate([{ transform: "translate(" + (o.left - E.left).toFixed(1) + "px," + (o.top - E.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: c.dur, easing: oa[c.ease] }), L == null || L.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: c.dur, easing: oa[c.ease] }), S.forEach((P, O) => {
    P.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: c.delay + O * c.stagger, easing: oa.standard, fill: "backwards" });
  });
}
function Af(n, s, o) {
  if (Cn() || !n || !s) {
    o();
    return;
  }
  const c = na.expand, m = c.dur * c.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (s.top - x.top).toFixed(1) + "px " + (x.right - s.right).toFixed(1) + "px " + (x.bottom - s.bottom).toFixed(1) + "px " + (s.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((j) => j.animate([{ opacity: 1 }, { opacity: 0 }], { duration: m * 0.3, easing: oa.standard, fill: "forwards" }));
  const L = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: m, easing: oa.standard, fill: "forwards" });
  let S = !1;
  const E = () => {
    S || (S = !0, o());
  };
  L.finished.then(E, E), setTimeout(E, m + 80);
}
const Op = (n) => {
  let s = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let o = 0; o < n.length - 1; o++) {
    const c = n[o - 1] || n[o], m = n[o], x = n[o + 1], k = n[o + 2] || x, L = [m[0] + (x[0] - c[0]) / 6, m[1] + (x[1] - c[1]) / 6], S = [x[0] - (k[0] - m[0]) / 6, x[1] - (k[1] - m[1]) / 6];
    s += "C" + L.map((E) => E.toFixed(1)).join(" ") + " " + S.map((E) => E.toFixed(1)).join(" ") + " " + x.map((E) => E.toFixed(1)).join(" ");
  }
  return s;
}, qp = (n, s, o, c = "mvGrid") => [0, 1, 2].map((m) => {
  const x = (s + (o - s) * m / 2).toFixed(1);
  return '<line class="' + c + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function Wp(n, s = n.querySelector(".mvLine"), o = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Cn() || !(s != null && s.getTotalLength)) return;
  const c = na.graphs, m = s.getTotalLength();
  s.animate([{ strokeDasharray: m, strokeDashoffset: m }, { strokeDasharray: m, strokeDashoffset: 0 }], { duration: c.draw, easing: oa.standard }), [...o].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: c.draw * 0.6, delay: c.draw * 0.3 + k * 12, easing: oa.standard, fill: "backwards" }));
}
function jp(n, s, o, c, m) {
  if (n.getAnimations().forEach((j) => j.cancel()), n.style.left = c + "px", n.style.width = m + "px", Cn() || s === c && o === m) return;
  const x = na.tabs, k = x.stretch / 100, L = (j, P) => ({ left: j + "px", width: P + "px" }), E = c > s ? L(s + (c - s) * (0.15 * (1 - k)), c + m - (s + (c - s) * (0.15 * (1 - k)))) : L(c, s + o - c - (s - c) * (0.15 * (1 - k)));
  n.animate([L(s, o), { offset: 0.5, ...E }, L(c, m)], { duration: x.dur, easing: oa.standard });
}
function _f(n) {
  const s = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", o = (m) => m.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), c = (m, x) => x ? [...m.children].indexOf(x) : -1;
  n.addEventListener("click", (m) => {
    var ft, ht, wt;
    const x = (ht = (ft = m.target).closest) == null ? void 0 : ht.call(ft, s + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || Cn() || x.disabled) return;
    const L = o(k);
    if (!L || L === x) return;
    const S = c(k, L), E = k.getBoundingClientRect(), j = L.getBoundingClientRect(), P = getComputedStyle(L).borderRadius, O = k.getRootNode(), V = Ip(k), st = (wt = V.dataset) == null ? void 0 : wt.k, nt = Hp(k, V), $ = performance.now(), W = () => {
      var ot, zt, T;
      const it = st && !V.isConnected ? (ot = O.querySelector) == null ? void 0 : ot.call(O, '[data-k="' + CSS.escape(st) + '"]') : V, et = it && Fp(it, nt), _ = (zt = et == null ? void 0 : et.matches) != null && zt.call(et, s) ? o(et) : null;
      if (!_ || c(et, _) === S) {
        performance.now() - $ < 700 && requestAnimationFrame(W);
        return;
      }
      const K = et.getBoundingClientRect(), Tt = _.getBoundingClientRect(), at = getComputedStyle(_);
      (T = et.querySelector(":scope>.mvSegInd")) == null || T.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (Tt.top - K.top - et.clientTop) + "px;height:" + Tt.height + "px;border-radius:" + P + ";background:" + at.backgroundColor + ";box-shadow:" + at.boxShadow, getComputedStyle(et).position === "static" && (et.style.position = "relative"), et.prepend(ct), et.classList.add("mvSegMoving"), jp(ct, j.left - E.left - et.clientLeft, j.width, Tt.left - K.left - et.clientLeft, Tt.width), clearTimeout(et._seg), et._seg = setTimeout(() => {
        ct.remove(), et.classList.remove("mvSegMoving");
      }, na.tabs.dur + 20);
    };
    requestAnimationFrame(W);
  }, !0);
}
const zp = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Dc(n) {
  const s = n.firstElementChild;
  if (Cn() || !s || s.classList.contains("still")) return;
  const o = na.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + o.blur + "px)" }], { duration: o.open, easing: oa.standard }), s.style.animation = "none", s.animate(zp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + o.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: o.open, easing: oa[o.ease] }), [...(s.classList.contains("tfMorePair") && s.querySelector(".tfMore") || s).children].forEach((m, x) => m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: o.open * 0.6, delay: o.open * 0.35 + x * 40, easing: oa.standard, fill: "backwards" }));
}
function Ef(n, s) {
  const o = n == null ? void 0 : n.firstElementChild;
  if (Cn() || !o || n.hidden || n._closing) {
    s();
    return;
  }
  const c = na.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + c.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: c.close, easing: oa.exit, fill: "forwards" });
  const m = o.animate(zp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + c.from / 100 + ")" }], { duration: c.close, easing: oa.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((L) => L.cancel()), o.getAnimations().forEach((L) => L.cancel()), s());
  };
  m.finished.then(k, k), setTimeout(k, c.close + 80);
}
const Df = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Bf(n, s) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Df), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: s }));
}
function Rf(n) {
  if (Cn()) return;
  const s = na.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: s.dur, easing: oa.spring });
  const o = n.querySelector(".mvTick path");
  o && s.draw && o.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: s.dur * 0.5, easing: oa.standard, fill: "backwards" });
}
const Bc = (n, s, o, c, m = 1) => (n + s * o * m) * Math.pow(c, m);
function Nf(n) {
  const s = na.drag.squash / 100;
  !n || Cn() || !s || n.animate([{ transform: "scale(" + (1 + s * 0.4) + "," + (1 - s) + ")" }, { transform: "scale(" + (1 - s * 0.1) + "," + (1 + s * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Rc(n) {
  if (!n || Cn()) return;
  const s = na.expand;
  [...n.children].slice(1).forEach((o, c) => o.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: s.delay + c * s.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ya = 6e4, Ne = 36e5, Pn = 864e5, yl = 1440, Pf = 6, If = 10 * Ya, Nc = 3, Hf = 3, sd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Ff = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Of = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Pc = (n, s, o, c) => '<circle cx="' + n + '" cy="' + s + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const x = Math.cos(m * Math.PI / 180), k = Math.sin(m * Math.PI / 180), L = o + 2, S = o + 2 + c;
  return "M" + (n + x * L).toFixed(2) + " " + (s + k * L).toFixed(2) + "L" + (n + x * S).toFixed(2) + " " + (s + k * S).toFixed(2);
}).join("") + '"/>', xi = (n) => '<path d="' + Of + '"' + (n ? ' transform="' + n + '"' : "") + "/>", yi = (n) => '<path d="' + n + '"/>', Ic = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function qf(n, s) {
  const o = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return s ? Ic : Pc(12, 12, 4, 2.5);
    case "clear-night":
      return Ic;
    case "partlycloudy":
      return (s ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Pc(7.5, 7.5, 2.6, 1.4)) + xi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return xi();
    case "fog":
      return yi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return xi(o) + yi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return xi(o) + yi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return xi(o) + yi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return xi(o) + yi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return xi(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return xi(o) + yi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return xi(o) + yi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return yi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + yi("M12 8v5M12 16h.01");
  }
}
const Zd = (n, s) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + qf(n, s) + "</svg>", Wf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), jf = 30 * Ya, zf = 7, Vf = 3, Hc = 1, Gf = Ya, Uf = 15 * Ya, Yf = 5, Pe = {
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
}, Et = {
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
}, Kf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], $f = Object.keys(Et.phases), Xf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Fc = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Vp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ld = 100, Oc = "µg/m³", Jf = "weather_alerts.air_quality_pollen", xd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Qf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, th = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], eh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, ah = { daily: 1, hourly: 2 }, Ot = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), tn = (n, s) => n.replace(/\{(\w+)\}/g, (o, c) => s[c] ?? ""), Si = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', qc = /* @__PURE__ */ new Map();
function Gp(n) {
  let s = qc.get(n);
  if (s === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), m = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), c.append(m), document.body.append(c);
    const x = m.getBBox();
    c.remove();
    const k = Math.max(x.width, x.height), L = k ? 26 * 24 / k : 0, S = L / 24;
    s = k ? "width:" + L.toFixed(2) + "px;height:" + L.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * S).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * S).toFixed(2) + "px" : "", qc.set(n, s);
  }
  return s ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + s + '"><path d="' + n + '"/></svg>' : Si(n);
}
const nh = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Oe = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Wc = /* @__PURE__ */ new Map(), jc = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new WeakMap(), oh = (n) => {
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
function Me(n, s, o) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (s == null ? void 0 : s.number_format) === "none", x = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, k = m ? "en-US" : oh(s), L = JSON.stringify([k, x]);
  let S = Wc.get(L);
  if (!S) {
    try {
      S = new Intl.NumberFormat(k, x);
    } catch {
      S = new Intl.NumberFormat(void 0, x);
    }
    Wc.set(L, S);
  }
  return S.format(c);
}
const bc = (n) => {
  var s;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.language) || (n == null ? void 0 : n.language) || void 0;
};
function ih(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Kd.has(n)) return Kd.get(n);
  const s = n.time_format, o = s === "language" || s === "system" || !s ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(s === "language" ? n.language : void 0).includes("10") : s === "12";
  return Kd.set(n, o), o;
}
const Up = (n) => {
  var s, o;
  return ((s = n == null ? void 0 : n.locale) == null ? void 0 : s.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function Yp(n, s) {
  const o = JSON.stringify([n, s]);
  let c = jc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, s);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...s, timeZone: void 0 });
    }
    jc.set(o, c);
  }
  return c;
}
const en = (n, s) => Yp(bc(s), { hour: "numeric", minute: "2-digit", hourCycle: ih(s == null ? void 0 : s.locale) ? "h12" : "h23", timeZone: Up(s) }).format(n), zc = (n, s) => Yp(bc(s), { weekday: "short", timeZone: Up(s) }).format(n), rh = (n, s) => n.toLocaleDateString(bc(s), { weekday: "narrow" }), $e = (n, s) => Oe(s) ? Me(Math.round(Number(s)), n.locale) + "°" : "–", xr = (n) => {
  const s = new Date(n);
  return s.setHours(0, 0, 0, 0), s;
}, Hs = (n, s) => n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth() && n.getDate() === s.getDate(), Mn = Math.PI / 180, sh = 2440588, lh = 2451545, yd = Mn * 23.4397, dh = 149598e3, ch = -0.833 * Mn, ph = 0.133 * Mn, Vc = 5 * Ya, Zp = (n) => n.getTime() / Pn - 0.5 + sh - lh, Kp = (n, s) => Math.atan2(Math.sin(n) * Math.cos(yd) - Math.tan(s) * Math.sin(yd), Math.cos(n)), $p = (n, s) => Math.asin(Math.sin(s) * Math.cos(yd) + Math.cos(s) * Math.sin(yd) * Math.sin(n)), uh = (n, s) => Mn * (280.16 + 360.9856235 * n) - s, fh = (n, s, o) => Math.asin(Math.sin(s) * Math.sin(o) + Math.cos(s) * Math.cos(o) * Math.cos(n));
function Xp(n) {
  const s = Mn * (357.5291 + 0.98560028 * n), o = Mn * (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)), c = s + o + Mn * 102.9372 + Math.PI;
  return { ra: Kp(c, 0), dec: $p(c, 0), dist: dh };
}
function Jp(n) {
  const s = Mn * (218.316 + 13.176396 * n), o = Mn * (134.963 + 13.064993 * n), c = Mn * (93.272 + 13.22935 * n), m = s + Mn * 6.289 * Math.sin(o), x = Mn * 5.128 * Math.sin(c);
  return { ra: Kp(m, x), dec: $p(m, x), dist: 385001 - 20905 * Math.cos(o) };
}
const Qp = (n, s, o, c) => {
  const m = Zp(s), x = n(m);
  return fh(uh(m, Mn * -c) - x.ra, Mn * o, x.dec);
}, kd = (n, s, o) => Qp(Xp, n, s, o), hh = (n, s, o) => Qp(Jp, n, s, o);
function tu(n, s, o, c) {
  const m = {};
  let x = o.getTime(), k = n(o) - s;
  for (let L = x + Vc; L <= c.getTime(); L += Vc) {
    const S = n(new Date(L)) - s;
    if (k < 0 != S < 0) {
      const E = new Date(x + (L - x) * k / (k - S));
      S > 0 ? m.rise ?? (m.rise = E) : m.set ?? (m.set = E);
    }
    x = L, k = S;
  }
  return m;
}
const eu = (n) => {
  const s = xr(n);
  return [s, new Date(s.getTime() + Pn)];
}, mh = (n, s, o) => tu((c) => kd(c, s, o), ch, ...eu(n)), gh = (n, s, o) => tu((c) => hh(c, s, o), ph, ...eu(n));
function $d(n) {
  const s = Zp(n), o = Xp(s), c = Jp(s), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), x = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), k = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const vh = (n) => {
  const s = n * 28;
  return s < 0.5 || s > 27.5 ? "new_moon" : s < 6.5 ? "waxing_crescent" : s < 7.5 ? "first_quarter" : s < 13.5 ? "waxing_gibbous" : s < 14.5 ? "full_moon" : s < 20.5 ? "waning_gibbous" : s < 21.5 ? "last_quarter" : "waning_crescent";
}, kl = (n) => {
  const s = n == null ? void 0 : n.config;
  return s && Oe(s.latitude) && Oe(s.longitude) ? { lat: Number(s.latitude), lon: Number(s.longitude) } : null;
};
function Fs(n, s) {
  var E, j, P;
  const o = kl(n), c = o ? mh(s, o.lat, o.lon) : {}, m = (E = n == null ? void 0 : n.states) == null ? void 0 : E["sun.sun"], x = xr(s).getTime(), k = (O) => {
    const V = O ? new Date(O) : null;
    return V && Number.isFinite(V.getTime()) && xr(V).getTime() === x ? V : null;
  }, L = k((j = m == null ? void 0 : m.attributes) == null ? void 0 : j.next_rising), S = k((P = m == null ? void 0 : m.attributes) == null ? void 0 : P.next_setting);
  return L && (c.rise = L), S && (c.set = S), c;
}
function bh(n) {
  var c;
  const s = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((s == null ? void 0 : s.state) === "below_horizon" || (s == null ? void 0 : s.state) === "above_horizon") return s.state === "below_horizon";
  const o = kl(n);
  return o ? kd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Xr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", qs = (n, s) => {
  var c;
  const o = (c = n.entities) == null ? void 0 : c[s];
  return !o || !o.hidden && !o.entity_category;
}, ca = (n, s, o) => {
  var c, m;
  for (const x of s) {
    const k = (c = n.states) == null ? void 0 : c[x];
    if (!Xr(k)) continue;
    const L = (m = k.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: k, value: L };
  }
}, wh = (n, s) => s.map((o) => {
  var c;
  return (c = n.states) == null ? void 0 : c[o];
}).find(Xr), xh = (n, s, o) => s.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return Xr(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & ah[o]);
});
function br(n, s, o) {
  var x, k, L, S;
  const c = ((k = (x = n.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", m = (s == null ? void 0 : s.attributes) || {};
  switch (o) {
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
      return m.temperature_unit || ((S = (L = n.config) == null ? void 0 : L.unit_system) == null ? void 0 : S.temperature) || "";
  }
}
function vd(n, s, o, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...x] = n.formatEntityAttributeValueToParts(s, o, c).map((k) => k.value);
      return { number: m, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: Me(c, n.locale), unit: br(n, s, o) };
}
function Gc(n, s, o, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(s, o, c);
  } catch {
  }
  const m = vd(n, s, o, c);
  return (m.number + " " + m.unit).trim();
}
function ki(n, s) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(s);
  } catch {
  }
  const o = (c = s.attributes) == null ? void 0 : c.unit_of_measurement;
  return Zf[s.state] || (o && Oe(s.state) ? Me(s.state, n.locale) + " " + o : s.state);
}
function gr(n, s) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(s, { type: "entity" });
  } catch {
  }
  return ((o = s.attributes) == null ? void 0 : o.friendly_name) || s.entity_id;
}
const Uc = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", dd = (n) => Vp.find(([, s]) => n <= s)[0];
function yh(n, s) {
  if (s === "Beaufort") return Math.round(n);
  const o = s ? Qf[s] : void 0;
  if (o === void 0) return;
  const c = th.findIndex((m) => n * o < m);
  return c === -1 ? 12 : c;
}
const Yc = (n, s) => {
  const o = s ? eh[s] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Zc = (n) => Object.keys(n.states || {}).find((s) => {
  var o, c;
  return s.startsWith("sensor.") && ((c = (o = n.entities) == null ? void 0 : o[s]) == null ? void 0 : c.platform) === "moon";
}), Xd = (n) => Object.values(n.states || {}).filter((s) => {
  var o, c;
  return s.entity_id.startsWith("sensor.") && ((o = s.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = s.attributes) == null ? void 0 : c.state_class) ?? "") && qs(n, s.entity_id);
}).map((s) => s.entity_id).sort()[0];
function kh(n) {
  var o;
  const s = {};
  for (const [c, m] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      s[c] = m.categories;
      continue;
    }
    for (const [x, k] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) s[x] = k == null ? void 0 : k.categories;
  }
  return s;
}
const au = (n, s, o) => {
  var m, x, k;
  const c = (x = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : x.platform;
  return !!c && !!((k = s[c]) != null && k.includes(Jf));
};
function Mh(n, s) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && xd.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && qs(n, c.entity_id) && au(n, s, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), xd.map((c) => o.get(c)).filter(Boolean);
}
const Sh = (n, s) => Object.values(n.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && qs(n, o.entity_id) && au(n, s, o.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Kc(n, s, o) {
  const c = Math.max(s - n, 1e-6), m = o[o.length - 1], x = o.find((E) => c / E <= 4) ?? m * Math.ceil(c / (4 * m)), k = Math.floor(n / x) * x;
  let L = Math.ceil(s / x) * x;
  L === k && (L = k + x);
  const S = [];
  for (let E = k; E <= L + x / 1e3; E += x) S.push(E);
  return { min: k, max: L, ticks: S };
}
const Ch = (n, s, o) => {
  const c = (k) => [1, 3, 5].map((L) => parseInt(k.slice(L, L + 2), 16)), m = c(n), x = c(s);
  return "rgb(" + m.map((k, L) => Math.round(k + (x[L] - k) * o)).join(", ") + ")";
}, Th = (n, s, o, c) => {
  const m = o * Math.abs(1 - 2 * c), x = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (s - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (s + o) + " A " + m + " " + o + " 0 0 " + x + " " + n + " " + (s - o) + " Z";
}, bn = ({ icon: n, name: s, sub: o, visual: c, double: m, backdrop: x, cls: k, zone: L, callouts: S }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (L != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Gp(n) + '</div><div class="wbText"><span class="wbName">' + Ot(s) + "</span>" + (o ? '<span class="wbSub">' + Ot(o) + "</span>" : "") + "</div></div>" + (L != null ? '<div class="wbZone">' + L + "</div>" + (S != null && S.length ? '<div class="wbCallouts">' + S.slice(0, 3).map((E) => Array.isArray(E) ? '<span class="wbCallout"><span>' + Ot(E[0]) + "</span><span>" + Ot(E[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Ot(E) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + c + "</div>") + "</div>", cd = (n) => '<div class="wbZoneM">' + n + "</div>", oo = (n, s) => '<div class="wbValue"><span class="wbNum">' + Ot(n) + "</span>" + (s ? '<span class="wbUnitV">' + Ot(s) + "</span>" : "") + "</div>";
function Lh(n) {
  const s = n.max - n.min || 1, o = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / s * 100, c = (L) => L / yl * 100 + "%", m = (L) => L.map((S) => S.t + "," + o(S.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + c(L.t) + '">' + Si(L.rise ? Pe.sunsetUp : Pe.sunsetDown) + Ot(L.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + o(L) + '%">' + Ot(n.format(L)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + yl + ' 100" preserveAspectRatio="none">' + n.night.map(([L, S]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (S - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + yl + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + m(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + c(L.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + Ot(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Ot(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + c(L.t) + '">' + Ot(L.label) + "</span>").join("") + "</div></div>", k;
}
function $c(n, s, o = 120, c = 300) {
  const k = n.map((W) => W.value), L = Math.min(...k), S = Math.max(...k), E = S - L || 1, j = (W) => W / (n.length - 1) * c, P = (W) => 18 + (1 - (W - L) / E) * (o - 18 - 18), O = n.map((W, ft) => [j(ft), P(W.value)]), V = O.length > 2 ? Op(O) : "M" + O.map((W) => W[0].toFixed(1) + " " + W[1].toFixed(1)).join("L"), st = k.indexOf(S), nt = k.indexOf(L), $ = (W) => W === 0 ? "start" : W === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + c + " " + o + '" aria-hidden="true">' + qp(c, 18, o - 18) + ('<path class="wbArea" d="' + V + "L" + c + " " + (o - 18) + "L0 " + (o - 18) + 'Z"></path>') + '<path class="wbLine" d="' + V + '" vector-effect="non-scaling-stroke"></path><text x="' + j(st) + '" y="' + (P(S) - 6) + '" text-anchor="' + $(st) + '">' + Ot(s(S)) + '</text><text x="' + j(nt) + '" y="' + (P(L) + 14) + '" text-anchor="' + $(nt) + '">' + Ot(s(L)) + '</text><text x="0" y="' + o + '" text-anchor="start">' + Ot(n[0].label) + '</text><text x="' + c + '" y="' + o + '" text-anchor="end">' + Ot(n[n.length - 1].label) + "</text></svg>";
}
function Ah(n, s) {
  const x = n.map((P) => P.value).concat([]), k = Math.min(...x) - 2, L = Math.max(...x) + 1, S = L - k || 1, E = 300 / n.length, j = (P) => (1 - (P - k) / S) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((P, O) => '<rect class="wbBar' + (P.now ? " wbNowBar" : "") + '" x="' + (O * E + E * 0.2) + '" y="' + j(P.value) + '" width="' + E * 0.6 + '" height="' + (104 - j(P.value)) + '" rx="6"></rect><text x="' + (O * E + E / 2) + '" y="120" text-anchor="middle">' + Ot(P.label) + "</text>").join("") + "</svg>";
}
const _h = [
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
], Eh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Xc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Dh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Bh = 0;
function Jc(n, { getHass: s, entityId: o, style: c = "bitmap", motion: m = !0, cards: x, onOpen: k, hoursWindow: L } = {}) {
  var ho, Lr;
  const S = "wb" + ++Bh + "-", E = document.createElement("div");
  E.className = "wb", E.dataset.style = c;
  const j = document.createElement("div");
  j.className = "wbBento", E.appendChild(j), n.replaceChildren(E);
  const P = ["aq_tile", "pollen_tile", "radar_tile"], O = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((p) => !x || x.includes(p)), V = { current: "wide", hourly: "wide", compared_to_average: "double" }, st = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], nt = {};
  O.forEach((p) => {
    const g = document.createElement("div");
    g.className = "wbItem", g.dataset.card = p, g.dataset.size = V[p] || "tile", g.hidden = !0, st.includes(p) && (g.dataset.xl = ""), j.appendChild(g), nt[p] = { el: g, html: null };
  });
  let $ = !1, W = null, ft = 0, ht = -1, wt = !1, it = null;
  const et = "homecore-next-view", _ = (() => {
    try {
      return localStorage.getItem(et);
    } catch {
      return null;
    }
  })(), K = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: _ === "bars" ? "bars" : "strip", aq: void 0 }, Tt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let at = /* @__PURE__ */ new Date(), ct = /* @__PURE__ */ new Date();
  const ot = {}, zt = {}, T = {}, B = (p) => {
    var g;
    return ((g = T[p]) == null ? void 0 : g.forecast) ?? [];
  }, D = (p, g) => {
    var y;
    return T[g] ? (y = p.states) == null ? void 0 : y[T[g].entityId] : void 0;
  };
  function q(p) {
    const g = zt[p];
    g && (g.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete zt[p]), T[p] && delete T[p];
  }
  function kt(p, g, y) {
    var R;
    if (typeof ((R = p.connection) == null ? void 0 : R.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(p.connection.subscribeMessage((z) => {
        $ || zt[g] !== C || (z != null && z.forecast ? T[g] = { entityId: y, forecast: z.forecast } : delete T[g], uo());
      }, { type: "weather/subscribe_forecast", forecast_type: g, entity_id: y }));
    } catch (z) {
      C.unsub = Promise.reject(z);
    }
    C.unsub.catch(() => {
      zt[g] === C && delete zt[g];
    }), zt[g] = C;
  }
  function xt(p, g) {
    var y;
    for (const C of ["daily", "hourly"]) {
      const R = xh(p, g, C);
      ((y = zt[C]) == null ? void 0 : y.entityId) !== (R == null ? void 0 : R.entity_id) && (q(C), R && kt(p, C, R.entity_id));
    }
  }
  const Q = (p, g, y, C = !1) => p.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [g],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function Ct(p, g) {
    var Z, pt, tt;
    const y = ca(p, g, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, R = await Q(p, C, new Date(Date.now() - 3 * Ne)), z = (tt = (pt = (Z = R == null ? void 0 : R[C]) == null ? void 0 : Z.find((gt) => {
      var yt;
      return typeof ((yt = gt.a) == null ? void 0 : yt.pressure) == "number";
    })) == null ? void 0 : pt.a) == null ? void 0 : tt.pressure;
    Tt.pressureHistory = typeof z == "number" ? { entityId: C, value: z } : void 0;
  }
  async function Lt(p, g) {
    var pt;
    const y = ca(p, g, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, R = xr(/* @__PURE__ */ new Date()), z = await Q(p, C, new Date(R.getTime() - zf * Pn)), Z = /* @__PURE__ */ new Map();
    for (const tt of (z == null ? void 0 : z[C]) ?? []) {
      const gt = (pt = tt.a) == null ? void 0 : pt.temperature, yt = new Date((tt.lc ?? tt.lu) * 1e3);
      if (typeof gt != "number" || yt >= R) continue;
      const At = yt.toDateString();
      Z.set(At, Math.max(Z.get(At) ?? -1 / 0, gt));
    }
    Tt.temperatureHistory = { entityId: C, dailyHighs: [...Z.values()], days: [...Z.entries()].map(([tt, gt]) => ({ date: new Date(tt), high: gt })) };
  }
  async function Qt(p) {
    const g = Xd(p);
    if (!g) return;
    const y = await p.callWS({ type: "recorder/statistic_during_period", statistic_id: g, rolling_window: { duration: { hours: 24 } } });
    Tt.rain = { entityId: g, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function le() {
    const p = s == null ? void 0 : s();
    if (!p || $ || typeof p.callWS != "function") return;
    const g = La(p);
    Tt.lastFetch = Date.now(), [Ct(p, g), Lt(p, g), Qt(p)].forEach((y) => y.then(() => uo(), () => {
    }));
  }
  async function ia() {
    const p = s == null ? void 0 : s();
    if (!p) return;
    const g = ca(p, La(p), "temperature");
    if (!g) return;
    const y = g.stateObj.entity_id, C = xr(/* @__PURE__ */ new Date());
    try {
      const R = await Q(p, y, C), z = (Z) => ((R == null ? void 0 : R[y]) ?? []).map((pt) => {
        var tt;
        return { time: pt.lu * 1e3, value: (tt = pt.a) == null ? void 0 : tt[Z] };
      }).filter((pt) => typeof pt.value == "number");
      Tt.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: z("temperature"), humidity: z("humidity") }, uo();
    } catch {
    }
  }
  async function Se(p) {
    const g = s == null ? void 0 : s();
    if (g)
      try {
        const y = await Q(g, p, new Date(Date.now() - 24 * Ne), !0), C = ((y == null ? void 0 : y[p]) ?? []).filter((z) => Oe(z.s)), R = Math.max(1, Math.ceil(C.length / 48));
        Tt.aqHistory = { entityId: p, points: C.filter((z, Z) => Z % R === 0).map((z) => ({ label: en(new Date(z.lu * 1e3), g), value: Number(z.s) })) }, uo();
      } catch {
      }
  }
  function Ai(p) {
    Tt.categories === void 0 && (Tt.categories = null, Promise.resolve().then(() => p.callWS({ type: "integration/descriptions" })).then((g) => {
      Tt.categories = kh(g);
    }, () => {
      Tt.categories = {};
    }).then(() => uo()));
  }
  function La(p) {
    var y;
    const g = Object.keys(p.states || {}).filter((C) => C.startsWith("weather.") && qs(p, C)).sort();
    return o && ((y = p.states) != null && y[o]) ? [o, ...g.filter((C) => C !== o)] : g;
  }
  const It = (p) => Tt.categories ? { air: Mh(p, Tt.categories), pollen: Sh(p, Tt.categories) } : { air: [], pollen: [] };
  function fe(p, g, y, C) {
    if (c === "line") return '<span class="wbWx wbS' + g + ' wbLineIcon" aria-hidden="true">' + Zd(p, y || p === "clear-night") + "</span>";
    if (c === "smooth") {
      const R = cf(p, g === 90, y, S + "g-" + C);
      return '<span class="wbWx wbS' + g + " wb" + R.k[0].toUpperCase() + R.k.slice(1) + (R.night ? " wbNight" : "") + '" aria-hidden="true">' + R.svg + "</span>";
    }
    return '<span class="wbWx wbS' + g + '" aria-hidden="true"><canvas data-wb-wx="' + Ot(Md(p, y)) + '" data-size="' + g + '"></canvas></span>';
  }
  const pa = () => B("daily").filter((p) => p.templow != null).slice(0, Pf);
  function ae(p, g) {
    const y = new Date(g.datetime), C = /* @__PURE__ */ new Date();
    return Hs(y, C) ? Et.today : Hs(y, new Date(C.getTime() + Pn)) ? Et.tomorrow : zc(y, p);
  }
  const Ge = (p, g, y) => y === 0 ? ae(p, g) : zc(new Date(g.datetime), p);
  function Jr(p, g) {
    var yt, At, Gt, Ut;
    const y = wh(p, g);
    if (!y) return "";
    const C = pa(), R = K.openDay !== void 0 ? C[K.openDay] : void 0, z = ca(p, g, "temperature"), Z = C[0], pt = Z && Hs(new Date(Z.datetime), /* @__PURE__ */ new Date()), tt = ((At = (yt = p.config) == null ? void 0 : yt.unit_system) == null ? void 0 : At.temperature) || ((Gt = y.attributes) == null ? void 0 : Gt.temperature_unit) || "";
    let gt = '<div class="wbCard wbWeather' + (R ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (R ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ot(Et.openPage) + '">' : '<div class="wbCurrent">') + fe(y.state, 90, bh(p), "now") + '<div class="wbTempBlock">' + (z && Oe(z.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ot(Me(Math.round(Number(z.value)), p.locale)) + '</span><span class="wbUnit">' + Ot(tt) + "</span></div>" : "") + '<div class="wbPlace">' + Ot(((Ut = p.config) == null ? void 0 : Ut.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ot(ki(p, y)) + "</div>" + (pt && Z.templow != null ? '<div class="wbRange">' + Ot(tn(Et.range, { high: $e(p, Z.temperature), low: $e(p, Z.templow) })) + "</div>" : "") + "</div></div>";
    if (gt += yr(p) + _i(p), C.length) {
      const Dt = pt && z && Oe(z.value) ? $e(p, z.value) : "", $t = (jt, _t, de) => jt === 0 && Dt ? '<span class="wbAsDay">' + Ot(_t) + '</span><span class="wbAsNow">' + Ot(de) + "</span>" : Ot(_t);
      gt += '<div class="wbColumns" role="list">' + C.map((jt, _t) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="col-' + _t + '"><span class="wbDay">' + $t(_t, Ge(p, jt, _t), Et.now) + "</span>" + fe(jt.condition ?? "cloudy", 60, !1, "col" + _t) + '<span class="wbTemps"><span class="wbHi">' + $t(_t, $e(p, jt.temperature), Dt) + '</span><span class="wbLo">' + Ot($e(p, jt.templow)) + "</span></span></button>").join("") + "</div>", gt += '<div class="wbHalves" role="list">' + C.map((jt, _t) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="half-' + _t + '">' + fe(jt.condition ?? "cloudy", 40, !1, "half" + _t) + '<span class="wbText"><span class="wbName">' + Ot(ae(p, jt)) + '</span><span class="wbSub">' + Ot(tn(Et.highLow, { high: $e(p, jt.temperature), low: $e(p, jt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return gt + "</div>" + (R ? he(p, g, R) : "") + "</div>";
  }
  const be = {
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
  }, ne = {
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
  function Jt(p) {
    const g = Date.now(), y = B("hourly").filter((At) => new Date(At.datetime).getTime() > g - Ne).slice(0, 13);
    if (y.length < 2) return "";
    const C = (At) => en(new Date(At.datetime), p), R = (At) => be[At.condition] || "", z = (At) => ne[At.condition] || At.condition;
    let Z = R(y[0]);
    if (!Z) return "";
    let pt = y[0], tt = 0;
    for (const At of y.slice(1))
      tt === 2 || z(At) === z(pt) || !R(At) || (Z += (tt ? " and " : ", ") + R(At) + " from " + C(At), pt = At, tt++);
    const gt = Number(y[0].temperature), yt = y.filter((At) => Oe(At.temperature));
    if (Oe(gt) && yt.length) {
      const At = yt.reduce((Ut, Dt) => Number(Dt.temperature) < Number(Ut.temperature) ? Dt : Ut), Gt = yt.reduce((Ut, Dt) => Number(Dt.temperature) > Number(Ut.temperature) ? Dt : Ut);
      gt - Number(At.temperature) >= 3 ? Z += ", down to " + $e(p, At.temperature) + " by " + C(At) : Number(Gt.temperature) - gt >= 3 && (Z += ", up to " + $e(p, Gt.temperature) + " by " + C(Gt));
    }
    return Z[0].toUpperCase() + Z.slice(1) + ".";
  }
  const yr = (p) => {
    const g = Jt(p);
    return g ? '<div class="wbSummary"><p class="wbSummaryText">' + Ot(g) + "</p></div>" : "";
  };
  function _i(p) {
    const [g, y] = sd[L == null ? void 0 : L()] || sd.day, C = Date.now(), R = B("hourly").filter((z) => {
      const Z = new Date(z.datetime), pt = Z.getHours();
      return Z.getTime() > C - Ne / 2 && pt >= g && pt < y && Oe(z.temperature);
    }).slice(0, 4);
    return R.length ? '<div class="wbNextHours" role="list">' + R.map((z, Z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Ot(en(new Date(z.datetime), p)) + "</span>" + fe(z.condition ?? "cloudy", 40, z.is_daytime === !1, "hr" + Z) + '<span class="wbHourTemp">' + Ot($e(p, z.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function kr(p) {
    const g = p.getTime(), y = Date.now() - Ne;
    return B("hourly").filter((C) => {
      const R = new Date(C.datetime).getTime();
      return R >= g && R < g + Pn && R > y;
    });
  }
  function nn(p) {
    if (!p.length) return ["temperature"];
    const g = ["temperature"];
    return p.some((y) => y.precipitation != null || y.precipitation_probability != null) && g.push("precipitation"), p.some((y) => y.humidity != null) && g.push("humidity"), g;
  }
  function he(p, g, y) {
    const C = xr(new Date(y.datetime)), R = kr(C), z = nn(R), Z = z.includes(K.dayMode) ? K.dayMode : "temperature", pt = (tt) => tt === "humidity" ? Et.humidity : Et.modes[tt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + fe(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ot(ae(p, y)) + '</span><span class="wbSub">' + Ot(tn(Et.highLow, { high: $e(p, y.temperature), low: $e(p, y.templow) })) + '</span></div><button class="wbBack" title="' + Ot(Et.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Si(Pe.back) + "</button></div>" + (z.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + z.map((tt) => '<button aria-pressed="' + (tt === Z) + '" data-wb="day-mode" data-mode="' + tt + '" data-wb-focus="day-mode-' + tt + '">' + Ot(pt(tt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Lh(ua(p, g, C, R, Z)) + "</div></div>";
  }
  function ua(p, g, y, C, R) {
    var Jn;
    const z = y.getTime(), Z = Date.now(), pt = Hs(y, /* @__PURE__ */ new Date()), tt = (xe) => (xe - z) / Ya, gt = (xe) => en(new Date(xe), p), yt = (xe) => new Date(xe.datetime).getTime(), At = [0, 3, 6, 9, 12, 15, 18, 21].map((xe) => ({ t: xe * 60, label: gt(z + xe * Ne), minor: xe % 6 !== 0 })), { rise: Gt, set: Ut } = Fs(p, y), Dt = [], $t = [];
    Gt && (Dt.push({ t: tt(Gt.getTime()), label: gt(Gt.getTime()), rise: !0 }), $t.push([0, tt(Gt.getTime())])), Ut && (Dt.push({ t: tt(Ut.getTime()), label: gt(Ut.getTime()), rise: !1 }), $t.push([tt(Ut.getTime()), yl]));
    const jt = kl(p);
    !Gt && !Ut && jt && kd(new Date(z + Pn / 2), jt.lat, jt.lon) < 0 && $t.push([0, yl]);
    const _t = pt ? tt(Z) : void 0, de = { hours: At, sun: Dt, night: $t };
    if (!C.length && !pt) return { ...de, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Et.noHourly };
    if (R === "precipitation") {
      const xe = C.some((ba) => ba.precipitation_probability != null), Qn = C.map((ba) => ({ t: tt(yt(ba)), v: Number((xe ? ba.precipitation_probability : ba.precipitation) ?? 0) })), cn = br(p, D(p, "hourly"), "precipitation"), Ka = Math.max(0, ...Qn.map((ba) => ba.v)), to = xe ? 100 : Kc(0, Math.max(Ka, 1), [0.5, 1, 2, 5, 10]).max, Ho = (ba) => xe ? Me(ba, p.locale) + "%" : Me(ba, p.locale, { maximumFractionDigits: 1 }) + " " + cn, ri = Qn.find((ba) => ba.v === Ka);
      return {
        ...de,
        kind: "bars",
        points: Qn,
        min: 0,
        max: to,
        ticks: [0, to / 2, to],
        format: Ho,
        now: _t !== void 0 ? { t: _t, v: 0 } : void 0,
        peak: ri && Ka > 0 ? { t: ri.t + 30, v: ri.v, label: Ho(ri.v) } : void 0,
        note: Ka > 0 ? void 0 : Et.noRain
      };
    }
    const Xt = R === "humidity" ? "humidity" : "temperature", Ee = C.filter((xe) => xe[Xt] != null && (!pt || yt(xe) >= Z)).map((xe) => ({ t: tt(yt(xe)), v: Number(xe[Xt]) }));
    let qt, We = [];
    if (_t !== void 0) {
      const xe = ca(p, g, Xt);
      xe && Oe(xe.value) && (qt = { t: _t, v: Number(xe.value) }, Ee.unshift(qt)), We = (((Jn = Tt.todayHistory) == null ? void 0 : Jn.day) === y.toDateString() ? Tt.todayHistory[Xt] : []).filter((cn) => cn.time <= Z).map((cn) => ({ t: Math.max(0, tt(cn.time)), v: cn.value })), qt && We.length && We.push(qt);
    }
    const Ze = [...We, ...Ee];
    if (!Ze.length) return { ...de, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Et.noHourly };
    const Da = Ze.map((xe) => xe.v), dn = Kc(Math.min(...Da), Math.max(...Da), Xt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Xt === "humidity" && (dn.min = Math.max(0, dn.min), dn.max = Math.min(100, dn.max), dn.ticks = dn.ticks.filter((xe) => xe >= 0 && xe <= 100));
    const ii = Xt === "humidity" ? (xe) => Me(xe, p.locale) + "%" : (xe) => $e(p, xe), za = Xt === "temperature" ? Ze.reduce((xe, Qn) => Qn.v > xe.v ? Qn : xe) : void 0;
    return { ...de, kind: "line", points: Ee, past: We, ...dn, format: ii, now: qt, peak: za ? { ...za, label: ii(za.v) } : void 0 };
  }
  function va(p) {
    const g = ["temperature"];
    return p.some((y) => y.precipitation_probability != null || y.precipitation != null) && g.push("precipitation"), p.some((y) => y.wind_speed != null) && g.push("wind"), g;
  }
  function Ei(p, g, y = Nc) {
    var z, Z;
    const C = B("daily"), R = [];
    for (let pt = 0; pt < y; pt++) for (const tt of [!1, !0]) {
      const gt = p.getTime() + (pt * 24 + (tt ? 12 : 0)) * Ne, yt = gt + 12 * Ne, At = {};
      g.forEach((Ut) => {
        const Dt = new Date(Ut.datetime).getTime();
        Ut.condition && Dt >= gt && Dt < yt && (At[Ut.condition] = (At[Ut.condition] ?? 0) + (Wf.has(Ut.condition) ? 2 : 1));
      });
      let Gt = (z = Object.entries(At).sort((Ut, Dt) => Dt[1] - Ut[1])[0]) == null ? void 0 : z[0];
      if (!Gt) {
        const Ut = new Date(gt).toDateString();
        Gt = ((Z = C.find((Dt) => new Date(Dt.datetime).toDateString() === Ut)) == null ? void 0 : Z.condition) ?? "cloudy";
      }
      R.push({ cond: tt && Gt === "sunny" ? "clear-night" : Gt, night: tt });
    }
    return R;
  }
  function Mr(p, g, y) {
    const C = D(p, "hourly"), R = g.precipitation_probability != null ? Me(g.precipitation_probability, p.locale) + "%" : "", z = g.precipitation ? Me(g.precipitation, p.locale) + " " + br(p, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return R ? [R, z] : [z || "–", ""];
      case "wind":
        return g.wind_speed != null ? [Me(Math.round(g.wind_speed), p.locale), br(p, C, "wind_speed")] : ["–", ""];
      default:
        return [$e(p, g.temperature), (g.precipitation_probability ?? 0) >= 20 ? R : ""];
    }
  }
  function Kt(p, g, y) {
    const [C, R] = sd[L == null ? void 0 : L()] || sd.day, z = [];
    for (let Z = 0; Z < 4 && z.length < 3; Z++) {
      const pt = /* @__PURE__ */ new Date();
      pt.setHours(0, 0, 0, 0), pt.setDate(pt.getDate() + Z);
      const tt = new Date(pt);
      tt.setHours(R, 0, 0, 0), pt.setHours(C, 0, 0, 0), !(tt.getTime() <= y || !g.some((gt) => {
        const yt = new Date(gt.datetime).getTime();
        return yt >= pt.getTime() && yt <= tt.getTime();
      })) && z.push({ a: pt.getTime(), b: tt.getTime(), label: ae(p, { datetime: pt.toISOString() }) });
    }
    return z;
  }
  function Nt(p, g, y, C, R, z) {
    const Z = (y.b - g.a) / Ne, pt = (_t) => ((_t - g.a) / Ne).toFixed(3), tt = 80, gt = 32, yt = [];
    for (const _t = new Date(g.a - Pn); _t.getTime() < y.b + Pn; _t.setDate(_t.getDate() + 1)) {
      const { rise: de, set: Xt } = Fs(p, new Date(_t));
      de && Xt && yt.push({ rise: de.getTime(), set: Xt.getTime() });
    }
    const At = (_t, de) => tt - (tt - gt) * Math.sin(Math.PI * (de - _t.rise) / (_t.set - _t.rise)), Gt = (_t) => !yt.some((de) => _t >= de.rise && _t <= de.set);
    let Ut = "", Dt = "", $t = "";
    yt.forEach((_t, de) => {
      const Xt = [];
      for (let qt = _t.rise; qt <= _t.set; qt += 15 * Ya) Xt.push(pt(qt) + "," + At(_t, qt).toFixed(2));
      Xt.push(pt(_t.set) + "," + tt), Ut += '<polyline class="wbLineArc" points="' + Xt.join(" ") + '"/>';
      const Ee = yt[de + 1];
      Ee && (Ut += '<rect class="wbLineNight" x="' + pt(_t.set) + '" y="0" width="' + ((Ee.rise - _t.set) / Ne).toFixed(3) + '" height="100"/>'), [[_t.rise, "↑"], [_t.set, "↓"]].forEach(([qt, We]) => {
        qt < g.a || qt > y.b || (Dt += '<line class="wbLineEdge" x1="' + pt(qt) + '" x2="' + pt(qt) + '" y1="0" y2="100"/>', $t += '<span class="wbLineTime" style="left:' + z(qt) + '">' + We + " " + Ot(en(new Date(qt), p)) + "</span>");
      });
    });
    const jt = yt.find((_t) => R >= _t.rise && R <= _t.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Ut + Dt + '<line class="wbLineHorizon" x1="0" x2="' + Z + '" y1="' + tt + '" y2="' + tt + '"/></svg>' + $t + (jt ? '<span class="wbLineNow" style="left:' + z(R) + ";top:" + At(jt, R) + '%">' + Zd("sunny", !1) + "</span>" : "") + C.filter((_t) => _t.entry && !_t.now).map((_t) => '<span class="wbLineGlyph' + _t.edge + '" style="left:' + z(_t.t) + '">' + Zd(_t.entry.condition ?? "cloudy", Gt(_t.t)) + "</span>").join("");
  }
  function Zt(p, g) {
    delete ot.hourly;
    const y = K.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Ot(y === "bars" ? Et.nextDays : Et.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ot(Et.showAs) + '">' + ["strip", "bars"].map((qt) => '<button aria-pressed="' + (qt === y) + '" data-wb="hourly-view" data-view="' + qt + '" data-wb-focus="hourly-view-' + qt + '">' + Ot(Et.views[qt]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Aa(p, g, C);
    const R = B("hourly"), z = Math.floor(Date.now() / Ya) * Ya, Z = R.filter((qt) => new Date(qt.datetime).getTime() > z - Ne);
    if (!Z.length) return "";
    const pt = va(Z), tt = pt.includes(K.hourlyMode) ? K.hourlyMode : "temperature", gt = Kt(p, R, z);
    if (!gt.length) return "";
    const yt = gt[0], At = gt[gt.length - 1], Gt = (yt.b - yt.a) / Ne, Ut = (qt) => "calc(var(--wb-u) * " + ((qt - yt.a) / Ne).toFixed(3) + ")", Dt = new Date(yt.a);
    Dt.setHours(6, 0, 0, 0), Dt.getTime() > yt.a && Dt.setDate(Dt.getDate() - 1);
    const $t = Math.ceil((At.b - Dt.getTime()) / Pn);
    c !== "line" && (ot.hourly = { segs: Ei(Dt, R, $t), seed: Dt.getDate(), columns: $t });
    const jt = (qt) => qt === yt.a ? " wbFirst" : qt === At.b ? " wbLast" : "", _t = [];
    for (let qt = yt.a; qt < At.b; ) {
      const We = new Date(qt);
      We.setHours(24, 0, 0, 0);
      const Ze = Math.min(We.getTime(), At.b);
      _t.push({ a: qt, b: Ze, label: ae(p, { datetime: new Date(qt).toISOString() }), page: gt.find((Da) => Da.a >= qt && Da.a < Ze) || gt.find((Da) => Da.a < Ze && Da.b > qt) }), qt = Ze;
    }
    const de = z > yt.a && z < At.b ? Math.floor((z - yt.a) / (2 * Ne)) * 2 : 0, Xt = [];
    for (let qt = yt.a; qt <= At.b; qt += Ne) {
      const We = new Date(qt), Ze = jt(qt);
      !Ze && We.getHours() % Hf || !Ze && (Math.abs(yt.a - qt) < 2 * Ne || Math.abs(At.b - qt) < 2 * Ne) || z >= yt.a && Math.abs(qt - z) < 1.5 * Ne && !Ze || Xt.push({ t: qt, edge: Ze, label: en(We, p), entry: qt >= z - Ne ? R.find((Da) => new Date(Da.datetime).getTime() === qt) : void 0 });
    }
    z > yt.a && z < yt.b && Xt.push({ t: z, edge: z - yt.a < Ne ? " wbFirst" : yt.b - z < Ne ? " wbLast" : "", label: Et.now, entry: Z[0], now: !0 });
    const Ee = (qt, We) => '<span class="wbMark' + qt.edge + (qt.now ? " wbNowMark" : "") + '" style="left:' + Ut(qt.t) + '">' + We + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (pt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + pt.map((qt) => '<button aria-pressed="' + (qt === tt) + '" data-wb="hourly-mode" data-mode="' + qt + '" data-wb-focus="hourly-mode-' + qt + '">' + Ot(Et.modes[qt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ot(Et.nextHours) + '" data-span="' + Gt + '" data-start="' + de + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Gt + ");width:calc(var(--wb-u) * " + (At.b - yt.a) / Ne + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((At.b - yt.a) / (2 * Ne)) + 1)].map((qt, We) => '<i class="wbSnap" style="left:' + Ut(yt.a + We * 2 * Ne) + '"></i>').join("") + '<div class="wbDays">' + _t.map((qt, We) => {
      var Ze;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((qt.b - qt.a) / Ne).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (We === 0 ? de : ((((Ze = qt.page) == null ? void 0 : Ze.a) ?? qt.a) - yt.a) / Ne) + '" data-wb-focus="hours-day-' + We + '">' + Ot(qt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Xt.map((qt) => Ee(qt, Ot(qt.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + Nt(p, yt, At, Xt, z, Ut) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Ut(Dt.getTime()) + ";width:calc(var(--wb-u) * " + $t * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (z > yt.a ? '<i class="wbPast" style="width:' + Ut(Math.min(z, At.b)) + '"></i><i class="wbNowLine" style="left:' + Ut(z) + '"></i>' : "") + _t.slice(1).map((qt) => '<i class="wbMidnight" style="left:' + Ut(qt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Xt.map((qt) => {
      if (!qt.entry) return "";
      const [We, Ze] = Mr(p, qt.entry, tt);
      return Ee(qt, '<span class="wbPrimaryV">' + Ot(We) + '</span><span class="wbSecondary">' + Ot(Ze) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function _e(p) {
    const g = Ff, y = g.findIndex(([tt]) => tt >= p);
    if (y <= 0) return "rgb(" + g[y < 0 ? g.length - 1 : 0][1].join(",") + ")";
    const [C, R] = g[y - 1], [z, Z] = g[y], pt = (p - C) / (z - C);
    return "rgb(" + R.map((tt, gt) => Math.round(tt + (Z[gt] - tt) * pt)).join(",") + ")";
  }
  function Aa(p, g, y) {
    var Ut;
    const C = B("daily").filter((Dt) => Oe(Dt.templow) && Oe(Dt.temperature)).slice(0, 7);
    if (!C.length) return "";
    const R = Math.min(...C.map((Dt) => Number(Dt.templow))), z = Math.max(...C.map((Dt) => Number(Dt.temperature))), Z = Math.max(1, z - R), pt = (Dt) => Math.max(0, Math.min(100, (Dt - R) / Z * 100)).toFixed(2), tt = /F/.test(br(p, D(p, "daily"), "temperature")), gt = (Dt) => tt ? (Dt - 32) / 1.8 : Dt, yt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Dt) => _e(gt(R + Dt * Z)) + " " + Dt * 100 + "%").join(",") + ")", At = (Ut = ca(p, g, "temperature")) == null ? void 0 : Ut.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (va(B("hourly").filter((Dt) => new Date(Dt.datetime).getTime() > Date.now() - Ne)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((Dt, $t) => {
      const jt = ae(p, Dt), _t = Hs(new Date(Dt.datetime), /* @__PURE__ */ new Date()), de = Number(Dt.templow), Xt = Number(Dt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ot(tn(Et.rangeRow, { day: jt, low: $e(p, de), high: $e(p, Xt) })) + '"><span class="wbRangeDay">' + Ot(jt) + "</span>" + fe(Dt.condition, 40, !1, "r" + $t) + '<span class="wbRangeLo">' + Ot($e(p, de)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + yt + ";clip-path:inset(0 " + (100 - pt(Xt)) + "% 0 " + pt(de) + '% round 4px)"></i>' + (_t && Oe(At) ? '<i class="wbRangeNow" style="left:' + pt(Number(At)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ot($e(p, Xt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Un = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Yt = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], oe = (p, g) => {
    if (g <= p[0][0]) return p[0][1];
    for (let y = 1; y < p.length; y++) if (g <= p[y][0]) {
      const [C, R] = p[y - 1], [z, Z] = p[y];
      return Ch(R, Z, (g - C) / (z - C));
    }
    return p[p.length - 1][1];
  }, Xe = (p, g, y) => {
    if (!g || !y) return Un[5][1];
    const C = (p.getTime() - y.getTime()) / Ya;
    return C >= -90 ? oe(Yt, C) : oe(Un, (p.getTime() - g.getTime()) / Ya);
  }, Ao = (p) => (p >= 60 ? Math.floor(p / 60) + "h " : "") + p % 60 + "m";
  function on(p) {
    const g = at, { rise: y, set: C } = Fs(p, g), R = y && C ? Math.round((C.getTime() - y.getTime()) / Ya) : 0, z = Math.floor(R / 60), Z = R % 60, pt = (Ee) => Ee ? en(Ee, p) : "–", tt = new Date(g);
    tt.setDate(tt.getDate() + 1);
    const gt = Fs(p, tt), yt = gt.rise && gt.set ? Math.round((gt.set.getTime() - gt.rise.getTime()) / Ya) : 0, At = new Date(g);
    At.setDate(At.getDate() - 1);
    const Gt = !!(y && C && g >= y && g <= C), Ut = !!(y && g < y), Dt = Gt ? y : Ut ? Fs(p, At).set : C, $t = Gt ? C : Ut ? y : gt.rise, jt = Dt && $t ? Math.min(1, Math.max(0, (g.getTime() - Dt.getTime()) / ($t.getTime() - Dt.getTime()))) : 0, _t = $t ? Math.max(0, Math.round(($t.getTime() - g.getTime()) / Ya)) : 0, de = $t ? Ao(_t) : "–", Xt = Gt ? Et.untilSunset : Et.untilSunrise;
    return bn({
      icon: Pe.sunny,
      name: Et.sun,
      sub: R ? tn(Et.daylightShort, { hours: z, minutes: Z }) : void 0,
      cls: "wbSunTile",
      callouts: [[Et.callout.riseTomorrow, pt(gt.rise)], [Et.callout.setTomorrow, pt(gt.set)], ...yt ? [[Et.callout.dayTomorrow, Math.floor(yt / 60) + "h " + yt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Xe(g, y, C) + '"><svg class="wbSunTrack" data-up="' + (Gt ? 1 : 0) + '" data-f="' + jt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Ot(de) + '</span><span class="wbSunWord">' + Ot(Xt) + '</span></div><span class="wbSunAt wbSunRise">' + Ot(pt(y)) + '</span><span class="wbSunAt wbSunSet">' + Ot(pt(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      cd(oo(de, ""))
    });
  }
  const ea = 22;
  function Yn(p) {
    const g = Math.round(p.clientWidth), y = Math.round(p.clientHeight), C = ea, R = C / 2, z = g + "x" + y + ":" + p.dataset.f + ":" + p.dataset.up;
    if (g < C * 3 || y < C * 3 || p.dataset.drawn === z) return;
    p.dataset.drawn = z;
    const Z = "M" + R + " " + (y - C) + "V" + C + "A" + R + " " + R + " 0 0 1 " + C + " " + R + "H" + (g - C) + "A" + R + " " + R + " 0 0 1 " + (g - R) + " " + C + "V" + (y - C), pt = "M" + (g - R) + " " + (y - C) + "A" + R + " " + R + " 0 0 1 " + (g - C) + " " + (y - R) + "H" + C + "A" + R + " " + R + " 0 0 1 " + R + " " + (y - C), tt = 16, gt = 6, yt = "M" + tt + " 0H" + (g - tt) + "A" + tt + " " + tt + " 0 0 1 " + g + " " + tt + "V" + (y - tt) + "A" + tt + " " + tt + " 0 0 1 " + (g - tt) + " " + y + "H" + tt + "A" + tt + " " + tt + " 0 0 1 0 " + (y - tt) + "V" + tt + "A" + tt + " " + tt + " 0 0 1 " + tt + " 0ZM" + (C + gt) + " " + C + "A" + gt + " " + gt + " 0 0 0 " + C + " " + (C + gt) + "V" + (y - C - gt) + "A" + gt + " " + gt + " 0 0 0 " + (C + gt) + " " + (y - C) + "H" + (g - C - gt) + "A" + gt + " " + gt + " 0 0 0 " + (g - C) + " " + (y - C - gt) + "V" + (C + gt) + "A" + gt + " " + gt + " 0 0 0 " + (g - C - gt) + " " + C + "Z", At = p.dataset.up === "1", Gt = Number(p.dataset.f) || 0, Ut = "http://www.w3.org/2000/svg";
    p.setAttribute("viewBox", "0 0 " + g + " " + y);
    const Dt = document.createElementNS(Ut, "path");
    Dt.setAttribute("d", At ? Z : pt), p.replaceChildren(Dt);
    const $t = Dt.getTotalLength(), jt = Dt.getPointAtLength($t * Gt), _t = At ? $t : 0;
    p.innerHTML = '<defs><mask id="' + S + 'sun-day"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + S + 'sun-done"><path d="' + Z + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (At ? (_t * Gt).toFixed(1) + " " + (_t + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + yt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + yt + '" mask="url(#' + S + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + yt + '" mask="url(#' + S + 'sun-done)"></path><circle class="wbSunDot' + (At ? "" : " wbSunNight") + '" cx="' + jt.x.toFixed(1) + '" cy="' + jt.y.toFixed(1) + '" r="' + R + '"></circle>';
  }
  const Ye = typeof ResizeObserver == "function" ? new ResizeObserver((p) => p.forEach((g) => Yn(g.target))) : null;
  function _o() {
    Ye == null || Ye.disconnect(), E.querySelectorAll("svg.wbSunTrack").forEach((p) => {
      Yn(p), Ye == null || Ye.observe(p);
    });
  }
  function Eo(p, g, y) {
    const C = (Z) => S + "moon-" + Z, R = p > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Th(61, 61, 57.9, p) + '"' + (g ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", z = (Z, pt, tt, gt, yt, At) => '<filter id="' + C(Z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + pt + '" numOctaves="' + tt + '" seed="' + gt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Gt) => "<feFunc" + Gt + ' type="linear" slope="' + yt + '" intercept="' + At + '"></feFunc' + Gt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + z("mottle", "0.045", 4, 3, 1.8, -0.4) + z("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + _h.map(([Z, pt, tt, gt, yt, At]) => '<ellipse cx="' + Z + '" cy="' + pt + '" rx="' + tt + '" ry="' + gt + '" fill-opacity="' + At + '" transform="rotate(' + yt + " " + Z + " " + pt + ')"></ellipse>').join("") + "</g>" + Eh.map(([Z, pt, tt]) => '<circle class="wbCrater" cx="' + Z + '" cy="' + pt + '" r="' + tt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + Dh.map(([Z, pt]) => '<line x1="54.4" y1="95" x2="' + Z + '" y2="' + pt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + Xc.map(([Z, pt, tt]) => '<circle cx="' + Z + '" cy="' + pt + '" r="' + tt * 2 + '"></circle>').join("") + "</g>" + Xc.map(([Z, pt, tt]) => '<circle class="wbBrightCenter" cx="' + Z + '" cy="' + pt + '" r="' + tt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + R + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Do(p) {
    const g = ct, y = kl(p), C = (y == null ? void 0 : y.lat) ?? 0, R = $d(g), z = Zc(p), Z = z ? p.states[z] : void 0, pt = Xr(Z) && $f.includes(Z.state) ? Z.state : vh(R.phase), { rise: tt, set: gt } = y ? gh(g, y.lat, y.lon) : {}, yt = R.phase > 0.5 != C < 0, At = Me(Math.round(R.fraction * 100), p.locale) + "%", Gt = tt ?? gt;
    return Gt && en(Gt, p), bn({
      icon: Pe.night,
      name: Et.moon,
      sub: Et.phases[pt],
      callouts: [...tt ? [[Et.callout.moonrise, en(tt, p)]] : [], ...gt ? [[Et.callout.moonset, en(gt, p)]] : [], [Et.callout.lit, At]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Eo(R.fraction, yt, C < 0) + "</div>" + cd(oo(Me(Math.round(R.fraction * 100), p.locale), "%"))
    });
  }
  function fa(p, g) {
    var Dt;
    const y = ca(p, g, "wind_speed");
    if (!y || !Oe(y.value)) return "";
    const C = ca(p, g, "wind_gust_speed"), R = ca(p, g, "wind_bearing"), z = R && Oe(R.value) ? Number(R.value) : void 0, Z = yh(Number(y.value), (Dt = y.stateObj.attributes) == null ? void 0 : Dt.wind_speed_unit), pt = vd(p, y.stateObj, "wind_speed", y.value), tt = z !== void 0 ? Et.cardinal[Kf[((z + 11.25) / 22.5 | 0) % 16]] : void 0, gt = C ? Gc(p, C.stateObj, "wind_gust_speed", C.value) : void 0, yt = [tt ? tn(Et.windFrom, { direction: tt }) : void 0, Z !== void 0 ? Z + " " + Et.beaufort : void 0].filter(Boolean).join(" · ") || gt, At = ($t, jt) => {
      const _t = ($t - 90) * Math.PI / 180;
      return [100 + jt * Math.cos(_t), 100 + jt * Math.sin(_t)];
    }, Gt = Array.from({ length: 36 }, ($t, jt) => jt * 10).map(($t) => {
      const jt = $t % 90 === 0, [_t, de] = At($t, 97), [Xt, Ee] = At($t, jt ? 83 : 89);
      return '<line class="wbTick' + (jt ? " wbMajor" : "") + '" x1="' + _t + '" y1="' + de + '" x2="' + Xt + '" y2="' + Ee + '"></line>';
    }).join(""), Ut = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([$t, jt]) => {
      const [_t, de] = At(jt, 64);
      return '<text class="wbLetter' + ($t === "n" ? " wbNorth" : "") + '" x="' + _t + '" y="' + de + '">' + Ot(Et.cardinal[$t]) + "</text>";
    }).join("");
    return bn({ icon: Pe.windy, name: Et.wind, sub: yt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Gt + Ut + (z !== void 0 ? '<path class="wbMarker" transform="rotate(' + z + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ot(pt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ot(pt.unit) + "</text></svg>" });
  }
  const Zn = (p, g) => {
    if (p < 3) return Et.advice.fine;
    if (p < 8) return Et.advice.sunblock;
    const y = Date.now(), C = B("hourly").find((R) => R.uv_index != null && new Date(R.datetime).getTime() > y && R.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? tn(Et.advice.avoidUntil, { time: en(new Date(C.datetime), g) }) : Et.advice.avoidToday;
  };
  function Di(p, g) {
    const y = ca(p, g, "uv_index");
    if (!y || !Oe(y.value)) return "";
    const C = Number(y.value), R = Et.uvLevel[Uc(C)], z = /* @__PURE__ */ new Date();
    z.setHours(23, 59, 59, 999);
    const Z = B("hourly").filter((yt) => yt.uv_index != null && new Date(yt.datetime) > /* @__PURE__ */ new Date() && new Date(yt.datetime) <= z).reduce((yt, At) => !yt || At.uv_index > yt.uv ? { uv: At.uv_index, time: new Date(At.datetime) } : yt, void 0), pt = Xf[Uc(C)], tt = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), gt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + S + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + tt.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + pt + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + pt + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + pt + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + tt.toFixed(1) + '" fill="url(#' + S + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Ot(Me(Math.round(C), p.locale)) + '</span><span class="wbUvWord">' + Ot(R) + "</span></div>" + cd(oo(Me(Math.round(C), p.locale), ""));
    return bn({
      icon: Pe.sunnyAlert,
      name: Et.metrics.uv_index,
      sub: Z && Z.uv > C ? tn(Et.uvPeak, { level: R, uv_index: Me(Math.round(Z.uv), p.locale), time: en(Z.time, p) }) : R,
      zone: gt,
      cls: "wbUv",
      callouts: [Zn(C, p), [Et.callout.now, Me(Math.round(C), p.locale) + " · " + R], [Et.callout.peak, Z && Z.uv > C ? Me(Math.round(Z.uv), p.locale) + " at " + en(Z.time, p) : Et.callout.now]]
    });
  }
  function Sr(p) {
    const g = B("daily")[0], y = Tt.temperatureHistory;
    if (!g || new Date(g.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Oe(g.temperature) || !y || y.dailyHighs.length < Vf) return "";
    const C = Number(g.temperature), R = y.dailyHighs.reduce((jt, _t) => jt + _t, 0) / y.dailyHighs.length, z = Math.round(C - R) || 0, Z = z > 0 ? "above" : z < 0 ? "below" : "same", pt = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], tt = pt.map((jt) => jt.high).concat(R), gt = Math.min(...tt) - 1, yt = Math.max(...tt) + 1, At = (jt) => (1 - (jt - gt) / (yt - gt)) * 100, Gt = (jt) => (jt + 0.5) / pt.length * 100, Ut = pt.map((jt, _t) => [Gt(_t), At(jt.high)]), Dt = Ut.map(([jt, _t], de) => (de ? "L" : "M") + jt.toFixed(2) + " " + _t.toFixed(2)).join(""), $t = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + S + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Dt + "L" + Ut[Ut.length - 1][0].toFixed(2) + " 100L" + Ut[0][0].toFixed(2) + ' 100Z" fill="url(#' + S + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + At(R).toFixed(2) + '" y2="' + At(R).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Dt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + At(R).toFixed(2) + '%">' + Ot($e(p, R)) + "</span>" + pt.map((jt, _t) => {
      const de = jt.today ? " wbToday" : "", Xt = "left:" + Gt(_t).toFixed(2) + "%;top:" + At(jt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + de + '" style="' + Xt + '"></i><span class="wbAvgValue' + de + '" style="' + Xt + '">' + Ot($e(p, jt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + pt.map((jt, _t) => '<span class="wbAvgDay' + (jt.today ? " wbToday" : "") + '" style="left:' + Gt(_t).toFixed(2) + '%">' + Ot(rh(jt.date, p)) + "</span>").join("") + "</div></div>";
    return bn({
      icon: Pe.chartLine,
      name: Et.metrics.compared_to_average,
      double: !0,
      sub: tn(Et.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (z > 0 ? "+" : "") + Ot($e(p, z)) + '</div><div class="wbCompareWords">' + Ot(Et.average[Z]) + '</div><div class="wbCompareTemps">' + Ot(tn(Et.todayVsAverage, { today: $e(p, C), average: $e(p, R) })) + "</div></div>" + $t + "</div>"
    });
  }
  function rn(p, g) {
    const y = ca(p, g, "humidity");
    if (!y || !Oe(y.value)) return "";
    const C = ca(p, g, "dew_point"), R = Math.max(0, Math.min(100, Number(y.value)));
    return bn({
      icon: Pe.waterPercent,
      name: Et.metrics.humidity,
      sub: C && Oe(C.value) ? tn(Et.dewPoint, { dew_point: $e(p, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + R + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + oo(Me(Math.round(Number(y.value)), p.locale), "%") + "</div>"
    });
  }
  function js(p, g) {
    var jt, _t, de;
    const y = ca(p, g, "pressure");
    if (!y || !Oe(y.value)) return "";
    const C = Number(y.value), R = (jt = y.stateObj.attributes) == null ? void 0 : jt.pressure_unit, z = Yc(C, R), Z = ((_t = Tt.pressureHistory) == null ? void 0 : _t.entityId) === y.stateObj.entity_id ? Yc(Tt.pressureHistory.value, R) : void 0;
    let pt;
    if (z !== void 0 && Z !== void 0) {
      const Xt = z - Z;
      pt = Xt >= Hc ? "rising" : Xt <= -Hc ? "falling" : "steady";
    }
    const tt = vd(p, y.stateObj, "pressure", Math.round(C)), gt = y.stateObj, yt = (Xt) => R === "inHg" ? Math.round(Xt * 100) / 100 : Math.round(Xt), At = (Xt) => Gc(p, gt, "pressure", yt(Xt)), Gt = Z !== void 0 ? Tt.pressureHistory.value : void 0, Ut = Gt !== void 0 ? yt(C - Gt) : void 0, Dt = (de = gt.entity_id) != null && de.startsWith("weather.") ? B("hourly").find((Xt) => Oe(Xt.pressure) && new Date(Xt.datetime).getTime() >= Date.now() + 3 * Ne - 30 * Ya) : void 0, $t = [
      ...pt ? [Et.advice[pt]] : [],
      ...Gt !== void 0 ? [[Et.callout.hoursAgo, At(Gt)], [Et.callout.change, (Ut > 0 ? "+" : Ut < 0 ? "−" : "") + At(Math.abs(Ut))]] : [],
      ...Dt ? [[Et.callout.inHours, At(Number(Dt.pressure))]] : []
    ];
    return bn({
      icon: Pe.gauge,
      name: Et.metrics.pressure,
      sub: pt ? Et.pressure[pt] : void 0,
      cls: "wbPressure",
      callouts: $t,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + oo(tt.number) + '<span class="wbTapeUnit">' + Ot(tt.unit) + "</span></div>" + (z !== void 0 ? ro(p, z) : "") + "</div>"
    });
  }
  function ro(p, g) {
    const R = Math.floor(g) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (z, Z) => R + Z).map((z) => {
      const Z = 100 - (z - g) * 9;
      if (Z < 22 || Z > 178) return "";
      const pt = z % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Z - 100) / 100) + '"><line class="wbTapeTick" x1="' + (pt ? 2 : 8) + '" x2="26" y1="' + Z + '" y2="' + Z + '"></line>' + (pt ? '<text class="wbTapeLabel" x="33" y="' + Z + '">' + Ot(Me(z, p.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ot(Et.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ot(Et.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Tn(p) {
    var tt, gt;
    const g = Xd(p), y = g ? p.states[g] : void 0;
    if (!y || ((tt = Tt.rain) == null ? void 0 : tt.entityId) !== g || !Oe(Tt.rain.change)) return "";
    const C = ((gt = y.attributes) == null ? void 0 : gt.unit_of_measurement) ?? "", R = D(p, "hourly"), z = Date.now() + Pn, Z = B("hourly").filter((yt) => yt.precipitation != null && new Date(yt.datetime).getTime() <= z), pt = Z.reduce((yt, At) => yt + Number(At.precipitation), 0);
    return bn({
      icon: Pe.rainy,
      name: Et.metrics.precipitation,
      sub: R && Z.length ? tn(Et.rainExpected, { amount: Me(pt, p.locale, { maximumFractionDigits: 1 }) + " " + br(p, R, "precipitation") }) : Et.rainLast24h,
      visual: oo(Me(Tt.rain.change, p.locale, { maximumFractionDigits: 1 }), C) + (Z.length > 1 ? Ah(Z.map((yt) => ({ label: "", value: Number(yt.precipitation) }))) : "")
    });
  }
  function Bi(p, g) {
    const y = ca(p, g, "visibility");
    if (!y || !Oe(y.value)) return "";
    const C = vd(p, y.stateObj, "visibility", y.value), R = xf(Number(y.value), br(p, y.stateObj, "visibility"));
    return bn({
      icon: Pe.eyeOutline,
      name: Et.metrics.visibility,
      sub: Et.visibilityLevel[yf(R)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + R + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ot(In(p, R)) + '</div><div class="wbSeaValue">' + oo(C.number, C.unit) + "</div></div>"
    });
  }
  function In(p, g) {
    var z;
    const y = wf((z = p.config) == null ? void 0 : z.country, g);
    if (y) return tn(Et.visibilityLandmarks, { from: y.from, to: y.to });
    const C = g / Yf * 60;
    if (C < 60) {
      const Z = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if (Z < 60) return tn(Et.walkMinutes, { minutes: Me(Z, p.locale) });
    }
    const R = Math.max(1, Math.round(C / 30) / 2);
    return R < 8 ? tn(Et.walkHours, { hours: Me(R, p.locale) }) : Et.walkDay;
  }
  function Cr(p) {
    Tt.categories === void 0 && Ai(p);
    const g = It(p), y = (tt) => tt.map((gt) => p.states[gt]).filter(Xr), C = y(g.air), R = y(g.pollen);
    if (!C.length && !R.length) return "";
    const z = [...C, ...R], Z = (tt) => R.includes(tt) ? Pe.flower : Pe.airFilter, pt = z.find((tt) => tt.entity_id === K.aq);
    return pt ? Hn(p, pt, Z(pt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ot(Et.airQuality) + '</h2></div><div class="wbAqTiles">' + z.map((tt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ot(tt.entity_id) + '"><span class="wbChip">' + Si(Z(tt)) + '</span><span class="wbText"><span class="wbName">' + Ot(gr(p, tt)) + '</span><span class="wbSub">' + Ot(ki(p, tt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Hn(p, g, y) {
    var yt, At, Gt;
    const C = ((yt = g.attributes) == null ? void 0 : yt.unit_of_measurement) ?? "", R = ((At = g.attributes) == null ? void 0 : At.device_class) === "pm25" && C === Oc && Oe(g.state), z = Number(g.state), Z = R ? dd(z) : void 0, pt = ((Gt = Tt.aqHistory) == null ? void 0 : Gt.entityId) === g.entity_id ? Tt.aqHistory.points : void 0, tt = (Ut) => Math.min(100, Math.max(0, Ut / ld * 100));
    let gt;
    if (pt && pt.length > 1) gt = $c(pt, (Ut) => (Me(Ut, p.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if (Z) {
      let Ut = 0;
      const Dt = Vp.map(([$t, jt]) => {
        const _t = tt(Math.min(jt, ld)), de = Fc[$t] + " " + Ut + "% " + _t + "%";
        return Ut = _t, de;
      });
      gt = '<div class="wbScale" role="meter" aria-label="' + Ot(Et.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ld + '" aria-valuenow="' + z + '" style="background:linear-gradient(to right, ' + Dt.join(", ") + ')"><i style="left:' + tt(z) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ld + " " + Oc + "</span></div>";
    } else gt = '<span class="wbGraphNote"><span>' + Ot(ki(p, g)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Si(y) + '</span><span class="wbText"><span class="wbName">' + Ot(gr(p, g)) + '</span><span class="wbSub">' + Ot(ki(p, g)) + (Z ? " · " + Ot(Et.aqLevel[Z]) : "") + '</span></span><button class="wbBack" title="' + Ot(Et.back) + '" data-wb="aq-close">' + Si(Pe.back) + '</button></div><div class="wbGraph">' + gt + "</div></div></div>";
  }
  const Le = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Bo = (p) => p <= 50 ? "Good" : p <= 100 ? "Moderate" : p <= 150 ? "Unhealthy for some" : p <= 200 ? "Unhealthy" : p <= 300 ? "Very unhealthy" : "Hazardous";
  function Ve(p) {
    const g = /* @__PURE__ */ new Map();
    return Object.values(p.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && xd.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && Xr(y) && qs(p, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      g.has(y.attributes.device_class) || g.set(y.attributes.device_class, y);
    }), xd.map((y) => g.get(y)).filter(Boolean);
  }
  const Jo = (p) => Object.values(p.states || {}).filter((g) => {
    var y, C;
    return g.entity_id.startsWith("sensor.") && Xr(g) && qs(p, g.entity_id) && (((C = (y = p.entities) == null ? void 0 : y[g.entity_id]) == null ? void 0 : C.translation_key) ?? g.entity_id).toLowerCase().includes("pollen");
  }), _a = ["none", "very_low", "low", "moderate", "high", "very_high"], aa = (p) => Oe(p.state) ? Number(p.state) : _a.indexOf(String(p.state).toLowerCase().replace(/ /g, "_")), Ea = (p) => {
    const g = String(p).replace(/_/g, " ");
    return g[0].toUpperCase() + g.slice(1);
  }, Qr = (p, g, y) => {
    const C = y ? p === "aqi" ? g <= 50 ? "good" : g <= 100 ? "moderate" : "poor" : p === "pm25" ? dd(g) : null : null;
    return C === "good" || C === "fair" ? Et.advice.window : C === "moderate" || C === null ? Et.advice.fine : Et.advice.closed;
  }, ts = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Tr = (p) => ts[p <= 50 ? 0 : p <= 100 ? 1 : p <= 150 ? 2 : p <= 200 ? 3 : p <= 300 ? 4 : 5], Fn = "M43 43q1 8 0 10M77 42q1 8 -1 10", Ra = {
    good: [Fn, "M34 69Q61 98 86 67"],
    fair: [Fn, "M40 74Q61 89 81 72"],
    moderate: [Fn, "M41 79Q60 76 80 81"],
    poor: [Fn, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Ri = (p) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Ra[p][0] + '"></path><path d="' + Ra[p][1] + '"></path></svg>';
  function es(p) {
    const g = Ve(p), y = g[0];
    if (!y) return bn({ icon: Pe.airFilter, name: Et.airQuality, sub: Et.noAir, visual: oo("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, R = Number(y.state), z = Oe(y.state), Z = C === "aqi" && z ? Bo(R) : C === "pm25" && z ? Le[dd(R)] : ki(p, y), pt = z ? Me(Math.round(R), p.locale) : String(y.state), tt = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", gt = z && C === "aqi" ? Tr(R) : z && C === "pm25" ? dd(R) : null;
    return bn(gt ? {
      icon: Pe.airFilter,
      name: Et.airQuality,
      sub: Z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Fc[gt] + '">' + Ri(gt) + '<div class="wbAqBig"><span class="wbAqNum">' + Ot(pt) + "</span>" + (tt ? '<span class="wbAqUnit">' + Ot(tt) + "</span>" : "") + "</div></div>" + cd(oo(pt, tt)),
      callouts: [Qr(C, R, z), ...g.slice(1, 3).map((yt) => [gr(p, yt), ki(p, yt)])]
    } : {
      icon: Pe.airFilter,
      name: Et.airQuality,
      sub: Z,
      cls: "wbBase",
      zone: oo(pt, tt),
      callouts: [Qr(C, R, z), ...g.slice(1, 3).map((yt) => [gr(p, yt), ki(p, yt)])]
    });
  }
  const Je = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ln = (p) => {
    const g = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(p) ? Math.round(p) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: g }, (y, C) => {
      const [R, z] = Je[C % 3], Z = 10 + C * 7 % 9, pt = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + R + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Z + "s;animation-delay:-" + (C * 2.3 % Z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + pt.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % pt).toFixed(1) + 's">' + z + "</span></span></span>";
    }).join("") + "</div>";
  };
  function we(p) {
    const g = Jo(p).sort((R, z) => aa(z) - aa(R));
    if (!g.length) return bn({ icon: Pe.flower, name: Et.pollen, sub: Et.noPollen, visual: oo("–", ""), cls: "wbBase" });
    const y = g[0], C = (R) => Oe(R.state) ? ki(p, R) : Ea(R.state);
    return bn({
      icon: Pe.flower,
      name: Et.pollen,
      sub: gr(p, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: Ln(aa(y)) + oo(C(y), ""),
      callouts: g.slice(0, 3).map((R) => [gr(p, R), C(R)])
    });
  }
  function Qo(p) {
    const g = Date.now(), y = B("hourly").filter((z) => {
      const Z = new Date(z.datetime).getTime();
      return Z > g - Ne && Z < g + 12 * Ne;
    }), C = y.find((z) => (z.precipitation_probability ?? 0) >= 50 || (z.precipitation ?? 0) >= 0.2), R = C ? tn(Et.rainFrom, { time: en(new Date(Math.max(g, new Date(C.datetime).getTime())), p) }) : y.length ? Et.noRain12 : void 0;
    return bn({ icon: Pe.radar, name: Et.rainRadar, sub: R, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const ti = {
    current: Jr,
    hourly: Zt,
    sun: on,
    moon: Do,
    wind: fa,
    uv_index: Di,
    compared_to_average: Sr,
    humidity: rn,
    pressure: js,
    precipitation: Tn,
    visibility: Bi,
    air_quality: Cr,
    aq_tile: es,
    pollen_tile: we,
    radar_tile: Qo
  }, ei = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Ro = (p, g) => {
    var y;
    return g.toLocaleDateString((y = p.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, so = (p) => {
    const g = new Date(p);
    return g.setMinutes(g.getMinutes() - g.getTimezoneOffset()), g.toISOString().slice(0, 10);
  }, lo = () => {
    const p = K.range, g = Date.now();
    if (p.preset !== "custom") {
      const R = ei.find(([z]) => z === p.preset)[2];
      return [g - R * Pn, g];
    }
    const y = xr(/* @__PURE__ */ new Date(p.from + "T00:00")).getTime(), C = Math.min(g, xr(/* @__PURE__ */ new Date(p.to + "T00:00")).getTime() + Pn);
    return [Math.min(y, C - Ne), C];
  }, as = (p) => {
    const g = K.range;
    if (g.preset !== "custom") return ei.find(([R]) => R === g.preset)[1];
    const [y, C] = lo();
    return g.from === g.to ? Ro(p, new Date(y)) : Ro(p, new Date(y)) + " – " + Ro(p, new Date(C - 1));
  }, Kn = () => K.range.preset === "custom" ? K.range.from + "_" + K.range.to : K.range.preset, co = (p, g) => g - p <= 2 * Pn, ns = (p, g, y, C) => co(y, C) ? en(g, p) : Ro(p, g), Ni = (p, g = 60) => {
    const y = Math.max(1, Math.ceil(p.length / g));
    return p.filter((C, R) => R % y === 0 || R === p.length - 1);
  }, po = (p, g, y, C, R = !1) => p.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [g],
    minimal_response: R,
    no_attributes: R,
    significant_changes_only: !1
  }), sn = (p) => async (g, y, C, R) => {
    const z = ca(g, y, p);
    if (!z) return [];
    const Z = z.stateObj.entity_id, pt = await po(g, Z, C, R);
    return Ni(((pt == null ? void 0 : pt[Z]) ?? []).map((tt) => {
      var At;
      const gt = ((At = tt.a) == null ? void 0 : At[p]) ?? (Oe(tt.s) ? Number(tt.s) : void 0), yt = (tt.lu ?? tt.lc) * 1e3;
      return typeof gt == "number" && yt >= C && yt <= R ? { t: new Date(yt), value: gt } : null;
    }).filter(Boolean)).map((tt) => ({ label: ns(g, tt.t, C, R), value: tt.value }));
  }, Za = (p, g) => async (y, C, R, z) => {
    const Z = p(y);
    if (!Z) return [];
    const pt = Z.entity_id, tt = await po(y, pt, R, z, !0);
    return Ni(((tt == null ? void 0 : tt[pt]) ?? []).map((gt) => {
      const yt = g(gt.s), At = gt.lu * 1e3;
      return yt == null || !Number.isFinite(yt) || At < R || At > z ? null : { t: new Date(At), value: yt };
    }).filter(Boolean)).map((gt) => ({ label: ns(y, gt.t, R, z), value: gt.value }));
  }, Pi = (p, g) => async (y, C, R, z) => {
    const Z = kl(y);
    if (!Z) return [];
    const pt = [];
    if (co(R, z)) for (let tt = R; tt <= z; tt += Ne / 2) pt.push({ label: en(new Date(tt), y), value: p(new Date(tt), Z) });
    else for (let tt = z; tt >= R; tt -= Pn) {
      const gt = new Date(tt), yt = g(gt, Z, y);
      yt != null && pt.unshift({ label: Ro(y, gt), value: yt });
    }
    return Ni(pt);
  }, $n = (p) => Jo(p).sort((g, y) => aa(y) - aa(g))[0], On = (p, g, y) => {
    const C = ca(p, g, y);
    return C ? br(p, C.stateObj, y) : "";
  }, Ce = {
    current: { name: () => Et.modes.temperature, icon: () => Pe.sunny, load: sn("temperature"), fmt: (p, g, y) => $e(p, y), now: (p, g) => {
      var y;
      return $e(p, (y = ca(p, g, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Et.sun,
      icon: () => Pe.sunny,
      load: Pi((p, g) => Math.round(kd(p, g.lat, g.lon) / Mn), (p, g, y) => {
        const C = Fs(y, p);
        return C.rise && C.set ? Math.round((C.set - C.rise) / Ne * 10) / 10 : null;
      }),
      fmt: (p, g, y, C) => C ? Me(y, p.locale) + "°" : Me(y, p.locale) + " h",
      sub: (p) => p ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Et.moon,
      icon: () => Pe.night,
      load: Pi((p) => Math.round($d(p).fraction * 100), (p) => Math.round($d(p).fraction * 100)),
      fmt: (p, g, y) => Me(y, p.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Et.metrics.uv_index, icon: () => Pe.sunnyAlert, load: sn("uv_index"), fmt: (p, g, y) => Me(Math.round(y * 10) / 10, p.locale), now: (p, g) => {
      const y = ca(p, g, "uv_index");
      return y ? Me(Number(y.value), p.locale) : "";
    } },
    humidity: { name: () => Et.metrics.humidity, icon: () => Pe.waterPercent, load: sn("humidity"), fmt: (p, g, y) => Me(Math.round(y), p.locale) + "%", now: (p, g) => {
      const y = ca(p, g, "humidity");
      return y ? Me(Math.round(Number(y.value)), p.locale) + "%" : "";
    } },
    pressure: { name: () => Et.metrics.pressure, icon: () => Pe.gauge, load: sn("pressure"), fmt: (p, g, y) => Me(Math.round(y), p.locale) + " " + On(p, g, "pressure"), now: (p, g) => {
      const y = ca(p, g, "pressure");
      return y ? Me(Math.round(Number(y.value)), p.locale) + " " + On(p, g, "pressure") : "";
    } },
    wind: { name: () => Et.wind, icon: () => Pe.windy, load: sn("wind_speed"), fmt: (p, g, y) => Me(Math.round(y), p.locale) + " " + On(p, g, "wind_speed"), now: (p, g) => {
      const y = ca(p, g, "wind_speed");
      return y ? Me(Math.round(Number(y.value)), p.locale) + " " + On(p, g, "wind_speed") : "";
    } },
    visibility: { name: () => Et.metrics.visibility, icon: () => Pe.eyeOutline, load: sn("visibility"), fmt: (p, g, y) => Me(Math.round(y * 10) / 10, p.locale) + " " + On(p, g, "visibility"), now: (p, g) => {
      const y = ca(p, g, "visibility");
      return y ? Me(Number(y.value), p.locale) + " " + On(p, g, "visibility") : "";
    } },
    aq_tile: {
      name: (p) => Ve(p)[0] ? gr(p, Ve(p)[0]) : Et.airQuality,
      icon: () => Pe.airFilter,
      load: Za((p) => Ve(p)[0], (p) => Oe(p) ? Number(p) : null),
      fmt: (p, g, y) => {
        var z, Z;
        const C = Ve(p)[0], R = (z = C == null ? void 0 : C.attributes) == null ? void 0 : z.device_class;
        return Me(Math.round(y * 10) / 10, p.locale) + (R === "aqi" ? " AQI" : (Z = C == null ? void 0 : C.attributes) != null && Z.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (p) => {
        const g = Ve(p)[0];
        return g ? ki(p, g) : "";
      }
    },
    pollen_tile: {
      name: (p) => $n(p) ? gr(p, $n(p)) : Et.pollen,
      icon: () => Pe.flower,
      load: Za($n, (p) => {
        const g = aa({ state: p });
        return g < 0 ? null : g;
      }),
      fmt: (p, g, y) => Ea(_a[Math.round(y)] || ""),
      now: (p) => {
        const g = $n(p);
        return g ? Ea(g.state) : "";
      }
    }
  }, ln = {};
  let ha = null;
  async function Ii(p) {
    var Z;
    const g = s == null ? void 0 : s();
    if (!g || !Ce[p]) return;
    const y = p + "|" + Kn(), [C, R] = lo();
    if (ln[y] && Date.now() - ln[y].at < 5 * Ya) return;
    ln[y] = { at: Date.now(), points: null };
    try {
      ln[y].points = await Ce[p].load(g, La(g), C, R);
    } catch {
      ln[y].points = [];
    }
    sa(!0), ha === p && K.graph === p && (ha = null, Rc(nt[p].el.querySelector(".wbGraphCard")));
    const z = K.graph === p && ((Z = nt[p]) == null ? void 0 : Z.el.querySelector(".wbGraph .wbChart"));
    z && Wp(z, z.querySelector(".wbLine"), z.querySelectorAll(".wbArea"));
  }
  function zs(p, g) {
    const y = K.range, C = so(Date.now()), [R, z] = lo(), Z = y.pickFrom || so(R), pt = y.pickTo || so(z - 1);
    return '<div class="wbRangePick' + (g ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + ei.map(([tt, gt]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === tt) + '" data-wb="graph-preset" data-range="' + tt + '" data-wb-focus="graph-preset-' + tt + '">' + Ot(gt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Z + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + pt + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function os(p, g, y) {
    var Gt;
    const C = Ce[y], [R, z] = lo(), Z = co(R, z), pt = (Gt = ln[y + "|" + Kn()]) == null ? void 0 : Gt.points, tt = nt[y].el, gt = Math.max(120, tt.clientWidth - 2 * 18 - 32), yt = Math.max(40, tt.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), At = pt ? pt.length > 1 ? $c(pt, (Ut) => C.fmt(p, g, Ut, Z), yt, gt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Gp(C.icon(p)) + '</div><div class="wbText"><span class="wbName">' + Ot(C.name(p)) + '</span><span class="wbSub">' + Ot(C.sub ? C.sub(Z) : C.now ? C.now(p, g) : "") + '</span></div><button class="wbBack" title="' + Ot(Et.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + Si(Pe.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!K.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Si(Pe.calendar) + "<span>" + Ot(as(p)) + "</span>" + Si(Pe.chevronDown) + '</button><div class="wbGraph">' + At + "</div></div>" + (K.picking ? zs(p, tt.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function sa(p) {
    var At, Gt, Ut;
    const g = s == null ? void 0 : s();
    if (!g || $) return;
    const y = La(g);
    xt(g, y), Tt.lastFetch || le();
    const C = It(g), R = Zc(g), z = Xd(g), Z = [
      ...y.map((Dt) => g.states[Dt]),
      g.states["sun.sun"],
      R && g.states[R],
      z && g.states[z],
      ...C.air.map((Dt) => g.states[Dt]),
      ...C.pollen.map((Dt) => g.states[Dt]),
      ...O.some((Dt) => P.includes(Dt)) ? [...Ve(g), ...Jo(g)] : [],
      g.locale,
      g.config,
      g.entities,
      Math.floor(Date.now() / Ya)
    ];
    if (!p && W && Z.length === W.length && Z.every((Dt, $t) => Dt === W[$t])) return;
    W = Z;
    const pt = E.getRootNode(), tt = pt.activeElement || document.activeElement;
    for (const Dt of O) {
      const $t = nt[Dt];
      let jt = "";
      try {
        jt = (K.graph === Dt ? os(g, y, Dt) : ti[Dt](g, y)) || "";
      } catch {
        jt = "";
      }
      if (jt === $t.html) continue;
      const _t = tt && $t.el.contains(tt) ? (At = tt.dataset) == null ? void 0 : At.wbFocus : void 0, de = $t.el.querySelector(".wbStripScroll"), Xt = de ? de.scrollLeft : null;
      $t.html = jt, $t.el.hidden = !jt, $t.el.innerHTML = jt;
      const Ee = $t.el.querySelector(".wbStripScroll");
      Ee && Xt != null ? Ee.scrollTo({ left: Xt }) : Ee != null && Ee.dataset.start && Ee.scrollTo({ left: Number(Ee.dataset.start) * Ee.clientWidth / Number(Ee.dataset.span) }), _t && !it && ((Gt = $t.el.querySelector('[data-wb-focus="' + _t + '"]')) == null || Gt.focus());
    }
    _o(), it && ((Ut = E.querySelector('[data-wb-focus="' + it + '"]')) == null || Ut.focus({ preventScroll: !0 }), it = null);
    let gt = !1, yt = !1;
    for (const Dt of O) {
      const $t = nt[Dt], jt = !$t.el.hidden, _t = V[Dt] === "wide" || st.includes(Dt), de = O.indexOf(Dt) >= O.indexOf("moon"), Xt = jt && (de && _t && !gt || !_t && !yt);
      Xt && _t && (gt = !0), Xt && !_t && (yt = !0), $t.el.toggleAttribute("data-break", Xt);
    }
    Oi(performance.now());
  }
  function uo() {
    wt || $ || (wt = !0, queueMicrotask(() => {
      wt = !1, sa(!0);
    }));
  }
  function is() {
    const p = getComputedStyle(E), g = (Z) => p.getPropertyValue(Z).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Z, pt]) => {
      g(pt) && (y[Z] = g(pt));
    });
    const C = g("--color-text-primary") || "#f1f1f1", R = g("--color-bg-card") || "#222222", z = !!E.closest(".light");
    return { colors: { ...Sn, ...y }, ink: z ? C : R, paper: z ? R : C };
  }
  const fo = (p, g) => {
    var y;
    p.width !== g.w && (p.width = g.w), p.height !== g.h && (p.height = g.h), (y = p.getContext("2d")) == null || y.putImageData(new ImageData(g.data, g.w, g.h), 0, 0);
  }, Fa = () => m && !nh();
  function Hi(p, g) {
    E.querySelectorAll("canvas[data-wb-strip]").forEach((y) => Fi(y, ot[y.dataset.wbStrip], p, g));
  }
  function Fi(p, g, y, C) {
    if (!g || !p.getClientRects().length) return;
    const R = p.clientWidth, z = p.clientHeight;
    if (!R || !z) return;
    const Z = { width: R, height: z, columns: g.columns || Nc, colors: C.colors, clock: y, ambient: Fa(), seed: g.seed, soft: 1.5 };
    if (c === "smooth") {
      const pt = Math.min(2, window.devicePixelRatio || 1), tt = Math.round(R * pt), gt = Math.round(z * pt);
      p.width !== tt && (p.width = tt), p.height !== gt && (p.height = gt);
      const yt = p.getContext("2d");
      if (!yt) return;
      yt.setTransform(pt, 0, 0, pt, 0, 0), tf(yt, g.segs, Z);
    } else fo(p, Qu(g.segs, { ...Z, px: 2, oneBit: c === "onebit", ink: C.ink, paper: C.paper }));
  }
  function Oi(p) {
    if ($) return;
    const g = is();
    if (c !== "smooth") {
      const y = Fa();
      E.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && fo(C, Sp(dc(C.dataset.wbWx, g.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: g.colors, ink: g.ink, paper: g.paper, clock: p, idle: y }));
      });
    }
    E.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, R = y.clientHeight, z = Number(y.dataset.wbSea), Z = C + "x" + R + ":" + z + ":" + g.colors.skyClearDay;
      !C || !R || !(z > 0) || y.dataset.painted === Z || (y.dataset.painted = Z, fo(y, gf(C, R, z, g.colors)));
    }), Hi(p, g);
  }
  function Oa(p) {
    if (ft = 0, !($ || !Fa())) {
      if (!document.hidden)
        if (c === "smooth") Hi(p, is());
        else {
          const g = Math.floor(p / 100);
          g !== ht && (ht = g, Oi(p));
        }
      ft = requestAnimationFrame(Oa);
    }
  }
  function qn() {
    E.classList.toggle("wbMotion", Fa()), !ft && !$ && Fa() && (ft = requestAnimationFrame(Oa));
  }
  function qi(p) {
    var y, C, R, z, Z, pt, tt;
    const g = (C = (y = p.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!g || !E.contains(g)) {
      const gt = (z = (R = p.target).closest) == null ? void 0 : z.call(R, ".wbItem"), yt = gt == null ? void 0 : gt.dataset.card;
      if (!gt || !E.contains(gt) || !Ce[yt] || K.graph === yt || E.closest(".tfEditing") || gt.offsetHeight < 200 || yt === "current" && k) return;
      K.graph = yt, it = "graph-close", sa(!0), (Z = ln[yt + "|" + Kn()]) != null && Z.points ? Rc(nt[yt].el.querySelector(".wbGraphCard")) : ha = yt, Ii(yt);
      return;
    }
    switch (g.dataset.wb) {
      case "day": {
        K.openDay = Number(g.dataset.index), K.opener = g.dataset.wbFocus, it = "back-day";
        const gt = pa()[K.openDay], yt = !Tt.todayHistory || Tt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Tt.todayHistory.fetched > If;
        gt && Hs(new Date(gt.datetime), /* @__PURE__ */ new Date()) && yt && ia();
        break;
      }
      case "close-day":
        K.openDay = void 0, it = K.opener, K.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        K.dayMode = g.dataset.mode;
        break;
      case "hourly-mode":
        K.hourlyMode = g.dataset.mode;
        break;
      case "hourly-view":
        K.hourlyView = g.dataset.view;
        try {
          localStorage.setItem(et, K.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const gt = E.querySelector(".wbStripScroll");
        gt && gt.scrollTo({ left: Number(g.dataset.hours) * gt.clientWidth / Number(gt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        K.aq = g.dataset.entity, Se(K.aq);
        break;
      case "aq-close":
        K.aq = void 0;
        break;
      case "graph-close":
        K.graph = void 0, K.picking = !1;
        break;
      case "graph-pick":
        K.picking = !K.picking, it = K.picking ? "graph-preset-" + (K.range.preset === "custom" ? "day" : K.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        K.range = { preset: g.dataset.range }, K.picking = !1, it = "graph-pick", sa(!0), Ii(K.graph);
        return;
      case "graph-apply": {
        let gt = K.range.pickFrom || ((pt = E.querySelector("[data-range-from]")) == null ? void 0 : pt.value), yt = K.range.pickTo || ((tt = E.querySelector("[data-range-to]")) == null ? void 0 : tt.value);
        if (!gt || !yt) return;
        gt > yt && ([gt, yt] = [yt, gt]), K.range = { preset: "custom", from: gt, to: yt }, K.picking = !1, it = "graph-pick", sa(!0), Ii(K.graph);
        return;
      }
      default:
        return;
    }
    sa(!0);
  }
  function ai(p) {
    var g, y, C, R, z, Z;
    p.key === "Escape" && K.openDay !== void 0 && ((y = (g = p.target).closest) != null && y.call(g, '[data-wb-open="day"]')) ? (K.openDay = void 0, it = K.opener, K.opener = void 0, sa(!0)) : p.key === "Escape" && K.picking && ((R = (C = p.target).closest) != null && R.call(C, ".wbGraphCard")) ? (K.picking = !1, it = "graph-pick", sa(!0)) : p.key === "Escape" && K.graph && ((Z = (z = p.target).closest) != null && Z.call(z, ".wbGraphCard")) && (K.graph = void 0, sa(!0));
  }
  let qa = null;
  function Wi(p) {
    var y, C;
    const g = (C = (y = p.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !g || p.button !== 0 || (qa = { startX: p.pageX, left: g.scrollLeft, moved: !1 }, g.classList.add("wbHeld"), window.addEventListener("mousemove", ji), window.addEventListener("mouseup", No, { once: !0 }));
  }
  function ji(p) {
    const g = E.querySelector(".wbStripScroll");
    if (!qa || !g) return;
    const y = p.pageX - qa.startX;
    !qa.moved && Math.abs(y) > 1 && (qa.moved = !0, g.classList.add("wbDragging")), g.scrollLeft = qa.left - y;
  }
  function No() {
    qa = null, window.removeEventListener("mousemove", ji);
    const p = E.querySelector(".wbStripScroll");
    if (!p) return;
    p.classList.remove("wbDragging", "wbHeld");
    const g = [...p.querySelectorAll(".wbSnap")];
    if (g.length) {
      const y = g.reduce((C, R) => Math.abs(R.offsetLeft - p.scrollLeft) < Math.abs(C.offsetLeft - p.scrollLeft) ? R : C);
      p.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const ni = (p) => {
    var y, C;
    const g = p.target;
    (y = g.matches) != null && y.call(g, "[data-range-from]") ? K.range.pickFrom = g.value : (C = g.matches) != null && C.call(g, "[data-range-to]") && (K.range.pickTo = g.value);
  };
  E.addEventListener("change", ni), E.addEventListener("click", qi), E.addEventListener("keydown", ai), E.addEventListener("mousedown", Wi);
  const rs = 64, Po = 30;
  let An = null, me = 0;
  const Xn = () => {
    me = 0, E.querySelectorAll(".wbPollen .wbPush").forEach((p) => {
      let g = 0, y = 0;
      if (An) {
        const C = p.parentElement.getBoundingClientRect(), R = C.left + C.width / 2 - An.x, z = C.top + C.height / 2 - An.y, Z = Math.hypot(R, z) || 1;
        if (Z < rs) {
          const pt = (1 - Z / rs) * Po;
          g = R / Z * pt, y = z / Z * pt;
        }
      }
      p.style.transform = g || y ? "translate(" + g.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), An && (me = requestAnimationFrame(Xn));
  }, Io = (p) => {
    var y, C;
    if (!((C = (y = p.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || ja != null && ja.matches) {
      An && (An = null, me || (me = requestAnimationFrame(Xn)));
      return;
    }
    An = { x: p.clientX, y: p.clientY }, me || (me = requestAnimationFrame(Xn));
  }, oi = () => {
    An = null, me || (me = requestAnimationFrame(Xn));
  };
  E.addEventListener("pointermove", Io), E.addEventListener("pointerleave", oi);
  const Wa = typeof ResizeObserver == "function" ? new ResizeObserver(() => Oi(performance.now())) : null;
  Wa == null || Wa.observe(E);
  const ja = (ho = window.matchMedia) == null ? void 0 : ho.call(window, "(prefers-reduced-motion: reduce)"), qe = () => {
    qn(), Oi(performance.now());
  };
  (Lr = ja == null ? void 0 : ja.addEventListener) == null || Lr.call(ja, "change", qe);
  const Wn = [
    setInterval(() => {
      at = /* @__PURE__ */ new Date(), sa(!0);
    }, Gf),
    setInterval(() => {
      ct = /* @__PURE__ */ new Date(), sa(!0);
    }, Uf),
    setInterval(le, jf)
  ];
  return sa(!0), qn(), {
    update() {
      sa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      sa(!0);
    },
    setStyle(p) {
      !p || p === c || (c = p, E.dataset.style = c, sa(!0), qn());
    },
    destroy() {
      var p;
      cancelAnimationFrame(me), E.removeEventListener("pointermove", Io), E.removeEventListener("pointerleave", oi), $ = !0, Wn.forEach(clearInterval), ft && cancelAnimationFrame(ft), ft = 0, Wa == null || Wa.disconnect(), (p = ja == null ? void 0 : ja.removeEventListener) == null || p.call(ja, "change", qe), No(), E.removeEventListener("click", qi), E.removeEventListener("change", ni), E.removeEventListener("keydown", ai), E.removeEventListener("mousedown", Wi), ["daily", "hourly"].forEach(q), E.remove();
    }
  };
}
const Ml = "#E1E1E1", Qc = "#F7F4F0", Jd = "#03a9f4", Te = 14, Be = 172;
let Rh = 0;
const Qe = (n) => Math.round(n * 100) / 100, Xo = (n, s, o) => Math.max(s, Math.min(o, n)), Li = (n, s, o, c, m, x) => '<rect x="' + Qe(n) + '" y="' + Qe(s) + '" width="' + Qe(o) + '" height="' + Qe(c) + '" fill="' + m + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", Qd = (n) => n.map((s, o) => (o ? "L" : "M") + Qe(s[0]) + " " + Qe(s[1])).join("");
function tc(n) {
  const s = (n == null ? void 0 : n.attributes) || {};
  return s.device_class === "curtain" ? "curtain" : s.device_class === "blind" || s.current_tilt_position != null ? "venetian" : "blind";
}
const vr = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Nh(n) {
  const s = n < 2 ? n + 24 : n;
  let o = vr[0], c = vr[vr.length - 1];
  for (let L = 0; L < vr.length - 1; L++) if (s >= vr[L][0] && s <= vr[L + 1][0]) {
    o = vr[L], c = vr[L + 1];
    break;
  }
  const m = (s - o[0]) / (c[0] - o[0]), x = m * m * (3 - 2 * m), k = (L, S) => {
    const E = parseInt(L.slice(1), 16), j = parseInt(S.slice(1), 16);
    return "#" + [16, 8, 0].map((P) => Math.round((E >> P & 255) + ((j >> P & 255) - (E >> P & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(o[1][0], c[1][0]), bot: k(o[1][1], c[1][1]), warm: k(o[1][2], c[1][2]), cool: k(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * x, t: s };
}
function Ph(n) {
  const s = parseInt(n.slice(1), 16), o = (s >> 16 & 255) / 255, c = (s >> 8 & 255) / 255, m = (s & 255) / 255, x = Math.max(o, c, m), k = Math.min(o, c, m);
  let L = 0, S = 0;
  const E = (x + k) / 2;
  if (x !== k) {
    const j = x - k;
    S = E > 0.5 ? j / (2 - x - k) : j / (x + k), L = (x === o ? (c - m) / j + (c < m ? 6 : 0) : x === c ? (m - o) / j + 2 : (o - c) / j + 4) / 6;
  }
  return [L * 360, S * 100, E * 100];
}
function nu(n, s, o) {
  s = Xo(s, 0, 100) / 100, o = Xo(o, 0, 100) / 100;
  const c = (k) => (k + n / 30) % 12, m = s * Math.min(o, 1 - o), x = (k) => o - m * Math.max(-1, Math.min(c(k) - 3, Math.min(9 - c(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [ou, iu, ru] = Ph(Ml), tp = nu(ou, iu, Math.max(6, ru - 14)), Ih = nu(ou, iu, Math.min(96, ru + 16));
function Hh(n, s, o, c, m) {
  const x = Be / 2, k = Be * 0.12, L = x - (x - k) * n, S = (st) => st ** 1.3, E = Xo(o, -1.5, 1.5), j = (st) => -(Math.abs(E) * 4.6 * st ** 1.5) * Math.sign(E), P = n * 1.4, O = (st, nt) => {
    const $ = Math.min(4.8, Math.abs(o) * 2.6) * (nt ? 1 : -1) * Math.sign(o || 1), W = nt ? st + L : st, ft = nt ? st : st + L, ht = (Tt) => W + j(Tt) + $ * Math.sin(Tt * Math.PI * 1.2 + c) * S(Tt) * 1.4 + P * Math.sin(Tt * Math.PI * 2 + c * 0.6) * S(Tt) * (nt ? 1 : -1), wt = [[ft, Te]];
    for (let Tt = 0; Tt <= 12; Tt++) wt.push([ht(Tt / 12), Te + Be * Tt / 12]);
    wt.push([ft, Te + Be]);
    let it = '<path d="' + Qd(wt) + 'Z" fill="' + Ml + '"/>';
    if (m) return it;
    const et = 1.35 + ((nt ? o > 0 : o < 0) ? 0.35 : 0), _ = (Tt) => {
      const at = Tt / 7, ct = nt ? 1 - at : at, ot = (1 - ct) ** 1.3, zt = st + L * at;
      return Array.from({ length: 13 }, (T, B) => {
        const D = B / 12;
        return [zt + j(D) * ot + $ * et * Math.sin(D * Math.PI * 1.2 + c - ct * 3.2) * S(D) * 1.4 * ot + P * 1.6 * Math.sin(D * Math.PI * 2 + c * 0.6 - ct * 2.5) * S(D) * n * (0.4 + 0.6 * ot), Te + Be * D];
      });
    }, K = [1, 2, 3, 4, 5, 6].map(_);
    for (let Tt = 0; Tt < 6; Tt += 2) it += '<path d="' + Qd(K[Tt]) + Qd(K[Tt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return it;
  }, V = x - (x - k) * s;
  return { body: O(Te, !0) + O(Te + Be - L, !1), rails: [{ x: Te + V - 4, y: Te, w: 4, h: Be }, { x: Te + Be - V, y: Te, w: 4, h: Be }], head: 6.4 };
}
function Fh(n, s, o) {
  const c = Be * (1 - n);
  let m = "";
  if (c > 1 && (m += Li(Te, Te, Be, c, Ml), !o))
    for (let x = 1; x < 7; x += 2) m += Li(Te + Be * x / 7, Te, Be / 7, c, "#fff");
  return { body: m, rails: [{ x: Te, y: Te + Be * (1 - s) - 7, w: Be, h: 11 }], head: 10.4 };
}
function Oh(n, s, o, c) {
  const m = 9 - 7 * (o / 100), x = Te + Be * (1 - n), k = Math.ceil(Be / 10) + 1, L = Te + m / 2, S = (Te + Be - m / 2 - L) / (k - 1), E = 0.8, j = 0.6, P = Array.from({ length: k }, (st, nt) => Math.max(L + nt * j, Math.min(L + nt * S, x - m / 2 - (k - 1 - nt) * j))), O = P.slice(0, -1).map((st, nt) => Xo((P[nt + 1] - st - j) / (S - j), 0, 1));
  O.push(O[k - 2]);
  let V = "";
  return P.forEach((st, nt) => {
    const $ = E + (m - E) * O[nt], W = Math.max(0.5, $ / 2), ft = Math.max(0.4, $ * 0.114);
    V += Li(Te, st - W, Be, Math.max(1, $), Ml), !c && $ > 2.2 && (V += Li(Te, st + W - ft, Be, ft, tp) + Li(Te, st - W, Be, ft * 0.55, Ih, 0.75));
  }), c || [0.22, 0.78].forEach((st) => {
    V += Li(Te + Be * st - 0.7, Te, 1.4, Math.max(0, P[k - 1] + 1 - Te), tp, 0.85);
  }), { body: V, rails: [{ x: Te, y: Te + Be * (1 - s) - 8, w: Be, h: 8 }], head: 8.8 };
}
const ep = (n, s, o, c, m, x, k) => n === "curtain" ? Hh(s, o, m, x, k) : n === "venetian" ? Oh(s, o, c, k) : Fh(s, o, k);
function qh(n, s) {
  let o = "", c = "";
  return s.forEach((m) => {
    const x = m.w > m.h, k = Xo(x ? Te + Be / 2 : m.x + m.w / 2, 17, 183), L = Xo(x ? m.y + m.h / 2 : Te + Be / 2, 17, 183);
    o += x ? Li(Te, Xo(m.y + m.h / 2, Te, Te + Be) - 1, Be, 2, Jd) : Li(Xo(m.x + m.w / 2, Te, Te + Be) - 1, Te, 2, Be, Jd);
    const S = x ? "M" + Qe(k - 4) + " " + Qe(L - 3) + "l4 -3l4 3M" + Qe(k - 4) + " " + Qe(L + 3) + "l4 3l4 -3" : "M" + Qe(k - 3) + " " + Qe(L - 4) + "l-3 4l3 4M" + Qe(k + 3) + " " + Qe(L - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Qe(k) + '" cy="' + Qe(L) + '" r="11" fill="' + Jd + '" filter="url(#' + n + 's)"/><path d="' + S + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Wh(n, s) {
  const o = /* @__PURE__ */ new Date(), c = Nh(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), x = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, k = ep(s.kind, s.pos / 100, s.bar / 100, s.tilt, s.vel, s.ph, !1), L = s.ghostAlpha > 4e-3 && s.ghost != null ? ep(s.kind, s.ghost / 100, s.ghost / 100, s.tilt, 0, 0, !0).body : "", S = s.grip > 4e-3 ? qh(n, k.rails) : null, E = (j) => Li(Te, Te, Be, Be, j);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Qe(m) + '%" cy="' + Qe(x) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Qe(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Qe(100 - m * 0.8) + '%" cy="' + Qe(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Qe(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Qc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + E("url(#" + n + "l)") + E("url(#" + n + "w)") + E("url(#" + n + "k)") + (L ? '<g opacity="' + Qe(s.ghostAlpha) + '">' + L + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + Ml + '" filter="url(#' + n + 's)"/></g>' + (S ? '<g clip-path="url(#' + n + 'c)" opacity="' + Qe(s.grip) + '">' + S.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Qc + '" stroke-width="3"/>' + (S ? '<g opacity="' + Qe(s.grip) + '">' + S.knobs + "</g>" : "") + "</svg>";
}
function jh({ onMove: n, onSet: s }) {
  var it;
  const o = "cv" + ++Rh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (it = window.matchMedia) == null ? void 0 : it.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, S = !1, E = !1, j = null, P = 0, O = 0;
  const V = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", st = () => j || S || E || x.moving || x.target != null ? 1 : m ? performance.now() < O ? 1 : 0.4 : 0, nt = () => {
    c.innerHTML = Wh(o, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function $(et) {
    L = 0;
    const _ = k.last ? Math.min(0.064, (et - k.last) / 1e3) : 1 / 60, K = _ * 60;
    k.last = et;
    const Tt = x.pos - k.pos, at = k.pos;
    k.pos += Math.sign(Tt) * Math.min(Math.abs(Tt), Math.max(10.5, Math.abs(Tt) * 1.4) * _), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - at) / K * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== at || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * K);
    const ct = x.tilt - k.tilt;
    k.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * _);
    const ot = st();
    k.grip += (ot - k.grip) * Math.min(1, _ * (ot > k.grip ? 11 : 3.5)), Math.abs(ot - k.grip) < 0.01 && (k.grip = ot);
    const zt = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (zt - k.ghost) * Math.min(1, _ * (zt > k.ghost ? 16 : 3)), Math.abs(zt - k.ghost) < 4e-3 && (k.ghost = zt), nt(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== ot || k.ghost !== zt ? L = requestAnimationFrame($) : k.last = 0;
  }
  const W = () => {
    x && !L && (L = requestAnimationFrame($));
  }, ft = setInterval(() => {
    x && !L && nt();
  }, 60 * 1e3), ht = (et) => {
    const _ = c.getBoundingClientRect();
    return V() === "x" ? (et.clientX - _.left) / _.width : (et.clientY - _.top) / _.height;
  };
  c.addEventListener("pointerdown", (et) => {
    var Tt;
    if (!(x != null && x.canSet) || et.button > 0) return;
    et.preventDefault(), (Tt = c.setPointerCapture) == null || Tt.call(c, et.pointerId);
    const _ = x.target ?? x.pos, K = c.getBoundingClientRect();
    j = { p0: ht(et), from: _, x0: et.clientX, value: null, side: null }, x.kind === "curtain" && _ > 0 && (j.side = (et.clientX - K.left) / K.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (et) => {
    if (!j) return;
    let _;
    if (x.kind === "curtain") {
      if (!j.side) {
        const Tt = et.clientX - j.x0;
        if (Math.abs(Tt) < 4) return;
        j.side = Tt < 0 ? "L" : "R";
      }
      const K = (Be / 2 - Be * 0.12) / 200;
      _ = j.from + (j.side === "L" ? -1 : 1) * ((ht(et) - j.p0) / K) * 100;
    } else _ = j.from - (ht(et) - j.p0) / (Be / 200) * 100;
    j.value = Xo(_, 0, 100), n(j.value);
  });
  const wt = () => {
    if (!j) return;
    const et = j.value;
    j = null, et != null && s(Math.round(et)), W();
  };
  return c.addEventListener("pointerup", wt), c.addEventListener("pointercancel", wt), c.addEventListener("lostpointercapture", wt), c.addEventListener("pointerenter", () => {
    S = !0, W();
  }), c.addEventListener("pointerleave", () => {
    S = !1, W();
  }), c.addEventListener("focus", () => {
    E = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    E = !1, W();
  }), c.addEventListener("keydown", (et) => {
    if (!(x != null && x.canSet)) return;
    const _ = Math.round(x.target ?? x.pos), K = et.shiftKey ? 10 : 1, Tt = { ArrowUp: _ + K, ArrowRight: _ + K, ArrowDown: _ - K, ArrowLeft: _ - K, PageUp: _ + 25, PageDown: _ - 25, Home: 0, End: 100 }[et.key];
    if (Tt == null) return;
    et.preventDefault();
    const at = Xo(Tt, 0, 100);
    n(at), clearTimeout(P), P = setTimeout(() => s(at), 500);
  }), {
    el: c,
    update(et) {
      const _ = !x;
      x = et, _ && (k.pos = x.pos, k.tilt = x.tilt, O = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", V() === "x"), c.classList.toggle("y", V() === "y"), x.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), c.setAttribute("aria-orientation", V() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), c.setAttribute("aria-valuetext", x.text), W();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(ft), clearTimeout(P), c.remove();
    }
  };
}
const ap = "move-assistant-density", Ko = {
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
}, rt = (n) => String(n ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]), ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', np = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', pd = {
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
}, up = "move_assistant_house", fp = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], hp = "move-assistant-house-look", Jh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Qh = [["popup", "Popup"], ["sheet", "Sheet"]], tm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], em = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], am = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], nc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', om = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', mp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', su = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((s) => '<path d="' + s + '"/>').join("") + "</svg>", bp = su(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), im = su(["M20 6L9 17L4 12"]), $o = (n, s = "") => '<span class="tfAreaGlyph" data-icon-for="' + rt(n || "") + '"' + (s ? ' data-icon-name="' + rt(s) + '"' : "") + "></span>", rm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', sm = 1, lm = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], wp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ud = ["door", "window", "garage_door", "opening"], xp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, fd = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], dm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], cm = 10, pm = 20, um = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, fm = ["living room", "bedroom", "office"];
function hm(n, { config: s, getHass: o }) {
  var Zr, bl, Rs;
  const c = (t) => n.getElementById(t), m = c("app"), k = String((s || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = Ko.get(ap) === "1", S = {};
  const E = (t) => {
    var a;
    return (a = o()) == null ? void 0 : a.callWS(t);
  }, j = (t, a, i) => E({ type: "call_service", domain: t, service: a, service_data: i }), P = n.querySelector("#appearancePane .toggleList");
  P && !c("densityToggle") && (P.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    L = !L, Ko.set(ap, L ? "1" : "0"), et();
  }));
  const O = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Kt(t).device_class === "power" && /^(W|kW)$/.test(Kt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], V = (t, a, i, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([u, v]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + u + '">' + v + "</button>").join("") + "</div>", st = (t, a, i, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + i + "</div>";
  function nt() {
    var X, lt;
    if (!k || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (dt, J) => '<div class="houseTab' + (dt === "look" ? " active" : "") + '" data-house-pane="' + dt + '"><section class="card">' + J + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([dt, J]) => '<button class="tab segBtn' + (dt === "look" ? " active" : "") + '" type="button" data-house-tab="' + dt + '">' + J + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    i("look", Jh.map(([dt, J]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + dt + '"><div class="tfCardTitle">' + J + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    i("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + i("sources", '<div class="toggleList">' + O.map(([dt, J, ut]) => st(J, ut, '<select class="settingsSelect" data-source="' + dt + '" aria-label="' + J + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(ac).map(([dt, J]) => st(J.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + dt + '" aria-label="' + J.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = (dt) => t.querySelector('[data-look-group="' + dt + '"]'), u = (dt) => dt == null ? void 0 : dt.closest(".toggleRow");
    [u(t.querySelector(".themeBtn"))].forEach((dt) => dt && l("look").appendChild(dt));
    const v = u(c("densityToggle"));
    v && (v.hidden = !0), [u(c("moreInfoChoice")), u(c("namesChoice"))].forEach((dt) => dt && l("house").appendChild(dt)), l("house").insertAdjacentHTML("beforeend", st("Lights", "How lights show on the house page.", V("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + st("Pad", "What the Dual Axis Controller’s pad sets on its tile.", V("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [u(c("hoursChoice")), u(c("wxStyleChoice"))].forEach((dt) => dt && l("weather").appendChild(dt));
    const h = c("housePane"), w = h.querySelector(".houseTabs"), M = w.querySelector(".rubberIndicator"), I = "homecore-light-view", N = (dt) => {
      h.classList.toggle("tfLightCardsOn", dt === "cards"), h.querySelectorAll("[data-light-view]").forEach((J) => J.setAttribute("aria-pressed", String(J.dataset.lightView === dt))), Ko.set(I, dt);
    };
    N(Ko.get(I) === "table" ? "table" : "cards"), h.querySelector(".tfLightView").addEventListener("click", (dt) => {
      const J = dt.target.closest("[data-light-view]");
      J && N(J.dataset.lightView);
    }), new ResizeObserver(() => W()).observe(h), (lt = (X = document.fonts) == null ? void 0 : X.ready) == null || lt.then(() => W());
    const F = (dt) => {
      const J = w.querySelector(".tab.active");
      M.style.transition = "none", dt ? jp(M, M.offsetLeft, M.offsetWidth, J.offsetLeft, J.offsetWidth) : (M.style.left = J.offsetLeft + "px", M.style.width = J.offsetWidth + "px");
    };
    new ResizeObserver(() => F(!1)).observe(w), h.addEventListener("click", (dt) => {
      const J = dt.target.closest("[data-house-tab]");
      if (J) {
        w.querySelectorAll(".tab").forEach((G) => G.classList.toggle("active", G === J)), h.querySelectorAll(".houseTab").forEach((G) => G.classList.toggle("active", G.dataset.housePane === J.dataset.houseTab)), J.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), F(!0), W();
        return;
      }
      const ut = dt.target.closest("[data-light-fav]");
      if (ut) {
        ii(ut.dataset.lightFav);
        return;
      }
      const U = dt.target.closest("[data-light-pick]");
      if (U) {
        const [G, Ht] = U.dataset.lightPick.split("|"), e = { ...It[G] };
        U.dataset.v ? e[Ht] = U.dataset.v : delete e[Ht], It[G] = e, fe(), [...Oa.keys()].filter((r) => r.endsWith(":" + Ht)).forEach((r) => Oa.delete(r)), je();
        return;
      }
      const St = dt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!St || St.disabled)) {
        if (St.dataset.lights && (It.lights = St.dataset.lights), St.dataset.dacPad && (It.dacPad = St.dataset.dacPad), (St.dataset.lights || St.dataset.dacPad) && (fe(), Oa.clear()), St.dataset.sumToggle) {
          const G = St.dataset.sumToggle, Ht = new Set(Q.hiddenSums || []);
          Ht.has(G) ? Ht.delete(G) : Ht.add(G), Q = { ...Q, hiddenSums: [...Ht] }, La();
        }
        je();
      }
    }), h.addEventListener("change", (dt) => {
      const J = dt.target;
      J.dataset.source && (Q = { ...Q, sources: { ...Q.sources || {}, [J.dataset.source]: J.value || void 0 } }, La());
      const ut = J.dataset.lightStyle || J.dataset.lightPad;
      if (ut) {
        const U = J.dataset.lightStyle ? "lightStyles" : "lightPads", St = { ...It[U] };
        J.value ? St[ut] = J.value : delete St[ut], It[U] = St, fe(), [...Oa.keys()].filter((G) => G.endsWith(":" + ut)).forEach((G) => Oa.delete(G));
      }
      je();
    });
  }
  function $() {
    var F, X;
    qi() && Oi();
    const t = c("housePane");
    if (!t) return;
    const a = !!customElements.get(Fa);
    t.querySelectorAll("[data-lights]").forEach((lt) => lt.setAttribute("aria-pressed", String(lt.dataset.lights === It.lights))), c("lightsRow").querySelector(".status").textContent = a || !qi() ? "How lights show on the house page." : Fi === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((lt) => lt.setAttribute("aria-pressed", String(lt.dataset.dacPad === It.dacPad))), c("dacPadRow").hidden = !qi();
    for (const lt of t.querySelectorAll("[data-source]")) {
      if (lt === n.activeElement) continue;
      const [dt] = O.find(([ut]) => ut === lt.dataset.source), J = Object.keys(S).filter(O.find(([ut]) => ut === dt)[3]).sort((ut, U) => Nt(ut).localeCompare(Nt(U)));
      lt.dataset.sig !== J.join(",") && (lt.innerHTML = '<option value="">Automatic</option>' + J.map((ut) => '<option value="' + rt(ut) + '">' + rt(Nt(ut)) + "</option>").join(""), lt.dataset.sig = J.join(",")), lt.value = J.includes((F = Q.sources) == null ? void 0 : F[dt]) ? Q.sources[dt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((lt) => {
      const dt = !(Q.hiddenSums || []).includes(lt.dataset.sumToggle);
      lt.classList.toggle("on", dt), lt.setAttribute("aria-checked", String(dt));
    });
    const i = c("lightRows"), l = c("lightCards"), u = n.activeElement, v = i != null && i.contains(u) || l != null && l.contains(u) ? u : null;
    if (!i || v != null && v.matches("select")) {
      W();
      return;
    }
    const h = new Set(Gt()), w = (lt, dt, J, ut) => '<option value="' + lt + '"' + (lt === J ? " selected" : "") + ">" + dt + "</option>", M = Object.keys(S).filter((lt) => lt.startsWith("light.")).sort((lt, dt) => !Se.get(lt) - !Se.get(dt) || (Se.get(lt) || "").localeCompare(Se.get(dt) || "") || Nt(lt).localeCompare(Nt(dt))).map((lt) => {
      const dt = It.lightStyles[lt] || "", J = It.lightPads[lt] || "", ut = h.has(lt), U = rt(Nt(lt));
      return "<tr><td><strong>" + U + "</strong></td><td>" + rt(Se.get(lt) || "—") + "</td><td>" + rt(Ve(lt)) + '</td><td class="metaSwitchCol"><button class="switch' + (ut ? " on" : "") + '" type="button" role="switch" aria-checked="' + ut + '" data-light-fav="' + rt(lt) + '" aria-label="' + U + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + rt(lt) + '" aria-label="' + U + ' tile">' + w("", "Default", dt) + w("tile", "HomeCore tile", dt) + w("dac", "Dual Axis Controller", dt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + rt(lt) + '" aria-label="' + U + ' pad"' + (qn(lt) ? "" : " disabled") + ">" + w("", "Default", J) + w("temperature", "Temperature", J) + w("colour", "Colour", J) + "</select></td></tr>";
    }).join(""), I = (lt, dt, J, ut, U) => '<div class="themeChoice" role="group" aria-label="' + J + '">' + ut.map(([St, G]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (St === U) + '" data-light-pick="' + lt + "|" + rt(dt) + '" data-v="' + St + '">' + G + "</button>").join("") + "</div>", N = Object.keys(S).filter((lt) => lt.startsWith("light.")).sort((lt, dt) => !Se.get(lt) - !Se.get(dt) || (Se.get(lt) || "").localeCompare(Se.get(dt) || "") || Nt(lt).localeCompare(Nt(dt))).map((lt) => {
      const dt = h.has(lt), J = rt(Nt(lt)), ut = [Se.get(lt), Ve(lt)].filter(Boolean).map(rt).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + J + '</strong><div class="status">' + ut + "</div></div></div>" + st("Favourite", "", '<button class="switch' + (dt ? " on" : "") + '" type="button" role="switch" aria-checked="' + dt + '" data-light-fav="' + rt(lt) + '" aria-label="' + J + ' is a favourite"></button>') + st("Tile", "", I("lightStyles", lt, J + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], It.lightStyles[lt] || "")) + (qn(lt) ? st("Pad", "", I("lightPads", lt, J + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], It.lightPads[lt] || "")) : "") + "</div>";
    }).join("");
    i.dataset.html !== M && (i.innerHTML = M, i.dataset.html = M), l.dataset.html !== N && (l.innerHTML = N, l.dataset.html = N), v != null && v.dataset.lightFav && ((X = (l.contains(v) ? l : i).querySelector('[data-light-fav="' + CSS.escape(v.dataset.lightFav) + '"]')) == null || X.focus({ preventScroll: !0 })), W();
  }
  function W() {
    var a, i, l;
    const t = c("housePane");
    if (t)
      for (const u of t.querySelectorAll(".themeChoice")) {
        const v = [...u.querySelectorAll("button")];
        let h = (a = u.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? u.nextElementSibling : null;
        if (!h) {
          h = document.createElement("select"), h.className = "settingsSelect tfChoiceList", h.setAttribute("aria-label", u.getAttribute("aria-label") || ((l = (i = u.closest(".toggleRow")) == null ? void 0 : i.querySelector("strong")) == null ? void 0 : l.textContent) || ""), h.addEventListener("change", () => {
            var F;
            return (F = v[Number(h.value)]) == null ? void 0 : F.click();
          }), u.after(h);
          const N = () => {
            h.innerHTML = v.map((X, lt) => '<option value="' + lt + '"' + (X.disabled ? " disabled" : "") + ">" + rt(X.textContent) + "</option>").join("");
            const F = v.findIndex((X) => X.getAttribute("aria-pressed") === "true" || X.classList.contains("active"));
            F >= 0 && (h.value = String(F));
          };
          new MutationObserver(N).observe(u, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), N();
        }
        const w = (N) => {
          u.hidden !== !N && (u.hidden = !N), h.hidden !== N && (h.hidden = N);
        };
        if (v.length > 3) {
          w(!1);
          continue;
        }
        if (!u.getClientRects().length && !h.getClientRects().length) {
          h.dataset.fit || w(!0);
          continue;
        }
        const M = u.hidden;
        u.hidden = !1;
        const I = v.every((N) => N.scrollWidth <= N.clientWidth + 1);
        u.hidden = M, w(I), h.dataset.fit = "1";
      }
  }
  const ft = document.createElement("div");
  ft.className = "densityBadge", ft.setAttribute("aria-live", "polite"), ft.hidden = !0, m.appendChild(ft);
  let ht = 0;
  function wt() {
    if (!L) return;
    const t = c("homeView"), a = (v) => v.offsetParent !== null && !v.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((v) => {
      a(v) && (v.dataset.h = Math.round(v.getBoundingClientRect().height) + " px");
    });
    const i = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, u = i.filter((v) => {
      const h = v.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= l + 0.5;
    }).length;
    ft.hidden = !t.classList.contains("active"), ft.innerHTML = "<b>" + u + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const it = () => {
    L && requestAnimationFrame(wt);
  };
  function et() {
    var t;
    m.classList.toggle("showDensity", L), (t = c("densityToggle")) == null || t.classList.toggle("on", L), ft.hidden = !L, clearInterval(ht), L && (ht = setInterval(wt, 1e3), wt());
  }
  window.addEventListener("scroll", it, { capture: !0, passive: !0 }), window.addEventListener("resize", it, { passive: !0 });
  const _ = n.querySelector("#homeView .grid");
  let K = null, Tt = null, at = null, ct = null;
  const ot = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), B = 6;
  let D = null;
  const q = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
  let Q = { favourites: null }, Ct = {}, Lt = {}, Qt = [], le = null;
  const ia = (() => {
    try {
      return JSON.parse(Ko.get(fp)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), Ai = 0;
  function La() {
    clearTimeout(Ai), Ai = setTimeout(() => Promise.resolve(E({ type: "frontend/set_user_data", key: up, value: Q })).catch(() => {
    }), 400);
  }
  const It = (() => {
    let t = {};
    try {
      t = JSON.parse(Ko.get(hp)) || {};
    } catch {
    }
    const a = (i, l) => Object.fromEntries(Object.entries(i || {}).filter(([, u]) => l.includes(u)));
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
  })(), fe = () => Ko.set(hp, JSON.stringify(It)), pa = () => {
    m.dataset.more = It.more, m.dataset.names = It.names, Or();
  };
  k && P && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (It.more = a.dataset.moreStyle, fe(), pa(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + tm.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (It.names = a.dataset.namesStyle, It.namesPicked = !0, fe(), pa(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + em.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (It.hoursWindow = a.dataset.hoursWindow, fe(), Jt == null || Jt.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + am.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (It.wxStyle = a.dataset.wxStyle, fe(), Jt == null || Jt.setStyle(It.wxStyle), va == null || va.forEach((i) => i.setStyle(It.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  })), nt();
  let ae = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Ge = /* @__PURE__ */ new Map();
  let Jr = "";
  const be = k ? Fu({ onChange: () => ka() }) : null;
  k && m.classList.add("house");
  const ne = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Jt = null, yr = null, _i = !1;
  function kr(t) {
    const a = Ee();
    if (m.classList.toggle("houseBento", !!a), Jt && (yr !== a || t == null) && (Jt.destroy(), Jt = null), !a || t == null) {
      ne.remove();
      return;
    }
    ne.isConnected || _.append(ne), ne.style.order = t, !Jt && !_i && (Jt = Jc(ne, { getHass: o, entityId: a, style: It.wxStyle, hoursWindow: () => It.hoursWindow }), yr = a);
  }
  const nn = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], he = ["aq", "pollen", "radar"], ua = Object.fromEntries(nn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let va = null, Ei = null;
  function Mr(t) {
    const a = Ee();
    va && Ei !== a && (va.forEach((i) => i.destroy()), va = null), Object.values(ua).forEach((i) => a ? !i.isConnected && _.append(i) : i.remove()), a && !va && !_i && (va = nn.map(([i, l]) => Jc(ua[i], { getHass: o, entityId: a, style: It.wxStyle, cards: l, onOpen: i === "wx" ? () => Fr("weather") : void 0 })), Ei = a);
  }
  const Kt = (t) => {
    var a;
    return ((a = S[t]) == null ? void 0 : a.attributes) || {};
  }, Nt = (t) => Kt(t).friendly_name || t, Zt = (t, a) => Zo(t) || (Number(Kt(t).supported_features) & a) === a, _e = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Aa = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), Un = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Yt = (t) => Kt(t).supported_color_modes || [], oe = (t, a) => [5, 3, 1].map((i) => {
    const l = (i + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), Xe = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ao = (t) => 0.2126 * Xe(t[0]) + 0.7152 * Xe(t[1]) + 0.0722 * Xe(t[2]), on = (t, a) => {
    const i = Ao(t), l = Ao(a);
    return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
  }, ea = 0.55, Yn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ye = (t) => {
    const a = Kt(t), i = Yn.includes(a.color_mode);
    return (i && a.rgb_color ? a.rgb_color : i && a.hs_color ? oe(...a.hs_color) : [255, 170, 0]).map((l) => Math.round(Math.max(0, Math.min(255, l))));
  }, _o = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Eo(t) {
    var l;
    const a = t.split(".")[0], i = (l = S[t]) == null ? void 0 : l.state;
    return !i || i === "unavailable" || i === "unknown" ? null : a === "light" ? i === "on" ? Ye(t) : null : a === "climate" ? _o[i] || null : a === "cover" ? i !== "closed" ? [146, 107, 199] : null : a === "lock" ? i !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(i) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(i) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(i) ? [0, 150, 136] : null : a === "alarm_control_panel" ? i !== "disarmed" && i !== "triggered" ? [76, 175, 80] : null : a === "fan" ? i === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && i === "on" ? [255, 193, 7] : null;
  }
  function Do(t, a, i = !1) {
    const [l, u, v] = t.map((dt) => dt / 255), h = Math.max(l, u, v), w = Math.min(l, u, v), M = h - w, I = M ? (h === l ? (u - v) / M + (u < v ? 6 : 0) : h === u ? (v - l) / M + 2 : (l - u) / M + 4) * 60 : 0, N = (h + w) / 2, F = M ? M / (1 - Math.abs(2 * N - 1)) : 0, X = M < 0.1 ? Math.min(F, 0.25) : 1, lt = (dt) => {
      const J = (U) => (U + I / 30) % 12, ut = X * Math.min(dt, 1 - dt);
      return [0, 8, 4].map((U) => Math.round(255 * (dt - ut * Math.max(-1, Math.min(J(U) - 3, 9 - J(U), 1)))));
    };
    for (let dt = 0.5; i ? dt < 0.96 : dt > 0.04; dt += i ? 0.01 : -0.01) {
      const J = lt(dt);
      if (on(J, a) >= 3) return "rgb(" + J.join(",") + ")";
    }
    return i ? "#ffffff" : "#26221e";
  }
  const fa = (t) => {
    const a = [1, 3, 5].map((i) => parseInt(t.slice(i, i + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + Do(a, [58, 58, 58], !0) + ";--sum-l:" + Do(a, [230, 230, 230]);
  }, Zn = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Di = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Zn.d[t] + ";--g" + t + "-l:" + Zn.l[t]).join(";"), Sr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", rn = (t) => {
    const a = t.map((i) => Math.round(i + (255 - i) * ea));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + Do(t, a);
  }, js = (t) => rn(Ye(t)), ro = (t) => {
    const a = Eo(t);
    return a ? ' data-light style="' + rn(a) + '"' : "";
  }, Tn = (t) => {
    const a = Yt(t);
    return a.length ? a.some((i) => i !== "onoff") : Kt(t).brightness != null;
  }, Bi = (t) => [Kt(t).min_color_temp_kelvin || 2e3, Kt(t).max_color_temp_kelvin || 6500], In = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Cr(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const i = Math.round(a / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(i / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const u = Math.round(l / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const Hn = (t) => {
    var a;
    return Kt(t).current_position ?? (((a = S[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Le = (t) => {
    var a;
    return me("pos", t, ((a = q.get(t)) == null ? void 0 : a.pos) ?? Hn(t));
  }, Bo = (t) => {
    var a;
    return me("tilt", t, ((a = q.get(t)) == null ? void 0 : a.tilt) ?? Kt(t).current_tilt_position);
  };
  function Ve(t) {
    var h;
    const a = S[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const i = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const w = i.color_temp_kelvin;
      return (Tn(t) ? Un(a) + "%" : "On") + (i.color_mode === "color_temp" && w ? " · " + Number(w).toLocaleString() + "k" : Yn.includes(i.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : _e(i.hvac_action || a.state)) + " · " + Aa(i.current_temperature) + " °C now";
    if (l === "cover") {
      const w = Hn(t), M = i.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? _e(a.state) + " - " + w + "%" : (w <= 0 ? "Closed" : w >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : _e(i.action || "on") + " · " + i.current_humidity + "% now";
    if (l === "vacuum") return _e(a.state) + (a.state === "cleaning" && ((h = i.rooms) != null && h.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : _e(a.state);
    if (l === "alarm_control_panel") return wp[a.state] || _e(a.state);
    if (l === "lock" || l === "valve") return _e(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : _e(i.problem);
    if (l === "binary_sensor")
      return i.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : ud.includes(i.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + In(i.rang);
    const u = o();
    if (u != null && u.formatEntityState && !Zo(t))
      try {
        return u.formatEntityState(a);
      } catch {
      }
    const v = Number(a.state);
    if (a.state !== "" && Number.isFinite(v)) {
      const w = Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2, M = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return v.toLocaleString(void 0, { maximumFractionDigits: w }) + M + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return _e(a.state);
  }
  const Jo = (t) => t >= 1e3 ? Aa(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function _a(t) {
    var i, l;
    const a = o();
    t.querySelectorAll("[data-icon-for]").forEach((u) => {
      var w;
      const v = S[u.dataset.iconFor], h = u.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && v && !h) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (u.textContent = "", M = document.createElement("ha-state-icon"), u.appendChild(M)), M.hass = a, M.stateObj = v;
      } else if (customElements.get("ha-icon")) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-icon") && (u.textContent = "", M = document.createElement("ha-icon"), u.appendChild(M)), M.icon = h || ((w = v == null ? void 0 : v.attributes) == null ? void 0 : w.icon) || "mdi:circle-medium";
      } else u.textContent || (u.textContent = (u.dataset.letter || Nt(u.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = t.querySelectorAll) == null || i.call(t, ".tfIcon").forEach(Ea), (l = t.classList) != null && l.contains("tfIcon") && Ea(t), Ri();
  }
  const aa = /* @__PURE__ */ new Map();
  function Ea(t) {
    var v, h, w;
    const a = (((v = t.closest("[data-k]")) == null ? void 0 : v.dataset.k) || "") + "|" + (t.dataset.iconFor || ((h = t.querySelector("[data-icon-for]")) == null ? void 0 : h.dataset.iconFor) || t.getAttribute("aria-label") || ""), i = getComputedStyle(t), l = { backgroundColor: i.backgroundColor, color: i.color }, u = aa.get(a);
    aa.set(a, l), !(!u || u.backgroundColor === l.backgroundColor && u.color === l.color || (w = window.matchMedia) != null && w.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([u, l], { duration: na.warp.cdur, delay: na.warp.cdelay, easing: oa[na.warp.ease], fill: "backwards" });
  }
  const Qr = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ts = (t) => {
    const a = [t];
    for (; a.length; ) {
      const i = a.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && a.push(...i.shadowRoot.children), a.push(...i.children);
    }
    return null;
  };
  function Tr(t) {
    var lt, dt, J;
    const a = t.localName === "svg" ? t : ts(t), i = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !a;
    const l = (lt = t.closest(".tfIcon")) == null ? void 0 : lt.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const u = l + "|" + i.map((ut) => ut.getAttribute("d") || ut.localName).join("|");
    if (t.dataset.fitted === u) return !0;
    let v = 1 / 0, h = 1 / 0, w = -1 / 0, M = -1 / 0;
    for (const ut of i) {
      const U = ut.getBBox(), St = getComputedStyle(ut), G = St.stroke !== "none" ? (parseFloat(St.strokeWidth) || 0) / 2 : 0;
      !U.width && !U.height || (v = Math.min(v, U.x - G), h = Math.min(h, U.y - G), w = Math.max(w, U.x + U.width + G), M = Math.max(M, U.y + U.height + G));
    }
    if (!(w > v)) return !1;
    const I = (J = (dt = a.viewBox) == null ? void 0 : dt.baseVal) != null && J.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = l - 14, F = N * I.width / Math.max(w - v, M - h), X = F / I.width;
    return t.localName === "svg" ? (t.style.width = F + "px", t.style.height = F + "px") : t.style.setProperty("--mdc-icon-size", F + "px"), a.style.translate = ((I.x + I.width / 2 - (v + w) / 2) * X).toFixed(2) + "px " + ((I.y + I.height / 2 - (h + M) / 2) * X).toFixed(2) + "px", t.dataset.fitted = u, !0;
  }
  let Fn = 0;
  function Ra(t = 0) {
    clearTimeout(Fn), [...n.querySelectorAll(Qr)].filter((i) => !Tr(i)).length && t < 5 && (Fn = setTimeout(() => Ra(t + 1), 300));
  }
  function Ri() {
    clearTimeout(Fn), Fn = setTimeout(() => Ra(), 60);
  }
  const es = (t) => {
    var a, i, l;
    return t.startsWith("light.") && S[t] && !Kt(t).icon && !((l = (i = (a = o()) == null ? void 0 : a.entities) == null ? void 0 : i[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, Je = (t, a, i) => (a = a || es(t), ' data-icon-for="' + rt(t) + '"' + (a ? ' data-icon-name="' + rt(a) + '"' : "") + (i ? ' data-letter="' + rt(i) + '"' : "")), Ln = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Kt(t).rang ? "mdi:doorbell" : "", we = (t, a, i, l) => rt([t, a, i, l ? JSON.stringify(l) : ""].join("|")), Qo = (t) => rt(JSON.stringify(t));
  function ti(t, a) {
    var u, v;
    const i = rt(Nt(a) + ", " + Ve(a));
    return '<div class="activityRow' + (Number.isFinite(Number((u = S[a]) == null ? void 0 : u.state)) && ((v = S[a]) == null ? void 0 : v.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + rt(t + "|" + a) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Je(a, Ln(a)) + '></div><div><div class="activityRowName">' + rt(Nt(a)) + '</div><div class="activityRowMeta">' + rt(Ve(a)) + "</div></div></div>";
  }
  const ei = (t, a, i) => '<div class="activityRow" aria-label="' + rt(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Je("", i, t) + '></div><div><div class="activityRowName">' + rt(t) + '</div><div class="activityRowMeta">' + rt(a) + "</div></div></div>";
  function Ro(t) {
    var i;
    const a = ((i = S[t]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + we("switch", "toggle", t) + '" aria-label="Turn ' + rt(Nt(t)) + (a ? " off" : " on") + '"' + Je(t) + '></button><button class="tfName" type="button" data-more="' + rt(t) + '" aria-label="' + rt(Nt(t) + ", " + Ve(t) + ". More info") + '"><span class="activityRowName">' + rt(Nt(t)) + '</span><span class="activityRowMeta">' + rt(Ve(t)) + "</span></button></div>";
  }
  const so = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.name) ?? Nt(t);
  }, lo = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.text) ?? Ve(t);
  };
  function as(t) {
    var i;
    const a = (i = zt.get(t)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Je("", a, so(t)) : Je(t, Ln(t))) + '></div><div><div class="activityRowName">' + rt(so(t)) + '</div><div class="activityRowMeta">' + rt(lo(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + rt(so(t)) + '’s last 24 hours">' + ec + '</button></div><svg class="tfGraph" data-graph="' + rt(t) + '" role="img" aria-label="' + rt(so(t)) + ', last 24 hours"></svg></div>';
  }
  function Kn(t, a, i, l, u = "", v = null, h = "") {
    const w = K && K.key === t;
    return '<section class="card tfCard' + (h ? " " + h : "") + (w ? " open" : "") + '" data-tf data-k="' + rt(t) + '" style="order:' + a + (w && K.h ? ";min-height:" + K.h + "px" : "") + '" aria-label="' + rt(i) + '"><div class="activityHeader">' + (v ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + rt(v) + '" aria-label="' + rt(i + (S[v] ? ", " + Ve(v) : "") + ". More info") + '">' + rt(i) + "</button>" : '<div class="activityTitle">' + rt(i) + "</div>") + "</div>" + (w ? as(K.id) : '<div class="activityRows">' + l.join("") + "</div>" + u) + "</section>";
  }
  function co(t, a) {
    const i = "readings:" + t.id, l = t.readings.map((u) => ti(i, u));
    return t.power != null && l.push(ei("Power now", Jo(t.power), "mdi:flash")), Kn(i, a, "Readings", l.concat(t.plugs.map(Ro)));
  }
  function ns(t, a) {
    var w;
    const i = "energy:" + t.id, [l, u] = [t.solar.find((M) => M.endsWith("_power")), t.solar.find((M) => M.endsWith("_today"))], v = [l, u].filter(Boolean).map((M) => ti(i, M)), h = Number(((w = S[l]) == null ? void 0 : w.state) || 0) * 1e3;
    return ae.grid && (v.push(ti(i, ae.grid)), v.push(ei("House use", Jo(h + Number(S[ae.grid].state)), "mdi:home-lightning-bolt"))), Kn(i, a, "Energy", v, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Ni = (t, a) => Kn("plant:" + t.id, a, Nt(t.id), t.readings.map((i) => ti("plant:" + t.id, i)), "", t.id);
  function po(t, a, i, l, u, v, h = null) {
    const w = i == null ? null : Math.max(0, Math.min(1, i)), M = w == null ? 0 : Math.round(w * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + rt(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (u ? ' aria-valuetext="' + rt(u) + '"' : "") + ' data-drag="' + rt(t + "|" + a) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (v ? w == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const sn = "move-assistant-house-last-bright", Za = (() => {
    try {
      return JSON.parse(Ko.get(sn)) || {};
    } catch {
      return {};
    }
  })();
  let Pi = 0;
  const $n = (t, a) => {
    !a || Za[t] === a || (Za[t] = a, clearTimeout(Pi), Pi = setTimeout(() => Ko.set(sn, JSON.stringify(Za)), 500));
  }, On = (t, a, i, l) => '<div class="tfStep" role="group" aria-label="' + rt(t) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + rt(t.toLowerCase()) + '">' + ip.down + "</button><output>" + rt(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + rt(t.toLowerCase()) + '">' + ip.up + "</button></div>", Ce = (t, a, i) => '<div class="' + t + '" role="group" aria-label="' + rt(a) + '">' + i.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + rt(l.aria) + '"' : "") + ">" + (l.html || rt(l.label)) + "</button>").join("") + "</div>", ln = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), ha = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ii = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + rt(Nt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + rt(t) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + ln(a, i) + '"></i><b' + (a >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ha(a) + '">' + Math.round(a) + "%</output></div>";
  function zs(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, u) => {
      l.firstElementChild.setAttribute("style", ln(a, u)), l.lastElementChild.classList.toggle("lit", a >= (u + 1) * 25 - 12);
    });
    const i = t.querySelector(".tfTip");
    i.setAttribute("style", ha(a)), i.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const os = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + rt(Nt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + rt(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", sa = (t, a, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + rt(Nt(t)) + '">' + [
    Zt(t, Uh) && ["open", "Open", "open_cover", a >= 100 && !i],
    Zt(t, Zh) && ["stop", "Stop", "stop_cover", !1],
    Zt(t, Yh) && ["close", "Close", "close_cover", a <= 0 && !i]
  ].filter(Boolean).map(([l, u, v, h]) => '<button type="button" data-act="' + we("cover", v, t) + '" aria-label="' + u + '"' + (h ? " disabled" : "") + ">" + Kh[l] + "</button>").join("") + "</div>", uo = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + rt(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + rt(a.art) + '&quot;)"' : Je(t, a.icon)) + "></button>", is = (t) => '<button class="tfName" type="button" data-more="' + rt(t) + '" aria-label="' + rt(Nt(t) + ", " + Ve(t) + ". More info") + '"><span class="activityRowName">' + rt(Nt(t)) + '</span><span class="activityRowMeta">' + rt(Ve(t)) + "</span></button>";
  function fo(t, a = !1, i = null) {
    const l = Xn(t), u = t.startsWith("light.") && ai(t) && !(i && Xi(t) < 3), v = i || (a && t.startsWith("light.") ? ["bright"] : null), h = u ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : i ? "dash:" : "tile:") + rt(t) + '"></div>'] : l.sections.map((w, M) => w && (!v || v.includes((l.parts || [])[M])) ? w : "").filter(Boolean);
    return '<div class="tfAction' + (u ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + rt(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + ro(t) + '><div class="tfActionHead">' + uo(t, l) + is(t) + "</div>" + h.join("") + "</div>";
  }
  const Fa = "dual-controller-v3", Hi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Fi = null;
  async function Oi() {
    if (Fi || customElements.get(Fa)) return;
    Fi = "loading";
    const t = await Promise.resolve().then(() => E({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(Fa), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(Fa)) return;
    const i = Object.assign(document.createElement("script"), { src: Hi });
    i.onerror = () => {
      Fi = "failed", $();
    }, document.head.appendChild(i);
  }
  const Oa = /* @__PURE__ */ new Map(), qn = (t) => (It.lightStyles[t] || It.lights) === "dac", qi = () => It.lights === "dac" || Object.values(It.lightStyles).includes("dac");
  function ai(t) {
    return qn(t) && !!customElements.get(Fa);
  }
  const qa = (t) => It.lightPads[t] || It.dacPad, Wi = () => {
    const t = o();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, i, l, ...u) => t.callService(a, ...gl(a, i, l), ...u)
    };
  }, ji = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", No = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: ji })).dataset.tf = "");
  }, ni = /* @__PURE__ */ new Map(), rs = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const i = a.parentElement;
    !i || !a.offsetHeight || (i.style.removeProperty("min-height"), ni.set(i.dataset.dac, i.offsetHeight));
  }));
  function Po(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const i = a.dataset.dac;
      let l = Oa.get(i);
      if (!l) {
        const u = i.slice(i.indexOf(":") + 1);
        l = document.createElement(Fa), l.setConfig({ type: "custom:" + Fa, entity: u, pad: qa(u), tap_action: { action: "none" } }), Oa.set(i, l);
      }
      l.hass = Wi(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && ni.has(i) && (a.style.minHeight = ni.get(i) + "px"), rs.observe(l), No(l);
    });
  }
  function An() {
    const t = Wi();
    Oa.forEach((a, i) => {
      a.isConnected ? a.hass = t : Oa.delete(i);
    });
  }
  customElements.whenDefined(Fa).then(() => {
    k && (_ != null && _.querySelector("[data-tf]")) && Ja(je);
  });
  const me = (t, a, i) => T.has(t + "|" + a) ? T.get(t + "|" + a) : i;
  function Xn(t) {
    var v;
    const a = S[t], i = a.attributes, l = t.split(".")[0], u = (h, w) => ({ act: we(h, "toggle", t), label: w });
    if (l === "light") {
      const h = a.state === "on", w = Yt(t), [M, I] = Bi(t), N = me("bright", t, Un(a));
      h && $n(t, Un(a));
      const F = me("ct", t, h && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), X = me("hue", t, h && Yn.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: h, button: u("light", "Turn " + Nt(t) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Tn(t) && po("bright", t, N / 100, Nt(t) + " brightness", N + "%", !1, h ? null : Za[t] ?? null),
        w.includes("color_temp") && po("ct", t, F == null ? null : (F - M) / (I - M), Nt(t) + " warm to cool", F == null ? "" : Math.round(F) + " kelvin", !0),
        w.some((lt) => Yn.includes(lt)) && po("hue", t, X == null ? null : X / 360, Nt(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const h = i.target_temp_step || 0.5, w = Number(i.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + Nt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(w) && On("Target temperature", Aa(w) + " °C", we("climate", "set_temperature", t, { temperature: w - h }), we("climate", "set_temperature", t, { temperature: w + h })),
        Ce("tfSeg", "Mode", (i.hvac_modes || []).map((M) => ({ label: _e(M), act: we("climate", "set_hvac_mode", t, { hvac_mode: M }), pressed: a.state === M })))
      ] };
    }
    if (l === "cover") {
      const h = a.state === "opening" || a.state === "closing", w = a.state === "closed", M = Le(t), I = Bo(t);
      return { on: !w, tone: "blue", icon: pp[tc(a)][w ? 1 : 0], button: u("cover", (w ? "Open " : "Close ") + Nt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Zt(t, cp) && Ii(t, M),
        I != null && os(t, I),
        sa(t, M, h)
      ] };
    }
    if (l === "humidifier") {
      const h = Number(i.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + Nt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && On("Target humidity", h + "%", we("humidifier", "set_humidity", t, { humidity: h - 1 }), we("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((v = i.available_modes) == null ? void 0 : v.length) && Ce("tfSeg", "Mode", i.available_modes.map((w) => ({ label: _e(w), act: we("humidifier", "set_mode", t, { mode: w }), pressed: i.mode === w })))
      ] };
    }
    if (l === "media_player") {
      const h = a.state === "playing", w = a.state === "off" || a.state === "standby", M = me("vol", t, i.volume_level), I = w ? { act: we("media_player", Zt(t, Vh) ? "turn_on" : "toggle", t), label: "Turn " + Nt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: we("media_player", "media_play_pause", t), label: (h ? "Pause " : "Play ") + Nt(t) } : { act: we("media_player", Zt(t, Gh) ? "turn_off" : "toggle", t), label: "Turn " + Nt(t) + " off" };
      return { on: !w, tone: "blue", art: !w && i.entity_picture ? i.entity_picture : null, button: I, parts: ["playback", "volume"], sections: w ? [] : [
        (Zt(t, sp) || Zt(t, lp) || Zt(t, rp) || Zt(t, dp)) && Ce("tfSeg", "Playback", [
          { html: pd.prev, aria: "Previous", act: we("media_player", "media_previous_track", t), disabled: !Zt(t, sp) },
          { html: h ? pd.pause : pd.play, aria: h ? "Pause" : "Play", act: we("media_player", "media_play_pause", t), disabled: !(Zt(t, rp) || Zt(t, dp)) },
          { html: pd.next, aria: "Next", act: we("media_player", "media_next_track", t), disabled: !Zt(t, lp) }
        ]),
        Zt(t, zh) && M != null && po("vol", t, M, Nt(t) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const h = a.state === "cleaning", w = i.rooms || [], M = (N) => w.includes(N) ? w.filter((F) => F !== N) : w.concat(N), I = we("vacuum", h ? "pause" : "start", t, Zo(t) ? { rooms: w } : null);
      return { on: h || a.state === "returning", tone: "blue", button: { act: I, label: (h ? "Pause " : "Start ") + Nt(t) }, parts: ["controls", "rooms"], sections: [
        Ce("tfSeg", Nt(t), [
          { label: h ? "Pause" : "Start", act: I },
          { label: "Dock", act: we("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: we("vacuum", "locate", t) }
        ]),
        Zo(t) && Ce("tfChips", "Rooms to clean", ae.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: we("vacuum", "set_rooms", t, { rooms: M(N.name) }), pressed: w.includes(N.name) })))
      ] };
    }
    if (l === "lock") {
      const h = a.state === "locked";
      return { on: !h, tone: "heat", button: { act: we("lock", h ? "unlock" : "lock", t), label: (h ? "Unlock " : "Lock ") + Nt(t) }, parts: ["controls"], sections: [
        Ce("tfSeg", Nt(t), [
          { label: "Lock", act: we("lock", "lock", t), pressed: h },
          { label: "Unlock", act: we("lock", "unlock", t), pressed: a.state === "unlocked" },
          Zt(t, sm) && { label: "Open", act: we("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const h = a.state === "disarmed";
      return { on: !h, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: we("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", t), label: h ? "Arm " + Nt(t) + ", away" : "Disarm " + Nt(t) }, parts: ["controls"], sections: [
        Ce("tfSeg", Nt(t), lm.filter(([, , , w]) => !w || Zt(t, w)).map(([w, M, I]) => ({ label: M, act: we("alarm_control_panel", I, t), pressed: a.state === w })))
      ] };
    }
    if (l === "valve") {
      const h = a.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (h ? "Close " : "Open ") + Nt(t)), parts: ["controls"], sections: [
        Ce("tfSeg", Nt(t), [
          { label: "Open", act: we("valve", "open_valve", t), pressed: h },
          { label: "Close", act: we("valve", "close_valve", t), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Nt(t) }, sections: [] };
  }
  const Io = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Aa(t)) + "°";
  function oi(t) {
    var ut;
    const a = (U) => t.readings.find((St) => Kt(St).device_class === U), i = a("temperature"), l = a("humidity"), u = (U) => {
      var St;
      return Number((St = S[U]) == null ? void 0 : St.state);
    }, v = (U) => t.actions.filter((St) => U.test(St)), h = t.lights.filter((U) => {
      var St;
      return ((St = S[U]) == null ? void 0 : St.state) === "on";
    }), w = v(/^cover\./), M = w.filter((U) => {
      var St;
      return ((St = S[U]) == null ? void 0 : St.state) !== "closed";
    }), I = [...new Set(w.map((U) => tc(S[U])))], N = v(/^climate\./)[0], F = v(/^humidifier\./)[0], X = v(/^media_player\./), lt = X.find((U) => {
      var St;
      return ((St = S[U]) == null ? void 0 : St.state) === "playing";
    }) || X.find((U) => {
      var St;
      return ((St = S[U]) == null ? void 0 : St.state) === "paused";
    }), dt = t.plugs.filter((U) => {
      var St;
      return ((St = S[U]) == null ? void 0 : St.state) === "on";
    }), J = [];
    if (i && Number.isFinite(u(i)) && J.push({ key: "temp", id: i, kind: "reading", icon: $o(i), label: "Temperature", value: Aa(u(i)) + "°" }), l && Number.isFinite(u(l)) && J.push({ key: "hum", id: l, kind: "reading", icon: $o(l), label: "Humidity", value: Math.round(u(l)) + "%" }), t.lights.length && J.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: $o("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + t.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? js(h[0]) : "",
      acts: t.lights.map((U) => ["light", h.length ? "turn_off" : "turn_on", U]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), w.length) {
      const U = I.length === 1 ? $h[I[0]] : "covers", St = Math.round(w.reduce((G, Ht) => G + Hn(Ht), 0) / w.length);
      J.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: M.length ? rn([146, 107, 199]) : "",
        icon: $o("", ((ut = pp[I[0]]) == null ? void 0 : ut[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: _e(U),
        value: St <= 0 ? "Closed" : St >= 100 ? "Open" : St + "% open",
        short: St <= 0 ? "Closed" : St + "%",
        on: M.length > 0,
        acts: w.map((G) => ["cover", M.length ? "close_cover" : "open_cover", G]),
        aria: (M.length ? "Close the " : "Open the ") + U + " in " + t.name
      });
    }
    if (N) {
      const U = Kt(N), St = S[N].state === "off";
      J.push({
        key: "climate",
        kind: "control",
        tone: U.hvac_action === "cooling" ? "cool" : "heat",
        light: Eo(N) ? rn(Eo(N)) : "",
        icon: $o(N),
        label: Nt(N),
        value: St ? "Off" : _e(U.hvac_action || S[N].state) + " · " + Io(U.temperature),
        short: St ? "Off" : Io(U.temperature),
        on: !St,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + Nt(N) + (St ? " on" : " off")
      });
    }
    if (F) {
      const U = S[F].state === "on";
      J.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: U ? rn([33, 150, 243]) : "",
        icon: $o("", "mdi:air-humidifier"),
        label: Nt(F),
        value: U ? "On · " + Kt(F).humidity + "%" : "Off",
        short: U ? Kt(F).humidity + "%" : "Off",
        on: U,
        acts: [["humidifier", "toggle", F]],
        aria: "Turn " + Nt(F) + (U ? " off" : " on")
      });
    }
    if (X.length) {
      const U = lt || X[0], St = S[U], G = St.state === "playing";
      J.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Eo(U) ? rn(Eo(U)) : "",
        icon: $o(U),
        label: Nt(U),
        value: Ve(U),
        short: G ? "Playing" : St.state === "paused" ? "Paused" : _e(St.state),
        on: G,
        acts: [["media_player", St.state === "playing" || St.state === "paused" ? "media_play_pause" : "toggle", U]],
        aria: (G ? "Pause " : "Play ") + Nt(U)
      });
    }
    return t.plugs.length && J.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: dt.length ? rn([255, 193, 7]) : "",
      icon: $o("", "mdi:power-plug"),
      label: "Plugs",
      value: dt.length ? dt.length + " of " + t.plugs.length + " on" : "All off",
      short: dt.length ? dt.length + " on" : "Off",
      on: dt.length > 0,
      acts: t.plugs.map((U) => ["switch", dt.length ? "turn_off" : "turn_on", U]),
      aria: (dt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((U) => J.push(Kt(U).device_class === "moisture" ? { key: "alert:" + U, kind: "alert", icon: $o(U), label: "Water leak" } : { key: "note:" + U, kind: "note", icon: $o(U), label: Nt(U) + " " + Ve(U).toLowerCase() })), J;
  }
  const Wa = (t, a) => {
    const i = (l) => t.actions.filter((u) => l.test(u));
    return {
      lights: t.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = i(/^media_player\./);
        return [l.find((u) => {
          var v;
          return ((v = S[u]) == null ? void 0 : v.state) === "playing";
        }) || l.find((u) => {
          var v;
          return ((v = S[u]) == null ? void 0 : v.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, ja = (t, a, i) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Qo(t.acts) + '" aria-label="' + rt(t.aria) + '" aria-pressed="' + t.on + '">' + i + "</button>", qe = (t) => '<button class="tfAName" type="button" data-go="' + rt(t.id) + '" aria-label="Open ' + rt(t.name) + '">' + rt(t.name) + "</button>";
  function Wn(t, a, i = !1) {
    const l = a.find((w) => w.key === "lights"), u = !!(l != null && l.on), v = "", h = '<span class="tfAreaGlyph"' + Je("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return i || !l ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + v + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + v + ' data-acts="' + Qo(l.acts) + '" aria-label="' + rt(l.aria) + '" aria-pressed="' + u + '">' + h + "</button>";
  }
  const ho = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + rt(a.label) + "</span>").join(" "), Lr = (t) => t.readings.find((a) => Kt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => S[a]) || null, p = (t, a) => {
    const i = Nt(a);
    return i.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? _e(i.slice(t.name.length + 1)) : i;
  };
  function g(t) {
    const a = S[t], i = Kt(t), l = t.split(".")[0], u = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(u)) {
      if (i.device_class === "temperature") return { text: Io(u) };
      const v = i.unit_of_measurement || "";
      return v === "%" ? { text: Math.round(u) + "%" } : { text: Aa(u, Number.isInteger(u) ? 0 : 1), unit: v };
    }
    if (l === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Io(i.current_temperature ?? i.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : Tn(t) ? Un(a) + "%" : "On" };
    if (l === "cover") {
      const v = Hn(t);
      return { text: v <= 0 ? "Closed" : v >= 100 ? "Open" : v + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? i.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : _e(a.state) } : { text: Ve(t) };
  }
  const y = (t, a, i) => {
    const l = i.find((w) => w.key === "temp"), u = i.find((w) => w.key === "hum"), v = Kt(a), h = S[a].state === "off";
    return a.startsWith("climate.") ? [p(t, a), h ? "Off" : _e(v.hvac_action || S[a].state) + (v.temperature != null ? " · " + Io(v.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && p(t, a), l && l.id !== a && l.value, u && u.id !== a && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function C(t, a, i) {
    const l = i && g(i), u = i ? y(t, i, a) : "", v = (M) => {
      const I = Wa(t, M.key);
      return I.length === 1 ? I[0] : "group:" + t.id + ":" + M.key;
    }, h = a.filter((M) => M.kind === "control").slice(0, 4).map((M) => '<div class="tfATile' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + (M.light ? ' data-light style="' + M.light + '"' : "") + ">" + ja(M, "tfIcon", M.icon) + '<button class="tfName" type="button" data-more="' + rt(v(M)) + '" aria-label="' + rt(t.name + " " + M.label.toLowerCase() + ", " + M.value + ". Open") + '"><span class="activityRowName">' + rt(M.label) + '</span><span class="activityRowMeta">' + rt(M.value) + "</span></button></div>"), w = ho(a);
    return '<div class="workoutPanelTop">' + Wn(t, a) + '<div class="tfATitle">' + qe(t) + "</div>" + (w ? '<div class="tfATags">' + w + "</div>" : "") + "</div>" + (i ? '<button class="tfABig" type="button" data-more="' + rt(i) + '" aria-label="' + rt(Nt(i) + ", " + Ve(i) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + rt(l.text) + (l.unit ? '<span class="tfABigUnit">' + rt(l.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + rt(u) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function R(t) {
    const a = t.id === Tt, i = oi(t), l = Lr(t), u = l && g(l), v = [...i.filter((h) => h.kind === "control"), ...i.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + rt(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + rt(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + C(t, i, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Wn(t, i, !0) + '<span class="tfACName">' + rt(t.name) + '</span></div><span class="tfACMain">' + (u ? rt(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + v.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let z = [];
  const Z = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + z.map(R).join("") + "</section></div>", pt = (t) => t.startsWith("room:"), tt = (t) => z.find((a) => "room:" + a.id === t);
  function gt(t, a) {
    const i = oi(t), l = Lr(t), u = l && g(l), v = l ? y(t, l, i) : "", h = u ? u.text + (u.unit ? " " + u.unit : "") : "", w = (X) => {
      const lt = Wa(t, X.key);
      return lt.length === 1 ? lt[0] : "group:" + t.id + ":" + X.key;
    }, M = i.filter((X) => X.kind === "control").slice(0, 4), I = (X) => X.on && X.light ? ' data-light style="' + X.light + '"' : "", N = M.map((X) => '<button class="tfIcon' + (X.on ? " on" : "") + '" type="button" data-tone="' + X.tone + '"' + I(X) + ' data-more="' + rt(w(X)) + '" aria-label="' + rt(X.label + ", " + X.value + ". Open its controls") + '">' + X.icon + "</button>"), F = M.map((X) => '<button class="tfRoomDev" type="button" data-more="' + rt(w(X)) + '" aria-label="' + rt(X.label + ", " + X.value + ". Open its controls") + '"><span class="tfIcon' + (X.on ? " on" : "") + '" data-tone="' + X.tone + '"' + I(X) + ">" + X.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + rt(X.label) + '</span><span class="activityRowMeta">' + rt(X.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + rt(a) + '" data-go="' + rt(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Je("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + rt(t.id) + '" aria-label="Open ' + rt(t.name) + '"><span class="activityRowName">' + rt(t.name) + "</span>" + (h || v ? '<span class="activityRowMeta">' + (h ? '<span class="tfRoomInline">' + rt(h) + (v ? " · " : "") + "</span>" : "") + rt(v) + "</span>" : "") + "</button></div>" + (h ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + rt(h) + "</span>" + (v ? '<span class="tfRoomSub">' + rt(v) + "</span>" : "") + "</div>" : "") + (N.length ? '<div class="tfRoomDevices">' + N.join("") + '</div><div class="tfRoomHeads">' + F.join("") + "</div>" : "") + "</div>";
  }
  const yt = () => [
    { key: "home", name: "Home", ids: ae.homeVacuums },
    ...ae.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], At = (t, a, i) => t + " " + (t === 1 ? a : i), Gt = () => (Q.favourites ?? Ct.favorite_entities ?? []).filter((t) => S[t]);
  function Ut() {
    if (!le) {
      const a = Object.entries(ia).sort((l, u) => u[1] - l[1]).map(([l]) => l), i = ae.rooms.flatMap((l) => l.actions);
      le = [.../* @__PURE__ */ new Set([...Qt, ...a, ...i.filter((l) => Xn(l).on), ...i])];
    }
    const t = Gt();
    return le.filter((a) => S[a] && S[a].state !== "unavailable" && !t.includes(a));
  }
  let Dt = !1;
  function $t() {
    if (!Dt || Q.favSeeded || !ae.rooms.length) return;
    const t = (i) => Object.keys(S).find((l) => Zo(l) && i(l)), a = [t((i) => i.startsWith("climate.")), t((i) => i.startsWith("cover.") && /curtain/.test(i)), t((i) => i.startsWith("valve.")), ae.security.locks[0]];
    Q = { ...Q, favourites: [.../* @__PURE__ */ new Set([...Q.favourites ?? Ct.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, La();
  }
  const jt = () => Q.suggest ?? !Ct.hide_suggested_entities;
  function _t() {
    const t = new Set(Q.favHidden || []), a = Gt().filter((l) => !t.has(l)), i = jt() ? Ut().filter((l) => !t.has(l) && ds(l)) : [];
    return [...a, ...i].slice(0, cm);
  }
  const de = (t) => {
    const a = Gt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + rt(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + rt(Nt(t)) + '">' + rm(a) + "</button>";
  };
  function Xt(t, { area: a = !1, star: i = !1, plain: l = !1, say: u = null, alert: v = !1 } = {}) {
    var dt, J, ut, U, St, G;
    const h = l && ((St = (dt = o()) == null ? void 0 : dt.devices) == null ? void 0 : St[(U = (ut = (J = o()) == null ? void 0 : J.entities) == null ? void 0 : ut[t]) == null ? void 0 : U.device_id]), w = h && (h.name_by_user || h.name) || Nt(t), M = t.split(".")[0], I = !l && fd.includes(M) ? Xn(t) : null, N = I ? I.on : ["on", "open", "playing"].includes((G = S[t]) == null ? void 0 : G.state), F = l ? null : I ? I.button : Xh.includes(M) ? { act: we(M, "toggle", t), label: "Turn " + Nt(t) + (N ? " off" : " on") } : M === "scene" || M === "script" ? { act: we(M, "turn_on", t), label: "Run " + Nt(t) } : null, X = (u ?? Ve(t)) + (a && Se.get(t) ? " · " + Se.get(t) : ""), lt = (I == null ? void 0 : I.icon) || Ln(t);
    return '<div class="activityRow' + (F ? " tfPlug" : "") + (N ? " on" : "") + (i ? " tfPick" : "") + (v ? " alert" : "") + '" data-k="' + rt((a ? "fav:" : "row:") + t) + '" data-tone="' + (M === "light" ? "light" : (I == null ? void 0 : I.tone) || "blue") + '"' + ro(t) + ">" + (F && !i ? '<button class="tfIcon" type="button" data-act="' + F.act + '" aria-label="' + rt(F.label) + '"' + Je(t, lt) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Je(t, lt) + "></div>") + '<button class="tfName" type="button" data-more="' + rt(t) + '" aria-label="' + rt(w + ", " + X + ". More info") + '"><span class="activityRowName">' + rt(w) + '</span><span class="activityRowMeta">' + rt(X) + "</span></button>" + (i ? de(t) : "") + "</div>";
  }
  const Ee = () => {
    var t;
    return S[(t = Q.sources) == null ? void 0 : t.weather] ? Q.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((a) => a.startsWith("weather."));
  };
  function qt() {
    var i;
    const t = (l) => Object.keys(S).filter((u) => u.startsWith("binary_sensor.") && l.includes(Kt(u).device_class));
    return ((i = Lt.alert_entities) != null && i.length ? Lt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(ud).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => S[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[l.entity].state) }));
  }
  function We() {
    const t = Object.keys(ac), a = /* @__PURE__ */ new Set(), i = [];
    return (Ct.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      i.push(l);
    }), t.forEach((l) => {
      a.has(l) || i.push({ type: "summary", key: l });
    }), i;
  }
  function Ze() {
    var ut;
    const t = ((ut = o()) == null ? void 0 : ut.entities) || {}, a = (U) => Kt(U).device_class, i = Object.keys(S).filter((U) => U.startsWith("sensor.") && a(U) === "battery" || U.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(U))), l = ae.rooms.flatMap((U) => U.plants.map((St) => St.id));
    if (!i.length && !l.length) return null;
    const u = (U) => {
      var G;
      const St = (G = t[U]) == null ? void 0 : G.device_id;
      return !!St && Object.keys(S).some((Ht) => {
        var e;
        return Ht.startsWith("binary_sensor.") && ((e = t[Ht]) == null ? void 0 : e.device_id) === St && a(Ht) === "battery_charging" && S[Ht].state === "on";
      });
    }, v = (U) => U.startsWith("vacuum.") ? Kt(U).battery_level <= 20 && S[U].state !== "docked" : U.startsWith("binary_sensor.") ? a(U) === "battery" && S[U].state === "on" : parseFloat(S[U].state) <= 20 && !u(U), h = [...i, ...ae.vacuums].filter((U) => S[U] && v(U)), w = [...i.filter((U) => a(U) === "problem" && S[U].state === "on"), ...l.filter((U) => {
      var St;
      return ((St = S[U]) == null ? void 0 : St.state) === "problem";
    })], M = i.filter((U) => S[U].state === "unavailable"), I = [.../* @__PURE__ */ new Set([...h, ...w, ...M])], N = (U) => {
      const St = parseFloat(S[U].state);
      return a(U) === "battery" && Number.isFinite(St) ? St : 101;
    }, F = [...l, ...ae.vacuums, ...[...i].sort((U, St) => N(U) - N(St))].filter((U) => S[U] && !I.includes(U)), X = /* @__PURE__ */ new Map();
    F.forEach((U) => {
      var G;
      const St = ((G = ae.areaOf) == null ? void 0 : G.call(ae, U)) || "";
      X.set(St, [...X.get(St) || [], U]);
    });
    const lt = (U) => {
      const St = ae.rooms.findIndex((G) => G.id === U);
      return U === "" ? 1 / 0 : St < 0 ? ae.rooms.length : St;
    }, dt = [...X.keys()].sort((U, St) => lt(U) - lt(St)), J = (U) => {
      var St, G, Ht, e;
      return ((St = ae.rooms.find((r) => r.id === U)) == null ? void 0 : St.name) || ((e = (Ht = (G = o()) == null ? void 0 : G.areas) == null ? void 0 : Ht[U]) == null ? void 0 : e.name) || U;
    };
    return {
      value: [h.length && At(h.length, "low battery", "low batteries"), w.length && At(w.length, "problem", "problems"), M.length && At(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: I, alert: !0 }, ...dt.map((U) => ({ name: U ? J(U) : dt.length > 1 ? "Other devices" : "Devices", ids: X.get(U) }))].filter((U) => U.ids.length)
    };
  }
  function Da() {
    var d;
    const t = ae.rooms, a = ae.security, i = (f, b) => f.actions.filter((A) => b.test(A)), l = (f) => t.map((b) => ({ name: b.name, ids: f(b) })).filter((b) => b.ids.length), u = t.flatMap((f) => f.lights), v = u.filter((f) => {
      var b;
      return ((b = S[f]) == null ? void 0 : b.state) === "on";
    }).length, h = t.map((f) => f.readings.find((b) => Kt(b).device_class === "temperature")).filter(Boolean).map((f) => Number(S[f].state)).filter(Number.isFinite), [w, M] = [Aa(Math.min(...h)), Aa(Math.max(...h))], I = t.flatMap((f) => i(f, /^media_player\./)), N = I.filter((f) => {
      var b;
      return ((b = S[f]) == null ? void 0 : b.state) === "playing";
    }).length, F = qt(), X = F.filter((f) => f.severity === "warning" && f.on).length, lt = a.locks.filter((f) => {
      var b;
      return ["unlocked", "jammed", "open"].includes((b = S[f]) == null ? void 0 : b.state);
    }).length, dt = a.alarms.filter((f) => {
      var b;
      return ((b = S[f]) == null ? void 0 : b.state) === "disarmed";
    }).length, J = X ? At(X, "warning", "warnings") : null, ut = lt ? lt + " unlocked" : dt ? dt + " disarmed" : J ? null : "All secure", U = Ze(), St = t.flatMap((f) => f.solar), G = St.find((f) => f.endsWith("_power")), Ht = {
      light: u.length && { value: v ? v + " on" : "All off", groups: l((f) => f.lights) },
      climate: h.length && { value: w === M ? w + "°" : w + " - " + M + "°", groups: l((f) => [...f.readings.filter((b) => ["temperature", "humidity"].includes(Kt(b).device_class)), ...i(f, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [J, ut].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((f) => f.ids.length) },
      media_players: I.length && { value: N ? N + " playing" : "No media playing", groups: l((f) => i(f, /^media_player\./)) },
      maintenance: U,
      energy: ae.grid && { value: Jo(Number(((d = S[G]) == null ? void 0 : d.state) || 0) * 1e3 + Number(S[ae.grid].state)) + " now", groups: [{ name: "Energy", ids: [...St, ae.grid] }] }
    }, e = [], r = F.filter((f) => f.severity !== "warning" && f.on);
    return r.length && e.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: At(r.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: r.map((f) => f.entity) }] }), We().forEach((f) => {
      f.type !== "summary" ? e.push({ key: "path:" + f.path, name: f.label || f.path, icon: f.icon || "mdi:link-variant", colour: "", value: "" }) : !f.hidden && Ht[f.key] && !(Q.hiddenSums || []).includes(f.key) && e.push({ key: f.key, ...ac[f.key], ...Ht[f.key] });
    }), e;
  }
  const dn = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + rt(t.key) + '" data-k="sum:' + rt(t.key) + '" aria-label="' + rt(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Di() + '"' : t.colour && fa(t.colour) ? ' style="' + fa(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Sr : "") + '<div class="tfIcon" aria-hidden="true"' + Je(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + rt(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + rt(t.value) + "</div>" : "") + "</div></div>";
  function ii(t) {
    const a = Gt();
    Q = { ...Q, favourites: a.includes(t) ? a.filter((i) => i !== t) : [...a, t], favHidden: (Q.favHidden || []).filter((i) => i !== t) }, La(), ka();
  }
  function za(t) {
    document.querySelector("home-assistant") && (ot.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Jn(t, a) {
    if (t.startsWith("path:")) {
      za(t.slice(5));
      return;
    }
    To("summary:" + t, a);
  }
  async function xe() {
    const t = (h) => Promise.resolve().then(() => E(h)).catch(() => null), [a, i, l, u] = await Promise.all([
      t({ type: "frontend/get_user_data", key: up }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), v = (a == null ? void 0 : a.value) || {};
    Q = { favourites: v.favourites ?? null, sources: v.sources, hiddenSums: v.hiddenSums, dash: v.dash, named: v.named, favHidden: v.favHidden, suggest: v.suggest, favSeeded: v.favSeeded }, Ct = (i == null ? void 0 : i.value) || {}, Lt = (l == null ? void 0 : l.value) || {}, Qt = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], le = null, Object.keys(S).length && ka(), cn(), Dt = !0, $t();
  }
  const Qn = "HomeCore";
  async function cn() {
    var l, u, v;
    const t = location.pathname.split("/")[1], a = Q.named || [];
    if (!((u = (l = o()) == null ? void 0 : l.user) != null && u.is_admin) || !t || a.includes(t)) return;
    const i = () => {
      Q = { ...Q, named: [...a, t] }, La();
    };
    try {
      const h = (v = await E({ type: "lovelace/dashboards/list" })) == null ? void 0 : v.find((I) => I.url_path === t);
      if (!h || h.mode === "yaml") return;
      if (h.title === Qn) {
        i();
        return;
      }
      const w = await E({ type: "lovelace/config", url_path: t }), M = ((w == null ? void 0 : w.views) || []).flatMap((I) => [...I.cards || [], ...(I.sections || []).flatMap((N) => N.cards || [])]);
      if (!M.length || !M.every((I) => (I == null ? void 0 : I.type) === "custom:move-assistant-card" && I.layout === "test-focus")) return;
      await E({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Qn }), i();
    } catch {
    }
  }
  let Ka = null, to = 0, Ho = !1;
  const ri = (t) => {
    const a = t.split(".")[0], i = Kt(t).device_class;
    return dm.includes(a) && (a !== "binary_sensor" || ud.includes(i) || !!xp[i]);
  }, ba = (t) => t.startsWith("binary_sensor.") ? xp[Kt(t).device_class] : null;
  async function Vs() {
    var t;
    if (!(Ho || Date.now() - to < 30 * 1e3)) {
      Ho = !0, to = Date.now();
      try {
        const a = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(ri), i = a.length ? await E({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        Ka = Array.isArray(i) ? i.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        Ka = null;
      }
      Ho = !1, ka();
    }
  }
  function ss() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = (u) => {
      if (!S[u.entity_id] || !ri(u.entity_id) || !ds(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      if (ba(u.entity_id)) {
        const h = a.get(u.entity_id);
        u.state === "on" ? (!h || u.when > h.when + 1) && a.set(u.entity_id, { ...u, alarm: !0, cleared: null }) : h && !h.cleared && u.when > h.when && (h.cleared = u.when);
        return;
      }
      const v = t.get(u.entity_id);
      (!v || u.when > v.when + 1) && t.set(u.entity_id, u);
    };
    [...Ka || []].sort((u, v) => u.when - v.when).forEach(i);
    const l = Ka ? to / 1e3 - 5 : 0;
    return Object.keys(S).forEach((u) => {
      var w;
      const v = S[u], h = v.last_changed ? Date.parse(v.last_changed) / 1e3 : 0;
      h > l && i({ entity_id: u, state: v.state, when: h, context_user_id: (w = v.context) == null ? void 0 : w.user_id });
    }), [...t.values(), ...a.values()].sort((u, v) => v.when - u.when).slice(0, pm);
  }
  function Sl(t) {
    var l;
    const a = t.context_user_id && Object.keys(S).find((u) => u.startsWith("person.") && Kt(u).user_id === t.context_user_id);
    if (a) return Nt(a);
    const i = (l = o()) == null ? void 0 : l.user;
    return i && t.context_user_id === i.id ? i.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Sd(t) {
    const a = t.entity_id.split(".")[0], i = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || _e(i).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || _e(i).toLowerCase() : a === "binary_sensor" ? i === "on" ? "opened" : "closed" : a === "climate" ? i === "off" ? "turned off" : "set to " + _e(i).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || _e(i).toLowerCase() : a === "alarm_control_panel" ? (wp[i] || _e(i)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || _e(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : _e(i).toLowerCase();
  }
  function Va(t) {
    const a = t.entity_id, i = t.alarm && ba(a), l = Nt(a) + " " + (i ? i[0] : Sd(t)), u = i ? In(t.when * 1e3) + (t.cleared ? " · " + i[1] + " since " + In(t.cleared * 1e3) : "") : [Sl(t), In(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Je(a, Ln(a)) + '></div><button class="tfName" type="button" data-more="' + rt(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + rt(l + ", " + u + ". More info") + '"><span class="activityRowName">' + rt(l) + '</span><span class="activityRowMeta">' + rt(u) + "</span></button></div>";
  }
  let mo = null, si = 0;
  const Cd = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Cl() {
    var a;
    if (Date.now() - si < 5 * 60 * 1e3) return;
    si = Date.now();
    const t = [];
    try {
      const i = ((a = await E({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (u) => i.filter((v) => v.type === u).flatMap((v) => u === "grid" ? (v.flow_from || []).map((h) => h.stat_energy_from) : [v.stat_energy_from]).filter(Boolean);
      for (const [u, v, h] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!h.length) continue;
        const w = await Promise.all(h.map((M) => Promise.resolve(E({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((I) => Number(I == null ? void 0 : I.change) || 0, () => 0)));
        t.push({ key: u, name: v, id: h[0], ids: h, value: w.reduce((M, I) => M + I, 0), unit: Kt(h[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    mo = t, ka();
  }
  let zi = null, Gs = [];
  function Ar() {
    var v;
    const t = Gs = mo != null && mo.length ? mo : Cd.map(([h, w, M, I]) => {
      if (h === "solar") {
        const F = Object.keys(S).find((X) => X.endsWith("_solar_today") && !X.includes("made_up_energy"));
        F && Number.isFinite(Number(S[F].state)) && (M = Number(S[F].state));
      }
      const N = "sensor.made_up_energy_" + h;
      return S[N] = { entity_id: N, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: w + " today", unit_of_measurement: I, state_class: "total_increasing" } }, { key: h, name: w, id: N, value: M, unit: I };
    });
    zt.clear(), t.some((h) => h.id === zi) || (zi = t[0].id);
    const a = t.map((h) => {
      const w = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, M = um[h.key], I = h.id === zi;
      return zt.set(h.id, { name: h.name, text: w, icon: M }), '<div class="activityRow tap' + (I ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + rt(h.id) + '" aria-pressed="' + I + '" aria-label="' + rt(h.name + ", " + w) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Je("", M, h.name) + '></div><div><div class="activityRowName">' + rt(h.name) + '</div><div class="activityRowMeta">' + rt(w) + "</div></div></div>";
    }), i = t.find((h) => h.id === zi), l = (((v = ye().opts.energy) == null ? void 0 : v.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + rt(i.id) + '" role="img" aria-label="' + rt(i.name) + ', last 24 hours"></svg></div>';
    return Kn("dash:energy", 0, "Energy today", a, u, Da().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function Us(t) {
    const a = _.querySelector(".tfDash-energy"), i = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !i || t === zi || (zi = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const u = l.dataset.energyPick === t;
      l.classList.toggle("picked", u), l.setAttribute("aria-pressed", String(u));
    }), i.dataset.graph = t, i.dataset.drawn = "", Ge.set("dash:energy", Ar()), nl(!0));
  }
  const Vi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ls = /* @__PURE__ */ new Map();
  async function go(t) {
    const a = /* @__PURE__ */ new Date(), i = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), u = a.getMinutes() / 60, v = Array.from({ length: 24 }, (w, M) => M <= l ? 0 : null);
    if (!t.ids) {
      const w = Vi[t.key] || Vi.electricity, M = w.map((N, F) => F < l ? N : F === l ? N * u : 0), I = M.reduce((N, F) => N + F, 0) || 1;
      return v.map((N, F) => N == null ? null : t.value * M[F] / I);
    }
    const h = ls.get(t.id);
    if (h && h.day === i && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const w = await E({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((N) => ((w == null ? void 0 : w[N]) || []).forEach((F) => {
        const X = typeof F.start == "number" ? F.start : Date.parse(F.start), lt = new Date(X).getHours();
        X >= i && lt < l && (v[lt] += Number(F.change) || 0);
      }));
      const M = new Date(a).setMinutes(0, 0, 0), I = await Promise.all(t.ids.map((N) => Promise.resolve(E({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(M).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((F) => Number(F == null ? void 0 : F.change) || 0, () => 0)));
      v[l] = I.reduce((N, F) => N + F, 0);
    } catch {
    }
    return ls.set(t.id, { at: Date.now(), day: i, hours: v }), v;
  }
  async function _r(t, a) {
    const i = await go(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), u = Math.max(60, t.clientHeight || 130), v = 18, h = u - 18, w = l / 24, M = w * 0.72, I = (/* @__PURE__ */ new Date()).getHours(), N = i.map((ut) => ut ?? 0), F = Math.max(0, ...N), X = (ut) => h - (F > 0 ? ut / F * (h - v) : 0), lt = (ut) => ut.toLocaleString(void 0, { maximumFractionDigits: ut < 10 ? 2 : 1 }) + " " + a.unit, dt = (ut) => String(ut).padStart(2, "0") + ":00", J = F > 0 ? N.indexOf(F) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + u), t.setAttribute("aria-label", a.name + " today by the hour: " + lt(a.value) + (J >= 0 ? ", most " + lt(F) + " at " + dt(J) : "")), t.innerHTML = [v, (v + h) / 2, h].map((ut) => '<line x1="0" x2="' + l + '" y1="' + ut + '" y2="' + ut + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((ut, U) => ut > 0 ? '<rect x="' + (U * w + (w - M) / 2).toFixed(1) + '" y="' + X(ut).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (h - X(ut)).toFixed(1) + '" rx="2" fill="' + (U === I ? "var(--primary)" : "var(--text)") + '"' + (U === I ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((ut) => '<text x="' + (ut * w).toFixed(1) + '" y="' + (u - 3) + '">' + String(ut).padStart(2, "0") + "</text>").join("") + (J >= 0 ? '<text x="0" y="11">Most: ' + rt(lt(F)) + " at " + dt(J) + "</text>" : "");
  }
  function Ys(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((i, l) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Tl(t) {
    var l;
    if ((l = window.matchMedia) != null && l.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, i] = t.querySelectorAll("path");
    Wp(t, i, [a].filter(Boolean));
  }
  let Gi = null, Zs = 0;
  const ds = (t) => !t.startsWith("light.") || fm.includes((Se.get(t) || "").toLowerCase()), Fo = () => Math.max(2, ma((_ == null ? void 0 : _.clientWidth) || 0).n), Ll = (t) => {
    const a = Xn(t);
    return a.sections.map((i, l) => i && (a.parts || [])[l]).filter(Boolean);
  }, Al = (t) => Ll(t).slice(0, Xi(t) - 1);
  function cs(t) {
    const a = ye().tiles;
    if (a) return a.filter((l) => S[l] || tt(l));
    if (!Gi) {
      const l = (u) => {
        var v;
        return (((v = S[u]) == null ? void 0 : v.state) === "on" ? 1e6 : 0) + (ia[u] || 0);
      };
      Gi = {
        lights: ae.rooms.flatMap((u) => u.lights).filter((u) => {
          var v;
          return ds(u) && ((v = S[u]) == null ? void 0 : v.state) !== "unavailable";
        }).sort((u, v) => l(v) - l(u) || Nt(u).localeCompare(Nt(v))),
        climates: ae.rooms.flatMap((u) => u.actions.filter((v) => v.startsWith("climate.")))
      };
    }
    const i = Gi.climates.filter((l) => S[l]).slice(0, t > 3 ? 2 : 1);
    return [...Gi.lights.filter((l) => S[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const Ui = (t, a, i, l) => (u) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + i + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function Yi(t, a) {
    var v, h;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + rt(((h = (v = o()) == null ? void 0 : v.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (w) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ui("tfDash-bar", "sums-bar", "Summaries", !1)(w).replace(" data-tf", "") + "</div>", tiles: a.map((w) => ({ key: "sum:" + w.key, html: dn(w) })) }), z.length && t.push({ key: "areas", html: Z(0) });
    const i = _t();
    i.length && t.push({ key: "favs", wrap: Ui("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((w) => ({ key: "fav:" + w, html: Xt(w, { area: !0 }) })) });
    const l = ss();
    t.push({ key: "dash:act", html: Kn("dash:act", 0, "Activity", l.length ? l.map(Va) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Ar() });
    const u = Fo();
    return Zs = u, cs(u >= 3 ? u : u * 2).forEach((w) => t.push({
      key: "dash:tile:" + w,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + rt(w) + '">' + M + "</div>",
      tiles: [{ key: w, html: pt(w) ? gt(tt(w), w) : fo(w, !1, Al(w)) }]
    })), Vs(), Cl(), t;
  }
  const _n = 252, Re = 16, Zi = 200, Er = Math.round(_n * 1.25), Ki = 60, wa = Ki + Re, _l = 3, Td = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, ps = ["wx", "favs", "act", "energy", "avg"], vo = ["XS", "S", "M", "L", "XL"], li = vo.length, di = ["Narrow", "Wide", "Really wide"], $i = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, El = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && qn(t) ? li : Math.min(li, Ll(t).length + 1), Xi = (t) => {
    const a = ye().opts[t] || {}, i = El(t), l = Number(a.h) || (a.tall ? 5 : $i[t] || Ks);
    return Math.max(1, Math.min(i, l));
  }, Ks = 2, Ld = 90, us = 56, Na = (t) => {
    var a;
    return Td[t] || (t.startsWith("room:") ? ((a = z.find((i) => "room:" + i.id === t)) == null ? void 0 : a.name) || "Area" : Nt(t));
  }, bo = 409, $s = 128;
  let Ga = !1, Ae = null, la = null, Dr = !1, ci = /* @__PURE__ */ new Map(), fs = 0, Oo = 0;
  const wo = ["title", "sums"], ma = (t) => {
    const a = Math.max(1, Math.floor((t + Re) / (Zi + Re)));
    return { n: a, w: Math.max(1, Math.min(Er, Math.floor((t - (a - 1) * Re) / a))) };
  }, ye = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...Q.dash || {} }, a = he.filter((i) => !(t.known || []).includes(i) && !t.hidden.includes(i));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function hs(t) {
    Q = { ...Q, dash: { ...t, known: he } }, La();
  }
  function Ji() {
    const t = (a) => _.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", ua.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", ua.avg, 2],
      ...he.map((a) => [a, ua[a], 1]),
      ...[..._.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, i, l, u = !1]) => ({ key: a, el: i, span: l, tile: u }));
  }
  const ms = (t, a, i) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && ye().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((bo + Math.max(0, z.length - 1) * ($s + Re) + Re) / (i + Re))) : Math.min(a, ye().spans[t.key] ?? t.span);
  }, gs = (t) => Xi(t.key);
  function Br(t, a, i = null) {
    const l = ye().cells, u = t.every((w) => !l[w.key] || l[w.key].col + w.cols <= a), v = (w) => l[w.key] || { row: 1e9, col: 0 };
    return (() => {
      const w = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), I = (J, ut, U, St) => {
        for (let G = ut; G < ut + St; G++) for (let Ht = J; Ht < J + U; Ht++) if (w.has(Ht + "," + G)) return !1;
        return !0;
      }, N = (J, ut, U) => {
        for (let St = U; St < U + J.rows; St++) for (let G = ut; G < ut + J.cols; G++) w.add(G + "," + St);
        M.set(J.key, { col: ut, row: U, cols: J.cols, rows: J.rows });
      }, F = (J, ut, U) => {
        for (ut = Math.max(0, Math.min(a - J.cols, ut)), U = Math.max(0, U); !I(ut, U, J.cols, J.rows); ) U++;
        N(J, ut, U);
      }, X = (J) => {
        for (let ut = 0; ; ut++) for (let U = 0; U <= a - J.cols; U++) if (I(U, ut, J.cols, J.rows)) {
          N(J, U, ut);
          return;
        }
      };
      i && F(i, Ae.col, Ae.row);
      const lt = t.filter((J) => J !== i), dt = (J, ut) => v(J).row - v(ut).row || v(J).col - v(ut).col;
      return u ? (lt.filter((J) => l[J.key]).sort(dt).forEach((J) => F(J, l[J.key].col, l[J.key].row)), lt.filter((J) => !l[J.key]).forEach(X), M) : ([...lt].sort(dt).forEach(X), M);
    })();
  }
  function Dl(t, a) {
    const i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = (v, h, w) => {
      for (let M = h; M < h + w.rows; M++) for (let I = v; I < v + w.cols; I++) if (i.has(I + "," + M)) return !1;
      return !0;
    };
    return t.forEach((v) => {
      for (let h = 0; ; h++) {
        let w = 0;
        for (; w <= a - v.cols && !u(w, h, v); ) w++;
        if (!(w > a - v.cols)) {
          for (let M = h; M < h + v.rows; M++) for (let I = w; I < w + v.cols; I++) i.add(I + "," + M);
          l.set(v.key, { col: w, row: h, cols: v.cols, rows: v.rows });
          return;
        }
      }
    }), l;
  }
  function vs() {
    const t = ye(), a = new Set(t.hidden), i = Ji().filter((h) => !wo.includes(h.key));
    let l = ci;
    if (!l.size) {
      const h = t.pegs || 4, w = i.filter((M) => !a.has(M.key));
      w.forEach((M) => {
        M.cols = ms(M, h, _n), M.rows = gs(M) ?? Ks;
      }), l = Br(w, h);
    }
    const u = (h) => !a.has(h.key) && l.get(h.key) || { row: 1e9, col: 0 };
    i.sort((h, w) => u(h).row - u(w).row || u(h).col - u(w).col);
    const v = (t.phone || []).map((h) => i.find((w) => w.key === h && !a.has(h))).filter(Boolean);
    return [...v, ...i.filter((h) => !v.includes(h))];
  }
  const Ad = () => {
    const t = vs();
    t.forEach((a, i) => a.el.style.setProperty("--o", String(3 + i))), Bl([...Ji().filter((a) => wo.includes(a.key)), ...t].map((a) => a.el));
  };
  function Bl(t) {
    if (Ae) return;
    const a = n.activeElement;
    let i = null;
    for (const l of new Set(t.map((u) => {
      for (; u && u.parentElement !== _; ) u = u.parentElement;
      return u;
    }).filter(Boolean))) {
      const u = i ? i.nextSibling : _.querySelector(":scope > [data-tf]");
      if (l !== u)
        try {
          _.moveBefore ? _.moveBefore(l, u) : _.insertBefore(l, u);
        } catch {
          _.insertBefore(l, u);
        }
      i = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const pi = (t, a) => hs({ ...t, cells: a, pegs: ma(_.clientWidth).n });
  function da() {
    var St;
    if (!k || !_) return;
    const t = _.clientWidth, a = t < 2 * _n + Re, i = m.classList.contains("tfDash"), { n: l, w: u } = a ? { n: 2, w: Math.floor((t - Re) / 2) } : ma(t);
    ne.classList.add("tfPegs"), ne.style.setProperty("--peg-n", l), ne.style.setProperty("--peg-w", u + "px");
    const v = new Set(ye().hidden);
    he.forEach((G) => {
      var Ht;
      return (Ht = ua[G]) == null ? void 0 : Ht.classList.toggle("tfNotAdded", v.has(G) && !(Ae != null && Ae.fromTray && Ae.key === G));
    }), m.classList.toggle("tfBoard", i), m.classList.toggle("tfEditing", i && Ga && !a);
    const h = c("dashEditNav");
    h && (h.hidden = !i || a, h.classList.toggle("active", Ga), h.setAttribute("aria-pressed", String(Ga)), h.setAttribute("aria-label", Ga ? "Done editing" : "Edit the dashboard"), h.title = Ga ? "Done" : "Edit", h.innerHTML = Ga ? im : bp);
    const w = i ? Ji() : [];
    if (!i) {
      _.style.height = "", _.querySelectorAll(".tfBoardItem").forEach((G) => {
        G.classList.remove("tfBoardItem", "tfBoardHidden"), G.style.left = G.style.top = G.style.width = G.style.height = "";
      }), (St = _.querySelector(".tfDash-act > .activityRows")) == null || St.style.removeProperty("max-height"), Rl(!1), m.classList.contains("tfDash") && Ad(), ya();
      return;
    }
    _.style.setProperty("--peg-w", u + "px");
    const M = new Set(ye().hidden), I = u + Re;
    Ae != null && Ae.fromTray && M.delete(Ae.key), w.forEach((G) => G.el.classList.toggle("tfBoardHidden", M.has(G.key)));
    const N = w.filter((G) => !M.has(G.key) && getComputedStyle(G.el).display !== "none");
    let F = 0;
    N.filter((G) => wo.includes(G.key)).forEach((G) => {
      G.el.classList.add("tfBoardItem"), Object.assign(G.el.style, { width: t + "px", height: "", left: "0px", top: F + "px" });
      const Ht = G.key === "sums" && G.el.querySelector(".tfDash-bar"), e = Ht ? Ht.querySelectorAll(".activityRow").length : 0;
      Ht && (Ht.style.maxWidth = "none");
      for (let r = 1; Ht && r <= e && (Ht.style.setProperty("--bar-cols", String(Math.ceil(e / r))), !(Ht.offsetWidth <= t)); r++)
        ;
      Ht && (Ht.style.maxWidth = ""), F += G.el.offsetHeight + Re;
    }), Oo = F;
    const X = N.filter((G) => !wo.includes(G.key));
    X.forEach((G) => {
      G.cols = ms(G, l, u), G.el.classList.add("tfBoardItem"), G.el.style.width = (G.cols === l ? t : G.cols * u + (G.cols - 1) * Re) + "px", G.el.style.height = "", G.rows = gs(G) ?? Math.max(1, Math.ceil((G.el.offsetHeight + Re - 6) / wa));
    });
    const lt = Ae && X.find((G) => G.key === Ae.key), dt = a && vs().map((G) => G.key), J = (G) => dt.includes(G.key) ? dt.indexOf(G.key) : -1, ut = a ? Dl([...X].sort((G, Ht) => J(G) - J(Ht)), l) : Br(X, l, lt);
    ut.forEach((G) => Object.assign(G, { x: G.cols === l ? 0 : G.col * I, y: Oo + G.row * wa, w: G.cols === l ? t : G.cols * u + (G.cols - 1) * Re, h: G.rows * wa - Re })), X.forEach((G) => {
      const Ht = ut.get(G.key);
      G.el.style.height = Ht.h + "px", G.el.dataset.rows = a && G.key === "wx" ? 5 : Xi(G.key), G.el.toggleAttribute("data-narrow", !a && Ht.cols === 1 && l > 1), G.el.dataset.cols = Ht.cols, G.el.classList.contains("tfDac") && G.el.style.setProperty("--tf-dac-pad", Ht.h - Ld + "px"), !(G === lt && !Ae.fromTray) && (G.el.style.left = Ht.x + "px", G.el.style.top = Ht.y + "px");
    }), a || (ci = ut), Bl([...N.filter((G) => wo.includes(G.key)), ...X.slice().sort((G, Ht) => ut.get(G.key).row - ut.get(Ht.key).row || ut.get(G.key).col - ut.get(Ht.key).col)].map((G) => G.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([G, Ht]) => {
      const e = ut.get(G), r = e && _.querySelector(Ht), d = r == null ? void 0 : r.querySelector(":scope > .activityRows"), f = r == null ? void 0 : r.querySelector(":scope > .activityHeader");
      if (!d || !f) return;
      const b = d.getBoundingClientRect().top - r.getBoundingClientRect().top, A = e.rows === 1 ? e.h : Math.floor(e.h - b - parseFloat(getComputedStyle(r).paddingBottom)), H = Math.max(1, Math.floor(A / us));
      d.style.setProperty("--fill-row", (A / H).toFixed(2) + "px"), d.style.maxHeight = A + "px";
    }), fs = Math.max(0, ...[...ut.values()].map((G) => G.row + G.rows));
    let U = Oo + fs * wa - Re;
    U = Rl(Ga && !a, X, ut, U, l, u), _.style.height = U + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), w.forEach((G) => bs.observe(G.el)), nl(), ya();
  }
  const pn = () => {
    Dr || (Dr = !0, requestAnimationFrame(() => {
      Dr = !1, da();
    }));
  }, bs = new ResizeObserver(() => {
    Ae || pn();
  });
  function Rr(t, a, i) {
    const l = i + Re, u = t * i + (t - 1) * Re, v = a * wa - Re, h = Re / 2, w = l / Math.max(1, Math.round(l / (wa / 4))), M = wa / 4, I = 6;
    let N = "";
    for (let F = 0; F <= t; F++) for (let X = 0; X <= a; X++) {
      const lt = F * l - h, dt = X * wa - h;
      N += "M" + (lt - I) + " " + dt + "H" + (lt + I) + "M" + lt + " " + (dt - I) + "V" + (dt + I);
    }
    return '<svg width="' + u + '" height="' + v + '" viewBox="0 0 ' + u + " " + v + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -h + '" y="' + -h + '" width="' + w.toFixed(3) + '" height="' + M + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + w.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + M + '" r="1.4"></circle><circle cx="' + w.toFixed(3) + '" cy="' + M + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -h + '" y="' + -h + '" width="' + (u + Re) + '" height="' + (v + Re) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + N + '"></path></svg>';
  }
  function Rl(t, a = [], i = /* @__PURE__ */ new Map(), l = 0, u = 1, v = _n) {
    _.querySelectorAll(".tfEditChips").forEach((N) => {
      (!t || !N.closest(".tfBoardItem")) && N.remove();
    }), _.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), _.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((F) => {
      F.classList.contains("tfEditChips") || F.toggleAttribute("inert", t);
    }));
    let h = _.querySelector(".tfBoardCells"), w = _.querySelector(".tfBoardLand");
    if (!t)
      return h == null || h.remove(), w == null || w.remove(), En(), l;
    const M = fs + _l;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), _.prepend(h)), h.style.top = Oo + "px", h.dataset.size !== u + "x" + M + "x" + v && (h.dataset.size = u + "x" + M + "x" + v, h.innerHTML = Rr(u, M, v)), l = Math.max(l, Oo + M * wa - Re), a.forEach((N) => {
      const F = N.el;
      !F || F.querySelector(":scope > .tfEditChips") || F.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + nc + '</span><button class="tfEditChip" type="button" data-board-more="' + rt(N.key) + '" aria-label="' + rt(Na(N.key)) + ' options" aria-haspopup="menu">' + nm + "</button></div>");
    }), Ae && i.has(Ae.key)) {
      w || (w = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), _.appendChild(w));
      const N = i.get(Ae.key);
      Object.assign(w.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else w == null || w.remove();
    const I = _.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (I) {
      const N = I.getBoundingClientRect();
      I.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...I.querySelectorAll('[data-k^="fav:"]')].map((F) => {
        const X = F.getBoundingClientRect(), lt = F.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + rt(lt) + '" aria-label="Hide ' + rt(Nt(lt)) + ' from the dashboard" style="left:' + Math.round(X.right - N.left - 42) + "px;top:" + Math.round(X.top - N.top + (X.height - 32) / 2) + 'px">' + mp + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let ws = "";
  function $a(t) {
    Ga = t, t || (Ae = null, Mo = So = !1, En()), da(), t ? ws = JSON.stringify(Q) : ws && JSON.stringify(Q) !== ws && un("Changes saved");
  }
  function Nr(t, a) {
    var ut, U;
    En();
    const i = ci.get(t), { n: l } = ma(_.clientWidth), u = ye(), v = u.spans[t] ?? (pt(t) ? 1 : 2);
    if (!i) return;
    const h = i.cols >= l, w = (St, G, Ht) => '<button type="button" role="menuitem" data-board-act="' + St + '"' + (Ht ? " disabled" : "") + ">" + G + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Na(t) + " options");
    const I = _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), N = El(t), F = Xi(t), X = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + vo.map((St, G) => '<button type="button" role="menuitemradio" aria-checked="' + (G + 1 === F) + '" aria-label="' + St + ", " + (G + 1) + (G ? " rows" : " row") + '" data-board-act="h:' + (G + 1) + '"' + (G < N ? "" : " disabled") + ">" + St + "</button>").join("") + "</div></div>", lt = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], dt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + lt.map(([St, G, Ht]) => '<button type="button" role="menuitemradio" aria-checked="' + (Ht && (G === "full" ? i.cols === l : i.cols === G && !(G === l && u.spans.areas === "full"))) + '" aria-label="' + St + (G === "full" ? "" : ", " + G + " columns") + '" data-board-act="w:' + G + '"' + (Ht ? "" : " disabled") + ">" + St + "</button>").join("") + "</div></div>" : ps.includes(t) || pt(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + di.map((St, G) => '<button type="button" role="menuitemradio" aria-checked="' + (G + 1 === Math.min(v, l)) + '" aria-label="' + St + ", " + (G + 1) + (G ? " columns" : " column") + '" data-board-act="w:' + (G + 1) + '"' + (G < l ? "" : " disabled") + ">" + St + "</button>").join("") + "</div></div>" : "";
    M.innerHTML = X + dt + (t === "energy" ? w("graph", (((ut = u.opts.energy) == null ? void 0 : ut.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + w("left", "Move left", h || i.col === 0) + w("right", "Move right", h || i.col + i.cols >= l) + w("up", "Move up", i.row <= 0) + w("down", "Move down") + (I ? w("remove", "Remove") : w("hide", "Hide")), _.appendChild(M);
    const J = Math.min(i.x + i.w - M.offsetWidth, _.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, J) + "px", top: i.y + 28 + "px" }), la = { key: t, menu: M, opener: a }, (U = M.querySelector("button:not([disabled])")) == null || U.focus();
  }
  function En(t) {
    if (!la) return;
    const { menu: a, opener: i } = la;
    la = null, a.remove(), t && (i == null || i.focus());
  }
  const Dn = () => Object.fromEntries([...ci].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Nl(t, a) {
    var w, M;
    if (a === "remove") {
      En(), Js(t);
      return;
    }
    const i = Q, l = ye(), u = Dn(), v = u[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((w = l.opts.energy) == null ? void 0 : w.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (u[t] = { ...v, col: v.col - 1 }), a === "right" && (u[t] = { ...v, col: v.col + 1 }), a === "up" && (u[t] = { ...v, row: v.row - 1 }), a === "down" && (u[t] = { ...v, row: v.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Ae = { key: t, col: u[t].col, row: u[t].row }), pi(l, u), Ae && (da(), Ae = null, pi(ye(), Dn()));
    const h = /^[hw]:/.test(a) && !Cn() && (la == null ? void 0 : la.menu.querySelector('[data-board-act="' + CSS.escape(a) + '"]'));
    if (h) {
      const I = la;
      h.parentElement.querySelectorAll("[aria-checked]").forEach((N) => N.setAttribute("aria-checked", String(N === h))), setTimeout(() => {
        la === I && En();
      }, na.tabs.dur);
    } else En();
    a === "graph" && (Ge.delete("dash:energy"), ka()), a.startsWith("h:") && t.includes(".") && ka(), da(), a !== "hide" ? (M = _.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || M.focus() : un(Na(t) + " hidden", er(i));
  }
  const qo = (t) => {
    var a;
    return he.includes(t) && !(((a = Q.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function Xs(t) {
    const a = ye(), i = Na(t) + qo(t);
    hs({ ...a, hidden: a.hidden.filter((l) => l !== t) }), da(), un(i);
  }
  const Bn = () => ye().tiles || [..._.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ye().hidden.includes(t));
  function Pr(t, a) {
    const i = ye();
    pi({ ...i, tiles: t, hidden: i.hidden.filter((l) => !l.includes(".")) }, a), ka(), ya();
  }
  const Pl = (t) => {
    Pr([...Bn().filter((a) => a !== t), t], Dn()), un(Na(t) + " added"), Hl(t);
  }, Js = (t) => {
    const a = Q, i = Dn();
    delete i[t], Pr(Bn().filter((l) => l !== t), i), un(Na(t) + " removed", er(a));
  };
  let Qs = 0;
  function un(t, a = null) {
    var h;
    const i = c("toast");
    if (!i) return;
    if (Bf(i, t), a) {
      const w = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      w.addEventListener("click", () => {
        clearTimeout(Qs), i.classList.remove("show", "withAction"), a();
      }), i.appendChild(w);
    }
    const l = m.getBoundingClientRect(), u = (h = n.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), v = Fe.classList.contains("open") && !ao ? Math.min(l.right, Fe.getBoundingClientRect().left) : l.right;
    i.style.left = (l.left + v) / 2 + "px", i.style.bottom = (u != null && u.height ? window.innerHeight - u.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!a), Rf(i), clearTimeout(Qs), Qs = setTimeout(() => i.classList.remove("show", "withAction"), a ? 5e3 : na.confirm.stay);
  }
  const xo = 700, _d = 1e3, Xa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Xa.setAttribute("role", "tooltip"), Xa.setAttribute("aria-hidden", "true"), m.appendChild(Xa);
  let Ir = null, eo = 0, Qi = 0, ui = -1 / 0;
  const tl = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Il = (t) => {
    for (let a = t; a && a !== m; a = a.parentElement) if (tl(a)) return a;
    return null;
  };
  function fi(t, a) {
    clearTimeout(eo), clearTimeout(Qi);
    const i = () => {
      if (!t.isConnected) return;
      Ir = t, Xa.textContent = a, Xa.hidden = !1;
      const l = t.getBoundingClientRect(), u = Xa.getBoundingClientRect(), v = l.top - u.height - 8 >= 8 ? l.top - u.height - 8 : l.bottom + 8;
      Xa.style.left = Math.max(8, Math.min(window.innerWidth - u.width - 8, l.left + l.width / 2 - u.width / 2)) + "px", Xa.style.top = v + "px";
    };
    !Xa.hidden || performance.now() - ui < _d ? i() : eo = setTimeout(i, xo);
  }
  function yo() {
    clearTimeout(eo), clearTimeout(Qi), Xa.hidden || (ui = performance.now()), Xa.hidden = !0, Ir = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Xa.contains(t.target)) {
      clearTimeout(Qi);
      return;
    }
    const a = Il(t.target);
    if (a && It.names === "scroll" && a.matches(He)) {
      tr(a);
      return;
    }
    if (a) {
      a !== Ir ? fi(a, a.textContent.trim()) : clearTimeout(Qi);
      return;
    }
    clearTimeout(eo), clearTimeout(Qi), Qi = setTimeout(yo, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let i = [a, ...a.querySelectorAll("*")].filter(tl);
    It.names === "scroll" && (i.filter((u) => u.matches(He)).forEach(tr), i = i.filter((u) => !u.matches(He))), i.length && fi(a, i.map((u) => u.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === Ir && yo();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Xa.hidden && (t.stopPropagation(), yo());
  }, !0), window.addEventListener("scroll", () => {
    (!Xa.hidden || eo) && yo();
  }, { capture: !0, passive: !0 });
  const He = ".activityRowName,.activityRowMeta", ko = /* @__PURE__ */ new WeakSet();
  function tr(t) {
    var i;
    if (It.names !== "scroll" || ko.has(t) || t.closest("[inert]") || (i = window.matchMedia) != null && i.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ko.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((l) => l.getAnimations()).map((l) => l.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const l = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (l < 2) {
        ko.delete(t);
        return;
      }
      const u = l / 30 * 1e3, v = u + 1e3 + u;
      t.style.textOverflow = "clip";
      const h = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -l + "px", offset: u / v },
        { textIndent: -l + "px", offset: (1e3 + u) / v, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: v });
      h.onfinish = h.oncancel = () => {
        t.style.textOverflow = "", ko.delete(t);
      };
    }, 600);
  }
  const xs = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (xs.unobserve(a.target), tr(a.target));
  }), { threshold: 1 });
  let Ba = !1;
  new MutationObserver(() => {
    Ba || It.names !== "scroll" || (Ba = !0, setTimeout(() => {
      Ba = !1, n.querySelectorAll(He).forEach((t) => {
        !t.dataset.glided && tl(t) && (t.dataset.glided = "1", xs.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const er = (t) => () => {
    Q = t, La(), ka(), da(), ya();
  };
  function Hl(t) {
    const a = () => _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var h;
      const i = a();
      if (!i) return;
      const l = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, u = i.getBoundingClientRect();
      (u.top < 0 || u.bottom > window.innerHeight) && i.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const v = (w) => "0 0 0 4px color-mix(in srgb,var(--primary) " + w + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + w + "%,transparent)";
      i.animate([{ boxShadow: v(55) }, { boxShadow: v(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, Fl(t) ? 260 : 0);
  }
  function Fl(t) {
    const a = ci.get(t);
    if (!a || !Fe.classList.contains("open") || ao) return !1;
    const { n: i, w: l } = ma(_.clientWidth), u = Fe.getBoundingClientRect().left - _.getBoundingClientRect().left, v = (M) => M * (l + Re) + a.cols * l + (a.cols - 1) * Re <= u;
    if (v(a.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    ci.forEach((M, I) => {
      if (I !== t) for (let N = M.row; N < M.row + M.rows; N++) for (let F = M.col; F < M.col + M.cols; F++) h.add(F + "," + N);
    });
    const w = (M, I) => {
      for (let N = I; N < I + a.rows; N++) for (let F = M; F < M + a.cols; F++) if (h.has(F + "," + N)) return !1;
      return !0;
    };
    for (let M = 0; M <= fs; M++) for (let I = 0; I + a.cols <= i && v(I); I++)
      if (w(I, M))
        return pi(ye(), { ...Dn(), [t]: { col: I, row: M } }), da(), !0;
    return !1;
  }
  const Ol = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Fe = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Fe.setAttribute("aria-label", "Edit the dashboard"), Fe.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Fe);
  let ao = !1, Mo = !1, So = !1, ar = !1, xa = null, fn = !1;
  const el = {}, Wo = (t, a) => {
    if (el[t] === a) return;
    el[t] = a;
    const i = Fe.querySelector('[data-tray="' + t + '"]');
    i.innerHTML = a, _a(i);
  }, al = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + rt(Nt(t)) + '</span><span class="activityRowMeta">' + rt(a) + "</span></span>", Ed = (t, a, i) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + rt(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + nc + '</span><span class="tfIcon"' + Je(t, Ln(t)) + "></span>" + al(t, a ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || Ve(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + rt(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + rt(Nt(t)) + ' on the dashboard">' + (a ? mp : om) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + rt(t) + '" aria-label="Remove ' + rt(Nt(t)) + ' from favourites">' + gp + "</button>" : "<span></span>") + "</li>";
  function ql(t, a, i, l) {
    const u = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((h) => a(h) && !i.has(h) && S[h].state !== "unavailable").filter((h) => {
      const w = (Nt(h) + " " + (Se.get(h) || "") + " " + h).toLowerCase();
      return u.every((M) => w.includes(M));
    }).sort((h, w) => (Se.get(h) || "~").localeCompare(Se.get(w) || "~") || Nt(h).localeCompare(Nt(w))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + rt(h) + '"><span class="tfIcon"' + Je(h, Ln(h)) + "></span>" + al(h, Se.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ya() {
    const t = Ga && m.classList.contains("tfBoard");
    if (Fe.classList.toggle("open", t), Fe.classList.toggle("tucked", t && ao), Fe.toggleAttribute("inert", !t), t || (fn = !1), ir(), !t) return;
    const a = Fe.querySelector("[data-tray-tuck]");
    a.innerHTML = ao ? np : vp, a.setAttribute("aria-expanded", String(!ao)), a.setAttribute("aria-label", ao ? "Show the edit tray" : "Tuck the edit tray away");
    const i = ye().hidden.filter((h) => Ji().some((w) => w.key === h));
    Wo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + rt(h) + '" aria-label="' + rt(Na(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + nc + "</span>" + rt(Na(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Wo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ye().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + fn + '">' + (fn ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(Q.favHidden || []), u = Gt(), v = [...u, ...[...l].filter((h) => !u.includes(h) && S[h])];
    if (Wo("favs", v.map((h) => Ed(h, l.has(h), u.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Fe.querySelector('[data-pick="tiles"]').hidden = !So, Fe.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(So)), So && Wo("tilepick", ql(Fe.querySelector("[data-tile-search]").value, (h) => fd.includes(h.split(".")[0]), new Set(Bn()), "data-tile-pick")), Fe.querySelector('[data-tray="roompick"]').hidden = !ar, Fe.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ar)), ar) {
      const h = new Set(Bn());
      Wo("roompick", z.filter((w) => !h.has("room:" + w.id)).map((w) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + rt(w.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Je("area:" + w.id, w.icon || "mdi:texture-box", w.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + rt(w.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Fe.querySelector('[data-pick="favs"]').hidden = !Mo, Fe.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Mo)), Mo && Wo("pick", ql(Fe.querySelector("[data-fav-search]").value, (h) => Ol.test(h), new Set(Gt()), "data-fav-pick")), Wo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (jt() ? " on" : "") + '" type="button" role="switch" aria-checked="' + jt() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const jn = (t) => {
    Q = { ...Q, ...t }, La(), ka(), ya();
  };
  function jo(t, a) {
    const i = Q, l = new Set(Q.favHidden || []);
    a ? l.delete(t) : l.add(t), jn({ favHidden: [...l] }), a ? un(Nt(t) + " put back") : un(Nt(t) + " hidden", er(i));
  }
  const zo = (t) => {
    const a = Q;
    jn({ favourites: Gt().filter((i) => i !== t), favHidden: (Q.favHidden || []).filter((i) => i !== t) }), un(Nt(t) + " removed from favourites", er(a));
  }, Wl = (t) => {
    jn({ favourites: [...Gt().filter((a) => a !== t), t], favHidden: (Q.favHidden || []).filter((a) => a !== t) }), un(Nt(t) + " added to favourites");
  };
  Fe.addEventListener("click", (t) => {
    var i;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? $a(!1) : a.hasAttribute("data-tray-tuck") ? (ao = !ao, ya()) : a.hasAttribute("data-phone-toggle") ? (fn = !fn, ya(), fn && ((i = Pa.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (Xs(a.dataset.trayCard), ya()) : a.dataset.favEye ? jo(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? zo(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (Mo = !Mo, ya(), Mo && Fe.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? Wl(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (So = !So, ya(), So && Fe.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Pl(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (ar = !ar, ya()) : a.dataset.roomPick ? Pl("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && jn({ suggest: !jt() }));
  }), Fe.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ya();
  }), Fe.addEventListener("keydown", (t) => {
    var i, l;
    const a = !!((l = (i = t.target).closest) != null && l.call(i, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? So : Mo) || (t.stopPropagation(), a ? So = !1 : Mo = !1, ya(), Fe.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function hi(t, a, i, l) {
    t.preventDefault();
    const u = t.clientX, v = t.clientY;
    let h = null, w = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), I = (F) => {
      if (!h) {
        if (Math.hypot(F.clientX - u, F.clientY - v) < 4) return;
        h = a.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = a.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (F.clientX - 24) + "px," + (F.clientY - 24) + "px)";
      const X = !ao && F.clientX >= Fe.getBoundingClientRect().left;
      if (i === "card") {
        const J = _.getBoundingClientRect(), { w: ut } = ma(_.clientWidth);
        Ae = !X && F.clientX >= J.left && F.clientX <= J.right && F.clientY >= J.top + Oo ? { key: l, col: Math.max(0, Math.floor((F.clientX - J.left) / (ut + Re))), row: Math.max(0, Math.floor((F.clientY - J.top - Oo) / wa)), fromTray: !0 } : null, w || (w = requestAnimationFrame(() => {
          w = 0, da();
        }));
        return;
      }
      const lt = _.querySelector(".tfDash-favs"), dt = lt == null ? void 0 : lt.getBoundingClientRect();
      if (xa = null, dt && !X && F.clientX >= dt.left && F.clientX <= dt.right && F.clientY >= dt.top && F.clientY <= dt.bottom) {
        let J = 1 / 0;
        lt.querySelectorAll('[data-k^="fav:"]').forEach((ut, U) => {
          const St = ut.getBoundingClientRect(), G = Math.hypot(F.clientX - (St.left + St.width / 2), F.clientY - (St.top + St.height / 2));
          G < J && (J = G, xa = { i: U, r: St, after: F.clientX > St.left + St.width / 2 });
        }), xa || (xa = { i: 0, r: null, after: !1 });
      }
      xa != null && xa.r ? (M.isConnected || m.appendChild(M), Object.assign(M.style, { left: (xa.after ? xa.r.right : xa.r.left) - 2 + "px", top: xa.r.top + 8 + "px", height: xa.r.height - 16 + "px" })) : M.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", I), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(w), h == null || h.remove(), M.remove(), i === "card") {
        if (!h) Xs(l);
        else if (Ae != null && Ae.fromTray) {
          da();
          const J = Na(l) + qo(l), ut = ye(), U = Dn();
          Ae = null, pi({ ...ut, hidden: ut.hidden.filter((St) => St !== l) }, U), un(J);
        }
        Ae = null, da(), ka(), ya();
        return;
      }
      if (!xa) return;
      const F = new Set(Q.favHidden || []);
      F.delete(l);
      const X = Gt().filter((J) => J !== l), lt = X.filter((J) => !F.has(J)), dt = lt[Math.min(xa.i + (xa.after ? 1 : 0), lt.length)];
      X.splice(dt ? X.indexOf(dt) : X.length, 0, l), xa = null, jn({ favourites: X, favHidden: [...F] }), un(Nt(l) + " put back");
    };
    window.addEventListener("pointermove", I), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const jl = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, nr = 136, Dd = 288, or = 0.8, Bd = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Pa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Pa.setAttribute("aria-label", "Phone order"), Pa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + gp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(Pa);
  let Vo = "";
  function ir() {
    var w;
    const t = fn && Ga && m.classList.contains("tfBoard") && !ao;
    if (Pa.classList.toggle("open", t), Pa.toggleAttribute("inert", !t), !t) return;
    const a = vs().filter((M) => !ye().hidden.includes(M.key)), i = a.length, l = (M) => Math.round(M * or * 10) / 10 + "px", u = (M, I) => {
      const N = M.el.classList.contains("tfDac"), F = M.tile ? N ? Dd : nr : jl[M.key] || nr;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + rt(M.key) + '" style="min-height:' + l(F) + '" aria-label="' + rt(Na(M.key) + ", " + (I + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? Je(M.key, Ln(M.key)) : Je(M.key, Bd[M.key])) + '></span><span class="tfPhoneName">' + rt(Na(M.key)) + "</span></button>";
    }, v = '<div class="tfPhoneTitle">' + rt(((w = _.querySelector(".tfDashTitle")) == null ? void 0 : w.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(jl.sums) + '"><span class="tfPhoneName">' + rt(Na("sums")) + "</span></div>" + a.map(u).join("");
    if (Pa.querySelector('[data-phone="note"]').innerHTML = ye().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", v === Vo) return;
    Vo = v;
    const h = Pa.querySelector('[data-phone="list"]');
    h.innerHTML = v, _a(h);
  }
  function ys(t, a) {
    var i;
    hs({ ...ye(), phone: t }), ya(), a && ((i = Pa.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const Hr = () => [...Pa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function rr(t, a) {
    t.preventDefault();
    const i = a.parentElement, l = Pa.querySelector(".tfPhoneScreen"), u = Hr().join();
    a.classList.add("moving");
    const v = (w) => {
      const M = l.getBoundingClientRect();
      w.clientY > M.bottom - 40 ? l.scrollTop += 12 : w.clientY < M.top + 40 && (l.scrollTop -= 12);
      const I = [...i.querySelectorAll("[data-phone-key]")].find((X) => {
        const lt = X.getBoundingClientRect();
        return X !== a && w.clientX >= lt.left && w.clientX <= lt.right && w.clientY >= lt.top && w.clientY <= lt.bottom;
      });
      if (!I) return;
      const N = I.getBoundingClientRect(), F = I.classList.contains("tile") ? w.clientX < N.left + N.width / 2 : w.clientY < N.top + N.height / 2;
      i.insertBefore(a, F ? I : I.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), a.classList.remove("moving");
      const w = Hr();
      Vo = "", w.join() !== u ? ys(w) : ir();
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  Pa.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && rr(t, a);
  }), Pa.addEventListener("click", (t) => {
    var i;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      fn = !1, ya(), (i = Fe.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...u } = ye();
      hs(u), ya();
    }
  }), Pa.addEventListener("keydown", (t) => {
    var h, w, M, I;
    if (t.key === "Escape") {
      t.stopPropagation(), fn = !1, ya(), (h = Fe.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const a = (I = (M = (w = t.target).closest) == null ? void 0 : M.call(w, "[data-phone-key]")) == null ? void 0 : I.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !i) return;
    t.preventDefault();
    const l = Hr(), u = l.indexOf(a), v = u + i;
    v < 0 || v >= l.length || ([l[u], l[v]] = [l[v], l[u]], ys(l, a));
  });
  function sr(t, a) {
    t.preventDefault();
    const i = a.parentElement;
    a.classList.add("moving");
    const l = (v) => {
      const h = [...i.children].find((w) => {
        const M = w.getBoundingClientRect();
        return w !== a && v.clientY >= M.top && v.clientY <= M.bottom;
      });
      if (h) {
        const w = h.getBoundingClientRect();
        i.insertBefore(a, v.clientY < w.top + w.height / 2 ? h : h.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const v = new Set(Gt());
      el.favs = null, jn({ favourites: [...i.children].map((h) => h.dataset.trayFav).filter((h) => v.has(h)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  Fe.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), i = t.target.closest(".tfTrayFav");
    a ? hi(t, a, "card", a.dataset.trayCard) : i && t.target.closest(".tfTrayGrip") ? sr(t, i) : i != null && i.classList.contains("off") && !t.target.closest("button") && hi(t, i, "fav", i.dataset.trayFav);
  });
  function hn(t) {
    if (!Ga || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), i = a && Ji().find((d) => d.el === a);
    if (!i || wo.includes(i.key)) return;
    const l = ci.get(i.key), { w: u } = ma(_.clientWidth);
    if (!l) return;
    t.preventDefault(), En();
    const v = t.clientX, h = t.clientY;
    let w = !1, M = 0;
    const I = na.drag, N = Cn();
    let F = 0, X = 0, lt = 0, dt = 0, J = 0, ut = 0, U = N || I.stick === 0, St = 0;
    const G = (d, f, b, A) => {
      a.style.transform = "translate(" + lt.toFixed(2) + "px," + dt.toFixed(2) + "px) rotate(" + d.toFixed(2) + "deg) rotate(" + f + "rad) scale(" + b.toFixed(4) + "," + A.toFixed(4) + ") rotate(" + -f + "rad)";
    }, Ht = () => {
      if (St = requestAnimationFrame(Ht), N) {
        lt = F, dt = X, G(0, 0, 1, 1);
        return;
      }
      if (!U) {
        const H = Math.min(Math.hypot(F, X) / Math.max(1, I.stick), 1);
        lt = F * 0.35, dt = X * 0.35, G(0, Math.atan2(X, F), 1 + 0.155 * H, 1 - 0.1 * H);
        return;
      }
      J = Bc(J, F - lt, I.pull / 100, I.keep / 100), ut = Bc(ut, X - dt, I.pull / 100, I.keep / 100), lt += J, dt += ut;
      const d = Math.hypot(J, ut), f = Math.min(d / 48, 1), b = Math.max(-5, Math.min(I.tilt, J * 0.32)), A = 1 + I.lift / 100;
      G(b, Math.atan2(ut, J), A * (1 + 0.1 * f), A * (1 - 0.063 * f));
    }, e = (d) => {
      if (F = d.clientX - v, X = d.clientY - h, !w) {
        if (Math.hypot(F, X) < 4) return;
        w = !0, Ae = { key: i.key, col: l.col, row: l.row }, a.classList.add("tfDragging", "mvDrag"), St = requestAnimationFrame(Ht);
      }
      !U && Math.hypot(F, X) > I.stick && (U = !0, J = F * 0.085, ut = X * 0.085), Ae.col = Math.round((l.x + F) / (u + Re)), Ae.row = Math.round((l.y + X - Oo) / wa), M || (M = requestAnimationFrame(() => {
        M = 0, da();
      }));
    }, r = () => {
      var Mt;
      if (window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", r), window.removeEventListener("pointercancel", r), !w) return;
      cancelAnimationFrame(M), cancelAnimationFrame(St);
      const d = a.getBoundingClientRect(), f = i.key;
      a.style.transition = "none", da(), a.classList.remove("tfDragging", "mvDrag"), a.style.transform = "", Ae = null, pi(ye(), Dn()), da(), ka();
      const b = (Mt = Ji().find((vt) => vt.key === f)) == null ? void 0 : Mt.el;
      if (requestAnimationFrame(() => {
        a.style.transition = "", b && (b.style.transition = "");
      }), !b || N) return;
      b.style.transition = "none";
      const A = b.getBoundingClientRect(), H = d.left + d.width / 2 - (A.left + A.width / 2), Y = d.top + d.height / 2 - (A.top + A.height / 2);
      b.style.zIndex = "20", b.animate([{ transform: "translate(" + H + "px," + Y + "px) scale(" + (1 + I.lift / 100) + ")" }, { transform: "none" }], { duration: I.slide, easing: oa.land }).finished.then(() => {
        b.style.zIndex = "", Nf(b);
      }, () => {
        b.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", e), window.addEventListener("pointerup", r), window.addEventListener("pointercancel", r);
  }
  function nl(t = !1) {
    const a = _ == null ? void 0 : _.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const i = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === i) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = i;
    const u = Gs.find((v) => v.id === a.dataset.graph);
    u ? _r(a, u).then(() => {
      (t || l) && Ys(a);
    }) : Ua(a.dataset.graph, a).then(() => {
      t && Tl(a);
    });
  }
  function ol() {
    var w, M, I;
    ae = be.model(o()), $t(), S = ae.states, S[(w = Q.sources) == null ? void 0 : w.grid] && (ae.grid = Q.sources.grid), S[(M = Q.sources) == null ? void 0 : M.alarm] && (ae.security.alarms = [Q.sources.alarm]), q.forEach((N, F) => {
      const X = S[F], lt = (X == null ? void 0 : X.attributes) || {};
      if (!X || Date.now() - N.at > 2 * 60 * 1e3) {
        q.delete(F);
        return;
      }
      N.pos != null && X.state !== "opening" && X.state !== "closing" && Math.abs(Hn(F) - N.pos) < 1 && delete N.pos, N.tilt != null && Math.abs((lt.current_tilt_position ?? -1) - N.tilt) < 1 && delete N.tilt, N.pos == null && N.tilt == null && q.delete(F);
    });
    const t = [];
    let a = 0;
    const i = yt();
    z = i.filter((N) => N.room).map((N) => N.room), z.some((N) => N.id === Tt) || (Tt = ((I = z[0]) == null ? void 0 : I.id) || null);
    const l = at === "weather" ? { key: "weather", name: "Weather" } : at && i.find((N) => N.key === at);
    if (l || (at = null), m.classList.toggle("tfAreaOpen", !!l), m.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), m.classList.toggle("tfDash", !l), Se = /* @__PURE__ */ new Map(), ae.rooms.forEach((N) => [...N.actions, ...N.plugs, ...N.readings, ...N.openings, ...N.solar, ...N.plants.flatMap((F) => [F.id, ...F.readings])].forEach((F) => Se.set(F, N.name))), !l) return Yi(t, Da());
    if (t.push({ key: "areahead", html: il(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const u = l.ids, v = l.room ? l.room.id : l.key, h = l.room;
    return h != null && h.solar.length && t.push({ key: "energy:" + h.id, html: ns(h, ++a) }), h && (h.readings.length || h.plugs.length || h.power != null) && t.push({ key: "readings:" + h.id, html: co(h, ++a) }), h == null || h.plants.forEach((N) => t.push({ key: "plant:" + N.id, html: Ni(N, ++a) })), u.length && t.push({ key: "block:" + v, order: ++a, tiles: u.map((N) => ({ key: N, html: fo(N) })) }), t;
  }
  const il = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + np + '</button><div class="settingsTitle">' + rt(t.name) + "</div></div>";
  let zl = 0, ks = null;
  const Ms = (t) => t === "weather" ? ua.wx : t.startsWith("room:") && _.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || _.querySelector(".tfAreas");
  function Fr(t) {
    var a, i;
    at || (zl = dr().scrollTop, ks = ((a = Ms(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), at = t, t.startsWith("room:") && (Tt = t.slice(5)), je(), dr().scrollTop = 0, (i = _.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let mi = null;
  function lr(t, a) {
    if (mi == null || mi(), a == null) return;
    const i = dr(), l = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let v = 0;
    const h = () => {
      cancelAnimationFrame(v), u.forEach((M) => window.removeEventListener(M, h, !0)), mi = null;
    }, w = () => {
      const M = t();
      if (M != null && M.isConnected) {
        const I = M.getBoundingClientRect().top - a;
        Math.abs(I) > 0.5 && (i.scrollTop += I);
      }
      performance.now() < l ? v = requestAnimationFrame(w) : h();
    };
    u.forEach((M) => window.addEventListener(M, h, { capture: !0, passive: !0 })), mi = h, w();
  }
  function Ss() {
    var i;
    const t = at;
    at = null, je(), dr().scrollTop = zl, lr(() => Ms(t), ks);
    const a = t.startsWith("room:") ? _.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || _.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ua.wx.querySelector(".wbOpenPage") : _.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (i = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || i.focus({ preventScroll: !0 });
  }
  const Rd = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + rt(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Cs = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function dr() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Ja(t) {
    const a = dr(), i = (w) => {
      const M = w.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, l = [..._.children, ..._.querySelectorAll(".tfDashTiles > *")].find((w) => !w.matches(".tfDashTiles") && i(w)), u = l == null ? void 0 : l.dataset.k, v = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const h = l != null && l.isConnected ? l : u && _.querySelector('[data-k="' + CSS.escape(u) + '"]');
    h != null && h.isConnected && v != null && (a.scrollTop += h.getBoundingClientRect().top - v);
  }
  function je() {
    if (!k || !_) return;
    const t = ol(), a = (u) => {
      var v;
      return (((v = u.closest("[data-k]")) == null ? void 0 : v.dataset.k) || "") + "|" + u.dataset.iconFor + "|" + (u.dataset.iconName || "");
    }, i = /* @__PURE__ */ new Map();
    _.querySelectorAll("[data-tf] [data-icon-for]").forEach((u) => {
      u.firstElementChild && (i.get(a(u)) || i.set(a(u), []).get(a(u))).push(u.firstElementChild);
    }), _.querySelectorAll("[data-tf]").forEach((u) => u.remove()), Ge.clear();
    const l = document.createElement("div");
    l.innerHTML = t.map((u) => u.tiles ? Rd(u) : u.html).join(""), t.forEach((u) => u.tiles ? u.tiles.forEach((v) => Ge.set(v.key, v.html)) : Ge.set(u.key, u.html)), Jr = Cs(t), l.querySelectorAll("[data-icon-for]").forEach((u) => {
      var h;
      const v = !u.firstElementChild && ((h = i.get(a(u))) == null ? void 0 : h.shift());
      v && u.appendChild(v);
    }), _.append(...l.children), kr(t.weather), Mr(), bs.disconnect(), da(), _a(_), cl(_), Po(_), $(), K && Ua(K.id), fr(), Co(), Kl(), requestAnimationFrame(wt);
  }
  const Ts = (t) => {
    var i;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (i = a.dataset) == null ? void 0 : i.act };
  }, rl = (t, a) => {
    var i;
    a && ((i = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function Ls(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const i = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), l = a.querySelector(":scope > .tfDacPad");
    if (i)
      return (l == null ? void 0 : l.dataset.dac) !== i.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((h) => a.hasAttribute(h) ? t.setAttribute(h, a.getAttribute(h)) : t.removeAttribute(h)), [...t.style].filter((h) => h.startsWith("--") && !h.startsWith("--tf-")).forEach((h) => t.style.removeProperty(h)), [...a.style].forEach((h) => t.style.setProperty(h, a.style.getPropertyValue(h))), t);
    const u = (h) => {
      var w;
      return ((w = h.dataset) == null ? void 0 : w.iconFor) !== void 0;
    };
    if (u(t) && u(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
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
    return [...t.children].forEach((h, w) => Ls(h, v[w])), t;
  }
  function Nd(t, a) {
    const i = document.createElement("div");
    i.innerHTML = a;
    const l = Ts(t), u = Ls(t, i.firstElementChild);
    _a(u), cl(u), Po(u), rl(u, l);
  }
  function ka() {
    !k || !_ || Ae || Ja(Vl);
  }
  function Vl() {
    if (!_.querySelector("[data-tf]")) {
      je();
      return;
    }
    const t = ol();
    if (Cs(t) !== Jr) {
      je();
      return;
    }
    const a = (i) => [...T.keys()].some((l) => {
      const u = l.slice(l.indexOf("|") + 1);
      return i === u || i.endsWith(":" + u);
    });
    t.forEach((i) => (i.tiles || [i]).forEach((l) => {
      if (Ge.get(l.key) === l.html || a(l.key)) return;
      const u = _.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (u) {
        if (Ge.set(l.key, l.html), K && K.key === l.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = lo(K.id);
          return;
        }
        Nd(u, l.html), K && K.key === l.key && Ua(K.id), l.key.startsWith("energy:") && fr();
      }
    })), Co(), Kl(), An(), $(), Jt == null || Jt.update(), va == null || va.forEach((i) => i.update()), m.classList.contains("tfDash") && pn(), requestAnimationFrame(wt);
  }
  const gi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && _e(t.color_mode)]],
    climate: (t) => [["Current temperature", Aa(t.current_temperature) + " °C"], ["Target", Aa(t.temperature) + " °C"], ["Action", _e(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", _e(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", _e(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Aa(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : _e(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Gl = (t) => Zo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function vi(t, a = {}, i = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + rt(l.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + l.ids.map((u) => Xt(u, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const ee = document.createElement("div");
  ee.className = "tfMoreBackdrop", ee.hidden = !0, m.appendChild(ee);
  const Ul = (t, a) => {
    for (let i = t; i && i !== ee; i = i.parentElement) {
      const l = getComputedStyle(i).overflowY;
      if ((l === "auto" || l === "scroll") && i.scrollHeight > i.clientHeight + 1 && (a < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let mn = null;
  ee.addEventListener("touchstart", (t) => {
    mn = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), ee.addEventListener("touchmove", (t) => {
    var u, v;
    if (!mn || t.touches.length > 1 || (v = (u = t.target).closest) != null && v.call(u, "input,textarea,select")) return;
    const a = t.touches[0], i = mn.x - a.clientX, l = mn.y - a.clientY;
    mn = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(i) && !Ul(t.target, l) && t.preventDefault();
  }, { passive: !1 }), ee.addEventListener("wheel", (t) => {
    var a, i;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((i = (a = t.target).closest) != null && i.call(a, "[data-more-pages]")) || Ul(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Or() {
    const t = ee.querySelector(".tfMorePair"), a = ee.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Or, { passive: !0 }), k && pa();
  let Go = [];
  const cr = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function As(t) {
    const a = (M, I = "") => '<div class="tfMoreHead">' + (ct != null && ct.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + rt(M) + "</div>" + I + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>", i = (M, I) => '<div class="tfMoreNow"><div class="tfMoreState">' + rt(M) + "</div></div>", l = vi;
    if (t === "favourites") {
      const M = Gt(), I = new Set(M), N = [{ name: "Starred", ids: M }, { name: "Home", ids: ae.homeVacuums }, { name: "Security", ids: [...ae.security.alarms, ...ae.security.locks] }, ...ae.rooms.map((F) => ({ name: F.name, ids: [...F.actions, ...F.plugs] }))].map((F, X) => X ? { ...F, ids: F.ids.filter((lt) => !I.has(lt)) } : F).filter((F) => F.ids.length);
      return [a("Favourites"), i(M.length ? M.length + " starred" : "None starred"), l(N, { star: !0 }, !0)];
    }
    const u = (M, { name: I = "", alert: N = !1, plain: F = !1 } = {}) => {
      const X = F ? [] : M.filter((J) => fd.includes(J.split(".")[0])), lt = M.filter((J) => !X.includes(J)), dt = (J) => J.startsWith("vacuum.") && Kt(J).battery_level != null ? Kt(J).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (I ? '<div class="tfMoreGroupName">' + rt(I) + "</div>" : "") + '<div class="tfMoreActions">' + X.map((J) => fo(J, !0)).join("") + lt.map((J) => Xt(J, { plain: F, alert: N, say: F ? dt(J) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = Da().find((X) => X.key === t.slice(8));
      if (!M) return null;
      const I = M.key === "light" ? (M.groups || []).flatMap((X) => X.ids) : [], N = I.some((X) => {
        var lt;
        return ((lt = S[X]) == null ? void 0 : lt.state) === "on";
      }), F = I.length ? '<button class="primary" type="button" data-acts="' + Qo(I.map((X) => ["light", N ? "turn_off" : "turn_on", X])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(M.name), '<div class="tfMoreNowRow">' + i(M.value) + F + "</div>", ...(M.groups || []).map((X) => u(X.ids, { name: X.name === M.name ? "" : X.name, alert: X.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, I] = t.split(":"), N = ae.rooms.find((lt) => lt.id === M), F = N && oi(N).find((lt) => lt.key === I);
      if (!F) return null;
      const X = F.acts ? '<button class="primary" type="button" data-acts="' + Qo(F.acts) + '">' + (F.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(N.name + " " + F.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(F.value) + X + "</div>", u(Wa(N, I))];
    }
    const v = t.split(".")[0];
    S[t];
    const h = fd.includes(v) ? Xn(t) : { sections: [] }, w = (ct == null ? void 0 : ct.page) || 0;
    return [
      Yl(t, h),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Pd(t) + (v === "plant" ? ra(t).join("") : "") + h.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + Zl(t) + "</section></div>",
      '<div class="tfMoreDots" role="tablist" aria-label="Pages">' + ["Control", "Info"].map((M, I) => '<button type="button" role="tab" aria-selected="' + (I === w) + '" aria-label="' + M + '" data-more-page="' + I + '"' + (I === w ? "" : ' tabindex="-1"') + "></button>").join("") + "</div>"
    ];
  }
  function Yl(t, a, i) {
    var h, w, M, I, N;
    const l = (h = ae.areaOf) == null ? void 0 : h.call(ae, t), u = l && (((w = ae.rooms.find((F) => F.id === l)) == null ? void 0 : w.name) || ((N = (I = (M = o()) == null ? void 0 : M.areas) == null ? void 0 : I[l]) == null ? void 0 : N.name)) || "", v = a.button ? uo(t, a) : '<div class="tfIcon"' + Je(t, a.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (a.on ? " on" : "") + '"' + (a.tone ? ' data-tone="' + a.tone + '"' : "") + ro(t) + ">" + (ct != null && ct.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + v + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + rt(Nt(t)) + "</span>" + (u ? '<span class="activityRowMeta">' + rt(u) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + op + "</button></div>";
  }
  const sl = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Pd(t) {
    const a = t.split(".")[0];
    if (sl.includes(a) || a === "light" && !ai(t)) return "";
    if (a === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + rt(t) + '"></div></div>';
    if (a === "light" && ai(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + rt(t) + '"></div></div>';
    const { big: i, lines: l } = Rn(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (me("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + rt(i[0]) + "</span>" + (i[1] ? '<span class="tfMoreUnit">' + rt(i[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + l.map(([u, v]) => '<div class="tfMoreFact"><span>' + rt(u) + "</span><span>" + rt(v) + "</span></div>").join("") + "</div></div>";
  }
  function Rn(t) {
    var N;
    const a = S[t], i = Kt(t), l = t.split(".")[0], u = (((N = gi[l]) == null ? void 0 : N.call(gi, i)) || []).filter(([, F]) => F != null && F !== ""), v = (F) => {
      const X = u.findIndex(([lt]) => lt === F);
      return X < 0 ? null : u.splice(X, 1)[0][1];
    }, h = (F) => {
      const X = String(F).match(/^(-?[\d.,]+)\s*(.*)$/);
      return X ? [X[1], X[2]] : [String(F), ""];
    }, w = () => [_e(String(a.state).replace(/_/g, " ")), ""];
    let M;
    l === "light" ? (v("Brightness"), M = a.state === "on" && Tn(t) ? [String(Un(a)), "%"] : w()) : l === "climate" ? M = h(v("Current temperature") || Aa(i.current_temperature) + " °C") : l === "cover" ? (v("Position"), M = i.current_position != null ? [String(Hn(t)), "%"] : w()) : l === "humidifier" ? M = h(v("Current humidity") || a.state) : l === "vacuum" ? M = h(v("Battery") || a.state) : l === "plant" ? M = h(v("Moisture") || a.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(l) ? M = w() : M = h(a.state + (i.unit_of_measurement ? " " + i.unit_of_measurement : ""));
    const I = u.length ? u.slice(0, 4) : [["State", Ve(t)]];
    return { big: M, lines: I };
  }
  function Zl(t) {
    var I, N, F, X, lt, dt, J;
    const a = S[t], i = o(), l = (I = i == null ? void 0 : i.entities) == null ? void 0 : I[t], u = l != null && l.device_id ? (N = i == null ? void 0 : i.devices) == null ? void 0 : N[l.device_id] : null, v = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + rt(t) + '" role="img" aria-label="' + rt(Nt(t)) + ', last 24 hours"></svg></div>', h = (F = ae.areaOf) == null ? void 0 : F.call(ae, t), w = h && (((X = ae.rooms.find((ut) => ut.id === h)) == null ? void 0 : X.name) || ((dt = (lt = i == null ? void 0 : i.areas) == null ? void 0 : lt[h]) == null ? void 0 : dt.name)) || "", M = [
      ...((J = gi[t.split(".")[0]]) == null ? void 0 : J.call(gi, Kt(t))) || [],
      ["Changed", a.last_changed && Cr(Date.parse(a.last_changed))],
      ["Area", w],
      ["Device", u && (u.name_by_user || u.name)],
      ["Integration", (l == null ? void 0 : l.platform) && _e(l.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, ut]) => ut != null && ut !== "");
    return v + '<div class="tfMoreRows">' + M.map(([ut, U]) => '<div class="tfMoreRow"><span>' + rt(ut) + "</span><span>" + rt(U) + "</span></div>").join("") + "</div>" + Gl(t) + (u ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + rt(l.device_id) + '"><span>Device page</span>' + vp + "</button>" : "");
  }
  const Id = () => "";
  let ll = "";
  function dl(t) {
    var a;
    ct && (ct.details = t, Co(), (a = ee.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const qr = (t) => {
    const a = S[t], i = Hn(t), l = Le(t);
    return { kind: tc(a), name: Nt(t), text: Ve(t), pos: i, target: Math.abs(l - i) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: Bo(t) ?? 100, canSet: Zt(t, cp) };
  };
  function cl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const i = a.dataset.coverArt, l = a.dataset.artKey || "more:" + i;
      let u = kt.get(l);
      u || (u = jh({ onMove: (v) => Nn(i, v), onSet: (v) => {
        Nn(i, v), wi("pos", i);
      } }), u.coverId = i, kt.set(l, u)), a.replaceWith(u.el), u.update(qr(i));
    });
  }
  const Qa = (t) => [...kt.values()].filter((a) => a.coverId === t), _s = () => kt.forEach((t) => {
    S[t.coverId] && t.update(qr(t.coverId));
  }), Kl = () => {
    kt.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), kt.delete(a));
    }), _s();
  };
  function Co() {
    var v, h;
    if (!ct || !(cr(ct.id) || S[ct.id])) {
      ee.hidden = !0;
      return;
    }
    if ([...T.keys()].some((w) => w.endsWith("|" + ct.id))) {
      _s();
      return;
    }
    const t = As(ct.id), a = ee.querySelector(".tfMore");
    if (!t) {
      Vr();
      return;
    }
    const i = Ts(ee), l = Id(ct.id), u = ct.frame ? ct.frame.wide : ct.id.startsWith("summary:") || ct.id.startsWith("group:");
    if (ee.hidden || !a || t.length !== Go.length || a.classList.contains("wide") !== u) {
      const w = ur ? ct.scroll || 0 : !ee.hidden && a ? a.scrollTop : 0;
      ee.innerHTML = '<div class="tfMorePair' + (ee.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '"' + (ct.frame ? ' style="height:' + ct.frame.h + 'px"' : "") + ">" + t.join("") + "</section></div>", ll = l, ee.classList.toggle("wide", u), ee.hidden = !1, Or(), cl(ee), Po(ee), _a(ee), ee.querySelectorAll("[data-day]").forEach((M) => Jl(M.dataset.day, M, ct.at)), Xl(ee), w && (ee.querySelector(".tfMore").scrollTop = w), pr(), rl(ee, i), ee.contains(n.activeElement) || (v = ee.querySelector("[data-more-close]")) == null || v.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((w, M) => {
        var F, X;
        if (w === Go[M] || w.includes("data-cover-art") || a.children[M].contains((X = (F = n.activeElement) == null ? void 0 : F.matches) != null && X.call(F, "input,select") ? n.activeElement : null) || [...T.keys()].some((lt) => a.children[M].querySelector('[data-drag="' + CSS.escape(lt) + '"]'))) return;
        const I = document.createElement("div");
        I.innerHTML = w;
        const N = Ls(a.children[M], I.firstElementChild);
        _a(N), Xl(N), Po(N);
      }), l !== ll) {
        const w = ee.querySelector(".tfMoreSideBody");
        w && (w.innerHTML = l), ll = l;
      }
      a.querySelectorAll("[data-day]").forEach((w) => {
        w.innerHTML || Jl(w.dataset.day, w, ct.at);
      }), pr(), ee.contains(n.activeElement) || rl(ee, i);
    }
    (h = ee.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(ct.details && l)), Go = t, _s();
  }
  function pr() {
    const t = ee.querySelector("[data-more-pages]");
    !t || !ct || (t.scrollTo({ left: (ct.page || 0) * t.clientWidth, behavior: "instant" }), pl(), Wr(t));
  }
  function Wr(t) {
    const a = t.children[(ct == null ? void 0 : ct.page) || 0];
    a && (t.style.height = a.scrollHeight + "px");
  }
  function pl() {
    const t = (ct == null ? void 0 : ct.page) || 0;
    ee.querySelectorAll("[data-more-page]").forEach((a) => {
      const i = Number(a.dataset.morePage) === t;
      a.setAttribute("aria-selected", String(i)), a.tabIndex = i ? 0 : -1;
    });
  }
  function jr(t, a) {
    var l, u;
    const i = ee.querySelector("[data-more-pages]");
    !i || !ct || (ct.page = Math.max(0, Math.min(1, t)), i.scrollTo({ left: ct.page * i.clientWidth, behavior: (l = window.matchMedia) != null && l.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), pl(), Wr(i), (u = ee.querySelector('[data-more-page="' + ct.page + '"]')) == null || u.focus({ preventScroll: !0 }));
  }
  let zr = 0;
  ee.addEventListener("scroll", (t) => {
    var i;
    const a = t.target;
    !((i = a.matches) != null && i.call(a, "[data-more-pages]")) || !ct || (clearTimeout(zr), zr = setTimeout(() => {
      const l = Math.round(a.scrollLeft / Math.max(1, a.clientWidth));
      l !== (ct.page || 0) && (ct.page = l, pl(), Wr(a));
    }, 80));
  }, !0), setInterval(() => {
    ct && Co();
  }, 15 * 1e3);
  function To(t, a) {
    var u;
    const i = !!(ct && a && ee.contains(a)), l = i && ee.querySelector(".tfMore");
    i && (ct.scroll = l.scrollTop), ct = { id: t, opener: i ? ct.opener : a, back: i ? ct : null, frame: i ? ct.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((u = a == null ? void 0 : a.dataset) == null ? void 0 : u.at) || null }, ul();
  }
  let ur = !1;
  function ul() {
    Go = [], ur = !ee.hidden, kt.forEach((t, a) => {
      a !== ct.id && ee.contains(t.el) && (t.destroy(), kt.delete(a));
    }), Co(), ur = !1;
  }
  function Vr() {
    if (!ct) return;
    const t = ct;
    Ef(ee, () => {
      ct === t && bi();
    });
  }
  function bi() {
    var i, l, u, v, h, w;
    const t = ct == null ? void 0 : ct.opener;
    ct = null, kt.forEach((M, I) => {
      ee.contains(M.el) && (M.destroy(), kt.delete(I));
    }), Oa.forEach((M, I) => {
      I.startsWith("more:") && Oa.delete(I);
    }), ee.hidden = !0, ee.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (i = t == null ? void 0 : t.dataset) != null && i.more ? (l = _.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (v = _.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || v.focus(a) : (h = t == null ? void 0 : t.hasAttribute) != null && h.call(t, "data-favs-edit") && ((w = _.querySelector("[data-favs-edit]")) == null || w.focus(a));
  }
  const $l = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function ra(t) {
    const a = String(Kt(t).problem || ""), i = "sensor." + t.split(".")[1] + "_";
    return a === "none" ? [] : a.split(",").map((l) => l.trim().split(" ")).map(([l, u]) => {
      const v = $l[l], h = i + v;
      if (!v || !S[h] || !Kr[v]) return "";
      const w = Kt(h).unit_of_measurement || "", [M, I] = Kr[v], N = u === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + rt(Nt(h)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + rt(h) + '" data-guide="' + (N ? M : I) + '" data-guide-word="' + rt("Wants " + (N ? "" : "up to ") + (N ? M : I).toLocaleString() + (w === "%" ? "%" : w ? " " + w : "") + (N ? " or more" : "")) + '" role="img" aria-label="' + rt(Nt(h)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Xl = (t) => t.querySelectorAll("[data-plant-graph]").forEach((a) => Ua(a.dataset.plantGraph, a, { guide: Number(a.dataset.guide), guideWord: a.dataset.guideWord }).then(() => Tl(a)));
  function zn(t, a, i, l = {}) {
    const u = a.map((ut) => ut[1]).concat(l.guide != null ? [l.guide] : []), v = l.zero ? 0 : Math.min(...u), h = Math.max(...u), w = Math.max(120, t.clientWidth || 260), M = Math.max(60, t.clientHeight || 130), I = 8, N = M - 20, F = Date.now() - 24 * 3600 * 1e3, X = 24 * 3600 * 1e3, lt = (ut) => Math.max(0, Math.min(w, (ut - F) / X * w)), dt = (ut) => h === v ? (I + N) / 2 : N - (ut - v) / (h - v) * (N - I);
    let J = "M" + lt(a[0][0]).toFixed(1) + " " + dt(a[0][1]).toFixed(1);
    if (a.length > 2) J = Op(a.map((ut) => [lt(ut[0]), dt(ut[1])]));
    else for (let ut = 1; ut < a.length; ut++) J += l.smooth ? "L" + lt(a[ut][0]).toFixed(1) + " " + dt(a[ut][1]).toFixed(1) : "H" + lt(a[ut][0]).toFixed(1) + "V" + dt(a[ut][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + w + " " + M), t.setAttribute("aria-label", i), t.innerHTML = qp(w, I, N) + '<path d="' + J + "V" + N + "H" + lt(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + J + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="' + na.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + w + '" y="' + (M - 4) + '" text-anchor="end">Now</text>' + (l.guide != null ? '<line class="tfGuide" x1="0" x2="' + w + '" y1="' + dt(l.guide).toFixed(1) + '" y2="' + dt(l.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + w + '" y="' + (dt(l.guide) < 20 ? dt(l.guide) + 14 : dt(l.guide) - 5).toFixed(1) + '" text-anchor="end">' + rt(l.guideWord || "") + "</text>" : "");
  }
  const fl = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Hd = (t, a) => {
    const i = t.split(".")[0];
    return fl[i] ? fl[i].includes(a) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, hl = (t) => {
    const a = t.split(".")[0], i = Kt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (ud.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, ml = /* @__PURE__ */ new Map();
  let Es = 0;
  async function Fd(t) {
    let a = ml.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let u = [];
      try {
        const v = await E({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        u = ((v == null ? void 0 : v[t]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      u.length || (u = (Ka || []).filter((v) => v.entity_id === t).map((v) => [v.when * 1e3, String(v.state)])), a = { at: Date.now(), pts: u }, ml.set(t, a);
    }
    const i = S[t], l = a.pts.slice().sort((u, v) => u[0] - v[0]);
    return i && (!l.length || l[l.length - 1][1] !== i.state) && l.push([Date.parse(i.last_changed) || Date.now(), i.state]), l;
  }
  async function Jl(t, a, i) {
    const l = await Fd(t);
    if (!a.isConnected) return;
    const u = l.map(([G, Ht]) => [G, Number(Ht)]);
    if (l.length > 1 && u.every(([, G]) => Number.isFinite(G))) {
      zn(a, u, Nt(t) + ", last 24 hours");
      return;
    }
    const v = Date.now(), h = v - 864e5, w = Math.max(200, a.clientWidth || 360), M = 62, I = (G) => Math.max(0, Math.min(w, (G - h) / 864e5 * w)), N = [];
    let F = null;
    l.forEach(([G, Ht]) => {
      const e = Hd(t, Ht);
      e && F == null ? F = Math.max(G, h) : !e && F != null && (N.push([F, Math.max(G, h)]), F = null);
    }), F != null && N.push([F, v]);
    const X = ba(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", lt = hl(t), dt = "tfDayClip" + ++Es, J = N.map(([G, Ht]) => lt + (Ht >= v - 1e3 && G <= h + 1e3 ? " all day" : Ht >= v - 1e3 ? " since " + In(G) : G <= h + 1e3 ? " until " + In(Ht) : " " + In(G) + "–" + In(Ht)));
    let ut = "", U = -1 / 0;
    N.forEach(([G], Ht) => {
      const e = J[Ht].length * 5.4, r = Math.min(I(G), w - e);
      r < U + 8 || (ut += '<text x="' + r.toFixed(1) + '" y="10">' + rt(J[Ht]) + "</text>", U = r + e);
    });
    let St = '<text x="' + w + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((G) => {
      let Ht = new Date(v).setHours(G, 0, 0, 0);
      Ht > v && (Ht -= 864e5), I(Ht) > 8 && I(Ht) < w - 34 && (St += '<text x="' + I(Ht).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(G).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + w + " " + M), a.setAttribute("aria-label", Nt(t) + ", last 24 hours: " + (J.length ? J.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + dt + '"><rect x="0" y="18" width="' + w + '" height="26" rx="8"/></clipPath>' + ut + '<rect x="0" y="18" width="' + w + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + dt + ')">' + N.map(([G, Ht]) => '<rect x="' + I(G).toFixed(1) + '" y="18" width="' + Math.max(2, I(Ht) - I(G)).toFixed(1) + '" height="26" fill="' + X + '"/>').join("") + "</g>" + (i && i >= h ? '<line x1="' + I(i).toFixed(1) + '" x2="' + I(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + St;
  }
  function Ds(t) {
    var l;
    const a = Number((l = S[t]) == null ? void 0 : l.state), i = Date.now();
    if (Kt(t).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), v = Math.max(1, i - u);
      return [...Array(49)].map((h, w) => u + v * w / 48).map((h) => [h, Math.round(a * Math.pow((h - u) / v, 1.3) * 100) / 100]);
    }
    if (Zo(t) && t.endsWith("_moisture")) return [...Array(48)].map((u, v) => [i - (48 - v) * 30 * 60 * 1e3, Math.round((a + 22 * Math.pow(1 - v / 48, 1.2)) * 10) / 10]);
    if (Zo(t) && t.endsWith("_light")) {
      const u = (h) => {
        const w = new Date(h).getHours() + new Date(h).getMinutes() / 60;
        return Math.max(0, Math.sin((w - 6) / 14 * Math.PI));
      }, v = (h) => 0.8 + 0.2 * u(h);
      return [...Array(48)].map((h, w) => i - (48 - w) * 30 * 60 * 1e3).map((h) => [h, Math.round(a * v(h) / v(i))]);
    }
    return [...Array(48)].map((u, v) => [i - (48 - v) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(v / 6)) * 10) / 10]);
  }
  async function Ua(t, a, i = {}) {
    var dt, J;
    let l = ot.get(t);
    if (t.endsWith("_solar_power")) l = { at: Date.now(), points: Mc() };
    else if (Zo(t)) l = { at: Date.now(), points: Ds(t) };
    else if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const ut = new Date(Date.now() - 864e5).toISOString(), U = await E({ type: "history/history_during_period", start_time: ut, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), St = ((U == null ? void 0 : U[t]) || []).map((G) => [G.lu != null ? G.lu * 1e3 : Date.parse(G.last_updated || G.last_changed), Number(G.s ?? G.state)]).filter(([G, Ht]) => Number.isFinite(G) && Number.isFinite(Ht));
        l = { at: Date.now(), points: St };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      ot.set(t, l);
    }
    const u = a || _.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!u) return;
    const v = S[t], h = ((dt = v == null ? void 0 : v.attributes) == null ? void 0 : dt.unit_of_measurement) || "", w = l.points.slice(), M = Number(v == null ? void 0 : v.state);
    if (Number.isFinite(M) && !t.endsWith("_solar_power") && w.push([Date.now(), M]), w.length < 2) {
      u.setAttribute("aria-label", Nt(t) + ": no history for the last 24 hours"), u.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const I = w.map((ut) => ut[1]), N = Math.min(...I), F = Math.max(...I), X = (ut) => ut.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ut) >= 100 ? 0 : 1 }), lt = ((J = v == null ? void 0 : v.attributes) == null ? void 0 : J.state_class) === "total_increasing";
    zn(u, w, Nt(t) + ", last 24 hours: " + (lt ? "+" + X(I[I.length - 1] - I[0]) : N === F ? X(N) : X(N) + " to " + X(F)) + (h ? " " + h : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...i });
  }
  function fr() {
    const t = _ == null ? void 0 : _.querySelector("[data-solar]");
    if (!t) return;
    const a = Mc();
    zn(t, a, "Solar, last 24 hours: up to " + Aa(Math.max(...a.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Ql(t, a) {
    const i = a.entity_id, l = q.get(i) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Hn(i) > 0 ? 0 : 100 }[t], v = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    u != null && (l.pos = u), v != null && (l.tilt = v), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), q.set(i, l);
  }
  function gl(t, a, i) {
    var u;
    const l = i == null ? void 0 : i.entity_id;
    return t !== "light" || typeof l != "string" || !Za[l] || !Tn(l) || i.brightness_pct != null || i.brightness != null ? [a, i] : a !== "turn_on" && !(a === "toggle" && ((u = S[l]) == null ? void 0 : u.state) !== "on") ? [a, i] : ["turn_on", { ...i, brightness_pct: Za[l] }];
  }
  function Gr(t, a, i, l) {
    let u = { entity_id: i, ...l || {} };
    return [a, u] = gl(t, a, u), t === "cover" && Ql(a, u), ia[i] = (ia[i] || 0) + 1, Ko.set(fp, JSON.stringify(ia)), be.call(t, a, u) ? Promise.resolve() : Promise.resolve(j(t, a, u));
  }
  function Ia(t) {
    const [a, i, l, u] = t.split("|");
    Gr(a, i, l, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function Nn(t, a) {
    T.set("pos|" + t, a), Ge.delete(t), Go = Go.map(() => ""), [_, ee].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((u) => zs(u, a)));
    const i = _.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(a) + "%"), (ct == null ? void 0 : ct.id) === t) {
      const l = ee.querySelector(".tfMoreState"), u = ee.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), u && (u.textContent = "Currently " + Hn(t) + "%");
    }
    Qa(t).forEach((l) => l.update(qr(t)));
  }
  const Ur = (t, a) => {
    const i = t.shiftKey ? 10 : 1, l = { ArrowUp: a + i, ArrowRight: a + i, ArrowDown: a - i, ArrowLeft: a - i, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function Vn(t, a) {
    var J;
    const i = t.dataset.blocks;
    (J = t.setPointerCapture) == null || J.call(t, a.pointerId);
    const l = (ut) => {
      const U = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ut.clientX - U.left) / U.width * 100));
    }, u = l(a), v = a.clientX;
    let h = !1, w = Le(i), M = u, I = 0;
    const N = () => {
      w = Math.abs(M - w) < 0.2 ? M : w + (M - w) * 0.14, Nn(i, w), I = requestAnimationFrame(N);
    }, F = () => {
      h || (h = !0, t.classList.add("fine"), I = requestAnimationFrame(N));
    }, X = setTimeout(F, 350), lt = (ut) => {
      M = l(ut), Math.abs(ut.clientX - v) > 6 && (clearTimeout(X), F());
    }, dt = () => {
      clearTimeout(X), cancelAnimationFrame(I), t.removeEventListener("pointermove", lt), t.removeEventListener("pointerup", dt), t.removeEventListener("pointercancel", dt), t.classList.remove("fine"), Nn(i, h ? Math.round(w) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), wi("pos", i);
    };
    t.addEventListener("pointermove", lt), t.addEventListener("pointerup", dt), t.addEventListener("pointercancel", dt);
  }
  function Uo(t) {
    var w, M;
    const [a, i] = t.dataset.open.split("|"), l = t.closest(".tfCard"), u = t.getBoundingClientRect(), v = (w = t.querySelector(".tfIcon")) == null ? void 0 : w.getBoundingClientRect();
    K = { key: a, id: i, h: l ? Math.round(l.getBoundingClientRect().height) : 0, from: u, chip: v }, Ge.delete(a), ka();
    const h = _.querySelector(".tfOpen");
    h && (K.rel = u.top - h.getBoundingClientRect().top), Lf(h, u, v), (M = _.querySelector(".tfOpen [data-close]")) == null || M.focus({ preventScroll: !0 });
  }
  function Bs(t) {
    var a;
    Tt = t.dataset.area, _.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var u;
      const l = i === t;
      i.classList.toggle("active", l), i.setAttribute("aria-expanded", String(l)), (u = i.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !l);
    }), Ge.set("areas", Z(((a = _.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Yo = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [i, l] = Bi(t);
      return Math.round(i + a * (l - i));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var i;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((i = Kt(t).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function Yr(t, a, i, l) {
    var M;
    const u = Yo[a].value(i, l);
    T.set(a + "|" + i, u);
    const v = Math.round(l * 100) + "%", h = t.querySelector("i");
    if (a === "tilt") {
      h.style.width = "calc((100% - 8px) * " + l + ")";
      const [I, N] = t.querySelectorAll("span");
      I.classList.toggle("lit", l > 0.08), N.classList.toggle("lit", l > 0.92), Ge.delete(i), Go = Go.map(() => ""), Qa(i).forEach((F) => F.update(qr(i)));
    } else if (h) h.style.width = v;
    else {
      let I = t.querySelector("b");
      I || (I = document.createElement("b"), t.appendChild(I)), I.style.left = v;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const w = (M = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    w && (w.textContent = Yo[a].text(i, u));
  }
  function wi(t, a) {
    const i = T.get(t + "|" + a), [l, u, v] = Yo[t].send(a, i), h = () => setTimeout(() => {
      T.delete(t + "|" + a), ka();
    }, 1500);
    Gr(l, u, a, v).then(h, h);
  }
  function vl(t) {
    t.addEventListener("click", (a) => {
      var l;
      const i = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (la && !a.target.closest(".tfBoardMenu,[data-board-more]") && En(), !(!i || !t.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (la == null ? void 0 : la.key) === i.dataset.boardMore ? En(!0) : Nr(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) Nl(la.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) Xs(i.dataset.boardShow);
        else if (i.dataset.favHide) jo(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) Us(i.dataset.energyPick);
        else if (i.dataset.act) Ia(i.dataset.act);
        else if (i.hasAttribute("data-details")) dl(!(ct != null && ct.details));
        else if (i.hasAttribute("data-details-close")) dl(!1);
        else if (i.dataset.summary) Jn(i.dataset.summary, i);
        else if (i.dataset.star) ii(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const u = ct.id;
          ct = ct.back, ul(), (l = ee.querySelector('.tfMore [data-more="' + CSS.escape(u) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) To("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([u, v, h, w]) => Gr(u, v, h, w).catch(() => {
        }));
        else if (i.dataset.more) To(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) Vr();
        else if (i.dataset.morePage) jr(Number(i.dataset.morePage));
        else if (i.dataset.path) za(i.dataset.path);
        else if (i.dataset.go) Fr("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) Ss();
        else if (i.dataset.open) Uo(i);
        else if (i.hasAttribute("data-close")) {
          const u = K, v = i.closest(".tfOpen"), h = v == null ? void 0 : v.getBoundingClientRect().top, w = u.from && h != null ? new DOMRect(u.from.left, h + (u.rel || 0), u.from.width, u.from.height) : u.from;
          Af(v, w, () => {
            var M;
            K === u && (K = null, Ge.delete(u.key), ka(), (M = _.querySelector('[data-open="' + CSS.escape(u.key + "|" + u.id) + '"]')) == null || M.focus({ preventScroll: !0 }));
          });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && Bs(i);
    }), t.addEventListener("keydown", (a) => {
      var l, u, v, h, w, M, I;
      const i = a.target;
      if ((l = i.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Uo(i)), (u = i.dataset) != null && u.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Us(i.dataset.energyPick)), (v = i.classList) != null && v.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Bs(i)), (h = i.dataset) != null && h.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Jn(i.dataset.summary, i)), a.key === "Escape" && la && t === _) {
        a.preventDefault(), En(!0);
        return;
      }
      if (a.key === "Escape" && Ga && t === _) {
        a.preventDefault(), $a(!1), (w = c("dashEditNav")) == null || w.focus();
        return;
      }
      if (a.key === "Escape" && at && t === _ && (a.preventDefault(), Ss()), (M = i.dataset) != null && M.blocks) {
        const N = i.dataset.blocks, F = Ur(a, Math.round(Le(N)));
        if (F == null) return;
        a.preventDefault(), Nn(N, F), clearTimeout(xt.get(N)), xt.set(N, setTimeout(() => wi("pos", N), 500));
        return;
      }
      if ((I = i.dataset) != null && I.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [N, F] = i.dataset.drag.split("|"), X = Number(i.getAttribute("aria-valuenow")) / 100, lt = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, X + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        Yr(i, N, F, lt), wi(N, F);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var e;
      const i = a.target.closest("[data-blocks]");
      if (i && a.button === 0) {
        a.preventDefault(), Vn(i, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [u, v] = l.dataset.drag.split("|"), h = u === "bright" && !Tn(v), w = a.pointerType !== "mouse";
      if (h && !w) {
        Ia(we("light", "toggle", v));
        return;
      }
      const M = u === "bright" && ((e = S[v]) == null ? void 0 : e.state) !== "on", I = u === "tilt" ? 4 : 0, N = () => l.getBoundingClientRect().width - I * 2, F = (r) => {
        const d = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (r.clientX - d.left - I) / N()));
      };
      let X = w ? "waiting" : M ? "pressed" : "dragging", lt = 0;
      const dt = a.clientX, J = a.clientY, ut = (r, d) => Math.hypot(r.clientX - dt, r.clientY - J) > d, U = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      w || (a.preventDefault(), U()), X === "dragging" && Yr(l, u, v, F(a));
      const St = () => {
        var r, d;
        X = "sliding", D = l, l.classList.add("held"), U(), (r = navigator.userActivation) != null && r.hasBeenActive && ((d = navigator.vibrate) == null || d.call(navigator, 8)), lt = M ? (Za[v] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, G = (r) => {
        X === "waiting" && ut(r, B) ? !h && Math.abs(r.clientX - dt) > Math.abs(r.clientY - J) ? St() : X = "gone" : X === "pressed" && ut(r, 4) && (X = "dragging"), X === "sliding" ? Yr(l, u, v, Math.max(0, Math.min(1, lt + (r.clientX - dt) / N()))) : X === "dragging" && Yr(l, u, v, F(r));
      }, Ht = (r) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((d, f) => l.removeEventListener(d, f ? Ht : G)), l.classList.remove("held"), D === l && (D = null), X === "sliding" || X === "dragging" ? wi(u, v) : r.type === "pointerup" && h ? Ia(we("light", "toggle", v)) : r.type === "pointerup" && M && (X === "waiting" || X === "pressed") && Gr("light", "turn_on", v).catch(() => {
        });
      };
      l.addEventListener("pointermove", G), l.addEventListener("pointerup", Ht), l.addEventListener("pointercancel", Ht);
    }), t.addEventListener("touchmove", (a) => {
      D && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return _ && k && (xe(), vl(_), vl(ee), ee.addEventListener("click", (t) => {
    t.target === ee && Vr();
  }), (Zr = n.getElementById("homeNav")) == null || Zr.addEventListener("click", () => {
    at && Ss();
  }), (bl = n.querySelector(".bottomNav")) == null || bl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + bp + "</button>"), (Rs = c("dashEditNav")) == null || Rs.addEventListener("click", () => $a(!Ga)), _.addEventListener("pointerdown", hn), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Fo() !== Zs ? ka() : pn();
  }).observe(_), window.addEventListener("resize", pn, { passive: !0 }), ee.addEventListener("keydown", (t) => {
    var a, i;
    t.key === "Escape" ? (t.stopPropagation(), ct != null && ct.details ? dl(!1) : Vr()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((i = (a = t.target).closest) != null && i.call(a, ".tfMoreDots")) && (t.preventDefault(), jr(((ct == null ? void 0 : ct.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), et(), {
    update(t) {
      if (!k) return;
      const a = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([l]) => Zo(l))), ...t || {} };
      for (const l in S) l.startsWith("light.") && S[l].state === "on" && Tn(l) && $n(l, Un(S[l]));
      a ? je() : ka();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      _i = !0, Jt == null || Jt.destroy(), Jt = null, va == null || va.forEach((t) => t.destroy()), va = null;
    },
    resume() {
      _i = !1, !(!k || !(_ != null && _.querySelector("[data-tf]"))) && (ne.isConnected && kr(ne.style.order), Mr());
    }
  };
}
const mm = "0.75.0", oc = "move_assistant", gm = "move_assistant", yp = "move_assistant_checkin_reminder";
function vm() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class bm extends HTMLElement {
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
    vm();
    const s = this.shadowRoot || this.attachShadow({ mode: "open" });
    s.innerHTML = `<style>${cu}${pu}${uu}${fu}</style>${hu}`;
    const o = s.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: oc
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Nu(s, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, x) => this._fire(m, x),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, x) => {
        var k, L;
        return (L = (k = this._hass) == null ? void 0 : k.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(x, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, x;
        return Object.keys(((x = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = hm(s, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Cf(s, o), _f(s), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const s = (o = this._hass) == null ? void 0 : o.connection;
    s != null && s.subscribeMessage && s.subscribeMessage(
      (c) => {
        var x;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (x = this._app) == null || x.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: oc }
    ).catch(() => {
    });
  }
  _save(s) {
    this._pendingJson = JSON.stringify(s), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: oc,
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
      event_type: gm,
      event_data: { action: s, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(s) {
    const o = `config/automation/config/${yp}`;
    if (!s) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (x) {
        if ((x == null ? void 0 : x.status_code) !== 404 && (x == null ? void 0 : x.status) !== 404) throw x;
      }
      return;
    }
    const c = (x) => `${x}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: yp,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", bm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${mm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
