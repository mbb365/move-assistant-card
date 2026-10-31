const Su = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Cu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Tu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', Lu = `<main id="app"><div class="shell">
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
`, ea = {
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
}, Qn = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Xd = (a, l, o) => a + (l - a) * o, yd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Au = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Jd = {}, Zt = (a, l, o) => {
  const c = a + l + o;
  return Jd[c] || (Jd[c] = Au(yd(a).map((m, v) => m + (yd(l)[v] - m) * o)));
}, Qd = {}, wl = (a) => Qd[a] || (Qd[a] = yd(a)), ad = (a, l, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let v = 0, b = 1, L = m;
  for (let x = 0; x < 18; x++)
    L = (v + b) / 2, 3 * (1 - L) * (1 - L) * L * a + 3 * (1 - L) * L * L * o + L * L * L < m ? v = L : b = L;
  return 3 * (1 - L) * (1 - L) * L * l + 3 * (1 - L) * L * L * c + L * L * L;
}, _u = { std: ad(0.2, 0, 0, 1), acc: ad(0.3, 0, 1, 1), dec: ad(0, 0, 0, 1) };
function Tl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function jc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Zt(l.clear[0], l.cloudy[0], 0.12), Zt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Zt(l.rain[0], "#000000", 0.22), Zt(l.rain[1], "#000000", 0.22)], l;
}
const kd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Md = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Sd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Cd(a, l = ea) {
  const o = { ...ea, ...l }, c = jc(o), m = String(a).split("/"), v = c[m[0]] ? m[0] : "clear", b = m[1] === "night", L = c[v][b ? 1 : 0], x = {
    night: b,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: b ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: b ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: b ? 1 : 0 },
    stars: kd.map(() => ({ o: 0 })),
    rain: Md.map(() => ({ o: 0, dy: -16 })),
    snow: Sd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, H = (se) => kd.map(() => ({ o: se }));
  return v === "clear" ? b ? (x.moon.o = 1, x.stars = H(1)) : x.sun.o = 1 : v === "partly" ? (x.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: b ? 1 : 0 }, b ? (x.moon = { x: 34, y: 33, d: 48, o: 1 }, x.stars = H(0.7)) : x.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (x.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: b ? 1 : 0 }, b ? x.moon = { x: 40, y: 36, d: 40, o: 0 } : x.sun = { x: 40, y: 36, r: 20, o: 0 }) : (x.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, b ? x.moon = { x: 38, y: 28, d: 36, o: 0 } : x.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? x.snow = Sd.map(() => ({ o: 1, dy: 0 })) : x.rain = Md.map((se, ae) => ({ o: v === "storm" && ae === 1 ? 0 : 1, dy: 0 })), v === "storm" && (x.bolt = { o: 1, dy: 0 })), x;
}
const ec = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Eu(a, l, o, c = ea, m = !1) {
  const v = { ...ea, ...c }, b = (O, q) => O > 0.01 && q > 0.01 ? "stay" : O > 0.01 ? "leave" : q > 0.01 ? "enter" : "none", L = (O, q, K, ne) => {
    const U = O[0] + q * ne, W = O[1] - (K - 1 - q) * ne;
    return _u[O[2]](Qn((o - U) / Math.max(1e-3, W - U)));
  }, x = (O, q, K, ne = 0, U = 1, W = 0) => {
    const X = b(O.o, q.o);
    if (X === "none") return { ...q, o: 0 };
    const G = L(ec[K][X], ne, U, W), Y = {};
    for (const ee in q) Y[ee] = m && X !== "stay" && ee !== "o" ? X === "leave" ? O[ee] : q[ee] : Xd(O[ee], q[ee], G);
    return Y;
  }, H = L(ec.sky, 0, 1, 0);
  let se, ae;
  if (a.night !== l.night) {
    const O = Math.min(a.clearness, l.clearness), q = Zt(Zt(a.sky, l.sky, 0.5), v.dusk, 0.6 * O);
    se = H < 0.5 ? Zt(a.sky, q, H * 2) : Zt(q, l.sky, H * 2 - 1), ae = O > 0.5 ? [a.sky, v.dusk, l.sky] : [a.sky, l.sky];
  } else
    se = Zt(a.sky, l.sky, H), ae = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: Xd(a.clearness, l.clearness, o),
    sky: se,
    skyStops: ae,
    skyT: H,
    sun: x(a.sun, l.sun, "body"),
    moon: x(a.moon, l.moon, "body"),
    cloud: x(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((O, q) => x(a.stars[q], O, "fx", q, l.stars.length, 0.05)),
    rain: l.rain.map((O, q) => x(a.rain[q], O, "fx", q, l.rain.length, 0.05)),
    snow: l.snow.map((O, q) => x(a.snow[q], O, "fx", q, l.snow.length, 0.05)),
    bolt: x(a.bolt, l.bolt, "fx")
  };
}
const Du = [
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
], Jn = (a, l) => (Du[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Ru = 0, Ad = 1, _d = 2, Ed = 3, Dd = 4, Xn = 5, qr = 6, li = 7, Rd = 8, kl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Nu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Bu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), Gc = (a, l, o) => {
  let c = !1;
  for (let m = 0, v = a.length - 1; m < a.length; v = m++) {
    const b = a[m], L = a[v];
    b[1] > o != L[1] > o && l < (L[0] - b[0]) * (o - b[1]) / (L[1] - b[1]) + b[0] && (c = !c);
  }
  return c;
};
function Uc(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: m = ea, ink: v = "#26221e", paper: b = "#fbf9f6", clock: L = 0, idle: x = !1 } = {}) {
  const H = { ...ea, ...m }, se = Math.sin, ae = Math.PI * 2, O = Math.max(6, Math.round(l / o)), q = O / 90, K = x ? Math.floor(L / 100) * 100 : 0, ne = x ? se(ae * K / 3600) : 0, U = x ? 1.8 * se(ae * K / 6400) : 0, W = x ? 0.9 * se(ae * K / 4100) : 0, X = x ? 0.8 * se(ae * K / 5200) : 0, G = K / 3400 % 1, Y = x && a.bolt.o > 0.5 && (G < 0.04 || G > 0.08 && G < 0.11), ee = new Array(O * O), T = new Uint8Array(O * O), j = (k, E, C, I, ue) => {
    C == null || k < 0 || E < 0 || k >= O || E >= O || (I >= 1 || I > Jn(k + 5, E + 3)) && (ee[E * O + k] = C, T[E * O + k] = ue);
  }, ve = (k, E, C, I) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(O - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(O - 1, k + C + 1); V++) I(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Le = a.skyStops || [a.sky], y = a.skyT || 0;
  for (let k = 0; k < O; k++) {
    const E = a.night ? Qn(1 - (k + 0.5) / (O * 0.7)) * 0.85 : Qn(((k + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < O; C++) {
      let I = Le[0];
      if (Le.length > 1) {
        const ue = y * (Le.length - 1), V = Math.min(Le.length - 2, Math.floor(ue));
        I = ue - V > Jn(C, k) ? Le[V + 1] : Le[V];
      }
      E > Jn(C + 2, k + 5) && (I = a.night ? Zt(I, "#000000", 0.28) : Zt(I, "#ffffff", 0.2)), ee[k * O + C] = Y ? Zt(I, "#ffffff", 0.25) : I;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * q, E = a.sun.y * q, C = Math.max(1, a.sun.r * q);
    if (x) {
      const I = C * (1.45 + 0.06 * ne), ue = Zt(H.sun, "#ffffff", 0.55);
      if (ve(k, E, I, (V, oe, ce, me) => {
        const ze = Math.sqrt(ce * ce + me * me);
        ze > C && ze < I && j(V, oe, ue, 0.26 * (1 - (ze - C) / (I - C)) * a.sun.o, Ru);
      }), a.sun.o > 0.5) {
        const V = Math.floor(K / 500) % 2, oe = Math.max(1, C * 0.22);
        for (let ce = 0; ce < 8; ce++) if (ce % 2 === V) for (let me = C + 1.5; me < C + 1.5 + oe; me += 0.7) j(Math.floor(k + Math.cos(ce * Math.PI / 4) * me), Math.floor(E + Math.sin(ce * Math.PI / 4) * me), H.sun, a.sun.o, Rd);
      }
    }
    ve(k, E, C, (I, ue, V, oe) => {
      if (V * V + oe * oe > C * C) return;
      const ce = ((V * 0.643 + oe * 0.766) / C + 1) / 2;
      j(I, ue, Qn((ce - 0.62) / 0.38) > Jn(I, ue) ? H.sunEdge : H.sun, a.sun.o, Ad);
    });
  }
  if (kd.forEach((k, E) => {
    const C = a.stars[E].o;
    if (C < 0.01) return;
    const I = Math.floor(k[0] * q), ue = Math.floor(k[1] * q), V = x ? (Math.floor(K / 300) + E * 3) % 6 : 0;
    if (V === 5) return;
    const oe = Math.round(k[2] * q * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    j(I, ue, H.star, C, li);
    for (let ce = 1; ce <= oe; ce++) {
      const me = ce === oe && oe > 1 ? Zt(H.star, a.sky, 0.5) : H.star;
      j(I - ce, ue, me, C, li), j(I + ce, ue, me, C, li), j(I, ue - ce, me, C, li), j(I, ue + ce, me, C, li);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * q * 0.37), E = a.moon.x * q, C = a.moon.y * q + (x && X > 0.4 ? -1 : 0), I = E + 0.547 * k, ue = C - 0.503 * k, V = 0.82 * k, oe = Zt(H.moon, "#ffffff", 0.6);
    ve(E, C, k, (ce, me, ze, tt) => {
      if (ze * ze + tt * tt > k * k) return;
      const wt = ce + 0.5 - I, pn = me + 0.5 - ue;
      wt * wt + pn * pn <= V * V || j(ce, me, Qn((tt + k) / (2 * k) * 1.1 - 0.1) > Jn(ce, me) ? H.moon : oe, a.moon.o, _d);
    });
  }
  const we = Math.max(2, Math.round(15.65 * q)), Ce = Math.max(1, Math.round(5.87 * q * 0.5));
  Md.forEach((k, E) => {
    const C = a.rain[E];
    let I = C.dy, ue = C.o;
    if (ue < 0.01) return;
    if (x) {
      const ce = (K / 950 + E / 3) % 1;
      I += -5 + ce * 14, ue *= ce < 0.18 ? ce / 0.18 : ce > 0.72 ? (1 - ce) / 0.28 : 1;
    }
    const V = (k[0] + 3 + U) * q, oe = (k[1] + I) * q;
    for (let ce = 0; ce < we; ce++) for (let me = 0; me < Ce; me++) j(Math.floor(V - 0.208 * ce) + me, Math.floor(oe) + ce, H.rain, ue, Dd);
  });
  const qe = Math.max(0, Math.round(7.34 * q / 2.6));
  if (Sd.forEach((k, E) => {
    const C = a.snow[E];
    let I = C.dy, ue = 0, V = C.o;
    if (V < 0.01) return;
    if (x) {
      const me = (K / 3200 + E / 5) % 1;
      I += -6 + me * 14, ue = 1.5 * se(ae * (me * 1.5 + E / 5)), V *= me < 0.2 ? me / 0.2 : me > 0.75 ? (1 - me) / 0.25 : 1;
    }
    const oe = Math.floor((k[0] + 3.67 + ue + U) * q), ce = Math.floor((k[1] + 3.67 + I) * q);
    j(oe, ce, H.snow, V, Xn);
    for (let me = 1; me <= qe; me++)
      j(oe - me, ce, H.snow, V, Xn), j(oe + me, ce, H.snow, V, Xn), j(oe, ce - me, H.snow, V, Xn), j(oe, ce + me, H.snow, V, Xn), qe > 1 && me < qe && (j(oe - me, ce - me, H.snow, V, Xn), j(oe + me, ce - me, H.snow, V, Xn), j(oe - me, ce + me, H.snow, V, Xn), j(oe + me, ce + me, H.snow, V, Xn));
  }), a.bolt.o > 0.01)
    if (O >= 30) {
      const k = 39 + U, E = 50 + a.bolt.dy;
      for (let C = Math.floor(E * q); C <= (E + 28) * q; C++) for (let I = Math.floor(k * q); I <= (k + 13) * q; I++)
        Gc(Bu, (I + 0.5) / q - k, (C + 0.5) / q - E) && j(I, C, H.sun, a.bolt.o, qr);
    } else {
      const k = O / 18, E = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Nu.forEach((I, ue) => I.split("").forEach((V, oe) => {
        if (V !== "#") return;
        const ce = Math.floor((E + oe) * k), me = Math.floor((C + ue) * k);
        for (let ze = me; ze < Math.max(me + 1, Math.floor((C + ue + 1) * k)); ze++) for (let tt = ce; tt < Math.max(ce + 1, Math.floor((E + oe + 1) * k)); tt++) j(tt, ze, H.sun, a.bolt.o, qr);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * q), E = k * 0.6665, C = (a.cloud.x + U) * q - k / 2, I = (a.cloud.y + W) * q - E / 2, ue = Zt(H.cloudDay, H.cloudNight, Math.round(a.cloud.f * 4) / 4), V = Zt(ue, "#000000", 0.16);
    for (let oe = Math.max(0, Math.floor(I) - 1); oe <= Math.min(O - 1, I + E + 1); oe++) for (let ce = Math.max(0, Math.floor(C) - 1); ce <= Math.min(O - 1, C + k + 1); ce++) {
      const me = (ce + 0.5 - C) / k, ze = (oe + 0.5 - I) / k;
      kl(me, ze) && j(ce, oe, !kl(me, ze + 1 / k) || Qn((ze - 0.42) / 0.25) * 0.8 > Jn(ce, oe) ? V : ue, a.cloud.o, Ed);
    }
  }
  return Yc(ee, T, O, O, { oneBit: c, ink: v, paper: b, snowInk: !a.night });
}
function Yc(a, l, o, c, { oneBit: m, ink: v, paper: b, snowInk: L }) {
  const x = new Uint8ClampedArray(o * c * 4), H = wl(v), se = wl(b);
  for (let ae = 0; ae < c; ae++) for (let O = 0; O < o; O++) {
    const q = ae * o + O, K = l[q];
    if (a[q] == null) continue;
    let ne = wl(a[q]);
    if (m) {
      let U;
      K === Dd || K === Rd ? U = !0 : K === Xn ? U = L : K === li || K === qr ? U = !1 : U = Math.round((0.2126 * ne[0] + 0.7152 * ne[1] + 0.0722 * ne[2]) / 255 * 4) / 4 <= Jn(O, ae), (K === Ad || K === _d || K === Ed || K === qr) && (O > 0 && l[q - 1] !== K || O < o - 1 && l[q + 1] !== K || ae > 0 && l[q - o] !== K || ae < c - 1 && l[q + o] !== K) && (U = !0), ne = U ? H : se;
    }
    x[q * 4] = ne[0], x[q * 4 + 1] = ne[1], x[q * 4 + 2] = ne[2], x[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: x };
}
const Pu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Iu = (a) => Tl(a, !1).split("/")[0], od = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Hu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Fu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Ou = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Wu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Vu = [".##", "##.", ".#.", "#.."];
function Zc(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: v = 6, glow: b = 0.6 }) {
  const L = { ...ea, dawn: "#e5a77e", ...c }, x = jc(L), H = l, se = o, ae = H / 6, O = ae / 2, q = Math.PI * 2, K = a.length ? a : [{ cond: "cloudy", night: !1 }], ne = [...Array(12)].map((G, Y) => {
    const ee = K[Math.min(Y, K.length - 1)], T = Iu(ee.cond), j = Y % 2 === 1;
    return { cond: ee.cond, k: T, night: j, sky: x[T][j ? 1 : 0], cover: Pu[T] };
  }), U = (G) => se * (0.5 - m * Math.cos(q * (G / ae - 0.25)));
  return { C: L, S: ne, W: H, H: se, cw: ae, sw: O, TAU: q, yb: U, side: (G, Y, ee) => {
    const T = (G ? U(Y) - ee : ee - U(Y)) / Math.max(3, v * 1.4) + 0.5;
    return T <= 0 ? 0 : T >= 1 ? 1 : T;
  }, glowAt: (G) => {
    const Y = ((G / ae - 0.25) % 1 + 1) % 1, ee = Math.max(0, Math.min(5, Math.round(G / ae - 0.25))), T = Math.max(0, Math.min(5, Math.round(G / ae - 0.75))), j = 1 - (ne[2 * ee].cover + ne[2 * T + 1].cover) / 2, ve = Math.sin(Math.PI * Math.min(1, Math.max(0, U(G) / se)));
    return { c: Y < 0.5 ? L.dusk : L.dawn, a: b * (0.2 + 0.8 * j) * ve * ve };
  }, soft: v, tw: ae * 0.3, sy: se / 90 };
}
function Kc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: v, side: b, C: L, TAU: x, sy: H } = a, se = l, ae = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const K = od(c * 977 + q * 131 + 7), ne = (q + 0.5) * v, U = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = ne + (K() - 0.5) * v * 1.6, G = (6 + K() * 76) * H, Y = K() < 0.35, ee = 1.8 + K() * 1.6, T = b(!0, X, G) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(x * se / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ae.stars.push({ x: X, y: G, big: Y, size: ee, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = ne + (K() - 0.5) * v * 0.3, X = Math.min(15, v * 0.29);
      ae.suns.push({ x: W, y: 32 * H, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(x * se / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, v * 0.55 / 34), X = ne - 23 * W + (K() - 0.5) * v * 0.2;
      ae.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(x * se / 5200 + q) : 0)) * H + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const K = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!K) return;
    const ne = od(c * 577 + q * 71 + 3), U = (q + 0.5) * v, W = O.k === "rain" || O.k === "storm" || O.night ? L.cloudNight : L.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < K; G++) {
      const Y = v / 46 * (O.k === "partly" ? 0.85 : 0.75 + ne() * 0.55), ee = U + (O.k === "partly" ? v * 0.12 : (ne() - 0.5) * v * 1.05), T = (O.k === "partly" ? 40 : 6 + ne() * 26) * H, j = o ? 2.5 * Math.sin(x * se / 9e3 + q * 1.3 + G * 2.1) : 0, ve = o ? 0.9 * Math.sin(x * se / 6100 + q + G) : 0;
      ae.clouds.push({ x: ee - 23 * Y + j, y: T - 15.33 * Y + ve, w: 46 * Y, h: 30.66 * Y, fill: W, o: X * (K > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const K = od(c * 313 + q * 29 + 11), ne = (q + 0.5) * v, U = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = ne + (K() - 0.5) * v * 1.05, Y = 44 + K() * 36, ee = 1;
      if (o) {
        const j = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Y - 44)), Y = 44 + j, ee = Math.min(1, j / 6, (36 - j) / 6);
      }
      Y *= H;
      const T = b(O.night, G, Y) * ee;
      T >= 0.05 && ae.drops.push({ x: G, y: Y, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = ne + (K() - 0.5) * v * 1.05, Y = 40 + K() * 44, ee = 1;
      if (o) {
        const j = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + j, G += 1.6 * Math.sin(x * se / 2800 + X * 1.9 + q), ee = Math.min(1, j / 6, (44 - j) / 6);
      }
      Y *= H;
      const T = b(O.night, G, Y) * ee;
      T >= 0.05 && ae.flakes.push({ x: G, y: Y, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(x * se / 8e3 + q) : 0;
      for (let ee = 0; ee < 4; ee++) ae.fogs.push({ x: ne - v * 0.75 + ee % 2 * v * 0.18 + (ee % 2 ? Y : -Y), y: (30 + ee * 13) * H, w: v * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (se / 3400 + q * 0.37) % 1;
      ae.bolts.push({ x: ne + (K() - 0.5) * v * 0.3 - 5, y: 36 * H, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ae;
}
function zu(a, l, o, c, m, v, b, L) {
  const { S: x, C: H, cw: se, yb: ae, glowAt: O, soft: q, tw: K, sy: ne } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, I, ue) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (I >= 1 || I > Jn(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ue);
  }, Y = (k, E, C, I) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(c - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) I(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, ee = (k, E, C) => {
    for (let ue = 0; ue < k.length - 1; ue++) {
      const V = (ue + E) * se;
      if (C < V - K / 2) return [k[ue], k[ue], 0];
      if (C <= V + K / 2) return [k[ue], k[ue + 1], (C - V + K / 2) / K];
    }
    const I = k[k.length - 1];
    return [I, I, 0];
  }, T = x.filter((k) => !k.night).map((k) => k.sky), j = x.filter((k) => k.night).map((k) => k.sky), ve = q / v, Le = 16 * ne / v;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ae(E) / v, I = ee(T, 0.75, E), ue = ee(j, 1.25, E), V = O(E);
    for (let oe = 0; oe < c; oe++) {
      const ce = Jn(k, oe), me = oe + 0.5 - C, ze = (ve > 0.01 ? Qn(0.5 + me / ve) : me > 0 ? 1 : 0) > ce;
      let tt = ze ? I[2] > ce ? I[1] : I[0] : ue[2] > ce ? ue[1] : ue[0];
      (ze ? Qn(((oe + 0.5) / c - 0.45) / 0.55) * 0.7 : Qn(1 - (oe + 0.5) / (c * 0.55)) * 0.7) > Jn(k + 2, oe + 5) && (tt = ze ? Zt(tt, "#ffffff", 0.18) : Zt(tt, "#000000", 0.25)), ze && me >= 0 && me < Le && V.a * 1.3 * (1 - me / Le) > Jn(k + 6, oe + 1) && (tt = V.c), U[oe * o + k] = tt, X[oe * o + k] = ze ? 0 : 1;
    }
  }
  const y = Zt(H.sun, "#ffffff", 0.55), we = Zt(H.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / v);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const I = k.o > 0.45 ? H.star : Zt(H.star, U[C * o + E], 0.5), ue = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, I, 1, li);
    for (let V = 1; V <= ue; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((oe) => {
      oe[0] >= 0 && oe[1] >= 0 && oe[0] < o && oe[1] < c && X[oe[1] * o + oe[0]] && G(oe[0], oe[1], I, 1, li);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, I = k.y / v, ue = k.halo / m * 0.85;
    if (Y(C, I, ue, (V, oe, ce, me) => {
      const ze = Math.sqrt(ce * ce + me * me);
      ze > E && ze < ue && !X[oe * o + V] && G(V, oe, y, 0.3 * (1 - (ze - E) / (ue - E)), 0);
    }), L) {
      const V = Math.floor(b / 500) % 2, oe = Math.max(1, E * 0.3);
      for (let ce = 0; ce < 8; ce++) if (ce % 2 === V) for (let me = E + 1.2; me < E + 1.2 + oe; me += 0.7) G(Math.floor(C + Math.cos(ce * Math.PI / 4) * me), Math.floor(I + Math.sin(ce * Math.PI / 4) * me), H.sun, 1, Rd);
    }
    Y(C, I, E, (V, oe, ce, me) => {
      ce * ce + me * me <= E * E && G(V, oe, Qn(((me / E + 1) / 2 - 0.6) / 0.4) > Jn(V, oe) ? H.sunEdge : H.sun, 1, Ad);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, I = k.y / v, ue = C + 0.547 * E, V = I - 0.503 * E, oe = 0.82 * E;
    Y(C, I, E, (ce, me, ze, tt) => {
      if (ze * ze + tt * tt > E * E) return;
      const wt = ce + 0.5 - ue, pn = me + 0.5 - V;
      wt * wt + pn * pn > oe * oe && G(ce, me, Qn((tt + E) / (2 * E) * 1.1 - 0.1) > Jn(ce, me) ? H.moon : we, 1, _d);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, I = k.x / m, ue = k.y / v, V = Zt(k.fill, "#000000", 0.16);
    for (let oe = Math.max(0, Math.floor(ue) - 1); oe <= Math.min(c - 1, ue + C + 1); oe++) for (let ce = Math.max(0, Math.floor(I) - 1); ce <= Math.min(o - 1, I + E + 1); ce++) {
      const me = (ce + 0.5 - I) / E, ze = (oe + 0.5 - ue) / E;
      kl(me, ze) && G(ce, oe, !kl(me, ze + 1 / E) || Qn((ze - 0.42) / 0.25) * 0.8 > Jn(ce, oe) ? V : k.fill, k.o, Ed);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / v), C = Math.max(E, Math.floor((k.y + 6 * ne) / v) - 1), I = Math.floor(k.x / m), ue = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let oe = I; oe <= ue; oe++) {
      const ce = (oe - I) / Math.max(1, ue - I);
      G(oe, V, k.c, k.a * (ce < 0.25 ? ce / 0.25 : ce > 0.75 ? (1 - ce) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const E = k.x / m, C = Math.floor(k.y / v);
    for (let I = 0; I < Ce; I++) G(Math.floor(E - 0.208 * I * v / m), C + I, H.rain, k.o, Dd);
  });
  const qe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / v);
    G(E, C, H.snow, k.o, Xn);
    for (let I = 1; I <= qe; I++)
      G(E - I, C, H.snow, k.o, Xn), G(E + I, C, H.snow, k.o, Xn), G(E, C - I, H.snow, k.o, Xn), G(E, C + I, H.snow, k.o, Xn);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / v); E <= (k.y + 24) / v; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        Gc(Wu, (C + 0.5) * m - k.x, (E + 0.5) * v - k.y) && G(C, E, H.sun, 1, qr);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / v);
      Vu.forEach((I, ue) => I.split("").forEach((V, oe) => {
        V === "#" && G(E + oe, C + ue, H.sun, 1, qr);
      }));
    }
  }), { col: U, ids: W };
}
function ju(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), v = l.width / c, b = l.height / m, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = (q) => {
    const K = Zc(q, l);
    return zu(K, Kc(K, { clock: L, ambient: l.ambient, seed: l.seed }), c, m, v, b, L, l.ambient);
  }, H = x(a), se = l.reveal == null ? 1 : Qn(l.reveal);
  let ae = H.col, O = H.ids;
  if (se < 1) {
    const q = l.prev ? x(l.prev) : null, K = se * (c + 12);
    ae = new Array(c * m), O = new Uint8Array(c * m);
    for (let ne = 0; ne < c * m; ne++) {
      const U = ne % c, W = ne / c | 0;
      (l.reduce ? se : Qn((K - U) / 12)) > Jn(U, W) ? (ae[ne] = H.col[ne], O[ne] = H.ids[ne]) : q ? (ae[ne] = q.col[ne], O[ne] = q.ids[ne]) : (ae[ne] = null, O[ne] = 255);
    }
  }
  return Yc(ae, O, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Gu(a, l, o) {
  const c = o.width, m = o.height, v = o.reveal == null ? 1 : Qn(o.reveal), b = (O, q) => {
    const K = Zc(q, o);
    Uu(O, K, Kc(K, o));
  };
  if (a.clearRect(0, 0, c, m), v >= 1) {
    b(a, l);
    return;
  }
  if (o.prev && b(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, b(a, l), a.restore();
    return;
  }
  const L = a.canvas, x = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (x.width !== L.width || x.height !== L.height) && (x.width = L.width, x.height = L.height);
  const H = x.getContext("2d");
  H.setTransform(a.getTransform()), H.clearRect(0, 0, c, m), b(H, l);
  const se = v * (c + 64) - 64, ae = H.createLinearGradient(se, 0, se + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), H.globalCompositeOperation = "destination-in", H.fillStyle = ae, H.fillRect(0, 0, c, m), H.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function Uu(a, l, o) {
  const { W: c, H: m, S: v, C: b, cw: L, yb: x, glowAt: H, soft: se, tw: ae, sy: O } = l, q = (y, we) => {
    const Ce = wl(y);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, we)).toFixed(3) + ")";
  }, K = (y, we) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, y[0]);
    for (let qe = 0; qe < y.length - 1; qe++) {
      const k = (qe + we) * L, E = (k - ae / 2) / c, C = (k + ae / 2) / c;
      E > 0 && E < 1 && Ce.addColorStop(E, y[qe]), C > 0 && C < 1 && Ce.addColorStop(C, y[qe + 1]);
    }
    return Ce.addColorStop(1, y[y.length - 1]), Ce;
  }, ne = Math.max(24, Math.ceil(c / 4)), U = (y, we) => {
    a.beginPath();
    for (let Ce = 0; Ce <= ne; Ce++) {
      const qe = c * Ce / ne, k = y == null ? 0 : x(qe) + y;
      Ce ? a.lineTo(qe, k) : a.moveTo(qe, k);
    }
    for (let Ce = ne; Ce >= 0; Ce--) {
      const qe = c * Ce / ne;
      a.lineTo(qe, x(qe) + we);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = K(v.filter((y) => !y.night).map((y) => y.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let y = 0; y <= 64; y++) {
    const we = H(c * y / 64);
    W.addColorStop(y / 64, q(we.c, Math.min(1, we.a)));
  }
  a.fillStyle = W;
  for (let y = 0; y < 8; y++)
    a.globalAlpha = 1 - y / 8, U(y * 2 * O, (y + 1) * 2 * O);
  a.fillStyle = K(v.filter((y) => y.night).map((y) => y.sky), 1.25);
  const X = Math.max(0.5, se), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let y = 0; y < G; y++)
    a.globalAlpha = 1 - (y + 0.5) / G, U(-X + 2 * X * y / G, -X + 2 * X * (y + 1) / G);
  a.globalAlpha = 1;
  const Y = new Path2D(Ou), ee = new Path2D(Fu), T = new Path2D(Hu), j = new Path2D(qu);
  a.fillStyle = b.star, o.stars.forEach((y) => {
    a.globalAlpha = y.o, y.big ? (a.save(), a.translate(y.x, y.y), a.scale(y.size, y.size), a.fill(Y), a.restore()) : (a.beginPath(), a.arc(y.x, y.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ve = Zt(b.sun, "#ffffff", 0.55);
  o.suns.forEach((y) => {
    const we = a.createRadialGradient(y.x, y.y, 0, y.x, y.y, y.halo);
    we.addColorStop(0, q(ve, 0.42)), we.addColorStop(0.7, q(ve, 0)), a.fillStyle = we, a.beginPath(), a.arc(y.x, y.y, y.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, y.y - y.rad, 0, y.y + y.rad);
    Ce.addColorStop(0.6, b.sun), Ce.addColorStop(1, b.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(y.x, y.y, y.rad, 0, Math.PI * 2), a.fill();
  });
  const Le = Zt(b.moon, "#ffffff", 0.6);
  o.moons.forEach((y) => {
    a.save(), a.translate(y.x - y.d / 2, y.y - y.d / 2), a.scale(y.d / 46, y.d / 46);
    const we = a.createLinearGradient(0, 6, 0, 40);
    we.addColorStop(0, Le), we.addColorStop(1, b.moon), a.fillStyle = we, a.fill(ee), a.restore();
  }), o.clouds.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.scale(y.w / 46, y.h / 30.66), a.translate(-4, -9.67), a.fillStyle = y.fill, a.fill(T), a.restore();
  }), o.fogs.forEach((y) => {
    const we = a.createLinearGradient(y.x, 0, y.x + y.w, 0);
    we.addColorStop(0, q(y.c, 0)), we.addColorStop(0.25, q(y.c, y.a)), we.addColorStop(0.75, q(y.c, y.a)), we.addColorStop(1, q(y.c, 0)), a.fillStyle = we, a.fillRect(y.x, y.y, y.w, 6 * O);
  }), a.fillStyle = b.rain, o.drops.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = b.snow, o.flakes.forEach((y) => {
    a.globalAlpha = y.o, a.beginPath(), a.arc(y.x, y.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = b.sun, o.bolts.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.fill(j), a.restore();
  }), a.restore();
}
function Yu(a, l) {
  var jd, Gd, Ud, Yd, Zd, Kd, $d;
  const o = (t) => a.getElementById(t), c = o("workoutView"), m = o("workoutNameInput");
  let v = !0;
  const b = o("homeClock");
  function L() {
    b && (b.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const x = o("createFlow"), H = o("createMovementsSlot"), se = o("createTimingSlot"), ae = o("createFinishSlot"), O = o("movementStepSummary"), q = o("timingStepSummary"), K = o("finishStepSummary"), ne = o("continueToTiming"), U = o("continueToFinish"), W = o("finishMoveButton");
  let X = !1, G = [];
  function Y(t) {
    !t || G.some((r) => r.node === t) || G.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function ee(t, r) {
    t && (Y(t), r.appendChild(t));
  }
  function T() {
    [...G].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), G = [];
  }
  function j(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (X = !0), ve();
  }
  function ve() {
    var ie, de;
    if (!lt) return;
    Ye[ht];
    const t = Je.filter((te) => !te.hidden), r = t.filter((te) => te.kind !== "rest").length, s = t.filter((te) => te.kind === "rest").length;
    O.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, f = a.querySelector('[data-open-step="timing"]'), S = a.querySelector('[data-open-step="finish"]');
    f.disabled = !u, ne.disabled = !u, q.textContent = u ? Et(E.value) + " · " + Jt(C.value) + " movement · " + Jt(I.value) + " rest" : "Add a movement first", S.disabled = !(u && X);
    const R = ((m == null ? void 0 : m.value) || "").trim(), z = [];
    (ie = o("includeWarmupPreset")) != null && ie.checked && z.push("warm-up"), (de = o("includeCooldownPreset")) != null && de.checked && z.push("cooldown"), K.textContent = R ? R + (z.length ? " · " + z.join(" + ") : "") : z.length ? z.join(" + ") : "Name and optional extras";
  }
  function Le() {
    var Te, Ue, _e;
    x.hidden = !1, X = !1;
    const t = a.querySelector(".editNameRow"), r = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), f = a.querySelector(".tempoRevealRow"), S = o("tempoExperiment"), R = (Te = o("warmupList")) == null ? void 0 : Te.closest("section"), z = o("movementCreatorLaunch"), ie = o("movementCreator"), de = (Ue = o("strengthList")) == null ? void 0 : Ue.closest("section"), te = (_e = o("cooldownList")) == null ? void 0 : _e.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), R, z, ie, de, te].forEach((Se) => Se && ee(Se, H)), [r, s, u, f, S].forEach((Se) => ee(Se, se)), ee(t, ae), j("movements"), ve();
  }
  function y() {
    T(), x.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || j(t.dataset.openStep);
  })), ne.addEventListener("click", () => {
    ne.disabled || j("timing");
  }), U.addEventListener("click", () => j("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const we = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), qe = o("settingsNav");
  function k(t) {
    Object.entries(we).forEach(([r, s]) => s.classList.toggle("active", r === t)), Ce.classList.toggle("active", t === "home"), qe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Zr, 400), t === "settings" && (requestAnimationFrame(() => Li(a.querySelector(".tab.active"), !1)), Ei());
  }
  const E = o("totalTime"), C = o("workTime"), I = o("restTime"), ue = o("totalOut"), V = o("workOut"), oe = o("restOut"), ce = o("totalFill"), me = o("workFill"), ze = o("restFill"), tt = o("roundsInput"), wt = o("roundsFill"), pn = o("roundsOut"), An = o("totalLabel"), Lt = o("routineSummaryModal"), Ke = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Mt = Ke.map((t) => ({ ...t })), Je = [
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
  const hn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let kn = hn.map((t) => ({ ...t }));
  const Vi = {
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
  }, st = bo(l.data), Ye = st.profiles;
  let ht = Ye[st.selected] ? st.selected : st.order.find((t) => Ye[t]) || "kettlebell";
  function bo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Vi)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((f) => s[f]);
    return Object.keys(s).forEach((f) => {
      u.includes(f) || u.push(f);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : zi(r.energy)).map(di),
      settings: { ...r.settings || {} }
    };
  }
  function zi(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const f = new Date(u.at);
      if (isNaN(f)) return;
      const S = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, "0") + "-" + String(f.getDate()).padStart(2, "0"), R = f.getHours() < 14 ? "morning" : "evening";
      if (s.some((ie) => ie.date === S && ie.slot === R)) return;
      const z = r.indexOf(u.value) + 1;
      z > 0 && s.push({ date: S, slot: R, mood: null, energy: z, at: u.at });
    }), s;
  }
  function di(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function fn() {
    lt || (st.selected = ht, st.order = st.order.filter((t) => Ye[t] && t !== vt), l.save(st));
  }
  function nt() {
    return st.settings;
  }
  function Hn(t) {
    const r = Ye[t];
    if (!r) return;
    ht = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), E.value = r.total, C.value = r.work, I.value = r.rest, tt.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((S) => ({ ...S })), f = (S) => u.filter((R) => R.presetRole === S).map(({ presetRole: R, ...z }) => z);
      Mt = (r.warmup || f("warmup")).map((S) => ({ ...S })), kn = (r.cooldown || f("cooldown")).map((S) => ({ ...S })), Je = u.filter((S) => !S.presetRole), $a(r.preset || "movement", !1);
    } else
      E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, I.min = 5, I.max = 30, I.step = 5, Mt = (r.warmup || Ke).map((u) => ({ ...u })), kn = (r.cooldown || hn).map((u) => ({ ...u })), Je = r.strength.map((u) => Array.isArray(u) ? (([f, S, R, z = !1]) => ({ id: f, name: S, group: R, kind: "work", hidden: !!z }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), A();
  }
  function ji(t, r, s) {
    const u = t.getBoundingClientRect(), f = u.width / 2, S = u.height / 2, R = r - f, z = s - S;
    let ie = 1 / 0, de = 1 / 0;
    R !== 0 && (ie = f / Math.abs(R)), z !== 0 && (de = S / Math.abs(z));
    const te = Math.min(Math.max(1 / Math.min(ie, de), 0), 1);
    let Q = Math.atan2(z, R) * (180 / Math.PI) + 90;
    return Q < 0 && (Q += 360), { edge: te, angle: Q };
  }
  function ft(t, r, s = !1) {
    const u = t.getBoundingClientRect(), f = r.clientX - u.left, S = r.clientY - u.top, { edge: R, angle: z } = ji(t, f, S), ie = s ? 100 : R * 100;
    t.style.setProperty("--edge-proximity", ie.toFixed(3)), t.style.setProperty("--cursor-angle", z.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || ie >= 30);
  }
  function Ae(t) {
    t.addEventListener("pointermove", (s) => ft(t, s, !1)), t.addEventListener("pointerenter", (s) => ft(t, s, !1)), t.addEventListener("pointerdown", (s) => ft(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  Ae(o("addWorkoutPanel"));
  let lt = !1, vt = null;
  function Ie(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function wo(t) {
    return t.summary ? t.summary : t.customSequence ? Et(t.total) + " · custom move" : Et(t.total) + " · " + Jt(t.work) + " / " + Jt(t.rest) + " · warm-up + cooldown";
  }
  function Oo(t, r) {
    var S;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = r.activityCount ?? (((S = r.sequence) == null ? void 0 : S.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ie(r.name) + '</div><div class="sub">' + Ie(wo(r)) + '</div><span class="sourceTag">' + Ie(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ie(r.name) + "</div></div>";
    const f = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, f), Ae(s), s.addEventListener("click", (R) => {
      R.target.closest("button") || Hn(t);
    }), s.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), Hn(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), Hn(t), bi(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), Hn(t), ql();
    }), s;
  }
  function Gi() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), st.order.forEach((t) => {
      Ye[t] && Oo(t, Ye[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === ht));
  }
  Gi(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    lt = !0, vt = "custom-" + Date.now(), Ye[vt] = {
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
    }, Hn(vt), bi(!0);
  });
  let Ne = [], je = 0, Xt = 0, Ra = 1, bn = !1, At = null, Za = null, Rt = !1, Na = st.settings.upcomingCount ?? "all", Fn = "movement";
  function ba(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Jt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Et(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Ba() {
    ce.style.width = ba(E.value, Number(E.min), Number(E.max)) + "%", me.style.width = ba(C.value, Number(C.min), Number(C.max)) + "%", ze.style.width = ba(I.value, Number(I.min), Number(I.max)) + "%", V.textContent = Jt(C.value), oe.textContent = Jt(I.value);
    const t = Number(tt.value) || 1;
    wt.style.width = ba(t, 1, 10) + "%", An.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function ua(t) {
    return t.filter((r) => !r.hidden);
  }
  function Ka(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), f = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(f).padStart(2, "0");
  }
  function Ut(t) {
    let r;
    try {
      r = new URL(String(t || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let u = null;
    if (s === "youtu.be") u = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") u = r.searchParams.get("v");
      else {
        const z = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        z && (u = z[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const f = (z) => {
      if (!z) return 0;
      if (/^\d+$/.test(z)) return Number(z);
      const ie = z.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ie ? (Number(ie[1]) || 0) * 3600 + (Number(ie[2]) || 0) * 60 + (Number(ie[3]) || 0) : 0;
    }, S = f(r.searchParams.get("t") || r.searchParams.get("start")), R = f(r.searchParams.get("end"));
    return { id: u, start: S, end: R > S ? R : null };
  }
  function Kt(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function xt(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function $a(t, r = !0) {
    Fn = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ye[ht];
    s && (s.preset = t), t === "work" ? (E.min = 30, E.max = 480, E.step = 30, C.min = 300, C.max = 7200, C.step = 300, I.min = 60, I.max = 1800, I.step = 60, r && (E.value = 60, C.value = 1500, I.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, I.min = 5, I.max = 30, I.step = 5, r && (E.value = 20, C.value = 45, I.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Ba();
  }
  function Xa(t, r) {
    const s = Fn === "work";
    return t.map((u, f) => ({ ...u, id: r + "-" + f + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function xo() {
    const t = Ye[ht];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !Mt.length && (Mt = Xa(Ke, "warm")), t.includeCooldown && !kn.length && (kn = Xa(hn, "cool")), A());
  }
  function _() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Ne.length - 1), s = Na;
    t.innerHTML = "";
    for (let S = 1; S <= r; S++) {
      const R = document.createElement("option");
      R.value = String(S), R.textContent = String(S), t.appendChild(R);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const f = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = f, Na = f === "all" ? "all" : Number(f);
  }
  function A() {
    Number(E.value) * 60;
    const t = Number(C.value), r = Number(I.value), s = Ye[ht], u = !!(s != null && s.customSequence), f = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : ua(Mt), S = ua(Je), R = u && !s.includeCooldown ? [] : ua(kn);
    if (s && (s.total = Number(E.value), s.work = t, s.rest = r, s.rounds = Number(tt.value) || 1, s.customSequence ? (s.sequence = Je.map((Me) => ({ ...Me })), s.warmup = Mt.map((Me) => ({ ...Me })), s.cooldown = kn.map((Me) => ({ ...Me }))) : (s.strength = Je.map((Me) => ({ ...Me })), s.warmup = Mt.map((Me) => ({ ...Me })), s.cooldown = kn.map((Me) => ({ ...Me })))), s != null && s.customSequence) {
      const Me = [...f.map((it) => ({ ...it, section: "warmup" })), ...S, ...R.map((it) => ({ ...it, section: "cooldown" }))].map((it) => {
        if (it.kind === "video") return { ...it, duration: Kt(it, t), rest: 0 };
        if (it.kind === "rest") {
          const ln = it.useGlobalTiming === !0 ? r : Number(it.duration) || r;
          return { ...it, duration: ln, rest: 0 };
        }
        const sn = it.useGlobalTiming === !1 && Number(it.duration) || t;
        return { ...it, duration: sn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ne = [], Me.forEach((it, sn) => {
        Ne.push(it);
        const ln = Me[sn + 1];
        it.kind !== "rest" && ln && ln.kind !== "rest" && Ne.push({
          id: "auto-rest-" + sn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ne = Me;
    } else
      Ne = [...f.map((Me) => ({ ...Me, section: "warmup" })), ...S, ...R.map((Me) => ({ ...Me, section: "cooldown" }))].map((Me) => Me.kind === "video" ? { ...Me, duration: Kt(Me, t), rest: 0 } : Me.kind === "rest" ? { ...Me, duration: Me.useGlobalTiming === !0 ? r : Number(Me.duration) || r, rest: 0 } : { ...Me, duration: Me.useGlobalTiming === !1 && Number(Me.duration) || t, rest: r }), Ne.forEach((Me, it) => {
        var sn;
        ((sn = Ne[it + 1]) == null ? void 0 : sn.kind) === "rest" && (Me.rest = 0);
      }), Ne.length && (Ne[Ne.length - 1].rest = 0);
    const z = Math.max(1, Math.min(10, Number(tt.value) || 1)), ie = Ne, de = (Me) => z <= 1 ? null : Me.section === "warmup" || Me.presetRole === "warmup" ? "first" : Me.section === "cooldown" || Me.presetRole === "cooldown" ? "last" : Me.kind === "video" && (Me.videoRounds === "first" || Me.videoRounds === "last") ? Me.videoRounds : null, te = (Me) => !!de(Me), Q = ie.filter((Me) => !te(Me)), Te = ie.filter(te), Ue = Q.length, _e = Q.reduce((Me, it) => Me + it.duration + it.rest, 0), Se = Te.reduce((Me, it) => Me + it.duration + it.rest, 0), xe = [
      Te.some((Me) => Me.section === "warmup" || Me.presetRole === "warmup") && "warm-up",
      Te.some((Me) => Me.section === "cooldown" || Me.presetRole === "cooldown") && "cooldown",
      Te.some((Me) => Me.kind === "video" && !Me.section && !Me.presetRole) && "video"
    ].filter(Boolean), ct = xe.length > 1 ? xe.slice(0, -1).join(", ") + " & " + xe[xe.length - 1] : xe[0] || "";
    Ne = [];
    const ut = (Me, it) => {
      const sn = de(Me);
      return !sn || (sn === "first" ? it === 1 : it === z);
    };
    for (let Me = 1; Me <= z; Me++)
      if (ie.filter((it) => ut(it, Me)).forEach((it, sn) => Ne.push({ ...it, id: it.id + (z > 1 ? "-r" + Me : ""), round: Me, roundIndex: sn })), Me < z && Ue)
        if (s != null && s.customSequence)
          Ne.push({ id: "round-break-" + Me, name: "Rest", group: "Round " + (Me + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Me, roundIndex: Ue, roundBreak: !0 });
        else {
          const it = Ne[Ne.length - 1];
          it.rest = r, it.roundBreakAfter = !0;
        }
    Ba();
    const Ee = Ne.reduce((Me, it) => Me + it.duration + it.rest, 0), pt = Math.round(_e / 60), St = Math.round(Ee / 60), at = z > 1 ? Et(pt) + " × " + z + " rounds" + (Se ? " + " + Jt(Se) + " " + ct : "") + " (" + Et(St) + ")" : Et(St), Xe = [f.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), an = s != null && s.customSequence ? at + " · " + Ue + " items" + (Xe.length && !(z > 1 && Se) ? " · " + Xe.join(" + ") : "") : at + " · " + Jt(t) + " / " + Jt(r) + (Xe.length && !(z > 1 && Se) ? " · " + Xe.join(" + ") : "");
    ue.textContent = Jt(_e);
    const yn = Ne.filter((Me) => !Me.roundBreak).length, Vt = z > 1 ? yn + " activities · " + z + " rounds" : Ue + " activities";
    pn.textContent = z > 1 ? z + " rounds · " + Et(St) + " total" : "1 round", o("roundsCount").textContent = z, a.querySelectorAll("[data-rounds-step]").forEach((Me) => {
      Me.disabled = Number(Me.dataset.roundsStep) < 0 ? z <= 1 : z >= 10;
    }), s && (s.summary = an, s.activityCount = Ue);
    const oi = a.querySelector(".workoutPanel.active .sub");
    oi && (oi.textContent = an), Lt.textContent = an, Yi(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Me) => Me.textContent = Vt), Ba(), Be(), jr(), xa(), _(), lt && ve(), we.workout.classList.contains("active") && !At && sa();
  }
  const F = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Z = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', pe = {
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
  }, ge = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (pe[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = ge(t.dataset.icon);
  });
  let he = null, ye = null;
  function be(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function Pe(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function He(t, r, s = {}) {
    const u = t.kind === "rest", f = t.kind === "video", S = f ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, R = Number(u ? I.value : C.value), z = be(f ? t.useVideoLength === !1 ? t.duration : Kt({ ...t, useVideoLength: !0 }) : S ? R : t.duration || R), ie = f && (Number(t.videoDuration) > 0 || Number(t.end) > 0), de = f ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ie(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ee, pt]) => '<option value="' + Ee + '"' + ((t.videoRounds || "every") === Ee ? " selected" : "") + ">" + pt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ie(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', te = f ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (ie ? " · " + Ka(Kt({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Jt(R), Q = document.createElement("div");
    Q.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), Q.dataset.index = r, Q.dataset.id = t.id;
    const Te = s.isNew ?? (ye == null ? void 0 : ye.item) === t, Ue = s.sheet ? '<div class="moveEditActions sheetActions">' + (Te ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ie(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Te ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    Q.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (f ? " videoFields" : "") + '">' + de + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (S ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ie(te) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + z.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ee) => '<option value="' + Ee + '"' + (Ee === z.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ee] + "</option>").join("") + "</select></div></div>" + Ue + "</div>";
    const _e = (Ee) => Q.querySelector("[data-f=" + Ee + "]"), Se = () => {
      const Ee = _e("global").checked;
      _e("dur").disabled = Ee, _e("unit").disabled = Ee, Q.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ee);
    };
    _e("global").addEventListener("change", Se), Se();
    const xe = () => {
      var Ee;
      if (s.sheet) {
        (Ee = s.onCancel) == null || Ee.call(s);
        return;
      }
      Te && Qe(), he = null, A();
    }, ct = () => {
      var St;
      if (f) {
        ut();
        return;
      }
      const Ee = _e("name").value.trim();
      if (!Ee) {
        _e("name").focus();
        return;
      }
      t.name = Ee, t.group = _e("group").value.trim() || (u ? "Rest" : "Movement");
      const pt = _e("global").checked;
      if (t.useGlobalTiming = pt, pt || (t.duration = Math.max(u ? 5 : 1, xt(_e("dur").value, _e("unit").value))), s.sheet) {
        (St = s.onSaved) == null || St.call(s);
        return;
      }
      Te && (ye = null), he = null, A(), Ft(Te ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, ut = () => {
      var Xe;
      const Ee = _e("url").value.trim(), pt = Ut(Ee);
      if (!pt) {
        _e("urlError").hidden = !1, _e("url").classList.add("invalid"), _e("url").focus();
        return;
      }
      const St = pt.id !== t.videoId;
      t.url = Ee, t.videoId = pt.id, t.start = pt.start, t.end = pt.end, St && (t.videoDuration = null, t.videoError = null);
      const at = _e("name").value.trim();
      t.autoName = !at, t.name = at || (St ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = _e("rounds").value, t.useVideoLength = _e("global").checked, t.useVideoLength || (t.duration = Math.max(5, xt(_e("dur").value, _e("unit").value))), s.sheet ? (Xe = s.onSaved) == null || Xe.call(s) : (Te && (ye = null), he = null, A(), Ft(Te ? "Video added" : "Video updated")), (St || !t.videoDuration || t.autoName && !t.videoTitle) && Gs(t);
    };
    if (f && _e("url").addEventListener("input", () => {
      _e("urlError").hidden = !0, _e("url").classList.remove("invalid");
    }), Q.querySelector("[data-a=cancel]").addEventListener("click", xe), Q.querySelector("[data-a=save]").addEventListener("click", ct), s.sheet && !Te) {
      Q.querySelector("[data-a=hide]").addEventListener("click", () => {
        var pt;
        return (pt = s.onHide) == null ? void 0 : pt.call(s);
      });
      const Ee = Q.querySelector("[data-a=remove]");
      Qo(Ee, Ee.querySelector(".removeFill"), 1200, () => {
        var pt;
        return (pt = s.onRemove) == null ? void 0 : pt.call(s);
      });
    }
    return Q.addEventListener("keydown", (Ee) => {
      Ee.key === "Escape" && (Ee.preventDefault(), Ee.stopPropagation(), xe()), Ee.key === "Enter" && Ee.target.matches("input") && (Ee.preventDefault(), ct());
    }), Q;
  }
  function $e(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((u, f) => {
      if (u === he && !aa()) {
        s.appendChild(He(u, f));
        return;
      }
      const S = document.createElement("div");
      S.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (yr(u) ? " noMeta" : ""), S.dataset.index = f, S.dataset.id = u.id;
      const R = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Jt(u.duration) : u.useGlobalTiming === !1 ? Jt(u.duration) : "Global timing", z = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ie = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Jt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? Ka(Kt(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + R, de = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ie(u.name) + '. Drag, or use the up and down arrow keys">' + F + "</button>", te = '<div class="moveText"><div class="moveItemName">' + Ie(u.name) + z + '</div><div class="moveMeta">' + Ie(ie) + "</div></div>", Q = (_e) => _e.addEventListener("keydown", (Se) => {
        var ut, Ee;
        if (Se.key !== "ArrowUp" && Se.key !== "ArrowDown") return;
        Se.preventDefault();
        const xe = t.indexOf(u), ct = xe + (Se.key === "ArrowUp" ? -1 : 1);
        ct < 0 || ct >= t.length || (t.splice(xe, 1), t.splice(ct, 0, u), A(), (Ee = (ut = o(r).children[ct]) == null ? void 0 : ut.querySelector(".dragHandle")) == null || Ee.focus());
      });
      if (aa()) {
        S.classList.add("phoneRow"), S.tabIndex = 0, S.setAttribute("role", "button"), S.setAttribute("aria-label", "Edit " + (u.name || "step")), S.innerHTML = de + te + '<span class="rowChevron" aria-hidden="true">›</span>';
        const _e = S.querySelector(".dragHandle");
        _e.addEventListener("pointerdown", (Se) => Ge(Se, S, s, t)), Q(_e), S.addEventListener("click", (Se) => {
          Se.target.closest(".dragHandle") || Ss(u, t);
        }), S.addEventListener("keydown", (Se) => {
          Se.key === "Enter" && Se.target === S && (Se.preventDefault(), Ss(u, t));
        }), s.appendChild(S);
        return;
      }
      S.innerHTML = de + te + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ie(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ie(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Z + "</span></button></div>", S.querySelector(".editBtn").addEventListener("click", () => {
        Qe(), he = u, A(), Pe();
      }), S.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, A();
      });
      const Te = S.querySelector(".removeBtn");
      Qo(Te, Te.querySelector(".removeFill"), 1200, () => {
        const _e = t.indexOf(u);
        _e < 0 || (t.splice(_e, 1), A(), Ft("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(_e, t.length), 0, u), A();
        } }));
      });
      const Ue = S.querySelector(".dragHandle");
      Ue.addEventListener("pointerdown", (_e) => Ge(_e, S, s, t)), Q(Ue), s.appendChild(S);
    });
  }
  const Ve = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, De = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function Ge(t, r, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const f = t.currentTarget, S = t.pointerId, R = !Ve();
    try {
      f.setPointerCapture(S);
    } catch {
    }
    const z = r.closest(".exerciseScroller") || On(r), ie = s.style.position;
    s.style.position = "relative";
    const de = [...s.children].filter((rt) => rt.classList.contains("moveRow")), te = de.indexOf(r), Q = parseFloat(getComputedStyle(s).rowGap) || 8, Te = r.offsetHeight, Ue = Te + Q, _e = de.map((rt) => rt.offsetTop), Se = de.map((rt) => rt.offsetHeight), xe = () => s.getBoundingClientRect().top, ct = s.getBoundingClientRect().width, ut = t.clientY - (xe() + _e[te]), Ee = t.clientX;
    let pt = t.clientY, St = t.clientX, at = xe() + _e[te], Xe = 0, an = 0, yn = 0, Vt = 1, oi = 0, Me = te, it = !1, sn = 0, ln = !1, ol = !1, Rr = _e[te];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", De(8);
    const il = () => {
      const rt = pt - ut + Te / 2 - xe();
      let bt = 0;
      return de.forEach((It, Un) => {
        Un !== te && rt > _e[Un] + Se[Un] / 2 && bt++;
      }), bt;
    }, rl = () => {
      de.forEach((rt, bt) => {
        if (bt === te) return;
        const It = te < Me && bt > te && bt <= Me ? -Ue : te > Me && bt >= Me && bt < te ? Ue : 0;
        rt.style.transform = It ? "translateY(" + It + "px)" : "";
      });
    }, gs = () => {
      const rt = s.getBoundingClientRect(), bt = Math.abs(St - Ee) > Math.max(80, ct * 0.3) || St < rt.left - 24 || St > rt.right + 24;
      bt !== it && (it = bt, r.classList.toggle("willReturn", bt), De(bt ? 10 : 4));
      const It = it ? te : il();
      It !== Me && (Me = It, rl(), it || De(4));
    }, ii = () => {
      if (Me === te) return _e[te];
      const rt = de.filter((It, Un) => Un !== te);
      let bt = _e[0];
      for (let It = 0; It < Me; It++) bt += rt[It].offsetHeight + Q;
      return bt;
    }, Nr = () => {
      const rt = R ? Math.min(Math.abs(Xe) / 40, 1) : 0, bt = R && !ln ? Math.max(-3, Math.min(3, yn * 0.6)) : 0;
      r.style.transform = "translate(" + an.toFixed(2) + "px," + (at - (xe() + _e[te])).toFixed(2) + "px) rotate(" + bt.toFixed(2) + "deg) scale(" + (Vt * (1 - 0.04 * rt)).toFixed(4) + "," + (Vt * (1 + 0.06 * rt)).toFixed(4) + ")";
    }, et = () => {
      sn = requestAnimationFrame(et);
      const rt = St - Ee, bt = ln ? xe() + Rr : pt - ut, It = ln ? 0 : it ? rt * 0.9 : Math.max(-22, Math.min(22, rt * 0.22)), Un = ln ? 1 : it ? 0.97 : 1.035;
      if (!R) {
        at = bt, an = ln ? 0 : It, Vt = 1, Nr(), ln && Gt();
        return;
      }
      const ku = ln ? 0.24 : 0.2, Mu = ln ? 0.62 : 0.68;
      Xe = (Xe + (bt - at) * ku) * Mu, at += Xe, yn = (yn + (It - an) * 0.16) * 0.7, an += yn, oi = (oi + (Un - Vt) * 0.22) * 0.6, Vt += oi, Nr(), ln && Math.abs(Xe) < 0.15 && Math.abs(bt - at) < 0.5 && Math.abs(an) < 0.5 && Math.abs(Vt - 1) < 3e-3 && Gt();
    }, _t = setInterval(() => {
      if (!z || ln) return;
      const rt = z.getBoundingClientRect(), bt = 56, It = pt < rt.top + bt ? -10 : pt > rt.bottom - bt ? 10 : 0;
      It && (z.scrollTop += It, gs());
    }, 30);
    function Gt() {
      if (ol) return;
      ol = !0, cancelAnimationFrame(sn);
      const rt = Me !== te, bt = r.dataset.id;
      if (s.classList.remove("reordering"), de.forEach((Un) => {
        Un.style.transition = "none", Un.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = ie, rt) {
        const [Un] = u.splice(te, 1);
        u.splice(Me, 0, Un);
      }
      A();
      const It = bt && s.querySelector('.moveRow[data-id="' + bt + '"]');
      It && R && It.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), rt && Ft("Order saved");
    }
    const dn = (rt) => {
      if (rt.pointerId === S) {
        if (rt.pointerType === "mouse" && rt.buttons === 0) {
          ga();
          return;
        }
        pt = rt.clientY, St = rt.clientX, gs();
      }
    }, Gn = (rt) => {
      rt.pointerId === S && ga();
    };
    function ga() {
      ln || (window.removeEventListener("pointermove", dn, !0), window.removeEventListener("pointerup", Gn, !0), window.removeEventListener("pointercancel", Gn, !0), f.removeEventListener("lostpointercapture", ga), clearInterval(_t), it && Me !== te && (Me = te, rl()), Rr = ii(), ln = !0, De(6), setTimeout(Gt, 800));
    }
    window.addEventListener("pointermove", dn, !0), window.addEventListener("pointerup", Gn, !0), window.addEventListener("pointercancel", Gn, !0), f.addEventListener("lostpointercapture", ga), sn = requestAnimationFrame(et), Nr();
  }
  function Be() {
    var f, S, R, z;
    const t = Ye[ht], r = (f = o("warmupList")) == null ? void 0 : f.closest("section"), s = (S = o("cooldownList")) == null ? void 0 : S.closest("section"), u = (z = (R = o("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : z.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), $e(Mt, "warmupList"), $e(Je, "strengthList"), $e(kn, "cooldownList");
  }
  function Qe() {
    if (!ye) return;
    const { item: t, arr: r } = ye;
    ye = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), he === t && (he = null);
  }
  function mt(t) {
    return t.id === "warmupList" ? { arr: Mt, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: kn, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function Ht(t, r) {
    const s = mt(r), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(I.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const Tt = "cubic-bezier(.34,1.46,.64,1)";
  function tn(t, r) {
    if (Ve() || !t) {
      r();
      return;
    }
    const s = (S) => {
      var R;
      return ((R = S.dataset) == null ? void 0 : R.id) || S;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], f = new Map(u().map((S) => [s(S), S.getBoundingClientRect().top]));
    r(), u().forEach((S) => {
      const R = f.get(s(S));
      if (R === void 0) return;
      const z = R - S.getBoundingClientRect().top;
      Math.abs(z) < 0.5 || S.animate([{ transform: "translateY(" + z + "px)" }, { transform: "none" }], { duration: 440, easing: Tt });
    });
  }
  function _n(t, r) {
    if (!t || Ve()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Tt });
  }
  function ta(t, r, s, u) {
    const { arr: f } = mt(r), S = Ht(t, r);
    f.splice(Math.max(0, Math.min(s, f.length)), 0, S), ye = { item: S, arr: f }, he = S, tn(r.closest(".exerciseScroller,.createStepSlot") || r, () => A());
    const R = r.querySelector(".moveRow.editing");
    return _n(R, u), Pe(t === "rest"), R;
  }
  function On(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const na = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function wa(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + F + '</span><span class="addGhostText"><strong>' + Ie(r[0]) + "</strong><small>" + Ie(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function pa(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function ci(t, r, s, u) {
    (he || ye) && (Qe(), he = null, A());
    const f = t.getBoundingClientRect(), S = wa(r, na[r]);
    S.setAttribute("aria-hidden", "true"), S.style.width = f.width + "px", S.style.height = f.height + "px", S.style.transform = "translate(" + f.left + "px," + f.top + "px)", t.classList.add("lifting");
    const R = On(t);
    return qn({
      ghost: S,
      origin: f,
      sx: s,
      sy: u,
      scroller: R,
      column: t.closest(".exerciseScroller,.createFlow") || R,
      home: () => t.getBoundingClientRect(),
      onDrop: (z, ie, de) => {
        pa(S), t.classList.remove("lifting"), ta(r, z, ie, de);
      },
      onReturn: () => {
        pa(S), t.classList.remove("lifting");
      }
    });
  }
  function qn({ ghost: t, origin: r, sx: s, sy: u, scroller: f, column: S, home: R, onDrop: z, onReturn: ie, rowLook: de = !1 }) {
    var Nr;
    const te = !Ve(), Q = ((Nr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Nr.offsetHeight) || 80, Te = s - r.left, Ue = u - r.top, _e = 44;
    let Se = s, xe = u, ct = r.left, ut = r.top, Ee = 0, pt = 0, St = !te, at = null, Xe = null, an = -1, yn = 0, Vt = null;
    const oi = () => ["warmupList", "strengthList", "cooldownList"].map((et) => o(et)).filter((et) => et && et.getClientRects().length && !et.closest("[hidden]")), Me = (et) => {
      if (et === at) return;
      at = et, t.classList.toggle("overList", !!et || de);
      const _t = et ? et.getBoundingClientRect().width : r.width;
      t.style.width = _t + "px", t.style.height = (et ? Q : r.height) + "px";
    }, it = (et) => {
      et.classList.add("leaving"), et.style.height = "0px", et.style.marginTop = "-8px", setTimeout(() => et.remove(), te ? 320 : 0);
    }, sn = (et, _t, Gt) => {
      if (Xe && Xe.parentNode === et && an === Gt || (Xe && (it(Xe), Xe = null, an = -1), !et)) return;
      const dn = document.createElement("div");
      dn.className = "dropSlot", et.insertBefore(dn, _t), Xe = dn, an = Gt, dn.getBoundingClientRect(), dn.style.height = Q + "px", dn.style.marginTop = "0px";
    }, ln = () => {
      let et = null, _t = 1 / 0;
      for (const ga of oi()) {
        const rt = ga.getBoundingClientRect();
        if (Se < rt.left - 48 || Se > rt.right + 48) continue;
        const bt = rt.top - 28, It = rt.bottom + 28, Un = xe < bt ? bt - xe : xe > It ? xe - It : 0;
        Un < _t && (_t = Un, et = ga);
      }
      const Gt = S == null ? void 0 : S.getBoundingClientRect(), Gn = Gt && Se >= Gt.left && Se <= Gt.right && xe >= Gt.top && xe <= Gt.bottom || _t === 0 ? et : null;
      if (Gn) {
        const ga = [...Gn.children].filter((bt) => bt.classList.contains("moveRow"));
        let rt = ga.findIndex((bt) => {
          const It = bt.getBoundingClientRect();
          return xe < It.top + It.height / 2;
        });
        rt < 0 && (rt = ga.length), sn(Gn, ga[rt] || null, rt);
      } else sn(null);
      Me(Gn);
    }, ol = () => {
      if (Vt) return Vt.aim();
      if (at) {
        const et = at.getBoundingClientRect();
        let _t = xe - Q / 2;
        return Xe && (_t = _t * 0.6 + Xe.getBoundingClientRect().top * 0.4), { x: et.left, y: _t };
      }
      return { x: Se - Te, y: xe - Ue };
    }, Rr = (et, _t, Gt, dn) => {
      t.style.transform = "translate(" + ct + "px," + ut + "px) rotate(" + et + "deg) rotate(" + _t + "rad) scale(" + Gt + "," + dn + ") rotate(" + -_t + "rad)";
    }, il = () => {
      if (yn = requestAnimationFrame(il), !St) {
        const rt = Se - s, bt = xe - u, It = Math.min(Math.hypot(rt, bt) / _e, 1);
        ct = r.left + rt * 0.35, ut = r.top + bt * 0.35, Rr(0, Math.atan2(bt, rt), 1 + 0.155 * It, 1 - 0.1 * It);
        return;
      }
      const et = ol();
      if (!te) {
        ct = et.x, ut = et.y, Rr(0, 0, 1, 1), Vt && (cancelAnimationFrame(yn), Vt.done());
        return;
      }
      const _t = Vt ? Vt.k : 0.17, Gt = Vt ? Vt.d : 0.7;
      Ee = (Ee + (et.x - ct) * _t) * Gt, pt = (pt + (et.y - ut) * _t) * Gt, ct += Ee, ut += pt;
      const dn = Math.hypot(Ee, pt), Gn = Math.min(dn / 48, 1), ga = at || Vt ? 0 : Math.max(-5, Math.min(5, Ee * 0.32));
      Rr(ga, Math.atan2(pt, Ee), 1 + 0.1 * Gn, 1 - 0.063 * Gn), Vt && dn < 0.15 && Math.hypot(et.x - ct, et.y - ut) < 0.6 && (cancelAnimationFrame(yn), Vt.done());
    }, rl = setInterval(() => {
      if (!f || Vt) return;
      const et = f.getBoundingClientRect(), _t = 64, Gt = xe < et.top + _t ? -(et.top + _t - xe) / 4 : xe > et.bottom - _t ? (xe - (et.bottom - _t)) / 4 : 0;
      Gt && (f.scrollTop += Math.max(-18, Math.min(18, Gt)), ln());
    }, 30);
    yn = requestAnimationFrame(il);
    let gs = !1;
    const ii = (et, _t) => {
      if (gs) return;
      gs = !0, cancelAnimationFrame(yn);
      const Gt = Xe ? Xe.offsetHeight : Q;
      !et && Xe && (Xe.remove(), Xe = null), et ? z(et, _t, Gt) : ie();
    };
    return {
      move(et, _t) {
        Se = et, xe = _t, !St && Math.hypot(Se - s, xe - u) > _e && (St = !0, Ee = (Se - s) * 0.085, pt = (xe - u) * 0.085), St && ln();
      },
      drop(et) {
        clearInterval(rl);
        const _t = at, Gt = an;
        if (!et && _t && Xe) {
          const dn = Xe;
          Vt = { k: 0.24, d: 0.62, aim: () => {
            const Gn = dn.getBoundingClientRect();
            return { x: Gn.left, y: Gn.top };
          }, done: () => ii(_t, Gt) }, setTimeout(() => ii(_t, Gt), 650), te || (cancelAnimationFrame(yn), ii(_t, Gt));
          return;
        }
        sn(null), Me(null), Vt = { k: 0.2, d: 0.66, aim: () => {
          const dn = R();
          return { x: dn.left, y: dn.top };
        }, done: () => ii(null) }, setTimeout(() => ii(null), 650), te || (cancelAnimationFrame(yn), ii(null));
      }
    };
  }
  function gt(t, r) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (aa()) {
        Cs(r);
        return;
      }
      const f = o("strengthList"), S = ta(r, f, mt(f).arr.length, 0);
      S == null || S.scrollIntoView({ block: "nearest", behavior: Ve() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const f = u.pointerId, S = u.clientX, R = u.clientY;
      let z = null, ie = !1;
      try {
        t.setPointerCapture(f);
      } catch {
      }
      const de = (xe) => {
        if (xe.pointerId === f) {
          if (xe.pointerType === "mouse" && xe.buttons === 0) {
            Se(!1);
            return;
          }
          if (!z) {
            if (Math.hypot(xe.clientX - S, xe.clientY - R) < 6) return;
            z = ci(t, r, S, R);
          }
          z.move(xe.clientX, xe.clientY);
        }
      }, te = (xe) => {
        xe.pointerId === f && Se(!1);
      }, Q = (xe) => {
        xe.pointerId === f && Se(!0);
      }, Te = () => Se(!1), Ue = () => Se(!0), _e = (xe) => {
        xe.key === "Escape" && z && (xe.preventDefault(), xe.stopPropagation(), Se(!0));
      };
      function Se(xe) {
        if (!ie && (ie = !0, window.removeEventListener("pointermove", de, !0), window.removeEventListener("pointerup", te, !0), window.removeEventListener("pointercancel", Q, !0), window.removeEventListener("keydown", _e, !0), window.removeEventListener("blur", Ue), t.removeEventListener("lostpointercapture", Te), z)) {
          const ct = z;
          z = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ct.drop(xe);
        }
      }
      window.addEventListener("pointermove", de, !0), window.addEventListener("pointerup", te, !0), window.addEventListener("pointercancel", Q, !0), window.addEventListener("keydown", _e, !0), window.addEventListener("blur", Ue), t.addEventListener("lostpointercapture", Te);
    });
  }
  const Mn = (jd = window.matchMedia) == null ? void 0 : jd.call(window, "(max-width: 620px)");
  function aa() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const yo = (t) => t.charAt(0).toUpperCase() + t.slice(1), Pa = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let qo = null, Dt = null;
  function mn(t, r, s, u) {
    wn(), o("sheetTitle").textContent = t;
    const f = o("sheetBody");
    f.innerHTML = "", f.appendChild(r), qo = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !f.contains(r)) return;
      const S = u ? f.querySelector("input[data-f=url],input[data-f=name]") : f.querySelector("button,input,select");
      S == null || S.focus({ preventScroll: !0 });
    }, Ve() ? 0 : 360);
  }
  function wn() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = qo;
    qo = null, r == null || r(), setTimeout(ko, 0);
  }
  o("sheetScrim").addEventListener("click", wn), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), wn());
  });
  function Ss(t, r) {
    const s = He(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        wn(), A(), Ft(yo(Pa(t)) + " updated");
      },
      onCancel: wn,
      onHide() {
        t.hidden = !t.hidden, wn(), A(), Ft((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        wn();
        const u = r.indexOf(t);
        u < 0 || (r.splice(u, 1), A(), Ft("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, t), A();
        } }));
      }
    });
    mn("Edit " + Pa(t), s, null, !1);
  }
  function Ui() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, f]) => {
      const S = document.createElement("button");
      S.type = "button", S.className = "sheetChoice", S.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ge(s) + "</span><span><strong>" + u + "</strong><small>" + f + "</small></span>", S.addEventListener("click", () => Cs(r)), t.appendChild(S);
    }), mn("Add to the move", t, null, !1);
  }
  function Cs(t) {
    Dt && Zi();
    const r = Ht(t, o("strengthList")), s = He(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        wn(), Al(r, t);
      },
      onCancel: wn
    });
    mn("New " + Pa(r), s, null, !0);
  }
  const Ia = o("workoutModal").querySelector(".modalStatic"), Wo = { parent: Ia.parentNode, next: Ia.nextSibling };
  function ui() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Ia);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", wn), t.appendChild(r), mn("Setup", t, () => {
      Wo.parent.insertBefore(Ia, Wo.next), Yi();
    }, !1);
  }
  function Yi() {
    var r, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ye[ht]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = Lt.textContent);
  }
  o("setupSummary").addEventListener("click", ui), o("addFab").addEventListener("click", Ui);
  function Wr() {
    const t = o("strengthList");
    return On(t) || t.closest(".exerciseScroller");
  }
  function Vr() {
    const t = o("strengthList").getBoundingClientRect(), r = (Wr() || o("strengthList")).getBoundingClientRect(), s = (Dt == null ? void 0 : Dt.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function Al(t, r) {
    var z;
    const s = wa(r, [t.name || na[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ie(t.name) + '">✕</button>', s.appendChild(u), Dt = { item: t, type: r, ghost: s };
    const f = ((z = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : z.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = f + "px";
    const S = Vr(), R = on.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + S.left + "px," + R + "px)", s.getBoundingClientRect(), Ve() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + S.left + "px," + S.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", Zi), u.querySelector("[data-a=discard]").addEventListener("click", As), s.addEventListener("pointerdown", Ts);
  }
  function Ts(t) {
    if (!Dt || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = Dt, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const f = s.getBoundingClientRect(), S = Wr(), R = qn({
      ghost: s,
      origin: { left: f.left, top: f.top, width: f.width, height: f.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: S,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || S,
      rowLook: !0,
      home: Vr,
      onDrop: (Se, xe, ct) => {
        Dt = null, pa(s), Ls(r, Se, xe, ct);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let z = !1;
    const ie = (Se) => {
      if (Se.pointerId === u) {
        if (Se.pointerType === "mouse" && Se.buttons === 0) {
          _e(!1);
          return;
        }
        R.move(Se.clientX, Se.clientY);
      }
    }, de = (Se) => {
      Se.pointerId === u && _e(!1);
    }, te = (Se) => {
      Se.pointerId === u && _e(!0);
    }, Q = () => _e(!1), Te = () => _e(!0), Ue = (Se) => {
      Se.key === "Escape" && (Se.preventDefault(), _e(!0));
    };
    function _e(Se) {
      z || (z = !0, window.removeEventListener("pointermove", ie, !0), window.removeEventListener("pointerup", de, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", Ue, !0), window.removeEventListener("blur", Te), s.removeEventListener("lostpointercapture", Q), R.drop(Se));
    }
    window.addEventListener("pointermove", ie, !0), window.addEventListener("pointerup", de, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", Ue, !0), window.addEventListener("blur", Te), s.addEventListener("lostpointercapture", Q);
  }
  function Ls(t, r, s, u) {
    const f = mt(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = f.kind, f.group && (!t.group || t.group === "Movement") && (t.group = f.group)), f.arr.splice(Math.max(0, Math.min(s, f.arr.length)), 0, t), tn(r.closest(".exerciseScroller,.createStepSlot") || r, () => A()), _n(r.querySelector('.moveRow[data-id="' + t.id + '"]'), u), Ft(yo(Pa(t)) + " added");
  }
  function Zi() {
    var u;
    if (!Dt) return;
    const { item: t, ghost: r } = Dt;
    Dt = null, pa(r);
    const s = o("strengthList");
    Ls(t, s, mt(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: Ve() ? "auto" : "smooth" });
  }
  function As() {
    if (!Dt) return;
    const t = Dt.ghost;
    Dt = null, pa(t), Ft("Discarded");
  }
  function zr() {
    Dt && (Dt.ghost.remove(), Dt = null);
  }
  window.addEventListener("resize", () => {
    if (Dt != null && Dt.ghost.classList.contains("hovering")) {
      const t = Vr();
      Dt.ghost.style.width = t.width + "px", Dt.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Gd = Mn == null ? void 0 : Mn.addEventListener) == null || Gd.call(Mn, "change", () => {
    wn(), Dt && !aa() && Zi(), Be();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function ko() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !aa()) {
      _s();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, f = r ? r.width : window.innerWidth, S = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: f + "px", height: S + "px", top: s + "px", left: u + "px" });
    const R = t.getBoundingClientRect();
    Math.abs(R.top - s) > 0.5 && (t.style.top = 2 * s - R.top + "px"), Math.abs(R.left - u) > 0.5 && (t.style.left = 2 * u - R.left + "px");
  }
  function _s() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Ud = window.visualViewport) == null || Ud.addEventListener("resize", ko), (Yd = window.visualViewport) == null || Yd.addEventListener("scroll", ko), window.addEventListener("resize", ko), window.addEventListener("scroll", ko, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ko, 250));
  function jr() {
    Je.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = F + "<span>Add movement</span>"), r && (r.innerHTML = F + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = F + "<span>Add video</span>");
  }
  function xa() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Jt(C.value);
    const u = o("useGlobalRestTiming").checked, f = o("addRestDuration"), S = o("addRestUnit");
    f.disabled = u, S.disabled = u, f.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Jt(I.value);
  }
  let Gr = "movement";
  function _l(t) {
    Gr = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), xa();
  }
  function Mo() {
    Ye[ht];
    const t = lt ? !0 : o("useGlobalTiming").checked, r = t ? Number(C.value) : xt(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = lt ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(I.value) : xt(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Gr === "rest") {
      const f = o("addRestTitle").value.trim() || "Rest", S = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: f,
        group: S,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(I.value))
      }), A(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Ft("Rest added"), lt && (j("movements"), ve());
    } else {
      const f = o("addMovementInput").value.trim();
      if (!f) return;
      const S = o("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: f,
        group: S,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", A(), o("movementCreator").hidden = !0, Ft("Movement added"), lt && (j("movements"), ve());
    }
    jr();
  }
  let En = null;
  function Ft(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), r) {
      const f = document.createElement("button");
      f.type = "button", f.className = "toastAction", f.textContent = r.label, f.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(En);
      }), s.appendChild(f);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(En), En = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Es = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ds = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function pi(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function Vo(t, r) {
    return Es[pi(r)];
  }
  function El(t) {
    return Ds[pi(t)];
  }
  function Ot(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Ha() {
    return { morning: nt().morningTime || "08:00", evening: nt().eveningTime || "19:00" };
  }
  function zo(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Dl(t) {
    const r = Ha();
    return t.getHours() * 60 + t.getMinutes() >= zo(r.evening) ? "evening" : "morning";
  }
  function Ki(t, r) {
    return st.checkins.find((s) => s.date === t && s.slot === r);
  }
  function hi(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function $i() {
    const t = /* @__PURE__ */ new Date(), r = Ot(t), s = Dl(t), u = Ha(), f = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && f < zo(u.morning) || hi(Ki(r, s)) ? null : s;
  }
  const Fa = o("checkinModal"), Ja = o("checkinTab"), Rs = o("checkinBadge"), Qa = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Ur(t) {
    const { input: r, fill: s } = Qa[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", Vo(t, r.value));
  }
  Object.keys(Qa).forEach((t) => Qa[t].input.addEventListener("input", () => Ur(t)));
  let ya = null;
  function jo() {
    const t = Ha(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < zo(t.morning) ? "Next check-in at " + t.morning : s < zo(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Yr() {
    const t = Ha(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (f, S) => {
      const [R, z] = f.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (S ? 1 : 0), R, z);
    };
    return s < zo(t.morning) ? { date: u(t.morning), time: t.morning } : s < zo(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let fi = null, Xi = null;
  function Ji() {
    if ($i()) {
      Qi(), eo();
      return;
    }
    const t = Yr(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), f = r % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(f).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Rl() {
    Ji(), Ja.classList.add("peek"), clearInterval(Xi), Xi = setInterval(Ji, 1e3), clearTimeout(fi), fi = setTimeout(Qi, 6e3);
  }
  function Qi() {
    Ja.classList.remove("peek"), clearInterval(Xi), clearTimeout(fi);
  }
  function Ns() {
    const t = $i();
    if (!t) {
      Ja.classList.contains("peek") ? Qi() : Rl();
      return;
    }
    ya = { date: Ot(/* @__PURE__ */ new Date()), slot: t };
    const s = Ki(ya.date, t), u = st.checkins.find((f) => hi(f));
    Object.keys(Qa).forEach((f) => {
      Qa[f].input.value = (s == null ? void 0 : s[f]) ?? (u == null ? void 0 : u[f]) ?? 50, Ur(f);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Fa.classList.add("open"), Fa.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Qa.mood.input.focus());
  }
  function mi() {
    Fa.classList.remove("open"), Fa.setAttribute("aria-hidden", "true"), ya && (Oa = ya.date + "-" + ya.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Oa);
    } catch {
    }
    ya = null, eo();
  }
  function Nl() {
    if (!ya) return;
    if (hi(Ki(ya.date, ya.slot))) {
      mi();
      return;
    }
    const { date: t, slot: r } = ya;
    let s = Ki(t, r);
    s || (s = { date: t, slot: r }, st.checkins.unshift(s), st.checkins = st.checkins.slice(0, 2e3)), s.mood = Number(Qa.mood.input.value), s.energy = Number(Qa.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), fn(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: Vo("mood", s.mood), energy_label: Vo("energy", s.energy) }), Ft((r === "morning" ? "Morning" : "Evening") + " check-in saved"), mi(), er(), ka(), ho(), _a();
  }
  let Oa = "";
  try {
    Oa = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function eo() {
    const t = $i();
    Rs.hidden = !t, Ja.hidden = !t, t || Qi(), Ja.classList.toggle("due", !!t), Ja.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : jo()), Ja.title = t ? "Check in now" : jo();
  }
  function Zr() {
    eo();
    const t = $i();
    !t || Fa.classList.contains("open") || nt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !we.home.classList.contains("active") || on.classList.contains("open") || Oa !== Ot(/* @__PURE__ */ new Date()) + "-" + t && Ns());
  }
  Ja.addEventListener("click", Ns), o("checkinLater").addEventListener("click", mi), o("checkinSave").addEventListener("click", Nl), Fa.addEventListener("click", (t) => {
    t.target === Fa && mi();
  }), Fa.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), mi());
  }), setInterval(Zr, 3e4);
  function er() {
    const t = Ot(/* @__PURE__ */ new Date()), r = (s) => st.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const f = r(s);
      o(u).textContent = f ? Vo(s, f[s]) : "—";
    });
  }
  function ka() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((de, te) => {
      const Q = new Date(s.getFullYear(), s.getMonth(), s.getDate() + te), Te = Ot(Q), Ue = st.checkins.filter((Se) => Se.date === Te), _e = (Se) => {
        const xe = Ue.map((ct) => ct[Se]).filter((ct) => ct != null);
        return xe.length ? xe.reduce((ct, ut) => ct + ut, 0) / xe.length : null;
      };
      return { d: Q, key: Te, mood: _e("mood"), energy: _e("energy"), count: Ue.filter(hi).length, future: Q > r && Te !== Ot(r) };
    }), f = (de) => {
      const te = u.map((Q) => Q[de]).filter((Q) => Q != null);
      return te.length ? te.reduce((Q, Te) => Q + Te, 0) / te.length : null;
    }, S = f("mood"), R = f("energy"), z = (de, te) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + de + "</span><span>" + (te == null ? "—" : Ie(Vo("", te))) + '</span></div><div class="feelTrack"><span style="width:' + (te == null ? 0 : Math.max(4, te)) + "%;background:" + (te == null ? "transparent" : El(te)) + '"></span></div></div>', ie = u.filter((de) => de.mood != null && de.energy != null).sort((de, te) => te.mood + te.energy - (de.mood + de.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (S == null ? "No check-ins yet" : Ie(Vo("", (S + R) / 2))) + '</div><div class="weekCopy">' + (S == null ? "Your first check-in will appear here." : "on average this week" + (ie ? " · best day " + Ie(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ie.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (de) => '<div class="weekChip feelDay' + (de.future ? " future" : "") + (de.key === Ot(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ie(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(de.d)) + "</strong>" + (de.count >= 2 ? '<span class="weekTick">' + ge("check") + "</span>" : '<span class="feelDots">' + "●".repeat(de.count) + "</span>") + "</div>" + z("Mood", de.mood) + z("Energy", de.energy) + "</div>"
    ).join("") + "</div>";
  }
  const gi = o("upcomingCountSetting");
  gi.addEventListener("change", () => {
    Na = gi.value === "all" ? "all" : Number(gi.value), Si();
  });
  const Go = o("tempoRevealBtn"), tr = o("tempoExperiment"), ha = o("tempoQuad"), So = o("tempoDot"), Bl = o("tempoEstimate"), Pl = o("tempoReadout");
  let Uo = { x: 0.5, y: 0.5 }, vi = !1, Co = { total: 20, work: 45, rest: 15 };
  function nr(t, r, s, u) {
    const f = Math.max(r, Math.min(s, t));
    return Math.round((f - r) / u) * u + r;
  }
  function Kr(t, r) {
    const s = (t - 0.5) * 2, u = (r - 0.5) * 2, f = nr(
      Co.total + s * 5 + u * 8,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    ), S = nr(
      Co.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), R = nr(
      Co.rest + s * 6 + u * 6,
      Number(I.min),
      Number(I.max),
      Number(I.step)
    );
    return E.value = f, C.value = S, I.value = R, V.textContent = S + " sec", oe.textContent = R + " sec", Ba(), { total: f, work: S, rest: R };
  }
  function ar(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", f = Kr(t, r);
    Pl.textContent = s + " + " + u, Bl.textContent = f.total + " min", ha.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + f.total + " minutes");
  }
  function $r(t) {
    const r = ha.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    Uo = { x: s, y: u }, So.style.left = s * 100 + "%", So.style.top = u * 100 + "%", ar(s, u);
  }
  Go.addEventListener("click", () => {
    const t = tr.hidden;
    tr.hidden = !t, Go.setAttribute("aria-expanded", t ? "true" : "false"), Go.textContent = t ? "Now close this" : "Don’t try this!", t && (Co = {
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(I.value)
    }, Uo = { x: 0.5, y: 0.5 }, So.style.left = "50%", So.style.top = "50%", ar(Uo.x, Uo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const or = o("testingFeedbackForm"), Xr = o("testingFeedbackThanks"), Il = o("testingFeedbackAgain");
  or.addEventListener("submit", (t) => {
    t.preventDefault(), or.hidden = !0, Xr.hidden = !1, Ft("Feedback captured for prototype");
  }), Il.addEventListener("click", (t) => {
    t.preventDefault(), or.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), Xr.hidden = !0, or.hidden = !1;
  }), ha.addEventListener("pointerdown", (t) => {
    var r;
    vi = !0, $r(t);
    try {
      (r = ha.setPointerCapture) == null || r.call(ha, t.pointerId);
    } catch {
    }
  }), ha.addEventListener("pointermove", (t) => {
    vi && $r(t);
  }), ha.addEventListener("pointerup", (t) => {
    vi && (vi = !1, $r(t), A());
  }), ha.addEventListener("pointercancel", () => vi = !1), ha.addEventListener("keydown", (t) => {
    let { x: r, y: s } = Uo, u = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Uo = { x: r, y: s }, So.style.left = r * 100 + "%", So.style.top = s * 100 + "%", ar(r, s), A());
  });
  const on = o("workoutModal");
  let zt = null;
  function Yo(t) {
    return t.map((r) => ({ ...r }));
  }
  function Hl() {
    const t = Ye[ht];
    return {
      key: ht,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: Yo(Mt),
      strength: Yo(Je),
      cooldown: Yo(kn),
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(I.value),
      rounds: Number(tt.value) || 1
    };
  }
  function bi(t = !1) {
    lt = !!t, he = null, ye = null, wn(), zr(), zt = Hl(), o("moveEditorTitle").textContent = lt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !lt, o("warmupRow").hidden = lt, o("deleteMoveOpen").hidden = lt;
    const r = o("createMoveOptions");
    r.hidden = !lt;
    {
      const s = Ye[ht];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Zo(), lt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ye[ht];
      $a((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, _l("movement"), jr(), xa(), tr.hidden = !0, Go.setAttribute("aria-expanded", "false"), Go.textContent = "Don’t try this!", on.classList.toggle("createMode", lt), on.querySelector(".modal").classList.toggle("createMode", lt), on.classList.add("open"), on.setAttribute("aria-hidden", "false"), ko(), lt && Le();
  }
  function To() {
    const t = Ye[ht];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function Zo() {
    const t = To(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ye[ht];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, xo()) : (t.warmupOff = !t.warmupOff, A()), Zo());
  });
  function ir() {
    wn(), zr(), _s(), ye = null, he = null, on.classList.contains("createMode") && y(), on.classList.remove("createMode"), on.querySelector(".modal").classList.remove("createMode"), on.classList.remove("open"), on.setAttribute("aria-hidden", "true");
  }
  function Bs() {
    if (!zt) return;
    const t = zt;
    t.profile && (Ye[t.key] = JSON.parse(JSON.stringify(t.profile))), ht = t.key, Mt = Yo(t.warmup), Je = Yo(t.strength), kn = Yo(t.cooldown), E.value = t.total, C.value = t.work, I.value = t.rest, tt.value = t.rounds || 1;
    const r = Ye[ht];
    if (r) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === ht));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r.name);
        const f = s.querySelector(".panelCollapsedText");
        f && (f.textContent = r.name);
        const S = s.querySelector(".sourceTag");
        S && (S.textContent = r.source);
      }
      m.value = r.name;
    }
    A();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (lt) {
      const t = ht;
      delete Ye[t], lt = !1, vt = null, Hn(st.order.find((r) => Ye[r]) || Object.keys(Ye)[0]);
    } else
      Bs();
    ir();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    wn(), Dt && Zi();
    const t = Ye[ht], r = m.value.trim() || "New move";
    if (t && (t.name = r), Qe(), he = null, A(), lt && t)
      Oo(ht, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === ht)), lt = !1, vt = null, st.order.includes(ht) || st.order.push(ht), Ft("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const f = s.querySelector(".panelCollapsedText");
        f && (f.textContent = r);
      }
      Ft("Move saved");
    }
    zt = null, ir(), fn();
  }), on.addEventListener("click", (t) => {
    if (t.target === on) {
      if (lt) {
        const r = ht;
        delete Ye[r], lt = !1, vt = null, Hn(st.order.find((s) => Ye[s]) || Object.keys(Ye)[0]);
      } else
        Bs();
      ir();
    }
  }), gt(o("addMovementBtn"), "movement"), gt(o("addRestBtn"), "rest"), gt(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", xa), o("useGlobalRestTiming").addEventListener("change", xa), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    $a(t.dataset.movePreset, !0), A();
  })), o("includeWarmupPreset").addEventListener("change", xo), o("includeCooldownPreset").addEventListener("change", xo), o("includeWarmupPreset").addEventListener("change", ve), o("includeCooldownPreset").addEventListener("change", ve), m.addEventListener("input", ve), m.addEventListener("input", Yi), o("confirmAddMovement").addEventListener("click", Mo), o("confirmAddRest").addEventListener("click", Mo), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Mo();
  });
  const wi = o("countdown"), Jr = o("countNum"), qa = o("countdownPixelCanvas");
  let xi = null, Ko = "appear";
  class Ma {
    constructor(r, s, u, f, S, R, z) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = f, this.color = S, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = z, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Qr = [], Ps = 1, Sn = 1;
  function yt() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Sa() {
    var de;
    if (!qa) return;
    const t = yt(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Ps = r, Sn = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    qa.width = Math.floor(r * u), qa.height = Math.floor(s * u), qa.style.width = r + "px", qa.style.height = s + "px";
    const f = qa.getContext("2d");
    f.setTransform(u, 0, 0, u, 0, 0);
    const S = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, z = (de = window.matchMedia) == null ? void 0 : de.call(window, "(prefers-reduced-motion: reduce)").matches, ie = z ? 0 : 0.055;
    Qr = [];
    for (let te = 0; te < r; te += R)
      for (let Q = 0; Q < s; Q += R) {
        const Te = te - r / 2, Ue = Q - s / 2, _e = Math.sqrt(Te * Te + Ue * Ue), Se = z ? 0 : Math.random() * 75 + _e * 0.05, xe = new Ma({ width: r, height: s }, f, te, Q, S[Math.floor(Math.random() * S.length)], ie, Se);
        xe.maxSizeInteger = 4, xe.maxSize = Math.random() * 3.2 + 0.8, xe.sizeStep = 0.35 + Math.random() * 0.45, Qr.push(xe);
      }
  }
  function rr(t) {
    cancelAnimationFrame(xi), Ko = t;
    const r = qa == null ? void 0 : qa.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Ps, Sn);
      let u = !0;
      Qr.forEach((f) => {
        f[Ko](), f.isIdle || (u = !1);
      }), Ko === "disappear" && u || (xi = requestAnimationFrame(s));
    }
    xi = requestAnimationFrame(s);
  }
  function Ca() {
    cancelAnimationFrame(xi), Sa(), rr("appear"), setTimeout(() => rr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    wi.classList.contains("active") && Ca();
  });
  const to = o("pixelTrailCanvas"), Wn = to.getContext("2d");
  let Dn = !0, oa = 0.7, Nt = 600, no = [], Ta = null, Wa = { x: 0, y: 0, ready: !1 };
  function es() {
    const t = c.getBoundingClientRect(), r = yt(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / r), f = Math.max(1, t.height / r);
    to.width = Math.max(1, Math.floor(u * s)), to.height = Math.max(1, Math.floor(f * s)), to.style.width = u + "px", to.style.height = f + "px", Wn.setTransform(s, 0, 0, s, 0, 0);
  }
  function Is(t, r) {
    if (!Dn) return;
    const s = performance.now();
    Wa.ready || (Wa = { x: t, y: r, ready: !0 });
    const u = 7;
    for (let f = 1; f <= u; f++) {
      const S = f / u;
      no.push({
        x: Wa.x + (t - Wa.x) * S,
        y: Wa.y + (r - Wa.y) * S,
        born: s - (u - f) * 10
      });
    }
    Wa = { x: t, y: r, ready: !0 };
  }
  function yi(t) {
    if (Ta = null, !v) return;
    if (!we.workout.classList.contains("active")) {
      Ta = requestAnimationFrame(yi);
      return;
    }
    const r = c.getBoundingClientRect(), s = yt();
    Wn.clearRect(0, 0, r.width / s, r.height / s), Dn && (no = no.filter((f) => t - f.born < Nt), Wn.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", no.forEach((f) => {
      const S = (t - f.born) / Nt, R = (1 - S) * oa, z = Math.round(f.x / 14) * 14, ie = Math.round(f.y / 14) * 14;
      Wn.globalAlpha = Math.max(0, R);
      const de = 2 + 5 * (1 - S) * oa;
      Wn.fillRect(z - de / 2, ie - de / 2, de, de);
    }), Wn.globalAlpha = 1), Ta = requestAnimationFrame(yi);
  }
  c.addEventListener("pointermove", (t) => {
    const r = c.getBoundingClientRect(), s = yt();
    Is((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => Wa.ready = !1), new ResizeObserver(es).observe(c), es(), Ta = requestAnimationFrame(yi);
  const ao = o("movementRippleCanvas"), Lo = ao.getContext("2d");
  let ia = !0, nn = null, sr = performance.now();
  function ts() {
    const t = ao.parentElement.getBoundingClientRect(), r = yt(), s = Math.max(1, t.width / r), u = Math.max(1, t.height / r), f = Math.min(window.devicePixelRatio || 1, 2);
    ao.width = Math.max(1, Math.floor(s * f)), ao.height = Math.max(1, Math.floor(u * f)), ao.style.width = s + "px", ao.style.height = u + "px", Lo.setTransform(f, 0, 0, f, 0, 0);
  }
  function ns() {
    var t;
    return Rt || ((t = Ne[je]) == null ? void 0 : t.kind) === "rest";
  }
  function as() {
    const t = Ne[je];
    return ns() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function $o(t) {
    if (nn = null, !v) return;
    if (!we.workout.classList.contains("active")) {
      nn = requestAnimationFrame($o);
      return;
    }
    const r = ao.parentElement.getBoundingClientRect(), s = yt(), u = Math.max(1, r.width / s), f = Math.max(1, r.height / s);
    if (Lo.clearRect(0, 0, u, f), ia) {
      const S = as(), R = (t - sr) % S / S, z = 15, ie = Math.max(8, Math.round(z * f / Math.max(1, u))), de = u / (z + 1), te = f / (ie + 1), Q = u * 0.5, Te = f * 0.52, Ue = Math.hypot(Q, Te), Se = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let xe = 1; xe <= ie; xe++)
        for (let ct = 1; ct <= z; ct++) {
          const ut = ct * de, Ee = xe * te, pt = Math.hypot(ut - Q, Ee - Te) / Ue, St = ns(), at = St ? Math.exp(-Math.pow((pt - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Xe = Math.exp(-Math.pow((pt - R * 1.25) * 7, 2)), an = St ? at : Xe, yn = St ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - pt * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - pt * 5) ** 2, Vt = St ? 1.4 + an * 4.2 * yn : 1.2 + an * 5 * yn;
          Lo.beginPath(), Lo.arc(ut, Ee, Vt, 0, Math.PI * 2), Lo.fillStyle = `rgba(${Se},${St ? 0.08 + an * 0.48 : 0.05 + an * 0.55})`, Lo.fill();
        }
    }
    nn = requestAnimationFrame($o);
  }
  new ResizeObserver(ts).observe(ao.parentElement), ts(), nn = requestAnimationFrame($o);
  const ki = o("exerciseTitle"), gn = o("exerciseMeta"), Va = o("stepLabel"), os = o("digits"), lr = o("fill"), oo = o("progress"), dr = o("pause"), Fl = o("nextName"), Ol = o("nextMeta"), is = o("nextIcon"), Rn = o("skipNextSession");
  let Vn = null;
  function zn(t) {
    for (let r = Math.max(0, t); r < Ne.length; r++)
      if (!Ne[r].sessionHidden) return r;
    return -1;
  }
  function Nn() {
    const t = Ne[je];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Rt) {
      const u = zn(je + 1), f = u >= 0 ? Ne[u] : null;
      return f ? { name: f.name, meta: io(f), icon: Ao(f) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = zn(je + 1), s = r >= 0 ? Ne[r] : null;
    return s ? { name: s.name, meta: io(s), icon: Ao(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function cr() {
    if (!Ne[je]) return Ne.length;
    const r = zn(je + 1);
    return r < 0 ? Ne.length : r + 1;
  }
  function Ao(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function io(t) {
    return t.kind === "video" ? "YouTube · " + Ka(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function Mi() {
    return Ne.length && Ne[Ne.length - 1].round || 1;
  }
  function ur(t) {
    const r = Ne[t];
    if (!r) return "";
    const s = Mi();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ne.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = Ne.filter((f) => f.round === r.round && !f.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function Hs() {
    return oo.querySelector('[data-step="' + je + '"]');
  }
  function Fs() {
    Ne[je] && Number(oo.dataset.round) !== (Ne[je].round || 1) && sa(), [...oo.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < je), t.classList.toggle("active", r === je), t.classList.toggle("rewindable", r <= je), t.disabled = r > je, r === je && t.style.setProperty("--segment-progress", "0%");
    }), Ne[je] && (Va.textContent = ur(je), so());
  }
  function pr(t) {
    const r = Ne.indexOf(t);
    r < 0 || r <= je || (t.sessionHidden = !t.sessionHidden, za(), Ft((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Si() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = cr(), s = Ne.slice(r);
    (Na === "all" ? s : s.slice(0, Math.max(1, Number(Na) || 1))).forEach((f) => {
      const S = document.createElement("section");
      S.className = "upcomingCard" + (f.sessionHidden ? " sessionHidden" : "") + (yr(f) ? " noMeta" : ""), S.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ge(Ao(f)) + '</div><div><div class="upcomingName">' + Ie(f.name) + '</div><div class="upcomingMeta">' + Ie(io(f)) + (Mi() > 1 ? " · round " + f.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (f.sessionHidden ? "Include this session" : "Skip this session") + "</button>", S.querySelector(".skipSessionBtn").addEventListener("click", () => pr(f)), t.appendChild(S);
    });
  }
  function za() {
    var r;
    const t = Nn();
    Fl.textContent = t.name, Ol.textContent = t.meta, is.innerHTML = ge(t.icon);
    {
      const s = Rt ? Ne[zn(je + 1)] : ((r = Ne[je]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ne[zn(je + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && yr(s)));
    }
    if (Vn = null, Rt) {
      const s = zn(je + 1);
      s >= 0 && (Vn = Ne[s]);
    } else {
      const s = Ne[je];
      if (s && s.rest > 0)
        Vn = null;
      else {
        const u = zn(je + 1);
        u >= 0 && (Vn = Ne[u]);
      }
    }
    Rn && (Rn.hidden = !Vn, Rn.textContent = Vn != null && Vn.sessionHidden ? "Include this session" : "Skip this session"), Si();
  }
  Rn.addEventListener("click", () => {
    Vn && (Vn.sessionHidden = !Vn.sessionHidden, Ft((Vn.sessionHidden ? "Hidden " : "Included ") + Vn.name + " for this session"), za());
  });
  let ra = null, hr = null;
  function _o(t, r = {}) {
    const s = Ye[ht];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: ht, ...r });
  }
  function fr() {
    const t = Ye[ht];
    ra = { key: ht, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(hr), hr = setInterval(() => {
      ra && !bn && ra.active++;
    }, 1e3), _o("started", { steps: Ne.length });
  }
  function Os(t) {
    if (clearInterval(hr), !ra) return;
    const r = ra;
    ra = null, _o(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (st.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), st.history = st.history.slice(0, 1e3), fn(), ho(), _a());
  }
  function ql() {
    k("workout"), Bt();
    const t = zn(0);
    t >= 0 && Ne[t].kind === "video" && Vs(Ne[t]);
  }
  function rs() {
    wr(), Os(!1), clearInterval(At), clearInterval(Za), Rt = !1, vn(!1), o("app").classList.remove("resting"), wi.classList.remove("active"), k("home");
  }
  function Bt() {
    wi.classList.add("active");
    let t = 5;
    Jr.textContent = t, requestAnimationFrame(Ca), clearInterval(Za), Za = setInterval(() => {
      t--, t > 0 ? (Jr.textContent = t, Ca()) : (clearInterval(Za), Jr.textContent = "GO", Ca(), setTimeout(() => {
        wi.classList.remove("active"), cancelAnimationFrame(xi), Cn();
      }, 650));
    }, 1e3);
  }
  function sa() {
    var r;
    oo.innerHTML = "";
    const t = ((r = Ne[Math.max(0, je)] || Ne[0]) == null ? void 0 : r.round) || 1;
    oo.dataset.round = t, Ne.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const f = document.createElement("button");
      f.dataset.step = u, f.type = "button", f.className = "progressSegment", f.setAttribute("aria-label", "Go to " + s.name), f.addEventListener("click", () => {
        u <= je && ja(u);
      }), oo.appendChild(f);
    });
  }
  function vn(t) {
    t = !!t;
    const r = bn !== t;
    if (bn = t, dr.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), xn && Pt)
      try {
        t ? Pt.pauseVideo() : Pt.playVideo();
      } catch {
      }
    r && ra && _o(t ? "paused" : "resumed");
  }
  function ja(t) {
    t < 0 || t >= Ne.length || t > je || (clearInterval(At), Rt = !1, o("app").classList.remove("resting"), je = t, vn(!1), Do(), At = setInterval(la, 1e3));
  }
  function Cn() {
    if (je = zn(0), vn(!1), sa(), je < 0) {
      ki.textContent = "No activities", gn.textContent = "Open Edit and enable or add a movement", gn.hidden = !1;
      return;
    }
    fr(), Do(), clearInterval(At), At = setInterval(la, 1e3);
  }
  const La = o("videoStage"), ro = o("videoSound"), Xo = 0, Eo = 1, Wl = 2;
  let ss = 0, $t = null, fa = null, Pt = null, Jo = null, mr = 0, gr = !1, xn = null, vr = null;
  function qs() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : $t || ($t = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const f = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(f), clearTimeout(S), r(window.YT));
      }, 100), S = setTimeout(() => {
        clearInterval(f), $t = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(f), clearTimeout(S), $t = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), $t);
  }
  function Ws() {
    return fa || (fa = qs().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Pt = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Pt), onStateChange: (u) => ls(u.data), onError: (u) => zs(u.data) }
      });
    })), fa.catch(() => {
      fa = null;
    }), fa);
  }
  function Vs(t) {
    !(t != null && t.videoId) || t.videoError || Ws().then((r) => {
      xn || Jo === t.videoId || (Jo = t.videoId, mr = Number(t.start) || 0, gr = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: mr }));
    }).catch(() => {
    });
  }
  function Bn() {
    const t = zn(je + 1);
    t >= 0 && Ne[t].kind === "video" && Vs(Ne[t]);
  }
  function ls(t) {
    if (!xn) {
      t === Eo && !gr && (gr = !0, Pt.pauseVideo(), Pt.seekTo(mr, !0));
      return;
    }
    La.classList.toggle("playing", t === Eo), Ne[je] === xn && performance.now() > ss && (t === Eo && bn ? vn(!1) : t === Wl && !bn && vn(!0)), t === Eo && cs(xn.videoId, Pt.getDuration()) && fn(), t === Xo && Ci();
  }
  function zs(t) {
    const r = xn;
    if (!r) {
      Jo = null;
      return;
    }
    t === 101 || t === 150 ? (zl(r.videoId), Ft("That video can’t play outside YouTube, so it was skipped")) : Ft("The video couldn’t play, so it was skipped"), Ci();
  }
  function js(t) {
    if (o("app").classList.add("videoStep"), ro.hidden = !0, xn = t, clearTimeout(vr), !t.videoId) {
      Ft("This video step has no link yet, so it was skipped"), setTimeout(() => Ci(), 0);
      return;
    }
    Ws().then((r) => {
      if (xn !== t) return;
      ss = performance.now() + 1500;
      const s = Number(t.start) || 0;
      Jo !== t.videoId ? (Jo = t.videoId, mr = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), bn && r.pauseVideo(), vr = setTimeout(() => {
        xn !== t || bn || (r.getPlayerState() !== Eo ? (r.mute(), r.playVideo(), ro.hidden = !1) : r.isMuted() && (ro.hidden = !1));
      }, 1600);
    }).catch(() => {
      xn === t && (Ft("YouTube didn’t load, so the video was skipped"), Ci());
    });
  }
  function br() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, f = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(f)) + "px");
  }
  window.addEventListener("resize", br);
  function wr() {
    clearTimeout(vr);
    const t = xn;
    if (xn = null, o("app").classList.remove("videoStep"), La.classList.remove("playing"), ro.hidden = !0, t && Pt) {
      try {
        Pt.pauseVideo();
      } catch {
      }
      Jo = null;
    }
  }
  function Ci() {
    const t = xn;
    !t || Ne[je] !== t || (wr(), clearInterval(At), lo(), At = setInterval(la, 1e3));
  }
  ro.addEventListener("click", () => {
    Pt && (Pt.unMute(), Pt.playVideo()), ro.hidden = !0;
  });
  function Vl(t) {
    var u;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = Pt && xn === t && Number((u = Pt.getDuration) == null ? void 0 : u.call(Pt)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function ds(t, r) {
    const s = Ye[ht];
    [Mt, Je, kn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((f) => {
      f && f.kind === "video" && f.videoId === t && r(f);
    }));
  }
  function cs(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && ds(t, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function zl(t) {
    ds(t, (r) => {
      r.videoError = "embed";
    }), fn();
  }
  function Gs(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      on.classList.contains("open") ? he || A() : (A(), fn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === r && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === r && u === 401 && (t.videoError = "embed", s());
    }), Us(r).then((u) => {
      cs(r, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function Us(t) {
    return qs().then((r) => new Promise((s, u) => {
      const f = document.createElement("div");
      f.className = "videoProbe", f.setAttribute("aria-hidden", "true");
      const S = document.createElement("div");
      f.appendChild(S), o("app").appendChild(f);
      let R = null, z = !1;
      const ie = (Q, Te) => {
        z || (z = !0, clearTimeout(de), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          f.remove();
        }, 0), Te ? u(Te) : s(Q));
      }, de = setTimeout(() => ie(0), 2e4), te = () => {
        var Te;
        const Q = Number((Te = R == null ? void 0 : R.getDuration) == null ? void 0 : Te.call(R)) || 0;
        return Q > 0 && ie(Q), Q > 0;
      };
      R = new r.Player(S, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            te() || (R.mute(), R.playVideo());
          },
          onStateChange: () => te(),
          onError: (Q) => ie(0, Q.data === 101 || Q.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Do() {
    Rt = !1;
    const t = Ne[je];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? js(t) : wr(), Xt = t.duration, Ra = t.duration, ki.textContent = t.name, gn.textContent = t.group, gn.hidden = !0, Va.textContent = ur(je), ra && _o("step", { name: t.name, group: t.group, kind: t.kind, step: je + 1, of: Ne.length, round: t.round || 1, rounds: Mi(), duration: t.duration }), za(), Fs(), Bn(), t.kind === "video" && setTimeout(br, 0);
  }
  function so() {
    var f;
    const t = ((f = Ne[je]) == null ? void 0 : f.kind) === "video" && !Rt, r = t && Xt >= 60;
    os.textContent = r ? Ka(Xt) : Xt, os.classList.toggle("long", r), t && (o("videoClock").textContent = Ka(Xt) + " left");
    const s = Xt / Ra * 100;
    lr.style.width = s + "%";
    const u = Hs();
    if (u && !Rt) {
      const S = 100 - s;
      u.style.setProperty("--segment-progress", S + "%");
    }
  }
  function la() {
    var r, s;
    if (bn) return;
    const t = Ne[je];
    if ((t == null ? void 0 : t.kind) === "video" && !Rt && xn === t) {
      const u = Number((r = Pt == null ? void 0 : Pt.getCurrentTime) == null ? void 0 : r.call(Pt)) || 0, f = Number(t.start) || 0, S = Vl(t);
      Ra = Math.max(1, S - f), (u > f || ((s = Pt == null ? void 0 : Pt.getPlayerState) == null ? void 0 : s.call(Pt)) === Eo) && (Xt = Math.max(0, Math.ceil(S - u))), so(), u > f && u >= S - 0.25 && Ci();
      return;
    }
    Xt--, so(), Xt <= 0 && (t.rest > 0 ? Ys(t.rest) : lo());
  }
  function Ys(t) {
    var s;
    Rt = !0, o("app").classList.add("resting");
    const r = Hs();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(At), Xt = t, Ra = t, ra && _o("rest", { duration: t }), ki.textContent = "Rest", gn.textContent = (s = Ne[je]) != null && s.roundBreakAfter ? "Round " + (Ne[je].round + 1) + " next" : "Recovery", za(), so(), At = setInterval(() => {
      bn || (Xt--, so(), Xt <= 0 && (clearInterval(At), lo(), At = setInterval(la, 1e3)));
    }, 1e3);
  }
  function lo() {
    Rt = !1;
    const t = zn(je + 1);
    if (t >= 0)
      je = t, Do();
    else {
      clearInterval(At), wr(), vn(!1), o("app").classList.remove("resting"), ki.textContent = "Complete", gn.textContent = "Move finished", gn.hidden = !1, os.textContent = "✓";
      {
        const r = Mi();
        Va.textContent = r > 1 ? r + " rounds done" : Ne.filter((s) => !s.roundBreak).length + " steps done";
      }
      Os(!0);
      {
        const r = $s(7).reduce((s, u) => s + u.minutes, 0);
        gn.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      lr.style.width = "100%", za();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    jl(), vn(!1);
  });
  function jl() {
    clearInterval(At);
    const t = Ne[je];
    if (Rt) {
      Rt = !1, o("app").classList.remove("resting");
      const s = zn(je + 1);
      s >= 0 ? (je = s, Do(), At = setInterval(la, 1e3)) : lo();
      return;
    }
    if (t && t.rest > 0) {
      Ys(t.rest);
      return;
    }
    const r = zn(je + 1);
    r >= 0 ? (je = r, Do(), At = setInterval(la, 1e3)) : lo();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(At), vn(!1), Rt) {
      const t = Ne[je];
      Xt = t.rest, Ra = t.rest, ki.textContent = "Rest", gn.textContent = "Recovery", o("app").classList.add("resting"), za(), so();
    } else
      Do();
    At = setInterval(Rt ? () => {
      bn || (Xt--, so(), Xt <= 0 && (clearInterval(At), lo(), At = setInterval(la, 1e3)));
    } : la, 1e3);
  });
  function Qo(t, r, s, u) {
    let f = 0, S = null, R = !1;
    function z() {
      S && cancelAnimationFrame(S), S = null, f = 0, R = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function ie(Q) {
      if (!R) return;
      f || (f = Q);
      const Te = Math.min(1, (Q - f) / s);
      if (r.style.width = Te * 100 + "%", Te >= 1) {
        R = !1, S && cancelAnimationFrame(S), S = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      S = requestAnimationFrame(ie);
    }
    function de(Q) {
      var Te;
      if (!(Q && Q.button !== void 0 && Q.button !== 0)) {
        Q == null || Q.preventDefault(), z(), R = !0, t.classList.add("holding");
        try {
          (Te = t.setPointerCapture) == null || Te.call(t, Q.pointerId);
        } catch {
        }
        S = requestAnimationFrame(ie);
      }
    }
    function te() {
      R && z();
    }
    t.addEventListener("pointerdown", de), t.addEventListener("pointerup", te), t.addEventListener("pointercancel", te), t.addEventListener("lostpointercapture", te), t.addEventListener("keydown", (Q) => {
      (Q.key === " " || Q.key === "Enter") && !Q.repeat && de(Q);
    }), t.addEventListener("keyup", (Q) => {
      (Q.key === " " || Q.key === "Enter") && te();
    });
  }
  const Ti = o("endWorkout");
  Qo(Ti, o("holdEndFill"), 1500, rs);
  const Ro = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Ro.classList.add("open"), Ro.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Ro.classList.remove("open"), Ro.setAttribute("aria-hidden", "true");
  });
  function co() {
    const t = ht, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ye[t], st.order = st.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ye[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, st.order.push(u), s = Oo(u, Ye[u]);
    }
    Ro.classList.remove("open"), Ro.setAttribute("aria-hidden", "true"), zt = null, ir(), Hn(s.dataset.workout), fn(), Ft("Move deleted");
  }
  Qo(o("deleteMoveYes"), o("deleteMoveFill"), 1500, co);
  const xr = a.querySelector(".rubberTabs"), uo = o("rubberIndicator");
  function Li(t, r = !0) {
    if (!t || !xr || !uo) return;
    const s = xr.getBoundingClientRect(), u = t.getBoundingClientRect();
    uo.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const f = yt();
    uo.style.left = (u.left - s.left) / f + xr.scrollLeft + "px", uo.style.width = u.width / f + "px", r && (uo.style.transform = "scaleX(1.08)", setTimeout(() => uo.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), Li(t, !0);
  })), requestAnimationFrame(() => Li(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Li(a.querySelector(".tab.active"), !1));
  const rn = o("pixelTrailToggle"), us = o("rippleToggle"), po = o("trailStrength"), ei = o("trailLife");
  function da(t, r) {
    nt()[t] = r, fn();
  }
  const Zs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ot(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function yr(t) {
    var r;
    return !!((r = nt().hideMeta) != null && r[ot(t)]);
  }
  function Ai() {
    const t = /* @__PURE__ */ new Map(), r = (s, u, f) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const S = ot(s);
      let R = t.get(S);
      R || (R = { key: S, label: S === "rest" ? "Rest" : S === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(S, R)), R.kinds.add(S === "rest" ? "Rest" : S === "video" ? "Video" : u), R.moves.add(f), R.count++;
    };
    return Object.values(Ye).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Ke)).forEach((f) => r(f, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((f) => r(f, f.presetRole === "warmup" ? "Warm-up" : f.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : hn)).forEach((f) => r(f, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Zs.indexOf(s.kind) - Zs.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let _i = "all";
  function Aa() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return Ai().filter((r) => (_i === "all" || r.kind === _i) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function Ei() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = nt().hideMeta || {}, s = Aa();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((f) => {
      const S = !r[f.key], R = f.count ? (f.moves.length > 2 ? f.moves.slice(0, 2).join(", ") + " + " + (f.moves.length - 2) + " more" : f.moves.join(", ")) + " · " + f.count + " step" + (f.count === 1 ? "" : "s") : "Not used yet", z = document.createElement("tr");
      z.className = S ? "" : "off", z.innerHTML = '<td><div class="metaType">' + Ie(f.label) + '</div><div class="metaSub">' + Ie(f.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Ie(f.kind) + '</td><td class="metaUsedCol">' + Ie(R) + '</td><td class="metaSwitchCol"><button class="switch' + (S ? " on" : "") + '" type="button" role="switch" aria-checked="' + S + '" aria-label="Second line for ' + Ie(f.label) + ' on phones"></button></td>', z.querySelector(".switch").addEventListener("click", () => ps([f.key], S)), t.appendChild(z);
    });
    const u = s.filter((f) => r[f.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function ps(t, r) {
    const s = { ...nt().hideMeta || {} };
    t.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), da("hideMeta", s), Ei(), Be(), za();
  }
  o("metaSearch").addEventListener("input", Ei), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    _i = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), Ei();
  })), o("metaHideAll").addEventListener("click", () => ps(Aa().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => ps(Aa().map((t) => t.key), !1));
  const No = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...nt().toggles || {} };
  function kr() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", No[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = No[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => No[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    No[t.dataset.toggle] = No[t.dataset.toggle] === !1, kr(), da("toggles", { ...No });
  })), kr();
  function hs() {
    rn.classList.toggle("on", Dn), us.classList.toggle("on", ia), po.value = Math.round(oa * 100), o("trailStrengthValue").textContent = po.value + "%", ei.value = Nt, o("trailLifeValue").textContent = ei.value + " ms";
  }
  nt().trailEnabled !== void 0 && (Dn = nt().trailEnabled), nt().rippleEnabled !== void 0 && (ia = nt().rippleEnabled), nt().trailStrength !== void 0 && (oa = nt().trailStrength), nt().trailMaxAge !== void 0 && (Nt = nt().trailMaxAge), hs(), rn.addEventListener("click", () => {
    Dn = !Dn, rn.classList.toggle("on", Dn), Dn || (no = []), da("trailEnabled", Dn);
  }), us.addEventListener("click", () => {
    ia = !ia, us.classList.toggle("on", ia), da("rippleEnabled", ia);
  }), po.addEventListener("input", () => {
    oa = Number(po.value) / 100, o("trailStrengthValue").textContent = po.value + "%";
  }), po.addEventListener("change", () => da("trailStrength", oa)), ei.addEventListener("input", () => {
    Nt = Number(ei.value), o("trailLifeValue").textContent = ei.value + " ms";
  }), ei.addEventListener("change", () => da("trailMaxAge", Nt)), gi.addEventListener("change", () => da("upcomingCount", Na));
  function Di(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), n(a);
  }
  Di(nt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    Di(t.dataset.theme), da("theme", t.dataset.theme);
  }));
  const Tn = { steps: null, weather: null, ...nt().entities || {} };
  let Qt = null, Ri = {};
  function Ks(t) {
    const r = Object.values(t).filter((z) => z.entity_id.startsWith("sensor.") || z.entity_id.startsWith("input_number.")), s = (z) => z.attributes.friendly_name || z.entity_id, u = r.filter((z) => /step/i.test(z.entity_id) || /step/i.test(s(z)) || ["steps", "step"].includes(String(z.attributes.unit_of_measurement || "").toLowerCase())), f = r.filter((z) => !u.includes(z)), S = (z, ie) => s(z).localeCompare(s(ie)), R = (z, ie) => /health_steps/.test(ie.entity_id) - /health_steps/.test(z.entity_id) || S(z, ie);
    return { suggested: u.sort(R), rest: f.sort(S), label: s };
  }
  function ti(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: f } = Ks(t), S = (ie) => '<option value="' + Ie(ie.entity_id) + '">' + Ie(f(ie)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(S).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(S).join("") + "</optgroup>" : ""), r.value = Tn.steps || "";
    const R = o("stepsStatus"), z = Tn.steps && t[Tn.steps];
    R.textContent = z ? "Connected · " + f(z) : R.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Tn.steps = o("stepsEntity").value || null, da("entities", { ...Tn }), Ri = {}, Cr(), Qt && (ti(Qt), fs(Qt));
  });
  function Mr(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function Sr() {
    const t = Tn.steps && (Qt == null ? void 0 : Qt[Tn.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function fs(t) {
    var u;
    const r = Tn.steps, s = r ? Number((u = t[r]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? Mr(s) : "—" : "Set up in Settings";
  }
  let Ni = 0;
  async function Cr() {
    const t = Tn.steps;
    if (!t || !l.ws) return;
    Ni = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), f = (u == null ? void 0 : u[t]) || [], S = {};
      if (f.forEach((R) => {
        Number.isFinite(R.max) && (S[Ot(new Date(R.start))] = R.max);
      }), !Object.keys(S).length) {
        const R = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[t]) || []).forEach((z) => {
          const ie = Number(z.s ?? z.state), de = z.lu ? z.lu * 1e3 : Date.parse(z.last_updated || z.last_changed);
          if (!Number.isFinite(ie) || !de) return;
          const te = Ot(new Date(de));
          S[te] = Math.max(S[te] || 0, ie);
        });
      }
      Ri = S, _a();
    } catch {
    }
  }
  function ho() {
    _a();
  }
  ho(), setInterval(() => {
    ho(), ka(), eo();
  }, 10 * 60 * 1e3);
  function $s(t) {
    const r = {}, s = {};
    st.history.forEach((R) => {
      const z = Ot(new Date(R.start));
      r[z] = (r[z] || 0) + (R.seconds || 0) / 60, s[z] = (s[z] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), f = Ot(u), S = [];
    for (let R = t - 1; R >= 0; R--) {
      const z = new Date(u.getFullYear(), u.getMonth(), u.getDate() - R), ie = Ot(z), de = st.checkins.filter((Q) => Q.date === ie), te = (Q) => {
        const Te = de.map((Ue) => Ue[Q]).filter(Boolean);
        return Te.length ? Te.reduce((Ue, _e) => Ue + _e, 0) / Te.length : null;
      };
      S.push({
        key: ie,
        date: z,
        minutes: Math.round(r[ie] || 0),
        moves: s[ie] || 0,
        steps: ie === f && Sr() != null ? Sr() : Ri[ie] ?? null,
        mood: te("mood"),
        energy: te("energy")
      });
    }
    return S;
  }
  function Gl(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function _a() {
    const t = o("insightCard");
    if (!t) return;
    const r = $s(30), s = Gl(r), u = r.reduce((de, te) => de + te.minutes, 0), f = /* @__PURE__ */ new Date(), S = Ot(f), R = Ot(new Date(f.getFullYear(), f.getMonth(), f.getDate() - (f.getDay() + 6) % 7)), z = r.filter((de) => de.key >= R && de.key <= S).reduce((de, te) => de + te.minutes, 0), ie = (de, te, Q) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + de + '</div><div><div class="activityRowName">' + Ie(te) + '</div><div class="activityRowMeta">' + Ie(Q) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ge("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ie(ge("clock"), "This week", z + " min") + ie(ge("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + ie(ge("calendar"), "30 days", u + " min") + "</div>";
  }
  const ms = {
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
  }, Ul = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", ni = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Tr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Lr = 0;
  const Ar = (t, r) => '<path class="' + r + '" d="' + t + '"/>', Yl = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', jn = (t, r, s, u) => {
    const f = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Yl(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + f) + " " + (r - f) + "L" + (t + s) + " " + r + "L" + (t + f) + " " + (r + f) + "L" + t + " " + (r + s) + "L" + (t - f) + " " + (r + f) + "L" + (t - s) + " " + r + "L" + (t - f) + " " + (r - f) + 'Z"/>';
  }, Bi = ([t, r, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Xs = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Pi = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Zl = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Js(t, r, s, u) {
    return t === "clear" ? r ? Bi(s ? Tr.l : Tr.s, u) + (s ? jn(70, 20, 5.83, 1) + jn(78.33, 41.67, 3.75, 0.8) + jn(60, 71.67, 3.33, 0.6) : jn(42, 12, 3.5, 1) + jn(47, 25, 2.25, 0.8) + jn(36, 43, 2, 0.6)) : Xs(u, s) : t === "partly" ? (r ? Bi(s ? Tr.lp : Tr.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Ar(s ? ni.lp : ni.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? jn(73.33, 16.67, 4.17, 0.9) : jn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? Ar(s ? ni.lc : ni.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? jn(15, 15, 3.75, 0.8) + jn(76.67, 13.33, 2.92, 0.6) : jn(9, 9, 2.25, 0.8) + jn(46, 8, 1.75, 0.6) : "") : Ar(s ? ni.lr : ni.s, "wxCloudLight") + (t === "rain" ? Pi(s) : Zl(s));
  }
  const Qs = () => {
    var t;
    return ((t = Qt == null ? void 0 : Qt["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let Pn = nt().weatherStyle || "bitmap", _r = nt().weatherLayout === "strip" ? "strip" : "tiles", Ii = nt().weatherMotion !== !1;
  const Ga = () => Ii && !Ve(), ai = /* @__PURE__ */ new Map(), Er = 700, el = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function Hi(t, r, s, u = Pn, f, S) {
    let R = Ul(t);
    const z = R === "night" || (S != null ? !!S : !!s && Qs());
    R === "night" && (R = "clear");
    const ie = r ? 90 : 54, de = Tl(t, z), te = performance.now();
    let Q = f ? ai.get(f) : null;
    if (f && !Q ? ai.set(f, Q = { key: de, t0: -1e9 }) : Q && Q.key !== de && (Q.fromKey = Q.key, Q.from = Q.last || null, Q.key = de, Q.t0 = te), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + de + '"' + (f ? ' data-wx-slot="' + f + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + ie + '"></canvas></span>';
    let Te = "";
    if (Q && te - Q.t0 < Er && (Ga() || Ve())) {
      const Ue = el(Q.fromKey);
      Te = '<span class="wxLayer wxOut ' + Ue.k + (Ue.night ? " night" : "") + '" style="animation-delay:' + Math.round(Q.t0 - te) + 'ms"><svg viewBox="0 0 ' + ie + " " + ie + '">' + Js(Ue.k, Ue.night, r, "wxg" + ++Lr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (z ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ie + " " + ie + '">' + Js(R, z, r, "wxg" + ++Lr) + "</svg>" + Te + "</span>";
  }
  function e() {
    const t = o("app"), r = getComputedStyle(t), s = (z) => r.getPropertyValue(z).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([z, ie]) => {
      s(ie) && (u[z] = s(ie));
    });
    const f = s("--color-text-primary") || "#f1f1f1", S = s("--color-bg-card") || "#222222", R = t.classList.contains("light");
    return { colors: u, ink: R ? f : S, paper: R ? S : f };
  }
  function n(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = e(), f = Ga(), S = Ve();
    s.forEach((R) => {
      var Q;
      const z = R.dataset.wx, ie = R.dataset.wxSlot ? ai.get(R.dataset.wxSlot) : null;
      let de = Cd(z, u.colors);
      if (ie && ie.key === z) {
        const Te = (r - ie.t0) / Er;
        Te < 1 && (f || S) && (de = Eu(ie.from || Cd(ie.fromKey, u.colors), de, Math.max(0, Te), u.colors, S)), ie.last = de;
      }
      const te = Uc(de, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: f });
      R.width !== te.w && (R.width = te.w), R.height !== te.h && (R.height = te.h), (Q = R.getContext("2d")) == null || Q.putImageData(new ImageData(te.data, te.w, te.h), 0, 0);
    });
  }
  let i = null, d = -1;
  function p(t) {
    if (i = null, !v) return;
    const r = Ga(), s = Math.floor(t / 100), u = [...ai.values()].some((ie) => t - ie.t0 < Er), f = [...Re.values()].some((ie) => t - ie.t0 < ie.dur), S = we.home.classList.contains("active"), R = jt.classList.contains("open"), z = r && Pn === "smooth" && (R || S && _r === "strip");
    !document.hidden && (u || f || z || r && s !== d) && (d = s, S && (n(o("weatherCard"), t), Fe(o("weatherCard"), t)), R && (n(jt, t), Fe(jt, t))), (r || u || f) && (i = requestAnimationFrame(p));
  }
  function w() {
    o("app").classList.toggle("wxMotion", Ga()), !i && v && (i = requestAnimationFrame(p));
  }
  let h = [];
  const g = 36e5, M = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function D() {
    const t = /* @__PURE__ */ new Date(), r = (S, R) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + S, R), s = [], u = [], f = [...Array(6)].map((S, R) => {
      const z = r(R, 6), ie = r(R, 18), de = r(R + 1, 6), te = h.find((Te) => Ot(new Date(Te.datetime)) === Ot(z)), Q = (Te, Ue, _e) => {
        const Se = s.filter((ut) => ut.t >= +Te && ut.t < +Ue);
        if (Se.length) {
          const ut = {};
          return Se.forEach((Ee) => {
            ut[Ee.c] = (ut[Ee.c] || 0) + (M.has(Ee.c) ? 2 : 1);
          }), Object.entries(ut).sort((Ee, pt) => pt[1] - Ee[1])[0][0];
        }
        const xe = u.find((ut) => {
          const Ee = +new Date(ut.datetime);
          return Ee >= +Te - 3 * g && Ee < +Ue && (ut.is_daytime == null || !!ut.is_daytime == !_e);
        });
        if (xe) return xe.condition;
        const ct = (te == null ? void 0 : te.condition) || "cloudy";
        return _e && ct === "sunny" ? "clear-night" : ct;
      };
      return { start: +z, end: +de, day: Q(z, ie, !1), night: Q(ie, de, !0), hi: Number(te == null ? void 0 : te.temperature), lo: Number(te == null ? void 0 : te.templow) };
    });
    return { days: f, hours: s, start: f[0].start, end: f[5].end };
  }
  const P = (t, r) => {
    const s = t.days.findIndex((f) => r < f.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, N = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), f = t.days[u];
    return f.start + (s - u) * (f.end - f.start);
  };
  function $(t, r) {
    const s = Math.max(0, t.days.findIndex((ie) => r < ie.end)), u = t.days[s], f = (r - u.start) / (u.end - u.start) >= 0.5;
    let S = f ? u.night : u.day, R = NaN;
    const z = t.hours;
    if (z.length && r >= z[0].t - g && r <= z[z.length - 1].t + g) {
      let ie = z.findIndex((Q) => Q.t > r);
      ie < 0 && (ie = z.length);
      const de = z[Math.max(0, ie - 1)], te = z[Math.min(z.length - 1, ie)];
      S = de.c || S, R = te.t > de.t ? de.temp + (te.temp - de.temp) * Math.max(0, Math.min(1, (r - de.t) / (te.t - de.t))) : de.temp;
    }
    if (!Number.isFinite(R)) {
      const ie = [];
      if (t.days.forEach((de) => {
        Number.isFinite(de.lo) && ie.push([de.start - g, de.lo]), Number.isFinite(de.hi) && ie.push([de.start + 9 * g, de.hi]);
      }), ie.length) {
        R = r <= ie[0][0] ? ie[0][1] : ie[ie.length - 1][1];
        for (let de = 1; de < ie.length; de++) if (r <= ie[de][0] && r > ie[de - 1][0]) {
          const [te, Q] = ie[de - 1], [Te, Ue] = ie[de];
          R = Q + (Ue - Q) * (1 - Math.cos(Math.PI * (r - te) / (Te - te))) / 2;
          break;
        }
      }
    }
    return { cond: f && S === "sunny" ? "clear-night" : S, temp: R, night: f, day: u };
  }
  const fe = (t) => Ot(new Date(t)) === Ot(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), Re = /* @__PURE__ */ new Map(), le = 900, J = 700;
  let B = null;
  const ke = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    Fe(r.target.parentElement), r.target.closest("#wxDialog") && Fd();
  })) : null;
  function Fe(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = D(), f = u.days.flatMap((Q) => [{ cond: Q.day, night: !1 }, { cond: Q.night, night: !0 }]), S = f.map((Q) => Q.cond).join(), R = e(), z = Ga(), ie = Ve(), de = Number(Ot(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let te = !1;
    s.forEach((Q) => {
      var ut;
      const Te = Q.clientWidth, Ue = Q.clientHeight;
      if (!Te || !Ue) return;
      const _e = Q.dataset.wxStrip;
      let Se = Re.get(_e);
      Se ? Se.sig !== S && (Se.prev = Se.segs, Se.sig = S, Se.segs = f, Se.t0 = r, Se.dur = J) : Re.set(_e, Se = { sig: S, segs: f, prev: null, t0: r, dur: le });
      const xe = z || ie ? Math.min(1, Math.max(0, (r - Se.t0) / Se.dur)) : 1;
      xe < 1 && (te = !0);
      const ct = { width: Te, height: Ue, colors: R.colors, clock: r, ambient: z, seed: de, reveal: ie ? xe : 1 - Math.pow(1 - xe, 3), prev: xe < 1 ? Se.prev : null, reduce: ie };
      if (Pn === "smooth") {
        const Ee = Math.min(2, window.devicePixelRatio || 1), pt = Math.round(Te * Ee), St = Math.round(Ue * Ee);
        Q.width !== pt && (Q.width = pt), Q.height !== St && (Q.height = St);
        const at = Q.getContext("2d");
        if (!at) return;
        at.setTransform(Ee, 0, 0, Ee, 0, 0), Gu(at, f, ct);
      } else {
        const Ee = ju(f, { ...ct, px: 2, oneBit: Pn === "onebit", ink: R.ink, paper: R.paper });
        Q.width !== Ee.w && (Q.width = Ee.w), Q.height !== Ee.h && (Q.height = Ee.h), (ut = Q.getContext("2d")) == null || ut.putImageData(new ImageData(Ee.data, Ee.w, Ee.h), 0, 0);
      }
    }), te && w();
  }
  function dt() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = Tn.weather, s = r && (Qt == null ? void 0 : Qt[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Hi("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", n(t);
      return;
    }
    const u = s.attributes || {}, f = u.temperature_unit || "°", S = (at) => Number.isFinite(Number(at)) ? Math.round(Number(at)) + "°" : "—", R = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", z = ms[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), ie = Ot(/* @__PURE__ */ new Date()), de = h.slice(0, 7), te = de.find((at) => Ot(new Date(at.datetime)) === ie) || null, Q = de.filter((at) => Ot(new Date(at.datetime)) >= ie).slice(0, 6), Te = /* @__PURE__ */ new Date(), Ue = Ot(new Date(Te.getFullYear(), Te.getMonth(), Te.getDate() + 1)), _e = te ? "H " + S(te.temperature) + "&ensp; L " + S(te.templow) : "", Se = (at) => {
      const Xe = Ot(new Date(at.datetime));
      return Xe === ie ? "Today" : Xe === Ue ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(at.datetime));
    }, xe = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", ct = (at) => {
      const Xe = new Date(at.datetime);
      return Math.round((new Date(Xe.getFullYear(), Xe.getMonth(), Xe.getDate()) - new Date(Te.getFullYear(), Te.getMonth(), Te.getDate())) / 864e5);
    }, ut = (at) => (ms[at] || at || "").toLowerCase(), Ee = (at, Xe) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ct(at) + '" aria-label="' + Ie(Se(at) + ": " + ut(at.condition) + ", " + S(at.temperature) + " / " + S(at.templow) + ". Open the forecast") + '">' + Hi(at.condition, !1, !1, Pn, "day" + Xe) + '<div><div class="activityRowName">' + Ie(Se(at)) + '</div><div class="activityRowMeta">' + S(at.temperature) + " / " + S(at.templow) + "</div></div></div>", pt = () => '<div class="wxStrip"><div class="wxStripDays">' + D().days.map((Xe, an) => {
      const Vt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Xe.start)) + ": " + ut(Xe.day) + (ut(Xe.day) === ut(Xe.night) ? " all day and night" : ", then " + ut(Xe.night) + " overnight") + (Number.isFinite(Xe.hi) ? ". High " + S(Xe.hi) : "") + (Number.isFinite(Xe.lo) ? ", low " + S(Xe.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + an + '" aria-label="' + Ie(Vt) + '"><span class="wxDayName">' + Ie(fe(Xe.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + S(Xe.hi) + '</span><span class="wxLow">' + S(Xe.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ie("Now in " + R + ": " + xe + "°, " + ut(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Hi(s.state, !0, !0, Pn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(xe)) + '</span><span class="wxUnit">' + Ie(f) + '</span></div><div class="wxPlace">' + Ie(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(z) + "</div>" + (_e ? '<div class="wxRange">' + _e + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (Q.length ? _r === "strip" ? pt() : '<div class="activityRows wxDays">' + Q.map(Ee).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", n(t);
    const St = t.querySelector("canvas[data-wx-strip]");
    B && B !== St && (ke == null || ke.unobserve(B)), B = St, St && (ke == null || ke.observe(St), Fe(t)), w(), Hd();
  }
  const en = o("weatherCard"), Wt = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      Id(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && Id(Date.now(), s);
  };
  en.addEventListener("click", (t) => Wt(t.target)), en.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), Wt(t.target));
  });
  const jt = o("wxDialog"), We = o("wxGraph"), qt = o("wxGraphWrap");
  let ma = Date.now(), Fi = null, Kl = !1, Dr = null;
  function Id(t, r) {
    const s = D();
    Fi = r || null, ma = Math.max(s.start, Math.min(s.end - g, t)), Re.delete("dialog"), ai.delete("scrub"), jt.classList.add("open"), jt.setAttribute("aria-hidden", "false"), Hd(), ke == null || ke.observe(jt.querySelector("canvas[data-wx-strip]")), We.focus({ preventScroll: !0 }), w();
  }
  function $l() {
    var t;
    jt.classList.remove("open"), jt.setAttribute("aria-hidden", "true"), ke == null || ke.unobserve(jt.querySelector("canvas[data-wx-strip]")), (t = Fi == null ? void 0 : Fi.focus) == null || t.call(Fi, { preventScroll: !0 }), Fi = null;
  }
  function Hd() {
    if (!jt.classList.contains("open")) return;
    const t = D();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Ie(fe(r.start)) + "</span>").join(""), Fd(t), tl(t), Fe(jt);
  }
  function tl(t = D()) {
    const r = $(t, ma), s = Qt == null ? void 0 : Qt[Tn.weather], u = (s == null ? void 0 : s.attributes) || {}, f = u.temperature_unit || "°", S = Math.abs(ma - Date.now()) < g / 2, R = S && s ? s.state : r.cond, z = S && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ie = ms[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), de = S ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(ma / g) * g)), te = r.day, Q = (Number.isFinite(te.hi) ? "H " + Math.round(te.hi) + "°" : "") + (Number.isFinite(te.lo) ? "&ensp; L " + Math.round(te.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Hi(R, !0, S, Pn, "scrub", S ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(z)) + '</span><span class="wxUnit">' + Ie(f) + '</span></div><div class="wxPlace">' + Ie(de) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(ie) + "</div>" + (Q ? '<div class="wxRange">' + Q + "</div>" : "") + "</div>", n(o("wxDialogNow")), We.setAttribute("aria-valuenow", String(Math.round((ma - t.start) / g))), We.setAttribute("aria-valuetext", de + ", " + ie.toLowerCase() + ", " + z + "°"), Xl(t), w();
  }
  function Fd(t = D()) {
    const r = o("wxGraphLine"), s = qt.clientWidth, u = qt.clientHeight;
    if (!s || !u) return;
    const f = [];
    for (let xe = t.start; xe <= t.end; xe += g) {
      const ct = $(t, xe).temp;
      Number.isFinite(ct) && f.push([P(t, xe) * s, ct]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), f.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', Dr = null, Xl(t);
      return;
    }
    const S = f.map((xe) => xe[1]), R = Math.min(...S), z = Math.max(...S), ie = Math.max(4, z - R), de = Pn !== "smooth", te = (xe) => de ? Math.round(xe / 2) * 2 : Math.round(xe * 10) / 10;
    Dr = (xe) => u * 0.84 - (xe - R) / ie * u * 0.62;
    const Q = e(), Te = Pn === "onebit" ? Q.paper : "#ffffff", Ue = Pn === "onebit" ? Q.ink : "rgba(0,0,0,.28)", _e = "M" + f.map((xe) => te(xe[0]) + " " + te(Dr(xe[1]))).join(" L"), Se = (xe, ct) => {
      const ut = f.find((Ee) => Ee[1] === xe);
      return '<text class="wxLineLabel" x="' + te(Math.min(s - 14, Math.max(14, ut[0]))) + '" y="' + te(Dr(xe) + (ct ? 18 : -10)) + '" fill="' + Te + '" stroke="' + Ue + '">' + Math.round(xe) + "°</text>";
    };
    r.setAttribute("shape-rendering", de ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + _e + '" fill="none" stroke="' + Ue + '" stroke-width="' + (de ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + _e + '" fill="none" stroke="' + Te + '" stroke-width="2" stroke-linejoin="round"/>' + Se(z, !1) + Se(R, !0) + '<g id="wxCursorMark"></g>', Xl(t);
  }
  function Xl(t = D()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = qt.clientWidth, u = qt.clientHeight, f = Pn !== "smooth", S = (Te) => f ? Math.round(Te / 2) * 2 : Te, R = S(P(t, ma) * s), z = $(t, ma).temp, ie = e(), de = Pn === "onebit" ? ie.paper : "#ffffff", te = Pn === "onebit" ? ie.ink : "rgba(0,0,0,.28)", Q = Dr && Number.isFinite(z) ? S(Dr(z)) : null;
    r.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + u + '" fill="' + te + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + u + '" fill="' + de + '"/>' + (Q == null ? "" : f ? '<rect x="' + (R - 5) + '" y="' + (Q - 5) + '" width="10" height="10" fill="' + de + '" stroke="' + te + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + Q + '" r="6" fill="' + de + '" stroke="' + te + '" stroke-width="2"/>');
  }
  const Od = (t) => {
    const r = qt.getBoundingClientRect();
    r.width && (ma = N(D(), (t - r.left) / r.width), tl());
  };
  We.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Kl = !0;
      try {
        We.setPointerCapture(t.pointerId);
      } catch {
      }
      Od(t.clientX);
    }
  }), We.addEventListener("pointermove", (t) => {
    Kl && Od(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => We.addEventListener(t, () => {
    Kl = !1;
  })), We.addEventListener("keydown", (t) => {
    const r = D(), s = { ArrowLeft: -g, ArrowRight: g, ArrowDown: -g, ArrowUp: g, PageUp: -24 * g, PageDown: 24 * g }[t.key];
    s ? (t.preventDefault(), ma = Math.max(r.start, Math.min(r.end - g, Math.round(ma / g) * g + s)), tl(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), ma = t.key === "Home" ? r.start : r.end - g, tl(r));
  }), o("wxDialogClose").addEventListener("click", $l), jt.addEventListener("click", (t) => {
    t.target === jt && $l();
  }), jt.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), $l());
  }), dt(), ($d = (Zd = window.matchMedia) == null ? void 0 : (Kd = Zd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || $d.call(Kd, "change", () => {
    w(), n(a);
  }), w();
  const qd = o("tvNav");
  l.fullscreenSupported || (qd.hidden = !0), qd.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !we.workout.classList.contains("active") || wi.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), dr.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(tt.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== tt.value && (tt.value = r, tt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [E, C, I, tt].forEach((t) => t.addEventListener("input", () => {
    const r = Ye[ht];
    r && (r.total = Number(E.value), r.work = Number(C.value), r.rest = Number(I.value)), A();
  })), Ce.addEventListener("click", rs), qe.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", rs), dr.addEventListener("click", () => vn(!bn)), Hn(ht), er(), ka(), _a(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Qo(o("resetStats"), o("resetStatsFill"), 1500, () => {
    st.history = [], st.checkins = [], Oa = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    fn(), ho(), ka(), er(), _a(), eo(), Ft("Stats reset");
  });
  const Jl = o("morningTime"), Ql = o("eveningTime"), ed = o("checkinAutoOpen");
  Jl.value = Ha().morning, Ql.value = Ha().evening, ed.classList.toggle("on", nt().checkinAutoOpen !== !1), [["morningTime", Jl], ["eveningTime", Ql]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (da(t, r.value), eo());
  })), ed.addEventListener("click", () => {
    const t = nt().checkinAutoOpen === !1;
    ed.classList.toggle("on", t), da("checkinAutoOpen", t);
  }), setTimeout(Zr, 800);
  const Wd = o("checkinNotify"), nl = o("checkinNotifyTarget"), Vd = o("checkinNotifyStatus"), xu = Vd.textContent;
  function zd() {
    const t = l.notifyServices(), r = t.filter((f) => f.startsWith("mobile_app_")), s = r.length ? r : t, u = (f) => f.replace(/^mobile_app_/, "").replace(/_/g, " ");
    nl.innerHTML = s.map((f) => '<option value="' + Ie(f) + '">' + Ie(u(f)) + "</option>").join(""), !nt().notifyTarget && s[0] && (nt().notifyTarget = s[0]), nl.value = nt().notifyTarget || "";
  }
  function al() {
    const t = !!nt().notifyOn;
    Wd.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = Ha();
    Vd.textContent = t ? "Sends at " + r.morning + " and " + r.evening : xu;
  }
  async function td() {
    const t = !!nt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: nt().notifyTarget, times: Ha() } : null), !0;
    } catch {
      return Ft("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Wd.addEventListener("click", async () => {
    const t = !nt().notifyOn;
    if (t && (zd(), !nt().notifyTarget)) {
      Ft("Install the Companion app on your phone first");
      return;
    }
    nt().notifyOn = t, al(), await td() ? (fn(), Ft(t ? "Check-in notifications on" : "Check-in notifications off")) : (nt().notifyOn = !t, al());
  }), nl.addEventListener("change", () => {
    da("notifyTarget", nl.value), nt().notifyOn && td();
  }), [Jl, Ql].forEach((t) => t.addEventListener("change", () => {
    al(), nt().notifyOn && td();
  })), zd(), al();
  let nd = null;
  function yu() {
    nd || (nd = setTimeout(() => {
      nd = null, _a();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const r = !Qt || Qt[Tn.weather] !== t[Tn.weather] || ((s = Qt["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      Qt = t, ti(t), fs(t), r && dt(), Date.now() - Ni > 60 * 60 * 1e3 && Cr(), yu();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (st.history = t.history, ho()), Array.isArray(t.history) && _a(), Array.isArray(t.checkins) && (st.checkins = t.checkins.map(di), eo(), er(), ka(), ho(), _a()), t.profiles && !on.classList.contains("open") && !ra)) {
        const r = bo(t);
        Object.keys(Ye).forEach((s) => delete Ye[s]), Object.assign(Ye, r.profiles), st.order = r.order, Ye[ht] || (ht = st.order[0]), Gi(), Hn(ht);
      }
    },
    suspend() {
      v = !1;
    },
    resume() {
      v || (v = !0, Ta || (Ta = requestAnimationFrame(yi)), nn || (nn = requestAnimationFrame($o)), w(), Li(a.querySelector(".tab.active"), !1));
    }
  };
}
const Zu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Ku = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, vs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, cn = "made_up_", Oi = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(cn);
}, sl = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Nd(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function $u(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) o += Nd(new Date(c)) / 6;
  return o;
}
function tc(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([c, Nd(new Date(c))]);
  }
  return l;
}
function Xu({ onChange: a }) {
  const l = {}, o = {}, c = (U, W, X, G) => {
    l[U] = { entity_id: U, state: X, attributes: G, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[U] = W;
  }, m = (U, W, X) => {
    const G = l[U], Y = W ?? G.state;
    l[U] = { ...G, state: Y, attributes: { ...G.attributes, ...X }, last_changed: Y === G.state ? G.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (U, W, X, G) => c("binary_sensor." + cn + (U ? U + "_" : "") + sl(W), U, G ? "on" : "off", { friendly_name: W, device_class: X });
  Object.entries(Ku).forEach(([U, W]) => {
    if (W.temperature != null && c("sensor." + cn + U + "_temperature", U, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + cn + U + "_humidity", U, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + cn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + cn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [X, G, Y, ee] = W.cover;
      c("cover." + cn + U + "_" + sl(X), U, Y ? "open" : "closed", { friendly_name: X, device_class: G, current_position: Y, ...ee != null ? { current_tilt_position: ee } : {} });
    }
    if (W.humidifier && c("humidifier." + cn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + cn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + cn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + cn + U + "_" + sl(W.valve), U, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && v(U, W.door, "door", W.doorOpen), W.window && v(U, W.window, "window", !1), W.motion && v(U, W.motion, "motion", !1), W.plant) {
      const [X, G, Y, ee, T] = W.plant, j = cn + sl(X), ve = (y, we, Ce, qe, k) => c("sensor." + j + "_" + y, U, String(Ce), { friendly_name: we, device_class: k, state_class: "measurement", unit_of_measurement: qe, plant_low: Ce < vs[y][0], plant_high: Ce > vs[y][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[y] });
      ve("moisture", "Moisture", G, "%", "moisture"), ve("light", "Light", Y, "lx", "illuminance"), ve("temperature", "Temperature", ee, "°C", "temperature"), ve("fertility", "Fertility", T, "µS/cm", "conductivity");
      const Le = Object.entries({ moisture: G, light: Y, temperature: ee, fertility: T }).filter(([y, we]) => we < vs[y][0] || we > vs[y][1]).map(([y, we]) => y + (we < vs[y][0] ? " low" : " high"));
      c("plant." + j, U, Le.length ? "problem" : "ok", { friendly_name: X, moisture: G, brightness: Y, temperature: ee, conductivity: T, problem: Le.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + cn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), c("sensor." + cn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const b = {}, L = {};
  let x = null;
  function H() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: Nd(U).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: $u(U).toFixed(1) });
    });
  }
  H();
  let se = 0;
  function ae() {
    let U = !1;
    const W = ++se % 10 === 0, X = (ee, T, j) => {
      m(ee, T, j), U = !0;
    };
    Object.entries(b).forEach(([ee, T]) => {
      const j = l[ee].attributes.current_position, ve = j < T ? Math.min(T, j + 10) : Math.max(T, j - 10);
      ve === T && delete b[ee], X(ee, ve === T ? ve === 0 ? "closed" : "open" : T > j ? "opening" : "closing", { current_position: ve });
    }), Object.entries(L).forEach(([ee, T]) => {
      const j = l[ee].attributes.current_tilt_position, ve = j < T ? Math.min(T, j + 25) : Math.max(T, j - 25);
      ve === T && delete L[ee], X(ee, null, { current_tilt_position: ve });
    }), Object.keys(l).filter((ee) => ee.startsWith("climate.")).forEach((ee) => {
      const T = l[ee], j = T.attributes, ve = j.current_temperature, Le = (T.state === "heat" || T.state === "auto") && ve < j.temperature - 0.05, y = (T.state === "cool" || T.state === "auto") && ve > j.temperature + 0.05, we = T.state === "off" ? "off" : Le ? "heating" : y ? "cooling" : "idle", Ce = W ? Math.round((ve + (Le ? 0.1 : y ? -0.1 : 0)) * 10) / 10 : ve;
      (Ce !== ve || we !== j.hvac_action) && X(ee, null, { current_temperature: Ce, hvac_action: we });
    }), Object.keys(l).filter((ee) => ee.startsWith("humidifier.")).forEach((ee) => {
      const T = l[ee], j = T.attributes, ve = j.current_humidity, Le = T.state === "on" && ve < j.humidity, y = Le && W ? ve + 1 : ve, we = T.state !== "on" ? "off" : Le ? "humidifying" : "idle";
      if (y !== ve || we !== j.action) {
        X(ee, null, { current_humidity: y, action: we });
        const Ce = "sensor." + cn + o[ee] + "_humidity";
        l[Ce] && X(Ce, String(y));
      }
    });
    const G = l["vacuum." + cn + "robot"], Y = G.attributes;
    G.state === "cleaning" && W && X(G.entity_id, null, { battery_level: Math.max(5, Y.battery_level - 1) }), G.state === "returning" && X(G.entity_id, "docked", {}), G.state === "docked" && Y.battery_level < 100 && X(G.entity_id, null, { battery_level: Math.min(100, Y.battery_level + 2) }), x && Date.now() - x.at > 5e3 && (X("alarm_control_panel." + cn + "house", "armed_" + x.mode, {}), x = null), U && a();
  }
  const O = setInterval(ae, 1e3), q = setInterval(() => {
    H(), a();
  }, 60 * 1e3);
  function K(U, W, X) {
    const G = X == null ? void 0 : X.entity_id;
    if (!l[G]) return !1;
    const Y = l[G], ee = Y.attributes, T = (j, ve) => m(G, j, ve);
    if (U === "climate" && (W === "set_temperature" && T(null, { temperature: Math.max(ee.min_temp, Math.min(ee.max_temp, X.temperature)) }), W === "set_hvac_mode" && T(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && T(Y.state === "off" ? "heat" : "off", Y.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const j = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? X.position : W === "toggle" ? ee.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete b[G], delete L[G], T(ee.current_position === 0 ? "closed" : "open")), j != null && j !== ee.current_position && (b[G] = j, T(j > ee.current_position ? "opening" : "closing"));
      const ve = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? X.tilt_position : null;
      W === "stop_cover_tilt" && delete L[G], ve != null && ee.current_tilt_position != null && ve !== ee.current_tilt_position && (L[G] = ve);
    }
    if (U === "humidifier" && (W === "set_humidity" && T(null, { humidity: Math.max(ee.min_humidity, Math.min(ee.max_humidity, X.humidity)) }), W === "set_mode" && T(null, { mode: X.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const j = W === "turn_on" || W === "toggle" && Y.state !== "on";
      T(j ? "on" : "off", { action: j ? "idle" : "off" });
    }
    if (U === "vacuum" && (W === "start" && T("cleaning", { rooms: X.rooms || ee.rooms }), W === "pause" && T("paused"), W === "return_to_base" && T("returning", { rooms: [] }), W === "locate" && T(null, { located: Date.now() }), W === "set_rooms" && T(null, { rooms: X.rooms })), U === "valve") {
      const j = W === "open_valve" || W === "toggle" && Y.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && T(j ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      W === "alarm_disarm" && (x = null, T("disarmed", { changed_by: "Matt" }));
      const j = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      j && (x = { mode: j, at: Date.now() }, T("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function ne(U) {
    const W = (U == null ? void 0 : U.states) || {}, X = (U == null ? void 0 : U.entities) || {}, G = (U == null ? void 0 : U.devices) || {}, Y = (C) => {
      var ue;
      const I = X[C];
      return I && (I.area_id || I.device_id && ((ue = G[I.device_id]) == null ? void 0 : ue.area_id)) || null;
    }, ee = (C) => {
      const I = X[C];
      return W[C] && W[C].state !== "unavailable" && !(I != null && I.hidden) && !(I != null && I.entity_category);
    }, T = {};
    Object.keys(W).forEach((C) => {
      const I = Y(C);
      I && ee(C) && (T[I] || (T[I] = [])).push(C);
    });
    const j = { ...W, ...l }, ve = (C) => {
      var I, ue;
      return (ue = (I = j[C]) == null ? void 0 : I.attributes) == null ? void 0 : ue.device_class;
    }, Le = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], y = Object.keys(W).filter((C) => C.startsWith("vacuum.") && ee(C)), we = Object.values((U == null ? void 0 : U.areas) || {}).filter((C) => !Zu.has(C.area_id)).map((C) => {
      const I = C.area_id, ue = T[I] || [], V = (Ke) => ue.filter((Mt) => Mt.startsWith(Ke + ".")), oe = (Ke) => V("sensor").filter((Mt) => ve(Mt) === Ke), ce = (Ke) => Object.keys(l).filter((Mt) => o[Mt] === I && Ke(Mt)), me = (Ke, Mt) => Ke.length ? Ke : ce(Mt), ze = me(oe("temperature"), (Ke) => Ke.endsWith(I + "_temperature")), tt = me(oe("humidity"), (Ke) => Ke.endsWith(I + "_humidity")), wt = oe("power").filter((Ke) => /^(W|kW)$/.test(j[Ke].attributes.unit_of_measurement || "")), pn = V("binary_sensor").filter((Ke) => ve(Ke) === "moisture"), An = me(V("plant"), (Ke) => Ke.startsWith("plant.")).map((Ke) => ({ id: Ke, readings: ce((Mt) => Mt.startsWith("sensor." + Ke.split(".")[1] + "_")) })), Lt = [...V("binary_sensor").filter((Ke) => Le.includes(ve(Ke))), ...ce((Ke) => Ke.startsWith("binary_sensor."))];
      return {
        id: I,
        name: C.name,
        icon: C.icon,
        readings: [...ze.slice(0, 1), ...tt.slice(0, 1), ...pn],
        power: wt.length ? wt.reduce((Ke, Mt) => Ke + Number(j[Mt].state) * (j[Mt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: V("switch"),
        lights: V("light"),
        actions: [...V("light"), ...me(V("climate"), (Ke) => Ke.startsWith("climate.")), ...me(V("cover"), (Ke) => Ke.startsWith("cover.")), ...me(V("humidifier"), (Ke) => Ke.startsWith("humidifier.")), ...me(V("valve"), (Ke) => Ke.startsWith("valve.")), ...V("media_player"), ...V("vacuum"), ...y.length ? [] : ce((Ke) => Ke.startsWith("vacuum."))],
        solar: ce((Ke) => Ke.includes("_solar_")),
        plants: An,
        openings: Lt,
        alerts: [...pn, ...Lt].filter((Ke) => {
          var Mt;
          return ((Mt = j[Ke]) == null ? void 0 : Mt.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), Ce = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, qe = (C) => Object.keys(W).filter((I) => I.startsWith(C + ".") && ee(I)), k = qe("alarm_control_panel"), E = y.length ? y : ["vacuum." + cn + "robot"];
    return {
      states: j,
      rooms: we,
      grid: Ce,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : Y(C),
      vacuums: E,
      homeVacuums: E.filter((C) => !we.some((I) => I.actions.includes(C))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + cn + "house"],
        locks: qe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + cn + "doorbell"]
      }
    };
  }
  return { model: ne, call: K, stop() {
    clearInterval(O), clearInterval(q);
  } };
}
const Io = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Td = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Ju = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), nc = {}, Da = (a, l, o) => {
  const c = a + l + o;
  return nc[c] || (nc[c] = Ju(Td(a).map((m, v) => m + (Td(l)[v] - m) * o)));
}, ac = {}, xl = (a) => ac[a] || (ac[a] = Td(a));
function Qu(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Da(l.clear[0], l.cloudy[0], 0.12), Da(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Da(l.rain[0], "#000000", 0.22), Da(l.rain[1], "#000000", 0.22)], l;
}
const ep = [
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
], Po = (a, l) => (ep[(l & 7) * 8 + (a & 7)] + 0.5) / 64, $c = 1, Xc = 2, Jc = 3, Qc = 4, Ir = 5, Ml = 6, Ld = 7, eu = 8, oc = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), tp = (a, l, o) => {
  let c = !1;
  for (let m = 0, v = a.length - 1; m < a.length; v = m++) {
    const b = a[m], L = a[v];
    b[1] > o != L[1] > o && l < (L[0] - b[0]) * (o - b[1]) / (L[1] - b[1]) + b[0] && (c = !c);
  }
  return c;
};
function np(a, l, o, c, { oneBit: m, ink: v, paper: b, snowInk: L }) {
  const x = new Uint8ClampedArray(o * c * 4), H = xl(v), se = xl(b);
  for (let ae = 0; ae < c; ae++) for (let O = 0; O < o; O++) {
    const q = ae * o + O, K = l[q];
    if (a[q] == null) continue;
    let ne = xl(a[q]);
    if (m) {
      let U;
      K === Qc || K === eu ? U = !0 : K === Ir ? U = L : K === Ld || K === Ml ? U = !1 : U = Math.round((0.2126 * ne[0] + 0.7152 * ne[1] + 0.0722 * ne[2]) / 255 * 4) / 4 <= Po(O, ae), (K === $c || K === Xc || K === Jc || K === Ml) && (O > 0 && l[q - 1] !== K || O < o - 1 && l[q + 1] !== K || ae > 0 && l[q - o] !== K || ae < c - 1 && l[q + o] !== K) && (U = !0), ne = U ? H : se;
    }
    x[q * 4] = ne[0], x[q * 4 + 1] = ne[1], x[q * 4 + 2] = ne[2], x[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: x };
}
const ap = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, op = (a) => Tl(a, !1).split("/")[0], id = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, ip = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", rp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", sp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", lp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", dp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], cp = [".##", "##.", ".#.", "#.."];
function tu(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: v = 6, glow: b = 0.6, columns: L = 6 }) {
  const x = { ...ea, dawn: "#e5a77e", ...c }, H = Qu(x), se = l, ae = o, O = se / L, q = O / 2, K = Math.PI * 2, ne = a.length ? a : [{ cond: "cloudy", night: !1 }], U = [...Array(L * 2)].map((Y, ee) => {
    const T = ne[Math.min(ee, ne.length - 1)], j = op(T.cond), ve = ee % 2 === 1;
    return { cond: T.cond, k: j, night: ve, sky: H[j][ve ? 1 : 0], cover: ap[j] };
  }), W = (Y) => ae * (0.5 - m * Math.cos(K * (Y / O - 0.25)));
  return { C: x, S: U, W: se, H: ae, cw: O, sw: q, TAU: K, yb: W, side: (Y, ee, T) => {
    const j = (Y ? W(ee) - T : T - W(ee)) / Math.max(3, v * 1.4) + 0.5;
    return j <= 0 ? 0 : j >= 1 ? 1 : j;
  }, glowAt: (Y) => {
    const ee = ((Y / O - 0.25) % 1 + 1) % 1, T = Math.max(0, Math.min(L - 1, Math.round(Y / O - 0.25))), j = Math.max(0, Math.min(L - 1, Math.round(Y / O - 0.75))), ve = 1 - (U[2 * T].cover + U[2 * j + 1].cover) / 2, Le = Math.sin(Math.PI * Math.min(1, Math.max(0, W(Y) / ae)));
    return { c: ee < 0.5 ? x.dusk : x.dawn, a: b * (0.2 + 0.8 * ve) * Le * Le };
  }, soft: v, tw: O * 0.3, sy: ae / 90 };
}
function nu(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: v, side: b, C: L, TAU: x, sy: H } = a, se = l, ae = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const K = id(c * 977 + q * 131 + 7), ne = (q + 0.5) * v, U = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = ne + (K() - 0.5) * v * 1.6, G = (6 + K() * 76) * H, Y = K() < 0.35, ee = 1.8 + K() * 1.6, T = b(!0, X, G) * (Y ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(x * se / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ae.stars.push({ x: X, y: G, big: Y, size: ee, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = ne + (K() - 0.5) * v * 0.3, X = Math.min(15, v * 0.29);
      ae.suns.push({ x: W, y: 32 * H, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(x * se / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, v * 0.55 / 34), X = ne - 23 * W + (K() - 0.5) * v * 0.2;
      ae.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(x * se / 5200 + q) : 0)) * H + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const K = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!K) return;
    const ne = id(c * 577 + q * 71 + 3), U = (q + 0.5) * v, W = O.k === "rain" || O.k === "storm" || O.night ? L.cloudNight : L.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < K; G++) {
      const Y = v / 46 * (O.k === "partly" ? 0.85 : 0.75 + ne() * 0.55), ee = U + (O.k === "partly" ? v * 0.12 : (ne() - 0.5) * v * 1.05), T = (O.k === "partly" ? 40 : 6 + ne() * 26) * H, j = o ? 2.5 * Math.sin(x * se / 9e3 + q * 1.3 + G * 2.1) : 0, ve = o ? 0.9 * Math.sin(x * se / 6100 + q + G) : 0;
      ae.clouds.push({ x: ee - 23 * Y + j, y: T - 15.33 * Y + ve, w: 46 * Y, h: 30.66 * Y, fill: W, o: X * (K > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const K = id(c * 313 + q * 29 + 11), ne = (q + 0.5) * v, U = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = ne + (K() - 0.5) * v * 1.05, Y = 44 + K() * 36, ee = 1;
      if (o) {
        const j = ((Y - 44 + se * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Y - 44)), Y = 44 + j, ee = Math.min(1, j / 6, (36 - j) / 6);
      }
      Y *= H;
      const T = b(O.night, G, Y) * ee;
      T >= 0.05 && ae.drops.push({ x: G, y: Y, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = ne + (K() - 0.5) * v * 1.05, Y = 40 + K() * 44, ee = 1;
      if (o) {
        const j = ((Y - 40 + se * 9e-3) % 44 + 44) % 44;
        Y = 40 + j, G += 1.6 * Math.sin(x * se / 2800 + X * 1.9 + q), ee = Math.min(1, j / 6, (44 - j) / 6);
      }
      Y *= H;
      const T = b(O.night, G, Y) * ee;
      T >= 0.05 && ae.flakes.push({ x: G, y: Y, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, Y = o ? 4 * Math.sin(x * se / 8e3 + q) : 0;
      for (let ee = 0; ee < 4; ee++) ae.fogs.push({ x: ne - v * 0.75 + ee % 2 * v * 0.18 + (ee % 2 ? Y : -Y), y: (30 + ee * 13) * H, w: v * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (se / 3400 + q * 0.37) % 1;
      ae.bolts.push({ x: ne + (K() - 0.5) * v * 0.3 - 5, y: 36 * H, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ae;
}
function up(a, l, o, c, m, v, b, L) {
  const { S: x, C: H, cw: se, yb: ae, glowAt: O, soft: q, tw: K, sy: ne } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, I, ue) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (I >= 1 || I > Po(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ue);
  }, Y = (k, E, C, I) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(c - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) I(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, ee = (k, E, C) => {
    for (let ue = 0; ue < k.length - 1; ue++) {
      const V = (ue + E) * se;
      if (C < V - K / 2) return [k[ue], k[ue], 0];
      if (C <= V + K / 2) return [k[ue], k[ue + 1], (C - V + K / 2) / K];
    }
    const I = k[k.length - 1];
    return [I, I, 0];
  }, T = x.filter((k) => !k.night).map((k) => k.sky), j = x.filter((k) => k.night).map((k) => k.sky), ve = q / v, Le = 16 * ne / v;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ae(E) / v, I = ee(T, 0.75, E), ue = ee(j, 1.25, E), V = O(E);
    for (let oe = 0; oe < c; oe++) {
      const ce = Po(k, oe), me = oe + 0.5 - C, ze = (ve > 0.01 ? Io(0.5 + me / ve) : me > 0 ? 1 : 0) > ce;
      let tt = ze ? I[2] > ce ? I[1] : I[0] : ue[2] > ce ? ue[1] : ue[0];
      (ze ? Io(((oe + 0.5) / c - 0.45) / 0.55) * 0.7 : Io(1 - (oe + 0.5) / (c * 0.55)) * 0.7) > Po(k + 2, oe + 5) && (tt = ze ? Da(tt, "#ffffff", 0.18) : Da(tt, "#000000", 0.25)), ze && me >= 0 && me < Le && V.a * 1.3 * (1 - me / Le) > Po(k + 6, oe + 1) && (tt = V.c), U[oe * o + k] = tt, X[oe * o + k] = ze ? 0 : 1;
    }
  }
  const y = Da(H.sun, "#ffffff", 0.55), we = Da(H.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / v);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const I = k.o > 0.45 ? H.star : Da(H.star, U[C * o + E], 0.5), ue = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, I, 1, Ld);
    for (let V = 1; V <= ue; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((oe) => {
      oe[0] >= 0 && oe[1] >= 0 && oe[0] < o && oe[1] < c && X[oe[1] * o + oe[0]] && G(oe[0], oe[1], I, 1, Ld);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, I = k.y / v, ue = k.halo / m * 0.85;
    if (Y(C, I, ue, (V, oe, ce, me) => {
      const ze = Math.sqrt(ce * ce + me * me);
      ze > E && ze < ue && !X[oe * o + V] && G(V, oe, y, 0.3 * (1 - (ze - E) / (ue - E)), 0);
    }), L) {
      const V = Math.floor(b / 500) % 2, oe = Math.max(1, E * 0.3);
      for (let ce = 0; ce < 8; ce++) if (ce % 2 === V) for (let me = E + 1.2; me < E + 1.2 + oe; me += 0.7) G(Math.floor(C + Math.cos(ce * Math.PI / 4) * me), Math.floor(I + Math.sin(ce * Math.PI / 4) * me), H.sun, 1, eu);
    }
    Y(C, I, E, (V, oe, ce, me) => {
      ce * ce + me * me <= E * E && G(V, oe, Io(((me / E + 1) / 2 - 0.6) / 0.4) > Po(V, oe) ? H.sunEdge : H.sun, 1, $c);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, I = k.y / v, ue = C + 0.547 * E, V = I - 0.503 * E, oe = 0.82 * E;
    Y(C, I, E, (ce, me, ze, tt) => {
      if (ze * ze + tt * tt > E * E) return;
      const wt = ce + 0.5 - ue, pn = me + 0.5 - V;
      wt * wt + pn * pn > oe * oe && G(ce, me, Io((tt + E) / (2 * E) * 1.1 - 0.1) > Po(ce, me) ? H.moon : we, 1, Xc);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, I = k.x / m, ue = k.y / v, V = Da(k.fill, "#000000", 0.16);
    for (let oe = Math.max(0, Math.floor(ue) - 1); oe <= Math.min(c - 1, ue + C + 1); oe++) for (let ce = Math.max(0, Math.floor(I) - 1); ce <= Math.min(o - 1, I + E + 1); ce++) {
      const me = (ce + 0.5 - I) / E, ze = (oe + 0.5 - ue) / E;
      oc(me, ze) && G(ce, oe, !oc(me, ze + 1 / E) || Io((ze - 0.42) / 0.25) * 0.8 > Po(ce, oe) ? V : k.fill, k.o, Jc);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / v), C = Math.max(E, Math.floor((k.y + 6 * ne) / v) - 1), I = Math.floor(k.x / m), ue = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let oe = I; oe <= ue; oe++) {
      const ce = (oe - I) / Math.max(1, ue - I);
      G(oe, V, k.c, k.a * (ce < 0.25 ? ce / 0.25 : ce > 0.75 ? (1 - ce) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const E = k.x / m, C = Math.floor(k.y / v);
    for (let I = 0; I < Ce; I++) G(Math.floor(E - 0.208 * I * v / m), C + I, H.rain, k.o, Qc);
  });
  const qe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / v);
    G(E, C, H.snow, k.o, Ir);
    for (let I = 1; I <= qe; I++)
      G(E - I, C, H.snow, k.o, Ir), G(E + I, C, H.snow, k.o, Ir), G(E, C - I, H.snow, k.o, Ir), G(E, C + I, H.snow, k.o, Ir);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / v); E <= (k.y + 24) / v; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        tp(dp, (C + 0.5) * m - k.x, (E + 0.5) * v - k.y) && G(C, E, H.sun, 1, Ml);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / v);
      cp.forEach((I, ue) => I.split("").forEach((V, oe) => {
        V === "#" && G(E + oe, C + ue, H.sun, 1, Ml);
      }));
    }
  }), { col: U, ids: W };
}
function pp(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), v = l.width / c, b = l.height / m, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = (q) => {
    const K = tu(q, l);
    return up(K, nu(K, { clock: L, ambient: l.ambient, seed: l.seed }), c, m, v, b, L, l.ambient);
  }, H = x(a), se = l.reveal == null ? 1 : Io(l.reveal);
  let ae = H.col, O = H.ids;
  if (se < 1) {
    const q = l.prev ? x(l.prev) : null, K = se * (c + 12);
    ae = new Array(c * m), O = new Uint8Array(c * m);
    for (let ne = 0; ne < c * m; ne++) {
      const U = ne % c, W = ne / c | 0;
      (l.reduce ? se : Io((K - U) / 12)) > Po(U, W) ? (ae[ne] = H.col[ne], O[ne] = H.ids[ne]) : q ? (ae[ne] = q.col[ne], O[ne] = q.ids[ne]) : (ae[ne] = null, O[ne] = 255);
    }
  }
  return np(ae, O, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function hp(a, l, o) {
  const c = o.width, m = o.height, v = o.reveal == null ? 1 : Io(o.reveal), b = (O, q) => {
    const K = tu(q, o);
    fp(O, K, nu(K, o));
  };
  if (a.clearRect(0, 0, c, m), v >= 1) {
    b(a, l);
    return;
  }
  if (o.prev && b(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, b(a, l), a.restore();
    return;
  }
  const L = a.canvas, x = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (x.width !== L.width || x.height !== L.height) && (x.width = L.width, x.height = L.height);
  const H = x.getContext("2d");
  H.setTransform(a.getTransform()), H.clearRect(0, 0, c, m), b(H, l);
  const se = v * (c + 64) - 64, ae = H.createLinearGradient(se, 0, se + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), H.globalCompositeOperation = "destination-in", H.fillStyle = ae, H.fillRect(0, 0, c, m), H.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function fp(a, l, o) {
  const { W: c, H: m, S: v, C: b, cw: L, yb: x, glowAt: H, soft: se, tw: ae, sy: O } = l, q = (y, we) => {
    const Ce = xl(y);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, we)).toFixed(3) + ")";
  }, K = (y, we) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, y[0]);
    for (let qe = 0; qe < y.length - 1; qe++) {
      const k = (qe + we) * L, E = (k - ae / 2) / c, C = (k + ae / 2) / c;
      E > 0 && E < 1 && Ce.addColorStop(E, y[qe]), C > 0 && C < 1 && Ce.addColorStop(C, y[qe + 1]);
    }
    return Ce.addColorStop(1, y[y.length - 1]), Ce;
  }, ne = Math.max(24, Math.ceil(c / 4)), U = (y, we) => {
    a.beginPath();
    for (let Ce = 0; Ce <= ne; Ce++) {
      const qe = c * Ce / ne, k = y == null ? 0 : x(qe) + y;
      Ce ? a.lineTo(qe, k) : a.moveTo(qe, k);
    }
    for (let Ce = ne; Ce >= 0; Ce--) {
      const qe = c * Ce / ne;
      a.lineTo(qe, x(qe) + we);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = K(v.filter((y) => !y.night).map((y) => y.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let y = 0; y <= 64; y++) {
    const we = H(c * y / 64);
    W.addColorStop(y / 64, q(we.c, Math.min(1, we.a)));
  }
  a.fillStyle = W;
  for (let y = 0; y < 8; y++)
    a.globalAlpha = 1 - y / 8, U(y * 2 * O, (y + 1) * 2 * O);
  a.fillStyle = K(v.filter((y) => y.night).map((y) => y.sky), 1.25);
  const X = Math.max(0.5, se), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let y = 0; y < G; y++)
    a.globalAlpha = 1 - (y + 0.5) / G, U(-X + 2 * X * y / G, -X + 2 * X * (y + 1) / G);
  a.globalAlpha = 1;
  const Y = new Path2D(sp), ee = new Path2D(rp), T = new Path2D(ip), j = new Path2D(lp);
  a.fillStyle = b.star, o.stars.forEach((y) => {
    a.globalAlpha = y.o, y.big ? (a.save(), a.translate(y.x, y.y), a.scale(y.size, y.size), a.fill(Y), a.restore()) : (a.beginPath(), a.arc(y.x, y.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ve = Da(b.sun, "#ffffff", 0.55);
  o.suns.forEach((y) => {
    const we = a.createRadialGradient(y.x, y.y, 0, y.x, y.y, y.halo);
    we.addColorStop(0, q(ve, 0.42)), we.addColorStop(0.7, q(ve, 0)), a.fillStyle = we, a.beginPath(), a.arc(y.x, y.y, y.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, y.y - y.rad, 0, y.y + y.rad);
    Ce.addColorStop(0.6, b.sun), Ce.addColorStop(1, b.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(y.x, y.y, y.rad, 0, Math.PI * 2), a.fill();
  });
  const Le = Da(b.moon, "#ffffff", 0.6);
  o.moons.forEach((y) => {
    a.save(), a.translate(y.x - y.d / 2, y.y - y.d / 2), a.scale(y.d / 46, y.d / 46);
    const we = a.createLinearGradient(0, 6, 0, 40);
    we.addColorStop(0, Le), we.addColorStop(1, b.moon), a.fillStyle = we, a.fill(ee), a.restore();
  }), o.clouds.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.scale(y.w / 46, y.h / 30.66), a.translate(-4, -9.67), a.fillStyle = y.fill, a.fill(T), a.restore();
  }), o.fogs.forEach((y) => {
    const we = a.createLinearGradient(y.x, 0, y.x + y.w, 0);
    we.addColorStop(0, q(y.c, 0)), we.addColorStop(0.25, q(y.c, y.a)), we.addColorStop(0.75, q(y.c, y.a)), we.addColorStop(1, q(y.c, 0)), a.fillStyle = we, a.fillRect(y.x, y.y, y.w, 6 * O);
  }), a.fillStyle = b.rain, o.drops.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = b.snow, o.flakes.forEach((y) => {
    a.globalAlpha = y.o, a.beginPath(), a.arc(y.x, y.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = b.sun, o.bolts.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.fill(j), a.restore();
  }), a.restore();
}
const mp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Br = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ll = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, rd = (a, l) => '<path class="' + l + '" d="' + a + '"/>', gp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Ea = (a, l, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + gp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + m) + " " + (l - m) + "L" + (a + o) + " " + l + "L" + (a + m) + " " + (l + m) + "L" + a + " " + (l + o) + "L" + (a - m) + " " + (l + m) + "L" + (a - o) + " " + l + "L" + (a - m) + " " + (l - m) + 'Z"/>';
}, ic = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', vp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', bp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), wp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function xp(a, l, o, c) {
  return a === "clear" ? l ? ic(o ? ll.l : ll.s, c) + (o ? Ea(70, 20, 5.83, 1) + Ea(78.33, 41.67, 3.75, 0.8) + Ea(60, 71.67, 3.33, 0.6) : Ea(42, 12, 3.5, 1) + Ea(47, 25, 2.25, 0.8) + Ea(36, 43, 2, 0.6)) : vp(c, o) : a === "partly" ? (l ? ic(o ? ll.lp : ll.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + rd(o ? Br.lp : Br.sp, l ? "wbCloudLight" : "wbBright") + (l ? o ? Ea(73.33, 16.67, 4.17, 0.9) : Ea(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? rd(o ? Br.lc : Br.s, l ? "wbCloudLight" : "wbBright") + (l ? o ? Ea(15, 15, 3.75, 0.8) + Ea(76.67, 13.33, 2.92, 0.6) : Ea(9, 9, 2.25, 0.8) + Ea(46, 8, 1.75, 0.6) : "") : rd(o ? Br.lr : Br.s, "wbCloudLight") + (a === "rain" ? bp(o) : wp(o));
}
function yp(a, l, o, c) {
  let m = mp(a);
  const v = m === "night" || !!o;
  m === "night" && (m = "clear");
  const b = l ? 90 : 54;
  return { k: m, night: v, svg: '<svg viewBox="0 0 ' + b + " " + b + '">' + xp(m, v, l, c) + "</svg>" };
}
const kp = [
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
], dl = (a, l) => (kp[l % 8 * 8 + a % 8] + 0.5) / 64, Ya = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], In = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], bs = (a) => a < 0 ? 0 : a > 1 ? 1 : a, rc = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, qi = [255, 255, 255], Kn = Ya("#26221e"), sc = Ya("#0288d1"), Mp = Ya("#01579b"), sd = Ya(ea.cloudDay), ld = Ya(ea.cloudNight), cl = Ya(ea.dusk), dd = Ya(ea.sunEdge), Sp = Ya(ea.sun), Cp = 10, lc = 0.3, Ho = 56, au = 21;
function Tp(a) {
  const l = Array.from({ length: au }, () => new Array(Ho).fill(void 0)), o = (b, L, x) => {
    l[L][b] = x;
  }, c = In(cl, Kn, 0.35), m = In(Kn, qi, 0.22);
  for (let b = 0; b <= 6; b++) {
    const L = b < 2 ? Ho - 2 : Ho - 1;
    for (let x = 6 - b; x <= L; x++) o(x, b, b < 2 ? c : b === 6 ? m : Kn);
  }
  const v = [cl, dd, ld, Ya(ea.skyRainDay), In(cl, Kn, 0.2), In(a, Kn, 0.35)];
  [2, 3, 2, 3, 3].forEach((b, L) => {
    const x = 9 + L * 6;
    for (let H = 0; H < b; H++) {
      const se = v[(L * 2 + H * 3) % v.length];
      for (let ae = x; ae < x + 5; ae++)
        o(ae, 7 + H * 2, In(se, Kn, 0.12)), o(ae, 8 + H * 2, H === b - 1 ? In(se, qi, 0.3) : se);
      o(x + 5, 7 + H * 2, Kn), o(x + 5, 8 + H * 2, Kn);
    }
  });
  for (let b = 7; b <= 12; b++) o(5, b, Kn);
  o(5, 13, dd);
  for (let b = 7; b <= 14; b++) for (let L = 42; L <= 51; L++) o(L, b, L === 51 ? ld : sd);
  for (let b = 43; b <= 50; b += 2)
    o(b, 12, Kn), o(b, 9, In(Kn, sd, 0.4));
  for (let b = 40; b <= 53; b++) o(b, 14, b === 40 || b === 53 ? ld : sd);
  for (let b = 15; b <= 18; b++) for (let L = 46; L <= 49; L++) o(L, b, b === 18 ? Kn : b === 16 ? dd : cl);
  for (let b = 15; b <= 19; b++) o(44, b, Kn);
  return o(44, 20, Sp), l;
}
function Lp(a, l, o, c) {
  const m = Math.max(1, Math.round(a)), v = Math.max(1, Math.round(l)), b = new Uint8ClampedArray(m * v * 4), L = Ya(c.skyClearDay), x = Ya(c.skyFogDay), H = Tp(L), se = Math.round(v * 0.55), ae = bs(1 - Math.log(o / lc) / Math.log(Cp / lc)), O = In(L, x, ae), q = (W) => bs((W - 0.1) / 0.9), K = bs((1 - Math.exp(-2 / o) - 0.2) / 0.8), ne = Math.round(m / 2 - Ho / 2), U = se + 3;
  for (let W = 0; W < v; W++) {
    const X = U - 1 - W, G = W - U;
    for (let Y = 0; Y < m; Y++) {
      const ee = Y - ne;
      let T, j;
      const ve = X >= 0 && X < au && ee >= 0 && ee < Ho ? H[X][ee] : void 0;
      if (ve)
        T = ve, j = K;
      else if (X >= 0 && X <= 1 && ee >= 4 - X && ee <= 5 - X)
        T = In(qi, sc, 0.15), j = K;
      else if (W < se) {
        const we = bs(((W + 0.5) / se - 0.15) / 0.85) * 3, Ce = Math.min(3, Math.floor(we + dl(Y + 2, W + 5)));
        T = In(O, qi, Ce * 0.1), j = ae * 0.95;
      } else {
        const we = (W - se + 0.5) / (v - se), Ce = Math.min(1.5, 6e-3 / (we * we)), qe = bs(we * 1.4) * 3, k = Math.min(3, Math.floor(qe + dl(Y + 1, W + 6)));
        T = In(sc, Mp, k / 3);
        const E = 1 + Math.round(we * 7), C = Math.floor(Y / (E * 3)), I = 0.06 + 0.16 * we, ue = Y % (E * 3) < E;
        ue && rc(C, W) < I ? T = In(T, qi, 0.18 + 0.1 * (1 - we)) : ue && we > 0.5 && rc(C, W - 1) < I && (T = In(T, Kn, 0.12)), j = q(1 - Math.exp(-Ce / o)), G === 0 && ee >= 3 && ee <= 8 ? (T = In(T, qi, ee < 6 ? 0.8 : 0.45), j = K) : G >= 0 && G <= 2 && ee >= Ho && ee < Ho + 40 ? ((1 - (ee - Ho) / 40) * (G === 1 ? 0.9 : 0.5) > dl(Y, W + 3) && (T = In(T, qi, 0.5)), j = K) : G === 0 && ee >= 6 && ee < Ho && (T = In(T, Kn, ee % 2 === 0 ? 0.35 : 0.2), j = K);
      }
      const Le = j > dl(Y, W) ? x : T, y = (W * m + Y) * 4;
      b[y] = Le[0], b[y + 1] = Le[1], b[y + 2] = Le[2], b[y + 3] = 255;
    }
  }
  return { data: b, w: m, h: v };
}
const Ap = {
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
}, _p = 1.6;
function Ep(a, l) {
  const o = a ? Ap[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (v) => Math.abs(Math.log(v[2] / l)), m = o.reduce((v, b) => c(b) < c(v) ? b : v);
  return c(m) <= Math.log(_p) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const Dp = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Rp = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", go = 6e4, fo = 36e5, Wi = 864e5, ys = 1440, Np = 6, Bp = 10 * go, ul = 3, cd = 20, Pp = 3, Ip = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Hp = 30 * go, Fp = 7, Op = 3, dc = 1, qp = go, Wp = 15 * go, Vp = 5, $n = {
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
  eyeOutline: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, Ze = {
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
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, zp = {
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
}, jp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Gp = Object.keys(Ze.phases), pl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, Up = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, ou = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], hl = 100, cc = "µg/m³", Yp = "weather_alerts.air_quality_pollen", uc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Zp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Kp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], $p = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Xp = { daily: 1, hourly: 2 }, Oe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Yn = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), Fr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Jp = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ln = (a) => a != null && a !== "" && Number.isFinite(Number(a)), pc = /* @__PURE__ */ new Map(), hc = /* @__PURE__ */ new Map(), ud = /* @__PURE__ */ new WeakMap(), Qp = (a) => {
  switch (a == null ? void 0 : a.number_format) {
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
      return a == null ? void 0 : a.language;
  }
};
function un(a, l, o) {
  const c = Number(a);
  if (Number.isNaN(c)) return String(a);
  const m = (l == null ? void 0 : l.number_format) === "none", v = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, b = m ? "en-US" : Qp(l), L = JSON.stringify([b, v]);
  let x = pc.get(L);
  if (!x) {
    try {
      x = new Intl.NumberFormat(b, v);
    } catch {
      x = new Intl.NumberFormat(void 0, v);
    }
    pc.set(L, x);
  }
  return x.format(c);
}
const Bd = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function eh(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (ud.has(a)) return ud.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return ud.set(a, o), o;
}
const iu = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function ru(a, l) {
  const o = JSON.stringify([a, l]);
  let c = hc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    hc.set(o, c);
  }
  return c;
}
const Pr = (a, l) => ru(Bd(l), { hour: "numeric", minute: "2-digit", hourCycle: eh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: iu(l) }).format(a), fc = (a, l) => ru(Bd(l), { weekday: "short", timeZone: iu(l) }).format(a), th = (a, l) => a.toLocaleDateString(Bd(l), { weekday: "narrow" }), Zn = (a, l) => Ln(l) ? un(Math.round(Number(l)), a.locale) + "°" : "–", Or = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, ws = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), ca = Math.PI / 180, nh = 2440588, ah = 2451545, Sl = ca * 23.4397, oh = 149598e3, ih = -0.833 * ca, rh = 0.133 * ca, mc = 5 * go, su = (a) => a.getTime() / Wi - 0.5 + nh - ah, lu = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Sl) - Math.tan(l) * Math.sin(Sl), Math.cos(a)), du = (a, l) => Math.asin(Math.sin(l) * Math.cos(Sl) + Math.cos(l) * Math.sin(Sl) * Math.sin(a)), sh = (a, l) => ca * (280.16 + 360.9856235 * a) - l, lh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function cu(a) {
  const l = ca * (357.5291 + 0.98560028 * a), o = ca * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + ca * 102.9372 + Math.PI;
  return { ra: lu(c, 0), dec: du(c, 0), dist: oh };
}
function uu(a) {
  const l = ca * (218.316 + 13.176396 * a), o = ca * (134.963 + 13.064993 * a), c = ca * (93.272 + 13.22935 * a), m = l + ca * 6.289 * Math.sin(o), v = ca * 5.128 * Math.sin(c);
  return { ra: lu(m, v), dec: du(m, v), dist: 385001 - 20905 * Math.cos(o) };
}
const pu = (a, l, o, c) => {
  const m = su(l), v = a(m);
  return lh(sh(m, ca * -c) - v.ra, ca * o, v.dec);
}, Pd = (a, l, o) => pu(cu, a, l, o), dh = (a, l, o) => pu(uu, a, l, o);
function hu(a, l, o, c) {
  const m = {};
  let v = o.getTime(), b = a(o) - l;
  for (let L = v + mc; L <= c.getTime(); L += mc) {
    const x = a(new Date(L)) - l;
    if (b < 0 != x < 0) {
      const H = new Date(v + (L - v) * b / (b - x));
      x > 0 ? m.rise ?? (m.rise = H) : m.set ?? (m.set = H);
    }
    v = L, b = x;
  }
  return m;
}
const fu = (a) => {
  const l = Or(a);
  return [l, new Date(l.getTime() + Wi)];
}, ch = (a, l, o) => hu((c) => Pd(c, l, o), ih, ...fu(a)), uh = (a, l, o) => hu((c) => dh(c, l, o), rh, ...fu(a));
function ph(a) {
  const l = su(a), o = cu(l), c = uu(l), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), v = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), b = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (b < 0 ? -1 : 1) / Math.PI };
}
const hh = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Cl = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Ln(l.latitude) && Ln(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function gc(a, l) {
  var H, se, ae;
  const o = Cl(a), c = o ? ch(l, o.lat, o.lon) : {}, m = (H = a == null ? void 0 : a.states) == null ? void 0 : H["sun.sun"], v = Or(l).getTime(), b = (O) => {
    const q = O ? new Date(O) : null;
    return q && Number.isFinite(q.getTime()) && Or(q).getTime() === v ? q : null;
  }, L = b((se = m == null ? void 0 : m.attributes) == null ? void 0 : se.next_rising), x = b((ae = m == null ? void 0 : m.attributes) == null ? void 0 : ae.next_setting);
  return L && (c.rise = L), x && (c.set = x), c;
}
function fh(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Cl(a);
  return o ? Pd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const ks = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", Ll = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, va = (a, l, o) => {
  var c, m;
  for (const v of l) {
    const b = (c = a.states) == null ? void 0 : c[v];
    if (!ks(b)) continue;
    const L = (m = b.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: b, value: L };
  }
}, mh = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(ks), gh = (a, l, o) => l.map((c) => {
  var m;
  return (m = a.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return ks(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & Xp[o]);
});
function Hr(a, l, o) {
  var v, b, L, x;
  const c = ((b = (v = a.config) == null ? void 0 : v.unit_system) == null ? void 0 : b.length) || "", m = (l == null ? void 0 : l.attributes) || {};
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
      return m.temperature_unit || ((x = (L = a.config) == null ? void 0 : L.unit_system) == null ? void 0 : x.temperature) || "";
  }
}
function yl(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [m, ...v] = a.formatEntityAttributeValueToParts(l, o, c).map((b) => b.value);
      return { number: m, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: un(c, a.locale), unit: Hr(a, l, o) };
}
function vh(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const m = yl(a, l, o, c);
  return (m.number + " " + m.unit).trim();
}
function fl(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return zp[l.state] || (o && Ln(l.state) ? un(l.state, a.locale) + " " + o : l.state);
}
function vc(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const bh = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", wh = (a) => ou.find(([, l]) => a <= l)[0];
function xh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? Zp[l] : void 0;
  if (o === void 0) return;
  const c = Kp.findIndex((m) => a * o < m);
  return c === -1 ? 12 : c;
}
const bc = (a, l) => {
  const o = l ? $p[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, wc = (a) => Object.keys(a.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), pd = (a) => Object.values(a.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && Ll(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function yh(a) {
  var o;
  const l = {};
  for (const [c, m] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      l[c] = m.categories;
      continue;
    }
    for (const [v, b] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) l[v] = b == null ? void 0 : b.categories;
  }
  return l;
}
const mu = (a, l, o) => {
  var m, v, b;
  const c = (v = (m = a.entities) == null ? void 0 : m[o]) == null ? void 0 : v.platform;
  return !!c && !!((b = l[c]) != null && b.includes(Yp));
};
function kh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && uc.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && Ll(a, c.entity_id) && mu(a, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), uc.map((c) => o.get(c)).filter(Boolean);
}
const Mh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && Ll(a, o.entity_id) && mu(a, l, o.entity_id) && (((m = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function xc(a, l, o) {
  const c = Math.max(l - a, 1e-6), m = o[o.length - 1], v = o.find((H) => c / H <= 4) ?? m * Math.ceil(c / (4 * m)), b = Math.floor(a / v) * v;
  let L = Math.ceil(l / v) * v;
  L === b && (L = b + v);
  const x = [];
  for (let H = b; H <= L + v / 1e3; H += v) x.push(H);
  return { min: b, max: L, ticks: x };
}
const xs = (a, l, o) => {
  const c = (b) => [1, 3, 5].map((L) => parseInt(b.slice(L, L + 2), 16)), m = c(a), v = c(l);
  return "rgb(" + m.map((b, L) => Math.round(b + (v[L] - b) * o)).join(", ") + ")";
}, Sh = (a, l, o, c) => {
  const m = o * Math.abs(1 - 2 * c), v = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + m + " " + o + " 0 0 " + v + " " + a + " " + (l - o) + " Z";
}, Bo = ({ icon: a, name: l, sub: o, visual: c, double: m, backdrop: v, cls: b }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (b ? " " + b : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Fr(a) + '</div><div class="wbText"><span class="wbName">' + Oe(l) + "</span>" + (o ? '<span class="wbSub">' + Oe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", ml = (a, l) => '<div class="wbValue"><span class="wbNum">' + Oe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Oe(l) + "</span>" : "") + "</div>";
function Ch(a) {
  const l = a.max - a.min || 1, o = (L) => 100 - (Math.min(a.max, Math.max(a.min, L)) - a.min) / l * 100, c = (L) => L / ys * 100 + "%", m = (L) => L.map((x) => x.t + "," + o(x.v)).join(" "), v = a.kind === "line" ? a.points : [];
  let b = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((L) => '<span class="wbDcSunMark" style="left:' + c(L.t) + '">' + Fr(L.rise ? $n.sunsetUp : $n.sunsetDown) + Oe(L.label) + "</span>").join("") + "</div>";
  return b += '<div class="wbDcY">' + a.ticks.map((L) => '<span style="top:' + o(L) + '%">' + Oe(a.format(L)) + "</span>").join("") + "</div>", b += '<div class="wbDcPlot"><svg viewBox="0 0 ' + ys + ' 100" preserveAspectRatio="none">' + a.night.map(([L, x]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (x - L) + '" height="100"></rect>').join("") + a.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + ys + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + m(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + c(L.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + Oe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Oe(a.note) + "</span>" : "") + "</div>", b += '<div class="wbDcX">' + a.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + c(L.t) + '">' + Oe(L.label) + "</span>").join("") + "</div></div>", b;
}
function Th(a, l) {
  const b = a.map((U) => U.value), L = Math.min(...b), x = Math.max(...b), H = x - L || 1, se = (U) => U / (a.length - 1) * 300, ae = (U) => 18 + (1 - (U - L) / H) * 84, O = a.map((U, W) => se(W) + "," + ae(U.value)).join(" "), q = b.indexOf(x), K = b.indexOf(L), ne = (U) => U === 0 ? "start" : U === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + O + ' 300,102"></polygon><polyline class="wbLine" points="' + O + '" vector-effect="non-scaling-stroke"></polyline><text x="' + se(q) + '" y="' + (ae(x) - 6) + '" text-anchor="' + ne(q) + '">' + Oe(l(x)) + '</text><text x="' + se(K) + '" y="' + (ae(L) + 14) + '" text-anchor="' + ne(K) + '">' + Oe(l(L)) + '</text><text x="0" y="120" text-anchor="start">' + Oe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Oe(a[a.length - 1].label) + "</text></svg>";
}
function Lh(a, l) {
  const v = a.map((ae) => ae.value).concat([]), b = Math.min(...v) - 2, L = Math.max(...v) + 1, x = L - b || 1, H = 300 / a.length, se = (ae) => (1 - (ae - b) / x) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ae, O) => '<rect class="wbBar' + (ae.now ? " wbNowBar" : "") + '" x="' + (O * H + H * 0.2) + '" y="' + se(ae.value) + '" width="' + H * 0.6 + '" height="' + (104 - se(ae.value)) + '" rx="6"></rect><text x="' + (O * H + H / 2) + '" y="120" text-anchor="middle">' + Oe(ae.label) + "</text>").join("") + "</svg>";
}
const Ah = [
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
], _h = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], yc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Eh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Dh = 0;
function kc(a, { getHass: l, entityId: o, style: c = "bitmap", motion: m = !0, cards: v, onOpen: b } = {}) {
  var Xa, xo;
  const L = "wb" + ++Dh + "-", x = document.createElement("div");
  x.className = "wb";
  const H = document.createElement("div");
  H.className = "wbBento", x.appendChild(H), a.replaceChildren(x);
  const se = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((_) => !v || v.includes(_)), ae = { current: "wide", hourly: "wide", compared_to_average: "double" }, O = {};
  se.forEach((_) => {
    const A = document.createElement("div");
    A.className = "wbItem", A.dataset.card = _, A.dataset.size = ae[_] || "tile", A.hidden = !0, H.appendChild(A), O[_] = { el: A, html: null };
  });
  let q = !1, K = null, ne = 0, U = -1, W = !1, X = null;
  const G = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Y = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ee = /* @__PURE__ */ new Date(), T = /* @__PURE__ */ new Date(), j = null;
  const ve = {}, Le = {}, y = (_) => {
    var A;
    return ((A = Le[_]) == null ? void 0 : A.forecast) ?? [];
  }, we = (_, A) => {
    var F;
    return Le[A] ? (F = _.states) == null ? void 0 : F[Le[A].entityId] : void 0;
  };
  function Ce(_) {
    const A = ve[_];
    A && (A.unsub.then((F) => {
      typeof F == "function" && F();
    }).catch(() => {
    }), delete ve[_]), Le[_] && delete Le[_];
  }
  function qe(_, A, F) {
    var pe;
    if (typeof ((pe = _.connection) == null ? void 0 : pe.subscribeMessage) != "function") return;
    const Z = { entityId: F };
    try {
      Z.unsub = Promise.resolve(_.connection.subscribeMessage((ge) => {
        q || ve[A] !== Z || (ge != null && ge.forecast ? Le[A] = { entityId: F, forecast: ge.forecast } : delete Le[A], Xt());
      }, { type: "weather/subscribe_forecast", forecast_type: A, entity_id: F }));
    } catch (ge) {
      Z.unsub = Promise.reject(ge);
    }
    Z.unsub.catch(() => {
      ve[A] === Z && delete ve[A];
    }), ve[A] = Z;
  }
  function k(_, A) {
    var F;
    for (const Z of ["daily", "hourly"]) {
      const pe = gh(_, A, Z);
      ((F = ve[Z]) == null ? void 0 : F.entityId) !== (pe == null ? void 0 : pe.entity_id) && (Ce(Z), pe && qe(_, Z, pe.entity_id));
    }
  }
  const E = (_, A, F, Z = !1) => _.callWS({
    type: "history/history_during_period",
    start_time: F.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [A],
    minimal_response: Z,
    no_attributes: Z,
    significant_changes_only: !1
  });
  async function C(_, A) {
    var he, ye, be;
    const F = va(_, A, "pressure");
    if (!F) return;
    const Z = F.stateObj.entity_id, pe = await E(_, Z, new Date(Date.now() - 3 * fo)), ge = (be = (ye = (he = pe == null ? void 0 : pe[Z]) == null ? void 0 : he.find((Pe) => {
      var He;
      return typeof ((He = Pe.a) == null ? void 0 : He.pressure) == "number";
    })) == null ? void 0 : ye.a) == null ? void 0 : be.pressure;
    Y.pressureHistory = typeof ge == "number" ? { entityId: Z, value: ge } : void 0;
  }
  async function I(_, A) {
    var ye;
    const F = va(_, A, "temperature");
    if (!F) return;
    const Z = F.stateObj.entity_id, pe = Or(/* @__PURE__ */ new Date()), ge = await E(_, Z, new Date(pe.getTime() - Fp * Wi)), he = /* @__PURE__ */ new Map();
    for (const be of (ge == null ? void 0 : ge[Z]) ?? []) {
      const Pe = (ye = be.a) == null ? void 0 : ye.temperature, He = new Date((be.lc ?? be.lu) * 1e3);
      if (typeof Pe != "number" || He >= pe) continue;
      const $e = He.toDateString();
      he.set($e, Math.max(he.get($e) ?? -1 / 0, Pe));
    }
    Y.temperatureHistory = { entityId: Z, dailyHighs: [...he.values()], days: [...he.entries()].map(([be, Pe]) => ({ date: new Date(be), high: Pe })) };
  }
  async function ue(_) {
    const A = pd(_);
    if (!A) return;
    const F = await _.callWS({ type: "recorder/statistic_during_period", statistic_id: A, rolling_window: { duration: { hours: 24 } } });
    Y.rain = { entityId: A, change: (F == null ? void 0 : F.change) ?? void 0 };
  }
  function V() {
    const _ = l == null ? void 0 : l();
    if (!_ || q || typeof _.callWS != "function") return;
    const A = ze(_);
    Y.lastFetch = Date.now(), [C(_, A), I(_, A), ue(_)].forEach((F) => F.then(() => Xt(), () => {
    }));
  }
  async function oe() {
    const _ = l == null ? void 0 : l();
    if (!_) return;
    const A = va(_, ze(_), "temperature");
    if (!A) return;
    const F = A.stateObj.entity_id, Z = Or(/* @__PURE__ */ new Date());
    try {
      const pe = await E(_, F, Z), ge = (he) => ((pe == null ? void 0 : pe[F]) ?? []).map((ye) => {
        var be;
        return { time: ye.lu * 1e3, value: (be = ye.a) == null ? void 0 : be[he] };
      }).filter((ye) => typeof ye.value == "number");
      Y.todayHistory = { day: Z.toDateString(), fetched: Date.now(), temperature: ge("temperature"), humidity: ge("humidity") }, Xt();
    } catch {
    }
  }
  async function ce(_) {
    const A = l == null ? void 0 : l();
    if (A)
      try {
        const F = await E(A, _, new Date(Date.now() - 24 * fo), !0), Z = ((F == null ? void 0 : F[_]) ?? []).filter((ge) => Ln(ge.s)), pe = Math.max(1, Math.ceil(Z.length / 48));
        Y.aqHistory = { entityId: _, points: Z.filter((ge, he) => he % pe === 0).map((ge) => ({ label: Pr(new Date(ge.lu * 1e3), A), value: Number(ge.s) })) }, Xt();
      } catch {
      }
  }
  function me(_) {
    Y.categories === void 0 && (Y.categories = null, Promise.resolve().then(() => _.callWS({ type: "integration/descriptions" })).then((A) => {
      Y.categories = yh(A);
    }, () => {
      Y.categories = {};
    }).then(() => Xt()));
  }
  function ze(_) {
    var F;
    const A = Object.keys(_.states || {}).filter((Z) => Z.startsWith("weather.") && Ll(_, Z)).sort();
    return o && ((F = _.states) != null && F[o]) ? [o, ...A.filter((Z) => Z !== o)] : A;
  }
  const tt = (_) => Y.categories ? { air: kh(_, Y.categories), pollen: Mh(_, Y.categories) } : { air: [], pollen: [] };
  function wt(_, A, F, Z) {
    if (c === "smooth") {
      const pe = yp(_, A === 90, F, L + "g-" + Z);
      return '<span class="wbWx wbS' + A + " wb" + pe.k[0].toUpperCase() + pe.k.slice(1) + (pe.night ? " wbNight" : "") + '" aria-hidden="true">' + pe.svg + "</span>";
    }
    return '<span class="wbWx wbS' + A + '" aria-hidden="true"><canvas data-wb-wx="' + Oe(Tl(_, F)) + '" data-size="' + A + '"></canvas></span>';
  }
  const pn = () => y("daily").filter((_) => _.templow != null).slice(0, Np);
  function An(_, A) {
    const F = new Date(A.datetime), Z = /* @__PURE__ */ new Date();
    return ws(F, Z) ? Ze.today : ws(F, new Date(Z.getTime() + Wi)) ? Ze.tomorrow : fc(F, _);
  }
  const Lt = (_, A, F) => F === 0 ? An(_, A) : fc(new Date(A.datetime), _);
  function Ke(_, A) {
    var He, $e, Ve, De;
    const F = mh(_, A);
    if (!F) return "";
    const Z = pn(), pe = G.openDay !== void 0 ? Z[G.openDay] : void 0, ge = va(_, A, "temperature"), he = Z[0], ye = he && ws(new Date(he.datetime), /* @__PURE__ */ new Date()), be = (($e = (He = _.config) == null ? void 0 : He.unit_system) == null ? void 0 : $e.temperature) || ((Ve = F.attributes) == null ? void 0 : Ve.temperature_unit) || "";
    let Pe = '<div class="wbCard wbWeather' + (pe ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (pe ? " inert" : "") + '><div class="wbNow">' + (b ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Oe(Ze.openPage) + '">' : '<div class="wbCurrent">') + wt(F.state, 90, fh(_), "now") + '<div class="wbTempBlock">' + (ge && Ln(ge.value) ? '<div class="wbTemp"><span class="wbDeg">' + Oe(un(Math.round(Number(ge.value)), _.locale)) + '</span><span class="wbUnit">' + Oe(be) + "</span></div>" : "") + '<div class="wbPlace">' + Oe(((De = _.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (b ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Oe(fl(_, F)) + "</div>" + (ye && he.templow != null ? '<div class="wbRange">' + Oe(Yn(Ze.range, { high: Zn(_, he.temperature), low: Zn(_, he.templow) })) + "</div>" : "") + "</div></div>";
    return Z.length && (Pe += '<div class="wbColumns" role="list">' + Z.map((Ge, Be) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="col-' + Be + '"><span class="wbDay">' + Oe(Lt(_, Ge, Be)) + "</span>" + wt(Ge.condition ?? "cloudy", 60, !1, "col" + Be) + '<span class="wbTemps"><span class="wbHi">' + Oe(Zn(_, Ge.temperature)) + '</span><span class="wbLo">' + Oe(Zn(_, Ge.templow)) + "</span></span></button>").join("") + "</div>", Pe += '<div class="wbHalves" role="list">' + Z.map((Ge, Be) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="half-' + Be + '">' + wt(Ge.condition ?? "cloudy", 40, !1, "half" + Be) + '<span class="wbText"><span class="wbName">' + Oe(An(_, Ge)) + '</span><span class="wbSub">' + Oe(Yn(Ze.highLow, { high: Zn(_, Ge.temperature), low: Zn(_, Ge.templow) })) + "</span></span></button>").join("") + "</div>"), Pe + "</div>" + (pe ? hn(_, A, pe) : "") + "</div>";
  }
  function Mt(_) {
    const A = _.getTime(), F = Date.now() - fo;
    return y("hourly").filter((Z) => {
      const pe = new Date(Z.datetime).getTime();
      return pe >= A && pe < A + Wi && pe > F;
    });
  }
  function Je(_) {
    if (!_.length) return ["temperature"];
    const A = ["temperature"];
    return _.some((F) => F.precipitation != null || F.precipitation_probability != null) && A.push("precipitation"), _.some((F) => F.humidity != null) && A.push("humidity"), A;
  }
  function hn(_, A, F) {
    const Z = Or(new Date(F.datetime)), pe = Mt(Z), ge = Je(pe), he = ge.includes(G.dayMode) ? G.dayMode : "temperature", ye = (be) => be === "humidity" ? Ze.humidity : Ze.modes[be];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + wt(F.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Oe(An(_, F)) + '</span><span class="wbSub">' + Oe(Yn(Ze.highLow, { high: Zn(_, F.temperature), low: Zn(_, F.templow) })) + '</span></div><button class="wbBack" title="' + Oe(Ze.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Fr($n.back) + "</button></div>" + (ge.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + ge.map((be) => '<button aria-pressed="' + (be === he) + '" data-wb="day-mode" data-mode="' + be + '" data-wb-focus="day-mode-' + be + '">' + Oe(ye(be)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ch(kn(_, A, Z, pe, he)) + "</div></div>";
  }
  function kn(_, A, F, Z, pe) {
    var qn;
    const ge = F.getTime(), he = Date.now(), ye = ws(F, /* @__PURE__ */ new Date()), be = (gt) => (gt - ge) / go, Pe = (gt) => Pr(new Date(gt), _), He = (gt) => new Date(gt.datetime).getTime(), $e = [0, 3, 6, 9, 12, 15, 18, 21].map((gt) => ({ t: gt * 60, label: Pe(ge + gt * fo), minor: gt % 6 !== 0 })), { rise: Ve, set: De } = gc(_, F), Ge = [], Be = [];
    Ve && (Ge.push({ t: be(Ve.getTime()), label: Pe(Ve.getTime()), rise: !0 }), Be.push([0, be(Ve.getTime())])), De && (Ge.push({ t: be(De.getTime()), label: Pe(De.getTime()), rise: !1 }), Be.push([be(De.getTime()), ys]));
    const Qe = Cl(_);
    !Ve && !De && Qe && Pd(new Date(ge + Wi / 2), Qe.lat, Qe.lon) < 0 && Be.push([0, ys]);
    const mt = ye ? be(he) : void 0, Ht = { hours: $e, sun: Ge, night: Be };
    if (!Z.length && !ye) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    if (pe === "precipitation") {
      const gt = Z.some((mn) => mn.precipitation_probability != null), Mn = Z.map((mn) => ({ t: be(He(mn)), v: Number((gt ? mn.precipitation_probability : mn.precipitation) ?? 0) })), aa = Hr(_, we(_, "hourly"), "precipitation"), yo = Math.max(0, ...Mn.map((mn) => mn.v)), Pa = gt ? 100 : xc(0, Math.max(yo, 1), [0.5, 1, 2, 5, 10]).max, qo = (mn) => gt ? un(mn, _.locale) + "%" : un(mn, _.locale, { maximumFractionDigits: 1 }) + " " + aa, Dt = Mn.find((mn) => mn.v === yo);
      return {
        ...Ht,
        kind: "bars",
        points: Mn,
        min: 0,
        max: Pa,
        ticks: [0, Pa / 2, Pa],
        format: qo,
        now: mt !== void 0 ? { t: mt, v: 0 } : void 0,
        peak: Dt && yo > 0 ? { t: Dt.t + 30, v: Dt.v, label: qo(Dt.v) } : void 0,
        note: yo > 0 ? void 0 : Ze.noRain
      };
    }
    const Tt = pe === "humidity" ? "humidity" : "temperature", tn = Z.filter((gt) => gt[Tt] != null && (!ye || He(gt) >= he)).map((gt) => ({ t: be(He(gt)), v: Number(gt[Tt]) }));
    let _n, ta = [];
    if (mt !== void 0) {
      const gt = va(_, A, Tt);
      gt && Ln(gt.value) && (_n = { t: mt, v: Number(gt.value) }, tn.unshift(_n)), ta = (((qn = Y.todayHistory) == null ? void 0 : qn.day) === F.toDateString() ? Y.todayHistory[Tt] : []).filter((aa) => aa.time <= he).map((aa) => ({ t: Math.max(0, be(aa.time)), v: aa.value })), _n && ta.length && ta.push(_n);
    }
    const On = [...ta, ...tn];
    if (!On.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    const na = On.map((gt) => gt.v), wa = xc(Math.min(...na), Math.max(...na), Tt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Tt === "humidity" && (wa.min = Math.max(0, wa.min), wa.max = Math.min(100, wa.max), wa.ticks = wa.ticks.filter((gt) => gt >= 0 && gt <= 100));
    const pa = Tt === "humidity" ? (gt) => un(gt, _.locale) + "%" : (gt) => Zn(_, gt), ci = Tt === "temperature" ? On.reduce((gt, Mn) => Mn.v > gt.v ? Mn : gt) : void 0;
    return { ...Ht, kind: "line", points: tn, past: ta, ...wa, format: pa, now: _n, peak: ci ? { ...ci, label: pa(ci.v) } : void 0 };
  }
  function Vi(_) {
    const A = ["temperature"];
    return _.some((F) => F.precipitation_probability != null || F.precipitation != null) && A.push("precipitation"), _.some((F) => F.wind_speed != null) && A.push("wind"), A;
  }
  function st() {
    const _ = /* @__PURE__ */ new Date();
    return _.setHours(6, 0, 0, 0), _.getTime() > Date.now() && _.setDate(_.getDate() - 1), _;
  }
  function Ye(_, A) {
    var pe, ge;
    const F = y("daily"), Z = [];
    for (let he = 0; he < ul; he++) for (const ye of [!1, !0]) {
      const be = _.getTime() + (he * 24 + (ye ? 12 : 0)) * fo, Pe = be + 12 * fo, He = {};
      A.forEach((Ve) => {
        const De = new Date(Ve.datetime).getTime();
        Ve.condition && De >= be && De < Pe && (He[Ve.condition] = (He[Ve.condition] ?? 0) + (Ip.has(Ve.condition) ? 2 : 1));
      });
      let $e = (pe = Object.entries(He).sort((Ve, De) => De[1] - Ve[1])[0]) == null ? void 0 : pe[0];
      if (!$e) {
        const Ve = new Date(be).toDateString();
        $e = ((ge = F.find((De) => new Date(De.datetime).toDateString() === Ve)) == null ? void 0 : ge.condition) ?? "cloudy";
      }
      Z.push({ cond: ye && $e === "sunny" ? "clear-night" : $e, night: ye });
    }
    return Z;
  }
  function ht(_, A, F) {
    const Z = we(_, "hourly"), pe = A.precipitation_probability != null ? un(A.precipitation_probability, _.locale) + "%" : "", ge = A.precipitation ? un(A.precipitation, _.locale) + " " + Hr(_, Z, "precipitation") : "";
    switch (F) {
      case "precipitation":
        return pe ? [pe, ge] : [ge || "–", ""];
      case "wind":
        return A.wind_speed != null ? [un(Math.round(A.wind_speed), _.locale), Hr(_, Z, "wind_speed")] : ["–", ""];
      default:
        return [Zn(_, A.temperature), (A.precipitation_probability ?? 0) >= 20 ? pe : ""];
    }
  }
  function bo(_) {
    j = null;
    const A = y("hourly"), F = Math.floor(Date.now() / go) * go, Z = A.filter((De) => new Date(De.datetime).getTime() > F - fo);
    if (!Z.length) return "";
    const pe = Vi(Z), ge = pe.includes(G.hourlyMode) ? G.hourlyMode : "temperature", he = st(), ye = he.getTime() + ul * 24 * fo, be = (F - he.getTime()) / fo * cd, Pe = ul * 24 * cd, He = (De) => (De - F) / fo * cd, $e = [{ x: 0, label: Ze.now, entry: Z[0] }, ...Z.filter((De) => {
      const Ge = new Date(De.datetime);
      return He(Ge.getTime()) >= 48 && Ge.getTime() < ye && Ge.getHours() % Pp === 0;
    }).map((De) => {
      const Ge = new Date(De.datetime);
      return { x: He(Ge.getTime()), label: Pr(Ge, _), entry: De };
    })], Ve = (De, Ge, Be) => '<span class="wbMark' + (Ge === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Be + "</span>";
    return j = { segs: Ye(he, A), seed: he.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Ze.nextHours) + "</h2></div>" + (pe.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + pe.map((De) => '<button aria-pressed="' + (De === ge) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + Oe(Ze.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Pe - be) + 'px"><div class="wbRow wbTimes">' + $e.map((De, Ge) => Ve(De, Ge, Oe(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -be + "px;width:" + Pe + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + $e.map((De, Ge) => {
      if (!De.entry) return "";
      const [Be, Qe] = ht(_, De.entry, ge);
      return Ve(De, Ge, '<span class="wbPrimaryV">' + Oe(Be) + '</span><span class="wbSecondary">' + Oe(Qe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function zi(_) {
    const A = ee, { rise: F, set: Z } = gc(_, A), pe = F && Z ? Math.round((Z.getTime() - F.getTime()) / go) : 0, ge = Math.floor(pe / 60), he = pe % 60, ye = F && Z ? (A.getTime() - F.getTime()) / (Z.getTime() - F.getTime()) : -1, be = ye >= 0 && ye <= 1, Pe = Math.PI * (1 - Math.min(1, Math.max(0, ye))), He = 100 + 74 * Math.cos(Pe), $e = 100 - 74 * Math.sin(Pe), Ve = be ? Math.sin(Math.PI * ye) : 0, De = be ? xs("#2e0a0d", "#43180a", Ve) : "#0e0507", Ge = be ? xs("#7a1d12", "#8f400f", Ve) : "#1c0709", Be = xs("#f60c08", "#ff8f00", Ve), Qe = xs("#fd9b07", "#ffd84a", Ve), mt = be ? xs("#fd9b07", "#ffd84a", Ve) : "#6b3a2a", Ht = (tn) => tn ? Pr(tn, _) : "–", Tt = F && Z ? new Date((F.getTime() + Z.getTime()) / 2) : null;
    return Bo({
      icon: $n.sunny,
      name: Ze.sun,
      sub: pe ? Yn(Ze.daylightShort, { hours: ge, minutes: he }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + Ge + ");--wb-sun-line:" + mt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Be + '"></stop><stop offset="0.45" stop-color="' + Be + '"></stop><stop offset="1" stop-color="' + Qe + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (be ? '<circle cx="' + He + '" cy="' + $e + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (Tt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Oe(Ht(Tt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Oe(Ht(F)) + '</text><text class="wbSunTime" x="174" y="117">' + Oe(Ht(Z)) + "</text></svg></div>"
    });
  }
  function di(_, A, F) {
    const Z = (he) => L + "moon-" + he, pe = _ > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + Z("terminator") + ')" d="' + Sh(61, 61, 57.9, _) + '"' + (A ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", ge = (he, ye, be, Pe, He, $e) => '<filter id="' + Z(he) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ye + '" numOctaves="' + be + '" seed="' + Pe + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ve) => "<feFunc" + Ve + ' type="linear" slope="' + He + '" intercept="' + $e + '"></feFunc' + Ve + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + Z("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + Z("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + Z("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + Z("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + Z("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + ge("mottle", "0.045", 4, 3, 1.8, -0.4) + ge("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + Z("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + Z("fill") + ')"></circle><g' + (F ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + Z("soften") + ')">' + Ah.map(([he, ye, be, Pe, He, $e]) => '<ellipse cx="' + he + '" cy="' + ye + '" rx="' + be + '" ry="' + Pe + '" fill-opacity="' + $e + '" transform="rotate(' + He + " " + he + " " + ye + ')"></ellipse>').join("") + "</g>" + _h.map(([he, ye, be]) => '<circle class="wbCrater" cx="' + he + '" cy="' + ye + '" r="' + be + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + Z("glow") + ')">' + Eh.map(([he, ye]) => '<line x1="54.4" y1="95" x2="' + he + '" y2="' + ye + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + Z("glow") + ')">' + yc.map(([he, ye, be]) => '<circle cx="' + he + '" cy="' + ye + '" r="' + be * 2 + '"></circle>').join("") + "</g>" + yc.map(([he, ye, be]) => '<circle class="wbBrightCenter" cx="' + he + '" cy="' + ye + '" r="' + be + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + Z("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + Z("grain") + ')"></rect>' + pe + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function fn(_) {
    const A = T, F = Cl(_), Z = (F == null ? void 0 : F.lat) ?? 0, pe = ph(A), ge = wc(_), he = ge ? _.states[ge] : void 0, ye = ks(he) && Gp.includes(he.state) ? he.state : hh(pe.phase), { rise: be, set: Pe } = F ? uh(A, F.lat, F.lon) : {}, He = pe.phase > 0.5 != Z < 0, $e = un(Math.round(pe.fraction * 100), _.locale) + "%", Ve = be ?? Pe, De = Ve ? Pr(Ve, _) : void 0;
    return Bo({
      icon: $n.night,
      name: Ze.moon,
      sub: Ze.phases[ye],
      visual: '<div class="wbMoonBox">' + di(pe.fraction, He, Z < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? Oe(Yn(be ? Ze.moonriseAt : Ze.moonsetAt, { time: De })) : "") + "</span><span>" + Oe(Yn(Ze.lit, { illumination: $e })) + "</span></div>"
    });
  }
  function nt(_, A) {
    var Ge;
    const F = va(_, A, "wind_speed");
    if (!F || !Ln(F.value)) return "";
    const Z = va(_, A, "wind_gust_speed"), pe = va(_, A, "wind_bearing"), ge = pe && Ln(pe.value) ? Number(pe.value) : void 0, he = xh(Number(F.value), (Ge = F.stateObj.attributes) == null ? void 0 : Ge.wind_speed_unit), ye = yl(_, F.stateObj, "wind_speed", F.value), be = ge !== void 0 ? Ze.cardinal[jp[((ge + 11.25) / 22.5 | 0) % 16]] : void 0, Pe = Z ? vh(_, Z.stateObj, "wind_gust_speed", Z.value) : void 0, He = [be ? Yn(Ze.windFrom, { direction: be }) : void 0, he !== void 0 ? he + " " + Ze.beaufort : void 0].filter(Boolean).join(" · ") || Pe, $e = (Be, Qe) => {
      const mt = (Be - 90) * Math.PI / 180;
      return [100 + Qe * Math.cos(mt), 100 + Qe * Math.sin(mt)];
    }, Ve = Array.from({ length: 36 }, (Be, Qe) => Qe * 10).map((Be) => {
      const Qe = Be % 90 === 0, [mt, Ht] = $e(Be, 97), [Tt, tn] = $e(Be, Qe ? 83 : 89);
      return '<line class="wbTick' + (Qe ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Ht + '" x2="' + Tt + '" y2="' + tn + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Be, Qe]) => {
      const [mt, Ht] = $e(Qe, 64);
      return '<text class="wbLetter' + (Be === "n" ? " wbNorth" : "") + '" x="' + mt + '" y="' + Ht + '">' + Oe(Ze.cardinal[Be]) + "</text>";
    }).join("");
    return Bo({ icon: $n.windy, name: Ze.wind, sub: He, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ve + De + (ge !== void 0 ? '<path class="wbMarker" transform="rotate(' + ge + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Oe(ye.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Oe(ye.unit) + "</text></svg>" });
  }
  function Hn(_, A) {
    const F = va(_, A, "uv_index");
    if (!F || !Ln(F.value)) return "";
    const Z = Number(F.value), pe = Ze.uvLevel[bh(Z)], ge = /* @__PURE__ */ new Date();
    ge.setHours(23, 59, 59, 999);
    const he = y("hourly").filter((Be) => Be.uv_index != null && new Date(Be.datetime) > /* @__PURE__ */ new Date() && new Date(Be.datetime) <= ge).reduce((Be, Qe) => !Be || Qe.uv_index > Be.uv ? { uv: Qe.uv_index, time: new Date(Qe.datetime) } : Be, void 0), ye = 48, be = 100, Pe = 130, He = (Be) => -ye + Math.min(Be, 11) / 11 * 2 * ye, $e = (Be, Qe) => {
      const mt = Be * Math.PI / 180;
      return [be + Qe * Math.sin(mt), Pe - Qe * Math.cos(mt)];
    }, Ve = (Be, Qe, mt) => {
      const [Ht, Tt] = $e(He(Be), mt), [tn, _n] = $e(He(Qe), mt);
      return "M " + Ht + " " + Tt + " A " + mt + " " + mt + " 0 0 1 " + tn + " " + _n;
    }, Ge = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, pl.low], [3, 6, pl.moderate], [6, 8, pl.high], [8, 11, pl.very_high]].map(([Be, Qe, mt]) => '<path class="wbVuZone" d="' + Ve(Be, Qe, 96) + '" style="stroke:' + mt + '"></path>').join("") + Array.from({ length: 21 }, (Be, Qe) => ({ angle: -ye + Qe * (2 * ye / 20), major: Qe % 2 === 0 })).map(({ angle: Be, major: Qe }) => {
      const [mt, Ht] = $e(Be, 102), [Tt, tn] = $e(Be, Qe ? 114 : 108);
      return '<line class="wbVuTick' + (Qe ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Ht + '" x2="' + Tt + '" y2="' + tn + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + He(Z) + 'deg"><line x1="' + be + '" y1="' + Pe + '" x2="' + be + '" y2="' + (Pe - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Oe(un(Math.round(Z), _.locale)) + "</text></svg>";
    return Bo({
      icon: $n.sunnyAlert,
      name: Ze.metrics.uv_index,
      sub: he && he.uv > Z ? Yn(Ze.uvPeak, { level: pe, uv_index: un(Math.round(he.uv), _.locale), time: Pr(he.time, _) }) : pe,
      visual: Ge
    });
  }
  function ji(_) {
    const A = y("daily")[0], F = Y.temperatureHistory;
    if (!A || new Date(A.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ln(A.temperature) || !F || F.dailyHighs.length < Op) return "";
    const Z = Number(A.temperature), pe = F.dailyHighs.reduce((Tt, tn) => Tt + tn, 0) / F.dailyHighs.length, ge = Math.round(Z - pe) || 0, he = ge > 0 ? "above" : ge < 0 ? "below" : "same", ye = [...F.days, { date: /* @__PURE__ */ new Date(), high: Z, today: !0 }], be = 220, Pe = 158, He = 22, $e = 20, Ve = ye.map((Tt) => Tt.high).concat(pe), De = Math.min(...Ve) - 3, Ge = Math.max(...Ve) + 1, Be = (Tt) => He + (1 - (Tt - De) / (Ge - De)) * (Pe - He - $e), Qe = be / ye.length, mt = Math.min(18, Qe * 0.6), Ht = '<svg class="wbCompareBars" viewBox="0 0 ' + be + " " + Pe + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + be + '" y1="' + Be(pe) + '" y2="' + Be(pe) + '"></line>' + ye.map((Tt, tn) => {
      const _n = tn * Qe + Qe / 2, ta = Be(Tt.high), On = Tt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + On + '" x="' + (_n - mt / 2) + '" y="' + ta + '" width="' + mt + '" height="' + (Pe - $e - ta) + '" rx="5"></rect><text class="wbAvgValue' + On + '" x="' + _n + '" y="' + (ta - 6) + '">' + Oe(Zn(_, Tt.high)) + '</text><text class="wbAvgDay' + On + '" x="' + _n + '" y="' + (Pe - 4) + '">' + Oe(th(Tt.date, _)) + "</text>";
    }).join("") + "</svg>";
    return Bo({
      icon: $n.chartLine,
      name: Ze.metrics.compared_to_average,
      double: !0,
      sub: Yn(Ze.highsLastDays, { days: F.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (ge > 0 ? "+" : "") + Oe(Zn(_, ge)) + '</div><div class="wbCompareWords">' + Oe(Ze.average[he]) + '</div><div class="wbCompareTemps">' + Oe(Yn(Ze.todayVsAverage, { today: Zn(_, Z), average: Zn(_, pe) })) + "</div></div>" + Ht + "</div>"
    });
  }
  function ft(_, A) {
    const F = va(_, A, "humidity");
    if (!F || !Ln(F.value)) return "";
    const Z = va(_, A, "dew_point"), pe = Math.max(0, Math.min(100, Number(F.value)));
    return Bo({
      icon: $n.waterPercent,
      name: Ze.metrics.humidity,
      sub: Z && Ln(Z.value) ? Yn(Ze.dewPoint, { dew_point: Zn(_, Z.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + pe + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + ml(un(Math.round(Number(F.value)), _.locale), "%") + "</div>"
    });
  }
  function Ae(_, A) {
    var Pe, He;
    const F = va(_, A, "pressure");
    if (!F || !Ln(F.value)) return "";
    const Z = Number(F.value), pe = (Pe = F.stateObj.attributes) == null ? void 0 : Pe.pressure_unit, ge = bc(Z, pe), he = ((He = Y.pressureHistory) == null ? void 0 : He.entityId) === F.stateObj.entity_id ? bc(Y.pressureHistory.value, pe) : void 0;
    let ye;
    if (ge !== void 0 && he !== void 0) {
      const $e = ge - he;
      ye = $e >= dc ? "rising" : $e <= -dc ? "falling" : "steady";
    }
    const be = yl(_, F.stateObj, "pressure", Math.round(Z));
    return Bo({
      icon: $n.gauge,
      name: Ze.metrics.pressure,
      sub: ye ? Ze.pressure[ye] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + ml(be.number) + '<span class="wbTapeUnit">' + Oe(be.unit) + "</span></div>" + (ge !== void 0 ? lt(_, ge) : "") + "</div>"
    });
  }
  function lt(_, A) {
    const pe = Math.floor(A) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (ge, he) => pe + he).map((ge) => {
      const he = 100 - (ge - A) * 9;
      if (he < 22 || he > 178) return "";
      const ye = ge % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(he - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ye ? 2 : 8) + '" x2="26" y1="' + he + '" y2="' + he + '"></line>' + (ye ? '<text class="wbTapeLabel" x="33" y="' + he + '">' + Oe(un(ge, _.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Oe(Ze.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Oe(Ze.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function vt(_) {
    var be, Pe;
    const A = pd(_), F = A ? _.states[A] : void 0;
    if (!F || ((be = Y.rain) == null ? void 0 : be.entityId) !== A || !Ln(Y.rain.change)) return "";
    const Z = ((Pe = F.attributes) == null ? void 0 : Pe.unit_of_measurement) ?? "", pe = we(_, "hourly"), ge = Date.now() + Wi, he = y("hourly").filter((He) => He.precipitation != null && new Date(He.datetime).getTime() <= ge), ye = he.reduce((He, $e) => He + Number($e.precipitation), 0);
    return Bo({
      icon: $n.rainy,
      name: Ze.metrics.precipitation,
      sub: pe && he.length ? Yn(Ze.rainExpected, { amount: un(ye, _.locale, { maximumFractionDigits: 1 }) + " " + Hr(_, pe, "precipitation") }) : Ze.rainLast24h,
      visual: ml(un(Y.rain.change, _.locale, { maximumFractionDigits: 1 }), Z) + (he.length > 1 ? Lh(he.map((He) => ({ label: "", value: Number(He.precipitation) }))) : "")
    });
  }
  function Ie(_, A) {
    const F = va(_, A, "visibility");
    if (!F || !Ln(F.value)) return "";
    const Z = yl(_, F.stateObj, "visibility", F.value), pe = Dp(Number(F.value), Hr(_, F.stateObj, "visibility"));
    return Bo({
      icon: $n.eyeOutline,
      name: Ze.metrics.visibility,
      sub: Ze.visibilityLevel[Rp(pe)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + pe + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Oe(wo(_, pe)) + '</div><div class="wbSeaValue">' + ml(Z.number, Z.unit) + "</div></div>"
    });
  }
  function wo(_, A) {
    var ge;
    const F = Ep((ge = _.config) == null ? void 0 : ge.country, A);
    if (F) return Yn(Ze.visibilityLandmarks, { from: F.from, to: F.to });
    const Z = A / Vp * 60;
    if (Z < 60) {
      const he = Z < 5 ? Math.max(1, Math.round(Z)) : 5 * Math.round(Z / 5);
      if (he < 60) return Yn(Ze.walkMinutes, { minutes: un(he, _.locale) });
    }
    const pe = Math.max(1, Math.round(Z / 30) / 2);
    return pe < 8 ? Yn(Ze.walkHours, { hours: un(pe, _.locale) }) : Ze.walkDay;
  }
  function Oo(_) {
    Y.categories === void 0 && me(_);
    const A = tt(_), F = (be) => be.map((Pe) => _.states[Pe]).filter(ks), Z = F(A.air), pe = F(A.pollen);
    if (!Z.length && !pe.length) return "";
    const ge = [...Z, ...pe], he = (be) => pe.includes(be) ? $n.flower : $n.airFilter, ye = ge.find((be) => be.entity_id === G.aq);
    return ye ? Gi(_, ye, he(ye)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Ze.airQuality) + '</h2></div><div class="wbAqTiles">' + ge.map((be) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Oe(be.entity_id) + '"><span class="wbChip">' + Fr(he(be)) + '</span><span class="wbText"><span class="wbName">' + Oe(vc(_, be)) + '</span><span class="wbSub">' + Oe(fl(_, be)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Gi(_, A, F) {
    var He, $e, Ve;
    const Z = ((He = A.attributes) == null ? void 0 : He.unit_of_measurement) ?? "", pe = (($e = A.attributes) == null ? void 0 : $e.device_class) === "pm25" && Z === cc && Ln(A.state), ge = Number(A.state), he = pe ? wh(ge) : void 0, ye = ((Ve = Y.aqHistory) == null ? void 0 : Ve.entityId) === A.entity_id ? Y.aqHistory.points : void 0, be = (De) => Math.min(100, Math.max(0, De / hl * 100));
    let Pe;
    if (ye && ye.length > 1) Pe = Th(ye, (De) => (un(De, _.locale, { maximumFractionDigits: 1 }) + " " + Z).trim());
    else if (he) {
      let De = 0;
      const Ge = ou.map(([Be, Qe]) => {
        const mt = be(Math.min(Qe, hl)), Ht = Up[Be] + " " + De + "% " + mt + "%";
        return De = mt, Ht;
      });
      Pe = '<div class="wbScale" role="meter" aria-label="' + Oe(Ze.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + hl + '" aria-valuenow="' + ge + '" style="background:linear-gradient(to right, ' + Ge.join(", ") + ')"><i style="left:' + be(ge) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + hl + " " + cc + "</span></div>";
    } else Pe = '<span class="wbGraphNote"><span>' + Oe(fl(_, A)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Fr(F) + '</span><span class="wbText"><span class="wbName">' + Oe(vc(_, A)) + '</span><span class="wbSub">' + Oe(fl(_, A)) + (he ? " · " + Oe(Ze.aqLevel[he]) : "") + '</span></span><button class="wbBack" title="' + Oe(Ze.back) + '" data-wb="aq-close">' + Fr($n.back) + '</button></div><div class="wbGraph">' + Pe + "</div></div></div>";
  }
  const Ne = {
    current: Ke,
    hourly: bo,
    sun: zi,
    moon: fn,
    wind: nt,
    uv_index: Hn,
    compared_to_average: ji,
    humidity: ft,
    pressure: Ae,
    precipitation: vt,
    visibility: Ie,
    air_quality: Oo
  };
  function je(_) {
    var Pe, He, $e, Ve;
    const A = l == null ? void 0 : l();
    if (!A || q) return;
    const F = ze(A);
    k(A, F), Y.lastFetch || V();
    const Z = tt(A), pe = wc(A), ge = pd(A), he = [
      ...F.map((De) => A.states[De]),
      A.states["sun.sun"],
      pe && A.states[pe],
      ge && A.states[ge],
      ...Z.air.map((De) => A.states[De]),
      ...Z.pollen.map((De) => A.states[De]),
      A.locale,
      A.config,
      A.entities,
      Math.floor(Date.now() / go)
    ];
    if (!_ && K && he.length === K.length && he.every((De, Ge) => De === K[Ge])) return;
    K = he;
    const ye = x.getRootNode(), be = ye.activeElement || document.activeElement;
    for (const De of se) {
      const Ge = O[De];
      let Be = "";
      try {
        Be = Ne[De](A, F) || "";
      } catch {
        Be = "";
      }
      if (Be === Ge.html) continue;
      const Qe = be && Ge.el.contains(be) ? (Pe = be.dataset) == null ? void 0 : Pe.wbFocus : void 0, mt = Ge.el.querySelector(".wbStripScroll"), Ht = mt ? mt.scrollLeft : 0;
      Ge.html = Be, Ge.el.hidden = !Be, Ge.el.innerHTML = Be, Ht && ((He = Ge.el.querySelector(".wbStripScroll")) == null || He.scrollTo({ left: Ht })), Qe && !X && (($e = Ge.el.querySelector('[data-wb-focus="' + Qe + '"]')) == null || $e.focus());
    }
    X && ((Ve = x.querySelector('[data-wb-focus="' + X + '"]')) == null || Ve.focus(), X = null), Rt(performance.now());
  }
  function Xt() {
    W || q || (W = !0, queueMicrotask(() => {
      W = !1, je(!0);
    }));
  }
  function Ra() {
    const _ = getComputedStyle(x), A = (he) => _.getPropertyValue(he).trim(), F = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([he, ye]) => {
      A(ye) && (F[he] = A(ye));
    });
    const Z = A("--color-text-primary") || "#f1f1f1", pe = A("--color-bg-card") || "#222222", ge = !!x.closest(".light");
    return { colors: { ...ea, ...F }, ink: ge ? Z : pe, paper: ge ? pe : Z };
  }
  const bn = (_, A) => {
    var F;
    _.width !== A.w && (_.width = A.w), _.height !== A.h && (_.height = A.h), (F = _.getContext("2d")) == null || F.putImageData(new ImageData(A.data, A.w, A.h), 0, 0);
  }, At = () => m && !Jp();
  function Za(_, A) {
    const F = x.querySelector("canvas[data-wb-strip]");
    if (!F || !j || !F.getClientRects().length) return;
    const Z = F.clientWidth, pe = F.clientHeight;
    if (!Z || !pe) return;
    const ge = { width: Z, height: pe, columns: ul, colors: A.colors, clock: _, ambient: At(), seed: j.seed };
    if (c === "smooth") {
      const he = Math.min(2, window.devicePixelRatio || 1), ye = Math.round(Z * he), be = Math.round(pe * he);
      F.width !== ye && (F.width = ye), F.height !== be && (F.height = be);
      const Pe = F.getContext("2d");
      if (!Pe) return;
      Pe.setTransform(he, 0, 0, he, 0, 0), hp(Pe, j.segs, ge);
    } else bn(F, pp(j.segs, { ...ge, px: 2, oneBit: c === "onebit", ink: A.ink, paper: A.paper }));
  }
  function Rt(_) {
    if (q) return;
    const A = Ra();
    if (c !== "smooth") {
      const F = At();
      x.querySelectorAll("canvas[data-wb-wx]").forEach((Z) => {
        Z.getClientRects().length && bn(Z, Uc(Cd(Z.dataset.wbWx, A.colors), { size: Number(Z.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: A.colors, ink: A.ink, paper: A.paper, clock: _, idle: F }));
      });
    }
    x.querySelectorAll("canvas[data-wb-sea]").forEach((F) => {
      const Z = F.clientWidth, pe = F.clientHeight, ge = Number(F.dataset.wbSea), he = Z + "x" + pe + ":" + ge + ":" + A.colors.skyClearDay;
      !Z || !pe || !(ge > 0) || F.dataset.painted === he || (F.dataset.painted = he, bn(F, Lp(Z, pe, ge, A.colors)));
    }), Za(_, A);
  }
  function Na(_) {
    if (ne = 0, !(q || !At())) {
      if (!document.hidden)
        if (c === "smooth") Za(_, Ra());
        else {
          const A = Math.floor(_ / 100);
          A !== U && (U = A, Rt(_));
        }
      ne = requestAnimationFrame(Na);
    }
  }
  function Fn() {
    x.classList.toggle("wbMotion", At()), !ne && !q && At() && (ne = requestAnimationFrame(Na));
  }
  function ba(_) {
    var F, Z;
    const A = (Z = (F = _.target).closest) == null ? void 0 : Z.call(F, "[data-wb]");
    if (!(!A || !x.contains(A))) {
      switch (A.dataset.wb) {
        case "day": {
          G.openDay = Number(A.dataset.index), G.opener = A.dataset.wbFocus, X = "back-day";
          const pe = pn()[G.openDay], ge = !Y.todayHistory || Y.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Y.todayHistory.fetched > Bp;
          pe && ws(new Date(pe.datetime), /* @__PURE__ */ new Date()) && ge && oe();
          break;
        }
        case "close-day":
          G.openDay = void 0, X = G.opener, G.opener = void 0;
          break;
        case "open-page":
          b == null || b();
          return;
        case "day-mode":
          G.dayMode = A.dataset.mode;
          break;
        case "hourly-mode":
          G.hourlyMode = A.dataset.mode;
          break;
        case "aq-open":
          G.aq = A.dataset.entity, ce(G.aq);
          break;
        case "aq-close":
          G.aq = void 0;
          break;
        default:
          return;
      }
      je(!0);
    }
  }
  function Jt(_) {
    var A, F;
    _.key === "Escape" && G.openDay !== void 0 && ((F = (A = _.target).closest) != null && F.call(A, '[data-wb-open="day"]')) && (G.openDay = void 0, X = G.opener, G.opener = void 0, je(!0));
  }
  let Et = null;
  function Ba(_) {
    var F, Z;
    const A = (Z = (F = _.target).closest) == null ? void 0 : Z.call(F, ".wbStripScroll");
    !A || _.button !== 0 || (Et = { startX: _.pageX, left: A.scrollLeft, moved: !1 }, window.addEventListener("mousemove", ua), window.addEventListener("mouseup", Ka, { once: !0 }));
  }
  function ua(_) {
    const A = x.querySelector(".wbStripScroll");
    if (!Et || !A) return;
    const F = _.pageX - Et.startX;
    !Et.moved && Math.abs(F) > 1 && (Et.moved = !0, A.classList.add("wbDragging")), A.scrollLeft = Et.left - F;
  }
  function Ka() {
    var _;
    Et = null, window.removeEventListener("mousemove", ua), (_ = x.querySelector(".wbStripScroll")) == null || _.classList.remove("wbDragging");
  }
  x.addEventListener("click", ba), x.addEventListener("keydown", Jt), x.addEventListener("mousedown", Ba);
  const Ut = typeof ResizeObserver == "function" ? new ResizeObserver(() => Rt(performance.now())) : null;
  Ut == null || Ut.observe(x);
  const Kt = (Xa = window.matchMedia) == null ? void 0 : Xa.call(window, "(prefers-reduced-motion: reduce)"), xt = () => {
    Fn(), Rt(performance.now());
  };
  (xo = Kt == null ? void 0 : Kt.addEventListener) == null || xo.call(Kt, "change", xt);
  const $a = [
    setInterval(() => {
      ee = /* @__PURE__ */ new Date(), je(!0);
    }, qp),
    setInterval(() => {
      T = /* @__PURE__ */ new Date(), je(!0);
    }, Wp),
    setInterval(V, Hp)
  ];
  return je(!0), Fn(), {
    update() {
      je(!1);
    },
    setStyle(_) {
      !_ || _ === c || (c = _, je(!0), Fn());
    },
    destroy() {
      var _;
      q = !0, $a.forEach(clearInterval), ne && cancelAnimationFrame(ne), ne = 0, Ut == null || Ut.disconnect(), (_ = Kt == null ? void 0 : Kt.removeEventListener) == null || _.call(Kt, "change", xt), Ka(), x.removeEventListener("click", ba), x.removeEventListener("keydown", Jt), x.removeEventListener("mousedown", Ba), ["daily", "hourly"].forEach(Ce), x.remove();
    }
  };
}
const Ms = "#E1E1E1", Mc = "#F7F4F0", hd = "#03a9f4", kt = 14, Ct = 172;
let Rh = 0;
const Yt = (a) => Math.round(a * 100) / 100, vo = (a, l, o) => Math.max(l, Math.min(o, a)), Fo = (a, l, o, c, m, v) => '<rect x="' + Yt(a) + '" y="' + Yt(l) + '" width="' + Yt(o) + '" height="' + Yt(c) + '" fill="' + m + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", fd = (a) => a.map((l, o) => (o ? "L" : "M") + Yt(l[0]) + " " + Yt(l[1])).join("");
function md(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const ri = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Nh(a) {
  const l = a < 2 ? a + 24 : a;
  let o = ri[0], c = ri[ri.length - 1];
  for (let L = 0; L < ri.length - 1; L++) if (l >= ri[L][0] && l <= ri[L + 1][0]) {
    o = ri[L], c = ri[L + 1];
    break;
  }
  const m = (l - o[0]) / (c[0] - o[0]), v = m * m * (3 - 2 * m), b = (L, x) => {
    const H = parseInt(L.slice(1), 16), se = parseInt(x.slice(1), 16);
    return "#" + [16, 8, 0].map((ae) => Math.round((H >> ae & 255) + ((se >> ae & 255) - (H >> ae & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: b(o[1][0], c[1][0]), bot: b(o[1][1], c[1][1]), warm: b(o[1][2], c[1][2]), cool: b(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * v, t: l };
}
function Bh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, v = Math.max(o, c, m), b = Math.min(o, c, m);
  let L = 0, x = 0;
  const H = (v + b) / 2;
  if (v !== b) {
    const se = v - b;
    x = H > 0.5 ? se / (2 - v - b) : se / (v + b), L = (v === o ? (c - m) / se + (c < m ? 6 : 0) : v === c ? (m - o) / se + 2 : (o - c) / se + 4) / 6;
  }
  return [L * 360, x * 100, H * 100];
}
function gu(a, l, o) {
  l = vo(l, 0, 100) / 100, o = vo(o, 0, 100) / 100;
  const c = (b) => (b + a / 30) % 12, m = l * Math.min(o, 1 - o), v = (b) => o - m * Math.max(-1, Math.min(c(b) - 3, Math.min(9 - c(b), 1)));
  return "#" + [v(0), v(8), v(4)].map((b) => Math.round(b * 255).toString(16).padStart(2, "0")).join("");
}
const [vu, bu, wu] = Bh(Ms), Sc = gu(vu, bu, Math.max(6, wu - 14)), Ph = gu(vu, bu, Math.min(96, wu + 16));
function Ih(a, l, o, c, m) {
  const v = Ct / 2, b = Ct * 0.12, L = v - (v - b) * a, x = (K) => K ** 1.3, H = vo(o, -1.5, 1.5), se = (K) => -(Math.abs(H) * 4.6 * K ** 1.5) * Math.sign(H), ae = a * 1.4, O = (K, ne) => {
    const U = Math.min(4.8, Math.abs(o) * 2.6) * (ne ? 1 : -1) * Math.sign(o || 1), W = ne ? K + L : K, X = ne ? K : K + L, G = (Le) => W + se(Le) + U * Math.sin(Le * Math.PI * 1.2 + c) * x(Le) * 1.4 + ae * Math.sin(Le * Math.PI * 2 + c * 0.6) * x(Le) * (ne ? 1 : -1), Y = [[X, kt]];
    for (let Le = 0; Le <= 12; Le++) Y.push([G(Le / 12), kt + Ct * Le / 12]);
    Y.push([X, kt + Ct]);
    let ee = '<path d="' + fd(Y) + 'Z" fill="' + Ms + '"/>';
    if (m) return ee;
    const T = 1.35 + ((ne ? o > 0 : o < 0) ? 0.35 : 0), j = (Le) => {
      const y = Le / 7, we = ne ? 1 - y : y, Ce = (1 - we) ** 1.3, qe = K + L * y;
      return Array.from({ length: 13 }, (k, E) => {
        const C = E / 12;
        return [qe + se(C) * Ce + U * T * Math.sin(C * Math.PI * 1.2 + c - we * 3.2) * x(C) * 1.4 * Ce + ae * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - we * 2.5) * x(C) * a * (0.4 + 0.6 * Ce), kt + Ct * C];
      });
    }, ve = [1, 2, 3, 4, 5, 6].map(j);
    for (let Le = 0; Le < 6; Le += 2) ee += '<path d="' + fd(ve[Le]) + fd(ve[Le + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ee;
  }, q = v - (v - b) * l;
  return { body: O(kt, !0) + O(kt + Ct - L, !1), rails: [{ x: kt + q - 4, y: kt, w: 4, h: Ct }, { x: kt + Ct - q, y: kt, w: 4, h: Ct }], head: 6.4 };
}
function Hh(a, l, o) {
  const c = Ct * (1 - a);
  let m = "";
  if (c > 1 && (m += Fo(kt, kt, Ct, c, Ms), !o))
    for (let v = 1; v < 7; v += 2) m += Fo(kt + Ct * v / 7, kt, Ct / 7, c, "#fff");
  return { body: m, rails: [{ x: kt, y: kt + Ct * (1 - l) - 7, w: Ct, h: 11 }], head: 10.4 };
}
function Fh(a, l, o, c) {
  const m = 9 - 7 * (o / 100), v = kt + Ct * (1 - a), b = Math.ceil(Ct / 10) + 1, L = kt + m / 2, x = (kt + Ct - m / 2 - L) / (b - 1), H = 0.8, se = 0.6, ae = Array.from({ length: b }, (K, ne) => Math.max(L + ne * se, Math.min(L + ne * x, v - m / 2 - (b - 1 - ne) * se))), O = ae.slice(0, -1).map((K, ne) => vo((ae[ne + 1] - K - se) / (x - se), 0, 1));
  O.push(O[b - 2]);
  let q = "";
  return ae.forEach((K, ne) => {
    const U = H + (m - H) * O[ne], W = Math.max(0.5, U / 2), X = Math.max(0.4, U * 0.114);
    q += Fo(kt, K - W, Ct, Math.max(1, U), Ms), !c && U > 2.2 && (q += Fo(kt, K + W - X, Ct, X, Sc) + Fo(kt, K - W, Ct, X * 0.55, Ph, 0.75));
  }), c || [0.22, 0.78].forEach((K) => {
    q += Fo(kt + Ct * K - 0.7, kt, 1.4, Math.max(0, ae[b - 1] + 1 - kt), Sc, 0.85);
  }), { body: q, rails: [{ x: kt, y: kt + Ct * (1 - l) - 8, w: Ct, h: 8 }], head: 8.8 };
}
const Cc = (a, l, o, c, m, v, b) => a === "curtain" ? Ih(l, o, m, v, b) : a === "venetian" ? Fh(l, o, c, b) : Hh(l, o, b);
function Oh(a, l) {
  let o = "", c = "";
  return l.forEach((m) => {
    const v = m.w > m.h, b = vo(v ? kt + Ct / 2 : m.x + m.w / 2, 17, 183), L = vo(v ? m.y + m.h / 2 : kt + Ct / 2, 17, 183);
    o += v ? Fo(kt, vo(m.y + m.h / 2, kt, kt + Ct) - 1, Ct, 2, hd) : Fo(vo(m.x + m.w / 2, kt, kt + Ct) - 1, kt, 2, Ct, hd);
    const x = v ? "M" + Yt(b - 4) + " " + Yt(L - 3) + "l4 -3l4 3M" + Yt(b - 4) + " " + Yt(L + 3) + "l4 3l4 -3" : "M" + Yt(b - 3) + " " + Yt(L - 4) + "l-3 4l3 4M" + Yt(b + 3) + " " + Yt(L - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Yt(b) + '" cy="' + Yt(L) + '" r="11" fill="' + hd + '" filter="url(#' + a + 's)"/><path d="' + x + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function qh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = Nh(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), v = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, b = Cc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), L = l.ghostAlpha > 4e-3 && l.ghost != null ? Cc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", x = l.grip > 4e-3 ? Oh(a, b.rails) : null, H = (se) => Fo(kt, kt, Ct, Ct, se);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Yt(m) + '%" cy="' + Yt(v) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Yt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Yt(100 - m * 0.8) + '%" cy="' + Yt(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Yt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Mc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + H("url(#" + a + "l)") + H("url(#" + a + "w)") + H("url(#" + a + "k)") + (L ? '<g opacity="' + Yt(l.ghostAlpha) + '">' + L + "</g>" : "") + b.body + '<rect x="14" y="14" width="172" height="' + b.head + '" fill="' + Ms + '" filter="url(#' + a + 's)"/></g>' + (x ? '<g clip-path="url(#' + a + 'c)" opacity="' + Yt(l.grip) + '">' + x.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Mc + '" stroke-width="3"/>' + (x ? '<g opacity="' + Yt(l.grip) + '">' + x.knobs + "</g>" : "") + "</svg>";
}
function Wh({ onMove: a, onSet: l }) {
  var ee;
  const o = "cv" + ++Rh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (ee = window.matchMedia) == null ? void 0 : ee.call(window, "(pointer: coarse)").matches;
  let v = null;
  const b = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, x = !1, H = !1, se = null, ae = 0, O = 0;
  const q = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", K = () => se || x || H || v.moving || v.target != null ? 1 : m ? performance.now() < O ? 1 : 0.4 : 0, ne = () => {
    c.innerHTML = qh(o, { kind: v.kind, pos: b.pos, bar: v.target ?? b.pos, tilt: b.tilt, vel: b.vel, ph: b.ph, ghost: b.gpos, ghostAlpha: b.ghost, grip: b.grip });
  };
  function U(T) {
    L = 0;
    const j = b.last ? Math.min(0.064, (T - b.last) / 1e3) : 1 / 60, ve = j * 60;
    b.last = T;
    const Le = v.pos - b.pos, y = b.pos;
    b.pos += Math.sign(Le) * Math.min(Math.abs(Le), Math.max(10.5, Math.abs(Le) * 1.4) * j), Math.abs(v.pos - b.pos) < 0.03 && (b.pos = v.pos), b.vel = b.vel * 0.86 + (b.pos - y) / ve * 0.14, Math.abs(b.vel) < 0.015 && b.pos === v.pos && (b.vel = 0), (b.pos !== y || b.vel) && (b.ph += (0.06 + Math.abs(b.vel) * 0.03) * ve);
    const we = v.tilt - b.tilt;
    b.tilt += Math.sign(we) * Math.min(Math.abs(we), Math.max(60, Math.abs(we) * 4) * j);
    const Ce = K();
    b.grip += (Ce - b.grip) * Math.min(1, j * (Ce > b.grip ? 11 : 3.5)), Math.abs(Ce - b.grip) < 0.01 && (b.grip = Ce);
    const qe = v.target != null && Math.abs(v.target - b.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (b.gpos = v.target), b.ghost += (qe - b.ghost) * Math.min(1, j * (qe > b.ghost ? 16 : 3)), Math.abs(qe - b.ghost) < 4e-3 && (b.ghost = qe), ne(), b.pos !== v.pos || b.vel || b.tilt !== v.tilt || b.grip !== Ce || b.ghost !== qe ? L = requestAnimationFrame(U) : b.last = 0;
  }
  const W = () => {
    v && !L && (L = requestAnimationFrame(U));
  }, X = setInterval(() => {
    v && !L && ne();
  }, 60 * 1e3), G = (T) => {
    const j = c.getBoundingClientRect();
    return q() === "x" ? (T.clientX - j.left) / j.width : (T.clientY - j.top) / j.height;
  };
  c.addEventListener("pointerdown", (T) => {
    var Le;
    if (!(v != null && v.canSet) || T.button > 0) return;
    T.preventDefault(), (Le = c.setPointerCapture) == null || Le.call(c, T.pointerId);
    const j = v.target ?? v.pos, ve = c.getBoundingClientRect();
    se = { p0: G(T), from: j, x0: T.clientX, value: null, side: null }, v.kind === "curtain" && j > 0 && (se.side = (T.clientX - ve.left) / ve.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (T) => {
    if (!se) return;
    let j;
    if (v.kind === "curtain") {
      if (!se.side) {
        const Le = T.clientX - se.x0;
        if (Math.abs(Le) < 4) return;
        se.side = Le < 0 ? "L" : "R";
      }
      const ve = (Ct / 2 - Ct * 0.12) / 200;
      j = se.from + (se.side === "L" ? -1 : 1) * ((G(T) - se.p0) / ve) * 100;
    } else j = se.from - (G(T) - se.p0) / (Ct / 200) * 100;
    se.value = vo(j, 0, 100), a(se.value);
  });
  const Y = () => {
    if (!se) return;
    const T = se.value;
    se = null, T != null && l(Math.round(T)), W();
  };
  return c.addEventListener("pointerup", Y), c.addEventListener("pointercancel", Y), c.addEventListener("lostpointercapture", Y), c.addEventListener("pointerenter", () => {
    x = !0, W();
  }), c.addEventListener("pointerleave", () => {
    x = !1, W();
  }), c.addEventListener("focus", () => {
    H = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    H = !1, W();
  }), c.addEventListener("keydown", (T) => {
    if (!(v != null && v.canSet)) return;
    const j = Math.round(v.target ?? v.pos), ve = T.shiftKey ? 10 : 1, Le = { ArrowUp: j + ve, ArrowRight: j + ve, ArrowDown: j - ve, ArrowLeft: j - ve, PageUp: j + 25, PageDown: j - 25, Home: 0, End: 100 }[T.key];
    if (Le == null) return;
    T.preventDefault();
    const y = vo(Le, 0, 100);
    a(y), clearTimeout(ae), ae = setTimeout(() => l(y), 500);
  }), {
    el: c,
    update(T) {
      const j = !v;
      v = T, j && (b.pos = v.pos, b.tilt = v.tilt, O = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", q() === "x"), c.classList.toggle("y", q() === "y"), v.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), c.setAttribute("aria-orientation", q() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), c.setAttribute("aria-valuetext", v.text), W();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(X), clearTimeout(ae), c.remove();
    }
  };
}
const Tc = "move-assistant-density", si = {
  get(a) {
    try {
      return localStorage.getItem(a);
    } catch {
      return null;
    }
  },
  set(a, l) {
    try {
      localStorage.setItem(a, l);
    } catch {
    }
  }
}, re = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), gd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Lc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Vh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', gl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Ac = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, _c = 1, zh = 4, Ec = 16, Dc = 32, jh = 128, Gh = 256, Rc = 16384, Uh = 1, Yh = 2, Nc = 4, Zh = 8, Kh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, $h = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Xh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, vd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Bc = "move_assistant_house", Pc = "move-assistant-house-used", Jh = ["switch", "fan", "input_boolean", "automation"], Ic = "move-assistant-house-look", Qh = [["popup", "Popup"], ["sheet", "Sheet"]], ef = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], bd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', tf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', nf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Hc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Fc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Oc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ua = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", qc = Ua(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), af = Ua(["M20 6L9 17L4 12"]), mo = {
  temp: Ua(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: Ua(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  // the solid bulb every light shows (Matt, 30 Oct)
  lights: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path style="fill:currentColor;stroke:none" d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"/></svg>',
  covers: Ua(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: Ua(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: Ua(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: Ua(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: Ua(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: Ua(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: Ua(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, of = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', rf = 1, sf = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Wc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, wd = ["hs", "xy", "rgb", "rgbw", "rgbww"], vl = ["door", "window", "garage_door", "opening"], Vc = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, bl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], lf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], df = 10, cf = 20, uf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, pf = ["living room", "bedroom", "office"];
function hf(a, { config: l, getHass: o }) {
  var Er, el, Hi;
  const c = (e) => a.getElementById(e), m = c("app"), b = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = si.get(Tc) === "1", x = {};
  const H = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, se = (e, n, i) => H({ type: "call_service", domain: e, service: n, service_data: i }), ae = a.querySelector("#appearancePane .toggleList");
  ae && !c("densityToggle") && (ae.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    L = !L, si.set(Tc, L ? "1" : "0"), ee();
  }));
  const O = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && ft(e).device_class === "power" && /^(W|kW)$/.test(ft(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], q = (e, n, i, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([p, w]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + p + '">' + w + "</button>").join("") + "</div>", K = (e, n, i, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + i + "</div>";
  function ne() {
    var M, D, P, N;
    if (!b || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = ($, fe) => '<div class="houseTab' + ($ === "look" ? " active" : "") + '" data-house-pane="' + $ + '"><section class="card">' + fe + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([$, fe]) => '<button class="tab segBtn' + ($ === "look" ? " active" : "") + '" type="button" data-house-tab="' + $ + '">' + fe + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + O.map(([$, fe, Re]) => K(fe, Re, '<select class="settingsSelect" data-source="' + $ + '" aria-label="' + fe + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(vd).map(([$, fe]) => K(fe.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + $ + '" aria-label="' + fe.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(M = e.querySelector(".themeBtn")) == null ? void 0 : M.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (P = c("moreInfoChoice")) == null ? void 0 : P.closest(".toggleRow"), (N = c("namesChoice")) == null ? void 0 : N.closest(".toggleRow")].forEach(($) => $ && d.appendChild($)), d.insertAdjacentHTML("beforeend", K("Lights", "How lights show on the house page.", q("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + K("Pad", "What the Dual Axis Controller’s pad sets on its tile.", q("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), w = p.querySelector(".houseTabs"), h = w.querySelector(".rubberIndicator"), g = ($) => {
      const fe = w.querySelector(".tab.active");
      h.style.transition = $ ? "" : "none", h.style.left = fe.offsetLeft + "px", h.style.width = fe.offsetWidth + "px", $ && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => g(!1)).observe(w), p.addEventListener("click", ($) => {
      const fe = $.target.closest("[data-house-tab]");
      if (fe) {
        w.querySelectorAll(".tab").forEach((J) => J.classList.toggle("active", J === fe)), p.querySelectorAll(".houseTab").forEach((J) => J.classList.toggle("active", J.dataset.housePane === fe.dataset.houseTab)), fe.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), g(!0);
        return;
      }
      const Re = $.target.closest("[data-light-fav]");
      if (Re) {
        Fa(Re.dataset.lightFav);
        return;
      }
      const le = $.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!le || le.disabled)) {
        if (le.dataset.lights && (Lt.lights = le.dataset.lights), le.dataset.dacPad && (Lt.dacPad = le.dataset.dacPad), (le.dataset.lights || le.dataset.dacPad) && (Ke(), qn.clear()), le.dataset.sumToggle) {
          const J = le.dataset.sumToggle, B = new Set(V.hiddenSums || []);
          B.has(J) ? B.delete(J) : B.add(J), V = { ...V, hiddenSums: [...B] }, An();
        }
        co();
      }
    }), p.addEventListener("change", ($) => {
      const fe = $.target;
      fe.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [fe.dataset.source]: fe.value || void 0 } }, An());
      const Re = fe.dataset.lightStyle || fe.dataset.lightPad;
      if (Re) {
        const le = fe.dataset.lightStyle ? "lightStyles" : "lightPads", J = { ...Lt[le] };
        fe.value ? J[Re] = fe.value : delete J[Re], Lt[le] = J, Ke(), [...qn.keys()].filter((B) => B.endsWith(":" + Re)).forEach((B) => qn.delete(B));
      }
      co();
    });
  }
  function U() {
    var g, M;
    Mn() && ci();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(na);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === Lt.lights))), c("lightsRow").querySelector(".status").textContent = n || !Mn() ? "How lights show on the house page." : pa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === Lt.dacPad))), c("dacPadRow").hidden = !Mn();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === a.activeElement) continue;
      const [P] = O.find(([$]) => $ === D.dataset.source), N = Object.keys(x).filter(O.find(([$]) => $ === P)[3]).sort(($, fe) => Ae($).localeCompare(Ae(fe)));
      D.dataset.sig !== N.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + N.map(($) => '<option value="' + re($) + '">' + re(Ae($)) + "</option>").join(""), D.dataset.sig = N.join(",")), D.value = N.includes((g = V.sources) == null ? void 0 : g[P]) ? V.sources[P] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const P = !(V.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", P), D.setAttribute("aria-checked", String(P));
    });
    const i = c("lightRows"), d = i != null && i.contains(a.activeElement) ? a.activeElement : null;
    if (!i || d != null && d.matches("select")) return;
    const p = new Set(En()), w = (D, P, N, $) => '<option value="' + D + '"' + (D === N ? " selected" : "") + ">" + P + "</option>", h = Object.keys(x).filter((D) => D.startsWith("light.")).sort((D, P) => !wt.get(D) - !wt.get(P) || (wt.get(D) || "").localeCompare(wt.get(P) || "") || Ae(D).localeCompare(Ae(P))).map((D) => {
      const P = Lt.lightStyles[D] || "", N = Lt.lightPads[D] || "", $ = p.has(D), fe = re(Ae(D));
      return "<tr><td><strong>" + fe + "</strong></td><td>" + re(wt.get(D) || "—") + "</td><td>" + re(Et(D)) + '</td><td class="metaSwitchCol"><button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + re(D) + '" aria-label="' + fe + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + re(D) + '" aria-label="' + fe + ' tile">' + w("", "Default", P) + w("tile", "HomeCore tile", P) + w("dac", "Dual Axis Controller", P) + '</select></td><td><select class="settingsSelect" data-light-pad="' + re(D) + '" aria-label="' + fe + ' pad"' + (gt(D) ? "" : " disabled") + ">" + w("", "Default", N) + w("temperature", "Temperature", N) + w("colour", "Colour", N) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== h && (i.innerHTML = h, i.dataset.html = h, d != null && d.dataset.lightFav && ((M = i.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || M.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, m.appendChild(W);
  let X = 0;
  function G() {
    if (!L) return;
    const e = c("homeView"), n = (w) => w.offsetParent !== null && !w.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((w) => {
      n(w) && (w.dataset.h = Math.round(w.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, p = i.filter((w) => {
      const h = w.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + p + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const Y = () => {
    L && requestAnimationFrame(G);
  };
  function ee() {
    var e;
    m.classList.toggle("showDensity", L), (e = c("densityToggle")) == null || e.classList.toggle("on", L), W.hidden = !L, clearInterval(X), L && (X = setInterval(G, 1e3), G());
  }
  window.addEventListener("scroll", Y, { capture: !0, passive: !0 }), window.addEventListener("resize", Y, { passive: !0 });
  const T = a.querySelector("#homeView .grid");
  let j = null, ve = null, Le = null, y = null;
  const we = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), k = 350;
  let E = null;
  const C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map();
  let V = { favourites: null }, oe = {}, ce = {}, me = [], ze = null;
  const tt = (() => {
    try {
      return JSON.parse(si.get(Pc)) || {};
    } catch {
      return {};
    }
  })();
  let wt = /* @__PURE__ */ new Map(), pn = 0;
  function An() {
    clearTimeout(pn), pn = setTimeout(() => Promise.resolve(H({ type: "frontend/set_user_data", key: Bc, value: V })).catch(() => {
    }), 400);
  }
  const Lt = (() => {
    let e = {};
    try {
      e = JSON.parse(si.get(Ic)) || {};
    } catch {
    }
    const n = (i, d) => Object.fromEntries(Object.entries(i || {}).filter(([, p]) => d.includes(p)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: ["cut", "wrap", "scroll"].includes(e.names) ? e.names : "auto",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(e.lightStyles, ["tile", "dac"]),
      lightPads: n(e.lightPads, ["temperature", "colour"])
    };
  })(), Ke = () => si.set(Ic, JSON.stringify(Lt)), Mt = () => {
    m.dataset.more = Lt.more, m.dataset.names = Lt.names, _i();
  };
  b && ae && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Lt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (Lt.more = n.dataset.moreStyle, Ke(), Mt(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + ef.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Lt.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (Lt.names = n.dataset.namesStyle, Ke(), Mt(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  })), ne();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const hn = /* @__PURE__ */ new Map();
  let kn = "";
  const Vi = b ? Xu({ onChange: () => rn() }) : null;
  b && m.classList.add("house");
  const st = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ye = null, ht = null, bo = !1;
  function zi(e) {
    const n = Ha();
    if (m.classList.toggle("houseBento", !!n), Ye && (ht !== n || e == null) && (Ye.destroy(), Ye = null), !n || e == null) {
      st.remove();
      return;
    }
    st.isConnected || T.append(st), st.style.order = e, !Ye && !bo && (Ye = kc(st, { getHass: o, entityId: n, style: "bitmap" }), ht = n);
  }
  const di = [["wx", ["current"]], ["avg", ["compared_to_average"]]], fn = Object.fromEntries(di.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let nt = null, Hn = null;
  function ji(e) {
    const n = Ha();
    nt && Hn !== n && (nt.forEach((i) => i.destroy()), nt = null), Object.values(fn).forEach((i) => n ? !i.isConnected && T.append(i) : i.remove()), n && !nt && !bo && (nt = di.map(([i, d]) => kc(fn[i], { getHass: o, entityId: n, style: "bitmap", cards: d, onOpen: i === "wx" ? () => so("weather") : void 0 })), Hn = n);
  }
  const ft = (e) => {
    var n;
    return ((n = x[e]) == null ? void 0 : n.attributes) || {};
  }, Ae = (e) => ft(e).friendly_name || e, lt = (e, n) => Oi(e) || (Number(ft(e).supported_features) & n) === n, vt = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ie = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), wo = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Oo = (e) => ft(e).supported_color_modes || [], Gi = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, Ne = (e, n) => [5, 3, 1].map((i) => {
    const d = (i + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), je = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Xt = (e) => {
    const n = 0.2126 * je(e[0]) + 0.7152 * je(e[1]) + 0.0722 * je(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  };
  function Ra(e) {
    const n = ft(e), i = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? Ne(...n.hs_color) : n.color_temp_kelvin ? Gi(n.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + (Xt(i) ? "#26221e" : "#ffffff");
  }
  const bn = (e) => {
    var n;
    return e.startsWith("light.") && ((n = x[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + Ra(e) + '"' : "";
  }, At = (e) => {
    const n = Oo(e);
    return n.length ? n.some((i) => i !== "onoff") : ft(e).brightness != null;
  }, Za = (e) => [ft(e).min_color_temp_kelvin || 2e3, ft(e).max_color_temp_kelvin || 6500], Rt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Na(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const i = Math.round(n / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(i / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const p = Math.round(d / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const Fn = (e) => {
    var n;
    return ft(e).current_position ?? (((n = x[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, ba = (e) => {
    var n;
    return Ia("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? Fn(e));
  }, Jt = (e) => {
    var n;
    return Ia("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? ft(e).current_tilt_position);
  };
  function Et(e) {
    var h;
    const n = x[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const i = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const g = i.color_temp_kelvin;
      return (At(e) ? wo(n) + "%" : "On") + (i.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : wd.includes(i.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : vt(i.hvac_action || n.state)) + " · " + Ie(i.current_temperature) + " °C now";
    if (d === "cover") {
      const g = Fn(e), M = i.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? vt(n.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : vt(i.action || "on") + " · " + i.current_humidity + "% now";
    if (d === "vacuum") return vt(n.state) + (n.state === "cleaning" && ((h = i.rooms) != null && h.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : vt(n.state);
    if (d === "alarm_control_panel") return Wc[n.state] || vt(n.state);
    if (d === "lock" || d === "valve") return vt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : vt(i.problem);
    if (d === "binary_sensor")
      return i.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : vl.includes(i.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Rt(i.rang);
    const p = o();
    if (p != null && p.formatEntityState && !Oi(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const w = Number(n.state);
    if (n.state !== "" && Number.isFinite(w)) {
      const g = Math.abs(w) >= 100 ? 0 : Math.abs(w) >= 10 ? 1 : 2, M = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return w.toLocaleString(void 0, { maximumFractionDigits: g }) + M + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return vt(n.state);
  }
  const Ba = (e) => e >= 1e3 ? Ie(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function ua(e) {
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((i) => {
      var w;
      const d = x[i.dataset.iconFor], p = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !p) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (i.textContent = "", h = document.createElement("ha-state-icon"), i.appendChild(h)), h.hass = n, h.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-icon") && (i.textContent = "", h = document.createElement("ha-icon"), i.appendChild(h)), h.icon = p || ((w = d == null ? void 0 : d.attributes) == null ? void 0 : w.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || Ae(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Ka = (e) => {
    var n, i, d;
    return e.startsWith("light.") && x[e] && !ft(e).icon && !((d = (i = (n = o()) == null ? void 0 : n.entities) == null ? void 0 : i[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Ut = (e, n, i) => (n = n || Ka(e), ' data-icon-for="' + re(e) + '"' + (n ? ' data-icon-name="' + re(n) + '"' : "") + (i ? ' data-letter="' + re(i) + '"' : "")), Kt = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : ft(e).rang ? "mdi:doorbell" : "", xt = (e, n, i, d) => re([e, n, i, d ? JSON.stringify(d) : ""].join("|")), $a = (e) => re(JSON.stringify(e));
  function Xa(e, n) {
    var p, w;
    const i = re(Ae(n) + ", " + Et(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = x[n]) == null ? void 0 : p.state)) && ((w = x[n]) == null ? void 0 : w.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + re(e + "|" + n) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Ut(n, Kt(n)) + '></div><div><div class="activityRowName">' + re(Ae(n)) + '</div><div class="activityRowMeta">' + re(Et(n)) + "</div></div></div>";
  }
  const xo = (e, n, i) => '<div class="activityRow" aria-label="' + re(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Ut("", i, e) + '></div><div><div class="activityRowName">' + re(e) + '</div><div class="activityRowMeta">' + re(n) + "</div></div></div>";
  function _(e) {
    var i;
    const n = ((i = x[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + xt("switch", "toggle", e) + '" aria-label="Turn ' + re(Ae(e)) + (n ? " off" : " on") + '"' + Ut(e) + '></button><div><div class="activityRowName">' + re(Ae(e)) + '</div><div class="activityRowMeta">' + re(Et(e)) + "</div></div></div>";
  }
  const A = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.name) ?? Ae(e);
  }, F = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.text) ?? Et(e);
  };
  function Z(e) {
    var i;
    const n = (i = Ce.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Ut("", n, A(e)) : Ut(e, Kt(e))) + '></div><div><div class="activityRowName">' + re(A(e)) + '</div><div class="activityRowMeta">' + re(F(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + re(A(e)) + '’s last 24 hours">' + gd + '</button></div><svg class="tfGraph" data-graph="' + re(e) + '" role="img" aria-label="' + re(A(e)) + ', last 24 hours"></svg></div>';
  }
  function pe(e, n, i, d, p = "", w = null, h = "") {
    const g = j && j.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (g ? " open" : "") + '" data-tf data-k="' + re(e) + '" style="order:' + n + (g && j.h ? ";min-height:" + j.h + "px" : "") + '" aria-label="' + re(i) + '"><div class="activityHeader">' + (w ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + re(w) + '" aria-label="' + re(i + ", " + Et(w) + ". More info") + '">' + re(i) + "</button>" : '<div class="activityTitle">' + re(i) + "</div>") + "</div>" + (g ? Z(j.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function ge(e, n) {
    const i = "readings:" + e.id, d = e.readings.map((p) => Xa(i, p));
    return e.power != null && d.push(xo("Power now", Ba(e.power), "mdi:flash")), pe(i, n, "Readings", d.concat(e.plugs.map(_)));
  }
  function he(e, n) {
    var g;
    const i = "energy:" + e.id, [d, p] = [e.solar.find((M) => M.endsWith("_power")), e.solar.find((M) => M.endsWith("_today"))], w = [d, p].filter(Boolean).map((M) => Xa(i, M)), h = Number(((g = x[d]) == null ? void 0 : g.state) || 0) * 1e3;
    return Je.grid && (w.push(Xa(i, Je.grid)), w.push(xo("House use", Ba(h + Number(x[Je.grid].state)), "mdi:home-lightning-bolt"))), pe(i, n, "Energy", w, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ye = (e, n) => pe("plant:" + e.id, n, Ae(e.id), e.readings.map((i) => Xa("plant:" + e.id, i)), "", e.id);
  function be(e, n, i, d, p, w, h = null) {
    const g = i == null ? null : Math.max(0, Math.min(1, i)), M = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + re(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (p ? ' aria-valuetext="' + re(p) + '"' : "") + ' data-drag="' + re(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (w ? g == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const Pe = "move-assistant-house-last-bright", He = (() => {
    try {
      return JSON.parse(si.get(Pe)) || {};
    } catch {
      return {};
    }
  })();
  let $e = 0;
  const Ve = (e, n) => {
    !n || He[e] === n || (He[e] = n, clearTimeout($e), $e = setTimeout(() => si.set(Pe, JSON.stringify(He)), 500));
  }, De = (e, n, i, d) => '<div class="tfStep" role="group" aria-label="' + re(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + re(e.toLowerCase()) + '">' + Ac.down + "</button><output>" + re(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + re(e.toLowerCase()) + '">' + Ac.up + "</button></div>", Ge = (e, n, i) => '<div class="' + e + '" role="group" aria-label="' + re(n) + '">' + i.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + re(d.aria) + '"' : "") + ">" + (d.html || re(d.label)) + "</button>").join("") + "</div>", Be = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), Qe = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", mt = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + re(Ae(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + re(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + Be(n, i) + '"></i><b' + (n >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Qe(n) + '">' + Math.round(n) + "%</output></div>";
  function Ht(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", Be(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", Qe(n)), i.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const Tt = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + re(Ae(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + re(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", tn = (e, n, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + re(Ae(e)) + '">' + [
    lt(e, Uh) && ["open", "Open", "open_cover", n >= 100 && !i],
    lt(e, Zh) && ["stop", "Stop", "stop_cover", !1],
    lt(e, Yh) && ["close", "Close", "close_cover", n <= 0 && !i]
  ].filter(Boolean).map(([d, p, w, h]) => '<button type="button" data-act="' + xt("cover", w, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + Kh[d] + "</button>").join("") + "</div>", _n = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + re(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + re(n.art) + '&quot;)"' : Ut(e, n.icon)) + "></button>", ta = (e) => '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(Ae(e) + ", " + Et(e) + ". More info") + '"><span class="activityRowName">' + re(Ae(e)) + '</span><span class="activityRowMeta">' + re(Et(e)) + "</span></button>";
  function On(e, n = !1, i = null) {
    if (e.startsWith("light.") && aa(e)) return '<div class="tfDac" data-k="' + re(e) + '" data-dac="' + (n ? "more:" : i ? "dash:" : "tile:") + re(e) + '"></div>';
    const d = Wo(e), p = i || (n && e.startsWith("light.") ? ["bright"] : null), w = d.sections.map((h, g) => h && (!p || p.includes((d.parts || [])[g])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + re(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + bn(e) + '><div class="tfActionHead">' + _n(e, d) + ta(e) + "</div>" + w.join("") + "</div>";
  }
  const na = "dual-controller-v3", wa = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let pa = null;
  async function ci() {
    if (pa || customElements.get(na)) return;
    pa = "loading";
    const e = await Promise.resolve().then(() => H({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(na), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(na)) return;
    const i = Object.assign(document.createElement("script"), { src: wa });
    i.onerror = () => {
      pa = "failed", U();
    }, document.head.appendChild(i);
  }
  const qn = /* @__PURE__ */ new Map(), gt = (e) => (Lt.lightStyles[e] || Lt.lights) === "dac", Mn = () => Lt.lights === "dac" || Object.values(Lt.lightStyles).includes("dac");
  function aa(e) {
    return gt(e) && !!customElements.get(na);
  }
  const yo = (e) => Lt.lightPads[e] || Lt.dacPad, Pa = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (n, i, d, ...p) => e.callService(n, ...jn(n, i, d), ...p)
    };
  }, qo = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Dt = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", mn = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Dt + (n ? qo : "") })).dataset.tf = "");
  }, wn = /* @__PURE__ */ new Map(), Ss = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const i = n.parentElement;
    !i || !n.offsetHeight || (i.style.removeProperty("min-height"), wn.set(i.dataset.dac, i.offsetHeight));
  }));
  function Ui(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const i = n.dataset.dac, d = i.startsWith("dash:");
      let p = qn.get(i);
      if (!p) {
        const w = i.slice(i.indexOf(":") + 1);
        p = document.createElement(na), p.setConfig({ type: "custom:" + na, entity: w, pad: yo(w), ...d ? { tap_action: { action: "none" } } : {} }), qn.set(i, p);
      }
      p.hass = Pa(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && wn.has(i) && (n.style.minHeight = wn.get(i) + "px"), Ss.observe(p), mn(p, d);
    });
  }
  function Cs() {
    const e = Pa();
    qn.forEach((n, i) => {
      n.isConnected ? n.hass = e : qn.delete(i);
    });
  }
  customElements.whenDefined(na).then(() => {
    b && (T != null && T.querySelector("[data-tf]")) && Ro(co);
  });
  const Ia = (e, n, i) => qe.has(e + "|" + n) ? qe.get(e + "|" + n) : i;
  function Wo(e) {
    var w;
    const n = x[e], i = n.attributes, d = e.split(".")[0], p = (h, g) => ({ act: xt(h, "toggle", e), label: g });
    if (d === "light") {
      const h = n.state === "on", g = Oo(e), [M, D] = Za(e), P = Ia("bright", e, wo(n));
      h && Ve(e, wo(n));
      const N = Ia("ct", e, h && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), $ = Ia("hue", e, h && wd.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + Ae(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        At(e) && be("bright", e, P / 100, Ae(e) + " brightness", P + "%", !1, h ? null : He[e] ?? null),
        g.includes("color_temp") && be("ct", e, N == null ? null : (N - M) / (D - M), Ae(e) + " warm to cool", N == null ? "" : Math.round(N) + " kelvin", !0),
        g.some((fe) => wd.includes(fe)) && be("hue", e, $ == null ? null : $ / 360, Ae(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = i.target_temp_step || 0.5, g = Number(i.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Ae(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && De("Target temperature", Ie(g) + " °C", xt("climate", "set_temperature", e, { temperature: g - h }), xt("climate", "set_temperature", e, { temperature: g + h })),
        Ge("tfSeg", "Mode", (i.hvac_modes || []).map((M) => ({ label: vt(M), act: xt("climate", "set_hvac_mode", e, { hvac_mode: M }), pressed: n.state === M })))
      ] };
    }
    if (d === "cover") {
      const h = n.state === "opening" || n.state === "closing", g = n.state === "closed", M = ba(e), D = Jt(e);
      return { on: !g, tone: "blue", icon: $h[md(n)][g ? 1 : 0], button: p("cover", (g ? "Open " : "Close ") + Ae(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        lt(e, Nc) && mt(e, M),
        D != null && Tt(e, D),
        tn(e, M, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(i.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Ae(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && De("Target humidity", h + "%", xt("humidifier", "set_humidity", e, { humidity: h - 1 }), xt("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((w = i.available_modes) == null ? void 0 : w.length) && Ge("tfSeg", "Mode", i.available_modes.map((g) => ({ label: vt(g), act: xt("humidifier", "set_mode", e, { mode: g }), pressed: i.mode === g })))
      ] };
    }
    if (d === "media_player") {
      const h = n.state === "playing", g = n.state === "off" || n.state === "standby", M = Ia("vol", e, i.volume_level), D = g ? { act: xt("media_player", lt(e, jh) ? "turn_on" : "toggle", e), label: "Turn " + Ae(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: xt("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + Ae(e) } : { act: xt("media_player", lt(e, Gh) ? "turn_off" : "toggle", e), label: "Turn " + Ae(e) + " off" };
      return { on: !g, tone: "blue", art: !g && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: g ? [] : [
        (lt(e, Ec) || lt(e, Dc) || lt(e, _c) || lt(e, Rc)) && Ge("tfSeg", "Playback", [
          { html: gl.prev, aria: "Previous", act: xt("media_player", "media_previous_track", e), disabled: !lt(e, Ec) },
          { html: h ? gl.pause : gl.play, aria: h ? "Pause" : "Play", act: xt("media_player", "media_play_pause", e), disabled: !(lt(e, _c) || lt(e, Rc)) },
          { html: gl.next, aria: "Next", act: xt("media_player", "media_next_track", e), disabled: !lt(e, Dc) }
        ]),
        lt(e, zh) && M != null && be("vol", e, M, Ae(e) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = n.state === "cleaning", g = i.rooms || [], M = (P) => g.includes(P) ? g.filter((N) => N !== P) : g.concat(P), D = xt("vacuum", h ? "pause" : "start", e, Oi(e) ? { rooms: g } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: D, label: (h ? "Pause " : "Start ") + Ae(e) }, parts: ["controls", "rooms"], sections: [
        Ge("tfSeg", Ae(e), [
          { label: h ? "Pause" : "Start", act: D },
          { label: "Dock", act: xt("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: xt("vacuum", "locate", e) }
        ]),
        Oi(e) && Ge("tfChips", "Rooms to clean", Je.rooms.filter((P) => P.id !== "balcony").map((P) => ({ label: P.name, act: xt("vacuum", "set_rooms", e, { rooms: M(P.name) }), pressed: g.includes(P.name) })))
      ] };
    }
    if (d === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: xt("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + Ae(e) }, parts: ["controls"], sections: [
        Ge("tfSeg", Ae(e), [
          { label: "Lock", act: xt("lock", "lock", e), pressed: h },
          { label: "Unlock", act: xt("lock", "unlock", e), pressed: n.state === "unlocked" },
          lt(e, rf) && { label: "Open", act: xt("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: xt("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + Ae(e) + ", away" : "Disarm " + Ae(e) }, parts: ["controls"], sections: [
        Ge("tfSeg", Ae(e), sf.filter(([, , , g]) => !g || lt(e, g)).map(([g, M, D]) => ({ label: M, act: xt("alarm_control_panel", D, e), pressed: n.state === g })))
      ] };
    }
    if (d === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + Ae(e)), parts: ["controls"], sections: [
        Ge("tfSeg", Ae(e), [
          { label: "Open", act: xt("valve", "open_valve", e), pressed: h },
          { label: "Close", act: xt("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Ae(e) }, sections: [] };
  }
  const ui = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ie(e)) + "°";
  function Yi(e) {
    const n = (J) => e.readings.find((B) => ft(B).device_class === J), i = n("temperature"), d = n("humidity"), p = (J) => {
      var B;
      return Number((B = x[J]) == null ? void 0 : B.state);
    }, w = (J) => e.actions.filter((B) => J.test(B)), h = e.lights.filter((J) => {
      var B;
      return ((B = x[J]) == null ? void 0 : B.state) === "on";
    }), g = w(/^cover\./), M = g.filter((J) => {
      var B;
      return ((B = x[J]) == null ? void 0 : B.state) !== "closed";
    }), D = [...new Set(g.map((J) => md(x[J])))], P = w(/^climate\./)[0], N = w(/^humidifier\./)[0], $ = w(/^media_player\./), fe = $.find((J) => {
      var B;
      return ((B = x[J]) == null ? void 0 : B.state) === "playing";
    }) || $.find((J) => {
      var B;
      return ((B = x[J]) == null ? void 0 : B.state) === "paused";
    }), Re = e.plugs.filter((J) => {
      var B;
      return ((B = x[J]) == null ? void 0 : B.state) === "on";
    }), le = [];
    if (i && Number.isFinite(p(i)) && le.push({ key: "temp", id: i, kind: "reading", icon: mo.temp, label: "Temperature", value: Ie(p(i)) + "°" }), d && Number.isFinite(p(d)) && le.push({ key: "hum", id: d, kind: "reading", icon: mo.hum, label: "Humidity", value: Math.round(p(d)) + "%" }), e.lights.length && le.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: mo.lights,
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? Ra(h[0]) : "",
      acts: e.lights.map((J) => ["light", h.length ? "turn_off" : "turn_on", J]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), g.length) {
      const J = D.length === 1 ? Xh[D[0]] : "covers", B = Math.round(g.reduce((ke, Fe) => ke + Fn(Fe), 0) / g.length);
      le.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: mo.covers,
        label: vt(J),
        value: B <= 0 ? "Closed" : B >= 100 ? "Open" : B + "% open",
        short: B <= 0 ? "Closed" : B + "%",
        on: M.length > 0,
        acts: g.map((ke) => ["cover", M.length ? "close_cover" : "open_cover", ke]),
        aria: (M.length ? "Close the " : "Open the ") + J + " in " + e.name
      });
    }
    if (P) {
      const J = ft(P), B = x[P].state === "off";
      le.push({
        key: "climate",
        kind: "control",
        tone: J.hvac_action === "cooling" ? "cool" : "heat",
        icon: mo.climate,
        label: Ae(P),
        value: B ? "Off" : vt(J.hvac_action || x[P].state) + " · " + ui(J.temperature),
        short: B ? "Off" : ui(J.temperature),
        on: !B,
        acts: [["climate", "toggle", P]],
        aria: "Turn " + Ae(P) + (B ? " on" : " off")
      });
    }
    if (N) {
      const J = x[N].state === "on";
      le.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: mo.humidifier,
        label: Ae(N),
        value: J ? "On · " + ft(N).humidity + "%" : "Off",
        short: J ? ft(N).humidity + "%" : "Off",
        on: J,
        acts: [["humidifier", "toggle", N]],
        aria: "Turn " + Ae(N) + (J ? " off" : " on")
      });
    }
    if ($.length) {
      const J = fe || $[0], B = x[J], ke = B.state === "playing";
      le.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: mo.media,
        label: Ae(J),
        value: Et(J),
        short: ke ? "Playing" : B.state === "paused" ? "Paused" : vt(B.state),
        on: ke,
        acts: [["media_player", B.state === "playing" || B.state === "paused" ? "media_play_pause" : "toggle", J]],
        aria: (ke ? "Pause " : "Play ") + Ae(J)
      });
    }
    return e.plugs.length && le.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: mo.plugs,
      label: "Plugs",
      value: Re.length ? Re.length + " of " + e.plugs.length + " on" : "All off",
      short: Re.length ? Re.length + " on" : "Off",
      on: Re.length > 0,
      acts: e.plugs.map((J) => ["switch", Re.length ? "turn_off" : "turn_on", J]),
      aria: (Re.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((J) => le.push(ft(J).device_class === "moisture" ? { key: "alert:" + J, kind: "alert", icon: mo.alert, label: "Water leak" } : { key: "note:" + J, kind: "note", icon: mo.door, label: Ae(J) + " " + Et(J).toLowerCase() })), le;
  }
  const Wr = (e, n) => {
    const i = (d) => e.actions.filter((p) => d.test(p));
    return {
      lights: e.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const d = i(/^media_player\./);
        return [d.find((p) => {
          var w;
          return ((w = x[p]) == null ? void 0 : w.state) === "playing";
        }) || d.find((p) => {
          var w;
          return ((w = x[p]) == null ? void 0 : w.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Vr = (e, n, i) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + $a(e.acts) + '" aria-label="' + re(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", Al = (e) => '<button class="tfAName" type="button" data-go="' + re(e.id) + '" aria-label="Open ' + re(e.name) + '">' + re(e.name) + "</button>";
  function Ts(e, n, i = !1) {
    const d = n.find((g) => g.key === "lights"), p = !!(d != null && d.on), w = p && d.light ? ' data-light style="' + d.light + '"' : "", h = '<span class="tfAreaGlyph"' + Ut("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + w + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + w + ' data-acts="' + $a(d.acts) + '" aria-label="' + re(d.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const Ls = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + re(n.label) + "</span>").join(" "), Zi = (e) => e.readings.find((n) => ft(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => x[n]) || null, As = (e, n) => {
    const i = Ae(n);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? vt(i.slice(e.name.length + 1)) : i;
  };
  function zr(e) {
    const n = x[e], i = ft(e), d = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (i.device_class === "temperature") return { text: ui(p) };
      const w = i.unit_of_measurement || "";
      return w === "%" ? { text: Math.round(p) + "%" } : { text: Ie(p, Number.isInteger(p) ? 0 : 1), unit: w };
    }
    if (d === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: ui(i.current_temperature ?? i.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : At(e) ? wo(n) + "%" : "On" };
    if (d === "cover") {
      const w = Fn(e);
      return { text: w <= 0 ? "Closed" : w >= 100 ? "Open" : w + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? i.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : vt(n.state) } : { text: Et(e) };
  }
  const ko = (e, n, i) => {
    const d = i.find((g) => g.key === "temp"), p = i.find((g) => g.key === "hum"), w = ft(n), h = x[n].state === "off";
    return n.startsWith("climate.") ? [As(e, n), h ? "Off" : vt(w.hvac_action || x[n].state) + (w.temperature != null ? " · " + ui(w.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && As(e, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function _s(e, n, i) {
    const d = i && zr(i), p = i ? ko(e, i, n) : "", w = (g) => {
      const M = Wr(e, g.key);
      return M.length === 1 ? M[0] : "group:" + e.id + ":" + g.key;
    }, h = n.filter((g) => g.kind === "control").slice(0, 4).map((g) => '<div class="tfATile' + (g.on ? " on" : "") + '" data-tone="' + g.tone + '"' + (g.light ? ' data-light style="' + g.light + '"' : "") + ">" + Vr(g, "tfIcon", g.icon) + '<button class="tfName" type="button" data-more="' + re(w(g)) + '" aria-label="' + re(e.name + " " + g.label.toLowerCase() + ", " + g.value + ". Open") + '"><span class="activityRowName">' + re(g.label) + '</span><span class="activityRowMeta">' + re(g.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Ts(e, n) + '<div class="tfATitle">' + Al(e) + Ls(n) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + re(i) + '" aria-label="' + re(Ae(i) + ", " + Et(i) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + re(d.text) + (d.unit ? '<span class="tfABigUnit">' + re(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + re(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function jr(e) {
    const n = e.id === ve, i = Yi(e), d = Zi(e), p = d && zr(d), w = [...i.filter((h) => h.kind === "control"), ...i.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + re(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + re(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + _s(e, i, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Ts(e, i, !0) + '<span class="tfACName">' + re(e.name) + '</span></div><span class="tfACMain">' + (p ? re(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + w.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let xa = [];
  const Gr = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + xa.map(jr).join("") + "</section></div>", _l = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Mo = (e, n, i) => e + " " + (e === 1 ? n : i), En = () => (V.favourites ?? oe.favorite_entities ?? []).filter((e) => x[e]);
  function Ft() {
    if (!ze) {
      const n = Object.entries(tt).sort((d, p) => p[1] - d[1]).map(([d]) => d), i = Je.rooms.flatMap((d) => d.actions);
      ze = [.../* @__PURE__ */ new Set([...me, ...n, ...i.filter((d) => Wo(d).on), ...i])];
    }
    const e = En();
    return ze.filter((n) => x[n] && x[n].state !== "unavailable" && !e.includes(n));
  }
  let Es = !1;
  function Ds() {
    if (!Es || V.favSeeded || !Je.rooms.length) return;
    const e = (i) => Object.keys(x).find((d) => Oi(d) && i(d)), n = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), Je.security.locks[0]];
    V = { ...V, favourites: [.../* @__PURE__ */ new Set([...V.favourites ?? oe.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, An();
  }
  const pi = () => V.suggest ?? !oe.hide_suggested_entities;
  function Vo() {
    const e = new Set(V.favHidden || []), n = En().filter((d) => !e.has(d)), i = pi() ? Ft().filter((d) => !e.has(d) && Kr(d)) : [];
    return [...n, ...i].slice(0, df);
  }
  const El = (e) => {
    const n = En().includes(e);
    return '<button class="tfStar" type="button" data-star="' + re(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + re(Ae(e)) + '">' + of(n) + "</button>";
  };
  function Ot(e, { area: n = !1, star: i = !1, plain: d = !1, say: p = null, alert: w = !1 } = {}) {
    var Re, le, J, B, ke, Fe;
    const h = d && ((ke = (Re = o()) == null ? void 0 : Re.devices) == null ? void 0 : ke[(B = (J = (le = o()) == null ? void 0 : le.entities) == null ? void 0 : J[e]) == null ? void 0 : B.device_id]), g = h && (h.name_by_user || h.name) || Ae(e), M = e.split(".")[0], D = !d && bl.includes(M) ? Wo(e) : null, P = D ? D.on : ["on", "open", "playing"].includes((Fe = x[e]) == null ? void 0 : Fe.state), N = d ? null : D ? D.button : Jh.includes(M) ? { act: xt(M, "toggle", e), label: "Turn " + Ae(e) + (P ? " off" : " on") } : M === "scene" || M === "script" ? { act: xt(M, "turn_on", e), label: "Run " + Ae(e) } : null, $ = (p ?? Et(e)) + (n && wt.get(e) ? " · " + wt.get(e) : ""), fe = (D == null ? void 0 : D.icon) || Kt(e);
    return '<div class="activityRow' + (N ? " tfPlug" : "") + (P ? " on" : "") + (i ? " tfPick" : "") + (w ? " alert" : "") + '" data-k="' + re((n ? "fav:" : "row:") + e) + '" data-tone="' + (M === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + bn(e) + ">" + (N && !i ? '<button class="tfIcon" type="button" data-act="' + N.act + '" aria-label="' + re(N.label) + '"' + Ut(e, fe) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ut(e, fe) + "></div>") + '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(g + ", " + $ + ". More info") + '"><span class="activityRowName">' + re(g) + '</span><span class="activityRowMeta">' + re($) + "</span></button>" + (i ? El(e) : "") + "</div>";
  }
  const Ha = () => {
    var e;
    return x[(e = V.sources) == null ? void 0 : e.weather] ? V.sources.weather : x["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(x).find((n) => n.startsWith("weather."));
  };
  function zo() {
    var i;
    const e = (d) => Object.keys(x).filter((p) => p.startsWith("binary_sensor.") && d.includes(ft(p).device_class));
    return ((i = ce.alert_entities) != null && i.length ? ce.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(vl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => x[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(x[d.entity].state) }));
  }
  function Dl() {
    const e = Object.keys(vd), n = /* @__PURE__ */ new Set(), i = [];
    return (oe.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      i.push(d);
    }), e.forEach((d) => {
      n.has(d) || i.push({ type: "summary", key: d });
    }), i;
  }
  function Ki() {
    var J;
    const e = ((J = o()) == null ? void 0 : J.entities) || {}, n = (B) => ft(B).device_class, i = Object.keys(x).filter((B) => B.startsWith("sensor.") && n(B) === "battery" || B.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(B))), d = Je.rooms.flatMap((B) => B.plants.map((ke) => ke.id));
    if (!i.length && !d.length) return null;
    const p = (B) => {
      var Fe;
      const ke = (Fe = e[B]) == null ? void 0 : Fe.device_id;
      return !!ke && Object.keys(x).some((dt) => {
        var en;
        return dt.startsWith("binary_sensor.") && ((en = e[dt]) == null ? void 0 : en.device_id) === ke && n(dt) === "battery_charging" && x[dt].state === "on";
      });
    }, w = (B) => B.startsWith("vacuum.") ? ft(B).battery_level <= 20 && x[B].state !== "docked" : B.startsWith("binary_sensor.") ? n(B) === "battery" && x[B].state === "on" : parseFloat(x[B].state) <= 20 && !p(B), h = [...i, ...Je.vacuums].filter((B) => x[B] && w(B)), g = [...i.filter((B) => n(B) === "problem" && x[B].state === "on"), ...d.filter((B) => {
      var ke;
      return ((ke = x[B]) == null ? void 0 : ke.state) === "problem";
    })], M = i.filter((B) => x[B].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...h, ...g, ...M])], P = (B) => {
      const ke = parseFloat(x[B].state);
      return n(B) === "battery" && Number.isFinite(ke) ? ke : 101;
    }, N = [...d, ...Je.vacuums, ...[...i].sort((B, ke) => P(B) - P(ke))].filter((B) => x[B] && !D.includes(B)), $ = /* @__PURE__ */ new Map();
    N.forEach((B) => {
      var Fe;
      const ke = ((Fe = Je.areaOf) == null ? void 0 : Fe.call(Je, B)) || "";
      $.set(ke, [...$.get(ke) || [], B]);
    });
    const fe = (B) => {
      const ke = Je.rooms.findIndex((Fe) => Fe.id === B);
      return B === "" ? 1 / 0 : ke < 0 ? Je.rooms.length : ke;
    }, Re = [...$.keys()].sort((B, ke) => fe(B) - fe(ke)), le = (B) => {
      var ke, Fe, dt, en;
      return ((ke = Je.rooms.find((Wt) => Wt.id === B)) == null ? void 0 : ke.name) || ((en = (dt = (Fe = o()) == null ? void 0 : Fe.areas) == null ? void 0 : dt[B]) == null ? void 0 : en.name) || B;
    };
    return {
      value: [h.length && Mo(h.length, "low battery", "low batteries"), g.length && Mo(g.length, "problem", "problems"), M.length && Mo(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Re.map((B) => ({ name: B ? le(B) : Re.length > 1 ? "Other devices" : "Devices", ids: $.get(B) }))].filter((B) => B.ids.length)
    };
  }
  function hi() {
    var jt;
    const e = Je.rooms, n = Je.security, i = (We, qt) => We.actions.filter((ma) => qt.test(ma)), d = (We) => e.map((qt) => ({ name: qt.name, ids: We(qt) })).filter((qt) => qt.ids.length), p = e.flatMap((We) => We.lights), w = p.filter((We) => {
      var qt;
      return ((qt = x[We]) == null ? void 0 : qt.state) === "on";
    }).length, h = e.map((We) => We.readings.find((qt) => ft(qt).device_class === "temperature")).filter(Boolean).map((We) => Number(x[We].state)).filter(Number.isFinite), [g, M] = [Ie(Math.min(...h)), Ie(Math.max(...h))], D = e.flatMap((We) => i(We, /^media_player\./)), P = D.filter((We) => {
      var qt;
      return ((qt = x[We]) == null ? void 0 : qt.state) === "playing";
    }).length, N = zo(), $ = N.filter((We) => We.severity === "warning" && We.on).length, fe = n.locks.filter((We) => {
      var qt;
      return ["unlocked", "jammed", "open"].includes((qt = x[We]) == null ? void 0 : qt.state);
    }).length, Re = n.alarms.filter((We) => {
      var qt;
      return ((qt = x[We]) == null ? void 0 : qt.state) === "disarmed";
    }).length, le = $ ? Mo($, "warning", "warnings") : null, J = fe ? fe + " unlocked" : Re ? Re + " disarmed" : le ? null : "All secure", B = Ki(), ke = e.flatMap((We) => We.solar), Fe = ke.find((We) => We.endsWith("_power")), dt = {
      light: p.length && { value: w ? w + " on" : "All off", groups: d((We) => We.lights) },
      climate: h.length && { value: g === M ? g + "°" : g + " - " + M + "°", groups: d((We) => [...We.readings.filter((qt) => ["temperature", "humidity"].includes(ft(qt).device_class)), ...i(We, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [le, J].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((We) => We.ids.length) },
      media_players: D.length && { value: P ? P + " playing" : "No media playing", groups: d((We) => i(We, /^media_player\./)) },
      maintenance: B,
      energy: Je.grid && { value: Ba(Number(((jt = x[Fe]) == null ? void 0 : jt.state) || 0) * 1e3 + Number(x[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ke, Je.grid] }] }
    }, en = [], Wt = N.filter((We) => We.severity !== "warning" && We.on);
    return Wt.length && en.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Mo(Wt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Wt.map((We) => We.entity) }] }), Dl().forEach((We) => {
      We.type !== "summary" ? en.push({ key: "path:" + We.path, name: We.label || We.path, icon: We.icon || "mdi:link-variant", colour: "", value: "" }) : !We.hidden && dt[We.key] && !(V.hiddenSums || []).includes(We.key) && en.push({ key: We.key, ...vd[We.key], ...dt[We.key] });
    }), en;
  }
  const $i = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + re(e.key) + '" data-k="sum:' + re(e.key) + '" aria-label="' + re(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Ut(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + re(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + re(e.value) + "</div>" : "") + "</div></div>";
  function Fa(e) {
    const n = En();
    V = { ...V, favourites: n.includes(e) ? n.filter((i) => i !== e) : [...n, e], favHidden: (V.favHidden || []).filter((i) => i !== e) }, An(), rn();
  }
  function Ja(e) {
    document.querySelector("home-assistant") && (we.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Rs(e, n) {
    if (e.startsWith("path:")) {
      Ja(e.slice(5));
      return;
    }
    Mr("summary:" + e, n);
  }
  async function Qa() {
    const e = (h) => Promise.resolve().then(() => H(h)).catch(() => null), [n, i, d, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Bc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), w = (n == null ? void 0 : n.value) || {};
    V = { favourites: w.favourites ?? null, sources: w.sources, hiddenSums: w.hiddenSums, dash: w.dash, named: w.named, favHidden: w.favHidden, suggest: w.suggest, favSeeded: w.favSeeded }, oe = (i == null ? void 0 : i.value) || {}, ce = (d == null ? void 0 : d.value) || {}, me = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], ze = null, Object.keys(x).length && rn(), ya(), Es = !0, Ds();
  }
  const Ur = "HomeCore";
  async function ya() {
    var d, p, w;
    const e = location.pathname.split("/")[1], n = V.named || [];
    if (!((p = (d = o()) == null ? void 0 : d.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const i = () => {
      V = { ...V, named: [...n, e] }, An();
    };
    try {
      const h = (w = await H({ type: "lovelace/dashboards/list" })) == null ? void 0 : w.find((D) => D.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === Ur) {
        i();
        return;
      }
      const g = await H({ type: "lovelace/config", url_path: e }), M = ((g == null ? void 0 : g.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((P) => P.cards || [])]);
      if (!M.length || !M.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await H({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Ur }), i();
    } catch {
    }
  }
  let jo = null, Yr = 0, fi = !1;
  const Xi = (e) => {
    const n = e.split(".")[0], i = ft(e).device_class;
    return lf.includes(n) && (n !== "binary_sensor" || vl.includes(i) || !!Vc[i]);
  }, Ji = (e) => e.startsWith("binary_sensor.") ? Vc[ft(e).device_class] : null;
  async function Rl() {
    var e;
    if (!(fi || Date.now() - Yr < 30 * 1e3)) {
      fi = !0, Yr = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(Xi), i = n.length ? await H({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        jo = Array.isArray(i) ? i.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        jo = null;
      }
      fi = !1, rn();
    }
  }
  function Qi() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = (p) => {
      if (!x[p.entity_id] || !Xi(p.entity_id) || !Kr(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (Ji(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const w = e.get(p.entity_id);
      (!w || p.when > w.when + 1) && e.set(p.entity_id, p);
    };
    [...jo || []].sort((p, w) => p.when - w.when).forEach(i);
    const d = jo ? Yr / 1e3 - 5 : 0;
    return Object.keys(x).forEach((p) => {
      var g;
      const w = x[p], h = w.last_changed ? Date.parse(w.last_changed) / 1e3 : 0;
      h > d && i({ entity_id: p, state: w.state, when: h, context_user_id: (g = w.context) == null ? void 0 : g.user_id });
    }), [...e.values(), ...n.values()].sort((p, w) => w.when - p.when).slice(0, cf);
  }
  function Ns(e) {
    var d;
    const n = e.context_user_id && Object.keys(x).find((p) => p.startsWith("person.") && ft(p).user_id === e.context_user_id);
    if (n) return Ae(n);
    const i = (d = o()) == null ? void 0 : d.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function mi(e) {
    const n = e.entity_id.split(".")[0], i = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || vt(i).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || vt(i).toLowerCase() : n === "binary_sensor" ? i === "on" ? "opened" : "closed" : n === "climate" ? i === "off" ? "turned off" : "set to " + vt(i).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || vt(i).toLowerCase() : n === "alarm_control_panel" ? (Wc[i] || vt(i)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || vt(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : vt(i).toLowerCase();
  }
  function Nl(e) {
    const n = e.entity_id, i = e.alarm && Ji(n), d = Ae(n) + " " + (i ? i[0] : mi(e)), p = i ? Rt(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + Rt(e.cleared * 1e3) : "") : [Ns(e), Rt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Ut(n, Kt(n)) + '></div><button class="tfName" type="button" data-more="' + re(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + re(d + ", " + p + ". More info") + '"><span class="activityRowName">' + re(d) + '</span><span class="activityRowMeta">' + re(p) + "</span></button></div>";
  }
  let Oa = null, eo = 0;
  const Zr = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function er() {
    var n;
    if (Date.now() - eo < 5 * 60 * 1e3) return;
    eo = Date.now();
    const e = [];
    try {
      const i = ((n = await H({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => i.filter((w) => w.type === p).flatMap((w) => p === "grid" ? (w.flow_from || []).map((h) => h.stat_energy_from) : [w.stat_energy_from]).filter(Boolean);
      for (const [p, w, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const g = await Promise.all(h.map((M) => Promise.resolve(H({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: p, name: w, id: h[0], ids: h, value: g.reduce((M, D) => M + D, 0), unit: ft(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Oa = e, rn();
  }
  let ka = null, gi = [];
  function Go() {
    var w;
    const e = gi = Oa != null && Oa.length ? Oa : Zr.map(([h, g, M, D]) => {
      const P = "sensor.made_up_energy_" + h;
      return x[P] = { entity_id: P, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: h, name: g, id: P, value: M, unit: D };
    });
    Ce.clear(), e.some((h) => h.id === ka) || (ka = e[0].id);
    const n = e.map((h) => {
      const g = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, M = uf[h.key], D = h.id === ka;
      return Ce.set(h.id, { name: h.name, text: g, icon: M }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + re(h.id) + '" aria-pressed="' + D + '" aria-label="' + re(h.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ut("", M, h.name) + '></div><div><div class="activityRowName">' + re(h.name) + '</div><div class="activityRowMeta">' + re(g) + "</div></div></div>";
    }), i = e.find((h) => h.id === ka), d = (((w = Nt().opts.energy) == null ? void 0 : w.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + re(i.id) + '" role="img" aria-label="' + re(i.name) + ', last 24 hours"></svg></div>';
    return pe("dash:energy", 0, "Energy today", n, p, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function tr(e) {
    const n = T.querySelector(".tfDash-energy"), i = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !i || e === ka || (ka = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === e;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), i.dataset.graph = e, i.dataset.drawn = "", hn.set("dash:energy", Go()), ds(!0));
  }
  const ha = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, So = /* @__PURE__ */ new Map();
  async function Bl(e) {
    const n = /* @__PURE__ */ new Date(), i = new Date(n).setHours(0, 0, 0, 0), d = n.getHours(), p = n.getMinutes() / 60, w = Array.from({ length: 24 }, (g, M) => M <= d ? 0 : null);
    if (!e.ids) {
      const g = ha[e.key] || ha.electricity, M = g.map((P, N) => N < d ? P : N === d ? P * p : 0), D = M.reduce((P, N) => P + N, 0) || 1;
      return w.map((P, N) => P == null ? null : e.value * M[N] / D);
    }
    const h = So.get(e.id);
    if (h && h.day === i && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const g = await H({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((P) => ((g == null ? void 0 : g[P]) || []).forEach((N) => {
        const $ = typeof N.start == "number" ? N.start : Date.parse(N.start), fe = new Date($).getHours();
        $ >= i && fe < d && (w[fe] += Number(N.change) || 0);
      }));
      const M = new Date(n).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((P) => Promise.resolve(H({ type: "recorder/statistic_during_period", statistic_id: P, fixed_period: { start_time: new Date(M).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((N) => Number(N == null ? void 0 : N.change) || 0, () => 0)));
      w[d] = D.reduce((P, N) => P + N, 0);
    } catch {
    }
    return So.set(e.id, { at: Date.now(), day: i, hours: w }), w;
  }
  async function Pl(e, n) {
    const i = await Bl(n);
    if (!e.isConnected) return;
    const d = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), w = 18, h = p - 18, g = d / 24, M = g * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), P = i.map((J) => J ?? 0), N = Math.max(0, ...P), $ = (J) => h - (N > 0 ? J / N * (h - w) : 0), fe = (J) => J.toLocaleString(void 0, { maximumFractionDigits: J < 10 ? 2 : 1 }) + " " + n.unit, Re = (J) => String(J).padStart(2, "0") + ":00", le = N > 0 ? P.indexOf(N) : -1;
    e.setAttribute("viewBox", "0 0 " + d + " " + p), e.setAttribute("aria-label", n.name + " today by the hour: " + fe(n.value) + (le >= 0 ? ", most " + fe(N) + " at " + Re(le) : "")), e.innerHTML = [w, (w + h) / 2, h].map((J) => '<line x1="0" x2="' + d + '" y1="' + J + '" y2="' + J + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((J, B) => J > 0 ? '<rect x="' + (B * g + (g - M) / 2).toFixed(1) + '" y="' + $(J).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (h - $(J)).toFixed(1) + '" rx="2" fill="' + (B === D ? "var(--primary)" : "var(--text)") + '"' + (B === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((J) => '<text x="' + (J * g).toFixed(1) + '" y="' + (p - 3) + '">' + String(J).padStart(2, "0") + "</text>").join("") + (le >= 0 ? '<text x="0" y="11">Most: ' + re(fe(N)) + " at " + Re(le) + "</text>" : "");
  }
  function Uo(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, d) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function vi(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const d = i.getTotalLength();
    i.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Co = null, nr = 0;
  const Kr = (e) => !e.startsWith("light.") || pf.includes((wt.get(e) || "").toLowerCase()), ar = () => Math.max(2, oa((T == null ? void 0 : T.clientWidth) || 0).n), $r = (e) => {
    const n = Wo(e), i = n.sections.findIndex(Boolean);
    return i < 0 ? [] : [n.parts[i]];
  };
  function or(e) {
    const n = Nt().tiles;
    if (n) return n.filter((d) => x[d]);
    if (!Co) {
      const d = (p) => {
        var w;
        return (((w = x[p]) == null ? void 0 : w.state) === "on" ? 1e6 : 0) + (tt[p] || 0);
      };
      Co = {
        lights: Je.rooms.flatMap((p) => p.lights).filter((p) => {
          var w;
          return Kr(p) && ((w = x[p]) == null ? void 0 : w.state) !== "unavailable";
        }).sort((p, w) => d(w) - d(p) || Ae(p).localeCompare(Ae(w))),
        climates: Je.rooms.flatMap((p) => p.actions.filter((w) => w.startsWith("climate.")))
      };
    }
    const i = Co.climates.filter((d) => x[d]).slice(0, e > 3 ? 2 : 1);
    return [...Co.lights.filter((d) => x[d]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const Xr = (e, n, i, d) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + i + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + i + "</div></div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Il(e, n) {
    var w, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + re(((h = (w = o()) == null ? void 0 : w.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Xr("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: n.map((g) => ({ key: "sum:" + g.key, html: $i(g) })) }), xa.length && e.push({ key: "areas", html: Gr(0) });
    const i = Vo();
    i.length && e.push({ key: "favs", wrap: Xr("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((g) => ({ key: "fav:" + g, html: Ot(g, { area: !0 }) })) });
    const d = Qi();
    e.push({ key: "dash:act", html: pe("dash:act", 0, "Activity", d.length ? d.map(Nl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Go() });
    const p = ar();
    return nr = p, or(p >= 3 ? p : p * 2).forEach((g) => e.push({
      key: "dash:tile:" + g,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + re(g) + '">' + M + "</div>",
      tiles: [{ key: g, html: On(g, !1, $r(g)) }]
    })), Rl(), er(), e;
  }
  const on = 252, zt = 16, Yo = 200, Hl = Math.round(on * 1.25), bi = 60, To = bi + zt, Zo = 5, ir = 3, Bs = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, wi = ["wx", "favs", "act", "energy", "avg"], Jr = { wx: Zo, areas: Zo, favs: Zo, act: Zo, energy: 4, avg: 4 }, qa = 3, xi = 94, Ko = (e) => {
    var n;
    return !!((n = Nt().opts[e]) != null && n.tall);
  }, Ma = (e) => Bs[e] || Ae(e), Qr = 409, Ps = 128;
  let Sn = !1, yt = null, Sa = null, rr = !1, Ca = /* @__PURE__ */ new Map(), to = 0, Wn = 0;
  const Dn = ["title", "sums"], oa = (e) => {
    const n = Math.max(1, Math.floor((e + zt) / (Yo + zt)));
    return { n, w: Math.max(1, Math.min(Hl, Math.floor((e - (n - 1) * zt) / n))) };
  }, Nt = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} });
  function no(e) {
    V = { ...V, dash: e }, An();
  }
  function Ta() {
    const e = (n) => T.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", fn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", fn.avg, 2],
      ...[...T.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, i, d, p = !1]) => ({ key: n, el: i, span: d, tile: p }));
  }
  const Wa = (e, n, i) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((Qr + Math.max(0, xa.length - 1) * (Ps + zt) + zt) / (i + zt))) : Math.min(n, Nt().spans[e.key] ?? e.span), es = (e) => Jr[e.key] ?? (e.el.classList.contains("tfDac") ? Ko(e.key) ? Zo : qa : null);
  function Is(e, n, i = null) {
    const d = Nt().cells, p = e.every((g) => !d[g.key] || d[g.key].col + g.cols <= n), w = (g) => d[g.key] || { row: 1e9, col: 0 }, h = () => {
      const g = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), D = (le, J, B, ke) => {
        for (let Fe = J; Fe < J + ke; Fe++) for (let dt = le; dt < le + B; dt++) if (g.has(dt + "," + Fe)) return !1;
        return !0;
      }, P = (le, J, B) => {
        for (let ke = B; ke < B + le.rows; ke++) for (let Fe = J; Fe < J + le.cols; Fe++) g.add(Fe + "," + ke);
        M.set(le.key, { col: J, row: B, cols: le.cols, rows: le.rows });
      }, N = (le, J, B) => {
        for (J = Math.max(0, Math.min(n - le.cols, J)), B = Math.max(0, B); !D(J, B, le.cols, le.rows); ) B++;
        P(le, J, B);
      }, $ = (le) => {
        for (let J = 0; ; J++) for (let B = 0; B <= n - le.cols; B++) if (D(B, J, le.cols, le.rows)) {
          P(le, B, J);
          return;
        }
      };
      i && N(i, yt.col, yt.row);
      const fe = e.filter((le) => le !== i), Re = (le, J) => w(le).row - w(J).row || w(le).col - w(J).col;
      return p ? (fe.filter((le) => d[le.key]).sort(Re).forEach((le) => N(le, d[le.key].col, d[le.key].row)), fe.filter((le) => !d[le.key]).forEach($), M) : ([...fe].sort(Re).forEach($), M);
    };
    for (let g = 0; ; g++) {
      const M = h();
      if (g === 3) return M;
      const D = e.filter((N) => N.tile && !Ko(N.key)).map((N) => ({ it: N, p: M.get(N.key) })).sort((N, $) => N.p.row - $.p.row || N.p.col - $.p.col);
      let P = !1;
      for (let N = 0, $; N < D.length; N = $) {
        for ($ = N + 1; $ < D.length && D[$].p.row === D[N].p.row && D[$].p.col === D[$ - 1].p.col + 1; $++) ;
        const fe = D.slice(N, $), Re = Math.max(...fe.map((le) => le.it.rows));
        fe.forEach((le) => {
          le.it.rows < Re && (le.it.rows = Re, P = !0);
        });
      }
      if (!P) return M;
    }
  }
  function yi() {
    const e = Nt(), n = new Set(e.hidden), i = Ta().filter((h) => !Dn.includes(h.key));
    let d = Ca;
    if (!d.size) {
      const h = e.pegs || 4, g = i.filter((M) => !n.has(M.key));
      g.forEach((M) => {
        M.cols = Wa(M, h, on), M.rows = es(M) ?? 2;
      }), d = Is(g, h);
    }
    const p = (h) => !n.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    i.sort((h, g) => p(h).row - p(g).row || p(h).col - p(g).col);
    const w = (e.phone || []).map((h) => i.find((g) => g.key === h && !n.has(h))).filter(Boolean);
    return [...w, ...i.filter((h) => !w.includes(h))];
  }
  const ao = () => {
    const e = yi();
    e.forEach((n, i) => n.el.style.setProperty("--o", String(3 + i))), Lo([...Ta().filter((n) => Dn.includes(n.key)), ...e].map((n) => n.el));
  };
  function Lo(e) {
    if (yt) return;
    const n = a.activeElement;
    let i = null;
    for (const d of new Set(e.map((p) => {
      for (; p && p.parentElement !== T; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = i ? i.nextSibling : T.querySelector(":scope > [data-tf]");
      if (d !== p)
        try {
          T.moveBefore ? T.moveBefore(d, p) : T.insertBefore(d, p);
        } catch {
          T.insertBefore(d, p);
        }
      i = d;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const ia = (e, n) => no({ ...e, cells: n, pegs: oa(T.clientWidth).n });
  function nn() {
    var J;
    if (!b || !T) return;
    const e = T.clientWidth, { n, w: i } = oa(e), d = m.classList.contains("tfDash") && e >= 2 * on + zt;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && Sn);
    const p = c("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", Sn), p.setAttribute("aria-pressed", String(Sn)), p.setAttribute("aria-label", Sn ? "Done editing" : "Edit the dashboard"), p.title = Sn ? "Done" : "Edit", p.innerHTML = Sn ? af : qc);
    const w = d ? Ta() : [];
    if (!d) {
      T.style.height = "", T.querySelectorAll(".tfBoardItem").forEach((B) => {
        B.classList.remove("tfBoardItem", "tfBoardHidden"), B.style.left = B.style.top = B.style.width = B.style.height = "";
      }), (J = T.querySelector(".tfDash-act > .activityRows")) == null || J.style.removeProperty("max-height"), ns(!1), m.classList.contains("tfDash") && ao(), $t();
      return;
    }
    T.style.setProperty("--peg-w", i + "px");
    const h = new Set(Nt().hidden), g = i + zt;
    yt != null && yt.fromTray && h.delete(yt.key), w.forEach((B) => B.el.classList.toggle("tfBoardHidden", h.has(B.key)));
    const M = w.filter((B) => !h.has(B.key) && getComputedStyle(B.el).display !== "none");
    let D = 0;
    M.filter((B) => Dn.includes(B.key)).forEach((B) => {
      B.el.classList.add("tfBoardItem"), Object.assign(B.el.style, { width: e + "px", height: "", left: "0px", top: D + "px" });
      const ke = B.key === "sums" && B.el.querySelector(".tfDash-bar"), Fe = ke ? ke.querySelectorAll(".activityRow").length : 0;
      ke && (ke.style.maxWidth = "none");
      for (let dt = 1; ke && dt <= Fe && (ke.style.setProperty("--bar-cols", String(Math.ceil(Fe / dt))), !(ke.offsetWidth <= e)); dt++)
        ;
      ke && (ke.style.maxWidth = ""), D += B.el.offsetHeight + zt;
    }), Wn = D;
    const P = M.filter((B) => !Dn.includes(B.key));
    P.forEach((B) => {
      B.cols = Wa(B, n, i), B.el.classList.add("tfBoardItem"), B.el.style.width = (B.cols === n ? e : B.cols * i + (B.cols - 1) * zt) + "px", B.el.style.height = "", B.rows = es(B) ?? Math.max(1, Math.ceil((B.el.offsetHeight + zt - 6) / To));
    });
    const N = yt && P.find((B) => B.key === yt.key), $ = Is(P, n, N);
    $.forEach((B) => Object.assign(B, { x: B.cols === n ? 0 : B.col * g, y: Wn + B.row * To, w: B.cols === n ? e : B.cols * i + (B.cols - 1) * zt, h: B.rows * To - zt })), P.forEach((B) => {
      const ke = $.get(B.key);
      B.el.style.height = ke.h + "px", B.el.classList.contains("tfDac") && B.el.style.setProperty("--tf-dac-pad", ke.h - xi + "px"), !(B === N && !yt.fromTray) && (B.el.style.left = ke.x + "px", B.el.style.top = ke.y + "px");
    }), Ca = $, Lo([...M.filter((B) => Dn.includes(B.key)), ...P.slice().sort((B, ke) => $.get(B.key).row - $.get(ke.key).row || $.get(B.key).col - $.get(ke.key).col)].map((B) => B.el));
    const fe = $.get("act"), Re = fe && T.querySelector(".tfDash-act > .activityRows");
    Re && (Re.style.maxHeight = Math.max(bi, Math.floor((fe.h - Re.offsetTop - 10) / bi) * bi) + "px"), to = Math.max(0, ...[...$.values()].map((B) => B.row + B.rows));
    let le = Wn + to * To - zt;
    le = ns(Sn, P, $, le, n, i), T.style.height = le + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), w.forEach((B) => ts.observe(B.el)), ds(), $t();
  }
  const sr = () => {
    rr || (rr = !0, requestAnimationFrame(() => {
      rr = !1, nn();
    }));
  }, ts = new ResizeObserver(() => {
    yt || sr();
  });
  function ns(e, n = [], i = /* @__PURE__ */ new Map(), d = 0, p = 1, w = on) {
    T.querySelectorAll(".tfEditChips").forEach((P) => {
      (!e || !P.closest(".tfBoardItem")) && P.remove();
    }), T.querySelectorAll(".tfFavHides").forEach((P) => P.remove()), T.querySelectorAll(".tfBoardItem").forEach((P) => [...P.children].forEach((N) => {
      N.classList.contains("tfEditChips") || N.toggleAttribute("inert", e);
    }));
    let h = T.querySelector(".tfBoardCells"), g = T.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), g == null || g.remove(), gn(), d;
    const M = to + ir;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), T.prepend(h)), h.style.top = Wn + "px", h.dataset.size !== p + "x" + M + "x" + w && (h.dataset.size = p + "x" + M + "x" + w, h.style.gridTemplateColumns = "repeat(" + p + "," + w + "px)", h.innerHTML = "<i></i>".repeat(p * M)), d = Math.max(d, Wn + M * To - zt), n.forEach((P) => {
      const N = P.el;
      !N || N.querySelector(":scope > .tfEditChips") || N.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + bd + '</span><button class="tfEditChip" type="button" data-board-more="' + re(P.key) + '" aria-label="' + re(Ma(P.key)) + ' options" aria-haspopup="menu">' + tf + "</button></div>");
    }), yt && i.has(yt.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), T.appendChild(g));
      const P = i.get(yt.key);
      Object.assign(g.style, { left: P.x + "px", top: P.y + "px", width: P.w + "px", height: P.h + "px" });
    } else g == null || g.remove();
    const D = T.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const P = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((N) => {
        const $ = N.getBoundingClientRect(), fe = N.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + re(fe) + '" aria-label="Hide ' + re(Ae(fe)) + ' from the dashboard" style="left:' + Math.round($.right - P.left - 42) + "px;top:" + Math.round($.top - P.top + ($.height - 32) / 2) + 'px">' + Hc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let as = "";
  function $o(e) {
    Sn = e, e || (yt = null, vn = ja = !1, gn()), nn(), e ? as = JSON.stringify(V) : as && JSON.stringify(V) !== as && Rn("Changes saved");
  }
  function ki(e, n) {
    var $, fe;
    gn();
    const i = Ca.get(e), { n: d } = oa(T.clientWidth), p = Nt(), w = p.spans[e] ?? 2;
    if (!i) return;
    const h = i.cols >= d, g = (Re, le, J) => '<button type="button" role="menuitem" data-board-act="' + Re + '"' + (J ? " disabled" : "") + ">" + le + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Ma(e) + " options");
    const D = T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), P = D == null ? void 0 : D.classList.contains("tfDac");
    M.innerHTML = (wi.includes(e) ? g("size", w === 1 ? "Card size" : "Tile size") : "") + (P ? g("tall", Ko(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? g("graph", ((($ = p.opts.energy) == null ? void 0 : $.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", h || i.col === 0) + g("right", "Move right", h || i.col + i.cols >= d) + g("up", "Move up", i.row <= 0) + g("down", "Move down") + (D ? g("remove", "Remove") : g("hide", "Hide")), T.appendChild(M);
    const N = Math.min(i.x + i.w - M.offsetWidth, T.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, N) + "px", top: i.y + 28 + "px" }), Sa = { key: e, menu: M, opener: n }, (fe = M.querySelector("button:not([disabled])")) == null || fe.focus();
  }
  function gn(e) {
    if (!Sa) return;
    const { menu: n, opener: i } = Sa;
    Sa = null, n.remove(), e && (i == null || i.focus());
  }
  const Va = () => Object.fromEntries([...Ca].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function os(e, n) {
    var h, g;
    if (n === "remove") {
      gn(), Ol(e);
      return;
    }
    const i = V, d = Nt(), p = Va(), w = p[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, tall: !Ko(e) } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((h = d.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...w, col: w.col - 1 }), n === "right" && (p[e] = { ...w, col: w.col + 1 }), n === "up" && (p[e] = { ...w, row: w.row - 1 }), n === "down" && (p[e] = { ...w, row: w.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (yt = { key: e, col: p[e].col, row: p[e].row }), ia(d, p), yt && (nn(), yt = null, ia(Nt(), Va())), gn(), n === "graph" && (hn.delete("dash:energy"), rn()), nn(), n !== "hide" ? (g = T.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || g.focus() : Rn(Ma(e) + " hidden", fr(i));
  }
  function lr(e) {
    const n = Nt();
    no({ ...n, hidden: n.hidden.filter((i) => i !== e) }), nn(), Rn(Ma(e) + " put back");
  }
  const oo = () => Nt().tiles || [...T.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Nt().hidden.includes(e));
  function dr(e, n) {
    const i = Nt();
    ia({ ...i, tiles: e, hidden: i.hidden.filter((d) => !d.includes(".")) }, n), rn(), $t();
  }
  const Fl = (e) => {
    dr([...oo().filter((n) => n !== e), e], Va()), Rn(Ae(e) + " added"), Os(e);
  }, Ol = (e) => {
    const n = V, i = Va();
    delete i[e], dr(oo().filter((d) => d !== e), i), Rn(Ae(e) + " removed", fr(n));
  };
  let is = 0;
  function Rn(e, n = null) {
    var h;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(is), i.classList.remove("show", "withAction"), n();
      }), i.appendChild(g);
    }
    const d = m.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), w = Bt.classList.contains("open") && !sa ? Math.min(d.right, Bt.getBoundingClientRect().left) : d.right;
    i.style.left = (d.left + w) / 2 + "px", i.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!n), clearTimeout(is), is = setTimeout(() => i.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const Vn = 700, zn = 1e3, Nn = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Nn.setAttribute("role", "tooltip"), Nn.setAttribute("aria-hidden", "true"), m.appendChild(Nn);
  let cr = null, Ao = 0, io = 0, Mi = -1 / 0;
  const ur = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, Hs = (e) => {
    for (let n = e; n && n !== m; n = n.parentElement) if (ur(n)) return n;
    return null;
  };
  function Fs(e, n) {
    clearTimeout(Ao), clearTimeout(io);
    const i = () => {
      if (!e.isConnected) return;
      cr = e, Nn.textContent = n, Nn.hidden = !1;
      const d = e.getBoundingClientRect(), p = Nn.getBoundingClientRect(), w = d.top - p.height - 8 >= 8 ? d.top - p.height - 8 : d.bottom + 8;
      Nn.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, d.left + d.width / 2 - p.width / 2)) + "px", Nn.style.top = w + "px";
    };
    !Nn.hidden || performance.now() - Mi < zn ? i() : Ao = setTimeout(i, Vn);
  }
  function pr() {
    clearTimeout(Ao), clearTimeout(io), Nn.hidden || (Mi = performance.now()), Nn.hidden = !0, cr = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Nn.contains(e.target)) {
      clearTimeout(io);
      return;
    }
    const n = Hs(e.target);
    if (n && Lt.names === "scroll" && n.matches(Si)) {
      ra(n);
      return;
    }
    if (n) {
      n !== cr ? Fs(n, n.textContent.trim()) : clearTimeout(io);
      return;
    }
    clearTimeout(Ao), clearTimeout(io), io = setTimeout(pr, 120);
  }), a.addEventListener("focusin", (e) => {
    var d;
    const n = e.target;
    if (!((d = n.matches) != null && d.call(n, ":focus-visible"))) return;
    let i = [n, ...n.querySelectorAll("*")].filter(ur);
    Lt.names === "scroll" && (i.filter((p) => p.matches(Si)).forEach(ra), i = i.filter((p) => !p.matches(Si))), i.length && Fs(n, i.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === cr && pr();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Nn.hidden && (e.stopPropagation(), pr());
  }, !0), window.addEventListener("scroll", () => {
    (!Nn.hidden || Ao) && pr();
  }, { capture: !0, passive: !0 });
  const Si = ".activityRowName,.activityRowMeta", za = /* @__PURE__ */ new WeakSet();
  function ra(e) {
    var w;
    if (Lt.names !== "scroll" || za.has(e) || (w = window.matchMedia) != null && w.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const i = n / 30 * 1e3, d = 600 + i + 1e3 + i;
    za.add(e), e.style.textOverflow = "clip";
    const p = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / d, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + i) / d },
      { textIndent: -n + "px", offset: (1600 + i) / d, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: d });
    p.onfinish = p.oncancel = () => {
      e.style.textOverflow = "", za.delete(e);
    };
  }
  const hr = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (hr.unobserve(n.target), ra(n.target));
  }), { threshold: 1 });
  let _o = !1;
  new MutationObserver(() => {
    _o || Lt.names !== "scroll" || (_o = !0, setTimeout(() => {
      _o = !1, a.querySelectorAll(Si).forEach((e) => {
        !e.dataset.glided && ur(e) && (e.dataset.glided = "1", hr.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const fr = (e) => () => {
    V = e, An(), rn(), nn(), $t();
  };
  function Os(e) {
    const n = () => T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const i = n();
      if (!i) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = i.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && i.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const w = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      i.animate([{ boxShadow: w(55) }, { boxShadow: w(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, ql(e) ? 260 : 0);
  }
  function ql(e) {
    const n = Ca.get(e);
    if (!n || !Bt.classList.contains("open") || sa) return !1;
    const { n: i, w: d } = oa(T.clientWidth), p = Bt.getBoundingClientRect().left - T.getBoundingClientRect().left, w = (M) => M * (d + zt) + n.cols * d + (n.cols - 1) * zt <= p;
    if (w(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    Ca.forEach((M, D) => {
      if (D !== e) for (let P = M.row; P < M.row + M.rows; P++) for (let N = M.col; N < M.col + M.cols; N++) h.add(N + "," + P);
    });
    const g = (M, D) => {
      for (let P = D; P < D + n.rows; P++) for (let N = M; N < M + n.cols; N++) if (h.has(N + "," + P)) return !1;
      return !0;
    };
    for (let M = 0; M <= to; M++) for (let D = 0; D + n.cols <= i && w(D); D++)
      if (g(D, M))
        return ia(Nt(), { ...Va(), [e]: { col: D, row: M } }), nn(), !0;
    return !1;
  }
  const rs = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Bt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Bt.setAttribute("aria-label", "Edit the dashboard"), Bt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Bt);
  let sa = !1, vn = !1, ja = !1, Cn = null, La = !1;
  const ro = {}, Xo = (e, n) => {
    if (ro[e] === n) return;
    ro[e] = n;
    const i = Bt.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = n, ua(i);
  }, Eo = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + re(Ae(e)) + '</span><span class="activityRowMeta">' + re(n) + "</span></span>", Wl = (e, n, i) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + re(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + bd + '</span><span class="tfIcon"' + Ut(e, Kt(e)) + "></span>" + Eo(e, n ? "Hidden" + (wt.get(e) ? " · " + wt.get(e) : "") : wt.get(e) || Et(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + re(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + re(Ae(e)) + ' on the dashboard">' + (n ? Hc : nf) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + re(e) + '" aria-label="Remove ' + re(Ae(e)) + ' from favourites">' + Fc + "</button>" : "<span></span>") + "</li>";
  function ss(e, n, i, d) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(x).filter((h) => n(h) && !i.has(h) && x[h].state !== "unavailable").filter((h) => {
      const g = (Ae(h) + " " + (wt.get(h) || "") + " " + h).toLowerCase();
      return p.every((M) => g.includes(M));
    }).sort((h, g) => (wt.get(h) || "~").localeCompare(wt.get(g) || "~") || Ae(h).localeCompare(Ae(g))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + re(h) + '"><span class="tfIcon"' + Ut(h, Kt(h)) + "></span>" + Eo(h, wt.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function $t() {
    const e = Sn && m.classList.contains("tfBoard");
    if (Bt.classList.toggle("open", e), Bt.classList.toggle("tucked", e && sa), Bt.toggleAttribute("inert", !e), e || (La = !1), zs(), !e) return;
    const n = Bt.querySelector("[data-tray-tuck]");
    n.innerHTML = sa ? Lc : Oc, n.setAttribute("aria-expanded", String(!sa)), n.setAttribute("aria-label", sa ? "Show the edit tray" : "Tuck the edit tray away");
    const i = Nt().hidden.filter((h) => Ta().some((g) => g.key === h));
    Xo("cards", '<div class="sectionLabel">Hidden cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + re(h) + '" aria-label="' + re(Ma(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + bd + "</span>" + re(Ma(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), Xo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Nt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + La + '">' + (La ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(V.favHidden || []), p = En(), w = [...p, ...[...d].filter((h) => !p.includes(h) && x[h])];
    Xo("favs", w.map((h) => Wl(h, d.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Bt.querySelector('[data-pick="tiles"]').hidden = !ja, Bt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ja)), ja && Xo("tilepick", ss(Bt.querySelector("[data-tile-search]").value, (h) => bl.includes(h.split(".")[0]), new Set(oo()), "data-tile-pick")), Bt.querySelector('[data-pick="favs"]').hidden = !vn, Bt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(vn)), vn && Xo("pick", ss(Bt.querySelector("[data-fav-search]").value, (h) => rs.test(h), new Set(En()), "data-fav-pick")), Xo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (pi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + pi() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const fa = (e) => {
    V = { ...V, ...e }, An(), rn(), $t();
  };
  function Pt(e, n) {
    const i = V, d = new Set(V.favHidden || []);
    n ? d.delete(e) : d.add(e), fa({ favHidden: [...d] }), n ? Rn(Ae(e) + " put back") : Rn(Ae(e) + " hidden", fr(i));
  }
  const Jo = (e) => {
    const n = V;
    fa({ favourites: En().filter((i) => i !== e), favHidden: (V.favHidden || []).filter((i) => i !== e) }), Rn(Ae(e) + " removed from favourites", fr(n));
  }, mr = (e) => {
    fa({ favourites: [...En().filter((n) => n !== e), e], favHidden: (V.favHidden || []).filter((n) => n !== e) }), Rn(Ae(e) + " added to favourites");
  };
  Bt.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? $o(!1) : n.hasAttribute("data-tray-tuck") ? (sa = !sa, $t()) : n.hasAttribute("data-phone-toggle") ? (La = !La, $t(), La && ((i = Bn.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (lr(n.dataset.trayCard), $t()) : n.dataset.favEye ? Pt(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Jo(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (vn = !vn, $t(), vn && Bt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? mr(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (ja = !ja, $t(), ja && Bt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Fl(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && fa({ suggest: !pi() }));
  }), Bt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && $t();
  }), Bt.addEventListener("keydown", (e) => {
    var i, d;
    const n = !!((d = (i = e.target).closest) != null && d.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? ja : vn) || (e.stopPropagation(), n ? ja = !1 : vn = !1, $t(), Bt.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function gr(e, n, i, d) {
    e.preventDefault();
    const p = e.clientX, w = e.clientY;
    let h = null, g = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (N) => {
      if (!h) {
        if (Math.hypot(N.clientX - p, N.clientY - w) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (N.clientX - 24) + "px," + (N.clientY - 24) + "px)";
      const $ = !sa && N.clientX >= Bt.getBoundingClientRect().left;
      if (i === "card") {
        const le = T.getBoundingClientRect(), { w: J } = oa(T.clientWidth);
        yt = !$ && N.clientX >= le.left && N.clientX <= le.right && N.clientY >= le.top + Wn ? { key: d, col: Math.max(0, Math.floor((N.clientX - le.left) / (J + zt))), row: Math.max(0, Math.floor((N.clientY - le.top - Wn) / To)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, nn();
        }));
        return;
      }
      const fe = T.querySelector(".tfDash-favs"), Re = fe == null ? void 0 : fe.getBoundingClientRect();
      if (Cn = null, Re && !$ && N.clientX >= Re.left && N.clientX <= Re.right && N.clientY >= Re.top && N.clientY <= Re.bottom) {
        let le = 1 / 0;
        fe.querySelectorAll('[data-k^="fav:"]').forEach((J, B) => {
          const ke = J.getBoundingClientRect(), Fe = Math.hypot(N.clientX - (ke.left + ke.width / 2), N.clientY - (ke.top + ke.height / 2));
          Fe < le && (le = Fe, Cn = { i: B, r: ke, after: N.clientX > ke.left + ke.width / 2 });
        }), Cn || (Cn = { i: 0, r: null, after: !1 });
      }
      Cn != null && Cn.r ? (M.isConnected || m.appendChild(M), Object.assign(M.style, { left: (Cn.after ? Cn.r.right : Cn.r.left) - 2 + "px", top: Cn.r.top + 8 + "px", height: Cn.r.height - 16 + "px" })) : M.remove();
    }, P = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), cancelAnimationFrame(g), h == null || h.remove(), M.remove(), i === "card") {
        if (!h) lr(d);
        else if (yt != null && yt.fromTray) {
          nn();
          const le = Nt(), J = Va();
          yt = null, ia({ ...le, hidden: le.hidden.filter((B) => B !== d) }, J), Rn(Ma(d) + " put back");
        }
        yt = null, nn(), rn(), $t();
        return;
      }
      if (!Cn) return;
      const N = new Set(V.favHidden || []);
      N.delete(d);
      const $ = En().filter((le) => le !== d), fe = $.filter((le) => !N.has(le)), Re = fe[Math.min(Cn.i + (Cn.after ? 1 : 0), fe.length)];
      $.splice(Re ? $.indexOf(Re) : $.length, 0, d), Cn = null, fa({ favourites: $, favHidden: [...N] }), Rn(Ae(d) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", P);
  }
  const xn = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, vr = 140, qs = 252, Ws = 0.8, Vs = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, Bn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Bn.setAttribute("aria-label", "Phone order"), Bn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Fc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(Bn);
  let ls = "";
  function zs() {
    var g;
    const e = La && Sn && m.classList.contains("tfBoard") && !sa;
    if (Bn.classList.toggle("open", e), Bn.toggleAttribute("inert", !e), !e) return;
    const n = yi().filter((M) => !Nt().hidden.includes(M.key)), i = n.length, d = (M) => Math.round(M * Ws * 10) / 10 + "px", p = (M, D) => {
      const P = M.el.classList.contains("tfDac"), N = M.tile ? P ? qs : vr : xn[M.key] || vr;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + re(M.key) + '" style="min-height:' + d(N) + '" aria-label="' + re(Ma(M.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? Ut(M.key, Kt(M.key)) : Ut(M.key, Vs[M.key])) + '></span><span class="tfPhoneName">' + re(Ma(M.key)) + "</span></button>";
    }, w = '<div class="tfPhoneTitle">' + re(((g = T.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(xn.sums) + '"><span class="tfPhoneName">' + re(Ma("sums")) + "</span></div>" + n.map(p).join("");
    if (Bn.querySelector('[data-phone="note"]').innerHTML = Nt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", w === ls) return;
    ls = w;
    const h = Bn.querySelector('[data-phone="list"]');
    h.innerHTML = w, ua(h);
  }
  function js(e, n) {
    var i;
    no({ ...Nt(), phone: e }), $t(), n && ((i = Bn.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const br = () => [...Bn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function wr(e, n) {
    e.preventDefault();
    const i = n.parentElement, d = Bn.querySelector(".tfPhoneScreen"), p = br().join();
    n.classList.add("moving");
    const w = (g) => {
      const M = d.getBoundingClientRect();
      g.clientY > M.bottom - 40 ? d.scrollTop += 12 : g.clientY < M.top + 40 && (d.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find(($) => {
        const fe = $.getBoundingClientRect();
        return $ !== n && g.clientX >= fe.left && g.clientX <= fe.right && g.clientY >= fe.top && g.clientY <= fe.bottom;
      });
      if (!D) return;
      const P = D.getBoundingClientRect(), N = D.classList.contains("tile") ? g.clientX < P.left + P.width / 2 : g.clientY < P.top + P.height / 2;
      i.insertBefore(n, N ? D : D.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const g = br();
      ls = "", g.join() !== p ? js(g) : zs();
    };
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  Bn.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && wr(e, n);
  }), Bn.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      La = !1, $t(), (i = Bt.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = Nt();
      no(p), $t();
    }
  }), Bn.addEventListener("keydown", (e) => {
    var h, g, M, D;
    if (e.key === "Escape") {
      e.stopPropagation(), La = !1, $t(), (h = Bt.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (D = (M = (g = e.target).closest) == null ? void 0 : M.call(g, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !i) return;
    e.preventDefault();
    const d = br(), p = d.indexOf(n), w = p + i;
    w < 0 || w >= d.length || ([d[p], d[w]] = [d[w], d[p]], js(d, n));
  });
  function Ci(e, n) {
    e.preventDefault();
    const i = n.parentElement;
    n.classList.add("moving");
    const d = (w) => {
      const h = [...i.children].find((g) => {
        const M = g.getBoundingClientRect();
        return g !== n && w.clientY >= M.top && w.clientY <= M.bottom;
      });
      if (h) {
        const g = h.getBoundingClientRect();
        i.insertBefore(n, w.clientY < g.top + g.height / 2 ? h : h.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const w = new Set(En());
      ro.favs = null, fa({ favourites: [...i.children].map((h) => h.dataset.trayFav).filter((h) => w.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Bt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    n ? gr(e, n, "card", n.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? Ci(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && gr(e, i, "fav", i.dataset.trayFav);
  });
  function Vl(e) {
    if (!Sn || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), i = n && Ta().find((N) => N.el === n);
    if (!i || Dn.includes(i.key)) return;
    const d = Ca.get(i.key), { w: p } = oa(T.clientWidth);
    if (!d) return;
    e.preventDefault(), gn();
    const w = e.clientX, h = e.clientY;
    let g = !1, M = 0;
    const D = (N) => {
      const $ = N.clientX - w, fe = N.clientY - h;
      if (!g) {
        if (Math.hypot($, fe) < 4) return;
        g = !0, yt = { key: i.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + $ + "px," + fe + "px)", yt.col = Math.round((d.x + $) / (p + zt)), yt.row = Math.round((d.y + fe - Wn) / To), M || (M = requestAnimationFrame(() => {
        M = 0, nn();
      }));
    }, P = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), g && (cancelAnimationFrame(M), nn(), n.classList.remove("tfDragging"), n.style.transform = "", yt = null, ia(Nt(), Va()), nn(), rn());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", P);
  }
  function ds(e = !1) {
    const n = T == null ? void 0 : T.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const i = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === i) return;
    const d = !n.dataset.drawn;
    n.dataset.drawn = i;
    const p = gi.find((w) => w.id === n.dataset.graph);
    p ? Pl(n, p).then(() => {
      (e || d) && Uo(n);
    }) : Lr(n.dataset.graph, n).then(() => {
      e && vi(n);
    });
  }
  function cs() {
    var g, M, D;
    Je = Vi.model(o()), Ds(), x = Je.states, x[(g = V.sources) == null ? void 0 : g.grid] && (Je.grid = V.sources.grid), x[(M = V.sources) == null ? void 0 : M.alarm] && (Je.security.alarms = [V.sources.alarm]), C.forEach((P, N) => {
      const $ = x[N], fe = ($ == null ? void 0 : $.attributes) || {};
      if (!$ || Date.now() - P.at > 2 * 60 * 1e3) {
        C.delete(N);
        return;
      }
      P.pos != null && $.state !== "opening" && $.state !== "closing" && Math.abs(Fn(N) - P.pos) < 1 && delete P.pos, P.tilt != null && Math.abs((fe.current_tilt_position ?? -1) - P.tilt) < 1 && delete P.tilt, P.pos == null && P.tilt == null && C.delete(N);
    });
    const e = [];
    let n = 0;
    const i = _l();
    xa = i.filter((P) => P.room).map((P) => P.room), xa.some((P) => P.id === ve) || (ve = ((D = xa[0]) == null ? void 0 : D.id) || null);
    const d = Le === "weather" ? { key: "weather", name: "Weather" } : Le && i.find((P) => P.key === Le);
    if (d || (Le = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), wt = /* @__PURE__ */ new Map(), Je.rooms.forEach((P) => [...P.actions, ...P.plugs, ...P.readings, ...P.openings, ...P.solar, ...P.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => wt.set(N, P.name))), !d) return Il(e, hi());
    if (e.push({ key: "areahead", html: zl(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const p = d.ids, w = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: he(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: ge(h, ++n) }), h == null || h.plants.forEach((P) => e.push({ key: "plant:" + P.id, html: ye(P, ++n) })), p.length && e.push({ key: "block:" + w, order: ++n, tiles: p.map((P) => ({ key: P, html: On(P) })) }), e;
  }
  const zl = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Lc + '</button><div class="settingsTitle">' + re(e.name) + "</div></div>";
  let Gs = 0, Us = null;
  const Do = (e) => e === "weather" ? fn.wx : T.querySelector(".tfAreas");
  function so(e) {
    var n, i;
    Le || (Gs = Ti().scrollTop, Us = ((n = Do(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Le = e, e.startsWith("room:") && (ve = e.slice(5)), co(), Ti().scrollTop = 0, (i = T.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let la = null;
  function Ys(e, n) {
    if (la == null || la(), n == null) return;
    const i = Ti(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let w = 0;
    const h = () => {
      cancelAnimationFrame(w), p.forEach((M) => window.removeEventListener(M, h, !0)), la = null;
    }, g = () => {
      const M = e();
      if (M != null && M.isConnected) {
        const D = M.getBoundingClientRect().top - n;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < d ? w = requestAnimationFrame(g) : h();
    };
    p.forEach((M) => window.addEventListener(M, h, { capture: !0, passive: !0 })), la = h, g();
  }
  function lo() {
    var i;
    const e = Le;
    Le = null, co(), Ti().scrollTop = Gs, Ys(() => Do(e), Us);
    const n = e.startsWith("room:") ? T.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? fn.wx.querySelector(".wbOpenPage") : T.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || i.focus({ preventScroll: !0 });
  }
  const jl = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + re(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Qo = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function Ti() {
    for (let e = m.parentElement || m.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Ro(e) {
    const n = Ti(), i = (g) => {
      const M = g.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, d = [...T.children, ...T.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && i(g)), p = d == null ? void 0 : d.dataset.k, w = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const h = d != null && d.isConnected ? d : p && T.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && w != null && (n.scrollTop += h.getBoundingClientRect().top - w);
  }
  function co() {
    if (!b || !T) return;
    const e = cs();
    T.querySelectorAll("[data-tf]").forEach((i) => i.remove()), hn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((i) => i.tiles ? jl(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((d) => hn.set(d.key, d.html)) : hn.set(i.key, i.html)), kn = Qo(e), T.append(...n.children), zi(e.weather), ji(), ts.disconnect(), nn(), ua(T), Tn(T), Ui(T), U(), j && Lr(j.id), Ar(), ti(), Ks(), requestAnimationFrame(G);
  }
  const xr = (e) => {
    var i;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (i = n.dataset) == null ? void 0 : i.act };
  }, uo = (e, n) => {
    var i;
    n && ((i = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function Li(e, n) {
    const i = document.createElement("div");
    i.innerHTML = n;
    const d = i.firstElementChild, p = xr(e);
    e.replaceWith(d), ua(d), Tn(d), Ui(d), uo(d, p);
  }
  function rn() {
    !b || !T || yt || Ro(us);
  }
  function us() {
    if (!T.querySelector("[data-tf]")) {
      co();
      return;
    }
    const e = cs();
    if (Qo(e) !== kn) {
      co();
      return;
    }
    const n = (i) => [...qe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return i === p || i.endsWith(":" + p);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((d) => {
      if (hn.get(d.key) === d.html || n(d.key)) return;
      const p = T.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (hn.set(d.key, d.html), j && j.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = F(j.id);
          return;
        }
        Li(p, d.html), j && j.key === d.key && Lr(j.id), d.key.startsWith("energy:") && Ar();
      }
    })), ti(), Ks(), Cs(), U(), Ye == null || Ye.update(), nt == null || nt.forEach((i) => i.update()), m.classList.contains("tfDash") && sr(), requestAnimationFrame(G);
  }
  const po = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && vt(e.color_mode)]],
    climate: (e) => [["Current temperature", Ie(e.current_temperature) + " °C"], ["Target", Ie(e.temperature) + " °C"], ["Action", vt(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", vt(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", vt(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ie(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : vt(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, ei = (e) => {
    var i;
    const n = (((i = po[e.split(".")[0]]) == null ? void 0 : i.call(po, ft(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + re(d) + "</span><span>" + re(p) + "</span></div>").join("") + "</div>" : "";
  }, da = (e) => Oi(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Zs(e, n = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + re(d.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + d.ids.map((p) => Ot(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const ot = document.createElement("div");
  ot.className = "tfMoreBackdrop", ot.hidden = !0, m.appendChild(ot);
  const yr = (e, n) => {
    for (let i = e; i && i !== ot; i = i.parentElement) {
      const d = getComputedStyle(i).overflowY;
      if ((d === "auto" || d === "scroll") && i.scrollHeight > i.clientHeight + 1 && (n < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ai = null;
  ot.addEventListener("touchstart", (e) => {
    Ai = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), ot.addEventListener("touchmove", (e) => {
    var p, w;
    if (!Ai || e.touches.length > 1 || (w = (p = e.target).closest) != null && w.call(p, "input,textarea,select")) return;
    const n = e.touches[0], i = Ai.x - n.clientX, d = Ai.y - n.clientY;
    Ai = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(i) && !yr(e.target, d) && e.preventDefault();
  }, { passive: !1 }), ot.addEventListener("wheel", (e) => {
    yr(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function _i() {
    const e = ot.querySelector(".tfMorePair"), n = ot.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", _i, { passive: !0 }), b && Mt();
  let Aa = [];
  const Ei = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function ps(e) {
    const n = (M, D = "") => '<div class="tfMoreHead">' + (y != null && y.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + gd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + re(M) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Vh + "</button></div>", i = (M, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + re(M) + "</div>" + (D ? '<div class="tfMoreSub">' + re(D) + "</div>" : "") + "</div>", d = Zs;
    if (e === "favourites") {
      const M = En(), D = new Set(M), P = [{ name: "Starred", ids: M }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((N) => ({ name: N.name, ids: [...N.actions, ...N.plugs] }))].map((N, $) => $ ? { ...N, ids: N.ids.filter((fe) => !D.has(fe)) } : N).filter((N) => N.ids.length);
      return [n("Favourites"), i(M.length ? M.length + " starred" : "None starred"), d(P, { star: !0 }, !0)];
    }
    const p = (M, { name: D = "", alert: P = !1, plain: N = !1 } = {}) => {
      const $ = N ? [] : M.filter((le) => bl.includes(le.split(".")[0])), fe = M.filter((le) => !$.includes(le)), Re = (le) => le.startsWith("vacuum.") && ft(le).battery_level != null ? ft(le).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + re(D) + "</div>" : "") + '<div class="tfMoreActions">' + $.map((le) => On(le, !0)).join("") + fe.map((le) => Ot(le, { plain: N, alert: P, say: N ? Re(le) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const M = hi().find(($) => $.key === e.slice(8));
      if (!M) return null;
      const D = M.key === "light" ? (M.groups || []).flatMap(($) => $.ids) : [], P = D.some(($) => {
        var fe;
        return ((fe = x[$]) == null ? void 0 : fe.state) === "on";
      }), N = D.length ? '<button class="primary" type="button" data-acts="' + $a(D.map(($) => ["light", P ? "turn_off" : "turn_on", $])) + '">' + (P ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(M.name), '<div class="tfMoreNowRow">' + i(M.value) + N + "</div>", ...(M.groups || []).map(($) => p($.ids, { name: $.name === M.name ? "" : $.name, alert: $.alert, plain: M.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, M, D] = e.split(":"), P = Je.rooms.find((fe) => fe.id === M), N = P && Yi(P).find((fe) => fe.key === D);
      if (!N) return null;
      const $ = N.acts ? '<button class="primary" type="button" data-acts="' + $a(N.acts) + '">' + (N.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(P.name + " " + N.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(N.value) + $ + "</div>", p(Wr(P, D))];
    }
    const w = e.split(".")[0], h = x[e], g = bl.includes(w) ? Wo(e) : { sections: [] };
    return [
      n(Ae(e)),
      i(Et(e), h.last_changed && Na(Date.parse(h.last_changed))),
      (y == null ? void 0 : y.at) && '<svg class="tfGraph tfDay" data-day="' + re(e) + '" role="img" aria-label="' + re(Ae(e)) + ', last 24 hours"></svg>',
      w === "cover" && '<div data-cover-art="' + re(e) + '"></div>',
      ...g.sections.filter(Boolean),
      No(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(y != null && y.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Oc + "</button>"
    ].filter(Boolean);
  }
  const No = (e) => Ei(e) ? "" : ei(e) + da(e);
  let kr = "";
  function hs(e) {
    var n;
    y && (y.details = e, ti(), (n = ot.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const Di = (e) => {
    const n = x[e], i = Fn(e), d = ba(e);
    return { kind: md(n), name: Ae(e), text: Et(e), pos: i, target: Math.abs(d - i) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: Jt(e) ?? 100, canSet: lt(e, Nc) };
  };
  function Tn(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const i = n.dataset.coverArt, d = n.dataset.artKey || "more:" + i;
      let p = I.get(d);
      p || (p = Wh({ onMove: (w) => Pi(i, w), onSet: (w) => {
        Pi(i, w), Ga("pos", i);
      } }), p.coverId = i, I.set(d, p)), n.replaceWith(p.el), p.update(Di(i));
    });
  }
  const Qt = (e) => [...I.values()].filter((n) => n.coverId === e), Ri = () => I.forEach((e) => {
    x[e.coverId] && e.update(Di(e.coverId));
  }), Ks = () => {
    I.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), I.delete(n));
    }), Ri();
  };
  function ti() {
    var w, h;
    if (!y || !(Ei(y.id) || x[y.id])) {
      ot.hidden = !0;
      return;
    }
    if ([...qe.keys()].some((g) => g.endsWith("|" + y.id))) {
      Ri();
      return;
    }
    const e = ps(y.id), n = ot.querySelector(".tfMore");
    if (!e) {
      Ni();
      return;
    }
    const i = xr(ot), d = No(y.id), p = y.frame ? y.frame.wide : y.id.startsWith("summary:") || y.id.startsWith("group:");
    if (ot.hidden || !n || e.length !== Aa.length || n.classList.contains("wide") !== p) {
      const g = Sr ? y.scroll || 0 : !ot.hidden && n ? n.scrollTop : 0;
      ot.innerHTML = '<div class="tfMorePair' + (ot.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (y.frame ? ' style="height:' + y.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + gd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", kr = d, ot.classList.toggle("wide", p), ot.hidden = !1, _i(), Tn(ot), Ui(ot), ua(ot), ot.querySelectorAll("[data-day]").forEach((M) => ni(M.dataset.day, M, y.at)), g && (ot.querySelector(".tfMore").scrollTop = g), uo(ot, i), ot.contains(a.activeElement) || (w = ot.querySelector("[data-more-close]")) == null || w.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((g, M) => {
        var N, $;
        if (g === Aa[M] || g.includes("data-cover-art") || n.children[M].contains(($ = (N = a.activeElement) == null ? void 0 : N.matches) != null && $.call(N, "input,select") ? a.activeElement : null) || [...qe.keys()].some((fe) => n.children[M].querySelector('[data-drag="' + CSS.escape(fe) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = g;
        const P = D.firstElementChild;
        n.children[M].replaceWith(P), ua(P), Ui(P);
      }), d !== kr) {
        const g = ot.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = d), kr = d;
      }
      ot.contains(a.activeElement) || uo(ot, i);
    }
    (h = ot.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(y.details && d)), Aa = e, Ri();
  }
  setInterval(() => {
    y && ti();
  }, 15 * 1e3);
  function Mr(e, n) {
    var p;
    const i = !!(y && n && ot.contains(n)), d = i && ot.querySelector(".tfMore");
    i && (y.scroll = d.scrollTop), y = { id: e, opener: i ? y.opener : n, back: i ? y : null, frame: i ? y.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, fs();
  }
  let Sr = !1;
  function fs() {
    Aa = [], Sr = !ot.hidden, I.forEach((e, n) => {
      n !== y.id && ot.contains(e.el) && (e.destroy(), I.delete(n));
    }), ti(), Sr = !1;
  }
  function Ni() {
    var i, d, p, w, h, g;
    const e = y == null ? void 0 : y.opener;
    y = null, I.forEach((M, D) => {
      ot.contains(M.el) && (M.destroy(), I.delete(D));
    }), qn.forEach((M, D) => {
      D.startsWith("more:") && qn.delete(D);
    }), ot.hidden = !0, ot.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (d = T.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (w = T.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || w.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((g = T.querySelector("[data-favs-edit]")) == null || g.focus(n));
  }
  function Cr(e, n, i, d = {}) {
    const p = n.map((J) => J[1]), w = d.zero ? 0 : Math.min(...p), h = Math.max(...p), g = Math.max(120, e.clientWidth || 260), M = Math.max(60, e.clientHeight || 130), D = 8, P = M - 20, N = Date.now() - 24 * 3600 * 1e3, $ = 24 * 3600 * 1e3, fe = (J) => Math.max(0, Math.min(g, (J - N) / $ * g)), Re = (J) => h === w ? (D + P) / 2 : P - (J - w) / (h - w) * (P - D);
    let le = "M" + fe(n[0][0]).toFixed(1) + " " + Re(n[0][1]).toFixed(1);
    for (let J = 1; J < n.length; J++) le += d.smooth ? "L" + fe(n[J][0]).toFixed(1) + " " + Re(n[J][1]).toFixed(1) : "H" + fe(n[J][0]).toFixed(1) + "V" + Re(n[J][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + g + " " + M), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + le + "V" + P + "H" + fe(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + le + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + g + '" y="' + (M - 4) + '" text-anchor="end">Now</text>';
  }
  const ho = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, $s = (e, n) => {
    const i = e.split(".")[0];
    return ho[i] ? ho[i].includes(n) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, Gl = (e) => {
    const n = e.split(".")[0], i = ft(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (vl.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, _a = /* @__PURE__ */ new Map();
  let ms = 0;
  async function Ul(e) {
    let n = _a.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const w = await H({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((w == null ? void 0 : w[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (jo || []).filter((w) => w.entity_id === e).map((w) => [w.when * 1e3, String(w.state)])), n = { at: Date.now(), pts: p }, _a.set(e, n);
    }
    const i = x[e], d = n.pts.slice().sort((p, w) => p[0] - w[0]);
    return i && (!d.length || d[d.length - 1][1] !== i.state) && d.push([Date.parse(i.last_changed) || Date.now(), i.state]), d;
  }
  async function ni(e, n, i) {
    const d = await Ul(e);
    if (!n.isConnected) return;
    const p = d.map(([Fe, dt]) => [Fe, Number(dt)]);
    if (d.length > 1 && p.every(([, Fe]) => Number.isFinite(Fe))) {
      Cr(n, p, Ae(e) + ", last 24 hours");
      return;
    }
    const w = Date.now(), h = w - 864e5, g = Math.max(200, n.clientWidth || 360), M = 62, D = (Fe) => Math.max(0, Math.min(g, (Fe - h) / 864e5 * g)), P = [];
    let N = null;
    d.forEach(([Fe, dt]) => {
      const en = $s(e, dt);
      en && N == null ? N = Math.max(Fe, h) : !en && N != null && (P.push([N, Math.max(Fe, h)]), N = null);
    }), N != null && P.push([N, w]);
    const $ = Ji(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", fe = Gl(e), Re = "tfDayClip" + ++ms, le = P.map(([Fe, dt]) => fe + (dt >= w - 1e3 && Fe <= h + 1e3 ? " all day" : dt >= w - 1e3 ? " since " + Rt(Fe) : Fe <= h + 1e3 ? " until " + Rt(dt) : " " + Rt(Fe) + "–" + Rt(dt)));
    let J = "", B = -1 / 0;
    P.forEach(([Fe], dt) => {
      const en = le[dt].length * 5.4, Wt = Math.min(D(Fe), g - en);
      Wt < B + 8 || (J += '<text x="' + Wt.toFixed(1) + '" y="10">' + re(le[dt]) + "</text>", B = Wt + en);
    });
    let ke = '<text x="' + g + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Fe) => {
      let dt = new Date(w).setHours(Fe, 0, 0, 0);
      dt > w && (dt -= 864e5), D(dt) > 8 && D(dt) < g - 34 && (ke += '<text x="' + D(dt).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(Fe).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + g + " " + M), n.setAttribute("aria-label", Ae(e) + ", last 24 hours: " + (le.length ? le.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Re + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + J + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Re + ')">' + P.map(([Fe, dt]) => '<rect x="' + D(Fe).toFixed(1) + '" y="18" width="' + Math.max(2, D(dt) - D(Fe)).toFixed(1) + '" height="26" fill="' + $ + '"/>').join("") + "</g>" + (i && i >= h ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ke;
  }
  function Tr(e) {
    var d;
    const n = Number((d = x[e]) == null ? void 0 : d.state), i = Date.now();
    if (ft(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), w = Math.max(1, i - p);
      return [...Array(49)].map((h, g) => p + w * g / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / w, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, w) => [i - (48 - w) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(w / 6)) * 10) / 10]);
  }
  async function Lr(e, n) {
    var fe, Re;
    let i = we.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: tc() };
    else if (Oi(e)) i = { at: Date.now(), points: Tr(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const le = new Date(Date.now() - 864e5).toISOString(), J = await H({ type: "history/history_during_period", start_time: le, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), B = ((J == null ? void 0 : J[e]) || []).map((ke) => [ke.lu != null ? ke.lu * 1e3 : Date.parse(ke.last_updated || ke.last_changed), Number(ke.s ?? ke.state)]).filter(([ke, Fe]) => Number.isFinite(ke) && Number.isFinite(Fe));
        i = { at: Date.now(), points: B };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      we.set(e, i);
    }
    const d = n || T.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const p = x[e], w = ((fe = p == null ? void 0 : p.attributes) == null ? void 0 : fe.unit_of_measurement) || "", h = i.points.slice(), g = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(g) && !e.endsWith("_solar_power") && h.push([Date.now(), g]), h.length < 2) {
      d.setAttribute("aria-label", Ae(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = h.map((le) => le[1]), D = Math.min(...M), P = Math.max(...M), N = (le) => le.toLocaleString(void 0, { maximumFractionDigits: Math.abs(le) >= 100 ? 0 : 1 }), $ = ((Re = p == null ? void 0 : p.attributes) == null ? void 0 : Re.state_class) === "total_increasing";
    Cr(d, h, Ae(e) + ", last 24 hours: " + ($ ? "+" + N(M[M.length - 1] - M[0]) : D === P ? N(D) : N(D) + " to " + N(P)) + (w ? " " + w : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function Ar() {
    const e = T == null ? void 0 : T.querySelector("[data-solar]");
    if (!e) return;
    const n = tc();
    Cr(e, n, "Solar, last 24 hours: up to " + Ie(Math.max(...n.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Yl(e, n) {
    const i = n.entity_id, d = C.get(i) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: Fn(i) > 0 ? 0 : 100 }[e], w = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (d.pos = p), w != null && (d.tilt = w), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(i, d);
  }
  function jn(e, n, i) {
    var p;
    const d = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof d != "string" || !He[d] || !At(d) || i.brightness_pct != null || i.brightness != null ? [n, i] : n !== "turn_on" && !(n === "toggle" && ((p = x[d]) == null ? void 0 : p.state) !== "on") ? [n, i] : ["turn_on", { ...i, brightness_pct: He[d] }];
  }
  function Bi(e, n, i, d) {
    let p = { entity_id: i, ...d || {} };
    return [n, p] = jn(e, n, p), e === "cover" && Yl(n, p), tt[i] = (tt[i] || 0) + 1, si.set(Pc, JSON.stringify(tt)), Vi.call(e, n, p) ? Promise.resolve() : Promise.resolve(se(e, n, p));
  }
  function Xs(e) {
    const [n, i, d, p] = e.split("|");
    Bi(n, i, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Pi(e, n) {
    qe.set("pos|" + e, n), hn.delete(e), Aa = Aa.map(() => ""), [T, ot].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => Ht(p, n)));
    const i = T.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(n) + "%"), (y == null ? void 0 : y.id) === e) {
      const d = ot.querySelector(".tfMoreState"), p = ot.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + Fn(e) + "%");
    }
    Qt(e).forEach((d) => d.update(Di(e)));
  }
  const Zl = (e, n) => {
    const i = e.shiftKey ? 10 : 1, d = { ArrowUp: n + i, ArrowRight: n + i, ArrowDown: n - i, ArrowLeft: n - i, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Js(e, n) {
    var le;
    const i = e.dataset.blocks;
    (le = e.setPointerCapture) == null || le.call(e, n.pointerId);
    const d = (J) => {
      const B = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (J.clientX - B.left) / B.width * 100));
    }, p = d(n), w = n.clientX;
    let h = !1, g = ba(i), M = p, D = 0;
    const P = () => {
      g = Math.abs(M - g) < 0.2 ? M : g + (M - g) * 0.14, Pi(i, g), D = requestAnimationFrame(P);
    }, N = () => {
      h || (h = !0, e.classList.add("fine"), D = requestAnimationFrame(P));
    }, $ = setTimeout(N, 350), fe = (J) => {
      M = d(J), Math.abs(J.clientX - w) > 6 && (clearTimeout($), N());
    }, Re = () => {
      clearTimeout($), cancelAnimationFrame(D), e.removeEventListener("pointermove", fe), e.removeEventListener("pointerup", Re), e.removeEventListener("pointercancel", Re), e.classList.remove("fine"), Pi(i, h ? Math.round(g) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), Ga("pos", i);
    };
    e.addEventListener("pointermove", fe), e.addEventListener("pointerup", Re), e.addEventListener("pointercancel", Re);
  }
  function Qs(e) {
    var p;
    const [n, i] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    j = { key: n, id: i, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, hn.delete(n), rn(), (p = T.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function Pn(e) {
    var n;
    ve = e.dataset.area, T.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var p;
      const d = i === e;
      i.classList.toggle("active", d), i.setAttribute("aria-expanded", String(d)), (p = i.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), hn.set("areas", Gr(((n = T.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const _r = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [i, d] = Za(e);
      return Math.round(i + n * (d - i));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var i;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((i = ft(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function Ii(e, n, i, d) {
    var M;
    const p = _r[n].value(i, d);
    qe.set(n + "|" + i, p);
    const w = Math.round(d * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 8px) * " + d + ")";
      const [D, P] = e.querySelectorAll("span");
      D.classList.toggle("lit", d > 0.08), P.classList.toggle("lit", d > 0.92), hn.delete(i), Aa = Aa.map(() => ""), Qt(i).forEach((N) => N.update(Di(i)));
    } else if (h) h.style.width = w;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = w;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const g = (M = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = _r[n].text(i, p));
  }
  function Ga(e, n) {
    const i = qe.get(e + "|" + n), [d, p, w] = _r[e].send(n, i), h = () => setTimeout(() => {
      qe.delete(e + "|" + n), rn();
    }, 1500);
    Bi(d, p, n, w).then(h, h);
  }
  function ai(e) {
    e.addEventListener("click", (n) => {
      var d, p;
      const i = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Sa && !n.target.closest(".tfBoardMenu,[data-board-more]") && gn(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (Sa == null ? void 0 : Sa.key) === i.dataset.boardMore ? gn(!0) : ki(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) os(Sa.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) lr(i.dataset.boardShow);
        else if (i.dataset.favHide) Pt(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) tr(i.dataset.energyPick);
        else if (i.dataset.act) Xs(i.dataset.act);
        else if (i.hasAttribute("data-details")) hs(!(y != null && y.details));
        else if (i.hasAttribute("data-details-close")) hs(!1);
        else if (i.dataset.summary) Rs(i.dataset.summary, i);
        else if (i.dataset.star) Fa(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const w = y.id;
          y = y.back, fs(), (d = ot.querySelector('.tfMore [data-more="' + CSS.escape(w) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) Mr("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([w, h, g, M]) => Bi(w, h, g, M).catch(() => {
        }));
        else if (i.dataset.more) Mr(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) Ni();
        else if (i.dataset.go) so("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) lo();
        else if (i.dataset.open) Qs(i);
        else if (i.hasAttribute("data-close")) {
          const w = j;
          j = null, hn.delete(w.key), rn(), (p = T.querySelector('[data-open="' + CSS.escape(w.key + "|" + w.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && Pn(i);
    }), e.addEventListener("keydown", (n) => {
      var d, p, w, h, g, M, D;
      const i = n.target;
      if ((d = i.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Qs(i)), (p = i.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), tr(i.dataset.energyPick)), (w = i.classList) != null && w.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Pn(i)), (h = i.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Rs(i.dataset.summary, i)), n.key === "Escape" && Sa && e === T) {
        n.preventDefault(), gn(!0);
        return;
      }
      if (n.key === "Escape" && Sn && e === T) {
        n.preventDefault(), $o(!1), (g = c("dashEditNav")) == null || g.focus();
        return;
      }
      if (n.key === "Escape" && Le && e === T && (n.preventDefault(), lo()), (M = i.dataset) != null && M.blocks) {
        const P = i.dataset.blocks, N = Zl(n, Math.round(ba(P)));
        if (N == null) return;
        n.preventDefault(), Pi(P, N), clearTimeout(ue.get(P)), ue.set(P, setTimeout(() => Ga("pos", P), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [P, N] = i.dataset.drag.split("|"), $ = Number(i.getAttribute("aria-valuenow")) / 100, fe = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, $ + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        Ii(i, P, N, fe), Ga(P, N);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var en;
      const i = n.target.closest("[data-blocks]");
      if (i && n.button === 0) {
        n.preventDefault(), Js(i, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, w] = d.dataset.drag.split("|");
      if (p === "bright" && !At(w)) {
        Xs(xt("light", "toggle", w));
        return;
      }
      const h = p === "bright" && ((en = x[w]) == null ? void 0 : en.state) !== "on", g = n.pointerType !== "mouse", M = p === "tilt" ? 4 : 0, D = () => d.getBoundingClientRect().width - M * 2, P = (Wt) => {
        const jt = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Wt.clientX - jt.left - M) / D()));
      };
      let N = g ? "waiting" : h ? "pressed" : "dragging", $ = 0, fe = 0;
      const Re = n.clientX, le = n.clientY, J = (Wt, jt) => Math.hypot(Wt.clientX - Re, Wt.clientY - le) > jt, B = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      g || (n.preventDefault(), B()), N === "dragging" && Ii(d, p, w, P(n));
      const ke = g && setTimeout(() => {
        var Wt, jt;
        N === "waiting" && (N = "held", E = d, d.classList.add("held"), B(), (Wt = navigator.userActivation) != null && Wt.hasBeenActive && ((jt = navigator.vibrate) == null || jt.call(navigator, 8)), $ = h ? (He[w] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, fe = Re, Ii(d, p, w, $));
      }, k), Fe = (Wt) => {
        N === "waiting" && J(Wt, 8) ? N = "gone" : N === "pressed" && J(Wt, 4) && (N = "dragging"), N === "held" ? Ii(d, p, w, Math.max(0, Math.min(1, $ + (Wt.clientX - fe) / D()))) : N === "dragging" && Ii(d, p, w, P(Wt));
      }, dt = (Wt) => {
        clearTimeout(ke), ["pointermove", "pointerup", "pointercancel"].forEach((jt, We) => d.removeEventListener(jt, We ? dt : Fe)), d.classList.remove("held"), E === d && (E = null), N === "held" || N === "dragging" ? Ga(p, w) : Wt.type === "pointerup" && h && (N === "waiting" || N === "pressed") && Bi("light", "turn_on", w).catch(() => {
        });
      };
      d.addEventListener("pointermove", Fe), d.addEventListener("pointerup", dt), d.addEventListener("pointercancel", dt);
    }), e.addEventListener("touchmove", (n) => {
      E && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return T && b && (Qa(), ai(T), ai(ot), ot.addEventListener("click", (e) => {
    e.target === ot && Ni();
  }), (Er = a.getElementById("homeNav")) == null || Er.addEventListener("click", () => {
    Le && lo();
  }), (el = a.querySelector(".bottomNav")) == null || el.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + qc + "</button>"), (Hi = c("dashEditNav")) == null || Hi.addEventListener("click", () => $o(!Sn)), T.addEventListener("pointerdown", Vl), T.addEventListener("hass-action", (e) => {
    var d, p;
    const n = (p = (d = e.target).closest) == null ? void 0 : p.call(d, ".tfDac"), i = n == null ? void 0 : n.dataset.k;
    !i || !n.dataset.dac.startsWith("dash:") || Sn || (e.stopPropagation(), Mr(i, n));
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && ar() !== nr ? rn() : sr();
  }).observe(T), window.addEventListener("resize", sr, { passive: !0 }), ot.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), y != null && y.details ? hs(!1) : Ni());
  })), ee(), {
    update(e) {
      if (!b) return;
      const n = !Object.keys(x).length;
      x = e || {};
      for (const i in x) i.startsWith("light.") && x[i].state === "on" && At(i) && Ve(i, wo(x[i]));
      n ? co() : rn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      bo = !0, Ye == null || Ye.destroy(), Ye = null, nt == null || nt.forEach((e) => e.destroy()), nt = null;
    },
    resume() {
      bo = !1, !(!b || !(T != null && T.querySelector("[data-tf]"))) && (st.isConnected && zi(st.style.order), ji());
    }
  };
}
const ff = "0.53.0", xd = "move_assistant", mf = "move_assistant", zc = "move_assistant_checkin_reminder";
function gf() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class vf extends HTMLElement {
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
    const o = !this._hass;
    if (this._hass = l, o) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (c = this._test) == null || c.update(l.states));
  }
  connectedCallback() {
    var l, o;
    (l = this._app) == null || l.resume(), (o = this._test) == null || o.resume();
  }
  disconnectedCallback() {
    var l, o;
    (l = this._app) == null || l.suspend(), (o = this._test) == null || o.suspend();
  }
  async _init() {
    gf();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Su}${Cu}${Tu}</style>${Lu}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: xd
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Yu(l, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, v) => this._fire(m, v),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, v) => {
        var b, L;
        return (L = (b = this._hass) == null ? void 0 : b.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(v, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, v;
        return Object.keys(((v = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : v.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = hf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var v;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (v = this._app) == null || v.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: xd }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: xd,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, o = {}) {
    var c, m;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((m = this._hass) == null || m.callWS({
      type: "fire_event",
      event_type: mf,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${zc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (v) {
        if ((v == null ? void 0 : v.status_code) !== 404 && (v == null ? void 0 : v.status) !== 404) throw v;
      }
      return;
    }
    const c = (v) => `${v}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: zc,
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
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(l) {
    var c;
    const o = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    o && (o.textContent = l, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", vf), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${ff} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
